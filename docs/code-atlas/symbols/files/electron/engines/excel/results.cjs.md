# electron/engines/excel/results.cjs: symbols

[Atlas](<../../../../../README.md>) / [Built-in Engines and data adapters](<../../../../../modules/engines.md>) / [electron/engines/excel/results.cjs:1](<../../../../../../../electron/engines/excel/results.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/engines/excel/results.cjs](<results.cjs.md#s-f93d4d12ca4ebd31>) (Module)
- [resultCell](<results.cjs.md#s-632bdd207205e03a>) (FunctionDeclaration)
- [resultPage](<results.cjs.md#s-52108a0228c7c222>) (FunctionDeclaration)
- [resultPage.rowResults](<results.cjs.md#s-2035e9076240d86a>) (FunctionExpression)
- [resultPage.rowResults.cellResult](<results.cjs.md#s-b41a878ada087ae7>) (FunctionExpression)
- [resultWorkbook](<results.cjs.md#s-974d6f7f769fd520>) (FunctionDeclaration)
- [resultWorkbook.sheetResults](<results.cjs.md#s-2989380eb18fb6f5>) (FunctionExpression)

<a id="s-f93d4d12ca4ebd31"></a>

## electron/engines/excel/results.cjs

[electron/engines/excel/results.cjs:1](<../../../../../../../electron/engines/excel/results.cjs#L1>) · Module · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- require — module-loader; [electron/engines/excel/results.cjs:1](<../../../../../../../electron/engines/excel/results.cjs#L1>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-632bdd207205e03a"></a>

## resultCell

[electron/engines/excel/results.cjs:4](<../../../../../../../electron/engines/excel/results.cjs#L4>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Converts one extracted cell into coordinate-addressed final text for Knowledge Card delivery. Numeric styling follows the saved result type.

Purpose evidence: jsdoc.

Lexical owner: [electron/engines/excel/results.cjs](<results.cjs.md#s-f93d4d12ca4ebd31>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| cell | any | compiler-inferred | required |

Returns: { coordinate: any; row: any; column: any; text: any; isNumeric: boolean; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [cellText](<markdown.cjs.md#s-deea042075c6b363>) — [electron/engines/excel/results.cjs:10](<../../../../../../../electron/engines/excel/results.cjs#L10>)

**Called by (statically resolved):**

- [resultPage.rowResults.cellResult](<results.cjs.md#s-b41a878ada087ae7>) — [electron/engines/excel/results.cjs:25](<../../../../../../../electron/engines/excel/results.cjs#L25>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-52108a0228c7c222"></a>

## resultPage

[electron/engines/excel/results.cjs:16](<../../../../../../../electron/engines/excel/results.cjs#L16>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Projects a bounded worksheet page into final text and display hints for the Portal. Original coordinates and blank positions remain explicit.

Purpose evidence: jsdoc.

Exported as: resultPage ([electron/engines/excel/results.cjs:1](<../../../../../../../electron/engines/excel/results.cjs#L1>)).

Lexical owner: [electron/engines/excel/results.cjs](<results.cjs.md#s-f93d4d12ca4ebd31>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| sheet | any | compiler-inferred | required |
| options | {} | compiler-inferred | optional, default present |

Returns: { rows: any; columns: {}; truncated: boolean; rowOffset: number; columnOffset: number; totalRows: number; totalColumns: number; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [sheetPage](<markdown.cjs.md#s-93d3e52233fc3f11>) — [electron/engines/excel/results.cjs:17](<../../../../../../../electron/engines/excel/results.cjs#L17>)

**Called by (statically resolved):**

- [createExcelService.request](<../../excel-service.cjs.md#s-7424ee532b0e8969>) — [electron/excel-service.cjs:173](<../../../../../../../electron/excel-service.cjs#L173>)

Unresolved / external call sites: 1.

- page.rows.map — external-or-dynamic-dispatch; [electron/engines/excel/results.cjs:20](<../../../../../../../electron/engines/excel/results.cjs#L20>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-2035e9076240d86a"></a>

## resultPage.rowResults

[electron/engines/excel/results.cjs:20](<../../../../../../../electron/engines/excel/results.cjs#L20>) · FunctionExpression · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [resultPage](<results.cjs.md#s-52108a0228c7c222>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| row | any | compiler-inferred | required |

Returns: { number: any; cells: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- row.cells.map — external-or-dynamic-dispatch; [electron/engines/excel/results.cjs:23](<../../../../../../../electron/engines/excel/results.cjs#L23>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-b41a878ada087ae7"></a>

## resultPage.rowResults.cellResult

[electron/engines/excel/results.cjs:23](<../../../../../../../electron/engines/excel/results.cjs#L23>) · FunctionExpression · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [resultPage.rowResults](<results.cjs.md#s-2035e9076240d86a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| point | any | compiler-inferred | required |

Returns: { coordinate: any; row: any; column: any; text: any; isNumeric: boolean; } &#124; { coordinate: any; text: string; isNumeric: boolean; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [resultCell](<results.cjs.md#s-632bdd207205e03a>) — [electron/engines/excel/results.cjs:25](<../../../../../../../electron/engines/excel/results.cjs#L25>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-974d6f7f769fd520"></a>

## resultWorkbook

[electron/engines/excel/results.cjs:34](<../../../../../../../electron/engines/excel/results.cjs#L34>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Derives a complete sparse text workbook for Knowledge Card JSON exports, including source coordinates and processing status.

Purpose evidence: jsdoc.

Exported as: resultWorkbook ([electron/engines/excel/results.cjs:1](<../../../../../../../electron/engines/excel/results.cjs#L1>)).

Lexical owner: [electron/engines/excel/results.cjs](<results.cjs.md#s-f93d4d12ca4ebd31>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| model | any | compiler-inferred | required |

Returns: { schemaVersion: number; presentation: string; engine: any; engineVersion: any; workbook: any; sourceHash: any; dateSystem: any; warnings: any; sheets: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [run](<worker.cjs.md#s-99969392f81e3cf1>) — [electron/engines/excel/worker.cjs:53](<../../../../../../../electron/engines/excel/worker.cjs#L53>)

Unresolved / external call sites: 1.

- model.sheets.map — external-or-dynamic-dispatch; [electron/engines/excel/results.cjs:44](<../../../../../../../electron/engines/excel/results.cjs#L44>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-2989380eb18fb6f5"></a>

## resultWorkbook.sheetResults

[electron/engines/excel/results.cjs:44](<../../../../../../../electron/engines/excel/results.cjs#L44>) · FunctionExpression · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [resultWorkbook](<results.cjs.md#s-974d6f7f769fd520>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| sheet | any | compiler-inferred | required |

Returns: { name: any; index: any; state: any; range: any; bounds: any; merges: any; warnings: any; cells: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- sheet.cells.map — external-or-dynamic-dispatch; [electron/engines/excel/results.cjs:53](<../../../../../../../electron/engines/excel/results.cjs#L53>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
