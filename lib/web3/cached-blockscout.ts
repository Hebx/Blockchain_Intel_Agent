import { BlockscoutMcpClient } from './blockscout-mcp';
import { getCacheManager } from '@/lib/cache/cache-manager';
import { CACHE_TTL, generateMCPCacheKey } from '@/lib/cache/ttl-config';
import type { CacheManager } from '@/lib/cache/cache-manager';

/**
 * Cached wrapper for Blockscout MCP client
 * Implements cache-first pattern to reduce API calls
 */
export class CachedBlockscoutClient {
  private client: BlockscoutMcpClient;
  private cache: CacheManager;

  constructor(options: { mcpServerUrl: string }) {
    this.client = new BlockscoutMcpClient(options);
    this.cache = getCacheManager();
  }

  /**
   * Get latest block with caching
   */
  async getLatestBlock(chain: string = 'ethereum'): Promise<any> {
    const cacheKey = generateMCPCacheKey('latest_block', chain, 'latest');

    return await this.cache.getOrSet(
      cacheKey,
      async () => {
        return await this.client.getLatestBlock(chain);
      },
      CACHE_TTL.LATEST_BLOCK,
    );
  }

  /**
   * Get token holders with caching
   */
  async getTokenHolders(
    address: string,
    limit: number = 10,
    chain: string = 'ethereum',
  ): Promise<any> {
    const cacheKey = generateMCPCacheKey('token_holders', chain, `${address}:${limit}`);

    return await this.cache.getOrSet(
      cacheKey,
      async () => {
        return await this.client.getTokenHolders(address, limit, chain);
      },
      CACHE_TTL.TOKEN_HOLDERS,
    );
  }

  /**
   * Get account summary with caching
   */
  async getAccountSummary(
    address: string,
    chain: string = 'ethereum',
  ): Promise<any> {
    const cacheKey = generateMCPCacheKey('account_summary', chain, address);

    return await this.cache.getOrSet(
      cacheKey,
      async () => {
        return await this.client.getAccountSummary(address, chain);
      },
      CACHE_TTL.ACCOUNT_SUMMARY,
    );
  }

  /**
   * Get contract events with caching
   */
  async getContractEvents(
    contract: string,
    limit: number = 20,
    chain: string = 'ethereum',
  ): Promise<any> {
    const cacheKey = generateMCPCacheKey('contract_events', chain, `${contract}:${limit}`);

    return await this.cache.getOrSet(
      cacheKey,
      async () => {
        return await this.client.getContractEvents(contract, limit, chain);
      },
      CACHE_TTL.CONTRACT_EVENTS,
    );
  }

  /**
   * Get chain health with caching
   */
  async getChainHealth(chain: string = 'ethereum'): Promise<any> {
    const cacheKey = generateMCPCacheKey('chain_status', chain, 'health');

    return await this.cache.getOrSet(
      cacheKey,
      async () => {
        return await this.client.getChainHealth(chain);
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
    const blockscoutUrl = process.env.BLOCKSCOUT_MCP_URL || 'https://mcp.blockscout.com';
    cachedClientInstance = new CachedBlockscoutClient({
      mcpServerUrl: blockscoutUrl,
    });
  }
  return cachedClientInstance;
}

