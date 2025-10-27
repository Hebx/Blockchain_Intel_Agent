import { streamText, convertToModelMessages } from 'ai';
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
    const { messages, conversationId } = await req.json();
    const query = messages[messages.length - 1]?.content || '';

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
    const queryHash = createHash('sha256').update(query).digest('hex');
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

    if (parsedQuery.type !== 'unknown') {
      try {
        // Map chain name to chain ID (Ethereum = 1)
        const chainIdMap: Record<string, number> = {
          ethereum: 1,
          base: 8453,
          optimism: 10,
          polygon: 137,
          arbitrum: 42161,
        };
        const chainId = chainIdMap[parsedQuery.entities.chain?.toLowerCase() || 'ethereum'] || 1;

        switch (parsedQuery.type) {
          case 'latest_block':
            context = await cachedClient.getLatestBlock(chainId);
            break;
          case 'token_holders':
            if (parsedQuery.entities.token) {
              // Use getTokensByAddress for token holders info
              context = await cachedClient.getTokensByAddress(chainId, parsedQuery.entities.token);
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
        }
      } catch (error) {
        console.error('Error fetching blockchain data:', error);
        context = { error: 'Failed to fetch blockchain data', details: error };
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
    };
    
    const { prompt, tokenEstimate } = buildOptimizedPrompt(promptContext);
    console.log('Prompt token estimate:', tokenEstimate);

    // 9. Stream AI response
    const result = streamText({
      model: openai('gpt-4o-mini'),
      prompt,
      maxTokens: 2000,
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
 * Stream cached response
 */
function streamCachedResponse(text: string): Response {
  const stream = new ReadableStream({
    start(controller) {
      controller.enqueue(new TextEncoder().encode(`data: ${JSON.stringify({ text })}\n\n`));
      controller.close();
    },
  });

  return new Response(stream, {
    headers: { 'Content-Type': 'text/event-stream' },
  });
}

