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

### Supabase (Required for Chat Persistence)

For chat history persistence, set up Supabase:

1. Create an account at [Supabase](https://supabase.com/)
2. Create a new project
3. Go to Project Settings > API
4. Copy your Project URL and Anon/Public Key
5. Run the migration SQL from `lib/db/migrations/001_initial_schema.sql` in the Supabase SQL Editor

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

**Note**: If not provided, chat persistence will fall back to browser localStorage only.

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
   NEXT_PUBLIC_SUPABASE_URL=https://...
   NEXT_PUBLIC_SUPABASE_ANON_KEY=...
   ```

3. For production with Redis:

   ```bash
   UPSTASH_REDIS_REST_URL=https://...
   UPSTASH_REDIS_REST_TOKEN=...
   ```

4. Set up Supabase database:
   - Copy the SQL from `lib/db/migrations/001_initial_schema.sql`
   - Paste into Supabase SQL Editor
   - Run the migration

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
- ✅ "Supabase credentials not configured. Chat persistence will fall back to localStorage." (development)
- OR no warning if Supabase credentials are set (production)

## Security Notes

- Never commit `.env.local` to version control
- `.env.local` is already in `.gitignore`
- Use environment variables in NodeOps deployment
- Store production credentials securely (e.g., NodeOps secrets management)
