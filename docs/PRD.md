# PRD: NodeOps Web3 Agent Node (Vercel AI SDK + Blockscout MCP)

## Project Name

**NodeOps Web3 Intelligence Agent**

---

## Project Summary

A one-click deploy NodeOps template that allows users to query blockchain data **conversationally** and get AI-reasoned summaries.

- **Frontend + AI reasoning**: Using **Vercel AI SDK**
- **Data layer**: Blockscout MCP (Model Context Protocol) Server as source of structured blockchain data :contentReference[oaicite:0]{index=0}
- **Backend (optional/minimal)**: Query mapping, caching, prompt assembly
- **Purpose**: Enable developers, node operators, and DAO stakeholders to query on-chain insights without running full nodes

---

## Hackathon Fit

- **Track**: Tooling / Open / DeFi
- **Innovation**: AI reasoning over blockchain data (not just raw API)
- **Ease**: One-click deployment via NodeOps Docker + template
- **Demo Friendly**: Interactive chat UI that returns live, AI-interpreted blockchain insights

---

## Goals

1. Deployable via NodeOps in under 10 minutes
2. Support **5+ demo queries**, e.g.:
   - Latest block number / info
   - Token holder rankings
   - Smart contract event summary
   - Account summary: approvals / transfers
   - Chain / node health / status
3. Expose a REST endpoint: `/query`
4. Respect Blockscout MCP free usage / rate limits (e.g. 10 req/sec)
5. Autoscaling via NodeOps (min 1, max 5)

---

## Target Users

- Web3 devs wanting quick access to chain analytics
- Node / infra operators wanting conversational insight
- Hackathon judges wanting to see AI + Web3 synergy

---

## Features

### Data Layer

- Use **Blockscout MCP Server** as data source; it wraps Blockscout APIs and exposes blockchain data (balances, tokens, NFTs, contract metadata, etc.) via MCP :contentReference[oaicite:1]{index=1}
- Optionally, fallback to direct Blockscout API endpoints if needed :contentReference[oaicite:2]{index=2}
- Caching for frequent queries to avoid exceeding rate limits

### AI Reasoning Layer

- Vercel AI SDK handles natural language input and output
- Use a **super-prompt template** to guide reasoning with structured data context  
  Example prompt template:
  > “Analyze {address / contract / query}:
  >
  > 1. List token approvals & transfers
  > 2. Identify interacted contracts
  > 3. Summarize high-value transactions
  > 4. Interpret smart contract calls
  > 5. Highlight anomalies”

### Backend (Optional / Minimal)

- Receives query from frontend
- Fetches data from MCP / Blockscout
- Formats context + prompt, sends to Vercel AI SDK
- Returns result to UI / API

### Frontend UI

- Chat widget using Vercel AI SDK
- Users input natural language queries → receives AI output

### Deployment & Template

- Dockerize the app (frontend + backend or serverless)
- `nodeops_template.yaml` defines containers, ports, environment variables, scaling

### Monitoring & Logging

- Log queries, responses, errors
- Basic metrics (latency, failure rate) for debugging

### Documentation

- README with setup, example queries, demo instructions, template metadata

---

## Architecture Diagram

[User Chat UI] ← Vercel AI SDK
↓
[Backend Server] → asks MCP / Blockscout
↓
[Response] ← AI-reasoned blockchain insight

---

## Tech Stack

- Frontend + AI: **Vercel AI SDK**
- Backend: Node.js / Express (minimal)
- Data: Blockscout MCP Server (via MCP API) :contentReference[oaicite:3]{index=3}
- Containerization: Docker
- NodeOps Template: YAML spec for containers, envs, scaling

---

## Milestones / Timeline

| task   | Milestone                                        |
| ------ | ------------------------------------------------ |
| task 1 | Scaffold project, Docker + template              |
| task 2 | Integrate Blockscout MCP data fetch              |
| task 3 | Build AI prompt / reasoning using Vercel SDK     |
| task 4 | Link frontend chat → backend query flow          |
| task 5 | Demo queries, polish prompt logic                |
| task 6 | Finalize Docker + NodeOps template, test scaling |
| task 7 | Prepare README + demo video, submit              |

---

## NodeOps Template Skeleton

```yaml
name: "web3-ai-agent"
category: "Tooling"
description: "AI-powered Web3 agent using Vercel AI SDK + Blockscout MCP"
containers:
  - name: web
    image: web3-ai-agent:latest
    ports: [3000]
    resources:
      cpu: "1"
      memory: "2Gi"
    env:
      - VERCEL_AI_KEY=your_key_here
      - MCP_SERVER_URL=https://mcp.blockscout.com
      - DEFAULT_CHAIN=ethereum
scaling:
  min_instances: 1
  max_instances: 5
  scale_metric: cpu_usage
```
