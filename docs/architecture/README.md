# Current application architecture

Orbistry is a static Next.js renderer hosted by Electron. `app/page.tsx` mounts `components/app-shell.tsx`. The main entry is `electron/main.cjs`; the renderer reaches desktop services through the explicit allowlist in `electron/preload.cjs`. Production has no Next.js API server.

The [ORB-ARCH-001 audit](ORB-ARCH-001-AUDIT.md) records the current contract assessment, verified repairs, tests and remaining design/operational limits. The Next.js patch build passes, and the source graph has no cycles or core-to-AI imports. Run `npm run audit:architecture` for repeatable boundary checks; runtime authorization still requires its separate tests.

## WorldView and Knowledge Cards

`features/worldview/worldview.tsx` hosts the entity grid, buildings, relationships and floating Knowledge Cards. `features/knowledge/knowledge-workspace.tsx` loads and applies literal index declarations. The guarded operations in `electron/core/ipc/worldview-ipc.cjs` validate the active Universe and authorize applied source references before retrieval. Index persistence is separate from original Vault files.

Knowledge Card document sections are literal, attributed excerpts, not inferred facts. Local files remain accessible through bottom source utilities. Financial tables, charts and document content use the black/amber monospace theme in `app/knowledge-content.css`; the surrounding application shell and card chrome keep their existing styles.

Trusted modules in `electron/engines/` supply computation and external provider access. Yahoo Finance responses have explicit units, currencies, fiscal periods and retrieval times. Derived data stays under `<Universe>/.engine`, separately from original sources. See the [engine contract and maintenance guide](../worldview/packages/yahoo-financials-v0.2.md).

Third-party engines can use the [standard package registry and terminal/API guide](../engines/ENGINE_AUTHORING.md): manifest v2, exact-byte trust, per-Entity links, JSON function discovery and persistent receipts. The provider-independent portal is `EnginePackageRegistry` in `electron/engines/registry/registry.cjs`; `electron/ai/engine-registry.cjs` retains its compatibility re-export. Built-in dispatch is in `electron/engines/native.cjs`. Packages use separate `.engine/packages` and `.engine/registry` paths. Desktop IPC exposes catalog discovery only. Existing construction/Identity adapters remain explicit; installing a package does not automatically wire it into assigned chat or re-enable Universe generation.

The [Backend Identity engine](../worldview/packages/backend-identity-v1.md) manually compiles those existing indexes into immutable manifests and retrievable, entity-scoped chunks under `.engine/backend-identity`. Its runtime requires a trusted backend authorization policy. Inspection and capability discovery never execute tools; the independent terminal provides manual generation and four read-only inspector sections.

`electron/domains/knowledge/knowledge-source-access.cjs` owns bounded companion reads and live applied-source authorization. Knowledge Store and Excel both use this read port, eliminating their former cycle while retaining source rechecks. Generic persistence, errors, parsing and token helpers are owned by `electron/shared`; legacy AI paths re-export the same interfaces for compatibility.

## Agent runtime and shared services

As of 22 November 2026, Universe generation and orchestration have been reset. `ChatService` retains storage/admission/UI compatibility but rejects generation with `UNIVERSE_CHAT_RESET`. The existing agent inspection action opens direct assigned chat. See the current [Agent Operating Guide](../worldview/packages/assigned-agent-operating-guide.md).

Assigned chat goes through `EntityAgentService` and `electron/ai/agents/assigned-chat.cjs`. The host validates the selected assignment and applied graph before knowledge/Identity/Engine access. Exact node approvals, standing read policies, execution hashes and retry protections remain. Production registers only NVIDIA; shared provider and telemetry helpers remain dependencies of assigned chat.

Vault readers, Station/Context Box stores, historical run records, provider adapters and front-office infrastructure still have runtime, IPC, diagnostic or regression consumers. They must not be classified as unused merely because normal chat currently isolates itself from source retrieval. Workers, package CLI entry points, policy documents, declaration files and test fixtures also have non-import entry points.

## Debug Audit — AI Infrastructure removal, 22 November 2026

**Component:** Settings, provider configuration and desktop bridge.

**Observed issue / request:** The separate AI Infrastructure feature was explicitly removed. Its prior empty backend stub still exposed a Settings entry and an IPC API after the NVIDIA-only reset.

**Changes applied:** Removed the screen/styles, navigation controls, infrastructure backend, Hugging Face adapter/registration store, feature-only types, probes/tests and setup documentation. Removed the preload/IPC endpoint and its public TypeScript method; bridge version 23 requires a matching renderer. Historical provider identifiers remain accepted by saved-data schemas to preserve existing construction/history files, while retired credential configuration is rejected. Legacy reset cleanup still recognizes obsolete filenames. NVIDIA Settings, assigned chat, construction and Engine integration remain.

**Verification:** 492 tests: 490 passed, 2 optional live tests skipped, zero failures. Typecheck, formatting and source/import checks passed. Renderer compilation/static export completed, and the export-security step and production-entry offline desktop fixture passed. The bridge regression verifies that no infrastructure endpoint is registered or exposed; Settings has no feature button/screen and assigned NVIDIA chat/cancellation still work. No live credentials or data were changed for this removal.

The removal check also exposed a pre-existing packaging dependency on the now-absent `docs/REPORTS.md`. Packages explicitly disclose the missing historical report and link to their bundled README; malformed existing reports still abort packaging. The deleted report was not recreated. At that stage the standard build exited 1 after compilation/export because of a Next.js security reminder. The 23 November ORB-ARCH-001 follow-up independently verified the security patch, updated Next.js to 16.4.5 and passed the complete build without suppressing the reminder policy.

**Remaining limits:** Offline checks do not establish current NVIDIA connectivity. Shared transport and historical-storage compatibility code remains where other features depend on it.

## Validation commands

Run `npm test`, `npm run typecheck`, `npm run build` and `npm run test:worldview:electron`. Focused acceptance scripts are `scripts/acceptance/electron-financials-smoke.cjs` and `scripts/acceptance/electron-daily-price-smoke.cjs`. Tests use disposable profiles and synthetic Universes; live provider checks remain separate. Package builders verify manifests and include required documentation and dependency licenses.
