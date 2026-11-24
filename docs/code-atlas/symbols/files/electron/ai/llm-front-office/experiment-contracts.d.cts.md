# electron/ai/llm-front-office/experiment-contracts.d.cts: symbols

[Atlas](<../../../../../README.md>) / [Retained AI runtime](<../../../../../modules/ai-runtime.md>) / [electron/ai/llm-front-office/experiment-contracts.d.cts:1](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.d.cts#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/llm-front-office/experiment-contracts.d.cts](<experiment-contracts.d.cts.md#s-e8654a1140e245f5>) (Module)
- [validateConfig](<experiment-contracts.d.cts.md#s-095bec8ac3dfba05>) (FunctionDeclaration)
- [defaultConfig](<experiment-contracts.d.cts.md#s-1092ab0deccb88a9>) (FunctionDeclaration)

<a id="s-e8654a1140e245f5"></a>

## electron/ai/llm-front-office/experiment-contracts.d.cts

[electron/ai/llm-front-office/experiment-contracts.d.cts:1](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.d.cts#L1>) · Module · declaration · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-095bec8ac3dfba05"></a>

## validateConfig

[electron/ai/llm-front-office/experiment-contracts.d.cts:3](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.d.cts#L3>) · FunctionDeclaration · declaration · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Validate a complete non-secret configuration; throws a safe runtime error.

Purpose evidence: jsdoc.

Exported as: validateConfig ([electron/ai/llm-front-office/experiment-contracts.d.cts:1](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.d.cts#L1>)).

Lexical owner: [electron/ai/llm-front-office/experiment-contracts.d.cts](<experiment-contracts.d.cts.md#s-e8654a1140e245f5>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | unknown | annotation | required |

Returns: ExperimentConfig (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-1092ab0deccb88a9"></a>

## defaultConfig

[electron/ai/llm-front-office/experiment-contracts.d.cts:5](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.d.cts#L5>) · FunctionDeclaration · declaration · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Return independently cloned defaults.

Purpose evidence: jsdoc.

Exported as: defaultConfig ([electron/ai/llm-front-office/experiment-contracts.d.cts:1](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.d.cts#L1>)).

Lexical owner: [electron/ai/llm-front-office/experiment-contracts.d.cts](<experiment-contracts.d.cts.md#s-e8654a1140e245f5>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: ExperimentConfig (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
