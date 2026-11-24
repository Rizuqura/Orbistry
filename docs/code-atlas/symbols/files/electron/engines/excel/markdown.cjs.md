# electron/engines/excel/markdown.cjs: symbols

[Atlas](<../../../../../README.md>) / [Built-in Engines and data adapters](<../../../../../modules/engines.md>) / [electron/engines/excel/markdown.cjs:1](<../../../../../../../electron/engines/excel/markdown.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/engines/excel/markdown.cjs](<markdown.cjs.md#s-d7d32ae179b76645>) (Module)
- [escapeMarkdown](<markdown.cjs.md#s-041cac95d57b1be8>) (FunctionDeclaration)
- [escapeMarkdown.literal](<markdown.cjs.md#s-823d62b8327e9dc4>) (FunctionExpression)
- [cellText](<markdown.cjs.md#s-deea042075c6b363>) (FunctionDeclaration)
- [sheetPage](<markdown.cjs.md#s-93d3e52233fc3f11>) (FunctionDeclaration)
- [sheetPage.entry](<markdown.cjs.md#s-d3413813907a00c2>) (FunctionExpression)
- [sheetPage.previewCell](<markdown.cjs.md#s-66281f38e7914db2>) (FunctionExpression)
- [renderSheet](<markdown.cjs.md#s-7f549847601d4399>) (FunctionDeclaration)
- [renderSheet.separator](<markdown.cjs.md#s-4934a91cf30535ca>) (FunctionExpression)
- [renderSheet.content](<markdown.cjs.md#s-31e17eff29a4625d>) (FunctionExpression)
- [renderWorkbook](<markdown.cjs.md#s-6172ce5abfe311d1>) (FunctionDeclaration)
- [renderWorkbook.sum](<markdown.cjs.md#s-3c3c436ff9fec112>) (FunctionExpression)
- [renderWorkbook.sheetOutput](<markdown.cjs.md#s-d0557db4d7571f6d>) (FunctionExpression)
- [renderWorkbook.warning](<markdown.cjs.md#s-bb374282f6949b86>) (FunctionExpression)

<a id="s-d7d32ae179b76645"></a>

## electron/engines/excel/markdown.cjs

[electron/engines/excel/markdown.cjs:1](<../../../../../../../electron/engines/excel/markdown.cjs#L1>) · Module · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- require — module-loader; [electron/engines/excel/markdown.cjs:1](<../../../../../../../electron/engines/excel/markdown.cjs#L1>)
- require — module-loader; [electron/engines/excel/markdown.cjs:2](<../../../../../../../electron/engines/excel/markdown.cjs#L2>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-041cac95d57b1be8"></a>

## escapeMarkdown

[electron/engines/excel/markdown.cjs:5](<../../../../../../../electron/engines/excel/markdown.cjs#L5>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Escapes source text into inert Markdown table content; line breaks become explicit HTML breaks after HTML is escaped.

Purpose evidence: jsdoc.

Exported as: escapeMarkdown ([electron/engines/excel/markdown.cjs:1](<../../../../../../../electron/engines/excel/markdown.cjs#L1>)).

Lexical owner: [electron/engines/excel/markdown.cjs](<markdown.cjs.md#s-d7d32ae179b76645>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [renderSheet](<markdown.cjs.md#s-7f549847601d4399>) — [electron/engines/excel/markdown.cjs:134](<../../../../../../../electron/engines/excel/markdown.cjs#L134>)
- [renderSheet.content](<markdown.cjs.md#s-31e17eff29a4625d>) — [electron/engines/excel/markdown.cjs:157](<../../../../../../../electron/engines/excel/markdown.cjs#L157>)
- [renderSheet](<markdown.cjs.md#s-7f549847601d4399>) — [electron/engines/excel/markdown.cjs:168](<../../../../../../../electron/engines/excel/markdown.cjs#L168>)
- [renderWorkbook](<markdown.cjs.md#s-6172ce5abfe311d1>) — [electron/engines/excel/markdown.cjs:190](<../../../../../../../electron/engines/excel/markdown.cjs#L190>)
- [renderWorkbook.warning](<markdown.cjs.md#s-bb374282f6949b86>) — [electron/engines/excel/markdown.cjs:195](<../../../../../../../electron/engines/excel/markdown.cjs#L195>)

Unresolved / external call sites: 6.

- String(value) .replace(/&/g, "&amp;") .replace(/&lt;/g, "&lt;") .replace(/&gt;/g, "&gt;") .replace(/&#91;\\\\&#124;&#96;*_\\&#91;\\&#93;#!~&#93;/g, function literal(character) { return &#96;&#${character.charCodeAt(0)}; — external-or-dynamic-dispatch; [electron/engines/excel/markdown.cjs:6](<../../../../../../../electron/engines/excel/markdown.cjs#L6>)
- String(value) .replace(/&/g, "&amp;") .replace(/&lt;/g, "&lt;") .replace(/&gt;/g, "&gt;") .replace — external-or-dynamic-dispatch; [electron/engines/excel/markdown.cjs:6](<../../../../../../../electron/engines/excel/markdown.cjs#L6>)
- String(value) .replace(/&/g, "&amp;") .replace(/&lt;/g, "&lt;") .replace — external-or-dynamic-dispatch; [electron/engines/excel/markdown.cjs:6](<../../../../../../../electron/engines/excel/markdown.cjs#L6>)
- String(value) .replace(/&/g, "&amp;") .replace — external-or-dynamic-dispatch; [electron/engines/excel/markdown.cjs:6](<../../../../../../../electron/engines/excel/markdown.cjs#L6>)
- String(value) .replace — external-or-dynamic-dispatch; [electron/engines/excel/markdown.cjs:6](<../../../../../../../electron/engines/excel/markdown.cjs#L6>)
- String — external-or-dynamic-dispatch; [electron/engines/excel/markdown.cjs:6](<../../../../../../../electron/engines/excel/markdown.cjs#L6>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-823d62b8327e9dc4"></a>

## escapeMarkdown.literal

[electron/engines/excel/markdown.cjs:10](<../../../../../../../electron/engines/excel/markdown.cjs#L10>) · FunctionExpression · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [escapeMarkdown](<markdown.cjs.md#s-041cac95d57b1be8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| character | any | compiler-inferred | required |

Returns: string (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- character.charCodeAt — external-or-dynamic-dispatch; [electron/engines/excel/markdown.cjs:11](<../../../../../../../electron/engines/excel/markdown.cjs#L11>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-deea042075c6b363"></a>

## cellText

[electron/engines/excel/markdown.cjs:17](<../../../../../../../electron/engines/excel/markdown.cjs#L17>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Displays formulas as saved results for table viewing or as expression/result pairs for faithful exports; missing results remain explicit.

Purpose evidence: jsdoc.

Exported as: cellText ([electron/engines/excel/markdown.cjs:1](<../../../../../../../electron/engines/excel/markdown.cjs#L1>)).

Lexical owner: [electron/engines/excel/markdown.cjs](<markdown.cjs.md#s-d7d32ae179b76645>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| cell | any | compiler-inferred | required |
| formulaDisplay | string | compiler-inferred | optional, default present |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [sheetPage.previewCell](<markdown.cjs.md#s-66281f38e7914db2>) — [electron/engines/excel/markdown.cjs:99](<../../../../../../../electron/engines/excel/markdown.cjs#L99>)
- [resultCell](<results.cjs.md#s-632bdd207205e03a>) — [electron/engines/excel/results.cjs:10](<../../../../../../../electron/engines/excel/results.cjs#L10>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-93d3e52233fc3f11"></a>

## sheetPage

[electron/engines/excel/markdown.cjs:32](<../../../../../../../electron/engines/excel/markdown.cjs#L32>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Returns a bounded coordinate-faithful rectangular page. Sparse interior blanks are materialized only within this page.

Purpose evidence: jsdoc.

Exported as: sheetPage ([electron/engines/excel/markdown.cjs:1](<../../../../../../../electron/engines/excel/markdown.cjs#L1>)).

Lexical owner: [electron/engines/excel/markdown.cjs](<markdown.cjs.md#s-d7d32ae179b76645>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| sheet | any | compiler-inferred | required |
| {     rowOffset = 0,     columnOffset = 0,     rows = LIMITS.previewRows,     columns = LIMITS.previewColumns,     formulaDisplay = "expression",   } | { rowOffset?: number; columnOffset?: number; rows?: any; columns?: any; formulaDisplay?: string; } | compiler-inferred | optional, default present |

Returns: { columns: {}; rows: {}; truncated: boolean; rowOffset: number; columnOffset: number; totalRows: number; totalColumns: number; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [columnLabel](<cells.cjs.md#s-ac5b4cb26566b461>) — [electron/engines/excel/markdown.cjs:81](<../../../../../../../electron/engines/excel/markdown.cjs#L81>)

**Called by (statically resolved):**

- [renderSheet](<markdown.cjs.md#s-7f549847601d4399>) — [electron/engines/excel/markdown.cjs:127](<../../../../../../../electron/engines/excel/markdown.cjs#L127>)
- [resultPage](<results.cjs.md#s-52108a0228c7c222>) — [electron/engines/excel/results.cjs:17](<../../../../../../../electron/engines/excel/results.cjs#L17>)
- [&lt;anonymous@25:86&gt;](<../../excel-engine.test.cjs.md#s-7d9d27dc78399b43>) — [electron/excel-engine.test.cjs:37](<../../../../../../../electron/excel-engine.test.cjs#L37>)
- [&lt;anonymous@108:89&gt;](<../../excel-engine.test.cjs.md#s-a1a327f305dffea9>) — [electron/excel-engine.test.cjs:134](<../../../../../../../electron/excel-engine.test.cjs#L134>)
- [&lt;anonymous@175:66&gt;](<../../excel-engine.test.cjs.md#s-a641b08ec0e44f5f>) — [electron/excel-engine.test.cjs:191](<../../../../../../../electron/excel-engine.test.cjs#L191>)
- [&lt;anonymous@230:77&gt;](<../../excel-engine.test.cjs.md#s-09f9e188920d9d81>) — [electron/excel-engine.test.cjs:238](<../../../../../../../electron/excel-engine.test.cjs#L238>)
- [&lt;anonymous@230:77&gt;](<../../excel-engine.test.cjs.md#s-09f9e188920d9d81>) — [electron/excel-engine.test.cjs:240](<../../../../../../../electron/excel-engine.test.cjs#L240>)

Unresolved / external call sites: 15.

- &#91;"expression", "result"&#93;.includes — external-or-dynamic-dispatch; [electron/engines/excel/markdown.cjs:42](<../../../../../../../electron/engines/excel/markdown.cjs#L42>)
- Error — external-or-dynamic-dispatch; [electron/engines/excel/markdown.cjs:43](<../../../../../../../electron/engines/excel/markdown.cjs#L43>)
- Object.entries — external-or-dynamic-dispatch; [electron/engines/excel/markdown.cjs:44](<../../../../../../../electron/engines/excel/markdown.cjs#L44>)
- Number.isSafeInteger — external-or-dynamic-dispatch; [electron/engines/excel/markdown.cjs:51](<../../../../../../../electron/engines/excel/markdown.cjs#L51>)
- name.endsWith — external-or-dynamic-dispatch; [electron/engines/excel/markdown.cjs:52](<../../../../../../../electron/engines/excel/markdown.cjs#L52>)
- Error — external-or-dynamic-dispatch; [electron/engines/excel/markdown.cjs:54](<../../../../../../../electron/engines/excel/markdown.cjs#L54>)
- Error — external-or-dynamic-dispatch; [electron/engines/excel/markdown.cjs:57](<../../../../../../../electron/engines/excel/markdown.cjs#L57>)
- Error — external-or-dynamic-dispatch; [electron/engines/excel/markdown.cjs:74](<../../../../../../../electron/engines/excel/markdown.cjs#L74>)
- 7 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/excel-engine.test.cjs:37](<../../../../../../../electron/excel-engine.test.cjs#L37>) — static-call-site; coverage not established.
- [electron/excel-engine.test.cjs:134](<../../../../../../../electron/excel-engine.test.cjs#L134>) — static-call-site; coverage not established.
- [electron/excel-engine.test.cjs:191](<../../../../../../../electron/excel-engine.test.cjs#L191>) — static-call-site; coverage not established.
- [electron/excel-engine.test.cjs:238](<../../../../../../../electron/excel-engine.test.cjs#L238>) — static-call-site; coverage not established.
- [electron/excel-engine.test.cjs:240](<../../../../../../../electron/excel-engine.test.cjs#L240>) — static-call-site; coverage not established.

<a id="s-d3413813907a00c2"></a>

## sheetPage.entry

[electron/engines/excel/markdown.cjs:83](<../../../../../../../electron/engines/excel/markdown.cjs#L83>) · FunctionExpression · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [sheetPage](<markdown.cjs.md#s-93d3e52233fc3f11>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| cell | any | compiler-inferred | required |

Returns: {} (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-66281f38e7914db2"></a>

## sheetPage.previewCell

[electron/engines/excel/markdown.cjs:95](<../../../../../../../electron/engines/excel/markdown.cjs#L95>) · FunctionExpression · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [sheetPage](<markdown.cjs.md#s-93d3e52233fc3f11>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| label | any | compiler-inferred | required |

Returns: { coordinate: string; text: any; cell: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [cellText](<markdown.cjs.md#s-deea042075c6b363>) — [electron/engines/excel/markdown.cjs:99](<../../../../../../../electron/engines/excel/markdown.cjs#L99>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- indexed.get — external-or-dynamic-dispatch; [electron/engines/excel/markdown.cjs:96](<../../../../../../../electron/engines/excel/markdown.cjs#L96>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-7f549847601d4399"></a>

## renderSheet

[electron/engines/excel/markdown.cjs:120](<../../../../../../../electron/engines/excel/markdown.cjs#L120>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Renders one independent worksheet with coordinate headers, source range, merge ranges and explicit preview truncation.

Purpose evidence: jsdoc.

Exported as: renderSheet ([electron/engines/excel/markdown.cjs:1](<../../../../../../../electron/engines/excel/markdown.cjs#L1>)).

Lexical owner: [electron/engines/excel/markdown.cjs](<markdown.cjs.md#s-d7d32ae179b76645>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| sheet | any | compiler-inferred | required |
| options | {} | compiler-inferred | optional, default present |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [sheetPage](<markdown.cjs.md#s-93d3e52233fc3f11>) — [electron/engines/excel/markdown.cjs:127](<../../../../../../../electron/engines/excel/markdown.cjs#L127>)
- [escapeMarkdown](<markdown.cjs.md#s-041cac95d57b1be8>) — [electron/engines/excel/markdown.cjs:134](<../../../../../../../electron/engines/excel/markdown.cjs#L134>)
- [escapeMarkdown](<markdown.cjs.md#s-041cac95d57b1be8>) — [electron/engines/excel/markdown.cjs:168](<../../../../../../../electron/engines/excel/markdown.cjs#L168>)

**Called by (statically resolved):**

- [renderWorkbook.sheetOutput](<markdown.cjs.md#s-d0557db4d7571f6d>) — [electron/engines/excel/markdown.cjs:192](<../../../../../../../electron/engines/excel/markdown.cjs#L192>)
- [&lt;anonymous@175:66&gt;](<../../excel-engine.test.cjs.md#s-a641b08ec0e44f5f>) — [electron/excel-engine.test.cjs:192](<../../../../../../../electron/excel-engine.test.cjs#L192>)
- [createExcelService.request](<../../excel-service.cjs.md#s-7424ee532b0e8969>) — [electron/excel-service.cjs:197](<../../../../../../../electron/excel-service.cjs#L197>)

Unresolved / external call sites: 13.

- lines.push — external-or-dynamic-dispatch; [electron/engines/excel/markdown.cjs:139](<../../../../../../../electron/engines/excel/markdown.cjs#L139>)
- lines.push — external-or-dynamic-dispatch; [electron/engines/excel/markdown.cjs:143](<../../../../../../../electron/engines/excel/markdown.cjs#L143>)
- lines.push — external-or-dynamic-dispatch; [electron/engines/excel/markdown.cjs:145](<../../../../../../../electron/engines/excel/markdown.cjs#L145>)
- page.columns.join — external-or-dynamic-dispatch; [electron/engines/excel/markdown.cjs:146](<../../../../../../../electron/engines/excel/markdown.cjs#L146>)
- page.columns .map(function separator() { return "---&#124;"; }) .join — external-or-dynamic-dispatch; [electron/engines/excel/markdown.cjs:147](<../../../../../../../electron/engines/excel/markdown.cjs#L147>)
- page.columns .map — external-or-dynamic-dispatch; [electron/engines/excel/markdown.cjs:147](<../../../../../../../electron/engines/excel/markdown.cjs#L147>)
- lines.push — external-or-dynamic-dispatch; [electron/engines/excel/markdown.cjs:154](<../../../../../../../electron/engines/excel/markdown.cjs#L154>)
- row.cells .map(function content(cell) { return escapeMarkdown(cell.text); }) .join — external-or-dynamic-dispatch; [electron/engines/excel/markdown.cjs:155](<../../../../../../../electron/engines/excel/markdown.cjs#L155>)
- 5 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/excel-engine.test.cjs:192](<../../../../../../../electron/excel-engine.test.cjs#L192>) — static-call-site; coverage not established.

<a id="s-4934a91cf30535ca"></a>

## renderSheet.separator

[electron/engines/excel/markdown.cjs:148](<../../../../../../../electron/engines/excel/markdown.cjs#L148>) · FunctionExpression · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [renderSheet](<markdown.cjs.md#s-7f549847601d4399>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: string (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-31e17eff29a4625d"></a>

## renderSheet.content

[electron/engines/excel/markdown.cjs:156](<../../../../../../../electron/engines/excel/markdown.cjs#L156>) · FunctionExpression · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [renderSheet](<markdown.cjs.md#s-7f549847601d4399>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| cell | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [escapeMarkdown](<markdown.cjs.md#s-041cac95d57b1be8>) — [electron/engines/excel/markdown.cjs:157](<../../../../../../../electron/engines/excel/markdown.cjs#L157>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-6172ce5abfe311d1"></a>

## renderWorkbook

[electron/engines/excel/markdown.cjs:173](<../../../../../../../electron/engines/excel/markdown.cjs#L173>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Derives a combined workbook Markdown export in original order. Full export rejects excessive rectangular expansion; it never silently truncates.

Purpose evidence: jsdoc.

Exported as: renderWorkbook ([electron/engines/excel/markdown.cjs:1](<../../../../../../../electron/engines/excel/markdown.cjs#L1>)).

Lexical owner: [electron/engines/excel/markdown.cjs](<markdown.cjs.md#s-d7d32ae179b76645>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| workbook | any | compiler-inferred | required |
| options | {} | compiler-inferred | optional, default present |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [escapeMarkdown](<markdown.cjs.md#s-041cac95d57b1be8>) — [electron/engines/excel/markdown.cjs:190](<../../../../../../../electron/engines/excel/markdown.cjs#L190>)

**Called by (statically resolved):**

- [main](<cli.cjs.md#s-231ea947544cc1a2>) — [electron/engines/excel/cli.cjs:11](<../../../../../../../electron/engines/excel/cli.cjs#L11>)
- [run](<worker.cjs.md#s-99969392f81e3cf1>) — [electron/engines/excel/worker.cjs:47](<../../../../../../../electron/engines/excel/worker.cjs#L47>)
- [run](<worker.cjs.md#s-99969392f81e3cf1>) — [electron/engines/excel/worker.cjs:73](<../../../../../../../electron/engines/excel/worker.cjs#L73>)
- [&lt;anonymous@230:77&gt;](<../../excel-engine.test.cjs.md#s-09f9e188920d9d81>) — [electron/excel-engine.test.cjs:244](<../../../../../../../electron/excel-engine.test.cjs#L244>)
- [&lt;anonymous@230:77&gt;.&lt;anonymous@259:5&gt;](<../../excel-engine.test.cjs.md#s-99412c92e2be6401>) — [electron/excel-engine.test.cjs:259](<../../../../../../../electron/excel-engine.test.cjs#L259>)

Unresolved / external call sites: 7.

- workbook.sheets.reduce — external-or-dynamic-dispatch; [electron/engines/excel/markdown.cjs:175](<../../../../../../../electron/engines/excel/markdown.cjs#L175>)
- Error — external-or-dynamic-dispatch; [electron/engines/excel/markdown.cjs:185](<../../../../../../../electron/engines/excel/markdown.cjs#L185>)
- &#91; &#96;# Workbook: ${escapeMarkdown(workbook.workbook)}&#96;, ...workbook.sheets.map(function sheetOutput(sheet) { return renderSheet(sheet, options); }), ...workbook.warnings.map(function — external-or-dynamic-dispatch; [electron/engines/excel/markdown.cjs:189](<../../../../../../../electron/engines/excel/markdown.cjs#L189>)
- workbook.sheets.map — external-or-dynamic-dispatch; [electron/engines/excel/markdown.cjs:191](<../../../../../../../electron/engines/excel/markdown.cjs#L191>)
- workbook.warnings.map — external-or-dynamic-dispatch; [electron/engines/excel/markdown.cjs:194](<../../../../../../../electron/engines/excel/markdown.cjs#L194>)
- Buffer.byteLength — external-or-dynamic-dispatch; [electron/engines/excel/markdown.cjs:198](<../../../../../../../electron/engines/excel/markdown.cjs#L198>)
- Error — external-or-dynamic-dispatch; [electron/engines/excel/markdown.cjs:199](<../../../../../../../electron/engines/excel/markdown.cjs#L199>)

**Related tests / acceptance harnesses:**

- [electron/excel-engine.test.cjs:244](<../../../../../../../electron/excel-engine.test.cjs#L244>) — static-call-site; coverage not established.
- [electron/excel-engine.test.cjs:259](<../../../../../../../electron/excel-engine.test.cjs#L259>) — static-call-site; coverage not established.

<a id="s-3c3c436ff9fec112"></a>

## renderWorkbook.sum

[electron/engines/excel/markdown.cjs:175](<../../../../../../../electron/engines/excel/markdown.cjs#L175>) · FunctionExpression · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [renderWorkbook](<markdown.cjs.md#s-6172ce5abfe311d1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| total | any | compiler-inferred | required |
| sheet | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d0557db4d7571f6d"></a>

## renderWorkbook.sheetOutput

[electron/engines/excel/markdown.cjs:191](<../../../../../../../electron/engines/excel/markdown.cjs#L191>) · FunctionExpression · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [renderWorkbook](<markdown.cjs.md#s-6172ce5abfe311d1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| sheet | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [renderSheet](<markdown.cjs.md#s-7f549847601d4399>) — [electron/engines/excel/markdown.cjs:192](<../../../../../../../electron/engines/excel/markdown.cjs#L192>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-bb374282f6949b86"></a>

## renderWorkbook.warning

[electron/engines/excel/markdown.cjs:194](<../../../../../../../electron/engines/excel/markdown.cjs#L194>) · FunctionExpression · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [renderWorkbook](<markdown.cjs.md#s-6172ce5abfe311d1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: string (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [escapeMarkdown](<markdown.cjs.md#s-041cac95d57b1be8>) — [electron/engines/excel/markdown.cjs:195](<../../../../../../../electron/engines/excel/markdown.cjs#L195>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
