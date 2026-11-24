# types/entity-agents.ts: symbols

[Atlas](<../../../README.md>) / [Cross-boundary TypeScript contracts](<../../../modules/contracts.md>) / [types/entity-agents.ts:1](<../../../../../types/entity-agents.ts#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [types/entity-agents.ts](<entity-agents.ts.md#s-595dc5d7162a9485>) (Module)
- [AgentAssignment](<entity-agents.ts.md#s-9cd095537abbe572>) (TypeAliasDeclaration)
- [AssignmentContext](<entity-agents.ts.md#s-cd9228441b9ac380>) (TypeAliasDeclaration)
- [EngineDefinition](<entity-agents.ts.md#s-42f74bf50c325a5b>) (TypeAliasDeclaration)
- [AssignmentScope](<entity-agents.ts.md#s-a8f29ad94ad7984a>) (TypeAliasDeclaration)
- [AgentEvidenceReference](<entity-agents.ts.md#s-81e3479276694ba9>) (TypeAliasDeclaration)
- [PriceEvidence](<entity-agents.ts.md#s-dc4e85d8f7967b77>) (TypeAliasDeclaration)
- [AgentToolRequest](<entity-agents.ts.md#s-846f6645c399ce9d>) (TypeAliasDeclaration)
- [EntityAgentState](<entity-agents.ts.md#s-9d03ec0a2b78223d>) (TypeAliasDeclaration)
- [EntityAgentBridge](<entity-agents.ts.md#s-426353399ca8348c>) (InterfaceDeclaration)
- [EntityAgentBridge.clearEntityAgentChat](<entity-agents.ts.md#s-a241b5823afda0f1>) (MethodSignature)
- [EntityAgentBridge.engineDefinitions](<entity-agents.ts.md#s-069e71ed8a8816e3>) (MethodSignature)
- [EntityAgentBridge.listEntityAgents](<entity-agents.ts.md#s-8d00865130979187>) (MethodSignature)
- [EntityAgentBridge.assignEntityAgent](<entity-agents.ts.md#s-af91e8204b8c0681>) (MethodSignature)
- [EntityAgentBridge.removeEntityAgent](<entity-agents.ts.md#s-9f9e4fc1b91cfa48>) (MethodSignature)
- [EntityAgentBridge.openEntityAgent](<entity-agents.ts.md#s-be5d3fceb3c2dbd3>) (MethodSignature)
- [EntityAgentBridge.sendEntityAgent](<entity-agents.ts.md#s-01a5b123e1ecb835>) (MethodSignature)
- [EntityAgentBridge.retrieveEntityAgentKnowledge](<entity-agents.ts.md#s-fc1d2a39fa2f8a94>) (MethodSignature)
- [EntityAgentBridge.executeEntityAgent](<entity-agents.ts.md#s-99be1f7450b67982>) (MethodSignature)
- [EntityAgentBridge.proposeEntityAgent](<entity-agents.ts.md#s-0a074d6bf1c2dea2>) (MethodSignature)
- [EntityAgentBridge.decideEntityAgentRequest](<entity-agents.ts.md#s-bf1f6ddd990b71f4>) (MethodSignature)

<a id="s-595dc5d7162a9485"></a>

## types/entity-agents.ts

[types/entity-agents.ts:1](<../../../../../types/entity-agents.ts#L1>) · Module · declaration · [Cross-boundary TypeScript contracts](<../../../modules/contracts.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-9cd095537abbe572"></a>

## AgentAssignment

[types/entity-agents.ts:18](<../../../../../types/entity-agents.ts#L18>) · TypeAliasDeclaration · declaration · [Cross-boundary TypeScript contracts](<../../../modules/contracts.md>)

Saved association between one reusable Agent definition and one Entity; not a copy of the Agent.

Purpose evidence: jsdoc.

Exported as: AgentAssignment ([types/entity-agents.ts:1](<../../../../../types/entity-agents.ts#L1>)).

Lexical owner: [types/entity-agents.ts](<entity-agents.ts.md#s-595dc5d7162a9485>).

Contract evidence: typescript-declaration. [Full declaration index](<../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-cd9228441b9ac380"></a>

## AssignmentContext

[types/entity-agents.ts:26](<../../../../../types/entity-agents.ts#L26>) · TypeAliasDeclaration · declaration · [Cross-boundary TypeScript contracts](<../../../modules/contracts.md>)

Compact navigation context used when opening an assigned Agent from its Entity.

Purpose evidence: jsdoc.

Exported as: AssignmentContext ([types/entity-agents.ts:1](<../../../../../types/entity-agents.ts#L1>)).

Lexical owner: [types/entity-agents.ts](<entity-agents.ts.md#s-595dc5d7162a9485>).

Contract evidence: typescript-declaration. [Full declaration index](<../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-42f74bf50c325a5b"></a>

## EngineDefinition

[types/entity-agents.ts:33](<../../../../../types/entity-agents.ts#L33>) · TypeAliasDeclaration · declaration · [Cross-boundary TypeScript contracts](<../../../modules/contracts.md>)

Registration metadata for construction/discovery; does not assert configuration, authorization or provider health.

Purpose evidence: jsdoc.

Exported as: EngineDefinition ([types/entity-agents.ts:1](<../../../../../types/entity-agents.ts#L1>)).

Lexical owner: [types/entity-agents.ts](<entity-agents.ts.md#s-595dc5d7162a9485>).

Contract evidence: typescript-declaration. [Full declaration index](<../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-a8f29ad94ad7984a"></a>

## AssignmentScope

[types/entity-agents.ts:40](<../../../../../types/entity-agents.ts#L40>) · TypeAliasDeclaration · declaration · [Cross-boundary TypeScript contracts](<../../../modules/contracts.md>)

Captured Universe path plus saved assignment UUID. Backend rejects requests after the active Universe changes.

Purpose evidence: jsdoc.

Exported as: AssignmentScope ([types/entity-agents.ts:1](<../../../../../types/entity-agents.ts#L1>)).

Lexical owner: [types/entity-agents.ts](<entity-agents.ts.md#s-595dc5d7162a9485>).

Contract evidence: typescript-declaration. [Full declaration index](<../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-81e3479276694ba9"></a>

## AgentEvidenceReference

[types/entity-agents.ts:42](<../../../../../types/entity-agents.ts#L42>) · TypeAliasDeclaration · declaration · [Cross-boundary TypeScript contracts](<../../../modules/contracts.md>)

Citation identity, source version and location only; does not duplicate the chunk's private text.

Purpose evidence: jsdoc.

Exported as: AgentEvidenceReference ([types/entity-agents.ts:1](<../../../../../types/entity-agents.ts#L1>)).

Lexical owner: [types/entity-agents.ts](<entity-agents.ts.md#s-595dc5d7162a9485>).

Contract evidence: typescript-declaration. [Full declaration index](<../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-dc4e85d8f7967b77"></a>

## PriceEvidence

[types/entity-agents.ts:54](<../../../../../types/entity-agents.ts#L54>) · TypeAliasDeclaration · declaration · [Cross-boundary TypeScript contracts](<../../../modules/contracts.md>)

Compact price evidence derived from a successful Engine execution, retaining freshness and provenance.

Purpose evidence: jsdoc.

Exported as: PriceEvidence ([types/entity-agents.ts:1](<../../../../../types/entity-agents.ts#L1>)).

Lexical owner: [types/entity-agents.ts](<entity-agents.ts.md#s-595dc5d7162a9485>).

Contract evidence: typescript-declaration. [Full declaration index](<../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-846f6645c399ce9d"></a>

## AgentToolRequest

[types/entity-agents.ts:76](<../../../../../types/entity-agents.ts#L76>) · TypeAliasDeclaration · declaration · [Cross-boundary TypeScript contracts](<../../../modules/contracts.md>)

Backend-persisted proposal for one exact invocation; creating a request does not execute its Engine.

Purpose evidence: jsdoc.

Exported as: AgentToolRequest ([types/entity-agents.ts:1](<../../../../../types/entity-agents.ts#L1>)).

Lexical owner: [types/entity-agents.ts](<entity-agents.ts.md#s-595dc5d7162a9485>).

Contract evidence: typescript-declaration. [Full declaration index](<../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-9d03ec0a2b78223d"></a>

## EntityAgentState

[types/entity-agents.ts:109](<../../../../../types/entity-agents.ts#L109>) · TypeAliasDeclaration · declaration · [Cross-boundary TypeScript contracts](<../../../modules/contracts.md>)

UI snapshot returned by opening/chatting/deciding an assignment; combines persisted history with live availability.

Purpose evidence: jsdoc.

Exported as: EntityAgentState ([types/entity-agents.ts:1](<../../../../../types/entity-agents.ts#L1>)).

Lexical owner: [types/entity-agents.ts](<entity-agents.ts.md#s-595dc5d7162a9485>).

Contract evidence: typescript-declaration. [Full declaration index](<../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-426353399ca8348c"></a>

## EntityAgentBridge

[types/entity-agents.ts:212](<../../../../../types/entity-agents.ts#L212>) · InterfaceDeclaration · declaration · [Cross-boundary TypeScript contracts](<../../../modules/contracts.md>)

Narrow preload API used by the renderer. Methods return promises; backend validation, scope or provider failures can reject them.

Purpose evidence: jsdoc.

Exported as: EntityAgentBridge ([types/entity-agents.ts:1](<../../../../../types/entity-agents.ts#L1>)).

Lexical owner: [types/entity-agents.ts](<entity-agents.ts.md#s-595dc5d7162a9485>).

Contract evidence: typescript-declaration. [Full declaration index](<../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-a241b5823afda0f1"></a>

## EntityAgentBridge.clearEntityAgentChat

[types/entity-agents.ts:214](<../../../../../types/entity-agents.ts#L214>) · MethodSignature · declaration · [Cross-boundary TypeScript contracts](<../../../modules/contracts.md>)

Clears this assignment's transcript and unused approvals while retaining execution evidence and sources.

Purpose evidence: jsdoc.

Lexical owner: [EntityAgentBridge](<entity-agents.ts.md#s-426353399ca8348c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | AssignmentScope | annotation | required |

Returns: Promise&lt;EntityAgentState&gt; (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-069e71ed8a8816e3"></a>

## EntityAgentBridge.engineDefinitions

[types/entity-agents.ts:216](<../../../../../types/entity-agents.ts#L216>) · MethodSignature · declaration · [Cross-boundary TypeScript contracts](<../../../modules/contracts.md>)

Lists built-in registration metadata without executing Engines or probing providers.

Purpose evidence: jsdoc.

Lexical owner: [EntityAgentBridge](<entity-agents.ts.md#s-426353399ca8348c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: Promise&lt;EngineDefinition&#91;&#93;&gt; (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-8d00865130979187"></a>

## EntityAgentBridge.listEntityAgents

[types/entity-agents.ts:218](<../../../../../types/entity-agents.ts#L218>) · MethodSignature · declaration · [Cross-boundary TypeScript contracts](<../../../modules/contracts.md>)

Lists current associations, optionally restricted to one Entity; does not retrieve private knowledge.

Purpose evidence: jsdoc.

Lexical owner: [EntityAgentBridge](<entity-agents.ts.md#s-426353399ca8348c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | { vaultPath: string; entityId?: string; } | annotation | required |

Returns: Promise&lt;AgentAssignment&#91;&#93;&gt; (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-af91e8204b8c0681"></a>

## EntityAgentBridge.assignEntityAgent

[types/entity-agents.ts:223](<../../../../../types/entity-agents.ts#L223>) · MethodSignature · declaration · [Cross-boundary TypeScript contracts](<../../../modules/contracts.md>)

Idempotently links an existing Agent to an existing Entity; returns the original assignment for a repeated pair.

Purpose evidence: jsdoc.

Lexical owner: [EntityAgentBridge](<entity-agents.ts.md#s-426353399ca8348c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | { vaultPath: string; entityId: string; agentId: string; } | annotation | required |

Returns: Promise&lt;AgentAssignment&gt; (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-9f9e4fc1b91cfa48"></a>

## EntityAgentBridge.removeEntityAgent

[types/entity-agents.ts:229](<../../../../../types/entity-agents.ts#L229>) · MethodSignature · declaration · [Cross-boundary TypeScript contracts](<../../../modules/contracts.md>)

Removes the association, retaining the reusable Agent definition and isolated historical files.

Purpose evidence: jsdoc.

Lexical owner: [EntityAgentBridge](<entity-agents.ts.md#s-426353399ca8348c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | AssignmentScope | annotation | required |

Returns: Promise&lt;boolean&gt; (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-be5d3fceb3c2dbd3"></a>

## EntityAgentBridge.openEntityAgent

[types/entity-agents.ts:231](<../../../../../types/entity-agents.ts#L231>) · MethodSignature · declaration · [Cross-boundary TypeScript contracts](<../../../modules/contracts.md>)

Opens history with current availability metadata; does not invoke inference or an Engine.

Purpose evidence: jsdoc.

Lexical owner: [EntityAgentBridge](<entity-agents.ts.md#s-426353399ca8348c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | AssignmentScope | annotation | required |

Returns: Promise&lt;EntityAgentState&gt; (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-01a5b123e1ecb835"></a>

## EntityAgentBridge.sendEntityAgent

[types/entity-agents.ts:233](<../../../../../types/entity-agents.ts#L233>) · MethodSignature · declaration · [Cross-boundary TypeScript contracts](<../../../modules/contracts.md>)

Persists a human turn, refreshes derived Identity and runs scoped optional inference; requestId deduplicates message retries.

Purpose evidence: jsdoc.

Lexical owner: [EntityAgentBridge](<entity-agents.ts.md#s-426353399ca8348c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | AssignmentScope & { message: string; requestId?: string } | annotation | required |

Returns: Promise&lt;EntityAgentState&gt; (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-fc1d2a39fa2f8a94"></a>

## EntityAgentBridge.retrieveEntityAgentKnowledge

[types/entity-agents.ts:237](<../../../../../types/entity-agents.ts#L237>) · MethodSignature · declaration · [Cross-boundary TypeScript contracts](<../../../modules/contracts.md>)

Reads a bounded lexical chunk page through the connected Knowledge node and Entity authorization boundary.

Purpose evidence: jsdoc.

Lexical owner: [EntityAgentBridge](<entity-agents.ts.md#s-426353399ca8348c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | AssignmentScope & { query: string; offset?: number; limit?: number } | annotation | required |

Returns: Promise&lt;IdentityChunkPage&gt; (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-99be1f7450b67982"></a>

## EntityAgentBridge.executeEntityAgent

[types/entity-agents.ts:241](<../../../../../types/entity-agents.ts#L241>) · MethodSignature · declaration · [Cross-boundary TypeScript contracts](<../../../modules/contracts.md>)

Runs an authorized read-only capability through the backend execution path and returns actual audit/result evidence.

Purpose evidence: jsdoc.

Lexical owner: [EntityAgentBridge](<entity-agents.ts.md#s-426353399ca8348c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | AssignmentScope & { nodeId: string; capabilityId: string; approved: boolean; arguments?: { force?: boolean }; } | annotation | required |

Returns: Promise&lt;{ audit: { id: string; status: string }; result: unknown }&gt; (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-0a074d6bf1c2dea2"></a>

## EntityAgentBridge.proposeEntityAgent

[types/entity-agents.ts:250](<../../../../../types/entity-agents.ts#L250>) · MethodSignature · declaration · [Cross-boundary TypeScript contracts](<../../../modules/contracts.md>)

Persists a graph/Identity-bound proposal without executing it; requestId supports idempotent proposal retries.

Purpose evidence: jsdoc.

Lexical owner: [EntityAgentBridge](<entity-agents.ts.md#s-426353399ca8348c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | AssignmentScope & { requestId?: string; nodeId: string; capabilityId: string; arguments?: { force?: boolean }; } | annotation | required |

Returns: Promise&lt;AgentToolRequest&gt; (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-bf1f6ddd990b71f4"></a>

## EntityAgentBridge.decideEntityAgentRequest

[types/entity-agents.ts:259](<../../../../../types/entity-agents.ts#L259>) · MethodSignature · declaration · [Cross-boundary TypeScript contracts](<../../../modules/contracts.md>)

Decides one exact pending request; consumed/expired/stale requests cannot authorize another invocation.

Purpose evidence: jsdoc.

Lexical owner: [EntityAgentBridge](<entity-agents.ts.md#s-426353399ca8348c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | AssignmentScope & { requestId: string; approved: boolean; /** False executes approved deterministic work without starting a continuation LLM turn. */ continueAgent?: boolean; } | annotation | required |

Returns: Promise&lt;EntityAgentState&gt; (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
