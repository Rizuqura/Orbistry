# electron/ai/model-errors.test.cjs: symbols

[Atlas](<../../../../README.md>) / [Retained AI runtime](<../../../../modules/ai-runtime.md>) / [electron/ai/model-errors.test.cjs:1](<../../../../../../electron/ai/model-errors.test.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/model-errors.test.cjs](<model-errors.test.cjs.md#s-2a6bc291546a88e8>) (Module)
- [&lt;anonymous@9:85&gt;](<model-errors.test.cjs.md#s-97d3e16cb74e5af0>) (ArrowFunction)

<a id="s-2a6bc291546a88e8"></a>

## electron/ai/model-errors.test.cjs

[electron/ai/model-errors.test.cjs:1](<../../../../../../electron/ai/model-errors.test.cjs#L1>) · Module · test · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- require — module-loader; [electron/ai/model-errors.test.cjs:1](<../../../../../../electron/ai/model-errors.test.cjs#L1>)
- require — module-loader; [electron/ai/model-errors.test.cjs:2](<../../../../../../electron/ai/model-errors.test.cjs#L2>)
- require — module-loader; [electron/ai/model-errors.test.cjs:3](<../../../../../../electron/ai/model-errors.test.cjs#L3>)
- require — module-loader; [electron/ai/model-errors.test.cjs:7](<../../../../../../electron/ai/model-errors.test.cjs#L7>)
- test — external-or-dynamic-dispatch; [electron/ai/model-errors.test.cjs:9](<../../../../../../electron/ai/model-errors.test.cjs#L9>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-97d3e16cb74e5af0"></a>

## &lt;anonymous@9:85&gt;

[electron/ai/model-errors.test.cjs:9](<../../../../../../electron/ai/model-errors.test.cjs#L9>) · ArrowFunction · test · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/model-errors.test.cjs](<model-errors.test.cjs.md#s-2a6bc291546a88e8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [serializeModelError](<../shared/runtime-errors.cjs.md#s-0a992a8fcd9686e4>) — [electron/ai/model-errors.test.cjs:11](<../../../../../../electron/ai/model-errors.test.cjs#L11>)
- [ModelRuntimeError.constructor](<../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/model-errors.test.cjs:12](<../../../../../../electron/ai/model-errors.test.cjs#L12>)
- [serializeModelError](<../shared/runtime-errors.cjs.md#s-0a992a8fcd9686e4>) — [electron/ai/model-errors.test.cjs:21](<../../../../../../electron/ai/model-errors.test.cjs#L21>)
- [BrainScopeError.constructor](<../brain-errors.cjs.md#s-d5903b380579f4df>) — [electron/ai/model-errors.test.cjs:22](<../../../../../../electron/ai/model-errors.test.cjs#L22>)
- [serializeModelError](<../shared/runtime-errors.cjs.md#s-0a992a8fcd9686e4>) — [electron/ai/model-errors.test.cjs:33](<../../../../../../electron/ai/model-errors.test.cjs#L33>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- assert.deepEqual — external-or-dynamic-dispatch; [electron/ai/model-errors.test.cjs:10](<../../../../../../electron/ai/model-errors.test.cjs#L10>)
- assert.deepEqual — external-or-dynamic-dispatch; [electron/ai/model-errors.test.cjs:20](<../../../../../../electron/ai/model-errors.test.cjs#L20>)
- assert.equal — external-or-dynamic-dispatch; [electron/ai/model-errors.test.cjs:32](<../../../../../../electron/ai/model-errors.test.cjs#L32>)
- Error — external-or-dynamic-dispatch; [electron/ai/model-errors.test.cjs:33](<../../../../../../electron/ai/model-errors.test.cjs#L33>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
