# scripts/runtime-kernel-report.cjs: symbols

[Atlas](<../../../README.md>) / [Development and acceptance tooling](<../../../modules/tooling.md>) / [scripts/runtime-kernel-report.cjs:1](<../../../../../scripts/runtime-kernel-report.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/runtime-kernel-report.cjs](<runtime-kernel-report.cjs.md#s-3d0cefdaade1ef07>) (Module)
- [source](<runtime-kernel-report.cjs.md#s-f63d5fbefc33c0a4>) (ArrowFunction)
- [report](<runtime-kernel-report.cjs.md#s-28840994cf6df92e>) (FunctionDeclaration)
- [report.&lt;anonymous@70:31&gt;](<runtime-kernel-report.cjs.md#s-5f9992a00a349768>) (ArrowFunction)
- [report.&lt;anonymous@70:31&gt;.&lt;anonymous@73:52&gt;](<runtime-kernel-report.cjs.md#s-086dedbcb9bbe245>) (ArrowFunction)
- [report.&lt;anonymous@70:31&gt;.&lt;anonymous@82:28&gt;](<runtime-kernel-report.cjs.md#s-d5b6d4b92f299232>) (ArrowFunction)
- [report.&lt;anonymous@70:31&gt;.&lt;anonymous@102:48&gt;](<runtime-kernel-report.cjs.md#s-6c2219d24ddb4a99>) (ArrowFunction)
- [&lt;anonymous@125:16&gt;](<runtime-kernel-report.cjs.md#s-ca516499695310a0>) (ArrowFunction)

<a id="s-3d0cefdaade1ef07"></a>

## scripts/runtime-kernel-report.cjs

[scripts/runtime-kernel-report.cjs:1](<../../../../../scripts/runtime-kernel-report.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

- [report](<runtime-kernel-report.cjs.md#s-28840994cf6df92e>) — [scripts/runtime-kernel-report.cjs:125](<../../../../../scripts/runtime-kernel-report.cjs#L125>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 7.

- require — module-loader; [scripts/runtime-kernel-report.cjs:1](<../../../../../scripts/runtime-kernel-report.cjs#L1>)
- require — module-loader; [scripts/runtime-kernel-report.cjs:2](<../../../../../scripts/runtime-kernel-report.cjs#L2>)
- require — module-loader; [scripts/runtime-kernel-report.cjs:3](<../../../../../scripts/runtime-kernel-report.cjs#L3>)
- require — module-loader; [scripts/runtime-kernel-report.cjs:6](<../../../../../scripts/runtime-kernel-report.cjs#L6>)
- require — module-loader; [scripts/runtime-kernel-report.cjs:11](<../../../../../scripts/runtime-kernel-report.cjs#L11>)
- require — module-loader; [scripts/runtime-kernel-report.cjs:12](<../../../../../scripts/runtime-kernel-report.cjs#L12>)
- report().catch — external-or-dynamic-dispatch; [scripts/runtime-kernel-report.cjs:125](<../../../../../scripts/runtime-kernel-report.cjs#L125>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-f63d5fbefc33c0a4"></a>

## source

[scripts/runtime-kernel-report.cjs:13](<../../../../../scripts/runtime-kernel-report.cjs#L13>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/runtime-kernel-report.cjs](<runtime-kernel-report.cjs.md#s-3d0cefdaade1ef07>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| id | any | compiler-inferred | required |
| content | any | compiler-inferred | required |
| type | string | compiler-inferred | optional, default present |

Returns: { sourceId: any; relativePath: any; type: string; content: any; contentHash: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [report](<runtime-kernel-report.cjs.md#s-28840994cf6df92e>) — [scripts/runtime-kernel-report.cjs:30](<../../../../../scripts/runtime-kernel-report.cjs#L30>)
- [report](<runtime-kernel-report.cjs.md#s-28840994cf6df92e>) — [scripts/runtime-kernel-report.cjs:34](<../../../../../scripts/runtime-kernel-report.cjs#L34>)
- [report](<runtime-kernel-report.cjs.md#s-28840994cf6df92e>) — [scripts/runtime-kernel-report.cjs:45](<../../../../../scripts/runtime-kernel-report.cjs#L45>)

Unresolved / external call sites: 3.

- createHash("sha256").update(content).digest — external-or-dynamic-dispatch; [scripts/runtime-kernel-report.cjs:18](<../../../../../scripts/runtime-kernel-report.cjs#L18>)
- createHash("sha256").update — external-or-dynamic-dispatch; [scripts/runtime-kernel-report.cjs:18](<../../../../../scripts/runtime-kernel-report.cjs#L18>)
- createHash — external-or-dynamic-dispatch; [scripts/runtime-kernel-report.cjs:18](<../../../../../scripts/runtime-kernel-report.cjs#L18>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-28840994cf6df92e"></a>

## report

[scripts/runtime-kernel-report.cjs:20](<../../../../../scripts/runtime-kernel-report.cjs#L20>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/runtime-kernel-report.cjs](<runtime-kernel-report.cjs.md#s-3d0cefdaade1ef07>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [source](<runtime-kernel-report.cjs.md#s-f63d5fbefc33c0a4>) — [scripts/runtime-kernel-report.cjs:30](<../../../../../scripts/runtime-kernel-report.cjs#L30>)
- [source](<runtime-kernel-report.cjs.md#s-f63d5fbefc33c0a4>) — [scripts/runtime-kernel-report.cjs:34](<../../../../../scripts/runtime-kernel-report.cjs#L34>)
- [source](<runtime-kernel-report.cjs.md#s-f63d5fbefc33c0a4>) — [scripts/runtime-kernel-report.cjs:45](<../../../../../scripts/runtime-kernel-report.cjs#L45>)

**Called by (statically resolved):**

- [scripts/runtime-kernel-report.cjs](<runtime-kernel-report.cjs.md#s-3d0cefdaade1ef07>) — [scripts/runtime-kernel-report.cjs:125](<../../../../../scripts/runtime-kernel-report.cjs#L125>)

Unresolved / external call sites: 12.

- ( await fs.readFile( path.join( __dirname, "../electron/ai/policies/orbistry-host-policy-v19.md", ), "utf8", ) ).trimEnd — external-or-dynamic-dispatch; [scripts/runtime-kernel-report.cjs:21](<../../../../../scripts/runtime-kernel-report.cjs#L21>)
- fs.readFile — external-or-dynamic-dispatch; [scripts/runtime-kernel-report.cjs:22](<../../../../../scripts/runtime-kernel-report.cjs#L22>)
- path.join — external-or-dynamic-dispatch; [scripts/runtime-kernel-report.cjs:23](<../../../../../scripts/runtime-kernel-report.cjs#L23>)
- JSON.stringify — external-or-dynamic-dispatch; [scripts/runtime-kernel-report.cjs:47](<../../../../../scripts/runtime-kernel-report.cjs#L47>)
- cases.map — external-or-dynamic-dispatch; [scripts/runtime-kernel-report.cjs:70](<../../../../../scripts/runtime-kernel-report.cjs#L70>)
- Number — external-or-dynamic-dispatch; [scripts/runtime-kernel-report.cjs:111](<../../../../../scripts/runtime-kernel-report.cjs#L111>)
- ((1 - RUNTIME_KERNEL.length / legacy.length) * 100).toFixed — external-or-dynamic-dispatch; [scripts/runtime-kernel-report.cjs:112](<../../../../../scripts/runtime-kernel-report.cjs#L112>)
- fs.mkdir — external-or-dynamic-dispatch; [scripts/runtime-kernel-report.cjs:118](<../../../../../scripts/runtime-kernel-report.cjs#L118>)
- 4 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-5f9992a00a349768"></a>

## report.&lt;anonymous@70:31&gt;

[scripts/runtime-kernel-report.cjs:70](<../../../../../scripts/runtime-kernel-report.cjs#L70>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [report](<runtime-kernel-report.cjs.md#s-28840994cf6df92e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: { name: any; beforeEstimatedInputTokens: any; afterEstimatedInputTokens: any; estimatedReductionPercent: any; modules: any; evidenceSourceIds: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [buildContextMessages](<../electron/ai/inference/prompt-builder.cjs.md#s-241c37ad734d8bcd>) — [scripts/runtime-kernel-report.cjs:92](<../../../../../scripts/runtime-kernel-report.cjs#L92>)
- [estimateTokens](<../electron/shared/token-budget.cjs.md#s-81eabfdb3a44d606>) — [scripts/runtime-kernel-report.cjs:93](<../../../../../scripts/runtime-kernel-report.cjs#L93>)
- [estimateTokens](<../electron/shared/token-budget.cjs.md#s-81eabfdb3a44d606>) — [scripts/runtime-kernel-report.cjs:94](<../../../../../scripts/runtime-kernel-report.cjs#L94>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- (input.configurationReferences ?? &#91;&#93;).map — external-or-dynamic-dispatch; [scripts/runtime-kernel-report.cjs:73](<../../../../../scripts/runtime-kernel-report.cjs#L73>)
- input.sources.map — external-or-dynamic-dispatch; [scripts/runtime-kernel-report.cjs:82](<../../../../../scripts/runtime-kernel-report.cjs#L82>)
- Number — external-or-dynamic-dispatch; [scripts/runtime-kernel-report.cjs:99](<../../../../../scripts/runtime-kernel-report.cjs#L99>)
- ((1 - afterTokens / beforeTokens) * 100).toFixed — external-or-dynamic-dispatch; [scripts/runtime-kernel-report.cjs:100](<../../../../../scripts/runtime-kernel-report.cjs#L100>)
- after.runtimePolicy.modules.map — external-or-dynamic-dispatch; [scripts/runtime-kernel-report.cjs:102](<../../../../../scripts/runtime-kernel-report.cjs#L102>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-086dedbcb9bbe245"></a>

## report.&lt;anonymous@70:31&gt;.&lt;anonymous@73:52&gt;

[scripts/runtime-kernel-report.cjs:73](<../../../../../scripts/runtime-kernel-report.cjs#L73>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [report.&lt;anonymous@70:31&gt;](<runtime-kernel-report.cjs.md#s-5f9992a00a349768>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| reference | any | compiler-inferred | required |

Returns: { role: string; content: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- JSON.stringify — external-or-dynamic-dispatch; [scripts/runtime-kernel-report.cjs:75](<../../../../../scripts/runtime-kernel-report.cjs#L75>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d5b6d4b92f299232"></a>

## report.&lt;anonymous@70:31&gt;.&lt;anonymous@82:28&gt;

[scripts/runtime-kernel-report.cjs:82](<../../../../../scripts/runtime-kernel-report.cjs#L82>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [report.&lt;anonymous@70:31&gt;](<runtime-kernel-report.cjs.md#s-5f9992a00a349768>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| s | any | compiler-inferred | required |

Returns: { role: string; content: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- JSON.stringify — external-or-dynamic-dispatch; [scripts/runtime-kernel-report.cjs:84](<../../../../../scripts/runtime-kernel-report.cjs#L84>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-6c2219d24ddb4a99"></a>

## report.&lt;anonymous@70:31&gt;.&lt;anonymous@102:48&gt;

[scripts/runtime-kernel-report.cjs:102](<../../../../../scripts/runtime-kernel-report.cjs#L102>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [report.&lt;anonymous@70:31&gt;](<runtime-kernel-report.cjs.md#s-5f9992a00a349768>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| m | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-ca516499695310a0"></a>

## &lt;anonymous@125:16&gt;

[scripts/runtime-kernel-report.cjs:125](<../../../../../scripts/runtime-kernel-report.cjs#L125>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/runtime-kernel-report.cjs](<runtime-kernel-report.cjs.md#s-3d0cefdaade1ef07>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| error | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- console.error — external-or-dynamic-dispatch; [scripts/runtime-kernel-report.cjs:126](<../../../../../scripts/runtime-kernel-report.cjs#L126>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
