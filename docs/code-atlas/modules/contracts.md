# Cross-boundary TypeScript contracts

[Atlas](<../README.md>) / [All symbols and callers/callees](<../symbols/contracts.md>)

Declares renderer/backend DTOs and public types; declarations do not implement authorization.

Owns: types/. This ownership is editorial; source locations and import edges below are generated facts.

9 source files; 117 callable declarations; 147 contract declarations.

## Entry points and exported symbols

Candidates from compiler export tables and methods on exported classes. Registration, availability, authorization and runtime reachability must be checked separately.

| Symbol | Source | Kind |
| --- | --- | --- |
| [ModelMessage](<../symbols/files/types/ai.ts.md#s-2b936fb712b9f445>) | [types/ai.ts:12](<../../../types/ai.ts#L12>) | TypeAliasDeclaration |
| [ModelRequest](<../symbols/files/types/ai.ts.md#s-a2160509020fe1e7>) | [types/ai.ts:16](<../../../types/ai.ts#L16>) | TypeAliasDeclaration |
| [ModelErrorCode](<../symbols/files/types/ai.ts.md#s-060ce9e7096a9810>) | [types/ai.ts:27](<../../../types/ai.ts#L27>) | TypeAliasDeclaration |
| [ModelRuntimeErrorValue](<../symbols/files/types/ai.ts.md#s-1cca7bac55d14ec7>) | [types/ai.ts:60](<../../../types/ai.ts#L60>) | TypeAliasDeclaration |
| [LocalModel](<../symbols/files/types/ai.ts.md#s-7b424e12b59f5c1e>) | [types/ai.ts:65](<../../../types/ai.ts#L65>) | TypeAliasDeclaration |
| [ModelStatus](<../symbols/files/types/ai.ts.md#s-ee933aaab98b4858>) | [types/ai.ts:78](<../../../types/ai.ts#L78>) | TypeAliasDeclaration |
| [ModelSourceReference](<../symbols/files/types/ai.ts.md#s-d2ad439e67e454d9>) | [types/ai.ts:86](<../../../types/ai.ts#L86>) | TypeAliasDeclaration |
| [ModelAvailableSourceReference](<../symbols/files/types/ai.ts.md#s-9230ff0cab5639d1>) | [types/ai.ts:91](<../../../types/ai.ts#L91>) | TypeAliasDeclaration |
| [ModelResponse](<../symbols/files/types/ai.ts.md#s-ce8979c4f1f6ebda>) | [types/ai.ts:96](<../../../types/ai.ts#L96>) | TypeAliasDeclaration |
| [ContextModelResult](<../symbols/files/types/ai.ts.md#s-c72a217d40a1d913>) | [types/ai.ts:110](<../../../types/ai.ts#L110>) | TypeAliasDeclaration |
| [ModelRunStatus](<../symbols/files/types/ai.ts.md#s-270381847e557d14>) | [types/ai.ts:116](<../../../types/ai.ts#L116>) | TypeAliasDeclaration |
| [ModelRunErrorValue](<../symbols/files/types/ai.ts.md#s-9251901fd3e0b796>) | [types/ai.ts:117](<../../../types/ai.ts#L117>) | TypeAliasDeclaration |
| [ModelRunRecord](<../symbols/files/types/ai.ts.md#s-7680439e71709d98>) | [types/ai.ts:122](<../../../types/ai.ts#L122>) | TypeAliasDeclaration |
| [ModelConnectivityTest](<../symbols/files/types/ai.ts.md#s-f35aadf576d80236>) | [types/ai.ts:141](<../../../types/ai.ts#L141>) | TypeAliasDeclaration |
| [ModelProvider](<../symbols/files/types/ai.ts.md#s-2dd777b4b4e35e77>) | [types/ai.ts:145](<../../../types/ai.ts#L145>) | InterfaceDeclaration |
| [ContextIdentity](<../symbols/files/types/ai.ts.md#s-96fdf3e576876711>) | [types/ai.ts:149](<../../../types/ai.ts#L149>) | TypeAliasDeclaration |
| [ChatMessage](<../symbols/files/types/ai.ts.md#s-fe58a81fe02a42f7>) | [types/ai.ts:154](<../../../types/ai.ts#L154>) | TypeAliasDeclaration |
| [ChatAttempt](<../symbols/files/types/ai.ts.md#s-b68cde2f6a4b07a1>) | [types/ai.ts:173](<../../../types/ai.ts#L173>) | TypeAliasDeclaration |
| [ContextBox](<../symbols/files/types/ai.ts.md#s-55a04f12cb94812e>) | [types/ai.ts:180](<../../../types/ai.ts#L180>) | TypeAliasDeclaration |
| [ContextBoxItem](<../symbols/files/types/ai.ts.md#s-90a424c5da9669b3>) | [types/ai.ts:189](<../../../types/ai.ts#L189>) | TypeAliasDeclaration |
| [ContextBoxEdit](<../symbols/files/types/ai.ts.md#s-40c5068e744ee6c7>) | [types/ai.ts:199](<../../../types/ai.ts#L199>) | TypeAliasDeclaration |
| [Conversation](<../symbols/files/types/ai.ts.md#s-3e32c37f58abc6fd>) | [types/ai.ts:207](<../../../types/ai.ts#L207>) | TypeAliasDeclaration |
| [AgentNodeKind](<../symbols/files/types/ai.ts.md#s-70e5f1055b43b6d0>) | [types/ai.ts:224](<../../../types/ai.ts#L224>) | TypeAliasDeclaration |
| [EngineState](<../symbols/files/types/ai.ts.md#s-6c28d8c95c148e78>) | [types/ai.ts:233](<../../../types/ai.ts#L233>) | TypeAliasDeclaration |
| [EngineReportResult](<../symbols/files/types/ai.ts.md#s-7c515ff0761fa3bc>) | [types/ai.ts:243](<../../../types/ai.ts#L243>) | TypeAliasDeclaration |
| [ChatEngineReport](<../symbols/files/types/ai.ts.md#s-be62133bc67cae27>) | [types/ai.ts:254](<../../../types/ai.ts#L254>) | TypeAliasDeclaration |
| [ConstructionBoxBinding](<../symbols/files/types/ai.ts.md#s-cb1ce5758f42e3e3>) | [types/ai.ts:258](<../../../types/ai.ts#L258>) | TypeAliasDeclaration |
| [ConstructionBoxPreview](<../symbols/files/types/ai.ts.md#s-ef692da47e9c5dbe>) | [types/ai.ts:267](<../../../types/ai.ts#L267>) | TypeAliasDeclaration |
| [ConstructionFileBinding](<../symbols/files/types/ai.ts.md#s-e34e0a8e891da877>) | [types/ai.ts:277](<../../../types/ai.ts#L277>) | TypeAliasDeclaration |
| [ConstructionSourceBinding](<../symbols/files/types/ai.ts.md#s-cf28c67a79d5fe7a>) | [types/ai.ts:281](<../../../types/ai.ts#L281>) | TypeAliasDeclaration |
| [ConstructionFilePreview](<../symbols/files/types/ai.ts.md#s-81b526593588999c>) | [types/ai.ts:283](<../../../types/ai.ts#L283>) | TypeAliasDeclaration |
| [AgentConstructionConfig](<../symbols/files/types/ai.ts.md#s-ef1eebef6cd825c4>) | [types/ai.ts:287](<../../../types/ai.ts#L287>) | TypeAliasDeclaration |
| [AgentConstructionInput](<../symbols/files/types/ai.ts.md#s-74d85efe0921c277>) | [types/ai.ts:317](<../../../types/ai.ts#L317>) | TypeAliasDeclaration |
| [AgentAppearanceOptions](<../symbols/files/types/ai.ts.md#s-91cc29a95882e12d>) | [types/ai.ts:327](<../../../types/ai.ts#L327>) | TypeAliasDeclaration |
| [AgentAppearance](<../symbols/files/types/ai.ts.md#s-c8db8f1b85604f50>) | [types/ai.ts:332](<../../../types/ai.ts#L332>) | TypeAliasDeclaration |
| [AgentConfig](<../symbols/files/types/ai.ts.md#s-7fabf125e03924c2>) | [types/ai.ts:338](<../../../types/ai.ts#L338>) | TypeAliasDeclaration |
| [RuntimeStatus](<../symbols/files/types/ai.ts.md#s-2ea9ec62145bd012>) | [types/ai.ts:374](<../../../types/ai.ts#L374>) | TypeAliasDeclaration |
| [ModelPullStatus](<../symbols/files/types/ai.ts.md#s-6177168ce053c1a5>) | [types/ai.ts:380](<../../../types/ai.ts#L380>) | TypeAliasDeclaration |
| [ChatState](<../symbols/files/types/ai.ts.md#s-b33685998a6ef895>) | [types/ai.ts:385](<../../../types/ai.ts#L385>) | TypeAliasDeclaration |
| [ModelSettings](<../symbols/files/types/ai.ts.md#s-0c3bd69bf5867a3e>) | [types/ai.ts:408](<../../../types/ai.ts#L408>) | TypeAliasDeclaration |
| [ModelDescriptor](<../symbols/files/types/ai.ts.md#s-a7e8e3ea7958330a>) | [types/ai.ts:421](<../../../types/ai.ts#L421>) | TypeAliasDeclaration |
| [ProviderStatus](<../symbols/files/types/ai.ts.md#s-f0c8ee1b47b7c6b4>) | [types/ai.ts:439](<../../../types/ai.ts#L439>) | TypeAliasDeclaration |
| [RegistryState](<../symbols/files/types/ai.ts.md#s-2e8b7c0211a0d8c5>) | [types/ai.ts:448](<../../../types/ai.ts#L448>) | TypeAliasDeclaration |
| [ScopeSelection](<../symbols/files/types/ai.ts.md#s-9bed5990beb64a01>) | [types/ai.ts:455](<../../../types/ai.ts#L455>) | TypeAliasDeclaration |
| [ChatRequest](<../symbols/files/types/ai.ts.md#s-b65846af22b827bc>) | [types/ai.ts:459](<../../../types/ai.ts#L459>) | TypeAliasDeclaration |
| [ChatRun](<../symbols/files/types/ai.ts.md#s-7e88b00495a0d498>) | [types/ai.ts:466](<../../../types/ai.ts#L466>) | TypeAliasDeclaration |
| [ChatResult](<../symbols/files/types/ai.ts.md#s-4a6807f210250f67>) | [types/ai.ts:475](<../../../types/ai.ts#L475>) | TypeAliasDeclaration |
| [ChatEvent](<../symbols/files/types/ai.ts.md#s-ebb24d591ce21f44>) | [types/ai.ts:476](<../../../types/ai.ts#L476>) | TypeAliasDeclaration |
| [ProviderUsageSnapshot](<../symbols/files/types/ai.ts.md#s-3b716dc64e9d971c>) | [types/ai.ts:487](<../../../types/ai.ts#L487>) | InterfaceDeclaration |
| [OpenRouterUsageSnapshot](<../symbols/files/types/ai.ts.md#s-b3fca13754a76d01>) | [types/ai.ts:513](<../../../types/ai.ts#L513>) | TypeAliasDeclaration |
| [AiBridge](<../symbols/files/types/ai.ts.md#s-03f31b4f40138481>) | [types/ai.ts:517](<../../../types/ai.ts#L517>) | InterfaceDeclaration |
| [ProviderVerification](<../symbols/files/types/ai.ts.md#s-b25940ee6d4d5f7a>) | [types/ai.ts:683](<../../../types/ai.ts#L683>) | TypeAliasDeclaration |
| [CredentialScope](<../symbols/files/types/ai.ts.md#s-30f39e44c2439c5c>) | [types/ai.ts:690](<../../../types/ai.ts#L690>) | TypeAliasDeclaration |
| [ProviderConnection](<../symbols/files/types/ai.ts.md#s-72eeaaf697f8cabc>) | [types/ai.ts:692](<../../../types/ai.ts#L692>) | TypeAliasDeclaration |
| [ProvidedModelPreview](<../symbols/files/types/ai.ts.md#s-04123d652bd8f0f7>) | [types/ai.ts:700](<../../../types/ai.ts#L700>) | TypeAliasDeclaration |
| [ModelCheckResult](<../symbols/files/types/ai.ts.md#s-09d5209868e9067e>) | [types/ai.ts:713](<../../../types/ai.ts#L713>) | TypeAliasDeclaration |
| [IdentitySource](<../symbols/files/types/backend-identity.ts.md#s-4d1c2a23af6fcb8a>) | [types/backend-identity.ts:1](<../../../types/backend-identity.ts#L1>) | TypeAliasDeclaration |
| [IdentityChunk](<../symbols/files/types/backend-identity.ts.md#s-57f48bdacc7dfb96>) | [types/backend-identity.ts:14](<../../../types/backend-identity.ts#L14>) | TypeAliasDeclaration |
| [IdentityCapability](<../symbols/files/types/backend-identity.ts.md#s-7409876be641d7e1>) | [types/backend-identity.ts:30](<../../../types/backend-identity.ts#L30>) | TypeAliasDeclaration |
| [IdentityLogEntry](<../symbols/files/types/backend-identity.ts.md#s-1fcc0c365da66d26>) | [types/backend-identity.ts:46](<../../../types/backend-identity.ts#L46>) | TypeAliasDeclaration |
| [IdentityConnection](<../symbols/files/types/backend-identity.ts.md#s-3f5cfa6204606a95>) | [types/backend-identity.ts:52](<../../../types/backend-identity.ts#L52>) | TypeAliasDeclaration |
| [IdentityManifest](<../symbols/files/types/backend-identity.ts.md#s-aa91ba36f0e5be90>) | [types/backend-identity.ts:64](<../../../types/backend-identity.ts#L64>) | TypeAliasDeclaration |
| [BackendIdentityState](<../symbols/files/types/backend-identity.ts.md#s-13d52ea672dc4e1d>) | [types/backend-identity.ts:121](<../../../types/backend-identity.ts#L121>) | TypeAliasDeclaration |
| [IdentityChunkPage](<../symbols/files/types/backend-identity.ts.md#s-2dc474f1aa68f8ae>) | [types/backend-identity.ts:133](<../../../types/backend-identity.ts#L133>) | TypeAliasDeclaration |
| [VaultEntry](<../symbols/files/types/electron.d.ts.md#s-e7fa56c6f824a06d>) | [types/electron.d.ts:5](<../../../types/electron.d.ts#L5>) | TypeAliasDeclaration |
| [VaultSnapshot](<../symbols/files/types/electron.d.ts.md#s-2f53be0c4bcd1857>) | [types/electron.d.ts:19](<../../../types/electron.d.ts#L19>) | TypeAliasDeclaration |
| [VaultIssue](<../symbols/files/types/electron.d.ts.md#s-345f7380a570d160>) | [types/electron.d.ts:30](<../../../types/electron.d.ts#L30>) | TypeAliasDeclaration |
| [VaultFile](<../symbols/files/types/electron.d.ts.md#s-5ec4c24d4fdcb7df>) | [types/electron.d.ts:35](<../../../types/electron.d.ts#L35>) | TypeAliasDeclaration |
| [VaultPdfFile](<../symbols/files/types/electron.d.ts.md#s-971f8fd54b765782>) | [types/electron.d.ts:43](<../../../types/electron.d.ts#L43>) | TypeAliasDeclaration |
| [VaultSearchResult](<../symbols/files/types/electron.d.ts.md#s-e0357336d377d487>) | [types/electron.d.ts:53](<../../../types/electron.d.ts#L53>) | TypeAliasDeclaration |
| [Station](<../symbols/files/types/electron.d.ts.md#s-732cb66f6918b14c>) | [types/electron.d.ts:60](<../../../types/electron.d.ts#L60>) | TypeAliasDeclaration |
| [StationAssignment](<../symbols/files/types/electron.d.ts.md#s-fe486bdcaeb845bb>) | [types/electron.d.ts:67](<../../../types/electron.d.ts#L67>) | TypeAliasDeclaration |
| [ActiveContextEntry](<../symbols/files/types/electron.d.ts.md#s-b71259046ea4cd34>) | [types/electron.d.ts:74](<../../../types/electron.d.ts#L74>) | TypeAliasDeclaration |
| [StationState](<../symbols/files/types/electron.d.ts.md#s-d490c146e919d217>) | [types/electron.d.ts:81](<../../../types/electron.d.ts#L81>) | TypeAliasDeclaration |
| [ContextPreview](<../symbols/files/types/electron.d.ts.md#s-92c886d761e0a6b9>) | [types/electron.d.ts:91](<../../../types/electron.d.ts#L91>) | TypeAliasDeclaration |
| [ContextSource](<../symbols/files/types/electron.d.ts.md#s-e97615db9bfe753c>) | [types/electron.d.ts:92](<../../../types/electron.d.ts#L92>) | TypeAliasDeclaration |
| [ContextPackage](<../symbols/files/types/electron.d.ts.md#s-741ec689b8aec57e>) | [types/electron.d.ts:104](<../../../types/electron.d.ts#L104>) | TypeAliasDeclaration |
| [ReattachmentSuggestion](<../symbols/files/types/electron.d.ts.md#s-004b997eb8d40017>) | [types/electron.d.ts:112](<../../../types/electron.d.ts#L112>) | TypeAliasDeclaration |
| [BrainScopeMode](<../symbols/files/types/electron.d.ts.md#s-fe7486b802703008>) | [types/electron.d.ts:116](<../../../types/electron.d.ts#L116>) | TypeAliasDeclaration |
| [BrainErrorCode](<../symbols/files/types/electron.d.ts.md#s-8d0e7e3cc443bfcd>) | [types/electron.d.ts:117](<../../../types/electron.d.ts#L117>) | TypeAliasDeclaration |
| [BrainScopeInput](<../symbols/files/types/electron.d.ts.md#s-b78bf12f1637afb8>) | [types/electron.d.ts:128](<../../../types/electron.d.ts#L128>) | TypeAliasDeclaration |
| [BrainSourceReadInput](<../symbols/files/types/electron.d.ts.md#s-c1d4b63bb7ca64fe>) | [types/electron.d.ts:133](<../../../types/electron.d.ts#L133>) | TypeAliasDeclaration |
| [BrainSource](<../symbols/files/types/electron.d.ts.md#s-f230963edadf1389>) | [types/electron.d.ts:138](<../../../types/electron.d.ts#L138>) | TypeAliasDeclaration |
| [BrainScope](<../symbols/files/types/electron.d.ts.md#s-9c0e1129861861e6>) | [types/electron.d.ts:149](<../../../types/electron.d.ts#L149>) | TypeAliasDeclaration |
| [BrainSourceContent](<../symbols/files/types/electron.d.ts.md#s-764b567db8c70d5e>) | [types/electron.d.ts:162](<../../../types/electron.d.ts#L162>) | TypeAliasDeclaration |
| [BrainScopeClientError](<../symbols/files/types/electron.d.ts.md#s-32af3b457bd8f62a>) | [types/electron.d.ts:173](<../../../types/electron.d.ts#L173>) | InterfaceDeclaration |
| [EnginePackageCatalog](<../symbols/files/types/engine-packages.ts.md#s-52fd1e35be8f142b>) | [types/engine-packages.ts:2](<../../../types/engine-packages.ts#L2>) | TypeAliasDeclaration |
| [AgentAssignment](<../symbols/files/types/entity-agents.ts.md#s-9cd095537abbe572>) | [types/entity-agents.ts:18](<../../../types/entity-agents.ts#L18>) | TypeAliasDeclaration |
| [AssignmentContext](<../symbols/files/types/entity-agents.ts.md#s-cd9228441b9ac380>) | [types/entity-agents.ts:26](<../../../types/entity-agents.ts#L26>) | TypeAliasDeclaration |
| [EngineDefinition](<../symbols/files/types/entity-agents.ts.md#s-42f74bf50c325a5b>) | [types/entity-agents.ts:33](<../../../types/entity-agents.ts#L33>) | TypeAliasDeclaration |
| [AssignmentScope](<../symbols/files/types/entity-agents.ts.md#s-e74aa358a489962f>) | [types/entity-agents.ts:41](<../../../types/entity-agents.ts#L41>) | TypeAliasDeclaration |
| [AgentEvidenceReference](<../symbols/files/types/entity-agents.ts.md#s-1ce660572bf34161>) | [types/entity-agents.ts:43](<../../../types/entity-agents.ts#L43>) | TypeAliasDeclaration |
| [PriceEvidence](<../symbols/files/types/entity-agents.ts.md#s-f1172313c0034f4e>) | [types/entity-agents.ts:55](<../../../types/entity-agents.ts#L55>) | TypeAliasDeclaration |
| [AgentToolRequest](<../symbols/files/types/entity-agents.ts.md#s-8e5654657624db12>) | [types/entity-agents.ts:77](<../../../types/entity-agents.ts#L77>) | TypeAliasDeclaration |
| [EntityAgentState](<../symbols/files/types/entity-agents.ts.md#s-ba5f3917f89d7b06>) | [types/entity-agents.ts:110](<../../../types/entity-agents.ts#L110>) | TypeAliasDeclaration |
| [EntityAgentBridge](<../symbols/files/types/entity-agents.ts.md#s-2bd2e209dad96d7a>) | [types/entity-agents.ts:213](<../../../types/entity-agents.ts#L213>) | InterfaceDeclaration |
| [EntityScopeContract](<../symbols/files/types/entity-scope.ts.md#s-bd758b5c07f77e29>) | [types/entity-scope.ts:2](<../../../types/entity-scope.ts#L2>) | TypeAliasDeclaration |
| [FinancialEvidence](<../symbols/files/types/entity-scope.ts.md#s-51cdbe0d98e2c06c>) | [types/entity-scope.ts:32](<../../../types/entity-scope.ts#L32>) | TypeAliasDeclaration |
| [BaselineCallPhase](<../symbols/files/types/front-office.ts.md#s-a064484de70b0f4e>) | [types/front-office.ts:2](<../../../types/front-office.ts#L2>) | TypeAliasDeclaration |
| [BaselineCall](<../symbols/files/types/front-office.ts.md#s-ca1ef3640e002139>) | [types/front-office.ts:5](<../../../types/front-office.ts#L5>) | TypeAliasDeclaration |
| [BaselineTrace](<../symbols/files/types/front-office.ts.md#s-443e5faa2a971bcd>) | [types/front-office.ts:31](<../../../types/front-office.ts#L31>) | TypeAliasDeclaration |
| [MetadataSource](<../symbols/files/types/front-office.ts.md#s-4792acdf12c0d2be>) | [types/front-office.ts:76](<../../../types/front-office.ts#L76>) | TypeAliasDeclaration |
| [ExperimentConfig](<../symbols/files/types/front-office.ts.md#s-264ca6a16295a13e>) | [types/front-office.ts:81](<../../../types/front-office.ts#L81>) | TypeAliasDeclaration |
| [ReliabilityEvidence](<../symbols/files/types/front-office.ts.md#s-f3847a52cccc1b67>) | [types/front-office.ts:125](<../../../types/front-office.ts#L125>) | TypeAliasDeclaration |
| [ModelProfile](<../symbols/files/types/front-office.ts.md#s-9f2b629462b9b9c6>) | [types/front-office.ts:136](<../../../types/front-office.ts#L136>) | TypeAliasDeclaration |
| [ExperimentConversation](<../symbols/files/types/front-office.ts.md#s-f05e251fa18e224e>) | [types/front-office.ts:162](<../../../types/front-office.ts#L162>) | TypeAliasDeclaration |
| [FrontOfficeState](<../symbols/files/types/front-office.ts.md#s-920373899ff254f3>) | [types/front-office.ts:179](<../../../types/front-office.ts#L179>) | TypeAliasDeclaration |
| [ExperimentEvent](<../symbols/files/types/front-office.ts.md#s-422aa0234ddd0c7a>) | [types/front-office.ts:191](<../../../types/front-office.ts#L191>) | TypeAliasDeclaration |
| [ExperimentResult](<../symbols/files/types/front-office.ts.md#s-81925523b516135a>) | [types/front-office.ts:214](<../../../types/front-office.ts#L214>) | TypeAliasDeclaration |
| [ExperimentTask](<../symbols/files/types/front-office.ts.md#s-0caa72f2546f1d25>) | [types/front-office.ts:226](<../../../types/front-office.ts#L226>) | TypeAliasDeclaration |
| [NormalizedChatRequest](<../symbols/files/types/front-office.ts.md#s-01141f50880128c3>) | [types/front-office.ts:228](<../../../types/front-office.ts#L228>) | TypeAliasDeclaration |
| [TaskRequirements](<../symbols/files/types/front-office.ts.md#s-3d0bc99da1818f6c>) | [types/front-office.ts:236](<../../../types/front-office.ts#L236>) | TypeAliasDeclaration |
| [BudgetDecision](<../symbols/files/types/front-office.ts.md#s-7363ae216c65f36a>) | [types/front-office.ts:251](<../../../types/front-office.ts#L251>) | TypeAliasDeclaration |
| [RoutingCandidate](<../symbols/files/types/front-office.ts.md#s-242d0d960b29ae79>) | [types/front-office.ts:263](<../../../types/front-office.ts#L263>) | TypeAliasDeclaration |
| [RoutingPlan](<../symbols/files/types/front-office.ts.md#s-a51a2ba3b22d89b0>) | [types/front-office.ts:271](<../../../types/front-office.ts#L271>) | TypeAliasDeclaration |
| [LLMResponse](<../symbols/files/types/front-office.ts.md#s-da7580f3b672f305>) | [types/front-office.ts:281](<../../../types/front-office.ts#L281>) | TypeAliasDeclaration |
| [LLMRequest](<../symbols/files/types/front-office.ts.md#s-eaf02be8eac249a4>) | [types/front-office.ts:294](<../../../types/front-office.ts#L294>) | TypeAliasDeclaration |
| [LLMClient](<../symbols/files/types/front-office.ts.md#s-d5238236b54f947c>) | [types/front-office.ts:313](<../../../types/front-office.ts#L313>) | InterfaceDeclaration |
| [RequestStageName](<../symbols/files/types/front-office.ts.md#s-ee77e7034d6490ec>) | [types/front-office.ts:316](<../../../types/front-office.ts#L316>) | TypeAliasDeclaration |
| [RequestStage](<../symbols/files/types/front-office.ts.md#s-52a778d0fdf131d5>) | [types/front-office.ts:329](<../../../types/front-office.ts#L329>) | TypeAliasDeclaration |
| [WorldViewSource](<../symbols/files/types/worldview.ts.md#s-fd6c18f16844ae43>) | [types/worldview.ts:4](<../../../types/worldview.ts#L4>) | TypeAliasDeclaration |
| [WorldViewState](<../symbols/files/types/worldview.ts.md#s-9bf9066d688951cd>) | [types/worldview.ts:15](<../../../types/worldview.ts#L15>) | TypeAliasDeclaration |
| [UniverseEntry](<../symbols/files/types/worldview.ts.md#s-d9b233e4d5232411>) | [types/worldview.ts:22](<../../../types/worldview.ts#L22>) | TypeAliasDeclaration |
| [UniverseListing](<../symbols/files/types/worldview.ts.md#s-0a3b919df9182e13>) | [types/worldview.ts:29](<../../../types/worldview.ts#L29>) | TypeAliasDeclaration |
| [WorldViewOperation](<../symbols/files/types/worldview.ts.md#s-6854f2a83cb58d60>) | [types/worldview.ts:36](<../../../types/worldview.ts#L36>) | TypeAliasDeclaration |
| [WorldViewRequest](<../symbols/files/types/worldview.ts.md#s-f5b12a95902deb76>) | [types/worldview.ts:77](<../../../types/worldview.ts#L77>) | TypeAliasDeclaration |
| [WorldTagSearchResult](<../symbols/files/types/worldview.ts.md#s-c935416bb9c57909>) | [types/worldview.ts:110](<../../../types/worldview.ts#L110>) | TypeAliasDeclaration |
| [WorldTagSearchResponse](<../symbols/files/types/worldview.ts.md#s-80f74e55daee9ccf>) | [types/worldview.ts:121](<../../../types/worldview.ts#L121>) | TypeAliasDeclaration |
| [IndexedKnowledgeMenu](<../symbols/files/types/worldview.ts.md#s-5524a4061d71be3c>) | [types/worldview.ts:138](<../../../types/worldview.ts#L138>) | TypeAliasDeclaration |
| [IndexedPriceSource](<../symbols/files/types/worldview.ts.md#s-b86489f0c1d69e32>) | [types/worldview.ts:154](<../../../types/worldview.ts#L154>) | TypeAliasDeclaration |
| [IndexedFinanceSource](<../symbols/files/types/worldview.ts.md#s-ce65a90339108413>) | [types/worldview.ts:159](<../../../types/worldview.ts#L159>) | TypeAliasDeclaration |
| [FinancialSnapshot](<../symbols/files/types/worldview.ts.md#s-6c71238f0ff8c25c>) | [types/worldview.ts:165](<../../../types/worldview.ts#L165>) | TypeAliasDeclaration |
| [FinancialResponse](<../symbols/files/types/worldview.ts.md#s-3feafe7f8e755115>) | [types/worldview.ts:196](<../../../types/worldview.ts#L196>) | TypeAliasDeclaration |
| [KnowledgeCarousel](<../symbols/files/types/worldview.ts.md#s-105b5fde2b3b09fe>) | [types/worldview.ts:202](<../../../types/worldview.ts#L202>) | TypeAliasDeclaration |
| [CarouselObservation](<../symbols/files/types/worldview.ts.md#s-a8b13a6301d0ae11>) | [types/worldview.ts:210](<../../../types/worldview.ts#L210>) | TypeAliasDeclaration |
| [ImageKnowledgeResult](<../symbols/files/types/worldview.ts.md#s-81c9097a6afcb2ea>) | [types/worldview.ts:218](<../../../types/worldview.ts#L218>) | TypeAliasDeclaration |
| [ImageParseJob](<../symbols/files/types/worldview.ts.md#s-df10a522399561b0>) | [types/worldview.ts:249](<../../../types/worldview.ts#L249>) | TypeAliasDeclaration |
| [IndexValidation](<../symbols/files/types/worldview.ts.md#s-2fa48bba2d96da48>) | [types/worldview.ts:261](<../../../types/worldview.ts#L261>) | TypeAliasDeclaration |
| [KnowledgeIndexState](<../symbols/files/types/worldview.ts.md#s-49327a9b59357064>) | [types/worldview.ts:265](<../../../types/worldview.ts#L265>) | TypeAliasDeclaration |
| [DailyPriceResponse](<../symbols/files/types/worldview.ts.md#s-1915b9e77edea1a8>) | [types/worldview.ts:273](<../../../types/worldview.ts#L273>) | TypeAliasDeclaration |
| [MarketHistoryResponse](<../symbols/files/types/worldview.ts.md#s-0f332e94c6e5fdda>) | [types/worldview.ts:299](<../../../types/worldview.ts#L299>) | TypeAliasDeclaration |
| [KnowledgeIndexSave](<../symbols/files/types/worldview.ts.md#s-ad926f804294df1a>) | [types/worldview.ts:326](<../../../types/worldview.ts#L326>) | TypeAliasDeclaration |
| [ExcelSourcePreview](<../symbols/files/types/worldview.ts.md#s-f489700739fde3a2>) | [types/worldview.ts:334](<../../../types/worldview.ts#L334>) | TypeAliasDeclaration |
| [KnowledgeSourcePreview](<../symbols/files/types/worldview.ts.md#s-9bb384ef0ce4238c>) | [types/worldview.ts:369](<../../../types/worldview.ts#L369>) | TypeAliasDeclaration |
| [WorldViewBridge](<../symbols/files/types/worldview.ts.md#s-d07368615aba6e20>) | [types/worldview.ts:377](<../../../types/worldview.ts#L377>) | TypeAliasDeclaration |

## Depends on

Literal runtime production-file imports only; lazy imports are included. Type, test, tool and external dependencies remain available in the full index.

No cross-module production imports in this view.

## Depended on by

Literal runtime production-file imports only; lazy imports are included. Type, test, tool and external dependencies remain available in the full index.

No cross-module production imports in this view.

## Contracts

- [ModelMessage](<../symbols/files/types/ai.ts.md#s-2b936fb712b9f445>) — typescript-declaration; exported.
- [ModelRequest](<../symbols/files/types/ai.ts.md#s-a2160509020fe1e7>) — typescript-declaration; exported.
- [ModelErrorCode](<../symbols/files/types/ai.ts.md#s-060ce9e7096a9810>) — typescript-declaration; exported.
- [ModelRuntimeErrorValue](<../symbols/files/types/ai.ts.md#s-1cca7bac55d14ec7>) — typescript-declaration; exported.
- [LocalModel](<../symbols/files/types/ai.ts.md#s-7b424e12b59f5c1e>) — typescript-declaration; exported.
- [ModelStatus](<../symbols/files/types/ai.ts.md#s-ee933aaab98b4858>) — typescript-declaration; exported.
- [ModelSourceReference](<../symbols/files/types/ai.ts.md#s-d2ad439e67e454d9>) — typescript-declaration; exported.
- [ModelAvailableSourceReference](<../symbols/files/types/ai.ts.md#s-9230ff0cab5639d1>) — typescript-declaration; exported.
- [ModelResponse](<../symbols/files/types/ai.ts.md#s-ce8979c4f1f6ebda>) — typescript-declaration; exported.
- [ContextModelResult](<../symbols/files/types/ai.ts.md#s-c72a217d40a1d913>) — typescript-declaration; exported.
- [ModelRunStatus](<../symbols/files/types/ai.ts.md#s-270381847e557d14>) — typescript-declaration; exported.
- [ModelRunErrorValue](<../symbols/files/types/ai.ts.md#s-9251901fd3e0b796>) — typescript-declaration; exported.
- [ModelRunRecord](<../symbols/files/types/ai.ts.md#s-7680439e71709d98>) — typescript-declaration; exported.
- [ModelConnectivityTest](<../symbols/files/types/ai.ts.md#s-f35aadf576d80236>) — typescript-declaration; exported.
- [ModelProvider](<../symbols/files/types/ai.ts.md#s-2dd777b4b4e35e77>) — typescript-declaration; exported.
- [ContextIdentity](<../symbols/files/types/ai.ts.md#s-96fdf3e576876711>) — typescript-declaration; exported.
- [ChatMessage](<../symbols/files/types/ai.ts.md#s-fe58a81fe02a42f7>) — typescript-declaration; exported.
- [ChatAttempt](<../symbols/files/types/ai.ts.md#s-b68cde2f6a4b07a1>) — typescript-declaration; exported.
- [ContextBox](<../symbols/files/types/ai.ts.md#s-55a04f12cb94812e>) — typescript-declaration; exported.
- [ContextBoxItem](<../symbols/files/types/ai.ts.md#s-90a424c5da9669b3>) — typescript-declaration; exported.
- [ContextBoxEdit](<../symbols/files/types/ai.ts.md#s-40c5068e744ee6c7>) — typescript-declaration; exported.
- [Conversation](<../symbols/files/types/ai.ts.md#s-3e32c37f58abc6fd>) — typescript-declaration; exported.
- [AgentNodeKind](<../symbols/files/types/ai.ts.md#s-70e5f1055b43b6d0>) — typescript-declaration; exported.
- [EngineState](<../symbols/files/types/ai.ts.md#s-6c28d8c95c148e78>) — typescript-declaration; exported.
- [EngineReportResult](<../symbols/files/types/ai.ts.md#s-7c515ff0761fa3bc>) — typescript-declaration; exported.
- [ChatEngineReport](<../symbols/files/types/ai.ts.md#s-be62133bc67cae27>) — typescript-declaration; exported.
- [ConstructionBoxBinding](<../symbols/files/types/ai.ts.md#s-cb1ce5758f42e3e3>) — typescript-declaration; exported.
- [ConstructionBoxPreview](<../symbols/files/types/ai.ts.md#s-ef692da47e9c5dbe>) — typescript-declaration; exported.
- [ConstructionFileBinding](<../symbols/files/types/ai.ts.md#s-e34e0a8e891da877>) — typescript-declaration; exported.
- [ConstructionSourceBinding](<../symbols/files/types/ai.ts.md#s-cf28c67a79d5fe7a>) — typescript-declaration; exported.
- [ConstructionFilePreview](<../symbols/files/types/ai.ts.md#s-81b526593588999c>) — typescript-declaration; exported.
- [AgentConstructionConfig](<../symbols/files/types/ai.ts.md#s-ef1eebef6cd825c4>) — typescript-declaration; exported.
- [AgentConstructionInput](<../symbols/files/types/ai.ts.md#s-74d85efe0921c277>) — typescript-declaration; exported.
- [AgentAppearanceOptions](<../symbols/files/types/ai.ts.md#s-91cc29a95882e12d>) — typescript-declaration; exported.
- [AgentAppearance](<../symbols/files/types/ai.ts.md#s-c8db8f1b85604f50>) — typescript-declaration; exported.
- [AgentConfig](<../symbols/files/types/ai.ts.md#s-7fabf125e03924c2>) — typescript-declaration; exported.
- [RuntimeStatus](<../symbols/files/types/ai.ts.md#s-2ea9ec62145bd012>) — typescript-declaration; exported.
- [ModelPullStatus](<../symbols/files/types/ai.ts.md#s-6177168ce053c1a5>) — typescript-declaration; exported.
- [ChatState](<../symbols/files/types/ai.ts.md#s-b33685998a6ef895>) — typescript-declaration; exported.
- [ModelSettings](<../symbols/files/types/ai.ts.md#s-0c3bd69bf5867a3e>) — typescript-declaration; exported.
- [ModelDescriptor](<../symbols/files/types/ai.ts.md#s-a7e8e3ea7958330a>) — typescript-declaration; exported.
- [ProviderStatus](<../symbols/files/types/ai.ts.md#s-f0c8ee1b47b7c6b4>) — typescript-declaration; exported.
- [RegistryState](<../symbols/files/types/ai.ts.md#s-2e8b7c0211a0d8c5>) — typescript-declaration; exported.
- [ScopeSelection](<../symbols/files/types/ai.ts.md#s-9bed5990beb64a01>) — typescript-declaration; exported.
- [ChatRequest](<../symbols/files/types/ai.ts.md#s-b65846af22b827bc>) — typescript-declaration; exported.
- [ChatRun](<../symbols/files/types/ai.ts.md#s-7e88b00495a0d498>) — typescript-declaration; exported.
- [ChatResult](<../symbols/files/types/ai.ts.md#s-4a6807f210250f67>) — typescript-declaration; exported.
- [ChatEvent](<../symbols/files/types/ai.ts.md#s-ebb24d591ce21f44>) — typescript-declaration; exported.
- [ProviderUsageSnapshot](<../symbols/files/types/ai.ts.md#s-3b716dc64e9d971c>) — typescript-declaration; exported.
- [OpenRouterUsageSnapshot](<../symbols/files/types/ai.ts.md#s-b3fca13754a76d01>) — typescript-declaration; exported.
- [AiBridge](<../symbols/files/types/ai.ts.md#s-03f31b4f40138481>) — typescript-declaration; exported.
- [ProviderVerification](<../symbols/files/types/ai.ts.md#s-b25940ee6d4d5f7a>) — typescript-declaration; exported.
- [CredentialScope](<../symbols/files/types/ai.ts.md#s-30f39e44c2439c5c>) — typescript-declaration; exported.
- [ProviderConnection](<../symbols/files/types/ai.ts.md#s-72eeaaf697f8cabc>) — typescript-declaration; exported.
- [ProvidedModelPreview](<../symbols/files/types/ai.ts.md#s-04123d652bd8f0f7>) — typescript-declaration; exported.
- [ModelCheckResult](<../symbols/files/types/ai.ts.md#s-09d5209868e9067e>) — typescript-declaration; exported.
- [IdentitySource](<../symbols/files/types/backend-identity.ts.md#s-4d1c2a23af6fcb8a>) — typescript-declaration; exported.
- [IdentityChunk](<../symbols/files/types/backend-identity.ts.md#s-57f48bdacc7dfb96>) — typescript-declaration; exported.
- [IdentityCapability](<../symbols/files/types/backend-identity.ts.md#s-7409876be641d7e1>) — typescript-declaration; exported.
- [IdentityLogEntry](<../symbols/files/types/backend-identity.ts.md#s-1fcc0c365da66d26>) — typescript-declaration; exported.
- [IdentityConnection](<../symbols/files/types/backend-identity.ts.md#s-3f5cfa6204606a95>) — typescript-declaration; exported.
- [IdentityManifest](<../symbols/files/types/backend-identity.ts.md#s-aa91ba36f0e5be90>) — typescript-declaration; exported.
- [BackendIdentityState](<../symbols/files/types/backend-identity.ts.md#s-13d52ea672dc4e1d>) — typescript-declaration; exported.
- [IdentityChunkPage](<../symbols/files/types/backend-identity.ts.md#s-2dc474f1aa68f8ae>) — typescript-declaration; exported.
- [VaultEntry](<../symbols/files/types/electron.d.ts.md#s-e7fa56c6f824a06d>) — typescript-declaration; exported.
- [VaultSnapshot](<../symbols/files/types/electron.d.ts.md#s-2f53be0c4bcd1857>) — typescript-declaration; exported.
- [VaultIssue](<../symbols/files/types/electron.d.ts.md#s-345f7380a570d160>) — typescript-declaration; exported.
- [VaultFile](<../symbols/files/types/electron.d.ts.md#s-5ec4c24d4fdcb7df>) — typescript-declaration; exported.
- [VaultPdfFile](<../symbols/files/types/electron.d.ts.md#s-971f8fd54b765782>) — typescript-declaration; exported.
- [VaultSearchResult](<../symbols/files/types/electron.d.ts.md#s-e0357336d377d487>) — typescript-declaration; exported.
- [Station](<../symbols/files/types/electron.d.ts.md#s-732cb66f6918b14c>) — typescript-declaration; exported.
- [StationAssignment](<../symbols/files/types/electron.d.ts.md#s-fe486bdcaeb845bb>) — typescript-declaration; exported.
- [ActiveContextEntry](<../symbols/files/types/electron.d.ts.md#s-b71259046ea4cd34>) — typescript-declaration; exported.
- [StationState](<../symbols/files/types/electron.d.ts.md#s-d490c146e919d217>) — typescript-declaration; exported.
- [ContextPreview](<../symbols/files/types/electron.d.ts.md#s-92c886d761e0a6b9>) — typescript-declaration; exported.
- [ContextSource](<../symbols/files/types/electron.d.ts.md#s-e97615db9bfe753c>) — typescript-declaration; exported.
- [ContextPackage](<../symbols/files/types/electron.d.ts.md#s-741ec689b8aec57e>) — typescript-declaration; exported.
- [ReattachmentSuggestion](<../symbols/files/types/electron.d.ts.md#s-004b997eb8d40017>) — typescript-declaration; exported.
- [BrainScopeMode](<../symbols/files/types/electron.d.ts.md#s-fe7486b802703008>) — typescript-declaration; exported.
- [BrainErrorCode](<../symbols/files/types/electron.d.ts.md#s-8d0e7e3cc443bfcd>) — typescript-declaration; exported.
- [BrainScopeInput](<../symbols/files/types/electron.d.ts.md#s-b78bf12f1637afb8>) — typescript-declaration; exported.
- [BrainSourceReadInput](<../symbols/files/types/electron.d.ts.md#s-c1d4b63bb7ca64fe>) — typescript-declaration; exported.
- [BrainSource](<../symbols/files/types/electron.d.ts.md#s-f230963edadf1389>) — typescript-declaration; exported.
- [BrainScope](<../symbols/files/types/electron.d.ts.md#s-9c0e1129861861e6>) — typescript-declaration; exported.
- [BrainSourceContent](<../symbols/files/types/electron.d.ts.md#s-764b567db8c70d5e>) — typescript-declaration; exported.
- [BrainScopeClientError](<../symbols/files/types/electron.d.ts.md#s-32af3b457bd8f62a>) — typescript-declaration; exported.
- [Window](<../symbols/files/types/electron.d.ts.md#s-a6dfa74f6536d789>) — typescript-declaration; local schema/type.
- [EnginePackageCatalog](<../symbols/files/types/engine-packages.ts.md#s-52fd1e35be8f142b>) — typescript-declaration; exported.
- [AgentAssignment](<../symbols/files/types/entity-agents.ts.md#s-9cd095537abbe572>) — typescript-declaration; exported.
- [AssignmentContext](<../symbols/files/types/entity-agents.ts.md#s-cd9228441b9ac380>) — typescript-declaration; exported.
- [EngineDefinition](<../symbols/files/types/entity-agents.ts.md#s-42f74bf50c325a5b>) — typescript-declaration; exported.
- [AssignmentScope](<../symbols/files/types/entity-agents.ts.md#s-e74aa358a489962f>) — typescript-declaration; exported.
- [AgentEvidenceReference](<../symbols/files/types/entity-agents.ts.md#s-1ce660572bf34161>) — typescript-declaration; exported.
- [PriceEvidence](<../symbols/files/types/entity-agents.ts.md#s-f1172313c0034f4e>) — typescript-declaration; exported.
- [AgentToolRequest](<../symbols/files/types/entity-agents.ts.md#s-8e5654657624db12>) — typescript-declaration; exported.
- [EntityAgentState](<../symbols/files/types/entity-agents.ts.md#s-ba5f3917f89d7b06>) — typescript-declaration; exported.
- [EntityAgentBridge](<../symbols/files/types/entity-agents.ts.md#s-2bd2e209dad96d7a>) — typescript-declaration; exported.
- [EntityScopeContract](<../symbols/files/types/entity-scope.ts.md#s-bd758b5c07f77e29>) — typescript-declaration; exported.
- [FinancialEvidence](<../symbols/files/types/entity-scope.ts.md#s-51cdbe0d98e2c06c>) — typescript-declaration; exported.
- [BaselineCallPhase](<../symbols/files/types/front-office.ts.md#s-a064484de70b0f4e>) — typescript-declaration; exported.
- [BaselineCall](<../symbols/files/types/front-office.ts.md#s-ca1ef3640e002139>) — typescript-declaration; exported.
- [BaselineTrace](<../symbols/files/types/front-office.ts.md#s-443e5faa2a971bcd>) — typescript-declaration; exported.
- [MetadataSource](<../symbols/files/types/front-office.ts.md#s-4792acdf12c0d2be>) — typescript-declaration; exported.
- [ExperimentConfig](<../symbols/files/types/front-office.ts.md#s-264ca6a16295a13e>) — typescript-declaration; exported.
- [ReliabilityEvidence](<../symbols/files/types/front-office.ts.md#s-f3847a52cccc1b67>) — typescript-declaration; exported.
- [ModelProfile](<../symbols/files/types/front-office.ts.md#s-9f2b629462b9b9c6>) — typescript-declaration; exported.
- [ExperimentConversation](<../symbols/files/types/front-office.ts.md#s-f05e251fa18e224e>) — typescript-declaration; exported.
- [FrontOfficeState](<../symbols/files/types/front-office.ts.md#s-920373899ff254f3>) — typescript-declaration; exported.
- [ExperimentEvent](<../symbols/files/types/front-office.ts.md#s-422aa0234ddd0c7a>) — typescript-declaration; exported.
- [ExperimentResult](<../symbols/files/types/front-office.ts.md#s-81925523b516135a>) — typescript-declaration; exported.
- [ExperimentTask](<../symbols/files/types/front-office.ts.md#s-0caa72f2546f1d25>) — typescript-declaration; exported.
- [NormalizedChatRequest](<../symbols/files/types/front-office.ts.md#s-01141f50880128c3>) — typescript-declaration; exported.
- [TaskRequirements](<../symbols/files/types/front-office.ts.md#s-3d0bc99da1818f6c>) — typescript-declaration; exported.
- [BudgetDecision](<../symbols/files/types/front-office.ts.md#s-7363ae216c65f36a>) — typescript-declaration; exported.
- [RoutingCandidate](<../symbols/files/types/front-office.ts.md#s-242d0d960b29ae79>) — typescript-declaration; exported.
- [RoutingPlan](<../symbols/files/types/front-office.ts.md#s-a51a2ba3b22d89b0>) — typescript-declaration; exported.
- [LLMResponse](<../symbols/files/types/front-office.ts.md#s-da7580f3b672f305>) — typescript-declaration; exported.
- [LLMRequest](<../symbols/files/types/front-office.ts.md#s-eaf02be8eac249a4>) — typescript-declaration; exported.
- [LLMClient](<../symbols/files/types/front-office.ts.md#s-d5238236b54f947c>) — typescript-declaration; exported.
- [RequestStageName](<../symbols/files/types/front-office.ts.md#s-ee77e7034d6490ec>) — typescript-declaration; exported.
- [RequestStage](<../symbols/files/types/front-office.ts.md#s-52a778d0fdf131d5>) — typescript-declaration; exported.
- [WorldViewSource](<../symbols/files/types/worldview.ts.md#s-fd6c18f16844ae43>) — typescript-declaration; exported.
- [WorldViewState](<../symbols/files/types/worldview.ts.md#s-9bf9066d688951cd>) — typescript-declaration; exported.
- [UniverseEntry](<../symbols/files/types/worldview.ts.md#s-d9b233e4d5232411>) — typescript-declaration; exported.
- [UniverseListing](<../symbols/files/types/worldview.ts.md#s-0a3b919df9182e13>) — typescript-declaration; exported.
- [WorldViewOperation](<../symbols/files/types/worldview.ts.md#s-6854f2a83cb58d60>) — typescript-declaration; exported.
- [WorldViewRequest](<../symbols/files/types/worldview.ts.md#s-f5b12a95902deb76>) — typescript-declaration; exported.
- [WorldTagSearchResult](<../symbols/files/types/worldview.ts.md#s-c935416bb9c57909>) — typescript-declaration; exported.
- [WorldTagSearchResponse](<../symbols/files/types/worldview.ts.md#s-80f74e55daee9ccf>) — typescript-declaration; exported.
- [IndexedKnowledgeMenu](<../symbols/files/types/worldview.ts.md#s-5524a4061d71be3c>) — typescript-declaration; exported.
- [IndexedPriceSource](<../symbols/files/types/worldview.ts.md#s-b86489f0c1d69e32>) — typescript-declaration; exported.
- [IndexedFinanceSource](<../symbols/files/types/worldview.ts.md#s-ce65a90339108413>) — typescript-declaration; exported.
- [FinancialSnapshot](<../symbols/files/types/worldview.ts.md#s-6c71238f0ff8c25c>) — typescript-declaration; exported.
- [FinancialResponse](<../symbols/files/types/worldview.ts.md#s-3feafe7f8e755115>) — typescript-declaration; exported.
- [KnowledgeCarousel](<../symbols/files/types/worldview.ts.md#s-105b5fde2b3b09fe>) — typescript-declaration; exported.
- [CarouselObservation](<../symbols/files/types/worldview.ts.md#s-a8b13a6301d0ae11>) — typescript-declaration; exported.
- [ImageKnowledgeResult](<../symbols/files/types/worldview.ts.md#s-81c9097a6afcb2ea>) — typescript-declaration; exported.
- [ImageParseJob](<../symbols/files/types/worldview.ts.md#s-df10a522399561b0>) — typescript-declaration; exported.
- [IndexValidation](<../symbols/files/types/worldview.ts.md#s-2fa48bba2d96da48>) — typescript-declaration; exported.
- [KnowledgeIndexState](<../symbols/files/types/worldview.ts.md#s-49327a9b59357064>) — typescript-declaration; exported.
- [DailyPriceResponse](<../symbols/files/types/worldview.ts.md#s-1915b9e77edea1a8>) — typescript-declaration; exported.
- [MarketHistoryResponse](<../symbols/files/types/worldview.ts.md#s-0f332e94c6e5fdda>) — typescript-declaration; exported.
- [KnowledgeIndexSave](<../symbols/files/types/worldview.ts.md#s-ad926f804294df1a>) — typescript-declaration; exported.
- [PreviewMetadata](<../symbols/files/types/worldview.ts.md#s-a7db14037a5ab2d1>) — typescript-declaration; local schema/type.
- [ExcelSourcePreview](<../symbols/files/types/worldview.ts.md#s-f489700739fde3a2>) — typescript-declaration; exported.
- [KnowledgeSourcePreview](<../symbols/files/types/worldview.ts.md#s-9bb384ef0ce4238c>) — typescript-declaration; exported.
- [WorldViewBridge](<../symbols/files/types/worldview.ts.md#s-d07368615aba6e20>) — typescript-declaration; exported.

## Source inventory

| File | Role | Declarations |
| --- | --- | --- |
| [types/ai.ts:1](<../../../types/ai.ts#L1>) | declaration | 143 |
| [types/backend-identity.ts:1](<../../../types/backend-identity.ts#L1>) | declaration | 8 |
| [types/electron.d.ts:1](<../../../types/electron.d.ts#L1>) | declaration | 37 |
| [types/engine-packages.ts:1](<../../../types/engine-packages.ts#L1>) | declaration | 1 |
| [types/entity-agents.ts:1](<../../../types/entity-agents.ts#L1>) | declaration | 20 |
| [types/entity-scope.ts:1](<../../../types/entity-scope.ts#L1>) | declaration | 2 |
| [types/front-office.ts:1](<../../../types/front-office.ts#L1>) | declaration | 26 |
| [types/pdfjs-dist.d.ts:1](<../../../types/pdfjs-dist.d.ts#L1>) | declaration | 0 |
| [types/worldview.ts:1](<../../../types/worldview.ts#L1>) | declaration | 27 |
