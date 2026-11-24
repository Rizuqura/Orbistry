# electron/ai/model-check.cjs: symbols

[Atlas](<../../../../README.md>) / [Retained AI runtime](<../../../../modules/ai-runtime.md>) / [electron/ai/model-check.cjs:1](<../../../../../../electron/ai/model-check.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/model-check.cjs](<model-check.cjs.md#s-bd068cf9e771d5d7>) (Module)
- [checkRemoteModel](<model-check.cjs.md#s-e84d234a40a5e24b>) (FunctionDeclaration)

<a id="s-bd068cf9e771d5d7"></a>

## electron/ai/model-check.cjs

[electron/ai/model-check.cjs:1](<../../../../../../electron/ai/model-check.cjs#L1>) · Module · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- require — module-loader; [electron/ai/model-check.cjs:1](<../../../../../../electron/ai/model-check.cjs#L1>)
- require — module-loader; [electron/ai/model-check.cjs:2](<../../../../../../electron/ai/model-check.cjs#L2>)
- require — module-loader; [electron/ai/model-check.cjs:3](<../../../../../../electron/ai/model-check.cjs#L3>)
- require — module-loader; [electron/ai/model-check.cjs:4](<../../../../../../electron/ai/model-check.cjs#L4>)
- require — module-loader; [electron/ai/model-check.cjs:5](<../../../../../../electron/ai/model-check.cjs#L5>)

**Related tests / acceptance harnesses:**

- [electron/ai/model-check.test.cjs:3](<../../../../../../electron/ai/model-check.test.cjs#L3>) — file-import-only; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:67](<../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L67>) — file-import-only; coverage not established.

<a id="s-e84d234a40a5e24b"></a>

## checkRemoteModel

[electron/ai/model-check.cjs:7](<../../../../../../electron/ai/model-check.cjs#L7>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: checkRemoteModel ([electron/ai/model-check.cjs:1](<../../../../../../electron/ai/model-check.cjs#L1>)).

Lexical owner: [electron/ai/model-check.cjs](<model-check.cjs.md#s-bd068cf9e771d5d7>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| provider | any | compiler-inferred | required |
| providerId | any | compiler-inferred | required |
| model | any | compiler-inferred | required |
| signal | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [buildContextMessages](<inference/prompt-builder.cjs.md#s-241c37ad734d8bcd>) — [electron/ai/model-check.cjs:10](<../../../../../../electron/ai/model-check.cjs#L10>)
- [validateAnswer](<inference/response-validation.cjs.md#s-21e2e91befa4c26f>) — [electron/ai/model-check.cjs:37](<../../../../../../electron/ai/model-check.cjs#L37>)
- [serializeModelError](<../shared/runtime-errors.cjs.md#s-0a992a8fcd9686e4>) — [electron/ai/model-check.cjs:50](<../../../../../../electron/ai/model-check.cjs#L50>)

**Called by (statically resolved):**

- [registerAiIpc.&lt;anonymous@362:30&gt;.&lt;anonymous@376:30&gt;](<ipc.cjs.md#s-5079164e803c5023>) — [electron/ai/ipc.cjs:385](<../../../../../../electron/ai/ipc.cjs#L385>)
- [&lt;anonymous@7:90&gt;](<model-check.test.cjs.md#s-6e047a24be49f561>) — [electron/ai/model-check.test.cjs:10](<../../../../../../electron/ai/model-check.test.cjs#L10>)
- [&lt;anonymous@34:80&gt;](<model-check.test.cjs.md#s-cc39fe664e5a0aa7>) — [electron/ai/model-check.test.cjs:41](<../../../../../../electron/ai/model-check.test.cjs#L41>)
- [&lt;anonymous@34:80&gt;](<model-check.test.cjs.md#s-cc39fe664e5a0aa7>) — [electron/ai/model-check.test.cjs:49](<../../../../../../electron/ai/model-check.test.cjs#L49>)
- [&lt;anonymous@40:81&gt;](<providers/openrouter-provider.test.cjs.md#s-0c156f842c2a7eb4>) — [electron/ai/providers/openrouter-provider.test.cjs:67](<../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L67>)

Unresolved / external call sites: 10.

- Date.now — external-or-dynamic-dispatch; [electron/ai/model-check.cjs:8](<../../../../../../electron/ai/model-check.cjs#L8>)
- "a".repeat — external-or-dynamic-dispatch; [electron/ai/model-check.cjs:17](<../../../../../../electron/ai/model-check.cjs#L17>)
- provider.complete — external-or-dynamic-dispatch; [electron/ai/model-check.cjs:22](<../../../../../../electron/ai/model-check.cjs#L22>)
- validateAnswer(response).trim — external-or-dynamic-dispatch; [electron/ai/model-check.cjs:37](<../../../../../../electron/ai/model-check.cjs#L37>)
- Date.now — external-or-dynamic-dispatch; [electron/ai/model-check.cjs:43](<../../../../../../electron/ai/model-check.cjs#L43>)
- new Date().toISOString — external-or-dynamic-dispatch; [electron/ai/model-check.cjs:44](<../../../../../../electron/ai/model-check.cjs#L44>)
- Date — external-or-dynamic-dispatch; [electron/ai/model-check.cjs:44](<../../../../../../electron/ai/model-check.cjs#L44>)
- Date.now — external-or-dynamic-dispatch; [electron/ai/model-check.cjs:55](<../../../../../../electron/ai/model-check.cjs#L55>)
- 2 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/model-check.test.cjs:10](<../../../../../../electron/ai/model-check.test.cjs#L10>) — static-call-site; coverage not established.
- [electron/ai/model-check.test.cjs:41](<../../../../../../electron/ai/model-check.test.cjs#L41>) — static-call-site; coverage not established.
- [electron/ai/model-check.test.cjs:49](<../../../../../../electron/ai/model-check.test.cjs#L49>) — static-call-site; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:67](<../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L67>) — static-call-site; coverage not established.
- [electron/ai/model-check.test.cjs:3](<../../../../../../electron/ai/model-check.test.cjs#L3>) — file-import-only; coverage not established.
- [electron/ai/providers/openrouter-provider.test.cjs:67](<../../../../../../electron/ai/providers/openrouter-provider.test.cjs#L67>) — file-import-only; coverage not established.
