/**
 * Simple test to verify the query parser works
 */

import { parseWeb3Query } from '../lib/web3/query-parser';

const prompts = [
  "Is any approval set for OP token on Optimism chain by zeaver.eth?",
  "Calculate the total gas fees paid on Ethereum by address 0xcafebabe00000000000000000000000000000000 in May 2024",
  "Which 10 most recent logs were emitted by 0xFe89cc7aBB2C4183683ab71653C4cdc9B02D44b7?",
  "Tell me more about the transaction 0xf8a55721f7e2dcf85690aaf81519f7bc820bc58a878fa5f81b12aef5ccda0efb on Redstone rollup",
  "Is there any blacklisting functionality of USDT token on Arbitrum One?",
  "What is the latest block on Gnosis Chain?",
  "Which methods of 0x1c479675ad559DC151F6Ec7ed3FbF8ceE79582B6 could emit SequencerBatchDelivered?",
  "What is the most recent executed cross-chain message from Arbitrum to base layer?",
];

console.log("Testing Query Parser");
console.log("=".repeat(80));

prompts.forEach((prompt, index) => {
  console.log(`\n${index + 1}. Prompt: "${prompt}"`);
  const parsed = parseWeb3Query(prompt);
  console.log(`   Type: ${parsed.type}`);
  console.log(`   Entities:`, JSON.stringify(parsed.entities, null, 2));
});

console.log("\n" + "=".repeat(80));
console.log("✅ Query parser test complete!");

