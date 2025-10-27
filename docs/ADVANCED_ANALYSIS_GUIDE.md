# Advanced Blockchain Analysis Guide

## Overview

This guide demonstrates how to use the comprehensive blockchain analysis prompts that provide deep, forensic-level insights into blockchain data. These prompts enable multi-step reasoning, pattern detection, and comprehensive reporting.

## Available Analysis Types

### 1. Full Account Analysis (`full_account_analysis`)

**Trigger Phrases:**

- "full account analysis for 0x..."
- "comprehensive profile of 0x..."
- "deep analysis of 0x..."
- "complete account investigation 0x..."

**What It Analyzes:**

- Account type and classification (EOA vs contract, trader vs DeFi user, etc.)
- Transaction behavior patterns (frequency, timing, counterparties)
- Financial profile (holdings, net worth, value flow)
- Token activity deep dive
- DeFi interactions
- Risk assessment and security concerns
- Anomaly detection

**Example Query:**

```
"Provide a full account analysis for 0xb36faaA498D6E40Ee030fF651330aefD1b8D24D2"
```

### 2. Chain-of-Custody Research (`chain_of_custody`)

**Trigger Phrases:**

- "chain of custody for 0x..."
- "trace funds for 0x..."
- "fund flow analysis 0x..."
- "where did funds come from 0x..."

**What It Analyzes:**

- Fund origins (exchanges, known addresses, bridges)
- Fund destinations
- Path analysis (hops, intermediaries, mixing services)
- Address clustering and relationships
- Contract relationships
- Cross-chain activity

**Example Query:**

```
"Trace the chain of custody for 0xb36faaA498D6E40Ee030fF651330aefD1b8D24D2"
```

### 3. DeFi Activity Analysis (`defi_analysis`)

**Trigger Phrases:**

- "defi activity for 0x..."
- "yield farming analysis 0x..."
- "lending position for 0x..."
- "liquidity pool analysis 0x..."

**What It Analyzes:**

- Active DeFi protocols (DEXs, lending, derivatives, yield)
- Transaction types by protocol (swaps, deposits, withdrawals)
- Yield generation strategies and ROI
- Risk profile (smart contract, liquidity, counterparty)
- Behavioral patterns and sophistication
- Gas optimization strategies

**Example Query:**

```
"Analyze DeFi activity for 0xb36faaA498D6E40Ee030fF651330aefD1b8D24D2"
```

### 4. NFT Portfolio Analysis (`nft_portfolio_analysis`)

**Trigger Phrases:**

- "nft portfolio analysis for 0x..."
- "nft profile for 0x..."
- "collection analysis for 0x..."

**What It Analyzes:**

- Portfolio size and collection diversity
- Holder classification (collector vs trader vs flipper)
- Acquisition timeline and spending patterns
- Collection strategy (diversification vs focused)
- Estimated portfolio value
- Blue-chip vs mid-tier collections
- Security assessment

**Example Query:**

```
"Show me a comprehensive NFT portfolio analysis for 0xb36faaA498D6E40Ee030fF651330aefD1b8D24D2"
```

### 5. Transaction Flow Analysis (`transaction_flow_analysis`)

**Trigger Phrases:**

- "transaction flow for 0x..."
- "swap analysis for 0x..."
- "dex flow 0x..."
- "route analysis 0x..."

**What It Analyzes:**

- Value flow path (input → processing → output)
- Hop-by-hop analysis
- DeFi interaction mapping
- DEX swap details (pairs, amounts, price impact, routing)
- Smart contract interactions
- Methods executed and events emitted
- Value calculations and profit/loss
- Purpose and strategy assessment

**Example Query:**

```
"Analyze the transaction flow for 0xabc123..."
```

### 6. Multi-Address Analysis (`multi_address_analysis`)

**Trigger Phrases:**

- "compare addresses 0x... and 0x..."
- "multi-address analysis"
- "multiple wallet relationships"
- "address clustering for 0x..., 0x..., 0x..."

**What It Analyzes:**

- Profile comparison (account types, activity levels)
- Direct interactions between addresses
- Common counterparties
- Shared patterns (timing, behavior, holdings)
- Grouping assessment (same entity, connected wallets, bots)
- Risk profiling
- Entity identification

**Example Query:**

```
"Compare and analyze the relationship between 0xabc123... and 0xdef456..."
```

## How It Works

### Multi-Step Reasoning

The advanced prompts break down complex analysis into structured phases. For example, a full account analysis goes through 6 phases:

1. **Profile & Classification** - Basic account characterization
2. **Transaction Behavior** - Patterns and timing analysis
3. **Financial Profile** - Holdings and value assessment
4. **Token Activity** - Deep dive into token movements
5. **DeFi Interactions** - Protocol usage and strategies
6. **Risk Assessment** - Security, anomalies, red flags

### Pattern Detection

The AI uses the blockchain data to detect:

- Behavioral patterns (time of day, frequency, amounts)
- Risk indicators (suspicious interactions, scams, hacks)
- Sophistication levels (basic user vs advanced strategy)
- Entity relationships (same person, connected wallets)

### Comprehensive Output

Each analysis provides:

- Executive summary (quick overview)
- Key findings (bullet points)
- Detailed analysis (phased investigation)
- Risk assessment
- Recommendations (if applicable)

## Example Usage

### Basic Queries (Simple Analysis)

```
"Show me the latest block on Ethereum"
"What are the top USDC holders on Base?"
"Analyze transaction 0xabc..."
```

These use simple, single-purpose prompts that provide quick answers.

### Advanced Queries (Deep Analysis)

```
"Provide a comprehensive account analysis for 0xb36faaA498D6E40Ee030fF651330aefD1b8D24D2 including DeFi activity and risk assessment"

"Trace the chain of custody for funds in wallet 0xb36faaA498D6E40Ee030fF651330aefD1b8D24D2, showing where they came from and where they went"

"Analyze the DeFi yield farming strategies for 0xb36faaA498D6E40Ee030fF651330aefD1b8D24D2 including ROI estimates"

"Show me a detailed NFT portfolio analysis for 0xb36faaA498D6E40Ee030fF651330aefD1b8D24D2 with collection breakdown and value estimate"

"Analyze the transaction flow for swap transaction 0xabc..., showing all hops and value changes"

"Compare these three addresses: 0xabc..., 0xdef..., 0x123... and determine if they're related"
```

## Natural Language Queries

The system is designed to handle "chaotic" natural language queries. You can ask questions in any way:

✅ "I want to know everything about this wallet"
✅ "Deep dive into this account"
✅ "Tell me what this address is doing"
✅ "Can you trace where this money came from?"
✅ "Show me their DeFi activity"
✅ "What NFTs do they have and are they valuable?"

The query parser will detect the intent and select the appropriate analysis framework.

## Technical Details

### Query Parsing Flow

1. **Input**: User's natural language query
2. **Detection**: Query parser identifies analysis type
3. **Data Fetching**: Fetch relevant blockchain data (already cached)
4. **Prompt Building**: Select and build appropriate prompt template
5. **AI Processing**: Multi-step reasoning through structured framework
6. **Output**: Comprehensive report with citations

### Data Sources

The analysis uses all available Blockscout data:

- Transaction history
- Token transfers
- Token approvals
- NFT holdings
- Contract interactions
- Event logs
- Balance information

### Caching

All data is cached with appropriate TTLs:

- Latest block: 30 seconds
- Account summary: 5 minutes
- Token holders: 5 minutes
- Transaction info: 5 minutes
- Chain status: 1 minute

AI responses are cached for 1 hour to reduce token usage.

## Best Practices

### For Best Results

1. **Be Specific**: Include the address/txHash you want analyzed
2. **State Your Goal**: "I want to understand..." or "I need to know..."
3. **Use Trigger Phrases**: Mention what type of analysis you want
4. **Include Chain**: Specify which blockchain (defaults to Ethereum)

### Query Examples

**Basic:**

```
"Tell me about 0x123..."
```

**Intermediate:**

```
"What does wallet 0x123... do? Show me their activity"
```

**Advanced:**

```
"Provide a comprehensive DeFi analysis for address 0x123... including all protocols used, yield strategies, and risk assessment"
```

**Expert:**

```
"Conduct forensic chain-of-custody analysis for 0x123..., tracing fund origins, identifying intermediaries, detecting any mixing services or suspicious patterns, and providing a complete timeline with transaction hashes"
```

## Integration Example

```typescript
// The system automatically handles this:
const query =
  "Do a deep analysis of wallet 0xb36faaA498D6E40Ee030fF651330aefD1b8D24D2";

// Query parser detects: full_account_analysis
// Fetches: address info, transactions, token transfers, NFTs
// Builds: Full account analysis prompt with 6-phase framework
// Returns: Comprehensive report
```

## Limitations

1. **Data Availability**: Limited to what Blockscout provides
2. **Real-time**: Data may be slightly delayed (but cached efficiently)
3. **Cross-Chain**: Analysis limited to single chain at a time
4. **Private Data**: Cannot access private keys or encrypted data

## Future Enhancements

Planned improvements:

- Multi-chain aggregation
- Real-time monitoring
- Historical trend analysis
- Automated alert generation
- Export capabilities (PDF, CSV)

---

**Need Help?** Start with a basic query, then gradually add specificity. The system will guide you to the right level of detail.
