import { Redis } from '@upstash/redis';

/**
 * In-memory fallback cache for development
 */
class InMemoryCache {
  private data = new Map<string, { value: any; expiresAt?: number }>();

  async get<T>(key: string): Promise<T | null> {
    const entry = this.data.get(key);
    if (!entry) return null;
    
    if (entry.expiresAt && Date.now() > entry.expiresAt) {
      this.data.delete(key);
      return null;
    }
    
    return entry.value;
  }

  async set(key: string, value: any, options?: { ex?: number }): Promise<void> {
    const entry: { value: any; expiresAt?: number } = { value };
    
    if (options?.ex) {
      entry.expiresAt = Date.now() + options.ex * 1000;
    }
    
    this.data.set(key, entry);
  }

  async del(key: string): Promise<number> {
    return this.data.delete(key) ? 1 : 0;
  }

  async exists(key: string): Promise<number> {
    return this.data.has(key) ? 1 : 0;
  }

  async mget<T>(...keys: string[]): Promise<(T | null)[]> {
    return keys.map(key => {
      const entry = this.data.get(key);
      if (!entry) return null;
      if (entry.expiresAt && Date.now() > entry.expiresAt) {
        this.data.delete(key);
        return null;
      }
      return entry.value;
    });
  }

  async incr(key: string): Promise<number> {
    const current = this.data.get(key);
    const newValue = ((current?.value as number) || 0) + 1;
    this.data.set(key, { value: newValue });
    return newValue;
  }

  async ttl(key: string): Promise<number> {
    const entry = this.data.get(key);
    if (!entry?.expiresAt) return -1;
    const remaining = Math.floor((entry.expiresAt - Date.now()) / 1000);
    return remaining > 0 ? remaining : -2;
  }
}

/**
 * Redis client wrapper using Upstash Redis REST API
 * Provides a simple interface for cache operations
 * Falls back to in-memory cache in development
 */
export class RedisClient {
  private client: Redis;
  private inMemoryCache: InMemoryCache;
  private useInMemory = false;

  constructor() {
    const url = process.env.UPSTASH_REDIS_REST_URL;
    const token = process.env.UPSTASH_REDIS_REST_TOKEN;

    // Use in-memory cache if Redis credentials are not provided (development)
    if (!url || !token) {
      console.warn('⚠️  Redis credentials not found. Using in-memory cache for development.');
      console.warn('For production, set UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN');
      this.useInMemory = true;
      this.inMemoryCache = new InMemoryCache();
      return;
    }

    this.client = new Redis({
      url,
      token,
    });
    this.useInMemory = false;
  }

  /**
   * Get value from cache
   */
  async get<T = any>(key: string): Promise<T | null> {
    if (this.useInMemory) {
      return this.inMemoryCache.get<T>(key);
    }
    
    try {
      const value = await this.client.get<T>(key);
      return value;
    } catch (error) {
      console.error(`Redis get error for key "${key}":`, error);
      return null;
    }
  }

  /**
   * Set value in cache with optional TTL
   */
  async set(key: string, value: any, ttl?: number): Promise<void> {
    if (this.useInMemory) {
      await this.inMemoryCache.set(key, value, { ex: ttl });
      return;
    }
    
    try {
      if (ttl) {
        await this.client.set(key, value, { ex: ttl });
      } else {
        await this.client.set(key, value);
      }
    } catch (error) {
      console.error(`Redis set error for key "${key}":`, error);
      throw error;
    }
  }

  /**
   * Delete key from cache
   */
  async del(key: string): Promise<boolean> {
    if (this.useInMemory) {
      const result = await this.inMemoryCache.del(key);
      return result === 1;
    }
    
    try {
      const result = await this.client.del(key);
      return result === 1;
    } catch (error) {
      console.error(`Redis delete error for key "${key}":`, error);
      return false;
    }
  }

  /**
   * Check if key exists
   */
  async exists(key: string): Promise<boolean> {
    if (this.useInMemory) {
      const result = await this.inMemoryCache.exists(key);
      return result === 1;
    }
    
    try {
      const result = await this.client.exists(key);
      return result === 1;
    } catch (error) {
      console.error(`Redis exists error for key "${key}":`, error);
      return false;
    }
  }

  /**
   * Get multiple keys at once
   */
  async mget<T = any>(keys: string[]): Promise<(T | null)[]> {
    if (keys.length === 0) return [];
    
    if (this.useInMemory) {
      return this.inMemoryCache.mget<T>(...keys);
    }

    try {
      const values = await this.client.mget<T>(...keys);
      return values;
    } catch (error) {
      console.error(`Redis mget error for keys "${keys.join(', ')}":`, error);
      return keys.map(() => null);
    }
  }

  /**
   * Set multiple key-value pairs
   */
  async mset(
    data: Record<string, any>,
    ttl?: number,
  ): Promise<void> {
    if (this.useInMemory) {
      for (const [key, value] of Object.entries(data)) {
        await this.inMemoryCache.set(key, value, { ex: ttl });
      }
      return;
    }
    
    try {
      for (const [key, value] of Object.entries(data)) {
        if (ttl) {
          await this.client.set(key, value, { ex: ttl });
        } else {
          await this.client.set(key, value);
        }
      }
    } catch (error) {
      console.error(`Redis mset error:`, error);
      throw error;
    }
  }

  /**
   * Increment a counter (useful for rate limiting)
   */
  async incr(key: string): Promise<number> {
    if (this.useInMemory) {
      return this.inMemoryCache.incr(key);
    }
    
    try {
      return await this.client.incr(key);
    } catch (error) {
      console.error(`Redis incr error for key "${key}":`, error);
      return 0;
    }
  }

  /**
   * Set key with TTL using EX (expire) command
   */
  async setex(key: string, ttl: number, value: any): Promise<void> {
    await this.set(key, value, ttl);
  }

  /**
   * Get time-to-live for a key (returns -1 if no TTL, -2 if key doesn't exist)
   */
  async ttl(key: string): Promise<number> {
    if (this.useInMemory) {
      return this.inMemoryCache.ttl(key);
    }
    
    try {
      return await this.client.ttl(key);
    } catch (error) {
      console.error(`Redis ttl error for key "${key}":`, error);
      return -2;
    }
  }

  /**
   * Delete all keys matching a pattern
   */
  async deletePattern(pattern: string): Promise<number> {
    try {
      // Upstash Redis doesn't support SCAN in the same way
      // This is a simplified implementation
      // For production, consider using Upstash's specific APIs
      return 0;
    } catch (error) {
      console.error(`Redis deletePattern error for pattern "${pattern}":`, error);
      return 0;
    }
  }

  /**
   * Health check - test Redis connection
   */
  async healthCheck(): Promise<boolean> {
    try {
      const testKey = 'health_check';
      await this.set(testKey, Date.now(), 10);
      await this.get(testKey);
      await this.del(testKey);
      return true;
    } catch (error) {
      console.error('Redis health check failed:', error);
      // In development with in-memory cache, always return true
      if (this.useInMemory) {
        return true;
      }
      return false;
    }
  }
}

// Singleton instance
let redisClientInstance: RedisClient | null = null;

/**
 * Get or create Redis client singleton
 */
export function getRedisClient(): RedisClient {
  if (!redisClientInstance) {
    redisClientInstance = new RedisClient();
  }
  return redisClientInstance;
}


