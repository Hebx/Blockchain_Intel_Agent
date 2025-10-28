# Example Prompts for Testing Web3 Agent

This document contains all the example prompts to test the Web3 AI Agent. These prompts are designed to test various query types and ensure the system handles complex blockchain queries correctly.

## Test Prompts

### 1. Token Approval Query (with ENS)
**Prompt**: `Is any approval set for OP token on Optimism chain by zeaver.eth?`

**Expected Behavior**: 
- Resolves ENS name `zeaver.eth` to address
- Searches for Approval events for OP token
- Checks if zeaver.eth has any approvals on Optimism
- Returns approval details if found

---

### 2. Gas Fee Calculation with Date Range
**Prompt**: `Calculate the total gas fees paid on Ethereum by address 0xcafe...cafe in May 2025.`

**Expected Behavior**:
- Extracts address and date range (May 2025)
- Fetches all transactions for the address in that period
- Calculates total gas fees from transaction data
- Returns total ETH spent on gas fees

---

### 3. Time-Based Event Query
**Prompt**: `Which 10 most recent logs were emitted by 0xFe89cc7aBB2C4183683ab71653C4cdc9B02D44b7 before Nov 08 2024 04:21:35 AM (-06:00 UTC)?`

**Expected Behavior**:
- Extracts contract address and cutoff time
- Fetches transaction logs for the address
- Filters logs by timestamp (before specified date)
- Returns 10 most recent logs

---

### 4. Transaction Analysis on Specific Chain
**Prompt**: `Tell me more about the transaction 0xf8a55721f7e2dcf85690aaf81519f7bc820bc58a878fa5f81b12aef5ccda0efb on Redstone rollup.`

**Expected Behavior**:
- Identifies Redstone chain (chain ID 901)
- Fetches transaction details
- Retrieves transaction logs and events
- Provides comprehensive transaction analysis

---

### 5. Contract Inspection Query
**Prompt**: `Is there any blacklisting functionality of USDT token on Arbitrum One?`

**Expected Behavior**:
- Identifies USDT token on Arbitrum
- Fetches contract ABI and source code
- Inspects for blacklisting functions
- Checks for blacklisted addresses or functionality

---

### 6. Latest Block on Alternative Chain
**Prompt**: `What is the latest block on Gnosis Chain and who is the block minter?`

**Expected Behavior**:
- Identifies Gnosis chain (chain ID 100)
- Fetches latest block information
- Extracts minter/validator information
- Returns block number and minter details

**Follow-up Prompt**: `Were any funds moved from this minter recently?`

**Expected Behavior**:
- Uses context from previous query
- Fetches recent transactions from minter address
- Analyzes funds moved (transfers, withdrawals)
- Returns recent activity summary

---

### 7. Token-Specific Event Query
**Prompt**: `When the most recent reward distribution of Kinto token was made to the wallet 0x7D467D99028199D99B1c91850C4dea0c82aDDF52 in Kinto chain?`

**Expected Behavior**:
- Identifies Kinto chain (chain ID 7887)
- Searches for token transfers to the specified wallet
- Looks for reward-related events
- Finds most recent reward distribution transaction
- Returns timestamp and transaction details

---

### 8. Event Method Inspection
**Prompt**: `Which methods of 0x1c479675ad559DC151F6Ec7ed3FbF8ceE79582B6 on the Ethereum mainnet could emit SequencerBatchDelivered?`

**Expected Behavior**:
- Fetches contract ABI and source code
- Analyzes all methods in the contract
- Identifies methods that emit `SequencerBatchDelivered` event
- Returns method signatures and related information

---

### 9. Cross-Chain Message Query
**Prompt**: `What is the most recent executed cross-chain message sent from the Arbitrum Sepolia rollup to the base layer?`

**Expected Behavior**:
- Identifies Arbitrum Sepolia chain
- Calls Arbitrum-specific L2 to L1 message endpoint
- Retrieves most recent cross-chain messages
- Analyzes message status and execution details

---

## Testing Instructions

1. **Start the Development Server**:
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

2. **Open Web3 Agent Interface**:
   - Navigate to `http://localhost:3000/web3-agent`

3. **Test Each Prompt**:
   - Type or paste each prompt into the chat interface
   - Wait for the AI to process and respond
   - Verify the response is accurate and complete

4. **Check Console for Errors**:
   - Open browser DevTools
   - Check for any error messages
   - Verify API calls are being made correctly

## Expected Query Types

The enhanced parser should detect these query types:

| Prompt # | Query Type | Chain Detected | Key Features |
|----------|-----------|----------------|-------------|
| 1 | `token_approval` | Optimism | ENS resolution, Token approval |
| 2 | `gas_fee_calculation` | Ethereum | Date range, Gas fees |
| 3 | `event_search` | Ethereum | Time filtering, Event logs |
| 4 | `transaction_info` | Redstone | Specific chain, Transaction analysis |
| 5 | `contract_inspection` | Arbitrum | Token analysis, Functionality check |
| 6 | `latest_block` | Gnosis | Block info, Minter identification |
| 7 | `event_search` | Kinto | Token events, Time query |
| 8 | `event_search` | Ethereum | Method inspection, Event analysis |
| 9 | `cross_chain_message` | Arbitrum Sepolia | L2 to L1 messages |

## Notes

- All prompts require proper chain selection in the UI
- Some queries may take longer due to complex data fetching
- Caching is enabled by default to improve performance
- Use the "Cache OFF" toggle to bypass cache if needed
- Some test queries may fail if the data doesn't exist (e.g., future dates in May 2025)

## Troubleshooting

If a query fails:
1. Check console logs for error messages
2. Verify the chain is selected correctly
3. Check if the API endpoint is accessible
4. Try refreshing the page and retrying
5. Use "Skip Cache" if you suspect stale data

