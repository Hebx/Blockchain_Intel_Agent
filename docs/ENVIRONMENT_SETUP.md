# Environment Setup

This guide explains how to set up environment variables for the Web3 AI Agent Node.

## Required Environment Variables

### OpenAI API Key (Required)

Get your API key from [OpenAI Platform](https://platform.openai.com/api-keys)

```bash
OPENAI_API_KEY=your_openai_api_key_here
```

### Blockscout MCP URL (Optional)

```bash
BLOCKSCOUT_MCP_URL=https://mcp.blockscout.com
```

### Default Chain (Optional)

```bash
DEFAULT_CHAIN=ethereum
```

### Upstash Redis (Production - Optional for Development)

For production deployments, set up Upstash Redis:
1. Create an account at [Upstash Console](https://console.upstash.com/)
2. Create a new Redis database
3. Copy the REST URL and Token

```bash
UPSTASH_REDIS_REST_URL=https://your-redis-endpoint.upstash.io
UPSTASH_REDIS_REST_TOKEN=your_redis_token_here
```

**Note**: If not provided, the application will use an in-memory cache suitable for development.

### Node Environment

```bash
NODE_ENV=development  # or production
```

## Quick Start

1. Copy the example environment file:
   ```bash
   cp .env.local.example .env.local
   ```

2. Update `.env.local` with your credentials:
   ```bash
   OPENAI_API_KEY=sk-proj-...
   ```

3. For production with Redis:
   ```bash
   UPSTASH_REDIS_REST_URL=https://...
   UPSTASH_REDIS_REST_TOKEN=...
   ```

## Development vs Production

### Development
- Uses in-memory cache (no Redis needed)
- Good for local testing
- Cache resets on server restart

### Production
- Requires Upstash Redis for persistent caching
- Cache survives container restarts
- Better performance and rate limiting

## Verifying Setup

Start the development server:
```bash
npm run dev
```

You should see:
- ✅ "Redis credentials not found. Using in-memory cache for development." (development)
- OR no warning if Redis credentials are set (production)

## Security Notes

- Never commit `.env.local` to version control
- `.env.local` is already in `.gitignore`
- Use environment variables in NodeOps deployment
- Store production credentials securely (e.g., NodeOps secrets management)

