# Orbistry Engine Registry — author and host integration guide

This guide is for developers publishing engines and developers connecting Orbistry or an LLM host to them. Orbistry provides a terminal/API registry, a starter package, Entity links, discoverable function contracts and persistent execution receipts. **Settings → Engines** lists registered integrations and installed packages with local trust, signature status and operation details. Registration and signing remain explicit terminal actions; see [Engine Signing](ENGINE_SIGNING.md) for key generation, signatures and their exact format.

For the standardized source declaration and complete runnable example, see [Engine contributions](ENGINE_CONTRIBUTIONS.md). See [Engine lifecycle](ENGINE_LIFECYCLE.md) for removal and restoration.

## Main integration portal

The provider-independent package entry is `electron/engines/registry/registry.cjs`, exporting `EnginePackageRegistry`. The existing `electron/ai/engine-registry.cjs` entry re-exports the same class for compatibility; existing `EngineRegistry` instances can also call `packages(universeRoot, options)`. Built-in native dispatch is available through `electron/engines/native.cjs`; its trusted caller must authorize Entity/source/network access before invoking it. The terminal entry is `scripts/orbistry-engine.cjs`, available as `npm run engine -- ...` from this repository.

Each third-party package enters through **`engine_manifest.json`**. The manifest declares identity, version, entry module, operations, input/output contracts and file checksums. Installing a folder without this contract fails; installation does not evaluate its code.

| Component                                            | Responsibility                                                                                |
| ---------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `engine_manifest.json`                               | Package entry, operation contracts and exact file inventory                                   |
| `index.cjs` or another declared `.cjs` entry         | Exports `async execute({ operation, input, context })`                                        |
| `electron/engines/contracts/contract.cjs`             | Authoritative manifest and data validation, protocol limits                                   |
| `electron/engines/registry/package.cjs`              | Offline inventory, checksums, author sealing                                                  |
| `electron/engines/registry/registry.cjs`             | Installation, explicit trust, Entity links, discovery, execution and history                  |
| `electron/engines/runtime/runner.cjs`, `worker.cjs` | Dedicated worker process, environment filtering, deadline and output checks                   |
| `electron/engines/registry/authoring.cjs`            | Starter creation and HTTPS pulling                                                            |
| `electron/engines/definitions.cjs`                   | Shared built-in definitions and reserved IDs; avoids a dependency cycle through the AI portal |
| `types/engine-packages.ts`                           | Renderer-facing discovery DTO                                                                 |
| `examples/engines/number-tools`                      | Complete executable reference package                                                         |
| `docs/engines/engine-manifest.schema.json`           | Structural JSON Schema for editor assistance                                                  |

The CLI `check` command is authoritative: it also checks path rules, operation uniqueness, the supported operation-schema subset and file integrity, which the editor schema alone cannot establish.

Core registry persistence and validation use the neutral `electron/shared` ports; running an Engine does not load the AI runtime. Existing AI helper paths are compatibility exports, not a prerequisite for core execution.

Automation can invoke `node scripts/orbistry-engine.cjs ...` directly to receive JSON on stdout without npm's command banner. Errors use JSON on stderr and a nonzero exit code.

## Start an engine

Prerequisites are this repository's installed dependencies and a supported Node.js runtime. Commands below use PowerShell; `npm.cmd` avoids PowerShell execution-policy issues. The CLI is currently distributed with the source checkout, rather than as a globally installed command in the packaged desktop application.

```powershell
npm.cmd run engine -- help
npm.cmd run engine -- init --source "C:\EngineProjects\number-tools" --id number-tools
```

`init` requires a new folder and generates a working addition example. The package contains:

```text
number-tools/
  engine_manifest.json
  index.cjs
  README.md
```

The execution entry returns JSON-compatible data matching the declared output schema:

```javascript
/** Adds two validated numbers; performs no network access or file writes. */
async function execute({ operation, input, context }) {
  if (operation !== "add") throw Error("Unsupported operation");
  return { sum: input.left + input.right };
}
module.exports = { execute };
```

`context` contains only host-generated `entityId` and `executionId`. The worker does not inject an API token, source document, Universe path or assignment. A future host must define and authorize any additional data channel explicitly.

The generated manifest uses this format; checksum placeholders below must be replaced by `seal`:

```json
{
  "schema_version": 2,
  "protocol": "orbistry.engine/1",
  "engine_id": "number-tools",
  "engine_version": "1.0.0",
  "name": "Number tools",
  "description": "Deterministic number operations.",
  "entry": "index.cjs",
  "operations": [
    {
      "id": "add",
      "description": "Add two explicit numbers.",
      "input_schema": {
        "type": "object",
        "properties": {
          "left": { "type": "number" },
          "right": { "type": "number" }
        },
        "required": ["left", "right"],
        "additionalProperties": false
      },
      "output_schema": {
        "type": "object",
        "properties": { "sum": { "type": "number" } },
        "required": ["sum"],
        "additionalProperties": false
      },
      "read_only": true,
      "network": "none",
      "timeout_ms": 10000
    }
  ],
  "files": { "README.md": "<sha256>", "index.cjs": "<sha256>" }
}
```

After changing code, documentation or dependencies:

```powershell
npm.cmd run engine -- seal --source "C:\EngineProjects\number-tools"
npm.cmd run engine -- check --source "C:\EngineProjects\number-tools"
```

`seal` rewrites checksums in the author-owned manifest and removes any old signature. `check` reads only. Both return the SHA-256 digest of the exact manifest bytes; that manifest in turn hashes every package file. Reformatting files changes integrity and requires resealing. Published version contents are immutable: publish a new version for changed bytes. To publish signed packages, finish edits, then **seal → sign → verify** using the [signing guide](ENGINE_SIGNING.md).

## Install, review, link and run

Use an existing Universe directory and the **saved Entity ID**, not its display name. The registry checks WorldView storage and never creates an Entity implicitly.

```powershell
$universe = "C:\Universe"
$entity = "your-saved-entity-id"
npm.cmd run engine -- install --vault "$universe" --source "C:\EngineProjects\number-tools"
npm.cmd run engine -- list --vault "$universe"
```

Installation copies checked files into `.engine/packages`. It returns `trusted: false` and a manifest digest. Review all package code, verify its provenance and compare that digest with the author's independently published digest. A checksum confirms bytes; it does not identify a trustworthy publisher.

```powershell
npm.cmd run engine -- trust --vault "$universe" --id number-tools --digest "<reviewed-64-character-digest>"
npm.cmd run engine -- link --vault "$universe" --entity "$entity" --id number-tools --operations add
npm.cmd run engine -- describe --vault "$universe" --entity "$entity"
'{"left":8,"right":13}' | Set-Content -Encoding utf8 "C:\EngineProjects\input.json"
npm.cmd run engine -- run --vault "$universe" --entity "$entity" --id number-tools --operation add --input "C:\EngineProjects\input.json" --approve
```

The default link policy is `manual`; every execution requires host-confirmed approval (`--approve` for the human CLI). To explicitly permit repeated operations, use `link ... --policy automatic`. Outbound operations additionally require `--allow-network`; this consent is separate from the execution policy. Input schema validation never coerces strings to numbers or accepts undeclared fields.

A successful run returns `data` and a host-generated `receipt`: UUID execution ID, Entity ID, engine/version, package digest, operation, input digest, host admission/link policy, start/finish times, duration, status and result hash. Input arguments are snapshotted before asynchronous authorization; their digest uses the exact serialized JSON bytes, not a canonical key-order format. Failed worker runs return a safe error code and execution ID on stderr; their receipt is saved with `failed` or `cancelled` status. A process crash can leave a receipt marked `running`; it is not proof of completion.

```powershell
npm.cmd run engine -- result --vault "$universe" --entity "$entity" --execution "<execution-uuid>"
npm.cmd run engine -- unlink --vault "$universe" --entity "$entity" --id number-tools
npm.cmd run engine -- revoke --vault "$universe" --id number-tools --digest "<reviewed-digest>"
```

`result` performs an authorized historical read and checks Entity ownership and the result hash. It does not load package code, contact a provider or create an execution. Existing results remain readable after unlink/revoke when the host still authorizes historical access. Missing, failed or changed records are errors, never a fallback to a new run.

Installing a new version activates it **untrusted** and removes that engine's Entity links. The owner reviews, trusts and relinks the new version. Older versions and execution history remain. Reinstalling identical existing bytes is idempotent and does not reactivate an older version. Explicit disable, enable and uninstall are available through the digest-checked CLI.

## Pull a published package

Publish `engine_manifest.json` and every integrity-listed file at the same HTTPS directory, preserving relative subfolders:

```powershell
npm.cmd run engine -- pull --vault "$universe" --source "https://engines.example.org/number-tools/1.0.0/engine_manifest.json"
```

This illustrative URL must be replaced with a real publisher. Pulling downloads into staging, checks every byte and installs untrusted. Downloads have a total 60-second deadline and package byte limits. Redirects, credential-bearing URLs, query strings and fragments are rejected. Files remain on the manifest's origin and within its directory. Pulling does not run `npm install`, lifecycle scripts or package code. Git URLs and archives are not a supported package transport; a locally cloned, reviewed package directory can be installed with `install`.

Bundle required JavaScript into the integrity-listed package. Do not depend on the developer's `node_modules` or introduce an install-time dependency fetch. The runtime entry is CommonJS `.cjs`; other languages need a reviewed CommonJS adapter and are not a separate standardized transport in this release.

## Connect an Orbistry or LLM host

The backend API follows the same trust/link rules as the CLI. The host supplies an authorization callback; its default denies execution and historical reads. Only literal boolean `true` admits a request. Policy objects, strings, numbers, `null` and `undefined` deny access, even if JavaScript would consider them truthy. This callback must validate the real user's current Entity/assignment/policy and return `Promise<boolean>` or a boolean. The host must take the Universe and Entity from trusted session state.

```javascript
const {
  EnginePackageRegistry,
} = require("./electron/engines/registry/registry.cjs");

const engines = new EnginePackageRegistry(activeUniverseRoot, {
  authorize: async (request) => hostPolicyAllows(currentUser, request),
});
const catalog = await engines.catalog(activeEntityId);

// Supply catalog.tools to a host/model adapter supporting JSON function tools.
// Bindings are host metadata and carry the approval requirement and digest.
const result = await engines.executeTool(
  activeEntityId,
  { name: modelToolCall.name, arguments: modelToolCall.arguments },
  { approved: approvalForThisExactCall, signal: abortController.signal },
);
const historical = await engines.readResult(
  activeEntityId,
  result.receipt.executionId,
);
```

`activeUniverseRoot`, `activeEntityId`, `hostPolicyAllows`, `currentUser`, the model call and approval controller are application-owned values in this example. They are not functions or globals supplied by the registry. A model supplies only a discovered tool name and operation arguments; it cannot grant approval, change Entity scope, install code or grant trust. The host should bind approval to the exact Entity, engine digest, operation and input, and request fresh approval if any changes. Authorization receives `entityId`, `engineId`, `operation`, package `digest`, `inputHash`, network declaration and host approval flag. History checks additionally have `history: true`.

`catalog.tools` contains data-only JSON function definitions (`type`, `function.name`, `description`, `parameters`). Stable hashed tool names map through `catalog.bindings` to engine ID, operation, digest and `approvalRequired`. Only trusted, linked operations with sufficient network consent become tools. Discovery never evaluates package code. Descriptions and execution output remain untrusted data, not host instructions. Provider-specific tool serialization is the host adapter's responsibility.

Catalog `available` means registry/link prerequisites are met. It does not mean the host has admitted a request, manual approval has occurred, an execution completed, or external data is verified. The package version is the version of its operation contracts. Protocol v1 has no automatic retries or cache: each admitted call creates a fresh execution UUID; retrying an operation is a new call. Hosts should bound concurrent calls and history retention according to their resource budget.

Direct APIs are `install(directory)`, `trust(engineId, digest, trusted?)`, `link(settings)`, `unlink(entityId, engineId)`, `setEnabled(engineId,digest,enabled)`, `uninstall(engineId,digest)`, `catalog(entityId?)`, `execute(request)`, `executeTool(entityId, call, options)` and `readResult(entityId, executionId)`. `pullPackage(registry, url)` is exported by `authoring.cjs`.

The desktop bridge exposes **read-only discovery** through `window.orbistryDesktop.ai.enginePackageCatalog({ entityId, vaultPath })`, guarded by the existing versioned main-frame IPC. `vaultPath` optionally binds the read to the caller's captured Universe. Settings → Engines shows all installed package links; Entity-scoped calls return only that Entity's links. Catalog entries include signature status and signing-key fingerprints. Signing, installation and trust use the terminal. The Knowledge Card can request execution of one applied source by declaration ID. Existing built-in Workbench actions retain their own authorization paths.

Workbench can pin a trusted source-contributing package to a connected Engine node. The Assigned Agent resolves the applied source in its assigned Entity, checks current grants and requests approval. See [Engine contributions](ENGINE_CONTRIBUTIONS.md).

## Contract rules and runtime limits

Manifest formats **2** (operations) and **3** (operations and sources) use execution protocol **`orbistry.engine/1`**. Existing built-in engine manifests and adapters keep their existing formats and are not silently migrated. Reserved built-in IDs cannot be shadowed by third-party packages.

Engine and operation IDs contain 2–64 lowercase letters, digits or hyphens, start with a letter, and exclude reserved prototype/device names. Versions use `major.minor.patch` with an optional prerelease suffix. Paths are portable relative paths; traversal, absolute paths, symlinks/junctions, hidden segments, Windows device names, alternate data streams and case-colliding filenames are rejected.

Operation contracts use a deliberately bounded subset of JSON Schema 2020-12:

| Supported      | Rules                                                                                           |
| -------------- | ----------------------------------------------------------------------------------------------- |
| `type`         | `object`, `array`, `string`, `number`, `integer`, `boolean`, `null`; one type per schema        |
| Object         | `properties`, unique `required`, `additionalProperties: false` are mandatory; max 64 properties |
| Array          | `items` is mandatory; `minItems`, `maxItems` supported; default max 10,000 items                |
| String         | `minLength`, `maxLength` supported; counted as JavaScript UTF-16 code units                     |
| Number/integer | Finite numbers, safe integers; `minimum`, `maximum` supported                                   |
| Enum           | Nonempty, unique, up to 128 values; values must satisfy the schema                              |
| Annotations    | Optional `$schema` (2020-12 URI), `title`, `description`                                        |

Input roots must be objects. Maximum schema/data nesting is eight. Unsupported keywords such as `$ref`, `oneOf`, patterns, formats, defaults and coercion fail validation. Authors must not claim support for the complete JSON Schema specification.

Packages allow up to 128 non-manifest files, 4 MiB per file, 16 MiB total, 257 total directory entries and directory depth eight. The manifest is capped at 256 KiB. Each call permits 64 KiB of input and a 1 MiB response envelope, a 100–120,000 ms deadline, 64 KiB diagnostic output and a worker V8 old-space limit of 128 MiB. This V8 setting is not a total OS memory limit. Packages must release their timers/resources so the worker exits.

Only read-only operations (`read_only: true`) are accepted by this initial contract. **Trusted package JavaScript runs with the operating-system permissions of the current user. The worker is not a security sandbox.** Read-only and network declarations are reviewed promises and host admission controls, not filesystem/network enforcement. A trusted package can access files or spawn processes; cancellation stops the direct worker, not a guaranteed process tree. Install/trust only code the owner is prepared to execute locally. Provider secrets are not inherited in the worker environment; keep them out of package files and operation input/logs.

`origin: local_execution` establishes that the package ran; it does not establish fresh external provider data. Engines returning quotes or other time-sensitive facts should declare and return `symbol`, value, currency, provider/market time, retrieval time and explicit freshness/cache metadata. The host must enforce those semantics before presenting a value as current. Historical retrieval returns `origin: historical` separately from the original receipt. There is no implicit cache or provider retry.

## Storage and debugging

```text
<Universe>/.engine/
  packages/<engine-id>/<version>/...    # verified package copies
  registry/registry.json               # versions, trust and Entity links
  registry/executions/<uuid>.json      # host-generated receipts
  registry/results/<uuid>.json         # successful JSON result files
```

These are independent of existing `.engine` adapter directories, assignment records and chat history. Registrations, links and successful execution records survive new registry instances and application restarts when the same Universe is reopened. There is no session or engine-node ID in the lookup key: history uses the Universe, Entity ID and execution UUID. Receipts/results are integrity checked local files, not a tamper-proof signed ledger. Back up the Universe if history must be retained; results can contain sensitive data.

Mutations use an in-process queue and exclusive cross-process `.writer.lock`. `ENGINE_REGISTRY_BUSY` indicates another writer or a lock left after a crash. The registry never removes someone else's lock automatically. An operator should verify that no registry writer is running before manually removing a stale lock. Ordinary failed installs roll back newly copied package directories; a process/OS crash during installation may leave an unregistered directory and subsequent installation reports a conflict for operator inspection.

Registry metadata is capped at 2 MiB on both reads and writes. `ENGINE_REGISTRY_FULL` rejects a growing mutation before replacing the existing metadata, preserving a registry the reader can recover.

Common errors include `ENGINE_NOT_TRUSTED`, `ENGINE_APPROVAL_REQUIRED`, `ENGINE_NETWORK_DENIED`, `ENGINE_NOT_AUTHORIZED`, `ENGINE_AUTHORIZATION_CHANGED`, `ENGINE_INTEGRITY_FAILED`, `ENGINE_VERSION_CONFLICT`, `ENGINE_TIMEOUT` and `ENGINE_EXECUTION_FAILED`. The last code intentionally withholds arbitrary package exception text. Inspect the receipt and reproduce against a disposable Universe; do not log credentials or private engine data. Authorization is rechecked before publication, but the registry and WorldView do not share a distributed transaction with external policy systems.

## Verification and Debug Audit

**Component:** standardized engine package registry and CLI/API portal.

**Affected files:** the components listed above, the versioned IPC/preload catalog, package script, engine regression tests and offline desktop smoke fixture.

**Observed gap:** existing built-in dispatch and construction definitions did not provide a shared package installation/manifest/linking contract for independently authored engines.

**Root cause:** built-ins use explicit adapter dispatch and specialized contracts; dropping arbitrary code into `.engine` is not registration. This is an integration gap, not evidence that existing execution persistence failed.

**Changes applied:** added versioned packages, offline validation, explicit digest trust, Entity links, function discovery, bounded worker execution, safe history reads and terminal authoring/pulling. Existing built-in dispatch and assigned-agent construction are preserved. Shared built-in metadata avoids a dependency cycle through the AI portal. Failed metadata commits roll back newly installed package directories; unsupported schema constraints fail explicitly. Cancellation closes inherited pipes so a descendant cannot hold the host's completion promise open. Input snapshots and hashes bind authorization, execution and receipts to the same arguments. A reproduced history edge case showed a valid 990,001-byte result expanding to 4,365,002 bytes through indentation, exceeding the reader's 4 MiB limit. Results now use compact atomic JSON storage so accepted output stays readable; receipts remain human-readable JSON.

**Verification:** run `node --test electron/engine-packages.test.cjs`, `npm test`, `npm run typecheck`, `npm run audit:source` and the production-entry `node scripts/acceptance/electron-backend-reset-smoke.cjs`. The focused tests exercise real disposable Universes and actual workers/CLI subprocesses. HTTPS transport is mocked deterministically; these tests do not claim a live publisher or external provider is available. Desktop checks use a synthetic NVIDIA response and disposable profile, preserving real credentials and user data.

Observed on 23 November 2026, including the [ORB-ARCH-001 follow-up](../architecture/ORB-ARCH-001-AUDIT.md) and signing/Settings addition: 19 registry and 6 signing tests passed; the full suite reported 523 tests, 521 passed and 2 optional live tests skipped, with zero failures. Build, typecheck and formatting checks passed. Source audit checked 306 CommonJS files and 420 production imports with no syntax or missing-import errors. The standard build passed on Next.js 16.4.5, including static export and security. Fresh-build offline Electron checks verified signed-package execution, read-only Settings inspection/search, valid command examples, independent local trust, catalog IPC, NVIDIA-only registration, assigned chat/cancellation and unchanged agent definitions, with zero page errors. The architecture scan reports no cycles or core-to-AI imports. No CPU, aggregate memory or throughput improvement is claimed.

**Remaining risks:** trusted-code OS permissions, crash-left locks/directories, unbounded retained execution history, host/provider-specific freshness policy and future agent routing as described above. No live model or engine publisher is needed to use the deterministic starter.

## Architecture decision — package registry v1

**Status:** implemented, terminal/API first.

**Context:** independent engine authors need one installation and discovery contract while existing specialized engine/construction paths continue to work.

**Decision:** add a per-Universe package registry with checked manifests, immutable versions, explicit digest trust and Entity links. Reuse WorldView's Entity lookup and existing atomic JSON persistence. A short-lived worker isolates failures and resource limits when executing reviewed third-party code; it is not a new service or an OS security boundary. AI integration remains an optional caller of the deterministic API.

**Alternatives considered:** arbitrary folder scanning/loading would conflate discovery with code execution; replacing all built-in adapters would require unnecessary migration and risk current assigned-agent functionality. A network registry service is unnecessary for this initial local workflow.

**Consequences and migration:** built-ins continue unchanged, package registration does not imply agent routing, and a host must independently enforce user/Entity authorization. No existing package format or Entity data is migrated. A future agent adapter should consume this public API rather than importing worker/storage internals.

**Verification plan:** retain the focused contract, authorization, integrity, cancellation, receipt/history and real CLI tests, plus full-suite and Electron acceptance checks above.
