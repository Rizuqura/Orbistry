# electron/domains/entity/worldview-store.cjs: symbols

[Atlas](<../../../../../README.md>) / [WorldView persistence and IPC](<../../../../../modules/worldview.md>) / [electron/domains/entity/worldview-store.cjs:1](<../../../../../../../electron/domains/entity/worldview-store.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/domains/entity/worldview-store.cjs](<worldview-store.cjs.md#s-393f835352f9ab3b>) (Module)
- [idSchema](<worldview-store.cjs.md#s-cdb843d3e505540a>) (SchemaBinding)
- [knowledgeMenusSchema](<worldview-store.cjs.md#s-781e3d0c90ba0343>) (SchemaBinding)
- [knowledgeMenusSchema.validMenus](<worldview-store.cjs.md#s-ca0fabff18e5ed10>) (FunctionExpression)
- [knowledgeMenusSchema.validMenus.&lt;anonymous@26:22&gt;](<worldview-store.cjs.md#s-519ccb45d13dcf6b>) (ArrowFunction)
- [knowledgeMenusSchema.validMenus.&lt;anonymous@27:27&gt;](<worldview-store.cjs.md#s-ba5a1f1d689b20db>) (ArrowFunction)
- [sourceSchema](<worldview-store.cjs.md#s-638d96f9e3e1f6aa>) (SchemaBinding)
- [chipSchema](<worldview-store.cjs.md#s-68d3b072260edaa7>) (SchemaBinding)
- [indexDirectory](<worldview-store.cjs.md#s-2c0c5b6362339a67>) (FunctionDeclaration)
- [validateChip](<worldview-store.cjs.md#s-7a436afedf3693da>) (FunctionDeclaration)
- [parseEntityIndex](<worldview-store.cjs.md#s-d5bd92669c85b65c>) (FunctionDeclaration)
- [serializeEntityIndex](<worldview-store.cjs.md#s-c5e1330f84c72b28>) (FunctionDeclaration)
- [readRecord](<worldview-store.cjs.md#s-4cc38f17ede07256>) (FunctionDeclaration)
- [resolveSources](<worldview-store.cjs.md#s-3f8492a298e68623>) (FunctionDeclaration)
- [resolveRecord](<worldview-store.cjs.md#s-6caf82c3159db764>) (FunctionDeclaration)
- [loadWorldView](<worldview-store.cjs.md#s-293b8200971c91ac>) (FunctionDeclaration)
- [loadWorldView.compareFiles](<worldview-store.cjs.md#s-33a0b8b8a4615b93>) (FunctionExpression)
- [loadWorldView.compareCreation](<worldview-store.cjs.md#s-7f747dfb72781af2>) (FunctionExpression)
- [mutate](<worldview-store.cjs.md#s-35d772622039af57>) (FunctionDeclaration)
- [saveWorldViewChip](<worldview-store.cjs.md#s-0216d6151aad7b60>) (FunctionDeclaration)
- [saveWorldViewChip.saveChipRecord](<worldview-store.cjs.md#s-39c70d397911a2cb>) (FunctionExpression)
- [assignWorldViewFiles](<worldview-store.cjs.md#s-0cdf96a89f7c7806>) (FunctionDeclaration)
- [assignWorldViewFiles.invalidRef](<worldview-store.cjs.md#s-c2419a23ef5a251d>) (FunctionExpression)
- [assignWorldViewFiles.assignFiles](<worldview-store.cjs.md#s-514645164f44c531>) (FunctionExpression)
- [assignWorldViewFiles.assignFiles.sourcePair](<worldview-store.cjs.md#s-4fa7e2d2b214231a>) (FunctionExpression)
- [assignWorldViewFiles.assignFiles.compareSources](<worldview-store.cjs.md#s-65ce6631febd011d>) (FunctionExpression)
- [unassignWorldViewFile](<worldview-store.cjs.md#s-78df375cb41ff03c>) (FunctionDeclaration)
- [unassignWorldViewFile.unassignFile](<worldview-store.cjs.md#s-b577484bbb93df74>) (FunctionExpression)
- [unassignWorldViewFile.unassignFile.keepSource](<worldview-store.cjs.md#s-7b71d0693def3b7e>) (FunctionExpression)
- [deleteWorldViewChip](<worldview-store.cjs.md#s-b39a3016e010fdbf>) (FunctionDeclaration)
- [deleteWorldViewChip.deleteIndex](<worldview-store.cjs.md#s-e702e9b9791b8b87>) (FunctionExpression)
- [readWorldViewChip](<worldview-store.cjs.md#s-91a1934b6fd154c8>) (FunctionDeclaration)

<a id="s-393f835352f9ab3b"></a>

## electron/domains/entity/worldview-store.cjs

[electron/domains/entity/worldview-store.cjs:1](<../../../../../../../electron/domains/entity/worldview-store.cjs#L1>) · Module · production · [WorldView persistence and IPC](<../../../../../modules/worldview.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 7.

- require — module-loader; [electron/domains/entity/worldview-store.cjs:1](<../../../../../../../electron/domains/entity/worldview-store.cjs#L1>)
- require — module-loader; [electron/domains/entity/worldview-store.cjs:2](<../../../../../../../electron/domains/entity/worldview-store.cjs#L2>)
- require — module-loader; [electron/domains/entity/worldview-store.cjs:3](<../../../../../../../electron/domains/entity/worldview-store.cjs#L3>)
- require — module-loader; [electron/domains/entity/worldview-store.cjs:4](<../../../../../../../electron/domains/entity/worldview-store.cjs#L4>)
- require — module-loader; [electron/domains/entity/worldview-store.cjs:9](<../../../../../../../electron/domains/entity/worldview-store.cjs#L9>)
- require — module-loader; [electron/domains/entity/worldview-store.cjs:10](<../../../../../../../electron/domains/entity/worldview-store.cjs#L10>)
- Map — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:65](<../../../../../../../electron/domains/entity/worldview-store.cjs#L65>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:15](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:11](<../../../../../../../electron/backend-identity.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:24](<../../../../../../../electron/daily-price.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:6](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/domains/entity/worldview-store.test.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:17](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:18](<../../../../../../../electron/engine-packages.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:198](<../../../../../../../electron/engine-signing.test.cjs#L198>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:13](<../../../../../../../electron/excel-service.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:19](<../../../../../../../electron/financial-service.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:20](<../../../../../../../electron/image-parser.test.cjs#L20>) — file-import-only; coverage not established.
- [electron/tag-association.test.cjs:17](<../../../../../../../electron/tag-association.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:209](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L209>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:33](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L33>) — file-import-only; coverage not established.

<a id="s-cdb843d3e505540a"></a>

## idSchema

[electron/domains/entity/worldview-store.cjs:12](<../../../../../../../electron/domains/entity/worldview-store.cjs#L12>) · SchemaBinding · production · [WorldView persistence and IPC](<../../../../../modules/worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/domains/entity/worldview-store.cjs](<worldview-store.cjs.md#s-393f835352f9ab3b>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- z.string().regex — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:12](<../../../../../../../electron/domains/entity/worldview-store.cjs#L12>)
- z.string — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:12](<../../../../../../../electron/domains/entity/worldview-store.cjs#L12>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:15](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:11](<../../../../../../../electron/backend-identity.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:24](<../../../../../../../electron/daily-price.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:6](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/domains/entity/worldview-store.test.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:17](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:18](<../../../../../../../electron/engine-packages.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:198](<../../../../../../../electron/engine-signing.test.cjs#L198>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:13](<../../../../../../../electron/excel-service.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:19](<../../../../../../../electron/financial-service.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:20](<../../../../../../../electron/image-parser.test.cjs#L20>) — file-import-only; coverage not established.
- [electron/tag-association.test.cjs:17](<../../../../../../../electron/tag-association.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:209](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L209>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:33](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L33>) — file-import-only; coverage not established.

<a id="s-781e3d0c90ba0343"></a>

## knowledgeMenusSchema

[electron/domains/entity/worldview-store.cjs:13](<../../../../../../../electron/domains/entity/worldview-store.cjs#L13>) · SchemaBinding · production · [WorldView persistence and IPC](<../../../../../modules/worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/domains/entity/worldview-store.cjs](<worldview-store.cjs.md#s-393f835352f9ab3b>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 9.

- z .array( z.object({ id: idSchema, title: z.string().trim().min(1).max(80), }), ) .min(1) .max(100) .refine — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:13](<../../../../../../../electron/domains/entity/worldview-store.cjs#L13>)
- z .array( z.object({ id: idSchema, title: z.string().trim().min(1).max(80), }), ) .min(1) .max — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:13](<../../../../../../../electron/domains/entity/worldview-store.cjs#L13>)
- z .array( z.object({ id: idSchema, title: z.string().trim().min(1).max(80), }), ) .min — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:13](<../../../../../../../electron/domains/entity/worldview-store.cjs#L13>)
- z .array — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:13](<../../../../../../../electron/domains/entity/worldview-store.cjs#L13>)
- z.object — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:15](<../../../../../../../electron/domains/entity/worldview-store.cjs#L15>)
- z.string().trim().min(1).max — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:17](<../../../../../../../electron/domains/entity/worldview-store.cjs#L17>)
- z.string().trim().min — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:17](<../../../../../../../electron/domains/entity/worldview-store.cjs#L17>)
- z.string().trim — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:17](<../../../../../../../electron/domains/entity/worldview-store.cjs#L17>)
- 1 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:15](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:11](<../../../../../../../electron/backend-identity.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:24](<../../../../../../../electron/daily-price.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:6](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/domains/entity/worldview-store.test.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:17](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:18](<../../../../../../../electron/engine-packages.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:198](<../../../../../../../electron/engine-signing.test.cjs#L198>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:13](<../../../../../../../electron/excel-service.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:19](<../../../../../../../electron/financial-service.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:20](<../../../../../../../electron/image-parser.test.cjs#L20>) — file-import-only; coverage not established.
- [electron/tag-association.test.cjs:17](<../../../../../../../electron/tag-association.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:209](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L209>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:33](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L33>) — file-import-only; coverage not established.

<a id="s-ca0fabff18e5ed10"></a>

## knowledgeMenusSchema.validMenus

[electron/domains/entity/worldview-store.cjs:24](<../../../../../../../electron/domains/entity/worldview-store.cjs#L24>) · FunctionExpression · production · [WorldView persistence and IPC](<../../../../../modules/worldview.md>)

Requires one protected Overview and unique menu IDs within each entity.

Purpose evidence: jsdoc.

Lexical owner: [knowledgeMenusSchema](<worldview-store.cjs.md#s-781e3d0c90ba0343>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| menus | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- menus.filter — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:26](<../../../../../../../electron/domains/entity/worldview-store.cjs#L26>)
- Set — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:27](<../../../../../../../electron/domains/entity/worldview-store.cjs#L27>)
- menus.map — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:27](<../../../../../../../electron/domains/entity/worldview-store.cjs#L27>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:15](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:11](<../../../../../../../electron/backend-identity.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:24](<../../../../../../../electron/daily-price.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:6](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/domains/entity/worldview-store.test.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:17](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:18](<../../../../../../../electron/engine-packages.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:198](<../../../../../../../electron/engine-signing.test.cjs#L198>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:13](<../../../../../../../electron/excel-service.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:19](<../../../../../../../electron/financial-service.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:20](<../../../../../../../electron/image-parser.test.cjs#L20>) — file-import-only; coverage not established.
- [electron/tag-association.test.cjs:17](<../../../../../../../electron/tag-association.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:209](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L209>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:33](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L33>) — file-import-only; coverage not established.

<a id="s-519ccb45d13dcf6b"></a>

## knowledgeMenusSchema.validMenus.&lt;anonymous@26:22&gt;

[electron/domains/entity/worldview-store.cjs:26](<../../../../../../../electron/domains/entity/worldview-store.cjs#L26>) · ArrowFunction · production · [WorldView persistence and IPC](<../../../../../modules/worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [knowledgeMenusSchema.validMenus](<worldview-store.cjs.md#s-ca0fabff18e5ed10>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| menu | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:15](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:11](<../../../../../../../electron/backend-identity.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:24](<../../../../../../../electron/daily-price.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:6](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/domains/entity/worldview-store.test.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:17](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:18](<../../../../../../../electron/engine-packages.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:198](<../../../../../../../electron/engine-signing.test.cjs#L198>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:13](<../../../../../../../electron/excel-service.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:19](<../../../../../../../electron/financial-service.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:20](<../../../../../../../electron/image-parser.test.cjs#L20>) — file-import-only; coverage not established.
- [electron/tag-association.test.cjs:17](<../../../../../../../electron/tag-association.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:209](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L209>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:33](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L33>) — file-import-only; coverage not established.

<a id="s-ba5a1f1d689b20db"></a>

## knowledgeMenusSchema.validMenus.&lt;anonymous@27:27&gt;

[electron/domains/entity/worldview-store.cjs:27](<../../../../../../../electron/domains/entity/worldview-store.cjs#L27>) · ArrowFunction · production · [WorldView persistence and IPC](<../../../../../modules/worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [knowledgeMenusSchema.validMenus](<worldview-store.cjs.md#s-ca0fabff18e5ed10>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| menu | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:15](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:11](<../../../../../../../electron/backend-identity.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:24](<../../../../../../../electron/daily-price.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:6](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/domains/entity/worldview-store.test.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:17](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:18](<../../../../../../../electron/engine-packages.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:198](<../../../../../../../electron/engine-signing.test.cjs#L198>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:13](<../../../../../../../electron/excel-service.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:19](<../../../../../../../electron/financial-service.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:20](<../../../../../../../electron/image-parser.test.cjs#L20>) — file-import-only; coverage not established.
- [electron/tag-association.test.cjs:17](<../../../../../../../electron/tag-association.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:209](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L209>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:33](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L33>) — file-import-only; coverage not established.

<a id="s-638d96f9e3e1f6aa"></a>

## sourceSchema

[electron/domains/entity/worldview-store.cjs:32](<../../../../../../../electron/domains/entity/worldview-store.cjs#L32>) · SchemaBinding · production · [WorldView persistence and IPC](<../../../../../modules/worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/domains/entity/worldview-store.cjs](<worldview-store.cjs.md#s-393f835352f9ab3b>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 17.

- z .object({ source_id: z.string().min(1).max(32768), source_ref: z.string().min(1).max(32768), filename: z.string().min(1), extension: z.string(), size_bytes: z .number() .int() .n — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:32](<../../../../../../../electron/domains/entity/worldview-store.cjs#L32>)
- z .object — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:32](<../../../../../../../electron/domains/entity/worldview-store.cjs#L32>)
- z.string().min(1).max — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:34](<../../../../../../../electron/domains/entity/worldview-store.cjs#L34>)
- z.string().min — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:34](<../../../../../../../electron/domains/entity/worldview-store.cjs#L34>)
- z.string — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:34](<../../../../../../../electron/domains/entity/worldview-store.cjs#L34>)
- z.string().min(1).max — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:35](<../../../../../../../electron/domains/entity/worldview-store.cjs#L35>)
- z.string().min — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:35](<../../../../../../../electron/domains/entity/worldview-store.cjs#L35>)
- z.string — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:35](<../../../../../../../electron/domains/entity/worldview-store.cjs#L35>)
- 9 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:15](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:11](<../../../../../../../electron/backend-identity.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:24](<../../../../../../../electron/daily-price.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:6](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/domains/entity/worldview-store.test.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:17](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:18](<../../../../../../../electron/engine-packages.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:198](<../../../../../../../electron/engine-signing.test.cjs#L198>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:13](<../../../../../../../electron/excel-service.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:19](<../../../../../../../electron/financial-service.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:20](<../../../../../../../electron/image-parser.test.cjs#L20>) — file-import-only; coverage not established.
- [electron/tag-association.test.cjs:17](<../../../../../../../electron/tag-association.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:209](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L209>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:33](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L33>) — file-import-only; coverage not established.

<a id="s-68d3b072260edaa7"></a>

## chipSchema

[electron/domains/entity/worldview-store.cjs:47](<../../../../../../../electron/domains/entity/worldview-store.cjs#L47>) · SchemaBinding · production · [WorldView persistence and IPC](<../../../../../modules/worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/domains/entity/worldview-store.cjs](<worldview-store.cjs.md#s-393f835352f9ab3b>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 31.

- z.object — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:47](<../../../../../../../electron/domains/entity/worldview-store.cjs#L47>)
- z.string().trim().min(1).max — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:49](<../../../../../../../electron/domains/entity/worldview-store.cjs#L49>)
- z.string().trim().min — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:49](<../../../../../../../electron/domains/entity/worldview-store.cjs#L49>)
- z.string().trim — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:49](<../../../../../../../electron/domains/entity/worldview-store.cjs#L49>)
- z.string — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:49](<../../../../../../../electron/domains/entity/worldview-store.cjs#L49>)
- z.string().max(32).default — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:50](<../../../../../../../electron/domains/entity/worldview-store.cjs#L50>)
- z.string().max — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:50](<../../../../../../../electron/domains/entity/worldview-store.cjs#L50>)
- z.string — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:50](<../../../../../../../electron/domains/entity/worldview-store.cjs#L50>)
- 23 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:15](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:11](<../../../../../../../electron/backend-identity.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:24](<../../../../../../../electron/daily-price.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:6](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/domains/entity/worldview-store.test.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:17](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:18](<../../../../../../../electron/engine-packages.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:198](<../../../../../../../electron/engine-signing.test.cjs#L198>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:13](<../../../../../../../electron/excel-service.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:19](<../../../../../../../electron/financial-service.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:20](<../../../../../../../electron/image-parser.test.cjs#L20>) — file-import-only; coverage not established.
- [electron/tag-association.test.cjs:17](<../../../../../../../electron/tag-association.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:209](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L209>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:33](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L33>) — file-import-only; coverage not established.

<a id="s-2c0c5b6362339a67"></a>

## indexDirectory

[electron/domains/entity/worldview-store.cjs:68](<../../../../../../../electron/domains/entity/worldview-store.cjs#L68>) · FunctionDeclaration · production · [WorldView persistence and IPC](<../../../../../modules/worldview.md>)

Returns a protected metadata directory inside the existing Vault metadata namespace, without creating it.

Purpose evidence: jsdoc.

Lexical owner: [electron/domains/entity/worldview-store.cjs](<worldview-store.cjs.md#s-393f835352f9ab3b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| rootPath | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [rejectSymlink](<../../core/persistence/json-store.cjs.md#s-aaddc8aab5c0d073>) — [electron/domains/entity/worldview-store.cjs:73](<../../../../../../../electron/domains/entity/worldview-store.cjs#L73>)

**Called by (statically resolved):**

- [readRecord](<worldview-store.cjs.md#s-4cc38f17ede07256>) — [electron/domains/entity/worldview-store.cjs:152](<../../../../../../../electron/domains/entity/worldview-store.cjs#L152>)
- [loadWorldView](<worldview-store.cjs.md#s-293b8200971c91ac>) — [electron/domains/entity/worldview-store.cjs:214](<../../../../../../../electron/domains/entity/worldview-store.cjs#L214>)
- [saveWorldViewChip.saveChipRecord](<worldview-store.cjs.md#s-39c70d397911a2cb>) — [electron/domains/entity/worldview-store.cjs:296](<../../../../../../../electron/domains/entity/worldview-store.cjs#L296>)
- [assignWorldViewFiles.assignFiles](<worldview-store.cjs.md#s-514645164f44c531>) — [electron/domains/entity/worldview-store.cjs:362](<../../../../../../../electron/domains/entity/worldview-store.cjs#L362>)
- [unassignWorldViewFile.unassignFile](<worldview-store.cjs.md#s-b577484bbb93df74>) — [electron/domains/entity/worldview-store.cjs:385](<../../../../../../../electron/domains/entity/worldview-store.cjs#L385>)
- [deleteWorldViewChip.deleteIndex](<worldview-store.cjs.md#s-e702e9b9791b8b87>) — [electron/domains/entity/worldview-store.cjs:399](<../../../../../../../electron/domains/entity/worldview-store.cjs#L399>)

Unresolved / external call sites: 2.

- fs.realpath — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:69](<../../../../../../../electron/domains/entity/worldview-store.cjs#L69>)
- path.join — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:72](<../../../../../../../electron/domains/entity/worldview-store.cjs#L72>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:15](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:11](<../../../../../../../electron/backend-identity.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:24](<../../../../../../../electron/daily-price.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:6](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/domains/entity/worldview-store.test.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:17](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:18](<../../../../../../../electron/engine-packages.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:198](<../../../../../../../electron/engine-signing.test.cjs#L198>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:13](<../../../../../../../electron/excel-service.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:19](<../../../../../../../electron/financial-service.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:20](<../../../../../../../electron/image-parser.test.cjs#L20>) — file-import-only; coverage not established.
- [electron/tag-association.test.cjs:17](<../../../../../../../electron/tag-association.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:209](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L209>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:33](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L33>) — file-import-only; coverage not established.

<a id="s-7a436afedf3693da"></a>

## validateChip

[electron/domains/entity/worldview-store.cjs:79](<../../../../../../../electron/domains/entity/worldview-store.cjs#L79>) · FunctionDeclaration · production · [WorldView persistence and IPC](<../../../../../modules/worldview.md>)

Validates renderer-owned fields while excluding transient source statuses and server-owned associations.

Purpose evidence: jsdoc.

Lexical owner: [electron/domains/entity/worldview-store.cjs](<worldview-store.cjs.md#s-393f835352f9ab3b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| chip | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [parseEntityIndex](<worldview-store.cjs.md#s-d5bd92669c85b65c>) — [electron/domains/entity/worldview-store.cjs:112](<../../../../../../../electron/domains/entity/worldview-store.cjs#L112>)
- [saveWorldViewChip](<worldview-store.cjs.md#s-0216d6151aad7b60>) — [electron/domains/entity/worldview-store.cjs:268](<../../../../../../../electron/domains/entity/worldview-store.cjs#L268>)

Unresolved / external call sites: 2.

- chipSchema.safeParse — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:80](<../../../../../../../electron/domains/entity/worldview-store.cjs#L80>)
- Error — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:81](<../../../../../../../electron/domains/entity/worldview-store.cjs#L81>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:15](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:11](<../../../../../../../electron/backend-identity.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:24](<../../../../../../../electron/daily-price.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:6](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/domains/entity/worldview-store.test.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:17](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:18](<../../../../../../../electron/engine-packages.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:198](<../../../../../../../electron/engine-signing.test.cjs#L198>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:13](<../../../../../../../electron/excel-service.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:19](<../../../../../../../electron/financial-service.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:20](<../../../../../../../electron/image-parser.test.cjs#L20>) — file-import-only; coverage not established.
- [electron/tag-association.test.cjs:17](<../../../../../../../electron/tag-association.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:209](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L209>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:33](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L33>) — file-import-only; coverage not established.

<a id="s-d5bd92669c85b65c"></a>

## parseEntityIndex

[electron/domains/entity/worldview-store.cjs:86](<../../../../../../../electron/domains/entity/worldview-store.cjs#L86>) · FunctionDeclaration · production · [WorldView persistence and IPC](<../../../../../modules/worldview.md>)

Parses only the entity metadata document, preserving unknown frontmatter and the complete Markdown body.

Purpose evidence: jsdoc.

Lexical owner: [electron/domains/entity/worldview-store.cjs](<worldview-store.cjs.md#s-393f835352f9ab3b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| text | any | compiler-inferred | required |
| expectedId | any | compiler-inferred | required |

Returns: { metadata: any; body: any; original: any; chip: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [validateChip](<worldview-store.cjs.md#s-7a436afedf3693da>) — [electron/domains/entity/worldview-store.cjs:112](<../../../../../../../electron/domains/entity/worldview-store.cjs#L112>)

**Called by (statically resolved):**

- [readRecord](<worldview-store.cjs.md#s-4cc38f17ede07256>) — [electron/domains/entity/worldview-store.cjs:160](<../../../../../../../electron/domains/entity/worldview-store.cjs#L160>)

Unresolved / external call sites: 11.

- /^---\\r?\\n(&#91;\\s\\S&#93;*?)\\r?\\n---(?:\\r?\\n&#124;$)(&#91;\\s\\S&#93;*)$/.exec — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:87](<../../../../../../../electron/domains/entity/worldview-store.cjs#L87>)
- Error — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:89](<../../../../../../../electron/domains/entity/worldview-store.cjs#L89>)
- yaml.load — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:90](<../../../../../../../electron/domains/entity/worldview-store.cjs#L90>)
- Error — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:96](<../../../../../../../electron/domains/entity/worldview-store.cjs#L96>)
- Array.isArray — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:97](<../../../../../../../electron/domains/entity/worldview-store.cjs#L97>)
- Error — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:98](<../../../../../../../electron/domains/entity/worldview-store.cjs#L98>)
- Set — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:99](<../../../../../../../electron/domains/entity/worldview-store.cjs#L99>)
- sourceSchema.safeParse — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:101](<../../../../../../../electron/domains/entity/worldview-store.cjs#L101>)
- 3 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:15](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:11](<../../../../../../../electron/backend-identity.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:24](<../../../../../../../electron/daily-price.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:6](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/domains/entity/worldview-store.test.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:17](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:18](<../../../../../../../electron/engine-packages.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:198](<../../../../../../../electron/engine-signing.test.cjs#L198>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:13](<../../../../../../../electron/excel-service.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:19](<../../../../../../../electron/financial-service.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:20](<../../../../../../../electron/image-parser.test.cjs#L20>) — file-import-only; coverage not established.
- [electron/tag-association.test.cjs:17](<../../../../../../../electron/tag-association.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:209](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L209>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:33](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L33>) — file-import-only; coverage not established.

<a id="s-c5e1330f84c72b28"></a>

## serializeEntityIndex

[electron/domains/entity/worldview-store.cjs:140](<../../../../../../../electron/domains/entity/worldview-store.cjs#L140>) · FunctionDeclaration · production · [WorldView persistence and IPC](<../../../../../modules/worldview.md>)

Serializes deterministic YAML frontmatter and preserves user-authored body and unrelated metadata.

Purpose evidence: jsdoc.

Lexical owner: [electron/domains/entity/worldview-store.cjs](<worldview-store.cjs.md#s-393f835352f9ab3b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| record | any | compiler-inferred | required |

Returns: string (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [saveWorldViewChip.saveChipRecord](<worldview-store.cjs.md#s-39c70d397911a2cb>) — [electron/domains/entity/worldview-store.cjs:297](<../../../../../../../electron/domains/entity/worldview-store.cjs#L297>)
- [assignWorldViewFiles.assignFiles](<worldview-store.cjs.md#s-514645164f44c531>) — [electron/domains/entity/worldview-store.cjs:363](<../../../../../../../electron/domains/entity/worldview-store.cjs#L363>)
- [unassignWorldViewFile.unassignFile](<worldview-store.cjs.md#s-b577484bbb93df74>) — [electron/domains/entity/worldview-store.cjs:386](<../../../../../../../electron/domains/entity/worldview-store.cjs#L386>)

Unresolved / external call sites: 3.

- yaml.dump — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:141](<../../../../../../../electron/domains/entity/worldview-store.cjs#L141>)
- Buffer.byteLength — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:142](<../../../../../../../electron/domains/entity/worldview-store.cjs#L142>)
- Error — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:143](<../../../../../../../electron/domains/entity/worldview-store.cjs#L143>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:15](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:11](<../../../../../../../electron/backend-identity.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:24](<../../../../../../../electron/daily-price.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:6](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/domains/entity/worldview-store.test.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:17](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:18](<../../../../../../../electron/engine-packages.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:198](<../../../../../../../electron/engine-signing.test.cjs#L198>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:13](<../../../../../../../electron/excel-service.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:19](<../../../../../../../electron/financial-service.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:20](<../../../../../../../electron/image-parser.test.cjs#L20>) — file-import-only; coverage not established.
- [electron/tag-association.test.cjs:17](<../../../../../../../electron/tag-association.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:209](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L209>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:33](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L33>) — file-import-only; coverage not established.

<a id="s-4cc38f17ede07256"></a>

## readRecord

[electron/domains/entity/worldview-store.cjs:150](<../../../../../../../electron/domains/entity/worldview-store.cjs#L150>) · FunctionDeclaration · production · [WorldView persistence and IPC](<../../../../../modules/worldview.md>)

Reads a bounded, non-linked entity index; missing records are returned only when explicitly allowed.

Purpose evidence: jsdoc.

Lexical owner: [electron/domains/entity/worldview-store.cjs](<worldview-store.cjs.md#s-393f835352f9ab3b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| rootPath | any | compiler-inferred | required |
| id | any | compiler-inferred | required |
| allowMissing | boolean | compiler-inferred | optional, default present |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [indexDirectory](<worldview-store.cjs.md#s-2c0c5b6362339a67>) — [electron/domains/entity/worldview-store.cjs:152](<../../../../../../../electron/domains/entity/worldview-store.cjs#L152>)
- [rejectSymlink](<../../core/persistence/json-store.cjs.md#s-aaddc8aab5c0d073>) — [electron/domains/entity/worldview-store.cjs:154](<../../../../../../../electron/domains/entity/worldview-store.cjs#L154>)
- [parseEntityIndex](<worldview-store.cjs.md#s-d5bd92669c85b65c>) — [electron/domains/entity/worldview-store.cjs:160](<../../../../../../../electron/domains/entity/worldview-store.cjs#L160>)

**Called by (statically resolved):**

- [loadWorldView](<worldview-store.cjs.md#s-293b8200971c91ac>) — [electron/domains/entity/worldview-store.cjs:237](<../../../../../../../electron/domains/entity/worldview-store.cjs#L237>)
- [saveWorldViewChip.saveChipRecord](<worldview-store.cjs.md#s-39c70d397911a2cb>) — [electron/domains/entity/worldview-store.cjs:270](<../../../../../../../electron/domains/entity/worldview-store.cjs#L270>)
- [assignWorldViewFiles.assignFiles](<worldview-store.cjs.md#s-514645164f44c531>) — [electron/domains/entity/worldview-store.cjs:321](<../../../../../../../electron/domains/entity/worldview-store.cjs#L321>)
- [unassignWorldViewFile.unassignFile](<worldview-store.cjs.md#s-b577484bbb93df74>) — [electron/domains/entity/worldview-store.cjs:376](<../../../../../../../electron/domains/entity/worldview-store.cjs#L376>)
- [deleteWorldViewChip.deleteIndex](<worldview-store.cjs.md#s-e702e9b9791b8b87>) — [electron/domains/entity/worldview-store.cjs:397](<../../../../../../../electron/domains/entity/worldview-store.cjs#L397>)
- [readWorldViewChip](<worldview-store.cjs.md#s-91a1934b6fd154c8>) — [electron/domains/entity/worldview-store.cjs:419](<../../../../../../../electron/domains/entity/worldview-store.cjs#L419>)

Unresolved / external call sites: 6.

- idSchema.parse — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:151](<../../../../../../../electron/domains/entity/worldview-store.cjs#L151>)
- path.join — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:152](<../../../../../../../electron/domains/entity/worldview-store.cjs#L152>)
- fs.stat — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:155](<../../../../../../../electron/domains/entity/worldview-store.cjs#L155>)
- stat.isFile — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:156](<../../../../../../../electron/domains/entity/worldview-store.cjs#L156>)
- Error — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:157](<../../../../../../../electron/domains/entity/worldview-store.cjs#L157>)
- fs.readFile — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:160](<../../../../../../../electron/domains/entity/worldview-store.cjs#L160>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:15](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:11](<../../../../../../../electron/backend-identity.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:24](<../../../../../../../electron/daily-price.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:6](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/domains/entity/worldview-store.test.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:17](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:18](<../../../../../../../electron/engine-packages.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:198](<../../../../../../../electron/engine-signing.test.cjs#L198>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:13](<../../../../../../../electron/excel-service.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:19](<../../../../../../../electron/financial-service.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:20](<../../../../../../../electron/image-parser.test.cjs#L20>) — file-import-only; coverage not established.
- [electron/tag-association.test.cjs:17](<../../../../../../../electron/tag-association.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:209](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L209>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:33](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L33>) — file-import-only; coverage not established.

<a id="s-3f8492a298e68623"></a>

## resolveSources

[electron/domains/entity/worldview-store.cjs:168](<../../../../../../../electron/domains/entity/worldview-store.cjs#L168>) · FunctionDeclaration · production · [WorldView persistence and IPC](<../../../../../modules/worldview.md>)

Resolves recorded references using stat only; missing sources remain associated with an explicit status.

Purpose evidence: jsdoc.

Lexical owner: [electron/domains/entity/worldview-store.cjs](<worldview-store.cjs.md#s-393f835352f9ab3b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| rootPath | any | compiler-inferred | required |
| recorded | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [statVaultSource](<../universe/vault-service.cjs.md#s-11f97228db17e5f8>) — [electron/domains/entity/worldview-store.cjs:182](<../../../../../../../electron/domains/entity/worldview-store.cjs#L182>)

**Called by (statically resolved):**

- [resolveRecord](<worldview-store.cjs.md#s-6caf82c3159db764>) — [electron/domains/entity/worldview-store.cjs:207](<../../../../../../../electron/domains/entity/worldview-store.cjs#L207>)

Unresolved / external call sites: 3.

- resolved.stats.isFile — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:183](<../../../../../../../electron/domains/entity/worldview-store.cjs#L183>)
- Error — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:184](<../../../../../../../electron/domains/entity/worldview-store.cjs#L184>)
- sources.push — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:198](<../../../../../../../electron/domains/entity/worldview-store.cjs#L198>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:15](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:11](<../../../../../../../electron/backend-identity.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:24](<../../../../../../../electron/daily-price.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:6](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/domains/entity/worldview-store.test.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:17](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:18](<../../../../../../../electron/engine-packages.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:198](<../../../../../../../electron/engine-signing.test.cjs#L198>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:13](<../../../../../../../electron/excel-service.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:19](<../../../../../../../electron/financial-service.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:20](<../../../../../../../electron/image-parser.test.cjs#L20>) — file-import-only; coverage not established.
- [electron/tag-association.test.cjs:17](<../../../../../../../electron/tag-association.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:209](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L209>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:33](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L33>) — file-import-only; coverage not established.

<a id="s-6caf82c3159db764"></a>

## resolveRecord

[electron/domains/entity/worldview-store.cjs:204](<../../../../../../../electron/domains/entity/worldview-store.cjs#L204>) · FunctionDeclaration · production · [WorldView persistence and IPC](<../../../../../modules/worldview.md>)

Returns a renderable chip reconstructed from its Markdown record and current authoritative byte metadata.

Purpose evidence: jsdoc.

Lexical owner: [electron/domains/entity/worldview-store.cjs](<worldview-store.cjs.md#s-393f835352f9ab3b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| rootPath | any | compiler-inferred | required |
| record | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [resolveSources](<worldview-store.cjs.md#s-3f8492a298e68623>) — [electron/domains/entity/worldview-store.cjs:207](<../../../../../../../electron/domains/entity/worldview-store.cjs#L207>)

**Called by (statically resolved):**

- [loadWorldView](<worldview-store.cjs.md#s-293b8200971c91ac>) — [electron/domains/entity/worldview-store.cjs:239](<../../../../../../../electron/domains/entity/worldview-store.cjs#L239>)
- [saveWorldViewChip.saveChipRecord](<worldview-store.cjs.md#s-39c70d397911a2cb>) — [electron/domains/entity/worldview-store.cjs:300](<../../../../../../../electron/domains/entity/worldview-store.cjs#L300>)
- [assignWorldViewFiles.assignFiles](<worldview-store.cjs.md#s-514645164f44c531>) — [electron/domains/entity/worldview-store.cjs:366](<../../../../../../../electron/domains/entity/worldview-store.cjs#L366>)
- [unassignWorldViewFile.unassignFile](<worldview-store.cjs.md#s-b577484bbb93df74>) — [electron/domains/entity/worldview-store.cjs:389](<../../../../../../../electron/domains/entity/worldview-store.cjs#L389>)
- [readWorldViewChip](<worldview-store.cjs.md#s-91a1934b6fd154c8>) — [electron/domains/entity/worldview-store.cjs:419](<../../../../../../../electron/domains/entity/worldview-store.cjs#L419>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:15](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:11](<../../../../../../../electron/backend-identity.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:24](<../../../../../../../electron/daily-price.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:6](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/domains/entity/worldview-store.test.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:17](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:18](<../../../../../../../electron/engine-packages.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:198](<../../../../../../../electron/engine-signing.test.cjs#L198>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:13](<../../../../../../../electron/excel-service.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:19](<../../../../../../../electron/financial-service.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:20](<../../../../../../../electron/image-parser.test.cjs#L20>) — file-import-only; coverage not established.
- [electron/tag-association.test.cjs:17](<../../../../../../../electron/tag-association.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:209](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L209>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:33](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L33>) — file-import-only; coverage not established.

<a id="s-293b8200971c91ac"></a>

## loadWorldView

[electron/domains/entity/worldview-store.cjs:213](<../../../../../../../electron/domains/entity/worldview-store.cjs#L213>) · FunctionDeclaration · production · [WorldView persistence and IPC](<../../../../../modules/worldview.md>)

Loads persisted entity records independently. metadataOnly omits source stat resolution for tag search; no source contents are read.

Purpose evidence: jsdoc.

Lexical owner: [electron/domains/entity/worldview-store.cjs](<worldview-store.cjs.md#s-393f835352f9ab3b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| rootPath | any | compiler-inferred | required |
| { metadataOnly = false } | { metadataOnly?: boolean; } | compiler-inferred | optional, default present |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [indexDirectory](<worldview-store.cjs.md#s-2c0c5b6362339a67>) — [electron/domains/entity/worldview-store.cjs:214](<../../../../../../../electron/domains/entity/worldview-store.cjs#L214>)
- [readRecord](<worldview-store.cjs.md#s-4cc38f17ede07256>) — [electron/domains/entity/worldview-store.cjs:237](<../../../../../../../electron/domains/entity/worldview-store.cjs#L237>)
- [resolveRecord](<worldview-store.cjs.md#s-6caf82c3159db764>) — [electron/domains/entity/worldview-store.cjs:239](<../../../../../../../electron/domains/entity/worldview-store.cjs#L239>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 10.

- fs.readdir — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:217](<../../../../../../../electron/domains/entity/worldview-store.cjs#L217>)
- entries.sort — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:225](<../../../../../../../electron/domains/entity/worldview-store.cjs#L225>)
- entry.name.endsWith — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:233](<../../../../../../../electron/domains/entity/worldview-store.cjs#L233>)
- entry.isFile — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:235](<../../../../../../../electron/domains/entity/worldview-store.cjs#L235>)
- entry.isSymbolicLink — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:235](<../../../../../../../electron/domains/entity/worldview-store.cjs#L235>)
- Error — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:236](<../../../../../../../electron/domains/entity/worldview-store.cjs#L236>)
- entry.name.slice — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:237](<../../../../../../../electron/domains/entity/worldview-store.cjs#L237>)
- chips.push — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:238](<../../../../../../../electron/domains/entity/worldview-store.cjs#L238>)
- 2 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:15](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:11](<../../../../../../../electron/backend-identity.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:24](<../../../../../../../electron/daily-price.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:6](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/domains/entity/worldview-store.test.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:17](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:18](<../../../../../../../electron/engine-packages.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:198](<../../../../../../../electron/engine-signing.test.cjs#L198>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:13](<../../../../../../../electron/excel-service.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:19](<../../../../../../../electron/financial-service.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:20](<../../../../../../../electron/image-parser.test.cjs#L20>) — file-import-only; coverage not established.
- [electron/tag-association.test.cjs:17](<../../../../../../../electron/tag-association.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:209](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L209>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:33](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L33>) — file-import-only; coverage not established.

<a id="s-33a0b8b8a4615b93"></a>

## loadWorldView.compareFiles

[electron/domains/entity/worldview-store.cjs:226](<../../../../../../../electron/domains/entity/worldview-store.cjs#L226>) · FunctionExpression · production · [WorldView persistence and IPC](<../../../../../modules/worldview.md>)

Sorts metadata filenames for deterministic restoration.

Purpose evidence: jsdoc.

Lexical owner: [loadWorldView](<worldview-store.cjs.md#s-293b8200971c91ac>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| a | any | compiler-inferred | required |
| b | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- a.name.localeCompare — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:230](<../../../../../../../electron/domains/entity/worldview-store.cjs#L230>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:15](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:11](<../../../../../../../electron/backend-identity.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:24](<../../../../../../../electron/daily-price.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:6](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/domains/entity/worldview-store.test.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:17](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:18](<../../../../../../../electron/engine-packages.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:198](<../../../../../../../electron/engine-signing.test.cjs#L198>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:13](<../../../../../../../electron/excel-service.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:19](<../../../../../../../electron/financial-service.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:20](<../../../../../../../electron/image-parser.test.cjs#L20>) — file-import-only; coverage not established.
- [electron/tag-association.test.cjs:17](<../../../../../../../electron/tag-association.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:209](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L209>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:33](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L33>) — file-import-only; coverage not established.

<a id="s-7f747dfb72781af2"></a>

## loadWorldView.compareCreation

[electron/domains/entity/worldview-store.cjs:246](<../../../../../../../electron/domains/entity/worldview-store.cjs#L246>) · FunctionExpression · production · [WorldView persistence and IPC](<../../../../../modules/worldview.md>)

Restores creation order independently of UUID filenames.

Purpose evidence: jsdoc.

Lexical owner: [loadWorldView](<worldview-store.cjs.md#s-293b8200971c91ac>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| a | any | compiler-inferred | required |
| b | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- (a.createdAt ?? "").localeCompare — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:251](<../../../../../../../electron/domains/entity/worldview-store.cjs#L251>)
- a.id.localeCompare — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:252](<../../../../../../../electron/domains/entity/worldview-store.cjs#L252>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:15](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:11](<../../../../../../../electron/backend-identity.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:24](<../../../../../../../electron/daily-price.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:6](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/domains/entity/worldview-store.test.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:17](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:18](<../../../../../../../electron/engine-packages.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:198](<../../../../../../../electron/engine-signing.test.cjs#L198>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:13](<../../../../../../../electron/excel-service.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:19](<../../../../../../../electron/financial-service.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:20](<../../../../../../../electron/image-parser.test.cjs#L20>) — file-import-only; coverage not established.
- [electron/tag-association.test.cjs:17](<../../../../../../../electron/tag-association.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:209](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L209>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:33](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L33>) — file-import-only; coverage not established.

<a id="s-35d772622039af57"></a>

## mutate

[electron/domains/entity/worldview-store.cjs:260](<../../../../../../../electron/domains/entity/worldview-store.cjs#L260>) · FunctionDeclaration · production · [WorldView persistence and IPC](<../../../../../modules/worldview.md>)

Serializes mutations per real Universe root; failed operations do not poison subsequent writes.

Purpose evidence: jsdoc.

Lexical owner: [electron/domains/entity/worldview-store.cjs](<worldview-store.cjs.md#s-393f835352f9ab3b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| rootPath | any | compiler-inferred | required |
| operation | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [serialQueue](<../../core/persistence/json-store.cjs.md#s-a8a605453bc9a09a>) — [electron/domains/entity/worldview-store.cjs:262](<../../../../../../../electron/domains/entity/worldview-store.cjs#L262>)

**Called by (statically resolved):**

- [saveWorldViewChip](<worldview-store.cjs.md#s-0216d6151aad7b60>) — [electron/domains/entity/worldview-store.cjs:269](<../../../../../../../electron/domains/entity/worldview-store.cjs#L269>)
- [assignWorldViewFiles](<worldview-store.cjs.md#s-0cdf96a89f7c7806>) — [electron/domains/entity/worldview-store.cjs:320](<../../../../../../../electron/domains/entity/worldview-store.cjs#L320>)
- [unassignWorldViewFile](<worldview-store.cjs.md#s-78df375cb41ff03c>) — [electron/domains/entity/worldview-store.cjs:375](<../../../../../../../electron/domains/entity/worldview-store.cjs#L375>)
- [deleteWorldViewChip](<worldview-store.cjs.md#s-b39a3016e010fdbf>) — [electron/domains/entity/worldview-store.cjs:396](<../../../../../../../electron/domains/entity/worldview-store.cjs#L396>)

Unresolved / external call sites: 5.

- fs.realpath — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:261](<../../../../../../../electron/domains/entity/worldview-store.cjs#L261>)
- queues.has — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:262](<../../../../../../../electron/domains/entity/worldview-store.cjs#L262>)
- queues.set — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:262](<../../../../../../../electron/domains/entity/worldview-store.cjs#L262>)
- queues.get(root) — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:263](<../../../../../../../electron/domains/entity/worldview-store.cjs#L263>)
- queues.get — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:263](<../../../../../../../electron/domains/entity/worldview-store.cjs#L263>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:15](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:11](<../../../../../../../electron/backend-identity.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:24](<../../../../../../../electron/daily-price.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:6](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/domains/entity/worldview-store.test.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:17](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:18](<../../../../../../../electron/engine-packages.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:198](<../../../../../../../electron/engine-signing.test.cjs#L198>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:13](<../../../../../../../electron/excel-service.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:19](<../../../../../../../electron/financial-service.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:20](<../../../../../../../electron/image-parser.test.cjs#L20>) — file-import-only; coverage not established.
- [electron/tag-association.test.cjs:17](<../../../../../../../electron/tag-association.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:209](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L209>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:33](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L33>) — file-import-only; coverage not established.

<a id="s-0216d6151aad7b60"></a>

## saveWorldViewChip

[electron/domains/entity/worldview-store.cjs:267](<../../../../../../../electron/domains/entity/worldview-store.cjs#L267>) · FunctionDeclaration · production · [WorldView persistence and IPC](<../../../../../modules/worldview.md>)

Saves chip appearance and menu configuration while preserving source associations, unknown YAML, and body text.

Purpose evidence: jsdoc.

Lexical owner: [electron/domains/entity/worldview-store.cjs](<worldview-store.cjs.md#s-393f835352f9ab3b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| rootPath | any | compiler-inferred | required |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [validateChip](<worldview-store.cjs.md#s-7a436afedf3693da>) — [electron/domains/entity/worldview-store.cjs:268](<../../../../../../../electron/domains/entity/worldview-store.cjs#L268>)
- [mutate](<worldview-store.cjs.md#s-35d772622039af57>) — [electron/domains/entity/worldview-store.cjs:269](<../../../../../../../electron/domains/entity/worldview-store.cjs#L269>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:15](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:11](<../../../../../../../electron/backend-identity.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:24](<../../../../../../../electron/daily-price.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:6](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/domains/entity/worldview-store.test.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:17](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:18](<../../../../../../../electron/engine-packages.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:198](<../../../../../../../electron/engine-signing.test.cjs#L198>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:13](<../../../../../../../electron/excel-service.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:19](<../../../../../../../electron/financial-service.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:20](<../../../../../../../electron/image-parser.test.cjs#L20>) — file-import-only; coverage not established.
- [electron/tag-association.test.cjs:17](<../../../../../../../electron/tag-association.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:209](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L209>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:33](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L33>) — file-import-only; coverage not established.

<a id="s-39c70d397911a2cb"></a>

## saveWorldViewChip.saveChipRecord

[electron/domains/entity/worldview-store.cjs:269](<../../../../../../../electron/domains/entity/worldview-store.cjs#L269>) · FunctionExpression · production · [WorldView persistence and IPC](<../../../../../modules/worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [saveWorldViewChip](<worldview-store.cjs.md#s-0216d6151aad7b60>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [readRecord](<worldview-store.cjs.md#s-4cc38f17ede07256>) — [electron/domains/entity/worldview-store.cjs:270](<../../../../../../../electron/domains/entity/worldview-store.cjs#L270>)
- [writeTextAtomic](<../../core/persistence/json-store.cjs.md#s-eaf1fb4e46036574>) — [electron/domains/entity/worldview-store.cjs:295](<../../../../../../../electron/domains/entity/worldview-store.cjs#L295>)
- [indexDirectory](<worldview-store.cjs.md#s-2c0c5b6362339a67>) — [electron/domains/entity/worldview-store.cjs:296](<../../../../../../../electron/domains/entity/worldview-store.cjs#L296>)
- [serializeEntityIndex](<worldview-store.cjs.md#s-c5e1330f84c72b28>) — [electron/domains/entity/worldview-store.cjs:297](<../../../../../../../electron/domains/entity/worldview-store.cjs#L297>)
- [resolveRecord](<worldview-store.cjs.md#s-6caf82c3159db764>) — [electron/domains/entity/worldview-store.cjs:300](<../../../../../../../electron/domains/entity/worldview-store.cjs#L300>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- Object.assign — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:276](<../../../../../../../electron/domains/entity/worldview-store.cjs#L276>)
- new Date().toISOString — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:277](<../../../../../../../electron/domains/entity/worldview-store.cjs#L277>)
- Date — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:277](<../../../../../../../electron/domains/entity/worldview-store.cjs#L277>)
- path.join — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:296](<../../../../../../../electron/domains/entity/worldview-store.cjs#L296>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:15](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:11](<../../../../../../../electron/backend-identity.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:24](<../../../../../../../electron/daily-price.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:6](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/domains/entity/worldview-store.test.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:17](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:18](<../../../../../../../electron/engine-packages.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:198](<../../../../../../../electron/engine-signing.test.cjs#L198>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:13](<../../../../../../../electron/excel-service.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:19](<../../../../../../../electron/financial-service.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:20](<../../../../../../../electron/image-parser.test.cjs#L20>) — file-import-only; coverage not established.
- [electron/tag-association.test.cjs:17](<../../../../../../../electron/tag-association.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:209](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L209>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:33](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L33>) — file-import-only; coverage not established.

<a id="s-0cdf96a89f7c7806"></a>

## assignWorldViewFiles

[electron/domains/entity/worldview-store.cjs:305](<../../../../../../../electron/domains/entity/worldview-store.cjs#L305>) · FunctionDeclaration · production · [WorldView persistence and IPC](<../../../../../modules/worldview.md>)

Adds unique file references after authoritative stat validation; never reads or copies source contents.

Purpose evidence: jsdoc.

Lexical owner: [electron/domains/entity/worldview-store.cjs](<worldview-store.cjs.md#s-393f835352f9ab3b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| rootPath | any | compiler-inferred | required |
| id | any | compiler-inferred | required |
| references | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [mutate](<worldview-store.cjs.md#s-35d772622039af57>) — [electron/domains/entity/worldview-store.cjs:320](<../../../../../../../electron/domains/entity/worldview-store.cjs#L320>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- idSchema.parse — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:306](<../../../../../../../electron/domains/entity/worldview-store.cjs#L306>)
- Array.isArray — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:308](<../../../../../../../electron/domains/entity/worldview-store.cjs#L308>)
- references.some — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:311](<../../../../../../../electron/domains/entity/worldview-store.cjs#L311>)
- Error — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:319](<../../../../../../../electron/domains/entity/worldview-store.cjs#L319>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:15](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:11](<../../../../../../../electron/backend-identity.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:24](<../../../../../../../electron/daily-price.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:6](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/domains/entity/worldview-store.test.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:17](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:18](<../../../../../../../electron/engine-packages.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:198](<../../../../../../../electron/engine-signing.test.cjs#L198>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:13](<../../../../../../../electron/excel-service.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:19](<../../../../../../../electron/financial-service.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:20](<../../../../../../../electron/image-parser.test.cjs#L20>) — file-import-only; coverage not established.
- [electron/tag-association.test.cjs:17](<../../../../../../../electron/tag-association.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:209](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L209>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:33](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L33>) — file-import-only; coverage not established.

<a id="s-c2419a23ef5a251d"></a>

## assignWorldViewFiles.invalidRef

[electron/domains/entity/worldview-store.cjs:312](<../../../../../../../electron/domains/entity/worldview-store.cjs#L312>) · FunctionExpression · production · [WorldView persistence and IPC](<../../../../../modules/worldview.md>)

Rejects non-text source references before filesystem access.

Purpose evidence: jsdoc.

Lexical owner: [assignWorldViewFiles](<worldview-store.cjs.md#s-0cdf96a89f7c7806>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| ref | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:15](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:11](<../../../../../../../electron/backend-identity.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:24](<../../../../../../../electron/daily-price.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:6](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/domains/entity/worldview-store.test.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:17](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:18](<../../../../../../../electron/engine-packages.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:198](<../../../../../../../electron/engine-signing.test.cjs#L198>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:13](<../../../../../../../electron/excel-service.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:19](<../../../../../../../electron/financial-service.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:20](<../../../../../../../electron/image-parser.test.cjs#L20>) — file-import-only; coverage not established.
- [electron/tag-association.test.cjs:17](<../../../../../../../electron/tag-association.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:209](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L209>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:33](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L33>) — file-import-only; coverage not established.

<a id="s-514645164f44c531"></a>

## assignWorldViewFiles.assignFiles

[electron/domains/entity/worldview-store.cjs:320](<../../../../../../../electron/domains/entity/worldview-store.cjs#L320>) · FunctionExpression · production · [WorldView persistence and IPC](<../../../../../modules/worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [assignWorldViewFiles](<worldview-store.cjs.md#s-0cdf96a89f7c7806>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [readRecord](<worldview-store.cjs.md#s-4cc38f17ede07256>) — [electron/domains/entity/worldview-store.cjs:321](<../../../../../../../electron/domains/entity/worldview-store.cjs#L321>)
- [statVaultSource](<../universe/vault-service.cjs.md#s-11f97228db17e5f8>) — [electron/domains/entity/worldview-store.cjs:332](<../../../../../../../electron/domains/entity/worldview-store.cjs#L332>)
- [writeTextAtomic](<../../core/persistence/json-store.cjs.md#s-eaf1fb4e46036574>) — [electron/domains/entity/worldview-store.cjs:361](<../../../../../../../electron/domains/entity/worldview-store.cjs#L361>)
- [indexDirectory](<worldview-store.cjs.md#s-2c0c5b6362339a67>) — [electron/domains/entity/worldview-store.cjs:362](<../../../../../../../electron/domains/entity/worldview-store.cjs#L362>)
- [serializeEntityIndex](<worldview-store.cjs.md#s-c5e1330f84c72b28>) — [electron/domains/entity/worldview-store.cjs:363](<../../../../../../../electron/domains/entity/worldview-store.cjs#L363>)
- [resolveRecord](<worldview-store.cjs.md#s-6caf82c3159db764>) — [electron/domains/entity/worldview-store.cjs:366](<../../../../../../../electron/domains/entity/worldview-store.cjs#L366>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 11.

- Map — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:322](<../../../../../../../electron/domains/entity/worldview-store.cjs#L322>)
- record.metadata.sources.map — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:323](<../../../../../../../electron/domains/entity/worldview-store.cjs#L323>)
- Set — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:331](<../../../../../../../electron/domains/entity/worldview-store.cjs#L331>)
- resolved.stats.isFile — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:333](<../../../../../../../electron/domains/entity/worldview-store.cjs#L333>)
- Error — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:334](<../../../../../../../electron/domains/entity/worldview-store.cjs#L334>)
- existing.set — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:337](<../../../../../../../electron/domains/entity/worldview-store.cjs#L337>)
- existing.get — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:338](<../../../../../../../electron/domains/entity/worldview-store.cjs#L338>)
- Error — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:348](<../../../../../../../electron/domains/entity/worldview-store.cjs#L348>)
- 3 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:15](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:11](<../../../../../../../electron/backend-identity.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:24](<../../../../../../../electron/daily-price.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:6](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/domains/entity/worldview-store.test.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:17](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:18](<../../../../../../../electron/engine-packages.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:198](<../../../../../../../electron/engine-signing.test.cjs#L198>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:13](<../../../../../../../electron/excel-service.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:19](<../../../../../../../electron/financial-service.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:20](<../../../../../../../electron/image-parser.test.cjs#L20>) — file-import-only; coverage not established.
- [electron/tag-association.test.cjs:17](<../../../../../../../electron/tag-association.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:209](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L209>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:33](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L33>) — file-import-only; coverage not established.

<a id="s-4fa7e2d2b214231a"></a>

## assignWorldViewFiles.assignFiles.sourcePair

[electron/domains/entity/worldview-store.cjs:324](<../../../../../../../electron/domains/entity/worldview-store.cjs#L324>) · FunctionExpression · production · [WorldView persistence and IPC](<../../../../../modules/worldview.md>)

Maps stored references without replacing unrelated source metadata.

Purpose evidence: jsdoc.

Lexical owner: [assignWorldViewFiles.assignFiles](<worldview-store.cjs.md#s-514645164f44c531>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| source | any | compiler-inferred | required |

Returns: {} (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:15](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:11](<../../../../../../../electron/backend-identity.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:24](<../../../../../../../electron/daily-price.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:6](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/domains/entity/worldview-store.test.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:17](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:18](<../../../../../../../electron/engine-packages.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:198](<../../../../../../../electron/engine-signing.test.cjs#L198>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:13](<../../../../../../../electron/excel-service.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:19](<../../../../../../../electron/financial-service.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:20](<../../../../../../../electron/image-parser.test.cjs#L20>) — file-import-only; coverage not established.
- [electron/tag-association.test.cjs:17](<../../../../../../../electron/tag-association.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:209](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L209>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:33](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L33>) — file-import-only; coverage not established.

<a id="s-65ce6631febd011d"></a>

## assignWorldViewFiles.assignFiles.compareSources

[electron/domains/entity/worldview-store.cjs:350](<../../../../../../../electron/domains/entity/worldview-store.cjs#L350>) · FunctionExpression · production · [WorldView persistence and IPC](<../../../../../modules/worldview.md>)

Keeps source serialization independent of picker order.

Purpose evidence: jsdoc.

Lexical owner: [assignWorldViewFiles.assignFiles](<worldview-store.cjs.md#s-514645164f44c531>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| a | any | compiler-inferred | required |
| b | any | compiler-inferred | required |

Returns: 0 &#124; 1 &#124; -1 (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:15](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:11](<../../../../../../../electron/backend-identity.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:24](<../../../../../../../electron/daily-price.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:6](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/domains/entity/worldview-store.test.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:17](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:18](<../../../../../../../electron/engine-packages.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:198](<../../../../../../../electron/engine-signing.test.cjs#L198>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:13](<../../../../../../../electron/excel-service.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:19](<../../../../../../../electron/financial-service.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:20](<../../../../../../../electron/image-parser.test.cjs#L20>) — file-import-only; coverage not established.
- [electron/tag-association.test.cjs:17](<../../../../../../../electron/tag-association.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:209](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L209>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:33](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L33>) — file-import-only; coverage not established.

<a id="s-78df375cb41ff03c"></a>

## unassignWorldViewFile

[electron/domains/entity/worldview-store.cjs:371](<../../../../../../../electron/domains/entity/worldview-store.cjs#L371>) · FunctionDeclaration · production · [WorldView persistence and IPC](<../../../../../modules/worldview.md>)

Removes only an association from the Markdown index; the original Universe source is never modified.

Purpose evidence: jsdoc.

Lexical owner: [electron/domains/entity/worldview-store.cjs](<worldview-store.cjs.md#s-393f835352f9ab3b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| rootPath | any | compiler-inferred | required |
| id | any | compiler-inferred | required |
| sourceId | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [mutate](<worldview-store.cjs.md#s-35d772622039af57>) — [electron/domains/entity/worldview-store.cjs:375](<../../../../../../../electron/domains/entity/worldview-store.cjs#L375>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- idSchema.parse — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:372](<../../../../../../../electron/domains/entity/worldview-store.cjs#L372>)
- Error — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:374](<../../../../../../../electron/domains/entity/worldview-store.cjs#L374>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:15](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:11](<../../../../../../../electron/backend-identity.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:24](<../../../../../../../electron/daily-price.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:6](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/domains/entity/worldview-store.test.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:17](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:18](<../../../../../../../electron/engine-packages.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:198](<../../../../../../../electron/engine-signing.test.cjs#L198>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:13](<../../../../../../../electron/excel-service.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:19](<../../../../../../../electron/financial-service.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:20](<../../../../../../../electron/image-parser.test.cjs#L20>) — file-import-only; coverage not established.
- [electron/tag-association.test.cjs:17](<../../../../../../../electron/tag-association.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:209](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L209>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:33](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L33>) — file-import-only; coverage not established.

<a id="s-b577484bbb93df74"></a>

## unassignWorldViewFile.unassignFile

[electron/domains/entity/worldview-store.cjs:375](<../../../../../../../electron/domains/entity/worldview-store.cjs#L375>) · FunctionExpression · production · [WorldView persistence and IPC](<../../../../../modules/worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [unassignWorldViewFile](<worldview-store.cjs.md#s-78df375cb41ff03c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [readRecord](<worldview-store.cjs.md#s-4cc38f17ede07256>) — [electron/domains/entity/worldview-store.cjs:376](<../../../../../../../electron/domains/entity/worldview-store.cjs#L376>)
- [writeTextAtomic](<../../core/persistence/json-store.cjs.md#s-eaf1fb4e46036574>) — [electron/domains/entity/worldview-store.cjs:384](<../../../../../../../electron/domains/entity/worldview-store.cjs#L384>)
- [indexDirectory](<worldview-store.cjs.md#s-2c0c5b6362339a67>) — [electron/domains/entity/worldview-store.cjs:385](<../../../../../../../electron/domains/entity/worldview-store.cjs#L385>)
- [serializeEntityIndex](<worldview-store.cjs.md#s-c5e1330f84c72b28>) — [electron/domains/entity/worldview-store.cjs:386](<../../../../../../../electron/domains/entity/worldview-store.cjs#L386>)
- [resolveRecord](<worldview-store.cjs.md#s-6caf82c3159db764>) — [electron/domains/entity/worldview-store.cjs:389](<../../../../../../../electron/domains/entity/worldview-store.cjs#L389>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- record.metadata.sources.filter — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:377](<../../../../../../../electron/domains/entity/worldview-store.cjs#L377>)
- path.join — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:385](<../../../../../../../electron/domains/entity/worldview-store.cjs#L385>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:15](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:11](<../../../../../../../electron/backend-identity.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:24](<../../../../../../../electron/daily-price.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:6](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/domains/entity/worldview-store.test.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:17](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:18](<../../../../../../../electron/engine-packages.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:198](<../../../../../../../electron/engine-signing.test.cjs#L198>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:13](<../../../../../../../electron/excel-service.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:19](<../../../../../../../electron/financial-service.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:20](<../../../../../../../electron/image-parser.test.cjs#L20>) — file-import-only; coverage not established.
- [electron/tag-association.test.cjs:17](<../../../../../../../electron/tag-association.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:209](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L209>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:33](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L33>) — file-import-only; coverage not established.

<a id="s-7b71d0693def3b7e"></a>

## unassignWorldViewFile.unassignFile.keepSource

[electron/domains/entity/worldview-store.cjs:378](<../../../../../../../electron/domains/entity/worldview-store.cjs#L378>) · FunctionExpression · production · [WorldView persistence and IPC](<../../../../../modules/worldview.md>)

Retains every association other than the exact requested source ID.

Purpose evidence: jsdoc.

Lexical owner: [unassignWorldViewFile.unassignFile](<worldview-store.cjs.md#s-b577484bbb93df74>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| source | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:15](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:11](<../../../../../../../electron/backend-identity.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:24](<../../../../../../../electron/daily-price.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:6](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/domains/entity/worldview-store.test.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:17](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:18](<../../../../../../../electron/engine-packages.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:198](<../../../../../../../electron/engine-signing.test.cjs#L198>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:13](<../../../../../../../electron/excel-service.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:19](<../../../../../../../electron/financial-service.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:20](<../../../../../../../electron/image-parser.test.cjs#L20>) — file-import-only; coverage not established.
- [electron/tag-association.test.cjs:17](<../../../../../../../electron/tag-association.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:209](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L209>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:33](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L33>) — file-import-only; coverage not established.

<a id="s-b39a3016e010fdbf"></a>

## deleteWorldViewChip

[electron/domains/entity/worldview-store.cjs:394](<../../../../../../../electron/domains/entity/worldview-store.cjs#L394>) · FunctionDeclaration · production · [WorldView persistence and IPC](<../../../../../modules/worldview.md>)

Deletes only a validated entity index following user confirmation; no source file is removed.

Purpose evidence: jsdoc.

Lexical owner: [electron/domains/entity/worldview-store.cjs](<worldview-store.cjs.md#s-393f835352f9ab3b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| rootPath | any | compiler-inferred | required |
| id | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [mutate](<worldview-store.cjs.md#s-35d772622039af57>) — [electron/domains/entity/worldview-store.cjs:396](<../../../../../../../electron/domains/entity/worldview-store.cjs#L396>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- idSchema.parse — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:395](<../../../../../../../electron/domains/entity/worldview-store.cjs#L395>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:15](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:11](<../../../../../../../electron/backend-identity.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:24](<../../../../../../../electron/daily-price.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:6](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/domains/entity/worldview-store.test.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:17](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:18](<../../../../../../../electron/engine-packages.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:198](<../../../../../../../electron/engine-signing.test.cjs#L198>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:13](<../../../../../../../electron/excel-service.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:19](<../../../../../../../electron/financial-service.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:20](<../../../../../../../electron/image-parser.test.cjs#L20>) — file-import-only; coverage not established.
- [electron/tag-association.test.cjs:17](<../../../../../../../electron/tag-association.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:209](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L209>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:33](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L33>) — file-import-only; coverage not established.

<a id="s-e702e9b9791b8b87"></a>

## deleteWorldViewChip.deleteIndex

[electron/domains/entity/worldview-store.cjs:396](<../../../../../../../electron/domains/entity/worldview-store.cjs#L396>) · FunctionExpression · production · [WorldView persistence and IPC](<../../../../../modules/worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [deleteWorldViewChip](<worldview-store.cjs.md#s-b39a3016e010fdbf>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [readRecord](<worldview-store.cjs.md#s-4cc38f17ede07256>) — [electron/domains/entity/worldview-store.cjs:397](<../../../../../../../electron/domains/entity/worldview-store.cjs#L397>)
- [indexDirectory](<worldview-store.cjs.md#s-2c0c5b6362339a67>) — [electron/domains/entity/worldview-store.cjs:399](<../../../../../../../electron/domains/entity/worldview-store.cjs#L399>)
- [rejectSymlink](<../../core/persistence/json-store.cjs.md#s-aaddc8aab5c0d073>) — [electron/domains/entity/worldview-store.cjs:400](<../../../../../../../electron/domains/entity/worldview-store.cjs#L400>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- path.join — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:399](<../../../../../../../electron/domains/entity/worldview-store.cjs#L399>)
- fs.unlink — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:401](<../../../../../../../electron/domains/entity/worldview-store.cjs#L401>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:15](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:11](<../../../../../../../electron/backend-identity.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:24](<../../../../../../../electron/daily-price.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:6](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/domains/entity/worldview-store.test.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:17](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:18](<../../../../../../../electron/engine-packages.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:198](<../../../../../../../electron/engine-signing.test.cjs#L198>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:13](<../../../../../../../electron/excel-service.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:19](<../../../../../../../electron/financial-service.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:20](<../../../../../../../electron/image-parser.test.cjs#L20>) — file-import-only; coverage not established.
- [electron/tag-association.test.cjs:17](<../../../../../../../electron/tag-association.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:209](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L209>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:33](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L33>) — file-import-only; coverage not established.

<a id="s-91a1934b6fd154c8"></a>

## readWorldViewChip

[electron/domains/entity/worldview-store.cjs:418](<../../../../../../../electron/domains/entity/worldview-store.cjs#L418>) · FunctionDeclaration · production · [WorldView persistence and IPC](<../../../../../modules/worldview.md>)

Reads one existing entity and current assignment metadata for guarded Knowledge Card operations.

Purpose evidence: jsdoc.

Lexical owner: [electron/domains/entity/worldview-store.cjs](<worldview-store.cjs.md#s-393f835352f9ab3b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| rootPath | any | compiler-inferred | required |
| id | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [resolveRecord](<worldview-store.cjs.md#s-6caf82c3159db764>) — [electron/domains/entity/worldview-store.cjs:419](<../../../../../../../electron/domains/entity/worldview-store.cjs#L419>)
- [readRecord](<worldview-store.cjs.md#s-4cc38f17ede07256>) — [electron/domains/entity/worldview-store.cjs:419](<../../../../../../../electron/domains/entity/worldview-store.cjs#L419>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:15](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:11](<../../../../../../../electron/backend-identity.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:24](<../../../../../../../electron/daily-price.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:6](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/domains/entity/worldview-store.test.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:17](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:18](<../../../../../../../electron/engine-packages.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:198](<../../../../../../../electron/engine-signing.test.cjs#L198>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:13](<../../../../../../../electron/excel-service.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:19](<../../../../../../../electron/financial-service.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:20](<../../../../../../../electron/image-parser.test.cjs#L20>) — file-import-only; coverage not established.
- [electron/tag-association.test.cjs:17](<../../../../../../../electron/tag-association.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:209](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L209>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:33](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L33>) — file-import-only; coverage not established.
