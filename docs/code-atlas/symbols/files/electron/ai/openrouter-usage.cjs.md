# electron/ai/openrouter-usage.cjs: symbols

[Atlas](<../../../../README.md>) / [Retained AI runtime](<../../../../modules/ai-runtime.md>) / [electron/ai/openrouter-usage.cjs:1](<../../../../../../electron/ai/openrouter-usage.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/openrouter-usage.cjs](<openrouter-usage.cjs.md#s-340137a80b097884>) (Module)
- [blank](<openrouter-usage.cjs.md#s-deed3178dcebd830>) (ArrowFunction)
- [amount](<openrouter-usage.cjs.md#s-a1a87ace44885c46>) (ArrowFunction)
- [amount.&lt;anonymous@24:10&gt;](<openrouter-usage.cjs.md#s-0b2a2021412ec59a>) (ArrowFunction)
- [nextReset](<openrouter-usage.cjs.md#s-71d33e45b727cc76>) (FunctionDeclaration)
- [normalize](<openrouter-usage.cjs.md#s-f0dfce05c1990cc4>) (FunctionDeclaration)
- [identity](<openrouter-usage.cjs.md#s-f8d2acbd0c0a7c47>) (ArrowFunction)
- [OpenRouterUsageService](<openrouter-usage.cjs.md#s-3bb5c133664fe2bc>) (ClassDeclaration)
- [OpenRouterUsageService.constructor](<openrouter-usage.cjs.md#s-ca4b5e760b8e3c1f>) (Constructor)
- [OpenRouterUsageService.invalidate](<openrouter-usage.cjs.md#s-0a764503da78517c>) (MethodDeclaration)
- [OpenRouterUsageService.record](<openrouter-usage.cjs.md#s-d783ccb079e6697c>) (MethodDeclaration)
- [OpenRouterUsageService.withTokens](<openrouter-usage.cjs.md#s-e1de49534fe3b1aa>) (MethodDeclaration)
- [OpenRouterUsageService.get](<openrouter-usage.cjs.md#s-1134b7f0963903a0>) (MethodDeclaration)
- [OpenRouterUsageService.get.&lt;anonymous@176:71&gt;](<openrouter-usage.cjs.md#s-581c9267e7070320>) (ArrowFunction)
- [OpenRouterUsageService.fetchSnapshot](<openrouter-usage.cjs.md#s-0d339a7d4b92bd32>) (MethodDeclaration)
- [OpenRouterUsageService.fetchSnapshot.&lt;anonymous@184:30&gt;](<openrouter-usage.cjs.md#s-49eb6a977a007cb1>) (ArrowFunction)
- [OpenRouterUsageService.fetchSnapshot.&lt;anonymous@263:44&gt;](<openrouter-usage.cjs.md#s-5a9f6d8af34677d9>) (ArrowFunction)

<a id="s-340137a80b097884"></a>

## electron/ai/openrouter-usage.cjs

[electron/ai/openrouter-usage.cjs:1](<../../../../../../electron/ai/openrouter-usage.cjs#L1>) · Module · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- require — module-loader; [electron/ai/openrouter-usage.cjs:1](<../../../../../../electron/ai/openrouter-usage.cjs#L1>)

**Related tests / acceptance harnesses:**

- [electron/ai/openrouter-usage.test.cjs:3](<../../../../../../electron/ai/openrouter-usage.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-deed3178dcebd830"></a>

## blank

[electron/ai/openrouter-usage.cjs:3](<../../../../../../electron/ai/openrouter-usage.cjs#L3>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: blank ([electron/ai/openrouter-usage.cjs:1](<../../../../../../electron/ai/openrouter-usage.cjs#L1>)).

Lexical owner: [electron/ai/openrouter-usage.cjs](<openrouter-usage.cjs.md#s-340137a80b097884>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| status | string | compiler-inferred | optional, default present |

Returns: { status: string; provider: string; safeKeyAlias: any; limitUsd: any; remainingUsd: any; usedUsdThisPeriod: any; resetCadence: string; resetAt: any; accountCreditsRemainingUsd: any; inputTokens: any; outputTokens: any; tokenMeasurementScope: any; dataSource: string; fetchedAt: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [normalize](<openrouter-usage.cjs.md#s-f0dfce05c1990cc4>) — [electron/ai/openrouter-usage.cjs:63](<../../../../../../electron/ai/openrouter-usage.cjs#L63>)
- [OpenRouterUsageService.get](<openrouter-usage.cjs.md#s-1134b7f0963903a0>) — [electron/ai/openrouter-usage.cjs:146](<../../../../../../electron/ai/openrouter-usage.cjs#L146>)
- [OpenRouterUsageService.get](<openrouter-usage.cjs.md#s-1134b7f0963903a0>) — [electron/ai/openrouter-usage.cjs:154](<../../../../../../electron/ai/openrouter-usage.cjs#L154>)
- [OpenRouterUsageService.fetchSnapshot](<openrouter-usage.cjs.md#s-0d339a7d4b92bd32>) — [electron/ai/openrouter-usage.cjs:214](<../../../../../../electron/ai/openrouter-usage.cjs#L214>)
- [OpenRouterUsageService.fetchSnapshot](<openrouter-usage.cjs.md#s-0d339a7d4b92bd32>) — [electron/ai/openrouter-usage.cjs:220](<../../../../../../electron/ai/openrouter-usage.cjs#L220>)
- [OpenRouterUsageService.fetchSnapshot](<openrouter-usage.cjs.md#s-0d339a7d4b92bd32>) — [electron/ai/openrouter-usage.cjs:247](<../../../../../../electron/ai/openrouter-usage.cjs#L247>)
- [ProviderUsageService.get](<provider-usage.cjs.md#s-b3bdf66ecb1c6a64>) — [electron/ai/provider-usage.cjs:99](<../../../../../../electron/ai/provider-usage.cjs#L99>)
- [ProviderUsageService.get](<provider-usage.cjs.md#s-b3bdf66ecb1c6a64>) — [electron/ai/provider-usage.cjs:139](<../../../../../../electron/ai/provider-usage.cjs#L139>)
- [ProviderUsageService.legacyGet](<provider-usage.cjs.md#s-906aad26021a121e>) — [electron/ai/provider-usage.cjs:163](<../../../../../../electron/ai/provider-usage.cjs#L163>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/openrouter-usage.test.cjs:3](<../../../../../../electron/ai/openrouter-usage.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-a1a87ace44885c46"></a>

## amount

[electron/ai/openrouter-usage.cjs:19](<../../../../../../electron/ai/openrouter-usage.cjs#L19>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/openrouter-usage.cjs](<openrouter-usage.cjs.md#s-340137a80b097884>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: number (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [amount.&lt;anonymous@24:10&gt;](<openrouter-usage.cjs.md#s-0b2a2021412ec59a>) — [electron/ai/openrouter-usage.cjs:24](<../../../../../../electron/ai/openrouter-usage.cjs#L24>)

**Called by (statically resolved):**

- [normalize](<openrouter-usage.cjs.md#s-f0dfce05c1990cc4>) — [electron/ai/openrouter-usage.cjs:51](<../../../../../../electron/ai/openrouter-usage.cjs#L51>)
- [normalize](<openrouter-usage.cjs.md#s-f0dfce05c1990cc4>) — [electron/ai/openrouter-usage.cjs:52](<../../../../../../electron/ai/openrouter-usage.cjs#L52>)
- [normalize](<openrouter-usage.cjs.md#s-f0dfce05c1990cc4>) — [electron/ai/openrouter-usage.cjs:67](<../../../../../../electron/ai/openrouter-usage.cjs#L67>)

Unresolved / external call sites: 1.

- Number.isFinite — external-or-dynamic-dispatch; [electron/ai/openrouter-usage.cjs:22](<../../../../../../electron/ai/openrouter-usage.cjs#L22>)

**Related tests / acceptance harnesses:**

- [electron/ai/openrouter-usage.test.cjs:3](<../../../../../../electron/ai/openrouter-usage.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-0b2a2021412ec59a"></a>

## amount.&lt;anonymous@24:10&gt;

[electron/ai/openrouter-usage.cjs:24](<../../../../../../electron/ai/openrouter-usage.cjs#L24>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [amount](<openrouter-usage.cjs.md#s-a1a87ace44885c46>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: never (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [amount](<openrouter-usage.cjs.md#s-a1a87ace44885c46>) — [electron/ai/openrouter-usage.cjs:24](<../../../../../../electron/ai/openrouter-usage.cjs#L24>)

Unresolved / external call sites: 1.

- Error — external-or-dynamic-dispatch; [electron/ai/openrouter-usage.cjs:25](<../../../../../../electron/ai/openrouter-usage.cjs#L25>)

**Related tests / acceptance harnesses:**

- [electron/ai/openrouter-usage.test.cjs:3](<../../../../../../electron/ai/openrouter-usage.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-71d33e45b727cc76"></a>

## nextReset

[electron/ai/openrouter-usage.cjs:28](<../../../../../../electron/ai/openrouter-usage.cjs#L28>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/openrouter-usage.cjs](<openrouter-usage.cjs.md#s-340137a80b097884>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| cadence | any | compiler-inferred | required |
| now | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [normalize](<openrouter-usage.cjs.md#s-f0dfce05c1990cc4>) — [electron/ai/openrouter-usage.cjs:69](<../../../../../../electron/ai/openrouter-usage.cjs#L69>)

Unresolved / external call sites: 14.

- Date — external-or-dynamic-dispatch; [electron/ai/openrouter-usage.cjs:29](<../../../../../../electron/ai/openrouter-usage.cjs#L29>)
- date.getUTCFullYear — external-or-dynamic-dispatch; [electron/ai/openrouter-usage.cjs:30](<../../../../../../electron/ai/openrouter-usage.cjs#L30>)
- date.getUTCMonth — external-or-dynamic-dispatch; [electron/ai/openrouter-usage.cjs:31](<../../../../../../electron/ai/openrouter-usage.cjs#L31>)
- date.getUTCDate — external-or-dynamic-dispatch; [electron/ai/openrouter-usage.cjs:32](<../../../../../../electron/ai/openrouter-usage.cjs#L32>)
- new Date(Date.UTC(year, month, day + 1)).toISOString — external-or-dynamic-dispatch; [electron/ai/openrouter-usage.cjs:34](<../../../../../../electron/ai/openrouter-usage.cjs#L34>)
- Date — external-or-dynamic-dispatch; [electron/ai/openrouter-usage.cjs:34](<../../../../../../electron/ai/openrouter-usage.cjs#L34>)
- Date.UTC — external-or-dynamic-dispatch; [electron/ai/openrouter-usage.cjs:34](<../../../../../../electron/ai/openrouter-usage.cjs#L34>)
- new Date( Date.UTC(year, month, day + (7 - ((date.getUTCDay() + 6) % 7))), ).toISOString — external-or-dynamic-dispatch; [electron/ai/openrouter-usage.cjs:36](<../../../../../../electron/ai/openrouter-usage.cjs#L36>)
- 6 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/openrouter-usage.test.cjs:3](<../../../../../../electron/ai/openrouter-usage.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-f0dfce05c1990cc4"></a>

## normalize

[electron/ai/openrouter-usage.cjs:43](<../../../../../../electron/ai/openrouter-usage.cjs#L43>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: normalize ([electron/ai/openrouter-usage.cjs:1](<../../../../../../electron/ai/openrouter-usage.cjs#L1>)).

Lexical owner: [electron/ai/openrouter-usage.cjs](<openrouter-usage.cjs.md#s-340137a80b097884>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| data | any | compiler-inferred | required |
| alias | any | compiler-inferred | required |
| now | any | compiler-inferred | required |

Returns: { safeKeyAlias: any; limitUsd: number; remainingUsd: number; usedUsdThisPeriod: number; resetCadence: any; resetAt: any; dataSource: string; fetchedAt: any; status: string; provider: string; accountCreditsRemainingUsd: any; inputTokens: any; outputTokens: any; tokenMeasurementScope: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [amount](<openrouter-usage.cjs.md#s-a1a87ace44885c46>) — [electron/ai/openrouter-usage.cjs:51](<../../../../../../electron/ai/openrouter-usage.cjs#L51>)
- [amount](<openrouter-usage.cjs.md#s-a1a87ace44885c46>) — [electron/ai/openrouter-usage.cjs:52](<../../../../../../electron/ai/openrouter-usage.cjs#L52>)
- [blank](<openrouter-usage.cjs.md#s-deed3178dcebd830>) — [electron/ai/openrouter-usage.cjs:63](<../../../../../../electron/ai/openrouter-usage.cjs#L63>)
- [amount](<openrouter-usage.cjs.md#s-a1a87ace44885c46>) — [electron/ai/openrouter-usage.cjs:67](<../../../../../../electron/ai/openrouter-usage.cjs#L67>)
- [nextReset](<openrouter-usage.cjs.md#s-71d33e45b727cc76>) — [electron/ai/openrouter-usage.cjs:69](<../../../../../../electron/ai/openrouter-usage.cjs#L69>)

**Called by (statically resolved):**

- [OpenRouterUsageService.fetchSnapshot](<openrouter-usage.cjs.md#s-0d339a7d4b92bd32>) — [electron/ai/openrouter-usage.cjs:206](<../../../../../../electron/ai/openrouter-usage.cjs#L206>)
- [&lt;anonymous@10:100&gt;](<openrouter-usage.test.cjs.md#s-700c2ce5c7af4dbb>) — [electron/ai/openrouter-usage.test.cjs:20](<../../../../../../electron/ai/openrouter-usage.test.cjs#L20>)
- [&lt;anonymous@10:100&gt;](<openrouter-usage.test.cjs.md#s-700c2ce5c7af4dbb>) — [electron/ai/openrouter-usage.test.cjs:25](<../../../../../../electron/ai/openrouter-usage.test.cjs#L25>)
- [&lt;anonymous@57:92&gt;](<openrouter-usage.test.cjs.md#s-244b85dfa50db4a5>) — [electron/ai/openrouter-usage.test.cjs:66](<../../../../../../electron/ai/openrouter-usage.test.cjs#L66>)
- [&lt;anonymous@57:92&gt;](<openrouter-usage.test.cjs.md#s-244b85dfa50db4a5>) — [electron/ai/openrouter-usage.test.cjs:83](<../../../../../../electron/ai/openrouter-usage.test.cjs#L83>)
- [&lt;anonymous@57:92&gt;.&lt;anonymous@95:19&gt;](<openrouter-usage.test.cjs.md#s-112afea74ed3aee8>) — [electron/ai/openrouter-usage.test.cjs:95](<../../../../../../electron/ai/openrouter-usage.test.cjs#L95>)

Unresolved / external call sites: 7.

- Array.isArray — external-or-dynamic-dispatch; [electron/ai/openrouter-usage.cjs:46](<../../../../../../electron/ai/openrouter-usage.cjs#L46>)
- Object.hasOwn — external-or-dynamic-dispatch; [electron/ai/openrouter-usage.cjs:48](<../../../../../../electron/ai/openrouter-usage.cjs#L48>)
- Error — external-or-dynamic-dispatch; [electron/ai/openrouter-usage.cjs:50](<../../../../../../electron/ai/openrouter-usage.cjs#L50>)
- Error — external-or-dynamic-dispatch; [electron/ai/openrouter-usage.cjs:54](<../../../../../../electron/ai/openrouter-usage.cjs#L54>)
- &#91;"daily", "weekly", "monthly"&#93;.includes — external-or-dynamic-dispatch; [electron/ai/openrouter-usage.cjs:58](<../../../../../../electron/ai/openrouter-usage.cjs#L58>)
- new Date(now).toISOString — external-or-dynamic-dispatch; [electron/ai/openrouter-usage.cjs:71](<../../../../../../electron/ai/openrouter-usage.cjs#L71>)
- Date — external-or-dynamic-dispatch; [electron/ai/openrouter-usage.cjs:71](<../../../../../../electron/ai/openrouter-usage.cjs#L71>)

**Related tests / acceptance harnesses:**

- [electron/ai/openrouter-usage.test.cjs:20](<../../../../../../electron/ai/openrouter-usage.test.cjs#L20>) — static-call-site; coverage not established.
- [electron/ai/openrouter-usage.test.cjs:25](<../../../../../../electron/ai/openrouter-usage.test.cjs#L25>) — static-call-site; coverage not established.
- [electron/ai/openrouter-usage.test.cjs:66](<../../../../../../electron/ai/openrouter-usage.test.cjs#L66>) — static-call-site; coverage not established.
- [electron/ai/openrouter-usage.test.cjs:83](<../../../../../../electron/ai/openrouter-usage.test.cjs#L83>) — static-call-site; coverage not established.
- [electron/ai/openrouter-usage.test.cjs:95](<../../../../../../electron/ai/openrouter-usage.test.cjs#L95>) — static-call-site; coverage not established.
- [electron/ai/openrouter-usage.test.cjs:3](<../../../../../../electron/ai/openrouter-usage.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-f8d2acbd0c0a7c47"></a>

## identity

[electron/ai/openrouter-usage.cjs:74](<../../../../../../electron/ai/openrouter-usage.cjs#L74>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/openrouter-usage.cjs](<openrouter-usage.cjs.md#s-340137a80b097884>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| key | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [OpenRouterUsageService.record](<openrouter-usage.cjs.md#s-d783ccb079e6697c>) — [electron/ai/openrouter-usage.cjs:107](<../../../../../../electron/ai/openrouter-usage.cjs#L107>)
- [OpenRouterUsageService.record](<openrouter-usage.cjs.md#s-d783ccb079e6697c>) — [electron/ai/openrouter-usage.cjs:108](<../../../../../../electron/ai/openrouter-usage.cjs#L108>)
- [OpenRouterUsageService.get](<openrouter-usage.cjs.md#s-1134b7f0963903a0>) — [electron/ai/openrouter-usage.cjs:158](<../../../../../../electron/ai/openrouter-usage.cjs#L158>)

Unresolved / external call sites: 3.

- createHash("sha256").update(key).digest — external-or-dynamic-dispatch; [electron/ai/openrouter-usage.cjs:74](<../../../../../../electron/ai/openrouter-usage.cjs#L74>)
- createHash("sha256").update — external-or-dynamic-dispatch; [electron/ai/openrouter-usage.cjs:74](<../../../../../../electron/ai/openrouter-usage.cjs#L74>)
- createHash — external-or-dynamic-dispatch; [electron/ai/openrouter-usage.cjs:74](<../../../../../../electron/ai/openrouter-usage.cjs#L74>)

**Related tests / acceptance harnesses:**

- [electron/ai/openrouter-usage.test.cjs:3](<../../../../../../electron/ai/openrouter-usage.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-3bb5c133664fe2bc"></a>

## OpenRouterUsageService

[electron/ai/openrouter-usage.cjs:77](<../../../../../../electron/ai/openrouter-usage.cjs#L77>) · ClassDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: OpenRouterUsageService ([electron/ai/openrouter-usage.cjs:1](<../../../../../../electron/ai/openrouter-usage.cjs#L1>)).

Lexical owner: [electron/ai/openrouter-usage.cjs](<openrouter-usage.cjs.md#s-340137a80b097884>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/openrouter-usage.test.cjs:3](<../../../../../../electron/ai/openrouter-usage.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-ca4b5e760b8e3c1f"></a>

## OpenRouterUsageService.constructor

[electron/ai/openrouter-usage.cjs:78](<../../../../../../electron/ai/openrouter-usage.cjs#L78>) · Constructor · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [OpenRouterUsageService](<openrouter-usage.cjs.md#s-3bb5c133664fe2bc>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| {     credentials,     registry,     fetchImpl = fetch,     now = Date.now,     timeoutMs = 10000,   } | { credentials: any; registry: any; fetchImpl?: (url: any, init?: {}) =&gt; any; now?: any; timeoutMs?: number; } | compiler-inferred | required |

Returns: OpenRouterUsageService (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [OpenRouterUsageService.invalidate](<openrouter-usage.cjs.md#s-0a764503da78517c>) — [electron/ai/openrouter-usage.cjs:92](<../../../../../../electron/ai/openrouter-usage.cjs#L92>)

**Called by (statically resolved):**

- [fixture](<openrouter-usage.test.cjs.md#s-53faece2a98bbab7>) — [electron/ai/openrouter-usage.test.cjs:34](<../../../../../../electron/ai/openrouter-usage.test.cjs#L34>)
- [ProviderUsageService.constructor](<provider-usage.cjs.md#s-bfe04f5849731125>) — [electron/ai/provider-usage.cjs:30](<../../../../../../electron/ai/provider-usage.cjs#L30>)

Unresolved / external call sites: 1.

- Object.assign — external-or-dynamic-dispatch; [electron/ai/openrouter-usage.cjs:85](<../../../../../../electron/ai/openrouter-usage.cjs#L85>)

**Related tests / acceptance harnesses:**

- [electron/ai/openrouter-usage.test.cjs:34](<../../../../../../electron/ai/openrouter-usage.test.cjs#L34>) — static-call-site; coverage not established.
- [electron/ai/openrouter-usage.test.cjs:3](<../../../../../../electron/ai/openrouter-usage.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-0a764503da78517c"></a>

## OpenRouterUsageService.invalidate

[electron/ai/openrouter-usage.cjs:94](<../../../../../../electron/ai/openrouter-usage.cjs#L94>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [OpenRouterUsageService](<openrouter-usage.cjs.md#s-3bb5c133664fe2bc>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [OpenRouterUsageService.constructor](<openrouter-usage.cjs.md#s-ca4b5e760b8e3c1f>) — [electron/ai/openrouter-usage.cjs:92](<../../../../../../electron/ai/openrouter-usage.cjs#L92>)
- [OpenRouterUsageService.get](<openrouter-usage.cjs.md#s-1134b7f0963903a0>) — [electron/ai/openrouter-usage.cjs:145](<../../../../../../electron/ai/openrouter-usage.cjs#L145>)
- [OpenRouterUsageService.get](<openrouter-usage.cjs.md#s-1134b7f0963903a0>) — [electron/ai/openrouter-usage.cjs:152](<../../../../../../electron/ai/openrouter-usage.cjs#L152>)
- [OpenRouterUsageService.get](<openrouter-usage.cjs.md#s-1134b7f0963903a0>) — [electron/ai/openrouter-usage.cjs:160](<../../../../../../electron/ai/openrouter-usage.cjs#L160>)
- [&lt;anonymous@124:82&gt;](<openrouter-usage.test.cjs.md#s-26c6f2b2334443bf>) — [electron/ai/openrouter-usage.test.cjs:129](<../../../../../../electron/ai/openrouter-usage.test.cjs#L129>)
- [ProviderUsageService.invalidate](<provider-usage.cjs.md#s-d7a8cc5e2bed3076>) — [electron/ai/provider-usage.cjs:48](<../../../../../../electron/ai/provider-usage.cjs#L48>)
- [ProviderUsageService.selectionChanged](<provider-usage.cjs.md#s-e430acd6052a513e>) — [electron/ai/provider-usage.cjs:51](<../../../../../../electron/ai/provider-usage.cjs#L51>)

Unresolved / external call sites: 1.

- this.controller?.abort — external-or-dynamic-dispatch; [electron/ai/openrouter-usage.cjs:96](<../../../../../../electron/ai/openrouter-usage.cjs#L96>)

**Related tests / acceptance harnesses:**

- [electron/ai/openrouter-usage.test.cjs:129](<../../../../../../electron/ai/openrouter-usage.test.cjs#L129>) — static-call-site; coverage not established.
- [electron/ai/openrouter-usage.test.cjs:3](<../../../../../../electron/ai/openrouter-usage.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-d783ccb079e6697c"></a>

## OpenRouterUsageService.record

[electron/ai/openrouter-usage.cjs:104](<../../../../../../electron/ai/openrouter-usage.cjs#L104>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [OpenRouterUsageService](<openrouter-usage.cjs.md#s-3bb5c133664fe2bc>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| usage | any | compiler-inferred | required |
| key | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [identity](<openrouter-usage.cjs.md#s-f8d2acbd0c0a7c47>) — [electron/ai/openrouter-usage.cjs:107](<../../../../../../electron/ai/openrouter-usage.cjs#L107>)
- [identity](<openrouter-usage.cjs.md#s-f8d2acbd0c0a7c47>) — [electron/ai/openrouter-usage.cjs:108](<../../../../../../electron/ai/openrouter-usage.cjs#L108>)

**Called by (statically resolved):**

- [&lt;anonymous@231:91&gt;](<openrouter-usage.test.cjs.md#s-fa402344416ebcfe>) — [electron/ai/openrouter-usage.test.cjs:234](<../../../../../../electron/ai/openrouter-usage.test.cjs#L234>)
- [&lt;anonymous@231:91&gt;](<openrouter-usage.test.cjs.md#s-fa402344416ebcfe>) — [electron/ai/openrouter-usage.test.cjs:238](<../../../../../../electron/ai/openrouter-usage.test.cjs#L238>)
- [&lt;anonymous@231:91&gt;](<openrouter-usage.test.cjs.md#s-fa402344416ebcfe>) — [electron/ai/openrouter-usage.test.cjs:242](<../../../../../../electron/ai/openrouter-usage.test.cjs#L242>)

Unresolved / external call sites: 9.

- Number.isSafeInteger — external-or-dynamic-dispatch; [electron/ai/openrouter-usage.cjs:112](<../../../../../../electron/ai/openrouter-usage.cjs#L112>)
- Number.isSafeInteger — external-or-dynamic-dispatch; [electron/ai/openrouter-usage.cjs:114](<../../../../../../electron/ai/openrouter-usage.cjs#L114>)
- new Date(this.now()).toISOString — external-or-dynamic-dispatch; [electron/ai/openrouter-usage.cjs:121](<../../../../../../electron/ai/openrouter-usage.cjs#L121>)
- Date — external-or-dynamic-dispatch; [electron/ai/openrouter-usage.cjs:121](<../../../../../../electron/ai/openrouter-usage.cjs#L121>)
- this.now — external-or-dynamic-dispatch; [electron/ai/openrouter-usage.cjs:121](<../../../../../../electron/ai/openrouter-usage.cjs#L121>)
- Number.isSafeInteger — external-or-dynamic-dispatch; [electron/ai/openrouter-usage.cjs:124](<../../../../../../electron/ai/openrouter-usage.cjs#L124>)
- Number.isSafeInteger — external-or-dynamic-dispatch; [electron/ai/openrouter-usage.cjs:125](<../../../../../../electron/ai/openrouter-usage.cjs#L125>)
- Math.min — external-or-dynamic-dispatch; [electron/ai/openrouter-usage.cjs:131](<../../../../../../electron/ai/openrouter-usage.cjs#L131>)
- 1 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/openrouter-usage.test.cjs:234](<../../../../../../electron/ai/openrouter-usage.test.cjs#L234>) — static-call-site; coverage not established.
- [electron/ai/openrouter-usage.test.cjs:238](<../../../../../../electron/ai/openrouter-usage.test.cjs#L238>) — static-call-site; coverage not established.
- [electron/ai/openrouter-usage.test.cjs:242](<../../../../../../electron/ai/openrouter-usage.test.cjs#L242>) — static-call-site; coverage not established.
- [electron/ai/openrouter-usage.test.cjs:3](<../../../../../../electron/ai/openrouter-usage.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-e1de49534fe3b1aa"></a>

## OpenRouterUsageService.withTokens

[electron/ai/openrouter-usage.cjs:133](<../../../../../../electron/ai/openrouter-usage.cjs#L133>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [OpenRouterUsageService](<openrouter-usage.cjs.md#s-3bb5c133664fe2bc>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [OpenRouterUsageService.get](<openrouter-usage.cjs.md#s-1134b7f0963903a0>) — [electron/ai/openrouter-usage.cjs:173](<../../../../../../electron/ai/openrouter-usage.cjs#L173>)
- [OpenRouterUsageService.fetchSnapshot](<openrouter-usage.cjs.md#s-0d339a7d4b92bd32>) — [electron/ai/openrouter-usage.cjs:218](<../../../../../../electron/ai/openrouter-usage.cjs#L218>)
- [OpenRouterUsageService.fetchSnapshot](<openrouter-usage.cjs.md#s-0d339a7d4b92bd32>) — [electron/ai/openrouter-usage.cjs:260](<../../../../../../electron/ai/openrouter-usage.cjs#L260>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/openrouter-usage.test.cjs:3](<../../../../../../electron/ai/openrouter-usage.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-1134b7f0963903a0"></a>

## OpenRouterUsageService.get

[electron/ai/openrouter-usage.cjs:143](<../../../../../../electron/ai/openrouter-usage.cjs#L143>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [OpenRouterUsageService](<openrouter-usage.cjs.md#s-3bb5c133664fe2bc>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { refresh = false } | { refresh?: boolean; } | compiler-inferred | optional, default present |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [OpenRouterUsageService.invalidate](<openrouter-usage.cjs.md#s-0a764503da78517c>) — [electron/ai/openrouter-usage.cjs:145](<../../../../../../electron/ai/openrouter-usage.cjs#L145>)
- [blank](<openrouter-usage.cjs.md#s-deed3178dcebd830>) — [electron/ai/openrouter-usage.cjs:146](<../../../../../../electron/ai/openrouter-usage.cjs#L146>)
- [OpenRouterUsageService.invalidate](<openrouter-usage.cjs.md#s-0a764503da78517c>) — [electron/ai/openrouter-usage.cjs:152](<../../../../../../electron/ai/openrouter-usage.cjs#L152>)
- [blank](<openrouter-usage.cjs.md#s-deed3178dcebd830>) — [electron/ai/openrouter-usage.cjs:154](<../../../../../../electron/ai/openrouter-usage.cjs#L154>)
- [identity](<openrouter-usage.cjs.md#s-f8d2acbd0c0a7c47>) — [electron/ai/openrouter-usage.cjs:158](<../../../../../../electron/ai/openrouter-usage.cjs#L158>)
- [OpenRouterUsageService.invalidate](<openrouter-usage.cjs.md#s-0a764503da78517c>) — [electron/ai/openrouter-usage.cjs:160](<../../../../../../electron/ai/openrouter-usage.cjs#L160>)
- [OpenRouterUsageService.withTokens](<openrouter-usage.cjs.md#s-e1de49534fe3b1aa>) — [electron/ai/openrouter-usage.cjs:173](<../../../../../../electron/ai/openrouter-usage.cjs#L173>)
- [OpenRouterUsageService.fetchSnapshot](<openrouter-usage.cjs.md#s-0d339a7d4b92bd32>) — [electron/ai/openrouter-usage.cjs:176](<../../../../../../electron/ai/openrouter-usage.cjs#L176>)

**Called by (statically resolved):**

- [&lt;anonymous@97:98&gt;](<openrouter-usage.test.cjs.md#s-1e732da3b357d57e>) — [electron/ai/openrouter-usage.test.cjs:100](<../../../../../../electron/ai/openrouter-usage.test.cjs#L100>)
- [&lt;anonymous@97:98&gt;](<openrouter-usage.test.cjs.md#s-1e732da3b357d57e>) — [electron/ai/openrouter-usage.test.cjs:101](<../../../../../../electron/ai/openrouter-usage.test.cjs#L101>)
- [&lt;anonymous@97:98&gt;](<openrouter-usage.test.cjs.md#s-1e732da3b357d57e>) — [electron/ai/openrouter-usage.test.cjs:102](<../../../../../../electron/ai/openrouter-usage.test.cjs#L102>)
- [&lt;anonymous@97:98&gt;](<openrouter-usage.test.cjs.md#s-1e732da3b357d57e>) — [electron/ai/openrouter-usage.test.cjs:110](<../../../../../../electron/ai/openrouter-usage.test.cjs#L110>)
- [&lt;anonymous@97:98&gt;](<openrouter-usage.test.cjs.md#s-1e732da3b357d57e>) — [electron/ai/openrouter-usage.test.cjs:113](<../../../../../../electron/ai/openrouter-usage.test.cjs#L113>)
- [&lt;anonymous@97:98&gt;](<openrouter-usage.test.cjs.md#s-1e732da3b357d57e>) — [electron/ai/openrouter-usage.test.cjs:116](<../../../../../../electron/ai/openrouter-usage.test.cjs#L116>)
- [&lt;anonymous@97:98&gt;](<openrouter-usage.test.cjs.md#s-1e732da3b357d57e>) — [electron/ai/openrouter-usage.test.cjs:119](<../../../../../../electron/ai/openrouter-usage.test.cjs#L119>)
- [&lt;anonymous@97:98&gt;](<openrouter-usage.test.cjs.md#s-1e732da3b357d57e>) — [electron/ai/openrouter-usage.test.cjs:122](<../../../../../../electron/ai/openrouter-usage.test.cjs#L122>)
- [&lt;anonymous@124:82&gt;](<openrouter-usage.test.cjs.md#s-26c6f2b2334443bf>) — [electron/ai/openrouter-usage.test.cjs:127](<../../../../../../electron/ai/openrouter-usage.test.cjs#L127>)
- [&lt;anonymous@124:82&gt;](<openrouter-usage.test.cjs.md#s-26c6f2b2334443bf>) — [electron/ai/openrouter-usage.test.cjs:134](<../../../../../../electron/ai/openrouter-usage.test.cjs#L134>)
- [&lt;anonymous@140:101&gt;](<openrouter-usage.test.cjs.md#s-740f82bcde7b606d>) — [electron/ai/openrouter-usage.test.cjs:157](<../../../../../../electron/ai/openrouter-usage.test.cjs#L157>)
- [&lt;anonymous@140:101&gt;](<openrouter-usage.test.cjs.md#s-740f82bcde7b606d>) — [electron/ai/openrouter-usage.test.cjs:160](<../../../../../../electron/ai/openrouter-usage.test.cjs#L160>)
- [&lt;anonymous@140:101&gt;](<openrouter-usage.test.cjs.md#s-740f82bcde7b606d>) — [electron/ai/openrouter-usage.test.cjs:172](<../../../../../../electron/ai/openrouter-usage.test.cjs#L172>)
- [&lt;anonymous@140:101&gt;](<openrouter-usage.test.cjs.md#s-740f82bcde7b606d>) — [electron/ai/openrouter-usage.test.cjs:175](<../../../../../../electron/ai/openrouter-usage.test.cjs#L175>)
- [&lt;anonymous@178:76&gt;](<openrouter-usage.test.cjs.md#s-5fa0639378a66003>) — [electron/ai/openrouter-usage.test.cjs:187](<../../../../../../electron/ai/openrouter-usage.test.cjs#L187>)
- [&lt;anonymous@178:76&gt;](<openrouter-usage.test.cjs.md#s-5fa0639378a66003>) — [electron/ai/openrouter-usage.test.cjs:189](<../../../../../../electron/ai/openrouter-usage.test.cjs#L189>)
- [&lt;anonymous@178:76&gt;](<openrouter-usage.test.cjs.md#s-5fa0639378a66003>) — [electron/ai/openrouter-usage.test.cjs:193](<../../../../../../electron/ai/openrouter-usage.test.cjs#L193>)
- [&lt;anonymous@195:91&gt;](<openrouter-usage.test.cjs.md#s-9a3e243a0330cbd3>) — [electron/ai/openrouter-usage.test.cjs:202](<../../../../../../electron/ai/openrouter-usage.test.cjs#L202>)
- [&lt;anonymous@195:91&gt;](<openrouter-usage.test.cjs.md#s-9a3e243a0330cbd3>) — [electron/ai/openrouter-usage.test.cjs:205](<../../../../../../electron/ai/openrouter-usage.test.cjs#L205>)
- [&lt;anonymous@195:91&gt;](<openrouter-usage.test.cjs.md#s-9a3e243a0330cbd3>) — [electron/ai/openrouter-usage.test.cjs:208](<../../../../../../electron/ai/openrouter-usage.test.cjs#L208>)
- [&lt;anonymous@195:91&gt;](<openrouter-usage.test.cjs.md#s-9a3e243a0330cbd3>) — [electron/ai/openrouter-usage.test.cjs:211](<../../../../../../electron/ai/openrouter-usage.test.cjs#L211>)
- [&lt;anonymous@195:91&gt;](<openrouter-usage.test.cjs.md#s-9a3e243a0330cbd3>) — [electron/ai/openrouter-usage.test.cjs:215](<../../../../../../electron/ai/openrouter-usage.test.cjs#L215>)
- [&lt;anonymous@195:91&gt;](<openrouter-usage.test.cjs.md#s-9a3e243a0330cbd3>) — [electron/ai/openrouter-usage.test.cjs:223](<../../../../../../electron/ai/openrouter-usage.test.cjs#L223>)
- [&lt;anonymous@195:91&gt;](<openrouter-usage.test.cjs.md#s-9a3e243a0330cbd3>) — [electron/ai/openrouter-usage.test.cjs:225](<../../../../../../electron/ai/openrouter-usage.test.cjs#L225>)
- [&lt;anonymous@195:91&gt;](<openrouter-usage.test.cjs.md#s-9a3e243a0330cbd3>) — [electron/ai/openrouter-usage.test.cjs:228](<../../../../../../electron/ai/openrouter-usage.test.cjs#L228>)
- [&lt;anonymous@231:91&gt;](<openrouter-usage.test.cjs.md#s-fa402344416ebcfe>) — [electron/ai/openrouter-usage.test.cjs:233](<../../../../../../electron/ai/openrouter-usage.test.cjs#L233>)
- [&lt;anonymous@231:91&gt;](<openrouter-usage.test.cjs.md#s-fa402344416ebcfe>) — [electron/ai/openrouter-usage.test.cjs:246](<../../../../../../electron/ai/openrouter-usage.test.cjs#L246>)
- [&lt;anonymous@231:91&gt;](<openrouter-usage.test.cjs.md#s-fa402344416ebcfe>) — [electron/ai/openrouter-usage.test.cjs:251](<../../../../../../electron/ai/openrouter-usage.test.cjs#L251>)
- [ProviderUsageService.get](<provider-usage.cjs.md#s-b3bdf66ecb1c6a64>) — [electron/ai/provider-usage.cjs:115](<../../../../../../electron/ai/provider-usage.cjs#L115>)

Unresolved / external call sites: 9.

- this.registry.read — external-or-dynamic-dispatch; [electron/ai/openrouter-usage.cjs:144](<../../../../../../electron/ai/openrouter-usage.cjs#L144>)
- this.credentials.get — external-or-dynamic-dispatch; [electron/ai/openrouter-usage.cjs:150](<../../../../../../electron/ai/openrouter-usage.cjs#L150>)
- this.now — external-or-dynamic-dispatch; [electron/ai/openrouter-usage.cjs:166](<../../../../../../electron/ai/openrouter-usage.cjs#L166>)
- this.now — external-or-dynamic-dispatch; [electron/ai/openrouter-usage.cjs:170](<../../../../../../electron/ai/openrouter-usage.cjs#L170>)
- Date.parse — external-or-dynamic-dispatch; [electron/ai/openrouter-usage.cjs:170](<../../../../../../electron/ai/openrouter-usage.cjs#L170>)
- this.now — external-or-dynamic-dispatch; [electron/ai/openrouter-usage.cjs:171](<../../../../../../electron/ai/openrouter-usage.cjs#L171>)
- Date.parse — external-or-dynamic-dispatch; [electron/ai/openrouter-usage.cjs:171](<../../../../../../electron/ai/openrouter-usage.cjs#L171>)
- id.slice — external-or-dynamic-dispatch; [electron/ai/openrouter-usage.cjs:175](<../../../../../../electron/ai/openrouter-usage.cjs#L175>)
- 1 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/openrouter-usage.test.cjs:100](<../../../../../../electron/ai/openrouter-usage.test.cjs#L100>) — static-call-site; coverage not established.
- [electron/ai/openrouter-usage.test.cjs:101](<../../../../../../electron/ai/openrouter-usage.test.cjs#L101>) — static-call-site; coverage not established.
- [electron/ai/openrouter-usage.test.cjs:102](<../../../../../../electron/ai/openrouter-usage.test.cjs#L102>) — static-call-site; coverage not established.
- [electron/ai/openrouter-usage.test.cjs:110](<../../../../../../electron/ai/openrouter-usage.test.cjs#L110>) — static-call-site; coverage not established.
- [electron/ai/openrouter-usage.test.cjs:113](<../../../../../../electron/ai/openrouter-usage.test.cjs#L113>) — static-call-site; coverage not established.
- [electron/ai/openrouter-usage.test.cjs:116](<../../../../../../electron/ai/openrouter-usage.test.cjs#L116>) — static-call-site; coverage not established.
- [electron/ai/openrouter-usage.test.cjs:119](<../../../../../../electron/ai/openrouter-usage.test.cjs#L119>) — static-call-site; coverage not established.
- [electron/ai/openrouter-usage.test.cjs:122](<../../../../../../electron/ai/openrouter-usage.test.cjs#L122>) — static-call-site; coverage not established.
- [electron/ai/openrouter-usage.test.cjs:127](<../../../../../../electron/ai/openrouter-usage.test.cjs#L127>) — static-call-site; coverage not established.
- [electron/ai/openrouter-usage.test.cjs:134](<../../../../../../electron/ai/openrouter-usage.test.cjs#L134>) — static-call-site; coverage not established.
- [electron/ai/openrouter-usage.test.cjs:157](<../../../../../../electron/ai/openrouter-usage.test.cjs#L157>) — static-call-site; coverage not established.
- [electron/ai/openrouter-usage.test.cjs:160](<../../../../../../electron/ai/openrouter-usage.test.cjs#L160>) — static-call-site; coverage not established.
- [electron/ai/openrouter-usage.test.cjs:172](<../../../../../../electron/ai/openrouter-usage.test.cjs#L172>) — static-call-site; coverage not established.
- [electron/ai/openrouter-usage.test.cjs:175](<../../../../../../electron/ai/openrouter-usage.test.cjs#L175>) — static-call-site; coverage not established.
- [electron/ai/openrouter-usage.test.cjs:187](<../../../../../../electron/ai/openrouter-usage.test.cjs#L187>) — static-call-site; coverage not established.
- [electron/ai/openrouter-usage.test.cjs:189](<../../../../../../electron/ai/openrouter-usage.test.cjs#L189>) — static-call-site; coverage not established.
- [electron/ai/openrouter-usage.test.cjs:193](<../../../../../../electron/ai/openrouter-usage.test.cjs#L193>) — static-call-site; coverage not established.
- [electron/ai/openrouter-usage.test.cjs:202](<../../../../../../electron/ai/openrouter-usage.test.cjs#L202>) — static-call-site; coverage not established.
- [electron/ai/openrouter-usage.test.cjs:205](<../../../../../../electron/ai/openrouter-usage.test.cjs#L205>) — static-call-site; coverage not established.
- [electron/ai/openrouter-usage.test.cjs:208](<../../../../../../electron/ai/openrouter-usage.test.cjs#L208>) — static-call-site; coverage not established.
- [electron/ai/openrouter-usage.test.cjs:211](<../../../../../../electron/ai/openrouter-usage.test.cjs#L211>) — static-call-site; coverage not established.
- [electron/ai/openrouter-usage.test.cjs:215](<../../../../../../electron/ai/openrouter-usage.test.cjs#L215>) — static-call-site; coverage not established.
- [electron/ai/openrouter-usage.test.cjs:223](<../../../../../../electron/ai/openrouter-usage.test.cjs#L223>) — static-call-site; coverage not established.
- [electron/ai/openrouter-usage.test.cjs:225](<../../../../../../electron/ai/openrouter-usage.test.cjs#L225>) — static-call-site; coverage not established.
- [electron/ai/openrouter-usage.test.cjs:228](<../../../../../../electron/ai/openrouter-usage.test.cjs#L228>) — static-call-site; coverage not established.
- [electron/ai/openrouter-usage.test.cjs:233](<../../../../../../electron/ai/openrouter-usage.test.cjs#L233>) — static-call-site; coverage not established.
- [electron/ai/openrouter-usage.test.cjs:246](<../../../../../../electron/ai/openrouter-usage.test.cjs#L246>) — static-call-site; coverage not established.
- [electron/ai/openrouter-usage.test.cjs:251](<../../../../../../electron/ai/openrouter-usage.test.cjs#L251>) — static-call-site; coverage not established.
- [electron/ai/openrouter-usage.test.cjs:3](<../../../../../../electron/ai/openrouter-usage.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-581c9267e7070320"></a>

## OpenRouterUsageService.get.&lt;anonymous@176:71&gt;

[electron/ai/openrouter-usage.cjs:176](<../../../../../../electron/ai/openrouter-usage.cjs#L176>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [OpenRouterUsageService.get](<openrouter-usage.cjs.md#s-1134b7f0963903a0>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/openrouter-usage.test.cjs:3](<../../../../../../electron/ai/openrouter-usage.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-0d339a7d4b92bd32"></a>

## OpenRouterUsageService.fetchSnapshot

[electron/ai/openrouter-usage.cjs:181](<../../../../../../electron/ai/openrouter-usage.cjs#L181>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [OpenRouterUsageService](<openrouter-usage.cjs.md#s-3bb5c133664fe2bc>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| key | any | compiler-inferred | required |
| alias | any | compiler-inferred | required |
| generation | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [normalize](<openrouter-usage.cjs.md#s-f0dfce05c1990cc4>) — [electron/ai/openrouter-usage.cjs:206](<../../../../../../electron/ai/openrouter-usage.cjs#L206>)
- [blank](<openrouter-usage.cjs.md#s-deed3178dcebd830>) — [electron/ai/openrouter-usage.cjs:214](<../../../../../../electron/ai/openrouter-usage.cjs#L214>)
- [OpenRouterUsageService.withTokens](<openrouter-usage.cjs.md#s-e1de49534fe3b1aa>) — [electron/ai/openrouter-usage.cjs:218](<../../../../../../electron/ai/openrouter-usage.cjs#L218>)
- [blank](<openrouter-usage.cjs.md#s-deed3178dcebd830>) — [electron/ai/openrouter-usage.cjs:220](<../../../../../../electron/ai/openrouter-usage.cjs#L220>)
- [blank](<openrouter-usage.cjs.md#s-deed3178dcebd830>) — [electron/ai/openrouter-usage.cjs:247](<../../../../../../electron/ai/openrouter-usage.cjs#L247>)
- [OpenRouterUsageService.withTokens](<openrouter-usage.cjs.md#s-e1de49534fe3b1aa>) — [electron/ai/openrouter-usage.cjs:260](<../../../../../../electron/ai/openrouter-usage.cjs#L260>)

**Called by (statically resolved):**

- [OpenRouterUsageService.get](<openrouter-usage.cjs.md#s-1134b7f0963903a0>) — [electron/ai/openrouter-usage.cjs:176](<../../../../../../electron/ai/openrouter-usage.cjs#L176>)

Unresolved / external call sites: 24.

- AbortController — external-or-dynamic-dispatch; [electron/ai/openrouter-usage.cjs:182](<../../../../../../electron/ai/openrouter-usage.cjs#L182>)
- setTimeout — external-or-dynamic-dispatch; [electron/ai/openrouter-usage.cjs:184](<../../../../../../electron/ai/openrouter-usage.cjs#L184>)
- this.fetch — external-or-dynamic-dispatch; [electron/ai/openrouter-usage.cjs:187](<../../../../../../electron/ai/openrouter-usage.cjs#L187>)
- response.headers.get — external-or-dynamic-dispatch; [electron/ai/openrouter-usage.cjs:195](<../../../../../../electron/ai/openrouter-usage.cjs#L195>)
- new TextDecoder().decode — external-or-dynamic-dispatch; [electron/ai/openrouter-usage.cjs:202](<../../../../../../electron/ai/openrouter-usage.cjs#L202>)
- TextDecoder — external-or-dynamic-dispatch; [electron/ai/openrouter-usage.cjs:202](<../../../../../../electron/ai/openrouter-usage.cjs#L202>)
- JSON.parse — external-or-dynamic-dispatch; [electron/ai/openrouter-usage.cjs:206](<../../../../../../electron/ai/openrouter-usage.cjs#L206>)
- this.now — external-or-dynamic-dispatch; [electron/ai/openrouter-usage.cjs:206](<../../../../../../electron/ai/openrouter-usage.cjs#L206>)
- 16 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/openrouter-usage.test.cjs:3](<../../../../../../electron/ai/openrouter-usage.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-49eb6a977a007cb1"></a>

## OpenRouterUsageService.fetchSnapshot.&lt;anonymous@184:30&gt;

[electron/ai/openrouter-usage.cjs:184](<../../../../../../electron/ai/openrouter-usage.cjs#L184>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [OpenRouterUsageService.fetchSnapshot](<openrouter-usage.cjs.md#s-0d339a7d4b92bd32>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- controller.abort — external-or-dynamic-dispatch; [electron/ai/openrouter-usage.cjs:184](<../../../../../../electron/ai/openrouter-usage.cjs#L184>)

**Related tests / acceptance harnesses:**

- [electron/ai/openrouter-usage.test.cjs:3](<../../../../../../electron/ai/openrouter-usage.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-5a9f6d8af34677d9"></a>

## OpenRouterUsageService.fetchSnapshot.&lt;anonymous@263:44&gt;

[electron/ai/openrouter-usage.cjs:263](<../../../../../../electron/ai/openrouter-usage.cjs#L263>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [OpenRouterUsageService.fetchSnapshot](<openrouter-usage.cjs.md#s-0d339a7d4b92bd32>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/openrouter-usage.test.cjs:3](<../../../../../../electron/ai/openrouter-usage.test.cjs#L3>) — file-import-only; coverage not established.
