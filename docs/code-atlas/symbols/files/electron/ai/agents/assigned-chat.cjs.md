# electron/ai/agents/assigned-chat.cjs: symbols

[Atlas](<../../../../../README.md>) / [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>) / [electron/ai/agents/assigned-chat.cjs:1](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/agents/assigned-chat.cjs](<assigned-chat.cjs.md#s-9465971163b5139e>) (Module)
- [inactiveIntegration](<assigned-chat.cjs.md#s-b33402ed08f2094c>) (FunctionDeclaration)
- [runAssignedTurn](<assigned-chat.cjs.md#s-d49a3f162aa849c6>) (FunctionDeclaration)
- [runAssignedTurn.&lt;anonymous@72:19&gt;](<assigned-chat.cjs.md#s-7fa843eb02d4e3af>) (ArrowFunction)
- [runAssignedTurn.&lt;anonymous@75:16&gt;](<assigned-chat.cjs.md#s-34ebb3aca1b27e66>) (ArrowFunction)
- [runAssignedTurn.recover](<assigned-chat.cjs.md#s-f20f42d5a0735f07>) (ArrowFunction)
- [runAssignedTurn.metadata](<assigned-chat.cjs.md#s-61e4453ac68db8d4>) (ArrowFunction)
- [runAssignedTurn.metadata.&lt;anonymous@149:33&gt;](<assigned-chat.cjs.md#s-7ed6713252a6587f>) (ArrowFunction)
- [runAssignedTurn.metadata.&lt;anonymous@151:33&gt;](<assigned-chat.cjs.md#s-acbd119ba76a4f84>) (ArrowFunction)
- [runAssignedTurn.retainMetrics](<assigned-chat.cjs.md#s-1304f01b7bfbf52d>) (ArrowFunction)
- [runAssignedTurn.&lt;anonymous@185:21&gt;](<assigned-chat.cjs.md#s-99c31b9b5dca1235>) (ArrowFunction)
- [runAssignedTurn.complete](<assigned-chat.cjs.md#s-d1c1b2a7eeba4cfb>) (ArrowFunction)
- [runAssignedTurn.complete.&lt;anonymous@194:15&gt;](<assigned-chat.cjs.md#s-768816b859ed87ac>) (ArrowFunction)
- [runAssignedTurn.complete.&lt;anonymous@194:15&gt;.onDiagnostic](<assigned-chat.cjs.md#s-94e4de7f153c6277>) (ArrowFunction)
- [runAssignedTurn.complete.&lt;anonymous@194:15&gt;.onGenerationStarted](<assigned-chat.cjs.md#s-a264c5b5934d01b7>) (ArrowFunction)
- [runAssignedTurn.complete.&lt;anonymous@194:15&gt;.onContent](<assigned-chat.cjs.md#s-b6163f79173b6434>) (ArrowFunction)

<a id="s-9465971163b5139e"></a>

## electron/ai/agents/assigned-chat.cjs

[electron/ai/agents/assigned-chat.cjs:1](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L1>) · Module · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- require — module-loader; [electron/ai/agents/assigned-chat.cjs:4](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L4>)
- require — module-loader; [electron/ai/agents/assigned-chat.cjs:5](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L5>)
- require — module-loader; [electron/ai/agents/assigned-chat.cjs:6](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L6>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-b33402ed08f2094c"></a>

## inactiveIntegration

[electron/ai/agents/assigned-chat.cjs:9](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L9>) · FunctionDeclaration · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

Preserves legacy UI operations without connecting retired Universe tools.

Purpose evidence: jsdoc.

Exported as: inactiveIntegration ([electron/ai/agents/assigned-chat.cjs:1](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L1>)).

Lexical owner: [electron/ai/agents/assigned-chat.cjs](<assigned-chat.cjs.md#s-9465971163b5139e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/agents/assigned-chat.cjs:10](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L10>)

**Called by (statically resolved):**

- [ChatService.previewConstructionBox](<../chat/chat-service.cjs.md#s-5c1dc84b2a38660c>) — [electron/ai/chat/chat-service.cjs:144](<../../../../../../../electron/ai/chat/chat-service.cjs#L144>)
- [ChatService.previewConstructionFile](<../chat/chat-service.cjs.md#s-3948d5c2970f7930>) — [electron/ai/chat/chat-service.cjs:150](<../../../../../../../electron/ai/chat/chat-service.cjs#L150>)
- [ChatService.switchBox](<../chat/chat-service.cjs.md#s-7e7d16e81b9c76c1>) — [electron/ai/chat/chat-service.cjs:233](<../../../../../../../electron/ai/chat/chat-service.cjs#L233>)
- [ChatService.refreshSource](<../chat/chat-service.cjs.md#s-524d1b1ff329ef56>) — [electron/ai/chat/chat-service.cjs:411](<../../../../../../../electron/ai/chat/chat-service.cjs#L411>)
- [registerAiIpc.inactive](<../ipc.cjs.md#s-11d9522e1fa3a656>) — [electron/ai/ipc.cjs:322](<../../../../../../../electron/ai/ipc.cjs#L322>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d49a3f162aa849c6"></a>

## runAssignedTurn

[electron/ai/agents/assigned-chat.cjs:17](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L17>) · FunctionDeclaration · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

Runs only a host-bound assigned Entity conversation with the retained provider/evidence pipeline. No Universe generation entry exists. Persists the assigned result through recordRun; provider/cancellation errors retain their existing mapping.

Purpose evidence: jsdoc.

Exported as: runAssignedTurn ([electron/ai/agents/assigned-chat.cjs:1](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L1>)).

Lexical owner: [electron/ai/agents/assigned-chat.cjs](<assigned-chat.cjs.md#s-9465971163b5139e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| {   provider,   settings,   question,   history,   agent,   agentId,   identity,   runId,   requestId,   conversationId,   signal,   onEvent,   requestLogger,   recordRun,   entityContext,   toolRuntime,   telemetryRoot, } | { provider: any; settings: any; question: any; history: any; agent: any; agentId: any; identity: any; runId: any; requestId: any; conversationId: any; signal: any; onEvent: any; requestLogger: any; recordRun: any; entityContext: any; toolRuntime: any; telemetryRoot: any; } | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/agents/assigned-chat.cjs:37](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L37>)
- [createBaselineObserver](<../llm-front-office/observability.cjs.md#s-22e889ac7364e45a>) — [electron/ai/agents/assigned-chat.cjs:43](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L43>)
- [budgetHistory](<../history-budget.cjs.md#s-0c3553c9658a4cf5>) — [electron/ai/agents/assigned-chat.cjs:167](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L167>)
- [runAssignedTurn.recover](<assigned-chat.cjs.md#s-f20f42d5a0735f07>) — [electron/ai/agents/assigned-chat.cjs:185](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L185>)
- [runEntityProtocol](<entity-agent-protocol.cjs.md#s-5093e0259461bc43>) — [electron/ai/agents/assigned-chat.cjs:224](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L224>)
- [runAssignedTurn.complete](<assigned-chat.cjs.md#s-d1c1b2a7eeba4cfb>) — [electron/ai/agents/assigned-chat.cjs:231](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L231>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/agents/assigned-chat.cjs:245](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L245>)
- [runAssignedTurn.metadata](<assigned-chat.cjs.md#s-61e4453ac68db8d4>) — [electron/ai/agents/assigned-chat.cjs:255](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L255>)
- [runAssignedTurn.retainMetrics](<assigned-chat.cjs.md#s-1304f01b7bfbf52d>) — [electron/ai/agents/assigned-chat.cjs:264](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L264>)
- [runAssignedTurn.metadata](<assigned-chat.cjs.md#s-61e4453ac68db8d4>) — [electron/ai/agents/assigned-chat.cjs:273](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L273>)
- [serializeModelError](<../../shared/runtime-errors.cjs.md#s-0a992a8fcd9686e4>) — [electron/ai/agents/assigned-chat.cjs:278](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L278>)
- [runAssignedTurn.retainMetrics](<assigned-chat.cjs.md#s-1304f01b7bfbf52d>) — [electron/ai/agents/assigned-chat.cjs:280](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L280>)

**Called by (statically resolved):**

- [EntityAgentService.sendTurn](<entity-agents.cjs.md#s-5e1a2fcddec46961>) — [electron/ai/agents/entity-agents.cjs:1667](<../../../../../../../electron/ai/agents/entity-agents.cjs#L1667>)

Unresolved / external call sites: 26.

- Date.now — external-or-dynamic-dispatch; [electron/ai/agents/assigned-chat.cjs:41](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L41>)
- require — module-loader; [electron/ai/agents/assigned-chat.cjs:43](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L43>)
- &#91; &#96;You are ${agent?.displayName ?? "Orbistry Agent"}, a helpful conversational assistant.&#96;, entityContext ? &#91; agent.protectedInstructions ?? require("../inference/prompt-builder.cj — external-or-dynamic-dispatch; [electron/ai/agents/assigned-chat.cjs:58](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L58>)
- &#91; &#96;You are ${agent?.displayName ?? "Orbistry Agent"}, a helpful conversational assistant.&#96;, entityContext ? &#91; agent.protectedInstructions ?? require("../inference/prompt-builder.cj — external-or-dynamic-dispatch; [electron/ai/agents/assigned-chat.cjs:58](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L58>)
- &#91; agent.protectedInstructions ?? require("../inference/prompt-builder.cjs").SYSTEM_PROMPT, "The host supplies current assignment metadata, bounded entity knowledge and previously e — external-or-dynamic-dispatch; [electron/ai/agents/assigned-chat.cjs:61](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L61>)
- require — module-loader; [electron/ai/agents/assigned-chat.cjs:63](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L63>)
- require — module-loader; [electron/ai/agents/assigned-chat.cjs:66](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L66>)
- (active?.nodes ?? &#91;&#93;) .filter((node) =&gt; &#91;"Personality", "Output", "LLM"&#93;.includes(node.kind), ) .map — external-or-dynamic-dispatch; [electron/ai/agents/assigned-chat.cjs:71](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L71>)
- 18 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-7fa843eb02d4e3af"></a>

## runAssignedTurn.&lt;anonymous@72:19&gt;

[electron/ai/agents/assigned-chat.cjs:72](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L72>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [runAssignedTurn](<assigned-chat.cjs.md#s-d49a3f162aa849c6>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| node | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- &#91;"Personality", "Output", "LLM"&#93;.includes — external-or-dynamic-dispatch; [electron/ai/agents/assigned-chat.cjs:73](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L73>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-34ebb3aca1b27e66"></a>

## runAssignedTurn.&lt;anonymous@75:16&gt;

[electron/ai/agents/assigned-chat.cjs:75](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L75>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [runAssignedTurn](<assigned-chat.cjs.md#s-d49a3f162aa849c6>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| node | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-f20f42d5a0735f07"></a>

## runAssignedTurn.recover

[electron/ai/agents/assigned-chat.cjs:100](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L100>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [runAssignedTurn](<assigned-chat.cjs.md#s-d49a3f162aa849c6>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| operation | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [runAssignedTurn](<assigned-chat.cjs.md#s-d49a3f162aa849c6>) — [electron/ai/agents/assigned-chat.cjs:185](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L185>)
- [runAssignedTurn.complete](<assigned-chat.cjs.md#s-d1c1b2a7eeba4cfb>) — [electron/ai/agents/assigned-chat.cjs:194](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L194>)

Unresolved / external call sites: 8.

- operation — external-or-dynamic-dispatch; [electron/ai/agents/assigned-chat.cjs:102](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L102>)
- &#91;"MODEL_TIMEOUT", "REMOTE_SERVER_ERROR"&#93;.includes — external-or-dynamic-dispatch; [electron/ai/agents/assigned-chat.cjs:108](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L108>)
- requestLogger?.step — external-or-dynamic-dispatch; [electron/ai/agents/assigned-chat.cjs:114](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L114>)
- require("node:timers/promises").setTimeout — external-or-dynamic-dispatch; [electron/ai/agents/assigned-chat.cjs:119](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L119>)
- require — module-loader; [electron/ai/agents/assigned-chat.cjs:119](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L119>)
- Math.max — external-or-dynamic-dispatch; [electron/ai/agents/assigned-chat.cjs:120](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L120>)
- signal.throwIfAborted — external-or-dynamic-dispatch; [electron/ai/agents/assigned-chat.cjs:124](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L124>)
- operation — external-or-dynamic-dispatch; [electron/ai/agents/assigned-chat.cjs:125](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L125>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-61e4453ac68db8d4"></a>

## runAssignedTurn.metadata

[electron/ai/agents/assigned-chat.cjs:128](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L128>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [runAssignedTurn](<assigned-chat.cjs.md#s-d49a3f162aa849c6>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: { schemaVersion: number; runId: any; requestId: any; conversationId: any; contextIdentity: any; settings: any; diagnostics: { standalone: boolean; agentId: any; sourceCount: any; gatewayTasks?: any; }; startedAt: any; completedAt: any; durationMs: any; scope: { id: any; mode: string; manifestVersion: string; }; provider: any; model: any; promptVersion: string; userMessage: any; sourcesAvailable: any; sourcesActuallyRead: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [runAssignedTurn](<assigned-chat.cjs.md#s-d49a3f162aa849c6>) — [electron/ai/agents/assigned-chat.cjs:255](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L255>)
- [runAssignedTurn](<assigned-chat.cjs.md#s-d49a3f162aa849c6>) — [electron/ai/agents/assigned-chat.cjs:273](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L273>)

Unresolved / external call sites: 8.

- new Date(started).toISOString — external-or-dynamic-dispatch; [electron/ai/agents/assigned-chat.cjs:136](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L136>)
- Date — external-or-dynamic-dispatch; [electron/ai/agents/assigned-chat.cjs:136](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L136>)
- new Date().toISOString — external-or-dynamic-dispatch; [electron/ai/agents/assigned-chat.cjs:137](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L137>)
- Date — external-or-dynamic-dispatch; [electron/ai/agents/assigned-chat.cjs:137](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L137>)
- Math.max — external-or-dynamic-dispatch; [electron/ai/agents/assigned-chat.cjs:138](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L138>)
- Date.now — external-or-dynamic-dispatch; [electron/ai/agents/assigned-chat.cjs:138](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L138>)
- entityContext?.chunks.map — external-or-dynamic-dispatch; [electron/ai/agents/assigned-chat.cjs:149](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L149>)
- entityContext?.chunks.map — external-or-dynamic-dispatch; [electron/ai/agents/assigned-chat.cjs:151](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L151>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-7ed6713252a6587f"></a>

## runAssignedTurn.metadata.&lt;anonymous@149:33&gt;

[electron/ai/agents/assigned-chat.cjs:149](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L149>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [runAssignedTurn.metadata](<assigned-chat.cjs.md#s-61e4453ac68db8d4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| chunk | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-acbd119ba76a4f84"></a>

## runAssignedTurn.metadata.&lt;anonymous@151:33&gt;

[electron/ai/agents/assigned-chat.cjs:151](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L151>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [runAssignedTurn.metadata](<assigned-chat.cjs.md#s-61e4453ac68db8d4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| chunk | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-1304f01b7bfbf52d"></a>

## runAssignedTurn.retainMetrics

[electron/ai/agents/assigned-chat.cjs:154](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L154>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

Optional content-free metrics must not turn a persisted successful answer into a failed duplicate run.

Purpose evidence: jsdoc.

Lexical owner: [runAssignedTurn](<assigned-chat.cjs.md#s-d49a3f162aa849c6>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [recordTrace](<../llm-front-office/telemetry-store.cjs.md#s-42b043391a6c38c4>) — [electron/ai/agents/assigned-chat.cjs:157](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L157>)

**Called by (statically resolved):**

- [runAssignedTurn](<assigned-chat.cjs.md#s-d49a3f162aa849c6>) — [electron/ai/agents/assigned-chat.cjs:264](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L264>)
- [runAssignedTurn](<assigned-chat.cjs.md#s-d49a3f162aa849c6>) — [electron/ai/agents/assigned-chat.cjs:280](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L280>)

Unresolved / external call sites: 2.

- require — module-loader; [electron/ai/agents/assigned-chat.cjs:157](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L157>)
- baseline.snapshot — external-or-dynamic-dispatch; [electron/ai/agents/assigned-chat.cjs:159](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L159>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-99c31b9b5dca1235"></a>

## runAssignedTurn.&lt;anonymous@185:21&gt;

[electron/ai/agents/assigned-chat.cjs:185](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L185>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [runAssignedTurn](<assigned-chat.cjs.md#s-d49a3f162aa849c6>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- provider.prepare — external-or-dynamic-dispatch; [electron/ai/agents/assigned-chat.cjs:185](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L185>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d1c1b2a7eeba4cfb"></a>

## runAssignedTurn.complete

[electron/ai/agents/assigned-chat.cjs:193](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L193>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

Uses the same provider and observer for each validated assignment tool step or the ordinary single completion.

Purpose evidence: jsdoc.

Lexical owner: [runAssignedTurn](<assigned-chat.cjs.md#s-d49a3f162aa849c6>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| patch | {} | compiler-inferred | optional, default present |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [runAssignedTurn.recover](<assigned-chat.cjs.md#s-f20f42d5a0735f07>) — [electron/ai/agents/assigned-chat.cjs:194](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L194>)

**Called by (statically resolved):**

- [runAssignedTurn](<assigned-chat.cjs.md#s-d49a3f162aa849c6>) — [electron/ai/agents/assigned-chat.cjs:231](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L231>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-768816b859ed87ac"></a>

## runAssignedTurn.complete.&lt;anonymous@194:15&gt;

[electron/ai/agents/assigned-chat.cjs:194](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L194>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [runAssignedTurn.complete](<assigned-chat.cjs.md#s-d1c1b2a7eeba4cfb>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- baseline.complete — external-or-dynamic-dispatch; [electron/ai/agents/assigned-chat.cjs:195](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L195>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-94e4de7f153c6277"></a>

## runAssignedTurn.complete.&lt;anonymous@194:15&gt;.onDiagnostic

[electron/ai/agents/assigned-chat.cjs:209](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L209>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [runAssignedTurn.complete.&lt;anonymous@194:15&gt;](<assigned-chat.cjs.md#s-768816b859ed87ac>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| step | any | compiler-inferred | required |
| details | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- requestLogger?.step — external-or-dynamic-dispatch; [electron/ai/agents/assigned-chat.cjs:209](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L209>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-a264c5b5934d01b7"></a>

## runAssignedTurn.complete.&lt;anonymous@194:15&gt;.onGenerationStarted

[electron/ai/agents/assigned-chat.cjs:210](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L210>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [runAssignedTurn.complete.&lt;anonymous@194:15&gt;](<assigned-chat.cjs.md#s-768816b859ed87ac>).

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

No direct static call/import association found; coverage unknown.

<a id="s-b6163f79173b6434"></a>

## runAssignedTurn.complete.&lt;anonymous@194:15&gt;.onContent

[electron/ai/agents/assigned-chat.cjs:213](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L213>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [runAssignedTurn.complete.&lt;anonymous@194:15&gt;](<assigned-chat.cjs.md#s-768816b859ed87ac>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| raw | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [answerPrefix](<../inference/response-validation.cjs.md#s-3de3a3c0b8fa59ff>) — [electron/ai/agents/assigned-chat.cjs:216](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L216>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- onEvent — external-or-dynamic-dispatch; [electron/ai/agents/assigned-chat.cjs:217](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L217>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
