# Web3 Agent - Testing Guide

## Quick Start

### 1. Environment Setup

Create `.env.local` file:

```bash
# Required
OPENAI_API_KEY=sk-your-openai-key-here

# Optional: Upstash Redis (for caching)
UPSTASH_REDIS_REST_URL=https://your-instance.upstash.io
UPSTASH_REDIS_REST_TOKEN=your_token_here
```

### 2. Install & Run

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev
```

Server runs at: `http://localhost:3000`

### 3. Access Web3 Agent

Open: http://localhost:3000/web3-agent

---

## Testing Queries

### Test 1: Latest Block (No caching required)

Query: "What's the latest block on Ethereum?"

Expected:
- Fetches from Blockscout MCP REST API
- Returns latest block number and timestamp
- Response time: ~2-4 seconds (uncached)

### Test 2: Address Information

Query: "Analyze account 0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"

Expected:
- Fetches address info (balance, tokens, transactions)
- Returns comprehensive account summary
- Cached for 60 seconds

### Test 3: Token Holders (requires token address)

Query: "Show me tokens held by 0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"

Expected:
- Fetches ERC20 token holdings
- Returns token list with balances
- Cached for 5 minutes

---

## API Endpoint Testing

### REST API Test

```bash
# Health check
curl http://localhost:3000/api/query

# Latest block
curl -X POST http://localhost:3000/api/query \
  -H "Content-Type: application/json" \
  -d '{"query":"latest block","chain":"ethereum"}'
```

### Chat API Test

```bash
curl -X POST http://localhost:3000/api/web3-agent \
  -H "Content-Type: application/json" \
  -d '{"messages":[{"role":"user","content":"What is the latest block on Ethereum?"}]}'
```

---

## Automated Testing

Run the demo query test script:

```bash
chmod +x scripts/test-demo-queries.sh
API_URL=http://localhost:3000 ./scripts/test-demo-queries.sh
```

This will:
1. Test all 5 demo queries
2. Test caching behavior (2x per query)
3. Verify response times
4. Check for errors

---

## Troubleshooting

### Error: "OPENAI_API_KEY is not set"

Solution: Create `.env.local` with your OpenAI API key

### Error: Blockscout API timeout

Solution: The API is rate-limited. Wait a few seconds and retry.

### Error: Cache not working

Solution: Ensure Upstash Redis credentials are set (optional - system works without cache)

### Frontend not loading

Solution: Check console for errors. Ensure `pnpm dev` is running.

---

## What's Working

✅ Blockscout MCP REST API v1 integration  
✅ OpenAI GPT-4o-mini for AI reasoning  
✅ Upstash Redis caching (optional)  
✅ Rate limiting (10 req/sec)  
✅ Conversation history  
✅ Multi-chain support (Ethereum, Base, Optimism, Polygon, Arbitrum)  

---

## Performance

- First query: ~2-4 seconds (cache miss)
- Cached query: < 100ms (cache hit)
- Cache hit rate: ~40-60% on typical usage
- Rate limit: 10 requests per second

---

## Next Steps

1. Test with your OpenAI API key
2. Query real blockchain data
3. Explore different query types
4. Check cache performance in Upstash dashboard
5. Review logs for API calls and performance

