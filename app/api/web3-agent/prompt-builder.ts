/**
 * Backend prompt building logic for Web3 Agent API
 * Integrates cached context with AI prompts
 */

import {
  buildWeb3Prompt,
  buildAccountAnalysisPrompt,
  buildTokenAnalysisPrompt,
  buildContractEventsPrompt,
  buildChainHealthPrompt,
} from '@/lib/web3/prompt-builder';
import type { Message } from '@/lib/cache/conversation-manager';
import { parseWeb3Query } from '@/lib/web3/query-parser';

export interface PromptContext {
  query: string;
  cachedContext?: any;
  conversationHistory?: Message[];
  queryType?: string;
  chainId?: number;
  chainName?: string;
}

/**
 * Build optimized prompt for backend API
 */
export function buildOptimizedPrompt(context: PromptContext): {
  prompt: string;
  tokenEstimate: number;
} {
  const { query, cachedContext, conversationHistory = [], queryType, chainId, chainName } = context;

  // Determine query type and build appropriate prompt
  const parsedQuery = parseWeb3Query(query);
  const effectiveType = queryType || parsedQuery.type;

  // Get chain name from ID
  const chainNames: Record<number, string> = {
    1: 'Ethereum',
    8453: 'Base',
    10: 'Optimism',
    137: 'Polygon',
    42161: 'Arbitrum',
  };
  const effectiveChainName = chainName || chainNames[chainId || 1] || 'Ethereum';
  
  // Add chain context prefix to query
  const chainContextPrefix = `[Query for ${effectiveChainName} blockchain]\n\n`;

  let prompt: string;

  switch (effectiveType) {
    case 'account_summary':
      prompt = buildAccountAnalysisPrompt(
        parsedQuery.entities.address || '',
        cachedContext || {},
        effectiveChainName,
      );
      break;

    case 'token_holders':
      prompt = buildTokenAnalysisPrompt(
        parsedQuery.entities.token || '',
        cachedContext || {},
        effectiveChainName,
      );
      break;

    case 'contract_events':
      prompt = buildContractEventsPrompt(
        parsedQuery.entities.contract || '',
        cachedContext || {},
        effectiveChainName,
      );
      break;

    case 'chain_status':
      prompt = buildChainHealthPrompt(cachedContext || {}, effectiveChainName);
      break;

    default:
      prompt = buildWeb3Prompt(query, cachedContext, conversationHistory, effectiveChainName);
  }

  // Add chain context prefix
  prompt = chainContextPrefix + prompt;

  // Estimate token usage
  const tokenEstimate = Math.ceil(prompt.length / 4); // ~4 chars per token

  return { prompt, tokenEstimate };
}

/**
 * Build streaming prompt for real-time responses
 */
export function buildStreamingPrompt(
  query: string,
  cachedContext: any,
  conversationHistory: Message[],
): string {
  return buildWeb3Prompt(query, cachedContext, conversationHistory);
}

/**
 * Get context summary for prompt optimization
 */
export function getContextSummary(cachedContext: any): string {
  if (!cachedContext) return 'No context available.';

  // Extract key fields for summary
  const summary = {
    hasTransactions: !!cachedContext.transactions?.length,
    hasEvents: !!cachedContext.events?.length,
    hasHolders: !!cachedContext.holders?.length,
    balance: cachedContext.balance,
    timestamp: cachedContext.timestamp,
  };

  return JSON.stringify(summary, null, 2);
}

/**
 * Validate prompt won't exceed token limits
 */
export function validatePromptLength(
  prompt: string,
  maxTokens: number = 16000,
): boolean {
  const estimatedTokens = Math.ceil(prompt.length / 4);
  return estimatedTokens < maxTokens;
}

/**
 * Truncate prompt if too long
 */
export function truncatePrompt(
  prompt: string,
  maxTokens: number = 16000,
): string {
  if (validatePromptLength(prompt, maxTokens)) {
    return prompt;
  }

  const maxChars = maxTokens * 4;
  const truncationMarker = '\n\n[Context truncated due to length...]';
  return prompt.slice(0, maxChars - truncationMarker.length) + truncationMarker;
}

