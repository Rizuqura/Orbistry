# Engine package registry

[Atlas](<../README.md>) / [All symbols and callers/callees](<../symbols/engine-registry.md>)

Validates packages, signatures, local trust and Entity links; dispatches workers and persists receipts.

Owns: electron/engines/registry/. This ownership is editorial; source locations and import edges below are generated facts.

8 source files; 90 callable declarations; 10 contract declarations.

## Entry points and exported symbols

Candidates from compiler export tables and methods on exported classes. Registration, availability, authorization and runtime reachability must be checked separately.

| Symbol | Source | Kind |
| --- | --- | --- |
| [PROTOCOL](<../symbols/files/electron/engines/contracts/contract.cjs.md#s-4728c7102b234b4d>) | [electron/engines/contracts/contract.cjs:3](<../../../electron/engines/contracts/contract.cjs#L3>) | VariableDeclaration |
| [LIMITS](<../symbols/files/electron/engines/contracts/contract.cjs.md#s-bc9265316cf0b535>) | [electron/engines/contracts/contract.cjs:4](<../../../electron/engines/contracts/contract.cjs#L4>) | VariableDeclaration |
| [id](<../symbols/files/electron/engines/contracts/contract.cjs.md#s-5c09c3139b775c9b>) | [electron/engines/contracts/contract.cjs:11](<../../../electron/engines/contracts/contract.cjs#L11>) | SchemaBinding |
| [version](<../symbols/files/electron/engines/contracts/contract.cjs.md#s-33c8507873e694cf>) | [electron/engines/contracts/contract.cjs:20](<../../../electron/engines/contracts/contract.cjs#L20>) | SchemaBinding |
| [signatureSchema](<../symbols/files/electron/engines/contracts/contract.cjs.md#s-38081e1e3278077d>) | [electron/engines/contracts/contract.cjs:35](<../../../electron/engines/contracts/contract.cjs#L35>) | SchemaBinding |
| [manifestSchema](<../symbols/files/electron/engines/contracts/contract.cjs.md#s-e238501c58432962>) | [electron/engines/contracts/contract.cjs:45](<../../../electron/engines/contracts/contract.cjs#L45>) | SchemaBinding |
| [fail](<../symbols/files/electron/engines/contracts/contract.cjs.md#s-85aeb8bea7b60d5e>) | [electron/engines/contracts/contract.cjs:87](<../../../electron/engines/contracts/contract.cjs#L87>) | FunctionDeclaration |
| [sha](<../symbols/files/electron/engines/contracts/contract.cjs.md#s-f99f5cdd253f65c9>) | [electron/engines/contracts/contract.cjs:92](<../../../electron/engines/contracts/contract.cjs#L92>) | FunctionDeclaration |
| [filePath](<../symbols/files/electron/engines/contracts/contract.cjs.md#s-c6ea6c7627e0d854>) | [electron/engines/contracts/contract.cjs:97](<../../../electron/engines/contracts/contract.cjs#L97>) | FunctionDeclaration |
| [checkSchema](<../symbols/files/electron/engines/contracts/contract.cjs.md#s-0dde703b8b1c929a>) | [electron/engines/contracts/contract.cjs:123](<../../../electron/engines/contracts/contract.cjs#L123>) | FunctionDeclaration |
| [validateData](<../symbols/files/electron/engines/contracts/contract.cjs.md#s-5f70c362b7bc04d9>) | [electron/engines/contracts/contract.cjs:243](<../../../electron/engines/contracts/contract.cjs#L243>) | FunctionDeclaration |
| [manifest](<../symbols/files/electron/engines/contracts/contract.cjs.md#s-b1886f302525e88e>) | [electron/engines/contracts/contract.cjs:297](<../../../electron/engines/contracts/contract.cjs#L297>) | FunctionDeclaration |
| [initPackage](<../symbols/files/electron/engines/registry/authoring.cjs.md#s-bbfb28bee2f9c0b0>) | [electron/engines/registry/authoring.cjs:9](<../../../electron/engines/registry/authoring.cjs#L9>) | FunctionDeclaration |
| [pullPackage](<../symbols/files/electron/engines/registry/authoring.cjs.md#s-dd26bc55111fb682>) | [electron/engines/registry/authoring.cjs:92](<../../../electron/engines/registry/authoring.cjs#L92>) | FunctionDeclaration |
| [readBytes](<../symbols/files/electron/engines/registry/package.cjs.md#s-a5f5a53e124cf066>) | [electron/engines/registry/package.cjs:14](<../../../electron/engines/registry/package.cjs#L14>) | FunctionDeclaration |
| [parseJson](<../symbols/files/electron/engines/registry/package.cjs.md#s-fb6b0b1816d9018a>) | [electron/engines/registry/package.cjs:47](<../../../electron/engines/registry/package.cjs#L47>) | FunctionDeclaration |
| [filesIn](<../symbols/files/electron/engines/registry/package.cjs.md#s-7a153ed7a6996a97>) | [electron/engines/registry/package.cjs:56](<../../../electron/engines/registry/package.cjs#L56>) | FunctionDeclaration |
| [inspectPackage](<../symbols/files/electron/engines/registry/package.cjs.md#s-71ed017a00706142>) | [electron/engines/registry/package.cjs:85](<../../../electron/engines/registry/package.cjs#L85>) | FunctionDeclaration |
| [sealPackage](<../symbols/files/electron/engines/registry/package.cjs.md#s-d9c25ce14dcf2863>) | [electron/engines/registry/package.cjs:126](<../../../electron/engines/registry/package.cjs#L126>) | FunctionDeclaration |
| [EnginePackageRegistry](<../symbols/files/electron/engines/registry/registry.cjs.md#s-a8b1e8f5dcab3332>) | [electron/engines/registry/registry.cjs:93](<../../../electron/engines/registry/registry.cjs#L93>) | ClassDeclaration |
| [DOMAIN](<../symbols/files/electron/engines/registry/signature.cjs.md#s-bb5276fc6d0aea9d>) | [electron/engines/registry/signature.cjs:3](<../../../electron/engines/registry/signature.cjs#L3>) | VariableDeclaration |
| [canonicalJson](<../symbols/files/electron/engines/registry/signature.cjs.md#s-8b357e437a59fd61>) | [electron/engines/registry/signature.cjs:6](<../../../electron/engines/registry/signature.cjs#L6>) | FunctionDeclaration |
| [signingDigest](<../symbols/files/electron/engines/registry/signature.cjs.md#s-41e21f01cf00ee75>) | [electron/engines/registry/signature.cjs:43](<../../../electron/engines/registry/signature.cjs#L43>) | FunctionDeclaration |
| [publicIdentity](<../symbols/files/electron/engines/registry/signature.cjs.md#s-c2fa63b996ceefd7>) | [electron/engines/registry/signature.cjs:49](<../../../electron/engines/registry/signature.cjs#L49>) | FunctionDeclaration |
| [verifySignature](<../symbols/files/electron/engines/registry/signature.cjs.md#s-9f88c255d4e362de>) | [electron/engines/registry/signature.cjs:76](<../../../electron/engines/registry/signature.cjs#L76>) | FunctionDeclaration |
| [createSignature](<../symbols/files/electron/engines/registry/signature.cjs.md#s-429b3d691e551f54>) | [electron/engines/registry/signature.cjs:109](<../../../electron/engines/registry/signature.cjs#L109>) | FunctionDeclaration |
| [createSigningKey](<../symbols/files/electron/engines/registry/signing.cjs.md#s-dbf5e585ccf2aea6>) | [electron/engines/registry/signing.cjs:17](<../../../electron/engines/registry/signing.cjs#L17>) | FunctionDeclaration |
| [signPackage](<../symbols/files/electron/engines/registry/signing.cjs.md#s-9317466d274715e3>) | [electron/engines/registry/signing.cjs:76](<../../../electron/engines/registry/signing.cjs#L76>) | FunctionDeclaration |
| [verifyPackage](<../symbols/files/electron/engines/registry/signing.cjs.md#s-3b8c467c9b1420c7>) | [electron/engines/registry/signing.cjs:141](<../../../electron/engines/registry/signing.cjs#L141>) | FunctionDeclaration |
| [runPackage](<../symbols/files/electron/engines/runtime/runner.cjs.md#s-9a8f4334c726b774>) | [electron/engines/runtime/runner.cjs:7](<../../../electron/engines/runtime/runner.cjs#L7>) | FunctionDeclaration |
| [EnginePackageRegistry.location](<../symbols/files/electron/engines/registry/registry.cjs.md#s-0a4c4c0b81b57b1a>) | [electron/engines/registry/registry.cjs:101](<../../../electron/engines/registry/registry.cjs#L101>) | MethodDeclaration |
| [EnginePackageRegistry.read](<../symbols/files/electron/engines/registry/registry.cjs.md#s-56d760ca822ea66d>) | [electron/engines/registry/registry.cjs:114](<../../../electron/engines/registry/registry.cjs#L114>) | MethodDeclaration |
| [EnginePackageRegistry.mutate](<../symbols/files/electron/engines/registry/registry.cjs.md#s-822f4a6340a9f105>) | [electron/engines/registry/registry.cjs:134](<../../../electron/engines/registry/registry.cjs#L134>) | MethodDeclaration |
| [EnginePackageRegistry.install](<../symbols/files/electron/engines/registry/registry.cjs.md#s-23fa9e3f7160bfa9>) | [electron/engines/registry/registry.cjs:174](<../../../electron/engines/registry/registry.cjs#L174>) | MethodDeclaration |
| [EnginePackageRegistry.installed](<../symbols/files/electron/engines/registry/registry.cjs.md#s-c4934370e6e6f669>) | [electron/engines/registry/registry.cjs:261](<../../../electron/engines/registry/registry.cjs#L261>) | MethodDeclaration |
| [EnginePackageRegistry.trust](<../symbols/files/electron/engines/registry/registry.cjs.md#s-875db17c7cae1a9d>) | [electron/engines/registry/registry.cjs:284](<../../../electron/engines/registry/registry.cjs#L284>) | MethodDeclaration |
| [EnginePackageRegistry.link](<../symbols/files/electron/engines/registry/registry.cjs.md#s-cc2ef75797a08101>) | [electron/engines/registry/registry.cjs:300](<../../../electron/engines/registry/registry.cjs#L300>) | MethodDeclaration |
| [EnginePackageRegistry.unlink](<../symbols/files/electron/engines/registry/registry.cjs.md#s-0acfac64666866c4>) | [electron/engines/registry/registry.cjs:349](<../../../electron/engines/registry/registry.cjs#L349>) | MethodDeclaration |
| [EnginePackageRegistry.catalog](<../symbols/files/electron/engines/registry/registry.cjs.md#s-31238ee0e1cb396f>) | [electron/engines/registry/registry.cjs:361](<../../../electron/engines/registry/registry.cjs#L361>) | MethodDeclaration |
| [EnginePackageRegistry.executeTool](<../symbols/files/electron/engines/registry/registry.cjs.md#s-340eb5dbd3aa5064>) | [electron/engines/registry/registry.cjs:434](<../../../electron/engines/registry/registry.cjs#L434>) | MethodDeclaration |
| [EnginePackageRegistry.readResult](<../symbols/files/electron/engines/registry/registry.cjs.md#s-d6c27a69455a5f09>) | [electron/engines/registry/registry.cjs:468](<../../../electron/engines/registry/registry.cjs#L468>) | MethodDeclaration |
| [EnginePackageRegistry.execute](<../symbols/files/electron/engines/registry/registry.cjs.md#s-a35bb6e14bafba1e>) | [electron/engines/registry/registry.cjs:520](<../../../electron/engines/registry/registry.cjs#L520>) | MethodDeclaration |

## Depends on

Literal runtime production-file imports only; lazy imports are included. Type, test, tool and external dependencies remain available in the full index.

- [Built-in Engines and data adapters](<engines.md>): 1 import sites; example [electron/engines/registry/registry.cjs:180](<../../../electron/engines/registry/registry.cjs#L180>).
- [Entity domain](<entity-domain.md>): 5 import sites; example [electron/engines/registry/registry.cjs:309](<../../../electron/engines/registry/registry.cjs#L309>).
- [Shared deterministic infrastructure](<shared.md>): 4 import sites; example [electron/engines/registry/authoring.cjs:6](<../../../electron/engines/registry/authoring.cjs#L6>).

## Depended on by

Literal runtime production-file imports only; lazy imports are included. Type, test, tool and external dependencies remain available in the full index.

- [Retained AI runtime](<ai-runtime.md>): 1 import sites; example [electron/ai/engine-registry.cjs:8](<../../../electron/ai/engine-registry.cjs#L8>).

## Contracts

- [id](<../symbols/files/electron/engines/contracts/contract.cjs.md#s-5c09c3139b775c9b>) — zod-syntax-candidate; exported.
- [version](<../symbols/files/electron/engines/contracts/contract.cjs.md#s-33c8507873e694cf>) — zod-syntax-candidate; exported.
- [jsonSchema](<../symbols/files/electron/engines/contracts/contract.cjs.md#s-79ed7f539d7f049a>) — zod-syntax-candidate; local schema/type.
- [operation](<../symbols/files/electron/engines/contracts/contract.cjs.md#s-dc9f8167926f6363>) — zod-syntax-candidate; local schema/type.
- [signatureSchema](<../symbols/files/electron/engines/contracts/contract.cjs.md#s-38081e1e3278077d>) — zod-syntax-candidate; exported.
- [manifestSchema](<../symbols/files/electron/engines/contracts/contract.cjs.md#s-e238501c58432962>) — zod-syntax-candidate; exported.
- [entityIdSchema](<../symbols/files/electron/engines/registry/registry.cjs.md#s-1759b6f67fe811c6>) — zod-syntax-candidate; local schema/type.
- [storedVersion](<../symbols/files/electron/engines/registry/registry.cjs.md#s-2b89efce7839301b>) — zod-syntax-candidate; local schema/type.
- [stateSchema](<../symbols/files/electron/engines/registry/registry.cjs.md#s-d5e129eb6d900581>) — zod-syntax-candidate; local schema/type.
- [completedReceipt](<../symbols/files/electron/engines/registry/registry.cjs.md#s-04bd9d3e9a9309b9>) — zod-syntax-candidate; local schema/type.

## Source inventory

| File | Role | Declarations |
| --- | --- | --- |
| [electron/engines/contracts/contract.cjs:1](<../../../electron/engines/contracts/contract.cjs#L1>) | production | 24 |
| [electron/engines/registry/authoring.cjs:1](<../../../electron/engines/registry/authoring.cjs#L1>) | production | 3 |
| [electron/engines/registry/package.cjs:1](<../../../electron/engines/registry/package.cjs#L1>) | production | 7 |
| [electron/engines/registry/registry.cjs:1](<../../../electron/engines/registry/registry.cjs#L1>) | production | 45 |
| [electron/engines/registry/signature.cjs:1](<../../../electron/engines/registry/signature.cjs#L1>) | production | 8 |
| [electron/engines/registry/signing.cjs:1](<../../../electron/engines/registry/signing.cjs#L1>) | production | 3 |
| [electron/engines/runtime/runner.cjs:1](<../../../electron/engines/runtime/runner.cjs#L1>) | production | 10 |
| [electron/engines/runtime/worker.cjs:1](<../../../electron/engines/runtime/worker.cjs#L1>) | production | 4 |
