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
  };
  raw: string;
}

export type QueryType =
  | 'latest_block'
  | 'token_holders'
  | 'contract_events'
  | 'account_summary'
  | 'chain_status'
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

  // Check for latest block queries
  if (
    /latest\s+block|current\s+block|newest\s+block|last\s+block/i.test(input)
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

