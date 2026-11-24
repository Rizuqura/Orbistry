# electron/shared/token-budget.cjs: symbols

[Atlas](<../../../../README.md>) / [Shared deterministic infrastructure](<../../../../modules/shared.md>) / [electron/shared/token-budget.cjs:1](<../../../../../../electron/shared/token-budget.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/shared/token-budget.cjs](<token-budget.cjs.md#s-8866a7fba94cd733>) (Module)
- [estimateTokens](<token-budget.cjs.md#s-81eabfdb3a44d606>) (ArrowFunction)
- [estimateTokens.&lt;anonymous@4:5&gt;](<token-budget.cjs.md#s-ccd8938284713377>) (ArrowFunction)

<a id="s-8866a7fba94cd733"></a>

## electron/shared/token-budget.cjs

[electron/shared/token-budget.cjs:1](<../../../../../../electron/shared/token-budget.cjs#L1>) · Module · production · [Shared deterministic infrastructure](<../../../../modules/shared.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [tests/integration/architecture-contract.test.cjs:233](<../../../../../../tests/integration/architecture-contract.test.cjs#L233>) — file-import-only; coverage not established.

<a id="s-81eabfdb3a44d606"></a>

## estimateTokens

[electron/shared/token-budget.cjs:2](<../../../../../../electron/shared/token-budget.cjs#L2>) · ArrowFunction · production · [Shared deterministic infrastructure](<../../../../modules/shared.md>)

Conservatively estimates UTF-8 token/framing cost for explicit messages. Shared with deterministic chunking; no inference, truncation or external state.

Purpose evidence: jsdoc.

Exported as: estimateTokens ([electron/ai/history-budget.cjs:1](<../../../../../../electron/ai/history-budget.cjs#L1>)), estimateTokens ([electron/shared/token-budget.cjs:1](<../../../../../../electron/shared/token-budget.cjs#L1>)).

Lexical owner: [electron/shared/token-budget.cjs](<token-budget.cjs.md#s-8866a7fba94cd733>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| messages | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [budgetHistory](<../ai/history-budget.cjs.md#s-0c3553c9658a4cf5>) — [electron/ai/history-budget.cjs:8](<../../../../../../electron/ai/history-budget.cjs#L8>)
- [budgetHistory.&lt;anonymous@20:44&gt;](<../ai/history-budget.cjs.md#s-77134f2c84cb3634>) — [electron/ai/history-budget.cjs:22](<../../../../../../electron/ai/history-budget.cjs#L22>)
- [budgetHistory](<../ai/history-budget.cjs.md#s-0c3553c9658a4cf5>) — [electron/ai/history-budget.cjs:35](<../../../../../../electron/ai/history-budget.cjs#L35>)
- [budgetHistory](<../ai/history-budget.cjs.md#s-0c3553c9658a4cf5>) — [electron/ai/history-budget.cjs:40](<../../../../../../electron/ai/history-budget.cjs#L40>)
- [runEvaluation](<../ai/llm-front-office/evaluation/harness.cjs.md#s-271b18962c102baf>) — [electron/ai/llm-front-office/evaluation/harness.cjs:138](<../../../../../../electron/ai/llm-front-office/evaluation/harness.cjs#L138>)
- [createBaselineObserver.complete](<../ai/llm-front-office/observability.cjs.md#s-16062b460e4158c3>) — [electron/ai/llm-front-office/observability.cjs:157](<../../../../../../electron/ai/llm-front-office/observability.cjs#L157>)
- [buildRequirements](<../ai/llm-front-office/request-intake.cjs.md#s-f61e93055c3b336b>) — [electron/ai/llm-front-office/request-intake.cjs:49](<../../../../../../electron/ai/llm-front-office/request-intake.cjs#L49>)
- [&lt;anonymous@516:89&gt;](<../ai/orchestrator.test.cjs.md#s-46498cec03880e65>) — [electron/ai/orchestrator.test.cjs:530](<../../../../../../electron/ai/orchestrator.test.cjs#L530>)
- [&lt;anonymous@516:89&gt;.complete](<../ai/orchestrator.test.cjs.md#s-ae760b152c012de7>) — [electron/ai/orchestrator.test.cjs:541](<../../../../../../electron/ai/orchestrator.test.cjs#L541>)
- [&lt;anonymous@54:106&gt;](<../ai/runtime-context.test.cjs.md#s-d99bbd18edfd3bcb>) — [electron/ai/runtime-context.test.cjs:87](<../../../../../../electron/ai/runtime-context.test.cjs#L87>)
- [&lt;anonymous@54:106&gt;](<../ai/runtime-context.test.cjs.md#s-d99bbd18edfd3bcb>) — [electron/ai/runtime-context.test.cjs:94](<../../../../../../electron/ai/runtime-context.test.cjs#L94>)
- [&lt;anonymous@228:87&gt;](<../ai/runtime-context.test.cjs.md#s-c9a8a0f65c9d2ba2>) — [electron/ai/runtime-context.test.cjs:248](<../../../../../../electron/ai/runtime-context.test.cjs#L248>)
- [chunkMarkdown.section](<../engines/backend-identity/markdown-chunker.cjs.md#s-ee891e9bc8ebaa48>) — [electron/engines/backend-identity/markdown-chunker.cjs:81](<../../../../../../electron/engines/backend-identity/markdown-chunker.cjs#L81>)
- [report.&lt;anonymous@70:31&gt;](<../../scripts/runtime-kernel-report.cjs.md#s-5f9992a00a349768>) — [scripts/runtime-kernel-report.cjs:93](<../../../../../../scripts/runtime-kernel-report.cjs#L93>)
- [report.&lt;anonymous@70:31&gt;](<../../scripts/runtime-kernel-report.cjs.md#s-5f9992a00a349768>) — [scripts/runtime-kernel-report.cjs:94](<../../../../../../scripts/runtime-kernel-report.cjs#L94>)

Unresolved / external call sites: 1.

- messages.reduce — external-or-dynamic-dispatch; [electron/shared/token-budget.cjs:3](<../../../../../../electron/shared/token-budget.cjs#L3>)

**Related tests / acceptance harnesses:**

- [electron/ai/orchestrator.test.cjs:530](<../../../../../../electron/ai/orchestrator.test.cjs#L530>) — static-call-site; coverage not established.
- [electron/ai/orchestrator.test.cjs:541](<../../../../../../electron/ai/orchestrator.test.cjs#L541>) — static-call-site; coverage not established.
- [electron/ai/runtime-context.test.cjs:87](<../../../../../../electron/ai/runtime-context.test.cjs#L87>) — static-call-site; coverage not established.
- [electron/ai/runtime-context.test.cjs:94](<../../../../../../electron/ai/runtime-context.test.cjs#L94>) — static-call-site; coverage not established.
- [electron/ai/runtime-context.test.cjs:248](<../../../../../../electron/ai/runtime-context.test.cjs#L248>) — static-call-site; coverage not established.
- [tests/integration/architecture-contract.test.cjs:233](<../../../../../../tests/integration/architecture-contract.test.cjs#L233>) — file-import-only; coverage not established.

<a id="s-ccd8938284713377"></a>

## estimateTokens.&lt;anonymous@4:5&gt;

[electron/shared/token-budget.cjs:4](<../../../../../../electron/shared/token-budget.cjs#L4>) · ArrowFunction · production · [Shared deterministic infrastructure](<../../../../modules/shared.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [estimateTokens](<token-budget.cjs.md#s-81eabfdb3a44d606>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| sum | any | compiler-inferred | required |
| message | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- Math.ceil — external-or-dynamic-dispatch; [electron/shared/token-budget.cjs:5](<../../../../../../electron/shared/token-budget.cjs#L5>)
- Buffer.byteLength — external-or-dynamic-dispatch; [electron/shared/token-budget.cjs:5](<../../../../../../electron/shared/token-budget.cjs#L5>)

**Related tests / acceptance harnesses:**

- [tests/integration/architecture-contract.test.cjs:233](<../../../../../../tests/integration/architecture-contract.test.cjs#L233>) — file-import-only; coverage not established.
