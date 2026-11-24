# electron/ai/statistics.cjs: symbols

[Atlas](<../../../../README.md>) / [Retained AI runtime](<../../../../modules/ai-runtime.md>) / [electron/ai/statistics.cjs:1](<../../../../../../electron/ai/statistics.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/statistics.cjs](<statistics.cjs.md#s-8370034d05edb602>) (Module)
- [tokens](<statistics.cjs.md#s-6af1403629bec011>) (FunctionDeclaration)
- [tokens.&lt;anonymous@16:40&gt;](<statistics.cjs.md#s-5ddf611d4585989a>) (ArrowFunction)
- [calculate](<statistics.cjs.md#s-5664f2bca4b9935b>) (FunctionDeclaration)
- [calculate.&lt;anonymous@29:7&gt;](<statistics.cjs.md#s-a9893e908e724ad0>) (ArrowFunction)
- [calculate.&lt;anonymous@42:29&gt;](<statistics.cjs.md#s-458c31170bb6994c>) (ArrowFunction)
- [calculate.&lt;anonymous@46:23&gt;](<statistics.cjs.md#s-c6cf27fd92f0aa7e>) (ArrowFunction)
- [calculate.&lt;anonymous@53:27&gt;](<statistics.cjs.md#s-867075f877405ef9>) (ArrowFunction)
- [calculate.&lt;anonymous@75:29&gt;](<statistics.cjs.md#s-8b8063ec602920a1>) (ArrowFunction)
- [STATISTICS_FORMAT](<statistics.cjs.md#s-37474521898f7f64>) (VariableDeclaration)
- [isStatisticsFormat](<statistics.cjs.md#s-2efa6955eff65641>) (FunctionDeclaration)
- [wantsStatistics](<statistics.cjs.md#s-1d9e7adf8b01e716>) (FunctionDeclaration)
- [executePlan](<statistics.cjs.md#s-474e53bf1087ed47>) (FunctionDeclaration)
- [executePlan.&lt;anonymous@145:7&gt;](<statistics.cjs.md#s-71a7891365008d31>) (ArrowFunction)
- [executePlan.&lt;anonymous@154:20&gt;](<statistics.cjs.md#s-7960e820ccf409c0>) (ArrowFunction)
- [executePlan.&lt;anonymous@154:49&gt;](<statistics.cjs.md#s-0d8b46155e23591c>) (ArrowFunction)
- [executePlan.&lt;anonymous@160:32&gt;](<statistics.cjs.md#s-1100036332709192>) (ArrowFunction)
- [executePlan.&lt;anonymous@160:32&gt;.&lt;anonymous@164:9&gt;](<statistics.cjs.md#s-7fc1cb281161eb10>) (ArrowFunction)
- [executePlan.&lt;anonymous@160:32&gt;.&lt;anonymous@173:37&gt;](<statistics.cjs.md#s-33a57155eec2aadc>) (ArrowFunction)
- [executePlan.&lt;anonymous@160:32&gt;.&lt;anonymous@173:37&gt;.&lt;anonymous@177:11&gt;](<statistics.cjs.md#s-900f121ecd0cfa7f>) (ArrowFunction)
- [executePlan.&lt;anonymous@160:32&gt;.&lt;anonymous@173:37&gt;.&lt;anonymous@202:11&gt;](<statistics.cjs.md#s-f78a32013bf8d275>) (ArrowFunction)
- [executePlan.&lt;anonymous@160:32&gt;.&lt;anonymous@225:22&gt;](<statistics.cjs.md#s-f781e5b4af7f18c8>) (ArrowFunction)
- [planStatistics](<statistics.cjs.md#s-4cd6a96e6d276ca8>) (FunctionDeclaration)
- [planStatistics.&lt;anonymous@246:15&gt;](<statistics.cjs.md#s-85d9f5f24141c96d>) (ArrowFunction)
- [planStatistics.&lt;anonymous@247:12&gt;](<statistics.cjs.md#s-0f4eaa9f3c2cae70>) (ArrowFunction)

<a id="s-8370034d05edb602"></a>

## electron/ai/statistics.cjs

[electron/ai/statistics.cjs:1](<../../../../../../electron/ai/statistics.cjs#L1>) · Module · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/providers/gemini-provider.test.cjs:317](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L317>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:441](<../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L441>) — file-import-only; coverage not established.
- [electron/ai/statistics.test.cjs:7](<../../../../../../electron/ai/statistics.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-6af1403629bec011"></a>

## tokens

[electron/ai/statistics.cjs:15](<../../../../../../electron/ai/statistics.cjs#L15>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/statistics.cjs](<statistics.cjs.md#s-8370034d05edb602>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| text | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [executePlan.&lt;anonymous@160:32&gt;.&lt;anonymous@173:37&gt;](<statistics.cjs.md#s-33a57155eec2aadc>) — [electron/ai/statistics.cjs:194](<../../../../../../electron/ai/statistics.cjs#L194>)
- [executePlan.&lt;anonymous@160:32&gt;.&lt;anonymous@173:37&gt;](<statistics.cjs.md#s-33a57155eec2aadc>) — [electron/ai/statistics.cjs:201](<../../../../../../electron/ai/statistics.cjs#L201>)

Unresolved / external call sites: 2.

- &#91;...text.matchAll(TOKEN)&#93;.map — external-or-dynamic-dispatch; [electron/ai/statistics.cjs:16](<../../../../../../electron/ai/statistics.cjs#L16>)
- text.matchAll — external-or-dynamic-dispatch; [electron/ai/statistics.cjs:16](<../../../../../../electron/ai/statistics.cjs#L16>)

**Related tests / acceptance harnesses:**

- [electron/ai/providers/gemini-provider.test.cjs:317](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L317>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:441](<../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L441>) — file-import-only; coverage not established.
- [electron/ai/statistics.test.cjs:7](<../../../../../../electron/ai/statistics.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-5ddf611d4585989a"></a>

## tokens.&lt;anonymous@16:40&gt;

[electron/ai/statistics.cjs:16](<../../../../../../electron/ai/statistics.cjs#L16>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [tokens](<statistics.cjs.md#s-6af1403629bec011>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| match | any | compiler-inferred | required |

Returns: { raw: any; offset: any; value: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- Number — external-or-dynamic-dispatch; [electron/ai/statistics.cjs:19](<../../../../../../electron/ai/statistics.cjs#L19>)
- match&#91;0&#93;.replaceAll — external-or-dynamic-dispatch; [electron/ai/statistics.cjs:19](<../../../../../../electron/ai/statistics.cjs#L19>)

**Related tests / acceptance harnesses:**

- [electron/ai/providers/gemini-provider.test.cjs:317](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L317>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:441](<../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L441>) — file-import-only; coverage not established.
- [electron/ai/statistics.test.cjs:7](<../../../../../../electron/ai/statistics.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-5664f2bca4b9935b"></a>

## calculate

[electron/ai/statistics.cjs:22](<../../../../../../electron/ai/statistics.cjs#L22>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: calculate ([electron/ai/statistics.cjs:1](<../../../../../../electron/ai/statistics.cjs#L1>)).

Lexical owner: [electron/ai/statistics.cjs](<statistics.cjs.md#s-8370034d05edb602>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| op | any | compiler-inferred | required |
| values | any | compiler-inferred | required |

Returns: { operation: any; inputs: any; value: any; formula: string; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [executePlan.&lt;anonymous@160:32&gt;](<statistics.cjs.md#s-1100036332709192>) — [electron/ai/statistics.cjs:223](<../../../../../../electron/ai/statistics.cjs#L223>)
- [&lt;anonymous@12:86&gt;](<statistics.test.cjs.md#s-95130dd7ade244dd>) — [electron/ai/statistics.test.cjs:13](<../../../../../../electron/ai/statistics.test.cjs#L13>)
- [&lt;anonymous@12:86&gt;](<statistics.test.cjs.md#s-95130dd7ade244dd>) — [electron/ai/statistics.test.cjs:14](<../../../../../../electron/ai/statistics.test.cjs#L14>)
- [&lt;anonymous@12:86&gt;](<statistics.test.cjs.md#s-95130dd7ade244dd>) — [electron/ai/statistics.test.cjs:16](<../../../../../../electron/ai/statistics.test.cjs#L16>)
- [&lt;anonymous@12:86&gt;](<statistics.test.cjs.md#s-95130dd7ade244dd>) — [electron/ai/statistics.test.cjs:19](<../../../../../../electron/ai/statistics.test.cjs#L19>)
- [&lt;anonymous@12:86&gt;.&lt;anonymous@20:17&gt;](<statistics.test.cjs.md#s-1e5cc3737c799f4b>) — [electron/ai/statistics.test.cjs:20](<../../../../../../electron/ai/statistics.test.cjs#L20>)
- [&lt;anonymous@12:86&gt;](<statistics.test.cjs.md#s-95130dd7ade244dd>) — [electron/ai/statistics.test.cjs:21](<../../../../../../electron/ai/statistics.test.cjs#L21>)
- [&lt;anonymous@12:86&gt;](<statistics.test.cjs.md#s-95130dd7ade244dd>) — [electron/ai/statistics.test.cjs:22](<../../../../../../electron/ai/statistics.test.cjs#L22>)
- [&lt;anonymous@12:86&gt;](<statistics.test.cjs.md#s-95130dd7ade244dd>) — [electron/ai/statistics.test.cjs:23](<../../../../../../electron/ai/statistics.test.cjs#L23>)
- [&lt;anonymous@12:86&gt;](<statistics.test.cjs.md#s-95130dd7ade244dd>) — [electron/ai/statistics.test.cjs:24](<../../../../../../electron/ai/statistics.test.cjs#L24>)
- [&lt;anonymous@12:86&gt;.&lt;anonymous@26:19&gt;](<statistics.test.cjs.md#s-3fff9674bba78fdd>) — [electron/ai/statistics.test.cjs:26](<../../../../../../electron/ai/statistics.test.cjs#L26>)
- [&lt;anonymous@12:86&gt;.&lt;anonymous@27:17&gt;](<statistics.test.cjs.md#s-ec4cf45630a35bfd>) — [electron/ai/statistics.test.cjs:27](<../../../../../../electron/ai/statistics.test.cjs#L27>)
- [&lt;anonymous@12:86&gt;.&lt;anonymous@28:17&gt;](<statistics.test.cjs.md#s-f9988f64fe65b649>) — [electron/ai/statistics.test.cjs:28](<../../../../../../electron/ai/statistics.test.cjs#L28>)

Unresolved / external call sites: 17.

- OPS.includes — external-or-dynamic-dispatch; [electron/ai/statistics.cjs:24](<../../../../../../electron/ai/statistics.cjs#L24>)
- Array.isArray — external-or-dynamic-dispatch; [electron/ai/statistics.cjs:25](<../../../../../../electron/ai/statistics.cjs#L25>)
- values.some — external-or-dynamic-dispatch; [electron/ai/statistics.cjs:28](<../../../../../../electron/ai/statistics.cjs#L28>)
- Error — external-or-dynamic-dispatch; [electron/ai/statistics.cjs:35](<../../../../../../electron/ai/statistics.cjs#L35>)
- values.reduce — external-or-dynamic-dispatch; [electron/ai/statistics.cjs:42](<../../../../../../electron/ai/statistics.cjs#L42>)
- values.some — external-or-dynamic-dispatch; [electron/ai/statistics.cjs:46](<../../../../../../electron/ai/statistics.cjs#L46>)
- Error — external-or-dynamic-dispatch; [electron/ai/statistics.cjs:47](<../../../../../../electron/ai/statistics.cjs#L47>)
- values.includes — external-or-dynamic-dispatch; [electron/ai/statistics.cjs:50](<../../../../../../electron/ai/statistics.cjs#L50>)
- 9 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/statistics.test.cjs:13](<../../../../../../electron/ai/statistics.test.cjs#L13>) — static-call-site; coverage not established.
- [electron/ai/statistics.test.cjs:14](<../../../../../../electron/ai/statistics.test.cjs#L14>) — static-call-site; coverage not established.
- [electron/ai/statistics.test.cjs:16](<../../../../../../electron/ai/statistics.test.cjs#L16>) — static-call-site; coverage not established.
- [electron/ai/statistics.test.cjs:19](<../../../../../../electron/ai/statistics.test.cjs#L19>) — static-call-site; coverage not established.
- [electron/ai/statistics.test.cjs:20](<../../../../../../electron/ai/statistics.test.cjs#L20>) — static-call-site; coverage not established.
- [electron/ai/statistics.test.cjs:21](<../../../../../../electron/ai/statistics.test.cjs#L21>) — static-call-site; coverage not established.
- [electron/ai/statistics.test.cjs:22](<../../../../../../electron/ai/statistics.test.cjs#L22>) — static-call-site; coverage not established.
- [electron/ai/statistics.test.cjs:23](<../../../../../../electron/ai/statistics.test.cjs#L23>) — static-call-site; coverage not established.
- [electron/ai/statistics.test.cjs:24](<../../../../../../electron/ai/statistics.test.cjs#L24>) — static-call-site; coverage not established.
- [electron/ai/statistics.test.cjs:26](<../../../../../../electron/ai/statistics.test.cjs#L26>) — static-call-site; coverage not established.
- [electron/ai/statistics.test.cjs:27](<../../../../../../electron/ai/statistics.test.cjs#L27>) — static-call-site; coverage not established.
- [electron/ai/statistics.test.cjs:28](<../../../../../../electron/ai/statistics.test.cjs#L28>) — static-call-site; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:317](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L317>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:441](<../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L441>) — file-import-only; coverage not established.
- [electron/ai/statistics.test.cjs:7](<../../../../../../electron/ai/statistics.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-a9893e908e724ad0"></a>

## calculate.&lt;anonymous@29:7&gt;

[electron/ai/statistics.cjs:29](<../../../../../../electron/ai/statistics.cjs#L29>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [calculate](<statistics.cjs.md#s-5664f2bca4b9935b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| v | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- Number.isFinite — external-or-dynamic-dispatch; [electron/ai/statistics.cjs:31](<../../../../../../electron/ai/statistics.cjs#L31>)
- Math.abs — external-or-dynamic-dispatch; [electron/ai/statistics.cjs:32](<../../../../../../electron/ai/statistics.cjs#L32>)

**Related tests / acceptance harnesses:**

- [electron/ai/providers/gemini-provider.test.cjs:317](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L317>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:441](<../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L441>) — file-import-only; coverage not established.
- [electron/ai/statistics.test.cjs:7](<../../../../../../electron/ai/statistics.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-458c31170bb6994c"></a>

## calculate.&lt;anonymous@42:29&gt;

[electron/ai/statistics.cjs:42](<../../../../../../electron/ai/statistics.cjs#L42>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [calculate](<statistics.cjs.md#s-5664f2bca4b9935b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| sum | any | compiler-inferred | required |
| v | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/providers/gemini-provider.test.cjs:317](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L317>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:441](<../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L441>) — file-import-only; coverage not established.
- [electron/ai/statistics.test.cjs:7](<../../../../../../electron/ai/statistics.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-c6cf27fd92f0aa7e"></a>

## calculate.&lt;anonymous@46:23&gt;

[electron/ai/statistics.cjs:46](<../../../../../../electron/ai/statistics.cjs#L46>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [calculate](<statistics.cjs.md#s-5664f2bca4b9935b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| v | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/providers/gemini-provider.test.cjs:317](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L317>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:441](<../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L441>) — file-import-only; coverage not established.
- [electron/ai/statistics.test.cjs:7](<../../../../../../electron/ai/statistics.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-867075f877405ef9"></a>

## calculate.&lt;anonymous@53:27&gt;

[electron/ai/statistics.cjs:53](<../../../../../../electron/ai/statistics.cjs#L53>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [calculate](<statistics.cjs.md#s-5664f2bca4b9935b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| sum | any | compiler-inferred | required |
| v | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- Math.log — external-or-dynamic-dispatch; [electron/ai/statistics.cjs:53](<../../../../../../electron/ai/statistics.cjs#L53>)

**Related tests / acceptance harnesses:**

- [electron/ai/providers/gemini-provider.test.cjs:317](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L317>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:441](<../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L441>) — file-import-only; coverage not established.
- [electron/ai/statistics.test.cjs:7](<../../../../../../electron/ai/statistics.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-8b8063ec602920a1"></a>

## calculate.&lt;anonymous@75:29&gt;

[electron/ai/statistics.cjs:75](<../../../../../../electron/ai/statistics.cjs#L75>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [calculate](<statistics.cjs.md#s-5664f2bca4b9935b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| sum | any | compiler-inferred | required |
| v | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/providers/gemini-provider.test.cjs:317](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L317>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:441](<../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L441>) — file-import-only; coverage not established.
- [electron/ai/statistics.test.cjs:7](<../../../../../../electron/ai/statistics.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-37474521898f7f64"></a>

## STATISTICS_FORMAT

[electron/ai/statistics.cjs:98](<../../../../../../electron/ai/statistics.cjs#L98>) · VariableDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: STATISTICS_FORMAT ([electron/ai/statistics.cjs:1](<../../../../../../electron/ai/statistics.cjs#L1>)).

Lexical owner: [electron/ai/statistics.cjs](<statistics.cjs.md#s-8370034d05edb602>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/providers/gemini-provider.test.cjs:317](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L317>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:441](<../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L441>) — file-import-only; coverage not established.
- [electron/ai/statistics.test.cjs:7](<../../../../../../electron/ai/statistics.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-2efa6955eff65641"></a>

## isStatisticsFormat

[electron/ai/statistics.cjs:133](<../../../../../../electron/ai/statistics.cjs#L133>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: isStatisticsFormat ([electron/ai/statistics.cjs:1](<../../../../../../electron/ai/statistics.cjs#L1>)).

Lexical owner: [electron/ai/statistics.cjs](<statistics.cjs.md#s-8370034d05edb602>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| format | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [GeminiProvider.complete.format](<providers/gemini-provider.cjs.md#s-f1c47bd15e6fc946>) — [electron/ai/providers/gemini-provider.cjs:283](<../../../../../../electron/ai/providers/gemini-provider.cjs#L283>)

Unresolved / external call sites: 2.

- JSON.stringify — external-or-dynamic-dispatch; [electron/ai/statistics.cjs:134](<../../../../../../electron/ai/statistics.cjs#L134>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/ai/statistics.cjs:134](<../../../../../../electron/ai/statistics.cjs#L134>)

**Related tests / acceptance harnesses:**

- [electron/ai/providers/gemini-provider.test.cjs:317](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L317>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:441](<../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L441>) — file-import-only; coverage not established.
- [electron/ai/statistics.test.cjs:7](<../../../../../../electron/ai/statistics.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-1d9e7adf8b01e716"></a>

## wantsStatistics

[electron/ai/statistics.cjs:136](<../../../../../../electron/ai/statistics.cjs#L136>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: wantsStatistics ([electron/ai/statistics.cjs:1](<../../../../../../electron/ai/statistics.cjs#L1>)).

Lexical owner: [electron/ai/statistics.cjs](<statistics.cjs.md#s-8370034d05edb602>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| question | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [createContextOrchestrator.run](<orchestrator.cjs.md#s-be352215519f7acf>) — [electron/ai/orchestrator.cjs:661](<../../../../../../electron/ai/orchestrator.cjs#L661>)

Unresolved / external call sites: 1.

- /\\b(average&#124;mean&#124;geometric&#124;delta&#124;percent(?:age)?\\s+change&#124;difference&#124;sum&#124;calculate&#124;compute)\\b&#124;rata-rata&#124;selisih/i.test — external-or-dynamic-dispatch; [electron/ai/statistics.cjs:137](<../../../../../../electron/ai/statistics.cjs#L137>)

**Related tests / acceptance harnesses:**

- [electron/ai/providers/gemini-provider.test.cjs:317](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L317>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:441](<../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L441>) — file-import-only; coverage not established.
- [electron/ai/statistics.test.cjs:7](<../../../../../../electron/ai/statistics.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-474e53bf1087ed47"></a>

## executePlan

[electron/ai/statistics.cjs:141](<../../../../../../electron/ai/statistics.cjs#L141>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: executePlan ([electron/ai/statistics.cjs:1](<../../../../../../electron/ai/statistics.cjs#L1>)).

Lexical owner: [electron/ai/statistics.cjs](<statistics.cjs.md#s-8370034d05edb602>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| plan | any | compiler-inferred | required |
| sources | any | compiler-inferred | required |
| question | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [planStatistics](<statistics.cjs.md#s-4cd6a96e6d276ca8>) — [electron/ai/statistics.cjs:288](<../../../../../../electron/ai/statistics.cjs#L288>)
- [&lt;anonymous@64:98&gt;](<statistics.test.cjs.md#s-e08def5b6459afd1>) — [electron/ai/statistics.test.cjs:86](<../../../../../../electron/ai/statistics.test.cjs#L86>)
- [&lt;anonymous@64:98&gt;.&lt;anonymous@99:19&gt;](<statistics.test.cjs.md#s-6af7c9699cd8abb1>) — [electron/ai/statistics.test.cjs:99](<../../../../../../electron/ai/statistics.test.cjs#L99>)
- [&lt;anonymous@64:98&gt;](<statistics.test.cjs.md#s-e08def5b6459afd1>) — [electron/ai/statistics.test.cjs:116](<../../../../../../electron/ai/statistics.test.cjs#L116>)
- [&lt;anonymous@64:98&gt;.&lt;anonymous@120:5&gt;](<statistics.test.cjs.md#s-76665ea3167d2e73>) — [electron/ai/statistics.test.cjs:120](<../../../../../../electron/ai/statistics.test.cjs#L120>)

Unresolved / external call sites: 9.

- Object.keys(plan).some — external-or-dynamic-dispatch; [electron/ai/statistics.cjs:144](<../../../../../../electron/ai/statistics.cjs#L144>)
- Object.keys — external-or-dynamic-dispatch; [electron/ai/statistics.cjs:144](<../../../../../../electron/ai/statistics.cjs#L144>)
- Array.isArray — external-or-dynamic-dispatch; [electron/ai/statistics.cjs:147](<../../../../../../electron/ai/statistics.cjs#L147>)
- Error — external-or-dynamic-dispatch; [electron/ai/statistics.cjs:152](<../../../../../../electron/ai/statistics.cjs#L152>)
- Map — external-or-dynamic-dispatch; [electron/ai/statistics.cjs:153](<../../../../../../electron/ai/statistics.cjs#L153>)
- sources.filter((s) =&gt; s.type !== "csv").map — external-or-dynamic-dispatch; [electron/ai/statistics.cjs:154](<../../../../../../electron/ai/statistics.cjs#L154>)
- sources.filter — external-or-dynamic-dispatch; [electron/ai/statistics.cjs:154](<../../../../../../electron/ai/statistics.cjs#L154>)
- texts.set — external-or-dynamic-dispatch; [electron/ai/statistics.cjs:156](<../../../../../../electron/ai/statistics.cjs#L156>)
- 1 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/statistics.test.cjs:86](<../../../../../../electron/ai/statistics.test.cjs#L86>) — static-call-site; coverage not established.
- [electron/ai/statistics.test.cjs:99](<../../../../../../electron/ai/statistics.test.cjs#L99>) — static-call-site; coverage not established.
- [electron/ai/statistics.test.cjs:116](<../../../../../../electron/ai/statistics.test.cjs#L116>) — static-call-site; coverage not established.
- [electron/ai/statistics.test.cjs:120](<../../../../../../electron/ai/statistics.test.cjs#L120>) — static-call-site; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:317](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L317>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:441](<../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L441>) — file-import-only; coverage not established.
- [electron/ai/statistics.test.cjs:7](<../../../../../../electron/ai/statistics.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-71a7891365008d31"></a>

## executePlan.&lt;anonymous@145:7&gt;

[electron/ai/statistics.cjs:145](<../../../../../../electron/ai/statistics.cjs#L145>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [executePlan](<statistics.cjs.md#s-474e53bf1087ed47>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| k | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- &#91;"calculations", "limitation"&#93;.includes — external-or-dynamic-dispatch; [electron/ai/statistics.cjs:145](<../../../../../../electron/ai/statistics.cjs#L145>)

**Related tests / acceptance harnesses:**

- [electron/ai/providers/gemini-provider.test.cjs:317](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L317>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:441](<../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L441>) — file-import-only; coverage not established.
- [electron/ai/statistics.test.cjs:7](<../../../../../../electron/ai/statistics.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-7960e820ccf409c0"></a>

## executePlan.&lt;anonymous@154:20&gt;

[electron/ai/statistics.cjs:154](<../../../../../../electron/ai/statistics.cjs#L154>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [executePlan](<statistics.cjs.md#s-474e53bf1087ed47>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| s | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/providers/gemini-provider.test.cjs:317](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L317>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:441](<../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L441>) — file-import-only; coverage not established.
- [electron/ai/statistics.test.cjs:7](<../../../../../../electron/ai/statistics.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-0d8b46155e23591c"></a>

## executePlan.&lt;anonymous@154:49&gt;

[electron/ai/statistics.cjs:154](<../../../../../../electron/ai/statistics.cjs#L154>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [executePlan](<statistics.cjs.md#s-474e53bf1087ed47>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| s | any | compiler-inferred | required |

Returns: {} (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/providers/gemini-provider.test.cjs:317](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L317>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:441](<../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L441>) — file-import-only; coverage not established.
- [electron/ai/statistics.test.cjs:7](<../../../../../../electron/ai/statistics.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-1100036332709192"></a>

## executePlan.&lt;anonymous@160:32&gt;

[electron/ai/statistics.cjs:160](<../../../../../../electron/ai/statistics.cjs#L160>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [executePlan](<statistics.cjs.md#s-474e53bf1087ed47>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| c | any | compiler-inferred | required |

Returns: { evidence: any; operation: any; inputs: any; value: any; formula: string; label: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [calculate](<statistics.cjs.md#s-5664f2bca4b9935b>) — [electron/ai/statistics.cjs:223](<../../../../../../electron/ai/statistics.cjs#L223>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 6.

- Object.keys(c).some — external-or-dynamic-dispatch; [electron/ai/statistics.cjs:163](<../../../../../../electron/ai/statistics.cjs#L163>)
- Object.keys — external-or-dynamic-dispatch; [electron/ai/statistics.cjs:163](<../../../../../../electron/ai/statistics.cjs#L163>)
- Array.isArray — external-or-dynamic-dispatch; [electron/ai/statistics.cjs:168](<../../../../../../electron/ai/statistics.cjs#L168>)
- Error — external-or-dynamic-dispatch; [electron/ai/statistics.cjs:172](<../../../../../../electron/ai/statistics.cjs#L172>)
- c.operands.map — external-or-dynamic-dispatch; [electron/ai/statistics.cjs:173](<../../../../../../electron/ai/statistics.cjs#L173>)
- evidence.map — external-or-dynamic-dispatch; [electron/ai/statistics.cjs:225](<../../../../../../electron/ai/statistics.cjs#L225>)

**Related tests / acceptance harnesses:**

- [electron/ai/providers/gemini-provider.test.cjs:317](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L317>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:441](<../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L441>) — file-import-only; coverage not established.
- [electron/ai/statistics.test.cjs:7](<../../../../../../electron/ai/statistics.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-7fc1cb281161eb10"></a>

## executePlan.&lt;anonymous@160:32&gt;.&lt;anonymous@164:9&gt;

[electron/ai/statistics.cjs:164](<../../../../../../electron/ai/statistics.cjs#L164>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [executePlan.&lt;anonymous@160:32&gt;](<statistics.cjs.md#s-1100036332709192>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| k | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- &#91;"label", "operation", "operands"&#93;.includes — external-or-dynamic-dispatch; [electron/ai/statistics.cjs:164](<../../../../../../electron/ai/statistics.cjs#L164>)

**Related tests / acceptance harnesses:**

- [electron/ai/providers/gemini-provider.test.cjs:317](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L317>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:441](<../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L441>) — file-import-only; coverage not established.
- [electron/ai/statistics.test.cjs:7](<../../../../../../electron/ai/statistics.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-33a57155eec2aadc"></a>

## executePlan.&lt;anonymous@160:32&gt;.&lt;anonymous@173:37&gt;

[electron/ai/statistics.cjs:173](<../../../../../../electron/ai/statistics.cjs#L173>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [executePlan.&lt;anonymous@160:32&gt;](<statistics.cjs.md#s-1100036332709192>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| o | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [tokens](<statistics.cjs.md#s-6af1403629bec011>) — [electron/ai/statistics.cjs:194](<../../../../../../electron/ai/statistics.cjs#L194>)
- [tokens](<statistics.cjs.md#s-6af1403629bec011>) — [electron/ai/statistics.cjs:201](<../../../../../../electron/ai/statistics.cjs#L201>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 16.

- Object.keys(o).some — external-or-dynamic-dispatch; [electron/ai/statistics.cjs:176](<../../../../../../electron/ai/statistics.cjs#L176>)
- Object.keys — external-or-dynamic-dispatch; [electron/ai/statistics.cjs:176](<../../../../../../electron/ai/statistics.cjs#L176>)
- Error — external-or-dynamic-dispatch; [electron/ai/statistics.cjs:180](<../../../../../../electron/ai/statistics.cjs#L180>)
- texts.get — external-or-dynamic-dispatch; [electron/ai/statistics.cjs:181](<../../../../../../electron/ai/statistics.cjs#L181>)
- o.quote.trim — external-or-dynamic-dispatch; [electron/ai/statistics.cjs:185](<../../../../../../electron/ai/statistics.cjs#L185>)
- source.content.includes — external-or-dynamic-dispatch; [electron/ai/statistics.cjs:187](<../../../../../../electron/ai/statistics.cjs#L187>)
- Number.isInteger — external-or-dynamic-dispatch; [electron/ai/statistics.cjs:188](<../../../../../../electron/ai/statistics.cjs#L188>)
- Error — external-or-dynamic-dispatch; [electron/ai/statistics.cjs:191](<../../../../../../electron/ai/statistics.cjs#L191>)
- 8 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/providers/gemini-provider.test.cjs:317](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L317>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:441](<../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L441>) — file-import-only; coverage not established.
- [electron/ai/statistics.test.cjs:7](<../../../../../../electron/ai/statistics.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-900f121ecd0cfa7f"></a>

## executePlan.&lt;anonymous@160:32&gt;.&lt;anonymous@173:37&gt;.&lt;anonymous@177:11&gt;

[electron/ai/statistics.cjs:177](<../../../../../../electron/ai/statistics.cjs#L177>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [executePlan.&lt;anonymous@160:32&gt;.&lt;anonymous@173:37&gt;](<statistics.cjs.md#s-33a57155eec2aadc>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| k | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- &#91;"sourceId", "quote", "tokenIndex"&#93;.includes — external-or-dynamic-dispatch; [electron/ai/statistics.cjs:177](<../../../../../../electron/ai/statistics.cjs#L177>)

**Related tests / acceptance harnesses:**

- [electron/ai/providers/gemini-provider.test.cjs:317](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L317>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:441](<../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L441>) — file-import-only; coverage not established.
- [electron/ai/statistics.test.cjs:7](<../../../../../../electron/ai/statistics.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-f78a32013bf8d275"></a>

## executePlan.&lt;anonymous@160:32&gt;.&lt;anonymous@173:37&gt;.&lt;anonymous@202:11&gt;

[electron/ai/statistics.cjs:202](<../../../../../../electron/ai/statistics.cjs#L202>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [executePlan.&lt;anonymous@160:32&gt;.&lt;anonymous@173:37&gt;](<statistics.cjs.md#s-33a57155eec2aadc>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| item | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/providers/gemini-provider.test.cjs:317](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L317>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:441](<../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L441>) — file-import-only; coverage not established.
- [electron/ai/statistics.test.cjs:7](<../../../../../../electron/ai/statistics.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-f781e5b4af7f18c8"></a>

## executePlan.&lt;anonymous@160:32&gt;.&lt;anonymous@225:22&gt;

[electron/ai/statistics.cjs:225](<../../../../../../electron/ai/statistics.cjs#L225>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [executePlan.&lt;anonymous@160:32&gt;](<statistics.cjs.md#s-1100036332709192>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| o | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/providers/gemini-provider.test.cjs:317](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L317>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:441](<../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L441>) — file-import-only; coverage not established.
- [electron/ai/statistics.test.cjs:7](<../../../../../../electron/ai/statistics.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-4cd6a96e6d276ca8"></a>

## planStatistics

[electron/ai/statistics.cjs:231](<../../../../../../electron/ai/statistics.cjs#L231>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: planStatistics ([electron/ai/statistics.cjs:1](<../../../../../../electron/ai/statistics.cjs#L1>)).

Lexical owner: [electron/ai/statistics.cjs](<statistics.cjs.md#s-8370034d05edb602>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| {   sources,   userMessage,   history,   settings,   model,   signal,   complete, } | { sources: any; userMessage: any; history: any; settings: any; model: any; signal: any; complete: any; } | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [budgetHistory](<history-budget.cjs.md#s-0c3553c9658a4cf5>) — [electron/ai/statistics.cjs:274](<../../../../../../electron/ai/statistics.cjs#L274>)
- [executePlan](<statistics.cjs.md#s-474e53bf1087ed47>) — [electron/ai/statistics.cjs:288](<../../../../../../electron/ai/statistics.cjs#L288>)
- [ModelRuntimeError.constructor](<../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/statistics.cjs:294](<../../../../../../electron/ai/statistics.cjs#L294>)

**Called by (statically resolved):**

- [createContextOrchestrator.run.&lt;anonymous@668:66&gt;](<orchestrator.cjs.md#s-54cea28f1e226e59>) — [electron/ai/orchestrator.cjs:669](<../../../../../../electron/ai/orchestrator.cjs#L669>)

Unresolved / external call sites: 13.

- require — module-loader; [electron/ai/statistics.cjs:240](<../../../../../../electron/ai/statistics.cjs#L240>)
- require — module-loader; [electron/ai/statistics.cjs:241](<../../../../../../electron/ai/statistics.cjs#L241>)
- OPS.join — external-or-dynamic-dispatch; [electron/ai/statistics.cjs:242](<../../../../../../electron/ai/statistics.cjs#L242>)
- sources .filter((s) =&gt; s.type !== "csv") .map — external-or-dynamic-dispatch; [electron/ai/statistics.cjs:245](<../../../../../../electron/ai/statistics.cjs#L245>)
- sources .filter — external-or-dynamic-dispatch; [electron/ai/statistics.cjs:245](<../../../../../../electron/ai/statistics.cjs#L245>)
- signal?.throwIfAborted — external-or-dynamic-dispatch; [electron/ai/statistics.cjs:258](<../../../../../../electron/ai/statistics.cjs#L258>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/ai/statistics.cjs:265](<../../../../../../electron/ai/statistics.cjs#L265>)
- complete — external-or-dynamic-dispatch; [electron/ai/statistics.cjs:275](<../../../../../../electron/ai/statistics.cjs#L275>)
- 5 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/providers/gemini-provider.test.cjs:317](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L317>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:441](<../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L441>) — file-import-only; coverage not established.
- [electron/ai/statistics.test.cjs:7](<../../../../../../electron/ai/statistics.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-85d9f5f24141c96d"></a>

## planStatistics.&lt;anonymous@246:15&gt;

[electron/ai/statistics.cjs:246](<../../../../../../electron/ai/statistics.cjs#L246>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [planStatistics](<statistics.cjs.md#s-4cd6a96e6d276ca8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| s | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/providers/gemini-provider.test.cjs:317](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L317>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:441](<../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L441>) — file-import-only; coverage not established.
- [electron/ai/statistics.test.cjs:7](<../../../../../../electron/ai/statistics.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-0f4eaa9f3c2cae70"></a>

## planStatistics.&lt;anonymous@247:12&gt;

[electron/ai/statistics.cjs:247](<../../../../../../electron/ai/statistics.cjs#L247>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [planStatistics](<statistics.cjs.md#s-4cd6a96e6d276ca8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| s | any | compiler-inferred | required |

Returns: { role: string; content: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- JSON.stringify — external-or-dynamic-dispatch; [electron/ai/statistics.cjs:249](<../../../../../../electron/ai/statistics.cjs#L249>)

**Related tests / acceptance harnesses:**

- [electron/ai/providers/gemini-provider.test.cjs:317](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L317>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:441](<../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L441>) — file-import-only; coverage not established.
- [electron/ai/statistics.test.cjs:7](<../../../../../../electron/ai/statistics.test.cjs#L7>) — file-import-only; coverage not established.
