# electron/ai/run-store.cjs: symbols

[Atlas](<../../../../README.md>) / [Retained AI runtime](<../../../../modules/ai-runtime.md>) / [electron/ai/run-store.cjs:1](<../../../../../../electron/ai/run-store.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/run-store.cjs](<run-store.cjs.md#s-bb384cdf10526916>) (Module)
- [RUN_SCHEMA_VERSION](<run-store.cjs.md#s-599e0cebcb8b181e>) (VariableDeclaration)
- [runsDirectory](<run-store.cjs.md#s-690bb4b0ae786720>) (ArrowFunction)
- [invalidRecord](<run-store.cjs.md#s-036013bb7de226bd>) (FunctionDeclaration)
- [validateError](<run-store.cjs.md#s-e6b14c2b196d5574>) (FunctionDeclaration)
- [validateSource](<run-store.cjs.md#s-68ee11c53d343d45>) (FunctionDeclaration)
- [validateRunRecord](<run-store.cjs.md#s-bbbf0871f6631831>) (FunctionDeclaration)
- [validateRunRecord.&lt;anonymous@102:45&gt;](<run-store.cjs.md#s-e733f47499a1357d>) (ArrowFunction)
- [validateRunRecord.&lt;anonymous@225:7&gt;](<run-store.cjs.md#s-020e36d18ff224e2>) (ArrowFunction)
- [validateRunRecord.&lt;anonymous@258:9&gt;](<run-store.cjs.md#s-68b1c0ae1b3c2b89>) (ArrowFunction)
- [validateRunRecord.&lt;anonymous@298:50&gt;](<run-store.cjs.md#s-1f3851bb2ef435ea>) (ArrowFunction)
- [validateRunRecord.&lt;anonymous@301:56&gt;](<run-store.cjs.md#s-0d7b06188ddbe91b>) (ArrowFunction)
- [runPath](<run-store.cjs.md#s-0a5612351c581798>) (FunctionDeclaration)
- [createModelRun](<run-store.cjs.md#s-0abf05c0db6341b7>) (FunctionDeclaration)
- [createModelRun.&lt;anonymous@357:51&gt;](<run-store.cjs.md#s-36e2fea28364449a>) (ArrowFunction)
- [readModelRun](<run-store.cjs.md#s-260afe334a71b9ae>) (FunctionDeclaration)
- [listModelRuns](<run-store.cjs.md#s-4c5761eaea31276f>) (FunctionDeclaration)
- [listModelRuns.&lt;anonymous@396:13&gt;](<run-store.cjs.md#s-800af755311f91de>) (ArrowFunction)
- [listModelRuns.&lt;anonymous@397:11&gt;](<run-store.cjs.md#s-856b09de3d4b347b>) (ArrowFunction)
- [listModelRuns.&lt;anonymous@400:5&gt;](<run-store.cjs.md#s-3ab831117a1d7b10>) (ArrowFunction)

<a id="s-bb384cdf10526916"></a>

## electron/ai/run-store.cjs

[electron/ai/run-store.cjs:1](<../../../../../../electron/ai/run-store.cjs#L1>) · Module · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 7.

- require — module-loader; [electron/ai/run-store.cjs:1](<../../../../../../electron/ai/run-store.cjs#L1>)
- require — module-loader; [electron/ai/run-store.cjs:2](<../../../../../../electron/ai/run-store.cjs#L2>)
- require — module-loader; [electron/ai/run-store.cjs:3](<../../../../../../electron/ai/run-store.cjs#L3>)
- require — module-loader; [electron/ai/run-store.cjs:4](<../../../../../../electron/ai/run-store.cjs#L4>)
- require — module-loader; [electron/ai/run-store.cjs:5](<../../../../../../electron/ai/run-store.cjs#L5>)
- require — module-loader; [electron/ai/run-store.cjs:6](<../../../../../../electron/ai/run-store.cjs#L6>)
- require — module-loader; [electron/ai/run-store.cjs:7](<../../../../../../electron/ai/run-store.cjs#L7>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:34](<../../../../../../electron/ai/front-office-engine.test.cjs#L34>) — file-import-only; coverage not established.
- [electron/ai/run-store.test.cjs:13](<../../../../../../electron/ai/run-store.test.cjs#L13>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-runtime-kernel-smoke.cjs:149](<../../../../../../scripts/acceptance/electron-runtime-kernel-smoke.cjs#L149>) — file-import-only; coverage not established.

<a id="s-599e0cebcb8b181e"></a>

## RUN_SCHEMA_VERSION

[electron/ai/run-store.cjs:9](<../../../../../../electron/ai/run-store.cjs#L9>) · VariableDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: RUN_SCHEMA_VERSION ([electron/ai/run-store.cjs:1](<../../../../../../electron/ai/run-store.cjs#L1>)).

Lexical owner: [electron/ai/run-store.cjs](<run-store.cjs.md#s-bb384cdf10526916>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:34](<../../../../../../electron/ai/front-office-engine.test.cjs#L34>) — file-import-only; coverage not established.
- [electron/ai/run-store.test.cjs:13](<../../../../../../electron/ai/run-store.test.cjs#L13>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-runtime-kernel-smoke.cjs:149](<../../../../../../scripts/acceptance/electron-runtime-kernel-smoke.cjs#L149>) — file-import-only; coverage not established.

<a id="s-690bb4b0ae786720"></a>

## runsDirectory

[electron/ai/run-store.cjs:13](<../../../../../../electron/ai/run-store.cjs#L13>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/run-store.cjs](<run-store.cjs.md#s-bb384cdf10526916>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| rootPath | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [runPath](<run-store.cjs.md#s-0a5612351c581798>) — [electron/ai/run-store.cjs:314](<../../../../../../electron/ai/run-store.cjs#L314>)
- [createModelRun](<run-store.cjs.md#s-0abf05c0db6341b7>) — [electron/ai/run-store.cjs:319](<../../../../../../electron/ai/run-store.cjs#L319>)
- [readModelRun](<run-store.cjs.md#s-260afe334a71b9ae>) — [electron/ai/run-store.cjs:363](<../../../../../../electron/ai/run-store.cjs#L363>)
- [listModelRuns](<run-store.cjs.md#s-4c5761eaea31276f>) — [electron/ai/run-store.cjs:387](<../../../../../../electron/ai/run-store.cjs#L387>)

Unresolved / external call sites: 2.

- path.join — external-or-dynamic-dispatch; [electron/ai/run-store.cjs:14](<../../../../../../electron/ai/run-store.cjs#L14>)
- path.resolve — external-or-dynamic-dispatch; [electron/ai/run-store.cjs:14](<../../../../../../electron/ai/run-store.cjs#L14>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:34](<../../../../../../electron/ai/front-office-engine.test.cjs#L34>) — file-import-only; coverage not established.
- [electron/ai/run-store.test.cjs:13](<../../../../../../electron/ai/run-store.test.cjs#L13>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-runtime-kernel-smoke.cjs:149](<../../../../../../scripts/acceptance/electron-runtime-kernel-smoke.cjs#L149>) — file-import-only; coverage not established.

<a id="s-036013bb7de226bd"></a>

## invalidRecord

[electron/ai/run-store.cjs:16](<../../../../../../electron/ai/run-store.cjs#L16>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/run-store.cjs](<run-store.cjs.md#s-bb384cdf10526916>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| message | any | compiler-inferred | required |
| details | {} | compiler-inferred | optional, default present |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ModelRuntimeError.constructor](<../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/run-store.cjs:17](<../../../../../../electron/ai/run-store.cjs#L17>)

**Called by (statically resolved):**

- [validateError](<run-store.cjs.md#s-e6b14c2b196d5574>) — [electron/ai/run-store.cjs:36](<../../../../../../electron/ai/run-store.cjs#L36>)
- [validateSource](<run-store.cjs.md#s-68ee11c53d343d45>) — [electron/ai/run-store.cjs:46](<../../../../../../electron/ai/run-store.cjs#L46>)
- [validateSource](<run-store.cjs.md#s-68ee11c53d343d45>) — [electron/ai/run-store.cjs:49](<../../../../../../electron/ai/run-store.cjs#L49>)
- [validateSource](<run-store.cjs.md#s-68ee11c53d343d45>) — [electron/ai/run-store.cjs:59](<../../../../../../electron/ai/run-store.cjs#L59>)
- [validateRunRecord](<run-store.cjs.md#s-bbbf0871f6631831>) — [electron/ai/run-store.cjs:73](<../../../../../../electron/ai/run-store.cjs#L73>)
- [validateRunRecord](<run-store.cjs.md#s-bbbf0871f6631831>) — [electron/ai/run-store.cjs:104](<../../../../../../electron/ai/run-store.cjs#L104>)
- [validateRunRecord](<run-store.cjs.md#s-bbbf0871f6631831>) — [electron/ai/run-store.cjs:164](<../../../../../../electron/ai/run-store.cjs#L164>)
- [validateRunRecord](<run-store.cjs.md#s-bbbf0871f6631831>) — [electron/ai/run-store.cjs:170](<../../../../../../electron/ai/run-store.cjs#L170>)
- [validateRunRecord](<run-store.cjs.md#s-bbbf0871f6631831>) — [electron/ai/run-store.cjs:179](<../../../../../../electron/ai/run-store.cjs#L179>)
- [validateRunRecord](<run-store.cjs.md#s-bbbf0871f6631831>) — [electron/ai/run-store.cjs:181](<../../../../../../electron/ai/run-store.cjs#L181>)
- [validateRunRecord](<run-store.cjs.md#s-bbbf0871f6631831>) — [electron/ai/run-store.cjs:189](<../../../../../../electron/ai/run-store.cjs#L189>)
- [validateRunRecord](<run-store.cjs.md#s-bbbf0871f6631831>) — [electron/ai/run-store.cjs:197](<../../../../../../electron/ai/run-store.cjs#L197>)
- [validateRunRecord](<run-store.cjs.md#s-bbbf0871f6631831>) — [electron/ai/run-store.cjs:199](<../../../../../../electron/ai/run-store.cjs#L199>)
- [validateRunRecord](<run-store.cjs.md#s-bbbf0871f6631831>) — [electron/ai/run-store.cjs:206](<../../../../../../electron/ai/run-store.cjs#L206>)
- [validateRunRecord](<run-store.cjs.md#s-bbbf0871f6631831>) — [electron/ai/run-store.cjs:208](<../../../../../../electron/ai/run-store.cjs#L208>)
- [validateRunRecord](<run-store.cjs.md#s-bbbf0871f6631831>) — [electron/ai/run-store.cjs:213](<../../../../../../electron/ai/run-store.cjs#L213>)
- [validateRunRecord](<run-store.cjs.md#s-bbbf0871f6631831>) — [electron/ai/run-store.cjs:228](<../../../../../../electron/ai/run-store.cjs#L228>)
- [validateRunRecord](<run-store.cjs.md#s-bbbf0871f6631831>) — [electron/ai/run-store.cjs:230](<../../../../../../electron/ai/run-store.cjs#L230>)
- [validateRunRecord](<run-store.cjs.md#s-bbbf0871f6631831>) — [electron/ai/run-store.cjs:243](<../../../../../../electron/ai/run-store.cjs#L243>)
- [validateRunRecord](<run-store.cjs.md#s-bbbf0871f6631831>) — [electron/ai/run-store.cjs:250](<../../../../../../electron/ai/run-store.cjs#L250>)
- [validateRunRecord](<run-store.cjs.md#s-bbbf0871f6631831>) — [electron/ai/run-store.cjs:264](<../../../../../../electron/ai/run-store.cjs#L264>)
- [validateRunRecord](<run-store.cjs.md#s-bbbf0871f6631831>) — [electron/ai/run-store.cjs:270](<../../../../../../electron/ai/run-store.cjs#L270>)
- [runPath](<run-store.cjs.md#s-0a5612351c581798>) — [electron/ai/run-store.cjs:313](<../../../../../../electron/ai/run-store.cjs#L313>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:34](<../../../../../../electron/ai/front-office-engine.test.cjs#L34>) — file-import-only; coverage not established.
- [electron/ai/run-store.test.cjs:13](<../../../../../../electron/ai/run-store.test.cjs#L13>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-runtime-kernel-smoke.cjs:149](<../../../../../../scripts/acceptance/electron-runtime-kernel-smoke.cjs#L149>) — file-import-only; coverage not established.

<a id="s-e6b14c2b196d5574"></a>

## validateError

[electron/ai/run-store.cjs:24](<../../../../../../electron/ai/run-store.cjs#L24>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/run-store.cjs](<run-store.cjs.md#s-bb384cdf10526916>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: { code: any; message: any; details: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invalidRecord](<run-store.cjs.md#s-036013bb7de226bd>) — [electron/ai/run-store.cjs:36](<../../../../../../electron/ai/run-store.cjs#L36>)

**Called by (statically resolved):**

- [validateRunRecord](<run-store.cjs.md#s-bbbf0871f6631831>) — [electron/ai/run-store.cjs:307](<../../../../../../electron/ai/run-store.cjs#L307>)

Unresolved / external call sites: 3.

- Array.isArray — external-or-dynamic-dispatch; [electron/ai/run-store.cjs:29](<../../../../../../electron/ai/run-store.cjs#L29>)
- Array.isArray — external-or-dynamic-dispatch; [electron/ai/run-store.cjs:34](<../../../../../../electron/ai/run-store.cjs#L34>)
- structuredClone — external-or-dynamic-dispatch; [electron/ai/run-store.cjs:40](<../../../../../../electron/ai/run-store.cjs#L40>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:34](<../../../../../../electron/ai/front-office-engine.test.cjs#L34>) — file-import-only; coverage not established.
- [electron/ai/run-store.test.cjs:13](<../../../../../../electron/ai/run-store.test.cjs#L13>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-runtime-kernel-smoke.cjs:149](<../../../../../../scripts/acceptance/electron-runtime-kernel-smoke.cjs#L149>) — file-import-only; coverage not established.

<a id="s-68ee11c53d343d45"></a>

## validateSource

[electron/ai/run-store.cjs:44](<../../../../../../electron/ai/run-store.cjs#L44>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/run-store.cjs](<run-store.cjs.md#s-bb384cdf10526916>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |
| field | any | compiler-inferred | required |
| allowMissingHash | boolean | compiler-inferred | optional, default present |

Returns: { sourceId: any; relativePath: any; contentHash: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invalidRecord](<run-store.cjs.md#s-036013bb7de226bd>) — [electron/ai/run-store.cjs:46](<../../../../../../electron/ai/run-store.cjs#L46>)
- [invalidRecord](<run-store.cjs.md#s-036013bb7de226bd>) — [electron/ai/run-store.cjs:49](<../../../../../../electron/ai/run-store.cjs#L49>)
- [invalidRecord](<run-store.cjs.md#s-036013bb7de226bd>) — [electron/ai/run-store.cjs:59](<../../../../../../electron/ai/run-store.cjs#L59>)

**Called by (statically resolved):**

- [validateRunRecord.&lt;anonymous@298:50&gt;](<run-store.cjs.md#s-1f3851bb2ef435ea>) — [electron/ai/run-store.cjs:299](<../../../../../../electron/ai/run-store.cjs#L299>)
- [validateRunRecord.&lt;anonymous@301:56&gt;](<run-store.cjs.md#s-0d7b06188ddbe91b>) — [electron/ai/run-store.cjs:302](<../../../../../../electron/ai/run-store.cjs#L302>)

Unresolved / external call sites: 3.

- Array.isArray — external-or-dynamic-dispatch; [electron/ai/run-store.cjs:45](<../../../../../../electron/ai/run-store.cjs#L45>)
- CONTENT_HASH_PATTERN.test — external-or-dynamic-dispatch; [electron/ai/run-store.cjs:53](<../../../../../../electron/ai/run-store.cjs#L53>)
- CONTENT_HASH_PATTERN.test — external-or-dynamic-dispatch; [electron/ai/run-store.cjs:57](<../../../../../../electron/ai/run-store.cjs#L57>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:34](<../../../../../../electron/ai/front-office-engine.test.cjs#L34>) — file-import-only; coverage not established.
- [electron/ai/run-store.test.cjs:13](<../../../../../../electron/ai/run-store.test.cjs#L13>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-runtime-kernel-smoke.cjs:149](<../../../../../../scripts/acceptance/electron-runtime-kernel-smoke.cjs#L149>) — file-import-only; coverage not established.

<a id="s-bbbf0871f6631831"></a>

## validateRunRecord

[electron/ai/run-store.cjs:67](<../../../../../../electron/ai/run-store.cjs#L67>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: validateRunRecord ([electron/ai/run-store.cjs:1](<../../../../../../electron/ai/run-store.cjs#L1>)).

Lexical owner: [electron/ai/run-store.cjs](<run-store.cjs.md#s-bb384cdf10526916>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [validateExperimentalRun](<llm-front-office/conversation-manager.cjs.md#s-ffc7705100d0fefb>) — [electron/ai/run-store.cjs:69](<../../../../../../electron/ai/run-store.cjs#L69>)
- [invalidRecord](<run-store.cjs.md#s-036013bb7de226bd>) — [electron/ai/run-store.cjs:73](<../../../../../../electron/ai/run-store.cjs#L73>)
- [invalidRecord](<run-store.cjs.md#s-036013bb7de226bd>) — [electron/ai/run-store.cjs:104](<../../../../../../electron/ai/run-store.cjs#L104>)
- [parse](<../shared/validation.cjs.md#s-f29367528a73f24d>) — [electron/ai/run-store.cjs:115](<../../../../../../electron/ai/run-store.cjs#L115>)
- [validateContextIdentity](<context-identity.cjs.md#s-074b8d05ecfc17f5>) — [electron/ai/run-store.cjs:134](<../../../../../../electron/ai/run-store.cjs#L134>)
- [engineIdentity](<context-identity.cjs.md#s-aff379835792e773>) — [electron/ai/run-store.cjs:137](<../../../../../../electron/ai/run-store.cjs#L137>)
- [validateEngineIdentity](<context-identity.cjs.md#s-711136150fa5d9a3>) — [electron/ai/run-store.cjs:141](<../../../../../../electron/ai/run-store.cjs#L141>)
- [validateStandaloneIdentity](<context-identity.cjs.md#s-8a60b537748757f1>) — [electron/ai/run-store.cjs:146](<../../../../../../electron/ai/run-store.cjs#L146>)
- [validateEngineIdentity](<context-identity.cjs.md#s-711136150fa5d9a3>) — [electron/ai/run-store.cjs:151](<../../../../../../electron/ai/run-store.cjs#L151>)
- [validateContextIdentity](<context-identity.cjs.md#s-074b8d05ecfc17f5>) — [electron/ai/run-store.cjs:155](<../../../../../../electron/ai/run-store.cjs#L155>)
- [validateSettings](<model-registry.cjs.md#s-f1f9d1092d51054a>) — [electron/ai/run-store.cjs:156](<../../../../../../electron/ai/run-store.cjs#L156>)
- [invalidRecord](<run-store.cjs.md#s-036013bb7de226bd>) — [electron/ai/run-store.cjs:164](<../../../../../../electron/ai/run-store.cjs#L164>)
- [invalidRecord](<run-store.cjs.md#s-036013bb7de226bd>) — [electron/ai/run-store.cjs:170](<../../../../../../electron/ai/run-store.cjs#L170>)
- [invalidRecord](<run-store.cjs.md#s-036013bb7de226bd>) — [electron/ai/run-store.cjs:179](<../../../../../../electron/ai/run-store.cjs#L179>)
- [invalidRecord](<run-store.cjs.md#s-036013bb7de226bd>) — [electron/ai/run-store.cjs:181](<../../../../../../electron/ai/run-store.cjs#L181>)
- [invalidRecord](<run-store.cjs.md#s-036013bb7de226bd>) — [electron/ai/run-store.cjs:189](<../../../../../../electron/ai/run-store.cjs#L189>)
- [invalidRecord](<run-store.cjs.md#s-036013bb7de226bd>) — [electron/ai/run-store.cjs:197](<../../../../../../electron/ai/run-store.cjs#L197>)
- [invalidRecord](<run-store.cjs.md#s-036013bb7de226bd>) — [electron/ai/run-store.cjs:199](<../../../../../../electron/ai/run-store.cjs#L199>)
- [invalidRecord](<run-store.cjs.md#s-036013bb7de226bd>) — [electron/ai/run-store.cjs:206](<../../../../../../electron/ai/run-store.cjs#L206>)
- [invalidRecord](<run-store.cjs.md#s-036013bb7de226bd>) — [electron/ai/run-store.cjs:208](<../../../../../../electron/ai/run-store.cjs#L208>)
- [invalidRecord](<run-store.cjs.md#s-036013bb7de226bd>) — [electron/ai/run-store.cjs:213](<../../../../../../electron/ai/run-store.cjs#L213>)
- [invalidRecord](<run-store.cjs.md#s-036013bb7de226bd>) — [electron/ai/run-store.cjs:228](<../../../../../../electron/ai/run-store.cjs#L228>)
- [invalidRecord](<run-store.cjs.md#s-036013bb7de226bd>) — [electron/ai/run-store.cjs:230](<../../../../../../electron/ai/run-store.cjs#L230>)
- [invalidRecord](<run-store.cjs.md#s-036013bb7de226bd>) — [electron/ai/run-store.cjs:243](<../../../../../../electron/ai/run-store.cjs#L243>)
- [invalidRecord](<run-store.cjs.md#s-036013bb7de226bd>) — [electron/ai/run-store.cjs:250](<../../../../../../electron/ai/run-store.cjs#L250>)
- [invalidRecord](<run-store.cjs.md#s-036013bb7de226bd>) — [electron/ai/run-store.cjs:264](<../../../../../../electron/ai/run-store.cjs#L264>)
- [invalidRecord](<run-store.cjs.md#s-036013bb7de226bd>) — [electron/ai/run-store.cjs:270](<../../../../../../electron/ai/run-store.cjs#L270>)
- [validateError](<run-store.cjs.md#s-e6b14c2b196d5574>) — [electron/ai/run-store.cjs:307](<../../../../../../electron/ai/run-store.cjs#L307>)

**Called by (statically resolved):**

- [readCompletedRun](<research-knowledge.cjs.md#s-ff24b848b76d8433>) — [electron/ai/research-knowledge.cjs:24](<../../../../../../electron/ai/research-knowledge.cjs#L24>)
- [createModelRun](<run-store.cjs.md#s-0abf05c0db6341b7>) — [electron/ai/run-store.cjs:318](<../../../../../../electron/ai/run-store.cjs#L318>)
- [readModelRun](<run-store.cjs.md#s-260afe334a71b9ae>) — [electron/ai/run-store.cjs:365](<../../../../../../electron/ai/run-store.cjs#L365>)
- [&lt;anonymous@139:55&gt;.&lt;anonymous@141:5&gt;](<run-store.test.cjs.md#s-19801996160e59bd>) — [electron/ai/run-store.test.cjs:142](<../../../../../../electron/ai/run-store.test.cjs#L142>)
- [&lt;anonymous@139:55&gt;.&lt;anonymous@146:5&gt;](<run-store.test.cjs.md#s-9dd78cd21486ead2>) — [electron/ai/run-store.test.cjs:146](<../../../../../../electron/ai/run-store.test.cjs#L146>)
- [&lt;anonymous@139:55&gt;](<run-store.test.cjs.md#s-f63e55db0e0beef0>) — [electron/ai/run-store.test.cjs:149](<../../../../../../electron/ai/run-store.test.cjs#L149>)

Unresolved / external call sites: 43.

- require — module-loader; [electron/ai/run-store.cjs:69](<../../../../../../electron/ai/run-store.cjs#L69>)
- Array.isArray — external-or-dynamic-dispatch; [electron/ai/run-store.cjs:72](<../../../../../../electron/ai/run-store.cjs#L72>)
- Set — external-or-dynamic-dispatch; [electron/ai/run-store.cjs:74](<../../../../../../electron/ai/run-store.cjs#L74>)
- Object.keys(value).filter — external-or-dynamic-dispatch; [electron/ai/run-store.cjs:102](<../../../../../../electron/ai/run-store.cjs#L102>)
- Object.keys — external-or-dynamic-dispatch; [electron/ai/run-store.cjs:102](<../../../../../../electron/ai/run-store.cjs#L102>)
- Error — external-or-dynamic-dispatch; [electron/ai/run-store.cjs:113](<../../../../../../electron/ai/run-store.cjs#L113>)
- require — module-loader; [electron/ai/run-store.cjs:115](<../../../../../../electron/ai/run-store.cjs#L115>)
- require("./schemas.cjs") .z.array(require("./engine-chat.cjs").reportSchema) .max — external-or-dynamic-dispatch; [electron/ai/run-store.cjs:116](<../../../../../../electron/ai/run-store.cjs#L116>)
- 35 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/run-store.test.cjs:142](<../../../../../../electron/ai/run-store.test.cjs#L142>) — static-call-site; coverage not established.
- [electron/ai/run-store.test.cjs:146](<../../../../../../electron/ai/run-store.test.cjs#L146>) — static-call-site; coverage not established.
- [electron/ai/run-store.test.cjs:149](<../../../../../../electron/ai/run-store.test.cjs#L149>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:34](<../../../../../../electron/ai/front-office-engine.test.cjs#L34>) — file-import-only; coverage not established.
- [electron/ai/run-store.test.cjs:13](<../../../../../../electron/ai/run-store.test.cjs#L13>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-runtime-kernel-smoke.cjs:149](<../../../../../../scripts/acceptance/electron-runtime-kernel-smoke.cjs#L149>) — file-import-only; coverage not established.

<a id="s-e733f47499a1357d"></a>

## validateRunRecord.&lt;anonymous@102:45&gt;

[electron/ai/run-store.cjs:102](<../../../../../../electron/ai/run-store.cjs#L102>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [validateRunRecord](<run-store.cjs.md#s-bbbf0871f6631831>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| field | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- allowed.has — external-or-dynamic-dispatch; [electron/ai/run-store.cjs:102](<../../../../../../electron/ai/run-store.cjs#L102>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:34](<../../../../../../electron/ai/front-office-engine.test.cjs#L34>) — file-import-only; coverage not established.
- [electron/ai/run-store.test.cjs:13](<../../../../../../electron/ai/run-store.test.cjs#L13>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-runtime-kernel-smoke.cjs:149](<../../../../../../scripts/acceptance/electron-runtime-kernel-smoke.cjs#L149>) — file-import-only; coverage not established.

<a id="s-020e36d18ff224e2"></a>

## validateRunRecord.&lt;anonymous@225:7&gt;

[electron/ai/run-store.cjs:225](<../../../../../../electron/ai/run-store.cjs#L225>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [validateRunRecord](<run-store.cjs.md#s-bbbf0871f6631831>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| item | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:34](<../../../../../../electron/ai/front-office-engine.test.cjs#L34>) — file-import-only; coverage not established.
- [electron/ai/run-store.test.cjs:13](<../../../../../../electron/ai/run-store.test.cjs#L13>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-runtime-kernel-smoke.cjs:149](<../../../../../../scripts/acceptance/electron-runtime-kernel-smoke.cjs#L149>) — file-import-only; coverage not established.

<a id="s-68b1c0ae1b3c2b89"></a>

## validateRunRecord.&lt;anonymous@258:9&gt;

[electron/ai/run-store.cjs:258](<../../../../../../electron/ai/run-store.cjs#L258>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [validateRunRecord](<run-store.cjs.md#s-bbbf0871f6631831>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| field | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- &#91;"promptTokens", "completionTokens", "totalDurationNs"&#93;.includes — external-or-dynamic-dispatch; [electron/ai/run-store.cjs:259](<../../../../../../electron/ai/run-store.cjs#L259>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:34](<../../../../../../electron/ai/front-office-engine.test.cjs#L34>) — file-import-only; coverage not established.
- [electron/ai/run-store.test.cjs:13](<../../../../../../electron/ai/run-store.test.cjs#L13>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-runtime-kernel-smoke.cjs:149](<../../../../../../scripts/acceptance/electron-runtime-kernel-smoke.cjs#L149>) — file-import-only; coverage not established.

<a id="s-1f3851bb2ef435ea"></a>

## validateRunRecord.&lt;anonymous@298:50&gt;

[electron/ai/run-store.cjs:298](<../../../../../../electron/ai/run-store.cjs#L298>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [validateRunRecord](<run-store.cjs.md#s-bbbf0871f6631831>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| source | any | compiler-inferred | required |

Returns: { sourceId: any; relativePath: any; contentHash: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [validateSource](<run-store.cjs.md#s-68ee11c53d343d45>) — [electron/ai/run-store.cjs:299](<../../../../../../electron/ai/run-store.cjs#L299>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:34](<../../../../../../electron/ai/front-office-engine.test.cjs#L34>) — file-import-only; coverage not established.
- [electron/ai/run-store.test.cjs:13](<../../../../../../electron/ai/run-store.test.cjs#L13>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-runtime-kernel-smoke.cjs:149](<../../../../../../scripts/acceptance/electron-runtime-kernel-smoke.cjs#L149>) — file-import-only; coverage not established.

<a id="s-0d7b06188ddbe91b"></a>

## validateRunRecord.&lt;anonymous@301:56&gt;

[electron/ai/run-store.cjs:301](<../../../../../../electron/ai/run-store.cjs#L301>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [validateRunRecord](<run-store.cjs.md#s-bbbf0871f6631831>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| source | any | compiler-inferred | required |

Returns: { sourceId: any; relativePath: any; contentHash: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [validateSource](<run-store.cjs.md#s-68ee11c53d343d45>) — [electron/ai/run-store.cjs:302](<../../../../../../electron/ai/run-store.cjs#L302>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:34](<../../../../../../electron/ai/front-office-engine.test.cjs#L34>) — file-import-only; coverage not established.
- [electron/ai/run-store.test.cjs:13](<../../../../../../electron/ai/run-store.test.cjs#L13>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-runtime-kernel-smoke.cjs:149](<../../../../../../scripts/acceptance/electron-runtime-kernel-smoke.cjs#L149>) — file-import-only; coverage not established.

<a id="s-0a5612351c581798"></a>

## runPath

[electron/ai/run-store.cjs:311](<../../../../../../electron/ai/run-store.cjs#L311>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/run-store.cjs](<run-store.cjs.md#s-bb384cdf10526916>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| rootPath | any | compiler-inferred | required |
| runId | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invalidRecord](<run-store.cjs.md#s-036013bb7de226bd>) — [electron/ai/run-store.cjs:313](<../../../../../../electron/ai/run-store.cjs#L313>)
- [runsDirectory](<run-store.cjs.md#s-690bb4b0ae786720>) — [electron/ai/run-store.cjs:314](<../../../../../../electron/ai/run-store.cjs#L314>)

**Called by (statically resolved):**

- [createModelRun](<run-store.cjs.md#s-0abf05c0db6341b7>) — [electron/ai/run-store.cjs:321](<../../../../../../electron/ai/run-store.cjs#L321>)
- [readModelRun](<run-store.cjs.md#s-260afe334a71b9ae>) — [electron/ai/run-store.cjs:364](<../../../../../../electron/ai/run-store.cjs#L364>)
- [readModelRun](<run-store.cjs.md#s-260afe334a71b9ae>) — [electron/ai/run-store.cjs:366](<../../../../../../electron/ai/run-store.cjs#L366>)

Unresolved / external call sites: 2.

- RUN_ID_PATTERN.test — external-or-dynamic-dispatch; [electron/ai/run-store.cjs:312](<../../../../../../electron/ai/run-store.cjs#L312>)
- path.join — external-or-dynamic-dispatch; [electron/ai/run-store.cjs:314](<../../../../../../electron/ai/run-store.cjs#L314>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:34](<../../../../../../electron/ai/front-office-engine.test.cjs#L34>) — file-import-only; coverage not established.
- [electron/ai/run-store.test.cjs:13](<../../../../../../electron/ai/run-store.test.cjs#L13>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-runtime-kernel-smoke.cjs:149](<../../../../../../scripts/acceptance/electron-runtime-kernel-smoke.cjs#L149>) — file-import-only; coverage not established.

<a id="s-0abf05c0db6341b7"></a>

## createModelRun

[electron/ai/run-store.cjs:317](<../../../../../../electron/ai/run-store.cjs#L317>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: createModelRun ([electron/ai/run-store.cjs:1](<../../../../../../electron/ai/run-store.cjs#L1>)).

Lexical owner: [electron/ai/run-store.cjs](<run-store.cjs.md#s-bb384cdf10526916>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| rootPath | any | compiler-inferred | required |
| rawRecord | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [validateRunRecord](<run-store.cjs.md#s-bbbf0871f6631831>) — [electron/ai/run-store.cjs:318](<../../../../../../electron/ai/run-store.cjs#L318>)
- [runsDirectory](<run-store.cjs.md#s-690bb4b0ae786720>) — [electron/ai/run-store.cjs:319](<../../../../../../electron/ai/run-store.cjs#L319>)
- [safeDirectory](<../core/persistence/json-store.cjs.md#s-429fa54bc1a890a0>) — [electron/ai/run-store.cjs:320](<../../../../../../electron/ai/run-store.cjs#L320>)
- [runPath](<run-store.cjs.md#s-0a5612351c581798>) — [electron/ai/run-store.cjs:321](<../../../../../../electron/ai/run-store.cjs#L321>)
- [ModelRuntimeError.constructor](<../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/run-store.cjs:338](<../../../../../../electron/ai/run-store.cjs#L338>)
- [ModelRuntimeError.constructor](<../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/run-store.cjs:348](<../../../../../../electron/ai/run-store.cjs#L348>)

**Called by (statically resolved):**

- [FrontOfficeService.run](<llm-front-office/service.cjs.md#s-3bd2f92cf25a76d2>) — [electron/ai/llm-front-office/service.cjs:558](<../../../../../../electron/ai/llm-front-office/service.cjs#L558>)
- [FrontOfficeService.run](<llm-front-office/service.cjs.md#s-3bd2f92cf25a76d2>) — [electron/ai/llm-front-office/service.cjs:674](<../../../../../../electron/ai/llm-front-office/service.cjs#L674>)
- [&lt;anonymous@67:90&gt;.&lt;anonymous@68:19&gt;](<run-store.test.cjs.md#s-5d6ef5752ae8c7f2>) — [electron/ai/run-store.test.cjs:77](<../../../../../../electron/ai/run-store.test.cjs#L77>)
- [&lt;anonymous@67:90&gt;.&lt;anonymous@68:19&gt;](<run-store.test.cjs.md#s-5d6ef5752ae8c7f2>) — [electron/ai/run-store.test.cjs:78](<../../../../../../electron/ai/run-store.test.cjs#L78>)
- [&lt;anonymous@105:78&gt;.&lt;anonymous@106:19&gt;](<run-store.test.cjs.md#s-f7325814822f8385>) — [electron/ai/run-store.test.cjs:110](<../../../../../../electron/ai/run-store.test.cjs#L110>)
- [&lt;anonymous@105:78&gt;.&lt;anonymous@106:19&gt;](<run-store.test.cjs.md#s-f7325814822f8385>) — [electron/ai/run-store.test.cjs:111](<../../../../../../electron/ai/run-store.test.cjs#L111>)
- [&lt;anonymous@105:78&gt;.&lt;anonymous@106:19&gt;.&lt;anonymous@129:7&gt;](<run-store.test.cjs.md#s-ba1006fcffa13769>) — [electron/ai/run-store.test.cjs:129](<../../../../../../electron/ai/run-store.test.cjs#L129>)
- [main.recordRun](<../../scripts/m72-live-proof.cjs.md#s-13d5c2894751c7b3>) — [scripts/m72-live-proof.cjs:35](<../../../../../../scripts/m72-live-proof.cjs#L35>)

Unresolved / external call sites: 12.

- path.join — external-or-dynamic-dispatch; [electron/ai/run-store.cjs:322](<../../../../../../electron/ai/run-store.cjs#L322>)
- crypto.randomUUID — external-or-dynamic-dispatch; [electron/ai/run-store.cjs:324](<../../../../../../electron/ai/run-store.cjs#L324>)
- fs.open — external-or-dynamic-dispatch; [electron/ai/run-store.cjs:327](<../../../../../../electron/ai/run-store.cjs#L327>)
- file.writeFile — external-or-dynamic-dispatch; [electron/ai/run-store.cjs:329](<../../../../../../electron/ai/run-store.cjs#L329>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/ai/run-store.cjs:329](<../../../../../../electron/ai/run-store.cjs#L329>)
- file.sync — external-or-dynamic-dispatch; [electron/ai/run-store.cjs:330](<../../../../../../electron/ai/run-store.cjs#L330>)
- file.close — external-or-dynamic-dispatch; [electron/ai/run-store.cjs:332](<../../../../../../electron/ai/run-store.cjs#L332>)
- fs.link — external-or-dynamic-dispatch; [electron/ai/run-store.cjs:335](<../../../../../../electron/ai/run-store.cjs#L335>)
- 4 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/run-store.test.cjs:77](<../../../../../../electron/ai/run-store.test.cjs#L77>) — static-call-site; coverage not established.
- [electron/ai/run-store.test.cjs:78](<../../../../../../electron/ai/run-store.test.cjs#L78>) — static-call-site; coverage not established.
- [electron/ai/run-store.test.cjs:110](<../../../../../../electron/ai/run-store.test.cjs#L110>) — static-call-site; coverage not established.
- [electron/ai/run-store.test.cjs:111](<../../../../../../electron/ai/run-store.test.cjs#L111>) — static-call-site; coverage not established.
- [electron/ai/run-store.test.cjs:129](<../../../../../../electron/ai/run-store.test.cjs#L129>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:34](<../../../../../../electron/ai/front-office-engine.test.cjs#L34>) — file-import-only; coverage not established.
- [electron/ai/run-store.test.cjs:13](<../../../../../../electron/ai/run-store.test.cjs#L13>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-runtime-kernel-smoke.cjs:149](<../../../../../../scripts/acceptance/electron-runtime-kernel-smoke.cjs#L149>) — file-import-only; coverage not established.

<a id="s-36e2fea28364449a"></a>

## createModelRun.&lt;anonymous@357:51&gt;

[electron/ai/run-store.cjs:357](<../../../../../../electron/ai/run-store.cjs#L357>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createModelRun](<run-store.cjs.md#s-0abf05c0db6341b7>).

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

- [electron/ai/front-office-engine.test.cjs:34](<../../../../../../electron/ai/front-office-engine.test.cjs#L34>) — file-import-only; coverage not established.
- [electron/ai/run-store.test.cjs:13](<../../../../../../electron/ai/run-store.test.cjs#L13>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-runtime-kernel-smoke.cjs:149](<../../../../../../scripts/acceptance/electron-runtime-kernel-smoke.cjs#L149>) — file-import-only; coverage not established.

<a id="s-260afe334a71b9ae"></a>

## readModelRun

[electron/ai/run-store.cjs:361](<../../../../../../electron/ai/run-store.cjs#L361>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: readModelRun ([electron/ai/run-store.cjs:1](<../../../../../../electron/ai/run-store.cjs#L1>)).

Lexical owner: [electron/ai/run-store.cjs](<run-store.cjs.md#s-bb384cdf10526916>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| rootPath | any | compiler-inferred | required |
| runId | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [safeDirectory](<../core/persistence/json-store.cjs.md#s-429fa54bc1a890a0>) — [electron/ai/run-store.cjs:363](<../../../../../../electron/ai/run-store.cjs#L363>)
- [runsDirectory](<run-store.cjs.md#s-690bb4b0ae786720>) — [electron/ai/run-store.cjs:363](<../../../../../../electron/ai/run-store.cjs#L363>)
- [rejectSymlink](<../core/persistence/json-store.cjs.md#s-aaddc8aab5c0d073>) — [electron/ai/run-store.cjs:364](<../../../../../../electron/ai/run-store.cjs#L364>)
- [runPath](<run-store.cjs.md#s-0a5612351c581798>) — [electron/ai/run-store.cjs:364](<../../../../../../electron/ai/run-store.cjs#L364>)
- [validateRunRecord](<run-store.cjs.md#s-bbbf0871f6631831>) — [electron/ai/run-store.cjs:365](<../../../../../../electron/ai/run-store.cjs#L365>)
- [runPath](<run-store.cjs.md#s-0a5612351c581798>) — [electron/ai/run-store.cjs:366](<../../../../../../electron/ai/run-store.cjs#L366>)
- [ModelRuntimeError.constructor](<../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/run-store.cjs:371](<../../../../../../electron/ai/run-store.cjs#L371>)
- [ModelRuntimeError.constructor](<../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/run-store.cjs:376](<../../../../../../electron/ai/run-store.cjs#L376>)

**Called by (statically resolved):**

- [ChatService.store.&lt;anonymous@38:24&gt;.&lt;anonymous@39:51&gt;](<chat/chat-service.cjs.md#s-0e2f5a89fe0c69df>) — [electron/ai/chat/chat-service.cjs:40](<../../../../../../electron/ai/chat/chat-service.cjs#L40>)
- [&lt;anonymous@771:94&gt;](<front-office-engine.test.cjs.md#s-db12cb58f6c5d9ba>) — [electron/ai/front-office-engine.test.cjs:785](<../../../../../../electron/ai/front-office-engine.test.cjs#L785>)
- [&lt;anonymous@952:91&gt;](<front-office-engine.test.cjs.md#s-d79d5fd0efe45e42>) — [electron/ai/front-office-engine.test.cjs:966](<../../../../../../electron/ai/front-office-engine.test.cjs#L966>)
- [FrontOfficeService.run](<llm-front-office/service.cjs.md#s-3bd2f92cf25a76d2>) — [electron/ai/llm-front-office/service.cjs:384](<../../../../../../electron/ai/llm-front-office/service.cjs#L384>)
- [listModelRuns](<run-store.cjs.md#s-4c5761eaea31276f>) — [electron/ai/run-store.cjs:398](<../../../../../../electron/ai/run-store.cjs#L398>)
- [&lt;anonymous@67:90&gt;.&lt;anonymous@68:19&gt;](<run-store.test.cjs.md#s-5d6ef5752ae8c7f2>) — [electron/ai/run-store.test.cjs:79](<../../../../../../electron/ai/run-store.test.cjs#L79>)
- [&lt;anonymous@105:78&gt;.&lt;anonymous@106:19&gt;](<run-store.test.cjs.md#s-f7325814822f8385>) — [electron/ai/run-store.test.cjs:125](<../../../../../../electron/ai/run-store.test.cjs#L125>)
- [&lt;anonymous@105:78&gt;.&lt;anonymous@106:19&gt;](<run-store.test.cjs.md#s-f7325814822f8385>) — [electron/ai/run-store.test.cjs:133](<../../../../../../electron/ai/run-store.test.cjs#L133>)
- [&lt;anonymous@164:68&gt;.&lt;anonymous@165:19&gt;.&lt;anonymous@167:7&gt;](<run-store.test.cjs.md#s-20da3b7d604efe75>) — [electron/ai/run-store.test.cjs:167](<../../../../../../electron/ai/run-store.test.cjs#L167>)
- [&lt;anonymous@164:68&gt;.&lt;anonymous@165:19&gt;.&lt;anonymous@174:7&gt;](<run-store.test.cjs.md#s-31f7b00bcde66e5b>) — [electron/ai/run-store.test.cjs:174](<../../../../../../electron/ai/run-store.test.cjs#L174>)
- [main](<../../scripts/acceptance/electron-runtime-kernel-smoke.cjs.md#s-9fe00ff0bf6fc15c>) — [scripts/acceptance/electron-runtime-kernel-smoke.cjs:149](<../../../../../../scripts/acceptance/electron-runtime-kernel-smoke.cjs#L149>)
- [main](<../../scripts/nvidia-agent-live.cjs.md#s-8cf215b42662a709>) — [scripts/nvidia-agent-live.cjs:125](<../../../../../../scripts/nvidia-agent-live.cjs#L125>)

Unresolved / external call sites: 2.

- JSON.parse — external-or-dynamic-dispatch; [electron/ai/run-store.cjs:366](<../../../../../../electron/ai/run-store.cjs#L366>)
- fs.readFile — external-or-dynamic-dispatch; [electron/ai/run-store.cjs:366](<../../../../../../electron/ai/run-store.cjs#L366>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:785](<../../../../../../electron/ai/front-office-engine.test.cjs#L785>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:966](<../../../../../../electron/ai/front-office-engine.test.cjs#L966>) — static-call-site; coverage not established.
- [electron/ai/run-store.test.cjs:79](<../../../../../../electron/ai/run-store.test.cjs#L79>) — static-call-site; coverage not established.
- [electron/ai/run-store.test.cjs:125](<../../../../../../electron/ai/run-store.test.cjs#L125>) — static-call-site; coverage not established.
- [electron/ai/run-store.test.cjs:133](<../../../../../../electron/ai/run-store.test.cjs#L133>) — static-call-site; coverage not established.
- [electron/ai/run-store.test.cjs:167](<../../../../../../electron/ai/run-store.test.cjs#L167>) — static-call-site; coverage not established.
- [electron/ai/run-store.test.cjs:174](<../../../../../../electron/ai/run-store.test.cjs#L174>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-runtime-kernel-smoke.cjs:149](<../../../../../../scripts/acceptance/electron-runtime-kernel-smoke.cjs#L149>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:34](<../../../../../../electron/ai/front-office-engine.test.cjs#L34>) — file-import-only; coverage not established.
- [electron/ai/run-store.test.cjs:13](<../../../../../../electron/ai/run-store.test.cjs#L13>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-runtime-kernel-smoke.cjs:149](<../../../../../../scripts/acceptance/electron-runtime-kernel-smoke.cjs#L149>) — file-import-only; coverage not established.

<a id="s-4c5761eaea31276f"></a>

## listModelRuns

[electron/ai/run-store.cjs:384](<../../../../../../electron/ai/run-store.cjs#L384>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: listModelRuns ([electron/ai/run-store.cjs:1](<../../../../../../electron/ai/run-store.cjs#L1>)).

Lexical owner: [electron/ai/run-store.cjs](<run-store.cjs.md#s-bb384cdf10526916>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| rootPath | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [runsDirectory](<run-store.cjs.md#s-690bb4b0ae786720>) — [electron/ai/run-store.cjs:387](<../../../../../../electron/ai/run-store.cjs#L387>)
- [readModelRun](<run-store.cjs.md#s-260afe334a71b9ae>) — [electron/ai/run-store.cjs:398](<../../../../../../electron/ai/run-store.cjs#L398>)

**Called by (statically resolved):**

- [&lt;anonymous@67:90&gt;.&lt;anonymous@68:19&gt;](<run-store.test.cjs.md#s-5d6ef5752ae8c7f2>) — [electron/ai/run-store.test.cjs:81](<../../../../../../electron/ai/run-store.test.cjs#L81>)
- [main](<../../scripts/m72-live-proof.cjs.md#s-1bf125f268bf686d>) — [scripts/m72-live-proof.cjs:49](<../../../../../../scripts/m72-live-proof.cjs#L49>)

Unresolved / external call sites: 6.

- fs.readdir — external-or-dynamic-dispatch; [electron/ai/run-store.cjs:387](<../../../../../../electron/ai/run-store.cjs#L387>)
- entries .filter((item) =&gt; item.isFile() && item.name.endsWith(".json")) .sort — external-or-dynamic-dispatch; [electron/ai/run-store.cjs:395](<../../../../../../electron/ai/run-store.cjs#L395>)
- entries .filter — external-or-dynamic-dispatch; [electron/ai/run-store.cjs:395](<../../../../../../electron/ai/run-store.cjs#L395>)
- records.push — external-or-dynamic-dispatch; [electron/ai/run-store.cjs:398](<../../../../../../electron/ai/run-store.cjs#L398>)
- entry.name.slice — external-or-dynamic-dispatch; [electron/ai/run-store.cjs:398](<../../../../../../electron/ai/run-store.cjs#L398>)
- records.sort — external-or-dynamic-dispatch; [electron/ai/run-store.cjs:399](<../../../../../../electron/ai/run-store.cjs#L399>)

**Related tests / acceptance harnesses:**

- [electron/ai/run-store.test.cjs:81](<../../../../../../electron/ai/run-store.test.cjs#L81>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:34](<../../../../../../electron/ai/front-office-engine.test.cjs#L34>) — file-import-only; coverage not established.
- [electron/ai/run-store.test.cjs:13](<../../../../../../electron/ai/run-store.test.cjs#L13>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-runtime-kernel-smoke.cjs:149](<../../../../../../scripts/acceptance/electron-runtime-kernel-smoke.cjs#L149>) — file-import-only; coverage not established.

<a id="s-800af755311f91de"></a>

## listModelRuns.&lt;anonymous@396:13&gt;

[electron/ai/run-store.cjs:396](<../../../../../../electron/ai/run-store.cjs#L396>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [listModelRuns](<run-store.cjs.md#s-4c5761eaea31276f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| item | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- item.isFile — external-or-dynamic-dispatch; [electron/ai/run-store.cjs:396](<../../../../../../electron/ai/run-store.cjs#L396>)
- item.name.endsWith — external-or-dynamic-dispatch; [electron/ai/run-store.cjs:396](<../../../../../../electron/ai/run-store.cjs#L396>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:34](<../../../../../../electron/ai/front-office-engine.test.cjs#L34>) — file-import-only; coverage not established.
- [electron/ai/run-store.test.cjs:13](<../../../../../../electron/ai/run-store.test.cjs#L13>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-runtime-kernel-smoke.cjs:149](<../../../../../../scripts/acceptance/electron-runtime-kernel-smoke.cjs#L149>) — file-import-only; coverage not established.

<a id="s-856b09de3d4b347b"></a>

## listModelRuns.&lt;anonymous@397:11&gt;

[electron/ai/run-store.cjs:397](<../../../../../../electron/ai/run-store.cjs#L397>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [listModelRuns](<run-store.cjs.md#s-4c5761eaea31276f>).

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

- a.name.localeCompare — external-or-dynamic-dispatch; [electron/ai/run-store.cjs:397](<../../../../../../electron/ai/run-store.cjs#L397>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:34](<../../../../../../electron/ai/front-office-engine.test.cjs#L34>) — file-import-only; coverage not established.
- [electron/ai/run-store.test.cjs:13](<../../../../../../electron/ai/run-store.test.cjs#L13>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-runtime-kernel-smoke.cjs:149](<../../../../../../scripts/acceptance/electron-runtime-kernel-smoke.cjs#L149>) — file-import-only; coverage not established.

<a id="s-3ab831117a1d7b10"></a>

## listModelRuns.&lt;anonymous@400:5&gt;

[electron/ai/run-store.cjs:400](<../../../../../../electron/ai/run-store.cjs#L400>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [listModelRuns](<run-store.cjs.md#s-4c5761eaea31276f>).

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

- b.startedAt.localeCompare — external-or-dynamic-dispatch; [electron/ai/run-store.cjs:401](<../../../../../../electron/ai/run-store.cjs#L401>)
- a.runId.localeCompare — external-or-dynamic-dispatch; [electron/ai/run-store.cjs:401](<../../../../../../electron/ai/run-store.cjs#L401>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:34](<../../../../../../electron/ai/front-office-engine.test.cjs#L34>) — file-import-only; coverage not established.
- [electron/ai/run-store.test.cjs:13](<../../../../../../electron/ai/run-store.test.cjs#L13>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-runtime-kernel-smoke.cjs:149](<../../../../../../scripts/acceptance/electron-runtime-kernel-smoke.cjs#L149>) — file-import-only; coverage not established.
