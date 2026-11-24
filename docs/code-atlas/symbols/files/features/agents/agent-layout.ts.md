# features/agents/agent-layout.ts: symbols

[Atlas](<../../../../README.md>) / [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>) / [features/agents/agent-layout.ts:1](<../../../../../../features/agents/agent-layout.ts#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [features/agents/agent-layout.ts](<agent-layout.ts.md#s-14a3541aa8d7cba4>) (Module)
- [AgentWidths](<agent-layout.ts.md#s-1eb4579a93d42a90>) (TypeAliasDeclaration)
- [DEFAULT_AGENT_WIDTHS](<agent-layout.ts.md#s-8ab75c66c9a04e2c>) (VariableDeclaration)
- [clampAgentWidths](<agent-layout.ts.md#s-899242c4b23b3b29>) (FunctionDeclaration)

<a id="s-14a3541aa8d7cba4"></a>

## features/agents/agent-layout.ts

[features/agents/agent-layout.ts:1](<../../../../../../features/agents/agent-layout.ts#L1>) · Module · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/chat/agent-layout.test.cjs:3](<../../../../../../features/chat/agent-layout.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-1eb4579a93d42a90"></a>

## AgentWidths

[features/agents/agent-layout.ts:1](<../../../../../../features/agents/agent-layout.ts#L1>) · TypeAliasDeclaration · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: AgentWidths ([features/agents/agent-layout.ts:1](<../../../../../../features/agents/agent-layout.ts#L1>)).

Lexical owner: [features/agents/agent-layout.ts](<agent-layout.ts.md#s-14a3541aa8d7cba4>).

Contract evidence: typescript-declaration. [Full declaration index](<../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/chat/agent-layout.test.cjs:3](<../../../../../../features/chat/agent-layout.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-8ab75c66c9a04e2c"></a>

## DEFAULT_AGENT_WIDTHS

[features/agents/agent-layout.ts:2](<../../../../../../features/agents/agent-layout.ts#L2>) · VariableDeclaration · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: DEFAULT_AGENT_WIDTHS ([features/agents/agent-layout.ts:1](<../../../../../../features/agents/agent-layout.ts#L1>)).

Lexical owner: [features/agents/agent-layout.ts](<agent-layout.ts.md#s-14a3541aa8d7cba4>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/chat/agent-layout.test.cjs:3](<../../../../../../features/chat/agent-layout.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-899242c4b23b3b29"></a>

## clampAgentWidths

[features/agents/agent-layout.ts:3](<../../../../../../features/agents/agent-layout.ts#L3>) · FunctionDeclaration · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: clampAgentWidths ([features/agents/agent-layout.ts:1](<../../../../../../features/agents/agent-layout.ts#L1>)).

Lexical owner: [features/agents/agent-layout.ts](<agent-layout.ts.md#s-14a3541aa8d7cba4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | AgentWidths | annotation | required |
| width | number | annotation | required |

Returns: AgentWidths (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [LegacyAgentWorkspace](<legacy-agent-workspace.tsx.md#s-853b434227bf82d8>) — [features/agents/legacy-agent-workspace.tsx:118](<../../../../../../features/agents/legacy-agent-workspace.tsx#L118>)
- [LegacyAgentWorkspace.divider.&lt;anonymous@149:20&gt;.&lt;anonymous@153:19&gt;](<legacy-agent-workspace.tsx.md#s-316744a9c2fb105f>) — [features/agents/legacy-agent-workspace.tsx:153](<../../../../../../features/agents/legacy-agent-workspace.tsx#L153>)
- [LegacyAgentWorkspace.divider.&lt;anonymous@158:18&gt;.&lt;anonymous@164:21&gt;](<legacy-agent-workspace.tsx.md#s-be38b56eaf158597>) — [features/agents/legacy-agent-workspace.tsx:165](<../../../../../../features/agents/legacy-agent-workspace.tsx#L165>)
- [&lt;anonymous@4:97&gt;](<../chat/agent-layout.test.cjs.md#s-fae97086f8e0eda5>) — [features/chat/agent-layout.test.cjs:6](<../../../../../../features/chat/agent-layout.test.cjs#L6>)
- [&lt;anonymous@4:97&gt;](<../chat/agent-layout.test.cjs.md#s-fae97086f8e0eda5>) — [features/chat/agent-layout.test.cjs:9](<../../../../../../features/chat/agent-layout.test.cjs#L9>)
- [&lt;anonymous@4:97&gt;](<../chat/agent-layout.test.cjs.md#s-fae97086f8e0eda5>) — [features/chat/agent-layout.test.cjs:12](<../../../../../../features/chat/agent-layout.test.cjs#L12>)

Unresolved / external call sites: 14.

- Math.max — external-or-dynamic-dispatch; [features/agents/agent-layout.ts:7](<../../../../../../features/agents/agent-layout.ts#L7>)
- Math.min — external-or-dynamic-dispatch; [features/agents/agent-layout.ts:8](<../../../../../../features/agents/agent-layout.ts#L8>)
- Math.max — external-or-dynamic-dispatch; [features/agents/agent-layout.ts:10](<../../../../../../features/agents/agent-layout.ts#L10>)
- Number.isFinite — external-or-dynamic-dispatch; [features/agents/agent-layout.ts:10](<../../../../../../features/agents/agent-layout.ts#L10>)
- Math.min — external-or-dynamic-dispatch; [features/agents/agent-layout.ts:12](<../../../../../../features/agents/agent-layout.ts#L12>)
- Math.max — external-or-dynamic-dispatch; [features/agents/agent-layout.ts:14](<../../../../../../features/agents/agent-layout.ts#L14>)
- Number.isFinite — external-or-dynamic-dispatch; [features/agents/agent-layout.ts:14](<../../../../../../features/agents/agent-layout.ts#L14>)
- Math.min — external-or-dynamic-dispatch; [features/agents/agent-layout.ts:17](<../../../../../../features/agents/agent-layout.ts#L17>)
- 6 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [features/chat/agent-layout.test.cjs:6](<../../../../../../features/chat/agent-layout.test.cjs#L6>) — static-call-site; coverage not established.
- [features/chat/agent-layout.test.cjs:9](<../../../../../../features/chat/agent-layout.test.cjs#L9>) — static-call-site; coverage not established.
- [features/chat/agent-layout.test.cjs:12](<../../../../../../features/chat/agent-layout.test.cjs#L12>) — static-call-site; coverage not established.
- [features/chat/agent-layout.test.cjs:3](<../../../../../../features/chat/agent-layout.test.cjs#L3>) — file-import-only; coverage not established.
