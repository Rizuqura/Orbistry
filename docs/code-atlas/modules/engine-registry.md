# Engine package registry

[Atlas](<../README.md>) / [All symbols and callers/callees](<../symbols/engine-registry.md>)

Validates packages, signatures, local trust and Entity links; dispatches workers and persists receipts.

Owns: electron/engines/registry/. This ownership is editorial; source locations and import edges below are generated facts.

11 source files; 106 callable declarations; 19 contract declarations.

## Entry points and exported symbols

Candidates from compiler export tables and methods on exported classes. Registration, availability, authorization and runtime reachability must be checked separately.

| Symbol | Source | Kind |
| --- | --- | --- |
| [PROTOCOL](<../symbols/files/electron/engines/contracts/contract.cjs.md#s-4728c7102b234b4d>) | [electron/engines/contracts/contract.cjs:3](<../../../electron/engines/contracts/contract.cjs#L3>) | VariableDeclaration |
| [LIMITS](<../symbols/files/electron/engines/contracts/contract.cjs.md#s-bc9265316cf0b535>) | [electron/engines/contracts/contract.cjs:4](<../../../electron/engines/contracts/contract.cjs#L4>) | VariableDeclaration |
| [id](<../symbols/files/electron/engines/contracts/contract.cjs.md#s-5c09c3139b775c9b>) | [electron/engines/contracts/contract.cjs:11](<../../../electron/engines/contracts/contract.cjs#L11>) | SchemaBinding |
| [version](<../symbols/files/electron/engines/contracts/contract.cjs.md#s-33c8507873e694cf>) | [electron/engines/contracts/contract.cjs:20](<../../../electron/engines/contracts/contract.cjs#L20>) | SchemaBinding |
| [signatureSchema](<../symbols/files/electron/engines/contracts/contract.cjs.md#s-38081e1e3278077d>) | [electron/engines/contracts/contract.cjs:35](<../../../electron/engines/contracts/contract.cjs#L35>) | SchemaBinding |
| [manifestSchema](<../symbols/files/electron/engines/contracts/contract.cjs.md#s-87463fb13a9665dd>) | [electron/engines/contracts/contract.cjs:68](<../../../electron/engines/contracts/contract.cjs#L68>) | SchemaBinding |
| [fail](<../symbols/files/electron/engines/contracts/contract.cjs.md#s-b26f7a166006912b>) | [electron/engines/contracts/contract.cjs:105](<../../../electron/engines/contracts/contract.cjs#L105>) | FunctionDeclaration |
| [sha](<../symbols/files/electron/engines/contracts/contract.cjs.md#s-27c50df18ef30dc9>) | [electron/engines/contracts/contract.cjs:110](<../../../electron/engines/contracts/contract.cjs#L110>) | FunctionDeclaration |
| [filePath](<../symbols/files/electron/engines/contracts/contract.cjs.md#s-37950761339869ee>) | [electron/engines/contracts/contract.cjs:115](<../../../electron/engines/contracts/contract.cjs#L115>) | FunctionDeclaration |
| [checkSchema](<../symbols/files/electron/engines/contracts/contract.cjs.md#s-760f3047fac594e7>) | [electron/engines/contracts/contract.cjs:141](<../../../electron/engines/contracts/contract.cjs#L141>) | FunctionDeclaration |
| [validateData](<../symbols/files/electron/engines/contracts/contract.cjs.md#s-567344da6db54f40>) | [electron/engines/contracts/contract.cjs:281](<../../../electron/engines/contracts/contract.cjs#L281>) | FunctionDeclaration |
| [manifest](<../symbols/files/electron/engines/contracts/contract.cjs.md#s-419652773bdad136>) | [electron/engines/contracts/contract.cjs:349](<../../../electron/engines/contracts/contract.cjs#L349>) | FunctionDeclaration |
| [QUOTE_TTL_MS](<../symbols/files/electron/engines/contracts/yahoo-legacy/daily.cjs.md#s-7d3e39b3cdf5c34d>) | [electron/engines/contracts/yahoo-legacy/daily.cjs:3](<../../../electron/engines/contracts/yahoo-legacy/daily.cjs#L3>) | VariableDeclaration |
| [HISTORY_TTL_MS](<../symbols/files/electron/engines/contracts/yahoo-legacy/daily.cjs.md#s-c2a135b389570919>) | [electron/engines/contracts/yahoo-legacy/daily.cjs:4](<../../../electron/engines/contracts/yahoo-legacy/daily.cjs#L4>) | VariableDeclaration |
| [snapshotSchema](<../symbols/files/electron/engines/contracts/yahoo-legacy/daily.cjs.md#s-675034cfffe9009c>) | [electron/engines/contracts/yahoo-legacy/daily.cjs:5](<../../../electron/engines/contracts/yahoo-legacy/daily.cjs#L5>) | SchemaBinding |
| [snapshotSchema](<../symbols/files/electron/engines/contracts/yahoo-legacy/financials.cjs.md#s-42c0e90c9efca278>) | [electron/engines/contracts/yahoo-legacy/financials.cjs:11](<../../../electron/engines/contracts/yahoo-legacy/financials.cjs#L11>) | SchemaBinding |
| [RANGES](<../symbols/files/electron/engines/contracts/yahoo-legacy/market.cjs.md#s-2dc186f3b615c473>) | [electron/engines/contracts/yahoo-legacy/market.cjs:2](<../../../electron/engines/contracts/yahoo-legacy/market.cjs#L2>) | VariableDeclaration |
| [quoteSchema](<../symbols/files/electron/engines/contracts/yahoo-legacy/market.cjs.md#s-f305cc4317d1e177>) | [electron/engines/contracts/yahoo-legacy/market.cjs:4](<../../../electron/engines/contracts/yahoo-legacy/market.cjs#L4>) | SchemaBinding |
| [historySchema](<../symbols/files/electron/engines/contracts/yahoo-legacy/market.cjs.md#s-0fd4abb4e551bd5a>) | [electron/engines/contracts/yahoo-legacy/market.cjs:25](<../../../electron/engines/contracts/yahoo-legacy/market.cjs#L25>) | SchemaBinding |
| [initPackage](<../symbols/files/electron/engines/registry/authoring.cjs.md#s-bbfb28bee2f9c0b0>) | [electron/engines/registry/authoring.cjs:9](<../../../electron/engines/registry/authoring.cjs#L9>) | FunctionDeclaration |
| [pullPackage](<../symbols/files/electron/engines/registry/authoring.cjs.md#s-dd26bc55111fb682>) | [electron/engines/registry/authoring.cjs:92](<../../../electron/engines/registry/authoring.cjs#L92>) | FunctionDeclaration |
| [readBytes](<../symbols/files/electron/engines/registry/package.cjs.md#s-a5f5a53e124cf066>) | [electron/engines/registry/package.cjs:14](<../../../electron/engines/registry/package.cjs#L14>) | FunctionDeclaration |
| [parseJson](<../symbols/files/electron/engines/registry/package.cjs.md#s-fb6b0b1816d9018a>) | [electron/engines/registry/package.cjs:47](<../../../electron/engines/registry/package.cjs#L47>) | FunctionDeclaration |
| [filesIn](<../symbols/files/electron/engines/registry/package.cjs.md#s-7a153ed7a6996a97>) | [electron/engines/registry/package.cjs:56](<../../../electron/engines/registry/package.cjs#L56>) | FunctionDeclaration |
| [inspectPackage](<../symbols/files/electron/engines/registry/package.cjs.md#s-71ed017a00706142>) | [electron/engines/registry/package.cjs:85](<../../../electron/engines/registry/package.cjs#L85>) | FunctionDeclaration |
| [sealPackage](<../symbols/files/electron/engines/registry/package.cjs.md#s-d9c25ce14dcf2863>) | [electron/engines/registry/package.cjs:126](<../../../electron/engines/registry/package.cjs#L126>) | FunctionDeclaration |
| [EnginePackageRegistry](<../symbols/files/electron/engines/registry/registry.cjs.md#s-00e826c1373a9696>) | [electron/engines/registry/registry.cjs:95](<../../../electron/engines/registry/registry.cjs#L95>) | ClassDeclaration |
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
| [EnginePackageRegistry.location](<../symbols/files/electron/engines/registry/registry.cjs.md#s-8b2449642ff6e4f2>) | [electron/engines/registry/registry.cjs:103](<../../../electron/engines/registry/registry.cjs#L103>) | MethodDeclaration |
| [EnginePackageRegistry.read](<../symbols/files/electron/engines/registry/registry.cjs.md#s-abffabd42b530015>) | [electron/engines/registry/registry.cjs:116](<../../../electron/engines/registry/registry.cjs#L116>) | MethodDeclaration |
| [EnginePackageRegistry.mutate](<../symbols/files/electron/engines/registry/registry.cjs.md#s-043a28fe5e7284dd>) | [electron/engines/registry/registry.cjs:136](<../../../electron/engines/registry/registry.cjs#L136>) | MethodDeclaration |
| [EnginePackageRegistry.install](<../symbols/files/electron/engines/registry/registry.cjs.md#s-b97b1298e6d6e88c>) | [electron/engines/registry/registry.cjs:177](<../../../electron/engines/registry/registry.cjs#L177>) | MethodDeclaration |
| [EnginePackageRegistry.installed](<../symbols/files/electron/engines/registry/registry.cjs.md#s-4b2796c726a80a4b>) | [electron/engines/registry/registry.cjs:264](<../../../electron/engines/registry/registry.cjs#L264>) | MethodDeclaration |
| [EnginePackageRegistry.trust](<../symbols/files/electron/engines/registry/registry.cjs.md#s-c4a76488a257429f>) | [electron/engines/registry/registry.cjs:287](<../../../electron/engines/registry/registry.cjs#L287>) | MethodDeclaration |
| [EnginePackageRegistry.setEnabled](<../symbols/files/electron/engines/registry/registry.cjs.md#s-611689d854d873a2>) | [electron/engines/registry/registry.cjs:303](<../../../electron/engines/registry/registry.cjs#L303>) | MethodDeclaration |
| [EnginePackageRegistry.uninstall](<../symbols/files/electron/engines/registry/registry.cjs.md#s-84842efbe2884dcf>) | [electron/engines/registry/registry.cjs:318](<../../../electron/engines/registry/registry.cjs#L318>) | MethodDeclaration |
| [EnginePackageRegistry.link](<../symbols/files/electron/engines/registry/registry.cjs.md#s-4a5a96d46040ffbd>) | [electron/engines/registry/registry.cjs:356](<../../../electron/engines/registry/registry.cjs#L356>) | MethodDeclaration |
| [EnginePackageRegistry.unlink](<../symbols/files/electron/engines/registry/registry.cjs.md#s-d8d8a14586197f2b>) | [electron/engines/registry/registry.cjs:408](<../../../electron/engines/registry/registry.cjs#L408>) | MethodDeclaration |
| [EnginePackageRegistry.catalog](<../symbols/files/electron/engines/registry/registry.cjs.md#s-f5eb01ad09f4b0a0>) | [electron/engines/registry/registry.cjs:420](<../../../electron/engines/registry/registry.cjs#L420>) | MethodDeclaration |
| [EnginePackageRegistry.executeTool](<../symbols/files/electron/engines/registry/registry.cjs.md#s-f025f9ee5da1f3ed>) | [electron/engines/registry/registry.cjs:497](<../../../electron/engines/registry/registry.cjs#L497>) | MethodDeclaration |
| [EnginePackageRegistry.readResult](<../symbols/files/electron/engines/registry/registry.cjs.md#s-34db5a148ab121e2>) | [electron/engines/registry/registry.cjs:531](<../../../electron/engines/registry/registry.cjs#L531>) | MethodDeclaration |
| [EnginePackageRegistry.execute](<../symbols/files/electron/engines/registry/registry.cjs.md#s-61267d4d373b62b8>) | [electron/engines/registry/registry.cjs:583](<../../../electron/engines/registry/registry.cjs#L583>) | MethodDeclaration |

## Depends on

Literal runtime production-file imports only; lazy imports are included. Type, test, tool and external dependencies remain available in the full index.

- [Built-in Engines and data adapters](<engines.md>): 1 import sites; example [electron/engines/registry/registry.cjs:183](<../../../electron/engines/registry/registry.cjs#L183>).
- [Entity domain](<entity-domain.md>): 5 import sites; example [electron/engines/registry/registry.cjs:365](<../../../electron/engines/registry/registry.cjs#L365>).
- [Shared deterministic infrastructure](<shared.md>): 4 import sites; example [electron/engines/registry/authoring.cjs:6](<../../../electron/engines/registry/authoring.cjs#L6>).

## Depended on by

Literal runtime production-file imports only; lazy imports are included. Type, test, tool and external dependencies remain available in the full index.

- [Assigned Agents and jurisdiction](<agents.md>): 2 import sites; example [electron/ai/agents/entity-agent-protocol.cjs:265](<../../../electron/ai/agents/entity-agent-protocol.cjs#L265>).
- [Retained AI runtime](<ai-runtime.md>): 1 import sites; example [electron/ai/engine-registry.cjs:8](<../../../electron/ai/engine-registry.cjs#L8>).
- [Built-in Engines and data adapters](<engines.md>): 3 import sites; example [electron/daily-price-service.cjs:8](<../../../electron/daily-price-service.cjs#L8>).
- [Backend Identity Engine](<identity.md>): 4 import sites; example [electron/engines/backend-identity/capability-registry.cjs:33](<../../../electron/engines/backend-identity/capability-registry.cjs#L33>).
- [Knowledge indexing and source access](<knowledge.md>): 4 import sites; example [electron/domains/indexing/knowledge-index.cjs:4](<../../../electron/domains/indexing/knowledge-index.cjs#L4>).

## Contracts

- [id](<../symbols/files/electron/engines/contracts/contract.cjs.md#s-5c09c3139b775c9b>) — zod-syntax-candidate; exported.
- [version](<../symbols/files/electron/engines/contracts/contract.cjs.md#s-33c8507873e694cf>) — zod-syntax-candidate; exported.
- [jsonSchema](<../symbols/files/electron/engines/contracts/contract.cjs.md#s-79ed7f539d7f049a>) — zod-syntax-candidate; local schema/type.
- [operation](<../symbols/files/electron/engines/contracts/contract.cjs.md#s-dc9f8167926f6363>) — zod-syntax-candidate; local schema/type.
- [signatureSchema](<../symbols/files/electron/engines/contracts/contract.cjs.md#s-38081e1e3278077d>) — zod-syntax-candidate; exported.
- [baseManifest](<../symbols/files/electron/engines/contracts/contract.cjs.md#s-e238501c58432962>) — zod-syntax-candidate; local schema/type.
- [sourceContribution](<../symbols/files/electron/engines/contracts/contract.cjs.md#s-365fad6cee622009>) — zod-syntax-candidate; local schema/type.
- [manifestSchema](<../symbols/files/electron/engines/contracts/contract.cjs.md#s-87463fb13a9665dd>) — zod-syntax-candidate; exported.
- [snapshotSchema](<../symbols/files/electron/engines/contracts/yahoo-legacy/daily.cjs.md#s-675034cfffe9009c>) — zod-syntax-candidate; exported.
- [nullableNumber](<../symbols/files/electron/engines/contracts/yahoo-legacy/financials.cjs.md#s-25df88c623361409>) — zod-syntax-candidate; local schema/type.
- [recordSchema](<../symbols/files/electron/engines/contracts/yahoo-legacy/financials.cjs.md#s-b764e3b4d6accddc>) — zod-syntax-candidate; local schema/type.
- [snapshotSchema](<../symbols/files/electron/engines/contracts/yahoo-legacy/financials.cjs.md#s-42c0e90c9efca278>) — zod-syntax-candidate; exported.
- [numeric](<../symbols/files/electron/engines/contracts/yahoo-legacy/market.cjs.md#s-f29cd3d2829dd588>) — zod-syntax-candidate; local schema/type.
- [quoteSchema](<../symbols/files/electron/engines/contracts/yahoo-legacy/market.cjs.md#s-f305cc4317d1e177>) — zod-syntax-candidate; exported.
- [historySchema](<../symbols/files/electron/engines/contracts/yahoo-legacy/market.cjs.md#s-0fd4abb4e551bd5a>) — zod-syntax-candidate; exported.
- [entityIdSchema](<../symbols/files/electron/engines/registry/registry.cjs.md#s-1759b6f67fe811c6>) — zod-syntax-candidate; local schema/type.
- [storedVersion](<../symbols/files/electron/engines/registry/registry.cjs.md#s-2b89efce7839301b>) — zod-syntax-candidate; local schema/type.
- [stateSchema](<../symbols/files/electron/engines/registry/registry.cjs.md#s-6a915dfe4b838580>) — zod-syntax-candidate; local schema/type.
- [completedReceipt](<../symbols/files/electron/engines/registry/registry.cjs.md#s-eed9a99b6485434b>) — zod-syntax-candidate; local schema/type.

## Source inventory

| File | Role | Declarations |
| --- | --- | --- |
| [electron/engines/contracts/contract.cjs:1](<../../../electron/engines/contracts/contract.cjs#L1>) | production | 29 |
| [electron/engines/contracts/yahoo-legacy/daily.cjs:1](<../../../electron/engines/contracts/yahoo-legacy/daily.cjs#L1>) | production | 6 |
| [electron/engines/contracts/yahoo-legacy/financials.cjs:1](<../../../electron/engines/contracts/yahoo-legacy/financials.cjs#L1>) | production | 5 |
| [electron/engines/contracts/yahoo-legacy/market.cjs:1](<../../../electron/engines/contracts/yahoo-legacy/market.cjs#L1>) | production | 4 |
| [electron/engines/registry/authoring.cjs:1](<../../../electron/engines/registry/authoring.cjs#L1>) | production | 3 |
| [electron/engines/registry/package.cjs:1](<../../../electron/engines/registry/package.cjs#L1>) | production | 7 |
| [electron/engines/registry/registry.cjs:1](<../../../electron/engines/registry/registry.cjs#L1>) | production | 53 |
| [electron/engines/registry/signature.cjs:1](<../../../electron/engines/registry/signature.cjs#L1>) | production | 8 |
| [electron/engines/registry/signing.cjs:1](<../../../electron/engines/registry/signing.cjs#L1>) | production | 3 |
| [electron/engines/runtime/runner.cjs:1](<../../../electron/engines/runtime/runner.cjs#L1>) | production | 10 |
| [electron/engines/runtime/worker.cjs:1](<../../../electron/engines/runtime/worker.cjs#L1>) | production | 4 |
