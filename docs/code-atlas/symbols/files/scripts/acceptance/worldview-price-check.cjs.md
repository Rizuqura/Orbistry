# scripts/acceptance/worldview-price-check.cjs: symbols

[Atlas](<../../../../README.md>) / [Development and acceptance tooling](<../../../../modules/tooling.md>) / [scripts/acceptance/worldview-price-check.cjs:1](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/acceptance/worldview-price-check.cjs](<worldview-price-check.cjs.md#s-627d9ee6ec79cefd>) (Module)
- [verifyDailyPrices](<worldview-price-check.cjs.md#s-983372c47379ea5c>) (FunctionDeclaration)
- [verifyDailyPrices.&lt;anonymous@7:22&gt;](<worldview-price-check.cjs.md#s-c4477dbb3a4573a6>) (ArrowFunction)
- [verifyDailyPrices.&lt;anonymous@7:22&gt;.fetch](<worldview-price-check.cjs.md#s-c40aa1d7568f852a>) (MethodDeclaration)
- [verifyDailyPrices.&lt;anonymous@7:22&gt;.fetch.&lt;anonymous@34:52&gt;](<worldview-price-check.cjs.md#s-741db8fe3d3d553e>) (ArrowFunction)
- [verifyDailyPrices.&lt;anonymous@7:22&gt;.price](<worldview-price-check.cjs.md#s-a9e23fabd181798a>) (MethodDeclaration)
- [verifyDailyPrices.&lt;anonymous@7:22&gt;.price.&lt;anonymous@78:47&gt;](<worldview-price-check.cjs.md#s-8b62091ffb99d968>) (ArrowFunction)
- [verifyDailyPrices.&lt;anonymous@91:5&gt;](<worldview-price-check.cjs.md#s-9db446fc4b8ebd15>) (ArrowFunction)
- [verifyDailyPrices.&lt;anonymous@105:5&gt;](<worldview-price-check.cjs.md#s-b80d953063b7e0a4>) (ArrowFunction)
- [verifyDailyPrices.&lt;anonymous@124:24&gt;](<worldview-price-check.cjs.md#s-695b4305e92d77a3>) (ArrowFunction)
- [verifyDailyPrices.&lt;anonymous@137:24&gt;](<worldview-price-check.cjs.md#s-9402960f95aeb443>) (ArrowFunction)
- [verifyDailyPrices.&lt;anonymous@147:24&gt;](<worldview-price-check.cjs.md#s-4182467f41ceed9e>) (ArrowFunction)
- [verifyDailyPrices.&lt;anonymous@151:22&gt;](<worldview-price-check.cjs.md#s-c50367752621dcad>) (ArrowFunction)
- [verifyDailyPrices.&lt;anonymous@160:22&gt;](<worldview-price-check.cjs.md#s-8bb8461025dacfac>) (ArrowFunction)
- [verifyDailyPrices.&lt;anonymous@175:39&gt;](<worldview-price-check.cjs.md#s-b29345ee5e2831c3>) (ArrowFunction)
- [verifyDailyPrices.&lt;anonymous@175:39&gt;.&lt;anonymous@179:12&gt;](<worldview-price-check.cjs.md#s-2e1d5577ee94db57>) (ArrowFunction)
- [verifyDailyPrices.&lt;anonymous@192:26&gt;](<worldview-price-check.cjs.md#s-e6b9a2c45279e183>) (ArrowFunction)
- [verifyDailyPrices.&lt;anonymous@198:17&gt;](<worldview-price-check.cjs.md#s-220bf89670ed9080>) (ArrowFunction)
- [verifyDailyPrices.&lt;anonymous@217:24&gt;](<worldview-price-check.cjs.md#s-33cabe49d0c90522>) (ArrowFunction)
- [verifyDailyPrices.&lt;anonymous@221:22&gt;](<worldview-price-check.cjs.md#s-d3b357699edcf0ed>) (ArrowFunction)
- [verifyDailyPrices.&lt;anonymous@246:22&gt;](<worldview-price-check.cjs.md#s-763b36f6cd336cb0>) (ArrowFunction)

<a id="s-627d9ee6ec79cefd"></a>

## scripts/acceptance/worldview-price-check.cjs

[scripts/acceptance/worldview-price-check.cjs:1](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- require — module-loader; [scripts/acceptance/worldview-price-check.cjs:1](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L1>)
- require — module-loader; [scripts/acceptance/worldview-price-check.cjs:2](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L2>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-daily-price-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-daily-price-smoke.cjs#L7>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-worldview-smoke.cjs:14](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L14>) — file-import-only; coverage not established.

<a id="s-983372c47379ea5c"></a>

## verifyDailyPrices

[scripts/acceptance/worldview-price-check.cjs:5](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L5>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Verifies ticker persistence, charts, keyboard/range controls and explicit offline cache status in an isolated Electron Universe using an injected synthetic market client.

Purpose evidence: jsdoc.

Exported as: verifyDailyPrices ([scripts/acceptance/worldview-price-check.cjs:1](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L1>)).

Lexical owner: [scripts/acceptance/worldview-price-check.cjs](<worldview-price-check.cjs.md#s-627d9ee6ec79cefd>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { app, page, vault, createChip } | { app: any; page: any; vault: any; createChip: any; } | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [main](<electron-daily-price-smoke.cjs.md#s-c0095b32a5c0404a>) — [scripts/acceptance/electron-daily-price-smoke.cjs:48](<../../../../../../scripts/acceptance/electron-daily-price-smoke.cjs#L48>)
- [main](<electron-worldview-smoke.cjs.md#s-d74fd257ed7793d3>) — [scripts/acceptance/electron-worldview-smoke.cjs:1250](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L1250>)

Unresolved / external call sites: 157.

- console.log — external-or-dynamic-dispatch; [scripts/acceptance/worldview-price-check.cjs:6](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L6>)
- app.evaluate — external-or-dynamic-dispatch; [scripts/acceptance/worldview-price-check.cjs:7](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L7>)
- path.resolve — external-or-dynamic-dispatch; [scripts/acceptance/worldview-price-check.cjs:88](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L88>)
- createChip — external-or-dynamic-dispatch; [scripts/acceptance/worldview-price-check.cjs:89](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L89>)
- page.waitForFunction — external-or-dynamic-dispatch; [scripts/acceptance/worldview-price-check.cjs:90](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L90>)
- page .getByRole("button", { name: "View Knowledge Card", exact: true }) .click — external-or-dynamic-dispatch; [scripts/acceptance/worldview-price-check.cjs:96](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L96>)
- page .getByRole — external-or-dynamic-dispatch; [scripts/acceptance/worldview-price-check.cjs:96](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L96>)
- page.locator — external-or-dynamic-dispatch; [scripts/acceptance/worldview-price-check.cjs:99](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L99>)
- 149 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-daily-price-smoke.cjs:48](<../../../../../../scripts/acceptance/electron-daily-price-smoke.cjs#L48>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-worldview-smoke.cjs:1250](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L1250>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-daily-price-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-daily-price-smoke.cjs#L7>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-worldview-smoke.cjs:14](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L14>) — file-import-only; coverage not established.

<a id="s-c4477dbb3a4573a6"></a>

## verifyDailyPrices.&lt;anonymous@7:22&gt;

[scripts/acceptance/worldview-price-check.cjs:7](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L7>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyDailyPrices](<worldview-price-check.cjs.md#s-983372c47379ea5c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| _ | any | compiler-inferred | required |
| repository | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 9.

- process .getBuiltinModule("node:module") .createRequire — external-or-dynamic-dispatch; [scripts/acceptance/worldview-price-check.cjs:8](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L8>)
- process .getBuiltinModule — external-or-dynamic-dispatch; [scripts/acceptance/worldview-price-check.cjs:8](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L8>)
- require — module-loader; [scripts/acceptance/worldview-price-check.cjs:11](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L11>)
- require("node:path").join — external-or-dynamic-dispatch; [scripts/acceptance/worldview-price-check.cjs:12](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L12>)
- require — module-loader; [scripts/acceptance/worldview-price-check.cjs:12](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L12>)
- Date.now — external-or-dynamic-dispatch; [scripts/acceptance/worldview-price-check.cjs:14](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L14>)
- require — module-loader; [scripts/acceptance/worldview-price-check.cjs:20](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L20>)
- financial.createFinancialService — external-or-dynamic-dispatch; [scripts/acceptance/worldview-price-check.cjs:21](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L21>)
- 1 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-daily-price-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-daily-price-smoke.cjs#L7>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-worldview-smoke.cjs:14](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L14>) — file-import-only; coverage not established.

<a id="s-c40aa1d7568f852a"></a>

## verifyDailyPrices.&lt;anonymous@7:22&gt;.fetch

[scripts/acceptance/worldview-price-check.cjs:23](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L23>) · MethodDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Supplies deterministic long-range OHLCV and actions through the real history cache.

Purpose evidence: jsdoc.

Lexical owner: [verifyDailyPrices.&lt;anonymous@7:22&gt;](<worldview-price-check.cjs.md#s-c4477dbb3a4573a6>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| symbol | any | compiler-inferred | required |
| kind | any | compiler-inferred | required |
| range | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 8.

- Error — external-or-dynamic-dispatch; [scripts/acceptance/worldview-price-check.cjs:26](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L26>)
- new Date(now).toISOString — external-or-dynamic-dispatch; [scripts/acceptance/worldview-price-check.cjs:30](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L30>)
- Date — external-or-dynamic-dispatch; [scripts/acceptance/worldview-price-check.cjs:30](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L30>)
- Array.from — external-or-dynamic-dispatch; [scripts/acceptance/worldview-price-check.cjs:34](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L34>)
- new Date(now).toISOString — external-or-dynamic-dispatch; [scripts/acceptance/worldview-price-check.cjs:42](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L42>)
- Date — external-or-dynamic-dispatch; [scripts/acceptance/worldview-price-check.cjs:42](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L42>)
- new Date(now).toISOString — external-or-dynamic-dispatch; [scripts/acceptance/worldview-price-check.cjs:44](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L44>)
- Date — external-or-dynamic-dispatch; [scripts/acceptance/worldview-price-check.cjs:44](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L44>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-daily-price-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-daily-price-smoke.cjs#L7>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-worldview-smoke.cjs:14](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L14>) — file-import-only; coverage not established.

<a id="s-741db8fe3d3d553e"></a>

## verifyDailyPrices.&lt;anonymous@7:22&gt;.fetch.&lt;anonymous@34:52&gt;

[scripts/acceptance/worldview-price-check.cjs:34](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L34>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyDailyPrices.&lt;anonymous@7:22&gt;.fetch](<worldview-price-check.cjs.md#s-c40aa1d7568f852a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| _ | any | compiler-inferred | required |
| index | any | compiler-inferred | required |

Returns: { date: any; open: number; high: number; low: number; close: number; volume: number; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- new Date(now - (60 - index) * 30 * 86400000).toISOString — external-or-dynamic-dispatch; [scripts/acceptance/worldview-price-check.cjs:35](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L35>)
- Date — external-or-dynamic-dispatch; [scripts/acceptance/worldview-price-check.cjs:35](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L35>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-daily-price-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-daily-price-smoke.cjs#L7>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-worldview-smoke.cjs:14](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L14>) — file-import-only; coverage not established.

<a id="s-a9e23fabd181798a"></a>

## verifyDailyPrices.&lt;anonymous@7:22&gt;.price

[scripts/acceptance/worldview-price-check.cjs:52](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L52>) · MethodDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Supplies test-only observations through the production cache implementation.

Purpose evidence: jsdoc.

Lexical owner: [verifyDailyPrices.&lt;anonymous@7:22&gt;](<worldview-price-check.cjs.md#s-c4477dbb3a4573a6>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| symbol | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 8.

- Error — external-or-dynamic-dispatch; [scripts/acceptance/worldview-price-check.cjs:55](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L55>)
- new Date(now - 3600000).toISOString — external-or-dynamic-dispatch; [scripts/acceptance/worldview-price-check.cjs:65](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L65>)
- Date — external-or-dynamic-dispatch; [scripts/acceptance/worldview-price-check.cjs:65](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L65>)
- new Date(now).toISOString — external-or-dynamic-dispatch; [scripts/acceptance/worldview-price-check.cjs:68](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L68>)
- Date — external-or-dynamic-dispatch; [scripts/acceptance/worldview-price-check.cjs:68](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L68>)
- new Date(now).toISOString — external-or-dynamic-dispatch; [scripts/acceptance/worldview-price-check.cjs:69](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L69>)
- Date — external-or-dynamic-dispatch; [scripts/acceptance/worldview-price-check.cjs:69](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L69>)
- Array.from — external-or-dynamic-dispatch; [scripts/acceptance/worldview-price-check.cjs:78](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L78>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-daily-price-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-daily-price-smoke.cjs#L7>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-worldview-smoke.cjs:14](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L14>) — file-import-only; coverage not established.

<a id="s-8b62091ffb99d968"></a>

## verifyDailyPrices.&lt;anonymous@7:22&gt;.price.&lt;anonymous@78:47&gt;

[scripts/acceptance/worldview-price-check.cjs:78](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L78>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyDailyPrices.&lt;anonymous@7:22&gt;.price](<worldview-price-check.cjs.md#s-a9e23fabd181798a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| _ | any | compiler-inferred | required |
| index | any | compiler-inferred | required |

Returns: { date: any; close: number; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- new Date(now - (90 - index) * 86400000) .toISOString() .slice — external-or-dynamic-dispatch; [scripts/acceptance/worldview-price-check.cjs:79](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L79>)
- new Date(now - (90 - index) * 86400000) .toISOString — external-or-dynamic-dispatch; [scripts/acceptance/worldview-price-check.cjs:79](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L79>)
- Date — external-or-dynamic-dispatch; [scripts/acceptance/worldview-price-check.cjs:79](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L79>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-daily-price-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-daily-price-smoke.cjs#L7>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-worldview-smoke.cjs:14](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L14>) — file-import-only; coverage not established.

<a id="s-9db446fc4b8ebd15"></a>

## verifyDailyPrices.&lt;anonymous@91:5&gt;

[scripts/acceptance/worldview-price-check.cjs:91](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L91>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyDailyPrices](<worldview-price-check.cjs.md#s-983372c47379ea5c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- /Saving&#124;Loading/.test — external-or-dynamic-dispatch; [scripts/acceptance/worldview-price-check.cjs:92](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L92>)
- document.querySelector — external-or-dynamic-dispatch; [scripts/acceptance/worldview-price-check.cjs:93](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L93>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-daily-price-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-daily-price-smoke.cjs#L7>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-worldview-smoke.cjs:14](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L14>) — file-import-only; coverage not established.

<a id="s-b80d953063b7e0a4"></a>

## verifyDailyPrices.&lt;anonymous@105:5&gt;

[scripts/acceptance/worldview-price-check.cjs:105](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L105>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyDailyPrices](<worldview-price-check.cjs.md#s-983372c47379ea5c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- document.querySelector — external-or-dynamic-dispatch; [scripts/acceptance/worldview-price-check.cjs:106](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L106>)
- document.querySelector — external-or-dynamic-dispatch; [scripts/acceptance/worldview-price-check.cjs:107](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L107>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-daily-price-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-daily-price-smoke.cjs#L7>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-worldview-smoke.cjs:14](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L14>) — file-import-only; coverage not established.

<a id="s-695b4305e92d77a3"></a>

## verifyDailyPrices.&lt;anonymous@124:24&gt;

[scripts/acceptance/worldview-price-check.cjs:124](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L124>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyDailyPrices](<worldview-price-check.cjs.md#s-983372c47379ea5c>).

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

- [scripts/acceptance/electron-daily-price-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-daily-price-smoke.cjs#L7>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-worldview-smoke.cjs:14](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L14>) — file-import-only; coverage not established.

<a id="s-9402960f95aeb443"></a>

## verifyDailyPrices.&lt;anonymous@137:24&gt;

[scripts/acceptance/worldview-price-check.cjs:137](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L137>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyDailyPrices](<worldview-price-check.cjs.md#s-983372c47379ea5c>).

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

- [scripts/acceptance/electron-daily-price-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-daily-price-smoke.cjs#L7>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-worldview-smoke.cjs:14](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L14>) — file-import-only; coverage not established.

<a id="s-4182467f41ceed9e"></a>

## verifyDailyPrices.&lt;anonymous@147:24&gt;

[scripts/acceptance/worldview-price-check.cjs:147](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L147>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyDailyPrices](<worldview-price-check.cjs.md#s-983372c47379ea5c>).

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

- [scripts/acceptance/electron-daily-price-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-daily-price-smoke.cjs#L7>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-worldview-smoke.cjs:14](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L14>) — file-import-only; coverage not established.

<a id="s-c50367752621dcad"></a>

## verifyDailyPrices.&lt;anonymous@151:22&gt;

[scripts/acceptance/worldview-price-check.cjs:151](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L151>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyDailyPrices](<worldview-price-check.cjs.md#s-983372c47379ea5c>).

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

- [scripts/acceptance/electron-daily-price-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-daily-price-smoke.cjs#L7>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-worldview-smoke.cjs:14](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L14>) — file-import-only; coverage not established.

<a id="s-8bb8461025dacfac"></a>

## verifyDailyPrices.&lt;anonymous@160:22&gt;

[scripts/acceptance/worldview-price-check.cjs:160](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L160>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyDailyPrices](<worldview-price-check.cjs.md#s-983372c47379ea5c>).

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

- [scripts/acceptance/electron-daily-price-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-daily-price-smoke.cjs#L7>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-worldview-smoke.cjs:14](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L14>) — file-import-only; coverage not established.

<a id="s-b29345ee5e2831c3"></a>

## verifyDailyPrices.&lt;anonymous@175:39&gt;

[scripts/acceptance/worldview-price-check.cjs:175](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L175>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyDailyPrices](<worldview-price-check.cjs.md#s-983372c47379ea5c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| element | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- Array.from( element.getContext("2d").getImageData(0, 0, element.width, element.height) .data, ).some — external-or-dynamic-dispatch; [scripts/acceptance/worldview-price-check.cjs:176](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L176>)
- Array.from — external-or-dynamic-dispatch; [scripts/acceptance/worldview-price-check.cjs:176](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L176>)
- element.getContext("2d").getImageData — external-or-dynamic-dispatch; [scripts/acceptance/worldview-price-check.cjs:177](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L177>)
- element.getContext — external-or-dynamic-dispatch; [scripts/acceptance/worldview-price-check.cjs:177](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L177>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-daily-price-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-daily-price-smoke.cjs#L7>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-worldview-smoke.cjs:14](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L14>) — file-import-only; coverage not established.

<a id="s-2e1d5577ee94db57"></a>

## verifyDailyPrices.&lt;anonymous@175:39&gt;.&lt;anonymous@179:12&gt;

[scripts/acceptance/worldview-price-check.cjs:179](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L179>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyDailyPrices.&lt;anonymous@175:39&gt;](<worldview-price-check.cjs.md#s-b29345ee5e2831c3>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-daily-price-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-daily-price-smoke.cjs#L7>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-worldview-smoke.cjs:14](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L14>) — file-import-only; coverage not established.

<a id="s-e6b9a2c45279e183"></a>

## verifyDailyPrices.&lt;anonymous@192:26&gt;

[scripts/acceptance/worldview-price-check.cjs:192](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L192>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyDailyPrices](<worldview-price-check.cjs.md#s-983372c47379ea5c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| element | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- getComputedStyle — external-or-dynamic-dispatch; [scripts/acceptance/worldview-price-check.cjs:192](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L192>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-daily-price-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-daily-price-smoke.cjs#L7>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-worldview-smoke.cjs:14](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L14>) — file-import-only; coverage not established.

<a id="s-220bf89670ed9080"></a>

## verifyDailyPrices.&lt;anonymous@198:17&gt;

[scripts/acceptance/worldview-price-check.cjs:198](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L198>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyDailyPrices](<worldview-price-check.cjs.md#s-983372c47379ea5c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| element | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- getComputedStyle — external-or-dynamic-dispatch; [scripts/acceptance/worldview-price-check.cjs:198](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L198>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-daily-price-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-daily-price-smoke.cjs#L7>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-worldview-smoke.cjs:14](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L14>) — file-import-only; coverage not established.

<a id="s-33cabe49d0c90522"></a>

## verifyDailyPrices.&lt;anonymous@217:24&gt;

[scripts/acceptance/worldview-price-check.cjs:217](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L217>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyDailyPrices](<worldview-price-check.cjs.md#s-983372c47379ea5c>).

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

- [scripts/acceptance/electron-daily-price-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-daily-price-smoke.cjs#L7>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-worldview-smoke.cjs:14](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L14>) — file-import-only; coverage not established.

<a id="s-d3b357699edcf0ed"></a>

## verifyDailyPrices.&lt;anonymous@221:22&gt;

[scripts/acceptance/worldview-price-check.cjs:221](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L221>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyDailyPrices](<worldview-price-check.cjs.md#s-983372c47379ea5c>).

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

- [scripts/acceptance/electron-daily-price-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-daily-price-smoke.cjs#L7>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-worldview-smoke.cjs:14](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L14>) — file-import-only; coverage not established.

<a id="s-763b36f6cd336cb0"></a>

## verifyDailyPrices.&lt;anonymous@246:22&gt;

[scripts/acceptance/worldview-price-check.cjs:246](<../../../../../../scripts/acceptance/worldview-price-check.cjs#L246>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyDailyPrices](<worldview-price-check.cjs.md#s-983372c47379ea5c>).

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

- [scripts/acceptance/electron-daily-price-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-daily-price-smoke.cjs#L7>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-worldview-smoke.cjs:14](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L14>) — file-import-only; coverage not established.
