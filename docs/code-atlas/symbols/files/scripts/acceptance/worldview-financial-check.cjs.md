# scripts/acceptance/worldview-financial-check.cjs: symbols

[Atlas](<../../../../README.md>) / [Development and acceptance tooling](<../../../../modules/tooling.md>) / [scripts/acceptance/worldview-financial-check.cjs:1](<../../../../../../scripts/acceptance/worldview-financial-check.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/acceptance/worldview-financial-check.cjs](<worldview-financial-check.cjs.md#s-d89781a594ca2435>) (Module)
- [verifyFinancials](<worldview-financial-check.cjs.md#s-7558d83685bde9be>) (FunctionDeclaration)
- [verifyFinancials.&lt;anonymous@6:22&gt;](<worldview-financial-check.cjs.md#s-4a1e2e72f3e17af6>) (ArrowFunction)
- [verifyFinancials.&lt;anonymous@6:22&gt;.quoteSummary](<worldview-financial-check.cjs.md#s-bf2fdeff4c68d5b9>) (MethodDeclaration)
- [verifyFinancials.&lt;anonymous@6:22&gt;.fundamentalsTimeSeries](<worldview-financial-check.cjs.md#s-1e12a0d8ed6a6a3f>) (MethodDeclaration)
- [verifyFinancials.&lt;anonymous@6:22&gt;.fetch](<worldview-financial-check.cjs.md#s-adf2d4159840fcd1>) (ArrowFunction)
- [verifyFinancials.&lt;anonymous@75:5&gt;](<worldview-financial-check.cjs.md#s-877c3abbbb3f64ad>) (ArrowFunction)
- [verifyFinancials.&lt;anonymous@85:5&gt;](<worldview-financial-check.cjs.md#s-96a49ab2408278cc>) (ArrowFunction)
- [verifyFinancials.&lt;anonymous@114:17&gt;](<worldview-financial-check.cjs.md#s-b6be791b12337584>) (ArrowFunction)
- [verifyFinancials.&lt;anonymous@127:35&gt;](<worldview-financial-check.cjs.md#s-5ff6773d6452028c>) (ArrowFunction)
- [verifyFinancials.&lt;anonymous@134:22&gt;](<worldview-financial-check.cjs.md#s-c1a78b2a92bd3b1e>) (ArrowFunction)
- [verifyFinancials.&lt;anonymous@140:22&gt;](<worldview-financial-check.cjs.md#s-063b20785b6ec550>) (ArrowFunction)
- [verifyFinancials.&lt;anonymous@150:35&gt;](<worldview-financial-check.cjs.md#s-1fe35db173116763>) (ArrowFunction)
- [verifyFinancials.&lt;anonymous@153:23&gt;](<worldview-financial-check.cjs.md#s-2f7f20038588ac34>) (ArrowFunction)

<a id="s-d89781a594ca2435"></a>

## scripts/acceptance/worldview-financial-check.cjs

[scripts/acceptance/worldview-financial-check.cjs:1](<../../../../../../scripts/acceptance/worldview-financial-check.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- require — module-loader; [scripts/acceptance/worldview-financial-check.cjs:1](<../../../../../../scripts/acceptance/worldview-financial-check.cjs#L1>)
- require — module-loader; [scripts/acceptance/worldview-financial-check.cjs:2](<../../../../../../scripts/acceptance/worldview-financial-check.cjs#L2>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-financials-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-financials-smoke.cjs#L7>) — file-import-only; coverage not established.

<a id="s-7558d83685bde9be"></a>

## verifyFinancials

[scripts/acceptance/worldview-financial-check.cjs:5](<../../../../../../scripts/acceptance/worldview-financial-check.cjs#L5>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Verifies financial and earnings sections through the real IPC/cache/viewer using deterministic provider responses.

Purpose evidence: jsdoc.

Exported as: verifyFinancials ([scripts/acceptance/worldview-financial-check.cjs:1](<../../../../../../scripts/acceptance/worldview-financial-check.cjs#L1>)).

Lexical owner: [scripts/acceptance/worldview-financial-check.cjs](<worldview-financial-check.cjs.md#s-d89781a594ca2435>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { app, page, createChip } | { app: any; page: any; createChip: any; } | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [main](<electron-financials-smoke.cjs.md#s-6f55721d64d075c2>) — [scripts/acceptance/electron-financials-smoke.cjs:48](<../../../../../../scripts/acceptance/electron-financials-smoke.cjs#L48>)

Unresolved / external call sites: 71.

- app.evaluate — external-or-dynamic-dispatch; [scripts/acceptance/worldview-financial-check.cjs:6](<../../../../../../scripts/acceptance/worldview-financial-check.cjs#L6>)
- path.resolve — external-or-dynamic-dispatch; [scripts/acceptance/worldview-financial-check.cjs:72](<../../../../../../scripts/acceptance/worldview-financial-check.cjs#L72>)
- createChip — external-or-dynamic-dispatch; [scripts/acceptance/worldview-financial-check.cjs:73](<../../../../../../scripts/acceptance/worldview-financial-check.cjs#L73>)
- page.waitForFunction — external-or-dynamic-dispatch; [scripts/acceptance/worldview-financial-check.cjs:74](<../../../../../../scripts/acceptance/worldview-financial-check.cjs#L74>)
- page .getByRole("button", { name: "View Knowledge Card", exact: true }) .click — external-or-dynamic-dispatch; [scripts/acceptance/worldview-financial-check.cjs:80](<../../../../../../scripts/acceptance/worldview-financial-check.cjs#L80>)
- page .getByRole — external-or-dynamic-dispatch; [scripts/acceptance/worldview-financial-check.cjs:80](<../../../../../../scripts/acceptance/worldview-financial-check.cjs#L80>)
- page.locator — external-or-dynamic-dispatch; [scripts/acceptance/worldview-financial-check.cjs:83](<../../../../../../scripts/acceptance/worldview-financial-check.cjs#L83>)
- page.waitForFunction — external-or-dynamic-dispatch; [scripts/acceptance/worldview-financial-check.cjs:84](<../../../../../../scripts/acceptance/worldview-financial-check.cjs#L84>)
- 63 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-financials-smoke.cjs:48](<../../../../../../scripts/acceptance/electron-financials-smoke.cjs#L48>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-financials-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-financials-smoke.cjs#L7>) — file-import-only; coverage not established.

<a id="s-4a1e2e72f3e17af6"></a>

## verifyFinancials.&lt;anonymous@6:22&gt;

[scripts/acceptance/worldview-financial-check.cjs:6](<../../../../../../scripts/acceptance/worldview-financial-check.cjs#L6>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyFinancials](<worldview-financial-check.cjs.md#s-7558d83685bde9be>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| _ | any | compiler-inferred | required |
| repository | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 6.

- process .getBuiltinModule("node:module") .createRequire — external-or-dynamic-dispatch; [scripts/acceptance/worldview-financial-check.cjs:7](<../../../../../../scripts/acceptance/worldview-financial-check.cjs#L7>)
- process .getBuiltinModule — external-or-dynamic-dispatch; [scripts/acceptance/worldview-financial-check.cjs:7](<../../../../../../scripts/acceptance/worldview-financial-check.cjs#L7>)
- require — module-loader; [scripts/acceptance/worldview-financial-check.cjs:10](<../../../../../../scripts/acceptance/worldview-financial-check.cjs#L10>)
- require — module-loader; [scripts/acceptance/worldview-financial-check.cjs:11](<../../../../../../scripts/acceptance/worldview-financial-check.cjs#L11>)
- createFinancialEngine — external-or-dynamic-dispatch; [scripts/acceptance/worldview-financial-check.cjs:15](<../../../../../../scripts/acceptance/worldview-financial-check.cjs#L15>)
- service.createFinancialService — external-or-dynamic-dispatch; [scripts/acceptance/worldview-financial-check.cjs:65](<../../../../../../scripts/acceptance/worldview-financial-check.cjs#L65>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-financials-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-financials-smoke.cjs#L7>) — file-import-only; coverage not established.

<a id="s-bf2fdeff4c68d5b9"></a>

## verifyFinancials.&lt;anonymous@6:22&gt;.quoteSummary

[scripts/acceptance/worldview-financial-check.cjs:18](<../../../../../../scripts/acceptance/worldview-financial-check.cjs#L18>) · MethodDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Supplies fixture earnings with a real-shaped fiscal date and scheduled estimate.

Purpose evidence: jsdoc.

Lexical owner: [verifyFinancials.&lt;anonymous@6:22&gt;](<worldview-financial-check.cjs.md#s-4a1e2e72f3e17af6>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- Error — external-or-dynamic-dispatch; [scripts/acceptance/worldview-financial-check.cjs:19](<../../../../../../scripts/acceptance/worldview-financial-check.cjs#L19>)
- Date — external-or-dynamic-dispatch; [scripts/acceptance/worldview-financial-check.cjs:25](<../../../../../../scripts/acceptance/worldview-financial-check.cjs#L25>)
- Date — external-or-dynamic-dispatch; [scripts/acceptance/worldview-financial-check.cjs:34](<../../../../../../scripts/acceptance/worldview-financial-check.cjs#L34>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-financials-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-financials-smoke.cjs#L7>) — file-import-only; coverage not established.

<a id="s-1e12a0d8ed6a6a3f"></a>

## verifyFinancials.&lt;anonymous@6:22&gt;.fundamentalsTimeSeries

[scripts/acceptance/worldview-financial-check.cjs:41](<../../../../../../scripts/acceptance/worldview-financial-check.cjs#L41>) · MethodDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Supplies independent annual and quarterly observations.

Purpose evidence: jsdoc.

Lexical owner: [verifyFinancials.&lt;anonymous@6:22&gt;](<worldview-financial-check.cjs.md#s-4a1e2e72f3e17af6>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| symbol | any | compiler-inferred | required |
| options | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- Date — external-or-dynamic-dispatch; [scripts/acceptance/worldview-financial-check.cjs:44](<../../../../../../scripts/acceptance/worldview-financial-check.cjs#L44>)
- Date — external-or-dynamic-dispatch; [scripts/acceptance/worldview-financial-check.cjs:50](<../../../../../../scripts/acceptance/worldview-financial-check.cjs#L50>)
- Date — external-or-dynamic-dispatch; [scripts/acceptance/worldview-financial-check.cjs:56](<../../../../../../scripts/acceptance/worldview-financial-check.cjs#L56>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-financials-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-financials-smoke.cjs#L7>) — file-import-only; coverage not established.

<a id="s-adf2d4159840fcd1"></a>

## verifyFinancials.&lt;anonymous@6:22&gt;.fetch

[scripts/acceptance/worldview-financial-check.cjs:66](<../../../../../../scripts/acceptance/worldview-financial-check.cjs#L66>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyFinancials.&lt;anonymous@6:22&gt;](<worldview-financial-check.cjs.md#s-4a1e2e72f3e17af6>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| symbol | any | compiler-inferred | required |
| kind | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- engine.fetch — external-or-dynamic-dispatch; [scripts/acceptance/worldview-financial-check.cjs:68](<../../../../../../scripts/acceptance/worldview-financial-check.cjs#L68>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-financials-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-financials-smoke.cjs#L7>) — file-import-only; coverage not established.

<a id="s-877c3abbbb3f64ad"></a>

## verifyFinancials.&lt;anonymous@75:5&gt;

[scripts/acceptance/worldview-financial-check.cjs:75](<../../../../../../scripts/acceptance/worldview-financial-check.cjs#L75>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyFinancials](<worldview-financial-check.cjs.md#s-7558d83685bde9be>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- /Saving&#124;Loading/.test — external-or-dynamic-dispatch; [scripts/acceptance/worldview-financial-check.cjs:76](<../../../../../../scripts/acceptance/worldview-financial-check.cjs#L76>)
- document.querySelector — external-or-dynamic-dispatch; [scripts/acceptance/worldview-financial-check.cjs:77](<../../../../../../scripts/acceptance/worldview-financial-check.cjs#L77>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-financials-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-financials-smoke.cjs#L7>) — file-import-only; coverage not established.

<a id="s-96a49ab2408278cc"></a>

## verifyFinancials.&lt;anonymous@85:5&gt;

[scripts/acceptance/worldview-financial-check.cjs:85](<../../../../../../scripts/acceptance/worldview-financial-check.cjs#L85>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyFinancials](<worldview-financial-check.cjs.md#s-7558d83685bde9be>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- document.querySelector — external-or-dynamic-dispatch; [scripts/acceptance/worldview-financial-check.cjs:85](<../../../../../../scripts/acceptance/worldview-financial-check.cjs#L85>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-financials-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-financials-smoke.cjs#L7>) — file-import-only; coverage not established.

<a id="s-b6be791b12337584"></a>

## verifyFinancials.&lt;anonymous@114:17&gt;

[scripts/acceptance/worldview-financial-check.cjs:114](<../../../../../../scripts/acceptance/worldview-financial-check.cjs#L114>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyFinancials](<worldview-financial-check.cjs.md#s-7558d83685bde9be>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| node | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- node.closest — external-or-dynamic-dispatch; [scripts/acceptance/worldview-financial-check.cjs:114](<../../../../../../scripts/acceptance/worldview-financial-check.cjs#L114>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-financials-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-financials-smoke.cjs#L7>) — file-import-only; coverage not established.

<a id="s-5ff6773d6452028c"></a>

## verifyFinancials.&lt;anonymous@127:35&gt;

[scripts/acceptance/worldview-financial-check.cjs:127](<../../../../../../scripts/acceptance/worldview-financial-check.cjs#L127>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyFinancials](<worldview-financial-check.cjs.md#s-7558d83685bde9be>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-financials-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-financials-smoke.cjs#L7>) — file-import-only; coverage not established.

<a id="s-c1a78b2a92bd3b1e"></a>

## verifyFinancials.&lt;anonymous@134:22&gt;

[scripts/acceptance/worldview-financial-check.cjs:134](<../../../../../../scripts/acceptance/worldview-financial-check.cjs#L134>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyFinancials](<worldview-financial-check.cjs.md#s-7558d83685bde9be>).

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

- [scripts/acceptance/electron-financials-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-financials-smoke.cjs#L7>) — file-import-only; coverage not established.

<a id="s-063b20785b6ec550"></a>

## verifyFinancials.&lt;anonymous@140:22&gt;

[scripts/acceptance/worldview-financial-check.cjs:140](<../../../../../../scripts/acceptance/worldview-financial-check.cjs#L140>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyFinancials](<worldview-financial-check.cjs.md#s-7558d83685bde9be>).

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

- [scripts/acceptance/electron-financials-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-financials-smoke.cjs#L7>) — file-import-only; coverage not established.

<a id="s-1fe35db173116763"></a>

## verifyFinancials.&lt;anonymous@150:35&gt;

[scripts/acceptance/worldview-financial-check.cjs:150](<../../../../../../scripts/acceptance/worldview-financial-check.cjs#L150>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyFinancials](<worldview-financial-check.cjs.md#s-7558d83685bde9be>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-financials-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-financials-smoke.cjs#L7>) — file-import-only; coverage not established.

<a id="s-2f7f20038588ac34"></a>

## verifyFinancials.&lt;anonymous@153:23&gt;

[scripts/acceptance/worldview-financial-check.cjs:153](<../../../../../../scripts/acceptance/worldview-financial-check.cjs#L153>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyFinancials](<worldview-financial-check.cjs.md#s-7558d83685bde9be>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| node | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-financials-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-financials-smoke.cjs#L7>) — file-import-only; coverage not established.
