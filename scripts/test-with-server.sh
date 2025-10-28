#!/bin/bash

# Test script for API endpoint with automatic server management

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}🚀 API Test Runner${NC}"
echo "=================="
echo ""

# Check if server is already running
if curl -s http://localhost:3000 > /dev/null 2>&1; then
    echo -e "${GREEN}✅ Dev server is already running${NC}"
    SERVER_RUNNING=true
else
    echo -e "${YELLOW}⚠️  Dev server is not running${NC}"
    echo ""
    echo "Please run the dev server in a separate terminal:"
    echo ""
    echo "  Terminal 1:"
    echo "  cd $(pwd)"
    echo "  pnpm dev"
    echo ""
    echo "Then run this script again:"
    echo "  npx tsx scripts/test-example-prompts.ts"
    echo ""
    exit 1
fi

echo ""
echo "Running tests..."
echo ""

# Run the tests
npx tsx scripts/test-example-prompts.ts

