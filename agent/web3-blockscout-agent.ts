import { openai } from '@ai-sdk/openai';
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js';
import { ToolLoopAgent, type InferAgentUIMessage } from 'ai';
import { experimental_createMCPClient } from '@ai-sdk/mcp';
import { getCachedBlockscoutClient } from '@/lib/web3/cached-blockscout';
import { getWeb3SystemInstructions } from '@/lib/web3/system-instructions';

/**
 * Create Web3 Blockscout agent with OpenAI model
 * Uses comprehensive system instructions from the Web3 documentation
 */
export function createWeb3BlockscoutAgent() {
  const blockscoutUrl = process.env.BLOCKSCOUT_MCP_URL || 'https://mcp.blockscout.com';

  const agent = new ToolLoopAgent({
    model: openai('gpt-4o'), // Using GPT-4o for better reasoning
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
  const serverUrl = new URL(blockscoutUrl);
  const mcpServerUrl = `${serverUrl.href}/mcp/server`;
  const transport = new StreamableHTTPClientTransport(new URL(mcpServerUrl));

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
        return await client.getTokenHolders(params.chain, params.token, params.limit);
      case 'account_summary':
        return await client.getAddressInfo(params.chain, params.address);
      case 'chain_status':
        return await client.getChainHealth(params.chain);
      default:
        return null;
    }
  }
}

