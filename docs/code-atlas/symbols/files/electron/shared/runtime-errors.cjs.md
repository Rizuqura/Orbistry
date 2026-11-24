# electron/shared/runtime-errors.cjs: symbols

[Atlas](<../../../../README.md>) / [Shared deterministic infrastructure](<../../../../modules/shared.md>) / [electron/shared/runtime-errors.cjs:1](<../../../../../../electron/shared/runtime-errors.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/shared/runtime-errors.cjs](<runtime-errors.cjs.md#s-53024256edde6f12>) (Module)
- [MODEL_ERROR_CODES](<runtime-errors.cjs.md#s-262816768b83f7e9>) (VariableDeclaration)
- [ModelRuntimeError](<runtime-errors.cjs.md#s-b9a3b5e0a5b32162>) (ClassDeclaration)
- [ModelRuntimeError.constructor](<runtime-errors.cjs.md#s-66422d0cde496ce3>) (Constructor)
- [serializeModelError](<runtime-errors.cjs.md#s-0a992a8fcd9686e4>) (FunctionDeclaration)

<a id="s-53024256edde6f12"></a>

## electron/shared/runtime-errors.cjs

[electron/shared/runtime-errors.cjs:1](<../../../../../../electron/shared/runtime-errors.cjs#L1>) · Module · production · [Shared deterministic infrastructure](<../../../../modules/shared.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [tests/integration/architecture-contract.test.cjs:217](<../../../../../../tests/integration/architecture-contract.test.cjs#L217>) — file-import-only; coverage not established.

<a id="s-262816768b83f7e9"></a>

## MODEL_ERROR_CODES

[electron/shared/runtime-errors.cjs:2](<../../../../../../electron/shared/runtime-errors.cjs#L2>) · VariableDeclaration · production · [Shared deterministic infrastructure](<../../../../modules/shared.md>)

Shared runtime error/serialization contract. Legacy ModelRuntimeError names and codes remain unchanged for saved records and IPC consumers.

Purpose evidence: jsdoc.

Exported as: MODEL_ERROR_CODES ([electron/shared/runtime-errors.cjs:1](<../../../../../../electron/shared/runtime-errors.cjs#L1>)), MODEL_ERROR_CODES ([electron/ai/model-errors.cjs:1](<../../../../../../electron/ai/model-errors.cjs#L1>)).

Lexical owner: [electron/shared/runtime-errors.cjs](<runtime-errors.cjs.md#s-53024256edde6f12>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- Object.freeze — external-or-dynamic-dispatch; [electron/shared/runtime-errors.cjs:2](<../../../../../../electron/shared/runtime-errors.cjs#L2>)

**Related tests / acceptance harnesses:**

- [tests/integration/architecture-contract.test.cjs:217](<../../../../../../tests/integration/architecture-contract.test.cjs#L217>) — file-import-only; coverage not established.

<a id="s-b9a3b5e0a5b32162"></a>

## ModelRuntimeError

[electron/shared/runtime-errors.cjs:36](<../../../../../../electron/shared/runtime-errors.cjs#L36>) · ClassDeclaration · production · [Shared deterministic infrastructure](<../../../../modules/shared.md>)

Preserves the application/IPC error constructor and legacy ModelRuntimeError name across core and AI imports. No logging or persistence occurs.

Purpose evidence: jsdoc.

Exported as: ModelRuntimeError ([electron/shared/runtime-errors.cjs:1](<../../../../../../electron/shared/runtime-errors.cjs#L1>)), ModelRuntimeError ([electron/ai/model-errors.cjs:1](<../../../../../../electron/ai/model-errors.cjs#L1>)).

Lexical owner: [electron/shared/runtime-errors.cjs](<runtime-errors.cjs.md#s-53024256edde6f12>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [tests/integration/architecture-contract.test.cjs:217](<../../../../../../tests/integration/architecture-contract.test.cjs#L217>) — file-import-only; coverage not established.

<a id="s-66422d0cde496ce3"></a>

## ModelRuntimeError.constructor

[electron/shared/runtime-errors.cjs:38](<../../../../../../electron/shared/runtime-errors.cjs#L38>) · Constructor · production · [Shared deterministic infrastructure](<../../../../modules/shared.md>)

Captures a stable code, safe message and caller-redacted details for existing serializers.

Purpose evidence: jsdoc.

Lexical owner: [ModelRuntimeError](<runtime-errors.cjs.md#s-b9a3b5e0a5b32162>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| code | any | compiler-inferred | required |
| message | any | compiler-inferred | required |
| details | {} | compiler-inferred | optional, default present |

Returns: ModelRuntimeError (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [invalid](<../ai/agents/agent-construction.cjs.md#s-9e0068ef74a008e9>) — [electron/ai/agents/agent-construction.cjs:217](<../../../../../../electron/ai/agents/agent-construction.cjs#L217>)
- [validateCustomInstructions](<../ai/agents/agent-policy.cjs.md#s-0dbc6d2e83719bfc>) — [electron/ai/agents/agent-policy.cjs:15](<../../../../../../electron/ai/agents/agent-policy.cjs#L15>)
- [validateCustomInstructions](<../ai/agents/agent-policy.cjs.md#s-0dbc6d2e83719bfc>) — [electron/ai/agents/agent-policy.cjs:24](<../../../../../../electron/ai/agents/agent-policy.cjs#L24>)
- [AgentStore.archive.&lt;anonymous@180:23&gt;](<../ai/agents/agent-store.cjs.md#s-d4ed7663c6efd3ff>) — [electron/ai/agents/agent-store.cjs:185](<../../../../../../electron/ai/agents/agent-store.cjs#L185>)
- [AgentStore.create.&lt;anonymous@194:23&gt;](<../ai/agents/agent-store.cjs.md#s-9bcf573f56449023>) — [electron/ai/agents/agent-store.cjs:208](<../../../../../../electron/ai/agents/agent-store.cjs#L208>)
- [AgentStore.create.&lt;anonymous@194:23&gt;](<../ai/agents/agent-store.cjs.md#s-9bcf573f56449023>) — [electron/ai/agents/agent-store.cjs:225](<../../../../../../electron/ai/agents/agent-store.cjs#L225>)
- [AgentStore.get](<../ai/agents/agent-store.cjs.md#s-feff3820609fc57c>) — [electron/ai/agents/agent-store.cjs:253](<../../../../../../electron/ai/agents/agent-store.cjs#L253>)
- [AgentStore.backdropAsset](<../ai/agents/agent-store.cjs.md#s-3f40538fbdbbeacd>) — [electron/ai/agents/agent-store.cjs:351](<../../../../../../electron/ai/agents/agent-store.cjs#L351>)
- [AgentStore.constructionAvatar](<../ai/agents/agent-store.cjs.md#s-7aaef4f6575aff33>) — [electron/ai/agents/agent-store.cjs:372](<../../../../../../electron/ai/agents/agent-store.cjs#L372>)
- [AgentStore.saveConstruction.&lt;anonymous@389:23&gt;](<../ai/agents/agent-store.cjs.md#s-5d9fe7550818f8a0>) — [electron/ai/agents/agent-store.cjs:408](<../../../../../../electron/ai/agents/agent-store.cjs#L408>)
- [AgentStore.saveConstruction.&lt;anonymous@389:23&gt;](<../ai/agents/agent-store.cjs.md#s-5d9fe7550818f8a0>) — [electron/ai/agents/agent-store.cjs:410](<../../../../../../electron/ai/agents/agent-store.cjs#L410>)
- [AgentStore.saveConstruction.&lt;anonymous@389:23&gt;](<../ai/agents/agent-store.cjs.md#s-5d9fe7550818f8a0>) — [electron/ai/agents/agent-store.cjs:444](<../../../../../../electron/ai/agents/agent-store.cjs#L444>)
- [AgentStore.decodePicture](<../ai/agents/agent-store.cjs.md#s-2b527d12d06d9f39>) — [electron/ai/agents/agent-store.cjs:503](<../../../../../../electron/ai/agents/agent-store.cjs#L503>)
- [AgentStore.decodePicture](<../ai/agents/agent-store.cjs.md#s-2b527d12d06d9f39>) — [electron/ai/agents/agent-store.cjs:518](<../../../../../../electron/ai/agents/agent-store.cjs#L518>)
- [AgentStore.prepareBackdrop](<../ai/agents/agent-store.cjs.md#s-1bfecd82d2554bef>) — [electron/ai/agents/agent-store.cjs:526](<../../../../../../electron/ai/agents/agent-store.cjs#L526>)
- [AgentStore.prepareBackdrop](<../ai/agents/agent-store.cjs.md#s-1bfecd82d2554bef>) — [electron/ai/agents/agent-store.cjs:553](<../../../../../../electron/ai/agents/agent-store.cjs#L553>)
- [AgentStore.prepareAvatar](<../ai/agents/agent-store.cjs.md#s-04663720655bccdc>) — [electron/ai/agents/agent-store.cjs:573](<../../../../../../electron/ai/agents/agent-store.cjs#L573>)
- [AgentStore.save.&lt;anonymous@580:23&gt;](<../ai/agents/agent-store.cjs.md#s-92c7ebeb214bb98f>) — [electron/ai/agents/agent-store.cjs:597](<../../../../../../electron/ai/agents/agent-store.cjs#L597>)
- [AgentStore.save.&lt;anonymous@580:23&gt;](<../ai/agents/agent-store.cjs.md#s-92c7ebeb214bb98f>) — [electron/ai/agents/agent-store.cjs:606](<../../../../../../electron/ai/agents/agent-store.cjs#L606>)
- [inactiveIntegration](<../ai/agents/assigned-chat.cjs.md#s-b33402ed08f2094c>) — [electron/ai/agents/assigned-chat.cjs:10](<../../../../../../electron/ai/agents/assigned-chat.cjs#L10>)
- [runAssignedTurn](<../ai/agents/assigned-chat.cjs.md#s-d49a3f162aa849c6>) — [electron/ai/agents/assigned-chat.cjs:37](<../../../../../../electron/ai/agents/assigned-chat.cjs#L37>)
- [runAssignedTurn](<../ai/agents/assigned-chat.cjs.md#s-d49a3f162aa849c6>) — [electron/ai/agents/assigned-chat.cjs:245](<../../../../../../electron/ai/agents/assigned-chat.cjs#L245>)
- [invalid](<../ai/agents/construction-context.cjs.md#s-57710d0ea2630614>) — [electron/ai/agents/construction-context.cjs:15](<../../../../../../electron/ai/agents/construction-context.cjs#L15>)
- [parseAction](<../ai/agents/entity-agent-protocol.cjs.md#s-6c6eda665c0d306a>) — [electron/ai/agents/entity-agent-protocol.cjs:99](<../../../../../../electron/ai/agents/entity-agent-protocol.cjs#L99>)
- [parseAction](<../ai/agents/entity-agent-protocol.cjs.md#s-6c6eda665c0d306a>) — [electron/ai/agents/entity-agent-protocol.cjs:115](<../../../../../../electron/ai/agents/entity-agent-protocol.cjs#L115>)
- [parseAction](<../ai/agents/entity-agent-protocol.cjs.md#s-6c6eda665c0d306a>) — [electron/ai/agents/entity-agent-protocol.cjs:125](<../../../../../../electron/ai/agents/entity-agent-protocol.cjs#L125>)
- [parseAction](<../ai/agents/entity-agent-protocol.cjs.md#s-6c6eda665c0d306a>) — [electron/ai/agents/entity-agent-protocol.cjs:131](<../../../../../../electron/ai/agents/entity-agent-protocol.cjs#L131>)
- [runEntityProtocol](<../ai/agents/entity-agent-protocol.cjs.md#s-5093e0259461bc43>) — [electron/ai/agents/entity-agent-protocol.cjs:223](<../../../../../../electron/ai/agents/entity-agent-protocol.cjs#L223>)
- [runEntityProtocol](<../ai/agents/entity-agent-protocol.cjs.md#s-5093e0259461bc43>) — [electron/ai/agents/entity-agent-protocol.cjs:253](<../../../../../../electron/ai/agents/entity-agent-protocol.cjs#L253>)
- [priceEvidence](<../ai/agents/entity-agent-protocol.cjs.md#s-db43e3ad616645c2>) — [electron/ai/agents/entity-agent-protocol.cjs:273](<../../../../../../electron/ai/agents/entity-agent-protocol.cjs#L273>)
- [EntityAgentService.refreshIdentity](<../ai/agents/entity-agents.cjs.md#s-a9f1ae470a0da166>) — [electron/ai/agents/entity-agents.cjs:544](<../../../../../../electron/ai/agents/entity-agents.cjs#L544>)
- [EntityAgentService.createRequest](<../ai/agents/entity-agents.cjs.md#s-17dee7e0acb1a623>) — [electron/ai/agents/entity-agents.cjs:974](<../../../../../../electron/ai/agents/entity-agents.cjs#L974>)
- [EntityAgentService.createRequest](<../ai/agents/entity-agents.cjs.md#s-17dee7e0acb1a623>) — [electron/ai/agents/entity-agents.cjs:985](<../../../../../../electron/ai/agents/entity-agents.cjs#L985>)
- [EntityAgentService.consumeRequest](<../ai/agents/entity-agents.cjs.md#s-d6f389f11aad767e>) — [electron/ai/agents/entity-agents.cjs:1077](<../../../../../../electron/ai/agents/entity-agents.cjs#L1077>)
- [EntityAgentService.consumeRequest](<../ai/agents/entity-agents.cjs.md#s-d6f389f11aad767e>) — [electron/ai/agents/entity-agents.cjs:1084](<../../../../../../electron/ai/agents/entity-agents.cjs#L1084>)
- [EntityAgentService.consumeRequest](<../ai/agents/entity-agents.cjs.md#s-d6f389f11aad767e>) — [electron/ai/agents/entity-agents.cjs:1107](<../../../../../../electron/ai/agents/entity-agents.cjs#L1107>)
- [EntityAgentService.toolRuntime.dispatch](<../ai/agents/entity-agents.cjs.md#s-c98f87fd645bdd3b>) — [electron/ai/agents/entity-agents.cjs:1329](<../../../../../../electron/ai/agents/entity-agents.cjs#L1329>)
- [EntityAgentService.toolRuntime.dispatch](<../ai/agents/entity-agents.cjs.md#s-c98f87fd645bdd3b>) — [electron/ai/agents/entity-agents.cjs:1335](<../../../../../../electron/ai/agents/entity-agents.cjs#L1335>)
- [EntityAgentService.sendTurn](<../ai/agents/entity-agents.cjs.md#s-5e1a2fcddec46961>) — [electron/ai/agents/entity-agents.cjs:1528](<../../../../../../electron/ai/agents/entity-agents.cjs#L1528>)
- [EntityAgentService.sendTurn](<../ai/agents/entity-agents.cjs.md#s-5e1a2fcddec46961>) — [electron/ai/agents/entity-agents.cjs:1565](<../../../../../../electron/ai/agents/entity-agents.cjs#L1565>)
- [EntityAgentService.sendTurn.&lt;anonymous@1574:9&gt;](<../ai/agents/entity-agents.cjs.md#s-500bdf972ea67591>) — [electron/ai/agents/entity-agents.cjs:1576](<../../../../../../electron/ai/agents/entity-agents.cjs#L1576>)
- [EntityAgentService.executeBound](<../ai/agents/entity-agents.cjs.md#s-05ab3da1509c33bf>) — [electron/ai/agents/entity-agents.cjs:1909](<../../../../../../electron/ai/agents/entity-agents.cjs#L1909>)
- [denied](<../ai/agents/entity-jurisdiction.cjs.md#s-ec75dbd8b94ac8b1>) — [electron/ai/agents/entity-jurisdiction.cjs:9](<../../../../../../electron/ai/agents/entity-jurisdiction.cjs#L9>)
- [issueDispatch.assert](<../ai/agents/entity-jurisdiction.cjs.md#s-51a33d4ddd65f6d5>) — [electron/ai/agents/entity-jurisdiction.cjs:68](<../../../../../../electron/ai/agents/entity-jurisdiction.cjs#L68>)
- [connectorMetadata](<../ai/agents/entity-jurisdiction.cjs.md#s-b6a80bf6793f82d4>) — [electron/ai/agents/entity-jurisdiction.cjs:108](<../../../../../../electron/ai/agents/entity-jurisdiction.cjs#L108>)
- [assertFields](<../ai/chat/chat-service.cjs.md#s-b1dfcc9ab99869fc>) — [electron/ai/chat/chat-service.cjs:18](<../../../../../../electron/ai/chat/chat-service.cjs#L18>)
- [ChatService.assertIdle](<../ai/chat/chat-service.cjs.md#s-f029aee4d75b796d>) — [electron/ai/chat/chat-service.cjs:52](<../../../../../../electron/ai/chat/chat-service.cjs#L52>)
- [ChatService.cancel](<../ai/chat/chat-service.cjs.md#s-5e5f3dca7d74aa4e>) — [electron/ai/chat/chat-service.cjs:118](<../../../../../../electron/ai/chat/chat-service.cjs#L118>)
- [ChatService.editBox.&lt;anonymous@194:27&gt;](<../ai/chat/chat-service.cjs.md#s-d5c6f778580052fa>) — [electron/ai/chat/chat-service.cjs:207](<../../../../../../electron/ai/chat/chat-service.cjs#L207>)
- [ChatService.editBox.&lt;anonymous@194:27&gt;](<../ai/chat/chat-service.cjs.md#s-d5c6f778580052fa>) — [electron/ai/chat/chat-service.cjs:214](<../../../../../../electron/ai/chat/chat-service.cjs#L214>)
- [ChatService.editBox.&lt;anonymous@194:27&gt;](<../ai/chat/chat-service.cjs.md#s-d5c6f778580052fa>) — [electron/ai/chat/chat-service.cjs:223](<../../../../../../electron/ai/chat/chat-service.cjs#L223>)
- [ChatService.boundScope](<../ai/chat/chat-service.cjs.md#s-8597f875e9166aee>) — [electron/ai/chat/chat-service.cjs:237](<../../../../../../electron/ai/chat/chat-service.cjs#L237>)
- [ChatService.boundScope](<../ai/chat/chat-service.cjs.md#s-8597f875e9166aee>) — [electron/ai/chat/chat-service.cjs:285](<../../../../../../electron/ai/chat/chat-service.cjs#L285>)
- [ChatService.create.&lt;anonymous@296:27&gt;](<../ai/chat/chat-service.cjs.md#s-f9fdaa7c9353ecf7>) — [electron/ai/chat/chat-service.cjs:315](<../../../../../../electron/ai/chat/chat-service.cjs#L315>)
- [ChatService.create.&lt;anonymous@296:27&gt;](<../ai/chat/chat-service.cjs.md#s-f9fdaa7c9353ecf7>) — [electron/ai/chat/chat-service.cjs:322](<../../../../../../electron/ai/chat/chat-service.cjs#L322>)
- [ChatService.rename](<../ai/chat/chat-service.cjs.md#s-64f964f454b33271>) — [electron/ai/chat/chat-service.cjs:348](<../../../../../../electron/ai/chat/chat-service.cjs#L348>)
- [ChatService.run](<../ai/chat/chat-service.cjs.md#s-bed13c7861a5021f>) — [electron/ai/chat/chat-service.cjs:415](<../../../../../../electron/ai/chat/chat-service.cjs#L415>)
- [validId](<../ai/chat/conversation-store.cjs.md#s-24af4829fceb24b2>) — [electron/ai/chat/conversation-store.cjs:17](<../../../../../../electron/ai/chat/conversation-store.cjs#L17>)
- [applyRun](<../ai/chat/conversation-store.cjs.md#s-3844eb73bb69ccca>) — [electron/ai/chat/conversation-store.cjs:234](<../../../../../../electron/ai/chat/conversation-store.cjs#L234>)
- [ConversationStore.read](<../ai/chat/conversation-store.cjs.md#s-6cc833b9d3e06e6b>) — [electron/ai/chat/conversation-store.cjs:323](<../../../../../../electron/ai/chat/conversation-store.cjs#L323>)
- [ConversationStore.recover.&lt;anonymous@438:35&gt;](<../ai/chat/conversation-store.cjs.md#s-ee797cd3723d5e5d>) — [electron/ai/chat/conversation-store.cjs:452](<../../../../../../electron/ai/chat/conversation-store.cjs#L452>)
- [fail](<../ai/chronoz-adapter.cjs.md#s-78ba834163696bf9>) — [electron/ai/chronoz-adapter.cjs:37](<../../../../../../electron/ai/chronoz-adapter.cjs#L37>)
- [runTrigger](<../ai/chronoz-adapter.cjs.md#s-1578e21474f428b1>) — [electron/ai/chronoz-adapter.cjs:210](<../../../../../../electron/ai/chronoz-adapter.cjs#L210>)
- [runTrigger.&lt;anonymous@212:22&gt;.stop](<../ai/chronoz-adapter.cjs.md#s-b9d8f45a2cb04660>) — [electron/ai/chronoz-adapter.cjs:228](<../../../../../../electron/ai/chronoz-adapter.cjs#L228>)
- [runTrigger.&lt;anonymous@212:22&gt;.&lt;anonymous@259:25&gt;](<../ai/chronoz-adapter.cjs.md#s-fbe7a7ab6baf91c1>) — [electron/ai/chronoz-adapter.cjs:261](<../../../../../../electron/ai/chronoz-adapter.cjs#L261>)
- [runTrigger.&lt;anonymous@212:22&gt;.&lt;anonymous@290:25&gt;](<../ai/chronoz-adapter.cjs.md#s-20fa4351ecbe3fc5>) — [electron/ai/chronoz-adapter.cjs:323](<../../../../../../electron/ai/chronoz-adapter.cjs#L323>)
- [runTrigger.&lt;anonymous@212:22&gt;](<../ai/chronoz-adapter.cjs.md#s-fbe41575cd573568>) — [electron/ai/chronoz-adapter.cjs:333](<../../../../../../electron/ai/chronoz-adapter.cjs#L333>)
- [ContextBoxStore.get](<../ai/context-box-store.cjs.md#s-e24f370c40577a21>) — [electron/ai/context-box-store.cjs:81](<../../../../../../electron/ai/context-box-store.cjs#L81>)
- [ContextBoxStore.name](<../ai/context-box-store.cjs.md#s-fc981955a0e0f007>) — [electron/ai/context-box-store.cjs:89](<../../../../../../electron/ai/context-box-store.cjs#L89>)
- [ContextBoxStore.name](<../ai/context-box-store.cjs.md#s-fc981955a0e0f007>) — [electron/ai/context-box-store.cjs:99](<../../../../../../electron/ai/context-box-store.cjs#L99>)
- [ContextBoxStore.rename.&lt;anonymous@134:23&gt;](<../ai/context-box-store.cjs.md#s-5d9a82b968a34951>) — [electron/ai/context-box-store.cjs:138](<../../../../../../electron/ai/context-box-store.cjs#L138>)
- [ContextBoxStore.edit.&lt;anonymous@149:23&gt;](<../ai/context-box-store.cjs.md#s-56016dd04134b4e4>) — [electron/ai/context-box-store.cjs:153](<../../../../../../electron/ai/context-box-store.cjs#L153>)
- [ContextBoxStore.relink.&lt;anonymous@181:26&gt;](<../ai/context-box-store.cjs.md#s-cd8cfe5540a02ab3>) — [electron/ai/context-box-store.cjs:189](<../../../../../../electron/ai/context-box-store.cjs#L189>)
- [contextIdentity](<../ai/context-identity.cjs.md#s-9645374bbdc64d1f>) — [electron/ai/context-identity.cjs:26](<../../../../../../electron/ai/context-identity.cjs#L26>)
- [validateContextIdentity](<../ai/context-identity.cjs.md#s-074b8d05ecfc17f5>) — [electron/ai/context-identity.cjs:60](<../../../../../../electron/ai/context-identity.cjs#L60>)
- [validateEngineIdentity](<../ai/context-identity.cjs.md#s-711136150fa5d9a3>) — [electron/ai/context-identity.cjs:78](<../../../../../../electron/ai/context-identity.cjs#L78>)
- [validateStandaloneIdentity](<../ai/context-identity.cjs.md#s-8a60b537748757f1>) — [electron/ai/context-identity.cjs:95](<../../../../../../electron/ai/context-identity.cjs#L95>)
- [validateCredentialState](<../ai/credential-store.cjs.md#s-f2db6513cc372f52>) — [electron/ai/credential-store.cjs:52](<../../../../../../electron/ai/credential-store.cjs#L52>)
- [CredentialStore.read](<../ai/credential-store.cjs.md#s-d15c3cc48d069164>) — [electron/ai/credential-store.cjs:80](<../../../../../../electron/ai/credential-store.cjs#L80>)
- [CredentialStore.save.&lt;anonymous@96:23&gt;](<../ai/credential-store.cjs.md#s-7e005c5bc580859a>) — [electron/ai/credential-store.cjs:98](<../../../../../../electron/ai/credential-store.cjs#L98>)
- [CredentialStore.save.&lt;anonymous@96:23&gt;](<../ai/credential-store.cjs.md#s-7e005c5bc580859a>) — [electron/ai/credential-store.cjs:108](<../../../../../../electron/ai/credential-store.cjs#L108>)
- [CredentialStore.get](<../ai/credential-store.cjs.md#s-0c057213a95118a0>) — [electron/ai/credential-store.cjs:132](<../../../../../../electron/ai/credential-store.cjs#L132>)
- [CredentialStore.get](<../ai/credential-store.cjs.md#s-0c057213a95118a0>) — [electron/ai/credential-store.cjs:137](<../../../../../../electron/ai/credential-store.cjs#L137>)
- [CredentialStore.get](<../ai/credential-store.cjs.md#s-0c057213a95118a0>) — [electron/ai/credential-store.cjs:149](<../../../../../../electron/ai/credential-store.cjs#L149>)
- [inspectDatasetAnswer](<../ai/dataset-evidence.cjs.md#s-5b66ea9d9a17227b>) — [electron/ai/dataset-evidence.cjs:156](<../../../../../../electron/ai/dataset-evidence.cjs#L156>)
- [planDataset](<../ai/dataset-planner.cjs.md#s-9b1e48bfd220f829>) — [electron/ai/dataset-planner.cjs:275](<../../../../../../electron/ai/dataset-planner.cjs#L275>)
- [createDatasetSession.close](<../ai/dataset-session.cjs.md#s-c00577a78da67ea4>) — [electron/ai/dataset-session.cjs:25](<../../../../../../electron/ai/dataset-session.cjs#L25>)
- [createDatasetSession.&lt;anonymous@36:24&gt;](<../ai/dataset-session.cjs.md#s-c480ea2557442f67>) — [electron/ai/dataset-session.cjs:41](<../../../../../../electron/ai/dataset-session.cjs#L41>)
- [createDatasetSession.&lt;anonymous@44:22&gt;](<../ai/dataset-session.cjs.md#s-3e24792f305b1b5c>) — [electron/ai/dataset-session.cjs:46](<../../../../../../electron/ai/dataset-session.cjs#L46>)
- [createDatasetSession.&lt;anonymous@52:21&gt;](<../ai/dataset-session.cjs.md#s-92e2fd6ded6a0b9c>) — [electron/ai/dataset-session.cjs:56](<../../../../../../electron/ai/dataset-session.cjs#L56>)
- [createDatasetSession.call](<../ai/dataset-session.cjs.md#s-417114a38f1c6cd4>) — [electron/ai/dataset-session.cjs:64](<../../../../../../electron/ai/dataset-session.cjs#L64>)
- [invalid](<../ai/engine-chat.cjs.md#s-55e9ade0062b600c>) — [electron/ai/engine-chat.cjs:31](<../../../../../../electron/ai/engine-chat.cjs#L31>)
- [selectTool](<../ai/engine-chat.cjs.md#s-14e66eaa8df6d33c>) — [electron/ai/engine-chat.cjs:104](<../../../../../../electron/ai/engine-chat.cjs#L104>)
- [selectTool](<../ai/engine-chat.cjs.md#s-14e66eaa8df6d33c>) — [electron/ai/engine-chat.cjs:241](<../../../../../../electron/ai/engine-chat.cjs#L241>)
- [selectTool](<../ai/engine-chat.cjs.md#s-14e66eaa8df6d33c>) — [electron/ai/engine-chat.cjs:247](<../../../../../../electron/ai/engine-chat.cjs#L247>)
- [runEngineTurn](<../ai/engine-chat.cjs.md#s-5191968f4b9121bd>) — [electron/ai/engine-chat.cjs:365](<../../../../../../electron/ai/engine-chat.cjs#L365>)
- [runEngineTurn](<../ai/engine-chat.cjs.md#s-5191968f4b9121bd>) — [electron/ai/engine-chat.cjs:370](<../../../../../../electron/ai/engine-chat.cjs#L370>)
- [runEngineTurn](<../ai/engine-chat.cjs.md#s-5191968f4b9121bd>) — [electron/ai/engine-chat.cjs:471](<../../../../../../electron/ai/engine-chat.cjs#L471>)
- [denied](<../ai/engine-registry.cjs.md#s-8a1184d3181174dc>) — [electron/ai/engine-registry.cjs:38](<../../../../../../electron/ai/engine-registry.cjs#L38>)
- [EngineRegistry.exclusive](<../ai/engine-registry.cjs.md#s-554a6859398689fa>) — [electron/ai/engine-registry.cjs:109](<../../../../../../electron/ai/engine-registry.cjs#L109>)
- [EngineRegistry.configure.&lt;anonymous@132:34&gt;](<../ai/engine-registry.cjs.md#s-688aaee9ba17a08f>) — [electron/ai/engine-registry.cjs:153](<../../../../../../electron/ai/engine-registry.cjs#L153>)
- [EngineRegistry.execute.&lt;anonymous@251:7&gt;](<../ai/engine-registry.cjs.md#s-b3a7dd18c41f429c>) — [electron/ai/engine-registry.cjs:285](<../../../../../../electron/ai/engine-registry.cjs#L285>)
- [EngineRegistry.execute.&lt;anonymous@251:7&gt;](<../ai/engine-registry.cjs.md#s-b3a7dd18c41f429c>) — [electron/ai/engine-registry.cjs:338](<../../../../../../electron/ai/engine-registry.cjs#L338>)
- [&lt;anonymous@578:102&gt;.&lt;anonymous@589:32&gt;](<../ai/front-office-engine.test.cjs.md#s-0869bf3a68d35020>) — [electron/ai/front-office-engine.test.cjs:591](<../../../../../../electron/ai/front-office-engine.test.cjs#L591>)
- [&lt;anonymous@578:102&gt;.&lt;anonymous@599:50&gt;](<../ai/front-office-engine.test.cjs.md#s-16a2e28f8132322d>) — [electron/ai/front-office-engine.test.cjs:602](<../../../../../../electron/ai/front-office-engine.test.cjs#L602>)
- [&lt;anonymous@609:80&gt;.&lt;anonymous@616:30&gt;](<../ai/front-office-engine.test.cjs.md#s-5f49dab44cdee71d>) — [electron/ai/front-office-engine.test.cjs:617](<../../../../../../electron/ai/front-office-engine.test.cjs#L617>)
- [&lt;anonymous@625:78&gt;.&lt;anonymous@632:50&gt;](<../ai/front-office-engine.test.cjs.md#s-cbdecbacfe276937>) — [electron/ai/front-office-engine.test.cjs:634](<../../../../../../electron/ai/front-office-engine.test.cjs#L634>)
- [&lt;anonymous@641:88&gt;](<../ai/front-office-engine.test.cjs.md#s-5e74ba9bdbb9f974>) — [electron/ai/front-office-engine.test.cjs:650](<../../../../../../electron/ai/front-office-engine.test.cjs#L650>)
- [&lt;anonymous@761:83&gt;](<../ai/front-office-engine.test.cjs.md#s-eb98cc7598b54f65>) — [electron/ai/front-office-engine.test.cjs:763](<../../../../../../electron/ai/front-office-engine.test.cjs#L763>)
- [&lt;anonymous@846:93&gt;.&lt;anonymous@848:30&gt;](<../ai/front-office-engine.test.cjs.md#s-72e015d8821bccd0>) — [electron/ai/front-office-engine.test.cjs:851](<../../../../../../electron/ai/front-office-engine.test.cjs#L851>)
- [&lt;anonymous@908:86&gt;.&lt;anonymous@913:18&gt;](<../ai/front-office-engine.test.cjs.md#s-b7aa8d7652bab160>) — [electron/ai/front-office-engine.test.cjs:915](<../../../../../../electron/ai/front-office-engine.test.cjs#L915>)
- [&lt;anonymous@972:91&gt;.&lt;anonymous@973:30&gt;](<../ai/front-office-engine.test.cjs.md#s-8d45f6a10c4750ab>) — [electron/ai/front-office-engine.test.cjs:975](<../../../../../../electron/ai/front-office-engine.test.cjs#L975>)
- [budgetHistory](<../ai/history-budget.cjs.md#s-0c3553c9658a4cf5>) — [electron/ai/history-budget.cjs:10](<../../../../../../electron/ai/history-budget.cjs#L10>)
- [invalid](<../ai/inference/prompt-builder.cjs.md#s-3198e2eda96d4d7a>) — [electron/ai/inference/prompt-builder.cjs:20](<../../../../../../electron/ai/inference/prompt-builder.cjs#L20>)
- [validateSource](<../ai/inference/prompt-builder.cjs.md#s-83b7cc5039dd7f7b>) — [electron/ai/inference/prompt-builder.cjs:74](<../../../../../../electron/ai/inference/prompt-builder.cjs#L74>)
- [buildContextMessages](<../ai/inference/prompt-builder.cjs.md#s-241c37ad734d8bcd>) — [electron/ai/inference/prompt-builder.cjs:126](<../../../../../../electron/ai/inference/prompt-builder.cjs#L126>)
- [buildContextMessages.&lt;anonymous@130:40&gt;](<../ai/inference/prompt-builder.cjs.md#s-c39cb875390db842>) — [electron/ai/inference/prompt-builder.cjs:141](<../../../../../../electron/ai/inference/prompt-builder.cjs#L141>)
- [validateAnswer](<../ai/inference/response-validation.cjs.md#s-21e2e91befa4c26f>) — [electron/ai/inference/response-validation.cjs:26](<../../../../../../electron/ai/inference/response-validation.cjs#L26>)
- [validateAnswer](<../ai/inference/response-validation.cjs.md#s-21e2e91befa4c26f>) — [electron/ai/inference/response-validation.cjs:54](<../../../../../../electron/ai/inference/response-validation.cjs#L54>)
- [validateAnswer](<../ai/inference/response-validation.cjs.md#s-21e2e91befa4c26f>) — [electron/ai/inference/response-validation.cjs:80](<../../../../../../electron/ai/inference/response-validation.cjs#L80>)
- [registerAiIpc.handle.&lt;anonymous@91:34&gt;](<../ai/ipc.cjs.md#s-06103fd7a645f420>) — [electron/ai/ipc.cjs:106](<../../../../../../electron/ai/ipc.cjs#L106>)
- [registerAiIpc.handle.&lt;anonymous@91:34&gt;](<../ai/ipc.cjs.md#s-06103fd7a645f420>) — [electron/ai/ipc.cjs:121](<../../../../../../electron/ai/ipc.cjs#L121>)
- [registerAiIpc.handle.&lt;anonymous@91:34&gt;](<../ai/ipc.cjs.md#s-06103fd7a645f420>) — [electron/ai/ipc.cjs:130](<../../../../../../electron/ai/ipc.cjs#L130>)
- [registerAiIpc.handle.&lt;anonymous@91:34&gt;](<../ai/ipc.cjs.md#s-06103fd7a645f420>) — [electron/ai/ipc.cjs:135](<../../../../../../electron/ai/ipc.cjs#L135>)
- [registerAiIpc.front](<../ai/ipc.cjs.md#s-4080b33e525d6b0f>) — [electron/ai/ipc.cjs:163](<../../../../../../electron/ai/ipc.cjs#L163>)
- [registerAiIpc.&lt;anonymous@218:24&gt;](<../ai/ipc.cjs.md#s-c39eba2d3d08e0c2>) — [electron/ai/ipc.cjs:220](<../../../../../../electron/ai/ipc.cjs#L220>)
- [registerAiIpc.&lt;anonymous@259:34&gt;](<../ai/ipc.cjs.md#s-50f8ba7563ab7377>) — [electron/ai/ipc.cjs:277](<../../../../../../electron/ai/ipc.cjs#L277>)
- [registerAiIpc.&lt;anonymous@259:34&gt;](<../ai/ipc.cjs.md#s-50f8ba7563ab7377>) — [electron/ai/ipc.cjs:287](<../../../../../../electron/ai/ipc.cjs#L287>)
- [registerAiIpc.&lt;anonymous@362:30&gt;.&lt;anonymous@376:30&gt;.abort](<../ai/ipc.cjs.md#s-ff9eebd0a8f2593a>) — [electron/ai/ipc.cjs:380](<../../../../../../electron/ai/ipc.cjs#L380>)
- [registerAiIpc.&lt;anonymous@462:18&gt;](<../ai/ipc.cjs.md#s-0ecb0379d6241da5>) — [electron/ai/ipc.cjs:465](<../../../../../../electron/ai/ipc.cjs#L465>)
- [&lt;anonymous@9:122&gt;.exclusive](<../ai/ipc.test.cjs.md#s-239639c161be2492>) — [electron/ai/ipc.test.cjs:17](<../../../../../../electron/ai/ipc.test.cjs#L17>)
- [invalid](<../ai/knowledge-store.cjs.md#s-4873dc6495b5d65e>) — [electron/ai/knowledge-store.cjs:75](<../../../../../../electron/ai/knowledge-store.cjs#L75>)
- [validateExperimentalConversation](<../ai/llm-front-office/conversation-manager.cjs.md#s-3193bd9ab35b1def>) — [electron/ai/llm-front-office/conversation-manager.cjs:41](<../../../../../../electron/ai/llm-front-office/conversation-manager.cjs#L41>)
- [validateExperimentalRun](<../ai/llm-front-office/conversation-manager.cjs.md#s-ffc7705100d0fefb>) — [electron/ai/llm-front-office/conversation-manager.cjs:133](<../../../../../../electron/ai/llm-front-office/conversation-manager.cjs#L133>)
- [CapabilityRegistry.read](<../ai/llm-front-office/model-registry.cjs.md#s-a30997c9eee6a3a1>) — [electron/ai/llm-front-office/model-registry.cjs:75](<../../../../../../electron/ai/llm-front-office/model-registry.cjs#L75>)
- [CapabilityRegistry.override.&lt;anonymous@128:23&gt;](<../ai/llm-front-office/model-registry.cjs.md#s-bb2cde6140d48648>) — [electron/ai/llm-front-office/model-registry.cjs:131](<../../../../../../electron/ai/llm-front-office/model-registry.cjs#L131>)
- [CapabilityRegistry.addEvidence.&lt;anonymous@146:23&gt;](<../ai/llm-front-office/model-registry.cjs.md#s-420776679b486be4>) — [electron/ai/llm-front-office/model-registry.cjs:155](<../../../../../../electron/ai/llm-front-office/model-registry.cjs#L155>)
- [routeModels](<../ai/llm-front-office/model-router.cjs.md#s-221cf971a662b0c2>) — [electron/ai/llm-front-office/model-router.cjs:121](<../../../../../../electron/ai/llm-front-office/model-router.cjs#L121>)
- [invalid](<../ai/llm-front-office/provider-gateway.cjs.md#s-6e9f7d882cf67add>) — [electron/ai/llm-front-office/provider-gateway.cjs:43](<../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L43>)
- [consumeStream.event](<../ai/llm-front-office/provider-gateway.cjs.md#s-cca6c94ad44421e6>) — [electron/ai/llm-front-office/provider-gateway.cjs:88](<../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L88>)
- [createLLMClient](<../ai/llm-front-office/provider-gateway.cjs.md#s-865c43e6ea2bf755>) — [electron/ai/llm-front-office/provider-gateway.cjs:288](<../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L288>)
- [ReliabilityController.execute.cancel](<../ai/llm-front-office/reliability.cjs.md#s-798af1876f3865dc>) — [electron/ai/llm-front-office/reliability.cjs:39](<../../../../../../electron/ai/llm-front-office/reliability.cjs#L39>)
- [ReliabilityController.execute.&lt;anonymous@44:7&gt;](<../ai/llm-front-office/reliability.cjs.md#s-26ca4822cb56c80c>) — [electron/ai/llm-front-office/reliability.cjs:46](<../../../../../../electron/ai/llm-front-office/reliability.cjs#L46>)
- [ReliabilityController.execute](<../ai/llm-front-office/reliability.cjs.md#s-aa433ce578b4dcf5>) — [electron/ai/llm-front-office/reliability.cjs:63](<../../../../../../electron/ai/llm-front-office/reliability.cjs#L63>)
- [ReliabilityController.execute](<../ai/llm-front-office/reliability.cjs.md#s-aa433ce578b4dcf5>) — [electron/ai/llm-front-office/reliability.cjs:76](<../../../../../../electron/ai/llm-front-office/reliability.cjs#L76>)
- [ReliabilityController.execute](<../ai/llm-front-office/reliability.cjs.md#s-aa433ce578b4dcf5>) — [electron/ai/llm-front-office/reliability.cjs:156](<../../../../../../electron/ai/llm-front-office/reliability.cjs#L156>)
- [conversationMessages](<../ai/llm-front-office/request-intake.cjs.md#s-5b3f5a0d78c3210f>) — [electron/ai/llm-front-office/request-intake.cjs:21](<../../../../../../electron/ai/llm-front-office/request-intake.cjs#L21>)
- [conversationMessages](<../ai/llm-front-office/request-intake.cjs.md#s-5b3f5a0d78c3210f>) — [electron/ai/llm-front-office/request-intake.cjs:35](<../../../../../../electron/ai/llm-front-office/request-intake.cjs#L35>)
- [validateSchemaDefinition.invalid](<../ai/llm-front-office/response-processor.cjs.md#s-a3aefd282f62552f>) — [electron/ai/llm-front-office/response-processor.cjs:27](<../../../../../../electron/ai/llm-front-office/response-processor.cjs#L27>)
- [processResponse](<../ai/llm-front-office/response-processor.cjs.md#s-ebdd2b90b3896156>) — [electron/ai/llm-front-office/response-processor.cjs:114](<../../../../../../electron/ai/llm-front-office/response-processor.cjs#L114>)
- [processResponse](<../ai/llm-front-office/response-processor.cjs.md#s-ebdd2b90b3896156>) — [electron/ai/llm-front-office/response-processor.cjs:119](<../../../../../../electron/ai/llm-front-office/response-processor.cjs#L119>)
- [FrontOfficeService.config](<../ai/llm-front-office/service.cjs.md#s-95e5d1f18e4f39b6>) — [electron/ai/llm-front-office/service.cjs:59](<../../../../../../electron/ai/llm-front-office/service.cjs#L59>)
- [FrontOfficeService.create.&lt;anonymous@114:35&gt;](<../ai/llm-front-office/service.cjs.md#s-eac939f128022394>) — [electron/ai/llm-front-office/service.cjs:117](<../../../../../../electron/ai/llm-front-office/service.cjs#L117>)
- [FrontOfficeService.run](<../ai/llm-front-office/service.cjs.md#s-3bd2f92cf25a76d2>) — [electron/ai/llm-front-office/service.cjs:331](<../../../../../../electron/ai/llm-front-office/service.cjs#L331>)
- [FrontOfficeService.run.&lt;anonymous@336:9&gt;](<../ai/llm-front-office/service.cjs.md#s-f27cf96faf254130>) — [electron/ai/llm-front-office/service.cjs:338](<../../../../../../electron/ai/llm-front-office/service.cjs#L338>)
- [FrontOfficeService.run](<../ai/llm-front-office/service.cjs.md#s-3bd2f92cf25a76d2>) — [electron/ai/llm-front-office/service.cjs:370](<../../../../../../electron/ai/llm-front-office/service.cjs#L370>)
- [FrontOfficeService.run](<../ai/llm-front-office/service.cjs.md#s-3bd2f92cf25a76d2>) — [electron/ai/llm-front-office/service.cjs:375](<../../../../../../electron/ai/llm-front-office/service.cjs#L375>)
- [FrontOfficeService.run](<../ai/llm-front-office/service.cjs.md#s-3bd2f92cf25a76d2>) — [electron/ai/llm-front-office/service.cjs:403](<../../../../../../electron/ai/llm-front-office/service.cjs#L403>)
- [FrontOfficeService.run](<../ai/llm-front-office/service.cjs.md#s-3bd2f92cf25a76d2>) — [electron/ai/llm-front-office/service.cjs:417](<../../../../../../electron/ai/llm-front-office/service.cjs#L417>)
- [FrontOfficeService.run](<../ai/llm-front-office/service.cjs.md#s-3bd2f92cf25a76d2>) — [electron/ai/llm-front-office/service.cjs:541](<../../../../../../electron/ai/llm-front-office/service.cjs#L541>)
- [FrontOfficeService.run](<../ai/llm-front-office/service.cjs.md#s-3bd2f92cf25a76d2>) — [electron/ai/llm-front-office/service.cjs:697](<../../../../../../electron/ai/llm-front-office/service.cjs#L697>)
- [&lt;anonymous@34:80&gt;.complete](<../ai/model-check.test.cjs.md#s-6d6864e14a8bb1b0>) — [electron/ai/model-check.test.cjs:52](<../../../../../../electron/ai/model-check.test.cjs#L52>)
- [&lt;anonymous@9:85&gt;](<../ai/model-errors.test.cjs.md#s-97d3e16cb74e5af0>) — [electron/ai/model-errors.test.cjs:12](<../../../../../../electron/ai/model-errors.test.cjs#L12>)
- [ModelPullService.start](<../ai/model-pull.cjs.md#s-640cb0eef0657584>) — [electron/ai/model-pull.cjs:18](<../../../../../../electron/ai/model-pull.cjs#L18>)
- [ModelPullService.start](<../ai/model-pull.cjs.md#s-640cb0eef0657584>) — [electron/ai/model-pull.cjs:28](<../../../../../../electron/ai/model-pull.cjs#L28>)
- [ModelRegistry.save.&lt;anonymous@140:23&gt;](<../ai/model-registry.cjs.md#s-cfa467e587954c2f>) — [electron/ai/model-registry.cjs:142](<../../../../../../electron/ai/model-registry.cjs#L142>)
- [ModelRegistry.validateSelection](<../ai/model-registry.cjs.md#s-125d10d68364d877>) — [electron/ai/model-registry.cjs:155](<../../../../../../electron/ai/model-registry.cjs#L155>)
- [ModelRegistry.validateSelection](<../ai/model-registry.cjs.md#s-125d10d68364d877>) — [electron/ai/model-registry.cjs:163](<../../../../../../electron/ai/model-registry.cjs#L163>)
- [ModelRegistry.validateSelection](<../ai/model-registry.cjs.md#s-125d10d68364d877>) — [electron/ai/model-registry.cjs:177](<../../../../../../electron/ai/model-registry.cjs#L177>)
- [ModelRegistry.validateSelection](<../ai/model-registry.cjs.md#s-125d10d68364d877>) — [electron/ai/model-registry.cjs:186](<../../../../../../electron/ai/model-registry.cjs#L186>)
- [ModelRegistry.validateSelection](<../ai/model-registry.cjs.md#s-125d10d68364d877>) — [electron/ai/model-registry.cjs:191](<../../../../../../electron/ai/model-registry.cjs#L191>)
- [ModelRegistry.validateSelection](<../ai/model-registry.cjs.md#s-125d10d68364d877>) — [electron/ai/model-registry.cjs:199](<../../../../../../electron/ai/model-registry.cjs#L199>)
- [contextError](<../ai/orchestrator.cjs.md#s-f99feb9cda1a91ae>) — [electron/ai/orchestrator.cjs:39](<../../../../../../electron/ai/orchestrator.cjs#L39>)
- [validateRequest](<../ai/orchestrator.cjs.md#s-c803e9de14f05d52>) — [electron/ai/orchestrator.cjs:77](<../../../../../../electron/ai/orchestrator.cjs#L77>)
- [validateRequest](<../ai/orchestrator.cjs.md#s-c803e9de14f05d52>) — [electron/ai/orchestrator.cjs:92](<../../../../../../electron/ai/orchestrator.cjs#L92>)
- [validateRequest](<../ai/orchestrator.cjs.md#s-c803e9de14f05d52>) — [electron/ai/orchestrator.cjs:98](<../../../../../../electron/ai/orchestrator.cjs#L98>)
- [validateRequest](<../ai/orchestrator.cjs.md#s-c803e9de14f05d52>) — [electron/ai/orchestrator.cjs:107](<../../../../../../electron/ai/orchestrator.cjs#L107>)
- [validateRequest](<../ai/orchestrator.cjs.md#s-c803e9de14f05d52>) — [electron/ai/orchestrator.cjs:113](<../../../../../../electron/ai/orchestrator.cjs#L113>)
- [validateRequest](<../ai/orchestrator.cjs.md#s-c803e9de14f05d52>) — [electron/ai/orchestrator.cjs:132](<../../../../../../electron/ai/orchestrator.cjs#L132>)
- [createContextOrchestrator.run](<../ai/orchestrator.cjs.md#s-be352215519f7acf>) — [electron/ai/orchestrator.cjs:521](<../../../../../../electron/ai/orchestrator.cjs#L521>)
- [createContextOrchestrator.run](<../ai/orchestrator.cjs.md#s-be352215519f7acf>) — [electron/ai/orchestrator.cjs:1021](<../../../../../../electron/ai/orchestrator.cjs#L1021>)
- [createContextOrchestrator.run](<../ai/orchestrator.cjs.md#s-be352215519f7acf>) — [electron/ai/orchestrator.cjs:1061](<../../../../../../electron/ai/orchestrator.cjs#L1061>)
- [ProviderRegistry.get](<../ai/provider-registry.cjs.md#s-aa0c9952767d6afb>) — [electron/ai/provider-registry.cjs:10](<../../../../../../electron/ai/provider-registry.cjs#L10>)
- [invalid](<../ai/providers/gemini-provider.cjs.md#s-5b08da3dca5a8aa6>) — [electron/ai/providers/gemini-provider.cjs:32](<../../../../../../electron/ai/providers/gemini-provider.cjs#L32>)
- [remoteError](<../ai/providers/gemini-provider.cjs.md#s-d090e13f3d76e2d3>) — [electron/ai/providers/gemini-provider.cjs:79](<../../../../../../electron/ai/providers/gemini-provider.cjs#L79>)
- [GeminiProvider.request.timeout](<../ai/providers/gemini-provider.cjs.md#s-65cc3c8ea82469c8>) — [electron/ai/providers/gemini-provider.cjs:104](<../../../../../../electron/ai/providers/gemini-provider.cjs#L104>)
- [GeminiProvider.request](<../ai/providers/gemini-provider.cjs.md#s-2e56134df44bde91>) — [electron/ai/providers/gemini-provider.cjs:155](<../../../../../../electron/ai/providers/gemini-provider.cjs#L155>)
- [GeminiProvider.request](<../ai/providers/gemini-provider.cjs.md#s-2e56134df44bde91>) — [electron/ai/providers/gemini-provider.cjs:160](<../../../../../../electron/ai/providers/gemini-provider.cjs#L160>)
- [GeminiProvider.complete](<../ai/providers/gemini-provider.cjs.md#s-edd5ba510cd7bdd1>) — [electron/ai/providers/gemini-provider.cjs:275](<../../../../../../electron/ai/providers/gemini-provider.cjs#L275>)
- [GeminiProvider.complete.&lt;anonymous@343:7&gt;.event](<../ai/providers/gemini-provider.cjs.md#s-96bf3696053fd418>) — [electron/ai/providers/gemini-provider.cjs:374](<../../../../../../electron/ai/providers/gemini-provider.cjs#L374>)
- [GeminiProvider.complete.&lt;anonymous@343:7&gt;](<../ai/providers/gemini-provider.cjs.md#s-e6d558afa5951380>) — [electron/ai/providers/gemini-provider.cjs:442](<../../../../../../electron/ai/providers/gemini-provider.cjs#L442>)
- [GeminiProvider.complete.&lt;anonymous@343:7&gt;](<../ai/providers/gemini-provider.cjs.md#s-e6d558afa5951380>) — [electron/ai/providers/gemini-provider.cjs:447](<../../../../../../electron/ai/providers/gemini-provider.cjs#L447>)
- [&lt;anonymous@264:90&gt;.&lt;anonymous@287:5&gt;](<../ai/providers/gemini-provider.test.cjs.md#s-33ccd0f094cf21ec>) — [electron/ai/providers/gemini-provider.test.cjs:287](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L287>)
- [&lt;anonymous@296:91&gt;.get](<../ai/providers/gemini-provider.test.cjs.md#s-66aa7e32e8685b76>) — [electron/ai/providers/gemini-provider.test.cjs:301](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L301>)
- [&lt;anonymous@390:78&gt;.fetchImpl.&lt;anonymous@396:21&gt;.&lt;anonymous@404:15&gt;](<../ai/providers/nvidia-provider.test.cjs.md#s-af1d82b0aa3d5eed>) — [electron/ai/providers/nvidia-provider.test.cjs:406](<../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L406>)
- [validateBaseUrl](<../ai/providers/ollama-provider.cjs.md#s-af4d66863dbb4100>) — [electron/ai/providers/ollama-provider.cjs:13](<../../../../../../electron/ai/providers/ollama-provider.cjs#L13>)
- [validateBaseUrl](<../ai/providers/ollama-provider.cjs.md#s-af4d66863dbb4100>) — [electron/ai/providers/ollama-provider.cjs:27](<../../../../../../electron/ai/providers/ollama-provider.cjs#L27>)
- [validateModelName](<../ai/providers/ollama-provider.cjs.md#s-d2cc9bcb6089f4a8>) — [electron/ai/providers/ollama-provider.cjs:43](<../../../../../../electron/ai/providers/ollama-provider.cjs#L43>)
- [validateMessages](<../ai/providers/ollama-provider.cjs.md#s-b148d9c7944f8e8d>) — [electron/ai/providers/ollama-provider.cjs:54](<../../../../../../electron/ai/providers/ollama-provider.cjs#L54>)
- [validateMessages.&lt;anonymous@60:20&gt;](<../ai/providers/ollama-provider.cjs.md#s-5fcc9d3f9c6197fc>) — [electron/ai/providers/ollama-provider.cjs:70](<../../../../../../electron/ai/providers/ollama-provider.cjs#L70>)
- [normalizeModel](<../ai/providers/ollama-provider.cjs.md#s-dcac639ef242dd4e>) — [electron/ai/providers/ollama-provider.cjs:87](<../../../../../../electron/ai/providers/ollama-provider.cjs#L87>)
- [OllamaProvider.constructor](<../ai/providers/ollama-provider.cjs.md#s-6a0c68a6d6f2569c>) — [electron/ai/providers/ollama-provider.cjs:131](<../../../../../../electron/ai/providers/ollama-provider.cjs#L131>)
- [OllamaProvider.request](<../ai/providers/ollama-provider.cjs.md#s-35307b242f4f5560>) — [electron/ai/providers/ollama-provider.cjs:167](<../../../../../../electron/ai/providers/ollama-provider.cjs#L167>)
- [OllamaProvider.request](<../ai/providers/ollama-provider.cjs.md#s-35307b242f4f5560>) — [electron/ai/providers/ollama-provider.cjs:172](<../../../../../../electron/ai/providers/ollama-provider.cjs#L172>)
- [OllamaProvider.request](<../ai/providers/ollama-provider.cjs.md#s-35307b242f4f5560>) — [electron/ai/providers/ollama-provider.cjs:177](<../../../../../../electron/ai/providers/ollama-provider.cjs#L177>)
- [OllamaProvider.request](<../ai/providers/ollama-provider.cjs.md#s-35307b242f4f5560>) — [electron/ai/providers/ollama-provider.cjs:190](<../../../../../../electron/ai/providers/ollama-provider.cjs#L190>)
- [OllamaProvider.request](<../ai/providers/ollama-provider.cjs.md#s-35307b242f4f5560>) — [electron/ai/providers/ollama-provider.cjs:195](<../../../../../../electron/ai/providers/ollama-provider.cjs#L195>)
- [OllamaProvider.request](<../ai/providers/ollama-provider.cjs.md#s-35307b242f4f5560>) — [electron/ai/providers/ollama-provider.cjs:199](<../../../../../../electron/ai/providers/ollama-provider.cjs#L199>)
- [OllamaProvider.request](<../ai/providers/ollama-provider.cjs.md#s-35307b242f4f5560>) — [electron/ai/providers/ollama-provider.cjs:213](<../../../../../../electron/ai/providers/ollama-provider.cjs#L213>)
- [OllamaProvider.listModels](<../ai/providers/ollama-provider.cjs.md#s-6b77d21ad8966514>) — [electron/ai/providers/ollama-provider.cjs:304](<../../../../../../electron/ai/providers/ollama-provider.cjs#L304>)
- [OllamaProvider.streamChat](<../ai/providers/ollama-provider.cjs.md#s-be4271d68f86c17b>) — [electron/ai/providers/ollama-provider.cjs:392](<../../../../../../electron/ai/providers/ollama-provider.cjs#L392>)
- [OllamaProvider.streamChat](<../ai/providers/ollama-provider.cjs.md#s-be4271d68f86c17b>) — [electron/ai/providers/ollama-provider.cjs:418](<../../../../../../electron/ai/providers/ollama-provider.cjs#L418>)
- [OllamaProvider.streamChat](<../ai/providers/ollama-provider.cjs.md#s-be4271d68f86c17b>) — [electron/ai/providers/ollama-provider.cjs:423](<../../../../../../electron/ai/providers/ollama-provider.cjs#L423>)
- [OllamaProvider.streamChat](<../ai/providers/ollama-provider.cjs.md#s-be4271d68f86c17b>) — [electron/ai/providers/ollama-provider.cjs:434](<../../../../../../electron/ai/providers/ollama-provider.cjs#L434>)
- [OllamaProvider.complete](<../ai/providers/ollama-provider.cjs.md#s-6d56407bfa5196b0>) — [electron/ai/providers/ollama-provider.cjs:479](<../../../../../../electron/ai/providers/ollama-provider.cjs#L479>)
- [OllamaProvider.complete](<../ai/providers/ollama-provider.cjs.md#s-6d56407bfa5196b0>) — [electron/ai/providers/ollama-provider.cjs:491](<../../../../../../electron/ai/providers/ollama-provider.cjs#L491>)
- [OllamaProvider.complete](<../ai/providers/ollama-provider.cjs.md#s-6d56407bfa5196b0>) — [electron/ai/providers/ollama-provider.cjs:521](<../../../../../../electron/ai/providers/ollama-provider.cjs#L521>)
- [OllamaProvider.complete](<../ai/providers/ollama-provider.cjs.md#s-6d56407bfa5196b0>) — [electron/ai/providers/ollama-provider.cjs:550](<../../../../../../electron/ai/providers/ollama-provider.cjs#L550>)
- [OllamaProvider.testModel](<../ai/providers/ollama-provider.cjs.md#s-760f27b8110fd5f4>) — [electron/ai/providers/ollama-provider.cjs:597](<../../../../../../electron/ai/providers/ollama-provider.cjs#L597>)
- [readChatStream](<../ai/providers/ollama-stream.cjs.md#s-f7526d2f26c7a960>) — [electron/ai/providers/ollama-stream.cjs:6](<../../../../../../electron/ai/providers/ollama-stream.cjs#L6>)
- [readChatStream.consume](<../ai/providers/ollama-stream.cjs.md#s-7d8f5c4483b3b55f>) — [electron/ai/providers/ollama-stream.cjs:20](<../../../../../../electron/ai/providers/ollama-stream.cjs#L20>)
- [readChatStream.consume](<../ai/providers/ollama-stream.cjs.md#s-7d8f5c4483b3b55f>) — [electron/ai/providers/ollama-stream.cjs:26](<../../../../../../electron/ai/providers/ollama-stream.cjs#L26>)
- [readChatStream.consume](<../ai/providers/ollama-stream.cjs.md#s-7d8f5c4483b3b55f>) — [electron/ai/providers/ollama-stream.cjs:31](<../../../../../../electron/ai/providers/ollama-stream.cjs#L31>)
- [readChatStream.consume](<../ai/providers/ollama-stream.cjs.md#s-7d8f5c4483b3b55f>) — [electron/ai/providers/ollama-stream.cjs:36](<../../../../../../electron/ai/providers/ollama-stream.cjs#L36>)
- [readChatStream.consume](<../ai/providers/ollama-stream.cjs.md#s-7d8f5c4483b3b55f>) — [electron/ai/providers/ollama-stream.cjs:42](<../../../../../../electron/ai/providers/ollama-stream.cjs#L42>)
- [readChatStream](<../ai/providers/ollama-stream.cjs.md#s-f7526d2f26c7a960>) — [electron/ai/providers/ollama-stream.cjs:58](<../../../../../../electron/ai/providers/ollama-stream.cjs#L58>)
- [readChatStream](<../ai/providers/ollama-stream.cjs.md#s-f7526d2f26c7a960>) — [electron/ai/providers/ollama-stream.cjs:76](<../../../../../../electron/ai/providers/ollama-stream.cjs#L76>)
- [invalid](<../ai/providers/openai-chat-provider.cjs.md#s-870d8fe0425ad9a5>) — [electron/ai/providers/openai-chat-provider.cjs:41](<../../../../../../electron/ai/providers/openai-chat-provider.cjs#L41>)
- [remoteError](<../ai/providers/openai-chat-provider.cjs.md#s-22f13887fe14c405>) — [electron/ai/providers/openai-chat-provider.cjs:100](<../../../../../../electron/ai/providers/openai-chat-provider.cjs#L100>)
- [OpenAIChatProvider.request.expire](<../ai/providers/openai-chat-provider.cjs.md#s-d7265c5a09e37f11>) — [electron/ai/providers/openai-chat-provider.cjs:136](<../../../../../../electron/ai/providers/openai-chat-provider.cjs#L136>)
- [OpenAIChatProvider.request](<../ai/providers/openai-chat-provider.cjs.md#s-b38b5e0af2267c91>) — [electron/ai/providers/openai-chat-provider.cjs:182](<../../../../../../electron/ai/providers/openai-chat-provider.cjs#L182>)
- [OpenAIChatProvider.request](<../ai/providers/openai-chat-provider.cjs.md#s-b38b5e0af2267c91>) — [electron/ai/providers/openai-chat-provider.cjs:186](<../../../../../../electron/ai/providers/openai-chat-provider.cjs#L186>)
- [OpenAIChatProvider.complete](<../ai/providers/openai-chat-provider.cjs.md#s-16c9ee5446ba4e47>) — [electron/ai/providers/openai-chat-provider.cjs:346](<../../../../../../electron/ai/providers/openai-chat-provider.cjs#L346>)
- [OpenAIChatProvider.complete.&lt;anonymous@387:7&gt;](<../ai/providers/openai-chat-provider.cjs.md#s-40f5fd63c8baafdb>) — [electron/ai/providers/openai-chat-provider.cjs:393](<../../../../../../electron/ai/providers/openai-chat-provider.cjs#L393>)
- [OpenAIChatProvider.complete.&lt;anonymous@387:7&gt;](<../ai/providers/openai-chat-provider.cjs.md#s-40f5fd63c8baafdb>) — [electron/ai/providers/openai-chat-provider.cjs:554](<../../../../../../electron/ai/providers/openai-chat-provider.cjs#L554>)
- [OpenRouterProvider.listModels.&lt;anonymous@55:7&gt;](<../ai/providers/openrouter-provider.cjs.md#s-909f5b1f0d8612d2>) — [electron/ai/providers/openrouter-provider.cjs:117](<../../../../../../electron/ai/providers/openrouter-provider.cjs#L117>)
- [&lt;anonymous@224:71&gt;](<../ai/providers/openrouter-provider.test.cjs.md#s-6af6d69ab60275e4>) — [electron/ai/providers/openrouter-provider.test.cjs:234](<../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L234>)
- [readRemoteJson](<../ai/providers/remote-json.cjs.md#s-ce48dfba0aa4322a>) — [electron/ai/providers/remote-json.cjs:10](<../../../../../../electron/ai/providers/remote-json.cjs#L10>)
- [readRemoteJson](<../ai/providers/remote-json.cjs.md#s-ce48dfba0aa4322a>) — [electron/ai/providers/remote-json.cjs:19](<../../../../../../electron/ai/providers/remote-json.cjs#L19>)
- [&lt;anonymous@292:71&gt;.run](<../ai/request-logger.test.cjs.md#s-8ffbdaf80411bddb>) — [electron/ai/request-logger.test.cjs:301](<../../../../../../electron/ai/request-logger.test.cjs#L301>)
- [readCompletedRun](<../ai/research-knowledge.cjs.md#s-ff24b848b76d8433>) — [electron/ai/research-knowledge.cjs:30](<../../../../../../electron/ai/research-knowledge.cjs#L30>)
- [ResearchKnowledge.propose](<../ai/research-knowledge.cjs.md#s-6237bb50a54879b6>) — [electron/ai/research-knowledge.cjs:53](<../../../../../../electron/ai/research-knowledge.cjs#L53>)
- [ResearchKnowledge.retrieve](<../ai/research-knowledge.cjs.md#s-51f1bda5a3a72d66>) — [electron/ai/research-knowledge.cjs:67](<../../../../../../electron/ai/research-knowledge.cjs#L67>)
- [ResearchKnowledge.retrieve](<../ai/research-knowledge.cjs.md#s-51f1bda5a3a72d66>) — [electron/ai/research-knowledge.cjs:75](<../../../../../../electron/ai/research-knowledge.cjs#L75>)
- [invalidRecord](<../ai/run-store.cjs.md#s-036013bb7de226bd>) — [electron/ai/run-store.cjs:17](<../../../../../../electron/ai/run-store.cjs#L17>)
- [createModelRun](<../ai/run-store.cjs.md#s-0abf05c0db6341b7>) — [electron/ai/run-store.cjs:338](<../../../../../../electron/ai/run-store.cjs#L338>)
- [createModelRun](<../ai/run-store.cjs.md#s-0abf05c0db6341b7>) — [electron/ai/run-store.cjs:348](<../../../../../../electron/ai/run-store.cjs#L348>)
- [readModelRun](<../ai/run-store.cjs.md#s-260afe334a71b9ae>) — [electron/ai/run-store.cjs:371](<../../../../../../electron/ai/run-store.cjs#L371>)
- [readModelRun](<../ai/run-store.cjs.md#s-260afe334a71b9ae>) — [electron/ai/run-store.cjs:376](<../../../../../../electron/ai/run-store.cjs#L376>)
- [planStatistics](<../ai/statistics.cjs.md#s-4cd6a96e6d276ca8>) — [electron/ai/statistics.cjs:294](<../../../../../../electron/ai/statistics.cjs#L294>)
- [readJson](<../core/persistence/json-store.cjs.md#s-7f9e3b493f3ab942>) — [electron/core/persistence/json-store.cjs:49](<../../../../../../electron/core/persistence/json-store.cjs#L49>)
- [writeJson](<../core/persistence/json-store.cjs.md#s-5030c6156f98dba1>) — [electron/core/persistence/json-store.cjs:72](<../../../../../../electron/core/persistence/json-store.cjs#L72>)
- [guardedIpc.handle.&lt;anonymous@16:31&gt;](<../core/security/desktop-security.cjs.md#s-31cc5fb10915d561>) — [electron/core/security/desktop-security.cjs:24](<../../../../../../electron/core/security/desktop-security.cjs#L24>)
- [changeVaultKnowledge.&lt;anonymous@56:38&gt;](<../main.cjs.md#s-c55cd22146ad636c>) — [electron/main.cjs:58](<../../../../../../electron/main.cjs#L58>)
- [&lt;anonymous@163:22&gt;.chooseAgentPicture](<../main.cjs.md#s-424cb22ada61b036>) — [electron/main.cjs:254](<../../../../../../electron/main.cjs#L254>)
- [parse](<validation.cjs.md#s-f29367528a73f24d>) — [electron/shared/validation.cjs:11](<../../../../../../electron/shared/validation.cjs#L11>)
- [main.get](<../../scripts/front-office-benchmark.cjs.md#s-2c5d3187223505a9>) — [scripts/front-office-benchmark.cjs:127](<../../../../../../scripts/front-office-benchmark.cjs#L127>)

Unresolved / external call sites: 1.

- super — external-or-dynamic-dispatch; [electron/shared/runtime-errors.cjs:39](<../../../../../../electron/shared/runtime-errors.cjs#L39>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:591](<../../../../../../electron/ai/front-office-engine.test.cjs#L591>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:602](<../../../../../../electron/ai/front-office-engine.test.cjs#L602>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:617](<../../../../../../electron/ai/front-office-engine.test.cjs#L617>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:634](<../../../../../../electron/ai/front-office-engine.test.cjs#L634>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:650](<../../../../../../electron/ai/front-office-engine.test.cjs#L650>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:763](<../../../../../../electron/ai/front-office-engine.test.cjs#L763>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:851](<../../../../../../electron/ai/front-office-engine.test.cjs#L851>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:915](<../../../../../../electron/ai/front-office-engine.test.cjs#L915>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:975](<../../../../../../electron/ai/front-office-engine.test.cjs#L975>) — static-call-site; coverage not established.
- [electron/ai/ipc.test.cjs:17](<../../../../../../electron/ai/ipc.test.cjs#L17>) — static-call-site; coverage not established.
- [electron/ai/model-check.test.cjs:52](<../../../../../../electron/ai/model-check.test.cjs#L52>) — static-call-site; coverage not established.
- [electron/ai/model-errors.test.cjs:12](<../../../../../../electron/ai/model-errors.test.cjs#L12>) — static-call-site; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:287](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L287>) — static-call-site; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:301](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L301>) — static-call-site; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:406](<../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L406>) — static-call-site; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:234](<../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L234>) — static-call-site; coverage not established.
- [electron/ai/request-logger.test.cjs:301](<../../../../../../electron/ai/request-logger.test.cjs#L301>) — static-call-site; coverage not established.
- [tests/integration/architecture-contract.test.cjs:217](<../../../../../../tests/integration/architecture-contract.test.cjs#L217>) — file-import-only; coverage not established.

<a id="s-0a992a8fcd9686e4"></a>

## serializeModelError

[electron/shared/runtime-errors.cjs:47](<../../../../../../electron/shared/runtime-errors.cjs#L47>) · FunctionDeclaration · production · [Shared deterministic infrastructure](<../../../../modules/shared.md>)

Serializes recognized shared/Brain errors; unknown exceptions become a content-free internal error. Pure; details must already be redacted by their producer.

Purpose evidence: jsdoc.

Exported as: serializeModelError ([electron/shared/runtime-errors.cjs:1](<../../../../../../electron/shared/runtime-errors.cjs#L1>)), serializeModelError ([electron/ai/model-errors.cjs:1](<../../../../../../electron/ai/model-errors.cjs#L1>)).

Lexical owner: [electron/shared/runtime-errors.cjs](<runtime-errors.cjs.md#s-53024256edde6f12>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| error | any | compiler-inferred | required |

Returns: { code: any; message: any; details: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [runAssignedTurn](<../ai/agents/assigned-chat.cjs.md#s-d49a3f162aa849c6>) — [electron/ai/agents/assigned-chat.cjs:278](<../../../../../../electron/ai/agents/assigned-chat.cjs#L278>)
- [runEngineTurn](<../ai/engine-chat.cjs.md#s-5191968f4b9121bd>) — [electron/ai/engine-chat.cjs:473](<../../../../../../electron/ai/engine-chat.cjs#L473>)
- [registerAiIpc.handle.&lt;anonymous@91:34&gt;](<../ai/ipc.cjs.md#s-06103fd7a645f420>) — [electron/ai/ipc.cjs:157](<../../../../../../electron/ai/ipc.cjs#L157>)
- [checkRemoteModel](<../ai/model-check.cjs.md#s-e84d234a40a5e24b>) — [electron/ai/model-check.cjs:50](<../../../../../../electron/ai/model-check.cjs#L50>)
- [&lt;anonymous@9:85&gt;](<../ai/model-errors.test.cjs.md#s-97d3e16cb74e5af0>) — [electron/ai/model-errors.test.cjs:11](<../../../../../../electron/ai/model-errors.test.cjs#L11>)
- [&lt;anonymous@9:85&gt;](<../ai/model-errors.test.cjs.md#s-97d3e16cb74e5af0>) — [electron/ai/model-errors.test.cjs:21](<../../../../../../electron/ai/model-errors.test.cjs#L21>)
- [&lt;anonymous@9:85&gt;](<../ai/model-errors.test.cjs.md#s-97d3e16cb74e5af0>) — [electron/ai/model-errors.test.cjs:33](<../../../../../../electron/ai/model-errors.test.cjs#L33>)
- [GeminiProvider.getStatus](<../ai/providers/gemini-provider.cjs.md#s-047d0d7cf7e60ad8>) — [electron/ai/providers/gemini-provider.cjs:257](<../../../../../../electron/ai/providers/gemini-provider.cjs#L257>)
- [OpenAIChatProvider.getStatus](<../ai/providers/openai-chat-provider.cjs.md#s-27eb65d56cdc7527>) — [electron/ai/providers/openai-chat-provider.cjs:265](<../../../../../../electron/ai/providers/openai-chat-provider.cjs#L265>)
- [OpenAIChatProvider.probe](<../ai/providers/openai-chat-provider.cjs.md#s-c133d3057fb7c65d>) — [electron/ai/providers/openai-chat-provider.cjs:312](<../../../../../../electron/ai/providers/openai-chat-provider.cjs#L312>)

Unresolved / external call sites: 1.

- error.code.startsWith — external-or-dynamic-dispatch; [electron/shared/runtime-errors.cjs:54](<../../../../../../electron/shared/runtime-errors.cjs#L54>)

**Related tests / acceptance harnesses:**

- [electron/ai/model-errors.test.cjs:11](<../../../../../../electron/ai/model-errors.test.cjs#L11>) — static-call-site; coverage not established.
- [electron/ai/model-errors.test.cjs:21](<../../../../../../electron/ai/model-errors.test.cjs#L21>) — static-call-site; coverage not established.
- [electron/ai/model-errors.test.cjs:33](<../../../../../../electron/ai/model-errors.test.cjs#L33>) — static-call-site; coverage not established.
- [tests/integration/architecture-contract.test.cjs:217](<../../../../../../tests/integration/architecture-contract.test.cjs#L217>) — file-import-only; coverage not established.
