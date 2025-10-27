import { openai } from '@ai-sdk/openai';
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js';
import { ToolLoopAgent, type InferAgentUIMessage } from 'ai';
import { experimental_createMCPClient } from '@ai-sdk/mcp';
import { getCachedBlockscoutClient } from '@/lib/web3/cached-blockscout';

/**
 * Create Web3 Blockscout agent with OpenAI model
 */
export function createWeb3BlockscoutAgent() {
  const blockscoutUrl = process.env.BLOCKSCOUT_MCP_URL || 'https://mcp.blockscout.com';

  const agent = new ToolLoopAgent({
    model: openai('gpt-4o-mini'), // Using GPT-4o-mini for cost-effective reasoning
    providerOptions: {
      openai: {
        mcpServers: [
          {
            type: 'url',
            name: 'blockscout',
            url: blockscoutUrl,
          },
        ],
      },
    },
    maxSteps: 10, // Allow multi-step reasoning
    stopWhen: ({ toolResults }) => {
      // Stop if we've had multiple successful tool calls
      return toolResults.length >= 5;
    },
  });

  return agent;
}

// Singleton agent instance
let agentInstance: ReturnType<typeof createWeb3BlockscoutAgent> | null = null;

/**
 * Get or create the Web3 Blockscout agent singleton
 */
export function getWeb3BlockscoutAgent() {
  if (!agentInstance) {
    agentInstance = createWeb3BlockscoutAgent();
  }
  return agentInstance;
}

export type Web3AgentMessage = InferAgentUIMessage<ReturnType<typeof createWeb3BlockscoutAgent>>;

/**
 * Helper to create MCP client for direct tool access
 */
export async function getMCPClient() {
  const blockscoutUrl = process.env.BLOCKSCOUT_MCP_URL || 'https://mcp.blockscout.com';
  const url = new URL('/mcp/server', blockscoutUrl);
  const transport = new StreamableHTTPClientTransport(url.toString());

  const client = await experimental_createMCPClient({
    transport,
  });

  return client;
}

/**
 * Enhanced agent with caching support
 */
export class CachedWeb3Agent {
  private agent: ReturnType<typeof createWeb3BlockscoutAgent>;
  private cachedClient = getCachedBlockscoutClient();

  constructor() {
    this.agent = createWeb3BlockscoutAgent();
  }

  /**
   * Execute query with cache-first pattern
   */
  async executeQuery(query: string, conversationId?: string) {
    // The agent will use MCP tools which will hit the cached Blockscout client
    return this.agent;
  }

  /**
   * Get cached data before AI processing
   */
  async getCachedContext(queryType: string, params: any) {
    // This would fetch from cache if available
    const client = this.cachedClient;
    
    switch (queryType) {
      case 'latest_block':
        return await client.getLatestBlock(params.chain);
      case 'token_holders':
        return await client.getTokenHolders(params.token, params.limit, params.chain);
      case 'account_summary':
        return await client.getAccountSummary(params.address, params.chain);
      case 'contract_events':
        return await client.getContractEvents(params.contract, params.limit, params.chain);
      case 'chain_status':
        return await client.getChainHealth(params.chain);
      default:
        return null;
    }
  }
}

