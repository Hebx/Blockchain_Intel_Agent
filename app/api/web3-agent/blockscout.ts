/**
 * Backend Blockscout MCP Client
 * This module provides server-side access to Blockscout blockchain data
 */

import { BlockscoutMcpClient } from '@/lib/web3/blockscout-mcp';

const blockscoutUrl = process.env.BLOCKSCOUT_MCP_URL || 'https://mcp.blockscout.com';
const defaultChain = process.env.DEFAULT_CHAIN || 'ethereum';

// Singleton instance
let clientInstance: BlockscoutMcpClient | null = null;

/**
 * Get or create Blockscout MCP client instance
 */
export function getBlockscoutClient(): BlockscoutMcpClient {
  if (!clientInstance) {
    clientInstance = new BlockscoutMcpClient({
      mcpServerUrl: blockscoutUrl,
    });
  }
  return clientInstance;
}

/**
 * Execute query using Blockscout MCP client
 */
export async function executeBlockscoutQuery(queryType: string, params: any) {
  const client = getBlockscoutClient();

  try {
    switch (queryType) {
      case 'latest_block':
        return await client.getLatestBlock(params.chain || defaultChain);

      case 'token_holders':
        return await client.getTokenHolders(
          params.token!,
          params.limit || 10,
          params.chain || defaultChain,
        );

      case 'contract_events':
        return await client.getContractEvents(
          params.contract!,
          params.limit || 20,
          params.chain || defaultChain,
        );

      case 'account_summary':
        return await client.getAccountSummary(
          params.address!,
          params.chain || defaultChain,
        );

      case 'chain_status':
        return await client.getChainHealth(params.chain || defaultChain);

      default:
        throw new Error(`Unknown query type: ${queryType}`);
    }
  } catch (error) {
    console.error(`Blockscout query error (${queryType}):`, error);
    throw error;
  }
}

/**
 * Health check for Blockscout connection
 */
export async function checkBlockscoutHealth() {
  try {
    const response = await fetch(`${blockscoutUrl}/api/v2/blockscout-health-check`);
    const data = await response.json();
    return {
      healthy: data.status === 'ok',
      status: data,
    };
  } catch (error) {
    return {
      healthy: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

