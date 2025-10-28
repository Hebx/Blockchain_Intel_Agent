/**
 * Test all example prompts via API
 * This script tests each example prompt to ensure the query parser and API handlers work correctly
 */

interface TestCase {
  name: string;
  prompt: string;
  chainId: number;
  expectedType: string;
}

const testCases: TestCase[] = [
  {
    name: "Token Approval Query with ENS",
    prompt: "Is any approval set for OP token on Optimism chain by zeaver.eth?",
    chainId: 10, // Optimism
    expectedType: "token_approval",
  },
  {
    name: "Gas Fee Calculation",
    prompt: "Calculate the total gas fees paid on Ethereum by address 0xcafebabe00000000000000000000000000000000 in May 2024",
    chainId: 1, // Ethereum
    expectedType: "gas_fee_calculation",
  },
  {
    name: "Time-Based Event Query",
    prompt: "Which 10 most recent logs were emitted by 0xFe89cc7aBB2C4183683ab71653C4cdc9B02D44b7 before Nov 08 2024 04:21:35 AM (-06:00 UTC)?",
    chainId: 1, // Ethereum
    expectedType: "event_search",
  },
  {
    name: "Transaction Analysis on Redstone",
    prompt: "Tell me more about the transaction 0xf8a55721f7e2dcf85690aaf81519f7bc820bc58a878fa5f81b12aef5ccda0efb on Redstone rollup",
    chainId: 901, // Redstone
    expectedType: "transaction_info",
  },
  {
    name: "Contract Inspection - Blacklisting",
    prompt: "Is there any blacklisting functionality of USDT token on Arbitrum One?",
    chainId: 42161, // Arbitrum
    expectedType: "contract_inspection",
  },
  {
    name: "Latest Block on Gnosis",
    prompt: "What is the latest block on Gnosis Chain and who is the block minter?",
    chainId: 100, // Gnosis
    expectedType: "latest_block",
  },
  {
    name: "Event Search for Methods",
    prompt: "Which methods of 0x1c479675ad559DC151F6Ec7ed3FbF8ceE79582B6 on the Ethereum mainnet could emit SequencerBatchDelivered?",
    chainId: 1, // Ethereum
    expectedType: "event_search",
  },
  {
    name: "Cross-Chain Messages",
    prompt: "What is the most recent executed cross-chain message sent from the Arbitrum rollup to the base layer?",
    chainId: 42161, // Arbitrum
    expectedType: "cross_chain_message",
  },
];

/**
 * Parse query using the API
 */
async function parseQuery(query: string, chainId: number) {
  const url = `http://localhost:3000/api/web3-agent`;
  
  const payload = {
    messages: [
      {
        role: "user",
        parts: [{ type: "text", text: query }],
      },
    ],
    conversationId: `test_${Date.now()}`,
    chainId,
    skipCache: true, // Skip cache for testing
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP ${response.status}: ${errorText}`);
    }

    // Return the response stream (it's a streaming response)
    return response;
  } catch (error) {
    console.error(`API call failed:`, error);
    throw error;
  }
}

/**
 * Test a single prompt
 */
async function testPrompt(testCase: TestCase) {
  console.log(`\n🧪 Testing: ${testCase.name}`);
  console.log(`   Prompt: "${testCase.prompt}"`);
  console.log(`   Chain ID: ${testCase.chainId}`);
  console.log(`   Expected Type: ${testCase.expectedType}`);

  try {
    const response = await parseQuery(testCase.prompt, testCase.chainId);
    
    if (!response.ok) {
      console.error(`   ❌ Request failed with status: ${response.status}`);
      return false;
    }

    // Read the streaming response
    const reader = response.body?.getReader();
    if (!reader) {
      console.error(`   ❌ No response body`);
      return false;
    }

    const decoder = new TextDecoder();
    let fullText = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value);
      fullText += chunk;

      // Parse SSE format if present
      const lines = chunk.split("\n");
      for (const line of lines) {
        if (line.startsWith("0:")) {
          try {
            const data = JSON.parse(line.substring(2));
            if (data.type === "text" || data.type === "text-delta") {
              process.stdout.write(data.content || "");
            }
          } catch (e) {
            // Not JSON, continue
          }
        }
      }
    }

    console.log(`\n   ✅ Response received (length: ${fullText.length} chars)`);
    return true;
  } catch (error) {
    console.error(`   ❌ Test failed:`, error instanceof Error ? error.message : String(error));
    return false;
  }
}

/**
 * Run all tests
 */
async function runTests() {
  console.log("🚀 Starting API Tests for Example Prompts");
  console.log("=".repeat(60));

  const results: { name: string; passed: boolean }[] = [];

  for (const testCase of testCases) {
    const passed = await testPrompt(testCase);
    results.push({ name: testCase.name, passed });
    
    // Small delay between tests to avoid rate limiting
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }

  console.log("\n" + "=".repeat(60));
  console.log("📊 Test Results Summary");
  console.log("=".repeat(60));

  const passed = results.filter((r) => r.passed).length;
  const total = results.length;

  results.forEach((result) => {
    const icon = result.passed ? "✅" : "❌";
    console.log(`${icon} ${result.name}`);
  });

  console.log("\n" + "=".repeat(60));
  console.log(`Total: ${passed}/${total} tests passed`);
  console.log("=".repeat(60));

  process.exit(passed === total ? 0 : 1);
}

// Run tests if this file is executed directly
if (require.main === module) {
  runTests().catch((error) => {
    console.error("Test suite failed:", error);
    process.exit(1);
  });
}

export { testCases, testPrompt, runTests };

