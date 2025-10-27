import { getCacheManager } from '@/lib/cache/cache-manager';
import { CACHE_TTL } from '@/lib/cache/ttl-config';

/**
 * Redis-based rate limiter using sliding window algorithm
 */
export class RateLimiter {
  private cache = getCacheManager();
  private windowSize: number;

  constructor(windowSize: number = CACHE_TTL.RATE_LIMIT) {
    this.windowSize = windowSize;
  }

  /**
   * Check if request is within rate limit
   * @param key Unique identifier (IP, user ID, etc.)
   * @param limit Maximum requests allowed in window
   * @returns true if allowed, false if rate limited
   */
  async checkLimit(key: string, limit: number): Promise<boolean> {
    const cacheKey = `ratelimit:${key}`;
    
    try {
      const current = await this.cache.client.get<number>(cacheKey);
      const count = current ?? 0;

      return count < limit;
    } catch (error) {
      console.error('Rate limiter error:', error);
      // Fail open - allow request on error
      return true;
    }
  }

  /**
   * Increment rate limit counter
   */
  async increment(key: string): Promise<number> {
    const cacheKey = `ratelimit:${key}`;
    
    try {
      const count = await this.cache.client.incr(cacheKey);
      
      // Set expiration on first request
      if (count === 1) {
        await this.cache.client.setex(cacheKey, this.windowSize, count);
      }

      return count;
    } catch (error) {
      console.error('Rate limiter increment error:', error);
      return 1;
    }
  }

  /**
   * Check and increment in one operation
   */
  async checkAndIncrement(key: string, limit: number): Promise<boolean> {
    const current = await this.increment(key);
    return current <= limit;
  }

  /**
   * Get current count for a key
   */
  async getCurrentCount(key: string): Promise<number> {
    const cacheKey = `ratelimit:${key}`;
    const count = await this.cache.client.get<number>(cacheKey);
    return count ?? 0;
  }

  /**
   * Reset rate limit for a key
   */
  async reset(key: string): Promise<void> {
    const cacheKey = `ratelimit:${key}`;
    await this.cache.client.del(cacheKey);
  }

  /**
   * Get time remaining until reset
   */
  async getTimeRemaining(key: string): Promise<number> {
    const cacheKey = `ratelimit:${key}`;
    const ttl = await this.cache.client.ttl(cacheKey);
    return ttl > 0 ? ttl : 0;
  }
}

// Singleton instance
let rateLimiterInstance: RateLimiter | null = null;

/**
 * Get or create rate limiter singleton
 */
export function getRateLimiter(): RateLimiter {
  if (!rateLimiterInstance) {
    rateLimiterInstance = new RateLimiter();
  }
  return rateLimiterInstance;
}

/**
 * Extract identifier for rate limiting from request
 */
export function getRateLimitKey(req: Request): string {
  // Try to get IP from headers
  const forwarded = req.headers.get('x-forwarded-for');
  const realIp = req.headers.get('x-real-ip');
  
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  
  if (realIp) {
    return realIp;
  }

  // Fallback to random identifier
  return 'anonymous';
}

