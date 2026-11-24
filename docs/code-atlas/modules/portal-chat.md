# Conversation presentation

[Atlas](<../README.md>) / [All symbols and callers/callees](<../symbols/portal-chat.md>)

Owns conversation rendering, bridge connection, state hooks and history controls.

Owns: features/chat/ and components/chat-panel.tsx. This ownership is editorial; source locations and import edges below are generated facts.

19 source files; 310 callable declarations; 9 contract declarations.

## Entry points and exported symbols

Candidates from compiler export tables and methods on exported classes. Registration, availability, authorization and runtime reachability must be checked separately.

| Symbol | Source | Kind |
| --- | --- | --- |
| [ChatMarkdown](<../symbols/files/features/chat/chat-markdown.tsx.md#s-7cc4e241b2b93021>) | [features/chat/chat-markdown.tsx:38](<../../../features/chat/chat-markdown.tsx#L38>) | VariableDeclaration |
| [ChatPanelProps](<../symbols/files/features/chat/chat-panel.tsx.md#s-31a9d6c9f46e52f7>) | [features/chat/chat-panel.tsx:21](<../../../features/chat/chat-panel.tsx#L21>) | TypeAliasDeclaration |
| [ChatPanel](<../symbols/files/features/chat/chat-panel.tsx.md#s-e38ffd3c06175ce1>) | [features/chat/chat-panel.tsx:36](<../../../features/chat/chat-panel.tsx#L36>) | FunctionDeclaration |
| [bannerStyle](<../symbols/files/features/chat/chat-presentation.ts.md#s-2b77ce68d12bd519>) | [features/chat/chat-presentation.ts:3](<../../../features/chat/chat-presentation.ts#L3>) | FunctionDeclaration |
| [chatReadingSize](<../symbols/files/features/chat/chat-presentation.ts.md#s-d1401d6d0629913e>) | [features/chat/chat-presentation.ts:16](<../../../features/chat/chat-presentation.ts#L16>) | FunctionDeclaration |
| [wallpaperStyle](<../symbols/files/features/chat/chat-presentation.ts.md#s-f651f5a4d6934160>) | [features/chat/chat-presentation.ts:19](<../../../features/chat/chat-presentation.ts#L19>) | FunctionDeclaration |
| [chatErrorMessage](<../symbols/files/features/chat/context-readiness.ts.md#s-379c9ad6215d15a7>) | [features/chat/context-readiness.ts:1](<../../../features/chat/context-readiness.ts#L1>) | FunctionDeclaration |
| [ConversationHistory](<../symbols/files/features/chat/conversation-history.tsx.md#s-6d7ac1ac2fcf1950>) | [features/chat/conversation-history.tsx:11](<../../../features/chat/conversation-history.tsx#L11>) | FunctionDeclaration |
| [AI_API_VERSION](<../symbols/files/features/chat/desktop-client.ts.md#s-6b90c634568573ad>) | [features/chat/desktop-client.ts:3](<../../../features/chat/desktop-client.ts#L3>) | VariableDeclaration |
| [connectAi](<../symbols/files/features/chat/desktop-client.ts.md#s-82920538c0c0e164>) | [features/chat/desktop-client.ts:5](<../../../features/chat/desktop-client.ts#L5>) | FunctionDeclaration |
| [EngineReportAttachment](<../symbols/files/features/chat/engine-report-attachment.tsx.md#s-5e65cd708d089698>) | [features/chat/engine-report-attachment.tsx:4](<../../../features/chat/engine-report-attachment.tsx#L4>) | FunctionDeclaration |
| [InlinePart](<../symbols/files/features/chat/markdown-format.ts.md#s-c816eebfd6b7d76b>) | [features/chat/markdown-format.ts:1](<../../../features/chat/markdown-format.ts#L1>) | TypeAliasDeclaration |
| [safeHref](<../symbols/files/features/chat/markdown-format.ts.md#s-b1bd256ff188be15>) | [features/chat/markdown-format.ts:4](<../../../features/chat/markdown-format.ts#L4>) | FunctionDeclaration |
| [inlineParts](<../symbols/files/features/chat/markdown-format.ts.md#s-55b079f7f27f6ace>) | [features/chat/markdown-format.ts:13](<../../../features/chat/markdown-format.ts#L13>) | FunctionDeclaration |
| [MarkdownBlock](<../symbols/files/features/chat/markdown-format.ts.md#s-6400984144e86cc5>) | [features/chat/markdown-format.ts:69](<../../../features/chat/markdown-format.ts#L69>) | TypeAliasDeclaration |
| [markdownBlocks](<../symbols/files/features/chat/markdown-format.ts.md#s-95d32924637410f2>) | [features/chat/markdown-format.ts:105](<../../../features/chat/markdown-format.ts#L105>) | FunctionDeclaration |
| [PanelGeometry](<../symbols/files/features/chat/panel-geometry.ts.md#s-f648e0795a6a7f4a>) | [features/chat/panel-geometry.ts:1](<../../../features/chat/panel-geometry.ts#L1>) | TypeAliasDeclaration |
| [ResizeDirection](<../symbols/files/features/chat/panel-geometry.ts.md#s-ad459a37377747d8>) | [features/chat/panel-geometry.ts:7](<../../../features/chat/panel-geometry.ts#L7>) | TypeAliasDeclaration |
| [clampGeometry](<../symbols/files/features/chat/panel-geometry.ts.md#s-5a5a3109a00ef650>) | [features/chat/panel-geometry.ts:8](<../../../features/chat/panel-geometry.ts#L8>) | FunctionDeclaration |
| [defaultFloatingChatGeometry](<../symbols/files/features/chat/panel-geometry.ts.md#s-79f95f5f7edab50e>) | [features/chat/panel-geometry.ts:22](<../../../features/chat/panel-geometry.ts#L22>) | FunctionDeclaration |
| [resizeGeometry](<../symbols/files/features/chat/panel-geometry.ts.md#s-b6ba271c6aecd584>) | [features/chat/panel-geometry.ts:43](<../../../features/chat/panel-geometry.ts#L43>) | FunctionDeclaration |
| [RuntimeState](<../symbols/files/features/chat/runtime-state.ts.md#s-ee9b9d4e221aec0c>) | [features/chat/runtime-state.ts:3](<../../../features/chat/runtime-state.ts#L3>) | TypeAliasDeclaration |
| [initialRuntime](<../symbols/files/features/chat/runtime-state.ts.md#s-57e28eff24708a32>) | [features/chat/runtime-state.ts:11](<../../../features/chat/runtime-state.ts#L11>) | VariableDeclaration |
| [RuntimeAction](<../symbols/files/features/chat/runtime-state.ts.md#s-4ecdc1e39e7fb97d>) | [features/chat/runtime-state.ts:18](<../../../features/chat/runtime-state.ts#L18>) | TypeAliasDeclaration |
| [runtimeReducer](<../symbols/files/features/chat/runtime-state.ts.md#s-130cc9f07f8dcc0b>) | [features/chat/runtime-state.ts:26](<../../../features/chat/runtime-state.ts#L26>) | FunctionDeclaration |
| [constructionSourceLabel](<../symbols/files/features/chat/source-label.ts.md#s-b8706325f2eec869>) | [features/chat/source-label.ts:6](<../../../features/chat/source-label.ts#L6>) | ArrowFunction |
| [conversationSourceLabel](<../symbols/files/features/chat/source-label.ts.md#s-af86551cff8d3283>) | [features/chat/source-label.ts:8](<../../../features/chat/source-label.ts#L8>) | ArrowFunction |
| [useChatPopout](<../symbols/files/features/chat/use-chat-popout.ts.md#s-b56ab00293228f81>) | [features/chat/use-chat-popout.ts:7](<../../../features/chat/use-chat-popout.ts#L7>) | FunctionDeclaration |
| [useChatRuntime](<../symbols/files/features/chat/use-chat-runtime.ts.md#s-d4d4ff115586ac58>) | [features/chat/use-chat-runtime.ts:48](<../../../features/chat/use-chat-runtime.ts#L48>) | FunctionDeclaration |
| [ChatController](<../symbols/files/features/chat/use-chat-runtime.ts.md#s-a6d260a9225f7fe9>) | [features/chat/use-chat-runtime.ts:1280](<../../../features/chat/use-chat-runtime.ts#L1280>) | TypeAliasDeclaration |

## Depends on

Literal runtime production-file imports only; lazy imports are included. Type, test, tool and external dependencies remain available in the full index.

- [Agent workspace and construction (Portal)](<portal-agents.md>): 2 import sites; example [features/chat/chat-panel.tsx:14](<../../../features/chat/chat-panel.tsx#L14>).
- [Portal shell](<portal-shell.md>): 1 import sites; example [features/chat/conversation-history.tsx:4](<../../../features/chat/conversation-history.tsx#L4>).

## Depended on by

Literal runtime production-file imports only; lazy imports are included. Type, test, tool and external dependencies remain available in the full index.

- [Agent workspace and construction (Portal)](<portal-agents.md>): 6 import sites; example [features/agents/agent-construction.tsx:20](<../../../features/agents/agent-construction.tsx#L20>).
- [Knowledge Cards and readers](<portal-knowledge.md>): 1 import sites; example [features/knowledge/indexed-document-view.tsx:4](<../../../features/knowledge/indexed-document-view.tsx#L4>).
- [Portal shell](<portal-shell.md>): 3 import sites; example [components/app-shell.tsx:5](<../../../components/app-shell.tsx#L5>).
- [WorldView and Knowledge Cards (Portal)](<portal-worldview.md>): 1 import sites; example [features/worldview/backend-identity-window.tsx:17](<../../../features/worldview/backend-identity-window.tsx#L17>).

## Contracts

- [ChatPanelProps](<../symbols/files/features/chat/chat-panel.tsx.md#s-31a9d6c9f46e52f7>) — typescript-declaration; exported.
- [InlinePart](<../symbols/files/features/chat/markdown-format.ts.md#s-c816eebfd6b7d76b>) — typescript-declaration; exported.
- [MarkdownBlock](<../symbols/files/features/chat/markdown-format.ts.md#s-6400984144e86cc5>) — typescript-declaration; exported.
- [PanelGeometry](<../symbols/files/features/chat/panel-geometry.ts.md#s-f648e0795a6a7f4a>) — typescript-declaration; exported.
- [ResizeDirection](<../symbols/files/features/chat/panel-geometry.ts.md#s-ad459a37377747d8>) — typescript-declaration; exported.
- [RuntimeState](<../symbols/files/features/chat/runtime-state.ts.md#s-ee9b9d4e221aec0c>) — typescript-declaration; exported.
- [RuntimeAction](<../symbols/files/features/chat/runtime-state.ts.md#s-4ecdc1e39e7fb97d>) — typescript-declaration; exported.
- [Options](<../symbols/files/features/chat/use-chat-runtime.ts.md#s-a8594ac97d0ccb59>) — typescript-declaration; local schema/type.
- [ChatController](<../symbols/files/features/chat/use-chat-runtime.ts.md#s-a6d260a9225f7fe9>) — typescript-declaration; exported.

## Source inventory

| File | Role | Declarations |
| --- | --- | --- |
| [components/chat-panel.tsx:1](<../../../components/chat-panel.tsx#L1>) | production | 0 |
| [features/chat/agent-layout.test.cjs:1](<../../../features/chat/agent-layout.test.cjs#L1>) | test | 1 |
| [features/chat/chat-markdown.tsx:1](<../../../features/chat/chat-markdown.tsx#L1>) | production | 9 |
| [features/chat/chat-panel.tsx:1](<../../../features/chat/chat-panel.tsx#L1>) | production | 74 |
| [features/chat/chat-presentation.ts:1](<../../../features/chat/chat-presentation.ts#L1>) | production | 3 |
| [features/chat/context-readiness.test.cjs:1](<../../../features/chat/context-readiness.test.cjs#L1>) | test | 1 |
| [features/chat/context-readiness.ts:1](<../../../features/chat/context-readiness.ts#L1>) | production | 1 |
| [features/chat/conversation-history.tsx:1](<../../../features/chat/conversation-history.tsx#L1>) | production | 30 |
| [features/chat/desktop-client.ts:1](<../../../features/chat/desktop-client.ts#L1>) | production | 2 |
| [features/chat/engine-report-attachment.tsx:1](<../../../features/chat/engine-report-attachment.tsx#L1>) | production | 2 |
| [features/chat/markdown-format.test.cjs:1](<../../../features/chat/markdown-format.test.cjs#L1>) | test | 7 |
| [features/chat/markdown-format.ts:1](<../../../features/chat/markdown-format.ts#L1>) | production | 10 |
| [features/chat/panel-geometry.test.cjs:1](<../../../features/chat/panel-geometry.test.cjs#L1>) | test | 3 |
| [features/chat/panel-geometry.ts:1](<../../../features/chat/panel-geometry.ts#L1>) | production | 5 |
| [features/chat/runtime-state.test.cjs:1](<../../../features/chat/runtime-state.test.cjs#L1>) | test | 4 |
| [features/chat/runtime-state.ts:1](<../../../features/chat/runtime-state.ts#L1>) | production | 4 |
| [features/chat/source-label.ts:1](<../../../features/chat/source-label.ts#L1>) | production | 3 |
| [features/chat/use-chat-popout.ts:1](<../../../features/chat/use-chat-popout.ts#L1>) | production | 11 |
| [features/chat/use-chat-runtime.ts:1](<../../../features/chat/use-chat-runtime.ts#L1>) | production | 152 |
