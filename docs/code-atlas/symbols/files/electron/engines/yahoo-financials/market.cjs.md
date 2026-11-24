# electron/engines/yahoo-financials/market.cjs: symbols

[Atlas](<../../../../../README.md>) / [Built-in Engines and data adapters](<../../../../../modules/engines.md>) / [electron/engines/yahoo-financials/market.cjs:1](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/engines/yahoo-financials/market.cjs](<market.cjs.md#s-b724b027df848bcd>) (Module)
- [RANGES](<market.cjs.md#s-aa45d5e36cc85964>) (VariableDeclaration)
- [numeric](<market.cjs.md#s-92c1749f78c55f9d>) (SchemaBinding)
- [quoteSchema](<market.cjs.md#s-d6da2ebaf6dbfb3b>) (SchemaBinding)
- [historySchema](<market.cjs.md#s-588a721b10a61755>) (SchemaBinding)
- [number](<market.cjs.md#s-58eb617de1ed5a77>) (FunctionDeclaration)
- [instant](<market.cjs.md#s-1cefc2d1c88124b2>) (FunctionDeclaration)
- [createMarketProvider](<market.cjs.md#s-43dae10f39c26f94>) (FunctionDeclaration)
- [createMarketProvider.provider](<market.cjs.md#s-8bacf60a92cf7bf4>) (FunctionDeclaration)
- [createMarketProvider.options](<market.cjs.md#s-66d508043be571f0>) (FunctionDeclaration)
- [createMarketProvider.getQuote](<market.cjs.md#s-78b5abd14410e0af>) (FunctionDeclaration)
- [createMarketProvider.getPriceHistory](<market.cjs.md#s-4f90d268c067f0d8>) (FunctionDeclaration)
- [createMarketProvider.getPriceHistory.&lt;anonymous@154:14&gt;](<market.cjs.md#s-c003dc81bed2dd8a>) (ArrowFunction)
- [createMarketProvider.getPriceHistory.&lt;anonymous@162:15&gt;](<market.cjs.md#s-44f4bc089ef48784>) (ArrowFunction)
- [createMarketProvider.getPriceHistory.&lt;anonymous@163:52&gt;](<market.cjs.md#s-acd09396da84f6e9>) (ArrowFunction)
- [createMarketProvider.getPriceHistory.&lt;anonymous@167:46&gt;](<market.cjs.md#s-8dd881eb48b3f3c6>) (ArrowFunction)

<a id="s-b724b027df848bcd"></a>

## electron/engines/yahoo-financials/market.cjs

[electron/engines/yahoo-financials/market.cjs:1](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L1>) · Module · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- require — module-loader; [electron/engines/yahoo-financials/market.cjs:1](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L1>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-aa45d5e36cc85964"></a>

## RANGES

[electron/engines/yahoo-financials/market.cjs:2](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L2>) · VariableDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: RANGES ([electron/engines/yahoo-financials/market.cjs:1](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L1>)).

Lexical owner: [electron/engines/yahoo-financials/market.cjs](<market.cjs.md#s-b724b027df848bcd>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- Object.freeze — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/market.cjs:2](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L2>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-92c1749f78c55f9d"></a>

## numeric

[electron/engines/yahoo-financials/market.cjs:3](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L3>) · SchemaBinding · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/engines/yahoo-financials/market.cjs](<market.cjs.md#s-b724b027df848bcd>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- z.number().finite().nullable — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/market.cjs:3](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L3>)
- z.number().finite — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/market.cjs:3](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L3>)
- z.number — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/market.cjs:3](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L3>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d6da2ebaf6dbfb3b"></a>

## quoteSchema

[electron/engines/yahoo-financials/market.cjs:4](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L4>) · SchemaBinding · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: quoteSchema ([electron/engines/yahoo-financials/market.cjs:1](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L1>)).

Lexical owner: [electron/engines/yahoo-financials/market.cjs](<market.cjs.md#s-b724b027df848bcd>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 15.

- z .object({ provider: z.literal("Yahoo Finance"), symbol: z.string(), fetchedAt: z.string().datetime(), currency: z.string().nullable(), exchange: z.string().nullable(), marketTime — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/market.cjs:4](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L4>)
- z .object — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/market.cjs:4](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L4>)
- z.literal — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/market.cjs:6](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L6>)
- z.string — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/market.cjs:7](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L7>)
- z.string().datetime — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/market.cjs:8](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L8>)
- z.string — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/market.cjs:8](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L8>)
- z.string().nullable — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/market.cjs:9](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L9>)
- z.string — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/market.cjs:9](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L9>)
- 7 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-588a721b10a61755"></a>

## historySchema

[electron/engines/yahoo-financials/market.cjs:25](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L25>) · SchemaBinding · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: historySchema ([electron/engines/yahoo-financials/market.cjs:1](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L1>)).

Lexical owner: [electron/engines/yahoo-financials/market.cjs](<market.cjs.md#s-b724b027df848bcd>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 28.

- z .object({ provider: z.literal("Yahoo Finance"), symbol: z.string(), fetchedAt: z.string().datetime(), currency: z.string().nullable(), range: z.enum(RANGES), interval: z.enum(&#91;"1 — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/market.cjs:25](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L25>)
- z .object — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/market.cjs:25](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L25>)
- z.literal — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/market.cjs:27](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L27>)
- z.string — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/market.cjs:28](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L28>)
- z.string().datetime — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/market.cjs:29](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L29>)
- z.string — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/market.cjs:29](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L29>)
- z.string().nullable — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/market.cjs:30](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L30>)
- z.string — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/market.cjs:30](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L30>)
- 20 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-58eb617de1ed5a77"></a>

## number

[electron/engines/yahoo-financials/market.cjs:66](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L66>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Retains unavailable numeric provider fields as null.

Purpose evidence: jsdoc.

Lexical owner: [electron/engines/yahoo-financials/market.cjs](<market.cjs.md#s-b724b027df848bcd>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: number (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [createMarketProvider.getQuote](<market.cjs.md#s-78b5abd14410e0af>) — [electron/engines/yahoo-financials/market.cjs:110](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L110>)
- [createMarketProvider.getQuote](<market.cjs.md#s-78b5abd14410e0af>) — [electron/engines/yahoo-financials/market.cjs:111](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L111>)
- [createMarketProvider.getQuote](<market.cjs.md#s-78b5abd14410e0af>) — [electron/engines/yahoo-financials/market.cjs:112](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L112>)
- [createMarketProvider.getQuote](<market.cjs.md#s-78b5abd14410e0af>) — [electron/engines/yahoo-financials/market.cjs:113](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L113>)
- [createMarketProvider.getQuote](<market.cjs.md#s-78b5abd14410e0af>) — [electron/engines/yahoo-financials/market.cjs:114](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L114>)
- [createMarketProvider.getQuote](<market.cjs.md#s-78b5abd14410e0af>) — [electron/engines/yahoo-financials/market.cjs:115](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L115>)
- [createMarketProvider.getQuote](<market.cjs.md#s-78b5abd14410e0af>) — [electron/engines/yahoo-financials/market.cjs:116](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L116>)
- [createMarketProvider.getQuote](<market.cjs.md#s-78b5abd14410e0af>) — [electron/engines/yahoo-financials/market.cjs:117](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L117>)
- [createMarketProvider.getQuote](<market.cjs.md#s-78b5abd14410e0af>) — [electron/engines/yahoo-financials/market.cjs:118](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L118>)
- [createMarketProvider.getQuote](<market.cjs.md#s-78b5abd14410e0af>) — [electron/engines/yahoo-financials/market.cjs:119](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L119>)
- [createMarketProvider.getPriceHistory.&lt;anonymous@154:14&gt;](<market.cjs.md#s-c003dc81bed2dd8a>) — [electron/engines/yahoo-financials/market.cjs:156](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L156>)
- [createMarketProvider.getPriceHistory.&lt;anonymous@154:14&gt;](<market.cjs.md#s-c003dc81bed2dd8a>) — [electron/engines/yahoo-financials/market.cjs:157](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L157>)
- [createMarketProvider.getPriceHistory.&lt;anonymous@154:14&gt;](<market.cjs.md#s-c003dc81bed2dd8a>) — [electron/engines/yahoo-financials/market.cjs:158](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L158>)
- [createMarketProvider.getPriceHistory.&lt;anonymous@154:14&gt;](<market.cjs.md#s-c003dc81bed2dd8a>) — [electron/engines/yahoo-financials/market.cjs:159](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L159>)
- [createMarketProvider.getPriceHistory.&lt;anonymous@154:14&gt;](<market.cjs.md#s-c003dc81bed2dd8a>) — [electron/engines/yahoo-financials/market.cjs:160](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L160>)
- [createMarketProvider.getPriceHistory.&lt;anonymous@163:52&gt;](<market.cjs.md#s-acd09396da84f6e9>) — [electron/engines/yahoo-financials/market.cjs:165](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L165>)
- [createMarketProvider.getPriceHistory.&lt;anonymous@167:46&gt;](<market.cjs.md#s-8dd881eb48b3f3c6>) — [electron/engines/yahoo-financials/market.cjs:169](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L169>)
- [createMarketProvider.getPriceHistory.&lt;anonymous@167:46&gt;](<market.cjs.md#s-8dd881eb48b3f3c6>) — [electron/engines/yahoo-financials/market.cjs:170](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L170>)

Unresolved / external call sites: 1.

- Number.isFinite — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/market.cjs:67](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L67>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-1cefc2d1c88124b2"></a>

## instant

[electron/engines/yahoo-financials/market.cjs:70](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L70>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Converts Yahoo Date/epoch timestamps without silently assigning a date to missing values.

Purpose evidence: jsdoc.

Lexical owner: [electron/engines/yahoo-financials/market.cjs](<market.cjs.md#s-b724b027df848bcd>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [createMarketProvider.getQuote](<market.cjs.md#s-78b5abd14410e0af>) — [electron/engines/yahoo-financials/market.cjs:109](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L109>)
- [createMarketProvider.getPriceHistory.&lt;anonymous@154:14&gt;](<market.cjs.md#s-c003dc81bed2dd8a>) — [electron/engines/yahoo-financials/market.cjs:155](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L155>)
- [createMarketProvider.getPriceHistory.&lt;anonymous@163:52&gt;](<market.cjs.md#s-acd09396da84f6e9>) — [electron/engines/yahoo-financials/market.cjs:164](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L164>)
- [createMarketProvider.getPriceHistory.&lt;anonymous@167:46&gt;](<market.cjs.md#s-8dd881eb48b3f3c6>) — [electron/engines/yahoo-financials/market.cjs:168](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L168>)

Unresolved / external call sites: 4.

- Date — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/market.cjs:75](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L75>)
- Number.isFinite — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/market.cjs:76](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L76>)
- date.getTime — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/market.cjs:76](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L76>)
- date.toISOString — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/market.cjs:76](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L76>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-43dae10f39c26f94"></a>

## createMarketProvider

[electron/engines/yahoo-financials/market.cjs:79](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L79>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Creates a lazy market provider, with exact ticker identity and bounded, cancellable requests.

Purpose evidence: jsdoc.

Exported as: createMarketProvider ([electron/engines/yahoo-financials/market.cjs:1](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L1>)).

Lexical owner: [electron/engines/yahoo-financials/market.cjs](<market.cjs.md#s-b724b027df848bcd>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { client, clock = Date.now, signal } | { clock?: any; } | compiler-inferred | optional, default present |

Returns: { getQuote: (symbol: any) =&gt; unknown; getPriceHistory: (symbol: any, range?: string) =&gt; unknown; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [createFinancialEngine](<index.cjs.md#s-26a29830ab4da276>) — [electron/engines/yahoo-financials/index.cjs:137](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L137>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-8bacf60a92cf7bf4"></a>

## createMarketProvider.provider

[electron/engines/yahoo-financials/market.cjs:82](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L82>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Resolves the trusted installed provider only when an operation is explicitly requested.

Purpose evidence: jsdoc.

Lexical owner: [createMarketProvider](<market.cjs.md#s-43dae10f39c26f94>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [createMarketProvider.getQuote](<market.cjs.md#s-78b5abd14410e0af>) — [electron/engines/yahoo-financials/market.cjs:100](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L100>)
- [createMarketProvider.getPriceHistory](<market.cjs.md#s-4f90d268c067f0d8>) — [electron/engines/yahoo-financials/market.cjs:135](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L135>)

Unresolved / external call sites: 2.

- require — module-loader; [electron/engines/yahoo-financials/market.cjs:84](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L84>)
- YahooFinance — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/market.cjs:85](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L85>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-66d508043be571f0"></a>

## createMarketProvider.options

[electron/engines/yahoo-financials/market.cjs:90](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L90>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Combines the caller's cancellation signal with a 25-second request deadline.

Purpose evidence: jsdoc.

Lexical owner: [createMarketProvider](<market.cjs.md#s-43dae10f39c26f94>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: { fetchOptions: { signal: any; }; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [createMarketProvider.getQuote](<market.cjs.md#s-78b5abd14410e0af>) — [electron/engines/yahoo-financials/market.cjs:100](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L100>)
- [createMarketProvider.getPriceHistory](<market.cjs.md#s-4f90d268c067f0d8>) — [electron/engines/yahoo-financials/market.cjs:138](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L138>)

Unresolved / external call sites: 2.

- AbortSignal.timeout — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/market.cjs:91](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L91>)
- AbortSignal.any — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/market.cjs:94](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L94>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-78b5abd14410e0af"></a>

## createMarketProvider.getQuote

[electron/engines/yahoo-financials/market.cjs:99](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L99>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Retrieves unscaled quote fields from the exact listing; missing metrics remain null.

Purpose evidence: jsdoc.

Lexical owner: [createMarketProvider](<market.cjs.md#s-43dae10f39c26f94>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| symbol | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [createMarketProvider.provider](<market.cjs.md#s-8bacf60a92cf7bf4>) — [electron/engines/yahoo-financials/market.cjs:100](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L100>)
- [createMarketProvider.options](<market.cjs.md#s-66d508043be571f0>) — [electron/engines/yahoo-financials/market.cjs:100](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L100>)
- [instant](<market.cjs.md#s-1cefc2d1c88124b2>) — [electron/engines/yahoo-financials/market.cjs:109](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L109>)
- [number](<market.cjs.md#s-58eb617de1ed5a77>) — [electron/engines/yahoo-financials/market.cjs:110](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L110>)
- [number](<market.cjs.md#s-58eb617de1ed5a77>) — [electron/engines/yahoo-financials/market.cjs:111](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L111>)
- [number](<market.cjs.md#s-58eb617de1ed5a77>) — [electron/engines/yahoo-financials/market.cjs:112](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L112>)
- [number](<market.cjs.md#s-58eb617de1ed5a77>) — [electron/engines/yahoo-financials/market.cjs:113](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L113>)
- [number](<market.cjs.md#s-58eb617de1ed5a77>) — [electron/engines/yahoo-financials/market.cjs:114](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L114>)
- [number](<market.cjs.md#s-58eb617de1ed5a77>) — [electron/engines/yahoo-financials/market.cjs:115](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L115>)
- [number](<market.cjs.md#s-58eb617de1ed5a77>) — [electron/engines/yahoo-financials/market.cjs:116](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L116>)
- [number](<market.cjs.md#s-58eb617de1ed5a77>) — [electron/engines/yahoo-financials/market.cjs:117](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L117>)
- [number](<market.cjs.md#s-58eb617de1ed5a77>) — [electron/engines/yahoo-financials/market.cjs:118](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L118>)
- [number](<market.cjs.md#s-58eb617de1ed5a77>) — [electron/engines/yahoo-financials/market.cjs:119](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L119>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 7.

- provider().quote — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/market.cjs:100](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L100>)
- raw?.symbol?.toUpperCase — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/market.cjs:101](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L101>)
- Error — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/market.cjs:102](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L102>)
- quoteSchema.parse — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/market.cjs:103](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L103>)
- new Date(clock()).toISOString — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/market.cjs:106](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L106>)
- Date — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/market.cjs:106](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L106>)
- clock — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/market.cjs:106](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L106>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-4f90d268c067f0d8"></a>

## createMarketProvider.getPriceHistory

[electron/engines/yahoo-financials/market.cjs:124](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L124>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Retrieves range-specific OHLCV and supplied corporate actions; MAX uses monthly resolution to bound output.

Purpose evidence: jsdoc.

Lexical owner: [createMarketProvider](<market.cjs.md#s-43dae10f39c26f94>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| symbol | any | compiler-inferred | required |
| range | string | compiler-inferred | optional, default present |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [createMarketProvider.provider](<market.cjs.md#s-8bacf60a92cf7bf4>) — [electron/engines/yahoo-financials/market.cjs:135](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L135>)
- [createMarketProvider.options](<market.cjs.md#s-66d508043be571f0>) — [electron/engines/yahoo-financials/market.cjs:138](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L138>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 19.

- RANGES.includes — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/market.cjs:125](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L125>)
- Error — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/market.cjs:126](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L126>)
- Date — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/market.cjs:127](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L127>)
- clock — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/market.cjs:127](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L127>)
- start.setTime — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/market.cjs:128](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L128>)
- start.setUTCMonth — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/market.cjs:130](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L130>)
- start.getUTCMonth — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/market.cjs:131](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L131>)
- provider().chart — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/market.cjs:135](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L135>)
- 11 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-c003dc81bed2dd8a"></a>

## createMarketProvider.getPriceHistory.&lt;anonymous@154:14&gt;

[electron/engines/yahoo-financials/market.cjs:154](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L154>) · ArrowFunction · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createMarketProvider.getPriceHistory](<market.cjs.md#s-4f90d268c067f0d8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| row | any | compiler-inferred | required |

Returns: { date: any; open: number; high: number; low: number; close: number; volume: number; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [instant](<market.cjs.md#s-1cefc2d1c88124b2>) — [electron/engines/yahoo-financials/market.cjs:155](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L155>)
- [number](<market.cjs.md#s-58eb617de1ed5a77>) — [electron/engines/yahoo-financials/market.cjs:156](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L156>)
- [number](<market.cjs.md#s-58eb617de1ed5a77>) — [electron/engines/yahoo-financials/market.cjs:157](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L157>)
- [number](<market.cjs.md#s-58eb617de1ed5a77>) — [electron/engines/yahoo-financials/market.cjs:158](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L158>)
- [number](<market.cjs.md#s-58eb617de1ed5a77>) — [electron/engines/yahoo-financials/market.cjs:159](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L159>)
- [number](<market.cjs.md#s-58eb617de1ed5a77>) — [electron/engines/yahoo-financials/market.cjs:160](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L160>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-44f4bc089ef48784"></a>

## createMarketProvider.getPriceHistory.&lt;anonymous@162:15&gt;

[electron/engines/yahoo-financials/market.cjs:162](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L162>) · ArrowFunction · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createMarketProvider.getPriceHistory](<market.cjs.md#s-4f90d268c067f0d8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| a | any | compiler-inferred | required |
| b | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- String(a.date).localeCompare — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/market.cjs:162](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L162>)
- String — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/market.cjs:162](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L162>)
- String — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/market.cjs:162](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L162>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-acd09396da84f6e9"></a>

## createMarketProvider.getPriceHistory.&lt;anonymous@163:52&gt;

[electron/engines/yahoo-financials/market.cjs:163](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L163>) · ArrowFunction · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createMarketProvider.getPriceHistory](<market.cjs.md#s-4f90d268c067f0d8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| item | any | compiler-inferred | required |

Returns: { date: any; amount: number; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [instant](<market.cjs.md#s-1cefc2d1c88124b2>) — [electron/engines/yahoo-financials/market.cjs:164](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L164>)
- [number](<market.cjs.md#s-58eb617de1ed5a77>) — [electron/engines/yahoo-financials/market.cjs:165](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L165>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-8dd881eb48b3f3c6"></a>

## createMarketProvider.getPriceHistory.&lt;anonymous@167:46&gt;

[electron/engines/yahoo-financials/market.cjs:167](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L167>) · ArrowFunction · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createMarketProvider.getPriceHistory](<market.cjs.md#s-4f90d268c067f0d8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| item | any | compiler-inferred | required |

Returns: { date: any; numerator: number; denominator: number; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [instant](<market.cjs.md#s-1cefc2d1c88124b2>) — [electron/engines/yahoo-financials/market.cjs:168](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L168>)
- [number](<market.cjs.md#s-58eb617de1ed5a77>) — [electron/engines/yahoo-financials/market.cjs:169](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L169>)
- [number](<market.cjs.md#s-58eb617de1ed5a77>) — [electron/engines/yahoo-financials/market.cjs:170](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L170>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
