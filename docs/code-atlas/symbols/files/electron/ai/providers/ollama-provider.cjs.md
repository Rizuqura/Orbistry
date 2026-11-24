# electron/ai/providers/ollama-provider.cjs: symbols

[Atlas](<../../../../../README.md>) / [Model-provider adapters](<../../../../../modules/providers.md>) / [electron/ai/providers/ollama-provider.cjs:1](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/providers/ollama-provider.cjs](<ollama-provider.cjs.md#s-32125396bcaa5723>) (Module)
- [DEFAULT_BASE_URL](<ollama-provider.cjs.md#s-1853813a146b8061>) (VariableDeclaration)
- [validateBaseUrl](<ollama-provider.cjs.md#s-af4d66863dbb4100>) (FunctionDeclaration)
- [validateModelName](<ollama-provider.cjs.md#s-d2cc9bcb6089f4a8>) (FunctionDeclaration)
- [validateMessages](<ollama-provider.cjs.md#s-b148d9c7944f8e8d>) (FunctionDeclaration)
- [validateMessages.&lt;anonymous@60:20&gt;](<ollama-provider.cjs.md#s-5fcc9d3f9c6197fc>) (ArrowFunction)
- [normalizeModel](<ollama-provider.cjs.md#s-dcac639ef242dd4e>) (FunctionDeclaration)
- [normalizeModel.&lt;anonymous@114:35&gt;](<ollama-provider.cjs.md#s-a935bba229f16e82>) (ArrowFunction)
- [OllamaProvider](<ollama-provider.cjs.md#s-ad4b74bd23abdb55>) (ClassDeclaration)
- [OllamaProvider.constructor](<ollama-provider.cjs.md#s-6a0c68a6d6f2569c>) (Constructor)
- [OllamaProvider.request](<ollama-provider.cjs.md#s-35307b242f4f5560>) (MethodDeclaration)
- [OllamaProvider.request.cancelRequest](<ollama-provider.cjs.md#s-e7e9a5e9293c1883>) (ArrowFunction)
- [OllamaProvider.request.&lt;anonymous@146:32&gt;](<ollama-provider.cjs.md#s-749ce303bf5af650>) (ArrowFunction)
- [OllamaProvider.pull](<ollama-provider.cjs.md#s-d315fd448180e3e9>) (MethodDeclaration)
- [OllamaProvider.pull.cancel](<ollama-provider.cjs.md#s-c7d81d09376a19b8>) (ArrowFunction)
- [OllamaProvider.pull.touch](<ollama-provider.cjs.md#s-fba9b115e19204a8>) (ArrowFunction)
- [OllamaProvider.pull.consume](<ollama-provider.cjs.md#s-d95da20b70cb2b06>) (ArrowFunction)
- [OllamaProvider.pull.&lt;anonymous@296:36&gt;](<ollama-provider.cjs.md#s-af04b9b90ddd590f>) (ArrowFunction)
- [OllamaProvider.listModels](<ollama-provider.cjs.md#s-6b77d21ad8966514>) (MethodDeclaration)
- [OllamaProvider.listModels.&lt;anonymous@310:13&gt;](<ollama-provider.cjs.md#s-dfae924c6ea8c2cf>) (ArrowFunction)
- [OllamaProvider.describeModel](<ollama-provider.cjs.md#s-63b05762c5a37897>) (MethodDeclaration)
- [OllamaProvider.describeModel.&lt;anonymous@319:70&gt;](<ollama-provider.cjs.md#s-f64f9f47b61b0b40>) (ArrowFunction)
- [OllamaProvider.prepare](<ollama-provider.cjs.md#s-091d0b8dfca6f9c9>) (MethodDeclaration)
- [OllamaProvider.streamChat](<ollama-provider.cjs.md#s-be4271d68f86c17b>) (MethodDeclaration)
- [OllamaProvider.streamChat.cancel](<ollama-provider.cjs.md#s-12ad35b7a529135c>) (ArrowFunction)
- [OllamaProvider.streamChat.arm](<ollama-provider.cjs.md#s-b931631bd07e7f66>) (ArrowFunction)
- [OllamaProvider.streamChat.arm.&lt;anonymous@360:26&gt;](<ollama-provider.cjs.md#s-492e9f1c41b158da>) (ArrowFunction)
- [OllamaProvider.streamChat.activity](<ollama-provider.cjs.md#s-5a5e07ff3346c267>) (ArrowFunction)
- [OllamaProvider.streamChat.&lt;anonymous@391:50&gt;](<ollama-provider.cjs.md#s-fd2c2c4d8497fd54>) (ArrowFunction)
- [OllamaProvider.streamChat.&lt;anonymous@400:11&gt;](<ollama-provider.cjs.md#s-7df13bf5eb5beb6b>) (ArrowFunction)
- [OllamaProvider.getStatus](<ollama-provider.cjs.md#s-5123d5c867ad7ef2>) (MethodDeclaration)
- [OllamaProvider.complete](<ollama-provider.cjs.md#s-6d56407bfa5196b0>) (MethodDeclaration)
- [OllamaProvider.testModel](<ollama-provider.cjs.md#s-760f27b8110fd5f4>) (MethodDeclaration)
- [OllamaProvider.testModel.&lt;anonymous@596:22&gt;](<ollama-provider.cjs.md#s-182a8b15d16bde21>) (ArrowFunction)

<a id="s-32125396bcaa5723"></a>

## electron/ai/providers/ollama-provider.cjs

[electron/ai/providers/ollama-provider.cjs:1](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L1>) · Module · production · [Model-provider adapters](<../../../../../modules/providers.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- require — module-loader; [electron/ai/providers/ollama-provider.cjs:1](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L1>)
- require — module-loader; [electron/ai/providers/ollama-provider.cjs:2](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L2>)
- require — module-loader; [electron/ai/providers/ollama-provider.cjs:3](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L3>)
- Set — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:6](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L6>)

**Related tests / acceptance harnesses:**

- [electron/ai/model-pull.test.cjs:4](<../../../../../../../electron/ai/model-pull.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-provider.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-stream.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:14](<../../../../../../../electron/ai/request-logger.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:11](<../../../../../../../scripts/chat-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/dataset-live-acceptance.cjs:11](<../../../../../../../scripts/dataset-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/statistics-live-acceptance.cjs:10](<../../../../../../../scripts/statistics-live-acceptance.cjs#L10>) — file-import-only; coverage not established.

<a id="s-1853813a146b8061"></a>

## DEFAULT_BASE_URL

[electron/ai/providers/ollama-provider.cjs:5](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L5>) · VariableDeclaration · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: DEFAULT_BASE_URL ([electron/ai/providers/ollama-provider.cjs:1](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L1>)).

Lexical owner: [electron/ai/providers/ollama-provider.cjs](<ollama-provider.cjs.md#s-32125396bcaa5723>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/model-pull.test.cjs:4](<../../../../../../../electron/ai/model-pull.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-provider.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-stream.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:14](<../../../../../../../electron/ai/request-logger.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:11](<../../../../../../../scripts/chat-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/dataset-live-acceptance.cjs:11](<../../../../../../../scripts/dataset-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/statistics-live-acceptance.cjs:10](<../../../../../../../scripts/statistics-live-acceptance.cjs#L10>) — file-import-only; coverage not established.

<a id="s-af4d66863dbb4100"></a>

## validateBaseUrl

[electron/ai/providers/ollama-provider.cjs:8](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L8>) · FunctionDeclaration · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: validateBaseUrl ([electron/ai/providers/ollama-provider.cjs:1](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L1>)).

Lexical owner: [electron/ai/providers/ollama-provider.cjs](<ollama-provider.cjs.md#s-32125396bcaa5723>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| rawUrl | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/providers/ollama-provider.cjs:13](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L13>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/providers/ollama-provider.cjs:27](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L27>)

**Called by (statically resolved):**

- [OllamaProvider.constructor](<ollama-provider.cjs.md#s-6a0c68a6d6f2569c>) — [electron/ai/providers/ollama-provider.cjs:121](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L121>)
- [&lt;anonymous@22:75&gt;](<ollama-provider.test.cjs.md#s-a7317e076923432f>) — [electron/ai/providers/ollama-provider.test.cjs:24](<../../../../../../../electron/ai/providers/ollama-provider.test.cjs#L24>)
- [&lt;anonymous@22:75&gt;.&lt;anonymous@28:5&gt;](<ollama-provider.test.cjs.md#s-bbb6759d05b5a83d>) — [electron/ai/providers/ollama-provider.test.cjs:28](<../../../../../../../electron/ai/providers/ollama-provider.test.cjs#L28>)
- [&lt;anonymous@22:75&gt;.&lt;anonymous@32:5&gt;](<ollama-provider.test.cjs.md#s-93e1bb197abd3bfa>) — [electron/ai/providers/ollama-provider.test.cjs:32](<../../../../../../../electron/ai/providers/ollama-provider.test.cjs#L32>)
- [&lt;anonymous@22:75&gt;.&lt;anonymous@36:5&gt;](<ollama-provider.test.cjs.md#s-b8e28d7a4f45d179>) — [electron/ai/providers/ollama-provider.test.cjs:36](<../../../../../../../electron/ai/providers/ollama-provider.test.cjs#L36>)

Unresolved / external call sites: 2.

- URL — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:11](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L11>)
- LOCAL_HOSTS.has — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:21](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L21>)

**Related tests / acceptance harnesses:**

- [electron/ai/providers/ollama-provider.test.cjs:24](<../../../../../../../electron/ai/providers/ollama-provider.test.cjs#L24>) — static-call-site; coverage not established.
- [electron/ai/providers/ollama-provider.test.cjs:28](<../../../../../../../electron/ai/providers/ollama-provider.test.cjs#L28>) — static-call-site; coverage not established.
- [electron/ai/providers/ollama-provider.test.cjs:32](<../../../../../../../electron/ai/providers/ollama-provider.test.cjs#L32>) — static-call-site; coverage not established.
- [electron/ai/providers/ollama-provider.test.cjs:36](<../../../../../../../electron/ai/providers/ollama-provider.test.cjs#L36>) — static-call-site; coverage not established.
- [electron/ai/model-pull.test.cjs:4](<../../../../../../../electron/ai/model-pull.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-provider.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-stream.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:14](<../../../../../../../electron/ai/request-logger.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:11](<../../../../../../../scripts/chat-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/dataset-live-acceptance.cjs:11](<../../../../../../../scripts/dataset-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/statistics-live-acceptance.cjs:10](<../../../../../../../scripts/statistics-live-acceptance.cjs#L10>) — file-import-only; coverage not established.

<a id="s-d2cc9bcb6089f4a8"></a>

## validateModelName

[electron/ai/providers/ollama-provider.cjs:36](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L36>) · FunctionDeclaration · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/providers/ollama-provider.cjs](<ollama-provider.cjs.md#s-32125396bcaa5723>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/providers/ollama-provider.cjs:43](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L43>)

**Called by (statically resolved):**

- [OllamaProvider.pull](<ollama-provider.cjs.md#s-d315fd448180e3e9>) — [electron/ai/providers/ollama-provider.cjs:243](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L243>)
- [OllamaProvider.describeModel](<ollama-provider.cjs.md#s-63b05762c5a37897>) — [electron/ai/providers/ollama-provider.cjs:317](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L317>)
- [OllamaProvider.complete](<ollama-provider.cjs.md#s-6d56407bfa5196b0>) — [electron/ai/providers/ollama-provider.cjs:483](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L483>)
- [OllamaProvider.testModel](<ollama-provider.cjs.md#s-760f27b8110fd5f4>) — [electron/ai/providers/ollama-provider.cjs:594](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L594>)

Unresolved / external call sites: 3.

- value.trim — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:39](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L39>)
- /&#91;\\u0000-\\u001f\\u007f&#93;/u.test — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:41](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L41>)
- value.trim — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:49](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L49>)

**Related tests / acceptance harnesses:**

- [electron/ai/model-pull.test.cjs:4](<../../../../../../../electron/ai/model-pull.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-provider.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-stream.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:14](<../../../../../../../electron/ai/request-logger.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:11](<../../../../../../../scripts/chat-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/dataset-live-acceptance.cjs:11](<../../../../../../../scripts/dataset-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/statistics-live-acceptance.cjs:10](<../../../../../../../scripts/statistics-live-acceptance.cjs#L10>) — file-import-only; coverage not established.

<a id="s-b148d9c7944f8e8d"></a>

## validateMessages

[electron/ai/providers/ollama-provider.cjs:52](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L52>) · FunctionDeclaration · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/providers/ollama-provider.cjs](<ollama-provider.cjs.md#s-32125396bcaa5723>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/providers/ollama-provider.cjs:54](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L54>)

**Called by (statically resolved):**

- [OllamaProvider.complete](<ollama-provider.cjs.md#s-6d56407bfa5196b0>) — [electron/ai/providers/ollama-provider.cjs:484](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L484>)

Unresolved / external call sites: 2.

- Array.isArray — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:53](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L53>)
- value.map — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:60](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L60>)

**Related tests / acceptance harnesses:**

- [electron/ai/model-pull.test.cjs:4](<../../../../../../../electron/ai/model-pull.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-provider.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-stream.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:14](<../../../../../../../electron/ai/request-logger.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:11](<../../../../../../../scripts/chat-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/dataset-live-acceptance.cjs:11](<../../../../../../../scripts/dataset-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/statistics-live-acceptance.cjs:10](<../../../../../../../scripts/statistics-live-acceptance.cjs#L10>) — file-import-only; coverage not established.

<a id="s-5fcc9d3f9c6197fc"></a>

## validateMessages.&lt;anonymous@60:20&gt;

[electron/ai/providers/ollama-provider.cjs:60](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L60>) · ArrowFunction · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [validateMessages](<ollama-provider.cjs.md#s-b148d9c7944f8e8d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| message | any | compiler-inferred | required |
| index | any | compiler-inferred | required |

Returns: { role: any; content: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/providers/ollama-provider.cjs:70](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L70>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- Array.isArray — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:64](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L64>)
- &#91;"system", "user", "assistant"&#93;.includes — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:65](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L65>)

**Related tests / acceptance harnesses:**

- [electron/ai/model-pull.test.cjs:4](<../../../../../../../electron/ai/model-pull.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-provider.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-stream.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:14](<../../../../../../../electron/ai/request-logger.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:11](<../../../../../../../scripts/chat-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/dataset-live-acceptance.cjs:11](<../../../../../../../scripts/dataset-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/statistics-live-acceptance.cjs:10](<../../../../../../../scripts/statistics-live-acceptance.cjs#L10>) — file-import-only; coverage not established.

<a id="s-dcac639ef242dd4e"></a>

## normalizeModel

[electron/ai/providers/ollama-provider.cjs:80](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L80>) · FunctionDeclaration · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/providers/ollama-provider.cjs](<ollama-provider.cjs.md#s-32125396bcaa5723>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: { name: any; model: any; size: any; digest: any; modifiedAt: any; family: any; parameterSize: any; quantization: any; contextLength: any; capabilities: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/providers/ollama-provider.cjs:87](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L87>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- Array.isArray — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:113](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L113>)
- value.capabilities.filter — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:114](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L114>)

**Related tests / acceptance harnesses:**

- [electron/ai/model-pull.test.cjs:4](<../../../../../../../electron/ai/model-pull.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-provider.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-stream.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:14](<../../../../../../../electron/ai/request-logger.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:11](<../../../../../../../scripts/chat-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/dataset-live-acceptance.cjs:11](<../../../../../../../scripts/dataset-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/statistics-live-acceptance.cjs:10](<../../../../../../../scripts/statistics-live-acceptance.cjs#L10>) — file-import-only; coverage not established.

<a id="s-a935bba229f16e82"></a>

## normalizeModel.&lt;anonymous@114:35&gt;

[electron/ai/providers/ollama-provider.cjs:114](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L114>) · ArrowFunction · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [normalizeModel](<ollama-provider.cjs.md#s-dcac639ef242dd4e>).

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

- [electron/ai/model-pull.test.cjs:4](<../../../../../../../electron/ai/model-pull.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-provider.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-stream.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:14](<../../../../../../../electron/ai/request-logger.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:11](<../../../../../../../scripts/chat-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/dataset-live-acceptance.cjs:11](<../../../../../../../scripts/dataset-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/statistics-live-acceptance.cjs:10](<../../../../../../../scripts/statistics-live-acceptance.cjs#L10>) — file-import-only; coverage not established.

<a id="s-ad4b74bd23abdb55"></a>

## OllamaProvider

[electron/ai/providers/ollama-provider.cjs:119](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L119>) · ClassDeclaration · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: OllamaProvider ([electron/ai/providers/ollama-provider.cjs:1](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L1>)).

Lexical owner: [electron/ai/providers/ollama-provider.cjs](<ollama-provider.cjs.md#s-32125396bcaa5723>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/model-pull.test.cjs:4](<../../../../../../../electron/ai/model-pull.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-provider.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-stream.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:14](<../../../../../../../electron/ai/request-logger.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:11](<../../../../../../../scripts/chat-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/dataset-live-acceptance.cjs:11](<../../../../../../../scripts/dataset-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/statistics-live-acceptance.cjs:10](<../../../../../../../scripts/statistics-live-acceptance.cjs#L10>) — file-import-only; coverage not established.

<a id="s-6a0c68a6d6f2569c"></a>

## OllamaProvider.constructor

[electron/ai/providers/ollama-provider.cjs:120](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L120>) · Constructor · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [OllamaProvider](<ollama-provider.cjs.md#s-ad4b74bd23abdb55>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| options | {} | compiler-inferred | optional, default present |

Returns: OllamaProvider (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [validateBaseUrl](<ollama-provider.cjs.md#s-af4d66863dbb4100>) — [electron/ai/providers/ollama-provider.cjs:121](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L121>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/providers/ollama-provider.cjs:131](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L131>)

**Called by (statically resolved):**

- [&lt;anonymous@75:80&gt;](<../model-pull.test.cjs.md#s-da2a19f07ae66314>) — [electron/ai/model-pull.test.cjs:78](<../../../../../../../electron/ai/model-pull.test.cjs#L78>)
- [&lt;anonymous@41:73&gt;.&lt;anonymous@64:5&gt;](<ollama-provider.test.cjs.md#s-181ec9dde460c0e7>) — [electron/ai/providers/ollama-provider.test.cjs:65](<../../../../../../../electron/ai/providers/ollama-provider.test.cjs#L65>)
- [&lt;anonymous@84:88&gt;.&lt;anonymous@111:5&gt;](<ollama-provider.test.cjs.md#s-85e36a1171987467>) — [electron/ai/providers/ollama-provider.test.cjs:112](<../../../../../../../electron/ai/providers/ollama-provider.test.cjs#L112>)
- [&lt;anonymous@130:77&gt;.&lt;anonymous@137:5&gt;](<ollama-provider.test.cjs.md#s-fd6d2a9fa24fa061>) — [electron/ai/providers/ollama-provider.test.cjs:138](<../../../../../../../electron/ai/providers/ollama-provider.test.cjs#L138>)
- [&lt;anonymous@148:88&gt;](<ollama-provider.test.cjs.md#s-61e3c8283b3975f1>) — [electron/ai/providers/ollama-provider.test.cjs:149](<../../../../../../../electron/ai/providers/ollama-provider.test.cjs#L149>)
- [&lt;anonymous@158:82&gt;](<ollama-provider.test.cjs.md#s-0195a75ba186e71f>) — [electron/ai/providers/ollama-provider.test.cjs:159](<../../../../../../../electron/ai/providers/ollama-provider.test.cjs#L159>)
- [&lt;anonymous@180:78&gt;](<ollama-provider.test.cjs.md#s-8f811781b24e12be>) — [electron/ai/providers/ollama-provider.test.cjs:181](<../../../../../../../electron/ai/providers/ollama-provider.test.cjs#L181>)
- [&lt;anonymous@63:65&gt;](<ollama-stream.test.cjs.md#s-238a348d3550bdae>) — [electron/ai/providers/ollama-stream.test.cjs:64](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L64>)
- [&lt;anonymous@91:86&gt;](<ollama-stream.test.cjs.md#s-99ba445846784f82>) — [electron/ai/providers/ollama-stream.test.cjs:94](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L94>)
- [&lt;anonymous@148:85&gt;](<ollama-stream.test.cjs.md#s-6d7d394d46bb1182>) — [electron/ai/providers/ollama-stream.test.cjs:149](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L149>)
- [&lt;anonymous@182:64&gt;](<ollama-stream.test.cjs.md#s-715bc11bbd50ccb7>) — [electron/ai/providers/ollama-stream.test.cjs:185](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L185>)
- [&lt;anonymous@240:74&gt;](<ollama-stream.test.cjs.md#s-ebb254f3bb772dfb>) — [electron/ai/providers/ollama-stream.test.cjs:241](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L241>)
- [&lt;anonymous@154:111&gt;](<../request-logger.test.cjs.md#s-af56a97d64a0db63>) — [electron/ai/request-logger.test.cjs:217](<../../../../../../../electron/ai/request-logger.test.cjs#L217>)
- [main](<../../../scripts/chat-live-acceptance.cjs.md#s-37e0176fb42530c3>) — [scripts/chat-live-acceptance.cjs:48](<../../../../../../../scripts/chat-live-acceptance.cjs#L48>)
- [main](<../../../scripts/dataset-live-acceptance.cjs.md#s-926d3fce0595b737>) — [scripts/dataset-live-acceptance.cjs:17](<../../../../../../../scripts/dataset-live-acceptance.cjs#L17>)
- [main](<../../../scripts/engine-chat-live.cjs.md#s-d9d25d752f6311a1>) — [scripts/engine-chat-live.cjs:30](<../../../../../../../scripts/engine-chat-live.cjs#L30>)
- [main](<../../../scripts/m72-live-proof.cjs.md#s-1bf125f268bf686d>) — [scripts/m72-live-proof.cjs:34](<../../../../../../../scripts/m72-live-proof.cjs#L34>)
- [&lt;anonymous@14:2&gt;](<../../../scripts/statistics-live-acceptance.cjs.md#s-771764a0f9e6c967>) — [scripts/statistics-live-acceptance.cjs:17](<../../../../../../../scripts/statistics-live-acceptance.cjs#L17>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/model-pull.test.cjs:78](<../../../../../../../electron/ai/model-pull.test.cjs#L78>) — static-call-site; coverage not established.
- [electron/ai/providers/ollama-provider.test.cjs:65](<../../../../../../../electron/ai/providers/ollama-provider.test.cjs#L65>) — static-call-site; coverage not established.
- [electron/ai/providers/ollama-provider.test.cjs:112](<../../../../../../../electron/ai/providers/ollama-provider.test.cjs#L112>) — static-call-site; coverage not established.
- [electron/ai/providers/ollama-provider.test.cjs:138](<../../../../../../../electron/ai/providers/ollama-provider.test.cjs#L138>) — static-call-site; coverage not established.
- [electron/ai/providers/ollama-provider.test.cjs:149](<../../../../../../../electron/ai/providers/ollama-provider.test.cjs#L149>) — static-call-site; coverage not established.
- [electron/ai/providers/ollama-provider.test.cjs:159](<../../../../../../../electron/ai/providers/ollama-provider.test.cjs#L159>) — static-call-site; coverage not established.
- [electron/ai/providers/ollama-provider.test.cjs:181](<../../../../../../../electron/ai/providers/ollama-provider.test.cjs#L181>) — static-call-site; coverage not established.
- [electron/ai/providers/ollama-stream.test.cjs:64](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L64>) — static-call-site; coverage not established.
- [electron/ai/providers/ollama-stream.test.cjs:94](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L94>) — static-call-site; coverage not established.
- [electron/ai/providers/ollama-stream.test.cjs:149](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L149>) — static-call-site; coverage not established.
- [electron/ai/providers/ollama-stream.test.cjs:185](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L185>) — static-call-site; coverage not established.
- [electron/ai/providers/ollama-stream.test.cjs:241](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L241>) — static-call-site; coverage not established.
- [electron/ai/request-logger.test.cjs:217](<../../../../../../../electron/ai/request-logger.test.cjs#L217>) — static-call-site; coverage not established.
- [scripts/chat-live-acceptance.cjs:48](<../../../../../../../scripts/chat-live-acceptance.cjs#L48>) — static-call-site; coverage not established.
- [scripts/dataset-live-acceptance.cjs:17](<../../../../../../../scripts/dataset-live-acceptance.cjs#L17>) — static-call-site; coverage not established.
- [scripts/statistics-live-acceptance.cjs:17](<../../../../../../../scripts/statistics-live-acceptance.cjs#L17>) — static-call-site; coverage not established.
- [electron/ai/model-pull.test.cjs:4](<../../../../../../../electron/ai/model-pull.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-provider.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-stream.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:14](<../../../../../../../electron/ai/request-logger.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:11](<../../../../../../../scripts/chat-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/dataset-live-acceptance.cjs:11](<../../../../../../../scripts/dataset-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/statistics-live-acceptance.cjs:10](<../../../../../../../scripts/statistics-live-acceptance.cjs#L10>) — file-import-only; coverage not established.

<a id="s-35307b242f4f5560"></a>

## OllamaProvider.request

[electron/ai/providers/ollama-provider.cjs:137](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L137>) · MethodDeclaration · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [OllamaProvider](<ollama-provider.cjs.md#s-ad4b74bd23abdb55>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| pathname | any | compiler-inferred | required |
| options | {} | compiler-inferred | optional, default present |
| timeoutMs | any | compiler-inferred | optional, default present |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/providers/ollama-provider.cjs:167](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L167>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/providers/ollama-provider.cjs:172](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L172>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/providers/ollama-provider.cjs:177](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L177>)
- [readJson](<../engine-chat.cjs.md#s-ac61e6dbcf3b2c61>) — [electron/ai/providers/ollama-provider.cjs:186](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L186>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/providers/ollama-provider.cjs:190](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L190>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/providers/ollama-provider.cjs:195](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L195>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/providers/ollama-provider.cjs:199](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L199>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/providers/ollama-provider.cjs:213](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L213>)

**Called by (statically resolved):**

- [OllamaProvider.listModels](<ollama-provider.cjs.md#s-6b77d21ad8966514>) — [electron/ai/providers/ollama-provider.cjs:302](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L302>)
- [OllamaProvider.describeModel](<ollama-provider.cjs.md#s-63b05762c5a37897>) — [electron/ai/providers/ollama-provider.cjs:314](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L314>)
- [OllamaProvider.prepare](<ollama-provider.cjs.md#s-091d0b8dfca6f9c9>) — [electron/ai/providers/ollama-provider.cjs:329](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L329>)
- [OllamaProvider.complete](<ollama-provider.cjs.md#s-6d56407bfa5196b0>) — [electron/ai/providers/ollama-provider.cjs:534](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L534>)

Unresolved / external call sites: 12.

- AbortController — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:139](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L139>)
- controller.abort — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:143](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L143>)
- externalSignal?.addEventListener — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:145](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L145>)
- setTimeout — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:146](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L146>)
- onDiagnostic — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:153](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L153>)
- this.fetch — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:154](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L154>)
- onDiagnostic — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:158](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L158>)
- require — module-loader; [electron/ai/providers/ollama-provider.cjs:186](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L186>)
- 4 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/model-pull.test.cjs:4](<../../../../../../../electron/ai/model-pull.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-provider.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-stream.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:14](<../../../../../../../electron/ai/request-logger.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:11](<../../../../../../../scripts/chat-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/dataset-live-acceptance.cjs:11](<../../../../../../../scripts/dataset-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/statistics-live-acceptance.cjs:10](<../../../../../../../scripts/statistics-live-acceptance.cjs#L10>) — file-import-only; coverage not established.

<a id="s-e7e9a5e9293c1883"></a>

## OllamaProvider.request.cancelRequest

[electron/ai/providers/ollama-provider.cjs:142](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L142>) · ArrowFunction · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [OllamaProvider.request](<ollama-provider.cjs.md#s-35307b242f4f5560>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- controller.abort — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:142](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L142>)

**Related tests / acceptance harnesses:**

- [electron/ai/model-pull.test.cjs:4](<../../../../../../../electron/ai/model-pull.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-provider.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-stream.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:14](<../../../../../../../electron/ai/request-logger.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:11](<../../../../../../../scripts/chat-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/dataset-live-acceptance.cjs:11](<../../../../../../../scripts/dataset-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/statistics-live-acceptance.cjs:10](<../../../../../../../scripts/statistics-live-acceptance.cjs#L10>) — file-import-only; coverage not established.

<a id="s-749ce303bf5af650"></a>

## OllamaProvider.request.&lt;anonymous@146:32&gt;

[electron/ai/providers/ollama-provider.cjs:146](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L146>) · ArrowFunction · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [OllamaProvider.request](<ollama-provider.cjs.md#s-35307b242f4f5560>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- controller.abort — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:148](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L148>)

**Related tests / acceptance harnesses:**

- [electron/ai/model-pull.test.cjs:4](<../../../../../../../electron/ai/model-pull.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-provider.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-stream.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:14](<../../../../../../../electron/ai/request-logger.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:11](<../../../../../../../scripts/chat-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/dataset-live-acceptance.cjs:11](<../../../../../../../scripts/dataset-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/statistics-live-acceptance.cjs:10](<../../../../../../../scripts/statistics-live-acceptance.cjs#L10>) — file-import-only; coverage not established.

<a id="s-d315fd448180e3e9"></a>

## OllamaProvider.pull

[electron/ai/providers/ollama-provider.cjs:226](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L226>) · MethodDeclaration · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [OllamaProvider](<ollama-provider.cjs.md#s-ad4b74bd23abdb55>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| model | any | compiler-inferred | required |
| signal | any | compiler-inferred | required |
| onProgress | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [OllamaProvider.pull.touch](<ollama-provider.cjs.md#s-fba9b115e19204a8>) — [electron/ai/providers/ollama-provider.cjs:239](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L239>)
- [validateModelName](<ollama-provider.cjs.md#s-d2cc9bcb6089f4a8>) — [electron/ai/providers/ollama-provider.cjs:243](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L243>)
- [OllamaProvider.pull.touch](<ollama-provider.cjs.md#s-fba9b115e19204a8>) — [electron/ai/providers/ollama-provider.cjs:276](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L276>)
- [OllamaProvider.pull.consume](<ollama-provider.cjs.md#s-d95da20b70cb2b06>) — [electron/ai/providers/ollama-provider.cjs:283](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L283>)
- [OllamaProvider.pull.consume](<ollama-provider.cjs.md#s-d95da20b70cb2b06>) — [electron/ai/providers/ollama-provider.cjs:287](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L287>)

**Called by (statically resolved):**

- [&lt;anonymous@75:80&gt;](<../model-pull.test.cjs.md#s-da2a19f07ae66314>) — [electron/ai/model-pull.test.cjs:91](<../../../../../../../electron/ai/model-pull.test.cjs#L91>)

Unresolved / external call sites: 23.

- AbortController — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:227](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L227>)
- controller.abort — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:234](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L234>)
- signal.addEventListener — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:235](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L235>)
- setTimeout — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:236](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L236>)
- this.fetch — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:240](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L240>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:243](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L243>)
- Error — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:246](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L246>)
- response.body.getReader — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:247](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L247>)
- 15 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/model-pull.test.cjs:91](<../../../../../../../electron/ai/model-pull.test.cjs#L91>) — static-call-site; coverage not established.
- [electron/ai/model-pull.test.cjs:4](<../../../../../../../electron/ai/model-pull.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-provider.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-stream.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:14](<../../../../../../../electron/ai/request-logger.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:11](<../../../../../../../scripts/chat-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/dataset-live-acceptance.cjs:11](<../../../../../../../scripts/dataset-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/statistics-live-acceptance.cjs:10](<../../../../../../../scripts/statistics-live-acceptance.cjs#L10>) — file-import-only; coverage not established.

<a id="s-c7d81d09376a19b8"></a>

## OllamaProvider.pull.cancel

[electron/ai/providers/ollama-provider.cjs:228](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L228>) · ArrowFunction · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [OllamaProvider.pull](<ollama-provider.cjs.md#s-d315fd448180e3e9>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- controller.abort — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:228](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L228>)

**Related tests / acceptance harnesses:**

- [electron/ai/model-pull.test.cjs:4](<../../../../../../../electron/ai/model-pull.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-provider.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-stream.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:14](<../../../../../../../electron/ai/request-logger.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:11](<../../../../../../../scripts/chat-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/dataset-live-acceptance.cjs:11](<../../../../../../../scripts/dataset-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/statistics-live-acceptance.cjs:10](<../../../../../../../scripts/statistics-live-acceptance.cjs#L10>) — file-import-only; coverage not established.

<a id="s-fba9b115e19204a8"></a>

## OllamaProvider.pull.touch

[electron/ai/providers/ollama-provider.cjs:230](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L230>) · ArrowFunction · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [OllamaProvider.pull](<ollama-provider.cjs.md#s-d315fd448180e3e9>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [OllamaProvider.pull](<ollama-provider.cjs.md#s-d315fd448180e3e9>) — [electron/ai/providers/ollama-provider.cjs:239](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L239>)
- [OllamaProvider.pull](<ollama-provider.cjs.md#s-d315fd448180e3e9>) — [electron/ai/providers/ollama-provider.cjs:276](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L276>)

Unresolved / external call sites: 2.

- clearTimeout — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:231](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L231>)
- setTimeout — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:232](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L232>)

**Related tests / acceptance harnesses:**

- [electron/ai/model-pull.test.cjs:4](<../../../../../../../electron/ai/model-pull.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-provider.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-stream.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:14](<../../../../../../../electron/ai/request-logger.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:11](<../../../../../../../scripts/chat-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/dataset-live-acceptance.cjs:11](<../../../../../../../scripts/dataset-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/statistics-live-acceptance.cjs:10](<../../../../../../../scripts/statistics-live-acceptance.cjs#L10>) — file-import-only; coverage not established.

<a id="s-d95da20b70cb2b06"></a>

## OllamaProvider.pull.consume

[electron/ai/providers/ollama-provider.cjs:251](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L251>) · ArrowFunction · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [OllamaProvider.pull](<ollama-provider.cjs.md#s-d315fd448180e3e9>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| line | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [OllamaProvider.pull](<ollama-provider.cjs.md#s-d315fd448180e3e9>) — [electron/ai/providers/ollama-provider.cjs:283](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L283>)
- [OllamaProvider.pull](<ollama-provider.cjs.md#s-d315fd448180e3e9>) — [electron/ai/providers/ollama-provider.cjs:287](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L287>)

Unresolved / external call sites: 7.

- line.trim — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:252](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L252>)
- JSON.parse — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:253](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L253>)
- Error — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:255](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L255>)
- Number.isSafeInteger — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:258](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L258>)
- Number.isSafeInteger — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:260](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L260>)
- onProgress — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:263](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L263>)
- event.status.slice — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:264](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L264>)

**Related tests / acceptance harnesses:**

- [electron/ai/model-pull.test.cjs:4](<../../../../../../../electron/ai/model-pull.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-provider.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-stream.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:14](<../../../../../../../electron/ai/request-logger.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:11](<../../../../../../../scripts/chat-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/dataset-live-acceptance.cjs:11](<../../../../../../../scripts/dataset-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/statistics-live-acceptance.cjs:10](<../../../../../../../scripts/statistics-live-acceptance.cjs#L10>) — file-import-only; coverage not established.

<a id="s-af04b9b90ddd590f"></a>

## OllamaProvider.pull.&lt;anonymous@296:36&gt;

[electron/ai/providers/ollama-provider.cjs:296](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L296>) · ArrowFunction · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [OllamaProvider.pull](<ollama-provider.cjs.md#s-d315fd448180e3e9>).

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

- [electron/ai/model-pull.test.cjs:4](<../../../../../../../electron/ai/model-pull.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-provider.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-stream.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:14](<../../../../../../../electron/ai/request-logger.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:11](<../../../../../../../scripts/chat-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/dataset-live-acceptance.cjs:11](<../../../../../../../scripts/dataset-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/statistics-live-acceptance.cjs:10](<../../../../../../../scripts/statistics-live-acceptance.cjs#L10>) — file-import-only; coverage not established.

<a id="s-6b77d21ad8966514"></a>

## OllamaProvider.listModels

[electron/ai/providers/ollama-provider.cjs:301](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L301>) · MethodDeclaration · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [OllamaProvider](<ollama-provider.cjs.md#s-ad4b74bd23abdb55>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [OllamaProvider.request](<ollama-provider.cjs.md#s-35307b242f4f5560>) — [electron/ai/providers/ollama-provider.cjs:302](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L302>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/providers/ollama-provider.cjs:304](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L304>)

**Called by (statically resolved):**

- [OllamaProvider.getStatus](<ollama-provider.cjs.md#s-5123d5c867ad7ef2>) — [electron/ai/providers/ollama-provider.cjs:447](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L447>)
- [OllamaProvider.testModel](<ollama-provider.cjs.md#s-760f27b8110fd5f4>) — [electron/ai/providers/ollama-provider.cjs:595](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L595>)
- [main](<../../../scripts/chat-live-acceptance.cjs.md#s-37e0176fb42530c3>) — [scripts/chat-live-acceptance.cjs:216](<../../../../../../../scripts/chat-live-acceptance.cjs#L216>)

Unresolved / external call sites: 3.

- Array.isArray — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:303](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L303>)
- body.models .map(normalizeModel) .sort — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:308](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L308>)
- body.models .map — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:308](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L308>)

**Related tests / acceptance harnesses:**

- [scripts/chat-live-acceptance.cjs:216](<../../../../../../../scripts/chat-live-acceptance.cjs#L216>) — static-call-site; coverage not established.
- [electron/ai/model-pull.test.cjs:4](<../../../../../../../electron/ai/model-pull.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-provider.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-stream.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:14](<../../../../../../../electron/ai/request-logger.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:11](<../../../../../../../scripts/chat-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/dataset-live-acceptance.cjs:11](<../../../../../../../scripts/dataset-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/statistics-live-acceptance.cjs:10](<../../../../../../../scripts/statistics-live-acceptance.cjs#L10>) — file-import-only; coverage not established.

<a id="s-dfae924c6ea8c2cf"></a>

## OllamaProvider.listModels.&lt;anonymous@310:13&gt;

[electron/ai/providers/ollama-provider.cjs:310](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L310>) · ArrowFunction · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [OllamaProvider.listModels](<ollama-provider.cjs.md#s-6b77d21ad8966514>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| a | any | compiler-inferred | required |
| b | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- a.name.localeCompare — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:310](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L310>)

**Related tests / acceptance harnesses:**

- [electron/ai/model-pull.test.cjs:4](<../../../../../../../electron/ai/model-pull.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-provider.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-stream.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:14](<../../../../../../../electron/ai/request-logger.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:11](<../../../../../../../scripts/chat-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/dataset-live-acceptance.cjs:11](<../../../../../../../scripts/dataset-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/statistics-live-acceptance.cjs:10](<../../../../../../../scripts/statistics-live-acceptance.cjs#L10>) — file-import-only; coverage not established.

<a id="s-63b05762c5a37897"></a>

## OllamaProvider.describeModel

[electron/ai/providers/ollama-provider.cjs:313](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L313>) · MethodDeclaration · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [OllamaProvider](<ollama-provider.cjs.md#s-ad4b74bd23abdb55>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| model | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [OllamaProvider.request](<ollama-provider.cjs.md#s-35307b242f4f5560>) — [electron/ai/providers/ollama-provider.cjs:314](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L314>)
- [validateModelName](<ollama-provider.cjs.md#s-d2cc9bcb6089f4a8>) — [electron/ai/providers/ollama-provider.cjs:317](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L317>)

**Called by (statically resolved):**

- [&lt;anonymous@182:64&gt;](<ollama-stream.test.cjs.md#s-715bc11bbd50ccb7>) — [electron/ai/providers/ollama-stream.test.cjs:205](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L205>)

Unresolved / external call sites: 5.

- JSON.stringify — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:317](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L317>)
- Object.entries(body.model_info ?? {}).find — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:319](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L319>)
- Object.entries — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:319](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L319>)
- Array.isArray — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:323](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L323>)
- Number.isInteger — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:324](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L324>)

**Related tests / acceptance harnesses:**

- [electron/ai/providers/ollama-stream.test.cjs:205](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L205>) — static-call-site; coverage not established.
- [electron/ai/model-pull.test.cjs:4](<../../../../../../../electron/ai/model-pull.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-provider.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-stream.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:14](<../../../../../../../electron/ai/request-logger.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:11](<../../../../../../../scripts/chat-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/dataset-live-acceptance.cjs:11](<../../../../../../../scripts/dataset-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/statistics-live-acceptance.cjs:10](<../../../../../../../scripts/statistics-live-acceptance.cjs#L10>) — file-import-only; coverage not established.

<a id="s-f64f9f47b61b0b40"></a>

## OllamaProvider.describeModel.&lt;anonymous@319:70&gt;

[electron/ai/providers/ollama-provider.cjs:319](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L319>) · ArrowFunction · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [OllamaProvider.describeModel](<ollama-provider.cjs.md#s-63b05762c5a37897>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| &#91;key&#93; | &#91;any&#93; | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- key.endsWith — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:320](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L320>)

**Related tests / acceptance harnesses:**

- [electron/ai/model-pull.test.cjs:4](<../../../../../../../electron/ai/model-pull.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-provider.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-stream.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:14](<../../../../../../../electron/ai/request-logger.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:11](<../../../../../../../scripts/chat-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/dataset-live-acceptance.cjs:11](<../../../../../../../scripts/dataset-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/statistics-live-acceptance.cjs:10](<../../../../../../../scripts/statistics-live-acceptance.cjs#L10>) — file-import-only; coverage not established.

<a id="s-091d0b8dfca6f9c9"></a>

## OllamaProvider.prepare

[electron/ai/providers/ollama-provider.cjs:328](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L328>) · MethodDeclaration · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [OllamaProvider](<ollama-provider.cjs.md#s-ad4b74bd23abdb55>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| model | any | compiler-inferred | required |
| settings | any | compiler-inferred | required |
| signal | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [OllamaProvider.request](<ollama-provider.cjs.md#s-35307b242f4f5560>) — [electron/ai/providers/ollama-provider.cjs:329](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L329>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- JSON.stringify — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:335](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L335>)
- Math.max — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:341](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L341>)

**Related tests / acceptance harnesses:**

- [electron/ai/model-pull.test.cjs:4](<../../../../../../../electron/ai/model-pull.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-provider.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-stream.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:14](<../../../../../../../electron/ai/request-logger.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:11](<../../../../../../../scripts/chat-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/dataset-live-acceptance.cjs:11](<../../../../../../../scripts/dataset-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/statistics-live-acceptance.cjs:10](<../../../../../../../scripts/statistics-live-acceptance.cjs#L10>) — file-import-only; coverage not established.

<a id="s-be4271d68f86c17b"></a>

## OllamaProvider.streamChat

[electron/ai/providers/ollama-provider.cjs:349](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L349>) · MethodDeclaration · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [OllamaProvider](<ollama-provider.cjs.md#s-ad4b74bd23abdb55>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| payload | any | compiler-inferred | required |
| request | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [OllamaProvider.streamChat.arm](<ollama-provider.cjs.md#s-b931631bd07e7f66>) — [electron/ai/providers/ollama-provider.cjs:373](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L373>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/providers/ollama-provider.cjs:392](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L392>)
- [readChatStream](<ollama-stream.cjs.md#s-f7526d2f26c7a960>) — [electron/ai/providers/ollama-provider.cjs:410](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L410>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/providers/ollama-provider.cjs:418](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L418>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/providers/ollama-provider.cjs:423](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L423>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/providers/ollama-provider.cjs:434](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L434>)

**Called by (statically resolved):**

- [OllamaProvider.complete](<ollama-provider.cjs.md#s-6d56407bfa5196b0>) — [electron/ai/providers/ollama-provider.cjs:530](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L530>)
- [&lt;anonymous@63:65&gt;](<ollama-stream.test.cjs.md#s-238a348d3550bdae>) — [electron/ai/providers/ollama-stream.test.cjs:79](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L79>)
- [&lt;anonymous@63:65&gt;](<ollama-stream.test.cjs.md#s-238a348d3550bdae>) — [electron/ai/providers/ollama-stream.test.cjs:83](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L83>)
- [&lt;anonymous@148:85&gt;](<ollama-stream.test.cjs.md#s-6d7d394d46bb1182>) — [electron/ai/providers/ollama-stream.test.cjs:169](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L169>)
- [&lt;anonymous@240:74&gt;](<ollama-stream.test.cjs.md#s-ebb254f3bb772dfb>) — [electron/ai/providers/ollama-stream.test.cjs:268](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L268>)

Unresolved / external call sites: 14.

- AbortController — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:350](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L350>)
- controller.abort — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:370](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L370>)
- signal?.addEventListener — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:371](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L371>)
- Math.max — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:374](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L374>)
- request.onDiagnostic — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:380](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L380>)
- this.fetch — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:381](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L381>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:384](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L384>)
- request.onDiagnostic — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:387](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L387>)
- 6 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/providers/ollama-stream.test.cjs:79](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L79>) — static-call-site; coverage not established.
- [electron/ai/providers/ollama-stream.test.cjs:83](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L83>) — static-call-site; coverage not established.
- [electron/ai/providers/ollama-stream.test.cjs:169](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L169>) — static-call-site; coverage not established.
- [electron/ai/providers/ollama-stream.test.cjs:268](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L268>) — static-call-site; coverage not established.
- [electron/ai/model-pull.test.cjs:4](<../../../../../../../electron/ai/model-pull.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-provider.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-stream.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:14](<../../../../../../../electron/ai/request-logger.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:11](<../../../../../../../scripts/chat-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/dataset-live-acceptance.cjs:11](<../../../../../../../scripts/dataset-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/statistics-live-acceptance.cjs:10](<../../../../../../../scripts/statistics-live-acceptance.cjs#L10>) — file-import-only; coverage not established.

<a id="s-12ad35b7a529135c"></a>

## OllamaProvider.streamChat.cancel

[electron/ai/providers/ollama-provider.cjs:356](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L356>) · ArrowFunction · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [OllamaProvider.streamChat](<ollama-provider.cjs.md#s-be4271d68f86c17b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- controller.abort — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:356](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L356>)

**Related tests / acceptance harnesses:**

- [electron/ai/model-pull.test.cjs:4](<../../../../../../../electron/ai/model-pull.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-provider.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-stream.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:14](<../../../../../../../electron/ai/request-logger.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:11](<../../../../../../../scripts/chat-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/dataset-live-acceptance.cjs:11](<../../../../../../../scripts/dataset-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/statistics-live-acceptance.cjs:10](<../../../../../../../scripts/statistics-live-acceptance.cjs#L10>) — file-import-only; coverage not established.

<a id="s-b931631bd07e7f66"></a>

## OllamaProvider.streamChat.arm

[electron/ai/providers/ollama-provider.cjs:357](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L357>) · ArrowFunction · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [OllamaProvider.streamChat](<ollama-provider.cjs.md#s-be4271d68f86c17b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| duration | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [OllamaProvider.streamChat.activity](<ollama-provider.cjs.md#s-5a5e07ff3346c267>) — [electron/ai/providers/ollama-provider.cjs:368](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L368>)
- [OllamaProvider.streamChat](<ollama-provider.cjs.md#s-be4271d68f86c17b>) — [electron/ai/providers/ollama-provider.cjs:373](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L373>)

Unresolved / external call sites: 2.

- clearTimeout — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:358](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L358>)
- setTimeout — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:360](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L360>)

**Related tests / acceptance harnesses:**

- [electron/ai/model-pull.test.cjs:4](<../../../../../../../electron/ai/model-pull.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-provider.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-stream.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:14](<../../../../../../../electron/ai/request-logger.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:11](<../../../../../../../scripts/chat-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/dataset-live-acceptance.cjs:11](<../../../../../../../scripts/dataset-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/statistics-live-acceptance.cjs:10](<../../../../../../../scripts/statistics-live-acceptance.cjs#L10>) — file-import-only; coverage not established.

<a id="s-492e9f1c41b158da"></a>

## OllamaProvider.streamChat.arm.&lt;anonymous@360:26&gt;

[electron/ai/providers/ollama-provider.cjs:360](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L360>) · ArrowFunction · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [OllamaProvider.streamChat.arm](<ollama-provider.cjs.md#s-b931631bd07e7f66>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- controller.abort — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:362](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L362>)

**Related tests / acceptance harnesses:**

- [electron/ai/model-pull.test.cjs:4](<../../../../../../../electron/ai/model-pull.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-provider.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-stream.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:14](<../../../../../../../electron/ai/request-logger.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:11](<../../../../../../../scripts/chat-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/dataset-live-acceptance.cjs:11](<../../../../../../../scripts/dataset-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/statistics-live-acceptance.cjs:10](<../../../../../../../scripts/statistics-live-acceptance.cjs#L10>) — file-import-only; coverage not established.

<a id="s-5a5e07ff3346c267"></a>

## OllamaProvider.streamChat.activity

[electron/ai/providers/ollama-provider.cjs:365](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L365>) · ArrowFunction · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [OllamaProvider.streamChat](<ollama-provider.cjs.md#s-be4271d68f86c17b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [OllamaProvider.streamChat.arm](<ollama-provider.cjs.md#s-b931631bd07e7f66>) — [electron/ai/providers/ollama-provider.cjs:368](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L368>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- request.onGenerationStarted — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:367](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L367>)

**Related tests / acceptance harnesses:**

- [electron/ai/model-pull.test.cjs:4](<../../../../../../../electron/ai/model-pull.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-provider.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-stream.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:14](<../../../../../../../electron/ai/request-logger.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:11](<../../../../../../../scripts/chat-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/dataset-live-acceptance.cjs:11](<../../../../../../../scripts/dataset-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/statistics-live-acceptance.cjs:10](<../../../../../../../scripts/statistics-live-acceptance.cjs#L10>) — file-import-only; coverage not established.

<a id="s-fd2c2c4d8497fd54"></a>

## OllamaProvider.streamChat.&lt;anonymous@391:50&gt;

[electron/ai/providers/ollama-provider.cjs:391](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L391>) · ArrowFunction · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [OllamaProvider.streamChat](<ollama-provider.cjs.md#s-be4271d68f86c17b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: {} (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/model-pull.test.cjs:4](<../../../../../../../electron/ai/model-pull.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-provider.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-stream.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:14](<../../../../../../../electron/ai/request-logger.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:11](<../../../../../../../scripts/chat-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/dataset-live-acceptance.cjs:11](<../../../../../../../scripts/dataset-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/statistics-live-acceptance.cjs:10](<../../../../../../../scripts/statistics-live-acceptance.cjs#L10>) — file-import-only; coverage not established.

<a id="s-7df13bf5eb5beb6b"></a>

## OllamaProvider.streamChat.&lt;anonymous@400:11&gt;

[electron/ai/providers/ollama-provider.cjs:400](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L400>) · ArrowFunction · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [OllamaProvider.streamChat](<ollama-provider.cjs.md#s-be4271d68f86c17b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| content | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- request.onDiagnostic — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:403](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L403>)
- request.onContent — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:407](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L407>)

**Related tests / acceptance harnesses:**

- [electron/ai/model-pull.test.cjs:4](<../../../../../../../electron/ai/model-pull.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-provider.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-stream.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:14](<../../../../../../../electron/ai/request-logger.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:11](<../../../../../../../scripts/chat-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/dataset-live-acceptance.cjs:11](<../../../../../../../scripts/dataset-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/statistics-live-acceptance.cjs:10](<../../../../../../../scripts/statistics-live-acceptance.cjs#L10>) — file-import-only; coverage not established.

<a id="s-5123d5c867ad7ef2"></a>

## OllamaProvider.getStatus

[electron/ai/providers/ollama-provider.cjs:444](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L444>) · MethodDeclaration · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [OllamaProvider](<ollama-provider.cjs.md#s-ad4b74bd23abdb55>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [OllamaProvider.listModels](<ollama-provider.cjs.md#s-6b77d21ad8966514>) — [electron/ai/providers/ollama-provider.cjs:447](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L447>)

**Called by (statically resolved):**

- [&lt;anonymous@41:73&gt;.&lt;anonymous@64:5&gt;](<ollama-provider.test.cjs.md#s-181ec9dde460c0e7>) — [electron/ai/providers/ollama-provider.test.cjs:66](<../../../../../../../electron/ai/providers/ollama-provider.test.cjs#L66>)
- [&lt;anonymous@148:88&gt;](<ollama-provider.test.cjs.md#s-61e3c8283b3975f1>) — [electron/ai/providers/ollama-provider.test.cjs:153](<../../../../../../../electron/ai/providers/ollama-provider.test.cjs#L153>)

Unresolved / external call sites: 2.

- new Date().toISOString — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:445](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L445>)
- Date — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:445](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L445>)

**Related tests / acceptance harnesses:**

- [electron/ai/providers/ollama-provider.test.cjs:66](<../../../../../../../electron/ai/providers/ollama-provider.test.cjs#L66>) — static-call-site; coverage not established.
- [electron/ai/providers/ollama-provider.test.cjs:153](<../../../../../../../electron/ai/providers/ollama-provider.test.cjs#L153>) — static-call-site; coverage not established.
- [electron/ai/model-pull.test.cjs:4](<../../../../../../../electron/ai/model-pull.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-provider.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-stream.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:14](<../../../../../../../electron/ai/request-logger.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:11](<../../../../../../../scripts/chat-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/dataset-live-acceptance.cjs:11](<../../../../../../../scripts/dataset-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/statistics-live-acceptance.cjs:10](<../../../../../../../scripts/statistics-live-acceptance.cjs#L10>) — file-import-only; coverage not established.

<a id="s-6d56407bfa5196b0"></a>

## OllamaProvider.complete

[electron/ai/providers/ollama-provider.cjs:473](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L473>) · MethodDeclaration · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [OllamaProvider](<ollama-provider.cjs.md#s-ad4b74bd23abdb55>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| rawRequest | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/providers/ollama-provider.cjs:479](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L479>)
- [validateModelName](<ollama-provider.cjs.md#s-d2cc9bcb6089f4a8>) — [electron/ai/providers/ollama-provider.cjs:483](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L483>)
- [validateMessages](<ollama-provider.cjs.md#s-b148d9c7944f8e8d>) — [electron/ai/providers/ollama-provider.cjs:484](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L484>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/providers/ollama-provider.cjs:491](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L491>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/providers/ollama-provider.cjs:521](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L521>)
- [OllamaProvider.streamChat](<ollama-provider.cjs.md#s-be4271d68f86c17b>) — [electron/ai/providers/ollama-provider.cjs:530](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L530>)
- [OllamaProvider.request](<ollama-provider.cjs.md#s-35307b242f4f5560>) — [electron/ai/providers/ollama-provider.cjs:534](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L534>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/providers/ollama-provider.cjs:550](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L550>)

**Called by (statically resolved):**

- [OllamaProvider.testModel](<ollama-provider.cjs.md#s-760f27b8110fd5f4>) — [electron/ai/providers/ollama-provider.cjs:603](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L603>)
- [&lt;anonymous@158:82&gt;](<ollama-provider.test.cjs.md#s-0195a75ba186e71f>) — [electron/ai/providers/ollama-provider.test.cjs:171](<../../../../../../../electron/ai/providers/ollama-provider.test.cjs#L171>)
- [&lt;anonymous@91:86&gt;](<ollama-stream.test.cjs.md#s-99ba445846784f82>) — [electron/ai/providers/ollama-stream.test.cjs:132](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L132>)
- [&lt;anonymous@182:64&gt;](<ollama-stream.test.cjs.md#s-715bc11bbd50ccb7>) — [electron/ai/providers/ollama-stream.test.cjs:206](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L206>)

Unresolved / external call sites: 13.

- Array.isArray — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:477](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L477>)
- Number.isInteger — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:487](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L487>)
- Boolean — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:505](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L505>)
- Array.isArray — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:518](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L518>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:519](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L519>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:539](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L539>)
- rawRequest.onDiagnostic — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:555](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L555>)
- crypto.randomUUID — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:562](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L562>)
- 5 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/providers/ollama-provider.test.cjs:171](<../../../../../../../electron/ai/providers/ollama-provider.test.cjs#L171>) — static-call-site; coverage not established.
- [electron/ai/providers/ollama-stream.test.cjs:132](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L132>) — static-call-site; coverage not established.
- [electron/ai/providers/ollama-stream.test.cjs:206](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L206>) — static-call-site; coverage not established.
- [electron/ai/model-pull.test.cjs:4](<../../../../../../../electron/ai/model-pull.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-provider.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-stream.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:14](<../../../../../../../electron/ai/request-logger.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:11](<../../../../../../../scripts/chat-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/dataset-live-acceptance.cjs:11](<../../../../../../../scripts/dataset-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/statistics-live-acceptance.cjs:10](<../../../../../../../scripts/statistics-live-acceptance.cjs#L10>) — file-import-only; coverage not established.

<a id="s-760f27b8110fd5f4"></a>

## OllamaProvider.testModel

[electron/ai/providers/ollama-provider.cjs:593](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L593>) · MethodDeclaration · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [OllamaProvider](<ollama-provider.cjs.md#s-ad4b74bd23abdb55>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| rawModel | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [validateModelName](<ollama-provider.cjs.md#s-d2cc9bcb6089f4a8>) — [electron/ai/providers/ollama-provider.cjs:594](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L594>)
- [OllamaProvider.listModels](<ollama-provider.cjs.md#s-6b77d21ad8966514>) — [electron/ai/providers/ollama-provider.cjs:595](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L595>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/providers/ollama-provider.cjs:597](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L597>)
- [OllamaProvider.complete](<ollama-provider.cjs.md#s-6d56407bfa5196b0>) — [electron/ai/providers/ollama-provider.cjs:603](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L603>)

**Called by (statically resolved):**

- [&lt;anonymous@84:88&gt;.&lt;anonymous@111:5&gt;](<ollama-provider.test.cjs.md#s-85e36a1171987467>) — [electron/ai/providers/ollama-provider.test.cjs:113](<../../../../../../../electron/ai/providers/ollama-provider.test.cjs#L113>)
- [&lt;anonymous@130:77&gt;.&lt;anonymous@137:5&gt;.&lt;anonymous@140:9&gt;](<ollama-provider.test.cjs.md#s-67ca8a8b4c1f872d>) — [electron/ai/providers/ollama-provider.test.cjs:140](<../../../../../../../electron/ai/providers/ollama-provider.test.cjs#L140>)

Unresolved / external call sites: 3.

- models.some — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:596](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L596>)
- crypto.randomUUID — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:604](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L604>)
- JSON.parse — external-or-dynamic-dispatch; [electron/ai/providers/ollama-provider.cjs:618](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L618>)

**Related tests / acceptance harnesses:**

- [electron/ai/providers/ollama-provider.test.cjs:113](<../../../../../../../electron/ai/providers/ollama-provider.test.cjs#L113>) — static-call-site; coverage not established.
- [electron/ai/providers/ollama-provider.test.cjs:140](<../../../../../../../electron/ai/providers/ollama-provider.test.cjs#L140>) — static-call-site; coverage not established.
- [electron/ai/model-pull.test.cjs:4](<../../../../../../../electron/ai/model-pull.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-provider.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-stream.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:14](<../../../../../../../electron/ai/request-logger.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:11](<../../../../../../../scripts/chat-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/dataset-live-acceptance.cjs:11](<../../../../../../../scripts/dataset-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/statistics-live-acceptance.cjs:10](<../../../../../../../scripts/statistics-live-acceptance.cjs#L10>) — file-import-only; coverage not established.

<a id="s-182a8b15d16bde21"></a>

## OllamaProvider.testModel.&lt;anonymous@596:22&gt;

[electron/ai/providers/ollama-provider.cjs:596](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L596>) · ArrowFunction · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [OllamaProvider.testModel](<ollama-provider.cjs.md#s-760f27b8110fd5f4>).

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

- [electron/ai/model-pull.test.cjs:4](<../../../../../../../electron/ai/model-pull.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-provider.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-stream.test.cjs:4](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:14](<../../../../../../../electron/ai/request-logger.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:11](<../../../../../../../scripts/chat-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/dataset-live-acceptance.cjs:11](<../../../../../../../scripts/dataset-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
- [scripts/statistics-live-acceptance.cjs:10](<../../../../../../../scripts/statistics-live-acceptance.cjs#L10>) — file-import-only; coverage not established.
