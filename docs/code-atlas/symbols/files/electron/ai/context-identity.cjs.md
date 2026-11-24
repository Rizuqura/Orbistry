# electron/ai/context-identity.cjs: symbols

[Atlas](<../../../../README.md>) / [Retained AI runtime](<../../../../modules/ai-runtime.md>) / [electron/ai/context-identity.cjs:1](<../../../../../../electron/ai/context-identity.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/context-identity.cjs](<context-identity.cjs.md#s-a5e3c396a74cd797>) (Module)
- [contextIdentity](<context-identity.cjs.md#s-9645374bbdc64d1f>) (FunctionDeclaration)
- [contextIdentity.&lt;anonymous@12:7&gt;](<context-identity.cjs.md#s-3c5e97e79b9dedfc>) (ArrowFunction)
- [contextIdentity.&lt;anonymous@23:23&gt;](<context-identity.cjs.md#s-7ea7322533655fba>) (ArrowFunction)
- [contextIdentity.&lt;anonymous@24:23&gt;](<context-identity.cjs.md#s-3a99d9d6c2660ae3>) (ArrowFunction)
- [contextIdentity.&lt;anonymous@31:10&gt;](<context-identity.cjs.md#s-273cef79eb9d2410>) (ArrowFunction)
- [contextIdentity.&lt;anonymous@36:11&gt;](<context-identity.cjs.md#s-7055ce6ba53c5ea6>) (ArrowFunction)
- [validateContextIdentity](<context-identity.cjs.md#s-074b8d05ecfc17f5>) (FunctionDeclaration)
- [validateContextIdentity.&lt;anonymous@51:27&gt;](<context-identity.cjs.md#s-a03bdc177abaf322>) (ArrowFunction)
- [engineIdentity](<context-identity.cjs.md#s-aff379835792e773>) (FunctionDeclaration)
- [validateEngineIdentity](<context-identity.cjs.md#s-711136150fa5d9a3>) (FunctionDeclaration)
- [standaloneIdentity](<context-identity.cjs.md#s-7720b034271dec17>) (FunctionDeclaration)
- [validateStandaloneIdentity](<context-identity.cjs.md#s-8a60b537748757f1>) (FunctionDeclaration)

<a id="s-a5e3c396a74cd797"></a>

## electron/ai/context-identity.cjs

[electron/ai/context-identity.cjs:1](<../../../../../../electron/ai/context-identity.cjs#L1>) · Module · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- require — module-loader; [electron/ai/context-identity.cjs:1](<../../../../../../electron/ai/context-identity.cjs#L1>)
- require — module-loader; [electron/ai/context-identity.cjs:2](<../../../../../../electron/ai/context-identity.cjs#L2>)

**Related tests / acceptance harnesses:**

- [electron/ai/dataset.test.cjs:454](<../../../../../../electron/ai/dataset.test.cjs#L454>) — file-import-only; coverage not established.

<a id="s-9645374bbdc64d1f"></a>

## contextIdentity

[electron/ai/context-identity.cjs:4](<../../../../../../electron/ai/context-identity.cjs#L4>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: contextIdentity ([electron/ai/context-identity.cjs:1](<../../../../../../electron/ai/context-identity.cjs#L1>)).

Lexical owner: [electron/ai/context-identity.cjs](<context-identity.cjs.md#s-a5e3c396a74cd797>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| scope | any | compiler-inferred | required |

Returns: { id: any; mode: any; sources: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ModelRuntimeError.constructor](<../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/context-identity.cjs:26](<../../../../../../electron/ai/context-identity.cjs#L26>)

**Called by (statically resolved):**

- [readManifest](<agents/construction-context.cjs.md#s-471e15a9c60c96c2>) — [electron/ai/agents/construction-context.cjs:40](<../../../../../../electron/ai/agents/construction-context.cjs#L40>)
- [ChatService.context](<chat/chat-service.cjs.md#s-dc1d338e9a4d2e19>) — [electron/ai/chat/chat-service.cjs:133](<../../../../../../electron/ai/chat/chat-service.cjs#L133>)
- [validateContextIdentity](<context-identity.cjs.md#s-074b8d05ecfc17f5>) — [electron/ai/context-identity.cjs:48](<../../../../../../electron/ai/context-identity.cjs#L48>)
- [integration](<dataset.test.cjs.md#s-0b06fdaf93e80ea7>) — [electron/ai/dataset.test.cjs:454](<../../../../../../electron/ai/dataset.test.cjs#L454>)
- [createContextOrchestrator.run](<orchestrator.cjs.md#s-be352215519f7acf>) — [electron/ai/orchestrator.cjs:351](<../../../../../../electron/ai/orchestrator.cjs#L351>)

Unresolved / external call sites: 12.

- Array.isArray — external-or-dynamic-dispatch; [electron/ai/context-identity.cjs:8](<../../../../../../electron/ai/context-identity.cjs#L8>)
- input.some — external-or-dynamic-dispatch; [electron/ai/context-identity.cjs:11](<../../../../../../electron/ai/context-identity.cjs#L11>)
- Set — external-or-dynamic-dispatch; [electron/ai/context-identity.cjs:23](<../../../../../../electron/ai/context-identity.cjs#L23>)
- input.map — external-or-dynamic-dispatch; [electron/ai/context-identity.cjs:23](<../../../../../../electron/ai/context-identity.cjs#L23>)
- Set — external-or-dynamic-dispatch; [electron/ai/context-identity.cjs:24](<../../../../../../electron/ai/context-identity.cjs#L24>)
- input.map — external-or-dynamic-dispatch; [electron/ai/context-identity.cjs:24](<../../../../../../electron/ai/context-identity.cjs#L24>)
- input .map((source) =&gt; ({ sourceId: source.id, relativePath: source.relativePath, contentHash: source.contentHash, })) .sort — external-or-dynamic-dispatch; [electron/ai/context-identity.cjs:30](<../../../../../../electron/ai/context-identity.cjs#L30>)
- input .map — external-or-dynamic-dispatch; [electron/ai/context-identity.cjs:30](<../../../../../../electron/ai/context-identity.cjs#L30>)
- 4 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/dataset.test.cjs:454](<../../../../../../electron/ai/dataset.test.cjs#L454>) — static-call-site; coverage not established.
- [electron/ai/dataset.test.cjs:454](<../../../../../../electron/ai/dataset.test.cjs#L454>) — file-import-only; coverage not established.

<a id="s-3c5e97e79b9dedfc"></a>

## contextIdentity.&lt;anonymous@12:7&gt;

[electron/ai/context-identity.cjs:12](<../../../../../../electron/ai/context-identity.cjs#L12>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [contextIdentity](<context-identity.cjs.md#s-9645374bbdc64d1f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| source | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- SOURCE_TYPES.includes — external-or-dynamic-dispatch; [electron/ai/context-identity.cjs:14](<../../../../../../electron/ai/context-identity.cjs#L14>)
- /^&#91;a-f0-9&#93;{64}$/.test — external-or-dynamic-dispatch; [electron/ai/context-identity.cjs:21](<../../../../../../electron/ai/context-identity.cjs#L21>)

**Related tests / acceptance harnesses:**

- [electron/ai/dataset.test.cjs:454](<../../../../../../electron/ai/dataset.test.cjs#L454>) — file-import-only; coverage not established.

<a id="s-7ea7322533655fba"></a>

## contextIdentity.&lt;anonymous@23:23&gt;

[electron/ai/context-identity.cjs:23](<../../../../../../electron/ai/context-identity.cjs#L23>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [contextIdentity](<context-identity.cjs.md#s-9645374bbdc64d1f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| source | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/dataset.test.cjs:454](<../../../../../../electron/ai/dataset.test.cjs#L454>) — file-import-only; coverage not established.

<a id="s-3a99d9d6c2660ae3"></a>

## contextIdentity.&lt;anonymous@24:23&gt;

[electron/ai/context-identity.cjs:24](<../../../../../../electron/ai/context-identity.cjs#L24>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [contextIdentity](<context-identity.cjs.md#s-9645374bbdc64d1f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| source | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/dataset.test.cjs:454](<../../../../../../electron/ai/dataset.test.cjs#L454>) — file-import-only; coverage not established.

<a id="s-273cef79eb9d2410"></a>

## contextIdentity.&lt;anonymous@31:10&gt;

[electron/ai/context-identity.cjs:31](<../../../../../../electron/ai/context-identity.cjs#L31>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [contextIdentity](<context-identity.cjs.md#s-9645374bbdc64d1f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| source | any | compiler-inferred | required |

Returns: { sourceId: any; relativePath: any; contentHash: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/dataset.test.cjs:454](<../../../../../../electron/ai/dataset.test.cjs#L454>) — file-import-only; coverage not established.

<a id="s-7055ce6ba53c5ea6"></a>

## contextIdentity.&lt;anonymous@36:11&gt;

[electron/ai/context-identity.cjs:36](<../../../../../../electron/ai/context-identity.cjs#L36>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [contextIdentity](<context-identity.cjs.md#s-9645374bbdc64d1f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| a | any | compiler-inferred | required |
| b | any | compiler-inferred | required |

Returns: 0 &#124; 1 &#124; -1 (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/dataset.test.cjs:454](<../../../../../../electron/ai/dataset.test.cjs#L454>) — file-import-only; coverage not established.

<a id="s-074b8d05ecfc17f5"></a>

## validateContextIdentity

[electron/ai/context-identity.cjs:47](<../../../../../../electron/ai/context-identity.cjs#L47>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: validateContextIdentity ([electron/ai/context-identity.cjs:1](<../../../../../../electron/ai/context-identity.cjs#L1>)).

Lexical owner: [electron/ai/context-identity.cjs](<context-identity.cjs.md#s-a5e3c396a74cd797>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: { id: any; mode: any; sources: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [contextIdentity](<context-identity.cjs.md#s-9645374bbdc64d1f>) — [electron/ai/context-identity.cjs:48](<../../../../../../electron/ai/context-identity.cjs#L48>)
- [ModelRuntimeError.constructor](<../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/context-identity.cjs:60](<../../../../../../electron/ai/context-identity.cjs#L60>)

**Called by (statically resolved):**

- [validateConstruction](<agents/agent-construction.cjs.md#s-c40c24f689846a0d>) — [electron/ai/agents/agent-construction.cjs:299](<../../../../../../electron/ai/agents/agent-construction.cjs#L299>)
- [validateConstruction](<agents/agent-construction.cjs.md#s-c40c24f689846a0d>) — [electron/ai/agents/agent-construction.cjs:305](<../../../../../../electron/ai/agents/agent-construction.cjs#L305>)
- [loadBox](<agents/construction-context.cjs.md#s-4f4ef58489b1d9b8>) — [electron/ai/agents/construction-context.cjs:51](<../../../../../../electron/ai/agents/construction-context.cjs#L51>)
- [readFile](<agents/construction-context.cjs.md#s-92e0b43be6c8bdfa>) — [electron/ai/agents/construction-context.cjs:99](<../../../../../../electron/ai/agents/construction-context.cjs#L99>)
- [validateConversation](<chat/conversation-store.cjs.md#s-8fcc95a0b5a57e3e>) — [electron/ai/chat/conversation-store.cjs:36](<../../../../../../electron/ai/chat/conversation-store.cjs#L36>)
- [validateConversation](<chat/conversation-store.cjs.md#s-8fcc95a0b5a57e3e>) — [electron/ai/chat/conversation-store.cjs:99](<../../../../../../electron/ai/chat/conversation-store.cjs#L99>)
- [validate](<context-box-store.cjs.md#s-6076c42dec9c7758>) — [electron/ai/context-box-store.cjs:33](<../../../../../../electron/ai/context-box-store.cjs#L33>)
- [ContextBoxStore.create.&lt;anonymous@106:23&gt;](<context-box-store.cjs.md#s-3fba822d3d33c19c>) — [electron/ai/context-box-store.cjs:107](<../../../../../../electron/ai/context-box-store.cjs#L107>)
- [validateRunRecord](<run-store.cjs.md#s-bbbf0871f6631831>) — [electron/ai/run-store.cjs:134](<../../../../../../electron/ai/run-store.cjs#L134>)
- [validateRunRecord](<run-store.cjs.md#s-bbbf0871f6631831>) — [electron/ai/run-store.cjs:155](<../../../../../../electron/ai/run-store.cjs#L155>)

Unresolved / external call sites: 2.

- Array.isArray — external-or-dynamic-dispatch; [electron/ai/context-identity.cjs:50](<../../../../../../electron/ai/context-identity.cjs#L50>)
- value.sources.map — external-or-dynamic-dispatch; [electron/ai/context-identity.cjs:51](<../../../../../../electron/ai/context-identity.cjs#L51>)

**Related tests / acceptance harnesses:**

- [electron/ai/dataset.test.cjs:454](<../../../../../../electron/ai/dataset.test.cjs#L454>) — file-import-only; coverage not established.

<a id="s-a03bdc177abaf322"></a>

## validateContextIdentity.&lt;anonymous@51:27&gt;

[electron/ai/context-identity.cjs:51](<../../../../../../electron/ai/context-identity.cjs#L51>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [validateContextIdentity](<context-identity.cjs.md#s-074b8d05ecfc17f5>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| item | any | compiler-inferred | required |

Returns: { id: any; relativePath: any; contentHash: any; type: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- item?.relativePath?.split(".").pop()?.toLowerCase — external-or-dynamic-dispatch; [electron/ai/context-identity.cjs:55](<../../../../../../electron/ai/context-identity.cjs#L55>)
- item?.relativePath?.split(".").pop — external-or-dynamic-dispatch; [electron/ai/context-identity.cjs:55](<../../../../../../electron/ai/context-identity.cjs#L55>)
- item?.relativePath?.split — external-or-dynamic-dispatch; [electron/ai/context-identity.cjs:55](<../../../../../../electron/ai/context-identity.cjs#L55>)

**Related tests / acceptance harnesses:**

- [electron/ai/dataset.test.cjs:454](<../../../../../../electron/ai/dataset.test.cjs#L454>) — file-import-only; coverage not established.

<a id="s-aff379835792e773"></a>

## engineIdentity

[electron/ai/context-identity.cjs:67](<../../../../../../electron/ai/context-identity.cjs#L67>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: engineIdentity ([electron/ai/context-identity.cjs:1](<../../../../../../electron/ai/context-identity.cjs#L1>)).

Lexical owner: [electron/ai/context-identity.cjs](<context-identity.cjs.md#s-a5e3c396a74cd797>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| agentId | any | compiler-inferred | required |

Returns: { id: any; mode: string; sources: {}; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [validateEngineIdentity](<context-identity.cjs.md#s-711136150fa5d9a3>) — [electron/ai/context-identity.cjs:77](<../../../../../../electron/ai/context-identity.cjs#L77>)
- [validateRunRecord](<run-store.cjs.md#s-bbbf0871f6631831>) — [electron/ai/run-store.cjs:137](<../../../../../../electron/ai/run-store.cjs#L137>)

Unresolved / external call sites: 4.

- createHash("sha256") .update(JSON.stringify({ mode: "engine-only", agentId })) .digest — external-or-dynamic-dispatch; [electron/ai/context-identity.cjs:69](<../../../../../../electron/ai/context-identity.cjs#L69>)
- createHash("sha256") .update — external-or-dynamic-dispatch; [electron/ai/context-identity.cjs:69](<../../../../../../electron/ai/context-identity.cjs#L69>)
- createHash — external-or-dynamic-dispatch; [electron/ai/context-identity.cjs:69](<../../../../../../electron/ai/context-identity.cjs#L69>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/ai/context-identity.cjs:70](<../../../../../../electron/ai/context-identity.cjs#L70>)

**Related tests / acceptance harnesses:**

- [electron/ai/dataset.test.cjs:454](<../../../../../../electron/ai/dataset.test.cjs#L454>) — file-import-only; coverage not established.

<a id="s-711136150fa5d9a3"></a>

## validateEngineIdentity

[electron/ai/context-identity.cjs:76](<../../../../../../electron/ai/context-identity.cjs#L76>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: validateEngineIdentity ([electron/ai/context-identity.cjs:1](<../../../../../../electron/ai/context-identity.cjs#L1>)).

Lexical owner: [electron/ai/context-identity.cjs](<context-identity.cjs.md#s-a5e3c396a74cd797>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |
| agentId | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [engineIdentity](<context-identity.cjs.md#s-aff379835792e773>) — [electron/ai/context-identity.cjs:77](<../../../../../../electron/ai/context-identity.cjs#L77>)
- [ModelRuntimeError.constructor](<../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/context-identity.cjs:78](<../../../../../../electron/ai/context-identity.cjs#L78>)

**Called by (statically resolved):**

- [validateConversation.&lt;anonymous@61:11&gt;](<chat/conversation-store.cjs.md#s-f23f0b174b12ef85>) — [electron/ai/chat/conversation-store.cjs:62](<../../../../../../electron/ai/chat/conversation-store.cjs#L62>)
- [validateRunRecord](<run-store.cjs.md#s-bbbf0871f6631831>) — [electron/ai/run-store.cjs:141](<../../../../../../electron/ai/run-store.cjs#L141>)
- [validateRunRecord](<run-store.cjs.md#s-bbbf0871f6631831>) — [electron/ai/run-store.cjs:151](<../../../../../../electron/ai/run-store.cjs#L151>)

Unresolved / external call sites: 2.

- JSON.stringify — external-or-dynamic-dispatch; [electron/ai/context-identity.cjs:77](<../../../../../../electron/ai/context-identity.cjs#L77>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/ai/context-identity.cjs:77](<../../../../../../electron/ai/context-identity.cjs#L77>)

**Related tests / acceptance harnesses:**

- [electron/ai/dataset.test.cjs:454](<../../../../../../electron/ai/dataset.test.cjs#L454>) — file-import-only; coverage not established.

<a id="s-7720b034271dec17"></a>

## standaloneIdentity

[electron/ai/context-identity.cjs:84](<../../../../../../electron/ai/context-identity.cjs#L84>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: standaloneIdentity ([electron/ai/context-identity.cjs:1](<../../../../../../electron/ai/context-identity.cjs#L1>)).

Lexical owner: [electron/ai/context-identity.cjs](<context-identity.cjs.md#s-a5e3c396a74cd797>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| agentId | any | compiler-inferred | required |

Returns: { id: any; mode: string; sources: {}; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [ChatService.create.&lt;anonymous@296:27&gt;](<chat/chat-service.cjs.md#s-f9fdaa7c9353ecf7>) — [electron/ai/chat/chat-service.cjs:330](<../../../../../../electron/ai/chat/chat-service.cjs#L330>)
- [validateStandaloneIdentity](<context-identity.cjs.md#s-8a60b537748757f1>) — [electron/ai/context-identity.cjs:94](<../../../../../../electron/ai/context-identity.cjs#L94>)

Unresolved / external call sites: 4.

- createHash("sha256") .update(JSON.stringify({ mode: "standalone-chat", agentId })) .digest — external-or-dynamic-dispatch; [electron/ai/context-identity.cjs:86](<../../../../../../electron/ai/context-identity.cjs#L86>)
- createHash("sha256") .update — external-or-dynamic-dispatch; [electron/ai/context-identity.cjs:86](<../../../../../../electron/ai/context-identity.cjs#L86>)
- createHash — external-or-dynamic-dispatch; [electron/ai/context-identity.cjs:86](<../../../../../../electron/ai/context-identity.cjs#L86>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/ai/context-identity.cjs:87](<../../../../../../electron/ai/context-identity.cjs#L87>)

**Related tests / acceptance harnesses:**

- [electron/ai/dataset.test.cjs:454](<../../../../../../electron/ai/dataset.test.cjs#L454>) — file-import-only; coverage not established.

<a id="s-8a60b537748757f1"></a>

## validateStandaloneIdentity

[electron/ai/context-identity.cjs:93](<../../../../../../electron/ai/context-identity.cjs#L93>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: validateStandaloneIdentity ([electron/ai/context-identity.cjs:1](<../../../../../../electron/ai/context-identity.cjs#L1>)).

Lexical owner: [electron/ai/context-identity.cjs](<context-identity.cjs.md#s-a5e3c396a74cd797>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |
| agentId | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [standaloneIdentity](<context-identity.cjs.md#s-7720b034271dec17>) — [electron/ai/context-identity.cjs:94](<../../../../../../electron/ai/context-identity.cjs#L94>)
- [ModelRuntimeError.constructor](<../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/context-identity.cjs:95](<../../../../../../electron/ai/context-identity.cjs#L95>)

**Called by (statically resolved):**

- [validateConversation.&lt;anonymous@55:9&gt;](<chat/conversation-store.cjs.md#s-98125a64da617cea>) — [electron/ai/chat/conversation-store.cjs:56](<../../../../../../electron/ai/chat/conversation-store.cjs#L56>)
- [validateRunRecord](<run-store.cjs.md#s-bbbf0871f6631831>) — [electron/ai/run-store.cjs:146](<../../../../../../electron/ai/run-store.cjs#L146>)

Unresolved / external call sites: 2.

- JSON.stringify — external-or-dynamic-dispatch; [electron/ai/context-identity.cjs:94](<../../../../../../electron/ai/context-identity.cjs#L94>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/ai/context-identity.cjs:94](<../../../../../../electron/ai/context-identity.cjs#L94>)

**Related tests / acceptance harnesses:**

- [electron/ai/dataset.test.cjs:454](<../../../../../../electron/ai/dataset.test.cjs#L454>) — file-import-only; coverage not established.
