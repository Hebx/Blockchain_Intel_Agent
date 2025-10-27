# Blockscout Query Enhancements

## Overview

Based on the Blockscout MCP Server documentation and API capabilities, here are additional query types we can add to the Web3 AI Agent.

## Currently Implemented Query Types

1. ✅ **latest_block** - Get latest block information
2. ✅ **token_holders** - Get top holders of a specific token
3. ✅ **contract_events** - Get contract events/interactions
4. ✅ **account_summary** - Address analysis and balance
5. ✅ **chain_status** - Network health and status

## Proposed Additional Query Types

### 1. Transaction Information Queries

**Query Types:**

- `transaction_info` - Detailed transaction data
- `transaction_summary` - Human-readable transaction summary
- `transaction_logs` - Event logs with decoded data

**Example Queries:**

- "What happened in transaction 0xabc..."
- "Explain transaction 0xabc... in plain English"
- "Show me the events/logs from transaction 0xabc..."

**API Endpoints:**

```typescript
// In BlockscoutRestClient
async getTransactionInfo(chainId: number, txHash: string): Promise<any>
async getTransactionSummary(chainId: number, txHash: string): Promise<any>
async getTransactionLogs(chainId: number, txHash: string): Promise<any>
```

---

### 2. Token Transfer Queries

**Query Type:** `token_transfers`

**Example Queries:**

- "Show me USDC transfers for 0xabc..." in the last 7 days
- "What DAI transfers has address 0x... made?"
- "List all token transfers for this address since January"

**API Endpoint:**

```typescript
async getTokenTransfers(
  chainId: number,
  address: string,
  ageFrom?: string,
  ageTo?: string,
  token?: string
): Promise<any>
```

---

### 3. NFT Queries

**Query Type:** `nft_holdings`

**Example Queries:**

- "What NFTs does wallet 0xabc... own?"
- "Show me the NFT collection holdings for this address"
- "List all NFTs owned by 0x..."

**API Endpoint:**

```typescript
async getNFTTokens(chainId: number, address: string): Promise<any>
```

---

### 4. Block Information Queries

**Query Type:** `block_info`

**Example Queries:**

- "What's in block 19000000?"
- "Show me details for block 0xabc..."
- "Get block information for block number 12345"

**API Endpoint:**

```typescript
async getBlockInfo(
  chainId: number,
  numberOrHash: string,
  includeTransactions?: boolean
): Promise<any>
```

---

### 5. Smart Contract Queries

**Query Type:** `contract_interaction`

**Example Queries:**

- "What functions can I call on contract 0xabc..."
- "Show me the ABI for contract 0x..."
- "Get the verified source code for 0x..."
- "Call balanceOf function on USDC contract for address 0x..."

**API Endpoints:**

```typescript
async getContractABI(chainId: number, address: string): Promise<any>
async getContractSourceCode(chainId: number, address: string, fileName?: string): Promise<any>
async readContract(
  chainId: number,
  address: string,
  abi: string,
  functionName: string,
  args?: string[]
): Promise<any>
```

---

### 6. ENS Resolution Queries

**Query Type:** `ens_lookup`

**Example Queries:**

- "What's the address for vitalik.eth?"
- "Resolve ens domain example.eth"
- "Convert ethereum.eth to address"

**API Endpoint:**

```typescript
async resolveENS(name: string): Promise<string>
```

---

### 7. Token Information Queries

**Query Type:** `token_info`

**Example Queries:**

- "Tell me about USDC token"
- "What's the total supply of DAI?"
- "Get information about WETH token"

**Already partially implemented** via `lookupTokenBySymbol`, but could add:

```typescript
async getTokenInfo(chainId: number, tokenAddress: string): Promise<any>
```

---

## Implementation Priority

### High Priority (High Impact, Easy to Implement)

1. ✅ **transaction_info** - Users frequently ask about specific transactions
2. ✅ **token_transfers** - Common query for transaction history
3. ✅ **nft_holdings** - Growing NFT market interest

### Medium Priority (Good Value)

4. **block_info** - Useful for developers
5. **transaction_summary** - Better UX than raw transaction data
6. **contract_abi** - Developer-friendly feature

### Low Priority (Nice to Have)

7. **ens_lookup** - Niche but useful
8. **read_contract** - Advanced feature
9. **contract_source** - Advanced developer feature

---

## Query Parser Updates Needed

Add these query patterns to `lib/web3/query-parser.ts`:

```typescript
// Transaction queries
if (/transaction\s+0x|tx\s+0x|hash\s+0x/i.test(input)) {
  // Extract tx hash
  return { type: 'transaction_info', entities: { txHash: ..., chain: ... } };
}

// Token transfers
if (/transfers|sent|received/i.test(lowerInput) && /token/i.test(lowerInput)) {
  return { type: 'token_transfers', entities: { address: ..., token: ... } };
}

// NFT queries
if (/nft|collection|crypto.*punks|bored.*ape/i.test(lowerInput)) {
  return { type: 'nft_holdings', entities: { address: ... } };
}

// Block info
if (/block\s+(\d+|0x)/i.test(input)) {
  // Extract block number/hash
  return { type: 'block_info', entities: { block: ..., chain: ... } };
}

// ENS resolution
if (/.eth$/i.test(input) || /ens/i.test(lowerInput)) {
  return { type: 'ens_lookup', entities: { name: ... } };
}

// Contract queries
if (/abi|functions?|methods?|interface/i.test(lowerInput) && address) {
  return { type: 'contract_abi', entities: { contract: address, ... } };
}
```

---

## Next Steps

1. **Review and prioritize** which query types to implement first
2. **Update BlockscoutRestClient** with new API methods
3. **Update CachedBlockscoutClient** with caching for new methods
4. **Update query parser** to recognize new query patterns
5. **Update route handler** in `app/api/web3-agent/route.ts` to handle new types
6. **Add prompt templates** for new query types
7. **Test with demo queries**

---

## Reference

- [Blockscout MCP Server Docs](docs/BlockScout-Mcp-server.md)
- [Blockscout REST API](docs/Blockscout-docs.md)
- [Current Implementation](lib/web3/blockscout-mcp-rest.ts)
