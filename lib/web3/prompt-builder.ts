import type { Message } from '@/lib/cache/conversation-manager';

/**
 * Build AI prompt for Web3 blockchain analysis
 */
export function buildWeb3Prompt(
  query: string,
  cachedContext: any,
  conversationHistory: Message[] = [],
): string {
  // Build the analysis prompt structure
  const analysisInstructions = `
You are an expert blockchain analyst AI assistant. Analyze the provided blockchain data and answer the user's query in a clear, structured manner.

## Analysis Guidelines:

1. **Token Approvals & Transfers**: Identify any token approvals and significant transfers
2. **Interacted Contracts**: List all smart contracts the address has interacted with
3. **High-Value Transactions**: Highlight any large value movements
4. **Smart Contract Calls**: Explain the purpose of notable contract interactions
5. **Anomalies & Risks**: Flag any suspicious activity or unusual patterns

## Context Data:

${formatContextData(cachedContext)}

${conversationHistory.length > 0 ? formatConversationHistory(conversationHistory) : ''}

## User Query:

${query}

Please provide a comprehensive analysis based on the data above.
`;

  return analysisInstructions;
}

/**
 * Format blockchain context data for prompt
 */
function formatContextData(context: any): string {
  if (!context) {
    return 'No context data available.';
  }

  return JSON.stringify(context, null, 2);
}

/**
 * Format conversation history for context
 */
function formatConversationHistory(history: Message[]): string {
  if (history.length === 0) return '';

  const recentHistory = history.slice(-5); // Last 5 messages for context

  return `
## Previous Conversation:

${recentHistory.map(msg => `[${msg.role.toUpperCase()}]: ${msg.content}`).join('\n\n')}
`;
}

/**
 * Build summary prompt for quick insights
 */
export function buildSummaryPrompt(query: string, data: any): string {
  return `
Summarize the following blockchain data in 2-3 sentences:

Query: ${query}

Data:
${JSON.stringify(data, null, 2)}
`;
}

/**
 * Build account analysis prompt
 */
export function buildAccountAnalysisPrompt(address: string, data: any): string {
  return `
Analyze the account ${address}:

1. What type of account is this? (EOA, Contract, etc.)
2. What are the main activities of this account?
3. Are there any suspicious patterns?
4. Summarize the account's transaction history

Data:
${JSON.stringify(data, null, 2)}
`;
}

/**
 * Build token analysis prompt
 */
export function buildTokenAnalysisPrompt(tokenAddress: string, data: any): string {
  return `
Analyze the token ${tokenAddress}:

1. Token distribution and holders
2. Major holders and their percentages
3. Any notable patterns in holder activity

Data:
${JSON.stringify(data, null, 2)}
`;
}

/**
 * Build contract events analysis prompt
 */
export function buildContractEventsPrompt(contractAddress: string, events: any): string {
  return `
Analyze recent events for contract ${contractAddress}:

1. What types of events are being emitted?
2. Are there any patterns or anomalies?
3. Most frequent event types
4. Recent activity summary

Events Data:
${JSON.stringify(events, null, 2)}
`;
}

/**
 * Build chain health summary prompt
 */
export function buildChainHealthPrompt(healthData: any): string {
  return `
Provide a network health summary:

1. Current network status
2. Latest block information
3. Network activity level
4. Any issues or concerns

Health Data:
${JSON.stringify(healthData, null, 2)}
`;
}

/**
 * Estimate token usage for prompt
 */
export function estimatePromptTokens(prompt: string): number {
  // Rough estimation: ~4 characters per token for English
  return Math.ceil(prompt.length / 4);
}

