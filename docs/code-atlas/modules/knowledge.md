# Knowledge indexing and source access

[Atlas](<../README.md>) / [All symbols and callers/callees](<../symbols/knowledge.md>)

Parses applied index declarations and resolves authorized source references and editor state.

Owns: electron/knowledge-*.cjs. This ownership is editorial; source locations and import edges below are generated facts.

8 source files; 78 callable declarations; 0 contract declarations.

## Entry points and exported symbols

Candidates from compiler export tables and methods on exported classes. Registration, availability, authorization and runtime reachability must be checked separately.

| Symbol | Source | Kind |
| --- | --- | --- |
| [parseKnowledgeIndex](<../symbols/files/electron/domains/indexing/knowledge-index.cjs.md#s-d6105072a8fa3f5f>) | [electron/domains/indexing/knowledge-index.cjs:38](<../../../electron/domains/indexing/knowledge-index.cjs#L38>) | FunctionDeclaration |
| [getTagIndex](<../symbols/files/electron/domains/indexing/tag-association-service.cjs.md#s-78c71c503832fb15>) | [electron/domains/indexing/tag-association-service.cjs:117](<../../../electron/domains/indexing/tag-association-service.cjs#L117>) | FunctionDeclaration |
| [searchWorldTags](<../symbols/files/electron/domains/indexing/tag-association-service.cjs.md#s-84e1d1f7ed2f2bae>) | [electron/domains/indexing/tag-association-service.cjs:194](<../../../electron/domains/indexing/tag-association-service.cjs#L194>) | FunctionDeclaration |
| [rebuildWorldTagCache](<../symbols/files/electron/domains/indexing/tag-association-service.cjs.md#s-397407a5e811d705>) | [electron/domains/indexing/tag-association-service.cjs:206](<../../../electron/domains/indexing/tag-association-service.cjs#L206>) | FunctionDeclaration |
| [getWorldTagStatistics](<../symbols/files/electron/domains/indexing/tag-association-service.cjs.md#s-d8dcfd2227d71133>) | [electron/domains/indexing/tag-association-service.cjs:217](<../../../electron/domains/indexing/tag-association-service.cjs#L217>) | FunctionDeclaration |
| [normalizeSymbol](<../symbols/files/electron/domains/indexing/ticker-syntax.cjs.md#s-fa1b2f32fc2cc10e>) | [electron/domains/indexing/ticker-syntax.cjs:2](<../../../electron/domains/indexing/ticker-syntax.cjs#L2>) | FunctionDeclaration |
| [readRecord](<../symbols/files/electron/domains/knowledge/knowledge-source-access.cjs.md#s-9e369167fc59d0c0>) | [electron/domains/knowledge/knowledge-source-access.cjs:24](<../../../electron/domains/knowledge/knowledge-source-access.cjs#L24>) | FunctionDeclaration |
| [resolveKnowledgeSource](<../symbols/files/electron/domains/knowledge/knowledge-source-access.cjs.md#s-533d0fd9803550f8>) | [electron/domains/knowledge/knowledge-source-access.cjs:82](<../../../electron/domains/knowledge/knowledge-source-access.cjs#L82>) | FunctionDeclaration |
| [readKnowledgeIndex](<../symbols/files/electron/domains/knowledge/knowledge-store.cjs.md#s-c0c55e94f399d0ad>) | [electron/domains/knowledge/knowledge-store.cjs:33](<../../../electron/domains/knowledge/knowledge-store.cjs#L33>) | FunctionDeclaration |
| [validateKnowledgeIndex](<../symbols/files/electron/domains/knowledge/knowledge-store.cjs.md#s-a34679b5e2ad30eb>) | [electron/domains/knowledge/knowledge-store.cjs:39](<../../../electron/domains/knowledge/knowledge-store.cjs#L39>) | FunctionDeclaration |
| [saveKnowledgeIndex](<../symbols/files/electron/domains/knowledge/knowledge-store.cjs.md#s-23c92923d2d74292>) | [electron/domains/knowledge/knowledge-store.cjs:73](<../../../electron/domains/knowledge/knowledge-store.cjs#L73>) | FunctionDeclaration |
| [resolveKnowledgeCarousel](<../symbols/files/electron/domains/knowledge/knowledge-store.cjs.md#s-258b76b0d80b1e40>) | [electron/domains/knowledge/knowledge-store.cjs:111](<../../../electron/domains/knowledge/knowledge-store.cjs#L111>) | FunctionDeclaration |
| [previewKnowledgeSource](<../symbols/files/electron/domains/knowledge/knowledge-store.cjs.md#s-5b3b21e330d3d260>) | [electron/domains/knowledge/knowledge-store.cjs:123](<../../../electron/domains/knowledge/knowledge-store.cjs#L123>) | FunctionDeclaration |
| [saveKnowledgeNote](<../symbols/files/electron/domains/knowledge/knowledge-store.cjs.md#s-34066ab7f012366d>) | [electron/domains/knowledge/knowledge-store.cjs:138](<../../../electron/domains/knowledge/knowledge-store.cjs#L138>) | FunctionDeclaration |
| [savePriceSymbol](<../symbols/files/electron/domains/knowledge/knowledge-store.cjs.md#s-7f44c4c9083f4688>) | [electron/domains/knowledge/knowledge-store.cjs:164](<../../../electron/domains/knowledge/knowledge-store.cjs#L164>) | FunctionDeclaration |
| [packageSource](<../symbols/files/electron/domains/knowledge/package-source.cjs.md#s-1884c4d4b5872c82>) | [electron/domains/knowledge/package-source.cjs:8](<../../../electron/domains/knowledge/package-source.cjs#L8>) | FunctionDeclaration |
| [admitYahoo](<../symbols/files/electron/domains/knowledge/yahoo-package.cjs.md#s-c061cc4e19880808>) | [electron/domains/knowledge/yahoo-package.cjs:6](<../../../electron/domains/knowledge/yahoo-package.cjs#L6>) | FunctionDeclaration |
| [admitYahoo.fetch](<../symbols/files/electron/domains/knowledge/yahoo-package.cjs.md#s-36ad1a499085674a>) | [electron/domains/knowledge/yahoo-package.cjs:53](<../../../electron/domains/knowledge/yahoo-package.cjs#L53>) | MethodDeclaration |
| [admitYahoo.verify](<../symbols/files/electron/domains/knowledge/yahoo-package.cjs.md#s-cf7d9a9e6b93d22e>) | [electron/domains/knowledge/yahoo-package.cjs:63](<../../../electron/domains/knowledge/yahoo-package.cjs#L63>) | MethodDeclaration |

## Depends on

Literal runtime production-file imports only; lazy imports are included. Type, test, tool and external dependencies remain available in the full index.

- [Engine package registry](<engine-registry.md>): 4 import sites; example [electron/domains/indexing/knowledge-index.cjs:4](<../../../electron/domains/indexing/knowledge-index.cjs#L4>).
- [Built-in Engines and data adapters](<engines.md>): 5 import sites; example [electron/domains/indexing/tag-association-service.cjs:16](<../../../electron/domains/indexing/tag-association-service.cjs#L16>).
- [Entity domain](<entity-domain.md>): 3 import sites; example [electron/domains/indexing/tag-association-service.cjs:11](<../../../electron/domains/indexing/tag-association-service.cjs#L11>).
- [Shared deterministic infrastructure](<shared.md>): 3 import sites; example [electron/domains/indexing/tag-association-service.cjs:7](<../../../electron/domains/indexing/tag-association-service.cjs#L7>).
- [Vault and stations](<vault.md>): 1 import sites; example [electron/domains/knowledge/knowledge-store.cjs:8](<../../../electron/domains/knowledge/knowledge-store.cjs#L8>).

## Depended on by

Literal runtime production-file imports only; lazy imports are included. Type, test, tool and external dependencies remain available in the full index.

- [Assigned Agents and jurisdiction](<agents.md>): 1 import sites; example [electron/ai/agents/entity-agents.cjs:1917](<../../../electron/ai/agents/entity-agents.cjs#L1917>).
- [Built-in Engines and data adapters](<engines.md>): 10 import sites; example [electron/daily-price-service.cjs:9](<../../../electron/daily-price-service.cjs#L9>).
- [Backend Identity Engine](<identity.md>): 1 import sites; example [electron/engines/backend-identity/identity-compiler.cjs:11](<../../../electron/engines/backend-identity/identity-compiler.cjs#L11>).
- [WorldView desktop IPC](<worldview.md>): 3 import sites; example [electron/core/ipc/worldview-ipc.cjs:3](<../../../electron/core/ipc/worldview-ipc.cjs#L3>).

## Contracts

No TypeScript/Zod contract declaration indexed here. Function signatures and IPC contracts may still apply.

## Source inventory

| File | Role | Declarations |
| --- | --- | --- |
| [electron/domains/indexing/knowledge-index.cjs:1](<../../../electron/domains/indexing/knowledge-index.cjs#L1>) | production | 8 |
| [electron/domains/indexing/tag-association-service.cjs:1](<../../../electron/domains/indexing/tag-association-service.cjs#L1>) | production | 15 |
| [electron/domains/indexing/ticker-syntax.cjs:1](<../../../electron/domains/indexing/ticker-syntax.cjs#L1>) | production | 1 |
| [electron/domains/knowledge/knowledge-source-access.cjs:1](<../../../electron/domains/knowledge/knowledge-source-access.cjs#L1>) | production | 6 |
| [electron/domains/knowledge/knowledge-store.cjs:1](<../../../electron/domains/knowledge/knowledge-store.cjs#L1>) | production | 17 |
| [electron/domains/knowledge/knowledge-store.test.cjs:1](<../../../electron/domains/knowledge/knowledge-store.test.cjs#L1>) | test | 16 |
| [electron/domains/knowledge/package-source.cjs:1](<../../../electron/domains/knowledge/package-source.cjs#L1>) | production | 8 |
| [electron/domains/knowledge/yahoo-package.cjs:1](<../../../electron/domains/knowledge/yahoo-package.cjs#L1>) | production | 7 |
