# Electron composition and IPC security

[Atlas](<../README.md>) / [All symbols and callers/callees](<../symbols/desktop.md>)

Composes backend services, creates isolated windows and exposes the narrow desktop bridge.

Owns: Electron entry, preload, security, launch and window modules. This ownership is editorial; source locations and import edges below are generated facts.

12 source files; 290 callable declarations; 0 contract declarations.

## Entry points and exported symbols

Candidates from compiler export tables and methods on exported classes. Registration, availability, authorization and runtime reachability must be checked separately.

| Symbol | Source | Kind |
| --- | --- | --- |
| [BRAIN_ERROR_CODES](<../symbols/files/electron/brain-errors.cjs.md#s-6b9aa1461614a094>) | [electron/brain-errors.cjs:1](<../../../electron/brain-errors.cjs#L1>) | VariableDeclaration |
| [BrainScopeError](<../symbols/files/electron/brain-errors.cjs.md#s-f59676b11c44c005>) | [electron/brain-errors.cjs:14](<../../../electron/brain-errors.cjs#L14>) | ClassDeclaration |
| [serializeBrainError](<../symbols/files/electron/brain-errors.cjs.md#s-f87a7896b4010ea8>) | [electron/brain-errors.cjs:23](<../../../electron/brain-errors.cjs#L23>) | FunctionDeclaration |
| [installChatWindowHandler](<../symbols/files/electron/chat-window.cjs.md#s-25890abadb4d7465>) | [electron/chat-window.cjs:3](<../../../electron/chat-window.cjs#L3>) | FunctionDeclaration |
| [sameDocument](<../symbols/files/electron/core/security/desktop-security.cjs.md#s-9f333b962f1ebeaa>) | [electron/core/security/desktop-security.cjs:2](<../../../electron/core/security/desktop-security.cjs#L2>) | FunctionDeclaration |
| [guardedIpc](<../symbols/files/electron/core/security/desktop-security.cjs.md#s-e908fc761b568a93>) | [electron/core/security/desktop-security.cjs:13](<../../../electron/core/security/desktop-security.cjs#L13>) | FunctionDeclaration |
| [developmentUrl](<../symbols/files/electron/core/security/desktop-security.cjs.md#s-79be8939c1c3840b>) | [electron/core/security/desktop-security.cjs:33](<../../../electron/core/security/desktop-security.cjs#L33>) | FunctionDeclaration |
| [selectUserDataPath](<../symbols/files/electron/user-data-path.cjs.md#s-9b29881ed0ce8238>) | [electron/user-data-path.cjs:6](<../../../electron/user-data-path.cjs#L6>) | FunctionDeclaration |
| [guardedIpc.handle](<../symbols/files/electron/core/security/desktop-security.cjs.md#s-9b10b864799d9edb>) | [electron/core/security/desktop-security.cjs:15](<../../../electron/core/security/desktop-security.cjs#L15>) | MethodDeclaration |

## Depends on

Literal runtime production-file imports only; lazy imports are included. Type, test, tool and external dependencies remain available in the full index.

- [Assigned Agents and jurisdiction](<agents.md>): 1 import sites; example [electron/main.cjs:36](<../../../electron/main.cjs#L36>).
- [Retained AI runtime](<ai-runtime.md>): 8 import sites; example [electron/main.cjs:32](<../../../electron/main.cjs#L32>).
- [Model-provider adapters](<providers.md>): 1 import sites; example [electron/main.cjs:37](<../../../electron/main.cjs#L37>).
- [Shared deterministic infrastructure](<shared.md>): 1 import sites; example [electron/core/security/desktop-security.cjs:1](<../../../electron/core/security/desktop-security.cjs#L1>).
- [Vault and stations](<vault.md>): 3 import sites; example [electron/main.cjs:17](<../../../electron/main.cjs#L17>).
- [WorldView desktop IPC](<worldview.md>): 1 import sites; example [electron/main.cjs:31](<../../../electron/main.cjs#L31>).

## Depended on by

Literal runtime production-file imports only; lazy imports are included. Type, test, tool and external dependencies remain available in the full index.

- [Vault and stations](<vault.md>): 1 import sites; example [electron/domains/universe/station-service.cjs:14](<../../../electron/domains/universe/station-service.cjs#L14>).

## Contracts

No TypeScript/Zod contract declaration indexed here. Function signatures and IPC contracts may still apply.

## Source inventory

| File | Role | Declarations |
| --- | --- | --- |
| [electron/brain-errors.cjs:1](<../../../electron/brain-errors.cjs#L1>) | production | 4 |
| [electron/chat-window.cjs:1](<../../../electron/chat-window.cjs#L1>) | production | 7 |
| [electron/chat-window.test.cjs:1](<../../../electron/chat-window.test.cjs#L1>) | test | 13 |
| [electron/core/security/desktop-security.cjs:1](<../../../electron/core/security/desktop-security.cjs#L1>) | production | 5 |
| [electron/core/security/desktop-security.test.cjs:1](<../../../electron/core/security/desktop-security.test.cjs#L1>) | test | 9 |
| [electron/engine-packages.test.cjs:1](<../../../electron/engine-packages.test.cjs#L1>) | test | 65 |
| [electron/engine-signing.test.cjs:1](<../../../electron/engine-signing.test.cjs#L1>) | test | 12 |
| [electron/launch.cjs:1](<../../../electron/launch.cjs#L1>) | production | 2 |
| [electron/main.cjs:1](<../../../electron/main.cjs#L1>) | production | 39 |
| [electron/preload.cjs:1](<../../../electron/preload.cjs#L1>) | production | 112 |
| [electron/user-data-path.cjs:1](<../../../electron/user-data-path.cjs#L1>) | production | 4 |
| [electron/user-data-path.test.cjs:1](<../../../electron/user-data-path.test.cjs#L1>) | test | 20 |
