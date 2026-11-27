# Backend Identity Engine

[Atlas](<../README.md>) / [All symbols and callers/callees](<../symbols/identity.md>)

Compiles versioned Entity identity/knowledge snapshots and exposes scoped retrieval/capability contracts.

Owns: electron/engines/backend-identity/ and backend-identity-service.cjs. This ownership is editorial; source locations and import edges below are generated facts.

10 source files; 119 callable declarations; 18 contract declarations.

## Entry points and exported symbols

Candidates from compiler export tables and methods on exported classes. Registration, availability, authorization and runtime reachability must be checked separately.

| Symbol | Source | Kind |
| --- | --- | --- |
| [inspect](<../symbols/files/electron/domains/knowledge/backend-identity-service.cjs.md#s-ce9a187a9463c465>) | [electron/domains/knowledge/backend-identity-service.cjs:22](<../../../electron/domains/knowledge/backend-identity-service.cjs#L22>) | FunctionDeclaration |
| [isReadOnlyOperation](<../symbols/files/electron/engines/backend-identity/capability-registry.cjs.md#s-2c8e0b5c5514fd41>) | [electron/engines/backend-identity/capability-registry.cjs:6](<../../../electron/engines/backend-identity/capability-registry.cjs#L6>) | FunctionDeclaration |
| [discoverCapabilities](<../symbols/files/electron/engines/backend-identity/capability-registry.cjs.md#s-98fed9e53769111a>) | [electron/engines/backend-identity/capability-registry.cjs:15](<../../../electron/engines/backend-identity/capability-registry.cjs#L15>) | FunctionDeclaration |
| [executeCapability](<../symbols/files/electron/engines/backend-identity/capability-registry.cjs.md#s-701c955440e5983d>) | [electron/engines/backend-identity/capability-registry.cjs:73](<../../../electron/engines/backend-identity/capability-registry.cjs#L73>) | FunctionDeclaration |
| [encodeConnections](<../symbols/files/electron/engines/backend-identity/connector-encoder.cjs.md#s-4cb717248b131954>) | [electron/engines/backend-identity/connector-encoder.cjs:2](<../../../electron/engines/backend-identity/connector-encoder.cjs#L2>) | FunctionDeclaration |
| [capture](<../symbols/files/electron/engines/backend-identity/identity-compiler.cjs.md#s-1f99e7da5df73158>) | [electron/engines/backend-identity/identity-compiler.cjs:150](<../../../electron/engines/backend-identity/identity-compiler.cjs#L150>) | FunctionDeclaration |
| [generate](<../symbols/files/electron/engines/backend-identity/identity-compiler.cjs.md#s-f539d3e969846edf>) | [electron/engines/backend-identity/identity-compiler.cjs:254](<../../../electron/engines/backend-identity/identity-compiler.cjs#L254>) | FunctionDeclaration |
| [status](<../symbols/files/electron/engines/backend-identity/identity-compiler.cjs.md#s-1d61d04d4313288f>) | [electron/engines/backend-identity/identity-compiler.cjs:442](<../../../electron/engines/backend-identity/identity-compiler.cjs#L442>) | FunctionDeclaration |
| [createIdentityRuntime](<../symbols/files/electron/engines/backend-identity/identity-runtime.cjs.md#s-f3672ac091501d51>) | [electron/engines/backend-identity/identity-runtime.cjs:14](<../../../electron/engines/backend-identity/identity-runtime.cjs#L14>) | FunctionDeclaration |
| [chunkMarkdown](<../symbols/files/electron/engines/backend-identity/markdown-chunker.cjs.md#s-647ff3dd5dad92e8>) | [electron/engines/backend-identity/markdown-chunker.cjs:5](<../../../electron/engines/backend-identity/markdown-chunker.cjs#L5>) | FunctionDeclaration |
| [describePackageSources](<../symbols/files/electron/engines/backend-identity/package-sources.cjs.md#s-94666ad1ea56bbdc>) | [electron/engines/backend-identity/package-sources.cjs:3](<../../../electron/engines/backend-identity/package-sources.cjs#L3>) | FunctionDeclaration |
| [location](<../symbols/files/electron/engines/backend-identity/snapshot-store.cjs.md#s-d045ef361cdcece4>) | [electron/engines/backend-identity/snapshot-store.cjs:36](<../../../electron/engines/backend-identity/snapshot-store.cjs#L36>) | FunctionDeclaration |
| [read](<../symbols/files/electron/engines/backend-identity/snapshot-store.cjs.md#s-c2efce1b7070b548>) | [electron/engines/backend-identity/snapshot-store.cjs:47](<../../../electron/engines/backend-identity/snapshot-store.cjs#L47>) | FunctionDeclaration |
| [readVersion](<../symbols/files/electron/engines/backend-identity/snapshot-store.cjs.md#s-a51351659d223525>) | [electron/engines/backend-identity/snapshot-store.cjs:62](<../../../electron/engines/backend-identity/snapshot-store.cjs#L62>) | FunctionDeclaration |
| [current](<../symbols/files/electron/engines/backend-identity/snapshot-store.cjs.md#s-1b3b25fe1054f619>) | [electron/engines/backend-identity/snapshot-store.cjs:86](<../../../electron/engines/backend-identity/snapshot-store.cjs#L86>) | FunctionDeclaration |
| [index](<../symbols/files/electron/engines/backend-identity/snapshot-store.cjs.md#s-0306e55cc435f9ec>) | [electron/engines/backend-identity/snapshot-store.cjs:101](<../../../electron/engines/backend-identity/snapshot-store.cjs#L101>) | FunctionDeclaration |
| [getChunk](<../symbols/files/electron/engines/backend-identity/snapshot-store.cjs.md#s-4d5e1ea6610b8273>) | [electron/engines/backend-identity/snapshot-store.cjs:128](<../../../electron/engines/backend-identity/snapshot-store.cjs#L128>) | FunctionDeclaration |
| [putChunk](<../symbols/files/electron/engines/backend-identity/snapshot-store.cjs.md#s-ed9516fc7e10fb38>) | [electron/engines/backend-identity/snapshot-store.cjs:146](<../../../electron/engines/backend-identity/snapshot-store.cjs#L146>) | FunctionDeclaration |
| [publish](<../symbols/files/electron/engines/backend-identity/snapshot-store.cjs.md#s-aad15ef56f75a7c7>) | [electron/engines/backend-identity/snapshot-store.cjs:159](<../../../electron/engines/backend-identity/snapshot-store.cjs#L159>) | FunctionDeclaration |
| [recordAttempt](<../symbols/files/electron/engines/backend-identity/snapshot-store.cjs.md#s-ae275b9de6284ebc>) | [electron/engines/backend-identity/snapshot-store.cjs:233](<../../../electron/engines/backend-identity/snapshot-store.cjs#L233>) | FunctionDeclaration |
| [lastAttempt](<../symbols/files/electron/engines/backend-identity/snapshot-store.cjs.md#s-739f94fed52517ad>) | [electron/engines/backend-identity/snapshot-store.cjs:241](<../../../electron/engines/backend-identity/snapshot-store.cjs#L241>) | FunctionDeclaration |
| [inspect.authorize](<../symbols/files/electron/domains/knowledge/backend-identity-service.cjs.md#s-f958d8a5c5e1a550>) | [electron/domains/knowledge/backend-identity-service.cjs:28](<../../../electron/domains/knowledge/backend-identity-service.cjs#L28>) | MethodDeclaration |

## Depends on

Literal runtime production-file imports only; lazy imports are included. Type, test, tool and external dependencies remain available in the full index.

- [Connectors](<connectors.md>): 1 import sites; example [electron/engines/backend-identity/identity-compiler.cjs:12](<../../../electron/engines/backend-identity/identity-compiler.cjs#L12>).
- [Engine package registry](<engine-registry.md>): 4 import sites; example [electron/engines/backend-identity/capability-registry.cjs:33](<../../../electron/engines/backend-identity/capability-registry.cjs#L33>).
- [Built-in Engines and data adapters](<engines.md>): 3 import sites; example [electron/engines/backend-identity/capability-registry.cjs:16](<../../../electron/engines/backend-identity/capability-registry.cjs#L16>).
- [Entity domain](<entity-domain.md>): 2 import sites; example [electron/domains/knowledge/backend-identity-service.cjs:7](<../../../electron/domains/knowledge/backend-identity-service.cjs#L7>).
- [Knowledge indexing and source access](<knowledge.md>): 1 import sites; example [electron/engines/backend-identity/identity-compiler.cjs:11](<../../../electron/engines/backend-identity/identity-compiler.cjs#L11>).
- [Shared deterministic infrastructure](<shared.md>): 3 import sites; example [electron/engines/backend-identity/identity-compiler.cjs:5](<../../../electron/engines/backend-identity/identity-compiler.cjs#L5>).
- [Vault and stations](<vault.md>): 1 import sites; example [electron/engines/backend-identity/identity-compiler.cjs:13](<../../../electron/engines/backend-identity/identity-compiler.cjs#L13>).

## Depended on by

Literal runtime production-file imports only; lazy imports are included. Type, test, tool and external dependencies remain available in the full index.

- [Assigned Agents and jurisdiction](<agents.md>): 3 import sites; example [electron/ai/agents/entity-agent-access.cjs:4](<../../../electron/ai/agents/entity-agent-access.cjs#L4>).
- [Built-in Engines and data adapters](<engines.md>): 1 import sites; example [electron/engines/definitions.cjs:3](<../../../electron/engines/definitions.cjs#L3>).
- [WorldView desktop IPC](<worldview.md>): 5 import sites; example [electron/core/ipc/worldview-ipc.cjs:53](<../../../electron/core/ipc/worldview-ipc.cjs#L53>).

## Contracts

- [inputSchema](<../symbols/files/electron/domains/knowledge/backend-identity-service.cjs.md#s-335b6ac113030e6f>) — zod-syntax-candidate; local schema/type.
- [argumentsSchema](<../symbols/files/electron/engines/backend-identity/capability-registry.cjs.md#s-651cffb34db0ad94>) — zod-syntax-candidate; local schema/type.
- [scopeSchema](<../symbols/files/electron/engines/backend-identity/identity-runtime.cjs.md#s-cb16f882fe7b60d6>) — zod-syntax-candidate; local schema/type.
- [createIdentityRuntime.searchChunks.{       query = "",       offset = 0,       limit = 10,     }](<../symbols/files/electron/engines/backend-identity/identity-runtime.cjs.md#s-d786cad21d488cd8>) — zod-syntax-candidate; local schema/type.
- [createIdentityRuntime.listTopics.{ offset = 0, limit = 100 }](<../symbols/files/electron/engines/backend-identity/identity-runtime.cjs.md#s-b0a182287303d229>) — zod-syntax-candidate; local schema/type.
- [id](<../symbols/files/electron/engines/backend-identity/schema.cjs.md#s-1bfe98485f0c4d72>) — zod-syntax-candidate; local schema/type.
- [hash](<../symbols/files/electron/engines/backend-identity/schema.cjs.md#s-d1d72cee1bd5a7d9>) — zod-syntax-candidate; local schema/type.
- [sourceId](<../symbols/files/electron/engines/backend-identity/schema.cjs.md#s-deebf62f18607b91>) — zod-syntax-candidate; local schema/type.
- [connectionSchema](<../symbols/files/electron/engines/backend-identity/schema.cjs.md#s-1fd2e5bacacc138b>) — zod-syntax-candidate; local schema/type.
- [chunkReference](<../symbols/files/electron/engines/backend-identity/schema.cjs.md#s-d9f24fb24a86fa17>) — zod-syntax-candidate; local schema/type.
- [chunkSchema](<../symbols/files/electron/engines/backend-identity/schema.cjs.md#s-48c4773c98dcb0b6>) — zod-syntax-candidate; local schema/type.
- [sourceSchema](<../symbols/files/electron/engines/backend-identity/schema.cjs.md#s-a34443dcbf098579>) — zod-syntax-candidate; local schema/type.
- [capabilitySchema](<../symbols/files/electron/engines/backend-identity/schema.cjs.md#s-536b8e5354ed62f7>) — zod-syntax-candidate; local schema/type.
- [logSchema](<../symbols/files/electron/engines/backend-identity/schema.cjs.md#s-fe81b4b135922b2c>) — zod-syntax-candidate; local schema/type.
- [manifestSchema](<../symbols/files/electron/engines/backend-identity/schema.cjs.md#s-19a6d9f8e49548b2>) — zod-syntax-candidate; local schema/type.
- [pointerSchema](<../symbols/files/electron/engines/backend-identity/snapshot-store.cjs.md#s-3d698d57fbf15c48>) — zod-syntax-candidate; local schema/type.
- [attemptSchema](<../symbols/files/electron/engines/backend-identity/snapshot-store.cjs.md#s-94998d70a14c0291>) — zod-syntax-candidate; local schema/type.
- [index.schema](<../symbols/files/electron/engines/backend-identity/snapshot-store.cjs.md#s-f94bcd088de6429f>) — zod-syntax-candidate; local schema/type.

## Source inventory

| File | Role | Declarations |
| --- | --- | --- |
| [electron/backend-identity.test.cjs:1](<../../../electron/backend-identity.test.cjs#L1>) | test | 49 |
| [electron/domains/knowledge/backend-identity-service.cjs:1](<../../../electron/domains/knowledge/backend-identity-service.cjs#L1>) | production | 3 |
| [electron/engines/backend-identity/capability-registry.cjs:1](<../../../electron/engines/backend-identity/capability-registry.cjs#L1>) | production | 5 |
| [electron/engines/backend-identity/connector-encoder.cjs:1](<../../../electron/engines/backend-identity/connector-encoder.cjs#L1>) | production | 2 |
| [electron/engines/backend-identity/identity-compiler.cjs:1](<../../../electron/engines/backend-identity/identity-compiler.cjs#L1>) | production | 20 |
| [electron/engines/backend-identity/identity-runtime.cjs:1](<../../../electron/engines/backend-identity/identity-runtime.cjs#L1>) | production | 19 |
| [electron/engines/backend-identity/markdown-chunker.cjs:1](<../../../electron/engines/backend-identity/markdown-chunker.cjs#L1>) | production | 3 |
| [electron/engines/backend-identity/package-sources.cjs:1](<../../../electron/engines/backend-identity/package-sources.cjs#L1>) | production | 9 |
| [electron/engines/backend-identity/schema.cjs:1](<../../../electron/engines/backend-identity/schema.cjs#L1>) | production | 12 |
| [electron/engines/backend-identity/snapshot-store.cjs:1](<../../../electron/engines/backend-identity/snapshot-store.cjs#L1>) | production | 15 |
