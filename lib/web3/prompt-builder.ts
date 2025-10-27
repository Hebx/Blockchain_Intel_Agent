import type { Message } from '@/lib/cache/conversation-manager';

/**
 * Build AI prompt for Web3 blockchain analysis
 */
export function buildWeb3Prompt(
  query: string,
  cachedContext: any,
  conversationHistory: Message[] = [],
  chainName: string = 'Ethereum',
): string {
  // Build the analysis prompt structure
  const analysisInstructions = `
You are an expert blockchain analyst AI assistant powered by real-time blockchain data from Blockscout for the ${chainName} blockchain.

## IMPORTANT:
- You are analyzing data from the ${chainName} blockchain
- Use the provided blockchain data to answer queries accurately
- ALWAYS provide a helpful response, even if specific data is unavailable
- If data is missing, explain what's missing and provide general information about ${chainName} or helpful suggestions
- DO NOT say you cannot access blockchain data - you have access through Blockscout
- Provide specific numbers, addresses, and data from the blockchain data when available
- If the user query cannot be fully answered, provide partial information and suggest alternatives

## Context Data:

${formatContextData(cachedContext, chainName)}

${conversationHistory.length > 0 ? formatConversationHistory(conversationHistory) : ''}

## User Query:

${query}

Based on the blockchain data above, provide a clear and helpful answer to the user's query on the ${chainName} blockchain. Include specific details from the data when available, or provide general guidance if data is missing.
`;

  return analysisInstructions;
}

/**
 * Format blockchain context data for prompt
 */
function formatContextData(context: any, chainName: string = 'Ethereum'): string {
  if (!context || Object.keys(context).length === 0) {
    return `No specific blockchain data available for this query on ${chainName}. Please provide a general, helpful response about ${chainName} blockchain and suggest what information the user might need to provide (e.g., wallet address, token contract address) for a more specific answer.`;
  }

  // Check if context has error
  if (context.error) {
    return `Error fetching blockchain data from ${chainName}: ${context.error}. Please acknowledge this issue and provide general information about ${chainName} blockchain or helpful suggestions for the user.`;
  }

  // Format the context nicely for AI with unit conversions
  let formatted = 'Blockchain Data:\n';
  
  // Format balance information properly - remove raw values completely
  const formattedContext = { ...context };
  
  // Convert and add formatted balance BEFORE deleting the raw field
  if (context.coin_balance && typeof context.coin_balance === 'string') {
    // Convert wei to ETH (divide by 10^18)
    const wei = BigInt(context.coin_balance);
    const eth = Number(wei) / 1e18;
    const usdValue = eth * (parseFloat(context.exchange_rate) || 0);
    
    // Add only the formatted balance in ETH and USD
    formattedContext.balance_eth = `${eth.toFixed(6)} ETH`;
    formattedContext.balance_usd = `$${usdValue.toFixed(2)} USD`;
    formattedContext.balance = `${formattedContext.balance_eth} (${formattedContext.balance_usd})`;
    
    // Now remove the raw wei balance field completely
    delete formattedContext.coin_balance;
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
export function buildAccountAnalysisPrompt(address: string, data: any, chainName: string = 'Ethereum'): string {
  if (!address) {
    return `
The user wants to analyze a wallet but didn't provide an address on ${chainName}.

Please provide a helpful response that:
1. Explains they need to provide a valid wallet address
2. Shows example of a valid Ethereum address format (0x... with 40 hexadecimal characters)
3. Offers to analyze it once they provide the address
4. Provides general information about wallet analysis capabilities on ${chainName}
`;
  }

  if (!data || Object.keys(data).length === 0 || data.error) {
    return `
The user wants to analyze wallet ${address} on ${chainName}, but blockchain data is unavailable.

${data?.error ? `Error: ${data.error}` : ''}

Please provide a helpful response that:
1. Acknowledges the request for ${address}
2. Explains the data is currently unavailable
3. Suggests checking the address format or trying again
4. Provides general information about what wallet analysis typically shows
`;
  }

  return `
Analyze the account ${address} on ${chainName}:

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
export function buildTokenAnalysisPrompt(tokenAddress: string, data: any, chainName: string = 'Ethereum'): string {
  if (!tokenAddress) {
    return `
The user wants to analyze token holders but didn't provide a token contract address on ${chainName}.

Please provide a helpful response that:
1. Explains they need to provide a valid token contract address
2. Shows example of popular tokens on ${chainName} (e.g., USDC, USDT, DAI)
3. Offers to analyze holders once they provide the address
4. Explains what token holder analysis shows
`;
  }

  if (!data || Object.keys(data).length === 0 || data.error) {
    return `
The user wants to analyze token ${tokenAddress} on ${chainName}, but blockchain data is unavailable.

${data?.error ? `Error: ${data.error}` : ''}

Please provide a helpful response that:
1. Acknowledges the request for ${tokenAddress}
2. Explains the data is currently unavailable
3. Suggests checking if the address is a valid token contract
4. Provides general information about token holder analysis
`;
  }

  return `
Analyze the token ${tokenAddress} on ${chainName}:

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
export function buildContractEventsPrompt(contractAddress: string, events: any, chainName: string = 'Ethereum'): string {
  if (!contractAddress) {
    return `
The user wants to analyze contract events but didn't provide a contract address on ${chainName}.

Please provide a helpful response explaining they need to provide a valid contract address.
`;
  }

  if (!events || Object.keys(events).length === 0 || events.error) {
    return `
The user wants to analyze contract ${contractAddress} on ${chainName}, but event data is unavailable.

${events?.error ? `Error: ${events.error}` : ''}

Please provide a helpful response acknowledging the request and explaining the data is currently unavailable.
`;
  }

  return `
Analyze recent events for contract ${contractAddress} on ${chainName}:

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
export function buildChainHealthPrompt(healthData: any, chainName: string = 'Ethereum'): string {
  if (!healthData || Object.keys(healthData).length === 0 || healthData.error) {
    return `
The user wants chain health information for ${chainName}, but data is unavailable.

Please provide general information about ${chainName} blockchain status and what chain health monitoring typically includes.
`;
  }

  return `
Provide a network health summary for ${chainName}:

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

