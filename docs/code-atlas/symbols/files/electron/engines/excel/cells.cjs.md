# electron/engines/excel/cells.cjs: symbols

[Atlas](<../../../../../README.md>) / [Built-in Engines and data adapters](<../../../../../modules/engines.md>) / [electron/engines/excel/cells.cjs:1](<../../../../../../../electron/engines/excel/cells.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/engines/excel/cells.cjs](<cells.cjs.md#s-22e3272448e98603>) (Module)
- [BUILTIN_FORMATS](<cells.cjs.md#s-cc90c44a5d213d65>) (VariableDeclaration)
- [columnLabel](<cells.cjs.md#s-ac5b4cb26566b461>) (FunctionDeclaration)
- [coordinate](<cells.cjs.md#s-76ebba55c47be81e>) (FunctionDeclaration)
- [sourceRange](<cells.cjs.md#s-41ef365c38be5e42>) (FunctionDeclaration)
- [decodeString](<cells.cjs.md#s-d206b02e64680711>) (FunctionDeclaration)
- [decodeString.decode](<cells.cjs.md#s-eedc403cd8738840>) (FunctionExpression)
- [formatMeaning](<cells.cjs.md#s-2b6e4b338bd31396>) (FunctionDeclaration)
- [serialDisplay](<cells.cjs.md#s-368a2cd360bdde2e>) (FunctionDeclaration)
- [scalar](<cells.cjs.md#s-4eb4d6705cc6fcdc>) (FunctionDeclaration)
- [numericDisplay](<cells.cjs.md#s-5e11b737cba26b5d>) (FunctionDeclaration)

<a id="s-22e3272448e98603"></a>

## electron/engines/excel/cells.cjs

[electron/engines/excel/cells.cjs:1](<../../../../../../../electron/engines/excel/cells.cjs#L1>) · Module · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- require — module-loader; [electron/engines/excel/cells.cjs:1](<../../../../../../../electron/engines/excel/cells.cjs#L1>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-cc90c44a5d213d65"></a>

## BUILTIN_FORMATS

[electron/engines/excel/cells.cjs:2](<../../../../../../../electron/engines/excel/cells.cjs#L2>) · VariableDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: BUILTIN_FORMATS ([electron/engines/excel/cells.cjs:1](<../../../../../../../electron/engines/excel/cells.cjs#L1>)).

Lexical owner: [electron/engines/excel/cells.cjs](<cells.cjs.md#s-22e3272448e98603>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-ac5b4cb26566b461"></a>

## columnLabel

[electron/engines/excel/cells.cjs:34](<../../../../../../../electron/engines/excel/cells.cjs#L34>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Returns an Excel column label for a validated one-based column number.

Purpose evidence: jsdoc.

Exported as: columnLabel ([electron/engines/excel/cells.cjs:1](<../../../../../../../electron/engines/excel/cells.cjs#L1>)).

Lexical owner: [electron/engines/excel/cells.cjs](<cells.cjs.md#s-22e3272448e98603>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| column | any | compiler-inferred | required |

Returns: string (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [sheetPage](<markdown.cjs.md#s-93d3e52233fc3f11>) — [electron/engines/excel/markdown.cjs:81](<../../../../../../../electron/engines/excel/markdown.cjs#L81>)
- [scanSheet.open](<reader.cjs.md#s-9d431bc6c32e24e6>) — [electron/engines/excel/reader.cjs:149](<../../../../../../../electron/engines/excel/reader.cjs#L149>)
- [scanSheet](<reader.cjs.md#s-6c47ea2781b8b406>) — [electron/engines/excel/reader.cjs:303](<../../../../../../../electron/engines/excel/reader.cjs#L303>)
- [scanSheet](<reader.cjs.md#s-6c47ea2781b8b406>) — [electron/engines/excel/reader.cjs:303](<../../../../../../../electron/engines/excel/reader.cjs#L303>)

Unresolved / external call sites: 2.

- Math.floor — external-or-dynamic-dispatch; [electron/engines/excel/cells.cjs:36](<../../../../../../../electron/engines/excel/cells.cjs#L36>)
- String.fromCharCode — external-or-dynamic-dispatch; [electron/engines/excel/cells.cjs:37](<../../../../../../../electron/engines/excel/cells.cjs#L37>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-76ebba55c47be81e"></a>

## coordinate

[electron/engines/excel/cells.cjs:42](<../../../../../../../electron/engines/excel/cells.cjs#L42>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Parses a real XLSX coordinate, rejecting out-of-grid or malformed references rather than shifting cells.

Purpose evidence: jsdoc.

Exported as: coordinate ([electron/engines/excel/cells.cjs:1](<../../../../../../../electron/engines/excel/cells.cjs#L1>)).

Lexical owner: [electron/engines/excel/cells.cjs](<cells.cjs.md#s-22e3272448e98603>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| address | any | compiler-inferred | required |

Returns: { row: any; column: number; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [sourceRange](<cells.cjs.md#s-41ef365c38be5e42>) — [electron/engines/excel/cells.cjs:58](<../../../../../../../electron/engines/excel/cells.cjs#L58>)
- [sourceRange](<cells.cjs.md#s-41ef365c38be5e42>) — [electron/engines/excel/cells.cjs:59](<../../../../../../../electron/engines/excel/cells.cjs#L59>)
- [scanSheet.open](<reader.cjs.md#s-9d431bc6c32e24e6>) — [electron/engines/excel/reader.cjs:150](<../../../../../../../electron/engines/excel/reader.cjs#L150>)

Unresolved / external call sites: 5.

- /^(&#91;A-Z&#93;{1,3})(&#91;1-9&#93;\\d{0,6})$/.exec — external-or-dynamic-dispatch; [electron/engines/excel/cells.cjs:43](<../../../../../../../electron/engines/excel/cells.cjs#L43>)
- Error — external-or-dynamic-dispatch; [electron/engines/excel/cells.cjs:44](<../../../../../../../electron/engines/excel/cells.cjs#L44>)
- character.charCodeAt — external-or-dynamic-dispatch; [electron/engines/excel/cells.cjs:47](<../../../../../../../electron/engines/excel/cells.cjs#L47>)
- Number — external-or-dynamic-dispatch; [electron/engines/excel/cells.cjs:48](<../../../../../../../electron/engines/excel/cells.cjs#L48>)
- Error — external-or-dynamic-dispatch; [electron/engines/excel/cells.cjs:50](<../../../../../../../electron/engines/excel/cells.cjs#L50>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-41ef365c38be5e42"></a>

## sourceRange

[electron/engines/excel/cells.cjs:55](<../../../../../../../electron/engines/excel/cells.cjs#L55>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Parses and validates an inclusive worksheet range, returning its original bounds.

Purpose evidence: jsdoc.

Exported as: sourceRange ([electron/engines/excel/cells.cjs:1](<../../../../../../../electron/engines/excel/cells.cjs#L1>)).

Lexical owner: [electron/engines/excel/cells.cjs](<cells.cjs.md#s-22e3272448e98603>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: { startRow: any; startColumn: number; endRow: any; endColumn: number; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [coordinate](<cells.cjs.md#s-76ebba55c47be81e>) — [electron/engines/excel/cells.cjs:58](<../../../../../../../electron/engines/excel/cells.cjs#L58>)
- [coordinate](<cells.cjs.md#s-76ebba55c47be81e>) — [electron/engines/excel/cells.cjs:59](<../../../../../../../electron/engines/excel/cells.cjs#L59>)

**Called by (statically resolved):**

- [scanSheet.open](<reader.cjs.md#s-9d431bc6c32e24e6>) — [electron/engines/excel/reader.cjs:180](<../../../../../../../electron/engines/excel/reader.cjs#L180>)
- [scanSheet](<reader.cjs.md#s-6c47ea2781b8b406>) — [electron/engines/excel/reader.cjs:293](<../../../../../../../electron/engines/excel/reader.cjs#L293>)

Unresolved / external call sites: 3.

- value.split — external-or-dynamic-dispatch; [electron/engines/excel/cells.cjs:56](<../../../../../../../electron/engines/excel/cells.cjs#L56>)
- Error — external-or-dynamic-dispatch; [electron/engines/excel/cells.cjs:57](<../../../../../../../electron/engines/excel/cells.cjs#L57>)
- Error — external-or-dynamic-dispatch; [electron/engines/excel/cells.cjs:61](<../../../../../../../electron/engines/excel/cells.cjs#L61>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d206b02e64680711"></a>

## decodeString

[electron/engines/excel/cells.cjs:71](<../../../../../../../electron/engines/excel/cells.cjs#L71>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Decodes OOXML escaped control characters in one pass, preserving escaped literal _xNNNN_ sequences.

Purpose evidence: jsdoc.

Exported as: decodeString ([electron/engines/excel/cells.cjs:1](<../../../../../../../electron/engines/excel/cells.cjs#L1>)).

Lexical owner: [electron/engines/excel/cells.cjs](<cells.cjs.md#s-22e3272448e98603>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| text | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [scalar](<cells.cjs.md#s-4eb4d6705cc6fcdc>) — [electron/engines/excel/cells.cjs:124](<../../../../../../../electron/engines/excel/cells.cjs#L124>)
- [readStrings.close](<reader.cjs.md#s-9350ea506037b753>) — [electron/engines/excel/reader.cjs:110](<../../../../../../../electron/engines/excel/reader.cjs#L110>)

Unresolved / external call sites: 1.

- text.replace — external-or-dynamic-dispatch; [electron/engines/excel/cells.cjs:72](<../../../../../../../electron/engines/excel/cells.cjs#L72>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-eedc403cd8738840"></a>

## decodeString.decode

[electron/engines/excel/cells.cjs:72](<../../../../../../../electron/engines/excel/cells.cjs#L72>) · FunctionExpression · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [decodeString](<cells.cjs.md#s-d206b02e64680711>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| _ | any | compiler-inferred | required |
| digits | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- String.fromCharCode — external-or-dynamic-dispatch; [electron/engines/excel/cells.cjs:73](<../../../../../../../electron/engines/excel/cells.cjs#L73>)
- parseInt — external-or-dynamic-dispatch; [electron/engines/excel/cells.cjs:73](<../../../../../../../electron/engines/excel/cells.cjs#L73>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-2b6e4b338bd31396"></a>

## formatMeaning

[electron/engines/excel/cells.cjs:78](<../../../../../../../electron/engines/excel/cells.cjs#L78>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Classifies number-format meaning without pretending to implement Excel's full locale/conditional formatting engine.

Purpose evidence: jsdoc.

Lexical owner: [electron/engines/excel/cells.cjs](<cells.cjs.md#s-22e3272448e98603>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| format | any | compiler-inferred | required |
| id | any | compiler-inferred | required |

Returns: "number" &#124; "date" &#124; "duration" &#124; "datetime" &#124; "time" (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [scalar](<cells.cjs.md#s-4eb4d6705cc6fcdc>) — [electron/engines/excel/cells.cjs:145](<../../../../../../../electron/engines/excel/cells.cjs#L145>)

Unresolved / external call sites: 6.

- format.replace — external-or-dynamic-dispatch; [electron/engines/excel/cells.cjs:79](<../../../../../../../electron/engines/excel/cells.cjs#L79>)
- /\\&#91;&#91;hms&#93;+\\&#93;/i.test — external-or-dynamic-dispatch; [electron/engines/excel/cells.cjs:80](<../../../../../../../electron/engines/excel/cells.cjs#L80>)
- /&#91;yd&#93;/i.test — external-or-dynamic-dispatch; [electron/engines/excel/cells.cjs:82](<../../../../../../../electron/engines/excel/cells.cjs#L82>)
- /&#91;hs&#93;/i.test — external-or-dynamic-dispatch; [electron/engines/excel/cells.cjs:87](<../../../../../../../electron/engines/excel/cells.cjs#L87>)
- /&#91;hs&#93;/i.test — external-or-dynamic-dispatch; [electron/engines/excel/cells.cjs:88](<../../../../../../../electron/engines/excel/cells.cjs#L88>)
- /^&#91;m&#93;+&#91;:/&#93;/i.test — external-or-dynamic-dispatch; [electron/engines/excel/cells.cjs:88](<../../../../../../../electron/engines/excel/cells.cjs#L88>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-368a2cd360bdde2e"></a>

## serialDisplay

[electron/engines/excel/cells.cjs:93](<../../../../../../../electron/engines/excel/cells.cjs#L93>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Renders a serial deterministically in UTC; preserves the fictitious Excel 1900 leap day explicitly.

Purpose evidence: jsdoc.

Lexical owner: [electron/engines/excel/cells.cjs](<cells.cjs.md#s-22e3272448e98603>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |
| meaning | any | compiler-inferred | required |
| dateSystem | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [scalar](<cells.cjs.md#s-4eb4d6705cc6fcdc>) — [electron/engines/excel/cells.cjs:147](<../../../../../../../electron/engines/excel/cells.cjs#L147>)

Unresolved / external call sites: 11.

- Math.floor — external-or-dynamic-dispatch; [electron/engines/excel/cells.cjs:95](<../../../../../../../electron/engines/excel/cells.cjs#L95>)
- Math.round — external-or-dynamic-dispatch; [electron/engines/excel/cells.cjs:96](<../../../../../../../electron/engines/excel/cells.cjs#L96>)
- new Date(milliseconds) .toISOString() .slice(11, 23) .replace — external-or-dynamic-dispatch; [electron/engines/excel/cells.cjs:97](<../../../../../../../electron/engines/excel/cells.cjs#L97>)
- new Date(milliseconds) .toISOString() .slice — external-or-dynamic-dispatch; [electron/engines/excel/cells.cjs:97](<../../../../../../../electron/engines/excel/cells.cjs#L97>)
- new Date(milliseconds) .toISOString — external-or-dynamic-dispatch; [electron/engines/excel/cells.cjs:97](<../../../../../../../electron/engines/excel/cells.cjs#L97>)
- Date — external-or-dynamic-dispatch; [electron/engines/excel/cells.cjs:97](<../../../../../../../electron/engines/excel/cells.cjs#L97>)
- Date.UTC — external-or-dynamic-dispatch; [electron/engines/excel/cells.cjs:104](<../../../../../../../electron/engines/excel/cells.cjs#L104>)
- Date.UTC — external-or-dynamic-dispatch; [electron/engines/excel/cells.cjs:104](<../../../../../../../electron/engines/excel/cells.cjs#L104>)
- 3 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-4eb4d6705cc6fcdc"></a>

## scalar

[electron/engines/excel/cells.cjs:113](<../../../../../../../electron/engines/excel/cells.cjs#L113>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Converts a stored scalar to typed data and deterministic display, retaining raw XML and format metadata separately. Throws on invalid scalar data.

Purpose evidence: jsdoc.

Exported as: scalar ([electron/engines/excel/cells.cjs:1](<../../../../../../../electron/engines/excel/cells.cjs#L1>)).

Lexical owner: [electron/engines/excel/cells.cjs](<cells.cjs.md#s-22e3272448e98603>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| raw | any | compiler-inferred | required |
| storageType | any | compiler-inferred | required |
| format | any | compiler-inferred | required |
| formatId | any | compiler-inferred | required |
| strings | any | compiler-inferred | required |
| dateSystem | any | compiler-inferred | required |

Returns: { type: string; value: any; display: any; } &#124; { display: any; displayWarning: string; type: string; value: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [decodeString](<cells.cjs.md#s-d206b02e64680711>) — [electron/engines/excel/cells.cjs:124](<../../../../../../../electron/engines/excel/cells.cjs#L124>)
- [formatMeaning](<cells.cjs.md#s-2b6e4b338bd31396>) — [electron/engines/excel/cells.cjs:145](<../../../../../../../electron/engines/excel/cells.cjs#L145>)
- [serialDisplay](<cells.cjs.md#s-368a2cd360bdde2e>) — [electron/engines/excel/cells.cjs:147](<../../../../../../../electron/engines/excel/cells.cjs#L147>)
- [numericDisplay](<cells.cjs.md#s-5e11b737cba26b5d>) — [electron/engines/excel/cells.cjs:148](<../../../../../../../electron/engines/excel/cells.cjs#L148>)

**Called by (statically resolved):**

- [scanSheet.close](<reader.cjs.md#s-c6c859ecdb7e7f40>) — [electron/engines/excel/reader.cjs:222](<../../../../../../../electron/engines/excel/reader.cjs#L222>)

Unresolved / external call sites: 13.

- /^\\d+$/.test — external-or-dynamic-dispatch; [electron/engines/excel/cells.cjs:115](<../../../../../../../electron/engines/excel/cells.cjs#L115>)
- Number — external-or-dynamic-dispatch; [electron/engines/excel/cells.cjs:115](<../../../../../../../electron/engines/excel/cells.cjs#L115>)
- Error — external-or-dynamic-dispatch; [electron/engines/excel/cells.cjs:116](<../../../../../../../electron/engines/excel/cells.cjs#L116>)
- Number — external-or-dynamic-dispatch; [electron/engines/excel/cells.cjs:119](<../../../../../../../electron/engines/excel/cells.cjs#L119>)
- Number — external-or-dynamic-dispatch; [electron/engines/excel/cells.cjs:120](<../../../../../../../electron/engines/excel/cells.cjs#L120>)
- &#91;"inlineStr", "str"&#93;.includes — external-or-dynamic-dispatch; [electron/engines/excel/cells.cjs:123](<../../../../../../../electron/engines/excel/cells.cjs#L123>)
- Error — external-or-dynamic-dispatch; [electron/engines/excel/cells.cjs:128](<../../../../../../../electron/engines/excel/cells.cjs#L128>)
- Error — external-or-dynamic-dispatch; [electron/engines/excel/cells.cjs:138](<../../../../../../../electron/engines/excel/cells.cjs#L138>)
- 5 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-5e11b737cba26b5d"></a>

## numericDisplay

[electron/engines/excel/cells.cjs:152](<../../../../../../../electron/engines/excel/cells.cjs#L152>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Formats a saved number with inert spreadsheet format rules. Unsupported formats return raw text plus an explicit metadata warning, never inline format-code clutter.

Purpose evidence: jsdoc.

Lexical owner: [electron/engines/excel/cells.cjs](<cells.cjs.md#s-22e3272448e98603>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |
| raw | any | compiler-inferred | required |
| format | any | compiler-inferred | required |

Returns: { display: any; displayWarning: string; } &#124; { display: string; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [scalar](<cells.cjs.md#s-4eb4d6705cc6fcdc>) — [electron/engines/excel/cells.cjs:148](<../../../../../../../electron/engines/excel/cells.cjs#L148>)

Unresolved / external call sites: 2.

- format.startsWith — external-or-dynamic-dispatch; [electron/engines/excel/cells.cjs:158](<../../../../../../../electron/engines/excel/cells.cjs#L158>)
- SSF.format — external-or-dynamic-dispatch; [electron/engines/excel/cells.cjs:160](<../../../../../../../electron/engines/excel/cells.cjs#L160>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
