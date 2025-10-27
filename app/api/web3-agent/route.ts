import { streamText, generateText, convertToModelMessages } from 'ai';
import { openai } from '@ai-sdk/openai';
import { getCachedBlockscoutClient } from '@/lib/web3/cached-blockscout';
import { parseWeb3Query, type ParsedQuery } from '@/lib/web3/query-parser';
import { buildOptimizedPrompt } from './prompt-builder';
import { getCacheManager, generateAIOutputCacheKey } from '@/lib/cache/cache-manager';
import { getConversationManager } from '@/lib/cache/conversation-manager';
import { getRateLimiter, getRateLimitKey } from '@/lib/web3/rate-limiter';
import { CACHE_TTL } from '@/lib/cache/ttl-config';
import { createHash } from 'crypto';

export const maxDuration = 30;

/**
 * Main Web3 Agent API endpoint with cache-first workflow
 */
export async function POST(req: Request) {
  const startTime = Date.now();

  try {
    // 1. Extract request data
    const { messages, conversationId, chainId: requestChainId } = await req.json();
    console.log('Received messages:', JSON.stringify(messages, null, 2));
    
    // Extract query - handle multiple message formats
    const lastMessage = messages[messages.length - 1];
    const query = lastMessage?.parts?.[0]?.text || 
                  lastMessage?.content || 
                  lastMessage?.text || 
                  '';
    
    console.log('Extracted query:', query);
    console.log('Request chainId:', requestChainId);

    // 2. Rate limiting (10 requests per second)
    const rateLimiter = getRateLimiter();
    const identifier = getRateLimitKey(req);
    
    if (!(await rateLimiter.checkAndIncrement(identifier, 10))) {
      return new Response(
        JSON.stringify({ 
          error: 'Rate limit exceeded. Please try again later.',
          retryAfter: await rateLimiter.getTimeRemaining(identifier)
        }),
        { status: 429, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 3. Parse query
    const parsedQuery: ParsedQuery = parseWeb3Query(query);
    console.log('Parsed query:', parsedQuery);

    // 4. Generate query hash for AI output caching
    // Include parsed query info in the cache key to make it more specific
    const queryHash = createHash('sha256')
      .update(query + JSON.stringify(parsedQuery.entities))
      .digest('hex');
    const aiOutputKey = generateAIOutputCacheKey(queryHash);

    // 5. Check AI output cache
    const cacheManager = getCacheManager();
    const cachedOutput = await cacheManager.get(aiOutputKey);
    
    if (cachedOutput) {
      console.log('Cache HIT for AI output');
      return streamCachedResponse(cachedOutput);
    }

    console.log('Cache MISS for AI output - fetching data');

    // 6. Get conversation history
    const conversationManager = getConversationManager();
    const history = await conversationManager.getHistory(conversationId || 'default');

    // 7. Fetch blockchain data (cache-aware)
    const cachedClient = getCachedBlockscoutClient();
    let context: any = null;

    // Map chain name to chain ID (Ethereum = 1)
    const chainIdMap: Record<string, number> = {
      ethereum: 1,
      base: 8453,
      optimism: 10,
      polygon: 137,
      arbitrum: 42161,
    };
    
    // Use provided chainId from request, fall back to parsed query chain, then default to ethereum
    const chainId = requestChainId || 
                    chainIdMap[parsedQuery.entities.chain?.toLowerCase() || 'ethereum'] || 
                    1;

    if (parsedQuery.type !== 'unknown') {
      try {
        switch (parsedQuery.type) {
          case 'latest_block':
            context = await cachedClient.getLatestBlock(chainId);
            break;
          case 'token_holders':
            // Try to resolve token symbol to address
            let tokenAddress: string | null = parsedQuery.entities.token || null;
            
            // If no token is specified, check if we can derive from the query
            if (!tokenAddress && query.includes('USDC')) {
              tokenAddress = await cachedClient.lookupTokenBySymbol(chainId, 'USDC') || null;
            } else if (!tokenAddress && query.includes('USDT')) {
              tokenAddress = await cachedClient.lookupTokenBySymbol(chainId, 'USDT') || null;
            } else if (!tokenAddress && query.includes('DAI')) {
              tokenAddress = await cachedClient.lookupTokenBySymbol(chainId, 'DAI') || null;
            } else if (tokenAddress && !tokenAddress.startsWith('0x')) {
              // Looks like a symbol, try to look it up
              tokenAddress = await cachedClient.lookupTokenBySymbol(chainId, tokenAddress) || null;
            }
            
            if (tokenAddress) {
              console.log('Looking up token holders for:', tokenAddress);
              const limit = parsedQuery.entities.limit || 10;
              context = await cachedClient.getTokenHolders(chainId, tokenAddress, limit);
            } else {
              context = { error: 'Token address could not be determined from query' };
            }
            break;
          case 'account_summary':
            if (parsedQuery.entities.address) {
              context = await cachedClient.getAddressInfo(chainId, parsedQuery.entities.address);
            }
            break;
          case 'contract_events':
            if (parsedQuery.entities.address) {
              // Use getTransactionsByAddress for contract interactions
              context = await cachedClient.getTransactionsByAddress(chainId, parsedQuery.entities.address);
            }
            break;
          case 'chain_status':
            context = await cachedClient.getChainHealth(chainId);
            break;
          case 'transaction_info':
          case 'transaction_summary':
            if (parsedQuery.entities.txHash) {
              console.log('Looking up transaction:', parsedQuery.entities.txHash);
              context = await cachedClient.getTransactionInfo(chainId, parsedQuery.entities.txHash);
            } else {
              context = { error: 'Transaction hash not provided' };
            }
            break;
          case 'transaction_logs':
            if (parsedQuery.entities.txHash) {
              console.log('Looking up transaction logs:', parsedQuery.entities.txHash);
              context = await cachedClient.getTransactionLogs(chainId, parsedQuery.entities.txHash);
            } else {
              context = { error: 'Transaction hash not provided' };
            }
            break;
          case 'token_transfers':
            if (parsedQuery.entities.address) {
              console.log('Looking up token transfers for:', parsedQuery.entities.address);
              const limit = parsedQuery.entities.limit || 50;
              context = await cachedClient.getTokenTransfers(chainId, parsedQuery.entities.address, limit);
            } else {
              context = { error: 'Address not provided' };
            }
            break;
          case 'nft_holdings':
            if (parsedQuery.entities.address) {
              console.log('Looking up NFT holdings for:', parsedQuery.entities.address);
              const limit = parsedQuery.entities.limit || 50;
              context = await cachedClient.getNFTTokens(chainId, parsedQuery.entities.address, limit);
            } else {
              context = { error: 'Address not provided' };
            }
            break;
          case 'block_info':
            if (parsedQuery.entities.block) {
              console.log('Looking up block:', parsedQuery.entities.block);
              context = await cachedClient.getBlockInfo(chainId, parsedQuery.entities.block);
            } else {
              context = { error: 'Block number or hash not provided' };
            }
            break;
        }
      } catch (error) {
        console.error('Error fetching blockchain data:', error);
        context = { error: 'Failed to fetch blockchain data', details: error instanceof Error ? error.message : String(error) };
      }
    }

    // DEBUG: Log context data
    console.log('Fetching blockchain data for query type:', parsedQuery.type);
    console.log('Chain ID:', chainId);
    console.log('Context data received:', context ? 'Yes' : 'No');
    if (context && !context.error) {
      console.log('Context preview:', JSON.stringify(context).substring(0, 200));
    }

    // 8. Build prompt with context
    const promptContext = {
      query,
      cachedContext: context,
      conversationHistory: history,
      queryType: parsedQuery.type,
      chainId,
      chainName: Object.entries(chainIdMap).find(([_, id]) => id === chainId)?.[0] || 'ethereum',
    };
    
    const { prompt, tokenEstimate } = buildOptimizedPrompt(promptContext);
    console.log('Prompt token estimate:', tokenEstimate);
    console.log('Chain context:', promptContext.chainName, chainId);

    // 9. Stream AI response
    const result = streamText({
      model: openai('gpt-4o-mini'),
      prompt,
      onFinish: async ({ text, usage }) => {
        console.log(`AI Response completed in ${Date.now() - startTime}ms`);
        console.log(`Tokens: ${usage.totalTokens}`);

        // Cache AI output
        await cacheManager.set(aiOutputKey, text, CACHE_TTL.AI_OUTPUT);

        // Save to conversation history
        if (conversationId) {
          await conversationManager.saveMessage(conversationId, {
            id: `msg_${Date.now()}`,
            role: 'assistant',
            content: text,
            timestamp: Date.now(),
            metadata: { usage, responseTime: Date.now() - startTime },
          });
        }
      },
    });

    return result.toUIMessageStreamResponse();

  } catch (error) {
    console.error('Web3 Agent API Error:', error);
    return new Response(
      JSON.stringify({ 
        error: 'An error occurred processing your request',
        details: error instanceof Error ? error.message : 'Unknown error'
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

/**
 * Stream cached response in proper AI SDK format
 */
function streamCachedResponse(text: string): Response {
  // Return cached text in AI SDK streaming format
  const encoder = new TextEncoder();
  let buffer = '';

  // Wrap in proper AI SDK message format
  buffer += '0:""\n';
  
  // Add text chunks
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const escapedChar = char.replace(/"/g, '\\"');
    buffer += `0:"${escapedChar}"\n`;
  }

  // Add finish delimiter
  buffer += 'd:{"finishReason":"stop","usage":{"promptTokens":0,"completionTokens":0,"totalTokens":0}}\n';

  const stream = new ReadableStream({
    start(controller) {
      const uint8Array = encoder.encode(buffer);
      controller.enqueue(uint8Array);
      controller.close();
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}

