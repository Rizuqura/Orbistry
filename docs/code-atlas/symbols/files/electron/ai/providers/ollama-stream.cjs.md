# electron/ai/providers/ollama-stream.cjs: symbols

[Atlas](<../../../../../README.md>) / [Model-provider adapters](<../../../../../modules/providers.md>) / [electron/ai/providers/ollama-stream.cjs:1](<../../../../../../../electron/ai/providers/ollama-stream.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/providers/ollama-stream.cjs](<ollama-stream.cjs.md#s-cbd27c7eea6e6ccc>) (Module)
- [readChatStream](<ollama-stream.cjs.md#s-f7526d2f26c7a960>) (FunctionDeclaration)
- [readChatStream.consume](<ollama-stream.cjs.md#s-7d8f5c4483b3b55f>) (ArrowFunction)
- [readChatStream.&lt;anonymous@82:33&gt;](<ollama-stream.cjs.md#s-2960cdc4a06d9b5e>) (ArrowFunction)

<a id="s-cbd27c7eea6e6ccc"></a>

## electron/ai/providers/ollama-stream.cjs

[electron/ai/providers/ollama-stream.cjs:1](<../../../../../../../electron/ai/providers/ollama-stream.cjs#L1>) · Module · production · [Model-provider adapters](<../../../../../modules/providers.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- require — module-loader; [electron/ai/providers/ollama-stream.cjs:1](<../../../../../../../electron/ai/providers/ollama-stream.cjs#L1>)

**Related tests / acceptance harnesses:**

- [electron/ai/providers/ollama-stream.test.cjs:3](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-f7526d2f26c7a960"></a>

## readChatStream

[electron/ai/providers/ollama-stream.cjs:3](<../../../../../../../electron/ai/providers/ollama-stream.cjs#L3>) · FunctionDeclaration · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: readChatStream ([electron/ai/providers/ollama-stream.cjs:1](<../../../../../../../electron/ai/providers/ollama-stream.cjs#L1>)).

Lexical owner: [electron/ai/providers/ollama-stream.cjs](<ollama-stream.cjs.md#s-cbd27c7eea6e6ccc>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| response | any | compiler-inferred | required |
| onContent | any | compiler-inferred | required |
| onActivity | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/providers/ollama-stream.cjs:6](<../../../../../../../electron/ai/providers/ollama-stream.cjs#L6>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/providers/ollama-stream.cjs:58](<../../../../../../../electron/ai/providers/ollama-stream.cjs#L58>)
- [readChatStream.consume](<ollama-stream.cjs.md#s-7d8f5c4483b3b55f>) — [electron/ai/providers/ollama-stream.cjs:64](<../../../../../../../electron/ai/providers/ollama-stream.cjs#L64>)
- [readChatStream.consume](<ollama-stream.cjs.md#s-7d8f5c4483b3b55f>) — [electron/ai/providers/ollama-stream.cjs:69](<../../../../../../../electron/ai/providers/ollama-stream.cjs#L69>)
- [readChatStream.consume](<ollama-stream.cjs.md#s-7d8f5c4483b3b55f>) — [electron/ai/providers/ollama-stream.cjs:74](<../../../../../../../electron/ai/providers/ollama-stream.cjs#L74>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/providers/ollama-stream.cjs:76](<../../../../../../../electron/ai/providers/ollama-stream.cjs#L76>)

**Called by (statically resolved):**

- [OllamaProvider.streamChat](<ollama-provider.cjs.md#s-be4271d68f86c17b>) — [electron/ai/providers/ollama-provider.cjs:410](<../../../../../../../electron/ai/providers/ollama-provider.cjs#L410>)
- [&lt;anonymous@20:78&gt;](<ollama-stream.test.cjs.md#s-e2500a5bc020ef7a>) — [electron/ai/providers/ollama-stream.test.cjs:35](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L35>)
- [&lt;anonymous@47:65&gt;](<ollama-stream.test.cjs.md#s-0e8d3310069c37bc>) — [electron/ai/providers/ollama-stream.test.cjs:55](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L55>)
- [&lt;anonymous@219:63&gt;](<ollama-stream.test.cjs.md#s-0021d73bc10a0e23>) — [electron/ai/providers/ollama-stream.test.cjs:235](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L235>)

Unresolved / external call sites: 11.

- response.body?.getReader — external-or-dynamic-dispatch; [electron/ai/providers/ollama-stream.cjs:4](<../../../../../../../electron/ai/providers/ollama-stream.cjs#L4>)
- TextDecoder — external-or-dynamic-dispatch; [electron/ai/providers/ollama-stream.cjs:10](<../../../../../../../electron/ai/providers/ollama-stream.cjs#L10>)
- reader.read — external-or-dynamic-dispatch; [electron/ai/providers/ollama-stream.cjs:54](<../../../../../../../electron/ai/providers/ollama-stream.cjs#L54>)
- decoder.decode — external-or-dynamic-dispatch; [electron/ai/providers/ollama-stream.cjs:56](<../../../../../../../electron/ai/providers/ollama-stream.cjs#L56>)
- buffer.indexOf — external-or-dynamic-dispatch; [electron/ai/providers/ollama-stream.cjs:63](<../../../../../../../electron/ai/providers/ollama-stream.cjs#L63>)
- buffer.slice — external-or-dynamic-dispatch; [electron/ai/providers/ollama-stream.cjs:64](<../../../../../../../electron/ai/providers/ollama-stream.cjs#L64>)
- buffer.slice — external-or-dynamic-dispatch; [electron/ai/providers/ollama-stream.cjs:65](<../../../../../../../electron/ai/providers/ollama-stream.cjs#L65>)
- decoder.decode — external-or-dynamic-dispatch; [electron/ai/providers/ollama-stream.cjs:73](<../../../../../../../electron/ai/providers/ollama-stream.cjs#L73>)
- 3 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/providers/ollama-stream.test.cjs:35](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L35>) — static-call-site; coverage not established.
- [electron/ai/providers/ollama-stream.test.cjs:55](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L55>) — static-call-site; coverage not established.
- [electron/ai/providers/ollama-stream.test.cjs:235](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L235>) — static-call-site; coverage not established.
- [electron/ai/providers/ollama-stream.test.cjs:3](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-7d8f5c4483b3b55f"></a>

## readChatStream.consume

[electron/ai/providers/ollama-stream.cjs:14](<../../../../../../../electron/ai/providers/ollama-stream.cjs#L14>) · ArrowFunction · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [readChatStream](<ollama-stream.cjs.md#s-f7526d2f26c7a960>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| line | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/providers/ollama-stream.cjs:20](<../../../../../../../electron/ai/providers/ollama-stream.cjs#L20>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/providers/ollama-stream.cjs:26](<../../../../../../../electron/ai/providers/ollama-stream.cjs#L26>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/providers/ollama-stream.cjs:31](<../../../../../../../electron/ai/providers/ollama-stream.cjs#L31>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/providers/ollama-stream.cjs:36](<../../../../../../../electron/ai/providers/ollama-stream.cjs#L36>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/providers/ollama-stream.cjs:42](<../../../../../../../electron/ai/providers/ollama-stream.cjs#L42>)

**Called by (statically resolved):**

- [readChatStream](<ollama-stream.cjs.md#s-f7526d2f26c7a960>) — [electron/ai/providers/ollama-stream.cjs:64](<../../../../../../../electron/ai/providers/ollama-stream.cjs#L64>)
- [readChatStream](<ollama-stream.cjs.md#s-f7526d2f26c7a960>) — [electron/ai/providers/ollama-stream.cjs:69](<../../../../../../../electron/ai/providers/ollama-stream.cjs#L69>)
- [readChatStream](<ollama-stream.cjs.md#s-f7526d2f26c7a960>) — [electron/ai/providers/ollama-stream.cjs:74](<../../../../../../../electron/ai/providers/ollama-stream.cjs#L74>)

Unresolved / external call sites: 5.

- line.trim — external-or-dynamic-dispatch; [electron/ai/providers/ollama-stream.cjs:15](<../../../../../../../electron/ai/providers/ollama-stream.cjs#L15>)
- JSON.parse — external-or-dynamic-dispatch; [electron/ai/providers/ollama-stream.cjs:18](<../../../../../../../electron/ai/providers/ollama-stream.cjs#L18>)
- String — external-or-dynamic-dispatch; [electron/ai/providers/ollama-stream.cjs:31](<../../../../../../../electron/ai/providers/ollama-stream.cjs#L31>)
- onActivity — external-or-dynamic-dispatch; [electron/ai/providers/ollama-stream.cjs:47](<../../../../../../../electron/ai/providers/ollama-stream.cjs#L47>)
- onContent — external-or-dynamic-dispatch; [electron/ai/providers/ollama-stream.cjs:48](<../../../../../../../electron/ai/providers/ollama-stream.cjs#L48>)

**Related tests / acceptance harnesses:**

- [electron/ai/providers/ollama-stream.test.cjs:3](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-2960cdc4a06d9b5e"></a>

## readChatStream.&lt;anonymous@82:33&gt;

[electron/ai/providers/ollama-stream.cjs:82](<../../../../../../../electron/ai/providers/ollama-stream.cjs#L82>) · ArrowFunction · production · [Model-provider adapters](<../../../../../modules/providers.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [readChatStream](<ollama-stream.cjs.md#s-f7526d2f26c7a960>).

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

- [electron/ai/providers/ollama-stream.test.cjs:3](<../../../../../../../electron/ai/providers/ollama-stream.test.cjs#L3>) — file-import-only; coverage not established.
