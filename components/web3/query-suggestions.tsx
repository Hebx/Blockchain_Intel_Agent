'use client';

export interface QuerySuggestion {
  id: string;
  label: string;
  query: string;
  category: 'block' | 'token' | 'account' | 'contract' | 'network';
}

const suggestedQueries: QuerySuggestion[] = [
  {
    id: 'latest_block',
    label: 'Latest Block',
    query: "What's the latest block on Ethereum?",
    category: 'block',
  },
  {
    id: 'usdc_holders',
    label: 'Top USDC Holders',
    query: 'Show me the top 10 holders of USDC',
    category: 'token',
  },
  {
    id: 'account_analysis',
    label: 'Analyze Wallet',
    query: 'Analyze account 0x... - show recent transactions',
    category: 'account',
  },
  {
    id: 'contract_events',
    label: 'Contract Events',
    query: 'List recent events for contract 0x...',
    category: 'contract',
  },
  {
    id: 'chain_health',
    label: 'Network Health',
    query: "What's the current health status of the network?",
    category: 'network',
  },
];

export function QuerySuggestions({
  onSelectQuery,
}: {
  onSelectQuery: (query: string) => void;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {suggestedQueries.map(suggestion => (
        <button
          key={suggestion.id}
          onClick={() => onSelectQuery(suggestion.query)}
          className="p-4 border rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors text-left"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg">{getCategoryIcon(suggestion.category)}</span>
            <span className="font-semibold text-gray-800">{suggestion.label}</span>
          </div>
          <p className="text-sm text-gray-600">{suggestion.query}</p>
        </button>
      ))}
    </div>
  );
}

function getCategoryIcon(category: string): string {
  const icons: Record<string, string> = {
    block: '🔗',
    token: '🪙',
    account: '👤',
    contract: '📄',
    network: '🌐',
  };
  return icons[category] || '❓';
}

export { suggestedQueries };

