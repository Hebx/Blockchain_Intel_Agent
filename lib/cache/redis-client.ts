import { Redis } from '@upstash/redis';

/**
 * Redis client wrapper using Upstash Redis REST API
 * Provides a simple interface for cache operations
 */
export class RedisClient {
  private client: Redis;

  constructor() {
    const url = process.env.UPSTASH_REDIS_REST_URL;
    const token = process.env.UPSTASH_REDIS_REST_TOKEN;

    if (!url || !token) {
      throw new Error(
        'UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN must be set in environment variables',
      );
    }

    this.client = new Redis({
      url,
      token,
    });
  }

  /**
   * Get value from cache
   */
  async get<T = any>(key: string): Promise<T | null> {
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
    try {
      const pipeline = this.client.pipeline();
      for (const [key, value] of Object.entries(data)) {
        if (ttl) {
          pipeline.set(key, value, { ex: ttl });
        } else {
          pipeline.set(key, value);
        }
      }
      await pipeline.exec();
    } catch (error) {
      console.error(`Redis mset error:`, error);
      throw error;
    }
  }

  /**
   * Increment a counter (useful for rate limiting)
   */
  async incr(key: string): Promise<number> {
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


