# electron/ai/llm-front-office/request-intake.cjs: symbols

[Atlas](<../../../../../README.md>) / [Retained AI runtime](<../../../../../modules/ai-runtime.md>) / [electron/ai/llm-front-office/request-intake.cjs:1](<../../../../../../../electron/ai/llm-front-office/request-intake.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/llm-front-office/request-intake.cjs](<request-intake.cjs.md#s-631949ab8691c696>) (Module)
- [normalizeRequest](<request-intake.cjs.md#s-dce03177be57ca82>) (FunctionDeclaration)
- [conversationMessages](<request-intake.cjs.md#s-5b3f5a0d78c3210f>) (FunctionDeclaration)
- [conversationMessages.&lt;anonymous@15:5&gt;](<request-intake.cjs.md#s-0717a9579480dea3>) (ArrowFunction)
- [conversationMessages.&lt;anonymous@18:7&gt;](<request-intake.cjs.md#s-bf1194802defd82c>) (ArrowFunction)
- [conversationMessages.&lt;anonymous@33:21&gt;](<request-intake.cjs.md#s-8edb63902f8a6c31>) (ArrowFunction)
- [buildRequirements](<request-intake.cjs.md#s-f61e93055c3b336b>) (FunctionDeclaration)

<a id="s-631949ab8691c696"></a>

## electron/ai/llm-front-office/request-intake.cjs

[electron/ai/llm-front-office/request-intake.cjs:1](<../../../../../../../electron/ai/llm-front-office/request-intake.cjs#L1>) · Module · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- require — module-loader; [electron/ai/llm-front-office/request-intake.cjs:3](<../../../../../../../electron/ai/llm-front-office/request-intake.cjs#L3>)
- require — module-loader; [electron/ai/llm-front-office/request-intake.cjs:4](<../../../../../../../electron/ai/llm-front-office/request-intake.cjs#L4>)
- require — module-loader; [electron/ai/llm-front-office/request-intake.cjs:5](<../../../../../../../electron/ai/llm-front-office/request-intake.cjs#L5>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:15](<../../../../../../../electron/ai/front-office-engine.test.cjs#L15>) — file-import-only; coverage not established.

<a id="s-dce03177be57ca82"></a>

## normalizeRequest

[electron/ai/llm-front-office/request-intake.cjs:8](<../../../../../../../electron/ai/llm-front-office/request-intake.cjs#L8>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Validate input before any provider call; no context, persona, tools or hidden system prompt is added.

Purpose evidence: jsdoc.

Exported as: normalizeRequest ([electron/ai/llm-front-office/request-intake.cjs:1](<../../../../../../../electron/ai/llm-front-office/request-intake.cjs#L1>)).

Lexical owner: [electron/ai/llm-front-office/request-intake.cjs](<request-intake.cjs.md#s-631949ab8691c696>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [parse](<../../shared/validation.cjs.md#s-f29367528a73f24d>) — [electron/ai/llm-front-office/request-intake.cjs:9](<../../../../../../../electron/ai/llm-front-office/request-intake.cjs#L9>)

**Called by (statically resolved):**

- [&lt;anonymous@311:91&gt;.&lt;anonymous@326:19&gt;](<../front-office-engine.test.cjs.md#s-83125ea4b77f03b0>) — [electron/ai/front-office-engine.test.cjs:326](<../../../../../../../electron/ai/front-office-engine.test.cjs#L326>)
- [&lt;anonymous@311:91&gt;](<../front-office-engine.test.cjs.md#s-d5cbfbde86c7c6c3>) — [electron/ai/front-office-engine.test.cjs:329](<../../../../../../../electron/ai/front-office-engine.test.cjs#L329>)
- [FrontOfficeService.run](<service.cjs.md#s-3bd2f92cf25a76d2>) — [electron/ai/llm-front-office/service.cjs:166](<../../../../../../../electron/ai/llm-front-office/service.cjs#L166>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:326](<../../../../../../../electron/ai/front-office-engine.test.cjs#L326>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:329](<../../../../../../../electron/ai/front-office-engine.test.cjs#L329>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:15](<../../../../../../../electron/ai/front-office-engine.test.cjs#L15>) — file-import-only; coverage not established.

<a id="s-5b3f5a0d78c3210f"></a>

## conversationMessages

[electron/ai/llm-front-office/request-intake.cjs:12](<../../../../../../../electron/ai/llm-front-office/request-intake.cjs#L12>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Include every successful exchange, rejecting malformed pairings rather than silently truncating.

Purpose evidence: jsdoc.

Exported as: conversationMessages ([electron/ai/llm-front-office/request-intake.cjs:1](<../../../../../../../electron/ai/llm-front-office/request-intake.cjs#L1>)).

Lexical owner: [electron/ai/llm-front-office/request-intake.cjs](<request-intake.cjs.md#s-631949ab8691c696>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| conversation | any | compiler-inferred | required |
| question | any | compiler-inferred | required |

Returns: {} (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/llm-front-office/request-intake.cjs:21](<../../../../../../../electron/ai/llm-front-office/request-intake.cjs#L21>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/llm-front-office/request-intake.cjs:35](<../../../../../../../electron/ai/llm-front-office/request-intake.cjs#L35>)

**Called by (statically resolved):**

- [FrontOfficeService.run](<service.cjs.md#s-3bd2f92cf25a76d2>) — [electron/ai/llm-front-office/service.cjs:387](<../../../../../../../electron/ai/llm-front-office/service.cjs#L387>)

Unresolved / external call sites: 5.

- conversation.messages.filter — external-or-dynamic-dispatch; [electron/ai/llm-front-office/request-intake.cjs:14](<../../../../../../../electron/ai/llm-front-office/request-intake.cjs#L14>)
- conversation.messages.find — external-or-dynamic-dispatch; [electron/ai/llm-front-office/request-intake.cjs:17](<../../../../../../../electron/ai/llm-front-office/request-intake.cjs#L17>)
- messages.push — external-or-dynamic-dispatch; [electron/ai/llm-front-office/request-intake.cjs:25](<../../../../../../../electron/ai/llm-front-office/request-intake.cjs#L25>)
- messages.push — external-or-dynamic-dispatch; [electron/ai/llm-front-office/request-intake.cjs:30](<../../../../../../../electron/ai/llm-front-office/request-intake.cjs#L30>)
- messages.reduce — external-or-dynamic-dispatch; [electron/ai/llm-front-office/request-intake.cjs:33](<../../../../../../../electron/ai/llm-front-office/request-intake.cjs#L33>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:15](<../../../../../../../electron/ai/front-office-engine.test.cjs#L15>) — file-import-only; coverage not established.

<a id="s-0717a9579480dea3"></a>

## conversationMessages.&lt;anonymous@15:5&gt;

[electron/ai/llm-front-office/request-intake.cjs:15](<../../../../../../../electron/ai/llm-front-office/request-intake.cjs#L15>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [conversationMessages](<request-intake.cjs.md#s-5b3f5a0d78c3210f>).

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

- [electron/ai/front-office-engine.test.cjs:15](<../../../../../../../electron/ai/front-office-engine.test.cjs#L15>) — file-import-only; coverage not established.

<a id="s-bf1194802defd82c"></a>

## conversationMessages.&lt;anonymous@18:7&gt;

[electron/ai/llm-front-office/request-intake.cjs:18](<../../../../../../../electron/ai/llm-front-office/request-intake.cjs#L18>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [conversationMessages](<request-intake.cjs.md#s-5b3f5a0d78c3210f>).

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

- [electron/ai/front-office-engine.test.cjs:15](<../../../../../../../electron/ai/front-office-engine.test.cjs#L15>) — file-import-only; coverage not established.

<a id="s-8edb63902f8a6c31"></a>

## conversationMessages.&lt;anonymous@33:21&gt;

[electron/ai/llm-front-office/request-intake.cjs:33](<../../../../../../../electron/ai/llm-front-office/request-intake.cjs#L33>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [conversationMessages](<request-intake.cjs.md#s-5b3f5a0d78c3210f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| n | any | compiler-inferred | required |
| m | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:15](<../../../../../../../electron/ai/front-office-engine.test.cjs#L15>) — file-import-only; coverage not established.

<a id="s-f61e93055c3b336b"></a>

## buildRequirements

[electron/ai/llm-front-office/request-intake.cjs:42](<../../../../../../../electron/ai/llm-front-office/request-intake.cjs#L42>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Deterministic requirements only: explicit task/format and configured policy, with unknown facts left null.

Purpose evidence: jsdoc.

Exported as: buildRequirements ([electron/ai/llm-front-office/request-intake.cjs:1](<../../../../../../../electron/ai/llm-front-office/request-intake.cjs#L1>)).

Lexical owner: [electron/ai/llm-front-office/request-intake.cjs](<request-intake.cjs.md#s-631949ab8691c696>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| request | any | compiler-inferred | required |
| messages | any | compiler-inferred | required |
| config | any | compiler-inferred | required |
| selectedDeploymentId | any | compiler-inferred | required |

Returns: { taskType: any; transport: any; requiredModalities: {}; needsTools: boolean; requiresJsonSchema: boolean; expectedInputTokens: any; reservedOutputTokens: any; minimumReliability: any; costCap: any; latencyTarget: any; userModelOverride: any; routingPolicy: any; historyMessages: number; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [estimateTokens](<../../shared/token-budget.cjs.md#s-81eabfdb3a44d606>) — [electron/ai/llm-front-office/request-intake.cjs:49](<../../../../../../../electron/ai/llm-front-office/request-intake.cjs#L49>)

**Called by (statically resolved):**

- [requirements](<../front-office-engine.test.cjs.md#s-70f700e50a6565c2>) — [electron/ai/front-office-engine.test.cjs:73](<../../../../../../../electron/ai/front-office-engine.test.cjs#L73>)
- [FrontOfficeService.run](<service.cjs.md#s-3bd2f92cf25a76d2>) — [electron/ai/llm-front-office/service.cjs:390](<../../../../../../../electron/ai/llm-front-office/service.cjs#L390>)
- [main](<../../../scripts/front-office-benchmark.cjs.md#s-8f8223991922089c>) — [scripts/front-office-benchmark.cjs:168](<../../../../../../../scripts/front-office-benchmark.cjs#L168>)
- [main.runClient.&lt;anonymous@189:9&gt;](<../../../scripts/front-office-benchmark.cjs.md#s-f33b1bcd6cf84c2a>) — [scripts/front-office-benchmark.cjs:193](<../../../../../../../scripts/front-office-benchmark.cjs#L193>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:73](<../../../../../../../electron/ai/front-office-engine.test.cjs#L73>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:15](<../../../../../../../electron/ai/front-office-engine.test.cjs#L15>) — file-import-only; coverage not established.
