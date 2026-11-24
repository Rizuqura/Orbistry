# Portal shell

[Atlas](<../README.md>) / [All symbols and callers/callees](<../symbols/portal-shell.md>)

Composes the static React application, navigation, dialogs and workspace surfaces.

Owns: app/, components/ and features/dialogs/. This ownership is editorial; source locations and import edges below are generated facts.

7 source files; 86 callable declarations; 2 contract declarations.

## Entry points and exported symbols

Candidates from compiler export tables and methods on exported classes. Registration, availability, authorization and runtime reachability must be checked separately.

| Symbol | Source | Kind |
| --- | --- | --- |
| [metadata](<../symbols/files/app/layout.tsx.md#s-96bccafeebefede2>) | [app/layout.tsx:16](<../../../app/layout.tsx#L16>) | VariableDeclaration |
| [RootLayout](<../symbols/files/app/layout.tsx.md#s-a6139b1e5601d727>) | [app/layout.tsx:22](<../../../app/layout.tsx#L22>) | FunctionDeclaration |
| [Home](<../symbols/files/app/page.tsx.md#s-f5bb334ae131f622>) | [app/page.tsx:3](<../../../app/page.tsx#L3>) | FunctionDeclaration |
| [AppShell](<../symbols/files/components/app-shell.tsx.md#s-2ea33cd617f6000a>) | [components/app-shell.tsx:49](<../../../components/app-shell.tsx#L49>) | FunctionDeclaration |
| [StartupProgress](<../symbols/files/components/startup-progress.tsx.md#s-90cc62e290bbdae8>) | [components/startup-progress.tsx:11](<../../../components/startup-progress.tsx#L11>) | FunctionDeclaration |
| [StatusBar](<../symbols/files/components/status-bar.tsx.md#s-bc96af59cfd8aed8>) | [components/status-bar.tsx:3](<../../../components/status-bar.tsx#L3>) | FunctionDeclaration |
| [TopBar](<../symbols/files/components/top-bar.tsx.md#s-2ad4c6ae26dcc71b>) | [components/top-bar.tsx:4](<../../../components/top-bar.tsx#L4>) | FunctionDeclaration |
| [useConfirmation](<../symbols/files/features/dialogs/use-confirmation.tsx.md#s-68cb241f4bfc872f>) | [features/dialogs/use-confirmation.tsx:56](<../../../features/dialogs/use-confirmation.tsx#L56>) | FunctionDeclaration |

## Depends on

Literal runtime production-file imports only; lazy imports are included. Type, test, tool and external dependencies remain available in the full index.

- [Agent workspace and construction (Portal)](<portal-agents.md>): 2 import sites; example [components/app-shell.tsx:24](<../../../components/app-shell.tsx#L24>).
- [Conversation presentation](<portal-chat.md>): 3 import sites; example [components/app-shell.tsx:5](<../../../components/app-shell.tsx#L5>).
- [Document workspace](<portal-documents.md>): 2 import sites; example [components/app-shell.tsx:7](<../../../components/app-shell.tsx#L7>).
- [Settings and Engine list](<portal-settings.md>): 1 import sites; example [components/app-shell.tsx:23](<../../../components/app-shell.tsx#L23>).
- [WorldView and Knowledge Cards (Portal)](<portal-worldview.md>): 1 import sites; example [components/app-shell.tsx:9](<../../../components/app-shell.tsx#L9>).

## Depended on by

Literal runtime production-file imports only; lazy imports are included. Type, test, tool and external dependencies remain available in the full index.

- [Agent workspace and construction (Portal)](<portal-agents.md>): 3 import sites; example [features/agents/agent-contacts.tsx:7](<../../../features/agents/agent-contacts.tsx#L7>).
- [Conversation presentation](<portal-chat.md>): 1 import sites; example [features/chat/conversation-history.tsx:4](<../../../features/chat/conversation-history.tsx#L4>).
- [Knowledge Cards and readers](<portal-knowledge.md>): 3 import sites; example [features/knowledge/file-inspector.tsx:9](<../../../features/knowledge/file-inspector.tsx#L9>).
- [WorldView and Knowledge Cards (Portal)](<portal-worldview.md>): 1 import sites; example [features/worldview/worldview.tsx:54](<../../../features/worldview/worldview.tsx#L54>).

## Contracts

- [View](<../symbols/files/components/app-shell.tsx.md#s-61d597243d5a2f24>) — typescript-declaration; local schema/type.
- [StartupProgressProps](<../symbols/files/components/startup-progress.tsx.md#s-8e820517891e6160>) — typescript-declaration; local schema/type.

## Source inventory

| File | Role | Declarations |
| --- | --- | --- |
| [app/layout.tsx:1](<../../../app/layout.tsx#L1>) | production | 2 |
| [app/page.tsx:1](<../../../app/page.tsx#L1>) | production | 1 |
| [components/app-shell.tsx:1](<../../../components/app-shell.tsx#L1>) | production | 62 |
| [components/startup-progress.tsx:1](<../../../components/startup-progress.tsx#L1>) | production | 3 |
| [components/status-bar.tsx:1](<../../../components/status-bar.tsx#L1>) | production | 1 |
| [components/top-bar.tsx:1](<../../../components/top-bar.tsx#L1>) | production | 6 |
| [features/dialogs/use-confirmation.tsx:1](<../../../features/dialogs/use-confirmation.tsx#L1>) | production | 14 |
