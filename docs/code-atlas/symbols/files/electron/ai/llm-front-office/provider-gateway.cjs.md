# electron/ai/llm-front-office/provider-gateway.cjs: symbols

[Atlas](<../../../../../README.md>) / [Retained AI runtime](<../../../../../modules/ai-runtime.md>) / [electron/ai/llm-front-office/provider-gateway.cjs:1](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/llm-front-office/provider-gateway.cjs](<provider-gateway.cjs.md#s-6bf33f0ff7ae3571>) (Module)
- [chunkSchema](<provider-gateway.cjs.md#s-ae5449dca2138b20>) (SchemaBinding)
- [invalid](<provider-gateway.cjs.md#s-6e9f7d882cf67add>) (ArrowFunction)
- [consumeStream](<provider-gateway.cjs.md#s-0c634b29ee77043b>) (FunctionDeclaration)
- [consumeStream.event](<provider-gateway.cjs.md#s-cca6c94ad44421e6>) (ArrowFunction)
- [consumeStream.&lt;anonymous@178:33&gt;](<provider-gateway.cjs.md#s-fa5124e10dd2d3b6>) (ArrowFunction)
- [consumeCompletion](<provider-gateway.cjs.md#s-343584dde39b1f93>) (FunctionDeclaration)
- [consumeCompletion.schema](<provider-gateway.cjs.md#s-e7c4631cbff8c8d1>) (SchemaBinding)
- [consumeCompletion.&lt;anonymous@246:23&gt;](<provider-gateway.cjs.md#s-90ead37f37776252>) (ArrowFunction)
- [consumeCompletion.&lt;anonymous@247:20&gt;](<provider-gateway.cjs.md#s-aec2c8811b38ca58>) (ArrowFunction)
- [createLLMClient](<provider-gateway.cjs.md#s-865c43e6ea2bf755>) (FunctionDeclaration)
- [createLLMClient.complete](<provider-gateway.cjs.md#s-52f9a78e18c7a535>) (MethodDeclaration)
- [createLLMClient.complete.&lt;anonymous@357:11&gt;](<provider-gateway.cjs.md#s-e4b4a7df227a9467>) (ArrowFunction)
- [gatewayHealth](<provider-gateway.cjs.md#s-9b77cb86cb8f8044>) (FunctionDeclaration)
- [gatewayHealth.&lt;anonymous@417:50&gt;](<provider-gateway.cjs.md#s-1ccd5cd4a7e558b4>) (ArrowFunction)

<a id="s-6bf33f0ff7ae3571"></a>

## electron/ai/llm-front-office/provider-gateway.cjs

[electron/ai/llm-front-office/provider-gateway.cjs:1](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L1>) · Module · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- require — module-loader; [electron/ai/llm-front-office/provider-gateway.cjs:5](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L5>)
- require — module-loader; [electron/ai/llm-front-office/provider-gateway.cjs:6](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L6>)
- require — module-loader; [electron/ai/llm-front-office/provider-gateway.cjs:12](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L12>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:27](<../../../../../../../electron/ai/front-office-engine.test.cjs#L27>) — file-import-only; coverage not established.
- [electron/ai/front-office-evaluation.test.cjs:13](<../../../../../../../electron/ai/front-office-evaluation.test.cjs#L13>) — file-import-only; coverage not established.

<a id="s-ae5449dca2138b20"></a>

## chunkSchema

[electron/ai/llm-front-office/provider-gateway.cjs:14](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L14>) · SchemaBinding · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/llm-front-office/provider-gateway.cjs](<provider-gateway.cjs.md#s-6bf33f0ff7ae3571>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 45.

- z.object — external-or-dynamic-dispatch; [electron/ai/llm-front-office/provider-gateway.cjs:14](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L14>)
- z.string().max(200).optional — external-or-dynamic-dispatch; [electron/ai/llm-front-office/provider-gateway.cjs:15](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L15>)
- z.string().max — external-or-dynamic-dispatch; [electron/ai/llm-front-office/provider-gateway.cjs:15](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L15>)
- z.string — external-or-dynamic-dispatch; [electron/ai/llm-front-office/provider-gateway.cjs:15](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L15>)
- z .array( z.object({ index: z.number().int().optional(), delta: z.object({ content: z.string().nullable().optional(), reasoning: z.string().nullable().optional(), reasoning_content — external-or-dynamic-dispatch; [electron/ai/llm-front-office/provider-gateway.cjs:16](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L16>)
- z .array — external-or-dynamic-dispatch; [electron/ai/llm-front-office/provider-gateway.cjs:16](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L16>)
- z.object — external-or-dynamic-dispatch; [electron/ai/llm-front-office/provider-gateway.cjs:18](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L18>)
- z.number().int().optional — external-or-dynamic-dispatch; [electron/ai/llm-front-office/provider-gateway.cjs:19](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L19>)
- 37 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:27](<../../../../../../../electron/ai/front-office-engine.test.cjs#L27>) — file-import-only; coverage not established.
- [electron/ai/front-office-evaluation.test.cjs:13](<../../../../../../../electron/ai/front-office-evaluation.test.cjs#L13>) — file-import-only; coverage not established.

<a id="s-6e9f7d882cf67add"></a>

## invalid

[electron/ai/llm-front-office/provider-gateway.cjs:42](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L42>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/llm-front-office/provider-gateway.cjs](<provider-gateway.cjs.md#s-6bf33f0ff7ae3571>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: ModelRuntimeError (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/llm-front-office/provider-gateway.cjs:43](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L43>)

**Called by (statically resolved):**

- [consumeStream](<provider-gateway.cjs.md#s-0c634b29ee77043b>) — [electron/ai/llm-front-office/provider-gateway.cjs:57](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L57>)
- [consumeStream.event](<provider-gateway.cjs.md#s-cca6c94ad44421e6>) — [electron/ai/llm-front-office/provider-gateway.cjs:85](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L85>)
- [consumeStream.event](<provider-gateway.cjs.md#s-cca6c94ad44421e6>) — [electron/ai/llm-front-office/provider-gateway.cjs:102](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L102>)
- [consumeStream.event](<provider-gateway.cjs.md#s-cca6c94ad44421e6>) — [electron/ai/llm-front-office/provider-gateway.cjs:105](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L105>)
- [consumeStream](<provider-gateway.cjs.md#s-0c634b29ee77043b>) — [electron/ai/llm-front-office/provider-gateway.cjs:134](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L134>)
- [consumeStream](<provider-gateway.cjs.md#s-0c634b29ee77043b>) — [electron/ai/llm-front-office/provider-gateway.cjs:152](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L152>)
- [consumeStream](<provider-gateway.cjs.md#s-0c634b29ee77043b>) — [electron/ai/llm-front-office/provider-gateway.cjs:176](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L176>)
- [consumeCompletion](<provider-gateway.cjs.md#s-343584dde39b1f93>) — [electron/ai/llm-front-office/provider-gateway.cjs:199](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L199>)
- [consumeCompletion](<provider-gateway.cjs.md#s-343584dde39b1f93>) — [electron/ai/llm-front-office/provider-gateway.cjs:239](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L239>)
- [consumeCompletion](<provider-gateway.cjs.md#s-343584dde39b1f93>) — [electron/ai/llm-front-office/provider-gateway.cjs:280](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L280>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:27](<../../../../../../../electron/ai/front-office-engine.test.cjs#L27>) — file-import-only; coverage not established.
- [electron/ai/front-office-evaluation.test.cjs:13](<../../../../../../../electron/ai/front-office-evaluation.test.cjs#L13>) — file-import-only; coverage not established.

<a id="s-0c634b29ee77043b"></a>

## consumeStream

[electron/ai/llm-front-office/provider-gateway.cjs:49](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L49>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Parse SSE across arbitrary boundaries, comments and trailing usage; callbacks contain cumulative visible text.

Purpose evidence: jsdoc.

Exported as: consumeStream ([electron/ai/llm-front-office/provider-gateway.cjs:1](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L1>)).

Lexical owner: [electron/ai/llm-front-office/provider-gateway.cjs](<provider-gateway.cjs.md#s-6bf33f0ff7ae3571>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| response | any | compiler-inferred | required |
| touch | any | compiler-inferred | required |
| request | any | compiler-inferred | required |
| providerId | any | compiler-inferred | required |
| requestedModel | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invalid](<provider-gateway.cjs.md#s-6e9f7d882cf67add>) — [electron/ai/llm-front-office/provider-gateway.cjs:57](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L57>)
- [invalid](<provider-gateway.cjs.md#s-6e9f7d882cf67add>) — [electron/ai/llm-front-office/provider-gateway.cjs:134](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L134>)
- [consumeStream.event](<provider-gateway.cjs.md#s-cca6c94ad44421e6>) — [electron/ai/llm-front-office/provider-gateway.cjs:142](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L142>)
- [consumeStream.event](<provider-gateway.cjs.md#s-cca6c94ad44421e6>) — [electron/ai/llm-front-office/provider-gateway.cjs:150](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L150>)
- [invalid](<provider-gateway.cjs.md#s-6e9f7d882cf67add>) — [electron/ai/llm-front-office/provider-gateway.cjs:152](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L152>)
- [invalid](<provider-gateway.cjs.md#s-6e9f7d882cf67add>) — [electron/ai/llm-front-office/provider-gateway.cjs:176](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L176>)

**Called by (statically resolved):**

- [&lt;anonymous@703:102&gt;](<../front-office-engine.test.cjs.md#s-8103e4ebeb514bc9>) — [electron/ai/front-office-engine.test.cjs:705](<../../../../../../../electron/ai/front-office-engine.test.cjs#L705>)
- [&lt;anonymous@703:102&gt;](<../front-office-engine.test.cjs.md#s-8103e4ebeb514bc9>) — [electron/ai/front-office-engine.test.cjs:718](<../../../../../../../electron/ai/front-office-engine.test.cjs#L718>)

Unresolved / external call sites: 30.

- response.headers.get("content-type")?.includes — external-or-dynamic-dispatch; [electron/ai/llm-front-office/provider-gateway.cjs:56](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L56>)
- response.headers.get — external-or-dynamic-dispatch; [electron/ai/llm-front-office/provider-gateway.cjs:56](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L56>)
- request.onStage — external-or-dynamic-dispatch; [electron/ai/llm-front-office/provider-gateway.cjs:58](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L58>)
- request.onDiagnostic — external-or-dynamic-dispatch; [electron/ai/llm-front-office/provider-gateway.cjs:59](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L59>)
- performance.now — external-or-dynamic-dispatch; [electron/ai/llm-front-office/provider-gateway.cjs:60](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L60>)
- TextDecoder — external-or-dynamic-dispatch; [electron/ai/llm-front-office/provider-gateway.cjs:61](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L61>)
- response.body.getReader — external-or-dynamic-dispatch; [electron/ai/llm-front-office/provider-gateway.cjs:124](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L124>)
- request.signal?.throwIfAborted — external-or-dynamic-dispatch; [electron/ai/llm-front-office/provider-gateway.cjs:127](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L127>)
- 22 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:705](<../../../../../../../electron/ai/front-office-engine.test.cjs#L705>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:718](<../../../../../../../electron/ai/front-office-engine.test.cjs#L718>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:27](<../../../../../../../electron/ai/front-office-engine.test.cjs#L27>) — file-import-only; coverage not established.
- [electron/ai/front-office-evaluation.test.cjs:13](<../../../../../../../electron/ai/front-office-evaluation.test.cjs#L13>) — file-import-only; coverage not established.

<a id="s-cca6c94ad44421e6"></a>

## consumeStream.event

[electron/ai/llm-front-office/provider-gateway.cjs:73](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L73>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [consumeStream](<provider-gateway.cjs.md#s-0c634b29ee77043b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invalid](<provider-gateway.cjs.md#s-6e9f7d882cf67add>) — [electron/ai/llm-front-office/provider-gateway.cjs:85](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L85>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/llm-front-office/provider-gateway.cjs:88](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L88>)
- [parse](<../../shared/validation.cjs.md#s-f29367528a73f24d>) — [electron/ai/llm-front-office/provider-gateway.cjs:92](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L92>)
- [invalid](<provider-gateway.cjs.md#s-6e9f7d882cf67add>) — [electron/ai/llm-front-office/provider-gateway.cjs:102](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L102>)
- [invalid](<provider-gateway.cjs.md#s-6e9f7d882cf67add>) — [electron/ai/llm-front-office/provider-gateway.cjs:105](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L105>)

**Called by (statically resolved):**

- [consumeStream](<provider-gateway.cjs.md#s-0c634b29ee77043b>) — [electron/ai/llm-front-office/provider-gateway.cjs:142](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L142>)
- [consumeStream](<provider-gateway.cjs.md#s-0c634b29ee77043b>) — [electron/ai/llm-front-office/provider-gateway.cjs:150](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L150>)

Unresolved / external call sites: 10.

- data.join — external-or-dynamic-dispatch; [electron/ai/llm-front-office/provider-gateway.cjs:75](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L75>)
- JSON.parse — external-or-dynamic-dispatch; [electron/ai/llm-front-office/provider-gateway.cjs:83](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L83>)
- request.onDiagnostic — external-or-dynamic-dispatch; [electron/ai/llm-front-office/provider-gateway.cjs:97](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L97>)
- request.onStage — external-or-dynamic-dispatch; [electron/ai/llm-front-office/provider-gateway.cjs:107](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L107>)
- request.onDiagnostic — external-or-dynamic-dispatch; [electron/ai/llm-front-office/provider-gateway.cjs:110](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L110>)
- Math.round — external-or-dynamic-dispatch; [electron/ai/llm-front-office/provider-gateway.cjs:115](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L115>)
- performance.now — external-or-dynamic-dispatch; [electron/ai/llm-front-office/provider-gateway.cjs:115](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L115>)
- request.onGenerationStarted — external-or-dynamic-dispatch; [electron/ai/llm-front-office/provider-gateway.cjs:116](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L116>)
- 2 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:27](<../../../../../../../electron/ai/front-office-engine.test.cjs#L27>) — file-import-only; coverage not established.
- [electron/ai/front-office-evaluation.test.cjs:13](<../../../../../../../electron/ai/front-office-evaluation.test.cjs#L13>) — file-import-only; coverage not established.

<a id="s-fa5124e10dd2d3b6"></a>

## consumeStream.&lt;anonymous@178:33&gt;

[electron/ai/llm-front-office/provider-gateway.cjs:178](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L178>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [consumeStream](<provider-gateway.cjs.md#s-0c634b29ee77043b>).

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

- [electron/ai/front-office-engine.test.cjs:27](<../../../../../../../electron/ai/front-office-engine.test.cjs#L27>) — file-import-only; coverage not established.
- [electron/ai/front-office-evaluation.test.cjs:13](<../../../../../../../electron/ai/front-office-evaluation.test.cjs#L13>) — file-import-only; coverage not established.

<a id="s-343584dde39b1f93"></a>

## consumeCompletion

[electron/ai/llm-front-office/provider-gateway.cjs:185](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L185>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Consume a bounded JSON completion when streaming is disabled. No artificial content callback/TTFT is generated; the final conversation renders the result.

Purpose evidence: jsdoc.

Exported as: consumeCompletion ([electron/ai/llm-front-office/provider-gateway.cjs:1](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L1>)).

Lexical owner: [electron/ai/llm-front-office/provider-gateway.cjs](<provider-gateway.cjs.md#s-6bf33f0ff7ae3571>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| response | any | compiler-inferred | required |
| touch | any | compiler-inferred | required |
| request | any | compiler-inferred | required |
| providerId | any | compiler-inferred | required |
| requestedModel | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invalid](<provider-gateway.cjs.md#s-6e9f7d882cf67add>) — [electron/ai/llm-front-office/provider-gateway.cjs:199](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L199>)
- [parse](<../../shared/validation.cjs.md#s-f29367528a73f24d>) — [electron/ai/llm-front-office/provider-gateway.cjs:231](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L231>)
- [invalid](<provider-gateway.cjs.md#s-6e9f7d882cf67add>) — [electron/ai/llm-front-office/provider-gateway.cjs:239](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L239>)
- [invalid](<provider-gateway.cjs.md#s-6e9f7d882cf67add>) — [electron/ai/llm-front-office/provider-gateway.cjs:280](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L280>)

**Called by (statically resolved):**

- [&lt;anonymous@128:98&gt;](<../front-office-engine.test.cjs.md#s-c8ff23519b069130>) — [electron/ai/front-office-engine.test.cjs:137](<../../../../../../../electron/ai/front-office-engine.test.cjs#L137>)
- [&lt;anonymous@128:98&gt;](<../front-office-engine.test.cjs.md#s-c8ff23519b069130>) — [electron/ai/front-office-engine.test.cjs:164](<../../../../../../../electron/ai/front-office-engine.test.cjs#L164>)

Unresolved / external call sites: 16.

- performance.now — external-or-dynamic-dispatch; [electron/ai/llm-front-office/provider-gateway.cjs:192](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L192>)
- TextDecoder — external-or-dynamic-dispatch; [electron/ai/llm-front-office/provider-gateway.cjs:195](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L195>)
- touch — external-or-dynamic-dispatch; [electron/ai/llm-front-office/provider-gateway.cjs:200](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L200>)
- decoder.decode — external-or-dynamic-dispatch; [electron/ai/llm-front-office/provider-gateway.cjs:201](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L201>)
- decoder.decode — external-or-dynamic-dispatch; [electron/ai/llm-front-office/provider-gateway.cjs:203](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L203>)
- JSON.parse — external-or-dynamic-dispatch; [electron/ai/llm-front-office/provider-gateway.cjs:231](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L231>)
- request.onDiagnostic — external-or-dynamic-dispatch; [electron/ai/llm-front-office/provider-gateway.cjs:236](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L236>)
- Array.isArray — external-or-dynamic-dispatch; [electron/ai/llm-front-office/provider-gateway.cjs:244](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L244>)
- 8 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:137](<../../../../../../../electron/ai/front-office-engine.test.cjs#L137>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:164](<../../../../../../../electron/ai/front-office-engine.test.cjs#L164>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:27](<../../../../../../../electron/ai/front-office-engine.test.cjs#L27>) — file-import-only; coverage not established.
- [electron/ai/front-office-evaluation.test.cjs:13](<../../../../../../../electron/ai/front-office-evaluation.test.cjs#L13>) — file-import-only; coverage not established.

<a id="s-e7c4631cbff8c8d1"></a>

## consumeCompletion.schema

[electron/ai/llm-front-office/provider-gateway.cjs:204](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L204>) · SchemaBinding · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [consumeCompletion](<provider-gateway.cjs.md#s-343584dde39b1f93>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 32.

- z.object — external-or-dynamic-dispatch; [electron/ai/llm-front-office/provider-gateway.cjs:204](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L204>)
- z.string().max(200).optional — external-or-dynamic-dispatch; [electron/ai/llm-front-office/provider-gateway.cjs:205](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L205>)
- z.string().max — external-or-dynamic-dispatch; [electron/ai/llm-front-office/provider-gateway.cjs:205](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L205>)
- z.string — external-or-dynamic-dispatch; [electron/ai/llm-front-office/provider-gateway.cjs:205](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L205>)
- z .array( z.object({ message: z.object({ content: z .union(&#91; z.string(), z.array( z.object({ type: z.string(), text: z.string().optional() }), ), &#93;) .nullable() .optional(), refusa — external-or-dynamic-dispatch; [electron/ai/llm-front-office/provider-gateway.cjs:206](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L206>)
- z .array( z.object({ message: z.object({ content: z .union(&#91; z.string(), z.array( z.object({ type: z.string(), text: z.string().optional() }), ), &#93;) .nullable() .optional(), refusa — external-or-dynamic-dispatch; [electron/ai/llm-front-office/provider-gateway.cjs:206](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L206>)
- z .array — external-or-dynamic-dispatch; [electron/ai/llm-front-office/provider-gateway.cjs:206](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L206>)
- z.object — external-or-dynamic-dispatch; [electron/ai/llm-front-office/provider-gateway.cjs:208](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L208>)
- 24 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:27](<../../../../../../../electron/ai/front-office-engine.test.cjs#L27>) — file-import-only; coverage not established.
- [electron/ai/front-office-evaluation.test.cjs:13](<../../../../../../../electron/ai/front-office-evaluation.test.cjs#L13>) — file-import-only; coverage not established.

<a id="s-90ead37f37776252"></a>

## consumeCompletion.&lt;anonymous@246:23&gt;

[electron/ai/llm-front-office/provider-gateway.cjs:246](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L246>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [consumeCompletion](<provider-gateway.cjs.md#s-343584dde39b1f93>).

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

- [electron/ai/front-office-engine.test.cjs:27](<../../../../../../../electron/ai/front-office-engine.test.cjs#L27>) — file-import-only; coverage not established.
- [electron/ai/front-office-evaluation.test.cjs:13](<../../../../../../../electron/ai/front-office-evaluation.test.cjs#L13>) — file-import-only; coverage not established.

<a id="s-aec2c8811b38ca58"></a>

## consumeCompletion.&lt;anonymous@247:20&gt;

[electron/ai/llm-front-office/provider-gateway.cjs:247](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L247>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [consumeCompletion](<provider-gateway.cjs.md#s-343584dde39b1f93>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| p | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:27](<../../../../../../../electron/ai/front-office-engine.test.cjs#L27>) — file-import-only; coverage not established.
- [electron/ai/front-office-evaluation.test.cjs:13](<../../../../../../../electron/ai/front-office-evaluation.test.cjs#L13>) — file-import-only; coverage not established.

<a id="s-865c43e6ea2bf755"></a>

## createLLMClient

[electron/ai/llm-front-office/provider-gateway.cjs:285](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L285>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Create an LLMClient for the explicitly permitted endpoint; provider keys stay in the main process.

Purpose evidence: jsdoc.

Exported as: createLLMClient ([electron/ai/llm-front-office/provider-gateway.cjs:1](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L1>)).

Lexical owner: [electron/ai/llm-front-office/provider-gateway.cjs](<provider-gateway.cjs.md#s-6bf33f0ff7ae3571>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { model, transport, config, registry, credentials } | { model: any; transport: any; config: any; registry: any; credentials: any; } | compiler-inferred | required |

Returns: { complete(request: any): unknown; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [validateConfig](<experiment-contracts.cjs.md#s-3012ca16a371ad08>) — [electron/ai/llm-front-office/provider-gateway.cjs:286](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L286>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/llm-front-office/provider-gateway.cjs:288](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L288>)
- [OpenAIChatProvider.constructor](<../providers/openai-chat-provider.cjs.md#s-22c7dc3a72931ddb>) — [electron/ai/llm-front-office/provider-gateway.cjs:294](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L294>)

**Called by (statically resolved):**

- [&lt;anonymous@88:97&gt;](<../front-office-engine.test.cjs.md#s-329c9d4402c7b094>) — [electron/ai/front-office-engine.test.cjs:95](<../../../../../../../electron/ai/front-office-engine.test.cjs#L95>)
- [&lt;anonymous@128:98&gt;](<../front-office-engine.test.cjs.md#s-c8ff23519b069130>) — [electron/ai/front-office-engine.test.cjs:178](<../../../../../../../electron/ai/front-office-engine.test.cjs#L178>)
- [&lt;anonymous@205:84&gt;](<../front-office-engine.test.cjs.md#s-6c9756f354f6eb43>) — [electron/ai/front-office-engine.test.cjs:226](<../../../../../../../electron/ai/front-office-engine.test.cjs#L226>)
- [&lt;anonymous@729:103&gt;](<../front-office-engine.test.cjs.md#s-61a8d7a381ae8861>) — [electron/ai/front-office-engine.test.cjs:732](<../../../../../../../electron/ai/front-office-engine.test.cjs#L732>)
- [&lt;anonymous@729:103&gt;.&lt;anonymous@753:5&gt;](<../front-office-engine.test.cjs.md#s-8c6d042665deed9e>) — [electron/ai/front-office-engine.test.cjs:754](<../../../../../../../electron/ai/front-office-engine.test.cjs#L754>)
- [&lt;anonymous@183:111&gt;](<../front-office-evaluation.test.cjs.md#s-17e1bbffa0618973>) — [electron/ai/front-office-evaluation.test.cjs:201](<../../../../../../../electron/ai/front-office-evaluation.test.cjs#L201>)
- [&lt;anonymous@237:5&gt;](<../front-office-evaluation.test.cjs.md#s-ef8fa49271a8596e>) — [electron/ai/front-office-evaluation.test.cjs:253](<../../../../../../../electron/ai/front-office-evaluation.test.cjs#L253>)
- [main.runClient.&lt;anonymous@189:9&gt;](<../../../scripts/front-office-benchmark.cjs.md#s-f33b1bcd6cf84c2a>) — [scripts/front-office-benchmark.cjs:202](<../../../../../../../scripts/front-office-benchmark.cjs#L202>)

Unresolved / external call sites: 1.

- registry.providerFor — external-or-dynamic-dispatch; [electron/ai/llm-front-office/provider-gateway.cjs:302](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L302>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:95](<../../../../../../../electron/ai/front-office-engine.test.cjs#L95>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:178](<../../../../../../../electron/ai/front-office-engine.test.cjs#L178>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:226](<../../../../../../../electron/ai/front-office-engine.test.cjs#L226>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:732](<../../../../../../../electron/ai/front-office-engine.test.cjs#L732>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:754](<../../../../../../../electron/ai/front-office-engine.test.cjs#L754>) — static-call-site; coverage not established.
- [electron/ai/front-office-evaluation.test.cjs:201](<../../../../../../../electron/ai/front-office-evaluation.test.cjs#L201>) — static-call-site; coverage not established.
- [electron/ai/front-office-evaluation.test.cjs:253](<../../../../../../../electron/ai/front-office-evaluation.test.cjs#L253>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:27](<../../../../../../../electron/ai/front-office-engine.test.cjs#L27>) — file-import-only; coverage not established.
- [electron/ai/front-office-evaluation.test.cjs:13](<../../../../../../../electron/ai/front-office-evaluation.test.cjs#L13>) — file-import-only; coverage not established.

<a id="s-52f9a78e18c7a535"></a>

## createLLMClient.complete

[electron/ai/llm-front-office/provider-gateway.cjs:309](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L309>) · MethodDeclaration · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Perform exactly one inference call with identical A/B messages and generation options.

Purpose evidence: jsdoc.

Lexical owner: [createLLMClient](<provider-gateway.cjs.md#s-865c43e6ea2bf755>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| request | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@88:97&gt;](<../front-office-engine.test.cjs.md#s-329c9d4402c7b094>) — [electron/ai/front-office-engine.test.cjs:108](<../../../../../../../electron/ai/front-office-engine.test.cjs#L108>)
- [&lt;anonymous@128:98&gt;](<../front-office-engine.test.cjs.md#s-c8ff23519b069130>) — [electron/ai/front-office-engine.test.cjs:199](<../../../../../../../electron/ai/front-office-engine.test.cjs#L199>)
- [&lt;anonymous@205:84&gt;](<../front-office-engine.test.cjs.md#s-6c9756f354f6eb43>) — [electron/ai/front-office-engine.test.cjs:234](<../../../../../../../electron/ai/front-office-engine.test.cjs#L234>)
- [&lt;anonymous@729:103&gt;](<../front-office-engine.test.cjs.md#s-61a8d7a381ae8861>) — [electron/ai/front-office-engine.test.cjs:746](<../../../../../../../electron/ai/front-office-engine.test.cjs#L746>)
- [&lt;anonymous@183:111&gt;](<../front-office-evaluation.test.cjs.md#s-17e1bbffa0618973>) — [electron/ai/front-office-evaluation.test.cjs:213](<../../../../../../../electron/ai/front-office-evaluation.test.cjs#L213>)
- [&lt;anonymous@237:5&gt;](<../front-office-evaluation.test.cjs.md#s-ef8fa49271a8596e>) — [electron/ai/front-office-evaluation.test.cjs:253](<../../../../../../../electron/ai/front-office-evaluation.test.cjs#L253>)
- [main.runClient.&lt;anonymous@189:9&gt;](<../../../scripts/front-office-benchmark.cjs.md#s-f33b1bcd6cf84c2a>) — [scripts/front-office-benchmark.cjs:202](<../../../../../../../scripts/front-office-benchmark.cjs#L202>)

Unresolved / external call sites: 12.

- model.supportedParameters?.includes — external-or-dynamic-dispatch; [electron/ai/llm-front-office/provider-gateway.cjs:314](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L314>)
- model.supportedParameters.includes — external-or-dynamic-dispatch; [electron/ai/llm-front-office/provider-gateway.cjs:315](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L315>)
- adapter.generationParameters — external-or-dynamic-dispatch; [electron/ai/llm-front-office/provider-gateway.cjs:325](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L325>)
- request.onStage — external-or-dynamic-dispatch; [electron/ai/llm-front-office/provider-gateway.cjs:342](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L342>)
- request.onDiagnostic — external-or-dynamic-dispatch; [electron/ai/llm-front-office/provider-gateway.cjs:343](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L343>)
- request.onDiagnostic — external-or-dynamic-dispatch; [electron/ai/llm-front-office/provider-gateway.cjs:344](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L344>)
- adapter.request — external-or-dynamic-dispatch; [electron/ai/llm-front-office/provider-gateway.cjs:354](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L354>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/ai/llm-front-office/provider-gateway.cjs:356](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L356>)
- 4 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:108](<../../../../../../../electron/ai/front-office-engine.test.cjs#L108>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:199](<../../../../../../../electron/ai/front-office-engine.test.cjs#L199>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:234](<../../../../../../../electron/ai/front-office-engine.test.cjs#L234>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:746](<../../../../../../../electron/ai/front-office-engine.test.cjs#L746>) — static-call-site; coverage not established.
- [electron/ai/front-office-evaluation.test.cjs:213](<../../../../../../../electron/ai/front-office-evaluation.test.cjs#L213>) — static-call-site; coverage not established.
- [electron/ai/front-office-evaluation.test.cjs:253](<../../../../../../../electron/ai/front-office-evaluation.test.cjs#L253>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:27](<../../../../../../../electron/ai/front-office-engine.test.cjs#L27>) — file-import-only; coverage not established.
- [electron/ai/front-office-evaluation.test.cjs:13](<../../../../../../../electron/ai/front-office-evaluation.test.cjs#L13>) — file-import-only; coverage not established.

<a id="s-e4b4a7df227a9467"></a>

## createLLMClient.complete.&lt;anonymous@357:11&gt;

[electron/ai/llm-front-office/provider-gateway.cjs:357](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L357>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createLLMClient.complete](<provider-gateway.cjs.md#s-52f9a78e18c7a535>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| response | any | compiler-inferred | required |
| touch | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- request.onStage — external-or-dynamic-dispatch; [electron/ai/llm-front-office/provider-gateway.cjs:359](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L359>)
- (g.streaming ? consumeStream : consumeCompletion) — signature-only-candidate; [electron/ai/llm-front-office/provider-gateway.cjs:362](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L362>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:27](<../../../../../../../electron/ai/front-office-engine.test.cjs#L27>) — file-import-only; coverage not established.
- [electron/ai/front-office-evaluation.test.cjs:13](<../../../../../../../electron/ai/front-office-evaluation.test.cjs#L13>) — file-import-only; coverage not established.

<a id="s-9b77cb86cb8f8044"></a>

## gatewayHealth

[electron/ai/llm-front-office/provider-gateway.cjs:401](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L401>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Authenticated, loopback-only liveness check; no provider inference or process startup.

Purpose evidence: jsdoc.

Exported as: gatewayHealth ([electron/ai/llm-front-office/provider-gateway.cjs:1](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L1>)).

Lexical owner: [electron/ai/llm-front-office/provider-gateway.cjs](<provider-gateway.cjs.md#s-6bf33f0ff7ae3571>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| config | any | compiler-inferred | required |
| credentials | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [validateConfig](<experiment-contracts.cjs.md#s-3012ca16a371ad08>) — [electron/ai/llm-front-office/provider-gateway.cjs:402](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L402>)
- [OpenAIChatProvider.constructor](<../providers/openai-chat-provider.cjs.md#s-22c7dc3a72931ddb>) — [electron/ai/llm-front-office/provider-gateway.cjs:409](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L409>)
- [OpenAIChatProvider.request](<../providers/openai-chat-provider.cjs.md#s-b38b5e0af2267c91>) — [electron/ai/llm-front-office/provider-gateway.cjs:417](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L417>)

**Called by (statically resolved):**

- [FrontOfficeService.health](<service.cjs.md#s-7a3bf0a6b37163a3>) — [electron/ai/llm-front-office/service.cjs:161](<../../../../../../../electron/ai/llm-front-office/service.cjs#L161>)
- [main](<../../../scripts/front-office-benchmark.cjs.md#s-8f8223991922089c>) — [scripts/front-office-benchmark.cjs:229](<../../../../../../../scripts/front-office-benchmark.cjs#L229>)

Unresolved / external call sites: 1.

- config.gateway.baseUrl.replace — external-or-dynamic-dispatch; [electron/ai/llm-front-office/provider-gateway.cjs:414](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L414>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:27](<../../../../../../../electron/ai/front-office-engine.test.cjs#L27>) — file-import-only; coverage not established.
- [electron/ai/front-office-evaluation.test.cjs:13](<../../../../../../../electron/ai/front-office-evaluation.test.cjs#L13>) — file-import-only; coverage not established.

<a id="s-1ccd5cd4a7e558b4"></a>

## gatewayHealth.&lt;anonymous@417:50&gt;

[electron/ai/llm-front-office/provider-gateway.cjs:417](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L417>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [gatewayHealth](<provider-gateway.cjs.md#s-9b77cb86cb8f8044>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:27](<../../../../../../../electron/ai/front-office-engine.test.cjs#L27>) — file-import-only; coverage not established.
- [electron/ai/front-office-evaluation.test.cjs:13](<../../../../../../../electron/ai/front-office-evaluation.test.cjs#L13>) — file-import-only; coverage not established.
