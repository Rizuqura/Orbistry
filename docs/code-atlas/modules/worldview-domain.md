# WorldView domain aggregate

[Atlas](<../README.md>) / [All symbols and callers/callees](<../symbols/worldview-domain.md>)

Owns membership, placement and connection invariants; coordinates authorized compatible persistence without Entity OOP or inference.

Owns: electron/domains/worldview/. This ownership is editorial; source locations and import edges below are generated facts.

10 source files; 106 callable declarations; 5 contract declarations.

## Entry points and exported symbols

Candidates from compiler export tables and methods on exported classes. Registration, availability, authorization and runtime reachability must be checked separately.

| Symbol | Source | Kind |
| --- | --- | --- |
| [WorldViewError](<../symbols/files/electron/domains/worldview/contracts/worldview-errors.cjs.md#s-1c18c65fdb1fc9b7>) | [electron/domains/worldview/contracts/worldview-errors.cjs:2](<../../../electron/domains/worldview/contracts/worldview-errors.cjs#L2>) | ClassDeclaration |
| [requireInvariant](<../symbols/files/electron/domains/worldview/contracts/worldview-errors.cjs.md#s-2dc3226dc732f323>) | [electron/domains/worldview/contracts/worldview-errors.cjs:12](<../../../electron/domains/worldview/contracts/worldview-errors.cjs#L12>) | FunctionDeclaration |
| [identifier](<../symbols/files/electron/domains/worldview/contracts/worldview-schema.cjs.md#s-598890728e7c0496>) | [electron/domains/worldview/contracts/worldview-schema.cjs:2](<../../../electron/domains/worldview/contracts/worldview-schema.cjs#L2>) | SchemaBinding |
| [position](<../symbols/files/electron/domains/worldview/contracts/worldview-schema.cjs.md#s-f1f6beb42086c656>) | [electron/domains/worldview/contracts/worldview-schema.cjs:3](<../../../electron/domains/worldview/contracts/worldview-schema.cjs#L3>) | SchemaBinding |
| [legacyConnectorSchema](<../symbols/files/electron/domains/worldview/contracts/worldview-schema.cjs.md#s-ff3a4088d19f3491>) | [electron/domains/worldview/contracts/worldview-schema.cjs:11](<../../../electron/domains/worldview/contracts/worldview-schema.cjs#L11>) | SchemaBinding |
| [connectionSchema](<../symbols/files/electron/domains/worldview/contracts/worldview-schema.cjs.md#s-137dc81503c843ff>) | [electron/domains/worldview/contracts/worldview-schema.cjs:28](<../../../electron/domains/worldview/contracts/worldview-schema.cjs#L28>) | SchemaBinding |
| [Connection](<../symbols/files/electron/domains/worldview/model/Connection.cjs.md#s-6d87363d28890a6c>) | [electron/domains/worldview/model/Connection.cjs:8](<../../../electron/domains/worldview/model/Connection.cjs#L8>) | ClassDeclaration |
| [WorldView](<../symbols/files/electron/domains/worldview/model/WorldView.cjs.md#s-79a62e03ca45f3a5>) | [electron/domains/worldview/model/WorldView.cjs:8](<../../../electron/domains/worldview/model/WorldView.cjs#L8>) | ClassDeclaration |
| [directConnections](<../symbols/files/electron/domains/worldview/queries/connection-queries.cjs.md#s-a2c4c119e7dfa264>) | [electron/domains/worldview/queries/connection-queries.cjs:5](<../../../electron/domains/worldview/queries/connection-queries.cjs#L5>) | FunctionDeclaration |
| [WorldViewRepository](<../symbols/files/electron/domains/worldview/repositories/WorldViewRepository.cjs.md#s-4b10c526ffcac3bd>) | [electron/domains/worldview/repositories/WorldViewRepository.cjs:7](<../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L7>) | ClassDeclaration |
| [loadConnectors](<../symbols/files/electron/domains/worldview/repositories/legacy-connection-store.cjs.md#s-2937b562dd1ce8b4>) | [electron/domains/worldview/repositories/legacy-connection-store.cjs:44](<../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L44>) | FunctionDeclaration |
| [createConnector](<../symbols/files/electron/domains/worldview/repositories/legacy-connection-store.cjs.md#s-1cf3233508e51f50>) | [electron/domains/worldview/repositories/legacy-connection-store.cjs:72](<../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L72>) | FunctionDeclaration |
| [updateConnector](<../symbols/files/electron/domains/worldview/repositories/legacy-connection-store.cjs.md#s-0c4952848c75ff0b>) | [electron/domains/worldview/repositories/legacy-connection-store.cjs:97](<../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L97>) | FunctionDeclaration |
| [deleteConnector](<../symbols/files/electron/domains/worldview/repositories/legacy-connection-store.cjs.md#s-2ec984f7c5214ed3>) | [electron/domains/worldview/repositories/legacy-connection-store.cjs:131](<../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L131>) | FunctionDeclaration |
| [WorldViewService](<../symbols/files/electron/domains/worldview/services/WorldViewService.cjs.md#s-f5924f19d9b6d22d>) | [electron/domains/worldview/services/WorldViewService.cjs:10](<../../../electron/domains/worldview/services/WorldViewService.cjs#L10>) | ClassDeclaration |
| [Connection.fromLegacy](<../symbols/files/electron/domains/worldview/model/Connection.cjs.md#s-8e5b9746944b56b7>) | [electron/domains/worldview/model/Connection.cjs:20](<../../../electron/domains/worldview/model/Connection.cjs#L20>) | MethodDeclaration |
| [Connection.getSnapshot](<../symbols/files/electron/domains/worldview/model/Connection.cjs.md#s-17b741d9ec9a95f0>) | [electron/domains/worldview/model/Connection.cjs:39](<../../../electron/domains/worldview/model/Connection.cjs#L39>) | MethodDeclaration |
| [Connection.withMetadata](<../symbols/files/electron/domains/worldview/model/Connection.cjs.md#s-80b4d39e5d324be3>) | [electron/domains/worldview/model/Connection.cjs:43](<../../../electron/domains/worldview/model/Connection.cjs#L43>) | MethodDeclaration |
| [Connection.toLegacy](<../symbols/files/electron/domains/worldview/model/Connection.cjs.md#s-d4415a4694a242b0>) | [electron/domains/worldview/model/Connection.cjs:47](<../../../electron/domains/worldview/model/Connection.cjs#L47>) | MethodDeclaration |
| [WorldView.addEntity](<../symbols/files/electron/domains/worldview/model/WorldView.cjs.md#s-c66653250b4bea0a>) | [electron/domains/worldview/model/WorldView.cjs:20](<../../../electron/domains/worldview/model/WorldView.cjs#L20>) | MethodDeclaration |
| [WorldView.moveEntity](<../symbols/files/electron/domains/worldview/model/WorldView.cjs.md#s-9dac880bfab35b99>) | [electron/domains/worldview/model/WorldView.cjs:30](<../../../electron/domains/worldview/model/WorldView.cjs#L30>) | MethodDeclaration |
| [WorldView.removeEntity](<../symbols/files/electron/domains/worldview/model/WorldView.cjs.md#s-7d3634b31f12d2cc>) | [electron/domains/worldview/model/WorldView.cjs:39](<../../../electron/domains/worldview/model/WorldView.cjs#L39>) | MethodDeclaration |
| [WorldView.connect](<../symbols/files/electron/domains/worldview/model/WorldView.cjs.md#s-eb2c0a1c8b491b24>) | [electron/domains/worldview/model/WorldView.cjs:46](<../../../electron/domains/worldview/model/WorldView.cjs#L46>) | MethodDeclaration |
| [WorldView.disconnect](<../symbols/files/electron/domains/worldview/model/WorldView.cjs.md#s-c18f68ecd5155e95>) | [electron/domains/worldview/model/WorldView.cjs:64](<../../../electron/domains/worldview/model/WorldView.cjs#L64>) | MethodDeclaration |
| [WorldView.updateConnection](<../symbols/files/electron/domains/worldview/model/WorldView.cjs.md#s-756603622bedfc0c>) | [electron/domains/worldview/model/WorldView.cjs:69](<../../../electron/domains/worldview/model/WorldView.cjs#L69>) | MethodDeclaration |
| [WorldView.getDirectConnections](<../symbols/files/electron/domains/worldview/model/WorldView.cjs.md#s-6fccf54e1a31faa2>) | [electron/domains/worldview/model/WorldView.cjs:82](<../../../electron/domains/worldview/model/WorldView.cjs#L82>) | MethodDeclaration |
| [WorldView.getSnapshot](<../symbols/files/electron/domains/worldview/model/WorldView.cjs.md#s-fd6f0b92f9be833e>) | [electron/domains/worldview/model/WorldView.cjs:92](<../../../electron/domains/worldview/model/WorldView.cjs#L92>) | MethodDeclaration |
| [WorldViewRepository.read](<../symbols/files/electron/domains/worldview/repositories/WorldViewRepository.cjs.md#s-91419ef7bf2fa99e>) | [electron/domains/worldview/repositories/WorldViewRepository.cjs:14](<../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L14>) | MethodDeclaration |
| [WorldViewRepository.endpointWorld](<../symbols/files/electron/domains/worldview/repositories/WorldViewRepository.cjs.md#s-29baed00af233aad>) | [electron/domains/worldview/repositories/WorldViewRepository.cjs:41](<../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L41>) | MethodDeclaration |
| [WorldViewRepository.saveChip](<../symbols/files/electron/domains/worldview/repositories/WorldViewRepository.cjs.md#s-27f3832301869646>) | [electron/domains/worldview/repositories/WorldViewRepository.cjs:50](<../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L50>) | MethodDeclaration |
| [WorldViewRepository.deleteChip](<../symbols/files/electron/domains/worldview/repositories/WorldViewRepository.cjs.md#s-aa8fb2db0a6612b2>) | [electron/domains/worldview/repositories/WorldViewRepository.cjs:54](<../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L54>) | MethodDeclaration |
| [WorldViewRepository.createConnection](<../symbols/files/electron/domains/worldview/repositories/WorldViewRepository.cjs.md#s-a831539ba65e984b>) | [electron/domains/worldview/repositories/WorldViewRepository.cjs:58](<../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L58>) | MethodDeclaration |
| [WorldViewRepository.updateConnection](<../symbols/files/electron/domains/worldview/repositories/WorldViewRepository.cjs.md#s-e6def28894ad4362>) | [electron/domains/worldview/repositories/WorldViewRepository.cjs:62](<../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L62>) | MethodDeclaration |
| [WorldViewRepository.deleteConnection](<../symbols/files/electron/domains/worldview/repositories/WorldViewRepository.cjs.md#s-d80b86147b2451c3>) | [electron/domains/worldview/repositories/WorldViewRepository.cjs:66](<../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L66>) | MethodDeclaration |
| [WorldViewRepository.connectionEntities](<../symbols/files/electron/domains/worldview/repositories/WorldViewRepository.cjs.md#s-a43f5163c18edd36>) | [electron/domains/worldview/repositories/WorldViewRepository.cjs:70](<../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L70>) | MethodDeclaration |
| [WorldViewService.permit](<../symbols/files/electron/domains/worldview/services/WorldViewService.cjs.md#s-5697cb02709ef464>) | [electron/domains/worldview/services/WorldViewService.cjs:20](<../../../electron/domains/worldview/services/WorldViewService.cjs#L20>) | MethodDeclaration |
| [WorldViewService.load](<../symbols/files/electron/domains/worldview/services/WorldViewService.cjs.md#s-9a49a0d9bfeaa0c2>) | [electron/domains/worldview/services/WorldViewService.cjs:28](<../../../electron/domains/worldview/services/WorldViewService.cjs#L28>) | MethodDeclaration |
| [WorldViewService.saveChip](<../symbols/files/electron/domains/worldview/services/WorldViewService.cjs.md#s-6cf167a187c419b7>) | [electron/domains/worldview/services/WorldViewService.cjs:35](<../../../electron/domains/worldview/services/WorldViewService.cjs#L35>) | MethodDeclaration |
| [WorldViewService.removeEntity](<../symbols/files/electron/domains/worldview/services/WorldViewService.cjs.md#s-b2761547de1733a5>) | [electron/domains/worldview/services/WorldViewService.cjs:53](<../../../electron/domains/worldview/services/WorldViewService.cjs#L53>) | MethodDeclaration |
| [WorldViewService.createConnection](<../symbols/files/electron/domains/worldview/services/WorldViewService.cjs.md#s-59ad55cf2312518c>) | [electron/domains/worldview/services/WorldViewService.cjs:64](<../../../electron/domains/worldview/services/WorldViewService.cjs#L64>) | MethodDeclaration |
| [WorldViewService.updateConnection](<../symbols/files/electron/domains/worldview/services/WorldViewService.cjs.md#s-bf9efb3d2453cacd>) | [electron/domains/worldview/services/WorldViewService.cjs:75](<../../../electron/domains/worldview/services/WorldViewService.cjs#L75>) | MethodDeclaration |
| [WorldViewService.disconnect](<../symbols/files/electron/domains/worldview/services/WorldViewService.cjs.md#s-2486ee0c7a4665d4>) | [electron/domains/worldview/services/WorldViewService.cjs:95](<../../../electron/domains/worldview/services/WorldViewService.cjs#L95>) | MethodDeclaration |
| [WorldViewService.listDirectConnections](<../symbols/files/electron/domains/worldview/services/WorldViewService.cjs.md#s-49499fbc6b875b47>) | [electron/domains/worldview/services/WorldViewService.cjs:106](<../../../electron/domains/worldview/services/WorldViewService.cjs#L106>) | MethodDeclaration |

## Depends on

Literal runtime production-file imports only; lazy imports are included. Type, test, tool and external dependencies remain available in the full index.

- [Shared deterministic infrastructure](<shared.md>): 1 import sites; example [electron/domains/worldview/repositories/legacy-connection-store.cjs:6](<../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L6>).
- [WorldView persistence and IPC](<worldview.md>): 2 import sites; example [electron/domains/worldview/repositories/WorldViewRepository.cjs:1](<../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L1>).

## Depended on by

Literal runtime production-file imports only; lazy imports are included. Type, test, tool and external dependencies remain available in the full index.

- [Connectors](<connectors.md>): 1 import sites; example [electron/domains/entity/connector-store.cjs:2](<../../../electron/domains/entity/connector-store.cjs#L2>).
- [Electron composition and IPC security](<desktop.md>): 1 import sites; example [electron/core/ipc/worldview-ipc.cjs:4](<../../../electron/core/ipc/worldview-ipc.cjs#L4>).

## Contracts

- [identifier](<../symbols/files/electron/domains/worldview/contracts/worldview-schema.cjs.md#s-598890728e7c0496>) — zod-syntax-candidate; exported.
- [position](<../symbols/files/electron/domains/worldview/contracts/worldview-schema.cjs.md#s-f1f6beb42086c656>) — zod-syntax-candidate; exported.
- [anchor](<../symbols/files/electron/domains/worldview/contracts/worldview-schema.cjs.md#s-af952350ce556ea7>) — zod-syntax-candidate; local schema/type.
- [legacyConnectorSchema](<../symbols/files/electron/domains/worldview/contracts/worldview-schema.cjs.md#s-ff3a4088d19f3491>) — zod-syntax-candidate; exported.
- [connectionSchema](<../symbols/files/electron/domains/worldview/contracts/worldview-schema.cjs.md#s-137dc81503c843ff>) — zod-syntax-candidate; exported.

## Source inventory

| File | Role | Declarations |
| --- | --- | --- |
| [electron/domains/worldview/contracts/worldview-errors.cjs:1](<../../../electron/domains/worldview/contracts/worldview-errors.cjs#L1>) | production | 3 |
| [electron/domains/worldview/contracts/worldview-schema.cjs:1](<../../../electron/domains/worldview/contracts/worldview-schema.cjs#L1>) | production | 6 |
| [electron/domains/worldview/index.cjs:1](<../../../electron/domains/worldview/index.cjs#L1>) | production | 0 |
| [electron/domains/worldview/model/Connection.cjs:1](<../../../electron/domains/worldview/model/Connection.cjs#L1>) | production | 6 |
| [electron/domains/worldview/model/WorldView.cjs:1](<../../../electron/domains/worldview/model/WorldView.cjs#L1>) | production | 16 |
| [electron/domains/worldview/queries/connection-queries.cjs:1](<../../../electron/domains/worldview/queries/connection-queries.cjs#L1>) | production | 3 |
| [electron/domains/worldview/repositories/WorldViewRepository.cjs:1](<../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L1>) | production | 15 |
| [electron/domains/worldview/repositories/legacy-connection-store.cjs:1](<../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L1>) | production | 10 |
| [electron/domains/worldview/services/WorldViewService.cjs:1](<../../../electron/domains/worldview/services/WorldViewService.cjs#L1>) | production | 13 |
| [electron/domains/worldview/tests/worldview-domain.test.cjs:1](<../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L1>) | test | 44 |
