# types/entity-agents.ts: symbols

[Atlas](<../../../README.md>) / [Cross-boundary TypeScript contracts](<../../../modules/contracts.md>) / [types/entity-agents.ts:1](<../../../../../types/entity-agents.ts#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [types/entity-agents.ts](<entity-agents.ts.md#s-595dc5d7162a9485>) (Module)
- [AgentAssignment](<entity-agents.ts.md#s-9cd095537abbe572>) (TypeAliasDeclaration)
- [AssignmentContext](<entity-agents.ts.md#s-cd9228441b9ac380>) (TypeAliasDeclaration)
- [EngineDefinition](<entity-agents.ts.md#s-42f74bf50c325a5b>) (TypeAliasDeclaration)
- [AssignmentScope](<entity-agents.ts.md#s-e74aa358a489962f>) (TypeAliasDeclaration)
- [AgentEvidenceReference](<entity-agents.ts.md#s-1ce660572bf34161>) (TypeAliasDeclaration)
- [PriceEvidence](<entity-agents.ts.md#s-f1172313c0034f4e>) (TypeAliasDeclaration)
- [AgentToolRequest](<entity-agents.ts.md#s-8e5654657624db12>) (TypeAliasDeclaration)
- [EntityAgentState](<entity-agents.ts.md#s-ba5f3917f89d7b06>) (TypeAliasDeclaration)
- [EntityAgentBridge](<entity-agents.ts.md#s-2bd2e209dad96d7a>) (InterfaceDeclaration)
- [EntityAgentBridge.clearEntityAgentChat](<entity-agents.ts.md#s-ee7a92ec2be7fae7>) (MethodSignature)
- [EntityAgentBridge.engineDefinitions](<entity-agents.ts.md#s-dd92bf0818c5d690>) (MethodSignature)
- [EntityAgentBridge.listEntityAgents](<entity-agents.ts.md#s-c2c775ba70d04009>) (MethodSignature)
- [EntityAgentBridge.assignEntityAgent](<entity-agents.ts.md#s-55d36fcce756e235>) (MethodSignature)
- [EntityAgentBridge.removeEntityAgent](<entity-agents.ts.md#s-f5405018690eff91>) (MethodSignature)
- [EntityAgentBridge.openEntityAgent](<entity-agents.ts.md#s-03bad53c9722598f>) (MethodSignature)
- [EntityAgentBridge.sendEntityAgent](<entity-agents.ts.md#s-074ca8019e40a565>) (MethodSignature)
- [EntityAgentBridge.retrieveEntityAgentKnowledge](<entity-agents.ts.md#s-8afc98be1fd2ef63>) (MethodSignature)
- [EntityAgentBridge.executeEntityAgent](<entity-agents.ts.md#s-bff0e799ee332c02>) (MethodSignature)
- [EntityAgentBridge.proposeEntityAgent](<entity-agents.ts.md#s-be52bd085ef8e425>) (MethodSignature)
- [EntityAgentBridge.decideEntityAgentRequest](<entity-agents.ts.md#s-56def12363b376ef>) (MethodSignature)

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

<a id="s-e74aa358a489962f"></a>

## AssignmentScope

[types/entity-agents.ts:41](<../../../../../types/entity-agents.ts#L41>) · TypeAliasDeclaration · declaration · [Cross-boundary TypeScript contracts](<../../../modules/contracts.md>)

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

<a id="s-1ce660572bf34161"></a>

## AgentEvidenceReference

[types/entity-agents.ts:43](<../../../../../types/entity-agents.ts#L43>) · TypeAliasDeclaration · declaration · [Cross-boundary TypeScript contracts](<../../../modules/contracts.md>)

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

<a id="s-f1172313c0034f4e"></a>

## PriceEvidence

[types/entity-agents.ts:55](<../../../../../types/entity-agents.ts#L55>) · TypeAliasDeclaration · declaration · [Cross-boundary TypeScript contracts](<../../../modules/contracts.md>)

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

<a id="s-8e5654657624db12"></a>

## AgentToolRequest

[types/entity-agents.ts:77](<../../../../../types/entity-agents.ts#L77>) · TypeAliasDeclaration · declaration · [Cross-boundary TypeScript contracts](<../../../modules/contracts.md>)

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

<a id="s-ba5f3917f89d7b06"></a>

## EntityAgentState

[types/entity-agents.ts:110](<../../../../../types/entity-agents.ts#L110>) · TypeAliasDeclaration · declaration · [Cross-boundary TypeScript contracts](<../../../modules/contracts.md>)

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

<a id="s-2bd2e209dad96d7a"></a>

## EntityAgentBridge

[types/entity-agents.ts:213](<../../../../../types/entity-agents.ts#L213>) · InterfaceDeclaration · declaration · [Cross-boundary TypeScript contracts](<../../../modules/contracts.md>)

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

<a id="s-ee7a92ec2be7fae7"></a>

## EntityAgentBridge.clearEntityAgentChat

[types/entity-agents.ts:215](<../../../../../types/entity-agents.ts#L215>) · MethodSignature · declaration · [Cross-boundary TypeScript contracts](<../../../modules/contracts.md>)

Clears this assignment's transcript and unused approvals while retaining execution evidence and sources.

Purpose evidence: jsdoc.

Lexical owner: [EntityAgentBridge](<entity-agents.ts.md#s-2bd2e209dad96d7a>).

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

<a id="s-dd92bf0818c5d690"></a>

## EntityAgentBridge.engineDefinitions

[types/entity-agents.ts:217](<../../../../../types/entity-agents.ts#L217>) · MethodSignature · declaration · [Cross-boundary TypeScript contracts](<../../../modules/contracts.md>)

Lists built-in registration metadata without executing Engines or probing providers.

Purpose evidence: jsdoc.

Lexical owner: [EntityAgentBridge](<entity-agents.ts.md#s-2bd2e209dad96d7a>).

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

<a id="s-c2c775ba70d04009"></a>

## EntityAgentBridge.listEntityAgents

[types/entity-agents.ts:219](<../../../../../types/entity-agents.ts#L219>) · MethodSignature · declaration · [Cross-boundary TypeScript contracts](<../../../modules/contracts.md>)

Lists current associations, optionally restricted to one Entity; does not retrieve private knowledge.

Purpose evidence: jsdoc.

Lexical owner: [EntityAgentBridge](<entity-agents.ts.md#s-2bd2e209dad96d7a>).

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

<a id="s-55d36fcce756e235"></a>

## EntityAgentBridge.assignEntityAgent

[types/entity-agents.ts:224](<../../../../../types/entity-agents.ts#L224>) · MethodSignature · declaration · [Cross-boundary TypeScript contracts](<../../../modules/contracts.md>)

Idempotently links an existing Agent to an existing Entity; returns the original assignment for a repeated pair.

Purpose evidence: jsdoc.

Lexical owner: [EntityAgentBridge](<entity-agents.ts.md#s-2bd2e209dad96d7a>).

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

<a id="s-f5405018690eff91"></a>

## EntityAgentBridge.removeEntityAgent

[types/entity-agents.ts:230](<../../../../../types/entity-agents.ts#L230>) · MethodSignature · declaration · [Cross-boundary TypeScript contracts](<../../../modules/contracts.md>)

Removes the association, retaining the reusable Agent definition and isolated historical files.

Purpose evidence: jsdoc.

Lexical owner: [EntityAgentBridge](<entity-agents.ts.md#s-2bd2e209dad96d7a>).

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

<a id="s-03bad53c9722598f"></a>

## EntityAgentBridge.openEntityAgent

[types/entity-agents.ts:232](<../../../../../types/entity-agents.ts#L232>) · MethodSignature · declaration · [Cross-boundary TypeScript contracts](<../../../modules/contracts.md>)

Opens history with current availability metadata; does not invoke inference or an Engine.

Purpose evidence: jsdoc.

Lexical owner: [EntityAgentBridge](<entity-agents.ts.md#s-2bd2e209dad96d7a>).

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

<a id="s-074ca8019e40a565"></a>

## EntityAgentBridge.sendEntityAgent

[types/entity-agents.ts:234](<../../../../../types/entity-agents.ts#L234>) · MethodSignature · declaration · [Cross-boundary TypeScript contracts](<../../../modules/contracts.md>)

Persists a human turn, refreshes derived Identity and runs scoped optional inference; requestId deduplicates message retries.

Purpose evidence: jsdoc.

Lexical owner: [EntityAgentBridge](<entity-agents.ts.md#s-2bd2e209dad96d7a>).

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

<a id="s-8afc98be1fd2ef63"></a>

## EntityAgentBridge.retrieveEntityAgentKnowledge

[types/entity-agents.ts:238](<../../../../../types/entity-agents.ts#L238>) · MethodSignature · declaration · [Cross-boundary TypeScript contracts](<../../../modules/contracts.md>)

Reads a bounded lexical chunk page through the connected Knowledge node and Entity authorization boundary.

Purpose evidence: jsdoc.

Lexical owner: [EntityAgentBridge](<entity-agents.ts.md#s-2bd2e209dad96d7a>).

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

<a id="s-bff0e799ee332c02"></a>

## EntityAgentBridge.executeEntityAgent

[types/entity-agents.ts:242](<../../../../../types/entity-agents.ts#L242>) · MethodSignature · declaration · [Cross-boundary TypeScript contracts](<../../../modules/contracts.md>)

Runs an authorized read-only capability through the backend execution path and returns actual audit/result evidence.

Purpose evidence: jsdoc.

Lexical owner: [EntityAgentBridge](<entity-agents.ts.md#s-2bd2e209dad96d7a>).

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

<a id="s-be52bd085ef8e425"></a>

## EntityAgentBridge.proposeEntityAgent

[types/entity-agents.ts:251](<../../../../../types/entity-agents.ts#L251>) · MethodSignature · declaration · [Cross-boundary TypeScript contracts](<../../../modules/contracts.md>)

Persists a graph/Identity-bound proposal without executing it; requestId supports idempotent proposal retries.

Purpose evidence: jsdoc.

Lexical owner: [EntityAgentBridge](<entity-agents.ts.md#s-2bd2e209dad96d7a>).

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

<a id="s-56def12363b376ef"></a>

## EntityAgentBridge.decideEntityAgentRequest

[types/entity-agents.ts:260](<../../../../../types/entity-agents.ts#L260>) · MethodSignature · declaration · [Cross-boundary TypeScript contracts](<../../../modules/contracts.md>)

Decides one exact pending request; consumed/expired/stale requests cannot authorize another invocation.

Purpose evidence: jsdoc.

Lexical owner: [EntityAgentBridge](<entity-agents.ts.md#s-2bd2e209dad96d7a>).

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
