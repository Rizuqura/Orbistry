# electron/preload.cjs: symbols

[Atlas](<../../../README.md>) / [Electron composition and IPC security](<../../../modules/desktop.md>) / [electron/preload.cjs:1](<../../../../../electron/preload.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>) (Module)
- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) (FunctionDeclaration)
- [getSnapshot](<preload.cjs.md#s-097ee40a6af39d3e>) (ArrowFunction)
- [rescan](<preload.cjs.md#s-0254a521c34bfae8>) (ArrowFunction)
- [selectFolder](<preload.cjs.md#s-80a9704cf09287cd>) (ArrowFunction)
- [read](<preload.cjs.md#s-8f321cd7e4137107>) (ArrowFunction)
- [saveMarkdown](<preload.cjs.md#s-d4d29a2864c34bc2>) (ArrowFunction)
- [readPdf](<preload.cjs.md#s-d3bdfdff874fdc49>) (ArrowFunction)
- [search](<preload.cjs.md#s-19d0c6fd258f160e>) (ArrowFunction)
- [request](<preload.cjs.md#s-bd772dc088a23dfe>) (ArrowFunction)
- [getState](<preload.cjs.md#s-6d9eb6d3d3632905>) (ArrowFunction)
- [create](<preload.cjs.md#s-11e84739d0d16d15>) (ArrowFunction)
- [rename](<preload.cjs.md#s-09fb0575ad376c83>) (ArrowFunction)
- [delete](<preload.cjs.md#s-d222325500392b73>) (ArrowFunction)
- [setAssignments](<preload.cjs.md#s-ada58f8b5f9453ed>) (ArrowFunction)
- [suggestions](<preload.cjs.md#s-5cbf8308467a090c>) (ArrowFunction)
- [reattach](<preload.cjs.md#s-526fad37fb32712c>) (ArrowFunction)
- [deleteAgent](<preload.cjs.md#s-a8d3a40fd5cf21c2>) (ArrowFunction)
- [clearEntityAgentChat](<preload.cjs.md#s-d7a2d212f13065de>) (ArrowFunction)
- [engineDefinitions](<preload.cjs.md#s-cd796039c90a29b8>) (ArrowFunction)
- [enginePackageCatalog](<preload.cjs.md#s-87ee5e0f428dab4c>) (ArrowFunction)
- [listEntityAgents](<preload.cjs.md#s-1786b91eb433ede7>) (ArrowFunction)
- [assignEntityAgent](<preload.cjs.md#s-450f0ef91d16573c>) (ArrowFunction)
- [removeEntityAgent](<preload.cjs.md#s-99c1df7f495428fc>) (ArrowFunction)
- [openEntityAgent](<preload.cjs.md#s-3b36f6c195a90b10>) (ArrowFunction)
- [retrieveEntityAgentKnowledge](<preload.cjs.md#s-cd23168aad6afc01>) (ArrowFunction)
- [sendEntityAgent](<preload.cjs.md#s-5bb1db9dc87b285e>) (ArrowFunction)
- [executeEntityAgent](<preload.cjs.md#s-dbafd5e5a02a38d8>) (ArrowFunction)
- [proposeEntityAgent](<preload.cjs.md#s-3763771a70c1bc3f>) (ArrowFunction)
- [decideEntityAgentRequest](<preload.cjs.md#s-90f53589f7a87568>) (ArrowFunction)
- [engineState](<preload.cjs.md#s-4152e551f6866a15>) (ArrowFunction)
- [chooseEngineFolder](<preload.cjs.md#s-eb1aedea7bad502a>) (ArrowFunction)
- [probeEngine](<preload.cjs.md#s-de93f71fedd60865>) (ArrowFunction)
- [executeEngine](<preload.cjs.md#s-f9b67752f5136258>) (ArrowFunction)
- [cancelEngine](<preload.cjs.md#s-6a3127b96542cdf6>) (ArrowFunction)
- [openEngineReport](<preload.cjs.md#s-fe1b40e0fd007c28>) (ArrowFunction)
- [connectCredential](<preload.cjs.md#s-d92b75ee01fa5ad4>) (ArrowFunction)
- [providedModels](<preload.cjs.md#s-20a2a5434cb3f7ff>) (ArrowFunction)
- [modelFavorites](<preload.cjs.md#s-fd94cda73d5ed3a7>) (ArrowFunction)
- [frontOfficeState](<preload.cjs.md#s-eeea8521212c7ad0>) (ArrowFunction)
- [frontOfficeConfig](<preload.cjs.md#s-573e2d92c6f17c18>) (ArrowFunction)
- [frontOfficeRefresh](<preload.cjs.md#s-5e9ac333e354a9ae>) (ArrowFunction)
- [frontOfficeOverride](<preload.cjs.md#s-1ddd2dab85814ba6>) (ArrowFunction)
- [frontOfficeEvidence](<preload.cjs.md#s-0e0710cc47ebc2a1>) (ArrowFunction)
- [frontOfficeFavorite](<preload.cjs.md#s-c04af7df8199db75>) (ArrowFunction)
- [frontOfficeHealth](<preload.cjs.md#s-74711f9e03dab405>) (ArrowFunction)
- [frontOfficeList](<preload.cjs.md#s-98a31dad8d9f200a>) (ArrowFunction)
- [frontOfficeRead](<preload.cjs.md#s-93fda9f315c76277>) (ArrowFunction)
- [frontOfficeCreate](<preload.cjs.md#s-c67f5149ab93ae3c>) (ArrowFunction)
- [frontOfficeDelete](<preload.cjs.md#s-bc6f7aff7e71a8c2>) (ArrowFunction)
- [frontOfficeExport](<preload.cjs.md#s-3bbe96423bda6a41>) (ArrowFunction)
- [frontOfficeChat](<preload.cjs.md#s-976f248fac148e85>) (ArrowFunction)
- [onFrontOfficeEvent](<preload.cjs.md#s-db712c8f063f2fbd>) (ArrowFunction)
- [onFrontOfficeEvent.listener](<preload.cjs.md#s-d7beef4365453cef>) (ArrowFunction)
- [onFrontOfficeEvent.&lt;anonymous@145:14&gt;](<preload.cjs.md#s-75b251d961ab3219>) (ArrowFunction)
- [providerUsage](<preload.cjs.md#s-1770d4556dba92b8>) (ArrowFunction)
- [openRouterUsage](<preload.cjs.md#s-d3d9813b1fcd5417>) (ArrowFunction)
- [onUsageChanged](<preload.cjs.md#s-fb0dbd2b8742061b>) (ArrowFunction)
- [onUsageChanged.listener](<preload.cjs.md#s-756c50cef8d886b0>) (ArrowFunction)
- [onUsageChanged.&lt;anonymous@152:14&gt;](<preload.cjs.md#s-ef6970f260b29584>) (ArrowFunction)
- [getAgent](<preload.cjs.md#s-a5ef30a7d7b0d423>) (ArrowFunction)
- [listAgents](<preload.cjs.md#s-dee15a64f1aae54c>) (ArrowFunction)
- [createAgent](<preload.cjs.md#s-65fa5f5b33bbfb49>) (ArrowFunction)
- [getVaultIdentity](<preload.cjs.md#s-c0a48cc86a801054>) (ArrowFunction)
- [saveAgentConstruction](<preload.cjs.md#s-05ffb78c85d5f754>) (ArrowFunction)
- [previewConstructionBox](<preload.cjs.md#s-dd01a30bf3b78489>) (ArrowFunction)
- [listConstructionFiles](<preload.cjs.md#s-5b12711255f597a8>) (ArrowFunction)
- [previewConstructionFile](<preload.cjs.md#s-68bdfcfd57b43f1c>) (ArrowFunction)
- [proposeKnowledge](<preload.cjs.md#s-8244edc13d93f3a6>) (ArrowFunction)
- [retrieveKnowledge](<preload.cjs.md#s-359af2c22c099a44>) (ArrowFunction)
- [saveAgent](<preload.cjs.md#s-d8b7f6facd957cd5>) (ArrowFunction)
- [chooseAgentAvatar](<preload.cjs.md#s-2bf2c53bf9968373>) (ArrowFunction)
- [chooseAgentBackdrop](<preload.cjs.md#s-9d6922c1cb1cff52>) (ArrowFunction)
- [previewBoxSelection](<preload.cjs.md#s-03a062e069a2f5f5>) (ArrowFunction)
- [inspectContextBox](<preload.cjs.md#s-f18685333cdb2231>) (ArrowFunction)
- [editContextBox](<preload.cjs.md#s-c9da628b339eeeef>) (ArrowFunction)
- [switchContextBox](<preload.cjs.md#s-4b1454efaf8cd92b>) (ArrowFunction)
- [listContextBoxes](<preload.cjs.md#s-2b79bd7c6a42ac4a>) (ArrowFunction)
- [saveContextBox](<preload.cjs.md#s-fe67338ecc567809>) (ArrowFunction)
- [renameContextBox](<preload.cjs.md#s-1002221dfe00ed95>) (ArrowFunction)
- [checkConversation](<preload.cjs.md#s-d22c45a928d4e8e9>) (ArrowFunction)
- [pullModel](<preload.cjs.md#s-bfddeb7c435f0d41>) (ArrowFunction)
- [pullStatus](<preload.cjs.md#s-9f5df0e571db504f>) (ArrowFunction)
- [cancelPull](<preload.cjs.md#s-6529d945902122fe>) (ArrowFunction)
- [onPull](<preload.cjs.md#s-cb89d357c40bc4e4>) (ArrowFunction)
- [onPull.listener](<preload.cjs.md#s-5c68649836defb3a>) (ArrowFunction)
- [onPull.&lt;anonymous@185:14&gt;](<preload.cjs.md#s-f1d872aa512ef97d>) (ArrowFunction)
- [handshake](<preload.cjs.md#s-5cd7596a75e6a6c7>) (ArrowFunction)
- [models](<preload.cjs.md#s-d80dd0d35f81ea00>) (ArrowFunction)
- [checkRemoteModel](<preload.cjs.md#s-441c2534a13fec7f>) (ArrowFunction)
- [stopModelChecks](<preload.cjs.md#s-a729879124375d3c>) (ArrowFunction)
- [checkNvidiaModel](<preload.cjs.md#s-da89236c09f873a9>) (ArrowFunction)
- [settings](<preload.cjs.md#s-0703291104fef272>) (ArrowFunction)
- [saveCredential](<preload.cjs.md#s-a13ba2823a8fd597>) (ArrowFunction)
- [removeCredential](<preload.cjs.md#s-dd2a236a8e300d13>) (ArrowFunction)
- [context](<preload.cjs.md#s-942020597a529f6d>) (ArrowFunction)
- [listConversations](<preload.cjs.md#s-e59ff6f671c22c03>) (ArrowFunction)
- [createConversation](<preload.cjs.md#s-4b9cf9aa253480de>) (ArrowFunction)
- [renameConversation](<preload.cjs.md#s-e5bdc98caf44b79a>) (ArrowFunction)
- [deleteConversation](<preload.cjs.md#s-5d1fd8122dbe73a4>) (ArrowFunction)
- [deleteMessage](<preload.cjs.md#s-195aa8c8199b8294>) (ArrowFunction)
- [clearConversations](<preload.cjs.md#s-0b86fd9e5bac1c71>) (ArrowFunction)
- [resumeConversation](<preload.cjs.md#s-3da7206aba17f7d2>) (ArrowFunction)
- [gatewayActivity](<preload.cjs.md#s-9ce3f3da055fb8ce>) (ArrowFunction)
- [refreshSource](<preload.cjs.md#s-d1ba6790614c985d>) (ArrowFunction)
- [onEvent](<preload.cjs.md#s-d36018c50de9ad21>) (ArrowFunction)
- [onEvent.listener](<preload.cjs.md#s-c14d6e72a63fb6cb>) (ArrowFunction)
- [onEvent.&lt;anonymous@208:14&gt;](<preload.cjs.md#s-1ef6aec8eb3b8219>) (ArrowFunction)
- [getStatus](<preload.cjs.md#s-5cde05d1745ba95a>) (ArrowFunction)
- [listModels](<preload.cjs.md#s-8d37f3e271dc2b52>) (ArrowFunction)
- [testModel](<preload.cjs.md#s-195ec81d39d79fed>) (ArrowFunction)
- [chat](<preload.cjs.md#s-fb493003cd182a1e>) (ArrowFunction)
- [cancel](<preload.cjs.md#s-a8f8ef5cd02631ed>) (ArrowFunction)

<a id="s-9a713cb8fe9d7cd8"></a>

## electron/preload.cjs

[electron/preload.cjs:1](<../../../../../electron/preload.cjs#L1>) · Module · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- require — module-loader; [electron/preload.cjs:1](<../../../../../electron/preload.cjs#L1>)
- contextBridge.exposeInMainWorld — external-or-dynamic-dispatch; [electron/preload.cjs:15](<../../../../../electron/preload.cjs#L15>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d0e6ec869ea04381"></a>

## invokeModel

[electron/preload.cjs:3](<../../../../../electron/preload.cjs#L3>) · FunctionDeclaration · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| channel | any | compiler-inferred | required |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [deleteAgent](<preload.cjs.md#s-a8d3a40fd5cf21c2>) — [electron/preload.cjs:99](<../../../../../electron/preload.cjs#L99>)
- [clearEntityAgentChat](<preload.cjs.md#s-d7a2d212f13065de>) — [electron/preload.cjs:101](<../../../../../electron/preload.cjs#L101>)
- [engineDefinitions](<preload.cjs.md#s-cd796039c90a29b8>) — [electron/preload.cjs:102](<../../../../../electron/preload.cjs#L102>)
- [enginePackageCatalog](<preload.cjs.md#s-87ee5e0f428dab4c>) — [electron/preload.cjs:104](<../../../../../electron/preload.cjs#L104>)
- [listEntityAgents](<preload.cjs.md#s-1786b91eb433ede7>) — [electron/preload.cjs:105](<../../../../../electron/preload.cjs#L105>)
- [assignEntityAgent](<preload.cjs.md#s-450f0ef91d16573c>) — [electron/preload.cjs:106](<../../../../../electron/preload.cjs#L106>)
- [removeEntityAgent](<preload.cjs.md#s-99c1df7f495428fc>) — [electron/preload.cjs:107](<../../../../../electron/preload.cjs#L107>)
- [openEntityAgent](<preload.cjs.md#s-3b36f6c195a90b10>) — [electron/preload.cjs:108](<../../../../../electron/preload.cjs#L108>)
- [retrieveEntityAgentKnowledge](<preload.cjs.md#s-cd23168aad6afc01>) — [electron/preload.cjs:110](<../../../../../electron/preload.cjs#L110>)
- [sendEntityAgent](<preload.cjs.md#s-5bb1db9dc87b285e>) — [electron/preload.cjs:111](<../../../../../electron/preload.cjs#L111>)
- [executeEntityAgent](<preload.cjs.md#s-dbafd5e5a02a38d8>) — [electron/preload.cjs:112](<../../../../../electron/preload.cjs#L112>)
- [proposeEntityAgent](<preload.cjs.md#s-3763771a70c1bc3f>) — [electron/preload.cjs:113](<../../../../../electron/preload.cjs#L113>)
- [decideEntityAgentRequest](<preload.cjs.md#s-90f53589f7a87568>) — [electron/preload.cjs:115](<../../../../../electron/preload.cjs#L115>)
- [engineState](<preload.cjs.md#s-4152e551f6866a15>) — [electron/preload.cjs:116](<../../../../../electron/preload.cjs#L116>)
- [chooseEngineFolder](<preload.cjs.md#s-eb1aedea7bad502a>) — [electron/preload.cjs:117](<../../../../../electron/preload.cjs#L117>)
- [probeEngine](<preload.cjs.md#s-de93f71fedd60865>) — [electron/preload.cjs:118](<../../../../../electron/preload.cjs#L118>)
- [executeEngine](<preload.cjs.md#s-f9b67752f5136258>) — [electron/preload.cjs:119](<../../../../../electron/preload.cjs#L119>)
- [cancelEngine](<preload.cjs.md#s-6a3127b96542cdf6>) — [electron/preload.cjs:120](<../../../../../electron/preload.cjs#L120>)
- [openEngineReport](<preload.cjs.md#s-fe1b40e0fd007c28>) — [electron/preload.cjs:121](<../../../../../electron/preload.cjs#L121>)
- [connectCredential](<preload.cjs.md#s-d92b75ee01fa5ad4>) — [electron/preload.cjs:122](<../../../../../electron/preload.cjs#L122>)
- [providedModels](<preload.cjs.md#s-20a2a5434cb3f7ff>) — [electron/preload.cjs:123](<../../../../../electron/preload.cjs#L123>)
- [modelFavorites](<preload.cjs.md#s-fd94cda73d5ed3a7>) — [electron/preload.cjs:124](<../../../../../electron/preload.cjs#L124>)
- [frontOfficeState](<preload.cjs.md#s-eeea8521212c7ad0>) — [electron/preload.cjs:125](<../../../../../electron/preload.cjs#L125>)
- [frontOfficeConfig](<preload.cjs.md#s-573e2d92c6f17c18>) — [electron/preload.cjs:126](<../../../../../electron/preload.cjs#L126>)
- [frontOfficeRefresh](<preload.cjs.md#s-5e9ac333e354a9ae>) — [electron/preload.cjs:128](<../../../../../electron/preload.cjs#L128>)
- [frontOfficeOverride](<preload.cjs.md#s-1ddd2dab85814ba6>) — [electron/preload.cjs:130](<../../../../../electron/preload.cjs#L130>)
- [frontOfficeEvidence](<preload.cjs.md#s-0e0710cc47ebc2a1>) — [electron/preload.cjs:132](<../../../../../electron/preload.cjs#L132>)
- [frontOfficeFavorite](<preload.cjs.md#s-c04af7df8199db75>) — [electron/preload.cjs:134](<../../../../../electron/preload.cjs#L134>)
- [frontOfficeHealth](<preload.cjs.md#s-74711f9e03dab405>) — [electron/preload.cjs:135](<../../../../../electron/preload.cjs#L135>)
- [frontOfficeList](<preload.cjs.md#s-98a31dad8d9f200a>) — [electron/preload.cjs:136](<../../../../../electron/preload.cjs#L136>)
- [frontOfficeRead](<preload.cjs.md#s-93fda9f315c76277>) — [electron/preload.cjs:137](<../../../../../electron/preload.cjs#L137>)
- [frontOfficeCreate](<preload.cjs.md#s-c67f5149ab93ae3c>) — [electron/preload.cjs:138](<../../../../../electron/preload.cjs#L138>)
- [frontOfficeDelete](<preload.cjs.md#s-bc6f7aff7e71a8c2>) — [electron/preload.cjs:139](<../../../../../electron/preload.cjs#L139>)
- [frontOfficeExport](<preload.cjs.md#s-3bbe96423bda6a41>) — [electron/preload.cjs:140](<../../../../../electron/preload.cjs#L140>)
- [frontOfficeChat](<preload.cjs.md#s-976f248fac148e85>) — [electron/preload.cjs:141](<../../../../../electron/preload.cjs#L141>)
- [providerUsage](<preload.cjs.md#s-1770d4556dba92b8>) — [electron/preload.cjs:147](<../../../../../electron/preload.cjs#L147>)
- [openRouterUsage](<preload.cjs.md#s-d3d9813b1fcd5417>) — [electron/preload.cjs:148](<../../../../../electron/preload.cjs#L148>)
- [getAgent](<preload.cjs.md#s-a5ef30a7d7b0d423>) — [electron/preload.cjs:154](<../../../../../electron/preload.cjs#L154>)
- [listAgents](<preload.cjs.md#s-dee15a64f1aae54c>) — [electron/preload.cjs:155](<../../../../../electron/preload.cjs#L155>)
- [createAgent](<preload.cjs.md#s-65fa5f5b33bbfb49>) — [electron/preload.cjs:156](<../../../../../electron/preload.cjs#L156>)
- [getVaultIdentity](<preload.cjs.md#s-c0a48cc86a801054>) — [electron/preload.cjs:157](<../../../../../electron/preload.cjs#L157>)
- [saveAgentConstruction](<preload.cjs.md#s-05ffb78c85d5f754>) — [electron/preload.cjs:159](<../../../../../electron/preload.cjs#L159>)
- [previewConstructionBox](<preload.cjs.md#s-dd01a30bf3b78489>) — [electron/preload.cjs:161](<../../../../../electron/preload.cjs#L161>)
- [listConstructionFiles](<preload.cjs.md#s-5b12711255f597a8>) — [electron/preload.cjs:162](<../../../../../electron/preload.cjs#L162>)
- [previewConstructionFile](<preload.cjs.md#s-68bdfcfd57b43f1c>) — [electron/preload.cjs:164](<../../../../../electron/preload.cjs#L164>)
- [proposeKnowledge](<preload.cjs.md#s-8244edc13d93f3a6>) — [electron/preload.cjs:165](<../../../../../electron/preload.cjs#L165>)
- [retrieveKnowledge](<preload.cjs.md#s-359af2c22c099a44>) — [electron/preload.cjs:166](<../../../../../electron/preload.cjs#L166>)
- [saveAgent](<preload.cjs.md#s-d8b7f6facd957cd5>) — [electron/preload.cjs:167](<../../../../../electron/preload.cjs#L167>)
- [chooseAgentAvatar](<preload.cjs.md#s-2bf2c53bf9968373>) — [electron/preload.cjs:168](<../../../../../electron/preload.cjs#L168>)
- [chooseAgentBackdrop](<preload.cjs.md#s-9d6922c1cb1cff52>) — [electron/preload.cjs:169](<../../../../../electron/preload.cjs#L169>)
- [previewBoxSelection](<preload.cjs.md#s-03a062e069a2f5f5>) — [electron/preload.cjs:171](<../../../../../electron/preload.cjs#L171>)
- [inspectContextBox](<preload.cjs.md#s-f18685333cdb2231>) — [electron/preload.cjs:172](<../../../../../electron/preload.cjs#L172>)
- [editContextBox](<preload.cjs.md#s-c9da628b339eeeef>) — [electron/preload.cjs:173](<../../../../../electron/preload.cjs#L173>)
- [switchContextBox](<preload.cjs.md#s-4b1454efaf8cd92b>) — [electron/preload.cjs:174](<../../../../../electron/preload.cjs#L174>)
- [listContextBoxes](<preload.cjs.md#s-2b79bd7c6a42ac4a>) — [electron/preload.cjs:175](<../../../../../electron/preload.cjs#L175>)
- [saveContextBox](<preload.cjs.md#s-fe67338ecc567809>) — [electron/preload.cjs:176](<../../../../../electron/preload.cjs#L176>)
- [renameContextBox](<preload.cjs.md#s-1002221dfe00ed95>) — [electron/preload.cjs:177](<../../../../../electron/preload.cjs#L177>)
- [checkConversation](<preload.cjs.md#s-d22c45a928d4e8e9>) — [electron/preload.cjs:178](<../../../../../electron/preload.cjs#L178>)
- [pullModel](<preload.cjs.md#s-bfddeb7c435f0d41>) — [electron/preload.cjs:179](<../../../../../electron/preload.cjs#L179>)
- [pullStatus](<preload.cjs.md#s-9f5df0e571db504f>) — [electron/preload.cjs:180](<../../../../../electron/preload.cjs#L180>)
- [cancelPull](<preload.cjs.md#s-6529d945902122fe>) — [electron/preload.cjs:181](<../../../../../electron/preload.cjs#L181>)
- [models](<preload.cjs.md#s-d80dd0d35f81ea00>) — [electron/preload.cjs:188](<../../../../../electron/preload.cjs#L188>)
- [checkRemoteModel](<preload.cjs.md#s-441c2534a13fec7f>) — [electron/preload.cjs:189](<../../../../../electron/preload.cjs#L189>)
- [stopModelChecks](<preload.cjs.md#s-a729879124375d3c>) — [electron/preload.cjs:190](<../../../../../electron/preload.cjs#L190>)
- [checkNvidiaModel](<preload.cjs.md#s-da89236c09f873a9>) — [electron/preload.cjs:191](<../../../../../electron/preload.cjs#L191>)
- [settings](<preload.cjs.md#s-0703291104fef272>) — [electron/preload.cjs:192](<../../../../../electron/preload.cjs#L192>)
- [saveCredential](<preload.cjs.md#s-a13ba2823a8fd597>) — [electron/preload.cjs:193](<../../../../../electron/preload.cjs#L193>)
- [removeCredential](<preload.cjs.md#s-dd2a236a8e300d13>) — [electron/preload.cjs:194](<../../../../../electron/preload.cjs#L194>)
- [context](<preload.cjs.md#s-942020597a529f6d>) — [electron/preload.cjs:195](<../../../../../electron/preload.cjs#L195>)
- [listConversations](<preload.cjs.md#s-e59ff6f671c22c03>) — [electron/preload.cjs:196](<../../../../../electron/preload.cjs#L196>)
- [createConversation](<preload.cjs.md#s-4b9cf9aa253480de>) — [electron/preload.cjs:197](<../../../../../electron/preload.cjs#L197>)
- [renameConversation](<preload.cjs.md#s-e5bdc98caf44b79a>) — [electron/preload.cjs:198](<../../../../../electron/preload.cjs#L198>)
- [deleteConversation](<preload.cjs.md#s-5d1fd8122dbe73a4>) — [electron/preload.cjs:199](<../../../../../electron/preload.cjs#L199>)
- [deleteMessage](<preload.cjs.md#s-195aa8c8199b8294>) — [electron/preload.cjs:200](<../../../../../electron/preload.cjs#L200>)
- [clearConversations](<preload.cjs.md#s-0b86fd9e5bac1c71>) — [electron/preload.cjs:201](<../../../../../electron/preload.cjs#L201>)
- [resumeConversation](<preload.cjs.md#s-3da7206aba17f7d2>) — [electron/preload.cjs:202](<../../../../../electron/preload.cjs#L202>)
- [gatewayActivity](<preload.cjs.md#s-9ce3f3da055fb8ce>) — [electron/preload.cjs:203](<../../../../../electron/preload.cjs#L203>)
- [refreshSource](<preload.cjs.md#s-d1ba6790614c985d>) — [electron/preload.cjs:204](<../../../../../electron/preload.cjs#L204>)
- [getStatus](<preload.cjs.md#s-5cde05d1745ba95a>) — [electron/preload.cjs:210](<../../../../../electron/preload.cjs#L210>)
- [listModels](<preload.cjs.md#s-8d37f3e271dc2b52>) — [electron/preload.cjs:211](<../../../../../electron/preload.cjs#L211>)
- [testModel](<preload.cjs.md#s-195ec81d39d79fed>) — [electron/preload.cjs:212](<../../../../../electron/preload.cjs#L212>)
- [chat](<preload.cjs.md#s-fb493003cd182a1e>) — [electron/preload.cjs:213](<../../../../../electron/preload.cjs#L213>)
- [cancel](<preload.cjs.md#s-a8f8ef5cd02631ed>) — [electron/preload.cjs:214](<../../../../../electron/preload.cjs#L214>)

Unresolved / external call sites: 2.

- ipcRenderer.invoke — external-or-dynamic-dispatch; [electron/preload.cjs:4](<../../../../../electron/preload.cjs#L4>)
- Error — external-or-dynamic-dispatch; [electron/preload.cjs:6](<../../../../../electron/preload.cjs#L6>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-097ee40a6af39d3e"></a>

## getSnapshot

[electron/preload.cjs:19](<../../../../../electron/preload.cjs#L19>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- ipcRenderer.invoke — external-or-dynamic-dispatch; [electron/preload.cjs:19](<../../../../../electron/preload.cjs#L19>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-0254a521c34bfae8"></a>

## rescan

[electron/preload.cjs:20](<../../../../../electron/preload.cjs#L20>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- ipcRenderer.invoke — external-or-dynamic-dispatch; [electron/preload.cjs:20](<../../../../../electron/preload.cjs#L20>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-80a9704cf09287cd"></a>

## selectFolder

[electron/preload.cjs:21](<../../../../../electron/preload.cjs#L21>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- ipcRenderer.invoke — external-or-dynamic-dispatch; [electron/preload.cjs:21](<../../../../../electron/preload.cjs#L21>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-8f321cd7e4137107"></a>

## read

[electron/preload.cjs:22](<../../../../../electron/preload.cjs#L22>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| relativePath | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- ipcRenderer.invoke — external-or-dynamic-dispatch; [electron/preload.cjs:22](<../../../../../electron/preload.cjs#L22>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d4d29a2864c34bc2"></a>

## saveMarkdown

[electron/preload.cjs:23](<../../../../../electron/preload.cjs#L23>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- ipcRenderer.invoke — external-or-dynamic-dispatch; [electron/preload.cjs:24](<../../../../../electron/preload.cjs#L24>)
- Error — external-or-dynamic-dispatch; [electron/preload.cjs:26](<../../../../../electron/preload.cjs#L26>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d3bdfdff874fdc49"></a>

## readPdf

[electron/preload.cjs:29](<../../../../../electron/preload.cjs#L29>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| relativePath | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- ipcRenderer.invoke — external-or-dynamic-dispatch; [electron/preload.cjs:30](<../../../../../electron/preload.cjs#L30>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-19d0c6fd258f160e"></a>

## search

[electron/preload.cjs:31](<../../../../../electron/preload.cjs#L31>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| query | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- ipcRenderer.invoke — external-or-dynamic-dispatch; [electron/preload.cjs:31](<../../../../../electron/preload.cjs#L31>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-bd772dc088a23dfe"></a>

## request

[electron/preload.cjs:35](<../../../../../electron/preload.cjs#L35>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

Invokes guarded WorldView metadata or read-only preview operations and surfaces storage/validation failures.

Purpose evidence: jsdoc.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| operation | any | compiler-inferred | required |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- &#91; "load", "knowledge-note", "image-preview", "image-knowledge", "image-parse", "image-status", "image-cancel", "tag-search", "tag-index", "tag-associations", "tag-rebuild", "connec — external-or-dynamic-dispatch; [electron/preload.cjs:37](<../../../../../electron/preload.cjs#L37>)
- Error — external-or-dynamic-dispatch; [electron/preload.cjs:80](<../../../../../electron/preload.cjs#L80>)
- ipcRenderer.invoke — external-or-dynamic-dispatch; [electron/preload.cjs:81](<../../../../../electron/preload.cjs#L81>)
- Error — external-or-dynamic-dispatch; [electron/preload.cjs:83](<../../../../../electron/preload.cjs#L83>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-6d9eb6d3d3632905"></a>

## getState

[electron/preload.cjs:88](<../../../../../electron/preload.cjs#L88>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- ipcRenderer.invoke — external-or-dynamic-dispatch; [electron/preload.cjs:88](<../../../../../electron/preload.cjs#L88>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-11e84739d0d16d15"></a>

## create

[electron/preload.cjs:89](<../../../../../electron/preload.cjs#L89>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| name | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- ipcRenderer.invoke — external-or-dynamic-dispatch; [electron/preload.cjs:89](<../../../../../electron/preload.cjs#L89>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-09fb0575ad376c83"></a>

## rename

[electron/preload.cjs:90](<../../../../../electron/preload.cjs#L90>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| id | any | compiler-inferred | required |
| name | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- ipcRenderer.invoke — external-or-dynamic-dispatch; [electron/preload.cjs:90](<../../../../../electron/preload.cjs#L90>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d222325500392b73"></a>

## delete

[electron/preload.cjs:91](<../../../../../electron/preload.cjs#L91>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| id | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- ipcRenderer.invoke — external-or-dynamic-dispatch; [electron/preload.cjs:91](<../../../../../electron/preload.cjs#L91>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-ada58f8b5f9453ed"></a>

## setAssignments

[electron/preload.cjs:92](<../../../../../electron/preload.cjs#L92>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| paths | any | compiler-inferred | required |
| stationId | any | compiler-inferred | required |
| assigned | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- ipcRenderer.invoke — external-or-dynamic-dispatch; [electron/preload.cjs:93](<../../../../../electron/preload.cjs#L93>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-5cbf8308467a090c"></a>

## suggestions

[electron/preload.cjs:94](<../../../../../electron/preload.cjs#L94>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- ipcRenderer.invoke — external-or-dynamic-dispatch; [electron/preload.cjs:94](<../../../../../electron/preload.cjs#L94>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-526fad37fb32712c"></a>

## reattach

[electron/preload.cjs:95](<../../../../../electron/preload.cjs#L95>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| fromPath | any | compiler-inferred | required |
| toPath | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- ipcRenderer.invoke — external-or-dynamic-dispatch; [electron/preload.cjs:96](<../../../../../electron/preload.cjs#L96>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-a8d3a40fd5cf21c2"></a>

## deleteAgent

[electron/preload.cjs:99](<../../../../../electron/preload.cjs#L99>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:99](<../../../../../electron/preload.cjs#L99>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d7a2d212f13065de"></a>

## clearEntityAgentChat

[electron/preload.cjs:100](<../../../../../electron/preload.cjs#L100>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:101](<../../../../../electron/preload.cjs#L101>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-cd796039c90a29b8"></a>

## engineDefinitions

[electron/preload.cjs:102](<../../../../../electron/preload.cjs#L102>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:102](<../../../../../electron/preload.cjs#L102>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-87ee5e0f428dab4c"></a>

## enginePackageCatalog

[electron/preload.cjs:103](<../../../../../electron/preload.cjs#L103>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:104](<../../../../../electron/preload.cjs#L104>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-1786b91eb433ede7"></a>

## listEntityAgents

[electron/preload.cjs:105](<../../../../../electron/preload.cjs#L105>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:105](<../../../../../electron/preload.cjs#L105>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-450f0ef91d16573c"></a>

## assignEntityAgent

[electron/preload.cjs:106](<../../../../../electron/preload.cjs#L106>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:106](<../../../../../electron/preload.cjs#L106>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-99c1df7f495428fc"></a>

## removeEntityAgent

[electron/preload.cjs:107](<../../../../../electron/preload.cjs#L107>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:107](<../../../../../electron/preload.cjs#L107>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-3b36f6c195a90b10"></a>

## openEntityAgent

[electron/preload.cjs:108](<../../../../../electron/preload.cjs#L108>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:108](<../../../../../electron/preload.cjs#L108>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-cd23168aad6afc01"></a>

## retrieveEntityAgentKnowledge

[electron/preload.cjs:109](<../../../../../electron/preload.cjs#L109>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:110](<../../../../../electron/preload.cjs#L110>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-5bb1db9dc87b285e"></a>

## sendEntityAgent

[electron/preload.cjs:111](<../../../../../electron/preload.cjs#L111>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:111](<../../../../../electron/preload.cjs#L111>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-dbafd5e5a02a38d8"></a>

## executeEntityAgent

[electron/preload.cjs:112](<../../../../../electron/preload.cjs#L112>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:112](<../../../../../electron/preload.cjs#L112>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-3763771a70c1bc3f"></a>

## proposeEntityAgent

[electron/preload.cjs:113](<../../../../../electron/preload.cjs#L113>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:113](<../../../../../electron/preload.cjs#L113>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-90f53589f7a87568"></a>

## decideEntityAgentRequest

[electron/preload.cjs:114](<../../../../../electron/preload.cjs#L114>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:115](<../../../../../electron/preload.cjs#L115>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-4152e551f6866a15"></a>

## engineState

[electron/preload.cjs:116](<../../../../../electron/preload.cjs#L116>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:116](<../../../../../electron/preload.cjs#L116>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-eb1aedea7bad502a"></a>

## chooseEngineFolder

[electron/preload.cjs:117](<../../../../../electron/preload.cjs#L117>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:117](<../../../../../electron/preload.cjs#L117>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-de93f71fedd60865"></a>

## probeEngine

[electron/preload.cjs:118](<../../../../../electron/preload.cjs#L118>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:118](<../../../../../electron/preload.cjs#L118>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-f9b67752f5136258"></a>

## executeEngine

[electron/preload.cjs:119](<../../../../../electron/preload.cjs#L119>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:119](<../../../../../electron/preload.cjs#L119>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-6a3127b96542cdf6"></a>

## cancelEngine

[electron/preload.cjs:120](<../../../../../electron/preload.cjs#L120>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:120](<../../../../../electron/preload.cjs#L120>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-fe1b40e0fd007c28"></a>

## openEngineReport

[electron/preload.cjs:121](<../../../../../electron/preload.cjs#L121>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:121](<../../../../../electron/preload.cjs#L121>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d92b75ee01fa5ad4"></a>

## connectCredential

[electron/preload.cjs:122](<../../../../../electron/preload.cjs#L122>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:122](<../../../../../electron/preload.cjs#L122>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-20a2a5434cb3f7ff"></a>

## providedModels

[electron/preload.cjs:123](<../../../../../electron/preload.cjs#L123>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:123](<../../../../../electron/preload.cjs#L123>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-fd94cda73d5ed3a7"></a>

## modelFavorites

[electron/preload.cjs:124](<../../../../../electron/preload.cjs#L124>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:124](<../../../../../electron/preload.cjs#L124>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-eeea8521212c7ad0"></a>

## frontOfficeState

[electron/preload.cjs:125](<../../../../../electron/preload.cjs#L125>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| task | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:125](<../../../../../electron/preload.cjs#L125>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-573e2d92c6f17c18"></a>

## frontOfficeConfig

[electron/preload.cjs:126](<../../../../../electron/preload.cjs#L126>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:126](<../../../../../electron/preload.cjs#L126>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-5e9ac333e354a9ae"></a>

## frontOfficeRefresh

[electron/preload.cjs:127](<../../../../../electron/preload.cjs#L127>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| provider | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:128](<../../../../../electron/preload.cjs#L128>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-1ddd2dab85814ba6"></a>

## frontOfficeOverride

[electron/preload.cjs:129](<../../../../../electron/preload.cjs#L129>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:130](<../../../../../electron/preload.cjs#L130>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-0e0710cc47ebc2a1"></a>

## frontOfficeEvidence

[electron/preload.cjs:131](<../../../../../electron/preload.cjs#L131>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:132](<../../../../../electron/preload.cjs#L132>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-c04af7df8199db75"></a>

## frontOfficeFavorite

[electron/preload.cjs:133](<../../../../../electron/preload.cjs#L133>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:134](<../../../../../electron/preload.cjs#L134>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-74711f9e03dab405"></a>

## frontOfficeHealth

[electron/preload.cjs:135](<../../../../../electron/preload.cjs#L135>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:135](<../../../../../electron/preload.cjs#L135>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-98a31dad8d9f200a"></a>

## frontOfficeList

[electron/preload.cjs:136](<../../../../../electron/preload.cjs#L136>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:136](<../../../../../electron/preload.cjs#L136>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-93fda9f315c76277"></a>

## frontOfficeRead

[electron/preload.cjs:137](<../../../../../electron/preload.cjs#L137>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| id | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:137](<../../../../../electron/preload.cjs#L137>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-c67f5149ab93ae3c"></a>

## frontOfficeCreate

[electron/preload.cjs:138](<../../../../../electron/preload.cjs#L138>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:138](<../../../../../electron/preload.cjs#L138>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-bc6f7aff7e71a8c2"></a>

## frontOfficeDelete

[electron/preload.cjs:139](<../../../../../electron/preload.cjs#L139>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| id | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:139](<../../../../../electron/preload.cjs#L139>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-3bbe96423bda6a41"></a>

## frontOfficeExport

[electron/preload.cjs:140](<../../../../../electron/preload.cjs#L140>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| format | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:140](<../../../../../electron/preload.cjs#L140>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-976f248fac148e85"></a>

## frontOfficeChat

[electron/preload.cjs:141](<../../../../../electron/preload.cjs#L141>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:141](<../../../../../electron/preload.cjs#L141>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-db712c8f063f2fbd"></a>

## onFrontOfficeEvent

[electron/preload.cjs:142](<../../../../../electron/preload.cjs#L142>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| callback | any | compiler-inferred | required |

Returns: () =&gt; any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- ipcRenderer.on — external-or-dynamic-dispatch; [electron/preload.cjs:144](<../../../../../electron/preload.cjs#L144>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d7beef4365453cef"></a>

## onFrontOfficeEvent.listener

[electron/preload.cjs:143](<../../../../../electron/preload.cjs#L143>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [onFrontOfficeEvent](<preload.cjs.md#s-db712c8f063f2fbd>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| _ | any | compiler-inferred | required |
| value | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- callback — external-or-dynamic-dispatch; [electron/preload.cjs:143](<../../../../../electron/preload.cjs#L143>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-75b251d961ab3219"></a>

## onFrontOfficeEvent.&lt;anonymous@145:14&gt;

[electron/preload.cjs:145](<../../../../../electron/preload.cjs#L145>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [onFrontOfficeEvent](<preload.cjs.md#s-db712c8f063f2fbd>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- ipcRenderer.removeListener — external-or-dynamic-dispatch; [electron/preload.cjs:145](<../../../../../electron/preload.cjs#L145>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-1770d4556dba92b8"></a>

## providerUsage

[electron/preload.cjs:147](<../../../../../electron/preload.cjs#L147>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:147](<../../../../../electron/preload.cjs#L147>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d3d9813b1fcd5417"></a>

## openRouterUsage

[electron/preload.cjs:148](<../../../../../electron/preload.cjs#L148>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:148](<../../../../../electron/preload.cjs#L148>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-fb0dbd2b8742061b"></a>

## onUsageChanged

[electron/preload.cjs:149](<../../../../../electron/preload.cjs#L149>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| callback | any | compiler-inferred | required |

Returns: () =&gt; any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- ipcRenderer.on — external-or-dynamic-dispatch; [electron/preload.cjs:151](<../../../../../electron/preload.cjs#L151>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-756c50cef8d886b0"></a>

## onUsageChanged.listener

[electron/preload.cjs:150](<../../../../../electron/preload.cjs#L150>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [onUsageChanged](<preload.cjs.md#s-fb0dbd2b8742061b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- callback — external-or-dynamic-dispatch; [electron/preload.cjs:150](<../../../../../electron/preload.cjs#L150>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-ef6970f260b29584"></a>

## onUsageChanged.&lt;anonymous@152:14&gt;

[electron/preload.cjs:152](<../../../../../electron/preload.cjs#L152>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [onUsageChanged](<preload.cjs.md#s-fb0dbd2b8742061b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- ipcRenderer.removeListener — external-or-dynamic-dispatch; [electron/preload.cjs:152](<../../../../../electron/preload.cjs#L152>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-a5ef30a7d7b0d423"></a>

## getAgent

[electron/preload.cjs:154](<../../../../../electron/preload.cjs#L154>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| id | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:154](<../../../../../electron/preload.cjs#L154>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-dee15a64f1aae54c"></a>

## listAgents

[electron/preload.cjs:155](<../../../../../electron/preload.cjs#L155>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:155](<../../../../../electron/preload.cjs#L155>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-65fa5f5b33bbfb49"></a>

## createAgent

[electron/preload.cjs:156](<../../../../../electron/preload.cjs#L156>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:156](<../../../../../electron/preload.cjs#L156>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-c0a48cc86a801054"></a>

## getVaultIdentity

[electron/preload.cjs:157](<../../../../../electron/preload.cjs#L157>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:157](<../../../../../electron/preload.cjs#L157>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-05ffb78c85d5f754"></a>

## saveAgentConstruction

[electron/preload.cjs:158](<../../../../../electron/preload.cjs#L158>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:159](<../../../../../electron/preload.cjs#L159>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-dd01a30bf3b78489"></a>

## previewConstructionBox

[electron/preload.cjs:160](<../../../../../electron/preload.cjs#L160>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:161](<../../../../../electron/preload.cjs#L161>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-5b12711255f597a8"></a>

## listConstructionFiles

[electron/preload.cjs:162](<../../../../../electron/preload.cjs#L162>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:162](<../../../../../electron/preload.cjs#L162>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-68bdfcfd57b43f1c"></a>

## previewConstructionFile

[electron/preload.cjs:163](<../../../../../electron/preload.cjs#L163>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:164](<../../../../../electron/preload.cjs#L164>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-8244edc13d93f3a6"></a>

## proposeKnowledge

[electron/preload.cjs:165](<../../../../../electron/preload.cjs#L165>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:165](<../../../../../electron/preload.cjs#L165>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-359af2c22c099a44"></a>

## retrieveKnowledge

[electron/preload.cjs:166](<../../../../../electron/preload.cjs#L166>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:166](<../../../../../electron/preload.cjs#L166>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d8b7f6facd957cd5"></a>

## saveAgent

[electron/preload.cjs:167](<../../../../../electron/preload.cjs#L167>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:167](<../../../../../electron/preload.cjs#L167>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-2bf2c53bf9968373"></a>

## chooseAgentAvatar

[electron/preload.cjs:168](<../../../../../electron/preload.cjs#L168>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:168](<../../../../../electron/preload.cjs#L168>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-9d6922c1cb1cff52"></a>

## chooseAgentBackdrop

[electron/preload.cjs:169](<../../../../../electron/preload.cjs#L169>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| kind | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:169](<../../../../../electron/preload.cjs#L169>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-03a062e069a2f5f5"></a>

## previewBoxSelection

[electron/preload.cjs:170](<../../../../../electron/preload.cjs#L170>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| paths | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:171](<../../../../../electron/preload.cjs#L171>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-f18685333cdb2231"></a>

## inspectContextBox

[electron/preload.cjs:172](<../../../../../electron/preload.cjs#L172>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| id | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:172](<../../../../../electron/preload.cjs#L172>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-c9da628b339eeeef"></a>

## editContextBox

[electron/preload.cjs:173](<../../../../../electron/preload.cjs#L173>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:173](<../../../../../electron/preload.cjs#L173>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-4b1454efaf8cd92b"></a>

## switchContextBox

[electron/preload.cjs:174](<../../../../../electron/preload.cjs#L174>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:174](<../../../../../electron/preload.cjs#L174>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-2b79bd7c6a42ac4a"></a>

## listContextBoxes

[electron/preload.cjs:175](<../../../../../electron/preload.cjs#L175>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:175](<../../../../../electron/preload.cjs#L175>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-fe67338ecc567809"></a>

## saveContextBox

[electron/preload.cjs:176](<../../../../../electron/preload.cjs#L176>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:176](<../../../../../electron/preload.cjs#L176>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-1002221dfe00ed95"></a>

## renameContextBox

[electron/preload.cjs:177](<../../../../../electron/preload.cjs#L177>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:177](<../../../../../electron/preload.cjs#L177>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d22c45a928d4e8e9"></a>

## checkConversation

[electron/preload.cjs:178](<../../../../../electron/preload.cjs#L178>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| id | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:178](<../../../../../electron/preload.cjs#L178>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-bfddeb7c435f0d41"></a>

## pullModel

[electron/preload.cjs:179](<../../../../../electron/preload.cjs#L179>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| model | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:179](<../../../../../electron/preload.cjs#L179>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-9f5df0e571db504f"></a>

## pullStatus

[electron/preload.cjs:180](<../../../../../electron/preload.cjs#L180>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:180](<../../../../../electron/preload.cjs#L180>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-6529d945902122fe"></a>

## cancelPull

[electron/preload.cjs:181](<../../../../../electron/preload.cjs#L181>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| model | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:181](<../../../../../electron/preload.cjs#L181>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-cb89d357c40bc4e4"></a>

## onPull

[electron/preload.cjs:182](<../../../../../electron/preload.cjs#L182>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| callback | any | compiler-inferred | required |

Returns: () =&gt; any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- ipcRenderer.on — external-or-dynamic-dispatch; [electron/preload.cjs:184](<../../../../../electron/preload.cjs#L184>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-5c68649836defb3a"></a>

## onPull.listener

[electron/preload.cjs:183](<../../../../../electron/preload.cjs#L183>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [onPull](<preload.cjs.md#s-cb89d357c40bc4e4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| _ | any | compiler-inferred | required |
| value | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- callback — external-or-dynamic-dispatch; [electron/preload.cjs:183](<../../../../../electron/preload.cjs#L183>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-f1d872aa512ef97d"></a>

## onPull.&lt;anonymous@185:14&gt;

[electron/preload.cjs:185](<../../../../../electron/preload.cjs#L185>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [onPull](<preload.cjs.md#s-cb89d357c40bc4e4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- ipcRenderer.removeListener — external-or-dynamic-dispatch; [electron/preload.cjs:185](<../../../../../electron/preload.cjs#L185>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-5cd7596a75e6a6c7"></a>

## handshake

[electron/preload.cjs:187](<../../../../../electron/preload.cjs#L187>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| version | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- ipcRenderer.invoke — external-or-dynamic-dispatch; [electron/preload.cjs:187](<../../../../../electron/preload.cjs#L187>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d80dd0d35f81ea00"></a>

## models

[electron/preload.cjs:188](<../../../../../electron/preload.cjs#L188>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:188](<../../../../../electron/preload.cjs#L188>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-441c2534a13fec7f"></a>

## checkRemoteModel

[electron/preload.cjs:189](<../../../../../electron/preload.cjs#L189>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:189](<../../../../../electron/preload.cjs#L189>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-a729879124375d3c"></a>

## stopModelChecks

[electron/preload.cjs:190](<../../../../../electron/preload.cjs#L190>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:190](<../../../../../electron/preload.cjs#L190>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-da89236c09f873a9"></a>

## checkNvidiaModel

[electron/preload.cjs:191](<../../../../../electron/preload.cjs#L191>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| model | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:191](<../../../../../electron/preload.cjs#L191>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-0703291104fef272"></a>

## settings

[electron/preload.cjs:192](<../../../../../electron/preload.cjs#L192>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:192](<../../../../../electron/preload.cjs#L192>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-a13ba2823a8fd597"></a>

## saveCredential

[electron/preload.cjs:193](<../../../../../electron/preload.cjs#L193>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:193](<../../../../../electron/preload.cjs#L193>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-dd2a236a8e300d13"></a>

## removeCredential

[electron/preload.cjs:194](<../../../../../electron/preload.cjs#L194>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:194](<../../../../../electron/preload.cjs#L194>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-942020597a529f6d"></a>

## context

[electron/preload.cjs:195](<../../../../../electron/preload.cjs#L195>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:195](<../../../../../electron/preload.cjs#L195>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-e59ff6f671c22c03"></a>

## listConversations

[electron/preload.cjs:196](<../../../../../electron/preload.cjs#L196>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:196](<../../../../../electron/preload.cjs#L196>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-4b9cf9aa253480de"></a>

## createConversation

[electron/preload.cjs:197](<../../../../../electron/preload.cjs#L197>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:197](<../../../../../electron/preload.cjs#L197>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-e5bdc98caf44b79a"></a>

## renameConversation

[electron/preload.cjs:198](<../../../../../electron/preload.cjs#L198>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:198](<../../../../../electron/preload.cjs#L198>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-5d1fd8122dbe73a4"></a>

## deleteConversation

[electron/preload.cjs:199](<../../../../../electron/preload.cjs#L199>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| id | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:199](<../../../../../electron/preload.cjs#L199>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-195aa8c8199b8294"></a>

## deleteMessage

[electron/preload.cjs:200](<../../../../../electron/preload.cjs#L200>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:200](<../../../../../electron/preload.cjs#L200>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-0b86fd9e5bac1c71"></a>

## clearConversations

[electron/preload.cjs:201](<../../../../../electron/preload.cjs#L201>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:201](<../../../../../electron/preload.cjs#L201>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-3da7206aba17f7d2"></a>

## resumeConversation

[electron/preload.cjs:202](<../../../../../electron/preload.cjs#L202>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| id | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:202](<../../../../../electron/preload.cjs#L202>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-9ce3f3da055fb8ce"></a>

## gatewayActivity

[electron/preload.cjs:203](<../../../../../electron/preload.cjs#L203>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| id | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:203](<../../../../../electron/preload.cjs#L203>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d1ba6790614c985d"></a>

## refreshSource

[electron/preload.cjs:204](<../../../../../electron/preload.cjs#L204>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:204](<../../../../../electron/preload.cjs#L204>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d36018c50de9ad21"></a>

## onEvent

[electron/preload.cjs:205](<../../../../../electron/preload.cjs#L205>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| callback | any | compiler-inferred | required |

Returns: () =&gt; any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- ipcRenderer.on — external-or-dynamic-dispatch; [electron/preload.cjs:207](<../../../../../electron/preload.cjs#L207>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-c14d6e72a63fb6cb"></a>

## onEvent.listener

[electron/preload.cjs:206](<../../../../../electron/preload.cjs#L206>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [onEvent](<preload.cjs.md#s-d36018c50de9ad21>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| _ | any | compiler-inferred | required |
| value | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- callback — external-or-dynamic-dispatch; [electron/preload.cjs:206](<../../../../../electron/preload.cjs#L206>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-1ef6aec8eb3b8219"></a>

## onEvent.&lt;anonymous@208:14&gt;

[electron/preload.cjs:208](<../../../../../electron/preload.cjs#L208>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [onEvent](<preload.cjs.md#s-d36018c50de9ad21>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- ipcRenderer.removeListener — external-or-dynamic-dispatch; [electron/preload.cjs:208](<../../../../../electron/preload.cjs#L208>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-5cde05d1745ba95a"></a>

## getStatus

[electron/preload.cjs:210](<../../../../../electron/preload.cjs#L210>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:210](<../../../../../electron/preload.cjs#L210>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-8d37f3e271dc2b52"></a>

## listModels

[electron/preload.cjs:211](<../../../../../electron/preload.cjs#L211>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:211](<../../../../../electron/preload.cjs#L211>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-195ec81d39d79fed"></a>

## testModel

[electron/preload.cjs:212](<../../../../../electron/preload.cjs#L212>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| model | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:212](<../../../../../electron/preload.cjs#L212>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-fb493003cd182a1e"></a>

## chat

[electron/preload.cjs:213](<../../../../../electron/preload.cjs#L213>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:213](<../../../../../electron/preload.cjs#L213>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-a8f8ef5cd02631ed"></a>

## cancel

[electron/preload.cjs:214](<../../../../../electron/preload.cjs#L214>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| requestId | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:214](<../../../../../electron/preload.cjs#L214>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
