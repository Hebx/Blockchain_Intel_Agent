import { getCacheManager } from './cache-manager';
import { getRedisClient } from './redis-client';

export interface CacheMetrics {
  hitRate: number;
  missRate: number;
  avgResponseTime: number;
  cacheSize: number;
  topCacheKeys: { key: string; hits: number }[];
  evictionCount: number;
  totalKeys: number;
}

export interface CacheAnalytics {
  metrics: CacheMetrics;
  performance: {
    cacheHitLatency: number;
    cacheMissLatency: number;
    averageLatency: number;
  };
  recommendations: string[];
}

/**
 * Get comprehensive cache analytics
 */
export async function getCacheAnalytics(): Promise<CacheAnalytics> {
  const cacheManager = getCacheManager();
  const cacheStats = cacheManager.getCacheStats();

  // Calculate metrics
  const metrics: CacheMetrics = {
    hitRate: cacheStats.hitRate,
    missRate: 1 - cacheStats.hitRate,
    avgResponseTime: 0, // Would need to track this separately
    cacheSize: 0, // Upstash doesn't expose this easily
    topCacheKeys: [],
    evictionCount: 0,
    totalKeys: cacheStats.totalRequests,
  };

  // Performance recommendations
  const recommendations: string[] = [];
  
  if (cacheStats.hitRate < 0.3) {
    recommendations.push(
      'Cache hit rate is low (<30%). Consider: extending TTLs, caching more data types, or improving cache keys.'
    );
  }
  
  if (cacheStats.hitRate > 0.7) {
    recommendations.push('Excellent cache hit rate (>70%). System is efficiently using cached data.');
  }

  if (cacheStats.misses > cacheStats.hits * 2) {
    recommendations.push(
      'High cache miss rate. Review TTL configurations and data access patterns.'
    );
  }

  // Performance estimates
  const performance = {
    cacheHitLatency: 50, // Estimated in ms for cache hits
    cacheMissLatency: 3000, // Estimated for MCP calls
    averageLatency: cacheStats.hitRate * 50 + (1 - cacheStats.hitRate) * 3000,
  };

  return {
    metrics,
    performance,
    recommendations,
  };
}

/**
 * Monitor cache effectiveness
 */
export async function monitorCacheEffectiveness(): Promise<{
  effective: boolean;
  hitRate: number;
  message: string;
}> {
  const analytics = await getCacheAnalytics();
  const hitRate = analytics.metrics.hitRate;

  return {
    effective: hitRate > 0.3,
    hitRate,
    message: hitRate > 0.3
      ? `Cache is effective (${(hitRate * 100).toFixed(1)}% hit rate)`
      : `Cache needs optimization (${(hitRate * 100).toFixed(1)}% hit rate)`,
  };
}

/**
 * Export cache metrics for monitoring dashboards
 */
export async function exportCacheMetrics(): Promise<CacheMetrics> {
  const analytics = await getCacheAnalytics();
  return analytics.metrics;
}

