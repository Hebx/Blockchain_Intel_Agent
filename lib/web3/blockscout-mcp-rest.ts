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
   * Get token holders for a specific token contract address
   * GET /api/v2/tokens/{token_contract_address}/holders
   */
  async getTokenHolders(
    chainId: number,
    tokenAddress: string,
    pageSize: number = 50
  ): Promise<any> {
    const data = await this.makeBlockscoutRequest(
      chainId, 
      `/api/v2/tokens/${tokenAddress}/holders?page_size=${pageSize}`
    );
    return data;
  }

  /**
   * Get token metadata and information
   * GET /api/v2/tokens/{token_contract_address}
   */
  async getTokenInfo(
    chainId: number,
    tokenAddress: string
  ): Promise<any> {
    const data = await this.makeBlockscoutRequest(
      chainId,
      `/api/v2/tokens/${tokenAddress}`
    );
    return data;
  }

  /**
   * Get token holder concentration (top holders with percentages)
   * Calculates holder concentration metrics from token info and holders
   */
  async getTokenHolderConcentration(
    chainId: number,
    tokenAddress: string,
    topN: number = 10
  ): Promise<any> {
    try {
      const [tokenInfo, holders] = await Promise.all([
        this.getTokenInfo(chainId, tokenAddress),
        this.getTokenHolders(chainId, tokenAddress, topN),
      ]);

      const holderCounts = holders?.items || [];
      const totalSupply = tokenInfo?.total_supply || '0';
      
      // Calculate concentration
      let topHoldersPercent = 0;
      let holderDistribution: Array<{ address: string; balance: string; percentage: number }> = [];
      
      if (holderCounts.length > 0) {
        const totalSupplyBigInt = BigInt(totalSupply.toString());
        
        holderDistribution = holderCounts.map((holder: any) => {
          const balance = BigInt(holder.value || 0);
          const percentage = Number((balance * BigInt(10000)) / totalSupplyBigInt) / 100;
          return {
            address: holder.address?.hash || holder.address,
            balance: holder.value || '0',
            percentage,
          };
        });
        
        topHoldersPercent = holderDistribution.reduce((sum, holder) => sum + holder.percentage, 0);
      }

      return {
        tokenInfo,
        topHolders: holderDistribution,
        concentrationMetrics: {
          topNHoldersPercent: topHoldersPercent,
          holderCount: holders?.items?.length || 0,
          distributionSpread: topHoldersPercent < 20 ? 'Decentralized' : topHoldersPercent < 50 ? 'Moderate' : 'Concentrated',
        },
      };
    } catch (error) {
      console.error('Error calculating holder concentration:', error);
      throw error;
    }
  }

  /**
   * Get transaction information
   * GET /api/v2/transactions/{transaction_hash}
   */
  async getTransactionInfo(chainId: number, txHash: string): Promise<any> {
    const data = await this.makeBlockscoutRequest(chainId, `/api/v2/transactions/${txHash}`);
    return data;
  }

  /**
   * Get transaction logs (events)
   * GET /api/v2/transactions/{transaction_hash}/logs
   */
  async getTransactionLogs(chainId: number, txHash: string): Promise<any> {
    const data = await this.makeBlockscoutRequest(chainId, `/api/v2/transactions/${txHash}/logs`);
    return data;
  }

  /**
   * Get token transfers by address
   * GET /api/v2/addresses/{address}/token-transfers
   */
  async getTokenTransfers(
    chainId: number,
    address: string,
    pageSize: number = 50
  ): Promise<any> {
    try {
      const data = await this.makeBlockscoutRequest(
        chainId,
        `/api/v2/addresses/${address}/token-transfers?page_size=${pageSize}`
      );
      console.log(`Token transfers response for ${address}:`, JSON.stringify(data).substring(0, 300));
      return data;
    } catch (error) {
      console.error(`Error fetching token transfers for ${address}:`, error);
      throw error;
    }
  }

  /**
   * Get NFT tokens by address
   * GET /api/v2/addresses/{address}/nft/collections
   * Based on Blockscout MCP server implementation
   */
  async getNFTTokens(
    chainId: number,
    address: string,
    pageSize: number = 50
  ): Promise<any> {
    try {
      const data = await this.makeBlockscoutRequest(
        chainId,
        `/api/v2/addresses/${address}/nft/collections?type=ERC-721,ERC-404,ERC-1155&page_size=${pageSize}`
      );
      console.log(`NFT response for ${address}:`, JSON.stringify(data).substring(0, 300));
      return data;
    } catch (error) {
      console.error(`Error fetching NFTs for ${address}:`, error);
      throw error;
    }
  }

  /**
   * Lookup token by symbol
   */
  async lookupTokenBySymbol(chainId: number, symbol: string): Promise<any> {
    // Common token addresses for major chains
    const tokenAddresses: Record<string, Record<string, string>> = {
      '1': { // Ethereum
        'USDC': '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
        'USDT': '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        'DAI': '0x6B175474E89094C44Da98b954EedeAC495271d0F',
        'WETH': '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      },
      '10': { // Optimism
        'USDC': '0x7F5c764cBc14f9669B88837ca1490cCa17c31607',
        'USDT': '0x94b008aA00579c1307B0EF2c499aD98a8ce58e58',
        'DAI': '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
        'WETH': '0x4200000000000000000000000000000000000006',
      },
      '8453': { // Base
        'USDC': '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
        'DAI': '0x50c5725949A6F0c72E6C4a641F24049A917E0fAB',
        'WETH': '0x4200000000000000000000000000000000000006',
      },
      '137': { // Polygon
        'USDC': '0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359',
        'USDT': '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
        'DAI': '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
        'WETH': '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
      },
      '42161': { // Arbitrum
        'USDC': '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
        'USDT': '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
        'DAI': '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
        'WETH': '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
      },
    };
    
    const chainTokens = tokenAddresses[chainId.toString()];
    const normalizedSymbol = symbol.toUpperCase().trim();
    
    if (chainTokens && chainTokens[normalizedSymbol]) {
      return chainTokens[normalizedSymbol];
    }
    
    // If not found, try to search via Blockscout API
    try {
      const data = await this.makeBlockscoutRequest(chainId, `/api/v2/tokens?q=${encodeURIComponent(symbol)}`);
      if (data && data.items && data.items.length > 0) {
        return data.items[0].address;
      }
    } catch (error) {
      console.error('Failed to search for token:', error);
    }
    
    return null;
  }

  /**
   * Get contract ABI
   * GET /api/v2/smart-contracts/{address_hash}
   */
  async getContractABI(chainId: number, contractAddress: string): Promise<any> {
    try {
      const data = await this.makeBlockscoutRequest(
        chainId,
        `/api/v2/smart-contracts/${contractAddress}`
      );
      return data;
    } catch (error) {
      console.error(`Error fetching ABI for ${contractAddress}:`, error);
      throw error;
    }
  }

  /**
   * Get contract source code
   * Uses the smart contract endpoint which includes source code
   */
  async getContractSourceCode(chainId: number, contractAddress: string): Promise<any> {
    try {
      const data = await this.makeBlockscoutRequest(
        chainId,
        `/api/v2/smart-contracts/${contractAddress}`
      );
      return data;
    } catch (error) {
      console.error(`Error fetching source code for ${contractAddress}:`, error);
      throw error;
    }
  }

  /**
   * Resolve ENS name to address
   * Note: Currently only supported on Ethereum mainnet
   */
  async resolveENS(name: string): Promise<string | null> {
    // Only Ethereum mainnet supports ENS
    if (!name.endsWith('.eth')) {
      return null;
    }

    try {
      // Try to search for the ENS name in Blockscout
      const data = await this.makeBlockscoutRequest(1, `/api/v2/search?q=${encodeURIComponent(name)}`);
      
      // Blockscout search returns address info if ENS is resolved
      if (data && data.items && data.items.length > 0) {
        const firstItem = data.items[0];
        if (firstItem.type === 'address' || firstItem.address) {
          return firstItem.address;
        }
      }
    } catch (error) {
      console.error('Failed to resolve ENS:', error);
    }
    
    return null;
  }

  /**
   * Reverse resolve address to ENS name
   * Note: Currently only supported on Ethereum mainnet
   */
  async reverseResolve(address: string): Promise<string | null> {
    // Only Ethereum mainnet supports ENS reverse resolution
    try {
      const addressInfo = await this.makeBlockscoutRequest(1, `/api/v2/addresses/${address}`);
      
      // Check if address has a name tag (ENS)
      if (addressInfo && addressInfo.name && addressInfo.name.endsWith('.eth')) {
        return addressInfo.name;
      }
    } catch (error) {
      console.error('Failed to reverse resolve ENS:', error);
    }
    
    return null;
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

