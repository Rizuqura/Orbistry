# scripts/acceptance/electron-knowledge-smoke.cjs: symbols

[Atlas](<../../../../README.md>) / [Development and acceptance tooling](<../../../../modules/tooling.md>) / [scripts/acceptance/electron-knowledge-smoke.cjs:1](<../../../../../../scripts/acceptance/electron-knowledge-smoke.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/acceptance/electron-knowledge-smoke.cjs](<electron-knowledge-smoke.cjs.md#s-461812be3aaa4aa3>) (Module)
- [main](<electron-knowledge-smoke.cjs.md#s-b82014c25b46c7e1>) (FunctionDeclaration)
- [main.launch](<electron-knowledge-smoke.cjs.md#s-4c275fefe0bf70f0>) (ArrowFunction)
- [main.launch.&lt;anonymous@34:26&gt;](<electron-knowledge-smoke.cjs.md#s-67dd4ab61e8ce584>) (ArrowFunction)
- [main.&lt;anonymous@46:25&gt;](<electron-knowledge-smoke.cjs.md#s-b104078d5342cd19>) (ArrowFunction)
- [main.&lt;anonymous@78:47&gt;](<electron-knowledge-smoke.cjs.md#s-41fbad7c21510835>) (ArrowFunction)
- [main.&lt;anonymous@83:47&gt;](<electron-knowledge-smoke.cjs.md#s-8710bbad48f06f1b>) (ArrowFunction)
- [main.&lt;anonymous@123:32&gt;](<electron-knowledge-smoke.cjs.md#s-ba24f9239609c98b>) (ArrowFunction)
- [main.&lt;anonymous@163:32&gt;](<electron-knowledge-smoke.cjs.md#s-dd7700001131fcca>) (ArrowFunction)
- [main.&lt;anonymous@183:27&gt;](<electron-knowledge-smoke.cjs.md#s-056778375605f330>) (ArrowFunction)
- [main.&lt;anonymous@188:45&gt;](<electron-knowledge-smoke.cjs.md#s-14282138b73f514f>) (ArrowFunction)
- [main.&lt;anonymous@206:29&gt;](<electron-knowledge-smoke.cjs.md#s-9a1e8b6389c0c714>) (ArrowFunction)
- [main.&lt;anonymous@249:9&gt;](<electron-knowledge-smoke.cjs.md#s-2ffe92b0b4f10fea>) (ArrowFunction)
- [&lt;anonymous@285:14&gt;](<electron-knowledge-smoke.cjs.md#s-b8a8f06719b0dab3>) (ArrowFunction)

<a id="s-461812be3aaa4aa3"></a>

## scripts/acceptance/electron-knowledge-smoke.cjs

[scripts/acceptance/electron-knowledge-smoke.cjs:1](<../../../../../../scripts/acceptance/electron-knowledge-smoke.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

- [main](<electron-knowledge-smoke.cjs.md#s-b82014c25b46c7e1>) — [scripts/acceptance/electron-knowledge-smoke.cjs:285](<../../../../../../scripts/acceptance/electron-knowledge-smoke.cjs#L285>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 8.

- require — module-loader; [scripts/acceptance/electron-knowledge-smoke.cjs:1](<../../../../../../scripts/acceptance/electron-knowledge-smoke.cjs#L1>)
- require — module-loader; [scripts/acceptance/electron-knowledge-smoke.cjs:2](<../../../../../../scripts/acceptance/electron-knowledge-smoke.cjs#L2>)
- require — module-loader; [scripts/acceptance/electron-knowledge-smoke.cjs:3](<../../../../../../scripts/acceptance/electron-knowledge-smoke.cjs#L3>)
- require — module-loader; [scripts/acceptance/electron-knowledge-smoke.cjs:4](<../../../../../../scripts/acceptance/electron-knowledge-smoke.cjs#L4>)
- require — module-loader; [scripts/acceptance/electron-knowledge-smoke.cjs:5](<../../../../../../scripts/acceptance/electron-knowledge-smoke.cjs#L5>)
- require — module-loader; [scripts/acceptance/electron-knowledge-smoke.cjs:6](<../../../../../../scripts/acceptance/electron-knowledge-smoke.cjs#L6>)
- require — module-loader; [scripts/acceptance/electron-knowledge-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-knowledge-smoke.cjs#L7>)
- main().catch — external-or-dynamic-dispatch; [scripts/acceptance/electron-knowledge-smoke.cjs:285](<../../../../../../scripts/acceptance/electron-knowledge-smoke.cjs#L285>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-b82014c25b46c7e1"></a>

## main

[scripts/acceptance/electron-knowledge-smoke.cjs:8](<../../../../../../scripts/acceptance/electron-knowledge-smoke.cjs#L8>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/acceptance/electron-knowledge-smoke.cjs](<electron-knowledge-smoke.cjs.md#s-461812be3aaa4aa3>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [main.launch](<electron-knowledge-smoke.cjs.md#s-4c275fefe0bf70f0>) — [scripts/acceptance/electron-knowledge-smoke.cjs:45](<../../../../../../scripts/acceptance/electron-knowledge-smoke.cjs#L45>)
- [main.launch](<electron-knowledge-smoke.cjs.md#s-4c275fefe0bf70f0>) — [scripts/acceptance/electron-knowledge-smoke.cjs:212](<../../../../../../scripts/acceptance/electron-knowledge-smoke.cjs#L212>)

**Called by (statically resolved):**

- [scripts/acceptance/electron-knowledge-smoke.cjs](<electron-knowledge-smoke.cjs.md#s-461812be3aaa4aa3>) — [scripts/acceptance/electron-knowledge-smoke.cjs:285](<../../../../../../scripts/acceptance/electron-knowledge-smoke.cjs#L285>)

Unresolved / external call sites: 104.

- fs.mkdtemp — external-or-dynamic-dispatch; [scripts/acceptance/electron-knowledge-smoke.cjs:9](<../../../../../../scripts/acceptance/electron-knowledge-smoke.cjs#L9>)
- path.join — external-or-dynamic-dispatch; [scripts/acceptance/electron-knowledge-smoke.cjs:10](<../../../../../../scripts/acceptance/electron-knowledge-smoke.cjs#L10>)
- os.tmpdir — external-or-dynamic-dispatch; [scripts/acceptance/electron-knowledge-smoke.cjs:10](<../../../../../../scripts/acceptance/electron-knowledge-smoke.cjs#L10>)
- path.join — external-or-dynamic-dispatch; [scripts/acceptance/electron-knowledge-smoke.cjs:12](<../../../../../../scripts/acceptance/electron-knowledge-smoke.cjs#L12>)
- path.join — external-or-dynamic-dispatch; [scripts/acceptance/electron-knowledge-smoke.cjs:13](<../../../../../../scripts/acceptance/electron-knowledge-smoke.cjs#L13>)
- fs.mkdir — external-or-dynamic-dispatch; [scripts/acceptance/electron-knowledge-smoke.cjs:39](<../../../../../../scripts/acceptance/electron-knowledge-smoke.cjs#L39>)
- fs.mkdir — external-or-dynamic-dispatch; [scripts/acceptance/electron-knowledge-smoke.cjs:40](<../../../../../../scripts/acceptance/electron-knowledge-smoke.cjs#L40>)
- fs.writeFile — external-or-dynamic-dispatch; [scripts/acceptance/electron-knowledge-smoke.cjs:41](<../../../../../../scripts/acceptance/electron-knowledge-smoke.cjs#L41>)
- 96 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-knowledge-smoke.cjs:285](<../../../../../../scripts/acceptance/electron-knowledge-smoke.cjs#L285>) — static-call-site; coverage not established.

<a id="s-4c275fefe0bf70f0"></a>

## main.launch

[scripts/acceptance/electron-knowledge-smoke.cjs:16](<../../../../../../scripts/acceptance/electron-knowledge-smoke.cjs#L16>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-knowledge-smoke.cjs.md#s-b82014c25b46c7e1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [main](<electron-knowledge-smoke.cjs.md#s-b82014c25b46c7e1>) — [scripts/acceptance/electron-knowledge-smoke.cjs:45](<../../../../../../scripts/acceptance/electron-knowledge-smoke.cjs#L45>)
- [main](<electron-knowledge-smoke.cjs.md#s-b82014c25b46c7e1>) — [scripts/acceptance/electron-knowledge-smoke.cjs:212](<../../../../../../scripts/acceptance/electron-knowledge-smoke.cjs#L212>)

Unresolved / external call sites: 9.

- electron.launch — external-or-dynamic-dispatch; [scripts/acceptance/electron-knowledge-smoke.cjs:24](<../../../../../../scripts/acceptance/electron-knowledge-smoke.cjs#L24>)
- path.resolve — external-or-dynamic-dispatch; [scripts/acceptance/electron-knowledge-smoke.cjs:26](<../../../../../../scripts/acceptance/electron-knowledge-smoke.cjs#L26>)
- app.firstWindow — external-or-dynamic-dispatch; [scripts/acceptance/electron-knowledge-smoke.cjs:32](<../../../../../../scripts/acceptance/electron-knowledge-smoke.cjs#L32>)
- page.setDefaultTimeout — external-or-dynamic-dispatch; [scripts/acceptance/electron-knowledge-smoke.cjs:33](<../../../../../../scripts/acceptance/electron-knowledge-smoke.cjs#L33>)
- page.on — external-or-dynamic-dispatch; [scripts/acceptance/electron-knowledge-smoke.cjs:34](<../../../../../../scripts/acceptance/electron-knowledge-smoke.cjs#L34>)
- page.locator(".startup-screen").waitFor — external-or-dynamic-dispatch; [scripts/acceptance/electron-knowledge-smoke.cjs:35](<../../../../../../scripts/acceptance/electron-knowledge-smoke.cjs#L35>)
- page.locator — external-or-dynamic-dispatch; [scripts/acceptance/electron-knowledge-smoke.cjs:35](<../../../../../../scripts/acceptance/electron-knowledge-smoke.cjs#L35>)
- page.getByRole("button", { name: "AGENT", exact: true }).click — external-or-dynamic-dispatch; [scripts/acceptance/electron-knowledge-smoke.cjs:36](<../../../../../../scripts/acceptance/electron-knowledge-smoke.cjs#L36>)
- 1 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-knowledge-smoke.cjs:45](<../../../../../../scripts/acceptance/electron-knowledge-smoke.cjs#L45>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-knowledge-smoke.cjs:212](<../../../../../../scripts/acceptance/electron-knowledge-smoke.cjs#L212>) — static-call-site; coverage not established.

<a id="s-67dd4ab61e8ce584"></a>

## main.launch.&lt;anonymous@34:26&gt;

[scripts/acceptance/electron-knowledge-smoke.cjs:34](<../../../../../../scripts/acceptance/electron-knowledge-smoke.cjs#L34>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main.launch](<electron-knowledge-smoke.cjs.md#s-4c275fefe0bf70f0>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| e | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- errors.push — external-or-dynamic-dispatch; [scripts/acceptance/electron-knowledge-smoke.cjs:34](<../../../../../../scripts/acceptance/electron-knowledge-smoke.cjs#L34>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-b104078d5342cd19"></a>

## main.&lt;anonymous@46:25&gt;

[scripts/acceptance/electron-knowledge-smoke.cjs:46](<../../../../../../scripts/acceptance/electron-knowledge-smoke.cjs#L46>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-knowledge-smoke.cjs.md#s-b82014c25b46c7e1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- window.orbistryDesktop.ai.editContextBox — external-or-dynamic-dispatch; [scripts/acceptance/electron-knowledge-smoke.cjs:47](<../../../../../../scripts/acceptance/electron-knowledge-smoke.cjs#L47>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-41fbad7c21510835"></a>

## main.&lt;anonymous@78:47&gt;

[scripts/acceptance/electron-knowledge-smoke.cjs:78](<../../../../../../scripts/acceptance/electron-knowledge-smoke.cjs#L78>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-knowledge-smoke.cjs.md#s-b82014c25b46c7e1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- window.orbistryDesktop.ai.listConversations — external-or-dynamic-dispatch; [scripts/acceptance/electron-knowledge-smoke.cjs:79](<../../../../../../scripts/acceptance/electron-knowledge-smoke.cjs#L79>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-8710bbad48f06f1b"></a>

## main.&lt;anonymous@83:47&gt;

[scripts/acceptance/electron-knowledge-smoke.cjs:83](<../../../../../../scripts/acceptance/electron-knowledge-smoke.cjs#L83>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-knowledge-smoke.cjs.md#s-b82014c25b46c7e1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| m | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-ba24f9239609c98b"></a>

## main.&lt;anonymous@123:32&gt;

[scripts/acceptance/electron-knowledge-smoke.cjs:123](<../../../../../../scripts/acceptance/electron-knowledge-smoke.cjs#L123>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-knowledge-smoke.cjs.md#s-b82014c25b46c7e1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- Array.isArray — external-or-dynamic-dispatch; [scripts/acceptance/electron-knowledge-smoke.cjs:125](<../../../../../../scripts/acceptance/electron-knowledge-smoke.cjs#L125>)
- JSON.parse — external-or-dynamic-dispatch; [scripts/acceptance/electron-knowledge-smoke.cjs:126](<../../../../../../scripts/acceptance/electron-knowledge-smoke.cjs#L126>)
- document.querySelector — external-or-dynamic-dispatch; [scripts/acceptance/electron-knowledge-smoke.cjs:127](<../../../../../../scripts/acceptance/electron-knowledge-smoke.cjs#L127>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-dd7700001131fcca"></a>

## main.&lt;anonymous@163:32&gt;

[scripts/acceptance/electron-knowledge-smoke.cjs:163](<../../../../../../scripts/acceptance/electron-knowledge-smoke.cjs#L163>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-knowledge-smoke.cjs.md#s-b82014c25b46c7e1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- JSON.parse — external-or-dynamic-dispatch; [scripts/acceptance/electron-knowledge-smoke.cjs:166](<../../../../../../scripts/acceptance/electron-knowledge-smoke.cjs#L166>)
- document.querySelector — external-or-dynamic-dispatch; [scripts/acceptance/electron-knowledge-smoke.cjs:167](<../../../../../../scripts/acceptance/electron-knowledge-smoke.cjs#L167>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-056778375605f330"></a>

## main.&lt;anonymous@183:27&gt;

[scripts/acceptance/electron-knowledge-smoke.cjs:183](<../../../../../../scripts/acceptance/electron-knowledge-smoke.cjs#L183>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-knowledge-smoke.cjs.md#s-b82014c25b46c7e1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| element | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-14282138b73f514f"></a>

## main.&lt;anonymous@188:45&gt;

[scripts/acceptance/electron-knowledge-smoke.cjs:188](<../../../../../../scripts/acceptance/electron-knowledge-smoke.cjs#L188>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-knowledge-smoke.cjs.md#s-b82014c25b46c7e1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| conversation | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- window.orbistryDesktop.ai.chat — external-or-dynamic-dispatch; [scripts/acceptance/electron-knowledge-smoke.cjs:190](<../../../../../../scripts/acceptance/electron-knowledge-smoke.cjs#L190>)
- crypto.randomUUID — external-or-dynamic-dispatch; [scripts/acceptance/electron-knowledge-smoke.cjs:192](<../../../../../../scripts/acceptance/electron-knowledge-smoke.cjs#L192>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-9a1e8b6389c0c714"></a>

## main.&lt;anonymous@206:29&gt;

[scripts/acceptance/electron-knowledge-smoke.cjs:206](<../../../../../../scripts/acceptance/electron-knowledge-smoke.cjs#L206>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-knowledge-smoke.cjs.md#s-b82014c25b46c7e1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- window.orbistryDesktop.ai.listConversations — external-or-dynamic-dispatch; [scripts/acceptance/electron-knowledge-smoke.cjs:206](<../../../../../../scripts/acceptance/electron-knowledge-smoke.cjs#L206>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-2ffe92b0b4f10fea"></a>

## main.&lt;anonymous@249:9&gt;

[scripts/acceptance/electron-knowledge-smoke.cjs:249](<../../../../../../scripts/acceptance/electron-knowledge-smoke.cjs#L249>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-knowledge-smoke.cjs.md#s-b82014c25b46c7e1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: "string" &#124; "number" &#124; "bigint" &#124; "boolean" &#124; "symbol" &#124; "undefined" &#124; "object" &#124; "function" (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-b8a8f06719b0dab3"></a>

## &lt;anonymous@285:14&gt;

[scripts/acceptance/electron-knowledge-smoke.cjs:285](<../../../../../../scripts/acceptance/electron-knowledge-smoke.cjs#L285>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/acceptance/electron-knowledge-smoke.cjs](<electron-knowledge-smoke.cjs.md#s-461812be3aaa4aa3>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| error | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- console.error — external-or-dynamic-dispatch; [scripts/acceptance/electron-knowledge-smoke.cjs:286](<../../../../../../scripts/acceptance/electron-knowledge-smoke.cjs#L286>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
