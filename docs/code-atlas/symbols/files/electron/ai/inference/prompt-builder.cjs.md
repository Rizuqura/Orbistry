# electron/ai/inference/prompt-builder.cjs: symbols

[Atlas](<../../../../../README.md>) / [Retained AI runtime](<../../../../../modules/ai-runtime.md>) / [electron/ai/inference/prompt-builder.cjs:1](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/inference/prompt-builder.cjs](<prompt-builder.cjs.md#s-f9c1541bdd9c523a>) (Module)
- [PROMPT_VERSION](<prompt-builder.cjs.md#s-bf08d1f2dcaeaeeb>) (VariableDeclaration)
- [MAX_USER_MESSAGE_CHARS](<prompt-builder.cjs.md#s-eea4354a11150b84>) (VariableDeclaration)
- [MAX_SOURCE_CONTENT_CHARS](<prompt-builder.cjs.md#s-a09b2d32bfe1a91e>) (VariableDeclaration)
- [MAX_SOURCE_MESSAGE_CHARS](<prompt-builder.cjs.md#s-d10ab58bc8574624>) (VariableDeclaration)
- [SYSTEM_PROMPT](<prompt-builder.cjs.md#s-8e8c5a698a460b25>) (VariableDeclaration)
- [invalid](<prompt-builder.cjs.md#s-3198e2eda96d4d7a>) (FunctionDeclaration)
- [validateUserMessage](<prompt-builder.cjs.md#s-79a9e0cb38b78443>) (FunctionDeclaration)
- [validateSource](<prompt-builder.cjs.md#s-83b7cc5039dd7f7b>) (FunctionDeclaration)
- [buildContextMessages](<prompt-builder.cjs.md#s-241c37ad734d8bcd>) (FunctionDeclaration)
- [buildContextMessages.&lt;anonymous@123:21&gt;](<prompt-builder.cjs.md#s-f95606fe8ecd3f4b>) (ArrowFunction)
- [buildContextMessages.&lt;anonymous@130:40&gt;](<prompt-builder.cjs.md#s-c39cb875390db842>) (ArrowFunction)
- [buildContextMessages.&lt;anonymous@160:37&gt;](<prompt-builder.cjs.md#s-6872497066cc2469>) (ArrowFunction)
- [buildContextMessages.&lt;anonymous@172:45&gt;](<prompt-builder.cjs.md#s-a32c5cadbc263bee>) (ArrowFunction)
- [buildContextMessages.&lt;anonymous@187:30&gt;](<prompt-builder.cjs.md#s-515ec88868b5cf94>) (ArrowFunction)

<a id="s-f9c1541bdd9c523a"></a>

## electron/ai/inference/prompt-builder.cjs

[electron/ai/inference/prompt-builder.cjs:1](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L1>) · Module · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- require — module-loader; [electron/ai/inference/prompt-builder.cjs:1](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L1>)
- require — module-loader; [electron/ai/inference/prompt-builder.cjs:5](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L5>)
- require — module-loader; [electron/ai/inference/prompt-builder.cjs:16](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L16>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-store.test.cjs:13](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/ai/inference/prompt-builder.test.cjs:9](<../../../../../../../electron/ai/inference/prompt-builder.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/orchestrator.test.cjs:517](<../../../../../../../electron/ai/orchestrator.test.cjs#L517>) — file-import-only; coverage not established.
- [electron/ai/runtime-context.test.cjs:6](<../../../../../../../electron/ai/runtime-context.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-bf08d1f2dcaeaeeb"></a>

## PROMPT_VERSION

[electron/ai/inference/prompt-builder.cjs:7](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L7>) · VariableDeclaration · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: PROMPT_VERSION ([electron/ai/inference/prompt-builder.cjs:1](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L1>)).

Lexical owner: [electron/ai/inference/prompt-builder.cjs](<prompt-builder.cjs.md#s-f9c1541bdd9c523a>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-store.test.cjs:13](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/ai/inference/prompt-builder.test.cjs:9](<../../../../../../../electron/ai/inference/prompt-builder.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/orchestrator.test.cjs:517](<../../../../../../../electron/ai/orchestrator.test.cjs#L517>) — file-import-only; coverage not established.
- [electron/ai/runtime-context.test.cjs:6](<../../../../../../../electron/ai/runtime-context.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-eea4354a11150b84"></a>

## MAX_USER_MESSAGE_CHARS

[electron/ai/inference/prompt-builder.cjs:8](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L8>) · VariableDeclaration · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: MAX_USER_MESSAGE_CHARS ([electron/ai/inference/prompt-builder.cjs:1](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L1>)).

Lexical owner: [electron/ai/inference/prompt-builder.cjs](<prompt-builder.cjs.md#s-f9c1541bdd9c523a>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-store.test.cjs:13](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/ai/inference/prompt-builder.test.cjs:9](<../../../../../../../electron/ai/inference/prompt-builder.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/orchestrator.test.cjs:517](<../../../../../../../electron/ai/orchestrator.test.cjs#L517>) — file-import-only; coverage not established.
- [electron/ai/runtime-context.test.cjs:6](<../../../../../../../electron/ai/runtime-context.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-a09b2d32bfe1a91e"></a>

## MAX_SOURCE_CONTENT_CHARS

[electron/ai/inference/prompt-builder.cjs:9](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L9>) · VariableDeclaration · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: MAX_SOURCE_CONTENT_CHARS ([electron/ai/inference/prompt-builder.cjs:1](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L1>)).

Lexical owner: [electron/ai/inference/prompt-builder.cjs](<prompt-builder.cjs.md#s-f9c1541bdd9c523a>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-store.test.cjs:13](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/ai/inference/prompt-builder.test.cjs:9](<../../../../../../../electron/ai/inference/prompt-builder.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/orchestrator.test.cjs:517](<../../../../../../../electron/ai/orchestrator.test.cjs#L517>) — file-import-only; coverage not established.
- [electron/ai/runtime-context.test.cjs:6](<../../../../../../../electron/ai/runtime-context.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-d10ab58bc8574624"></a>

## MAX_SOURCE_MESSAGE_CHARS

[electron/ai/inference/prompt-builder.cjs:10](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L10>) · VariableDeclaration · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: MAX_SOURCE_MESSAGE_CHARS ([electron/ai/inference/prompt-builder.cjs:1](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L1>)).

Lexical owner: [electron/ai/inference/prompt-builder.cjs](<prompt-builder.cjs.md#s-f9c1541bdd9c523a>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-store.test.cjs:13](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/ai/inference/prompt-builder.test.cjs:9](<../../../../../../../electron/ai/inference/prompt-builder.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/orchestrator.test.cjs:517](<../../../../../../../electron/ai/orchestrator.test.cjs#L517>) — file-import-only; coverage not established.
- [electron/ai/runtime-context.test.cjs:6](<../../../../../../../electron/ai/runtime-context.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-8e8c5a698a460b25"></a>

## SYSTEM_PROMPT

[electron/ai/inference/prompt-builder.cjs:17](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L17>) · VariableDeclaration · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: SYSTEM_PROMPT ([electron/ai/inference/prompt-builder.cjs:1](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L1>)).

Lexical owner: [electron/ai/inference/prompt-builder.cjs](<prompt-builder.cjs.md#s-f9c1541bdd9c523a>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-store.test.cjs:13](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/ai/inference/prompt-builder.test.cjs:9](<../../../../../../../electron/ai/inference/prompt-builder.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/orchestrator.test.cjs:517](<../../../../../../../electron/ai/orchestrator.test.cjs#L517>) — file-import-only; coverage not established.
- [electron/ai/runtime-context.test.cjs:6](<../../../../../../../electron/ai/runtime-context.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-3198e2eda96d4d7a"></a>

## invalid

[electron/ai/inference/prompt-builder.cjs:19](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L19>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/inference/prompt-builder.cjs](<prompt-builder.cjs.md#s-f9c1541bdd9c523a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| message | any | compiler-inferred | required |
| details | {} | compiler-inferred | optional, default present |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/inference/prompt-builder.cjs:20](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L20>)

**Called by (statically resolved):**

- [validateUserMessage](<prompt-builder.cjs.md#s-79a9e0cb38b78443>) — [electron/ai/inference/prompt-builder.cjs:29](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L29>)
- [validateUserMessage](<prompt-builder.cjs.md#s-79a9e0cb38b78443>) — [electron/ai/inference/prompt-builder.cjs:33](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L33>)
- [validateUserMessage](<prompt-builder.cjs.md#s-79a9e0cb38b78443>) — [electron/ai/inference/prompt-builder.cjs:38](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L38>)
- [validateSource](<prompt-builder.cjs.md#s-83b7cc5039dd7f7b>) — [electron/ai/inference/prompt-builder.cjs:46](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L46>)
- [validateSource](<prompt-builder.cjs.md#s-83b7cc5039dd7f7b>) — [electron/ai/inference/prompt-builder.cjs:49](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L49>)
- [validateSource](<prompt-builder.cjs.md#s-83b7cc5039dd7f7b>) — [electron/ai/inference/prompt-builder.cjs:57](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L57>)
- [validateSource](<prompt-builder.cjs.md#s-83b7cc5039dd7f7b>) — [electron/ai/inference/prompt-builder.cjs:66](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L66>)
- [buildContextMessages](<prompt-builder.cjs.md#s-241c37ad734d8bcd>) — [electron/ai/inference/prompt-builder.cjs:102](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L102>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-store.test.cjs:13](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/ai/inference/prompt-builder.test.cjs:9](<../../../../../../../electron/ai/inference/prompt-builder.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/orchestrator.test.cjs:517](<../../../../../../../electron/ai/orchestrator.test.cjs#L517>) — file-import-only; coverage not established.
- [electron/ai/runtime-context.test.cjs:6](<../../../../../../../electron/ai/runtime-context.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-79a9e0cb38b78443"></a>

## validateUserMessage

[electron/ai/inference/prompt-builder.cjs:27](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L27>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: validateUserMessage ([electron/ai/inference/prompt-builder.cjs:1](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L1>)).

Lexical owner: [electron/ai/inference/prompt-builder.cjs](<prompt-builder.cjs.md#s-f9c1541bdd9c523a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invalid](<prompt-builder.cjs.md#s-3198e2eda96d4d7a>) — [electron/ai/inference/prompt-builder.cjs:29](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L29>)
- [invalid](<prompt-builder.cjs.md#s-3198e2eda96d4d7a>) — [electron/ai/inference/prompt-builder.cjs:33](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L33>)
- [invalid](<prompt-builder.cjs.md#s-3198e2eda96d4d7a>) — [electron/ai/inference/prompt-builder.cjs:38](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L38>)

**Called by (statically resolved):**

- [buildContextMessages](<prompt-builder.cjs.md#s-241c37ad734d8bcd>) — [electron/ai/inference/prompt-builder.cjs:100](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L100>)
- [validateRequest](<../orchestrator.cjs.md#s-c803e9de14f05d52>) — [electron/ai/orchestrator.cjs:140](<../../../../../../../electron/ai/orchestrator.cjs#L140>)

Unresolved / external call sites: 3.

- value.trim — external-or-dynamic-dispatch; [electron/ai/inference/prompt-builder.cjs:28](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L28>)
- /\\u0000/u.test — external-or-dynamic-dispatch; [electron/ai/inference/prompt-builder.cjs:37](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L37>)
- value.trim — external-or-dynamic-dispatch; [electron/ai/inference/prompt-builder.cjs:41](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L41>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-store.test.cjs:13](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/ai/inference/prompt-builder.test.cjs:9](<../../../../../../../electron/ai/inference/prompt-builder.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/orchestrator.test.cjs:517](<../../../../../../../electron/ai/orchestrator.test.cjs#L517>) — file-import-only; coverage not established.
- [electron/ai/runtime-context.test.cjs:6](<../../../../../../../electron/ai/runtime-context.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-83b7cc5039dd7f7b"></a>

## validateSource

[electron/ai/inference/prompt-builder.cjs:44](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L44>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/inference/prompt-builder.cjs](<prompt-builder.cjs.md#s-f9c1541bdd9c523a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| source | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invalid](<prompt-builder.cjs.md#s-3198e2eda96d4d7a>) — [electron/ai/inference/prompt-builder.cjs:46](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L46>)
- [invalid](<prompt-builder.cjs.md#s-3198e2eda96d4d7a>) — [electron/ai/inference/prompt-builder.cjs:49](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L49>)
- [invalid](<prompt-builder.cjs.md#s-3198e2eda96d4d7a>) — [electron/ai/inference/prompt-builder.cjs:57](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L57>)
- [invalid](<prompt-builder.cjs.md#s-3198e2eda96d4d7a>) — [electron/ai/inference/prompt-builder.cjs:66](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L66>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/inference/prompt-builder.cjs:74](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L74>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- Array.isArray — external-or-dynamic-dispatch; [electron/ai/inference/prompt-builder.cjs:45](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L45>)
- &#91;"md", "markdown", "csv", "pdf", "png", "jpg", "jpeg"&#93;.includes — external-or-dynamic-dispatch; [electron/ai/inference/prompt-builder.cjs:62](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L62>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-store.test.cjs:13](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/ai/inference/prompt-builder.test.cjs:9](<../../../../../../../electron/ai/inference/prompt-builder.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/orchestrator.test.cjs:517](<../../../../../../../electron/ai/orchestrator.test.cjs#L517>) — file-import-only; coverage not established.
- [electron/ai/runtime-context.test.cjs:6](<../../../../../../../electron/ai/runtime-context.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-241c37ad734d8bcd"></a>

## buildContextMessages

[electron/ai/inference/prompt-builder.cjs:87](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L87>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: buildContextMessages ([electron/ai/inference/prompt-builder.cjs:1](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L1>)).

Lexical owner: [electron/ai/inference/prompt-builder.cjs](<prompt-builder.cjs.md#s-f9c1541bdd9c523a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| {   userMessage,   history = &#91;&#93;,   source,   sources = &#91;source&#93;,   statistics,   customInstructions = "",   agentId = "wonnyy-agent",   agentName,   configurationReferences = &#91;&#93;,   policyHistory = history, } | { userMessage: any; history?: {}; source: any; sources?: {}; statistics: any; customInstructions?: string; agentId?: string; agentName: any; configurationReferences?: {}; policyHistory?: any; } | compiler-inferred | required |

Returns: { promptVersion: string; runtimePolicy: { compactedPolicySources: any; runtimeSystemCharacters: any; kernelVersion: string; kernelHash: any; canonicalPath: string; canonicalHash: any; modules: any; }; evidenceSourceIds: any; messages: {}; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [validateCustomInstructions](<../agents/agent-policy.cjs.md#s-0dbc6d2e83719bfc>) — [electron/ai/inference/prompt-builder.cjs:99](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L99>)
- [validateUserMessage](<prompt-builder.cjs.md#s-79a9e0cb38b78443>) — [electron/ai/inference/prompt-builder.cjs:100](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L100>)
- [invalid](<prompt-builder.cjs.md#s-3198e2eda96d4d7a>) — [electron/ai/inference/prompt-builder.cjs:102](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L102>)
- [selectRuntimeSources](<../runtime-context.cjs.md#s-8df089888e38d14d>) — [electron/ai/inference/prompt-builder.cjs:104](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L104>)
- [runtimePolicy](<../runtime-context.cjs.md#s-7f45e8f2e47d8040>) — [electron/ai/inference/prompt-builder.cjs:110](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L110>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/inference/prompt-builder.cjs:126](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L126>)

**Called by (statically resolved):**

- [&lt;anonymous@354:106&gt;](<../agents/agent-store.test.cjs.md#s-21d0e461e964cadd>) — [electron/ai/agents/agent-store.test.cjs:355](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L355>)
- [&lt;anonymous@354:106&gt;.&lt;anonymous@383:5&gt;](<../agents/agent-store.test.cjs.md#s-4db7a80d9b89b4f2>) — [electron/ai/agents/agent-store.test.cjs:384](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L384>)
- [&lt;anonymous@19:113&gt;](<prompt-builder.test.cjs.md#s-1056869943fe0c0c>) — [electron/ai/inference/prompt-builder.test.cjs:26](<../../../../../../../electron/ai/inference/prompt-builder.test.cjs#L26>)
- [&lt;anonymous@19:113&gt;.&lt;anonymous@38:7&gt;](<prompt-builder.test.cjs.md#s-f8770ef7326a951f>) — [electron/ai/inference/prompt-builder.test.cjs:39](<../../../../../../../electron/ai/inference/prompt-builder.test.cjs#L39>)
- [&lt;anonymous@19:113&gt;.&lt;anonymous@49:7&gt;](<prompt-builder.test.cjs.md#s-1f0d926bc7fc7955>) — [electron/ai/inference/prompt-builder.test.cjs:50](<../../../../../../../electron/ai/inference/prompt-builder.test.cjs#L50>)
- [&lt;anonymous@58:96&gt;](<prompt-builder.test.cjs.md#s-0a14a3bfebd06936>) — [electron/ai/inference/prompt-builder.test.cjs:59](<../../../../../../../electron/ai/inference/prompt-builder.test.cjs#L59>)
- [&lt;anonymous@58:96&gt;](<prompt-builder.test.cjs.md#s-0a14a3bfebd06936>) — [electron/ai/inference/prompt-builder.test.cjs:63](<../../../../../../../electron/ai/inference/prompt-builder.test.cjs#L63>)
- [&lt;anonymous@90:87&gt;](<prompt-builder.test.cjs.md#s-d1e4cf934be59368>) — [electron/ai/inference/prompt-builder.test.cjs:98](<../../../../../../../electron/ai/inference/prompt-builder.test.cjs#L98>)
- [&lt;anonymous@104:82&gt;](<prompt-builder.test.cjs.md#s-f41a3754913cbdf9>) — [electron/ai/inference/prompt-builder.test.cjs:109](<../../../../../../../electron/ai/inference/prompt-builder.test.cjs#L109>)
- [&lt;anonymous@116:85&gt;](<prompt-builder.test.cjs.md#s-47b8388a6196b9d3>) — [electron/ai/inference/prompt-builder.test.cjs:118](<../../../../../../../electron/ai/inference/prompt-builder.test.cjs#L118>)
- [&lt;anonymous@126:98&gt;.&lt;anonymous@128:5&gt;](<prompt-builder.test.cjs.md#s-4a19d60a3605d127>) — [electron/ai/inference/prompt-builder.test.cjs:128](<../../../../../../../electron/ai/inference/prompt-builder.test.cjs#L128>)
- [&lt;anonymous@126:98&gt;.&lt;anonymous@132:5&gt;](<prompt-builder.test.cjs.md#s-588d400d1cb149d2>) — [electron/ai/inference/prompt-builder.test.cjs:133](<../../../../../../../electron/ai/inference/prompt-builder.test.cjs#L133>)
- [&lt;anonymous@126:98&gt;.&lt;anonymous@140:5&gt;](<prompt-builder.test.cjs.md#s-4e3baca28f393549>) — [electron/ai/inference/prompt-builder.test.cjs:141](<../../../../../../../electron/ai/inference/prompt-builder.test.cjs#L141>)
- [&lt;anonymous@126:98&gt;.&lt;anonymous@148:5&gt;](<prompt-builder.test.cjs.md#s-77b57fcbcb473cf8>) — [electron/ai/inference/prompt-builder.test.cjs:149](<../../../../../../../electron/ai/inference/prompt-builder.test.cjs#L149>)
- [&lt;anonymous@126:98&gt;.&lt;anonymous@159:5&gt;](<prompt-builder.test.cjs.md#s-7791521bf74088d1>) — [electron/ai/inference/prompt-builder.test.cjs:160](<../../../../../../../electron/ai/inference/prompt-builder.test.cjs#L160>)
- [&lt;anonymous@171:83&gt;](<prompt-builder.test.cjs.md#s-a4d39a78373171dc>) — [electron/ai/inference/prompt-builder.test.cjs:179](<../../../../../../../electron/ai/inference/prompt-builder.test.cjs#L179>)
- [&lt;anonymous@171:83&gt;.&lt;anonymous@188:5&gt;](<prompt-builder.test.cjs.md#s-d387cea3d3f2b175>) — [electron/ai/inference/prompt-builder.test.cjs:189](<../../../../../../../electron/ai/inference/prompt-builder.test.cjs#L189>)
- [checkRemoteModel](<../model-check.cjs.md#s-e84d234a40a5e24b>) — [electron/ai/model-check.cjs:10](<../../../../../../../electron/ai/model-check.cjs#L10>)
- [&lt;anonymous@516:89&gt;](<../orchestrator.test.cjs.md#s-46498cec03880e65>) — [electron/ai/orchestrator.test.cjs:520](<../../../../../../../electron/ai/orchestrator.test.cjs#L520>)
- [&lt;anonymous@54:106&gt;](<../runtime-context.test.cjs.md#s-d99bbd18edfd3bcb>) — [electron/ai/runtime-context.test.cjs:64](<../../../../../../../electron/ai/runtime-context.test.cjs#L64>)
- [&lt;anonymous@98:112&gt;](<../runtime-context.test.cjs.md#s-65b86fcc7544b021>) — [electron/ai/runtime-context.test.cjs:112](<../../../../../../../electron/ai/runtime-context.test.cjs#L112>)
- [&lt;anonymous@98:112&gt;](<../runtime-context.test.cjs.md#s-65b86fcc7544b021>) — [electron/ai/runtime-context.test.cjs:123](<../../../../../../../electron/ai/runtime-context.test.cjs#L123>)
- [&lt;anonymous@98:112&gt;](<../runtime-context.test.cjs.md#s-65b86fcc7544b021>) — [electron/ai/runtime-context.test.cjs:129](<../../../../../../../electron/ai/runtime-context.test.cjs#L129>)
- [&lt;anonymous@140:98&gt;](<../runtime-context.test.cjs.md#s-1d01431481d06fb2>) — [electron/ai/runtime-context.test.cjs:141](<../../../../../../../electron/ai/runtime-context.test.cjs#L141>)
- [&lt;anonymous@140:98&gt;](<../runtime-context.test.cjs.md#s-1d01431481d06fb2>) — [electron/ai/runtime-context.test.cjs:147](<../../../../../../../electron/ai/runtime-context.test.cjs#L147>)
- [&lt;anonymous@140:98&gt;](<../runtime-context.test.cjs.md#s-1d01431481d06fb2>) — [electron/ai/runtime-context.test.cjs:152](<../../../../../../../electron/ai/runtime-context.test.cjs#L152>)
- [&lt;anonymous@140:98&gt;](<../runtime-context.test.cjs.md#s-1d01431481d06fb2>) — [electron/ai/runtime-context.test.cjs:169](<../../../../../../../electron/ai/runtime-context.test.cjs#L169>)
- [&lt;anonymous@140:98&gt;](<../runtime-context.test.cjs.md#s-1d01431481d06fb2>) — [electron/ai/runtime-context.test.cjs:181](<../../../../../../../electron/ai/runtime-context.test.cjs#L181>)
- [&lt;anonymous@194:116&gt;](<../runtime-context.test.cjs.md#s-2260d7b19fd13c0a>) — [electron/ai/runtime-context.test.cjs:205](<../../../../../../../electron/ai/runtime-context.test.cjs#L205>)
- [&lt;anonymous@194:116&gt;](<../runtime-context.test.cjs.md#s-2260d7b19fd13c0a>) — [electron/ai/runtime-context.test.cjs:216](<../../../../../../../electron/ai/runtime-context.test.cjs#L216>)
- [&lt;anonymous@228:87&gt;](<../runtime-context.test.cjs.md#s-c9a8a0f65c9d2ba2>) — [electron/ai/runtime-context.test.cjs:238](<../../../../../../../electron/ai/runtime-context.test.cjs#L238>)
- [&lt;anonymous@228:87&gt;](<../runtime-context.test.cjs.md#s-c9a8a0f65c9d2ba2>) — [electron/ai/runtime-context.test.cjs:239](<../../../../../../../electron/ai/runtime-context.test.cjs#L239>)
- [report.&lt;anonymous@70:31&gt;](<../../../scripts/runtime-kernel-report.cjs.md#s-5f9992a00a349768>) — [scripts/runtime-kernel-report.cjs:92](<../../../../../../../scripts/runtime-kernel-report.cjs#L92>)

Unresolved / external call sites: 10.

- Array.isArray — external-or-dynamic-dispatch; [electron/ai/inference/prompt-builder.cjs:101](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L101>)
- sources.forEach — external-or-dynamic-dispatch; [electron/ai/inference/prompt-builder.cjs:103](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L103>)
- policy.system.replaceAll — external-or-dynamic-dispatch; [electron/ai/inference/prompt-builder.cjs:117](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L117>)
- approved.reduce — external-or-dynamic-dispatch; [electron/ai/inference/prompt-builder.cjs:123](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L123>)
- approved.map — external-or-dynamic-dispatch; [electron/ai/inference/prompt-builder.cjs:130](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L130>)
- approved.map — external-or-dynamic-dispatch; [electron/ai/inference/prompt-builder.cjs:160](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L160>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/ai/inference/prompt-builder.cjs:168](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L168>)
- policy.configurationReferences.map — external-or-dynamic-dispatch; [electron/ai/inference/prompt-builder.cjs:172](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L172>)
- 2 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-store.test.cjs:355](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L355>) — static-call-site; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:384](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L384>) — static-call-site; coverage not established.
- [electron/ai/inference/prompt-builder.test.cjs:26](<../../../../../../../electron/ai/inference/prompt-builder.test.cjs#L26>) — static-call-site; coverage not established.
- [electron/ai/inference/prompt-builder.test.cjs:39](<../../../../../../../electron/ai/inference/prompt-builder.test.cjs#L39>) — static-call-site; coverage not established.
- [electron/ai/inference/prompt-builder.test.cjs:50](<../../../../../../../electron/ai/inference/prompt-builder.test.cjs#L50>) — static-call-site; coverage not established.
- [electron/ai/inference/prompt-builder.test.cjs:59](<../../../../../../../electron/ai/inference/prompt-builder.test.cjs#L59>) — static-call-site; coverage not established.
- [electron/ai/inference/prompt-builder.test.cjs:63](<../../../../../../../electron/ai/inference/prompt-builder.test.cjs#L63>) — static-call-site; coverage not established.
- [electron/ai/inference/prompt-builder.test.cjs:98](<../../../../../../../electron/ai/inference/prompt-builder.test.cjs#L98>) — static-call-site; coverage not established.
- [electron/ai/inference/prompt-builder.test.cjs:109](<../../../../../../../electron/ai/inference/prompt-builder.test.cjs#L109>) — static-call-site; coverage not established.
- [electron/ai/inference/prompt-builder.test.cjs:118](<../../../../../../../electron/ai/inference/prompt-builder.test.cjs#L118>) — static-call-site; coverage not established.
- [electron/ai/inference/prompt-builder.test.cjs:128](<../../../../../../../electron/ai/inference/prompt-builder.test.cjs#L128>) — static-call-site; coverage not established.
- [electron/ai/inference/prompt-builder.test.cjs:133](<../../../../../../../electron/ai/inference/prompt-builder.test.cjs#L133>) — static-call-site; coverage not established.
- [electron/ai/inference/prompt-builder.test.cjs:141](<../../../../../../../electron/ai/inference/prompt-builder.test.cjs#L141>) — static-call-site; coverage not established.
- [electron/ai/inference/prompt-builder.test.cjs:149](<../../../../../../../electron/ai/inference/prompt-builder.test.cjs#L149>) — static-call-site; coverage not established.
- [electron/ai/inference/prompt-builder.test.cjs:160](<../../../../../../../electron/ai/inference/prompt-builder.test.cjs#L160>) — static-call-site; coverage not established.
- [electron/ai/inference/prompt-builder.test.cjs:179](<../../../../../../../electron/ai/inference/prompt-builder.test.cjs#L179>) — static-call-site; coverage not established.
- [electron/ai/inference/prompt-builder.test.cjs:189](<../../../../../../../electron/ai/inference/prompt-builder.test.cjs#L189>) — static-call-site; coverage not established.
- [electron/ai/orchestrator.test.cjs:520](<../../../../../../../electron/ai/orchestrator.test.cjs#L520>) — static-call-site; coverage not established.
- [electron/ai/runtime-context.test.cjs:64](<../../../../../../../electron/ai/runtime-context.test.cjs#L64>) — static-call-site; coverage not established.
- [electron/ai/runtime-context.test.cjs:112](<../../../../../../../electron/ai/runtime-context.test.cjs#L112>) — static-call-site; coverage not established.
- [electron/ai/runtime-context.test.cjs:123](<../../../../../../../electron/ai/runtime-context.test.cjs#L123>) — static-call-site; coverage not established.
- [electron/ai/runtime-context.test.cjs:129](<../../../../../../../electron/ai/runtime-context.test.cjs#L129>) — static-call-site; coverage not established.
- [electron/ai/runtime-context.test.cjs:141](<../../../../../../../electron/ai/runtime-context.test.cjs#L141>) — static-call-site; coverage not established.
- [electron/ai/runtime-context.test.cjs:147](<../../../../../../../electron/ai/runtime-context.test.cjs#L147>) — static-call-site; coverage not established.
- [electron/ai/runtime-context.test.cjs:152](<../../../../../../../electron/ai/runtime-context.test.cjs#L152>) — static-call-site; coverage not established.
- [electron/ai/runtime-context.test.cjs:169](<../../../../../../../electron/ai/runtime-context.test.cjs#L169>) — static-call-site; coverage not established.
- [electron/ai/runtime-context.test.cjs:181](<../../../../../../../electron/ai/runtime-context.test.cjs#L181>) — static-call-site; coverage not established.
- [electron/ai/runtime-context.test.cjs:205](<../../../../../../../electron/ai/runtime-context.test.cjs#L205>) — static-call-site; coverage not established.
- [electron/ai/runtime-context.test.cjs:216](<../../../../../../../electron/ai/runtime-context.test.cjs#L216>) — static-call-site; coverage not established.
- [electron/ai/runtime-context.test.cjs:238](<../../../../../../../electron/ai/runtime-context.test.cjs#L238>) — static-call-site; coverage not established.
- [electron/ai/runtime-context.test.cjs:239](<../../../../../../../electron/ai/runtime-context.test.cjs#L239>) — static-call-site; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:13](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/ai/inference/prompt-builder.test.cjs:9](<../../../../../../../electron/ai/inference/prompt-builder.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/orchestrator.test.cjs:517](<../../../../../../../electron/ai/orchestrator.test.cjs#L517>) — file-import-only; coverage not established.
- [electron/ai/runtime-context.test.cjs:6](<../../../../../../../electron/ai/runtime-context.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-f95606fe8ecd3f4b"></a>

## buildContextMessages.&lt;anonymous@123:21&gt;

[electron/ai/inference/prompt-builder.cjs:123](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L123>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [buildContextMessages](<prompt-builder.cjs.md#s-241c37ad734d8bcd>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| sum | any | compiler-inferred | required |
| item | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-store.test.cjs:13](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/ai/inference/prompt-builder.test.cjs:9](<../../../../../../../electron/ai/inference/prompt-builder.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/orchestrator.test.cjs:517](<../../../../../../../electron/ai/orchestrator.test.cjs#L517>) — file-import-only; coverage not established.
- [electron/ai/runtime-context.test.cjs:6](<../../../../../../../electron/ai/runtime-context.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-c39cb875390db842"></a>

## buildContextMessages.&lt;anonymous@130:40&gt;

[electron/ai/inference/prompt-builder.cjs:130](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L130>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [buildContextMessages](<prompt-builder.cjs.md#s-241c37ad734d8bcd>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| approvedSource | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/inference/prompt-builder.cjs:141](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L141>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- JSON.stringify — external-or-dynamic-dispatch; [electron/ai/inference/prompt-builder.cjs:131](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L131>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-store.test.cjs:13](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/ai/inference/prompt-builder.test.cjs:9](<../../../../../../../electron/ai/inference/prompt-builder.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/orchestrator.test.cjs:517](<../../../../../../../electron/ai/orchestrator.test.cjs#L517>) — file-import-only; coverage not established.
- [electron/ai/runtime-context.test.cjs:6](<../../../../../../../electron/ai/runtime-context.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-6872497066cc2469"></a>

## buildContextMessages.&lt;anonymous@160:37&gt;

[electron/ai/inference/prompt-builder.cjs:160](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L160>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [buildContextMessages](<prompt-builder.cjs.md#s-241c37ad734d8bcd>).

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

- [electron/ai/agents/agent-store.test.cjs:13](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/ai/inference/prompt-builder.test.cjs:9](<../../../../../../../electron/ai/inference/prompt-builder.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/orchestrator.test.cjs:517](<../../../../../../../electron/ai/orchestrator.test.cjs#L517>) — file-import-only; coverage not established.
- [electron/ai/runtime-context.test.cjs:6](<../../../../../../../electron/ai/runtime-context.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-a32c5cadbc263bee"></a>

## buildContextMessages.&lt;anonymous@172:45&gt;

[electron/ai/inference/prompt-builder.cjs:172](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L172>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [buildContextMessages](<prompt-builder.cjs.md#s-241c37ad734d8bcd>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| reference | any | compiler-inferred | required |

Returns: { role: string; content: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- JSON.stringify — external-or-dynamic-dispatch; [electron/ai/inference/prompt-builder.cjs:174](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L174>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-store.test.cjs:13](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/ai/inference/prompt-builder.test.cjs:9](<../../../../../../../electron/ai/inference/prompt-builder.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/orchestrator.test.cjs:517](<../../../../../../../electron/ai/orchestrator.test.cjs#L517>) — file-import-only; coverage not established.
- [electron/ai/runtime-context.test.cjs:6](<../../../../../../../electron/ai/runtime-context.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-515ec88868b5cf94"></a>

## buildContextMessages.&lt;anonymous@187:30&gt;

[electron/ai/inference/prompt-builder.cjs:187](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L187>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [buildContextMessages](<prompt-builder.cjs.md#s-241c37ad734d8bcd>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| content | any | compiler-inferred | required |

Returns: { role: string; content: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-store.test.cjs:13](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L13>) — file-import-only; coverage not established.
- [electron/ai/inference/prompt-builder.test.cjs:9](<../../../../../../../electron/ai/inference/prompt-builder.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/orchestrator.test.cjs:517](<../../../../../../../electron/ai/orchestrator.test.cjs#L517>) — file-import-only; coverage not established.
- [electron/ai/runtime-context.test.cjs:6](<../../../../../../../electron/ai/runtime-context.test.cjs#L6>) — file-import-only; coverage not established.
