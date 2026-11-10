# Orbistry v1.0.0 — Victoria Beta release audit

Audit completed on 2026-10-29 against the local Windows x64 checkout. Measurements are logical bytes, not allocated disk blocks. Existing uncommitted empty-agent work was preserved and incorporated. No GitHub publication or history rewrite was performed.

## Release status: PARTIALLY READY

The clean baseline builds, essential regression checks pass, and an actual Windows installer/unpacked app have been produced. The packaged application starts empty and supports first agent/Context Box creation and native file reading. Remaining publication decisions/gaps: installer signing, project-source licensing, and a clean-machine installer/uninstaller test. macOS/Linux and live-provider grounding are not certified by this audit. No claim of production-grade stability is made.

## Architecture map (inspection before cleanup)

- React 19 / Next.js 16 App Router, statically exported to `out/`. No Next server is required at runtime. npm and `package-lock.json` own dependency installation; Tailwind/PostCSS and TypeScript build the renderer.
- Electron main/preload use CommonJS and Node. A sandboxed renderer has context isolation and no Node integration. Explicit IPC connects the renderer to main-process stores/providers.
- User-selected research files remain in the user's vault. Supported Markdown, CSV, PDF and image input feeds explicit review/Context Box workflows. Vault-local `.wonnyy/` holds Stations, Context Boxes, conversations and immutable run audits as versioned JSON; there is no SQL database.
- Electron userData holds model settings, encrypted provider credentials, agents and managed profile assets. Chromium maintains local UI storage, indexes and caches there. The old default vault was the developer's `C:\bank`; this must not be the public first-run default.
- Ollama is a separately installed local service. Gemini, NVIDIA NIM and OpenRouter are optional BYOK HTTPS providers, behind ProviderRegistry. No Orbistry account, mandatory hosted service or billing backend exists.
- CSV/statistics run in bounded local JavaScript worker threads. No Python runtime, virtual environment, scientific Python dependency or model weights were found in the measured checkout. Windows OCR uses a fixed PowerShell/WinRT script; PDF rasterization uses PDF.js plus native `@napi-rs/canvas`. Electron supplies Chromium/Node; the canvas binary is platform-specific.
- `public/` has branding, a CSS/SVG startup background and generated PDF.js resources. `build/` has required installer/window icons. `app/icon.png` is the Next metadata icon; these icon copies have different consumers. `scripts/fixtures/` and `*.test.cjs` are synthetic acceptance/unit-test inputs, not release data.
- `big-context/` contains design/history/handoff Markdown. `test-results/`, `.cache/`, `.next/`, `out/` and `dist/` are generated, ignored development/output trees. Existing `dist/` contains an obsolete Orbistry 0.1.0 installer and unpacked app.
- Packaging previously allowed all `electron/**/*` (including tests), `out/**/*` and icons. Next/React were production dependencies even though the renderer is statically bundled. This unnecessarily expanded packaged dependencies. Native dependencies must remain available for PDF/OCR behavior.
- Knowledge proposals use a separate local research-outbox through KnowledgeStore/ResearchKnowledge, with explicit approval. There is no advanced hosted memory layer. Main-process startup was missing the existing outbox/backdrop wiring; it is audited as a pre-existing regression, not a future feature.

## Initial measurements

Logical file bytes, links excluded, measured before cleanup. Full raw output: ignored `test-results/release-size-before.json`. This is a development checkout measurement, not an installer measurement.

| Category                                    |         Bytes | Decimal MB |
| ------------------------------------------- | ------------: | ---------: |
| Entire development folder                   | 2,516,361,328 |   2,516.36 |
| node_modules                                |   889,640,679 |     889.64 |
| Existing dist (obsolete artifacts)          |   885,166,991 |     885.17 |
| .next                                       |   658,194,164 |     658.19 |
| .cache                                      |    54,823,063 |      54.82 |
| test-results                                |    10,453,488 |      10.45 |
| Frontend export out                         |     6,423,024 |       6.42 |
| Public assets incl. generated PDF resources |     4,828,508 |       4.83 |
| Git metadata                                |     3,907,120 |       3.91 |
| Tracked files (subset, not additive)        |     4,122,718 |       4.12 |
| Old unpacked desktop app (subset of dist)   |   731,102,751 |     731.10 |
| Old 0.1.0 installer (subset of dist)        |   153,823,810 |     153.82 |

The originally reported ~1.9 GB is not reproduced as a release artifact. At audit time the folder is 2.52 GB (2.34 GiB), dominated by installed dependencies, old artifacts and build/cache trees. Electron's installed development package is 333,857,133 bytes; Next is 184,841,009; Windows SWC is 106,190,853; native canvas is 38,405,154; PDF.js is 34,497,725. Nested directory/package sizes overlap and must not be added twice. Two malformed Windows directory names cannot be reopened by normal path APIs; they are recorded as measurement errors, not silently deleted.

## Preservation boundary

This audit prepares clean defaults and packaging. It does not erase existing installed user profiles, keys, research vaults or Git history. Existing legacy profiles remain readable. Source icons, synthetic fixtures and canonical policy/protected kernel stay unless a traced replacement is verified. No automatic publication, release upload or history rewrite is performed.

## Before / after and the size explanation

The initial report was captured before cleanup; the after report was captured after dependency updates, the Windows installer build and removal of stale generated caches. Reports themselves add a few KB afterward. Decimal MB/GB are used throughout. [Machine-readable measurements](release-measurements.json) retain exact bytes and capture times; top-directory figures overlap when one row contains another.

| Measurement                                           |                            Before |                                   After | Interpretation                                                                   |
| ----------------------------------------------------- | --------------------------------: | --------------------------------------: | -------------------------------------------------------------------------------- |
| Whole development directory including release outputs |                       2,516.36 MB |                             1,608.33 MB | About 908 MB less; not the installed application                                 |
| Development directory excluding dist                  |                       1,631.19 MB |                             1,026.76 MB | Dependencies, source, build resources/caches and test reports                    |
| Tracked source files                                  |                           4.12 MB |                                 2.80 MB | Generated PDF worker removed from index; history unchanged                       |
| Source including pending release files, excluding Git |           Not captured separately | About 2.84 MB before final report files | Required icons/fixtures/docs retained                                            |
| Git metadata                                          |                           3.91 MB |                                 3.91 MB | No history rewrite                                                               |
| Source checkout plus Git                              |                     About 8.03 MB | About 6.74 MB before final report files | Excludes installation/output trees                                               |
| Installed node_modules                                |                         889.64 MB |                               957.78 MB | New Electron/build packages are larger, but not all ship                         |
| .next build/cache tree                                |                         658.19 MB |                                40.22 MB | Removed inactive dev cache and old-version production cache                      |
| Frontend export out                                   |                          6.423 MB |                                6.426 MB | Functionality retained; no cosmetic bundle target                                |
| Same-version unpacked package built during audit      |                         739.74 MB |                               443.35 MB | **40.07% smaller**, including installer-added elevation helper                   |
| Application ASAR                                      |                         243.21 MB |                                29.31 MB | Next/build dependencies, tests and maps excluded                                 |
| Installer                                             | 153.82 MB (old Orbistry 0.1.0 only) |               138.07 MB (Victoria Beta) | Old installer is a different version; no same-version before installer was built |
| Python environment/model weights                      |                         Not found |                               Not found | CSV/statistics remain JavaScript, OCR remains native Windows                     |

The old 0.1.0 unpacked app was 731.10 MB; it is distinct from the 739.74 MB same-version baseline built here. The final installed payload measurement is the unpacked directory, not an actual measured post-install footprint including shortcuts/registry/uninstaller. That clean-machine measurement remains untested.

Recommended current-architecture budgets: roughly **140 MB installer**, **445 MB unpacked Windows x64 app**, and **under 10 MB source checkout plus Git** at the measured revision. These are observations/budgets for this baseline, not hard caps for future features. Electron/Chromium, native canvas and PDF resources account for most remaining runtime size. Chromium language/resources are retained; there are no bundled macOS/Linux runtimes in the Windows package. External Electron-builder/npm caches outside this checkout were not included in the development-folder measurement.

## Cleanup and dependency decisions

Meaningful removals:

- Old `dist/` Orbistry 0.1.0 installer, blockmap, icon scratch and unpacked application after recording their measured sizes; replaced by the new release outputs.
- Temporary `.cache/release-before/` unpacked baseline after recording same-version package sizes.
- Inactive `.next/dev/` and `.next/cache/turbopack/v16.3.2-d0ac8828/`; checked that no matching workspace dev server or dev lock was active before removing the former.
- Audit-created npm/download scratch after installation; no dependencies or source removed with those caches.
- Twelve malformed-name Windows scratch directory trees. All descendants were verified to be directories under `Microsoft`, with no files or links, before native PowerShell removal. This resolved packaging ENOENT errors; it did not remove research data.
- Generated `public/pdf.worker.min.mjs` removed from Git's index, retained locally and regenerated by `prepare:pdf` from the locked PDF.js dependency. The same worker remains in the packaged frontend. Its historical Git blob remains.

Dependencies removed from the runtime bundle, **not removed from the development project**: Next, React and ReactDOM. They are build-only for the statically exported renderer and now live in devDependencies. No unused direct dependency was blindly deleted. The package update removed 42 transitive installed packages, added 28 and changed 53 according to npm; these are lockfile-resolution changes, not a claim that every removed package was independently dead code.

`@napi-rs/canvas` is now an explicit production dependency (previously accessed through PDF.js's optional transitive install), preserving scanned-PDF OCR. Runtime direct dependencies are canvas, PDF.js and Zod. Native canvas has only the target Windows x64 binary installed/packaged; unmet optional packages for other systems are expected. PDF resources and the fixed unpacked PowerShell OCR helper are retained. No Python environment needs pruning.

Security-related updates include Electron **37.10.3 → 45.1.0**, Next **16.3.2 → 16.4.3**, Zod **4.5.4 → 4.6.7**, React/ReactDOM **19.3.1**, canvas **1.0.13**, electron-builder **26.18.0**, and compatible current build/development dependencies in the lockfile. The npm audit changed from **29 findings (3 critical, 24 high, 2 moderate)** to **0**, as measured during this audit. This does not establish that the application has no vulnerabilities.

Static TypeScript analysis with both `noUnusedLocals` and `noUnusedParameters` passed. Traced component compatibility exports, Planet components, icons and synthetic fixtures have callers and were retained. Existing storage compatibility/schema logic and all provider adapters remain. Large architectural refactors and speculative cleanup were deliberately avoided.

## Security findings

| Severity                                | Finding                                                                                        | Result / residual limit                                                                                                                                                                                                                                                                                                                                 |
| --------------------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Critical (resolved dependency findings) | Old Next/toolchain dependency advisories                                                       | Updated lockfile; npm audit now zero. Production remains static, with no Next server shipped.                                                                                                                                                                                                                                                           |
| High (resolved)                         | Old Electron and Zod advisories                                                                | Updated runtime/validation dependencies; deterministic and actual packaged tests pass.                                                                                                                                                                                                                                                                  |
| High (resolved boundary weakness)       | IPC handshake alone did not establish trusted main-frame/document identity across all handlers | All production IPC now checks exact webContents, mainFrame and document URL. Unit tests cover wrong windows, subframes and navigated pages.                                                                                                                                                                                                             |
| Medium (hardened)                       | Renderer navigation/permissions/content policy                                                 | Denied unrelated navigation/webviews and permission requests. Packaged apps ignore development URLs; developer renderer URLs are loopback HTTP only. Static export uses inline-script hashes, local resource loading, no remote renderer connections, no objects or frames. Inline styles and WASM compilation remain necessary allowances.             |
| Medium (open)                           | Unsigned Windows installer/executable                                                          | Authenticode reports `NotSigned`; local SHA-256 file produced. Hashes are integrity checks, not publisher identity. No signing credential was available or requested.                                                                                                                                                                                   |
| Medium (open)                           | Native PDF/image parsers and same-user workers                                                 | Input/path/time/resource limits exist, but there is no separate OS sandbox per document/worker. Electron still uses file URLs; a dedicated local protocol is future hardening, not part of a release rewrite.                                                                                                                                           |
| Low (documented)                        | Immutable audits may retain research questions, answers and calculations after chat deletion   | README/SECURITY describe retention and local profile/vault protection. No user records were deleted by this audit.                                                                                                                                                                                                                                      |
| Informational                           | Credential/logging audit                                                                       | safeStorage OS encryption is retained; plaintext/basic_text fallback rejected. Keys are not returned to the renderer. Unexpected IPC errors log only error type, not raw exception/request contents. Known-pattern scan found no matches in current tracked/pending source and 577 reachable historical blobs. This is not an exhaustive entropy audit. |
| Informational                           | Source licensing not selected                                                                  | Explicit `UNLICENSED`, no invented LICENSE. Public GitHub visibility does not itself grant an open-source license. Maintainer decision required before advertising open-source licensing.                                                                                                                                                               |

Current credential patterns checked include OpenRouter, Gemini, GitHub and NVIDIA keys and private-key headers. Only locations would be reported; values are never printed. No Git history rewrite was necessary: the largest historical blob is the generated PDF worker at 1,312,452 bytes; no huge historical installers/models/databases were found. If a real secret is later discovered, revoke it first and obtain explicit approval before `git filter-repo` and coordinated forced-push procedures. No history-rewrite command was executed.

Security reference: [Electron's official security guidance](https://www.electronjs.org/docs/latest/tutorial/security), including current runtime, sender validation, sandboxing, navigation and CSP recommendations. Runtime version verified against [Electron v45.1.0](https://github.com/electron/electron/releases/tag/v45.1.0) and the locked dependency.

## First run, privacy and compatibility

The production AgentStore fallback is empty; compatibility test fixtures explicitly opt into historical built-ins. Saved legacy profiles remain readable without automatic rewrites. The already requested local empty-agent reset remains respected. A new install does not seed Orbistry, CHronoZ, personal images, research knowledge or a hidden chat. The UI supports no selected agent and invites the user to create one.

First boot creates an empty `Documents/Orbistry Vault`, never `C:\bank`. An explicit folder choice is persisted locally. Environment overrides remain available to development/test launches; they do not copy or ship the referenced data. Existing installed secrets and vault files were preserved. The clean-default requirement applies to release inputs and fresh profiles, not destructive erasure of the developer's real keys.

Vault `.wonnyy/` owns Station/Context Box/chat/run JSON, while profile storage owns agents/settings/encrypted credentials/assets/UI caches. Research files stay user-owned. Configured remote providers receive approved request content and included history; provider retention/billing apply. There are no new accounts, mandatory cloud services, subscriptions or telemetry. Provider discovery can contact configured endpoints; Ollama uses loopback. Grounding/citation checks do not guarantee a factually correct model answer.

## Verification and performance

- **PASS:** 288 deterministic tests, TypeScript, additional unused-symbol analysis and production build on updated dependencies.
- **PASS:** `npm ci --dry-run --ignore-scripts` validates lockfile consistency. Standard install/update completed; packaging uses the locked runtime. Reproducibility means dependency/input/process reproducibility, not byte-identical NSIS output across machines/timestamps.
- **PASS:** clean isolated first boot with no agents/boxes/chats/remote keys/research; empty default Documents vault; visible `v1.0.0 Victoria Beta`.
- **PASS:** empty-agent restart and first custom-agent UI; provider settings/key encryption/model discovery/streaming/retry/cancel/history restart; PDF/image/scanned-PDF OCR and token estimates; usage indicator/reset countdown. Transports for model answers in those acceptance tests are synthetic and no real keys or paid models were used.
- **PASS:** actual `dist/win-unpacked/Orbistry.exe` under an isolated profile/vault: empty state and keys, export CSP, native PNG/scanned-PDF OCR, first custom agent/Context Box, and known-answer CSV aggregation in the ASAR-packaged worker.
- **PASS:** archive contents audited: 1,466 entries, no tests, source maps, Next server/build packages, personal research/credentials/profile databases, scripts, docs, caches, Git data or model weights. Required policy, PDF resources, canvas native binary and unpacked OCR helper are present.
- **NOT TESTED:** fresh Windows VM installer/uninstaller end to end, macOS/Linux distributions, live-provider grounding/answer-quality benchmark, full penetration testing.

Startup measurements used one new process/profile per sample, synthetic provider transport and an empty vault. OS disk cache was not flushed. They are not statistically rigorous cold-start benchmarks or large-vault load measurements.

| Sample                            | Before (Electron 37) | After (Electron 45) |
| --------------------------------- | -------------------: | ------------------: |
| Launch to workspace ready         |             1,839 ms |            2,334 ms |
| Main process private memory       |            85,644 KB |           82,748 KB |
| Sum of per-process private memory |           291,524 KB |          292,688 KB |
| Sum of per-process working sets   |           440,444 KB |          428,240 KB |

Working-set sums can double-count shared memory; these are Electron's process metrics, not a unique resident-memory total. No startup speed improvement is claimed: this representative after sample is about 0.5 s slower. The first updated-runtime launch during installation transition also recorded **146,560 ms**; it is preserved separately as an outlier, with cause not established. Do not hide it or treat the repeat as proof of a cold-start SLA. Model download/install time is not an intentional startup stage; the normal repeated launch and the packaged acceptance complete successfully.

## Important files changed

- `package.json`, `package-lock.json`, `.gitignore`, `.env.example`: version/commands, runtime vs build dependencies, explicit packaging rules, native OCR unpacking, output naming and ignored generated/user/secrets state. Source icons remain tracked. `next.config.ts` explicitly disables production browser source maps; generated `next-env.d.ts` reflects the production build's types.
- `electron/main.cjs`, new `electron/vault-settings.cjs` and `electron/desktop-security.cjs`: empty default/persisted vault, trusted IPC/navigation/permission controls, and restoration of existing profile-backdrop and research-outbox startup wiring. `electron/ai/ipc.cjs` avoids raw error logging.
- `electron/ai/agent-store.cjs`: empty production defaults with legacy compatibility. `features/chat/use-chat-runtime.ts`, `features/chat/chat-panel.tsx`, `features/agent/agent-contacts.tsx`, `agent-workspace.tsx`, `agent.css`: preserve the preceding empty-agent work and make startup/selection/presentation work with zero agents. `features/context-boxes/context-boxes.tsx` disables attach until an agent exists.
- `components/top-bar.tsx`, `startup-progress.tsx`, `knowledge-sidebar.tsx`, `planet-details.tsx`: consistent beta marker and removal of developer-vault fallback wording; no product redesign.
- `electron/desktop-security.test.cjs`, `vault-settings.test.cjs`, `electron/ai/agent-store.test.cjs`, `agent-construction.test.cjs`, `chat-service.test.cjs`, `scripts/fixtures/legacy-agents.cjs`: empty/default/security regression coverage with explicit legacy fixtures.
- `scripts/secure-export.cjs`, `audit-package.cjs`, `release-size-audit.cjs`, `release-secret-audit.cjs`: repeatable CSP, package-content, disk-size and safe secret-pattern checks. `scripts/electron-release-smoke*.cjs`, `electron-packaged-smoke.cjs`, `electron-empty-agents-smoke.cjs`, and updated `electron-online-smoke-main.cjs` / `electron-smoke-main.cjs`: isolated first-run/packaged and legacy acceptance coverage.
- `README.md`, `SECURITY.md`, `CONTRIBUTING.md`, `RELEASE_NOTES.md`, and this audit/measurement snapshot: public documentation, honest feature limits and release procedure. `public/pdf.worker.min.mjs` is a generated Git-index deletion, not removed runtime functionality.
- `.github/workflows/ci.yml`: read-only Windows baseline checks for install, tests, build, types, secret patterns and dependency advisories; official actions are pinned to verified release commit IDs. It has not run on GitHub yet and publishes no artifacts or releases.

## GitHub publication checklist

| Item                                                                                    | Result                                                                       |
| --------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| Empty fresh install; no private research, personal agents, keys or chats in package     | PASS                                                                         |
| Explicit production file rules; source icons and native file functionality retained     | PASS                                                                         |
| Version 1.0.0 / Victoria Beta in package, installer naming and visible UI               | PASS                                                                         |
| README, contribution/security guidance, draft release notes, ignored state/output trees | PASS                                                                         |
| Known-pattern current/history secret scan                                               | PASS (limited scope documented)                                              |
| npm advisory audit and deterministic/build/type checks                                  | PASS                                                                         |
| Actual unpacked app launch; native OCR and local CSV worker                             | PASS                                                                         |
| Synthetic BYOK, context/chat/agent and usage regression                                 | PASS                                                                         |
| Windows NSIS artifact and SHA-256 file                                                  | PASS                                                                         |
| Authenticode signing                                                                    | FAIL — no certificate configured                                             |
| Project-source open-source license selected                                             | FAIL — no license chosen; explicitly UNLICENSED                              |
| Clean Windows VM install/uninstall                                                      | NOT TESTED                                                                   |
| macOS/Linux package/runtime tests                                                       | NOT TESTED                                                                   |
| Live-model grounding/quality benchmark                                                  | NOT TESTED                                                                   |
| Public GitHub release/tag upload                                                        | NOT TESTED — intentionally not performed                                     |
| New GitHub Actions workflow execution                                                   | NOT TESTED — local equivalent commands passed; remote workflow not triggered |

## Remaining debt and recommended next milestone

ProviderRegistry and provider adapters already separate the runtime from Ollama/Gemini/NVIDIA/OpenRouter. Capability metadata, manual budgets, timeouts and retries remain runtime-owned; routing/model-intelligence policy and commercial billing are future layers. Do not substitute a hosted gateway in this baseline.

Memory is local and concrete: ConversationStore/RunStore and knowledge proposal/outbox storage use filesystem JSON/Markdown; KnowledgeStore is coupled to profile/vault identities, and the reviewed-proposal skill remains tied to legacy Orbistry. A future explicit memory interface can isolate those implementations, but was not introduced merely for release preparation. Context Box review/version identities and protected evidence boundaries remain intact; semantic retrieval and document snapshots are not added.

Remaining hardening includes a dedicated local protocol, stronger native/worker isolation, more repeated startup profiling, explicit retained-audit management and test maintenance for legacy built-ins vs new empty defaults. Observability remains local run diagnostics, not mandatory hosted collection. There are no Redis/Kubernetes/databases/accounts/paid-memory or billing dependencies to remove.

**Next milestone recommendation (not implemented):** finish signed Windows distribution and a clean-VM install/uninstall/update matrix, select source licensing, then establish repeated startup and live-model grounding benchmarks. Only after that should model-routing or a local memory-interface milestone be scoped.

## Artifacts

Local, ignored outputs:

- `dist/Orbistry-1.0.0-Victoria-Beta-win-x64.exe` — 138,073,467 bytes, unsigned.
- `dist/win-unpacked/` — 443,353,508 bytes at audit (includes elevation helper).
- `dist/SHA256SUMS.txt` and installer blockmap.
- Installer SHA-256: `9701cbb3082480eb629bab78637a90bdcad2b68ad6c626a5859c6993bca3412f`.

No commit, push, tag or GitHub release was made as part of this audit. Review the changes and remaining publication decisions before release.

## Top 20 largest tracked files (after cleanup snapshot)

These are source-file sizes from Git-index membership at measurement time. Pending audit documents are reported separately in source totals; none introduces a large binary. No current tracked file exceeds 1 MB after removing the generated worker from the index.

| Path                                                                           |   Bytes |
| ------------------------------------------------------------------------------ | ------: |
| package-lock.json                                                              | 213,583 |
| build/icon.ico                                                                 |  98,949 |
| electron/ai/chat-service.test.cjs                                              |  67,407 |
| app/icon.png                                                                   |  64,035 |
| build/icon.png                                                                 |  64,035 |
| big-context/task-model-integration-architecture.md                             |  42,311 |
| scripts/agent-electron-acceptance.cjs                                          |  42,295 |
| features/agent/agent-construction.tsx                                          |  42,036 |
| app/globals.css                                                                |  42,021 |
| features/chat/use-chat-runtime.ts                                              |  41,379 |
| big-context/tech-stack.md                                                      |  40,301 |
| electron/ai/orchestrator.cjs                                                   |  37,590 |
| big-context/model-integration-online-NVIDIA Provider.md                        |  36,026 |
| components/app-shell.tsx                                                       |  34,545 |
| big-context/planetview-experience.md                                           |  34,213 |
| features/chat/chat-panel.tsx                                                   |  33,693 |
| electron/station-service.cjs                                                   |  32,148 |
| electron/ai/chat-service.cjs                                                   |  29,022 |
| features/model-settings/model-settings.tsx                                     |  27,655 |
| big-context/feature/Orbistry_Context_Box_Knowledge_Chunk_Vibecoding_Prompt.md |  26,822 |

## Top 20 largest directories (after cleanup snapshot)

Nested rows overlap; do not sum them. Runtime locale files and native canvas are intentional production dependencies.

| Path                                                                                      |       Bytes |
| ----------------------------------------------------------------------------------------- | ----------: |
| node_modules                                                                              | 957,777,219 |
| dist                                                                                      | 581,573,655 |
| dist/win-unpacked                                                                         | 443,353,508 |
| node_modules/electron                                                                     | 378,041,046 |
| node_modules/electron/dist                                                                | 374,098,132 |
| node_modules/next                                                                         | 192,314,363 |
| node_modules/next/dist                                                                    | 192,049,553 |
| node_modules/next/dist/compiled                                                           | 136,512,931 |
| node_modules/@next                                                                        | 110,283,900 |
| node_modules/@next/swc-win32-x64-msvc                                                     | 110,272,005 |
| node_modules/next/dist/compiled/next-server                                               |  85,932,884 |
| dist/win-unpacked/resources                                                               |  69,303,747 |
| dist/win-unpacked/locales                                                                 |  51,195,226 |
| node_modules/electron/dist/locales                                                        |  51,195,226 |
| .next                                                                                     |  40,218,127 |
| node_modules/@napi-rs                                                                     |  39,938,254 |
| dist/win-unpacked/resources/app.asar.unpacked                                             |  39,780,030 |
| node_modules/@napi-rs/canvas-win32-x64-msvc                                               |  39,777,061 |
| dist/win-unpacked/resources/app.asar.unpacked/node_modules/@napi-rs/canvas-win32-x64-msvc |  39,776,784 |
| dist/win-unpacked/resources/app.asar.unpacked/node_modules/@napi-rs                       |  39,776,784 |
