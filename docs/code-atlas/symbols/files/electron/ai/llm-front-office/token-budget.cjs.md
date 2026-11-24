# electron/ai/llm-front-office/token-budget.cjs: symbols

[Atlas](<../../../../../README.md>) / [Retained AI runtime](<../../../../../modules/ai-runtime.md>) / [electron/ai/llm-front-office/token-budget.cjs:1](<../../../../../../../electron/ai/llm-front-office/token-budget.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/llm-front-office/token-budget.cjs](<token-budget.cjs.md#s-1ec51dac869e64e6>) (Module)
- [checkBudget](<token-budget.cjs.md#s-552498140f3343ca>) (FunctionDeclaration)

<a id="s-1ec51dac869e64e6"></a>

## electron/ai/llm-front-office/token-budget.cjs

[electron/ai/llm-front-office/token-budget.cjs:1](<../../../../../../../electron/ai/llm-front-office/token-budget.cjs#L1>) · Module · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:16](<../../../../../../../electron/ai/front-office-engine.test.cjs#L16>) — file-import-only; coverage not established.

<a id="s-552498140f3343ca"></a>

## checkBudget

[electron/ai/llm-front-office/token-budget.cjs:5](<../../../../../../../electron/ai/llm-front-office/token-budget.cjs#L5>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Purpose: pure context/cost preflight. Inputs: requirements/profile/config; outputs: explicit decision. Dependencies: none. Failure: rejected decisions, never truncation. Knobs: headroom, caps. Owner: backend. Check configured capacity against advertised metadata; never treat it as measured reliable context.

Purpose evidence: jsdoc.

Exported as: checkBudget ([electron/ai/llm-front-office/token-budget.cjs:1](<../../../../../../../electron/ai/llm-front-office/token-budget.cjs#L1>)).

Lexical owner: [electron/ai/llm-front-office/token-budget.cjs](<token-budget.cjs.md#s-1ec51dac869e64e6>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| requirements | any | compiler-inferred | required |
| model | any | compiler-inferred | required |
| config | any | compiler-inferred | required |

Returns: { eligible: boolean; reasons: {}; estimatedInputTokens: any; reservedOutputTokens: any; headroomTokens: any; capacityTokens: any; totalTokens: any; estimatedCostUsd: number; estimateMethod: string; warnings: {}; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@362:94&gt;](<../front-office-engine.test.cjs.md#s-450ebfb6b57e3564>) — [electron/ai/front-office-engine.test.cjs:366](<../../../../../../../electron/ai/front-office-engine.test.cjs#L366>)
- [&lt;anonymous@362:94&gt;](<../front-office-engine.test.cjs.md#s-450ebfb6b57e3564>) — [electron/ai/front-office-engine.test.cjs:370](<../../../../../../../electron/ai/front-office-engine.test.cjs#L370>)
- [&lt;anonymous@362:94&gt;](<../front-office-engine.test.cjs.md#s-450ebfb6b57e3564>) — [electron/ai/front-office-engine.test.cjs:376](<../../../../../../../electron/ai/front-office-engine.test.cjs#L376>)
- [&lt;anonymous@362:94&gt;](<../front-office-engine.test.cjs.md#s-450ebfb6b57e3564>) — [electron/ai/front-office-engine.test.cjs:380](<../../../../../../../electron/ai/front-office-engine.test.cjs#L380>)
- [&lt;anonymous@625:78&gt;](<../front-office-engine.test.cjs.md#s-f6621a6ca19dc6b7>) — [electron/ai/front-office-engine.test.cjs:628](<../../../../../../../electron/ai/front-office-engine.test.cjs#L628>)
- [routeModels.&lt;anonymous@20:29&gt;](<model-router.cjs.md#s-e9f25ac763c22e49>) — [electron/ai/llm-front-office/model-router.cjs:21](<../../../../../../../electron/ai/llm-front-office/model-router.cjs#L21>)
- [main](<../../../scripts/front-office-benchmark.cjs.md#s-8f8223991922089c>) — [scripts/front-office-benchmark.cjs:174](<../../../../../../../scripts/front-office-benchmark.cjs#L174>)

Unresolved / external call sites: 6.

- Math.min — external-or-dynamic-dispatch; [electron/ai/llm-front-office/token-budget.cjs:7](<../../../../../../../electron/ai/llm-front-office/token-budget.cjs#L7>)
- Math.ceil — external-or-dynamic-dispatch; [electron/ai/llm-front-office/token-budget.cjs:11](<../../../../../../../electron/ai/llm-front-office/token-budget.cjs#L11>)
- reasons.push — external-or-dynamic-dispatch; [electron/ai/llm-front-office/token-budget.cjs:23](<../../../../../../../electron/ai/llm-front-office/token-budget.cjs#L23>)
- reasons.push — external-or-dynamic-dispatch; [electron/ai/llm-front-office/token-budget.cjs:30](<../../../../../../../electron/ai/llm-front-office/token-budget.cjs#L30>)
- reasons.push — external-or-dynamic-dispatch; [electron/ai/llm-front-office/token-budget.cjs:35](<../../../../../../../electron/ai/llm-front-office/token-budget.cjs#L35>)
- reasons.push — external-or-dynamic-dispatch; [electron/ai/llm-front-office/token-budget.cjs:40](<../../../../../../../electron/ai/llm-front-office/token-budget.cjs#L40>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:366](<../../../../../../../electron/ai/front-office-engine.test.cjs#L366>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:370](<../../../../../../../electron/ai/front-office-engine.test.cjs#L370>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:376](<../../../../../../../electron/ai/front-office-engine.test.cjs#L376>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:380](<../../../../../../../electron/ai/front-office-engine.test.cjs#L380>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:628](<../../../../../../../electron/ai/front-office-engine.test.cjs#L628>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:16](<../../../../../../../electron/ai/front-office-engine.test.cjs#L16>) — file-import-only; coverage not established.
