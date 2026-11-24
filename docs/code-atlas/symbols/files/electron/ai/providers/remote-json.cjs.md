# electron/ai/providers/remote-json.cjs: symbols

[Atlas](<../../../../../README.md>) / [Model-provider adapters](<../../../../../modules/providers.md>) / [electron/ai/providers/remote-json.cjs:1](<../../../../../../../electron/ai/providers/remote-json.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/providers/remote-json.cjs](<remote-json.cjs.md#s-6eaa83212af409dc>) (Module)
- [readRemoteJson](<remote-json.cjs.md#s-ce48dfba0aa4322a>) (FunctionDeclaration)

<a id="s-6eaa83212af409dc"></a>

## electron/ai/providers/remote-json.cjs

[electron/ai/providers/remote-json.cjs:1](<../../../../../../../electron/ai/providers/remote-json.cjs#L1>) · Module · production · [Model-provider adapters](<../../../../../modules/providers.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- require — module-loader; [electron/ai/providers/remote-json.cjs:1](<../../../../../../../electron/ai/providers/remote-json.cjs#L1>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-ce48dfba0aa4322a"></a>

## readRemoteJson

[electron/ai/providers/remote-json.cjs:3](<../../../../../../../electron/ai/providers/remote-json.cjs#L3>) · FunctionDeclaration · production · [Model-provider adapters](<../../../../../modules/providers.md>)

Reads bounded provider JSON without retaining response/error bodies in diagnostics.

Purpose evidence: jsdoc.

Exported as: readRemoteJson ([electron/ai/providers/remote-json.cjs:1](<../../../../../../../electron/ai/providers/remote-json.cjs#L1>)).

Lexical owner: [electron/ai/providers/remote-json.cjs](<remote-json.cjs.md#s-6eaa83212af409dc>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| response | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/providers/remote-json.cjs:10](<../../../../../../../electron/ai/providers/remote-json.cjs#L10>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/providers/remote-json.cjs:19](<../../../../../../../electron/ai/providers/remote-json.cjs#L19>)

**Called by (statically resolved):**

- [OpenAIChatProvider.complete.&lt;anonymous@387:7&gt;](<openai-chat-provider.cjs.md#s-40f5fd63c8baafdb>) — [electron/ai/providers/openai-chat-provider.cjs:398](<../../../../../../../electron/ai/providers/openai-chat-provider.cjs#L398>)

Unresolved / external call sites: 4.

- TextDecoder — external-or-dynamic-dispatch; [electron/ai/providers/remote-json.cjs:6](<../../../../../../../electron/ai/providers/remote-json.cjs#L6>)
- decoder.decode — external-or-dynamic-dispatch; [electron/ai/providers/remote-json.cjs:14](<../../../../../../../electron/ai/providers/remote-json.cjs#L14>)
- JSON.parse — external-or-dynamic-dispatch; [electron/ai/providers/remote-json.cjs:17](<../../../../../../../electron/ai/providers/remote-json.cjs#L17>)
- decoder.decode — external-or-dynamic-dispatch; [electron/ai/providers/remote-json.cjs:17](<../../../../../../../electron/ai/providers/remote-json.cjs#L17>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
