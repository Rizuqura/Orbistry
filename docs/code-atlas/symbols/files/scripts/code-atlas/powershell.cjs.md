# scripts/code-atlas/powershell.cjs: symbols

[Atlas](<../../../../README.md>) / [Development and acceptance tooling](<../../../../modules/tooling.md>) / [scripts/code-atlas/powershell.cjs:1](<../../../../../../scripts/code-atlas/powershell.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/code-atlas/powershell.cjs](<powershell.cjs.md#s-05d3d25dd146a334>) (Module)
- [appendPowerShell](<powershell.cjs.md#s-ebdb565846169f3a>) (FunctionDeclaration)
- [appendPowerShell.&lt;anonymous@11:13&gt;](<powershell.cjs.md#s-0ae923d9b0abd85e>) (ArrowFunction)
- [appendPowerShell.&lt;anonymous@12:10&gt;](<powershell.cjs.md#s-767e4c98a51367fd>) (ArrowFunction)
- [appendPowerShell.&lt;anonymous@37:31&gt;](<powershell.cjs.md#s-e04ebf6fe79afdf6>) (ArrowFunction)
- [appendPowerShell.record](<powershell.cjs.md#s-b0fd03296648d3e6>) (FunctionDeclaration)
- [appendPowerShell.record.&lt;anonymous@88:44&gt;](<powershell.cjs.md#s-85cbe96cc175cd3c>) (ArrowFunction)
- [appendPowerShell.&lt;anonymous@164:9&gt;](<powershell.cjs.md#s-1cc76e32321e0c86>) (ArrowFunction)
- [appendPowerShell.&lt;anonymous@215:26&gt;](<powershell.cjs.md#s-e6739d2356142929>) (ArrowFunction)
- [appendPowerShell.&lt;anonymous@218:26&gt;](<powershell.cjs.md#s-535a8295fad2ce05>) (ArrowFunction)

<a id="s-05d3d25dd146a334"></a>

## scripts/code-atlas/powershell.cjs

[scripts/code-atlas/powershell.cjs:1](<../../../../../../scripts/code-atlas/powershell.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 6.

- require — module-loader; [scripts/code-atlas/powershell.cjs:1](<../../../../../../scripts/code-atlas/powershell.cjs#L1>)
- require — module-loader; [scripts/code-atlas/powershell.cjs:2](<../../../../../../scripts/code-atlas/powershell.cjs#L2>)
- require — module-loader; [scripts/code-atlas/powershell.cjs:3](<../../../../../../scripts/code-atlas/powershell.cjs#L3>)
- require — module-loader; [scripts/code-atlas/powershell.cjs:4](<../../../../../../scripts/code-atlas/powershell.cjs#L4>)
- require — module-loader; [scripts/code-atlas/powershell.cjs:5](<../../../../../../scripts/code-atlas/powershell.cjs#L5>)
- require — module-loader; [scripts/code-atlas/powershell.cjs:6](<../../../../../../scripts/code-atlas/powershell.cjs#L6>)

**Related tests / acceptance harnesses:**

- [scripts/code-atlas/atlas.test.cjs:8](<../../../../../../scripts/code-atlas/atlas.test.cjs#L8>) — file-import-only; coverage not established.

<a id="s-ebdb565846169f3a"></a>

## appendPowerShell

[scripts/code-atlas/powershell.cjs:9](<../../../../../../scripts/code-atlas/powershell.cjs#L9>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Appends native PowerShell AST declarations/calls to the common index. Starts only a development parser, never the inventoried scripts; fails if that parser is unavailable or syntax is invalid.

Purpose evidence: jsdoc.

Exported as: appendPowerShell ([scripts/code-atlas/powershell.cjs:1](<../../../../../../scripts/code-atlas/powershell.cjs#L1>)).

Lexical owner: [scripts/code-atlas/powershell.cjs](<powershell.cjs.md#s-05d3d25dd146a334>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| inventory | any | compiler-inferred | required |
| data | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [moduleFor](<catalog.cjs.md#s-eee321adf7819f17>) — [scripts/code-atlas/powershell.cjs:38](<../../../../../../scripts/code-atlas/powershell.cjs#L38>)
- [roleFor](<catalog.cjs.md#s-5f489f711c67456d>) — [scripts/code-atlas/powershell.cjs:39](<../../../../../../scripts/code-atlas/powershell.cjs#L39>)
- [appendPowerShell.record](<powershell.cjs.md#s-b0fd03296648d3e6>) — [scripts/code-atlas/powershell.cjs:108](<../../../../../../scripts/code-atlas/powershell.cjs#L108>)
- [appendPowerShell.record](<powershell.cjs.md#s-b0fd03296648d3e6>) — [scripts/code-atlas/powershell.cjs:119](<../../../../../../scripts/code-atlas/powershell.cjs#L119>)
- [appendPowerShell.record](<powershell.cjs.md#s-b0fd03296648d3e6>) — [scripts/code-atlas/powershell.cjs:135](<../../../../../../scripts/code-atlas/powershell.cjs#L135>)

**Called by (statically resolved):**

- [&lt;anonymous@290:99&gt;](<atlas.test.cjs.md#s-731d6387764c18cb>) — [scripts/code-atlas/atlas.test.cjs:296](<../../../../../../scripts/code-atlas/atlas.test.cjs#L296>)
- [buildAtlas](<generate.cjs.md#s-5686d6c95fadcfb1>) — [scripts/code-atlas/generate.cjs:111](<../../../../../../scripts/code-atlas/generate.cjs#L111>)

Unresolved / external call sites: 30.

- inventory .filter((file) =&gt; file.endsWith(".ps1")) .map — external-or-dynamic-dispatch; [scripts/code-atlas/powershell.cjs:10](<../../../../../../scripts/code-atlas/powershell.cjs#L10>)
- inventory .filter — external-or-dynamic-dispatch; [scripts/code-atlas/powershell.cjs:10](<../../../../../../scripts/code-atlas/powershell.cjs#L10>)
- fs.readFileSync — external-or-dynamic-dispatch; [scripts/code-atlas/powershell.cjs:17](<../../../../../../scripts/code-atlas/powershell.cjs#L17>)
- path.join — external-or-dynamic-dispatch; [scripts/code-atlas/powershell.cjs:18](<../../../../../../scripts/code-atlas/powershell.cjs#L18>)
- JSON.parse — external-or-dynamic-dispatch; [scripts/code-atlas/powershell.cjs:21](<../../../../../../scripts/code-atlas/powershell.cjs#L21>)
- execFileSync( process.platform === "win32" ? "powershell.exe" : "pwsh", &#91;"-NoProfile", "-NonInteractive", "-Command", parser&#93;, { input: JSON.stringify({ files: inputs }), encoding: — external-or-dynamic-dispatch; [scripts/code-atlas/powershell.cjs:22](<../../../../../../scripts/code-atlas/powershell.cjs#L22>)
- execFileSync — external-or-dynamic-dispatch; [scripts/code-atlas/powershell.cjs:22](<../../../../../../scripts/code-atlas/powershell.cjs#L22>)
- JSON.stringify — external-or-dynamic-dispatch; [scripts/code-atlas/powershell.cjs:26](<../../../../../../scripts/code-atlas/powershell.cjs#L26>)
- 22 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [scripts/code-atlas/atlas.test.cjs:296](<../../../../../../scripts/code-atlas/atlas.test.cjs#L296>) — static-call-site; coverage not established.
- [scripts/code-atlas/atlas.test.cjs:8](<../../../../../../scripts/code-atlas/atlas.test.cjs#L8>) — file-import-only; coverage not established.

<a id="s-0ae923d9b0abd85e"></a>

## appendPowerShell.&lt;anonymous@11:13&gt;

[scripts/code-atlas/powershell.cjs:11](<../../../../../../scripts/code-atlas/powershell.cjs#L11>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [appendPowerShell](<powershell.cjs.md#s-ebdb565846169f3a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| file | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- file.endsWith — external-or-dynamic-dispatch; [scripts/code-atlas/powershell.cjs:11](<../../../../../../scripts/code-atlas/powershell.cjs#L11>)

**Related tests / acceptance harnesses:**

- [scripts/code-atlas/atlas.test.cjs:8](<../../../../../../scripts/code-atlas/atlas.test.cjs#L8>) — file-import-only; coverage not established.

<a id="s-767e4c98a51367fd"></a>

## appendPowerShell.&lt;anonymous@12:10&gt;

[scripts/code-atlas/powershell.cjs:12](<../../../../../../scripts/code-atlas/powershell.cjs#L12>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [appendPowerShell](<powershell.cjs.md#s-ebdb565846169f3a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| file | any | compiler-inferred | required |

Returns: { path: any; text: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- fs.readFileSync — external-or-dynamic-dispatch; [scripts/code-atlas/powershell.cjs:14](<../../../../../../scripts/code-atlas/powershell.cjs#L14>)
- path.join — external-or-dynamic-dispatch; [scripts/code-atlas/powershell.cjs:14](<../../../../../../scripts/code-atlas/powershell.cjs#L14>)

**Related tests / acceptance harnesses:**

- [scripts/code-atlas/atlas.test.cjs:8](<../../../../../../scripts/code-atlas/atlas.test.cjs#L8>) — file-import-only; coverage not established.

<a id="s-e04ebf6fe79afdf6"></a>

## appendPowerShell.&lt;anonymous@37:31&gt;

[scripts/code-atlas/powershell.cjs:37](<../../../../../../scripts/code-atlas/powershell.cjs#L37>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [appendPowerShell](<powershell.cjs.md#s-ebdb565846169f3a>).

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

- [scripts/code-atlas/atlas.test.cjs:8](<../../../../../../scripts/code-atlas/atlas.test.cjs#L8>) — file-import-only; coverage not established.

<a id="s-b0fd03296648d3e6"></a>

## appendPowerShell.record

[scripts/code-atlas/powershell.cjs:43](<../../../../../../scripts/code-atlas/powershell.cjs#L43>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Creates a common symbol record from native syntax, retaining dynamic return behavior explicitly.

Purpose evidence: jsdoc.

Lexical owner: [appendPowerShell](<powershell.cjs.md#s-ebdb565846169f3a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| id | any | compiler-inferred | required |
| name | any | compiler-inferred | required |
| kind | any | compiler-inferred | required |
| line | any | compiler-inferred | required |
| column | any | compiler-inferred | required |
| endLine | any | compiler-inferred | required |
| parameters | any | compiler-inferred | required |
| purpose | any | compiler-inferred | required |
| ownerId | any | compiler-inferred | required |

Returns: { id: any; anchor: string; name: any; qualifiedName: any; kind: any; file: any; line: any; column: any; endLine: any; module: string; role: string; callable: boolean; hasBody: boolean; ownerId: any; purpose: { text: any; evidence: string; }; exports: {}; callers: {}; callees: {}; relatedTests: {}; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [anchor](<analyze.cjs.md#s-7611f4c95a287aa0>) — [scripts/code-atlas/powershell.cjs:57](<../../../../../../scripts/code-atlas/powershell.cjs#L57>)

**Called by (statically resolved):**

- [appendPowerShell](<powershell.cjs.md#s-ebdb565846169f3a>) — [scripts/code-atlas/powershell.cjs:108](<../../../../../../scripts/code-atlas/powershell.cjs#L108>)
- [appendPowerShell](<powershell.cjs.md#s-ebdb565846169f3a>) — [scripts/code-atlas/powershell.cjs:119](<../../../../../../scripts/code-atlas/powershell.cjs#L119>)
- [appendPowerShell](<powershell.cjs.md#s-ebdb565846169f3a>) — [scripts/code-atlas/powershell.cjs:135](<../../../../../../scripts/code-atlas/powershell.cjs#L135>)

Unresolved / external call sites: 3.

- parameters.map — external-or-dynamic-dispatch; [scripts/code-atlas/powershell.cjs:88](<../../../../../../scripts/code-atlas/powershell.cjs#L88>)
- local.push — external-or-dynamic-dispatch; [scripts/code-atlas/powershell.cjs:104](<../../../../../../scripts/code-atlas/powershell.cjs#L104>)
- data.symbols.push — external-or-dynamic-dispatch; [scripts/code-atlas/powershell.cjs:105](<../../../../../../scripts/code-atlas/powershell.cjs#L105>)

**Related tests / acceptance harnesses:**

- [scripts/code-atlas/atlas.test.cjs:8](<../../../../../../scripts/code-atlas/atlas.test.cjs#L8>) — file-import-only; coverage not established.

<a id="s-85cbe96cc175cd3c"></a>

## appendPowerShell.record.&lt;anonymous@88:44&gt;

[scripts/code-atlas/powershell.cjs:88](<../../../../../../scripts/code-atlas/powershell.cjs#L88>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [appendPowerShell.record](<powershell.cjs.md#s-b0fd03296648d3e6>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| parameter | any | compiler-inferred | required |

Returns: { name: string; optional: any; rest: boolean; defaultPresent: any; contract: { text: any; evidence: string; }; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [scripts/code-atlas/atlas.test.cjs:8](<../../../../../../scripts/code-atlas/atlas.test.cjs#L8>) — file-import-only; coverage not established.

<a id="s-1cc76e32321e0c86"></a>

## appendPowerShell.&lt;anonymous@164:9&gt;

[scripts/code-atlas/powershell.cjs:164](<../../../../../../scripts/code-atlas/powershell.cjs#L164>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [appendPowerShell](<powershell.cjs.md#s-ebdb565846169f3a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| item | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- item.name.toLowerCase — external-or-dynamic-dispatch; [scripts/code-atlas/powershell.cjs:167](<../../../../../../scripts/code-atlas/powershell.cjs#L167>)
- command.name.toLowerCase — external-or-dynamic-dispatch; [scripts/code-atlas/powershell.cjs:167](<../../../../../../scripts/code-atlas/powershell.cjs#L167>)

**Related tests / acceptance harnesses:**

- [scripts/code-atlas/atlas.test.cjs:8](<../../../../../../scripts/code-atlas/atlas.test.cjs#L8>) — file-import-only; coverage not established.

<a id="s-e6739d2356142929"></a>

## appendPowerShell.&lt;anonymous@215:26&gt;

[scripts/code-atlas/powershell.cjs:215](<../../../../../../scripts/code-atlas/powershell.cjs#L215>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [appendPowerShell](<powershell.cjs.md#s-ebdb565846169f3a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| symbol | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [scripts/code-atlas/atlas.test.cjs:8](<../../../../../../scripts/code-atlas/atlas.test.cjs#L8>) — file-import-only; coverage not established.

<a id="s-535a8295fad2ce05"></a>

## appendPowerShell.&lt;anonymous@218:26&gt;

[scripts/code-atlas/powershell.cjs:218](<../../../../../../scripts/code-atlas/powershell.cjs#L218>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [appendPowerShell](<powershell.cjs.md#s-ebdb565846169f3a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| error | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [scripts/code-atlas/atlas.test.cjs:8](<../../../../../../scripts/code-atlas/atlas.test.cjs#L8>) — file-import-only; coverage not established.
