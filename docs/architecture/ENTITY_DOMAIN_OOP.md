# ORB-ARCH-004 · Entity domain

An Entity has a stable key within a Universe. Use the [aggregate](../../electron/domains/entity/model/Entity.cjs) to understand what can change. Use the [service](../../electron/domains/entity/services/EntityService.cjs) for authorized backend work. WorldView still places the Entity and owns its relationships. A connection can identify a neighbor. Reading that neighbor's private context requires its own admission.

## Baseline and integration

The implementation started at `f51d22426513008bb39be7abd7edae642669878a` on a clean `main`. At that revision the Entity folder contained the combined Markdown store, its tests, and the connector compatibility entry. WorldView already had a placement/relationship aggregate. The baseline unit suite discovered 540 tests, passed 538 and skipped two.

| Request | Before | Current path |
| --- | --- | --- |
| Create, edit or drag a chip | Chip dialog/canvas → guarded IPC → WorldViewService → WorldViewRepository → combined store | Same channel and upsert. WorldView validates membership/placement. The store uses Entity to validate metadata and merges authoritative sources and omitted menus under the existing queue. |
| Delete a chip | WorldViewService → existing index deletion | Same deletion operation. Independent membership removal and cascading deletion of companion records require separate lifecycle decisions. |
| Assign or remove sources | Guarded IPC → store | Guarded IPC → EntityService → EntityRepository → shared queue → Entity. Assignment uses Vault stat for each selected file. The renderer receives the existing chip DTO with source statuses. |
| Load or edit one Entity's metadata in backend code | Read chip DTO or save a whole chip | EntityService → EntityRepository → read one local record or patch it inside the queue. A patch targets an existing record and preserves the latest placement. |
| Read associated resources | Knowledge, Identity, Registry or Agent subsystem keyed by Entity | `getContextReferences` supplies lookup keys and menu definitions after Entity read admission. The consuming subsystem still verifies access and loads its own data. |

The current renderer still sends a full chip when saving or dragging. Its existing last-submitted field semantics apply. The new field-level backend API lets callers change just the fields they own. The internal Entity snapshot never crosses the existing preload channels.

## Ownership and authoritative data

| Component | Authority and lookup | Integration in ORB-ARCH-004 |
| --- | --- | --- |
| Key and creation | [Chip dialog](../../features/entities/chip-dialog.tsx) generates a UUID for a new chip. The store verifies that `entity_id` matches the filename. Older valid keys remain usable. | Implemented. The aggregate validates one key and exposes the recorded creation timestamp when present. |
| Name, category, tags, color, glyph and upload | Schema-v1 YAML in `.wonnyy/worldview/entities/<id>.md`. An uploaded image is a bounded PNG data URL in `icon_image`. | Implemented. Rename trims, color accepts six hex digits, and the protected Overview menu and unique menu IDs retain their existing rules. The UI trims and deduplicates typed tags. Backend reads preserve valid stored spelling, order and duplicates. |
| Source associations | The same Entity record contains `sources[]`. Its identity and locator are equal Vault-relative strings. Vault owns file bytes and validates actual paths. | Implemented. Reassigning an exact reference refreshes its recorded metadata. Detaching an absent ID is idempotent. Recorded duplicates are invalid. Existing source extension fields survive writes. |
| Knowledge Card and applied index | Menu definitions belong to the Entity record. The [Knowledge store](../../electron/domains/knowledge/knowledge-store.cjs) owns draft, applied index, notes and ticker in `.wonnyy/worldview/knowledge/<id>.md`. Index parsing stays in [Indexing](../../electron/domains/indexing/knowledge-index.cjs). | Menu metadata implemented. The companion uses a reference-only integration. Reads of the Entity do not open the companion or invoke readers. |
| Backend Identity | [Compiler](../../electron/engines/backend-identity/identity-compiler.cjs) and [snapshot store](../../electron/engines/backend-identity/snapshot-store.cjs) own the current pointer and immutable versions under `.engine/backend-identity/entities/<id>/`. | Reference only. Backend Identity remains Core infrastructure. Missing or stale compiled data does not prevent ordinary Entity operations. |
| Capability bindings | [EnginePackageRegistry](../../electron/engines/registry/registry.cjs) owns packages and explicit links in `.engine/registry/registry.json`, scoped by Entity and Engine. Built-in Identity capability discovery has its existing separate contract. | Reference only. Use the Registry's scoped catalog and authorized execution path. A lookup key makes no claim about linked operations or availability. |
| Optional assignments | [EntityAgentService](../../electron/ai/agents/entity-agents.cjs) owns `.wonnyy/worldview/agents/assignments.json`, joining Entity and reusable Agent IDs. Sessions and executions use their existing records. | Reference only. Discovery uses the Entity filter. The Entity does not instantiate a provider or create an assignment. |
| Logical ports | Every Entity defines `input` and `output`. [WorldView](WORLDVIEW_DOMAIN_OOP.md) stores membership/placement and independent connections with geometric anchors. | Compatible domain representation. The ports are detached values. North/east/south/west, directed/undirected edges and existing connection cardinality continue to work. |
| Policy and revisions | Guarded main-process IPC, active Universe, operation-specific host checks and the existing authorities above. | Host enforcement implemented. A persisted Entity ACL, global Entity revision, unified capability revision and new cardinality policy are deferred. |

## Backend API

Import `Entity`, `EntityService` and `EntityRepository` from [the public CommonJS entry](../../electron/domains/entity/index.cjs). Repositories are trusted infrastructure. Callers that require authorization enter through the service.

- `new Entity({key, createdAt?, metadata, sourceReferences?})` validates recorded state without I/O. Inputs and returned snapshots are detached, including nested tags, menus and source references. The snapshot contains only known logical fields.
- `key`, `getPorts()`, `rename(name)`, `setTags(tags)`, `updateAppearance(changes)`, `updateMetadata(changes)`, `attachSource(reference)`, `hasSource(sourceId)`, `detachSource(sourceId)` and `getSnapshot()` form the aggregate API. Invalid changes leave the previous state intact. The existing v1 limit is 5,000 source associations.
- `new EntityService({authorization, repository?})` accepts a trusted policy invoked with `{root, entityId, operation}`. The required grant is literal `true`. The default denies. Input from the renderer cannot provide the policy.
- `load({root}, id)`, `rename({root}, id, name)` and `updateMetadata({root}, id, changes)` return Entity snapshots. A patch can edit name, tags, category, color, icon, iconImage or knowledgeMenus. Supply a full valid menu list to replace menus. Omit fields to retain them.
- `assignSources({root}, id, references)` and `unassignSource({root}, id, sourceId)` return the compatible chip DTO. Selection accepts 1–500 references per batch. A failed stat aborts the batch.
- `getContextReferences({root}, id)` returns menu definitions plus Entity-scoped lookup inputs for the index, Identity, package links and assignments. Call the owner to obtain an applied revision, compiled version, linked package or actual assignment.

## Authorization, persistence and freshness

The production source IPC retains its trusted sender and captured-Universe checks. EntityService checks admission before repository work, inside the queue before a mutation is written, and before returning the result. A later denial withholds the DTO. A write already committed cannot be undone by that final check. The host retains its existing active-Universe authority. Introducing per-user roles would require another contract.

Entity-only patching reads the latest v1 Markdown inside the same process-local queue used by WorldView. The adapter updates only requested YAML columns, keeps unknown fields, recorded sources and the Markdown body, and calls the existing atomic replacement with the original text for conflict detection. The existing 2 MB record limit and symlink checks apply. This guarantee is per file. Multi-file transactions, cross-process locking and a global compare-and-swap token remain outside this implementation.

The applied-index companion uses its own content revision. The Identity compiler fingerprints selected Entity metadata (ID, name, category, tags, creation time), applied index, ticker, notes, assigned and indexed source information, discovered capabilities and encoded connections. Color, icon, camera and placement are outside that Entity metadata fingerprint. Existing Identity inspection or generation determines freshness on demand. Metadata edits do not schedule a compile. WorldView's digest still reflects its membership, placement and connections. Registry package digests and trust/link state remain with the Registry.

## Files for review

| Change | Files |
| --- | --- |
| Added backend | [Schema](../../electron/domains/entity/contracts/entity-schema.cjs), [Entity](../../electron/domains/entity/model/Entity.cjs), [EntityRepository](../../electron/domains/entity/repositories/EntityRepository.cjs), [EntityService](../../electron/domains/entity/services/EntityService.cjs), [public entry](../../electron/domains/entity/index.cjs) |
| Added regression coverage | [Domain invariants](../../electron/domains/entity/tests/entity-domain.test.cjs), [service authorization](../../electron/domains/entity/tests/entity-service.test.cjs), [persistence and IPC](../../electron/domains/entity/tests/entity-repository.test.cjs) |
| Updated backend | [Shared v1 Entity record adapter](../../electron/domains/entity/worldview-store.cjs), [guarded WorldView IPC](../../electron/core/ipc/worldview-ipc.cjs) |
| Updated architecture | This report, [repository map](REPOSITORY_MAP.md), [module ownership](MODULE_OWNERSHIP.md), [WorldView report](WORLDVIEW_DOMAIN_OOP.md) |
| Updated Atlas | [Catalog](../../scripts/code-atlas/catalog.cjs), [graph selection](../../scripts/code-atlas/graphs.cjs), [architecture rendering](../../scripts/code-atlas/render.cjs) and the generated [Code Atlas](../code-atlas/README.md) |

Existing application source files stay at their original paths. Keeping the v1 store in place preserves the queue and import contract used by Knowledge, WorldView, Indexing, Identity and Agents. The renderer, preload, Engine protocol and data schema need no migration.

<details>
<summary>Generated Atlas files changed in ORB-ARCH-004 (55)</summary>

```text
Modified docs/code-atlas/README.md
Modified docs/code-atlas/architecture-map.md
Modified docs/code-atlas/contracts/README.md
Modified docs/code-atlas/contracts/contract-index.json
Modified docs/code-atlas/contracts/electron-ipc.md
Modified docs/code-atlas/generated-files.json
Modified docs/code-atlas/graphs/call-edges.json
Modified docs/code-atlas/graphs/call-graph.svg
Modified docs/code-atlas/graphs/module-dependencies.svg
Modified docs/code-atlas/graphs/module-edges.json
Modified docs/code-atlas/modules/agents.md
Modified docs/code-atlas/modules/desktop.md
Modified docs/code-atlas/modules/engine-registry.md
Modified docs/code-atlas/modules/engines.md
Modified docs/code-atlas/modules/identity.md
Modified docs/code-atlas/modules/knowledge.md
Modified docs/code-atlas/modules/shared.md
Modified docs/code-atlas/modules/tooling.md
Modified docs/code-atlas/modules/vault.md
Modified docs/code-atlas/modules/worldview-domain.md
Modified docs/code-atlas/modules/worldview.md
Modified docs/code-atlas/symbols/desktop.md
Modified docs/code-atlas/symbols/files/electron/core/ipc/worldview-ipc.cjs.md
Modified docs/code-atlas/symbols/files/electron/core/ipc/worldview-ipc.test.cjs.md
Modified docs/code-atlas/symbols/files/electron/core/persistence/json-store.cjs.md
Modified docs/code-atlas/symbols/files/electron/daily-price-service.cjs.md
Modified docs/code-atlas/symbols/files/electron/domains/entity/worldview-store.cjs.md
Modified docs/code-atlas/symbols/files/electron/domains/entity/worldview-store.test.cjs.md
Modified docs/code-atlas/symbols/files/electron/domains/indexing/tag-association-service.cjs.md
Modified docs/code-atlas/symbols/files/electron/domains/knowledge/backend-identity-service.cjs.md
Modified docs/code-atlas/symbols/files/electron/domains/knowledge/knowledge-source-access.cjs.md
Modified docs/code-atlas/symbols/files/electron/domains/knowledge/knowledge-store.cjs.md
Modified docs/code-atlas/symbols/files/electron/domains/universe/vault-service.cjs.md
Modified docs/code-atlas/symbols/files/electron/domains/worldview/index.cjs.md
Modified docs/code-atlas/symbols/files/electron/domains/worldview/repositories/WorldViewRepository.cjs.md
Modified docs/code-atlas/symbols/files/electron/domains/worldview/services/WorldViewService.cjs.md
Modified docs/code-atlas/symbols/files/electron/financial-service.cjs.md
Modified docs/code-atlas/symbols/files/scripts/code-atlas/analyze.cjs.md
Modified docs/code-atlas/symbols/files/scripts/code-atlas/catalog.cjs.md
Modified docs/code-atlas/symbols/files/scripts/code-atlas/generate.cjs.md
Modified docs/code-atlas/symbols/files/scripts/code-atlas/graphs.cjs.md
Modified docs/code-atlas/symbols/files/scripts/code-atlas/powershell.cjs.md
Modified docs/code-atlas/symbols/files/scripts/code-atlas/render.cjs.md
Modified docs/code-atlas/symbols/symbol-index.json
Modified docs/code-atlas/symbols/worldview.md
Added    docs/code-atlas/modules/entity-domain.md
Added    docs/code-atlas/symbols/entity-domain.md
Added    docs/code-atlas/symbols/files/electron/domains/entity/contracts/entity-schema.cjs.md
Added    docs/code-atlas/symbols/files/electron/domains/entity/index.cjs.md
Added    docs/code-atlas/symbols/files/electron/domains/entity/model/Entity.cjs.md
Added    docs/code-atlas/symbols/files/electron/domains/entity/repositories/EntityRepository.cjs.md
Added    docs/code-atlas/symbols/files/electron/domains/entity/services/EntityService.cjs.md
Added    docs/code-atlas/symbols/files/electron/domains/entity/tests/entity-domain.test.cjs.md
Added    docs/code-atlas/symbols/files/electron/domains/entity/tests/entity-repository.test.cjs.md
Added    docs/code-atlas/symbols/files/electron/domains/entity/tests/entity-service.test.cjs.md
```

</details>

## Verification and rollback

Baseline desktop checks used the original application code and disposable Universes. Backend Identity passed. WorldView reproduced the existing empty-ground pan failure at [worldview-phase04-check.cjs](../../scripts/acceptance/worldview-phase04-check.cjs). Assigned Agents timed out waiting for the approval button at [electron-entity-agents-smoke.cjs](../../scripts/acceptance/electron-entity-agents-smoke.cjs). That timeout establishes where the baseline harness stopped. Its underlying cause remains unverified.

| Check | Observed result |
| --- | --- |
| Full suite | Final standalone run discovered 549 tests, passed 547 and skipped two, with zero failures. An earlier overlapping run timed out starting the Atlas PowerShell parser after 30 seconds. The standalone run used the same tests and timeout. |
| Focused Entity, legacy Entity storage and WorldView domain | 24 passed, including nine new tests. The external-edit regression changes the file between the queued read and the write, then checks that the other writer's bytes survive. |
| Typecheck, formatting, production build | Passed. The new backend directories and changed backend/tooling files also passed explicit Prettier checks. |
| Source and architecture audits | Passed. The source audit reported zero syntax errors and missing imports. The architecture audit checked 841 runtime imports with zero violations, unresolved local imports or cycles. |
| Engine Registry | All 19 tests passed. |
| Code Atlas | 500 artifacts across 436 source files. Exact generated bytes and documentation links passed verification. |
| Backend Identity desktop | Passed offline generation, reuse, retrieval, freshness, inspector and source integrity checks. |
| Production-entry desktop fixture | Assigned chat and cancellation, retained definitions, signed Engine worker and catalog/Settings checks passed with synthetic transport and zero page errors. |
| WorldView and Assigned Agents desktop | Both reproduced their baseline failures at the same assertions. Subsequent cases in those two harnesses remain unverified. |

The work is local against the baseline revision above. No performance benchmark was run.

To roll back after review, revert the ORB-ARCH-004 change set together, including source IPC routing, the record adapter and Atlas generator mappings. Regenerate the Atlas against the restored tree. Existing user records use schema v1 in both versions. Rollback requires no deletion or conversion of a Universe.
