# features/knowledge/excel-preview.tsx: symbols

[Atlas](<../../../../README.md>) / [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>) / [features/knowledge/excel-preview.tsx:1](<../../../../../../features/knowledge/excel-preview.tsx#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [features/knowledge/excel-preview.tsx](<excel-preview.tsx.md#s-cce9fff70425fc98>) (Module)
- [ExcelPreview](<excel-preview.tsx.md#s-318f4c611041cfa4>) (FunctionDeclaration)
- [ExcelPreview.guardUnmount](<excel-preview.tsx.md#s-f853b4b03c48202b>) (FunctionExpression)
- [ExcelPreview.guardUnmount.&lt;anonymous@27:12&gt;](<excel-preview.tsx.md#s-1b04c86a490714fc>) (ArrowFunction)
- [ExcelPreview.&lt;anonymous@32:5&gt;](<excel-preview.tsx.md#s-149080c63c79a01b>) (ArrowFunction)
- [ExcelPreview.navigate](<excel-preview.tsx.md#s-3b9c4df3469cd19e>) (FunctionDeclaration)
- [ExcelPreview.copyMarkdown](<excel-preview.tsx.md#s-e4c569b0998f1cf1>) (FunctionDeclaration)
- [ExcelPreview.download](<excel-preview.tsx.md#s-3c66b0a01fdc8755>) (FunctionDeclaration)
- [ExcelPreview.download.releaseDownload](<excel-preview.tsx.md#s-61937019bd93e2e8>) (FunctionExpression)
- [ExcelPreview.&lt;anonymous@151:29&gt;](<excel-preview.tsx.md#s-94816849cb13037a>) (ArrowFunction)
- [ExcelPreview.&lt;anonymous@151:29&gt;.&lt;anonymous@158:22&gt;](<excel-preview.tsx.md#s-1a4946bd082cc736>) (ArrowFunction)
- [ExcelPreview.&lt;anonymous@190:37&gt;](<excel-preview.tsx.md#s-3bb3c2aa6951524f>) (ArrowFunction)
- [ExcelPreview.&lt;anonymous@198:32&gt;](<excel-preview.tsx.md#s-ac7f922e4564ba22>) (ArrowFunction)
- [ExcelPreview.&lt;anonymous@198:32&gt;.&lt;anonymous@201:36&gt;](<excel-preview.tsx.md#s-4d1eba8ff8f569a3>) (ArrowFunction)
- [ExcelPreview.&lt;anonymous@222:22&gt;](<excel-preview.tsx.md#s-303cacdf5b76b7f5>) (ArrowFunction)
- [ExcelPreview.&lt;anonymous@239:22&gt;](<excel-preview.tsx.md#s-80b1205a1d0c078c>) (ArrowFunction)
- [ExcelPreview.&lt;anonymous@252:22&gt;](<excel-preview.tsx.md#s-8a2554f3b6e1cbfb>) (ArrowFunction)
- [ExcelPreview.&lt;anonymous@269:22&gt;](<excel-preview.tsx.md#s-c0a0ef7f85672807>) (ArrowFunction)
- [ExcelPreview.&lt;anonymous@289:22&gt;](<excel-preview.tsx.md#s-59c1b76335dd4e47>) (ArrowFunction)
- [ExcelPreview.&lt;anonymous@296:22&gt;](<excel-preview.tsx.md#s-927619604177a0f4>) (ArrowFunction)
- [ExcelPreview.&lt;anonymous@303:22&gt;](<excel-preview.tsx.md#s-80edd3ececc3bc95>) (ArrowFunction)
- [ExcelPreview.&lt;anonymous@315:59&gt;](<excel-preview.tsx.md#s-1c4de60ba32f91df>) (ArrowFunction)

<a id="s-cce9fff70425fc98"></a>

## features/knowledge/excel-preview.tsx

[features/knowledge/excel-preview.tsx:1](<../../../../../../features/knowledge/excel-preview.tsx#L1>) · Module · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-318f4c611041cfa4"></a>

## ExcelPreview

[features/knowledge/excel-preview.tsx:8](<../../../../../../features/knowledge/excel-preview.tsx#L8>) · FunctionDeclaration · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

Presents coordinate-faithful final text inside the existing Knowledge Card, loading pages and exports through the authorized desktop bridge.

Purpose evidence: jsdoc.

Exported as: ExcelPreview ([features/knowledge/excel-preview.tsx:1](<../../../../../../features/knowledge/excel-preview.tsx#L1>)).

Lexical owner: [features/knowledge/excel-preview.tsx](<excel-preview.tsx.md#s-cce9fff70425fc98>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| {   initial,   entityId,   vaultPath,   sourceId, } | Readonly&lt;{ initial: ExcelSourcePreview; entityId: string; vaultPath: string; sourceId: string; }&gt; | annotation | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 15.

- useState — external-or-dynamic-dispatch; [features/knowledge/excel-preview.tsx:19](<../../../../../../features/knowledge/excel-preview.tsx#L19>)
- useState — external-or-dynamic-dispatch; [features/knowledge/excel-preview.tsx:20](<../../../../../../features/knowledge/excel-preview.tsx#L20>)
- useState — external-or-dynamic-dispatch; [features/knowledge/excel-preview.tsx:21](<../../../../../../features/knowledge/excel-preview.tsx#L21>)
- useState — external-or-dynamic-dispatch; [features/knowledge/excel-preview.tsx:22](<../../../../../../features/knowledge/excel-preview.tsx#L22>)
- useState — external-or-dynamic-dispatch; [features/knowledge/excel-preview.tsx:23](<../../../../../../features/knowledge/excel-preview.tsx#L23>)
- useRef — external-or-dynamic-dispatch; [features/knowledge/excel-preview.tsx:24](<../../../../../../features/knowledge/excel-preview.tsx#L24>)
- useEffect — external-or-dynamic-dispatch; [features/knowledge/excel-preview.tsx:26](<../../../../../../features/knowledge/excel-preview.tsx#L26>)
- preview.sheets.find — external-or-dynamic-dispatch; [features/knowledge/excel-preview.tsx:31](<../../../../../../features/knowledge/excel-preview.tsx#L31>)
- 7 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-f853b4b03c48202b"></a>

## ExcelPreview.guardUnmount

[features/knowledge/excel-preview.tsx:26](<../../../../../../features/knowledge/excel-preview.tsx#L26>) · FunctionExpression · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ExcelPreview](<excel-preview.tsx.md#s-318f4c611041cfa4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: () =&gt; void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-1b04c86a490714fc"></a>

## ExcelPreview.guardUnmount.&lt;anonymous@27:12&gt;

[features/knowledge/excel-preview.tsx:27](<../../../../../../features/knowledge/excel-preview.tsx#L27>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ExcelPreview.guardUnmount](<excel-preview.tsx.md#s-f853b4b03c48202b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-149080c63c79a01b"></a>

## ExcelPreview.&lt;anonymous@32:5&gt;

[features/knowledge/excel-preview.tsx:32](<../../../../../../features/knowledge/excel-preview.tsx#L32>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ExcelPreview](<excel-preview.tsx.md#s-318f4c611041cfa4>).

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

No direct static call/import association found; coverage unknown.

<a id="s-3b9c4df3469cd19e"></a>

## ExcelPreview.navigate

[features/knowledge/excel-preview.tsx:37](<../../../../../../features/knowledge/excel-preview.tsx#L37>) · FunctionDeclaration · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

Loads one bounded source-coordinate page; overlapping requests cannot replace the latest selected worksheet.

Purpose evidence: jsdoc.

Lexical owner: [ExcelPreview](<excel-preview.tsx.md#s-318f4c611041cfa4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| sheetIndex | number | annotation | required |
| rowOffset | number | compiler-inferred | optional, default present |
| columnOffset | number | compiler-inferred | optional, default present |

Returns: Promise&lt;void&gt; (annotation). Implementation present.

**Calls (statically resolved):**

- [requireWorldViewBridge](<../worldview/chip-session.ts.md#s-724ceb52bd424e76>) — [features/knowledge/excel-preview.tsx:47](<../../../../../../features/knowledge/excel-preview.tsx#L47>)

**Called by (statically resolved):**

- [ExcelPreview.&lt;anonymous@151:29&gt;.&lt;anonymous@158:22&gt;](<excel-preview.tsx.md#s-1a4946bd082cc736>) — [features/knowledge/excel-preview.tsx:158](<../../../../../../features/knowledge/excel-preview.tsx#L158>)
- [ExcelPreview.&lt;anonymous@222:22&gt;](<excel-preview.tsx.md#s-303cacdf5b76b7f5>) — [features/knowledge/excel-preview.tsx:223](<../../../../../../features/knowledge/excel-preview.tsx#L223>)
- [ExcelPreview.&lt;anonymous@239:22&gt;](<excel-preview.tsx.md#s-80b1205a1d0c078c>) — [features/knowledge/excel-preview.tsx:240](<../../../../../../features/knowledge/excel-preview.tsx#L240>)
- [ExcelPreview.&lt;anonymous@252:22&gt;](<excel-preview.tsx.md#s-8a2554f3b6e1cbfb>) — [features/knowledge/excel-preview.tsx:253](<../../../../../../features/knowledge/excel-preview.tsx#L253>)
- [ExcelPreview.&lt;anonymous@269:22&gt;](<excel-preview.tsx.md#s-c0a0ef7f85672807>) — [features/knowledge/excel-preview.tsx:270](<../../../../../../features/knowledge/excel-preview.tsx#L270>)

Unresolved / external call sites: 7.

- setLoading — external-or-dynamic-dispatch; [features/knowledge/excel-preview.tsx:43](<../../../../../../features/knowledge/excel-preview.tsx#L43>)
- setError — external-or-dynamic-dispatch; [features/knowledge/excel-preview.tsx:44](<../../../../../../features/knowledge/excel-preview.tsx#L44>)
- setNotice — external-or-dynamic-dispatch; [features/knowledge/excel-preview.tsx:45](<../../../../../../features/knowledge/excel-preview.tsx#L45>)
- requireWorldViewBridge().request — declaration-without-runtime-body; [features/knowledge/excel-preview.tsx:47](<../../../../../../features/knowledge/excel-preview.tsx#L47>)
- setPreview — external-or-dynamic-dispatch; [features/knowledge/excel-preview.tsx:59](<../../../../../../features/knowledge/excel-preview.tsx#L59>)
- setError — external-or-dynamic-dispatch; [features/knowledge/excel-preview.tsx:62](<../../../../../../features/knowledge/excel-preview.tsx#L62>)
- setLoading — external-or-dynamic-dispatch; [features/knowledge/excel-preview.tsx:68](<../../../../../../features/knowledge/excel-preview.tsx#L68>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-e4c569b0998f1cf1"></a>

## ExcelPreview.copyMarkdown

[features/knowledge/excel-preview.tsx:73](<../../../../../../features/knowledge/excel-preview.tsx#L73>) · FunctionDeclaration · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

Copies a freshly authorized current-sheet preview through the narrow native clipboard operation; failures remain visible.

Purpose evidence: jsdoc.

Lexical owner: [ExcelPreview](<excel-preview.tsx.md#s-318f4c611041cfa4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: Promise&lt;void&gt; (annotation). Implementation present.

**Calls (statically resolved):**

- [requireWorldViewBridge](<../worldview/chip-session.ts.md#s-724ceb52bd424e76>) — [features/knowledge/excel-preview.tsx:79](<../../../../../../features/knowledge/excel-preview.tsx#L79>)

**Called by (statically resolved):**

- [ExcelPreview.&lt;anonymous@289:22&gt;](<excel-preview.tsx.md#s-59c1b76335dd4e47>) — [features/knowledge/excel-preview.tsx:289](<../../../../../../features/knowledge/excel-preview.tsx#L289>)

Unresolved / external call sites: 7.

- setExporting — external-or-dynamic-dispatch; [features/knowledge/excel-preview.tsx:75](<../../../../../../features/knowledge/excel-preview.tsx#L75>)
- setError — external-or-dynamic-dispatch; [features/knowledge/excel-preview.tsx:76](<../../../../../../features/knowledge/excel-preview.tsx#L76>)
- setNotice — external-or-dynamic-dispatch; [features/knowledge/excel-preview.tsx:77](<../../../../../../features/knowledge/excel-preview.tsx#L77>)
- requireWorldViewBridge().request — declaration-without-runtime-body; [features/knowledge/excel-preview.tsx:79](<../../../../../../features/knowledge/excel-preview.tsx#L79>)
- setNotice — external-or-dynamic-dispatch; [features/knowledge/excel-preview.tsx:89](<../../../../../../features/knowledge/excel-preview.tsx#L89>)
- setError — external-or-dynamic-dispatch; [features/knowledge/excel-preview.tsx:92](<../../../../../../features/knowledge/excel-preview.tsx#L92>)
- setExporting — external-or-dynamic-dispatch; [features/knowledge/excel-preview.tsx:96](<../../../../../../features/knowledge/excel-preview.tsx#L96>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-3c66b0a01fdc8755"></a>

## ExcelPreview.download

[features/knowledge/excel-preview.tsx:101](<../../../../../../features/knowledge/excel-preview.tsx#L101>) · FunctionDeclaration · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

Downloads a full derived export without writing to the Universe source; huge Markdown ranges reject with a structured-JSON alternative.

Purpose evidence: jsdoc.

Lexical owner: [ExcelPreview](<excel-preview.tsx.md#s-318f4c611041cfa4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| format | "markdown" &#124; "structured" | annotation | required |

Returns: Promise&lt;void&gt; (annotation). Implementation present.

**Calls (statically resolved):**

- [requireWorldViewBridge](<../worldview/chip-session.ts.md#s-724ceb52bd424e76>) — [features/knowledge/excel-preview.tsx:107](<../../../../../../features/knowledge/excel-preview.tsx#L107>)

**Called by (statically resolved):**

- [ExcelPreview.&lt;anonymous@296:22&gt;](<excel-preview.tsx.md#s-927619604177a0f4>) — [features/knowledge/excel-preview.tsx:296](<../../../../../../features/knowledge/excel-preview.tsx#L296>)
- [ExcelPreview.&lt;anonymous@303:22&gt;](<excel-preview.tsx.md#s-80edd3ececc3bc95>) — [features/knowledge/excel-preview.tsx:303](<../../../../../../features/knowledge/excel-preview.tsx#L303>)

Unresolved / external call sites: 12.

- setExporting — external-or-dynamic-dispatch; [features/knowledge/excel-preview.tsx:103](<../../../../../../features/knowledge/excel-preview.tsx#L103>)
- setError — external-or-dynamic-dispatch; [features/knowledge/excel-preview.tsx:104](<../../../../../../features/knowledge/excel-preview.tsx#L104>)
- setNotice — external-or-dynamic-dispatch; [features/knowledge/excel-preview.tsx:105](<../../../../../../features/knowledge/excel-preview.tsx#L105>)
- requireWorldViewBridge().request — declaration-without-runtime-body; [features/knowledge/excel-preview.tsx:107](<../../../../../../features/knowledge/excel-preview.tsx#L107>)
- URL.createObjectURL — external-or-dynamic-dispatch; [features/knowledge/excel-preview.tsx:119](<../../../../../../features/knowledge/excel-preview.tsx#L119>)
- Blob — external-or-dynamic-dispatch; [features/knowledge/excel-preview.tsx:120](<../../../../../../features/knowledge/excel-preview.tsx#L120>)
- document.createElement — external-or-dynamic-dispatch; [features/knowledge/excel-preview.tsx:122](<../../../../../../features/knowledge/excel-preview.tsx#L122>)
- anchor.click — external-or-dynamic-dispatch; [features/knowledge/excel-preview.tsx:125](<../../../../../../features/knowledge/excel-preview.tsx#L125>)
- 4 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-61937019bd93e2e8"></a>

## ExcelPreview.download.releaseDownload

[features/knowledge/excel-preview.tsx:126](<../../../../../../features/knowledge/excel-preview.tsx#L126>) · FunctionExpression · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ExcelPreview.download](<excel-preview.tsx.md#s-3c66b0a01fdc8755>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- URL.revokeObjectURL — external-or-dynamic-dispatch; [features/knowledge/excel-preview.tsx:127](<../../../../../../features/knowledge/excel-preview.tsx#L127>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-94816849cb13037a"></a>

## ExcelPreview.&lt;anonymous@151:29&gt;

[features/knowledge/excel-preview.tsx:151](<../../../../../../features/knowledge/excel-preview.tsx#L151>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ExcelPreview](<excel-preview.tsx.md#s-318f4c611041cfa4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| item | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-1a4946bd082cc736"></a>

## ExcelPreview.&lt;anonymous@151:29&gt;.&lt;anonymous@158:22&gt;

[features/knowledge/excel-preview.tsx:158](<../../../../../../features/knowledge/excel-preview.tsx#L158>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ExcelPreview.&lt;anonymous@151:29&gt;](<excel-preview.tsx.md#s-94816849cb13037a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ExcelPreview.navigate](<excel-preview.tsx.md#s-3b9c4df3469cd19e>) — [features/knowledge/excel-preview.tsx:158](<../../../../../../features/knowledge/excel-preview.tsx#L158>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-3bb3c2aa6951524f"></a>

## ExcelPreview.&lt;anonymous@190:37&gt;

[features/knowledge/excel-preview.tsx:190](<../../../../../../features/knowledge/excel-preview.tsx#L190>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ExcelPreview](<excel-preview.tsx.md#s-318f4c611041cfa4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| label | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-ac7f922e4564ba22"></a>

## ExcelPreview.&lt;anonymous@198:32&gt;

[features/knowledge/excel-preview.tsx:198](<../../../../../../features/knowledge/excel-preview.tsx#L198>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ExcelPreview](<excel-preview.tsx.md#s-318f4c611041cfa4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| row | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- row.cells.map — external-or-dynamic-dispatch; [features/knowledge/excel-preview.tsx:201](<../../../../../../features/knowledge/excel-preview.tsx#L201>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-4d1eba8ff8f569a3"></a>

## ExcelPreview.&lt;anonymous@198:32&gt;.&lt;anonymous@201:36&gt;

[features/knowledge/excel-preview.tsx:201](<../../../../../../features/knowledge/excel-preview.tsx#L201>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ExcelPreview.&lt;anonymous@198:32&gt;](<excel-preview.tsx.md#s-ac7f922e4564ba22>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| cell | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-303cacdf5b76b7f5"></a>

## ExcelPreview.&lt;anonymous@222:22&gt;

[features/knowledge/excel-preview.tsx:222](<../../../../../../features/knowledge/excel-preview.tsx#L222>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ExcelPreview](<excel-preview.tsx.md#s-318f4c611041cfa4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ExcelPreview.navigate](<excel-preview.tsx.md#s-3b9c4df3469cd19e>) — [features/knowledge/excel-preview.tsx:223](<../../../../../../features/knowledge/excel-preview.tsx#L223>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- Math.max — external-or-dynamic-dispatch; [features/knowledge/excel-preview.tsx:225](<../../../../../../features/knowledge/excel-preview.tsx#L225>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-80b1205a1d0c078c"></a>

## ExcelPreview.&lt;anonymous@239:22&gt;

[features/knowledge/excel-preview.tsx:239](<../../../../../../features/knowledge/excel-preview.tsx#L239>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ExcelPreview](<excel-preview.tsx.md#s-318f4c611041cfa4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ExcelPreview.navigate](<excel-preview.tsx.md#s-3b9c4df3469cd19e>) — [features/knowledge/excel-preview.tsx:240](<../../../../../../features/knowledge/excel-preview.tsx#L240>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-8a2554f3b6e1cbfb"></a>

## ExcelPreview.&lt;anonymous@252:22&gt;

[features/knowledge/excel-preview.tsx:252](<../../../../../../features/knowledge/excel-preview.tsx#L252>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ExcelPreview](<excel-preview.tsx.md#s-318f4c611041cfa4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ExcelPreview.navigate](<excel-preview.tsx.md#s-3b9c4df3469cd19e>) — [features/knowledge/excel-preview.tsx:253](<../../../../../../features/knowledge/excel-preview.tsx#L253>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- Math.max — external-or-dynamic-dispatch; [features/knowledge/excel-preview.tsx:256](<../../../../../../features/knowledge/excel-preview.tsx#L256>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-c0a0ef7f85672807"></a>

## ExcelPreview.&lt;anonymous@269:22&gt;

[features/knowledge/excel-preview.tsx:269](<../../../../../../features/knowledge/excel-preview.tsx#L269>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ExcelPreview](<excel-preview.tsx.md#s-318f4c611041cfa4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ExcelPreview.navigate](<excel-preview.tsx.md#s-3b9c4df3469cd19e>) — [features/knowledge/excel-preview.tsx:270](<../../../../../../features/knowledge/excel-preview.tsx#L270>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-59c1b76335dd4e47"></a>

## ExcelPreview.&lt;anonymous@289:22&gt;

[features/knowledge/excel-preview.tsx:289](<../../../../../../features/knowledge/excel-preview.tsx#L289>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ExcelPreview](<excel-preview.tsx.md#s-318f4c611041cfa4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ExcelPreview.copyMarkdown](<excel-preview.tsx.md#s-e4c569b0998f1cf1>) — [features/knowledge/excel-preview.tsx:289](<../../../../../../features/knowledge/excel-preview.tsx#L289>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-927619604177a0f4"></a>

## ExcelPreview.&lt;anonymous@296:22&gt;

[features/knowledge/excel-preview.tsx:296](<../../../../../../features/knowledge/excel-preview.tsx#L296>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ExcelPreview](<excel-preview.tsx.md#s-318f4c611041cfa4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ExcelPreview.download](<excel-preview.tsx.md#s-3c66b0a01fdc8755>) — [features/knowledge/excel-preview.tsx:296](<../../../../../../features/knowledge/excel-preview.tsx#L296>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-80edd3ececc3bc95"></a>

## ExcelPreview.&lt;anonymous@303:22&gt;

[features/knowledge/excel-preview.tsx:303](<../../../../../../features/knowledge/excel-preview.tsx#L303>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ExcelPreview](<excel-preview.tsx.md#s-318f4c611041cfa4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ExcelPreview.download](<excel-preview.tsx.md#s-3c66b0a01fdc8755>) — [features/knowledge/excel-preview.tsx:303](<../../../../../../features/knowledge/excel-preview.tsx#L303>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-1c4de60ba32f91df"></a>

## ExcelPreview.&lt;anonymous@315:59&gt;

[features/knowledge/excel-preview.tsx:315](<../../../../../../features/knowledge/excel-preview.tsx#L315>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ExcelPreview](<excel-preview.tsx.md#s-318f4c611041cfa4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| warning | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
