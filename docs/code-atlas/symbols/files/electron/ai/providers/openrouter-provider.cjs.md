# electron/ai/providers/openrouter-provider.cjs: symbols

[Atlas](<../../../../../README.md>) / [Model-provider adapters](<../../../../../modules/providers.md>) / [electron/ai/providers/openrouter-provider.cjs:1](<../../../../../../../electron/ai/providers/openrouter-provider.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/providers/openrouter-provider.cjs](<openrouter-provider.cjs.md#s-27de2a92a021400a>) (Module)
- [modelId](<openrouter-provider.cjs.md#s-3f40c12653c573d6>) (SchemaBinding)
- [catalogItem](<openrouter-provider.cjs.md#s-1ac52b57395546c3>) (SchemaBinding)
- [catalog](<openrouter-provider.cjs.md#s-282f3c8878b6cecb>) (SchemaBinding)
- [OpenRouterProvider](<openrouter-provider.cjs.md#s-fc52b1102dfbe3e0>) (ClassDeclaration)
- [OpenRouterProvider.constructor](<openrouter-provider.cjs.md#s-e3644ae28bea5ca5>) (Constructor)
- [OpenRouterProvider.listModels](<openrouter-provider.cjs.md#s-d967dd193ba2db0e>) (MethodDeclaration)
- [OpenRouterProvider.listModels.&lt;anonymous@55:7&gt;](<openrouter-provider.cjs.md#s-909f5b1f0d8612d2>) (ArrowFunction)
- [OpenRouterProvider.complete](<openrouter-provider.cjs.md#s-2f6fa6d2e99f6834>) (MethodDeclaration)
- [pricePerMillion](<openrouter-provider.cjs.md#s-9cbc5a045472ab99>) (FunctionDeclaration)

<a id="s-27de2a92a021400a"></a>

## electron/ai/providers/openrouter-provider.cjs

[electron/ai/providers/openrouter-provider.cjs:1](<../../../../../../../electron/ai/providers/openrouter-provider.cjs#L1>) · Module · production · [Model-provider adapters](<../../../../../modules/providers.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- require — module-loader; [electron/ai/providers/openrouter-provider.cjs:1](<../../../../../../../electron/ai/providers/openrouter-provider.cjs#L1>)
- require — module-loader; [electron/ai/providers/openrouter-provider.cjs:2](<../../../../../../../electron/ai/providers/openrouter-provider.cjs#L2>)
- require — module-loader; [electron/ai/providers/openrouter-provider.cjs:3](<../../../../../../../electron/ai/providers/openrouter-provider.cjs#L3>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-evaluation.test.cjs:240](<../../../../../../../electron/ai/front-office-evaluation.test.cjs#L240>) — file-import-only; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:3](<../../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L3>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:12](<../../../../../../../electron/ai/request-logger.test.cjs#L12>) — file-import-only; coverage not established.

<a id="s-3f40c12653c573d6"></a>

## modelId

[electron/ai/providers/openrouter-provider.cjs:4](<../../../../../../../electron/ai/providers/openrouter-provider.cjs#L4>) · SchemaBinding · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/providers/openrouter-provider.cjs](<openrouter-provider.cjs.md#s-27de2a92a021400a>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- z .string() .min(1) .max(200) .regex — external-or-dynamic-dispatch; [electron/ai/providers/openrouter-provider.cjs:4](<../../../../../../../electron/ai/providers/openrouter-provider.cjs#L4>)
- z .string() .min(1) .max — external-or-dynamic-dispatch; [electron/ai/providers/openrouter-provider.cjs:4](<../../../../../../../electron/ai/providers/openrouter-provider.cjs#L4>)
- z .string() .min — external-or-dynamic-dispatch; [electron/ai/providers/openrouter-provider.cjs:4](<../../../../../../../electron/ai/providers/openrouter-provider.cjs#L4>)
- z .string — external-or-dynamic-dispatch; [electron/ai/providers/openrouter-provider.cjs:4](<../../../../../../../electron/ai/providers/openrouter-provider.cjs#L4>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-evaluation.test.cjs:240](<../../../../../../../electron/ai/front-office-evaluation.test.cjs#L240>) — file-import-only; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:3](<../../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L3>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:12](<../../../../../../../electron/ai/request-logger.test.cjs#L12>) — file-import-only; coverage not established.

<a id="s-1ac52b57395546c3"></a>

## catalogItem

[electron/ai/providers/openrouter-provider.cjs:9](<../../../../../../../electron/ai/providers/openrouter-provider.cjs#L9>) · SchemaBinding · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/providers/openrouter-provider.cjs](<openrouter-provider.cjs.md#s-27de2a92a021400a>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 39.

- z.object — external-or-dynamic-dispatch; [electron/ai/providers/openrouter-provider.cjs:9](<../../../../../../../electron/ai/providers/openrouter-provider.cjs#L9>)
- z.string().max(300).nullable().optional — external-or-dynamic-dispatch; [electron/ai/providers/openrouter-provider.cjs:11](<../../../../../../../electron/ai/providers/openrouter-provider.cjs#L11>)
- z.string().max(300).nullable — external-or-dynamic-dispatch; [electron/ai/providers/openrouter-provider.cjs:11](<../../../../../../../electron/ai/providers/openrouter-provider.cjs#L11>)
- z.string().max — external-or-dynamic-dispatch; [electron/ai/providers/openrouter-provider.cjs:11](<../../../../../../../electron/ai/providers/openrouter-provider.cjs#L11>)
- z.string — external-or-dynamic-dispatch; [electron/ai/providers/openrouter-provider.cjs:11](<../../../../../../../electron/ai/providers/openrouter-provider.cjs#L11>)
- z.number().int().positive().nullable().optional — external-or-dynamic-dispatch; [electron/ai/providers/openrouter-provider.cjs:12](<../../../../../../../electron/ai/providers/openrouter-provider.cjs#L12>)
- z.number().int().positive().nullable — external-or-dynamic-dispatch; [electron/ai/providers/openrouter-provider.cjs:12](<../../../../../../../electron/ai/providers/openrouter-provider.cjs#L12>)
- z.number().int().positive — external-or-dynamic-dispatch; [electron/ai/providers/openrouter-provider.cjs:12](<../../../../../../../electron/ai/providers/openrouter-provider.cjs#L12>)
- 31 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-evaluation.test.cjs:240](<../../../../../../../electron/ai/front-office-evaluation.test.cjs#L240>) — file-import-only; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:3](<../../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L3>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:12](<../../../../../../../electron/ai/request-logger.test.cjs#L12>) — file-import-only; coverage not established.

<a id="s-282f3c8878b6cecb"></a>

## catalog

[electron/ai/providers/openrouter-provider.cjs:37](<../../../../../../../electron/ai/providers/openrouter-provider.cjs#L37>) · SchemaBinding · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/providers/openrouter-provider.cjs](<openrouter-provider.cjs.md#s-27de2a92a021400a>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- z.object — external-or-dynamic-dispatch; [electron/ai/providers/openrouter-provider.cjs:37](<../../../../../../../electron/ai/providers/openrouter-provider.cjs#L37>)
- z.array(z.unknown()).max — external-or-dynamic-dispatch; [electron/ai/providers/openrouter-provider.cjs:37](<../../../../../../../electron/ai/providers/openrouter-provider.cjs#L37>)
- z.array — external-or-dynamic-dispatch; [electron/ai/providers/openrouter-provider.cjs:37](<../../../../../../../electron/ai/providers/openrouter-provider.cjs#L37>)
- z.unknown — external-or-dynamic-dispatch; [electron/ai/providers/openrouter-provider.cjs:37](<../../../../../../../electron/ai/providers/openrouter-provider.cjs#L37>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-evaluation.test.cjs:240](<../../../../../../../electron/ai/front-office-evaluation.test.cjs#L240>) — file-import-only; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:3](<../../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L3>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:12](<../../../../../../../electron/ai/request-logger.test.cjs#L12>) — file-import-only; coverage not established.

<a id="s-fc52b1102dfbe3e0"></a>

## OpenRouterProvider

[electron/ai/providers/openrouter-provider.cjs:39](<../../../../../../../electron/ai/providers/openrouter-provider.cjs#L39>) · ClassDeclaration · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: OpenRouterProvider ([electron/ai/providers/openrouter-provider.cjs:1](<../../../../../../../electron/ai/providers/openrouter-provider.cjs#L1>)).

Lexical owner: [electron/ai/providers/openrouter-provider.cjs](<openrouter-provider.cjs.md#s-27de2a92a021400a>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/front-office-evaluation.test.cjs:240](<../../../../../../../electron/ai/front-office-evaluation.test.cjs#L240>) — file-import-only; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:3](<../../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L3>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:12](<../../../../../../../electron/ai/request-logger.test.cjs#L12>) — file-import-only; coverage not established.

<a id="s-e3644ae28bea5ca5"></a>

## OpenRouterProvider.constructor

[electron/ai/providers/openrouter-provider.cjs:40](<../../../../../../../electron/ai/providers/openrouter-provider.cjs#L40>) · Constructor · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [OpenRouterProvider](<openrouter-provider.cjs.md#s-fc52b1102dfbe3e0>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| options | any | compiler-inferred | required |

Returns: OpenRouterProvider (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@237:5&gt;](<../front-office-evaluation.test.cjs.md#s-ef8fa49271a8596e>) — [electron/ai/front-office-evaluation.test.cjs:245](<../../../../../../../electron/ai/front-office-evaluation.test.cjs#L245>)
- [&lt;anonymous@40:81&gt;](<openrouter-provider.test.cjs.md#s-0c156f842c2a7eb4>) — [electron/ai/providers/openrouter-provider.test.cjs:41](<../../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L41>)
- [&lt;anonymous@40:81&gt;](<openrouter-provider.test.cjs.md#s-0c156f842c2a7eb4>) — [electron/ai/providers/openrouter-provider.test.cjs:75](<../../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L75>)
- [&lt;anonymous@85:95&gt;](<openrouter-provider.test.cjs.md#s-6323b0b0b4df80ca>) — [electron/ai/providers/openrouter-provider.test.cjs:86](<../../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L86>)
- [&lt;anonymous@132:120&gt;](<openrouter-provider.test.cjs.md#s-3ccc130183e56e7c>) — [electron/ai/providers/openrouter-provider.test.cjs:134](<../../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L134>)
- [&lt;anonymous@165:91&gt;](<openrouter-provider.test.cjs.md#s-547e87e24f6361ff>) — [electron/ai/providers/openrouter-provider.test.cjs:167](<../../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L167>)
- [&lt;anonymous@193:99&gt;](<openrouter-provider.test.cjs.md#s-b37df0113de914e9>) — [electron/ai/providers/openrouter-provider.test.cjs:201](<../../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L201>)
- [&lt;anonymous@224:71&gt;](<openrouter-provider.test.cjs.md#s-6af6d69ab60275e4>) — [electron/ai/providers/openrouter-provider.test.cjs:225](<../../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L225>)
- [&lt;anonymous@154:111&gt;](<../request-logger.test.cjs.md#s-af56a97d64a0db63>) — [electron/ai/request-logger.test.cjs:214](<../../../../../../../electron/ai/request-logger.test.cjs#L214>)
- [main](<../../../scripts/front-office-benchmark.cjs.md#s-8f8223991922089c>) — [scripts/front-office-benchmark.cjs:141](<../../../../../../../scripts/front-office-benchmark.cjs#L141>)
- [scripts/provider-rca-main.cjs](<../../../scripts/provider-rca-main.cjs.md#s-b21a107abae20886>) — [scripts/provider-rca-main.cjs:53](<../../../../../../../scripts/provider-rca-main.cjs#L53>)

Unresolved / external call sites: 1.

- super — declaration-without-runtime-body; [electron/ai/providers/openrouter-provider.cjs:41](<../../../../../../../electron/ai/providers/openrouter-provider.cjs#L41>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-evaluation.test.cjs:245](<../../../../../../../electron/ai/front-office-evaluation.test.cjs#L245>) — static-call-site; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:41](<../../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L41>) — static-call-site; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:75](<../../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L75>) — static-call-site; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:86](<../../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L86>) — static-call-site; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:134](<../../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L134>) — static-call-site; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:167](<../../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L167>) — static-call-site; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:201](<../../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L201>) — static-call-site; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:225](<../../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L225>) — static-call-site; coverage not established.
- [electron/ai/request-logger.test.cjs:214](<../../../../../../../electron/ai/request-logger.test.cjs#L214>) — static-call-site; coverage not established.
- [electron/ai/front-office-evaluation.test.cjs:240](<../../../../../../../electron/ai/front-office-evaluation.test.cjs#L240>) — file-import-only; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:3](<../../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L3>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:12](<../../../../../../../electron/ai/request-logger.test.cjs#L12>) — file-import-only; coverage not established.

<a id="s-d967dd193ba2db0e"></a>

## OpenRouterProvider.listModels

[electron/ai/providers/openrouter-provider.cjs:51](<../../../../../../../electron/ai/providers/openrouter-provider.cjs#L51>) · MethodDeclaration · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [OpenRouterProvider](<openrouter-provider.cjs.md#s-fc52b1102dfbe3e0>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { signal } | {} | compiler-inferred | optional, default present |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [OpenAIChatProvider.request](<openai-chat-provider.cjs.md#s-b38b5e0af2267c91>) — [electron/ai/providers/openrouter-provider.cjs:52](<../../../../../../../electron/ai/providers/openrouter-provider.cjs#L52>)

**Called by (statically resolved):**

- [&lt;anonymous@40:81&gt;](<openrouter-provider.test.cjs.md#s-0c156f842c2a7eb4>) — [electron/ai/providers/openrouter-provider.test.cjs:62](<../../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L62>)
- [&lt;anonymous@40:81&gt;](<openrouter-provider.test.cjs.md#s-0c156f842c2a7eb4>) — [electron/ai/providers/openrouter-provider.test.cjs:80](<../../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L80>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/providers/openrouter-provider.test.cjs:62](<../../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L62>) — static-call-site; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:80](<../../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L80>) — static-call-site; coverage not established.
- [electron/ai/front-office-evaluation.test.cjs:240](<../../../../../../../electron/ai/front-office-evaluation.test.cjs#L240>) — file-import-only; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:3](<../../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L3>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:12](<../../../../../../../electron/ai/request-logger.test.cjs#L12>) — file-import-only; coverage not established.

<a id="s-909f5b1f0d8612d2"></a>

## OpenRouterProvider.listModels.&lt;anonymous@55:7&gt;

[electron/ai/providers/openrouter-provider.cjs:55](<../../../../../../../electron/ai/providers/openrouter-provider.cjs#L55>) · ArrowFunction · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [OpenRouterProvider.listModels](<openrouter-provider.cjs.md#s-d967dd193ba2db0e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| response | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [parse](<../../shared/validation.cjs.md#s-f29367528a73f24d>) — [electron/ai/providers/openrouter-provider.cjs:66](<../../../../../../../electron/ai/providers/openrouter-provider.cjs#L66>)
- [pricePerMillion](<openrouter-provider.cjs.md#s-9cbc5a045472ab99>) — [electron/ai/providers/openrouter-provider.cjs:108](<../../../../../../../electron/ai/providers/openrouter-provider.cjs#L108>)
- [pricePerMillion](<openrouter-provider.cjs.md#s-9cbc5a045472ab99>) — [electron/ai/providers/openrouter-provider.cjs:109](<../../../../../../../electron/ai/providers/openrouter-provider.cjs#L109>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/providers/openrouter-provider.cjs:117](<../../../../../../../electron/ai/providers/openrouter-provider.cjs#L117>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 15.

- TextDecoder — external-or-dynamic-dispatch; [electron/ai/providers/openrouter-provider.cjs:58](<../../../../../../../electron/ai/providers/openrouter-provider.cjs#L58>)
- Error — external-or-dynamic-dispatch; [electron/ai/providers/openrouter-provider.cjs:62](<../../../../../../../electron/ai/providers/openrouter-provider.cjs#L62>)
- decoder.decode — external-or-dynamic-dispatch; [electron/ai/providers/openrouter-provider.cjs:63](<../../../../../../../electron/ai/providers/openrouter-provider.cjs#L63>)
- decoder.decode — external-or-dynamic-dispatch; [electron/ai/providers/openrouter-provider.cjs:65](<../../../../../../../electron/ai/providers/openrouter-provider.cjs#L65>)
- JSON.parse — external-or-dynamic-dispatch; [electron/ai/providers/openrouter-provider.cjs:68](<../../../../../../../electron/ai/providers/openrouter-provider.cjs#L68>)
- Map — external-or-dynamic-dispatch; [electron/ai/providers/openrouter-provider.cjs:71](<../../../../../../../electron/ai/providers/openrouter-provider.cjs#L71>)
- catalogItem.safeParse — external-or-dynamic-dispatch; [electron/ai/providers/openrouter-provider.cjs:74](<../../../../../../../electron/ai/providers/openrouter-provider.cjs#L74>)
- item.architecture.input_modalities.includes — external-or-dynamic-dispatch; [electron/ai/providers/openrouter-provider.cjs:80](<../../../../../../../electron/ai/providers/openrouter-provider.cjs#L80>)
- 7 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-evaluation.test.cjs:240](<../../../../../../../electron/ai/front-office-evaluation.test.cjs#L240>) — file-import-only; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:3](<../../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L3>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:12](<../../../../../../../electron/ai/request-logger.test.cjs#L12>) — file-import-only; coverage not established.

<a id="s-2f6fa6d2e99f6834"></a>

## OpenRouterProvider.complete

[electron/ai/providers/openrouter-provider.cjs:126](<../../../../../../../electron/ai/providers/openrouter-provider.cjs#L126>) · MethodDeclaration · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [OpenRouterProvider](<openrouter-provider.cjs.md#s-fc52b1102dfbe3e0>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| request | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [OpenAIChatProvider.complete](<openai-chat-provider.cjs.md#s-16c9ee5446ba4e47>) — [electron/ai/providers/openrouter-provider.cjs:128](<../../../../../../../electron/ai/providers/openrouter-provider.cjs#L128>)

**Called by (statically resolved):**

- [&lt;anonymous@132:120&gt;](<openrouter-provider.test.cjs.md#s-3ccc130183e56e7c>) — [electron/ai/providers/openrouter-provider.test.cjs:156](<../../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L156>)
- [&lt;anonymous@165:91&gt;](<openrouter-provider.test.cjs.md#s-547e87e24f6361ff>) — [electron/ai/providers/openrouter-provider.test.cjs:179](<../../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L179>)
- [&lt;anonymous@193:99&gt;](<openrouter-provider.test.cjs.md#s-b37df0113de914e9>) — [electron/ai/providers/openrouter-provider.test.cjs:215](<../../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L215>)
- [&lt;anonymous@224:71&gt;](<openrouter-provider.test.cjs.md#s-6af6d69ab60275e4>) — [electron/ai/providers/openrouter-provider.test.cjs:229](<../../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L229>)
- [&lt;anonymous@224:71&gt;](<openrouter-provider.test.cjs.md#s-6af6d69ab60275e4>) — [electron/ai/providers/openrouter-provider.test.cjs:240](<../../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L240>)

Unresolved / external call sites: 2.

- this.credentials.get — external-or-dynamic-dispatch; [electron/ai/providers/openrouter-provider.cjs:127](<../../../../../../../electron/ai/providers/openrouter-provider.cjs#L127>)
- this.onUsage — external-or-dynamic-dispatch; [electron/ai/providers/openrouter-provider.cjs:131](<../../../../../../../electron/ai/providers/openrouter-provider.cjs#L131>)

**Related tests / acceptance harnesses:**

- [electron/ai/providers/openrouter-provider.test.cjs:156](<../../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L156>) — static-call-site; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:179](<../../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L179>) — static-call-site; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:215](<../../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L215>) — static-call-site; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:229](<../../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L229>) — static-call-site; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:240](<../../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L240>) — static-call-site; coverage not established.
- [electron/ai/front-office-evaluation.test.cjs:240](<../../../../../../../electron/ai/front-office-evaluation.test.cjs#L240>) — file-import-only; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:3](<../../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L3>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:12](<../../../../../../../electron/ai/request-logger.test.cjs#L12>) — file-import-only; coverage not established.

<a id="s-9cbc5a045472ab99"></a>

## pricePerMillion

[electron/ai/providers/openrouter-provider.cjs:138](<../../../../../../../electron/ai/providers/openrouter-provider.cjs#L138>) · FunctionDeclaration · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/providers/openrouter-provider.cjs](<openrouter-provider.cjs.md#s-27de2a92a021400a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: number (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [OpenRouterProvider.listModels.&lt;anonymous@55:7&gt;](<openrouter-provider.cjs.md#s-909f5b1f0d8612d2>) — [electron/ai/providers/openrouter-provider.cjs:108](<../../../../../../../electron/ai/providers/openrouter-provider.cjs#L108>)
- [OpenRouterProvider.listModels.&lt;anonymous@55:7&gt;](<openrouter-provider.cjs.md#s-909f5b1f0d8612d2>) — [electron/ai/providers/openrouter-provider.cjs:109](<../../../../../../../electron/ai/providers/openrouter-provider.cjs#L109>)

Unresolved / external call sites: 3.

- value.trim — external-or-dynamic-dispatch; [electron/ai/providers/openrouter-provider.cjs:139](<../../../../../../../electron/ai/providers/openrouter-provider.cjs#L139>)
- Number — external-or-dynamic-dispatch; [electron/ai/providers/openrouter-provider.cjs:140](<../../../../../../../electron/ai/providers/openrouter-provider.cjs#L140>)
- Number.isFinite — external-or-dynamic-dispatch; [electron/ai/providers/openrouter-provider.cjs:141](<../../../../../../../electron/ai/providers/openrouter-provider.cjs#L141>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-evaluation.test.cjs:240](<../../../../../../../electron/ai/front-office-evaluation.test.cjs#L240>) — file-import-only; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:3](<../../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L3>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:12](<../../../../../../../electron/ai/request-logger.test.cjs#L12>) — file-import-only; coverage not established.
