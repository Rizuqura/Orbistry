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
- [getState](<preload.cjs.md#s-efa07e1ffe6476cf>) (ArrowFunction)
- [create](<preload.cjs.md#s-d282371e00cbf6bd>) (ArrowFunction)
- [rename](<preload.cjs.md#s-204c8c1332bc1d2b>) (ArrowFunction)
- [delete](<preload.cjs.md#s-11e84739d0d16d15>) (ArrowFunction)
- [setAssignments](<preload.cjs.md#s-eb184816bf50a83d>) (ArrowFunction)
- [suggestions](<preload.cjs.md#s-56d69e50d664172a>) (ArrowFunction)
- [reattach](<preload.cjs.md#s-7cf5cca0f0fc5279>) (ArrowFunction)
- [deleteAgent](<preload.cjs.md#s-9c3739f39aa5e368>) (ArrowFunction)
- [clearEntityAgentChat](<preload.cjs.md#s-2bf51ee397915faa>) (ArrowFunction)
- [engineDefinitions](<preload.cjs.md#s-0f69ee1be1accf0a>) (ArrowFunction)
- [enginePackageCatalog](<preload.cjs.md#s-b49b6b90ce297b05>) (ArrowFunction)
- [listEntityAgents](<preload.cjs.md#s-901ac7b618419655>) (ArrowFunction)
- [assignEntityAgent](<preload.cjs.md#s-aca801c67a4d92b0>) (ArrowFunction)
- [removeEntityAgent](<preload.cjs.md#s-78604326f2ec4adb>) (ArrowFunction)
- [openEntityAgent](<preload.cjs.md#s-fa55d7f34cfe516d>) (ArrowFunction)
- [retrieveEntityAgentKnowledge](<preload.cjs.md#s-20be6265189b94fd>) (ArrowFunction)
- [sendEntityAgent](<preload.cjs.md#s-66bee67bbd5f5b7e>) (ArrowFunction)
- [executeEntityAgent](<preload.cjs.md#s-0eb5e7c1e39fb97b>) (ArrowFunction)
- [proposeEntityAgent](<preload.cjs.md#s-ce2acfcb3655a639>) (ArrowFunction)
- [decideEntityAgentRequest](<preload.cjs.md#s-0a6e70c0c35e91cc>) (ArrowFunction)
- [engineState](<preload.cjs.md#s-b5bf7a2dc38df370>) (ArrowFunction)
- [chooseEngineFolder](<preload.cjs.md#s-90cb66c41fd8d85c>) (ArrowFunction)
- [probeEngine](<preload.cjs.md#s-4152e551f6866a15>) (ArrowFunction)
- [executeEngine](<preload.cjs.md#s-ef0cbe8b4766cae4>) (ArrowFunction)
- [cancelEngine](<preload.cjs.md#s-b5f782a3309017cb>) (ArrowFunction)
- [openEngineReport](<preload.cjs.md#s-0ac94f0de9373a62>) (ArrowFunction)
- [connectCredential](<preload.cjs.md#s-794715e1153b2c76>) (ArrowFunction)
- [providedModels](<preload.cjs.md#s-8418c6bf8541c50a>) (ArrowFunction)
- [modelFavorites](<preload.cjs.md#s-8d3ac7e7201807f6>) (ArrowFunction)
- [frontOfficeState](<preload.cjs.md#s-695f4d0431e3b7c5>) (ArrowFunction)
- [frontOfficeConfig](<preload.cjs.md#s-7688fd18e75db907>) (ArrowFunction)
- [frontOfficeRefresh](<preload.cjs.md#s-3c35c2d06cb2ef37>) (ArrowFunction)
- [frontOfficeOverride](<preload.cjs.md#s-35e2f4091401e044>) (ArrowFunction)
- [frontOfficeEvidence](<preload.cjs.md#s-1ddd2dab85814ba6>) (ArrowFunction)
- [frontOfficeFavorite](<preload.cjs.md#s-0e0710cc47ebc2a1>) (ArrowFunction)
- [frontOfficeHealth](<preload.cjs.md#s-3f495cd82255464a>) (ArrowFunction)
- [frontOfficeList](<preload.cjs.md#s-2ab6ad484e8e3a77>) (ArrowFunction)
- [frontOfficeRead](<preload.cjs.md#s-ece5113bbbe06640>) (ArrowFunction)
- [frontOfficeCreate](<preload.cjs.md#s-9230e6386bef4e67>) (ArrowFunction)
- [frontOfficeDelete](<preload.cjs.md#s-db145d7e6dc44735>) (ArrowFunction)
- [frontOfficeExport](<preload.cjs.md#s-c67f5149ab93ae3c>) (ArrowFunction)
- [frontOfficeChat](<preload.cjs.md#s-68261f0859be920c>) (ArrowFunction)
- [onFrontOfficeEvent](<preload.cjs.md#s-d50eab01d8f6f683>) (ArrowFunction)
- [onFrontOfficeEvent.listener](<preload.cjs.md#s-406bf21beac8c600>) (ArrowFunction)
- [onFrontOfficeEvent.&lt;anonymous@143:14&gt;](<preload.cjs.md#s-55e550ba4eda1634>) (ArrowFunction)
- [providerUsage](<preload.cjs.md#s-8604ead98c854164>) (ArrowFunction)
- [openRouterUsage](<preload.cjs.md#s-c5b3ca08edf65e66>) (ArrowFunction)
- [onUsageChanged](<preload.cjs.md#s-c6b2864fa5f3f699>) (ArrowFunction)
- [onUsageChanged.listener](<preload.cjs.md#s-8850a22bb3f84b60>) (ArrowFunction)
- [onUsageChanged.&lt;anonymous@150:14&gt;](<preload.cjs.md#s-5007d5e21ee60b30>) (ArrowFunction)
- [getAgent](<preload.cjs.md#s-fa0e2478e094e8d9>) (ArrowFunction)
- [listAgents](<preload.cjs.md#s-d4a17d508008bbf1>) (ArrowFunction)
- [createAgent](<preload.cjs.md#s-0252db175e6d2a78>) (ArrowFunction)
- [getVaultIdentity](<preload.cjs.md#s-11e85669f8fbdac0>) (ArrowFunction)
- [saveAgentConstruction](<preload.cjs.md#s-50871f4bf08fc16b>) (ArrowFunction)
- [previewConstructionBox](<preload.cjs.md#s-3f4b57acf4bd79e9>) (ArrowFunction)
- [listConstructionFiles](<preload.cjs.md#s-a230f5c7a0541cbc>) (ArrowFunction)
- [previewConstructionFile](<preload.cjs.md#s-133f08fed63b5a7f>) (ArrowFunction)
- [proposeKnowledge](<preload.cjs.md#s-d28889366d069fe3>) (ArrowFunction)
- [retrieveKnowledge](<preload.cjs.md#s-1606134d7f9aa8ec>) (ArrowFunction)
- [saveAgent](<preload.cjs.md#s-a1ddee879f6208d7>) (ArrowFunction)
- [chooseAgentAvatar](<preload.cjs.md#s-359af2c22c099a44>) (ArrowFunction)
- [chooseAgentBackdrop](<preload.cjs.md#s-88119fbe7e6d67f9>) (ArrowFunction)
- [previewBoxSelection](<preload.cjs.md#s-36e7d7fc10bd68e7>) (ArrowFunction)
- [inspectContextBox](<preload.cjs.md#s-bf70a7bc3b68d995>) (ArrowFunction)
- [editContextBox](<preload.cjs.md#s-e3c59c99447520ca>) (ArrowFunction)
- [switchContextBox](<preload.cjs.md#s-4a1c56ddbaad8487>) (ArrowFunction)
- [listContextBoxes](<preload.cjs.md#s-c2944ed742877038>) (ArrowFunction)
- [saveContextBox](<preload.cjs.md#s-a848f88f85031bb7>) (ArrowFunction)
- [renameContextBox](<preload.cjs.md#s-2b79bd7c6a42ac4a>) (ArrowFunction)
- [checkConversation](<preload.cjs.md#s-cdcb5c7d89e5ed12>) (ArrowFunction)
- [pullModel](<preload.cjs.md#s-3838f2b968439c1b>) (ArrowFunction)
- [pullStatus](<preload.cjs.md#s-427879094e1e24ea>) (ArrowFunction)
- [cancelPull](<preload.cjs.md#s-35c0fc3cf6e3b193>) (ArrowFunction)
- [onPull](<preload.cjs.md#s-be5b93c39283f30e>) (ArrowFunction)
- [onPull.listener](<preload.cjs.md#s-5023bc8b1cded537>) (ArrowFunction)
- [onPull.&lt;anonymous@183:14&gt;](<preload.cjs.md#s-0936d21f78dd8f45>) (ArrowFunction)
- [handshake](<preload.cjs.md#s-b64e26f7e14ae951>) (ArrowFunction)
- [models](<preload.cjs.md#s-0d206c08650542fd>) (ArrowFunction)
- [checkRemoteModel](<preload.cjs.md#s-ce2ae43b2a2bf5cd>) (ArrowFunction)
- [stopModelChecks](<preload.cjs.md#s-75fe8117fd2ed375>) (ArrowFunction)
- [checkNvidiaModel](<preload.cjs.md#s-441c2534a13fec7f>) (ArrowFunction)
- [settings](<preload.cjs.md#s-7b5549e98fc4eb46>) (ArrowFunction)
- [saveCredential](<preload.cjs.md#s-49245837159db912>) (ArrowFunction)
- [removeCredential](<preload.cjs.md#s-402578268ed65e03>) (ArrowFunction)
- [context](<preload.cjs.md#s-c857079b6caf485a>) (ArrowFunction)
- [listConversations](<preload.cjs.md#s-be500986bee7533c>) (ArrowFunction)
- [createConversation](<preload.cjs.md#s-1dd99852c78dca6a>) (ArrowFunction)
- [renameConversation](<preload.cjs.md#s-486ba863f6a58a5c>) (ArrowFunction)
- [deleteConversation](<preload.cjs.md#s-4b9cf9aa253480de>) (ArrowFunction)
- [deleteMessage](<preload.cjs.md#s-2bf4742daee928f9>) (ArrowFunction)
- [clearConversations](<preload.cjs.md#s-5d1fd8122dbe73a4>) (ArrowFunction)
- [resumeConversation](<preload.cjs.md#s-6b08d7bdffc720dd>) (ArrowFunction)
- [gatewayActivity](<preload.cjs.md#s-6b69583d247888e2>) (ArrowFunction)
- [refreshSource](<preload.cjs.md#s-1988ee0dbbdd27e8>) (ArrowFunction)
- [onEvent](<preload.cjs.md#s-e82d0acbe0fb8461>) (ArrowFunction)
- [onEvent.listener](<preload.cjs.md#s-c397301852c2b826>) (ArrowFunction)
- [onEvent.&lt;anonymous@206:14&gt;](<preload.cjs.md#s-0dcede709e842550>) (ArrowFunction)
- [getStatus](<preload.cjs.md#s-8d9bca92dc4f0afe>) (ArrowFunction)
- [listModels](<preload.cjs.md#s-5c5b6d19b553d48c>) (ArrowFunction)
- [testModel](<preload.cjs.md#s-5cde05d1745ba95a>) (ArrowFunction)
- [chat](<preload.cjs.md#s-758343b5313652c0>) (ArrowFunction)
- [cancel](<preload.cjs.md#s-6f61a14b9f6f4af2>) (ArrowFunction)

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

- [deleteAgent](<preload.cjs.md#s-9c3739f39aa5e368>) — [electron/preload.cjs:97](<../../../../../electron/preload.cjs#L97>)
- [clearEntityAgentChat](<preload.cjs.md#s-2bf51ee397915faa>) — [electron/preload.cjs:99](<../../../../../electron/preload.cjs#L99>)
- [engineDefinitions](<preload.cjs.md#s-0f69ee1be1accf0a>) — [electron/preload.cjs:100](<../../../../../electron/preload.cjs#L100>)
- [enginePackageCatalog](<preload.cjs.md#s-b49b6b90ce297b05>) — [electron/preload.cjs:102](<../../../../../electron/preload.cjs#L102>)
- [listEntityAgents](<preload.cjs.md#s-901ac7b618419655>) — [electron/preload.cjs:103](<../../../../../electron/preload.cjs#L103>)
- [assignEntityAgent](<preload.cjs.md#s-aca801c67a4d92b0>) — [electron/preload.cjs:104](<../../../../../electron/preload.cjs#L104>)
- [removeEntityAgent](<preload.cjs.md#s-78604326f2ec4adb>) — [electron/preload.cjs:105](<../../../../../electron/preload.cjs#L105>)
- [openEntityAgent](<preload.cjs.md#s-fa55d7f34cfe516d>) — [electron/preload.cjs:106](<../../../../../electron/preload.cjs#L106>)
- [retrieveEntityAgentKnowledge](<preload.cjs.md#s-20be6265189b94fd>) — [electron/preload.cjs:108](<../../../../../electron/preload.cjs#L108>)
- [sendEntityAgent](<preload.cjs.md#s-66bee67bbd5f5b7e>) — [electron/preload.cjs:109](<../../../../../electron/preload.cjs#L109>)
- [executeEntityAgent](<preload.cjs.md#s-0eb5e7c1e39fb97b>) — [electron/preload.cjs:110](<../../../../../electron/preload.cjs#L110>)
- [proposeEntityAgent](<preload.cjs.md#s-ce2acfcb3655a639>) — [electron/preload.cjs:111](<../../../../../electron/preload.cjs#L111>)
- [decideEntityAgentRequest](<preload.cjs.md#s-0a6e70c0c35e91cc>) — [electron/preload.cjs:113](<../../../../../electron/preload.cjs#L113>)
- [engineState](<preload.cjs.md#s-b5bf7a2dc38df370>) — [electron/preload.cjs:114](<../../../../../electron/preload.cjs#L114>)
- [chooseEngineFolder](<preload.cjs.md#s-90cb66c41fd8d85c>) — [electron/preload.cjs:115](<../../../../../electron/preload.cjs#L115>)
- [probeEngine](<preload.cjs.md#s-4152e551f6866a15>) — [electron/preload.cjs:116](<../../../../../electron/preload.cjs#L116>)
- [executeEngine](<preload.cjs.md#s-ef0cbe8b4766cae4>) — [electron/preload.cjs:117](<../../../../../electron/preload.cjs#L117>)
- [cancelEngine](<preload.cjs.md#s-b5f782a3309017cb>) — [electron/preload.cjs:118](<../../../../../electron/preload.cjs#L118>)
- [openEngineReport](<preload.cjs.md#s-0ac94f0de9373a62>) — [electron/preload.cjs:119](<../../../../../electron/preload.cjs#L119>)
- [connectCredential](<preload.cjs.md#s-794715e1153b2c76>) — [electron/preload.cjs:120](<../../../../../electron/preload.cjs#L120>)
- [providedModels](<preload.cjs.md#s-8418c6bf8541c50a>) — [electron/preload.cjs:121](<../../../../../electron/preload.cjs#L121>)
- [modelFavorites](<preload.cjs.md#s-8d3ac7e7201807f6>) — [electron/preload.cjs:122](<../../../../../electron/preload.cjs#L122>)
- [frontOfficeState](<preload.cjs.md#s-695f4d0431e3b7c5>) — [electron/preload.cjs:123](<../../../../../electron/preload.cjs#L123>)
- [frontOfficeConfig](<preload.cjs.md#s-7688fd18e75db907>) — [electron/preload.cjs:124](<../../../../../electron/preload.cjs#L124>)
- [frontOfficeRefresh](<preload.cjs.md#s-3c35c2d06cb2ef37>) — [electron/preload.cjs:126](<../../../../../electron/preload.cjs#L126>)
- [frontOfficeOverride](<preload.cjs.md#s-35e2f4091401e044>) — [electron/preload.cjs:128](<../../../../../electron/preload.cjs#L128>)
- [frontOfficeEvidence](<preload.cjs.md#s-1ddd2dab85814ba6>) — [electron/preload.cjs:130](<../../../../../electron/preload.cjs#L130>)
- [frontOfficeFavorite](<preload.cjs.md#s-0e0710cc47ebc2a1>) — [electron/preload.cjs:132](<../../../../../electron/preload.cjs#L132>)
- [frontOfficeHealth](<preload.cjs.md#s-3f495cd82255464a>) — [electron/preload.cjs:133](<../../../../../electron/preload.cjs#L133>)
- [frontOfficeList](<preload.cjs.md#s-2ab6ad484e8e3a77>) — [electron/preload.cjs:134](<../../../../../electron/preload.cjs#L134>)
- [frontOfficeRead](<preload.cjs.md#s-ece5113bbbe06640>) — [electron/preload.cjs:135](<../../../../../electron/preload.cjs#L135>)
- [frontOfficeCreate](<preload.cjs.md#s-9230e6386bef4e67>) — [electron/preload.cjs:136](<../../../../../electron/preload.cjs#L136>)
- [frontOfficeDelete](<preload.cjs.md#s-db145d7e6dc44735>) — [electron/preload.cjs:137](<../../../../../electron/preload.cjs#L137>)
- [frontOfficeExport](<preload.cjs.md#s-c67f5149ab93ae3c>) — [electron/preload.cjs:138](<../../../../../electron/preload.cjs#L138>)
- [frontOfficeChat](<preload.cjs.md#s-68261f0859be920c>) — [electron/preload.cjs:139](<../../../../../electron/preload.cjs#L139>)
- [providerUsage](<preload.cjs.md#s-8604ead98c854164>) — [electron/preload.cjs:145](<../../../../../electron/preload.cjs#L145>)
- [openRouterUsage](<preload.cjs.md#s-c5b3ca08edf65e66>) — [electron/preload.cjs:146](<../../../../../electron/preload.cjs#L146>)
- [getAgent](<preload.cjs.md#s-fa0e2478e094e8d9>) — [electron/preload.cjs:152](<../../../../../electron/preload.cjs#L152>)
- [listAgents](<preload.cjs.md#s-d4a17d508008bbf1>) — [electron/preload.cjs:153](<../../../../../electron/preload.cjs#L153>)
- [createAgent](<preload.cjs.md#s-0252db175e6d2a78>) — [electron/preload.cjs:154](<../../../../../electron/preload.cjs#L154>)
- [getVaultIdentity](<preload.cjs.md#s-11e85669f8fbdac0>) — [electron/preload.cjs:155](<../../../../../electron/preload.cjs#L155>)
- [saveAgentConstruction](<preload.cjs.md#s-50871f4bf08fc16b>) — [electron/preload.cjs:157](<../../../../../electron/preload.cjs#L157>)
- [previewConstructionBox](<preload.cjs.md#s-3f4b57acf4bd79e9>) — [electron/preload.cjs:159](<../../../../../electron/preload.cjs#L159>)
- [listConstructionFiles](<preload.cjs.md#s-a230f5c7a0541cbc>) — [electron/preload.cjs:160](<../../../../../electron/preload.cjs#L160>)
- [previewConstructionFile](<preload.cjs.md#s-133f08fed63b5a7f>) — [electron/preload.cjs:162](<../../../../../electron/preload.cjs#L162>)
- [proposeKnowledge](<preload.cjs.md#s-d28889366d069fe3>) — [electron/preload.cjs:163](<../../../../../electron/preload.cjs#L163>)
- [retrieveKnowledge](<preload.cjs.md#s-1606134d7f9aa8ec>) — [electron/preload.cjs:164](<../../../../../electron/preload.cjs#L164>)
- [saveAgent](<preload.cjs.md#s-a1ddee879f6208d7>) — [electron/preload.cjs:165](<../../../../../electron/preload.cjs#L165>)
- [chooseAgentAvatar](<preload.cjs.md#s-359af2c22c099a44>) — [electron/preload.cjs:166](<../../../../../electron/preload.cjs#L166>)
- [chooseAgentBackdrop](<preload.cjs.md#s-88119fbe7e6d67f9>) — [electron/preload.cjs:167](<../../../../../electron/preload.cjs#L167>)
- [previewBoxSelection](<preload.cjs.md#s-36e7d7fc10bd68e7>) — [electron/preload.cjs:169](<../../../../../electron/preload.cjs#L169>)
- [inspectContextBox](<preload.cjs.md#s-bf70a7bc3b68d995>) — [electron/preload.cjs:170](<../../../../../electron/preload.cjs#L170>)
- [editContextBox](<preload.cjs.md#s-e3c59c99447520ca>) — [electron/preload.cjs:171](<../../../../../electron/preload.cjs#L171>)
- [switchContextBox](<preload.cjs.md#s-4a1c56ddbaad8487>) — [electron/preload.cjs:172](<../../../../../electron/preload.cjs#L172>)
- [listContextBoxes](<preload.cjs.md#s-c2944ed742877038>) — [electron/preload.cjs:173](<../../../../../electron/preload.cjs#L173>)
- [saveContextBox](<preload.cjs.md#s-a848f88f85031bb7>) — [electron/preload.cjs:174](<../../../../../electron/preload.cjs#L174>)
- [renameContextBox](<preload.cjs.md#s-2b79bd7c6a42ac4a>) — [electron/preload.cjs:175](<../../../../../electron/preload.cjs#L175>)
- [checkConversation](<preload.cjs.md#s-cdcb5c7d89e5ed12>) — [electron/preload.cjs:176](<../../../../../electron/preload.cjs#L176>)
- [pullModel](<preload.cjs.md#s-3838f2b968439c1b>) — [electron/preload.cjs:177](<../../../../../electron/preload.cjs#L177>)
- [pullStatus](<preload.cjs.md#s-427879094e1e24ea>) — [electron/preload.cjs:178](<../../../../../electron/preload.cjs#L178>)
- [cancelPull](<preload.cjs.md#s-35c0fc3cf6e3b193>) — [electron/preload.cjs:179](<../../../../../electron/preload.cjs#L179>)
- [models](<preload.cjs.md#s-0d206c08650542fd>) — [electron/preload.cjs:186](<../../../../../electron/preload.cjs#L186>)
- [checkRemoteModel](<preload.cjs.md#s-ce2ae43b2a2bf5cd>) — [electron/preload.cjs:187](<../../../../../electron/preload.cjs#L187>)
- [stopModelChecks](<preload.cjs.md#s-75fe8117fd2ed375>) — [electron/preload.cjs:188](<../../../../../electron/preload.cjs#L188>)
- [checkNvidiaModel](<preload.cjs.md#s-441c2534a13fec7f>) — [electron/preload.cjs:189](<../../../../../electron/preload.cjs#L189>)
- [settings](<preload.cjs.md#s-7b5549e98fc4eb46>) — [electron/preload.cjs:190](<../../../../../electron/preload.cjs#L190>)
- [saveCredential](<preload.cjs.md#s-49245837159db912>) — [electron/preload.cjs:191](<../../../../../electron/preload.cjs#L191>)
- [removeCredential](<preload.cjs.md#s-402578268ed65e03>) — [electron/preload.cjs:192](<../../../../../electron/preload.cjs#L192>)
- [context](<preload.cjs.md#s-c857079b6caf485a>) — [electron/preload.cjs:193](<../../../../../electron/preload.cjs#L193>)
- [listConversations](<preload.cjs.md#s-be500986bee7533c>) — [electron/preload.cjs:194](<../../../../../electron/preload.cjs#L194>)
- [createConversation](<preload.cjs.md#s-1dd99852c78dca6a>) — [electron/preload.cjs:195](<../../../../../electron/preload.cjs#L195>)
- [renameConversation](<preload.cjs.md#s-486ba863f6a58a5c>) — [electron/preload.cjs:196](<../../../../../electron/preload.cjs#L196>)
- [deleteConversation](<preload.cjs.md#s-4b9cf9aa253480de>) — [electron/preload.cjs:197](<../../../../../electron/preload.cjs#L197>)
- [deleteMessage](<preload.cjs.md#s-2bf4742daee928f9>) — [electron/preload.cjs:198](<../../../../../electron/preload.cjs#L198>)
- [clearConversations](<preload.cjs.md#s-5d1fd8122dbe73a4>) — [electron/preload.cjs:199](<../../../../../electron/preload.cjs#L199>)
- [resumeConversation](<preload.cjs.md#s-6b08d7bdffc720dd>) — [electron/preload.cjs:200](<../../../../../electron/preload.cjs#L200>)
- [gatewayActivity](<preload.cjs.md#s-6b69583d247888e2>) — [electron/preload.cjs:201](<../../../../../electron/preload.cjs#L201>)
- [refreshSource](<preload.cjs.md#s-1988ee0dbbdd27e8>) — [electron/preload.cjs:202](<../../../../../electron/preload.cjs#L202>)
- [getStatus](<preload.cjs.md#s-8d9bca92dc4f0afe>) — [electron/preload.cjs:208](<../../../../../electron/preload.cjs#L208>)
- [listModels](<preload.cjs.md#s-5c5b6d19b553d48c>) — [electron/preload.cjs:209](<../../../../../electron/preload.cjs#L209>)
- [testModel](<preload.cjs.md#s-5cde05d1745ba95a>) — [electron/preload.cjs:210](<../../../../../electron/preload.cjs#L210>)
- [chat](<preload.cjs.md#s-758343b5313652c0>) — [electron/preload.cjs:211](<../../../../../electron/preload.cjs#L211>)
- [cancel](<preload.cjs.md#s-6f61a14b9f6f4af2>) — [electron/preload.cjs:212](<../../../../../electron/preload.cjs#L212>)

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
- Error — external-or-dynamic-dispatch; [electron/preload.cjs:78](<../../../../../electron/preload.cjs#L78>)
- ipcRenderer.invoke — external-or-dynamic-dispatch; [electron/preload.cjs:79](<../../../../../electron/preload.cjs#L79>)
- Error — external-or-dynamic-dispatch; [electron/preload.cjs:81](<../../../../../electron/preload.cjs#L81>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-efa07e1ffe6476cf"></a>

## getState

[electron/preload.cjs:86](<../../../../../electron/preload.cjs#L86>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

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

- ipcRenderer.invoke — external-or-dynamic-dispatch; [electron/preload.cjs:86](<../../../../../electron/preload.cjs#L86>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d282371e00cbf6bd"></a>

## create

[electron/preload.cjs:87](<../../../../../electron/preload.cjs#L87>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

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

- ipcRenderer.invoke — external-or-dynamic-dispatch; [electron/preload.cjs:87](<../../../../../electron/preload.cjs#L87>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-204c8c1332bc1d2b"></a>

## rename

[electron/preload.cjs:88](<../../../../../electron/preload.cjs#L88>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

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

- ipcRenderer.invoke — external-or-dynamic-dispatch; [electron/preload.cjs:88](<../../../../../electron/preload.cjs#L88>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-11e84739d0d16d15"></a>

## delete

[electron/preload.cjs:89](<../../../../../electron/preload.cjs#L89>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

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

- ipcRenderer.invoke — external-or-dynamic-dispatch; [electron/preload.cjs:89](<../../../../../electron/preload.cjs#L89>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-eb184816bf50a83d"></a>

## setAssignments

[electron/preload.cjs:90](<../../../../../electron/preload.cjs#L90>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

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

- ipcRenderer.invoke — external-or-dynamic-dispatch; [electron/preload.cjs:91](<../../../../../electron/preload.cjs#L91>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-56d69e50d664172a"></a>

## suggestions

[electron/preload.cjs:92](<../../../../../electron/preload.cjs#L92>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

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

- ipcRenderer.invoke — external-or-dynamic-dispatch; [electron/preload.cjs:92](<../../../../../electron/preload.cjs#L92>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-7cf5cca0f0fc5279"></a>

## reattach

[electron/preload.cjs:93](<../../../../../electron/preload.cjs#L93>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

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

- ipcRenderer.invoke — external-or-dynamic-dispatch; [electron/preload.cjs:94](<../../../../../electron/preload.cjs#L94>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-9c3739f39aa5e368"></a>

## deleteAgent

[electron/preload.cjs:97](<../../../../../electron/preload.cjs#L97>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:97](<../../../../../electron/preload.cjs#L97>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-2bf51ee397915faa"></a>

## clearEntityAgentChat

[electron/preload.cjs:98](<../../../../../electron/preload.cjs#L98>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

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

<a id="s-0f69ee1be1accf0a"></a>

## engineDefinitions

[electron/preload.cjs:100](<../../../../../electron/preload.cjs#L100>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:100](<../../../../../electron/preload.cjs#L100>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-b49b6b90ce297b05"></a>

## enginePackageCatalog

[electron/preload.cjs:101](<../../../../../electron/preload.cjs#L101>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:102](<../../../../../electron/preload.cjs#L102>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-901ac7b618419655"></a>

## listEntityAgents

[electron/preload.cjs:103](<../../../../../electron/preload.cjs#L103>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:103](<../../../../../electron/preload.cjs#L103>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-aca801c67a4d92b0"></a>

## assignEntityAgent

[electron/preload.cjs:104](<../../../../../electron/preload.cjs#L104>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

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

<a id="s-78604326f2ec4adb"></a>

## removeEntityAgent

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

<a id="s-fa55d7f34cfe516d"></a>

## openEntityAgent

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

<a id="s-20be6265189b94fd"></a>

## retrieveEntityAgentKnowledge

[electron/preload.cjs:107](<../../../../../electron/preload.cjs#L107>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

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

<a id="s-66bee67bbd5f5b7e"></a>

## sendEntityAgent

[electron/preload.cjs:109](<../../../../../electron/preload.cjs#L109>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:109](<../../../../../electron/preload.cjs#L109>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-0eb5e7c1e39fb97b"></a>

## executeEntityAgent

[electron/preload.cjs:110](<../../../../../electron/preload.cjs#L110>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

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

<a id="s-ce2acfcb3655a639"></a>

## proposeEntityAgent

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

<a id="s-0a6e70c0c35e91cc"></a>

## decideEntityAgentRequest

[electron/preload.cjs:112](<../../../../../electron/preload.cjs#L112>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

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

<a id="s-b5bf7a2dc38df370"></a>

## engineState

[electron/preload.cjs:114](<../../../../../electron/preload.cjs#L114>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:114](<../../../../../electron/preload.cjs#L114>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-90cb66c41fd8d85c"></a>

## chooseEngineFolder

[electron/preload.cjs:115](<../../../../../electron/preload.cjs#L115>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:115](<../../../../../electron/preload.cjs#L115>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-4152e551f6866a15"></a>

## probeEngine

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

<a id="s-ef0cbe8b4766cae4"></a>

## executeEngine

[electron/preload.cjs:117](<../../../../../electron/preload.cjs#L117>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:117](<../../../../../electron/preload.cjs#L117>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-b5f782a3309017cb"></a>

## cancelEngine

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

<a id="s-0ac94f0de9373a62"></a>

## openEngineReport

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

<a id="s-794715e1153b2c76"></a>

## connectCredential

[electron/preload.cjs:120](<../../../../../electron/preload.cjs#L120>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:120](<../../../../../electron/preload.cjs#L120>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-8418c6bf8541c50a"></a>

## providedModels

[electron/preload.cjs:121](<../../../../../electron/preload.cjs#L121>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:121](<../../../../../electron/preload.cjs#L121>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-8d3ac7e7201807f6"></a>

## modelFavorites

[electron/preload.cjs:122](<../../../../../electron/preload.cjs#L122>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:122](<../../../../../electron/preload.cjs#L122>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-695f4d0431e3b7c5"></a>

## frontOfficeState

[electron/preload.cjs:123](<../../../../../electron/preload.cjs#L123>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| task | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:123](<../../../../../electron/preload.cjs#L123>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-7688fd18e75db907"></a>

## frontOfficeConfig

[electron/preload.cjs:124](<../../../../../electron/preload.cjs#L124>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:124](<../../../../../electron/preload.cjs#L124>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-3c35c2d06cb2ef37"></a>

## frontOfficeRefresh

[electron/preload.cjs:125](<../../../../../electron/preload.cjs#L125>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| provider | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:126](<../../../../../electron/preload.cjs#L126>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-35e2f4091401e044"></a>

## frontOfficeOverride

[electron/preload.cjs:127](<../../../../../electron/preload.cjs#L127>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:128](<../../../../../electron/preload.cjs#L128>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-1ddd2dab85814ba6"></a>

## frontOfficeEvidence

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

## frontOfficeFavorite

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

<a id="s-3f495cd82255464a"></a>

## frontOfficeHealth

[electron/preload.cjs:133](<../../../../../electron/preload.cjs#L133>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:133](<../../../../../electron/preload.cjs#L133>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-2ab6ad484e8e3a77"></a>

## frontOfficeList

[electron/preload.cjs:134](<../../../../../electron/preload.cjs#L134>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:134](<../../../../../electron/preload.cjs#L134>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-ece5113bbbe06640"></a>

## frontOfficeRead

[electron/preload.cjs:135](<../../../../../electron/preload.cjs#L135>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| id | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:135](<../../../../../electron/preload.cjs#L135>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-9230e6386bef4e67"></a>

## frontOfficeCreate

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

<a id="s-db145d7e6dc44735"></a>

## frontOfficeDelete

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

## frontOfficeExport

[electron/preload.cjs:138](<../../../../../electron/preload.cjs#L138>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| format | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:138](<../../../../../electron/preload.cjs#L138>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-68261f0859be920c"></a>

## frontOfficeChat

[electron/preload.cjs:139](<../../../../../electron/preload.cjs#L139>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:139](<../../../../../electron/preload.cjs#L139>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d50eab01d8f6f683"></a>

## onFrontOfficeEvent

[electron/preload.cjs:140](<../../../../../electron/preload.cjs#L140>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

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

- ipcRenderer.on — external-or-dynamic-dispatch; [electron/preload.cjs:142](<../../../../../electron/preload.cjs#L142>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-406bf21beac8c600"></a>

## onFrontOfficeEvent.listener

[electron/preload.cjs:141](<../../../../../electron/preload.cjs#L141>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [onFrontOfficeEvent](<preload.cjs.md#s-d50eab01d8f6f683>).

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

- callback — external-or-dynamic-dispatch; [electron/preload.cjs:141](<../../../../../electron/preload.cjs#L141>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-55e550ba4eda1634"></a>

## onFrontOfficeEvent.&lt;anonymous@143:14&gt;

[electron/preload.cjs:143](<../../../../../electron/preload.cjs#L143>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [onFrontOfficeEvent](<preload.cjs.md#s-d50eab01d8f6f683>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- ipcRenderer.removeListener — external-or-dynamic-dispatch; [electron/preload.cjs:143](<../../../../../electron/preload.cjs#L143>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-8604ead98c854164"></a>

## providerUsage

[electron/preload.cjs:145](<../../../../../electron/preload.cjs#L145>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:145](<../../../../../electron/preload.cjs#L145>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-c5b3ca08edf65e66"></a>

## openRouterUsage

[electron/preload.cjs:146](<../../../../../electron/preload.cjs#L146>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:146](<../../../../../electron/preload.cjs#L146>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-c6b2864fa5f3f699"></a>

## onUsageChanged

[electron/preload.cjs:147](<../../../../../electron/preload.cjs#L147>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

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

- ipcRenderer.on — external-or-dynamic-dispatch; [electron/preload.cjs:149](<../../../../../electron/preload.cjs#L149>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-8850a22bb3f84b60"></a>

## onUsageChanged.listener

[electron/preload.cjs:148](<../../../../../electron/preload.cjs#L148>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [onUsageChanged](<preload.cjs.md#s-c6b2864fa5f3f699>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- callback — external-or-dynamic-dispatch; [electron/preload.cjs:148](<../../../../../electron/preload.cjs#L148>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-5007d5e21ee60b30"></a>

## onUsageChanged.&lt;anonymous@150:14&gt;

[electron/preload.cjs:150](<../../../../../electron/preload.cjs#L150>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [onUsageChanged](<preload.cjs.md#s-c6b2864fa5f3f699>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- ipcRenderer.removeListener — external-or-dynamic-dispatch; [electron/preload.cjs:150](<../../../../../electron/preload.cjs#L150>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-fa0e2478e094e8d9"></a>

## getAgent

[electron/preload.cjs:152](<../../../../../electron/preload.cjs#L152>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| id | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:152](<../../../../../electron/preload.cjs#L152>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d4a17d508008bbf1"></a>

## listAgents

[electron/preload.cjs:153](<../../../../../electron/preload.cjs#L153>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:153](<../../../../../electron/preload.cjs#L153>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-0252db175e6d2a78"></a>

## createAgent

[electron/preload.cjs:154](<../../../../../electron/preload.cjs#L154>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:154](<../../../../../electron/preload.cjs#L154>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-11e85669f8fbdac0"></a>

## getVaultIdentity

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

<a id="s-50871f4bf08fc16b"></a>

## saveAgentConstruction

[electron/preload.cjs:156](<../../../../../electron/preload.cjs#L156>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:157](<../../../../../electron/preload.cjs#L157>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-3f4b57acf4bd79e9"></a>

## previewConstructionBox

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

<a id="s-a230f5c7a0541cbc"></a>

## listConstructionFiles

[electron/preload.cjs:160](<../../../../../electron/preload.cjs#L160>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:160](<../../../../../electron/preload.cjs#L160>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-133f08fed63b5a7f"></a>

## previewConstructionFile

[electron/preload.cjs:161](<../../../../../electron/preload.cjs#L161>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:162](<../../../../../electron/preload.cjs#L162>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d28889366d069fe3"></a>

## proposeKnowledge

[electron/preload.cjs:163](<../../../../../electron/preload.cjs#L163>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:163](<../../../../../electron/preload.cjs#L163>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-1606134d7f9aa8ec"></a>

## retrieveKnowledge

[electron/preload.cjs:164](<../../../../../electron/preload.cjs#L164>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

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

<a id="s-a1ddee879f6208d7"></a>

## saveAgent

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

## chooseAgentAvatar

[electron/preload.cjs:166](<../../../../../electron/preload.cjs#L166>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:166](<../../../../../electron/preload.cjs#L166>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-88119fbe7e6d67f9"></a>

## chooseAgentBackdrop

[electron/preload.cjs:167](<../../../../../electron/preload.cjs#L167>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| kind | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:167](<../../../../../electron/preload.cjs#L167>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-36e7d7fc10bd68e7"></a>

## previewBoxSelection

[electron/preload.cjs:168](<../../../../../electron/preload.cjs#L168>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| paths | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:169](<../../../../../electron/preload.cjs#L169>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-bf70a7bc3b68d995"></a>

## inspectContextBox

[electron/preload.cjs:170](<../../../../../electron/preload.cjs#L170>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| id | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:170](<../../../../../electron/preload.cjs#L170>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-e3c59c99447520ca"></a>

## editContextBox

[electron/preload.cjs:171](<../../../../../electron/preload.cjs#L171>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:171](<../../../../../electron/preload.cjs#L171>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-4a1c56ddbaad8487"></a>

## switchContextBox

[electron/preload.cjs:172](<../../../../../electron/preload.cjs#L172>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:172](<../../../../../electron/preload.cjs#L172>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-c2944ed742877038"></a>

## listContextBoxes

[electron/preload.cjs:173](<../../../../../electron/preload.cjs#L173>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:173](<../../../../../electron/preload.cjs#L173>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-a848f88f85031bb7"></a>

## saveContextBox

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

## renameContextBox

[electron/preload.cjs:175](<../../../../../electron/preload.cjs#L175>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:175](<../../../../../electron/preload.cjs#L175>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-cdcb5c7d89e5ed12"></a>

## checkConversation

[electron/preload.cjs:176](<../../../../../electron/preload.cjs#L176>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| id | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:176](<../../../../../electron/preload.cjs#L176>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-3838f2b968439c1b"></a>

## pullModel

[electron/preload.cjs:177](<../../../../../electron/preload.cjs#L177>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| model | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:177](<../../../../../electron/preload.cjs#L177>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-427879094e1e24ea"></a>

## pullStatus

[electron/preload.cjs:178](<../../../../../electron/preload.cjs#L178>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:178](<../../../../../electron/preload.cjs#L178>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-35c0fc3cf6e3b193"></a>

## cancelPull

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

<a id="s-be5b93c39283f30e"></a>

## onPull

[electron/preload.cjs:180](<../../../../../electron/preload.cjs#L180>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

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

- ipcRenderer.on — external-or-dynamic-dispatch; [electron/preload.cjs:182](<../../../../../electron/preload.cjs#L182>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-5023bc8b1cded537"></a>

## onPull.listener

[electron/preload.cjs:181](<../../../../../electron/preload.cjs#L181>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [onPull](<preload.cjs.md#s-be5b93c39283f30e>).

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

- callback — external-or-dynamic-dispatch; [electron/preload.cjs:181](<../../../../../electron/preload.cjs#L181>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-0936d21f78dd8f45"></a>

## onPull.&lt;anonymous@183:14&gt;

[electron/preload.cjs:183](<../../../../../electron/preload.cjs#L183>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [onPull](<preload.cjs.md#s-be5b93c39283f30e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- ipcRenderer.removeListener — external-or-dynamic-dispatch; [electron/preload.cjs:183](<../../../../../electron/preload.cjs#L183>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-b64e26f7e14ae951"></a>

## handshake

[electron/preload.cjs:185](<../../../../../electron/preload.cjs#L185>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

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

- ipcRenderer.invoke — external-or-dynamic-dispatch; [electron/preload.cjs:185](<../../../../../electron/preload.cjs#L185>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-0d206c08650542fd"></a>

## models

[electron/preload.cjs:186](<../../../../../electron/preload.cjs#L186>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:186](<../../../../../electron/preload.cjs#L186>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-ce2ae43b2a2bf5cd"></a>

## checkRemoteModel

[electron/preload.cjs:187](<../../../../../electron/preload.cjs#L187>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:187](<../../../../../electron/preload.cjs#L187>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-75fe8117fd2ed375"></a>

## stopModelChecks

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

## checkNvidiaModel

[electron/preload.cjs:189](<../../../../../electron/preload.cjs#L189>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| model | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:189](<../../../../../electron/preload.cjs#L189>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-7b5549e98fc4eb46"></a>

## settings

[electron/preload.cjs:190](<../../../../../electron/preload.cjs#L190>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:190](<../../../../../electron/preload.cjs#L190>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-49245837159db912"></a>

## saveCredential

[electron/preload.cjs:191](<../../../../../electron/preload.cjs#L191>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:191](<../../../../../electron/preload.cjs#L191>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-402578268ed65e03"></a>

## removeCredential

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

<a id="s-c857079b6caf485a"></a>

## context

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

<a id="s-be500986bee7533c"></a>

## listConversations

[electron/preload.cjs:194](<../../../../../electron/preload.cjs#L194>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:194](<../../../../../electron/preload.cjs#L194>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-1dd99852c78dca6a"></a>

## createConversation

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

<a id="s-486ba863f6a58a5c"></a>

## renameConversation

[electron/preload.cjs:196](<../../../../../electron/preload.cjs#L196>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:196](<../../../../../electron/preload.cjs#L196>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-4b9cf9aa253480de"></a>

## deleteConversation

[electron/preload.cjs:197](<../../../../../electron/preload.cjs#L197>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| id | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:197](<../../../../../electron/preload.cjs#L197>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-2bf4742daee928f9"></a>

## deleteMessage

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

## clearConversations

[electron/preload.cjs:199](<../../../../../electron/preload.cjs#L199>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:199](<../../../../../electron/preload.cjs#L199>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-6b08d7bdffc720dd"></a>

## resumeConversation

[electron/preload.cjs:200](<../../../../../electron/preload.cjs#L200>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| id | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:200](<../../../../../electron/preload.cjs#L200>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-6b69583d247888e2"></a>

## gatewayActivity

[electron/preload.cjs:201](<../../../../../electron/preload.cjs#L201>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| id | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:201](<../../../../../electron/preload.cjs#L201>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-1988ee0dbbdd27e8"></a>

## refreshSource

[electron/preload.cjs:202](<../../../../../electron/preload.cjs#L202>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:202](<../../../../../electron/preload.cjs#L202>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-e82d0acbe0fb8461"></a>

## onEvent

[electron/preload.cjs:203](<../../../../../electron/preload.cjs#L203>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

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

- ipcRenderer.on — external-or-dynamic-dispatch; [electron/preload.cjs:205](<../../../../../electron/preload.cjs#L205>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-c397301852c2b826"></a>

## onEvent.listener

[electron/preload.cjs:204](<../../../../../electron/preload.cjs#L204>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [onEvent](<preload.cjs.md#s-e82d0acbe0fb8461>).

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

- callback — external-or-dynamic-dispatch; [electron/preload.cjs:204](<../../../../../electron/preload.cjs#L204>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-0dcede709e842550"></a>

## onEvent.&lt;anonymous@206:14&gt;

[electron/preload.cjs:206](<../../../../../electron/preload.cjs#L206>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [onEvent](<preload.cjs.md#s-e82d0acbe0fb8461>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- ipcRenderer.removeListener — external-or-dynamic-dispatch; [electron/preload.cjs:206](<../../../../../electron/preload.cjs#L206>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-8d9bca92dc4f0afe"></a>

## getStatus

[electron/preload.cjs:208](<../../../../../electron/preload.cjs#L208>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:208](<../../../../../electron/preload.cjs#L208>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-5c5b6d19b553d48c"></a>

## listModels

[electron/preload.cjs:209](<../../../../../electron/preload.cjs#L209>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:209](<../../../../../electron/preload.cjs#L209>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-5cde05d1745ba95a"></a>

## testModel

[electron/preload.cjs:210](<../../../../../electron/preload.cjs#L210>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| model | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:210](<../../../../../electron/preload.cjs#L210>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-758343b5313652c0"></a>

## chat

[electron/preload.cjs:211](<../../../../../electron/preload.cjs#L211>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:211](<../../../../../electron/preload.cjs#L211>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-6f61a14b9f6f4af2"></a>

## cancel

[electron/preload.cjs:212](<../../../../../electron/preload.cjs#L212>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/preload.cjs](<preload.cjs.md#s-9a713cb8fe9d7cd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| requestId | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invokeModel](<preload.cjs.md#s-d0e6ec869ea04381>) — [electron/preload.cjs:212](<../../../../../electron/preload.cjs#L212>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
