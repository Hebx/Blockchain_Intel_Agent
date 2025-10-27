import { NextResponse } from 'next/server';
import { getCachedBlockscoutClient } from '@/lib/web3/cached-blockscout';
import { parseWeb3Query } from '@/lib/web3/query-parser';
import { getRateLimiter, getRateLimitKey } from '@/lib/web3/rate-limiter';

export const maxDuration = 30;

/**
 * REST API endpoint for structured blockchain queries
 * Returns JSON data instead of streaming AI responses
 */
export async function POST(req: Request) {
  try {
    // 1. Rate limiting
    const rateLimiter = getRateLimiter();
    const identifier = getRateLimitKey(req);
    
    if (!(await rateLimiter.checkAndIncrement(identifier, 10))) {
      return NextResponse.json(
        { 
          error: 'Rate limit exceeded',
          retryAfter: await rateLimiter.getTimeRemaining(identifier)
        },
        { status: 429 }
      );
    }

    // 2. Parse request body
    const { query, chain = 'ethereum' } = await req.json();

    if (!query) {
      return NextResponse.json(
        { error: 'Query is required' },
        { status: 400 }
      );
    }

    // 3. Parse query
    const parsedQuery = parseWeb3Query(query);
    
    if (parsedQuery.type === 'unknown') {
      return NextResponse.json(
        { error: 'Could not parse query. Please be more specific.' },
        { status: 400 }
      );
    }

    // 4. Fetch data using cached client
    const client = getCachedBlockscoutClient();
    let data: any;

    switch (parsedQuery.type) {
      case 'latest_block':
        data = await client.getLatestBlock(chain);
        break;

      case 'token_holders':
        if (!parsedQuery.entities.token) {
          return NextResponse.json(
            { error: 'Token address is required' },
            { status: 400 }
          );
        }
        data = await client.getTokenHolders(
          parsedQuery.entities.token,
          parsedQuery.entities.limit || 10,
          chain
        );
        break;

      case 'contract_events':
        if (!parsedQuery.entities.contract) {
          return NextResponse.json(
            { error: 'Contract address is required' },
            { status: 400 }
          );
        }
        data = await client.getContractEvents(
          parsedQuery.entities.contract,
          parsedQuery.entities.limit || 20,
          chain
        );
        break;

      case 'account_summary':
        if (!parsedQuery.entities.address) {
          return NextResponse.json(
            { error: 'Wallet address is required' },
            { status: 400 }
          );
        }
        data = await client.getAccountSummary(
          parsedQuery.entities.address,
          chain
        );
        break;

      case 'chain_status':
        data = await client.getChainHealth(chain);
        break;

      default:
        return NextResponse.json(
          { error: 'Unsupported query type' },
          { status: 400 }
        );
    }

    // 5. Return structured data
    return NextResponse.json({
      query: parsedQuery,
      data,
      timestamp: Date.now(),
    });

  } catch (error) {
    console.error('Query API Error:', error);
    return NextResponse.json(
      {
        error: 'An error occurred processing your query',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

/**
 * GET endpoint for health check
 */
export async function GET() {
  const client = getCachedBlockscoutClient();
  
  try {
    // Simple health check
    await client.getChainHealth('ethereum');
    
    return NextResponse.json({
      status: 'healthy',
      timestamp: Date.now(),
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: 'unhealthy',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 503 }
    );
  }
}

