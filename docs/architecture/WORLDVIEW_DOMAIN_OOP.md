# ORB-ARCH-003: WorldView domain implementation

WorldView now has backend domain objects and an authorized application service. React remains functional. No Entity class, Engine protocol, Agent tool, Dashboard feature or user-data migration was introduced.

## Baseline and ownership

Baseline commit: `afe2f803b87fb87d0f5a921a6a3fd1247cb699f5`. Baseline suite: 531 tests discovered, 529 passed, two optional skips.

Existing persistence combines Entity metadata and placement in `.wonnyy/worldview/entities/<id>.md` (schema version 1). Relationships are independent JSON files under `.wonnyy/worldview/connectors/`. The current application has one implicit WorldView per Universe, no persisted WorldView ID/revision/configuration file, and geometric `north/east/south/west` ports with directed/undirected relationship semantics.

The new aggregate owns only membership references, placement and connections. It contains no Entity names, sources, knowledge, Backend Identity, model settings, camera, selection or dialogs. Entity-owned fields remain with the existing Entity adapter; the service does not reinterpret connection metadata as authority.

## Files and interfaces

| File | Responsibility / public interface |
| --- | --- |
| [WorldView.cjs](../../electron/domains/worldview/model/WorldView.cjs) | `WorldView(snapshot)`, `addEntity`, `moveEntity`, `removeEntity`, `connect`, `disconnect`, `updateConnection`, `getDirectConnections`, `getSnapshot`, `revision` |
| [Connection.cjs](../../electron/domains/worldview/model/Connection.cjs) | Validated immutable relationship value; `fromLegacy`, `toLegacy`, `withMetadata`, `getSnapshot` |
| [WorldViewService.cjs](../../electron/domains/worldview/services/WorldViewService.cjs) | Host-authorized `load`, compatible `saveChip`, `removeEntity`, `createConnection`, `updateConnection`, `disconnect`, internal read-only `listDirectConnections` |
| [WorldViewRepository.cjs](../../electron/domains/worldview/repositories/WorldViewRepository.cjs) | Existing storage adapter, DTO reconstruction, affected-endpoint lookup and protected persistence delegates |
| [legacy-connection-store.cjs](../../electron/domains/worldview/repositories/legacy-connection-store.cjs) | Existing connection persistence implementation, relocated under its WorldView owner |
| [worldview-schema.cjs](../../electron/domains/worldview/contracts/worldview-schema.cjs) | Canonical endpoints/placement plus unchanged legacy relationship validation |
| [worldview-errors.cjs](../../electron/domains/worldview/contracts/worldview-errors.cjs) | Classified invariant/access failures; malformed contracts also retain Zod validation errors |
| [connection-queries.cjs](../../electron/domains/worldview/queries/connection-queries.cjs) | Detached one-hop metadata filtering; no recursive traversal or knowledge retrieval |
| [index.cjs](../../electron/domains/worldview/index.cjs) | Backend-only public exports; instances never cross IPC |
| [worldview-domain.test.cjs](../../electron/domains/worldview/tests/worldview-domain.test.cjs) | Synthetic invariant, permission, storage and IPC regression tests |

Existing files modified: [WorldView IPC](../../electron/core/ipc/worldview-ipc.cjs), [connector compatibility entry](../../electron/domains/entity/connector-store.cjs), and Code Atlas generator ownership/graph/narrative mappings. The physical connection implementation moved; its established functions remain available through the exact legacy import path. Entity store, Backend Identity compiler/runtime, renderer and Agent implementation were not refactored.

## Request flow

Before: functional React -> guarded IPC -> Entity store / connector store -> Core persistence.

After: functional React -> unchanged preload and guarded IPC -> WorldViewService -> WorldView / Connection validation -> WorldViewRepository -> compatible Entity/connection adapters -> Core persistence.

The service coordinates the model and repository; the model never performs persistence or authorization. Source-assignment, Knowledge and preview operations continue through their existing domain handlers. The legacy connector entry re-exports the relocated implementation for existing Agent/Identity consumers without adding a new service/tool boundary to their established flows.

## Compatibility decisions

- `worldview:load`, `save`, `delete`, `connector-create`, `connector-update` and `connector-delete` retain channel names, payloads and plain DTO shapes. No domain instance is returned through preload.
- Canonical connections validate a source **Output** and target **Input** role. The adapter retains each original geometric attachment as `anchorId`; all 16 existing anchor combinations remain supported. It does not rename stored ports or change the visual interface.
- Undirected relationships retain their meaning and appear in both directional queries. Existing multiple relationships on one geometric port remain supported. The long-term Input/Output port cardinality remains unresolved; this refactor does not decide it.
- Existing save is an Entity metadata/placement upsert. `saveChip` validates WorldView placement and delegates Entity-owned validation/writes. It is not a newly exposed independent membership API.
- Pure `WorldView.removeEntity` removes incident edges from its snapshot. Existing IPC deletion still deletes the Entity index through its established adapter and retains stored relationship records. Dangling records stay in legacy DTOs but are excluded from the valid aggregate. No orphan cleanup, destructive migration or silent repair occurs.
- `default` identifies the current implicit WorldView **within the supplied Universe context**. Multiple persisted WorldViews, new map settings/visibility files and independent membership persistence require separately designed contracts; none are silently introduced here.

## Persistence, revisions and concurrency

Existing root queues serialize mutations within this Node process. Connection creation retains exact-retry behavior and collision checks; updates retain immutable endpoints, expected-prior-record checks and atomic text replacement. Entity writes preserve unknown YAML, Markdown body and source references. Storage revalidates live endpoints inside its existing mutation queue after service prevalidation.

`WorldView.revision` is a deterministic content digest of the logical snapshot. It survives snapshot round-trip and changes with membership, placement or connection metadata. It is not a persisted counter, authorization token or distributed transaction revision. Existing Entity revisions/Identity fingerprints are unchanged. Existing UI updates gain no new mandatory revision field. Whole-map reads retain the pre-existing multi-file consistency limitations; there is no claim of a filesystem-wide transaction or cross-process lock.

No camera, zoom or selection operation calls Identity compilation. Placement is not copied into compiled knowledge by this change. Existing Identity connection encoding continues unchanged through the compatibility entry.

## Authorization and relationship queries

WorldViewService requires literal `true` from its injected trusted-host policy; default admission denies. Production IPC supplies that policy only after guarded main-window/frame/document admission and the existing captured-Universe check. It compares the active Universe again at the service boundary; reads recheck before returning DTOs. This preserves the existing host permission model, not a new Entity role system or an atomic revocation transaction around every filesystem write.

Connection deletion derives the saved endpoint IDs before its second authorization check; a caller cannot substitute an owned Entity ID to delete another relationship. Missing/damaged records retain root-authorized legacy cleanup/retry behavior. The service does not infer scoped grants from empty endpoint lists; the trusted policy must explicitly admit the requested operation, and default admission denies.

`listDirectConnections(context, { entityId, direction })` is backend-only and returns WorldView ID, a content revision and direct connection metadata. The query uses metadata-only reconstruction, exposes no neighboring Knowledge Card/private Identity, and invokes no Engine. It does not recursively traverse. No preload channel or LLM tool was added. Metadata-only reconstruction still reads existing Entity index documents to validate membership; it does not retrieve original Vault source bodies or compiled knowledge chunks.

## Verification and performance limits

Focused run: 11 tests passed (nine new domain/service/repository cases plus existing connection and IPC cases). Full suite: 540 discovered, 538 passed, two original optional skips, no failures. Typecheck, formatting, production build, source audit and architecture boundary/cycle audit passed. The added backend files were also formatted explicitly because the existing format command does not glob every backend domain folder.

The required WorldView Electron command was executed. It still fails at the documented pre-existing `empty ground deselects during pan` assertion in `worldview-phase04-check.cjs:75`; expected zero actions, actual one. Phase 01 reproduced that failure against an isolated original-source rebuild. Assertions were not changed or weakened; later cases in that harness are not claimed as passed.

The separate production-entry desktop harness passed with a disposable profile/Universe and synthetic NVIDIA transport: assigned chat/cancellation, definitions preserved, real signed package worker execution, catalog/Settings reads and zero page errors. This does not prove live provider availability.

No cache, concurrency, retry policy or optimization framework was changed. Placement validation uses only the affected reference; connection creation loads affected endpoints. Snapshot/query and compatible removal/edit paths can load the map. No performance percentage or scalability improvement is claimed; representative large-map benchmarking remains future work if those paths are optimized.

## Rollback and open work

The owner subsequently authorized committing and pushing this implementation to main. Git history records the implementation commit; the baseline SHA above remains the pre-change rollback reference. Revert the IPC routing and connector compatibility shim together with this domain addition and regenerated documentation. No user-data rollback or schema migration is necessary.

Outstanding design decisions: Input/Output port cardinality; a future Entity port-definition model; separately persisted multi-WorldView membership/layout/configuration; optional compatible global revision/CAS semantics. None is resolved by changing existing data during this task. Engine migration and Entity OOP remain out of scope.
