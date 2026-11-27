# scripts/engine-chat-live.cjs: symbols

[Atlas](<../../../README.md>) / [Development and acceptance tooling](<../../../modules/tooling.md>) / [scripts/engine-chat-live.cjs:1](<../../../../../scripts/engine-chat-live.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/engine-chat-live.cjs](<engine-chat-live.cjs.md#s-089815290bc51a8c>) (Module)
- [main](<engine-chat-live.cjs.md#s-d9d25d752f6311a1>) (FunctionDeclaration)
- [main.&lt;anonymous@32:24&gt;](<engine-chat-live.cjs.md#s-b4136b5a4576c9a2>) (ArrowFunction)
- [main.&lt;anonymous@32:24&gt;.&lt;anonymous@41:56&gt;](<engine-chat-live.cjs.md#s-71f8f03a2bcd545b>) (ArrowFunction)
- [main.chooseFolder](<engine-chat-live.cjs.md#s-7e2089cd66c4ac9c>) (ArrowFunction)
- [main.openPath](<engine-chat-live.cjs.md#s-0dbc0272ef9ac7d5>) (ArrowFunction)
- [&lt;anonymous@170:14&gt;](<engine-chat-live.cjs.md#s-25e3e00d59dca22d>) (ArrowFunction)

<a id="s-089815290bc51a8c"></a>

## scripts/engine-chat-live.cjs

[scripts/engine-chat-live.cjs:1](<../../../../../scripts/engine-chat-live.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

- [main](<engine-chat-live.cjs.md#s-d9d25d752f6311a1>) — [scripts/engine-chat-live.cjs:170](<../../../../../scripts/engine-chat-live.cjs#L170>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 11.

- require — module-loader; [scripts/engine-chat-live.cjs:2](<../../../../../scripts/engine-chat-live.cjs#L2>)
- require — module-loader; [scripts/engine-chat-live.cjs:3](<../../../../../scripts/engine-chat-live.cjs#L3>)
- require — module-loader; [scripts/engine-chat-live.cjs:4](<../../../../../scripts/engine-chat-live.cjs#L4>)
- require — module-loader; [scripts/engine-chat-live.cjs:5](<../../../../../scripts/engine-chat-live.cjs#L5>)
- require — module-loader; [scripts/engine-chat-live.cjs:6](<../../../../../scripts/engine-chat-live.cjs#L6>)
- require — module-loader; [scripts/engine-chat-live.cjs:7](<../../../../../scripts/engine-chat-live.cjs#L7>)
- require — module-loader; [scripts/engine-chat-live.cjs:8](<../../../../../scripts/engine-chat-live.cjs#L8>)
- require — module-loader; [scripts/engine-chat-live.cjs:9](<../../../../../scripts/engine-chat-live.cjs#L9>)
- 3 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d9d25d752f6311a1"></a>

## main

[scripts/engine-chat-live.cjs:14](<../../../../../scripts/engine-chat-live.cjs#L14>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/engine-chat-live.cjs](<engine-chat-live.cjs.md#s-089815290bc51a8c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [OllamaProvider.constructor](<../electron/ai/providers/ollama-provider.cjs.md#s-6a0c68a6d6f2569c>) — [scripts/engine-chat-live.cjs:30](<../../../../../scripts/engine-chat-live.cjs#L30>)
- [ModelRegistry.constructor](<../electron/ai/model-registry.cjs.md#s-776a77db3083bdfd>) — [scripts/engine-chat-live.cjs:59](<../../../../../scripts/engine-chat-live.cjs#L59>)
- [ModelRegistry.save](<../electron/ai/model-registry.cjs.md#s-ad7b27a4e7ba4dc3>) — [scripts/engine-chat-live.cjs:60](<../../../../../scripts/engine-chat-live.cjs#L60>)
- [AgentStore.constructor](<../electron/ai/agents/agent-store.cjs.md#s-61feae93fee7ec73>) — [scripts/engine-chat-live.cjs:67](<../../../../../scripts/engine-chat-live.cjs#L67>)
- [AgentStore.create](<../electron/ai/agents/agent-store.cjs.md#s-a855b2d37033dc99>) — [scripts/engine-chat-live.cjs:68](<../../../../../scripts/engine-chat-live.cjs#L68>)
- [AgentStore.saveConstruction](<../electron/ai/agents/agent-store.cjs.md#s-79e9bb1291ef0de1>) — [scripts/engine-chat-live.cjs:82](<../../../../../scripts/engine-chat-live.cjs#L82>)
- [EngineRegistry.constructor](<../electron/ai/engine-registry.cjs.md#s-ce9e7ec9029897d3>) — [scripts/engine-chat-live.cjs:88](<../../../../../scripts/engine-chat-live.cjs#L88>)
- [EngineRegistry.configure](<../electron/ai/engine-registry.cjs.md#s-3e866b331ac40f05>) — [scripts/engine-chat-live.cjs:93](<../../../../../scripts/engine-chat-live.cjs#L93>)
- [ChatService.constructor](<../electron/ai/chat/chat-service.cjs.md#s-821f32a93ec900a8>) — [scripts/engine-chat-live.cjs:99](<../../../../../scripts/engine-chat-live.cjs#L99>)
- [ChatService.create](<../electron/ai/chat/chat-service.cjs.md#s-a451abff9275ccde>) — [scripts/engine-chat-live.cjs:101](<../../../../../scripts/engine-chat-live.cjs#L101>)
- [ChatService.run](<../electron/ai/chat/chat-service.cjs.md#s-bed13c7861a5021f>) — [scripts/engine-chat-live.cjs:106](<../../../../../scripts/engine-chat-live.cjs#L106>)
- [EngineRegistry.open](<../electron/ai/engine-registry.cjs.md#s-3478cb94d7277ce5>) — [scripts/engine-chat-live.cjs:128](<../../../../../scripts/engine-chat-live.cjs#L128>)
- [ChatService.resume](<../electron/ai/chat/chat-service.cjs.md#s-6b62ce1e48251c45>) — [scripts/engine-chat-live.cjs:153](<../../../../../scripts/engine-chat-live.cjs#L153>)
- [ChatService.cancelAll](<../electron/ai/chat/chat-service.cjs.md#s-a13b96186264285e>) — [scripts/engine-chat-live.cjs:164](<../../../../../scripts/engine-chat-live.cjs#L164>)
- [EngineRegistry.shutdown](<../electron/ai/engine-registry.cjs.md#s-82da9094ec0d68df>) — [scripts/engine-chat-live.cjs:165](<../../../../../scripts/engine-chat-live.cjs#L165>)

**Called by (statically resolved):**

- [scripts/engine-chat-live.cjs](<engine-chat-live.cjs.md#s-089815290bc51a8c>) — [scripts/engine-chat-live.cjs:170](<../../../../../scripts/engine-chat-live.cjs#L170>)

Unresolved / external call sites: 41.

- Error — external-or-dynamic-dispatch; [scripts/engine-chat-live.cjs:17](<../../../../../scripts/engine-chat-live.cjs#L17>)
- fs.realpath — external-or-dynamic-dispatch; [scripts/engine-chat-live.cjs:20](<../../../../../scripts/engine-chat-live.cjs#L20>)
- path.resolve — external-or-dynamic-dispatch; [scripts/engine-chat-live.cjs:20](<../../../../../scripts/engine-chat-live.cjs#L20>)
- fs.realpath — external-or-dynamic-dispatch; [scripts/engine-chat-live.cjs:22](<../../../../../scripts/engine-chat-live.cjs#L22>)
- fs.mkdtemp — external-or-dynamic-dispatch; [scripts/engine-chat-live.cjs:23](<../../../../../scripts/engine-chat-live.cjs#L23>)
- path.join — external-or-dynamic-dispatch; [scripts/engine-chat-live.cjs:23](<../../../../../scripts/engine-chat-live.cjs#L23>)
- os.tmpdir — external-or-dynamic-dispatch; [scripts/engine-chat-live.cjs:23](<../../../../../scripts/engine-chat-live.cjs#L23>)
- path.join — external-or-dynamic-dispatch; [scripts/engine-chat-live.cjs:27](<../../../../../scripts/engine-chat-live.cjs#L27>)
- 33 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-b4136b5a4576c9a2"></a>

## main.&lt;anonymous@32:24&gt;

[scripts/engine-chat-live.cjs:32](<../../../../../scripts/engine-chat-live.cjs#L32>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<engine-chat-live.cjs.md#s-d9d25d752f6311a1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| args | &#91;pathname?: any, options?: {}, timeoutMs?: any&#93; | compiler-inferred | required, rest |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 7.

- originalRequest — external-or-dynamic-dispatch; [scripts/engine-chat-live.cjs:33](<../../../../../scripts/engine-chat-live.cjs#L33>)
- result.message?.tool_calls?.map — external-or-dynamic-dispatch; [scripts/engine-chat-live.cjs:41](<../../../../../scripts/engine-chat-live.cjs#L41>)
- fs.mkdir — external-or-dynamic-dispatch; [scripts/engine-chat-live.cjs:48](<../../../../../scripts/engine-chat-live.cjs#L48>)
- fs.writeFile — external-or-dynamic-dispatch; [scripts/engine-chat-live.cjs:49](<../../../../../scripts/engine-chat-live.cjs#L49>)
- JSON.stringify — external-or-dynamic-dispatch; [scripts/engine-chat-live.cjs:51](<../../../../../scripts/engine-chat-live.cjs#L51>)
- console.log — external-or-dynamic-dispatch; [scripts/engine-chat-live.cjs:53](<../../../../../scripts/engine-chat-live.cjs#L53>)
- JSON.stringify — external-or-dynamic-dispatch; [scripts/engine-chat-live.cjs:54](<../../../../../scripts/engine-chat-live.cjs#L54>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-71f8f03a2bcd545b"></a>

## main.&lt;anonymous@32:24&gt;.&lt;anonymous@41:56&gt;

[scripts/engine-chat-live.cjs:41](<../../../../../scripts/engine-chat-live.cjs#L41>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main.&lt;anonymous@32:24&gt;](<engine-chat-live.cjs.md#s-b4136b5a4576c9a2>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| call | any | compiler-inferred | required |

Returns: { name: any; arguments: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-7e2089cd66c4ac9c"></a>

## main.chooseFolder

[scripts/engine-chat-live.cjs:90](<../../../../../scripts/engine-chat-live.cjs#L90>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<engine-chat-live.cjs.md#s-d9d25d752f6311a1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-0dbc0272ef9ac7d5"></a>

## main.openPath

[scripts/engine-chat-live.cjs:91](<../../../../../scripts/engine-chat-live.cjs#L91>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<engine-chat-live.cjs.md#s-d9d25d752f6311a1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-25e3e00d59dca22d"></a>

## &lt;anonymous@170:14&gt;

[scripts/engine-chat-live.cjs:170](<../../../../../scripts/engine-chat-live.cjs#L170>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/engine-chat-live.cjs](<engine-chat-live.cjs.md#s-089815290bc51a8c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| e | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- console.error — external-or-dynamic-dispatch; [scripts/engine-chat-live.cjs:171](<../../../../../scripts/engine-chat-live.cjs#L171>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
