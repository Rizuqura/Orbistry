# electron/ai/dataset-planner.cjs: symbols

[Atlas](<../../../../README.md>) / [Retained AI runtime](<../../../../modules/ai-runtime.md>) / [electron/ai/dataset-planner.cjs:1](<../../../../../../electron/ai/dataset-planner.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/dataset-planner.cjs](<dataset-planner.cjs.md#s-4d8baaad0694df95>) (Module)
- [object](<dataset-planner.cjs.md#s-d04eec233932a8c5>) (ArrowFunction)
- [list](<dataset-planner.cjs.md#s-04ae63b64446c86d>) (ArrowFunction)
- [PLAN_FORMAT](<dataset-planner.cjs.md#s-e45255f39fa4da12>) (VariableDeclaration)
- [planFormat](<dataset-planner.cjs.md#s-9ddfba17287448fa>) (FunctionDeclaration)
- [planFormat.&lt;anonymous@108:37&gt;](<dataset-planner.cjs.md#s-987ed005dd383079>) (ArrowFunction)
- [planFormat.&lt;anonymous@111:26&gt;](<dataset-planner.cjs.md#s-4577e77cfec66cad>) (ArrowFunction)
- [planFormat.&lt;anonymous@111:26&gt;.&lt;anonymous@112:48&gt;](<dataset-planner.cjs.md#s-57a30c014ff8929b>) (ArrowFunction)
- [planFormat.&lt;anonymous@120:7&gt;](<dataset-planner.cjs.md#s-d98fddb0c51228cc>) (ArrowFunction)
- [planFormat.&lt;anonymous@125:26&gt;](<dataset-planner.cjs.md#s-c2e49488c01cf870>) (ArrowFunction)
- [isPlanFormat](<dataset-planner.cjs.md#s-6b924db4a2611106>) (FunctionDeclaration)
- [isPlanFormat.&lt;anonymous@138:9&gt;](<dataset-planner.cjs.md#s-3a9f72d81c318576>) (ArrowFunction)
- [isPlanFormat.&lt;anonymous@145:27&gt;](<dataset-planner.cjs.md#s-e057d63100d2f431>) (ArrowFunction)
- [planDataset](<dataset-planner.cjs.md#s-9b1e48bfd220f829>) (FunctionDeclaration)
- [planDataset.&lt;anonymous@182:20&gt;](<dataset-planner.cjs.md#s-0b983b4cfa71377e>) (ArrowFunction)
- [planDataset.&lt;anonymous@241:32&gt;](<dataset-planner.cjs.md#s-de049ddeac13c9ff>) (ArrowFunction)
- [planDataset.&lt;anonymous@251:11&gt;](<dataset-planner.cjs.md#s-596c6d4b1e1b430d>) (ArrowFunction)
- [planDataset.&lt;anonymous@259:36&gt;](<dataset-planner.cjs.md#s-f46642cf4c13212d>) (ArrowFunction)

<a id="s-4d8baaad0694df95"></a>

## electron/ai/dataset-planner.cjs

[electron/ai/dataset-planner.cjs:1](<../../../../../../electron/ai/dataset-planner.cjs#L1>) · Module · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

- [object](<dataset-planner.cjs.md#s-d04eec233932a8c5>) — [electron/ai/dataset-planner.cjs:11](<../../../../../../electron/ai/dataset-planner.cjs#L11>)
- [list](<dataset-planner.cjs.md#s-04ae63b64446c86d>) — [electron/ai/dataset-planner.cjs:14](<../../../../../../electron/ai/dataset-planner.cjs#L14>)
- [list](<dataset-planner.cjs.md#s-04ae63b64446c86d>) — [electron/ai/dataset-planner.cjs:15](<../../../../../../electron/ai/dataset-planner.cjs#L15>)
- [object](<dataset-planner.cjs.md#s-d04eec233932a8c5>) — [electron/ai/dataset-planner.cjs:16](<../../../../../../electron/ai/dataset-planner.cjs#L16>)
- [list](<dataset-planner.cjs.md#s-04ae63b64446c86d>) — [electron/ai/dataset-planner.cjs:35](<../../../../../../electron/ai/dataset-planner.cjs#L35>)
- [object](<dataset-planner.cjs.md#s-d04eec233932a8c5>) — [electron/ai/dataset-planner.cjs:36](<../../../../../../electron/ai/dataset-planner.cjs#L36>)
- [list](<dataset-planner.cjs.md#s-04ae63b64446c86d>) — [electron/ai/dataset-planner.cjs:41](<../../../../../../electron/ai/dataset-planner.cjs#L41>)
- [object](<dataset-planner.cjs.md#s-d04eec233932a8c5>) — [electron/ai/dataset-planner.cjs:42](<../../../../../../electron/ai/dataset-planner.cjs#L42>)
- [list](<dataset-planner.cjs.md#s-04ae63b64446c86d>) — [electron/ai/dataset-planner.cjs:59](<../../../../../../electron/ai/dataset-planner.cjs#L59>)
- [object](<dataset-planner.cjs.md#s-d04eec233932a8c5>) — [electron/ai/dataset-planner.cjs:60](<../../../../../../electron/ai/dataset-planner.cjs#L60>)
- [object](<dataset-planner.cjs.md#s-d04eec233932a8c5>) — [electron/ai/dataset-planner.cjs:67](<../../../../../../electron/ai/dataset-planner.cjs#L67>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- require — module-loader; [electron/ai/dataset-planner.cjs:1](<../../../../../../electron/ai/dataset-planner.cjs#L1>)
- require — module-loader; [electron/ai/dataset-planner.cjs:2](<../../../../../../electron/ai/dataset-planner.cjs#L2>)

**Related tests / acceptance harnesses:**

- [electron/ai/dataset.test.cjs:167](<../../../../../../electron/ai/dataset.test.cjs#L167>) — file-import-only; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:7](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:10](<../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:6](<../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-d04eec233932a8c5"></a>

## object

[electron/ai/dataset-planner.cjs:4](<../../../../../../electron/ai/dataset-planner.cjs#L4>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/dataset-planner.cjs](<dataset-planner.cjs.md#s-4d8baaad0694df95>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| properties | any | compiler-inferred | required |

Returns: { type: string; properties: any; additionalProperties: boolean; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [electron/ai/dataset-planner.cjs](<dataset-planner.cjs.md#s-4d8baaad0694df95>) — [electron/ai/dataset-planner.cjs:11](<../../../../../../electron/ai/dataset-planner.cjs#L11>)
- [electron/ai/dataset-planner.cjs](<dataset-planner.cjs.md#s-4d8baaad0694df95>) — [electron/ai/dataset-planner.cjs:16](<../../../../../../electron/ai/dataset-planner.cjs#L16>)
- [electron/ai/dataset-planner.cjs](<dataset-planner.cjs.md#s-4d8baaad0694df95>) — [electron/ai/dataset-planner.cjs:36](<../../../../../../electron/ai/dataset-planner.cjs#L36>)
- [electron/ai/dataset-planner.cjs](<dataset-planner.cjs.md#s-4d8baaad0694df95>) — [electron/ai/dataset-planner.cjs:42](<../../../../../../electron/ai/dataset-planner.cjs#L42>)
- [electron/ai/dataset-planner.cjs](<dataset-planner.cjs.md#s-4d8baaad0694df95>) — [electron/ai/dataset-planner.cjs:60](<../../../../../../electron/ai/dataset-planner.cjs#L60>)
- [electron/ai/dataset-planner.cjs](<dataset-planner.cjs.md#s-4d8baaad0694df95>) — [electron/ai/dataset-planner.cjs:67](<../../../../../../electron/ai/dataset-planner.cjs#L67>)
- [PLAN_FORMAT](<dataset-planner.cjs.md#s-e45255f39fa4da12>) — [electron/ai/dataset-planner.cjs:88](<../../../../../../electron/ai/dataset-planner.cjs#L88>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/dataset.test.cjs:167](<../../../../../../electron/ai/dataset.test.cjs#L167>) — file-import-only; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:7](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:10](<../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:6](<../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-04ae63b64446c86d"></a>

## list

[electron/ai/dataset-planner.cjs:10](<../../../../../../electron/ai/dataset-planner.cjs#L10>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/dataset-planner.cjs](<dataset-planner.cjs.md#s-4d8baaad0694df95>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| items | any | compiler-inferred | required |

Returns: { type: string; items: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [electron/ai/dataset-planner.cjs](<dataset-planner.cjs.md#s-4d8baaad0694df95>) — [electron/ai/dataset-planner.cjs:14](<../../../../../../electron/ai/dataset-planner.cjs#L14>)
- [electron/ai/dataset-planner.cjs](<dataset-planner.cjs.md#s-4d8baaad0694df95>) — [electron/ai/dataset-planner.cjs:15](<../../../../../../electron/ai/dataset-planner.cjs#L15>)
- [electron/ai/dataset-planner.cjs](<dataset-planner.cjs.md#s-4d8baaad0694df95>) — [electron/ai/dataset-planner.cjs:35](<../../../../../../electron/ai/dataset-planner.cjs#L35>)
- [electron/ai/dataset-planner.cjs](<dataset-planner.cjs.md#s-4d8baaad0694df95>) — [electron/ai/dataset-planner.cjs:41](<../../../../../../electron/ai/dataset-planner.cjs#L41>)
- [electron/ai/dataset-planner.cjs](<dataset-planner.cjs.md#s-4d8baaad0694df95>) — [electron/ai/dataset-planner.cjs:59](<../../../../../../electron/ai/dataset-planner.cjs#L59>)
- [PLAN_FORMAT](<dataset-planner.cjs.md#s-e45255f39fa4da12>) — [electron/ai/dataset-planner.cjs:95](<../../../../../../electron/ai/dataset-planner.cjs#L95>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/dataset.test.cjs:167](<../../../../../../electron/ai/dataset.test.cjs#L167>) — file-import-only; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:7](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:10](<../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:6](<../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-e45255f39fa4da12"></a>

## PLAN_FORMAT

[electron/ai/dataset-planner.cjs:87](<../../../../../../electron/ai/dataset-planner.cjs#L87>) · VariableDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: PLAN_FORMAT ([electron/ai/dataset-planner.cjs:1](<../../../../../../electron/ai/dataset-planner.cjs#L1>)).

Lexical owner: [electron/ai/dataset-planner.cjs](<dataset-planner.cjs.md#s-4d8baaad0694df95>).

**Calls (statically resolved):**

- [object](<dataset-planner.cjs.md#s-d04eec233932a8c5>) — [electron/ai/dataset-planner.cjs:88](<../../../../../../electron/ai/dataset-planner.cjs#L88>)
- [list](<dataset-planner.cjs.md#s-04ae63b64446c86d>) — [electron/ai/dataset-planner.cjs:95](<../../../../../../electron/ai/dataset-planner.cjs#L95>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/dataset.test.cjs:167](<../../../../../../electron/ai/dataset.test.cjs#L167>) — file-import-only; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:7](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:10](<../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:6](<../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-9ddfba17287448fa"></a>

## planFormat

[electron/ai/dataset-planner.cjs:107](<../../../../../../electron/ai/dataset-planner.cjs#L107>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: planFormat ([electron/ai/dataset-planner.cjs:1](<../../../../../../electron/ai/dataset-planner.cjs#L1>)).

Lexical owner: [electron/ai/dataset-planner.cjs](<dataset-planner.cjs.md#s-4d8baaad0694df95>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| sources | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [planDataset](<dataset-planner.cjs.md#s-9b1e48bfd220f829>) — [electron/ai/dataset-planner.cjs:223](<../../../../../../electron/ai/dataset-planner.cjs#L223>)
- [&lt;anonymous@169:74&gt;](<dataset.test.cjs.md#s-236210202d31e47f>) — [electron/ai/dataset.test.cjs:170](<../../../../../../electron/ai/dataset.test.cjs#L170>)
- [&lt;anonymous@88:66&gt;](<providers/gemini-provider.test.cjs.md#s-9e73bab42f9cd9c4>) — [electron/ai/providers/gemini-provider.test.cjs:89](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L89>)

Unresolved / external call sites: 7.

- sources.filter — external-or-dynamic-dispatch; [electron/ai/dataset-planner.cjs:108](<../../../../../../electron/ai/dataset-planner.cjs#L108>)
- Set — external-or-dynamic-dispatch; [electron/ai/dataset-planner.cjs:110](<../../../../../../electron/ai/dataset-planner.cjs#L110>)
- csvSources.flatMap — external-or-dynamic-dispatch; [electron/ai/dataset-planner.cjs:111](<../../../../../../electron/ai/dataset-planner.cjs#L111>)
- JSON.parse — external-or-dynamic-dispatch; [electron/ai/dataset-planner.cjs:117](<../../../../../../electron/ai/dataset-planner.cjs#L117>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/ai/dataset-planner.cjs:117](<../../../../../../electron/ai/dataset-planner.cjs#L117>)
- path.reduce — external-or-dynamic-dispatch; [electron/ai/dataset-planner.cjs:119](<../../../../../../electron/ai/dataset-planner.cjs#L119>)
- csvSources.map — external-or-dynamic-dispatch; [electron/ai/dataset-planner.cjs:125](<../../../../../../electron/ai/dataset-planner.cjs#L125>)

**Related tests / acceptance harnesses:**

- [electron/ai/dataset.test.cjs:170](<../../../../../../electron/ai/dataset.test.cjs#L170>) — static-call-site; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:89](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L89>) — static-call-site; coverage not established.
- [electron/ai/dataset.test.cjs:167](<../../../../../../electron/ai/dataset.test.cjs#L167>) — file-import-only; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:7](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:10](<../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:6](<../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-987ed005dd383079"></a>

## planFormat.&lt;anonymous@108:37&gt;

[electron/ai/dataset-planner.cjs:108](<../../../../../../electron/ai/dataset-planner.cjs#L108>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [planFormat](<dataset-planner.cjs.md#s-9ddfba17287448fa>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| source | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/dataset.test.cjs:167](<../../../../../../electron/ai/dataset.test.cjs#L167>) — file-import-only; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:7](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:10](<../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:6](<../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-4577e77cfec66cad"></a>

## planFormat.&lt;anonymous@111:26&gt;

[electron/ai/dataset-planner.cjs:111](<../../../../../../electron/ai/dataset-planner.cjs#L111>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [planFormat](<dataset-planner.cjs.md#s-9ddfba17287448fa>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| source | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- JSON.parse(source.content).columns.map — external-or-dynamic-dispatch; [electron/ai/dataset-planner.cjs:112](<../../../../../../electron/ai/dataset-planner.cjs#L112>)
- JSON.parse — external-or-dynamic-dispatch; [electron/ai/dataset-planner.cjs:112](<../../../../../../electron/ai/dataset-planner.cjs#L112>)

**Related tests / acceptance harnesses:**

- [electron/ai/dataset.test.cjs:167](<../../../../../../electron/ai/dataset.test.cjs#L167>) — file-import-only; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:7](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:10](<../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:6](<../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-57a30c014ff8929b"></a>

## planFormat.&lt;anonymous@111:26&gt;.&lt;anonymous@112:48&gt;

[electron/ai/dataset-planner.cjs:112](<../../../../../../electron/ai/dataset-planner.cjs#L112>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [planFormat.&lt;anonymous@111:26&gt;](<dataset-planner.cjs.md#s-4577e77cfec66cad>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| column | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/dataset.test.cjs:167](<../../../../../../electron/ai/dataset.test.cjs#L167>) — file-import-only; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:7](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:10](<../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:6](<../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-d98fddb0c51228cc"></a>

## planFormat.&lt;anonymous@120:7&gt;

[electron/ai/dataset-planner.cjs:120](<../../../../../../electron/ai/dataset-planner.cjs#L120>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [planFormat](<dataset-planner.cjs.md#s-9ddfba17287448fa>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |
| key | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/dataset.test.cjs:167](<../../../../../../electron/ai/dataset.test.cjs#L167>) — file-import-only; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:7](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:10](<../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:6](<../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-c2e49488c01cf870"></a>

## planFormat.&lt;anonymous@125:26&gt;

[electron/ai/dataset-planner.cjs:125](<../../../../../../electron/ai/dataset-planner.cjs#L125>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [planFormat](<dataset-planner.cjs.md#s-9ddfba17287448fa>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| source | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/dataset.test.cjs:167](<../../../../../../electron/ai/dataset.test.cjs#L167>) — file-import-only; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:7](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:10](<../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:6](<../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-6b924db4a2611106"></a>

## isPlanFormat

[electron/ai/dataset-planner.cjs:132](<../../../../../../electron/ai/dataset-planner.cjs#L132>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: isPlanFormat ([electron/ai/dataset-planner.cjs:1](<../../../../../../electron/ai/dataset-planner.cjs#L1>)).

Lexical owner: [electron/ai/dataset-planner.cjs](<dataset-planner.cjs.md#s-4d8baaad0694df95>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| format | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@169:74&gt;](<dataset.test.cjs.md#s-236210202d31e47f>) — [electron/ai/dataset.test.cjs:194](<../../../../../../electron/ai/dataset.test.cjs#L194>)
- [&lt;anonymous@169:74&gt;](<dataset.test.cjs.md#s-236210202d31e47f>) — [electron/ai/dataset.test.cjs:196](<../../../../../../electron/ai/dataset.test.cjs#L196>)
- [GeminiProvider.complete.format](<providers/gemini-provider.cjs.md#s-f1c47bd15e6fc946>) — [electron/ai/providers/gemini-provider.cjs:282](<../../../../../../electron/ai/providers/gemini-provider.cjs#L282>)

Unresolved / external call sites: 7.

- JSON.stringify — external-or-dynamic-dispatch; [electron/ai/dataset-planner.cjs:134](<../../../../../../electron/ai/dataset-planner.cjs#L134>)
- structuredClone — external-or-dynamic-dispatch; [electron/ai/dataset-planner.cjs:135](<../../../../../../electron/ai/dataset-planner.cjs#L135>)
- path.reduce — external-or-dynamic-dispatch; [electron/ai/dataset-planner.cjs:137](<../../../../../../electron/ai/dataset-planner.cjs#L137>)
- Array.isArray — external-or-dynamic-dispatch; [electron/ai/dataset-planner.cjs:143](<../../../../../../electron/ai/dataset-planner.cjs#L143>)
- field.enum.some — external-or-dynamic-dispatch; [electron/ai/dataset-planner.cjs:145](<../../../../../../electron/ai/dataset-planner.cjs#L145>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/ai/dataset-planner.cjs:150](<../../../../../../electron/ai/dataset-planner.cjs#L150>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/ai/dataset-planner.cjs:150](<../../../../../../electron/ai/dataset-planner.cjs#L150>)

**Related tests / acceptance harnesses:**

- [electron/ai/dataset.test.cjs:194](<../../../../../../electron/ai/dataset.test.cjs#L194>) — static-call-site; coverage not established.
- [electron/ai/dataset.test.cjs:196](<../../../../../../electron/ai/dataset.test.cjs#L196>) — static-call-site; coverage not established.
- [electron/ai/dataset.test.cjs:167](<../../../../../../electron/ai/dataset.test.cjs#L167>) — file-import-only; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:7](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:10](<../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:6](<../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-3a9f72d81c318576"></a>

## isPlanFormat.&lt;anonymous@138:9&gt;

[electron/ai/dataset-planner.cjs:138](<../../../../../../electron/ai/dataset-planner.cjs#L138>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [isPlanFormat](<dataset-planner.cjs.md#s-6b924db4a2611106>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |
| key | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/dataset.test.cjs:167](<../../../../../../electron/ai/dataset.test.cjs#L167>) — file-import-only; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:7](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:10](<../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:6](<../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-e057d63100d2f431"></a>

## isPlanFormat.&lt;anonymous@145:27&gt;

[electron/ai/dataset-planner.cjs:145](<../../../../../../electron/ai/dataset-planner.cjs#L145>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [isPlanFormat](<dataset-planner.cjs.md#s-6b924db4a2611106>).

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

- [electron/ai/dataset.test.cjs:167](<../../../../../../electron/ai/dataset.test.cjs#L167>) — file-import-only; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:7](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:10](<../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:6](<../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-9b1e48bfd220f829"></a>

## planDataset

[electron/ai/dataset-planner.cjs:169](<../../../../../../electron/ai/dataset-planner.cjs#L169>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: planDataset ([electron/ai/dataset-planner.cjs:1](<../../../../../../electron/ai/dataset-planner.cjs#L1>)).

Lexical owner: [electron/ai/dataset-planner.cjs](<dataset-planner.cjs.md#s-4d8baaad0694df95>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| {   session,   sources,   model,   settings,   signal,   history,   userMessage,   complete,   diagnostics, } | { session: any; sources: any; model: any; settings: any; signal: any; history: any; userMessage: any; complete: any; diagnostics: any; } | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [budgetHistory](<history-budget.cjs.md#s-0c3553c9658a4cf5>) — [electron/ai/dataset-planner.cjs:214](<../../../../../../electron/ai/dataset-planner.cjs#L214>)
- [planFormat](<dataset-planner.cjs.md#s-9ddfba17287448fa>) — [electron/ai/dataset-planner.cjs:223](<../../../../../../electron/ai/dataset-planner.cjs#L223>)
- [budgetHistory](<history-budget.cjs.md#s-0c3553c9658a4cf5>) — [electron/ai/dataset-planner.cjs:263](<../../../../../../electron/ai/dataset-planner.cjs#L263>)
- [ModelRuntimeError.constructor](<../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/dataset-planner.cjs:275](<../../../../../../electron/ai/dataset-planner.cjs#L275>)

**Called by (statically resolved):**

- [createContextOrchestrator.run.&lt;anonymous@627:62&gt;](<orchestrator.cjs.md#s-c7f0498f44a83b6a>) — [electron/ai/orchestrator.cjs:628](<../../../../../../electron/ai/orchestrator.cjs#L628>)

Unresolved / external call sites: 24.

- sources.map — external-or-dynamic-dispatch; [electron/ai/dataset-planner.cjs:182](<../../../../../../electron/ai/dataset-planner.cjs#L182>)
- signal?.throwIfAborted — external-or-dynamic-dispatch; [electron/ai/dataset-planner.cjs:195](<../../../../../../electron/ai/dataset-planner.cjs#L195>)
- base.slice — external-or-dynamic-dispatch; [electron/ai/dataset-planner.cjs:197](<../../../../../../electron/ai/dataset-planner.cjs#L197>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/ai/dataset-planner.cjs:202](<../../../../../../electron/ai/dataset-planner.cjs#L202>)
- base.at — external-or-dynamic-dispatch; [electron/ai/dataset-planner.cjs:212](<../../../../../../electron/ai/dataset-planner.cjs#L212>)
- current.slice — external-or-dynamic-dispatch; [electron/ai/dataset-planner.cjs:216](<../../../../../../electron/ai/dataset-planner.cjs#L216>)
- current.at — external-or-dynamic-dispatch; [electron/ai/dataset-planner.cjs:218](<../../../../../../electron/ai/dataset-planner.cjs#L218>)
- complete — external-or-dynamic-dispatch; [electron/ai/dataset-planner.cjs:220](<../../../../../../electron/ai/dataset-planner.cjs#L220>)
- 16 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/dataset.test.cjs:167](<../../../../../../electron/ai/dataset.test.cjs#L167>) — file-import-only; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:7](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:10](<../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:6](<../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-0b983b4cfa71377e"></a>

## planDataset.&lt;anonymous@182:20&gt;

[electron/ai/dataset-planner.cjs:182](<../../../../../../electron/ai/dataset-planner.cjs#L182>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [planDataset](<dataset-planner.cjs.md#s-9b1e48bfd220f829>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| s | any | compiler-inferred | required |

Returns: { role: string; content: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- JSON.stringify — external-or-dynamic-dispatch; [electron/ai/dataset-planner.cjs:184](<../../../../../../electron/ai/dataset-planner.cjs#L184>)

**Related tests / acceptance harnesses:**

- [electron/ai/dataset.test.cjs:167](<../../../../../../electron/ai/dataset.test.cjs#L167>) — file-import-only; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:7](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:10](<../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:6](<../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-de049ddeac13c9ff"></a>

## planDataset.&lt;anonymous@241:32&gt;

[electron/ai/dataset-planner.cjs:241](<../../../../../../electron/ai/dataset-planner.cjs#L241>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [planDataset](<dataset-planner.cjs.md#s-9b1e48bfd220f829>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| k | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- &#91;"task", "queries"&#93;.includes — external-or-dynamic-dispatch; [electron/ai/dataset-planner.cjs:241](<../../../../../../electron/ai/dataset-planner.cjs#L241>)

**Related tests / acceptance harnesses:**

- [electron/ai/dataset.test.cjs:167](<../../../../../../electron/ai/dataset.test.cjs#L167>) — file-import-only; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:7](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:10](<../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:6](<../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-596c6d4b1e1b430d"></a>

## planDataset.&lt;anonymous@251:11&gt;

[electron/ai/dataset-planner.cjs:251](<../../../../../../electron/ai/dataset-planner.cjs#L251>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [planDataset](<dataset-planner.cjs.md#s-9b1e48bfd220f829>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| query | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- Array.isArray — external-or-dynamic-dispatch; [electron/ai/dataset-planner.cjs:251](<../../../../../../electron/ai/dataset-planner.cjs#L251>)

**Related tests / acceptance harnesses:**

- [electron/ai/dataset.test.cjs:167](<../../../../../../electron/ai/dataset.test.cjs#L167>) — file-import-only; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:7](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:10](<../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:6](<../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-f46642cf4c13212d"></a>

## planDataset.&lt;anonymous@259:36&gt;

[electron/ai/dataset-planner.cjs:259](<../../../../../../electron/ai/dataset-planner.cjs#L259>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [planDataset](<dataset-planner.cjs.md#s-9b1e48bfd220f829>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| r | any | compiler-inferred | required |

Returns: { role: string; content: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- JSON.stringify — external-or-dynamic-dispatch; [electron/ai/dataset-planner.cjs:261](<../../../../../../electron/ai/dataset-planner.cjs#L261>)

**Related tests / acceptance harnesses:**

- [electron/ai/dataset.test.cjs:167](<../../../../../../electron/ai/dataset.test.cjs#L167>) — file-import-only; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:7](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:10](<../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:6](<../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L6>) — file-import-only; coverage not established.
