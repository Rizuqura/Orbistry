# electron/engines/excel/worker.cjs: symbols

[Atlas](<../../../../../README.md>) / [Built-in Engines and data adapters](<../../../../../modules/engines.md>) / [electron/engines/excel/worker.cjs:1](<../../../../../../../electron/engines/excel/worker.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/engines/excel/worker.cjs](<worker.cjs.md#s-87a7aeae669b0456>) (Module)
- [readFile](<worker.cjs.md#s-79848e721173902e>) (FunctionDeclaration)
- [run](<worker.cjs.md#s-99969392f81e3cf1>) (FunctionDeclaration)
- [run.selected](<worker.cjs.md#s-19b6655fb9b257e1>) (FunctionExpression)

<a id="s-87a7aeae669b0456"></a>

## electron/engines/excel/worker.cjs

[electron/engines/excel/worker.cjs:1](<../../../../../../../electron/engines/excel/worker.cjs#L1>) · Module · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

- [run](<worker.cjs.md#s-99969392f81e3cf1>) — [electron/engines/excel/worker.cjs:81](<../../../../../../../electron/engines/excel/worker.cjs#L81>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 6.

- require — module-loader; [electron/engines/excel/worker.cjs:1](<../../../../../../../electron/engines/excel/worker.cjs#L1>)
- require — module-loader; [electron/engines/excel/worker.cjs:2](<../../../../../../../electron/engines/excel/worker.cjs#L2>)
- require — module-loader; [electron/engines/excel/worker.cjs:3](<../../../../../../../electron/engines/excel/worker.cjs#L3>)
- require — module-loader; [electron/engines/excel/worker.cjs:4](<../../../../../../../electron/engines/excel/worker.cjs#L4>)
- require — module-loader; [electron/engines/excel/worker.cjs:5](<../../../../../../../electron/engines/excel/worker.cjs#L5>)
- require — module-loader; [electron/engines/excel/worker.cjs:6](<../../../../../../../electron/engines/excel/worker.cjs#L6>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-79848e721173902e"></a>

## readFile

[electron/engines/excel/worker.cjs:9](<../../../../../../../electron/engines/excel/worker.cjs#L9>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Reads a bounded stable source snapshot; opens read-only and never writes or recalculates the workbook.

Purpose evidence: jsdoc.

Lexical owner: [electron/engines/excel/worker.cjs](<worker.cjs.md#s-87a7aeae669b0456>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| filename | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [run](<worker.cjs.md#s-99969392f81e3cf1>) — [electron/engines/excel/worker.cjs:64](<../../../../../../../electron/engines/excel/worker.cjs#L64>)

Unresolved / external call sites: 10.

- fs.open — external-or-dynamic-dispatch; [electron/engines/excel/worker.cjs:10](<../../../../../../../electron/engines/excel/worker.cjs#L10>)
- file.stat — external-or-dynamic-dispatch; [electron/engines/excel/worker.cjs:12](<../../../../../../../electron/engines/excel/worker.cjs#L12>)
- before.isFile — external-or-dynamic-dispatch; [electron/engines/excel/worker.cjs:13](<../../../../../../../electron/engines/excel/worker.cjs#L13>)
- Error — external-or-dynamic-dispatch; [electron/engines/excel/worker.cjs:14](<../../../../../../../electron/engines/excel/worker.cjs#L14>)
- Buffer.alloc — external-or-dynamic-dispatch; [electron/engines/excel/worker.cjs:15](<../../../../../../../electron/engines/excel/worker.cjs#L15>)
- file.read — external-or-dynamic-dispatch; [electron/engines/excel/worker.cjs:18](<../../../../../../../electron/engines/excel/worker.cjs#L18>)
- file.stat — external-or-dynamic-dispatch; [electron/engines/excel/worker.cjs:27](<../../../../../../../electron/engines/excel/worker.cjs#L27>)
- Error — external-or-dynamic-dispatch; [electron/engines/excel/worker.cjs:34](<../../../../../../../electron/engines/excel/worker.cjs#L34>)
- 2 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-99969392f81e3cf1"></a>

## run

[electron/engines/excel/worker.cjs:42](<../../../../../../../electron/engines/excel/worker.cjs#L42>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Produces serializable structured data and bounded Markdown from one immutable snapshot, returning explicit errors to the worker owner.

Purpose evidence: jsdoc.

Lexical owner: [electron/engines/excel/worker.cjs](<worker.cjs.md#s-87a7aeae669b0456>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [renderWorkbook](<markdown.cjs.md#s-6172ce5abfe311d1>) — [electron/engines/excel/worker.cjs:47](<../../../../../../../electron/engines/excel/worker.cjs#L47>)
- [resultWorkbook](<results.cjs.md#s-974d6f7f769fd520>) — [electron/engines/excel/worker.cjs:53](<../../../../../../../electron/engines/excel/worker.cjs#L53>)
- [readFile](<worker.cjs.md#s-79848e721173902e>) — [electron/engines/excel/worker.cjs:64](<../../../../../../../electron/engines/excel/worker.cjs#L64>)
- [readWorkbook](<reader.cjs.md#s-7de6d1652c8afc11>) — [electron/engines/excel/worker.cjs:65](<../../../../../../../electron/engines/excel/worker.cjs#L65>)
- [renderWorkbook](<markdown.cjs.md#s-6172ce5abfe311d1>) — [electron/engines/excel/worker.cjs:73](<../../../../../../../electron/engines/excel/worker.cjs#L73>)

**Called by (statically resolved):**

- [electron/engines/excel/worker.cjs](<worker.cjs.md#s-87a7aeae669b0456>) — [electron/engines/excel/worker.cjs:81](<../../../../../../../electron/engines/excel/worker.cjs#L81>)

Unresolved / external call sites: 12.

- JSON.stringify — external-or-dynamic-dispatch; [electron/engines/excel/worker.cjs:51](<../../../../../../../electron/engines/excel/worker.cjs#L51>)
- Buffer.byteLength — external-or-dynamic-dispatch; [electron/engines/excel/worker.cjs:56](<../../../../../../../electron/engines/excel/worker.cjs#L56>)
- Error — external-or-dynamic-dispatch; [electron/engines/excel/worker.cjs:57](<../../../../../../../electron/engines/excel/worker.cjs#L57>)
- parentPort.postMessage — external-or-dynamic-dispatch; [electron/engines/excel/worker.cjs:58](<../../../../../../../electron/engines/excel/worker.cjs#L58>)
- Buffer.from — external-or-dynamic-dispatch; [electron/engines/excel/worker.cjs:64](<../../../../../../../electron/engines/excel/worker.cjs#L64>)
- result.sheets.filter — external-or-dynamic-dispatch; [electron/engines/excel/worker.cjs:67](<../../../../../../../electron/engines/excel/worker.cjs#L67>)
- Error — external-or-dynamic-dispatch; [electron/engines/excel/worker.cjs:71](<../../../../../../../electron/engines/excel/worker.cjs#L71>)
- Buffer.byteLength — external-or-dynamic-dispatch; [electron/engines/excel/worker.cjs:74](<../../../../../../../electron/engines/excel/worker.cjs#L74>)
- 4 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-19b6655fb9b257e1"></a>

## run.selected

[electron/engines/excel/worker.cjs:67](<../../../../../../../electron/engines/excel/worker.cjs#L67>) · FunctionExpression · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [run](<worker.cjs.md#s-99969392f81e3cf1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| sheet | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
