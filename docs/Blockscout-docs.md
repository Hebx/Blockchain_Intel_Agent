## Blockscout Documentation Pages

Updates in progress

================================================
FILE: discord-channel.mdx
================================================

---

title: "Discord Channel"
url: "https://discord.gg/blockscout"

---

================================================
FILE: discussion.mdx
================================================

---

title: Discussion
url: "https://github.com/blockscout/blockscout/discussions"

---

================================================
FILE: docs.json
================================================
{
"$schema": "https://mintlify.com/docs.json",
"theme": "maple",
"name": "Blockscout",
"colors": {
"primary": "#5351db",
"light": "#5351db",
"dark": "#5351db"
},
"favicon": "./logo/Color_BS_symbol.svg",
"background": {
"colors": {
"light": "#fdfffe"
},
"decoration": "gradient"
},
"appearance": {
"default": "light"
},
"fonts": {
"heading": {
"family": "Poppins"
},
"body": {
"family": "Inter"
}
},
"contextual": {
"options": [
"copy",
"view",
"chatgpt",
"claude"
]
},
"navigation": {
"tabs": [
{
"tab": "Guides",
"pages": [
{
"group": "Get Started",
"pages": [
"index",
"get-started/using-an-explorer",
"get-started/integrating-data",
"get-started/running-blockscout",
"get-started/migration-guide"
]
},
{
"group": "Using Blockscout",
"pages": [
{
"group": "Overview",
"icon": "flag-checkered",
"pages": [
"using-blockscout/overviews",
"using-blockscout/overviews/glossary-of-terms",
"using-blockscout/overviews/top-menu",
"using-blockscout/overviews/address-page",
"using-blockscout/overviews/blocks",
"using-blockscout/overviews/transaction-fields",
"using-blockscout/overviews/transaction-types",
"using-blockscout/overviews/beacon-chain-withdrawal-views"
]
},
{
"group": "My Account",
"icon": "user",
"pages": [
"using-blockscout/my-account",
"using-blockscout/my-account/watchlist",
"using-blockscout/my-account/private-tags",
"using-blockscout/my-account/public-tags",
"using-blockscout/my-account/api-keys",
"using-blockscout/my-account/custom-abi",
{
"group": "Verified addresses",
"icon": "check-circle",
"pages": [
"using-blockscout/my-account/verified-addresses",
"using-blockscout/my-account/verified-addresses/copy-and-sign-message"
]
},
"using-blockscout/my-account/for-developers"
]
},
{
"group": "Dappscout Apps Marketplace",
"icon": "store",
"pages": [
"using-blockscout/blockscout-apps",
"using-blockscout/blockscout-apps/dapp-integration"
]
},
{
"group": "Swapscout",
"icon": "shuffle",
"pages": [
"using-blockscout/swapscout",
"using-blockscout/swapscout/earn-merits-when-using-swapscout"
]
},
"using-blockscout/autoscout",
"using-blockscout/revokescout",
{
"group": "Merits",
"icon": "award",
"pages": [
"using-blockscout/merits",
"using-blockscout/merits/streak-rewards",
"using-blockscout/merits/activity-pass",
"using-blockscout/merits/leaderboard",
"using-blockscout/merits/badges",
"using-blockscout/merits/faqs"
]
},
"using-blockscout/export-to-csv",
{
"group": "Token Support",
"icon": "coins",
"pages": [
"using-blockscout/token-support",
"using-blockscout/token-support/erc-1155-support"
]
}
]
},
{
"group": "Developer Support",
"pages": [
"devs/for-web3-developers",
"devs/replace-links",
"devs/apis-redirect",
{
"group": "Smart Contract Verification",
"icon": "shield-halved",
"pages": [
"devs/verification",
"devs/verification/blockscout-ui",
{
"group": "Hardhat Verification Plugin",
"pages": [
"devs/verification/hardhat-verification-plugin",
"devs/verification/hardhat-verification-plugin/sourcify-plugin-for-hardhat"
]
},
"devs/verification/foundry-verification",
"devs/verification/contracts-verification-via-sourcify",
"devs/verification/remix-verification",
"devs/verification/automate-verifications-catapulta",
"devs/verification/verification-via-thirdweb",
"devs/verification/stylus-verification",
"devs/verification/interacting-with-smart-contracts"
]
},
"devs/mcp-server",
"devs/blockscout-sdk",
"devs/chainscout-chains-list"
]
},
{
"group": "Setup and Run Blockscout",
"pages": [
{
"group": "General Overview",
"icon": "gears",
"pages": [
"setup/information-and-settings",
"setup/information-and-settings/separate-indexer-web-app-and-api",
"setup/information-and-settings/umbrella-project",
"setup/information-and-settings/indexer-architecture-overview",
"setup/information-and-settings/sharelock",
"setup/information-and-settings/evm-version-information"
]
},
{
"group": "Requirements",
"icon": "list-check",
"pages": [
"setup/requirements",
"setup/requirements/requirements",
"setup/requirements/back-front-compatibility-matrix",
"setup/requirements/resource-requirements",
"setup/requirements/database-storage-requirements",
"setup/requirements/client-settings",
"setup/requirements/node-tracing-json-rpc-requirements",
"setup/requirements/l2-greater-than-l1-json-rpc-method-requests"
]
},
{
"group": "ENV Variables",
"icon": "sliders",
"pages": [
"setup/env-variables",
"setup/env-variables/backend-env-variables",
"setup/env-variables/backend-envs-chain-specific",
"setup/env-variables/backend-envs-integrations",
{
"group": "Frontend ENVs: Common",
"pages": [
"setup/env-variables/frontend-common-envs",
"setup/env-variables/frontend-common-envs/envs",
"setup/env-variables/frontend-common-envs/deprecated-envs"
]
},
{
"group": "Deprecated Backend ENVs",
"pages": [
"setup/env-variables/deprecated-env-variables",
"setup/env-variables/deprecated-env-variables/env-variables"
]
}
]
},
{
"group": "Deployment",
"icon": "rocket",
"pages": [
"setup/deployment",
{
"group": "Manual Deployment Guide",
"pages": [
"setup/deployment/manual-deployment-guide",
"setup/deployment/manual-deployment-guide/ubuntu-setup",
"setup/deployment/manual-deployment-guide/macos-setup"
]
},
"setup/deployment/docker-compose-deployment",
"setup/deployment/kubernetes-deployment",
"setup/deployment/rollup-deployment",
"setup/deployment/cosmos-based-chains",
"setup/deployment/upgrade-guide-v7-0",
{
"group": "Frontend Migration",
"icon": "box-open",
"pages": [
"setup/deployment/frontend-migration",
"setup/deployment/frontend-migration/all-in-one-container",
"setup/deployment/frontend-migration/separate-frontend",
"setup/deployment/frontend-migration/customized-backend",
"setup/deployment/frontend-migration/proxy-setup",
"setup/deployment/frontend-migration/faqs"
]
},
{
"group": "Manual Deployment (backend + old UI)",
"icon": "hands",
"pages": [
"setup/deployment/manual-old-ui",
"setup/deployment/manual-old-ui/check-your-manual-deployment-instance"
]
},
"setup/deployment/terraform-deployment",
{
"group": "Ansible Deployment (AWS Cloud)",
"icon": "cloud",
"pages": [
"setup/deployment/ansible-deployment/overview",
"setup/deployment/ansible-deployment/prerequisites",
{
"group": "AWS Permissions & Settings",
"pages": [
"setup/deployment/ansible-deployment/aws-permissions",
"setup/deployment/ansible-deployment/aws-permissions/creating-a-secret-key-pair",
"setup/deployment/ansible-deployment/aws-permissions/login-with-aws-cli",
"setup/deployment/ansible-deployment/aws-permissions/creating-an-aws-certificate-for-ssl",
"setup/deployment/ansible-deployment/aws-permissions/manually-cleaning-terraform-related-instances"
]
},
"setup/deployment/ansible-deployment/variables",
"setup/deployment/ansible-deployment/deploying-the-blockscout-infrastructure",
"setup/deployment/ansible-deployment/deploying-blockscout",
"setup/deployment/ansible-deployment/destroying-provisioned-infrastructure",
"setup/deployment/ansible-deployment/common-additional-tasks",
"setup/deployment/ansible-deployment/common-errors-and-questions",
{
"group": "AWS Marketplace (deprecated)",
"icon": "store-alt",
"pages": [
"setup/deployment/ansible-deployment/aws-marketplace",
"setup/deployment/ansible-deployment/aws-marketplace/overview",
"setup/deployment/ansible-deployment/aws-marketplace/cloudformation-template",
"setup/deployment/ansible-deployment/aws-marketplace/aws-marketplace-installation",
"setup/deployment/ansible-deployment/aws-marketplace/install-from-aws-marketplace",
"setup/deployment/ansible-deployment/aws-marketplace/aws-ec2-archive-node-setup",
"setup/deployment/ansible-deployment/aws-marketplace/updating-and-redeploying-in-aws",
"setup/deployment/ansible-deployment/aws-marketplace/customizing-css"
]
}
]
}
]
},
{
"group": "Microservices",
"icon": "gears",
"pages": [
"setup/microservices",
"setup/microservices/blockscout-ens-bens-name-service-integration",
"setup/microservices/smart-contract-verification"
]
},
{
"group": "Configuration Options",
"icon": "wrench",
"pages": [
"setup/configuration-options",
"setup/configuration-options/admin-panel-usage",
"setup/configuration-options/automating-restarts",
"setup/configuration-options/circle-ci-updates",
"setup/configuration-options/charts-and-stats",
"setup/configuration-options/exchange-rates",
"setup/configuration-options/haproxy-settings-for-blockscout-com",
"setup/configuration-options/logger-configs",
"setup/configuration-options/memory-usage",
"setup/configuration-options/untitled-2",
"setup/configuration-options/my-account-settings",
"setup/configuration-options/recaptcha",
"setup/configuration-options/walletconnect-project-id-for-contract-read-write",
"setup/configuration-options/sorting-and-pagination",
"setup/configuration-options/tracing"
]
},
{
"group": "Indexing",
"icon": "bars-staggered",
"pages": [
"setup/indexing",
"setup/indexing/how-do-i-fix-indexer-timeouts",
"setup/indexing/how-do-i-update-memory-consumption-to-fix-indexer-memory-errors"
]
},
"setup/celestia-node-indexer",
"setup/testing",
"setup/db-schema"
]
},
{
"group": "FAQs",
"pages": [
"faqs/faqs",
"faqs/developer-faqs"
]
},
{
"group": "Resources",
"pages": [
"resources/premium-features",
"resources/contributing-to-blockscout",
"resources/bug-bounty-program",
"resources/media-kit",
{
"group": "Release Notes",
"icon": "clipboard-list",
"pages": [
"resources/release-notes",
"resources/release-notes/v5-3-0-10-23-23",
"resources/release-notes/v5-2-0-6-20-23",
"resources/release-notes/v5-1-0-2-13-23",
"resources/release-notes/v5-0-0-1-11-23"
]
},
"discord-channel",
"discussion",
"github-repo"
]
}
]
},
{
"tab": "API Reference",
"groups": [
{
"group": "Blockscout APIs",
"icon": "cloud",
"pages": [
"devs/apis",
"devs/apis/requests-and-limits",
{
"group": "REST API Endpoints",
"pages": [
"devs/apis/rest",
{
"group": "Endpoints",
"openapi": "openapi.yaml"
},
"devs/apis/rest/stats-api",
"devs/apis/rest/interpreter-api"
]
},
{
"group": "JSON RPC & ETH Compatible RPC Endpoints",
"pages": [
"devs/apis/rpc",
"devs/apis/rpc/account",
"devs/apis/rpc/block",
"devs/apis/rpc/contract",
"devs/apis/rpc/logs",
"devs/apis/rpc/stats",
"devs/apis/rpc/token",
"devs/apis/rpc/transaction",
"devs/apis/rpc/eth-rpc"
]
},
"devs/apis/graphql"
]
},
{
"group": "Verification APIs",
"icon": "shapes",
"pages": [
"devs/verification/blockscout-smart-contract-verification-api"
]
},
{
"group": "Test Merits APIs",
"icon": "award",
"pages": [
"devs/integrate-merits",
{
"group": "Endpoints",
"openapi": "merits-admin-service.yaml"
}
]
}
]
},
{
"tab": "About Blockscout",
"pages": [
{
"group": "General",
"icon": "info-circle",
"pages": [
"about/features",
"about/chains",
"about/announcements",
"about/announcements/newsletter-and-blog",
"about/funding",
"about/roadmap"
]
},
{
"group": "Partners",
"icon": "handshake",
"pages": [
"about/partners-and-integrations",
"about/partners-and-integrations/raas-providers",
"about/partners-and-integrations/vera-verifier-alliance"
]
},
{
"group": "Explorer as a Service",
"icon": "star",
"pages": [
"resources/premium-features"
]
}
]
}
],
"global": {
"anchors": [
{
"anchor": "Community",
"href": "https://discord.gg/blockscout",
"icon": "discord"
},
{
"anchor": "Blog",
"href": "https://www.blog.blockscout.com/",
"icon": "newspaper"
}
]
}
},
"logo": {
"light": "/logo/Color_BS_logo_hor.svg",
"dark": "/logo/White_BS_logo_hor.svg",
"href": "https://www.blockscout.com/"
},
"navbar": {
"links": [
{
"label": "Support",
"href": "https://discord.gg/blockscout"
}
],
"primary": {
"type": "github",
"href": "https://github.com/blockscout/blockscout"
}
},
"redirects": [
{
"source": "/about/features/ethereum-bytecode-database-microservice",
"destination": "/devs/verification/ethereum-bytecode-database-microservice"
},
{
"source": "/setup/information-and-settings/db-schema",
"destination": "/setup/db-schema"
},
{
"source": "/setup/deployment/upgrade-guide-v7.0",
"destination": "/setup/deployment/upgrade-guide-v7-0"
},
{
"source": "/setup/configuration-options/haproxy-settings-for-blockscout.com",
"destination": "/setup/configuration-options/haproxy-settings-for-blockscout-com"
},
{
"source": "/setup/deployment/ansible-deployment",
"destination": "/setup/deployment/ansible-deployment/overview"
},
{
"source": "/resources/release-notes/v5.3.0-10-23-23",
"destination": "/resources/release-notes/v5-3-0-10-23-23"
},
{
"source": "/resources/release-notes/v5.2.0-6-20-23",
"destination": "/resources/release-notes/v5-2-0-6-20-23"
},
{
"source": "/resources/release-notes/v5.1.0-2-13-23",
"destination": "/resources/release-notes/v5-1-0-2-13-23"
},
{
"source": "/resources/release-notes/v5.0.0-1-11-23",
"destination": "/resources/release-notes/v5-0-0-1-11-23"
},
{
"source": "/about/funding/l2-funding-proposal",
"destination": "/about/funding"
},
{
"source": "/about/features/blockscout-2.0",
"destination": "/about/features"
},
{
"source": "/for-users/api/rpc-endpoints",
"destination": "/devs/apis/rpc"
},
{
"source": "/for-users/api/eth-rpc",
"destination": "/devs/apis/rpc/eth-rpc"
},
{
"source": "/for-developers/frontend-migration",
"destination": "/setup/deployment/frontend-migration"
},
{
"source": "/for-developers/deployment/manual-deployment-guide",
"destination": "/setup/deployment/manual-deployment-guide"
},
{
"source": "/for-users/verifying-a-smart-contract",
"destination": "/devs/verification"
},
{
"source": "/for-users/verifying-a-smart-contract/foundry-verification",
"destination": "/devs/verification/foundry-verification"
},
{
"source": "/for-users/verifying-a-smart-contract/hardhat-verification-plugin",
"destination": "/devs/verification/hardhat-verification-plugin"
},
{
"source": "/about/funding/l2-funding-proposal/aux-funding-images",
"destination": "/about/funding"
}
],
"footer": {
"socials": {
"github": "https://github.com/blockscout/blockscout",
"telegram": "https://t.me/blockscoutcommunity",
"discord": "https://discord.gg/blockscout",
"x": "https://x.com/blockscout"
}
}
}

================================================
FILE: github-repo.mdx
================================================

---

title: GitHub Repo
url: "https://github.com/poanetwork/blockscout"

---

================================================
FILE: index.mdx
================================================

---

title: "Blockscout Docs"
description: "Blockscout is a universal, open-source blockchain explorer for inspecting, analyzing, and interacting with EVM-based chains. Blockscout supports over 1000 L1, L2 and L3 EVM-based chains, optimistic rollups, and ZK rollups. "
icon: "binoculars"

---

<CardGroup cols={3}>
  <Card title="New to Blockscout?" icon="sparkles" href="get-started/new-to-blockscout">
    Learn about key features and supported chains
  </Card>
  <Card title="Using an Explorer" icon="searchengin" href="get-started/using-an-explorer">
    Quickstart for blockchain explorer users
  </Card>
  <Card title="Data and APIs" icon="database" href="get-started/integrating-data">
    Get started with APIs, SDK and more
  </Card>
  <Card title="Running Blockscout" icon="person-running" href="get-started/running-blockscout">
    Get your self hosted instance up-and-running
  </Card>
  <Card title="Migration Guide" icon="bird" href="get-started/migration-guide">
    Switch to Blockscout from another explorer like Etherscan
  </Card>
</CardGroup>

## Explorer Hosting Options

<Tip>
  - [Explorer as a Service](https://eaas.blockscout.com/#explorer-as-a-service) for enterprise and production grade hosting
  - [Autoscout](https://deploy.blockscout.com/) self-service launchpad for instant explorer deployment
</Tip>

![Blockscout Optimism Block Explorer](/images/729e3f81-image.jpeg)

================================================
FILE: merits-admin-service.yaml
================================================
openapi: 3.0.1
info:
title: Merits Admin service
contact:
name: Blockscout
url: https://blockscout.com
email: support@blockscout.com
version: 0.1.1
externalDocs:
description: More about merits microservice
url: https://github.com/blockscout/points
servers:

- url: https://merits.blockscout.com/
  security:
- AdminApiKey: []
  tags:
- name: PointsAdminService
  paths:
  /admin/api/v1/codes:
  get:
  tags: - PointsAdminService
  operationId: PointsAdminService_AdminGetCustomReferralCodes
  responses:
  "200":
  description: A successful response.
  content:
  application/json:
  schema:
  $ref: '#/components/schemas/v1AdminGetCustomReferralCodesResponse'
  default:
  description: An unexpected error response.
  content:
  application/json:
  schema:
  $ref: '#/components/schemas/rpcStatus'
  post:
  tags: - PointsAdminService
  operationId: PointsAdminService_AdminAddCustomReferralCode
  requestBody:
  content:
  application/json:
  schema:
  $ref: '#/components/schemas/v1AdminAddCustomReferralCodeRequest'
  required: true
  responses:
  "200":
  description: A successful response.
  content:
  application/json:
  schema:
  $ref: '#/components/schemas/v1AdminAddCustomReferralCodeResponse'
  default:
  description: An unexpected error response.
  content:
  application/json:
  schema:
  $ref: '#/components/schemas/rpcStatus'
  x-codegen-request-body-name: body
  patch:
  tags: - PointsAdminService
  operationId: PointsAdminService_AdminUpdateCustomReferralCode
  requestBody:
  content:
  application/json:
  schema:
  $ref: '#/components/schemas/v1AdminUpdateCustomReferralCodeRequest'
  required: true
  responses:
  "200":
  description: A successful response.
  content:
  application/json:
  schema:
  $ref: '#/components/schemas/v1AdminUpdateCustomReferralCodeResponse'
  default:
  description: An unexpected error response.
  content:
  application/json:
  schema:
  $ref: '#/components/schemas/rpcStatus'
  x-codegen-request-body-name: body
  /admin/api/v1/distribute:
  post:
  tags: - PointsAdminService
  operationId: PointsAdminService_AdminDistribute
  requestBody:
  content:
  application/json:
  schema:
  $ref: '#/components/schemas/v1AdminDistributeRequest'
  required: true
  responses:
  "200":
  description: A successful response.
  content:
  application/json:
  schema:
  $ref: '#/components/schemas/v1AdminDistributeResponse'
  default:
  description: An unexpected error response.
  content:
  application/json:
  schema:
  $ref: '#/components/schemas/rpcStatus'
  x-codegen-request-body-name: body
  /admin/api/v1/distributions/{distribution_id}:
  get:
  tags: - PointsAdminService
  operationId: PointsAdminService_AdminGetDistribution
  parameters: - name: distribution_id
  in: path
  required: true
  schema:
  type: string
  responses:
  "200":
  description: A successful response.
  content:
  application/json:
  schema:
  $ref: '#/components/schemas/v1AdminGetDistributionResponse'
  default:
  description: An unexpected error response.
  content:
  application/json:
  schema:
  $ref: '#/components/schemas/rpcStatus'
  /admin/api/v1/networks:
  get:
  tags: - PointsAdminService
  operationId: PointsAdminService_AdminGetNetworks
  responses:
  "200":
  description: A successful response.
  content:
  application/json:
  schema:
  $ref: '#/components/schemas/v1AdminGetNetworksResponse'
  default:
  description: An unexpected error response.
  content:
  application/json:
  schema:
  $ref: '#/components/schemas/rpcStatus'
  /admin/api/v1/networks/{chain_id}:
  get:
  tags: - PointsAdminService
  operationId: PointsAdminService_AdminGetNetwork
  parameters: - name: chain_id
  in: path
  required: true
  schema:
  type: string
  responses:
  "200":
  description: A successful response.
  content:
  application/json:
  schema:
  $ref: '#/components/schemas/v1AdminNetwork'
  default:
  description: An unexpected error response.
  content:
  application/json:
  schema:
  $ref: '#/components/schemas/rpcStatus'
  post:
  tags: - PointsAdminService
  operationId: PointsAdminService_AdminAddNetwork
  parameters: - name: chain_id
  in: path
  required: true
  schema:
  type: string
  requestBody:
  content:
  application/json:
  schema:
  $ref: '#/components/schemas/PointsAdminServiceAdminAddNetworkBody'
  required: true
  responses:
  "200":
  description: A successful response.
  content:
  application/json:
  schema:
  $ref: '#/components/schemas/v1AdminAddNetworkResponse'
  default:
  description: An unexpected error response.
  content:
  application/json:
  schema:
  $ref: '#/components/schemas/rpcStatus'
  x-codegen-request-body-name: body
  patch:
  tags: - PointsAdminService
  operationId: PointsAdminService_AdminUpdateNetwork
  parameters: - name: chain_id
  in: path
  required: true
  schema:
  type: string
  requestBody:
  content:
  application/json:
  schema:
  $ref: '#/components/schemas/PointsAdminServiceAdminUpdateNetworkBody'
  required: true
  responses:
  "200":
  description: A successful response.
  content:
  application/json:
  schema:
  $ref: '#/components/schemas/v1AdminUpdateNetworkResponse'
  default:
  description: An unexpected error response.
  content:
  application/json:
  schema:
  $ref: '#/components/schemas/rpcStatus'
  x-codegen-request-body-name: body
  /admin/api/v1/offers/{offer_id}:
  post:
  tags: - PointsAdminService
  operationId: PointsAdminService_AdminAddOffer
  parameters: - name: offer_id
  in: path
  required: true
  schema:
  type: string
  requestBody:
  content:
  application/json:
  schema:
  $ref: '#/components/schemas/PointsAdminServiceAdminAddOfferBody'
  required: true
  responses:
  "200":
  description: A successful response.
  content:
  application/json:
  schema:
  $ref: '#/components/schemas/v1AdminAddOfferResponse'
  default:
  description: An unexpected error response.
  content:
  application/json:
  schema:
  $ref: '#/components/schemas/rpcStatus'
  x-codegen-request-body-name: body
  patch:
  tags: - PointsAdminService
  operationId: PointsAdminService_AdminUpdateOffer
  parameters: - name: offer_id
  in: path
  required: true
  schema:
  type: string
  requestBody:
  content:
  application/json:
  schema:
  $ref: '#/components/schemas/PointsAdminServiceAdminUpdateOfferBody'
  required: true
  responses:
  "200":
  description: A successful response.
  content:
  application/json:
  schema:
  $ref: '#/components/schemas/v1AdminUpdateOfferResponse'
  default:
  description: An unexpected error response.
  content:
  application/json:
  schema:
  $ref: '#/components/schemas/rpcStatus'
  x-codegen-request-body-name: body
  /admin/api/v1/offers/{offer_id}/redemptions:
  get:
  tags: - PointsAdminService
  operationId: PointsAdminService_AdminGetOfferRedemptions
  parameters: - name: offer_id
  in: path
  required: true
  schema:
  type: string - name: page_size
  in: query
  schema:
  type: integer
  format: int64 - name: page_token
  in: query
  schema:
  type: string
  responses:
  "200":
  description: A successful response.
  content:
  application/json:
  schema:
  $ref: '#/components/schemas/v1AdminGetOfferRedemptionsResponse'
  default:
  description: An unexpected error response.
  content:
  application/json:
  schema:
  $ref: '#/components/schemas/rpcStatus'
  /admin/api/v1/offers/{offer_id}/secrets:
  get:
  tags: - PointsAdminService
  operationId: PointsAdminService_AdminGetOfferSecrets
  parameters: - name: offer_id
  in: path
  required: true
  schema:
  type: string - name: is_redeemed
  in: query
  schema:
  type: boolean - name: page_size
  in: query
  schema:
  type: integer
  format: int64 - name: page_token
  in: query
  schema:
  type: string
  responses:
  "200":
  description: A successful response.
  content:
  application/json:
  schema:
  $ref: '#/components/schemas/v1AdminGetOfferSecretsResponse'
  default:
  description: An unexpected error response.
  content:
  application/json:
  schema:
  $ref: '#/components/schemas/rpcStatus'
  post:
  tags: - PointsAdminService
  operationId: PointsAdminService_AdminAddOfferSecrets
  parameters: - name: offer_id
  in: path
  required: true
  schema:
  type: string
  requestBody:
  content:
  application/json:
  schema:
  $ref: '#/components/schemas/PointsAdminServiceAdminAddOfferSecretsBody'
  required: true
  responses:
  "200":
  description: A successful response.
  content:
  application/json:
  schema:
  $ref: '#/components/schemas/v1AdminAddOfferSecretsResponse'
  default:
  description: An unexpected error response.
  content:
  application/json:
  schema:
  $ref: '#/components/schemas/rpcStatus'
  x-codegen-request-body-name: body
  /admin/api/v1/offers/{offer_id}/secrets/{secret_id}:
  delete:
  tags: - PointsAdminService
  operationId: PointsAdminService_AdminDeleteOfferSecret
  parameters: - name: offer_id
  in: path
  required: true
  schema:
  type: string - name: secret_id
  in: path
  required: true
  schema:
  type: integer
  format: int32
  responses:
  "200":
  description: A successful response.
  content:
  application/json:
  schema:
  $ref: '#/components/schemas/v1AdminDeleteOfferSecretResponse'
  default:
  description: An unexpected error response.
  content:
  application/json:
  schema:
  $ref: '#/components/schemas/rpcStatus'
  /admin/api/v1/users:
  get:
  tags: - PointsAdminService
  operationId: PointsAdminService_AdminGetUsersBasicInfo
  parameters: - name: address
  in: query
  style: form
  explode: true
  schema:
  type: array
  items:
  type: string
  responses:
  "200":
  description: A successful response.
  content:
  application/json:
  schema:
  $ref: '#/components/schemas/v1AdminGetUsersBasicInfoResponse'
  default:
  description: An unexpected error response.
  content:
  application/json:
  schema:
  $ref: '#/components/schemas/rpcStatus'
  /admin/api/v1/users/{address_or_code}:
  get:
  tags: - PointsAdminService
  operationId: PointsAdminService_AdminGetUserInfo
  parameters: - name: address_or_code
  in: path
  required: true
  schema:
  type: string
  responses:
  "200":
  description: A successful response.
  content:
  application/json:
  schema:
  $ref: '#/components/schemas/v1AdminGetUserInfoResponse'
  default:
  description: An unexpected error response.
  content:
  application/json:
  schema:
  $ref: '#/components/schemas/rpcStatus'
  /admin/api/v1/users/{address}/code:
  post:
  tags: - PointsAdminService
  operationId: PointsAdminService_AdminUpdateReferralCode
  parameters: - name: address
  in: path
  required: true
  schema:
  type: string
  requestBody:
  content:
  application/json:
  schema:
  $ref: '#/components/schemas/PointsAdminServiceAdminUpdateReferralCodeBody'
  required: true
  responses:
  "200":
  description: A successful response.
  content:
  application/json:
  schema:
  $ref: '#/components/schemas/v1AdminUpdateReferralCodeResponse'
  default:
  description: An unexpected error response.
  content:
  application/json:
  schema:
  $ref: '#/components/schemas/rpcStatus'
  x-codegen-request-body-name: body
  components:
  schemas:
  PointsAdminServiceAdminAddNetworkBody:
  type: object
  properties:
  name:
  type: string
  domain:
  type: string
  active:
  type: boolean
  rpc_url:
  type: string
  blockscout_api_key:
  type: string
  block_timestamp_skew:
  type: integer
  format: int32
  sent_transactions_activity_enabled:
  type: boolean
  verified_contracts_activity_enabled:
  type: boolean
  blockscout_usage_activity_enabled:
  type: boolean
  PointsAdminServiceAdminAddOfferBody:
  type: object
  properties:
  details:
  type: object
  properties: {}
  price:
  type: string
  weight:
  type: integer
  format: int32
  valid_since:
  type: string
  valid_until:
  type: string
  redemptions_limit:
  type: integer
  format: int32
  min_passport_score:
  type: string
  is_hidden:
  type: boolean
  is_unique_per_address:
  type: boolean
  is_auto_filled:
  type: boolean
  PointsAdminServiceAdminAddOfferSecretsBody:
  type: object
  properties:
  details:
  type: array
  items:
  type: string
  PointsAdminServiceAdminUpdateNetworkBody:
  type: object
  properties:
  name:
  type: string
  domain:
  type: string
  active:
  type: boolean
  rpc_url:
  type: string
  blockscout_api_key:
  type: string
  block_timestamp_skew:
  type: integer
  format: int32
  sent_transactions_activity_enabled:
  type: boolean
  verified_contracts_activity_enabled:
  type: boolean
  blockscout_usage_activity_enabled:
  type: boolean
  PointsAdminServiceAdminUpdateOfferBody:
  type: object
  properties:
  details:
  type: object
  properties: {}
  price:
  type: string
  weight:
  type: integer
  format: int32
  valid_since:
  type: string
  valid_until:
  type: string
  redemptions_limit:
  type: integer
  format: int32
  min_passport_score:
  type: string
  is_hidden:
  type: boolean
  is_unique_per_address:
  type: boolean
  is_auto_filled:
  type: boolean
  PointsAdminServiceAdminUpdateReferralCodeBody:
  type: object
  properties:
  old_code:
  type: string
  new_code:
  type: string
  protobufAny:
  type: object
  properties:
  '@type':
  type: string
  additionalProperties:
  type: object
  protobufNullValue:
  type: string
  description: |-
  `NullValue` is a singleton enumeration to represent the null value for the
  `Value` type union.

          The JSON representation for `NullValue` is JSON `null`.

           - NULL_VALUE: Null value.
        default: NULL_VALUE
        enum:
        - NULL_VALUE
      rpcStatus:
        type: object
        properties:
          code:
            type: integer
            format: int32
          message:
            type: string
          details:
            type: array
            items:
              $ref: '#/components/schemas/protobufAny'
      v1AdminAddCustomReferralCodeRequest:
        type: object
        properties:
          code:
            type: string
          bonus:
            type: string
          limit:
            type: integer
            format: int32
      v1AdminAddCustomReferralCodeResponse:
        type: object
        properties:
          code:
            type: string
      v1AdminAddNetworkResponse:
        type: object
      v1AdminAddOfferResponse:
        type: object
      v1AdminAddOfferSecretsResponse:
        type: object
      v1AdminDeleteOfferSecretResponse:
        type: object
      v1AdminDistributeRequest:
        type: object
        properties:
          id:
            type: string
          description:
            type: string
          distributions:
            type: array
            items:
              $ref: '#/components/schemas/v1Distribution'
          create_missing_accounts:
            type: boolean
          expected_total:
            type: string
      v1AdminDistributeResponse:
        type: object
        properties:
          accounts_distributed:
            type: string
            format: uint64
          accounts_created:
            type: string
            format: uint64
      v1AdminGetCustomReferralCodesResponse:
        type: object
        properties:
          items:
            type: array
            items:
              $ref: '#/components/schemas/v1CustomReferralCode'
      v1AdminGetDistributionResponse:
        type: object
        properties:
          id:
            type: string
          description:
            type: string
          total_receivers:
            type: string
            format: uint64
          total_accounts_created:
            type: string
            format: uint64
          total_distributed:
            type: string
          distributions:
            type: array
            items:
              $ref: '#/components/schemas/v1Distribution'
          distributed_at:
            type: string
      v1AdminGetNetworksResponse:
        type: object
        properties:
          items:
            type: array
            items:
              $ref: '#/components/schemas/v1AdminNetwork'
      v1AdminGetOfferRedemptionsResponse:
        type: object
        properties:
          items:
            type: array
            items:
              $ref: '#/components/schemas/v1OfferRedemption'
          next_page_params:
            $ref: '#/components/schemas/v1Pagination'
      v1AdminGetOfferSecretsResponse:
        type: object
        properties:
          items:
            type: array
            items:
              $ref: '#/components/schemas/v1OfferSecret'
          next_page_params:
            $ref: '#/components/schemas/v1Pagination'
      v1AdminGetUserInfoResponse:
        type: object
        properties:
          address:
            type: string
          balances:
            $ref: '#/components/schemas/v1GetUserBalancesResponse'
          logs:
            type: array
            items:
              $ref: '#/components/schemas/v1UserLog'
          code:
            type: string
          invited_users:
            type: array
            items:
              type: string
          passport_score:
            $ref: '#/components/schemas/v1PassportScore'
      v1AdminGetUsersBasicInfoResponse:
        type: object
        properties:
          items:
            type: array
            items:
              $ref: '#/components/schemas/v1UserBasicInfo'
      v1AdminNetwork:
        type: object
        properties:
          chain_id:
            type: string
          name:
            type: string
          domain:
            type: string
          active:
            type: boolean
          rpc_url:
            type: string
          blockscout_api_key:
            type: string
          block_timestamp_skew:
            type: integer
            format: int32
          sent_transactions_activity_enabled:
            type: boolean
          verified_contracts_activity_enabled:
            type: boolean
          blockscout_usage_activity_enabled:
            type: boolean
      v1AdminUpdateCustomReferralCodeRequest:
        type: object
        properties:
          code:
            type: string
          bonus:
            type: string
          limit:
            type: integer
            format: int32
      v1AdminUpdateCustomReferralCodeResponse:
        type: object
      v1AdminUpdateNetworkResponse:
        type: object
      v1AdminUpdateOfferResponse:
        type: object
      v1AdminUpdateReferralCodeResponse:
        type: object
      v1CustomReferralCode:
        type: object
        properties:
          code:
            type: string
          bonus:
            type: string
          limit:
            type: integer
            format: int32
          count:
            type: integer
            format: int32
      v1Distribution:
        type: object
        properties:
          address:
            type: string
          amount:
            type: string
      v1GetUserBalancesResponse:
        type: object
        properties:
          total:
            type: string
          staked:
            type: string
          unstaked:
            type: string
          total_staking_rewards:
            type: string
          total_referral_rewards:
            type: string
          pending_referral_rewards:
            type: string
      v1OfferRedemption:
        type: object
        properties:
          offer_id:
            type: string
          address:
            type: string
          redemption:
            type: string
            format: uint64
          price:
            type: string
          note:
            type: string
          redeemed_at:
            type: string
          secret:
            type: string
      v1OfferSecret:
        type: object
        properties:
          secret_id:
            type: integer
            format: int32
          offer_id:
            type: string
          details:
            type: string
          is_redeemed:
            type: boolean
      v1Pagination:
        type: object
        properties:
          page_token:
            type: string
          page_size:
            type: integer
            format: int64
      v1PassportScore:
        type: object
        properties:
          score:
            type: string
          expiry_at:
            type: string
          details:
            type: object
            properties: {}
      v1UserBasicInfo:
        type: object
        properties:
          address:
            type: string
          is_active:
            type: boolean
          balances:
            $ref: '#/components/schemas/v1GetUserBalancesResponse'
      v1UserLog:
        type: object
        properties:
          id:
            type: string
            format: uint64
          action:
            type: string
          details:
            type: object
            properties: {}
          timestamp:
            type: string

  securitySchemes:
  AdminApiKey:
  type: apiKey
  description: "Authentication token, prefixed by Bearer: Bearer <token>"
  name: Authorization
  in: header
  x-original-swagger-version: "2.0"

================================================
FILE: style.css
================================================
#content-container {
overflow-wrap: break-word;
}

================================================
FILE: .vale.ini
================================================

# Top level styles

StylesPath = .
MinAlertLevel = suggestion
IgnoredScopes = code, tt, img, url, a
SkippedScopes = script, style, pre, figure, code

# Vocabularies

Vocab = Mintlify

# This is required since Vale doesn't officially support MDX

[formats]
mdx = md

# MDX support

[*.mdx]
BasedOnStyles = Vale
Vale.Terms = NO # Enforces really harsh capitalization rules, keep off

# `import ...`, `export ...`

# `<Component ... />`

# `<Component>...</Component>`

# `{ ... }`

TokenIgnores = (?sm)((?:import|export) .+?$), \
(?<!`)(<\w+ ?.+ ?\/>)(?!`), \
(<[A-Z]\w+>.+?<\/[A-Z]\w+>)

# Exclude:

# `<Component \n ... />`

BlockIgnores = (?sm)^(<\w+\n ._\s\/>)$, \
(?sm)^({.+._})

CommentDelimiters = {/_, _/}

================================================
FILE: about/announcements.mdx
================================================

---

title: "News Highlights"
sidebarTitle: "News Highlights"
icon: "bullhorn"
description: News, media coverage, and major announcements related to Blockscout.

---

## Seed Funding Announcement

<Card title="Blockscout Raises $3M Seed Round Led by 1kx" href="https://www.blog.blockscout.com/blockscout-raises-3m-seed-round-led-by-1kx/">
Blockscout open-source explorer
</Card>

## OurNetwork Blockscout Feature

OurNetwork is a leading crypto publication providing data-driven insights on blockchain industry trends. This deep dive on Blockscout features coverage about Blockscout Network Health, User Trends, Explorer-as-a-Service, and the DAppscout Marketplace.

<Card title="ON–286: Zoomed-in on Blockscout 🔬" href="https://www.ournetwork.xyz/p/on-286-zoomed-in-on-blockscout">
OurNetwork
</Card>

## Dappcon 2024 Blockscout Presentation

Head of research Kirill Fedoseev presented on network resilience and the need for reliable, transparent, and available explorers in a multi-chain world (starts at 7:50:00)

<Frame>
<iframe width="711" height="400" src="https://www.youtube.com/embed/xRAG5oIrwH4" title="DappCon24: Day 3 - Consensus Layer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</Frame>

## EthCC 2023 Blockscout Presentation

Head of Product Ulyana Skladchikova presented on the future of block explorers at ETHCC 2023 in Paris.

<Frame>
<iframe width="711" height="400" src="https://www.youtube.com/embed/Aq_IeLtop00" title="Ulyana Skladchikova - Envisioning tomorrow: Evolution of blockchain explorers" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</Frame>

## The Evolution & Future of Infrastructure at Optimism's On-Chain Summit

<Frame>
<iframe width="711" height="400" src="https://www.youtube.com/embed/HpIzu5eU9WA" title="Onchain Summit: The Evolution &amp; Future of Infrastructure" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</Frame>

## Base + Blockscout mainnet launch announcement

<Card title="Base Block Explorer Blockscout" href="https://www.blog.blockscout.com/blockscout-base/">
Blockscout open-source explorer
</Card>

## Base + Blockscout original press release

<Card title="Base Open Source Block Explorer.pdf" href="https://1077666658-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-Lq1XoWGmy8zggj_u2fM%2Fuploads%2FdzWTqaTgnhWRkD40C3Ay%2FBase%20Open%20Source%20Block%20Explorer.pdf?alt=media&token=7a6edb78-e9cd-4e85-91d8-13d6d08db3e5">
pdf
</Card>

================================================
FILE: about/chains.mdx
================================================

---

title: "Chains Using Blockscout"
description: List of projects and links
icon: "link"

---

<Warning>
**The new searchable projects page is located at [https://chains.blockscout.com/](https://chains.blockscout.com/)**

**Please [Submit a PR](https://github.com/blockscout/chainscout) to add your chain.**
</Warning>

<Frame caption="">
  <img src="/images/7c9e5707-image.jpeg" />
</Frame>

================================================
FILE: about/features.mdx
================================================

---

title: "Features"
sidebarTitle: "Overview"
icon: "code"
description: Blockscout is a full-featured, open-source blockchain explorer

---

<Check>
🚗 [Autoscout is now available](/using-blockscout/autoscout), providing a simple one-click explorer deployment with Blockscout's optimized hosting infrastructure. Use it for early testing, modifications, and launching a full production-grade explorer. **[Get Started Now](/using-blockscout/autoscout) and have your explorer up-and-running in minutes.**

</Check>

### What can I do with Blockscout?

- **Deep Search**: Find all the information you need on [Blocks](/using-blockscout/overviews/blocks), Transactions, Tags and more through the integrated search box.

- **Interact with Contracts**: [Read and write to contracts](/devs/verification/interacting-with-smart-contracts) directly from the Blockscout UI.

- **Verify Contracts:** Use [Hardhat](/devs/verification/hardhat-verification-plugin), [Sourcify](/devs/verification/contracts-verification-via-sourcify), and other tools to quickly verify contracts.

- **Make API Calls**: Make requests to a [robust API](/devs/apis) using standard and customized endpoints.

- **Customize Views**: Use the [My Account](/using-blockscout/my-account) features to add tags, watchlists and other features.

- **Interact with Apps**: Chains with the [Apps Marketplace](/using-blockscout/blockscout-apps) enabled include a portal for discovery and interaction with applications deployed on-chain.

### Key Features

- **Open source development**: The code is community driven and available for anyone to use, explore, and improve.

- **Broad multi-chain ecosystem support**: Blockscout supports Ethereum mainnet, EVM forks like Ethereum Classic, Celo, & Gnosis Chain, Polkadot Parachains, Cosmos ecosystem, optimistic rollups, and many additional public and private EVM networks. [See the list](/about/chains)

- **Real time transaction tracking**: Transactions are updated in real time - no page refresh required. Infinite scrolling is also enabled.

- **Smart contract interaction**: Users can read and verify Solidity & Vyper smart contracts and access pre-existing contracts to fast-track development.

- **Token support**: Support for ERC20 and ERC721 tokens.

- **Decoded views:** Contract method calls and logs are decoded to provide additional information within the UI.

- **Full-featured API:** GraphQL provides the opportunity to test API calls directly from a web interface, and RPC methods are well documented.

- **User customization**: Users can easily deploy on a network and customize the Bootstrap-based interface.

- **Modular and extendible**: We're building next generation modularity into Blockscout with Rust-designed microservices.

================================================
FILE: about/funding.mdx
================================================

---

title: "Funding"
sidebarTitle: "Funding"
description: Information about Blockscout funding sources, grants, and opportunities for support.
icon: "money-bill"

---

Blockscout [raised their first seed round](https://www.blog.blockscout.com/blockscout-raises-3m-seed-round-led-by-1kx/) in 2024 to help bring open-source exploration to more blockchain users.

We would like to thank projects, individuals, and agencies who have helped support Blockscout open-source explorer growth either through direct giving or grants to support instances.

We are open to additional grant opportunities and [welcome queries](https://discord.gg/XmNatGKbPS) from projects in need of a new open-source explorer instance or maintenance of their current instances.

Funding grants include:

- Seed Grant from the [Ethprize Foundation](http://ethprize.io/) (2018)

- [Gitcoin Grants](https://explorer.gitcoin.co/#/round/424/0x222ea76664ed77d18d4416d2b2e77937b76f0a35/0x222ea76664ed77d18d4416d2b2e77937b76f0a35-22) rounds (ongoing)

- [Community governance funding from Astar](https://forum.astar.network/t/blockscout-builders-program-application/1735) to support Blockscout instances for their networks (2021)

- [GnosisDAO funding](https://forum.gnosis.io/t/gip-54-should-gnosisdao-support-hosting-and-feature-updates-for-blockscout-explorer/5378/4) to support Gnosis Chain Blockscout instances (ongoing)

- [Optimism RetroPGF2](https://optimism.mirror.xyz/Upn_LtV2-3SviXgX_PE_LyA7YI00jQyoM1yf55ltvvI) & [RetroPGF3](https://optimism.mirror.xyz/37Bgum6MfTJWDuE41CH9RXSH5KBm_RCL5zsSFeRZl4E) (2023)

- [ETC Grants DAO](https://etccooperative.org/posts/2023-08-09-presenting-first-round-etc-grants-dao-winner-blockscout-en) (2023)

- Grant support from the [Ethereum Foundation](/about/features/blockscout-2.0) (2023).

================================================
FILE: about/partners-and-integrations.mdx
================================================

---

title: "Partners & Integrations"
sidebarTitle: "Collaborations"
description: Blockscout featured integrations
icon: "handshake"

---

<Frame caption="">
  <img src="/images/b6738084-image.jpeg"/>
</Frame>

Blockscout features many 3rd party integrations. Additional services are also integrating Blockscout, including many [Rollup-as-a-Service (RaaS) providers](/about/partners-and-integrations/raas-providers).

## Blockscout Partners

Partners provide vital data, infrastructure, and contract support to Blockscout.

|                                                           |                                                                                                                                                                                                                                                                                                     |
| --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="/images/139d28f1-image.jpeg" className='w-36'/> | [**Metasuites**](https://blocksec.com/metasuites) by Blocksec provides an browser extension that enhances Blockscout with address labelling, transaction explanations, and compliance scores for addresses based on behavior.                                                                       |
| <img src="/images/574ac88b-image.jpeg" className='w-36'/> | [**Sourcify**](https://sourcify.dev/) gives developers the option to verify contracts via the Sourcify API with Blockscout. Contracts verified through Sourcify will display this information on the verified contracts page. [Learn more](/devs/verification/contracts-verification-via-sourcify). |
| <img src="/images/c7f15ee7-image.jpeg" className='w-36'/> | [**DPRC**](https://drpc.org/) is a decentralized Web3 infrastructure provider with a focus on resilience and latency. DPRC provides RPC services for a number of Blockscout hosted instances.                                                                                                       |

## Tools and Utilities

Blockscout provides links to relevant, useful tools related to specific transactions and contracts for easy enhanced inspection.

|                                                           |                                                                                                                                                                                                                                                                                                           |
| --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="/images/1a070eb5-image.jpeg" className='w-36'/> | [**Tenderly**](https://tenderly.co/) is an all-in-one Web3 development platform. It is extremely useful for transaction simulation and smart contract development. Blockscout provides a link to transactions for viewing additional detailed information on the Tenderly platform.                       |
| <img src="/images/7b7186b9-image.jpeg" className='w-36'/> | [**Sentio**](https://www.sentio.xyz/) is a monitoring, alerting, log management and debugging service for blockchains. Blockscout provides a link to the Sentio explorer for users who need to find advanced analytics about a particular transaction or contract, and read/search/write/fix code faster! |
| <img src="/images/365a3d5e-image.jpeg" className='w-36'/> | [**SolidityScan**](https://solidityscan.com) is an AI-driven tool specifically tailored for Smart Contract Vulnerability Detection within the web3 ecosystem. With the Blockscout integration, users can access a real-time security score for verified contracts on supported chains.                    |

## Linked Explorers

Blockscout includes links to additional blockchain explorers for verification and transparency on hosted instances. Self-hosted instances can choose which additional explorers to link with using [front-end ENVs](https://github.com/blockscout/frontend/blob/main/docs/ENVS.md) during deployment.

|                                                           |                                                                                                                                                                                                                                                                                               |
| --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="/images/d747ed26-image.jpeg" className='w-36'/> | [**Blockchair**](https://blockchair.com/) block explorer indexes data for 18 blockchains. When available, Blockscout provides a link to Blockchair for transactions, addresses, and more so users can verify and double-check data accuracy.                                                  |
| <img src="/images/f29b5eac-image.jpeg" className='w-36'/> | [**Etherscan**](https://etherscan.io/) explorer is available for large chains and provides a comprehensive data source. When available, Blockscout provides a link to Etherscan so users may double check and verify transactions on multiple explorers.                                      |
| <img src="/images/eeceb7e7-image.jpeg" className='w-36'/> | [**0xPPL**](https://0xppl.com/) offers social search as well as transaction information, providing a connection between on and off chain data. When available, Blockscout provides a link to 0xPPL for transactions, addresses, and more so users can verify and find additional information. |
| <img src="/images/a938c700-image.jpeg" className='w-36'/> | [**3xpl**](https://3xpl.com/) is a fast, universal explorer for most popular public blockchains. When available, Blockscout provides a link to 3xpl for data verification.                                                                                                                    |

## Contract Verification

Contract verification integrations make it easier to verify contracts from a variety of development environments and bring in additional verified contract information.

|                                                           |                                                                                                                                                                                                                                                                      |
| --------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="/images/4e9d186f-image.jpeg" className='w-36'/> | [**Hardhat**](https://hardhat.org/) is a popular Ethereum development environment. Contracts can be deployed and verified on Blockscout using the verification plugin. [Learn more](/devs/verification/hardhat-verification-plugin).                                 |
| <img src="/images/c413c328-image.jpeg" className='w-36'/> | [**Foundry**](https://github.com/foundry-rs/foundry/) is a smart contract development toolchain and Forge is a command-line tool that ships with Foundry that supports contract verification with Blockscout. [Learn More](/devs/verification/foundry-verification). |
| <img src="/images/ee9549d3-image.jpeg" className='w-36'/> | [**Remix**](https://remix-project.org/)is a popular IDE for developing smart contracts. You can use the built-in verification plugin to verify contracts in Blockscout. [Learn More](/devs/verification/remix-verification).                                         |
| <img src="/images/sourcify.png" className='w-36'/>        | [**Sourcify**](https://sourcify.dev/) is an open-source platform for verifying contracts. You can use the Sourcify API to verify contracts in Blockscout. [Learn more](/devs/verification/contracts-verification-via-sourcify).                                      |

## Tokens and TVL

Feeds can be sourced from several options to provide the latest up-to-date token information. These options are set through [application ENVs](/setup/env-variables) during deployment.

|                                                           |                                                                                                                                                                                                                                                                                       |
| --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="/images/802f48fb-image.jpeg" className='w-36'/> | [**CoinGecko**](https://www.coingecko.com/)is a source for token prices and market cap information using the e CoinGecko API. CoinGecko is a leading application which provides price tracking, volume and market capitalisation, community growth, and open-source code development. |
| <img src="/images/6b6ea5dc-image.jpeg" className='w-36'/> | [**CoinMarketCap**](https://coinmarketcap.com/) is a source for token prices and market cap information using the CoinMarketCap API. CoinMarketCap is a popular price-tracking website for crypto assets.                                                                             |
| <img src="/images/923e37de-image.jpeg" className='w-36'/> | [**Cryptorank**](https://cryptorank.io/) provides data aggregation and analytics services. The application tracks crypto assets, prices, and detailed information about cryptocurrencies.                                                                                             |
| <img src="/images/a5abf1d7-image.jpeg" className='w-36'/> | [**Mobula**](https://mobula.io/) is a crypto data aggregator that provides curated blockchain data and industry-leading coverage.                                                                                                                                                     |
| <img src="/images/a4f74a58-image.jpeg" className='w-36'/> | [**CoinCompare**](https://coincompare.eu/) is a source for token prices using the CoinCompare API. CoinCompare is a real-time crypto price tracker and comparator.                                                                                                                    |
| <img src="/images/ccac99c1-image.jpeg" className='w-36'/> | [**Trust Wallet**](https://trustwallet.com/) is a source for token icon information. Trust Wallet is a leading self-custody multi-chain platform, we support millions of assets across 100+ blockchains.                                                                              |
| <img src="/images/0f2fcb78-image.jpeg" className='w-36'/> | [**DeFiLlama**](https://defillama.com/) is a source for TVL information through the API integration. DeFiLlama is a DeFi TVL aggregator providing accurate and transparent data.                                                                                                      |

## Ad Providers

Ad providers can be selected to bring relevant, web3 based ads based on the network where Blockscout is deployed. Ad options are set using [front-end ENVs](https://github.com/blockscout/frontend/blob/main/docs/ENVS.md) during deployment.

|                                                           |                                                                                                                                                                                |
| --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <img src="/images/8b4134d6-image.jpeg" className='w-36'/> | [**Slise**](https://www.slise.xyz/) specializes in web3 ads for users featuring transparent data usage and no tracking. It is the default ad network for hosted chains.        |
| <img src="/images/f0e15980-image.jpeg" className='w-36'/> | [**Coinzilla**](https://coinzilla.com/) is a large ad network for crypto-relevant content and are well-established in the blockchain space.                                    |
| <img src="/images/9ffd0381-image.jpeg" className='w-36'/> | [**Adbutler**](https://www.adbutler.com/) provides ads for many different types of industries and users, and can be a good option for instances that serve diverse user bases. |

================================================
FILE: about/roadmap.mdx
================================================

---

title: "Roadmap"
description: "Upcoming enhancements, features, and strategic plans for Blockscout."
icon: "map"

---

# Roadmap

<Info>
  The Blockscout roadmap is a high-level strategic plan designed to guide research and development. **Target dates and details are reviewed by the team and subject to move, adjust and change as the project evolves**. Note that only completed items (✅ Status: Complete) are considered achieved project milestones.

[_Last update: SEP 2025 | Changelog_](/about/roadmap#change-log)
</Info>

## 🟦 Q3-4 2025

We've updated our roadmap for the remainder of 2025 with a focus on our flagship auto-launch platform Autoscout.

<AccordionGroup>
  <Accordion title="⭐️ Autoscout" description="Includes 2025 & Q 1-2 2026 Roadmap">
    **2025**

    - **Plugin system:** Create basic plugin system for self-deployed chains
    - **User ops plugin**: First plugin launched for user ops
    - **Recurring payments**: Build out recurring payments system for regular users

    **2026**

    **_Q 1-2_**

    - New Plugins:
      - **Admin panel**: Instance can access to admin functionality
      - **Account Features**: Instances can add MyAccount to provide user-centric features such as tags and API key generation
      - **BENS (ens resolution)**: Instances can add support for ENS names.
    - **Automatic scaling**: Will provide real-time scaling as needed to support large spikes or decreases in usage.
    - **DDoS protection**: Improve security and reduce potential slowing from DDoS attacks
    - **Setup wizard** (get setting from RPC URL): Simple setup for new instances
    - **Background RPC validation**: Will improve monitoring and alerts
    - **Password protection**: Instances can protect new instances before they go public.

  </Accordion>
  <Accordion title="⭐️  AI integrations">
    - MCP server integrations, improve MCP service and expand usage
    - Explore basic chat integration with instances
    - Chat integration with DeFi products such as Swap
  </Accordion>
  <Accordion title="⭐️ Universal Bridge Indexer">
    - Index cross-chain bridge transactions
    - Create UI interface for exploration
    - Targeting Gnosis Chain as the first live instance
  </Accordion>
  <Accordion title="⭐️ PRO API">
    - PRO API service with higher limits and additional endpoints
    - Create self-service module
  </Accordion>
  <Accordion title="⭐️ Essential Dapps">
    - Design integrated interface and move current standalone Blockscout DeFi apps (Swap, Revoke) to Essential Dapps within the explorer
    - Add Multisender app to Essential Dapps
  </Accordion>
  <Accordion title="⭐️ Custom Dev">
    - Continued development for customized instances
    - Based on client needs on a chain-by-chain basis
    - Support new and upcoming features on hosted chains
  </Accordion>
  <Accordion title="⭐️ Data Services">
    - Create data service with wide instance coverage.
    - Custom data delivery for a wide range of real-time and historica data.
      - Contract and protocol deployment tracking and ecosystem analysis
      - Cross-chain liquidity movement and large asset flow monitoring
      - Public address labeling and protocol identification
      - Dapp interaction and dapp usage reports
  </Accordion>
  <Accordion title="⭐️ Analytics and Statistics">
    Smart Contract Analytics

    - Provide detailed analytics for smart contract usage and performance

    Advanced EOA (Externally Owned Account) Analytics

    - Offer in-depth analysis of regular user accounts

    Market Data Integration

    - Incorporate relevant market data into the explorer

    Protocol-specific Stats

    - Provide statistics broken down by different protocols

  </Accordion>
  <Accordion title="⭐️ NFT Explorer Features">
    - Display top NFTs
    - Show latest trades, transfers, and mints
    - Integrate with NFT marketplaces and platforms
  </Accordion>
</AccordionGroup>

## 🟦 Q1-2 2025

We accomplished many important updates in the first half of 2025. Any items not completed have been either restructured or moved to Q3-4.

### ✅ Account Abstraction

**Target Date:** Q2 2025

- Support for AA transaction actions: Improved handling of AA-specific transactions
- Public tags for Bundlers, Paymasters, Factories: Better identification of AA-related accounts

### ✅ Advanced Features

**Target Date:** Q2 2025

Includes:

- Multi-chain Search: Allows users to search across multiple blockchain networks simultaneously
- Advanced Filters Enables more detailed and customizable data filtering options
- Export Filter Results to CSV Allows users to download filtered data in CSV format for further analysis
- Validators Page Displays information about validators for Proof-of-Stake chain chains
- Simplified Account Creation Integration with WalletConnect for easier account setup

### ✅ Analytics and Statistics

**Target Date:** Q1 2025

- Customizable Time Views: Daily, weekly, monthly, and yearly data views

### ✅ Defi Integrations

**Target Date:** Q2 2025

- Swap: Token exchange functionality
- Revoke approvals: Manage token approvals

### ✅ Data Availability

**Target Date:** Q2 2025

- Celestia DA for rollups

### ✅ Enhanced Name Service Support

**Target Date:** Q2 2025

- Extend ENS support to Ethereum L2 explorers
- Enable multiple name services on a single chain

### ✅ Token Information Service

**Target Date:** Q2 2025

- Integrate CEX/DEX data: Information from centralized and decentralized exchanges
- Display liquidity pairs data
- Capture token prices from multiple sources for accuracy

## ✅ Previously Completed

###

### ✅ Basic ENS Support

**Target Date:** Q2 2024

**Status**: ✅ Completed

- ✅ Resolving ENS names for addresses and listing names for the address
- ✅ Enabling search by ENS name
- ✅ Search by ENS name

### ✅ Visualizer Service

**Target Date:** Q2 2024

**Status**: ✅ Completed

Visualizer service offering various visualization schemes, such as Sol2UML and transaction graphs for complex blockchain data analysis.

### ✅ Ongoing L2 support

**Target Date:** Q2 2024

**Status**: ✅ Completed

- zkSync Era and zkSync Sepolia Testnet
- Arbitrum

### ✅ Gas Tracker

**Target Date:** Q2 2024

**Status**: ✅ Completed

Users can monitor gas prices and trends to help them make informed decisions about transaction fees and timing.

### ✅ Human Readable Transactions v1

**Target Date:** Q1 2024

**Status**: ✅ Completed

Display complex transactions in an easily understandable format for non-technical users. This includes the ability to automatically decode transaction data, including tokens, contracts, and events.

### ✅ Universal Smart Contract front-end

**Target Date:** Q3 2023

**Status**: ✅ Completed

Improve and simplify the Smart Contract deployment & verification process. Integrate React components to abstract away common on-chain operations.

### ✅ Improved Indexer Performance

**Target Date:** Q2 2023

**Status**: ✅ Completed

Load speed, database optimization & caching, data parsing features to maintain optimal performance. These efforts will continue as additional features are added to BlockScout.

### ✅ Advanced Filter and Sort

**Target Date:** Q2 2023

**Status**: ✅ Completed

Enhance filter and sort options so users can view transaction data in various formats including transaction types, assets & time ranges. Explore ability to save and share custom filter configurations.

### ✅ My Account Improvements

**Target Date:** Q2 2023

**Status**: ✅ Completed

My Account beta is active and will be rolled out on a case-by-base basis, with hosted instances receiving priority. Includes adding the following features:

- Watchlists: Users can create watchlists for specific addresses or contracts, and view all transactions from the watchlists on the main page.
- Enhanced CSV export features
- Smart contract ownership verification
- Airdrop eligibility tool

### ✅ Admin Dashboard

**Target Date:** Q2 2023

**Status**: ✅ Completed

Rust microservice which will provide a comprehensive dashboard for blockchain administrators. Available for hosted versions first.

- Token info
- Public tags
- Real-time network monitoring, chain statistics, user analytics

### ✅ Landing Page

**Target Date:** Q3 2022

**Status**: ✅ Completed

A new landing page is in development for Blockscout to assist new users and developers understand the Blockscout feature set and find information quickly.

### ✅ UI Redesign

**Target Date:** Q3-Q4 2022

**Status**: ✅ v1 Completed see https://eth-goerli.blockscout.com/

A new UI interface is under development to improve data exploration, optimize views, and provide overall better UX for Blockscout users. The UI is being built from the ground up. It will overhaul all aspects of Blockscout engagement, creating a complete all-in-one interface for chain exploration. In addition to a modern design, the upgrade will also improvements to features such as:

- **Search**: Prominent search, mobile upgrades, improved dropdown, full-page results, search control
- **Data Sort/Filtering**: Ability to sort data (ascending & descending by column). Improved pagination and filtering abilities.
- **My Account**: See below for features related to My Account functionality.

### ✅ DApp Marketplace v1

**Target Date:** Q4 2022

**Status**: ✅ v1 Completed

Chain users will be able to access applications and modules directly from Blockscout, vastly improving the overall chain experience. Interoperability, swaps, transactions, and 3rd party project-based apps will be accessible and integrated with the modular interface.

Blockscout will also develop native applications for this marketplace. Several are in active development.

- **Blockscout Swap**: Swap feature using an aggregator under the hood for simple swaps without leaving Blockscout.
- **Blockscout Revoke**: Find contracts/apps you have granted allowances to (the ability to spend tokens on your behalf) and revoke these permissions.
- More TBD

### ✅ My Account Functionality v1

**Target Date:** Q3 2022

**Status**: ✅ Instance deployed on Gnosis Chain. Undergoing improvements.

We will explore adding account features for users looking for explorer personalizations, including alerts and notifications, the ability to watch specific addresses, name and customize data within the dashboard, and other advanced features.

### ✅ Blockscout Rust Microservices v1

**Target Date:** Q3 2022

**Status**: ✅ v1 completed - Smart Contract Verification microservice

New Rust-developed microservices will be enabled on Blockscout to extend functionality and modularity. We are revamping smart contract verification to use a Rust module and working on a smart contract uml visualization module to start.

### ✅ Deployment Improvements

**Target Date:** Q3 2022

**Status**: ✅ Completed, Documentation in progress

BlockScout deployment can be complicated for new users. Deployment improvements within a Docker environment will enable a fast path for easy setup and deployment.

### ✅ Ethereum Mainnet BlockScout Instance

**Target Date:** Q2 2022

**Status**: ✅ Instance deployed, optimizations ongoing.

BlockScout offered prior support for the Ethereum mainnet. This instance was discontinued; however a new instance is now planned to further increase explorer diversity on Ethereum and provide additional transparency for Ethereum users.

### ✅ ERC721 Metadata

**Target Date:** Q4 2019

**Status:** ✅ Complete, ERC721 Metadata storage and display ([Release 2.1.0](https://forum.poa.network/t/blockscout-2-1-0-release/3128)) and verification checks ([Release 2.1.1](https://forum.poa.network/t/blockscout-2-1-1-release/3172)) are implemented.

[ERC-721](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md) non-fungible tokens represent ownership of digital or physical assets. Each token is unique, and may include images and other data which identifies the asset and provides additional information. This might include registration information (for example land, property or art registration), identifying numbers or other data unique to that token. As ERC-721 tokens continue to proliferate, it is important to display the relevant information related to each owned token.

### ✅ Staking DApp Integration

**Target Date:** Q3 2020

**Status:** ✅ Complete Q4 2020

BlockScout will support the new POSDAO staking consensus mechanism through an on-board UI. The initial implementation will support the [xDai Stable Chain](https://xdaichain.com). This will allow users to place stake directly from the interface, monitor validator activity, and participate in consensus on the xDai Chain.

### ✅ Smart Contract Write Functionality

**Target Date:** Q2 - Q3 2020

**Status**: ✅ Complete, Write contract/ write proxy functionalities are implemented ([Release 3.3.0](https://forum.poa.network/t/blockscout-v3-3-0-beta/3558)).

Users can currently verify and read contracts on BlockScout. The next smart contract development phase will allow users to interact with contracts directly through the interface. Verified contract methods will be accessible and users can connect through a web3 wallet (such as MetaMask) to access and execute contract functions.

### ✅ ERC1155 Support

**Target Date:** Q2 2021

**Status**: ✅ Basic Functionality added for xDai chain, additional support in process.

ERC-1155 tokens are increasing in popularity as a way to manage multiple-token types including fungible and non-fungible tokens within a single instance. This feature provides parsing and display of tokens contained within an ERC-1155. Additional functionality such as metadata display is in process.

### ✅ Rollup Support

**Target Date:** Q4 2021

**Status**: ✅ Instances for Optimism and Arbitrum on Gnosis Chain

BlockScout availability and support is available for Optimism and Arbitrum on the Gnosis Chain. Includes tracking for gas price on L1 and the L2 implementations. Currently Optimism is the favored deployment.

- Optimism: https://blockscout.com/xdai/optimism
- Arbitrum: https://blockscout.com/xdai/aox/

### ✅ EIP-1559 Support

**Target Date:** Q3-Q4 2021

**Status**: ✅ Complete

The Gnosis Chain explorer supports EIP-1559 functionality with a stated transaction type (2 for EIP-1559) and includes data reporting of Max Fee per Gas, Max Priority Fee per Gas and Priority Fee / Tip paid for a transaction.

### ✅ Multi-file Contract Source Code Verification

**Target Date:** Q4 2021

**Status:** ✅ Complete

BlockScout supports verification for contracts via multiple methods including Hardhat and the Hardhat and Sourcify plugins. [More information is available here](/devs/verification).

## Change Log

<table border="1">
<thead>
<tr>
<th>Update</th>
<th>Items</th>
</tr>
</thead>

<tbody>
<tr>
<td>30.09.2025</td>

<td>
Updated 2025 with remaining items and moved items from Q1/Q2 to completed or Q3-4 2025 based on status.
<br /><br />
Moved to Q3/Q4

<ul>
<li>Analytics and Statistics</li>
<li>NFT explorer enhancements</li>
</ul>

Completed Items

<ul>
<li>Account Abstraction</li>
<li>Advanced Features</li>
<li>Analytics and Statistics</li>
<li>DeFi Integrations</li>
<li>Data Availability (Celestia Support)</li>
<li>Enhanced ENS Support</li>
<li>Token Info Services</li>

</ul>

</td>

</tr>
<tr>
<td>19.08.2024</td>

<td>
Major update to restructure roadmap for the rest of 2024. Moved completed items from Q1-2 into completed section and adjusted remaining items to fit into targeted areas for the remainder of 2024.\
\
 Removed from Roadmap:

<ul>
<li>New Microservices (folded into existing categories)</li>

<li>CEX/DEX views (deprioritized)</li>

<li>Ongoing Improvements (moved to existing categories)</li>

</ul>

Moved to Completed:

<ul>
<li>L2 Support</li>

<li>Visualizer Service</li>

</ul>

</td>

</tr>

<tr>
<td>29.05.2024</td>

<td>
Minor update: Will be adding a major overhaul in June for Q3-Q4 and will reconfigure, add new items and remove others.\
\
 **Completed:**

<ul>
<li>Gas Tracker</li>

<li>Basic ENS support</li>

</ul>

**Removed:**

<ul>
<li>AWS template</li>

 <li>Multisender native dapp</li>

</ul>

</td>

</tr>

<tr>
<td>03.01.2024</td>

<td>
Update milestones for Q1 2024.\
 Completed:

<ul>
<li>Universal smart contract front-end</li>
<li>Human readable transactions v1</li>

</ul>

</td>

</tr>

<tr>
<td>07.11.2023</td>

<td>
Updated milestones to reflect current quarterly work. A more extensive update with many reworked milestones will be added for 2024.
</td>

</tr>

<tr>
<td>10.08.2023</td>

<td>
Updated Q3 milestones to account for completed items.\
 Completed:

<ul>
<li>Improved indexer performance</li>

 <li>Advanced filter and search</li>

 <li>My Account improvements</li>

 <li>Admin Account</li>

</ul>

</td>

</tr>

<tr>
<td>17.04.2023</td>

<td>
<ul>
<li>Revamp roadmap for 2023 milestones by Q.</li>

 <li>Moved all In-research items to appropriate Q.</li>

<li>
Added:

<ul>
<li>Q2,Q3,Q4 2023 items</li>

</ul>

</li>

<li>
Completed:

<ul>
<li>Landing Page</li>

 <li>React UI v1</li>

 <li>Rust Microservices v1</li>

 <li>DApp Marketplace v1</li>

 <li>My Account v1</li>

</ul>

</li>

</ul>

</td>

</tr>

<tr>
<td>27.07.2022</td>

<td>
<ul>
<li>Updated marketplace to include Blockscout native DApps</li>

 <li>Added Blockscout Microservices</li>

 <li>Added Multi-chain search</li>

 <li>Added personal asset management features</li>

 <li>Added Blockscout ID</li>

 <li>Combined several elements into UI category</li>

 <li>Deployment improvements (Docker image) moved to completed</li>

 <li>Update Research Phase items to 2023</li>

</ul>

</td>

</tr>

<tr>
<td>06.07.2022</td>

<td>
Added:

<ul>
<li>Analytics Dashboards</li>

 <li>UI Overhaul</li>

 <li>Modular Plug-and-Play Library</li>

</ul>

Completed:

<ul>
<li>Ethereum Mainnet Instance</li>

</ul>

</td>

</tr>

<tr>
<td>11.04.2022</td>

<td>
<ul>
<li>Rearranged into Completed and Ongoing Categories</li>

 <li>Updated Ongoing Item dates</li>

 <li>Added UI enhancements</li>
</ul>

Marked as Completed

<ul>
<li>EIP-1559 Support</li>

 <li>Rollup Support</li>

 <li>Multi-file Contract Source Code Verification</li>

</ul>

</td>

</tr>

</tbody>

</table>

================================================
FILE: about/announcements/newsletter-and-blog.mdx
================================================

---

title: "Newsletter & Blog"
icon: "envelope-open-text"

---

The Blockscout Newsletter is sent out bi-monthly. It includes information on updates, new chains, integrations and other related information. If you use the My Account feature on Blockscout, an email newsletter subscription is automatically enabled when you sign up. You can unsubscribe at any time by clicking the unsubscribe link at the bottom of the email.

<Icon icon="flag" iconType="solid" /> You can also [subscribe to receive the newsletter](https://www.blog.blockscout.com/).

<Icon icon="flag" iconType="solid" /> Past newsletters are available on the [Blockscout Blog](https://www.blog.blockscout.com/).

<Frame caption>
  ![Blockscout Newsletter image](/images/82dfdcf6-image.jpeg)
</Frame>

================================================
FILE: about/features/ethereum-bytecode-database-microservice.mdx
================================================

---

title: "Ethereum Bytecode Database Microservice"
description: Database with shared contract information
icon: "database"

---

Blockscout supports multiple chains, and each chain has its own database that stores verified smart-contracts. Because these databases are independent of one another, verified contracts and their method identifiers typically cannot be shared between chains.

For example, if a contract is verified on Ethereum Mainnet, it cannot be accessed on Gnosis Chain even if the creation transaction input is the same.

<Frame caption="">
  <img src="/images/c45f8510-image.jpeg" />
</Frame>

To address this issue, we have implemented a database for verified contract information which can be shared across all supported chains. This database and it's associated functionality has been created as a Blockscout microservice called the **Ethereum Bytecode Database (Blockscout EBD).**

## Initial Planning

Initial plans were to create a distinct service with a database responsible for maintaining verification results. This database could then be shared among all supported chains. The service would track the contract address and the chain where the contract was deployed. The source files would also be stored so they could be extracted for verified contracts. The service would also find and match unverified contracts to their verified counterparts if they already existed in the database.

<Frame caption="">
  <img src="/images/30b39dea-image.svg" />
</Frame>

## Restructuring the Search Process

It is possible to search for similar bytecodes if the bytecodes (or their hashes) are stored in the database along with verification results. The list of already verified bytecodes can then be checked when searching for the source codes of unverified contracts.

However, with this type of search the `chainId` and `contractAddress` arguments are typically required, as source codes for already verified contracts are stored based on the chain and address where these contracts are deployed. This is how most source code databases are designed (e.g., Sourcify, Etherscan, Blockscout).

With this new service, our main goal was not just to return source codes for verified contracts (since that data is already stored and processed internally within Blockscout's main storage), but also to search for source codes for unverified contracts. To do this, we realized we could eliminate `chainId` and `contractAddress` and gain some advantages.

## Solution - Ethereum Bytecode Database (Blockscout EBD)

A solution can be found by mapping source codes directly to bytecodes. In this case, `chainId` and `contractAddress` are not needed, only the `bytecode`_-_`sourceCode` correspondence if required. This is similar to what [4bytes](https://www.4byte.directory/) or [sigEth](https://sig.eth.samczsun.com/) does. However, instead of looking for the function signature based on its identifier, we look for the contracts' source code based on its bytecode.

- **Current Approaches:** Chain → Contract Address → Sources

- **Blockscout Ethereum Bytecode Database:** Bytecode → Sources

## Basics

In the following diagram for the new service, notice that there is no notion of `chainId` and `contractAddress`—only raw bytecodes are important.

### Verification

<Frame caption="">
  <img src="/images/5b27af42-image.jpeg" />
</Frame>

### Bytecode Source Search

The microservice does not care where the contract is deployed (which chain) or even whether a contract with the corresponding bytecode is deployed at all.

<Frame caption="">
  <img src="/images/15196281-image.jpeg" />
</Frame>

## Similar Contracts Search Enhancement

In Blockscout, two contracts share the same source code only if their bytecodes are entirely identical. However, not every part of the bytecode is functional (see [**Sourcify partial vs. full match**](https://docs.sourcify.dev/docs/full-vs-partial-match/)). There may also be a metadata hash, usually located at the end of the creation input or deployed bytecode. The source code can also produce different metadata hashes for inconsequential changes, such as when a new space is appended to the file or the file is renamed. This results in bytecodes with the same EVM-executed portion, but they may not be identified by Blockscout's current similar contracts search algorithm.

As described in [**smart-contract verification**](https://docs.blockscout.com/for-developers/information-and-settings/smart-contract-verification#verification-process), our verification service allows us to split the bytecode into 2 parts, **Main** and **Metadata**. The Ethereum Bytecode Database takes advantage of this and searches for similar bytecodes based only on the **Main** (functionally significant) parts.

## Adding Extractors

Removing the notion of chains and contract addresses is powerful in and of itself. However, the addition of extractors provides the opportunity for an extremely robust database.

<Frame caption="">
  <img src="/images/6335a52d-image.jpeg" />
</Frame>

Extractors can be implemented as separate extensions which can index different explorers and different chains, then automatically submit newly verified bytecodes into the Ethereum Bytecode Database. It can also import contracts verified long ago.

This has the potential rapidly increase the dataset, **allowing the service to collect sources for almost all bytecodes that have been publicly verified**. Every time a new contract is verified on a monitored explorer, the extractor can upload the source code to the Ethereum Bytecode Database\*. _\*This is in the research phase._

In addition, anyone can start the service from scratch and eventually obtain their own repository of verified contracts by running extractors they are interested in. Those who would like to host their own instance can obtain a populated database which can also be updated from other chains in the ecosystem.

## Bytecode DB in Action

In this video we show a simple example where a contract is deployed and verified on Optimism Goerli. The same contract is then deployed to the Base Goerli instance, and the contract is automatically verified using the Blockscout Bytecode Database.

<Frame>
<iframe width="711" height="400" src="https://www.youtube.com/embed/fbMVHp2Jw4c" title="Blockscout Ethereum Bytecode DB example" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</Frame>

## Conclusion

Implemented as a separate service, _Ethereum Bytecode Database_ may become a unique source of verified contracts working with many chains. Furthermore, the addition of extractors allows verified contracts to be combined from an unlimited number of explorers, and gives users the ability to run the service locally using independently-obtained data.

Extractors implemented within a Blockscout private setting also allow for the creation of a unique and useful ecosystem-wide database. This will likely create a data source that will be attractive to different explorers and other data aggregators. We are currently looking into the best way to provide 3rd party access to this dataset, possibly as a paid database or verifier service in the future.

## Implementation Details

### API Integration

<Info>
The swagger definition -[https://app.swaggerhub.com/apis/rimrakhimov/EthereumBytecodeDatabase/v2](https://app.swaggerhub.com/apis/rimrakhimov/EthereumBytecodeDatabase/v2)

</Info>

The service has the same public API as the `smart-contract-verifier` service. If a chain wants to start saving verified bytecodes into a database, the only required change is to point `RUST_VERIFICATION_SERVICE_URL` to the `eth-bytecode-db` service instead of the verifier. The service will proxy all requests to the underlying verifier internally.

### Completed Processes

1. The `Eth-bytecode-db` service is implemented with both contract verification proxy and database search functionality ([https://github.com/blockscout/blockscout-rs/tree/main/eth-bytecode-db](https://github.com/blockscout/blockscout-rs/tree/main/eth-bytecode-db)).

2. All hosted blockscout instances are using `eth-bytecode-db` instead of the original smart-contract-verifier; all newly verified bytecodes and corresponding sources are now stored directly in the database.

3. Search functionality is integrated. ([https://github.com/blockscout/blockscout/pull/7187](https://github.com/blockscout/blockscout/pull/7187)).

4. DB is available on production instances including Ethereum Mainnet, Goerli, Gnosis, Optimism and more.

5. Extractor has been implemented for the "[smart-contract-fiesta](https://huggingface.co/datasets/Zellic/smart-contract-fiesta)" dataset.

Current production database contains >130k source codes, where \~100k have unique main parts.

### Future Plans

1. Implement a Blockscout extractor and import all previously verified contracts from Blockscout instances into the running `eth-bytecode-db` database (should expand the current database up to \~100-150k contracts).

2. Estimate and implement prioritization techniques, so that the service returns potential contracts that are the most probable for the given bytecode first.

3. Create a separate page similar to [https://www.4byte.directory/](https://www.4byte.directory/) which allows users to search for the source code for a given bytecode directly, and submit new contracts into the database (to better understand how the service works and expand our database).

4. Support verification of contracts verified via metadata. Write a Sourcify extractor to import these contracts into our database (should expand the database up to \~400-500k contracts).

================================================
FILE: about/funding/l2-funding-proposal.mdx
================================================

---

title: "L2 Funding Proposal"
description: Proposal for funding to enhance Blockscout for next-generation L2 explorers, including new features, UI, and developer experience.
icon: "layer-group"

---

Blockscout is a leading open-source blockchain explorer supporting over 100 EVM-based chains, including L1s, testnets, and a growing number of L2s. As the ecosystem evolves, L2 projects require advanced features for batch data, L1↔L2 transparency, and custom rollup support. To meet these needs and reach feature parity with closed-source explorers, Blockscout seeks additional grant funding.

## Why Support Blockscout for L2s?

- **Open-source and transparent:** Blockscout is fully open-source, enabling community-driven innovation and transparency.
- **Proven adoption:** Used by Optimism, Arbitrum Nova, Metis, Boba, and many more.
- **Ecosystem growth:** Funding will accelerate development of L2-specific features and UI improvements, benefiting the entire EVM ecosystem.

## Key Needs for L2 Support

### Enhanced L2 Data Views

- Prioritize batch data (Index, L1 Timestamp, Size, L1 tx hash, L1 block number, Batch root)
- Clear L1↔L2 transaction mapping and fraud proof window visibility
- Easy contract verification for rollup/system contracts
- Customizable views for different L2 architectures

### UI & User Experience Upgrades

- Modern, intuitive interface with advanced features
- My Account section with tagging, custom ABIs, and app integrations
- App marketplace and improved onboarding

### Developer Experience Improvements

- Comprehensive documentation and usage examples
- Streamlined deployment and configuration
- Migration of microservices to Rust for performance and maintainability
- Analytics and transparency for L2 transactions and contracts

## Project Timeline

| Month | Focus                                                                      |
| ----- | -------------------------------------------------------------------------- |
| 1     | Resource planning, requirements gathering, L2 data framework               |
| 2     | Custom fields/views, testnet deployments, data indexing                    |
| 3     | UI enhancements, batch data views, data optimization, frontend development |
| 4     | Extend enhancements, account features, contract verification tools         |
| 5     | L2-specific UI, QA, analytics integration                                  |
| 6     | Finalize UI, documentation, rollout, and customization features            |

## Get Involved

Blockscout is already collaborating with leading L2s (Optimism, zkEVM, zkSync) to gather requirements and build the next generation of explorers. Additional funding will accelerate this work and deliver a best-in-class, open-source solution for the entire ecosystem.

**Contact us** to discuss grant opportunities or to support the project.

================================================
FILE: about/funding/l2-funding-proposal/aux-funding-images.mdx
================================================

---

title: "Aux Funding Images"
icon: "images"

---

<Frame caption="Project logos">
  <img src="/images/f1779aa2-image.jpeg" />
</Frame>

<Frame caption="New Images">
  <img src="/images/2d270de4-image.jpeg" />
</Frame>

================================================
FILE: about/partners-and-integrations/raas-providers.mdx
================================================

---

title: "RaaS Providers"
description: Rollup-as-a-Service Providers using Blockscout
icon: "server"

---

<Frame caption="">
  <img src="/images/40618d73-image.jpeg" />
</Frame>

Many Rollup-as-a-Service providers are using Blockscout as the default explorer for their instances. Once deployed, Blockscout can provide explorer support services when rollups want to customize or augment their explorers.

Each RaaS has their own processes and specializations including zkRollups or opRollups optimized for different environments. If you have questions about which RaaS to choose, or need customizations for your RaaS Blockscout instance, [please contact us and we can direct you to the best option for your chain](https://www.blockscout.com/#contact-us).

|                                                           |                                                                                                                                                                                                                                                                                                          |
| --------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="/images/b20ef567-image.jpeg" className='w-36'/> | [**Gelato**](https://www.gelato.network/): Gelato's zkRollup as a Service Platform is fully-serviced, leverages OP, Arbitrum Orbit and Polygon zkEVM, and provides High TPS, Low Fees, and Ethereum's Security.                                                                                          |
| <img src="/images/eaa9f019-image.jpeg" className='w-36'/> | [**Alchemy**](https://www.alchemy.com/): Alchemy is a proven web3 infrastructure provider now offering best-in-class RaaS services for L2s and L3s.                                                                                                                                                      |
| <img src="/images/ef78bc32-image.jpeg" className='w-36'/> | [**QuickNode**](https://www.quicknode.com/rollup): QuickNode offers enterprise-grade rollups backed by industry-leading infrastructure. Supporting Optimism Superchains, Arbitrum Orbit Chains, and ZKsync Elastic Chains. [Docs](https://www.quicknode.com/docs/rollups/intro)                          |
| <img src="/images/40c7b6fe-image.jpeg" className='w-36'/> | [**Conduit**](https://conduit.xyz/): Conduit's RaaS platform allows teams to scale their applications quickly and easily using production-grade OP Stack or Arbitrum Orbit rollups.                                                                                                                      |
| <img src="/images/820539e7-image.jpeg" className='w-36'/> | [**Zeeve**](https://www.zeeve.io/): Low-code, scalable, enterprise-grade infrastructure for ZK Rollups and OP Stack Rollups.                                                                                                                                                                             |
| <img src="/images/01792cad-image.jpeg" className='w-36'/> | [**Caldera**](https://caldera.xyz/): Caldera makes it easy to launch high-performance, customizable, and application-specific Arbitrum Orbit and OP Stack rollups.                                                                                                                                       |
| <img src="/images/1838dd21-image.jpeg" className='w-36'/> | [**Aurora Cloud**](https://auroracloud.dev/): Aurora Virtual Chains are EVM compatible blockchains inheriting the full security, scalability and infrastructure of Near Protocol                                                                                                                         |
| <img src="/images/379068e2-image.jpeg" className='w-36'/> | [**Lumoz**](https://lumoz.org/?ref=blog.blockscout.com): Lumoz offers an easy-to-use, universal launchbase where anyone can quickly create a zk-rollup with several different options. [Learn More](https://www.blog.blockscout.com/lumoz-and-blockscout-collaborate-to-elevate-the-zk-raas-experience/) |
| <img src="/images/e5569b32-image.jpeg" className='w-36'/> | [**Presto**](https://gateway.fm/presto/?ref=blog.blockscout.com): Presto provides zk-Validium and zk-Rollups with instant deployment and a full suite of tools. Settle on Eth or Gnosis Chain. [Learn More](https://www.blog.blockscout.com/blockscout-presto-raas/)                                     |
| <img src="/images/b0e15ee7-image.jpeg" className='w-36'/> | [**Altlayer**](https://altlayer.io/raas): Altlayer offers a versatile rollup stack including Arbitrum Orbit, OP stack, Polygon ZKEVM and StarkWare, and support for various DA layers such as EigenLayer and Celestia.                                                                                   |
| <img src="/images/474c7537-image.jpeg" className='w-36'/> | [**Chainstack**](< https://chainstack.com/>): Chainstack provides infrastructure services including rollup deployment.                                                                                                                                                                                   |
| <img src="/images/1821e42a-image.jpeg" className='w-36'/> | [**Snapchain:**](https://www.snapchain.dev/) Snapchain specializes in zkRollups for scaling on-chain games and DeFi applications cheaply and securely.                                                                                                                                                   |
| <img src="/images/f8f877d0-image.jpeg" className='w-36'/> | [**Dymension**](https://dymension.xyz/): Dymension offers app-chains called RollApps, designed for application-specific speed and efficiency.                                                                                                                                                            |
| <img src="/images/3c57b7b6-image.jpeg" className='w-36'/> | [**Vistara**:](https://www.vistara.dev/) Vistara provides a one-click rollup deployment framework for designing and managing scalable infrastructure.                                                                                                                                                    |

================================================
FILE: about/partners-and-integrations/vera-verifier-alliance.mdx
================================================

---

title: "Vera: Verifier Alliance"
sidebarTitle: "Verifier Alliance"
icon: "users"

---

<Frame caption="">
  <img src="/images/af335a6a-image.jpeg" />
</Frame>

The [Verifier Alliance](https://verifieralliance.org/) is an ecosystem collective aiming for easy, unified, and open access to the source-code of EVM smart contracts. It is made up of projects across the ecosystem dedicated to making source code verification information freely available for all. Blockscout is a founding member of the collective and major contributor to the Vera Database.

- [Blockscout Vera app](https://vera.blockscout.com/): Verify and Publish contracts to supported networks.

- [Add your network to the Vera DB](/about/partners-and-integrations/vera-verifier-alliance/adding-your-chain-to-the-vera-database)

- [Verify contracts programmatically via the API](/about/partners-and-integrations/vera-verifier-alliance/programmatic-verification-via-the-api)

================================================
FILE: about/partners-and-integrations/vera-verifier-alliance/adding-your-chain-to-the-vera-database.mdx
================================================

---

title: "Adding your chain to the Vera database"
icon: "plus-circle"

---

The Vera application does not send verification requests directly to your instance, rather it stores the contract in the Verifier Alliance DB for your chain, then asks your instance to import contract details from that shared DB. The `eth-bytecode-db` service is responsible for retrieving the contract details and for contract verification.

## Add your chain

1. Set the correct `CHAIN_ID` value and check you are using the Blockscout hosted `eth-bytecode-db` service. To do this, specify the following ENV variables in your Blockscout instance:

   ```javascript
   CHAIN_ID={chain_id}
   MICROSERVICE_SC_VERIFIER_ENABLED=true
   MICROSERVICE_SC_VERIFIER_URL=https://eth-bytecode-db.services.blockscout.com/
   MICROSERVICE_SC_VERIFIER_TYPE=eth_bytecode_db
   ```

   The `eth-bytecode-db` has read access to the Verifier Alliance database and can retrieve stored data.

2. Generate an API key consisting of letters and numbers and set it as the `API_SENSITIVE_ENDPOINTS_KEY` environment variable. If needed, Blockscout can generate and share it with you. This allows the Vera application service to trigger the lookup for verified contracts. Contracts are not verified directly when stored in the Vera database, so the instance must retrieve them for verification. Generally, the instance performs this retrieval on-demand when someone accesses the contract page. This process does not require any special access rights but has a timeout to prevent abuse. The `API_SENSITIVE_ENDPOINTS_KEY` allows the use of a special `/api/v2/import/smart-contracts/{address}` endpoint, bypassing the timeout limitation. The Vera application service uses this private endpoint to enforce the contract lookup on the instance. If not installed, the contract will remain unverified from the instance's point of view and will be verified later only when someone accesses the contract page.

3. Share the following values with Blockscout to add the chain to the Vera application (if we don't already have a shared group, [contact an admin through Discord and let them know you want to add a chain to VERA)](https://discord.gg/blockscout).

   a. Network name (e.g., Eth Mainnet)

   b. Blockscout URL (e.g., [https://eth.blockscout.com/](https://eth.blockscout.com/))

   c. `API_SENSITIVE_ENDPOINTS_KEY`

## Current list of supported chains

The following request returns the list of Vera supported chains.

`GET http://proxy-verifier.services.blockscout.com/api/v1/chains`

```json
// Response
{
  "chains": [
    {
      "id": "string",
      "name": "string",
      "iconUrl": "string"
    }
  ]
}
```

================================================
FILE: about/partners-and-integrations/vera-verifier-alliance/programmatic-verification-via-the-api.mdx
================================================

---

title: "Programmatic verification via the API"
icon: "terminal"

---

The [Vera application](https://vera.blockscout.com/) uses a proxy-verifier service as an underlying backend. This service retrieves contract details for verification and sends them to the Ethereum bytecode database, which then writes them to the Verifier Alliance (Vera) database if verification succeeds.

The API provided by the proxy-verifier can be used to verify smart contracts. All endpoints are synchronous, meaning they wait for the operation to complete before returning any result.

<Info>
All endpoints were originally designed for use by a frontend application. Currently there are no special endpoints for verification tools, but these may be developed in the future.

</Info>

## Workflow

There are 2 ways to verify Solidity and Vyper contracts using the service.

1. Providing a standard JSON input. This option is preferred, and it is recommended for use by automatic verification scripts.

2. Explicitly providing multiple files (multi-part).

<Check>
Swagger documentation: [https://blockscout.github.io/swaggers/services/proxy-verifier/index.html#/](https://blockscout.github.io/swaggers/services/proxy-verifier/index.html#/)

</Check>

## Standard JSON

Solidity: `POST` `https://blockscout.github.io/api/v1/solidity/sources:verify-standard-json`

Vyper: `POST` `https://blockscout.github.io/api/v1/vyper/sources:verify-standard-json`

Both **Solidity** and **Vyper** have the same standard JSON verification request and response structures.

**Request**

```json
{
  "contracts": [
    {
      "chainId": "string",
      "address": "string"
    }
  ],
  "compiler": "string",
  "input": "string"
}
```

| Name      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| contracts | List of contracts to be verified. For each contract specify chainId and address.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| chainId   | Numeric ID of chain<br />List of supported chain IDs is available via:<br />`GET` `https://proxy-verifier.services.blockscout.com/api/v1/chains`<br />[More info](/about/partners-and-integrations/vera-verifier-alliance/programmatic-verification-via-the-api#list-of-supported-chains)                                                                                                                                                                                                                                                                                                                                                      |
| address   | 0x address of the contract to be verified                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| compiler  | Compiler version. This can be retrieved via:<br />Solidity:`GET` `https://proxy-verifier.services.blockscout.com/api/v1/solidity/compilers`<br />Vyper: `GET` `https://proxy-verifier.services.blockscout.com/api/v1/vyper/compilers`<br/>Only one compiler version can be specified during verification. `EVMVersions` is only used for [multi-part verification](/about/partners-and-integrations/vera-verifier-alliance/programmatic-verification-via-the-api#multi-part-verification).<br />[More info](/about/partners-and-integrations/vera-verifier-alliance/programmatic-verification-via-the-api#list-of-supported-compiler-versions) |
| input     | Standard JSON input encoded as a string - More info available here: [https://docs.soliditylang.org/en/latest/using-the-compiler.html#input-description](https://docs.soliditylang.org/en/latest/using-the-compiler.html#input-description)                                                                                                                                                                                                                                                                                                                                                                                                     |

### **Response**

<Tabs>
<Tab title="200">
```json
// Response (only a single response is returned, the other two will not be included)
  "contractValidationResults": {
    "items": [
      {
        "message": "string",
        "status": "VALID/INVALID/INTERNAL_ERROR"
      }
    ]
  },
  "compilationFailure": {
    "message": "string"
  },
  "contractVerificationResults": {
    "items": [
      {
        "message": "string",
        "status": "PARTIALLY_VERIFIED/FULLY_VERIFIED/FAILURE/INTERNAL_ERROR"
      }
    ]
  }
}
```
</Tab>
<Tab title="400">
```json
{
  "error": "BAD REQUEST"
}
```
</Tab>
</Tabs>

### **Success Response Outcomes**

A successful response has 3 different outcomes; one is always returned:

- `contractValidationResults` - indicates that some (at least one) of the contracts do not support verification. This may mean that the address is not a contract, or that the contract at the given address self-destructed. For each provided contract, the corresponding `VALID / INVALID` statuses with descriptions are returned in the same order the contracts were provided.

- `compilationFailure` - returned when the given source inputs cannot be compiled. This failure is ubiquitous and is not related to any particular provided contract. This means that the user provided invalid contract details during verification.

- `contractVerificationResults` - indicates that all provided contracts are valid and verification requests for each of them have been sent to the `eth-bytecode-db` service. The verification may result in partial or full matches, or verification failure if the contract cannot be verified with the provided source details. The results are returned in the same order as the provided contracts.

<Tabs>
<Tab title="contractValidationResults">
```json
{
    "contractValidationResults": {
        "items": [
            {
                "message": "Ok",
                "status": "VALID"
            },
            {
                "message": "Address is not a smart-contract",
                "status": "INVALID"
            },
            {
                "message": "Smart-contract was self-destructed",
                "status": "INVALID"
            }
        ]
    }
}
```
</Tab>
<Tab title="compilationFailure">
```json
{
    "compilationFailure": {
        "message": "Compilation error: [\"No input sources specified.\"]"
    }
}

// Another example
{
"compilationFailure": {
"message": "content is not a valid standard json: missing field `optimizer` at line 1 column 54"
}
}

````
</Tab>
<Tab title="contractVerificationResults">
```json
{
    "contractVerificationResults": {
        "items": [
            {
                "message": "https://eth-sepolia.blockscout.com/address/0x5ad88296ac87a138100e8793722a021f32e212d9",
                "status": "PARTIALLY_VERIFIED"
            },
            {
                "message": "No contract could be verified with provided data",
                "status": "FAILURE"
            }
        ]
    }
}
````

</Tab>
</Tabs>

## Multi-part verification

Multi-part verification accepts source files explicitly along with some (the most common) configuration options. These options are limited, and in general, the standard JSON option is preferred.

**Solidity**

`POST` `https://blockscout.github.io/api/v1/solidity/sources:verify-multi-part`

```json
{
  "contracts": [
    {
      "chainId": "string",
      "address": "string"
    }
  ],
  "compiler": "string",
  "evmVersion": "string",
  "optimizationRuns": 0,
  "sourceFiles": {
    "filePath1": "string", // content of the file
    "filePath2": "string"
  },
  "libraries": {
    "libName1": "string", // 20 bytes hex encoded address
    "libName2": "string"
  }
}
```

`compiler` and `evmVersion` must be valid and chosen from the[list of supported compilers and EVM versions](/about/partners-and-integrations/vera-verifier-alliance/programmatic-verification-via-the-api#list-of-supported-compiler-versions). Otherwise, a 400 BAD REQUEST error will be returned.

The `optimizationRuns` option, if omitted, corresponds to the optimizer with `enabled: false` setup. If present, it should be a correct u32 value and result in `runs: {optimizationRuns}` setup with `enabled: true`.

`sourceFiles` is a mapping from file paths to corresponding contents.

`libraries` is a mapping from library names to their hex-encoded addresses.

**Vyper**

`POST` `https://blockscout.github.io/api/v1/vyper/sources:verify-multi-part`

```json
{
  "contracts": [
    {
      "chainId": "string",
      "address": "string"
    }
  ],
  "compiler": "string",
  "evmVersion": "string",
  "sourceFiles": {
    "additionalProp1": "string",
    "additionalProp2": "string",
    "additionalProp3": "string"
  },
  "interfaces": {
    "additionalProp1": "string",
    "additionalProp2": "string",
    "additionalProp3": "string"
  }
}
```

`compiler` and `evmVersion` must be valid and chosen from the [list of supported compilers and EVM versions](/about/partners-and-integrations/vera-verifier-alliance/programmatic-verification-via-the-api#list-of-supported-compiler-versions). Otherwise, a 400 BAD REQUEST error will be returned.

`sourceFiles` is a mapping from file paths that should be specified inside the `sources` standard JSON option to corresponding contents.

`interfaces` is a mapping from file paths that should be specified inside the `interfaces` standard JSON option to corresponding contents.

## Additional Info

### List of supported chains

`GET` `http://proxy-verifier.services.blockscout.com/api/v1/chains`

```json
// Response
{
  "chains": [
    {
      "id": "string",
      "name": "string",
      "iconUrl": "string"
    }
  ]
}
```

Returns the list of supported chains with corresponding details. For verification purposes, only the `id` is important. These are the chain IDs supported by the service and allowed to be used during contract verification.

### List of supported compiler versions

`GET` `https://proxy-verifier.services.blockscout.com/api/v1/solidity/compilers`

`GET` `https://proxy-verifier.services.blockscout.com/api/v1/vyper/compilers`

Returns the list of supported compiler and corresponding EVM versions. Only one of these compiler and EVM (if the multi-part option is used) versions are allowed to be specified during contract verification.

```json
{
  "compilers": [
    {
      "version": "string",
      "evmVersions": ["string"]
    }
  ]
}
```

================================================
FILE: config/vocabularies/Mintlify/accept.txt
================================================
Mintlify
mintlify
VSCode
openapi
OpenAPI
Github
APIs

repo
npm
dev

Lorem
ipsum
impsum
amet

const
myName
myObject
bearerAuth
favicon
topbar
url
borderRadius
args
modeToggle
ModeToggle
isHidden
autoplay

_italic_
Strikethrough
Blockquotes
Blockquote
Singleline
Multiline

onboarding

async
await
boolean
enum
func
impl
init
instanceof
typeof
params
stdin
stdout
stderr
stdout
stdin
var
const
let
null
undefined
struct
bool

cors
csrf
env
xhr
xhr2
jwt
oauth
websocket
localhost
middleware
runtime
webhook
stdin
stdout

json
yaml
yml
md
txt
tsx
jsx
css
scss
html
png
jpg
svg

cdn
cli
css
dom
dto
env
git
gui
http
https
ide
jvm
mvc
orm
rpc
sdk
sql
ssh
ssl
tcp
tls
uri
url
ux
ui

nodejs
npm
yarn
pnpm
eslint
pytest
golang
rustc
kubectl
mongo
postgres
redis

JavaScript
TypeScript
Python
Ruby
Rust
Go
Golang
Java
Kotlin
Swift
Node.js
NodeJS
Deno

React
Vue
Angular
Next.js
Nuxt
Express
Django
Flask
Spring
Laravel
Redux
Vuex
TensorFlow
PostgreSQL
MongoDB
Redis
PNPM

Docker
Kubernetes
AWS
Azure
GCP
Terraform
Jenkins
CircleCI
GitLab
Heroku

Git
git
GitHub
GitLab
Bitbucket
VSCode
Visual Studio Code
IntelliJ
WebStorm
ESLint
eslint
Prettier
prettier
Webpack
webpack
Vite
vite
Babel
babel
Jest
jest
Mocha
Cypress
Postman

HTTP
HTTPS
OAuth
JWT
GraphQL
REST
WebSocket
TCP/IP

NPM
Yarn
PNPM
Pip
PIP
Cargo
RubyGems

Swagger
OpenAPI
Markdown
MDX
Storybook
TypeDoc
JSDoc

MySQL
PostgreSQL
MongoDB
Redis
Elasticsearch
DynamoDB

Linux
Unix
macOS
iOS

Firefox
Chromium
WebKit

config
ctx
desc
dir
elem
err
len
msg
num
obj
prev
proc
ptr
req
res
str
tmp
val
vars

todo
href
lang
nav
prev
next
toc

Aave
address_coin_balances
address_current_token_balances
address_names
address_token_balances
Airtable
Ansible
api
Arbitrum
arbitrum_batches_to_da_blobs
arbitrum_da_multi_purpose
asc
Astar
backfiller
backfilling
backoff
Binance
Blackfort
block_rewards
block_second_degree_relations
blockchain
blockchains
blockscout
btc_value
byzantium
catchup
Celestia
Celo
celo_election_rewards
celo_epoch_rewards
celo_epoch_validator_group_votes
celo_pending_epoch_block_operations
Chainscout
checksummed
Coingecko
coinmarketcap
constantinople
contract_methods
cooldown
Cryptorank
dapp
DApp
Datadog
Dencun
denormalization
denormalize
displayment
Ecto
emission_rewards
ENVs
erlang
eth_blockNumber
eth_getLogs
eth_subscribe
ethereum
Filecoin
filecoin_pending_address_operations
final_batch_number
geth
getters
Gwei
gzip
hardfork
hostname
inis
internal_transactions
interop
IPs
js
json_rpc
mainnet
market_history
message_hash
Mixpanel
Mobula
multichain
Multichain
namespace
nft
nft_media_handler
omni
op_deposits
op_dispute_games
op_frame_sequence_blobs
op_frame_sequences
op_interop_messages
op_output_roots
op_transaction_batches
op_withdrawal_events
op_withdrawals
otp
param
pending_block_operations
polygon_edge_deposit_executes
polygon_edge_deposits
polygon_edge_withdrawal_exits
polygon_edge_withdrawals
precompiled
precompiles
proposed_by_validator_index
realtime
refetch
refetching
reindex
reindexed
reindexing
remasc
rollup
Rollup
rollups
safelow
scroll_batch_bundles
scroll_batches
scroll_bridge
scrollable
Sendgrid
Sepolia
Shibarium
shibarium_bridge
Sokol
Solidityscan
Sourcify
spuriousDragon
stablecoins
staking_pools
staking_pools_delegators
subnetwork
subquery
tangerineWhistle
test_net
testnet
testnets
token_transfers
token_type
tokenId
transaction_actions
transaction_forks
ttl
tx
tx_index
txs
unindexed
Uniswap
validator
validators
Vyper
watchlist
webapp
wobserver
xDai
Xname
zilliqa_aggregate_quorum_certificates
zilliqa_nested_quorum_certificates
zilliqa_quorum_certificates
zkevm_bridge
zkevm_transaction_batches
zkSync
zksync_batch_blocks
zksync_batch_transactions
zksync_lifecycle_transactions
zksync_transaction_batches

================================================
FILE: devs/apis-redirect.mdx
================================================

---

title: Blockscout APIs
url: /devs/apis
icon: "network-wired"

---

================================================
FILE: devs/apis.mdx
================================================

---

title: "Blockscout APIs"
sidebarTitle: "Overview"
description: "How to use Blockscout APIs"

---

## Blockscout API Usage

API information can be accessed from the Blockscout main menu, footer or header depending on the instance.

Blockscout supports several methods:

1. [**REST API**](/devs/apis/rest): API that serves the UI for Blockscout.
2. [**RPC API**](/devs/apis/rpc): provided for developers transitioning applications from Etherscan to Blockscout. Supports GET and POST requests, simply replace Etherscan url with Blockscout url to use the RPC.
3. [**Eth RPC API**](/devs/apis/rpc/eth-rpc): Supports the most popular [JSON RPC methods](https://ethereum.github.io/execution-apis/api-documentation/).
4. [**Graphiql**](https://github.com/graphql/graphiql): An IDE for exploring GraphQL.

<Info>
  Blockscout provides swagger documentation for various API services here: https://blockscout.github.io/swaggers/
</Info>

<Frame caption="API access in new instance">
  ![](/images/f076d763-image.jpeg)
</Frame>

## API Keys

API Keys are not needed by default. Blockscout instances have a standard global request setting of 10/requests per second. However, My Account users can add up to 3 API keys to ensure 10 request/second limits per account.

- More info on [My Account and adding API Keys](/using-blockscout/my-account/api-keys)
- More info on [API Requests and Limits](/devs/apis/requests-and-limits)

## Blockscout Internal Documentation

To view Modules and API Reference documentation:

1. Generate documentation.

   `mix docs`

2. View the generated docs.

   `open doc/index.html`

================================================
FILE: devs/blockscout-sdk.mdx
================================================

---

title: "Blockscout SDK"
icon: "cube"

---

<Info>
Attention ETHGlobal Hackathon Participants. We have a $3000 Bounty available for best SDK Usage (1 $2000 prize and 1 $1000 prize). Add the Blockscout SDK into your app to provide interactivity and instant explorer feedback to your users.

Note: The Blockscout SDK is currently in beta release. Please report any issues on the [Blockscout Discord](https://discord.gg/blockscout).

</Info>

## Overview

The Blockscout App SDK is a React toolkit designed to integrate Blockscout transaction notifications and transaction history into your decentralized applications (dApps). It provides an easy-to-use interface for displaying transaction status updates and viewing transaction history with real-time updates and mobile-responsive design.

<Check>
* Repo: [https://github.com/blockscout/app-sdk](https://github.com/blockscout/app-sdk)

- NPM Package [https://www.npmjs.com/package/@blockscout/app-sdk](<https://www.npmjs.com/package/@blockscout/app-sdk >)

</Check>

### Key Features

- **Transaction Toast Notifications** - Real-time transaction status updates with pending, success, and error states

- **Transaction History Popup** - View recent transactions for specific addresses or entire chains

- **Transaction Interpretation** - Detailed transaction summaries and interpretations

- **Multi-chain Support** - Compatible with any blockchain that has a Blockscout explorer instance

- **Mobile-responsive Design** - Optimized for both desktop and mobile experiences

### Installation

Install the SDK using npm or yarn:

```sh
npm install @blockscout/app-sdk
# or
yarn add @blockscout/app-sdk
```

### Transaction Toast Notifications

The transaction toast feature provides real-time notifications for transaction status updates, showing pending, success, and error states with detailed transaction information.

#### Setup

Wrap your application with the `NotificationProvider`:

```javascript
import { NotificationProvider } from "@blockscout/app-sdk";

function App() {
  return (
    <NotificationProvider>
      <YourApp />
    </NotificationProvider>
  );
}
```

#### Usage

Use the `useNotification` hook to display transaction toasts:

```javascript
import { useNotification } from "@blockscout/app-sdk";

function YourComponent() {
  const { openTxToast } = useNotification();

  const handleTransaction = async (txHash) => {
    try {
      // Your transaction logic here
      await sendTransaction();

      // Show transaction toast
      openTxToast("1", txHash); // '1' is the chain ID for Ethereum mainnet
    } catch (error) {
      console.error("Transaction failed:", error);
    }
  };

  return (
    <button onClick={() => handleTransaction("0x123...")}>
      Send Transaction
    </button>
  );
}
```

#### Toast Features

- Real-time status updates (pending, success, error)

- Transaction interpretation and summaries

- Links to block explorer

- Automatic status polling

- Error handling with revert reasons

### Transaction History Popup

The transaction history popup allows users to view recent transactions for a specific address or all transactions on a chain.

#### Setup

Wrap your application with the `TransactionPopupProvider`:

```javascript
import { TransactionPopupProvider } from "@blockscout/app-sdk";

function App() {
  return (
    <TransactionPopupProvider>
      <YourApp />
    </TransactionPopupProvider>
  );
}
```

#### Usage

Use the `useTransactionPopup` hook to open transaction history:

```javascript
import { useTransactionPopup } from "@blockscout/app-sdk";

function YourComponent() {
  const { openPopup } = useTransactionPopup();

  // Show transactions for a specific address
  const showAddressTransactions = () => {
    openPopup({
      chainId: "1", // Ethereum mainnet
      address: "0x123...", // Optional: specific address
    });
  };

  // Show all transactions for a chain
  const showAllTransactions = () => {
    openPopup({
      chainId: "1", // Ethereum mainnet
    });
  };

  return (
    <div>
      <button onClick={showAddressTransactions}>
        View Address Transactions
      </button>
      <button onClick={showAllTransactions}>View All Transactions</button>
    </div>
  );
}
```

#### Popup Features

- View recent transactions

- Filter by address

- Transaction status indicators

- Transaction interpretation

- Links to block explorer

- Mobile-responsive design

- Loading states and error handling

### Supported Chains

The SDK is compatible with any blockchain that has a Blockscout explorer instance with API v2 support.

- Chains are listed in [Chainscout](https://chains.blockscout.com/).

- Chain IDs can be retrieved from [https://github.com/blockscout/chainscout/blob/main/data/chains.json](https://github.com/blockscout/chainscout/blob/main/data/chains.json)

- To verify if your target chain ID is supported, visit the [compatibility checker](https://sdk-compatibility.blockscout.com/).

#### Common Supported Chain IDs

- `1` - Ethereum Mainnet

- `137` - Polygon Mainnet

- `42161` - Arbitrum One

- `10` - Optimism

### API Reference

#### useNotification Hook

```js
const { openTxToast } = useNotification();

// Open a transaction toast
openTxToast(chainId: string, hash: string): Promise<void>
```

#### useTransactionPopup Hook

```js
const { openPopup } = useTransactionPopup();

// Open transaction popup
openPopup(options: {
  chainId: string;
  address?: string;
}): void
```

### Complete Integration Example

Here's a complete example showing how to integrate both features:

```javascript
import React from "react";
import {
  NotificationProvider,
  TransactionPopupProvider,
  useNotification,
  useTransactionPopup,
} from "@blockscout/app-sdk";

function TransactionComponent() {
  const { openTxToast } = useNotification();
  const { openPopup } = useTransactionPopup();

  const sendTransaction = async () => {
    const txHash = "0x123..."; // Your transaction hash
    await openTxToast("1", txHash);
  };

  const viewHistory = () => {
    openPopup({
      chainId: "1",
      address: "0x456...", // Optional
    });
  };

  return (
    <div>
      <button onClick={sendTransaction}>Send Transaction</button>
      <button onClick={viewHistory}>View Transaction History</button>
    </div>
  );
}

function App() {
  return (
    <NotificationProvider>
      <TransactionPopupProvider>
        <TransactionComponent />
      </TransactionPopupProvider>
    </NotificationProvider>
  );
}

export default App;
```

================================================
FILE: devs/chainscout-chains-list.mdx
================================================

---

title: "Chainscout Chains List"
description: List of EVM networks supported by Blockscout
icon: "list"

---

<Info>
Chainscout is currently in Beta. Visit a live instance at [https://chains.blockscout.com/](https://chains.blockscout.com/)

</Info>

- Chainscout includes chain ids and other chain information formatted as a JSON file. Add your own chain details through a pull request.

- Visit the repository to learn more: [https://github.com/blockscout/chainscout](https://github.com/blockscout/chainscout)

- Once all chains have been added, Chainscout will replace the current Blockscout chains and projects page located at [https://www.blockscout.com/chains-and-projects](https://www.blockscout.com/chains-and-projects).

================================================
FILE: devs/for-web3-developers.mdx
================================================

---

title: "For Web3 Developers"
icon: "user-astronaut"

---

<Info>
Attention ETHGlobal hacker: We have 20,000 in bounties available for Blockscout including

1. Best Use of Blockscout: $6K - See the categories below for how to integrate Blockscout into your application using our APIs or modify Blockscout itself by adding new frontend features or stats to the interface.

2. Best Use of Blockscout SDK: $3K - [See the SDK page](/devs/blockscout-sdk)

3. Best Merits (Points) Integration: $1K [See the Integrate Merits Page](/devs/integrate-merits)

4. Blockscout Pool Prize: $10K - Use Blockscout in any capacity (change links to Blockscout, verify your contracts, ANYTHING BLOCKSCOUT - the show in your presentation - and you will share in the pool prize. Entrants in other Best bounties are also entered into the pool prize)

Questions or Issues - contact us on the hackathon discord [https://ethglobal.com/discord](https://ethglobal.com/discord) in the #partner-blockscout channel

</Info>

👋 Welcome Web3 Developers and hackathon participants! Blockscout is built for you and optimized for use in web3 applications.

See the categories below for more information.

<CardGroup cols={2}>
<Card href="/devs/apis">
<img src="/images/aa1ec972-image.jpeg" />

Blockscout APIs
</Card>
<Card href="/devs/verification">
<img src="/images/8cfe95f8-image.jpeg" />

Smart Contract Verification Tools and Resources
</Card>
<Card href="/devs/replace-links">
<img src="/images/e0ca95fe-image.jpeg" />

Pointing links to Blockscout / Replacing Existing Links
</Card>
<Card href="/devs/blockscout-sdk">
<img src="/images/cadc8204-image.jpeg" />
Blockscout SDK
</Card>
<Card href="/devs/integrate-merits">
<img src="/images/30262c94-image.jpeg" />

Integrate Blockscout Merits
</Card>
<Card href="/using-blockscout/autoscout">
<img src="/images/a850d944-image.jpeg" />

Autoscout 5 minute cloud deployment wizard
</Card>
<Card href="/devs/chainscout-chains-list">
<img src="/images/fdbd8d50-image.jpeg" />

Chainscout EVM chains list
</Card>
</CardGroup>

### Additional Resources

🏃🏻♂️For details on developing on the Blockscout platform, advanced setup, ENVs, microservices like ENS, and Blockscout deployment please see the [Blockscout Setup](/setup/information-and-settings)section.

❔See the [Common Developer FAQs](/faqs/developer-faqs) for questions related to Blockscout development.

🙋🏽♀️ [Join our Discord](https://discord.gg/blockscout) for technical questions and support.

================================================
FILE: devs/integrate-merits.mdx
================================================

---

## title: "Integrate Merits"

<Info>
  Attention ETHGlobal Hackathon Participants. We have a \$1000 Bounty available for best integration of Merits. The basic requirement is to incorporate Merits (Blockscout Points) into your application in some way. Users can earn Merits through different activities in your app and you can distribute them via the API. Below you will find more info on the program and the API for checking user Merits, distribution, and login processes.
</Info>

---

### What are Blockscout Merits?

Merits are digital rewards collected by interacting with Blockscout and Blockscout-related apps and by participating in various activities (like contests, X participation, telegram participation, app participation and more). Merits are chain agnostic and can be incorporated into any application. For more details see the [Merits section of the docs](/using-blockscout/merits).

### Using Merits as an activity incentive

Merits are used to incentivize different activities within the Blockscout universe. For example:

- **Blockscout explorer basics:** Earn Merits by signing up for the program. Once you are signed up, you can earn additional Merits by completing a daily claim. You can also share your referral code and earn Merits when new users sign up with that code.
- **Telegram mini app.** The telegram Blockscout Merits Bot allows for direct communication with subscribers. Users who download the bot receive extra Merits -\> https://t.me/blockscout_merits_bot
- **Swapscout swapping app**. Merits are incorporated in the app so that users can view their balance and earn Merits for their swaps. https://swap.blockscout.com/. **This is a good example of an external app that incorporates Merits.**
- **Revokescout app.** Merits are used to incentivize users but there is no sign in or interface. We simply check addresses that use the application and distribute Merits to those addresses.
- **Blockscout campaigns**. Participants in time-gated campaigns such as rating Dapps or Twitter(X) contests receive additional Merits. We collect the Ethereum addresses of winners and distribute Merits manually.
- **Partner campaigns**. Merits are allocated to users of other protocols as an additional incentive for use. Partners provide us with a list of addresses and tasks they completed and we distribute accordingly.

### Integrating Test Merits into your application

Merits can be integrated in different ways into your application. Ideas may be to include Merits as a reward for user interactions with your app or a general reward for any activity. Merits can be distributed to users via the API.

Users can have the ability to sign up for Merits through your app and/or login to their Merits account. You can also display individual Merits balances and leaderboard balances within your application. However, these are optional integrations.

To qualify for the bounty, you simply need to provide Merit incentives for certain activities, and then distribute those merits appropriately. As long as you have the participant's Ethereum address you can distribute Merits.

<Warning>
  Note: You can retrieve basic data without an API key, but **for interactivity purposes you will need to request one via our Discord channe**l. See below.
</Warning>

### Getting started

1. Request your API key at: https://ethglobal.com/discord in the #partner-blockscout channel
2. API hostname (and test merits dashboard): [https://merits-staging.blockscout.com](https://merits-staging.blockscout.com)

<Info>
  A full list of endpoints is available on our swagger page here: https://blockscout.github.io/swaggers/services/merits/main/index.html
</Info>

### Get basic Merit info for a user

`GET` `https://merits-staging.blockscout.com/api/v1/auth/user/\{address}`

Returns user information by address

**Path parameters**

<ParamField body="address" type="string" required>
  The blockchain address of the user
</ParamField>

**Responses**

<Accordion title="200 User Information">
  <ResponseField name="Response" type="object">
    <Expandable title="properties">
      <ResponseField name="exists" type="boolean" required>
        Indicates if the user exists

        Example: `true`
      </ResponseField>
      <ResponseField name="user" type="object">
        <Expandable title="properties">
          <ResponseField name="address" type="string" required>
            The blockchain address of the user

            Example: `0x813399e5b08Bb50b038AA7dF6347b6AF2D161338`
          </ResponseField>
          <ResponseField name="total_balance" type="string" required>
            Merits balance

            Example: `981`
          </ResponseField>
          <ResponseField name="referrals" type="string" required>
            Number of invited users

            Example: `5`
          </ResponseField>
          <ResponseField name="registered_at" type="string . date-time" required>
            Registration timestamp

            Example: `2024-10-21T13:21:20.529Z`
          </ResponseField>
        </Expandable>
      </ResponseField>
    </Expandable>

  </ResponseField>
</Accordion>

<CodeGroup>

```http HTTP
GET /api/v1/auth/user/{address} HTTP/1.1
Host: merits-staging.blockscout.com
Accept: */*
```

```sh cURL
curl -L \
  --url 'https://merits-staging.blockscout.com/api/v1/auth/user/{address}' \
  --header 'Accept: */*'
```

```js JavaScript
const response = await fetch(
  "https://merits-staging.blockscout.com/api/v1/auth/user/{address}",
  {
    method: "GET",
    headers: {
      Accept: "*/*",
    },
  }
);

const data = await response.json();
```

```py Python
import requests

response = requests.get(
    "https://merits-staging.blockscout.com/api/v1/auth/user/{address}",
    headers={"Accept":"*/*"},
)

data = response.json()
```

</CodeGroup>

```json 200 User Information
{
  "exists": true,
  "user": {
    "address": "0x813399e5b08Bb50b038AA7dF6347b6AF2D161338",
    "total_balance": "981",
    "referrals": "5",
    "registered_at": "2024-10-21T13:21:20.529Z"
  }
}
```

### Get leaderboard ranking for a user

`GET` `https://merits-staging.blockscout.com/api/v1/leaderboard/users/\{address}`

Returns the leaderboard information for a specific user

**Path parameters**

<ParamField body="address" type="string" required>
  The blockchain address of the user
</ParamField>

**Responses**

<Accordion title="200 User leaderboard information">
  <ResponseField name="Response" type="object">
    <Expandable title="properties">
      <ResponseField name="address" type="string" required>
        The blockchain address of the user

        Example: `0x813399e5b08Bb50b038AA7dF6347b6AF2D161338`
      </ResponseField>
      <ResponseField name="total_balance" type="string" required>
        The current user's balance

        Example: `981`
      </ResponseField>
      <ResponseField name="referrals" type="string" required>
        Number of invited users

        Example: `5`
      </ResponseField>
      <ResponseField name="registered_at" type="string . date-time" required>
        The date and time when the user registered

        Example: `2024-10-21T13:21:20.529Z`
      </ResponseField>
      <ResponseField name="rank" type="string" required>
        The rank of the user on the leaderboard

        Example: `1`
      </ResponseField>
      <ResponseField name="users_below" type="string" required>
        Number of users below the current user

        Example: `71569`
      </ResponseField>
      <ResponseField name="top_percent" type="number . double" required>
        In what percentage of users the current one is in

        Example: `0.01`
      </ResponseField>
    </Expandable>

  </ResponseField>
</Accordion>

<CodeGroup>

```http HTTP
GET /api/v1/leaderboard/users/{address} HTTP/1.1
Host: merits-staging.blockscout.com
Accept: */*
```

```sh cURL
curl -L \
  --url 'https://merits-staging.blockscout.com/api/v1/leaderboard/users/{address}' \
  --header 'Accept: */*'
```

```js JavaScript
const response = await fetch(
  "https://merits-staging.blockscout.com/api/v1/leaderboard/users/{address}",
  {
    method: "GET",
    headers: {
      Accept: "*/*",
    },
  }
);

const data = await response.json();
```

```py Python
import requests

response = requests.get(
    "https://merits-staging.blockscout.com/api/v1/leaderboard/users/{address}",
    headers={"Accept":"*/*"},
)

data = response.json()
```

</CodeGroup>

```json 200 User leaderboard information
{
  "address": "0x813399e5b1102950b038AA7dF6347b6AF21102828",
  "total_balance": "981",
  "referrals": "5",
  "registered_at": "2024-10-21T13:21:20.529Z",
  "rank": "1",
  "users_below": "71569",
  "top_percent": 0.01
}
```

### Partner balance and distribution information

When you request an API key you become a partner\! You will receive a balance of test Merits which can then be distributed to your users.

_\* Requires API Key - Add the assigned API KEY in the Authorization header to see your information._

`GET` `https://merits-staging.blockscout.com/partner/api/v1/balance`

Returns the balance and distribution information for a partner

**Responses**

<Accordion title="200 Partner balance information">
  <ResponseField name="Response" type="object">
    <Expandable title="properties">
      <ResponseField name="name" type="string" required>
        Partner name

        Example: `partner-1`
      </ResponseField>
      <ResponseField name="api_key" type="string" required>
        API key for the partner

        Example: `4VF6LDF7RC64CNGWXOECF8J1LJ62W5HS`
      </ResponseField>
      <ResponseField name="valid_since" type="string . date-time" required>
        Merits accrual start date

        Example: `2025-05-01T00:00:00.000Z`
      </ResponseField>
      <ResponseField name="valid_until" type="string . date-time" required>
        Merits accrual end date

        Example: `2025-06-01T00:00:00.000Z`
      </ResponseField>
      <ResponseField name="rate" type="string" required>
        Amount of accruing merits per second

        Example: `0.1`
      </ResponseField>
      <ResponseField name="balance" type="string" required>
        Current amount available for distribution

        Example: `1234.5`
      </ResponseField>
      <ResponseField name="total_distributed" type="string" required>
        Total amount distributed in the past

        Example: `100`
      </ResponseField>
      <ResponseField name="updated_at" type="string . date-time" required>
        Last update timestamp

        Example: `2025-04-16T11:26:31.757Z`
      </ResponseField>
    </Expandable>

  </ResponseField>
</Accordion>

<CodeGroup>

```http HTTP
GET /partner/api/v1/balance HTTP/1.1
Host: merits-staging.blockscout.com
Accept: */*
```

```sh cURL
curl -L \
  --url 'https://merits-staging.blockscout.com/partner/api/v1/balance' \
  --header 'Accept: */*'
```

```js JavaScript
const response = await fetch(
  "https://merits-staging.blockscout.com/partner/api/v1/balance",
  {
    method: "GET",
    headers: {
      Accept: "*/*",
    },
  }
);

const data = await response.json();
```

```py Python
import requests

response = requests.get(
    "https://merits-staging.blockscout.com/partner/api/v1/balance",
    headers={"Accept":"*/*"},
)

data = response.json()
```

</CodeGroup>

```json 200 Partner balance information
{
  "name": "partner-1",
  "api_key": "4VF6LDF7RC64CNGWXOECF8J1LJ62W5HS",
  "valid_since": "2025-05-01T00:00:00.000Z",
  "valid_until": "2025-06-01T00:00:00.000Z",
  "rate": "0.1",
  "balance": "1234.5",
  "total_distributed": "100",
  "updated_at": "2025-04-16T11:26:31.757Z"
}
```

### Distribute Merits

_\* Requires API Key - Add the assigned API KEY in the Authorization header to add your distribution information._

_Notes:_

- `id` must be unique per each API KEY, so it's recommended to include date or time period describing the distribution period.
- `distributions`
  - Max `1000` wallets per distribution.
  - Amounts less than `0.01` per address are not allowed.
  - Amounts can be in decimals, max 2 decimal digits precision is recommended.
- create_missing_accounts
  - `true`: allows distributions to not yet registered Merits accounts.
  - `false`: only allow distributions to users that are already registered.

`POST` `https://merits-staging.blockscout.com/partner/api/v1/distribute`

Distributes merits to specified addresses

**Body**

<ParamField body="id" type="string" required>
  Unique ID for the distribution

Example: `ethglobal_rewards-2025/05/01`
</ParamField>

<ParamField body="description" type="string" required>
  Human readable description of the distribution

Example: `Extra rewards from ProjectX for using Blockscout during ETH Global`
</ParamField>

<ParamField body="distributions" type="object[]" required>
  List of wallet addresses and amounts (max 1000 wallets)

  <Expandable title="properties">
    <ParamField body="address" type="string" required>
      Blockchain address to receive the distribution

      Example: `0x813399e5b08Bb50b038AA7dF6347b6AF2D161338`
    </ParamField>
    <ParamField body="amount" type="string" required>
      Amount to distribute

      Example: `10.50`
    </ParamField>

  </Expandable>
</ParamField>

<ParamField body="create_missing_accounts" type="boolean" required>
  Allow distribution for non-registered accounts if true

Example: `false`
</ParamField>

<ParamField body="expected_total" type="string" required>
  Total distribution amount (must equal sum of all amounts)

Example: `100.00`
</ParamField>

**Responses**

<Accordion title="200 Distribution results">
  <ResponseField name="Response" type="object">
    <Expandable title="properties">
      <ResponseField name="accounts_distributed" type="string" required>
        Number of accounts that received distributions

        Example: `1`
      </ResponseField>
      <ResponseField name="accounts_created" type="string" required>
        Number of new accounts created during distribution

        Example: `0`
      </ResponseField>
    </Expandable>

  </ResponseField>
</Accordion>

<CodeGroup>

```http HTTP
POST /partner/api/v1/distribute HTTP/1.1
Host: merits-staging.blockscout.com
Content-Type: application/json
Accept: */*
Content-Length: 270

{
  "id": "ethglobal_rewards-2025/05/01",
  "description": "Extra rewards from ProjectX for using Blockscout during ETH Global",
  "distributions": [
    {
      "address": "0x813399e5b08Bb50b038AA7dF6347b6AF2D161338",
      "amount": "10.50"
    }
  ],
  "create_missing_accounts": false,
  "expected_total": "100.00"
}
```

```sh cURL
curl -L \
  --request POST \
  --url 'https://merits-staging.blockscout.com/partner/api/v1/distribute' \
  --header 'Content-Type: application/json' \
  --data '{
    "id": "ethglobal_rewards-2025/05/01",
    "description": "Extra rewards from ProjectX for using Blockscout during ETH Global",
    "distributions": [
      {
        "address": "0x813399e5b08Bb50b038AA7dF6347b6AF2D161338",
        "amount": "10.50"
      }
    ],
    "create_missing_accounts": false,
    "expected_total": "100.00"
  }'
```

```js JavaScript
const response = await fetch(
  "https://merits-staging.blockscout.com/partner/api/v1/distribute",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: "ethglobal_rewards-2025/05/01",
      description:
        "Extra rewards from ProjectX for using Blockscout during ETH Global",
      distributions: [
        {
          address: "0x813399e5b08Bb50b038AA7dF6347b6AF2D161338",
          amount: "10.50",
        },
      ],
      create_missing_accounts: false,
      expected_total: "100.00",
    }),
  }
);

const data = await response.json();
```

```py Python
import requests

response = requests.post(
    "https://merits-staging.blockscout.com/partner/api/v1/distribute",
    headers={"Content-Type":"application/json"},
    data=json.dumps({
      "id": "ethglobal_rewards-2025/05/01",
      "description": "Extra rewards from ProjectX for using Blockscout during ETH Global",
      "distributions": [
        {
          "address": "0x813399e5b08Bb50b038AA7dF6347b6AF2D161338",
          "amount": "10.50"
        }
      ],
      "create_missing_accounts": False,
      "expected_total": "100.00"
    })
)

data = response.json()
```

</CodeGroup>

```json 200 Distribution results
{
  "accounts_distributed": "1",
  "accounts_created": "0"
}
```

### Login and Registration Flow - Get User Token

_Use the following flow to get a User Token_

1. Get Nonce from Backend

`GET` `https://merits-staging.blockscout.com/api/v1/auth/nonce`

Returns a nonce for authentication

**Responses**

<Accordion title="200 Authentication nonce">
  <ResponseField name="Response" type="object">
    <Expandable title="properties">
      <ResponseField name="nonce" type="string" required>
        Authentication nonce

        Example: `4MCWIDlddqsmJAAAZ`
      </ResponseField>
      <ResponseField name="merits_login_nonce" type="string | nullable">
        Optional merits-specific login nonce
      </ResponseField>
    </Expandable>

  </ResponseField>
</Accordion>

<CodeGroup>

```http HTTP
GET /api/v1/auth/nonce HTTP/1.1
Host: merits-staging.blockscout.com
Accept: */*
```

```sh cURL
curl -L \
  --url 'https://merits-staging.blockscout.com/api/v1/auth/nonce' \
  --header 'Accept: */*'
```

```js JavaScript
const response = await fetch(
  "https://merits-staging.blockscout.com/api/v1/auth/nonce",
  {
    method: "GET",
    headers: {
      Accept: "*/*",
    },
  }
);

const data = await response.json();
```

```py Python
import requests

response = requests.get(
    "https://merits-staging.blockscout.com/api/v1/auth/nonce",
    headers={"Accept":"*/*"},
)

data = response.json()
```

</CodeGroup>

```json 200 Authentication nonce
{
  "exists": true,
  "user": {
    "address": "0x813399e5b08Bb50b038AA7dF6347b6AF2D161338",
    "total_balance": "981",
    "referrals": "5",
    "registered_at": "2024-10-21T13:21:20.529Z"
  }
}
```

2. Ask for a signature from a user with a predefined message

```text
// Formatted message example


merits.blockscout.com wants you to sign in with your Ethereum account:
0x813399e5b08Bb50b038AA7dF6347b6AF2D163328

Sign-In for the Blockscout Merits program.

URI:
https://merits-staging.blockscout.com
Version: 1
Chain ID: 1
Nonce: 4MCWIDlddqsmJAZOZ
Issued At: 2025-03-18T12:23:51.549Z
Expiration Time: 2026-03-18T12:23:51.549Z
```

3. Send data to get a user token

`POST` `https://merits-staging.blockscout.com/api/v1/auth/login`

Authenticates a user with a signed message

**Body**

<ParamField body="nonce" type="string" required>
  Authentication nonce received from the server

Example: `4MCWIDlddqsmJAAAZ`
</ParamField>

<ParamField body="message" type="string" required>
  The message that was signed

Example: `merits.blockscout.com wants you to sign in with your Ethereum account: 0x813399e5b08Bb50b038AA7dF6347b6AF2D161338 Sign-In for the Blockscout Merits program. URI: https://merits.blockscout.com Version: 1 Chain ID: 1 Nonce: 4MCWIDlddqsmJAAAZ Issued At: 2025-03-18T12:23:51.549Z Expiration Time: 2026-03-18T12:23:51.549Z`
</ParamField>

<ParamField body="signature" type="string" required>
  The signature of the message

Example: `0xb11b582a6ef196a3f20fa9c84443a92c9f456c9da2ce8ceea2bcf4ce2b936e35767ac2ff56a1de635b7a5f4bcb5da89c4297efb2b4ce559123891202731752661c`
</ParamField>

**Responses**

<Accordion title="200 Authentication result">
  <ResponseField name="Response" type="object">
    <Expandable title="properties">
      <ResponseField name="created" type="boolean" required>
        Indicates if an account was created during this login

        Example: `false`
      </ResponseField>
      <ResponseField name="token" type="string" required>
        JWT authentication token

        Example: `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3NzM4MzY2MzEsImlhdCI6MTc0MjMwMDYzMSwibmJmIjoxNzQyMzAwNjMxLCJzdWIiOiIweDgxMzM5OWU1YjA4QmI1MGIwMzhBQTdkRjYzNDdiNkFGMkQxNsadasdasdasdsajE4MjgiLCJqdGkiOiI0TUNXSURsZGRxc21KQVpPWiIsImNoYWluX2lkIjoxLCJkb21haW4iOiJtZXJpdHMuYmxvY2tzY291dC5jb20ifQ.QQj-dn3ZmHhusq7cvtohF72yxF-605lP7WxVuVZ7BfQ`
      </ResponseField>
    </Expandable>

  </ResponseField>
</Accordion>

<CodeGroup>

```http HTTP
POST /api/v1/auth/login HTTP/1.1
Host: merits-staging.blockscout.com
Content-Type: application/json
Accept: */*
Content-Length: 518

{
  "nonce": "4MCWIDlddqsmJAAAZ",
  "message": "merits.blockscout.com wants you to sign in with your Ethereum account:\n0x813399e5b08Bb50b038AA7dF6347b6AF2D161338\n\nSign-In for the Blockscout Merits program.\n\nURI: https://merits.blockscout.com\nVersion: 1\nChain ID: 1\nNonce: 4MCWIDlddqsmJAAAZ\nIssued At: 2025-03-18T12:23:51.549Z\nExpiration Time: 2026-03-18T12:23:51.549Z",
  "signature": "0xb11b582a6ef196a3f20fa9c84443a92c9f456c9da2ce8ceea2bcf4ce2b936e35767ac2ff56a1de635b7a5f4bcb5da89c4297efb2b4ce559123891202731752661c"
}
```

```sh cURL
curl -L \
  --request POST \
  --url 'https://merits-staging.blockscout.com/api/v1/auth/login' \
  --header 'Content-Type: application/json' \
  --data '{
    "nonce": "4MCWIDlddqsmJAAAZ",
    "message": "merits.blockscout.com wants you to sign in with your Ethereum account:
  0x813399e5b08Bb50b038AA7dF6347b6AF2D161338

  Sign-In for the Blockscout Merits program.

  URI: https://merits.blockscout.com
  Version: 1
  Chain ID: 1
  Nonce: 4MCWIDlddqsmJAAAZ
  Issued At: 2025-03-18T12:23:51.549Z
  Expiration Time: 2026-03-18T12:23:51.549Z",
    "signature": "0xb11b582a6ef196a3f20fa9c84443a92c9f456c9da2ce8ceea2bcf4ce2b936e35767ac2ff56a1de635b7a5f4bcb5da89c4297efb2b4ce559123891202731752661c"
  }'
```

```js JavaScript
const response = await fetch(
  "https://merits-staging.blockscout.com/api/v1/auth/login",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nonce: "4MCWIDlddqsmJAAAZ",
      message:
        "merits.blockscout.com wants you to sign in with your Ethereum account:\n0x813399e5b08Bb50b038AA7dF6347b6AF2D161338\n\nSign-In for the Blockscout Merits program.\n\nURI: https://merits.blockscout.com\nVersion: 1\nChain ID: 1\nNonce: 4MCWIDlddqsmJAAAZ\nIssued At: 2025-03-18T12:23:51.549Z\nExpiration Time: 2026-03-18T12:23:51.549Z",
      signature:
        "0xb11b582a6ef196a3f20fa9c84443a92c9f456c9da2ce8ceea2bcf4ce2b936e35767ac2ff56a1de635b7a5f4bcb5da89c4297efb2b4ce559123891202731752661c",
    }),
  }
);

const data = await response.json();
```

```py Python
import requests

response = requests.post(
    "https://merits-staging.blockscout.com/api/v1/auth/login",
    headers={"Content-Type":"application/json"},
    data=json.dumps({
      "nonce": "4MCWIDlddqsmJAAAZ",
      "message": "merits.blockscout.com wants you to sign in with your Ethereum account:\n0x813399e5b08Bb50b038AA7dF6347b6AF2D161338\n\nSign-In for the Blockscout Merits program.\n\nURI: https://merits.blockscout.com\nVersion: 1\nChain ID: 1\nNonce: 4MCWIDlddqsmJAAAZ\nIssued At: 2025-03-18T12:23:51.549Z\nExpiration Time: 2026-03-18T12:23:51.549Z",
      "signature": "0xb11b582a6ef196a3f20fa9c84443a92c9f456c9da2ce8ceea2bcf4ce2b936e35767ac2ff56a1de635b7a5f4bcb5da89c4297efb2b4ce559123891202731752661c"
    })
)

data = response.json()
```

</CodeGroup>

### API Calls Requiring a User Token

_\*Requires User Token: put the user token in the Authorization header_

`GET` `https://merits-staging.blockscout.com/api/v1/user/balances`

Returns the detailed balance information for the authenticated user

**Responses**

<Accordion title="200 User balance details">
  <ResponseField name="Response" type="object">
    <Expandable title="properties">
      <ResponseField name="total" type="string" required>
        The total balance of the user

        Example: `2426.61`
      </ResponseField>
      <ResponseField name="staked" type="string" required>
        The amount of tokens staked by the user

        Example: `0`
      </ResponseField>
      <ResponseField name="unstaked" type="string" required>
        The amount of tokens not staked by the user

        Example: `2426.61`
      </ResponseField>
      <ResponseField name="total_staking_rewards" type="string" required>
        The total staking rewards earned by the user

        Example: `0`
      </ResponseField>
      <ResponseField name="total_referral_rewards" type="string" required>
        The total referral rewards earned by the user

        Example: `20`
      </ResponseField>
      <ResponseField name="pending_referral_rewards" type="string" required>
        The pending referral rewards for the user

        Example: `0`
      </ResponseField>
    </Expandable>

  </ResponseField>
</Accordion>

<CodeGroup>

```http HTTP
GET /api/v1/user/balances HTTP/1.1
Host: merits-staging.blockscout.com
Accept: */*
```

```sh cURL
curl -L \
  --url 'https://merits-staging.blockscout.com/api/v1/user/balances' \
  --header 'Accept: */*'
```

```js JavaScript
const response = await fetch(
  "https://merits-staging.blockscout.com/api/v1/user/balances",
  {
    method: "GET",
    headers: {
      Accept: "*/*",
    },
  }
);

const data = await response.json();
```

```py Python
import requests

response = requests.get(
    "https://merits-staging.blockscout.com/api/v1/user/balances",
    headers={"Accept":"*/*"},
)

data = response.json()
```

</CodeGroup>

```json 200 User balance details
{
  "total": "2426.61",
  "staked": "0",
  "unstaked": "2426.61",
  "total_staking_rewards": "0",
  "total_referral_rewards": "20",
  "pending_referral_rewards": "0"
}
```

`GET` `https://merits-staging.blockscout.com/api/v1/user/logs`

Returns activity logs for the authenticated user

**Query parameters**

<ParamField body="page_size" type="integer . int32">
  Number of items to return per page
</ParamField>

<ParamField body="page_token" type="string">
  Token for pagination
</ParamField>

**Responses**

<Accordion title="200 User activity logs">
  <ResponseField name="Response" type="object">
    <Expandable title="properties">
      <ResponseField name="items" type="object[]" required>
        list of activity logs

        <Expandable title="properties">
          <ResponseField name="action" type="string" required>
            Type of activity

            Example: `daily_reward`
          </ResponseField>
          <ResponseField name="details" type="object" required>
            <Expandable title="properties">
              <ResponseField name="streak" type="number . float">
                Streak count for daily rewards

                Example: `1`
              </ResponseField>
              <ResponseField name="amount" type="string">
                Amount of merits received

                Example: 10
              </ResponseField>
              <ResponseField name="date" type="string . date">
                Date of the activity

                Example: 2025-03-18
              </ResponseField>
            </Expandable>
          </ResponseField>
          <ResponseField name="timestamp" type="string . date-time" required>
            Timestamp of the activity

            Example: `2025-03-18T12:13:20.110Z`
          </ResponseField>
        </Expandable>
      </ResponseField>
      <ResponseField name="next_page_params" type="object">
        <Expandable title="properties">
          <ResponseField type="string" required>
            Token for the next page

            Example: `1732067538792818,984727`
          </ResponseField>
          <ResponseField type="integer . int32" required>
            Size of the page

            Example: `50`
          </ResponseField>
        </Expandable>
      </ResponseField>
    </Expandable>

  </ResponseField>
</Accordion>

<CodeGroup>

```http HTTP
GET /api/v1/user/logs HTTP/1.1
Host: merits-staging.blockscout.com
Accept: */*
```

```sh cURL
curl -L \
  --url 'https://merits-staging.blockscout.com/api/v1/user/logs' \
  --header 'Accept: */*'
```

```js JavaScript
const response = await fetch(
  "https://merits-staging.blockscout.com/api/v1/user/logs",
  {
    method: "GET",
    headers: {
      Accept: "*/*",
    },
  }
);

const data = await response.json();
```

```py Python
import requests

response = requests.get(
    "https://merits-staging.blockscout.com/api/v1/user/logs",
    headers={"Accept":"*/*"},
)

data = response.json()
```

</CodeGroup>

================================================
FILE: devs/mcp-server.mdx
================================================

---

title: "MCP Server"
description: "Wraps Blockscout APIs to expose blockchain data such as balances, tokens, NFTs, and contract metadata via MCP"
icon: "code-fork"

---

<Tip>
  - MCP Landing page: https://mcp.blockscout.com
  - Github with technical specs and run information located at https://github.com/blockscout/mcp-server
</Tip>

The Model Context Protocol (MCP) is an open protocol designed to allow AI agents, IDEs, and automation tools to consume, query, and analyze structured data through context-aware APIs.

This server wraps Blockscout APIs and exposes blockchain data—balances, tokens, NFTs, contract metadata—via MCP so that AI agents and tools (like Claude, Cursor, or IDEs) can access and analyze it contextually.

#### **Key Features:**

- Contextual blockchain data access for AI tools
- Multi-chain support via getting Blockscout instance URLs from Chainscout
- Custom instructions for MCP host to use the server
- Supports MCP progress notifications for multi-step tool operations, allowing clients to track execution status
- Enhanced User Experience: Provides periodic progress updates for long-running API queries (e.g., fetching extensive transaction histories) when requested by the client, improving responsiveness

#### Use Cases

- Enabling AI agents to analyze blockchain transactions and account balances.
- Automating blockchain data analysis workflows with context-aware APIs.
- Allowing IDEs to fetch contract ABIs and other relevant smart contract information.

### Examples

- Using the MCP to [find ENV variables for rollup deployments](/devs/mcp-examples/rollup-deployment-variables).

#### **Architecture and Data Flow**

```mermaid
sequenceDiagram
    participant AI as MCP Host
    participant MCP as MCP Server
    participant BENS as ENS Service
    participant CS as Chainscout
    participant BS as Blockscout Instance
    participant Metadata as Metadata Service

    AI->>MCP: __get_instructions__
    MCP-->>AI: Custom instructions

    AI->>MCP: get_address_by_ens_name
    MCP->>BENS: Forward ENS name resolution request
    BENS-->>MCP: Address response
    MCP-->>AI: Formatted address

    AI->>MCP: get_chains_list
    MCP->>CS: Request available chains
    CS-->>MCP: List of chains
    MCP-->>AI: Formatted chains list

    Note over AI: Host selects chain_id as per the user's initial prompt

    AI->>MCP: Tool request with chain_id
    MCP->>CS: GET /api/chains/:id
    CS-->>MCP: Chain metadata (includes Blockscout URL)
    par Concurrent API Calls (when applicable)
        MCP->>BS: Request to Blockscout API
        BS-->>MCP: Primary data response
    and
        MCP->>Metadata: Request to Metadata API (for enriched data)
        Metadata-->>MCP: Secondary data response
    end
    MCP-->>AI: Formatted & combined information
```

================================================
FILE: devs/replace-links.mdx
================================================

---

title: "Link To Blockscout"
description: Easily replace your current explorer links with Blockscout explorer links
icon: "link"

---

## Replace the primary explorer link

In most cases simply replacing the first part of the url is all that is needed to replace Etherscan with Blockscout.

For example, replace [https://etherscan.com/](https://etherscan.com/) with [https://eth.blockscout.com/](https://eth.blockscout.com/) in your code and the corresponding links to blocks, transactions, etc will be mapped to Blockscout rather than Etherscan.

<Check>
😢 Tx before replacement

[https://etherscan.io/tx/0x3e8c3aad50b2f8471400e3fe6b812f20c332846064dff8c25fadf783eefa68df](https://etherscan.io/tx/0x3e8c3aad50b2f8471400e3fe6b812f20c332846064dff8c25fadf783eefa68df)

😁 Tx after replacement

[https://eth.blockscout.com/tx/0x3e8c3aad50b2f8471400e3fe6b812f20c332846064dff8c25fadf783eefa68df](https://eth.blockscout.com/tx/0x3e8c3aad50b2f8471400e3fe6b812f20c332846064dff8c25fadf783eefa68df)

</Check>

Blockscout linking architecture follows [EIP-3091](https://eips.ethereum.org/EIPS/eip-3091)standardization for the following routes:

- Blocks `<BLOCK_EXPLORER_URL>/block/<BLOCK_HASH_OR_HEIGHT>`

- Transactions `<BLOCK_EXPLORER_URL>/tx/<TX_HASH>`

- Accounts `<BLOCK_EXPLORER_URL>/address/<ACCOUNT_ADDRESS>`

- Tokens `<BLOCK_EXPLORER_URL>/token/<TOKEN_ADDRESS>`

### UTM tags

We encourage adding UTM tags with your project information to Blockscout links. This helps us track referrals and improve our overall performance via metrics. Simply append `?utm_source=<your_project_name>` to the end of any links pointing to Blockscout. For example [https://eth.blockscout.com/?utm_source=tenderly](https://eth.blockscout.com/?utm_source=Tenderly)

### Common chain replacements

Replace the Etherscan url in your code with the Blockscout url for a seamless transition. All chains supported by Etherscan are also supported by Blockscout (along with many additional Blockscout chains). Some examples are below. For additional Blockscout chains see the [chains and projects](https://www.blockscout.com/chains-and-projects) page or the [chainscout json file which includes chainids](https://github.com/blockscout/chainscout/blob/main/data/chains.json).

| Chain            | Etherscan ❌                                                                     | Blockscout ✅                                                                        |
| ---------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Ethereum         | [https://etherscan.io/](https://etherscan.io/)                                   | [https://eth.blockscout.com/](https://eth.blockscout.com/)                           |
| Ethereum Sepolia | [https://sepolia.etherscan.io/](https://sepolia.etherscan.io/)                   | [https://eth-sepolia.blockscout.com/](https://eth-sepolia.blockscout.com/)           |
| Optimism         | [https://optimistic.etherscan.io/](https://optimistic.etherscan.io/)             | [https://optimism.blockscout.com/](https://optimism.blockscout.com/)                 |
| Optimism Sepolia | [https://sepolia-optimism.etherscan.io/](https://sepolia-optimism.etherscan.io/) | [https://optimism-sepolia.blockscout.com/](https://optimism-sepolia.blockscout.com/) |
| Base             | [https://basescan.org/](https://basescan.org/)                                   | [https://base.blockscout.com/](https://base.blockscout.com/)                         |
| Base Sepolia     | [https://sepolia.basescan.org/](https://sepolia.basescan.org/)                   | [https://base-sepolia.blockscout.com/](https://base-sepolia.blockscout.com/)         |
| Arbitrum         | [https://arbiscan.io/](https://arbiscan.io/)                                     | [https://arbitrum.blockscout.com/](https://arbitrum.blockscout.com/)                 |
| Arbitrum Sepolia | [https://sepolia.arbiscan.io/](https://sepolia.arbiscan.io/)                     | [https://arbitrum-sepolia.blockscout.com/](https://arbitrum-sepolia.blockscout.com/) |
| Polygon          | [https://polygonscan.com/](https://polygonscan.com/)                             | [https://polygon.blockscout.com/](https://polygon.blockscout.com/)                   |
| Gnosis           | [https://gnosisscan.io/](https://gnosisscan.io/)                                 | [https://gnosis.blockscout.com/](https://gnosis.blockscout.com/)                     |
| Celo             | [https://celoscan.io/](https://celoscan.io/)                                     | [https://celo.blockscout.com/](https://celo.blockscout.com/)                         |
| Unichain         | [https://uniscan.xyz/](https://uniscan.xyz/)                                     | [https://unichain.blockscout.com/](https://unichain.blockscout.com/)                 |

### Exceptions

Some newer operations without standards are still handled differently by different explorers. For example:

- Blobs on Blockscout are accessed in different ways depending on the route. For example via the `?tab=blob_txs` query string following a block ([https://eth.blockscout.com/block/20822532?tab=blob_txs](https://eth.blockscout.com/block/20822532?tab=blob_txs)) or the `?tab=blobs` query string following a transaction. Blobs on Etherscan are accessed via `#blobinfo` query string following a block (ie [https://etherscan.io/block/20822532#blobinfo](https://etherscan.io/block/20822532#blobinfo)).

- User Operations (EIP-4337) are displayed on Blockscout via the [https://eth.blockscout.com/ops](https://eth.blockscout.com/ops) url. On Etherscan there is currently no defined route, but User Operations can be viewed with the `Handle Ops` filter applied to the senders address (ie https://etherscan.io/advanced-filter?fadd=0x20e9695f25413f14e5807b530D0698bd4F155074\&mtd=0x1fad948c\~Handle+Ops\&ps=10\&p=8)

## Replace the API link

<Info>
Standard Blockscout RPC calls do not need an API key (Etherscan calls always require one). You can remove the `&apikey=YourApiKeyToken` query string at the end of the url with no problem or keep it as any string value and Blockscout will process. If you want to increase your limits, you can also [sign up for a free Blockscout API key](/using-blockscout/my-account/api-keys) and use it to access 10 RPS limits.

</Info>

Etherscan uses a subdomain link for api access. For example, the Ethereum explorer the api link is [https://api.etherscan.io/](https://api.etherscan.io/) followed by your query, or for Optimism it is [https://api-optimistic.etherscan.io/](https://api-optimistic.etherscan.io/) followed by your query.

**To replace, simply use the regular blockscout url for the instance**, for example [https://eth.blockscout.com/](https://eth.blockscout.com/) for Ethereum or [https://optimism.blockscout.com/](https://optimism.blockscout.com/) for Optimism.

<Check>
😢 API call before replacement (doesn't work without API key)

[https://api.etherscan.io/api?module=account\&action=balance\&address=0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae\&tag=latest\&apikey=YourApiKeyToken](https://api.etherscan.io/api?module=account&action=balance&address=0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae&tag=latest&apikey=YourApiKeyToken)

😁 API call after replacement (works without API key)

[https://eth.blockscout.com/api?module=account\&action=balance\&address=0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae\&tag=latest](https://eth.blockscout.com/api?module=account&action=balance&address=0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae&tag=latest)

</Check>

Standard API routes on Etherscan work for your queries on Blockscout. We've structured our data calls to be consistent with Etherscan whenever possible. You can see supported calls in the [JSON RPC & ETH Compatible RPC endpoints section](/devs/apis/rpc).

<Check>
If you require more varied or richer datasets consider replacing your JSON RPC calls with the [REST API from Blockscout](/devs/apis/rest). This free API features additional metadata, stats data, human readable transactions and more.

</Check>

### API Exceptions

- Blockscout does not currently support most [Etherscan API PRO](https://docs.etherscan.io/api-pro/etherscan-api-pro) queries.

- The 10 RPS limits can be increased further via the [Quicknode marketplace add-on](https://marketplace.quicknode.com/add-on/blockscout-json-rpc-api).

## Replace your wallet block explorer link

Every wallet handles the explorer link differently, but typically wallets ship with Etherscan links by default. To change, simply go to settings and replace the Etherscan link with the Blockscout one. Here's how you do it in MetaMask.

1. Open MetaMask, click the dots to open the menu, and select Settings

2. Select Networks

3. Select the network where you want to change the explorer link

<Frame caption="">
  <img src="/images/547b45a9-image.jpeg" />
</Frame>

1. Find the block explorer url (ie [https://optimistic.etherscan.io/](https://optimistic.etherscan.io/)).

2. Change the url to blockscout (ie [https://optimism.blockscout.com/](https://optimism.blockscout.com/)) and Save.

<Frame caption="">
  <img src="/images/b719815c-image.jpeg" />
</Frame>

<Check>
Repeat this process for all networks from the Networks screen.

</Check>

================================================
FILE: devs/verification.mdx
================================================

---

title: "Smart Contract Verification"
sidebarTitle: "Overview"
description: "Verifying your deployed contract using contract source code, JSON input, Sourcify and more."

---

Once verified, a smart contract or token contract's source code becomes publicly available and verifiable, creating transparency and trust. It also allows for interactivity with methods directly through the Read and Write buttons.

There are many different ways to verify your contracts with Blockscout.

- [Blockscout UI](/devs/verification/blockscout-ui)
- [Verification API](/devs/verification/blockscout-smart-contract-verification-api)
- [Hardhat Plugin](/devs/verification/hardhat-verification-plugin)
- [Foundry Verification](/devs/verification/foundry-verification)
- [Sourcify Verification](/devs/verification/contracts-verification-via-sourcify)
- [Remix Verification](/devs/verification/remix-verification)
- [Automate verification with Catapulta](/devs/verification/automate-verifications-catapulta)
- [Stylus verification via API](/devs/verification/stylus-verification)
- [Thirdweb verification](/devs/verification/verification-via-thirdweb)

================================================
FILE: devs/apis/graphql.mdx
================================================

---

## title: "GraphQL in Blockscout"

## **What is GraphQL**

GraphQL is an open-source data query and manipulation language for APIs, and a runtime for fulfilling queries with existing data. It provides an efficient, powerful and flexible approach to developing web APIs. It allows clients to define the structure of the data required, and exactly the same structure of the data is returned from the server, therefore preventing excessively large amounts of data from being returned.

Key concepts of the GraphQL query language are:

- Hierarchical

- Strongly typed

- Client-specified queries

Advantages of GraphQL:

- Declarative integration on client (what data/operations do I need)

- A standard way to expose data and operations

- Support for real-time data (with subscriptions)

## **Query types**

There are three main query types in GraphQL schema:

1\) **Query:** fetch data

```
query {
  allPosts {
    description
    text
  }
}
```

2\) **Mutation:** change data.

```javascript
   mutation {
     updatePost(id: 1, text: "text") {
       text
     }
   }
```

1. **Subscription:** subscribe to real-time data.

```javascript
subscription {
  newPost(category: [1]) {
    description
    text
  }
}
```

## **Access GraphQL API**

To access Blockscout GraphQL interface you can use GraphiQL - in-browser IDE for exploring GraphQL. It's built in to Blockscout. From the `APIs` dropdown menu choose `GraphQL.`

<Frame caption="">
  <img src="/images/e05b6ff7-image.jpeg" />
</Frame>

You can also use your favorite http client:

```sh
curl 'https://eth-sepolia.blockscout.com/graphiql'
  -H 'Authorization: Bearer YOUR_AUTH_TOKEN'
  -d '{"query":""{transaction(hash:\"0x4f3a80620613d18a5073108f56558c7cbf0020c8ccb1acbad2c1f1fe3714e5ce\"){blockNumbertoAddressHashfromAddressHashcreatedContractAddressHashvaluestatusnoncehasherrorgasgasPricegasUsedcumulativeGasUsedidindexinputrsv}}""}'
```

## **Queries**

Blockscout's GraphQL API provides queries and a subscription. You can view them in the GraphQL interface in the `Docs` menu. Example Queries:

| Query                                           | Description                 | Example                                                                                                                                    |
| ----------------------------------------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| address(hash: AddressHash!): Address            | Gets an address by hash     | \{address(hash: "0x1fddEc96688e0538A316C64dcFd211c491ECf0d8") \{hash, contractCode} }                                                      |
| addresses (hashes: \[AddressHash!]): \[Address] | Gets addresses by hashes    | \{addresses(hashes: \["0x1fddEc96688e0538A316C64dcFd211c491ECf0d8", "0x3948c17c0f45017064858b8352580267a85a762c"]) \{hash, contractCode} } |
| block(number: Int!): Block                      | Gets a block by number      | \{block(number: 1) \{parentHash, size, nonce}}                                                                                             |
| transaction (hash: FullHash!): Transaction      | Gets a transaction by hash. | \{transaction(hash: "0xc391da8f433b3bea0b3eb45da40fdd194c7a0e07d1b5ad656bf98940f80a6cf6") \{input, gasUsed}}                               |

<Frame caption="Open Documentation Explorer">
  <img src="/images/22474e96-image.jpeg" />
</Frame>

<Frame caption="Doc explorer open">
  <img src="/images/99ffbb30-image.jpeg" />
</Frame>

### Example Query to retrieve transactions for a specific address

```javascript
{
  address(hash: "0x...") {
    transactions(first:5) {
      edges {
        node {
          blockNumber
          createdContractAddressHash
          fromAddressHash
          gas
          hash
        }
      }
    }
  }
}
```

Note that transactions can accept the following arguments:

- first

- after

- before

================================================
FILE: devs/apis/requests-and-limits.mdx
================================================

---

## title: "Requests & Limits"

The default rate limit for requests is 10 requests/second set via the `API_RATE_LIMIT` variable. This applies to global requests which do not originate from a whitelisted address or do not use an API key.

- **Individual API key**: An API key can be [created by the user in the My Account section](/using-blockscout/my-account/api-keys) (currently available on select instances). Requests made using an individual API key are limited to 10 req/sec but are not shared by other users.

- **Static API key**: A per instance API key (_note this functionality was created prior to individual API keys and may have limited utility_) can be managed via the `API_RATE_LIMIT_STATIC_API_KEY` variable.

- **IP Whitelist**: A default limit can be applied to whitelisted IPs via the `API_RATE_LIMIT_WHITELISTED_IP` variable. This can be used to assign custom limits to prioritized applications.

================================================
FILE: devs/apis/rest.mdx
================================================

---

title: "REST API Endpoints"
sidebarTitle: "Overview"

---

REST API methods are used to render the UI for new versions of Blockscout. These can be accessed and used to get many types of information. Methods parameters and schemas are available at _https\://instance-name/api-docs_ (ie [https://eth.blockscout.com/api-docs](https://eth.blockscout.com/api-docs))

<Info>
Additional information:

- [Stats queries](/devs/apis/rest/stats-api): Access pre-calculated statistics for a chain

- [Interpreter queries](/devs/apis/rest/interpreter-api): Transactions populated with contract names, methods, etc for easy interpretation

<Frame>
![](/images/851df441-image.jpeg)
</Frame>

</Info>

<Frame caption="">
  <img src="/images/ac3d021a-image.jpeg" />
</Frame>

## Pagination

Blockscout uses the keyset pagination method to quickly return results. By default an API response returns the first 50 results. To access additional results (in groups of 50), add the `next_page_params` to your query.

For example, open [https://eth.blockscout.com/api/v2/transactions](https://eth.blockscout.com/api/v2/transactions) and scroll to the bottom of the response.

<Frame caption="Example response from transactions query">
  <img src="/images/d5bea84e-image.jpeg" />
</Frame>

You will see the `next_page_params` object. Add the parameters from this object to your next query to receive the next 50 results.

[https://eth.blockscout.com/api/v2/transactions?block_number=18678766\&index=119\&items_count=50](https://eth.blockscout.com/api/v2/transactions?block_number=18678766&index=119&items_count=50)

Repeat this process to continue receiving results in groups of 50 (remove params and substitute the new `next_page_params` found in the body of the query).

<Frame caption="">
  <img src="/images/520935a2-image.jpeg" />
</Frame>

In this example, the query to receive the next 50 results would be:

[https://eth.blockscout.com/api/v2/transactions?block_number=18678766\&index=69\&items_count=100](https://eth.blockscout.com/api/v2/transactions?block_number=18678766&index=69&items_count=100)

================================================
FILE: devs/apis/rpc.mdx
================================================

---

title: "JSON RPC & ETH Compatible RPC Endpoints"
sidebarTitle: "Overview"
description: API designed for ease of use
icon: "exchange-alt"

---

This API is provided for developers transitioning applications from Etherscan to BlockScout and applications requiring general API and data support. It supports GET and POST requests.

<Info>
URLs vary by instance. With typical installations, access the API by adding `/api` to the end of the url. For example with the Sepolia instance.

- URL: [https://eth-sepolia.blockscout.com](https://eth-sepolia.blockscout.com/)

- API URL: [https://eth-sepolia.blockscout.com/api](https://eth-sepolia.blockscout.com/api)

An example query includes a module and action(s)/parameters. For example: [https://eth-sepolia.blockscout.com/api?module=**account**\&action=**listaccounts**\&page=2\&offset=5](https://eth-sepolia.blockscout.com/api?module=account&action=listaccounts&page=2&offset=5)

</Info>

The following modules are supported. Click through to see specific endpoints and parameters.

|                                           |                       |
| ----------------------------------------- | --------------------- |
| [Account](/devs/apis/rpc/account)         | `?module=account`     |
| [Logs](/devs/apis/rpc/logs)               | `?module=logs`        |
| [Token](/devs/apis/rpc/token)             | `?module=token`       |
| [Stats](/devs/apis/rpc/stats)             | `?module=stats`       |
| [Block](/devs/apis/rpc/block)             | `?module=block`       |
| [Contract](/devs/apis/rpc/contract)       | `?module=contract`    |
| [Transaction](/devs/apis/rpc/transaction) | `?module=transaction` |

================================================
FILE: devs/apis/rest/interpreter-api.mdx
================================================

---

## title: "Interpreter API"

### https\://eth.blockscout.com/api/v2/transactions/transaction_hash/summary

<Info>
The Interpreter API is currently in development. This REST API service will provide human-readable information regarding transactions, addresses and more.

</Info>

## How It Works

The Transactions Interpreter Service is designed to process blockchain transactions by extracting and analyzing relevant information to generate a summary of the transaction. The process follows several distinct phases:

1. **Transaction Hash Reception** : The service receives a transaction hash, which triggers the processing pipeline.

2. **Data Retrieval** : The service automatically retrieves necessary transaction data from the blockchain using the provided transaction hash.

3. **Initial Validation** : The input data undergoes validation to ensure authenticity and correctness before further processing.

4. **Data Processing** : The retrieved transaction data is processed, involving multiple phases:

   1. **Pre-LLM Phase** : During this phase, the service attempts to classify and interpret the on-chain actions using predefined algorithms. This step includes determining the type of action (e.g., transfer, minting, etc.) based on the transaction data.

   2. **LLM Phase** : If the type of action cannot be determined algorithmically in the Pre-LLM phase, the service leverages a Language Learning Model (LLM) to infer the type of on-chain action.

5. **Transaction Summary Generation** : After the classification, the service generates a summary of the transaction, which is returned as the response. The summary includes key details about the transaction and is structured according to a specific template.

## Response Structure

The response from the Transactions Interpreter Service is structured as follows (will vary depending on the specific case):

### **Success Response**

```json
{
    "success": true,
    "data": {
        "summaries": [
            {
                "summary_template": "{action_type} {amount} {token} to {to_address}",
                "summary_template_variables": {
                    "action_type": {
                        "type": "string",
                        "value": "Transfer"
                    },
                    "amount": {
                        "type": "currency",
                        "value": "7800"
                    },
                    "token": {
                        "type": "token",
                        "value": {
                            "address": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
                            "circulating_market_cap": "34593435047.40006",
                            "decimals": "6",
                            "exchange_rate": "1.001",
                            "holders": "2761518",
                            "icon_url": "<https://assets.coingecko.com/coins/images/6319/small/usdc.png?1696506694>",
                            "name": "USD Coin",
                            "symbol": "USDC",
                            "total_supply": "25611927821576420",
                            "type": "ERC-20",
                            "volume_24h": "8858197053.476923"
                        }
                    },
                    "to_address": {
                        "type": "address",
                        "value": {
                            "hash": "0x242ba6d68FfEb4a098B591B32d370F973FF882B7"
                        }
                    }
                }
            }
        ],
        "debug_data": {
            "transaction_hash": "0xea7cbead745789346343435cf2a0910887ab0ebef08af07cbd2f0920a2c628da",
            "model_classification_type": "transfer",
            "post_llm_classification_type": "transfer",
            "is_prompt_truncated": false,
            "summary_template": {
                "transfer": {
                    "template_name": "Generic-Transfer",
                    "template_vars": {
                        "strippedInput": "<stripped data>",
                        "decodedInput": "<decoded data>",
                        "tokenTransfers": [<token transfer details>],
                        "isErc20Transfer": true,
                        "erc20Amount": "7800",
                        "isNftTransfer": false,
                        "token": {
                            "address": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
                            "circulating_market_cap": "34593435047.40006",
                            "decimals": "6",
                            "exchange_rate": "1.001",
                            "holders": "2761518",
                            "icon_url": "<https://assets.coingecko.com/coins/images/6319/small/usdc.png?1696506694>",
                            "name": "USD Coin",
                            "symbol": "USDC",
                            "total_supply": "25611927821576420",
                            "type": "ERC-20",
                            "volume_24h": "8858197053.476923"
                        },
                        "nftAmount": null,
                        "toAddress": {
                            "hash": "0x242ba6d68FfEb4a098B591B32d370F973FF882B7"
                        }
                    }
                }
            }
        }
    }
}
```

### **Response Variable Types**

The response from the service can contain the following types of data:

- `number`: Numerical values.

- `string`: Textual data.

- `array`: An array of items.

- `currency`: Represents a monetary value.

- `token`: Information related to a cryptocurrency or token.

- `address`: Blockchain address information.

- `timestamp`: A date and time representation.

- `domain`: Domain name data.

- `code`: Code snippets or encoded data.

These types are used to ensure that the data returned in the summary is consistent and properly structured.

## Error Handling

If the service encounters an error, it returns a structured error response:

- **Error Response**:

```json
{
  "success": false,
  "error": {
    "id": "v_ap_rd_1",
    "code": "INVALID_API_PARAMS",
    "message": "Invalid API parameters",
    "error_data": [
      {
        "parameter": "data",
        "message": "Invalid parameter data. Please ensure the input is well formed."
      }
    ]
  }
}
```

### **Attributes of the Error Object**

- `id`: A unique identifier for the error, used for debugging purposes.

- `code`: A code representing the type of error.

- `message`: A user-friendly message that can be displayed on the front end.

- `error_data`: An array containing details about the invalid parameters.

================================================
FILE: devs/apis/rest/stats-api.mdx
================================================

---

## title: "Stats API"

The [stats microservice](https://github.com/blockscout/blockscout-rs/tree/main/stats) collects data from a Blockscout instance and calculates statistics based on predefined values. The calculated data is available through a REST API, providing access to this statistical information.

_Endpoint info in process_

================================================
FILE: devs/apis/rpc/account.mdx
================================================

---

title: "Account"
description: "?module=account"

---

### `https://instance_base_url/api?module=account`

## Return balance from a provided block

`eth_get_balance`

Mimics Ethereum JSON RPC's eth_getBalance

**Example:**

```javascript
https://instance_base_url/api
   ?module=account
   &action=eth_get_balance
   &address={addressHash}
```

<Tabs>
  <Tab title="Request Params">
    | Parameter   | Description                                                                                                                                                                                                                                                 |
    | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | **address** | `string` containing the address hash.                                                                                                                                                                                                                       |
    | block       | optional. Block number as a string, or `latest`, `earliest` or `pending` Latest is the latest balance in a _consensus_ block. Earliest is the first recorded balance for the address. Pending is the latest balance in a consensus _or_ nonconsensus block. |
  </Tab>
  <Tab title="Example Result">
    ```json
    {
      "id": 1,
      "jsonrpc": "2.0",
      "result": "0x0234c8a3397aab58"
    }
    ```
  </Tab>
</Tabs>

## Get the native token balance for an address

`balance`

Many chains use their own native tokens. On Ethereum, this will return the result in "Ether", on Gnosis it will be "xDai", etc. Results are returned in wei.

**Example:**

```javascript
https://instance_base_url/api
   ?module=account
   &action=balance
   &address={addressHash}
```

<Tabs>
  <Tab title="Request Params">
    | Parameter   | Description                           |
    | ----------- | ------------------------------------- |
    | **address** | `string` containing the address hash. |
  </Tab>
  <Tab title="Example Result">
    ```json
    {
      "message": "OK",
      "result": "663046792267785498951364",
      "status": "1"
    }
    ```
  </Tab>
</Tabs>

<Info>
  Also available through a GraphQL `address` query.
</Info>

<Info>
  If the balance hasn't been updated recently, the node is double-checked to fetch the absolute latest balance. This will not be reflected in the current request, but once it is updated, subsequent requests will show the updated balance. If you want to know if there is a check for another balance, use the `balancemulti` action. That contains a property called `stale` that will let you know to recheck that balance in the near future.
</Info>

## Get balance for multiple addresses

`balancemulti`

**Example:**

```javascript
https://instance_base_url/api
   ?module=account
   &action=balancemulti
   &address={addressHash1,addressHash2,addressHash3}
```

<Tabs>
  <Tab title="Request Params">
    | Parameter   | Description                                                                  |
    | ----------- | ---------------------------------------------------------------------------- |
    | **address** | `string` containing the address hash, comma separated. **Max 20 addresses.** |
  </Tab>
  <Tab title="Example Result">
    ```json
    {
      "message": "OK",
      "result": [
        {
          "account": "0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a",
          "balance": "40807168566070000000000",
          "stale": true
        },
        {
          "account": "0x63a9975ba31b0b9626b34300f7f627147df1f526",
          "balance": "332567136222827062478",
          "stale": false
        },
        {
          "account": "0x198ef1ec325a96cc354c7266a038be8b5c558f67",
          "balance": "185178830000000000",
          "stale": false
        }
      ],
      "status": "1"
    }
    ```
  </Tab>
</Tabs>

<Info>
  Also available through a GraphQL 'addresses' query
</Info>

<Info>
  If the balance hasn't been updated in a long time, the node is double checked to fetch the absolute latest balance. This is not reflected in the current request, but once it is updated, subsequent requests will show the updated balance. The `stale` attribute will be set to `true` if a new balance is being fetched.
</Info>

## Get pending transactions by address

`pendingtxlist`

**Example:**

```javascript
https://instance_base_url/api
   ?module=account
   &action=pendingtxlist
   &address={addressHash}
   &page=1
   &offset=5
```

<Tabs>
  <Tab title="Request Params">
    | Parameter   | Description                                                                                             |
    | ----------- | ------------------------------------------------------------------------------------------------------- |
    | **address** | `string` containing the address hash.                                                                   |
    | page        | optional `integer` representing the page number used for pagination. 'offset' must also be provided.    |
    | offset      | optional `integer` representing number of transactions returned per page. `page` must also be provided. |
  </Tab>
  <Tab title="Example Result">
    ```json
    {
      "message": "OK",
      "result": [
        {
          "contractAddress": "",
          "cumulativeGasUsed": "122207",
          "from": "0x3fb1cd2cd96c6d5c0b5eb3322d807b34482481d4",
          "gas": "122261",
          "gasPrice": "50000000000",
          "gasUsed": "122207",
          "hash": "0x98beb27135aa0a25650557005ad962919d6a278c4b3dde7f4f6a3a1e65aa746c",
          "input": "0xf00d4b5d000000000000000000000000036c8cecce8d8bbf0831d840d7f29c9e3ddefa63000000000000000000000000c5a96db085dda36ffbe390f455315d30d6d3dc52",
          "nonce": "0",
          "to": "0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae",
          "value": "0"
        }
      ],
      "status": "1"
    }
    ```
  </Tab>
</Tabs>

## Get transactions by address

`txlist`

Maximum of 10,000 transactions. Also available through a GraphQL 'address' query. For faster results, specify a smaller block range to search using the `startblock` and `endblock` parameters

**Example:**

```javascript
https://instance_base_url/api
   ?module=account
   &action=txlist
   &address={addressHash}
   &startblock=555555
   &endblock=666666
   &page=1
   &offset=5
   &sort=asc
```

<Tabs>
  <Tab title="Request Params">
    | Parameter       | Description                                                                                                                                                          |
    | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | **address**     | `string` containing the address hash.                                                                                                                                |
    | sort            | optional sorting preference, `asc` for ascending and `desc` for descending. Descending is default.                                                                   |
    | startblock      | optional `integer` block number to start transaction search                                                                                                          |
    | endblock        | optional `integer` block number to stop transaction search.                                                                                                          |
    | page            | optional `integer` representing the page number used for pagination. `offset` must also be provided.                                                                 |
    | offset          | optional `integer` representing number of transactions returned per page. `page` must also be provided.                                                              |
    | filter_by       | optional string representing the field to filter by. Values include `to` and `from`. If none provided returns transactions that match to, from, or contract address. |
    | start_timestamp | optional starting block unix timestamp.                                                                                                                              |
    | end_timestamp   | optional ending block unix timestamp.                                                                                                                                |
  </Tab>
  <Tab title="Example Result">
    ```json
    {
      "message": "OK",
      "result": [
        {
          "blockHash": "0x373d339e45a701447367d7b9c7cef84aab79c2b2714271b908cda0ab3ad0849b",
          "blockNumber": "65204",
          "confirmations": "5994246",
          "contractAddress": "",
          "cumulativeGasUsed": "122207",
          "from": "0x3fb1cd2cd96c6d5c0b5eb3322d807b34482481d4",
          "gas": "122261",
          "gasPrice": "50000000000",
          "gasUsed": "122207",
          "hash": "0x98beb27135aa0a25650557005ad962919d6a278c4b3dde7f4f6a3a1e65aa746c",
          "input": "0xf00d4b5d000000000000000000000000036c8cecce8d8bbf0831d840d7f29c9e3ddefa63000000000000000000000000c5a96db085dda36ffbe390f455315d30d6d3dc52",
          "isError": "0",
          "methodId": "0xf00d4b5d",
          "nonce": "0",
          "timeStamp": "1439232889",
          "to": "0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae",
          "transactionIndex": "0",
          "txreceipt_status": "1",
          "value": "0"
        }
      ],
      "status": "1"
    }
    ```
  </Tab>
</Tabs>

## Get internal transactions

`txlistinternal`

Up to a maximum of 10,000 internal transactions. Also available through a GraphQL 'transaction' query. For faster results, specify a smaller block range to search using the start_block and end_block parameters.

**Example:**

```javascript
https://instance_base_url/api
   ?module=account
   &action=txlistinternal
   &startblock=555555
   &endblock=666666
   &page=1
   &offset=5
   &sort=asc
   &include_zero_value=true
```

<Tabs>
  <Tab title="Request Params">
    | Parameter          | Description                                                                                                                                          |
    | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
    | **txhash**         | optional `string` representing the transaction hash to check for internal transactions                                                               |
    | address            | optional `string` containing the address hash.                                                                                                       |
    | sort               | optional sorting preference, `asc` for ascending and `desc` for descending. Descending is default. **Only available if 'address' is provided.**      |
    | startblock         | optional `integer` block number to start transaction search. **Only available if 'address' is provided.**                                            |
    | endblock           | optional `integer` block number to stop transaction search. **Only available if 'address' is provided.**                                             |
    | page               | optional `integer` representing the page number used for pagination. `offset` must also be provided. **Only available if 'address' is provided.**    |
    | offset             | optional `integer` representing number of transactions returned per page. `page` must also be provided. **Only available if 'address' is provided.** |
    | include_zero_value | optional `boolean` representing whether to include zero-value transactions.                                                                          |
  </Tab>
  <Tab title="Example Result">
    ```json
    {
      "message": "OK",
      "result": [
        {
          "blockNumber": "6153702",
          "callType": "delegatecall",
          "contractAddress": "0x883103875d905c11f9ac7dacbfc16deb39655361",
          "errCode": "",
          "from": "0x2ca1e3f250f56f1761b9a52bc42db53986085eff",
          "gas": "814937",
          "gasUsed": "536262",
          "index": "0",
          "input": "",
          "isError": "0",
          "timeStamp": "1534362606",
          "to": "",
          "transactionHash": "0xd65b788c610949704a5f9aac2228c7c777434dfe11c863a12306f57fcbd8cdbb",
          "type": "call",
          "value": "5488334153118633"
        }
      ],
      "status": "1"
    }
    ```
  </Tab>
</Tabs>

## Get ERC-20 token transfer events by address

`tokentx`

Up to a maximum of 10,000 ERC-20 token transfer events. Also available through the GraphQL `token_transfers` query.

**Example:**

```javascript
https://instance_base_url/api
   ?module=account
   &action=tokentx
   &address={addressHash}
   &page=1
   &offset=10
   &sort=asc
```

<Tabs>
  <Tab title="Request Params">
    | Parameter        | Description                                                                                                      |
    | ---------------- | ---------------------------------------------------------------------------------------------------------------- |
    | **address**      | required if no `contractaddress` parameter is provided, `string` containing the address hash.                    |
    | contract address | required if no `address` parameter is provided, `string` with the token contract address to identify a contract. |
    | sort             | optional sorting preference, `asc` for ascending and `desc` for descending. Descending is default.               |
    | startblock       | optional `integer` block number to start transaction search                                                      |
    | endblock         | optional `integer` block number to stop transaction search.                                                      |
    | page             | optional `integer` representing the page number used for pagination. `offset` must also be provided.             |
    | offset           | optional `integer` representing number of transactions returned per page. `page` must also be provided.          |
  </Tab>
  <Tab title="Example Result">
    ```json
    {
      "message": "OK",
      "result": [
        {
          "blockHash": "0x6169c5dc05d0051564ba3eae8ebfbdefda640c5f5ffc095846b8aed0b44f64ea",
          "blockNumber": "5997843",
          "confirmations": "199384",
          "contractAddress": "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
          "cumulativeGasUsed": "1043649",
          "from": "0x4e83362442b8d1bec281594cea3050c8eb01311c",
          "gas": "44758",
          "gasPrice": "7000000000",
          "gasUsed": "37298",
          "hash": "0xd65b788c610949704a5f9aac2228c7c777434dfe11c863a12306f57fcbd8cdbb",
          "input": "0xa9059cbb00000000000000000000000021e21ba085289f81a86921de890eed30f1ad23750000000000000000000000000000000000000000000000008ac7230489e80000",
          "methodId": "0xa9059cbb",
          "nonce": "765",
          "timeStamp": "1532086946",
          "to": "0x21e21ba085289f81a86921de890eed30f1ad2375",
          "tokenDecimal": "18",
          "tokenName": "Maker",
          "tokenSymbol": "MKR",
          "transactionIndex": "27",
          "value": "10000000000000000000"
        }
      ],
      "status": "1"
    }
    ```
  </Tab>
</Tabs>

**Usage:**

- To fetch ERC-20 token transfers by address, specify `address` parameter
- To fetch ERC-20 token transfers by token, specify `contractaddress` parameter
- To fetch ERC-20 token transfers by address filtered by token, specify both `address` and `contractaddress` parameters

## Get ERC-721 token transfer events by address

`tokennfttx`

**Example:**

```javascript
https://instance_base_url/api
   ?module=account
   &action=tokennfttx
   &address={addressHash}
   &page=1
   &offset=10
   &sort=asc
```

<Tabs>
  <Tab title="Request Params">
    | Parameter       | Description                                                                                                      |
    | --------------- | ---------------------------------------------------------------------------------------------------------------- |
    | **address**     | required if no `contractaddress` parameter is provided, `string` containing the address hash.                    |
    | contractaddress | required if no `address` parameter is provided, `string` with the token contract address to identify a contract. |
    | sort            | optional sorting preference, `asc` for ascending and `desc` for descending. Descending is default.               |
    | startblock      | optional `integer` block number to start transaction search                                                      |
    | endblock        | optional `integer` block number to stop transaction search.                                                      |
    | page            | optional `integer` representing the page number used for pagination. `offset` must also be provided.             |
    | offset          | optional `integer` representing number of transactions returned per page. `page` must also be provided.          |
  </Tab>
  <Tab title="Example Result">
    ```json
    {
      "message": "OK",
      "result": [
        {
          "blockHash": "0xd033832ffd0480a3e3b16362320d4ea247e6905117eaa8741a845ac51bd51b1f",
          "blockNumber": "22895463",
          "confirmations": "13",
          "contractAddress": "0xb6bcaa0c71c90b26f4190418d77ad0b95f656f2c",
          "cumulativeGasUsed": "23511347",
          "from": "0xc8fb7aca6b31dc905647d31ac0383f5b30d9be31",
          "functionName": "transferFrom(address from, address to, uint256 id)",
          "gas": "108139",
          "gasPrice": "5596263013",
          "gasUsed": "71227",
          "hash": "0x76be4925c1a5f268c12a3ae7b60486293a96ebd28dc289064ca687708de46397",
          "input": "0x23b872dd000000000000000000000000c8fb7aca6b31dc905647d31ac0383f5b30d9be31000000000000000000000000d2a999bc8e4ea85131c1800e2a5c606d127533330000000000000000000000000000000000000000000000000000000000000445",
          "methodId": "0x23b872dd",
          "nonce": "376",
          "timeStamp": "1752231191",
          "to": "0xd2a999bc8e4ea85131c1800e2a5c606d12753333",
          "tokenDecimal": "0",
          "tokenID": "1093",
          "tokenName": "SpaceRush Bounty Hunters",
          "tokenSymbol": "SRB",
          "transactionIndex": "360"
        }
      ],
      "status": "1"
    }
    ```
  </Tab>
</Tabs>

**Usage:**

- To fetch ERC-721 token transfers by address, specify `address` parameter
- To fetch ERC-721 token transfers by token, specify `contractaddress` parameter
- To fetch ERC-721 token transfers by address filtered by token, specify both `address` and `contractaddress` parameters

## Get ERC-1155 token transfer events by address

`token1155tx`

**Example:**

```javascript
https://instance_base_url/api
   ?module=account
   &action=token1155tx
   &address={addressHash}
   &page=1
   &offset=10
   &sort=asc
```

<Tabs>
  <Tab title="Request Params">
    | Parameter       | Description                                                                                                      |
    | --------------- | ---------------------------------------------------------------------------------------------------------------- |
    | address         | required if no `contractaddress` parameter is provided, `string` containing the address hash.                    |
    | contractaddress | required if no `address` parameter is provided, `string` with the token contract address to identify a contract. |
    | sort            | optional sorting preference, `asc` for ascending and `desc` for descending. Descending is default.               |
    | startblock      | optional `integer` block number to start transaction search                                                      |
    | endblock        | optional `integer` block number to stop transaction search.                                                      |
    | page            | optional `integer` representing the page number used for pagination. `offset` must also be provided.             |
    | offset          | optional `integer` representing number of transactions returned per page. `page` must also be provided.          |
  </Tab>
  <Tab title="Example Result">
    ```json
    {
      "message": "OK",
      "result": [
        {
          "blockNumber": "22767293",
          "timeStamp": "1750683671",
          "hash": "0xe63f23bc2882dc083cf77c3a9a32efe62a2f045334232c92ed63716368eb56c9",
          "nonce": "332",
          "blockHash": "0x5960ef1fb1a3f424a90723238cf5d91a996cb7344f9ff613f00942ea4f7bcf31",
          "transactionIndex": "52",
          "gas": "198549",
          "gasPrice": "3662960410",
          "gasUsed": "150369",
          "cumulativeGasUsed": "8276535",
          "input": "deprecated",
          "methodId": "0xa64dfa75",
          "functionName": "multiConfigure(address token,tuple config)",
          "contractAddress": "0x81d5cedef14934957232e6673e1b37375e6ec5cd",
          "from": "0x0000000000000000000000000000000000000000",
          "to": "0xa6718ebedb87b85acfb39d8a02759f1be7cb01ed",
          "tokenID": "43",
          "tokenValue": "1",
          "tokenName": "Colored rombs",
          "tokenSymbol": "CR",
          "confirmations": "128226"
        }
      ],
      "status": "1"
    }
    ```
  </Tab>
</Tabs>

**Usage:**

- To fetch ERC-1155 token transfers by address, specify `address` parameter
- To fetch ERC-1155 token transfers by token, specify `contractaddress` parameter
- To fetch ERC-1155 token transfers by address filtered by token, specify both `address` and `contractaddress` parameters

## Get ERC-404 token transfer events by address

`token404tx`

**Example:**

```javascript
https://instance_base_url/api
   ?module=account
   &action=token404tx
   &address={addressHash}
   &page=1
   &offset=10
   &sort=asc
```

<Tabs>
  <Tab title="Request Params">
    | Parameter       | Description                                                                                                      |
    | --------------- | ---------------------------------------------------------------------------------------------------------------- |
    | address         | required if no `contractaddress` parameter is provided, `string` containing the address hash.                    |
    | contractaddress | required if no `address` parameter is provided, `string` with the token contract address to identify a contract. |
    | sort            | optionalsorting preference, `asc` for ascending and `desc` for descending. Descending is default.                |
    | startblock      | optional `integer` block number to start transaction search                                                      |
    | endblock        | optional `integer` block number to stop transaction search.                                                      |
    | page            | optional`integer` representing the page number used for pagination. `offset` must also be provided.              |
    | offset          | optional `integer` representing number of transactions returned per page. `page` must also be provided.          |
  </Tab>
  <Tab title="Example Result">
    ```json
    {
      "message": "OK",
      "result": [
        // ERC-20 like case
        {
          "blockHash": "0x600684206fd92aa22bf0d24e376fa0433bd7247178919e31d6c8c02a8a704e78",
          "blockNumber": "22895119",
          "confirmations": "532",
          "contractAddress": "0x9e9fbde7c7a83c43913bddc8779158f1368f0413",
          "cumulativeGasUsed": "2148253",
          "from": "0x0d0707963952f2fba59dd06f2b425ace40b492fe",
          "functionName": "transfer(address to, uint256 amount)",
          "gas": "3000000",
          "gasPrice": "4992772042",
          "gasUsed": "202651",
          "hash": "0x85eba6287c25630b0f2764954e15294937ef5a423727c2236223bfb6864d2c6f",
          "input": "0xa9059cbb00000000000000000000000028e0e453997430fa2168c7efc1899a2c110e53b500000000000000000000000000000000000000000000000028536338c182e000",
          "methodId": "0xa9059cbb",
          "nonce": "8218148",
          "timeStamp": "1752227039",
          "to": "0x28e0e453997430fa2168c7efc1899a2c110e53b5",
          "tokenDecimal": "0",
          "tokenID": "",
          "tokenName": "Pandora",
          "tokenSymbol": "PANDORA",
          "transactionIndex": "44",
          "value": "2905775280000000000"
        },
        // ERC-721 like case
        {
          "blockHash": "0x600684206fd92aa22bf0d24e376fa0433bd7247178919e31d6c8c02a8a704e78",
          "blockNumber": "22895119",
          "confirmations": "532",
          "contractAddress": "0x9e9fbde7c7a83c43913bddc8779158f1368f0413",
          "cumulativeGasUsed": "2148253",
          "from": "0x0000000000000000000000000000000000000000",
          "functionName": "transfer(address to, uint256 amount)",
          "gas": "3000000",
          "gasPrice": "4992772042",
          "gasUsed": "202651",
          "hash": "0x85eba6287c25630b0f2764954e15294937ef5a423727c2236223bfb6864d2c6f",
          "input": "0xa9059cbb00000000000000000000000028e0e453997430fa2168c7efc1899a2c110e53b500000000000000000000000000000000000000000000000028536338c182e000",
          "methodId": "0xa9059cbb",
          "nonce": "8218148",
          "timeStamp": "1752227039",
          "to": "0x28e0e453997430fa2168c7efc1899a2c110e53b5",
          "tokenDecimal": "0",
          "tokenID": "97956",
          "tokenName": "Pandora",
          "tokenSymbol": "PANDORA",
          "transactionIndex": "44",
          "value": ""
        }
      ],
      "status": "1"
    }
    ```
  </Tab>
</Tabs>

**Usage:**

- To fetch ERC-404 token transfers by address, specify `address` parameter
- To fetch ERC-404 token transfers by token, specify `contractaddress` parameter
- To fetch ERC-404 token transfers by address filtered by token, specify both `address` and `contractaddress` parameters

## Get token account balance for token contract address

`tokenbalance`

**Example:**

```javascript
https://instance_base_url/api
   ?module=account
   &action=tokenbalance
   &contractaddress={contractAddressHash}
   &address={addressHash}
```

<Tabs>
  <Tab title="Request Params">
    | Parameter            | Description                                                           |
    | -------------------- | --------------------------------------------------------------------- |
    | **contract address** | `string` containing the contract address hash.                        |
    | **address**          | `string` containing the account address hash to retrieve balance for. |
  </Tab>
  <Tab title="Example Result">
    ```json
    {
      "message": "OK",
      "result": "135499",
      "status": "1"
    }
    ```
  </Tab>
</Tabs>

## Get list of tokens owned by address

`tokenlist`

**Example:**

```javascript
https://instance_base_url/api
   ?module=account
   &action=tokenlist
   &address={addressHash}
```

<Tabs>
  <Tab title="Request Params">
    | Parameter   | Description                                   |
    | ----------- | --------------------------------------------- |
    | **address** | `string` containing the account address hash. |
  </Tab>
  <Tab title="Example Result">
    ```json
    {
      "message": "OK",
      "result": [
        {
          "balance": "135499",
          "contractAddress": "0x0000000000000000000000000000000000000000",
          "decimals": "18",
          "name": "Example Token",
          "symbol": "ET",
          "type": "ERC-20"
        },
        {
          "balance": "1",
          "contractAddress": "0x0000000000000000000000000000000000000001",
          "decimals": "18",
          "name": "Example ERC-721 Token",
          "symbol": "ET7",
          "type": "ERC-721"
        }
      ],
      "status": "1"
    }
    ```
  </Tab>
</Tabs>

## Get list of blocks mined by address

`getminedblocks`

**Example:**

```javascript
https://instance_base_url/api
   ?module=account
   &action=getminedblocks
   &address={addressHash}
```

<Tabs>
  <Tab title="Request Params">
    | Parameter   | Description                                                                                             |
    | ----------- | ------------------------------------------------------------------------------------------------------- |
    | **address** | `string` containing the address hash.                                                                   |
    | page        | optional `integer` representing the page number used for pagination. 'offset' must also be provided.    |
    | offset      | optional `integer` representing number of transactions returned per page. `page` must also be provided. |
  </Tab>
  <Tab title="Example Result">
    ```json
    {
      "message": "OK",
      "result": [
        {
          "blockNumber": "3462296",
          "blockReward": "5194770940000000000",
          "timeStamp": "1491118514"
        }
      ],
      "status": "1"
    }
    ```
  </Tab>
</Tabs>

## Get a list of accounts and their balances

`listaccounts`

Lists accounts and native balances, sorted ascending by the time they were first seen by the explorer.

**Example:**

```javascript
https://instance_base_url/api
   ?module=account
   &action=listaccounts
   &address={addressHash}
   &page=1
   &offset=3
```

<Tabs>
  <Tab title="Request Params">
    | Parameter | Description                                                                                             |
    | --------- | ------------------------------------------------------------------------------------------------------- |
    | page      | optional `integer` representing the page number used for pagination. 'offset' must also be provided.    |
    | offset    | optional `integer` representing number of transactions returned per page. `page` must also be provided. |

    <Info>
      If the balance hasn't been updated in a long time, the node is double checked to fetch the absolute latest balance. This is not reflected in the current request, but once it is updated, subsequent requests will show the updated balance. The `stale` attribute will be set to `true` if a new balance is being fetched.
    </Info>

  </Tab>
  <Tab title="Example Result">
    ```json
    {
      "message": "OK",
      "result": [
        {
          "address": "0x3870c57fbf1d7e49b154269331c7bc66c64d8857",
          "balance": "3790064387342000000",
          "stale": false
        },
        {
          "address": "0x497d69ae30d7cca0aa84d647c6d85a59a82c16ef",
          "balance": "2047176464264000000",
          "stale": false
        },
        {
          "address": "0x9233042b8e9e03d5dc6454bbbe5aee83818ff103",
          "balance": "444111960222208758647",
          "stale": false
        }
      ],
      "status": "1"
    }
    ```
  </Tab>
</Tabs>

================================================
FILE: devs/apis/rpc/block.mdx
================================================

---

title: "Block"
description: "?module=block"

---

### `https://instance_base_url/api?module=block`

## Get block reward by block number

`getblockreward`

Returns the block reward and 'uncle' block rewards when applicable.

**Example:**

```javascript
https://instance_base_url/api
   ?module=block
   &action=getblockreward
   &blockno={blockNumber}
```

<Tabs>
  <Tab title="Request Param">
    | Parameter | Description                                                     |
    | --------- | --------------------------------------------------------------- |
    | blockno   | `integer` block number to check block rewards for eg. `2165403` |
  </Tab>
  <Tab title="Example Result">
    ```json
    {
      "message": "OK",
      "result": {
        "blockMiner": "0x13a06d3dfe21e0db5c016c03ea7d2509f7f8d1e3",
        "blockNumber": "2165403",
        "blockReward": "5314181600000000000",
        "timeStamp": "1472533979",
        "uncleInclusionReward": null,
        "uncles": null
      },
      "status": "1"
    }
    ```
  </Tab>
</Tabs>

## Get estimated block countdown time by block number

`getblockcountdown`

Returns the estimated time remaining, in seconds, until a certain block is included in blockchain.

**Example:**

```javascript
https://instance_base_url/api
   ?module=block
   &action=getblockcountdown
   &blockno={blockNumber}
```

<Tabs>
  <Tab title="Request Params">
    | Parameter | Description                                                     |
    | --------- | --------------------------------------------------------------- |
    | blockno   | `integer` block number to check block rewards for eg. `2165403` |
  </Tab>
  <Tab title="Example Result">
    ```json
    {
      "message": "OK",
      "result": {
        "CurrentBlock": "115334213",
        "CountdownBlock": "116015880",
        "RemainingBlock": "681667",
        "EstimateTimeInSec": "1363349.0"
      },
      "status": "1"
    }
    ```
  </Tab>
</Tabs>

## Get block number by time stamp

`getblocknobytime`

Returns the block number created closest to a provided timestamp.

**Example:**

```javascript
https://instance_base_url/api
   ?module=block
   &action=getblocknobytime
   &timestamp={blockTimestamp}
   &closest={before/after}
```

<Tabs>
  <Tab title="Request Param">


    | Parameter | Description                                                          |
    | --------- | -------------------------------------------------------------------- |
    | timestamp | `integer` representing the Unix timestamp in seconds.                |
    | closest   | closest block to the provided timestamp, either `before` or `after`. |

    Note: [How to convert date/time to a Unix timestamp](https://www.unixtimestamp.com/).

  </Tab>
  <Tab title="Example Result">
    ```json
    {
       "message":"OK",
       "result":{
          "blockNumber":"23592675"
       },
       "status":"1"
    }
    ```
  </Tab>
</Tabs>

## Get the latest block number

`eth_block_number`

Mimics Ethereum JSON RPC's eth_blockNumber.

**Example:**

```javascript
https://instance_base_url/api
   ?module=block
   &action=eth_block_number
```

<Tabs>
  <Tab title="Request Params">
    | Parameter | Description                                                           |
    | --------- | --------------------------------------------------------------------- |
    | id        | optional nonnegative integer that represents the json rpc request id. |

    More on [json rpc request id](https://www.jsonrpc.org/specification).

  </Tab>
  <Tab title="Example Result">
    ```json
    {
      "jsonrpc": "2.0",
      "result": "0x103538a",
      "id": 1
    }
    ```
  </Tab>
</Tabs>

================================================
FILE: devs/apis/rpc/contract.mdx
================================================

---

title: "Contract"
description: ?module=contract

---

### `https://instance_base_url/api?module=contract`

## Get a list of contracts

`listcontracts`

List sorted in ascending order based on the time a contact was first indexed by the explorer. With filters \`unverified(2)\` the results will not be sorted for performance reasons.

**Example:**

```javascript
https://instance_base_url/api
   ?module=contract
   &action=listcontracts
```

<Tabs>
<Tab title="Request Param">

| Parameter                   | Description                                                                                                                    |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| page                        | optional nonnegative `integer` representing the page number used for pagination. 'offset' must also be provided.               |
| offset                      | optional nonnegative `integer` representing the max number of records to return when paginating. 'page' must also be provided. |
| filter                      | optional string `verified`\|`unverified`\|`empty`, or `1`\|`2`\|`3` respectively. Returns contracts with the requested status. |
| verified_at_start_timestamp | optional `unix timestamp` Represents the starting timestamp for verified contracts. Only used with `verified` filter.          |
| verified_at_end_timestamp   | optional `unix timestamp` Represents the ending timestamp for verified contracts. Only used with `verified` filter.            |

</Tab>
<Tab title="Example Result">

```json
{
  "message": "OK",
  "result": [
    {
      "ABI": "[{\n\"type\":\"event\",\n\"inputs\": [{\"name\":\"a\",\"type\":\"uint256\",\"indexed\":true},{\"name\":\"b\",\"type\":\"bytes32\",\"indexed\":false}],\n\"name\":\"Event\"\n}, {\n\"type\":\"event\",\n\"inputs\": [{\"name\":\"a\",\"type\":\"uint256\",\"indexed\":true},{\"name\":\"b\",\"type\":\"bytes32\",\"indexed\":false}],\n\"name\":\"Event2\"\n}, {\n\"type\":\"function\",\n\"inputs\": [{\"name\":\"a\",\"type\":\"uint256\"}],\n\"name\":\"foo\",\n\"outputs\": []\n}]\n",
      "CompilerVersion": "v0.2.1-2016-01-30-91a6b35",
      "ContractName": "Test",
      "OptimizationUsed": "1",
      "SourceCode": "pragma solidity >0.4.24;\n\ncontract Test {\nconstructor() public { b = hex\"12345678901234567890123456789012\"; }\nevent Event(uint indexed a, bytes32 b);\nevent Event2(uint indexed a, bytes32 b);\nfunction foo(uint a) public { emit Event(a, b); }\nbytes32 b;\n}\n"
    }
  ],
  "status": "1"
}
```

</Tab>
</Tabs>

## Get ABI for a verified contract

`getabi`

Also available through a GraphQL `addresses` query.

**Example:**

```javascript
https://instance_base_url/api
   ?module=contract
   &action=getabi
   &address={addressHash}
```

<Tabs>
<Tab title="Request Params">

| Parameter   | Description                           |
| ----------- | ------------------------------------- |
| **address** | `string` containing the address hash. |

</Tab>
<Tab title="Example Result">

```json
{
  "message": "OK",
  "result": "[{\"constant\":false,\"inputs\":[{\"name\":\"voucher_token\",\"type\":\"bytes32\"}],\"name\":\"burn\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"voucher_token\",\"type\":\"bytes32\"}],\"name\":\"is_expired\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"voucher_token\",\"type\":\"bytes32\"}],\"name\":\"is_burnt\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"name\":\"voucher_token\",\"type\":\"bytes32\"},{\"name\":\"_lifetime\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"}]",
  "status": "1"
}
```

</Tab>
</Tabs>

## Get contract source code for a verified contract

`getsourcecode`

Also available through a GraphQL `addresses` query.

**Example:**

```javascript
https://instance_base_url/api
   ?module=contract
   &action=getsourcecode
   &address={addressHash}
```

<Tabs>
<Tab title="Request Param">

| Parameter   | Description                           |
| ----------- | ------------------------------------- |
| **address** | `string` containing the address hash. |

</Tab>
<Tab title="Example Result">

```json
{
  "message": "OK",
  "result": {
    "ABI": "[{\n\"type\":\"event\",\n\"inputs\": [{\"name\":\"a\",\"type\":\"uint256\",\"indexed\":true},{\"name\":\"b\",\"type\":\"bytes32\",\"indexed\":false}],\n\"name\":\"Event\"\n}, {\n\"type\":\"event\",\n\"inputs\": [{\"name\":\"a\",\"type\":\"uint256\",\"indexed\":true},{\"name\":\"b\",\"type\":\"bytes32\",\"indexed\":false}],\n\"name\":\"Event2\"\n}, {\n\"type\":\"function\",\n\"inputs\": [{\"name\":\"a\",\"type\":\"uint256\"}],\n\"name\":\"foo\",\n\"outputs\": []\n}]\n",
    "CompilerVersion": "v0.2.1-2016-01-30-91a6b35",
    "ContractName": "Test",
    "FileName": "{sourcify path or empty}",
    "ImplementationAddress": "0x000000000000000000000000000000000000000e",
    "IsProxy": "true",
    "OptimizationUsed": "1",
    "SourceCode": "pragma solidity >0.4.24;\n\ncontract Test {\nconstructor() public { b = hex\"12345678901234567890123456789012\"; }\nevent Event(uint indexed a, bytes32 b);\nevent Event2(uint indexed a, bytes32 b);\nfunction foo(uint a) public { emit Event(a, b); }\nbytes32 b;\n}\n"
  },
  "status": "1"
}
```

</Tab>
</Tabs>

## Get contract creator address hash and creation transaction hash

`getcontractcreation`

Returns contract creator and transaction hash. Up to 10 contracts at the one request

**Example:**

```javascript
https://instance_base_url/api
   ?module=contract
   &action=getcontractcreation
   &contractaddresses={addressHash},{addressHash}
```

<Tabs>
<Tab title="Request Params">

| Parameter             | Description                                          |
| --------------------- | ---------------------------------------------------- |
| **contractaddresses** | `string` containing address hashes, separated by `,` |

</Tab>
<Tab title="Example Result">

```json
{
  "message": "OK",
  "result": [
    {
      "contractAddress": "0xdc2082945d55596bf39f362d9ec0f7f65edbb9dd",
      "contractCreator": "0xbb36c792b9b45aaf8b848a1392b0d6559202729e",
      "txHash": "0xe79426c9a5560cfbd78d0ef058e455c94483224ec265475583ff01ebdedceaf2"
    },
    {
      "contractAddress": "0x1b02da8cb0d097eb8d57a175b88c7d8b47997506",
      "contractCreator": "0xf87bc5535602077d340806d71f805ea9907a843d",
      "txHash": "0xe54bf38dfad760b8f96a76d8136d6540d74b02dafb5781746bf705bf7e647a3b"
    }
  ],
  "status": "1"
}
```

</Tab>
</Tabs>

## Verify a contract with its source code and contract creation information

`verify`

**Example:**

```text
https://instance_base_url/api
   ?module=contract
   &action=verify
   &addressHash={addressHash}
   &name={name}
   &compilerVersion={compilerVersion}
   &optimization={false}
   &contractSourceCode={contractSourceCode}
```

**Curl Post Example**

```sh
curl -d '{"addressHash":"0xc63BB6555C90846afACaC08A0F0Aa5caFCB382a1","compilerVersion":"v0.5.4+commit.9549d8ff", "contractSourceCode":"pragma solidity ^0.5.4; contract Test { }","name":"Test","optimization":false}' -H "Content-Type: application/json" -X POST "https://blockscout.com/poa/sokol/api?module=contract&action=verify"
```

<Info>
On successful submission you will receive a guid as a receipt. Use this with [`checkverifystatus`](/devs/apis/rpc/contract#return-status-of-a-verification-attempt)`to view verification status.`

</Info>

<Tabs>
<Tab title="Params">

| Parameter                      | Description                                                                   |
| ------------------------------ | ----------------------------------------------------------------------------- |
| **addressHash**                | `string` containing the address hash of the contract.                         |
| **name**                       | `string` containing the name of the contract.                                 |
| **compilerVersion**            | `string` containing the compiler version for the contract.                    |
| **optimization**               | `enum` whether or not compiler optimizations were enabled `0`=false, `1`=true |
| **contractSourceCode**         | `string` containing the source code of the contract.                          |
| constructorArguments           | optional `string` constructor argument data provided.                         |
| autodetectConstructorArguments | optional `boolean` whether or not automatically detect constructor argument.  |
| evmVersion                     | optional EVM version for the contract.                                        |
| optimizationRuns               | optional number of optimization runs used during compilation                  |
| library1Name                   | optional `string` name of the first library used.                             |
| library1Address                | optional `string` address of the first library used.                          |
| library2Name                   | optional `string` name of the second library used.                            |
| library2Address                | optional `string` address of the second library used.                         |
| library3Name                   | optional `string` name of the third library used.                             |
| library3Address                | optional `string` address of the third library used.                          |
| library4Name                   | optional `string` name of the fourth library used.                            |
| library4Address                | optional `string` address of the fourth library used.                         |
| library5Name                   | optional `string` name of the fifth library used.                             |
| library5Address                | optional `string` address of the fifth library used.                          |

</Tab>
<Tab title="Example Result">

```json
{
  "message": "OK",
  "result": {
    "ABI": "[{\n\"type\":\"event\",\n\"inputs\": [{\"name\":\"a\",\"type\":\"uint256\",\"indexed\":true},{\"name\":\"b\",\"type\":\"bytes32\",\"indexed\":false}],\n\"name\":\"Event\"\n}, {\n\"type\":\"event\",\n\"inputs\": [{\"name\":\"a\",\"type\":\"uint256\",\"indexed\":true},{\"name\":\"b\",\"type\":\"bytes32\",\"indexed\":false}],\n\"name\":\"Event2\"\n}, {\n\"type\":\"function\",\n\"inputs\": [{\"name\":\"a\",\"type\":\"uint256\"}],\n\"name\":\"foo\",\n\"outputs\": []\n}]\n",
    "CompilerVersion": "v0.2.1-2016-01-30-91a6b35",
    "ContractName": "Test",
    "ImplementationAddress": "0x000000000000000000000000000000000000000e",
    "IsProxy": "true",
    "OptimizationUsed": "1",
    "SourceCode": "pragma solidity >0.4.24;\n\ncontract Test {\nconstructor() public { b = hex\"12345678901234567890123456789012\"; }\nevent Event(uint indexed a, bytes32 b);\nevent Event2(uint indexed a, bytes32 b);\nfunction foo(uint a) public { emit Event(a, b); }\nbytes32 b;\n}\n"
  },
  "status": "1"
}
```

</Tab>
</Tabs>

## Verify a contract through [Sourcify](https://sourcify.dev/)

`verify_via_sourcify`

1. if a smart contract is already verified on Sourcify, it will automatically fetch the data from the [repo](https://repo.sourcify.dev/)

2. otherwise you need to upload source files and JSON metadata file(s).

**Example:**

```javascript
https://instance_base_url/api
 ?module=contract
 &action=verify_via_sourcify
 &addressHash={addressHash}
```

#### POST body example

```text
--6e1e4c11657c62dc1e4349d024de9e28
Content-Disposition: form-data; name="addressHash"

0xb77b7443e0F32F1FEBf0BE0fBd7124D135d0a525

--6e1e4c11657c62dc1e4349d024de9e28
Content-Disposition: form-data; name="files[0]"; filename="contract.sol"
Content-Type: application/json

...Source code...

--6e1e4c11657c62dc1e4349d024de9e28
Content-Disposition: form-data; name="files[1]"; filename="metadata.json"
Content-Type: application/json

...JSON metadata...

--6e1e4c11657c62dc1e4349d024de9e28--
```

<Tabs>
<Tab title="Params">

| Parameter       | Description                             |
| --------------- | --------------------------------------- |
| **addressHash** | `string` containing the address hash.   |
| files           | `array` with sources and metadata files |

</Tab>
<Tab title="Example">

```json
{
  "message": "OK",
  "result": {
    "ABI": "[{\n\"type\":\"event\",\n\"inputs\": [{\"name\":\"a\",\"type\":\"uint256\",\"indexed\":true},{\"name\":\"b\",\"type\":\"bytes32\",\"indexed\":false}],\n\"name\":\"Event\"\n}, {\n\"type\":\"event\",\n\"inputs\": [{\"name\":\"a\",\"type\":\"uint256\",\"indexed\":true},{\"name\":\"b\",\"type\":\"bytes32\",\"indexed\":false}],\n\"name\":\"Event2\"\n}, {\n\"type\":\"function\",\n\"inputs\": [{\"name\":\"a\",\"type\":\"uint256\"}],\n\"name\":\"foo\",\n\"outputs\": []\n}]\n",
    "CompilerVersion": "v0.2.1-2016-01-30-91a6b35",
    "ContractName": "Test",
    "ImplementationAddress": "0x000000000000000000000000000000000000000e",
    "IsProxy": "true",
    "OptimizationUsed": "1",
    "SourceCode": "pragma solidity >0.4.24;\n\ncontract Test {\nconstructor() public { b = hex\"12345678901234567890123456789012\"; }\nevent Event(uint indexed a, bytes32 b);\nevent Event2(uint indexed a, bytes32 b);\nfunction foo(uint a) public { emit Event(a, b); }\nbytes32 b;\n}\n"
  },
  "status": "1"
}
```

</Tab>
</Tabs>

## Verify a vyper contract with its source code and contract creation information

`verify_vyper_contract`

**Example**

```javascript
https://instance_base_url/api
 ?module=contract
 &action=verify_vyper_contract
 &addressHash={addressHash}
 &name={name}
 &compilerVersion={compilerVersion}
 &contractSourceCode={contractSourceCode}
```

**curl POST example**

```powershell
curl --location --request POST 'http://localhost:4000/api?module=contract&action=verify_vyper_contract' --form 'contractSourceCode="SOURCE_CODE"' --form 'name="Vyper_contract"' --form 'addressHash="0xE60B1B8bD493569a3E945be50A6c89d29a560Fa1"' --form 'compilerVersion="v0.2.12"'
```

<Tabs>
<Tab title="First Tab">

| Parameter              | Description                                                |
| ---------------------- | ---------------------------------------------------------- |
| **addressHash**        | `string` containing the address hash of the contract.      |
| **name**               | `string` containing the name of the contract.              |
| **compilerVersion**    | `string` containing the compiler version for the contract. |
| **contractSourceCode** | `string` containing the source code of the contract.       |
| constructorArguments   | `string` constructor argument data provided.               |

</Tab>
<Tab title="Example">

```json
{
  "message": "OK",
  "result": {
    "ABI": "[{\n\"type\":\"event\",\n\"inputs\": [{\"name\":\"a\",\"type\":\"uint256\",\"indexed\":true},{\"name\":\"b\",\"type\":\"bytes32\",\"indexed\":false}],\n\"name\":\"Event\"\n}, {\n\"type\":\"event\",\n\"inputs\": [{\"name\":\"a\",\"type\":\"uint256\",\"indexed\":true},{\"name\":\"b\",\"type\":\"bytes32\",\"indexed\":false}],\n\"name\":\"Event2\"\n}, {\n\"type\":\"function\",\n\"inputs\": [{\"name\":\"a\",\"type\":\"uint256\"}],\n\"name\":\"foo\",\n\"outputs\": []\n}]\n",
    "CompilerVersion": "v0.2.1-2016-01-30-91a6b35",
    "ContractName": "Test",
    "ImplementationAddress": "0x000000000000000000000000000000000000000e",
    "IsProxy": "true",
    "OptimizationUsed": "1",
    "SourceCode": "pragma solidity >0.4.24;\n\ncontract Test {\nconstructor() public { b = hex\"12345678901234567890123456789012\"; }\nevent Event(uint indexed a, bytes32 b);\nevent Event2(uint indexed a, bytes32 b);\nfunction foo(uint a) public { emit Event(a, b); }\nbytes32 b;\n}\n"
  },
  "status": "1"
}
```

</Tab>
</Tabs>

## Verify a contract with Standard input JSON file

`verifysourcecode`

**Example**

```javascript
https://instance_base_url/api
 ?module=contract
 &action=verifysourcecode
 &codeformat={solidity-standard-json-input}
 &contractaddress={contractaddress}
 &contractname={contractname}
 &compilerversion={compilerversion}
 &sourceCode={sourceCode}
```

`solidity-single-file`:

```sh
curl --location 'localhost:4000/api?module=contract&action=verifysourcecode' \
--form 'contractaddress="0xDc2082945d55596bf39F362d9EC0F7F65eDBB9DD"' \
--form 'sourceCode="// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Storage {
    uint256 number;

    function store(uint256 num) public {
        number = num;
    }

    function retrieve() public view returns (uint256){
        return number;
    }
}"' \
--form 'contractname="Storage"' \
--form 'codeformat="solidity-single-file"' \
--form 'compilerversion="v0.8.17+commit.8df45f5f"' \
--form 'optimizationUsed="1"' \
--form 'runs="199"' \
--form 'constructorArguements=""' \
--form 'evmversion="london"' \
--form 'libraryname1="qwe"' \
--form 'libraryaddress1="0xDc2082945d55596bf39F362d9EC0F7F65eDBB9DD"'
--form 'licenseType=0'
```

<Tabs>
<Tab title="Params">

| Parameter                      | Description                                                                                                                                                                   |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **codeformat**                 | Format of sourceCode (`solidity-standard-json-input` or `solidity-single-file`)                                                                                               |
| **contractaddress**            | `string` containing the address hash of the contract.                                                                                                                         |
| **contractname**               | `string` name of the contract. It an be an empty string(""), just the contract name("ContractName"), or a filename and contract name("contracts/contract_1.sol:ContractName") |
| **compilerversion**            | `string` containing the compiler version for the contract.                                                                                                                    |
| **sourceCode**                 | `string` standard input json or flattened solidity code                                                                                                                       |
| optimizationUsed               | could be `0`, `false`, `1`, `true`. Should be set when `codeformat=solidity-single-file`                                                                                      |
| runs                           | `integer` is equal to optimization runs number set on compilation. Should be set when `optimizationUsed` is `1` or `true`                                                     |
| evmversion                     | `string` EVM version. Should be set when `codeformat=solidity-single-file`                                                                                                    |
| constructorArguments           | optional `string` constructor argument data provided.                                                                                                                         |
| autodetectConstructorArguments | optional `boolean` whether or not automatically detect constructor argument.                                                                                                  |
| licenseType                    | `string` or `number` representing the license type.                                                                                                                           |

**License type**

"See [available license types](/devs/verification/blockscout-smart-contract-verification-api)."

</Tab>
<Tab title="Example Result">

```json
{
  "message": "OK",
  "result": "b080b96bd06ad1c9341c2afb7e3730311388544961acde94",
  "status": "1"
}
```

</Tab>
</Tabs>

## Return status of a verification attempt

`checkverifystatus`

<Info>
guid is received as a receipt from the `verifysourcecode` method.

</Info>

**Example**

```javascript
https://instance_base_url/api
 ?module=contract
 &action=checkverifystatus
 &guid={identifierString}
```

<Tabs>
<Tab title="Params">

| Parameter | Description                                       |
| --------- | ------------------------------------------------- |
| **guid**  | `string`used for identifying verification attempt |

</Tab>
<Tab title="Example Result">

```json
{
  "message": "OK",
  "result": "Pending in queue",
  "status": "1"
}
```

</Tab>
</Tabs>

<Info>
Return Options: `Pending in queue` | `Pass - Verified` | `Fail - Unable to verify` | `Unknown UID`

</Info>

## Verify proxy contract

`verifyproxycontract`

**Example**

```javascript
https://instance_base_url/api
 ?module=contract
 &action=verifyproxycontract
 &address={addressHash}
```

<Tabs>
<Tab title="Params">

| Parameter   | Description                                          |
| ----------- | ---------------------------------------------------- |
| **address** | `string` containing the address hash of the contract |

</Tab>
<Tab title="Example Result">

```json
{
  "message": "OK",
  "result": "c32d204404f33ff38fee42394f7e671fd96314b3658d466a",
  "status": "1"
}
```

</Tab>
</Tabs>

## Return status of a proxy contract verification attempt

`checkproxyverification`

<Info>
guid is received as a receipt from the `verifyproxycontract` method.

</Info>

**Example**

```javascript
https://instance_base_url/api
 ?module=contract
 &action=checkproxyverification
 &guid={identifierString}
```

<Tabs>
<Tab title="Params">

| Parameter | Description                                       |
| --------- | ------------------------------------------------- |
| **guid**  | `string`used for identifying verification attempt |

</Tab>
<Tab title="Example Result">

```json
{
  "message": "OK",
  "result": "Implementation (0x5a3f40fd57731bbf62a38fd290add074e9cdb844) was verified and saved for proxy (0xc32d204404f33ff38fee42394f7e671fd96314b3)",
  "status": "1"
}
```

<Info>
Return Options:

- `Verification in progress`

- `The proxy's ({addressHash}) implementation contract is found at {addressHash} and is successfully updated.`

- `A corresponding implementation contract was unfortunately not detected for the proxy address.`

- `Unknown UID`

</Info>

</Tab>
</Tabs>

================================================
FILE: devs/apis/rpc/eth-rpc.mdx
================================================

---

## title: "ETH RPC API"

In addition to the custom [RPC endpoints documented here](/devs/apis/rpc), the Blockscout ETH RPC API supports most used methods in the exact format specified for Ethereum nodes, see the [Ethereum JSON-RPC Specification](https://ethereum.github.io/execution-apis/api-documentation/) for more details.

These methods are provided for your convenience and are most suitable as a fallback option in your JSON RPC API providers. For other use cases, REST or custom RPC methods are recommended.

The following methods are supported:

- eth_blockNumber

- eth_getBalance

- eth_getLogs

- eth_gasPrice

- eth_getTransactionByHash

- eth_getTransactionReceipt

- eth_chainId

- eth_maxPriorityFeePerGas

- eth_getTransactionCount

- eth_getCode

- eth_getStorageAt

- eth_estimateGas

- eth_getBlockByNumber

- eth_getBlockByHash

- eth_sendRawTransaction

- eth_call

In the following examples we use the Ethereum mainnet with the base instance url `https://eth.blockscout.com`. When sending a request add `/api/eth-rpc` to the end of the base url.

## eth_blockNumber

Returns the latest block number in the chain in hexadecimal format. No params are needed. Type: POST

**Example**

```swift
// Request
curl -H "content-type: application/json" -X POST --data '{"id":0,"jsonrpc":"2.0","method":"eth_blockNumber","params":[]}' https://eth.blockscout.com/api/eth-rpc
// Response
{
  "jsonrpc": "2.0",
  "result": "0xfa0b0e",
  "id": 0
}
```

## eth_getBalance

Returns the balance of a given address in wei. Note the `earliest` parameter does not work as expected because genesis block balances are not currently imported. Parameters are required.

**Required Parameters**

|                          |                                                                               |
| ------------------------ | ----------------------------------------------------------------------------- |
| Type                     | POST                                                                          |
| Data (string)            | 20 Byte address to check balance                                              |
| Quantity or Tag (string) | Integer value of a block number, or a tag "latest" for the most recent block. |

**Example**

```swift
// Request
curl -H "content-type: application/json" -X POST --data '{"id":0,"jsonrpc":"2.0","method":"eth_getBalance","params":["0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045","latest"]}' https://eth.blockscout.com/api/eth-rpc
// Response
{
  "jsonrpc": "2.0",
  "result": "0x1d863bf76508104fb", //34039260923474019579
  "id": 0
}
```

## eth_getLogs

Returns an array of logs matching a specified filter object. Params are optional based on data you want to receive. From more information, see this [post on eth_getLogs](https://medium.com/alchemy-api/deep-dive-into-eth-getlogs-5faf6a66fd81).

Note: Never returns more than 1000 log entries. You can use pagination options to request the next page. Pagination options params: \{"logIndex": "3D", "blockNumber": "6423AC"} which include parameters from the last log received from the previous request. These three parameters are required for pagination.

**Parameters**

|                            |                                                                                                                                  |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Type                       | POST                                                                                                                             |
| `address` (string, array)  | 20Byte contract address or list of addresses to collect logs from.                                                               |
| `fromBlock` (Quantity/Tag) | Integer block number, `"latest"` (default) for the last mined block or `"pending"`, `"earliest"` for not yet mined transactions. |
| `toBlock` (Quantity/Tag)   | Integer block number, `"latest"`                                                                                                 |

================================================
FILE: devs/apis/rpc/logs.mdx
================================================

---

title: "Logs"
description: ?module=logs

---

### `https://instance_base_url/api?module=logs`

## Get Event Logs by Address and/or Topic(s)

`getLogs`

Event logs for an address and topic. Use **and/or** with the topic operator to specify topic retrieval options when adding multiple topics. Up to a maximum of 1,000 event logs.

**Example:**

```javascript
https://instance_base_url/api
   ?module=logs
   &action=getLogs
   &fromBlock=1379224
   &toBlock=13792288
   &address=0x33990122638b9132ca29c723bdf037f1a891a70c
   &topic0=0xf63780e752c6a54a94fc52715dbc5518a3b4c3c2833d301a204226548a2a8545
   &topic1=0x72657075746174696f6e00000000000000000000000000000000000000000000
   &topic0_1_opr=or
```

_\*=required field_

<Tabs>
<Tab title="Request Params">

| Parameter    | Description                                                                                                                                          |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| fromBlock\*  | `integer` block number to start searching for logs. `latest` is also supported                                                                       |
| toBlock\*    | `integer` block number to stop searching for logs. `latest` is also supported. _Note can be same as fromBlock if looking at logs for a single block_ |
| address\*    | `string` 160-bit code used for identifying contracts. An address and/or topic is required.                                                           |
| topic0\*     | `string` for first required topic.                                                                                                                   |
| topic1       | `string` for 2nd optional topic.                                                                                                                     |
| topic2       | `string` for 3rd optional topic.                                                                                                                     |
| topic3       | `string` for 4th optional topic.                                                                                                                     |
| topic0_1_opr | operator when topic 0 and 1 are used. Either `and` or `or`                                                                                           |
| topic0_2_opr | operator for topic 0 and topic 2. Either `and` or `or`                                                                                               |
| topic0_3_opr | operator for topic 0 and topic 3. Either `and` or `or`                                                                                               |
| topic1_2_opr | operator for topic 1 and topic 2. Either `and` or `or`                                                                                               |
| topic1_3_opr | the topic operator for topic 1 and topic 3. Either `and` or `or`                                                                                     |
| topic2_3_opr | the topic operator for topic 2 and topic 3. Either `and` or `or`                                                                                     |

</Tab>
<Tab title="Example Result">

```json
{
  "message": "OK",
  "result": [
    {
      "address": "0x33990122638b9132ca29c723bdf037f1a891a70c",
      "blockNumber": "0x5c958",
      "data": "0x",
      "gasPrice": "0xba43b7400",
      "gasUsed": "0x10682",
      "logIndex": "0x",
      "timeStamp": "0x561d688c",
      "topics": [
        "0xf63780e752c6a54a94fc52715dbc5518a3b4c3c2833d301a204226548a2a8545",
        "0x72657075746174696f6e00000000000000000000000000000000000000000000",
        "0x000000000000000000000000d9b2f59f3b5c7b3c67047d2f03c3e8052470be92"
      ],
      "transactionHash": "0x0b03498648ae2da924f961dda00dc6bb0a8df15519262b7e012b7d67f4bb7e83",
      "transactionIndex": "0x"
    }
  ],
  "status": "1"
}
```

</Tab>
</Tabs>

================================================
FILE: devs/apis/rpc/stats.mdx
================================================

---

title: "Stats"
description: ?module=stats

---

### `https://instance_base_url/api?module=stats`

## Get [ERC-20](https://github.com/ethereum/EIPs/issues/20) or [ERC-721](https://github.com/ethereum/EIPs/issues/721) token total supply by contract address

`tokensupply`

**Example**

```javascript
https://instance_base_url/api
   ?module=stats
   &action=tokensupply
   &contractaddress={contractAddressHash}
```

<Tabs>
<Tab title="Request Param">
| Parameter       | Description                                                                                    |
| --------------- | ---------------------------------------------------------------------------------------------- |
| contractaddress | `string` containing the contract address hash - a 160-bit code used for identifying contracts. |

</Tab>
<Tab title="Example Result">

```json
{
  "message": "OK",
  "result": "21265524714464",
  "status": "1"
}
```

</Tab>
</Tabs>

## Get total supply in Wei from exchange

`ethsupplyexchange`

**Example:**

```javascript
// Some code
```

<Tabs>
<Tab title="Request Param">

| Parameter | Description |
| --------- | ----------- |
| param     | description |

</Tab>
<Tab title="Example Result">

```javascript
// Some code
```

</Tab>
</Tabs>

## Get total supply in Wei from DB

`ethsupply`

**Example:**

```javascript
// Some code
```

<Tabs>
<Tab title="Request Params">

| Parameter | Description |
| --------- | ----------- |
| param     | description |

</Tab>
<Tab title="Example Result">

```javascript
// Some code
```

</Tab>
</Tabs>

## Get total coin supply from DB minus burnt number

`coinsupply`

**Example:**

```javascript
// Some code
```

<Tabs>
<Tab title="Request Params">

| Parameter | Description |
| --------- | ----------- |
| param     | description |

</Tab>
<Tab title="Example Result">

```javascript
// Some code
```

</Tab>
</Tabs>

## Get latest price of native coin in USD and BTC

`ethprice`

**Example:**

```javascript
// Some code
```

<Tabs>
<Tab title="Request Params">

| Parameter | Description |
| --------- | ----------- |
| param     | description |

</Tab>
<Tab title="Example Result">

```javascript
// Some code
```

</Tab>
</Tabs>

## Get latest price of native coin in USD and BTC in more general format

`coinprice`

**Example:**

```javascript
// Some code
```

<Tabs>
<Tab title="Request Params">

| Parameter | Description |
| --------- | ----------- |
| param     | description |

</Tab>
<Tab title="Example Result">

```javascript
// Some code
```

</Tab>
</Tabs>

## Get total transaction fees in Wei paid by users to validators per day

`totalfees`

**Example:**

```javascript
// Some code
```

<Tabs>
<Tab title="Request Params">

| Parameter | Description |
| --------- | ----------- |
| param     | description |

</Tab>
<Tab title="Example Result">

```javascript
// Some code
```

</Tab>
</Tabs>

================================================
FILE: devs/apis/rpc/token.mdx
================================================

---

title: "Token"
description: ?module=token

---

### `https://instance_base_url/api?module=token`

## Get ERC-20 or ERC-721 token by contract address

`getToken`

Info on name, symbol, supply and type for a token contract address.

**Example**

```javascript
https://instance_base_url/api
   ?module=token
   &action=getToken
   &contractaddress={contractaddressHash}
```

<Tabs>
<Tab title="Request Params">

| Parameter       | Description                                                                                    |
| --------------- | ---------------------------------------------------------------------------------------------- |
| contractaddress | `string` containing the contract address hash - a 160-bit code used for identifying contracts. |

</Tab>
<Tab title="Example Result">

```json
{
  "message": "OK",
  "result": {
    "cataloged": true,
    "contractAddress": "0x0000000000000000000000000000000000000000",
    "decimals": "18",
    "name": "Example Token",
    "symbol": "ET",
    "totalSupply": "1000000000",
    "type": "ERC-20"
  },
  "status": "1"
}
```

</Tab>
</Tabs>

## Get token holders by contract address

`getTokenHolders`

Returns an array of token holder's accounts and amounts held for a specified token contract address.

**Example**

```text
https://instance_base_url/api
   ?module=token
   &action=getTokenHolders
   &contractaddress={contractaddressHash}
   &page={integer}
   &offset={integer}
```

<Tabs>
<Tab title="Request Params">

| Parameter       | Description                                                                                                                    |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| contractaddress | `string` containing the contract address hash of the ERC-20/ERC-721 token                                                      |
| page            | optional nonnegative `integer` representing the page number used for pagination. 'offset' must also be provided.               |
| offset          | optional nonnegative `integer` representing the max number of records to return when paginating. 'page' must also be provided. |

</Tab>
<Tab title="Example Result">

```json
{
  "message": "OK",
  "result": [
    {
      "address": "0x3887e82dbdbe8ec6db44e6298a2d48af572a3b78",
      "value": "153737849289497644937838"
    },
    {
      "address": "0xc894c5de34cb2a3615c737d1276876e44e9700a3",
      "value": "77247336418828547887499"
    }
  ],
  "status": "1"
}
```

</Tab>
</Tabs>

## Get bridged tokens list

`bridgedTokenList`

Returns an array of bridged token information (uses native bridge application and only returns when applicable - depends on implementation).

**Example**

```text
https://instance_base_url/api
   ?module=token
   &action=bridgedTokenList
   &chainid={chainid}
   &page={integer}
   &offset={integer}
```

<Tabs>
<Tab title="Request Params">

| Parameter | Description                                                                                                                    |
| --------- | ------------------------------------------------------------------------------------------------------------------------------ |
| chainID   | nonnegative `integer` that represents the chain id where the original token exists.                                            |
| page      | optional nonnegative `integer` representing the page number used for pagination. 'offset' must also be provided.               |
| offset    | optional nonnegative `integer` representing the max number of records to return when paginating. 'page' must also be provided. |

</Tab>
<Tab title="Example Result">

```json
{
  "message": "OK",
  "result": [
    {
      "foreignChainId": "1",
      "foreignTokenContractAddressHash": "0x0ae055097c6d159879521c384f1d2123d1f195e6",
      "homeContractAddressHash": "0xb7d311e2eb55f2f68a9440da38e7989210b9a05e",
      "homeDecimals": "18",
      "homeHolderCount": 393,
      "homeName": "STAKE on xDai",
      "homeSymbol": "STAKE",
      "homeTotalSupply": "1484374.775044204093387391",
      "homeUsdValue": "18807028.39981006586321824397"
    },
    {
      "foreignChainId": "1",
      "foreignTokenContractAddressHash": "0xf5581dfefd8fb0e4aec526be659cfab1f8c781da",
      "homeContractAddressHash": "0xd057604a14982fe8d88c5fc25aac3267ea142a08",
      "homeDecimals": "18",
      "homeHolderCount": 73,
      "homeName": "HOPR Token on xDai",
      "homeSymbol": "HOPR",
      "homeTotalSupply": "26600449.86076749062791602",
      "homeUsdValue": "6638727.472651464170990256943"
    }
  ],
  "status": "1"
}
```

</Tab>
</Tabs>

================================================
FILE: devs/apis/rpc/transaction.mdx
================================================

---

title: "Transaction"
description: ?module=transaction

---

### `https://instance_base_url/api?module=transaction`

## Get transaction info

`gettxinfo`

Information related to a specified transaction. Includes:

- blockNumber

- confirmations

- from

- gasLimit (in wei)

- gasPrice (in wei)

- gasUsed

- hash

- input

- logs (array)

- revert reason

- success

- timeStamp

- to

- value (in wei)

**Example**

```javascript
https://instance_base_url/api
   ?module=transaction
   &action=gettxinfo
   &txhash={transactionHash}
```

<Tabs>
<Tab title="Request Params">

| Parameter | Description                                                                       |
| --------- | --------------------------------------------------------------------------------- |
| txhash    | `string` containing the transaction hash                                          |
| index     | optional nonnegative `integer` that represents the log index used for pagination. |

</Tab>
<Tab title="Example Result">

```json
{
  "result": {
    "revertReason": "No credit of that type",
    "blockNumber": "3",
    "confirmations": "0",
    "from": "0x000000000000000000000000000000000000000c",
    "gasLimit": "91966",
    "gasPrice": "100000",
    "gasUsed": "95123",
    "hash": "0x0000000000000000000000000000000000000000000000000000000000000004",
    "input": "0x04",
    "logs": [
      {
        "address": "0x000000000000000000000000000000000000000e",
        "data": "0x00",
        "topics": ["First Topic", "Second Topic", "Third Topic", "Fourth Topic"]
      }
    ],
    "success": true,
    "timeStamp": "1541018182",
    "to": "0x000000000000000000000000000000000000000d",
    "value": "67612"
  },
  "status": "1"
}
```

</Tab>
</Tabs>

## Get transaction receipt status

`gettxreceiptstatus`

Also available through a GraphQL 'transaction' query. `Status` field return:

- `0` = failed transaction

- `1` = successful transaction

**Example**

```text
https://instance_base_url/api
   ?module=transaction
   &action=gettxreceiptstatus
   &txhash={transactionHash}
```

<Tabs>
<Tab title="Request Params">

| Parameter | Description                              |
| --------- | ---------------------------------------- |
| txhash    | `string` containing the transaction hash |

</Tab>
<Tab title="Example Result">

```json
{
  "message": "OK",
  "result": {
    "status": "1"
  },
  "status": "1"
}
```

</Tab>
</Tabs>

## Get error status and message

`getstatus`

Also available through a GraphQL 'transaction' query. Includes the following:

- errDescription: string with error message

- isError

  - 0 = pass, no error

  - 1 = error

**Example**

```javascript
https://instance_base_url/api
   ?module=transaction
   &action=getstatus
   &txhash={transactionHash}
```

<Tabs>
<Tab title="Request Params">

| Parameter | Description                              |
| --------- | ---------------------------------------- |
| txhash    | `string` containing the transaction hash |

</Tab>
<Tab title="Example Result">

```json
{
  "message": "OK",
  "result": {
    "errDescription": "Out of gas",
    "isError": "1"
  },
  "status": "1"
}
```

</Tab>
</Tabs>

================================================
FILE: devs/mcp-examples/rollup-deployment-variables.mdx
================================================

---

title: "Rollup Variables with MCP"
description: "Using prompts to locate required rollup variables"

---

Unique variables are required for deploying different types of chains. The process for located these ENVs for Arbitrum and Optimism chains is [detailed in this post](/setup/deployment/rollup-deployment).

You can also use the [Blockscout MCP](/devs/mcp-server) to quickly find some of these variables. In the example below we use several prompts to find the values for `INDEXER_ARBITRUM_L1_ROLLUP_INIT_BLOCK `and `INDEXER_ARBITRUM_L1_RPC_HISTORICAL_BLOCKS_RANGE`

<Steps>
  <Step title="Find the rollup init block">
    Find the block containing the transaction where the rollup contract was deployed. You will need the rollup contract address for this prompt (check the `OutputInfo.json` file in the main directory of your script folder). In this example we use the Holesky chain.

    **prompt example:** \
    "What is the deployment transaction hash for contract `0x798CA465048fa8ec711FFc8cE0F03409f6985a04` on Holesky, and which block was it deployed in?"

    > **answer: **\
    > Based on the blockchain analysis shown in your prompt, the **deployment transaction** for the contract `0x798CA465048fa8ec711FFc8cE0F03409f6985a04` on Holesky is:
    >
    > **0x4bd7b36d779cd66a968810cef5926a5fb246d5291ec4e6551d46a1cd639e287e**
    >
    > This transaction was included in **Block Number: 3,325,914** on the Holesky blockchain.

  </Step>
  <Step title="Get initial value for historical blocks range">
    **prompt examples:**

    1. "How often blocks are produced on Holesky?"
    2. "Research the deployment transaction and discover the address of the contract emitting `SequencerBatchDelivered` event. Then look at the latest logs emitted by the contract to identify how often new `SequencerBatchDelivered` events appear in the chain."
    3. Take a look at https://docs.blockscout.com/setup/deployment/rollup-deployment and then advise based on the received data what could be a value of `INDEXER_ARBITRUM_L1_RPC_HISTORICAL_BLOCKS_RANGE`.

    > **answer:**
    >
    > **Specific Recommendation:**
    >
    > `INDEXER_ARBITRUM_L1_RPC_HISTORICAL_BLOCKS_RANGE=1000`
    >
    > **Rationale:**
    >
    > 1. **Conservative Approach**: The documentation recommends choosing a block range that covers 1 or 2 batches when the block production rate is low (like 12 seconds for Ethereum/Holesky)
    > 2. **Time Coverage**: 1000 blocks × 12 seconds = ~3.3 hours of Holesky history, which should easily cover multiple batch cycles
    > 3. **RPC Compatibility**: 1000 blocks is a safe range that most RPC providers support without hitting rate limits
    > 4. **Batch Frequency Match**: Given the observed frequent batch delivery pattern, 1000 blocks provides sufficient coverage for reliable indexing
    >
    > **Alternative Considerations:**
    >
    > - **If batches are very frequent (every few minutes)**: Consider increasing to **1500-2000 blocks**
    > - **If RPC node has higher limits**: Could potentially use **2000-5000 blocks** for better efficiency
    > - **If experiencing timeouts**: Reduce to **500-750 blocks**
    >
    > **Monitoring Recommendation:**
    >
    > Start with 1000 blocks and monitor the indexer logs. If you see rate limit errors, reduce the chunk size. If you experience latency in batch identification, you may need to adjust the tracking intervals or block range.
    >
    > The 1000 block range should provide a good balance between comprehensive coverage and RPC node compatibility for your Holesky Arbitrum rollup deployment.

  </Step>
</Steps>

================================================
FILE: devs/verification/automate-verifications-catapulta.mdx
================================================

---

title: "Automate verifications with Catapulta"
description: Deploy smart contracts and get verified automatically with Catapulta

---

[Catapulta](https://catapulta.sh) is a multi-chain smart contracts deployment tool for Foundry and Hardhat to improve deployments DevX and remove the need to perform manual verifications.

With Catapulta you can deploy to +14 networks and the verification will happen automatically in Blockscout based block explorers. You may need to register in Catapulta to be able to deploy in testnets with automatic verification, for free, in Blockscout based explorers.

You can install `catapulta` in your Linux/MacOs machine using NPM:

```sh
npm i -g catapulta
```

## Deploy with Foundry and Catapulta

To verify at deployment time with Foundry and Catapulta, just broadcast your script with the Catapulta CLI:

```sh
catapulta script scripts/Deploy.s.sol --network [NETWORK_NAME]
```

If you already deployed with Forge, but want to automate the verification, you can import your deployment to Catapulta with the "catapulta import" command, and it will re-trigger verification:

```sh
catapulta import 'broadcasts/Deploy.s.sol/[chain id]/run-latest.json'
```

## Deploy with Hardhat and Catapulta

To verify at deployment time with `hardhat-deploy` and Catapulta, just deploy with Catapulta CLI to enjoy automated verifications.

```sh
catapulta deploy --network [NETWORK_NAME]
```

If you use plain Hardhat scripts, you can use `catapulta run`, pointing to your Javascript or Typescript deploy script:

```sh
catapulta run scripts/DeployScript.ts --network [NETWORK_NAME]
```

## Verify your project anytime, with one button

In case Blockscout is newly added to a network you already deployed with Catapulta, you can always re-trigger verification to your entire project with only one click, from your deployment report, and Catapulta will take care to migrate all the verifications to Blockscout block explorer.

<Frame caption="">
  <img src="/images/c28dab29-image.jpeg" />
</Frame>

================================================
FILE: devs/verification/blockscout-smart-contract-verification-api.mdx
================================================

---

title: "Blockscout Smart Contract Verification API"
description: Blockscout also offers a contract verification API.

---

This is the preferred option for contract verification via API. However, you can also use RPC endpoints, [more info is available here](/devs/apis/rpc/contract#verify-a-contract-with-its-source-code-and-contract-creation-information).

### License type

You can specify license type of the smart contract as `string` or `number`. For example for `GNU General Public License v2.0 (GNU GPLv2)` you could pass either `4` or `"gnu_gpl_v2"`

We are supporting such types of license as:

```java
1. No License (None)
2. The Unlicense (Unlicense)
3. MIT License (MIT)
4. GNU General Public License v2.0 (GNU GPLv2)
5. GNU General Public License v3.0 (GNU GPLv3)
6. GNU Lesser General Public License v2.1 (GNU LGPLv2.1)
7. GNU Lesser General Public License v3.0 (GNU LGPLv3)
8. BSD 2-clause "Simplified" license (BSD-2-Clause)
9. BSD 3-clause "New" Or "Revised" license* (BSD-3-Clause)
10. Mozilla Public License 2.0 (MPL-2.0)
11. Open Software License 3.0 (OSL-3.0)
12. Apache 2.0 (Apache-2.0)
13. GNU Affero General Public License (GNU AGPLv3)
14. Business Source License (BSL 1.1)
```

API license types:

```
none
unlicense
mit
gnu_gpl_v2
gnu_gpl_v3
gnu_lgpl_v2_1
gnu_lgpl_v3
bsd_2_clause
bsd_3_clause
mpl_2_0
osl_3_0
apache_2_0
gnu_agpl_v3
bsl_1_1
```

### Verify smart contract

Use the appropriate Blockscout instance endpoint to verify if the smart contract microservice is enabled.

In the following examples we use https\://eth.blockscout.com to query Ethereum.

### verification service running

`GET` `https://eth.blockscout.com/api/v2/smart-contracts/verification/config`

**Responses**

<Accordion title="200 Successful response">
&nbsp;
</Accordion>

<CodeGroup>
```http HTTP
GET /api/v2/smart-contracts/verification/config HTTP/1.1
Host: eth.blockscout.com
Accept: */*
```

```sh cURL
curl -L \
  --url 'https://eth.blockscout.com/api/v2/smart-contracts/verification/config' \
  --header 'Accept: */*'
```

```js JavaScript
const response = await fetch(
  "https://eth.blockscout.com/api/v2/smart-contracts/verification/config",
  {
    method: "GET",
    headers: {
      Accept: "*/*",
    },
  }
);

const data = await response.json();
```

```py Python
import requests

response = requests.get(
    "https://eth.blockscout.com/api/v2/smart-contracts/verification/config",
    headers={"Accept":"*/*"},
)

data = response.json()
```

</CodeGroup>

```json 200 Successful Response
No content
```

<Warning>
`0x` contract addresses in POST example urls below should be replaced with your contract hash supplied on contract creation. Variables in the body are examples and should be replaced with your contract details.

</Warning>

## Flattened contract

For more information on parameters to pass, see the [flattened source code information on the Verifying a smart contract page](/devs/verification#via-flattened-source-code).

### verification flattened contract

`POST` `https://eth.blockscout.com/api/v2/smart-contracts/0xb12cad649a56e67188bbaa56583c18dc7d2812ed/verification/via/flattened-code`

**Body**

<ParamField body="object">
  Example: `{"compiler_version":"v0.8.17+commit.8df45f5f","license_type":"mit","source_code":"// SPDX-License-Identifier: GPL-3.0\n\npragma solidity >=0.7.0 <0.9.0;\n\n/**\n * @title Owner\n * @dev Set & change owner\n */\ncontract Owner {\n\n address private owner;\n \n // event for EVM logging 2345678ewqwertyui54567890987654345678\n event OwnerSet(address indexed oldOwner, address indexed newOwner);\n \n // modifier to check if caller is owner\n modifier isOwner() {\n // If the first argument of 'require' evaluates to 'false', execution terminates and all\n // changes to the state and to Ether balances are reverted.\n // This used to consume all gas in old EVM versions, but not anymore.\n // It is often a good idea to use 'require' to check if functions are called correctly.\n // As a second argument, you can also provide an explanation about what went wrong.\n require(msg.sender == owner, \"Caller is not owner\");\n _;\n }\n \n /**\n * @dev Set contract deployer as owner\n */\n constructor(uint112 abc, address abb, bytes32 ghnc) {\n // console.log(\"Owner contract deployed by:\", msg.sender);\n owner = msg.sender; // 'msg.sender' is sender of current call, contract deployer for a constructor\n emit OwnerSet(address(0), owner);\n }\n\n /**\n * @dev Change owner\n * @param newOwner address of new owner\n */\n function changeOwner(address newOwner) public isOwner {\n emit OwnerSet(owner, newOwner);\n owner = newOwner;\n }\n\n /**\n * @dev Return owner address \n * @return address of owner\n */\n function getOwner() external view returns (address) {\n return owner;\n }\n}","is_optimization_enabled":true,"optimization_runs":199,"contract_name":"Owner","libraries":{"Libcheck":"0x030f7c7dbd472864220bcf9e37ede1b8a3125970","Libcheck_1":"0x030f7c7dbd472864220bcf9e37ede1b8a3125970"},"evm_version":"berlin","autodetect_constructor_args":true}`
</ParamField>

**Responses**

<Accordion title="200 Successful response">
&nbsp;
</Accordion>

<CodeGroup>
