/**
 * Time-to-Live (TTL) configuration for cache layers
 * Values are in seconds
 */

export const CACHE_TTL = {
  // MCP Response Caching - reduces API calls to Blockscout
  LATEST_BLOCK: 30, // 30 seconds - frequently updated
  TOKEN_HOLDERS: 300, // 5 minutes - semi-static data
  ACCOUNT_SUMMARY: 60, // 1 minute - moderately dynamic
  CONTRACT_EVENTS: 300, // 5 minutes - historical data
  CHAIN_STATUS: 60, // 1 minute - network health

  // AI Output Caching - return instant responses for identical queries
  AI_OUTPUT: 3600, // 1 hour - deterministic responses

  // Conversation Context - maintain multi-turn state
  CONVERSATION: 86400, // 24 hours - session context

  // Rate Limiting
  RATE_LIMIT: 1, // 1 second - sliding window
} as const;

/**
 * Get TTL for specific cache type
 */
export function getCacheTTL(type: keyof typeof CACHE_TTL): number {
  return CACHE_TTL[type];
}

/**
 * Cache key prefixes for organization
 */
export const CACHE_PREFIX = {
  MCP_DATA: 'mcp_data',
  AI_OUTPUT: 'ai_output',
  CONVERSATION: 'conversation',
  RATE_LIMIT: 'ratelimit',
} as const;

/**
 * Generate cache key with prefix
 */
export function generateCacheKey(
  prefix: string,
  ...parts: (string | number)[]
): string {
  return `${prefix}:${parts.join(':')}`;
}

/**
 * Generate MCP cache key (alias for generateCacheKey with MCP_DATA prefix)
 */
export function generateMCPCacheKey(...parts: (string | number)[]): string {
  return generateCacheKey(CACHE_PREFIX.MCP_DATA, ...parts);
}


