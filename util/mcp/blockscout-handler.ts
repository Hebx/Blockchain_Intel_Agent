import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';

/**
 * Initialize Blockscout MCP server with Web3-specific tools
 */
export function initializeBlockscoutMcpServer(
  server: McpServer,
  blockscoutUrl: string,
): void {
  // Tool: Get Latest Block
  server.tool(
    'get_latest_block',
    'Get the latest block information from the blockchain',
    {
      chain: z.string().optional().describe('Blockchain name (e.g., ethereum, base)'),
    },
    { title: '🔗 Latest Block' },
    async ({ chain = 'ethereum' }) => {
      try {
        const response = await fetch(
          `${blockscoutUrl}/api/v2/blockchain/{chain}/blocks/latest`,
        );
        const data = await response.json();
        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(data, null, 2),
            },
          ],
        };
      } catch (error) {
        return {
          content: [
            {
              type: 'text',
              text: `Error fetching latest block: ${error}`,
            },
          ],
          isError: true,
        };
      }
    },
  );

  // Tool: Get Account Info
  server.tool(
    'get_account_info',
    'Get comprehensive account information including balance, transaction count, and token holdings',
    {
      address: z.string().describe('Ethereum address (0x...)'),
      chain: z.string().optional(),
    },
    { title: '👤 Account Info' },
    async ({ address, chain = 'ethereum' }) => {
      try {
        const [balanceResponse, txCountResponse] = await Promise.all([
          fetch(`${blockscoutUrl}/api/v2/addresses/${address}?chain=${chain}`),
          fetch(
            `${blockscoutUrl}/api/v2/addresses/${address}/transactions?chain=${chain}&limit=1`,
          ),
        ]);

        const balanceData = await balanceResponse.json();
        const txData = await txCountResponse.json();

        const result = {
          address,
          chain,
          balance: balanceData.coin_balance || '0',
          transactionCount: txData.total_count || 0,
          timestamp: balanceData.creation_tx?.timestamp || null,
        };

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(result, null, 2),
            },
          ],
        };
      } catch (error) {
        return {
          content: [
            {
              type: 'text',
              text: `Error fetching account info: ${error}`,
            },
          ],
          isError: true,
        };
      }
    },
  );

  // Tool: Get Token Holders
  server.tool(
    'get_token_holders',
    'Get the top holders of a specific token',
    {
      tokenAddress: z.string().describe('ERC-20 token contract address'),
      limit: z.number().optional().default(10),
      chain: z.string().optional(),
    },
    { title: '🪙 Token Holders' },
    async ({ tokenAddress, limit = 10, chain = 'ethereum' }) => {
      try {
        const response = await fetch(
          `${blockscoutUrl}/api/v2/tokens/${tokenAddress}/holders?chain=${chain}&limit=${limit}`,
        );
        const data = await response.json();

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(data, null, 2),
            },
          ],
        };
      } catch (error) {
        return {
          content: [
            {
              type: 'text',
              text: `Error fetching token holders: ${error}`,
            },
          ],
          isError: true,
        };
      }
    },
  );

  // Tool: Get Contract Events
  server.tool(
    'get_contract_events',
    'Get recent events emitted by a smart contract',
    {
      contractAddress: z.string().describe('Smart contract address'),
      limit: z.number().optional().default(20),
      chain: z.string().optional(),
    },
    { title: '📋 Contract Events' },
    async ({ contractAddress, limit = 20, chain = 'ethereum' }) => {
      try {
        const response = await fetch(
          `${blockscoutUrl}/api/v2/smart-contracts/${contractAddress}/events?chain=${chain}&limit=${limit}`,
        );
        const data = await response.json();

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(data, null, 2),
            },
          ],
        };
      } catch (error) {
        return {
          content: [
            {
              type: 'text',
              text: `Error fetching contract events: ${error}`,
            },
          ],
          isError: true,
        };
      }
    },
  );

  // Tool: Get Chain Status
  server.tool(
    'get_chain_status',
    'Get the current health and status of the blockchain network',
    {
      chain: z.string().optional(),
    },
    { title: '🌐 Chain Status' },
    async ({ chain = 'ethereum' }) => {
      try {
        const [healthResponse, chainStatusResponse] = await Promise.all([
          fetch(`${blockscoutUrl}/api/v2/blockscout-health-check`),
          fetch(`${blockscoutUrl}/api/v2/blockchain/${chain}/info`),
        ]);

        const health = await healthResponse.json();
        const chainInfo = await chainStatusResponse.json();

        const result = {
          chain,
          health: health.status || 'unknown',
          latestBlock: chainInfo?.blocks?.latest_number || 'unknown',
          timestamp: chainInfo?.blocks?.latest_timestamp || null,
        };

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(result, null, 2),
            },
          ],
        };
      } catch (error) {
        return {
          content: [
            {
              type: 'text',
              text: `Error fetching chain status: ${error}`,
            },
          ],
          isError: true,
        };
      }
    },
  );
}

