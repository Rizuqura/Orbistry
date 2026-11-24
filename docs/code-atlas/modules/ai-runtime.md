# Retained AI runtime

[Atlas](<../README.md>) / [All symbols and callers/callees](<../symbols/ai-runtime.md>)

Owns optional model configuration, context, conversation stores and legacy/experimental runtime modules. Presence does not imply active composition.

Owns: Remaining electron/ai/ modules. This ownership is editorial; source locations and import edges below are generated facts.

92 source files; 1790 callable declarations; 66 contract declarations.

## Entry points and exported symbols

Candidates from compiler export tables and methods on exported classes. Registration, availability, authorization and runtime reachability must be checked separately.

| Symbol | Source | Kind |
| --- | --- | --- |
| [resetBackend](<../symbols/files/electron/ai/backend-reset.cjs.md#s-8923e8f07754093d>) | [electron/ai/backend-reset.cjs:66](<../../../electron/ai/backend-reset.cjs#L66>) | FunctionDeclaration |
| [assertFields](<../symbols/files/electron/ai/chat/chat-service.cjs.md#s-b1dfcc9ab99869fc>) | [electron/ai/chat/chat-service.cjs:11](<../../../electron/ai/chat/chat-service.cjs#L11>) | FunctionDeclaration |
| [ChatService](<../symbols/files/electron/ai/chat/chat-service.cjs.md#s-9755710680ee4d1c>) | [electron/ai/chat/chat-service.cjs:24](<../../../electron/ai/chat/chat-service.cjs#L24>) | ClassDeclaration |
| [validId](<../symbols/files/electron/ai/chat/conversation-store.cjs.md#s-24af4829fceb24b2>) | [electron/ai/chat/conversation-store.cjs:15](<../../../electron/ai/chat/conversation-store.cjs#L15>) | FunctionDeclaration |
| [validateConversation](<../symbols/files/electron/ai/chat/conversation-store.cjs.md#s-8fcc95a0b5a57e3e>) | [electron/ai/chat/conversation-store.cjs:25](<../../../electron/ai/chat/conversation-store.cjs#L25>) | FunctionDeclaration |
| [applyRun](<../symbols/files/electron/ai/chat/conversation-store.cjs.md#s-3844eb73bb69ccca>) | [electron/ai/chat/conversation-store.cjs:226](<../../../electron/ai/chat/conversation-store.cjs#L226>) | FunctionDeclaration |
| [ConversationStore](<../symbols/files/electron/ai/chat/conversation-store.cjs.md#s-a8bd7ce130e13fa0>) | [electron/ai/chat/conversation-store.cjs:310](<../../../electron/ai/chat/conversation-store.cjs#L310>) | ClassDeclaration |
| [sha](<../symbols/files/electron/ai/chronoz-adapter.cjs.md#s-c95e7f0287adc21f>) | [electron/ai/chronoz-adapter.cjs:8](<../../../electron/ai/chronoz-adapter.cjs#L8>) | ArrowFunction |
| [monthSchema](<../symbols/files/electron/ai/chronoz-adapter.cjs.md#s-bd133e0c2f103dba>) | [electron/ai/chronoz-adapter.cjs:9](<../../../electron/ai/chronoz-adapter.cjs#L9>) | SchemaBinding |
| [argumentsSchema](<../symbols/files/electron/ai/chronoz-adapter.cjs.md#s-8b77fa8b5f5a4017>) | [electron/ai/chronoz-adapter.cjs:10](<../../../electron/ai/chronoz-adapter.cjs#L10>) | SchemaBinding |
| [unlinked](<../symbols/files/electron/ai/chronoz-adapter.cjs.md#s-44f5cb0fb77f737c>) | [electron/ai/chronoz-adapter.cjs:48](<../../../electron/ai/chronoz-adapter.cjs#L48>) | FunctionDeclaration |
| [boundedRead](<../symbols/files/electron/ai/chronoz-adapter.cjs.md#s-ab7f70176d8b6e40>) | [electron/ai/chronoz-adapter.cjs:60](<../../../electron/ai/chronoz-adapter.cjs#L60>) | FunctionDeclaration |
| [inspectBundle](<../symbols/files/electron/ai/chronoz-adapter.cjs.md#s-ca72c2c506d158b6>) | [electron/ai/chronoz-adapter.cjs:89](<../../../electron/ai/chronoz-adapter.cjs#L89>) | FunctionDeclaration |
| [runTrigger](<../symbols/files/electron/ai/chronoz-adapter.cjs.md#s-1578e21474f428b1>) | [electron/ai/chronoz-adapter.cjs:194](<../../../electron/ai/chronoz-adapter.cjs#L194>) | FunctionDeclaration |
| [verifyReport](<../symbols/files/electron/ai/chronoz-adapter.cjs.md#s-d95eb12fa1b37a46>) | [electron/ai/chronoz-adapter.cjs:341](<../../../electron/ai/chronoz-adapter.cjs#L341>) | FunctionDeclaration |
| [ContextBoxStore](<../symbols/files/electron/ai/context-box-store.cjs.md#s-ffcdbdc5ad477305>) | [electron/ai/context-box-store.cjs:66](<../../../electron/ai/context-box-store.cjs#L66>) | ClassDeclaration |
| [contextIdentity](<../symbols/files/electron/ai/context-identity.cjs.md#s-9645374bbdc64d1f>) | [electron/ai/context-identity.cjs:4](<../../../electron/ai/context-identity.cjs#L4>) | FunctionDeclaration |
| [validateContextIdentity](<../symbols/files/electron/ai/context-identity.cjs.md#s-074b8d05ecfc17f5>) | [electron/ai/context-identity.cjs:47](<../../../electron/ai/context-identity.cjs#L47>) | FunctionDeclaration |
| [engineIdentity](<../symbols/files/electron/ai/context-identity.cjs.md#s-aff379835792e773>) | [electron/ai/context-identity.cjs:67](<../../../electron/ai/context-identity.cjs#L67>) | FunctionDeclaration |
| [validateEngineIdentity](<../symbols/files/electron/ai/context-identity.cjs.md#s-711136150fa5d9a3>) | [electron/ai/context-identity.cjs:76](<../../../electron/ai/context-identity.cjs#L76>) | FunctionDeclaration |
| [standaloneIdentity](<../symbols/files/electron/ai/context-identity.cjs.md#s-7720b034271dec17>) | [electron/ai/context-identity.cjs:84](<../../../electron/ai/context-identity.cjs#L84>) | FunctionDeclaration |
| [validateStandaloneIdentity](<../symbols/files/electron/ai/context-identity.cjs.md#s-8a60b537748757f1>) | [electron/ai/context-identity.cjs:93](<../../../electron/ai/context-identity.cjs#L93>) | FunctionDeclaration |
| [validateCredentialState](<../symbols/files/electron/ai/credential-store.cjs.md#s-f2db6513cc372f52>) | [electron/ai/credential-store.cjs:49](<../../../electron/ai/credential-store.cjs#L49>) | FunctionDeclaration |
| [CredentialStore](<../symbols/files/electron/ai/credential-store.cjs.md#s-90257819fdcf0fd6>) | [electron/ai/credential-store.cjs:59](<../../../electron/ai/credential-store.cjs#L59>) | ClassDeclaration |
| [parseCsv](<../symbols/files/electron/ai/dataset-engine.cjs.md#s-f70539a577c02a73>) | [electron/ai/dataset-engine.cjs:75](<../../../electron/ai/dataset-engine.cjs#L75>) | FunctionDeclaration |
| [describe](<../symbols/files/electron/ai/dataset-engine.cjs.md#s-73720344763fe3b2>) | [electron/ai/dataset-engine.cjs:150](<../../../electron/ai/dataset-engine.cjs#L150>) | FunctionDeclaration |
| [query](<../symbols/files/electron/ai/dataset-engine.cjs.md#s-576582b2e04147d3>) | [electron/ai/dataset-engine.cjs:173](<../../../electron/ai/dataset-engine.cjs#L173>) | FunctionDeclaration |
| [inspectDatasetAnswer](<../symbols/files/electron/ai/dataset-evidence.cjs.md#s-5b66ea9d9a17227b>) | [electron/ai/dataset-evidence.cjs:45](<../../../electron/ai/dataset-evidence.cjs#L45>) | FunctionDeclaration |
| [validateDatasetAnswer](<../symbols/files/electron/ai/dataset-evidence.cjs.md#s-14df3b3c938f7520>) | [electron/ai/dataset-evidence.cjs:180](<../../../electron/ai/dataset-evidence.cjs#L180>) | FunctionDeclaration |
| [PLAN_FORMAT](<../symbols/files/electron/ai/dataset-planner.cjs.md#s-e45255f39fa4da12>) | [electron/ai/dataset-planner.cjs:87](<../../../electron/ai/dataset-planner.cjs#L87>) | VariableDeclaration |
| [planFormat](<../symbols/files/electron/ai/dataset-planner.cjs.md#s-9ddfba17287448fa>) | [electron/ai/dataset-planner.cjs:107](<../../../electron/ai/dataset-planner.cjs#L107>) | FunctionDeclaration |
| [isPlanFormat](<../symbols/files/electron/ai/dataset-planner.cjs.md#s-6b924db4a2611106>) | [electron/ai/dataset-planner.cjs:132](<../../../electron/ai/dataset-planner.cjs#L132>) | FunctionDeclaration |
| [planDataset](<../symbols/files/electron/ai/dataset-planner.cjs.md#s-9b1e48bfd220f829>) | [electron/ai/dataset-planner.cjs:169](<../../../electron/ai/dataset-planner.cjs#L169>) | FunctionDeclaration |
| [createDatasetSession](<../symbols/files/electron/ai/dataset-session.cjs.md#s-4ee3f1546b09b38d>) | [electron/ai/dataset-session.cjs:5](<../../../electron/ai/dataset-session.cjs#L5>) | FunctionDeclaration |
| [TOOL_NAME](<../symbols/files/electron/ai/engine-chat.cjs.md#s-ec9c925981e2fd80>) | [electron/ai/engine-chat.cjs:5](<../../../electron/ai/engine-chat.cjs#L5>) | VariableDeclaration |
| [readJson](<../symbols/files/electron/ai/engine-chat.cjs.md#s-ac61e6dbcf3b2c61>) | [electron/ai/engine-chat.cjs:33](<../../../electron/ai/engine-chat.cjs#L33>) | FunctionDeclaration |
| [engineNode](<../symbols/files/electron/ai/engine-chat.cjs.md#s-e9a5188fdf0046c0>) | [electron/ai/engine-chat.cjs:51](<../../../electron/ai/engine-chat.cjs#L51>) | FunctionDeclaration |
| [selectTool](<../symbols/files/electron/ai/engine-chat.cjs.md#s-14e66eaa8df6d33c>) | [electron/ai/engine-chat.cjs:66](<../../../electron/ai/engine-chat.cjs#L66>) | FunctionDeclaration |
| [reportSchema](<../symbols/files/electron/ai/engine-chat.cjs.md#s-388644b265f372d9>) | [electron/ai/engine-chat.cjs:306](<../../../electron/ai/engine-chat.cjs#L306>) | SchemaBinding |
| [runEngineTurn](<../symbols/files/electron/ai/engine-chat.cjs.md#s-5191968f4b9121bd>) | [electron/ai/engine-chat.cjs:317](<../../../electron/ai/engine-chat.cjs#L317>) | FunctionDeclaration |
| [EngineRegistry](<../symbols/files/electron/ai/engine-registry.cjs.md#s-90dfc3f14ffbdfd8>) | [electron/ai/engine-registry.cjs:40](<../../../electron/ai/engine-registry.cjs#L40>) | ClassDeclaration |
| [budgetHistory](<../symbols/files/electron/ai/history-budget.cjs.md#s-0c3553c9658a4cf5>) | [electron/ai/history-budget.cjs:6](<../../../electron/ai/history-budget.cjs#L6>) | FunctionDeclaration |
| [PROMPT_VERSION](<../symbols/files/electron/ai/inference/prompt-builder.cjs.md#s-bf08d1f2dcaeaeeb>) | [electron/ai/inference/prompt-builder.cjs:7](<../../../electron/ai/inference/prompt-builder.cjs#L7>) | VariableDeclaration |
| [MAX_USER_MESSAGE_CHARS](<../symbols/files/electron/ai/inference/prompt-builder.cjs.md#s-eea4354a11150b84>) | [electron/ai/inference/prompt-builder.cjs:8](<../../../electron/ai/inference/prompt-builder.cjs#L8>) | VariableDeclaration |
| [MAX_SOURCE_CONTENT_CHARS](<../symbols/files/electron/ai/inference/prompt-builder.cjs.md#s-a09b2d32bfe1a91e>) | [electron/ai/inference/prompt-builder.cjs:9](<../../../electron/ai/inference/prompt-builder.cjs#L9>) | VariableDeclaration |
| [MAX_SOURCE_MESSAGE_CHARS](<../symbols/files/electron/ai/inference/prompt-builder.cjs.md#s-d10ab58bc8574624>) | [electron/ai/inference/prompt-builder.cjs:10](<../../../electron/ai/inference/prompt-builder.cjs#L10>) | VariableDeclaration |
| [SYSTEM_PROMPT](<../symbols/files/electron/ai/inference/prompt-builder.cjs.md#s-8e8c5a698a460b25>) | [electron/ai/inference/prompt-builder.cjs:17](<../../../electron/ai/inference/prompt-builder.cjs#L17>) | VariableDeclaration |
| [validateUserMessage](<../symbols/files/electron/ai/inference/prompt-builder.cjs.md#s-79a9e0cb38b78443>) | [electron/ai/inference/prompt-builder.cjs:27](<../../../electron/ai/inference/prompt-builder.cjs#L27>) | FunctionDeclaration |
| [buildContextMessages](<../symbols/files/electron/ai/inference/prompt-builder.cjs.md#s-241c37ad734d8bcd>) | [electron/ai/inference/prompt-builder.cjs:87](<../../../electron/ai/inference/prompt-builder.cjs#L87>) | FunctionDeclaration |
| [planningOnly](<../symbols/files/electron/ai/inference/response-validation.cjs.md#s-4c64fc5cba521870>) | [electron/ai/inference/response-validation.cjs:3](<../../../electron/ai/inference/response-validation.cjs#L3>) | FunctionDeclaration |
| [validateAnswer](<../symbols/files/electron/ai/inference/response-validation.cjs.md#s-21e2e91befa4c26f>) | [electron/ai/inference/response-validation.cjs:9](<../../../electron/ai/inference/response-validation.cjs#L9>) | FunctionDeclaration |
| [answerPrefix](<../symbols/files/electron/ai/inference/response-validation.cjs.md#s-3de3a3c0b8fa59ff>) | [electron/ai/inference/response-validation.cjs:90](<../../../electron/ai/inference/response-validation.cjs#L90>) | FunctionDeclaration |
| [API_VERSION](<../symbols/files/electron/ai/ipc.cjs.md#s-955315fbf9ff2ab4>) | [electron/ai/ipc.cjs:19](<../../../electron/ai/ipc.cjs#L19>) | VariableDeclaration |
| [registerAiIpc](<../symbols/files/electron/ai/ipc.cjs.md#s-72b9bbec8be3a0eb>) | [electron/ai/ipc.cjs:23](<../../../electron/ai/ipc.cjs#L23>) | FunctionDeclaration |
| [hash](<../symbols/files/electron/ai/knowledge-store.cjs.md#s-04f377c7c46efc8d>) | [electron/ai/knowledge-store.cjs:8](<../../../electron/ai/knowledge-store.cjs#L8>) | ArrowFunction |
| [extractionSchema](<../symbols/files/electron/ai/knowledge-store.cjs.md#s-0828ffd3812c4957>) | [electron/ai/knowledge-store.cjs:32](<../../../electron/ai/knowledge-store.cjs#L32>) | SchemaBinding |
| [querySchema](<../symbols/files/electron/ai/knowledge-store.cjs.md#s-8404f02c89ec6dc8>) | [electron/ai/knowledge-store.cjs:47](<../../../electron/ai/knowledge-store.cjs#L47>) | SchemaBinding |
| [recordId](<../symbols/files/electron/ai/knowledge-store.cjs.md#s-7f697cc30af0c07f>) | [electron/ai/knowledge-store.cjs:57](<../../../electron/ai/knowledge-store.cjs#L57>) | ArrowFunction |
| [readMarkdown](<../symbols/files/electron/ai/knowledge-store.cjs.md#s-8e66d80c157a16e4>) | [electron/ai/knowledge-store.cjs:81](<../../../electron/ai/knowledge-store.cjs#L81>) | FunctionDeclaration |
| [KnowledgeStore](<../symbols/files/electron/ai/knowledge-store.cjs.md#s-06bd4ce747e72daa>) | [electron/ai/knowledge-store.cjs:109](<../../../electron/ai/knowledge-store.cjs#L109>) | ClassDeclaration |
| [sortProfiles](<../symbols/files/electron/ai/llm-front-office/catalog-sort.cjs.md#s-d6ac4c14e0fa0c27>) | [electron/ai/llm-front-office/catalog-sort.cjs:4](<../../../electron/ai/llm-front-office/catalog-sort.cjs#L4>) | FunctionDeclaration |
| [sortProfiles](<../symbols/files/electron/ai/llm-front-office/catalog-sort.d.cts.md#s-9f1ec05d08075a8b>) | [electron/ai/llm-front-office/catalog-sort.d.cts:3](<../../../electron/ai/llm-front-office/catalog-sort.d.cts#L3>) | FunctionDeclaration |
| [providerId](<../symbols/files/electron/ai/llm-front-office/contracts.cjs.md#s-04811b0f631327d7>) | [electron/ai/llm-front-office/contracts.cjs:11](<../../../electron/ai/llm-front-office/contracts.cjs#L11>) | SchemaBinding |
| [identity](<../symbols/files/electron/ai/llm-front-office/contracts.cjs.md#s-1abe1e7148d8aecf>) | [electron/ai/llm-front-office/contracts.cjs:19](<../../../electron/ai/llm-front-office/contracts.cjs#L19>) | SchemaBinding |
| [stageName](<../symbols/files/electron/ai/llm-front-office/contracts.cjs.md#s-90be42fd8cdb16c4>) | [electron/ai/llm-front-office/contracts.cjs:30](<../../../electron/ai/llm-front-office/contracts.cjs#L30>) | SchemaBinding |
| [errorCode](<../symbols/files/electron/ai/llm-front-office/contracts.cjs.md#s-3e12bfa33118232f>) | [electron/ai/llm-front-office/contracts.cjs:45](<../../../electron/ai/llm-front-office/contracts.cjs#L45>) | SchemaBinding |
| [finishReason](<../symbols/files/electron/ai/llm-front-office/contracts.cjs.md#s-ba7f30ff1cfea0aa>) | [electron/ai/llm-front-office/contracts.cjs:59](<../../../electron/ai/llm-front-office/contracts.cjs#L59>) | SchemaBinding |
| [validateTrace](<../symbols/files/electron/ai/llm-front-office/contracts.cjs.md#s-a8858a20a10ec890>) | [electron/ai/llm-front-office/contracts.cjs:206](<../../../electron/ai/llm-front-office/contracts.cjs#L206>) | FunctionDeclaration |
| [validateExperimentalConversation](<../symbols/files/electron/ai/llm-front-office/conversation-manager.cjs.md#s-3193bd9ab35b1def>) | [electron/ai/llm-front-office/conversation-manager.cjs:18](<../../../electron/ai/llm-front-office/conversation-manager.cjs#L18>) | FunctionDeclaration |
| [validateExperimentalRun](<../symbols/files/electron/ai/llm-front-office/conversation-manager.cjs.md#s-ffc7705100d0fefb>) | [electron/ai/llm-front-office/conversation-manager.cjs:120](<../../../electron/ai/llm-front-office/conversation-manager.cjs#L120>) | FunctionDeclaration |
| [publicError](<../symbols/files/electron/ai/llm-front-office/errors.cjs.md#s-0825bc2120fdfa6d>) | [electron/ai/llm-front-office/errors.cjs:34](<../../../electron/ai/llm-front-office/errors.cjs#L34>) | FunctionDeclaration |
| [VERSION](<../symbols/files/electron/ai/llm-front-office/evaluation/fixtures.cjs.md#s-98d2016d5079b97a>) | [electron/ai/llm-front-office/evaluation/fixtures.cjs:4](<../../../electron/ai/llm-front-office/evaluation/fixtures.cjs#L4>) | VariableDeclaration |
| [fixtures](<../symbols/files/electron/ai/llm-front-office/evaluation/fixtures.cjs.md#s-1b8d1b2eca1f494c>) | [electron/ai/llm-front-office/evaluation/fixtures.cjs:7](<../../../electron/ai/llm-front-office/evaluation/fixtures.cjs#L7>) | FunctionDeclaration |
| [wilson](<../symbols/files/electron/ai/llm-front-office/evaluation/harness.cjs.md#s-5c353ec02a7fbbfa>) | [electron/ai/llm-front-office/evaluation/harness.cjs:45](<../../../electron/ai/llm-front-office/evaluation/harness.cjs#L45>) | FunctionDeclaration |
| [score](<../symbols/files/electron/ai/llm-front-office/evaluation/harness.cjs.md#s-3307e515bcf7a8f6>) | [electron/ai/llm-front-office/evaluation/harness.cjs:55](<../../../electron/ai/llm-front-office/evaluation/harness.cjs#L55>) | FunctionDeclaration |
| [runEvaluation](<../symbols/files/electron/ai/llm-front-office/evaluation/harness.cjs.md#s-271b18962c102baf>) | [electron/ai/llm-front-office/evaluation/harness.cjs:77](<../../../electron/ai/llm-front-office/evaluation/harness.cjs#L77>) | FunctionDeclaration |
| [summarize](<../symbols/files/electron/ai/llm-front-office/evaluation/harness.cjs.md#s-44e18f1e6b73a1b2>) | [electron/ai/llm-front-office/evaluation/harness.cjs:224](<../../../electron/ai/llm-front-office/evaluation/harness.cjs#L224>) | FunctionDeclaration |
| [reportMarkdown](<../symbols/files/electron/ai/llm-front-office/evaluation/harness.cjs.md#s-51ad21cd7957a35d>) | [electron/ai/llm-front-office/evaluation/harness.cjs:252](<../../../electron/ai/llm-front-office/evaluation/harness.cjs#L252>) | FunctionDeclaration |
| [reportCsv](<../symbols/files/electron/ai/llm-front-office/evaluation/harness.cjs.md#s-4a743233e7dd1253>) | [electron/ai/llm-front-office/evaluation/harness.cjs:256](<../../../electron/ai/llm-front-office/evaluation/harness.cjs#L256>) | FunctionDeclaration |
| [evidenceRecords](<../symbols/files/electron/ai/llm-front-office/evaluation/harness.cjs.md#s-9a6d0ca40646da2e>) | [electron/ai/llm-front-office/evaluation/harness.cjs:281](<../../../electron/ai/llm-front-office/evaluation/harness.cjs#L281>) | FunctionDeclaration |
| [id](<../symbols/files/electron/ai/llm-front-office/experiment-contracts.cjs.md#s-2ca83f59d4d42046>) | [electron/ai/llm-front-office/experiment-contracts.cjs:5](<../../../electron/ai/llm-front-office/experiment-contracts.cjs#L5>) | SchemaBinding |
| [modelId](<../symbols/files/electron/ai/llm-front-office/experiment-contracts.cjs.md#s-e9e410c16e3a01be>) | [electron/ai/llm-front-office/experiment-contracts.cjs:10](<../../../electron/ai/llm-front-office/experiment-contracts.cjs#L10>) | SchemaBinding |
| [provider](<../symbols/files/electron/ai/llm-front-office/experiment-contracts.cjs.md#s-114bb1b4f848fa8f>) | [electron/ai/llm-front-office/experiment-contracts.cjs:16](<../../../electron/ai/llm-front-office/experiment-contracts.cjs#L16>) | SchemaBinding |
| [deploymentId](<../symbols/files/electron/ai/llm-front-office/experiment-contracts.cjs.md#s-fff34021696e15fa>) | [electron/ai/llm-front-office/experiment-contracts.cjs:17](<../../../electron/ai/llm-front-office/experiment-contracts.cjs#L17>) | SchemaBinding |
| [nullableCount](<../symbols/files/electron/ai/llm-front-office/experiment-contracts.cjs.md#s-676e4e6d74362b77>) | [electron/ai/llm-front-office/experiment-contracts.cjs:26](<../../../electron/ai/llm-front-office/experiment-contracts.cjs#L26>) | SchemaBinding |
| [profileSchema](<../symbols/files/electron/ai/llm-front-office/experiment-contracts.cjs.md#s-21a283888527a0fe>) | [electron/ai/llm-front-office/experiment-contracts.cjs:105](<../../../electron/ai/llm-front-office/experiment-contracts.cjs#L105>) | SchemaBinding |
| [evidenceSchema](<../symbols/files/electron/ai/llm-front-office/experiment-contracts.cjs.md#s-1223ff69e5a0cae6>) | [electron/ai/llm-front-office/experiment-contracts.cjs:134](<../../../electron/ai/llm-front-office/experiment-contracts.cjs#L134>) | SchemaBinding |
| [conversationSchema](<../symbols/files/electron/ai/llm-front-office/experiment-contracts.cjs.md#s-b8dd1ea2dfe1de5e>) | [electron/ai/llm-front-office/experiment-contracts.cjs:175](<../../../electron/ai/llm-front-office/experiment-contracts.cjs#L175>) | SchemaBinding |
| [requestSchema](<../symbols/files/electron/ai/llm-front-office/experiment-contracts.cjs.md#s-e7adc0d26642224a>) | [electron/ai/llm-front-office/experiment-contracts.cjs:206](<../../../electron/ai/llm-front-office/experiment-contracts.cjs#L206>) | SchemaBinding |
| [validateConfig](<../symbols/files/electron/ai/llm-front-office/experiment-contracts.cjs.md#s-3012ca16a371ad08>) | [electron/ai/llm-front-office/experiment-contracts.cjs:220](<../../../electron/ai/llm-front-office/experiment-contracts.cjs#L220>) | FunctionDeclaration |
| [defaultConfig](<../symbols/files/electron/ai/llm-front-office/experiment-contracts.cjs.md#s-fc7106338dbce48b>) | [electron/ai/llm-front-office/experiment-contracts.cjs:228](<../../../electron/ai/llm-front-office/experiment-contracts.cjs#L228>) | FunctionDeclaration |
| [validateConfig](<../symbols/files/electron/ai/llm-front-office/experiment-contracts.d.cts.md#s-095bec8ac3dfba05>) | [electron/ai/llm-front-office/experiment-contracts.d.cts:3](<../../../electron/ai/llm-front-office/experiment-contracts.d.cts#L3>) | FunctionDeclaration |
| [defaultConfig](<../symbols/files/electron/ai/llm-front-office/experiment-contracts.d.cts.md#s-1092ab0deccb88a9>) | [electron/ai/llm-front-office/experiment-contracts.d.cts:5](<../../../electron/ai/llm-front-office/experiment-contracts.d.cts#L5>) | FunctionDeclaration |
| [exportTraces](<../symbols/files/electron/ai/llm-front-office/export.cjs.md#s-6d6bd3fd1a1029c5>) | [electron/ai/llm-front-office/export.cjs:37](<../../../electron/ai/llm-front-office/export.cjs#L37>) | FunctionDeclaration |
| [exportTraces](<../symbols/files/electron/ai/llm-front-office/export.d.cts.md#s-9642334592a449b5>) | [electron/ai/llm-front-office/export.d.cts:2](<../../../electron/ai/llm-front-office/export.d.cts#L2>) | FunctionDeclaration |
| [reliabilityProfile](<../symbols/files/electron/ai/llm-front-office/long-context-reliability.cjs.md#s-d418f2ff7d86d95a>) | [electron/ai/llm-front-office/long-context-reliability.cjs:6](<../../../electron/ai/llm-front-office/long-context-reliability.cjs#L6>) | FunctionDeclaration |
| [CapabilityRegistry](<../symbols/files/electron/ai/llm-front-office/model-registry.cjs.md#s-db2a566dede6c03c>) | [electron/ai/llm-front-office/model-registry.cjs:63](<../../../electron/ai/llm-front-office/model-registry.cjs#L63>) | ClassDeclaration |
| [routeModels](<../symbols/files/electron/ai/llm-front-office/model-router.cjs.md#s-221cf971a662b0c2>) | [electron/ai/llm-front-office/model-router.cjs:13](<../../../electron/ai/llm-front-office/model-router.cjs#L13>) | FunctionDeclaration |
| [routeModels](<../symbols/files/electron/ai/llm-front-office/model-router.d.cts.md#s-2fe8a1d317e8de71>) | [electron/ai/llm-front-office/model-router.d.cts:9](<../../../electron/ai/llm-front-office/model-router.d.cts#L9>) | FunctionDeclaration |
| [createBaselineObserver](<../symbols/files/electron/ai/llm-front-office/observability.cjs.md#s-22e889ac7364e45a>) | [electron/ai/llm-front-office/observability.cjs:35](<../../../electron/ai/llm-front-office/observability.cjs#L35>) | FunctionDeclaration |
| [ObservedRequest](<../symbols/files/electron/ai/llm-front-office/observability.d.cts.md#s-c45a76ac8b8eef50>) | [electron/ai/llm-front-office/observability.d.cts:8](<../../../electron/ai/llm-front-office/observability.d.cts#L8>) | TypeAliasDeclaration |
| [createBaselineObserver](<../symbols/files/electron/ai/llm-front-office/observability.d.cts.md#s-30b0af13bdedbf67>) | [electron/ai/llm-front-office/observability.d.cts:18](<../../../electron/ai/llm-front-office/observability.d.cts#L18>) | FunctionDeclaration |
| [consumeStream](<../symbols/files/electron/ai/llm-front-office/provider-gateway.cjs.md#s-0c634b29ee77043b>) | [electron/ai/llm-front-office/provider-gateway.cjs:49](<../../../electron/ai/llm-front-office/provider-gateway.cjs#L49>) | FunctionDeclaration |
| [consumeCompletion](<../symbols/files/electron/ai/llm-front-office/provider-gateway.cjs.md#s-343584dde39b1f93>) | [electron/ai/llm-front-office/provider-gateway.cjs:185](<../../../electron/ai/llm-front-office/provider-gateway.cjs#L185>) | FunctionDeclaration |
| [createLLMClient](<../symbols/files/electron/ai/llm-front-office/provider-gateway.cjs.md#s-865c43e6ea2bf755>) | [electron/ai/llm-front-office/provider-gateway.cjs:285](<../../../electron/ai/llm-front-office/provider-gateway.cjs#L285>) | FunctionDeclaration |
| [gatewayHealth](<../symbols/files/electron/ai/llm-front-office/provider-gateway.cjs.md#s-9b77cb86cb8f8044>) | [electron/ai/llm-front-office/provider-gateway.cjs:401](<../../../electron/ai/llm-front-office/provider-gateway.cjs#L401>) | FunctionDeclaration |
| [ReliabilityController](<../symbols/files/electron/ai/llm-front-office/reliability.cjs.md#s-04eb342c1ca38f3b>) | [electron/ai/llm-front-office/reliability.cjs:15](<../../../electron/ai/llm-front-office/reliability.cjs#L15>) | ClassDeclaration |
| [normalizeRequest](<../symbols/files/electron/ai/llm-front-office/request-intake.cjs.md#s-dce03177be57ca82>) | [electron/ai/llm-front-office/request-intake.cjs:8](<../../../electron/ai/llm-front-office/request-intake.cjs#L8>) | FunctionDeclaration |
| [conversationMessages](<../symbols/files/electron/ai/llm-front-office/request-intake.cjs.md#s-5b3f5a0d78c3210f>) | [electron/ai/llm-front-office/request-intake.cjs:12](<../../../electron/ai/llm-front-office/request-intake.cjs#L12>) | FunctionDeclaration |
| [buildRequirements](<../symbols/files/electron/ai/llm-front-office/request-intake.cjs.md#s-f61e93055c3b336b>) | [electron/ai/llm-front-office/request-intake.cjs:42](<../../../electron/ai/llm-front-office/request-intake.cjs#L42>) | FunctionDeclaration |
| [normalizeRequest](<../symbols/files/electron/ai/llm-front-office/request-intake.d.cts.md#s-1b466ee462009ba0>) | [electron/ai/llm-front-office/request-intake.d.cts:8](<../../../electron/ai/llm-front-office/request-intake.d.cts#L8>) | FunctionDeclaration |
| [conversationMessages](<../symbols/files/electron/ai/llm-front-office/request-intake.d.cts.md#s-ec8f433141baa009>) | [electron/ai/llm-front-office/request-intake.d.cts:9](<../../../electron/ai/llm-front-office/request-intake.d.cts#L9>) | FunctionDeclaration |
| [buildRequirements](<../symbols/files/electron/ai/llm-front-office/request-intake.d.cts.md#s-1ac6c809da5b71ed>) | [electron/ai/llm-front-office/request-intake.d.cts:13](<../../../electron/ai/llm-front-office/request-intake.d.cts#L13>) | FunctionDeclaration |
| [validateSchemaDefinition](<../symbols/files/electron/ai/llm-front-office/response-processor.cjs.md#s-8c18e97b6f76e62b>) | [electron/ai/llm-front-office/response-processor.cjs:24](<../../../electron/ai/llm-front-office/response-processor.cjs#L24>) | FunctionDeclaration |
| [processResponse](<../symbols/files/electron/ai/llm-front-office/response-processor.cjs.md#s-ebdd2b90b3896156>) | [electron/ai/llm-front-office/response-processor.cjs:108](<../../../electron/ai/llm-front-office/response-processor.cjs#L108>) | FunctionDeclaration |
| [FrontOfficeService](<../symbols/files/electron/ai/llm-front-office/service.cjs.md#s-41d8c00a3c49fea2>) | [electron/ai/llm-front-office/service.cjs:38](<../../../electron/ai/llm-front-office/service.cjs#L38>) | ClassDeclaration |
| [retainedTraces](<../symbols/files/electron/ai/llm-front-office/telemetry-store.cjs.md#s-5e8b948ed705de3f>) | [electron/ai/llm-front-office/telemetry-store.cjs:15](<../../../electron/ai/llm-front-office/telemetry-store.cjs#L15>) | FunctionDeclaration |
| [recordTrace](<../symbols/files/electron/ai/llm-front-office/telemetry-store.cjs.md#s-42b043391a6c38c4>) | [electron/ai/llm-front-office/telemetry-store.cjs:39](<../../../electron/ai/llm-front-office/telemetry-store.cjs#L39>) | FunctionDeclaration |
| [checkBudget](<../symbols/files/electron/ai/llm-front-office/token-budget.cjs.md#s-552498140f3343ca>) | [electron/ai/llm-front-office/token-budget.cjs:5](<../../../electron/ai/llm-front-office/token-budget.cjs#L5>) | FunctionDeclaration |
| [checkBudget](<../symbols/files/electron/ai/llm-front-office/token-budget.d.cts.md#s-2b4a8cd07877a5ab>) | [electron/ai/llm-front-office/token-budget.d.cts:8](<../../../electron/ai/llm-front-office/token-budget.d.cts#L8>) | FunctionDeclaration |
| [identifyProvider](<../symbols/files/electron/ai/model-access.cjs.md#s-b6b34688f780a8d4>) | [electron/ai/model-access.cjs:21](<../../../electron/ai/model-access.cjs#L21>) | FunctionDeclaration |
| [ModelAccess](<../symbols/files/electron/ai/model-access.cjs.md#s-0f03afb63f3f94eb>) | [electron/ai/model-access.cjs:39](<../../../electron/ai/model-access.cjs#L39>) | ClassDeclaration |
| [providedPreview](<../symbols/files/electron/ai/model-access.cjs.md#s-2d54b4808e467237>) | [electron/ai/model-access.cjs:131](<../../../electron/ai/model-access.cjs#L131>) | FunctionDeclaration |
| [checkRemoteModel](<../symbols/files/electron/ai/model-check.cjs.md#s-e84d234a40a5e24b>) | [electron/ai/model-check.cjs:7](<../../../electron/ai/model-check.cjs#L7>) | FunctionDeclaration |
| [ModelPullService](<../symbols/files/electron/ai/model-pull.cjs.md#s-4b1694851b342393>) | [electron/ai/model-pull.cjs:3](<../../../electron/ai/model-pull.cjs#L3>) | ClassDeclaration |
| [DEFAULTS](<../symbols/files/electron/ai/model-registry.cjs.md#s-5fc5b0ca129372c6>) | [electron/ai/model-registry.cjs:9](<../../../electron/ai/model-registry.cjs#L9>) | VariableDeclaration |
| [validateSettings](<../symbols/files/electron/ai/model-registry.cjs.md#s-f1f9d1092d51054a>) | [electron/ai/model-registry.cjs:28](<../../../electron/ai/model-registry.cjs#L28>) | FunctionDeclaration |
| [ModelRegistry](<../symbols/files/electron/ai/model-registry.cjs.md#s-236ac83de9de4f06>) | [electron/ai/model-registry.cjs:32](<../../../electron/ai/model-registry.cjs#L32>) | ClassDeclaration |
| [verifiedEquations](<../symbols/files/electron/ai/numeric-equations.cjs.md#s-f0f6a680b4facadf>) | [electron/ai/numeric-equations.cjs:73](<../../../electron/ai/numeric-equations.cjs#L73>) | FunctionDeclaration |
| [blank](<../symbols/files/electron/ai/openrouter-usage.cjs.md#s-deed3178dcebd830>) | [electron/ai/openrouter-usage.cjs:3](<../../../electron/ai/openrouter-usage.cjs#L3>) | ArrowFunction |
| [normalize](<../symbols/files/electron/ai/openrouter-usage.cjs.md#s-f0dfce05c1990cc4>) | [electron/ai/openrouter-usage.cjs:43](<../../../electron/ai/openrouter-usage.cjs#L43>) | FunctionDeclaration |
| [OpenRouterUsageService](<../symbols/files/electron/ai/openrouter-usage.cjs.md#s-3bb5c133664fe2bc>) | [electron/ai/openrouter-usage.cjs:77](<../../../electron/ai/openrouter-usage.cjs#L77>) | ClassDeclaration |
| [ANSWER_FORMAT](<../symbols/files/electron/ai/orchestrator.cjs.md#s-ec1419292e3c062b>) | [electron/ai/orchestrator.cjs:24](<../../../electron/ai/orchestrator.cjs#L24>) | VariableDeclaration |
| [validateRequest](<../symbols/files/electron/ai/orchestrator.cjs.md#s-c803e9de14f05d52>) | [electron/ai/orchestrator.cjs:71](<../../../electron/ai/orchestrator.cjs#L71>) | FunctionDeclaration |
| [createContextOrchestrator](<../symbols/files/electron/ai/orchestrator.cjs.md#s-c34acea6475035a9>) | [electron/ai/orchestrator.cjs:150](<../../../electron/ai/orchestrator.cjs#L150>) | FunctionDeclaration |
| [ProviderRegistry](<../symbols/files/electron/ai/provider-registry.cjs.md#s-04ae7733c329d3f4>) | [electron/ai/provider-registry.cjs:3](<../../../electron/ai/provider-registry.cjs#L3>) | ClassDeclaration |
| [ProviderUsageService](<../symbols/files/electron/ai/provider-usage.cjs.md#s-7eedeca0231bad00>) | [electron/ai/provider-usage.cjs:18](<../../../electron/ai/provider-usage.cjs#L18>) | ClassDeclaration |
| [observeProviderUsage](<../symbols/files/electron/ai/provider-usage.cjs.md#s-3859f05b17dd7d5e>) | [electron/ai/provider-usage.cjs:169](<../../../electron/ai/provider-usage.cjs#L169>) | FunctionDeclaration |
| [quoteOrigin](<../symbols/files/electron/ai/quote-origin.cjs.md#s-d2bb16ed0ae1f043>) | [electron/ai/quote-origin.cjs:2](<../../../electron/ai/quote-origin.cjs#L2>) | FunctionDeclaration |
| [safeMetadata](<../symbols/files/electron/ai/request-logger.cjs.md#s-8937535c0ab1e096>) | [electron/ai/request-logger.cjs:162](<../../../electron/ai/request-logger.cjs#L162>) | FunctionDeclaration |
| [createRequestLogger](<../symbols/files/electron/ai/request-logger.cjs.md#s-89285dde7beb1d3d>) | [electron/ai/request-logger.cjs:214](<../../../electron/ai/request-logger.cjs#L214>) | FunctionDeclaration |
| [DiagnosticCallback](<../symbols/files/electron/ai/request-logger.d.cts.md#s-b9fa4ae070bf83f2>) | [electron/ai/request-logger.d.cts:1](<../../../electron/ai/request-logger.d.cts#L1>) | TypeAliasDeclaration |
| [RequestLogger](<../symbols/files/electron/ai/request-logger.d.cts.md#s-cb4b2ee3cffe8941>) | [electron/ai/request-logger.d.cts:6](<../../../electron/ai/request-logger.d.cts#L6>) | TypeAliasDeclaration |
| [createRequestLogger](<../symbols/files/electron/ai/request-logger.d.cts.md#s-435900804b106754>) | [electron/ai/request-logger.d.cts:17](<../../../electron/ai/request-logger.d.cts#L17>) | FunctionDeclaration |
| [safeMetadata](<../symbols/files/electron/ai/request-logger.d.cts.md#s-93ad7a6347790142>) | [electron/ai/request-logger.d.cts:27](<../../../electron/ai/request-logger.d.cts#L27>) | FunctionDeclaration |
| [readCompletedRun](<../symbols/files/electron/ai/research-knowledge.cjs.md#s-ff24b848b76d8433>) | [electron/ai/research-knowledge.cjs:13](<../../../electron/ai/research-knowledge.cjs#L13>) | FunctionDeclaration |
| [readResearchSource](<../symbols/files/electron/ai/research-knowledge.cjs.md#s-b8998956bc9beef7>) | [electron/ai/research-knowledge.cjs:36](<../../../electron/ai/research-knowledge.cjs#L36>) | FunctionDeclaration |
| [ResearchKnowledge](<../symbols/files/electron/ai/research-knowledge.cjs.md#s-f66834003ad3baa8>) | [electron/ai/research-knowledge.cjs:41](<../../../electron/ai/research-knowledge.cjs#L41>) | ClassDeclaration |
| [RUN_SCHEMA_VERSION](<../symbols/files/electron/ai/run-store.cjs.md#s-599e0cebcb8b181e>) | [electron/ai/run-store.cjs:9](<../../../electron/ai/run-store.cjs#L9>) | VariableDeclaration |
| [validateRunRecord](<../symbols/files/electron/ai/run-store.cjs.md#s-bbbf0871f6631831>) | [electron/ai/run-store.cjs:67](<../../../electron/ai/run-store.cjs#L67>) | FunctionDeclaration |
| [createModelRun](<../symbols/files/electron/ai/run-store.cjs.md#s-0abf05c0db6341b7>) | [electron/ai/run-store.cjs:317](<../../../electron/ai/run-store.cjs#L317>) | FunctionDeclaration |
| [readModelRun](<../symbols/files/electron/ai/run-store.cjs.md#s-260afe334a71b9ae>) | [electron/ai/run-store.cjs:361](<../../../electron/ai/run-store.cjs#L361>) | FunctionDeclaration |
| [listModelRuns](<../symbols/files/electron/ai/run-store.cjs.md#s-4c5761eaea31276f>) | [electron/ai/run-store.cjs:384](<../../../electron/ai/run-store.cjs#L384>) | FunctionDeclaration |
| [canonicalPath](<../symbols/files/electron/ai/runtime-context.cjs.md#s-a852c8bcae735911>) | [electron/ai/runtime-context.cjs:5](<../../../electron/ai/runtime-context.cjs#L5>) | VariableDeclaration |
| [canonical](<../symbols/files/electron/ai/runtime-context.cjs.md#s-3c7f866ba3293dc3>) | [electron/ai/runtime-context.cjs:7](<../../../electron/ai/runtime-context.cjs#L7>) | VariableDeclaration |
| [canonicalHash](<../symbols/files/electron/ai/runtime-context.cjs.md#s-354543450a50bc05>) | [electron/ai/runtime-context.cjs:13](<../../../electron/ai/runtime-context.cjs#L13>) | VariableDeclaration |
| [COMPILED_CANONICAL_SHA256](<../symbols/files/electron/ai/runtime-context.cjs.md#s-7d15713247b01c9d>) | [electron/ai/runtime-context.cjs:14](<../../../electron/ai/runtime-context.cjs#L14>) | VariableDeclaration |
| [KERNEL_VERSION](<../symbols/files/electron/ai/runtime-context.cjs.md#s-a4149768256e4a64>) | [electron/ai/runtime-context.cjs:17](<../../../electron/ai/runtime-context.cjs#L17>) | VariableDeclaration |
| [RUNTIME_KERNEL](<../symbols/files/electron/ai/runtime-context.cjs.md#s-c608fb040ef776c4>) | [electron/ai/runtime-context.cjs:18](<../../../electron/ai/runtime-context.cjs#L18>) | VariableDeclaration |
| [MODULES](<../symbols/files/electron/ai/runtime-context.cjs.md#s-49e32d3076b82abe>) | [electron/ai/runtime-context.cjs:29](<../../../electron/ai/runtime-context.cjs#L29>) | VariableDeclaration |
| [matchesCanonical](<../symbols/files/electron/ai/runtime-context.cjs.md#s-7ae1079be7b54233>) | [electron/ai/runtime-context.cjs:46](<../../../electron/ai/runtime-context.cjs#L46>) | FunctionDeclaration |
| [selectRuntimeSources](<../symbols/files/electron/ai/runtime-context.cjs.md#s-8df089888e38d14d>) | [electron/ai/runtime-context.cjs:67](<../../../electron/ai/runtime-context.cjs#L67>) | FunctionDeclaration |
| [runtimePolicy](<../symbols/files/electron/ai/runtime-context.cjs.md#s-7f45e8f2e47d8040>) | [electron/ai/runtime-context.cjs:92](<../../../electron/ai/runtime-context.cjs#L92>) | FunctionDeclaration |
| [providerId](<../symbols/files/electron/ai/schemas.cjs.md#s-0cc761e7c918d390>) | [electron/ai/schemas.cjs:11](<../../../electron/ai/schemas.cjs#L11>) | SchemaBinding |
| [credentialInput](<../symbols/files/electron/ai/schemas.cjs.md#s-498dcf3f5bc309b9>) | [electron/ai/schemas.cjs:18](<../../../electron/ai/schemas.cjs#L18>) | SchemaBinding |
| [credentialProvider](<../symbols/files/electron/ai/schemas.cjs.md#s-825c894f9ec2c8a6>) | [electron/ai/schemas.cjs:30](<../../../electron/ai/schemas.cjs#L30>) | SchemaBinding |
| [parseCredential](<../symbols/files/electron/ai/schemas.cjs.md#s-b69a42e30e64ae53>) | [electron/ai/schemas.cjs:36](<../../../electron/ai/schemas.cjs#L36>) | FunctionDeclaration |
| [settingsSchema](<../symbols/files/electron/ai/schemas.cjs.md#s-0eb862618f55f6f1>) | [electron/ai/schemas.cjs:50](<../../../electron/ai/schemas.cjs#L50>) | SchemaBinding |
| [geminiPage](<../symbols/files/electron/ai/schemas.cjs.md#s-dd31eb2f37fc0ba9>) | [electron/ai/schemas.cjs:80](<../../../electron/ai/schemas.cjs#L80>) | SchemaBinding |
| [geminiChunk](<../symbols/files/electron/ai/schemas.cjs.md#s-c6e950c213a34e76>) | [electron/ai/schemas.cjs:85](<../../../electron/ai/schemas.cjs#L85>) | SchemaBinding |
| [SKILLS](<../symbols/files/electron/ai/skills.cjs.md#s-a3d4130de7a531b4>) | [electron/ai/skills.cjs:2](<../../../electron/ai/skills.cjs#L2>) | VariableDeclaration |
| [skillsFor](<../symbols/files/electron/ai/skills.cjs.md#s-b3ded4fcddd47806>) | [electron/ai/skills.cjs:10](<../../../electron/ai/skills.cjs#L10>) | ArrowFunction |
| [calculate](<../symbols/files/electron/ai/statistics.cjs.md#s-5664f2bca4b9935b>) | [electron/ai/statistics.cjs:22](<../../../electron/ai/statistics.cjs#L22>) | FunctionDeclaration |
| [STATISTICS_FORMAT](<../symbols/files/electron/ai/statistics.cjs.md#s-37474521898f7f64>) | [electron/ai/statistics.cjs:98](<../../../electron/ai/statistics.cjs#L98>) | VariableDeclaration |
| [isStatisticsFormat](<../symbols/files/electron/ai/statistics.cjs.md#s-2efa6955eff65641>) | [electron/ai/statistics.cjs:133](<../../../electron/ai/statistics.cjs#L133>) | FunctionDeclaration |
| [wantsStatistics](<../symbols/files/electron/ai/statistics.cjs.md#s-1d9e7adf8b01e716>) | [electron/ai/statistics.cjs:136](<../../../electron/ai/statistics.cjs#L136>) | FunctionDeclaration |
| [executePlan](<../symbols/files/electron/ai/statistics.cjs.md#s-474e53bf1087ed47>) | [electron/ai/statistics.cjs:141](<../../../electron/ai/statistics.cjs#L141>) | FunctionDeclaration |
| [planStatistics](<../symbols/files/electron/ai/statistics.cjs.md#s-4cd6a96e6d276ca8>) | [electron/ai/statistics.cjs:231](<../../../electron/ai/statistics.cjs#L231>) | FunctionDeclaration |
| [ChatService.store](<../symbols/files/electron/ai/chat/chat-service.cjs.md#s-b0afd34da6a6971a>) | [electron/ai/chat/chat-service.cjs:35](<../../../electron/ai/chat/chat-service.cjs#L35>) | MethodDeclaration |
| [ChatService.assertIdle](<../symbols/files/electron/ai/chat/chat-service.cjs.md#s-f029aee4d75b796d>) | [electron/ai/chat/chat-service.cjs:50](<../../../electron/ai/chat/chat-service.cjs#L50>) | MethodDeclaration |
| [ChatService.exclusive](<../symbols/files/electron/ai/chat/chat-service.cjs.md#s-5ffb4137d154f639>) | [electron/ai/chat/chat-service.cjs:57](<../../../electron/ai/chat/chat-service.cjs#L57>) | MethodDeclaration |
| [ChatService.runAssignedRequest](<../symbols/files/electron/ai/chat/chat-service.cjs.md#s-06b3e78cfbfbfb10>) | [electron/ai/chat/chat-service.cjs:62](<../../../electron/ai/chat/chat-service.cjs#L62>) | MethodDeclaration |
| [ChatService.queueMutation](<../symbols/files/electron/ai/chat/chat-service.cjs.md#s-98cb593f13b965db>) | [electron/ai/chat/chat-service.cjs:87](<../../../electron/ai/chat/chat-service.cjs#L87>) | MethodDeclaration |
| [ChatService.changeKnowledge](<../symbols/files/electron/ai/chat/chat-service.cjs.md#s-450f845b83e99c37>) | [electron/ai/chat/chat-service.cjs:102](<../../../electron/ai/chat/chat-service.cjs#L102>) | MethodDeclaration |
| [ChatService.cancel](<../symbols/files/electron/ai/chat/chat-service.cjs.md#s-5e5f3dca7d74aa4e>) | [electron/ai/chat/chat-service.cjs:109](<../../../electron/ai/chat/chat-service.cjs#L109>) | MethodDeclaration |
| [ChatService.cancelAll](<../symbols/files/electron/ai/chat/chat-service.cjs.md#s-a13b96186264285e>) | [electron/ai/chat/chat-service.cjs:123](<../../../electron/ai/chat/chat-service.cjs#L123>) | MethodDeclaration |
| [ChatService.context](<../symbols/files/electron/ai/chat/chat-service.cjs.md#s-dc1d338e9a4d2e19>) | [electron/ai/chat/chat-service.cjs:127](<../../../electron/ai/chat/chat-service.cjs#L127>) | MethodDeclaration |
| [ChatService.list](<../symbols/files/electron/ai/chat/chat-service.cjs.md#s-88b755ecb7271356>) | [electron/ai/chat/chat-service.cjs:135](<../../../electron/ai/chat/chat-service.cjs#L135>) | MethodDeclaration |
| [ChatService.listBoxes](<../symbols/files/electron/ai/chat/chat-service.cjs.md#s-62751e72150bdb97>) | [electron/ai/chat/chat-service.cjs:140](<../../../electron/ai/chat/chat-service.cjs#L140>) | MethodDeclaration |
| [ChatService.previewConstructionBox](<../symbols/files/electron/ai/chat/chat-service.cjs.md#s-5c1dc84b2a38660c>) | [electron/ai/chat/chat-service.cjs:143](<../../../electron/ai/chat/chat-service.cjs#L143>) | MethodDeclaration |
| [ChatService.listConstructionFiles](<../symbols/files/electron/ai/chat/chat-service.cjs.md#s-d90896728a4a0fcf>) | [electron/ai/chat/chat-service.cjs:146](<../../../electron/ai/chat/chat-service.cjs#L146>) | MethodDeclaration |
| [ChatService.previewConstructionFile](<../symbols/files/electron/ai/chat/chat-service.cjs.md#s-3948d5c2970f7930>) | [electron/ai/chat/chat-service.cjs:149](<../../../electron/ai/chat/chat-service.cjs#L149>) | MethodDeclaration |
| [ChatService.saveConstruction](<../symbols/files/electron/ai/chat/chat-service.cjs.md#s-df24d0c6f10d0ba7>) | [electron/ai/chat/chat-service.cjs:152](<../../../electron/ai/chat/chat-service.cjs#L152>) | MethodDeclaration |
| [ChatService.saveBox](<../symbols/files/electron/ai/chat/chat-service.cjs.md#s-861abeccc6b8d0c4>) | [electron/ai/chat/chat-service.cjs:155](<../../../electron/ai/chat/chat-service.cjs#L155>) | MethodDeclaration |
| [ChatService.renameBox](<../symbols/files/electron/ai/chat/chat-service.cjs.md#s-a90485bdc3d618df>) | [electron/ai/chat/chat-service.cjs:165](<../../../electron/ai/chat/chat-service.cjs#L165>) | MethodDeclaration |
| [ChatService.previewBoxSelection](<../symbols/files/electron/ai/chat/chat-service.cjs.md#s-2fc2d992b2a21ced>) | [electron/ai/chat/chat-service.cjs:171](<../../../electron/ai/chat/chat-service.cjs#L171>) | MethodDeclaration |
| [ChatService.inspectBox](<../symbols/files/electron/ai/chat/chat-service.cjs.md#s-4121971e69218f37>) | [electron/ai/chat/chat-service.cjs:177](<../../../electron/ai/chat/chat-service.cjs#L177>) | MethodDeclaration |
| [ChatService.editBox](<../symbols/files/electron/ai/chat/chat-service.cjs.md#s-70c1e46e565501d1>) | [electron/ai/chat/chat-service.cjs:185](<../../../electron/ai/chat/chat-service.cjs#L185>) | MethodDeclaration |
| [ChatService.switchBox](<../symbols/files/electron/ai/chat/chat-service.cjs.md#s-7e7d16e81b9c76c1>) | [electron/ai/chat/chat-service.cjs:232](<../../../electron/ai/chat/chat-service.cjs#L232>) | MethodDeclaration |
| [ChatService.boundScope](<../symbols/files/electron/ai/chat/chat-service.cjs.md#s-8597f875e9166aee>) | [electron/ai/chat/chat-service.cjs:235](<../../../electron/ai/chat/chat-service.cjs#L235>) | MethodDeclaration |
| [ChatService.checkConversation](<../symbols/files/electron/ai/chat/chat-service.cjs.md#s-b2ee26ffc31d1af4>) | [electron/ai/chat/chat-service.cjs:291](<../../../electron/ai/chat/chat-service.cjs#L291>) | MethodDeclaration |
| [ChatService.create](<../symbols/files/electron/ai/chat/chat-service.cjs.md#s-a451abff9275ccde>) | [electron/ai/chat/chat-service.cjs:295](<../../../electron/ai/chat/chat-service.cjs#L295>) | MethodDeclaration |
| [ChatService.rename](<../symbols/files/electron/ai/chat/chat-service.cjs.md#s-64f964f454b33271>) | [electron/ai/chat/chat-service.cjs:341](<../../../electron/ai/chat/chat-service.cjs#L341>) | MethodDeclaration |
| [ChatService.remove](<../symbols/files/electron/ai/chat/chat-service.cjs.md#s-3e85605d9a2ef2e9>) | [electron/ai/chat/chat-service.cjs:358](<../../../electron/ai/chat/chat-service.cjs#L358>) | MethodDeclaration |
| [ChatService.deleteMessage](<../symbols/files/electron/ai/chat/chat-service.cjs.md#s-ac35e7f3c462643d>) | [electron/ai/chat/chat-service.cjs:363](<../../../electron/ai/chat/chat-service.cjs#L363>) | MethodDeclaration |
| [ChatService.clear](<../symbols/files/electron/ai/chat/chat-service.cjs.md#s-629518d62dc91eac>) | [electron/ai/chat/chat-service.cjs:390](<../../../electron/ai/chat/chat-service.cjs#L390>) | MethodDeclaration |
| [ChatService.resume](<../symbols/files/electron/ai/chat/chat-service.cjs.md#s-6b62ce1e48251c45>) | [electron/ai/chat/chat-service.cjs:398](<../../../electron/ai/chat/chat-service.cjs#L398>) | MethodDeclaration |
| [ChatService.gatewayActivity](<../symbols/files/electron/ai/chat/chat-service.cjs.md#s-497183a55598aa18>) | [electron/ai/chat/chat-service.cjs:407](<../../../electron/ai/chat/chat-service.cjs#L407>) | MethodDeclaration |
| [ChatService.refreshSource](<../symbols/files/electron/ai/chat/chat-service.cjs.md#s-524d1b1ff329ef56>) | [electron/ai/chat/chat-service.cjs:410](<../../../electron/ai/chat/chat-service.cjs#L410>) | MethodDeclaration |
| [ChatService.run](<../symbols/files/electron/ai/chat/chat-service.cjs.md#s-bed13c7861a5021f>) | [electron/ai/chat/chat-service.cjs:414](<../../../electron/ai/chat/chat-service.cjs#L414>) | MethodDeclaration |
| [ConversationStore.file](<../symbols/files/electron/ai/chat/conversation-store.cjs.md#s-6fc657aedcfa03ee>) | [electron/ai/chat/conversation-store.cjs:316](<../../../electron/ai/chat/conversation-store.cjs#L316>) | MethodDeclaration |
| [ConversationStore.read](<../symbols/files/electron/ai/chat/conversation-store.cjs.md#s-6cc833b9d3e06e6b>) | [electron/ai/chat/conversation-store.cjs:319](<../../../electron/ai/chat/conversation-store.cjs#L319>) | MethodDeclaration |
| [ConversationStore.write](<../symbols/files/electron/ai/chat/conversation-store.cjs.md#s-0df3a3bafe3efb29>) | [electron/ai/chat/conversation-store.cjs:329](<../../../electron/ai/chat/conversation-store.cjs#L329>) | MethodDeclaration |
| [ConversationStore.list](<../symbols/files/electron/ai/chat/conversation-store.cjs.md#s-572bb29f9d6b6295>) | [electron/ai/chat/conversation-store.cjs:332](<../../../electron/ai/chat/conversation-store.cjs#L332>) | MethodDeclaration |
| [ConversationStore.create](<../symbols/files/electron/ai/chat/conversation-store.cjs.md#s-9ff8503ebd2ada86>) | [electron/ai/chat/conversation-store.cjs:346](<../../../electron/ai/chat/conversation-store.cjs#L346>) | MethodDeclaration |
| [ConversationStore.update](<../symbols/files/electron/ai/chat/conversation-store.cjs.md#s-960a10242256430f>) | [electron/ai/chat/conversation-store.cjs:398](<../../../electron/ai/chat/conversation-store.cjs#L398>) | MethodDeclaration |
| [ConversationStore.createExperimental](<../symbols/files/electron/ai/chat/conversation-store.cjs.md#s-3a3fbf9e70a697a2>) | [electron/ai/chat/conversation-store.cjs:408](<../../../electron/ai/chat/conversation-store.cjs#L408>) | MethodDeclaration |
| [ConversationStore.remove](<../symbols/files/electron/ai/chat/conversation-store.cjs.md#s-9032bec70d701307>) | [electron/ai/chat/conversation-store.cjs:426](<../../../electron/ai/chat/conversation-store.cjs#L426>) | MethodDeclaration |
| [ConversationStore.recover](<../symbols/files/electron/ai/chat/conversation-store.cjs.md#s-227f9d841d011418>) | [electron/ai/chat/conversation-store.cjs:433](<../../../electron/ai/chat/conversation-store.cjs#L433>) | MethodDeclaration |
| [ContextBoxStore.list](<../symbols/files/electron/ai/context-box-store.cjs.md#s-ba2179b3b15fb0a7>) | [electron/ai/context-box-store.cjs:72](<../../../electron/ai/context-box-store.cjs#L72>) | MethodDeclaration |
| [ContextBoxStore.get](<../symbols/files/electron/ai/context-box-store.cjs.md#s-e24f370c40577a21>) | [electron/ai/context-box-store.cjs:78](<../../../electron/ai/context-box-store.cjs#L78>) | MethodDeclaration |
| [ContextBoxStore.name](<../symbols/files/electron/ai/context-box-store.cjs.md#s-fc981955a0e0f007>) | [electron/ai/context-box-store.cjs:87](<../../../electron/ai/context-box-store.cjs#L87>) | MethodDeclaration |
| [ContextBoxStore.create](<../symbols/files/electron/ai/context-box-store.cjs.md#s-9be811fadf1cda96>) | [electron/ai/context-box-store.cjs:105](<../../../electron/ai/context-box-store.cjs#L105>) | MethodDeclaration |
| [ContextBoxStore.rename](<../symbols/files/electron/ai/context-box-store.cjs.md#s-ea8e86d8779d8f98>) | [electron/ai/context-box-store.cjs:133](<../../../electron/ai/context-box-store.cjs#L133>) | MethodDeclaration |
| [ContextBoxStore.edit](<../symbols/files/electron/ai/context-box-store.cjs.md#s-a007994a31834680>) | [electron/ai/context-box-store.cjs:148](<../../../electron/ai/context-box-store.cjs#L148>) | MethodDeclaration |
| [ContextBoxStore.add](<../symbols/files/electron/ai/context-box-store.cjs.md#s-5c1cbed499ee682f>) | [electron/ai/context-box-store.cjs:164](<../../../electron/ai/context-box-store.cjs#L164>) | MethodDeclaration |
| [ContextBoxStore.removeItem](<../symbols/files/electron/ai/context-box-store.cjs.md#s-dc49778090341960>) | [electron/ai/context-box-store.cjs:175](<../../../electron/ai/context-box-store.cjs#L175>) | MethodDeclaration |
| [ContextBoxStore.relink](<../symbols/files/electron/ai/context-box-store.cjs.md#s-e71e415425a99897>) | [electron/ai/context-box-store.cjs:180](<../../../electron/ai/context-box-store.cjs#L180>) | MethodDeclaration |
| [ContextBoxStore.remove](<../symbols/files/electron/ai/context-box-store.cjs.md#s-dd2ac2b8d8cdbe45>) | [electron/ai/context-box-store.cjs:196](<../../../electron/ai/context-box-store.cjs#L196>) | MethodDeclaration |
| [CredentialStore.available](<../symbols/files/electron/ai/credential-store.cjs.md#s-3fa1acaec69ee0d3>) | [electron/ai/credential-store.cjs:65](<../../../electron/ai/credential-store.cjs#L65>) | MethodDeclaration |
| [CredentialStore.read](<../symbols/files/electron/ai/credential-store.cjs.md#s-d15c3cc48d069164>) | [electron/ai/credential-store.cjs:72](<../../../electron/ai/credential-store.cjs#L72>) | MethodDeclaration |
| [CredentialStore.status](<../symbols/files/electron/ai/credential-store.cjs.md#s-2729a6958f70a533>) | [electron/ai/credential-store.cjs:86](<../../../electron/ai/credential-store.cjs#L86>) | MethodDeclaration |
| [CredentialStore.save](<../symbols/files/electron/ai/credential-store.cjs.md#s-b962c2d90c2198fb>) | [electron/ai/credential-store.cjs:94](<../../../electron/ai/credential-store.cjs#L94>) | MethodDeclaration |
| [CredentialStore.remove](<../symbols/files/electron/ai/credential-store.cjs.md#s-1a9435f7bfed95f1>) | [electron/ai/credential-store.cjs:117](<../../../electron/ai/credential-store.cjs#L117>) | MethodDeclaration |
| [CredentialStore.get](<../symbols/files/electron/ai/credential-store.cjs.md#s-0c057213a95118a0>) | [electron/ai/credential-store.cjs:128](<../../../electron/ai/credential-store.cjs#L128>) | MethodDeclaration |
| [createDatasetSession.call](<../symbols/files/electron/ai/dataset-session.cjs.md#s-417114a38f1c6cd4>) | [electron/ai/dataset-session.cjs:61](<../../../electron/ai/dataset-session.cjs#L61>) | MethodDeclaration |
| [EngineRegistry.packages](<../symbols/files/electron/ai/engine-registry.cjs.md#s-a29e8bc55fbeda42>) | [electron/ai/engine-registry.cjs:42](<../../../electron/ai/engine-registry.cjs#L42>) | MethodDeclaration |
| [EngineRegistry.registration](<../symbols/files/electron/ai/engine-registry.cjs.md#s-8ab6043db31cc707>) | [electron/ai/engine-registry.cjs:64](<../../../electron/ai/engine-registry.cjs#L64>) | MethodDeclaration |
| [EngineRegistry.checked](<../symbols/files/electron/ai/engine-registry.cjs.md#s-8396dabf7b2bc949>) | [electron/ai/engine-registry.cjs:67](<../../../electron/ai/engine-registry.cjs#L67>) | MethodDeclaration |
| [EngineRegistry.state](<../symbols/files/electron/ai/engine-registry.cjs.md#s-06645e4647def7ef>) | [electron/ai/engine-registry.cjs:82](<../../../electron/ai/engine-registry.cjs#L82>) | MethodDeclaration |
| [EngineRegistry.exclusive](<../symbols/files/electron/ai/engine-registry.cjs.md#s-554a6859398689fa>) | [electron/ai/engine-registry.cjs:107](<../../../electron/ai/engine-registry.cjs#L107>) | MethodDeclaration |
| [EngineRegistry.cancel](<../symbols/files/electron/ai/engine-registry.cjs.md#s-15051950a5638b03>) | [electron/ai/engine-registry.cjs:125](<../../../electron/ai/engine-registry.cjs#L125>) | MethodDeclaration |
| [EngineRegistry.shutdown](<../symbols/files/electron/ai/engine-registry.cjs.md#s-922650a4d5052117>) | [electron/ai/engine-registry.cjs:128](<../../../electron/ai/engine-registry.cjs#L128>) | MethodDeclaration |
| [EngineRegistry.configure](<../symbols/files/electron/ai/engine-registry.cjs.md#s-296305f9b4abd79c>) | [electron/ai/engine-registry.cjs:131](<../../../electron/ai/engine-registry.cjs#L131>) | MethodDeclaration |
| [EngineRegistry.probeResult](<../symbols/files/electron/ai/engine-registry.cjs.md#s-62de64944a666b6c>) | [electron/ai/engine-registry.cjs:173](<../../../electron/ai/engine-registry.cjs#L173>) | MethodDeclaration |
| [EngineRegistry.probe](<../symbols/files/electron/ai/engine-registry.cjs.md#s-e093b5f5f5d00fe2>) | [electron/ai/engine-registry.cjs:195](<../../../electron/ai/engine-registry.cjs#L195>) | MethodDeclaration |
| [EngineRegistry.binding](<../symbols/files/electron/ai/engine-registry.cjs.md#s-780b5088edc49ed5>) | [electron/ai/engine-registry.cjs:220](<../../../electron/ai/engine-registry.cjs#L220>) | MethodDeclaration |
| [EngineRegistry.execute](<../symbols/files/electron/ai/engine-registry.cjs.md#s-918f1571185e7e73>) | [electron/ai/engine-registry.cjs:247](<../../../electron/ai/engine-registry.cjs#L247>) | MethodDeclaration |
| [EngineRegistry.record](<../symbols/files/electron/ai/engine-registry.cjs.md#s-16e1ffd3b44b809e>) | [electron/ai/engine-registry.cjs:347](<../../../electron/ai/engine-registry.cjs#L347>) | MethodDeclaration |
| [EngineRegistry.open](<../symbols/files/electron/ai/engine-registry.cjs.md#s-d94730f5ef785e5f>) | [electron/ai/engine-registry.cjs:353](<../../../electron/ai/engine-registry.cjs#L353>) | MethodDeclaration |
| [KnowledgeStore.assertOutputOutside](<../symbols/files/electron/ai/knowledge-store.cjs.md#s-3291f7baae4ee583>) | [electron/ai/knowledge-store.cjs:129](<../../../electron/ai/knowledge-store.cjs#L129>) | MethodDeclaration |
| [KnowledgeStore.checkBoundary](<../symbols/files/electron/ai/knowledge-store.cjs.md#s-f55db66529327881>) | [electron/ai/knowledge-store.cjs:139](<../../../electron/ai/knowledge-store.cjs#L139>) | MethodDeclaration |
| [KnowledgeStore.locked](<../symbols/files/electron/ai/knowledge-store.cjs.md#s-a3b8ad6701208628>) | [electron/ai/knowledge-store.cjs:164](<../../../electron/ai/knowledge-store.cjs#L164>) | MethodDeclaration |
| [KnowledgeStore.entries](<../symbols/files/electron/ai/knowledge-store.cjs.md#s-95b64d34ee47f7aa>) | [electron/ai/knowledge-store.cjs:197](<../../../electron/ai/knowledge-store.cjs#L197>) | MethodDeclaration |
| [KnowledgeStore.proposals](<../symbols/files/electron/ai/knowledge-store.cjs.md#s-6b7cd8fa332606a7>) | [electron/ai/knowledge-store.cjs:209](<../../../electron/ai/knowledge-store.cjs#L209>) | MethodDeclaration |
| [KnowledgeStore.versions](<../symbols/files/electron/ai/knowledge-store.cjs.md#s-bdf2375d03573870>) | [electron/ai/knowledge-store.cjs:229](<../../../electron/ai/knowledge-store.cjs#L229>) | MethodDeclaration |
| [KnowledgeStore.latest](<../symbols/files/electron/ai/knowledge-store.cjs.md#s-44a6d29ca92b7075>) | [electron/ai/knowledge-store.cjs:270](<../../../electron/ai/knowledge-store.cjs#L270>) | MethodDeclaration |
| [KnowledgeStore.propose](<../symbols/files/electron/ai/knowledge-store.cjs.md#s-386177095f62c5f2>) | [electron/ai/knowledge-store.cjs:287](<../../../electron/ai/knowledge-store.cjs#L287>) | MethodDeclaration |
| [KnowledgeStore.approve](<../symbols/files/electron/ai/knowledge-store.cjs.md#s-b191e90e59bb2198>) | [electron/ai/knowledge-store.cjs:394](<../../../electron/ai/knowledge-store.cjs#L394>) | MethodDeclaration |
| [KnowledgeStore.retrieve](<../symbols/files/electron/ai/knowledge-store.cjs.md#s-3704d9e2e744e8a8>) | [electron/ai/knowledge-store.cjs:522](<../../../electron/ai/knowledge-store.cjs#L522>) | MethodDeclaration |
| [CapabilityRegistry.read](<../symbols/files/electron/ai/llm-front-office/model-registry.cjs.md#s-a30997c9eee6a3a1>) | [electron/ai/llm-front-office/model-registry.cjs:71](<../../../electron/ai/llm-front-office/model-registry.cjs#L71>) | MethodDeclaration |
| [CapabilityRegistry.refresh](<../symbols/files/electron/ai/llm-front-office/model-registry.cjs.md#s-b5ae09b9bc2eb626>) | [electron/ai/llm-front-office/model-registry.cjs:82](<../../../electron/ai/llm-front-office/model-registry.cjs#L82>) | MethodDeclaration |
| [CapabilityRegistry.override](<../symbols/files/electron/ai/llm-front-office/model-registry.cjs.md#s-3bb788eddaed4cfe>) | [electron/ai/llm-front-office/model-registry.cjs:123](<../../../electron/ai/llm-front-office/model-registry.cjs#L123>) | MethodDeclaration |
| [CapabilityRegistry.addEvidence](<../symbols/files/electron/ai/llm-front-office/model-registry.cjs.md#s-91c779fdba86ae7e>) | [electron/ai/llm-front-office/model-registry.cjs:144](<../../../electron/ai/llm-front-office/model-registry.cjs#L144>) | MethodDeclaration |
| [CapabilityRegistry.favorite](<../symbols/files/electron/ai/llm-front-office/model-registry.cjs.md#s-0a3191f63f06fe0c>) | [electron/ai/llm-front-office/model-registry.cjs:164](<../../../electron/ai/llm-front-office/model-registry.cjs#L164>) | MethodDeclaration |
| [CapabilityRegistry.state](<../symbols/files/electron/ai/llm-front-office/model-registry.cjs.md#s-d044d93a77290e89>) | [electron/ai/llm-front-office/model-registry.cjs:177](<../../../electron/ai/llm-front-office/model-registry.cjs#L177>) | MethodDeclaration |
| [createBaselineObserver.stage](<../symbols/files/electron/ai/llm-front-office/observability.cjs.md#s-ed958441cc6d307e>) | [electron/ai/llm-front-office/observability.cjs:100](<../../../electron/ai/llm-front-office/observability.cjs#L100>) | MethodDeclaration |
| [createBaselineObserver.complete](<../symbols/files/electron/ai/llm-front-office/observability.cjs.md#s-16062b460e4158c3>) | [electron/ai/llm-front-office/observability.cjs:152](<../../../electron/ai/llm-front-office/observability.cjs#L152>) | MethodDeclaration |
| [createBaselineObserver.finish](<../symbols/files/electron/ai/llm-front-office/observability.cjs.md#s-e103266ac5c12797>) | [electron/ai/llm-front-office/observability.cjs:296](<../../../electron/ai/llm-front-office/observability.cjs#L296>) | MethodDeclaration |
| [createBaselineObserver.snapshot](<../symbols/files/electron/ai/llm-front-office/observability.cjs.md#s-2f4730d6e87ce485>) | [electron/ai/llm-front-office/observability.cjs:305](<../../../electron/ai/llm-front-office/observability.cjs#L305>) | MethodDeclaration |
| [createLLMClient.complete](<../symbols/files/electron/ai/llm-front-office/provider-gateway.cjs.md#s-52f9a78e18c7a535>) | [electron/ai/llm-front-office/provider-gateway.cjs:309](<../../../electron/ai/llm-front-office/provider-gateway.cjs#L309>) | MethodDeclaration |
| [ReliabilityController.healthy](<../symbols/files/electron/ai/llm-front-office/reliability.cjs.md#s-3b0e3de6cd04a3a3>) | [electron/ai/llm-front-office/reliability.cjs:21](<../../../electron/ai/llm-front-office/reliability.cjs#L21>) | MethodDeclaration |
| [ReliabilityController.state](<../symbols/files/electron/ai/llm-front-office/reliability.cjs.md#s-a5f9d153c4791192>) | [electron/ai/llm-front-office/reliability.cjs:25](<../../../electron/ai/llm-front-office/reliability.cjs#L25>) | MethodDeclaration |
| [ReliabilityController.execute](<../symbols/files/electron/ai/llm-front-office/reliability.cjs.md#s-aa433ce578b4dcf5>) | [electron/ai/llm-front-office/reliability.cjs:29](<../../../electron/ai/llm-front-office/reliability.cjs#L29>) | MethodDeclaration |
| [FrontOfficeService.config](<../symbols/files/electron/ai/llm-front-office/service.cjs.md#s-95e5d1f18e4f39b6>) | [electron/ai/llm-front-office/service.cjs:55](<../../../electron/ai/llm-front-office/service.cjs#L55>) | MethodDeclaration |
| [FrontOfficeService.saveConfig](<../symbols/files/electron/ai/llm-front-office/service.cjs.md#s-eefc8f4ae26d619e>) | [electron/ai/llm-front-office/service.cjs:66](<../../../electron/ai/llm-front-office/service.cjs#L66>) | MethodDeclaration |
| [FrontOfficeService.state](<../symbols/files/electron/ai/llm-front-office/service.cjs.md#s-a7a702002917ed3c>) | [electron/ai/llm-front-office/service.cjs:74](<../../../electron/ai/llm-front-office/service.cjs#L74>) | MethodDeclaration |
| [FrontOfficeService.refresh](<../symbols/files/electron/ai/llm-front-office/service.cjs.md#s-71ba26240e913d00>) | [electron/ai/llm-front-office/service.cjs:108](<../../../electron/ai/llm-front-office/service.cjs#L108>) | MethodDeclaration |
| [FrontOfficeService.create](<../symbols/files/electron/ai/llm-front-office/service.cjs.md#s-af46696ef252c855>) | [electron/ai/llm-front-office/service.cjs:113](<../../../electron/ai/llm-front-office/service.cjs#L113>) | MethodDeclaration |
| [FrontOfficeService.list](<../symbols/files/electron/ai/llm-front-office/service.cjs.md#s-964fdfc164ba63a8>) | [electron/ai/llm-front-office/service.cjs:129](<../../../electron/ai/llm-front-office/service.cjs#L129>) | MethodDeclaration |
| [FrontOfficeService.read](<../symbols/files/electron/ai/llm-front-office/service.cjs.md#s-7f2a6e1324a6fdf5>) | [electron/ai/llm-front-office/service.cjs:135](<../../../electron/ai/llm-front-office/service.cjs#L135>) | MethodDeclaration |
| [FrontOfficeService.remove](<../symbols/files/electron/ai/llm-front-office/service.cjs.md#s-eb120acf79486031>) | [electron/ai/llm-front-office/service.cjs:142](<../../../electron/ai/llm-front-office/service.cjs#L142>) | MethodDeclaration |
| [FrontOfficeService.export](<../symbols/files/electron/ai/llm-front-office/service.cjs.md#s-679bfddf6b227794>) | [electron/ai/llm-front-office/service.cjs:149](<../../../electron/ai/llm-front-office/service.cjs#L149>) | MethodDeclaration |
| [FrontOfficeService.health](<../symbols/files/electron/ai/llm-front-office/service.cjs.md#s-7a3bf0a6b37163a3>) | [electron/ai/llm-front-office/service.cjs:160](<../../../electron/ai/llm-front-office/service.cjs#L160>) | MethodDeclaration |
| [FrontOfficeService.run](<../symbols/files/electron/ai/llm-front-office/service.cjs.md#s-3bd2f92cf25a76d2>) | [electron/ai/llm-front-office/service.cjs:165](<../../../electron/ai/llm-front-office/service.cjs#L165>) | MethodDeclaration |
| [ModelAccess.recordCheck](<../symbols/files/electron/ai/model-access.cjs.md#s-ffe65cad2ea728af>) | [electron/ai/model-access.cjs:47](<../../../electron/ai/model-access.cjs#L47>) | MethodDeclaration |
| [ModelAccess.failedCheck](<../symbols/files/electron/ai/model-access.cjs.md#s-a82b0b034589ad60>) | [electron/ai/model-access.cjs:50](<../../../electron/ai/model-access.cjs#L50>) | MethodDeclaration |
| [ModelAccess.clearChecks](<../symbols/files/electron/ai/model-access.cjs.md#s-8dbdc4026cd7c126>) | [electron/ai/model-access.cjs:53](<../../../electron/ai/model-access.cjs#L53>) | MethodDeclaration |
| [ModelAccess.connect](<../symbols/files/electron/ai/model-access.cjs.md#s-288ebd01a07b9da9>) | [electron/ai/model-access.cjs:57](<../../../electron/ai/model-access.cjs#L57>) | MethodDeclaration |
| [ModelPullService.list](<../symbols/files/electron/ai/model-pull.cjs.md#s-1b07d42732eb7621>) | [electron/ai/model-pull.cjs:9](<../../../electron/ai/model-pull.cjs#L9>) | MethodDeclaration |
| [ModelPullService.start](<../symbols/files/electron/ai/model-pull.cjs.md#s-640cb0eef0657584>) | [electron/ai/model-pull.cjs:12](<../../../electron/ai/model-pull.cjs#L12>) | MethodDeclaration |
| [ModelPullService.cancel](<../symbols/files/electron/ai/model-pull.cjs.md#s-36573858072f544d>) | [electron/ai/model-pull.cjs:76](<../../../electron/ai/model-pull.cjs#L76>) | MethodDeclaration |
| [ModelPullService.cancelOwner](<../symbols/files/electron/ai/model-pull.cjs.md#s-2387b6bd04d560ce>) | [electron/ai/model-pull.cjs:85](<../../../electron/ai/model-pull.cjs#L85>) | MethodDeclaration |
| [ModelRegistry.read](<../symbols/files/electron/ai/model-registry.cjs.md#s-d98b4cc3aafbf180>) | [electron/ai/model-registry.cjs:41](<../../../electron/ai/model-registry.cjs#L41>) | MethodDeclaration |
| [ModelRegistry.state](<../symbols/files/electron/ai/model-registry.cjs.md#s-a10ce2395e5d46a8>) | [electron/ai/model-registry.cjs:52](<../../../electron/ai/model-registry.cjs#L52>) | MethodDeclaration |
| [ModelRegistry.providerFor](<../symbols/files/electron/ai/model-registry.cjs.md#s-3e05acf42245b191>) | [electron/ai/model-registry.cjs:136](<../../../electron/ai/model-registry.cjs#L136>) | MethodDeclaration |
| [ModelRegistry.save](<../symbols/files/electron/ai/model-registry.cjs.md#s-ad7b27a4e7ba4dc3>) | [electron/ai/model-registry.cjs:139](<../../../electron/ai/model-registry.cjs#L139>) | MethodDeclaration |
| [ModelRegistry.validateSelection](<../symbols/files/electron/ai/model-registry.cjs.md#s-125d10d68364d877>) | [electron/ai/model-registry.cjs:152](<../../../electron/ai/model-registry.cjs#L152>) | MethodDeclaration |
| [OpenRouterUsageService.invalidate](<../symbols/files/electron/ai/openrouter-usage.cjs.md#s-0a764503da78517c>) | [electron/ai/openrouter-usage.cjs:94](<../../../electron/ai/openrouter-usage.cjs#L94>) | MethodDeclaration |
| [OpenRouterUsageService.record](<../symbols/files/electron/ai/openrouter-usage.cjs.md#s-d783ccb079e6697c>) | [electron/ai/openrouter-usage.cjs:104](<../../../electron/ai/openrouter-usage.cjs#L104>) | MethodDeclaration |
| [OpenRouterUsageService.withTokens](<../symbols/files/electron/ai/openrouter-usage.cjs.md#s-e1de49534fe3b1aa>) | [electron/ai/openrouter-usage.cjs:133](<../../../electron/ai/openrouter-usage.cjs#L133>) | MethodDeclaration |
| [OpenRouterUsageService.get](<../symbols/files/electron/ai/openrouter-usage.cjs.md#s-1134b7f0963903a0>) | [electron/ai/openrouter-usage.cjs:143](<../../../electron/ai/openrouter-usage.cjs#L143>) | MethodDeclaration |
| [OpenRouterUsageService.fetchSnapshot](<../symbols/files/electron/ai/openrouter-usage.cjs.md#s-0d339a7d4b92bd32>) | [electron/ai/openrouter-usage.cjs:181](<../../../electron/ai/openrouter-usage.cjs#L181>) | MethodDeclaration |
| [createContextOrchestrator.run](<../symbols/files/electron/ai/orchestrator.cjs.md#s-be352215519f7acf>) | [electron/ai/orchestrator.cjs:169](<../../../electron/ai/orchestrator.cjs#L169>) | MethodDeclaration |
| [ProviderRegistry.get](<../symbols/files/electron/ai/provider-registry.cjs.md#s-aa0c9952767d6afb>) | [electron/ai/provider-registry.cjs:7](<../../../electron/ai/provider-registry.cjs#L7>) | MethodDeclaration |
| [ProviderRegistry.entries](<../symbols/files/electron/ai/provider-registry.cjs.md#s-dada83c12861f4df>) | [electron/ai/provider-registry.cjs:16](<../../../electron/ai/provider-registry.cjs#L16>) | MethodDeclaration |
| [ProviderUsageService.version](<../symbols/files/electron/ai/provider-usage.cjs.md#s-94297ff732783c7f>) | [electron/ai/provider-usage.cjs:37](<../../../electron/ai/provider-usage.cjs#L37>) | MethodDeclaration |
| [ProviderUsageService.invalidate](<../symbols/files/electron/ai/provider-usage.cjs.md#s-d7a8cc5e2bed3076>) | [electron/ai/provider-usage.cjs:40](<../../../electron/ai/provider-usage.cjs#L40>) | MethodDeclaration |
| [ProviderUsageService.selectionChanged](<../symbols/files/electron/ai/provider-usage.cjs.md#s-e430acd6052a513e>) | [electron/ai/provider-usage.cjs:50](<../../../electron/ai/provider-usage.cjs#L50>) | MethodDeclaration |
| [ProviderUsageService.selected](<../symbols/files/electron/ai/provider-usage.cjs.md#s-feb50af70ad03fdb>) | [electron/ai/provider-usage.cjs:53](<../../../electron/ai/provider-usage.cjs#L53>) | MethodDeclaration |
| [ProviderUsageService.record](<../symbols/files/electron/ai/provider-usage.cjs.md#s-d09bf73bff1abc6a>) | [electron/ai/provider-usage.cjs:61](<../../../electron/ai/provider-usage.cjs#L61>) | MethodDeclaration |
| [ProviderUsageService.get](<../symbols/files/electron/ai/provider-usage.cjs.md#s-b3bdf66ecb1c6a64>) | [electron/ai/provider-usage.cjs:97](<../../../electron/ai/provider-usage.cjs#L97>) | MethodDeclaration |
| [ProviderUsageService.legacyGet](<../symbols/files/electron/ai/provider-usage.cjs.md#s-906aad26021a121e>) | [electron/ai/provider-usage.cjs:160](<../../../electron/ai/provider-usage.cjs#L160>) | MethodDeclaration |
| [createRequestLogger.update](<../symbols/files/electron/ai/request-logger.cjs.md#s-41b77d43bf954fdc>) | [electron/ai/request-logger.cjs:276](<../../../electron/ai/request-logger.cjs#L276>) | MethodDeclaration |
| [createRequestLogger.fail](<../symbols/files/electron/ai/request-logger.cjs.md#s-e2946f01c8911e73>) | [electron/ai/request-logger.cjs:280](<../../../electron/ai/request-logger.cjs#L280>) | MethodDeclaration |
| [createRequestLogger.waiting](<../symbols/files/electron/ai/request-logger.cjs.md#s-653c2354d3068d1f>) | [electron/ai/request-logger.cjs:288](<../../../electron/ai/request-logger.cjs#L288>) | MethodDeclaration |
| [createRequestLogger.finish](<../symbols/files/electron/ai/request-logger.cjs.md#s-031839477c1aee68>) | [electron/ai/request-logger.cjs:302](<../../../electron/ai/request-logger.cjs#L302>) | MethodDeclaration |
| [ResearchKnowledge.store](<../symbols/files/electron/ai/research-knowledge.cjs.md#s-f02b14e6c9830816>) | [electron/ai/research-knowledge.cjs:45](<../../../electron/ai/research-knowledge.cjs#L45>) | MethodDeclaration |
| [ResearchKnowledge.propose](<../symbols/files/electron/ai/research-knowledge.cjs.md#s-6237bb50a54879b6>) | [electron/ai/research-knowledge.cjs:48](<../../../electron/ai/research-knowledge.cjs#L48>) | MethodDeclaration |
| [ResearchKnowledge.retrieve](<../symbols/files/electron/ai/research-knowledge.cjs.md#s-51f1bda5a3a72d66>) | [electron/ai/research-knowledge.cjs:60](<../../../electron/ai/research-knowledge.cjs#L60>) | MethodDeclaration |

## Depends on

Literal runtime production-file imports only; lazy imports are included. Type, test, tool and external dependencies remain available in the full index.

- [Assigned Agents and jurisdiction](<agents.md>): 9 import sites; example [electron/ai/chat/chat-service.cjs:6](<../../../electron/ai/chat/chat-service.cjs#L6>).
- [Engine package registry](<engine-registry.md>): 1 import sites; example [electron/ai/engine-registry.cjs:8](<../../../electron/ai/engine-registry.cjs#L8>).
- [Built-in Engines and data adapters](<engines.md>): 2 import sites; example [electron/ai/engine-registry.cjs:9](<../../../electron/ai/engine-registry.cjs#L9>).
- [Model-provider adapters](<providers.md>): 4 import sites; example [electron/ai/llm-front-office/provider-gateway.cjs:5](<../../../electron/ai/llm-front-office/provider-gateway.cjs#L5>).
- [Shared deterministic infrastructure](<shared.md>): 5 import sites; example [electron/ai/context-limits.cjs:2](<../../../electron/ai/context-limits.cjs#L2>).
- [Vault and stations](<vault.md>): 2 import sites; example [electron/ai/chat/chat-service.cjs:4](<../../../electron/ai/chat/chat-service.cjs#L4>).

## Depended on by

Literal runtime production-file imports only; lazy imports are included. Type, test, tool and external dependencies remain available in the full index.

- [Assigned Agents and jurisdiction](<agents.md>): 34 import sites; example [electron/ai/agents/agent-construction.cjs:1](<../../../electron/ai/agents/agent-construction.cjs#L1>).
- [Electron composition and IPC security](<desktop.md>): 8 import sites; example [electron/main.cjs:32](<../../../electron/main.cjs#L32>).
- [Model-provider adapters](<providers.md>): 14 import sites; example [electron/ai/providers/gemini-provider.cjs:5](<../../../electron/ai/providers/gemini-provider.cjs#L5>).

## Contracts

- [monthSchema](<../symbols/files/electron/ai/chronoz-adapter.cjs.md#s-bd133e0c2f103dba>) — zod-syntax-candidate; exported.
- [argumentsSchema](<../symbols/files/electron/ai/chronoz-adapter.cjs.md#s-8b77fa8b5f5a4017>) — zod-syntax-candidate; exported.
- [responseSchema](<../symbols/files/electron/ai/chronoz-adapter.cjs.md#s-f29e5e9d10aa411f>) — zod-syntax-candidate; local schema/type.
- [schema](<../symbols/files/electron/ai/credential-store.cjs.md#s-d39f126b5538dbe2>) — zod-syntax-candidate; local schema/type.
- [reportSchema](<../symbols/files/electron/ai/engine-chat.cjs.md#s-388644b265f372d9>) — zod-syntax-candidate; exported.
- [registrationSchema](<../symbols/files/electron/ai/engine-registry.cjs.md#s-94ccd034fe51efb1>) — zod-syntax-candidate; local schema/type.
- [bindingInput](<../symbols/files/electron/ai/engine-registry.cjs.md#s-9f177894e4772dca>) — zod-syntax-candidate; local schema/type.
- [executeSchema](<../symbols/files/electron/ai/engine-registry.cjs.md#s-a33fb616f7ae6afe>) — zod-syntax-candidate; local schema/type.
- [EngineRegistry.open.input](<../symbols/files/electron/ai/engine-registry.cjs.md#s-fc98a438951bc5ae>) — zod-syntax-candidate; local schema/type.
- [registerAiIpc.&lt;anonymous@227:29&gt;.options](<../symbols/files/electron/ai/ipc.cjs.md#s-f40fd67736fda4dc>) — zod-syntax-candidate; local schema/type.
- [registerAiIpc.&lt;anonymous@234:27&gt;.options](<../symbols/files/electron/ai/ipc.cjs.md#s-8d235ebcfa7d799d>) — zod-syntax-candidate; local schema/type.
- [registerAiIpc.&lt;anonymous@259:34&gt;.selection](<../symbols/files/electron/ai/ipc.cjs.md#s-ec503438e2f120de>) — zod-syntax-candidate; local schema/type.
- [registerAiIpc.&lt;anonymous@362:30&gt;.{ providerId, model }](<../symbols/files/electron/ai/ipc.cjs.md#s-b5423766ac5cc61d>) — zod-syntax-candidate; local schema/type.
- [text](<../symbols/files/electron/ai/knowledge-store.cjs.md#s-7626de0dd585b6bf>) — zod-syntax-candidate; local schema/type.
- [short](<../symbols/files/electron/ai/knowledge-store.cjs.md#s-c1982018013a3cde>) — zod-syntax-candidate; local schema/type.
- [id](<../symbols/files/electron/ai/knowledge-store.cjs.md#s-9bcd3c67a93b9ffd>) — zod-syntax-candidate; local schema/type.
- [ids](<../symbols/files/electron/ai/knowledge-store.cjs.md#s-b3e229a58de00474>) — zod-syntax-candidate; local schema/type.
- [observation](<../symbols/files/electron/ai/knowledge-store.cjs.md#s-9bad44c9a664f6f8>) — zod-syntax-candidate; local schema/type.
- [extractionSchema](<../symbols/files/electron/ai/knowledge-store.cjs.md#s-0828ffd3812c4957>) — zod-syntax-candidate; exported.
- [approvalSchema](<../symbols/files/electron/ai/knowledge-store.cjs.md#s-71060d5389ec529b>) — zod-syntax-candidate; local schema/type.
- [querySchema](<../symbols/files/electron/ai/knowledge-store.cjs.md#s-8404f02c89ec6dc8>) — zod-syntax-candidate; exported.
- [providerId](<../symbols/files/electron/ai/llm-front-office/contracts.cjs.md#s-04811b0f631327d7>) — zod-syntax-candidate; exported.
- [identity](<../symbols/files/electron/ai/llm-front-office/contracts.cjs.md#s-1abe1e7148d8aecf>) — zod-syntax-candidate; exported.
- [count](<../symbols/files/electron/ai/llm-front-office/contracts.cjs.md#s-d689668be930266e>) — zod-syntax-candidate; local schema/type.
- [routingId](<../symbols/files/electron/ai/llm-front-office/contracts.cjs.md#s-d0ee3cfd397dc373>) — zod-syntax-candidate; local schema/type.
- [duration](<../symbols/files/electron/ai/llm-front-office/contracts.cjs.md#s-b40ef95bf782f6ad>) — zod-syntax-candidate; local schema/type.
- [stageName](<../symbols/files/electron/ai/llm-front-office/contracts.cjs.md#s-90be42fd8cdb16c4>) — zod-syntax-candidate; exported.
- [status](<../symbols/files/electron/ai/llm-front-office/contracts.cjs.md#s-459bd6250f9238c0>) — zod-syntax-candidate; local schema/type.
- [errorCode](<../symbols/files/electron/ai/llm-front-office/contracts.cjs.md#s-3e12bfa33118232f>) — zod-syntax-candidate; exported.
- [finishReason](<../symbols/files/electron/ai/llm-front-office/contracts.cjs.md#s-ba7f30ff1cfea0aa>) — zod-syntax-candidate; exported.
- [callSchema](<../symbols/files/electron/ai/llm-front-office/contracts.cjs.md#s-5c1381555c404f00>) — zod-syntax-candidate; local schema/type.
- [traceSchema](<../symbols/files/electron/ai/llm-front-office/contracts.cjs.md#s-296260573a415770>) — zod-syntax-candidate; local schema/type.
- [runSchema](<../symbols/files/electron/ai/llm-front-office/conversation-manager.cjs.md#s-9393717de4b8b5bd>) — zod-syntax-candidate; local schema/type.
- [id](<../symbols/files/electron/ai/llm-front-office/experiment-contracts.cjs.md#s-2ca83f59d4d42046>) — zod-syntax-candidate; exported.
- [modelId](<../symbols/files/electron/ai/llm-front-office/experiment-contracts.cjs.md#s-e9e410c16e3a01be>) — zod-syntax-candidate; exported.
- [provider](<../symbols/files/electron/ai/llm-front-office/experiment-contracts.cjs.md#s-114bb1b4f848fa8f>) — zod-syntax-candidate; exported.
- [deploymentId](<../symbols/files/electron/ai/llm-front-office/experiment-contracts.cjs.md#s-fff34021696e15fa>) — zod-syntax-candidate; exported.
- [finite](<../symbols/files/electron/ai/llm-front-office/experiment-contracts.cjs.md#s-c3835dd06edcf101>) — zod-syntax-candidate; local schema/type.
- [tokens](<../symbols/files/electron/ai/llm-front-office/experiment-contracts.cjs.md#s-6524e3f8d9a6d029>) — zod-syntax-candidate; local schema/type.
- [capability](<../symbols/files/electron/ai/llm-front-office/experiment-contracts.cjs.md#s-e2ebe8e8f2b27b18>) — zod-syntax-candidate; local schema/type.
- [nullableCount](<../symbols/files/electron/ai/llm-front-office/experiment-contracts.cjs.md#s-676e4e6d74362b77>) — zod-syntax-candidate; exported.
- [configSchema](<../symbols/files/electron/ai/llm-front-office/experiment-contracts.cjs.md#s-2b0840364244df29>) — zod-syntax-candidate; local schema/type.
- [profileSchema](<../symbols/files/electron/ai/llm-front-office/experiment-contracts.cjs.md#s-21a283888527a0fe>) — zod-syntax-candidate; exported.
- [evidenceSchema](<../symbols/files/electron/ai/llm-front-office/experiment-contracts.cjs.md#s-1223ff69e5a0cae6>) — zod-syntax-candidate; exported.
- [errorSchema](<../symbols/files/electron/ai/llm-front-office/experiment-contracts.cjs.md#s-1b73a61b2ae1aa83>) — zod-syntax-candidate; local schema/type.
- [messageSchema](<../symbols/files/electron/ai/llm-front-office/experiment-contracts.cjs.md#s-c0e36a686ff51a7b>) — zod-syntax-candidate; local schema/type.
- [conversationSchema](<../symbols/files/electron/ai/llm-front-office/experiment-contracts.cjs.md#s-b8dd1ea2dfe1de5e>) — zod-syntax-candidate; exported.
- [requestSchema](<../symbols/files/electron/ai/llm-front-office/experiment-contracts.cjs.md#s-e7adc0d26642224a>) — zod-syntax-candidate; exported.
- [stateSchema](<../symbols/files/electron/ai/llm-front-office/model-registry.cjs.md#s-882f0670e6e9affd>) — zod-syntax-candidate; local schema/type.
- [CapabilityRegistry.override.value](<../symbols/files/electron/ai/llm-front-office/model-registry.cjs.md#s-a176faa919942436>) — zod-syntax-candidate; local schema/type.
- [CapabilityRegistry.favorite.v](<../symbols/files/electron/ai/llm-front-office/model-registry.cjs.md#s-3a96026b496471be>) — zod-syntax-candidate; local schema/type.
- [ObservedRequest](<../symbols/files/electron/ai/llm-front-office/observability.d.cts.md#s-c45a76ac8b8eef50>) — typescript-declaration; exported.
- [chunkSchema](<../symbols/files/electron/ai/llm-front-office/provider-gateway.cjs.md#s-ae5449dca2138b20>) — zod-syntax-candidate; local schema/type.
- [consumeCompletion.schema](<../symbols/files/electron/ai/llm-front-office/provider-gateway.cjs.md#s-e7c4631cbff8c8d1>) — zod-syntax-candidate; local schema/type.
- [FrontOfficeService.run.safe](<../symbols/files/electron/ai/llm-front-office/service.cjs.md#s-970c96bc8219debb>) — zod-syntax-candidate; local schema/type.
- [connectionInput](<../symbols/files/electron/ai/model-access.cjs.md#s-e79441b226980f83>) — zod-syntax-candidate; local schema/type.
- [DiagnosticCallback](<../symbols/files/electron/ai/request-logger.d.cts.md#s-b9fa4ae070bf83f2>) — typescript-declaration; exported.
- [RequestLogger](<../symbols/files/electron/ai/request-logger.d.cts.md#s-cb4b2ee3cffe8941>) — typescript-declaration; exported.
- [providerId](<../symbols/files/electron/ai/schemas.cjs.md#s-0cc761e7c918d390>) — zod-syntax-candidate; exported.
- [credentialInput](<../symbols/files/electron/ai/schemas.cjs.md#s-498dcf3f5bc309b9>) — zod-syntax-candidate; exported.
- [credentialProvider](<../symbols/files/electron/ai/schemas.cjs.md#s-825c894f9ec2c8a6>) — zod-syntax-candidate; exported.
- [settingsSchema](<../symbols/files/electron/ai/schemas.cjs.md#s-0eb862618f55f6f1>) — zod-syntax-candidate; exported.
- [geminiModel](<../symbols/files/electron/ai/schemas.cjs.md#s-b766b12f3fe0fa8a>) — zod-syntax-candidate; local schema/type.
- [geminiPage](<../symbols/files/electron/ai/schemas.cjs.md#s-dd31eb2f37fc0ba9>) — zod-syntax-candidate; exported.
- [tokenCount](<../symbols/files/electron/ai/schemas.cjs.md#s-f630c43aa879e8fe>) — zod-syntax-candidate; local schema/type.
- [geminiChunk](<../symbols/files/electron/ai/schemas.cjs.md#s-c6e950c213a34e76>) — zod-syntax-candidate; exported.

## Source inventory

| File | Role | Declarations |
| --- | --- | --- |
| [electron/ai/backend-audit.test.cjs:1](<../../../electron/ai/backend-audit.test.cjs#L1>) | test | 24 |
| [electron/ai/backend-reset.cjs:1](<../../../electron/ai/backend-reset.cjs#L1>) | production | 9 |
| [electron/ai/backend-reset.test.cjs:1](<../../../electron/ai/backend-reset.test.cjs#L1>) | test | 12 |
| [electron/ai/chat/chat-service.cjs:1](<../../../electron/ai/chat/chat-service.cjs#L1>) | production | 69 |
| [electron/ai/chat/conversation-store.cjs:1](<../../../electron/ai/chat/conversation-store.cjs#L1>) | production | 35 |
| [electron/ai/chronoz-adapter.cjs:1](<../../../electron/ai/chronoz-adapter.cjs#L1>) | production | 24 |
| [electron/ai/context-box-store.cjs:1](<../../../electron/ai/context-box-store.cjs#L1>) | production | 36 |
| [electron/ai/context-box-store.test.cjs:1](<../../../electron/ai/context-box-store.test.cjs#L1>) | test | 17 |
| [electron/ai/context-identity.cjs:1](<../../../electron/ai/context-identity.cjs#L1>) | production | 12 |
| [electron/ai/context-limits.cjs:1](<../../../electron/ai/context-limits.cjs#L1>) | production | 0 |
| [electron/ai/context-limits.d.cts:1](<../../../electron/ai/context-limits.d.cts#L1>) | declaration | 0 |
| [electron/ai/context-limits.test.cjs:1](<../../../electron/ai/context-limits.test.cjs#L1>) | test | 7 |
| [electron/ai/credential-store.cjs:1](<../../../electron/ai/credential-store.cjs#L1>) | production | 12 |
| [electron/ai/credential-store.test.cjs:1](<../../../electron/ai/credential-store.test.cjs#L1>) | test | 29 |
| [electron/ai/dataset-engine.cjs:1](<../../../electron/ai/dataset-engine.cjs#L1>) | production | 56 |
| [electron/ai/dataset-evidence.cjs:1](<../../../electron/ai/dataset-evidence.cjs#L1>) | production | 26 |
| [electron/ai/dataset-evidence.test.cjs:1](<../../../electron/ai/dataset-evidence.test.cjs#L1>) | test | 14 |
| [electron/ai/dataset-planner.cjs:1](<../../../electron/ai/dataset-planner.cjs#L1>) | production | 17 |
| [electron/ai/dataset-session.cjs:1](<../../../electron/ai/dataset-session.cjs#L1>) | production | 9 |
| [electron/ai/dataset-worker.cjs:1](<../../../electron/ai/dataset-worker.cjs#L1>) | production | 3 |
| [electron/ai/dataset.test.cjs:1](<../../../electron/ai/dataset.test.cjs#L1>) | test | 54 |
| [electron/ai/engine-chat.cjs:1](<../../../electron/ai/engine-chat.cjs#L1>) | production | 14 |
| [electron/ai/engine-registry.cjs:1](<../../../electron/ai/engine-registry.cjs#L1>) | production | 30 |
| [electron/ai/engine-registry.test.cjs:1](<../../../electron/ai/engine-registry.test.cjs#L1>) | test | 34 |
| [electron/ai/front-office-engine.test.cjs:1](<../../../electron/ai/front-office-engine.test.cjs#L1>) | test | 120 |
| [electron/ai/front-office-evaluation.test.cjs:1](<../../../electron/ai/front-office-evaluation.test.cjs#L1>) | test | 24 |
| [electron/ai/front-office.test.cjs:1](<../../../electron/ai/front-office.test.cjs#L1>) | test | 49 |
| [electron/ai/history-budget.cjs:1](<../../../electron/ai/history-budget.cjs#L1>) | production | 2 |
| [electron/ai/inference/prompt-builder.cjs:1](<../../../electron/ai/inference/prompt-builder.cjs#L1>) | production | 14 |
| [electron/ai/inference/prompt-builder.test.cjs:1](<../../../electron/ai/inference/prompt-builder.test.cjs#L1>) | test | 25 |
| [electron/ai/inference/response-validation.cjs:1](<../../../electron/ai/inference/response-validation.cjs#L1>) | production | 8 |
| [electron/ai/ipc.cjs:1](<../../../electron/ai/ipc.cjs#L1>) | production | 118 |
| [electron/ai/ipc.test.cjs:1](<../../../electron/ai/ipc.test.cjs#L1>) | test | 15 |
| [electron/ai/json-store.cjs:1](<../../../electron/ai/json-store.cjs#L1>) | production | 0 |
| [electron/ai/knowledge-store.cjs:1](<../../../electron/ai/knowledge-store.cjs#L1>) | production | 70 |
| [electron/ai/knowledge-store.test.cjs:1](<../../../electron/ai/knowledge-store.test.cjs#L1>) | test | 32 |
| [electron/ai/llm-front-office/catalog-sort.cjs:1](<../../../electron/ai/llm-front-office/catalog-sort.cjs#L1>) | production | 5 |
| [electron/ai/llm-front-office/catalog-sort.d.cts:1](<../../../electron/ai/llm-front-office/catalog-sort.d.cts#L1>) | declaration | 1 |
| [electron/ai/llm-front-office/contracts.cjs:1](<../../../electron/ai/llm-front-office/contracts.cjs#L1>) | production | 12 |
| [electron/ai/llm-front-office/conversation-manager.cjs:1](<../../../electron/ai/llm-front-office/conversation-manager.cjs#L1>) | production | 12 |
| [electron/ai/llm-front-office/errors.cjs:1](<../../../electron/ai/llm-front-office/errors.cjs#L1>) | production | 1 |
| [electron/ai/llm-front-office/evaluation/fixtures.cjs:1](<../../../electron/ai/llm-front-office/evaluation/fixtures.cjs#L1>) | production | 4 |
| [electron/ai/llm-front-office/evaluation/harness.cjs:1](<../../../electron/ai/llm-front-office/evaluation/harness.cjs#L1>) | production | 42 |
| [electron/ai/llm-front-office/experiment-contracts.cjs:1](<../../../electron/ai/llm-front-office/experiment-contracts.cjs#L1>) | production | 22 |
| [electron/ai/llm-front-office/experiment-contracts.d.cts:1](<../../../electron/ai/llm-front-office/experiment-contracts.d.cts#L1>) | declaration | 2 |
| [electron/ai/llm-front-office/export.cjs:1](<../../../electron/ai/llm-front-office/export.cjs#L1>) | production | 4 |
| [electron/ai/llm-front-office/export.d.cts:1](<../../../electron/ai/llm-front-office/export.d.cts#L1>) | declaration | 1 |
| [electron/ai/llm-front-office/long-context-reliability.cjs:1](<../../../electron/ai/llm-front-office/long-context-reliability.cjs#L1>) | production | 8 |
| [electron/ai/llm-front-office/model-registry.cjs:1](<../../../electron/ai/llm-front-office/model-registry.cjs#L1>) | production | 25 |
| [electron/ai/llm-front-office/model-router.cjs:1](<../../../electron/ai/llm-front-office/model-router.cjs#L1>) | production | 16 |
| [electron/ai/llm-front-office/model-router.d.cts:1](<../../../electron/ai/llm-front-office/model-router.d.cts#L1>) | declaration | 2 |
| [electron/ai/llm-front-office/observability.cjs:1](<../../../electron/ai/llm-front-office/observability.cjs#L1>) | production | 21 |
| [electron/ai/llm-front-office/observability.d.cts:1](<../../../electron/ai/llm-front-office/observability.d.cts#L1>) | declaration | 11 |
| [electron/ai/llm-front-office/provider-gateway.cjs:1](<../../../electron/ai/llm-front-office/provider-gateway.cjs#L1>) | production | 14 |
| [electron/ai/llm-front-office/reliability.cjs:1](<../../../electron/ai/llm-front-office/reliability.cjs#L1>) | production | 11 |
| [electron/ai/llm-front-office/request-intake.cjs:1](<../../../electron/ai/llm-front-office/request-intake.cjs#L1>) | production | 6 |
| [electron/ai/llm-front-office/request-intake.d.cts:1](<../../../electron/ai/llm-front-office/request-intake.d.cts#L1>) | declaration | 3 |
| [electron/ai/llm-front-office/response-processor.cjs:1](<../../../electron/ai/llm-front-office/response-processor.cjs#L1>) | production | 11 |
| [electron/ai/llm-front-office/service.cjs:1](<../../../electron/ai/llm-front-office/service.cjs#L1>) | production | 49 |
| [electron/ai/llm-front-office/telemetry-store.cjs:1](<../../../electron/ai/llm-front-office/telemetry-store.cjs#L1>) | production | 4 |
| [electron/ai/llm-front-office/token-budget.cjs:1](<../../../electron/ai/llm-front-office/token-budget.cjs#L1>) | production | 1 |
| [electron/ai/llm-front-office/token-budget.d.cts:1](<../../../electron/ai/llm-front-office/token-budget.d.cts#L1>) | declaration | 1 |
| [electron/ai/model-access.cjs:1](<../../../electron/ai/model-access.cjs#L1>) | production | 14 |
| [electron/ai/model-access.test.cjs:1](<../../../electron/ai/model-access.test.cjs#L1>) | test | 25 |
| [electron/ai/model-check.cjs:1](<../../../electron/ai/model-check.cjs#L1>) | production | 1 |
| [electron/ai/model-check.test.cjs:1](<../../../electron/ai/model-check.test.cjs#L1>) | test | 13 |
| [electron/ai/model-errors.cjs:1](<../../../electron/ai/model-errors.cjs#L1>) | production | 0 |
| [electron/ai/model-errors.test.cjs:1](<../../../electron/ai/model-errors.test.cjs#L1>) | test | 1 |
| [electron/ai/model-pull.cjs:1](<../../../electron/ai/model-pull.cjs#L1>) | production | 13 |
| [electron/ai/model-pull.test.cjs:1](<../../../electron/ai/model-pull.test.cjs#L1>) | test | 14 |
| [electron/ai/model-registry.cjs:1](<../../../electron/ai/model-registry.cjs#L1>) | production | 18 |
| [electron/ai/numeric-equations.cjs:1](<../../../electron/ai/numeric-equations.cjs#L1>) | production | 9 |
| [electron/ai/openrouter-usage.cjs:1](<../../../electron/ai/openrouter-usage.cjs#L1>) | production | 16 |
| [electron/ai/openrouter-usage.test.cjs:1](<../../../electron/ai/openrouter-usage.test.cjs#L1>) | test | 33 |
| [electron/ai/orchestrator.cjs:1](<../../../electron/ai/orchestrator.cjs#L1>) | production | 62 |
| [electron/ai/orchestrator.test.cjs:1](<../../../electron/ai/orchestrator.test.cjs#L1>) | test | 104 |
| [electron/ai/provider-registry.cjs:1](<../../../electron/ai/provider-registry.cjs#L1>) | production | 4 |
| [electron/ai/provider-usage.cjs:1](<../../../electron/ai/provider-usage.cjs#L1>) | production | 14 |
| [electron/ai/provider-usage.test.cjs:1](<../../../electron/ai/provider-usage.test.cjs#L1>) | test | 27 |
| [electron/ai/quote-origin.cjs:1](<../../../electron/ai/quote-origin.cjs#L1>) | production | 1 |
| [electron/ai/request-logger.cjs:1](<../../../electron/ai/request-logger.cjs#L1>) | production | 18 |
| [electron/ai/request-logger.d.cts:1](<../../../electron/ai/request-logger.d.cts#L1>) | declaration | 15 |
| [electron/ai/request-logger.test.cjs:1](<../../../electron/ai/request-logger.test.cjs#L1>) | test | 33 |
| [electron/ai/research-knowledge.cjs:1](<../../../electron/ai/research-knowledge.cjs#L1>) | production | 11 |
| [electron/ai/run-store.cjs:1](<../../../electron/ai/run-store.cjs#L1>) | production | 19 |
| [electron/ai/run-store.test.cjs:1](<../../../electron/ai/run-store.test.cjs#L1>) | test | 23 |
| [electron/ai/runtime-context.cjs:1](<../../../electron/ai/runtime-context.cjs#L1>) | production | 24 |
| [electron/ai/runtime-context.test.cjs:1](<../../../electron/ai/runtime-context.test.cjs#L1>) | test | 12 |
| [electron/ai/schemas.cjs:1](<../../../electron/ai/schemas.cjs#L1>) | production | 11 |
| [electron/ai/skills.cjs:1](<../../../electron/ai/skills.cjs#L1>) | production | 4 |
| [electron/ai/statistics.cjs:1](<../../../electron/ai/statistics.cjs#L1>) | production | 24 |
| [electron/ai/statistics.test.cjs:1](<../../../electron/ai/statistics.test.cjs#L1>) | test | 21 |
