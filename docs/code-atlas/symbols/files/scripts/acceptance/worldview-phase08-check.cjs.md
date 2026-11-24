# scripts/acceptance/worldview-phase08-check.cjs: symbols

[Atlas](<../../../../README.md>) / [Development and acceptance tooling](<../../../../modules/tooling.md>) / [scripts/acceptance/worldview-phase08-check.cjs:1](<../../../../../../scripts/acceptance/worldview-phase08-check.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/acceptance/worldview-phase08-check.cjs](<worldview-phase08-check.cjs.md#s-24a5b253cd9a2490>) (Module)
- [waitSaved](<worldview-phase08-check.cjs.md#s-895902551d85c580>) (FunctionDeclaration)
- [waitSaved.&lt;anonymous@8:30&gt;](<worldview-phase08-check.cjs.md#s-339c4fb421e9bc76>) (ArrowFunction)
- [verifyImageCarousels](<worldview-phase08-check.cjs.md#s-068f9f179c8b9d27>) (FunctionDeclaration)
- [verifyImageCarousels.&lt;anonymous@76:5&gt;](<worldview-phase08-check.cjs.md#s-2678db856a3b3159>) (ArrowFunction)
- [verifyImageCarousels.&lt;anonymous@107:15&gt;](<worldview-phase08-check.cjs.md#s-820e3e88cb29a105>) (ArrowFunction)
- [verifyImageCarousels.&lt;anonymous@242:5&gt;](<worldview-phase08-check.cjs.md#s-91c39a46a4018a38>) (ArrowFunction)
- [verifyImageCarousels.&lt;anonymous@279:29&gt;](<worldview-phase08-check.cjs.md#s-66fbdfd368ea88ac>) (ArrowFunction)
- [verifyImageCarousels.&lt;anonymous@285:41&gt;](<worldview-phase08-check.cjs.md#s-9917806137e72e80>) (ArrowFunction)
- [verifyImageCarousels.&lt;anonymous@288:22&gt;](<worldview-phase08-check.cjs.md#s-fa79dc152a694f90>) (ArrowFunction)
- [verifyImageCarousels.&lt;anonymous@291:30&gt;](<worldview-phase08-check.cjs.md#s-8ba110e56ef9d6a9>) (ArrowFunction)
- [verifyImageCarousels.&lt;anonymous@300:17&gt;](<worldview-phase08-check.cjs.md#s-a2f91784377f3121>) (ArrowFunction)
- [verifyImageCarousels.&lt;anonymous@303:27&gt;](<worldview-phase08-check.cjs.md#s-a005ffae57262fd6>) (ArrowFunction)
- [verifyImageCarousels.&lt;anonymous@308:5&gt;](<worldview-phase08-check.cjs.md#s-1056cc2b90873eb1>) (ArrowFunction)
- [verifyImageCarousels.&lt;anonymous@323:5&gt;](<worldview-phase08-check.cjs.md#s-65730f40766f7294>) (ArrowFunction)
- [verifyImageCarousels.&lt;anonymous@354:25&gt;](<worldview-phase08-check.cjs.md#s-649bf7ff5b4145c0>) (ArrowFunction)

<a id="s-24a5b253cd9a2490"></a>

## scripts/acceptance/worldview-phase08-check.cjs

[scripts/acceptance/worldview-phase08-check.cjs:1](<../../../../../../scripts/acceptance/worldview-phase08-check.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- require — module-loader; [scripts/acceptance/worldview-phase08-check.cjs:1](<../../../../../../scripts/acceptance/worldview-phase08-check.cjs#L1>)
- require — module-loader; [scripts/acceptance/worldview-phase08-check.cjs:2](<../../../../../../scripts/acceptance/worldview-phase08-check.cjs#L2>)
- require — module-loader; [scripts/acceptance/worldview-phase08-check.cjs:3](<../../../../../../scripts/acceptance/worldview-phase08-check.cjs#L3>)
- require — module-loader; [scripts/acceptance/worldview-phase08-check.cjs:4](<../../../../../../scripts/acceptance/worldview-phase08-check.cjs#L4>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:12](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L12>) — file-import-only; coverage not established.

<a id="s-895902551d85c580"></a>

## waitSaved

[scripts/acceptance/worldview-phase08-check.cjs:7](<../../../../../../scripts/acceptance/worldview-phase08-check.cjs#L7>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Waits for the existing entity write queue, surfacing persistence failures explicitly.

Purpose evidence: jsdoc.

Lexical owner: [scripts/acceptance/worldview-phase08-check.cjs](<worldview-phase08-check.cjs.md#s-24a5b253cd9a2490>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| page | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [verifyImageCarousels](<worldview-phase08-check.cjs.md#s-068f9f179c8b9d27>) — [scripts/acceptance/worldview-phase08-check.cjs:43](<../../../../../../scripts/acceptance/worldview-phase08-check.cjs#L43>)
- [verifyImageCarousels](<worldview-phase08-check.cjs.md#s-068f9f179c8b9d27>) — [scripts/acceptance/worldview-phase08-check.cjs:64](<../../../../../../scripts/acceptance/worldview-phase08-check.cjs#L64>)

Unresolved / external call sites: 1.

- page.waitForFunction — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase08-check.cjs:8](<../../../../../../scripts/acceptance/worldview-phase08-check.cjs#L8>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/worldview-phase08-check.cjs:43](<../../../../../../scripts/acceptance/worldview-phase08-check.cjs#L43>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase08-check.cjs:64](<../../../../../../scripts/acceptance/worldview-phase08-check.cjs#L64>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-worldview-smoke.cjs:12](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L12>) — file-import-only; coverage not established.

<a id="s-339c4fb421e9bc76"></a>

## waitSaved.&lt;anonymous@8:30&gt;

[scripts/acceptance/worldview-phase08-check.cjs:8](<../../../../../../scripts/acceptance/worldview-phase08-check.cjs#L8>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [waitSaved](<worldview-phase08-check.cjs.md#s-895902551d85c580>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- document.querySelector — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase08-check.cjs:9](<../../../../../../scripts/acceptance/worldview-phase08-check.cjs#L9>)
- status.querySelector — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase08-check.cjs:10](<../../../../../../scripts/acceptance/worldview-phase08-check.cjs#L10>)
- Error — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase08-check.cjs:10](<../../../../../../scripts/acceptance/worldview-phase08-check.cjs#L10>)
- /Saving&#124;Loading/.test — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase08-check.cjs:11](<../../../../../../scripts/acceptance/worldview-phase08-check.cjs#L11>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:12](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L12>) — file-import-only; coverage not established.

<a id="s-068f9f179c8b9d27"></a>

## verifyImageCarousels

[scripts/acceptance/worldview-phase08-check.cjs:16](<../../../../../../scripts/acceptance/worldview-phase08-check.cjs#L16>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Verifies Collection navigation, discrete Timeline scrubbing, section/reopen states, notes and missing originals in an isolated Universe.

Purpose evidence: jsdoc.

Exported as: verifyImageCarousels ([scripts/acceptance/worldview-phase08-check.cjs:1](<../../../../../../scripts/acceptance/worldview-phase08-check.cjs#L1>)).

Lexical owner: [scripts/acceptance/worldview-phase08-check.cjs](<worldview-phase08-check.cjs.md#s-24a5b253cd9a2490>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| {   app,   page,   vault,   createChip,   readChips, } | { app: any; page: any; vault: any; createChip: any; readChips: any; } | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [waitSaved](<worldview-phase08-check.cjs.md#s-895902551d85c580>) — [scripts/acceptance/worldview-phase08-check.cjs:43](<../../../../../../scripts/acceptance/worldview-phase08-check.cjs#L43>)
- [waitSaved](<worldview-phase08-check.cjs.md#s-895902551d85c580>) — [scripts/acceptance/worldview-phase08-check.cjs:64](<../../../../../../scripts/acceptance/worldview-phase08-check.cjs#L64>)

**Called by (statically resolved):**

- [main](<electron-worldview-smoke.cjs.md#s-d74fd257ed7793d3>) — [scripts/acceptance/electron-worldview-smoke.cjs:1236](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L1236>)

Unresolved / external call sites: 233.

- console.log — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase08-check.cjs:23](<../../../../../../scripts/acceptance/worldview-phase08-check.cjs#L23>)
- path.join — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase08-check.cjs:24](<../../../../../../scripts/acceptance/worldview-phase08-check.cjs#L24>)
- fs.mkdir — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase08-check.cjs:25](<../../../../../../scripts/acceptance/worldview-phase08-check.cjs#L25>)
- Map — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase08-check.cjs:26](<../../../../../../scripts/acceptance/worldview-phase08-check.cjs#L26>)
- createCanvas — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase08-check.cjs:31](<../../../../../../scripts/acceptance/worldview-phase08-check.cjs#L31>)
- canvas.getContext — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase08-check.cjs:32](<../../../../../../scripts/acceptance/worldview-phase08-check.cjs#L32>)
- context.fillRect — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase08-check.cjs:34](<../../../../../../scripts/acceptance/worldview-phase08-check.cjs#L34>)
- context.fillText — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase08-check.cjs:37](<../../../../../../scripts/acceptance/worldview-phase08-check.cjs#L37>)
- 225 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:1236](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L1236>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-worldview-smoke.cjs:12](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L12>) — file-import-only; coverage not established.

<a id="s-2678db856a3b3159"></a>

## verifyImageCarousels.&lt;anonymous@76:5&gt;

[scripts/acceptance/worldview-phase08-check.cjs:76](<../../../../../../scripts/acceptance/worldview-phase08-check.cjs#L76>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyImageCarousels](<worldview-phase08-check.cjs.md#s-068f9f179c8b9d27>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- document.querySelector — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase08-check.cjs:76](<../../../../../../scripts/acceptance/worldview-phase08-check.cjs#L76>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:12](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L12>) — file-import-only; coverage not established.

<a id="s-820e3e88cb29a105"></a>

## verifyImageCarousels.&lt;anonymous@107:15&gt;

[scripts/acceptance/worldview-phase08-check.cjs:107](<../../../../../../scripts/acceptance/worldview-phase08-check.cjs#L107>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyImageCarousels](<worldview-phase08-check.cjs.md#s-068f9f179c8b9d27>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| button | any | compiler-inferred | required |

Returns: { text: any; background: any; radius: any; border: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- getComputedStyle — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase08-check.cjs:108](<../../../../../../scripts/acceptance/worldview-phase08-check.cjs#L108>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:12](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L12>) — file-import-only; coverage not established.

<a id="s-91c39a46a4018a38"></a>

## verifyImageCarousels.&lt;anonymous@242:5&gt;

[scripts/acceptance/worldview-phase08-check.cjs:242](<../../../../../../scripts/acceptance/worldview-phase08-check.cjs#L242>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyImageCarousels](<worldview-phase08-check.cjs.md#s-068f9f179c8b9d27>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- document.querySelector — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase08-check.cjs:243](<../../../../../../scripts/acceptance/worldview-phase08-check.cjs#L243>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:12](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L12>) — file-import-only; coverage not established.

<a id="s-66fbdfd368ea88ac"></a>

## verifyImageCarousels.&lt;anonymous@279:29&gt;

[scripts/acceptance/worldview-phase08-check.cjs:279](<../../../../../../scripts/acceptance/worldview-phase08-check.cjs#L279>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyImageCarousels](<worldview-phase08-check.cjs.md#s-068f9f179c8b9d27>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| element | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- element.scrollIntoView — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase08-check.cjs:280](<../../../../../../scripts/acceptance/worldview-phase08-check.cjs#L280>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:12](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L12>) — file-import-only; coverage not established.

<a id="s-9917806137e72e80"></a>

## verifyImageCarousels.&lt;anonymous@285:41&gt;

[scripts/acceptance/worldview-phase08-check.cjs:285](<../../../../../../scripts/acceptance/worldview-phase08-check.cjs#L285>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyImageCarousels](<worldview-phase08-check.cjs.md#s-068f9f179c8b9d27>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { BrowserWindow } | { BrowserWindow: any; } | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- BrowserWindow.getAllWindows()&#91;0&#93;.getSize — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase08-check.cjs:286](<../../../../../../scripts/acceptance/worldview-phase08-check.cjs#L286>)
- BrowserWindow.getAllWindows — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase08-check.cjs:286](<../../../../../../scripts/acceptance/worldview-phase08-check.cjs#L286>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:12](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L12>) — file-import-only; coverage not established.

<a id="s-fa79dc152a694f90"></a>

## verifyImageCarousels.&lt;anonymous@288:22&gt;

[scripts/acceptance/worldview-phase08-check.cjs:288](<../../../../../../scripts/acceptance/worldview-phase08-check.cjs#L288>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyImageCarousels](<worldview-phase08-check.cjs.md#s-068f9f179c8b9d27>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { BrowserWindow } | { BrowserWindow: any; } | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- BrowserWindow.getAllWindows()&#91;0&#93;.setSize — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase08-check.cjs:289](<../../../../../../scripts/acceptance/worldview-phase08-check.cjs#L289>)
- BrowserWindow.getAllWindows — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase08-check.cjs:289](<../../../../../../scripts/acceptance/worldview-phase08-check.cjs#L289>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:12](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L12>) — file-import-only; coverage not established.

<a id="s-8ba110e56ef9d6a9"></a>

## verifyImageCarousels.&lt;anonymous@291:30&gt;

[scripts/acceptance/worldview-phase08-check.cjs:291](<../../../../../../scripts/acceptance/worldview-phase08-check.cjs#L291>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyImageCarousels](<worldview-phase08-check.cjs.md#s-068f9f179c8b9d27>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- document.querySelector — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase08-check.cjs:292](<../../../../../../scripts/acceptance/worldview-phase08-check.cjs#L292>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:12](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L12>) — file-import-only; coverage not established.

<a id="s-a2f91784377f3121"></a>

## verifyImageCarousels.&lt;anonymous@300:17&gt;

[scripts/acceptance/worldview-phase08-check.cjs:300](<../../../../../../scripts/acceptance/worldview-phase08-check.cjs#L300>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyImageCarousels](<worldview-phase08-check.cjs.md#s-068f9f179c8b9d27>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| element | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- getComputedStyle — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase08-check.cjs:300](<../../../../../../scripts/acceptance/worldview-phase08-check.cjs#L300>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:12](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L12>) — file-import-only; coverage not established.

<a id="s-a005ffae57262fd6"></a>

## verifyImageCarousels.&lt;anonymous@303:27&gt;

[scripts/acceptance/worldview-phase08-check.cjs:303](<../../../../../../scripts/acceptance/worldview-phase08-check.cjs#L303>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyImageCarousels](<worldview-phase08-check.cjs.md#s-068f9f179c8b9d27>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| element | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- element.scrollIntoView — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase08-check.cjs:304](<../../../../../../scripts/acceptance/worldview-phase08-check.cjs#L304>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:12](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L12>) — file-import-only; coverage not established.

<a id="s-1056cc2b90873eb1"></a>

## verifyImageCarousels.&lt;anonymous@308:5&gt;

[scripts/acceptance/worldview-phase08-check.cjs:308](<../../../../../../scripts/acceptance/worldview-phase08-check.cjs#L308>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyImageCarousels](<worldview-phase08-check.cjs.md#s-068f9f179c8b9d27>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { BrowserWindow } | { BrowserWindow: any; } | compiler-inferred | required |
| dimensions | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- BrowserWindow.getAllWindows()&#91;0&#93;.setSize — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase08-check.cjs:309](<../../../../../../scripts/acceptance/worldview-phase08-check.cjs#L309>)
- BrowserWindow.getAllWindows — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase08-check.cjs:309](<../../../../../../scripts/acceptance/worldview-phase08-check.cjs#L309>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:12](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L12>) — file-import-only; coverage not established.

<a id="s-65730f40766f7294"></a>

## verifyImageCarousels.&lt;anonymous@323:5&gt;

[scripts/acceptance/worldview-phase08-check.cjs:323](<../../../../../../scripts/acceptance/worldview-phase08-check.cjs#L323>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyImageCarousels](<worldview-phase08-check.cjs.md#s-068f9f179c8b9d27>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- document.querySelector — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase08-check.cjs:324](<../../../../../../scripts/acceptance/worldview-phase08-check.cjs#L324>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:12](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L12>) — file-import-only; coverage not established.

<a id="s-649bf7ff5b4145c0"></a>

## verifyImageCarousels.&lt;anonymous@354:25&gt;

[scripts/acceptance/worldview-phase08-check.cjs:354](<../../../../../../scripts/acceptance/worldview-phase08-check.cjs#L354>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyImageCarousels](<worldview-phase08-check.cjs.md#s-068f9f179c8b9d27>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| element | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- element.scrollIntoView — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase08-check.cjs:355](<../../../../../../scripts/acceptance/worldview-phase08-check.cjs#L355>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:12](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L12>) — file-import-only; coverage not established.
