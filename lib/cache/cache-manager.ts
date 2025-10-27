import {
  getRedisClient,
  RedisClient,
} from './redis-client';
import { CACHE_TTL, CACHE_PREFIX } from './ttl-config';

export interface CacheStats {
  hits: number;
  misses: number;
  hitRate: number;
  totalRequests: number;
}

/**
 * Cache manager with automatic cache-aside pattern
 * Provides high-level cache operations with TTL management
 */
export class CacheManager {
  private client: RedisClient;
  private stats = {
    hits: 0,
    misses: 0,
  };

  constructor() {
    this.client = getRedisClient();
  }

  /**
   * Get or set pattern - checks cache first, fetches if miss
   * @param key Cache key
   * @param fetcher Function to fetch data if cache miss
   * @param ttl Time-to-live in seconds
   * @returns Cached or fetched value
   */
  async getOrSet<T>(
    key: string,
    fetcher: () => Promise<T>,
    ttl?: number,
  ): Promise<T> {
    // Try to get from cache
    const cached = await this.client.get<T>(key);

    if (cached !== null) {
      this.stats.hits++;
      return cached;
    }

    // Cache miss - fetch data
    this.stats.misses++;
    const data = await fetcher();

    // Store in cache with TTL
    if (data !== null && data !== undefined) {
      await this.client.set(key, data, ttl);
    }

    return data;
  }

  /**
   * Set value in cache
   */
  async set(key: string, value: any, ttl?: number): Promise<void> {
    await this.client.set(key, value, ttl);
  }

  /**
   * Get value from cache
   */
  async get<T = any>(key: string): Promise<T | null> {
    const value = await this.client.get<T>(key);
    if (value !== null) {
      this.stats.hits++;
    } else {
      this.stats.misses++;
    }
    return value;
  }

  /**
   * Delete key from cache
   */
  async del(key: string): Promise<boolean> {
    return await this.client.del(key);
  }

  /**
   * Delete multiple keys
   */
  async deleteMultiple(keys: string[]): Promise<number> {
    let deleted = 0;
    for (const key of keys) {
      if (await this.del(key)) {
        deleted++;
      }
    }
    return deleted;
  }

  /**
   * Generate cache key with prefix and parameters
   */
  generateCacheKey(
    prefix: string,
    params: Record<string, any>,
  ): string {
    const parts = Object.entries(params)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([key, value]) => `${key}:${value}`);
    return `${prefix}:${parts.join(':')}`;
  }

  /**
   * Generate cache key from CACHE_PREFIX
   */
  generatePrefixedKey(
    prefix: keyof typeof CACHE_PREFIX,
    ...parts: (string | number)[]
  ): string {
    return `${CACHE_PREFIX[prefix]}:${parts.join(':')}`;
  }

  /**
   * Invalidate cache by prefix pattern
   */
  async invalidatePattern(pattern: string): Promise<void> {
    // Note: Upstash Redis REST API has limitations with pattern matching
    // For production, consider maintaining a list of keys per prefix
    await this.client.deletePattern(pattern);
  }

  /**
   * Get cache statistics
   */
  getCacheStats(): CacheStats {
    const total = this.stats.hits + this.stats.misses;
    return {
      hits: this.stats.hits,
      misses: this.stats.misses,
      hitRate: total > 0 ? this.stats.hits / total : 0,
      totalRequests: total,
    };
  }

  /**
   * Reset statistics
   */
  resetStats(): void {
    this.stats.hits = 0;
    this.stats.misses = 0;
  }

  /**
   * Health check
   */
  async healthCheck(): Promise<boolean> {
    return await this.client.healthCheck();
  }

  /**
   * Batch get multiple keys
   */
  async mget<T = any>(keys: string[]): Promise<(T | null)[]> {
    if (keys.length === 0) return [];
    return await this.client.mget<T>(keys);
  }

  /**
   * Batch set multiple key-value pairs
   */
  async mset(
    data: Record<string, any>,
    ttl?: number,
  ): Promise<void> {
    await this.client.mset(data, ttl);
  }
}

// Singleton instance
let cacheManagerInstance: CacheManager | null = null;

/**
 * Get or create cache manager singleton
 */
export function getCacheManager(): CacheManager {
  if (!cacheManagerInstance) {
    cacheManagerInstance = new CacheManager();
  }
  return cacheManagerInstance;
}

/**
 * Helper function to generate MCP data cache key
 */
export function generateMCPCacheKey(
  type: string,
  chain: string,
  identifier: string,
): string {
  return `${CACHE_PREFIX.MCP_DATA}:${type}:${chain}:${identifier}`;
}

/**
 * Helper function to generate AI output cache key
 */
export function generateAIOutputCacheKey(queryHash: string): string {
  return `${CACHE_PREFIX.AI_OUTPUT}:${queryHash}`;
}

/**
 * Helper function to generate conversation cache key
 */
export function generateConversationCacheKey(
  conversationId: string,
  type: string,
): string {
  return `${CACHE_PREFIX.CONVERSATION}:${conversationId}:${type}`;
}


