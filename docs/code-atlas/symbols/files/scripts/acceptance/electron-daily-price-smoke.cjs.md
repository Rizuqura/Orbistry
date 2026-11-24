# scripts/acceptance/electron-daily-price-smoke.cjs: symbols

[Atlas](<../../../../README.md>) / [Development and acceptance tooling](<../../../../modules/tooling.md>) / [scripts/acceptance/electron-daily-price-smoke.cjs:1](<../../../../../../scripts/acceptance/electron-daily-price-smoke.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/acceptance/electron-daily-price-smoke.cjs](<electron-daily-price-smoke.cjs.md#s-33a29821cfa3a9e4>) (Module)
- [main](<electron-daily-price-smoke.cjs.md#s-c0095b32a5c0404a>) (FunctionDeclaration)
- [main.&lt;anonymous@40:26&gt;](<electron-daily-price-smoke.cjs.md#s-289b2d9f50729c1c>) (ArrowFunction)
- [main.&lt;anonymous@41:24&gt;](<electron-daily-price-smoke.cjs.md#s-cfed433196f7bc92>) (ArrowFunction)
- [failed](<electron-daily-price-smoke.cjs.md#s-72e64149078302da>) (FunctionExpression)

<a id="s-33a29821cfa3a9e4"></a>

## scripts/acceptance/electron-daily-price-smoke.cjs

[scripts/acceptance/electron-daily-price-smoke.cjs:1](<../../../../../../scripts/acceptance/electron-daily-price-smoke.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

- [main](<electron-daily-price-smoke.cjs.md#s-c0095b32a5c0404a>) — [scripts/acceptance/electron-daily-price-smoke.cjs:73](<../../../../../../scripts/acceptance/electron-daily-price-smoke.cjs#L73>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 8.

- require — module-loader; [scripts/acceptance/electron-daily-price-smoke.cjs:1](<../../../../../../scripts/acceptance/electron-daily-price-smoke.cjs#L1>)
- require — module-loader; [scripts/acceptance/electron-daily-price-smoke.cjs:2](<../../../../../../scripts/acceptance/electron-daily-price-smoke.cjs#L2>)
- require — module-loader; [scripts/acceptance/electron-daily-price-smoke.cjs:3](<../../../../../../scripts/acceptance/electron-daily-price-smoke.cjs#L3>)
- require — module-loader; [scripts/acceptance/electron-daily-price-smoke.cjs:4](<../../../../../../scripts/acceptance/electron-daily-price-smoke.cjs#L4>)
- require — module-loader; [scripts/acceptance/electron-daily-price-smoke.cjs:5](<../../../../../../scripts/acceptance/electron-daily-price-smoke.cjs#L5>)
- require — module-loader; [scripts/acceptance/electron-daily-price-smoke.cjs:6](<../../../../../../scripts/acceptance/electron-daily-price-smoke.cjs#L6>)
- require — module-loader; [scripts/acceptance/electron-daily-price-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-daily-price-smoke.cjs#L7>)
- main().catch — external-or-dynamic-dispatch; [scripts/acceptance/electron-daily-price-smoke.cjs:73](<../../../../../../scripts/acceptance/electron-daily-price-smoke.cjs#L73>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-c0095b32a5c0404a"></a>

## main

[scripts/acceptance/electron-daily-price-smoke.cjs:10](<../../../../../../scripts/acceptance/electron-daily-price-smoke.cjs#L10>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Runs focused native price acceptance in a temporary Universe, using the shared WorldView creation workflow and synthetic market adapter.

Purpose evidence: jsdoc.

Lexical owner: [scripts/acceptance/electron-daily-price-smoke.cjs](<electron-daily-price-smoke.cjs.md#s-33a29821cfa3a9e4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [verifyDailyPrices](<worldview-price-check.cjs.md#s-983372c47379ea5c>) — [scripts/acceptance/electron-daily-price-smoke.cjs:48](<../../../../../../scripts/acceptance/electron-daily-price-smoke.cjs#L48>)

**Called by (statically resolved):**

- [scripts/acceptance/electron-daily-price-smoke.cjs](<electron-daily-price-smoke.cjs.md#s-33a29821cfa3a9e4>) — [scripts/acceptance/electron-daily-price-smoke.cjs:73](<../../../../../../scripts/acceptance/electron-daily-price-smoke.cjs#L73>)

Unresolved / external call sites: 33.

- fs.mkdtemp — external-or-dynamic-dispatch; [scripts/acceptance/electron-daily-price-smoke.cjs:11](<../../../../../../scripts/acceptance/electron-daily-price-smoke.cjs#L11>)
- path.join — external-or-dynamic-dispatch; [scripts/acceptance/electron-daily-price-smoke.cjs:12](<../../../../../../scripts/acceptance/electron-daily-price-smoke.cjs#L12>)
- os.tmpdir — external-or-dynamic-dispatch; [scripts/acceptance/electron-daily-price-smoke.cjs:12](<../../../../../../scripts/acceptance/electron-daily-price-smoke.cjs#L12>)
- path.join — external-or-dynamic-dispatch; [scripts/acceptance/electron-daily-price-smoke.cjs:14](<../../../../../../scripts/acceptance/electron-daily-price-smoke.cjs#L14>)
- path.join — external-or-dynamic-dispatch; [scripts/acceptance/electron-daily-price-smoke.cjs:15](<../../../../../../scripts/acceptance/electron-daily-price-smoke.cjs#L15>)
- fs.mkdir — external-or-dynamic-dispatch; [scripts/acceptance/electron-daily-price-smoke.cjs:18](<../../../../../../scripts/acceptance/electron-daily-price-smoke.cjs#L18>)
- fs.mkdir — external-or-dynamic-dispatch; [scripts/acceptance/electron-daily-price-smoke.cjs:19](<../../../../../../scripts/acceptance/electron-daily-price-smoke.cjs#L19>)
- electron.launch — external-or-dynamic-dispatch; [scripts/acceptance/electron-daily-price-smoke.cjs:27](<../../../../../../scripts/acceptance/electron-daily-price-smoke.cjs#L27>)
- 25 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-daily-price-smoke.cjs:73](<../../../../../../scripts/acceptance/electron-daily-price-smoke.cjs#L73>) — static-call-site; coverage not established.

<a id="s-289b2d9f50729c1c"></a>

## main.&lt;anonymous@40:26&gt;

[scripts/acceptance/electron-daily-price-smoke.cjs:40](<../../../../../../scripts/acceptance/electron-daily-price-smoke.cjs#L40>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-daily-price-smoke.cjs.md#s-c0095b32a5c0404a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| error | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- errors.push — external-or-dynamic-dispatch; [scripts/acceptance/electron-daily-price-smoke.cjs:40](<../../../../../../scripts/acceptance/electron-daily-price-smoke.cjs#L40>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-cfed433196f7bc92"></a>

## main.&lt;anonymous@41:24&gt;

[scripts/acceptance/electron-daily-price-smoke.cjs:41](<../../../../../../scripts/acceptance/electron-daily-price-smoke.cjs#L41>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-daily-price-smoke.cjs.md#s-c0095b32a5c0404a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { BrowserWindow } | { BrowserWindow: any; } | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- BrowserWindow.getAllWindows()&#91;0&#93;.showInactive — external-or-dynamic-dispatch; [scripts/acceptance/electron-daily-price-smoke.cjs:42](<../../../../../../scripts/acceptance/electron-daily-price-smoke.cjs#L42>)
- BrowserWindow.getAllWindows — external-or-dynamic-dispatch; [scripts/acceptance/electron-daily-price-smoke.cjs:42](<../../../../../../scripts/acceptance/electron-daily-price-smoke.cjs#L42>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-72e64149078302da"></a>

## failed

[scripts/acceptance/electron-daily-price-smoke.cjs:73](<../../../../../../scripts/acceptance/electron-daily-price-smoke.cjs#L73>) · FunctionExpression · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/acceptance/electron-daily-price-smoke.cjs](<electron-daily-price-smoke.cjs.md#s-33a29821cfa3a9e4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| error | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- console.error — external-or-dynamic-dispatch; [scripts/acceptance/electron-daily-price-smoke.cjs:74](<../../../../../../scripts/acceptance/electron-daily-price-smoke.cjs#L74>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
