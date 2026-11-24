# electron/daily-price.test.cjs: symbols

[Atlas](<../../../README.md>) / [Built-in Engines and data adapters](<../../../modules/engines.md>) / [electron/daily-price.test.cjs:1](<../../../../../electron/daily-price.test.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/daily-price.test.cjs](<daily-price.test.cjs.md#s-8e111220cb14cd36>) (Module)
- [fakeClient](<daily-price.test.cjs.md#s-d5d9d9248d73b70e>) (FunctionDeclaration)
- [fakeClient.quote](<daily-price.test.cjs.md#s-07c76c43e9238070>) (MethodDeclaration)
- [fakeClient.chart](<daily-price.test.cjs.md#s-35f66dff61900937>) (MethodDeclaration)
- [withUniverse](<daily-price.test.cjs.md#s-f8fc4cd00eb7ba7d>) (FunctionDeclaration)
- [&lt;anonymous@82:73&gt;](<daily-price.test.cjs.md#s-8ed82009555c1670>) (ArrowFunction)
- [&lt;anonymous@82:73&gt;.&lt;anonymous@86:19&gt;](<daily-price.test.cjs.md#s-1f9ebcd45aa23c5b>) (ArrowFunction)
- [&lt;anonymous@82:73&gt;.clock](<daily-price.test.cjs.md#s-af90a2c894db3068>) (ArrowFunction)
- [&lt;anonymous@109:69&gt;](<daily-price.test.cjs.md#s-57c8d02bac1cd677>) (ArrowFunction)
- [&lt;anonymous@109:69&gt;.missing](<daily-price.test.cjs.md#s-54a894dd2b1ecae9>) (FunctionExpression)
- [&lt;anonymous@109:69&gt;.noHistory](<daily-price.test.cjs.md#s-b47c5e5d78645790>) (FunctionExpression)
- [&lt;anonymous@109:69&gt;.unavailableTime](<daily-price.test.cjs.md#s-f06dffe6fbbe13c5>) (FunctionExpression)
- [&lt;anonymous@155:83&gt;](<daily-price.test.cjs.md#s-67e20a7c65bbf2ea>) (ArrowFunction)
- [&lt;anonymous@155:83&gt;.&lt;anonymous@156:22&gt;](<daily-price.test.cjs.md#s-a20736db4266bbaa>) (ArrowFunction)
- [&lt;anonymous@155:83&gt;.&lt;anonymous@156:22&gt;.clock](<daily-price.test.cjs.md#s-73e6fc1f1c9fb025>) (ArrowFunction)
- [&lt;anonymous@155:83&gt;.&lt;anonymous@156:22&gt;.clock](<daily-price.test.cjs.md#s-86b765e00fc7aa8a>) (ArrowFunction)
- [&lt;anonymous@155:83&gt;.&lt;anonymous@156:22&gt;.clock](<daily-price.test.cjs.md#s-644e2ffc9761dc21>) (ArrowFunction)
- [&lt;anonymous@155:83&gt;.&lt;anonymous@156:22&gt;.unavailable](<daily-price.test.cjs.md#s-73612e4be4e07c44>) (FunctionExpression)
- [&lt;anonymous@155:83&gt;.&lt;anonymous@156:22&gt;.clock](<daily-price.test.cjs.md#s-342d7842078748d9>) (ArrowFunction)
- [&lt;anonymous@203:71&gt;](<daily-price.test.cjs.md#s-f22f94178f24ae79>) (ArrowFunction)
- [&lt;anonymous@203:71&gt;.&lt;anonymous@204:22&gt;](<daily-price.test.cjs.md#s-6ee60d633344ad90>) (ArrowFunction)
- [&lt;anonymous@237:62&gt;](<daily-price.test.cjs.md#s-a0adfe65189d60f6>) (ArrowFunction)
- [&lt;anonymous@237:62&gt;.&lt;anonymous@245:32&gt;](<daily-price.test.cjs.md#s-57b7a1224d3b2477>) (ArrowFunction)
- [&lt;anonymous@265:68&gt;](<daily-price.test.cjs.md#s-098f9a735c5dfe78>) (ArrowFunction)
- [&lt;anonymous@265:68&gt;.&lt;anonymous@266:22&gt;](<daily-price.test.cjs.md#s-4ed15f29548b98c0>) (ArrowFunction)
- [&lt;anonymous@265:68&gt;.&lt;anonymous@266:22&gt;.quoted](<daily-price.test.cjs.md#s-767229caf4b406fd>) (FunctionExpression)
- [&lt;anonymous@265:68&gt;.&lt;anonymous@266:22&gt;.removedDuringRequest](<daily-price.test.cjs.md#s-022ab36c71a36fd5>) (FunctionExpression)

<a id="s-8e111220cb14cd36"></a>

## electron/daily-price.test.cjs

[electron/daily-price.test.cjs:1](<../../../../../electron/daily-price.test.cjs#L1>) · Module · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 17.

- require — module-loader; [electron/daily-price.test.cjs:1](<../../../../../electron/daily-price.test.cjs#L1>)
- require — module-loader; [electron/daily-price.test.cjs:2](<../../../../../electron/daily-price.test.cjs#L2>)
- require — module-loader; [electron/daily-price.test.cjs:3](<../../../../../electron/daily-price.test.cjs#L3>)
- require — module-loader; [electron/daily-price.test.cjs:4](<../../../../../electron/daily-price.test.cjs#L4>)
- require — module-loader; [electron/daily-price.test.cjs:5](<../../../../../electron/daily-price.test.cjs#L5>)
- require — module-loader; [electron/daily-price.test.cjs:10](<../../../../../electron/daily-price.test.cjs#L10>)
- require — module-loader; [electron/daily-price.test.cjs:11](<../../../../../electron/daily-price.test.cjs#L11>)
- require — module-loader; [electron/daily-price.test.cjs:16](<../../../../../electron/daily-price.test.cjs#L16>)
- 9 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d5d9d9248d73b70e"></a>

## fakeClient

[electron/daily-price.test.cjs:27](<../../../../../electron/daily-price.test.cjs#L27>) · FunctionDeclaration · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Supplies deterministic public-market-shaped provider data with timezone-sensitive dates and a valid zero close.

Purpose evidence: jsdoc.

Lexical owner: [electron/daily-price.test.cjs](<daily-price.test.cjs.md#s-8e111220cb14cd36>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: { calls: { quote: number; chart: number; }; quote(symbol: any): unknown; chart(): unknown; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@82:73&gt;](<daily-price.test.cjs.md#s-8ed82009555c1670>) — [electron/daily-price.test.cjs:87](<../../../../../electron/daily-price.test.cjs#L87>)
- [&lt;anonymous@109:69&gt;](<daily-price.test.cjs.md#s-57c8d02bac1cd677>) — [electron/daily-price.test.cjs:110](<../../../../../electron/daily-price.test.cjs#L110>)
- [&lt;anonymous@109:69&gt;](<daily-price.test.cjs.md#s-57c8d02bac1cd677>) — [electron/daily-price.test.cjs:118](<../../../../../electron/daily-price.test.cjs#L118>)
- [&lt;anonymous@109:69&gt;](<daily-price.test.cjs.md#s-57c8d02bac1cd677>) — [electron/daily-price.test.cjs:126](<../../../../../electron/daily-price.test.cjs#L126>)
- [&lt;anonymous@109:69&gt;](<daily-price.test.cjs.md#s-57c8d02bac1cd677>) — [electron/daily-price.test.cjs:135](<../../../../../electron/daily-price.test.cjs#L135>)
- [&lt;anonymous@155:83&gt;.&lt;anonymous@156:22&gt;](<daily-price.test.cjs.md#s-a20736db4266bbaa>) — [electron/daily-price.test.cjs:158](<../../../../../electron/daily-price.test.cjs#L158>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/daily-price.test.cjs:87](<../../../../../electron/daily-price.test.cjs#L87>) — static-call-site; coverage not established.
- [electron/daily-price.test.cjs:110](<../../../../../electron/daily-price.test.cjs#L110>) — static-call-site; coverage not established.
- [electron/daily-price.test.cjs:118](<../../../../../electron/daily-price.test.cjs#L118>) — static-call-site; coverage not established.
- [electron/daily-price.test.cjs:126](<../../../../../electron/daily-price.test.cjs#L126>) — static-call-site; coverage not established.
- [electron/daily-price.test.cjs:135](<../../../../../electron/daily-price.test.cjs#L135>) — static-call-site; coverage not established.
- [electron/daily-price.test.cjs:158](<../../../../../electron/daily-price.test.cjs#L158>) — static-call-site; coverage not established.

<a id="s-07c76c43e9238070"></a>

## fakeClient.quote

[electron/daily-price.test.cjs:31](<../../../../../electron/daily-price.test.cjs#L31>) · MethodDeclaration · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Returns a saved regular-session quote without network access.

Purpose evidence: jsdoc.

Lexical owner: [fakeClient](<daily-price.test.cjs.md#s-d5d9d9248d73b70e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| symbol | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@109:69&gt;](<daily-price.test.cjs.md#s-57c8d02bac1cd677>) — [electron/daily-price.test.cjs:127](<../../../../../electron/daily-price.test.cjs#L127>)

Unresolved / external call sites: 1.

- Date — external-or-dynamic-dispatch; [electron/daily-price.test.cjs:39](<../../../../../electron/daily-price.test.cjs#L39>)

**Related tests / acceptance harnesses:**

- [electron/daily-price.test.cjs:127](<../../../../../electron/daily-price.test.cjs#L127>) — static-call-site; coverage not established.

<a id="s-35f66dff61900937"></a>

## fakeClient.chart

[electron/daily-price.test.cjs:45](<../../../../../electron/daily-price.test.cjs#L45>) · MethodDeclaration · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Returns deliberately unordered observations and missing data to exercise normalization.

Purpose evidence: jsdoc.

Lexical owner: [fakeClient](<daily-price.test.cjs.md#s-d5d9d9248d73b70e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- Date — external-or-dynamic-dispatch; [electron/daily-price.test.cjs:49](<../../../../../electron/daily-price.test.cjs#L49>)
- Date — external-or-dynamic-dispatch; [electron/daily-price.test.cjs:50](<../../../../../electron/daily-price.test.cjs#L50>)
- Date — external-or-dynamic-dispatch; [electron/daily-price.test.cjs:51](<../../../../../electron/daily-price.test.cjs#L51>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-f8fc4cd00eb7ba7d"></a>

## withUniverse

[electron/daily-price.test.cjs:59](<../../../../../electron/daily-price.test.cjs#L59>) · FunctionDeclaration · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Creates and cleans only an isolated temporary Universe for price cache and metadata tests.

Purpose evidence: jsdoc.

Lexical owner: [electron/daily-price.test.cjs](<daily-price.test.cjs.md#s-8e111220cb14cd36>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| run | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@155:83&gt;](<daily-price.test.cjs.md#s-67e20a7c65bbf2ea>) — [electron/daily-price.test.cjs:156](<../../../../../electron/daily-price.test.cjs#L156>)
- [&lt;anonymous@203:71&gt;](<daily-price.test.cjs.md#s-f22f94178f24ae79>) — [electron/daily-price.test.cjs:204](<../../../../../electron/daily-price.test.cjs#L204>)
- [&lt;anonymous@265:68&gt;](<daily-price.test.cjs.md#s-098f9a735c5dfe78>) — [electron/daily-price.test.cjs:266](<../../../../../electron/daily-price.test.cjs#L266>)

Unresolved / external call sites: 11.

- fs.mkdtemp — external-or-dynamic-dispatch; [electron/daily-price.test.cjs:60](<../../../../../electron/daily-price.test.cjs#L60>)
- path.join — external-or-dynamic-dispatch; [electron/daily-price.test.cjs:61](<../../../../../electron/daily-price.test.cjs#L61>)
- os.tmpdir — external-or-dynamic-dispatch; [electron/daily-price.test.cjs:61](<../../../../../electron/daily-price.test.cjs#L61>)
- saveWorldViewChip — signature-only-candidate; [electron/daily-price.test.cjs:64](<../../../../../electron/daily-price.test.cjs#L64>)
- run — external-or-dynamic-dispatch; [electron/daily-price.test.cjs:72](<../../../../../electron/daily-price.test.cjs#L72>)
- assert.ok — external-or-dynamic-dispatch; [electron/daily-price.test.cjs:74](<../../../../../electron/daily-price.test.cjs#L74>)
- path.resolve(root).startsWith — external-or-dynamic-dispatch; [electron/daily-price.test.cjs:75](<../../../../../electron/daily-price.test.cjs#L75>)
- path.resolve — external-or-dynamic-dispatch; [electron/daily-price.test.cjs:75](<../../../../../electron/daily-price.test.cjs#L75>)
- 3 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/daily-price.test.cjs:156](<../../../../../electron/daily-price.test.cjs#L156>) — static-call-site; coverage not established.
- [electron/daily-price.test.cjs:204](<../../../../../electron/daily-price.test.cjs#L204>) — static-call-site; coverage not established.
- [electron/daily-price.test.cjs:266](<../../../../../electron/daily-price.test.cjs#L266>) — static-call-site; coverage not established.

<a id="s-8ed82009555c1670"></a>

## &lt;anonymous@82:73&gt;

[electron/daily-price.test.cjs:82](<../../../../../electron/daily-price.test.cjs#L82>) · ArrowFunction · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/daily-price.test.cjs](<daily-price.test.cjs.md#s-8e111220cb14cd36>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [fakeClient](<daily-price.test.cjs.md#s-d5d9d9248d73b70e>) — [electron/daily-price.test.cjs:87](<../../../../../electron/daily-price.test.cjs#L87>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 18.

- assert.ok — external-or-dynamic-dispatch; [electron/daily-price.test.cjs:84](<../../../../../electron/daily-price.test.cjs#L84>)
- normalizeSymbol — signature-only-candidate; [electron/daily-price.test.cjs:84](<../../../../../electron/daily-price.test.cjs#L84>)
- assert.throws — external-or-dynamic-dispatch; [electron/daily-price.test.cjs:86](<../../../../../electron/daily-price.test.cjs#L86>)
- Date.parse — external-or-dynamic-dispatch; [electron/daily-price.test.cjs:88](<../../../../../electron/daily-price.test.cjs#L88>)
- createDailyPriceEngine — signature-only-candidate; [electron/daily-price.test.cjs:89](<../../../../../electron/daily-price.test.cjs#L89>)
- engine.price — signature-only-candidate; [electron/daily-price.test.cjs:90](<../../../../../electron/daily-price.test.cjs#L90>)
- assert.equal — external-or-dynamic-dispatch; [electron/daily-price.test.cjs:91](<../../../../../electron/daily-price.test.cjs#L91>)
- assert.equal — external-or-dynamic-dispatch; [electron/daily-price.test.cjs:92](<../../../../../electron/daily-price.test.cjs#L92>)
- 10 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-1f9ebcd45aa23c5b"></a>

## &lt;anonymous@82:73&gt;.&lt;anonymous@86:19&gt;

[electron/daily-price.test.cjs:86](<../../../../../electron/daily-price.test.cjs#L86>) · ArrowFunction · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@82:73&gt;](<daily-price.test.cjs.md#s-8ed82009555c1670>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- normalizeSymbol — signature-only-candidate; [electron/daily-price.test.cjs:86](<../../../../../electron/daily-price.test.cjs#L86>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-af90a2c894db3068"></a>

## &lt;anonymous@82:73&gt;.clock

[electron/daily-price.test.cjs:89](<../../../../../electron/daily-price.test.cjs#L89>) · ArrowFunction · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@82:73&gt;](<daily-price.test.cjs.md#s-8ed82009555c1670>).

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

<a id="s-57c8d02bac1cd677"></a>

## &lt;anonymous@109:69&gt;

[electron/daily-price.test.cjs:109](<../../../../../electron/daily-price.test.cjs#L109>) · ArrowFunction · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/daily-price.test.cjs](<daily-price.test.cjs.md#s-8e111220cb14cd36>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [fakeClient](<daily-price.test.cjs.md#s-d5d9d9248d73b70e>) — [electron/daily-price.test.cjs:110](<../../../../../electron/daily-price.test.cjs#L110>)
- [fakeClient](<daily-price.test.cjs.md#s-d5d9d9248d73b70e>) — [electron/daily-price.test.cjs:118](<../../../../../electron/daily-price.test.cjs#L118>)
- [fakeClient](<daily-price.test.cjs.md#s-d5d9d9248d73b70e>) — [electron/daily-price.test.cjs:126](<../../../../../electron/daily-price.test.cjs#L126>)
- [fakeClient.quote](<daily-price.test.cjs.md#s-07c76c43e9238070>) — [electron/daily-price.test.cjs:127](<../../../../../electron/daily-price.test.cjs#L127>)
- [fakeClient](<daily-price.test.cjs.md#s-d5d9d9248d73b70e>) — [electron/daily-price.test.cjs:135](<../../../../../electron/daily-price.test.cjs#L135>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 15.

- assert.rejects — external-or-dynamic-dispatch; [electron/daily-price.test.cjs:114](<../../../../../electron/daily-price.test.cjs#L114>)
- createDailyPriceEngine({ client }).price — signature-only-candidate; [electron/daily-price.test.cjs:115](<../../../../../electron/daily-price.test.cjs#L115>)
- createDailyPriceEngine — signature-only-candidate; [electron/daily-price.test.cjs:115](<../../../../../electron/daily-price.test.cjs#L115>)
- assert.rejects — external-or-dynamic-dispatch; [electron/daily-price.test.cjs:122](<../../../../../electron/daily-price.test.cjs#L122>)
- createDailyPriceEngine({ client: empty }).price — signature-only-candidate; [electron/daily-price.test.cjs:123](<../../../../../electron/daily-price.test.cjs#L123>)
- createDailyPriceEngine — signature-only-candidate; [electron/daily-price.test.cjs:123](<../../../../../electron/daily-price.test.cjs#L123>)
- assert.rejects — external-or-dynamic-dispatch; [electron/daily-price.test.cjs:131](<../../../../../electron/daily-price.test.cjs#L131>)
- createDailyPriceEngine({ client: noTime }).price — signature-only-candidate; [electron/daily-price.test.cjs:132](<../../../../../electron/daily-price.test.cjs#L132>)
- 7 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-54a894dd2b1ecae9"></a>

## &lt;anonymous@109:69&gt;.missing

[electron/daily-price.test.cjs:111](<../../../../../electron/daily-price.test.cjs#L111>) · FunctionExpression · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@109:69&gt;](<daily-price.test.cjs.md#s-57c8d02bac1cd677>).

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

<a id="s-b47c5e5d78645790"></a>

## &lt;anonymous@109:69&gt;.noHistory

[electron/daily-price.test.cjs:119](<../../../../../electron/daily-price.test.cjs#L119>) · FunctionExpression · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@109:69&gt;](<daily-price.test.cjs.md#s-57c8d02bac1cd677>).

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

<a id="s-f06dffe6fbbe13c5"></a>

## &lt;anonymous@109:69&gt;.unavailableTime

[electron/daily-price.test.cjs:128](<../../../../../electron/daily-price.test.cjs#L128>) · FunctionExpression · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@109:69&gt;](<daily-price.test.cjs.md#s-57c8d02bac1cd677>).

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

<a id="s-67e20a7c65bbf2ea"></a>

## &lt;anonymous@155:83&gt;

[electron/daily-price.test.cjs:155](<../../../../../electron/daily-price.test.cjs#L155>) · ArrowFunction · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/daily-price.test.cjs](<daily-price.test.cjs.md#s-8e111220cb14cd36>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [withUniverse](<daily-price.test.cjs.md#s-f8fc4cd00eb7ba7d>) — [electron/daily-price.test.cjs:156](<../../../../../electron/daily-price.test.cjs#L156>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-a20736db4266bbaa"></a>

## &lt;anonymous@155:83&gt;.&lt;anonymous@156:22&gt;

[electron/daily-price.test.cjs:156](<../../../../../electron/daily-price.test.cjs#L156>) · ArrowFunction · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@155:83&gt;](<daily-price.test.cjs.md#s-67e20a7c65bbf2ea>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [fakeClient](<daily-price.test.cjs.md#s-d5d9d9248d73b70e>) — [electron/daily-price.test.cjs:158](<../../../../../electron/daily-price.test.cjs#L158>)
- [createDailyPriceService](<daily-price-service.cjs.md#s-79fd9f26e8210a5a>) — [electron/daily-price.test.cjs:160](<../../../../../electron/daily-price.test.cjs#L160>)
- [createDailyPriceService](<daily-price-service.cjs.md#s-79fd9f26e8210a5a>) — [electron/daily-price.test.cjs:172](<../../../../../electron/daily-price.test.cjs#L172>)
- [createDailyPriceService](<daily-price-service.cjs.md#s-79fd9f26e8210a5a>) — [electron/daily-price.test.cjs:193](<../../../../../electron/daily-price.test.cjs#L193>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 26.

- Date.parse — external-or-dynamic-dispatch; [electron/daily-price.test.cjs:157](<../../../../../electron/daily-price.test.cjs#L157>)
- createDailyPriceEngine — signature-only-candidate; [electron/daily-price.test.cjs:159](<../../../../../electron/daily-price.test.cjs#L159>)
- Promise.all — external-or-dynamic-dispatch; [electron/daily-price.test.cjs:164](<../../../../../electron/daily-price.test.cjs#L164>)
- service.get — signature-only-candidate; [electron/daily-price.test.cjs:165](<../../../../../electron/daily-price.test.cjs#L165>)
- service.get — signature-only-candidate; [electron/daily-price.test.cjs:166](<../../../../../electron/daily-price.test.cjs#L166>)
- assert.equal — external-or-dynamic-dispatch; [electron/daily-price.test.cjs:168](<../../../../../electron/daily-price.test.cjs#L168>)
- assert.equal — external-or-dynamic-dispatch; [electron/daily-price.test.cjs:169](<../../../../../electron/daily-price.test.cjs#L169>)
- assert.equal — external-or-dynamic-dispatch; [electron/daily-price.test.cjs:170](<../../../../../electron/daily-price.test.cjs#L170>)
- 18 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-73e6fc1f1c9fb025"></a>

## &lt;anonymous@155:83&gt;.&lt;anonymous@156:22&gt;.clock

[electron/daily-price.test.cjs:159](<../../../../../electron/daily-price.test.cjs#L159>) · ArrowFunction · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@155:83&gt;.&lt;anonymous@156:22&gt;](<daily-price.test.cjs.md#s-a20736db4266bbaa>).

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

<a id="s-86b765e00fc7aa8a"></a>

## &lt;anonymous@155:83&gt;.&lt;anonymous@156:22&gt;.clock

[electron/daily-price.test.cjs:162](<../../../../../electron/daily-price.test.cjs#L162>) · ArrowFunction · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@155:83&gt;.&lt;anonymous@156:22&gt;](<daily-price.test.cjs.md#s-a20736db4266bbaa>).

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

<a id="s-644e2ffc9761dc21"></a>

## &lt;anonymous@155:83&gt;.&lt;anonymous@156:22&gt;.clock

[electron/daily-price.test.cjs:173](<../../../../../electron/daily-price.test.cjs#L173>) · ArrowFunction · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@155:83&gt;.&lt;anonymous@156:22&gt;](<daily-price.test.cjs.md#s-a20736db4266bbaa>).

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

<a id="s-73612e4be4e07c44"></a>

## &lt;anonymous@155:83&gt;.&lt;anonymous@156:22&gt;.unavailable

[electron/daily-price.test.cjs:174](<../../../../../electron/daily-price.test.cjs#L174>) · FunctionExpression · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@155:83&gt;.&lt;anonymous@156:22&gt;](<daily-price.test.cjs.md#s-a20736db4266bbaa>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- Error — external-or-dynamic-dispatch; [electron/daily-price.test.cjs:175](<../../../../../electron/daily-price.test.cjs#L175>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-342d7842078748d9"></a>

## &lt;anonymous@155:83&gt;.&lt;anonymous@156:22&gt;.clock

[electron/daily-price.test.cjs:195](<../../../../../electron/daily-price.test.cjs#L195>) · ArrowFunction · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@155:83&gt;.&lt;anonymous@156:22&gt;](<daily-price.test.cjs.md#s-a20736db4266bbaa>).

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

<a id="s-f22f94178f24ae79"></a>

## &lt;anonymous@203:71&gt;

[electron/daily-price.test.cjs:203](<../../../../../electron/daily-price.test.cjs#L203>) · ArrowFunction · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/daily-price.test.cjs](<daily-price.test.cjs.md#s-8e111220cb14cd36>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [withUniverse](<daily-price.test.cjs.md#s-f8fc4cd00eb7ba7d>) — [electron/daily-price.test.cjs:204](<../../../../../electron/daily-price.test.cjs#L204>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-6ee60d633344ad90"></a>

## &lt;anonymous@203:71&gt;.&lt;anonymous@204:22&gt;

[electron/daily-price.test.cjs:204](<../../../../../electron/daily-price.test.cjs#L204>) · ArrowFunction · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@203:71&gt;](<daily-price.test.cjs.md#s-f22f94178f24ae79>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [saveKnowledgeIndex](<domains/knowledge/knowledge-store.cjs.md#s-23c92923d2d74292>) — [electron/daily-price.test.cjs:205](<../../../../../electron/daily-price.test.cjs#L205>)
- [savePriceSymbol](<domains/knowledge/knowledge-store.cjs.md#s-7f44c4c9083f4688>) — [electron/daily-price.test.cjs:212](<../../../../../electron/daily-price.test.cjs#L212>)
- [readKnowledgeIndex](<domains/knowledge/knowledge-store.cjs.md#s-c0c55e94f399d0ad>) — [electron/daily-price.test.cjs:222](<../../../../../electron/daily-price.test.cjs#L222>)
- [savePriceSymbol](<domains/knowledge/knowledge-store.cjs.md#s-7f44c4c9083f4688>) — [electron/daily-price.test.cjs:226](<../../../../../electron/daily-price.test.cjs#L226>)
- [savePriceSymbol](<domains/knowledge/knowledge-store.cjs.md#s-7f44c4c9083f4688>) — [electron/daily-price.test.cjs:229](<../../../../../electron/daily-price.test.cjs#L229>)
- [savePriceSymbol](<domains/knowledge/knowledge-store.cjs.md#s-7f44c4c9083f4688>) — [electron/daily-price.test.cjs:230](<../../../../../electron/daily-price.test.cjs#L230>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 8.

- assert.equal — external-or-dynamic-dispatch; [electron/daily-price.test.cjs:218](<../../../../../electron/daily-price.test.cjs#L218>)
- assert.equal — external-or-dynamic-dispatch; [electron/daily-price.test.cjs:219](<../../../../../electron/daily-price.test.cjs#L219>)
- assert.equal — external-or-dynamic-dispatch; [electron/daily-price.test.cjs:220](<../../../../../electron/daily-price.test.cjs#L220>)
- assert.equal — external-or-dynamic-dispatch; [electron/daily-price.test.cjs:221](<../../../../../electron/daily-price.test.cjs#L221>)
- assert.rejects — external-or-dynamic-dispatch; [electron/daily-price.test.cjs:225](<../../../../../electron/daily-price.test.cjs#L225>)
- assert.rejects — external-or-dynamic-dispatch; [electron/daily-price.test.cjs:229](<../../../../../electron/daily-price.test.cjs#L229>)
- assert.equal — external-or-dynamic-dispatch; [electron/daily-price.test.cjs:231](<../../../../../electron/daily-price.test.cjs#L231>)
- assert.equal — external-or-dynamic-dispatch; [electron/daily-price.test.cjs:232](<../../../../../electron/daily-price.test.cjs#L232>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-a0adfe65189d60f6"></a>

## &lt;anonymous@237:62&gt;

[electron/daily-price.test.cjs:237](<../../../../../electron/daily-price.test.cjs#L237>) · ArrowFunction · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/daily-price.test.cjs](<daily-price.test.cjs.md#s-8e111220cb14cd36>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [parseKnowledgeIndex](<domains/indexing/knowledge-index.cjs.md#s-e76591326346a1da>) — [electron/daily-price.test.cjs:238](<../../../../../electron/daily-price.test.cjs#L238>)
- [parseKnowledgeIndex](<domains/indexing/knowledge-index.cjs.md#s-e76591326346a1da>) — [electron/daily-price.test.cjs:249](<../../../../../electron/daily-price.test.cjs#L249>)
- [parseKnowledgeIndex](<domains/indexing/knowledge-index.cjs.md#s-e76591326346a1da>) — [electron/daily-price.test.cjs:261](<../../../../../electron/daily-price.test.cjs#L261>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 7.

- assert.deepEqual — external-or-dynamic-dispatch; [electron/daily-price.test.cjs:241](<../../../../../electron/daily-price.test.cjs#L241>)
- assert.deepEqual — external-or-dynamic-dispatch; [electron/daily-price.test.cjs:242](<../../../../../electron/daily-price.test.cjs#L242>)
- assert.equal — external-or-dynamic-dispatch; [electron/daily-price.test.cjs:243](<../../../../../electron/daily-price.test.cjs#L243>)
- assert.deepEqual — external-or-dynamic-dispatch; [electron/daily-price.test.cjs:244](<../../../../../electron/daily-price.test.cjs#L244>)
- parsed.menus&#91;1&#93;.prices.map — external-or-dynamic-dispatch; [electron/daily-price.test.cjs:245](<../../../../../electron/daily-price.test.cjs#L245>)
- assert.equal — external-or-dynamic-dispatch; [electron/daily-price.test.cjs:248](<../../../../../electron/daily-price.test.cjs#L248>)
- assert.ok — external-or-dynamic-dispatch; [electron/daily-price.test.cjs:261](<../../../../../electron/daily-price.test.cjs#L261>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-57b7a1224d3b2477"></a>

## &lt;anonymous@237:62&gt;.&lt;anonymous@245:32&gt;

[electron/daily-price.test.cjs:245](<../../../../../electron/daily-price.test.cjs#L245>) · ArrowFunction · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@237:62&gt;](<daily-price.test.cjs.md#s-a0adfe65189d60f6>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| source | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-098f9a735c5dfe78"></a>

## &lt;anonymous@265:68&gt;

[electron/daily-price.test.cjs:265](<../../../../../electron/daily-price.test.cjs#L265>) · ArrowFunction · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/daily-price.test.cjs](<daily-price.test.cjs.md#s-8e111220cb14cd36>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [withUniverse](<daily-price.test.cjs.md#s-f8fc4cd00eb7ba7d>) — [electron/daily-price.test.cjs:266](<../../../../../electron/daily-price.test.cjs#L266>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-4ed15f29548b98c0"></a>

## &lt;anonymous@265:68&gt;.&lt;anonymous@266:22&gt;

[electron/daily-price.test.cjs:266](<../../../../../electron/daily-price.test.cjs#L266>) · ArrowFunction · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@265:68&gt;](<daily-price.test.cjs.md#s-098f9a735c5dfe78>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [saveKnowledgeIndex](<domains/knowledge/knowledge-store.cjs.md#s-23c92923d2d74292>) — [electron/daily-price.test.cjs:274](<../../../../../electron/daily-price.test.cjs#L274>)
- [getIndexedPrice](<daily-price-service.cjs.md#s-985657f4b0e3a350>) — [electron/daily-price.test.cjs:286](<../../../../../electron/daily-price.test.cjs#L286>)
- [getIndexedPrice](<daily-price-service.cjs.md#s-985657f4b0e3a350>) — [electron/daily-price.test.cjs:295](<../../../../../electron/daily-price.test.cjs#L295>)
- [getIndexedPrice](<daily-price-service.cjs.md#s-985657f4b0e3a350>) — [electron/daily-price.test.cjs:299](<../../../../../electron/daily-price.test.cjs#L299>)
- [getIndexedPrice](<daily-price-service.cjs.md#s-985657f4b0e3a350>) — [electron/daily-price.test.cjs:303](<../../../../../electron/daily-price.test.cjs#L303>)
- [savePriceSymbol](<domains/knowledge/knowledge-store.cjs.md#s-7f44c4c9083f4688>) — [electron/daily-price.test.cjs:311](<../../../../../electron/daily-price.test.cjs#L311>)
- [getIndexedPrice](<daily-price-service.cjs.md#s-985657f4b0e3a350>) — [electron/daily-price.test.cjs:313](<../../../../../electron/daily-price.test.cjs#L313>)
- [saveKnowledgeIndex](<domains/knowledge/knowledge-store.cjs.md#s-23c92923d2d74292>) — [electron/daily-price.test.cjs:321](<../../../../../electron/daily-price.test.cjs#L321>)
- [parseKnowledgeIndex](<domains/indexing/knowledge-index.cjs.md#s-e76591326346a1da>) — [electron/daily-price.test.cjs:328](<../../../../../electron/daily-price.test.cjs#L328>)
- [getIndexedPrice](<daily-price-service.cjs.md#s-985657f4b0e3a350>) — [electron/daily-price.test.cjs:330](<../../../../../electron/daily-price.test.cjs#L330>)
- [getIndexedPrice](<daily-price-service.cjs.md#s-985657f4b0e3a350>) — [electron/daily-price.test.cjs:345](<../../../../../electron/daily-price.test.cjs#L345>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 9.

- assert.equal — external-or-dynamic-dispatch; [electron/daily-price.test.cjs:281](<../../../../../electron/daily-price.test.cjs#L281>)
- assert.deepEqual — external-or-dynamic-dispatch; [electron/daily-price.test.cjs:285](<../../../../../electron/daily-price.test.cjs#L285>)
- assert.deepEqual — external-or-dynamic-dispatch; [electron/daily-price.test.cjs:294](<../../../../../electron/daily-price.test.cjs#L294>)
- assert.rejects — external-or-dynamic-dispatch; [electron/daily-price.test.cjs:298](<../../../../../electron/daily-price.test.cjs#L298>)
- assert.rejects — external-or-dynamic-dispatch; [electron/daily-price.test.cjs:302](<../../../../../electron/daily-price.test.cjs#L302>)
- assert.deepEqual — external-or-dynamic-dispatch; [electron/daily-price.test.cjs:312](<../../../../../electron/daily-price.test.cjs#L312>)
- assert.rejects — external-or-dynamic-dispatch; [electron/daily-price.test.cjs:329](<../../../../../electron/daily-price.test.cjs#L329>)
- assert.deepEqual — external-or-dynamic-dispatch; [electron/daily-price.test.cjs:333](<../../../../../electron/daily-price.test.cjs#L333>)
- 1 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-767229caf4b406fd"></a>

## &lt;anonymous@265:68&gt;.&lt;anonymous@266:22&gt;.quoted

[electron/daily-price.test.cjs:270](<../../../../../electron/daily-price.test.cjs#L270>) · FunctionExpression · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@265:68&gt;.&lt;anonymous@266:22&gt;](<daily-price.test.cjs.md#s-4ed15f29548b98c0>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| _ | any | compiler-inferred | required |
| symbol | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- calls.push — external-or-dynamic-dispatch; [electron/daily-price.test.cjs:271](<../../../../../electron/daily-price.test.cjs#L271>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-022ab36c71a36fd5"></a>

## &lt;anonymous@265:68&gt;.&lt;anonymous@266:22&gt;.removedDuringRequest

[electron/daily-price.test.cjs:334](<../../../../../electron/daily-price.test.cjs#L334>) · FunctionExpression · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@265:68&gt;.&lt;anonymous@266:22&gt;](<daily-price.test.cjs.md#s-4ed15f29548b98c0>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [saveKnowledgeIndex](<domains/knowledge/knowledge-store.cjs.md#s-23c92923d2d74292>) — [electron/daily-price.test.cjs:335](<../../../../../electron/daily-price.test.cjs#L335>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
