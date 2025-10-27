---
description: Generate a well-formatted commit message using Conventional Commits
---

# /commit

Analyze the current Git diff and generate a concise, well-formatted commit message following Conventional Commits (feat/fix/refactor/docs/chore).

If the change represents a milestone, prefix with an emoji (🚀, ⚙️, 🧠, etc.) and mention the subsystem (frontend, backend, ai, mcp, docker, docs).

Then run `git add -A && git commit -m "<message>"`.

