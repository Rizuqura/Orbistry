# Backend Identity Engine v1 — implementation and validation

## Result

The new engine extends canonical WorldView entity records, applied Knowledge Card declarations and existing source assignments. It creates a compact provider-independent identity manifest, separately retrievable source/note chunks and validated capability contracts under the existing Universe `.engine` namespace. It adds no dependencies, model connection, automatic compilation, background indexing or autonomous execution.

Existing entity/index formats and Vault originals are unchanged. Existing Knowledge Card viewers, indexing, entity editing/deletion, provider services and ordinary agent chat keep their current paths. The original entity menu gains **See Backend Identity** immediately after **Edit Entity**, opening an independent read-only terminal with Identity, Knowledge, Capabilities and Compilation Log sections. The title bar and resize handle reuse the existing panel geometry constraints.

## Created files

| Files | Purpose |
| --- | --- |
| `electron/engines/backend-identity/schema.cjs` | Manifest, chunk, capability and resource-bound validation; engine registration definition. |
| `electron/engines/backend-identity/markdown-chunker.cjs` | Hierarchical, Unicode-safe, bounded source slicing with stable IDs and original offsets. |
| `electron/engines/backend-identity/connector-encoder.cjs` | Entity-relative input/output types, descriptions and stable relationship references. |
| `electron/engines/backend-identity/identity-compiler.cjs` | Source capture/fingerprinting, knowledge encoding and manual compilation. |
| `electron/engines/backend-identity/snapshot-store.cjs` | Immutable versions, atomic current pointer, chunk reuse and latest-attempt log. |
| `electron/engines/backend-identity/capability-registry.cjs` | Explicit applied-declaration discovery and existing-service dispatch. |
| `electron/engines/backend-identity/identity-runtime.cjs` | Provider-independent, permission-checked identity/retrieval/capability interface. |
| `electron/backend-identity-service.cjs` | Trusted inspector policy and bounded service requests. |
| `electron/backend-identity.test.cjs` | Sixteen focused chunking, relationship, lifecycle, authorization and integrity tests. |
| `features/worldview/backend-identity-window.tsx` | Floating inspector, read-only JSON highlighting, paging, manual actions and copy controls. |
| `app/backend-identity.css`, `types/backend-identity.ts` | Scoped terminal design and renderer data contracts. |
| `scripts/electron-backend-identity-smoke.cjs` | Disposable native acceptance, with provider and clipboard writes intercepted. |
| [Engine/schema guide](../packages/backend-identity-v1.md), this report | Schema, integration, permission and manual-testing handoff. |

## Modified integration points

- `components/worldview.tsx` and `features/worldview/entity-actions.tsx`: stable-ID inspector lifecycle, menu placement and focus return.
- `electron/ai/engine-registry.cjs`: register the application-bundled `backend-identity` engine definition.
- `electron/worldview-ipc.cjs`, `electron/preload.cjs`, `types/worldview.ts`: allow only status, manual generation, bounded chunk search, capability inspection and backend-generated clipboard data. No renderer capability-execution endpoint is added.
- `app/layout.tsx`: load the separately scoped inspector stylesheet.
- `package.json`: add `test:identity:electron`.
- `README.md`, `docs/README.md`, `docs/architecture/README.md`, `docs/worldview/INDEXING.md`: current entry points and engine documentation.

## Storage and security decisions

Manual generation writes `.engine/backend-identity/engine_manifest.json` plus entity-scoped version metadata and content-addressed chunks. Opening an empty inspector creates no engine storage. Snapshots contain references, not concatenated documents; unchanged versions retain their original compilation time and existing chunks. Latest-attempt logs are separate so failure cannot replace a good identity. Pending compiler queues are released after all requests for an entity finish.

The chunker retains heading parents, original text slices, source/note version hashes and one-based line ranges. Existing human notes are distinguishable `entity-note` chunks with independent note hashes, never silently represented as original file text. Sources are processed one at a time with bounded block reads and explicit limits. No measured memory reduction is claimed.

Capability discovery reads only validated applied Yahoo declarations. Script/text mentions and indexed source instructions do not register arbitrary operations. Future host adapters must supply a backend authorization policy covering actor, root, entity and permission. Reads, membership, versions, source freshness and execution grants are rechecked after asynchronous work. Execution always rebuilds its scope from the live index and routes through the existing authorized services. The UI can discover contracts but cannot execute them.

## Verification

| Check | Result |
| --- | --- |
| Focused backend tests | 16 passed. |
| Full unit suite | 474 passed, two existing optional skips, zero failures. |
| TypeScript and production static-export build | Passed. |
| Existing full WorldView acceptance | Passed: indexing, entity creation/editing/deletion, cards, source integrity, previews, relationships and market charts. |
| Backend Identity native acceptance | Passed: exact menu ordering, separate window, generation/reuse, chunk search, contracts, backend clipboard routing, source freshness, visible generation errors, persisted failure log, last-good-version preservation, regeneration, drag/resize/keyboard, responsive containment and closing. |

Backend tests additionally cover exact Unicode/CRLF reconstruction, fenced headings, plain-text fallback, concurrent compilation, linked engine-path rejection, explicit source-note provenance, unauthorized/cross-entity/forged/versioned requests, revocation during retrieval, no provider execution during compilation, strict execution arguments, credential filename exclusion, oversized inputs and corrupt chunks. Identity generation requires no LLM or real provider access.

## Connector follow-up

Compiler 1.1.0 adds connector descriptions and explicit input/output types to the identity manifest and its existing read-only JSON inspector. Directed connections are inputs at the receiving entity and outputs at the sending entity, independent of geometric ports. Undirected connections appear in both lists with their original direction flag. Relevant changes invalidate freshness; unrelated valid edges do not. Descriptions remain untrusted data and do not grant peer access or capabilities. Damaged connector records produce a partial result with a generic warning. Existing 1.0.0 snapshots retain their original bytes and remain inspectable until manual regeneration.

Four new backend tests cover flow classification, editing/deletion freshness, unrelated edge isolation, partial metadata, denied peer access, schema scope validation and legacy snapshot compatibility. Native acceptance also checks that incoming/outgoing types and descriptions appear in the inspector and copied identity.

## Manual use and limitations

Restart the desktop process to load the updated main/preload bridge. Select an entity, open **… → See Backend Identity**, and generate manually. Use the four tabs, Copy, Check freshness and Regenerate controls. Change an indexed document and check freshness to inspect the stale lifecycle. Drag the title bar or resize from the lower-right handle; keyboard arrow controls are also supported. Full schema and runtime usage are in the [engine guide](../packages/backend-identity-v1.md).

V1 chunks UTF-8 Markdown/basic text and existing notes. PDF, images, Excel and scripts are fingerprinted/reference-only; compilation does not invoke their processors. Oversized/restricted/missing inputs are explicit partial results with metadata/status fingerprints. Search is lexical, freshness is on demand, prior chunks are retained without automatic garbage collection, and future LLM adapters must manage trusted session grants and prompt budgets. No full agent framework or automatic connection to normal chat is implemented.
