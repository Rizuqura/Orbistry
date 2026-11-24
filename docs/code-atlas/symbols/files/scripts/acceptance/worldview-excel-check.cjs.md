# scripts/acceptance/worldview-excel-check.cjs: symbols

[Atlas](<../../../../README.md>) / [Development and acceptance tooling](<../../../../modules/tooling.md>) / [scripts/acceptance/worldview-excel-check.cjs:1](<../../../../../../scripts/acceptance/worldview-excel-check.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/acceptance/worldview-excel-check.cjs](<worldview-excel-check.cjs.md#s-5c12b2e48702af65>) (Module)
- [verifyExcelPreview](<worldview-excel-check.cjs.md#s-22b1dc9a75539a2e>) (FunctionDeclaration)
- [verifyExcelPreview.&lt;anonymous@13:5&gt;](<worldview-excel-check.cjs.md#s-14a41c2b5a3522d2>) (ArrowFunction)
- [verifyExcelPreview.&lt;anonymous@35:5&gt;](<worldview-excel-check.cjs.md#s-47f9956f5378829b>) (ArrowFunction)
- [verifyExcelPreview.&lt;anonymous@60:5&gt;](<worldview-excel-check.cjs.md#s-ddd9ae01ffd1d209>) (ArrowFunction)
- [verifyExcelPreview.&lt;anonymous@78:5&gt;](<worldview-excel-check.cjs.md#s-1b958de40123c756>) (ArrowFunction)
- [verifyExcelPreview.&lt;anonymous@110:37&gt;](<worldview-excel-check.cjs.md#s-58f42d0054dc1a6f>) (ArrowFunction)
- [verifyExcelPreview.&lt;anonymous@127:62&gt;](<worldview-excel-check.cjs.md#s-0529028a6507334a>) (ArrowFunction)
- [verifyExcelPreview.&lt;anonymous@141:41&gt;](<worldview-excel-check.cjs.md#s-978d17c88f512db4>) (ArrowFunction)
- [verifyExcelPreview.&lt;anonymous@159:7&gt;](<worldview-excel-check.cjs.md#s-721c9d5be0a19e65>) (ArrowFunction)
- [verifyExcelPreview.&lt;anonymous@159:7&gt;.&lt;anonymous@160:21&gt;](<worldview-excel-check.cjs.md#s-8bd4a30b28ade656>) (ArrowFunction)
- [verifyExcelPreview.&lt;anonymous@159:7&gt;.&lt;anonymous@160:21&gt;.&lt;anonymous@162:13&gt;](<worldview-excel-check.cjs.md#s-af3e34bef7b19aa2>) (ArrowFunction)
- [verifyExcelPreview.&lt;anonymous@159:7&gt;.&lt;anonymous@160:21&gt;.&lt;anonymous@167:13&gt;](<worldview-excel-check.cjs.md#s-a10b0fe94403a88f>) (ArrowFunction)
- [verifyExcelPreview.&lt;anonymous@159:7&gt;.&lt;anonymous@160:21&gt;.&lt;anonymous@167:13&gt;.&lt;anonymous@169:33&gt;](<worldview-excel-check.cjs.md#s-6e52415cff4d14c7>) (ArrowFunction)

<a id="s-5c12b2e48702af65"></a>

## scripts/acceptance/worldview-excel-check.cjs

[scripts/acceptance/worldview-excel-check.cjs:1](<../../../../../../scripts/acceptance/worldview-excel-check.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- require — module-loader; [scripts/acceptance/worldview-excel-check.cjs:1](<../../../../../../scripts/acceptance/worldview-excel-check.cjs#L1>)
- require — module-loader; [scripts/acceptance/worldview-excel-check.cjs:2](<../../../../../../scripts/acceptance/worldview-excel-check.cjs#L2>)
- require — module-loader; [scripts/acceptance/worldview-excel-check.cjs:3](<../../../../../../scripts/acceptance/worldview-excel-check.cjs#L3>)
- require — module-loader; [scripts/acceptance/worldview-excel-check.cjs:4](<../../../../../../scripts/acceptance/worldview-excel-check.cjs#L4>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:13](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L13>) — file-import-only; coverage not established.

<a id="s-22b1dc9a75539a2e"></a>

## verifyExcelPreview

[scripts/acceptance/worldview-excel-check.cjs:7](<../../../../../../scripts/acceptance/worldview-excel-check.cjs#L7>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Exercises real Knowledge Card assignment, unchanged indexing syntax, sheet order/paging, clipboard, full downloads and reopening using only synthetic XLSX files.

Purpose evidence: jsdoc.

Exported as: verifyExcelPreview ([scripts/acceptance/worldview-excel-check.cjs:1](<../../../../../../scripts/acceptance/worldview-excel-check.cjs#L1>)).

Lexical owner: [scripts/acceptance/worldview-excel-check.cjs](<worldview-excel-check.cjs.md#s-5c12b2e48702af65>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { app, page, vault, createChip, readChips } | { app: any; page: any; vault: any; createChip: any; readChips: any; } | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [workbook](<../fixtures/excel.cjs.md#s-e5526a486067cf6f>) — [scripts/acceptance/worldview-excel-check.cjs:16](<../../../../../../scripts/acceptance/worldview-excel-check.cjs#L16>)
- [xml](<../fixtures/excel.cjs.md#s-12963c8e085de210>) — [scripts/acceptance/worldview-excel-check.cjs:17](<../../../../../../scripts/acceptance/worldview-excel-check.cjs#L17>)

**Called by (statically resolved):**

- [main](<electron-worldview-smoke.cjs.md#s-d74fd257ed7793d3>) — [scripts/acceptance/electron-worldview-smoke.cjs:1243](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L1243>)

Unresolved / external call sites: 151.

- console.log — external-or-dynamic-dispatch; [scripts/acceptance/worldview-excel-check.cjs:8](<../../../../../../scripts/acceptance/worldview-excel-check.cjs#L8>)
- path.join — external-or-dynamic-dispatch; [scripts/acceptance/worldview-excel-check.cjs:9](<../../../../../../scripts/acceptance/worldview-excel-check.cjs#L9>)
- fs.mkdir — external-or-dynamic-dispatch; [scripts/acceptance/worldview-excel-check.cjs:10](<../../../../../../scripts/acceptance/worldview-excel-check.cjs#L10>)
- Array.from( { length: 130 }, (_, index) =&gt; &#96;&lt;row r="${index + 1}"&gt;&lt;c r="A${index + 1}"&gt;&lt;v&gt;${index}&lt;/v&gt;&lt;/c&gt;&lt;c r="C${index + 1}" t="b"&gt;&lt;v&gt;0&lt;/v&gt;&lt;/c&gt;&lt;/row&gt;&#96;, ).join — external-or-dynamic-dispatch; [scripts/acceptance/worldview-excel-check.cjs:11](<../../../../../../scripts/acceptance/worldview-excel-check.cjs#L11>)
- Array.from — external-or-dynamic-dispatch; [scripts/acceptance/worldview-excel-check.cjs:11](<../../../../../../scripts/acceptance/worldview-excel-check.cjs#L11>)
- path.join — external-or-dynamic-dispatch; [scripts/acceptance/worldview-excel-check.cjs:31](<../../../../../../scripts/acceptance/worldview-excel-check.cjs#L31>)
- fs.writeFile — external-or-dynamic-dispatch; [scripts/acceptance/worldview-excel-check.cjs:32](<../../../../../../scripts/acceptance/worldview-excel-check.cjs#L32>)
- createChip — external-or-dynamic-dispatch; [scripts/acceptance/worldview-excel-check.cjs:33](<../../../../../../scripts/acceptance/worldview-excel-check.cjs#L33>)
- 143 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:1243](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L1243>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-worldview-smoke.cjs:13](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L13>) — file-import-only; coverage not established.

<a id="s-14a41c2b5a3522d2"></a>

## verifyExcelPreview.&lt;anonymous@13:5&gt;

[scripts/acceptance/worldview-excel-check.cjs:13](<../../../../../../scripts/acceptance/worldview-excel-check.cjs#L13>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyExcelPreview](<worldview-excel-check.cjs.md#s-22b1dc9a75539a2e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| _ | any | compiler-inferred | required |
| index | any | compiler-inferred | required |

Returns: string (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:13](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L13>) — file-import-only; coverage not established.

<a id="s-47f9956f5378829b"></a>

## verifyExcelPreview.&lt;anonymous@35:5&gt;

[scripts/acceptance/worldview-excel-check.cjs:35](<../../../../../../scripts/acceptance/worldview-excel-check.cjs#L35>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyExcelPreview](<worldview-excel-check.cjs.md#s-22b1dc9a75539a2e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- /Saving&#124;Loading/.test — external-or-dynamic-dispatch; [scripts/acceptance/worldview-excel-check.cjs:36](<../../../../../../scripts/acceptance/worldview-excel-check.cjs#L36>)
- document.querySelector — external-or-dynamic-dispatch; [scripts/acceptance/worldview-excel-check.cjs:37](<../../../../../../scripts/acceptance/worldview-excel-check.cjs#L37>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:13](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L13>) — file-import-only; coverage not established.

<a id="s-ddd9ae01ffd1d209"></a>

## verifyExcelPreview.&lt;anonymous@60:5&gt;

[scripts/acceptance/worldview-excel-check.cjs:60](<../../../../../../scripts/acceptance/worldview-excel-check.cjs#L60>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyExcelPreview](<worldview-excel-check.cjs.md#s-22b1dc9a75539a2e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- /Saving&#124;Loading/.test — external-or-dynamic-dispatch; [scripts/acceptance/worldview-excel-check.cjs:61](<../../../../../../scripts/acceptance/worldview-excel-check.cjs#L61>)
- document.querySelector — external-or-dynamic-dispatch; [scripts/acceptance/worldview-excel-check.cjs:62](<../../../../../../scripts/acceptance/worldview-excel-check.cjs#L62>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:13](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L13>) — file-import-only; coverage not established.

<a id="s-1b958de40123c756"></a>

## verifyExcelPreview.&lt;anonymous@78:5&gt;

[scripts/acceptance/worldview-excel-check.cjs:78](<../../../../../../scripts/acceptance/worldview-excel-check.cjs#L78>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyExcelPreview](<worldview-excel-check.cjs.md#s-22b1dc9a75539a2e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- document.querySelector — external-or-dynamic-dispatch; [scripts/acceptance/worldview-excel-check.cjs:78](<../../../../../../scripts/acceptance/worldview-excel-check.cjs#L78>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:13](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L13>) — file-import-only; coverage not established.

<a id="s-58f42d0054dc1a6f"></a>

## verifyExcelPreview.&lt;anonymous@110:37&gt;

[scripts/acceptance/worldview-excel-check.cjs:110](<../../../../../../scripts/acceptance/worldview-excel-check.cjs#L110>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyExcelPreview](<worldview-excel-check.cjs.md#s-22b1dc9a75539a2e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { clipboard } | { clipboard: any; } | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- clipboard.readText — external-or-dynamic-dispatch; [scripts/acceptance/worldview-excel-check.cjs:110](<../../../../../../scripts/acceptance/worldview-excel-check.cjs#L110>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:13](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L13>) — file-import-only; coverage not established.

<a id="s-0529028a6507334a"></a>

## verifyExcelPreview.&lt;anonymous@127:62&gt;

[scripts/acceptance/worldview-excel-check.cjs:127](<../../../../../../scripts/acceptance/worldview-excel-check.cjs#L127>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyExcelPreview](<worldview-excel-check.cjs.md#s-22b1dc9a75539a2e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| text | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- text.trim — external-or-dynamic-dispatch; [scripts/acceptance/worldview-excel-check.cjs:128](<../../../../../../scripts/acceptance/worldview-excel-check.cjs#L128>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:13](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L13>) — file-import-only; coverage not established.

<a id="s-978d17c88f512db4"></a>

## verifyExcelPreview.&lt;anonymous@141:41&gt;

[scripts/acceptance/worldview-excel-check.cjs:141](<../../../../../../scripts/acceptance/worldview-excel-check.cjs#L141>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyExcelPreview](<worldview-excel-check.cjs.md#s-22b1dc9a75539a2e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { clipboard } | { clipboard: any; } | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- clipboard.readText — external-or-dynamic-dispatch; [scripts/acceptance/worldview-excel-check.cjs:142](<../../../../../../scripts/acceptance/worldview-excel-check.cjs#L142>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:13](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L13>) — file-import-only; coverage not established.

<a id="s-721c9d5be0a19e65"></a>

## verifyExcelPreview.&lt;anonymous@159:7&gt;

[scripts/acceptance/worldview-excel-check.cjs:159](<../../../../../../scripts/acceptance/worldview-excel-check.cjs#L159>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyExcelPreview](<worldview-excel-check.cjs.md#s-22b1dc9a75539a2e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { BrowserWindow } | { BrowserWindow: any; } | compiler-inferred | required |
| destination | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- Promise — external-or-dynamic-dispatch; [scripts/acceptance/worldview-excel-check.cjs:160](<../../../../../../scripts/acceptance/worldview-excel-check.cjs#L160>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:13](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L13>) — file-import-only; coverage not established.

<a id="s-8bd4a30b28ade656"></a>

## verifyExcelPreview.&lt;anonymous@159:7&gt;.&lt;anonymous@160:21&gt;

[scripts/acceptance/worldview-excel-check.cjs:160](<../../../../../../scripts/acceptance/worldview-excel-check.cjs#L160>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyExcelPreview.&lt;anonymous@159:7&gt;](<worldview-excel-check.cjs.md#s-721c9d5be0a19e65>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| resolve | any | compiler-inferred | required |
| reject | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- setTimeout — external-or-dynamic-dispatch; [scripts/acceptance/worldview-excel-check.cjs:161](<../../../../../../scripts/acceptance/worldview-excel-check.cjs#L161>)
- BrowserWindow.getAllWindows()&#91;0&#93;.webContents.session.once — external-or-dynamic-dispatch; [scripts/acceptance/worldview-excel-check.cjs:165](<../../../../../../scripts/acceptance/worldview-excel-check.cjs#L165>)
- BrowserWindow.getAllWindows — external-or-dynamic-dispatch; [scripts/acceptance/worldview-excel-check.cjs:165](<../../../../../../scripts/acceptance/worldview-excel-check.cjs#L165>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:13](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L13>) — file-import-only; coverage not established.

<a id="s-af3e34bef7b19aa2"></a>

## verifyExcelPreview.&lt;anonymous@159:7&gt;.&lt;anonymous@160:21&gt;.&lt;anonymous@162:13&gt;

[scripts/acceptance/worldview-excel-check.cjs:162](<../../../../../../scripts/acceptance/worldview-excel-check.cjs#L162>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyExcelPreview.&lt;anonymous@159:7&gt;.&lt;anonymous@160:21&gt;](<worldview-excel-check.cjs.md#s-8bd4a30b28ade656>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- reject — external-or-dynamic-dispatch; [scripts/acceptance/worldview-excel-check.cjs:162](<../../../../../../scripts/acceptance/worldview-excel-check.cjs#L162>)
- Error — external-or-dynamic-dispatch; [scripts/acceptance/worldview-excel-check.cjs:162](<../../../../../../scripts/acceptance/worldview-excel-check.cjs#L162>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:13](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L13>) — file-import-only; coverage not established.

<a id="s-a10b0fe94403a88f"></a>

## verifyExcelPreview.&lt;anonymous@159:7&gt;.&lt;anonymous@160:21&gt;.&lt;anonymous@167:13&gt;

[scripts/acceptance/worldview-excel-check.cjs:167](<../../../../../../scripts/acceptance/worldview-excel-check.cjs#L167>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyExcelPreview.&lt;anonymous@159:7&gt;.&lt;anonymous@160:21&gt;](<worldview-excel-check.cjs.md#s-8bd4a30b28ade656>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| _ | any | compiler-inferred | required |
| item | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- item.setSavePath — external-or-dynamic-dispatch; [scripts/acceptance/worldview-excel-check.cjs:168](<../../../../../../scripts/acceptance/worldview-excel-check.cjs#L168>)
- item.once — external-or-dynamic-dispatch; [scripts/acceptance/worldview-excel-check.cjs:169](<../../../../../../scripts/acceptance/worldview-excel-check.cjs#L169>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:13](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L13>) — file-import-only; coverage not established.

<a id="s-6e52415cff4d14c7"></a>

## verifyExcelPreview.&lt;anonymous@159:7&gt;.&lt;anonymous@160:21&gt;.&lt;anonymous@167:13&gt;.&lt;anonymous@169:33&gt;

[scripts/acceptance/worldview-excel-check.cjs:169](<../../../../../../scripts/acceptance/worldview-excel-check.cjs#L169>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyExcelPreview.&lt;anonymous@159:7&gt;.&lt;anonymous@160:21&gt;.&lt;anonymous@167:13&gt;](<worldview-excel-check.cjs.md#s-a10b0fe94403a88f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| _ | any | compiler-inferred | required |
| state | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- clearTimeout — external-or-dynamic-dispatch; [scripts/acceptance/worldview-excel-check.cjs:170](<../../../../../../scripts/acceptance/worldview-excel-check.cjs#L170>)
- resolve — external-or-dynamic-dispatch; [scripts/acceptance/worldview-excel-check.cjs:172](<../../../../../../scripts/acceptance/worldview-excel-check.cjs#L172>)
- reject — external-or-dynamic-dispatch; [scripts/acceptance/worldview-excel-check.cjs:173](<../../../../../../scripts/acceptance/worldview-excel-check.cjs#L173>)
- Error — external-or-dynamic-dispatch; [scripts/acceptance/worldview-excel-check.cjs:173](<../../../../../../scripts/acceptance/worldview-excel-check.cjs#L173>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:13](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L13>) — file-import-only; coverage not established.
