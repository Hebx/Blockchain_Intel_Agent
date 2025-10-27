/**
 * Parse natural language queries into structured Web3 query objects
 */

export interface ParsedQuery {
  type: QueryType;
  entities: {
    address?: string;
    contract?: string;
    token?: string;
    chain?: string;
    limit?: number;
    txHash?: string;
    block?: string;
    ensName?: string;
    resolvedAddress?: string; // ENS resolved to address
    timeRange?: string;
    multipleAddresses?: string[];
  };
  raw: string;
}

export type QueryType =
  | 'latest_block'
  | 'token_holders'
  | 'contract_events'
  | 'account_summary'
  | 'chain_status'
  | 'transaction_info'
  | 'transaction_summary'
  | 'transaction_logs'
  | 'token_transfers'
  | 'nft_holdings'
  | 'block_info'
  | 'full_account_analysis'
  | 'chain_of_custody'
  | 'defi_analysis'
  | 'nft_portfolio_analysis'
  | 'transaction_flow_analysis'
  | 'multi_address_analysis'
  | 'unknown';

/**
 * Extract Ethereum address from text
 */
function extractAddress(text: string): string | undefined {
  const addressRegex = /0x[a-fA-F0-9]{40}/g;
  const match = text.match(addressRegex);
  return match ? match[0] : undefined;
}

/**
 * Extract ENS name from text
 */
function extractENSName(text: string): string | undefined {
  // ENS names: alphanumeric, hyphens, dots, ending with .eth
  const ensRegex = /([a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?\.eth)\b/gi;
  const match = text.match(ensRegex);
  return match ? match[0] : undefined;
}

/**
 * Validate Ethereum address checksum
 */
function isValidAddress(address: string): boolean {
  if (!address.startsWith('0x')) return false;
  if (address.length !== 42) return false;
  return /^0x[a-fA-F0-9]{40}$/.test(address);
}

/**
 * Extract blockchain name
 */
function extractChain(text: string): string {
  const chainPatterns = [
    { regex: /ethereum|eth/i, name: 'ethereum' },
    { regex: /base/i, name: 'base' },
    { regex: /polygon|matic/i, name: 'polygon' },
    { regex: /arbitrum/i, name: 'arbitrum' },
    { regex: /optimism|op/i, name: 'optimism' },
  ];

  for (const pattern of chainPatterns) {
    if (pattern.regex.test(text)) {
      return pattern.name;
    }
  }
  return 'ethereum'; // default
}

/**
 * Extract limit number
 */
function extractLimit(text: string): number | undefined {
  const limitMatch = text.match(/top\s+(\d+)|limit\s+(\d+)|(\d+)\s+holders/i);
  if (limitMatch) {
    return parseInt(limitMatch[1] || limitMatch[2] || limitMatch[3], 10);
  }
  return undefined;
}

/**
 * Parse Web3 query from natural language
 */
export function parseWeb3Query(input: string): ParsedQuery {
  const lowerInput = input.toLowerCase();
  const trimmedInput = input.trim();

  // Check for latest block queries
  if (
    /latest\s+(ethereum\s+)?block|current\s+block|newest\s+block|last\s+(ethereum\s+)?block|block\s+number/i.test(input)
  ) {
    return {
      type: 'latest_block',
      entities: {
        chain: extractChain(input),
      },
      raw: input,
    };
  }

  // Check for token holders queries
  if (
    /holders?|holdings|token\s+holders?|top\s+holders?/i.test(lowerInput)
  ) {
    const token = extractAddress(input);
    const limit = extractLimit(input);
    return {
      type: 'token_holders',
      entities: {
        token: token || undefined,
        chain: extractChain(input),
        limit: limit || 10,
      },
      raw: input,
    };
  }

  // Check for contract events queries
  if (/events?|logs|contract\s+events?/i.test(lowerInput)) {
    const contract = extractAddress(input);
    const limit = extractLimit(input);
    return {
      type: 'contract_events',
      entities: {
        contract: contract || undefined,
        chain: extractChain(input),
        limit: limit || 20,
      },
      raw: input,
    };
  }

  // Check for advanced analysis queries (early detection for complex analyses)
  if (/full.*account|comprehensive|deep.*analysis|complete.*profile/i.test(lowerInput) && extractAddress(input)) {
    const address = extractAddress(input);
    return {
      type: 'full_account_analysis',
      entities: {
        address: address || undefined,
        chain: extractChain(input),
      },
      raw: input,
    };
  }

  // Check for chain of custody / fund tracing queries
  if (/chain.of.custody|fund.*flow|trace.*fund|track.*money|where.*came.*from/i.test(lowerInput) && extractAddress(input)) {
    const address = extractAddress(input);
    return {
      type: 'chain_of_custody',
      entities: {
        address: address || undefined,
        chain: extractChain(input),
      },
      raw: input,
    };
  }

  // Check for DeFi analysis queries
  if (/defi.*activity|yield.*farm|lending.*position|liquidity.*pool.*analysis/i.test(lowerInput) && extractAddress(input)) {
    const address = extractAddress(input);
    return {
      type: 'defi_analysis',
      entities: {
        address: address || undefined,
        chain: extractChain(input),
      },
      raw: input,
    };
  }

  // Check for comprehensive transaction flow analysis
  const txHashForFlow = input.match(/0x[a-fA-F0-9]{64}/);
  if (/transaction.*flow|swap.*analysis|dex.*flow|route.*analysis/i.test(lowerInput) && txHashForFlow) {
    return {
      type: 'transaction_flow_analysis',
      entities: {
        txHash: txHashForFlow[0],
        chain: extractChain(input),
      },
      raw: input,
    };
  }

  // Check for NFT queries (must come before account_summary to avoid false matches)
  if (/nft.*portfolio|nft.*analysis|collection.*analysis|nft.*profile/i.test(lowerInput)) {
    const address = extractAddress(input);
    return {
      type: 'nft_portfolio_analysis',
      entities: {
        address: address || undefined,
        chain: extractChain(input),
      },
      raw: input,
    };
  }

  // Check for standard NFT queries
  if (/nft|collection|crypto.*punks|bored.*ape|pixel|non.fungible/i.test(lowerInput)) {
    const address = extractAddress(input);
    return {
      type: 'nft_holdings',
      entities: {
        address: address || undefined,
        chain: extractChain(input),
      },
      raw: input,
    };
  }

  // Check for multi-address comparison
  if (/compare|multi.*address|multiple.*wallet|address.*relationship/i.test(lowerInput)) {
    const addresses = input.match(/0x[a-fA-F0-9]{40}/g) || [];
    return {
      type: 'multi_address_analysis',
      entities: {
        chain: extractChain(input),
        multipleAddresses: addresses,
      },
      raw: input,
    };
  }

  // Check for account summary queries
  if (
    /account|wallet|address|balance|transactions?/i.test(lowerInput)
  ) {
    const address = extractAddress(input);
    return {
      type: 'account_summary',
      entities: {
        address: address || undefined,
        chain: extractChain(input),
      },
      raw: input,
    };
  }

  // Check for chain status queries
  if (
    /status|health|network|chain\s+status|node\s+status/i.test(lowerInput)
  ) {
    return {
      type: 'chain_status',
      entities: {
        chain: extractChain(input),
      },
      raw: input,
    };
  }

  // Check for transaction queries
  const txHashRegex = /0x[a-fA-F0-9]{64}/;
  const txHashMatch = input.match(txHashRegex);
  
  if (txHashMatch) {
    const txHash = txHashMatch[0];
    
    // Check for specific transaction query types
    if (/summary|explain|what happened/i.test(lowerInput)) {
      return {
        type: 'transaction_summary',
        entities: {
          txHash,
          chain: extractChain(input),
        },
        raw: input,
      };
    }
    
    if (/logs|events/i.test(lowerInput)) {
      return {
        type: 'transaction_logs',
        entities: {
          txHash,
          chain: extractChain(input),
        },
        raw: input,
      };
    }
    
    // Default to detailed transaction info
    return {
      type: 'transaction_info',
      entities: {
        txHash,
        chain: extractChain(input),
      },
      raw: input,
    };
  }

  // Check for token transfers queries
  if (
    /transfers?|sent|received/i.test(lowerInput) && 
    /token/i.test(lowerInput) && 
    !/holders?|holdings/i.test(lowerInput)
  ) {
    const address = extractAddress(input);
    const token = extractAddress(input);
    return {
      type: 'token_transfers',
      entities: {
        address: address || undefined,
        token: token || undefined,
        chain: extractChain(input),
      },
      raw: input,
    };
  }

  // Check for specific block queries (not latest)
  const blockNumberRegex = /\bblock\s+(0x[a-fA-F0-9]+|\d+)/i;
  const blockMatch = input.match(blockNumberRegex);
  
  if (blockMatch && !/latest|current|newest/i.test(lowerInput)) {
    const blockRef = blockMatch[1];
    return {
      type: 'block_info',
      entities: {
        block: blockRef,
        chain: extractChain(input),
      },
      raw: input,
    };
  }

  // Fallback: If input is just a chain name or short chain reference, treat as chain status
  // This handles queries like "ethereum", "base mainnet", "optimism", etc.
  const chainName = extractChain(input);
  const wordCount = trimmedInput.split(/\s+/).length;
  
  // Known chain names and aliases
  const knownChains = ['ethereum', 'eth', 'base', 'optimism', 'op', 'polygon', 'arbitrum'];
  const isChainReference = knownChains.some(chain => 
    lowerInput.includes(chain.toLowerCase())
  );
  
  // If it's a short query (1-3 words) that references a chain, treat as chain status
  if (isChainReference && wordCount <= 3) {
    return {
      type: 'chain_status',
      entities: {
        chain: chainName,
      },
      raw: input,
    };
  }

  // Check if the query is just an Ethereum address (fallback for simple address queries)
  const addressFromQuery = extractAddress(input);
  if (addressFromQuery && trimmedInput.length < 100) {
    // If the query is mostly just the address, treat as account summary
    const wordsWithoutAddress = trimmedInput.replace(addressFromQuery, '').trim().split(/\s+/).filter(w => w.length > 0);
    if (wordsWithoutAddress.length <= 2) {
      return {
        type: 'account_summary',
        entities: {
          address: addressFromQuery,
          chain: extractChain(input),
        },
        raw: input,
      };
    }
  }

  // Unknown query type
  return {
    type: 'unknown',
    entities: {},
    raw: input,
  };
}

/**
 * Validate parsed query has required entities
 */
export function validateParsedQuery(query: ParsedQuery): {
  valid: boolean;
  missing?: string[];
} {
  const missing: string[] = [];

  switch (query.type) {
    case 'token_holders':
      if (!query.entities.token) missing.push('token address');
      break;
    case 'contract_events':
      if (!query.entities.contract) missing.push('contract address');
      break;
    case 'account_summary':
      if (!query.entities.address) missing.push('wallet address');
      break;
    case 'transaction_info':
    case 'transaction_summary':
    case 'transaction_logs':
      if (!query.entities.txHash) missing.push('transaction hash');
      break;
    case 'token_transfers':
      if (!query.entities.address) missing.push('address');
      break;
    case 'nft_holdings':
      if (!query.entities.address) missing.push('address');
      break;
    case 'block_info':
      if (!query.entities.block) missing.push('block number or hash');
      break;
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
    case 'latest_block':
    case 'chain_status':
      // No required entities
      break;
    case 'unknown':
      return { valid: false, missing: ['query type'] };
  }

  return {
    valid: missing.length === 0,
    missing: missing.length > 0 ? missing : undefined,
  };
}

