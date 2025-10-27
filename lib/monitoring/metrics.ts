/**
 * Performance metrics tracking
 */

import { getCacheManager } from '@/lib/cache/cache-manager';

export interface MetricsSnapshot {
  timestamp: number;
  cacheStats: {
    hits: number;
    misses: number;
    hitRate: number;
  };
  apiStats: {
    totalRequests: number;
    averageLatency: number;
    errorRate: number;
  };
  systemStats: {
    memoryUsage?: number;
    activeConnections?: number;
  };
}

export class MetricsCollector {
  private cacheManager = getCacheManager();
  private metrics: {
    requests: number[];
    errors: number;
    cacheHits: number;
    cacheMisses: number;
  };

  constructor() {
    this.metrics = {
      requests: [],
      errors: 0,
      cacheHits: 0,
      cacheMisses: 0,
    };
  }

  /**
   * Track API latency
   */
  trackLatency(endpoint: string, duration: number): void {
    this.metrics.requests.push(duration);
    
    // Keep only last 1000 requests
    if (this.metrics.requests.length > 1000) {
      this.metrics.requests.shift();
    }
  }

  /**
   * Track failure rate
   */
  trackFailure(endpoint: string): void {
    this.metrics.errors++;
  }

  /**
   * Track cache operation
   */
  trackCache(hit: boolean): void {
    if (hit) {
      this.metrics.cacheHits++;
    } else {
      this.metrics.cacheMisses++;
    }
  }

  /**
   * Get current snapshot
   */
  getSnapshot(): MetricsSnapshot {
    const cacheStats = this.cacheManager.getCacheStats();
    const requests = this.metrics.requests;
    const averageLatency = requests.length > 0
      ? requests.reduce((a, b) => a + b, 0) / requests.length
      : 0;
    
    const totalRequests = requests.length;
    const errorRate = totalRequests > 0
      ? this.metrics.errors / totalRequests
      : 0;

    return {
      timestamp: Date.now(),
      cacheStats: {
        hits: cacheStats.hits,
        misses: cacheStats.misses,
        hitRate: cacheStats.hitRate,
      },
      apiStats: {
        totalRequests,
        averageLatency,
        errorRate,
      },
      systemStats: {},
    };
  }

  /**
   * Reset metrics
   */
  reset(): void {
    this.metrics = {
      requests: [],
      errors: 0,
      cacheHits: 0,
      cacheMisses: 0,
    };
    this.cacheManager.resetStats();
  }

  /**
   * Get cache performance metrics
   */
  getCacheMetrics() {
    return this.cacheManager.getCacheStats();
  }
}

// Singleton instance
let metricsCollector: MetricsCollector | null = null;

/**
 * Get or create metrics collector singleton
 */
export function getMetricsCollector(): MetricsCollector {
  if (!metricsCollector) {
    metricsCollector = new MetricsCollector();
  }
  return metricsCollector;
}

/**
 * Track latency helper
 */
export function trackLatency(endpoint: string, duration: number): void {
  getMetricsCollector().trackLatency(endpoint, duration);
}

/**
 * Track failure rate helper
 */
export function trackFailureRate(endpoint: string, failures: number): void {
  for (let i = 0; i < failures; i++) {
    getMetricsCollector().trackFailure(endpoint);
  }
}

