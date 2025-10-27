/**
 * Blockscout MCP Server REST API Client
 * Uses the official v1 REST API at https://mcp.blockscout.com/v1
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
   * Get latest block information
   */
  async getLatestBlock(chainId: number = 1): Promise<any> {
    try {
      const response = await fetch(`${this.baseUrl}/get_latest_block?chain_id=${chainId}`);
      
      if (!response.ok) {
        throw new Error(`Blockscout API error: ${response.status}`);
      }
      
      const data = await response.json();
      // Blockscout returns ToolResponse format: { data, notes, instructions, pagination }
      return data.data || data;
    } catch (error) {
      throw new Error(`Failed to fetch latest block: ${error}`);
    }
  }

  /**
   * Get address info
   */
  async getAddressInfo(chainId: number, address: string): Promise<any> {
    try {
      const response = await fetch(
        `${this.baseUrl}/get_address_info?chain_id=${chainId}&address=${address}`
      );
      
      if (!response.ok) {
        throw new Error(`Blockscout API error: ${response.status}`);
      }
      
      const data = await response.json();
      return data.data || data;
    } catch (error) {
      throw new Error(`Failed to fetch address info: ${error}`);
    }
  }

  /**
   * Get tokens by address
   */
  async getTokensByAddress(chainId: number, address: string, cursor?: string): Promise<any> {
    try {
      let url = `${this.baseUrl}/get_tokens_by_address?chain_id=${chainId}&address=${address}`;
      if (cursor) {
        url += `&cursor=${encodeURIComponent(cursor)}`;
      }
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Blockscout API error: ${response.status}`);
      }
      
      const data = await response.json();
      return data.data || data;
    } catch (error) {
      throw new Error(`Failed to fetch tokens by address: ${error}`);
    }
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
    try {
      let url = `${this.baseUrl}/get_transactions_by_address?chain_id=${chainId}&address=${address}`;
      
      if (ageFrom) url += `&age_from=${encodeURIComponent(ageFrom)}`;
      if (ageTo) url += `&age_to=${encodeURIComponent(ageTo)}`;
      if (methods && methods.length > 0) url += `&methods=${methods.join(',')}`;
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Blockscout API error: ${response.status}`);
      }
      
      const data = await response.json();
      return data.data || data;
    } catch (error) {
      throw new Error(`Failed to fetch transactions by address: ${error}`);
    }
  }

  /**
   * Get block info
   */
  async getBlockInfo(
    chainId: number,
    numberOrHash: string,
    includeTransactions: boolean = false
  ): Promise<any> {
    try {
      const url = `${this.baseUrl}/get_block_info?chain_id=${chainId}&number_or_hash=${numberOrHash}&include_transactions=${includeTransactions}`;
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Blockscout API error: ${response.status}`);
      }
      
      const data = await response.json();
      return data.data || data;
    } catch (error) {
      throw new Error(`Failed to fetch block info: ${error}`);
    }
  }

  /**
   * Get chain list
   */
  async getChainsList(): Promise<any> {
    try {
      const response = await fetch(`${this.baseUrl}/get_chains_list`);
      
      if (!response.ok) {
        throw new Error(`Blockscout API error: ${response.status}`);
      }
      
      const data = await response.json();
      return data.data || data;
    } catch (error) {
      throw new Error(`Failed to fetch chains list: ${error}`);
    }
  }

  /**
   * Health check
   */
  async healthCheck(): Promise<boolean> {
    try {
      const response = await fetch(`${this.baseUrl.replace('/v1', '')}/health`);
      const data = await response.json();
      return data.status === 'ok';
    } catch (error) {
      return false;
    }
  }
}

