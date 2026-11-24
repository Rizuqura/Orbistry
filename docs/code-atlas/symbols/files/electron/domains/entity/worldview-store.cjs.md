# electron/domains/entity/worldview-store.cjs: symbols

[Atlas](<../../../../../README.md>) / [Entity domain](<../../../../../modules/entity-domain.md>) / [electron/domains/entity/worldview-store.cjs:1](<../../../../../../../electron/domains/entity/worldview-store.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/domains/entity/worldview-store.cjs](<worldview-store.cjs.md#s-393f835352f9ab3b>) (Module)
- [placementSchema](<worldview-store.cjs.md#s-bb71db40dfd0a072>) (SchemaBinding)
- [indexDirectory](<worldview-store.cjs.md#s-319b9208e3cd4d4d>) (FunctionDeclaration)
- [validateChip](<worldview-store.cjs.md#s-c8761a1b2b8d150a>) (FunctionDeclaration)
- [parseEntityIndex](<worldview-store.cjs.md#s-84fad9c12df63177>) (FunctionDeclaration)
- [serializeEntityIndex](<worldview-store.cjs.md#s-0758221ee28cde99>) (FunctionDeclaration)
- [readRecord](<worldview-store.cjs.md#s-c5630fa0b3895f83>) (FunctionDeclaration)
- [resolveSources](<worldview-store.cjs.md#s-c5e1330f84c72b28>) (FunctionDeclaration)
- [resolveRecord](<worldview-store.cjs.md#s-b56e96b379cad19e>) (FunctionDeclaration)
- [loadWorldView](<worldview-store.cjs.md#s-caa7e4c7a75a9eac>) (FunctionDeclaration)
- [loadWorldView.compareFiles](<worldview-store.cjs.md#s-83d719d5ceffe392>) (FunctionExpression)
- [loadWorldView.compareCreation](<worldview-store.cjs.md#s-a583aea177bcd28a>) (FunctionExpression)
- [mutate](<worldview-store.cjs.md#s-27e76430a050e3b9>) (FunctionDeclaration)
- [saveWorldViewChip](<worldview-store.cjs.md#s-d896ef794577c95a>) (FunctionDeclaration)
- [saveWorldViewChip.saveChipRecord](<worldview-store.cjs.md#s-c00565dd66b525dc>) (FunctionExpression)
- [assignWorldViewFiles](<worldview-store.cjs.md#s-73965e4f60cae9f4>) (FunctionDeclaration)
- [assignWorldViewFiles.invalidRef](<worldview-store.cjs.md#s-d20617f10dde11c0>) (FunctionExpression)
- [assignWorldViewFiles.assignFiles](<worldview-store.cjs.md#s-6fb69637a7e981f0>) (FunctionExpression)
- [assignWorldViewFiles.assignFiles.&lt;anonymous@297:35&gt;](<worldview-store.cjs.md#s-4b728c167ede280f>) (ArrowFunction)
- [assignWorldViewFiles.assignFiles.&lt;anonymous@316:29&gt;](<worldview-store.cjs.md#s-d4221a2596c157b4>) (ArrowFunction)
- [assignWorldViewFiles.assignFiles.compareSources](<worldview-store.cjs.md#s-26d2c1647879e990>) (FunctionExpression)
- [unassignWorldViewFile](<worldview-store.cjs.md#s-70e7f08c811c0303>) (FunctionDeclaration)
- [unassignWorldViewFile.unassignFile](<worldview-store.cjs.md#s-207b02cadaf17fb3>) (FunctionExpression)
- [unassignWorldViewFile.unassignFile.&lt;anonymous@351:62&gt;](<worldview-store.cjs.md#s-58946a1d1bf33726>) (ArrowFunction)
- [deleteWorldViewChip](<worldview-store.cjs.md#s-d7d7a538d1ec4149>) (FunctionDeclaration)
- [deleteWorldViewChip.deleteIndex](<worldview-store.cjs.md#s-b60cf8fc21009244>) (FunctionExpression)
- [entityFromRecord](<worldview-store.cjs.md#s-36add00d304ae43d>) (FunctionDeclaration)
- [readEntitySnapshot](<worldview-store.cjs.md#s-0bc55610e941689d>) (FunctionDeclaration)
- [patchEntityMetadata](<worldview-store.cjs.md#s-3bdb886213b684fe>) (FunctionDeclaration)
- [patchEntityMetadata.writeMetadataPatch](<worldview-store.cjs.md#s-7893d386a67f06d9>) (FunctionExpression)
- [readWorldViewChip](<worldview-store.cjs.md#s-800a4cbef09b01fa>) (FunctionDeclaration)

<a id="s-393f835352f9ab3b"></a>

## electron/domains/entity/worldview-store.cjs

[electron/domains/entity/worldview-store.cjs:1](<../../../../../../../electron/domains/entity/worldview-store.cjs#L1>) · Module · production · [Entity domain](<../../../../../modules/entity-domain.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 9.

- require — module-loader; [electron/domains/entity/worldview-store.cjs:1](<../../../../../../../electron/domains/entity/worldview-store.cjs#L1>)
- require — module-loader; [electron/domains/entity/worldview-store.cjs:2](<../../../../../../../electron/domains/entity/worldview-store.cjs#L2>)
- require — module-loader; [electron/domains/entity/worldview-store.cjs:3](<../../../../../../../electron/domains/entity/worldview-store.cjs#L3>)
- require — module-loader; [electron/domains/entity/worldview-store.cjs:4](<../../../../../../../electron/domains/entity/worldview-store.cjs#L4>)
- require — module-loader; [electron/domains/entity/worldview-store.cjs:9](<../../../../../../../electron/domains/entity/worldview-store.cjs#L9>)
- require — module-loader; [electron/domains/entity/worldview-store.cjs:10](<../../../../../../../electron/domains/entity/worldview-store.cjs#L10>)
- require — module-loader; [electron/domains/entity/worldview-store.cjs:15](<../../../../../../../electron/domains/entity/worldview-store.cjs#L15>)
- require — module-loader; [electron/domains/entity/worldview-store.cjs:16](<../../../../../../../electron/domains/entity/worldview-store.cjs#L16>)
- 1 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:15](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:11](<../../../../../../../electron/backend-identity.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:24](<../../../../../../../electron/daily-price.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:6](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/domains/entity/tests/entity-repository.test.cjs:7](<../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/domains/entity/worldview-store.test.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:17](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:12](<../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L12>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:18](<../../../../../../../electron/engine-packages.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:198](<../../../../../../../electron/engine-signing.test.cjs#L198>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:13](<../../../../../../../electron/excel-service.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:19](<../../../../../../../electron/financial-service.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:20](<../../../../../../../electron/image-parser.test.cjs#L20>) — file-import-only; coverage not established.
- [electron/tag-association.test.cjs:17](<../../../../../../../electron/tag-association.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:209](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L209>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:33](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L33>) — file-import-only; coverage not established.

<a id="s-bb71db40dfd0a072"></a>

## placementSchema

[electron/domains/entity/worldview-store.cjs:18](<../../../../../../../electron/domains/entity/worldview-store.cjs#L18>) · SchemaBinding · production · [Entity domain](<../../../../../modules/entity-domain.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/domains/entity/worldview-store.cjs](<worldview-store.cjs.md#s-393f835352f9ab3b>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 9.

- z.object — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:18](<../../../../../../../electron/domains/entity/worldview-store.cjs#L18>)
- z.number().finite().min(-1e9).max — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.cjs#L19>)
- z.number().finite().min — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.cjs#L19>)
- z.number().finite — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.cjs#L19>)
- z.number — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.cjs#L19>)
- z.number().finite().min(-1e9).max — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:20](<../../../../../../../electron/domains/entity/worldview-store.cjs#L20>)
- z.number().finite().min — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:20](<../../../../../../../electron/domains/entity/worldview-store.cjs#L20>)
- z.number().finite — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:20](<../../../../../../../electron/domains/entity/worldview-store.cjs#L20>)
- 1 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:15](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:11](<../../../../../../../electron/backend-identity.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:24](<../../../../../../../electron/daily-price.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:6](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/domains/entity/tests/entity-repository.test.cjs:7](<../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/domains/entity/worldview-store.test.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:17](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:12](<../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L12>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:18](<../../../../../../../electron/engine-packages.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:198](<../../../../../../../electron/engine-signing.test.cjs#L198>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:13](<../../../../../../../electron/excel-service.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:19](<../../../../../../../electron/financial-service.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:20](<../../../../../../../electron/image-parser.test.cjs#L20>) — file-import-only; coverage not established.
- [electron/tag-association.test.cjs:17](<../../../../../../../electron/tag-association.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:209](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L209>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:33](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L33>) — file-import-only; coverage not established.

<a id="s-319b9208e3cd4d4d"></a>

## indexDirectory

[electron/domains/entity/worldview-store.cjs:35](<../../../../../../../electron/domains/entity/worldview-store.cjs#L35>) · FunctionDeclaration · production · [Entity domain](<../../../../../modules/entity-domain.md>)

Returns a protected metadata directory inside the existing Vault metadata namespace, without creating it.

Purpose evidence: jsdoc.

Lexical owner: [electron/domains/entity/worldview-store.cjs](<worldview-store.cjs.md#s-393f835352f9ab3b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| rootPath | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [rejectSymlink](<../../core/persistence/json-store.cjs.md#s-aaddc8aab5c0d073>) — [electron/domains/entity/worldview-store.cjs:40](<../../../../../../../electron/domains/entity/worldview-store.cjs#L40>)

**Called by (statically resolved):**

- [readRecord](<worldview-store.cjs.md#s-c5630fa0b3895f83>) — [electron/domains/entity/worldview-store.cjs:124](<../../../../../../../electron/domains/entity/worldview-store.cjs#L124>)
- [loadWorldView](<worldview-store.cjs.md#s-caa7e4c7a75a9eac>) — [electron/domains/entity/worldview-store.cjs:186](<../../../../../../../electron/domains/entity/worldview-store.cjs#L186>)
- [saveWorldViewChip.saveChipRecord](<worldview-store.cjs.md#s-c00565dd66b525dc>) — [electron/domains/entity/worldview-store.cjs:268](<../../../../../../../electron/domains/entity/worldview-store.cjs#L268>)
- [assignWorldViewFiles.assignFiles](<worldview-store.cjs.md#s-6fb69637a7e981f0>) — [electron/domains/entity/worldview-store.cjs:334](<../../../../../../../electron/domains/entity/worldview-store.cjs#L334>)
- [unassignWorldViewFile.unassignFile](<worldview-store.cjs.md#s-207b02cadaf17fb3>) — [electron/domains/entity/worldview-store.cjs:356](<../../../../../../../electron/domains/entity/worldview-store.cjs#L356>)
- [deleteWorldViewChip.deleteIndex](<worldview-store.cjs.md#s-b60cf8fc21009244>) — [electron/domains/entity/worldview-store.cjs:370](<../../../../../../../electron/domains/entity/worldview-store.cjs#L370>)
- [patchEntityMetadata.writeMetadataPatch](<worldview-store.cjs.md#s-7893d386a67f06d9>) — [electron/domains/entity/worldview-store.cjs:407](<../../../../../../../electron/domains/entity/worldview-store.cjs#L407>)

Unresolved / external call sites: 2.

- fs.realpath — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:36](<../../../../../../../electron/domains/entity/worldview-store.cjs#L36>)
- path.join — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:39](<../../../../../../../electron/domains/entity/worldview-store.cjs#L39>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:15](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:11](<../../../../../../../electron/backend-identity.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:24](<../../../../../../../electron/daily-price.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:6](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/domains/entity/tests/entity-repository.test.cjs:7](<../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/domains/entity/worldview-store.test.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:17](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:12](<../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L12>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:18](<../../../../../../../electron/engine-packages.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:198](<../../../../../../../electron/engine-signing.test.cjs#L198>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:13](<../../../../../../../electron/excel-service.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:19](<../../../../../../../electron/financial-service.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:20](<../../../../../../../electron/image-parser.test.cjs#L20>) — file-import-only; coverage not established.
- [electron/tag-association.test.cjs:17](<../../../../../../../electron/tag-association.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:209](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L209>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:33](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L33>) — file-import-only; coverage not established.

<a id="s-c8761a1b2b8d150a"></a>

## validateChip

[electron/domains/entity/worldview-store.cjs:46](<../../../../../../../electron/domains/entity/worldview-store.cjs#L46>) · FunctionDeclaration · production · [Entity domain](<../../../../../modules/entity-domain.md>)

Validates renderer-owned fields while excluding transient source statuses and server-owned associations.

Purpose evidence: jsdoc.

Lexical owner: [electron/domains/entity/worldview-store.cjs](<worldview-store.cjs.md#s-393f835352f9ab3b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| chip | any | compiler-inferred | required |

Returns: { position: any; name: string; tags: string&#91;&#93;; color: string; icon?: string; iconImage?: string; category?: string; knowledgeMenus?: import("C:\\\\Users\\\\HYPE AMD\\\\Desktop\\\\Orbistry\\\\electron\\\\domains\\\\entity\\\\model\\\\Entity").KnowledgeMenu&#91;&#93;; id: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [Entity.constructor](<model/Entity.cjs.md#s-156ad8f597ca330e>) — [electron/domains/entity/worldview-store.cjs:48](<../../../../../../../electron/domains/entity/worldview-store.cjs#L48>)
- [Entity.getSnapshot](<model/Entity.cjs.md#s-8a8fd069f9bac4e4>) — [electron/domains/entity/worldview-store.cjs:51](<../../../../../../../electron/domains/entity/worldview-store.cjs#L51>)

**Called by (statically resolved):**

- [parseEntityIndex](<worldview-store.cjs.md#s-84fad9c12df63177>) — [electron/domains/entity/worldview-store.cjs:84](<../../../../../../../electron/domains/entity/worldview-store.cjs#L84>)
- [saveWorldViewChip](<worldview-store.cjs.md#s-d896ef794577c95a>) — [electron/domains/entity/worldview-store.cjs:240](<../../../../../../../electron/domains/entity/worldview-store.cjs#L240>)

Unresolved / external call sites: 2.

- placementSchema.parse — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:52](<../../../../../../../electron/domains/entity/worldview-store.cjs#L52>)
- Error — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:56](<../../../../../../../electron/domains/entity/worldview-store.cjs#L56>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:15](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:11](<../../../../../../../electron/backend-identity.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:24](<../../../../../../../electron/daily-price.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:6](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/domains/entity/tests/entity-repository.test.cjs:7](<../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/domains/entity/worldview-store.test.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:17](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:12](<../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L12>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:18](<../../../../../../../electron/engine-packages.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:198](<../../../../../../../electron/engine-signing.test.cjs#L198>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:13](<../../../../../../../electron/excel-service.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:19](<../../../../../../../electron/financial-service.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:20](<../../../../../../../electron/image-parser.test.cjs#L20>) — file-import-only; coverage not established.
- [electron/tag-association.test.cjs:17](<../../../../../../../electron/tag-association.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:209](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L209>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:33](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L33>) — file-import-only; coverage not established.

<a id="s-84fad9c12df63177"></a>

## parseEntityIndex

[electron/domains/entity/worldview-store.cjs:62](<../../../../../../../electron/domains/entity/worldview-store.cjs#L62>) · FunctionDeclaration · production · [Entity domain](<../../../../../modules/entity-domain.md>)

Parses only the entity metadata document, preserving unknown frontmatter and the complete Markdown body.

Purpose evidence: jsdoc.

Lexical owner: [electron/domains/entity/worldview-store.cjs](<worldview-store.cjs.md#s-393f835352f9ab3b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| text | any | compiler-inferred | required |
| expectedId | any | compiler-inferred | required |

Returns: { metadata: any; body: any; original: any; chip: { createdAt: any; position: any; name: string; tags: string&#91;&#93;; color: string; icon?: string; iconImage?: string; category?: string; knowledgeMenus?: import("C:\\\\Users\\\\HYPE AMD\\\\Desktop\\\\Orbistry\\\\electron\\\\domains\\\\entity\\\\model\\\\Entity").KnowledgeMenu&#91;&#93;; id: any; }; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [validateChip](<worldview-store.cjs.md#s-c8761a1b2b8d150a>) — [electron/domains/entity/worldview-store.cjs:84](<../../../../../../../electron/domains/entity/worldview-store.cjs#L84>)

**Called by (statically resolved):**

- [readRecord](<worldview-store.cjs.md#s-c5630fa0b3895f83>) — [electron/domains/entity/worldview-store.cjs:132](<../../../../../../../electron/domains/entity/worldview-store.cjs#L132>)

Unresolved / external call sites: 11.

- /^---\\r?\\n(&#91;\\s\\S&#93;*?)\\r?\\n---(?:\\r?\\n&#124;$)(&#91;\\s\\S&#93;*)$/.exec — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:63](<../../../../../../../electron/domains/entity/worldview-store.cjs#L63>)
- Error — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:65](<../../../../../../../electron/domains/entity/worldview-store.cjs#L65>)
- yaml.load — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:66](<../../../../../../../electron/domains/entity/worldview-store.cjs#L66>)
- Error — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:72](<../../../../../../../electron/domains/entity/worldview-store.cjs#L72>)
- Array.isArray — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:73](<../../../../../../../electron/domains/entity/worldview-store.cjs#L73>)
- Error — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:74](<../../../../../../../electron/domains/entity/worldview-store.cjs#L74>)
- Set — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:75](<../../../../../../../electron/domains/entity/worldview-store.cjs#L75>)
- sourceReference.safeParse — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:77](<../../../../../../../electron/domains/entity/worldview-store.cjs#L77>)
- 3 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:15](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:11](<../../../../../../../electron/backend-identity.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:24](<../../../../../../../electron/daily-price.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:6](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/domains/entity/tests/entity-repository.test.cjs:7](<../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/domains/entity/worldview-store.test.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:17](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:12](<../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L12>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:18](<../../../../../../../electron/engine-packages.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:198](<../../../../../../../electron/engine-signing.test.cjs#L198>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:13](<../../../../../../../electron/excel-service.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:19](<../../../../../../../electron/financial-service.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:20](<../../../../../../../electron/image-parser.test.cjs#L20>) — file-import-only; coverage not established.
- [electron/tag-association.test.cjs:17](<../../../../../../../electron/tag-association.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:209](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L209>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:33](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L33>) — file-import-only; coverage not established.

<a id="s-0758221ee28cde99"></a>

## serializeEntityIndex

[electron/domains/entity/worldview-store.cjs:112](<../../../../../../../electron/domains/entity/worldview-store.cjs#L112>) · FunctionDeclaration · production · [Entity domain](<../../../../../modules/entity-domain.md>)

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

- [saveWorldViewChip.saveChipRecord](<worldview-store.cjs.md#s-c00565dd66b525dc>) — [electron/domains/entity/worldview-store.cjs:269](<../../../../../../../electron/domains/entity/worldview-store.cjs#L269>)
- [assignWorldViewFiles.assignFiles](<worldview-store.cjs.md#s-6fb69637a7e981f0>) — [electron/domains/entity/worldview-store.cjs:335](<../../../../../../../electron/domains/entity/worldview-store.cjs#L335>)
- [unassignWorldViewFile.unassignFile](<worldview-store.cjs.md#s-207b02cadaf17fb3>) — [electron/domains/entity/worldview-store.cjs:357](<../../../../../../../electron/domains/entity/worldview-store.cjs#L357>)
- [patchEntityMetadata.writeMetadataPatch](<worldview-store.cjs.md#s-7893d386a67f06d9>) — [electron/domains/entity/worldview-store.cjs:408](<../../../../../../../electron/domains/entity/worldview-store.cjs#L408>)

Unresolved / external call sites: 3.

- yaml.dump — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:113](<../../../../../../../electron/domains/entity/worldview-store.cjs#L113>)
- Buffer.byteLength — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:114](<../../../../../../../electron/domains/entity/worldview-store.cjs#L114>)
- Error — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:115](<../../../../../../../electron/domains/entity/worldview-store.cjs#L115>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:15](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:11](<../../../../../../../electron/backend-identity.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:24](<../../../../../../../electron/daily-price.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:6](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/domains/entity/tests/entity-repository.test.cjs:7](<../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/domains/entity/worldview-store.test.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:17](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:12](<../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L12>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:18](<../../../../../../../electron/engine-packages.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:198](<../../../../../../../electron/engine-signing.test.cjs#L198>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:13](<../../../../../../../electron/excel-service.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:19](<../../../../../../../electron/financial-service.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:20](<../../../../../../../electron/image-parser.test.cjs#L20>) — file-import-only; coverage not established.
- [electron/tag-association.test.cjs:17](<../../../../../../../electron/tag-association.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:209](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L209>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:33](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L33>) — file-import-only; coverage not established.

<a id="s-c5630fa0b3895f83"></a>

## readRecord

[electron/domains/entity/worldview-store.cjs:122](<../../../../../../../electron/domains/entity/worldview-store.cjs#L122>) · FunctionDeclaration · production · [Entity domain](<../../../../../modules/entity-domain.md>)

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

- [indexDirectory](<worldview-store.cjs.md#s-319b9208e3cd4d4d>) — [electron/domains/entity/worldview-store.cjs:124](<../../../../../../../electron/domains/entity/worldview-store.cjs#L124>)
- [rejectSymlink](<../../core/persistence/json-store.cjs.md#s-aaddc8aab5c0d073>) — [electron/domains/entity/worldview-store.cjs:126](<../../../../../../../electron/domains/entity/worldview-store.cjs#L126>)
- [parseEntityIndex](<worldview-store.cjs.md#s-84fad9c12df63177>) — [electron/domains/entity/worldview-store.cjs:132](<../../../../../../../electron/domains/entity/worldview-store.cjs#L132>)

**Called by (statically resolved):**

- [loadWorldView](<worldview-store.cjs.md#s-caa7e4c7a75a9eac>) — [electron/domains/entity/worldview-store.cjs:209](<../../../../../../../electron/domains/entity/worldview-store.cjs#L209>)
- [saveWorldViewChip.saveChipRecord](<worldview-store.cjs.md#s-c00565dd66b525dc>) — [electron/domains/entity/worldview-store.cjs:242](<../../../../../../../electron/domains/entity/worldview-store.cjs#L242>)
- [assignWorldViewFiles.assignFiles](<worldview-store.cjs.md#s-6fb69637a7e981f0>) — [electron/domains/entity/worldview-store.cjs:293](<../../../../../../../electron/domains/entity/worldview-store.cjs#L293>)
- [unassignWorldViewFile.unassignFile](<worldview-store.cjs.md#s-207b02cadaf17fb3>) — [electron/domains/entity/worldview-store.cjs:348](<../../../../../../../electron/domains/entity/worldview-store.cjs#L348>)
- [deleteWorldViewChip.deleteIndex](<worldview-store.cjs.md#s-b60cf8fc21009244>) — [electron/domains/entity/worldview-store.cjs:368](<../../../../../../../electron/domains/entity/worldview-store.cjs#L368>)
- [readEntitySnapshot](<worldview-store.cjs.md#s-0bc55610e941689d>) — [electron/domains/entity/worldview-store.cjs:388](<../../../../../../../electron/domains/entity/worldview-store.cjs#L388>)
- [patchEntityMetadata.writeMetadataPatch](<worldview-store.cjs.md#s-7893d386a67f06d9>) — [electron/domains/entity/worldview-store.cjs:397](<../../../../../../../electron/domains/entity/worldview-store.cjs#L397>)
- [readWorldViewChip](<worldview-store.cjs.md#s-800a4cbef09b01fa>) — [electron/domains/entity/worldview-store.cjs:432](<../../../../../../../electron/domains/entity/worldview-store.cjs#L432>)

Unresolved / external call sites: 6.

- idSchema.parse — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:123](<../../../../../../../electron/domains/entity/worldview-store.cjs#L123>)
- path.join — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:124](<../../../../../../../electron/domains/entity/worldview-store.cjs#L124>)
- fs.stat — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:127](<../../../../../../../electron/domains/entity/worldview-store.cjs#L127>)
- stat.isFile — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:128](<../../../../../../../electron/domains/entity/worldview-store.cjs#L128>)
- Error — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:129](<../../../../../../../electron/domains/entity/worldview-store.cjs#L129>)
- fs.readFile — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:132](<../../../../../../../electron/domains/entity/worldview-store.cjs#L132>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:15](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:11](<../../../../../../../electron/backend-identity.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:24](<../../../../../../../electron/daily-price.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:6](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/domains/entity/tests/entity-repository.test.cjs:7](<../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/domains/entity/worldview-store.test.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:17](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:12](<../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L12>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:18](<../../../../../../../electron/engine-packages.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:198](<../../../../../../../electron/engine-signing.test.cjs#L198>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:13](<../../../../../../../electron/excel-service.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:19](<../../../../../../../electron/financial-service.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:20](<../../../../../../../electron/image-parser.test.cjs#L20>) — file-import-only; coverage not established.
- [electron/tag-association.test.cjs:17](<../../../../../../../electron/tag-association.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:209](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L209>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:33](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L33>) — file-import-only; coverage not established.

<a id="s-c5e1330f84c72b28"></a>

## resolveSources

[electron/domains/entity/worldview-store.cjs:140](<../../../../../../../electron/domains/entity/worldview-store.cjs#L140>) · FunctionDeclaration · production · [Entity domain](<../../../../../modules/entity-domain.md>)

Resolves recorded references using stat only; missing sources remain associated with an explicit status.

Purpose evidence: jsdoc.

Lexical owner: [electron/domains/entity/worldview-store.cjs](<worldview-store.cjs.md#s-393f835352f9ab3b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| rootPath | any | compiler-inferred | required |
| recorded | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [statVaultSource](<../universe/vault-service.cjs.md#s-11f97228db17e5f8>) — [electron/domains/entity/worldview-store.cjs:154](<../../../../../../../electron/domains/entity/worldview-store.cjs#L154>)

**Called by (statically resolved):**

- [resolveRecord](<worldview-store.cjs.md#s-b56e96b379cad19e>) — [electron/domains/entity/worldview-store.cjs:179](<../../../../../../../electron/domains/entity/worldview-store.cjs#L179>)

Unresolved / external call sites: 3.

- resolved.stats.isFile — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:155](<../../../../../../../electron/domains/entity/worldview-store.cjs#L155>)
- Error — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:156](<../../../../../../../electron/domains/entity/worldview-store.cjs#L156>)
- sources.push — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:170](<../../../../../../../electron/domains/entity/worldview-store.cjs#L170>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:15](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:11](<../../../../../../../electron/backend-identity.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:24](<../../../../../../../electron/daily-price.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:6](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/domains/entity/tests/entity-repository.test.cjs:7](<../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/domains/entity/worldview-store.test.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:17](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:12](<../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L12>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:18](<../../../../../../../electron/engine-packages.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:198](<../../../../../../../electron/engine-signing.test.cjs#L198>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:13](<../../../../../../../electron/excel-service.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:19](<../../../../../../../electron/financial-service.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:20](<../../../../../../../electron/image-parser.test.cjs#L20>) — file-import-only; coverage not established.
- [electron/tag-association.test.cjs:17](<../../../../../../../electron/tag-association.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:209](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L209>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:33](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L33>) — file-import-only; coverage not established.

<a id="s-b56e96b379cad19e"></a>

## resolveRecord

[electron/domains/entity/worldview-store.cjs:176](<../../../../../../../electron/domains/entity/worldview-store.cjs#L176>) · FunctionDeclaration · production · [Entity domain](<../../../../../modules/entity-domain.md>)

Returns a renderable chip reconstructed from its Markdown record and current authoritative byte metadata.

Purpose evidence: jsdoc.

Lexical owner: [electron/domains/entity/worldview-store.cjs](<worldview-store.cjs.md#s-393f835352f9ab3b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| rootPath | any | compiler-inferred | required |
| record | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [resolveSources](<worldview-store.cjs.md#s-c5e1330f84c72b28>) — [electron/domains/entity/worldview-store.cjs:179](<../../../../../../../electron/domains/entity/worldview-store.cjs#L179>)

**Called by (statically resolved):**

- [loadWorldView](<worldview-store.cjs.md#s-caa7e4c7a75a9eac>) — [electron/domains/entity/worldview-store.cjs:211](<../../../../../../../electron/domains/entity/worldview-store.cjs#L211>)
- [saveWorldViewChip.saveChipRecord](<worldview-store.cjs.md#s-c00565dd66b525dc>) — [electron/domains/entity/worldview-store.cjs:272](<../../../../../../../electron/domains/entity/worldview-store.cjs#L272>)
- [assignWorldViewFiles.assignFiles](<worldview-store.cjs.md#s-6fb69637a7e981f0>) — [electron/domains/entity/worldview-store.cjs:338](<../../../../../../../electron/domains/entity/worldview-store.cjs#L338>)
- [unassignWorldViewFile.unassignFile](<worldview-store.cjs.md#s-207b02cadaf17fb3>) — [electron/domains/entity/worldview-store.cjs:360](<../../../../../../../electron/domains/entity/worldview-store.cjs#L360>)
- [readWorldViewChip](<worldview-store.cjs.md#s-800a4cbef09b01fa>) — [electron/domains/entity/worldview-store.cjs:432](<../../../../../../../electron/domains/entity/worldview-store.cjs#L432>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:15](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:11](<../../../../../../../electron/backend-identity.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:24](<../../../../../../../electron/daily-price.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:6](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/domains/entity/tests/entity-repository.test.cjs:7](<../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/domains/entity/worldview-store.test.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:17](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:12](<../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L12>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:18](<../../../../../../../electron/engine-packages.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:198](<../../../../../../../electron/engine-signing.test.cjs#L198>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:13](<../../../../../../../electron/excel-service.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:19](<../../../../../../../electron/financial-service.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:20](<../../../../../../../electron/image-parser.test.cjs#L20>) — file-import-only; coverage not established.
- [electron/tag-association.test.cjs:17](<../../../../../../../electron/tag-association.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:209](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L209>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:33](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L33>) — file-import-only; coverage not established.

<a id="s-caa7e4c7a75a9eac"></a>

## loadWorldView

[electron/domains/entity/worldview-store.cjs:185](<../../../../../../../electron/domains/entity/worldview-store.cjs#L185>) · FunctionDeclaration · production · [Entity domain](<../../../../../modules/entity-domain.md>)

Loads persisted entity records independently. metadataOnly omits source stat resolution for tag search; no source contents are read.

Purpose evidence: jsdoc.

Lexical owner: [electron/domains/entity/worldview-store.cjs](<worldview-store.cjs.md#s-393f835352f9ab3b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| rootPath | any | compiler-inferred | required |
| { metadataOnly = false } | { metadataOnly?: boolean; } | compiler-inferred | optional, default present |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [indexDirectory](<worldview-store.cjs.md#s-319b9208e3cd4d4d>) — [electron/domains/entity/worldview-store.cjs:186](<../../../../../../../electron/domains/entity/worldview-store.cjs#L186>)
- [readRecord](<worldview-store.cjs.md#s-c5630fa0b3895f83>) — [electron/domains/entity/worldview-store.cjs:209](<../../../../../../../electron/domains/entity/worldview-store.cjs#L209>)
- [resolveRecord](<worldview-store.cjs.md#s-b56e96b379cad19e>) — [electron/domains/entity/worldview-store.cjs:211](<../../../../../../../electron/domains/entity/worldview-store.cjs#L211>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 10.

- fs.readdir — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:189](<../../../../../../../electron/domains/entity/worldview-store.cjs#L189>)
- entries.sort — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:197](<../../../../../../../electron/domains/entity/worldview-store.cjs#L197>)
- entry.name.endsWith — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:205](<../../../../../../../electron/domains/entity/worldview-store.cjs#L205>)
- entry.isFile — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:207](<../../../../../../../electron/domains/entity/worldview-store.cjs#L207>)
- entry.isSymbolicLink — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:207](<../../../../../../../electron/domains/entity/worldview-store.cjs#L207>)
- Error — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:208](<../../../../../../../electron/domains/entity/worldview-store.cjs#L208>)
- entry.name.slice — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:209](<../../../../../../../electron/domains/entity/worldview-store.cjs#L209>)
- chips.push — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:210](<../../../../../../../electron/domains/entity/worldview-store.cjs#L210>)
- 2 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:15](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:11](<../../../../../../../electron/backend-identity.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:24](<../../../../../../../electron/daily-price.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:6](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/domains/entity/tests/entity-repository.test.cjs:7](<../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/domains/entity/worldview-store.test.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:17](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:12](<../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L12>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:18](<../../../../../../../electron/engine-packages.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:198](<../../../../../../../electron/engine-signing.test.cjs#L198>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:13](<../../../../../../../electron/excel-service.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:19](<../../../../../../../electron/financial-service.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:20](<../../../../../../../electron/image-parser.test.cjs#L20>) — file-import-only; coverage not established.
- [electron/tag-association.test.cjs:17](<../../../../../../../electron/tag-association.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:209](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L209>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:33](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L33>) — file-import-only; coverage not established.

<a id="s-83d719d5ceffe392"></a>

## loadWorldView.compareFiles

[electron/domains/entity/worldview-store.cjs:198](<../../../../../../../electron/domains/entity/worldview-store.cjs#L198>) · FunctionExpression · production · [Entity domain](<../../../../../modules/entity-domain.md>)

Sorts metadata filenames for deterministic restoration.

Purpose evidence: jsdoc.

Lexical owner: [loadWorldView](<worldview-store.cjs.md#s-caa7e4c7a75a9eac>).

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

- a.name.localeCompare — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:202](<../../../../../../../electron/domains/entity/worldview-store.cjs#L202>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:15](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:11](<../../../../../../../electron/backend-identity.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:24](<../../../../../../../electron/daily-price.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:6](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/domains/entity/tests/entity-repository.test.cjs:7](<../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/domains/entity/worldview-store.test.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:17](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:12](<../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L12>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:18](<../../../../../../../electron/engine-packages.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:198](<../../../../../../../electron/engine-signing.test.cjs#L198>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:13](<../../../../../../../electron/excel-service.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:19](<../../../../../../../electron/financial-service.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:20](<../../../../../../../electron/image-parser.test.cjs#L20>) — file-import-only; coverage not established.
- [electron/tag-association.test.cjs:17](<../../../../../../../electron/tag-association.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:209](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L209>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:33](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L33>) — file-import-only; coverage not established.

<a id="s-a583aea177bcd28a"></a>

## loadWorldView.compareCreation

[electron/domains/entity/worldview-store.cjs:218](<../../../../../../../electron/domains/entity/worldview-store.cjs#L218>) · FunctionExpression · production · [Entity domain](<../../../../../modules/entity-domain.md>)

Restores creation order independently of UUID filenames.

Purpose evidence: jsdoc.

Lexical owner: [loadWorldView](<worldview-store.cjs.md#s-caa7e4c7a75a9eac>).

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

- (a.createdAt ?? "").localeCompare — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:223](<../../../../../../../electron/domains/entity/worldview-store.cjs#L223>)
- a.id.localeCompare — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:224](<../../../../../../../electron/domains/entity/worldview-store.cjs#L224>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:15](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:11](<../../../../../../../electron/backend-identity.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:24](<../../../../../../../electron/daily-price.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:6](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/domains/entity/tests/entity-repository.test.cjs:7](<../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/domains/entity/worldview-store.test.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:17](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:12](<../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L12>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:18](<../../../../../../../electron/engine-packages.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:198](<../../../../../../../electron/engine-signing.test.cjs#L198>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:13](<../../../../../../../electron/excel-service.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:19](<../../../../../../../electron/financial-service.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:20](<../../../../../../../electron/image-parser.test.cjs#L20>) — file-import-only; coverage not established.
- [electron/tag-association.test.cjs:17](<../../../../../../../electron/tag-association.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:209](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L209>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:33](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L33>) — file-import-only; coverage not established.

<a id="s-27e76430a050e3b9"></a>

## mutate

[electron/domains/entity/worldview-store.cjs:232](<../../../../../../../electron/domains/entity/worldview-store.cjs#L232>) · FunctionDeclaration · production · [Entity domain](<../../../../../modules/entity-domain.md>)

Serializes mutations per real Universe root; failed operations do not poison subsequent writes.

Purpose evidence: jsdoc.

Lexical owner: [electron/domains/entity/worldview-store.cjs](<worldview-store.cjs.md#s-393f835352f9ab3b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| rootPath | any | compiler-inferred | required |
| operation | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [serialQueue](<../../core/persistence/json-store.cjs.md#s-a8a605453bc9a09a>) — [electron/domains/entity/worldview-store.cjs:234](<../../../../../../../electron/domains/entity/worldview-store.cjs#L234>)

**Called by (statically resolved):**

- [saveWorldViewChip](<worldview-store.cjs.md#s-d896ef794577c95a>) — [electron/domains/entity/worldview-store.cjs:241](<../../../../../../../electron/domains/entity/worldview-store.cjs#L241>)
- [assignWorldViewFiles](<worldview-store.cjs.md#s-73965e4f60cae9f4>) — [electron/domains/entity/worldview-store.cjs:292](<../../../../../../../electron/domains/entity/worldview-store.cjs#L292>)
- [unassignWorldViewFile](<worldview-store.cjs.md#s-70e7f08c811c0303>) — [electron/domains/entity/worldview-store.cjs:347](<../../../../../../../electron/domains/entity/worldview-store.cjs#L347>)
- [deleteWorldViewChip](<worldview-store.cjs.md#s-d7d7a538d1ec4149>) — [electron/domains/entity/worldview-store.cjs:367](<../../../../../../../electron/domains/entity/worldview-store.cjs#L367>)
- [patchEntityMetadata](<worldview-store.cjs.md#s-3bdb886213b684fe>) — [electron/domains/entity/worldview-store.cjs:394](<../../../../../../../electron/domains/entity/worldview-store.cjs#L394>)

Unresolved / external call sites: 5.

- fs.realpath — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:233](<../../../../../../../electron/domains/entity/worldview-store.cjs#L233>)
- queues.has — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:234](<../../../../../../../electron/domains/entity/worldview-store.cjs#L234>)
- queues.set — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:234](<../../../../../../../electron/domains/entity/worldview-store.cjs#L234>)
- queues.get(root) — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:235](<../../../../../../../electron/domains/entity/worldview-store.cjs#L235>)
- queues.get — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:235](<../../../../../../../electron/domains/entity/worldview-store.cjs#L235>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:15](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:11](<../../../../../../../electron/backend-identity.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:24](<../../../../../../../electron/daily-price.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:6](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/domains/entity/tests/entity-repository.test.cjs:7](<../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/domains/entity/worldview-store.test.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:17](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:12](<../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L12>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:18](<../../../../../../../electron/engine-packages.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:198](<../../../../../../../electron/engine-signing.test.cjs#L198>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:13](<../../../../../../../electron/excel-service.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:19](<../../../../../../../electron/financial-service.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:20](<../../../../../../../electron/image-parser.test.cjs#L20>) — file-import-only; coverage not established.
- [electron/tag-association.test.cjs:17](<../../../../../../../electron/tag-association.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:209](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L209>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:33](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L33>) — file-import-only; coverage not established.

<a id="s-d896ef794577c95a"></a>

## saveWorldViewChip

[electron/domains/entity/worldview-store.cjs:239](<../../../../../../../electron/domains/entity/worldview-store.cjs#L239>) · FunctionDeclaration · production · [Entity domain](<../../../../../modules/entity-domain.md>)

Saves chip appearance and menu configuration while preserving source associations, unknown YAML, and body text.

Purpose evidence: jsdoc.

Lexical owner: [electron/domains/entity/worldview-store.cjs](<worldview-store.cjs.md#s-393f835352f9ab3b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| rootPath | any | compiler-inferred | required |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [validateChip](<worldview-store.cjs.md#s-c8761a1b2b8d150a>) — [electron/domains/entity/worldview-store.cjs:240](<../../../../../../../electron/domains/entity/worldview-store.cjs#L240>)
- [mutate](<worldview-store.cjs.md#s-27e76430a050e3b9>) — [electron/domains/entity/worldview-store.cjs:241](<../../../../../../../electron/domains/entity/worldview-store.cjs#L241>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:15](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:11](<../../../../../../../electron/backend-identity.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:24](<../../../../../../../electron/daily-price.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:6](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/domains/entity/tests/entity-repository.test.cjs:7](<../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/domains/entity/worldview-store.test.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:17](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:12](<../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L12>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:18](<../../../../../../../electron/engine-packages.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:198](<../../../../../../../electron/engine-signing.test.cjs#L198>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:13](<../../../../../../../electron/excel-service.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:19](<../../../../../../../electron/financial-service.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:20](<../../../../../../../electron/image-parser.test.cjs#L20>) — file-import-only; coverage not established.
- [electron/tag-association.test.cjs:17](<../../../../../../../electron/tag-association.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:209](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L209>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:33](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L33>) — file-import-only; coverage not established.

<a id="s-c00565dd66b525dc"></a>

## saveWorldViewChip.saveChipRecord

[electron/domains/entity/worldview-store.cjs:241](<../../../../../../../electron/domains/entity/worldview-store.cjs#L241>) · FunctionExpression · production · [Entity domain](<../../../../../modules/entity-domain.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [saveWorldViewChip](<worldview-store.cjs.md#s-d896ef794577c95a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [readRecord](<worldview-store.cjs.md#s-c5630fa0b3895f83>) — [electron/domains/entity/worldview-store.cjs:242](<../../../../../../../electron/domains/entity/worldview-store.cjs#L242>)
- [writeTextAtomic](<../../core/persistence/json-store.cjs.md#s-eaf1fb4e46036574>) — [electron/domains/entity/worldview-store.cjs:267](<../../../../../../../electron/domains/entity/worldview-store.cjs#L267>)
- [indexDirectory](<worldview-store.cjs.md#s-319b9208e3cd4d4d>) — [electron/domains/entity/worldview-store.cjs:268](<../../../../../../../electron/domains/entity/worldview-store.cjs#L268>)
- [serializeEntityIndex](<worldview-store.cjs.md#s-0758221ee28cde99>) — [electron/domains/entity/worldview-store.cjs:269](<../../../../../../../electron/domains/entity/worldview-store.cjs#L269>)
- [resolveRecord](<worldview-store.cjs.md#s-b56e96b379cad19e>) — [electron/domains/entity/worldview-store.cjs:272](<../../../../../../../electron/domains/entity/worldview-store.cjs#L272>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- Object.assign — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:248](<../../../../../../../electron/domains/entity/worldview-store.cjs#L248>)
- new Date().toISOString — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:249](<../../../../../../../electron/domains/entity/worldview-store.cjs#L249>)
- Date — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:249](<../../../../../../../electron/domains/entity/worldview-store.cjs#L249>)
- path.join — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:268](<../../../../../../../electron/domains/entity/worldview-store.cjs#L268>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:15](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:11](<../../../../../../../electron/backend-identity.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:24](<../../../../../../../electron/daily-price.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:6](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/domains/entity/tests/entity-repository.test.cjs:7](<../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/domains/entity/worldview-store.test.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:17](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:12](<../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L12>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:18](<../../../../../../../electron/engine-packages.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:198](<../../../../../../../electron/engine-signing.test.cjs#L198>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:13](<../../../../../../../electron/excel-service.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:19](<../../../../../../../electron/financial-service.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:20](<../../../../../../../electron/image-parser.test.cjs#L20>) — file-import-only; coverage not established.
- [electron/tag-association.test.cjs:17](<../../../../../../../electron/tag-association.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:209](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L209>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:33](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L33>) — file-import-only; coverage not established.

<a id="s-73965e4f60cae9f4"></a>

## assignWorldViewFiles

[electron/domains/entity/worldview-store.cjs:277](<../../../../../../../electron/domains/entity/worldview-store.cjs#L277>) · FunctionDeclaration · production · [Entity domain](<../../../../../modules/entity-domain.md>)

Stats all selected Vault files before a single queued write. The service may recheck its grant after resolution.

Purpose evidence: jsdoc.

Lexical owner: [electron/domains/entity/worldview-store.cjs](<worldview-store.cjs.md#s-393f835352f9ab3b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| rootPath | any | compiler-inferred | required |
| id | any | compiler-inferred | required |
| references | any | compiler-inferred | required |
| beforeWrite | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [mutate](<worldview-store.cjs.md#s-27e76430a050e3b9>) — [electron/domains/entity/worldview-store.cjs:292](<../../../../../../../electron/domains/entity/worldview-store.cjs#L292>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- idSchema.parse — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:278](<../../../../../../../electron/domains/entity/worldview-store.cjs#L278>)
- Array.isArray — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:280](<../../../../../../../electron/domains/entity/worldview-store.cjs#L280>)
- references.some — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:283](<../../../../../../../electron/domains/entity/worldview-store.cjs#L283>)
- Error — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:291](<../../../../../../../electron/domains/entity/worldview-store.cjs#L291>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:15](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:11](<../../../../../../../electron/backend-identity.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:24](<../../../../../../../electron/daily-price.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:6](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/domains/entity/tests/entity-repository.test.cjs:7](<../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/domains/entity/worldview-store.test.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:17](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:12](<../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L12>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:18](<../../../../../../../electron/engine-packages.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:198](<../../../../../../../electron/engine-signing.test.cjs#L198>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:13](<../../../../../../../electron/excel-service.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:19](<../../../../../../../electron/financial-service.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:20](<../../../../../../../electron/image-parser.test.cjs#L20>) — file-import-only; coverage not established.
- [electron/tag-association.test.cjs:17](<../../../../../../../electron/tag-association.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:209](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L209>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:33](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L33>) — file-import-only; coverage not established.

<a id="s-d20617f10dde11c0"></a>

## assignWorldViewFiles.invalidRef

[electron/domains/entity/worldview-store.cjs:284](<../../../../../../../electron/domains/entity/worldview-store.cjs#L284>) · FunctionExpression · production · [Entity domain](<../../../../../modules/entity-domain.md>)

Rejects non-text source references before filesystem access.

Purpose evidence: jsdoc.

Lexical owner: [assignWorldViewFiles](<worldview-store.cjs.md#s-73965e4f60cae9f4>).

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
- [electron/domains/entity/tests/entity-repository.test.cjs:7](<../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/domains/entity/worldview-store.test.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:17](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:12](<../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L12>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:18](<../../../../../../../electron/engine-packages.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:198](<../../../../../../../electron/engine-signing.test.cjs#L198>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:13](<../../../../../../../electron/excel-service.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:19](<../../../../../../../electron/financial-service.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:20](<../../../../../../../electron/image-parser.test.cjs#L20>) — file-import-only; coverage not established.
- [electron/tag-association.test.cjs:17](<../../../../../../../electron/tag-association.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:209](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L209>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:33](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L33>) — file-import-only; coverage not established.

<a id="s-6fb69637a7e981f0"></a>

## assignWorldViewFiles.assignFiles

[electron/domains/entity/worldview-store.cjs:292](<../../../../../../../electron/domains/entity/worldview-store.cjs#L292>) · FunctionExpression · production · [Entity domain](<../../../../../modules/entity-domain.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [assignWorldViewFiles](<worldview-store.cjs.md#s-73965e4f60cae9f4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [readRecord](<worldview-store.cjs.md#s-c5630fa0b3895f83>) — [electron/domains/entity/worldview-store.cjs:293](<../../../../../../../electron/domains/entity/worldview-store.cjs#L293>)
- [entityFromRecord](<worldview-store.cjs.md#s-36add00d304ae43d>) — [electron/domains/entity/worldview-store.cjs:294](<../../../../../../../electron/domains/entity/worldview-store.cjs#L294>)
- [statVaultSource](<../universe/vault-service.cjs.md#s-11f97228db17e5f8>) — [electron/domains/entity/worldview-store.cjs:300](<../../../../../../../electron/domains/entity/worldview-store.cjs#L300>)
- [Entity.attachSource](<model/Entity.cjs.md#s-d5d81e31b65f24bf>) — [electron/domains/entity/worldview-store.cjs:305](<../../../../../../../electron/domains/entity/worldview-store.cjs#L305>)
- [Entity.getSnapshot](<model/Entity.cjs.md#s-8a8fd069f9bac4e4>) — [electron/domains/entity/worldview-store.cjs:314](<../../../../../../../electron/domains/entity/worldview-store.cjs#L314>)
- [writeTextAtomic](<../../core/persistence/json-store.cjs.md#s-eaf1fb4e46036574>) — [electron/domains/entity/worldview-store.cjs:333](<../../../../../../../electron/domains/entity/worldview-store.cjs#L333>)
- [indexDirectory](<worldview-store.cjs.md#s-319b9208e3cd4d4d>) — [electron/domains/entity/worldview-store.cjs:334](<../../../../../../../electron/domains/entity/worldview-store.cjs#L334>)
- [serializeEntityIndex](<worldview-store.cjs.md#s-0758221ee28cde99>) — [electron/domains/entity/worldview-store.cjs:335](<../../../../../../../electron/domains/entity/worldview-store.cjs#L335>)
- [resolveRecord](<worldview-store.cjs.md#s-b56e96b379cad19e>) — [electron/domains/entity/worldview-store.cjs:338](<../../../../../../../electron/domains/entity/worldview-store.cjs#L338>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 9.

- Map — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:296](<../../../../../../../electron/domains/entity/worldview-store.cjs#L296>)
- record.metadata.sources.map — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:297](<../../../../../../../electron/domains/entity/worldview-store.cjs#L297>)
- Set — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:299](<../../../../../../../electron/domains/entity/worldview-store.cjs#L299>)
- resolved.stats.isFile — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:301](<../../../../../../../electron/domains/entity/worldview-store.cjs#L301>)
- Error — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:302](<../../../../../../../electron/domains/entity/worldview-store.cjs#L302>)
- entity .getSnapshot() .sourceReferences.map((source) =&gt; ({ ...existing.get(source.source_id), ...source, })) .sort — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:314](<../../../../../../../electron/domains/entity/worldview-store.cjs#L314>)
- entity .getSnapshot() .sourceReferences.map — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:314](<../../../../../../../electron/domains/entity/worldview-store.cjs#L314>)
- beforeWrite — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:332](<../../../../../../../electron/domains/entity/worldview-store.cjs#L332>)
- 1 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:15](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:11](<../../../../../../../electron/backend-identity.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:24](<../../../../../../../electron/daily-price.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:6](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/domains/entity/tests/entity-repository.test.cjs:7](<../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/domains/entity/worldview-store.test.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:17](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:12](<../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L12>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:18](<../../../../../../../electron/engine-packages.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:198](<../../../../../../../electron/engine-signing.test.cjs#L198>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:13](<../../../../../../../electron/excel-service.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:19](<../../../../../../../electron/financial-service.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:20](<../../../../../../../electron/image-parser.test.cjs#L20>) — file-import-only; coverage not established.
- [electron/tag-association.test.cjs:17](<../../../../../../../electron/tag-association.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:209](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L209>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:33](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L33>) — file-import-only; coverage not established.

<a id="s-4b728c167ede280f"></a>

## assignWorldViewFiles.assignFiles.&lt;anonymous@297:35&gt;

[electron/domains/entity/worldview-store.cjs:297](<../../../../../../../electron/domains/entity/worldview-store.cjs#L297>) · ArrowFunction · production · [Entity domain](<../../../../../modules/entity-domain.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [assignWorldViewFiles.assignFiles](<worldview-store.cjs.md#s-6fb69637a7e981f0>).

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
- [electron/domains/entity/tests/entity-repository.test.cjs:7](<../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/domains/entity/worldview-store.test.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:17](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:12](<../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L12>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:18](<../../../../../../../electron/engine-packages.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:198](<../../../../../../../electron/engine-signing.test.cjs#L198>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:13](<../../../../../../../electron/excel-service.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:19](<../../../../../../../electron/financial-service.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:20](<../../../../../../../electron/image-parser.test.cjs#L20>) — file-import-only; coverage not established.
- [electron/tag-association.test.cjs:17](<../../../../../../../electron/tag-association.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:209](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L209>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:33](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L33>) — file-import-only; coverage not established.

<a id="s-d4221a2596c157b4"></a>

## assignWorldViewFiles.assignFiles.&lt;anonymous@316:29&gt;

[electron/domains/entity/worldview-store.cjs:316](<../../../../../../../electron/domains/entity/worldview-store.cjs#L316>) · ArrowFunction · production · [Entity domain](<../../../../../modules/entity-domain.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [assignWorldViewFiles.assignFiles](<worldview-store.cjs.md#s-6fb69637a7e981f0>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| source | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- existing.get — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:317](<../../../../../../../electron/domains/entity/worldview-store.cjs#L317>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:15](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:11](<../../../../../../../electron/backend-identity.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:24](<../../../../../../../electron/daily-price.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:6](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/domains/entity/tests/entity-repository.test.cjs:7](<../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/domains/entity/worldview-store.test.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:17](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:12](<../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L12>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:18](<../../../../../../../electron/engine-packages.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:198](<../../../../../../../electron/engine-signing.test.cjs#L198>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:13](<../../../../../../../electron/excel-service.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:19](<../../../../../../../electron/financial-service.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:20](<../../../../../../../electron/image-parser.test.cjs#L20>) — file-import-only; coverage not established.
- [electron/tag-association.test.cjs:17](<../../../../../../../electron/tag-association.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:209](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L209>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:33](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L33>) — file-import-only; coverage not established.

<a id="s-26d2c1647879e990"></a>

## assignWorldViewFiles.assignFiles.compareSources

[electron/domains/entity/worldview-store.cjs:321](<../../../../../../../electron/domains/entity/worldview-store.cjs#L321>) · FunctionExpression · production · [Entity domain](<../../../../../modules/entity-domain.md>)

Keeps source serialization independent of picker order.

Purpose evidence: jsdoc.

Lexical owner: [assignWorldViewFiles.assignFiles](<worldview-store.cjs.md#s-6fb69637a7e981f0>).

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
- [electron/domains/entity/tests/entity-repository.test.cjs:7](<../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/domains/entity/worldview-store.test.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:17](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:12](<../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L12>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:18](<../../../../../../../electron/engine-packages.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:198](<../../../../../../../electron/engine-signing.test.cjs#L198>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:13](<../../../../../../../electron/excel-service.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:19](<../../../../../../../electron/financial-service.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:20](<../../../../../../../electron/image-parser.test.cjs#L20>) — file-import-only; coverage not established.
- [electron/tag-association.test.cjs:17](<../../../../../../../electron/tag-association.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:209](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L209>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:33](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L33>) — file-import-only; coverage not established.

<a id="s-70e7f08c811c0303"></a>

## unassignWorldViewFile

[electron/domains/entity/worldview-store.cjs:343](<../../../../../../../electron/domains/entity/worldview-store.cjs#L343>) · FunctionDeclaration · production · [Entity domain](<../../../../../modules/entity-domain.md>)

Removes one recorded association after the optional host recheck. The original Vault file stays in place.

Purpose evidence: jsdoc.

Lexical owner: [electron/domains/entity/worldview-store.cjs](<worldview-store.cjs.md#s-393f835352f9ab3b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| rootPath | any | compiler-inferred | required |
| id | any | compiler-inferred | required |
| sourceId | any | compiler-inferred | required |
| beforeWrite | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [mutate](<worldview-store.cjs.md#s-27e76430a050e3b9>) — [electron/domains/entity/worldview-store.cjs:347](<../../../../../../../electron/domains/entity/worldview-store.cjs#L347>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- idSchema.parse — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:344](<../../../../../../../electron/domains/entity/worldview-store.cjs#L344>)
- Error — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:346](<../../../../../../../electron/domains/entity/worldview-store.cjs#L346>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:15](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:11](<../../../../../../../electron/backend-identity.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:24](<../../../../../../../electron/daily-price.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:6](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/domains/entity/tests/entity-repository.test.cjs:7](<../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/domains/entity/worldview-store.test.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:17](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:12](<../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L12>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:18](<../../../../../../../electron/engine-packages.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:198](<../../../../../../../electron/engine-signing.test.cjs#L198>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:13](<../../../../../../../electron/excel-service.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:19](<../../../../../../../electron/financial-service.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:20](<../../../../../../../electron/image-parser.test.cjs#L20>) — file-import-only; coverage not established.
- [electron/tag-association.test.cjs:17](<../../../../../../../electron/tag-association.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:209](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L209>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:33](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L33>) — file-import-only; coverage not established.

<a id="s-207b02cadaf17fb3"></a>

## unassignWorldViewFile.unassignFile

[electron/domains/entity/worldview-store.cjs:347](<../../../../../../../electron/domains/entity/worldview-store.cjs#L347>) · FunctionExpression · production · [Entity domain](<../../../../../modules/entity-domain.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [unassignWorldViewFile](<worldview-store.cjs.md#s-70e7f08c811c0303>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [readRecord](<worldview-store.cjs.md#s-c5630fa0b3895f83>) — [electron/domains/entity/worldview-store.cjs:348](<../../../../../../../electron/domains/entity/worldview-store.cjs#L348>)
- [entityFromRecord](<worldview-store.cjs.md#s-36add00d304ae43d>) — [electron/domains/entity/worldview-store.cjs:349](<../../../../../../../electron/domains/entity/worldview-store.cjs#L349>)
- [Entity.detachSource](<model/Entity.cjs.md#s-e6ba195fea19d208>) — [electron/domains/entity/worldview-store.cjs:350](<../../../../../../../electron/domains/entity/worldview-store.cjs#L350>)
- [writeTextAtomic](<../../core/persistence/json-store.cjs.md#s-eaf1fb4e46036574>) — [electron/domains/entity/worldview-store.cjs:355](<../../../../../../../electron/domains/entity/worldview-store.cjs#L355>)
- [indexDirectory](<worldview-store.cjs.md#s-319b9208e3cd4d4d>) — [electron/domains/entity/worldview-store.cjs:356](<../../../../../../../electron/domains/entity/worldview-store.cjs#L356>)
- [serializeEntityIndex](<worldview-store.cjs.md#s-0758221ee28cde99>) — [electron/domains/entity/worldview-store.cjs:357](<../../../../../../../electron/domains/entity/worldview-store.cjs#L357>)
- [resolveRecord](<worldview-store.cjs.md#s-b56e96b379cad19e>) — [electron/domains/entity/worldview-store.cjs:360](<../../../../../../../electron/domains/entity/worldview-store.cjs#L360>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- record.metadata.sources.filter — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:351](<../../../../../../../electron/domains/entity/worldview-store.cjs#L351>)
- beforeWrite — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:354](<../../../../../../../electron/domains/entity/worldview-store.cjs#L354>)
- path.join — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:356](<../../../../../../../electron/domains/entity/worldview-store.cjs#L356>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:15](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:11](<../../../../../../../electron/backend-identity.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:24](<../../../../../../../electron/daily-price.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:6](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/domains/entity/tests/entity-repository.test.cjs:7](<../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/domains/entity/worldview-store.test.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:17](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:12](<../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L12>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:18](<../../../../../../../electron/engine-packages.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:198](<../../../../../../../electron/engine-signing.test.cjs#L198>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:13](<../../../../../../../electron/excel-service.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:19](<../../../../../../../electron/financial-service.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:20](<../../../../../../../electron/image-parser.test.cjs#L20>) — file-import-only; coverage not established.
- [electron/tag-association.test.cjs:17](<../../../../../../../electron/tag-association.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:209](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L209>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:33](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L33>) — file-import-only; coverage not established.

<a id="s-58946a1d1bf33726"></a>

## unassignWorldViewFile.unassignFile.&lt;anonymous@351:62&gt;

[electron/domains/entity/worldview-store.cjs:351](<../../../../../../../electron/domains/entity/worldview-store.cjs#L351>) · ArrowFunction · production · [Entity domain](<../../../../../modules/entity-domain.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [unassignWorldViewFile.unassignFile](<worldview-store.cjs.md#s-207b02cadaf17fb3>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| source | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [Entity.hasSource](<model/Entity.cjs.md#s-272a7e2fc98ca22b>) — [electron/domains/entity/worldview-store.cjs:352](<../../../../../../../electron/domains/entity/worldview-store.cjs#L352>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:15](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:11](<../../../../../../../electron/backend-identity.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:24](<../../../../../../../electron/daily-price.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:6](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/domains/entity/tests/entity-repository.test.cjs:7](<../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/domains/entity/worldview-store.test.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:17](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:12](<../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L12>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:18](<../../../../../../../electron/engine-packages.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:198](<../../../../../../../electron/engine-signing.test.cjs#L198>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:13](<../../../../../../../electron/excel-service.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:19](<../../../../../../../electron/financial-service.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:20](<../../../../../../../electron/image-parser.test.cjs#L20>) — file-import-only; coverage not established.
- [electron/tag-association.test.cjs:17](<../../../../../../../electron/tag-association.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:209](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L209>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:33](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L33>) — file-import-only; coverage not established.

<a id="s-d7d7a538d1ec4149"></a>

## deleteWorldViewChip

[electron/domains/entity/worldview-store.cjs:365](<../../../../../../../electron/domains/entity/worldview-store.cjs#L365>) · FunctionDeclaration · production · [Entity domain](<../../../../../modules/entity-domain.md>)

Deletes only a validated entity index following user confirmation; no source file is removed.

Purpose evidence: jsdoc.

Lexical owner: [electron/domains/entity/worldview-store.cjs](<worldview-store.cjs.md#s-393f835352f9ab3b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| rootPath | any | compiler-inferred | required |
| id | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [mutate](<worldview-store.cjs.md#s-27e76430a050e3b9>) — [electron/domains/entity/worldview-store.cjs:367](<../../../../../../../electron/domains/entity/worldview-store.cjs#L367>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- idSchema.parse — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:366](<../../../../../../../electron/domains/entity/worldview-store.cjs#L366>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:15](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:11](<../../../../../../../electron/backend-identity.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:24](<../../../../../../../electron/daily-price.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:6](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/domains/entity/tests/entity-repository.test.cjs:7](<../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/domains/entity/worldview-store.test.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:17](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:12](<../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L12>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:18](<../../../../../../../electron/engine-packages.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:198](<../../../../../../../electron/engine-signing.test.cjs#L198>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:13](<../../../../../../../electron/excel-service.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:19](<../../../../../../../electron/financial-service.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:20](<../../../../../../../electron/image-parser.test.cjs#L20>) — file-import-only; coverage not established.
- [electron/tag-association.test.cjs:17](<../../../../../../../electron/tag-association.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:209](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L209>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:33](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L33>) — file-import-only; coverage not established.

<a id="s-b60cf8fc21009244"></a>

## deleteWorldViewChip.deleteIndex

[electron/domains/entity/worldview-store.cjs:367](<../../../../../../../electron/domains/entity/worldview-store.cjs#L367>) · FunctionExpression · production · [Entity domain](<../../../../../modules/entity-domain.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [deleteWorldViewChip](<worldview-store.cjs.md#s-d7d7a538d1ec4149>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [readRecord](<worldview-store.cjs.md#s-c5630fa0b3895f83>) — [electron/domains/entity/worldview-store.cjs:368](<../../../../../../../electron/domains/entity/worldview-store.cjs#L368>)
- [indexDirectory](<worldview-store.cjs.md#s-319b9208e3cd4d4d>) — [electron/domains/entity/worldview-store.cjs:370](<../../../../../../../electron/domains/entity/worldview-store.cjs#L370>)
- [rejectSymlink](<../../core/persistence/json-store.cjs.md#s-aaddc8aab5c0d073>) — [electron/domains/entity/worldview-store.cjs:371](<../../../../../../../electron/domains/entity/worldview-store.cjs#L371>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- path.join — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:370](<../../../../../../../electron/domains/entity/worldview-store.cjs#L370>)
- fs.unlink — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:372](<../../../../../../../electron/domains/entity/worldview-store.cjs#L372>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:15](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:11](<../../../../../../../electron/backend-identity.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:24](<../../../../../../../electron/daily-price.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:6](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/domains/entity/tests/entity-repository.test.cjs:7](<../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/domains/entity/worldview-store.test.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:17](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:12](<../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L12>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:18](<../../../../../../../electron/engine-packages.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:198](<../../../../../../../electron/engine-signing.test.cjs#L198>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:13](<../../../../../../../electron/excel-service.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:19](<../../../../../../../electron/financial-service.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:20](<../../../../../../../electron/image-parser.test.cjs#L20>) — file-import-only; coverage not established.
- [electron/tag-association.test.cjs:17](<../../../../../../../electron/tag-association.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:209](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L209>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:33](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L33>) — file-import-only; coverage not established.

<a id="s-36add00d304ae43d"></a>

## entityFromRecord

[electron/domains/entity/worldview-store.cjs:377](<../../../../../../../electron/domains/entity/worldview-store.cjs#L377>) · FunctionDeclaration · production · [Entity domain](<../../../../../modules/entity-domain.md>)

Projects one schema-v1 record into Entity-owned state without resolving a source or opening a companion.

Purpose evidence: jsdoc.

Lexical owner: [electron/domains/entity/worldview-store.cjs](<worldview-store.cjs.md#s-393f835352f9ab3b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| record | any | compiler-inferred | required |

Returns: Entity (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [Entity.constructor](<model/Entity.cjs.md#s-156ad8f597ca330e>) — [electron/domains/entity/worldview-store.cjs:378](<../../../../../../../electron/domains/entity/worldview-store.cjs#L378>)

**Called by (statically resolved):**

- [assignWorldViewFiles.assignFiles](<worldview-store.cjs.md#s-6fb69637a7e981f0>) — [electron/domains/entity/worldview-store.cjs:294](<../../../../../../../electron/domains/entity/worldview-store.cjs#L294>)
- [unassignWorldViewFile.unassignFile](<worldview-store.cjs.md#s-207b02cadaf17fb3>) — [electron/domains/entity/worldview-store.cjs:349](<../../../../../../../electron/domains/entity/worldview-store.cjs#L349>)
- [readEntitySnapshot](<worldview-store.cjs.md#s-0bc55610e941689d>) — [electron/domains/entity/worldview-store.cjs:388](<../../../../../../../electron/domains/entity/worldview-store.cjs#L388>)
- [patchEntityMetadata.writeMetadataPatch](<worldview-store.cjs.md#s-7893d386a67f06d9>) — [electron/domains/entity/worldview-store.cjs:398](<../../../../../../../electron/domains/entity/worldview-store.cjs#L398>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:15](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:11](<../../../../../../../electron/backend-identity.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:24](<../../../../../../../electron/daily-price.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:6](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/domains/entity/tests/entity-repository.test.cjs:7](<../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/domains/entity/worldview-store.test.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:17](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:12](<../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L12>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:18](<../../../../../../../electron/engine-packages.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:198](<../../../../../../../electron/engine-signing.test.cjs#L198>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:13](<../../../../../../../electron/excel-service.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:19](<../../../../../../../electron/financial-service.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:20](<../../../../../../../electron/image-parser.test.cjs#L20>) — file-import-only; coverage not established.
- [electron/tag-association.test.cjs:17](<../../../../../../../electron/tag-association.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:209](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L209>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:33](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L33>) — file-import-only; coverage not established.

<a id="s-0bc55610e941689d"></a>

## readEntitySnapshot

[electron/domains/entity/worldview-store.cjs:387](<../../../../../../../electron/domains/entity/worldview-store.cjs#L387>) · FunctionDeclaration · production · [Entity domain](<../../../../../modules/entity-domain.md>)

Reads one bounded record and projects its known fields. Original YAML and Markdown stay inside the store.

Purpose evidence: jsdoc.

Lexical owner: [electron/domains/entity/worldview-store.cjs](<worldview-store.cjs.md#s-393f835352f9ab3b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| id | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [Entity.getSnapshot](<model/Entity.cjs.md#s-8a8fd069f9bac4e4>) — [electron/domains/entity/worldview-store.cjs:388](<../../../../../../../electron/domains/entity/worldview-store.cjs#L388>)
- [entityFromRecord](<worldview-store.cjs.md#s-36add00d304ae43d>) — [electron/domains/entity/worldview-store.cjs:388](<../../../../../../../electron/domains/entity/worldview-store.cjs#L388>)
- [readRecord](<worldview-store.cjs.md#s-c5630fa0b3895f83>) — [electron/domains/entity/worldview-store.cjs:388](<../../../../../../../electron/domains/entity/worldview-store.cjs#L388>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:15](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:11](<../../../../../../../electron/backend-identity.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:24](<../../../../../../../electron/daily-price.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:6](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/domains/entity/tests/entity-repository.test.cjs:7](<../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/domains/entity/worldview-store.test.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:17](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:12](<../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L12>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:18](<../../../../../../../electron/engine-packages.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:198](<../../../../../../../electron/engine-signing.test.cjs#L198>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:13](<../../../../../../../electron/excel-service.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:19](<../../../../../../../electron/financial-service.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:20](<../../../../../../../electron/image-parser.test.cjs#L20>) — file-import-only; coverage not established.
- [electron/tag-association.test.cjs:17](<../../../../../../../electron/tag-association.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:209](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L209>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:33](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L33>) — file-import-only; coverage not established.

<a id="s-3bdb886213b684fe"></a>

## patchEntityMetadata

[electron/domains/entity/worldview-store.cjs:392](<../../../../../../../electron/domains/entity/worldview-store.cjs#L392>) · FunctionDeclaration · production · [Entity domain](<../../../../../modules/entity-domain.md>)

Applies only validated Entity fields inside the WorldView queue. An external edit or revoked grant aborts the replacement.

Purpose evidence: jsdoc.

Lexical owner: [electron/domains/entity/worldview-store.cjs](<worldview-store.cjs.md#s-393f835352f9ab3b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| id | any | compiler-inferred | required |
| changes | any | compiler-inferred | required |
| beforeWrite | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [mutate](<worldview-store.cjs.md#s-27e76430a050e3b9>) — [electron/domains/entity/worldview-store.cjs:394](<../../../../../../../electron/domains/entity/worldview-store.cjs#L394>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- idSchema.parse — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:393](<../../../../../../../electron/domains/entity/worldview-store.cjs#L393>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:15](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:11](<../../../../../../../electron/backend-identity.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:24](<../../../../../../../electron/daily-price.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:6](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/domains/entity/tests/entity-repository.test.cjs:7](<../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/domains/entity/worldview-store.test.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:17](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:12](<../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L12>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:18](<../../../../../../../electron/engine-packages.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:198](<../../../../../../../electron/engine-signing.test.cjs#L198>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:13](<../../../../../../../electron/excel-service.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:19](<../../../../../../../electron/financial-service.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:20](<../../../../../../../electron/image-parser.test.cjs#L20>) — file-import-only; coverage not established.
- [electron/tag-association.test.cjs:17](<../../../../../../../electron/tag-association.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:209](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L209>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:33](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L33>) — file-import-only; coverage not established.

<a id="s-7893d386a67f06d9"></a>

## patchEntityMetadata.writeMetadataPatch

[electron/domains/entity/worldview-store.cjs:396](<../../../../../../../electron/domains/entity/worldview-store.cjs#L396>) · FunctionExpression · production · [Entity domain](<../../../../../modules/entity-domain.md>)

Patches the latest YAML without replacing placement, source data, unknown fields or the body.

Purpose evidence: jsdoc.

Lexical owner: [patchEntityMetadata](<worldview-store.cjs.md#s-3bdb886213b684fe>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [readRecord](<worldview-store.cjs.md#s-c5630fa0b3895f83>) — [electron/domains/entity/worldview-store.cjs:397](<../../../../../../../electron/domains/entity/worldview-store.cjs#L397>)
- [entityFromRecord](<worldview-store.cjs.md#s-36add00d304ae43d>) — [electron/domains/entity/worldview-store.cjs:398](<../../../../../../../electron/domains/entity/worldview-store.cjs#L398>)
- [Entity.updateMetadata](<model/Entity.cjs.md#s-6bb763029bffe74d>) — [electron/domains/entity/worldview-store.cjs:399](<../../../../../../../electron/domains/entity/worldview-store.cjs#L399>)
- [Entity.getSnapshot](<model/Entity.cjs.md#s-8a8fd069f9bac4e4>) — [electron/domains/entity/worldview-store.cjs:400](<../../../../../../../electron/domains/entity/worldview-store.cjs#L400>)
- [writeTextAtomic](<../../core/persistence/json-store.cjs.md#s-eaf1fb4e46036574>) — [electron/domains/entity/worldview-store.cjs:406](<../../../../../../../electron/domains/entity/worldview-store.cjs#L406>)
- [indexDirectory](<worldview-store.cjs.md#s-319b9208e3cd4d4d>) — [electron/domains/entity/worldview-store.cjs:407](<../../../../../../../electron/domains/entity/worldview-store.cjs#L407>)
- [serializeEntityIndex](<worldview-store.cjs.md#s-0758221ee28cde99>) — [electron/domains/entity/worldview-store.cjs:408](<../../../../../../../electron/domains/entity/worldview-store.cjs#L408>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- Object.entries — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:401](<../../../../../../../electron/domains/entity/worldview-store.cjs#L401>)
- Object.hasOwn — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:402](<../../../../../../../electron/domains/entity/worldview-store.cjs#L402>)
- beforeWrite — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:405](<../../../../../../../electron/domains/entity/worldview-store.cjs#L405>)
- path.join — external-or-dynamic-dispatch; [electron/domains/entity/worldview-store.cjs:407](<../../../../../../../electron/domains/entity/worldview-store.cjs#L407>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:15](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:11](<../../../../../../../electron/backend-identity.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:24](<../../../../../../../electron/daily-price.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:6](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/domains/entity/tests/entity-repository.test.cjs:7](<../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/domains/entity/worldview-store.test.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:17](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:12](<../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L12>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:18](<../../../../../../../electron/engine-packages.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:198](<../../../../../../../electron/engine-signing.test.cjs#L198>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:13](<../../../../../../../electron/excel-service.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:19](<../../../../../../../electron/financial-service.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:20](<../../../../../../../electron/image-parser.test.cjs#L20>) — file-import-only; coverage not established.
- [electron/tag-association.test.cjs:17](<../../../../../../../electron/tag-association.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:209](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L209>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:33](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L33>) — file-import-only; coverage not established.

<a id="s-800a4cbef09b01fa"></a>

## readWorldViewChip

[electron/domains/entity/worldview-store.cjs:431](<../../../../../../../electron/domains/entity/worldview-store.cjs#L431>) · FunctionDeclaration · production · [Entity domain](<../../../../../modules/entity-domain.md>)

Reads one existing entity and current assignment metadata for guarded Knowledge Card operations.

Purpose evidence: jsdoc.

Lexical owner: [electron/domains/entity/worldview-store.cjs](<worldview-store.cjs.md#s-393f835352f9ab3b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| rootPath | any | compiler-inferred | required |
| id | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [resolveRecord](<worldview-store.cjs.md#s-b56e96b379cad19e>) — [electron/domains/entity/worldview-store.cjs:432](<../../../../../../../electron/domains/entity/worldview-store.cjs#L432>)
- [readRecord](<worldview-store.cjs.md#s-c5630fa0b3895f83>) — [electron/domains/entity/worldview-store.cjs:432](<../../../../../../../electron/domains/entity/worldview-store.cjs#L432>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:15](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:11](<../../../../../../../electron/backend-identity.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:24](<../../../../../../../electron/daily-price.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/domains/entity/connector-store.test.cjs:6](<../../../../../../../electron/domains/entity/connector-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/domains/entity/tests/entity-repository.test.cjs:7](<../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/domains/entity/worldview-store.test.cjs:19](<../../../../../../../electron/domains/entity/worldview-store.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:17](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:12](<../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L12>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:18](<../../../../../../../electron/engine-packages.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:198](<../../../../../../../electron/engine-signing.test.cjs#L198>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:13](<../../../../../../../electron/excel-service.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:19](<../../../../../../../electron/financial-service.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:20](<../../../../../../../electron/image-parser.test.cjs#L20>) — file-import-only; coverage not established.
- [electron/tag-association.test.cjs:17](<../../../../../../../electron/tag-association.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:209](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L209>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:33](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L33>) — file-import-only; coverage not established.
