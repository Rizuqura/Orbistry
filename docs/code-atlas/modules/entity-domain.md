# Entity domain

[Atlas](<../README.md>) / [All symbols and callers/callees](<../symbols/entity-domain.md>)

Owns stable Entity keys, metadata, logical ports and recorded Vault references. Adapts shared Markdown persistence.

Owns: electron/domains/entity/ (except the connector compatibility entry). This ownership is editorial; source locations and import edges below are generated facts.

10 source files; 125 callable declarations; 5 contract declarations.

## Entry points and exported symbols

Candidates from compiler export tables and methods on exported classes. Registration, availability, authorization and runtime reachability must be checked separately.

| Symbol | Source | Kind |
| --- | --- | --- |
| [entityKey](<../symbols/files/electron/domains/entity/contracts/entity-schema.cjs.md#s-3a0b329f3d05a841>) | [electron/domains/entity/contracts/entity-schema.cjs:3](<../../../electron/domains/entity/contracts/entity-schema.cjs#L3>) | SchemaBinding |
| [metadataSchema](<../symbols/files/electron/domains/entity/contracts/entity-schema.cjs.md#s-eaf753e2da5b6e2e>) | [electron/domains/entity/contracts/entity-schema.cjs:23](<../../../electron/domains/entity/contracts/entity-schema.cjs#L23>) | SchemaBinding |
| [sourceReference](<../symbols/files/electron/domains/entity/contracts/entity-schema.cjs.md#s-4e6dd5a4e39a63d4>) | [electron/domains/entity/contracts/entity-schema.cjs:39](<../../../electron/domains/entity/contracts/entity-schema.cjs#L39>) | SchemaBinding |
| [Entity](<../symbols/files/electron/domains/entity/model/Entity.cjs.md#s-ac6f61aab61eff1e>) | [electron/domains/entity/model/Entity.cjs:23](<../../../electron/domains/entity/model/Entity.cjs#L23>) | ClassDeclaration |
| [EntityRepository](<../symbols/files/electron/domains/entity/repositories/EntityRepository.cjs.md#s-2917112168686a52>) | [electron/domains/entity/repositories/EntityRepository.cjs:4](<../../../electron/domains/entity/repositories/EntityRepository.cjs#L4>) | ClassDeclaration |
| [EntityService](<../symbols/files/electron/domains/entity/services/EntityService.cjs.md#s-ab72a5463244b2fd>) | [electron/domains/entity/services/EntityService.cjs:8](<../../../electron/domains/entity/services/EntityService.cjs#L8>) | ClassDeclaration |
| [Entity.getPorts](<../symbols/files/electron/domains/entity/model/Entity.cjs.md#s-f3f53c5d1b27e358>) | [electron/domains/entity/model/Entity.cjs:59](<../../../electron/domains/entity/model/Entity.cjs#L59>) | MethodDeclaration |
| [Entity.updateMetadata](<../symbols/files/electron/domains/entity/model/Entity.cjs.md#s-6bb763029bffe74d>) | [electron/domains/entity/model/Entity.cjs:67](<../../../electron/domains/entity/model/Entity.cjs#L67>) | MethodDeclaration |
| [Entity.rename](<../symbols/files/electron/domains/entity/model/Entity.cjs.md#s-3e5fe032fae06194>) | [electron/domains/entity/model/Entity.cjs:78](<../../../electron/domains/entity/model/Entity.cjs#L78>) | MethodDeclaration |
| [Entity.setTags](<../symbols/files/electron/domains/entity/model/Entity.cjs.md#s-cee9e5e0f7ce3127>) | [electron/domains/entity/model/Entity.cjs:83](<../../../electron/domains/entity/model/Entity.cjs#L83>) | MethodDeclaration |
| [Entity.updateAppearance](<../symbols/files/electron/domains/entity/model/Entity.cjs.md#s-0e9c20de0e27bfb6>) | [electron/domains/entity/model/Entity.cjs:88](<../../../electron/domains/entity/model/Entity.cjs#L88>) | MethodDeclaration |
| [Entity.attachSource](<../symbols/files/electron/domains/entity/model/Entity.cjs.md#s-d5d81e31b65f24bf>) | [electron/domains/entity/model/Entity.cjs:93](<../../../electron/domains/entity/model/Entity.cjs#L93>) | MethodDeclaration |
| [Entity.hasSource](<../symbols/files/electron/domains/entity/model/Entity.cjs.md#s-272a7e2fc98ca22b>) | [electron/domains/entity/model/Entity.cjs:104](<../../../electron/domains/entity/model/Entity.cjs#L104>) | MethodDeclaration |
| [Entity.detachSource](<../symbols/files/electron/domains/entity/model/Entity.cjs.md#s-e6ba195fea19d208>) | [electron/domains/entity/model/Entity.cjs:109](<../../../electron/domains/entity/model/Entity.cjs#L109>) | MethodDeclaration |
| [Entity.getSnapshot](<../symbols/files/electron/domains/entity/model/Entity.cjs.md#s-8a8fd069f9bac4e4>) | [electron/domains/entity/model/Entity.cjs:118](<../../../electron/domains/entity/model/Entity.cjs#L118>) | MethodDeclaration |
| [EntityRepository.load](<../symbols/files/electron/domains/entity/repositories/EntityRepository.cjs.md#s-41d14a547f2204eb>) | [electron/domains/entity/repositories/EntityRepository.cjs:6](<../../../electron/domains/entity/repositories/EntityRepository.cjs#L6>) | MethodDeclaration |
| [EntityRepository.getContextReferences](<../symbols/files/electron/domains/entity/repositories/EntityRepository.cjs.md#s-698bd30d44856403>) | [electron/domains/entity/repositories/EntityRepository.cjs:11](<../../../electron/domains/entity/repositories/EntityRepository.cjs#L11>) | MethodDeclaration |
| [EntityRepository.updateMetadata](<../symbols/files/electron/domains/entity/repositories/EntityRepository.cjs.md#s-61e018993e6359d1>) | [electron/domains/entity/repositories/EntityRepository.cjs:23](<../../../electron/domains/entity/repositories/EntityRepository.cjs#L23>) | MethodDeclaration |
| [EntityRepository.assignSources](<../symbols/files/electron/domains/entity/repositories/EntityRepository.cjs.md#s-aa7845b446e0e846>) | [electron/domains/entity/repositories/EntityRepository.cjs:28](<../../../electron/domains/entity/repositories/EntityRepository.cjs#L28>) | MethodDeclaration |
| [EntityRepository.unassignSource](<../symbols/files/electron/domains/entity/repositories/EntityRepository.cjs.md#s-919e66b14255e4a2>) | [electron/domains/entity/repositories/EntityRepository.cjs:33](<../../../electron/domains/entity/repositories/EntityRepository.cjs#L33>) | MethodDeclaration |
| [EntityService.#permit](<../symbols/files/electron/domains/entity/services/EntityService.cjs.md#s-211cfcd8c8342997>) | [electron/domains/entity/services/EntityService.cjs:24](<../../../electron/domains/entity/services/EntityService.cjs#L24>) | MethodDeclaration |
| [EntityService.#run](<../symbols/files/electron/domains/entity/services/EntityService.cjs.md#s-d0ec59c4a934fcb1>) | [electron/domains/entity/services/EntityService.cjs:34](<../../../electron/domains/entity/services/EntityService.cjs#L34>) | MethodDeclaration |
| [EntityService.load](<../symbols/files/electron/domains/entity/services/EntityService.cjs.md#s-4875c21390630c2b>) | [electron/domains/entity/services/EntityService.cjs:44](<../../../electron/domains/entity/services/EntityService.cjs#L44>) | MethodDeclaration |
| [EntityService.getContextReferences](<../symbols/files/electron/domains/entity/services/EntityService.cjs.md#s-e2eb3763bd0f7c10>) | [electron/domains/entity/services/EntityService.cjs:51](<../../../electron/domains/entity/services/EntityService.cjs#L51>) | MethodDeclaration |
| [EntityService.rename](<../symbols/files/electron/domains/entity/services/EntityService.cjs.md#s-43e36ad0ec731850>) | [electron/domains/entity/services/EntityService.cjs:58](<../../../electron/domains/entity/services/EntityService.cjs#L58>) | MethodDeclaration |
| [EntityService.updateMetadata](<../symbols/files/electron/domains/entity/services/EntityService.cjs.md#s-f9b00da652446f2a>) | [electron/domains/entity/services/EntityService.cjs:63](<../../../electron/domains/entity/services/EntityService.cjs#L63>) | MethodDeclaration |
| [EntityService.assignSources](<../symbols/files/electron/domains/entity/services/EntityService.cjs.md#s-37bb8f6e632e75c6>) | [electron/domains/entity/services/EntityService.cjs:70](<../../../electron/domains/entity/services/EntityService.cjs#L70>) | MethodDeclaration |
| [EntityService.unassignSource](<../symbols/files/electron/domains/entity/services/EntityService.cjs.md#s-3811f22ee35e161e>) | [electron/domains/entity/services/EntityService.cjs:77](<../../../electron/domains/entity/services/EntityService.cjs#L77>) | MethodDeclaration |

## Depends on

Literal runtime production-file imports only; lazy imports are included. Type, test, tool and external dependencies remain available in the full index.

- [Shared deterministic infrastructure](<shared.md>): 1 import sites; example [electron/domains/entity/worldview-store.cjs:9](<../../../electron/domains/entity/worldview-store.cjs#L9>).
- [Vault and stations](<vault.md>): 1 import sites; example [electron/domains/entity/worldview-store.cjs:10](<../../../electron/domains/entity/worldview-store.cjs#L10>).

## Depended on by

Literal runtime production-file imports only; lazy imports are included. Type, test, tool and external dependencies remain available in the full index.

- [Assigned Agents and jurisdiction](<agents.md>): 1 import sites; example [electron/ai/agents/entity-agents.cjs:44](<../../../electron/ai/agents/entity-agents.cjs#L44>).
- [Engine package registry](<engine-registry.md>): 5 import sites; example [electron/engines/registry/registry.cjs:365](<../../../electron/engines/registry/registry.cjs#L365>).
- [Backend Identity Engine](<identity.md>): 2 import sites; example [electron/domains/knowledge/backend-identity-service.cjs:7](<../../../electron/domains/knowledge/backend-identity-service.cjs#L7>).
- [Knowledge indexing and source access](<knowledge.md>): 3 import sites; example [electron/domains/indexing/tag-association-service.cjs:11](<../../../electron/domains/indexing/tag-association-service.cjs#L11>).
- [WorldView domain aggregate](<worldview-domain.md>): 2 import sites; example [electron/domains/worldview/repositories/WorldViewRepository.cjs:1](<../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L1>).
- [WorldView desktop IPC](<worldview.md>): 1 import sites; example [electron/core/ipc/worldview-ipc.cjs:2](<../../../electron/core/ipc/worldview-ipc.cjs#L2>).

## Contracts

- [entityKey](<../symbols/files/electron/domains/entity/contracts/entity-schema.cjs.md#s-3a0b329f3d05a841>) — zod-syntax-candidate; exported.
- [knowledgeMenus](<../symbols/files/electron/domains/entity/contracts/entity-schema.cjs.md#s-e52e81c6c7a9d3de>) — zod-syntax-candidate; local schema/type.
- [metadataSchema](<../symbols/files/electron/domains/entity/contracts/entity-schema.cjs.md#s-eaf753e2da5b6e2e>) — zod-syntax-candidate; exported.
- [sourceReference](<../symbols/files/electron/domains/entity/contracts/entity-schema.cjs.md#s-4e6dd5a4e39a63d4>) — zod-syntax-candidate; exported.
- [placementSchema](<../symbols/files/electron/domains/entity/worldview-store.cjs.md#s-bb71db40dfd0a072>) — zod-syntax-candidate; local schema/type.

## Source inventory

| File | Role | Declarations |
| --- | --- | --- |
| [electron/domains/entity/contracts/entity-schema.cjs:1](<../../../electron/domains/entity/contracts/entity-schema.cjs#L1>) | production | 8 |
| [electron/domains/entity/index.cjs:1](<../../../electron/domains/entity/index.cjs#L1>) | production | 0 |
| [electron/domains/entity/model/Entity.cjs:1](<../../../electron/domains/entity/model/Entity.cjs#L1>) | production | 12 |
| [electron/domains/entity/repositories/EntityRepository.cjs:1](<../../../electron/domains/entity/repositories/EntityRepository.cjs#L1>) | production | 6 |
| [electron/domains/entity/services/EntityService.cjs:1](<../../../electron/domains/entity/services/EntityService.cjs#L1>) | production | 17 |
| [electron/domains/entity/tests/entity-domain.test.cjs:1](<../../../electron/domains/entity/tests/entity-domain.test.cjs#L1>) | test | 8 |
| [electron/domains/entity/tests/entity-repository.test.cjs:1](<../../../electron/domains/entity/tests/entity-repository.test.cjs#L1>) | test | 17 |
| [electron/domains/entity/tests/entity-service.test.cjs:1](<../../../electron/domains/entity/tests/entity-service.test.cjs#L1>) | test | 11 |
| [electron/domains/entity/worldview-store.cjs:1](<../../../electron/domains/entity/worldview-store.cjs#L1>) | production | 30 |
| [electron/domains/entity/worldview-store.test.cjs:1](<../../../electron/domains/entity/worldview-store.test.cjs#L1>) | test | 24 |
