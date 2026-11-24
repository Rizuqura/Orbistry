# ORB-ARCH-001 architecture audit

**Date:** 23 November 2026, Asia/Jakarta

**Contract:** `AGENTS.md`, ORB-ARCH-001 v0.1.0

**Result:** audit and follow-up repairs verified. Build, dependency-cycle and core/shared ownership findings are resolved. Package isolation, receipt uniformity and retention/load limitations remain documented; this is not a certification of every execution path or live provider.

## Assessment

Orbistry remains an Electron modular monolith with a static Next.js renderer, deterministic WorldView/Vault/Engine services and optional assigned-agent inference. No services, queues or application data were migrated. Universe chat remains reset as requested. Existing assignment, construction, NVIDIA settings and UI behavior were retained.

The working tree already contained extensive pending implementation and documentation changes. This audit preserved them. All runtime checks used disposable Universes/profiles and synthetic sources or provider responses. No real credentials, private documents or live model requests were used.

Three localized issues were repaired:

1. Excel source operations depended on native dispatch located in the AI registry.
2. Identity capability discovery loaded that same AI registry just to read built-in definitions.
3. Package Engine authorization accepted truthy non-boolean policy decisions, including `{ allowed: false }`.

The follow-up repaired the remaining build and dependency findings: Next.js was patched from 16.4.3 to 16.4.5, source authorization was separated from preview dispatch to remove the lazy cycle, and shared persistence/validation/error/token helpers now have neutral ownership with compatibility exports. The standard build now exits 0, including compilation, static export and export security. The current source graph has zero dependency cycles and zero core-to-AI imports.

## Current module boundaries

| Responsibility         | Actual entry points and control flow                                                                                                                                                                                                                                       |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Portal                 | `app/page.tsx` → `components/app-shell.tsx` and feature components. `electron/preload.cjs` exposes named operations; renderer Node integration is disabled.                                                                                                                |
| Desktop composition    | `electron/main.cjs` wires services, the active Universe and NVIDIA adapter. `createWindow` sets `contextIsolation: true`, `nodeIntegration: false`, `sandbox: true`.                                                                                                       |
| IPC authority          | `electron/core/security/desktop-security.cjs:guardedIpc` checks the actual WebContents, main frame and entry document. `electron/core/ipc/worldview-ipc.cjs:registerWorldViewIpc` additionally checks the captured Universe. AI IPC retains its version handshake.                                |
| WorldView              | `electron/domains/entity/worldview-store.cjs` persists Entity metadata and source references. `readWorldViewChip`, assignment operations and mutation queues remain independent of model inference.                                                                                       |
| Vault                  | `electron/domains/universe/vault-service.cjs:statVaultSource` resolves original source references using containment/stat checks. Entity metadata and Knowledge Cards reference sources rather than replacing the Vault.                                                                     |
| Connectors             | `electron/domains/entity/connector-store.cjs` persists validated relationships. `engines/backend-identity/connector-encoder.cjs:encodeConnections` produces descriptive `untrusted-relationship` metadata; edges are not access grants.                                                   |
| Knowledge and Identity | `knowledge-store.cjs` validates/applies literal indexes. `identity-compiler.cjs` builds derived snapshots. `identity-runtime.cjs:createIdentityRuntime` requires a host authorization function and checks permissions/freshness before and after sensitive operations.     |
| Built-in Engines       | `electron/engines/definitions.cjs` owns shared definitions. `electron/engines/native.cjs:executeNativeEngine` dispatches the existing native allowlist; trusted application callers remain responsible for authorization.                                                  |
| Package Engines        | `electron/engines/registry/registry.cjs:EnginePackageRegistry` validates installed bytes, trust, Entity links, approval/network consent and independent host admission before worker execution. `readResult` checks stored ownership/hashes without executing the package. |
| Assigned Agents        | `electron/ai/agents/entity-agents.cjs` binds assignment, Entity, active graph, Identity and operation permissions. `entity-jurisdiction.cjs` issues host-owned in-process grants; `assigned-chat.cjs` invokes the retained provider with bounded evidence.                        |
| Gateway                | `ChatService` and the retired front-office entry reject Universe generation with `UNIVERSE_CHAT_RESET`. No dormant orchestration was re-enabled by this audit.                                                                                                             |

The installed Next.js static-export and client-boundary guides were inspected. `next.config.ts` uses `output: "export"`; production loads local `out/index.html`. There is no deployed Next.js API server enforcing these desktop permissions.

Shared infrastructure now lives under `electron/shared`: atomic storage, runtime errors, safe schema parsing, context ceilings and a pure token estimator. Legacy paths under `electron/ai` re-export the same constructors/functions; saved error codes, object identity and serialization remain compatible. `electron/domains/knowledge/knowledge-source-access.cjs` owns bounded record reads and applied-source authorization. Both Knowledge Store and Excel use that read port; preview dispatch no longer introduces a reverse dependency.

## Contract coverage

| Contract area                        | Evidence and conclusion                                                                                                                                                                                                                                                                                                                                     |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| §§2–5 modularity and optional AI     | The new core-only regression prohibits AI runtime module imports and fetch calls, then saves an Entity, assigns/reads a source, loads connectors, compiles Identity and retrieves chunks/capabilities. Native dispatch now resides in Engine code; old AI exports remain compatible. Neutral shared ports remove the former utility-placement dependencies. |
| §6 capability lifecycle              | Package installation does not grant trust or permission. Links, policy, host admission, execution status and verified result hashes remain distinct. Assigned requests still bind approval to graph/Identity/parameters and preserve execution records. Native lower-level adapters are not authorization services.                                         |
| §6.2 receipts                        | Package receipts contain execution/Entity/engine IDs, package and input hashes, host admission/link policy, timestamps, status and output hash. Assigned-agent receipts remain bound to assignment, graph, Identity and node. Hashes provide local integrity, not independent provider authenticity.                                                        |
| §§7–8 provenance and retrieval       | Identity chunks retain source/version/line/hash provenance. The runtime checks Entity grants and source freshness. Lexical retrieval works without embeddings or a model. Existing tests reject cross-Entity knowledge access and ensure connector metadata does not confer authority.                                                                      |
| §9 conversation boundaries           | Universe generation stays disabled. Assigned chat still uses bounded history/evidence and preserves independent session storage. Provider failure does not turn a consultation into Engine success.                                                                                                                                                         |
| §10 security                         | Main-frame IPC, disabled renderer Node access, path/schema checks, explicit approval and default-deny host policies are present. The truthy-policy defect was reproduced and fixed. Third-party package execution remains trusted local code, not an OS security sandbox.                                                                                   |
| §11 efficiency                       | Daily Price has a 50-entry memory limit and coalesced requests; financial pending requests are removed in `finally`. Identity chunk/response budgets and package input/output/time limits remain. This audit did not change caching or claim a speed/memory improvement.                                                                                    |
| §§12–14 reliability and verification | Runtime failures remain errors. Static boundaries, source/import checks, unit/integration tests and two isolated Electron workflows were executed. The initial build failure was repaired; the final standard build passes.                                                                                                                                 |

## Debug Audit — Engine/AI dependency coupling

**Component:** native Engine dispatch and Identity capability discovery.

**Affected files:** `electron/excel-service.cjs`, `electron/ai/engine-registry.cjs`, `electron/engines/native.cjs`, `electron/engines/backend-identity/capability-registry.cjs`, `scripts/orbistry-engine.cjs`, architecture tests and documentation.

**Observed error:** the fresh-process core-only regression failed with `ORB_ARCH_AI_IMPORT: ./ai/engine-registry.cjs`. Source inspection also located the deferred Identity import of the same registry.

**Actual control flow before repair:** Excel service → AI registry → native dispatch/definitions. Identity compiler → capability discovery → AI registry → definitions. These were avoidable code dependencies; they are not evidence that normal core operations previously required a successful LLM response.

**Root cause:** deterministic Engine responsibilities were exposed through an AI-owned aggregator despite shared Engine definitions already being available.

**Changes applied:** moved the existing native dispatcher unchanged into `electron/engines/native.cjs`; the AI aggregator re-exports the exact same function. Excel uses the Engine port, Identity discovery uses shared Engine definitions, and the package CLI imports the core package registry directly. Existing callers, allowlists, arguments, errors and adapter behavior remain compatible.

**Verification:** the core-only process and export/allowlist compatibility tests pass. Existing Excel, financial, Identity, assignment and Engine tests pass. Offline desktop inspection/compilation and assigned chat still work.

**Confidence:** high for the identified imports and repaired paths. The follow-up removes the remaining core imports through narrow shared ports; AI-specific provider schemas and conversation budgeting remain in their existing AI modules.

## Debug Audit — non-boolean host authorization

**Component:** `EnginePackageRegistry.execute` and `readResult`.

**Affected files:** `electron/engines/registry/registry.cjs`, `electron/engine-packages.test.cjs`, `docs/engines/ENGINE_AUTHORING.md`.

**Observed error:** a regression expecting denial for an authorization callback returning `{ allowed: false }` failed with `Missing expected rejection`. The trusted, linked deterministic operation executed in the fixture.

**Root cause:** JavaScript truthiness (`!await authorize(...)`) admitted objects, nonempty strings and nonzero numbers. This differed from Identity runtime's existing literal-true policy.

**Changes applied:** initial execution admission, result publication and both historical-read admission checks now require `decision === true`. `false`, objects, strings, numbers, `null` and `undefined` deny access. Documentation now specifies a boolean or `Promise<boolean>` callback.

**Verification:** regression cases reject non-boolean execution/history decisions and reject a policy that changes from `true` to an object during publication or historical access. Existing valid boolean-policy CLI, worker, history and desktop cases pass.

**Classification:** conditional fail-open authorization bug, repaired. Exploitation required a misconfigured trusted host callback plus the other existing package/link prerequisites. No exploitation or user-data disclosure was observed.

**Confidence:** high; failure reproduced before repair and regression passed after repair. Trusted host code still owns policy decisions and exact-call approval binding.

## Debug Audit — build gate

**Component:** Next.js build dependency and lockfile.

**Observed error:** the initial `npm run build` compiled/exported but exited 1 with `SecurityFatalError` for installed Next.js 16.4.3.

**Root cause and evidence:** the installed upgrade assessment reported affected dependency ranges. The upstream [November security release](https://nextjs.org/blog/november-2026-security-release) and [16.4.5 release](https://github.com/vercel/next.js/releases/tag/v16.4.5) independently identify the patch release. No forced testing flag or explicit upgrade-policy environment override was active. This establishes the dependency/build issue, not that the static desktop app was exploited.

**Changes applied:** updated the minimum Next.js dependency and lockfile to 16.4.5 in the existing 16.4 line. Package metadata confirmed compatibility with the current Node/React versions. Only Next.js, its env helper and platform SWC lock entries changed; three installed packages changed on this machine. No upgrade-reminder suppression, compiler patch, major-version migration or lifecycle script was used.

**Verification:** the full standard build now exits 0 and completes the existing export-security step. Fresh-build Electron checks pass. The earlier failed build remains recorded as reproduction evidence.

## Debug Audit — source cycle and shared ownership

**Component:** Knowledge Store/Excel source authorization and shared core helpers.

**Observed error:** the strengthened core-only regression rejected `./ai/json-store.cjs`. The source graph reported the deferred Knowledge Store ↔ Excel service cycle and 17 reviewed core-to-AI utility imports.

**Root cause:** preview dispatch and applied-source validation depended on each other, while generic infrastructure was hosted in the AI namespace. The cycle was structural debt; no production initialization failure was established.

**Changes applied:** extracted unchanged bounded companion reads and source validation into `knowledge-source-access.cjs`. Excel still checks current assignment/applied references before and after parsing and before export. Generic JSON storage, errors and parsing moved into neutral shared modules; only the pure token estimator was extracted from conversation budgeting. Context ceilings have a neutral shared entry/declaration. Thin legacy exports retain function/class identity, error names/codes, storage layout and existing public methods.

**Verification:** 15 focused architecture/Excel/Knowledge tests pass, including assignment revocation during parsing, preview/export authorization, original-source preservation, helper identity and a fresh process that prohibits every `electron/ai` import. The final source graph has no cycles or core-to-AI imports. The architecture gate now rejects all cycle groups and no longer exempts core utility imports.

**Remaining risks:** this changes module ownership, not cache or concurrency policy. No source, assignment, chat, construction or receipt schema was migrated. Existing AI callers may continue using legacy exports; core callers use neutral ports.

## Repeatable architecture gate

```powershell
npm.cmd run audit:architecture
npm.cmd run audit:source
node --test tests/integration/architecture-contract.test.cjs electron/engine-packages.test.cjs
npm.cmd test
npm.cmd run typecheck
```

`scripts/audit/audit-architecture.cjs` parses actual TypeScript/JavaScript syntax rather than matching source strings. It excludes type-only imports and reports file/line/target information. It does not execute application modules or inspect private data.

The gate rejects renderer Node/Electron/backend imports, backend presentation imports, all core-to-AI imports, unresolved local imports and every dependency cycle group. The former cycle and core-utility exceptions were removed after the follow-up repairs.

Settings imports only the explicitly reviewed pure helper `electron/shared/context-limits.cjs`, which contains arithmetic/constants and no Node or IPC access. The scanner permits that renderer/shared helper only while it remains dependency-free. A fixture verifies that adding a dependency makes the exception fail. This is not permission to import arbitrary backend code; the old AI path remains only as a compatibility export for existing backend callers.

Static results after follow-up: **219 production source files, 790 literal runtime imports, zero prohibited boundaries, zero unresolved local imports, zero dependency cycles and zero core-to-AI utility imports**. One nonliteral import requires manual review: the package worker loads its checked manifest entry. Its trust/digest/host authorization checks and trusted-code limitations were inspected; this is an intentional runtime extension point.

This scanner cannot establish complete semantic security, detect every reflective/computed dependency or prove runtime policy correctness. The explicit boolean-policy regression illustrates why static and runtime evidence are both necessary.

## Verification results — architecture repairs

| Check actually executed                              | Result                                                                                                                                                                   |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Initial audit baseline                               | 510 tests: 508 passed, 2 optional live skips, zero failures                                                                                                              |
| Follow-up focused architecture/Excel/Knowledge tests | 15 passed, including source-revocation and legacy-helper identity checks                                                                                                 |
| Final full suite                                     | 517 tests: 515 passed, 2 optional live skips, zero failures                                                                                                              |
| Typecheck and formatting                             | Passed; new shared/read-port files also checked separately                                                                                                               |
| Source audit                                         | 303 CommonJS files and 414 production imports checked; no syntax/missing-import errors                                                                                   |
| Architecture audit                                   | 219 production files, 790 literal imports; zero prohibited boundaries, unresolved local imports, cycles or core-to-AI utility imports                                    |
| Standard production build                            | Passed, exit 0 on Next.js 16.4.5, including TypeScript, static export and the existing security step                                                                     |
| Production-entry Electron reset/registry             | Passed on the fresh export: NVIDIA-only registration, assigned chat/cancellation, unchanged definitions, package catalog IPC, real worker execution and zero page errors |
| Electron Backend Identity                            | Passed on the fresh export: offline generation/reuse, chunks/contracts, freshness, source integrity and inspector controls; actual Node exit code 0                      |

The initial 16.4.3 build failure is retained in the original build log; the follow-up log records the full successful command. Upgrade reminders were not disabled. The Identity fixture's nonfatal Node module-type warning remains recorded; a Node subprocess harness captures its actual exit status rather than treating PowerShell stderr formatting as the test result.

Evidence is generated under `test-results/orb-arch-001-*`, including `followup-before.log`, `followup-targeted.log`, `followup-tests.log`, `followup-build.log`, `followup-source.log`, `followup-architecture.json` and both follow-up desktop logs. These use disposable/synthetic data and are not release inputs.

Not executed: live NVIDIA/Yahoo/HTTPS publisher checks, a packaged installer/release, long-duration multi-Universe load or penetration testing. Mocked transports do not establish live provider health. No assertion is made that every historical report or legacy acceptance script reflects the current UI.

## Remaining design and operational limitations

1. **Package trust boundary.** Reviewed JavaScript runs with the user's OS permissions. Read-only/network declarations are host admission controls and author promises, not OS enforcement. Worker limits, environment filtering and cancellation do not provide a hostile-plugin sandbox or guaranteed descendant cleanup. Wider distribution of untrusted engines needs a separately designed isolation model.
2. **Receipt uniformity.** Assigned-agent and package-registry executions have receipts; lower-level native dispatch returns adapter data and some direct Knowledge Card reads retain caches/provenance. Not every built-in UI read uses one universal receipt store. Standardizing those callers needs a compatible application/adapter design and validation of existing saved formats.
3. **Retention/load.** Tag-association session data and several per-Universe queue maps retain entries, and package execution history has no automatic retention policy. Daily Price is bounded to 50 memory entries, and pending request maps clean up. No memory leak or bottleneck was reproduced. Profile many-Universe workloads and define retention before changing caching/concurrency.

The previous build failure, lazy cycle and shared-utility ownership findings are resolved, not remaining exceptions in the gate.

## Architecture decision ? neutral read/shared ports

**Status:** implemented and verified.

**Context:** generic core services depended on AI-owned helpers, while Knowledge preview and Excel authorization formed a lazy cycle.

**Decision:** use a neutral applied-source read port and shared infrastructure modules, keeping all original runtime permission/freshness checks. Preserve legacy exports by identity; retain AI-specific provider schemas and history selection in the AI layer.

**Alternatives considered:** factory injection across every caller would change existing integration contracts; leaving a lazy-cycle exemption would retain the dependency problem. Moving the whole application to the example `src/` tree is unnecessary.

**Consequences and migration:** source authorization has one implementation and no reverse preview dependency. Constructors, functions, error codes and on-disk formats remain compatible; no application-data migration is required. The gate now rejects every core-to-AI import and cycle group.

**Verification:** the core-only process denies all AI imports, the compatibility test checks shared identities, real Excel tests recheck revoked assignments, and the full build/test/desktop checks above pass.

## Settings Engine catalog and publisher signatures — subsequent verification

The subsequent user-requested **Settings → Engines** view consumes read-only package discovery and existing integration definitions. It distinguishes registered integrations, installed package versions, local trust, signature validity, fingerprints, operation contracts and Entity links. The catalog optionally checks the caller's captured Universe; Entity-scoped replies omit other Entities' links. No package signing, installation, trust or execution endpoint was added to the renderer.

Optional Ed25519 proof now binds the canonical unsigned manifest and its file checksums. Key generation/signing/verification are explicit terminal authoring operations. Every present signature is verified during offline package inspection, including discovery and worker execution; unsigned packages retain their previous behavior. Valid self-signatures do not confer publisher identity or local trust. The exact format and ADR are in the [signing guide](../engines/ENGINE_SIGNING.md).

Current verification after this addition: 523 tests, 521 passed, 2 optional live skips, zero failures; 25 focused registry/signing tests passed. Build/typecheck/format checks pass. Source audit checks 306 CommonJS files and 420 production imports; architecture analysis covers 222 production files and 803 literal runtime imports with no forbidden boundaries, unresolved local imports, cycles or core-to-AI imports. Fresh-build Electron acceptance verifies signed/unsigned Settings rows, search, fingerprints, links, command examples and smaller-window fit; registry bytes and execution records remain unchanged while browsing. It also verifies actual signed-worker execution and preserves assigned chat/cancellation/agent definitions with zero page errors. Test keys and provider responses are disposable/synthetic.

## Performance

Changes remove avoidable dependencies and tighten boolean admission; they do not introduce a new caching strategy, concurrency model, microservice or background daemon. No CPU, RSS, throughput or percentage improvement is claimed. The static auditor records its elapsed time for diagnostics, not as an application performance benchmark. Representative load measurements remain a prerequisite for future performance repairs under §11.

## Files changed by this audit

- Added `scripts/audit/audit-architecture.cjs`, `tests/integration/architecture-contract.test.cjs` and `electron/engines/native.cjs`.
- Updated Engine/Identity/Excel dependencies in `electron/ai/engine-registry.cjs`, `electron/engines/backend-identity/capability-registry.cjs`, `electron/excel-service.cjs` and `scripts/orbistry-engine.cjs`.
- Tightened package authorization in `electron/engines/registry/registry.cjs` and added regression coverage in `electron/engine-packages.test.cjs`.
- Added `audit:architecture` to `package.json`; refreshed current architecture/engine documentation and the documentation index.
- Added `electron/domains/knowledge/knowledge-source-access.cjs` and `electron/shared/{json-store,runtime-errors,validation,token-budget,context-limits}.cjs` plus the shared context declaration. Updated core imports, preserved legacy AI exports, and changed only the shared-helper import in the Settings renderer.
- Updated Next.js to the 16.4.5 patch in `package.json`/`package-lock.json`; the lock diff is limited to Next.js, its env helper and platform SWC packages.

No agent definition, assignment, original source, real credential, saved chat, construction graph or permission policy was migrated. Core ownership repairs preserved existing UI behavior; the subsequent requested Settings Engine tab is additive. Assigned-agent chat/construction behavior remains verified.


## Debug Audit: Entity sidebar minimization

**Component:** WorldView Entity sidebar presentation.
**Affected Files:** app/worldview.css.
**Observed Error:** Minimizing hid the Entity list but retained the resized outer container height.
**Root Cause:** Browser-native resize sets an inline height, which overrides the normal minimized height rule.
**Changes Applied:** The minimized selector uses height: auto !important to collapse the container to its header while preserving the inline expanded dimensions.
**Verification:** Headless Chrome with the actual WorldView stylesheet and a sidebar DOM fixture: resized height 482px collapsed to 44px (42px header plus borders), then restored to 482px; width stayed 302px.
**Remaining Risks:** This checks browser layout with a fixture, not a full Electron interaction workflow. No backend behavior changed.
