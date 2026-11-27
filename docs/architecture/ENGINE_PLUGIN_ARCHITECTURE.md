# ORB-ENG-002 implementation and verification

The public portal is [EnginePackageRegistry](../../electron/engines/registry/registry.cjs). Start with [the third-party package format](../engines/ENGINE_CONTRIBUTIONS.md), [authoring and signing](../engines/ENGINE_AUTHORING.md), and [lifecycle and rollback](../engines/ENGINE_LIFECYCLE.md).

## Ownership and migration

| Component | Before ORB-ENG-002 | Current execution boundary |
| --- | --- | --- |
| Backend Identity | Compiled Entity snapshots and legacy capability declarations | Mandatory Core. The compiler fingerprints applied references, installed version, digest, availability and current grant. An old snapshot remains readable. An explicit compile or existing Agent refresh updates its version after changes. |
| WorldView, Entity, Markdown, tag associations | Domain aggregates, assigned files, tag indexing | Core. Entity keys own source associations. WorldView owns placement and connections. Tag association derives a search index from WorldView metadata. |
| Daily Price and Yahoo Financials | Native adapters, imported by Core cache and Identity readers | One independently buildable [Yahoo package](../../packages/yahoo-finance/README.md) owns the upstream client and five operations. Legacy Core readers retain stored snapshot validators and TTLs. Active card and assigned legacy declarations require registry admission before reading cached or current data. |
| Wonton Excel | Native threaded XLSX parsing, faithful rendering/export and standalone builder | Optional legacy adapter. Full fidelity accepts up to 25 MiB of workbook data and 48 MiB of results. Its existing standalone distribution uses its original package format. |
| Image Parser | Local OCR, authorized Entity carousel processing and background progress | Optional legacy processor, loaded by its own IPC handlers. File selection, job status and derived knowledge are host responsibilities. |
| CHronoZ | Explicitly registered, fingerprinted Windows portable Python bundle | Optional portable adapter loaded on first use. Core retains historical bounded file reads and validated protocol metadata. |
| Number tools and Weather demo | Schema 2 terminal example | Number tools remains an operation-only package. [Weather demo](../../examples/engines/weather-demo/engine_manifest.json) contributes synthetic hourly observations through schema 3 with no Core-specific source parser or renderer. |

Core-only packaging omits the Yahoo implementation, native Excel, Image Parser, CHronoZ adapter and Yahoo client. The ordinary full desktop retains legacy native adapters for existing trusted integrations and builders. In particular, native dispatch and the low-level injectable service factories remain compatibility APIs for preauthorized host callers. New external integrations use the registry. Industry-specific renderers and cache formats for old Knowledge Cards still exist in Core.

## From a declaration to evidence

1. [Knowledge Index](../../electron/domains/indexing/knowledge-index.cjs) parses literal declarations without loading a package. The applied index and assigned files remain with the Entity.
2. [Source resolution](../../electron/domains/knowledge/package-source.cjs) reloads the applied declaration, checks package integrity, major version, digest trust, input contract and current Entity-operation grant. The renderer supplies an Entity and declaration ID.
3. [Registry execution](../../electron/engines/registry/registry.cjs) admits the host, records the running request, runs a bounded worker and validates its output. The successful receipt records the digest and result hash. Execution and historical read use separate APIs.
4. [The source panel](../../features/knowledge/package-source.tsx) displays the bounded JSON result and execution ID. Index editing discovers installed source contracts. Package absence affects its own panel. Reinstall, trust and relink to resolve the same declaration again.
5. [Assigned Agents](../../electron/ai/agents/entity-agents.cjs) resolve only sources matching the connected graph node, version, digest, assignment and fresh Identity. New external nodes require human approval. Applied literal input supplies the package parameters. The registry receipt ID is stored with the Agent result. Legacy automatic read nodes continue to require their existing Agent policy and the Entity package grant.
6. [Legacy Yahoo admission](../../electron/domains/knowledge/yahoo-package.cjs) maps existing price, statements, earnings and history declarations to the same package, preserving listing, observation and retrieval times, currency and cache status. A chart needs the history operation linked in addition to price. Manual Registry links work in the terminal, while legacy automatically loading card reads require automatic read and network grants.

## Specialized readers and capability limits

The worker accepts 64 KiB JSON input and 1 MiB output. The protocol supports JSON values and a trusted JSON renderer. Excel's bounded binary/large-model transport, OCR progress and CHronoZ portable executable/report approval have different requirements. These three integrations retain their legacy paths. Packaging a source tree under a new name alone would leave those authority checks unresolved.

A future file adapter should accept a host-issued opaque resource handle bound to the Universe, Entity, applied source, content revision, operation and expiry. The host would resolve it after checking scope, stream bounded chunks and revoke it on cancellation. Large results would be host-owned artifacts with Entity-scoped paging and receipts. OCR would additionally need cancellable progress and CHronoZ would need a reviewed executable binding and verified artifact handoff. These proposed ports have no current execution authority.

Workers inherit the user's OS permissions. Digest trust and per-operation network consent are host admission controls. Run only reviewed packages. Removal does not erase Entity files, applied configuration, separately authorized historical receipts or old cache data. The existing history readers and snapshot schemas own those records.

## Reproducing the evidence

The baseline was main at `e2f20c7f66d9ae1124526d7668df9569483a65b2`, with 547 tests passed and two optional skips. Use a disposable Universe for all verification.

| Command from repository root | What it verifies |
| --- | --- |
| `npm run test:engine:registry` | Integrity, signing, permissions, cancellation, receipts, history and external-source disable/remove/restore. |
| `node scripts/acceptance/yahoo-package-lifecycle.cjs` | Builds the five real Yahoo adapters with only the upstream client replaced by fixed fixtures, executes them through the worker, removes and reinstalls the package, rechecks the original declarations and historical receipt. Requires the independent package's development dependencies. |
| `node --test electron/ai/agents/entity-agents.test.cjs` | Assignment, construction, approval and scope checks including external package removal and restoration. |
| `npm run build` then `node scripts/build/build-core-only.cjs` | Exports the renderer and creates a fresh unpacked Windows Electron distribution with optional implementations excluded. |
| `node scripts/acceptance/electron-core-only.cjs "<printed executable path>"` | Verifies the actual ASAR inventory, launches the packaged app with a fresh profile, exercises WorldView, Entity, Markdown, Identity, installs the weather package and renders the worker result in its Knowledge Card. |
| `npm run atlas:check` | Checks the generated [Code Atlas](../code-atlas/README.md) against current sources. |

The mock Yahoo test verifies integration and data semantics. Live market availability requires a separate online check. Package installation is local to one Universe. The Knowledge Card accepts compatible major versions after explicit trust and authorization. Agent graph pins require explicit review when package bytes change.

## Observed verification results

| Check | Result |
| --- | --- |
| Full automated suite | 552 discovered, 550 passed, two optional skips, zero failed. Baseline was 549 discovered, 547 passed and two optional skips. |
| Registry suite | 21 passed, including compatible restoration, incompatible major version and modified package bytes. |
| Build, TypeScript, format, source and architecture audits | Passed. Architecture audit reported zero violations and unexpected cycles. |
| Yahoo distribution | Production bundle passed CLI validation. Two independent production builds yielded digest `3b0f933d7aa90e3333d964f523c48dbcd0663867dfc3a05313143c8e1018cadb`. The offline worker test exercised all five operations before and after reauthorization and checked Identity freshness. |
| Windows Core-only distribution | Passed with the optional implementations and Yahoo/Excel-specific dependencies excluded. Installed an external package after launch and displayed its time series and execution ID. The same open card reported missing, untrusted and unlinked states during removal and restoration, then ran again after reauthorization. |
| Ordinary Windows distribution | Passed empty-profile, credentials, CSP, native image/PDF OCR, packaged CSV worker, custom Agent and Context Box checks. The initial verification artifact had an unreadable ASAR package.json. A fresh build from the finished source tree launched and passed. |
| Backend Identity and Assigned Agent desktop | Passed. The Agent harness now uses the supported NVIDIA transport fixture with synthetic credentials. Its former Ollama selection prevented it from reaching the approval step. |
| WorldView desktop | Passed the current reset-mode suite, including pan/deselect, Knowledge Card sources, Excel, price chart, deletion, Vault bytes and post-reset IPC rejection with zero model requests or new chat turns. The previous two-reply generation assertions remain available through `npm run test:worldview:legacy-generation:electron`. That historical scenario fails at its Send button on the reset product. |

The packaged Yahoo price operation retrieves a fresh chart alongside a provider quote when the host's quote cache expires. The legacy native adapter could reuse a previous history snapshot independently of the quote TTL. The external worker receives the listing only. Existing cache hits still report cached or stale status. No latency or memory improvement was measured.

For rollback of this application change, use the baseline revision and a compatible Universe backup. Acceptance used disposable Universes.

## Review inventory

The following paths contain the hand-authored changes or package artifacts. The [Atlas manifest](../code-atlas/generated-files.json) lists generated documentation. Yahoo implementation moved behind the existing native entry filenames.

- [.gitattributes](../../.gitattributes)
- [docs/architecture/ENGINE_PLUGIN_ARCHITECTURE.md](ENGINE_PLUGIN_ARCHITECTURE.md)
- [docs/architecture/MODULE_OWNERSHIP.md](MODULE_OWNERSHIP.md)
- [docs/architecture/REPOSITORY_MAP.md](REPOSITORY_MAP.md)
- [docs/engines/ENGINE_AUTHORING.md](../engines/ENGINE_AUTHORING.md)
- [docs/engines/ENGINE_CONTRIBUTIONS.md](../engines/ENGINE_CONTRIBUTIONS.md)
- [docs/engines/ENGINE_LIFECYCLE.md](../engines/ENGINE_LIFECYCLE.md)
- [docs/engines/engine-manifest.schema.json](../engines/engine-manifest.schema.json)
- [electron/ai/agents/agent-construction.cjs](../../electron/ai/agents/agent-construction.cjs)
- [electron/ai/agents/entity-agent-protocol.cjs](../../electron/ai/agents/entity-agent-protocol.cjs)
- [electron/ai/agents/entity-agents.cjs](../../electron/ai/agents/entity-agents.cjs)
- [electron/ai/agents/entity-agents.test.cjs](../../electron/ai/agents/entity-agents.test.cjs)
- [electron/ai/chronoz-adapter.cjs](../../electron/ai/chronoz-adapter.cjs)
- [electron/ai/chronoz-contract.cjs](../../electron/ai/chronoz-contract.cjs)
- [electron/ai/engine-chat.cjs](../../electron/ai/engine-chat.cjs)
- [electron/ai/engine-registry.cjs](../../electron/ai/engine-registry.cjs)
- [electron/core/ipc/worldview-ipc.cjs](../../electron/core/ipc/worldview-ipc.cjs)
- [electron/daily-price-service.cjs](../../electron/daily-price-service.cjs)
- [electron/domains/indexing/knowledge-index.cjs](../../electron/domains/indexing/knowledge-index.cjs)
- [electron/domains/indexing/ticker-syntax.cjs](../../electron/domains/indexing/ticker-syntax.cjs)
- [electron/domains/knowledge/knowledge-store.cjs](../../electron/domains/knowledge/knowledge-store.cjs)
- [electron/domains/knowledge/package-source.cjs](../../electron/domains/knowledge/package-source.cjs)
- [electron/domains/knowledge/yahoo-package.cjs](../../electron/domains/knowledge/yahoo-package.cjs)
- [electron/engine-packages.test.cjs](../../electron/engine-packages.test.cjs)
- [electron/engines/backend-identity/capability-registry.cjs](../../electron/engines/backend-identity/capability-registry.cjs)
- [electron/engines/backend-identity/identity-compiler.cjs](../../electron/engines/backend-identity/identity-compiler.cjs)
- [electron/engines/backend-identity/package-sources.cjs](../../electron/engines/backend-identity/package-sources.cjs)
- [electron/engines/backend-identity/schema.cjs](../../electron/engines/backend-identity/schema.cjs)
- [electron/engines/contracts/contract.cjs](../../electron/engines/contracts/contract.cjs)
- [electron/engines/contracts/yahoo-legacy/daily.cjs](../../electron/engines/contracts/yahoo-legacy/daily.cjs)
- [electron/engines/contracts/yahoo-legacy/financials.cjs](../../electron/engines/contracts/yahoo-legacy/financials.cjs)
- [electron/engines/contracts/yahoo-legacy/market.cjs](../../electron/engines/contracts/yahoo-legacy/market.cjs)
- [electron/engines/daily-price/index.cjs](../../electron/engines/daily-price/index.cjs)
- [electron/engines/definitions.cjs](../../electron/engines/definitions.cjs)
- [electron/engines/registry/registry.cjs](../../electron/engines/registry/registry.cjs)
- [electron/engines/yahoo-financials/index.cjs](../../electron/engines/yahoo-financials/index.cjs)
- [electron/engines/yahoo-financials/market.cjs](../../electron/engines/yahoo-financials/market.cjs)
- [electron/financial-service.cjs](../../electron/financial-service.cjs)
- [electron/preload.cjs](../../electron/preload.cjs)
- [examples/engines/weather-demo/engine_manifest.json](../../examples/engines/weather-demo/engine_manifest.json)
- [examples/engines/weather-demo/index.cjs](../../examples/engines/weather-demo/index.cjs)
- [features/agents/agent-construction.tsx](../../features/agents/agent-construction.tsx)
- [features/agents/engine-node-settings.tsx](../../features/agents/engine-node-settings.tsx)
- [features/knowledge/knowledge-workspace.tsx](../../features/knowledge/knowledge-workspace.tsx)
- [features/knowledge/package-source.tsx](../../features/knowledge/package-source.tsx)
- [features/model-settings/engine-development-guide.tsx](../../features/model-settings/engine-development-guide.tsx)
- [features/model-settings/engine-settings.tsx](../../features/model-settings/engine-settings.tsx)
- [features/worldview/backend-identity-window.tsx](../../features/worldview/backend-identity-window.tsx)
- [package.json](../../package.json)
- [packages/yahoo-finance/.gitignore](../../packages/yahoo-finance/.gitignore)
- [packages/yahoo-finance/README.md](../../packages/yahoo-finance/README.md)
- [packages/yahoo-finance/build.cjs](../../packages/yahoo-finance/build.cjs)
- [packages/yahoo-finance/index.cjs](../../packages/yahoo-finance/index.cjs)
- [packages/yahoo-finance/manifest.template.json](../../packages/yahoo-finance/manifest.template.json)
- [packages/yahoo-finance/package-lock.json](../../packages/yahoo-finance/package-lock.json)
- [packages/yahoo-finance/package.json](../../packages/yahoo-finance/package.json)
- [packages/yahoo-finance/src/client.cjs](../../packages/yahoo-finance/src/client.cjs)
- [packages/yahoo-finance/src/daily.cjs](../../packages/yahoo-finance/src/daily.cjs)
- [packages/yahoo-finance/src/financials.cjs](../../packages/yahoo-finance/src/financials.cjs)
- [packages/yahoo-finance/src/market.cjs](../../packages/yahoo-finance/src/market.cjs)
- [packages/yahoo-finance/src/ticker.cjs](../../packages/yahoo-finance/src/ticker.cjs)
- [packages/yahoo-finance/src/tools.json](../../packages/yahoo-finance/src/tools.json)
- [scripts/acceptance/electron-core-only.cjs](../../scripts/acceptance/electron-core-only.cjs)
- [scripts/acceptance/electron-entity-agents-smoke.cjs](../../scripts/acceptance/electron-entity-agents-smoke.cjs)
- [scripts/acceptance/electron-packaged-smoke.cjs](../../scripts/acceptance/electron-packaged-smoke.cjs)
- [scripts/acceptance/electron-worldview-smoke.cjs](../../scripts/acceptance/electron-worldview-smoke.cjs)
- [scripts/acceptance/worldview-phase04-check.cjs](../../scripts/acceptance/worldview-phase04-check.cjs)
- [scripts/acceptance/yahoo-package-lifecycle.cjs](../../scripts/acceptance/yahoo-package-lifecycle.cjs)
- [scripts/build/build-core-only.cjs](../../scripts/build/build-core-only.cjs)
- [scripts/build/build-yahoo-financials-engine.cjs](../../scripts/build/build-yahoo-financials-engine.cjs)
- [scripts/code-atlas/catalog.cjs](../../scripts/code-atlas/catalog.cjs)
- [scripts/fixtures/assigned-yahoo-package.cjs](../../scripts/fixtures/assigned-yahoo-package.cjs)
- [scripts/fixtures/yahoo-client.cjs](../../scripts/fixtures/yahoo-client.cjs)
- [scripts/orbistry-engine.cjs](../../scripts/orbistry-engine.cjs)
- [types/ai.ts](../../types/ai.ts)
- [types/backend-identity.ts](../../types/backend-identity.ts)
- [types/engine-packages.ts](../../types/engine-packages.ts)
- [types/entity-agents.ts](../../types/entity-agents.ts)
- [types/worldview.ts](../../types/worldview.ts)
