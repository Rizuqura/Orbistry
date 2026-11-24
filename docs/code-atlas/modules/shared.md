# Shared deterministic infrastructure

[Atlas](<../README.md>) / [All symbols and callers/callees](<../symbols/shared.md>)

Owns neutral persistence, validation, errors and context arithmetic with compatibility exports retained elsewhere.

Owns: electron/shared/ and electron/core/persistence/. This ownership is editorial; source locations and import edges below are generated facts.

6 source files; 16 callable declarations; 0 contract declarations.

## Entry points and exported symbols

Candidates from compiler export tables and methods on exported classes. Registration, availability, authorization and runtime reachability must be checked separately.

| Symbol | Source | Kind |
| --- | --- | --- |
| [serialQueue](<../symbols/files/electron/core/persistence/json-store.cjs.md#s-a8a605453bc9a09a>) | [electron/core/persistence/json-store.cjs:8](<../../../electron/core/persistence/json-store.cjs#L8>) | FunctionDeclaration |
| [rejectSymlink](<../symbols/files/electron/core/persistence/json-store.cjs.md#s-aaddc8aab5c0d073>) | [electron/core/persistence/json-store.cjs:18](<../../../electron/core/persistence/json-store.cjs#L18>) | FunctionDeclaration |
| [safeDirectory](<../symbols/files/electron/core/persistence/json-store.cjs.md#s-429fa54bc1a890a0>) | [electron/core/persistence/json-store.cjs:28](<../../../electron/core/persistence/json-store.cjs#L28>) | FunctionDeclaration |
| [readJson](<../symbols/files/electron/core/persistence/json-store.cjs.md#s-7f9e3b493f3ab942>) | [electron/core/persistence/json-store.cjs:42](<../../../electron/core/persistence/json-store.cjs#L42>) | FunctionDeclaration |
| [writeJson](<../symbols/files/electron/core/persistence/json-store.cjs.md#s-5030c6156f98dba1>) | [electron/core/persistence/json-store.cjs:58](<../../../electron/core/persistence/json-store.cjs#L58>) | FunctionDeclaration |
| [writeTextAtomic](<../symbols/files/electron/core/persistence/json-store.cjs.md#s-eaf1fb4e46036574>) | [electron/core/persistence/json-store.cjs:87](<../../../electron/core/persistence/json-store.cjs#L87>) | FunctionDeclaration |
| [LOCAL_CONTEXT_LIMIT](<../symbols/files/electron/shared/context-limits.cjs.md#s-4f6deada1204a415>) | [electron/shared/context-limits.cjs:2](<../../../electron/shared/context-limits.cjs#L2>) | VariableDeclaration |
| [REMOTE_CONTEXT_LIMIT](<../symbols/files/electron/shared/context-limits.cjs.md#s-d369839b8326cc56>) | [electron/shared/context-limits.cjs:3](<../../../electron/shared/context-limits.cjs#L3>) | VariableDeclaration |
| [contextLimit](<../symbols/files/electron/shared/context-limits.cjs.md#s-cb06ea768ce0bca3>) | [electron/shared/context-limits.cjs:6](<../../../electron/shared/context-limits.cjs#L6>) | FunctionDeclaration |
| [LOCAL_CONTEXT_LIMIT](<../symbols/files/electron/shared/context-limits.d.cts.md#s-a02ccaa5cd094b22>) | [electron/shared/context-limits.d.cts:1](<../../../electron/shared/context-limits.d.cts#L1>) | VariableDeclaration |
| [REMOTE_CONTEXT_LIMIT](<../symbols/files/electron/shared/context-limits.d.cts.md#s-6fa0e037888af196>) | [electron/shared/context-limits.d.cts:2](<../../../electron/shared/context-limits.d.cts#L2>) | VariableDeclaration |
| [contextLimit](<../symbols/files/electron/shared/context-limits.d.cts.md#s-f923d2e178d9209d>) | [electron/shared/context-limits.d.cts:3](<../../../electron/shared/context-limits.d.cts#L3>) | FunctionDeclaration |
| [MODEL_ERROR_CODES](<../symbols/files/electron/shared/runtime-errors.cjs.md#s-262816768b83f7e9>) | [electron/shared/runtime-errors.cjs:2](<../../../electron/shared/runtime-errors.cjs#L2>) | VariableDeclaration |
| [ModelRuntimeError](<../symbols/files/electron/shared/runtime-errors.cjs.md#s-b9a3b5e0a5b32162>) | [electron/shared/runtime-errors.cjs:36](<../../../electron/shared/runtime-errors.cjs#L36>) | ClassDeclaration |
| [serializeModelError](<../symbols/files/electron/shared/runtime-errors.cjs.md#s-0a992a8fcd9686e4>) | [electron/shared/runtime-errors.cjs:47](<../../../electron/shared/runtime-errors.cjs#L47>) | FunctionDeclaration |
| [estimateTokens](<../symbols/files/electron/shared/token-budget.cjs.md#s-81eabfdb3a44d606>) | [electron/shared/token-budget.cjs:2](<../../../electron/shared/token-budget.cjs#L2>) | ArrowFunction |
| [parse](<../symbols/files/electron/shared/validation.cjs.md#s-f29367528a73f24d>) | [electron/shared/validation.cjs:4](<../../../electron/shared/validation.cjs#L4>) | FunctionDeclaration |

## Depends on

Literal runtime production-file imports only; lazy imports are included. Type, test, tool and external dependencies remain available in the full index.

No cross-module production imports in this view.

## Depended on by

Literal runtime production-file imports only; lazy imports are included. Type, test, tool and external dependencies remain available in the full index.

- [Retained AI runtime](<ai-runtime.md>): 5 import sites; example [electron/ai/context-limits.cjs:2](<../../../electron/ai/context-limits.cjs#L2>).
- [Electron composition and IPC security](<desktop.md>): 1 import sites; example [electron/core/security/desktop-security.cjs:1](<../../../electron/core/security/desktop-security.cjs#L1>).
- [Engine package registry](<engine-registry.md>): 4 import sites; example [electron/engines/registry/authoring.cjs:6](<../../../electron/engines/registry/authoring.cjs#L6>).
- [Built-in Engines and data adapters](<engines.md>): 4 import sites; example [electron/daily-price-service.cjs:7](<../../../electron/daily-price-service.cjs#L7>).
- [Backend Identity Engine](<identity.md>): 3 import sites; example [electron/engines/backend-identity/identity-compiler.cjs:5](<../../../electron/engines/backend-identity/identity-compiler.cjs#L5>).
- [Knowledge indexing and source access](<knowledge.md>): 3 import sites; example [electron/domains/indexing/tag-association-service.cjs:7](<../../../electron/domains/indexing/tag-association-service.cjs#L7>).
- [Settings and Engine list](<portal-settings.md>): 1 import sites; example [features/model-settings/model-settings.tsx:7](<../../../features/model-settings/model-settings.tsx#L7>).
- [Vault and stations](<vault.md>): 2 import sites; example [electron/domains/universe/vault-settings.cjs:7](<../../../electron/domains/universe/vault-settings.cjs#L7>).
- [WorldView domain aggregate](<worldview-domain.md>): 1 import sites; example [electron/domains/worldview/repositories/legacy-connection-store.cjs:6](<../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L6>).
- [WorldView persistence and IPC](<worldview.md>): 1 import sites; example [electron/domains/entity/worldview-store.cjs:9](<../../../electron/domains/entity/worldview-store.cjs#L9>).

## Contracts

No TypeScript/Zod contract declaration indexed here. Function signatures and IPC contracts may still apply.

## Source inventory

| File | Role | Declarations |
| --- | --- | --- |
| [electron/core/persistence/json-store.cjs:1](<../../../electron/core/persistence/json-store.cjs#L1>) | production | 9 |
| [electron/shared/context-limits.cjs:1](<../../../electron/shared/context-limits.cjs#L1>) | production | 3 |
| [electron/shared/context-limits.d.cts:1](<../../../electron/shared/context-limits.d.cts#L1>) | declaration | 3 |
| [electron/shared/runtime-errors.cjs:1](<../../../electron/shared/runtime-errors.cjs#L1>) | production | 4 |
| [electron/shared/token-budget.cjs:1](<../../../electron/shared/token-budget.cjs#L1>) | production | 2 |
| [electron/shared/validation.cjs:1](<../../../electron/shared/validation.cjs#L1>) | production | 1 |
