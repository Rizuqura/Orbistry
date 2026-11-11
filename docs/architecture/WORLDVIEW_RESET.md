# Controlled WorldView reset — engineering report

Date: 2026-11-11 (Asia/Jakarta). Scope: standalone agent inference, feature rename, and an empty WorldView baseline. No future entity/context architecture is implemented.

## Recovery point and branch

- Backup SHA: `2b9bef41327cbacdda78c7f343b1f426224f9283`.
- Verified remote: `origin/backup/pre-worldview-reset-2026-11-11`, on [Rizuqura/Orbistry](https://github.com/Rizuqura/Orbistry/tree/backup/pre-worldview-reset-2026-11-11).
- `git ls-remote --heads origin backup/pre-worldview-reset-2026-11-11` returned the same full SHA before refactoring began.
- Refactor branch: `refactor/worldview-controlled-reset`. No merge into `main`; no force push or remote history rewrite.
- Phase 0 reviewed all 13 modified and two untracked source files. The backup preserved all 15. The repository secret audit scanned 486 tracked files, two untracked files, static output and historical Git blobs with zero known-pattern findings. No environment/private-data paths or files larger than 5 MiB were included. The scan is pattern-based, not a guarantee against every possible secret.

## Result

**Agent runtime.** `chat-service.cjs` now invokes `standalone-chat.cjs` directly. The request contains identity/system instructions, applied personality and inline preferences, the user message, budgeted conversation history, and provider inference configuration. The runtime accepts no Vault/source reader, retrieval callback, Engine executor or tool declaration. Provider normalization, streaming, model preparation, bounded pre-generation transient retry, cancellation/deadlines, token usage, request observation and durable runs remain.

Agent creation, configuration apply, personality, model/provider selection, appearance and ordinary chat retain their existing controls and styling. Only explanatory text and the New Chat source requirement changed. Start Chat works with no source selection. Agent-side source links and context actions cannot read files; inactive mutation controls report the temporary restriction. Construction file listing returns an empty list; file/box review, source refresh and binding switches fail closed. Agent IPC for local Engine selection/probing/execution/report opening and knowledge proposal/retrieval is inactive.

Historical conversation bindings, source hashes and old runs remain intact. New chats use source-free conversation schema 7. New assistant messages on old conversations carry a standalone marker and an empty actual-source list, so old provenance is not rewritten or falsely reported as newly read evidence. Existing box-bound and Engine-only conversations can continue without resolving their former sources. Previously discussed information can still occur in retained conversation history.

**WorldView.** `components/worldview.tsx` plus `app/worldview.css` are the entire new view. It has no data props, persistence, effects, listeners or graph dependencies. It displays “WorldView” and “Your world begins here.” The application's existing `/` route hosts the `worldview` navigation identifier; there was no separate filesystem PlanetView route to migrate. Native chat pop-out infrastructure remains shared, with a generic window identifier and existing geometry utilities.

Removed visualization systems include scene/node rendering, folder-to-planet graph construction, orbital/gravity layout, motion/orbits, hit testing, labels, search navigation, minimap, detail panels, station/context-box graph projections, animation preference restoration, map-specific styles, the map budget badge and five dedicated legacy map smoke scripts. No installed dependency was removed: the existing runtime dependencies also serve PDF, validation or other shared infrastructure.

## Data and infrastructure preserved

No source folders, Vault contents, Station records, Context Boxes, knowledge records, old conversations, run audits, provider settings, credentials or user-owned images were deleted. No persistent visualization records were removed; any old browser keys remain stored and are ignored. No export was needed because this reset does not delete persisted records.

Conversation storage still uses Vault-local `.wonnyy/` metadata. Shared Vault scanning, document readers/editor, OCR, Station/source services, Context Box/knowledge stores, provider adapters, gateway/provided-model logic and encryption remain. The shared application shell still scans the Vault for Workspace; WorldView itself does not load it or start any visualization watcher. This is inference isolation, not a relocation of durable storage or a new process sandbox.

The old source-bound orchestrator, prompt/source utilities, report validation and report adapters remain where they have shared consumers, direct unit tests or historical-record compatibility responsibilities. They are unreachable from normal agent inference. Underlying source-management services remain separate from disabled agent-facing actions.

## Validation

| Check | Result |
| --- | --- |
| `npm test` | 375 tests: 373 passed, zero failed, two explicitly opt-in live-provider tests skipped |
| `npm run typecheck` | Passed |
| `npm run build` | Passed; static `/`, not-found and icon output, followed by production CSP export |
| `node scripts/electron-worldview-smoke.cjs` | Passed with an isolated synthetic provider, temporary Vault and temporary Electron profile |
| Targeted isolation tests | New/legacy chats, no knowledge/tool access, unchanged user file, personality/model apply, history separation, inactive IPC and model-preparation retry passed |
| Vault/source/storage/credentials/provider/gateway regressions | Included in passing full suite |
| `git diff --check` | Passed |
| Active app reference scan | No PlanetView/Planet View/`planet` feature identifier references remain in `app`, `components`, `features`, `electron` or `lib` |
| Changed-source formatting | Passed after formatting touched source files |
| `npm run format:check` | Four pre-existing, unchanged files fail; verified against the backup revision |
| Lint | No lint script/configured lint command is available |

The Electron check verified a blank WorldView across reload with old animation state present, zero legacy node elements, agent creation, chat without a Context Box, two-turn request history, no source text or tools in requests, navigation back to WorldView, Workspace file reading, unchanged source SHA-256 and zero renderer errors. Screenshots and a machine-readable result are in ignored `test-results/worldview-empty.png`, `worldview-agent-chat.png` and `worldview-reset-ui.json`.

Windows initially blocked sandboxed Electron from reading its installed runtime ACL. The successful hidden test ran outside the filesystem sandbox with disposable application data; no ACLs or production security settings were changed. One intermediate full test run encountered Windows `EPERM` in the existing concurrent knowledge-store lock test; its isolated rerun and the final full run passed.

The four unchanged formatting failures are `features/agent/engine-inspector.tsx`, `electron/ai/agent-store.test.cjs`, `electron/ai/credential-store.test.cjs` and `electron/ai/front-office-evaluation.test.cjs`.

## Limitations and remaining work

- Real provider calls and real BYOK quota/entitlement were not exercised. The OpenRouter and NVIDIA opt-in live tests require explicit live settings and dedicated credentials. Local and remote adapters, credential handling, provided-model routing and usage observation were verified with synthetic transports/unit tests.
- Earlier acceptance scripts for source binding, document injection, Engine tools and the removed visualization intentionally describe retired workflows. The 32 bound-orchestrator chat cases, six agent-tool integration cases and visualization-only cases were retired/replaced; general chat persistence, recovery, concurrency, cancellation, model and provider tests remain. The reset smoke is the current UI acceptance entry. Broader old UI scripts were not certified for this source-free baseline.
- Some retained controls/legacy profile labels still describe Context/Knowledge/Engine concepts. Their data is preserved and their integrations are inactive; re-enabling them requires new, explicit interfaces. Shared Context Box/source-management infrastructure is not a permission boundary for a future tool runtime.
- The old detailed README is preserved as a historical snapshot in `docs/archive/README-before-worldview-reset.md`; its relative links assume its original repository-root location. Existing release notes, evidence and historical architecture documents were intentionally not rewritten.
- Rollback should use the verified backup branch. New schema-7 conversations require this reset's readers; older releases will not understand those newly created records. Keep new user work backed up before reverting application versions.

## Starting points for the next implementation

Start composed WorldView UI at `components/worldview.tsx`, using the existing palette and global typography. Define the entity/storage contract before adding state or visualization. Design W&T context transformation, provenance, scopes and budgets behind explicit interfaces separate from `standalone-chat.cjs`. Reconnect the agent only after permission-checked runtime contracts and isolation tests exist; do not restore the removed graph or file readers by default.

## File inventory

The following inventory lists source changes relative to the verified backup; historical documentation and synthetic tests are included. Generated build output, test artifacts and user data are excluded.

```text
M	README.md
M	app/globals.css
M	app/layout.tsx
D	app/planet-neutral.css
D	app/planet-sidebar.css
M	app/soft-surfaces.css
M	app/typography.css
M	app/victoria.css
M	components/app-shell.tsx
D	components/planet-controls.tsx
D	components/planet-detail-panel.tsx
D	components/planet-details.tsx
D	components/planet-minimap.tsx
D	components/planet-node.tsx
D	components/planet-scene.tsx
D	components/station-panel.tsx
M	components/status-bar.tsx
M	components/top-bar.tsx
M	electron/agent-memory-binding.test.cjs
M	electron/ai/chat-service.cjs
M	electron/ai/chat-service.test.cjs
M	electron/ai/context-box-store.test.cjs
M	electron/ai/context-identity.cjs
M	electron/ai/conversation-store.cjs
M	electron/ai/engine-chat.test.cjs
M	electron/ai/ipc.cjs
M	electron/ai/nvidia-integration.test.cjs
M	electron/ai/online-integration.test.cjs
M	electron/ai/run-store.cjs
M	electron/chat-window.cjs
M	electron/chat-window.test.cjs
M	electron/main.cjs
M	electron/station-service.cjs
M	electron/vault-service.cjs
M	electron/vault-service.test.cjs
M	features/agent/agent-workspace.tsx
M	features/agent/construction-source-picker.tsx
M	features/chat/chat-panel.tsx
M	features/chat/chat-presentation.css
M	features/chat/conversation-history.tsx
M	features/chat/panel-geometry.test.cjs
M	features/chat/panel-geometry.ts
M	features/chat/source-label.ts
M	features/chat/use-chat-popout.ts
M	features/chat/use-chat-runtime.ts
D	features/context-boxes/context-box-manager.tsx
M	features/context-boxes/context-boxes.tsx
D	features/usage-monitor/planet-usage-badge.tsx
D	features/usage-monitor/usage-monitor.css
D	lib/context-box-stations.test.cjs
D	lib/context-box-stations.ts
D	lib/planet-hit-testing.test.cjs
D	lib/planet-hit-testing.ts
D	lib/planet-labels.test.cjs
D	lib/planet-labels.ts
D	lib/planet-layout.test.cjs
D	lib/planet-layout.ts
D	lib/planet-motion.test.cjs
D	lib/planet-motion.ts
D	lib/planet-navigation.test.cjs
D	lib/planet-navigation.ts
D	lib/planet-orbits.test.cjs
D	lib/planet-orbits.ts
D	lib/planet-rendering.test.cjs
D	lib/planet-rendering.ts
D	lib/planet-vault.ts
D	lib/station-projection.ts
D	lib/use-planet-animation.ts
M	package.json
M	scripts/agent-electron-acceptance.cjs
M	scripts/electron-agent-workspace-smoke.cjs
M	scripts/electron-appearance-smoke.cjs
M	scripts/electron-chat-popout-smoke.cjs
M	scripts/electron-chat-smoke.cjs
M	scripts/electron-markdown-editor-smoke.cjs
M	scripts/electron-online-chat-smoke.cjs
D	scripts/electron-planet-chrome-smoke.cjs
D	scripts/electron-planet-gravity-smoke.cjs
D	scripts/electron-planet-neutral-smoke.cjs
D	scripts/electron-planet-performance-smoke.cjs
D	scripts/electron-planet-sidebar-smoke.cjs
M	scripts/electron-soft-surfaces-smoke.cjs
M	scripts/electron-usage-monitor-smoke.cjs
M	scripts/electron-victoria-smoke.cjs
M	scripts/fixtures/online-smoke-fetch.cjs
M	types/ai.ts
D	types/graph.ts
A	app/worldview.css
A	components/worldview.tsx
A	docs/architecture/WORLDVIEW_RESET.md
A	docs/archive/README-before-worldview-reset.md
A	electron/ai/standalone-chat.cjs
A	electron/ai/standalone-chat.test.cjs
A	scripts/electron-worldview-smoke.cjs
```
