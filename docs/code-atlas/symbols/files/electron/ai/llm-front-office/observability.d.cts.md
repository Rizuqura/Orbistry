# electron/ai/llm-front-office/observability.d.cts: symbols

[Atlas](<../../../../../README.md>) / [Retained AI runtime](<../../../../../modules/ai-runtime.md>) / [electron/ai/llm-front-office/observability.d.cts:1](<../../../../../../../electron/ai/llm-front-office/observability.d.cts#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/llm-front-office/observability.d.cts](<observability.d.cts.md#s-b93cffce2cd3f5bc>) (Module)
- [ObservedRequest](<observability.d.cts.md#s-c45a76ac8b8eef50>) (TypeAliasDeclaration)
- [ObservedRequest.&lt;anonymous@13:15&gt;](<observability.d.cts.md#s-9d4fe8680b960b1e>) (FunctionType)
- [ObservedRequest.&lt;anonymous@14:25&gt;](<observability.d.cts.md#s-b46a8fd76e8a5580>) (FunctionType)
- [createBaselineObserver](<observability.d.cts.md#s-30b0af13bdedbf67>) (FunctionDeclaration)
- [createBaselineObserver.&lt;anonymous@28:15&gt;](<observability.d.cts.md#s-450c9e14ef99558f>) (FunctionType)
- [createBaselineObserver.&lt;anonymous@29:11&gt;](<observability.d.cts.md#s-302fe004c8f1f85e>) (FunctionType)
- [createBaselineObserver.stage](<observability.d.cts.md#s-82cef1fe1ecbb438>) (MethodSignature)
- [createBaselineObserver.complete](<observability.d.cts.md#s-d311261bd3039baf>) (MethodSignature)
- [createBaselineObserver.complete.complete](<observability.d.cts.md#s-090800650d45398e>) (MethodSignature)
- [createBaselineObserver.finish](<observability.d.cts.md#s-4bb35dcf30f67647>) (MethodSignature)
- [createBaselineObserver.snapshot](<observability.d.cts.md#s-22a4d7600f21c0e6>) (MethodSignature)

<a id="s-b93cffce2cd3f5bc"></a>

## electron/ai/llm-front-office/observability.d.cts

[electron/ai/llm-front-office/observability.d.cts:1](<../../../../../../../electron/ai/llm-front-office/observability.d.cts#L1>) · Module · declaration · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-c45a76ac8b8eef50"></a>

## ObservedRequest

[electron/ai/llm-front-office/observability.d.cts:8](<../../../../../../../electron/ai/llm-front-office/observability.d.cts#L8>) · TypeAliasDeclaration · declaration · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: ObservedRequest ([electron/ai/llm-front-office/observability.d.cts:1](<../../../../../../../electron/ai/llm-front-office/observability.d.cts#L1>)).

Lexical owner: [electron/ai/llm-front-office/observability.d.cts](<observability.d.cts.md#s-b93cffce2cd3f5bc>).

Contract evidence: typescript-declaration. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-9d4fe8680b960b1e"></a>

## ObservedRequest.&lt;anonymous@13:15&gt;

[electron/ai/llm-front-office/observability.d.cts:13](<../../../../../../../electron/ai/llm-front-office/observability.d.cts#L13>) · FunctionType · declaration · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ObservedRequest](<observability.d.cts.md#s-c45a76ac8b8eef50>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| content | string | annotation | required |

Returns: void (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-b46a8fd76e8a5580"></a>

## ObservedRequest.&lt;anonymous@14:25&gt;

[electron/ai/llm-front-office/observability.d.cts:14](<../../../../../../../electron/ai/llm-front-office/observability.d.cts#L14>) · FunctionType · declaration · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ObservedRequest](<observability.d.cts.md#s-c45a76ac8b8eef50>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| args | unknown&#91;&#93; | annotation | required, rest |

Returns: unknown (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-30b0af13bdedbf67"></a>

## createBaselineObserver

[electron/ai/llm-front-office/observability.d.cts:18](<../../../../../../../electron/ai/llm-front-office/observability.d.cts#L18>) · FunctionDeclaration · declaration · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Passive observer; the caller retains ownership of routing and cancellation.

Purpose evidence: jsdoc.

Exported as: createBaselineObserver ([electron/ai/llm-front-office/observability.d.cts:1](<../../../../../../../electron/ai/llm-front-office/observability.d.cts#L1>)).

Lexical owner: [electron/ai/llm-front-office/observability.d.cts](<observability.d.cts.md#s-b93cffce2cd3f5bc>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| options | { enabled?: boolean; mode?: "existing-agent-baseline" &#124; "experiment"; requestId?: string; runId: string; conversationId?: string; providerId: string; modelId: string; agentId?: string; requestLogger?: import("../request-logger.cjs").RequestLogger; wallClock?: () =&gt; number; clock?: () =&gt; number; } | annotation | required |

Returns: { stage( name: RequestStageName, status?: "ok" &#124; "error" &#124; "skipped" &#124; "bypassed" &#124; "buffered", metadata?: { provider?: string; model?: string; errorCode?: string; httpStatus?: number; contentCharacters?: number; candidateCount?: number; }, ): void; complete&lt;Request extends ObservedRequest, Response&gt;( provider: { complete(request: Request): Promise&lt;Response&gt; }, request: Request, phase?: BaselineCallPhase, ): Promise&lt;Response&gt;; finish( status: "succeeded" &#124; "failed" &#124; "cancelled", error?: { code?: string }, ): void; snapshot(): BaselineTrace &#124; null; } (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-450c9e14ef99558f"></a>

## createBaselineObserver.&lt;anonymous@28:15&gt;

[electron/ai/llm-front-office/observability.d.cts:28](<../../../../../../../electron/ai/llm-front-office/observability.d.cts#L28>) · FunctionType · declaration · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createBaselineObserver](<observability.d.cts.md#s-30b0af13bdedbf67>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: number (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-302fe004c8f1f85e"></a>

## createBaselineObserver.&lt;anonymous@29:11&gt;

[electron/ai/llm-front-office/observability.d.cts:29](<../../../../../../../electron/ai/llm-front-office/observability.d.cts#L29>) · FunctionType · declaration · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createBaselineObserver](<observability.d.cts.md#s-30b0af13bdedbf67>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: number (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-82cef1fe1ecbb438"></a>

## createBaselineObserver.stage

[electron/ai/llm-front-office/observability.d.cts:31](<../../../../../../../electron/ai/llm-front-office/observability.d.cts#L31>) · MethodSignature · declaration · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createBaselineObserver](<observability.d.cts.md#s-30b0af13bdedbf67>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| name | RequestStageName | annotation | required |
| status | "ok" &#124; "error" &#124; "skipped" &#124; "bypassed" &#124; "buffered" | annotation | optional |
| metadata | { provider?: string; model?: string; errorCode?: string; httpStatus?: number; contentCharacters?: number; candidateCount?: number; } | annotation | optional |

Returns: void (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d311261bd3039baf"></a>

## createBaselineObserver.complete

[electron/ai/llm-front-office/observability.d.cts:43](<../../../../../../../electron/ai/llm-front-office/observability.d.cts#L43>) · MethodSignature · declaration · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createBaselineObserver](<observability.d.cts.md#s-30b0af13bdedbf67>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| provider | { complete(request: Request): Promise&lt;Response&gt; } | annotation | required |
| request | Request | annotation | required |
| phase | BaselineCallPhase | annotation | optional |

Returns: Promise&lt;Response&gt; (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-090800650d45398e"></a>

## createBaselineObserver.complete.complete

[electron/ai/llm-front-office/observability.d.cts:44](<../../../../../../../electron/ai/llm-front-office/observability.d.cts#L44>) · MethodSignature · declaration · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createBaselineObserver.complete](<observability.d.cts.md#s-d311261bd3039baf>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| request | Request | annotation | required |

Returns: Promise&lt;Response&gt; (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-4bb35dcf30f67647"></a>

## createBaselineObserver.finish

[electron/ai/llm-front-office/observability.d.cts:48](<../../../../../../../electron/ai/llm-front-office/observability.d.cts#L48>) · MethodSignature · declaration · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createBaselineObserver](<observability.d.cts.md#s-30b0af13bdedbf67>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| status | "succeeded" &#124; "failed" &#124; "cancelled" | annotation | required |
| error | { code?: string } | annotation | optional |

Returns: void (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-22a4d7600f21c0e6"></a>

## createBaselineObserver.snapshot

[electron/ai/llm-front-office/observability.d.cts:52](<../../../../../../../electron/ai/llm-front-office/observability.d.cts#L52>) · MethodSignature · declaration · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createBaselineObserver](<observability.d.cts.md#s-30b0af13bdedbf67>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: BaselineTrace &#124; null (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
