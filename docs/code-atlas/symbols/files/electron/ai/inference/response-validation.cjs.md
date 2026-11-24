# electron/ai/inference/response-validation.cjs: symbols

[Atlas](<../../../../../README.md>) / [Retained AI runtime](<../../../../../modules/ai-runtime.md>) / [electron/ai/inference/response-validation.cjs:1](<../../../../../../../electron/ai/inference/response-validation.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/inference/response-validation.cjs](<response-validation.cjs.md#s-49967f56693c768c>) (Module)
- [planningOnly](<response-validation.cjs.md#s-4c64fc5cba521870>) (FunctionDeclaration)
- [validateAnswer](<response-validation.cjs.md#s-21e2e91befa4c26f>) (FunctionDeclaration)
- [validateAnswer.&lt;anonymous@18:29&gt;](<response-validation.cjs.md#s-0fffdff23ab9a730>) (ArrowFunction)
- [validateAnswer.&lt;anonymous@49:9&gt;](<response-validation.cjs.md#s-864aed4d57826e6f>) (ArrowFunction)
- [validateAnswer.&lt;anonymous@49:9&gt;.&lt;anonymous@51:25&gt;](<response-validation.cjs.md#s-44a3d3158aa9dd49>) (ArrowFunction)
- [validateAnswer.normalize](<response-validation.cjs.md#s-5eb884ff4a863380>) (ArrowFunction)
- [validateAnswer.&lt;anonymous@73:7&gt;](<response-validation.cjs.md#s-0d65786249846e72>) (ArrowFunction)
- [answerPrefix](<response-validation.cjs.md#s-3de3a3c0b8fa59ff>) (FunctionDeclaration)

<a id="s-49967f56693c768c"></a>

## electron/ai/inference/response-validation.cjs

[electron/ai/inference/response-validation.cjs:1](<../../../../../../../electron/ai/inference/response-validation.cjs#L1>) · Module · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- require — module-loader; [electron/ai/inference/response-validation.cjs:1](<../../../../../../../electron/ai/inference/response-validation.cjs#L1>)

**Related tests / acceptance harnesses:**

- [electron/ai/context-box-store.test.cjs:10](<../../../../../../../electron/ai/context-box-store.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:9](<../../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:5](<../../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L5>) — file-import-only; coverage not established.

<a id="s-4c64fc5cba521870"></a>

## planningOnly

[electron/ai/inference/response-validation.cjs:3](<../../../../../../../electron/ai/inference/response-validation.cjs#L3>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: planningOnly ([electron/ai/inference/response-validation.cjs:1](<../../../../../../../electron/ai/inference/response-validation.cjs#L1>)).

Lexical owner: [electron/ai/inference/response-validation.cjs](<response-validation.cjs.md#s-49967f56693c768c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| text | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [validateAnswer](<response-validation.cjs.md#s-21e2e91befa4c26f>) — [electron/ai/inference/response-validation.cjs:21](<../../../../../../../electron/ai/inference/response-validation.cjs#L21>)
- [validateAnswer](<response-validation.cjs.md#s-21e2e91befa4c26f>) — [electron/ai/inference/response-validation.cjs:38](<../../../../../../../electron/ai/inference/response-validation.cjs#L38>)
- [answerPrefix](<response-validation.cjs.md#s-3de3a3c0b8fa59ff>) — [electron/ai/inference/response-validation.cjs:107](<../../../../../../../electron/ai/inference/response-validation.cjs#L107>)

Unresolved / external call sites: 2.

- /^(?:&lt;think&gt;&#124;(?:okay&#91;, .&#93;*&#124;let me )?(?:i (?:need to&#124;will&#124;should&#124;must) &#124;first,? i &#124;we need to ))/i.test — external-or-dynamic-dispatch; [electron/ai/inference/response-validation.cjs:4](<../../../../../../../electron/ai/inference/response-validation.cjs#L4>)
- text.trim — external-or-dynamic-dispatch; [electron/ai/inference/response-validation.cjs:5](<../../../../../../../electron/ai/inference/response-validation.cjs#L5>)

**Related tests / acceptance harnesses:**

- [electron/ai/context-box-store.test.cjs:10](<../../../../../../../electron/ai/context-box-store.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:9](<../../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:5](<../../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L5>) — file-import-only; coverage not established.

<a id="s-21e2e91befa4c26f"></a>

## validateAnswer

[electron/ai/inference/response-validation.cjs:9](<../../../../../../../electron/ai/inference/response-validation.cjs#L9>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: validateAnswer ([electron/ai/inference/response-validation.cjs:1](<../../../../../../../electron/ai/inference/response-validation.cjs#L1>)).

Lexical owner: [electron/ai/inference/response-validation.cjs](<response-validation.cjs.md#s-49967f56693c768c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| response | any | compiler-inferred | required |
| question | string | compiler-inferred | optional, default present |
| history | {} | compiler-inferred | optional, default present |
| sources | {} | compiler-inferred | optional, default present |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [planningOnly](<response-validation.cjs.md#s-4c64fc5cba521870>) — [electron/ai/inference/response-validation.cjs:21](<../../../../../../../electron/ai/inference/response-validation.cjs#L21>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/inference/response-validation.cjs:26](<../../../../../../../electron/ai/inference/response-validation.cjs#L26>)
- [planningOnly](<response-validation.cjs.md#s-4c64fc5cba521870>) — [electron/ai/inference/response-validation.cjs:38](<../../../../../../../electron/ai/inference/response-validation.cjs#L38>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/inference/response-validation.cjs:54](<../../../../../../../electron/ai/inference/response-validation.cjs#L54>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/inference/response-validation.cjs:80](<../../../../../../../electron/ai/inference/response-validation.cjs#L80>)

**Called by (statically resolved):**

- [&lt;anonymous@113:71&gt;](<../context-box-store.test.cjs.md#s-06479660bb0ddfb9>) — [electron/ai/context-box-store.test.cjs:115](<../../../../../../../electron/ai/context-box-store.test.cjs#L115>)
- [&lt;anonymous@113:71&gt;.&lt;anonymous@127:5&gt;](<../context-box-store.test.cjs.md#s-bf5c6f2205813069>) — [electron/ai/context-box-store.test.cjs:128](<../../../../../../../electron/ai/context-box-store.test.cjs#L128>)
- [checkRemoteModel](<../model-check.cjs.md#s-e84d234a40a5e24b>) — [electron/ai/model-check.cjs:37](<../../../../../../../electron/ai/model-check.cjs#L37>)
- [createContextOrchestrator.run.validate](<../orchestrator.cjs.md#s-cebcbfad4de2e284>) — [electron/ai/orchestrator.cjs:780](<../../../../../../../electron/ai/orchestrator.cjs#L780>)
- [&lt;anonymous@53:79&gt;](<../providers/nvidia-provider.test.cjs.md#s-47435b23b8ee7bf0>) — [electron/ai/providers/nvidia-provider.test.cjs:72](<../../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L72>)
- [&lt;anonymous@77:80&gt;.&lt;anonymous@84:17&gt;](<../providers/nvidia-provider.test.cjs.md#s-f13b87fc8f40f4b4>) — [electron/ai/providers/nvidia-provider.test.cjs:84](<../../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L84>)
- [&lt;anonymous@103:116&gt;](<../providers/nvidia-provider.test.cjs.md#s-20c7dfb720a26775>) — [electron/ai/providers/nvidia-provider.test.cjs:127](<../../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L127>)
- [&lt;anonymous@167:91&gt;](<../providers/nvidia-provider.test.cjs.md#s-a3f277730f90913f>) — [electron/ai/providers/nvidia-provider.test.cjs:214](<../../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L214>)
- [OpenAIChatProvider.probe](<../providers/openai-chat-provider.cjs.md#s-c133d3057fb7c65d>) — [electron/ai/providers/openai-chat-provider.cjs:298](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L298>)
- [&lt;anonymous@132:120&gt;](<../providers/openrouter-provider.test.cjs.md#s-3ccc130183e56e7c>) — [electron/ai/providers/openrouter-provider.test.cjs:159](<../../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L159>)

Unresolved / external call sites: 19.

- JSON.parse — external-or-dynamic-dispatch; [electron/ai/inference/response-validation.cjs:12](<../../../../../../../electron/ai/inference/response-validation.cjs#L12>)
- Array.isArray — external-or-dynamic-dispatch; [electron/ai/inference/response-validation.cjs:17](<../../../../../../../electron/ai/inference/response-validation.cjs#L17>)
- Object.keys(value).some — external-or-dynamic-dispatch; [electron/ai/inference/response-validation.cjs:18](<../../../../../../../electron/ai/inference/response-validation.cjs#L18>)
- Object.keys — external-or-dynamic-dispatch; [electron/ai/inference/response-validation.cjs:18](<../../../../../../../electron/ai/inference/response-validation.cjs#L18>)
- value.answer.trim — external-or-dynamic-dispatch; [electron/ai/inference/response-validation.cjs:20](<../../../../../../../electron/ai/inference/response-validation.cjs#L20>)
- value.answer.trim().toLocaleLowerCase — external-or-dynamic-dispatch; [electron/ai/inference/response-validation.cjs:23](<../../../../../../../electron/ai/inference/response-validation.cjs#L23>)
- value.answer.trim — external-or-dynamic-dispatch; [electron/ai/inference/response-validation.cjs:23](<../../../../../../../electron/ai/inference/response-validation.cjs#L23>)
- question.trim().toLocaleLowerCase — external-or-dynamic-dispatch; [electron/ai/inference/response-validation.cjs:24](<../../../../../../../electron/ai/inference/response-validation.cjs#L24>)
- 11 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/context-box-store.test.cjs:115](<../../../../../../../electron/ai/context-box-store.test.cjs#L115>) — static-call-site; coverage not established.
- [electron/ai/context-box-store.test.cjs:128](<../../../../../../../electron/ai/context-box-store.test.cjs#L128>) — static-call-site; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:72](<../../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L72>) — static-call-site; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:84](<../../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L84>) — static-call-site; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:127](<../../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L127>) — static-call-site; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:214](<../../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L214>) — static-call-site; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:159](<../../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L159>) — static-call-site; coverage not established.
- [electron/ai/context-box-store.test.cjs:10](<../../../../../../../electron/ai/context-box-store.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:9](<../../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:5](<../../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L5>) — file-import-only; coverage not established.

<a id="s-0fffdff23ab9a730"></a>

## validateAnswer.&lt;anonymous@18:29&gt;

[electron/ai/inference/response-validation.cjs:18](<../../../../../../../electron/ai/inference/response-validation.cjs#L18>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [validateAnswer](<response-validation.cjs.md#s-21e2e91befa4c26f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| key | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- &#91;"answer", "citations"&#93;.includes — external-or-dynamic-dispatch; [electron/ai/inference/response-validation.cjs:18](<../../../../../../../electron/ai/inference/response-validation.cjs#L18>)

**Related tests / acceptance harnesses:**

- [electron/ai/context-box-store.test.cjs:10](<../../../../../../../electron/ai/context-box-store.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:9](<../../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:5](<../../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L5>) — file-import-only; coverage not established.

<a id="s-864aed4d57826e6f"></a>

## validateAnswer.&lt;anonymous@49:9&gt;

[electron/ai/inference/response-validation.cjs:49](<../../../../../../../electron/ai/inference/response-validation.cjs#L49>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [validateAnswer](<response-validation.cjs.md#s-21e2e91befa4c26f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| id | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- sources.some — external-or-dynamic-dispatch; [electron/ai/inference/response-validation.cjs:51](<../../../../../../../electron/ai/inference/response-validation.cjs#L51>)

**Related tests / acceptance harnesses:**

- [electron/ai/context-box-store.test.cjs:10](<../../../../../../../electron/ai/context-box-store.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:9](<../../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:5](<../../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L5>) — file-import-only; coverage not established.

<a id="s-44a3d3158aa9dd49"></a>

## validateAnswer.&lt;anonymous@49:9&gt;.&lt;anonymous@51:25&gt;

[electron/ai/inference/response-validation.cjs:51](<../../../../../../../electron/ai/inference/response-validation.cjs#L51>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [validateAnswer.&lt;anonymous@49:9&gt;](<response-validation.cjs.md#s-864aed4d57826e6f>).

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

- [electron/ai/context-box-store.test.cjs:10](<../../../../../../../electron/ai/context-box-store.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:9](<../../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:5](<../../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L5>) — file-import-only; coverage not established.

<a id="s-5eb884ff4a863380"></a>

## validateAnswer.normalize

[electron/ai/inference/response-validation.cjs:62](<../../../../../../../electron/ai/inference/response-validation.cjs#L62>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [validateAnswer](<response-validation.cjs.md#s-21e2e91befa4c26f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| text | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [validateAnswer.&lt;anonymous@73:7&gt;](<response-validation.cjs.md#s-0d65786249846e72>) — [electron/ai/inference/response-validation.cjs:76](<../../../../../../../electron/ai/inference/response-validation.cjs#L76>)
- [validateAnswer.&lt;anonymous@73:7&gt;](<response-validation.cjs.md#s-0d65786249846e72>) — [electron/ai/inference/response-validation.cjs:76](<../../../../../../../electron/ai/inference/response-validation.cjs#L76>)
- [validateAnswer.&lt;anonymous@73:7&gt;](<response-validation.cjs.md#s-0d65786249846e72>) — [electron/ai/inference/response-validation.cjs:77](<../../../../../../../electron/ai/inference/response-validation.cjs#L77>)
- [validateAnswer.&lt;anonymous@73:7&gt;](<response-validation.cjs.md#s-0d65786249846e72>) — [electron/ai/inference/response-validation.cjs:77](<../../../../../../../electron/ai/inference/response-validation.cjs#L77>)

Unresolved / external call sites: 3.

- text.toLowerCase().replace(/\\s+/gu, " ").trim — external-or-dynamic-dispatch; [electron/ai/inference/response-validation.cjs:62](<../../../../../../../electron/ai/inference/response-validation.cjs#L62>)
- text.toLowerCase().replace — external-or-dynamic-dispatch; [electron/ai/inference/response-validation.cjs:62](<../../../../../../../electron/ai/inference/response-validation.cjs#L62>)
- text.toLowerCase — external-or-dynamic-dispatch; [electron/ai/inference/response-validation.cjs:62](<../../../../../../../electron/ai/inference/response-validation.cjs#L62>)

**Related tests / acceptance harnesses:**

- [electron/ai/context-box-store.test.cjs:10](<../../../../../../../electron/ai/context-box-store.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:9](<../../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:5](<../../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L5>) — file-import-only; coverage not established.

<a id="s-0d65786249846e72"></a>

## validateAnswer.&lt;anonymous@73:7&gt;

[electron/ai/inference/response-validation.cjs:73](<../../../../../../../electron/ai/inference/response-validation.cjs#L73>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [validateAnswer](<response-validation.cjs.md#s-21e2e91befa4c26f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| message | any | compiler-inferred | required |
| index | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [validateAnswer.normalize](<response-validation.cjs.md#s-5eb884ff4a863380>) — [electron/ai/inference/response-validation.cjs:76](<../../../../../../../electron/ai/inference/response-validation.cjs#L76>)
- [validateAnswer.normalize](<response-validation.cjs.md#s-5eb884ff4a863380>) — [electron/ai/inference/response-validation.cjs:76](<../../../../../../../electron/ai/inference/response-validation.cjs#L76>)
- [validateAnswer.normalize](<response-validation.cjs.md#s-5eb884ff4a863380>) — [electron/ai/inference/response-validation.cjs:77](<../../../../../../../electron/ai/inference/response-validation.cjs#L77>)
- [validateAnswer.normalize](<response-validation.cjs.md#s-5eb884ff4a863380>) — [electron/ai/inference/response-validation.cjs:77](<../../../../../../../electron/ai/inference/response-validation.cjs#L77>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/context-box-store.test.cjs:10](<../../../../../../../electron/ai/context-box-store.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:9](<../../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:5](<../../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L5>) — file-import-only; coverage not established.

<a id="s-3de3a3c0b8fa59ff"></a>

## answerPrefix

[electron/ai/inference/response-validation.cjs:90](<../../../../../../../electron/ai/inference/response-validation.cjs#L90>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: answerPrefix ([electron/ai/inference/response-validation.cjs:1](<../../../../../../../electron/ai/inference/response-validation.cjs#L1>)).

Lexical owner: [electron/ai/inference/response-validation.cjs](<response-validation.cjs.md#s-49967f56693c768c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| raw | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [planningOnly](<response-validation.cjs.md#s-4c64fc5cba521870>) — [electron/ai/inference/response-validation.cjs:107](<../../../../../../../electron/ai/inference/response-validation.cjs#L107>)

**Called by (statically resolved):**

- [runAssignedTurn.complete.&lt;anonymous@194:15&gt;.onContent](<../agents/assigned-chat.cjs.md#s-b6163f79173b6434>) — [electron/ai/agents/assigned-chat.cjs:216](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L216>)
- [createContextOrchestrator.run.generate.&lt;anonymous@744:40&gt;.onContent](<../orchestrator.cjs.md#s-5f4acb4f1e29f879>) — [electron/ai/orchestrator.cjs:766](<../../../../../../../electron/ai/orchestrator.cjs#L766>)
- [&lt;anonymous@53:79&gt;.onContent](<../providers/nvidia-provider.test.cjs.md#s-12f3e80b146e9796>) — [electron/ai/providers/nvidia-provider.test.cjs:70](<../../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L70>)

Unresolved / external call sites: 6.

- /^\\s*\\{\\s*"answer"\\s*:\\s*"/.exec — external-or-dynamic-dispatch; [electron/ai/inference/response-validation.cjs:91](<../../../../../../../electron/ai/inference/response-validation.cjs#L91>)
- raw.slice — external-or-dynamic-dispatch; [electron/ai/inference/response-validation.cjs:101](<../../../../../../../electron/ai/inference/response-validation.cjs#L101>)
- JSON.parse(&#96;"${encoded}"&#96;).replace — external-or-dynamic-dispatch; [electron/ai/inference/response-validation.cjs:106](<../../../../../../../electron/ai/inference/response-validation.cjs#L106>)
- JSON.parse — external-or-dynamic-dispatch; [electron/ai/inference/response-validation.cjs:106](<../../../../../../../electron/ai/inference/response-validation.cjs#L106>)
- /&#91;.!?\\n&#93;/.test — external-or-dynamic-dispatch; [electron/ai/inference/response-validation.cjs:110](<../../../../../../../electron/ai/inference/response-validation.cjs#L110>)
- /"\\s*}\\s*$/.test — external-or-dynamic-dispatch; [electron/ai/inference/response-validation.cjs:111](<../../../../../../../electron/ai/inference/response-validation.cjs#L111>)

**Related tests / acceptance harnesses:**

- [electron/ai/providers/nvidia-provider.test.cjs:70](<../../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L70>) — static-call-site; coverage not established.
- [electron/ai/context-box-store.test.cjs:10](<../../../../../../../electron/ai/context-box-store.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:9](<../../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:5](<../../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L5>) — file-import-only; coverage not established.
