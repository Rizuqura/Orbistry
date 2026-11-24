# electron/ai/provider-registry.cjs: symbols

[Atlas](<../../../../README.md>) / [Retained AI runtime](<../../../../modules/ai-runtime.md>) / [electron/ai/provider-registry.cjs:1](<../../../../../../electron/ai/provider-registry.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/provider-registry.cjs](<provider-registry.cjs.md#s-2fcb94ed360f8767>) (Module)
- [ProviderRegistry](<provider-registry.cjs.md#s-04ae7733c329d3f4>) (ClassDeclaration)
- [ProviderRegistry.constructor](<provider-registry.cjs.md#s-0c6dac7385064eb5>) (Constructor)
- [ProviderRegistry.get](<provider-registry.cjs.md#s-aa0c9952767d6afb>) (MethodDeclaration)
- [ProviderRegistry.entries](<provider-registry.cjs.md#s-dada83c12861f4df>) (MethodDeclaration)

<a id="s-2fcb94ed360f8767"></a>

## electron/ai/provider-registry.cjs

[electron/ai/provider-registry.cjs:1](<../../../../../../electron/ai/provider-registry.cjs#L1>) · Module · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- require — module-loader; [electron/ai/provider-registry.cjs:1](<../../../../../../electron/ai/provider-registry.cjs#L1>)

**Related tests / acceptance harnesses:**

- [electron/ai/backend-reset.test.cjs:9](<../../../../../../electron/ai/backend-reset.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/context-limits.test.cjs:9](<../../../../../../electron/ai/context-limits.test.cjs#L9>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:16](<../../../../../../scripts/chat-live-acceptance.cjs#L16>) — file-import-only; coverage not established.

<a id="s-04ae7733c329d3f4"></a>

## ProviderRegistry

[electron/ai/provider-registry.cjs:3](<../../../../../../electron/ai/provider-registry.cjs#L3>) · ClassDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: ProviderRegistry ([electron/ai/provider-registry.cjs:1](<../../../../../../electron/ai/provider-registry.cjs#L1>)).

Lexical owner: [electron/ai/provider-registry.cjs](<provider-registry.cjs.md#s-2fcb94ed360f8767>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/backend-reset.test.cjs:9](<../../../../../../electron/ai/backend-reset.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/context-limits.test.cjs:9](<../../../../../../electron/ai/context-limits.test.cjs#L9>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:16](<../../../../../../scripts/chat-live-acceptance.cjs#L16>) — file-import-only; coverage not established.

<a id="s-0c6dac7385064eb5"></a>

## ProviderRegistry.constructor

[electron/ai/provider-registry.cjs:4](<../../../../../../electron/ai/provider-registry.cjs#L4>) · Constructor · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ProviderRegistry](<provider-registry.cjs.md#s-04ae7733c329d3f4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| providers | any | compiler-inferred | required |

Returns: ProviderRegistry (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@157:79&gt;](<backend-reset.test.cjs.md#s-041bcaccc44bab10>) — [electron/ai/backend-reset.test.cjs:159](<../../../../../../electron/ai/backend-reset.test.cjs#L159>)
- [&lt;anonymous@22:77&gt;](<context-limits.test.cjs.md#s-e7c5cbcc1791f23f>) — [electron/ai/context-limits.test.cjs:28](<../../../../../../electron/ai/context-limits.test.cjs#L28>)
- [ModelRegistry.constructor](<model-registry.cjs.md#s-776a77db3083bdfd>) — [electron/ai/model-registry.cjs:37](<../../../../../../electron/ai/model-registry.cjs#L37>)
- [&lt;anonymous@163:22&gt;](<../main.cjs.md#s-2232a6bfcb723f81>) — [electron/main.cjs:227](<../../../../../../electron/main.cjs#L227>)
- [main](<../../scripts/chat-live-acceptance.cjs.md#s-37e0176fb42530c3>) — [scripts/chat-live-acceptance.cjs:59](<../../../../../../scripts/chat-live-acceptance.cjs#L59>)

Unresolved / external call sites: 2.

- Map — external-or-dynamic-dispatch; [electron/ai/provider-registry.cjs:5](<../../../../../../electron/ai/provider-registry.cjs#L5>)
- Object.entries — external-or-dynamic-dispatch; [electron/ai/provider-registry.cjs:5](<../../../../../../electron/ai/provider-registry.cjs#L5>)

**Related tests / acceptance harnesses:**

- [electron/ai/backend-reset.test.cjs:159](<../../../../../../electron/ai/backend-reset.test.cjs#L159>) — static-call-site; coverage not established.
- [electron/ai/context-limits.test.cjs:28](<../../../../../../electron/ai/context-limits.test.cjs#L28>) — static-call-site; coverage not established.
- [scripts/chat-live-acceptance.cjs:59](<../../../../../../scripts/chat-live-acceptance.cjs#L59>) — static-call-site; coverage not established.
- [electron/ai/backend-reset.test.cjs:9](<../../../../../../electron/ai/backend-reset.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/context-limits.test.cjs:9](<../../../../../../electron/ai/context-limits.test.cjs#L9>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:16](<../../../../../../scripts/chat-live-acceptance.cjs#L16>) — file-import-only; coverage not established.

<a id="s-aa0c9952767d6afb"></a>

## ProviderRegistry.get

[electron/ai/provider-registry.cjs:7](<../../../../../../electron/ai/provider-registry.cjs#L7>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ProviderRegistry](<provider-registry.cjs.md#s-04ae7733c329d3f4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| id | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ModelRuntimeError.constructor](<../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/provider-registry.cjs:10](<../../../../../../electron/ai/provider-registry.cjs#L10>)

**Called by (statically resolved):**

- [ModelRegistry.providerFor](<model-registry.cjs.md#s-3e05acf42245b191>) — [electron/ai/model-registry.cjs:137](<../../../../../../electron/ai/model-registry.cjs#L137>)

Unresolved / external call sites: 1.

- this.providers.get — external-or-dynamic-dispatch; [electron/ai/provider-registry.cjs:8](<../../../../../../electron/ai/provider-registry.cjs#L8>)

**Related tests / acceptance harnesses:**

- [electron/ai/backend-reset.test.cjs:9](<../../../../../../electron/ai/backend-reset.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/context-limits.test.cjs:9](<../../../../../../electron/ai/context-limits.test.cjs#L9>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:16](<../../../../../../scripts/chat-live-acceptance.cjs#L16>) — file-import-only; coverage not established.

<a id="s-dada83c12861f4df"></a>

## ProviderRegistry.entries

[electron/ai/provider-registry.cjs:16](<../../../../../../electron/ai/provider-registry.cjs#L16>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ProviderRegistry](<provider-registry.cjs.md#s-04ae7733c329d3f4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: {} (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [ModelRegistry.read](<model-registry.cjs.md#s-d98b4cc3aafbf180>) — [electron/ai/model-registry.cjs:44](<../../../../../../electron/ai/model-registry.cjs#L44>)
- [ModelRegistry.state](<model-registry.cjs.md#s-a10ce2395e5d46a8>) — [electron/ai/model-registry.cjs:55](<../../../../../../electron/ai/model-registry.cjs#L55>)

Unresolved / external call sites: 1.

- this.providers.entries — external-or-dynamic-dispatch; [electron/ai/provider-registry.cjs:17](<../../../../../../electron/ai/provider-registry.cjs#L17>)

**Related tests / acceptance harnesses:**

- [electron/ai/backend-reset.test.cjs:9](<../../../../../../electron/ai/backend-reset.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/context-limits.test.cjs:9](<../../../../../../electron/ai/context-limits.test.cjs#L9>) — file-import-only; coverage not established.
- [scripts/chat-live-acceptance.cjs:16](<../../../../../../scripts/chat-live-acceptance.cjs#L16>) — file-import-only; coverage not established.
