# scripts/build/build-core-only.cjs: symbols

[Atlas](<../../../../README.md>) / [Development and acceptance tooling](<../../../../modules/tooling.md>) / [scripts/build/build-core-only.cjs:1](<../../../../../../scripts/build/build-core-only.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/build/build-core-only.cjs](<build-core-only.cjs.md#s-eb93592cb3a5ab12>) (Module)
- [buildCoreOnly](<build-core-only.cjs.md#s-01833472459fa114>) (FunctionDeclaration)
- [buildCoreOnly.&lt;anonymous@18:7&gt;](<build-core-only.cjs.md#s-725a0b66d7032e01>) (ArrowFunction)
- [buildCoreOnly.&lt;anonymous@29:49&gt;](<build-core-only.cjs.md#s-bc4753a250a437c9>) (ArrowFunction)
- [&lt;anonymous@35:23&gt;](<build-core-only.cjs.md#s-1d0928bcce7c0b5d>) (ArrowFunction)

<a id="s-eb93592cb3a5ab12"></a>

## scripts/build/build-core-only.cjs

[scripts/build/build-core-only.cjs:1](<../../../../../../scripts/build/build-core-only.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

- [buildCoreOnly](<build-core-only.cjs.md#s-01833472459fa114>) — [scripts/build/build-core-only.cjs:35](<../../../../../../scripts/build/build-core-only.cjs#L35>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- require — module-loader; [scripts/build/build-core-only.cjs:1](<../../../../../../scripts/build/build-core-only.cjs#L1>)
- require — module-loader; [scripts/build/build-core-only.cjs:2](<../../../../../../scripts/build/build-core-only.cjs#L2>)
- require — module-loader; [scripts/build/build-core-only.cjs:3](<../../../../../../scripts/build/build-core-only.cjs#L3>)
- require — module-loader; [scripts/build/build-core-only.cjs:4](<../../../../../../scripts/build/build-core-only.cjs#L4>)
- buildCoreOnly().catch — external-or-dynamic-dispatch; [scripts/build/build-core-only.cjs:35](<../../../../../../scripts/build/build-core-only.cjs#L35>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-01833472459fa114"></a>

## buildCoreOnly

[scripts/build/build-core-only.cjs:6](<../../../../../../scripts/build/build-core-only.cjs#L6>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/build/build-core-only.cjs](<build-core-only.cjs.md#s-eb93592cb3a5ab12>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [scripts/build/build-core-only.cjs](<build-core-only.cjs.md#s-eb93592cb3a5ab12>) — [scripts/build/build-core-only.cjs:35](<../../../../../../scripts/build/build-core-only.cjs#L35>)

Unresolved / external call sites: 11.

- path.resolve — external-or-dynamic-dispatch; [scripts/build/build-core-only.cjs:7](<../../../../../../scripts/build/build-core-only.cjs#L7>)
- fs.mkdir — external-or-dynamic-dispatch; [scripts/build/build-core-only.cjs:8](<../../../../../../scripts/build/build-core-only.cjs#L8>)
- fs.mkdtemp — external-or-dynamic-dispatch; [scripts/build/build-core-only.cjs:9](<../../../../../../scripts/build/build-core-only.cjs#L9>)
- path.join — external-or-dynamic-dispatch; [scripts/build/build-core-only.cjs:9](<../../../../../../scripts/build/build-core-only.cjs#L9>)
- &#91;"yahoo-finance2", "unzipper", "ssf", "sax"&#93;.map — external-or-dynamic-dispatch; [scripts/build/build-core-only.cjs:17](<../../../../../../scripts/build/build-core-only.cjs#L17>)
- build — external-or-dynamic-dispatch; [scripts/build/build-core-only.cjs:21](<../../../../../../scripts/build/build-core-only.cjs#L21>)
- Platform.WINDOWS.createTarget — external-or-dynamic-dispatch; [scripts/build/build-core-only.cjs:22](<../../../../../../scripts/build/build-core-only.cjs#L22>)
- path.resolve — external-or-dynamic-dispatch; [scripts/build/build-core-only.cjs:27](<../../../../../../scripts/build/build-core-only.cjs#L27>)
- 3 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-725a0b66d7032e01"></a>

## buildCoreOnly.&lt;anonymous@18:7&gt;

[scripts/build/build-core-only.cjs:18](<../../../../../../scripts/build/build-core-only.cjs#L18>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [buildCoreOnly](<build-core-only.cjs.md#s-01833472459fa114>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| name | any | compiler-inferred | required |

Returns: string (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-bc4753a250a437c9"></a>

## buildCoreOnly.&lt;anonymous@29:49&gt;

[scripts/build/build-core-only.cjs:29](<../../../../../../scripts/build/build-core-only.cjs#L29>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [buildCoreOnly](<build-core-only.cjs.md#s-01833472459fa114>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| pattern | any | compiler-inferred | required |

Returns: string (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-1d0928bcce7c0b5d"></a>

## &lt;anonymous@35:23&gt;

[scripts/build/build-core-only.cjs:35](<../../../../../../scripts/build/build-core-only.cjs#L35>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/build/build-core-only.cjs](<build-core-only.cjs.md#s-eb93592cb3a5ab12>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| error | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- console.error — external-or-dynamic-dispatch; [scripts/build/build-core-only.cjs:36](<../../../../../../scripts/build/build-core-only.cjs#L36>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
