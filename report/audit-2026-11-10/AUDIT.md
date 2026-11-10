# Orbistry initial codebase audit

Audit date: 10 November 2026 (Asia/Jakarta). Scope: initial audit and measurable baseline from the supplied refactoring brief. No production refactoring, deletions, dependency changes, schema migrations, commits, installation, or publishing were performed.

**Result:** unit tests, typecheck, production export, current Windows packaging, and packaged functionality pass. The baseline is not fully green: two Electron smoke tests fail, formatting fails in seven files, and the development dependency audit reports moderate advisories. Address the verified UI and validation failures before starting broad cleanup.

## Baseline identity and method

- Repository: local Orbistry folder; origin is Rizuqura/Orbistry. Branch main, HEAD 18debb9da16c877cd54c6ff023b0b747c42d7da1.
- There were **252 working-tree status entries before the audit**. They include prior rebranding, renamed documents, and feature work. This audits that dirty working tree, not pristine HEAD. Existing deletions are not audit deletions. See [starting inventory](inventory.json) and [starting status](working-tree.txt).
- Host Node 24.18.0; packaged Electron 45.1.0, Chromium 156.0.8078.49, embedded Node 24.22.1. Installed package versions and logical sizes are in the inventory.
- Build outputs were regenerated with the existing preparation/export scripts. A new unsigned x64 NSIS package was built under tmp/audit-package-2026-11-10 with publishing disabled. Existing dist outputs were preserved.
- Initial typecheck encountered the obsolete workspace permission boundary after the folder rename. Rerunning against the actual Orbistry directory with the proper filesystem permission passed. This was an execution-environment failure, not a TypeScript diagnostic in the application.
- All Electron acceptance used isolated profiles and synthetic vaults. No actual research vault, saved credentials, or paid provider inference was used. Provider accounting tests use mocked transport.

## Findings, ordered by priority

### F1 ? P1: the floating chat blocks usage-monitor controls

**Confirmed failure.** Running scripts/electron-usage-monitor-smoke.cjs times out at line 104 while clicking Refresh usage. Playwright reports that the Orbistry Agent avatar intercepts pointer events. The saved [screenshot](evidence/usage-monitor-overlap.png) shows the expanded usage panel behind the floating chat.

The usage panel has z-index 20 in [usage-monitor.css](../../features/usage-monitor/usage-monitor.css), while the floating chat has z-index 25 in [victoria.css](../../app/victoria.css), line 403. The failure is a real interaction obstruction in the smoke viewport with the panel expanded; it is not evidence that budget calculation fails. The provider accounting smoke passes separately.

**Next change:** make both panels' controls reachable in their default placements, preserving the requested bottom-left chat and right-side map. Validate expanded/collapsed usage, enlarged avatar, resizing, dragging, and keyboard access at supported window sizes. Do not suppress the failure with a forced click. Evidence: [usage smoke log](evidence/usage-smoke.txt).

### F2 ? P1: deeply nested orbital systems make Fit View practically invisible

**Confirmed mathematical reproduction.** In [planet-layout.ts](../../lib/planet-layout.ts), computeGravityLayout starts at line 332. Each parent's footprint includes the full child-system radius; placement then adds the child radius again when extending the parent bounds. A chain compounds that expansion at every level.

Using the existing orbital algorithm and fitPlanetCamera at 900 by 600:

| Nested directory depth | World width | Main sun diameter after Fit View |
|---|---:|---:|
| 5 | 8,949.6 | 27.03 px |
| 10 | 275,599.2 | 0.878 px |
| 20 | 281,857,576.8 | 0.000858 px |

These are synthetic chains of empty directories, so the problem does not require a large file count. This experiment does not claim a renderer screenshot or actual filesystem timing. See [reproduction data and method](nested-layout.json). At ten levels even the 480-unit sun becomes subpixel; the current finite-number checks will not catch that usability failure.

**Next change:** constrain the growth of nested-system bounds while retaining size ordering, the seven root guides, folder/file relationships, and deterministic placement. Add a meaningful nested-layout geometry check before changing the algorithm. Do not restore the old minimum zoom floor, which would clip large worlds.

### F3 ? P2: the general Planet View performance smoke contradicts the current memory boundary

**Confirmed baseline test failure.** scripts/electron-planet-performance-smoke.cjs, line 72, expects 201 files; the backend correctly returns 200. The fixture's extra file is inside agentContext.memory. The same smoke subsequently expects that memory directory in snapshot.entries.

[vault-service.cjs](../../electron/vault-service.cjs), line 341, explicitly excludes agent memory from research indexing, while preserving direct settings access. [vault-service.test.cjs](../../electron/vault-service.test.cjs), line 87, verifies this boundary. The smoke is stale relative to that contract. Execution stops before its culling, pan/zoom, reload, and rescan assertions; those later assertions cannot be reported as passing in this run.

**Next change:** update the fixture assertions to enforce the current exclusion and retain the direct-read check. Rerun the complete performance smoke. Evidence: [failure log](evidence/planet-smoke.txt). The separate current gravity smoke passes: seven root guides, root size 480, no folder-to-folder connections, no root spokes, no renderer errors.

### F4 ? P2: dependency advisories currently fail the full dependency gate

npm audit reports **six moderate affected packages, arising from one underlying minimatch advisory**, through electron-builder and its build-tool dependency graph. It reports zero high or critical advisories. npm audit --omit=dev reports zero advisories. The ASAR inventory contains no minimatch or electron-builder runtime package.

The upstream [minimatch advisory](https://github.com/advisories/GHSA-g3hv-75wg-m249) describes pattern amplification and excessive CPU/memory consumption. This audit establishes a development/build dependency exposure; it does not demonstrate exploitation through Orbistry's runtime vault inputs. npm's suggested top-level fix is a major-version change to electron-builder 25.1.0, which is a downgrade from installed 26.18.0. Do not apply npm audit fix --force blindly.

**Next change:** verify a compatible upstream patched dependency path or targeted override, then rerun Windows packaging, native OCR, package-content checks, and smoke tests. The existing Windows CI runs npm audit, so this is also a reproducible gate failure. Evidence: [full advisory JSON](dependencies.json), [production-only audit](runtime-dependencies.json).

### F5 ? P2: vault and conversation caches have no cross-vault retention bound

**Confirmed ownership pattern; impact not yet measured as a leak.** [vault-service.cjs](../../electron/vault-service.cjs), lines 16 and 59, keeps image OCR, PDF, and snapshot maps at module scope. PDF text and pageTexts are retained together. A rescan prunes deleted PDFs within that root (line 520), but there is no eviction of roots previously opened, nor a corresponding image-index prune. [chat-service.cjs](../../electron/ai/chat-service.cjs), lines 38?56, retains successfully loaded ConversationStore promises by vault root; only failed loads are removed.

Repeatedly switching among large vaults can therefore retain previous roots' text, snapshots, and stores for the process lifetime. No heap snapshot, sustained retention slope, or out-of-memory event was measured; call this a retention risk rather than a proven user-visible memory leak.

**Next change:** first measure a repeated multi-vault workload; then define cache ownership/eviction for inactive roots without discarding durable conversations, model-run provenance, or an active request. Measure retained heap after settling and garbage collection under an explicit profiling harness.

### F6 ? P2: initial vault scanning eagerly extracts PDF text

[vault-service.cjs](../../electron/vault-service.cjs), scanDirectory at line 311 and indexPdf at line 265, awaits PDF indexing during the recursive scan. Extraction reads a complete PDF, retains per-page strings, and constructs combined text. Individual PDFs are limited to 100 MiB, but there is no aggregate text-index budget across a vault. Directory traversal is sequential, and the engine-bundle recognition probe also runs per directory.

**Inference:** PDF-heavy startup/rescans are a plausible larger cost than basic folder enumeration. This audit did not time a representative multi-PDF research vault, so no speedup or resource regression is claimed. Preserve content hashes, OCR fallback, scanned-document support, search correctness, and source validation when considering lazy extraction or bounded scheduling. Existing PDF page/document cleanup and task destruction are valuable lifecycle protections.

### F7 ? P2: formatting and readability gates do not implement the requested style

npm run format:check fails for:

- features/agent/engine-inspector.tsx
- electron/ai/agent-store.test.cjs
- electron/ai/credential-store.test.cjs
- electron/ai/front-office-evaluation.test.cjs
- electron/ai/nvidia-integration.test.cjs
- scripts/electron-chat-smoke.cjs
- scripts/electron-online-chat-smoke.cjs

The formatter command omits substantial app, lib, CSS, and component coverage. No checked-in ESLint/Prettier configuration was found. Prettier alone does not require braces or eliminate nested ternaries. A TypeScript AST scan of 136 production TS/TSX/CJS files counted **1,414 unbraced control-flow bodies** and **168 directly nested ternary expressions**. Those are style signals, not 1,582 functional bugs. See [counts and method](code-quality.json).

The largest production modules include use-chat-runtime.ts (1,284 lines), front-office-settings.tsx (1,154), agent-construction.tsx (1,142), app-shell.tsx (1,120), orchestrator.cjs (1,081), station-service.cjs (1,005), and chat-service.cjs (1,002). Length is a review signal, not proof that splitting improves the architecture.

**Next change:** establish braces and readable-condition rules, cover owned source consistently, exclude generated/vendor/minified assets, and apply changes by subsystem. Prioritize lifecycle/persistence boundary comments and extraction of cohesive responsibilities over line-count reduction. CJS backend code is outside the current TypeScript check because allowJs is false; its unit/security/smoke coverage must remain.

## A. Cleanup inventory and candidate classification

No files, functions, or dependencies were removed; no duplicated logic was consolidated or files reorganized during this initial audit.

| Candidate | Classification | Evidence and disposition |
|---|---|---|
| Proven unused application files/imports | None established | Literal local-import traversal found no unreferenced renderer module; the stricter unused-local/parameter probe reported only two generated Next development declarations. This does not prove all exports or CSS are used. |
| interpolatePlanetCamera in lib/planet-navigation.ts | Test-only reference | Only its declaration and planet-navigation.test.cjs callers were found. Preserve until deciding whether the tested camera-transition helper remains an intended contract. |
| electron/ai/llm-front-office/evaluation/fixtures.cjs and harness.cjs | Test/tool-only packaging candidate | Used by front-office benchmark tooling and tests, not the observed application graph; currently included by electron/**/* in the package. Together 18,028 source bytes. Exclude from release packaging after a path/caller check; retain the tests and tooling in the repository. |
| dataset-worker.cjs and dataset-engine.cjs | Dynamically referenced runtime | Worker filename is constructed in dataset-session.cjs; the worker requires dataset-engine. Both are necessary. Packaged CSV computation passed. A static root traversal initially flags them, demonstrating why search alone is insufficient. |
| electron/launch.cjs | Package-script/bootstrap only | Referenced by npm start/dev launch commands. Preserve. |
| PDF worker, CMaps, standard fonts, WASM decoders | Duplicated but required at current paths | Renderer loads local out resources; main-process PDF.js uses its package paths. Exact duplicates are real, but removing either tree requires a verified shared-resource path. Preserve OCR and uncommon PDF encoding coverage. |
| public/orbistry-icon and generated app/build/public icons | Build/packaging referenced | Original artwork feeds prepare-icons; generated icons serve Windows and web routes. The original artwork also gets copied into out. Consider excluding only an unused shipped source copy after URL/packaging verification. Do not remove the build input or prepared Windows icon. |
| Fonts in out/fonts and hashed Next media | Duplicated assets | Identical font payloads appear at both paths. Review stylesheet URLs and exported routes before pruning; retain font licenses. Small opportunity relative to native/runtime sizes. |
| .wonnyy metadata, qterminal-* preferences, wonnyy-agent IDs, old environment fallbacks and historical profile names | Legacy compatibility required | Persisted identifiers, source envelopes, encrypted-profile reuse, and approved research workflows depend on them. README explicitly documents this. Do not rename/delete as cosmetic cleanup. |
| Historical docs, evidence, fixtures, old policy documents | Historical/test or uncertain | Preserve repository history and review context. The explicitly obsolete host policy is already excluded from release packaging. |
| CSS selectors, generic helper exports, alternative package entry formats | Uncertain | Dynamic classes, CommonJS exports, package export maps and runtime paths need deeper checks. No safe deletion asserted. |
| .next, node_modules, dist, tmp, test-results, local logs | Generated/local artifacts | Separate from source and already excluded from distribution. Clearing these can reclaim workspace disk but does not establish a smaller installer. Existing release outputs were preserved. |

See [literal import candidates and caveats](module-candidates.json) and [resolved renderer import inventory](inventory.json). All three direct production dependencies have live roles: canvas for native PDF/OCR processing, pdfjs-dist for PDF parsing/rendering, zod for validation. No dependency removal is justified by this audit.

## B. Size and runtime baseline

All disk figures are logical file bytes, not filesystem allocation; 1 MiB = 1,048,576 bytes. Before below means the current unoptimized working tree. No after-optimization run exists.

| Metric | Before | After | Change |
|---|---:|---|---|
| Existing tracked working-tree file contents | 4.35 MiB | Not applicable: audit only | Not measured |
| Source including pending untracked files | 5.55 MiB | Not applicable | Not measured |
| Development node_modules installation | 913.41 MiB | Not applicable | Not measured |
| Static renderer export | 7.19 MiB | Not applicable | Not measured |
| Current Windows unpacked app | 423.93 MiB | Not applicable | Not measured |
| Current app.asar archive | 29.23 MiB | Not applicable | Not measured |
| Current Windows x64 installer | 132.15 MiB | Not applicable | Not measured |
| Fresh-process startup to hidden startup screen | 2,692 ms, one sample | Not applicable | Not measured |
| Early idle summed process working sets | 381.86 MiB | Not applicable | Not measured |
| Early idle summed process private bytes | 288.52 MiB | Not applicable | Not measured |
| Representative active memory | Not measured | Not measured | Not measured |
| OS-cache-cold startup and long-session retention | Not measured | Not measured | Not measured |

Startup used the new packaged executable, a fresh profile and empty synthetic vault, with the OS disk cache unflushed after packaging. Memory was sampled two seconds after the startup screen disappeared, before OCR. Summed working sets can count shared pages more than once and are not unique physical RAM. These are an early-idle observation and one launch measurement, not statistical performance targets. See [runtime sample](runtime-packaged.json).

The initial whole workspace occupied 1.83 GiB, dominated by development installation, historical dist, tmp and .next. That scan preceded the new audit package, which adds another generated package under ignored tmp. Existing dist contains a QTerminal 1.0.0 installer from 29 October, 138,073,467 bytes; it is not the current Orbistry 1.0.1 baseline.

### What is actually shipped

The current content audit passed: no forbidden tests, maps, Git metadata, research vault inputs, build tooling, Next runtime or React development package trees. Runtime JS chunks are correctly included in out. Windows OCR is unpacked as required. Archive entries: 1,522. See [package inventory](package-inventory.json).

Largest application payload groups, counting native unpacked entries as well as packed files:

| Payload | Logical bytes | Interpretation |
|---|---:|---|
| @napi-rs/canvas-win32-x64-msvc | 39,776,784 | Native Skia and ICU; required by current processing |
| pdfjs-dist | 16,052,212 | Main/worker builds, fonts, encodings and decoders |
| out | 7,537,975 | Static app, PDF renderer resources, icons, fonts |
| zod | 5,773,881 | Validation package, including alternate entries/type artifacts |
| electron application source | 664,602 | Backend application implementation |

Most installed size remains Electron/Chromium plus required native processing. Removing development Next/SWC from node_modules changes developer disk usage; those packages are already excluded from the shipped archive.

SHA-256 grouping found **61 identical payload groups above 10 KB, with 5,080,366 bytes (4.85 MiB) of repeated logical content**. The largest repeat is the 1,312,452-byte PDF worker at its package and renderer paths. This is an upper bound on byte-identical redundancy in the inspected archive entries, not a verified safe removal amount and not an installer savings estimate. Native unpacked binaries were excluded from hashing. Audit resource paths before tightening package filters; preserve third-party notices. Replacing canvas/PDF.js or Zod is not justified merely to trim bytes.

### Layout CPU observations

Three synchronous Node calls per synthetic case, excluding React/DOM, IPC, file scans and GPU work:

| Shape | Nodes | Observed calls |
|---|---:|---:|
| Balanced | 211 | 4.5?9.2 ms |
| Balanced | 2,101 | 22.0?59.3 ms |
| Balanced | 10,501 | 106.2?132.0 ms |
| One very wide sibling group | 1,001 | 2.3?2.6 ms |
| One very wide sibling group | 10,001 | 88.7?102.0 ms |

All tested positions were present and finite. Sibling indexOf calls inside placement loops, repeated ancestor translation of descendant positions, and whole-graph rendering work are candidates for profiling; timings do not establish which dominates. Large synchronous layout calls may stall the renderer, but these Node measurements are not renderer frame-rate measurements. See [raw cases](layout-benchmark.json). Keep the new gravity UX intact when optimizing.

## C. Architecture and code quality assessment

The existing boundaries are useful and should be retained:

1. React app/features own UI state and presentation; preload exposes a narrow desktop API rather than raw Electron/Node objects.
2. Main process owns trusted-window IPC, vault selection and service composition. Guarded IPC checks sender, main frame and entry document; API version matching is additive protection, not its replacement.
3. Agent construction/store validate settings and appearance; orchestration assembles approved source context, invokes a provider, validates outputs and records provenance.
4. Provider adapters and registry isolate Ollama, Gemini, NVIDIA and OpenRouter authentication/protocol details. Usage observation is best-effort and must not break inference.
5. Vault/context/knowledge stores own research visibility and durable reviewed membership. Agent memory and engine runtime folders have separate responsibilities.
6. Dataset workers isolate CSV computation and enforce scoped datasets. JSON storage owns serialized atomic writes, symlink checks and corruption handling.

Prioritize extraction around those responsibilities within the largest modules. Do not combine strict research chat and front-office experiments merely because both invoke providers: their permissions, context and persistence contracts differ. Preserve canonical prompts, immutable model-run records, retry/recovery and cancellation behavior.

Positive lifecycle findings: chat clears its timeout and active request in finally; scan and OCR-job maps release in-flight work; dataset sessions terminate their worker and detach abort listeners; the reviewed React usage/chat/planet listeners and animation timers have cleanup; metrics retention is capped and separated from immutable provenance. No orphaned listener leak was demonstrated.

Security review observed contextIsolation, sandbox, nodeIntegration disabled, trusted-main-frame IPC, restricted navigation, local CSP, schema checks, path/symlink guards, encrypted safeStorage credentials with plaintext-backend rejection, and backend-only key access. These are code observations plus existing tests, not a penetration-test certification. The known-pattern secret audit found zero matches across 426 tracked, 44 untracked, 251 exported files and 1,132 reachable historical blobs. No matched values were printed and history was not rewritten. Its coverage is limited to known patterns, not exhaustive entropy analysis or credential rotation. Electron/Chromium advisories were not independently exhaustively assessed by npm audit.

## D. Validation performed

| Check | Actual result |
|---|---|
| npm test | 425 tests: 423 passed, 2 skipped, 0 failed; 24.84 s |
| npm run typecheck | Passed after correcting execution permissions |
| npm run build | Passed: icon/PDF preparation, Next static export, secured CSP |
| npm run format:check | Failed in seven files listed above |
| Additional noUnusedLocals/noUnusedParameters probe | Two generated .next/dev/types declarations only; no application diagnostics from this probe |
| Current Windows x64 NSIS build | Passed, unsigned, publish never, isolated output path |
| scripts/audit-package.cjs on current win-unpacked | Passed; required workers/native modules/CSP and matching version present |
| Packaged executable smoke | Passed: empty state, no configured remote keys, CSP, native image and scanned-PDF OCR, CSV worker sum, agent creation, Context Box creation; zero renderer errors |
| Current gravity Electron smoke | Passed: seven guides, size 480 root, connection constraints; zero renderer errors |
| Provider budget Electron smoke | Passed for NVIDIA, Gemini, OpenRouter and replacement-key reset; zero renderer errors |
| General Planet performance Electron smoke | Failed: stale 201-file expectation versus 200; later checks not reached |
| Usage monitor Electron smoke | Failed: Refresh usage obscured by floating chat/avatar |
| npm audit | Failed: six moderate affected development packages, one underlying advisory |
| npm audit --omit=dev | Passed: zero reported advisories |
| Known-pattern source/export/history secret audit | Passed: zero findings, with stated limitations |

Packaged smoke was executed by an in-memory copy of the existing script with its executable path redirected from dist/win-unpacked/Orbistry.exe to tmp/audit-package-2026-11-10/win-unpacked/Orbistry.exe, and audit report paths separated. Production and checked-in test source were not edited. This adaptation is necessary to avoid validating the stale dist release. Startup/memory instrumentation was inserted immediately after the existing startup-screen wait. See [packaged result](packaged-smoke.json), [validation metadata](baseline.json) and evidence text files.

No claim is made that all Electron scripts or paid live-provider acceptance passed. No signed/installed-upgrade scenario, real-provider latency, representative PDF-heavy active-memory trace, accessibility sweep, exhaustive CSS coverage, or full export-level dead-code analysis was run. Two skipped unit cases remain skipped; no unavailable check is marked green. Since application code was not changed, the recorded failures are baseline findings, not regressions introduced by cleanup.

## E. Recommended next changesets

1. Fix the usage-panel obstruction and add the relevant interaction regression check. Keep the requested panel placements and enlarged avatar.
2. Fix nested gravity bounds with deterministic geometry tests; keep the seven-band size ordering and folder/file rules. Then repair the stale performance fixture and complete its interrupted checks.
3. Resolve the build-tool advisory through a compatible dependency change; rerun packaging and native smoke acceptance.
4. Establish formatting/braces rules, fix the seven baseline files, and expand source coverage in small reviewable areas. Add concise boundary comments where ownership is unclear.
5. Tighten package filters for proven tool-only content, then investigate PDF/font duplication using package-level read/OCR tests. Measure unpacked and installer deltas separately; do not project compressed savings from raw bytes.
6. Profile large PDF and multi-vault workloads. Add bounded transient caches or lazy work only when ownership and invalidation preserve correctness, provenance and cancellation.

Each implementation changeset should name the behavior/contract it preserves, provide its own before/after numbers where relevant, and run affected tests. No cleanup savings, lower memory use, or startup improvement has been achieved or claimed by this audit.
