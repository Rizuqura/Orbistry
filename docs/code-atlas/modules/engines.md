# Built-in Engines and data adapters

[Atlas](<../README.md>) / [All symbols and callers/callees](<../symbols/engines.md>)

Owns deterministic native dispatch, parsing, indexing and market-data integration services.

Owns: Other electron/engines/ and their host services. This ownership is editorial; source locations and import edges below are generated facts.

32 source files; 380 callable declarations; 9 contract declarations.

## Entry points and exported symbols

Candidates from compiler export tables and methods on exported classes. Registration, availability, authorization and runtime reachability must be checked separately.

| Symbol | Source | Kind |
| --- | --- | --- |
| [createDailyPriceService](<../symbols/files/electron/daily-price-service.cjs.md#s-79fd9f26e8210a5a>) | [electron/daily-price-service.cjs:26](<../../../electron/daily-price-service.cjs#L26>) | FunctionDeclaration |
| [dailyPriceService](<../symbols/files/electron/daily-price-service.cjs.md#s-f6e7b2410292bd5b>) | [electron/daily-price-service.cjs:102](<../../../electron/daily-price-service.cjs#L102>) | VariableDeclaration |
| [getEntityPrice](<../symbols/files/electron/daily-price-service.cjs.md#s-d2b17dd7b406f45e>) | [electron/daily-price-service.cjs:105](<../../../electron/daily-price-service.cjs#L105>) | FunctionDeclaration |
| [resolveIndexedPrice](<../symbols/files/electron/daily-price-service.cjs.md#s-ed4eb674fb9b15e6>) | [electron/daily-price-service.cjs:117](<../../../electron/daily-price-service.cjs#L117>) | FunctionDeclaration |
| [getIndexedPrice](<../symbols/files/electron/daily-price-service.cjs.md#s-985657f4b0e3a350>) | [electron/daily-price-service.cjs:137](<../../../electron/daily-price-service.cjs#L137>) | FunctionDeclaration |
| [ENGINE_DEFINITIONS](<../symbols/files/electron/engines/definitions.cjs.md#s-bd8a3f86a0f2ac56>) | [electron/engines/definitions.cjs:2](<../../../electron/engines/definitions.cjs#L2>) | VariableDeclaration |
| [openArchive](<../symbols/files/electron/engines/excel/archive.cjs.md#s-c55324de9f4e9cf0>) | [electron/engines/excel/archive.cjs:40](<../../../electron/engines/excel/archive.cjs#L40>) | FunctionDeclaration |
| [scanXml](<../symbols/files/electron/engines/excel/archive.cjs.md#s-dd6b7a2034ed0d5f>) | [electron/engines/excel/archive.cjs:100](<../../../electron/engines/excel/archive.cjs#L100>) | FunctionDeclaration |
| [BUILTIN_FORMATS](<../symbols/files/electron/engines/excel/cells.cjs.md#s-cc90c44a5d213d65>) | [electron/engines/excel/cells.cjs:2](<../../../electron/engines/excel/cells.cjs#L2>) | VariableDeclaration |
| [columnLabel](<../symbols/files/electron/engines/excel/cells.cjs.md#s-ac5b4cb26566b461>) | [electron/engines/excel/cells.cjs:34](<../../../electron/engines/excel/cells.cjs#L34>) | FunctionDeclaration |
| [coordinate](<../symbols/files/electron/engines/excel/cells.cjs.md#s-76ebba55c47be81e>) | [electron/engines/excel/cells.cjs:42](<../../../electron/engines/excel/cells.cjs#L42>) | FunctionDeclaration |
| [sourceRange](<../symbols/files/electron/engines/excel/cells.cjs.md#s-41ef365c38be5e42>) | [electron/engines/excel/cells.cjs:55](<../../../electron/engines/excel/cells.cjs#L55>) | FunctionDeclaration |
| [decodeString](<../symbols/files/electron/engines/excel/cells.cjs.md#s-d206b02e64680711>) | [electron/engines/excel/cells.cjs:71](<../../../electron/engines/excel/cells.cjs#L71>) | FunctionDeclaration |
| [scalar](<../symbols/files/electron/engines/excel/cells.cjs.md#s-4eb4d6705cc6fcdc>) | [electron/engines/excel/cells.cjs:113](<../../../electron/engines/excel/cells.cjs#L113>) | FunctionDeclaration |
| [VERSION](<../symbols/files/electron/engines/excel/limits.cjs.md#s-c64f190e8511d786>) | [electron/engines/excel/limits.cjs:1](<../../../electron/engines/excel/limits.cjs#L1>) | VariableDeclaration |
| [LIMITS](<../symbols/files/electron/engines/excel/limits.cjs.md#s-c0606fb3611c59ca>) | [electron/engines/excel/limits.cjs:2](<../../../electron/engines/excel/limits.cjs#L2>) | VariableDeclaration |
| [escapeMarkdown](<../symbols/files/electron/engines/excel/markdown.cjs.md#s-041cac95d57b1be8>) | [electron/engines/excel/markdown.cjs:5](<../../../electron/engines/excel/markdown.cjs#L5>) | FunctionDeclaration |
| [cellText](<../symbols/files/electron/engines/excel/markdown.cjs.md#s-deea042075c6b363>) | [electron/engines/excel/markdown.cjs:17](<../../../electron/engines/excel/markdown.cjs#L17>) | FunctionDeclaration |
| [sheetPage](<../symbols/files/electron/engines/excel/markdown.cjs.md#s-93d3e52233fc3f11>) | [electron/engines/excel/markdown.cjs:32](<../../../electron/engines/excel/markdown.cjs#L32>) | FunctionDeclaration |
| [renderSheet](<../symbols/files/electron/engines/excel/markdown.cjs.md#s-7f549847601d4399>) | [electron/engines/excel/markdown.cjs:120](<../../../electron/engines/excel/markdown.cjs#L120>) | FunctionDeclaration |
| [renderWorkbook](<../symbols/files/electron/engines/excel/markdown.cjs.md#s-6172ce5abfe311d1>) | [electron/engines/excel/markdown.cjs:173](<../../../electron/engines/excel/markdown.cjs#L173>) | FunctionDeclaration |
| [readWorkbook](<../symbols/files/electron/engines/excel/reader.cjs.md#s-7de6d1652c8afc11>) | [electron/engines/excel/reader.cjs:313](<../../../electron/engines/excel/reader.cjs#L313>) | FunctionDeclaration |
| [resultPage](<../symbols/files/electron/engines/excel/results.cjs.md#s-52108a0228c7c222>) | [electron/engines/excel/results.cjs:16](<../../../electron/engines/excel/results.cjs#L16>) | FunctionDeclaration |
| [resultWorkbook](<../symbols/files/electron/engines/excel/results.cjs.md#s-974d6f7f769fd520>) | [electron/engines/excel/results.cjs:34](<../../../electron/engines/excel/results.cjs#L34>) | FunctionDeclaration |
| [PARSER_VERSION](<../symbols/files/electron/engines/image-parser/parser.cjs.md#s-488d6547c53638b0>) | [electron/engines/image-parser/parser.cjs:2](<../../../electron/engines/image-parser/parser.cjs#L2>) | VariableDeclaration |
| [MAX_IMAGE_BYTES](<../symbols/files/electron/engines/image-parser/parser.cjs.md#s-f2679ad4893026ad>) | [electron/engines/image-parser/parser.cjs:3](<../../../electron/engines/image-parser/parser.cjs#L3>) | VariableDeclaration |
| [MAX_IMAGE_PIXELS](<../symbols/files/electron/engines/image-parser/parser.cjs.md#s-585eeb0c925bd807>) | [electron/engines/image-parser/parser.cjs:4](<../../../electron/engines/image-parser/parser.cjs#L4>) | VariableDeclaration |
| [imageMetadata](<../symbols/files/electron/engines/image-parser/parser.cjs.md#s-2dc99fadd24f1534>) | [electron/engines/image-parser/parser.cjs:7](<../../../electron/engines/image-parser/parser.cjs#L7>) | FunctionDeclaration |
| [imageCacheKey](<../symbols/files/electron/engines/image-parser/parser.cjs.md#s-d51f2a3c59fc4187>) | [electron/engines/image-parser/parser.cjs:59](<../../../electron/engines/image-parser/parser.cjs#L59>) | FunctionDeclaration |
| [parseImage](<../symbols/files/electron/engines/image-parser/parser.cjs.md#s-3be685f98cf79b52>) | [electron/engines/image-parser/parser.cjs:71](<../../../electron/engines/image-parser/parser.cjs#L71>) | FunctionDeclaration |
| [executeNativeEngine](<../symbols/files/electron/engines/native.cjs.md#s-acb52912a7e235f5>) | [electron/engines/native.cjs:2](<../../../electron/engines/native.cjs#L2>) | FunctionDeclaration |
| [countAssociations](<../symbols/files/electron/engines/tag-association/association.cjs.md#s-bd0d1e8a7f55919c>) | [electron/engines/tag-association/association.cjs:4](<../../../electron/engines/tag-association/association.cjs#L4>) | FunctionDeclaration |
| [getAssociationStatistics](<../symbols/files/electron/engines/tag-association/association.cjs.md#s-0f4930cf16ce31ba>) | [electron/engines/tag-association/association.cjs:46](<../../../electron/engines/tag-association/association.cjs#L46>) | FunctionDeclaration |
| [INDEX_VERSION](<../symbols/files/electron/engines/tag-association/indexer.cjs.md#s-86cee73d2eeae3a5>) | [electron/engines/tag-association/indexer.cjs:3](<../../../electron/engines/tag-association/indexer.cjs#L3>) | VariableDeclaration |
| [buildTagIndex](<../symbols/files/electron/engines/tag-association/indexer.cjs.md#s-a49589612a28771b>) | [electron/engines/tag-association/indexer.cjs:6](<../../../electron/engines/tag-association/indexer.cjs#L6>) | FunctionDeclaration |
| [updateTagIndex](<../symbols/files/electron/engines/tag-association/indexer.cjs.md#s-aef49e19581a1e3a>) | [electron/engines/tag-association/indexer.cjs:31](<../../../electron/engines/tag-association/indexer.cjs#L31>) | FunctionDeclaration |
| [normalizeTag](<../symbols/files/electron/engines/tag-association/normalizer.cjs.md#s-4ab62262e70889fe>) | [electron/engines/tag-association/normalizer.cjs:2](<../../../electron/engines/tag-association/normalizer.cjs#L2>) | FunctionDeclaration |
| [normalizeEntityTags](<../symbols/files/electron/engines/tag-association/normalizer.cjs.md#s-806115fa5819ac79>) | [electron/engines/tag-association/normalizer.cjs:9](<../../../electron/engines/tag-association/normalizer.cjs#L9>) | FunctionDeclaration |
| [compareText](<../symbols/files/electron/engines/tag-association/normalizer.cjs.md#s-c87526cd72a39569>) | [electron/engines/tag-association/normalizer.cjs:20](<../../../electron/engines/tag-association/normalizer.cjs#L20>) | FunctionDeclaration |
| [searchEntities](<../symbols/files/electron/engines/tag-association/search.cjs.md#s-4b1bc7bc0802b0f4>) | [electron/engines/tag-association/search.cjs:5](<../../../electron/engines/tag-association/search.cjs#L5>) | FunctionDeclaration |
| [RANGES](<../symbols/files/electron/engines/yahoo-financials/market.cjs.md#s-aa45d5e36cc85964>) | [electron/engines/yahoo-financials/market.cjs:2](<../../../electron/engines/yahoo-financials/market.cjs#L2>) | VariableDeclaration |
| [quoteSchema](<../symbols/files/electron/engines/yahoo-financials/market.cjs.md#s-d6da2ebaf6dbfb3b>) | [electron/engines/yahoo-financials/market.cjs:4](<../../../electron/engines/yahoo-financials/market.cjs#L4>) | SchemaBinding |
| [historySchema](<../symbols/files/electron/engines/yahoo-financials/market.cjs.md#s-588a721b10a61755>) | [electron/engines/yahoo-financials/market.cjs:25](<../../../electron/engines/yahoo-financials/market.cjs#L25>) | SchemaBinding |
| [createMarketProvider](<../symbols/files/electron/engines/yahoo-financials/market.cjs.md#s-43dae10f39c26f94>) | [electron/engines/yahoo-financials/market.cjs:79](<../../../electron/engines/yahoo-financials/market.cjs#L79>) | FunctionDeclaration |
| [createExcelService](<../symbols/files/electron/excel-service.cjs.md#s-adfd4f07e6ae9eaf>) | [electron/excel-service.cjs:70](<../../../electron/excel-service.cjs#L70>) | FunctionDeclaration |
| [excelService](<../symbols/files/electron/excel-service.cjs.md#s-3b352274d348339f>) | [electron/excel-service.cjs:202](<../../../electron/excel-service.cjs#L202>) | VariableDeclaration |
| [createFinancialService](<../symbols/files/electron/financial-service.cjs.md#s-b66de62a4b41c1b8>) | [electron/financial-service.cjs:12](<../../../electron/financial-service.cjs#L12>) | FunctionDeclaration |
| [financialService](<../symbols/files/electron/financial-service.cjs.md#s-6754561cc21192a2>) | [electron/financial-service.cjs:129](<../../../electron/financial-service.cjs#L129>) | VariableDeclaration |
| [getIndexedFinance](<../symbols/files/electron/financial-service.cjs.md#s-c1c4f6362733e9d7>) | [electron/financial-service.cjs:144](<../../../electron/financial-service.cjs#L144>) | FunctionDeclaration |
| [getAuthorizedHistory](<../symbols/files/electron/financial-service.cjs.md#s-468568001e3c5ce7>) | [electron/financial-service.cjs:158](<../../../electron/financial-service.cjs#L158>) | FunctionDeclaration |
| [createImageParserService](<../symbols/files/electron/image-parser-service.cjs.md#s-4f26f99ee660dc42>) | [electron/image-parser-service.cjs:60](<../../../electron/image-parser-service.cjs#L60>) | FunctionDeclaration |
| [imageParserService](<../symbols/files/electron/image-parser-service.cjs.md#s-befb4d53bee4f38e>) | [electron/image-parser-service.cjs:430](<../../../electron/image-parser-service.cjs#L430>) | VariableDeclaration |
| [readWorkbook.open](<../symbols/files/electron/engines/excel/reader.cjs.md#s-edf5439a2aa19058>) | [electron/engines/excel/reader.cjs:323](<../../../electron/engines/excel/reader.cjs#L323>) | MethodDeclaration |
| [readWorkbook.open](<../symbols/files/electron/engines/excel/reader.cjs.md#s-a55e36a960bc9823>) | [electron/engines/excel/reader.cjs:358](<../../../electron/engines/excel/reader.cjs#L358>) | MethodDeclaration |

## Depends on

Literal runtime production-file imports only; lazy imports are included. Type, test, tool and external dependencies remain available in the full index.

- [Backend Identity Engine](<identity.md>): 1 import sites; example [electron/engines/definitions.cjs:3](<../../../electron/engines/definitions.cjs#L3>).
- [Knowledge indexing and source access](<knowledge.md>): 6 import sites; example [electron/daily-price-service.cjs:106](<../../../electron/daily-price-service.cjs#L106>).
- [Shared deterministic infrastructure](<shared.md>): 4 import sites; example [electron/daily-price-service.cjs:7](<../../../electron/daily-price-service.cjs#L7>).
- [Vault and stations](<vault.md>): 3 import sites; example [electron/excel-service.cjs:4](<../../../electron/excel-service.cjs#L4>).

## Depended on by

Literal runtime production-file imports only; lazy imports are included. Type, test, tool and external dependencies remain available in the full index.

- [Assigned Agents and jurisdiction](<agents.md>): 1 import sites; example [electron/ai/agents/entity-agent-protocol.cjs:265](<../../../electron/ai/agents/entity-agent-protocol.cjs#L265>).
- [Retained AI runtime](<ai-runtime.md>): 2 import sites; example [electron/ai/engine-registry.cjs:9](<../../../electron/ai/engine-registry.cjs#L9>).
- [Electron composition and IPC security](<desktop.md>): 7 import sites; example [electron/core/ipc/worldview-ipc.cjs:6](<../../../electron/core/ipc/worldview-ipc.cjs#L6>).
- [Engine package registry](<engine-registry.md>): 1 import sites; example [electron/engines/registry/registry.cjs:180](<../../../electron/engines/registry/registry.cjs#L180>).
- [Backend Identity Engine](<identity.md>): 5 import sites; example [electron/engines/backend-identity/capability-registry.cjs:16](<../../../electron/engines/backend-identity/capability-registry.cjs#L16>).
- [Knowledge indexing and source access](<knowledge.md>): 7 import sites; example [electron/domains/indexing/knowledge-index.cjs:2](<../../../electron/domains/indexing/knowledge-index.cjs#L2>).

## Contracts

- [snapshotSchema](<../symbols/files/electron/engines/daily-price/index.cjs.md#s-6e8ec316612d7dfe>) — zod-syntax-candidate; local schema/type.
- [argumentsSchema](<../symbols/files/electron/engines/yahoo-financials/index.cjs.md#s-969bb4a72f334c56>) — zod-syntax-candidate; local schema/type.
- [nullableNumber](<../symbols/files/electron/engines/yahoo-financials/index.cjs.md#s-77db237bbcabd335>) — zod-syntax-candidate; local schema/type.
- [recordSchema](<../symbols/files/electron/engines/yahoo-financials/index.cjs.md#s-67d881e8a8d6de63>) — zod-syntax-candidate; local schema/type.
- [snapshotSchema](<../symbols/files/electron/engines/yahoo-financials/index.cjs.md#s-d629928ddb317a5d>) — zod-syntax-candidate; local schema/type.
- [numeric](<../symbols/files/electron/engines/yahoo-financials/market.cjs.md#s-92c1749f78c55f9d>) — zod-syntax-candidate; local schema/type.
- [quoteSchema](<../symbols/files/electron/engines/yahoo-financials/market.cjs.md#s-d6da2ebaf6dbfb3b>) — zod-syntax-candidate; exported.
- [historySchema](<../symbols/files/electron/engines/yahoo-financials/market.cjs.md#s-588a721b10a61755>) — zod-syntax-candidate; exported.
- [knowledgeSchema](<../symbols/files/electron/image-parser-service.cjs.md#s-31a5b398f5a4ce9e>) — zod-syntax-candidate; local schema/type.

## Source inventory

| File | Role | Declarations |
| --- | --- | --- |
| [electron/daily-price-service.cjs:1](<../../../electron/daily-price-service.cjs#L1>) | production | 10 |
| [electron/daily-price.test.cjs:1](<../../../electron/daily-price.test.cjs#L1>) | test | 26 |
| [electron/engines/daily-price/index.cjs:1](<../../../electron/engines/daily-price/index.cjs#L1>) | production | 13 |
| [electron/engines/definitions.cjs:1](<../../../electron/engines/definitions.cjs#L1>) | production | 1 |
| [electron/engines/excel/archive.cjs:1](<../../../electron/engines/excel/archive.cjs#L1>) | production | 9 |
| [electron/engines/excel/cells.cjs:1](<../../../electron/engines/excel/cells.cjs#L1>) | production | 10 |
| [electron/engines/excel/cli.cjs:1](<../../../electron/engines/excel/cli.cjs#L1>) | production | 2 |
| [electron/engines/excel/index.cjs:1](<../../../electron/engines/excel/index.cjs#L1>) | production | 9 |
| [electron/engines/excel/limits.cjs:1](<../../../electron/engines/excel/limits.cjs#L1>) | production | 2 |
| [electron/engines/excel/markdown.cjs:1](<../../../electron/engines/excel/markdown.cjs#L1>) | production | 13 |
| [electron/engines/excel/reader.cjs:1](<../../../electron/engines/excel/reader.cjs#L1>) | production | 28 |
| [electron/engines/excel/results.cjs:1](<../../../electron/engines/excel/results.cjs#L1>) | production | 6 |
| [electron/engines/excel/worker.cjs:1](<../../../electron/engines/excel/worker.cjs#L1>) | production | 3 |
| [electron/engines/image-parser/parser.cjs:1](<../../../electron/engines/image-parser/parser.cjs#L1>) | production | 7 |
| [electron/engines/native.cjs:1](<../../../electron/engines/native.cjs#L1>) | production | 1 |
| [electron/engines/tag-association/association.cjs:1](<../../../electron/engines/tag-association/association.cjs#L1>) | production | 8 |
| [electron/engines/tag-association/indexer.cjs:1](<../../../electron/engines/tag-association/indexer.cjs#L1>) | production | 5 |
| [electron/engines/tag-association/normalizer.cjs:1](<../../../electron/engines/tag-association/normalizer.cjs#L1>) | production | 3 |
| [electron/engines/tag-association/search.cjs:1](<../../../electron/engines/tag-association/search.cjs#L1>) | production | 11 |
| [electron/engines/yahoo-financials/cli.cjs:1](<../../../electron/engines/yahoo-financials/cli.cjs#L1>) | production | 2 |
| [electron/engines/yahoo-financials/index.cjs:1](<../../../electron/engines/yahoo-financials/index.cjs#L1>) | production | 23 |
| [electron/engines/yahoo-financials/market.cjs:1](<../../../electron/engines/yahoo-financials/market.cjs#L1>) | production | 15 |
| [electron/excel-engine.test.cjs:1](<../../../electron/excel-engine.test.cjs#L1>) | test | 18 |
| [electron/excel-package.test.cjs:1](<../../../electron/excel-package.test.cjs#L1>) | test | 1 |
| [electron/excel-service.cjs:1](<../../../electron/excel-service.cjs#L1>) | production | 9 |
| [electron/excel-service.test.cjs:1](<../../../electron/excel-service.test.cjs#L1>) | test | 18 |
| [electron/financial-service.cjs:1](<../../../electron/financial-service.cjs#L1>) | production | 12 |
| [electron/financial-service.test.cjs:1](<../../../electron/financial-service.test.cjs#L1>) | test | 26 |
| [electron/image-parser-service.cjs:1](<../../../electron/image-parser-service.cjs#L1>) | production | 27 |
| [electron/image-parser.test.cjs:1](<../../../electron/image-parser.test.cjs#L1>) | test | 34 |
| [electron/tag-association.test.cjs:1](<../../../electron/tag-association.test.cjs#L1>) | test | 28 |
| [electron/yahoo-engine-contract.test.cjs:1](<../../../electron/yahoo-engine-contract.test.cjs#L1>) | test | 22 |
