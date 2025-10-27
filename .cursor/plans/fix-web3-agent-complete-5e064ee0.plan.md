<!-- 5e064ee0-82a0-4812-8c9d-7999b89bb966 9ffd5c3f-054e-4d63-97a5-23bf0a320072 -->
# Fix Web3 Agent Complete Implementation

## 1. Switch to GPT-4o Model (app/api/web3-agent/route.ts)

**Current:** Using `gpt-4o-mini`

```typescript
const result = streamText({
  model: openai('gpt-4o-mini'),
  prompt,
```

**Change to:**

```typescript
const result = streamText({
  model: openai('gpt-4o'),
  prompt,
```

**Also update:** Line 1 import and any other references to `gpt-4o-mini`

## 2. Re-enable AI Output Cache (app/api/web3-agent/route.ts)

**Current:** Cache is disabled for debugging (lines 64-68)

```typescript
if (cachedOutput) {
  console.log('Cache HIT for AI output - DISABLED FOR DEBUGGING');
  // Temporarily skip cache to debug streaming issue
  // return streamCachedResponse(cachedOutput);
}
```

**Fix:** Properly implement cached response streaming

```typescript
if (cachedOutput) {
  console.log('Cache HIT for AI output');
  // Use streamText to properly format cached response
  const result = streamText({
    model: openai('gpt-4o'),
    prompt: `Return this exact text without modification: ${cachedOutput}`,
    maxSteps: 1,
  });
  return result.toUIMessageStreamResponse();
}
```

**Remove:** The unused `streamCachedResponse` function (lines 250-291)

## 3. Add Chain Context to All AI Responses (lib/web3/prompt-builder.ts)

**Update:** All prompt builders to include chain prefix in the AI instruction

**Example for buildWeb3Prompt:**

```typescript
const analysisInstructions = `
You are an expert blockchain analyst AI assistant powered by real-time blockchain data from Blockscout for the ${chainName} blockchain.

## CRITICAL INSTRUCTIONS:
- ALWAYS start your response with: "On ${chainName}:"
- Use the provided blockchain data to answer queries accurately
- Provide specific numbers, addresses, and data from the blockchain data when available
...
```

**Apply to all prompt functions:**

- buildWeb3Prompt
- buildAccountAnalysisPrompt
- buildTokenAnalysisPrompt
- buildContractEventsPrompt
- buildChainHealthPrompt
- buildTransactionAnalysisPrompt
- buildTokenTransferAnalysisPrompt
- buildNFTAnalysisPrompt
- buildTransactionLogsPrompt
- buildBlockInfoPrompt

**Also update:** All advanced prompts in `lib/web3/advanced-prompts.ts` to include chain prefix

## 4. Fix Conversation History for New Tabs (app/web3-agent/page.tsx)

**Current issue:** Uses sessionStorage which persists across tabs

**Line 36-48:** Change conversation ID generation

```typescript
useEffect(() => {
  // Generate NEW conversation ID for each page load (new tab = new context)
  conversationIdRef.current = `conv_${Date.now()}_${Math.random().toString(36)}`;
  setCurrentChatId(conversationIdRef.current);
  
  // Load chat history from localStorage
  const stored = localStorage.getItem('web3_agent_chats');
  if (stored) {
    try {
      setChatHistory(JSON.parse(stored));
    } catch (e) {
      console.error('Failed to parse chat history:', e);
    }
  }
}, []);
```

**Remove:** sessionStorage.getItem and setItem calls (lines 38, 45, 66, 74)

## 5. Remove Back Button (app/web3-agent/page.tsx)

**Lines 165-172:** Remove the ChevronLeft button

```typescript
<Button 
  variant="ghost" 
  size="icon" 
  className="text-white hover:bg-white/20"
  onClick={handleBackClick}
>
  <ChevronLeft className="h-5 w-5" />
</Button>
```

**Also remove:**

- `handleBackClick` function (lines 87-90)
- `ChevronLeft` import (line 15)

## 6. Test All Query Types

Create test script: `scripts/test-all-queries.ts`

```typescript
const testQueries = {
  basic: [
    "What's the latest block on Ethereum?",
    "Show me top 10 USDC holders",
    "Analyze wallet 0xb36faaA498D6E40Ee030fF651330aefD1b8D24D2",
    "What are the token transfers for 0xb36faaA498D6E40Ee030fF651330aefD1b8D24D2",
    "Show NFTs for 0xb36faaA498D6E40Ee030fF651330aefD1b8D24D2",
  ],
  advanced: [
    "Full account analysis for 0xb36faaA498D6E40Ee030fF651330aefD1b8D24D2",
    "Trace chain of custody for 0xb36faaA498D6E40Ee030fF651330aefD1b8D24D2",
    "DeFi activity for 0xb36faaA498D6E40Ee030fF651330aefD1b8D24D2",
    "NFT portfolio analysis for 0xb36faaA498D6E40Ee030fF651330aefD1b8D24D2",
  ],
};

async function testQuery(query: string, chainId: number = 1) {
  const response = await fetch('http://localhost:3000/api/web3-agent', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      messages: [{ parts: [{ type: 'text', text: query }], role: 'user' }],
      chainId,
    }),
  });
  
  console.log(`\n=== Testing: ${query} ===`);
  console.log(`Chain: ${chainId}`);
  console.log(`Status: ${response.status}`);
  
  const reader = response.body?.getReader();
  let result = '';
  while (reader) {
    const { done, value } = await reader.read();
    if (done) break;
    result += new TextDecoder().decode(value);
  }
  
  console.log(`Response preview: ${result.substring(0, 200)}...`);
  console.log(`Contains chain name: ${result.includes('Ethereum') || result.includes('Base') ? 'YES' : 'NO'}`);
}

// Run all tests
for (const query of [...testQueries.basic, ...testQueries.advanced]) {
  await testQuery(query);
  await new Promise(r => setTimeout(r, 2000)); // Rate limit
}
```

## 7. Update validateParsedQuery (lib/web3/query-parser.ts)

Add validation for new advanced query types (lines 375-410):

```typescript
case 'full_account_analysis':
case 'chain_of_custody':
case 'defi_analysis':
case 'nft_portfolio_analysis':
  if (!query.entities.address) missing.push('wallet address');
  break;
case 'transaction_flow_analysis':
  if (!query.entities.txHash) missing.push('transaction hash');
  break;
case 'multi_address_analysis':
  if (!query.entities.multipleAddresses || query.entities.multipleAddresses.length < 2) {
    missing.push('at least 2 addresses');
  }
  break;
```

## Implementation Order

1. Switch model to gpt-4o
2. Fix cached response streaming
3. Add chain context to all prompts
4. Remove back button
5. Fix conversation history for new tabs
6. Update query validation
7. Create and run test script
8. Verify all outputs in UI before committing

## Testing Checklist

- [ ] Basic queries work (latest block, token holders, account summary)
- [ ] Advanced queries work (full analysis, chain-of-custody, DeFi, NFT)
- [ ] All responses start with "On [ChainName]:"
- [ ] New tab creates new conversation (no shared history)
- [ ] Back button removed from UI
- [ ] Cache works correctly
- [ ] Different chains work (Ethereum, Base, Optimism)
- [ ] UI displays responses properly (no blank screens)