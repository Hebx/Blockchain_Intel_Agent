#!/bin/bash
set -e

# Web3 Agent Deployment Script for NodeOps
# This script builds the Docker image and deploys it via NodeOps

echo "🚀 Starting Web3 Agent deployment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
IMAGE_NAME="web3-ai-agent"
IMAGE_TAG="latest"
REGISTRY="${DOCKER_REGISTRY:-docker.io}"
FULL_IMAGE_NAME="${REGISTRY}/${IMAGE_NAME}:${IMAGE_TAG}"

# Check if required environment variables are set
if [ -z "$VERCEL_AI_KEY" ]; then
    echo -e "${RED}Error: VERCEL_AI_KEY is not set${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Environment variables checked${NC}"

# Build Docker image
echo -e "${YELLOW}📦 Building Docker image...${NC}"
docker build -f docker/Dockerfile -t ${IMAGE_NAME}:${IMAGE_TAG} .

if [ $? -ne 0 ]; then
    echo -e "${RED}✗ Docker build failed${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Docker image built successfully${NC}"

# Tag image for registry
echo -e "${YELLOW}🏷️  Tagging image...${NC}"
docker tag ${IMAGE_NAME}:${IMAGE_TAG} ${FULL_IMAGE_NAME}

# Push to registry (optional - uncomment if deploying to remote registry)
# echo -e "${YELLOW}📤 Pushing to registry...${NC}"
# docker push ${FULL_IMAGE_NAME}

# Deploy via NodeOps
echo -e "${YELLOW}🚀 Deploying via NodeOps...${NC}"

# Check if nodeops CLI is installed
if ! command -v nodeops &> /dev/null; then
    echo -e "${RED}Error: nodeops CLI is not installed${NC}"
    echo "Install it from: https://docs.nodeops.xyz"
    exit 1
fi

# Deploy the template
nodeops deploy \
    --template nodeops/template.yaml \
    --image ${FULL_IMAGE_NAME} \
    --env VERCEL_AI_KEY="${VERCEL_AI_KEY}" \
    --env BLOCKSCOUT_MCP_URL=https://mcp.blockscout.com \
    --env DEFAULT_CHAIN=ethereum \
    --name web3-ai-agent

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ Deployment successful!${NC}"
    echo ""
    echo "Your Web3 Agent is now running on NodeOps!"
    echo "Check the logs with: nodeops logs web3-ai-agent"
else
    echo -e "${RED}✗ Deployment failed${NC}"
    exit 1
fi

