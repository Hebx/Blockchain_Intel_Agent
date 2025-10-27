/**
 * Advanced prompt templates for deep blockchain analysis
 * Supports multi-step reasoning, comprehensive analysis, and chain-of-custody research
 */

export interface AnalysisContext {
  address?: string;
  tokenAddress?: string;
  txHash?: string;
  chainId: number;
  chainName: string;
  data?: any;
  additionalData?: Record<string, any>;
}

/**
 * Comprehensive account analysis prompt
 * Analyzes wallet behavior, transaction patterns, token holdings, and potential risks
 */
export function buildFullAccountAnalysisPrompt(context: AnalysisContext): string {
  const { address, chainName, data, additionalData } = context;
  
  return `You are conducting a comprehensive blockchain forensic analysis for address ${address} on ${chainName}.

## ANALYSIS FRAMEWORK

Execute this multi-part investigation:

### PHASE 1: ACCOUNT PROFILE & CLASSIFICATION
1. **Account Type**: Is this an EOA (externally owned account) or smart contract?
2. **Primary Purpose**: Classify the account (trader, DeFi user, NFT collector, bot, exchange, etc.)
3. **Activity Level**: Categorize activity as dormant/low/moderate/high/extreme
4. **Account Age**: When was it created? How long has it been active?

### PHASE 2: TRANSACTION BEHAVIOR ANALYSIS
5. **Transaction Frequency**: How many transactions? What's the temporal pattern?
6. **Transaction Value**: What are the typical amounts? Any unusually large transfers?
7. **Gas Usage Patterns**: Is this account spending unusually on gas?
8. **Time Patterns**: Are there specific times/days when activity peaks?
9. **Counterparties**: Who does this account interact with? (exchanges, DEXs, wallets, contracts)

### PHASE 3: FINANCIAL PROFILE
10. **Current Holdings**: What tokens/coins are held? What's the value distribution?
11. **Net Worth**: Estimate total portfolio value (native + tokens)
12. **Flow Direction**: Is this account primarily receiving or sending value?
13. **Value Concentration**: Is value concentrated in specific tokens/assets?
14. **Token Portfolio Diversity**: How many different tokens? What categories?

### PHASE 4: TOKEN ACTIVITY DEEP DIVE
15. **Token Transfer Patterns**: Frequency, amounts, direction
16. **Major Token Movements**: Largest in/out transfers and their context
17. **Token Approval Analysis**: Which contracts have unlimited approvals? Risk assessment
18. **Stablecoin Usage**: How much stablecoin activity? Purpose?
19. **DeFi Token Holdings**: LP tokens, governance tokens, yield farming indicators

### PHASE 5: DEX & DEFI INTERACTIONS
20. **DEX Usage**: Which DEXs are used? (Uniswap, SushiSwap, Curve, etc.)
21. **Swap Patterns**: What pairs are traded? Frequency and volume
22. **Liquidity Provider Activity**: Any LP position indicators?
23. **Yield Farming**: Evidence of farming strategies?
24. **Governance Participation**: Any DAO voting or governance token activity?

### PHASE 5: RISK ASSESSMENT & ANOMALIES
25. **Red Flags**: Any suspicious patterns?
   - Sudden large movements
   - Rugpull/suspicious token interactions
   - Known scam/hack addresses interacted with
   - Unusual gas spending
   - Mixing service patterns
26. **Security Concerns**: Contract approvals, potential vulnerabilities
27. **Anomalies**: Any unusual transaction patterns or timing
28. **Compliance Indicators**: KYC flags, regulatory considerations

### PHASE 6: CHAIN-OF-CUSTODY (if applicable)
29. **Fund Flow Path**: Trace major value flows from/to known addresses
30. **Fund Sources**: Where did major funds come from? (exchanges, known addresses)
31. **Fund Destinations**: Where did funds go? (exchanges, bridges, other chains)
32. **Cross-Chain Activity**: Any evidence of cross-chain bridges?
33. **Entity Clustering**: Can you identify clusters (contracts using same pattern)

## DATA TO ANALYZE

${formatAnalysisData(data, additionalData)}

## OUTPUT FORMAT

Provide a comprehensive written report structured as:
1. Executive Summary (3-5 sentences)
2. Key Findings (bullet points)
3. Detailed Analysis (by phase above)
4. Risk Assessment
5. Recommendations (if applicable)

Be specific, cite transaction hashes, addresses, and amounts. Show your reasoning.`;

}

/**
 * Chain-of-custody research prompt
 * Traces fund flows and relationships across multiple addresses
 */
export function buildChainOfCustodyPrompt(context: AnalysisContext): string {
  const { address, chainName, data, additionalData } = context;
  
  return `You are conducting chain-of-custody forensic research for ${address} on ${chainName}.

## INVESTIGATION OBJECTIVES

### PRIMARY: FUND FLOW ANALYSIS
1. **Origins**: Trace where major funds came from
   - Direct transfers from exchanges (identify which ones if possible)
   - Transfers from known addresses
   - Bridge deposits from other chains
   - Original funding source

2. **Destinations**: Trace where funds went
   - Transfers to exchanges (centralized/decentralized)
   - Transfers to known addresses
   - Bridge withdrawals to other chains
   - Smart contract interactions

3. **Path Analysis**:
   - How many hops from origin to this address?
   - What intermediaries were used?
   - Were mixing services used?
   - Any unusual routing patterns?

### SECONDARY: ADDRESS CLUSTERING & RELATIONSHIPS
4. **Connected Addresses**: 
   - Which addresses frequently interact with this one?
   - Do these form a cluster or group?
   - Can you identify common control patterns?

5. **Contract Relationships**:
   - Which contracts does this address interact with?
   - Are there repeated patterns suggesting automation?
   - Do the contract interactions reveal purpose?

6. **Entity Identification**:
   - Can you identify any exchange addresses?
   - Any known protocol addresses (Uniswap, AAVE, etc.)?
   - Any suspicious or known scam addresses?

### TERTIARY: CROSS-CHAIN ANALYSIS
7. **Bridge Activity**:
   - Evidence of funds moving between chains?
   - Which bridges were used? (Polygon, Arbitrum, Optimism, Base)
   - Timeline of cross-chain movements

8. **Multi-Chain Presence**:
   - Does this address exist on multiple chains?
   - What's the relationship between chains?
   - Is there arbitrage/trading activity?

## DATA TO ANALYZE

${formatAnalysisData(data, additionalData)}

## OUTPUT FORMAT

Provide a chain-of-custody report:

1. **Executive Summary**: Origin and destination of funds (1-2 paragraphs)

2. **Fund Flow Diagram**: Text-based flow showing:
   [Origin] → [Hop 1] → [Hop 2] → [This Address] → [Destination 1, 2, 3...]

3. **Detailed Timeline**: Chronological list of significant movements with:
   - Date/time (if available)
   - Amount
   - From/to addresses
   - Transaction hashes

4. **Address Clusters Identified**: Grouped addresses with reasoning

5. **Entity Mapping**: Known exchanges, protocols, suspicious addresses interacted with

6. **Conclusions**: Assess the legitimacy, patterns, and any red flags

Be forensic, cite evidence, show transaction hashes, amounts, and dates.`;

}

/**
 * DeFi activity analysis prompt
 * Deep dive into DeFi interactions, yields, strategies
 */
export function buildDeFiAnalysisPrompt(context: AnalysisContext): string {
  const { address, chainName, data, additionalData } = context;
  
  return `You are analyzing DeFi activity for ${address} on ${chainName}.

## DEFI ANALYSIS FRAMEWORK

### PROTOCOL INTERACTIONS
1. **Active Protocols**: Which DeFi protocols is this address using?
   - DEXs: Uniswap, SushiSwap, Curve, Balancer
   - Lending: Aave, Compound, Maker
   - Derivatives: Synthetix, dYdX
   - Yield: Yearn, Convex
   - Other: Identify specific protocol interactions

2. **Transaction Types by Protocol**:
   - Swaps: Pairs traded, frequency, typical amounts
   - Lending: Deposits, withdrawals, collateral ratios
   - Borrowing: Assets borrowed, health factors
   - Staking: Assets staked, rewards claimed
   - LP Positions: Which pools, APY/APR range

### YIELD GENERATION ANALYSIS
3. **Yield Strategies**:
   - What yield farming strategies are employed?
   - Single-sided staking or LP positions?
   - Compound harvesting patterns?
   - Optimal timing for yields?

4. **ROI Estimation**:
   - Estimate total yield earned (if possible)
   - Compare to market rates
   - Identify high-performing positions

### RISK PROFILE
5. **Smart Contract Risk**:
   - Interacted with audited protocols vs unaudited
   - Any interactions with experimental/high-risk protocols?

6. **Liquidity Risk**:
   - Are positions in liquid pools?
   - Any concentrated positions?

7. **Counterparty Risk**:
   - Risk from approvals granted
   - Slippage tolerance indicators
   - MEV exposure

### BEHAVIORAL PATTERNS
8. **Strategy Sophistication**:
   - Basic user vs advanced DeFi user
   - Evidence of automation (bots)
   - Active monitoring vs set-and-forget

9. **Gas Optimization**:
   - Uses gas-efficient strategies?
   - Batches transactions?
   - Uses L2s for cheaper transactions?

## DATA TO ANALYZE

${formatAnalysisData(data, additionalData)}

## OUTPUT FORMAT

1. **DeFi Profile Summary**: Primary activity, sophistication level, main strategies

2. **Protocol Breakdown**: Detailed analysis by protocol with:
   - Transaction count and value
   - Specific interactions
   - Estimated returns

3. **Yield Analysis**: Estimated earnings, strategy effectiveness

4. **Risk Assessment**: Contract risk, liquidity risk, approval risks

5. **Recommendations**: Optimization opportunities, risk mitigation

Be specific with amounts, protocols, and cite transaction evidence.`;

}

/**
 * NFT portfolio analysis prompt
 * Deep analysis of NFT holdings, collection strategy, value assessment
 */
export function buildNFTPortfolioAnalysisPrompt(context: AnalysisContext): string {
  const { address, chainName, data, additionalData } = context;
  
  return `You are conducting a comprehensive NFT portfolio analysis for ${address} on ${chainName}.

## NFT ANALYSIS FRAMEWORK

### COLLECTION PROFILE
1. **Portfolio Size**: Total NFTs held, distribution across collections

2. **Collection Diversity**:
   - Blue-chip (high value, established): Bored Apes, CryptoPunks, Azuki, etc.
   - Mid-tier collections
   - Emerging/experimental projects
   - PFP vs utility NFTs

3. **Holder Classification**:
   - Collector (multiple collections, diverse holdings)
   - Trader (frequent buying/selling)
   - Holder (long-term holding)
   - Flipper (quick in-and-out)

### ACQUISITION & ACTIVITY ANALYSIS
4. **Acquisition Timeline**: 
   - When were NFTs acquired?
   - Any minting activity?
   - Bulk acquisitions indicating strategy shifts?

5. **Spending Patterns**:
   - Total spent on acquisitions
   - Average price per NFT
   - Notable high-value purchases

6. **Collection Strategy**:
   - Focus on 1-2 collections vs diversification?
   - Standing collections vs trading strategy?
   - Collection completion attempts?

### FINANCIAL ANALYSIS
7. **Portfolio Value** (estimated):
   - Blue-chip holdings value estimate
   - Total portfolio value range
   - Collection value distribution

8. **Transaction History**:
   - Buys vs sells ratio
   - Holding periods
   - Realized gains/losses (if trackable)

### RISK & SECURITY
9. **Collection Quality**:
   - Verified vs unverified collections
   - Potential scams or unauthorized collections

10. **Security Assessment**:
    - Sloppy minting operations
    - Approvals granted to NFT contracts
    - Marketplace activity security

## DATA TO ANALYZE

${formatAnalysisData(data, additionalData)}

## OUTPUT FORMAT

1. **Portfolio Overview**: Size, collections, estimated value

2. **Collection Deep-Dive**: Analysis of each major collection

3. **Acquisition Strategy**: Patterns, timing, spending

4. **Holder Classification**: Type of NFT user (collector/trader/etc.)

5. **Portfolio Value Estimate**: Valuation with reasoning

6. **Risk Assessment**: Security, collection quality, market risk

Be specific with collection names, acquisition dates, and current holdings.`;

}

/**
 * Transaction flow analysis prompt
 * Deep analysis of complex transactions, especially DEX swaps and DeFi interactions
 */
export function buildTransactionFlowAnalysisPrompt(context: AnalysisContext): string {
  const { txHash, chainName, data, additionalData } = context;
  
  return `You are analyzing transaction ${txHash} on ${chainName} in forensic detail.

## TRANSACTION ANALYSIS FRAMEWORK

### BASIC TRANSACTION INFO
1. **Transaction Summary**: What happened in plain English?

2. **Success Status**: Did it succeed? Gas used, gas price, total cost

3. **Timing**: Block number, timestamp, position in block

### FLOW DECONSTRUCTION
4. **Value Flow Path**: Trace exactly how value moved
   - Input: What went in (tokens, amounts, sources)
   - Processing: What happened in between (DEX swap, lending, etc.)
   - Output: What came out (tokens, amounts, destinations)

5. **Hop-by-Hop Analysis**: 
   - Each contract call
   - Each token transfer
   - Each state change

6. **DeFi Interaction Mapping**:
   - Which protocols were involved?
   - What functions were called?
   - What was the routing strategy?

### DEX SPECIFIC ANALYSIS (if applicable)
7. **Swap Details**:
   - Token pairs (from → to)
   - Amounts swapped
   - Price impact
   - Routing path (direct vs through multiple pools)

8. **Liquidity Analysis**:
   - Which pools were used?
   - Estimated fees paid
   - Slippage tolerance

### SMART CONTRACT INTERACTION
9. **Contracts Called**: Which contracts? In what order?

10. **Methods Executed**: Specific function calls

11. **Events Emitted**: What events? What do they tell us?

12. **State Changes**: What state changed in each contract?

### VALUE CALCULATION
13. **Input Value**: What was the input worth (in USD if possible)?

14. **Output Value**: What was the output worth?

15. **Fees**: Gas fees, DEX fees, any other fees

16. **Net Result**: Profit/loss on this transaction (if determinable)

### PURPOSE & STRATEGY
17. **Transaction Purpose**:
   - Simple swap?
   - Part of larger strategy (arbitrage, yield farming, liquidation)?
   - Defensive (prevent liquidation)?
   - Income generation?

18. **Sophistication**: Basic user vs advanced strategy?

19. **Context**: Does this fit a pattern? Part of a larger operation?

## DATA TO ANALYZE

${formatAnalysisData(data, additionalData)}

## OUTPUT FORMAT

1. **Transaction Overview**: One-sentence summary

2. **Flow Diagram**: Text-based diagram showing the flow
   [Input Token] → [Contract 1: Method] → [Contract 2: Method] → [Output Token]

3. **Value Analysis**: Input, output, fees, net result

4. **Execution Path**: Detailed step-by-step of what happened

5. **Purpose Assessment**: Why was this done? Strategy?

6. **Sophistication**: Beginner vs advanced execution

Be specific with amounts, addresses, contract calls, and hashes.`;

}

/**
 * Multi-address comparative analysis
 * Compares multiple addresses to find patterns, relationships, clusters
 */
export function buildMultiAddressAnalysisPrompt(context: AnalysisContext): string {
  const { additionalData } = context;
  const addresses = additionalData?.addresses || [];
  
  return `You are conducting comparative analysis across multiple addresses on ${context.chainName}.

## COMPARATIVE ANALYSIS FRAMEWORK

### ADDRESSES ANALYZED
${addresses.map((addr: string, i: number) => `${i + 1}. ${addr}`).join('\n')}

### PROFILE COMPARISON
1. **Account Types**: Classify each address (EOA/contract, trader/user/bot/exchange)

2. **Activity Levels**: Compare transaction frequency, volume

3. **Primary Purpose**: Similar or different purposes?

4. **Balance Comparison**: Native token and token holdings

### RELATIONSHIP ANALYSIS
5. **Direct Interactions**: Do any of these addresses interact with each other?

6. **Common Counterparties**: Do they interact with the same addresses/contracts?

7. **Shared Patterns**:
   - Similar transaction times?
   - Similar transaction patterns?
   - Similar token holdings?

8. **Grouping Assessment**: Can you identify if these belong to:
   - Same entity/individual
   - Connected wallets (same person/entity)
   - Automated system (bots using same strategy)
   - Related accounts (multi-sig, treasury, etc.)

### TRANSPARENCY & RISK
9. **Entity Identification**: Can you identify any known entities?

10. **Risk Profiling**: Are any addresses high-risk or suspicious?

11. **Compliance Indicators**: Exchange addresses, regulated services?

### DATA ANALYSIS

${formatAnalysisData(null, additionalData)}

## OUTPUT FORMAT

1. **Individual Profiles**: Brief analysis of each address

2. **Relationship Matrix**: How addresses relate to each other

3. **Common Patterns**: Shared behaviors, timing, or characteristics

4. **Clustering Assessment**: Are these address groups? (Yes/No with reasoning)

5. **Risk Assessment**: Overall risk profile

6. **Conclusions**: Likely connections and recommendations

Compare systematically, cite evidence, show relationships clearly.`;

}

/**
 * Helper to format analysis data
 */
function formatAnalysisData(primaryData: any, additionalData?: Record<string, any>): string {
  let output = '## PRIMARY DATA\n\n';
  
  if (primaryData) {
    output += JSON.stringify(primaryData, null, 2);
    output += '\n\n';
  }
  
  if (additionalData) {
    output += '## ADDITIONAL DATA\n\n';
    output += JSON.stringify(additionalData, null, 2);
    output += '\n\n';
  }
  
  if (!primaryData && !additionalData) {
    output += 'No data available. Please fetch relevant blockchain data.\n\n';
  }
  
  return output;
}

/**
 * Build prompt based on analysis type
 */
export function buildAdvancedAnalysisPrompt(
  analysisType: string,
  context: AnalysisContext
): string {
  switch (analysisType) {
    case 'full_account':
      return buildFullAccountAnalysisPrompt(context);
    case 'chain_of_custody':
      return buildChainOfCustodyPrompt(context);
    case 'defi':
      return buildDeFiAnalysisPrompt(context);
    case 'nft_portfolio':
      return buildNFTPortfolioAnalysisPrompt(context);
    case 'transaction_flow':
      return buildTransactionFlowAnalysisPrompt(context);
    case 'multi_address':
      return buildMultiAddressAnalysisPrompt(context);
    default:
      return buildFullAccountAnalysisPrompt(context);
  }
}

/**
 * Determine analysis type from query
 */
export function detectAnalysisType(query: string): string {
  const lowerQuery = query.toLowerCase();
  
  if (lowerQuery.includes('chain of custody') || lowerQuery.includes('fund flow') || lowerQuery.includes('trace')) {
    return 'chain_of_custody';
  }
  
  if (lowerQuery.includes('defi') || lowerQuery.includes('yield') || lowerQuery.includes('farm') || lowerQuery.includes('lending')) {
    return 'defi';
  }
  
  if (lowerQuery.includes('nft') || lowerQuery.includes('collection') || lowerQuery.includes('bored') || lowerQuery.includes('punk')) {
    return 'nft_portfolio';
  }
  
  if (lowerQuery.includes('flow') || lowerQuery.includes('swap') || lowerQuery.includes('transaction')) {
    return 'transaction_flow';
  }
  
  if (lowerQuery.includes('compare') || lowerQuery.includes('multiple') || lowerQuery.includes('relationships')) {
    return 'multi_address';
  }
  
  // Default to full account analysis
  return 'full_account';
}

