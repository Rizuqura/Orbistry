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
| [AgentConstructionInput](<../symbols/files/types/ai.ts.md#s-242448fc17ab17c4>) | [types/ai.ts:316](<../../../types/ai.ts#L316>) | TypeAliasDeclaration |
| [AgentAppearanceOptions](<../symbols/files/types/ai.ts.md#s-56b49edd0459be1c>) | [types/ai.ts:326](<../../../types/ai.ts#L326>) | TypeAliasDeclaration |
| [AgentAppearance](<../symbols/files/types/ai.ts.md#s-244d27dba13bfc1c>) | [types/ai.ts:331](<../../../types/ai.ts#L331>) | TypeAliasDeclaration |
| [AgentConfig](<../symbols/files/types/ai.ts.md#s-b84fc6813b118bd2>) | [types/ai.ts:337](<../../../types/ai.ts#L337>) | TypeAliasDeclaration |
| [RuntimeStatus](<../symbols/files/types/ai.ts.md#s-a29e78620c60bc72>) | [types/ai.ts:373](<../../../types/ai.ts#L373>) | TypeAliasDeclaration |
| [ModelPullStatus](<../symbols/files/types/ai.ts.md#s-6b59e64e8fff86d7>) | [types/ai.ts:379](<../../../types/ai.ts#L379>) | TypeAliasDeclaration |
| [ChatState](<../symbols/files/types/ai.ts.md#s-2095c2e0d7934e6b>) | [types/ai.ts:384](<../../../types/ai.ts#L384>) | TypeAliasDeclaration |
| [ModelSettings](<../symbols/files/types/ai.ts.md#s-5dadaff5874cf530>) | [types/ai.ts:407](<../../../types/ai.ts#L407>) | TypeAliasDeclaration |
| [ModelDescriptor](<../symbols/files/types/ai.ts.md#s-21e30963aad22e77>) | [types/ai.ts:420](<../../../types/ai.ts#L420>) | TypeAliasDeclaration |
| [ProviderStatus](<../symbols/files/types/ai.ts.md#s-78b3ce1227ee5bbb>) | [types/ai.ts:438](<../../../types/ai.ts#L438>) | TypeAliasDeclaration |
| [RegistryState](<../symbols/files/types/ai.ts.md#s-97b7c51534cbb4ed>) | [types/ai.ts:447](<../../../types/ai.ts#L447>) | TypeAliasDeclaration |
| [ScopeSelection](<../symbols/files/types/ai.ts.md#s-6b8a4984864ded7f>) | [types/ai.ts:454](<../../../types/ai.ts#L454>) | TypeAliasDeclaration |
| [ChatRequest](<../symbols/files/types/ai.ts.md#s-4f8c9f5ab7afb732>) | [types/ai.ts:458](<../../../types/ai.ts#L458>) | TypeAliasDeclaration |
| [ChatRun](<../symbols/files/types/ai.ts.md#s-da60a1b7966fb6a0>) | [types/ai.ts:465](<../../../types/ai.ts#L465>) | TypeAliasDeclaration |
| [ChatResult](<../symbols/files/types/ai.ts.md#s-de4145961eaf5c4a>) | [types/ai.ts:474](<../../../types/ai.ts#L474>) | TypeAliasDeclaration |
| [ChatEvent](<../symbols/files/types/ai.ts.md#s-4a6807f210250f67>) | [types/ai.ts:475](<../../../types/ai.ts#L475>) | TypeAliasDeclaration |
| [ProviderUsageSnapshot](<../symbols/files/types/ai.ts.md#s-d153d9883d24b49f>) | [types/ai.ts:486](<../../../types/ai.ts#L486>) | InterfaceDeclaration |
| [OpenRouterUsageSnapshot](<../symbols/files/types/ai.ts.md#s-af7aafdf4801596f>) | [types/ai.ts:512](<../../../types/ai.ts#L512>) | TypeAliasDeclaration |
| [AiBridge](<../symbols/files/types/ai.ts.md#s-12ce5222eeb8af3a>) | [types/ai.ts:516](<../../../types/ai.ts#L516>) | InterfaceDeclaration |
| [ProviderVerification](<../symbols/files/types/ai.ts.md#s-194806ed7a9630cd>) | [types/ai.ts:682](<../../../types/ai.ts#L682>) | TypeAliasDeclaration |
| [CredentialScope](<../symbols/files/types/ai.ts.md#s-3746f3ad068df01b>) | [types/ai.ts:689](<../../../types/ai.ts#L689>) | TypeAliasDeclaration |
| [ProviderConnection](<../symbols/files/types/ai.ts.md#s-39fc7aab9c8fd197>) | [types/ai.ts:691](<../../../types/ai.ts#L691>) | TypeAliasDeclaration |
| [ProvidedModelPreview](<../symbols/files/types/ai.ts.md#s-971e43147c7f6a25>) | [types/ai.ts:699](<../../../types/ai.ts#L699>) | TypeAliasDeclaration |
| [ModelCheckResult](<../symbols/files/types/ai.ts.md#s-7546247c5a03d92f>) | [types/ai.ts:712](<../../../types/ai.ts#L712>) | TypeAliasDeclaration |
| [IdentitySource](<../symbols/files/types/backend-identity.ts.md#s-4d1c2a23af6fcb8a>) | [types/backend-identity.ts:1](<../../../types/backend-identity.ts#L1>) | TypeAliasDeclaration |
| [IdentityChunk](<../symbols/files/types/backend-identity.ts.md#s-57f48bdacc7dfb96>) | [types/backend-identity.ts:14](<../../../types/backend-identity.ts#L14>) | TypeAliasDeclaration |
| [IdentityCapability](<../symbols/files/types/backend-identity.ts.md#s-7409876be641d7e1>) | [types/backend-identity.ts:30](<../../../types/backend-identity.ts#L30>) | TypeAliasDeclaration |
| [IdentityLogEntry](<../symbols/files/types/backend-identity.ts.md#s-1fcc0c365da66d26>) | [types/backend-identity.ts:46](<../../../types/backend-identity.ts#L46>) | TypeAliasDeclaration |
| [IdentityConnection](<../symbols/files/types/backend-identity.ts.md#s-3f5cfa6204606a95>) | [types/backend-identity.ts:52](<../../../types/backend-identity.ts#L52>) | TypeAliasDeclaration |
| [IdentityManifest](<../symbols/files/types/backend-identity.ts.md#s-aa91ba36f0e5be90>) | [types/backend-identity.ts:64](<../../../types/backend-identity.ts#L64>) | TypeAliasDeclaration |
| [BackendIdentityState](<../symbols/files/types/backend-identity.ts.md#s-33fd1adfdfac41f1>) | [types/backend-identity.ts:110](<../../../types/backend-identity.ts#L110>) | TypeAliasDeclaration |
| [IdentityChunkPage](<../symbols/files/types/backend-identity.ts.md#s-09fc2b5745fc6542>) | [types/backend-identity.ts:122](<../../../types/backend-identity.ts#L122>) | TypeAliasDeclaration |
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
| [AssignmentScope](<../symbols/files/types/entity-agents.ts.md#s-a8f29ad94ad7984a>) | [types/entity-agents.ts:40](<../../../types/entity-agents.ts#L40>) | TypeAliasDeclaration |
| [AgentEvidenceReference](<../symbols/files/types/entity-agents.ts.md#s-81e3479276694ba9>) | [types/entity-agents.ts:42](<../../../types/entity-agents.ts#L42>) | TypeAliasDeclaration |
| [PriceEvidence](<../symbols/files/types/entity-agents.ts.md#s-dc4e85d8f7967b77>) | [types/entity-agents.ts:54](<../../../types/entity-agents.ts#L54>) | TypeAliasDeclaration |
| [AgentToolRequest](<../symbols/files/types/entity-agents.ts.md#s-846f6645c399ce9d>) | [types/entity-agents.ts:76](<../../../types/entity-agents.ts#L76>) | TypeAliasDeclaration |
| [EntityAgentState](<../symbols/files/types/entity-agents.ts.md#s-9d03ec0a2b78223d>) | [types/entity-agents.ts:109](<../../../types/entity-agents.ts#L109>) | TypeAliasDeclaration |
| [EntityAgentBridge](<../symbols/files/types/entity-agents.ts.md#s-426353399ca8348c>) | [types/entity-agents.ts:212](<../../../types/entity-agents.ts#L212>) | InterfaceDeclaration |
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
| [WorldViewRequest](<../symbols/files/types/worldview.ts.md#s-f4657cfa80228b24>) | [types/worldview.ts:75](<../../../types/worldview.ts#L75>) | TypeAliasDeclaration |
| [WorldTagSearchResult](<../symbols/files/types/worldview.ts.md#s-7ad4e18e80c8946b>) | [types/worldview.ts:107](<../../../types/worldview.ts#L107>) | TypeAliasDeclaration |
| [WorldTagSearchResponse](<../symbols/files/types/worldview.ts.md#s-31765735a8dd6464>) | [types/worldview.ts:118](<../../../types/worldview.ts#L118>) | TypeAliasDeclaration |
| [IndexedKnowledgeMenu](<../symbols/files/types/worldview.ts.md#s-9b8d717554791614>) | [types/worldview.ts:135](<../../../types/worldview.ts#L135>) | TypeAliasDeclaration |
| [IndexedPriceSource](<../symbols/files/types/worldview.ts.md#s-2f243fdf772fe1df>) | [types/worldview.ts:144](<../../../types/worldview.ts#L144>) | TypeAliasDeclaration |
| [IndexedFinanceSource](<../symbols/files/types/worldview.ts.md#s-e8062bbfa0844875>) | [types/worldview.ts:149](<../../../types/worldview.ts#L149>) | TypeAliasDeclaration |
| [FinancialSnapshot](<../symbols/files/types/worldview.ts.md#s-756bc0067a864c68>) | [types/worldview.ts:155](<../../../types/worldview.ts#L155>) | TypeAliasDeclaration |
| [FinancialResponse](<../symbols/files/types/worldview.ts.md#s-4a9f56ce6334a279>) | [types/worldview.ts:186](<../../../types/worldview.ts#L186>) | TypeAliasDeclaration |
| [KnowledgeCarousel](<../symbols/files/types/worldview.ts.md#s-d103a6a025d3cbe2>) | [types/worldview.ts:192](<../../../types/worldview.ts#L192>) | TypeAliasDeclaration |
| [CarouselObservation](<../symbols/files/types/worldview.ts.md#s-0458bbb14878b6a3>) | [types/worldview.ts:200](<../../../types/worldview.ts#L200>) | TypeAliasDeclaration |
| [ImageKnowledgeResult](<../symbols/files/types/worldview.ts.md#s-59850c58875c6d4f>) | [types/worldview.ts:208](<../../../types/worldview.ts#L208>) | TypeAliasDeclaration |
| [ImageParseJob](<../symbols/files/types/worldview.ts.md#s-c9912a41020749de>) | [types/worldview.ts:239](<../../../types/worldview.ts#L239>) | TypeAliasDeclaration |
| [IndexValidation](<../symbols/files/types/worldview.ts.md#s-202103782fd5fe1e>) | [types/worldview.ts:251](<../../../types/worldview.ts#L251>) | TypeAliasDeclaration |
| [KnowledgeIndexState](<../symbols/files/types/worldview.ts.md#s-67a5861fe4bb3a78>) | [types/worldview.ts:255](<../../../types/worldview.ts#L255>) | TypeAliasDeclaration |
| [DailyPriceResponse](<../symbols/files/types/worldview.ts.md#s-d2ad2fa2a444e962>) | [types/worldview.ts:263](<../../../types/worldview.ts#L263>) | TypeAliasDeclaration |
| [MarketHistoryResponse](<../symbols/files/types/worldview.ts.md#s-03edbc994621926a>) | [types/worldview.ts:289](<../../../types/worldview.ts#L289>) | TypeAliasDeclaration |
| [KnowledgeIndexSave](<../symbols/files/types/worldview.ts.md#s-a26f8fbb8c0f81cc>) | [types/worldview.ts:316](<../../../types/worldview.ts#L316>) | TypeAliasDeclaration |
| [ExcelSourcePreview](<../symbols/files/types/worldview.ts.md#s-719c00db0849a3c5>) | [types/worldview.ts:324](<../../../types/worldview.ts#L324>) | TypeAliasDeclaration |
| [KnowledgeSourcePreview](<../symbols/files/types/worldview.ts.md#s-5a1c7d51d04acdb2>) | [types/worldview.ts:359](<../../../types/worldview.ts#L359>) | TypeAliasDeclaration |
| [WorldViewBridge](<../symbols/files/types/worldview.ts.md#s-2660ae5b1fd935a5>) | [types/worldview.ts:367](<../../../types/worldview.ts#L367>) | TypeAliasDeclaration |

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
- [AgentConstructionInput](<../symbols/files/types/ai.ts.md#s-242448fc17ab17c4>) — typescript-declaration; exported.
- [AgentAppearanceOptions](<../symbols/files/types/ai.ts.md#s-56b49edd0459be1c>) — typescript-declaration; exported.
- [AgentAppearance](<../symbols/files/types/ai.ts.md#s-244d27dba13bfc1c>) — typescript-declaration; exported.
- [AgentConfig](<../symbols/files/types/ai.ts.md#s-b84fc6813b118bd2>) — typescript-declaration; exported.
- [RuntimeStatus](<../symbols/files/types/ai.ts.md#s-a29e78620c60bc72>) — typescript-declaration; exported.
- [ModelPullStatus](<../symbols/files/types/ai.ts.md#s-6b59e64e8fff86d7>) — typescript-declaration; exported.
- [ChatState](<../symbols/files/types/ai.ts.md#s-2095c2e0d7934e6b>) — typescript-declaration; exported.
- [ModelSettings](<../symbols/files/types/ai.ts.md#s-5dadaff5874cf530>) — typescript-declaration; exported.
- [ModelDescriptor](<../symbols/files/types/ai.ts.md#s-21e30963aad22e77>) — typescript-declaration; exported.
- [ProviderStatus](<../symbols/files/types/ai.ts.md#s-78b3ce1227ee5bbb>) — typescript-declaration; exported.
- [RegistryState](<../symbols/files/types/ai.ts.md#s-97b7c51534cbb4ed>) — typescript-declaration; exported.
- [ScopeSelection](<../symbols/files/types/ai.ts.md#s-6b8a4984864ded7f>) — typescript-declaration; exported.
- [ChatRequest](<../symbols/files/types/ai.ts.md#s-4f8c9f5ab7afb732>) — typescript-declaration; exported.
- [ChatRun](<../symbols/files/types/ai.ts.md#s-da60a1b7966fb6a0>) — typescript-declaration; exported.
- [ChatResult](<../symbols/files/types/ai.ts.md#s-de4145961eaf5c4a>) — typescript-declaration; exported.
- [ChatEvent](<../symbols/files/types/ai.ts.md#s-4a6807f210250f67>) — typescript-declaration; exported.
- [ProviderUsageSnapshot](<../symbols/files/types/ai.ts.md#s-d153d9883d24b49f>) — typescript-declaration; exported.
- [OpenRouterUsageSnapshot](<../symbols/files/types/ai.ts.md#s-af7aafdf4801596f>) — typescript-declaration; exported.
- [AiBridge](<../symbols/files/types/ai.ts.md#s-12ce5222eeb8af3a>) — typescript-declaration; exported.
- [ProviderVerification](<../symbols/files/types/ai.ts.md#s-194806ed7a9630cd>) — typescript-declaration; exported.
- [CredentialScope](<../symbols/files/types/ai.ts.md#s-3746f3ad068df01b>) — typescript-declaration; exported.
- [ProviderConnection](<../symbols/files/types/ai.ts.md#s-39fc7aab9c8fd197>) — typescript-declaration; exported.
- [ProvidedModelPreview](<../symbols/files/types/ai.ts.md#s-971e43147c7f6a25>) — typescript-declaration; exported.
- [ModelCheckResult](<../symbols/files/types/ai.ts.md#s-7546247c5a03d92f>) — typescript-declaration; exported.
- [IdentitySource](<../symbols/files/types/backend-identity.ts.md#s-4d1c2a23af6fcb8a>) — typescript-declaration; exported.
- [IdentityChunk](<../symbols/files/types/backend-identity.ts.md#s-57f48bdacc7dfb96>) — typescript-declaration; exported.
- [IdentityCapability](<../symbols/files/types/backend-identity.ts.md#s-7409876be641d7e1>) — typescript-declaration; exported.
- [IdentityLogEntry](<../symbols/files/types/backend-identity.ts.md#s-1fcc0c365da66d26>) — typescript-declaration; exported.
- [IdentityConnection](<../symbols/files/types/backend-identity.ts.md#s-3f5cfa6204606a95>) — typescript-declaration; exported.
- [IdentityManifest](<../symbols/files/types/backend-identity.ts.md#s-aa91ba36f0e5be90>) — typescript-declaration; exported.
- [BackendIdentityState](<../symbols/files/types/backend-identity.ts.md#s-33fd1adfdfac41f1>) — typescript-declaration; exported.
- [IdentityChunkPage](<../symbols/files/types/backend-identity.ts.md#s-09fc2b5745fc6542>) — typescript-declaration; exported.
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
- [AssignmentScope](<../symbols/files/types/entity-agents.ts.md#s-a8f29ad94ad7984a>) — typescript-declaration; exported.
- [AgentEvidenceReference](<../symbols/files/types/entity-agents.ts.md#s-81e3479276694ba9>) — typescript-declaration; exported.
- [PriceEvidence](<../symbols/files/types/entity-agents.ts.md#s-dc4e85d8f7967b77>) — typescript-declaration; exported.
- [AgentToolRequest](<../symbols/files/types/entity-agents.ts.md#s-846f6645c399ce9d>) — typescript-declaration; exported.
- [EntityAgentState](<../symbols/files/types/entity-agents.ts.md#s-9d03ec0a2b78223d>) — typescript-declaration; exported.
- [EntityAgentBridge](<../symbols/files/types/entity-agents.ts.md#s-426353399ca8348c>) — typescript-declaration; exported.
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
- [WorldViewRequest](<../symbols/files/types/worldview.ts.md#s-f4657cfa80228b24>) — typescript-declaration; exported.
- [WorldTagSearchResult](<../symbols/files/types/worldview.ts.md#s-7ad4e18e80c8946b>) — typescript-declaration; exported.
- [WorldTagSearchResponse](<../symbols/files/types/worldview.ts.md#s-31765735a8dd6464>) — typescript-declaration; exported.
- [IndexedKnowledgeMenu](<../symbols/files/types/worldview.ts.md#s-9b8d717554791614>) — typescript-declaration; exported.
- [IndexedPriceSource](<../symbols/files/types/worldview.ts.md#s-2f243fdf772fe1df>) — typescript-declaration; exported.
- [IndexedFinanceSource](<../symbols/files/types/worldview.ts.md#s-e8062bbfa0844875>) — typescript-declaration; exported.
- [FinancialSnapshot](<../symbols/files/types/worldview.ts.md#s-756bc0067a864c68>) — typescript-declaration; exported.
- [FinancialResponse](<../symbols/files/types/worldview.ts.md#s-4a9f56ce6334a279>) — typescript-declaration; exported.
- [KnowledgeCarousel](<../symbols/files/types/worldview.ts.md#s-d103a6a025d3cbe2>) — typescript-declaration; exported.
- [CarouselObservation](<../symbols/files/types/worldview.ts.md#s-0458bbb14878b6a3>) — typescript-declaration; exported.
- [ImageKnowledgeResult](<../symbols/files/types/worldview.ts.md#s-59850c58875c6d4f>) — typescript-declaration; exported.
- [ImageParseJob](<../symbols/files/types/worldview.ts.md#s-c9912a41020749de>) — typescript-declaration; exported.
- [IndexValidation](<../symbols/files/types/worldview.ts.md#s-202103782fd5fe1e>) — typescript-declaration; exported.
- [KnowledgeIndexState](<../symbols/files/types/worldview.ts.md#s-67a5861fe4bb3a78>) — typescript-declaration; exported.
- [DailyPriceResponse](<../symbols/files/types/worldview.ts.md#s-d2ad2fa2a444e962>) — typescript-declaration; exported.
- [MarketHistoryResponse](<../symbols/files/types/worldview.ts.md#s-03edbc994621926a>) — typescript-declaration; exported.
- [KnowledgeIndexSave](<../symbols/files/types/worldview.ts.md#s-a26f8fbb8c0f81cc>) — typescript-declaration; exported.
- [PreviewMetadata](<../symbols/files/types/worldview.ts.md#s-d4e0b92223cc2c91>) — typescript-declaration; local schema/type.
- [ExcelSourcePreview](<../symbols/files/types/worldview.ts.md#s-719c00db0849a3c5>) — typescript-declaration; exported.
- [KnowledgeSourcePreview](<../symbols/files/types/worldview.ts.md#s-5a1c7d51d04acdb2>) — typescript-declaration; exported.
- [WorldViewBridge](<../symbols/files/types/worldview.ts.md#s-2660ae5b1fd935a5>) — typescript-declaration; exported.

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
