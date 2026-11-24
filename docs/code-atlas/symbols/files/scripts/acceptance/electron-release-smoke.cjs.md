# scripts/acceptance/electron-release-smoke.cjs: symbols

[Atlas](<../../../../README.md>) / [Development and acceptance tooling](<../../../../modules/tooling.md>) / [scripts/acceptance/electron-release-smoke.cjs:1](<../../../../../../scripts/acceptance/electron-release-smoke.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/acceptance/electron-release-smoke.cjs](<electron-release-smoke.cjs.md#s-630ef603b331ff44>) (Module)
- [main](<electron-release-smoke.cjs.md#s-74edacf828104e29>) (FunctionDeclaration)
- [main.&lt;anonymous@41:26&gt;](<electron-release-smoke.cjs.md#s-a339b2a297819711>) (ArrowFunction)
- [main.&lt;anonymous@44:39&gt;](<electron-release-smoke.cjs.md#s-c4eda1a0bd1fab15>) (ArrowFunction)
- [main.&lt;anonymous@59:17&gt;](<electron-release-smoke.cjs.md#s-eb820c0e3e3920b9>) (ArrowFunction)
- [main.&lt;anonymous@60:16&gt;](<electron-release-smoke.cjs.md#s-622057a805ee1840>) (ArrowFunction)
- [main.&lt;anonymous@73:40&gt;](<electron-release-smoke.cjs.md#s-c0d37d4f142fe7f1>) (ArrowFunction)
- [main.&lt;anonymous@73:40&gt;.&lt;anonymous@75:42&gt;](<electron-release-smoke.cjs.md#s-d56cadb523a2f273>) (ArrowFunction)
- [main.&lt;anonymous@99:38&gt;](<electron-release-smoke.cjs.md#s-f7326a2e73e7039f>) (ArrowFunction)
- [&lt;anonymous@103:14&gt;](<electron-release-smoke.cjs.md#s-41c34ca8bf9e6e9d>) (ArrowFunction)

<a id="s-630ef603b331ff44"></a>

## scripts/acceptance/electron-release-smoke.cjs

[scripts/acceptance/electron-release-smoke.cjs:1](<../../../../../../scripts/acceptance/electron-release-smoke.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

- [main](<electron-release-smoke.cjs.md#s-74edacf828104e29>) — [scripts/acceptance/electron-release-smoke.cjs:103](<../../../../../../scripts/acceptance/electron-release-smoke.cjs#L103>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 6.

- require — module-loader; [scripts/acceptance/electron-release-smoke.cjs:1](<../../../../../../scripts/acceptance/electron-release-smoke.cjs#L1>)
- require — module-loader; [scripts/acceptance/electron-release-smoke.cjs:2](<../../../../../../scripts/acceptance/electron-release-smoke.cjs#L2>)
- require — module-loader; [scripts/acceptance/electron-release-smoke.cjs:3](<../../../../../../scripts/acceptance/electron-release-smoke.cjs#L3>)
- require — module-loader; [scripts/acceptance/electron-release-smoke.cjs:4](<../../../../../../scripts/acceptance/electron-release-smoke.cjs#L4>)
- require — module-loader; [scripts/acceptance/electron-release-smoke.cjs:5](<../../../../../../scripts/acceptance/electron-release-smoke.cjs#L5>)
- main().catch — external-or-dynamic-dispatch; [scripts/acceptance/electron-release-smoke.cjs:103](<../../../../../../scripts/acceptance/electron-release-smoke.cjs#L103>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-74edacf828104e29"></a>

## main

[scripts/acceptance/electron-release-smoke.cjs:6](<../../../../../../scripts/acceptance/electron-release-smoke.cjs#L6>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/acceptance/electron-release-smoke.cjs](<electron-release-smoke.cjs.md#s-630ef603b331ff44>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [scripts/acceptance/electron-release-smoke.cjs](<electron-release-smoke.cjs.md#s-630ef603b331ff44>) — [scripts/acceptance/electron-release-smoke.cjs:103](<../../../../../../scripts/acceptance/electron-release-smoke.cjs#L103>)

Unresolved / external call sites: 47.

- fs.mkdtemp — external-or-dynamic-dispatch; [scripts/acceptance/electron-release-smoke.cjs:8](<../../../../../../scripts/acceptance/electron-release-smoke.cjs#L8>)
- path.join — external-or-dynamic-dispatch; [scripts/acceptance/electron-release-smoke.cjs:8](<../../../../../../scripts/acceptance/electron-release-smoke.cjs#L8>)
- os.tmpdir — external-or-dynamic-dispatch; [scripts/acceptance/electron-release-smoke.cjs:8](<../../../../../../scripts/acceptance/electron-release-smoke.cjs#L8>)
- path.join — external-or-dynamic-dispatch; [scripts/acceptance/electron-release-smoke.cjs:9](<../../../../../../scripts/acceptance/electron-release-smoke.cjs#L9>)
- path.join — external-or-dynamic-dispatch; [scripts/acceptance/electron-release-smoke.cjs:10](<../../../../../../scripts/acceptance/electron-release-smoke.cjs#L10>)
- fs.mkdir — external-or-dynamic-dispatch; [scripts/acceptance/electron-release-smoke.cjs:14](<../../../../../../scripts/acceptance/electron-release-smoke.cjs#L14>)
- fs.mkdir — external-or-dynamic-dispatch; [scripts/acceptance/electron-release-smoke.cjs:15](<../../../../../../scripts/acceptance/electron-release-smoke.cjs#L15>)
- path.join — external-or-dynamic-dispatch; [scripts/acceptance/electron-release-smoke.cjs:25](<../../../../../../scripts/acceptance/electron-release-smoke.cjs#L25>)
- 39 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-release-smoke.cjs:103](<../../../../../../scripts/acceptance/electron-release-smoke.cjs#L103>) — static-call-site; coverage not established.

<a id="s-a339b2a297819711"></a>

## main.&lt;anonymous@41:26&gt;

[scripts/acceptance/electron-release-smoke.cjs:41](<../../../../../../scripts/acceptance/electron-release-smoke.cjs#L41>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-release-smoke.cjs.md#s-74edacf828104e29>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| error | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- errors.push — external-or-dynamic-dispatch; [scripts/acceptance/electron-release-smoke.cjs:41](<../../../../../../scripts/acceptance/electron-release-smoke.cjs#L41>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-c4eda1a0bd1fab15"></a>

## main.&lt;anonymous@44:39&gt;

[scripts/acceptance/electron-release-smoke.cjs:44](<../../../../../../scripts/acceptance/electron-release-smoke.cjs#L44>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-release-smoke.cjs.md#s-74edacf828104e29>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- ai.listAgents — external-or-dynamic-dispatch; [scripts/acceptance/electron-release-smoke.cjs:47](<../../../../../../scripts/acceptance/electron-release-smoke.cjs#L47>)
- ai.listContextBoxes — external-or-dynamic-dispatch; [scripts/acceptance/electron-release-smoke.cjs:48](<../../../../../../scripts/acceptance/electron-release-smoke.cjs#L48>)
- ai.listConversations — external-or-dynamic-dispatch; [scripts/acceptance/electron-release-smoke.cjs:49](<../../../../../../scripts/acceptance/electron-release-smoke.cjs#L49>)
- ai.models — external-or-dynamic-dispatch; [scripts/acceptance/electron-release-smoke.cjs:50](<../../../../../../scripts/acceptance/electron-release-smoke.cjs#L50>)
- vault.getSnapshot — external-or-dynamic-dispatch; [scripts/acceptance/electron-release-smoke.cjs:51](<../../../../../../scripts/acceptance/electron-release-smoke.cjs#L51>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-eb820c0e3e3920b9"></a>

## main.&lt;anonymous@59:17&gt;

[scripts/acceptance/electron-release-smoke.cjs:59](<../../../../../../scripts/acceptance/electron-release-smoke.cjs#L59>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-release-smoke.cjs.md#s-74edacf828104e29>).

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

<a id="s-622057a805ee1840"></a>

## main.&lt;anonymous@60:16&gt;

[scripts/acceptance/electron-release-smoke.cjs:60](<../../../../../../scripts/acceptance/electron-release-smoke.cjs#L60>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-release-smoke.cjs.md#s-74edacf828104e29>).

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

<a id="s-c0d37d4f142fe7f1"></a>

## main.&lt;anonymous@73:40&gt;

[scripts/acceptance/electron-release-smoke.cjs:73](<../../../../../../scripts/acceptance/electron-release-smoke.cjs#L73>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-release-smoke.cjs.md#s-74edacf828104e29>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { app } | { app: any; } | compiler-inferred | required |

Returns: { versions: any; processes: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- app.getAppMetrics().map — external-or-dynamic-dispatch; [scripts/acceptance/electron-release-smoke.cjs:75](<../../../../../../scripts/acceptance/electron-release-smoke.cjs#L75>)
- app.getAppMetrics — external-or-dynamic-dispatch; [scripts/acceptance/electron-release-smoke.cjs:75](<../../../../../../scripts/acceptance/electron-release-smoke.cjs#L75>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d56cadb523a2f273"></a>

## main.&lt;anonymous@73:40&gt;.&lt;anonymous@75:42&gt;

[scripts/acceptance/electron-release-smoke.cjs:75](<../../../../../../scripts/acceptance/electron-release-smoke.cjs#L75>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main.&lt;anonymous@73:40&gt;](<electron-release-smoke.cjs.md#s-c0d37d4f142fe7f1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| p | any | compiler-inferred | required |

Returns: { type: any; workingSetKB: any; privateKB: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-f7326a2e73e7039f"></a>

## main.&lt;anonymous@99:38&gt;

[scripts/acceptance/electron-release-smoke.cjs:99](<../../../../../../scripts/acceptance/electron-release-smoke.cjs#L99>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-release-smoke.cjs.md#s-74edacf828104e29>).

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

<a id="s-41c34ca8bf9e6e9d"></a>

## &lt;anonymous@103:14&gt;

[scripts/acceptance/electron-release-smoke.cjs:103](<../../../../../../scripts/acceptance/electron-release-smoke.cjs#L103>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/acceptance/electron-release-smoke.cjs](<electron-release-smoke.cjs.md#s-630ef603b331ff44>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| error | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- console.error — external-or-dynamic-dispatch; [scripts/acceptance/electron-release-smoke.cjs:104](<../../../../../../scripts/acceptance/electron-release-smoke.cjs#L104>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
