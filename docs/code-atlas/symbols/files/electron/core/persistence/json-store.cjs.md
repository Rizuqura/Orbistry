# electron/core/persistence/json-store.cjs: symbols

[Atlas](<../../../../../README.md>) / [Shared deterministic infrastructure](<../../../../../modules/shared.md>) / [electron/core/persistence/json-store.cjs:1](<../../../../../../../electron/core/persistence/json-store.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/core/persistence/json-store.cjs](<json-store.cjs.md#s-7318df8a0f9022e3>) (Module)
- [serialQueue](<json-store.cjs.md#s-a8a605453bc9a09a>) (FunctionDeclaration)
- [serialQueue.&lt;anonymous@10:10&gt;](<json-store.cjs.md#s-69ba8a00f5b210f1>) (ArrowFunction)
- [serialQueue.&lt;anonymous@10:10&gt;.&lt;anonymous@12:23&gt;](<json-store.cjs.md#s-1f29067ecf439293>) (ArrowFunction)
- [rejectSymlink](<json-store.cjs.md#s-aaddc8aab5c0d073>) (FunctionDeclaration)
- [safeDirectory](<json-store.cjs.md#s-429fa54bc1a890a0>) (FunctionDeclaration)
- [readJson](<json-store.cjs.md#s-7f9e3b493f3ab942>) (FunctionDeclaration)
- [writeJson](<json-store.cjs.md#s-5030c6156f98dba1>) (FunctionDeclaration)
- [writeJson.&lt;anonymous@78:51&gt;](<json-store.cjs.md#s-c60090407fff8ac3>) (ArrowFunction)
- [writeTextAtomic](<json-store.cjs.md#s-eaf1fb4e46036574>) (FunctionDeclaration)

<a id="s-7318df8a0f9022e3"></a>

## electron/core/persistence/json-store.cjs

[electron/core/persistence/json-store.cjs:1](<../../../../../../../electron/core/persistence/json-store.cjs#L1>) · Module · production · [Shared deterministic infrastructure](<../../../../../modules/shared.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- require — module-loader; [electron/core/persistence/json-store.cjs:1](<../../../../../../../electron/core/persistence/json-store.cjs#L1>)
- require — module-loader; [electron/core/persistence/json-store.cjs:2](<../../../../../../../electron/core/persistence/json-store.cjs#L2>)
- require — module-loader; [electron/core/persistence/json-store.cjs:3](<../../../../../../../electron/core/persistence/json-store.cjs#L3>)
- require — module-loader; [electron/core/persistence/json-store.cjs:4](<../../../../../../../electron/core/persistence/json-store.cjs#L4>)

**Related tests / acceptance harnesses:**

- [tests/integration/architecture-contract.test.cjs:221](<../../../../../../../tests/integration/architecture-contract.test.cjs#L221>) — file-import-only; coverage not established.

<a id="s-a8a605453bc9a09a"></a>

## serialQueue

[electron/core/persistence/json-store.cjs:8](<../../../../../../../electron/core/persistence/json-store.cjs#L8>) · FunctionDeclaration · production · [Shared deterministic infrastructure](<../../../../../modules/shared.md>)

Serializes asynchronous operations; rejected operations remain visible to callers without poisoning the next queue slot.

Purpose evidence: jsdoc.

Exported as: serialQueue ([electron/core/persistence/json-store.cjs:1](<../../../../../../../electron/core/persistence/json-store.cjs#L1>)), serialQueue ([electron/ai/json-store.cjs:1](<../../../../../../../electron/ai/json-store.cjs#L1>)).

Lexical owner: [electron/core/persistence/json-store.cjs](<json-store.cjs.md#s-7318df8a0f9022e3>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: (operation: any) =&gt; any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [AgentStore.constructor](<../../ai/agents/agent-store.cjs.md#s-61feae93fee7ec73>) — [electron/ai/agents/agent-store.cjs:123](<../../../../../../../electron/ai/agents/agent-store.cjs#L123>)
- [queueFor](<../../ai/agents/entity-agents.cjs.md#s-8253ccaf9d58ee2d>) — [electron/ai/agents/entity-agents.cjs:216](<../../../../../../../electron/ai/agents/entity-agents.cjs#L216>)
- [ConversationStore.constructor](<../../ai/chat/conversation-store.cjs.md#s-631f8ddda278645a>) — [electron/ai/chat/conversation-store.cjs:314](<../../../../../../../electron/ai/chat/conversation-store.cjs#L314>)
- [ContextBoxStore.constructor](<../../ai/context-box-store.cjs.md#s-1bf51cf1ae5b9ae0>) — [electron/ai/context-box-store.cjs:70](<../../../../../../../electron/ai/context-box-store.cjs#L70>)
- [CredentialStore.constructor](<../../ai/credential-store.cjs.md#s-c8610b530f19a67b>) — [electron/ai/credential-store.cjs:63](<../../../../../../../electron/ai/credential-store.cjs#L63>)
- [CapabilityRegistry.constructor](<../../ai/llm-front-office/model-registry.cjs.md#s-05871f7acb9f7959>) — [electron/ai/llm-front-office/model-registry.cjs:68](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L68>)
- [ModelRegistry.constructor](<../../ai/model-registry.cjs.md#s-776a77db3083bdfd>) — [electron/ai/model-registry.cjs:39](<../../../../../../../electron/ai/model-registry.cjs#L39>)
- [mutate](<../../domains/entity/worldview-store.cjs.md#s-27e76430a050e3b9>) — [electron/domains/entity/worldview-store.cjs:234](<../../../../../../../electron/domains/entity/worldview-store.cjs#L234>)
- [generate](<../../engines/backend-identity/identity-compiler.cjs.md#s-f539d3e969846edf>) — [electron/engines/backend-identity/identity-compiler.cjs:257](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L257>)
- [EnginePackageRegistry.mutate](<../../engines/registry/registry.cjs.md#s-043a28fe5e7284dd>) — [electron/engines/registry/registry.cjs:138](<../../../../../../../electron/engines/registry/registry.cjs#L138>)
- [createExcelService](<../../excel-service.cjs.md#s-adfd4f07e6ae9eaf>) — [electron/excel-service.cjs:73](<../../../../../../../electron/excel-service.cjs#L73>)
- [createImageParserService](<../../image-parser-service.cjs.md#s-4f26f99ee660dc42>) — [electron/image-parser-service.cjs:69](<../../../../../../../electron/image-parser-service.cjs#L69>)

Unresolved / external call sites: 1.

- Promise.resolve — external-or-dynamic-dispatch; [electron/core/persistence/json-store.cjs:9](<../../../../../../../electron/core/persistence/json-store.cjs#L9>)

**Related tests / acceptance harnesses:**

- [tests/integration/architecture-contract.test.cjs:221](<../../../../../../../tests/integration/architecture-contract.test.cjs#L221>) — file-import-only; coverage not established.

<a id="s-69ba8a00f5b210f1"></a>

## serialQueue.&lt;anonymous@10:10&gt;

[electron/core/persistence/json-store.cjs:10](<../../../../../../../electron/core/persistence/json-store.cjs#L10>) · ArrowFunction · production · [Shared deterministic infrastructure](<../../../../../modules/shared.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [serialQueue](<json-store.cjs.md#s-a8a605453bc9a09a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| operation | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- tail.then — external-or-dynamic-dispatch; [electron/core/persistence/json-store.cjs:11](<../../../../../../../electron/core/persistence/json-store.cjs#L11>)
- next.catch — external-or-dynamic-dispatch; [electron/core/persistence/json-store.cjs:12](<../../../../../../../electron/core/persistence/json-store.cjs#L12>)

**Related tests / acceptance harnesses:**

- [tests/integration/architecture-contract.test.cjs:221](<../../../../../../../tests/integration/architecture-contract.test.cjs#L221>) — file-import-only; coverage not established.

<a id="s-1f29067ecf439293"></a>

## serialQueue.&lt;anonymous@10:10&gt;.&lt;anonymous@12:23&gt;

[electron/core/persistence/json-store.cjs:12](<../../../../../../../electron/core/persistence/json-store.cjs#L12>) · ArrowFunction · production · [Shared deterministic infrastructure](<../../../../../modules/shared.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [serialQueue.&lt;anonymous@10:10&gt;](<json-store.cjs.md#s-69ba8a00f5b210f1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [tests/integration/architecture-contract.test.cjs:221](<../../../../../../../tests/integration/architecture-contract.test.cjs#L221>) — file-import-only; coverage not established.

<a id="s-aaddc8aab5c0d073"></a>

## rejectSymlink

[electron/core/persistence/json-store.cjs:18](<../../../../../../../electron/core/persistence/json-store.cjs#L18>) · FunctionDeclaration · production · [Shared deterministic infrastructure](<../../../../../modules/shared.md>)

Rejects linked metadata paths; missing paths are allowed for later creation, other filesystem errors propagate.

Purpose evidence: jsdoc.

Exported as: rejectSymlink ([electron/core/persistence/json-store.cjs:1](<../../../../../../../electron/core/persistence/json-store.cjs#L1>)), rejectSymlink ([electron/ai/json-store.cjs:1](<../../../../../../../electron/ai/json-store.cjs#L1>)).

Lexical owner: [electron/core/persistence/json-store.cjs](<json-store.cjs.md#s-7318df8a0f9022e3>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| target | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [AgentStore.get](<../../ai/agents/agent-store.cjs.md#s-feff3820609fc57c>) — [electron/ai/agents/agent-store.cjs:305](<../../../../../../../electron/ai/agents/agent-store.cjs#L305>)
- [AgentStore.avatarUrl](<../../ai/agents/agent-store.cjs.md#s-78d662b9ac7d6d48>) — [electron/ai/agents/agent-store.cjs:324](<../../../../../../../electron/ai/agents/agent-store.cjs#L324>)
- [AgentStore.backdropAsset](<../../ai/agents/agent-store.cjs.md#s-3f40538fbdbbeacd>) — [electron/ai/agents/agent-store.cjs:364](<../../../../../../../electron/ai/agents/agent-store.cjs#L364>)
- [AgentStore.constructionAvatar](<../../ai/agents/agent-store.cjs.md#s-7aaef4f6575aff33>) — [electron/ai/agents/agent-store.cjs:384](<../../../../../../../electron/ai/agents/agent-store.cjs#L384>)
- [AgentStore.save.&lt;anonymous@580:23&gt;](<../../ai/agents/agent-store.cjs.md#s-92c7ebeb214bb98f>) — [electron/ai/agents/agent-store.cjs:616](<../../../../../../../electron/ai/agents/agent-store.cjs#L616>)
- [EntityAgentService.checkPath](<../../ai/agents/entity-agents.cjs.md#s-7de4e386f4b53e4e>) — [electron/ai/agents/entity-agents.cjs:298](<../../../../../../../electron/ai/agents/entity-agents.cjs#L298>)
- [ConversationStore.remove.&lt;anonymous@427:23&gt;](<../../ai/chat/conversation-store.cjs.md#s-52f46dfc50e2ede3>) — [electron/ai/chat/conversation-store.cjs:429](<../../../../../../../electron/ai/chat/conversation-store.cjs#L429>)
- [readMarkdown](<../../ai/knowledge-store.cjs.md#s-8e66d80c157a16e4>) — [electron/ai/knowledge-store.cjs:82](<../../../../../../../electron/ai/knowledge-store.cjs#L82>)
- [KnowledgeStore.entries](<../../ai/knowledge-store.cjs.md#s-95b64d34ee47f7aa>) — [electron/ai/knowledge-store.cjs:203](<../../../../../../../electron/ai/knowledge-store.cjs#L203>)
- [retainedTraces](<../../ai/llm-front-office/telemetry-store.cjs.md#s-5e8b948ed705de3f>) — [electron/ai/llm-front-office/telemetry-store.cjs:27](<../../../../../../../electron/ai/llm-front-office/telemetry-store.cjs#L27>)
- [retainedTraces](<../../ai/llm-front-office/telemetry-store.cjs.md#s-5e8b948ed705de3f>) — [electron/ai/llm-front-office/telemetry-store.cjs:33](<../../../../../../../electron/ai/llm-front-office/telemetry-store.cjs#L33>)
- [readCompletedRun](<../../ai/research-knowledge.cjs.md#s-ff24b848b76d8433>) — [electron/ai/research-knowledge.cjs:18](<../../../../../../../electron/ai/research-knowledge.cjs#L18>)
- [readCompletedRun](<../../ai/research-knowledge.cjs.md#s-ff24b848b76d8433>) — [electron/ai/research-knowledge.cjs:19](<../../../../../../../electron/ai/research-knowledge.cjs#L19>)
- [readCompletedRun](<../../ai/research-knowledge.cjs.md#s-ff24b848b76d8433>) — [electron/ai/research-knowledge.cjs:21](<../../../../../../../electron/ai/research-knowledge.cjs#L21>)
- [readModelRun](<../../ai/run-store.cjs.md#s-260afe334a71b9ae>) — [electron/ai/run-store.cjs:364](<../../../../../../../electron/ai/run-store.cjs#L364>)
- [safeDirectory](<json-store.cjs.md#s-429fa54bc1a890a0>) — [electron/core/persistence/json-store.cjs:37](<../../../../../../../electron/core/persistence/json-store.cjs#L37>)
- [readJson](<json-store.cjs.md#s-7f9e3b493f3ab942>) — [electron/core/persistence/json-store.cjs:44](<../../../../../../../electron/core/persistence/json-store.cjs#L44>)
- [writeJson](<json-store.cjs.md#s-5030c6156f98dba1>) — [electron/core/persistence/json-store.cjs:60](<../../../../../../../electron/core/persistence/json-store.cjs#L60>)
- [writeTextAtomic](<json-store.cjs.md#s-eaf1fb4e46036574>) — [electron/core/persistence/json-store.cjs:89](<../../../../../../../electron/core/persistence/json-store.cjs#L89>)
- [writeTextAtomic](<json-store.cjs.md#s-eaf1fb4e46036574>) — [electron/core/persistence/json-store.cjs:108](<../../../../../../../electron/core/persistence/json-store.cjs#L108>)
- [cachePath](<../../daily-price-service.cjs.md#s-7a123fc4a165fdcb>) — [electron/daily-price-service.cjs:22](<../../../../../../../electron/daily-price-service.cjs#L22>)
- [indexDirectory](<../../domains/entity/worldview-store.cjs.md#s-319b9208e3cd4d4d>) — [electron/domains/entity/worldview-store.cjs:40](<../../../../../../../electron/domains/entity/worldview-store.cjs#L40>)
- [readRecord](<../../domains/entity/worldview-store.cjs.md#s-c5630fa0b3895f83>) — [electron/domains/entity/worldview-store.cjs:126](<../../../../../../../electron/domains/entity/worldview-store.cjs#L126>)
- [deleteWorldViewChip.deleteIndex](<../../domains/entity/worldview-store.cjs.md#s-b60cf8fc21009244>) — [electron/domains/entity/worldview-store.cjs:371](<../../../../../../../electron/domains/entity/worldview-store.cjs#L371>)
- [enginePath](<../../domains/indexing/tag-association-service.cjs.md#s-5e1c29e4edc6962d>) — [electron/domains/indexing/tag-association-service.cjs:40](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L40>)
- [readOptionalText](<../../domains/indexing/tag-association-service.cjs.md#s-a79435e522fa47c3>) — [electron/domains/indexing/tag-association-service.cjs:47](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L47>)
- [knowledgePath](<../../domains/knowledge/knowledge-source-access.cjs.md#s-a59b66a0a3d42c60>) — [electron/domains/knowledge/knowledge-source-access.cjs:16](<../../../../../../../electron/domains/knowledge/knowledge-source-access.cjs#L16>)
- [knowledgePath](<../../domains/knowledge/knowledge-source-access.cjs.md#s-a59b66a0a3d42c60>) — [electron/domains/knowledge/knowledge-source-access.cjs:19](<../../../../../../../electron/domains/knowledge/knowledge-source-access.cjs#L19>)
- [connectorPath](<../../domains/worldview/repositories/legacy-connection-store.cjs.md#s-d166b7a4f9c51c75>) — [electron/domains/worldview/repositories/legacy-connection-store.cjs:22](<../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L22>)
- [connectorPath](<../../domains/worldview/repositories/legacy-connection-store.cjs.md#s-d166b7a4f9c51c75>) — [electron/domains/worldview/repositories/legacy-connection-store.cjs:26](<../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L26>)
- [location](<../../engines/backend-identity/snapshot-store.cjs.md#s-d045ef361cdcece4>) — [electron/engines/backend-identity/snapshot-store.cjs:42](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L42>)
- [EnginePackageRegistry.location](<../../engines/registry/registry.cjs.md#s-8b2449642ff6e4f2>) — [electron/engines/registry/registry.cjs:110](<../../../../../../../electron/engines/registry/registry.cjs#L110>)
- [createFinancialService.get](<../../financial-service.cjs.md#s-a86ef1299cb55ce1>) — [electron/financial-service.cjs:71](<../../../../../../../electron/financial-service.cjs#L71>)
- [createImageParserService.enginePath](<../../image-parser-service.cjs.md#s-48fcad9c9eb084e3>) — [electron/image-parser-service.cjs:75](<../../../../../../../electron/image-parser-service.cjs#L75>)
- [main](<../../../scripts/build-daily-price-engine.cjs.md#s-ff5ef06e63aa8ff4>) — [scripts/build-daily-price-engine.cjs:82](<../../../../../../../scripts/build-daily-price-engine.cjs#L82>)
- [main](<../../../scripts/build/build-excel-engine.cjs.md#s-c4423626340c2941>) — [scripts/build/build-excel-engine.cjs:149](<../../../../../../../scripts/build/build-excel-engine.cjs#L149>)
- [main](<../../../scripts/build/build-yahoo-financials-engine.cjs.md#s-226388a0515524ab>) — [scripts/build/build-yahoo-financials-engine.cjs:136](<../../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L136>)
- [verify](<../../../scripts/clean-engine-backups.cjs.md#s-243b632d010e605f>) — [scripts/clean-engine-backups.cjs:9](<../../../../../../../scripts/clean-engine-backups.cjs#L9>)
- [verify](<../../../scripts/clean-engine-backups.cjs.md#s-243b632d010e605f>) — [scripts/clean-engine-backups.cjs:11](<../../../../../../../scripts/clean-engine-backups.cjs#L11>)
- [planCleanup](<../../../scripts/clean-engine-backups.cjs.md#s-9fdf038c44152d4f>) — [scripts/clean-engine-backups.cjs:37](<../../../../../../../scripts/clean-engine-backups.cjs#L37>)
- [planCleanup](<../../../scripts/clean-engine-backups.cjs.md#s-9fdf038c44152d4f>) — [scripts/clean-engine-backups.cjs:51](<../../../../../../../scripts/clean-engine-backups.cjs#L51>)

Unresolved / external call sites: 3.

- (await fs.lstat(target)).isSymbolicLink — external-or-dynamic-dispatch; [electron/core/persistence/json-store.cjs:20](<../../../../../../../electron/core/persistence/json-store.cjs#L20>)
- fs.lstat — external-or-dynamic-dispatch; [electron/core/persistence/json-store.cjs:20](<../../../../../../../electron/core/persistence/json-store.cjs#L20>)
- Error — external-or-dynamic-dispatch; [electron/core/persistence/json-store.cjs:21](<../../../../../../../electron/core/persistence/json-store.cjs#L21>)

**Related tests / acceptance harnesses:**

- [tests/integration/architecture-contract.test.cjs:221](<../../../../../../../tests/integration/architecture-contract.test.cjs#L221>) — file-import-only; coverage not established.

<a id="s-429fa54bc1a890a0"></a>

## safeDirectory

[electron/core/persistence/json-store.cjs:28](<../../../../../../../electron/core/persistence/json-store.cjs#L28>) · FunctionDeclaration · production · [Shared deterministic infrastructure](<../../../../../modules/shared.md>)

Verifies existing ancestors before creating a metadata directory; rejects linked parents and propagates filesystem failures.

Purpose evidence: jsdoc.

Exported as: safeDirectory ([electron/core/persistence/json-store.cjs:1](<../../../../../../../electron/core/persistence/json-store.cjs#L1>)), safeDirectory ([electron/ai/json-store.cjs:1](<../../../../../../../electron/ai/json-store.cjs#L1>)).

Lexical owner: [electron/core/persistence/json-store.cjs](<json-store.cjs.md#s-7318df8a0f9022e3>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| directory | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [rejectSymlink](<json-store.cjs.md#s-aaddc8aab5c0d073>) — [electron/core/persistence/json-store.cjs:37](<../../../../../../../electron/core/persistence/json-store.cjs#L37>)

**Called by (statically resolved):**

- [AgentStore.backdropAsset](<../../ai/agents/agent-store.cjs.md#s-3f40538fbdbbeacd>) — [electron/ai/agents/agent-store.cjs:362](<../../../../../../../electron/ai/agents/agent-store.cjs#L362>)
- [AgentStore.constructionAvatar](<../../ai/agents/agent-store.cjs.md#s-7aaef4f6575aff33>) — [electron/ai/agents/agent-store.cjs:382](<../../../../../../../electron/ai/agents/agent-store.cjs#L382>)
- [AgentStore.save.&lt;anonymous@580:23&gt;](<../../ai/agents/agent-store.cjs.md#s-92c7ebeb214bb98f>) — [electron/ai/agents/agent-store.cjs:614](<../../../../../../../electron/ai/agents/agent-store.cjs#L614>)
- [ConversationStore.read](<../../ai/chat/conversation-store.cjs.md#s-6cc833b9d3e06e6b>) — [electron/ai/chat/conversation-store.cjs:320](<../../../../../../../electron/ai/chat/conversation-store.cjs#L320>)
- [ConversationStore.list.&lt;anonymous@333:23&gt;](<../../ai/chat/conversation-store.cjs.md#s-b8dd86e1f12700cb>) — [electron/ai/chat/conversation-store.cjs:334](<../../../../../../../electron/ai/chat/conversation-store.cjs#L334>)
- [ContextBoxStore.list](<../../ai/context-box-store.cjs.md#s-ba2179b3b15fb0a7>) — [electron/ai/context-box-store.cjs:73](<../../../../../../../electron/ai/context-box-store.cjs#L73>)
- [EngineRegistry.execute.&lt;anonymous@249:7&gt;](<../../ai/engine-registry.cjs.md#s-a824e8f0b090f68e>) — [electron/ai/engine-registry.cjs:296](<../../../../../../../electron/ai/engine-registry.cjs#L296>)
- [immutableWrite](<../../ai/knowledge-store.cjs.md#s-3f77b54665ac2a0b>) — [electron/ai/knowledge-store.cjs:93](<../../../../../../../electron/ai/knowledge-store.cjs#L93>)
- [KnowledgeStore.checkBoundary](<../../ai/knowledge-store.cjs.md#s-f55db66529327881>) — [electron/ai/knowledge-store.cjs:142](<../../../../../../../electron/ai/knowledge-store.cjs#L142>)
- [KnowledgeStore.checkBoundary](<../../ai/knowledge-store.cjs.md#s-f55db66529327881>) — [electron/ai/knowledge-store.cjs:161](<../../../../../../../electron/ai/knowledge-store.cjs#L161>)
- [retainedTraces](<../../ai/llm-front-office/telemetry-store.cjs.md#s-5e8b948ed705de3f>) — [electron/ai/llm-front-office/telemetry-store.cjs:17](<../../../../../../../electron/ai/llm-front-office/telemetry-store.cjs#L17>)
- [createModelRun](<../../ai/run-store.cjs.md#s-0abf05c0db6341b7>) — [electron/ai/run-store.cjs:320](<../../../../../../../electron/ai/run-store.cjs#L320>)
- [readModelRun](<../../ai/run-store.cjs.md#s-260afe334a71b9ae>) — [electron/ai/run-store.cjs:363](<../../../../../../../electron/ai/run-store.cjs#L363>)
- [writeJson](<json-store.cjs.md#s-5030c6156f98dba1>) — [electron/core/persistence/json-store.cjs:59](<../../../../../../../electron/core/persistence/json-store.cjs#L59>)
- [writeTextAtomic](<json-store.cjs.md#s-eaf1fb4e46036574>) — [electron/core/persistence/json-store.cjs:88](<../../../../../../../electron/core/persistence/json-store.cjs#L88>)
- [initPackage](<../../engines/registry/authoring.cjs.md#s-bbfb28bee2f9c0b0>) — [electron/engines/registry/authoring.cjs:12](<../../../../../../../electron/engines/registry/authoring.cjs#L12>)
- [pullPackage](<../../engines/registry/authoring.cjs.md#s-dd26bc55111fb682>) — [electron/engines/registry/authoring.cjs:123](<../../../../../../../electron/engines/registry/authoring.cjs#L123>)
- [pullPackage](<../../engines/registry/authoring.cjs.md#s-dd26bc55111fb682>) — [electron/engines/registry/authoring.cjs:152](<../../../../../../../electron/engines/registry/authoring.cjs#L152>)
- [EnginePackageRegistry.mutate.&lt;anonymous@139:34&gt;](<../../engines/registry/registry.cjs.md#s-29d3ee5083d62443>) — [electron/engines/registry/registry.cjs:140](<../../../../../../../electron/engines/registry/registry.cjs#L140>)
- [EnginePackageRegistry.install.&lt;anonymous@193:7&gt;](<../../engines/registry/registry.cjs.md#s-dea4290d847ccc21>) — [electron/engines/registry/registry.cjs:213](<../../../../../../../electron/engines/registry/registry.cjs#L213>)
- [EnginePackageRegistry.install.&lt;anonymous@193:7&gt;](<../../engines/registry/registry.cjs.md#s-dea4290d847ccc21>) — [electron/engines/registry/registry.cjs:224](<../../../../../../../electron/engines/registry/registry.cjs#L224>)
- [EnginePackageRegistry.install.&lt;anonymous@193:7&gt;](<../../engines/registry/registry.cjs.md#s-dea4290d847ccc21>) — [electron/engines/registry/registry.cjs:228](<../../../../../../../electron/engines/registry/registry.cjs#L228>)
- [createSigningKey](<../../engines/registry/signing.cjs.md#s-dbf5e585ccf2aea6>) — [electron/engines/registry/signing.cjs:27](<../../../../../../../electron/engines/registry/signing.cjs#L27>)
- [createSigningKey](<../../engines/registry/signing.cjs.md#s-dbf5e585ccf2aea6>) — [electron/engines/registry/signing.cjs:28](<../../../../../../../electron/engines/registry/signing.cjs#L28>)
- [createImageParserService.processSource](<../../image-parser-service.cjs.md#s-f54290d09313daf6>) — [electron/image-parser-service.cjs:246](<../../../../../../../electron/image-parser-service.cjs#L246>)
- [main](<../../../scripts/build-daily-price-engine.cjs.md#s-ff5ef06e63aa8ff4>) — [scripts/build-daily-price-engine.cjs:28](<../../../../../../../scripts/build-daily-price-engine.cjs#L28>)
- [main](<../../../scripts/build-daily-price-engine.cjs.md#s-ff5ef06e63aa8ff4>) — [scripts/build-daily-price-engine.cjs:81](<../../../../../../../scripts/build-daily-price-engine.cjs#L81>)
- [main](<../../../scripts/build/build-excel-engine.cjs.md#s-c4423626340c2941>) — [scripts/build/build-excel-engine.cjs:93](<../../../../../../../scripts/build/build-excel-engine.cjs#L93>)
- [main](<../../../scripts/build/build-excel-engine.cjs.md#s-c4423626340c2941>) — [scripts/build/build-excel-engine.cjs:148](<../../../../../../../scripts/build/build-excel-engine.cjs#L148>)
- [main](<../../../scripts/build/build-yahoo-financials-engine.cjs.md#s-226388a0515524ab>) — [scripts/build/build-yahoo-financials-engine.cjs:33](<../../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L33>)
- [main](<../../../scripts/build/build-yahoo-financials-engine.cjs.md#s-226388a0515524ab>) — [scripts/build/build-yahoo-financials-engine.cjs:135](<../../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L135>)

Unresolved / external call sites: 5.

- path.resolve — external-or-dynamic-dispatch; [electron/core/persistence/json-store.cjs:32](<../../../../../../../electron/core/persistence/json-store.cjs#L32>)
- path.dirname — external-or-dynamic-dispatch; [electron/core/persistence/json-store.cjs:33](<../../../../../../../electron/core/persistence/json-store.cjs#L33>)
- path.dirname — external-or-dynamic-dispatch; [electron/core/persistence/json-store.cjs:34](<../../../../../../../electron/core/persistence/json-store.cjs#L34>)
- parents.unshift — external-or-dynamic-dispatch; [electron/core/persistence/json-store.cjs:36](<../../../../../../../electron/core/persistence/json-store.cjs#L36>)
- fs.mkdir — external-or-dynamic-dispatch; [electron/core/persistence/json-store.cjs:38](<../../../../../../../electron/core/persistence/json-store.cjs#L38>)

**Related tests / acceptance harnesses:**

- [tests/integration/architecture-contract.test.cjs:221](<../../../../../../../tests/integration/architecture-contract.test.cjs#L221>) — file-import-only; coverage not established.

<a id="s-7f9e3b493f3ab942"></a>

## readJson

[electron/core/persistence/json-store.cjs:42](<../../../../../../../electron/core/persistence/json-store.cjs#L42>) · FunctionDeclaration · production · [Shared deterministic infrastructure](<../../../../../modules/shared.md>)

Reads and validates JSON; optional missing-file fallback is cloned. Corruption/access errors preserve the existing storage error contract.

Purpose evidence: jsdoc.

Exported as: readJson ([electron/core/persistence/json-store.cjs:1](<../../../../../../../electron/core/persistence/json-store.cjs#L1>)), readJson ([electron/ai/json-store.cjs:1](<../../../../../../../electron/ai/json-store.cjs#L1>)).

Lexical owner: [electron/core/persistence/json-store.cjs](<json-store.cjs.md#s-7318df8a0f9022e3>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| target | any | compiler-inferred | required |
| validate | any | compiler-inferred | required |
| fallback | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [rejectSymlink](<json-store.cjs.md#s-aaddc8aab5c0d073>) — [electron/core/persistence/json-store.cjs:44](<../../../../../../../electron/core/persistence/json-store.cjs#L44>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/core/persistence/json-store.cjs:49](<../../../../../../../electron/core/persistence/json-store.cjs#L49>)

**Called by (statically resolved):**

- [AgentStore.read](<../../ai/agents/agent-store.cjs.md#s-3be90932d4fcc267>) — [electron/ai/agents/agent-store.cjs:149](<../../../../../../../electron/ai/agents/agent-store.cjs#L149>)
- [EntityAgentService.read](<../../ai/agents/entity-agents.cjs.md#s-3c39266a7796054c>) — [electron/ai/agents/entity-agents.cjs:305](<../../../../../../../electron/ai/agents/entity-agents.cjs#L305>)
- [EntityAgentService.session](<../../ai/agents/entity-agents.cjs.md#s-057274b46b3cc439>) — [electron/ai/agents/entity-agents.cjs:421](<../../../../../../../electron/ai/agents/entity-agents.cjs#L421>)
- [ConversationStore.read](<../../ai/chat/conversation-store.cjs.md#s-6cc833b9d3e06e6b>) — [electron/ai/chat/conversation-store.cjs:321](<../../../../../../../electron/ai/chat/conversation-store.cjs#L321>)
- [ContextBoxStore.list](<../../ai/context-box-store.cjs.md#s-ba2179b3b15fb0a7>) — [electron/ai/context-box-store.cjs:75](<../../../../../../../electron/ai/context-box-store.cjs#L75>)
- [CredentialStore.read](<../../ai/credential-store.cjs.md#s-d15c3cc48d069164>) — [electron/ai/credential-store.cjs:74](<../../../../../../../electron/ai/credential-store.cjs#L74>)
- [EngineRegistry.registration](<../../ai/engine-registry.cjs.md#s-b8a4cb300b636c21>) — [electron/ai/engine-registry.cjs:63](<../../../../../../../electron/ai/engine-registry.cjs#L63>)
- [EngineRegistry.open](<../../ai/engine-registry.cjs.md#s-3478cb94d7277ce5>) — [electron/ai/engine-registry.cjs:357](<../../../../../../../electron/ai/engine-registry.cjs#L357>)
- [CapabilityRegistry.read](<../../ai/llm-front-office/model-registry.cjs.md#s-a30997c9eee6a3a1>) — [electron/ai/llm-front-office/model-registry.cjs:73](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L73>)
- [FrontOfficeService.config](<../../ai/llm-front-office/service.cjs.md#s-95e5d1f18e4f39b6>) — [electron/ai/llm-front-office/service.cjs:57](<../../../../../../../electron/ai/llm-front-office/service.cjs#L57>)
- [retainedTraces](<../../ai/llm-front-office/telemetry-store.cjs.md#s-5e8b948ed705de3f>) — [electron/ai/llm-front-office/telemetry-store.cjs:22](<../../../../../../../electron/ai/llm-front-office/telemetry-store.cjs#L22>)
- [ModelRegistry.read](<../../ai/model-registry.cjs.md#s-d98b4cc3aafbf180>) — [electron/ai/model-registry.cjs:49](<../../../../../../../electron/ai/model-registry.cjs#L49>)
- [initializeVault](<../../domains/universe/vault-settings.cjs.md#s-50d69121ed2233a7>) — [electron/domains/universe/vault-settings.cjs:19](<../../../../../../../electron/domains/universe/vault-settings.cjs#L19>)

Unresolved / external call sites: 5.

- validate — external-or-dynamic-dispatch; [electron/core/persistence/json-store.cjs:45](<../../../../../../../electron/core/persistence/json-store.cjs#L45>)
- JSON.parse — external-or-dynamic-dispatch; [electron/core/persistence/json-store.cjs:45](<../../../../../../../electron/core/persistence/json-store.cjs#L45>)
- fs.readFile — external-or-dynamic-dispatch; [electron/core/persistence/json-store.cjs:45](<../../../../../../../electron/core/persistence/json-store.cjs#L45>)
- structuredClone — external-or-dynamic-dispatch; [electron/core/persistence/json-store.cjs:48](<../../../../../../../electron/core/persistence/json-store.cjs#L48>)
- path.basename — external-or-dynamic-dispatch; [electron/core/persistence/json-store.cjs:51](<../../../../../../../electron/core/persistence/json-store.cjs#L51>)

**Related tests / acceptance harnesses:**

- [tests/integration/architecture-contract.test.cjs:221](<../../../../../../../tests/integration/architecture-contract.test.cjs#L221>) — file-import-only; coverage not established.

<a id="s-5030c6156f98dba1"></a>

## writeJson

[electron/core/persistence/json-store.cjs:58](<../../../../../../../electron/core/persistence/json-store.cjs#L58>) · FunctionDeclaration · production · [Shared deterministic infrastructure](<../../../../../modules/shared.md>)

Atomically writes synced metadata JSON through a temporary sibling; preserves legacy storage errors and cleanup behavior.

Purpose evidence: jsdoc.

Exported as: writeJson ([electron/core/persistence/json-store.cjs:1](<../../../../../../../electron/core/persistence/json-store.cjs#L1>)), writeJson ([electron/ai/json-store.cjs:1](<../../../../../../../electron/ai/json-store.cjs#L1>)).

Lexical owner: [electron/core/persistence/json-store.cjs](<json-store.cjs.md#s-7318df8a0f9022e3>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| target | any | compiler-inferred | required |
| value | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [safeDirectory](<json-store.cjs.md#s-429fa54bc1a890a0>) — [electron/core/persistence/json-store.cjs:59](<../../../../../../../electron/core/persistence/json-store.cjs#L59>)
- [rejectSymlink](<json-store.cjs.md#s-aaddc8aab5c0d073>) — [electron/core/persistence/json-store.cjs:60](<../../../../../../../electron/core/persistence/json-store.cjs#L60>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/core/persistence/json-store.cjs:72](<../../../../../../../electron/core/persistence/json-store.cjs#L72>)

**Called by (statically resolved):**

- [AgentStore.archive.&lt;anonymous@180:23&gt;](<../../ai/agents/agent-store.cjs.md#s-d4ed7663c6efd3ff>) — [electron/ai/agents/agent-store.cjs:188](<../../../../../../../electron/ai/agents/agent-store.cjs#L188>)
- [AgentStore.create.&lt;anonymous@194:23&gt;](<../../ai/agents/agent-store.cjs.md#s-9bcf573f56449023>) — [electron/ai/agents/agent-store.cjs:240](<../../../../../../../electron/ai/agents/agent-store.cjs#L240>)
- [AgentStore.saveConstruction.&lt;anonymous@389:23&gt;](<../../ai/agents/agent-store.cjs.md#s-5d9fe7550818f8a0>) — [electron/ai/agents/agent-store.cjs:482](<../../../../../../../electron/ai/agents/agent-store.cjs#L482>)
- [AgentStore.save.&lt;anonymous@580:23&gt;](<../../ai/agents/agent-store.cjs.md#s-92c7ebeb214bb98f>) — [electron/ai/agents/agent-store.cjs:651](<../../../../../../../electron/ai/agents/agent-store.cjs#L651>)
- [EntityAgentService.write](<../../ai/agents/entity-agents.cjs.md#s-8299e936980391df>) — [electron/ai/agents/entity-agents.cjs:314](<../../../../../../../electron/ai/agents/entity-agents.cjs#L314>)
- [EntityAgentService.saveSession](<../../ai/agents/entity-agents.cjs.md#s-1702765182caef3e>) — [electron/ai/agents/entity-agents.cjs:474](<../../../../../../../electron/ai/agents/entity-agents.cjs#L474>)
- [EntityAgentService.send](<../../ai/agents/entity-agents.cjs.md#s-606ff3968c11b3f5>) — [electron/ai/agents/entity-agents.cjs:1537](<../../../../../../../electron/ai/agents/entity-agents.cjs#L1537>)
- [EntityAgentService.send](<../../ai/agents/entity-agents.cjs.md#s-606ff3968c11b3f5>) — [electron/ai/agents/entity-agents.cjs:1562](<../../../../../../../electron/ai/agents/entity-agents.cjs#L1562>)
- [EntityAgentService.executeBound](<../../ai/agents/entity-agents.cjs.md#s-23dd00b1b12e2790>) — [electron/ai/agents/entity-agents.cjs:1993](<../../../../../../../electron/ai/agents/entity-agents.cjs#L1993>)
- [EntityAgentService.executeBound](<../../ai/agents/entity-agents.cjs.md#s-23dd00b1b12e2790>) — [electron/ai/agents/entity-agents.cjs:2032](<../../../../../../../electron/ai/agents/entity-agents.cjs#L2032>)
- [EntityAgentService.executeBound](<../../ai/agents/entity-agents.cjs.md#s-23dd00b1b12e2790>) — [electron/ai/agents/entity-agents.cjs:2059](<../../../../../../../electron/ai/agents/entity-agents.cjs#L2059>)
- [resetBackend](<../../ai/backend-reset.cjs.md#s-8923e8f07754093d>) — [electron/ai/backend-reset.cjs:170](<../../../../../../../electron/ai/backend-reset.cjs#L170>)
- [resetBackend](<../../ai/backend-reset.cjs.md#s-8923e8f07754093d>) — [electron/ai/backend-reset.cjs:175](<../../../../../../../electron/ai/backend-reset.cjs#L175>)
- [resetBackend](<../../ai/backend-reset.cjs.md#s-8923e8f07754093d>) — [electron/ai/backend-reset.cjs:186](<../../../../../../../electron/ai/backend-reset.cjs#L186>)
- [ConversationStore.write](<../../ai/chat/conversation-store.cjs.md#s-0df3a3bafe3efb29>) — [electron/ai/chat/conversation-store.cjs:330](<../../../../../../../electron/ai/chat/conversation-store.cjs#L330>)
- [ContextBoxStore.create.&lt;anonymous@106:23&gt;](<../../ai/context-box-store.cjs.md#s-3fba822d3d33c19c>) — [electron/ai/context-box-store.cjs:126](<../../../../../../../electron/ai/context-box-store.cjs#L126>)
- [ContextBoxStore.rename.&lt;anonymous@134:23&gt;](<../../ai/context-box-store.cjs.md#s-5d9a82b968a34951>) — [electron/ai/context-box-store.cjs:144](<../../../../../../../electron/ai/context-box-store.cjs#L144>)
- [ContextBoxStore.edit.&lt;anonymous@149:23&gt;](<../../ai/context-box-store.cjs.md#s-56016dd04134b4e4>) — [electron/ai/context-box-store.cjs:160](<../../../../../../../electron/ai/context-box-store.cjs#L160>)
- [CredentialStore.save.&lt;anonymous@96:23&gt;](<../../ai/credential-store.cjs.md#s-7e005c5bc580859a>) — [electron/ai/credential-store.cjs:113](<../../../../../../../electron/ai/credential-store.cjs#L113>)
- [CredentialStore.remove.&lt;anonymous@119:23&gt;](<../../ai/credential-store.cjs.md#s-ae8ee4c2eb5cdd01>) — [electron/ai/credential-store.cjs:122](<../../../../../../../electron/ai/credential-store.cjs#L122>)
- [EngineRegistry.configure.&lt;anonymous@130:34&gt;](<../../ai/engine-registry.cjs.md#s-47e4db6bcef180fc>) — [electron/ai/engine-registry.cjs:156](<../../../../../../../electron/ai/engine-registry.cjs#L156>)
- [EngineRegistry.probe.&lt;anonymous@194:34&gt;](<../../ai/engine-registry.cjs.md#s-a6cee996977307af>) — [electron/ai/engine-registry.cjs:209](<../../../../../../../electron/ai/engine-registry.cjs#L209>)
- [EngineRegistry.record](<../../ai/engine-registry.cjs.md#s-9be6b57412fb340f>) — [electron/ai/engine-registry.cjs:346](<../../../../../../../electron/ai/engine-registry.cjs#L346>)
- [CapabilityRegistry.refresh.&lt;anonymous@83:23&gt;](<../../ai/llm-front-office/model-registry.cjs.md#s-e392906ee7d95b5b>) — [electron/ai/llm-front-office/model-registry.cjs:118](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L118>)
- [CapabilityRegistry.override.&lt;anonymous@128:23&gt;](<../../ai/llm-front-office/model-registry.cjs.md#s-bb2cde6140d48648>) — [electron/ai/llm-front-office/model-registry.cjs:140](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L140>)
- [CapabilityRegistry.addEvidence.&lt;anonymous@146:23&gt;](<../../ai/llm-front-office/model-registry.cjs.md#s-420776679b486be4>) — [electron/ai/llm-front-office/model-registry.cjs:160](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L160>)
- [CapabilityRegistry.favorite.&lt;anonymous@169:23&gt;](<../../ai/llm-front-office/model-registry.cjs.md#s-6688ff0825b4ddae>) — [electron/ai/llm-front-office/model-registry.cjs:173](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L173>)
- [FrontOfficeService.saveConfig.&lt;anonymous@68:35&gt;](<../../ai/llm-front-office/service.cjs.md#s-dd2d34f78ddfb2f5>) — [electron/ai/llm-front-office/service.cjs:69](<../../../../../../../electron/ai/llm-front-office/service.cjs#L69>)
- [recordTrace](<../../ai/llm-front-office/telemetry-store.cjs.md#s-42b043391a6c38c4>) — [electron/ai/llm-front-office/telemetry-store.cjs:41](<../../../../../../../electron/ai/llm-front-office/telemetry-store.cjs#L41>)
- [ModelRegistry.save.&lt;anonymous@140:23&gt;](<../../ai/model-registry.cjs.md#s-cfa467e587954c2f>) — [electron/ai/model-registry.cjs:148](<../../../../../../../electron/ai/model-registry.cjs#L148>)
- [createDailyPriceService.get.refresh](<../../daily-price-service.cjs.md#s-574fd95317908e2f>) — [electron/daily-price-service.cjs:95](<../../../../../../../electron/daily-price-service.cjs#L95>)
- [saveVault](<../../domains/universe/vault-settings.cjs.md#s-52abb0192c9554e9>) — [electron/domains/universe/vault-settings.cjs:38](<../../../../../../../electron/domains/universe/vault-settings.cjs#L38>)
- [putChunk](<../../engines/backend-identity/snapshot-store.cjs.md#s-ed9516fc7e10fb38>) — [electron/engines/backend-identity/snapshot-store.cjs:156](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L156>)
- [publish](<../../engines/backend-identity/snapshot-store.cjs.md#s-aad15ef56f75a7c7>) — [electron/engines/backend-identity/snapshot-store.cjs:179](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L179>)
- [publish](<../../engines/backend-identity/snapshot-store.cjs.md#s-aad15ef56f75a7c7>) — [electron/engines/backend-identity/snapshot-store.cjs:180](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L180>)
- [publish](<../../engines/backend-identity/snapshot-store.cjs.md#s-aad15ef56f75a7c7>) — [electron/engines/backend-identity/snapshot-store.cjs:184](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L184>)
- [publish](<../../engines/backend-identity/snapshot-store.cjs.md#s-aad15ef56f75a7c7>) — [electron/engines/backend-identity/snapshot-store.cjs:214](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L214>)
- [publish](<../../engines/backend-identity/snapshot-store.cjs.md#s-aad15ef56f75a7c7>) — [electron/engines/backend-identity/snapshot-store.cjs:222](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L222>)
- [recordAttempt](<../../engines/backend-identity/snapshot-store.cjs.md#s-ae275b9de6284ebc>) — [electron/engines/backend-identity/snapshot-store.cjs:235](<../../../../../../../electron/engines/backend-identity/snapshot-store.cjs#L235>)
- [sealPackage](<../../engines/registry/package.cjs.md#s-d9c25ce14dcf2863>) — [electron/engines/registry/package.cjs:139](<../../../../../../../electron/engines/registry/package.cjs#L139>)
- [EnginePackageRegistry.mutate.&lt;anonymous@139:34&gt;](<../../engines/registry/registry.cjs.md#s-29d3ee5083d62443>) — [electron/engines/registry/registry.cjs:163](<../../../../../../../electron/engines/registry/registry.cjs#L163>)
- [EnginePackageRegistry.execute](<../../engines/registry/registry.cjs.md#s-61267d4d373b62b8>) — [electron/engines/registry/registry.cjs:676](<../../../../../../../electron/engines/registry/registry.cjs#L676>)
- [EnginePackageRegistry.execute.&lt;anonymous@693:9&gt;](<../../engines/registry/registry.cjs.md#s-055e8a8974f0f246>) — [electron/engines/registry/registry.cjs:729](<../../../../../../../electron/engines/registry/registry.cjs#L729>)
- [EnginePackageRegistry.execute](<../../engines/registry/registry.cjs.md#s-61267d4d373b62b8>) — [electron/engines/registry/registry.cjs:750](<../../../../../../../electron/engines/registry/registry.cjs#L750>)
- [createFinancialService.get.refresh](<../../financial-service.cjs.md#s-3a52bab9a8fcaae5>) — [electron/financial-service.cjs:127](<../../../../../../../electron/financial-service.cjs#L127>)

Unresolved / external call sites: 10.

- path.dirname — external-or-dynamic-dispatch; [electron/core/persistence/json-store.cjs:59](<../../../../../../../electron/core/persistence/json-store.cjs#L59>)
- randomUUID — external-or-dynamic-dispatch; [electron/core/persistence/json-store.cjs:61](<../../../../../../../electron/core/persistence/json-store.cjs#L61>)
- fs.open — external-or-dynamic-dispatch; [electron/core/persistence/json-store.cjs:63](<../../../../../../../electron/core/persistence/json-store.cjs#L63>)
- file.writeFile — external-or-dynamic-dispatch; [electron/core/persistence/json-store.cjs:65](<../../../../../../../electron/core/persistence/json-store.cjs#L65>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/core/persistence/json-store.cjs:65](<../../../../../../../electron/core/persistence/json-store.cjs#L65>)
- file.sync — external-or-dynamic-dispatch; [electron/core/persistence/json-store.cjs:66](<../../../../../../../electron/core/persistence/json-store.cjs#L66>)
- file.close — external-or-dynamic-dispatch; [electron/core/persistence/json-store.cjs:68](<../../../../../../../electron/core/persistence/json-store.cjs#L68>)
- fs.rename — external-or-dynamic-dispatch; [electron/core/persistence/json-store.cjs:70](<../../../../../../../electron/core/persistence/json-store.cjs#L70>)
- 2 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [tests/integration/architecture-contract.test.cjs:221](<../../../../../../../tests/integration/architecture-contract.test.cjs#L221>) — file-import-only; coverage not established.

<a id="s-c60090407fff8ac3"></a>

## writeJson.&lt;anonymous@78:51&gt;

[electron/core/persistence/json-store.cjs:78](<../../../../../../../electron/core/persistence/json-store.cjs#L78>) · ArrowFunction · production · [Shared deterministic infrastructure](<../../../../../modules/shared.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [writeJson](<json-store.cjs.md#s-5030c6156f98dba1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [tests/integration/architecture-contract.test.cjs:221](<../../../../../../../tests/integration/architecture-contract.test.cjs#L221>) — file-import-only; coverage not established.

<a id="s-eaf1fb4e46036574"></a>

## writeTextAtomic

[electron/core/persistence/json-store.cjs:87](<../../../../../../../electron/core/persistence/json-store.cjs#L87>) · FunctionDeclaration · production · [Shared deterministic infrastructure](<../../../../../modules/shared.md>)

Saves caller-validated text to an internal metadata path using a synced temporary file and atomic rename. original is the expected previous text, null for a new document, or undefined to skip the conflict check. Throws on linked paths, filesystem errors, or external edits; source files are not involved.

Purpose evidence: jsdoc.

Exported as: writeTextAtomic ([electron/core/persistence/json-store.cjs:1](<../../../../../../../electron/core/persistence/json-store.cjs#L1>)), writeTextAtomic ([electron/ai/json-store.cjs:1](<../../../../../../../electron/ai/json-store.cjs#L1>)).

Lexical owner: [electron/core/persistence/json-store.cjs](<json-store.cjs.md#s-7318df8a0f9022e3>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| target | any | compiler-inferred | required |
| text | any | compiler-inferred | required |
| original | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [safeDirectory](<json-store.cjs.md#s-429fa54bc1a890a0>) — [electron/core/persistence/json-store.cjs:88](<../../../../../../../electron/core/persistence/json-store.cjs#L88>)
- [rejectSymlink](<json-store.cjs.md#s-aaddc8aab5c0d073>) — [electron/core/persistence/json-store.cjs:89](<../../../../../../../electron/core/persistence/json-store.cjs#L89>)
- [rejectSymlink](<json-store.cjs.md#s-aaddc8aab5c0d073>) — [electron/core/persistence/json-store.cjs:108](<../../../../../../../electron/core/persistence/json-store.cjs#L108>)

**Called by (statically resolved):**

- [saveWorldViewChip.saveChipRecord](<../../domains/entity/worldview-store.cjs.md#s-c00565dd66b525dc>) — [electron/domains/entity/worldview-store.cjs:267](<../../../../../../../electron/domains/entity/worldview-store.cjs#L267>)
- [assignWorldViewFiles.assignFiles](<../../domains/entity/worldview-store.cjs.md#s-6fb69637a7e981f0>) — [electron/domains/entity/worldview-store.cjs:333](<../../../../../../../electron/domains/entity/worldview-store.cjs#L333>)
- [unassignWorldViewFile.unassignFile](<../../domains/entity/worldview-store.cjs.md#s-207b02cadaf17fb3>) — [electron/domains/entity/worldview-store.cjs:355](<../../../../../../../electron/domains/entity/worldview-store.cjs#L355>)
- [patchEntityMetadata.writeMetadataPatch](<../../domains/entity/worldview-store.cjs.md#s-7893d386a67f06d9>) — [electron/domains/entity/worldview-store.cjs:406](<../../../../../../../electron/domains/entity/worldview-store.cjs#L406>)
- [&lt;anonymous@119:92&gt;.&lt;anonymous@120:22&gt;](<../../domains/entity/worldview-store.test.cjs.md#s-91055c56747f2e19>) — [electron/domains/entity/worldview-store.test.cjs:127](<../../../../../../../electron/domains/entity/worldview-store.test.cjs#L127>)
- [preparePackage](<../../domains/indexing/tag-association-service.cjs.md#s-f8bb480a932e8c05>) — [electron/domains/indexing/tag-association-service.cjs:70](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L70>)
- [preparePackage](<../../domains/indexing/tag-association-service.cjs.md#s-f8bb480a932e8c05>) — [electron/domains/indexing/tag-association-service.cjs:75](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L75>)
- [writeCache](<../../domains/indexing/tag-association-service.cjs.md#s-f7662e4710d31256>) — [electron/domains/indexing/tag-association-service.cjs:109](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L109>)
- [saveKnowledgeIndex.writeIndex](<../../domains/knowledge/knowledge-store.cjs.md#s-b342ffff622fda36>) — [electron/domains/knowledge/knowledge-store.cjs:105](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L105>)
- [saveKnowledgeNote.saveSourceNote](<../../domains/knowledge/knowledge-store.cjs.md#s-1654fd018e79f10a>) — [electron/domains/knowledge/knowledge-store.cjs:158](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L158>)
- [savePriceSymbol.writePriceSymbol](<../../domains/knowledge/knowledge-store.cjs.md#s-f9823235072108c5>) — [electron/domains/knowledge/knowledge-store.cjs:185](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L185>)
- [createConnector.writeRelationship](<../../domains/worldview/repositories/legacy-connection-store.cjs.md#s-46615bffd58cc088>) — [electron/domains/worldview/repositories/legacy-connection-store.cjs:87](<../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L87>)
- [updateConnector.editRelationship](<../../domains/worldview/repositories/legacy-connection-store.cjs.md#s-cdb4ffc076e40381>) — [electron/domains/worldview/repositories/legacy-connection-store.cjs:121](<../../../../../../../electron/domains/worldview/repositories/legacy-connection-store.cjs#L121>)
- [EnginePackageRegistry.execute.&lt;anonymous@693:9&gt;](<../../engines/registry/registry.cjs.md#s-055e8a8974f0f246>) — [electron/engines/registry/registry.cjs:719](<../../../../../../../electron/engines/registry/registry.cjs#L719>)
- [signPackage](<../../engines/registry/signing.cjs.md#s-9317466d274715e3>) — [electron/engines/registry/signing.cjs:125](<../../../../../../../electron/engines/registry/signing.cjs#L125>)
- [createImageParserService.saveCache](<../../image-parser-service.cjs.md#s-a0a8635c6101e0d6>) — [electron/image-parser-service.cjs:164](<../../../../../../../electron/image-parser-service.cjs#L164>)
- [createImageParserService.saveCache](<../../image-parser-service.cjs.md#s-a0a8635c6101e0d6>) — [electron/image-parser-service.cjs:165](<../../../../../../../electron/image-parser-service.cjs#L165>)
- [createImageParserService.saveCache](<../../image-parser-service.cjs.md#s-a0a8635c6101e0d6>) — [electron/image-parser-service.cjs:169](<../../../../../../../electron/image-parser-service.cjs#L169>)

Unresolved / external call sites: 10.

- path.dirname — external-or-dynamic-dispatch; [electron/core/persistence/json-store.cjs:88](<../../../../../../../electron/core/persistence/json-store.cjs#L88>)
- randomUUID — external-or-dynamic-dispatch; [electron/core/persistence/json-store.cjs:90](<../../../../../../../electron/core/persistence/json-store.cjs#L90>)
- fs.open — external-or-dynamic-dispatch; [electron/core/persistence/json-store.cjs:92](<../../../../../../../electron/core/persistence/json-store.cjs#L92>)
- file.writeFile — external-or-dynamic-dispatch; [electron/core/persistence/json-store.cjs:94](<../../../../../../../electron/core/persistence/json-store.cjs#L94>)
- file.sync — external-or-dynamic-dispatch; [electron/core/persistence/json-store.cjs:95](<../../../../../../../electron/core/persistence/json-store.cjs#L95>)
- file.close — external-or-dynamic-dispatch; [electron/core/persistence/json-store.cjs:97](<../../../../../../../electron/core/persistence/json-store.cjs#L97>)
- fs.readFile — external-or-dynamic-dispatch; [electron/core/persistence/json-store.cjs:102](<../../../../../../../electron/core/persistence/json-store.cjs#L102>)
- Error — external-or-dynamic-dispatch; [electron/core/persistence/json-store.cjs:107](<../../../../../../../electron/core/persistence/json-store.cjs#L107>)
- 2 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/domains/entity/worldview-store.test.cjs:127](<../../../../../../../electron/domains/entity/worldview-store.test.cjs#L127>) — static-call-site; coverage not established.
- [tests/integration/architecture-contract.test.cjs:221](<../../../../../../../tests/integration/architecture-contract.test.cjs#L221>) — file-import-only; coverage not established.
