# electron/shared/validation.cjs: symbols

[Atlas](<../../../../README.md>) / [Shared deterministic infrastructure](<../../../../modules/shared.md>) / [electron/shared/validation.cjs:1](<../../../../../../electron/shared/validation.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/shared/validation.cjs](<validation.cjs.md#s-dd67eee0a7b15258>) (Module)
- [parse](<validation.cjs.md#s-f29367528a73f24d>) (FunctionDeclaration)

<a id="s-dd67eee0a7b15258"></a>

## electron/shared/validation.cjs

[electron/shared/validation.cjs:1](<../../../../../../electron/shared/validation.cjs#L1>) · Module · production · [Shared deterministic infrastructure](<../../../../modules/shared.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- require — module-loader; [electron/shared/validation.cjs:1](<../../../../../../electron/shared/validation.cjs#L1>)

**Related tests / acceptance harnesses:**

- [tests/integration/architecture-contract.test.cjs:229](<../../../../../../tests/integration/architecture-contract.test.cjs#L229>) — file-import-only; coverage not established.

<a id="s-f29367528a73f24d"></a>

## parse

[electron/shared/validation.cjs:4](<../../../../../../electron/shared/validation.cjs#L4>) · FunctionDeclaration · production · [Shared deterministic infrastructure](<../../../../modules/shared.md>)

Validates caller-supplied Zod contracts without serializing invalid inputs; preserves legacy error codes/messages, including credential redaction. Pure.

Purpose evidence: jsdoc.

Exported as: parse ([electron/ai/llm-front-office/experiment-contracts.cjs:1](<../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L1>)), parse ([electron/ai/schemas.cjs:1](<../../../../../../electron/ai/schemas.cjs#L1>)), parse ([electron/shared/validation.cjs:1](<../../../../../../electron/shared/validation.cjs#L1>)).

Lexical owner: [electron/shared/validation.cjs](<validation.cjs.md#s-dd67eee0a7b15258>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| schema | any | compiler-inferred | required |
| input | any | compiler-inferred | required |
| code | string | compiler-inferred | optional, default present |
| message | string | compiler-inferred | optional, default present |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ModelRuntimeError.constructor](<runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/shared/validation.cjs:11](<../../../../../../electron/shared/validation.cjs#L11>)

**Called by (statically resolved):**

- [validateConstruction](<../ai/agents/agent-construction.cjs.md#s-818f4b1aaf6e1b48>) — [electron/ai/agents/agent-construction.cjs:225](<../../../../../../electron/ai/agents/agent-construction.cjs#L225>)
- [AgentStore.read.&lt;anonymous@151:7&gt;](<../ai/agents/agent-store.cjs.md#s-dd35e8ef3ae2c787>) — [electron/ai/agents/agent-store.cjs:152](<../../../../../../electron/ai/agents/agent-store.cjs#L152>)
- [AgentStore.archive.&lt;anonymous@180:23&gt;.{ id }](<../ai/agents/agent-store.cjs.md#s-1224270a7b5fb39d>) — [electron/ai/agents/agent-store.cjs:181](<../../../../../../electron/ai/agents/agent-store.cjs#L181>)
- [AgentStore.create.&lt;anonymous@194:23&gt;.patch](<../ai/agents/agent-store.cjs.md#s-462acc67e49dc642>) — [electron/ai/agents/agent-store.cjs:195](<../../../../../../electron/ai/agents/agent-store.cjs#L195>)
- [AgentStore.get](<../ai/agents/agent-store.cjs.md#s-feff3820609fc57c>) — [electron/ai/agents/agent-store.cjs:246](<../../../../../../electron/ai/agents/agent-store.cjs#L246>)
- [AgentStore.saveConstruction.&lt;anonymous@389:23&gt;.patch](<../ai/agents/agent-store.cjs.md#s-236a247583a053e3>) — [electron/ai/agents/agent-store.cjs:390](<../../../../../../electron/ai/agents/agent-store.cjs#L390>)
- [AgentStore.save.&lt;anonymous@580:23&gt;.patch](<../ai/agents/agent-store.cjs.md#s-4faff5b06043bb90>) — [electron/ai/agents/agent-store.cjs:581](<../../../../../../electron/ai/agents/agent-store.cjs#L581>)
- [loadBox](<../ai/agents/construction-context.cjs.md#s-4f4ef58489b1d9b8>) — [electron/ai/agents/construction-context.cjs:50](<../../../../../../electron/ai/agents/construction-context.cjs#L50>)
- [readFile](<../ai/agents/construction-context.cjs.md#s-92e0b43be6c8bdfa>) — [electron/ai/agents/construction-context.cjs:98](<../../../../../../electron/ai/agents/construction-context.cjs#L98>)
- [readBinding](<../ai/agents/construction-context.cjs.md#s-54e70a99495cef66>) — [electron/ai/agents/construction-context.cjs:144](<../../../../../../electron/ai/agents/construction-context.cjs#L144>)
- [validateConversation](<../ai/chat/conversation-store.cjs.md#s-8fcc95a0b5a57e3e>) — [electron/ai/chat/conversation-store.cjs:31](<../../../../../../electron/ai/chat/conversation-store.cjs#L31>)
- [validateConversation](<../ai/chat/conversation-store.cjs.md#s-8fcc95a0b5a57e3e>) — [electron/ai/chat/conversation-store.cjs:94](<../../../../../../electron/ai/chat/conversation-store.cjs#L94>)
- [validateConversation](<../ai/chat/conversation-store.cjs.md#s-8fcc95a0b5a57e3e>) — [electron/ai/chat/conversation-store.cjs:142](<../../../../../../electron/ai/chat/conversation-store.cjs#L142>)
- [runTrigger](<../ai/chronoz-adapter.cjs.md#s-9a8362270da4fd67>) — [electron/ai/chronoz-adapter.cjs:158](<../../../../../../electron/ai/chronoz-adapter.cjs#L158>)
- [runTrigger.&lt;anonymous@165:22&gt;.&lt;anonymous@243:25&gt;](<../ai/chronoz-adapter.cjs.md#s-52f2f0f3b3b3c5dd>) — [electron/ai/chronoz-adapter.cjs:246](<../../../../../../electron/ai/chronoz-adapter.cjs#L246>)
- [verifyReport](<../ai/chronoz-adapter.cjs.md#s-99b6ea0d2b1d6595>) — [electron/ai/chronoz-adapter.cjs:299](<../../../../../../electron/ai/chronoz-adapter.cjs#L299>)
- [CredentialStore.status](<../ai/credential-store.cjs.md#s-2729a6958f70a533>) — [electron/ai/credential-store.cjs:87](<../../../../../../electron/ai/credential-store.cjs#L87>)
- [CredentialStore.remove](<../ai/credential-store.cjs.md#s-1a9435f7bfed95f1>) — [electron/ai/credential-store.cjs:118](<../../../../../../electron/ai/credential-store.cjs#L118>)
- [CredentialStore.get](<../ai/credential-store.cjs.md#s-0c057213a95118a0>) — [electron/ai/credential-store.cjs:129](<../../../../../../electron/ai/credential-store.cjs#L129>)
- [CredentialStore.get](<../ai/credential-store.cjs.md#s-0c057213a95118a0>) — [electron/ai/credential-store.cjs:142](<../../../../../../electron/ai/credential-store.cjs#L142>)
- [selectTool](<../ai/engine-chat.cjs.md#s-14e66eaa8df6d33c>) — [electron/ai/engine-chat.cjs:79](<../../../../../../electron/ai/engine-chat.cjs#L79>)
- [selectTool](<../ai/engine-chat.cjs.md#s-14e66eaa8df6d33c>) — [electron/ai/engine-chat.cjs:86](<../../../../../../electron/ai/engine-chat.cjs#L86>)
- [selectTool](<../ai/engine-chat.cjs.md#s-14e66eaa8df6d33c>) — [electron/ai/engine-chat.cjs:295](<../../../../../../electron/ai/engine-chat.cjs#L295>)
- [EngineRegistry.registration.&lt;anonymous@63:32&gt;](<../ai/engine-registry.cjs.md#s-922e149d116af8e6>) — [electron/ai/engine-registry.cjs:63](<../../../../../../electron/ai/engine-registry.cjs#L63>)
- [EngineRegistry.execute](<../ai/engine-registry.cjs.md#s-119128e3bab0ee5c>) — [electron/ai/engine-registry.cjs:246](<../../../../../../electron/ai/engine-registry.cjs#L246>)
- [EngineRegistry.open.input](<../ai/engine-registry.cjs.md#s-82e59078a13c16b3>) — [electron/ai/engine-registry.cjs:352](<../../../../../../electron/ai/engine-registry.cjs#L352>)
- [registerAiIpc.&lt;anonymous@198:31&gt;](<../ai/ipc.cjs.md#s-3ec504f7edb86112>) — [electron/ai/ipc.cjs:199](<../../../../../../electron/ai/ipc.cjs#L199>)
- [registerAiIpc.&lt;anonymous@227:29&gt;.options](<../ai/ipc.cjs.md#s-f40fd67736fda4dc>) — [electron/ai/ipc.cjs:228](<../../../../../../electron/ai/ipc.cjs#L228>)
- [registerAiIpc.&lt;anonymous@234:27&gt;.options](<../ai/ipc.cjs.md#s-8d235ebcfa7d799d>) — [electron/ai/ipc.cjs:235](<../../../../../../electron/ai/ipc.cjs#L235>)
- [registerAiIpc.&lt;anonymous@259:34&gt;.selection](<../ai/ipc.cjs.md#s-ec503438e2f120de>) — [electron/ai/ipc.cjs:260](<../../../../../../electron/ai/ipc.cjs#L260>)
- [registerAiIpc.&lt;anonymous@359:33&gt;](<../ai/ipc.cjs.md#s-ba26c5f9af811090>) — [electron/ai/ipc.cjs:360](<../../../../../../electron/ai/ipc.cjs#L360>)
- [registerAiIpc.&lt;anonymous@362:30&gt;.{ providerId, model }](<../ai/ipc.cjs.md#s-b5423766ac5cc61d>) — [electron/ai/ipc.cjs:363](<../../../../../../electron/ai/ipc.cjs#L363>)
- [registerAiIpc.&lt;anonymous@415:30&gt;.&lt;anonymous@416:23&gt;](<../ai/ipc.cjs.md#s-d4e3b18ed9532963>) — [electron/ai/ipc.cjs:417](<../../../../../../electron/ai/ipc.cjs#L417>)
- [KnowledgeStore.propose](<../ai/knowledge-store.cjs.md#s-386177095f62c5f2>) — [electron/ai/knowledge-store.cjs:288](<../../../../../../electron/ai/knowledge-store.cjs#L288>)
- [KnowledgeStore.approve](<../ai/knowledge-store.cjs.md#s-b191e90e59bb2198>) — [electron/ai/knowledge-store.cjs:395](<../../../../../../electron/ai/knowledge-store.cjs#L395>)
- [KnowledgeStore.retrieve](<../ai/knowledge-store.cjs.md#s-3704d9e2e744e8a8>) — [electron/ai/knowledge-store.cjs:523](<../../../../../../electron/ai/knowledge-store.cjs#L523>)
- [validateExperimentalConversation](<../ai/llm-front-office/conversation-manager.cjs.md#s-3193bd9ab35b1def>) — [electron/ai/llm-front-office/conversation-manager.cjs:19](<../../../../../../electron/ai/llm-front-office/conversation-manager.cjs#L19>)
- [validateExperimentalRun](<../ai/llm-front-office/conversation-manager.cjs.md#s-ffc7705100d0fefb>) — [electron/ai/llm-front-office/conversation-manager.cjs:121](<../../../../../../electron/ai/llm-front-office/conversation-manager.cjs#L121>)
- [validateConfig](<../ai/llm-front-office/experiment-contracts.cjs.md#s-3012ca16a371ad08>) — [electron/ai/llm-front-office/experiment-contracts.cjs:221](<../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L221>)
- [CapabilityRegistry.read.&lt;anonymous@73:40&gt;](<../ai/llm-front-office/model-registry.cjs.md#s-a7787a82d48ee75e>) — [electron/ai/llm-front-office/model-registry.cjs:73](<../../../../../../electron/ai/llm-front-office/model-registry.cjs#L73>)
- [CapabilityRegistry.refresh.&lt;anonymous@83:23&gt;.&lt;anonymous@88:33&gt;](<../ai/llm-front-office/model-registry.cjs.md#s-a059f73a42692736>) — [electron/ai/llm-front-office/model-registry.cjs:90](<../../../../../../electron/ai/llm-front-office/model-registry.cjs#L90>)
- [CapabilityRegistry.override.value](<../ai/llm-front-office/model-registry.cjs.md#s-a176faa919942436>) — [electron/ai/llm-front-office/model-registry.cjs:124](<../../../../../../electron/ai/llm-front-office/model-registry.cjs#L124>)
- [CapabilityRegistry.addEvidence](<../ai/llm-front-office/model-registry.cjs.md#s-91c779fdba86ae7e>) — [electron/ai/llm-front-office/model-registry.cjs:145](<../../../../../../electron/ai/llm-front-office/model-registry.cjs#L145>)
- [CapabilityRegistry.addEvidence.&lt;anonymous@146:23&gt;](<../ai/llm-front-office/model-registry.cjs.md#s-420776679b486be4>) — [electron/ai/llm-front-office/model-registry.cjs:160](<../../../../../../electron/ai/llm-front-office/model-registry.cjs#L160>)
- [CapabilityRegistry.favorite.v](<../ai/llm-front-office/model-registry.cjs.md#s-3a96026b496471be>) — [electron/ai/llm-front-office/model-registry.cjs:165](<../../../../../../electron/ai/llm-front-office/model-registry.cjs#L165>)
- [CapabilityRegistry.favorite.&lt;anonymous@169:23&gt;](<../ai/llm-front-office/model-registry.cjs.md#s-6688ff0825b4ddae>) — [electron/ai/llm-front-office/model-registry.cjs:173](<../../../../../../electron/ai/llm-front-office/model-registry.cjs#L173>)
- [consumeStream.event](<../ai/llm-front-office/provider-gateway.cjs.md#s-cca6c94ad44421e6>) — [electron/ai/llm-front-office/provider-gateway.cjs:92](<../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L92>)
- [consumeCompletion](<../ai/llm-front-office/provider-gateway.cjs.md#s-343584dde39b1f93>) — [electron/ai/llm-front-office/provider-gateway.cjs:231](<../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L231>)
- [normalizeRequest](<../ai/llm-front-office/request-intake.cjs.md#s-dce03177be57ca82>) — [electron/ai/llm-front-office/request-intake.cjs:9](<../../../../../../electron/ai/llm-front-office/request-intake.cjs#L9>)
- [FrontOfficeService.state](<../ai/llm-front-office/service.cjs.md#s-a7a702002917ed3c>) — [electron/ai/llm-front-office/service.cjs:75](<../../../../../../electron/ai/llm-front-office/service.cjs#L75>)
- [FrontOfficeService.refresh](<../ai/llm-front-office/service.cjs.md#s-71ba26240e913d00>) — [electron/ai/llm-front-office/service.cjs:109](<../../../../../../electron/ai/llm-front-office/service.cjs#L109>)
- [ModelAccess.connect](<../ai/model-access.cjs.md#s-288ebd01a07b9da9>) — [electron/ai/model-access.cjs:58](<../../../../../../electron/ai/model-access.cjs#L58>)
- [validateSettings](<../ai/model-registry.cjs.md#s-f1f9d1092d51054a>) — [electron/ai/model-registry.cjs:29](<../../../../../../electron/ai/model-registry.cjs#L29>)
- [GeminiProvider.listModels.&lt;anonymous@180:9&gt;](<../ai/providers/gemini-provider.cjs.md#s-ffe0cfe158e12373>) — [electron/ai/providers/gemini-provider.cjs:197](<../../../../../../electron/ai/providers/gemini-provider.cjs#L197>)
- [GeminiProvider.complete](<../ai/providers/gemini-provider.cjs.md#s-edd5ba510cd7bdd1>) — [electron/ai/providers/gemini-provider.cjs:268](<../../../../../../electron/ai/providers/gemini-provider.cjs#L268>)
- [GeminiProvider.complete](<../ai/providers/gemini-provider.cjs.md#s-edd5ba510cd7bdd1>) — [electron/ai/providers/gemini-provider.cjs:269](<../../../../../../electron/ai/providers/gemini-provider.cjs#L269>)
- [GeminiProvider.complete](<../ai/providers/gemini-provider.cjs.md#s-edd5ba510cd7bdd1>) — [electron/ai/providers/gemini-provider.cjs:270](<../../../../../../electron/ai/providers/gemini-provider.cjs#L270>)
- [GeminiProvider.complete.format](<../ai/providers/gemini-provider.cjs.md#s-f1c47bd15e6fc946>) — [electron/ai/providers/gemini-provider.cjs:289](<../../../../../../electron/ai/providers/gemini-provider.cjs#L289>)
- [GeminiProvider.complete.&lt;anonymous@343:7&gt;.event](<../ai/providers/gemini-provider.cjs.md#s-96bf3696053fd418>) — [electron/ai/providers/gemini-provider.cjs:364](<../../../../../../electron/ai/providers/gemini-provider.cjs#L364>)
- [OpenAIChatProvider.listModels.&lt;anonymous@202:7&gt;](<../ai/providers/openai-chat-provider.cjs.md#s-103125d689dca3a2>) — [electron/ai/providers/openai-chat-provider.cjs:213](<../../../../../../electron/ai/providers/openai-chat-provider.cjs#L213>)
- [OpenAIChatProvider.probe](<../ai/providers/openai-chat-provider.cjs.md#s-c133d3057fb7c65d>) — [electron/ai/providers/openai-chat-provider.cjs:274](<../../../../../../electron/ai/providers/openai-chat-provider.cjs#L274>)
- [OpenAIChatProvider.complete](<../ai/providers/openai-chat-provider.cjs.md#s-16c9ee5446ba4e47>) — [electron/ai/providers/openai-chat-provider.cjs:325](<../../../../../../electron/ai/providers/openai-chat-provider.cjs#L325>)
- [OpenAIChatProvider.complete](<../ai/providers/openai-chat-provider.cjs.md#s-16c9ee5446ba4e47>) — [electron/ai/providers/openai-chat-provider.cjs:326](<../../../../../../electron/ai/providers/openai-chat-provider.cjs#L326>)
- [OpenAIChatProvider.complete.messages](<../ai/providers/openai-chat-provider.cjs.md#s-d26d9806f80ba720>) — [electron/ai/providers/openai-chat-provider.cjs:327](<../../../../../../electron/ai/providers/openai-chat-provider.cjs#L327>)
- [OpenAIChatProvider.complete.&lt;anonymous@387:7&gt;.event](<../ai/providers/openai-chat-provider.cjs.md#s-0f9da28207e4c2e2>) — [electron/ai/providers/openai-chat-provider.cjs:480](<../../../../../../electron/ai/providers/openai-chat-provider.cjs#L480>)
- [OpenRouterProvider.listModels.&lt;anonymous@55:7&gt;](<../ai/providers/openrouter-provider.cjs.md#s-909f5b1f0d8612d2>) — [electron/ai/providers/openrouter-provider.cjs:66](<../../../../../../electron/ai/providers/openrouter-provider.cjs#L66>)
- [ResearchKnowledge.retrieve](<../ai/research-knowledge.cjs.md#s-51f1bda5a3a72d66>) — [electron/ai/research-knowledge.cjs:84](<../../../../../../electron/ai/research-knowledge.cjs#L84>)
- [validateRunRecord](<../ai/run-store.cjs.md#s-bbbf0871f6631831>) — [electron/ai/run-store.cjs:115](<../../../../../../electron/ai/run-store.cjs#L115>)
- [parseCredential](<../ai/schemas.cjs.md#s-b69a42e30e64ae53>) — [electron/ai/schemas.cjs:37](<../../../../../../electron/ai/schemas.cjs#L37>)
- [initializeVault.&lt;anonymous@21:5&gt;](<../domains/universe/vault-settings.cjs.md#s-0b5f326b217193eb>) — [electron/domains/universe/vault-settings.cjs:21](<../../../../../../electron/domains/universe/vault-settings.cjs#L21>)
- [saveVault](<../domains/universe/vault-settings.cjs.md#s-52abb0192c9554e9>) — [electron/domains/universe/vault-settings.cjs:34](<../../../../../../electron/domains/universe/vault-settings.cjs#L34>)

Unresolved / external call sites: 1.

- schema.safeParse — external-or-dynamic-dispatch; [electron/shared/validation.cjs:10](<../../../../../../electron/shared/validation.cjs#L10>)

**Related tests / acceptance harnesses:**

- [tests/integration/architecture-contract.test.cjs:229](<../../../../../../tests/integration/architecture-contract.test.cjs#L229>) — file-import-only; coverage not established.
