# electron/domains/knowledge/knowledge-store.cjs: symbols

[Atlas](<../../../../../README.md>) / [Knowledge indexing and source access](<../../../../../modules/knowledge.md>) / [electron/domains/knowledge/knowledge-store.cjs:1](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/domains/knowledge/knowledge-store.cjs](<knowledge-store.cjs.md#s-161d775acbcf7375>) (Module)
- [publicState](<knowledge-store.cjs.md#s-11f72856c775c5cf>) (FunctionDeclaration)
- [readKnowledgeIndex](<knowledge-store.cjs.md#s-c0c55e94f399d0ad>) (FunctionDeclaration)
- [validateKnowledgeIndex](<knowledge-store.cjs.md#s-a34679b5e2ad30eb>) (FunctionDeclaration)
- [validateKnowledgeIndex.&lt;anonymous@43:22&gt;](<knowledge-store.cjs.md#s-fbc572146eb68745>) (ArrowFunction)
- [validateKnowledgeIndex.&lt;anonymous@47:35&gt;](<knowledge-store.cjs.md#s-813b6fb999314028>) (ArrowFunction)
- [saveKnowledgeIndex](<knowledge-store.cjs.md#s-23c92923d2d74292>) (FunctionDeclaration)
- [saveKnowledgeIndex.writeIndex](<knowledge-store.cjs.md#s-b342ffff622fda36>) (FunctionExpression)
- [resolveKnowledgeCarousel](<knowledge-store.cjs.md#s-258b76b0d80b1e40>) (FunctionDeclaration)
- [resolveKnowledgeCarousel.&lt;anonymous@115:14&gt;](<knowledge-store.cjs.md#s-17aaa7ec7432d76d>) (ArrowFunction)
- [resolveKnowledgeCarousel.&lt;anonymous@116:11&gt;](<knowledge-store.cjs.md#s-9ef7afbb1492aa63>) (ArrowFunction)
- [previewKnowledgeSource](<knowledge-store.cjs.md#s-5b3b21e330d3d260>) (FunctionDeclaration)
- [previewKnowledgeSource.previewSource](<knowledge-store.cjs.md#s-99313261c10e747c>) (FunctionExpression)
- [saveKnowledgeNote](<knowledge-store.cjs.md#s-34066ab7f012366d>) (FunctionDeclaration)
- [saveKnowledgeNote.saveSourceNote](<knowledge-store.cjs.md#s-1654fd018e79f10a>) (FunctionExpression)
- [saveKnowledgeNote.saveSourceNote.&lt;anonymous@152:23&gt;](<knowledge-store.cjs.md#s-23f9a4ec3f6f2b88>) (ArrowFunction)
- [savePriceSymbol](<knowledge-store.cjs.md#s-7f44c4c9083f4688>) (FunctionDeclaration)
- [savePriceSymbol.writePriceSymbol](<knowledge-store.cjs.md#s-f9823235072108c5>) (FunctionExpression)

<a id="s-161d775acbcf7375"></a>

## electron/domains/knowledge/knowledge-store.cjs

[electron/domains/knowledge/knowledge-store.cjs:1](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L1>) · Module · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 8.

- require — module-loader; [electron/domains/knowledge/knowledge-store.cjs:1](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L1>)
- require — module-loader; [electron/domains/knowledge/knowledge-store.cjs:2](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L2>)
- require — module-loader; [electron/domains/knowledge/knowledge-store.cjs:3](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L3>)
- require — module-loader; [electron/domains/knowledge/knowledge-store.cjs:7](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L7>)
- require — module-loader; [electron/domains/knowledge/knowledge-store.cjs:8](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L8>)
- require — module-loader; [electron/domains/knowledge/knowledge-store.cjs:9](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L9>)
- require — module-loader; [electron/domains/knowledge/knowledge-store.cjs:10](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L10>)
- require — module-loader; [electron/domains/knowledge/knowledge-store.cjs:14](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L14>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:18](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:1384](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L1384>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:15](<../../../../../../../electron/backend-identity.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:361](<../../../../../../../electron/backend-identity.test.cjs#L361>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:16](<../../../../../../../electron/daily-price.test.cjs#L16>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:12](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L12>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:801](<../../../../../../../electron/engine-packages.test.cjs#L801>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:869](<../../../../../../../electron/engine-packages.test.cjs#L869>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:17](<../../../../../../../electron/excel-service.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:23](<../../../../../../../electron/financial-service.test.cjs#L23>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:25](<../../../../../../../electron/image-parser.test.cjs#L25>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:455](<../../../../../../../electron/image-parser.test.cjs#L455>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:212](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L212>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:44](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L44>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:12](<../../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L12>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:236](<../../../../../../../tests/integration/architecture-contract.test.cjs#L236>) — file-import-only; coverage not established.

<a id="s-11f72856c775c5cf"></a>

## publicState

[electron/domains/knowledge/knowledge-store.cjs:17](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L17>) · FunctionDeclaration · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

Returns only logical editor state, excluding filesystem paths and internal serialization fields.

Purpose evidence: jsdoc.

Lexical owner: [electron/domains/knowledge/knowledge-store.cjs](<knowledge-store.cjs.md#s-161d775acbcf7375>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| record | any | compiler-inferred | required |

Returns: { sourceNotes?: any; priceSymbol?: any; draft: any; applied: any; menus: any; revision: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [normalizeSymbol](<../indexing/ticker-syntax.cjs.md#s-fa1b2f32fc2cc10e>) — [electron/domains/knowledge/knowledge-store.cjs:24](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L24>)

**Called by (statically resolved):**

- [readKnowledgeIndex](<knowledge-store.cjs.md#s-c0c55e94f399d0ad>) — [electron/domains/knowledge/knowledge-store.cjs:35](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L35>)
- [saveKnowledgeIndex.writeIndex](<knowledge-store.cjs.md#s-b342ffff622fda36>) — [electron/domains/knowledge/knowledge-store.cjs:89](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L89>)
- [saveKnowledgeIndex.writeIndex](<knowledge-store.cjs.md#s-b342ffff622fda36>) — [electron/domains/knowledge/knowledge-store.cjs:106](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L106>)
- [saveKnowledgeNote.saveSourceNote](<knowledge-store.cjs.md#s-1654fd018e79f10a>) — [electron/domains/knowledge/knowledge-store.cjs:159](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L159>)
- [savePriceSymbol.writePriceSymbol](<knowledge-store.cjs.md#s-f9823235072108c5>) — [electron/domains/knowledge/knowledge-store.cjs:186](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L186>)

Unresolved / external call sites: 1.

- Array.isArray — external-or-dynamic-dispatch; [electron/domains/knowledge/knowledge-store.cjs:26](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L26>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:18](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:1384](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L1384>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:15](<../../../../../../../electron/backend-identity.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:361](<../../../../../../../electron/backend-identity.test.cjs#L361>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:16](<../../../../../../../electron/daily-price.test.cjs#L16>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:12](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L12>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:801](<../../../../../../../electron/engine-packages.test.cjs#L801>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:869](<../../../../../../../electron/engine-packages.test.cjs#L869>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:17](<../../../../../../../electron/excel-service.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:23](<../../../../../../../electron/financial-service.test.cjs#L23>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:25](<../../../../../../../electron/image-parser.test.cjs#L25>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:455](<../../../../../../../electron/image-parser.test.cjs#L455>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:212](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L212>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:44](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L44>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:12](<../../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L12>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:236](<../../../../../../../tests/integration/architecture-contract.test.cjs#L236>) — file-import-only; coverage not established.

<a id="s-c0c55e94f399d0ad"></a>

## readKnowledgeIndex

[electron/domains/knowledge/knowledge-store.cjs:33](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L33>) · FunctionDeclaration · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

Loads the logical index only for an existing entity; absent companion files resolve to an empty landing state.

Purpose evidence: jsdoc.

Exported as: readKnowledgeIndex ([electron/domains/knowledge/knowledge-store.cjs:1](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L1>)).

Lexical owner: [electron/domains/knowledge/knowledge-store.cjs](<knowledge-store.cjs.md#s-161d775acbcf7375>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| rootPath | any | compiler-inferred | required |
| id | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [publicState](<knowledge-store.cjs.md#s-11f72856c775c5cf>) — [electron/domains/knowledge/knowledge-store.cjs:35](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L35>)
- [readRecord](<knowledge-source-access.cjs.md#s-9e369167fc59d0c0>) — [electron/domains/knowledge/knowledge-store.cjs:35](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L35>)

**Called by (statically resolved):**

- [&lt;anonymous@1366:119&gt;](<../../ai/agents/entity-agents.test.cjs.md#s-58653e683a59839a>) — [electron/ai/agents/entity-agents.test.cjs:1385](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L1385>)
- [&lt;anonymous@357:94&gt;.&lt;anonymous@358:11&gt;](<../../backend-identity.test.cjs.md#s-7efbda7815859ecb>) — [electron/backend-identity.test.cjs:362](<../../../../../../../electron/backend-identity.test.cjs#L362>)
- [&lt;anonymous@453:103&gt;.&lt;anonymous@454:11&gt;](<../../backend-identity.test.cjs.md#s-90ca171901a43834>) — [electron/backend-identity.test.cjs:456](<../../../../../../../electron/backend-identity.test.cjs#L456>)
- [&lt;anonymous@616:111&gt;.&lt;anonymous@617:11&gt;](<../../backend-identity.test.cjs.md#s-04a3ff3542bf8529>) — [electron/backend-identity.test.cjs:627](<../../../../../../../electron/backend-identity.test.cjs#L627>)
- [registerWorldViewIpc."knowledge-load"](<../../core/ipc/worldview-ipc.cjs.md#s-a63b1c679edfd19d>) — [electron/core/ipc/worldview-ipc.cjs:216](<../../../../../../../electron/core/ipc/worldview-ipc.cjs#L216>)
- [getEntityPrice](<../../daily-price-service.cjs.md#s-228713be9d1393e3>) — [electron/daily-price-service.cjs:129](<../../../../../../../electron/daily-price-service.cjs#L129>)
- [getEntityPrice.&lt;anonymous@137:5&gt;](<../../daily-price-service.cjs.md#s-c585afe75536c141>) — [electron/daily-price-service.cjs:138](<../../../../../../../electron/daily-price-service.cjs#L138>)
- [getEntityPrice](<../../daily-price-service.cjs.md#s-228713be9d1393e3>) — [electron/daily-price-service.cjs:141](<../../../../../../../electron/daily-price-service.cjs#L141>)
- [resolveIndexedPrice](<../../daily-price-service.cjs.md#s-bc6ef6804f3a2ab0>) — [electron/daily-price-service.cjs:149](<../../../../../../../electron/daily-price-service.cjs#L149>)
- [&lt;anonymous@203:71&gt;.&lt;anonymous@204:22&gt;](<../../daily-price.test.cjs.md#s-6ee60d633344ad90>) — [electron/daily-price.test.cjs:222](<../../../../../../../electron/daily-price.test.cjs#L222>)
- [&lt;anonymous@98:86&gt;.&lt;anonymous@99:22&gt;](<knowledge-store.test.cjs.md#s-bf2d9cd52533bc64>) — [electron/domains/knowledge/knowledge-store.test.cjs:108](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L108>)
- [&lt;anonymous@98:86&gt;.&lt;anonymous@99:22&gt;](<knowledge-store.test.cjs.md#s-bf2d9cd52533bc64>) — [electron/domains/knowledge/knowledge-store.test.cjs:136](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L136>)
- [&lt;anonymous@98:86&gt;.&lt;anonymous@99:22&gt;](<knowledge-store.test.cjs.md#s-bf2d9cd52533bc64>) — [electron/domains/knowledge/knowledge-store.test.cjs:137](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L137>)
- [&lt;anonymous@98:86&gt;.&lt;anonymous@99:22&gt;](<knowledge-store.test.cjs.md#s-bf2d9cd52533bc64>) — [electron/domains/knowledge/knowledge-store.test.cjs:148](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L148>)
- [&lt;anonymous@205:99&gt;.&lt;anonymous@206:22&gt;](<knowledge-store.test.cjs.md#s-2462cd3fd9106de3>) — [electron/domains/knowledge/knowledge-store.test.cjs:255](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L255>)
- [&lt;anonymous@267:91&gt;.&lt;anonymous@268:22&gt;](<knowledge-store.test.cjs.md#s-a8cffca973c1888b>) — [electron/domains/knowledge/knowledge-store.test.cjs:277](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L277>)
- [&lt;anonymous@267:91&gt;.&lt;anonymous@268:22&gt;](<knowledge-store.test.cjs.md#s-a8cffca973c1888b>) — [electron/domains/knowledge/knowledge-store.test.cjs:278](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L278>)
- [&lt;anonymous@267:91&gt;.&lt;anonymous@268:22&gt;](<knowledge-store.test.cjs.md#s-a8cffca973c1888b>) — [electron/domains/knowledge/knowledge-store.test.cjs:287](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L287>)
- [packageSource.reference](<package-source.cjs.md#s-5a15f265f6ea6ea9>) — [electron/domains/knowledge/package-source.cjs:18](<../../../../../../../electron/domains/knowledge/package-source.cjs#L18>)
- [&lt;anonymous@796:89&gt;](<../../engine-packages.test.cjs.md#s-d8ce262c4b7b63c7>) — [electron/engine-packages.test.cjs:846](<../../../../../../../electron/engine-packages.test.cjs#L846>)
- [&lt;anonymous@864:112&gt;](<../../engine-packages.test.cjs.md#s-b50f9582b28483cb>) — [electron/engine-packages.test.cjs:910](<../../../../../../../electron/engine-packages.test.cjs#L910>)
- [capture](<../../engines/backend-identity/identity-compiler.cjs.md#s-1f99e7da5df73158>) — [electron/engines/backend-identity/identity-compiler.cjs:153](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L153>)
- [resolve](<../../financial-service.cjs.md#s-8f8dd0c6e55aec18>) — [electron/financial-service.cjs:168](<../../../../../../../electron/financial-service.cjs#L168>)
- [getAuthorizedHistory.symbol](<../../financial-service.cjs.md#s-2e1b4d6265e710ac>) — [electron/financial-service.cjs:211](<../../../../../../../electron/financial-service.cjs#L211>)
- [&lt;anonymous@164:95&gt;.&lt;anonymous@165:16&gt;.&lt;anonymous@198:30&gt;](<../../financial-service.test.cjs.md#s-ab684a8a69ff8a78>) — [electron/financial-service.test.cjs:199](<../../../../../../../electron/financial-service.test.cjs#L199>)
- [&lt;anonymous@429:82&gt;.&lt;anonymous@452:17&gt;](<../../image-parser.test.cjs.md#s-0b451ba0258339da>) — [electron/image-parser.test.cjs:456](<../../../../../../../electron/image-parser.test.cjs#L456>)
- [&lt;anonymous@429:82&gt;.&lt;anonymous@452:17&gt;](<../../image-parser.test.cjs.md#s-0b451ba0258339da>) — [electron/image-parser.test.cjs:466](<../../../../../../../electron/image-parser.test.cjs#L466>)
- [main](<../../../scripts/acceptance/yahoo-package-lifecycle.cjs.md#s-a519dde3e44c97fd>) — [scripts/acceptance/yahoo-package-lifecycle.cjs:136](<../../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L136>)
- [main](<../../../scripts/acceptance/yahoo-package-lifecycle.cjs.md#s-a519dde3e44c97fd>) — [scripts/acceptance/yahoo-package-lifecycle.cjs:144](<../../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L144>)

Unresolved / external call sites: 1.

- readWorldViewChip — signature-only-candidate; [electron/domains/knowledge/knowledge-store.cjs:34](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L34>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:1385](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L1385>) — static-call-site; coverage not established.
- [electron/backend-identity.test.cjs:362](<../../../../../../../electron/backend-identity.test.cjs#L362>) — static-call-site; coverage not established.
- [electron/backend-identity.test.cjs:456](<../../../../../../../electron/backend-identity.test.cjs#L456>) — static-call-site; coverage not established.
- [electron/backend-identity.test.cjs:627](<../../../../../../../electron/backend-identity.test.cjs#L627>) — static-call-site; coverage not established.
- [electron/daily-price.test.cjs:222](<../../../../../../../electron/daily-price.test.cjs#L222>) — static-call-site; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:108](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L108>) — static-call-site; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:136](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L136>) — static-call-site; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:137](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L137>) — static-call-site; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:148](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L148>) — static-call-site; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:255](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L255>) — static-call-site; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:277](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L277>) — static-call-site; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:278](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L278>) — static-call-site; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:287](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L287>) — static-call-site; coverage not established.
- [electron/engine-packages.test.cjs:846](<../../../../../../../electron/engine-packages.test.cjs#L846>) — static-call-site; coverage not established.
- [electron/engine-packages.test.cjs:910](<../../../../../../../electron/engine-packages.test.cjs#L910>) — static-call-site; coverage not established.
- [electron/financial-service.test.cjs:199](<../../../../../../../electron/financial-service.test.cjs#L199>) — static-call-site; coverage not established.
- [electron/image-parser.test.cjs:456](<../../../../../../../electron/image-parser.test.cjs#L456>) — static-call-site; coverage not established.
- [electron/image-parser.test.cjs:466](<../../../../../../../electron/image-parser.test.cjs#L466>) — static-call-site; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:136](<../../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L136>) — static-call-site; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:144](<../../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L144>) — static-call-site; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:18](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:1384](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L1384>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:15](<../../../../../../../electron/backend-identity.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:361](<../../../../../../../electron/backend-identity.test.cjs#L361>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:16](<../../../../../../../electron/daily-price.test.cjs#L16>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:12](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L12>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:801](<../../../../../../../electron/engine-packages.test.cjs#L801>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:869](<../../../../../../../electron/engine-packages.test.cjs#L869>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:17](<../../../../../../../electron/excel-service.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:23](<../../../../../../../electron/financial-service.test.cjs#L23>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:25](<../../../../../../../electron/image-parser.test.cjs#L25>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:455](<../../../../../../../electron/image-parser.test.cjs#L455>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:212](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L212>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:44](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L44>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:12](<../../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L12>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:236](<../../../../../../../tests/integration/architecture-contract.test.cjs#L236>) — file-import-only; coverage not established.

<a id="s-a34679b5e2ad30eb"></a>

## validateKnowledgeIndex

[electron/domains/knowledge/knowledge-store.cjs:39](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L39>) · FunctionDeclaration · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

Validates file assignments and parsed source declarations without retrieving market data. Yahoo ticker fields can be configured in the applied card.

Purpose evidence: jsdoc.

Exported as: validateKnowledgeIndex ([electron/domains/knowledge/knowledge-store.cjs:1](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L1>)).

Lexical owner: [electron/domains/knowledge/knowledge-store.cjs](<knowledge-store.cjs.md#s-161d775acbcf7375>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| rootPath | any | compiler-inferred | required |
| id | any | compiler-inferred | required |
| draft | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [parseKnowledgeIndex](<../indexing/knowledge-index.cjs.md#s-d6105072a8fa3f5f>) — [electron/domains/knowledge/knowledge-store.cjs:40](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L40>)

**Called by (statically resolved):**

- [registerWorldViewIpc."knowledge-validate"](<../../core/ipc/worldview-ipc.cjs.md#s-b73e4e433c888784>) — [electron/core/ipc/worldview-ipc.cjs:228](<../../../../../../../electron/core/ipc/worldview-ipc.cjs#L228>)
- [saveKnowledgeIndex.writeIndex](<knowledge-store.cjs.md#s-b342ffff622fda36>) — [electron/domains/knowledge/knowledge-store.cjs:87](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L87>)
- [&lt;anonymous@156:76&gt;.&lt;anonymous@157:22&gt;](<knowledge-store.test.cjs.md#s-9421e865c0095163>) — [electron/domains/knowledge/knowledge-store.test.cjs:197](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L197>)
- [&lt;anonymous@180:84&gt;.&lt;anonymous@181:17&gt;](<../../image-parser.test.cjs.md#s-04ceff0e6632aa1b>) — [electron/image-parser.test.cjs:320](<../../../../../../../electron/image-parser.test.cjs#L320>)
- [&lt;anonymous@396:74&gt;.&lt;anonymous@397:17&gt;](<../../image-parser.test.cjs.md#s-02029e5ba551c17f>) — [electron/image-parser.test.cjs:418](<../../../../../../../electron/image-parser.test.cjs#L418>)

Unresolved / external call sites: 4.

- readWorldViewChip — signature-only-candidate; [electron/domains/knowledge/knowledge-store.cjs:41](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L41>)
- Map — external-or-dynamic-dispatch; [electron/domains/knowledge/knowledge-store.cjs:42](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L42>)
- chip.sources.map — external-or-dynamic-dispatch; [electron/domains/knowledge/knowledge-store.cjs:43](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L43>)
- component.sourceIds.forEach — external-or-dynamic-dispatch; [electron/domains/knowledge/knowledge-store.cjs:47](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L47>)

**Related tests / acceptance harnesses:**

- [electron/domains/knowledge/knowledge-store.test.cjs:197](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L197>) — static-call-site; coverage not established.
- [electron/image-parser.test.cjs:320](<../../../../../../../electron/image-parser.test.cjs#L320>) — static-call-site; coverage not established.
- [electron/image-parser.test.cjs:418](<../../../../../../../electron/image-parser.test.cjs#L418>) — static-call-site; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:18](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:1384](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L1384>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:15](<../../../../../../../electron/backend-identity.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:361](<../../../../../../../electron/backend-identity.test.cjs#L361>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:16](<../../../../../../../electron/daily-price.test.cjs#L16>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:12](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L12>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:801](<../../../../../../../electron/engine-packages.test.cjs#L801>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:869](<../../../../../../../electron/engine-packages.test.cjs#L869>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:17](<../../../../../../../electron/excel-service.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:23](<../../../../../../../electron/financial-service.test.cjs#L23>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:25](<../../../../../../../electron/image-parser.test.cjs#L25>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:455](<../../../../../../../electron/image-parser.test.cjs#L455>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:212](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L212>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:44](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L44>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:12](<../../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L12>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:236](<../../../../../../../tests/integration/architecture-contract.test.cjs#L236>) — file-import-only; coverage not established.

<a id="s-fbc572146eb68745"></a>

## validateKnowledgeIndex.&lt;anonymous@43:22&gt;

[electron/domains/knowledge/knowledge-store.cjs:43](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L43>) · ArrowFunction · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [validateKnowledgeIndex](<knowledge-store.cjs.md#s-a34679b5e2ad30eb>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| source | any | compiler-inferred | required |

Returns: {} (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:18](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:1384](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L1384>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:15](<../../../../../../../electron/backend-identity.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:361](<../../../../../../../electron/backend-identity.test.cjs#L361>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:16](<../../../../../../../electron/daily-price.test.cjs#L16>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:12](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L12>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:801](<../../../../../../../electron/engine-packages.test.cjs#L801>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:869](<../../../../../../../electron/engine-packages.test.cjs#L869>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:17](<../../../../../../../electron/excel-service.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:23](<../../../../../../../electron/financial-service.test.cjs#L23>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:25](<../../../../../../../electron/image-parser.test.cjs#L25>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:455](<../../../../../../../electron/image-parser.test.cjs#L455>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:212](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L212>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:44](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L44>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:12](<../../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L12>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:236](<../../../../../../../tests/integration/architecture-contract.test.cjs#L236>) — file-import-only; coverage not established.

<a id="s-813b6fb999314028"></a>

## validateKnowledgeIndex.&lt;anonymous@47:35&gt;

[electron/domains/knowledge/knowledge-store.cjs:47](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L47>) · ArrowFunction · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [validateKnowledgeIndex](<knowledge-store.cjs.md#s-a34679b5e2ad30eb>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| sourceId | any | compiler-inferred | required |
| index | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 6.

- assigned.get — external-or-dynamic-dispatch; [electron/domains/knowledge/knowledge-store.cjs:48](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L48>)
- parsed.errors.push — external-or-dynamic-dispatch; [electron/domains/knowledge/knowledge-store.cjs:50](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L50>)
- parsed.errors.push — external-or-dynamic-dispatch; [electron/domains/knowledge/knowledge-store.cjs:55](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L55>)
- &#91;".png", ".jpg", ".jpeg"&#93;.includes — external-or-dynamic-dispatch; [electron/domains/knowledge/knowledge-store.cjs:61](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L61>)
- source.extension.toLowerCase — external-or-dynamic-dispatch; [electron/domains/knowledge/knowledge-store.cjs:61](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L61>)
- parsed.errors.push — external-or-dynamic-dispatch; [electron/domains/knowledge/knowledge-store.cjs:63](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L63>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:18](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:1384](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L1384>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:15](<../../../../../../../electron/backend-identity.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:361](<../../../../../../../electron/backend-identity.test.cjs#L361>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:16](<../../../../../../../electron/daily-price.test.cjs#L16>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:12](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L12>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:801](<../../../../../../../electron/engine-packages.test.cjs#L801>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:869](<../../../../../../../electron/engine-packages.test.cjs#L869>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:17](<../../../../../../../electron/excel-service.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:23](<../../../../../../../electron/financial-service.test.cjs#L23>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:25](<../../../../../../../electron/image-parser.test.cjs#L25>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:455](<../../../../../../../electron/image-parser.test.cjs#L455>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:212](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L212>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:44](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L44>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:12](<../../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L12>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:236](<../../../../../../../tests/integration/architecture-contract.test.cjs#L236>) — file-import-only; coverage not established.

<a id="s-23c92923d2d74292"></a>

## saveKnowledgeIndex

[electron/domains/knowledge/knowledge-store.cjs:73](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L73>) · FunctionDeclaration · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

Saves draft or applies a fully valid index atomically under the same queue as entity-source mutations. Conflicts reject without writes.

Purpose evidence: jsdoc.

Exported as: saveKnowledgeIndex ([electron/domains/knowledge/knowledge-store.cjs:1](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L1>)).

Lexical owner: [electron/domains/knowledge/knowledge-store.cjs](<knowledge-store.cjs.md#s-161d775acbcf7375>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| rootPath | any | compiler-inferred | required |
| id | any | compiler-inferred | required |
| draft | any | compiler-inferred | required |
| revision | any | compiler-inferred | required |
| apply | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [fixture](<../../ai/agents/entity-agents.test.cjs.md#s-9ad48d6b7854c1ed>) — [electron/ai/agents/entity-agents.test.cjs:99](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L99>)
- [&lt;anonymous@1366:119&gt;](<../../ai/agents/entity-agents.test.cjs.md#s-58653e683a59839a>) — [electron/ai/agents/entity-agents.test.cjs:1386](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L1386>)
- [fixture](<../../backend-identity.test.cjs.md#s-2a2eeb9f70975c0c>) — [electron/backend-identity.test.cjs:243](<../../../../../../../electron/backend-identity.test.cjs#L243>)
- [&lt;anonymous@453:103&gt;.&lt;anonymous@454:11&gt;](<../../backend-identity.test.cjs.md#s-90ca171901a43834>) — [electron/backend-identity.test.cjs:457](<../../../../../../../electron/backend-identity.test.cjs#L457>)
- [&lt;anonymous@616:111&gt;.&lt;anonymous@617:11&gt;](<../../backend-identity.test.cjs.md#s-04a3ff3542bf8529>) — [electron/backend-identity.test.cjs:628](<../../../../../../../electron/backend-identity.test.cjs#L628>)
- [registerWorldViewIpc."knowledge-draft"](<../../core/ipc/worldview-ipc.cjs.md#s-9928e353d722b5d4>) — [electron/core/ipc/worldview-ipc.cjs:219](<../../../../../../../electron/core/ipc/worldview-ipc.cjs#L219>)
- [registerWorldViewIpc."knowledge-apply"](<../../core/ipc/worldview-ipc.cjs.md#s-1994c6971e851ac7>) — [electron/core/ipc/worldview-ipc.cjs:231](<../../../../../../../electron/core/ipc/worldview-ipc.cjs#L231>)
- [&lt;anonymous@203:71&gt;.&lt;anonymous@204:22&gt;](<../../daily-price.test.cjs.md#s-6ee60d633344ad90>) — [electron/daily-price.test.cjs:205](<../../../../../../../electron/daily-price.test.cjs#L205>)
- [&lt;anonymous@265:68&gt;.&lt;anonymous@266:22&gt;](<../../daily-price.test.cjs.md#s-4ed15f29548b98c0>) — [electron/daily-price.test.cjs:274](<../../../../../../../electron/daily-price.test.cjs#L274>)
- [&lt;anonymous@265:68&gt;.&lt;anonymous@266:22&gt;](<../../daily-price.test.cjs.md#s-4ed15f29548b98c0>) — [electron/daily-price.test.cjs:321](<../../../../../../../electron/daily-price.test.cjs#L321>)
- [&lt;anonymous@265:68&gt;.&lt;anonymous@266:22&gt;.removedDuringRequest](<../../daily-price.test.cjs.md#s-022ab36c71a36fd5>) — [electron/daily-price.test.cjs:335](<../../../../../../../electron/daily-price.test.cjs#L335>)
- [&lt;anonymous@98:86&gt;.&lt;anonymous@99:22&gt;](<knowledge-store.test.cjs.md#s-bf2d9cd52533bc64>) — [electron/domains/knowledge/knowledge-store.test.cjs:115](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L115>)
- [&lt;anonymous@98:86&gt;.&lt;anonymous@99:22&gt;](<knowledge-store.test.cjs.md#s-bf2d9cd52533bc64>) — [electron/domains/knowledge/knowledge-store.test.cjs:124](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L124>)
- [&lt;anonymous@98:86&gt;.&lt;anonymous@99:22&gt;](<knowledge-store.test.cjs.md#s-bf2d9cd52533bc64>) — [electron/domains/knowledge/knowledge-store.test.cjs:139](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L139>)
- [&lt;anonymous@156:76&gt;.&lt;anonymous@157:22&gt;](<knowledge-store.test.cjs.md#s-9421e865c0095163>) — [electron/domains/knowledge/knowledge-store.test.cjs:158](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L158>)
- [&lt;anonymous@156:76&gt;.&lt;anonymous@157:22&gt;](<knowledge-store.test.cjs.md#s-9421e865c0095163>) — [electron/domains/knowledge/knowledge-store.test.cjs:174](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L174>)
- [&lt;anonymous@156:76&gt;.&lt;anonymous@157:22&gt;](<knowledge-store.test.cjs.md#s-9421e865c0095163>) — [electron/domains/knowledge/knowledge-store.test.cjs:186](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L186>)
- [&lt;anonymous@156:76&gt;.&lt;anonymous@157:22&gt;](<knowledge-store.test.cjs.md#s-9421e865c0095163>) — [electron/domains/knowledge/knowledge-store.test.cjs:191](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L191>)
- [&lt;anonymous@205:99&gt;.&lt;anonymous@206:22&gt;](<knowledge-store.test.cjs.md#s-2462cd3fd9106de3>) — [electron/domains/knowledge/knowledge-store.test.cjs:207](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L207>)
- [&lt;anonymous@267:91&gt;.&lt;anonymous@268:22&gt;](<knowledge-store.test.cjs.md#s-a8cffca973c1888b>) — [electron/domains/knowledge/knowledge-store.test.cjs:270](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L270>)
- [&lt;anonymous@267:91&gt;.&lt;anonymous@268:22&gt;](<knowledge-store.test.cjs.md#s-a8cffca973c1888b>) — [electron/domains/knowledge/knowledge-store.test.cjs:271](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L271>)
- [&lt;anonymous@267:91&gt;.&lt;anonymous@268:22&gt;](<knowledge-store.test.cjs.md#s-a8cffca973c1888b>) — [electron/domains/knowledge/knowledge-store.test.cjs:289](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L289>)
- [&lt;anonymous@796:89&gt;](<../../engine-packages.test.cjs.md#s-d8ce262c4b7b63c7>) — [electron/engine-packages.test.cjs:809](<../../../../../../../electron/engine-packages.test.cjs#L809>)
- [&lt;anonymous@864:112&gt;](<../../engine-packages.test.cjs.md#s-b50f9582b28483cb>) — [electron/engine-packages.test.cjs:877](<../../../../../../../electron/engine-packages.test.cjs#L877>)
- [withUniverse](<../../excel-service.test.cjs.md#s-6b5e67b62cf4c0be>) — [electron/excel-service.test.cjs:40](<../../../../../../../electron/excel-service.test.cjs#L40>)
- [&lt;anonymous@164:95&gt;.&lt;anonymous@165:16&gt;](<../../financial-service.test.cjs.md#s-9f14ebe7f6ca5195>) — [electron/financial-service.test.cjs:174](<../../../../../../../electron/financial-service.test.cjs#L174>)
- [&lt;anonymous@164:95&gt;.&lt;anonymous@165:16&gt;.&lt;anonymous@198:30&gt;](<../../financial-service.test.cjs.md#s-ab684a8a69ff8a78>) — [electron/financial-service.test.cjs:200](<../../../../../../../electron/financial-service.test.cjs#L200>)
- [fixture](<../../image-parser.test.cjs.md#s-440e32716d73e488>) — [electron/image-parser.test.cjs:157](<../../../../../../../electron/image-parser.test.cjs#L157>)
- [&lt;anonymous@205:82&gt;.&lt;anonymous@206:12&gt;](<../../yahoo-engine-contract.test.cjs.md#s-12071c09bac274ad>) — [electron/yahoo-engine-contract.test.cjs:221](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L221>)
- [&lt;anonymous@205:82&gt;.&lt;anonymous@206:12&gt;.&lt;anonymous@247:30&gt;](<../../yahoo-engine-contract.test.cjs.md#s-519b3330d462084f>) — [electron/yahoo-engine-contract.test.cjs:248](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L248>)
- [main](<../../../scripts/acceptance/electron-backend-reset-smoke.cjs.md#s-648eff2573c5a425>) — [scripts/acceptance/electron-backend-reset-smoke.cjs:44](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L44>)
- [main](<../../../scripts/acceptance/yahoo-package-lifecycle.cjs.md#s-a519dde3e44c97fd>) — [scripts/acceptance/yahoo-package-lifecycle.cjs:49](<../../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L49>)

Unresolved / external call sites: 3.

- Buffer.byteLength — external-or-dynamic-dispatch; [electron/domains/knowledge/knowledge-store.cjs:76](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L76>)
- Error — external-or-dynamic-dispatch; [electron/domains/knowledge/knowledge-store.cjs:78](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L78>)
- withWorldViewMutation — signature-only-candidate; [electron/domains/knowledge/knowledge-store.cjs:79](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L79>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:99](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L99>) — static-call-site; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:1386](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L1386>) — static-call-site; coverage not established.
- [electron/backend-identity.test.cjs:243](<../../../../../../../electron/backend-identity.test.cjs#L243>) — static-call-site; coverage not established.
- [electron/backend-identity.test.cjs:457](<../../../../../../../electron/backend-identity.test.cjs#L457>) — static-call-site; coverage not established.
- [electron/backend-identity.test.cjs:628](<../../../../../../../electron/backend-identity.test.cjs#L628>) — static-call-site; coverage not established.
- [electron/daily-price.test.cjs:205](<../../../../../../../electron/daily-price.test.cjs#L205>) — static-call-site; coverage not established.
- [electron/daily-price.test.cjs:274](<../../../../../../../electron/daily-price.test.cjs#L274>) — static-call-site; coverage not established.
- [electron/daily-price.test.cjs:321](<../../../../../../../electron/daily-price.test.cjs#L321>) — static-call-site; coverage not established.
- [electron/daily-price.test.cjs:335](<../../../../../../../electron/daily-price.test.cjs#L335>) — static-call-site; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:115](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L115>) — static-call-site; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:124](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L124>) — static-call-site; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:139](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L139>) — static-call-site; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:158](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L158>) — static-call-site; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:174](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L174>) — static-call-site; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:186](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L186>) — static-call-site; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:191](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L191>) — static-call-site; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:207](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L207>) — static-call-site; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:270](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L270>) — static-call-site; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:271](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L271>) — static-call-site; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:289](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L289>) — static-call-site; coverage not established.
- [electron/engine-packages.test.cjs:809](<../../../../../../../electron/engine-packages.test.cjs#L809>) — static-call-site; coverage not established.
- [electron/engine-packages.test.cjs:877](<../../../../../../../electron/engine-packages.test.cjs#L877>) — static-call-site; coverage not established.
- [electron/excel-service.test.cjs:40](<../../../../../../../electron/excel-service.test.cjs#L40>) — static-call-site; coverage not established.
- [electron/financial-service.test.cjs:174](<../../../../../../../electron/financial-service.test.cjs#L174>) — static-call-site; coverage not established.
- [electron/financial-service.test.cjs:200](<../../../../../../../electron/financial-service.test.cjs#L200>) — static-call-site; coverage not established.
- [electron/image-parser.test.cjs:157](<../../../../../../../electron/image-parser.test.cjs#L157>) — static-call-site; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:221](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L221>) — static-call-site; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:248](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L248>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:44](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L44>) — static-call-site; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:49](<../../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L49>) — static-call-site; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:18](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:1384](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L1384>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:15](<../../../../../../../electron/backend-identity.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:361](<../../../../../../../electron/backend-identity.test.cjs#L361>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:16](<../../../../../../../electron/daily-price.test.cjs#L16>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:12](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L12>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:801](<../../../../../../../electron/engine-packages.test.cjs#L801>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:869](<../../../../../../../electron/engine-packages.test.cjs#L869>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:17](<../../../../../../../electron/excel-service.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:23](<../../../../../../../electron/financial-service.test.cjs#L23>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:25](<../../../../../../../electron/image-parser.test.cjs#L25>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:455](<../../../../../../../electron/image-parser.test.cjs#L455>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:212](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L212>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:44](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L44>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:12](<../../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L12>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:236](<../../../../../../../tests/integration/architecture-contract.test.cjs#L236>) — file-import-only; coverage not established.

<a id="s-b342ffff622fda36"></a>

## saveKnowledgeIndex.writeIndex

[electron/domains/knowledge/knowledge-store.cjs:79](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L79>) · FunctionExpression · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [saveKnowledgeIndex](<knowledge-store.cjs.md#s-23c92923d2d74292>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [readRecord](<knowledge-source-access.cjs.md#s-9e369167fc59d0c0>) — [electron/domains/knowledge/knowledge-store.cjs:81](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L81>)
- [validateKnowledgeIndex](<knowledge-store.cjs.md#s-a34679b5e2ad30eb>) — [electron/domains/knowledge/knowledge-store.cjs:87](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L87>)
- [publicState](<knowledge-store.cjs.md#s-11f72856c775c5cf>) — [electron/domains/knowledge/knowledge-store.cjs:89](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L89>)
- [writeTextAtomic](<../../core/persistence/json-store.cjs.md#s-eaf1fb4e46036574>) — [electron/domains/knowledge/knowledge-store.cjs:105](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L105>)
- [publicState](<knowledge-store.cjs.md#s-11f72856c775c5cf>) — [electron/domains/knowledge/knowledge-store.cjs:106](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L106>)
- [readRecord](<knowledge-source-access.cjs.md#s-9e369167fc59d0c0>) — [electron/domains/knowledge/knowledge-store.cjs:106](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L106>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- readWorldViewChip — signature-only-candidate; [electron/domains/knowledge/knowledge-store.cjs:80](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L80>)
- Error — external-or-dynamic-dispatch; [electron/domains/knowledge/knowledge-store.cjs:83](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L83>)
- yaml.dump — external-or-dynamic-dispatch; [electron/domains/knowledge/knowledge-store.cjs:100](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L100>)
- Buffer.byteLength — external-or-dynamic-dispatch; [electron/domains/knowledge/knowledge-store.cjs:101](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L101>)
- Error — external-or-dynamic-dispatch; [electron/domains/knowledge/knowledge-store.cjs:102](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L102>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:18](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:1384](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L1384>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:15](<../../../../../../../electron/backend-identity.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:361](<../../../../../../../electron/backend-identity.test.cjs#L361>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:16](<../../../../../../../electron/daily-price.test.cjs#L16>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:12](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L12>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:801](<../../../../../../../electron/engine-packages.test.cjs#L801>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:869](<../../../../../../../electron/engine-packages.test.cjs#L869>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:17](<../../../../../../../electron/excel-service.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:23](<../../../../../../../electron/financial-service.test.cjs#L23>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:25](<../../../../../../../electron/image-parser.test.cjs#L25>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:455](<../../../../../../../electron/image-parser.test.cjs#L455>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:212](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L212>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:44](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L44>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:12](<../../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L12>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:236](<../../../../../../../tests/integration/architecture-contract.test.cjs#L236>) — file-import-only; coverage not established.

<a id="s-258b76b0d80b1e40"></a>

## resolveKnowledgeCarousel

[electron/domains/knowledge/knowledge-store.cjs:111](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L111>) · FunctionDeclaration · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

Resolves one applied named carousel using stable entity/group IDs. Never processes its sources.

Purpose evidence: jsdoc.

Exported as: resolveKnowledgeCarousel ([electron/domains/knowledge/knowledge-store.cjs:1](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L1>)).

Lexical owner: [electron/domains/knowledge/knowledge-store.cjs](<knowledge-store.cjs.md#s-161d775acbcf7375>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| rootPath | any | compiler-inferred | required |
| id | any | compiler-inferred | required |
| carouselId | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [readRecord](<knowledge-source-access.cjs.md#s-9e369167fc59d0c0>) — [electron/domains/knowledge/knowledge-store.cjs:113](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L113>)

**Called by (statically resolved):**

- [createImageParserService.authorize](<../../image-parser-service.cjs.md#s-1c83efa203bf22bd>) — [electron/image-parser-service.cjs:176](<../../../../../../../electron/image-parser-service.cjs#L176>)
- [createImageParserService.start](<../../image-parser-service.cjs.md#s-fde998c903c7bb79>) — [electron/image-parser-service.cjs:307](<../../../../../../../electron/image-parser-service.cjs#L307>)
- [createImageParserService.status](<../../image-parser-service.cjs.md#s-86a37f304e9e382a>) — [electron/image-parser-service.cjs:391](<../../../../../../../electron/image-parser-service.cjs#L391>)

Unresolved / external call sites: 4.

- readWorldViewChip — signature-only-candidate; [electron/domains/knowledge/knowledge-store.cjs:112](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L112>)
- record.menus .flatMap((menu) =&gt; menu.carousels ?? &#91;&#93;) .find — external-or-dynamic-dispatch; [electron/domains/knowledge/knowledge-store.cjs:114](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L114>)
- record.menus .flatMap — external-or-dynamic-dispatch; [electron/domains/knowledge/knowledge-store.cjs:114](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L114>)
- Error — external-or-dynamic-dispatch; [electron/domains/knowledge/knowledge-store.cjs:118](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L118>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:18](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:1384](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L1384>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:15](<../../../../../../../electron/backend-identity.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:361](<../../../../../../../electron/backend-identity.test.cjs#L361>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:16](<../../../../../../../electron/daily-price.test.cjs#L16>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:12](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L12>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:801](<../../../../../../../electron/engine-packages.test.cjs#L801>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:869](<../../../../../../../electron/engine-packages.test.cjs#L869>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:17](<../../../../../../../electron/excel-service.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:23](<../../../../../../../electron/financial-service.test.cjs#L23>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:25](<../../../../../../../electron/image-parser.test.cjs#L25>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:455](<../../../../../../../electron/image-parser.test.cjs#L455>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:212](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L212>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:44](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L44>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:12](<../../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L12>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:236](<../../../../../../../tests/integration/architecture-contract.test.cjs#L236>) — file-import-only; coverage not established.

<a id="s-17aaa7ec7432d76d"></a>

## resolveKnowledgeCarousel.&lt;anonymous@115:14&gt;

[electron/domains/knowledge/knowledge-store.cjs:115](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L115>) · ArrowFunction · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [resolveKnowledgeCarousel](<knowledge-store.cjs.md#s-258b76b0d80b1e40>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| menu | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:18](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:1384](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L1384>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:15](<../../../../../../../electron/backend-identity.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:361](<../../../../../../../electron/backend-identity.test.cjs#L361>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:16](<../../../../../../../electron/daily-price.test.cjs#L16>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:12](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L12>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:801](<../../../../../../../electron/engine-packages.test.cjs#L801>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:869](<../../../../../../../electron/engine-packages.test.cjs#L869>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:17](<../../../../../../../electron/excel-service.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:23](<../../../../../../../electron/financial-service.test.cjs#L23>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:25](<../../../../../../../electron/image-parser.test.cjs#L25>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:455](<../../../../../../../electron/image-parser.test.cjs#L455>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:212](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L212>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:44](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L44>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:12](<../../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L12>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:236](<../../../../../../../tests/integration/architecture-contract.test.cjs#L236>) — file-import-only; coverage not established.

<a id="s-9ef7afbb1492aa63"></a>

## resolveKnowledgeCarousel.&lt;anonymous@116:11&gt;

[electron/domains/knowledge/knowledge-store.cjs:116](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L116>) · ArrowFunction · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [resolveKnowledgeCarousel](<knowledge-store.cjs.md#s-258b76b0d80b1e40>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| item | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:18](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:1384](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L1384>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:15](<../../../../../../../electron/backend-identity.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:361](<../../../../../../../electron/backend-identity.test.cjs#L361>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:16](<../../../../../../../electron/daily-price.test.cjs#L16>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:12](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L12>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:801](<../../../../../../../electron/engine-packages.test.cjs#L801>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:869](<../../../../../../../electron/engine-packages.test.cjs#L869>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:17](<../../../../../../../electron/excel-service.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:23](<../../../../../../../electron/financial-service.test.cjs#L23>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:25](<../../../../../../../electron/image-parser.test.cjs#L25>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:455](<../../../../../../../electron/image-parser.test.cjs#L455>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:212](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L212>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:44](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L44>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:12](<../../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L12>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:236](<../../../../../../../tests/integration/architecture-contract.test.cjs#L236>) — file-import-only; coverage not established.

<a id="s-5b3b21e330d3d260"></a>

## previewKnowledgeSource

[electron/domains/knowledge/knowledge-store.cjs:123](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L123>) · FunctionDeclaration · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

Reads a referenced original through guarded viewers. XLSX computation runs outside the entity write queue and reauthorizes before returning.

Purpose evidence: jsdoc.

Exported as: previewKnowledgeSource ([electron/domains/knowledge/knowledge-store.cjs:1](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L1>)).

Lexical owner: [electron/domains/knowledge/knowledge-store.cjs](<knowledge-store.cjs.md#s-161d775acbcf7375>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| rootPath | any | compiler-inferred | required |
| id | any | compiler-inferred | required |
| sourceId | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [resolveKnowledgeSource](<knowledge-source-access.cjs.md#s-533d0fd9803550f8>) — [electron/domains/knowledge/knowledge-store.cjs:124](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L124>)

**Called by (statically resolved):**

- [registerWorldViewIpc."knowledge-preview"](<../../core/ipc/worldview-ipc.cjs.md#s-ebb15580a5ceaea7>) — [electron/core/ipc/worldview-ipc.cjs:240](<../../../../../../../electron/core/ipc/worldview-ipc.cjs#L240>)
- [&lt;anonymous@205:99&gt;.&lt;anonymous@206:22&gt;](<knowledge-store.test.cjs.md#s-2462cd3fd9106de3>) — [electron/domains/knowledge/knowledge-store.test.cjs:225](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L225>)
- [&lt;anonymous@205:99&gt;.&lt;anonymous@206:22&gt;](<knowledge-store.test.cjs.md#s-2462cd3fd9106de3>) — [electron/domains/knowledge/knowledge-store.test.cjs:242](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L242>)
- [&lt;anonymous@205:99&gt;.&lt;anonymous@206:22&gt;](<knowledge-store.test.cjs.md#s-2462cd3fd9106de3>) — [electron/domains/knowledge/knowledge-store.test.cjs:246](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L246>)
- [&lt;anonymous@205:99&gt;.&lt;anonymous@206:22&gt;](<knowledge-store.test.cjs.md#s-2462cd3fd9106de3>) — [electron/domains/knowledge/knowledge-store.test.cjs:251](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L251>)
- [&lt;anonymous@205:99&gt;.&lt;anonymous@206:22&gt;](<knowledge-store.test.cjs.md#s-2462cd3fd9106de3>) — [electron/domains/knowledge/knowledge-store.test.cjs:260](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L260>)
- [&lt;anonymous@55:89&gt;.&lt;anonymous@56:22&gt;](<../../excel-service.test.cjs.md#s-1ce2ad7c1e58b379>) — [electron/excel-service.test.cjs:75](<../../../../../../../electron/excel-service.test.cjs#L75>)

Unresolved / external call sites: 5.

- path.extname(source.sourceRef).toLowerCase — external-or-dynamic-dispatch; [electron/domains/knowledge/knowledge-store.cjs:125](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L125>)
- path.extname — external-or-dynamic-dispatch; [electron/domains/knowledge/knowledge-store.cjs:125](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L125>)
- require("../../excel-service.cjs").excelService.request — signature-only-candidate; [electron/domains/knowledge/knowledge-store.cjs:126](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L126>)
- require — module-loader; [electron/domains/knowledge/knowledge-store.cjs:126](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L126>)
- withWorldViewMutation — signature-only-candidate; [electron/domains/knowledge/knowledge-store.cjs:131](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L131>)

**Related tests / acceptance harnesses:**

- [electron/domains/knowledge/knowledge-store.test.cjs:225](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L225>) — static-call-site; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:242](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L242>) — static-call-site; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:246](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L246>) — static-call-site; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:251](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L251>) — static-call-site; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:260](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L260>) — static-call-site; coverage not established.
- [electron/excel-service.test.cjs:75](<../../../../../../../electron/excel-service.test.cjs#L75>) — static-call-site; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:18](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:1384](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L1384>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:15](<../../../../../../../electron/backend-identity.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:361](<../../../../../../../electron/backend-identity.test.cjs#L361>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:16](<../../../../../../../electron/daily-price.test.cjs#L16>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:12](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L12>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:801](<../../../../../../../electron/engine-packages.test.cjs#L801>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:869](<../../../../../../../electron/engine-packages.test.cjs#L869>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:17](<../../../../../../../electron/excel-service.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:23](<../../../../../../../electron/financial-service.test.cjs#L23>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:25](<../../../../../../../electron/image-parser.test.cjs#L25>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:455](<../../../../../../../electron/image-parser.test.cjs#L455>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:212](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L212>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:44](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L44>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:12](<../../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L12>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:236](<../../../../../../../tests/integration/architecture-contract.test.cjs#L236>) — file-import-only; coverage not established.

<a id="s-99313261c10e747c"></a>

## previewKnowledgeSource.previewSource

[electron/domains/knowledge/knowledge-store.cjs:131](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L131>) · FunctionExpression · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [previewKnowledgeSource](<knowledge-store.cjs.md#s-5b3b21e330d3d260>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [resolveKnowledgeSource](<knowledge-source-access.cjs.md#s-533d0fd9803550f8>) — [electron/domains/knowledge/knowledge-store.cjs:132](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L132>)
- [readVaultPreview](<../universe/vault-service.cjs.md#s-729160f41f814b5f>) — [electron/domains/knowledge/knowledge-store.cjs:133](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L133>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:18](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:1384](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L1384>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:15](<../../../../../../../electron/backend-identity.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:361](<../../../../../../../electron/backend-identity.test.cjs#L361>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:16](<../../../../../../../electron/daily-price.test.cjs#L16>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:12](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L12>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:801](<../../../../../../../electron/engine-packages.test.cjs#L801>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:869](<../../../../../../../electron/engine-packages.test.cjs#L869>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:17](<../../../../../../../electron/excel-service.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:23](<../../../../../../../electron/financial-service.test.cjs#L23>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:25](<../../../../../../../electron/image-parser.test.cjs#L25>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:455](<../../../../../../../electron/image-parser.test.cjs#L455>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:212](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L212>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:44](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L44>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:12](<../../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L12>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:236](<../../../../../../../tests/integration/architecture-contract.test.cjs#L236>) — file-import-only; coverage not established.

<a id="s-34066ab7f012366d"></a>

## saveKnowledgeNote

[electron/domains/knowledge/knowledge-store.cjs:138](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L138>) · FunctionDeclaration · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

Saves bounded human notes in the existing entity companion using revision checks and current source authorization. No source file is written.

Purpose evidence: jsdoc.

Exported as: saveKnowledgeNote ([electron/domains/knowledge/knowledge-store.cjs:1](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L1>)).

Lexical owner: [electron/domains/knowledge/knowledge-store.cjs](<knowledge-store.cjs.md#s-161d775acbcf7375>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| rootPath | any | compiler-inferred | required |
| id | any | compiler-inferred | required |
| sourceId | any | compiler-inferred | required |
| text | any | compiler-inferred | required |
| revision | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@357:94&gt;.&lt;anonymous@358:11&gt;](<../../backend-identity.test.cjs.md#s-7efbda7815859ecb>) — [electron/backend-identity.test.cjs:365](<../../../../../../../electron/backend-identity.test.cjs#L365>)
- [registerWorldViewIpc."knowledge-note"](<../../core/ipc/worldview-ipc.cjs.md#s-291c001bba4e1430>) — [electron/core/ipc/worldview-ipc.cjs:163](<../../../../../../../electron/core/ipc/worldview-ipc.cjs#L163>)
- [&lt;anonymous@429:82&gt;.&lt;anonymous@452:17&gt;](<../../image-parser.test.cjs.md#s-0b451ba0258339da>) — [electron/image-parser.test.cjs:457](<../../../../../../../electron/image-parser.test.cjs#L457>)
- [&lt;anonymous@429:82&gt;.&lt;anonymous@452:17&gt;](<../../image-parser.test.cjs.md#s-0b451ba0258339da>) — [electron/image-parser.test.cjs:468](<../../../../../../../electron/image-parser.test.cjs#L468>)
- [&lt;anonymous@429:82&gt;.&lt;anonymous@452:17&gt;](<../../image-parser.test.cjs.md#s-0b451ba0258339da>) — [electron/image-parser.test.cjs:478](<../../../../../../../electron/image-parser.test.cjs#L478>)

Unresolved / external call sites: 2.

- Error — external-or-dynamic-dispatch; [electron/domains/knowledge/knowledge-store.cjs:140](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L140>)
- withWorldViewMutation — signature-only-candidate; [electron/domains/knowledge/knowledge-store.cjs:141](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L141>)

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:365](<../../../../../../../electron/backend-identity.test.cjs#L365>) — static-call-site; coverage not established.
- [electron/image-parser.test.cjs:457](<../../../../../../../electron/image-parser.test.cjs#L457>) — static-call-site; coverage not established.
- [electron/image-parser.test.cjs:468](<../../../../../../../electron/image-parser.test.cjs#L468>) — static-call-site; coverage not established.
- [electron/image-parser.test.cjs:478](<../../../../../../../electron/image-parser.test.cjs#L478>) — static-call-site; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:18](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:1384](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L1384>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:15](<../../../../../../../electron/backend-identity.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:361](<../../../../../../../electron/backend-identity.test.cjs#L361>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:16](<../../../../../../../electron/daily-price.test.cjs#L16>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:12](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L12>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:801](<../../../../../../../electron/engine-packages.test.cjs#L801>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:869](<../../../../../../../electron/engine-packages.test.cjs#L869>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:17](<../../../../../../../electron/excel-service.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:23](<../../../../../../../electron/financial-service.test.cjs#L23>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:25](<../../../../../../../electron/image-parser.test.cjs#L25>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:455](<../../../../../../../electron/image-parser.test.cjs#L455>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:212](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L212>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:44](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L44>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:12](<../../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L12>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:236](<../../../../../../../tests/integration/architecture-contract.test.cjs#L236>) — file-import-only; coverage not established.

<a id="s-1654fd018e79f10a"></a>

## saveKnowledgeNote.saveSourceNote

[electron/domains/knowledge/knowledge-store.cjs:141](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L141>) · FunctionExpression · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [saveKnowledgeNote](<knowledge-store.cjs.md#s-34066ab7f012366d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [resolveKnowledgeSource](<knowledge-source-access.cjs.md#s-533d0fd9803550f8>) — [electron/domains/knowledge/knowledge-store.cjs:142](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L142>)
- [readRecord](<knowledge-source-access.cjs.md#s-9e369167fc59d0c0>) — [electron/domains/knowledge/knowledge-store.cjs:143](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L143>)
- [writeTextAtomic](<../../core/persistence/json-store.cjs.md#s-eaf1fb4e46036574>) — [electron/domains/knowledge/knowledge-store.cjs:158](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L158>)
- [publicState](<knowledge-store.cjs.md#s-11f72856c775c5cf>) — [electron/domains/knowledge/knowledge-store.cjs:159](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L159>)
- [readRecord](<knowledge-source-access.cjs.md#s-9e369167fc59d0c0>) — [electron/domains/knowledge/knowledge-store.cjs:159](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L159>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 6.

- Error — external-or-dynamic-dispatch; [electron/domains/knowledge/knowledge-store.cjs:145](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L145>)
- Array.isArray — external-or-dynamic-dispatch; [electron/domains/knowledge/knowledge-store.cjs:148](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L148>)
- notes.filter — external-or-dynamic-dispatch; [electron/domains/knowledge/knowledge-store.cjs:152](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L152>)
- yaml.dump — external-or-dynamic-dispatch; [electron/domains/knowledge/knowledge-store.cjs:155](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L155>)
- Buffer.byteLength — external-or-dynamic-dispatch; [electron/domains/knowledge/knowledge-store.cjs:156](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L156>)
- Error — external-or-dynamic-dispatch; [electron/domains/knowledge/knowledge-store.cjs:157](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L157>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:18](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:1384](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L1384>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:15](<../../../../../../../electron/backend-identity.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:361](<../../../../../../../electron/backend-identity.test.cjs#L361>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:16](<../../../../../../../electron/daily-price.test.cjs#L16>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:12](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L12>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:801](<../../../../../../../electron/engine-packages.test.cjs#L801>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:869](<../../../../../../../electron/engine-packages.test.cjs#L869>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:17](<../../../../../../../electron/excel-service.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:23](<../../../../../../../electron/financial-service.test.cjs#L23>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:25](<../../../../../../../electron/image-parser.test.cjs#L25>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:455](<../../../../../../../electron/image-parser.test.cjs#L455>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:212](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L212>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:44](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L44>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:12](<../../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L12>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:236](<../../../../../../../tests/integration/architecture-contract.test.cjs#L236>) — file-import-only; coverage not established.

<a id="s-23f9a4ec3f6f2b88"></a>

## saveKnowledgeNote.saveSourceNote.&lt;anonymous@152:23&gt;

[electron/domains/knowledge/knowledge-store.cjs:152](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L152>) · ArrowFunction · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [saveKnowledgeNote.saveSourceNote](<knowledge-store.cjs.md#s-1654fd018e79f10a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| note | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:18](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:1384](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L1384>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:15](<../../../../../../../electron/backend-identity.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:361](<../../../../../../../electron/backend-identity.test.cjs#L361>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:16](<../../../../../../../electron/daily-price.test.cjs#L16>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:12](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L12>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:801](<../../../../../../../electron/engine-packages.test.cjs#L801>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:869](<../../../../../../../electron/engine-packages.test.cjs#L869>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:17](<../../../../../../../electron/excel-service.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:23](<../../../../../../../electron/financial-service.test.cjs#L23>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:25](<../../../../../../../electron/image-parser.test.cjs#L25>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:455](<../../../../../../../electron/image-parser.test.cjs#L455>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:212](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L212>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:44](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L44>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:12](<../../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L12>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:236](<../../../../../../../tests/integration/architecture-contract.test.cjs#L236>) — file-import-only; coverage not established.

<a id="s-7f44c4c9083f4688"></a>

## savePriceSymbol

[electron/domains/knowledge/knowledge-store.cjs:164](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L164>) · FunctionDeclaration · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

Saves or removes an entity's Yahoo ticker in its existing companion, preserving editor text and checking the expected revision. Writes metadata only.

Purpose evidence: jsdoc.

Exported as: savePriceSymbol ([electron/domains/knowledge/knowledge-store.cjs:1](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L1>)).

Lexical owner: [electron/domains/knowledge/knowledge-store.cjs](<knowledge-store.cjs.md#s-161d775acbcf7375>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| rootPath | any | compiler-inferred | required |
| id | any | compiler-inferred | required |
| input | any | compiler-inferred | required |
| revision | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [normalizeSymbol](<../indexing/ticker-syntax.cjs.md#s-fa1b2f32fc2cc10e>) — [electron/domains/knowledge/knowledge-store.cjs:165](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L165>)

**Called by (statically resolved):**

- [registerWorldViewIpc."price-symbol"](<../../core/ipc/worldview-ipc.cjs.md#s-ca32e5f63491434c>) — [electron/core/ipc/worldview-ipc.cjs:121](<../../../../../../../electron/core/ipc/worldview-ipc.cjs#L121>)
- [&lt;anonymous@203:71&gt;.&lt;anonymous@204:22&gt;](<../../daily-price.test.cjs.md#s-6ee60d633344ad90>) — [electron/daily-price.test.cjs:212](<../../../../../../../electron/daily-price.test.cjs#L212>)
- [&lt;anonymous@203:71&gt;.&lt;anonymous@204:22&gt;](<../../daily-price.test.cjs.md#s-6ee60d633344ad90>) — [electron/daily-price.test.cjs:226](<../../../../../../../electron/daily-price.test.cjs#L226>)
- [&lt;anonymous@203:71&gt;.&lt;anonymous@204:22&gt;](<../../daily-price.test.cjs.md#s-6ee60d633344ad90>) — [electron/daily-price.test.cjs:229](<../../../../../../../electron/daily-price.test.cjs#L229>)
- [&lt;anonymous@203:71&gt;.&lt;anonymous@204:22&gt;](<../../daily-price.test.cjs.md#s-6ee60d633344ad90>) — [electron/daily-price.test.cjs:230](<../../../../../../../electron/daily-price.test.cjs#L230>)
- [&lt;anonymous@265:68&gt;.&lt;anonymous@266:22&gt;](<../../daily-price.test.cjs.md#s-4ed15f29548b98c0>) — [electron/daily-price.test.cjs:311](<../../../../../../../electron/daily-price.test.cjs#L311>)

Unresolved / external call sites: 1.

- withWorldViewMutation — signature-only-candidate; [electron/domains/knowledge/knowledge-store.cjs:166](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L166>)

**Related tests / acceptance harnesses:**

- [electron/daily-price.test.cjs:212](<../../../../../../../electron/daily-price.test.cjs#L212>) — static-call-site; coverage not established.
- [electron/daily-price.test.cjs:226](<../../../../../../../electron/daily-price.test.cjs#L226>) — static-call-site; coverage not established.
- [electron/daily-price.test.cjs:229](<../../../../../../../electron/daily-price.test.cjs#L229>) — static-call-site; coverage not established.
- [electron/daily-price.test.cjs:230](<../../../../../../../electron/daily-price.test.cjs#L230>) — static-call-site; coverage not established.
- [electron/daily-price.test.cjs:311](<../../../../../../../electron/daily-price.test.cjs#L311>) — static-call-site; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:18](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:1384](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L1384>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:15](<../../../../../../../electron/backend-identity.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:361](<../../../../../../../electron/backend-identity.test.cjs#L361>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:16](<../../../../../../../electron/daily-price.test.cjs#L16>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:12](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L12>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:801](<../../../../../../../electron/engine-packages.test.cjs#L801>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:869](<../../../../../../../electron/engine-packages.test.cjs#L869>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:17](<../../../../../../../electron/excel-service.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:23](<../../../../../../../electron/financial-service.test.cjs#L23>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:25](<../../../../../../../electron/image-parser.test.cjs#L25>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:455](<../../../../../../../electron/image-parser.test.cjs#L455>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:212](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L212>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:44](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L44>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:12](<../../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L12>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:236](<../../../../../../../tests/integration/architecture-contract.test.cjs#L236>) — file-import-only; coverage not established.

<a id="s-f9823235072108c5"></a>

## savePriceSymbol.writePriceSymbol

[electron/domains/knowledge/knowledge-store.cjs:166](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L166>) · FunctionExpression · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [savePriceSymbol](<knowledge-store.cjs.md#s-7f44c4c9083f4688>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [readRecord](<knowledge-source-access.cjs.md#s-9e369167fc59d0c0>) — [electron/domains/knowledge/knowledge-store.cjs:168](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L168>)
- [writeTextAtomic](<../../core/persistence/json-store.cjs.md#s-eaf1fb4e46036574>) — [electron/domains/knowledge/knowledge-store.cjs:185](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L185>)
- [publicState](<knowledge-store.cjs.md#s-11f72856c775c5cf>) — [electron/domains/knowledge/knowledge-store.cjs:186](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L186>)
- [readRecord](<knowledge-source-access.cjs.md#s-9e369167fc59d0c0>) — [electron/domains/knowledge/knowledge-store.cjs:186](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L186>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- readWorldViewChip — signature-only-candidate; [electron/domains/knowledge/knowledge-store.cjs:167](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L167>)
- Error — external-or-dynamic-dispatch; [electron/domains/knowledge/knowledge-store.cjs:170](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L170>)
- yaml.dump — external-or-dynamic-dispatch; [electron/domains/knowledge/knowledge-store.cjs:182](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L182>)
- Buffer.byteLength — external-or-dynamic-dispatch; [electron/domains/knowledge/knowledge-store.cjs:183](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L183>)
- Error — external-or-dynamic-dispatch; [electron/domains/knowledge/knowledge-store.cjs:184](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L184>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:18](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:1384](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L1384>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:15](<../../../../../../../electron/backend-identity.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:361](<../../../../../../../electron/backend-identity.test.cjs#L361>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:16](<../../../../../../../electron/daily-price.test.cjs#L16>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:12](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L12>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:801](<../../../../../../../electron/engine-packages.test.cjs#L801>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:869](<../../../../../../../electron/engine-packages.test.cjs#L869>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:17](<../../../../../../../electron/excel-service.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:23](<../../../../../../../electron/financial-service.test.cjs#L23>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:25](<../../../../../../../electron/image-parser.test.cjs#L25>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:455](<../../../../../../../electron/image-parser.test.cjs#L455>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:212](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L212>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:44](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L44>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:12](<../../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L12>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:236](<../../../../../../../tests/integration/architecture-contract.test.cjs#L236>) — file-import-only; coverage not established.
