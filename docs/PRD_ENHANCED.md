# Enhanced PRD: NodeOps Web3 Intelligence Agent Platform

## Executive Summary

**Project Name**: NodeOps Web3 Intelligence Agent Platform

**Vision**: Transform the Web3 AI Agent from a basic conversational interface into a comprehensive AI-powered blockchain intelligence platform that serves developers, researchers, DAOs, and DeFi analysts.

**Mission**: Enable anyone to extract, analyze, and reason about blockchain data through natural language interactions, powered by advanced AI reasoning, multi-chain support, and intelligent data orchestration.

---

## Data Source Reality Check

### Blockscout MCP Available Tools (What We Can Actually Build With)

**Core Tools Available:**

- `get_address_info` - Address balance, metadata, ENS, contract status
- `get_tokens_by_address` - ERC20 tokens held by an address
- `get_transactions_by_address` - Transaction history with filtering
- `get_token_transfers_by_address` - ERC20 transfer history
- `get_transaction_info` - Detailed transaction data
- `get_transaction_logs` - Event logs with decoded data
- `get_block_info` - Block details
- `get_latest_block` - Latest block number/timestamp
- `lookup_token_by_symbol` - Find tokens by symbol/name
- `get_contract_abi` - Contract ABI if verified
- `get_address_by_ens_name` - ENS resolution
- `get_chains_list` - Available chains

**Key Insight**: We can be creative with how we:

1. **Combine multiple API calls** to gather context
2. **Use AI to interpret** raw blockchain data into narratives
3. **Detect patterns** across transactions and transfers
4. **Correlate data** from multiple sources to answer complex questions
5. **Generate insights** that aren't explicitly in the API responses

**Example**: Blockscout doesn't have a "wallet behavior analysis" endpoint, but we can:

- Fetch all transactions (`get_transactions_by_address`)
- Fetch all token transfers (`get_token_transfers_by_address`)
- Use AI to analyze patterns, categorize activity, detect anomalies, and generate insights

---

## Current State Analysis

### ✅ Completed Foundation (v1.0)

**Core Infrastructure:**

- ✅ Redis caching layer with in-memory fallback
- ✅ Blockscout MCP integration
- ✅ AI reasoning with Vercel AI SDK
- ✅ Multi-chain support (Ethereum, Base, Optimism, Polygon, Arbitrum)
- ✅ Rate limiting (10 req/sec)
- ✅ Conversation context management
- ✅ Docker + NodeOps deployment

**Current Query Types:**

- ✅ Latest block information
- ✅ Token holder rankings
- ✅ Smart contract events
- ✅ Account summaries
- ✅ Chain health status

**Architecture:**

- ✅ Cache-first workflow
- ✅ AI output caching (1 hour)
- ✅ MCP response caching (30s-5min)
- ✅ Conversation context (24 hours)

---

## Enhanced Vision (v2.0): Advanced Features Roadmap

### Phase 1: Query Expansion (Weeks 1-2)

#### 1.1 Transaction Intelligence

**Goal**: Deep transaction analysis and exploration

**Features (Based on Blockscout API + AI Reasoning):**

- Transaction details with AI interpretation (uses `get_transaction_info`)
- Event log decoding and human-readable explanations (uses `get_transaction_logs`)
- Gas analysis and cost breakdowns (AI calculates from transaction data)
- Smart contract interaction patterns (AI identifies from transaction data)
- Transaction flow narratives (AI reconstructs from logs and trace data)

**Example Queries:**

- "Analyze transaction 0xabc... and show me the flow"
- "What did this transaction actually do?"
- "Show me all internal transactions for this tx"
- "Decode the events from this transaction"

**Implementation:**

```typescript
// New query types (MCP tools + AI interpretation)
transaction_info: get_transaction_info() → AI narrative
transaction_analysis: get_transaction_info() + get_transaction_logs() → AI flow diagram
event_decoding: get_transaction_logs() → AI human-readable explanations
gas_analysis: get_transaction_info() → AI cost analysis and optimization insights
```

#### 1.2 Advanced Token Analysis

**Goal**: Comprehensive token ecosystem insights

**Features (Based on Blockscout API + AI Reasoning):**

- Token transfer patterns and analysis (uses `get_token_transfers_by_address`)
- Transfer frequency and value trends (AI calculates from transfer history)
- Recipient analysis and classification (AI identifies patterns)
- Transaction correlation with token flows (AI correlates token transfers with transactions)
- Market activity insights (AI interprets transfer patterns)

**Example Queries:**

- "Show me USDC transfer patterns for this address"
- "What's the holder concentration for UNI?"
- "Analyze DAI liquidity on Base"

**New Query Types:**

```typescript
token_transfers: get_token_transfers_by_address() → AI pattern analysis
transfer_history: get_token_transfers_by_address() → AI timeline and trends
recipient_analysis: get_token_transfers_by_address() → AI classification
holder_insights: get_token_transfers_by_address() → AI concentration analysis
```

#### 1.3 NFT Intelligence

**Goal**: NFT holdings and collection analysis

**Features (Based on Blockscout API + AI Reasoning):**

- ERC721/ERC1155 holdings by wallet (uses `get_tokens_by_address` filtered for NFT types)
- Collection identification and grouping (AI analyzes contract addresses and metadata)
- Holding history and transfer patterns (AI tracks over time from token data)
- Portfolio composition analysis (AI categorizes by collection, rarity indicators)
- Recent acquisition trends (AI identifies patterns in acquisition timing)

**Example Queries:**

- "Show me all NFTs owned by 0x..."
- "Which collection does this NFT belong to?"
- "Rank my NFTs by collection"
- "When did I acquire this NFT?"

**Note**: Floor price tracking requires external APIs (e.g., OpenSea). Blockscout focuses on on-chain data, not marketplace prices.

**Implementation:**

```typescript
nft_holdings: get_tokens_by_address() filtered for NFT type → AI categorization
nft_collections: get_tokens_by_address() → AI groups by collection
holding_trends: Multiple get_tokens_by_address() calls → AI timeline analysis
portfolio_composition: get_tokens_by_address() → AI breakdown by collection/value
```

---

### Phase 2: AI Reasoning Enhancements (Weeks 3-4)

#### 2.1 Advanced Prompt Templates

**Goal**: Domain-specific AI reasoning patterns

**Features:**

- DeFi analysis templates (liquidity, yield, risk)
- Security audit templates (vulnerabilities, anomalies)
- Trading pattern recognition
- DAO governance analysis
- Compliance and regulatory checks

**Example Templates:**

```typescript
buildDeFiAnalysisPrompt(token, liquidityData);
buildSecurityAuditPrompt(contract, auditData);
buildTradingPatternPrompt(address, txHistory);
buildDAOGovPrompt(proposal, votingData);
```

#### 2.2 Multi-Step Reasoning

**Goal**: Complex analysis requiring multiple data fetches

**Features:**

- Chain of thought reasoning
- Hypothesis generation and testing
- Comparative analysis across chains
- Trend identification
- Anomaly detection

**Example Queries:**

- "Compare DAI liquidity on Base vs Arbitrum"
- "Find unusual patterns in this wallet's behavior"
- "What trends do you see in USDC flows?"

**Implementation:**

```typescript
class MultiStepReasoner {
  async execute(
    analysisType: string,
    queries: ParsedQuery[]
  ): Promise<Analysis>;
  async generateHypotheses(context: any): Promise<Hypothesis[]>;
  async testHypothesis(hypothesis: Hypothesis): Promise<TestResult>;
}
```

#### 2.3 Intelligent Contextual Filtering

**Goal**: Optimize AI token usage while preserving context

**Features:**

- Automatic data summarization
- Relevant field extraction
- Noise reduction
- Smart truncation with context preservation
- Progressive data loading

**Example:**

```typescript
class ContextOptimizer {
  optimizeForTokens(context: any, budget: number): any;
  extractRelevantFields(data: any, query: string): any;
  summarizeLargeDataset(data: any[]): any;
}
```

---

### Phase 3: Workflows and Automation (Weeks 5-6)

#### 3.1 Saved Queries and Templates

**Goal**: Reusable query configurations

**Features:**

- Save frequently used queries
- Shareable query templates
- Parameterized queries
- Query scheduling
- Alert triggers

**Implementation:**

```typescript
interface SavedQuery {
  id: string;
  name: string;
  query: string;
  parameters: Record<string, any>;
  schedule?: CronExpression;
  alerts?: AlertConfig[];
}

// Usage
("Query: '[latest_block]' saved as 'Daily Chain Health'");
("Schedule: Run every hour for Top USDC Holders");
```

#### 3.2 Real-Time Monitoring

**Goal**: Live blockchain monitoring capabilities

**Features (Based on Blockscout API + AI Reasoning):**

- Polling `get_latest_block` for chain health monitoring
- Scheduled `get_transactions_by_address` for wallet monitoring
- Event streaming via Blockscout (if available) or polling strategy
- AI-generated alerts based on pattern detection
- Dashboard for monitoring with AI insights

**Note**: Blockscout MCP doesn't provide WebSockets. We'd use polling with `get_latest_block` and `get_transactions_by_address` with smart caching.

**Example:**

```typescript
// Monitor address activity
monitorAddress(address, {
  balanceChanges: true,
  largeTransactions: { threshold: '1 ETH' },
  newTokens: true
})

// Get real-time updates
const stream = subscribeToChain(chainId)
stream.on('newBlock', (block) => { ... })
```

#### 3.3 Automated Reporting

**Goal**: Generate periodic analytics reports

**Features:**

- Scheduled report generation
- Email/Slack integration
- PDF export
- Customizable templates
- Multi-address comparison

**Example:**
"Generate weekly report for these 10 wallets showing token flows, gas usage, and top interactions"

---

### Phase 4: Developer Tools (Weeks 7-8)

#### 4.1 REST API Enhancement

**Goal**: Full-featured programmatic API

**Features:**

- RESTful endpoints for all queries
- GraphQL interface (optional)
- Webhook support
- API key management
- Rate limiting tiers

**API Structure:**

```
GET  /api/v1/queries
POST /api/v1/queries
GET  /api/v1/queries/:id
GET  /api/v1/queries/:id/results
GET  /api/v1/analytics
POST /api/v1/webhooks
```

#### 4.2 SDK and Integrations

**Goal**: Easy integration into existing tools

**Features:**

- TypeScript SDK
- Python SDK
- CLI tool
- VS Code extension
- Slack/Discord bots

**Example Usage:**

```typescript
import { Web3Agent } from "@nodeops/web3-agent-sdk";

const agent = new Web3Agent({ apiKey: "xxx" });
const result = await agent.query("Show me top USDC holders");
```

#### 4.3 Visualization Components

**Goal**: Rich data visualizations

**Features:**

- Transaction flow diagrams
- Token flow charts
- Network graphs
- Timeline visualizations
- Comparative charts

**Implementation:**

```typescript
<TransactionFlow data={txData} />
<TokenFlowChart address={address} />
<NetworkGraph nodes={nodes} edges={edges} />
```

---

### Phase 5: Enterprise Features (Weeks 9-10)

#### 5.1 Multi-User and Organizations

**Goal**: Team collaboration features

**Features:**

- User authentication
- Role-based access control
- Organization workspaces
- Shared query libraries
- Audit logs

**Implementation:**

```typescript
interface Organization {
  id: string;
  name: string;
  members: Member[];
  queries: SavedQuery[];
  settings: OrganizationSettings;
}
```

#### 5.2 Advanced Security

**Goal**: Enterprise-grade security

**Features:**

- API key rotation
- IP whitelisting
- Request signing
- Encrypted storage
- SOC 2 compliance

#### 5.3 Performance and Scalability

**Goal**: Handle high-volume usage

**Features:**

- Distributed caching
- Query result persistence
- CDN integration
- Auto-scaling configuration
- Performance monitoring

**Metrics:**

- Target: 1000+ queries/second
- <50ms p95 response time (cached)
- <2s p95 response time (uncached)

---

## Technical Architecture Evolution

### Current Architecture (v1.0)

```
[User] → [Chat UI] → [Backend API] → [Redis Cache] → [Blockscout MCP]
                                         ↓
                                      [AI SDK]
```

### Enhanced Architecture (v2.0)

```
[User/Bot/API] → [API Gateway] → [Query Router] → [Query Executor]
                                                    ↓
                                    [Cache Layer] ↔ [Data Sources]
                                    (Redis/Upstash)  - Blockscout MCP
                                                    - Direct APIs
                                                    - Custom Indexers
                                                    ↓
                              [AI Pipeline] → [Response Builder] → [Delivery]
                              (Reasoning)      (Streaming/Format)  (UI/API/Webhook)
```

---

## Success Metrics

### Current (v1.0)

- ✅ 5 basic query types
- ✅ Cache hit rate >40%
- ✅ <100ms cached responses
- ✅ Deploy in <10 minutes
- ✅ Single-chain support (effectively)

### Enhanced (v2.0)

- 🎯 20+ query types
- 🎯 Cache hit rate >60%
- 🎯 <50ms cached, <1s uncached
- 🎯 Multi-chain aggregation
- 🎯 Real-time monitoring capabilities
- 🎯 1000+ queries/second capacity
- 🎯 Enterprise-ready security

---

## Market Positioning

### v1.0: MVP/Hackathon Version

- **Audience**: Hackathon judges, early adopters, developers
- **Value**: "AI that talks to blockchain"
- **Differentiation**: Simple, deployable, conversational

### v2.0: Platform Version

- **Audience**: DAOs, DeFi protocols, blockchain researchers, enterprise
- **Value**: "AI-powered blockchain intelligence platform"
- **Differentiation**: Enterprise-ready, comprehensive, multi-chain, extensible

---

## Implementation Priority

### High Priority (Core Platform)

1. **Query Expansion** (Phases 1.1-1.3)

   - Transaction analysis
   - Token transfers
   - NFT holdings
   - **Why**: Expands use cases 5x

2. **Multi-Step Reasoning** (Phase 2.2)
   - Complex analysis
   - Comparative queries
   - **Why**: Differentiates from simple Q&A

### Medium Priority (Enhanced Value)

3. **Real-Time Monitoring** (Phase 3.2)

   - Live updates
   - Streaming
   - **Why**: Unlocks automation use cases

4. **Developer SDK** (Phase 4.2)
   - Programmatic access
   - Integrations
   - **Why**: Ecosystem growth

### Lower Priority (Nice to Have)

5. **Enterprise Features** (Phase 5)
   - Multi-user
   - Advanced security
   - **Why**: Premium tier opportunity

---

## Resource Requirements

### Team

- 1 Full-stack Engineer (TypeScript, Next.js)
- 1 AI/ML Engineer (Prompt engineering, reasoning)
- 0.5 DevOps Engineer (Deployment, monitoring)

### Infrastructure

- Upstash Redis: ~$50/month
- OpenAI API: ~$500/month (with caching)
- Blockscout MCP: Free tier
- Hosting: Included in NodeOps

### Timeline

- **Phase 1-2** (Core Expansion): 6 weeks
- **Phase 3-4** (Workflows & Developer Tools): 6 weeks
- **Phase 5** (Enterprise): 4 weeks
- **Total v2.0**: ~16 weeks

---

## Conclusion

The enhanced PRD transforms the Web3 AI Agent from a hackathon project into a comprehensive blockchain intelligence platform. By expanding query types, enhancing AI reasoning, adding workflows, and building developer tools, we create a production-ready platform that serves both developers and enterprises.

**Next Steps:**

1. Review and prioritize features based on user feedback
2. Implement Phase 1 (Query Expansion)
3. Gather metrics and iterate
4. Proceed to Phase 2-3 based on market demand

---

## AI Creativity Within Blockscout Constraints

### What Blockscout API Provides (Raw Data)

✅ Transaction details  
✅ Event logs  
✅ Token transfers  
✅ Address balances  
✅ Block information  
✅ Contract ABIs

### What AI Adds (Intelligent Interpretation)

🧠 **Transaction narratives**: "This was a Uniswap swap of 1 ETH for 3000 USDC"
🧠 **Pattern detection**: "This wallet typically trades between 2-4 PM EST"
🧠 **Anomaly identification**: "This transaction is unusual compared to normal activity"
🧠 **Behavioral classification**: "This appears to be a DeFi power user"
🧠 **Risk assessment**: "High activity with new contracts - potential security concern"
🧠 **Trend analysis**: "Token holdings have decreased 30% over the past month"
🧠 **Flow diagrams**: AI reconstructs complex multi-hop transactions
🧠 **Gas optimization**: AI identifies inefficient gas usage patterns

### Key Principle

**Blockscout provides the data, AI provides the insights.**

Every feature in this PRD uses actual Blockscout API endpoints, then adds AI reasoning to:

- Interpret raw blockchain data
- Detect patterns and anomalies
- Generate human-readable narratives
- Provide actionable insights
- Answer questions that aren't explicitly in the data

---

**Document Version**: 1.1  
**Date**: 2024  
**Status**: Grounded in Blockscout API Reality  
**Previous Version**: Basic PRD  
**Key Update**: All features now explicitly tied to Blockscout MCP tools
