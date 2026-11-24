# electron/ai/model-registry.cjs: symbols

[Atlas](<../../../../README.md>) / [Retained AI runtime](<../../../../modules/ai-runtime.md>) / [electron/ai/model-registry.cjs:1](<../../../../../../electron/ai/model-registry.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/model-registry.cjs](<model-registry.cjs.md#s-2ebfcfca148f6c9d>) (Module)
- [DEFAULTS](<model-registry.cjs.md#s-5fc5b0ca129372c6>) (VariableDeclaration)
- [validateSettings](<model-registry.cjs.md#s-f1f9d1092d51054a>) (FunctionDeclaration)
- [ModelRegistry](<model-registry.cjs.md#s-236ac83de9de4f06>) (ClassDeclaration)
- [ModelRegistry.constructor](<model-registry.cjs.md#s-776a77db3083bdfd>) (Constructor)
- [ModelRegistry.read](<model-registry.cjs.md#s-d98b4cc3aafbf180>) (MethodDeclaration)
- [ModelRegistry.state](<model-registry.cjs.md#s-a10ce2395e5d46a8>) (MethodDeclaration)
- [ModelRegistry.state.&lt;anonymous@55:36&gt;](<model-registry.cjs.md#s-478ea0a519965979>) (ArrowFunction)
- [ModelRegistry.state.&lt;anonymous@60:37&gt;](<model-registry.cjs.md#s-a9b288a843c57114>) (ArrowFunction)
- [ModelRegistry.state.&lt;anonymous@60:37&gt;.&lt;anonymous@61:25&gt;](<model-registry.cjs.md#s-d5b4daf46614ef3b>) (ArrowFunction)
- [ModelRegistry.state.&lt;anonymous@95:9&gt;](<model-registry.cjs.md#s-f5a217ccad3d3ea8>) (ArrowFunction)
- [ModelRegistry.state.&lt;anonymous@102:7&gt;](<model-registry.cjs.md#s-2bb1ed9e57713aee>) (ArrowFunction)
- [ModelRegistry.state.&lt;anonymous@109:9&gt;](<model-registry.cjs.md#s-fddbe905bb9b038f>) (ArrowFunction)
- [ModelRegistry.state.&lt;anonymous@128:26&gt;](<model-registry.cjs.md#s-e7e7357ff82d2b43>) (ArrowFunction)
- [ModelRegistry.providerFor](<model-registry.cjs.md#s-3e05acf42245b191>) (MethodDeclaration)
- [ModelRegistry.save](<model-registry.cjs.md#s-ad7b27a4e7ba4dc3>) (MethodDeclaration)
- [ModelRegistry.save.&lt;anonymous@140:23&gt;](<model-registry.cjs.md#s-cfa467e587954c2f>) (ArrowFunction)
- [ModelRegistry.validateSelection](<model-registry.cjs.md#s-125d10d68364d877>) (MethodDeclaration)
- [ModelRegistry.validateSelection.&lt;anonymous@161:34&gt;](<model-registry.cjs.md#s-31846a9d447e09f6>) (ArrowFunction)

<a id="s-2ebfcfca148f6c9d"></a>

## electron/ai/model-registry.cjs

[electron/ai/model-registry.cjs:1](<../../../../../../electron/ai/model-registry.cjs#L1>) · Module · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 6.

- require — module-loader; [electron/ai/model-registry.cjs:1](<../../../../../../electron/ai/model-registry.cjs#L1>)
- require — module-loader; [electron/ai/model-registry.cjs:2](<../../../../../../electron/ai/model-registry.cjs#L2>)
- require — module-loader; [electron/ai/model-registry.cjs:3](<../../../../../../electron/ai/model-registry.cjs#L3>)
- require — module-loader; [electron/ai/model-registry.cjs:5](<../../../../../../electron/ai/model-registry.cjs#L5>)
- require — module-loader; [electron/ai/model-registry.cjs:6](<../../../../../../electron/ai/model-registry.cjs#L6>)
- require — module-loader; [electron/ai/model-registry.cjs:7](<../../../../../../electron/ai/model-registry.cjs#L7>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agent-protocol.test.cjs:8](<../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:11](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/ai/backend-reset.test.cjs:8](<../../../../../../electron/ai/backend-reset.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/ai/backend-reset.test.cjs:37](<../../../../../../electron/ai/backend-reset.test.cjs#L37>) — file-import-only; coverage not established.
- [electron/ai/context-limits.test.cjs:8](<../../../../../../electron/ai/context-limits.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/ai/dataset.test.cjs:6](<../../../../../../electron/ai/dataset.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:4](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:4](<../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-stream.test.cjs:5](<../../../../../../electron/ai/providers/ollama-stream.test.cjs#L5>) — file-import-only; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:4](<../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:7](<../../../../../../electron/ai/request-logger.test.cjs#L7>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:97](<../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L97>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-entity-agents-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-entity-agents-smoke.cjs#L7>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:8](<../../../../../../scripts/chat-live-acceptance.cjs#L8>) — file-import-only; coverage not established.
- [scripts/dataset-live-acceptance.cjs:8](<../../../../../../scripts/dataset-live-acceptance.cjs#L8>) — file-import-only; coverage not established.
- [scripts/statistics-live-acceptance.cjs:11](<../../../../../../scripts/statistics-live-acceptance.cjs#L11>) — file-import-only; coverage not established.

<a id="s-5fc5b0ca129372c6"></a>

## DEFAULTS

[electron/ai/model-registry.cjs:9](<../../../../../../electron/ai/model-registry.cjs#L9>) · VariableDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: DEFAULTS ([electron/ai/model-registry.cjs:1](<../../../../../../electron/ai/model-registry.cjs#L1>)).

Lexical owner: [electron/ai/model-registry.cjs](<model-registry.cjs.md#s-2ebfcfca148f6c9d>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- Object.freeze — external-or-dynamic-dispatch; [electron/ai/model-registry.cjs:9](<../../../../../../electron/ai/model-registry.cjs#L9>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agent-protocol.test.cjs:8](<../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:11](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/ai/backend-reset.test.cjs:8](<../../../../../../electron/ai/backend-reset.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/ai/backend-reset.test.cjs:37](<../../../../../../electron/ai/backend-reset.test.cjs#L37>) — file-import-only; coverage not established.
- [electron/ai/context-limits.test.cjs:8](<../../../../../../electron/ai/context-limits.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/ai/dataset.test.cjs:6](<../../../../../../electron/ai/dataset.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:4](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:4](<../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-stream.test.cjs:5](<../../../../../../electron/ai/providers/ollama-stream.test.cjs#L5>) — file-import-only; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:4](<../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:7](<../../../../../../electron/ai/request-logger.test.cjs#L7>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:97](<../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L97>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-entity-agents-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-entity-agents-smoke.cjs#L7>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:8](<../../../../../../scripts/chat-live-acceptance.cjs#L8>) — file-import-only; coverage not established.
- [scripts/dataset-live-acceptance.cjs:8](<../../../../../../scripts/dataset-live-acceptance.cjs#L8>) — file-import-only; coverage not established.
- [scripts/statistics-live-acceptance.cjs:11](<../../../../../../scripts/statistics-live-acceptance.cjs#L11>) — file-import-only; coverage not established.

<a id="s-f1f9d1092d51054a"></a>

## validateSettings

[electron/ai/model-registry.cjs:28](<../../../../../../electron/ai/model-registry.cjs#L28>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: validateSettings ([electron/ai/model-registry.cjs:1](<../../../../../../electron/ai/model-registry.cjs#L1>)).

Lexical owner: [electron/ai/model-registry.cjs](<model-registry.cjs.md#s-2ebfcfca148f6c9d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [parse](<../shared/validation.cjs.md#s-f29367528a73f24d>) — [electron/ai/model-registry.cjs:29](<../../../../../../electron/ai/model-registry.cjs#L29>)

**Called by (statically resolved):**

- [resetBackend](<backend-reset.cjs.md#s-8923e8f07754093d>) — [electron/ai/backend-reset.cjs:107](<../../../../../../electron/ai/backend-reset.cjs#L107>)
- [&lt;anonymous@12:85&gt;.&lt;anonymous@19:17&gt;](<context-limits.test.cjs.md#s-ead596f7940e4dc5>) — [electron/ai/context-limits.test.cjs:19](<../../../../../../electron/ai/context-limits.test.cjs#L19>)
- [ModelRegistry.save.&lt;anonymous@140:23&gt;](<model-registry.cjs.md#s-cfa467e587954c2f>) — [electron/ai/model-registry.cjs:146](<../../../../../../electron/ai/model-registry.cjs#L146>)
- [ModelRegistry.validateSelection](<model-registry.cjs.md#s-125d10d68364d877>) — [electron/ai/model-registry.cjs:153](<../../../../../../electron/ai/model-registry.cjs#L153>)
- [validateRunRecord](<run-store.cjs.md#s-bbbf0871f6631831>) — [electron/ai/run-store.cjs:156](<../../../../../../electron/ai/run-store.cjs#L156>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/context-limits.test.cjs:19](<../../../../../../electron/ai/context-limits.test.cjs#L19>) — static-call-site; coverage not established.
- [electron/ai/agents/entity-agent-protocol.test.cjs:8](<../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:11](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/ai/backend-reset.test.cjs:8](<../../../../../../electron/ai/backend-reset.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/ai/backend-reset.test.cjs:37](<../../../../../../electron/ai/backend-reset.test.cjs#L37>) — file-import-only; coverage not established.
- [electron/ai/context-limits.test.cjs:8](<../../../../../../electron/ai/context-limits.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/ai/dataset.test.cjs:6](<../../../../../../electron/ai/dataset.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:4](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:4](<../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-stream.test.cjs:5](<../../../../../../electron/ai/providers/ollama-stream.test.cjs#L5>) — file-import-only; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:4](<../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:7](<../../../../../../electron/ai/request-logger.test.cjs#L7>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:97](<../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L97>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-entity-agents-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-entity-agents-smoke.cjs#L7>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:8](<../../../../../../scripts/chat-live-acceptance.cjs#L8>) — file-import-only; coverage not established.
- [scripts/dataset-live-acceptance.cjs:8](<../../../../../../scripts/dataset-live-acceptance.cjs#L8>) — file-import-only; coverage not established.
- [scripts/statistics-live-acceptance.cjs:11](<../../../../../../scripts/statistics-live-acceptance.cjs#L11>) — file-import-only; coverage not established.

<a id="s-236ac83de9de4f06"></a>

## ModelRegistry

[electron/ai/model-registry.cjs:32](<../../../../../../electron/ai/model-registry.cjs#L32>) · ClassDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: ModelRegistry ([electron/ai/model-registry.cjs:1](<../../../../../../electron/ai/model-registry.cjs#L1>)).

Lexical owner: [electron/ai/model-registry.cjs](<model-registry.cjs.md#s-2ebfcfca148f6c9d>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agent-protocol.test.cjs:8](<../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:11](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/ai/backend-reset.test.cjs:8](<../../../../../../electron/ai/backend-reset.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/ai/backend-reset.test.cjs:37](<../../../../../../electron/ai/backend-reset.test.cjs#L37>) — file-import-only; coverage not established.
- [electron/ai/context-limits.test.cjs:8](<../../../../../../electron/ai/context-limits.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/ai/dataset.test.cjs:6](<../../../../../../electron/ai/dataset.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:4](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:4](<../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-stream.test.cjs:5](<../../../../../../electron/ai/providers/ollama-stream.test.cjs#L5>) — file-import-only; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:4](<../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:7](<../../../../../../electron/ai/request-logger.test.cjs#L7>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:97](<../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L97>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-entity-agents-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-entity-agents-smoke.cjs#L7>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:8](<../../../../../../scripts/chat-live-acceptance.cjs#L8>) — file-import-only; coverage not established.
- [scripts/dataset-live-acceptance.cjs:8](<../../../../../../scripts/dataset-live-acceptance.cjs#L8>) — file-import-only; coverage not established.
- [scripts/statistics-live-acceptance.cjs:11](<../../../../../../scripts/statistics-live-acceptance.cjs#L11>) — file-import-only; coverage not established.

<a id="s-776a77db3083bdfd"></a>

## ModelRegistry.constructor

[electron/ai/model-registry.cjs:33](<../../../../../../electron/ai/model-registry.cjs#L33>) · Constructor · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ModelRegistry](<model-registry.cjs.md#s-236ac83de9de4f06>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| provider | any | compiler-inferred | required |
| settingsDirectory | any | compiler-inferred | required |

Returns: ModelRegistry (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ProviderRegistry.constructor](<provider-registry.cjs.md#s-0c6dac7385064eb5>) — [electron/ai/model-registry.cjs:37](<../../../../../../electron/ai/model-registry.cjs#L37>)
- [serialQueue](<../core/persistence/json-store.cjs.md#s-a8a605453bc9a09a>) — [electron/ai/model-registry.cjs:39](<../../../../../../electron/ai/model-registry.cjs#L39>)

**Called by (statically resolved):**

- [&lt;anonymous@157:79&gt;](<backend-reset.test.cjs.md#s-041bcaccc44bab10>) — [electron/ai/backend-reset.test.cjs:158](<../../../../../../electron/ai/backend-reset.test.cjs#L158>)
- [&lt;anonymous@22:77&gt;](<context-limits.test.cjs.md#s-e7c5cbcc1791f23f>) — [electron/ai/context-limits.test.cjs:27](<../../../../../../electron/ai/context-limits.test.cjs#L27>)
- [&lt;anonymous@163:22&gt;](<../main.cjs.md#s-2232a6bfcb723f81>) — [electron/main.cjs:228](<../../../../../../electron/main.cjs#L228>)
- [main](<../../scripts/chat-live-acceptance.cjs.md#s-37e0176fb42530c3>) — [scripts/chat-live-acceptance.cjs:58](<../../../../../../scripts/chat-live-acceptance.cjs#L58>)
- [main](<../../scripts/dataset-live-acceptance.cjs.md#s-926d3fce0595b737>) — [scripts/dataset-live-acceptance.cjs:18](<../../../../../../scripts/dataset-live-acceptance.cjs#L18>)
- [main](<../../scripts/engine-chat-live.cjs.md#s-d9d25d752f6311a1>) — [scripts/engine-chat-live.cjs:59](<../../../../../../scripts/engine-chat-live.cjs#L59>)
- [&lt;anonymous@14:2&gt;](<../../scripts/statistics-live-acceptance.cjs.md#s-771764a0f9e6c967>) — [scripts/statistics-live-acceptance.cjs:18](<../../../../../../scripts/statistics-live-acceptance.cjs#L18>)

Unresolved / external call sites: 1.

- path.join — external-or-dynamic-dispatch; [electron/ai/model-registry.cjs:38](<../../../../../../electron/ai/model-registry.cjs#L38>)

**Related tests / acceptance harnesses:**

- [electron/ai/backend-reset.test.cjs:158](<../../../../../../electron/ai/backend-reset.test.cjs#L158>) — static-call-site; coverage not established.
- [electron/ai/context-limits.test.cjs:27](<../../../../../../electron/ai/context-limits.test.cjs#L27>) — static-call-site; coverage not established.
- [scripts/chat-live-acceptance.cjs:58](<../../../../../../scripts/chat-live-acceptance.cjs#L58>) — static-call-site; coverage not established.
- [scripts/dataset-live-acceptance.cjs:18](<../../../../../../scripts/dataset-live-acceptance.cjs#L18>) — static-call-site; coverage not established.
- [scripts/statistics-live-acceptance.cjs:18](<../../../../../../scripts/statistics-live-acceptance.cjs#L18>) — static-call-site; coverage not established.
- [electron/ai/agents/entity-agent-protocol.test.cjs:8](<../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:11](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/ai/backend-reset.test.cjs:8](<../../../../../../electron/ai/backend-reset.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/ai/backend-reset.test.cjs:37](<../../../../../../electron/ai/backend-reset.test.cjs#L37>) — file-import-only; coverage not established.
- [electron/ai/context-limits.test.cjs:8](<../../../../../../electron/ai/context-limits.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/ai/dataset.test.cjs:6](<../../../../../../electron/ai/dataset.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:4](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:4](<../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-stream.test.cjs:5](<../../../../../../electron/ai/providers/ollama-stream.test.cjs#L5>) — file-import-only; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:4](<../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:7](<../../../../../../electron/ai/request-logger.test.cjs#L7>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:97](<../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L97>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-entity-agents-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-entity-agents-smoke.cjs#L7>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:8](<../../../../../../scripts/chat-live-acceptance.cjs#L8>) — file-import-only; coverage not established.
- [scripts/dataset-live-acceptance.cjs:8](<../../../../../../scripts/dataset-live-acceptance.cjs#L8>) — file-import-only; coverage not established.
- [scripts/statistics-live-acceptance.cjs:11](<../../../../../../scripts/statistics-live-acceptance.cjs#L11>) — file-import-only; coverage not established.

<a id="s-d98b4cc3aafbf180"></a>

## ModelRegistry.read

[electron/ai/model-registry.cjs:41](<../../../../../../electron/ai/model-registry.cjs#L41>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ModelRegistry](<model-registry.cjs.md#s-236ac83de9de4f06>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ProviderRegistry.entries](<provider-registry.cjs.md#s-dada83c12861f4df>) — [electron/ai/model-registry.cjs:44](<../../../../../../electron/ai/model-registry.cjs#L44>)
- [readJson](<../core/persistence/json-store.cjs.md#s-7f9e3b493f3ab942>) — [electron/ai/model-registry.cjs:49](<../../../../../../electron/ai/model-registry.cjs#L49>)

**Called by (statically resolved):**

- [&lt;anonymous@157:79&gt;](<backend-reset.test.cjs.md#s-041bcaccc44bab10>) — [electron/ai/backend-reset.test.cjs:166](<../../../../../../electron/ai/backend-reset.test.cjs#L166>)
- [ModelRegistry.state](<model-registry.cjs.md#s-a10ce2395e5d46a8>) — [electron/ai/model-registry.cjs:53](<../../../../../../electron/ai/model-registry.cjs#L53>)
- [ModelRegistry.save.&lt;anonymous@140:23&gt;](<model-registry.cjs.md#s-cfa467e587954c2f>) — [electron/ai/model-registry.cjs:146](<../../../../../../electron/ai/model-registry.cjs#L146>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/backend-reset.test.cjs:166](<../../../../../../electron/ai/backend-reset.test.cjs#L166>) — static-call-site; coverage not established.
- [electron/ai/agents/entity-agent-protocol.test.cjs:8](<../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:11](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/ai/backend-reset.test.cjs:8](<../../../../../../electron/ai/backend-reset.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/ai/backend-reset.test.cjs:37](<../../../../../../electron/ai/backend-reset.test.cjs#L37>) — file-import-only; coverage not established.
- [electron/ai/context-limits.test.cjs:8](<../../../../../../electron/ai/context-limits.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/ai/dataset.test.cjs:6](<../../../../../../electron/ai/dataset.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:4](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:4](<../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-stream.test.cjs:5](<../../../../../../electron/ai/providers/ollama-stream.test.cjs#L5>) — file-import-only; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:4](<../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:7](<../../../../../../electron/ai/request-logger.test.cjs#L7>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:97](<../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L97>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-entity-agents-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-entity-agents-smoke.cjs#L7>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:8](<../../../../../../scripts/chat-live-acceptance.cjs#L8>) — file-import-only; coverage not established.
- [scripts/dataset-live-acceptance.cjs:8](<../../../../../../scripts/dataset-live-acceptance.cjs#L8>) — file-import-only; coverage not established.
- [scripts/statistics-live-acceptance.cjs:11](<../../../../../../scripts/statistics-live-acceptance.cjs#L11>) — file-import-only; coverage not established.

<a id="s-a10ce2395e5d46a8"></a>

## ModelRegistry.state

[electron/ai/model-registry.cjs:52](<../../../../../../electron/ai/model-registry.cjs#L52>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

Merges each adapter's available models and status without changing explicit per-agent routing.

Purpose evidence: jsdoc.

Lexical owner: [ModelRegistry](<model-registry.cjs.md#s-236ac83de9de4f06>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ModelRegistry.read](<model-registry.cjs.md#s-d98b4cc3aafbf180>) — [electron/ai/model-registry.cjs:53](<../../../../../../electron/ai/model-registry.cjs#L53>)
- [ProviderRegistry.entries](<provider-registry.cjs.md#s-dada83c12861f4df>) — [electron/ai/model-registry.cjs:55](<../../../../../../electron/ai/model-registry.cjs#L55>)
- [ModelRegistry.save](<model-registry.cjs.md#s-ad7b27a4e7ba4dc3>) — [electron/ai/model-registry.cjs:99](<../../../../../../electron/ai/model-registry.cjs#L99>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 7.

- Promise.all — external-or-dynamic-dispatch; [electron/ai/model-registry.cjs:54](<../../../../../../electron/ai/model-registry.cjs#L54>)
- this.providers.entries().map — external-or-dynamic-dispatch; [electron/ai/model-registry.cjs:55](<../../../../../../electron/ai/model-registry.cjs#L55>)
- statuses.flatMap — external-or-dynamic-dispatch; [electron/ai/model-registry.cjs:60](<../../../../../../electron/ai/model-registry.cjs#L60>)
- models.some — external-or-dynamic-dispatch; [electron/ai/model-registry.cjs:94](<../../../../../../electron/ai/model-registry.cjs#L94>)
- statuses.find — external-or-dynamic-dispatch; [electron/ai/model-registry.cjs:101](<../../../../../../electron/ai/model-registry.cjs#L101>)
- statuses.map — external-or-dynamic-dispatch; [electron/ai/model-registry.cjs:108](<../../../../../../electron/ai/model-registry.cjs#L108>)
- models.map — external-or-dynamic-dispatch; [electron/ai/model-registry.cjs:128](<../../../../../../electron/ai/model-registry.cjs#L128>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agent-protocol.test.cjs:8](<../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:11](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/ai/backend-reset.test.cjs:8](<../../../../../../electron/ai/backend-reset.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/ai/backend-reset.test.cjs:37](<../../../../../../electron/ai/backend-reset.test.cjs#L37>) — file-import-only; coverage not established.
- [electron/ai/context-limits.test.cjs:8](<../../../../../../electron/ai/context-limits.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/ai/dataset.test.cjs:6](<../../../../../../electron/ai/dataset.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:4](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:4](<../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-stream.test.cjs:5](<../../../../../../electron/ai/providers/ollama-stream.test.cjs#L5>) — file-import-only; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:4](<../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:7](<../../../../../../electron/ai/request-logger.test.cjs#L7>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:97](<../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L97>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-entity-agents-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-entity-agents-smoke.cjs#L7>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:8](<../../../../../../scripts/chat-live-acceptance.cjs#L8>) — file-import-only; coverage not established.
- [scripts/dataset-live-acceptance.cjs:8](<../../../../../../scripts/dataset-live-acceptance.cjs#L8>) — file-import-only; coverage not established.
- [scripts/statistics-live-acceptance.cjs:11](<../../../../../../scripts/statistics-live-acceptance.cjs#L11>) — file-import-only; coverage not established.

<a id="s-478ea0a519965979"></a>

## ModelRegistry.state.&lt;anonymous@55:36&gt;

[electron/ai/model-registry.cjs:55](<../../../../../../electron/ai/model-registry.cjs#L55>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ModelRegistry.state](<model-registry.cjs.md#s-a10ce2395e5d46a8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| &#91;id, provider&#93; | &#91;any, any&#93; | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- provider.getStatus — external-or-dynamic-dispatch; [electron/ai/model-registry.cjs:57](<../../../../../../electron/ai/model-registry.cjs#L57>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agent-protocol.test.cjs:8](<../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:11](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/ai/backend-reset.test.cjs:8](<../../../../../../electron/ai/backend-reset.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/ai/backend-reset.test.cjs:37](<../../../../../../electron/ai/backend-reset.test.cjs#L37>) — file-import-only; coverage not established.
- [electron/ai/context-limits.test.cjs:8](<../../../../../../electron/ai/context-limits.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/ai/dataset.test.cjs:6](<../../../../../../electron/ai/dataset.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:4](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:4](<../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-stream.test.cjs:5](<../../../../../../electron/ai/providers/ollama-stream.test.cjs#L5>) — file-import-only; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:4](<../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:7](<../../../../../../electron/ai/request-logger.test.cjs#L7>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:97](<../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L97>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-entity-agents-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-entity-agents-smoke.cjs#L7>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:8](<../../../../../../scripts/chat-live-acceptance.cjs#L8>) — file-import-only; coverage not established.
- [scripts/dataset-live-acceptance.cjs:8](<../../../../../../scripts/dataset-live-acceptance.cjs#L8>) — file-import-only; coverage not established.
- [scripts/statistics-live-acceptance.cjs:11](<../../../../../../scripts/statistics-live-acceptance.cjs#L11>) — file-import-only; coverage not established.

<a id="s-a9b288a843c57114"></a>

## ModelRegistry.state.&lt;anonymous@60:37&gt;

[electron/ai/model-registry.cjs:60](<../../../../../../electron/ai/model-registry.cjs#L60>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ModelRegistry.state](<model-registry.cjs.md#s-a10ce2395e5d46a8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| status | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- status.models.map — external-or-dynamic-dispatch; [electron/ai/model-registry.cjs:61](<../../../../../../electron/ai/model-registry.cjs#L61>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agent-protocol.test.cjs:8](<../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:11](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/ai/backend-reset.test.cjs:8](<../../../../../../electron/ai/backend-reset.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/ai/backend-reset.test.cjs:37](<../../../../../../electron/ai/backend-reset.test.cjs#L37>) — file-import-only; coverage not established.
- [electron/ai/context-limits.test.cjs:8](<../../../../../../electron/ai/context-limits.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/ai/dataset.test.cjs:6](<../../../../../../electron/ai/dataset.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:4](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:4](<../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-stream.test.cjs:5](<../../../../../../electron/ai/providers/ollama-stream.test.cjs#L5>) — file-import-only; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:4](<../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:7](<../../../../../../electron/ai/request-logger.test.cjs#L7>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:97](<../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L97>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-entity-agents-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-entity-agents-smoke.cjs#L7>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:8](<../../../../../../scripts/chat-live-acceptance.cjs#L8>) — file-import-only; coverage not established.
- [scripts/dataset-live-acceptance.cjs:8](<../../../../../../scripts/dataset-live-acceptance.cjs#L8>) — file-import-only; coverage not established.
- [scripts/statistics-live-acceptance.cjs:11](<../../../../../../scripts/statistics-live-acceptance.cjs#L11>) — file-import-only; coverage not established.

<a id="s-d5b4daf46614ef3b"></a>

## ModelRegistry.state.&lt;anonymous@60:37&gt;.&lt;anonymous@61:25&gt;

[electron/ai/model-registry.cjs:61](<../../../../../../electron/ai/model-registry.cjs#L61>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ModelRegistry.state.&lt;anonymous@60:37&gt;](<model-registry.cjs.md#s-a9b288a843c57114>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| model | any | compiler-inferred | required |

Returns: { providerId: any; modelId: any; displayName: any; location: string; installed: boolean; available: boolean; active: boolean; profile: any; recommended: boolean; pricingClass: string; inputUsdPerMillion: any; outputUsdPerMillion: any; capabilities: any; contextLength: any; outputLimit: any; warnings: {}; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agent-protocol.test.cjs:8](<../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:11](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/ai/backend-reset.test.cjs:8](<../../../../../../electron/ai/backend-reset.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/ai/backend-reset.test.cjs:37](<../../../../../../electron/ai/backend-reset.test.cjs#L37>) — file-import-only; coverage not established.
- [electron/ai/context-limits.test.cjs:8](<../../../../../../electron/ai/context-limits.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/ai/dataset.test.cjs:6](<../../../../../../electron/ai/dataset.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:4](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:4](<../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-stream.test.cjs:5](<../../../../../../electron/ai/providers/ollama-stream.test.cjs#L5>) — file-import-only; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:4](<../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:7](<../../../../../../electron/ai/request-logger.test.cjs#L7>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:97](<../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L97>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-entity-agents-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-entity-agents-smoke.cjs#L7>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:8](<../../../../../../scripts/chat-live-acceptance.cjs#L8>) — file-import-only; coverage not established.
- [scripts/dataset-live-acceptance.cjs:8](<../../../../../../scripts/dataset-live-acceptance.cjs#L8>) — file-import-only; coverage not established.
- [scripts/statistics-live-acceptance.cjs:11](<../../../../../../scripts/statistics-live-acceptance.cjs#L11>) — file-import-only; coverage not established.

<a id="s-f5a217ccad3d3ea8"></a>

## ModelRegistry.state.&lt;anonymous@95:9&gt;

[electron/ai/model-registry.cjs:95](<../../../../../../electron/ai/model-registry.cjs#L95>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ModelRegistry.state](<model-registry.cjs.md#s-a10ce2395e5d46a8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| model | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agent-protocol.test.cjs:8](<../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:11](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/ai/backend-reset.test.cjs:8](<../../../../../../electron/ai/backend-reset.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/ai/backend-reset.test.cjs:37](<../../../../../../electron/ai/backend-reset.test.cjs#L37>) — file-import-only; coverage not established.
- [electron/ai/context-limits.test.cjs:8](<../../../../../../electron/ai/context-limits.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/ai/dataset.test.cjs:6](<../../../../../../electron/ai/dataset.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:4](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:4](<../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-stream.test.cjs:5](<../../../../../../electron/ai/providers/ollama-stream.test.cjs#L5>) — file-import-only; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:4](<../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:7](<../../../../../../electron/ai/request-logger.test.cjs#L7>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:97](<../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L97>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-entity-agents-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-entity-agents-smoke.cjs#L7>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:8](<../../../../../../scripts/chat-live-acceptance.cjs#L8>) — file-import-only; coverage not established.
- [scripts/dataset-live-acceptance.cjs:8](<../../../../../../scripts/dataset-live-acceptance.cjs#L8>) — file-import-only; coverage not established.
- [scripts/statistics-live-acceptance.cjs:11](<../../../../../../scripts/statistics-live-acceptance.cjs#L11>) — file-import-only; coverage not established.

<a id="s-2bb1ed9e57713aee"></a>

## ModelRegistry.state.&lt;anonymous@102:7&gt;

[electron/ai/model-registry.cjs:102](<../../../../../../electron/ai/model-registry.cjs#L102>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ModelRegistry.state](<model-registry.cjs.md#s-a10ce2395e5d46a8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| status | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agent-protocol.test.cjs:8](<../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:11](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/ai/backend-reset.test.cjs:8](<../../../../../../electron/ai/backend-reset.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/ai/backend-reset.test.cjs:37](<../../../../../../electron/ai/backend-reset.test.cjs#L37>) — file-import-only; coverage not established.
- [electron/ai/context-limits.test.cjs:8](<../../../../../../electron/ai/context-limits.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/ai/dataset.test.cjs:6](<../../../../../../electron/ai/dataset.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:4](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:4](<../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-stream.test.cjs:5](<../../../../../../electron/ai/providers/ollama-stream.test.cjs#L5>) — file-import-only; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:4](<../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:7](<../../../../../../electron/ai/request-logger.test.cjs#L7>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:97](<../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L97>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-entity-agents-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-entity-agents-smoke.cjs#L7>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:8](<../../../../../../scripts/chat-live-acceptance.cjs#L8>) — file-import-only; coverage not established.
- [scripts/dataset-live-acceptance.cjs:8](<../../../../../../scripts/dataset-live-acceptance.cjs#L8>) — file-import-only; coverage not established.
- [scripts/statistics-live-acceptance.cjs:11](<../../../../../../scripts/statistics-live-acceptance.cjs#L11>) — file-import-only; coverage not established.

<a id="s-fddbe905bb9b038f"></a>

## ModelRegistry.state.&lt;anonymous@109:9&gt;

[electron/ai/model-registry.cjs:109](<../../../../../../electron/ai/model-registry.cjs#L109>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ModelRegistry.state](<model-registry.cjs.md#s-a10ce2395e5d46a8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { id, online, error, configured, secureStorageAvailable } | { id: any; online: any; error: any; configured: any; secureStorageAvailable: any; } | compiler-inferred | required |

Returns: { id: any; displayName: string; location: string; online: any; error: any; configured: any; secureStorageAvailable: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agent-protocol.test.cjs:8](<../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:11](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/ai/backend-reset.test.cjs:8](<../../../../../../electron/ai/backend-reset.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/ai/backend-reset.test.cjs:37](<../../../../../../electron/ai/backend-reset.test.cjs#L37>) — file-import-only; coverage not established.
- [electron/ai/context-limits.test.cjs:8](<../../../../../../electron/ai/context-limits.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/ai/dataset.test.cjs:6](<../../../../../../electron/ai/dataset.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:4](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:4](<../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-stream.test.cjs:5](<../../../../../../electron/ai/providers/ollama-stream.test.cjs#L5>) — file-import-only; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:4](<../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:7](<../../../../../../electron/ai/request-logger.test.cjs#L7>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:97](<../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L97>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-entity-agents-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-entity-agents-smoke.cjs#L7>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:8](<../../../../../../scripts/chat-live-acceptance.cjs#L8>) — file-import-only; coverage not established.
- [scripts/dataset-live-acceptance.cjs:8](<../../../../../../scripts/dataset-live-acceptance.cjs#L8>) — file-import-only; coverage not established.
- [scripts/statistics-live-acceptance.cjs:11](<../../../../../../scripts/statistics-live-acceptance.cjs#L11>) — file-import-only; coverage not established.

<a id="s-e7e7357ff82d2b43"></a>

## ModelRegistry.state.&lt;anonymous@128:26&gt;

[electron/ai/model-registry.cjs:128](<../../../../../../electron/ai/model-registry.cjs#L128>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ModelRegistry.state](<model-registry.cjs.md#s-a10ce2395e5d46a8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| model | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agent-protocol.test.cjs:8](<../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:11](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/ai/backend-reset.test.cjs:8](<../../../../../../electron/ai/backend-reset.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/ai/backend-reset.test.cjs:37](<../../../../../../electron/ai/backend-reset.test.cjs#L37>) — file-import-only; coverage not established.
- [electron/ai/context-limits.test.cjs:8](<../../../../../../electron/ai/context-limits.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/ai/dataset.test.cjs:6](<../../../../../../electron/ai/dataset.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:4](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:4](<../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-stream.test.cjs:5](<../../../../../../electron/ai/providers/ollama-stream.test.cjs#L5>) — file-import-only; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:4](<../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:7](<../../../../../../electron/ai/request-logger.test.cjs#L7>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:97](<../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L97>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-entity-agents-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-entity-agents-smoke.cjs#L7>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:8](<../../../../../../scripts/chat-live-acceptance.cjs#L8>) — file-import-only; coverage not established.
- [scripts/dataset-live-acceptance.cjs:8](<../../../../../../scripts/dataset-live-acceptance.cjs#L8>) — file-import-only; coverage not established.
- [scripts/statistics-live-acceptance.cjs:11](<../../../../../../scripts/statistics-live-acceptance.cjs#L11>) — file-import-only; coverage not established.

<a id="s-3e05acf42245b191"></a>

## ModelRegistry.providerFor

[electron/ai/model-registry.cjs:136](<../../../../../../electron/ai/model-registry.cjs#L136>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ModelRegistry](<model-registry.cjs.md#s-236ac83de9de4f06>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| id | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ProviderRegistry.get](<provider-registry.cjs.md#s-aa0c9952767d6afb>) — [electron/ai/model-registry.cjs:137](<../../../../../../electron/ai/model-registry.cjs#L137>)

**Called by (statically resolved):**

- [&lt;anonymous@157:79&gt;.&lt;anonymous@167:17&gt;](<backend-reset.test.cjs.md#s-8729255824b176db>) — [electron/ai/backend-reset.test.cjs:167](<../../../../../../electron/ai/backend-reset.test.cjs#L167>)
- [ModelRegistry.validateSelection](<model-registry.cjs.md#s-125d10d68364d877>) — [electron/ai/model-registry.cjs:159](<../../../../../../electron/ai/model-registry.cjs#L159>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/backend-reset.test.cjs:167](<../../../../../../electron/ai/backend-reset.test.cjs#L167>) — static-call-site; coverage not established.
- [electron/ai/agents/entity-agent-protocol.test.cjs:8](<../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:11](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/ai/backend-reset.test.cjs:8](<../../../../../../electron/ai/backend-reset.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/ai/backend-reset.test.cjs:37](<../../../../../../electron/ai/backend-reset.test.cjs#L37>) — file-import-only; coverage not established.
- [electron/ai/context-limits.test.cjs:8](<../../../../../../electron/ai/context-limits.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/ai/dataset.test.cjs:6](<../../../../../../electron/ai/dataset.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:4](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:4](<../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-stream.test.cjs:5](<../../../../../../electron/ai/providers/ollama-stream.test.cjs#L5>) — file-import-only; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:4](<../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:7](<../../../../../../electron/ai/request-logger.test.cjs#L7>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:97](<../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L97>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-entity-agents-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-entity-agents-smoke.cjs#L7>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:8](<../../../../../../scripts/chat-live-acceptance.cjs#L8>) — file-import-only; coverage not established.
- [scripts/dataset-live-acceptance.cjs:8](<../../../../../../scripts/dataset-live-acceptance.cjs#L8>) — file-import-only; coverage not established.
- [scripts/statistics-live-acceptance.cjs:11](<../../../../../../scripts/statistics-live-acceptance.cjs#L11>) — file-import-only; coverage not established.

<a id="s-ad7b27a4e7ba4dc3"></a>

## ModelRegistry.save

[electron/ai/model-registry.cjs:139](<../../../../../../electron/ai/model-registry.cjs#L139>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ModelRegistry](<model-registry.cjs.md#s-236ac83de9de4f06>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| patch | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [ModelRegistry.state](<model-registry.cjs.md#s-a10ce2395e5d46a8>) — [electron/ai/model-registry.cjs:99](<../../../../../../electron/ai/model-registry.cjs#L99>)
- [main](<../../scripts/chat-live-acceptance.cjs.md#s-37e0176fb42530c3>) — [scripts/chat-live-acceptance.cjs:152](<../../../../../../scripts/chat-live-acceptance.cjs#L152>)
- [main](<../../scripts/chat-live-acceptance.cjs.md#s-37e0176fb42530c3>) — [scripts/chat-live-acceptance.cjs:188](<../../../../../../scripts/chat-live-acceptance.cjs#L188>)
- [main](<../../scripts/chat-live-acceptance.cjs.md#s-37e0176fb42530c3>) — [scripts/chat-live-acceptance.cjs:200](<../../../../../../scripts/chat-live-acceptance.cjs#L200>)
- [main](<../../scripts/chat-live-acceptance.cjs.md#s-37e0176fb42530c3>) — [scripts/chat-live-acceptance.cjs:221](<../../../../../../scripts/chat-live-acceptance.cjs#L221>)
- [main](<../../scripts/chat-live-acceptance.cjs.md#s-37e0176fb42530c3>) — [scripts/chat-live-acceptance.cjs:227](<../../../../../../scripts/chat-live-acceptance.cjs#L227>)
- [main](<../../scripts/dataset-live-acceptance.cjs.md#s-926d3fce0595b737>) — [scripts/dataset-live-acceptance.cjs:20](<../../../../../../scripts/dataset-live-acceptance.cjs#L20>)
- [main](<../../scripts/engine-chat-live.cjs.md#s-d9d25d752f6311a1>) — [scripts/engine-chat-live.cjs:60](<../../../../../../scripts/engine-chat-live.cjs#L60>)
- [&lt;anonymous@14:2&gt;](<../../scripts/statistics-live-acceptance.cjs.md#s-771764a0f9e6c967>) — [scripts/statistics-live-acceptance.cjs:22](<../../../../../../scripts/statistics-live-acceptance.cjs#L22>)

Unresolved / external call sites: 1.

- this.queue — signature-only-candidate; [electron/ai/model-registry.cjs:140](<../../../../../../electron/ai/model-registry.cjs#L140>)

**Related tests / acceptance harnesses:**

- [scripts/chat-live-acceptance.cjs:152](<../../../../../../scripts/chat-live-acceptance.cjs#L152>) — static-call-site; coverage not established.
- [scripts/chat-live-acceptance.cjs:188](<../../../../../../scripts/chat-live-acceptance.cjs#L188>) — static-call-site; coverage not established.
- [scripts/chat-live-acceptance.cjs:200](<../../../../../../scripts/chat-live-acceptance.cjs#L200>) — static-call-site; coverage not established.
- [scripts/chat-live-acceptance.cjs:221](<../../../../../../scripts/chat-live-acceptance.cjs#L221>) — static-call-site; coverage not established.
- [scripts/chat-live-acceptance.cjs:227](<../../../../../../scripts/chat-live-acceptance.cjs#L227>) — static-call-site; coverage not established.
- [scripts/dataset-live-acceptance.cjs:20](<../../../../../../scripts/dataset-live-acceptance.cjs#L20>) — static-call-site; coverage not established.
- [scripts/statistics-live-acceptance.cjs:22](<../../../../../../scripts/statistics-live-acceptance.cjs#L22>) — static-call-site; coverage not established.
- [electron/ai/agents/entity-agent-protocol.test.cjs:8](<../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:11](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/ai/backend-reset.test.cjs:8](<../../../../../../electron/ai/backend-reset.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/ai/backend-reset.test.cjs:37](<../../../../../../electron/ai/backend-reset.test.cjs#L37>) — file-import-only; coverage not established.
- [electron/ai/context-limits.test.cjs:8](<../../../../../../electron/ai/context-limits.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/ai/dataset.test.cjs:6](<../../../../../../electron/ai/dataset.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:4](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:4](<../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-stream.test.cjs:5](<../../../../../../electron/ai/providers/ollama-stream.test.cjs#L5>) — file-import-only; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:4](<../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:7](<../../../../../../electron/ai/request-logger.test.cjs#L7>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:97](<../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L97>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-entity-agents-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-entity-agents-smoke.cjs#L7>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:8](<../../../../../../scripts/chat-live-acceptance.cjs#L8>) — file-import-only; coverage not established.
- [scripts/dataset-live-acceptance.cjs:8](<../../../../../../scripts/dataset-live-acceptance.cjs#L8>) — file-import-only; coverage not established.
- [scripts/statistics-live-acceptance.cjs:11](<../../../../../../scripts/statistics-live-acceptance.cjs#L11>) — file-import-only; coverage not established.

<a id="s-cfa467e587954c2f"></a>

## ModelRegistry.save.&lt;anonymous@140:23&gt;

[electron/ai/model-registry.cjs:140](<../../../../../../electron/ai/model-registry.cjs#L140>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ModelRegistry.save](<model-registry.cjs.md#s-ad7b27a4e7ba4dc3>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ModelRuntimeError.constructor](<../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/model-registry.cjs:142](<../../../../../../electron/ai/model-registry.cjs#L142>)
- [validateSettings](<model-registry.cjs.md#s-f1f9d1092d51054a>) — [electron/ai/model-registry.cjs:146](<../../../../../../electron/ai/model-registry.cjs#L146>)
- [ModelRegistry.read](<model-registry.cjs.md#s-d98b4cc3aafbf180>) — [electron/ai/model-registry.cjs:146](<../../../../../../electron/ai/model-registry.cjs#L146>)
- [ModelRegistry.validateSelection](<model-registry.cjs.md#s-125d10d68364d877>) — [electron/ai/model-registry.cjs:147](<../../../../../../electron/ai/model-registry.cjs#L147>)
- [writeJson](<../core/persistence/json-store.cjs.md#s-5030c6156f98dba1>) — [electron/ai/model-registry.cjs:148](<../../../../../../electron/ai/model-registry.cjs#L148>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- Array.isArray — external-or-dynamic-dispatch; [electron/ai/model-registry.cjs:141](<../../../../../../electron/ai/model-registry.cjs#L141>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agent-protocol.test.cjs:8](<../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:11](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/ai/backend-reset.test.cjs:8](<../../../../../../electron/ai/backend-reset.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/ai/backend-reset.test.cjs:37](<../../../../../../electron/ai/backend-reset.test.cjs#L37>) — file-import-only; coverage not established.
- [electron/ai/context-limits.test.cjs:8](<../../../../../../electron/ai/context-limits.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/ai/dataset.test.cjs:6](<../../../../../../electron/ai/dataset.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:4](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:4](<../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-stream.test.cjs:5](<../../../../../../electron/ai/providers/ollama-stream.test.cjs#L5>) — file-import-only; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:4](<../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:7](<../../../../../../electron/ai/request-logger.test.cjs#L7>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:97](<../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L97>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-entity-agents-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-entity-agents-smoke.cjs#L7>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:8](<../../../../../../scripts/chat-live-acceptance.cjs#L8>) — file-import-only; coverage not established.
- [scripts/dataset-live-acceptance.cjs:8](<../../../../../../scripts/dataset-live-acceptance.cjs#L8>) — file-import-only; coverage not established.
- [scripts/statistics-live-acceptance.cjs:11](<../../../../../../scripts/statistics-live-acceptance.cjs#L11>) — file-import-only; coverage not established.

<a id="s-125d10d68364d877"></a>

## ModelRegistry.validateSelection

[electron/ai/model-registry.cjs:152](<../../../../../../electron/ai/model-registry.cjs#L152>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ModelRegistry](<model-registry.cjs.md#s-236ac83de9de4f06>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| settings | any | compiler-inferred | required |
| options | {} | compiler-inferred | optional, default present |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [validateSettings](<model-registry.cjs.md#s-f1f9d1092d51054a>) — [electron/ai/model-registry.cjs:153](<../../../../../../electron/ai/model-registry.cjs#L153>)
- [ModelRuntimeError.constructor](<../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/model-registry.cjs:155](<../../../../../../electron/ai/model-registry.cjs#L155>)
- [ModelRegistry.providerFor](<model-registry.cjs.md#s-3e05acf42245b191>) — [electron/ai/model-registry.cjs:159](<../../../../../../electron/ai/model-registry.cjs#L159>)
- [ModelRuntimeError.constructor](<../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/model-registry.cjs:163](<../../../../../../electron/ai/model-registry.cjs#L163>)
- [ModelRuntimeError.constructor](<../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/model-registry.cjs:177](<../../../../../../electron/ai/model-registry.cjs#L177>)
- [contextLimit](<../shared/context-limits.cjs.md#s-cb06ea768ce0bca3>) — [electron/ai/model-registry.cjs:181](<../../../../../../electron/ai/model-registry.cjs#L181>)
- [ModelRuntimeError.constructor](<../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/model-registry.cjs:186](<../../../../../../electron/ai/model-registry.cjs#L186>)
- [ModelRuntimeError.constructor](<../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/model-registry.cjs:191](<../../../../../../electron/ai/model-registry.cjs#L191>)
- [ModelRuntimeError.constructor](<../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/model-registry.cjs:199](<../../../../../../electron/ai/model-registry.cjs#L199>)

**Called by (statically resolved):**

- [&lt;anonymous@22:77&gt;](<context-limits.test.cjs.md#s-e7c5cbcc1791f23f>) — [electron/ai/context-limits.test.cjs:39](<../../../../../../electron/ai/context-limits.test.cjs#L39>)
- [&lt;anonymous@22:77&gt;](<context-limits.test.cjs.md#s-e7c5cbcc1791f23f>) — [electron/ai/context-limits.test.cjs:43](<../../../../../../electron/ai/context-limits.test.cjs#L43>)
- [&lt;anonymous@22:77&gt;](<context-limits.test.cjs.md#s-e7c5cbcc1791f23f>) — [electron/ai/context-limits.test.cjs:47](<../../../../../../electron/ai/context-limits.test.cjs#L47>)
- [ModelRegistry.save.&lt;anonymous@140:23&gt;](<model-registry.cjs.md#s-cfa467e587954c2f>) — [electron/ai/model-registry.cjs:147](<../../../../../../electron/ai/model-registry.cjs#L147>)

Unresolved / external call sites: 4.

- provider.listModels — external-or-dynamic-dispatch; [electron/ai/model-registry.cjs:160](<../../../../../../electron/ai/model-registry.cjs#L160>)
- models.find — external-or-dynamic-dispatch; [electron/ai/model-registry.cjs:161](<../../../../../../electron/ai/model-registry.cjs#L161>)
- provider.describeModel — external-or-dynamic-dispatch; [electron/ai/model-registry.cjs:171](<../../../../../../electron/ai/model-registry.cjs#L171>)
- details.capabilities.includes — external-or-dynamic-dispatch; [electron/ai/model-registry.cjs:175](<../../../../../../electron/ai/model-registry.cjs#L175>)

**Related tests / acceptance harnesses:**

- [electron/ai/context-limits.test.cjs:39](<../../../../../../electron/ai/context-limits.test.cjs#L39>) — static-call-site; coverage not established.
- [electron/ai/context-limits.test.cjs:43](<../../../../../../electron/ai/context-limits.test.cjs#L43>) — static-call-site; coverage not established.
- [electron/ai/context-limits.test.cjs:47](<../../../../../../electron/ai/context-limits.test.cjs#L47>) — static-call-site; coverage not established.
- [electron/ai/agents/entity-agent-protocol.test.cjs:8](<../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:11](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/ai/backend-reset.test.cjs:8](<../../../../../../electron/ai/backend-reset.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/ai/backend-reset.test.cjs:37](<../../../../../../electron/ai/backend-reset.test.cjs#L37>) — file-import-only; coverage not established.
- [electron/ai/context-limits.test.cjs:8](<../../../../../../electron/ai/context-limits.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/ai/dataset.test.cjs:6](<../../../../../../electron/ai/dataset.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:4](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:4](<../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-stream.test.cjs:5](<../../../../../../electron/ai/providers/ollama-stream.test.cjs#L5>) — file-import-only; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:4](<../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:7](<../../../../../../electron/ai/request-logger.test.cjs#L7>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:97](<../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L97>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-entity-agents-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-entity-agents-smoke.cjs#L7>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:8](<../../../../../../scripts/chat-live-acceptance.cjs#L8>) — file-import-only; coverage not established.
- [scripts/dataset-live-acceptance.cjs:8](<../../../../../../scripts/dataset-live-acceptance.cjs#L8>) — file-import-only; coverage not established.
- [scripts/statistics-live-acceptance.cjs:11](<../../../../../../scripts/statistics-live-acceptance.cjs#L11>) — file-import-only; coverage not established.

<a id="s-31846a9d447e09f6"></a>

## ModelRegistry.validateSelection.&lt;anonymous@161:34&gt;

[electron/ai/model-registry.cjs:161](<../../../../../../electron/ai/model-registry.cjs#L161>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ModelRegistry.validateSelection](<model-registry.cjs.md#s-125d10d68364d877>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| model | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agent-protocol.test.cjs:8](<../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:11](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/ai/backend-reset.test.cjs:8](<../../../../../../electron/ai/backend-reset.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/ai/backend-reset.test.cjs:37](<../../../../../../electron/ai/backend-reset.test.cjs#L37>) — file-import-only; coverage not established.
- [electron/ai/context-limits.test.cjs:8](<../../../../../../electron/ai/context-limits.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/ai/dataset.test.cjs:6](<../../../../../../electron/ai/dataset.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/ai/providers/gemini-provider.test.cjs:4](<../../../../../../electron/ai/providers/gemini-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/nvidia-provider.test.cjs:4](<../../../../../../electron/ai/providers/nvidia-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/providers/ollama-stream.test.cjs:5](<../../../../../../electron/ai/providers/ollama-stream.test.cjs#L5>) — file-import-only; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:4](<../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L4>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:7](<../../../../../../electron/ai/request-logger.test.cjs#L7>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:97](<../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L97>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-entity-agents-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-entity-agents-smoke.cjs#L7>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:8](<../../../../../../scripts/chat-live-acceptance.cjs#L8>) — file-import-only; coverage not established.
- [scripts/dataset-live-acceptance.cjs:8](<../../../../../../scripts/dataset-live-acceptance.cjs#L8>) — file-import-only; coverage not established.
- [scripts/statistics-live-acceptance.cjs:11](<../../../../../../scripts/statistics-live-acceptance.cjs#L11>) — file-import-only; coverage not established.
