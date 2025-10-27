/**
 * Blockscout MCP Server REST API Client
 * Uses the official v1 REST API at https://mcp.blockscout.com/v1
 * Note: The v1 REST API uses POST requests with JSON bodies, not GET with query params
 */

export interface BlockscoutRestClientOptions {
  baseUrl?: string;
}

export class BlockscoutRestClient {
  private baseUrl: string;

  constructor({ baseUrl = 'https://mcp.blockscout.com/v1' }: BlockscoutRestClientOptions = {}) {
    this.baseUrl = baseUrl;
  }

  /**
   * Helper to get Blockscout base URL for a chain
   * Maps chain IDs to their Blockscout instances
   */
  private getBlockscoutUrl(chainId: number): string {
    const chainUrls: Record<number, string> = {
      1: 'https://eth.blockscout.com',
      8453: 'https://base.blockscout.com',
      10: 'https://optimism.blockscout.com',
      137: 'https://polygon.blockscout.com',
      42161: 'https://arbitrum.blockscout.com',
    };
    
    return chainUrls[chainId] || chainUrls[1]; // Default to Ethereum
  }

  /**
   * Helper to make requests to Blockscout API v2
   */
  private async makeBlockscoutRequest(chainId: number, endpoint: string): Promise<any> {
    try {
      const baseUrl = this.getBlockscoutUrl(chainId);
      const url = `${baseUrl}${endpoint}`;
      
      const response = await fetch(url, {
        headers: {
          'Accept': 'application/json',
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`Blockscout API error ${response.status}: ${errorText}`);
        throw new Error(`Blockscout API error: ${response.status} - ${errorText.substring(0, 200)}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Request to ${endpoint} failed:`, error);
      throw error;
    }
  }

  /**
   * Get latest block information
   */
  async getLatestBlock(chainId: number = 1): Promise<any> {
    // Use Blockscout API v2 main-page endpoint to get the latest block
    // Returns array of blocks, first one is the latest
    const data = await this.makeBlockscoutRequest(chainId, '/api/v2/main-page/blocks');
    
    // Response is an array of blocks, return the first one (latest)
    if (Array.isArray(data) && data.length > 0) {
      return data[0];
    }
    
    throw new Error('No blocks found');
  }

  /**
   * Get address info
   */
  async getAddressInfo(chainId: number, address: string): Promise<any> {
    const data = await this.makeBlockscoutRequest(chainId, `/api/v2/addresses/${address}`);
    return data;
  }

  /**
   * Get tokens by address
   */
  async getTokensByAddress(chainId: number, address: string, cursor?: string): Promise<any> {
    let url = `/api/v2/addresses/${address}/tokens?type=ERC-20&page_size=50`;
    if (cursor) {
      url += `&cursor=${encodeURIComponent(cursor)}`;
    }
    
    const data = await this.makeBlockscoutRequest(chainId, url);
    return data;
  }

  /**
   * Get transactions by address
   */
  async getTransactionsByAddress(
    chainId: number,
    address: string,
    ageFrom?: string,
    ageTo?: string,
    methods?: string[]
  ): Promise<any> {
    let url = `/api/v2/addresses/${address}/transactions?page_size=50`;
    
    // Note: Blockscout API v2 has different parameter names
    // age_from/age_to might need to be converted to timestamp or block range
    
    const data = await this.makeBlockscoutRequest(chainId, url);
    return data;
  }

  /**
   * Get block info
   */
  async getBlockInfo(
    chainId: number,
    numberOrHash: string,
    includeTransactions: boolean = false
  ): Promise<any> {
    const data = await this.makeBlockscoutRequest(chainId, `/api/v2/blocks/${numberOrHash}`);
    return data;
  }

  /**
   * Get chain list - returns chain info for the configured chains
   */
  async getChainsList(): Promise<any> {
    return [
      { id: '1', name: 'Ethereum Mainnet', rpc: 'https://eth.blockscout.com' },
      { id: '8453', name: 'Base', rpc: 'https://base.blockscout.com' },
      { id: '10', name: 'Optimism', rpc: 'https://optimism.blockscout.com' },
      { id: '137', name: 'Polygon', rpc: 'https://polygon.blockscout.com' },
      { id: '42161', name: 'Arbitrum', rpc: 'https://arbitrum.blockscout.com' },
    ];
  }

  /**
   * Health check
   */
  async healthCheck(): Promise<boolean> {
    try {
      const response = await fetch('https://eth.blockscout.com', {
        headers: { 'Accept': 'application/json' },
      });
      return response.ok;
    } catch (error) {
      return false;
    }
  }

  /**
   * Dummy close method for compatibility
   */
  async close(): Promise<void> {
    // REST clients don't need to close
  }
}

