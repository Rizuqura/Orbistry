# scripts/acceptance/electron-core-only.cjs: symbols

[Atlas](<../../../../README.md>) / [Development and acceptance tooling](<../../../../modules/tooling.md>) / [scripts/acceptance/electron-core-only.cjs:1](<../../../../../../scripts/acceptance/electron-core-only.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/acceptance/electron-core-only.cjs](<electron-core-only.cjs.md#s-8e26ae1f2f7bcc9b>) (Module)
- [main](<electron-core-only.cjs.md#s-58bf0d79d686d5c7>) (FunctionDeclaration)
- [main.&lt;anonymous@19:10&gt;](<electron-core-only.cjs.md#s-9b92fa544c2c496b>) (ArrowFunction)
- [main.&lt;anonymous@28:7&gt;](<electron-core-only.cjs.md#s-e65c16deb6716b7e>) (ArrowFunction)
- [main.&lt;anonymous@51:34&gt;](<electron-core-only.cjs.md#s-7a90776fb64483f4>) (ArrowFunction)
- [main.request](<electron-core-only.cjs.md#s-2c31275987f3c5d8>) (ArrowFunction)
- [main.request.&lt;anonymous@59:9&gt;](<electron-core-only.cjs.md#s-61025d7270e17ddb>) (ArrowFunction)
- [main.verifyStatus](<electron-core-only.cjs.md#s-3974d6b0ef2df9f2>) (FunctionDeclaration)
- [&lt;anonymous@153:14&gt;](<electron-core-only.cjs.md#s-043c99a8339175d1>) (ArrowFunction)

<a id="s-8e26ae1f2f7bcc9b"></a>

## scripts/acceptance/electron-core-only.cjs

[scripts/acceptance/electron-core-only.cjs:1](<../../../../../../scripts/acceptance/electron-core-only.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

- [main](<electron-core-only.cjs.md#s-58bf0d79d686d5c7>) — [scripts/acceptance/electron-core-only.cjs:153](<../../../../../../scripts/acceptance/electron-core-only.cjs#L153>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 7.

- require — module-loader; [scripts/acceptance/electron-core-only.cjs:1](<../../../../../../scripts/acceptance/electron-core-only.cjs#L1>)
- require — module-loader; [scripts/acceptance/electron-core-only.cjs:2](<../../../../../../scripts/acceptance/electron-core-only.cjs#L2>)
- require — module-loader; [scripts/acceptance/electron-core-only.cjs:3](<../../../../../../scripts/acceptance/electron-core-only.cjs#L3>)
- require — module-loader; [scripts/acceptance/electron-core-only.cjs:4](<../../../../../../scripts/acceptance/electron-core-only.cjs#L4>)
- require — module-loader; [scripts/acceptance/electron-core-only.cjs:5](<../../../../../../scripts/acceptance/electron-core-only.cjs#L5>)
- require — module-loader; [scripts/acceptance/electron-core-only.cjs:8](<../../../../../../scripts/acceptance/electron-core-only.cjs#L8>)
- main().catch — external-or-dynamic-dispatch; [scripts/acceptance/electron-core-only.cjs:153](<../../../../../../scripts/acceptance/electron-core-only.cjs#L153>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-58bf0d79d686d5c7"></a>

## main

[scripts/acceptance/electron-core-only.cjs:10](<../../../../../../scripts/acceptance/electron-core-only.cjs#L10>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Exercises the shipped main process, bridge and package worker with a fresh Universe.

Purpose evidence: jsdoc.

Lexical owner: [scripts/acceptance/electron-core-only.cjs](<electron-core-only.cjs.md#s-8e26ae1f2f7bcc9b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [main.request](<electron-core-only.cjs.md#s-2c31275987f3c5d8>) — [scripts/acceptance/electron-core-only.cjs:63](<../../../../../../scripts/acceptance/electron-core-only.cjs#L63>)
- [main.request](<electron-core-only.cjs.md#s-2c31275987f3c5d8>) — [scripts/acceptance/electron-core-only.cjs:73](<../../../../../../scripts/acceptance/electron-core-only.cjs#L73>)
- [main.request](<electron-core-only.cjs.md#s-2c31275987f3c5d8>) — [scripts/acceptance/electron-core-only.cjs:76](<../../../../../../scripts/acceptance/electron-core-only.cjs#L76>)
- [main.request](<electron-core-only.cjs.md#s-2c31275987f3c5d8>) — [scripts/acceptance/electron-core-only.cjs:77](<../../../../../../scripts/acceptance/electron-core-only.cjs#L77>)
- [main.request](<electron-core-only.cjs.md#s-2c31275987f3c5d8>) — [scripts/acceptance/electron-core-only.cjs:80](<../../../../../../scripts/acceptance/electron-core-only.cjs#L80>)
- [main.request](<electron-core-only.cjs.md#s-2c31275987f3c5d8>) — [scripts/acceptance/electron-core-only.cjs:83](<../../../../../../scripts/acceptance/electron-core-only.cjs#L83>)
- [main.request](<electron-core-only.cjs.md#s-2c31275987f3c5d8>) — [scripts/acceptance/electron-core-only.cjs:84](<../../../../../../scripts/acceptance/electron-core-only.cjs#L84>)
- [main.request](<electron-core-only.cjs.md#s-2c31275987f3c5d8>) — [scripts/acceptance/electron-core-only.cjs:86](<../../../../../../scripts/acceptance/electron-core-only.cjs#L86>)
- [EnginePackageRegistry.constructor](<../../electron/engines/registry/registry.cjs.md#s-0e6ad7bd522e9fad>) — [scripts/acceptance/electron-core-only.cjs:89](<../../../../../../scripts/acceptance/electron-core-only.cjs#L89>)
- [EnginePackageRegistry.install](<../../electron/engines/registry/registry.cjs.md#s-b97b1298e6d6e88c>) — [scripts/acceptance/electron-core-only.cjs:90](<../../../../../../scripts/acceptance/electron-core-only.cjs#L90>)
- [EnginePackageRegistry.trust](<../../electron/engines/registry/registry.cjs.md#s-c4a76488a257429f>) — [scripts/acceptance/electron-core-only.cjs:93](<../../../../../../scripts/acceptance/electron-core-only.cjs#L93>)
- [EnginePackageRegistry.link](<../../electron/engines/registry/registry.cjs.md#s-4a5a96d46040ffbd>) — [scripts/acceptance/electron-core-only.cjs:94](<../../../../../../scripts/acceptance/electron-core-only.cjs#L94>)
- [main.request](<electron-core-only.cjs.md#s-2c31275987f3c5d8>) — [scripts/acceptance/electron-core-only.cjs:113](<../../../../../../scripts/acceptance/electron-core-only.cjs#L113>)
- [EnginePackageRegistry.uninstall](<../../electron/engines/registry/registry.cjs.md#s-84842efbe2884dcf>) — [scripts/acceptance/electron-core-only.cjs:115](<../../../../../../scripts/acceptance/electron-core-only.cjs#L115>)
- [main.request](<electron-core-only.cjs.md#s-2c31275987f3c5d8>) — [scripts/acceptance/electron-core-only.cjs:117](<../../../../../../scripts/acceptance/electron-core-only.cjs#L117>)
- [main.request](<electron-core-only.cjs.md#s-2c31275987f3c5d8>) — [scripts/acceptance/electron-core-only.cjs:120](<../../../../../../scripts/acceptance/electron-core-only.cjs#L120>)
- [main.verifyStatus](<electron-core-only.cjs.md#s-3974d6b0ef2df9f2>) — [scripts/acceptance/electron-core-only.cjs:127](<../../../../../../scripts/acceptance/electron-core-only.cjs#L127>)
- [EnginePackageRegistry.install](<../../electron/engines/registry/registry.cjs.md#s-b97b1298e6d6e88c>) — [scripts/acceptance/electron-core-only.cjs:128](<../../../../../../scripts/acceptance/electron-core-only.cjs#L128>)
- [main.verifyStatus](<electron-core-only.cjs.md#s-3974d6b0ef2df9f2>) — [scripts/acceptance/electron-core-only.cjs:129](<../../../../../../scripts/acceptance/electron-core-only.cjs#L129>)
- [EnginePackageRegistry.trust](<../../electron/engines/registry/registry.cjs.md#s-c4a76488a257429f>) — [scripts/acceptance/electron-core-only.cjs:130](<../../../../../../scripts/acceptance/electron-core-only.cjs#L130>)
- [main.verifyStatus](<electron-core-only.cjs.md#s-3974d6b0ef2df9f2>) — [scripts/acceptance/electron-core-only.cjs:131](<../../../../../../scripts/acceptance/electron-core-only.cjs#L131>)
- [EnginePackageRegistry.link](<../../electron/engines/registry/registry.cjs.md#s-4a5a96d46040ffbd>) — [scripts/acceptance/electron-core-only.cjs:132](<../../../../../../scripts/acceptance/electron-core-only.cjs#L132>)
- [main.verifyStatus](<electron-core-only.cjs.md#s-3974d6b0ef2df9f2>) — [scripts/acceptance/electron-core-only.cjs:138](<../../../../../../scripts/acceptance/electron-core-only.cjs#L138>)

**Called by (statically resolved):**

- [scripts/acceptance/electron-core-only.cjs](<electron-core-only.cjs.md#s-8e26ae1f2f7bcc9b>) — [scripts/acceptance/electron-core-only.cjs:153](<../../../../../../scripts/acceptance/electron-core-only.cjs#L153>)

Unresolved / external call sites: 62.

- path.resolve — external-or-dynamic-dispatch; [scripts/acceptance/electron-core-only.cjs:11](<../../../../../../scripts/acceptance/electron-core-only.cjs#L11>)
- path.join — external-or-dynamic-dispatch; [scripts/acceptance/electron-core-only.cjs:12](<../../../../../../scripts/acceptance/electron-core-only.cjs#L12>)
- path.dirname — external-or-dynamic-dispatch; [scripts/acceptance/electron-core-only.cjs:13](<../../../../../../scripts/acceptance/electron-core-only.cjs#L13>)
- (await import("@electron/asar")) .listPackage(archive) .map — external-or-dynamic-dispatch; [scripts/acceptance/electron-core-only.cjs:17](<../../../../../../scripts/acceptance/electron-core-only.cjs#L17>)
- (await import("@electron/asar")) .listPackage — external-or-dynamic-dispatch; [scripts/acceptance/electron-core-only.cjs:17](<../../../../../../scripts/acceptance/electron-core-only.cjs#L17>)
- import — module-loader; [scripts/acceptance/electron-core-only.cjs:17](<../../../../../../scripts/acceptance/electron-core-only.cjs#L17>)
- &#91;"yahoo-finance2", "unzipper", "ssf", "sax"&#93;.map — external-or-dynamic-dispatch; [scripts/acceptance/electron-core-only.cjs:27](<../../../../../../scripts/acceptance/electron-core-only.cjs#L27>)
- assert.ok — external-or-dynamic-dispatch; [scripts/acceptance/electron-core-only.cjs:31](<../../../../../../scripts/acceptance/electron-core-only.cjs#L31>)
- 54 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-core-only.cjs:153](<../../../../../../scripts/acceptance/electron-core-only.cjs#L153>) — static-call-site; coverage not established.

<a id="s-9b92fa544c2c496b"></a>

## main.&lt;anonymous@19:10&gt;

[scripts/acceptance/electron-core-only.cjs:19](<../../../../../../scripts/acceptance/electron-core-only.cjs#L19>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-core-only.cjs.md#s-58bf0d79d686d5c7>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| p | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- p.replaceAll — external-or-dynamic-dispatch; [scripts/acceptance/electron-core-only.cjs:19](<../../../../../../scripts/acceptance/electron-core-only.cjs#L19>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-e65c16deb6716b7e"></a>

## main.&lt;anonymous@28:7&gt;

[scripts/acceptance/electron-core-only.cjs:28](<../../../../../../scripts/acceptance/electron-core-only.cjs#L28>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-core-only.cjs.md#s-58bf0d79d686d5c7>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| name | any | compiler-inferred | required |

Returns: string (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-7a90776fb64483f4"></a>

## main.&lt;anonymous@51:34&gt;

[scripts/acceptance/electron-core-only.cjs:51](<../../../../../../scripts/acceptance/electron-core-only.cjs#L51>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-core-only.cjs.md#s-58bf0d79d686d5c7>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { app } | { app: any; } | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-2c31275987f3c5d8"></a>

## main.request

[scripts/acceptance/electron-core-only.cjs:57](<../../../../../../scripts/acceptance/electron-core-only.cjs#L57>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-core-only.cjs.md#s-58bf0d79d686d5c7>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| operation | any | compiler-inferred | required |
| input | {} | compiler-inferred | optional, default present |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [main](<electron-core-only.cjs.md#s-58bf0d79d686d5c7>) — [scripts/acceptance/electron-core-only.cjs:63](<../../../../../../scripts/acceptance/electron-core-only.cjs#L63>)
- [main](<electron-core-only.cjs.md#s-58bf0d79d686d5c7>) — [scripts/acceptance/electron-core-only.cjs:73](<../../../../../../scripts/acceptance/electron-core-only.cjs#L73>)
- [main](<electron-core-only.cjs.md#s-58bf0d79d686d5c7>) — [scripts/acceptance/electron-core-only.cjs:76](<../../../../../../scripts/acceptance/electron-core-only.cjs#L76>)
- [main](<electron-core-only.cjs.md#s-58bf0d79d686d5c7>) — [scripts/acceptance/electron-core-only.cjs:77](<../../../../../../scripts/acceptance/electron-core-only.cjs#L77>)
- [main](<electron-core-only.cjs.md#s-58bf0d79d686d5c7>) — [scripts/acceptance/electron-core-only.cjs:80](<../../../../../../scripts/acceptance/electron-core-only.cjs#L80>)
- [main](<electron-core-only.cjs.md#s-58bf0d79d686d5c7>) — [scripts/acceptance/electron-core-only.cjs:83](<../../../../../../scripts/acceptance/electron-core-only.cjs#L83>)
- [main](<electron-core-only.cjs.md#s-58bf0d79d686d5c7>) — [scripts/acceptance/electron-core-only.cjs:84](<../../../../../../scripts/acceptance/electron-core-only.cjs#L84>)
- [main](<electron-core-only.cjs.md#s-58bf0d79d686d5c7>) — [scripts/acceptance/electron-core-only.cjs:86](<../../../../../../scripts/acceptance/electron-core-only.cjs#L86>)
- [main](<electron-core-only.cjs.md#s-58bf0d79d686d5c7>) — [scripts/acceptance/electron-core-only.cjs:113](<../../../../../../scripts/acceptance/electron-core-only.cjs#L113>)
- [main](<electron-core-only.cjs.md#s-58bf0d79d686d5c7>) — [scripts/acceptance/electron-core-only.cjs:117](<../../../../../../scripts/acceptance/electron-core-only.cjs#L117>)
- [main](<electron-core-only.cjs.md#s-58bf0d79d686d5c7>) — [scripts/acceptance/electron-core-only.cjs:120](<../../../../../../scripts/acceptance/electron-core-only.cjs#L120>)

Unresolved / external call sites: 1.

- page.evaluate — external-or-dynamic-dispatch; [scripts/acceptance/electron-core-only.cjs:58](<../../../../../../scripts/acceptance/electron-core-only.cjs#L58>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-core-only.cjs:63](<../../../../../../scripts/acceptance/electron-core-only.cjs#L63>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-core-only.cjs:73](<../../../../../../scripts/acceptance/electron-core-only.cjs#L73>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-core-only.cjs:76](<../../../../../../scripts/acceptance/electron-core-only.cjs#L76>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-core-only.cjs:77](<../../../../../../scripts/acceptance/electron-core-only.cjs#L77>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-core-only.cjs:80](<../../../../../../scripts/acceptance/electron-core-only.cjs#L80>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-core-only.cjs:83](<../../../../../../scripts/acceptance/electron-core-only.cjs#L83>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-core-only.cjs:84](<../../../../../../scripts/acceptance/electron-core-only.cjs#L84>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-core-only.cjs:86](<../../../../../../scripts/acceptance/electron-core-only.cjs#L86>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-core-only.cjs:113](<../../../../../../scripts/acceptance/electron-core-only.cjs#L113>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-core-only.cjs:117](<../../../../../../scripts/acceptance/electron-core-only.cjs#L117>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-core-only.cjs:120](<../../../../../../scripts/acceptance/electron-core-only.cjs#L120>) — static-call-site; coverage not established.

<a id="s-61025d7270e17ddb"></a>

## main.request.&lt;anonymous@59:9&gt;

[scripts/acceptance/electron-core-only.cjs:59](<../../../../../../scripts/acceptance/electron-core-only.cjs#L59>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main.request](<electron-core-only.cjs.md#s-2c31275987f3c5d8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { operation, input } | { operation: any; input: any; } | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- window.orbistryDesktop.worldview.request — external-or-dynamic-dispatch; [scripts/acceptance/electron-core-only.cjs:60](<../../../../../../scripts/acceptance/electron-core-only.cjs#L60>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-3974d6b0ef2df9f2"></a>

## main.verifyStatus

[scripts/acceptance/electron-core-only.cjs:123](<../../../../../../scripts/acceptance/electron-core-only.cjs#L123>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-core-only.cjs.md#s-58bf0d79d686d5c7>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| text | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [main](<electron-core-only.cjs.md#s-58bf0d79d686d5c7>) — [scripts/acceptance/electron-core-only.cjs:127](<../../../../../../scripts/acceptance/electron-core-only.cjs#L127>)
- [main](<electron-core-only.cjs.md#s-58bf0d79d686d5c7>) — [scripts/acceptance/electron-core-only.cjs:129](<../../../../../../scripts/acceptance/electron-core-only.cjs#L129>)
- [main](<electron-core-only.cjs.md#s-58bf0d79d686d5c7>) — [scripts/acceptance/electron-core-only.cjs:131](<../../../../../../scripts/acceptance/electron-core-only.cjs#L131>)
- [main](<electron-core-only.cjs.md#s-58bf0d79d686d5c7>) — [scripts/acceptance/electron-core-only.cjs:138](<../../../../../../scripts/acceptance/electron-core-only.cjs#L138>)

Unresolved / external call sites: 4.

- panel.getByRole("button", { name: "Check availability" }).click — external-or-dynamic-dispatch; [scripts/acceptance/electron-core-only.cjs:124](<../../../../../../scripts/acceptance/electron-core-only.cjs#L124>)
- panel.getByRole — external-or-dynamic-dispatch; [scripts/acceptance/electron-core-only.cjs:124](<../../../../../../scripts/acceptance/electron-core-only.cjs#L124>)
- panel.getByText(text, { exact: true }).waitFor — external-or-dynamic-dispatch; [scripts/acceptance/electron-core-only.cjs:125](<../../../../../../scripts/acceptance/electron-core-only.cjs#L125>)
- panel.getByText — external-or-dynamic-dispatch; [scripts/acceptance/electron-core-only.cjs:125](<../../../../../../scripts/acceptance/electron-core-only.cjs#L125>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-core-only.cjs:127](<../../../../../../scripts/acceptance/electron-core-only.cjs#L127>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-core-only.cjs:129](<../../../../../../scripts/acceptance/electron-core-only.cjs#L129>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-core-only.cjs:131](<../../../../../../scripts/acceptance/electron-core-only.cjs#L131>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-core-only.cjs:138](<../../../../../../scripts/acceptance/electron-core-only.cjs#L138>) — static-call-site; coverage not established.

<a id="s-043c99a8339175d1"></a>

## &lt;anonymous@153:14&gt;

[scripts/acceptance/electron-core-only.cjs:153](<../../../../../../scripts/acceptance/electron-core-only.cjs#L153>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/acceptance/electron-core-only.cjs](<electron-core-only.cjs.md#s-8e26ae1f2f7bcc9b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| error | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- console.error — external-or-dynamic-dispatch; [scripts/acceptance/electron-core-only.cjs:154](<../../../../../../scripts/acceptance/electron-core-only.cjs#L154>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
