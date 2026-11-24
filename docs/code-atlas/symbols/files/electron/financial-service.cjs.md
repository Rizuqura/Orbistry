# electron/financial-service.cjs: symbols

[Atlas](<../../../README.md>) / [Built-in Engines and data adapters](<../../../modules/engines.md>) / [electron/financial-service.cjs:1](<../../../../../electron/financial-service.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/financial-service.cjs](<financial-service.cjs.md#s-082ce4a754b97ec1>) (Module)
- [createFinancialService](<financial-service.cjs.md#s-b66de62a4b41c1b8>) (FunctionDeclaration)
- [createFinancialService.&lt;anonymous@13:11&gt;](<financial-service.cjs.md#s-0f241bb786fdbd8c>) (ArrowFunction)
- [createFinancialService.&lt;anonymous@31:7&gt;](<financial-service.cjs.md#s-dd1eee35e03c51f7>) (ArrowFunction)
- [createFinancialService.get](<financial-service.cjs.md#s-370673d2451f52c8>) (FunctionDeclaration)
- [createFinancialService.get.refresh](<financial-service.cjs.md#s-b3c8575e9672b1aa>) (FunctionDeclaration)
- [financialService](<financial-service.cjs.md#s-6754561cc21192a2>) (VariableDeclaration)
- [resolve](<financial-service.cjs.md#s-7c53c7bf0ebb20eb>) (FunctionDeclaration)
- [resolve.&lt;anonymous@138:11&gt;](<financial-service.cjs.md#s-bf3121a8cf087763>) (ArrowFunction)
- [resolve.&lt;anonymous@139:21&gt;](<financial-service.cjs.md#s-8303b8b813335e86>) (ArrowFunction)
- [getIndexedFinance](<financial-service.cjs.md#s-c1c4f6362733e9d7>) (FunctionDeclaration)
- [getAuthorizedHistory](<financial-service.cjs.md#s-468568001e3c5ce7>) (FunctionDeclaration)
- [getAuthorizedHistory.symbol](<financial-service.cjs.md#s-a226ab5b25a63d89>) (FunctionDeclaration)

<a id="s-082ce4a754b97ec1"></a>

## electron/financial-service.cjs

[electron/financial-service.cjs:1](<../../../../../electron/financial-service.cjs#L1>) · Module · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 6.

- require — module-loader; [electron/financial-service.cjs:1](<../../../../../electron/financial-service.cjs#L1>)
- require — module-loader; [electron/financial-service.cjs:2](<../../../../../electron/financial-service.cjs#L2>)
- require — module-loader; [electron/financial-service.cjs:3](<../../../../../electron/financial-service.cjs#L3>)
- require — module-loader; [electron/financial-service.cjs:7](<../../../../../electron/financial-service.cjs#L7>)
- require — module-loader; [electron/financial-service.cjs:8](<../../../../../electron/financial-service.cjs#L8>)
- require — module-loader; [electron/financial-service.cjs:9](<../../../../../electron/financial-service.cjs#L9>)

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:25](<../../../../../electron/backend-identity.test.cjs#L25>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:15](<../../../../../electron/financial-service.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:14](<../../../../../electron/yahoo-engine-contract.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-b66de62a4b41c1b8"></a>

## createFinancialService

[electron/financial-service.cjs:12](<../../../../../electron/financial-service.cjs#L12>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Creates a bounded, coalesced Universe cache using the existing atomic JSON storage conventions. TTL defaults to 24 hours.

Purpose evidence: jsdoc.

Exported as: createFinancialService ([electron/financial-service.cjs:1](<../../../../../electron/financial-service.cjs#L1>)).

Lexical owner: [electron/financial-service.cjs](<financial-service.cjs.md#s-082ce4a754b97ec1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| {   fetch = (symbol, operation, range) =&gt;     engine.execute({ symbol, operation, ...(range ? { range } : {}) }),   clock = Date.now,   ttlMs = 86400000,   ttlByKind = {}, } | { fetch?: (symbol: any, operation: any, range: any) =&gt; unknown; clock?: any; ttlMs?: number; ttlByKind?: {}; } | compiler-inferred | optional, default present |

Returns: { get: (root: any, input: any, kind: any, force: boolean, range: any) =&gt; unknown; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [financialService](<financial-service.cjs.md#s-6754561cc21192a2>) — [electron/financial-service.cjs:129](<../../../../../electron/financial-service.cjs#L129>)
- [&lt;anonymous@129:105&gt;.&lt;anonymous@130:16&gt;](<financial-service.test.cjs.md#s-35f540704963be33>) — [electron/financial-service.test.cjs:140](<../../../../../electron/financial-service.test.cjs#L140>)
- [&lt;anonymous@129:105&gt;.&lt;anonymous@130:16&gt;](<financial-service.test.cjs.md#s-35f540704963be33>) — [electron/financial-service.test.cjs:148](<../../../../../electron/financial-service.test.cjs#L148>)
- [&lt;anonymous@231:108&gt;.&lt;anonymous@232:16&gt;](<financial-service.test.cjs.md#s-2ae0faefcd1d36b0>) — [electron/financial-service.test.cjs:242](<../../../../../electron/financial-service.test.cjs#L242>)
- [&lt;anonymous@231:108&gt;.&lt;anonymous@232:16&gt;](<financial-service.test.cjs.md#s-2ae0faefcd1d36b0>) — [electron/financial-service.test.cjs:248](<../../../../../electron/financial-service.test.cjs#L248>)
- [&lt;anonymous@164:95&gt;.&lt;anonymous@165:12&gt;](<yahoo-engine-contract.test.cjs.md#s-0fdaf6987be177bb>) — [electron/yahoo-engine-contract.test.cjs:172](<../../../../../electron/yahoo-engine-contract.test.cjs#L172>)
- [&lt;anonymous@164:95&gt;.&lt;anonymous@165:12&gt;](<yahoo-engine-contract.test.cjs.md#s-0fdaf6987be177bb>) — [electron/yahoo-engine-contract.test.cjs:191](<../../../../../electron/yahoo-engine-contract.test.cjs#L191>)

Unresolved / external call sites: 6.

- Map — external-or-dynamic-dispatch; [electron/financial-service.cjs:19](<../../../../../electron/financial-service.cjs#L19>)
- Number.isFinite — external-or-dynamic-dispatch; [electron/financial-service.cjs:20](<../../../../../electron/financial-service.cjs#L20>)
- Error — external-or-dynamic-dispatch; [electron/financial-service.cjs:21](<../../../../../electron/financial-service.cjs#L21>)
- Object.values(lifetimes).some — external-or-dynamic-dispatch; [electron/financial-service.cjs:30](<../../../../../electron/financial-service.cjs#L30>)
- Object.values — external-or-dynamic-dispatch; [electron/financial-service.cjs:30](<../../../../../electron/financial-service.cjs#L30>)
- Error — external-or-dynamic-dispatch; [electron/financial-service.cjs:34](<../../../../../electron/financial-service.cjs#L34>)

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

<a id="s-0f241bb786fdbd8c"></a>

## createFinancialService.&lt;anonymous@13:11&gt;

[electron/financial-service.cjs:13](<../../../../../electron/financial-service.cjs#L13>) · ArrowFunction · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createFinancialService](<financial-service.cjs.md#s-b66de62a4b41c1b8>).

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

- engine.execute — signature-only-candidate; [electron/financial-service.cjs:14](<../../../../../electron/financial-service.cjs#L14>)

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:25](<../../../../../electron/backend-identity.test.cjs#L25>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:15](<../../../../../electron/financial-service.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:14](<../../../../../electron/yahoo-engine-contract.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-dd1eee35e03c51f7"></a>

## createFinancialService.&lt;anonymous@31:7&gt;

[electron/financial-service.cjs:31](<../../../../../electron/financial-service.cjs#L31>) · ArrowFunction · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createFinancialService](<financial-service.cjs.md#s-b66de62a4b41c1b8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- Number.isFinite — external-or-dynamic-dispatch; [electron/financial-service.cjs:31](<../../../../../electron/financial-service.cjs#L31>)

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:25](<../../../../../electron/backend-identity.test.cjs#L25>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:15](<../../../../../electron/financial-service.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:14](<../../../../../electron/yahoo-engine-contract.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-370673d2451f52c8"></a>

## createFinancialService.get

[electron/financial-service.cjs:36](<../../../../../electron/financial-service.cjs#L36>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Reads a validated snapshot or refreshes it, preserving successful data on provider failure and reporting corrupt caches.

Purpose evidence: jsdoc.

Lexical owner: [createFinancialService](<financial-service.cjs.md#s-b66de62a4b41c1b8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| input | any | compiler-inferred | required |
| kind | any | compiler-inferred | required |
| force | boolean | compiler-inferred | optional, default present |
| range | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [rejectSymlink](<core/persistence/json-store.cjs.md#s-aaddc8aab5c0d073>) — [electron/financial-service.cjs:65](<../../../../../electron/financial-service.cjs#L65>)
- [createFinancialService.get.refresh](<financial-service.cjs.md#s-b3c8575e9672b1aa>) — [electron/financial-service.cjs:119](<../../../../../electron/financial-service.cjs#L119>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 14.

- engine.normalizeSymbol — signature-only-candidate; [electron/financial-service.cjs:37](<../../../../../electron/financial-service.cjs#L37>)
- &#91;"financials", "earnings", "quote", "history"&#93;.includes — external-or-dynamic-dispatch; [electron/financial-service.cjs:39](<../../../../../electron/financial-service.cjs#L39>)
- Error — external-or-dynamic-dispatch; [electron/financial-service.cjs:42](<../../../../../electron/financial-service.cjs#L42>)
- market.RANGES.includes — external-or-dynamic-dispatch; [electron/financial-service.cjs:45](<../../../../../electron/financial-service.cjs#L45>)
- Error — external-or-dynamic-dispatch; [electron/financial-service.cjs:48](<../../../../../electron/financial-service.cjs#L48>)
- fs.realpath — external-or-dynamic-dispatch; [electron/financial-service.cjs:55](<../../../../../electron/financial-service.cjs#L55>)
- createHash("sha256") .update(&#96;${symbol}:${kind}${range ? ":" + range : ""}&#96;) .digest — external-or-dynamic-dispatch; [electron/financial-service.cjs:60](<../../../../../electron/financial-service.cjs#L60>)
- createHash("sha256") .update — external-or-dynamic-dispatch; [electron/financial-service.cjs:60](<../../../../../electron/financial-service.cjs#L60>)
- 6 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:25](<../../../../../electron/backend-identity.test.cjs#L25>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:15](<../../../../../electron/financial-service.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:14](<../../../../../electron/yahoo-engine-contract.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-b3c8575e9672b1aa"></a>

## createFinancialService.get.refresh

[electron/financial-service.cjs:69](<../../../../../electron/financial-service.cjs#L69>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Coalesces one disk read and provider refresh, with explicit stale fallback.

Purpose evidence: jsdoc.

Lexical owner: [createFinancialService.get](<financial-service.cjs.md#s-370673d2451f52c8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [writeJson](<core/persistence/json-store.cjs.md#s-5030c6156f98dba1>) — [electron/financial-service.cjs:113](<../../../../../electron/financial-service.cjs#L113>)

**Called by (statically resolved):**

- [createFinancialService.get](<financial-service.cjs.md#s-370673d2451f52c8>) — [electron/financial-service.cjs:119](<../../../../../electron/financial-service.cjs#L119>)

Unresolved / external call sites: 15.

- fs.stat — external-or-dynamic-dispatch; [electron/financial-service.cjs:73](<../../../../../electron/financial-service.cjs#L73>)
- stat.isFile — external-or-dynamic-dispatch; [electron/financial-service.cjs:74](<../../../../../electron/financial-service.cjs#L74>)
- Error — external-or-dynamic-dispatch; [electron/financial-service.cjs:75](<../../../../../electron/financial-service.cjs#L75>)
- schema.parse — external-or-dynamic-dispatch; [electron/financial-service.cjs:76](<../../../../../electron/financial-service.cjs#L76>)
- JSON.parse — external-or-dynamic-dispatch; [electron/financial-service.cjs:76](<../../../../../electron/financial-service.cjs#L76>)
- fs.readFile — external-or-dynamic-dispatch; [electron/financial-service.cjs:76](<../../../../../electron/financial-service.cjs#L76>)
- Error — external-or-dynamic-dispatch; [electron/financial-service.cjs:82](<../../../../../electron/financial-service.cjs#L82>)
- clock — external-or-dynamic-dispatch; [electron/financial-service.cjs:88](<../../../../../electron/financial-service.cjs#L88>)
- 7 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:25](<../../../../../electron/backend-identity.test.cjs#L25>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:15](<../../../../../electron/financial-service.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:14](<../../../../../electron/yahoo-engine-contract.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-6754561cc21192a2"></a>

## financialService

[electron/financial-service.cjs:129](<../../../../../electron/financial-service.cjs#L129>) · VariableDeclaration · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: financialService ([electron/financial-service.cjs:1](<../../../../../electron/financial-service.cjs#L1>)).

Lexical owner: [electron/financial-service.cjs](<financial-service.cjs.md#s-082ce4a754b97ec1>).

**Calls (statically resolved):**

- [createFinancialService](<financial-service.cjs.md#s-b66de62a4b41c1b8>) — [electron/financial-service.cjs:129](<../../../../../electron/financial-service.cjs#L129>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:25](<../../../../../electron/backend-identity.test.cjs#L25>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:15](<../../../../../electron/financial-service.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:14](<../../../../../electron/yahoo-engine-contract.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-7c53c7bf0ebb20eb"></a>

## resolve

[electron/financial-service.cjs:131](<../../../../../electron/financial-service.cjs#L131>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

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

- [readKnowledgeIndex](<domains/knowledge/knowledge-store.cjs.md#s-c0c55e94f399d0ad>) — [electron/financial-service.cjs:133](<../../../../../electron/financial-service.cjs#L133>)

**Called by (statically resolved):**

- [getIndexedFinance](<financial-service.cjs.md#s-c1c4f6362733e9d7>) — [electron/financial-service.cjs:145](<../../../../../electron/financial-service.cjs#L145>)
- [getIndexedFinance](<financial-service.cjs.md#s-c1c4f6362733e9d7>) — [electron/financial-service.cjs:152](<../../../../../electron/financial-service.cjs#L152>)

Unresolved / external call sites: 4.

- require — module-loader; [electron/financial-service.cjs:133](<../../../../../electron/financial-service.cjs#L133>)
- state.menus .find((menu) =&gt; menu.id === menuId) ?.finance?.find — external-or-dynamic-dispatch; [electron/financial-service.cjs:137](<../../../../../electron/financial-service.cjs#L137>)
- state.menus .find — external-or-dynamic-dispatch; [electron/financial-service.cjs:137](<../../../../../electron/financial-service.cjs#L137>)
- Error — external-or-dynamic-dispatch; [electron/financial-service.cjs:140](<../../../../../electron/financial-service.cjs#L140>)

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:25](<../../../../../electron/backend-identity.test.cjs#L25>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:15](<../../../../../electron/financial-service.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:14](<../../../../../electron/yahoo-engine-contract.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-bf3121a8cf087763"></a>

## resolve.&lt;anonymous@138:11&gt;

[electron/financial-service.cjs:138](<../../../../../electron/financial-service.cjs#L138>) · ArrowFunction · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [resolve](<financial-service.cjs.md#s-7c53c7bf0ebb20eb>).

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

<a id="s-8303b8b813335e86"></a>

## resolve.&lt;anonymous@139:21&gt;

[electron/financial-service.cjs:139](<../../../../../electron/financial-service.cjs#L139>) · ArrowFunction · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [resolve](<financial-service.cjs.md#s-7c53c7bf0ebb20eb>).

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

<a id="s-c1c4f6362733e9d7"></a>

## getIndexedFinance

[electron/financial-service.cjs:144](<../../../../../electron/financial-service.cjs#L144>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

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

- [resolve](<financial-service.cjs.md#s-7c53c7bf0ebb20eb>) — [electron/financial-service.cjs:145](<../../../../../electron/financial-service.cjs#L145>)
- [resolve](<financial-service.cjs.md#s-7c53c7bf0ebb20eb>) — [electron/financial-service.cjs:152](<../../../../../electron/financial-service.cjs#L152>)

**Called by (statically resolved):**

- [registerWorldViewIpc."finance-index"](<core/ipc/worldview-ipc.cjs.md#s-bb277f82690073ea>) — [electron/core/ipc/worldview-ipc.cjs:89](<../../../../../electron/core/ipc/worldview-ipc.cjs#L89>)
- [executeCapability](<engines/backend-identity/capability-registry.cjs.md#s-701c955440e5983d>) — [electron/engines/backend-identity/capability-registry.cjs:92](<../../../../../electron/engines/backend-identity/capability-registry.cjs#L92>)
- [&lt;anonymous@164:95&gt;.&lt;anonymous@165:16&gt;](<financial-service.test.cjs.md#s-9f14ebe7f6ca5195>) — [electron/financial-service.test.cjs:190](<../../../../../electron/financial-service.test.cjs#L190>)
- [&lt;anonymous@164:95&gt;.&lt;anonymous@165:16&gt;.&lt;anonymous@194:28&gt;](<financial-service.test.cjs.md#s-ab3941fec9326841>) — [electron/financial-service.test.cjs:195](<../../../../../electron/financial-service.test.cjs#L195>)
- [&lt;anonymous@164:95&gt;.&lt;anonymous@165:16&gt;.&lt;anonymous@210:9&gt;](<financial-service.test.cjs.md#s-be2d86bc91e857bf>) — [electron/financial-service.test.cjs:210](<../../../../../electron/financial-service.test.cjs#L210>)

Unresolved / external call sites: 2.

- financialService.get — signature-only-candidate; [electron/financial-service.cjs:146](<../../../../../electron/financial-service.cjs#L146>)
- Error — external-or-dynamic-dispatch; [electron/financial-service.cjs:154](<../../../../../electron/financial-service.cjs#L154>)

**Related tests / acceptance harnesses:**

- [electron/financial-service.test.cjs:190](<../../../../../electron/financial-service.test.cjs#L190>) — static-call-site; coverage not established.
- [electron/financial-service.test.cjs:195](<../../../../../electron/financial-service.test.cjs#L195>) — static-call-site; coverage not established.
- [electron/financial-service.test.cjs:210](<../../../../../electron/financial-service.test.cjs#L210>) — static-call-site; coverage not established.
- [electron/backend-identity.test.cjs:25](<../../../../../electron/backend-identity.test.cjs#L25>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:15](<../../../../../electron/financial-service.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:14](<../../../../../electron/yahoo-engine-contract.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-468568001e3c5ce7"></a>

## getAuthorizedHistory

[electron/financial-service.cjs:158](<../../../../../electron/financial-service.cjs#L158>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

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

- [getAuthorizedHistory.symbol](<financial-service.cjs.md#s-a226ab5b25a63d89>) — [electron/financial-service.cjs:180](<../../../../../electron/financial-service.cjs#L180>)
- [getAuthorizedHistory.symbol](<financial-service.cjs.md#s-a226ab5b25a63d89>) — [electron/financial-service.cjs:188](<../../../../../electron/financial-service.cjs#L188>)

**Called by (statically resolved):**

- [registerWorldViewIpc."price-history"](<core/ipc/worldview-ipc.cjs.md#s-9fd66cf68647d9d1>) — [electron/core/ipc/worldview-ipc.cjs:86](<../../../../../electron/core/ipc/worldview-ipc.cjs#L86>)
- [&lt;anonymous@205:82&gt;.&lt;anonymous@206:12&gt;](<yahoo-engine-contract.test.cjs.md#s-12071c09bac274ad>) — [electron/yahoo-engine-contract.test.cjs:243](<../../../../../electron/yahoo-engine-contract.test.cjs#L243>)
- [&lt;anonymous@205:82&gt;.&lt;anonymous@206:12&gt;](<yahoo-engine-contract.test.cjs.md#s-12071c09bac274ad>) — [electron/yahoo-engine-contract.test.cjs:246](<../../../../../electron/yahoo-engine-contract.test.cjs#L246>)
- [&lt;anonymous@205:82&gt;.&lt;anonymous@206:12&gt;](<yahoo-engine-contract.test.cjs.md#s-12071c09bac274ad>) — [electron/yahoo-engine-contract.test.cjs:257](<../../../../../electron/yahoo-engine-contract.test.cjs#L257>)

Unresolved / external call sites: 3.

- require — module-loader; [electron/financial-service.cjs:159](<../../../../../electron/financial-service.cjs#L159>)
- financialService.get — signature-only-candidate; [electron/financial-service.cjs:181](<../../../../../electron/financial-service.cjs#L181>)
- Error — external-or-dynamic-dispatch; [electron/financial-service.cjs:189](<../../../../../electron/financial-service.cjs#L189>)

**Related tests / acceptance harnesses:**

- [electron/yahoo-engine-contract.test.cjs:243](<../../../../../electron/yahoo-engine-contract.test.cjs#L243>) — static-call-site; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:246](<../../../../../electron/yahoo-engine-contract.test.cjs#L246>) — static-call-site; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:257](<../../../../../electron/yahoo-engine-contract.test.cjs#L257>) — static-call-site; coverage not established.
- [electron/backend-identity.test.cjs:25](<../../../../../electron/backend-identity.test.cjs#L25>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:15](<../../../../../electron/financial-service.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:14](<../../../../../electron/yahoo-engine-contract.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-a226ab5b25a63d89"></a>

## getAuthorizedHistory.symbol

[electron/financial-service.cjs:161](<../../../../../electron/financial-service.cjs#L161>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Rechecks the original entity declaration on every access, including after provider work.

Purpose evidence: jsdoc.

Lexical owner: [getAuthorizedHistory](<financial-service.cjs.md#s-468568001e3c5ce7>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [resolveIndexedPrice](<daily-price-service.cjs.md#s-ed4eb674fb9b15e6>) — [electron/financial-service.cjs:163](<../../../../../electron/financial-service.cjs#L163>)
- [readKnowledgeIndex](<domains/knowledge/knowledge-store.cjs.md#s-c0c55e94f399d0ad>) — [electron/financial-service.cjs:170](<../../../../../electron/financial-service.cjs#L170>)

**Called by (statically resolved):**

- [getAuthorizedHistory](<financial-service.cjs.md#s-468568001e3c5ce7>) — [electron/financial-service.cjs:180](<../../../../../electron/financial-service.cjs#L180>)
- [getAuthorizedHistory](<financial-service.cjs.md#s-468568001e3c5ce7>) — [electron/financial-service.cjs:188](<../../../../../electron/financial-service.cjs#L188>)

Unresolved / external call sites: 3.

- require — module-loader; [electron/financial-service.cjs:170](<../../../../../electron/financial-service.cjs#L170>)
- Error — external-or-dynamic-dispatch; [electron/financial-service.cjs:175](<../../../../../electron/financial-service.cjs#L175>)
- engine.normalizeSymbol — signature-only-candidate; [electron/financial-service.cjs:178](<../../../../../electron/financial-service.cjs#L178>)

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:25](<../../../../../electron/backend-identity.test.cjs#L25>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:15](<../../../../../electron/financial-service.test.cjs#L15>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:14](<../../../../../electron/yahoo-engine-contract.test.cjs#L14>) — file-import-only; coverage not established.
