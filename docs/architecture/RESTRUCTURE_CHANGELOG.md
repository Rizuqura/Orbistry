# Restructure changelog

Specification: ORB-ARCH-002 / Phase 01. Baseline HEAD: `9ac7b7f5a1bbfbf67ef9f83cfda1f8105981fcde`. The working tree already contained extensive authorized work and user deletions; it was snapshotted before moves rather than reset.

## Exact relocations

153 files relocated.

| Previous path | Implemented path |
| --- | --- |
| `components/worldview.tsx` | [features/worldview/worldview.tsx](../../features/worldview/worldview.tsx) |
| `components/pdf-viewer.tsx` | [features/workspace/pdf-viewer.tsx](../../features/workspace/pdf-viewer.tsx) |
| `components/knowledge-sidebar.tsx` | [features/workspace/knowledge-sidebar.tsx](../../features/workspace/knowledge-sidebar.tsx) |
| `components/document-workspace.tsx` | [features/workspace/document-workspace.tsx](../../features/workspace/document-workspace.tsx) |
| `features/worldview/chip-dialog.tsx` | [features/entities/chip-dialog.tsx](../../features/entities/chip-dialog.tsx) |
| `features/worldview/carousel-source.tsx` | [features/knowledge/carousel-source.tsx](../../features/knowledge/carousel-source.tsx) |
| `features/worldview/chip-icon.ts` | [features/entities/chip-icon.ts](../../features/entities/chip-icon.ts) |
| `features/worldview/carousel-model.ts` | [features/knowledge/carousel-model.ts](../../features/knowledge/carousel-model.ts) |
| `features/worldview/assign-files-dialog.tsx` | [features/entities/assign-files-dialog.tsx](../../features/entities/assign-files-dialog.tsx) |
| `features/worldview/csv-preview.test.cjs` | [features/knowledge/csv-preview.test.cjs](../../features/knowledge/csv-preview.test.cjs) |
| `features/worldview/color-wheel.tsx` | [features/entities/color-wheel.tsx](../../features/entities/color-wheel.tsx) |
| `features/worldview/financial-summary.tsx` | [features/knowledge/financial-summary.tsx](../../features/knowledge/financial-summary.tsx) |
| `features/worldview/file-inspector.tsx` | [features/knowledge/file-inspector.tsx](../../features/knowledge/file-inspector.tsx) |
| `features/worldview/excel-preview.tsx` | [features/knowledge/excel-preview.tsx](../../features/knowledge/excel-preview.tsx) |
| `features/worldview/entity-sidebar.tsx` | [features/entities/entity-sidebar.tsx](../../features/entities/entity-sidebar.tsx) |
| `features/worldview/entity-agents.css` | [features/agents/entity-agents.css](../../features/agents/entity-agents.css) |
| `features/worldview/entity-agents-dialog.tsx` | [features/agents/entity-agents-dialog.tsx](../../features/agents/entity-agents-dialog.tsx) |
| `features/worldview/entity-actions.tsx` | [features/entities/entity-actions.tsx](../../features/entities/entity-actions.tsx) |
| `features/worldview/daily-price.tsx` | [features/knowledge/daily-price.tsx](../../features/knowledge/daily-price.tsx) |
| `features/worldview/csv-preview.ts` | [features/knowledge/csv-preview.ts](../../features/knowledge/csv-preview.ts) |
| `features/worldview/image-carousel.tsx` | [features/knowledge/image-carousel.tsx](../../features/knowledge/image-carousel.tsx) |
| `features/worldview/image-carousel.test.cjs` | [features/knowledge/image-carousel.test.cjs](../../features/knowledge/image-carousel.test.cjs) |
| `features/worldview/financial-viewer.tsx` | [features/knowledge/financial-viewer.tsx](../../features/knowledge/financial-viewer.tsx) |
| `features/worldview/indexed-document.test.cjs` | [features/knowledge/indexed-document.test.cjs](../../features/knowledge/indexed-document.test.cjs) |
| `features/worldview/indexed-document-view.tsx` | [features/knowledge/indexed-document-view.tsx](../../features/knowledge/indexed-document-view.tsx) |
| `features/worldview/indexed-document.ts` | [features/knowledge/indexed-document.ts](../../features/knowledge/indexed-document.ts) |
| `features/worldview/knowledge-card.tsx` | [features/knowledge/knowledge-card.tsx](../../features/knowledge/knowledge-card.tsx) |
| `features/worldview/source-preview.tsx` | [features/knowledge/source-preview.tsx](../../features/knowledge/source-preview.tsx) |
| `features/worldview/knowledge-workspace.tsx` | [features/knowledge/knowledge-workspace.tsx](../../features/knowledge/knowledge-workspace.tsx) |
| `features/agent/add-agent-dialog.tsx` | [features/agents/add-agent-dialog.tsx](../../features/agents/add-agent-dialog.tsx) |
| `features/agent/agent-avatar.tsx` | [features/agents/agent-avatar.tsx](../../features/agents/agent-avatar.tsx) |
| `features/agent/agent-construction.css` | [features/agents/agent-construction.css](../../features/agents/agent-construction.css) |
| `features/agent/agent-construction.tsx` | [features/agents/agent-construction.tsx](../../features/agents/agent-construction.tsx) |
| `features/agent/agent-contacts.tsx` | [features/agents/agent-contacts.tsx](../../features/agents/agent-contacts.tsx) |
| `features/agent/agent-gateway.css` | [features/agents/agent-gateway.css](../../features/agents/agent-gateway.css) |
| `features/agent/agent-layout.ts` | [features/agents/agent-layout.ts](../../features/agents/agent-layout.ts) |
| `features/agent/agent.css` | [features/agents/agent.css](../../features/agents/agent.css) |
| `features/agent/agent-workspace.tsx` | [features/agents/agent-workspace.tsx](../../features/agents/agent-workspace.tsx) |
| `features/agent/agent-workbench.css` | [features/agents/agent-workbench.css](../../features/agents/agent-workbench.css) |
| `features/agent/agent-settings.tsx` | [features/agents/agent-settings.tsx](../../features/agents/agent-settings.tsx) |
| `features/agent/engine-inspector.tsx` | [features/agents/engine-inspector.tsx](../../features/agents/engine-inspector.tsx) |
| `features/agent/construction-source-picker.tsx` | [features/agents/construction-source-picker.tsx](../../features/agents/construction-source-picker.tsx) |
| `features/agent/engine-node-settings.tsx` | [features/agents/engine-node-settings.tsx](../../features/agents/engine-node-settings.tsx) |
| `features/agent/knowledge-proposal.tsx` | [features/agents/knowledge-proposal.tsx](../../features/agents/knowledge-proposal.tsx) |
| `features/agent/legacy-agent-workspace.tsx` | [features/agents/legacy-agent-workspace.tsx](../../features/agents/legacy-agent-workspace.tsx) |
| `electron/desktop-security.cjs` | [electron/core/security/desktop-security.cjs](../../electron/core/security/desktop-security.cjs) |
| `electron/desktop-security.test.cjs` | [electron/core/security/desktop-security.test.cjs](../../electron/core/security/desktop-security.test.cjs) |
| `electron/shared/json-store.cjs` | [electron/core/persistence/json-store.cjs](../../electron/core/persistence/json-store.cjs) |
| `electron/worldview-ipc.cjs` | [electron/core/ipc/worldview-ipc.cjs](../../electron/core/ipc/worldview-ipc.cjs) |
| `electron/worldview-ipc.test.cjs` | [electron/core/ipc/worldview-ipc.test.cjs](../../electron/core/ipc/worldview-ipc.test.cjs) |
| `electron/worldview-store.cjs` | [electron/domains/entity/worldview-store.cjs](../../electron/domains/entity/worldview-store.cjs) |
| `electron/worldview-store.test.cjs` | [electron/domains/entity/worldview-store.test.cjs](../../electron/domains/entity/worldview-store.test.cjs) |
| `electron/connector-store.cjs` | [electron/domains/entity/connector-store.cjs](../../electron/domains/entity/connector-store.cjs) |
| `electron/connector-store.test.cjs` | [electron/domains/entity/connector-store.test.cjs](../../electron/domains/entity/connector-store.test.cjs) |
| `electron/vault-service.cjs` | [electron/domains/universe/vault-service.cjs](../../electron/domains/universe/vault-service.cjs) |
| `electron/vault-service.test.cjs` | [electron/domains/universe/vault-service.test.cjs](../../electron/domains/universe/vault-service.test.cjs) |
| `electron/vault-settings.cjs` | [electron/domains/universe/vault-settings.cjs](../../electron/domains/universe/vault-settings.cjs) |
| `electron/vault-settings.test.cjs` | [electron/domains/universe/vault-settings.test.cjs](../../electron/domains/universe/vault-settings.test.cjs) |
| `electron/station-service.cjs` | [electron/domains/universe/station-service.cjs](../../electron/domains/universe/station-service.cjs) |
| `electron/station-service.test.cjs` | [electron/domains/universe/station-service.test.cjs](../../electron/domains/universe/station-service.test.cjs) |
| `electron/knowledge-store.cjs` | [electron/domains/knowledge/knowledge-store.cjs](../../electron/domains/knowledge/knowledge-store.cjs) |
| `electron/knowledge-store.test.cjs` | [electron/domains/knowledge/knowledge-store.test.cjs](../../electron/domains/knowledge/knowledge-store.test.cjs) |
| `electron/knowledge-source-access.cjs` | [electron/domains/knowledge/knowledge-source-access.cjs](../../electron/domains/knowledge/knowledge-source-access.cjs) |
| `electron/backend-identity-service.cjs` | [electron/domains/knowledge/backend-identity-service.cjs](../../electron/domains/knowledge/backend-identity-service.cjs) |
| `electron/knowledge-index.cjs` | [electron/domains/indexing/knowledge-index.cjs](../../electron/domains/indexing/knowledge-index.cjs) |
| `electron/tag-association-service.cjs` | [electron/domains/indexing/tag-association-service.cjs](../../electron/domains/indexing/tag-association-service.cjs) |
| `electron/engines/registry/runner.cjs` | [electron/engines/runtime/runner.cjs](../../electron/engines/runtime/runner.cjs) |
| `electron/engines/registry/worker.cjs` | [electron/engines/runtime/worker.cjs](../../electron/engines/runtime/worker.cjs) |
| `electron/engines/registry/contract.cjs` | [electron/engines/contracts/contract.cjs](../../electron/engines/contracts/contract.cjs) |
| `electron/ai/response-validation.cjs` | [electron/ai/inference/response-validation.cjs](../../electron/ai/inference/response-validation.cjs) |
| `electron/ai/prompt-builder.test.cjs` | [electron/ai/inference/prompt-builder.test.cjs](../../electron/ai/inference/prompt-builder.test.cjs) |
| `electron/ai/prompt-builder.cjs` | [electron/ai/inference/prompt-builder.cjs](../../electron/ai/inference/prompt-builder.cjs) |
| `electron/ai/agent-policy.cjs` | [electron/ai/agents/agent-policy.cjs](../../electron/ai/agents/agent-policy.cjs) |
| `electron/ai/agent-construction.test.cjs` | [electron/ai/agents/agent-construction.test.cjs](../../electron/ai/agents/agent-construction.test.cjs) |
| `electron/ai/chat-service.cjs` | [electron/ai/chat/chat-service.cjs](../../electron/ai/chat/chat-service.cjs) |
| `electron/ai/construction-context.cjs` | [electron/ai/agents/construction-context.cjs](../../electron/ai/agents/construction-context.cjs) |
| `electron/ai/assigned-chat.cjs` | [electron/ai/agents/assigned-chat.cjs](../../electron/ai/agents/assigned-chat.cjs) |
| `electron/ai/agent-store.test.cjs` | [electron/ai/agents/agent-store.test.cjs](../../electron/ai/agents/agent-store.test.cjs) |
| `electron/ai/agent-store.cjs` | [electron/ai/agents/agent-store.cjs](../../electron/ai/agents/agent-store.cjs) |
| `electron/ai/agent-construction.cjs` | [electron/ai/agents/agent-construction.cjs](../../electron/ai/agents/agent-construction.cjs) |
| `electron/ai/entity-agents.cjs` | [electron/ai/agents/entity-agents.cjs](../../electron/ai/agents/entity-agents.cjs) |
| `electron/ai/entity-agent-protocol.test.cjs` | [electron/ai/agents/entity-agent-protocol.test.cjs](../../electron/ai/agents/entity-agent-protocol.test.cjs) |
| `electron/ai/entity-agent-access.cjs` | [electron/ai/agents/entity-agent-access.cjs](../../electron/ai/agents/entity-agent-access.cjs) |
| `electron/ai/entity-jurisdiction.cjs` | [electron/ai/agents/entity-jurisdiction.cjs](../../electron/ai/agents/entity-jurisdiction.cjs) |
| `electron/ai/entity-agents.test.cjs` | [electron/ai/agents/entity-agents.test.cjs](../../electron/ai/agents/entity-agents.test.cjs) |
| `electron/ai/conversation-store.cjs` | [electron/ai/chat/conversation-store.cjs](../../electron/ai/chat/conversation-store.cjs) |
| `electron/ai/gateway-profile.cjs` | [electron/ai/agents/gateway-profile.cjs](../../electron/ai/agents/gateway-profile.cjs) |
| `electron/ai/entity-agent-protocol.cjs` | [electron/ai/agents/entity-agent-protocol.cjs](../../electron/ai/agents/entity-agent-protocol.cjs) |
| `scripts/worldview-price-check.cjs` | [scripts/acceptance/worldview-price-check.cjs](../../scripts/acceptance/worldview-price-check.cjs) |
| `scripts/worldview-phase08-check.cjs` | [scripts/acceptance/worldview-phase08-check.cjs](../../scripts/acceptance/worldview-phase08-check.cjs) |
| `scripts/worldview-phase07-check.cjs` | [scripts/acceptance/worldview-phase07-check.cjs](../../scripts/acceptance/worldview-phase07-check.cjs) |
| `scripts/worldview-phase06-check.cjs` | [scripts/acceptance/worldview-phase06-check.cjs](../../scripts/acceptance/worldview-phase06-check.cjs) |
| `scripts/worldview-phase05-check.cjs` | [scripts/acceptance/worldview-phase05-check.cjs](../../scripts/acceptance/worldview-phase05-check.cjs) |
| `scripts/worldview-phase04-check.cjs` | [scripts/acceptance/worldview-phase04-check.cjs](../../scripts/acceptance/worldview-phase04-check.cjs) |
| `scripts/worldview-phase03-check.cjs` | [scripts/acceptance/worldview-phase03-check.cjs](../../scripts/acceptance/worldview-phase03-check.cjs) |
| `scripts/worldview-financial-check.cjs` | [scripts/acceptance/worldview-financial-check.cjs](../../scripts/acceptance/worldview-financial-check.cjs) |
| `scripts/worldview-excel-check.cjs` | [scripts/acceptance/worldview-excel-check.cjs](../../scripts/acceptance/worldview-excel-check.cjs) |
| `scripts/secure-export.cjs` | [scripts/build/secure-export.cjs](../../scripts/build/secure-export.cjs) |
| `scripts/release-size-audit.cjs` | [scripts/audit/release-size-audit.cjs](../../scripts/audit/release-size-audit.cjs) |
| `scripts/release-secret-audit.cjs` | [scripts/audit/release-secret-audit.cjs](../../scripts/audit/release-secret-audit.cjs) |
| `scripts/prepare-pdf-worker.cjs` | [scripts/build/prepare-pdf-worker.cjs](../../scripts/build/prepare-pdf-worker.cjs) |
| `scripts/prepare-icons.cjs` | [scripts/build/prepare-icons.cjs](../../scripts/build/prepare-icons.cjs) |
| `scripts/electron-worldview-smoke.cjs` | [scripts/acceptance/electron-worldview-smoke.cjs](../../scripts/acceptance/electron-worldview-smoke.cjs) |
| `scripts/electron-victoria-smoke.cjs` | [scripts/acceptance/electron-victoria-smoke.cjs](../../scripts/acceptance/electron-victoria-smoke.cjs) |
| `scripts/electron-usage-monitor-smoke.cjs` | [scripts/acceptance/electron-usage-monitor-smoke.cjs](../../scripts/acceptance/electron-usage-monitor-smoke.cjs) |
| `scripts/electron-ui-polish-smoke.cjs` | [scripts/acceptance/electron-ui-polish-smoke.cjs](../../scripts/acceptance/electron-ui-polish-smoke.cjs) |
| `scripts/electron-typography-smoke.cjs` | [scripts/acceptance/electron-typography-smoke.cjs](../../scripts/acceptance/electron-typography-smoke.cjs) |
| `scripts/electron-startup-smoke.cjs` | [scripts/acceptance/electron-startup-smoke.cjs](../../scripts/acceptance/electron-startup-smoke.cjs) |
| `scripts/electron-startup-smoke-main.cjs` | [scripts/acceptance/electron-startup-smoke-main.cjs](../../scripts/acceptance/electron-startup-smoke-main.cjs) |
| `scripts/electron-soft-surfaces-smoke.cjs` | [scripts/acceptance/electron-soft-surfaces-smoke.cjs](../../scripts/acceptance/electron-soft-surfaces-smoke.cjs) |
| `scripts/electron-smoke-main.cjs` | [scripts/acceptance/electron-smoke-main.cjs](../../scripts/acceptance/electron-smoke-main.cjs) |
| `scripts/electron-single-file-smoke.cjs` | [scripts/acceptance/electron-single-file-smoke.cjs](../../scripts/acceptance/electron-single-file-smoke.cjs) |
| `scripts/electron-runtime-kernel-smoke.cjs` | [scripts/acceptance/electron-runtime-kernel-smoke.cjs](../../scripts/acceptance/electron-runtime-kernel-smoke.cjs) |
| `scripts/electron-release-smoke.cjs` | [scripts/acceptance/electron-release-smoke.cjs](../../scripts/acceptance/electron-release-smoke.cjs) |
| `scripts/electron-release-smoke-main.cjs` | [scripts/acceptance/electron-release-smoke-main.cjs](../../scripts/acceptance/electron-release-smoke-main.cjs) |
| `scripts/electron-provider-budget-smoke.cjs` | [scripts/acceptance/electron-provider-budget-smoke.cjs](../../scripts/acceptance/electron-provider-budget-smoke.cjs) |
| `scripts/electron-pdf-image-smoke.cjs` | [scripts/acceptance/electron-pdf-image-smoke.cjs](../../scripts/acceptance/electron-pdf-image-smoke.cjs) |
| `scripts/electron-packaged-smoke.cjs` | [scripts/acceptance/electron-packaged-smoke.cjs](../../scripts/acceptance/electron-packaged-smoke.cjs) |
| `scripts/electron-openrouter-smoke.cjs` | [scripts/acceptance/electron-openrouter-smoke.cjs](../../scripts/acceptance/electron-openrouter-smoke.cjs) |
| `scripts/electron-openrouter-live-main.cjs` | [scripts/acceptance/electron-openrouter-live-main.cjs](../../scripts/acceptance/electron-openrouter-live-main.cjs) |
| `scripts/electron-openrouter-live-catalog.cjs` | [scripts/acceptance/electron-openrouter-live-catalog.cjs](../../scripts/acceptance/electron-openrouter-live-catalog.cjs) |
| `scripts/electron-online-smoke-main.cjs` | [scripts/acceptance/electron-online-smoke-main.cjs](../../scripts/acceptance/electron-online-smoke-main.cjs) |
| `scripts/electron-online-chat-smoke.cjs` | [scripts/acceptance/electron-online-chat-smoke.cjs](../../scripts/acceptance/electron-online-chat-smoke.cjs) |
| `scripts/electron-model-settings-smoke.cjs` | [scripts/acceptance/electron-model-settings-smoke.cjs](../../scripts/acceptance/electron-model-settings-smoke.cjs) |
| `scripts/electron-message-retry-smoke.cjs` | [scripts/acceptance/electron-message-retry-smoke.cjs](../../scripts/acceptance/electron-message-retry-smoke.cjs) |
| `scripts/electron-markdown-editor-smoke.cjs` | [scripts/acceptance/electron-markdown-editor-smoke.cjs](../../scripts/acceptance/electron-markdown-editor-smoke.cjs) |
| `scripts/electron-knowledge-smoke.cjs` | [scripts/acceptance/electron-knowledge-smoke.cjs](../../scripts/acceptance/electron-knowledge-smoke.cjs) |
| `scripts/electron-front-office-smoke.cjs` | [scripts/acceptance/electron-front-office-smoke.cjs](../../scripts/acceptance/electron-front-office-smoke.cjs) |
| `scripts/electron-front-office-smoke-main.cjs` | [scripts/acceptance/electron-front-office-smoke-main.cjs](../../scripts/acceptance/electron-front-office-smoke-main.cjs) |
| `scripts/electron-financials-smoke.cjs` | [scripts/acceptance/electron-financials-smoke.cjs](../../scripts/acceptance/electron-financials-smoke.cjs) |
| `scripts/electron-entity-runtime-live.cjs` | [scripts/acceptance/electron-entity-runtime-live.cjs](../../scripts/acceptance/electron-entity-runtime-live.cjs) |
| `scripts/electron-entity-runtime-live-main.cjs` | [scripts/acceptance/electron-entity-runtime-live-main.cjs](../../scripts/acceptance/electron-entity-runtime-live-main.cjs) |
| `scripts/electron-entity-agents-smoke.cjs` | [scripts/acceptance/electron-entity-agents-smoke.cjs](../../scripts/acceptance/electron-entity-agents-smoke.cjs) |
| `scripts/electron-engine-smoke.cjs` | [scripts/acceptance/electron-engine-smoke.cjs](../../scripts/acceptance/electron-engine-smoke.cjs) |
| `scripts/electron-empty-agents-smoke.cjs` | [scripts/acceptance/electron-empty-agents-smoke.cjs](../../scripts/acceptance/electron-empty-agents-smoke.cjs) |
| `scripts/electron-daily-price-smoke.cjs` | [scripts/acceptance/electron-daily-price-smoke.cjs](../../scripts/acceptance/electron-daily-price-smoke.cjs) |
| `scripts/electron-construction-smoke.cjs` | [scripts/acceptance/electron-construction-smoke.cjs](../../scripts/acceptance/electron-construction-smoke.cjs) |
| `scripts/electron-chronoz-smoke.cjs` | [scripts/acceptance/electron-chronoz-smoke.cjs](../../scripts/acceptance/electron-chronoz-smoke.cjs) |
| `scripts/electron-chat-smoke.cjs` | [scripts/acceptance/electron-chat-smoke.cjs](../../scripts/acceptance/electron-chat-smoke.cjs) |
| `scripts/electron-chat-popout-smoke.cjs` | [scripts/acceptance/electron-chat-popout-smoke.cjs](../../scripts/acceptance/electron-chat-popout-smoke.cjs) |
| `scripts/electron-box-agents-smoke.cjs` | [scripts/acceptance/electron-box-agents-smoke.cjs](../../scripts/acceptance/electron-box-agents-smoke.cjs) |
| `scripts/electron-backend-reset-smoke.cjs` | [scripts/acceptance/electron-backend-reset-smoke.cjs](../../scripts/acceptance/electron-backend-reset-smoke.cjs) |
| `scripts/electron-backend-identity-smoke.cjs` | [scripts/acceptance/electron-backend-identity-smoke.cjs](../../scripts/acceptance/electron-backend-identity-smoke.cjs) |
| `scripts/electron-appearance-smoke.cjs` | [scripts/acceptance/electron-appearance-smoke.cjs](../../scripts/acceptance/electron-appearance-smoke.cjs) |
| `scripts/electron-agent-workspace-smoke.cjs` | [scripts/acceptance/electron-agent-workspace-smoke.cjs](../../scripts/acceptance/electron-agent-workspace-smoke.cjs) |
| `scripts/electron-agent-gateway-smoke.cjs` | [scripts/acceptance/electron-agent-gateway-smoke.cjs](../../scripts/acceptance/electron-agent-gateway-smoke.cjs) |
| `scripts/electron-add-agent-smoke.cjs` | [scripts/acceptance/electron-add-agent-smoke.cjs](../../scripts/acceptance/electron-add-agent-smoke.cjs) |
| `scripts/audit-source.cjs` | [scripts/audit/audit-source.cjs](../../scripts/audit/audit-source.cjs) |
| `scripts/audit-package.cjs` | [scripts/audit/audit-package.cjs](../../scripts/audit/audit-package.cjs) |
| `scripts/audit-architecture.cjs` | [scripts/audit/audit-architecture.cjs](../../scripts/audit/audit-architecture.cjs) |
| `scripts/build-yahoo-financials-engine.cjs` | [scripts/build/build-yahoo-financials-engine.cjs](../../scripts/build/build-yahoo-financials-engine.cjs) |
| `scripts/build-excel-engine.cjs` | [scripts/build/build-excel-engine.cjs](../../scripts/build/build-excel-engine.cjs) |
| `electron/architecture-contract.test.cjs` | [tests/integration/architecture-contract.test.cjs](../../tests/integration/architecture-contract.test.cjs) |

## References and compatibility

Relative JS/TS imports, CommonJS requires, static __dirname paths, worker locations, root-relative fixture references, npm scripts and current source references were updated. npm command names, IPC channels, preload API, Engine protocol/schema versions and Entity persistence formats were retained. Recursive test discovery now covers relocated unit tests and tests/integration/.

No compatibility shims were introduced: internal references were updated directly. Stable external/runtime entries remain electron/main.cjs, electron/preload.cjs, electron/launch.cjs, scripts/orbistry-engine.cjs and electron/engines/registry/registry.cjs. The AI Engine registry compatibility exports remain at electron/ai/engine-registry.cjs. Built-in Engines and Backend Identity implementation files remain in their existing Engine folders. Existing neutral shared/AI compatibility exports remain supported.

## Intentional exceptions

- No Entity OOP conversion, Engine plugin migration, WES/WIS implementation or business-logic rewrite.
- The embedded Index editor remains within Knowledge workspace; no Dashboard Builder was invented.
- Remaining legacy AI experiment/model modules stay in ai/; moving every historical helper is unnecessary for clear primary ownership.
- Engine-specific services, OCR helpers and public runtime/package entry points are retained to avoid changing package behavior.
- Most cross-domain Engine tests remain in their original established suites; the architecture regression moved to tests/integration/.
- Source strings embedded in synthetic test fixtures need their own path updates, separate from executable imports.
- Existing deleted documentation was not restored. Historical source references in AGENTS.md remain historical specification text.

## Verification

Baseline: 531 discovered tests, 529 passed, two optional skips, zero failures; format:check and production build passed. Final results are recorded below after execution. No live provider or user-data migration is part of this task.

## Rollback

Use restructure-moves.json to reverse locations and rebase their references as one reviewed change. Preserve the pre-existing dirty baseline; do not use a broad git reset/clean. No user data was relocated and no on-disk data-schema rollback is needed.

## Commit

The baseline SHA above is the pre-restructure reference. The owner subsequently authorized committing the accumulated completed session work and pushing to GitHub main. This commit therefore includes the prior Engine, Agent, UI and documentation work as well as Phase 01 relocations. Git history supplies the resulting commit reference.

## Final observed verification

| Check | Baseline | Reorganized tree |
| --- | --- | --- |
| npm test | 531 discovered; 529 pass, 2 optional skips | 531 discovered; 529 pass, 2 optional skips |
| npm run typecheck | TypeScript phase passed in baseline build | Passed standalone |
| npm run format:check | Passed | Passed after formatting relocated references |
| npm run build | Passed | Passed, including secure static export |
| audit:source / audit:architecture | Initial inventories captured | Passed; zero missing imports, forbidden boundaries or cycles |
| npm run test:worldview:electron | Isolated original-source rebuild fails at empty-ground pan assertion | Same assertion fails; later acceptance cases do not run |
| Production-entry assigned-agent/Engine desktop harness | Prior baseline evidence not rerun separately | Passed with synthetic NVIDIA, temporary profile/Universe, real signed package worker, cancellation and read-only Settings; zero page errors |
| Engine example check | Manifest preserved | Passed; original number-tools digest unchanged |

The baseline desktop reproduction uses the exact pre-move source snapshot rebuilt in tmp/restructure/baseline-project, with its own static export. Both failures occur in verifyKnowledgeCards at the same assertion (expected zero selected actions, actual one). The pre-existing Entity sidebar covers the fixture's fixed pan-start coordinates. No assertion was weakened, no test excluded, and no sidebar behavior changed.

Logs are local ignored development artifacts under tmp/restructure/: baseline-tests.log, baseline-format.log, baseline-build.log, baseline-worldview-electron.log, final-tests.log, final-typecheck.log, final-format.log, final-build.log, final-source.log, final-architecture.log, worldview-electron.log and assigned-engine-electron.log.

## Debug Audit: migration tooling and fixtures

**Component:** Structural path rewrite and test infrastructure.
**Affected Files:** Atlas local resolver and architecture synthetic fixture.
**Observed Error:** Intermediate runs failed three Atlas assertions and one architecture-fixture assertion.
**Root Cause:** An over-broad relative-string rewrite treated the literal dot as a file reference; a synthetic fixture also kept an old relative require inside its source string.
**Changes Applied:** Restored literal-dot semantics, restricted the relocation helper, and corrected the fixture's relative target without changing its expected security assertion.
**Verification:** All 531 tests remain discovered, with 529 passing and two original optional skips. Source/architecture checks and production build pass.
**Remaining Risks:** Static imports do not prove every historical acceptance script works. Live provider suites, an installed-distribution/installer test and legacy/reset-incompatible acceptance scenarios were not executed.
