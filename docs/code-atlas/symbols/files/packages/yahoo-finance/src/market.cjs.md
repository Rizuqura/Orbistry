# packages/yahoo-finance/src/market.cjs: symbols

[Atlas](<../../../../../README.md>) / [Built-in Engines and data adapters](<../../../../../modules/engines.md>) / [packages/yahoo-finance/src/market.cjs:1](<../../../../../../../packages/yahoo-finance/src/market.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [packages/yahoo-finance/src/market.cjs](<market.cjs.md#s-683a4af3d43ee311>) (Module)
- [RANGES](<market.cjs.md#s-7c9a72537aea65a0>) (VariableDeclaration)
- [numeric](<market.cjs.md#s-a0f869d20bdcb2ff>) (SchemaBinding)
- [quoteSchema](<market.cjs.md#s-022e5d11ca9a3fac>) (SchemaBinding)
- [historySchema](<market.cjs.md#s-55c49e01867527db>) (SchemaBinding)
- [number](<market.cjs.md#s-e664748c55949bd3>) (FunctionDeclaration)
- [instant](<market.cjs.md#s-e488f19ded10dfea>) (FunctionDeclaration)
- [createMarketProvider](<market.cjs.md#s-67d0bc4563003a0a>) (FunctionDeclaration)
- [createMarketProvider.provider](<market.cjs.md#s-dc8c659753ee7b6a>) (FunctionDeclaration)
- [createMarketProvider.options](<market.cjs.md#s-6e85736b2e60dffe>) (FunctionDeclaration)
- [createMarketProvider.getQuote](<market.cjs.md#s-31af3fa143263531>) (FunctionDeclaration)
- [createMarketProvider.getPriceHistory](<market.cjs.md#s-bcca23f33639263c>) (FunctionDeclaration)
- [createMarketProvider.getPriceHistory.&lt;anonymous@153:14&gt;](<market.cjs.md#s-d2ef91ecf1a4f3d8>) (ArrowFunction)
- [createMarketProvider.getPriceHistory.&lt;anonymous@161:15&gt;](<market.cjs.md#s-33255f4ea1d07fba>) (ArrowFunction)
- [createMarketProvider.getPriceHistory.&lt;anonymous@162:52&gt;](<market.cjs.md#s-c9ab6a1cd2995d0a>) (ArrowFunction)
- [createMarketProvider.getPriceHistory.&lt;anonymous@166:46&gt;](<market.cjs.md#s-43048c15d95a591f>) (ArrowFunction)

<a id="s-683a4af3d43ee311"></a>

## packages/yahoo-finance/src/market.cjs

[packages/yahoo-finance/src/market.cjs:1](<../../../../../../../packages/yahoo-finance/src/market.cjs#L1>) · Module · configuration · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- require — module-loader; [packages/yahoo-finance/src/market.cjs:1](<../../../../../../../packages/yahoo-finance/src/market.cjs#L1>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-7c9a72537aea65a0"></a>

## RANGES

[packages/yahoo-finance/src/market.cjs:2](<../../../../../../../packages/yahoo-finance/src/market.cjs#L2>) · VariableDeclaration · configuration · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: RANGES ([packages/yahoo-finance/src/market.cjs:1](<../../../../../../../packages/yahoo-finance/src/market.cjs#L1>)), RANGES ([electron/engines/yahoo-financials/market.cjs:1](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L1>)).

Lexical owner: [packages/yahoo-finance/src/market.cjs](<market.cjs.md#s-683a4af3d43ee311>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- Object.freeze — external-or-dynamic-dispatch; [packages/yahoo-finance/src/market.cjs:2](<../../../../../../../packages/yahoo-finance/src/market.cjs#L2>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-a0f869d20bdcb2ff"></a>

## numeric

[packages/yahoo-finance/src/market.cjs:3](<../../../../../../../packages/yahoo-finance/src/market.cjs#L3>) · SchemaBinding · configuration · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [packages/yahoo-finance/src/market.cjs](<market.cjs.md#s-683a4af3d43ee311>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- z.number().finite().nullable — external-or-dynamic-dispatch; [packages/yahoo-finance/src/market.cjs:3](<../../../../../../../packages/yahoo-finance/src/market.cjs#L3>)
- z.number().finite — external-or-dynamic-dispatch; [packages/yahoo-finance/src/market.cjs:3](<../../../../../../../packages/yahoo-finance/src/market.cjs#L3>)
- z.number — external-or-dynamic-dispatch; [packages/yahoo-finance/src/market.cjs:3](<../../../../../../../packages/yahoo-finance/src/market.cjs#L3>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-022e5d11ca9a3fac"></a>

## quoteSchema

[packages/yahoo-finance/src/market.cjs:4](<../../../../../../../packages/yahoo-finance/src/market.cjs#L4>) · SchemaBinding · configuration · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: quoteSchema ([packages/yahoo-finance/src/market.cjs:1](<../../../../../../../packages/yahoo-finance/src/market.cjs#L1>)), quoteSchema ([electron/engines/yahoo-financials/market.cjs:1](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L1>)).

Lexical owner: [packages/yahoo-finance/src/market.cjs](<market.cjs.md#s-683a4af3d43ee311>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 15.

- z .object({ provider: z.literal("Yahoo Finance"), symbol: z.string(), fetchedAt: z.string().datetime(), currency: z.string().nullable(), exchange: z.string().nullable(), marketTime — external-or-dynamic-dispatch; [packages/yahoo-finance/src/market.cjs:4](<../../../../../../../packages/yahoo-finance/src/market.cjs#L4>)
- z .object — external-or-dynamic-dispatch; [packages/yahoo-finance/src/market.cjs:4](<../../../../../../../packages/yahoo-finance/src/market.cjs#L4>)
- z.literal — external-or-dynamic-dispatch; [packages/yahoo-finance/src/market.cjs:6](<../../../../../../../packages/yahoo-finance/src/market.cjs#L6>)
- z.string — external-or-dynamic-dispatch; [packages/yahoo-finance/src/market.cjs:7](<../../../../../../../packages/yahoo-finance/src/market.cjs#L7>)
- z.string().datetime — external-or-dynamic-dispatch; [packages/yahoo-finance/src/market.cjs:8](<../../../../../../../packages/yahoo-finance/src/market.cjs#L8>)
- z.string — external-or-dynamic-dispatch; [packages/yahoo-finance/src/market.cjs:8](<../../../../../../../packages/yahoo-finance/src/market.cjs#L8>)
- z.string().nullable — external-or-dynamic-dispatch; [packages/yahoo-finance/src/market.cjs:9](<../../../../../../../packages/yahoo-finance/src/market.cjs#L9>)
- z.string — external-or-dynamic-dispatch; [packages/yahoo-finance/src/market.cjs:9](<../../../../../../../packages/yahoo-finance/src/market.cjs#L9>)
- 7 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-55c49e01867527db"></a>

## historySchema

[packages/yahoo-finance/src/market.cjs:25](<../../../../../../../packages/yahoo-finance/src/market.cjs#L25>) · SchemaBinding · configuration · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: historySchema ([packages/yahoo-finance/src/market.cjs:1](<../../../../../../../packages/yahoo-finance/src/market.cjs#L1>)), historySchema ([electron/engines/yahoo-financials/market.cjs:1](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L1>)).

Lexical owner: [packages/yahoo-finance/src/market.cjs](<market.cjs.md#s-683a4af3d43ee311>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 28.

- z .object({ provider: z.literal("Yahoo Finance"), symbol: z.string(), fetchedAt: z.string().datetime(), currency: z.string().nullable(), range: z.enum(RANGES), interval: z.enum(&#91;"1 — external-or-dynamic-dispatch; [packages/yahoo-finance/src/market.cjs:25](<../../../../../../../packages/yahoo-finance/src/market.cjs#L25>)
- z .object — external-or-dynamic-dispatch; [packages/yahoo-finance/src/market.cjs:25](<../../../../../../../packages/yahoo-finance/src/market.cjs#L25>)
- z.literal — external-or-dynamic-dispatch; [packages/yahoo-finance/src/market.cjs:27](<../../../../../../../packages/yahoo-finance/src/market.cjs#L27>)
- z.string — external-or-dynamic-dispatch; [packages/yahoo-finance/src/market.cjs:28](<../../../../../../../packages/yahoo-finance/src/market.cjs#L28>)
- z.string().datetime — external-or-dynamic-dispatch; [packages/yahoo-finance/src/market.cjs:29](<../../../../../../../packages/yahoo-finance/src/market.cjs#L29>)
- z.string — external-or-dynamic-dispatch; [packages/yahoo-finance/src/market.cjs:29](<../../../../../../../packages/yahoo-finance/src/market.cjs#L29>)
- z.string().nullable — external-or-dynamic-dispatch; [packages/yahoo-finance/src/market.cjs:30](<../../../../../../../packages/yahoo-finance/src/market.cjs#L30>)
- z.string — external-or-dynamic-dispatch; [packages/yahoo-finance/src/market.cjs:30](<../../../../../../../packages/yahoo-finance/src/market.cjs#L30>)
- 20 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-e664748c55949bd3"></a>

## number

[packages/yahoo-finance/src/market.cjs:66](<../../../../../../../packages/yahoo-finance/src/market.cjs#L66>) · FunctionDeclaration · configuration · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Retains unavailable numeric provider fields as null.

Purpose evidence: jsdoc.

Lexical owner: [packages/yahoo-finance/src/market.cjs](<market.cjs.md#s-683a4af3d43ee311>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: number (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [createMarketProvider.getQuote](<market.cjs.md#s-31af3fa143263531>) — [packages/yahoo-finance/src/market.cjs:109](<../../../../../../../packages/yahoo-finance/src/market.cjs#L109>)
- [createMarketProvider.getQuote](<market.cjs.md#s-31af3fa143263531>) — [packages/yahoo-finance/src/market.cjs:110](<../../../../../../../packages/yahoo-finance/src/market.cjs#L110>)
- [createMarketProvider.getQuote](<market.cjs.md#s-31af3fa143263531>) — [packages/yahoo-finance/src/market.cjs:111](<../../../../../../../packages/yahoo-finance/src/market.cjs#L111>)
- [createMarketProvider.getQuote](<market.cjs.md#s-31af3fa143263531>) — [packages/yahoo-finance/src/market.cjs:112](<../../../../../../../packages/yahoo-finance/src/market.cjs#L112>)
- [createMarketProvider.getQuote](<market.cjs.md#s-31af3fa143263531>) — [packages/yahoo-finance/src/market.cjs:113](<../../../../../../../packages/yahoo-finance/src/market.cjs#L113>)
- [createMarketProvider.getQuote](<market.cjs.md#s-31af3fa143263531>) — [packages/yahoo-finance/src/market.cjs:114](<../../../../../../../packages/yahoo-finance/src/market.cjs#L114>)
- [createMarketProvider.getQuote](<market.cjs.md#s-31af3fa143263531>) — [packages/yahoo-finance/src/market.cjs:115](<../../../../../../../packages/yahoo-finance/src/market.cjs#L115>)
- [createMarketProvider.getQuote](<market.cjs.md#s-31af3fa143263531>) — [packages/yahoo-finance/src/market.cjs:116](<../../../../../../../packages/yahoo-finance/src/market.cjs#L116>)
- [createMarketProvider.getQuote](<market.cjs.md#s-31af3fa143263531>) — [packages/yahoo-finance/src/market.cjs:117](<../../../../../../../packages/yahoo-finance/src/market.cjs#L117>)
- [createMarketProvider.getQuote](<market.cjs.md#s-31af3fa143263531>) — [packages/yahoo-finance/src/market.cjs:118](<../../../../../../../packages/yahoo-finance/src/market.cjs#L118>)
- [createMarketProvider.getPriceHistory.&lt;anonymous@153:14&gt;](<market.cjs.md#s-d2ef91ecf1a4f3d8>) — [packages/yahoo-finance/src/market.cjs:155](<../../../../../../../packages/yahoo-finance/src/market.cjs#L155>)
- [createMarketProvider.getPriceHistory.&lt;anonymous@153:14&gt;](<market.cjs.md#s-d2ef91ecf1a4f3d8>) — [packages/yahoo-finance/src/market.cjs:156](<../../../../../../../packages/yahoo-finance/src/market.cjs#L156>)
- [createMarketProvider.getPriceHistory.&lt;anonymous@153:14&gt;](<market.cjs.md#s-d2ef91ecf1a4f3d8>) — [packages/yahoo-finance/src/market.cjs:157](<../../../../../../../packages/yahoo-finance/src/market.cjs#L157>)
- [createMarketProvider.getPriceHistory.&lt;anonymous@153:14&gt;](<market.cjs.md#s-d2ef91ecf1a4f3d8>) — [packages/yahoo-finance/src/market.cjs:158](<../../../../../../../packages/yahoo-finance/src/market.cjs#L158>)
- [createMarketProvider.getPriceHistory.&lt;anonymous@153:14&gt;](<market.cjs.md#s-d2ef91ecf1a4f3d8>) — [packages/yahoo-finance/src/market.cjs:159](<../../../../../../../packages/yahoo-finance/src/market.cjs#L159>)
- [createMarketProvider.getPriceHistory.&lt;anonymous@162:52&gt;](<market.cjs.md#s-c9ab6a1cd2995d0a>) — [packages/yahoo-finance/src/market.cjs:164](<../../../../../../../packages/yahoo-finance/src/market.cjs#L164>)
- [createMarketProvider.getPriceHistory.&lt;anonymous@166:46&gt;](<market.cjs.md#s-43048c15d95a591f>) — [packages/yahoo-finance/src/market.cjs:168](<../../../../../../../packages/yahoo-finance/src/market.cjs#L168>)
- [createMarketProvider.getPriceHistory.&lt;anonymous@166:46&gt;](<market.cjs.md#s-43048c15d95a591f>) — [packages/yahoo-finance/src/market.cjs:169](<../../../../../../../packages/yahoo-finance/src/market.cjs#L169>)

Unresolved / external call sites: 1.

- Number.isFinite — external-or-dynamic-dispatch; [packages/yahoo-finance/src/market.cjs:67](<../../../../../../../packages/yahoo-finance/src/market.cjs#L67>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-e488f19ded10dfea"></a>

## instant

[packages/yahoo-finance/src/market.cjs:70](<../../../../../../../packages/yahoo-finance/src/market.cjs#L70>) · FunctionDeclaration · configuration · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Converts Yahoo Date/epoch timestamps without silently assigning a date to missing values.

Purpose evidence: jsdoc.

Lexical owner: [packages/yahoo-finance/src/market.cjs](<market.cjs.md#s-683a4af3d43ee311>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [createMarketProvider.getQuote](<market.cjs.md#s-31af3fa143263531>) — [packages/yahoo-finance/src/market.cjs:108](<../../../../../../../packages/yahoo-finance/src/market.cjs#L108>)
- [createMarketProvider.getPriceHistory.&lt;anonymous@153:14&gt;](<market.cjs.md#s-d2ef91ecf1a4f3d8>) — [packages/yahoo-finance/src/market.cjs:154](<../../../../../../../packages/yahoo-finance/src/market.cjs#L154>)
- [createMarketProvider.getPriceHistory.&lt;anonymous@162:52&gt;](<market.cjs.md#s-c9ab6a1cd2995d0a>) — [packages/yahoo-finance/src/market.cjs:163](<../../../../../../../packages/yahoo-finance/src/market.cjs#L163>)
- [createMarketProvider.getPriceHistory.&lt;anonymous@166:46&gt;](<market.cjs.md#s-43048c15d95a591f>) — [packages/yahoo-finance/src/market.cjs:167](<../../../../../../../packages/yahoo-finance/src/market.cjs#L167>)

Unresolved / external call sites: 4.

- Date — external-or-dynamic-dispatch; [packages/yahoo-finance/src/market.cjs:75](<../../../../../../../packages/yahoo-finance/src/market.cjs#L75>)
- Number.isFinite — external-or-dynamic-dispatch; [packages/yahoo-finance/src/market.cjs:76](<../../../../../../../packages/yahoo-finance/src/market.cjs#L76>)
- date.getTime — external-or-dynamic-dispatch; [packages/yahoo-finance/src/market.cjs:76](<../../../../../../../packages/yahoo-finance/src/market.cjs#L76>)
- date.toISOString — external-or-dynamic-dispatch; [packages/yahoo-finance/src/market.cjs:76](<../../../../../../../packages/yahoo-finance/src/market.cjs#L76>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-67d0bc4563003a0a"></a>

## createMarketProvider

[packages/yahoo-finance/src/market.cjs:79](<../../../../../../../packages/yahoo-finance/src/market.cjs#L79>) · FunctionDeclaration · configuration · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Creates a lazy market provider, with exact ticker identity and bounded, cancellable requests.

Purpose evidence: jsdoc.

Exported as: createMarketProvider ([packages/yahoo-finance/src/market.cjs:1](<../../../../../../../packages/yahoo-finance/src/market.cjs#L1>)), createMarketProvider ([electron/engines/yahoo-financials/market.cjs:1](<../../../../../../../electron/engines/yahoo-financials/market.cjs#L1>)).

Lexical owner: [packages/yahoo-finance/src/market.cjs](<market.cjs.md#s-683a4af3d43ee311>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { client, clock = Date.now, signal } | { clock?: any; } | compiler-inferred | optional, default present |

Returns: { getQuote: (symbol: any) =&gt; unknown; getPriceHistory: (symbol: any, range?: string) =&gt; unknown; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [createFinancialEngine](<financials.cjs.md#s-56192e1eed6e5d29>) — [packages/yahoo-finance/src/financials.cjs:137](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L137>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-dc8c659753ee7b6a"></a>

## createMarketProvider.provider

[packages/yahoo-finance/src/market.cjs:82](<../../../../../../../packages/yahoo-finance/src/market.cjs#L82>) · FunctionDeclaration · configuration · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Resolves the trusted installed provider only when an operation is explicitly requested.

Purpose evidence: jsdoc.

Lexical owner: [createMarketProvider](<market.cjs.md#s-67d0bc4563003a0a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [getClient](<client.cjs.md#s-b0f0c6073f4df961>) — [packages/yahoo-finance/src/market.cjs:84](<../../../../../../../packages/yahoo-finance/src/market.cjs#L84>)

**Called by (statically resolved):**

- [createMarketProvider.getQuote](<market.cjs.md#s-31af3fa143263531>) — [packages/yahoo-finance/src/market.cjs:99](<../../../../../../../packages/yahoo-finance/src/market.cjs#L99>)
- [createMarketProvider.getPriceHistory](<market.cjs.md#s-bcca23f33639263c>) — [packages/yahoo-finance/src/market.cjs:134](<../../../../../../../packages/yahoo-finance/src/market.cjs#L134>)

Unresolved / external call sites: 1.

- require — module-loader; [packages/yahoo-finance/src/market.cjs:84](<../../../../../../../packages/yahoo-finance/src/market.cjs#L84>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-6e85736b2e60dffe"></a>

## createMarketProvider.options

[packages/yahoo-finance/src/market.cjs:89](<../../../../../../../packages/yahoo-finance/src/market.cjs#L89>) · FunctionDeclaration · configuration · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Combines the caller's cancellation signal with a 25-second request deadline.

Purpose evidence: jsdoc.

Lexical owner: [createMarketProvider](<market.cjs.md#s-67d0bc4563003a0a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: { fetchOptions: { signal: any; }; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [createMarketProvider.getQuote](<market.cjs.md#s-31af3fa143263531>) — [packages/yahoo-finance/src/market.cjs:99](<../../../../../../../packages/yahoo-finance/src/market.cjs#L99>)
- [createMarketProvider.getPriceHistory](<market.cjs.md#s-bcca23f33639263c>) — [packages/yahoo-finance/src/market.cjs:137](<../../../../../../../packages/yahoo-finance/src/market.cjs#L137>)

Unresolved / external call sites: 2.

- AbortSignal.timeout — external-or-dynamic-dispatch; [packages/yahoo-finance/src/market.cjs:90](<../../../../../../../packages/yahoo-finance/src/market.cjs#L90>)
- AbortSignal.any — external-or-dynamic-dispatch; [packages/yahoo-finance/src/market.cjs:93](<../../../../../../../packages/yahoo-finance/src/market.cjs#L93>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-31af3fa143263531"></a>

## createMarketProvider.getQuote

[packages/yahoo-finance/src/market.cjs:98](<../../../../../../../packages/yahoo-finance/src/market.cjs#L98>) · FunctionDeclaration · configuration · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Retrieves unscaled quote fields from the exact listing; missing metrics remain null.

Purpose evidence: jsdoc.

Lexical owner: [createMarketProvider](<market.cjs.md#s-67d0bc4563003a0a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| symbol | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [createMarketProvider.provider](<market.cjs.md#s-dc8c659753ee7b6a>) — [packages/yahoo-finance/src/market.cjs:99](<../../../../../../../packages/yahoo-finance/src/market.cjs#L99>)
- [createMarketProvider.options](<market.cjs.md#s-6e85736b2e60dffe>) — [packages/yahoo-finance/src/market.cjs:99](<../../../../../../../packages/yahoo-finance/src/market.cjs#L99>)
- [instant](<market.cjs.md#s-e488f19ded10dfea>) — [packages/yahoo-finance/src/market.cjs:108](<../../../../../../../packages/yahoo-finance/src/market.cjs#L108>)
- [number](<market.cjs.md#s-e664748c55949bd3>) — [packages/yahoo-finance/src/market.cjs:109](<../../../../../../../packages/yahoo-finance/src/market.cjs#L109>)
- [number](<market.cjs.md#s-e664748c55949bd3>) — [packages/yahoo-finance/src/market.cjs:110](<../../../../../../../packages/yahoo-finance/src/market.cjs#L110>)
- [number](<market.cjs.md#s-e664748c55949bd3>) — [packages/yahoo-finance/src/market.cjs:111](<../../../../../../../packages/yahoo-finance/src/market.cjs#L111>)
- [number](<market.cjs.md#s-e664748c55949bd3>) — [packages/yahoo-finance/src/market.cjs:112](<../../../../../../../packages/yahoo-finance/src/market.cjs#L112>)
- [number](<market.cjs.md#s-e664748c55949bd3>) — [packages/yahoo-finance/src/market.cjs:113](<../../../../../../../packages/yahoo-finance/src/market.cjs#L113>)
- [number](<market.cjs.md#s-e664748c55949bd3>) — [packages/yahoo-finance/src/market.cjs:114](<../../../../../../../packages/yahoo-finance/src/market.cjs#L114>)
- [number](<market.cjs.md#s-e664748c55949bd3>) — [packages/yahoo-finance/src/market.cjs:115](<../../../../../../../packages/yahoo-finance/src/market.cjs#L115>)
- [number](<market.cjs.md#s-e664748c55949bd3>) — [packages/yahoo-finance/src/market.cjs:116](<../../../../../../../packages/yahoo-finance/src/market.cjs#L116>)
- [number](<market.cjs.md#s-e664748c55949bd3>) — [packages/yahoo-finance/src/market.cjs:117](<../../../../../../../packages/yahoo-finance/src/market.cjs#L117>)
- [number](<market.cjs.md#s-e664748c55949bd3>) — [packages/yahoo-finance/src/market.cjs:118](<../../../../../../../packages/yahoo-finance/src/market.cjs#L118>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 7.

- provider().quote — external-or-dynamic-dispatch; [packages/yahoo-finance/src/market.cjs:99](<../../../../../../../packages/yahoo-finance/src/market.cjs#L99>)
- raw?.symbol?.toUpperCase — external-or-dynamic-dispatch; [packages/yahoo-finance/src/market.cjs:100](<../../../../../../../packages/yahoo-finance/src/market.cjs#L100>)
- Error — external-or-dynamic-dispatch; [packages/yahoo-finance/src/market.cjs:101](<../../../../../../../packages/yahoo-finance/src/market.cjs#L101>)
- quoteSchema.parse — external-or-dynamic-dispatch; [packages/yahoo-finance/src/market.cjs:102](<../../../../../../../packages/yahoo-finance/src/market.cjs#L102>)
- new Date(clock()).toISOString — external-or-dynamic-dispatch; [packages/yahoo-finance/src/market.cjs:105](<../../../../../../../packages/yahoo-finance/src/market.cjs#L105>)
- Date — external-or-dynamic-dispatch; [packages/yahoo-finance/src/market.cjs:105](<../../../../../../../packages/yahoo-finance/src/market.cjs#L105>)
- clock — external-or-dynamic-dispatch; [packages/yahoo-finance/src/market.cjs:105](<../../../../../../../packages/yahoo-finance/src/market.cjs#L105>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-bcca23f33639263c"></a>

## createMarketProvider.getPriceHistory

[packages/yahoo-finance/src/market.cjs:123](<../../../../../../../packages/yahoo-finance/src/market.cjs#L123>) · FunctionDeclaration · configuration · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Retrieves range-specific OHLCV and supplied corporate actions; MAX uses monthly resolution to bound output.

Purpose evidence: jsdoc.

Lexical owner: [createMarketProvider](<market.cjs.md#s-67d0bc4563003a0a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| symbol | any | compiler-inferred | required |
| range | string | compiler-inferred | optional, default present |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [createMarketProvider.provider](<market.cjs.md#s-dc8c659753ee7b6a>) — [packages/yahoo-finance/src/market.cjs:134](<../../../../../../../packages/yahoo-finance/src/market.cjs#L134>)
- [createMarketProvider.options](<market.cjs.md#s-6e85736b2e60dffe>) — [packages/yahoo-finance/src/market.cjs:137](<../../../../../../../packages/yahoo-finance/src/market.cjs#L137>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 19.

- RANGES.includes — external-or-dynamic-dispatch; [packages/yahoo-finance/src/market.cjs:124](<../../../../../../../packages/yahoo-finance/src/market.cjs#L124>)
- Error — external-or-dynamic-dispatch; [packages/yahoo-finance/src/market.cjs:125](<../../../../../../../packages/yahoo-finance/src/market.cjs#L125>)
- Date — external-or-dynamic-dispatch; [packages/yahoo-finance/src/market.cjs:126](<../../../../../../../packages/yahoo-finance/src/market.cjs#L126>)
- clock — external-or-dynamic-dispatch; [packages/yahoo-finance/src/market.cjs:126](<../../../../../../../packages/yahoo-finance/src/market.cjs#L126>)
- start.setTime — external-or-dynamic-dispatch; [packages/yahoo-finance/src/market.cjs:127](<../../../../../../../packages/yahoo-finance/src/market.cjs#L127>)
- start.setUTCMonth — external-or-dynamic-dispatch; [packages/yahoo-finance/src/market.cjs:129](<../../../../../../../packages/yahoo-finance/src/market.cjs#L129>)
- start.getUTCMonth — external-or-dynamic-dispatch; [packages/yahoo-finance/src/market.cjs:130](<../../../../../../../packages/yahoo-finance/src/market.cjs#L130>)
- provider().chart — external-or-dynamic-dispatch; [packages/yahoo-finance/src/market.cjs:134](<../../../../../../../packages/yahoo-finance/src/market.cjs#L134>)
- 11 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d2ef91ecf1a4f3d8"></a>

## createMarketProvider.getPriceHistory.&lt;anonymous@153:14&gt;

[packages/yahoo-finance/src/market.cjs:153](<../../../../../../../packages/yahoo-finance/src/market.cjs#L153>) · ArrowFunction · configuration · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createMarketProvider.getPriceHistory](<market.cjs.md#s-bcca23f33639263c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| row | any | compiler-inferred | required |

Returns: { date: any; open: number; high: number; low: number; close: number; volume: number; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [instant](<market.cjs.md#s-e488f19ded10dfea>) — [packages/yahoo-finance/src/market.cjs:154](<../../../../../../../packages/yahoo-finance/src/market.cjs#L154>)
- [number](<market.cjs.md#s-e664748c55949bd3>) — [packages/yahoo-finance/src/market.cjs:155](<../../../../../../../packages/yahoo-finance/src/market.cjs#L155>)
- [number](<market.cjs.md#s-e664748c55949bd3>) — [packages/yahoo-finance/src/market.cjs:156](<../../../../../../../packages/yahoo-finance/src/market.cjs#L156>)
- [number](<market.cjs.md#s-e664748c55949bd3>) — [packages/yahoo-finance/src/market.cjs:157](<../../../../../../../packages/yahoo-finance/src/market.cjs#L157>)
- [number](<market.cjs.md#s-e664748c55949bd3>) — [packages/yahoo-finance/src/market.cjs:158](<../../../../../../../packages/yahoo-finance/src/market.cjs#L158>)
- [number](<market.cjs.md#s-e664748c55949bd3>) — [packages/yahoo-finance/src/market.cjs:159](<../../../../../../../packages/yahoo-finance/src/market.cjs#L159>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-33255f4ea1d07fba"></a>

## createMarketProvider.getPriceHistory.&lt;anonymous@161:15&gt;

[packages/yahoo-finance/src/market.cjs:161](<../../../../../../../packages/yahoo-finance/src/market.cjs#L161>) · ArrowFunction · configuration · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createMarketProvider.getPriceHistory](<market.cjs.md#s-bcca23f33639263c>).

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

- String(a.date).localeCompare — external-or-dynamic-dispatch; [packages/yahoo-finance/src/market.cjs:161](<../../../../../../../packages/yahoo-finance/src/market.cjs#L161>)
- String — external-or-dynamic-dispatch; [packages/yahoo-finance/src/market.cjs:161](<../../../../../../../packages/yahoo-finance/src/market.cjs#L161>)
- String — external-or-dynamic-dispatch; [packages/yahoo-finance/src/market.cjs:161](<../../../../../../../packages/yahoo-finance/src/market.cjs#L161>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-c9ab6a1cd2995d0a"></a>

## createMarketProvider.getPriceHistory.&lt;anonymous@162:52&gt;

[packages/yahoo-finance/src/market.cjs:162](<../../../../../../../packages/yahoo-finance/src/market.cjs#L162>) · ArrowFunction · configuration · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createMarketProvider.getPriceHistory](<market.cjs.md#s-bcca23f33639263c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| item | any | compiler-inferred | required |

Returns: { date: any; amount: number; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [instant](<market.cjs.md#s-e488f19ded10dfea>) — [packages/yahoo-finance/src/market.cjs:163](<../../../../../../../packages/yahoo-finance/src/market.cjs#L163>)
- [number](<market.cjs.md#s-e664748c55949bd3>) — [packages/yahoo-finance/src/market.cjs:164](<../../../../../../../packages/yahoo-finance/src/market.cjs#L164>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-43048c15d95a591f"></a>

## createMarketProvider.getPriceHistory.&lt;anonymous@166:46&gt;

[packages/yahoo-finance/src/market.cjs:166](<../../../../../../../packages/yahoo-finance/src/market.cjs#L166>) · ArrowFunction · configuration · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createMarketProvider.getPriceHistory](<market.cjs.md#s-bcca23f33639263c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| item | any | compiler-inferred | required |

Returns: { date: any; numerator: number; denominator: number; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [instant](<market.cjs.md#s-e488f19ded10dfea>) — [packages/yahoo-finance/src/market.cjs:167](<../../../../../../../packages/yahoo-finance/src/market.cjs#L167>)
- [number](<market.cjs.md#s-e664748c55949bd3>) — [packages/yahoo-finance/src/market.cjs:168](<../../../../../../../packages/yahoo-finance/src/market.cjs#L168>)
- [number](<market.cjs.md#s-e664748c55949bd3>) — [packages/yahoo-finance/src/market.cjs:169](<../../../../../../../packages/yahoo-finance/src/market.cjs#L169>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
