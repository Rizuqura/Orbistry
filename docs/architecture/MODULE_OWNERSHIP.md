# Module ownership

[Entity](ENTITY_DOMAIN_OOP.md) owns keys, metadata, source associations and logical ports. [WorldView](WORLDVIEW_DOMAIN_OOP.md) owns membership, placement and connections. Their adapters share the existing Entity record and mutation queue. The connector store import in the Entity folder remains a compatibility entry. The inventory below describes Phase 01.

Paths are implemented ownership. Export/import/test associations below come from the captured pre-move AST index, translated by the relocation map; they are structural associations, not coverage or runtime reachability claims. See the regenerated Code Atlas for complete post-move symbols.

## WorldView

Canvas, spatial interactions and graph state.

- Main/public entry: [features/worldview/worldview.tsx](../../features/worldview/worldview.tsx).
- Exports: WorldView
- Dependencies: `react`, `features/worldview/coordinates.ts`, `features/worldview/grid.ts`, `features/worldview/connector-labels.ts`, `features/worldview/chip-labels.ts`, `features/worldview/chip-colors.ts`, `features/entities/chip-dialog.tsx`, `features/worldview/chip-images.ts`, `features/entities/assign-files-dialog.tsx`, `features/knowledge/file-inspector.tsx`, `features/entities/entity-actions.tsx`, `features/knowledge/knowledge-card.tsx`, `features/worldview/backend-identity-window.tsx`, `features/agents/entity-agents-dialog.tsx`, `types/entity-agents.ts`, `features/worldview/connector-dialog.tsx`, `features/worldview/world-search.tsx`, `features/entities/entity-sidebar.tsx`, `features/worldview/connectors.ts`, `features/worldview/buildings.ts`, `features/worldview/building-renderer.ts`, `features/dialogs/use-confirmation.tsx`, `features/worldview/chips.ts`, `features/worldview/chip-session.ts`, `features/worldview/chip-renderer.ts`
- Related tests/harnesses: No direct static import association; inspect the full Atlas.
- Limitation: internal dynamic dispatch and injection require runtime verification; location is not an authorization grant.

## Entity UI

Entity editing and source association dialogs.

- Main/public entry: [features/entities/chip-dialog.tsx](../../features/entities/chip-dialog.tsx).
- Exports: ChipDialog
- Dependencies: `react`, `features/worldview/chips.ts`, `features/worldview/chip-colors.ts`, `features/entities/chip-icon.ts`, `features/entities/color-wheel.tsx`
- Related tests/harnesses: No direct static import association; inspect the full Atlas.
- Limitation: internal dynamic dispatch and injection require runtime verification; location is not an authorization grant.

## Entity backend

Entity metadata and source-reference persistence.

- Main/public entry: [electron/domains/entity/worldview-store.cjs](../../electron/domains/entity/worldview-store.cjs).
- Exports: No static export resolved; inspect source initialization.
- Dependencies: `node:fs/promises`, `node:path`, `js-yaml`, `zod`, `electron/core/persistence/json-store.cjs`, `electron/domains/universe/vault-service.cjs`
- Related tests/harnesses: [electron/ai/agents/entity-agents.test.cjs](../../electron/ai/agents/entity-agents.test.cjs), [electron/backend-identity.test.cjs](../../electron/backend-identity.test.cjs), [electron/domains/entity/connector-store.test.cjs](../../electron/domains/entity/connector-store.test.cjs), [electron/daily-price.test.cjs](../../electron/daily-price.test.cjs), [electron/engine-packages.test.cjs](../../electron/engine-packages.test.cjs), [electron/engine-signing.test.cjs](../../electron/engine-signing.test.cjs), [electron/excel-service.test.cjs](../../electron/excel-service.test.cjs), [electron/financial-service.test.cjs](../../electron/financial-service.test.cjs), [electron/image-parser.test.cjs](../../electron/image-parser.test.cjs), [electron/domains/knowledge/knowledge-store.test.cjs](../../electron/domains/knowledge/knowledge-store.test.cjs), [electron/tag-association.test.cjs](../../electron/tag-association.test.cjs), [electron/domains/entity/worldview-store.test.cjs](../../electron/domains/entity/worldview-store.test.cjs), [electron/yahoo-engine-contract.test.cjs](../../electron/yahoo-engine-contract.test.cjs), [scripts/acceptance/electron-backend-reset-smoke.cjs](../../scripts/acceptance/electron-backend-reset-smoke.cjs)
- Limitation: internal dynamic dispatch and injection require runtime verification; location is not an authorization grant.

## Universe

Controlled source access and Vault scanning.

- Main/public entry: [electron/domains/universe/vault-service.cjs](../../electron/domains/universe/vault-service.cjs).
- Exports: readVaultPreview, statVaultSource, listVaultMetadata, getVaultSnapshot, readIndexedPdfText, MAX_PDF_BYTES, getIndexedPdfText, readPdfFile, readVaultFile, saveMarkdownFile, resolveVaultFile, scanVault, searchPdfText
- Dependencies: `fs/promises`, `path`, `electron/local-ocr.cjs`, `@napi-rs/canvas`, `node:os`, `pdfjs-dist/legacy/build/pdf.mjs`, `node:crypto`
- Related tests/harnesses: [electron/agent-memory-binding.test.cjs](../../electron/agent-memory-binding.test.cjs), [electron/ai/run-store.test.cjs](../../electron/ai/run-store.test.cjs), [electron/document-ocr.test.cjs](../../electron/document-ocr.test.cjs), [electron/domains/universe/station-service.test.cjs](../../electron/domains/universe/station-service.test.cjs), [electron/tag-association.test.cjs](../../electron/tag-association.test.cjs), [electron/domains/universe/vault-service.test.cjs](../../electron/domains/universe/vault-service.test.cjs), [electron/domains/entity/worldview-store.test.cjs](../../electron/domains/entity/worldview-store.test.cjs)
- Limitation: internal dynamic dispatch and injection require runtime verification; location is not an authorization grant.

## Knowledge

Applied indexes, notes and authorized source resolution.

- Main/public entry: [electron/domains/knowledge/knowledge-store.cjs](../../electron/domains/knowledge/knowledge-store.cjs).
- Exports: readKnowledgeIndex, validateKnowledgeIndex, saveKnowledgeIndex, previewKnowledgeSource, resolveKnowledgeSource, resolveKnowledgeCarousel, saveKnowledgeNote, savePriceSymbol
- Dependencies: `node:path`, `js-yaml`, `electron/core/persistence/json-store.cjs`, `electron/domains/entity/worldview-store.cjs`, `electron/domains/universe/vault-service.cjs`, `electron/domains/indexing/knowledge-index.cjs`, `electron/engines/daily-price/index.cjs`, `electron/domains/knowledge/knowledge-source-access.cjs`, `electron/excel-service.cjs`
- Related tests/harnesses: [electron/ai/agents/entity-agents.test.cjs](../../electron/ai/agents/entity-agents.test.cjs), [tests/integration/architecture-contract.test.cjs](../../tests/integration/architecture-contract.test.cjs), [electron/backend-identity.test.cjs](../../electron/backend-identity.test.cjs), [electron/daily-price.test.cjs](../../electron/daily-price.test.cjs), [electron/excel-service.test.cjs](../../electron/excel-service.test.cjs), [electron/financial-service.test.cjs](../../electron/financial-service.test.cjs), [electron/image-parser.test.cjs](../../electron/image-parser.test.cjs), [electron/domains/knowledge/knowledge-store.test.cjs](../../electron/domains/knowledge/knowledge-store.test.cjs), [electron/yahoo-engine-contract.test.cjs](../../electron/yahoo-engine-contract.test.cjs), [scripts/acceptance/electron-backend-reset-smoke.cjs](../../scripts/acceptance/electron-backend-reset-smoke.cjs)
- Limitation: internal dynamic dispatch and injection require runtime verification; location is not an authorization grant.

## Indexing

Deterministic declaration parsing.

- Main/public entry: [electron/domains/indexing/knowledge-index.cjs](../../electron/domains/indexing/knowledge-index.cjs).
- Exports: parseKnowledgeIndex
- Dependencies: `node:crypto`, `electron/engines/daily-price/index.cjs`
- Related tests/harnesses: [electron/daily-price.test.cjs](../../electron/daily-price.test.cjs), [electron/financial-service.test.cjs](../../electron/financial-service.test.cjs), [electron/image-parser.test.cjs](../../electron/image-parser.test.cjs), [electron/domains/knowledge/knowledge-store.test.cjs](../../electron/domains/knowledge/knowledge-store.test.cjs)
- Limitation: internal dynamic dispatch and injection require runtime verification; location is not an authorization grant.

## Core security / IPC

Trusted renderer boundary and WorldView dispatch.

- Main/public entry: [electron/core/ipc/worldview-ipc.cjs](../../electron/core/ipc/worldview-ipc.cjs).
- Exports: registerWorldViewIpc
- Dependencies: `node:path`, `electron/domains/entity/worldview-store.cjs`, `electron/domains/knowledge/knowledge-store.cjs`, `electron/domains/entity/connector-store.cjs`, `electron/domains/indexing/tag-association-service.cjs`, `electron/image-parser-service.cjs`, `electron/domains/universe/vault-service.cjs`, `electron/domains/knowledge/backend-identity-service.cjs`, `electron/financial-service.cjs`, `electron/daily-price-service.cjs`, `electron/excel-service.cjs`
- Related tests/harnesses: [electron/excel-service.test.cjs](../../electron/excel-service.test.cjs), [electron/core/ipc/worldview-ipc.test.cjs](../../electron/core/ipc/worldview-ipc.test.cjs)
- Limitation: internal dynamic dispatch and injection require runtime verification; location is not an authorization grant.

## Core persistence

Atomic persistence, safe paths and queues.

- Main/public entry: [electron/core/persistence/json-store.cjs](../../electron/core/persistence/json-store.cjs).
- Exports: writeTextAtomic, readJson, writeJson, serialQueue, safeDirectory, rejectSymlink
- Dependencies: `node:fs/promises`, `node:path`, `node:crypto`, `electron/shared/runtime-errors.cjs`
- Related tests/harnesses: [tests/integration/architecture-contract.test.cjs](../../tests/integration/architecture-contract.test.cjs)
- Limitation: internal dynamic dispatch and injection require runtime verification; location is not an authorization grant.

## Assigned Agents

Assignment, jurisdiction, scoped knowledge and execution.

- Main/public entry: [electron/ai/agents/entity-agents.cjs](../../electron/ai/agents/entity-agents.cjs).
- Exports: EntityAgentService, connectedNodes, engineDefinitions
- Dependencies: `node:path`, `node:fs/promises`, `node:crypto`, `zod`, `electron/ai/json-store.cjs`, `electron/domains/entity/worldview-store.cjs`, `electron/engines/backend-identity/identity-runtime.cjs`, `electron/ai/engine-registry.cjs`, `electron/ai/agents/assigned-chat.cjs`, `electron/ai/model-errors.cjs`, `electron/ai/agents/entity-agent-protocol.cjs`, `electron/ai/agents/entity-jurisdiction.cjs`, `electron/engines/backend-identity/capability-registry.cjs`, `electron/ai/agents/gateway-profile.cjs`, `electron/ai/chronoz-adapter.cjs`
- Related tests/harnesses: [electron/ai/backend-audit.test.cjs](../../electron/ai/backend-audit.test.cjs), [electron/ai/agents/entity-agents.test.cjs](../../electron/ai/agents/entity-agents.test.cjs), [scripts/acceptance/electron-backend-reset-smoke.cjs](../../scripts/acceptance/electron-backend-reset-smoke.cjs)
- Limitation: internal dynamic dispatch and injection require runtime verification; location is not an authorization grant.

## Chat

Chat admission/cancellation and conversation storage.

- Main/public entry: [electron/ai/chat/chat-service.cjs](../../electron/ai/chat/chat-service.cjs).
- Exports: ChatService, assertFields
- Dependencies: `node:fs/promises`, `electron/ai/context-box-store.cjs`, `node:crypto`, `electron/domains/universe/station-service.cjs`, `electron/ai/chat/conversation-store.cjs`, `electron/ai/agents/assigned-chat.cjs`, `electron/ai/context-identity.cjs`, `electron/ai/run-store.cjs`, `electron/ai/model-errors.cjs`, `electron/ai/agents/construction-context.cjs`, `electron/ai/agents/agent-policy.cjs`
- Related tests/harnesses: [electron/agent-memory-binding.test.cjs](../../electron/agent-memory-binding.test.cjs), [electron/ai/backend-audit.test.cjs](../../electron/ai/backend-audit.test.cjs), [electron/ai/backend-reset.test.cjs](../../electron/ai/backend-reset.test.cjs), [electron/ai/context-box-store.test.cjs](../../electron/ai/context-box-store.test.cjs), [electron/ai/front-office-engine.test.cjs](../../electron/ai/front-office-engine.test.cjs), [scripts/chat-live-acceptance.cjs](../../scripts/chat-live-acceptance.cjs), [scripts/dataset-live-acceptance.cjs](../../scripts/dataset-live-acceptance.cjs), [scripts/statistics-live-acceptance.cjs](../../scripts/statistics-live-acceptance.cjs)
- Limitation: internal dynamic dispatch and injection require runtime verification; location is not an authorization grant.

## Inference

Prompt assembly independent of provider transport.

- Main/public entry: [electron/ai/inference/prompt-builder.cjs](../../electron/ai/inference/prompt-builder.cjs).
- Exports: MAX_SOURCE_CONTENT_CHARS, MAX_SOURCE_MESSAGE_CHARS, MAX_USER_MESSAGE_CHARS, PROMPT_VERSION, SYSTEM_PROMPT, buildContextMessages, validateUserMessage
- Dependencies: `electron/ai/model-errors.cjs`, `electron/ai/agents/agent-policy.cjs`, `electron/ai/runtime-context.cjs`
- Related tests/harnesses: [electron/ai/agents/agent-store.test.cjs](../../electron/ai/agents/agent-store.test.cjs), [electron/ai/orchestrator.test.cjs](../../electron/ai/orchestrator.test.cjs), [electron/ai/inference/prompt-builder.test.cjs](../../electron/ai/inference/prompt-builder.test.cjs), [electron/ai/runtime-context.test.cjs](../../electron/ai/runtime-context.test.cjs)
- Limitation: internal dynamic dispatch and injection require runtime verification; location is not an authorization grant.

## Engine registry

Package install/trust/link/discovery/execution.

- Main/public entry: [electron/engines/registry/registry.cjs](../../electron/engines/registry/registry.cjs).
- Exports: EnginePackageRegistry
- Dependencies: `node:fs/promises`, `node:path`, `node:crypto`, `zod`, `electron/core/persistence/json-store.cjs`, `electron/engines/registry/package.cjs`, `electron/engines/contracts/contract.cjs`, `electron/engines/runtime/runner.cjs`, `electron/engines/definitions.cjs`, `electron/domains/entity/worldview-store.cjs`
- Related tests/harnesses: [electron/engine-signing.test.cjs](../../electron/engine-signing.test.cjs)
- Limitation: internal dynamic dispatch and injection require runtime verification; location is not an authorization grant.

## Backend Identity

Derived Entity snapshots and scoped retrieval; no behavior refactor.

- Main/public entry: [electron/engines/backend-identity/identity-runtime.cjs](../../electron/engines/backend-identity/identity-runtime.cjs).
- Exports: createIdentityRuntime
- Dependencies: `zod`, `electron/engines/backend-identity/schema.cjs`, `electron/engines/backend-identity/identity-compiler.cjs`, `electron/engines/backend-identity/snapshot-store.cjs`, `electron/engines/backend-identity/capability-registry.cjs`
- Related tests/harnesses: [electron/backend-identity.test.cjs](../../electron/backend-identity.test.cjs)
- Limitation: internal dynamic dispatch and injection require runtime verification; location is not an authorization grant.
