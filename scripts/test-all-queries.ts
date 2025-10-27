/**
 * Test script for validating all query types in the Web3 Agent
 * Tests basic and advanced queries across different chains
 */

const API_URL = 'http://localhost:3000/api/web3-agent';

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
  const chainNames: Record<number, string> = {
    1: 'Ethereum',
    8453: 'Base',
    10: 'Optimism',
    137: 'Polygon',
    42161: 'Arbitrum',
  };

  const chainName = chainNames[chainId] || 'Unknown';

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: [{ parts: [{ type: 'text', text: query }], role: 'user' }],
        chainId,
      }),
    });

    console.log(`\n${'='.repeat(60)}`);
    console.log(`Testing: ${query}`);
    console.log(`Chain: ${chainName} (${chainId})`);
    console.log(`Status: ${response.status}`);

    if (!response.ok) {
      console.log(`❌ Error: ${response.status} ${response.statusText}`);
      return;
    }

    const reader = response.body?.getReader();
    let result = '';
    let chunks = 0;

    if (reader) {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        result += new TextDecoder().decode(value);
        chunks++;
      }
    }

    console.log(`Chunks received: ${chunks}`);
    console.log(`Response length: ${result.length} bytes`);
    console.log(`Response preview: ${result.substring(0, 200)}...`);

    // Check for chain name in response
    const hasChainName = result.includes(chainName);
    const startsWithChain = result.trim().startsWith(`On ${chainName}:`);
    console.log(`Contains chain name: ${hasChainName ? '✅' : '❌'}`);
    console.log(`Starts with "On ${chainName}:": ${startsWithChain ? '✅' : '❌'}`);

    if (!startsWithChain) {
      console.log(`⚠️  WARNING: Response should start with "On ${chainName}:"`);
    }
  } catch (error) {
    console.error(`\n❌ Error testing query: ${error}`);
  }
}

async function runAllTests() {
  console.log('🚀 Starting Web3 Agent Query Tests\n');
  console.log('Make sure the server is running on http://localhost:3000\n');

  // Test basic queries
  console.log('\n📋 Testing BASIC queries...\n');
  for (const query of testQueries.basic) {
    await testQuery(query);
    await new Promise(r => setTimeout(r, 2000)); // Rate limit
  }

  // Test advanced queries
  console.log('\n\n📋 Testing ADVANCED queries...\n');
  for (const query of testQueries.advanced) {
    await testQuery(query);
    await new Promise(r => setTimeout(r, 2000)); // Rate limit
  }

  // Test different chains
  console.log('\n\n📋 Testing MULTI-CHAIN queries...\n');
  await testQuery("What's the latest block?", 1); // Ethereum
  await new Promise(r => setTimeout(r, 2000));
  await testQuery("What's the latest block?", 8453); // Base
  await new Promise(r => setTimeout(r, 2000));
  await testQuery("What's the latest block?", 10); // Optimism

  console.log('\n✅ All tests completed!\n');
}

// Run tests if executed directly
if (require.main === module) {
  runAllTests().catch(console.error);
}

export { testQuery, runAllTests };

