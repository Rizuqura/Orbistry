# scripts/fixtures/yahoo-client.cjs: symbols

[Atlas](<../../../../README.md>) / [Development and acceptance tooling](<../../../../modules/tooling.md>) / [scripts/fixtures/yahoo-client.cjs:1](<../../../../../../scripts/fixtures/yahoo-client.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/fixtures/yahoo-client.cjs](<yahoo-client.cjs.md#s-d330aa9a5a23d890>) (Module)
- [&lt;anonymous@3:21&gt;](<yahoo-client.cjs.md#s-96e7fd818e73bf55>) (ArrowFunction)
- [&lt;anonymous@3:21&gt;.quote](<yahoo-client.cjs.md#s-c4103bceee562db2>) (MethodDeclaration)
- [&lt;anonymous@3:21&gt;.chart](<yahoo-client.cjs.md#s-b503329090929c8d>) (MethodDeclaration)
- [&lt;anonymous@3:21&gt;.quoteSummary](<yahoo-client.cjs.md#s-3aa2c670840cd31e>) (MethodDeclaration)
- [&lt;anonymous@3:21&gt;.fundamentalsTimeSeries](<yahoo-client.cjs.md#s-c6b86f9b9fadfd0a>) (MethodDeclaration)

<a id="s-d330aa9a5a23d890"></a>

## scripts/fixtures/yahoo-client.cjs

[scripts/fixtures/yahoo-client.cjs:1](<../../../../../../scripts/fixtures/yahoo-client.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- Date — external-or-dynamic-dispatch; [scripts/fixtures/yahoo-client.cjs:2](<../../../../../../scripts/fixtures/yahoo-client.cjs#L2>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-96e7fd818e73bf55"></a>

## &lt;anonymous@3:21&gt;

[scripts/fixtures/yahoo-client.cjs:3](<../../../../../../scripts/fixtures/yahoo-client.cjs#L3>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/fixtures/yahoo-client.cjs](<yahoo-client.cjs.md#s-d330aa9a5a23d890>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: { quote(symbol: any): unknown; chart(symbol: any): unknown; quoteSummary(): unknown; fundamentalsTimeSeries(symbol: any, { type }: { type: any; }): unknown; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-c4103bceee562db2"></a>

## &lt;anonymous@3:21&gt;.quote

[scripts/fixtures/yahoo-client.cjs:4](<../../../../../../scripts/fixtures/yahoo-client.cjs#L4>) · MethodDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@3:21&gt;](<yahoo-client.cjs.md#s-96e7fd818e73bf55>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| symbol | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-b503329090929c8d"></a>

## &lt;anonymous@3:21&gt;.chart

[scripts/fixtures/yahoo-client.cjs:13](<../../../../../../scripts/fixtures/yahoo-client.cjs#L13>) · MethodDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@3:21&gt;](<yahoo-client.cjs.md#s-96e7fd818e73bf55>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| symbol | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-3aa2c670840cd31e"></a>

## &lt;anonymous@3:21&gt;.quoteSummary

[scripts/fixtures/yahoo-client.cjs:19](<../../../../../../scripts/fixtures/yahoo-client.cjs#L19>) · MethodDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@3:21&gt;](<yahoo-client.cjs.md#s-96e7fd818e73bf55>).

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

<a id="s-c6b86f9b9fadfd0a"></a>

## &lt;anonymous@3:21&gt;.fundamentalsTimeSeries

[scripts/fixtures/yahoo-client.cjs:25](<../../../../../../scripts/fixtures/yahoo-client.cjs#L25>) · MethodDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@3:21&gt;](<yahoo-client.cjs.md#s-96e7fd818e73bf55>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| symbol | any | compiler-inferred | required |
| { type } | { type: any; } | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
