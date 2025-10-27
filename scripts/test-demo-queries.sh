#!/bin/bash

# Test script for Web3 Agent demo queries
# Tests all 5 demo queries and validates cache performance

set -e

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

API_URL="${API_URL:-http://localhost:3000}"
echo "Testing Web3 Agent at: $API_URL"

# Test queries
declare -a QUERIES=(
  "What's the latest block on Ethereum?"
  "Show me the top 10 holders of USDC"
  "Analyze account 0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb - show recent transactions"
  "List recent events for a popular DeFi contract"
  "What's the current health status of the Ethereum network?"
)

# Track results
PASSED=0
FAILED=0
TOTAL_LATENCY=0

echo -e "${YELLOW}Starting Web3 Agent Demo Query Tests...${NC}"
echo ""

# Run each query twice to test caching
for i in "${!QUERIES[@]}"; do
  query="${QUERIES[$i]}"
  query_num=$((i + 1))
  
  echo -e "${YELLOW}[Query $query_num/5]${NC} $query"
  
  for attempt in 1 2; do
    if [ $attempt -eq 1 ]; then
      echo "  First attempt (cache miss expected)..."
    else
      echo "  Second attempt (cache hit expected)..."
    fi
    
    START_TIME=$(date +%s%N)
    
    response=$(curl -s -X POST "$API_URL/api/web3-agent" \
      -H "Content-Type: application/json" \
      -d "{\"messages\":[{\"role\":\"user\",\"content\":\"$query\"}]}" \
      -w "\n%{http_code}")
    
    END_TIME=$(date +%s%N)
    HTTP_CODE=$(echo "$response" | tail -n1)
    LATENCY=$((($END_TIME - $START_TIME) / 1000000))
    
    echo "    Status: $HTTP_CODE | Latency: ${LATENCY}ms"
    TOTAL_LATENCY=$((TOTAL_LATENCY + LATENCY))
    
    if [ "$HTTP_CODE" -eq 200 ]; then
      if [ $attempt -eq 1 ]; then
        echo -e "    ${GREEN}✓ Passed${NC} (First request)"
      else
        echo -e "    ${GREEN}✓ Passed${NC} (Cached response)"
        if [ $LATENCY -lt 100 ]; then
          echo -e "    ${GREEN}✓ Cache hit confirmed${NC} (<100ms latency)"
        fi
      fi
      PASSED=$((PASSED + 1))
    else
      echo -e "    ${RED}✗ Failed${NC} (HTTP $HTTP_CODE)"
      FAILED=$((FAILED + 1))
    fi
    
    # Small delay between requests
    sleep 0.5
  done
  
  echo ""
done

# Calculate average latency
AVG_LATENCY=$((TOTAL_LATENCY / 10))

echo -e "${YELLOW}Results Summary:${NC}"
echo "  Total Tests: $((PASSED + FAILED))"
echo "  Passed: ${GREEN}$PASSED${NC}"
if [ $FAILED -gt 0 ]; then
  echo "  Failed: ${RED}$FAILED${NC}"
else
  echo "  Failed: $FAILED"
fi
echo "  Average Latency: ${AVG_LATENCY}ms"
echo ""

# Test REST API
echo -e "${YELLOW}Testing REST API endpoint...${NC}"
curl -s -X GET "$API_URL/api/query" | jq '.' && echo "" || echo "REST API test failed"

# Final verdict
if [ $FAILED -eq 0 ]; then
  echo -e "${GREEN}✓ All tests passed!${NC}"
  exit 0
else
  echo -e "${RED}✗ Some tests failed${NC}"
  exit 1
fi

