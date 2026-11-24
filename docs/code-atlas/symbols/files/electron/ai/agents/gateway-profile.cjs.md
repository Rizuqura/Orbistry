# electron/ai/agents/gateway-profile.cjs: symbols

[Atlas](<../../../../../README.md>) / [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>) / [electron/ai/agents/gateway-profile.cjs:1](<../../../../../../../electron/ai/agents/gateway-profile.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/agents/gateway-profile.cjs](<gateway-profile.cjs.md#s-68745bea32dd29b5>) (Module)
- [GATEWAY_ID](<gateway-profile.cjs.md#s-ec341f7833b3575a>) (VariableDeclaration)
- [gatewayProfile](<gateway-profile.cjs.md#s-a31ba5d37b2db799>) (FunctionDeclaration)

<a id="s-68745bea32dd29b5"></a>

## electron/ai/agents/gateway-profile.cjs

[electron/ai/agents/gateway-profile.cjs:1](<../../../../../../../electron/ai/agents/gateway-profile.cjs#L1>) · Module · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-ec341f7833b3575a"></a>

## GATEWAY_ID

[electron/ai/agents/gateway-profile.cjs:1](<../../../../../../../electron/ai/agents/gateway-profile.cjs#L1>) · VariableDeclaration · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: GATEWAY_ID ([electron/ai/agents/gateway-profile.cjs:1](<../../../../../../../electron/ai/agents/gateway-profile.cjs#L1>)).

Lexical owner: [electron/ai/agents/gateway-profile.cjs](<gateway-profile.cjs.md#s-68745bea32dd29b5>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-a31ba5d37b2db799"></a>

## gatewayProfile

[electron/ai/agents/gateway-profile.cjs:3](<../../../../../../../electron/ai/agents/gateway-profile.cjs#L3>) · FunctionDeclaration · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

Returns the host-owned coordinator identity. It is never stored as a user-editable or assignable Entity Agent.

Purpose evidence: jsdoc.

Exported as: gatewayProfile ([electron/ai/agents/gateway-profile.cjs:1](<../../../../../../../electron/ai/agents/gateway-profile.cjs#L1>)).

Lexical owner: [electron/ai/agents/gateway-profile.cjs](<gateway-profile.cjs.md#s-68745bea32dd29b5>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: { id: string; displayName: string; avatar: { type: string; letter: string; }; customInstructions: string; personality: string; description: string; mode: string; policyVersion: string; createdAt: string; updatedAt: string; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [AgentStore.get](<agent-store.cjs.md#s-feff3820609fc57c>) — [electron/ai/agents/agent-store.cjs:250](<../../../../../../../electron/ai/agents/agent-store.cjs#L250>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
