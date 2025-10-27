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
 * Build transaction analysis prompt
 */
export function buildTransactionAnalysisPrompt(txHash: string, data: any, chainName: string = 'Ethereum'): string {
  if (!txHash) {
    return `
The user wants to analyze a transaction but didn't provide a transaction hash on ${chainName}.

Please provide a helpful response that:
1. Explains they need to provide a valid transaction hash
2. Shows example of a valid transaction hash format (0x... with 64 hexadecimal characters)
3. Offers to analyze it once they provide the hash
4. Explains what transaction analysis typically shows
`;
  }

  if (!data || Object.keys(data).length === 0 || data.error) {
    return `
The user wants to analyze transaction ${txHash} on ${chainName}, but blockchain data is unavailable.

${data?.error ? `Error: ${data.error}` : ''}

Please provide a helpful response that:
1. Acknowledges the request for ${txHash}
2. Explains the data is currently unavailable
3. Suggests checking the transaction hash format or trying again
4. Provides general information about transaction analysis on ${chainName}
`;
  }

  return `
You are analyzing transaction ${txHash} on the ${chainName} blockchain.

## Transaction Analysis Tasks:

1. **Transaction Overview**: Summarize what this transaction does in simple terms
2. **Contract Interaction**: What contract(s) were called and which methods?
3. **Flow Analysis**: Trace the value/asset flows through this transaction
4. **Gas Analysis**: Calculate gas efficiency and compare to typical transactions
5. **Success Status**: Was the transaction successful? If not, why?
6. **Event Analysis**: What events were emitted and what do they mean?
7. **Significance**: Is this transaction part of a larger pattern (e.g., Uniswap swap, NFT mint)?

## Transaction Data:

${JSON.stringify(data, null, 2)}

Provide a comprehensive, human-readable analysis of this transaction. Use specific values from the data and explain what actually happened on-chain.
`;
}

/**
 * Build token transfer analysis prompt
 */
export function buildTokenTransferAnalysisPrompt(address: string, data: any, chainName: string = 'Ethereum'): string {
  if (!address) {
    return `
The user wants to analyze token transfers but didn't provide an address on ${chainName}.

Please provide a helpful response that:
1. Explains they need to provide a valid wallet address
2. Shows example of a valid Ethereum address format
3. Offers to analyze transfers once they provide the address
4. Explains what token transfer analysis shows
`;
  }

  if (!data || Object.keys(data).length === 0 || data.error) {
    return `
The user wants to analyze token transfers for ${address} on ${chainName}, but blockchain data is unavailable.

${data?.error ? `Error: ${data.error}` : ''}

Please provide a helpful response acknowledging the request and explaining the data is currently unavailable.
`;
  }

  return `
You are analyzing token transfers for address ${address} on the ${chainName} blockchain.

## Transfer Analysis Tasks:

1. **Transfer Patterns**: Identify patterns in the token transfers (frequency, amounts, direction)
2. **Major Tokens**: What are the most active tokens (ERC-20)?
3. **Flow Direction**: Is this address primarily sending, receiving, or both?
4. **Time Analysis**: Are there any temporal patterns (time of day, day of week)?
5. **Value Analysis**: Calculate total value transferred and average transfer size
6. **Anomalies**: Identify any unusual or suspicious transfer patterns
7. **Correlations**: Can you detect relationships between different token transfers?

## Transfer Data:

${JSON.stringify(data, null, 2)}

Provide a comprehensive analysis of token transfer patterns. Identify trends, anomalies, and insights about the address's token activity.
`;
}

/**
 * Build NFT holdings analysis prompt
 */
export function buildNFTAnalysisPrompt(address: string, data: any, chainName: string = 'Ethereum'): string {
  if (!address) {
    return `
The user wants to analyze NFT holdings but didn't provide an address on ${chainName}.

Please provide a helpful response that:
1. Explains they need to provide a valid wallet address
2. Shows example of a valid Ethereum address format
3. Offers to analyze NFTs once they provide the address
4. Explains what NFT analysis shows
`;
  }

  if (!data || Object.keys(data).length === 0 || data.error) {
    return `
The user wants to analyze NFT holdings for ${address} on ${chainName}, but blockchain data is unavailable.

${data?.error ? `Error: ${data.error}` : ''}

Please provide a helpful response acknowledging the request and explaining the data is currently unavailable.
`;
  }

  return `
You are analyzing NFT holdings for address ${address} on the ${chainName} blockchain.

## NFT Analysis Tasks:

1. **Portfolio Composition**: What NFT collections does this address own?
2. **Collection Breakdown**: How many NFTs are in each collection?
3. **Collection Identification**: Identify popular collections (Bored Ape, CryptoPunks, etc.)
4. **Holder Patterns**: Is this a collector address (multiple collections) or single-collection holder?
5. **Acquisition Timeline**: When were NFTs acquired (if timestamps available)?
6. **Rarity Indicators**: Can you identify any rare or notable NFTs?
7. **Portfolio Value**: Estimate collection diversity and potential value

## NFT Data:

${JSON.stringify(data, null, 2)}

Provide a comprehensive analysis of the NFT portfolio. Group NFTs by collection, identify trends, and provide insights about the address's NFT activity.
`;
}

/**
 * Build transaction logs analysis prompt for event decoding
 */
export function buildTransactionLogsPrompt(txHash: string, logs: any, chainName: string = 'Ethereum'): string {
  if (!txHash) {
    return `Please provide a valid transaction hash to analyze events.`;
  }

  if (!logs || (Array.isArray(logs) && logs.length === 0) || logs.error) {
    return `
Cannot decode events for transaction ${txHash} on ${chainName}.

${logs?.error ? `Error: ${logs.error}` : 'No events found.'}

Provide a helpful response explaining what this typically means (e.g., simple value transfer, no contract events).
`;
  }

  return `
Decode and explain the events emitted by transaction ${txHash} on the ${chainName} blockchain.

## Event Decoding Tasks:

1. **Event Identification**: What smart contract events were emitted?
2. **Event Names**: Decode the event names from topics (if available)
3. **Event Data**: What data was included in each event?
4. **Human-Readable Explanation**: Explain what each event means in plain language
5. **Contract Interaction**: Which contracts emitted events and why?
6. **Significance**: What do these events tell us about the transaction purpose?

## Event Logs Data:

${JSON.stringify(logs, null, 2)}

Provide a clear, human-readable breakdown of all events in this transaction.
`;
}

/**
 * Build gas analysis prompt
 */
export function buildGasAnalysisPrompt(txData: any, chainName: string = 'Ethereum'): string {
  if (!txData || !txData.gas_used || !txData.gas_price) {
    return `Insufficient gas data available for analysis.`;
  }

  return `
Analyze the gas usage for this transaction on the ${chainName} blockchain.

## Gas Analysis Tasks:

1. **Gas Used**: How much gas was consumed and what percentage of the block?
2. **Gas Price**: What was the gas price and fee per unit?
3. **Total Cost**: Calculate the total transaction cost in ETH and USD
4. **Efficiency**: Is this transaction gas-efficient or inefficient?
5. **Optimization Opportunities**: Could this transaction have used less gas?
6. **Comparison**: How does this compare to similar transactions?

## Transaction Data:

${JSON.stringify(txData, null, 2)}

Provide specific gas analysis with cost breakdown and efficiency insights.
`;
}

/**
 * Build block information analysis prompt
 */
export function buildBlockInfoPrompt(blockNumberOrHash: string, data: any, chainName: string = 'Ethereum'): string {
  if (!blockNumberOrHash) {
    return `
The user wants to analyze a block but didn't provide a block number or hash on ${chainName}.

Please provide a helpful response that:
1. Explains they need to provide a valid block number or hash
2. Shows example of valid block references
3. Offers to analyze it once they provide the reference
4. Explains what block analysis typically shows
`;
  }

  if (!data || Object.keys(data).length === 0 || data.error) {
    return `
The user wants to analyze block ${blockNumberOrHash} on ${chainName}, but blockchain data is unavailable.

${data?.error ? `Error: ${data.error}` : ''}

Please provide a helpful response that:
1. Acknowledges the request for ${blockNumberOrHash}
2. Explains the data is currently unavailable
3. Suggests checking the block reference or trying again
4. Provides general information about block analysis on ${chainName}
`;
  }

  return `
You are analyzing block ${blockNumberOrHash} on the ${chainName} blockchain.

## Block Analysis Tasks:

1. **Block Summary**: Provide an overview of this block
2. **Block Properties**: Block number, hash, timestamp, miner, gas usage
3. **Transaction Count**: How many transactions are in this block?
4. **Block Size**: What is the size of this block?
5. **Gas Analysis**: Average gas price, total gas used, gas efficiency
6. **Significance**: Was this a particularly active or significant block?
7. **Notable Transactions**: Are there any high-value or interesting transactions?

## Block Data:

${JSON.stringify(data, null, 2)}

Provide a comprehensive analysis of this block with specific details and insights.
`;
}

/**
 * Estimate token usage for prompt
 */
export function estimatePromptTokens(prompt: string): number {
  // Rough estimation: ~4 characters per token for English
  return Math.ceil(prompt.length / 4);
}

