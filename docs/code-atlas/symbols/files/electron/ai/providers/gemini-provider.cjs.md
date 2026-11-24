# electron/ai/providers/gemini-provider.cjs: symbols

[Atlas](<../../../../../README.md>) / [Model-provider adapters](<../../../../../modules/providers.md>) / [electron/ai/providers/gemini-provider.cjs:1](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/providers/gemini-provider.cjs](<gemini-provider.cjs.md#s-14d776d57578a7f0>) (Module)
- [modelName](<gemini-provider.cjs.md#s-223103d923012d3a>) (SchemaBinding)
- [messagesSchema](<gemini-provider.cjs.md#s-386c57ebd09ed911>) (SchemaBinding)
- [invalid](<gemini-provider.cjs.md#s-5b08da3dca5a8aa6>) (ArrowFunction)
- [remoteError](<gemini-provider.cjs.md#s-d090e13f3d76e2d3>) (FunctionDeclaration)
- [GeminiProvider](<gemini-provider.cjs.md#s-4e7a7efd6a2d6af1>) (ClassDeclaration)
- [GeminiProvider.constructor](<gemini-provider.cjs.md#s-80ad168d7d744b37>) (Constructor)
- [GeminiProvider.request](<gemini-provider.cjs.md#s-2e56134df44bde91>) (MethodDeclaration)
- [GeminiProvider.request.timeout](<gemini-provider.cjs.md#s-65cc3c8ea82469c8>) (ArrowFunction)
- [GeminiProvider.request.touch](<gemini-provider.cjs.md#s-703e5198cfd29278>) (ArrowFunction)
- [GeminiProvider.request.cancel](<gemini-provider.cjs.md#s-7f4adb8c7d49dc0e>) (ArrowFunction)
- [GeminiProvider.request.&lt;anonymous@169:44&gt;](<gemini-provider.cjs.md#s-088c08157ade78dd>) (ArrowFunction)
- [GeminiProvider.listModels](<gemini-provider.cjs.md#s-2be78d6f915a8524>) (MethodDeclaration)
- [GeminiProvider.listModels.&lt;anonymous@180:9&gt;](<gemini-provider.cjs.md#s-ffe0cfe158e12373>) (ArrowFunction)
- [GeminiProvider.getStatus](<gemini-provider.cjs.md#s-047d0d7cf7e60ad8>) (MethodDeclaration)
- [GeminiProvider.prepare](<gemini-provider.cjs.md#s-275cfad17bad8649>) (MethodDeclaration)
- [GeminiProvider.complete](<gemini-provider.cjs.md#s-edd5ba510cd7bdd1>) (MethodDeclaration)
- [GeminiProvider.complete.&lt;anonymous@273:30&gt;](<gemini-provider.cjs.md#s-12d86fa56f44a025>) (ArrowFunction)
- [GeminiProvider.complete.format](<gemini-provider.cjs.md#s-f1c47bd15e6fc946>) (SchemaBinding)
- [GeminiProvider.complete.&lt;anonymous@327:19&gt;](<gemini-provider.cjs.md#s-27e557815f71992c>) (ArrowFunction)
- [GeminiProvider.complete.&lt;anonymous@328:16&gt;](<gemini-provider.cjs.md#s-a8fd3f912a6ab9af>) (ArrowFunction)
- [GeminiProvider.complete.&lt;anonymous@343:7&gt;](<gemini-provider.cjs.md#s-e6d558afa5951380>) (ArrowFunction)
- [GeminiProvider.complete.&lt;anonymous@343:7&gt;.event](<gemini-provider.cjs.md#s-96bf3696053fd418>) (ArrowFunction)
- [GeminiProvider.complete.&lt;anonymous@343:7&gt;.&lt;anonymous@476:39&gt;](<gemini-provider.cjs.md#s-4c08d99c66ba796f>) (ArrowFunction)

<a id="s-14d776d57578a7f0"></a>

## electron/ai/providers/gemini-provider.cjs

[electron/ai/providers/gemini-provider.cjs:1](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L1>) · Module · production · [Model-provider adapters](<../../../../../modules/providers.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- require — module-loader; [electron/ai/providers/gemini-provider.cjs:1](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L1>)
- require — module-loader; [electron/ai/providers/gemini-provider.cjs:5](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L5>)
- require — module-loader; [electron/ai/providers/gemini-provider.cjs:12](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L12>)

**Related tests / acceptance harnesses:**

- [electron/ai/providers/gemini-provider.test.cjs:3](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L3>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:13](<../../../../../../../electron/ai/request-logger.test.cjs#L13>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:15](<../../../../../../../scripts/chat-live-acceptance.cjs#L15>) — file-import-only; coverage not established.

<a id="s-223103d923012d3a"></a>

## modelName

[electron/ai/providers/gemini-provider.cjs:16](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L16>) · SchemaBinding · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/providers/gemini-provider.cjs](<gemini-provider.cjs.md#s-14d776d57578a7f0>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- z .string() .max(200) .regex — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:16](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L16>)
- z .string() .max — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:16](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L16>)
- z .string — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:16](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L16>)

**Related tests / acceptance harnesses:**

- [electron/ai/providers/gemini-provider.test.cjs:3](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L3>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:13](<../../../../../../../electron/ai/request-logger.test.cjs#L13>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:15](<../../../../../../../scripts/chat-live-acceptance.cjs#L15>) — file-import-only; coverage not established.

<a id="s-386c57ebd09ed911"></a>

## messagesSchema

[electron/ai/providers/gemini-provider.cjs:20](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L20>) · SchemaBinding · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/providers/gemini-provider.cjs](<gemini-provider.cjs.md#s-14d776d57578a7f0>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 9.

- z .array( z .object({ role: z.enum(&#91;"system", "user", "assistant"&#93;), content: z.string().min(1).max(500000), }) .strict(), ) .min(2) .max — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:20](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L20>)
- z .array( z .object({ role: z.enum(&#91;"system", "user", "assistant"&#93;), content: z.string().min(1).max(500000), }) .strict(), ) .min — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:20](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L20>)
- z .array — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:20](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L20>)
- z .object({ role: z.enum(&#91;"system", "user", "assistant"&#93;), content: z.string().min(1).max(500000), }) .strict — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:22](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L22>)
- z .object — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:22](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L22>)
- z.enum — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:24](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L24>)
- z.string().min(1).max — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:25](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L25>)
- z.string().min — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:25](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L25>)
- 1 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/providers/gemini-provider.test.cjs:3](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L3>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:13](<../../../../../../../electron/ai/request-logger.test.cjs#L13>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:15](<../../../../../../../scripts/chat-live-acceptance.cjs#L15>) — file-import-only; coverage not established.

<a id="s-5b08da3dca5a8aa6"></a>

## invalid

[electron/ai/providers/gemini-provider.cjs:31](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L31>) · ArrowFunction · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/providers/gemini-provider.cjs](<gemini-provider.cjs.md#s-14d776d57578a7f0>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: ModelRuntimeError (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/providers/gemini-provider.cjs:32](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L32>)

**Called by (statically resolved):**

- [GeminiProvider.listModels.&lt;anonymous@180:9&gt;](<gemini-provider.cjs.md#s-ffe0cfe158e12373>) — [electron/ai/providers/gemini-provider.cjs:187](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L187>)
- [GeminiProvider.listModels.&lt;anonymous@180:9&gt;](<gemini-provider.cjs.md#s-ffe0cfe158e12373>) — [electron/ai/providers/gemini-provider.cjs:189](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L189>)
- [GeminiProvider.listModels.&lt;anonymous@180:9&gt;](<gemini-provider.cjs.md#s-ffe0cfe158e12373>) — [electron/ai/providers/gemini-provider.cjs:194](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L194>)
- [GeminiProvider.listModels.&lt;anonymous@180:9&gt;](<gemini-provider.cjs.md#s-ffe0cfe158e12373>) — [electron/ai/providers/gemini-provider.cjs:199](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L199>)
- [GeminiProvider.listModels](<gemini-provider.cjs.md#s-2be78d6f915a8524>) — [electron/ai/providers/gemini-provider.cjs:226](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L226>)
- [GeminiProvider.listModels](<gemini-provider.cjs.md#s-2be78d6f915a8524>) — [electron/ai/providers/gemini-provider.cjs:230](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L230>)
- [GeminiProvider.complete.&lt;anonymous@343:7&gt;](<gemini-provider.cjs.md#s-e6d558afa5951380>) — [electron/ai/providers/gemini-provider.cjs:347](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L347>)
- [GeminiProvider.complete.&lt;anonymous@343:7&gt;.event](<gemini-provider.cjs.md#s-96bf3696053fd418>) — [electron/ai/providers/gemini-provider.cjs:370](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L370>)
- [GeminiProvider.complete.&lt;anonymous@343:7&gt;.event](<gemini-provider.cjs.md#s-96bf3696053fd418>) — [electron/ai/providers/gemini-provider.cjs:379](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L379>)
- [GeminiProvider.complete.&lt;anonymous@343:7&gt;.event](<gemini-provider.cjs.md#s-96bf3696053fd418>) — [electron/ai/providers/gemini-provider.cjs:390](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L390>)
- [GeminiProvider.complete.&lt;anonymous@343:7&gt;](<gemini-provider.cjs.md#s-e6d558afa5951380>) — [electron/ai/providers/gemini-provider.cjs:412](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L412>)
- [GeminiProvider.complete.&lt;anonymous@343:7&gt;](<gemini-provider.cjs.md#s-e6d558afa5951380>) — [electron/ai/providers/gemini-provider.cjs:417](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L417>)
- [GeminiProvider.complete.&lt;anonymous@343:7&gt;](<gemini-provider.cjs.md#s-e6d558afa5951380>) — [electron/ai/providers/gemini-provider.cjs:421](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L421>)
- [GeminiProvider.complete.&lt;anonymous@343:7&gt;](<gemini-provider.cjs.md#s-e6d558afa5951380>) — [electron/ai/providers/gemini-provider.cjs:439](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L439>)
- [GeminiProvider.complete.&lt;anonymous@343:7&gt;](<gemini-provider.cjs.md#s-e6d558afa5951380>) — [electron/ai/providers/gemini-provider.cjs:452](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L452>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/providers/gemini-provider.test.cjs:3](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L3>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:13](<../../../../../../../electron/ai/request-logger.test.cjs#L13>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:15](<../../../../../../../scripts/chat-live-acceptance.cjs#L15>) — file-import-only; coverage not established.

<a id="s-d090e13f3d76e2d3"></a>

## remoteError

[electron/ai/providers/gemini-provider.cjs:37](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L37>) · FunctionDeclaration · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: remoteError ([electron/ai/providers/gemini-provider.cjs:1](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L1>)).

Lexical owner: [electron/ai/providers/gemini-provider.cjs](<gemini-provider.cjs.md#s-14d776d57578a7f0>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| status | any | compiler-inferred | required |
| retryAfter | any | compiler-inferred | required |

Returns: ModelRuntimeError (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/providers/gemini-provider.cjs:79](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L79>)

**Called by (statically resolved):**

- [GeminiProvider.request](<gemini-provider.cjs.md#s-2e56134df44bde91>) — [electron/ai/providers/gemini-provider.cjs:146](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L146>)
- [GeminiProvider.request](<gemini-provider.cjs.md#s-2e56134df44bde91>) — [electron/ai/providers/gemini-provider.cjs:148](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L148>)

Unresolved / external call sites: 8.

- Number — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:72](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L72>)
- Number.isFinite — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:73](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L73>)
- Math.ceil — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:74](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L74>)
- Date.parse — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:74](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L74>)
- Date.now — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:74](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L74>)
- Number.isFinite — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:76](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L76>)
- Math.max — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:77](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L77>)
- Math.min — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:77](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L77>)

**Related tests / acceptance harnesses:**

- [electron/ai/providers/gemini-provider.test.cjs:3](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L3>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:13](<../../../../../../../electron/ai/request-logger.test.cjs#L13>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:15](<../../../../../../../scripts/chat-live-acceptance.cjs#L15>) — file-import-only; coverage not established.

<a id="s-4e7a7efd6a2d6af1"></a>

## GeminiProvider

[electron/ai/providers/gemini-provider.cjs:89](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L89>) · ClassDeclaration · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: GeminiProvider ([electron/ai/providers/gemini-provider.cjs:1](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L1>)).

Lexical owner: [electron/ai/providers/gemini-provider.cjs](<gemini-provider.cjs.md#s-14d776d57578a7f0>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/providers/gemini-provider.test.cjs:3](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L3>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:13](<../../../../../../../electron/ai/request-logger.test.cjs#L13>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:15](<../../../../../../../scripts/chat-live-acceptance.cjs#L15>) — file-import-only; coverage not established.

<a id="s-80ad168d7d744b37"></a>

## GeminiProvider.constructor

[electron/ai/providers/gemini-provider.cjs:90](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L90>) · Constructor · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [GeminiProvider](<gemini-provider.cjs.md#s-4e7a7efd6a2d6af1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { credentials, fetchImpl = fetch } | { credentials: any; fetchImpl?: (url: any, init?: {}) =&gt; any; } | compiler-inferred | required |

Returns: GeminiProvider (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@13:108&gt;](<gemini-provider.test.cjs.md#s-05ea32750a6621da>) — [electron/ai/providers/gemini-provider.test.cjs:16](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L16>)
- [&lt;anonymous@72:94&gt;](<gemini-provider.test.cjs.md#s-16ece5fa0a1542aa>) — [electron/ai/providers/gemini-provider.test.cjs:74](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L74>)
- [&lt;anonymous@88:66&gt;](<gemini-provider.test.cjs.md#s-9e73bab42f9cd9c4>) — [electron/ai/providers/gemini-provider.test.cjs:96](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L96>)
- [&lt;anonymous@115:106&gt;](<gemini-provider.test.cjs.md#s-e86460c0cc469c46>) — [electron/ai/providers/gemini-provider.test.cjs:117](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L117>)
- [&lt;anonymous@171:92&gt;](<gemini-provider.test.cjs.md#s-5eb420993ddeb48e>) — [electron/ai/providers/gemini-provider.test.cjs:181](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L181>)
- [&lt;anonymous@201:58&gt;](<gemini-provider.test.cjs.md#s-e7d0b729599ea0a5>) — [electron/ai/providers/gemini-provider.test.cjs:204](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L204>)
- [&lt;anonymous@218:107&gt;](<gemini-provider.test.cjs.md#s-d7a2dfd263da2114>) — [electron/ai/providers/gemini-provider.test.cjs:226](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L226>)
- [&lt;anonymous@236:87&gt;](<gemini-provider.test.cjs.md#s-2c517e7b11453d8a>) — [electron/ai/providers/gemini-provider.test.cjs:238](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L238>)
- [&lt;anonymous@264:90&gt;](<gemini-provider.test.cjs.md#s-5270e1d70c362fc5>) — [electron/ai/providers/gemini-provider.test.cjs:265](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L265>)
- [&lt;anonymous@296:91&gt;](<gemini-provider.test.cjs.md#s-36c8ca7cc019cba3>) — [electron/ai/providers/gemini-provider.test.cjs:298](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L298>)
- [&lt;anonymous@316:70&gt;](<gemini-provider.test.cjs.md#s-5467ab392960497a>) — [electron/ai/providers/gemini-provider.test.cjs:319](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L319>)
- [&lt;anonymous@154:111&gt;](<../request-logger.test.cjs.md#s-af56a97d64a0db63>) — [electron/ai/request-logger.test.cjs:216](<../../../../../../../electron/ai/request-logger.test.cjs#L216>)
- [main](<../../../scripts/chat-live-acceptance.cjs.md#s-37e0176fb42530c3>) — [scripts/chat-live-acceptance.cjs:51](<../../../../../../../scripts/chat-live-acceptance.cjs#L51>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/providers/gemini-provider.test.cjs:16](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L16>) — static-call-site; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:74](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L74>) — static-call-site; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:96](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L96>) — static-call-site; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:117](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L117>) — static-call-site; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:181](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L181>) — static-call-site; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:204](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L204>) — static-call-site; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:226](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L226>) — static-call-site; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:238](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L238>) — static-call-site; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:265](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L265>) — static-call-site; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:298](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L298>) — static-call-site; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:319](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L319>) — static-call-site; coverage not established.
- [electron/ai/request-logger.test.cjs:216](<../../../../../../../electron/ai/request-logger.test.cjs#L216>) — static-call-site; coverage not established.
- [scripts/chat-live-acceptance.cjs:51](<../../../../../../../scripts/chat-live-acceptance.cjs#L51>) — static-call-site; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:3](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L3>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:13](<../../../../../../../electron/ai/request-logger.test.cjs#L13>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:15](<../../../../../../../scripts/chat-live-acceptance.cjs#L15>) — file-import-only; coverage not established.

<a id="s-2e56134df44bde91"></a>

## GeminiProvider.request

[electron/ai/providers/gemini-provider.cjs:95](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L95>) · MethodDeclaration · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [GeminiProvider](<gemini-provider.cjs.md#s-4e7a7efd6a2d6af1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| resource | any | compiler-inferred | required |
| init | any | compiler-inferred | required |
| operation | any | compiler-inferred | required |
| { signal, timeoutMs = 15000, absoluteMs = timeoutMs, onDiagnostic } | { timeoutMs?: number; absoluteMs?: any; } | compiler-inferred | optional, default present |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [GeminiProvider.request.touch](<gemini-provider.cjs.md#s-703e5198cfd29278>) — [electron/ai/providers/gemini-provider.cjs:120](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L120>)
- [remoteError](<gemini-provider.cjs.md#s-d090e13f3d76e2d3>) — [electron/ai/providers/gemini-provider.cjs:146](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L146>)
- [remoteError](<gemini-provider.cjs.md#s-d090e13f3d76e2d3>) — [electron/ai/providers/gemini-provider.cjs:148](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L148>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/providers/gemini-provider.cjs:155](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L155>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/providers/gemini-provider.cjs:160](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L160>)

**Called by (statically resolved):**

- [GeminiProvider.listModels](<gemini-provider.cjs.md#s-2be78d6f915a8524>) — [electron/ai/providers/gemini-provider.cjs:177](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L177>)
- [GeminiProvider.complete](<gemini-provider.cjs.md#s-edd5ba510cd7bdd1>) — [electron/ai/providers/gemini-provider.cjs:340](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L340>)
- [main.turn](<../../../scripts/chat-live-acceptance.cjs.md#s-5c02108372dfce52>) — [scripts/chat-live-acceptance.cjs:133](<../../../../../../../scripts/chat-live-acceptance.cjs#L133>)
- [main](<../../../scripts/chat-live-acceptance.cjs.md#s-37e0176fb42530c3>) — [scripts/chat-live-acceptance.cjs:165](<../../../../../../../scripts/chat-live-acceptance.cjs#L165>)

Unresolved / external call sites: 23.

- AbortController — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:101](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L101>)
- setTimeout — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:114](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L114>)
- signal?.addEventListener — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:116](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L116>)
- signal?.throwIfAborted — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:119](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L119>)
- onDiagnostic — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:121](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L121>)
- this.credentials.get — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:122](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L122>)
- onDiagnostic — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:123](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L123>)
- controller.signal.throwIfAborted — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:124](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L124>)
- 15 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [scripts/chat-live-acceptance.cjs:133](<../../../../../../../scripts/chat-live-acceptance.cjs#L133>) — static-call-site; coverage not established.
- [scripts/chat-live-acceptance.cjs:165](<../../../../../../../scripts/chat-live-acceptance.cjs#L165>) — static-call-site; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:3](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L3>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:13](<../../../../../../../electron/ai/request-logger.test.cjs#L13>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:15](<../../../../../../../scripts/chat-live-acceptance.cjs#L15>) — file-import-only; coverage not established.

<a id="s-65cc3c8ea82469c8"></a>

## GeminiProvider.request.timeout

[electron/ai/providers/gemini-provider.cjs:102](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L102>) · ArrowFunction · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [GeminiProvider.request](<gemini-provider.cjs.md#s-2e56134df44bde91>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/providers/gemini-provider.cjs:104](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L104>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- controller.abort — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:103](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L103>)

**Related tests / acceptance harnesses:**

- [electron/ai/providers/gemini-provider.test.cjs:3](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L3>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:13](<../../../../../../../electron/ai/request-logger.test.cjs#L13>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:15](<../../../../../../../scripts/chat-live-acceptance.cjs#L15>) — file-import-only; coverage not established.

<a id="s-703e5198cfd29278"></a>

## GeminiProvider.request.touch

[electron/ai/providers/gemini-provider.cjs:110](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L110>) · ArrowFunction · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [GeminiProvider.request](<gemini-provider.cjs.md#s-2e56134df44bde91>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [GeminiProvider.request](<gemini-provider.cjs.md#s-2e56134df44bde91>) — [electron/ai/providers/gemini-provider.cjs:120](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L120>)

Unresolved / external call sites: 2.

- clearTimeout — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:111](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L111>)
- setTimeout — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:112](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L112>)

**Related tests / acceptance harnesses:**

- [electron/ai/providers/gemini-provider.test.cjs:3](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L3>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:13](<../../../../../../../electron/ai/request-logger.test.cjs#L13>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:15](<../../../../../../../scripts/chat-live-acceptance.cjs#L15>) — file-import-only; coverage not established.

<a id="s-7f4adb8c7d49dc0e"></a>

## GeminiProvider.request.cancel

[electron/ai/providers/gemini-provider.cjs:115](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L115>) · ArrowFunction · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [GeminiProvider.request](<gemini-provider.cjs.md#s-2e56134df44bde91>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- controller.abort — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:115](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L115>)

**Related tests / acceptance harnesses:**

- [electron/ai/providers/gemini-provider.test.cjs:3](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L3>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:13](<../../../../../../../electron/ai/request-logger.test.cjs#L13>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:15](<../../../../../../../scripts/chat-live-acceptance.cjs#L15>) — file-import-only; coverage not established.

<a id="s-088c08157ade78dd"></a>

## GeminiProvider.request.&lt;anonymous@169:44&gt;

[electron/ai/providers/gemini-provider.cjs:169](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L169>) · ArrowFunction · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [GeminiProvider.request](<gemini-provider.cjs.md#s-2e56134df44bde91>).

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

- [electron/ai/providers/gemini-provider.test.cjs:3](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L3>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:13](<../../../../../../../electron/ai/request-logger.test.cjs#L13>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:15](<../../../../../../../scripts/chat-live-acceptance.cjs#L15>) — file-import-only; coverage not established.

<a id="s-2be78d6f915a8524"></a>

## GeminiProvider.listModels

[electron/ai/providers/gemini-provider.cjs:172](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L172>) · MethodDeclaration · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [GeminiProvider](<gemini-provider.cjs.md#s-4e7a7efd6a2d6af1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { signal } | {} | compiler-inferred | optional, default present |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [GeminiProvider.request](<gemini-provider.cjs.md#s-2e56134df44bde91>) — [electron/ai/providers/gemini-provider.cjs:177](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L177>)
- [invalid](<gemini-provider.cjs.md#s-5b08da3dca5a8aa6>) — [electron/ai/providers/gemini-provider.cjs:226](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L226>)
- [invalid](<gemini-provider.cjs.md#s-5b08da3dca5a8aa6>) — [electron/ai/providers/gemini-provider.cjs:230](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L230>)

**Called by (statically resolved):**

- [GeminiProvider.getStatus](<gemini-provider.cjs.md#s-047d0d7cf7e60ad8>) — [electron/ai/providers/gemini-provider.cjs:249](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L249>)
- [&lt;anonymous@236:87&gt;](<gemini-provider.test.cjs.md#s-2c517e7b11453d8a>) — [electron/ai/providers/gemini-provider.test.cjs:258](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L258>)
- [main](<../../../scripts/chat-live-acceptance.cjs.md#s-37e0176fb42530c3>) — [scripts/chat-live-acceptance.cjs:147](<../../../../../../../scripts/chat-live-acceptance.cjs#L147>)

Unresolved / external call sites: 9.

- Set — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:175](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L175>)
- encodeURIComponent — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:178](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L178>)
- model.name.slice — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:205](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L205>)
- name.startsWith — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:208](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L208>)
- /image&#124;tts&#124;audio&#124;live&#124;robotics&#124;computer-use/i.test — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:209](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L209>)
- model.supportedGenerationMethods.includes — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:210](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L210>)
- models.push — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:215](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L215>)
- seen.has — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:226](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L226>)
- 1 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/providers/gemini-provider.test.cjs:258](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L258>) — static-call-site; coverage not established.
- [scripts/chat-live-acceptance.cjs:147](<../../../../../../../scripts/chat-live-acceptance.cjs#L147>) — static-call-site; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:3](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L3>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:13](<../../../../../../../electron/ai/request-logger.test.cjs#L13>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:15](<../../../../../../../scripts/chat-live-acceptance.cjs#L15>) — file-import-only; coverage not established.

<a id="s-ffe0cfe158e12373"></a>

## GeminiProvider.listModels.&lt;anonymous@180:9&gt;

[electron/ai/providers/gemini-provider.cjs:180](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L180>) · ArrowFunction · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [GeminiProvider.listModels](<gemini-provider.cjs.md#s-2be78d6f915a8524>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| response | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invalid](<gemini-provider.cjs.md#s-5b08da3dca5a8aa6>) — [electron/ai/providers/gemini-provider.cjs:187](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L187>)
- [invalid](<gemini-provider.cjs.md#s-5b08da3dca5a8aa6>) — [electron/ai/providers/gemini-provider.cjs:189](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L189>)
- [invalid](<gemini-provider.cjs.md#s-5b08da3dca5a8aa6>) — [electron/ai/providers/gemini-provider.cjs:194](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L194>)
- [parse](<../../shared/validation.cjs.md#s-f29367528a73f24d>) — [electron/ai/providers/gemini-provider.cjs:197](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L197>)
- [invalid](<gemini-provider.cjs.md#s-5b08da3dca5a8aa6>) — [electron/ai/providers/gemini-provider.cjs:199](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L199>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- TextDecoder — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:182](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L182>)
- decoder.decode — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:185](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L185>)
- Buffer.byteLength — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:189](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L189>)
- decoder.decode — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:192](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L192>)
- JSON.parse — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:197](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L197>)

**Related tests / acceptance harnesses:**

- [electron/ai/providers/gemini-provider.test.cjs:3](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L3>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:13](<../../../../../../../electron/ai/request-logger.test.cjs#L13>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:15](<../../../../../../../scripts/chat-live-acceptance.cjs#L15>) — file-import-only; coverage not established.

<a id="s-047d0d7cf7e60ad8"></a>

## GeminiProvider.getStatus

[electron/ai/providers/gemini-provider.cjs:232](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L232>) · MethodDeclaration · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [GeminiProvider](<gemini-provider.cjs.md#s-4e7a7efd6a2d6af1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [GeminiProvider.listModels](<gemini-provider.cjs.md#s-2be78d6f915a8524>) — [electron/ai/providers/gemini-provider.cjs:249](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L249>)
- [serializeModelError](<../../shared/runtime-errors.cjs.md#s-0a992a8fcd9686e4>) — [electron/ai/providers/gemini-provider.cjs:257](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L257>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- this.credentials.status — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:235](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L235>)

**Related tests / acceptance harnesses:**

- [electron/ai/providers/gemini-provider.test.cjs:3](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L3>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:13](<../../../../../../../electron/ai/request-logger.test.cjs#L13>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:15](<../../../../../../../scripts/chat-live-acceptance.cjs#L15>) — file-import-only; coverage not established.

<a id="s-275cfad17bad8649"></a>

## GeminiProvider.prepare

[electron/ai/providers/gemini-provider.cjs:262](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L262>) · MethodDeclaration · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [GeminiProvider](<gemini-provider.cjs.md#s-4e7a7efd6a2d6af1>).

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

- signal?.throwIfAborted — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:263](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L263>)
- this.credentials.get — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:264](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L264>)

**Related tests / acceptance harnesses:**

- [electron/ai/providers/gemini-provider.test.cjs:3](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L3>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:13](<../../../../../../../electron/ai/request-logger.test.cjs#L13>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:15](<../../../../../../../scripts/chat-live-acceptance.cjs#L15>) — file-import-only; coverage not established.

<a id="s-edd5ba510cd7bdd1"></a>

## GeminiProvider.complete

[electron/ai/providers/gemini-provider.cjs:267](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L267>) · MethodDeclaration · production · [Model-provider adapters](<../../../../../modules/providers.md>)

Completes the existing answer/analysis formats or the allowlisted assignment protocol through Gemini's JSON schema interface.

Purpose evidence: jsdoc.

Lexical owner: [GeminiProvider](<gemini-provider.cjs.md#s-4e7a7efd6a2d6af1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| request | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [parse](<../../shared/validation.cjs.md#s-f29367528a73f24d>) — [electron/ai/providers/gemini-provider.cjs:268](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L268>)
- [parse](<../../shared/validation.cjs.md#s-f29367528a73f24d>) — [electron/ai/providers/gemini-provider.cjs:269](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L269>)
- [parse](<../../shared/validation.cjs.md#s-f29367528a73f24d>) — [electron/ai/providers/gemini-provider.cjs:270](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L270>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/providers/gemini-provider.cjs:275](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L275>)
- [GeminiProvider.request](<gemini-provider.cjs.md#s-2e56134df44bde91>) — [electron/ai/providers/gemini-provider.cjs:340](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L340>)

**Called by (statically resolved):**

- [&lt;anonymous@13:108&gt;](<gemini-provider.test.cjs.md#s-05ea32750a6621da>) — [electron/ai/providers/gemini-provider.test.cjs:26](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L26>)
- [&lt;anonymous@72:94&gt;](<gemini-provider.test.cjs.md#s-16ece5fa0a1542aa>) — [electron/ai/providers/gemini-provider.test.cjs:84](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L84>)
- [&lt;anonymous@88:66&gt;](<gemini-provider.test.cjs.md#s-9e73bab42f9cd9c4>) — [electron/ai/providers/gemini-provider.test.cjs:111](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L111>)
- [&lt;anonymous@115:106&gt;](<gemini-provider.test.cjs.md#s-e86460c0cc469c46>) — [electron/ai/providers/gemini-provider.test.cjs:154](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L154>)
- [&lt;anonymous@115:106&gt;](<gemini-provider.test.cjs.md#s-e86460c0cc469c46>) — [electron/ai/providers/gemini-provider.test.cjs:167](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L167>)
- [&lt;anonymous@171:92&gt;](<gemini-provider.test.cjs.md#s-5eb420993ddeb48e>) — [electron/ai/providers/gemini-provider.test.cjs:191](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L191>)
- [&lt;anonymous@201:58&gt;](<gemini-provider.test.cjs.md#s-e7d0b729599ea0a5>) — [electron/ai/providers/gemini-provider.test.cjs:211](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L211>)
- [&lt;anonymous@218:107&gt;](<gemini-provider.test.cjs.md#s-d7a2dfd263da2114>) — [electron/ai/providers/gemini-provider.test.cjs:230](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L230>)
- [&lt;anonymous@264:90&gt;](<gemini-provider.test.cjs.md#s-5270e1d70c362fc5>) — [electron/ai/providers/gemini-provider.test.cjs:282](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L282>)
- [&lt;anonymous@264:90&gt;](<gemini-provider.test.cjs.md#s-5270e1d70c362fc5>) — [electron/ai/providers/gemini-provider.test.cjs:293](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L293>)
- [&lt;anonymous@296:91&gt;](<gemini-provider.test.cjs.md#s-36c8ca7cc019cba3>) — [electron/ai/providers/gemini-provider.test.cjs:308](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L308>)
- [&lt;anonymous@296:91&gt;](<gemini-provider.test.cjs.md#s-36c8ca7cc019cba3>) — [electron/ai/providers/gemini-provider.test.cjs:310](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L310>)
- [&lt;anonymous@316:70&gt;](<gemini-provider.test.cjs.md#s-5467ab392960497a>) — [electron/ai/providers/gemini-provider.test.cjs:323](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L323>)

Unresolved / external call sites: 13.

- messages.slice(1).some — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:273](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L273>)
- messages.slice — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:273](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L273>)
- require — module-loader; [electron/ai/providers/gemini-provider.cjs:279](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L279>)
- require — module-loader; [electron/ai/providers/gemini-provider.cjs:280](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L280>)
- messages.slice — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:318](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L318>)
- contents.at — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:320](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L320>)
- contents.at(-1).parts.push — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:321](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L321>)
- contents.at — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:321](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L321>)
- 5 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/providers/gemini-provider.test.cjs:26](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L26>) — static-call-site; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:84](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L84>) — static-call-site; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:111](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L111>) — static-call-site; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:154](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L154>) — static-call-site; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:167](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L167>) — static-call-site; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:191](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L191>) — static-call-site; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:211](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L211>) — static-call-site; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:230](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L230>) — static-call-site; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:282](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L282>) — static-call-site; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:293](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L293>) — static-call-site; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:308](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L308>) — static-call-site; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:310](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L310>) — static-call-site; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:323](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L323>) — static-call-site; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:3](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L3>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:13](<../../../../../../../electron/ai/request-logger.test.cjs#L13>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:15](<../../../../../../../scripts/chat-live-acceptance.cjs#L15>) — file-import-only; coverage not established.

<a id="s-12d86fa56f44a025"></a>

## GeminiProvider.complete.&lt;anonymous@273:30&gt;

[electron/ai/providers/gemini-provider.cjs:273](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L273>) · ArrowFunction · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [GeminiProvider.complete](<gemini-provider.cjs.md#s-edd5ba510cd7bdd1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| m | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/providers/gemini-provider.test.cjs:3](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L3>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:13](<../../../../../../../electron/ai/request-logger.test.cjs#L13>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:15](<../../../../../../../scripts/chat-live-acceptance.cjs#L15>) — file-import-only; coverage not established.

<a id="s-f1c47bd15e6fc946"></a>

## GeminiProvider.complete.format

[electron/ai/providers/gemini-provider.cjs:281](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L281>) · SchemaBinding · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [GeminiProvider.complete](<gemini-provider.cjs.md#s-edd5ba510cd7bdd1>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

- [isPlanFormat](<../dataset-planner.cjs.md#s-6b924db4a2611106>) — [electron/ai/providers/gemini-provider.cjs:282](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L282>)
- [isStatisticsFormat](<../statistics.cjs.md#s-2efa6955eff65641>) — [electron/ai/providers/gemini-provider.cjs:283](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L283>)
- [isEntityProtocolFormat](<../agents/entity-agent-protocol.cjs.md#s-72db01d3c7bc580d>) — [electron/ai/providers/gemini-provider.cjs:285](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L285>)
- [parse](<../../shared/validation.cjs.md#s-f29367528a73f24d>) — [electron/ai/providers/gemini-provider.cjs:289](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L289>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 23.

- require — module-loader; [electron/ai/providers/gemini-provider.cjs:285](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L285>)
- z .object({ type: z.literal("object"), properties: z .object({ citations: z .object({ type: z.literal("array"), items: z.object({ type: z.literal("string") }).strict(), maxItems: z — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:290](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L290>)
- z .object — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:290](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L290>)
- z.literal — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:292](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L292>)
- z .object({ citations: z .object({ type: z.literal("array"), items: z.object({ type: z.literal("string") }).strict(), maxItems: z.literal(32), }) .strict() .optional(), answer: z . — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:293](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L293>)
- z .object — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:293](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L293>)
- z .object({ type: z.literal("array"), items: z.object({ type: z.literal("string") }).strict(), maxItems: z.literal(32), }) .strict() .optional — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:295](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L295>)
- z .object({ type: z.literal("array"), items: z.object({ type: z.literal("string") }).strict(), maxItems: z.literal(32), }) .strict — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:295](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L295>)
- 15 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/providers/gemini-provider.test.cjs:3](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L3>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:13](<../../../../../../../electron/ai/request-logger.test.cjs#L13>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:15](<../../../../../../../scripts/chat-live-acceptance.cjs#L15>) — file-import-only; coverage not established.

<a id="s-27e557815f71992c"></a>

## GeminiProvider.complete.&lt;anonymous@327:19&gt;

[electron/ai/providers/gemini-provider.cjs:327](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L327>) · ArrowFunction · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [GeminiProvider.complete](<gemini-provider.cjs.md#s-edd5ba510cd7bdd1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| m | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/providers/gemini-provider.test.cjs:3](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L3>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:13](<../../../../../../../electron/ai/request-logger.test.cjs#L13>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:15](<../../../../../../../scripts/chat-live-acceptance.cjs#L15>) — file-import-only; coverage not established.

<a id="s-a8fd3f912a6ab9af"></a>

## GeminiProvider.complete.&lt;anonymous@328:16&gt;

[electron/ai/providers/gemini-provider.cjs:328](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L328>) · ArrowFunction · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [GeminiProvider.complete](<gemini-provider.cjs.md#s-edd5ba510cd7bdd1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| m | any | compiler-inferred | required |

Returns: { text: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/providers/gemini-provider.test.cjs:3](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L3>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:13](<../../../../../../../electron/ai/request-logger.test.cjs#L13>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:15](<../../../../../../../scripts/chat-live-acceptance.cjs#L15>) — file-import-only; coverage not established.

<a id="s-e6d558afa5951380"></a>

## GeminiProvider.complete.&lt;anonymous@343:7&gt;

[electron/ai/providers/gemini-provider.cjs:343](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L343>) · ArrowFunction · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [GeminiProvider.complete](<gemini-provider.cjs.md#s-edd5ba510cd7bdd1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| response | any | compiler-inferred | required |
| touch | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invalid](<gemini-provider.cjs.md#s-5b08da3dca5a8aa6>) — [electron/ai/providers/gemini-provider.cjs:347](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L347>)
- [invalid](<gemini-provider.cjs.md#s-5b08da3dca5a8aa6>) — [electron/ai/providers/gemini-provider.cjs:412](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L412>)
- [invalid](<gemini-provider.cjs.md#s-5b08da3dca5a8aa6>) — [electron/ai/providers/gemini-provider.cjs:417](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L417>)
- [invalid](<gemini-provider.cjs.md#s-5b08da3dca5a8aa6>) — [electron/ai/providers/gemini-provider.cjs:421](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L421>)
- [GeminiProvider.complete.&lt;anonymous@343:7&gt;.event](<gemini-provider.cjs.md#s-96bf3696053fd418>) — [electron/ai/providers/gemini-provider.cjs:427](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L427>)
- [invalid](<gemini-provider.cjs.md#s-5b08da3dca5a8aa6>) — [electron/ai/providers/gemini-provider.cjs:439](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L439>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/providers/gemini-provider.cjs:442](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L442>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/providers/gemini-provider.cjs:447](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L447>)
- [invalid](<gemini-provider.cjs.md#s-5b08da3dca5a8aa6>) — [electron/ai/providers/gemini-provider.cjs:452](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L452>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 27.

- response.headers.get("content-type")?.includes — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:345](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L345>)
- response.headers.get — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:345](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L345>)
- request.onDiagnostic — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:348](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L348>)
- response.body.getReader — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:349](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L349>)
- TextDecoder — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:350](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L350>)
- reader.read — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:407](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L407>)
- decoder.decode — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:410](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L410>)
- decoder.decode — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:419](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L419>)
- 19 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/providers/gemini-provider.test.cjs:3](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L3>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:13](<../../../../../../../electron/ai/request-logger.test.cjs#L13>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:15](<../../../../../../../scripts/chat-live-acceptance.cjs#L15>) — file-import-only; coverage not established.

<a id="s-96bf3696053fd418"></a>

## GeminiProvider.complete.&lt;anonymous@343:7&gt;.event

[electron/ai/providers/gemini-provider.cjs:360](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L360>) · ArrowFunction · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [GeminiProvider.complete.&lt;anonymous@343:7&gt;](<gemini-provider.cjs.md#s-e6d558afa5951380>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [parse](<../../shared/validation.cjs.md#s-f29367528a73f24d>) — [electron/ai/providers/gemini-provider.cjs:364](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L364>)
- [invalid](<gemini-provider.cjs.md#s-5b08da3dca5a8aa6>) — [electron/ai/providers/gemini-provider.cjs:370](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L370>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/providers/gemini-provider.cjs:374](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L374>)
- [invalid](<gemini-provider.cjs.md#s-5b08da3dca5a8aa6>) — [electron/ai/providers/gemini-provider.cjs:379](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L379>)
- [invalid](<gemini-provider.cjs.md#s-5b08da3dca5a8aa6>) — [electron/ai/providers/gemini-provider.cjs:390](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L390>)

**Called by (statically resolved):**

- [GeminiProvider.complete.&lt;anonymous@343:7&gt;](<gemini-provider.cjs.md#s-e6d558afa5951380>) — [electron/ai/providers/gemini-provider.cjs:427](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L427>)

Unresolved / external call sites: 9.

- JSON.parse — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:366](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L366>)
- data.join — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:366](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L366>)
- request.onDiagnostic — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:383](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L383>)
- request.onDiagnostic — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:392](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L392>)
- Math.round — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:396](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L396>)
- performance.now — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:396](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L396>)
- touch — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:397](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L397>)
- request.onGenerationStarted — external-or-dynamic-dispatch; [electron/ai/providers/gemini-provider.cjs:398](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L398>)
- 1 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/providers/gemini-provider.test.cjs:3](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L3>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:13](<../../../../../../../electron/ai/request-logger.test.cjs#L13>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:15](<../../../../../../../scripts/chat-live-acceptance.cjs#L15>) — file-import-only; coverage not established.

<a id="s-4c08d99c66ba796f"></a>

## GeminiProvider.complete.&lt;anonymous@343:7&gt;.&lt;anonymous@476:39&gt;

[electron/ai/providers/gemini-provider.cjs:476](<../../../../../../../electron/ai/providers/gemini-provider.cjs#L476>) · ArrowFunction · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [GeminiProvider.complete.&lt;anonymous@343:7&gt;](<gemini-provider.cjs.md#s-e6d558afa5951380>).

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

- [electron/ai/providers/gemini-provider.test.cjs:3](<../../../../../../../electron/ai/providers/gemini-provider.test.cjs#L3>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:13](<../../../../../../../electron/ai/request-logger.test.cjs#L13>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:15](<../../../../../../../scripts/chat-live-acceptance.cjs#L15>) — file-import-only; coverage not established.
