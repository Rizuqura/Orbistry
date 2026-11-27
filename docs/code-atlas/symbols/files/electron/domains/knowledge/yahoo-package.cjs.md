# electron/domains/knowledge/yahoo-package.cjs: symbols

[Atlas](<../../../../../README.md>) / [Knowledge indexing and source access](<../../../../../modules/knowledge.md>) / [electron/domains/knowledge/yahoo-package.cjs:1](<../../../../../../../electron/domains/knowledge/yahoo-package.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/domains/knowledge/yahoo-package.cjs](<yahoo-package.cjs.md#s-c9e04b45bc0067b4>) (Module)
- [admitYahoo](<yahoo-package.cjs.md#s-c061cc4e19880808>) (FunctionDeclaration)
- [admitYahoo.authorize](<yahoo-package.cjs.md#s-a86ba31c9adc0503>) (ArrowFunction)
- [admitYahoo.&lt;anonymous@19:5&gt;](<yahoo-package.cjs.md#s-11658cbe3844d8bb>) (ArrowFunction)
- [admitYahoo.grant](<yahoo-package.cjs.md#s-9d17a680eac2e99e>) (FunctionDeclaration)
- [admitYahoo.grant.&lt;anonymous@33:7&gt;](<yahoo-package.cjs.md#s-77c8f0c7bf64b0cd>) (ArrowFunction)
- [admitYahoo.fetch](<yahoo-package.cjs.md#s-36ad1a499085674a>) (MethodDeclaration)
- [admitYahoo.verify](<yahoo-package.cjs.md#s-cf7d9a9e6b93d22e>) (MethodDeclaration)

<a id="s-c9e04b45bc0067b4"></a>

## electron/domains/knowledge/yahoo-package.cjs

[electron/domains/knowledge/yahoo-package.cjs:1](<../../../../../../../electron/domains/knowledge/yahoo-package.cjs#L1>) · Module · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- require — module-loader; [electron/domains/knowledge/yahoo-package.cjs:3](<../../../../../../../electron/domains/knowledge/yahoo-package.cjs#L3>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-c061cc4e19880808"></a>

## admitYahoo

[electron/domains/knowledge/yahoo-package.cjs:6](<../../../../../../../electron/domains/knowledge/yahoo-package.cjs#L6>) · FunctionDeclaration · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

Admits a legacy source against the installed package, version, current Entity link and network consent. Returns a checked operation plus a recheck for cache hits and post-fetch revocation.

Purpose evidence: jsdoc.

Exported as: admitYahoo ([electron/domains/knowledge/yahoo-package.cjs:1](<../../../../../../../electron/domains/knowledge/yahoo-package.cjs#L1>)).

Lexical owner: [electron/domains/knowledge/yahoo-package.cjs](<yahoo-package.cjs.md#s-c9e04b45bc0067b4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| entityId | any | compiler-inferred | required |
| operation | any | compiler-inferred | required |
| stillApplied | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [EnginePackageRegistry.constructor](<../../engines/registry/registry.cjs.md#s-0e6ad7bd522e9fad>) — [electron/domains/knowledge/yahoo-package.cjs:8](<../../../../../../../electron/domains/knowledge/yahoo-package.cjs#L8>)
- [EnginePackageRegistry.installed](<../../engines/registry/registry.cjs.md#s-4b2796c726a80a4b>) — [electron/domains/knowledge/yahoo-package.cjs:16](<../../../../../../../electron/domains/knowledge/yahoo-package.cjs#L16>)
- [admitYahoo.grant](<yahoo-package.cjs.md#s-9d17a680eac2e99e>) — [electron/domains/knowledge/yahoo-package.cjs:49](<../../../../../../../electron/domains/knowledge/yahoo-package.cjs#L49>)

**Called by (statically resolved):**

- [dailyPriceService.get](<../../daily-price-service.cjs.md#s-4a666375398d6888>) — [electron/daily-price-service.cjs:119](<../../../../../../../electron/daily-price-service.cjs#L119>)
- [financialService.get](<../../financial-service.cjs.md#s-2f73e01fe6b09018>) — [electron/financial-service.cjs:152](<../../../../../../../electron/financial-service.cjs#L152>)

Unresolved / external call sites: 3.

- checked.manifest.sources?.find — external-or-dynamic-dispatch; [electron/domains/knowledge/yahoo-package.cjs:18](<../../../../../../../electron/domains/knowledge/yahoo-package.cjs#L18>)
- checked.manifest.engine_version.split — external-or-dynamic-dispatch; [electron/domains/knowledge/yahoo-package.cjs:21](<../../../../../../../electron/domains/knowledge/yahoo-package.cjs#L21>)
- Error — external-or-dynamic-dispatch; [electron/domains/knowledge/yahoo-package.cjs:22](<../../../../../../../electron/domains/knowledge/yahoo-package.cjs#L22>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-a86ba31c9adc0503"></a>

## admitYahoo.authorize

[electron/domains/knowledge/yahoo-package.cjs:9](<../../../../../../../electron/domains/knowledge/yahoo-package.cjs#L9>) · ArrowFunction · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [admitYahoo](<yahoo-package.cjs.md#s-c061cc4e19880808>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| request | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- stillApplied — external-or-dynamic-dispatch; [electron/domains/knowledge/yahoo-package.cjs:14](<../../../../../../../electron/domains/knowledge/yahoo-package.cjs#L14>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-11658cbe3844d8bb"></a>

## admitYahoo.&lt;anonymous@19:5&gt;

[electron/domains/knowledge/yahoo-package.cjs:19](<../../../../../../../electron/domains/knowledge/yahoo-package.cjs#L19>) · ArrowFunction · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [admitYahoo](<yahoo-package.cjs.md#s-c061cc4e19880808>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| item | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-9d17a680eac2e99e"></a>

## admitYahoo.grant

[electron/domains/knowledge/yahoo-package.cjs:24](<../../../../../../../electron/domains/knowledge/yahoo-package.cjs#L24>) · FunctionDeclaration · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

Checks current grant identity so revoking and relinking does not revive an in-flight read.

Purpose evidence: jsdoc.

Lexical owner: [admitYahoo](<yahoo-package.cjs.md#s-c061cc4e19880808>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [EnginePackageRegistry.read](<../../engines/registry/registry.cjs.md#s-abffabd42b530015>) — [electron/domains/knowledge/yahoo-package.cjs:25](<../../../../../../../electron/domains/knowledge/yahoo-package.cjs#L25>)

**Called by (statically resolved):**

- [admitYahoo](<yahoo-package.cjs.md#s-c061cc4e19880808>) — [electron/domains/knowledge/yahoo-package.cjs:49](<../../../../../../../electron/domains/knowledge/yahoo-package.cjs#L49>)
- [admitYahoo.verify](<yahoo-package.cjs.md#s-cf7d9a9e6b93d22e>) — [electron/domains/knowledge/yahoo-package.cjs:64](<../../../../../../../electron/domains/knowledge/yahoo-package.cjs#L64>)

Unresolved / external call sites: 9.

- Error — external-or-dynamic-dispatch; [electron/domains/knowledge/yahoo-package.cjs:28](<../../../../../../../electron/domains/knowledge/yahoo-package.cjs#L28>)
- Error — external-or-dynamic-dispatch; [electron/domains/knowledge/yahoo-package.cjs:29](<../../../../../../../electron/domains/knowledge/yahoo-package.cjs#L29>)
- Error — external-or-dynamic-dispatch; [electron/domains/knowledge/yahoo-package.cjs:31](<../../../../../../../electron/domains/knowledge/yahoo-package.cjs#L31>)
- state.links.find — external-or-dynamic-dispatch; [electron/domains/knowledge/yahoo-package.cjs:32](<../../../../../../../electron/domains/knowledge/yahoo-package.cjs#L32>)
- Error — external-or-dynamic-dispatch; [electron/domains/knowledge/yahoo-package.cjs:40](<../../../../../../../electron/domains/knowledge/yahoo-package.cjs#L40>)
- Error — external-or-dynamic-dispatch; [electron/domains/knowledge/yahoo-package.cjs:42](<../../../../../../../electron/domains/knowledge/yahoo-package.cjs#L42>)
- stillApplied — external-or-dynamic-dispatch; [electron/domains/knowledge/yahoo-package.cjs:45](<../../../../../../../electron/domains/knowledge/yahoo-package.cjs#L45>)
- Error — external-or-dynamic-dispatch; [electron/domains/knowledge/yahoo-package.cjs:46](<../../../../../../../electron/domains/knowledge/yahoo-package.cjs#L46>)
- 1 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-77c8f0c7bf64b0cd"></a>

## admitYahoo.grant.&lt;anonymous@33:7&gt;

[electron/domains/knowledge/yahoo-package.cjs:33](<../../../../../../../electron/domains/knowledge/yahoo-package.cjs#L33>) · ArrowFunction · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [admitYahoo.grant](<yahoo-package.cjs.md#s-9d17a680eac2e99e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| item | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- item.operations.includes — external-or-dynamic-dispatch; [electron/domains/knowledge/yahoo-package.cjs:37](<../../../../../../../electron/domains/knowledge/yahoo-package.cjs#L37>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-36ad1a499085674a"></a>

## admitYahoo.fetch

[electron/domains/knowledge/yahoo-package.cjs:53](<../../../../../../../electron/domains/knowledge/yahoo-package.cjs#L53>) · MethodDeclaration · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

Performs a receipt-backed request with the exact listing and optional history range.

Purpose evidence: jsdoc.

Lexical owner: [admitYahoo](<yahoo-package.cjs.md#s-c061cc4e19880808>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [EnginePackageRegistry.execute](<../../engines/registry/registry.cjs.md#s-61267d4d373b62b8>) — [electron/domains/knowledge/yahoo-package.cjs:54](<../../../../../../../electron/domains/knowledge/yahoo-package.cjs#L54>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-cf7d9a9e6b93d22e"></a>

## admitYahoo.verify

[electron/domains/knowledge/yahoo-package.cjs:63](<../../../../../../../electron/domains/knowledge/yahoo-package.cjs#L63>) · MethodDeclaration · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

Rejects stale grants before releasing either cached or newly fetched data.

Purpose evidence: jsdoc.

Lexical owner: [admitYahoo](<yahoo-package.cjs.md#s-c061cc4e19880808>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [admitYahoo.grant](<yahoo-package.cjs.md#s-9d17a680eac2e99e>) — [electron/domains/knowledge/yahoo-package.cjs:64](<../../../../../../../electron/domains/knowledge/yahoo-package.cjs#L64>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- Error — external-or-dynamic-dispatch; [electron/domains/knowledge/yahoo-package.cjs:65](<../../../../../../../electron/domains/knowledge/yahoo-package.cjs#L65>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
