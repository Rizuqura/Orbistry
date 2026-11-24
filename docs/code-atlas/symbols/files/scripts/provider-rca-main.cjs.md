# scripts/provider-rca-main.cjs: symbols

[Atlas](<../../../README.md>) / [Development and acceptance tooling](<../../../modules/tooling.md>) / [scripts/provider-rca-main.cjs:1](<../../../../../scripts/provider-rca-main.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/provider-rca-main.cjs](<provider-rca-main.cjs.md#s-b21a107abae20886>) (Module)
- [&lt;anonymous@65:18&gt;](<provider-rca-main.cjs.md#s-ef72feedeb10393d>) (ArrowFunction)
- [&lt;anonymous@65:18&gt;.&lt;anonymous@66:21&gt;](<provider-rca-main.cjs.md#s-429f6629d96a0de0>) (ArrowFunction)
- [stage](<provider-rca-main.cjs.md#s-901541afb13d700c>) (ArrowFunction)
- [safeText](<provider-rca-main.cjs.md#s-b29b8d33e91adc8f>) (ArrowFunction)
- [discover](<provider-rca-main.cjs.md#s-e8bb39151ce98975>) (MethodDeclaration)
- [discover.&lt;anonymous@136:19&gt;](<provider-rca-main.cjs.md#s-1051cb8591b4f5d7>) (ArrowFunction)
- [discover.&lt;anonymous@137:16&gt;](<provider-rca-main.cjs.md#s-8092932f52d52b07>) (ArrowFunction)
- [discover.&lt;anonymous@154:19&gt;](<provider-rca-main.cjs.md#s-1385b368a12b126a>) (ArrowFunction)
- [discover.&lt;anonymous@154:19&gt;.&lt;anonymous@154:41&gt;](<provider-rca-main.cjs.md#s-863e8a230f09a180>) (ArrowFunction)
- [discover.&lt;anonymous@155:23&gt;](<provider-rca-main.cjs.md#s-7dafaced03d0f4f2>) (ArrowFunction)
- [discover.&lt;anonymous@159:23&gt;](<provider-rca-main.cjs.md#s-0bfa5b323dc31012>) (ArrowFunction)
- [discover.&lt;anonymous@162:25&gt;](<provider-rca-main.cjs.md#s-af2455cdc5cca848>) (ArrowFunction)
- [direct](<provider-rca-main.cjs.md#s-b48a92274fff0066>) (MethodDeclaration)
- [direct.&lt;anonymous@217:9&gt;](<provider-rca-main.cjs.md#s-2d081c3987fbd0ee>) (ArrowFunction)
- [direct.&lt;anonymous@217:9&gt;.&lt;anonymous@230:29&gt;](<provider-rca-main.cjs.md#s-0a79a341a24c2d5b>) (ArrowFunction)
- [direct.&lt;anonymous@217:9&gt;.&lt;anonymous@231:26&gt;](<provider-rca-main.cjs.md#s-3e67d32c235fc70d>) (ArrowFunction)
- [&lt;anonymous@281:34&gt;](<provider-rca-main.cjs.md#s-5578dcef26eed98f>) (ArrowFunction)

<a id="s-b21a107abae20886"></a>

## scripts/provider-rca-main.cjs

[scripts/provider-rca-main.cjs:1](<../../../../../scripts/provider-rca-main.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

- [selectUserDataPath](<../electron/user-data-path.cjs.md#s-9b29881ed0ce8238>) — [scripts/provider-rca-main.cjs:19](<../../../../../scripts/provider-rca-main.cjs#L19>)
- [CredentialStore.constructor](<../electron/ai/credential-store.cjs.md#s-c8610b530f19a67b>) — [scripts/provider-rca-main.cjs:51](<../../../../../scripts/provider-rca-main.cjs#L51>)
- [OpenRouterProvider.constructor](<../electron/ai/providers/openrouter-provider.cjs.md#s-e3644ae28bea5ca5>) — [scripts/provider-rca-main.cjs:53](<../../../../../scripts/provider-rca-main.cjs#L53>)
- [NvidiaProvider](<../electron/ai/providers/nvidia-provider.cjs.md#s-72fe974a679af8ae>) — [scripts/provider-rca-main.cjs:54](<../../../../../scripts/provider-rca-main.cjs#L54>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 36.

- require — module-loader; [scripts/provider-rca-main.cjs:5](<../../../../../scripts/provider-rca-main.cjs#L5>)
- require — module-loader; [scripts/provider-rca-main.cjs:6](<../../../../../scripts/provider-rca-main.cjs#L6>)
- require — module-loader; [scripts/provider-rca-main.cjs:7](<../../../../../scripts/provider-rca-main.cjs#L7>)
- require — module-loader; [scripts/provider-rca-main.cjs:8](<../../../../../scripts/provider-rca-main.cjs#L8>)
- require — module-loader; [scripts/provider-rca-main.cjs:9](<../../../../../scripts/provider-rca-main.cjs#L9>)
- require — module-loader; [scripts/provider-rca-main.cjs:12](<../../../../../scripts/provider-rca-main.cjs#L12>)
- require — module-loader; [scripts/provider-rca-main.cjs:15](<../../../../../scripts/provider-rca-main.cjs#L15>)
- require — module-loader; [scripts/provider-rca-main.cjs:16](<../../../../../scripts/provider-rca-main.cjs#L16>)
- 28 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-ef72feedeb10393d"></a>

## &lt;anonymous@65:18&gt;

[scripts/provider-rca-main.cjs:65](<../../../../../scripts/provider-rca-main.cjs#L65>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/provider-rca-main.cjs](<provider-rca-main.cjs.md#s-b21a107abae20886>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| channel | any | compiler-inferred | required |
| handler | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- register — external-or-dynamic-dispatch; [scripts/provider-rca-main.cjs:66](<../../../../../scripts/provider-rca-main.cjs#L66>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-429f6629d96a0de0"></a>

## &lt;anonymous@65:18&gt;.&lt;anonymous@66:21&gt;

[scripts/provider-rca-main.cjs:66](<../../../../../scripts/provider-rca-main.cjs#L66>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@65:18&gt;](<provider-rca-main.cjs.md#s-ef72feedeb10393d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| event | any | compiler-inferred | required |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- handler — external-or-dynamic-dispatch; [scripts/provider-rca-main.cjs:67](<../../../../../scripts/provider-rca-main.cjs#L67>)
- &#91;"nvidia", "gemini", "openrouter"&#93;.includes — external-or-dynamic-dispatch; [scripts/provider-rca-main.cjs:70](<../../../../../scripts/provider-rca-main.cjs#L70>)
- /^&#91;~A-Za-z0-9._:/-&#93;{1,200}$/.test — external-or-dynamic-dispatch; [scripts/provider-rca-main.cjs:75](<../../../../../scripts/provider-rca-main.cjs#L75>)
- handler — external-or-dynamic-dispatch; [scripts/provider-rca-main.cjs:80](<../../../../../scripts/provider-rca-main.cjs#L80>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-901541afb13d700c"></a>

## stage

[scripts/provider-rca-main.cjs:92](<../../../../../scripts/provider-rca-main.cjs#L92>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/provider-rca-main.cjs](<provider-rca-main.cjs.md#s-b21a107abae20886>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| requestId | any | compiler-inferred | required |
| name | any | compiler-inferred | required |
| status | any | compiler-inferred | required |
| started | any | compiler-inferred | required |
| metadata | {} | compiler-inferred | optional, default present |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [direct](<provider-rca-main.cjs.md#s-b48a92274fff0066>) — [scripts/provider-rca-main.cjs:191](<../../../../../scripts/provider-rca-main.cjs#L191>)
- [direct](<provider-rca-main.cjs.md#s-b48a92274fff0066>) — [scripts/provider-rca-main.cjs:195](<../../../../../scripts/provider-rca-main.cjs#L195>)
- [direct](<provider-rca-main.cjs.md#s-b48a92274fff0066>) — [scripts/provider-rca-main.cjs:196](<../../../../../scripts/provider-rca-main.cjs#L196>)
- [direct](<provider-rca-main.cjs.md#s-b48a92274fff0066>) — [scripts/provider-rca-main.cjs:197](<../../../../../scripts/provider-rca-main.cjs#L197>)
- [direct](<provider-rca-main.cjs.md#s-b48a92274fff0066>) — [scripts/provider-rca-main.cjs:201](<../../../../../scripts/provider-rca-main.cjs#L201>)
- [direct.&lt;anonymous@217:9&gt;](<provider-rca-main.cjs.md#s-2d081c3987fbd0ee>) — [scripts/provider-rca-main.cjs:219](<../../../../../scripts/provider-rca-main.cjs#L219>)
- [direct.&lt;anonymous@217:9&gt;](<provider-rca-main.cjs.md#s-2d081c3987fbd0ee>) — [scripts/provider-rca-main.cjs:247](<../../../../../scripts/provider-rca-main.cjs#L247>)
- [direct.&lt;anonymous@217:9&gt;](<provider-rca-main.cjs.md#s-2d081c3987fbd0ee>) — [scripts/provider-rca-main.cjs:250](<../../../../../scripts/provider-rca-main.cjs#L250>)
- [direct.&lt;anonymous@217:9&gt;](<provider-rca-main.cjs.md#s-2d081c3987fbd0ee>) — [scripts/provider-rca-main.cjs:257](<../../../../../scripts/provider-rca-main.cjs#L257>)
- [direct.&lt;anonymous@217:9&gt;](<provider-rca-main.cjs.md#s-2d081c3987fbd0ee>) — [scripts/provider-rca-main.cjs:258](<../../../../../scripts/provider-rca-main.cjs#L258>)
- [direct](<provider-rca-main.cjs.md#s-b48a92274fff0066>) — [scripts/provider-rca-main.cjs:270](<../../../../../scripts/provider-rca-main.cjs#L270>)
- [direct](<provider-rca-main.cjs.md#s-b48a92274fff0066>) — [scripts/provider-rca-main.cjs:276](<../../../../../scripts/provider-rca-main.cjs#L276>)

Unresolved / external call sites: 5.

- report.stages.push — external-or-dynamic-dispatch; [scripts/provider-rca-main.cjs:93](<../../../../../scripts/provider-rca-main.cjs#L93>)
- new Date().toISOString — external-or-dynamic-dispatch; [scripts/provider-rca-main.cjs:94](<../../../../../scripts/provider-rca-main.cjs#L94>)
- Date — external-or-dynamic-dispatch; [scripts/provider-rca-main.cjs:94](<../../../../../scripts/provider-rca-main.cjs#L94>)
- Math.round — external-or-dynamic-dispatch; [scripts/provider-rca-main.cjs:97](<../../../../../scripts/provider-rca-main.cjs#L97>)
- performance.now — external-or-dynamic-dispatch; [scripts/provider-rca-main.cjs:97](<../../../../../scripts/provider-rca-main.cjs#L97>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-b29b8d33e91adc8f"></a>

## safeText

[scripts/provider-rca-main.cjs:101](<../../../../../scripts/provider-rca-main.cjs#L101>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/provider-rca-main.cjs](<provider-rca-main.cjs.md#s-b21a107abae20886>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| text | any | compiler-inferred | required |

Returns: "" &#124; "ORBISTRY_OK" &#124; "ORBITAL" &#124; "&#91;nonempty diagnostic text&#93;" (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [direct.&lt;anonymous@217:9&gt;](<provider-rca-main.cjs.md#s-2d081c3987fbd0ee>) — [scripts/provider-rca-main.cjs:235](<../../../../../scripts/provider-rca-main.cjs#L235>)

Unresolved / external call sites: 2.

- text.trim — external-or-dynamic-dispatch; [scripts/provider-rca-main.cjs:102](<../../../../../scripts/provider-rca-main.cjs#L102>)
- text.trim — external-or-dynamic-dispatch; [scripts/provider-rca-main.cjs:104](<../../../../../scripts/provider-rca-main.cjs#L104>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-e8bb39151ce98975"></a>

## discover

[scripts/provider-rca-main.cjs:112](<../../../../../scripts/provider-rca-main.cjs#L112>) · MethodDeclaration · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

Read configured status and public model IDs, without inference or returning credentials.

Purpose evidence: jsdoc.

Lexical owner: [scripts/provider-rca-main.cjs](<provider-rca-main.cjs.md#s-b21a107abae20886>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [CredentialStore.status](<../electron/ai/credential-store.cjs.md#s-2729a6958f70a533>) — [scripts/provider-rca-main.cjs:114](<../../../../../scripts/provider-rca-main.cjs#L114>)
- [CredentialStore.get](<../electron/ai/credential-store.cjs.md#s-0c057213a95118a0>) — [scripts/provider-rca-main.cjs:125](<../../../../../scripts/provider-rca-main.cjs#L125>)

**Called by (statically resolved):**

- [main.&lt;anonymous@34:42&gt;](<provider-rca.cjs.md#s-7ba7ffa5bb342751>) — [scripts/provider-rca.cjs:34](<../../../../../scripts/provider-rca.cjs#L34>)

Unresolved / external call sites: 11.

- Object.entries — external-or-dynamic-dispatch; [scripts/provider-rca-main.cjs:113](<../../../../../scripts/provider-rca-main.cjs#L113>)
- provider.listModels — external-or-dynamic-dispatch; [scripts/provider-rca-main.cjs:133](<../../../../../scripts/provider-rca-main.cjs#L133>)
- models .filter((m) =&gt; /llama&#124;mistral&#124;gemma&#124;nemotron/i.test(m.name)) .map((m) =&gt; m.name) .slice — external-or-dynamic-dispatch; [scripts/provider-rca-main.cjs:135](<../../../../../scripts/provider-rca-main.cjs#L135>)
- models .filter((m) =&gt; /llama&#124;mistral&#124;gemma&#124;nemotron/i.test(m.name)) .map — external-or-dynamic-dispatch; [scripts/provider-rca-main.cjs:135](<../../../../../scripts/provider-rca-main.cjs#L135>)
- models .filter — external-or-dynamic-dispatch; [scripts/provider-rca-main.cjs:135](<../../../../../scripts/provider-rca-main.cjs#L135>)
- preferred .filter(Boolean) .find — external-or-dynamic-dispatch; [scripts/provider-rca-main.cjs:152](<../../../../../scripts/provider-rca-main.cjs#L152>)
- preferred .filter — external-or-dynamic-dispatch; [scripts/provider-rca-main.cjs:152](<../../../../../scripts/provider-rca-main.cjs#L152>)
- models.find — external-or-dynamic-dispatch; [scripts/provider-rca-main.cjs:155](<../../../../../scripts/provider-rca-main.cjs#L155>)
- 3 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-1051cb8591b4f5d7"></a>

## discover.&lt;anonymous@136:19&gt;

[scripts/provider-rca-main.cjs:136](<../../../../../scripts/provider-rca-main.cjs#L136>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [discover](<provider-rca-main.cjs.md#s-e8bb39151ce98975>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| m | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- /llama&#124;mistral&#124;gemma&#124;nemotron/i.test — external-or-dynamic-dispatch; [scripts/provider-rca-main.cjs:136](<../../../../../scripts/provider-rca-main.cjs#L136>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-8092932f52d52b07"></a>

## discover.&lt;anonymous@137:16&gt;

[scripts/provider-rca-main.cjs:137](<../../../../../scripts/provider-rca-main.cjs#L137>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [discover](<provider-rca-main.cjs.md#s-e8bb39151ce98975>).

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

<a id="s-1385b368a12b126a"></a>

## discover.&lt;anonymous@154:19&gt;

[scripts/provider-rca-main.cjs:154](<../../../../../scripts/provider-rca-main.cjs#L154>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [discover](<provider-rca-main.cjs.md#s-e8bb39151ce98975>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| name | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- models.some — external-or-dynamic-dispatch; [scripts/provider-rca-main.cjs:154](<../../../../../scripts/provider-rca-main.cjs#L154>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-863e8a230f09a180"></a>

## discover.&lt;anonymous@154:19&gt;.&lt;anonymous@154:41&gt;

[scripts/provider-rca-main.cjs:154](<../../../../../scripts/provider-rca-main.cjs#L154>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [discover.&lt;anonymous@154:19&gt;](<provider-rca-main.cjs.md#s-1385b368a12b126a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| m | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-7dafaced03d0f4f2"></a>

## discover.&lt;anonymous@155:23&gt;

[scripts/provider-rca-main.cjs:155](<../../../../../scripts/provider-rca-main.cjs#L155>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [discover](<provider-rca-main.cjs.md#s-e8bb39151ce98975>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| m | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- /llama.*(?:8b&#124;3b)&#124;mistral.*7b/i.test — external-or-dynamic-dispatch; [scripts/provider-rca-main.cjs:155](<../../../../../scripts/provider-rca-main.cjs#L155>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-0bfa5b323dc31012"></a>

## discover.&lt;anonymous@159:23&gt;

[scripts/provider-rca-main.cjs:159](<../../../../../scripts/provider-rca-main.cjs#L159>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [discover](<provider-rca-main.cjs.md#s-e8bb39151ce98975>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| m | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-af2455cdc5cca848"></a>

## discover.&lt;anonymous@162:25&gt;

[scripts/provider-rca-main.cjs:162](<../../../../../scripts/provider-rca-main.cjs#L162>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [discover](<provider-rca-main.cjs.md#s-e8bb39151ce98975>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| m | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-b48a92274fff0066"></a>

## direct

[scripts/provider-rca-main.cjs:171](<../../../../../scripts/provider-rca-main.cjs#L171>) · MethodDeclaration · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

Raw native non-streaming call: bypasses adapter.complete, router, context and agent runtime.

Purpose evidence: jsdoc.

Lexical owner: [scripts/provider-rca-main.cjs](<provider-rca-main.cjs.md#s-b21a107abae20886>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| providerId | any | compiler-inferred | required |
| model | any | compiler-inferred | required |
| outputLimit | number | compiler-inferred | optional, default present |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [stage](<provider-rca-main.cjs.md#s-901541afb13d700c>) — [scripts/provider-rca-main.cjs:191](<../../../../../scripts/provider-rca-main.cjs#L191>)
- [stage](<provider-rca-main.cjs.md#s-901541afb13d700c>) — [scripts/provider-rca-main.cjs:195](<../../../../../scripts/provider-rca-main.cjs#L195>)
- [stage](<provider-rca-main.cjs.md#s-901541afb13d700c>) — [scripts/provider-rca-main.cjs:196](<../../../../../scripts/provider-rca-main.cjs#L196>)
- [stage](<provider-rca-main.cjs.md#s-901541afb13d700c>) — [scripts/provider-rca-main.cjs:197](<../../../../../scripts/provider-rca-main.cjs#L197>)
- [stage](<provider-rca-main.cjs.md#s-901541afb13d700c>) — [scripts/provider-rca-main.cjs:201](<../../../../../scripts/provider-rca-main.cjs#L201>)
- [stage](<provider-rca-main.cjs.md#s-901541afb13d700c>) — [scripts/provider-rca-main.cjs:270](<../../../../../scripts/provider-rca-main.cjs#L270>)
- [stage](<provider-rca-main.cjs.md#s-901541afb13d700c>) — [scripts/provider-rca-main.cjs:276](<../../../../../scripts/provider-rca-main.cjs#L276>)

**Called by (statically resolved):**

- [main.&lt;anonymous@41:13&gt;](<provider-rca.cjs.md#s-360d298ef138d553>) — [scripts/provider-rca.cjs:42](<../../../../../scripts/provider-rca.cjs#L42>)
- [main.&lt;anonymous@354:11&gt;](<provider-rca.cjs.md#s-d46616059638cb3e>) — [scripts/provider-rca.cjs:354](<../../../../../scripts/provider-rca.cjs#L354>)
- [main.&lt;anonymous@366:34&gt;](<provider-rca.cjs.md#s-d2a72a9260e7ed23>) — [scripts/provider-rca.cjs:367](<../../../../../scripts/provider-rca.cjs#L367>)

Unresolved / external call sites: 7.

- crypto.randomUUID — external-or-dynamic-dispatch; [scripts/provider-rca-main.cjs:172](<../../../../../scripts/provider-rca-main.cjs#L172>)
- performance.now — external-or-dynamic-dispatch; [scripts/provider-rca-main.cjs:173](<../../../../../scripts/provider-rca-main.cjs#L173>)
- providers&#91;providerId&#93;.request — external-or-dynamic-dispatch; [scripts/provider-rca-main.cjs:203](<../../../../../scripts/provider-rca-main.cjs#L203>)
- JSON.stringify — external-or-dynamic-dispatch; [scripts/provider-rca-main.cjs:207](<../../../../../scripts/provider-rca-main.cjs#L207>)
- Math.round — external-or-dynamic-dispatch; [scripts/provider-rca-main.cjs:275](<../../../../../scripts/provider-rca-main.cjs#L275>)
- performance.now — external-or-dynamic-dispatch; [scripts/provider-rca-main.cjs:275](<../../../../../scripts/provider-rca-main.cjs#L275>)
- report.requests.push — external-or-dynamic-dispatch; [scripts/provider-rca-main.cjs:277](<../../../../../scripts/provider-rca-main.cjs#L277>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-2d081c3987fbd0ee"></a>

## direct.&lt;anonymous@217:9&gt;

[scripts/provider-rca-main.cjs:217](<../../../../../scripts/provider-rca-main.cjs#L217>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [direct](<provider-rca-main.cjs.md#s-b48a92274fff0066>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| response | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [stage](<provider-rca-main.cjs.md#s-901541afb13d700c>) — [scripts/provider-rca-main.cjs:219](<../../../../../scripts/provider-rca-main.cjs#L219>)
- [safeText](<provider-rca-main.cjs.md#s-b29b8d33e91adc8f>) — [scripts/provider-rca-main.cjs:235](<../../../../../scripts/provider-rca-main.cjs#L235>)
- [stage](<provider-rca-main.cjs.md#s-901541afb13d700c>) — [scripts/provider-rca-main.cjs:247](<../../../../../scripts/provider-rca-main.cjs#L247>)
- [stage](<provider-rca-main.cjs.md#s-901541afb13d700c>) — [scripts/provider-rca-main.cjs:250](<../../../../../scripts/provider-rca-main.cjs#L250>)
- [stage](<provider-rca-main.cjs.md#s-901541afb13d700c>) — [scripts/provider-rca-main.cjs:257](<../../../../../scripts/provider-rca-main.cjs#L257>)
- [stage](<provider-rca-main.cjs.md#s-901541afb13d700c>) — [scripts/provider-rca-main.cjs:258](<../../../../../scripts/provider-rca-main.cjs#L258>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 7.

- response.json — external-or-dynamic-dispatch; [scripts/provider-rca-main.cjs:222](<../../../../../scripts/provider-rca-main.cjs#L222>)
- Array.isArray — external-or-dynamic-dispatch; [scripts/provider-rca-main.cjs:228](<../../../../../scripts/provider-rca-main.cjs#L228>)
- content .filter((p) =&gt; p.type === "text") .map((p) =&gt; p.text ?? "") .join — external-or-dynamic-dispatch; [scripts/provider-rca-main.cjs:229](<../../../../../scripts/provider-rca-main.cjs#L229>)
- content .filter((p) =&gt; p.type === "text") .map — external-or-dynamic-dispatch; [scripts/provider-rca-main.cjs:229](<../../../../../scripts/provider-rca-main.cjs#L229>)
- content .filter — external-or-dynamic-dispatch; [scripts/provider-rca-main.cjs:229](<../../../../../scripts/provider-rca-main.cjs#L229>)
- Boolean — external-or-dynamic-dispatch; [scripts/provider-rca-main.cjs:236](<../../../../../scripts/provider-rca-main.cjs#L236>)
- text.trim — external-or-dynamic-dispatch; [scripts/provider-rca-main.cjs:256](<../../../../../scripts/provider-rca-main.cjs#L256>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-0a79a341a24c2d5b"></a>

## direct.&lt;anonymous@217:9&gt;.&lt;anonymous@230:29&gt;

[scripts/provider-rca-main.cjs:230](<../../../../../scripts/provider-rca-main.cjs#L230>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [direct.&lt;anonymous@217:9&gt;](<provider-rca-main.cjs.md#s-2d081c3987fbd0ee>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| p | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-3e67d32c235fc70d"></a>

## direct.&lt;anonymous@217:9&gt;.&lt;anonymous@231:26&gt;

[scripts/provider-rca-main.cjs:231](<../../../../../scripts/provider-rca-main.cjs#L231>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [direct.&lt;anonymous@217:9&gt;](<provider-rca-main.cjs.md#s-2d081c3987fbd0ee>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| p | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-5578dcef26eed98f"></a>

## &lt;anonymous@281:34&gt;

[scripts/provider-rca-main.cjs:281](<../../../../../scripts/provider-rca-main.cjs#L281>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/provider-rca-main.cjs](<provider-rca-main.cjs.md#s-b21a107abae20886>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| _ | any | compiler-inferred | required |
| window | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- window.webContents.setBackgroundThrottling — external-or-dynamic-dispatch; [scripts/provider-rca-main.cjs:282](<../../../../../scripts/provider-rca-main.cjs#L282>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
