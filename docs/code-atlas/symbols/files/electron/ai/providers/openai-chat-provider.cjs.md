# electron/ai/providers/openai-chat-provider.cjs: symbols

[Atlas](<../../../../../README.md>) / [Model-provider adapters](<../../../../../modules/providers.md>) / [electron/ai/providers/openai-chat-provider.cjs:1](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/providers/openai-chat-provider.cjs](<openai-chat-provider.cjs.md#s-8e0b543b31749c16>) (Module)
- [modelId](<openai-chat-provider.cjs.md#s-28ce07c819c178b1>) (SchemaBinding)
- [catalog](<openai-chat-provider.cjs.md#s-cc47b68a06ab2c13>) (SchemaBinding)
- [chunkSchema](<openai-chat-provider.cjs.md#s-fcaf3ca4893d5ba4>) (SchemaBinding)
- [invalid](<openai-chat-provider.cjs.md#s-870d8fe0425ad9a5>) (ArrowFunction)
- [normalizeAnswer](<openai-chat-provider.cjs.md#s-7aeb1c1afce2bfb1>) (FunctionDeclaration)
- [remoteError](<openai-chat-provider.cjs.md#s-22f13887fe14c405>) (FunctionDeclaration)
- [OpenAIChatProvider](<openai-chat-provider.cjs.md#s-d599b541d3db84b4>) (ClassDeclaration)
- [OpenAIChatProvider.generationParameters](<openai-chat-provider.cjs.md#s-0737f3bc99dc9a7c>) (MethodDeclaration)
- [OpenAIChatProvider.constructor](<openai-chat-provider.cjs.md#s-22c7dc3a72931ddb>) (Constructor)
- [OpenAIChatProvider.request](<openai-chat-provider.cjs.md#s-b38b5e0af2267c91>) (MethodDeclaration)
- [OpenAIChatProvider.request.expire](<openai-chat-provider.cjs.md#s-d7265c5a09e37f11>) (ArrowFunction)
- [OpenAIChatProvider.request.touch](<openai-chat-provider.cjs.md#s-f076f935db4da67e>) (ArrowFunction)
- [OpenAIChatProvider.request.cancel](<openai-chat-provider.cjs.md#s-2de451be4d81d450>) (ArrowFunction)
- [OpenAIChatProvider.request.&lt;anonymous@195:44&gt;](<openai-chat-provider.cjs.md#s-6bf2027a50b8767d>) (ArrowFunction)
- [OpenAIChatProvider.listModels](<openai-chat-provider.cjs.md#s-bba2d1b7789a1da7>) (MethodDeclaration)
- [OpenAIChatProvider.listModels.&lt;anonymous@202:7&gt;](<openai-chat-provider.cjs.md#s-103125d689dca3a2>) (ArrowFunction)
- [OpenAIChatProvider.listModels.&lt;anonymous@202:7&gt;.&lt;anonymous@218:44&gt;](<openai-chat-provider.cjs.md#s-b8b0bf83e25d69e3>) (ArrowFunction)
- [OpenAIChatProvider.listModels.&lt;anonymous@202:7&gt;.&lt;anonymous@220:15&gt;](<openai-chat-provider.cjs.md#s-3bc36ddffb594435>) (ArrowFunction)
- [OpenAIChatProvider.listModels.&lt;anonymous@202:7&gt;.&lt;anonymous@225:18&gt;](<openai-chat-provider.cjs.md#s-6a7ea54a85ab8edd>) (ArrowFunction)
- [OpenAIChatProvider.getStatus](<openai-chat-provider.cjs.md#s-27eb65d56cdc7527>) (MethodDeclaration)
- [OpenAIChatProvider.prepare](<openai-chat-provider.cjs.md#s-8ef24c44c655b695>) (MethodDeclaration)
- [OpenAIChatProvider.probe](<openai-chat-provider.cjs.md#s-c133d3057fb7c65d>) (MethodDeclaration)
- [OpenAIChatProvider.complete](<openai-chat-provider.cjs.md#s-16c9ee5446ba4e47>) (MethodDeclaration)
- [OpenAIChatProvider.complete.messages](<openai-chat-provider.cjs.md#s-d26d9806f80ba720>) (SchemaBinding)
- [OpenAIChatProvider.complete.&lt;anonymous@344:30&gt;](<openai-chat-provider.cjs.md#s-83251b429a2e849a>) (ArrowFunction)
- [OpenAIChatProvider.complete.&lt;anonymous@387:7&gt;](<openai-chat-provider.cjs.md#s-40f5fd63c8baafdb>) (ArrowFunction)
- [OpenAIChatProvider.complete.&lt;anonymous@387:7&gt;.event](<openai-chat-provider.cjs.md#s-0f9da28207e4c2e2>) (ArrowFunction)
- [OpenAIChatProvider.complete.&lt;anonymous@387:7&gt;.event.&lt;anonymous@466:27&gt;](<openai-chat-provider.cjs.md#s-92427ea3cca7feaa>) (ArrowFunction)
- [OpenAIChatProvider.complete.&lt;anonymous@387:7&gt;.&lt;anonymous@595:39&gt;](<openai-chat-provider.cjs.md#s-2f3c7567f0e78343>) (ArrowFunction)

<a id="s-8e0b543b31749c16"></a>

## electron/ai/providers/openai-chat-provider.cjs

[electron/ai/providers/openai-chat-provider.cjs:1](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L1>) · Module · production · [Model-provider adapters](<../../../../../modules/providers.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- require — module-loader; [electron/ai/providers/openai-chat-provider.cjs:1](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L1>)
- require — module-loader; [electron/ai/providers/openai-chat-provider.cjs:5](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L5>)
- require — module-loader; [electron/ai/providers/openai-chat-provider.cjs:6](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L6>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-28ce07c819c178b1"></a>

## modelId

[electron/ai/providers/openai-chat-provider.cjs:9](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L9>) · SchemaBinding · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/providers/openai-chat-provider.cjs](<openai-chat-provider.cjs.md#s-8e0b543b31749c16>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- z .string() .min(1) .max(200) .regex — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:9](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L9>)
- z .string() .min(1) .max — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:9](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L9>)
- z .string() .min — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:9](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L9>)
- z .string — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:9](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L9>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-cc47b68a06ab2c13"></a>

## catalog

[electron/ai/providers/openai-chat-provider.cjs:14](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L14>) · SchemaBinding · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/providers/openai-chat-provider.cjs](<openai-chat-provider.cjs.md#s-8e0b543b31749c16>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- z.object — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:14](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L14>)
- z.array(z.object({ id: modelId })).max — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:15](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L15>)
- z.array — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:15](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L15>)
- z.object — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:15](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L15>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-fcaf3ca4893d5ba4"></a>

## chunkSchema

[electron/ai/providers/openai-chat-provider.cjs:17](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L17>) · SchemaBinding · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/providers/openai-chat-provider.cjs](<openai-chat-provider.cjs.md#s-8e0b543b31749c16>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 32.

- z.object — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:17](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L17>)
- z.string().max(200).optional — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:18](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L18>)
- z.string().max — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:18](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L18>)
- z.string — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:18](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L18>)
- z .array( z.object({ index: z.number().int().optional(), delta: z.object({ content: z.string().nullable().optional(), reasoning: z.string().nullable().optional(), reasoning_content — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:19](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L19>)
- z .array — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:19](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L19>)
- z.object — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:21](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L21>)
- z.number().int().optional — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:22](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L22>)
- 24 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-870d8fe0425ad9a5"></a>

## invalid

[electron/ai/providers/openai-chat-provider.cjs:40](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L40>) · ArrowFunction · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/providers/openai-chat-provider.cjs](<openai-chat-provider.cjs.md#s-8e0b543b31749c16>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| label | string | compiler-inferred | optional, default present |

Returns: ModelRuntimeError (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/providers/openai-chat-provider.cjs:41](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L41>)

**Called by (statically resolved):**

- [normalizeAnswer](<openai-chat-provider.cjs.md#s-7aeb1c1afce2bfb1>) — [electron/ai/providers/openai-chat-provider.cjs:54](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L54>)
- [OpenAIChatProvider.listModels.&lt;anonymous@202:7&gt;](<openai-chat-provider.cjs.md#s-103125d689dca3a2>) — [electron/ai/providers/openai-chat-provider.cjs:209](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L209>)
- [OpenAIChatProvider.listModels.&lt;anonymous@202:7&gt;](<openai-chat-provider.cjs.md#s-103125d689dca3a2>) — [electron/ai/providers/openai-chat-provider.cjs:233](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L233>)
- [OpenAIChatProvider.complete.&lt;anonymous@387:7&gt;](<openai-chat-provider.cjs.md#s-40f5fd63c8baafdb>) — [electron/ai/providers/openai-chat-provider.cjs:407](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L407>)
- [OpenAIChatProvider.complete.&lt;anonymous@387:7&gt;](<openai-chat-provider.cjs.md#s-40f5fd63c8baafdb>) — [electron/ai/providers/openai-chat-provider.cjs:444](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L444>)
- [OpenAIChatProvider.complete.&lt;anonymous@387:7&gt;.event.&lt;anonymous@466:27&gt;](<openai-chat-provider.cjs.md#s-92427ea3cca7feaa>) — [electron/ai/providers/openai-chat-provider.cjs:470](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L470>)
- [OpenAIChatProvider.complete.&lt;anonymous@387:7&gt;.event](<openai-chat-provider.cjs.md#s-0f9da28207e4c2e2>) — [electron/ai/providers/openai-chat-provider.cjs:482](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L482>)
- [OpenAIChatProvider.complete.&lt;anonymous@387:7&gt;.event](<openai-chat-provider.cjs.md#s-0f9da28207e4c2e2>) — [electron/ai/providers/openai-chat-provider.cjs:485](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L485>)
- [OpenAIChatProvider.complete.&lt;anonymous@387:7&gt;.event](<openai-chat-provider.cjs.md#s-0f9da28207e4c2e2>) — [electron/ai/providers/openai-chat-provider.cjs:495](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L495>)
- [OpenAIChatProvider.complete.&lt;anonymous@387:7&gt;.event](<openai-chat-provider.cjs.md#s-0f9da28207e4c2e2>) — [electron/ai/providers/openai-chat-provider.cjs:503](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L503>)
- [OpenAIChatProvider.complete.&lt;anonymous@387:7&gt;](<openai-chat-provider.cjs.md#s-40f5fd63c8baafdb>) — [electron/ai/providers/openai-chat-provider.cjs:523](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L523>)
- [OpenAIChatProvider.complete.&lt;anonymous@387:7&gt;](<openai-chat-provider.cjs.md#s-40f5fd63c8baafdb>) — [electron/ai/providers/openai-chat-provider.cjs:528](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L528>)
- [OpenAIChatProvider.complete.&lt;anonymous@387:7&gt;](<openai-chat-provider.cjs.md#s-40f5fd63c8baafdb>) — [electron/ai/providers/openai-chat-provider.cjs:535](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L535>)
- [OpenAIChatProvider.complete.&lt;anonymous@387:7&gt;](<openai-chat-provider.cjs.md#s-40f5fd63c8baafdb>) — [electron/ai/providers/openai-chat-provider.cjs:565](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L565>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-7aeb1c1afce2bfb1"></a>

## normalizeAnswer

[electron/ai/providers/openai-chat-provider.cjs:46](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L46>) · FunctionDeclaration · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/providers/openai-chat-provider.cjs](<openai-chat-provider.cjs.md#s-8e0b543b31749c16>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| content | any | compiler-inferred | required |
| label | string | compiler-inferred | optional, default present |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invalid](<openai-chat-provider.cjs.md#s-870d8fe0425ad9a5>) — [electron/ai/providers/openai-chat-provider.cjs:54](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L54>)

**Called by (statically resolved):**

- [OpenAIChatProvider.complete.&lt;anonymous@387:7&gt;](<openai-chat-provider.cjs.md#s-40f5fd63c8baafdb>) — [electron/ai/providers/openai-chat-provider.cjs:410](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L410>)
- [OpenAIChatProvider.complete.&lt;anonymous@387:7&gt;](<openai-chat-provider.cjs.md#s-40f5fd63c8baafdb>) — [electron/ai/providers/openai-chat-provider.cjs:568](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L568>)

Unresolved / external call sites: 9.

- content.trim — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:47](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L47>)
- /^&#96;&#96;&#96;(?:json)?\\s*\\n(&#91;\\s\\S&#93;*?)\\n&#96;&#96;&#96;$/i.exec — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:48](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L48>)
- fenced&#91;1&#93;.trim — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:49](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L49>)
- JSON.parse — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:52](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L52>)
- /^\\{\\s*"answer"\\s*:/.test — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:54](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L54>)
- Array.isArray — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:61](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L61>)
- Object.keys — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:62](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L62>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:65](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L65>)
- 1 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-22f13887fe14c405"></a>

## remoteError

[electron/ai/providers/openai-chat-provider.cjs:68](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L68>) · FunctionDeclaration · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: remoteError ([electron/ai/providers/nvidia-provider.cjs:1](<../../../../../../../electron/ai/providers/nvidia-provider.cjs#L1>)), remoteError ([electron/ai/providers/openai-chat-provider.cjs:1](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L1>)).

Lexical owner: [electron/ai/providers/openai-chat-provider.cjs](<openai-chat-provider.cjs.md#s-8e0b543b31749c16>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| status | any | compiler-inferred | required |
| retryAfter | any | compiler-inferred | required |
| label | string | compiler-inferred | optional, default present |

Returns: ModelRuntimeError (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/providers/openai-chat-provider.cjs:100](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L100>)

**Called by (statically resolved):**

- [OpenAIChatProvider.request](<openai-chat-provider.cjs.md#s-b38b5e0af2267c91>) — [electron/ai/providers/openai-chat-provider.cjs:172](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L172>)
- [OpenAIChatProvider.complete.&lt;anonymous@387:7&gt;.event](<openai-chat-provider.cjs.md#s-0f9da28207e4c2e2>) — [electron/ai/providers/openai-chat-provider.cjs:474](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L474>)

Unresolved / external call sites: 8.

- /^\\d+$/.test — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:96](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L96>)
- Number — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:97](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L97>)
- Math.ceil — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:98](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L98>)
- Date.parse — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:98](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L98>)
- Date.now — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:98](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L98>)
- Number.isFinite — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:102](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L102>)
- Math.max — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:103](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L103>)
- Math.min — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:103](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L103>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d599b541d3db84b4"></a>

## OpenAIChatProvider

[electron/ai/providers/openai-chat-provider.cjs:107](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L107>) · ClassDeclaration · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: OpenAIChatProvider ([electron/ai/providers/openai-chat-provider.cjs:1](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L1>)).

Lexical owner: [electron/ai/providers/openai-chat-provider.cjs](<openai-chat-provider.cjs.md#s-8e0b543b31749c16>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-0737f3bc99dc9a7c"></a>

## OpenAIChatProvider.generationParameters

[electron/ai/providers/openai-chat-provider.cjs:110](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L110>) · MethodDeclaration · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [OpenAIChatProvider](<openai-chat-provider.cjs.md#s-d599b541d3db84b4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| _model | any | compiler-inferred | required |

Returns: {} (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [OpenAIChatProvider.complete](<openai-chat-provider.cjs.md#s-16c9ee5446ba4e47>) — [electron/ai/providers/openai-chat-provider.cjs:366](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L366>)
- [OpenAIChatProvider.complete](<openai-chat-provider.cjs.md#s-16c9ee5446ba4e47>) — [electron/ai/providers/openai-chat-provider.cjs:384](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L384>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-22c7dc3a72931ddb"></a>

## OpenAIChatProvider.constructor

[electron/ai/providers/openai-chat-provider.cjs:114](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L114>) · Constructor · production · [Model-provider adapters](<../../../../../modules/providers.md>)

Configures a trusted adapter origin and backend credential source; optional JSON responses do not change legacy streaming defaults.

Purpose evidence: jsdoc.

Lexical owner: [OpenAIChatProvider](<openai-chat-provider.cjs.md#s-d599b541d3db84b4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { credentials, fetchImpl = fetch } | { credentials: any; fetchImpl?: (url: any, init?: {}) =&gt; any; } | compiler-inferred | required |
| configuration | {} | compiler-inferred | optional, default present |

Returns: OpenAIChatProvider (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [createLLMClient](<../llm-front-office/provider-gateway.cjs.md#s-865c43e6ea2bf755>) — [electron/ai/llm-front-office/provider-gateway.cjs:294](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L294>)
- [gatewayHealth](<../llm-front-office/provider-gateway.cjs.md#s-9b77cb86cb8f8044>) — [electron/ai/llm-front-office/provider-gateway.cjs:409](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L409>)

Unresolved / external call sites: 1.

- BASE.slice — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:125](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L125>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-b38b5e0af2267c91"></a>

## OpenAIChatProvider.request

[electron/ai/providers/openai-chat-provider.cjs:127](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L127>) · MethodDeclaration · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [OpenAIChatProvider](<openai-chat-provider.cjs.md#s-d599b541d3db84b4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| resource | any | compiler-inferred | required |
| init | any | compiler-inferred | required |
| consume | any | compiler-inferred | required |
| { signal, timeoutMs = 15000, absoluteMs = timeoutMs, onDiagnostic } | { timeoutMs?: number; absoluteMs?: any; } | compiler-inferred | optional, default present |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [OpenAIChatProvider.request.touch](<openai-chat-provider.cjs.md#s-f076f935db4da67e>) — [electron/ai/providers/openai-chat-provider.cjs:152](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L152>)
- [OpenAIChatProvider.request.touch](<openai-chat-provider.cjs.md#s-f076f935db4da67e>) — [electron/ai/providers/openai-chat-provider.cjs:158](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L158>)
- [remoteError](<openai-chat-provider.cjs.md#s-22f13887fe14c405>) — [electron/ai/providers/openai-chat-provider.cjs:172](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L172>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/providers/openai-chat-provider.cjs:182](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L182>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/providers/openai-chat-provider.cjs:186](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L186>)

**Called by (statically resolved):**

- [gatewayHealth](<../llm-front-office/provider-gateway.cjs.md#s-9b77cb86cb8f8044>) — [electron/ai/llm-front-office/provider-gateway.cjs:417](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L417>)
- [&lt;anonymous@390:78&gt;](<nvidia-provider.test.cjs.md#s-449787c6a5b4d19a>) — [electron/ai/providers/nvidia-provider.test.cjs:413](<../../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L413>)
- [OpenAIChatProvider.listModels](<openai-chat-provider.cjs.md#s-bba2d1b7789a1da7>) — [electron/ai/providers/openai-chat-provider.cjs:199](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L199>)
- [OpenAIChatProvider.complete](<openai-chat-provider.cjs.md#s-16c9ee5446ba4e47>) — [electron/ai/providers/openai-chat-provider.cjs:374](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L374>)
- [OpenRouterProvider.listModels](<openrouter-provider.cjs.md#s-d967dd193ba2db0e>) — [electron/ai/providers/openrouter-provider.cjs:52](<../../../../../../../electron/ai/providers/openrouter-provider.cjs#L52>)
- [run](<../../../scripts/nvidia-thinking-probe-main.cjs.md#s-ef80f167de71030d>) — [scripts/nvidia-thinking-probe-main.cjs:109](<../../../../../../../scripts/nvidia-thinking-probe-main.cjs#L109>)

Unresolved / external call sites: 20.

- AbortController — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:133](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L133>)
- setTimeout — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:146](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L146>)
- signal?.addEventListener — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:148](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L148>)
- signal?.throwIfAborted — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:151](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L151>)
- onDiagnostic — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:153](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L153>)
- this.credentials.get — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:154](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L154>)
- onDiagnostic — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:155](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L155>)
- controller.signal.throwIfAborted — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:156](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L156>)
- 12 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/providers/nvidia-provider.test.cjs:413](<../../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L413>) — static-call-site; coverage not established.

<a id="s-d7265c5a09e37f11"></a>

## OpenAIChatProvider.request.expire

[electron/ai/providers/openai-chat-provider.cjs:134](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L134>) · ArrowFunction · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [OpenAIChatProvider.request](<openai-chat-provider.cjs.md#s-b38b5e0af2267c91>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/providers/openai-chat-provider.cjs:136](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L136>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- controller.abort — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:135](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L135>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-f076f935db4da67e"></a>

## OpenAIChatProvider.request.touch

[electron/ai/providers/openai-chat-provider.cjs:142](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L142>) · ArrowFunction · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [OpenAIChatProvider.request](<openai-chat-provider.cjs.md#s-b38b5e0af2267c91>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [OpenAIChatProvider.request](<openai-chat-provider.cjs.md#s-b38b5e0af2267c91>) — [electron/ai/providers/openai-chat-provider.cjs:152](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L152>)
- [OpenAIChatProvider.request](<openai-chat-provider.cjs.md#s-b38b5e0af2267c91>) — [electron/ai/providers/openai-chat-provider.cjs:158](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L158>)

Unresolved / external call sites: 2.

- clearTimeout — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:143](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L143>)
- setTimeout — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:144](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L144>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-2de451be4d81d450"></a>

## OpenAIChatProvider.request.cancel

[electron/ai/providers/openai-chat-provider.cjs:147](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L147>) · ArrowFunction · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [OpenAIChatProvider.request](<openai-chat-provider.cjs.md#s-b38b5e0af2267c91>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- controller.abort — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:147](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L147>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-6bf2027a50b8767d"></a>

## OpenAIChatProvider.request.&lt;anonymous@195:44&gt;

[electron/ai/providers/openai-chat-provider.cjs:195](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L195>) · ArrowFunction · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [OpenAIChatProvider.request](<openai-chat-provider.cjs.md#s-b38b5e0af2267c91>).

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

<a id="s-bba2d1b7789a1da7"></a>

## OpenAIChatProvider.listModels

[electron/ai/providers/openai-chat-provider.cjs:198](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L198>) · MethodDeclaration · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [OpenAIChatProvider](<openai-chat-provider.cjs.md#s-d599b541d3db84b4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { signal } | {} | compiler-inferred | optional, default present |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [OpenAIChatProvider.request](<openai-chat-provider.cjs.md#s-b38b5e0af2267c91>) — [electron/ai/providers/openai-chat-provider.cjs:199](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L199>)

**Called by (statically resolved):**

- [&lt;anonymous@255:109&gt;](<nvidia-provider.test.cjs.md#s-1bfa147d56aedc29>) — [electron/ai/providers/nvidia-provider.test.cjs:274](<../../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L274>)
- [OpenAIChatProvider.getStatus](<openai-chat-provider.cjs.md#s-27eb65d56cdc7527>) — [electron/ai/providers/openai-chat-provider.cjs:257](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L257>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/providers/nvidia-provider.test.cjs:274](<../../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L274>) — static-call-site; coverage not established.

<a id="s-103125d689dca3a2"></a>

## OpenAIChatProvider.listModels.&lt;anonymous@202:7&gt;

[electron/ai/providers/openai-chat-provider.cjs:202](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L202>) · ArrowFunction · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [OpenAIChatProvider.listModels](<openai-chat-provider.cjs.md#s-bba2d1b7789a1da7>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| response | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invalid](<openai-chat-provider.cjs.md#s-870d8fe0425ad9a5>) — [electron/ai/providers/openai-chat-provider.cjs:209](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L209>)
- [parse](<../../shared/validation.cjs.md#s-f29367528a73f24d>) — [electron/ai/providers/openai-chat-provider.cjs:213](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L213>)
- [invalid](<openai-chat-provider.cjs.md#s-870d8fe0425ad9a5>) — [electron/ai/providers/openai-chat-provider.cjs:233](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L233>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 8.

- TextDecoder — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:205](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L205>)
- decoder.decode — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:210](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L210>)
- decoder.decode — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:212](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L212>)
- JSON.parse — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:215](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L215>)
- &#91;...new Set(data.data.map((m) =&gt; m.id))&#93; .filter( (id) =&gt; !/embed&#124;rerank&#124;retriev&#124;reward&#124;guard&#124;safety&#124;gliner&#124;riva&#124;transcri&#124;diffusion&#124;flux&#124;synth&#124;ocr&#124;parse&#124;segment&#124;detect&#124;vision&#124;clip&#124; — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:218](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L218>)
- &#91;...new Set(data.data.map((m) =&gt; m.id))&#93; .filter — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:218](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L218>)
- Set — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:218](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L218>)
- data.data.map — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:218](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L218>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-b8b0bf83e25d69e3"></a>

## OpenAIChatProvider.listModels.&lt;anonymous@202:7&gt;.&lt;anonymous@218:44&gt;

[electron/ai/providers/openai-chat-provider.cjs:218](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L218>) · ArrowFunction · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [OpenAIChatProvider.listModels.&lt;anonymous@202:7&gt;](<openai-chat-provider.cjs.md#s-103125d689dca3a2>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| m | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-3bc36ddffb594435"></a>

## OpenAIChatProvider.listModels.&lt;anonymous@202:7&gt;.&lt;anonymous@220:15&gt;

[electron/ai/providers/openai-chat-provider.cjs:220](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L220>) · ArrowFunction · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [OpenAIChatProvider.listModels.&lt;anonymous@202:7&gt;](<openai-chat-provider.cjs.md#s-103125d689dca3a2>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| id | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- /embed&#124;rerank&#124;retriev&#124;reward&#124;guard&#124;safety&#124;gliner&#124;riva&#124;transcri&#124;diffusion&#124;flux&#124;synth&#124;ocr&#124;parse&#124;segment&#124;detect&#124;vision&#124;clip&#124;dino/i.test — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:221](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L221>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-6a7ea54a85ab8edd"></a>

## OpenAIChatProvider.listModels.&lt;anonymous@202:7&gt;.&lt;anonymous@225:18&gt;

[electron/ai/providers/openai-chat-provider.cjs:225](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L225>) · ArrowFunction · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [OpenAIChatProvider.listModels.&lt;anonymous@202:7&gt;](<openai-chat-provider.cjs.md#s-103125d689dca3a2>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| name | any | compiler-inferred | required |

Returns: { name: any; displayName: any; size: number; capabilities: {}; contextLength: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-27eb65d56cdc7527"></a>

## OpenAIChatProvider.getStatus

[electron/ai/providers/openai-chat-provider.cjs:239](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L239>) · MethodDeclaration · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [OpenAIChatProvider](<openai-chat-provider.cjs.md#s-d599b541d3db84b4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [OpenAIChatProvider.listModels](<openai-chat-provider.cjs.md#s-bba2d1b7789a1da7>) — [electron/ai/providers/openai-chat-provider.cjs:257](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L257>)
- [serializeModelError](<../../shared/runtime-errors.cjs.md#s-0a992a8fcd9686e4>) — [electron/ai/providers/openai-chat-provider.cjs:265](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L265>)

**Called by (statically resolved):**

- [&lt;anonymous@255:109&gt;](<nvidia-provider.test.cjs.md#s-1bfa147d56aedc29>) — [electron/ai/providers/nvidia-provider.test.cjs:277](<../../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L277>)
- [&lt;anonymous@255:109&gt;](<nvidia-provider.test.cjs.md#s-1bfa147d56aedc29>) — [electron/ai/providers/nvidia-provider.test.cjs:282](<../../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L282>)
- [&lt;anonymous@85:95&gt;](<openrouter-provider.test.cjs.md#s-6323b0b0b4df80ca>) — [electron/ai/providers/openrouter-provider.test.cjs:124](<../../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L124>)

Unresolved / external call sites: 1.

- this.credentials.status — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:242](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L242>)

**Related tests / acceptance harnesses:**

- [electron/ai/providers/nvidia-provider.test.cjs:277](<../../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L277>) — static-call-site; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:282](<../../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L282>) — static-call-site; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:124](<../../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L124>) — static-call-site; coverage not established.

<a id="s-8ef24c44c655b695"></a>

## OpenAIChatProvider.prepare

[electron/ai/providers/openai-chat-provider.cjs:269](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L269>) · MethodDeclaration · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [OpenAIChatProvider](<openai-chat-provider.cjs.md#s-d599b541d3db84b4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| _model | any | compiler-inferred | required |
| _settings | any | compiler-inferred | required |
| signal | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- signal?.throwIfAborted — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:270](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L270>)
- this.credentials.get — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:271](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L271>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-c133d3057fb7c65d"></a>

## OpenAIChatProvider.probe

[electron/ai/providers/openai-chat-provider.cjs:273](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L273>) · MethodDeclaration · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [OpenAIChatProvider](<openai-chat-provider.cjs.md#s-d599b541d3db84b4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [parse](<../../shared/validation.cjs.md#s-f29367528a73f24d>) — [electron/ai/providers/openai-chat-provider.cjs:274](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L274>)
- [OpenAIChatProvider.complete](<openai-chat-provider.cjs.md#s-16c9ee5446ba4e47>) — [electron/ai/providers/openai-chat-provider.cjs:278](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L278>)
- [validateAnswer](<../inference/response-validation.cjs.md#s-21e2e91befa4c26f>) — [electron/ai/providers/openai-chat-provider.cjs:298](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L298>)
- [serializeModelError](<../../shared/runtime-errors.cjs.md#s-0a992a8fcd9686e4>) — [electron/ai/providers/openai-chat-provider.cjs:312](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L312>)

**Called by (statically resolved):**

- [&lt;anonymous@421:101&gt;](<nvidia-provider.test.cjs.md#s-65188c96317992f8>) — [electron/ai/providers/nvidia-provider.test.cjs:433](<../../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L433>)
- [&lt;anonymous@421:101&gt;](<nvidia-provider.test.cjs.md#s-65188c96317992f8>) — [electron/ai/providers/nvidia-provider.test.cjs:434](<../../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L434>)

Unresolved / external call sites: 9.

- Date.now — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:275](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L275>)
- require — module-loader; [electron/ai/providers/openai-chat-provider.cjs:277](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L277>)
- require — module-loader; [electron/ai/providers/openai-chat-provider.cjs:298](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L298>)
- Date.now — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:305](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L305>)
- new Date().toISOString — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:306](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L306>)
- Date — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:306](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L306>)
- Date.now — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:316](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L316>)
- new Date().toISOString — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:317](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L317>)
- 1 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/providers/nvidia-provider.test.cjs:433](<../../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L433>) — static-call-site; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:434](<../../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L434>) — static-call-site; coverage not established.

<a id="s-16c9ee5446ba4e47"></a>

## OpenAIChatProvider.complete

[electron/ai/providers/openai-chat-provider.cjs:324](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L324>) · MethodDeclaration · production · [Model-provider adapters](<../../../../../modules/providers.md>)

Completes chat or a host-owned structured request, retaining existing streaming, timeout and response normalization behavior.

Purpose evidence: jsdoc.

Lexical owner: [OpenAIChatProvider](<openai-chat-provider.cjs.md#s-d599b541d3db84b4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| request | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [parse](<../../shared/validation.cjs.md#s-f29367528a73f24d>) — [electron/ai/providers/openai-chat-provider.cjs:325](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L325>)
- [parse](<../../shared/validation.cjs.md#s-f29367528a73f24d>) — [electron/ai/providers/openai-chat-provider.cjs:326](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L326>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/providers/openai-chat-provider.cjs:346](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L346>)
- [isEntityProtocolFormat](<../agents/entity-agent-protocol.cjs.md#s-72db01d3c7bc580d>) — [electron/ai/providers/openai-chat-provider.cjs:354](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L354>)
- [OpenAIChatProvider.generationParameters](<openai-chat-provider.cjs.md#s-0737f3bc99dc9a7c>) — [electron/ai/providers/openai-chat-provider.cjs:366](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L366>)
- [OpenAIChatProvider.request](<openai-chat-provider.cjs.md#s-b38b5e0af2267c91>) — [electron/ai/providers/openai-chat-provider.cjs:374](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L374>)
- [OpenAIChatProvider.generationParameters](<openai-chat-provider.cjs.md#s-0737f3bc99dc9a7c>) — [electron/ai/providers/openai-chat-provider.cjs:384](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L384>)

**Called by (statically resolved):**

- [&lt;anonymous@12:90&gt;](<nvidia-provider.test.cjs.md#s-bea0482c481325a5>) — [electron/ai/providers/nvidia-provider.test.cjs:25](<../../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L25>)
- [&lt;anonymous@33:78&gt;](<nvidia-provider.test.cjs.md#s-9781ed750e46b4f4>) — [electron/ai/providers/nvidia-provider.test.cjs:49](<../../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L49>)
- [&lt;anonymous@53:79&gt;](<nvidia-provider.test.cjs.md#s-47435b23b8ee7bf0>) — [electron/ai/providers/nvidia-provider.test.cjs:68](<../../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L68>)
- [&lt;anonymous@77:80&gt;](<nvidia-provider.test.cjs.md#s-2477a68ff0261194>) — [electron/ai/providers/nvidia-provider.test.cjs:83](<../../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L83>)
- [&lt;anonymous@77:80&gt;](<nvidia-provider.test.cjs.md#s-2477a68ff0261194>) — [electron/ai/providers/nvidia-provider.test.cjs:91](<../../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L91>)
- [&lt;anonymous@103:116&gt;](<nvidia-provider.test.cjs.md#s-20c7dfb720a26775>) — [electron/ai/providers/nvidia-provider.test.cjs:128](<../../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L128>)
- [&lt;anonymous@139:107&gt;](<nvidia-provider.test.cjs.md#s-412cbadf5204a0b8>) — [electron/ai/providers/nvidia-provider.test.cjs:154](<../../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L154>)
- [&lt;anonymous@167:91&gt;](<nvidia-provider.test.cjs.md#s-a3f277730f90913f>) — [electron/ai/providers/nvidia-provider.test.cjs:206](<../../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L206>)
- [&lt;anonymous@167:91&gt;](<nvidia-provider.test.cjs.md#s-a3f277730f90913f>) — [electron/ai/providers/nvidia-provider.test.cjs:216](<../../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L216>)
- [&lt;anonymous@284:99&gt;](<nvidia-provider.test.cjs.md#s-9d315814e33a2104>) — [electron/ai/providers/nvidia-provider.test.cjs:313](<../../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L313>)
- [&lt;anonymous@322:54&gt;](<nvidia-provider.test.cjs.md#s-1e08432f3d64b043>) — [electron/ai/providers/nvidia-provider.test.cjs:342](<../../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L342>)
- [&lt;anonymous@351:58&gt;](<nvidia-provider.test.cjs.md#s-33996f619ec6ecf4>) — [electron/ai/providers/nvidia-provider.test.cjs:361](<../../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L361>)
- [&lt;anonymous@368:91&gt;](<nvidia-provider.test.cjs.md#s-4e456a4eafc60f91>) — [electron/ai/providers/nvidia-provider.test.cjs:384](<../../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L384>)
- [&lt;anonymous@440:70&gt;](<nvidia-provider.test.cjs.md#s-9d5e90dcf980b8f2>) — [electron/ai/providers/nvidia-provider.test.cjs:447](<../../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L447>)
- [OpenAIChatProvider.probe](<openai-chat-provider.cjs.md#s-c133d3057fb7c65d>) — [electron/ai/providers/openai-chat-provider.cjs:278](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L278>)
- [OpenRouterProvider.complete](<openrouter-provider.cjs.md#s-2f6fa6d2e99f6834>) — [electron/ai/providers/openrouter-provider.cjs:128](<../../../../../../../electron/ai/providers/openrouter-provider.cjs#L128>)

Unresolved / external call sites: 8.

- performance.now — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:341](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L341>)
- messages.slice(1).some — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:344](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L344>)
- messages.slice — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:344](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L344>)
- Boolean — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:352](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L352>)
- require — module-loader; [electron/ai/providers/openai-chat-provider.cjs:354](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L354>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:361](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L361>)
- request.onDiagnostic — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:363](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L363>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:378](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L378>)

**Related tests / acceptance harnesses:**

- [electron/ai/providers/nvidia-provider.test.cjs:25](<../../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L25>) — static-call-site; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:49](<../../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L49>) — static-call-site; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:68](<../../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L68>) — static-call-site; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:83](<../../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L83>) — static-call-site; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:91](<../../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L91>) — static-call-site; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:128](<../../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L128>) — static-call-site; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:154](<../../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L154>) — static-call-site; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:206](<../../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L206>) — static-call-site; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:216](<../../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L216>) — static-call-site; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:313](<../../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L313>) — static-call-site; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:342](<../../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L342>) — static-call-site; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:361](<../../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L361>) — static-call-site; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:384](<../../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L384>) — static-call-site; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:447](<../../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L447>) — static-call-site; coverage not established.

<a id="s-d26d9806f80ba720"></a>

## OpenAIChatProvider.complete.messages

[electron/ai/providers/openai-chat-provider.cjs:327](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L327>) · SchemaBinding · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [OpenAIChatProvider.complete](<openai-chat-provider.cjs.md#s-16c9ee5446ba4e47>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

- [parse](<../../shared/validation.cjs.md#s-f29367528a73f24d>) — [electron/ai/providers/openai-chat-provider.cjs:327](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L327>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 9.

- z .array( z .object({ role: z.enum(&#91;"system", "user", "assistant"&#93;), content: z.string().min(1).max(500000), }) .strict(), ) .min(2) .max — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:328](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L328>)
- z .array( z .object({ role: z.enum(&#91;"system", "user", "assistant"&#93;), content: z.string().min(1).max(500000), }) .strict(), ) .min — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:328](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L328>)
- z .array — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:328](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L328>)
- z .object({ role: z.enum(&#91;"system", "user", "assistant"&#93;), content: z.string().min(1).max(500000), }) .strict — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:330](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L330>)
- z .object — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:330](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L330>)
- z.enum — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:332](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L332>)
- z.string().min(1).max — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:333](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L333>)
- z.string().min — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:333](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L333>)
- 1 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-83251b429a2e849a"></a>

## OpenAIChatProvider.complete.&lt;anonymous@344:30&gt;

[electron/ai/providers/openai-chat-provider.cjs:344](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L344>) · ArrowFunction · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [OpenAIChatProvider.complete](<openai-chat-provider.cjs.md#s-16c9ee5446ba4e47>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| message | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-40f5fd63c8baafdb"></a>

## OpenAIChatProvider.complete.&lt;anonymous@387:7&gt;

[electron/ai/providers/openai-chat-provider.cjs:387](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L387>) · ArrowFunction · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [OpenAIChatProvider.complete](<openai-chat-provider.cjs.md#s-16c9ee5446ba4e47>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| response | any | compiler-inferred | required |
| touch | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/providers/openai-chat-provider.cjs:393](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L393>)
- [readRemoteJson](<remote-json.cjs.md#s-ce48dfba0aa4322a>) — [electron/ai/providers/openai-chat-provider.cjs:398](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L398>)
- [invalid](<openai-chat-provider.cjs.md#s-870d8fe0425ad9a5>) — [electron/ai/providers/openai-chat-provider.cjs:407](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L407>)
- [normalizeAnswer](<openai-chat-provider.cjs.md#s-7aeb1c1afce2bfb1>) — [electron/ai/providers/openai-chat-provider.cjs:410](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L410>)
- [invalid](<openai-chat-provider.cjs.md#s-870d8fe0425ad9a5>) — [electron/ai/providers/openai-chat-provider.cjs:444](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L444>)
- [invalid](<openai-chat-provider.cjs.md#s-870d8fe0425ad9a5>) — [electron/ai/providers/openai-chat-provider.cjs:523](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L523>)
- [invalid](<openai-chat-provider.cjs.md#s-870d8fe0425ad9a5>) — [electron/ai/providers/openai-chat-provider.cjs:528](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L528>)
- [invalid](<openai-chat-provider.cjs.md#s-870d8fe0425ad9a5>) — [electron/ai/providers/openai-chat-provider.cjs:535](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L535>)
- [OpenAIChatProvider.complete.&lt;anonymous@387:7&gt;.event](<openai-chat-provider.cjs.md#s-0f9da28207e4c2e2>) — [electron/ai/providers/openai-chat-provider.cjs:541](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L541>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/providers/openai-chat-provider.cjs:554](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L554>)
- [invalid](<openai-chat-provider.cjs.md#s-870d8fe0425ad9a5>) — [electron/ai/providers/openai-chat-provider.cjs:565](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L565>)
- [normalizeAnswer](<openai-chat-provider.cjs.md#s-7aeb1c1afce2bfb1>) — [electron/ai/providers/openai-chat-provider.cjs:568](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L568>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 47.

- response.headers.get("content-type")?.includes — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:390](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L390>)
- response.headers.get — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:390](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L390>)
- require — module-loader; [electron/ai/providers/openai-chat-provider.cjs:398](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L398>)
- content.trim — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:404](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L404>)
- /&lt;\\/?think(?:ing)?&gt;/i.test — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:405](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L405>)
- content.trim — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:409](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L409>)
- request.onGenerationStarted — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:411](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L411>)
- request.onContent — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:412](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L412>)
- 39 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-0f9da28207e4c2e2"></a>

## OpenAIChatProvider.complete.&lt;anonymous@387:7&gt;.event

[electron/ai/providers/openai-chat-provider.cjs:457](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L457>) · ArrowFunction · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [OpenAIChatProvider.complete.&lt;anonymous@387:7&gt;](<openai-chat-provider.cjs.md#s-40f5fd63c8baafdb>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [OpenAIChatProvider.complete.&lt;anonymous@387:7&gt;.event.&lt;anonymous@466:27&gt;](<openai-chat-provider.cjs.md#s-92427ea3cca7feaa>) — [electron/ai/providers/openai-chat-provider.cjs:466](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L466>)
- [remoteError](<openai-chat-provider.cjs.md#s-22f13887fe14c405>) — [electron/ai/providers/openai-chat-provider.cjs:474](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L474>)
- [parse](<../../shared/validation.cjs.md#s-f29367528a73f24d>) — [electron/ai/providers/openai-chat-provider.cjs:480](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L480>)
- [invalid](<openai-chat-provider.cjs.md#s-870d8fe0425ad9a5>) — [electron/ai/providers/openai-chat-provider.cjs:482](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L482>)
- [invalid](<openai-chat-provider.cjs.md#s-870d8fe0425ad9a5>) — [electron/ai/providers/openai-chat-provider.cjs:485](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L485>)
- [invalid](<openai-chat-provider.cjs.md#s-870d8fe0425ad9a5>) — [electron/ai/providers/openai-chat-provider.cjs:495](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L495>)
- [invalid](<openai-chat-provider.cjs.md#s-870d8fe0425ad9a5>) — [electron/ai/providers/openai-chat-provider.cjs:503](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L503>)

**Called by (statically resolved):**

- [OpenAIChatProvider.complete.&lt;anonymous@387:7&gt;](<openai-chat-provider.cjs.md#s-40f5fd63c8baafdb>) — [electron/ai/providers/openai-chat-provider.cjs:541](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L541>)

Unresolved / external call sites: 12.

- data.join — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:459](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L459>)
- Number — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:475](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L475>)
- request.onDiagnostic — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:490](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L490>)
- request.onDiagnostic — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:497](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L497>)
- request.onGenerationStarted — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:500](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L500>)
- /&lt;\\/?think(?:ing)?&gt;/i.test — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:503](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L503>)
- Math.round — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:504](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L504>)
- performance.now — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:504](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L504>)
- 4 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-92427ea3cca7feaa"></a>

## OpenAIChatProvider.complete.&lt;anonymous@387:7&gt;.event.&lt;anonymous@466:27&gt;

[electron/ai/providers/openai-chat-provider.cjs:466](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L466>) · ArrowFunction · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [OpenAIChatProvider.complete.&lt;anonymous@387:7&gt;.event](<openai-chat-provider.cjs.md#s-0f9da28207e4c2e2>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invalid](<openai-chat-provider.cjs.md#s-870d8fe0425ad9a5>) — [electron/ai/providers/openai-chat-provider.cjs:470](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L470>)

**Called by (statically resolved):**

- [OpenAIChatProvider.complete.&lt;anonymous@387:7&gt;.event](<openai-chat-provider.cjs.md#s-0f9da28207e4c2e2>) — [electron/ai/providers/openai-chat-provider.cjs:466](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L466>)

Unresolved / external call sites: 1.

- JSON.parse — external-or-dynamic-dispatch; [electron/ai/providers/openai-chat-provider.cjs:468](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L468>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-2f3c7567f0e78343"></a>

## OpenAIChatProvider.complete.&lt;anonymous@387:7&gt;.&lt;anonymous@595:39&gt;

[electron/ai/providers/openai-chat-provider.cjs:595](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L595>) · ArrowFunction · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [OpenAIChatProvider.complete.&lt;anonymous@387:7&gt;](<openai-chat-provider.cjs.md#s-40f5fd63c8baafdb>).

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
