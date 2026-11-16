# Current application architecture

Orbistry is a static Next.js renderer hosted by Electron. `app/page.tsx` mounts `components/app-shell.tsx`. The main entry is `electron/main.cjs`; the renderer reaches desktop services through the explicit allowlist in `electron/preload.cjs`. Production has no Next.js API server.

## WorldView and Knowledge Cards

`components/worldview.tsx` hosts the entity grid, buildings, relationships and floating Knowledge Cards. `features/worldview/knowledge-workspace.tsx` loads and applies literal index declarations. The guarded operations in `electron/worldview-ipc.cjs` validate the active Universe and authorize applied source references before retrieval. Index persistence is separate from original Vault files.

Knowledge Card document sections are literal, attributed excerpts, not inferred facts. Local files remain accessible through bottom source utilities. Financial tables, charts and document content use the black/amber monospace theme in `app/knowledge-content.css`; the surrounding application shell and card chrome keep their existing styles.

Trusted modules in `electron/engines/` supply computation and external provider access. Yahoo Finance responses have explicit units, currencies, fiscal periods and retrieval times. Derived data stays under `<Universe>/.engine`, separately from original sources. See the [engine contract and maintenance guide](../worldview/packages/yahoo-financials-v0.2.md).

The [Backend Identity engine](../worldview/packages/backend-identity-v1.md) manually compiles those existing indexes into immutable manifests and retrievable, entity-scoped chunks under `.engine/backend-identity`. Its runtime requires a trusted backend authorization policy. Inspection and capability discovery never execute tools; the independent terminal provides manual generation and four read-only inspector sections.

## Agent runtime and shared services

Normal agent chat goes through `electron/ai/chat-service.cjs` and `standalone-chat.cjs`. It uses user messages, personality, bounded history and provider settings. It does not automatically attach indexed documents or execute engines. A future model adapter must authorize calls to the engine dispatcher explicitly.

Vault readers, Station/Context Box stores, historical run records, provider adapters and front-office infrastructure still have runtime, IPC, diagnostic or regression consumers. They must not be classified as unused merely because normal chat currently isolates itself from source retrieval. Workers, package CLI entry points, policy documents, declaration files and test fixtures also have non-import entry points.

## Validation

Run `npm test`, `npm run typecheck`, `npm run build` and `npm run test:worldview:electron`. Focused acceptance scripts are `scripts/electron-financials-smoke.cjs` and `scripts/electron-daily-price-smoke.cjs`. Tests use disposable profiles and synthetic Universes; live provider checks remain separate. Package builders verify manifests and include required documentation and dependency licenses.
