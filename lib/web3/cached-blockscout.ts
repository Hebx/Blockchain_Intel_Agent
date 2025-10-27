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
   * Get latest block with caching
   */
  async getLatestBlock(chainId: number = 1): Promise<any> {
    const cacheKey = generateMCPCacheKey('latest_block', chainId.toString(), 'latest');

    return await this.cache.getOrSet(
      cacheKey,
      async () => {
        return await this.client.getLatestBlock(chainId);
      },
      CACHE_TTL.LATEST_BLOCK,
    );
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

    return await this.cache.getOrSet(
      cacheKey,
      async () => {
        return await this.client.getTokensByAddress(chainId, address, cursor);
      },
      CACHE_TTL.TOKEN_HOLDERS,
    );
  }

  /**
   * Get address info with caching
   */
  async getAddressInfo(
    chainId: number = 1,
    address: string,
  ): Promise<any> {
    const cacheKey = generateMCPCacheKey('address_info', chainId.toString(), address);

    return await this.cache.getOrSet(
      cacheKey,
      async () => {
        return await this.client.getAddressInfo(chainId, address);
      },
      CACHE_TTL.ACCOUNT_SUMMARY,
    );
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

    return await this.cache.getOrSet(
      cacheKey,
      async () => {
        return await this.client.getTransactionsByAddress(chainId, address, ageFrom, ageTo, methods);
      },
      CACHE_TTL.CONTRACT_EVENTS,
    );
  }

  /**
   * Get chain health with caching (using latest block as health indicator)
   */
  async getChainHealth(chainId: number = 1): Promise<any> {
    const cacheKey = generateMCPCacheKey('chain_status', chainId.toString(), 'health');

    return await this.cache.getOrSet(
      cacheKey,
      async () => {
        const latestBlock = await this.client.getLatestBlock(chainId);
        return {
          chainId,
          latestBlock: latestBlock?.number || 'unknown',
          timestamp: latestBlock?.timestamp || null,
          health: 'operational',
        };
      },
      CACHE_TTL.CHAIN_STATUS,
    );
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

