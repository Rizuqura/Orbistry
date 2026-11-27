# scripts/build/build-yahoo-financials-engine.cjs: symbols

[Atlas](<../../../../README.md>) / [Development and acceptance tooling](<../../../../modules/tooling.md>) / [scripts/build/build-yahoo-financials-engine.cjs:1](<../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/build/build-yahoo-financials-engine.cjs](<build-yahoo-financials-engine.cjs.md#s-54fc9ee5f4938810>) (Module)
- [main](<build-yahoo-financials-engine.cjs.md#s-226388a0515524ab>) (FunctionDeclaration)
- [main.quote](<build-yahoo-financials-engine.cjs.md#s-f535178d0f442a73>) (MethodDeclaration)
- [main.&lt;anonymous@159:11&gt;](<build-yahoo-financials-engine.cjs.md#s-dc2e9283845a5313>) (ArrowFunction)
- [failed](<build-yahoo-financials-engine.cjs.md#s-1a09be897f38b52e>) (FunctionExpression)

<a id="s-54fc9ee5f4938810"></a>

## scripts/build/build-yahoo-financials-engine.cjs

[scripts/build/build-yahoo-financials-engine.cjs:1](<../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

- [main](<build-yahoo-financials-engine.cjs.md#s-226388a0515524ab>) — [scripts/build/build-yahoo-financials-engine.cjs:202](<../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L202>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 7.

- require — module-loader; [scripts/build/build-yahoo-financials-engine.cjs:1](<../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L1>)
- require — module-loader; [scripts/build/build-yahoo-financials-engine.cjs:2](<../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L2>)
- require — module-loader; [scripts/build/build-yahoo-financials-engine.cjs:3](<../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L3>)
- require — module-loader; [scripts/build/build-yahoo-financials-engine.cjs:4](<../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L4>)
- require — module-loader; [scripts/build/build-yahoo-financials-engine.cjs:8](<../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L8>)
- require — module-loader; [scripts/build/build-yahoo-financials-engine.cjs:9](<../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L9>)
- main().catch — external-or-dynamic-dispatch; [scripts/build/build-yahoo-financials-engine.cjs:202](<../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L202>)

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
- [copyDependencies](<build-excel-engine.cjs.md#s-d0f75114d535da4d>) — [scripts/build/build-yahoo-financials-engine.cjs:53](<../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L53>)
- [reportSection](<../report-section.cjs.md#s-832510fa6a604520>) — [scripts/build/build-yahoo-financials-engine.cjs:69](<../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L69>)
- [checksums](<build-excel-engine.cjs.md#s-cba22f66c8f6ca49>) — [scripts/build/build-yahoo-financials-engine.cjs:74](<../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L74>)
- [safeDirectory](<../../electron/core/persistence/json-store.cjs.md#s-429fa54bc1a890a0>) — [scripts/build/build-yahoo-financials-engine.cjs:135](<../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L135>)
- [rejectSymlink](<../../electron/core/persistence/json-store.cjs.md#s-aaddc8aab5c0d073>) — [scripts/build/build-yahoo-financials-engine.cjs:136](<../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L136>)
- [checksums](<build-excel-engine.cjs.md#s-cba22f66c8f6ca49>) — [scripts/build/build-yahoo-financials-engine.cjs:152](<../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L152>)

**Called by (statically resolved):**

- [scripts/build/build-yahoo-financials-engine.cjs](<build-yahoo-financials-engine.cjs.md#s-54fc9ee5f4938810>) — [scripts/build/build-yahoo-financials-engine.cjs:202](<../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L202>)

Unresolved / external call sites: 69.

- process.argv.slice — external-or-dynamic-dispatch; [scripts/build/build-yahoo-financials-engine.cjs:13](<../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L13>)
- &#91;2, 3&#93;.includes — external-or-dynamic-dispatch; [scripts/build/build-yahoo-financials-engine.cjs:16](<../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L16>)
- Error — external-or-dynamic-dispatch; [scripts/build/build-yahoo-financials-engine.cjs:20](<../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L20>)
- path.resolve — external-or-dynamic-dispatch; [scripts/build/build-yahoo-financials-engine.cjs:23](<../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L23>)
- path.join — external-or-dynamic-dispatch; [scripts/build/build-yahoo-financials-engine.cjs:24](<../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L24>)
- require — module-loader; [scripts/build/build-yahoo-financials-engine.cjs:30](<../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L30>)
- path.join — external-or-dynamic-dispatch; [scripts/build/build-yahoo-financials-engine.cjs:30](<../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L30>)
- require — module-loader; [scripts/build/build-yahoo-financials-engine.cjs:31](<../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L31>)
- 61 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-f535178d0f442a73"></a>

## main.quote

[scripts/build/build-yahoo-financials-engine.cjs:114](<../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L114>) · MethodDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

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

- Date — external-or-dynamic-dispatch; [scripts/build/build-yahoo-financials-engine.cjs:119](<../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L119>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-dc2e9283845a5313"></a>

## main.&lt;anonymous@159:11&gt;

[scripts/build/build-yahoo-financials-engine.cjs:159](<../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L159>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

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

<a id="s-1a09be897f38b52e"></a>

## failed

[scripts/build/build-yahoo-financials-engine.cjs:202](<../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L202>) · FunctionExpression · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

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

- console.error — external-or-dynamic-dispatch; [scripts/build/build-yahoo-financials-engine.cjs:203](<../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L203>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
