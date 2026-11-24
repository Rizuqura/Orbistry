# WorldView persistence and IPC

[Atlas](<../README.md>) / [All symbols and callers/callees](<../symbols/worldview.md>)

Owns Entity records, source associations and validated WorldView operations.

Owns: electron/worldview-*.cjs. This ownership is editorial; source locations and import edges below are generated facts.

2 source files; 51 callable declarations; 4 contract declarations.

## Entry points and exported symbols

Candidates from compiler export tables and methods on exported classes. Registration, availability, authorization and runtime reachability must be checked separately.

| Symbol | Source | Kind |
| --- | --- | --- |
| No export resolved | See source initialization scopes | — |

## Depends on

Literal runtime production-file imports only; lazy imports are included. Type, test, tool and external dependencies remain available in the full index.

- [Shared deterministic infrastructure](<shared.md>): 1 import sites; example [electron/domains/entity/worldview-store.cjs:9](<../../../electron/domains/entity/worldview-store.cjs#L9>).
- [Vault and stations](<vault.md>): 1 import sites; example [electron/domains/entity/worldview-store.cjs:10](<../../../electron/domains/entity/worldview-store.cjs#L10>).

## Depended on by

Literal runtime production-file imports only; lazy imports are included. Type, test, tool and external dependencies remain available in the full index.

- [Assigned Agents and jurisdiction](<agents.md>): 1 import sites; example [electron/ai/agents/entity-agents.cjs:44](<../../../electron/ai/agents/entity-agents.cjs#L44>).
- [Electron composition and IPC security](<desktop.md>): 1 import sites; example [electron/core/ipc/worldview-ipc.cjs:2](<../../../electron/core/ipc/worldview-ipc.cjs#L2>).
- [Engine package registry](<engine-registry.md>): 5 import sites; example [electron/engines/registry/registry.cjs:309](<../../../electron/engines/registry/registry.cjs#L309>).
- [Backend Identity Engine](<identity.md>): 2 import sites; example [electron/domains/knowledge/backend-identity-service.cjs:7](<../../../electron/domains/knowledge/backend-identity-service.cjs#L7>).
- [Knowledge indexing and source access](<knowledge.md>): 3 import sites; example [electron/domains/indexing/tag-association-service.cjs:11](<../../../electron/domains/indexing/tag-association-service.cjs#L11>).
- [WorldView domain aggregate](<worldview-domain.md>): 2 import sites; example [electron/domains/worldview/repositories/WorldViewRepository.cjs:1](<../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L1>).

## Contracts

- [idSchema](<../symbols/files/electron/domains/entity/worldview-store.cjs.md#s-cdb843d3e505540a>) — zod-syntax-candidate; local schema/type.
- [knowledgeMenusSchema](<../symbols/files/electron/domains/entity/worldview-store.cjs.md#s-781e3d0c90ba0343>) — zod-syntax-candidate; local schema/type.
- [sourceSchema](<../symbols/files/electron/domains/entity/worldview-store.cjs.md#s-638d96f9e3e1f6aa>) — zod-syntax-candidate; local schema/type.
- [chipSchema](<../symbols/files/electron/domains/entity/worldview-store.cjs.md#s-68d3b072260edaa7>) — zod-syntax-candidate; local schema/type.

## Source inventory

| File | Role | Declarations |
| --- | --- | --- |
| [electron/domains/entity/worldview-store.cjs:1](<../../../electron/domains/entity/worldview-store.cjs#L1>) | production | 31 |
| [electron/domains/entity/worldview-store.test.cjs:1](<../../../electron/domains/entity/worldview-store.test.cjs#L1>) | test | 24 |
