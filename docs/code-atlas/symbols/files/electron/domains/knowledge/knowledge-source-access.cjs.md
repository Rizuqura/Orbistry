# electron/domains/knowledge/knowledge-source-access.cjs: symbols

[Atlas](<../../../../../README.md>) / [Knowledge indexing and source access](<../../../../../modules/knowledge.md>) / [electron/domains/knowledge/knowledge-source-access.cjs:1](<../../../../../../../electron/domains/knowledge/knowledge-source-access.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/domains/knowledge/knowledge-source-access.cjs](<knowledge-source-access.cjs.md#s-6adcb9bb250cbec8>) (Module)
- [knowledgePath](<knowledge-source-access.cjs.md#s-a59b66a0a3d42c60>) (FunctionDeclaration)
- [readRecord](<knowledge-source-access.cjs.md#s-9e369167fc59d0c0>) (FunctionDeclaration)
- [resolveKnowledgeSource](<knowledge-source-access.cjs.md#s-533d0fd9803550f8>) (FunctionDeclaration)
- [resolveKnowledgeSource.&lt;anonymous@87:24&gt;](<knowledge-source-access.cjs.md#s-0328591661d8c451>) (ArrowFunction)
- [resolveKnowledgeSource.&lt;anonymous@87:24&gt;.&lt;anonymous@88:46&gt;](<knowledge-source-access.cjs.md#s-5bd175ceeb7f4140>) (ArrowFunction)
- [resolveKnowledgeSource.&lt;anonymous@94:36&gt;](<knowledge-source-access.cjs.md#s-da82000a0e4a9d8f>) (ArrowFunction)

<a id="s-6adcb9bb250cbec8"></a>

## electron/domains/knowledge/knowledge-source-access.cjs

[electron/domains/knowledge/knowledge-source-access.cjs:1](<../../../../../../../electron/domains/knowledge/knowledge-source-access.cjs#L1>) · Module · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 7.

- require — module-loader; [electron/domains/knowledge/knowledge-source-access.cjs:1](<../../../../../../../electron/domains/knowledge/knowledge-source-access.cjs#L1>)
- require — module-loader; [electron/domains/knowledge/knowledge-source-access.cjs:2](<../../../../../../../electron/domains/knowledge/knowledge-source-access.cjs#L2>)
- require — module-loader; [electron/domains/knowledge/knowledge-source-access.cjs:3](<../../../../../../../electron/domains/knowledge/knowledge-source-access.cjs#L3>)
- require — module-loader; [electron/domains/knowledge/knowledge-source-access.cjs:4](<../../../../../../../electron/domains/knowledge/knowledge-source-access.cjs#L4>)
- require — module-loader; [electron/domains/knowledge/knowledge-source-access.cjs:5](<../../../../../../../electron/domains/knowledge/knowledge-source-access.cjs#L5>)
- require — module-loader; [electron/domains/knowledge/knowledge-source-access.cjs:6](<../../../../../../../electron/domains/knowledge/knowledge-source-access.cjs#L6>)
- require — module-loader; [electron/domains/knowledge/knowledge-source-access.cjs:7](<../../../../../../../electron/domains/knowledge/knowledge-source-access.cjs#L7>)

**Related tests / acceptance harnesses:**

- [tests/integration/architecture-contract.test.cjs:238](<../../../../../../../tests/integration/architecture-contract.test.cjs#L238>) — file-import-only; coverage not established.

<a id="s-a59b66a0a3d42c60"></a>

## knowledgePath

[electron/domains/knowledge/knowledge-source-access.cjs:10](<../../../../../../../electron/domains/knowledge/knowledge-source-access.cjs#L10>) · FunctionDeclaration · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

Resolves an entity-specific companion document inside the existing protected metadata namespace.

Purpose evidence: jsdoc.

Lexical owner: [electron/domains/knowledge/knowledge-source-access.cjs](<knowledge-source-access.cjs.md#s-6adcb9bb250cbec8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| rootPath | any | compiler-inferred | required |
| id | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [rejectSymlink](<../../core/persistence/json-store.cjs.md#s-aaddc8aab5c0d073>) — [electron/domains/knowledge/knowledge-source-access.cjs:16](<../../../../../../../electron/domains/knowledge/knowledge-source-access.cjs#L16>)
- [rejectSymlink](<../../core/persistence/json-store.cjs.md#s-aaddc8aab5c0d073>) — [electron/domains/knowledge/knowledge-source-access.cjs:19](<../../../../../../../electron/domains/knowledge/knowledge-source-access.cjs#L19>)

**Called by (statically resolved):**

- [readRecord](<knowledge-source-access.cjs.md#s-9e369167fc59d0c0>) — [electron/domains/knowledge/knowledge-source-access.cjs:25](<../../../../../../../electron/domains/knowledge/knowledge-source-access.cjs#L25>)

Unresolved / external call sites: 5.

- /^&#91;a-zA-Z0-9_-&#93;{1,128}$/.test — external-or-dynamic-dispatch; [electron/domains/knowledge/knowledge-source-access.cjs:11](<../../../../../../../electron/domains/knowledge/knowledge-source-access.cjs#L11>)
- Error — external-or-dynamic-dispatch; [electron/domains/knowledge/knowledge-source-access.cjs:12](<../../../../../../../electron/domains/knowledge/knowledge-source-access.cjs#L12>)
- fs.realpath — external-or-dynamic-dispatch; [electron/domains/knowledge/knowledge-source-access.cjs:13](<../../../../../../../electron/domains/knowledge/knowledge-source-access.cjs#L13>)
- path.join — external-or-dynamic-dispatch; [electron/domains/knowledge/knowledge-source-access.cjs:15](<../../../../../../../electron/domains/knowledge/knowledge-source-access.cjs#L15>)
- path.join — external-or-dynamic-dispatch; [electron/domains/knowledge/knowledge-source-access.cjs:18](<../../../../../../../electron/domains/knowledge/knowledge-source-access.cjs#L18>)

**Related tests / acceptance harnesses:**

- [tests/integration/architecture-contract.test.cjs:238](<../../../../../../../tests/integration/architecture-contract.test.cjs#L238>) — file-import-only; coverage not established.

<a id="s-9e369167fc59d0c0"></a>

## readRecord

[electron/domains/knowledge/knowledge-source-access.cjs:24](<../../../../../../../electron/domains/knowledge/knowledge-source-access.cjs#L24>) · FunctionDeclaration · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

Reads a bounded manual-index companion with an optimistic version token; damaged records throw and are never overwritten.

Purpose evidence: jsdoc.

Exported as: readRecord ([electron/domains/knowledge/knowledge-source-access.cjs:1](<../../../../../../../electron/domains/knowledge/knowledge-source-access.cjs#L1>)).

Lexical owner: [electron/domains/knowledge/knowledge-source-access.cjs](<knowledge-source-access.cjs.md#s-6adcb9bb250cbec8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| rootPath | any | compiler-inferred | required |
| id | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [knowledgePath](<knowledge-source-access.cjs.md#s-a59b66a0a3d42c60>) — [electron/domains/knowledge/knowledge-source-access.cjs:25](<../../../../../../../electron/domains/knowledge/knowledge-source-access.cjs#L25>)
- [parseKnowledgeIndex](<../indexing/knowledge-index.cjs.md#s-e76591326346a1da>) — [electron/domains/knowledge/knowledge-source-access.cjs:63](<../../../../../../../electron/domains/knowledge/knowledge-source-access.cjs#L63>)

**Called by (statically resolved):**

- [resolveKnowledgeSource](<knowledge-source-access.cjs.md#s-533d0fd9803550f8>) — [electron/domains/knowledge/knowledge-source-access.cjs:83](<../../../../../../../electron/domains/knowledge/knowledge-source-access.cjs#L83>)
- [readKnowledgeIndex](<knowledge-store.cjs.md#s-c0c55e94f399d0ad>) — [electron/domains/knowledge/knowledge-store.cjs:35](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L35>)
- [saveKnowledgeIndex.writeIndex](<knowledge-store.cjs.md#s-b342ffff622fda36>) — [electron/domains/knowledge/knowledge-store.cjs:81](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L81>)
- [saveKnowledgeIndex.writeIndex](<knowledge-store.cjs.md#s-b342ffff622fda36>) — [electron/domains/knowledge/knowledge-store.cjs:106](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L106>)
- [resolveKnowledgeCarousel](<knowledge-store.cjs.md#s-258b76b0d80b1e40>) — [electron/domains/knowledge/knowledge-store.cjs:113](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L113>)
- [saveKnowledgeNote.saveSourceNote](<knowledge-store.cjs.md#s-1654fd018e79f10a>) — [electron/domains/knowledge/knowledge-store.cjs:143](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L143>)
- [saveKnowledgeNote.saveSourceNote](<knowledge-store.cjs.md#s-1654fd018e79f10a>) — [electron/domains/knowledge/knowledge-store.cjs:159](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L159>)
- [savePriceSymbol.writePriceSymbol](<knowledge-store.cjs.md#s-f9823235072108c5>) — [electron/domains/knowledge/knowledge-store.cjs:168](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L168>)
- [savePriceSymbol.writePriceSymbol](<knowledge-store.cjs.md#s-f9823235072108c5>) — [electron/domains/knowledge/knowledge-store.cjs:186](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L186>)

Unresolved / external call sites: 12.

- fs.stat — external-or-dynamic-dispatch; [electron/domains/knowledge/knowledge-source-access.cjs:28](<../../../../../../../electron/domains/knowledge/knowledge-source-access.cjs#L28>)
- stats.isFile — external-or-dynamic-dispatch; [electron/domains/knowledge/knowledge-source-access.cjs:29](<../../../../../../../electron/domains/knowledge/knowledge-source-access.cjs#L29>)
- Error — external-or-dynamic-dispatch; [electron/domains/knowledge/knowledge-source-access.cjs:30](<../../../../../../../electron/domains/knowledge/knowledge-source-access.cjs#L30>)
- fs.readFile — external-or-dynamic-dispatch; [electron/domains/knowledge/knowledge-source-access.cjs:33](<../../../../../../../electron/domains/knowledge/knowledge-source-access.cjs#L33>)
- /^---\\r?\\n(&#91;\\s\\S&#93;*?)\\r?\\n---(?:\\r?\\n&#124;$)(&#91;\\s\\S&#93;*)$/.exec — external-or-dynamic-dispatch; [electron/domains/knowledge/knowledge-source-access.cjs:46](<../../../../../../../electron/domains/knowledge/knowledge-source-access.cjs#L46>)
- Error — external-or-dynamic-dispatch; [electron/domains/knowledge/knowledge-source-access.cjs:50](<../../../../../../../electron/domains/knowledge/knowledge-source-access.cjs#L50>)
- yaml.load — external-or-dynamic-dispatch; [electron/domains/knowledge/knowledge-source-access.cjs:53](<../../../../../../../electron/domains/knowledge/knowledge-source-access.cjs#L53>)
- Error — external-or-dynamic-dispatch; [electron/domains/knowledge/knowledge-source-access.cjs:61](<../../../../../../../electron/domains/knowledge/knowledge-source-access.cjs#L61>)
- 4 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [tests/integration/architecture-contract.test.cjs:238](<../../../../../../../tests/integration/architecture-contract.test.cjs#L238>) — file-import-only; coverage not established.

<a id="s-533d0fd9803550f8"></a>

## resolveKnowledgeSource

[electron/domains/knowledge/knowledge-source-access.cjs:82](<../../../../../../../electron/domains/knowledge/knowledge-source-access.cjs#L82>) · FunctionDeclaration · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

Authorizes legacy or grouped applied references against current assignments for preview/locating. Broken references throw.

Purpose evidence: jsdoc.

Exported as: resolveKnowledgeSource ([electron/domains/knowledge/knowledge-source-access.cjs:1](<../../../../../../../electron/domains/knowledge/knowledge-source-access.cjs#L1>)), resolveKnowledgeSource ([electron/domains/knowledge/knowledge-store.cjs:1](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L1>)).

Lexical owner: [electron/domains/knowledge/knowledge-source-access.cjs](<knowledge-source-access.cjs.md#s-6adcb9bb250cbec8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| rootPath | any | compiler-inferred | required |
| id | any | compiler-inferred | required |
| sourceId | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [readRecord](<knowledge-source-access.cjs.md#s-9e369167fc59d0c0>) — [electron/domains/knowledge/knowledge-source-access.cjs:83](<../../../../../../../electron/domains/knowledge/knowledge-source-access.cjs#L83>)

**Called by (statically resolved):**

- [registerWorldViewIpc."knowledge-reveal"](<../../core/ipc/worldview-ipc.cjs.md#s-123b7234d7ed68d1>) — [electron/core/ipc/worldview-ipc.cjs:236](<../../../../../../../electron/core/ipc/worldview-ipc.cjs#L236>)
- [previewKnowledgeSource](<knowledge-store.cjs.md#s-5b3b21e330d3d260>) — [electron/domains/knowledge/knowledge-store.cjs:124](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L124>)
- [previewKnowledgeSource.previewSource](<knowledge-store.cjs.md#s-99313261c10e747c>) — [electron/domains/knowledge/knowledge-store.cjs:132](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L132>)
- [saveKnowledgeNote.saveSourceNote](<knowledge-store.cjs.md#s-1654fd018e79f10a>) — [electron/domains/knowledge/knowledge-store.cjs:142](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L142>)
- [createExcelService.load](<../../excel-service.cjs.md#s-64735e7127d8128a>) — [electron/excel-service.cjs:77](<../../../../../../../electron/excel-service.cjs#L77>)
- [createExcelService.load](<../../excel-service.cjs.md#s-64735e7127d8128a>) — [electron/excel-service.cjs:117](<../../../../../../../electron/excel-service.cjs#L117>)
- [createExcelService.request](<../../excel-service.cjs.md#s-7424ee532b0e8969>) — [electron/excel-service.cjs:162](<../../../../../../../electron/excel-service.cjs#L162>)
- [createImageParserService.authorize](<../../image-parser-service.cjs.md#s-1c83efa203bf22bd>) — [electron/image-parser-service.cjs:179](<../../../../../../../electron/image-parser-service.cjs#L179>)

Unresolved / external call sites: 6.

- readWorldViewChip — signature-only-candidate; [electron/domains/knowledge/knowledge-source-access.cjs:84](<../../../../../../../electron/domains/knowledge/knowledge-source-access.cjs#L84>)
- record.menus.some — external-or-dynamic-dispatch; [electron/domains/knowledge/knowledge-source-access.cjs:87](<../../../../../../../electron/domains/knowledge/knowledge-source-access.cjs#L87>)
- Error — external-or-dynamic-dispatch; [electron/domains/knowledge/knowledge-source-access.cjs:93](<../../../../../../../electron/domains/knowledge/knowledge-source-access.cjs#L93>)
- chip.sources.find — external-or-dynamic-dispatch; [electron/domains/knowledge/knowledge-source-access.cjs:94](<../../../../../../../electron/domains/knowledge/knowledge-source-access.cjs#L94>)
- Error — external-or-dynamic-dispatch; [electron/domains/knowledge/knowledge-source-access.cjs:96](<../../../../../../../electron/domains/knowledge/knowledge-source-access.cjs#L96>)
- Error — external-or-dynamic-dispatch; [electron/domains/knowledge/knowledge-source-access.cjs:100](<../../../../../../../electron/domains/knowledge/knowledge-source-access.cjs#L100>)

**Related tests / acceptance harnesses:**

- [tests/integration/architecture-contract.test.cjs:238](<../../../../../../../tests/integration/architecture-contract.test.cjs#L238>) — file-import-only; coverage not established.

<a id="s-0328591661d8c451"></a>

## resolveKnowledgeSource.&lt;anonymous@87:24&gt;

[electron/domains/knowledge/knowledge-source-access.cjs:87](<../../../../../../../electron/domains/knowledge/knowledge-source-access.cjs#L87>) · ArrowFunction · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [resolveKnowledgeSource](<knowledge-source-access.cjs.md#s-533d0fd9803550f8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| menu | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- &#91;menu, ...(menu.carousels ?? &#91;&#93;)&#93;.some — external-or-dynamic-dispatch; [electron/domains/knowledge/knowledge-source-access.cjs:88](<../../../../../../../electron/domains/knowledge/knowledge-source-access.cjs#L88>)

**Related tests / acceptance harnesses:**

- [tests/integration/architecture-contract.test.cjs:238](<../../../../../../../tests/integration/architecture-contract.test.cjs#L238>) — file-import-only; coverage not established.

<a id="s-5bd175ceeb7f4140"></a>

## resolveKnowledgeSource.&lt;anonymous@87:24&gt;.&lt;anonymous@88:46&gt;

[electron/domains/knowledge/knowledge-source-access.cjs:88](<../../../../../../../electron/domains/knowledge/knowledge-source-access.cjs#L88>) · ArrowFunction · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [resolveKnowledgeSource.&lt;anonymous@87:24&gt;](<knowledge-source-access.cjs.md#s-0328591661d8c451>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| component | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- component.sourceIds.includes — external-or-dynamic-dispatch; [electron/domains/knowledge/knowledge-source-access.cjs:89](<../../../../../../../electron/domains/knowledge/knowledge-source-access.cjs#L89>)

**Related tests / acceptance harnesses:**

- [tests/integration/architecture-contract.test.cjs:238](<../../../../../../../tests/integration/architecture-contract.test.cjs#L238>) — file-import-only; coverage not established.

<a id="s-da82000a0e4a9d8f"></a>

## resolveKnowledgeSource.&lt;anonymous@94:36&gt;

[electron/domains/knowledge/knowledge-source-access.cjs:94](<../../../../../../../electron/domains/knowledge/knowledge-source-access.cjs#L94>) · ArrowFunction · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [resolveKnowledgeSource](<knowledge-source-access.cjs.md#s-533d0fd9803550f8>).

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

- [tests/integration/architecture-contract.test.cjs:238](<../../../../../../../tests/integration/architecture-contract.test.cjs#L238>) — file-import-only; coverage not established.
