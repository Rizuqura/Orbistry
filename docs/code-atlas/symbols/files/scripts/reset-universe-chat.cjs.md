# scripts/reset-universe-chat.cjs: symbols

[Atlas](<../../../README.md>) / [Development and acceptance tooling](<../../../modules/tooling.md>) / [scripts/reset-universe-chat.cjs:1](<../../../../../scripts/reset-universe-chat.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/reset-universe-chat.cjs](<reset-universe-chat.cjs.md#s-a5bda09448e7aab0>) (Module)
- [main](<reset-universe-chat.cjs.md#s-ea0ee3a6ff715091>) (FunctionDeclaration)
- [&lt;anonymous@18:14&gt;](<reset-universe-chat.cjs.md#s-c8dad855be4f37aa>) (ArrowFunction)

<a id="s-a5bda09448e7aab0"></a>

## scripts/reset-universe-chat.cjs

[scripts/reset-universe-chat.cjs:1](<../../../../../scripts/reset-universe-chat.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

- [main](<reset-universe-chat.cjs.md#s-ea0ee3a6ff715091>) — [scripts/reset-universe-chat.cjs:18](<../../../../../scripts/reset-universe-chat.cjs#L18>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- require — module-loader; [scripts/reset-universe-chat.cjs:1](<../../../../../scripts/reset-universe-chat.cjs#L1>)
- require — module-loader; [scripts/reset-universe-chat.cjs:2](<../../../../../scripts/reset-universe-chat.cjs#L2>)
- main().catch — external-or-dynamic-dispatch; [scripts/reset-universe-chat.cjs:18](<../../../../../scripts/reset-universe-chat.cjs#L18>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-ea0ee3a6ff715091"></a>

## main

[scripts/reset-universe-chat.cjs:5](<../../../../../scripts/reset-universe-chat.cjs#L5>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

Requires explicit existing profile/Universe paths. Defaults to a content-free preview; --apply clears history and non-NVIDIA configuration.

Purpose evidence: jsdoc.

Lexical owner: [scripts/reset-universe-chat.cjs](<reset-universe-chat.cjs.md#s-a5bda09448e7aab0>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [resetBackend](<../electron/ai/backend-reset.cjs.md#s-8923e8f07754093d>) — [scripts/reset-universe-chat.cjs:11](<../../../../../scripts/reset-universe-chat.cjs#L11>)

**Called by (statically resolved):**

- [scripts/reset-universe-chat.cjs](<reset-universe-chat.cjs.md#s-a5bda09448e7aab0>) — [scripts/reset-universe-chat.cjs:18](<../../../../../scripts/reset-universe-chat.cjs#L18>)

Unresolved / external call sites: 6.

- process.argv.slice — external-or-dynamic-dispatch; [scripts/reset-universe-chat.cjs:6](<../../../../../scripts/reset-universe-chat.cjs#L6>)
- Error — external-or-dynamic-dispatch; [scripts/reset-universe-chat.cjs:8](<../../../../../scripts/reset-universe-chat.cjs#L8>)
- path.resolve — external-or-dynamic-dispatch; [scripts/reset-universe-chat.cjs:12](<../../../../../scripts/reset-universe-chat.cjs#L12>)
- path.resolve — external-or-dynamic-dispatch; [scripts/reset-universe-chat.cjs:13](<../../../../../scripts/reset-universe-chat.cjs#L13>)
- process.stdout.write — external-or-dynamic-dispatch; [scripts/reset-universe-chat.cjs:16](<../../../../../scripts/reset-universe-chat.cjs#L16>)
- JSON.stringify — external-or-dynamic-dispatch; [scripts/reset-universe-chat.cjs:16](<../../../../../scripts/reset-universe-chat.cjs#L16>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-c8dad855be4f37aa"></a>

## &lt;anonymous@18:14&gt;

[scripts/reset-universe-chat.cjs:18](<../../../../../scripts/reset-universe-chat.cjs#L18>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/reset-universe-chat.cjs](<reset-universe-chat.cjs.md#s-a5bda09448e7aab0>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| error | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- console.error — external-or-dynamic-dispatch; [scripts/reset-universe-chat.cjs:19](<../../../../../scripts/reset-universe-chat.cjs#L19>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
