# electron/ai/llm-front-office/token-budget.d.cts: symbols

[Atlas](<../../../../../README.md>) / [Retained AI runtime](<../../../../../modules/ai-runtime.md>) / [electron/ai/llm-front-office/token-budget.d.cts:1](<../../../../../../../electron/ai/llm-front-office/token-budget.d.cts#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/llm-front-office/token-budget.d.cts](<token-budget.d.cts.md#s-dc0a73fe9a7a0792>) (Module)
- [checkBudget](<token-budget.d.cts.md#s-2b4a8cd07877a5ab>) (FunctionDeclaration)

<a id="s-dc0a73fe9a7a0792"></a>

## electron/ai/llm-front-office/token-budget.d.cts

[electron/ai/llm-front-office/token-budget.d.cts:1](<../../../../../../../electron/ai/llm-front-office/token-budget.d.cts#L1>) · Module · declaration · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-2b4a8cd07877a5ab"></a>

## checkBudget

[electron/ai/llm-front-office/token-budget.d.cts:8](<../../../../../../../electron/ai/llm-front-office/token-budget.d.cts#L8>) · FunctionDeclaration · declaration · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Pure preflight: rejects overflow instead of truncating.

Purpose evidence: jsdoc.

Exported as: checkBudget ([electron/ai/llm-front-office/token-budget.d.cts:1](<../../../../../../../electron/ai/llm-front-office/token-budget.d.cts#L1>)).

Lexical owner: [electron/ai/llm-front-office/token-budget.d.cts](<token-budget.d.cts.md#s-dc0a73fe9a7a0792>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| requirements | TaskRequirements | annotation | required |
| model | ModelProfile | annotation | required |
| config | ExperimentConfig | annotation | required |

Returns: BudgetDecision (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
