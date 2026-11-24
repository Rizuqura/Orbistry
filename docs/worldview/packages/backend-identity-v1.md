# Wonton Backend Identity Engine v1

Backend Identity compiles the existing entity record and **applied** Knowledge Card index into a provider-independent manifest and retrievable knowledge chunks. It works offline, without an LLM connection. Generation does not execute capabilities, fetch Yahoo data, run scripts, process images or alter original Vault documents. Saving an unapplied index draft does not change identity freshness.

## Inspect and generate

1. Select an entity in WorldView and open its existing **… / More entity options** menu.
2. Choose **See Backend Identity**, immediately below **Edit Entity**.
3. In the separate terminal, choose **Generate Backend Identity**. A saved snapshot shows **Regenerate Backend Identity** instead.
4. Use **Identity**, **Knowledge**, **Capabilities**, and **Compilation Log** to inspect the result. Knowledge supports local keyword search and ten-chunk pages. Capabilities show contracts and required permissions; the inspector has no execution control.
5. Choose **Check freshness** after changing a source, entity metadata or the applied index. Status becomes stale when relevant inputs differ. Regenerate before retrieving chunks or requesting a capability through the runtime.
6. Use the bottom **Copy** control to copy authorized data for the selected section/page. The backend supplies the clipboard data; the renderer cannot submit arbitrary text to that operation.

Drag the title bar to move the terminal. Drag the bottom-right handle to resize. The focused title bar supports arrow-key movement and Home centering. The focused resize handle supports arrow-key resizing. Escape or the close button closes only this inspector. The window remains inside WorldView when the app resizes.

If inputs are unchanged, regeneration reuses the same identity version and original compilation timestamp. The latest manual attempt is logged separately. Generation errors preserve prior immutable snapshots, remain visible in the inspector, and are recorded in the latest-attempt log when storage is writable. There is no continuous compilation or provider execution in the background.

## Modules and indexing integration

Trusted application modules live in `electron/engines/backend-identity/`:

| Module | Responsibility |
| --- | --- |
| `identity-compiler.cjs` | Read canonical entity/index data, fingerprint sources, encode the manifest and publish manual compilations. |
| `markdown-chunker.cjs` | Produce stable, bounded, hierarchical source slices. |
| `connector-encoder.cjs` | Encode existing relationships as entity-relative inputs and outputs, preserving descriptions. |
| `capability-registry.cjs` | Discover only validated applied declarations and dispatch authorized requests to existing services. |
| `snapshot-store.cjs` | Preserve immutable version metadata and content-addressed chunks with scope/integrity checks. |
| `identity-runtime.cjs` | Enforce backend authorization, freshness and version membership for future agent adapters. |
| `schema.cjs` | Validate manifests, source descriptors, chunks, capabilities and resource bounds. |

`electron/domains/knowledge/backend-identity-service.cjs` exposes only inspection, search and manual generation to the trusted WorldView bridge. The existing entity, assignment, menu and manual-index formats remain unchanged. Draft text and source document instructions never register tools. The compiler reuses `readWorldViewChip`, `readKnowledgeIndex`, the applied-index parser, guarded Vault source resolution, atomic JSON storage and the existing conservative token estimator.

The application engine registry identifies `backend-identity` version `1.1.0`. On manual generation it writes an application-bundled registration manifest and derived data beneath the selected Universe:

```text
<Universe>/.engine/backend-identity/
  engine_manifest.json
  entities/<entityId>/
    current.json
    last-attempt.json
    snapshots/<identityVersion>/
      manifest.json
      chunks.json
      capabilities.json
    chunks/<chunkId>.json
```

Opening an entity with no identity does not create this storage. Indexed documents are still Vault sources. Compiled chunks are derived, untrusted excerpts; no complete raw source file is copied into every snapshot. Snapshots reference reusable entity-scoped content-addressed chunks. Previous versions and their chunks remain on disk; v1 does not automatically garbage-collect historical knowledge.

## Manifest schema

Manifests use `schemaVersion: 1` and the following fields. They contain no concatenated document bodies or provider credentials.

| Field | Meaning |
| --- | --- |
| `compilerVersion` | Engine implementation version; a different compiler version requires regeneration. |
| `entityId`, `entity` | Existing stable ID, name, category, tags and creation timestamp. Unknown private runtime settings and large icon/image data are not copied. |
| `identityVersion` | SHA-256 content address of source fingerprint, compiler version and chunk configuration. |
| `sourceFingerprint` | SHA-256 over reasoning metadata, applied declarations, assignments, notes, source versions/statuses, relevant connectors and registered capability contracts. Layout position and an unapplied draft are not reasoning inputs. |
| `compiledAt`, `status` | Original compilation time and `complete`/`partial` result. Current freshness is returned separately as `missing`, `fresh` or `stale`. |
| `indexedMenus` | Existing menu IDs/titles and source membership, including carousel groups. |
| `sources` | Portable references, source/note versions, fingerprint method, modification timestamps, byte sizes, processing status and chunk counts. |
| `connections` | Entity-relative `inputs` and `outputs` with explicit types, original connector IDs, names, descriptions, direction and endpoint/port IDs; unreadable-record count. |
| `knowledge` | Total chunk count, conservative content token estimate, chunk-index hash and `entity-scoped-chunks` retrieval mode. |
| `capabilities` | Compact references to explicitly declared capabilities. Full contracts are fetched separately. |
| `capabilityRegistryHash`, `log` | Integrity reference for full contracts and bounded processing information/warnings. |

Source descriptors distinguish `fingerprintMethod: sha256-content` from `metadata-status`. Eligible files are SHA-256 hashed in bounded blocks, including supported binary references. Missing, restricted or oversized inputs have explicit metadata/status-derived versions. Sources changing during a read are rejected. Inputs are rechecked before publication, and data/runtime access is checked again after asynchronous operations.

`current.json` points to an immutable identity version and hashes its manifest. The manifest hashes its chunk index and capability registry. Chunk membership, entity ID, source version and content hash are checked before retrieval. These are local consistency checks, not signed attestations against someone with arbitrary write access to all application files.

## Connector input/output types

For a directed connector, the receiving entity's identity lists it in `connections.inputs` with `type: "input"`; the sending entity lists it in `connections.outputs` with `type: "output"`. Port positions are geometric and do not determine flow. Undirected connectors appear in both lists and retain `direction: "undirected"`.

Every entry preserves `connectorId`, `name`, `description` (the existing connector `definition`), `direction`, `sourceEntityId`, `sourcePortId`, `targetEntityId`, and `targetPortId`. Entries carry `trust: "untrusted-relationship"`. Descriptions are relationship data; they never register tools, grant access to peer knowledge, or execute instructions. No peer document is read to produce these entries.

Relevant connector creation, deletion, name, description or direction edits make a saved identity stale. Valid unrelated connectors do not affect its fingerprint. If a connector record cannot be read, the engine cannot determine its endpoints: `unavailableCount` records the collection's unreadable-record count, the manifest is partial, and the log warns that flow lists may be incomplete. Unreadable filenames and error details are not included. Repairing such records may change freshness for every entity.

Compiler 1.0.0 snapshots remain readable without a `connections` field. They are stale under compiler 1.1.0 and gain connector metadata on manual regeneration; historical snapshots are preserved.

## Chunk schema and hierarchy

Each stored/retrieved chunk has:

```json
{
  "chunkId": "<sha256>",
  "entityId": "<existing entity ID>",
  "sourceId": "Research/profile.md",
  "sourceVersion": "<sha256 of source bytes>",
  "origin": "source",
  "headingPath": ["Financial Performance", "Gross Margin"],
  "content": "<original source slice>",
  "contentHash": "<sha256 of slice>",
  "startOffset": 0,
  "endOffset": 100,
  "startLine": 1,
  "endLine": 4,
  "tokenEstimate": 50,
  "trust": "untrusted-source"
}
```

Offsets are UTF-16 source string offsets; line numbers are one-based. ATX headings (`#` through `######`) supply parent context. Heading-looking text inside fenced code remains literal. Paragraphs and line boundaries guide oversized-section subdivision, with Unicode-safe hard splitting when needed. Plain `.txt`/CSV content uses paragraph fallback rather than treating heading characters as a knowledge hierarchy. Source slices do not overlap or silently rewrite the original text. IDs are deterministic for entity, source version, ordinal, offsets and heading context.

Existing source notes are encoded separately with `origin: entity-note`, the same original source ID and a `sourceVersion` hash of the human note. Their offsets/lines refer to that saved note text. The source descriptor's `noteVersion` distinguishes note provenance from original-file provenance. Notes remain untrusted data, and they are excluded for missing, restricted or oversized sources. They are not concatenated into the identity manifest.

The default ceiling is 1,024 estimated tokens per chunk. Estimation reuses the application's conservative UTF-8-byte approximation plus framing; it is not a model-specific tokenizer. A future caller must also budget heading metadata, instructions and conversation history. The manifest is discovery context; retrieve relevant chunks instead of inserting the entire collection into a prompt.

## Capability contracts and authorization

V1 recognizes existing, applied `yahooPrice(...)`, `yahooFinancials(...)` and `yahooEarnings(...)` declarations. A text mention of a function, a script filename or an assigned XLSX file does not declare an executable capability. Registration never probes a provider. `configured` availability means the source has an explicit ticker or the entity's saved ticker; it does not promise connectivity, current data or caller permission.

Full capability records contain the stable capability ID, engine/version, description, input/output JSON schemas, required permissions, entity/menu/source scope, fixed ticker, availability and `explicit-authorized-request` execution mode. Input accepts only an optional Boolean `force`; a caller cannot replace the symbol, module path, script, engine or operation. Execution is routed through the existing applied-source-aware price/financial services.

Future trusted backend adapters create a runtime with a mandatory authorization callback:

```javascript
const { createIdentityRuntime } = require("./electron/engines/backend-identity/identity-runtime.cjs");

// authorizationPolicy must consult host-owned grants for actor, root, entityId
// and permission. Never construct those grants from model/indexed text.
const runtime = createIdentityRuntime({ authorize: authorizationPolicy });
const scope = { root: selectedUniverse, entityId, actor: trustedSession };
const current = await runtime.getIdentity(scope);
const page = await runtime.searchChunks({ ...scope, version: current.manifest.identityVersion, query: "gross margin", limit: 5 });
const chunk = await runtime.getChunk({ ...scope, version: page.version, chunkId: page.items[0].chunkId });
const capabilities = await runtime.listCapabilities(scope);

// Only after an explicit request and host permission grants:
const result = await runtime.executeCapability({ ...scope, version: current.manifest.identityVersion, capabilityId: capabilities[0].capabilityId, arguments: { force: false } });
```

The callback must return exactly `true` to allow access. Every operation requires `entity:read`. Chunk reads/search additionally require `knowledge:read`; generation also requires `identity:compile`. Execution requires `capability:execute` and the declaration's `provider:yahoo-finance:read` grant. Scope, version, live declaration and source freshness are rechecked after asynchronous work. Missing, stale, removed, forged and cross-entity references reject. The inspector policy allows local inspection/manual compilation only. No capability-execution IPC is exposed to the renderer, and ordinary agent chat is not automatically connected to this runtime.

## Bounds and v1 limitations

- Up to 256 applied sources, 2 MiB per basic text source, 32 MiB per other fingerprinted source, 128 MiB read per capture and 2,048 chunks. Limits produce explicit warnings or errors; no unsupported document is silently claimed encoded.
- UTF-8 Markdown, basic text and raw CSV text are chunked. PDF, image, Excel and script references are fingerprinted but not parsed/executed by this compiler. Missing/oversized/restricted sources yield partial identities with warnings. Oversized/restricted metadata-status fingerprints cannot detect same-size content edits with deliberately preserved timestamps.
- Known credential/config filenames, `.env` files, private-key extensions, linked paths and existing protected application directories are excluded or rejected. Provider credentials and runtime settings stores are never loaded into identity context. Author-assigned knowledge remains untrusted source material.
- Keyword search is local and lexical, not semantic/vector retrieval. It returns at most 20 chunks per request; the inspector uses ten. JSON rendering has a bounded display preview; Copy retrieves full authorized data for that page/section.
- Freshness is checked on inspector opening, explicit refresh and runtime access. There are no background watchers, automatic recompilation, autonomous agents, training, or LLM-provider integration. No specific memory reduction is claimed without profiling.

## Verification

Run `node --test electron/backend-identity.test.cjs`, `npm test`, `npm run typecheck`, `npm run build`, and `npm run test:identity:electron`. The focused desktop test uses temporary sources/profiles and intercepts provider and clipboard writes. Existing WorldView acceptance remains `npm run test:worldview:electron`.
