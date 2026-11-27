# electron/ai/quote-origin.cjs: symbols

[Atlas](<../../../../README.md>) / [Retained AI runtime](<../../../../modules/ai-runtime.md>) / [electron/ai/quote-origin.cjs:1](<../../../../../../electron/ai/quote-origin.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/quote-origin.cjs](<quote-origin.cjs.md#s-039ceb29467ee530>) (Module)
- [quoteOrigin](<quote-origin.cjs.md#s-d2bb16ed0ae1f043>) (FunctionDeclaration)

<a id="s-039ceb29467ee530"></a>

## electron/ai/quote-origin.cjs

[electron/ai/quote-origin.cjs:1](<../../../../../../electron/ai/quote-origin.cjs#L1>) · Module · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d2bb16ed0ae1f043"></a>

## quoteOrigin

[electron/ai/quote-origin.cjs:2](<../../../../../../electron/ai/quote-origin.cjs#L2>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

Labels delivery origin independently of market observation age. History reads do not claim a new provider invocation; no network or storage side effects.

Purpose evidence: jsdoc.

Exported as: quoteOrigin ([electron/ai/quote-origin.cjs:1](<../../../../../../electron/ai/quote-origin.cjs#L1>)).

Lexical owner: [electron/ai/quote-origin.cjs](<quote-origin.cjs.md#s-039ceb29467ee530>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| quote | any | compiler-inferred | required |
| historical | boolean | compiler-inferred | optional, default present |

Returns: "historical" &#124; "stale_cache" &#124; "valid_cache" &#124; "provider" (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [priceEvidence](<agents/entity-agent-protocol.cjs.md#s-db43e3ad616645c2>) — [electron/ai/agents/entity-agent-protocol.cjs:296](<../../../../../../electron/ai/agents/entity-agent-protocol.cjs#L296>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
