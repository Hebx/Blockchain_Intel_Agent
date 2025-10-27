import { BlockscoutRestClient } from './blockscout-mcp-rest';
import { getCacheManager } from '@/lib/cache/cache-manager';
import { CACHE_TTL, generateMCPCacheKey } from '@/lib/cache/ttl-config';
import type { CacheManager } from '@/lib/cache/cache-manager';

/**
 * Cached wrapper for Blockscout MCP REST API client
 * Implements cache-first pattern to reduce API calls
 */
export class CachedBlockscoutClient {
  private client: BlockscoutRestClient;
  private cache: CacheManager;

  constructor(options?: { baseUrl?: string }) {
    this.client = new BlockscoutRestClient(options);
    this.cache = getCacheManager();
  }

  /**
   * Helper to unwrap MCP response data
   */
  private unwrapResponse(response: any): any {
    // If response has metadata wrapper, extract just the data
    if (response && typeof response === 'object' && 'data' in response && 'metadata' in response) {
      return response.data;
    }
    // If response has items array (from Blockscout API v2), return as is
    if (Array.isArray(response)) {
      return response;
    }
    // If response has items field, return it
    if (response && typeof response === 'object' && 'items' in response && Array.isArray(response.items)) {
      return response.items;
    }
    return response;
  }

  /**
   * Get latest block with caching
   */
  async getLatestBlock(chainId: number = 1): Promise<any> {
    const cacheKey = generateMCPCacheKey('latest_block', chainId.toString(), 'latest');

    try {
      const result = await this.cache.getOrSet(
        cacheKey,
        async () => {
          console.log(`Fetching latest block for chainId: ${chainId}`);
          const block = await this.client.getLatestBlock(chainId);
          console.log('Latest block data:', JSON.stringify(block).substring(0, 200));
          return block;
        },
        CACHE_TTL.LATEST_BLOCK,
      );

      console.log('Returning from cached client, result type:', typeof result);
      return this.unwrapResponse(result);
    } catch (error) {
      console.error('Error in getLatestBlock:', error);
      throw error;
    }
  }

  /**
   * Lookup token address by symbol
   */
  async lookupTokenBySymbol(chainId: number = 1, symbol: string): Promise<string | null> {
    const cacheKey = generateMCPCacheKey('token_lookup', chainId.toString(), symbol.toUpperCase());

    const result = await this.cache.getOrSet(
      cacheKey,
      async () => {
        return await this.client.lookupTokenBySymbol(chainId, symbol);
      },
      CACHE_TTL.TOKEN_HOLDERS,
    );

    return result;
  }

  /**
   * Get tokens by address with caching (replaces token holders)
   */
  async getTokensByAddress(
    chainId: number = 1,
    address: string,
    cursor?: string,
  ): Promise<any> {
    const cacheKey = generateMCPCacheKey('tokens_by_address', chainId.toString(), `${address}${cursor || ''}`);

    const result = await this.cache.getOrSet(
      cacheKey,
      async () => {
        return await this.client.getTokensByAddress(chainId, address, cursor);
      },
      CACHE_TTL.TOKEN_HOLDERS,
    );

    return this.unwrapResponse(result);
  }

  /**
   * Get token holders for a specific token with caching
   */
  async getTokenHolders(
    chainId: number = 1,
    tokenAddress: string,
    pageSize: number = 50
  ): Promise<any> {
    const cacheKey = generateMCPCacheKey('token_holders', chainId.toString(), tokenAddress);

    const result = await this.cache.getOrSet(
      cacheKey,
      async () => {
        return await this.client.getTokenHolders(chainId, tokenAddress, pageSize);
      },
      CACHE_TTL.TOKEN_HOLDERS,
    );

    return this.unwrapResponse(result);
  }

  /**
   * Get address info with caching
   */
  async getAddressInfo(
    chainId: number = 1,
    address: string,
  ): Promise<any> {
    const cacheKey = generateMCPCacheKey('address_info', chainId.toString(), address);

    const result = await this.cache.getOrSet(
      cacheKey,
      async () => {
        return await this.client.getAddressInfo(chainId, address);
      },
      CACHE_TTL.ACCOUNT_SUMMARY,
    );

    return this.unwrapResponse(result);
  }

  /**
   * Get transactions by address with caching
   */
  async getTransactionsByAddress(
    chainId: number = 1,
    address: string,
    ageFrom?: string,
    ageTo?: string,
    methods?: string[],
  ): Promise<any> {
    const params = `${address}${ageFrom || ''}${ageTo || ''}${methods?.join(',') || ''}`;
    const cacheKey = generateMCPCacheKey('transactions_by_address', chainId.toString(), params);

    const result = await this.cache.getOrSet(
      cacheKey,
      async () => {
        return await this.client.getTransactionsByAddress(chainId, address, ageFrom, ageTo, methods);
      },
      CACHE_TTL.CONTRACT_EVENTS,
    );

    return this.unwrapResponse(result);
  }

  /**
   * Get chain health with caching (using latest block as health indicator)
   */
  async getChainHealth(chainId: number = 1): Promise<any> {
    const cacheKey = generateMCPCacheKey('chain_status', chainId.toString(), 'health');

    const result = await this.cache.getOrSet(
      cacheKey,
      async () => {
        const latestBlock = await this.client.getLatestBlock(chainId);
        const blockData = this.unwrapResponse(latestBlock);
        return {
          chainId,
          latestBlock: blockData?.number || 'unknown',
          timestamp: blockData?.timestamp || null,
          health: 'operational',
        };
      },
      CACHE_TTL.CHAIN_STATUS,
    );

    return result;
  }

  /**
   * Invalidate all cached data for a specific chain
   */
  async invalidateChainCache(chain: string): Promise<void> {
    const patterns = [
      generateMCPCacheKey('latest_block', chain, '*'),
      generateMCPCacheKey('token_holders', chain, '*'),
      generateMCPCacheKey('account_summary', chain, '*'),
      generateMCPCacheKey('contract_events', chain, '*'),
      generateMCPCacheKey('chain_status', chain, '*'),
    ];

    // Note: Upstash limitations - this is a simplified approach
    // For production, maintain a list of keys per chain
    for (const pattern of patterns) {
      await this.cache.invalidatePattern(pattern);
    }
  }

  /**
   * Invalidate specific cache entry
   */
  async invalidate(type: string, chain: string, identifier: string): Promise<boolean> {
    const cacheKey = generateMCPCacheKey(type, chain, identifier);
    return await this.cache.del(cacheKey);
  }

  /**
   * Close MCP client connection
   */
  async close(): Promise<void> {
    await this.client.close();
  }
}

// Singleton instance
let cachedClientInstance: CachedBlockscoutClient | null = null;

/**
 * Get or create cached Blockscout client singleton
 */
export function getCachedBlockscoutClient(): CachedBlockscoutClient {
  if (!cachedClientInstance) {
    cachedClientInstance = new CachedBlockscoutClient();
  }
  return cachedClientInstance;
}

