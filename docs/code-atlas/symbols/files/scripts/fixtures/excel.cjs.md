# scripts/fixtures/excel.cjs: symbols

[Atlas](<../../../../README.md>) / [Development and acceptance tooling](<../../../../modules/tooling.md>) / [scripts/fixtures/excel.cjs:1](<../../../../../../scripts/fixtures/excel.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/fixtures/excel.cjs](<excel.cjs.md#s-0bb18f86411856b4>) (Module)
- [zip](<excel.cjs.md#s-6b585801c616fb06>) (FunctionDeclaration)
- [xml](<excel.cjs.md#s-12963c8e085de210>) (FunctionDeclaration)
- [workbook](<excel.cjs.md#s-e5526a486067cf6f>) (FunctionDeclaration)
- [workbook.sheet](<excel.cjs.md#s-738657129ad89a1f>) (FunctionExpression)
- [workbook.relation](<excel.cjs.md#s-887b2d7773fa1a78>) (FunctionExpression)
- [workbook.worksheet](<excel.cjs.md#s-1e7f12e4ebc7eeb0>) (FunctionExpression)

<a id="s-0bb18f86411856b4"></a>

## scripts/fixtures/excel.cjs

[scripts/fixtures/excel.cjs:1](<../../../../../../scripts/fixtures/excel.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- require — module-loader; [scripts/fixtures/excel.cjs:1](<../../../../../../scripts/fixtures/excel.cjs#L1>)

**Related tests / acceptance harnesses:**

- [electron/excel-engine.test.cjs:6](<../../../../../../electron/excel-engine.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:6](<../../../../../../electron/excel-service.test.cjs#L6>) — file-import-only; coverage not established.
- [scripts/acceptance/worldview-excel-check.cjs:4](<../../../../../../scripts/acceptance/worldview-excel-check.cjs#L4>) — file-import-only; coverage not established.

<a id="s-6b585801c616fb06"></a>

## zip

[scripts/fixtures/excel.cjs:4](<../../../../../../scripts/fixtures/excel.cjs#L4>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Builds deterministic tiny ZIP fixtures entirely in memory; used only for synthetic OOXML tests, never real research sources.

Purpose evidence: jsdoc.

Exported as: zip ([scripts/fixtures/excel.cjs:1](<../../../../../../scripts/fixtures/excel.cjs#L1>)).

Lexical owner: [scripts/fixtures/excel.cjs](<excel.cjs.md#s-0bb18f86411856b4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| parts | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@270:65&gt;](<../../electron/excel-engine.test.cjs.md#s-b45b4ec813408e85>) — [electron/excel-engine.test.cjs:303](<../../../../../../electron/excel-engine.test.cjs#L303>)
- [workbook](<excel.cjs.md#s-e5526a486067cf6f>) — [scripts/fixtures/excel.cjs:91](<../../../../../../scripts/fixtures/excel.cjs#L91>)

Unresolved / external call sites: 34.

- Object.entries — external-or-dynamic-dispatch; [scripts/fixtures/excel.cjs:8](<../../../../../../scripts/fixtures/excel.cjs#L8>)
- Buffer.from — external-or-dynamic-dispatch; [scripts/fixtures/excel.cjs:9](<../../../../../../scripts/fixtures/excel.cjs#L9>)
- Buffer.from — external-or-dynamic-dispatch; [scripts/fixtures/excel.cjs:10](<../../../../../../scripts/fixtures/excel.cjs#L10>)
- deflateRawSync — external-or-dynamic-dispatch; [scripts/fixtures/excel.cjs:11](<../../../../../../scripts/fixtures/excel.cjs#L11>)
- Buffer.alloc — external-or-dynamic-dispatch; [scripts/fixtures/excel.cjs:12](<../../../../../../scripts/fixtures/excel.cjs#L12>)
- header.writeUInt32LE — external-or-dynamic-dispatch; [scripts/fixtures/excel.cjs:13](<../../../../../../scripts/fixtures/excel.cjs#L13>)
- header.writeUInt16LE — external-or-dynamic-dispatch; [scripts/fixtures/excel.cjs:14](<../../../../../../scripts/fixtures/excel.cjs#L14>)
- header.writeUInt16LE — external-or-dynamic-dispatch; [scripts/fixtures/excel.cjs:15](<../../../../../../scripts/fixtures/excel.cjs#L15>)
- 26 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/excel-engine.test.cjs:303](<../../../../../../electron/excel-engine.test.cjs#L303>) — static-call-site; coverage not established.
- [electron/excel-engine.test.cjs:6](<../../../../../../electron/excel-engine.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:6](<../../../../../../electron/excel-service.test.cjs#L6>) — file-import-only; coverage not established.
- [scripts/acceptance/worldview-excel-check.cjs:4](<../../../../../../scripts/acceptance/worldview-excel-check.cjs#L4>) — file-import-only; coverage not established.

<a id="s-12963c8e085de210"></a>

## xml

[scripts/fixtures/excel.cjs:45](<../../../../../../scripts/fixtures/excel.cjs#L45>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Escapes fixture text into XML attribute/text context without relying on a workbook-writing library.

Purpose evidence: jsdoc.

Exported as: xml ([scripts/fixtures/excel.cjs:1](<../../../../../../scripts/fixtures/excel.cjs#L1>)).

Lexical owner: [scripts/fixtures/excel.cjs](<excel.cjs.md#s-0bb18f86411856b4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@108:89&gt;](<../../electron/excel-engine.test.cjs.md#s-a1a327f305dffea9>) — [electron/excel-engine.test.cjs:111](<../../../../../../electron/excel-engine.test.cjs#L111>)
- [&lt;anonymous@196:81&gt;](<../../electron/excel-engine.test.cjs.md#s-01840a92dcee5720>) — [electron/excel-engine.test.cjs:200](<../../../../../../electron/excel-engine.test.cjs#L200>)
- [verifyExcelPreview](<../acceptance/worldview-excel-check.cjs.md#s-22b1dc9a75539a2e>) — [scripts/acceptance/worldview-excel-check.cjs:17](<../../../../../../scripts/acceptance/worldview-excel-check.cjs#L17>)
- [workbook.sheet](<excel.cjs.md#s-738657129ad89a1f>) — [scripts/fixtures/excel.cjs:74](<../../../../../../scripts/fixtures/excel.cjs#L74>)

Unresolved / external call sites: 5.

- String(value) .replace(/&/g, "&amp;") .replace(/&lt;/g, "&lt;") .replace(/&gt;/g, "&gt;") .replace — external-or-dynamic-dispatch; [scripts/fixtures/excel.cjs:46](<../../../../../../scripts/fixtures/excel.cjs#L46>)
- String(value) .replace(/&/g, "&amp;") .replace(/&lt;/g, "&lt;") .replace — external-or-dynamic-dispatch; [scripts/fixtures/excel.cjs:46](<../../../../../../scripts/fixtures/excel.cjs#L46>)
- String(value) .replace(/&/g, "&amp;") .replace — external-or-dynamic-dispatch; [scripts/fixtures/excel.cjs:46](<../../../../../../scripts/fixtures/excel.cjs#L46>)
- String(value) .replace — external-or-dynamic-dispatch; [scripts/fixtures/excel.cjs:46](<../../../../../../scripts/fixtures/excel.cjs#L46>)
- String — external-or-dynamic-dispatch; [scripts/fixtures/excel.cjs:46](<../../../../../../scripts/fixtures/excel.cjs#L46>)

**Related tests / acceptance harnesses:**

- [electron/excel-engine.test.cjs:111](<../../../../../../electron/excel-engine.test.cjs#L111>) — static-call-site; coverage not established.
- [electron/excel-engine.test.cjs:200](<../../../../../../electron/excel-engine.test.cjs#L200>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-excel-check.cjs:17](<../../../../../../scripts/acceptance/worldview-excel-check.cjs#L17>) — static-call-site; coverage not established.
- [electron/excel-engine.test.cjs:6](<../../../../../../electron/excel-engine.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:6](<../../../../../../electron/excel-service.test.cjs#L6>) — file-import-only; coverage not established.
- [scripts/acceptance/worldview-excel-check.cjs:4](<../../../../../../scripts/acceptance/worldview-excel-check.cjs#L4>) — file-import-only; coverage not established.

<a id="s-e5526a486067cf6f"></a>

## workbook

[scripts/fixtures/excel.cjs:54](<../../../../../../scripts/fixtures/excel.cjs#L54>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Builds a minimal standards-shaped XLSX with caller-supplied worksheet XML, styles, shared strings and inert optional parts.

Purpose evidence: jsdoc.

Exported as: workbook ([scripts/fixtures/excel.cjs:1](<../../../../../../scripts/fixtures/excel.cjs#L1>)).

Lexical owner: [scripts/fixtures/excel.cjs](<excel.cjs.md#s-0bb18f86411856b4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| {   sheets = &#91;     {       name: "Sheet1",       rows: '&lt;row r="1"&gt;&lt;c r="A1" t="inlineStr"&gt;&lt;is&gt;&lt;t&gt;Title&lt;/t&gt;&lt;/is&gt;&lt;/c&gt;&lt;c r="C1"&gt;&lt;v&gt;0&lt;/v&gt;&lt;/c&gt;&lt;/row&gt;&lt;row r="3"&gt;&lt;c r="A3" t="b"&gt;&lt;v&gt;0&lt;/v&gt;&lt;/c&gt;&lt;/row&gt;',     },   &#93;,   styles,   strings,   date1904 = false,   extra = {}, } | { sheets?: {}; date1904?: boolean; extra?: {}; } | compiler-inferred | optional, default present |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [zip](<excel.cjs.md#s-6b585801c616fb06>) — [scripts/fixtures/excel.cjs:91](<../../../../../../scripts/fixtures/excel.cjs#L91>)

**Called by (statically resolved):**

- [&lt;anonymous@25:86&gt;](<../../electron/excel-engine.test.cjs.md#s-7d9d27dc78399b43>) — [electron/excel-engine.test.cjs:26](<../../../../../../electron/excel-engine.test.cjs#L26>)
- [&lt;anonymous@47:83&gt;](<../../electron/excel-engine.test.cjs.md#s-e9b5e55d14bb1d76>) — [electron/excel-engine.test.cjs:48](<../../../../../../electron/excel-engine.test.cjs#L48>)
- [&lt;anonymous@72:80&gt;](<../../electron/excel-engine.test.cjs.md#s-5ac1431c5fd09bdc>) — [electron/excel-engine.test.cjs:81](<../../../../../../electron/excel-engine.test.cjs#L81>)
- [&lt;anonymous@72:80&gt;](<../../electron/excel-engine.test.cjs.md#s-5ac1431c5fd09bdc>) — [electron/excel-engine.test.cjs:93](<../../../../../../electron/excel-engine.test.cjs#L93>)
- [&lt;anonymous@108:89&gt;](<../../electron/excel-engine.test.cjs.md#s-a1a327f305dffea9>) — [electron/excel-engine.test.cjs:113](<../../../../../../electron/excel-engine.test.cjs#L113>)
- [&lt;anonymous@148:79&gt;](<../../electron/excel-engine.test.cjs.md#s-3912f5d82ef410df>) — [electron/excel-engine.test.cjs:150](<../../../../../../electron/excel-engine.test.cjs#L150>)
- [&lt;anonymous@175:66&gt;](<../../electron/excel-engine.test.cjs.md#s-a641b08ec0e44f5f>) — [electron/excel-engine.test.cjs:177](<../../../../../../electron/excel-engine.test.cjs#L177>)
- [&lt;anonymous@196:81&gt;](<../../electron/excel-engine.test.cjs.md#s-01840a92dcee5720>) — [electron/excel-engine.test.cjs:199](<../../../../../../electron/excel-engine.test.cjs#L199>)
- [&lt;anonymous@218:56&gt;](<../../electron/excel-engine.test.cjs.md#s-b1cc420b71b4503f>) — [electron/excel-engine.test.cjs:220](<../../../../../../electron/excel-engine.test.cjs#L220>)
- [&lt;anonymous@230:77&gt;](<../../electron/excel-engine.test.cjs.md#s-09f9e188920d9d81>) — [electron/excel-engine.test.cjs:236](<../../../../../../electron/excel-engine.test.cjs#L236>)
- [&lt;anonymous@230:77&gt;](<../../electron/excel-engine.test.cjs.md#s-09f9e188920d9d81>) — [electron/excel-engine.test.cjs:248](<../../../../../../electron/excel-engine.test.cjs#L248>)
- [&lt;anonymous@270:65&gt;](<../../electron/excel-engine.test.cjs.md#s-b45b4ec813408e85>) — [electron/excel-engine.test.cjs:273](<../../../../../../electron/excel-engine.test.cjs#L273>)
- [&lt;anonymous@270:65&gt;](<../../electron/excel-engine.test.cjs.md#s-b45b4ec813408e85>) — [electron/excel-engine.test.cjs:279](<../../../../../../electron/excel-engine.test.cjs#L279>)
- [&lt;anonymous@270:65&gt;](<../../electron/excel-engine.test.cjs.md#s-b45b4ec813408e85>) — [electron/excel-engine.test.cjs:290](<../../../../../../electron/excel-engine.test.cjs#L290>)
- [&lt;anonymous@270:65&gt;](<../../electron/excel-engine.test.cjs.md#s-b45b4ec813408e85>) — [electron/excel-engine.test.cjs:300](<../../../../../../electron/excel-engine.test.cjs#L300>)
- [&lt;anonymous@270:65&gt;](<../../electron/excel-engine.test.cjs.md#s-b45b4ec813408e85>) — [electron/excel-engine.test.cjs:306](<../../../../../../electron/excel-engine.test.cjs#L306>)
- [&lt;anonymous@270:65&gt;](<../../electron/excel-engine.test.cjs.md#s-b45b4ec813408e85>) — [electron/excel-engine.test.cjs:317](<../../../../../../electron/excel-engine.test.cjs#L317>)
- [&lt;anonymous@325:85&gt;](<../../electron/excel-engine.test.cjs.md#s-3851a28a688d3b1b>) — [electron/excel-engine.test.cjs:329](<../../../../../../electron/excel-engine.test.cjs#L329>)
- [withUniverse](<../../electron/excel-service.test.cjs.md#s-6b5e67b62cf4c0be>) — [electron/excel-service.test.cjs:27](<../../../../../../electron/excel-service.test.cjs#L27>)
- [withUniverse](<../../electron/excel-service.test.cjs.md#s-6b5e67b62cf4c0be>) — [electron/excel-service.test.cjs:28](<../../../../../../electron/excel-service.test.cjs#L28>)
- [&lt;anonymous@55:89&gt;.&lt;anonymous@56:22&gt;](<../../electron/excel-service.test.cjs.md#s-1ce2ad7c1e58b379>) — [electron/excel-service.test.cjs:105](<../../../../../../electron/excel-service.test.cjs#L105>)
- [&lt;anonymous@204:89&gt;.&lt;anonymous@205:22&gt;](<../../electron/excel-service.test.cjs.md#s-6ed995772b3bfb7d>) — [electron/excel-service.test.cjs:207](<../../../../../../electron/excel-service.test.cjs#L207>)
- [verifyExcelPreview](<../acceptance/worldview-excel-check.cjs.md#s-22b1dc9a75539a2e>) — [scripts/acceptance/worldview-excel-check.cjs:16](<../../../../../../scripts/acceptance/worldview-excel-check.cjs#L16>)
- [main](<../build/build-excel-engine.cjs.md#s-c4423626340c2941>) — [scripts/build/build-excel-engine.cjs:135](<../../../../../../scripts/build/build-excel-engine.cjs#L135>)

Unresolved / external call sites: 5.

- sheets .map(function sheet(item, index) { return &#96;&lt;sheet name="${xml(item.name)}" sheetId="${index + 1}" r:id="s${index}"/&gt;&#96;; }) .join — external-or-dynamic-dispatch; [scripts/fixtures/excel.cjs:72](<../../../../../../scripts/fixtures/excel.cjs#L72>)
- sheets .map — external-or-dynamic-dispatch; [scripts/fixtures/excel.cjs:72](<../../../../../../scripts/fixtures/excel.cjs#L72>)
- sheets .map(function relation(_, index) { return &#96;&lt;Relationship Id="s${index}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="workshee — external-or-dynamic-dispatch; [scripts/fixtures/excel.cjs:77](<../../../../../../scripts/fixtures/excel.cjs#L77>)
- sheets .map — external-or-dynamic-dispatch; [scripts/fixtures/excel.cjs:77](<../../../../../../scripts/fixtures/excel.cjs#L77>)
- sheets.forEach — external-or-dynamic-dispatch; [scripts/fixtures/excel.cjs:85](<../../../../../../scripts/fixtures/excel.cjs#L85>)

**Related tests / acceptance harnesses:**

- [electron/excel-engine.test.cjs:26](<../../../../../../electron/excel-engine.test.cjs#L26>) — static-call-site; coverage not established.
- [electron/excel-engine.test.cjs:48](<../../../../../../electron/excel-engine.test.cjs#L48>) — static-call-site; coverage not established.
- [electron/excel-engine.test.cjs:81](<../../../../../../electron/excel-engine.test.cjs#L81>) — static-call-site; coverage not established.
- [electron/excel-engine.test.cjs:93](<../../../../../../electron/excel-engine.test.cjs#L93>) — static-call-site; coverage not established.
- [electron/excel-engine.test.cjs:113](<../../../../../../electron/excel-engine.test.cjs#L113>) — static-call-site; coverage not established.
- [electron/excel-engine.test.cjs:150](<../../../../../../electron/excel-engine.test.cjs#L150>) — static-call-site; coverage not established.
- [electron/excel-engine.test.cjs:177](<../../../../../../electron/excel-engine.test.cjs#L177>) — static-call-site; coverage not established.
- [electron/excel-engine.test.cjs:199](<../../../../../../electron/excel-engine.test.cjs#L199>) — static-call-site; coverage not established.
- [electron/excel-engine.test.cjs:220](<../../../../../../electron/excel-engine.test.cjs#L220>) — static-call-site; coverage not established.
- [electron/excel-engine.test.cjs:236](<../../../../../../electron/excel-engine.test.cjs#L236>) — static-call-site; coverage not established.
- [electron/excel-engine.test.cjs:248](<../../../../../../electron/excel-engine.test.cjs#L248>) — static-call-site; coverage not established.
- [electron/excel-engine.test.cjs:273](<../../../../../../electron/excel-engine.test.cjs#L273>) — static-call-site; coverage not established.
- [electron/excel-engine.test.cjs:279](<../../../../../../electron/excel-engine.test.cjs#L279>) — static-call-site; coverage not established.
- [electron/excel-engine.test.cjs:290](<../../../../../../electron/excel-engine.test.cjs#L290>) — static-call-site; coverage not established.
- [electron/excel-engine.test.cjs:300](<../../../../../../electron/excel-engine.test.cjs#L300>) — static-call-site; coverage not established.
- [electron/excel-engine.test.cjs:306](<../../../../../../electron/excel-engine.test.cjs#L306>) — static-call-site; coverage not established.
- [electron/excel-engine.test.cjs:317](<../../../../../../electron/excel-engine.test.cjs#L317>) — static-call-site; coverage not established.
- [electron/excel-engine.test.cjs:329](<../../../../../../electron/excel-engine.test.cjs#L329>) — static-call-site; coverage not established.
- [electron/excel-service.test.cjs:27](<../../../../../../electron/excel-service.test.cjs#L27>) — static-call-site; coverage not established.
- [electron/excel-service.test.cjs:28](<../../../../../../electron/excel-service.test.cjs#L28>) — static-call-site; coverage not established.
- [electron/excel-service.test.cjs:105](<../../../../../../electron/excel-service.test.cjs#L105>) — static-call-site; coverage not established.
- [electron/excel-service.test.cjs:207](<../../../../../../electron/excel-service.test.cjs#L207>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-excel-check.cjs:16](<../../../../../../scripts/acceptance/worldview-excel-check.cjs#L16>) — static-call-site; coverage not established.
- [electron/excel-engine.test.cjs:6](<../../../../../../electron/excel-engine.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:6](<../../../../../../electron/excel-service.test.cjs#L6>) — file-import-only; coverage not established.
- [scripts/acceptance/worldview-excel-check.cjs:4](<../../../../../../scripts/acceptance/worldview-excel-check.cjs#L4>) — file-import-only; coverage not established.

<a id="s-738657129ad89a1f"></a>

## workbook.sheet

[scripts/fixtures/excel.cjs:73](<../../../../../../scripts/fixtures/excel.cjs#L73>) · FunctionExpression · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [workbook](<excel.cjs.md#s-e5526a486067cf6f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| item | any | compiler-inferred | required |
| index | any | compiler-inferred | required |

Returns: string (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [xml](<excel.cjs.md#s-12963c8e085de210>) — [scripts/fixtures/excel.cjs:74](<../../../../../../scripts/fixtures/excel.cjs#L74>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/excel-engine.test.cjs:6](<../../../../../../electron/excel-engine.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:6](<../../../../../../electron/excel-service.test.cjs#L6>) — file-import-only; coverage not established.
- [scripts/acceptance/worldview-excel-check.cjs:4](<../../../../../../scripts/acceptance/worldview-excel-check.cjs#L4>) — file-import-only; coverage not established.

<a id="s-887b2d7773fa1a78"></a>

## workbook.relation

[scripts/fixtures/excel.cjs:78](<../../../../../../scripts/fixtures/excel.cjs#L78>) · FunctionExpression · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [workbook](<excel.cjs.md#s-e5526a486067cf6f>).

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

- [electron/excel-engine.test.cjs:6](<../../../../../../electron/excel-engine.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:6](<../../../../../../electron/excel-service.test.cjs#L6>) — file-import-only; coverage not established.
- [scripts/acceptance/worldview-excel-check.cjs:4](<../../../../../../scripts/acceptance/worldview-excel-check.cjs#L4>) — file-import-only; coverage not established.

<a id="s-1e7f12e4ebc7eeb0"></a>

## workbook.worksheet

[scripts/fixtures/excel.cjs:85](<../../../../../../scripts/fixtures/excel.cjs#L85>) · FunctionExpression · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [workbook](<excel.cjs.md#s-e5526a486067cf6f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| item | any | compiler-inferred | required |
| index | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/excel-engine.test.cjs:6](<../../../../../../electron/excel-engine.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:6](<../../../../../../electron/excel-service.test.cjs#L6>) — file-import-only; coverage not established.
- [scripts/acceptance/worldview-excel-check.cjs:4](<../../../../../../scripts/acceptance/worldview-excel-check.cjs#L4>) — file-import-only; coverage not established.
