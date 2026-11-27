# electron/financial-service.cjs: symbols

[Atlas](<../../../README.md>) / [Built-in Engines and data adapters](<../../../modules/engines.md>) / [electron/financial-service.cjs:1](<../../../../../electron/financial-service.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/financial-service.cjs](<financial-service.cjs.md#s-082ce4a754b97ec1>) (Module)
- [createFinancialService](<financial-service.cjs.md#s-f177f750334ab374>) (FunctionDeclaration)
- [createFinancialService.&lt;anonymous@15:11&gt;](<financial-service.cjs.md#s-b38366509a8bdb42>) (ArrowFunction)
- [createFinancialService.&lt;anonymous@37:7&gt;](<financial-service.cjs.md#s-d23ef868b957c18c>) (ArrowFunction)
- [createFinancialService.get](<financial-service.cjs.md#s-a86ef1299cb55ce1>) (FunctionDeclaration)
- [createFinancialService.get.refresh](<financial-service.cjs.md#s-3a52bab9a8fcaae5>) (FunctionDeclaration)
- [createFinancialService.get](<financial-service.cjs.md#s-e2161e05437c3fe9>) (ArrowFunction)
- [financialService](<financial-service.cjs.md#s-471cf3c9305cefa6>) (VariableDeclaration)
- [financialService.get](<financial-service.cjs.md#s-2f73e01fe6b09018>) (MethodDeclaration)
- [resolve](<financial-service.cjs.md#s-8f8dd0c6e55aec18>) (FunctionDeclaration)
- [resolve.&lt;anonymous@173:11&gt;](<financial-service.cjs.md#s-6594f78752632939>) (ArrowFunction)
- [resolve.&lt;anonymous@174:21&gt;](<financial-service.cjs.md#s-0ac7351917f75c04>) (ArrowFunction)
- [getIndexedFinance](<financial-service.cjs.md#s-5cdbc96d6a69cfe2>) (FunctionDeclaration)
- [getIndexedFinance.&lt;anonymous@188:5&gt;](<financial-service.cjs.md#s-5add077eafd5ce94>) (ArrowFunction)
- [getAuthorizedHistory](<financial-service.cjs.md#s-e00c905ba349043c>) (FunctionDeclaration)
- [getAuthorizedHistory.symbol](<financial-service.cjs.md#s-2e1b4d6265e710ac>) (FunctionDeclaration)
- [getAuthorizedHistory.&lt;anonymous@229:5&gt;](<financial-service.cjs.md#s-6ede96fd21f2c174>) (ArrowFunction)

<a id="s-082ce4a754b97ec1"></a>

## electron/financial-service.cjs

[electron/financial-service.cjs:1](<../../../../../electron/financial-service.cjs#L1>) · Module · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

- [createFinancialService](<financial-service.cjs.md#s-f177f750334ab374>) — [electron/financial-service.cjs:148](<../../../../../electron/financial-service.cjs#L148>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 8.

- require — module-loader; [electron/financial-service.cjs:1](<../../../../../electron/financial-service.cjs#L1>)
- require — module-loader; [electron/financial-service.cjs:2](<../../../../../electron/financial-service.cjs#L2>)
- require — module-loader; [electron/financial-service.cjs:3](<../../../../../electron/financial-service.cjs#L3>)
- require — module-loader; [electron/financial-service.cjs:7](<../../../../../electron/financial-service.cjs#L7>)
- require — module-loader; [electron/financial-service.cjs:8](<../../../../../electron/financial-service.cjs#L8>)
- require — module-loader; [electron/financial-service.cjs:9](<../../../../../electron/financial-service.cjs#L9>)
- require — module-loader; [electron/financial-service.cjs:10](<../../../../../electron/financial-service.cjs#L10>)
- require — module-loader; [electron/financial-service.cjs:11](<../../../../../electron/financial-service.cjs#L11>)

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:25](<../../../../../electron/backend-identity.test.cjs#L25>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:15](<../../../../../electron/financial-service.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:14](<../../../../../electron/yahoo-engine-contract.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:17](<../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L17>) — file-import-only; coverage not established.

<a id="s-f177f750334ab374"></a>

## createFinancialService

[electron/financial-service.cjs:14](<../../../../../electron/financial-service.cjs#L14>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Creates a bounded, coalesced Universe cache using the existing atomic JSON storage conventions. TTL defaults to 24 hours.

Purpose evidence: jsdoc.

Exported as: createFinancialService ([electron/financial-service.cjs:1](<../../../../../electron/financial-service.cjs#L1>)).

Lexical owner: [electron/financial-service.cjs](<financial-service.cjs.md#s-082ce4a754b97ec1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| {   fetch = (symbol, operation, range) =&gt;     require("./engines/yahoo-financials/index.cjs").execute({       symbol,       operation,       ...(range ? { range } : {}),     }),   clock = Date.now,   ttlMs = 86400000,   ttlByKind = {}, } | { fetch?: (symbol: any, operation: any, range: any) =&gt; unknown; clock?: any; ttlMs?: number; ttlByKind?: {}; } | compiler-inferred | optional, default present |

Returns: { get: (root: any, input: any, kind: any, force: any, range: any) =&gt; unknown; getWithGrant: (root: any, input: any, kind: any, force: boolean, range: any, grant?: any) =&gt; unknown; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [electron/financial-service.cjs](<financial-service.cjs.md#s-082ce4a754b97ec1>) — [electron/financial-service.cjs:148](<../../../../../electron/financial-service.cjs#L148>)
- [&lt;anonymous@129:105&gt;.&lt;anonymous@130:16&gt;](<financial-service.test.cjs.md#s-35f540704963be33>) — [electron/financial-service.test.cjs:140](<../../../../../electron/financial-service.test.cjs#L140>)
- [&lt;anonymous@129:105&gt;.&lt;anonymous@130:16&gt;](<financial-service.test.cjs.md#s-35f540704963be33>) — [electron/financial-service.test.cjs:148](<../../../../../electron/financial-service.test.cjs#L148>)
- [&lt;anonymous@231:108&gt;.&lt;anonymous@232:16&gt;](<financial-service.test.cjs.md#s-2ae0faefcd1d36b0>) — [electron/financial-service.test.cjs:242](<../../../../../electron/financial-service.test.cjs#L242>)
- [&lt;anonymous@231:108&gt;.&lt;anonymous@232:16&gt;](<financial-service.test.cjs.md#s-2ae0faefcd1d36b0>) — [electron/financial-service.test.cjs:248](<../../../../../electron/financial-service.test.cjs#L248>)
- [&lt;anonymous@164:95&gt;.&lt;anonymous@165:12&gt;](<yahoo-engine-contract.test.cjs.md#s-0fdaf6987be177bb>) — [electron/yahoo-engine-contract.test.cjs:172](<../../../../../electron/yahoo-engine-contract.test.cjs#L172>)
- [&lt;anonymous@164:95&gt;.&lt;anonymous@165:12&gt;](<yahoo-engine-contract.test.cjs.md#s-0fdaf6987be177bb>) — [electron/yahoo-engine-contract.test.cjs:191](<../../../../../electron/yahoo-engine-contract.test.cjs#L191>)

Unresolved / external call sites: 6.

- Map — external-or-dynamic-dispatch; [electron/financial-service.cjs:25](<../../../../../electron/financial-service.cjs#L25>)
- Number.isFinite — external-or-dynamic-dispatch; [electron/financial-service.cjs:26](<../../../../../electron/financial-service.cjs#L26>)
- Error — external-or-dynamic-dispatch; [electron/financial-service.cjs:27](<../../../../../electron/financial-service.cjs#L27>)
- Object.values(lifetimes).some — external-or-dynamic-dispatch; [electron/financial-service.cjs:36](<../../../../../electron/financial-service.cjs#L36>)
- Object.values — external-or-dynamic-dispatch; [electron/financial-service.cjs:36](<../../../../../electron/financial-service.cjs#L36>)
- Error — external-or-dynamic-dispatch; [electron/financial-service.cjs:40](<../../../../../electron/financial-service.cjs#L40>)

**Related tests / acceptance harnesses:**

- [electron/financial-service.test.cjs:140](<../../../../../electron/financial-service.test.cjs#L140>) — static-call-site; coverage not established.
- [electron/financial-service.test.cjs:148](<../../../../../electron/financial-service.test.cjs#L148>) — static-call-site; coverage not established.
- [electron/financial-service.test.cjs:242](<../../../../../electron/financial-service.test.cjs#L242>) — static-call-site; coverage not established.
- [electron/financial-service.test.cjs:248](<../../../../../electron/financial-service.test.cjs#L248>) — static-call-site; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:172](<../../../../../electron/yahoo-engine-contract.test.cjs#L172>) — static-call-site; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:191](<../../../../../electron/yahoo-engine-contract.test.cjs#L191>) — static-call-site; coverage not established.
- [electron/backend-identity.test.cjs:25](<../../../../../electron/backend-identity.test.cjs#L25>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:15](<../../../../../electron/financial-service.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:14](<../../../../../electron/yahoo-engine-contract.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:17](<../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L17>) — file-import-only; coverage not established.

<a id="s-b38366509a8bdb42"></a>

## createFinancialService.&lt;anonymous@15:11&gt;

[electron/financial-service.cjs:15](<../../../../../electron/financial-service.cjs#L15>) · ArrowFunction · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createFinancialService](<financial-service.cjs.md#s-f177f750334ab374>).

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

Unresolved / external call sites: 2.

- require("./engines/yahoo-financials/index.cjs").execute — signature-only-candidate; [electron/financial-service.cjs:16](<../../../../../electron/financial-service.cjs#L16>)
- require — module-loader; [electron/financial-service.cjs:16](<../../../../../electron/financial-service.cjs#L16>)

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:25](<../../../../../electron/backend-identity.test.cjs#L25>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:15](<../../../../../electron/financial-service.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:14](<../../../../../electron/yahoo-engine-contract.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:17](<../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L17>) — file-import-only; coverage not established.

<a id="s-d23ef868b957c18c"></a>

## createFinancialService.&lt;anonymous@37:7&gt;

[electron/financial-service.cjs:37](<../../../../../electron/financial-service.cjs#L37>) · ArrowFunction · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createFinancialService](<financial-service.cjs.md#s-f177f750334ab374>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- Number.isFinite — external-or-dynamic-dispatch; [electron/financial-service.cjs:37](<../../../../../electron/financial-service.cjs#L37>)

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:25](<../../../../../electron/backend-identity.test.cjs#L25>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:15](<../../../../../electron/financial-service.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:14](<../../../../../electron/yahoo-engine-contract.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:17](<../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L17>) — file-import-only; coverage not established.

<a id="s-a86ef1299cb55ce1"></a>

## createFinancialService.get

[electron/financial-service.cjs:42](<../../../../../electron/financial-service.cjs#L42>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Reads a validated snapshot or refreshes it, preserving successful data on provider failure and reporting corrupt caches.

Purpose evidence: jsdoc.

Lexical owner: [createFinancialService](<financial-service.cjs.md#s-f177f750334ab374>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| input | any | compiler-inferred | required |
| kind | any | compiler-inferred | required |
| force | boolean | compiler-inferred | optional, default present |
| range | any | compiler-inferred | required |
| grant | any | compiler-inferred | optional, default present |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [normalizeSymbol](<domains/indexing/ticker-syntax.cjs.md#s-fa1b2f32fc2cc10e>) — [electron/financial-service.cjs:43](<../../../../../electron/financial-service.cjs#L43>)
- [rejectSymlink](<core/persistence/json-store.cjs.md#s-aaddc8aab5c0d073>) — [electron/financial-service.cjs:71](<../../../../../electron/financial-service.cjs#L71>)
- [createFinancialService.get.refresh](<financial-service.cjs.md#s-3a52bab9a8fcaae5>) — [electron/financial-service.cjs:133](<../../../../../electron/financial-service.cjs#L133>)

**Called by (statically resolved):**

- [createFinancialService.get](<financial-service.cjs.md#s-e2161e05437c3fe9>) — [electron/financial-service.cjs:144](<../../../../../electron/financial-service.cjs#L144>)

Unresolved / external call sites: 14.

- &#91;"financials", "earnings", "quote", "history"&#93;.includes — external-or-dynamic-dispatch; [electron/financial-service.cjs:45](<../../../../../electron/financial-service.cjs#L45>)
- Error — external-or-dynamic-dispatch; [electron/financial-service.cjs:48](<../../../../../electron/financial-service.cjs#L48>)
- market.RANGES.includes — external-or-dynamic-dispatch; [electron/financial-service.cjs:51](<../../../../../electron/financial-service.cjs#L51>)
- Error — external-or-dynamic-dispatch; [electron/financial-service.cjs:54](<../../../../../electron/financial-service.cjs#L54>)
- fs.realpath — external-or-dynamic-dispatch; [electron/financial-service.cjs:61](<../../../../../electron/financial-service.cjs#L61>)
- createHash("sha256") .update(&#96;${symbol}:${kind}${range ? ":" + range : ""}&#96;) .digest — external-or-dynamic-dispatch; [electron/financial-service.cjs:66](<../../../../../electron/financial-service.cjs#L66>)
- createHash("sha256") .update — external-or-dynamic-dispatch; [electron/financial-service.cjs:66](<../../../../../electron/financial-service.cjs#L66>)
- createHash — external-or-dynamic-dispatch; [electron/financial-service.cjs:66](<../../../../../electron/financial-service.cjs#L66>)
- 6 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:25](<../../../../../electron/backend-identity.test.cjs#L25>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:15](<../../../../../electron/financial-service.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:14](<../../../../../electron/yahoo-engine-contract.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:17](<../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L17>) — file-import-only; coverage not established.

<a id="s-3a52bab9a8fcaae5"></a>

## createFinancialService.get.refresh

[electron/financial-service.cjs:79](<../../../../../electron/financial-service.cjs#L79>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Coalesces one disk read and provider refresh, with explicit stale fallback.

Purpose evidence: jsdoc.

Lexical owner: [createFinancialService.get](<financial-service.cjs.md#s-a86ef1299cb55ce1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [writeJson](<core/persistence/json-store.cjs.md#s-5030c6156f98dba1>) — [electron/financial-service.cjs:127](<../../../../../electron/financial-service.cjs#L127>)

**Called by (statically resolved):**

- [createFinancialService.get](<financial-service.cjs.md#s-a86ef1299cb55ce1>) — [electron/financial-service.cjs:133](<../../../../../electron/financial-service.cjs#L133>)

Unresolved / external call sites: 16.

- fs.stat — external-or-dynamic-dispatch; [electron/financial-service.cjs:83](<../../../../../electron/financial-service.cjs#L83>)
- stat.isFile — external-or-dynamic-dispatch; [electron/financial-service.cjs:84](<../../../../../electron/financial-service.cjs#L84>)
- Error — external-or-dynamic-dispatch; [electron/financial-service.cjs:85](<../../../../../electron/financial-service.cjs#L85>)
- schema.parse — external-or-dynamic-dispatch; [electron/financial-service.cjs:86](<../../../../../electron/financial-service.cjs#L86>)
- JSON.parse — external-or-dynamic-dispatch; [electron/financial-service.cjs:86](<../../../../../electron/financial-service.cjs#L86>)
- fs.readFile — external-or-dynamic-dispatch; [electron/financial-service.cjs:86](<../../../../../electron/financial-service.cjs#L86>)
- Error — external-or-dynamic-dispatch; [electron/financial-service.cjs:92](<../../../../../electron/financial-service.cjs#L92>)
- clock — external-or-dynamic-dispatch; [electron/financial-service.cjs:98](<../../../../../electron/financial-service.cjs#L98>)
- 8 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:25](<../../../../../electron/backend-identity.test.cjs#L25>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:15](<../../../../../electron/financial-service.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:14](<../../../../../electron/yahoo-engine-contract.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:17](<../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L17>) — file-import-only; coverage not established.

<a id="s-e2161e05437c3fe9"></a>

## createFinancialService.get

[electron/financial-service.cjs:143](<../../../../../electron/financial-service.cjs#L143>) · ArrowFunction · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createFinancialService](<financial-service.cjs.md#s-f177f750334ab374>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| input | any | compiler-inferred | required |
| kind | any | compiler-inferred | required |
| force | any | compiler-inferred | required |
| range | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [createFinancialService.get](<financial-service.cjs.md#s-a86ef1299cb55ce1>) — [electron/financial-service.cjs:144](<../../../../../electron/financial-service.cjs#L144>)

**Called by (statically resolved):**

- [&lt;anonymous@129:105&gt;.&lt;anonymous@130:16&gt;](<financial-service.test.cjs.md#s-35f540704963be33>) — [electron/financial-service.test.cjs:142](<../../../../../electron/financial-service.test.cjs#L142>)
- [&lt;anonymous@129:105&gt;.&lt;anonymous@130:16&gt;](<financial-service.test.cjs.md#s-35f540704963be33>) — [electron/financial-service.test.cjs:143](<../../../../../electron/financial-service.test.cjs#L143>)
- [&lt;anonymous@129:105&gt;.&lt;anonymous@130:16&gt;](<financial-service.test.cjs.md#s-35f540704963be33>) — [electron/financial-service.test.cjs:148](<../../../../../electron/financial-service.test.cjs#L148>)
- [&lt;anonymous@129:105&gt;.&lt;anonymous@130:16&gt;](<financial-service.test.cjs.md#s-35f540704963be33>) — [electron/financial-service.test.cjs:152](<../../../../../electron/financial-service.test.cjs#L152>)
- [&lt;anonymous@129:105&gt;.&lt;anonymous@130:16&gt;.&lt;anonymous@160:7&gt;](<financial-service.test.cjs.md#s-8e9db3e03442e64d>) — [electron/financial-service.test.cjs:160](<../../../../../electron/financial-service.test.cjs#L160>)
- [&lt;anonymous@231:108&gt;.&lt;anonymous@232:16&gt;](<financial-service.test.cjs.md#s-2ae0faefcd1d36b0>) — [electron/financial-service.test.cjs:242](<../../../../../electron/financial-service.test.cjs#L242>)
- [&lt;anonymous@231:108&gt;.&lt;anonymous@232:16&gt;](<financial-service.test.cjs.md#s-2ae0faefcd1d36b0>) — [electron/financial-service.test.cjs:254](<../../../../../electron/financial-service.test.cjs#L254>)
- [&lt;anonymous@164:95&gt;.&lt;anonymous@165:12&gt;](<yahoo-engine-contract.test.cjs.md#s-0fdaf6987be177bb>) — [electron/yahoo-engine-contract.test.cjs:177](<../../../../../electron/yahoo-engine-contract.test.cjs#L177>)
- [&lt;anonymous@164:95&gt;.&lt;anonymous@165:12&gt;](<yahoo-engine-contract.test.cjs.md#s-0fdaf6987be177bb>) — [electron/yahoo-engine-contract.test.cjs:179](<../../../../../electron/yahoo-engine-contract.test.cjs#L179>)
- [&lt;anonymous@164:95&gt;.&lt;anonymous@165:12&gt;](<yahoo-engine-contract.test.cjs.md#s-0fdaf6987be177bb>) — [electron/yahoo-engine-contract.test.cjs:182](<../../../../../electron/yahoo-engine-contract.test.cjs#L182>)
- [&lt;anonymous@164:95&gt;.&lt;anonymous@165:12&gt;](<yahoo-engine-contract.test.cjs.md#s-0fdaf6987be177bb>) — [electron/yahoo-engine-contract.test.cjs:183](<../../../../../electron/yahoo-engine-contract.test.cjs#L183>)
- [&lt;anonymous@164:95&gt;.&lt;anonymous@165:12&gt;](<yahoo-engine-contract.test.cjs.md#s-0fdaf6987be177bb>) — [electron/yahoo-engine-contract.test.cjs:185](<../../../../../electron/yahoo-engine-contract.test.cjs#L185>)
- [&lt;anonymous@164:95&gt;.&lt;anonymous@165:12&gt;](<yahoo-engine-contract.test.cjs.md#s-0fdaf6987be177bb>) — [electron/yahoo-engine-contract.test.cjs:187](<../../../../../electron/yahoo-engine-contract.test.cjs#L187>)
- [&lt;anonymous@164:95&gt;.&lt;anonymous@165:12&gt;](<yahoo-engine-contract.test.cjs.md#s-0fdaf6987be177bb>) — [electron/yahoo-engine-contract.test.cjs:197](<../../../../../electron/yahoo-engine-contract.test.cjs#L197>)
- [&lt;anonymous@164:95&gt;.&lt;anonymous@165:12&gt;](<yahoo-engine-contract.test.cjs.md#s-0fdaf6987be177bb>) — [electron/yahoo-engine-contract.test.cjs:201](<../../../../../electron/yahoo-engine-contract.test.cjs#L201>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/financial-service.test.cjs:142](<../../../../../electron/financial-service.test.cjs#L142>) — static-call-site; coverage not established.
- [electron/financial-service.test.cjs:143](<../../../../../electron/financial-service.test.cjs#L143>) — static-call-site; coverage not established.
- [electron/financial-service.test.cjs:148](<../../../../../electron/financial-service.test.cjs#L148>) — static-call-site; coverage not established.
- [electron/financial-service.test.cjs:152](<../../../../../electron/financial-service.test.cjs#L152>) — static-call-site; coverage not established.
- [electron/financial-service.test.cjs:160](<../../../../../electron/financial-service.test.cjs#L160>) — static-call-site; coverage not established.
- [electron/financial-service.test.cjs:242](<../../../../../electron/financial-service.test.cjs#L242>) — static-call-site; coverage not established.
- [electron/financial-service.test.cjs:254](<../../../../../electron/financial-service.test.cjs#L254>) — static-call-site; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:177](<../../../../../electron/yahoo-engine-contract.test.cjs#L177>) — static-call-site; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:179](<../../../../../electron/yahoo-engine-contract.test.cjs#L179>) — static-call-site; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:182](<../../../../../electron/yahoo-engine-contract.test.cjs#L182>) — static-call-site; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:183](<../../../../../electron/yahoo-engine-contract.test.cjs#L183>) — static-call-site; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:185](<../../../../../electron/yahoo-engine-contract.test.cjs#L185>) — static-call-site; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:187](<../../../../../electron/yahoo-engine-contract.test.cjs#L187>) — static-call-site; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:197](<../../../../../electron/yahoo-engine-contract.test.cjs#L197>) — static-call-site; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:201](<../../../../../electron/yahoo-engine-contract.test.cjs#L201>) — static-call-site; coverage not established.
- [electron/backend-identity.test.cjs:25](<../../../../../electron/backend-identity.test.cjs#L25>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:15](<../../../../../electron/financial-service.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:14](<../../../../../electron/yahoo-engine-contract.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:17](<../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L17>) — file-import-only; coverage not established.

<a id="s-471cf3c9305cefa6"></a>

## financialService

[electron/financial-service.cjs:149](<../../../../../electron/financial-service.cjs#L149>) · VariableDeclaration · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: financialService ([electron/financial-service.cjs:1](<../../../../../electron/financial-service.cjs#L1>)).

Lexical owner: [electron/financial-service.cjs](<financial-service.cjs.md#s-082ce4a754b97ec1>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:25](<../../../../../electron/backend-identity.test.cjs#L25>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:15](<../../../../../electron/financial-service.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:14](<../../../../../electron/yahoo-engine-contract.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:17](<../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L17>) — file-import-only; coverage not established.

<a id="s-2f73e01fe6b09018"></a>

## financialService.get

[electron/financial-service.cjs:151](<../../../../../electron/financial-service.cjs#L151>) · MethodDeclaration · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Admits package reads before serving a cached or receipt-backed provider snapshot.

Purpose evidence: jsdoc.

Lexical owner: [financialService](<financial-service.cjs.md#s-471cf3c9305cefa6>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| symbol | any | compiler-inferred | required |
| operation | any | compiler-inferred | required |
| force | any | compiler-inferred | required |
| range | any | compiler-inferred | required |
| entityId | any | compiler-inferred | required |
| stillApplied | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [admitYahoo](<domains/knowledge/yahoo-package.cjs.md#s-c061cc4e19880808>) — [electron/financial-service.cjs:152](<../../../../../electron/financial-service.cjs#L152>)

**Called by (statically resolved):**

- [getIndexedFinance](<financial-service.cjs.md#s-5cdbc96d6a69cfe2>) — [electron/financial-service.cjs:181](<../../../../../electron/financial-service.cjs#L181>)
- [getAuthorizedHistory](<financial-service.cjs.md#s-e00c905ba349043c>) — [electron/financial-service.cjs:222](<../../../../../electron/financial-service.cjs#L222>)

Unresolved / external call sites: 2.

- packageCache.getWithGrant — signature-only-candidate; [electron/financial-service.cjs:153](<../../../../../electron/financial-service.cjs#L153>)
- grant.verify — external-or-dynamic-dispatch; [electron/financial-service.cjs:161](<../../../../../electron/financial-service.cjs#L161>)

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:25](<../../../../../electron/backend-identity.test.cjs#L25>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:15](<../../../../../electron/financial-service.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:14](<../../../../../electron/yahoo-engine-contract.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:17](<../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L17>) — file-import-only; coverage not established.

<a id="s-8f8dd0c6e55aec18"></a>

## resolve

[electron/financial-service.cjs:166](<../../../../../electron/financial-service.cjs#L166>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Resolves an applied entity/menu/source triple. Draft-only, removed and forged declarations reject before provider access.

Purpose evidence: jsdoc.

Lexical owner: [electron/financial-service.cjs](<financial-service.cjs.md#s-082ce4a754b97ec1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| id | any | compiler-inferred | required |
| menuId | any | compiler-inferred | required |
| financeId | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [readKnowledgeIndex](<domains/knowledge/knowledge-store.cjs.md#s-c0c55e94f399d0ad>) — [electron/financial-service.cjs:168](<../../../../../electron/financial-service.cjs#L168>)

**Called by (statically resolved):**

- [getIndexedFinance](<financial-service.cjs.md#s-5cdbc96d6a69cfe2>) — [electron/financial-service.cjs:180](<../../../../../electron/financial-service.cjs#L180>)
- [getIndexedFinance.&lt;anonymous@188:5&gt;](<financial-service.cjs.md#s-5add077eafd5ce94>) — [electron/financial-service.cjs:189](<../../../../../electron/financial-service.cjs#L189>)
- [getIndexedFinance](<financial-service.cjs.md#s-5cdbc96d6a69cfe2>) — [electron/financial-service.cjs:193](<../../../../../electron/financial-service.cjs#L193>)

Unresolved / external call sites: 4.

- require — module-loader; [electron/financial-service.cjs:168](<../../../../../electron/financial-service.cjs#L168>)
- state.menus .find((menu) =&gt; menu.id === menuId) ?.finance?.find — external-or-dynamic-dispatch; [electron/financial-service.cjs:172](<../../../../../electron/financial-service.cjs#L172>)
- state.menus .find — external-or-dynamic-dispatch; [electron/financial-service.cjs:172](<../../../../../electron/financial-service.cjs#L172>)
- Error — external-or-dynamic-dispatch; [electron/financial-service.cjs:175](<../../../../../electron/financial-service.cjs#L175>)

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:25](<../../../../../electron/backend-identity.test.cjs#L25>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:15](<../../../../../electron/financial-service.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:14](<../../../../../electron/yahoo-engine-contract.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:17](<../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L17>) — file-import-only; coverage not established.

<a id="s-6594f78752632939"></a>

## resolve.&lt;anonymous@173:11&gt;

[electron/financial-service.cjs:173](<../../../../../electron/financial-service.cjs#L173>) · ArrowFunction · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [resolve](<financial-service.cjs.md#s-8f8dd0c6e55aec18>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| menu | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:25](<../../../../../electron/backend-identity.test.cjs#L25>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:15](<../../../../../electron/financial-service.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:14](<../../../../../electron/yahoo-engine-contract.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:17](<../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L17>) — file-import-only; coverage not established.

<a id="s-0ac7351917f75c04"></a>

## resolve.&lt;anonymous@174:21&gt;

[electron/financial-service.cjs:174](<../../../../../electron/financial-service.cjs#L174>) · ArrowFunction · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [resolve](<financial-service.cjs.md#s-8f8dd0c6e55aec18>).

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

- [electron/backend-identity.test.cjs:25](<../../../../../electron/backend-identity.test.cjs#L25>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:15](<../../../../../electron/financial-service.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:14](<../../../../../electron/yahoo-engine-contract.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:17](<../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L17>) — file-import-only; coverage not established.

<a id="s-5cdbc96d6a69cfe2"></a>

## getIndexedFinance

[electron/financial-service.cjs:179](<../../../../../electron/financial-service.cjs#L179>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Reauthorizes the applied declaration after asynchronous cache/provider work to detect concurrent changes.

Purpose evidence: jsdoc.

Exported as: getIndexedFinance ([electron/financial-service.cjs:1](<../../../../../electron/financial-service.cjs#L1>)).

Lexical owner: [electron/financial-service.cjs](<financial-service.cjs.md#s-082ce4a754b97ec1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| id | any | compiler-inferred | required |
| menuId | any | compiler-inferred | required |
| financeId | any | compiler-inferred | required |
| force | boolean | compiler-inferred | optional, default present |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [resolve](<financial-service.cjs.md#s-8f8dd0c6e55aec18>) — [electron/financial-service.cjs:180](<../../../../../electron/financial-service.cjs#L180>)
- [financialService.get](<financial-service.cjs.md#s-2f73e01fe6b09018>) — [electron/financial-service.cjs:181](<../../../../../electron/financial-service.cjs#L181>)
- [resolve](<financial-service.cjs.md#s-8f8dd0c6e55aec18>) — [electron/financial-service.cjs:193](<../../../../../electron/financial-service.cjs#L193>)

**Called by (statically resolved):**

- [registerWorldViewIpc."finance-index"](<core/ipc/worldview-ipc.cjs.md#s-306760bb207e3093>) — [electron/core/ipc/worldview-ipc.cjs:103](<../../../../../electron/core/ipc/worldview-ipc.cjs#L103>)
- [executeCapability](<engines/backend-identity/capability-registry.cjs.md#s-701c955440e5983d>) — [electron/engines/backend-identity/capability-registry.cjs:92](<../../../../../electron/engines/backend-identity/capability-registry.cjs#L92>)
- [&lt;anonymous@164:95&gt;.&lt;anonymous@165:16&gt;](<financial-service.test.cjs.md#s-9f14ebe7f6ca5195>) — [electron/financial-service.test.cjs:190](<../../../../../electron/financial-service.test.cjs#L190>)
- [&lt;anonymous@164:95&gt;.&lt;anonymous@165:16&gt;.&lt;anonymous@194:28&gt;](<financial-service.test.cjs.md#s-ab3941fec9326841>) — [electron/financial-service.test.cjs:195](<../../../../../electron/financial-service.test.cjs#L195>)
- [&lt;anonymous@164:95&gt;.&lt;anonymous@165:16&gt;.&lt;anonymous@210:9&gt;](<financial-service.test.cjs.md#s-be2d86bc91e857bf>) — [electron/financial-service.test.cjs:210](<../../../../../electron/financial-service.test.cjs#L210>)
- [main.verifyAll](<../scripts/acceptance/yahoo-package-lifecycle.cjs.md#s-53e46664c77822ce>) — [scripts/acceptance/yahoo-package-lifecycle.cjs:110](<../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L110>)

Unresolved / external call sites: 1.

- Error — external-or-dynamic-dispatch; [electron/financial-service.cjs:195](<../../../../../electron/financial-service.cjs#L195>)

**Related tests / acceptance harnesses:**

- [electron/financial-service.test.cjs:190](<../../../../../electron/financial-service.test.cjs#L190>) — static-call-site; coverage not established.
- [electron/financial-service.test.cjs:195](<../../../../../electron/financial-service.test.cjs#L195>) — static-call-site; coverage not established.
- [electron/financial-service.test.cjs:210](<../../../../../electron/financial-service.test.cjs#L210>) — static-call-site; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:110](<../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L110>) — static-call-site; coverage not established.
- [electron/backend-identity.test.cjs:25](<../../../../../electron/backend-identity.test.cjs#L25>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:15](<../../../../../electron/financial-service.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:14](<../../../../../electron/yahoo-engine-contract.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:17](<../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L17>) — file-import-only; coverage not established.

<a id="s-5add077eafd5ce94"></a>

## getIndexedFinance.&lt;anonymous@188:5&gt;

[electron/financial-service.cjs:188](<../../../../../electron/financial-service.cjs#L188>) · ArrowFunction · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [getIndexedFinance](<financial-service.cjs.md#s-5cdbc96d6a69cfe2>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [resolve](<financial-service.cjs.md#s-8f8dd0c6e55aec18>) — [electron/financial-service.cjs:189](<../../../../../electron/financial-service.cjs#L189>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:25](<../../../../../electron/backend-identity.test.cjs#L25>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:15](<../../../../../electron/financial-service.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:14](<../../../../../electron/yahoo-engine-contract.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:17](<../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L17>) — file-import-only; coverage not established.

<a id="s-e00c905ba349043c"></a>

## getAuthorizedHistory

[electron/financial-service.cjs:199](<../../../../../electron/financial-service.cjs#L199>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Resolves an applied price declaration or saved entity ticker before and after fetching history. Callers cannot supply a different symbol.

Purpose evidence: jsdoc.

Exported as: getAuthorizedHistory ([electron/financial-service.cjs:1](<../../../../../electron/financial-service.cjs#L1>)).

Lexical owner: [electron/financial-service.cjs](<financial-service.cjs.md#s-082ce4a754b97ec1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [getAuthorizedHistory.symbol](<financial-service.cjs.md#s-2e1b4d6265e710ac>) — [electron/financial-service.cjs:221](<../../../../../electron/financial-service.cjs#L221>)
- [financialService.get](<financial-service.cjs.md#s-2f73e01fe6b09018>) — [electron/financial-service.cjs:222](<../../../../../electron/financial-service.cjs#L222>)
- [getAuthorizedHistory.symbol](<financial-service.cjs.md#s-2e1b4d6265e710ac>) — [electron/financial-service.cjs:231](<../../../../../electron/financial-service.cjs#L231>)

**Called by (statically resolved):**

- [registerWorldViewIpc."price-history"](<core/ipc/worldview-ipc.cjs.md#s-06add91106333b75>) — [electron/core/ipc/worldview-ipc.cjs:100](<../../../../../electron/core/ipc/worldview-ipc.cjs#L100>)
- [&lt;anonymous@205:82&gt;.&lt;anonymous@206:12&gt;](<yahoo-engine-contract.test.cjs.md#s-12071c09bac274ad>) — [electron/yahoo-engine-contract.test.cjs:243](<../../../../../electron/yahoo-engine-contract.test.cjs#L243>)
- [&lt;anonymous@205:82&gt;.&lt;anonymous@206:12&gt;](<yahoo-engine-contract.test.cjs.md#s-12071c09bac274ad>) — [electron/yahoo-engine-contract.test.cjs:246](<../../../../../electron/yahoo-engine-contract.test.cjs#L246>)
- [&lt;anonymous@205:82&gt;.&lt;anonymous@206:12&gt;](<yahoo-engine-contract.test.cjs.md#s-12071c09bac274ad>) — [electron/yahoo-engine-contract.test.cjs:257](<../../../../../electron/yahoo-engine-contract.test.cjs#L257>)
- [main.verifyAll](<../scripts/acceptance/yahoo-package-lifecycle.cjs.md#s-53e46664c77822ce>) — [scripts/acceptance/yahoo-package-lifecycle.cjs:99](<../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L99>)

Unresolved / external call sites: 2.

- require — module-loader; [electron/financial-service.cjs:200](<../../../../../electron/financial-service.cjs#L200>)
- Error — external-or-dynamic-dispatch; [electron/financial-service.cjs:232](<../../../../../electron/financial-service.cjs#L232>)

**Related tests / acceptance harnesses:**

- [electron/yahoo-engine-contract.test.cjs:243](<../../../../../electron/yahoo-engine-contract.test.cjs#L243>) — static-call-site; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:246](<../../../../../electron/yahoo-engine-contract.test.cjs#L246>) — static-call-site; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:257](<../../../../../electron/yahoo-engine-contract.test.cjs#L257>) — static-call-site; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:99](<../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L99>) — static-call-site; coverage not established.
- [electron/backend-identity.test.cjs:25](<../../../../../electron/backend-identity.test.cjs#L25>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:15](<../../../../../electron/financial-service.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:14](<../../../../../electron/yahoo-engine-contract.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:17](<../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L17>) — file-import-only; coverage not established.

<a id="s-2e1b4d6265e710ac"></a>

## getAuthorizedHistory.symbol

[electron/financial-service.cjs:202](<../../../../../electron/financial-service.cjs#L202>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Rechecks the original entity declaration on every access, including after provider work.

Purpose evidence: jsdoc.

Lexical owner: [getAuthorizedHistory](<financial-service.cjs.md#s-e00c905ba349043c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [resolveIndexedPrice](<daily-price-service.cjs.md#s-bc6ef6804f3a2ab0>) — [electron/financial-service.cjs:204](<../../../../../electron/financial-service.cjs#L204>)
- [readKnowledgeIndex](<domains/knowledge/knowledge-store.cjs.md#s-c0c55e94f399d0ad>) — [electron/financial-service.cjs:211](<../../../../../electron/financial-service.cjs#L211>)
- [normalizeSymbol](<domains/indexing/ticker-syntax.cjs.md#s-fa1b2f32fc2cc10e>) — [electron/financial-service.cjs:219](<../../../../../electron/financial-service.cjs#L219>)

**Called by (statically resolved):**

- [getAuthorizedHistory](<financial-service.cjs.md#s-e00c905ba349043c>) — [electron/financial-service.cjs:221](<../../../../../electron/financial-service.cjs#L221>)
- [getAuthorizedHistory.&lt;anonymous@229:5&gt;](<financial-service.cjs.md#s-6ede96fd21f2c174>) — [electron/financial-service.cjs:229](<../../../../../electron/financial-service.cjs#L229>)
- [getAuthorizedHistory](<financial-service.cjs.md#s-e00c905ba349043c>) — [electron/financial-service.cjs:231](<../../../../../electron/financial-service.cjs#L231>)

Unresolved / external call sites: 2.

- require — module-loader; [electron/financial-service.cjs:211](<../../../../../electron/financial-service.cjs#L211>)
- Error — external-or-dynamic-dispatch; [electron/financial-service.cjs:216](<../../../../../electron/financial-service.cjs#L216>)

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:25](<../../../../../electron/backend-identity.test.cjs#L25>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:15](<../../../../../electron/financial-service.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:14](<../../../../../electron/yahoo-engine-contract.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:17](<../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L17>) — file-import-only; coverage not established.

<a id="s-6ede96fd21f2c174"></a>

## getAuthorizedHistory.&lt;anonymous@229:5&gt;

[electron/financial-service.cjs:229](<../../../../../electron/financial-service.cjs#L229>) · ArrowFunction · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [getAuthorizedHistory](<financial-service.cjs.md#s-e00c905ba349043c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [getAuthorizedHistory.symbol](<financial-service.cjs.md#s-2e1b4d6265e710ac>) — [electron/financial-service.cjs:229](<../../../../../electron/financial-service.cjs#L229>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:25](<../../../../../electron/backend-identity.test.cjs#L25>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:15](<../../../../../electron/financial-service.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:14](<../../../../../electron/yahoo-engine-contract.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:17](<../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L17>) — file-import-only; coverage not established.
