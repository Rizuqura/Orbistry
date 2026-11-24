# scripts/acceptance/electron-front-office-smoke-main.cjs: symbols

[Atlas](<../../../../README.md>) / [Development and acceptance tooling](<../../../../modules/tooling.md>) / [scripts/acceptance/electron-front-office-smoke-main.cjs:1](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/acceptance/electron-front-office-smoke-main.cjs](<electron-front-office-smoke-main.cjs.md#s-a2dbd42e272ef9e9>) (Module)
- [&lt;anonymous@20:20&gt;](<electron-front-office-smoke-main.cjs.md#s-bcb716265770c8c9>) (ArrowFunction)
- [&lt;anonymous@20:20&gt;.&lt;anonymous@66:30&gt;](<electron-front-office-smoke-main.cjs.md#s-15cd33c807123bae>) (ArrowFunction)
- [&lt;anonymous@20:20&gt;.&lt;anonymous@84:28&gt;](<electron-front-office-smoke-main.cjs.md#s-0350d9a8bdea7e42>) (ArrowFunction)
- [&lt;anonymous@20:20&gt;.&lt;anonymous@84:28&gt;.&lt;anonymous@89:15&gt;](<electron-front-office-smoke-main.cjs.md#s-8cd2218f26064db2>) (ArrowFunction)
- [&lt;anonymous@20:20&gt;.event](<electron-front-office-smoke-main.cjs.md#s-3020f8ceb3ce8b83>) (ArrowFunction)
- [&lt;anonymous@20:20&gt;.start](<electron-front-office-smoke-main.cjs.md#s-c33f8c70f251e158>) (MethodDeclaration)
- [&lt;anonymous@20:20&gt;.start.&lt;anonymous@118:32&gt;](<electron-front-office-smoke-main.cjs.md#s-adf1d35f2cc65dff>) (ArrowFunction)
- [&lt;anonymous@20:20&gt;.start.&lt;anonymous@147:15&gt;](<electron-front-office-smoke-main.cjs.md#s-5adbde7fb49ae2c4>) (ArrowFunction)
- [&lt;anonymous@20:20&gt;.cancel](<electron-front-office-smoke-main.cjs.md#s-39f0f54e108096db>) (MethodDeclaration)
- [&lt;anonymous@168:34&gt;](<electron-front-office-smoke-main.cjs.md#s-9ecdc65789605ff3>) (ArrowFunction)

<a id="s-a2dbd42e272ef9e9"></a>

## scripts/acceptance/electron-front-office-smoke-main.cjs

[scripts/acceptance/electron-front-office-smoke-main.cjs:1](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

- [createOnlineSmokeFetch](<../fixtures/online-smoke-fetch.cjs.md#s-973fc4236a88815b>) — [scripts/acceptance/electron-front-office-smoke-main.cjs:12](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L12>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 9.

- require — module-loader; [scripts/acceptance/electron-front-office-smoke-main.cjs:2](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L2>)
- require — module-loader; [scripts/acceptance/electron-front-office-smoke-main.cjs:3](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L3>)
- require — module-loader; [scripts/acceptance/electron-front-office-smoke-main.cjs:4](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L4>)
- Error — external-or-dynamic-dispatch; [scripts/acceptance/electron-front-office-smoke-main.cjs:6](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L6>)
- app.setPath — external-or-dynamic-dispatch; [scripts/acceptance/electron-front-office-smoke-main.cjs:7](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L7>)
- fs.mkdirSync — external-or-dynamic-dispatch; [scripts/acceptance/electron-front-office-smoke-main.cjs:8](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L8>)
- require — module-loader; [scripts/acceptance/electron-front-office-smoke-main.cjs:11](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L11>)
- app.on — external-or-dynamic-dispatch; [scripts/acceptance/electron-front-office-smoke-main.cjs:168](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L168>)
- 1 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-bcb716265770c8c9"></a>

## &lt;anonymous@20:20&gt;

[scripts/acceptance/electron-front-office-smoke-main.cjs:20](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L20>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/acceptance/electron-front-office-smoke-main.cjs](<electron-front-office-smoke-main.cjs.md#s-a2dbd42e272ef9e9>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| url | any | compiler-inferred | required |
| init | {} | compiler-inferred | optional, default present |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 19.

- URL — external-or-dynamic-dispatch; [scripts/acceptance/electron-front-office-smoke-main.cjs:21](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L21>)
- Response — external-or-dynamic-dispatch; [scripts/acceptance/electron-front-office-smoke-main.cjs:29](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L29>)
- Response.json — external-or-dynamic-dispatch; [scripts/acceptance/electron-front-office-smoke-main.cjs:30](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L30>)
- JSON.parse — external-or-dynamic-dispatch; [scripts/acceptance/electron-front-office-smoke-main.cjs:65](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L65>)
- body.messages?.every — external-or-dynamic-dispatch; [scripts/acceptance/electron-front-office-smoke-main.cjs:66](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L66>)
- Response — external-or-dynamic-dispatch; [scripts/acceptance/electron-front-office-smoke-main.cjs:71](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L71>)
- state.requests.push — external-or-dynamic-dispatch; [scripts/acceptance/electron-front-office-smoke-main.cjs:72](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L72>)
- Response — external-or-dynamic-dispatch; [scripts/acceptance/electron-front-office-smoke-main.cjs:77](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L77>)
- 11 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-15cd33c807123bae"></a>

## &lt;anonymous@20:20&gt;.&lt;anonymous@66:30&gt;

[scripts/acceptance/electron-front-office-smoke-main.cjs:66](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L66>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@20:20&gt;](<electron-front-office-smoke-main.cjs.md#s-bcb716265770c8c9>).

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

<a id="s-0350d9a8bdea7e42"></a>

## &lt;anonymous@20:20&gt;.&lt;anonymous@84:28&gt;

[scripts/acceptance/electron-front-office-smoke-main.cjs:84](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L84>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@20:20&gt;](<electron-front-office-smoke-main.cjs.md#s-bcb716265770c8c9>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| _ | any | compiler-inferred | required |
| reject | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- reject — external-or-dynamic-dispatch; [scripts/acceptance/electron-front-office-smoke-main.cjs:85](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L85>)
- init.signal.addEventListener — external-or-dynamic-dispatch; [scripts/acceptance/electron-front-office-smoke-main.cjs:87](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L87>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-8cd2218f26064db2"></a>

## &lt;anonymous@20:20&gt;.&lt;anonymous@84:28&gt;.&lt;anonymous@89:15&gt;

[scripts/acceptance/electron-front-office-smoke-main.cjs:89](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L89>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@20:20&gt;.&lt;anonymous@84:28&gt;](<electron-front-office-smoke-main.cjs.md#s-0350d9a8bdea7e42>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- reject — external-or-dynamic-dispatch; [scripts/acceptance/electron-front-office-smoke-main.cjs:89](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L89>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-3020f8ceb3ce8b83"></a>

## &lt;anonymous@20:20&gt;.event

[scripts/acceptance/electron-front-office-smoke-main.cjs:105](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L105>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@20:20&gt;](<electron-front-office-smoke-main.cjs.md#s-bcb716265770c8c9>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@20:20&gt;.start](<electron-front-office-smoke-main.cjs.md#s-c33f8c70f251e158>) — [scripts/acceptance/electron-front-office-smoke-main.cjs:111](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L111>)
- [&lt;anonymous@20:20&gt;.start.&lt;anonymous@118:32&gt;](<electron-front-office-smoke-main.cjs.md#s-adf1d35f2cc65dff>) — [scripts/acceptance/electron-front-office-smoke-main.cjs:121](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L121>)
- [&lt;anonymous@20:20&gt;.start.&lt;anonymous@118:32&gt;](<electron-front-office-smoke-main.cjs.md#s-adf1d35f2cc65dff>) — [scripts/acceptance/electron-front-office-smoke-main.cjs:129](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L129>)
- [&lt;anonymous@20:20&gt;.start.&lt;anonymous@118:32&gt;](<electron-front-office-smoke-main.cjs.md#s-adf1d35f2cc65dff>) — [scripts/acceptance/electron-front-office-smoke-main.cjs:137](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L137>)

Unresolved / external call sites: 2.

- encoder.encode — external-or-dynamic-dispatch; [scripts/acceptance/electron-front-office-smoke-main.cjs:106](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L106>)
- JSON.stringify — external-or-dynamic-dispatch; [scripts/acceptance/electron-front-office-smoke-main.cjs:106](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L106>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-front-office-smoke-main.cjs:111](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L111>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-front-office-smoke-main.cjs:121](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L121>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-front-office-smoke-main.cjs:129](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L129>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-front-office-smoke-main.cjs:137](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L137>) — static-call-site; coverage not established.

<a id="s-c33f8c70f251e158"></a>

## &lt;anonymous@20:20&gt;.start

[scripts/acceptance/electron-front-office-smoke-main.cjs:109](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L109>) · MethodDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@20:20&gt;](<electron-front-office-smoke-main.cjs.md#s-bcb716265770c8c9>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| controller | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [&lt;anonymous@20:20&gt;.event](<electron-front-office-smoke-main.cjs.md#s-3020f8ceb3ce8b83>) — [scripts/acceptance/electron-front-office-smoke-main.cjs:111](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L111>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- controller.enqueue — external-or-dynamic-dispatch; [scripts/acceptance/electron-front-office-smoke-main.cjs:110](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L110>)
- body.model.replace — external-or-dynamic-dispatch; [scripts/acceptance/electron-front-office-smoke-main.cjs:112](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L112>)
- setTimeout — external-or-dynamic-dispatch; [scripts/acceptance/electron-front-office-smoke-main.cjs:118](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L118>)
- init.signal?.addEventListener — external-or-dynamic-dispatch; [scripts/acceptance/electron-front-office-smoke-main.cjs:145](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L145>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-adf1d35f2cc65dff"></a>

## &lt;anonymous@20:20&gt;.start.&lt;anonymous@118:32&gt;

[scripts/acceptance/electron-front-office-smoke-main.cjs:118](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L118>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@20:20&gt;.start](<electron-front-office-smoke-main.cjs.md#s-c33f8c70f251e158>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [&lt;anonymous@20:20&gt;.event](<electron-front-office-smoke-main.cjs.md#s-3020f8ceb3ce8b83>) — [scripts/acceptance/electron-front-office-smoke-main.cjs:121](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L121>)
- [&lt;anonymous@20:20&gt;.event](<electron-front-office-smoke-main.cjs.md#s-3020f8ceb3ce8b83>) — [scripts/acceptance/electron-front-office-smoke-main.cjs:129](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L129>)
- [&lt;anonymous@20:20&gt;.event](<electron-front-office-smoke-main.cjs.md#s-3020f8ceb3ce8b83>) — [scripts/acceptance/electron-front-office-smoke-main.cjs:137](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L137>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 8.

- controller.enqueue — external-or-dynamic-dispatch; [scripts/acceptance/electron-front-office-smoke-main.cjs:120](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L120>)
- controller.close — external-or-dynamic-dispatch; [scripts/acceptance/electron-front-office-smoke-main.cjs:125](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L125>)
- controller.enqueue — external-or-dynamic-dispatch; [scripts/acceptance/electron-front-office-smoke-main.cjs:128](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L128>)
- body.model.replace — external-or-dynamic-dispatch; [scripts/acceptance/electron-front-office-smoke-main.cjs:130](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L130>)
- controller.enqueue — external-or-dynamic-dispatch; [scripts/acceptance/electron-front-office-smoke-main.cjs:136](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L136>)
- controller.enqueue — external-or-dynamic-dispatch; [scripts/acceptance/electron-front-office-smoke-main.cjs:142](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L142>)
- encoder.encode — external-or-dynamic-dispatch; [scripts/acceptance/electron-front-office-smoke-main.cjs:142](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L142>)
- controller.close — external-or-dynamic-dispatch; [scripts/acceptance/electron-front-office-smoke-main.cjs:143](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L143>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-5adbde7fb49ae2c4"></a>

## &lt;anonymous@20:20&gt;.start.&lt;anonymous@147:15&gt;

[scripts/acceptance/electron-front-office-smoke-main.cjs:147](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L147>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@20:20&gt;.start](<electron-front-office-smoke-main.cjs.md#s-c33f8c70f251e158>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- clearTimeout — external-or-dynamic-dispatch; [scripts/acceptance/electron-front-office-smoke-main.cjs:148](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L148>)
- controller.error — external-or-dynamic-dispatch; [scripts/acceptance/electron-front-office-smoke-main.cjs:150](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L150>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-39f0f54e108096db"></a>

## &lt;anonymous@20:20&gt;.cancel

[scripts/acceptance/electron-front-office-smoke-main.cjs:156](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L156>) · MethodDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@20:20&gt;](<electron-front-office-smoke-main.cjs.md#s-bcb716265770c8c9>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- clearTimeout — external-or-dynamic-dispatch; [scripts/acceptance/electron-front-office-smoke-main.cjs:157](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L157>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-9ecdc65789605ff3"></a>

## &lt;anonymous@168:34&gt;

[scripts/acceptance/electron-front-office-smoke-main.cjs:168](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L168>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/acceptance/electron-front-office-smoke-main.cjs](<electron-front-office-smoke-main.cjs.md#s-a2dbd42e272ef9e9>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| _ | any | compiler-inferred | required |
| window | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- window.webContents.setBackgroundThrottling — external-or-dynamic-dispatch; [scripts/acceptance/electron-front-office-smoke-main.cjs:169](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L169>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
