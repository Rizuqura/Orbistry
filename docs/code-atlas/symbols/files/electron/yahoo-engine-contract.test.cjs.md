# electron/yahoo-engine-contract.test.cjs: symbols

[Atlas](<../../../README.md>) / [Built-in Engines and data adapters](<../../../modules/engines.md>) / [electron/yahoo-engine-contract.test.cjs:1](<../../../../../electron/yahoo-engine-contract.test.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/yahoo-engine-contract.test.cjs](<yahoo-engine-contract.test.cjs.md#s-54befa6d37156722>) (Module)
- [client](<yahoo-engine-contract.test.cjs.md#s-7fcb8c837289945b>) (FunctionDeclaration)
- [client.quote](<yahoo-engine-contract.test.cjs.md#s-24b93bd0b69cfe29>) (MethodDeclaration)
- [client.chart](<yahoo-engine-contract.test.cjs.md#s-9230af125373cd4e>) (MethodDeclaration)
- [&lt;anonymous@60:106&gt;](<yahoo-engine-contract.test.cjs.md#s-769e6d6d3df34284>) (ArrowFunction)
- [&lt;anonymous@101:87&gt;](<yahoo-engine-contract.test.cjs.md#s-85faf6d2e0683001>) (ArrowFunction)
- [&lt;anonymous@125:95&gt;](<yahoo-engine-contract.test.cjs.md#s-c42b4a7c03f56f3c>) (ArrowFunction)
- [&lt;anonymous@125:95&gt;.&lt;anonymous@135:5&gt;](<yahoo-engine-contract.test.cjs.md#s-071dbffd0c77aa79>) (ArrowFunction)
- [&lt;anonymous@125:95&gt;.&lt;anonymous@140:5&gt;](<yahoo-engine-contract.test.cjs.md#s-44f9eb5df701b4f9>) (ArrowFunction)
- [isolated](<yahoo-engine-contract.test.cjs.md#s-775be3e5fd460172>) (FunctionDeclaration)
- [&lt;anonymous@164:95&gt;](<yahoo-engine-contract.test.cjs.md#s-780f023eec9c6cea>) (ArrowFunction)
- [&lt;anonymous@164:95&gt;.&lt;anonymous@165:12&gt;](<yahoo-engine-contract.test.cjs.md#s-0fdaf6987be177bb>) (ArrowFunction)
- [&lt;anonymous@164:95&gt;.&lt;anonymous@165:12&gt;.clock](<yahoo-engine-contract.test.cjs.md#s-9cc451e84373997a>) (ArrowFunction)
- [&lt;anonymous@164:95&gt;.&lt;anonymous@165:12&gt;.fetch](<yahoo-engine-contract.test.cjs.md#s-a79dc8e388ba5952>) (ArrowFunction)
- [&lt;anonymous@164:95&gt;.&lt;anonymous@165:12&gt;.clock](<yahoo-engine-contract.test.cjs.md#s-eff43271b569594b>) (ArrowFunction)
- [&lt;anonymous@164:95&gt;.&lt;anonymous@165:12&gt;.fetch](<yahoo-engine-contract.test.cjs.md#s-969be92d70f77278>) (ArrowFunction)
- [&lt;anonymous@164:95&gt;.&lt;anonymous@165:12&gt;.clock](<yahoo-engine-contract.test.cjs.md#s-01733fd0e62a821d>) (ArrowFunction)
- [&lt;anonymous@205:82&gt;](<yahoo-engine-contract.test.cjs.md#s-06ee2fd756fe931c>) (ArrowFunction)
- [&lt;anonymous@205:82&gt;.&lt;anonymous@206:12&gt;](<yahoo-engine-contract.test.cjs.md#s-12071c09bac274ad>) (ArrowFunction)
- [&lt;anonymous@205:82&gt;.&lt;anonymous@206:12&gt;.&lt;anonymous@238:30&gt;](<yahoo-engine-contract.test.cjs.md#s-fc962d6acf3525b8>) (ArrowFunction)
- [&lt;anonymous@205:82&gt;.&lt;anonymous@206:12&gt;.&lt;anonymous@247:30&gt;](<yahoo-engine-contract.test.cjs.md#s-519b3330d462084f>) (ArrowFunction)
- [&lt;anonymous@263:94&gt;](<yahoo-engine-contract.test.cjs.md#s-12ae342730f0f203>) (ArrowFunction)
- [&lt;anonymous@263:94&gt;.&lt;anonymous@264:12&gt;](<yahoo-engine-contract.test.cjs.md#s-79412942bec3c094>) (ArrowFunction)

<a id="s-54befa6d37156722"></a>

## electron/yahoo-engine-contract.test.cjs

[electron/yahoo-engine-contract.test.cjs:1](<../../../../../electron/yahoo-engine-contract.test.cjs#L1>) · Module · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 17.

- require — module-loader; [electron/yahoo-engine-contract.test.cjs:1](<../../../../../electron/yahoo-engine-contract.test.cjs#L1>)
- require — module-loader; [electron/yahoo-engine-contract.test.cjs:2](<../../../../../electron/yahoo-engine-contract.test.cjs#L2>)
- require — module-loader; [electron/yahoo-engine-contract.test.cjs:3](<../../../../../electron/yahoo-engine-contract.test.cjs#L3>)
- require — module-loader; [electron/yahoo-engine-contract.test.cjs:4](<../../../../../electron/yahoo-engine-contract.test.cjs#L4>)
- require — module-loader; [electron/yahoo-engine-contract.test.cjs:5](<../../../../../electron/yahoo-engine-contract.test.cjs#L5>)
- require — module-loader; [electron/yahoo-engine-contract.test.cjs:6](<../../../../../electron/yahoo-engine-contract.test.cjs#L6>)
- require — module-loader; [electron/yahoo-engine-contract.test.cjs:7](<../../../../../electron/yahoo-engine-contract.test.cjs#L7>)
- require — module-loader; [electron/yahoo-engine-contract.test.cjs:8](<../../../../../electron/yahoo-engine-contract.test.cjs#L8>)
- 9 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-7fcb8c837289945b"></a>

## client

[electron/yahoo-engine-contract.test.cjs:18](<../../../../../electron/yahoo-engine-contract.test.cjs#L18>) · FunctionDeclaration · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Supplies listing-specific data without network access, including null OHLC fields and corporate actions.

Purpose evidence: jsdoc.

Lexical owner: [electron/yahoo-engine-contract.test.cjs](<yahoo-engine-contract.test.cjs.md#s-54befa6d37156722>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: { calls: {}; quote(symbol: any): unknown; chart(symbol: any, options: any): unknown; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@60:106&gt;](<yahoo-engine-contract.test.cjs.md#s-769e6d6d3df34284>) — [electron/yahoo-engine-contract.test.cjs:61](<../../../../../electron/yahoo-engine-contract.test.cjs#L61>)
- [&lt;anonymous@60:106&gt;](<yahoo-engine-contract.test.cjs.md#s-769e6d6d3df34284>) — [electron/yahoo-engine-contract.test.cjs:96](<../../../../../electron/yahoo-engine-contract.test.cjs#L96>)
- [&lt;anonymous@101:87&gt;](<yahoo-engine-contract.test.cjs.md#s-85faf6d2e0683001>) — [electron/yahoo-engine-contract.test.cjs:102](<../../../../../electron/yahoo-engine-contract.test.cjs#L102>)
- [&lt;anonymous@164:95&gt;.&lt;anonymous@165:12&gt;](<yahoo-engine-contract.test.cjs.md#s-0fdaf6987be177bb>) — [electron/yahoo-engine-contract.test.cjs:167](<../../../../../electron/yahoo-engine-contract.test.cjs#L167>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/yahoo-engine-contract.test.cjs:61](<../../../../../electron/yahoo-engine-contract.test.cjs#L61>) — static-call-site; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:96](<../../../../../electron/yahoo-engine-contract.test.cjs#L96>) — static-call-site; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:102](<../../../../../electron/yahoo-engine-contract.test.cjs#L102>) — static-call-site; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:167](<../../../../../electron/yahoo-engine-contract.test.cjs#L167>) — static-call-site; coverage not established.

<a id="s-24b93bd0b69cfe29"></a>

## client.quote

[electron/yahoo-engine-contract.test.cjs:22](<../../../../../electron/yahoo-engine-contract.test.cjs#L22>) · MethodDeclaration · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Captures the exact symbol and returns quote fields in the original listing currency.

Purpose evidence: jsdoc.

Lexical owner: [client](<yahoo-engine-contract.test.cjs.md#s-7fcb8c837289945b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| symbol | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- this.calls.push — external-or-dynamic-dispatch; [electron/yahoo-engine-contract.test.cjs:23](<../../../../../electron/yahoo-engine-contract.test.cjs#L23>)
- Date — external-or-dynamic-dispatch; [electron/yahoo-engine-contract.test.cjs:31](<../../../../../electron/yahoo-engine-contract.test.cjs#L31>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-9230af125373cd4e"></a>

## client.chart

[electron/yahoo-engine-contract.test.cjs:35](<../../../../../electron/yahoo-engine-contract.test.cjs#L35>) · MethodDeclaration · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Retains request range options and supplies validated, mixed-availability historical data.

Purpose evidence: jsdoc.

Lexical owner: [client](<yahoo-engine-contract.test.cjs.md#s-7fcb8c837289945b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| symbol | any | compiler-inferred | required |
| options | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- this.calls.push — external-or-dynamic-dispatch; [electron/yahoo-engine-contract.test.cjs:36](<../../../../../electron/yahoo-engine-contract.test.cjs#L36>)
- Date — external-or-dynamic-dispatch; [electron/yahoo-engine-contract.test.cjs:41](<../../../../../electron/yahoo-engine-contract.test.cjs#L41>)
- Date — external-or-dynamic-dispatch; [electron/yahoo-engine-contract.test.cjs:50](<../../../../../electron/yahoo-engine-contract.test.cjs#L50>)
- Date — external-or-dynamic-dispatch; [electron/yahoo-engine-contract.test.cjs:52](<../../../../../electron/yahoo-engine-contract.test.cjs#L52>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-769e6d6d3df34284"></a>

## &lt;anonymous@60:106&gt;

[electron/yahoo-engine-contract.test.cjs:60](<../../../../../electron/yahoo-engine-contract.test.cjs#L60>) · ArrowFunction · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/yahoo-engine-contract.test.cjs](<yahoo-engine-contract.test.cjs.md#s-54befa6d37156722>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [client](<yahoo-engine-contract.test.cjs.md#s-7fcb8c837289945b>) — [electron/yahoo-engine-contract.test.cjs:61](<../../../../../electron/yahoo-engine-contract.test.cjs#L61>)
- [executeNativeEngine](<engines/native.cjs.md#s-acb52912a7e235f5>) — [electron/yahoo-engine-contract.test.cjs:62](<../../../../../electron/yahoo-engine-contract.test.cjs#L62>)
- [createFinancialEngine.getQuote](<engines/yahoo-financials/index.cjs.md#s-2238407e6ff5dbe9>) — [electron/yahoo-engine-contract.test.cjs:72](<../../../../../electron/yahoo-engine-contract.test.cjs#L72>)
- [executeNativeEngine](<engines/native.cjs.md#s-acb52912a7e235f5>) — [electron/yahoo-engine-contract.test.cjs:83](<../../../../../electron/yahoo-engine-contract.test.cjs#L83>)
- [executeNativeEngine](<engines/native.cjs.md#s-acb52912a7e235f5>) — [electron/yahoo-engine-contract.test.cjs:86](<../../../../../electron/yahoo-engine-contract.test.cjs#L86>)
- [client](<yahoo-engine-contract.test.cjs.md#s-7fcb8c837289945b>) — [electron/yahoo-engine-contract.test.cjs:96](<../../../../../electron/yahoo-engine-contract.test.cjs#L96>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 12.

- assert.equal — external-or-dynamic-dispatch; [electron/yahoo-engine-contract.test.cjs:68](<../../../../../electron/yahoo-engine-contract.test.cjs#L68>)
- assert.equal — external-or-dynamic-dispatch; [electron/yahoo-engine-contract.test.cjs:69](<../../../../../electron/yahoo-engine-contract.test.cjs#L69>)
- assert.equal — external-or-dynamic-dispatch; [electron/yahoo-engine-contract.test.cjs:70](<../../../../../electron/yahoo-engine-contract.test.cjs#L70>)
- assert.equal — external-or-dynamic-dispatch; [electron/yahoo-engine-contract.test.cjs:71](<../../../../../electron/yahoo-engine-contract.test.cjs#L71>)
- engine .createFinancialEngine — signature-only-candidate; [electron/yahoo-engine-contract.test.cjs:72](<../../../../../electron/yahoo-engine-contract.test.cjs#L72>)
- assert.equal — external-or-dynamic-dispatch; [electron/yahoo-engine-contract.test.cjs:75](<../../../../../electron/yahoo-engine-contract.test.cjs#L75>)
- assert.deepEqual — external-or-dynamic-dispatch; [electron/yahoo-engine-contract.test.cjs:76](<../../../../../electron/yahoo-engine-contract.test.cjs#L76>)
- assert.rejects — external-or-dynamic-dispatch; [electron/yahoo-engine-contract.test.cjs:82](<../../../../../electron/yahoo-engine-contract.test.cjs#L82>)
- 4 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-85faf6d2e0683001"></a>

## &lt;anonymous@101:87&gt;

[electron/yahoo-engine-contract.test.cjs:101](<../../../../../electron/yahoo-engine-contract.test.cjs#L101>) · ArrowFunction · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/yahoo-engine-contract.test.cjs](<yahoo-engine-contract.test.cjs.md#s-54befa6d37156722>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [client](<yahoo-engine-contract.test.cjs.md#s-7fcb8c837289945b>) — [electron/yahoo-engine-contract.test.cjs:102](<../../../../../electron/yahoo-engine-contract.test.cjs#L102>)
- [createFinancialEngine.getPriceHistory](<engines/yahoo-financials/index.cjs.md#s-4f24f7870860aa94>) — [electron/yahoo-engine-contract.test.cjs:104](<../../../../../electron/yahoo-engine-contract.test.cjs#L104>)
- [createFinancialEngine.getPriceHistory](<engines/yahoo-financials/index.cjs.md#s-4f24f7870860aa94>) — [electron/yahoo-engine-contract.test.cjs:111](<../../../../../electron/yahoo-engine-contract.test.cjs#L111>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 13.

- engine.createFinancialEngine — signature-only-candidate; [electron/yahoo-engine-contract.test.cjs:103](<../../../../../electron/yahoo-engine-contract.test.cjs#L103>)
- assert.equal — external-or-dynamic-dispatch; [electron/yahoo-engine-contract.test.cjs:105](<../../../../../electron/yahoo-engine-contract.test.cjs#L105>)
- assert.equal — external-or-dynamic-dispatch; [electron/yahoo-engine-contract.test.cjs:106](<../../../../../electron/yahoo-engine-contract.test.cjs#L106>)
- assert.equal — external-or-dynamic-dispatch; [electron/yahoo-engine-contract.test.cjs:107](<../../../../../electron/yahoo-engine-contract.test.cjs#L107>)
- assert.equal — external-or-dynamic-dispatch; [electron/yahoo-engine-contract.test.cjs:108](<../../../../../electron/yahoo-engine-contract.test.cjs#L108>)
- assert.equal — external-or-dynamic-dispatch; [electron/yahoo-engine-contract.test.cjs:109](<../../../../../electron/yahoo-engine-contract.test.cjs#L109>)
- assert.equal — external-or-dynamic-dispatch; [electron/yahoo-engine-contract.test.cjs:110](<../../../../../electron/yahoo-engine-contract.test.cjs#L110>)
- yahoo.calls&#91;0&#93;.period1.getTime — external-or-dynamic-dispatch; [electron/yahoo-engine-contract.test.cjs:110](<../../../../../electron/yahoo-engine-contract.test.cjs#L110>)
- 5 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-c42b4a7c03f56f3c"></a>

## &lt;anonymous@125:95&gt;

[electron/yahoo-engine-contract.test.cjs:125](<../../../../../electron/yahoo-engine-contract.test.cjs#L125>) · ArrowFunction · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/yahoo-engine-contract.test.cjs](<yahoo-engine-contract.test.cjs.md#s-54befa6d37156722>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- require.resolve — external-or-dynamic-dispatch; [electron/yahoo-engine-contract.test.cjs:126](<../../../../../electron/yahoo-engine-contract.test.cjs#L126>)
- JSON.parse — external-or-dynamic-dispatch; [electron/yahoo-engine-contract.test.cjs:127](<../../../../../electron/yahoo-engine-contract.test.cjs#L127>)
- execFileSync — external-or-dynamic-dispatch; [electron/yahoo-engine-contract.test.cjs:128](<../../../../../electron/yahoo-engine-contract.test.cjs#L128>)
- assert.deepEqual — external-or-dynamic-dispatch; [electron/yahoo-engine-contract.test.cjs:130](<../../../../../electron/yahoo-engine-contract.test.cjs#L130>)
- assert.throws — external-or-dynamic-dispatch; [electron/yahoo-engine-contract.test.cjs:134](<../../../../../electron/yahoo-engine-contract.test.cjs#L134>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-071dbffd0c77aa79"></a>

## &lt;anonymous@125:95&gt;.&lt;anonymous@135:5&gt;

[electron/yahoo-engine-contract.test.cjs:135](<../../../../../electron/yahoo-engine-contract.test.cjs#L135>) · ArrowFunction · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@125:95&gt;](<yahoo-engine-contract.test.cjs.md#s-c42b4a7c03f56f3c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- execFileSync — external-or-dynamic-dispatch; [electron/yahoo-engine-contract.test.cjs:136](<../../../../../electron/yahoo-engine-contract.test.cjs#L136>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-44f9eb5df701b4f9"></a>

## &lt;anonymous@125:95&gt;.&lt;anonymous@140:5&gt;

[electron/yahoo-engine-contract.test.cjs:140](<../../../../../electron/yahoo-engine-contract.test.cjs#L140>) · ArrowFunction · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@125:95&gt;](<yahoo-engine-contract.test.cjs.md#s-c42b4a7c03f56f3c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| error | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 6.

- assert.equal — external-or-dynamic-dispatch; [electron/yahoo-engine-contract.test.cjs:141](<../../../../../electron/yahoo-engine-contract.test.cjs#L141>)
- assert.ok — external-or-dynamic-dispatch; [electron/yahoo-engine-contract.test.cjs:142](<../../../../../electron/yahoo-engine-contract.test.cjs#L142>)
- JSON.parse — external-or-dynamic-dispatch; [electron/yahoo-engine-contract.test.cjs:142](<../../../../../electron/yahoo-engine-contract.test.cjs#L142>)
- error.stderr.toString — external-or-dynamic-dispatch; [electron/yahoo-engine-contract.test.cjs:142](<../../../../../electron/yahoo-engine-contract.test.cjs#L142>)
- assert.equal — external-or-dynamic-dispatch; [electron/yahoo-engine-contract.test.cjs:143](<../../../../../electron/yahoo-engine-contract.test.cjs#L143>)
- error.stdout.toString — external-or-dynamic-dispatch; [electron/yahoo-engine-contract.test.cjs:143](<../../../../../electron/yahoo-engine-contract.test.cjs#L143>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-775be3e5fd460172"></a>

## isolated

[electron/yahoo-engine-contract.test.cjs:150](<../../../../../electron/yahoo-engine-contract.test.cjs#L150>) · FunctionDeclaration · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Runs cache and cleanup tests in a fresh, bounded temporary root.

Purpose evidence: jsdoc.

Lexical owner: [electron/yahoo-engine-contract.test.cjs](<yahoo-engine-contract.test.cjs.md#s-54befa6d37156722>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| run | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@164:95&gt;](<yahoo-engine-contract.test.cjs.md#s-780f023eec9c6cea>) — [electron/yahoo-engine-contract.test.cjs:165](<../../../../../electron/yahoo-engine-contract.test.cjs#L165>)
- [&lt;anonymous@205:82&gt;](<yahoo-engine-contract.test.cjs.md#s-06ee2fd756fe931c>) — [electron/yahoo-engine-contract.test.cjs:206](<../../../../../electron/yahoo-engine-contract.test.cjs#L206>)
- [&lt;anonymous@263:94&gt;](<yahoo-engine-contract.test.cjs.md#s-12ae342730f0f203>) — [electron/yahoo-engine-contract.test.cjs:264](<../../../../../electron/yahoo-engine-contract.test.cjs#L264>)

Unresolved / external call sites: 10.

- fs.mkdtemp — external-or-dynamic-dispatch; [electron/yahoo-engine-contract.test.cjs:151](<../../../../../electron/yahoo-engine-contract.test.cjs#L151>)
- path.join — external-or-dynamic-dispatch; [electron/yahoo-engine-contract.test.cjs:152](<../../../../../electron/yahoo-engine-contract.test.cjs#L152>)
- os.tmpdir — external-or-dynamic-dispatch; [electron/yahoo-engine-contract.test.cjs:152](<../../../../../electron/yahoo-engine-contract.test.cjs#L152>)
- run — external-or-dynamic-dispatch; [electron/yahoo-engine-contract.test.cjs:155](<../../../../../electron/yahoo-engine-contract.test.cjs#L155>)
- assert.ok — external-or-dynamic-dispatch; [electron/yahoo-engine-contract.test.cjs:157](<../../../../../electron/yahoo-engine-contract.test.cjs#L157>)
- path.resolve(root).startsWith — external-or-dynamic-dispatch; [electron/yahoo-engine-contract.test.cjs:158](<../../../../../electron/yahoo-engine-contract.test.cjs#L158>)
- path.resolve — external-or-dynamic-dispatch; [electron/yahoo-engine-contract.test.cjs:158](<../../../../../electron/yahoo-engine-contract.test.cjs#L158>)
- path.resolve — external-or-dynamic-dispatch; [electron/yahoo-engine-contract.test.cjs:158](<../../../../../electron/yahoo-engine-contract.test.cjs#L158>)
- 2 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/yahoo-engine-contract.test.cjs:165](<../../../../../electron/yahoo-engine-contract.test.cjs#L165>) — static-call-site; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:206](<../../../../../electron/yahoo-engine-contract.test.cjs#L206>) — static-call-site; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:264](<../../../../../electron/yahoo-engine-contract.test.cjs#L264>) — static-call-site; coverage not established.

<a id="s-780f023eec9c6cea"></a>

## &lt;anonymous@164:95&gt;

[electron/yahoo-engine-contract.test.cjs:164](<../../../../../electron/yahoo-engine-contract.test.cjs#L164>) · ArrowFunction · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/yahoo-engine-contract.test.cjs](<yahoo-engine-contract.test.cjs.md#s-54befa6d37156722>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [isolated](<yahoo-engine-contract.test.cjs.md#s-775be3e5fd460172>) — [electron/yahoo-engine-contract.test.cjs:165](<../../../../../electron/yahoo-engine-contract.test.cjs#L165>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-0fdaf6987be177bb"></a>

## &lt;anonymous@164:95&gt;.&lt;anonymous@165:12&gt;

[electron/yahoo-engine-contract.test.cjs:165](<../../../../../electron/yahoo-engine-contract.test.cjs#L165>) · ArrowFunction · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@164:95&gt;](<yahoo-engine-contract.test.cjs.md#s-780f023eec9c6cea>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [client](<yahoo-engine-contract.test.cjs.md#s-7fcb8c837289945b>) — [electron/yahoo-engine-contract.test.cjs:167](<../../../../../electron/yahoo-engine-contract.test.cjs#L167>)
- [createFinancialService](<financial-service.cjs.md#s-b66de62a4b41c1b8>) — [electron/yahoo-engine-contract.test.cjs:172](<../../../../../electron/yahoo-engine-contract.test.cjs#L172>)
- [createFinancialService](<financial-service.cjs.md#s-b66de62a4b41c1b8>) — [electron/yahoo-engine-contract.test.cjs:191](<../../../../../electron/yahoo-engine-contract.test.cjs#L191>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 16.

- Date.now — external-or-dynamic-dispatch; [electron/yahoo-engine-contract.test.cjs:166](<../../../../../electron/yahoo-engine-contract.test.cjs#L166>)
- engine.createFinancialEngine — signature-only-candidate; [electron/yahoo-engine-contract.test.cjs:168](<../../../../../electron/yahoo-engine-contract.test.cjs#L168>)
- service.get — signature-only-candidate; [electron/yahoo-engine-contract.test.cjs:177](<../../../../../electron/yahoo-engine-contract.test.cjs#L177>)
- assert.equal — external-or-dynamic-dispatch; [electron/yahoo-engine-contract.test.cjs:178](<../../../../../electron/yahoo-engine-contract.test.cjs#L178>)
- service.get — signature-only-candidate; [electron/yahoo-engine-contract.test.cjs:179](<../../../../../electron/yahoo-engine-contract.test.cjs#L179>)
- service.get — signature-only-candidate; [electron/yahoo-engine-contract.test.cjs:182](<../../../../../electron/yahoo-engine-contract.test.cjs#L182>)
- service.get — signature-only-candidate; [electron/yahoo-engine-contract.test.cjs:183](<../../../../../electron/yahoo-engine-contract.test.cjs#L183>)
- service.get — signature-only-candidate; [electron/yahoo-engine-contract.test.cjs:185](<../../../../../electron/yahoo-engine-contract.test.cjs#L185>)
- 8 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-9cc451e84373997a"></a>

## &lt;anonymous@164:95&gt;.&lt;anonymous@165:12&gt;.clock

[electron/yahoo-engine-contract.test.cjs:170](<../../../../../electron/yahoo-engine-contract.test.cjs#L170>) · ArrowFunction · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@164:95&gt;.&lt;anonymous@165:12&gt;](<yahoo-engine-contract.test.cjs.md#s-0fdaf6987be177bb>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-a79dc8e388ba5952"></a>

## &lt;anonymous@164:95&gt;.&lt;anonymous@165:12&gt;.fetch

[electron/yahoo-engine-contract.test.cjs:173](<../../../../../electron/yahoo-engine-contract.test.cjs#L173>) · ArrowFunction · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@164:95&gt;.&lt;anonymous@165:12&gt;](<yahoo-engine-contract.test.cjs.md#s-0fdaf6987be177bb>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| symbol | any | compiler-inferred | required |
| operation | any | compiler-inferred | required |
| range | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- provider.execute — signature-only-candidate; [electron/yahoo-engine-contract.test.cjs:174](<../../../../../electron/yahoo-engine-contract.test.cjs#L174>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-eff43271b569594b"></a>

## &lt;anonymous@164:95&gt;.&lt;anonymous@165:12&gt;.clock

[electron/yahoo-engine-contract.test.cjs:175](<../../../../../electron/yahoo-engine-contract.test.cjs#L175>) · ArrowFunction · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@164:95&gt;.&lt;anonymous@165:12&gt;](<yahoo-engine-contract.test.cjs.md#s-0fdaf6987be177bb>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-969be92d70f77278"></a>

## &lt;anonymous@164:95&gt;.&lt;anonymous@165:12&gt;.fetch

[electron/yahoo-engine-contract.test.cjs:192](<../../../../../electron/yahoo-engine-contract.test.cjs#L192>) · ArrowFunction · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@164:95&gt;.&lt;anonymous@165:12&gt;](<yahoo-engine-contract.test.cjs.md#s-0fdaf6987be177bb>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- Error — external-or-dynamic-dispatch; [electron/yahoo-engine-contract.test.cjs:193](<../../../../../electron/yahoo-engine-contract.test.cjs#L193>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-01733fd0e62a821d"></a>

## &lt;anonymous@164:95&gt;.&lt;anonymous@165:12&gt;.clock

[electron/yahoo-engine-contract.test.cjs:195](<../../../../../electron/yahoo-engine-contract.test.cjs#L195>) · ArrowFunction · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@164:95&gt;.&lt;anonymous@165:12&gt;](<yahoo-engine-contract.test.cjs.md#s-0fdaf6987be177bb>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-06ee2fd756fe931c"></a>

## &lt;anonymous@205:82&gt;

[electron/yahoo-engine-contract.test.cjs:205](<../../../../../electron/yahoo-engine-contract.test.cjs#L205>) · ArrowFunction · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/yahoo-engine-contract.test.cjs](<yahoo-engine-contract.test.cjs.md#s-54befa6d37156722>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [isolated](<yahoo-engine-contract.test.cjs.md#s-775be3e5fd460172>) — [electron/yahoo-engine-contract.test.cjs:206](<../../../../../electron/yahoo-engine-contract.test.cjs#L206>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-12071c09bac274ad"></a>

## &lt;anonymous@205:82&gt;.&lt;anonymous@206:12&gt;

[electron/yahoo-engine-contract.test.cjs:206](<../../../../../electron/yahoo-engine-contract.test.cjs#L206>) · ArrowFunction · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@205:82&gt;](<yahoo-engine-contract.test.cjs.md#s-06ee2fd756fe931c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [saveKnowledgeIndex](<domains/knowledge/knowledge-store.cjs.md#s-23c92923d2d74292>) — [electron/yahoo-engine-contract.test.cjs:221](<../../../../../electron/yahoo-engine-contract.test.cjs#L221>)
- [getAuthorizedHistory](<financial-service.cjs.md#s-468568001e3c5ce7>) — [electron/yahoo-engine-contract.test.cjs:243](<../../../../../electron/yahoo-engine-contract.test.cjs#L243>)
- [getAuthorizedHistory](<financial-service.cjs.md#s-468568001e3c5ce7>) — [electron/yahoo-engine-contract.test.cjs:246](<../../../../../electron/yahoo-engine-contract.test.cjs#L246>)
- [getAuthorizedHistory](<financial-service.cjs.md#s-468568001e3c5ce7>) — [electron/yahoo-engine-contract.test.cjs:257](<../../../../../electron/yahoo-engine-contract.test.cjs#L257>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 6.

- require — module-loader; [electron/yahoo-engine-contract.test.cjs:209](<../../../../../electron/yahoo-engine-contract.test.cjs#L209>)
- require — module-loader; [electron/yahoo-engine-contract.test.cjs:212](<../../../../../electron/yahoo-engine-contract.test.cjs#L212>)
- saveWorldViewChip — signature-only-candidate; [electron/yahoo-engine-contract.test.cjs:213](<../../../../../electron/yahoo-engine-contract.test.cjs#L213>)
- assert.rejects — external-or-dynamic-dispatch; [electron/yahoo-engine-contract.test.cjs:242](<../../../../../electron/yahoo-engine-contract.test.cjs#L242>)
- assert.equal — external-or-dynamic-dispatch; [electron/yahoo-engine-contract.test.cjs:245](<../../../../../electron/yahoo-engine-contract.test.cjs#L245>)
- assert.rejects — external-or-dynamic-dispatch; [electron/yahoo-engine-contract.test.cjs:257](<../../../../../electron/yahoo-engine-contract.test.cjs#L257>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-fc962d6acf3525b8"></a>

## &lt;anonymous@205:82&gt;.&lt;anonymous@206:12&gt;.&lt;anonymous@238:30&gt;

[electron/yahoo-engine-contract.test.cjs:238](<../../../../../electron/yahoo-engine-contract.test.cjs#L238>) · ArrowFunction · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@205:82&gt;.&lt;anonymous@206:12&gt;](<yahoo-engine-contract.test.cjs.md#s-12071c09bac274ad>).

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

<a id="s-519b3330d462084f"></a>

## &lt;anonymous@205:82&gt;.&lt;anonymous@206:12&gt;.&lt;anonymous@247:30&gt;

[electron/yahoo-engine-contract.test.cjs:247](<../../../../../electron/yahoo-engine-contract.test.cjs#L247>) · ArrowFunction · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@205:82&gt;.&lt;anonymous@206:12&gt;](<yahoo-engine-contract.test.cjs.md#s-12071c09bac274ad>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [saveKnowledgeIndex](<domains/knowledge/knowledge-store.cjs.md#s-23c92923d2d74292>) — [electron/yahoo-engine-contract.test.cjs:248](<../../../../../electron/yahoo-engine-contract.test.cjs#L248>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-12ae342730f0f203"></a>

## &lt;anonymous@263:94&gt;

[electron/yahoo-engine-contract.test.cjs:263](<../../../../../electron/yahoo-engine-contract.test.cjs#L263>) · ArrowFunction · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/yahoo-engine-contract.test.cjs](<yahoo-engine-contract.test.cjs.md#s-54befa6d37156722>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [isolated](<yahoo-engine-contract.test.cjs.md#s-775be3e5fd460172>) — [electron/yahoo-engine-contract.test.cjs:264](<../../../../../electron/yahoo-engine-contract.test.cjs#L264>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-79412942bec3c094"></a>

## &lt;anonymous@263:94&gt;.&lt;anonymous@264:12&gt;

[electron/yahoo-engine-contract.test.cjs:264](<../../../../../electron/yahoo-engine-contract.test.cjs#L264>) · ArrowFunction · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@263:94&gt;](<yahoo-engine-contract.test.cjs.md#s-12ae342730f0f203>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [planCleanup](<../scripts/clean-engine-backups.cjs.md#s-9fdf038c44152d4f>) — [electron/yahoo-engine-contract.test.cjs:291](<../../../../../electron/yahoo-engine-contract.test.cjs#L291>)
- [planCleanup](<../scripts/clean-engine-backups.cjs.md#s-9fdf038c44152d4f>) — [electron/yahoo-engine-contract.test.cjs:293](<../../../../../electron/yahoo-engine-contract.test.cjs#L293>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 20.

- path.join — external-or-dynamic-dispatch; [electron/yahoo-engine-contract.test.cjs:265](<../../../../../electron/yahoo-engine-contract.test.cjs#L265>)
- path.join — external-or-dynamic-dispatch; [electron/yahoo-engine-contract.test.cjs:266](<../../../../../electron/yahoo-engine-contract.test.cjs#L266>)
- fs.mkdir — external-or-dynamic-dispatch; [electron/yahoo-engine-contract.test.cjs:272](<../../../../../electron/yahoo-engine-contract.test.cjs#L272>)
- fs.writeFile — external-or-dynamic-dispatch; [electron/yahoo-engine-contract.test.cjs:273](<../../../../../electron/yahoo-engine-contract.test.cjs#L273>)
- path.join — external-or-dynamic-dispatch; [electron/yahoo-engine-contract.test.cjs:274](<../../../../../electron/yahoo-engine-contract.test.cjs#L274>)
- fs.writeFile — external-or-dynamic-dispatch; [electron/yahoo-engine-contract.test.cjs:277](<../../../../../electron/yahoo-engine-contract.test.cjs#L277>)
- path.join — external-or-dynamic-dispatch; [electron/yahoo-engine-contract.test.cjs:278](<../../../../../electron/yahoo-engine-contract.test.cjs#L278>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/yahoo-engine-contract.test.cjs:279](<../../../../../electron/yahoo-engine-contract.test.cjs#L279>)
- 12 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
