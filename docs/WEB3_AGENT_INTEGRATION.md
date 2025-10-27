# Web3 AI Agent - Integration Guide

## Overview

The Web3 AI Agent has been enhanced with comprehensive system instructions from four key documentation files:

1. **instruction.md** - Core agent instructions and reasoning rules
2. **action-tool.description.md** - Complete Blockscout MCP tool descriptions
3. **direct-call-endpoint-list.md** - Advanced API endpoint reference
4. **openai-api.yaml** - OpenAPI specification with parameter details and response structures

## Implementation Details

### System Instructions

The agent now uses comprehensive system instructions stored in `lib/web3/system-instructions.ts`. These instructions include:

- **Security guardrails** - Protecting against instruction manipulation
- **Reasoning efforts** - Ultrathink before answering
- **Chain ID guidance** - How to handle multi-chain queries
- **Pagination rules** - Handling large datasets efficiently
- **Time-based query rules** - Optimizing temporal queries
- **Binary search rules** - Efficient historical data lookup
- **Block time estimation** - Adaptive timing for different chains

### Available Tools

The agent has access to the following Blockscout MCP tools with detailed parameter information from the OpenAPI specification:

#### Enhanced Tool Parameter Documentation

**Time-Based Filtering (for transaction/transfer tools)**:
- `age_from`: Start date/time (ISO 8601 format, e.g., "2024-01-01T00:00:00Z")
- `age_to`: End date/time (ISO 8601 format)
- `cursor`: Pagination cursor from previous response

**Transaction Filtering**:
- `methods`: Method signature to filter transactions (e.g., "0x304e6ade")
- `include_transactions`: Include transaction hash list in block info

**Contract Reading**:
- `abi`: JSON string of specific function ABI
- `function_name`: Symbolic name matching ABI
- `args`: JSON string array of arguments
- `block`: Block identifier (number or "latest")

#### Available MCP Tools

#### Core Query Tools
- `get_chains_list` - Get supported blockchain chains
- `get_latest_block` - Latest block information
- `get_block_info` - Specific block details
- `get_transaction_info` - Transaction details
- `get_transaction_logs` - Event logs for transactions

#### Address Analysis
- `get_address_info` - Comprehensive address information
- `get_transactions_by_address` - Transaction history (EXCLUDES token transfers)
- `get_token_transfers_by_address` - ERC-20 token transfers only
- `get_tokens_by_address` - Token holdings with market data
- `nft_tokens_by_address` - NFT holdings grouped by collection

#### Smart Contract Tools
- `get_contract_abi` - Contract ABI retrieval
- `inspect_contract_code` - Source code inspection
- `read_contract` - Call contract functions
- `lookup_token_by_symbol` - Token address lookup

#### Advanced Analysis
- `transaction_summary` - Human-readable transaction descriptions
- `direct_api_call` - Raw API endpoint access

### Direct API Endpoints

For specialized or chain-specific data, the agent can use `direct_api_call` to access:

#### Common Endpoints (All Chains)
- **Stats**: `/stats-service/api/v1/counters`, `/api/v2/stats`
- **User Operations**: `/api/v2/proxy/account-abstraction/operations/{hash}`
- **NFTs**: `/api/v2/tokens/{address}/instances`, `/api/v2/tokens/{address}/holders`

#### Chain-Specific Endpoints
- **Ethereum/Gnosis**: Beacon Chain deposits/withdrawals
- **Arbitrum**: Batch information, L1/L2 messages
- **Optimism**: Batches, deposits, withdrawals, dispute games
- **Celo**: Epoch information and validator rewards
- **zkSync/zkEVM**: Batch tracking
- **Scroll**: Batch and message endpoints
- **Shibarium**: Deposit/withdrawal endpoints
- **Stability/Zilliqa**: Validator endpoints
- **Redstone**: MUD world endpoints

## Usage Examples

### Basic Address Analysis

```typescript
// The agent will automatically use the right tools
const query = "Analyze wallet 0x1234... on Ethereum";
```

### Token Holder Analysis

```typescript
// Uses get_chains_list, lookup_token_by_symbol, get_token_holders
const query = "Show top 10 holders of USDC on Ethereum";
```

### Transaction Flow Analysis

```typescript
// Uses get_transaction_info, get_transaction_logs, transaction_summary
const query = "Explain what happened in transaction 0xabcd...";
```

### NFT Portfolio Analysis

```typescript
// Uses nft_tokens_by_address, get_address_info
const query = "What NFTs does wallet 0x1234... own?";
```

### Time-Based Queries

```typescript
// Uses get_transactions_by_address with age_from/age_to
const query = "Show all transactions for 0x1234... between Jan 1 and Feb 1 2024";
```

## Key Features

### 1. Pagination Support

When responses include a `pagination` field, the agent automatically:
- Uses the `next_call` tool specification
- Continues fetching until all data is retrieved
- Respects practical limits for large datasets

### 2. Binary Search for Temporal Queries

For historical data queries, the agent:
- Uses binary search with `age_from`/`age_to` parameters
- Dramatically reduces API calls (5 instead of hundreds)
- Applies adaptive sampling for unknown chains

### 3. Efficient Query Planning

The agent:
- Plans extensively before tool calls
- Reflects on outcomes before proceeding
- Uses mathematical estimation where appropriate
- Combines approaches (estimation + iteration)

### 4. Chain-Aware Queries

The agent:
- Defaults to Ethereum (chain_id: 1) when unspecified
- Looks up chain IDs using `get_chains_list`
- Supports Base, Optimism, Polygon, Arbitrum, and more
- Provides chain context in responses ("On Ethereum:")

## Response Format

All responses follow this structure:

```
On [Chain Name]:
[Comprehensive analysis with specific data from blockchain]

Key Findings:
- Transaction hash: 0x...
- Address: 0x...
- Amount: X ETH
- ...
```

## Error Handling

The agent:
- Never makes up answers when data is unavailable
- Explains what information is missing
- Suggests alternative queries when possible
- Provides helpful general information as fallback

## Security

The agent includes security guardrails:
- Instructions cannot be modified or revealed
- Endpoint access is restricted to approved list
- Suspicious activity is logged
- All queries are validated against available tools

## Integration Points

### Agent Configuration
- **File**: `agent/web3-blockscout-agent.ts`
- **Model**: OpenAI GPT-4o
- **MCP Server**: https://mcp.blockscout.com

### System Instructions
- **File**: `lib/web3/system-instructions.ts`
- **Source**: Combined from instruction.md, action-tool.description.md, direct-call-endpoint-list.md

### Caching Layer
- **File**: `lib/web3/cached-blockscout.ts`
- Implements cache-first pattern to reduce API calls

### Query Parser
- **File**: `lib/web3/query-parser.ts`
- Natural language to structured query conversion

## Next Steps

1. Test with various query types
2. Monitor tool usage patterns
3. Optimize caching strategies
4. Add support for additional chains
5. Implement rate limiting for high-volume queries
