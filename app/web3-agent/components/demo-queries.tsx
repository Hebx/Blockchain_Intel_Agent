'use client';

import { useState } from 'react';

export interface DemoQuery {
  id: string;
  title: string;
  description: string;
  query: string;
  category: 'block' | 'token' | 'account' | 'contract' | 'network';
  icon: string;
}

export const DEMO_QUERIES: DemoQuery[] = [
  {
    id: 'latest_block',
    title: 'Latest Block Info',
    description: "What's the latest block on Ethereum?",
    query: "What's the latest block on Ethereum?",
    category: 'block',
    icon: '🔗',
  },
  {
    id: 'token_holders',
    title: 'Top USDC Holders',
    description: 'Show me the top 10 holders of USDC',
    query: 'Show me the top 10 holders of USDC',
    category: 'token',
    icon: '🪙',
  },
  {
    id: 'smart_contract_events',
    title: 'Smart Contract Events',
    description: 'List recent events for contract 0x...',
    query: 'List recent events for a popular DeFi contract address',
    category: 'contract',
    icon: '📄',
  },
  {
    id: 'account_summary',
    title: 'Account Analysis',
    description: 'Analyze account 0x... - show approvals and transfers',
    query: 'Analyze account 0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb and show recent activity',
    category: 'account',
    icon: '👤',
  },
  {
    id: 'chain_health',
    title: 'Network Health',
    description: "What's the current health status of the network?",
    query: "What's the current health status of the Ethereum network?",
    category: 'network',
    icon: '🌐',
  },
];

export function DemoQueriesComponent({
  onSelectQuery,
}: {
  onSelectQuery: (query: string) => void;
}) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'block', 'token', 'account', 'contract', 'network'];

  const filteredQueries =
    selectedCategory === 'all'
      ? DEMO_QUERIES
      : DEMO_QUERIES.filter(q => q.category === selectedCategory);

  return (
    <div className="py-6">
      <h3 className="text-lg font-semibold mb-4">Example Queries</h3>
      
      {/* Category Filter */}
      <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Demo Queries Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredQueries.map(query => (
          <button
            key={query.id}
            onClick={() => onSelectQuery(query.query)}
            className="text-left p-4 border rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-all hover:shadow-md"
          >
            <div className="flex items-start gap-3 mb-2">
              <span className="text-2xl">{query.icon}</span>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-800 mb-1">{query.title}</h4>
                <p className="text-sm text-gray-600 line-clamp-2">{query.description}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

/**
 * Quick query chips for inline suggestions
 */
export function QuickQueryChips({
  onSelectQuery,
}: {
  onSelectQuery: (query: string) => void;
}) {
  const quickQueries = DEMO_QUERIES.slice(0, 3);

  return (
    <div className="flex gap-2 flex-wrap">
      {quickQueries.map(query => (
        <button
          key={query.id}
          onClick={() => onSelectQuery(query.query)}
          className="px-3 py-1 rounded-full bg-gray-100 hover:bg-blue-100 text-sm text-gray-700 hover:text-blue-700 transition-colors"
        >
          {query.icon} {query.title}
        </button>
      ))}
    </div>
  );
}

