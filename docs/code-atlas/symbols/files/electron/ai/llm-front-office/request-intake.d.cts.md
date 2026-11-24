# electron/ai/llm-front-office/request-intake.d.cts: symbols

[Atlas](<../../../../../README.md>) / [Retained AI runtime](<../../../../../modules/ai-runtime.md>) / [electron/ai/llm-front-office/request-intake.d.cts:1](<../../../../../../../electron/ai/llm-front-office/request-intake.d.cts#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/llm-front-office/request-intake.d.cts](<request-intake.d.cts.md#s-3b5b96644b4a4b6f>) (Module)
- [normalizeRequest](<request-intake.d.cts.md#s-1b466ee462009ba0>) (FunctionDeclaration)
- [conversationMessages](<request-intake.d.cts.md#s-ec8f433141baa009>) (FunctionDeclaration)
- [buildRequirements](<request-intake.d.cts.md#s-1ac6c809da5b71ed>) (FunctionDeclaration)

<a id="s-3b5b96644b4a4b6f"></a>

## electron/ai/llm-front-office/request-intake.d.cts

[electron/ai/llm-front-office/request-intake.d.cts:1](<../../../../../../../electron/ai/llm-front-office/request-intake.d.cts#L1>) · Module · declaration · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-1b466ee462009ba0"></a>

## normalizeRequest

[electron/ai/llm-front-office/request-intake.d.cts:8](<../../../../../../../electron/ai/llm-front-office/request-intake.d.cts#L8>) · FunctionDeclaration · declaration · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: normalizeRequest ([electron/ai/llm-front-office/request-intake.d.cts:1](<../../../../../../../electron/ai/llm-front-office/request-intake.d.cts#L1>)).

Lexical owner: [electron/ai/llm-front-office/request-intake.d.cts](<request-intake.d.cts.md#s-3b5b96644b4a4b6f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | unknown | annotation | required |

Returns: NormalizedChatRequest (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-ec8f433141baa009"></a>

## conversationMessages

[electron/ai/llm-front-office/request-intake.d.cts:9](<../../../../../../../electron/ai/llm-front-office/request-intake.d.cts#L9>) · FunctionDeclaration · declaration · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: conversationMessages ([electron/ai/llm-front-office/request-intake.d.cts:1](<../../../../../../../electron/ai/llm-front-office/request-intake.d.cts#L1>)).

Lexical owner: [electron/ai/llm-front-office/request-intake.d.cts](<request-intake.d.cts.md#s-3b5b96644b4a4b6f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| conversation | ExperimentConversation | annotation | required |
| question | string | annotation | required |

Returns: LLMRequest&#91;"messages"&#93; (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-1ac6c809da5b71ed"></a>

## buildRequirements

[electron/ai/llm-front-office/request-intake.d.cts:13](<../../../../../../../electron/ai/llm-front-office/request-intake.d.cts#L13>) · FunctionDeclaration · declaration · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: buildRequirements ([electron/ai/llm-front-office/request-intake.d.cts:1](<../../../../../../../electron/ai/llm-front-office/request-intake.d.cts#L1>)).

Lexical owner: [electron/ai/llm-front-office/request-intake.d.cts](<request-intake.d.cts.md#s-3b5b96644b4a4b6f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| request | NormalizedChatRequest | annotation | required |
| messages | LLMRequest&#91;"messages"&#93; | annotation | required |
| config | ExperimentConfig | annotation | required |
| selectedDeploymentId | string &#124; null | annotation | required |

Returns: TaskRequirements (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
