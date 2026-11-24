# scripts/acceptance/electron-financials-smoke.cjs: symbols

[Atlas](<../../../../README.md>) / [Development and acceptance tooling](<../../../../modules/tooling.md>) / [scripts/acceptance/electron-financials-smoke.cjs:1](<../../../../../../scripts/acceptance/electron-financials-smoke.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/acceptance/electron-financials-smoke.cjs](<electron-financials-smoke.cjs.md#s-499b5396a02c4d3e>) (Module)
- [main](<electron-financials-smoke.cjs.md#s-6f55721d64d075c2>) (FunctionDeclaration)
- [main.&lt;anonymous@40:26&gt;](<electron-financials-smoke.cjs.md#s-8fd858165929dad6>) (ArrowFunction)
- [main.&lt;anonymous@41:24&gt;](<electron-financials-smoke.cjs.md#s-b240bd07b0461f19>) (ArrowFunction)
- [failed](<electron-financials-smoke.cjs.md#s-58db470eb38bef20>) (FunctionExpression)

<a id="s-499b5396a02c4d3e"></a>

## scripts/acceptance/electron-financials-smoke.cjs

[scripts/acceptance/electron-financials-smoke.cjs:1](<../../../../../../scripts/acceptance/electron-financials-smoke.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

- [main](<electron-financials-smoke.cjs.md#s-6f55721d64d075c2>) — [scripts/acceptance/electron-financials-smoke.cjs:73](<../../../../../../scripts/acceptance/electron-financials-smoke.cjs#L73>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 8.

- require — module-loader; [scripts/acceptance/electron-financials-smoke.cjs:1](<../../../../../../scripts/acceptance/electron-financials-smoke.cjs#L1>)
- require — module-loader; [scripts/acceptance/electron-financials-smoke.cjs:2](<../../../../../../scripts/acceptance/electron-financials-smoke.cjs#L2>)
- require — module-loader; [scripts/acceptance/electron-financials-smoke.cjs:3](<../../../../../../scripts/acceptance/electron-financials-smoke.cjs#L3>)
- require — module-loader; [scripts/acceptance/electron-financials-smoke.cjs:4](<../../../../../../scripts/acceptance/electron-financials-smoke.cjs#L4>)
- require — module-loader; [scripts/acceptance/electron-financials-smoke.cjs:5](<../../../../../../scripts/acceptance/electron-financials-smoke.cjs#L5>)
- require — module-loader; [scripts/acceptance/electron-financials-smoke.cjs:6](<../../../../../../scripts/acceptance/electron-financials-smoke.cjs#L6>)
- require — module-loader; [scripts/acceptance/electron-financials-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-financials-smoke.cjs#L7>)
- main().catch — external-or-dynamic-dispatch; [scripts/acceptance/electron-financials-smoke.cjs:73](<../../../../../../scripts/acceptance/electron-financials-smoke.cjs#L73>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-6f55721d64d075c2"></a>

## main

[scripts/acceptance/electron-financials-smoke.cjs:10](<../../../../../../scripts/acceptance/electron-financials-smoke.cjs#L10>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Runs focused native financial statement and earnings acceptance in a temporary Universe, using the shared WorldView creation workflow and synthetic market adapter.

Purpose evidence: jsdoc.

Lexical owner: [scripts/acceptance/electron-financials-smoke.cjs](<electron-financials-smoke.cjs.md#s-499b5396a02c4d3e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [verifyFinancials](<worldview-financial-check.cjs.md#s-7558d83685bde9be>) — [scripts/acceptance/electron-financials-smoke.cjs:48](<../../../../../../scripts/acceptance/electron-financials-smoke.cjs#L48>)

**Called by (statically resolved):**

- [scripts/acceptance/electron-financials-smoke.cjs](<electron-financials-smoke.cjs.md#s-499b5396a02c4d3e>) — [scripts/acceptance/electron-financials-smoke.cjs:73](<../../../../../../scripts/acceptance/electron-financials-smoke.cjs#L73>)

Unresolved / external call sites: 33.

- fs.mkdtemp — external-or-dynamic-dispatch; [scripts/acceptance/electron-financials-smoke.cjs:11](<../../../../../../scripts/acceptance/electron-financials-smoke.cjs#L11>)
- path.join — external-or-dynamic-dispatch; [scripts/acceptance/electron-financials-smoke.cjs:12](<../../../../../../scripts/acceptance/electron-financials-smoke.cjs#L12>)
- os.tmpdir — external-or-dynamic-dispatch; [scripts/acceptance/electron-financials-smoke.cjs:12](<../../../../../../scripts/acceptance/electron-financials-smoke.cjs#L12>)
- path.join — external-or-dynamic-dispatch; [scripts/acceptance/electron-financials-smoke.cjs:14](<../../../../../../scripts/acceptance/electron-financials-smoke.cjs#L14>)
- path.join — external-or-dynamic-dispatch; [scripts/acceptance/electron-financials-smoke.cjs:15](<../../../../../../scripts/acceptance/electron-financials-smoke.cjs#L15>)
- fs.mkdir — external-or-dynamic-dispatch; [scripts/acceptance/electron-financials-smoke.cjs:18](<../../../../../../scripts/acceptance/electron-financials-smoke.cjs#L18>)
- fs.mkdir — external-or-dynamic-dispatch; [scripts/acceptance/electron-financials-smoke.cjs:19](<../../../../../../scripts/acceptance/electron-financials-smoke.cjs#L19>)
- electron.launch — external-or-dynamic-dispatch; [scripts/acceptance/electron-financials-smoke.cjs:27](<../../../../../../scripts/acceptance/electron-financials-smoke.cjs#L27>)
- 25 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-financials-smoke.cjs:73](<../../../../../../scripts/acceptance/electron-financials-smoke.cjs#L73>) — static-call-site; coverage not established.

<a id="s-8fd858165929dad6"></a>

## main.&lt;anonymous@40:26&gt;

[scripts/acceptance/electron-financials-smoke.cjs:40](<../../../../../../scripts/acceptance/electron-financials-smoke.cjs#L40>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-financials-smoke.cjs.md#s-6f55721d64d075c2>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| error | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- errors.push — external-or-dynamic-dispatch; [scripts/acceptance/electron-financials-smoke.cjs:40](<../../../../../../scripts/acceptance/electron-financials-smoke.cjs#L40>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-b240bd07b0461f19"></a>

## main.&lt;anonymous@41:24&gt;

[scripts/acceptance/electron-financials-smoke.cjs:41](<../../../../../../scripts/acceptance/electron-financials-smoke.cjs#L41>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-financials-smoke.cjs.md#s-6f55721d64d075c2>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { BrowserWindow } | { BrowserWindow: any; } | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- BrowserWindow.getAllWindows()&#91;0&#93;.showInactive — external-or-dynamic-dispatch; [scripts/acceptance/electron-financials-smoke.cjs:42](<../../../../../../scripts/acceptance/electron-financials-smoke.cjs#L42>)
- BrowserWindow.getAllWindows — external-or-dynamic-dispatch; [scripts/acceptance/electron-financials-smoke.cjs:42](<../../../../../../scripts/acceptance/electron-financials-smoke.cjs#L42>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-58db470eb38bef20"></a>

## failed

[scripts/acceptance/electron-financials-smoke.cjs:73](<../../../../../../scripts/acceptance/electron-financials-smoke.cjs#L73>) · FunctionExpression · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/acceptance/electron-financials-smoke.cjs](<electron-financials-smoke.cjs.md#s-499b5396a02c4d3e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| error | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- console.error — external-or-dynamic-dispatch; [scripts/acceptance/electron-financials-smoke.cjs:74](<../../../../../../scripts/acceptance/electron-financials-smoke.cjs#L74>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
