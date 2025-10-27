import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js';
import { experimental_createMCPClient } from '@ai-sdk/mcp';

export interface BlockscoutMcpClientOptions {
  mcpServerUrl: string;
}

export class BlockscoutMcpClient {
  private client: Awaited<ReturnType<typeof experimental_createMCPClient>> | null = null;
  private transport: StreamableHTTPClientTransport;
  private mcpServerUrl: string;

  constructor({ mcpServerUrl }: BlockscoutMcpClientOptions) {
    this.mcpServerUrl = mcpServerUrl;
    this.transport = new StreamableHTTPClientTransport(new URL(mcpServerUrl));
  }

  /**
   * Initialize MCP client connection
   */
  async connect(): Promise<void> {
    if (!this.client) {
      this.client = await experimental_createMCPClient({
        transport: this.transport,
      });
    }
  }

  /**
   * Fetch blockchain data using MCP tools
   */
  async fetchBlockchainData(query: string): Promise<any> {
    await this.connect();
    if (!this.client) throw new Error('MCP client not initialized');

    const tools = await this.client.tools();
    // Find appropriate tool and execute
    // This is a placeholder - actual implementation would parse query and select tool
    return tools;
  }

  /**
   * Get latest block information
   */
  async getLatestBlock(chain: string = 'ethereum'): Promise<any> {
    await this.connect();
    if (!this.client) throw new Error('MCP client not initialized');

    try {
      const response = await fetch(
        `${this.mcpServerUrl}/api/v2/blockchain/${chain}/blocks/latest`,
      );
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Failed to fetch latest block: ${error}`);
    }
  }

  /**
   * Get token holders for a specific token
   */
  async getTokenHolders(
    address: string,
    limit: number = 10,
    chain: string = 'ethereum',
  ): Promise<any> {
    await this.connect();

    try {
      const response = await fetch(
        `${this.mcpServerUrl}/api/v2/tokens/${address}/holders?chain=${chain}&limit=${limit}`,
      );
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Failed to fetch token holders: ${error}`);
    }
  }

  /**
   * Get account summary including balance, transaction count, etc.
   */
  async getAccountSummary(
    address: string,
    chain: string = 'ethereum',
  ): Promise<any> {
    await this.connect();

    try {
      const [balanceResponse, txResponse] = await Promise.all([
        fetch(`${this.mcpServerUrl}/api/v2/addresses/${address}?chain=${chain}`),
        fetch(
          `${this.mcpServerUrl}/api/v2/addresses/${address}/transactions?chain=${chain}&limit=10`,
        ),
      ]);

      const balanceData = await balanceResponse.json();
      const txData = await txResponse.json();

      return {
        address,
        chain,
        balance: balanceData.coin_balance || '0',
        transactionCount: txData.total_count || 0,
        recentTransactions: txData.items || [],
        timestamp: balanceData.creation_tx?.timestamp || null,
      };
    } catch (error) {
      throw new Error(`Failed to fetch account summary: ${error}`);
    }
  }

  /**
   * Get contract events
   */
  async getContractEvents(
    contract: string,
    limit: number = 20,
    chain: string = 'ethereum',
  ): Promise<any> {
    await this.connect();

    try {
      const response = await fetch(
        `${this.mcpServerUrl}/api/v2/smart-contracts/${contract}/events?chain=${chain}&limit=${limit}`,
      );
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Failed to fetch contract events: ${error}`);
    }
  }

  /**
   * Get chain health status
   */
  async getChainHealth(chain: string = 'ethereum'): Promise<any> {
    await this.connect();

    try {
      const [healthResponse, chainInfoResponse] = await Promise.all([
        fetch(`${this.mcpServerUrl}/api/v2/blockscout-health-check`),
        fetch(`${this.mcpServerUrl}/api/v2/blockchain/${chain}/info`),
      ]);

      const health = await healthResponse.json();
      const chainInfo = await chainInfoResponse.json();

      return {
        chain,
        health: health.status || 'unknown',
        latestBlock: chainInfo?.blocks?.latest_number || 'unknown',
        timestamp: chainInfo?.blocks?.latest_timestamp || null,
        blockTime: chainInfo?.blocks?.latest_coinbase_transfers || null,
      };
    } catch (error) {
      throw new Error(`Failed to fetch chain health: ${error}`);
    }
  }

  /**
   * Close MCP client connection
   */
  async close(): Promise<void> {
    if (this.client) {
      await this.client.close();
      this.client = null;
    }
  }
}

