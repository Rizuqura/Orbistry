# Knowledge indexing and source access

[Atlas](<../README.md>) / [All symbols and callers/callees](<../symbols/knowledge.md>)

Parses applied index declarations and resolves authorized source references and editor state.

Owns: electron/knowledge-*.cjs. This ownership is editorial; source locations and import edges below are generated facts.

5 source files; 60 callable declarations; 0 contract declarations.

## Entry points and exported symbols

Candidates from compiler export tables and methods on exported classes. Registration, availability, authorization and runtime reachability must be checked separately.

| Symbol | Source | Kind |
| --- | --- | --- |
| [parseKnowledgeIndex](<../symbols/files/electron/domains/indexing/knowledge-index.cjs.md#s-e76591326346a1da>) | [electron/domains/indexing/knowledge-index.cjs:5](<../../../electron/domains/indexing/knowledge-index.cjs#L5>) | FunctionDeclaration |
| [getTagIndex](<../symbols/files/electron/domains/indexing/tag-association-service.cjs.md#s-78c71c503832fb15>) | [electron/domains/indexing/tag-association-service.cjs:117](<../../../electron/domains/indexing/tag-association-service.cjs#L117>) | FunctionDeclaration |
| [searchWorldTags](<../symbols/files/electron/domains/indexing/tag-association-service.cjs.md#s-84e1d1f7ed2f2bae>) | [electron/domains/indexing/tag-association-service.cjs:194](<../../../electron/domains/indexing/tag-association-service.cjs#L194>) | FunctionDeclaration |
| [rebuildWorldTagCache](<../symbols/files/electron/domains/indexing/tag-association-service.cjs.md#s-397407a5e811d705>) | [electron/domains/indexing/tag-association-service.cjs:206](<../../../electron/domains/indexing/tag-association-service.cjs#L206>) | FunctionDeclaration |
| [getWorldTagStatistics](<../symbols/files/electron/domains/indexing/tag-association-service.cjs.md#s-d8dcfd2227d71133>) | [electron/domains/indexing/tag-association-service.cjs:217](<../../../electron/domains/indexing/tag-association-service.cjs#L217>) | FunctionDeclaration |
| [readRecord](<../symbols/files/electron/domains/knowledge/knowledge-source-access.cjs.md#s-9e369167fc59d0c0>) | [electron/domains/knowledge/knowledge-source-access.cjs:24](<../../../electron/domains/knowledge/knowledge-source-access.cjs#L24>) | FunctionDeclaration |
| [resolveKnowledgeSource](<../symbols/files/electron/domains/knowledge/knowledge-source-access.cjs.md#s-533d0fd9803550f8>) | [electron/domains/knowledge/knowledge-source-access.cjs:82](<../../../electron/domains/knowledge/knowledge-source-access.cjs#L82>) | FunctionDeclaration |
| [readKnowledgeIndex](<../symbols/files/electron/domains/knowledge/knowledge-store.cjs.md#s-c0c55e94f399d0ad>) | [electron/domains/knowledge/knowledge-store.cjs:33](<../../../electron/domains/knowledge/knowledge-store.cjs#L33>) | FunctionDeclaration |
| [validateKnowledgeIndex](<../symbols/files/electron/domains/knowledge/knowledge-store.cjs.md#s-a34679b5e2ad30eb>) | [electron/domains/knowledge/knowledge-store.cjs:39](<../../../electron/domains/knowledge/knowledge-store.cjs#L39>) | FunctionDeclaration |
| [saveKnowledgeIndex](<../symbols/files/electron/domains/knowledge/knowledge-store.cjs.md#s-23c92923d2d74292>) | [electron/domains/knowledge/knowledge-store.cjs:73](<../../../electron/domains/knowledge/knowledge-store.cjs#L73>) | FunctionDeclaration |
| [resolveKnowledgeCarousel](<../symbols/files/electron/domains/knowledge/knowledge-store.cjs.md#s-258b76b0d80b1e40>) | [electron/domains/knowledge/knowledge-store.cjs:111](<../../../electron/domains/knowledge/knowledge-store.cjs#L111>) | FunctionDeclaration |
| [previewKnowledgeSource](<../symbols/files/electron/domains/knowledge/knowledge-store.cjs.md#s-5b3b21e330d3d260>) | [electron/domains/knowledge/knowledge-store.cjs:123](<../../../electron/domains/knowledge/knowledge-store.cjs#L123>) | FunctionDeclaration |
| [saveKnowledgeNote](<../symbols/files/electron/domains/knowledge/knowledge-store.cjs.md#s-34066ab7f012366d>) | [electron/domains/knowledge/knowledge-store.cjs:138](<../../../electron/domains/knowledge/knowledge-store.cjs#L138>) | FunctionDeclaration |
| [savePriceSymbol](<../symbols/files/electron/domains/knowledge/knowledge-store.cjs.md#s-7f44c4c9083f4688>) | [electron/domains/knowledge/knowledge-store.cjs:164](<../../../electron/domains/knowledge/knowledge-store.cjs#L164>) | FunctionDeclaration |

## Depends on

Literal runtime production-file imports only; lazy imports are included. Type, test, tool and external dependencies remain available in the full index.

- [Built-in Engines and data adapters](<engines.md>): 7 import sites; example [electron/domains/indexing/knowledge-index.cjs:2](<../../../electron/domains/indexing/knowledge-index.cjs#L2>).
- [Shared deterministic infrastructure](<shared.md>): 3 import sites; example [electron/domains/indexing/tag-association-service.cjs:7](<../../../electron/domains/indexing/tag-association-service.cjs#L7>).
- [Vault and stations](<vault.md>): 1 import sites; example [electron/domains/knowledge/knowledge-store.cjs:8](<../../../electron/domains/knowledge/knowledge-store.cjs#L8>).
- [WorldView persistence and IPC](<worldview.md>): 3 import sites; example [electron/domains/indexing/tag-association-service.cjs:11](<../../../electron/domains/indexing/tag-association-service.cjs#L11>).

## Depended on by

Literal runtime production-file imports only; lazy imports are included. Type, test, tool and external dependencies remain available in the full index.

- [Electron composition and IPC security](<desktop.md>): 2 import sites; example [electron/core/ipc/worldview-ipc.cjs:3](<../../../electron/core/ipc/worldview-ipc.cjs#L3>).
- [Built-in Engines and data adapters](<engines.md>): 6 import sites; example [electron/daily-price-service.cjs:106](<../../../electron/daily-price-service.cjs#L106>).
- [Backend Identity Engine](<identity.md>): 1 import sites; example [electron/engines/backend-identity/identity-compiler.cjs:11](<../../../electron/engines/backend-identity/identity-compiler.cjs#L11>).

## Contracts

No TypeScript/Zod contract declaration indexed here. Function signatures and IPC contracts may still apply.

## Source inventory

| File | Role | Declarations |
| --- | --- | --- |
| [electron/domains/indexing/knowledge-index.cjs:1](<../../../electron/domains/indexing/knowledge-index.cjs#L1>) | production | 6 |
| [electron/domains/indexing/tag-association-service.cjs:1](<../../../electron/domains/indexing/tag-association-service.cjs#L1>) | production | 15 |
| [electron/domains/knowledge/knowledge-source-access.cjs:1](<../../../electron/domains/knowledge/knowledge-source-access.cjs#L1>) | production | 6 |
| [electron/domains/knowledge/knowledge-store.cjs:1](<../../../electron/domains/knowledge/knowledge-store.cjs#L1>) | production | 17 |
| [electron/domains/knowledge/knowledge-store.test.cjs:1](<../../../electron/domains/knowledge/knowledge-store.test.cjs#L1>) | test | 16 |
