# Connectors

[Atlas](<../README.md>) / [All symbols and callers/callees](<../symbols/connectors.md>)

Persists explicit relationship metadata; relationships do not grant endpoint permissions.

Owns: electron/domains/entity/connector-store.cjs. This ownership is editorial; source locations and import edges below are generated facts.

2 source files; 23 callable declarations; 3 contract declarations.

## Entry points and exported symbols

Candidates from compiler export tables and methods on exported classes. Registration, availability, authorization and runtime reachability must be checked separately.

| Symbol | Source | Kind |
| --- | --- | --- |
| [loadConnectors](<../symbols/files/electron/domains/entity/connector-store.cjs.md#s-8ec496ccfadb4d52>) | [electron/domains/entity/connector-store.cjs:60](<../../../electron/domains/entity/connector-store.cjs#L60>) | FunctionDeclaration |
| [createConnector](<../symbols/files/electron/domains/entity/connector-store.cjs.md#s-68abee44921e90c9>) | [electron/domains/entity/connector-store.cjs:88](<../../../electron/domains/entity/connector-store.cjs#L88>) | FunctionDeclaration |
| [updateConnector](<../symbols/files/electron/domains/entity/connector-store.cjs.md#s-5920f12a905870a0>) | [electron/domains/entity/connector-store.cjs:113](<../../../electron/domains/entity/connector-store.cjs#L113>) | FunctionDeclaration |
| [deleteConnector](<../symbols/files/electron/domains/entity/connector-store.cjs.md#s-023228a431672d6c>) | [electron/domains/entity/connector-store.cjs:147](<../../../electron/domains/entity/connector-store.cjs#L147>) | FunctionDeclaration |

## Depends on

Literal runtime production-file imports only; lazy imports are included. Type, test, tool and external dependencies remain available in the full index.

- [Shared deterministic infrastructure](<shared.md>): 1 import sites; example [electron/domains/entity/connector-store.cjs:7](<../../../electron/domains/entity/connector-store.cjs#L7>).
- [WorldView persistence and IPC](<worldview.md>): 1 import sites; example [electron/domains/entity/connector-store.cjs:11](<../../../electron/domains/entity/connector-store.cjs#L11>).

## Depended on by

Literal runtime production-file imports only; lazy imports are included. Type, test, tool and external dependencies remain available in the full index.

- [Assigned Agents and jurisdiction](<agents.md>): 1 import sites; example [electron/ai/agents/entity-jurisdiction.cjs:3](<../../../electron/ai/agents/entity-jurisdiction.cjs#L3>).
- [Electron composition and IPC security](<desktop.md>): 1 import sites; example [electron/core/ipc/worldview-ipc.cjs:4](<../../../electron/core/ipc/worldview-ipc.cjs#L4>).
- [Backend Identity Engine](<identity.md>): 1 import sites; example [electron/engines/backend-identity/identity-compiler.cjs:12](<../../../electron/engines/backend-identity/identity-compiler.cjs#L12>).

## Contracts

- [identifier](<../symbols/files/electron/domains/entity/connector-store.cjs.md#s-2104479eaa57ef09>) — zod-syntax-candidate; local schema/type.
- [port](<../symbols/files/electron/domains/entity/connector-store.cjs.md#s-53a4d9046bfb2b72>) — zod-syntax-candidate; local schema/type.
- [connectorSchema](<../symbols/files/electron/domains/entity/connector-store.cjs.md#s-7bf84e78bc138f53>) — zod-syntax-candidate; local schema/type.

## Source inventory

| File | Role | Declarations |
| --- | --- | --- |
| [electron/domains/entity/connector-store.cjs:1](<../../../electron/domains/entity/connector-store.cjs#L1>) | production | 14 |
| [electron/domains/entity/connector-store.test.cjs:1](<../../../electron/domains/entity/connector-store.test.cjs#L1>) | test | 12 |
