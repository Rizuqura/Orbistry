# Agent workspace and construction (Portal)

[Atlas](<../README.md>) / [All symbols and callers/callees](<../symbols/portal-agents.md>)

Presents assigned-agent conversations, assignment controls and retained agent construction.

Owns: features/agents/. This ownership is editorial; source locations and import edges below are generated facts.

13 source files; 447 callable declarations; 4 contract declarations.

## Entry points and exported symbols

Candidates from compiler export tables and methods on exported classes. Registration, availability, authorization and runtime reachability must be checked separately.

| Symbol | Source | Kind |
| --- | --- | --- |
| [AddAgentDialog](<../symbols/files/features/agents/add-agent-dialog.tsx.md#s-6d7f9f569cbfc790>) | [features/agents/add-agent-dialog.tsx:5](<../../../features/agents/add-agent-dialog.tsx#L5>) | FunctionDeclaration |
| [AgentAvatar](<../symbols/files/features/agents/agent-avatar.tsx.md#s-2d9484ba3bbe8118>) | [features/agents/agent-avatar.tsx:4](<../../../features/agents/agent-avatar.tsx#L4>) | FunctionDeclaration |
| [AgentConstruction](<../symbols/files/features/agents/agent-construction.tsx.md#s-56fc0c6bc133a86f>) | [features/agents/agent-construction.tsx:59](<../../../features/agents/agent-construction.tsx#L59>) | FunctionDeclaration |
| [AgentContacts](<../symbols/files/features/agents/agent-contacts.tsx.md#s-0683638d3e906a24>) | [features/agents/agent-contacts.tsx:239](<../../../features/agents/agent-contacts.tsx#L239>) | FunctionDeclaration |
| [AgentWidths](<../symbols/files/features/agents/agent-layout.ts.md#s-1eb4579a93d42a90>) | [features/agents/agent-layout.ts:1](<../../../features/agents/agent-layout.ts#L1>) | TypeAliasDeclaration |
| [DEFAULT_AGENT_WIDTHS](<../symbols/files/features/agents/agent-layout.ts.md#s-8ab75c66c9a04e2c>) | [features/agents/agent-layout.ts:2](<../../../features/agents/agent-layout.ts#L2>) | VariableDeclaration |
| [clampAgentWidths](<../symbols/files/features/agents/agent-layout.ts.md#s-899242c4b23b3b29>) | [features/agents/agent-layout.ts:3](<../../../features/agents/agent-layout.ts#L3>) | FunctionDeclaration |
| [AgentSettings](<../symbols/files/features/agents/agent-settings.tsx.md#s-250a95b02e95b14e>) | [features/agents/agent-settings.tsx:8](<../../../features/agents/agent-settings.tsx#L8>) | FunctionDeclaration |
| [AgentWorkspace](<../symbols/files/features/agents/agent-workspace.tsx.md#s-370d4fa7b9e322b3>) | [features/agents/agent-workspace.tsx:58](<../../../features/agents/agent-workspace.tsx#L58>) | FunctionDeclaration |
| [ConstructionSourcePicker](<../symbols/files/features/agents/construction-source-picker.tsx.md#s-ff8838eaaf3b5a3a>) | [features/agents/construction-source-picker.tsx:11](<../../../features/agents/construction-source-picker.tsx#L11>) | FunctionDeclaration |
| [EngineInspector](<../symbols/files/features/agents/engine-inspector.tsx.md#s-d17af9c9408aeb76>) | [features/agents/engine-inspector.tsx:5](<../../../features/agents/engine-inspector.tsx#L5>) | FunctionDeclaration |
| [EngineNodeSettings](<../symbols/files/features/agents/engine-node-settings.tsx.md#s-288e279cf9770500>) | [features/agents/engine-node-settings.tsx:7](<../../../features/agents/engine-node-settings.tsx#L7>) | FunctionDeclaration |
| [EntityAgentsDialog](<../symbols/files/features/agents/entity-agents-dialog.tsx.md#s-51a4d143dccfc064>) | [features/agents/entity-agents-dialog.tsx:13](<../../../features/agents/entity-agents-dialog.tsx#L13>) | FunctionDeclaration |
| [KnowledgeProposal](<../symbols/files/features/agents/knowledge-proposal.tsx.md#s-4141e2c6be4a8c15>) | [features/agents/knowledge-proposal.tsx:4](<../../../features/agents/knowledge-proposal.tsx#L4>) | FunctionDeclaration |
| [LegacyAgentWorkspace](<../symbols/files/features/agents/legacy-agent-workspace.tsx.md#s-853b434227bf82d8>) | [features/agents/legacy-agent-workspace.tsx:16](<../../../features/agents/legacy-agent-workspace.tsx#L16>) | FunctionDeclaration |

## Depends on

Literal runtime production-file imports only; lazy imports are included. Type, test, tool and external dependencies remain available in the full index.

- [Conversation presentation](<portal-chat.md>): 6 import sites; example [features/agents/agent-construction.tsx:20](<../../../features/agents/agent-construction.tsx#L20>).
- [Portal shell](<portal-shell.md>): 3 import sites; example [features/agents/agent-contacts.tsx:7](<../../../features/agents/agent-contacts.tsx#L7>).
- [WorldView and Knowledge Cards (Portal)](<portal-worldview.md>): 1 import sites; example [features/agents/agent-workspace.tsx:17](<../../../features/agents/agent-workspace.tsx#L17>).

## Depended on by

Literal runtime production-file imports only; lazy imports are included. Type, test, tool and external dependencies remain available in the full index.

- [Conversation presentation](<portal-chat.md>): 2 import sites; example [features/chat/chat-panel.tsx:14](<../../../features/chat/chat-panel.tsx#L14>).
- [Portal shell](<portal-shell.md>): 2 import sites; example [components/app-shell.tsx:24](<../../../components/app-shell.tsx#L24>).
- [WorldView and Knowledge Cards (Portal)](<portal-worldview.md>): 1 import sites; example [features/worldview/worldview.tsx:35](<../../../features/worldview/worldview.tsx#L35>).

## Contracts

- [AgentWidths](<../symbols/files/features/agents/agent-layout.ts.md#s-1eb4579a93d42a90>) — typescript-declaration; exported.
- [Props](<../symbols/files/features/agents/agent-workspace.tsx.md#s-b1ad1f23d5bd765b>) — typescript-declaration; local schema/type.
- [Node](<../symbols/files/features/agents/construction-source-picker.tsx.md#s-2d4729e1b9d6978e>) — typescript-declaration; local schema/type.
- [NodeConfig](<../symbols/files/features/agents/engine-node-settings.tsx.md#s-19cdf5e1ef6d50ea>) — typescript-declaration; local schema/type.

## Source inventory

| File | Role | Declarations |
| --- | --- | --- |
| [features/agents/add-agent-dialog.tsx:1](<../../../features/agents/add-agent-dialog.tsx#L1>) | production | 7 |
| [features/agents/agent-avatar.tsx:1](<../../../features/agents/agent-avatar.tsx#L1>) | production | 3 |
| [features/agents/agent-construction.tsx:1](<../../../features/agents/agent-construction.tsx#L1>) | production | 114 |
| [features/agents/agent-contacts.tsx:1](<../../../features/agents/agent-contacts.tsx#L1>) | production | 28 |
| [features/agents/agent-layout.ts:1](<../../../features/agents/agent-layout.ts#L1>) | production | 3 |
| [features/agents/agent-settings.tsx:1](<../../../features/agents/agent-settings.tsx#L1>) | production | 7 |
| [features/agents/agent-workspace.tsx:1](<../../../features/agents/agent-workspace.tsx#L1>) | production | 128 |
| [features/agents/construction-source-picker.tsx:1](<../../../features/agents/construction-source-picker.tsx#L1>) | production | 25 |
| [features/agents/engine-inspector.tsx:1](<../../../features/agents/engine-inspector.tsx#L1>) | production | 22 |
| [features/agents/engine-node-settings.tsx:1](<../../../features/agents/engine-node-settings.tsx#L1>) | production | 11 |
| [features/agents/entity-agents-dialog.tsx:1](<../../../features/agents/entity-agents-dialog.tsx#L1>) | production | 55 |
| [features/agents/knowledge-proposal.tsx:1](<../../../features/agents/knowledge-proposal.tsx#L1>) | production | 10 |
| [features/agents/legacy-agent-workspace.tsx:1](<../../../features/agents/legacy-agent-workspace.tsx#L1>) | production | 39 |
