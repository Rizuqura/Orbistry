# scripts/build/build-yahoo-financials-engine.cjs: symbols

[Atlas](<../../../../README.md>) / [Development and acceptance tooling](<../../../../modules/tooling.md>) / [scripts/build/build-yahoo-financials-engine.cjs:1](<../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/build/build-yahoo-financials-engine.cjs](<build-yahoo-financials-engine.cjs.md#s-54fc9ee5f4938810>) (Module)
- [main](<build-yahoo-financials-engine.cjs.md#s-226388a0515524ab>) (FunctionDeclaration)
- [main.quote](<build-yahoo-financials-engine.cjs.md#s-ec76b00a6f983428>) (MethodDeclaration)
- [main.&lt;anonymous@144:11&gt;](<build-yahoo-financials-engine.cjs.md#s-5ebc7470dcd80d63>) (ArrowFunction)
- [failed](<build-yahoo-financials-engine.cjs.md#s-b1f5d012563c39e5>) (FunctionExpression)

<a id="s-54fc9ee5f4938810"></a>

## scripts/build/build-yahoo-financials-engine.cjs

[scripts/build/build-yahoo-financials-engine.cjs:1](<../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

- [main](<build-yahoo-financials-engine.cjs.md#s-226388a0515524ab>) — [scripts/build/build-yahoo-financials-engine.cjs:187](<../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L187>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 7.

- require — module-loader; [scripts/build/build-yahoo-financials-engine.cjs:1](<../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L1>)
- require — module-loader; [scripts/build/build-yahoo-financials-engine.cjs:2](<../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L2>)
- require — module-loader; [scripts/build/build-yahoo-financials-engine.cjs:3](<../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L3>)
- require — module-loader; [scripts/build/build-yahoo-financials-engine.cjs:4](<../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L4>)
- require — module-loader; [scripts/build/build-yahoo-financials-engine.cjs:8](<../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L8>)
- require — module-loader; [scripts/build/build-yahoo-financials-engine.cjs:9](<../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L9>)
- main().catch — external-or-dynamic-dispatch; [scripts/build/build-yahoo-financials-engine.cjs:187](<../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L187>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-226388a0515524ab"></a>

## main

[scripts/build/build-yahoo-financials-engine.cjs:12](<../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L12>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Builds a self-contained financials and earnings package. Explicit upgrades verify installed files and retain a sibling package backup, preserving the separate financial cache.

Purpose evidence: jsdoc.

Lexical owner: [scripts/build/build-yahoo-financials-engine.cjs](<build-yahoo-financials-engine.cjs.md#s-54fc9ee5f4938810>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [safeDirectory](<../../electron/core/persistence/json-store.cjs.md#s-429fa54bc1a890a0>) — [scripts/build/build-yahoo-financials-engine.cjs:33](<../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L33>)
- [copyDependencies](<build-excel-engine.cjs.md#s-d0f75114d535da4d>) — [scripts/build/build-yahoo-financials-engine.cjs:38](<../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L38>)
- [reportSection](<../report-section.cjs.md#s-832510fa6a604520>) — [scripts/build/build-yahoo-financials-engine.cjs:54](<../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L54>)
- [checksums](<build-excel-engine.cjs.md#s-cba22f66c8f6ca49>) — [scripts/build/build-yahoo-financials-engine.cjs:59](<../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L59>)
- [safeDirectory](<../../electron/core/persistence/json-store.cjs.md#s-429fa54bc1a890a0>) — [scripts/build/build-yahoo-financials-engine.cjs:120](<../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L120>)
- [rejectSymlink](<../../electron/core/persistence/json-store.cjs.md#s-aaddc8aab5c0d073>) — [scripts/build/build-yahoo-financials-engine.cjs:121](<../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L121>)
- [checksums](<build-excel-engine.cjs.md#s-cba22f66c8f6ca49>) — [scripts/build/build-yahoo-financials-engine.cjs:137](<../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L137>)

**Called by (statically resolved):**

- [scripts/build/build-yahoo-financials-engine.cjs](<build-yahoo-financials-engine.cjs.md#s-54fc9ee5f4938810>) — [scripts/build/build-yahoo-financials-engine.cjs:187](<../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L187>)

Unresolved / external call sites: 65.

- process.argv.slice — external-or-dynamic-dispatch; [scripts/build/build-yahoo-financials-engine.cjs:13](<../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L13>)
- &#91;2, 3&#93;.includes — external-or-dynamic-dispatch; [scripts/build/build-yahoo-financials-engine.cjs:16](<../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L16>)
- Error — external-or-dynamic-dispatch; [scripts/build/build-yahoo-financials-engine.cjs:20](<../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L20>)
- path.resolve — external-or-dynamic-dispatch; [scripts/build/build-yahoo-financials-engine.cjs:23](<../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L23>)
- path.join — external-or-dynamic-dispatch; [scripts/build/build-yahoo-financials-engine.cjs:24](<../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L24>)
- require — module-loader; [scripts/build/build-yahoo-financials-engine.cjs:30](<../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L30>)
- path.join — external-or-dynamic-dispatch; [scripts/build/build-yahoo-financials-engine.cjs:30](<../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L30>)
- require — module-loader; [scripts/build/build-yahoo-financials-engine.cjs:31](<../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L31>)
- 57 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-ec76b00a6f983428"></a>

## main.quote

[scripts/build/build-yahoo-financials-engine.cjs:99](<../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L99>) · MethodDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Verifies packaged execution without placing network calls during a build.

Purpose evidence: jsdoc.

Lexical owner: [main](<build-yahoo-financials-engine.cjs.md#s-226388a0515524ab>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| symbol | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- Date — external-or-dynamic-dispatch; [scripts/build/build-yahoo-financials-engine.cjs:104](<../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L104>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-5ebc7470dcd80d63"></a>

## main.&lt;anonymous@144:11&gt;

[scripts/build/build-yahoo-financials-engine.cjs:144](<../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L144>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<build-yahoo-financials-engine.cjs.md#s-226388a0515524ab>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| &#91;name, hash&#93; | &#91;any, any&#93; | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-b1f5d012563c39e5"></a>

## failed

[scripts/build/build-yahoo-financials-engine.cjs:187](<../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L187>) · FunctionExpression · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/build/build-yahoo-financials-engine.cjs](<build-yahoo-financials-engine.cjs.md#s-54fc9ee5f4938810>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| error | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- console.error — external-or-dynamic-dispatch; [scripts/build/build-yahoo-financials-engine.cjs:188](<../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L188>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
