# NodeOps Web3 AI Agent Node

An AI-powered Web3 blockchain intelligence agent built with [Vercel AI SDK](https://ai-sdk.dev/docs), [Next.js](https://nextjs.org/), [Blockscout MCP](https://mcp.blockscout.com), and Redis caching.

Ask natural language questions about blockchain data and get AI-reasoned insights powered by real-time on-chain data.

## 🌟 Features

- **AI-Powered Blockchain Analysis**: Ask natural language questions about on-chain activity
- **Multi-Layer Caching**: Redis caching for faster responses and reduced API calls
- **Blockscout MCP Integration**: Real-time blockchain data from multiple chains
- **Conversational Context**: Maintains conversation history across requests
- **Rate Limiting**: Built-in protection against API abuse
- **Multi-Chain Support**: Ethereum, Base, Optimism, Polygon, Arbitrum
- **Docker Ready**: Easy deployment with Docker and NodeOps

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- [OpenAI API Key](https://platform.openai.com/api-keys)
- (Optional) [Upstash Redis](https://console.upstash.com/) for production caching

### Installation

1. Clone and install dependencies:
```bash
git clone <repository-url>
cd nodeops-web3-agent-node
pnpm install
```

2. Set up environment variables:
```bash
# Create .env.local file
cp .env.local.example .env.local
```

Edit `.env.local` and add your credentials:
```bash
OPENAI_API_KEY=sk-proj-your-key-here

# Optional: Upstash Redis for production caching
UPSTASH_REDIS_REST_URL=https://...
UPSTASH_REDIS_REST_TOKEN=...
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000/web3-agent](http://localhost:3000/web3-agent)

## 💬 Example Queries

Try asking these questions:

- "What's the latest block on Ethereum?"
- "Show me the top 10 holders of USDC"
- "Analyze wallet: 0x..."
- "Show me recent events for contract 0x..."
- "What's the current health status of Base?"

## 🏗️ Architecture

```
[User Chat UI] → [Backend API] → [Redis Cache Check]
                                       ↓
                    [Cache Hit] ←→ [Cache Miss]
                         ↓                  ↓
                   [AI Response]    [Blockscout MCP] → [Blockchain Data]
                         ↓                              ↓
                   [Cache & Return]              [Process & Cache]
```

### Caching Layers

1. **MCP Response Cache**: Blockchain data cached for 30s-5min based on type
2. **AI Output Cache**: AI responses cached for 1 hour for identical queries
3. **Conversation Context**: Multi-turn context stored for 24 hours
4. **Rate Limiting**: Sliding window (10 req/sec) per IP/user

## 🛠️ Development

### Local Development

```bash
pnpm dev              # Start development server
pnpm build            # Build for production
pnpm start            # Start production server
pnpm lint             # Run linter
```

### Docker Development

```bash
pnpm docker:dev       # Start with docker-compose
pnpm docker:build     # Build Docker image
pnpm docker:down      # Stop containers
```

## 🚢 Deployment

### Deploy with NodeOps

1. Build the Docker image:
```bash
pnpm docker:build
```

2. Deploy using the NodeOps template:
```bash
pnpm deploy
```

Or use the NodeOps dashboard to deploy from `nodeops/template.yaml`

### Environment Variables for Production

Set these in NodeOps environment configuration:

- `OPENAI_API_KEY` (required)
- `UPSTASH_REDIS_REST_URL` (required for production)
- `UPSTASH_REDIS_REST_TOKEN` (required for production)
- `BLOCKSCOUT_MCP_URL` (optional, defaults to production)
- `DEFAULT_CHAIN` (optional, defaults to ethereum)

## 📊 Caching Strategy

The agent uses a multi-layer caching strategy:

- **Latest Block**: 30 seconds
- **Token Holders**: 5 minutes
- **Account Summary**: 1 minute
- **Contract Events**: 5 minutes
- **AI Output**: 1 hour
- **Conversation**: 24 hours

See [Cache Configuration](./docs/PROJECT_PLAN_REVISED.md#cache-strategy-details) for details.

## 📚 Documentation

- [PRD](./docs/PRD.md) - Product requirements
- [Project Plan](./docs/PROJECT_PLAN_REVISED.md) - Revised plan with caching
- [References](./docs/REFERENCES.md) - External resources
- [Environment Setup](./docs/ENVIRONMENT_SETUP.md) - Setup guide
- [API Reference](./docs/API.md) - API documentation

## 🔧 Configuration

### Supported Chains

- **Ethereum** (Chain ID: 1)
- **Base** (Chain ID: 8453)
- **Optimism** (Chain ID: 10)
- **Polygon** (Chain ID: 137)
- **Arbitrum** (Chain ID: 42161)

### Rate Limits

- **10 requests per second** per IP/user
- Cached responses don't count toward rate limit
- AI output caching reduces token usage

## 🧪 Testing

Run test queries:
```bash
npm run test-demo-queries
```

Or manually test the chat interface at `/web3-agent`

## 📈 Monitoring

The agent includes built-in monitoring:

- Cache hit/miss rates
- Response latency tracking
- Rate limiting metrics
- Error logging

## 🤝 Contributing

Contributions welcome! Please read the [Project Plan](./docs/PROJECT_PLAN_REVISED.md) for architecture details.

## 📝 License

MIT License - see LICENSE file for details.

## 🔗 Links

- [Vercel AI SDK](https://ai-sdk.dev/)
- [Blockscout MCP](https://mcp.blockscout.com)
- [NodeOps](https://nodeops.xyz)
- [Upstash Redis](https://upstash.com/)

## ❓ Support

For issues or questions:
- Check [docs](./docs/) directory
- Review [Project Plan](./docs/PROJECT_PLAN_REVISED.md)
- Open an issue on GitHub
