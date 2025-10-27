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
You are an expert blockchain analyst AI assistant powered by real-time blockchain data from Blockscout. Use the provided blockchain data to answer user queries accurately.

## IMPORTANT:
- Use ONLY the provided blockchain data to answer the query
- DO NOT say you cannot access blockchain data - you have it below
- Provide specific numbers, addresses, and data from the blockchain data provided
- If data is missing, clearly state what's not available

## Context Data:

${formatContextData(cachedContext)}

${conversationHistory.length > 0 ? formatConversationHistory(conversationHistory) : ''}

## User Query:

${query}

Based on the blockchain data above, provide a clear and accurate answer to the user's query. Include specific details from the data when possible.
`;

  return analysisInstructions;
}

/**
 * Format blockchain context data for prompt
 */
function formatContextData(context: any): string {
  if (!context || Object.keys(context).length === 0) {
    return 'No blockchain data available. Please inform the user that the data could not be fetched.';
  }

  // Check if context has error
  if (context.error) {
    return `Error fetching blockchain data: ${context.error}. Please inform the user that data could not be retrieved.`;
  }

  // Format the context nicely for AI with unit conversions
  let formatted = 'Blockchain Data:\n';
  
  // Format balance information properly - remove raw values completely
  const formattedContext = { ...context };
  
  // Remove raw wei balance field completely
  if (formattedContext.coin_balance) {
    delete formattedContext.coin_balance;
  }
  
  // Convert and add formatted balance
  if (context.coin_balance && typeof context.coin_balance === 'string') {
    // Convert wei to ETH (divide by 10^18)
    const wei = BigInt(context.coin_balance);
    const eth = Number(wei) / 1e18;
    const usdValue = eth * (parseFloat(context.exchange_rate) || 0);
    
    // Add only the formatted balance in ETH and USD
    formattedContext.balance_eth = `${eth.toFixed(6)} ETH`;
    formattedContext.balance_usd = `$${usdValue.toFixed(2)} USD`;
    formattedContext.balance = `${formattedContext.balance_eth} (${formattedContext.balance_usd})`;
  }
  
  formatted += JSON.stringify(formattedContext, null, 2);
  formatted += '\n\nCRITICAL: The "balance" field shows the actual ETH amount and USD value.\n';
  formatted += 'When discussing balances, ALWAYS use the "balance" field only.\n';
  formatted += 'NEVER mention any wei values or raw numbers.\n\n';
  formatted += 'Please analyze this data and answer the user query based on the provided blockchain information.';
  
  return formatted;
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

