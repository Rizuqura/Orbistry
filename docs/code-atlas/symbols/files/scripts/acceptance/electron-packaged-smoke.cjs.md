# scripts/acceptance/electron-packaged-smoke.cjs: symbols

[Atlas](<../../../../README.md>) / [Development and acceptance tooling](<../../../../modules/tooling.md>) / [scripts/acceptance/electron-packaged-smoke.cjs:1](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/acceptance/electron-packaged-smoke.cjs](<electron-packaged-smoke.cjs.md#s-f3fbcaf9639c92de>) (Module)
- [main](<electron-packaged-smoke.cjs.md#s-f882e9165e7b6781>) (FunctionDeclaration)
- [main.&lt;anonymous@30:26&gt;](<electron-packaged-smoke.cjs.md#s-f9b41a57ac448f98>) (ArrowFunction)
- [main.&lt;anonymous@32:39&gt;](<electron-packaged-smoke.cjs.md#s-e2f31e2dc2ccbd05>) (ArrowFunction)
- [main.&lt;anonymous@51:17&gt;](<electron-packaged-smoke.cjs.md#s-ff80bcbf8db8c56c>) (ArrowFunction)
- [main.&lt;anonymous@52:16&gt;](<electron-packaged-smoke.cjs.md#s-48e40be401218aa6>) (ArrowFunction)
- [main.&lt;anonymous@64:43&gt;](<electron-packaged-smoke.cjs.md#s-ff43cfafa9633b66>) (ArrowFunction)
- [main.&lt;anonymous@86:37&gt;](<electron-packaged-smoke.cjs.md#s-8320d3038b132c15>) (ArrowFunction)
- [main.&lt;anonymous@94:41&gt;](<electron-packaged-smoke.cjs.md#s-6133c8fed74f8582>) (ArrowFunction)
- [main.&lt;anonymous@147:38&gt;](<electron-packaged-smoke.cjs.md#s-c81b041e56d13f24>) (ArrowFunction)
- [&lt;anonymous@151:14&gt;](<electron-packaged-smoke.cjs.md#s-c8d3af058ef9b9bf>) (ArrowFunction)

<a id="s-f3fbcaf9639c92de"></a>

## scripts/acceptance/electron-packaged-smoke.cjs

[scripts/acceptance/electron-packaged-smoke.cjs:1](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

- [main](<electron-packaged-smoke.cjs.md#s-f882e9165e7b6781>) — [scripts/acceptance/electron-packaged-smoke.cjs:151](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L151>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 7.

- require — module-loader; [scripts/acceptance/electron-packaged-smoke.cjs:1](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L1>)
- require — module-loader; [scripts/acceptance/electron-packaged-smoke.cjs:2](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L2>)
- require — module-loader; [scripts/acceptance/electron-packaged-smoke.cjs:3](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L3>)
- require — module-loader; [scripts/acceptance/electron-packaged-smoke.cjs:4](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L4>)
- require — module-loader; [scripts/acceptance/electron-packaged-smoke.cjs:5](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L5>)
- require — module-loader; [scripts/acceptance/electron-packaged-smoke.cjs:6](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L6>)
- main().catch — external-or-dynamic-dispatch; [scripts/acceptance/electron-packaged-smoke.cjs:151](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L151>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-f882e9165e7b6781"></a>

## main

[scripts/acceptance/electron-packaged-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L7>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/acceptance/electron-packaged-smoke.cjs](<electron-packaged-smoke.cjs.md#s-f3fbcaf9639c92de>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [imagePdf](<../fixtures/image-pdf.cjs.md#s-1b7b36e15c54a255>) — [scripts/acceptance/electron-packaged-smoke.cjs:63](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L63>)

**Called by (statically resolved):**

- [scripts/acceptance/electron-packaged-smoke.cjs](<electron-packaged-smoke.cjs.md#s-f3fbcaf9639c92de>) — [scripts/acceptance/electron-packaged-smoke.cjs:151](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L151>)

Unresolved / external call sites: 61.

- fs.mkdtemp — external-or-dynamic-dispatch; [scripts/acceptance/electron-packaged-smoke.cjs:8](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L8>)
- path.join — external-or-dynamic-dispatch; [scripts/acceptance/electron-packaged-smoke.cjs:8](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L8>)
- os.tmpdir — external-or-dynamic-dispatch; [scripts/acceptance/electron-packaged-smoke.cjs:8](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L8>)
- path.join — external-or-dynamic-dispatch; [scripts/acceptance/electron-packaged-smoke.cjs:9](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L9>)
- path.join — external-or-dynamic-dispatch; [scripts/acceptance/electron-packaged-smoke.cjs:10](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L10>)
- fs.mkdir — external-or-dynamic-dispatch; [scripts/acceptance/electron-packaged-smoke.cjs:14](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L14>)
- electron.launch — external-or-dynamic-dispatch; [scripts/acceptance/electron-packaged-smoke.cjs:19](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L19>)
- path.resolve — external-or-dynamic-dispatch; [scripts/acceptance/electron-packaged-smoke.cjs:20](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L20>)
- 53 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-packaged-smoke.cjs:151](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L151>) — static-call-site; coverage not established.

<a id="s-f9b41a57ac448f98"></a>

## main.&lt;anonymous@30:26&gt;

[scripts/acceptance/electron-packaged-smoke.cjs:30](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L30>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-packaged-smoke.cjs.md#s-f882e9165e7b6781>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| error | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- errors.push — external-or-dynamic-dispatch; [scripts/acceptance/electron-packaged-smoke.cjs:30](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L30>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-e2f31e2dc2ccbd05"></a>

## main.&lt;anonymous@32:39&gt;

[scripts/acceptance/electron-packaged-smoke.cjs:32](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L32>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-packaged-smoke.cjs.md#s-f882e9165e7b6781>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 6.

- ai.listAgents — external-or-dynamic-dispatch; [scripts/acceptance/electron-packaged-smoke.cjs:35](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L35>)
- ai.listContextBoxes — external-or-dynamic-dispatch; [scripts/acceptance/electron-packaged-smoke.cjs:36](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L36>)
- ai.listConversations — external-or-dynamic-dispatch; [scripts/acceptance/electron-packaged-smoke.cjs:37](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L37>)
- ai.models — external-or-dynamic-dispatch; [scripts/acceptance/electron-packaged-smoke.cjs:38](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L38>)
- vault.getSnapshot — external-or-dynamic-dispatch; [scripts/acceptance/electron-packaged-smoke.cjs:39](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L39>)
- document.querySelector — external-or-dynamic-dispatch; [scripts/acceptance/electron-packaged-smoke.cjs:40](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L40>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-ff80bcbf8db8c56c"></a>

## main.&lt;anonymous@51:17&gt;

[scripts/acceptance/electron-packaged-smoke.cjs:51](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L51>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-packaged-smoke.cjs.md#s-f882e9165e7b6781>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| p | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-48e40be401218aa6"></a>

## main.&lt;anonymous@52:16&gt;

[scripts/acceptance/electron-packaged-smoke.cjs:52](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L52>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-packaged-smoke.cjs.md#s-f882e9165e7b6781>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| p | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-ff43cfafa9633b66"></a>

## main.&lt;anonymous@64:43&gt;

[scripts/acceptance/electron-packaged-smoke.cjs:64](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L64>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-packaged-smoke.cjs.md#s-f882e9165e7b6781>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- window.orbistryDesktop.vault.read — external-or-dynamic-dispatch; [scripts/acceptance/electron-packaged-smoke.cjs:65](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L65>)
- window.orbistryDesktop.vault.readPdf — external-or-dynamic-dispatch; [scripts/acceptance/electron-packaged-smoke.cjs:66](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L66>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-8320d3038b132c15"></a>

## main.&lt;anonymous@86:37&gt;

[scripts/acceptance/electron-packaged-smoke.cjs:86](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L86>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-packaged-smoke.cjs.md#s-f882e9165e7b6781>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- window.orbistryDesktop.ai.editContextBox — external-or-dynamic-dispatch; [scripts/acceptance/electron-packaged-smoke.cjs:87](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L87>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-6133c8fed74f8582"></a>

## main.&lt;anonymous@94:41&gt;

[scripts/acceptance/electron-packaged-smoke.cjs:94](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L94>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-packaged-smoke.cjs.md#s-f882e9165e7b6781>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { app } | { app: any; } | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 8.

- process.getBuiltinModule — external-or-dynamic-dispatch; [scripts/acceptance/electron-packaged-smoke.cjs:95](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L95>)
- createRequire — external-or-dynamic-dispatch; [scripts/acceptance/electron-packaged-smoke.cjs:96](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L96>)
- app.getAppPath — external-or-dynamic-dispatch; [scripts/acceptance/electron-packaged-smoke.cjs:96](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L96>)
- load — external-or-dynamic-dispatch; [scripts/acceptance/electron-packaged-smoke.cjs:97](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L97>)
- createDatasetSession — external-or-dynamic-dispatch; [scripts/acceptance/electron-packaged-smoke.cjs:100](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L100>)
- session.call — external-or-dynamic-dispatch; [scripts/acceptance/electron-packaged-smoke.cjs:102](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L102>)
- session.call — external-or-dynamic-dispatch; [scripts/acceptance/electron-packaged-smoke.cjs:107](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L107>)
- session.close — external-or-dynamic-dispatch; [scripts/acceptance/electron-packaged-smoke.cjs:117](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L117>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-c81b041e56d13f24"></a>

## main.&lt;anonymous@147:38&gt;

[scripts/acceptance/electron-packaged-smoke.cjs:147](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L147>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-packaged-smoke.cjs.md#s-f882e9165e7b6781>).

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

No direct static call/import association found; coverage unknown.

<a id="s-c8d3af058ef9b9bf"></a>

## &lt;anonymous@151:14&gt;

[scripts/acceptance/electron-packaged-smoke.cjs:151](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L151>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/acceptance/electron-packaged-smoke.cjs](<electron-packaged-smoke.cjs.md#s-f3fbcaf9639c92de>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| error | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- console.error — external-or-dynamic-dispatch; [scripts/acceptance/electron-packaged-smoke.cjs:152](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L152>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
