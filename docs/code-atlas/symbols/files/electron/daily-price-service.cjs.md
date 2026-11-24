# electron/daily-price-service.cjs: symbols

[Atlas](<../../../README.md>) / [Built-in Engines and data adapters](<../../../modules/engines.md>) / [electron/daily-price-service.cjs:1](<../../../../../electron/daily-price-service.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/daily-price-service.cjs](<daily-price-service.cjs.md#s-f632aa5796efbce8>) (Module)
- [cachePath](<daily-price-service.cjs.md#s-8ce737fc5829b668>) (FunctionDeclaration)
- [createDailyPriceService](<daily-price-service.cjs.md#s-79fd9f26e8210a5a>) (FunctionDeclaration)
- [createDailyPriceService.get](<daily-price-service.cjs.md#s-0efd3ea9af1b9469>) (FunctionDeclaration)
- [createDailyPriceService.get.refresh](<daily-price-service.cjs.md#s-070b615e3d76f489>) (FunctionDeclaration)
- [dailyPriceService](<daily-price-service.cjs.md#s-f6e7b2410292bd5b>) (VariableDeclaration)
- [getEntityPrice](<daily-price-service.cjs.md#s-d2b17dd7b406f45e>) (FunctionDeclaration)
- [resolveIndexedPrice](<daily-price-service.cjs.md#s-ed4eb674fb9b15e6>) (FunctionDeclaration)
- [resolveIndexedPrice.&lt;anonymous@124:11&gt;](<daily-price-service.cjs.md#s-6eacac4a8e5f9df5>) (ArrowFunction)
- [resolveIndexedPrice.&lt;anonymous@125:20&gt;](<daily-price-service.cjs.md#s-c885d4d5d79c8585>) (ArrowFunction)
- [getIndexedPrice](<daily-price-service.cjs.md#s-985657f4b0e3a350>) (FunctionDeclaration)

<a id="s-f632aa5796efbce8"></a>

## electron/daily-price-service.cjs

[electron/daily-price-service.cjs:1](<../../../../../electron/daily-price-service.cjs#L1>) · Module · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- require — module-loader; [electron/daily-price-service.cjs:1](<../../../../../electron/daily-price-service.cjs#L1>)
- require — module-loader; [electron/daily-price-service.cjs:2](<../../../../../electron/daily-price-service.cjs#L2>)
- require — module-loader; [electron/daily-price-service.cjs:3](<../../../../../electron/daily-price-service.cjs#L3>)
- require — module-loader; [electron/daily-price-service.cjs:7](<../../../../../electron/daily-price-service.cjs#L7>)
- require — module-loader; [electron/daily-price-service.cjs:8](<../../../../../electron/daily-price-service.cjs#L8>)

**Related tests / acceptance harnesses:**

- [electron/daily-price.test.cjs:11](<../../../../../electron/daily-price.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:23](<../../../../../electron/daily-price.test.cjs#L23>) — file-import-only; coverage not established.

<a id="s-8ce737fc5829b668"></a>

## cachePath

[electron/daily-price-service.cjs:11](<../../../../../electron/daily-price-service.cjs#L11>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Resolves an Engine-owned cache file under the active Universe, checking each parent for links.

Purpose evidence: jsdoc.

Lexical owner: [electron/daily-price-service.cjs](<daily-price-service.cjs.md#s-f632aa5796efbce8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| symbol | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [rejectSymlink](<core/persistence/json-store.cjs.md#s-aaddc8aab5c0d073>) — [electron/daily-price-service.cjs:20](<../../../../../electron/daily-price-service.cjs#L20>)

**Called by (statically resolved):**

- [createDailyPriceService.get](<daily-price-service.cjs.md#s-0efd3ea9af1b9469>) — [electron/daily-price-service.cjs:37](<../../../../../electron/daily-price-service.cjs#L37>)
- [createDailyPriceService.get.refresh](<daily-price-service.cjs.md#s-070b615e3d76f489>) — [electron/daily-price-service.cjs:86](<../../../../../electron/daily-price-service.cjs#L86>)

Unresolved / external call sites: 5.

- fs.realpath — external-or-dynamic-dispatch; [electron/daily-price-service.cjs:12](<../../../../../electron/daily-price-service.cjs#L12>)
- createHash("sha256").update(symbol).digest — external-or-dynamic-dispatch; [electron/daily-price-service.cjs:17](<../../../../../electron/daily-price-service.cjs#L17>)
- createHash("sha256").update — external-or-dynamic-dispatch; [electron/daily-price-service.cjs:17](<../../../../../electron/daily-price-service.cjs#L17>)
- createHash — external-or-dynamic-dispatch; [electron/daily-price-service.cjs:17](<../../../../../electron/daily-price-service.cjs#L17>)
- path.join — external-or-dynamic-dispatch; [electron/daily-price-service.cjs:19](<../../../../../electron/daily-price-service.cjs#L19>)

**Related tests / acceptance harnesses:**

- [electron/daily-price.test.cjs:11](<../../../../../electron/daily-price.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:23](<../../../../../electron/daily-price.test.cjs#L23>) — file-import-only; coverage not established.

<a id="s-79fd9f26e8210a5a"></a>

## createDailyPriceService

[electron/daily-price-service.cjs:26](<../../../../../electron/daily-price-service.cjs#L26>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Creates a content-validated disk/memory market cache with request coalescing. Network failures return explicitly stale saved prices when available.

Purpose evidence: jsdoc.

Exported as: createDailyPriceService ([electron/daily-price-service.cjs:1](<../../../../../electron/daily-price-service.cjs#L1>)).

Lexical owner: [electron/daily-price-service.cjs](<daily-price-service.cjs.md#s-f632aa5796efbce8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| {   price = engine.price,   clock = Date.now, } | { price?: (input: any, { previous, force }?: { previous?: any; force?: boolean; }) =&gt; unknown; clock?: any; } | compiler-inferred | optional, default present |

Returns: { get: (root: any, input: any, force?: boolean) =&gt; unknown; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [dailyPriceService](<daily-price-service.cjs.md#s-f6e7b2410292bd5b>) — [electron/daily-price-service.cjs:102](<../../../../../electron/daily-price-service.cjs#L102>)
- [&lt;anonymous@155:83&gt;.&lt;anonymous@156:22&gt;](<daily-price.test.cjs.md#s-a20736db4266bbaa>) — [electron/daily-price.test.cjs:160](<../../../../../electron/daily-price.test.cjs#L160>)
- [&lt;anonymous@155:83&gt;.&lt;anonymous@156:22&gt;](<daily-price.test.cjs.md#s-a20736db4266bbaa>) — [electron/daily-price.test.cjs:172](<../../../../../electron/daily-price.test.cjs#L172>)
- [&lt;anonymous@155:83&gt;.&lt;anonymous@156:22&gt;](<daily-price.test.cjs.md#s-a20736db4266bbaa>) — [electron/daily-price.test.cjs:193](<../../../../../electron/daily-price.test.cjs#L193>)

Unresolved / external call sites: 2.

- Map — external-or-dynamic-dispatch; [electron/daily-price-service.cjs:30](<../../../../../electron/daily-price-service.cjs#L30>)
- Map — external-or-dynamic-dispatch; [electron/daily-price-service.cjs:31](<../../../../../electron/daily-price-service.cjs#L31>)

**Related tests / acceptance harnesses:**

- [electron/daily-price.test.cjs:160](<../../../../../electron/daily-price.test.cjs#L160>) — static-call-site; coverage not established.
- [electron/daily-price.test.cjs:172](<../../../../../electron/daily-price.test.cjs#L172>) — static-call-site; coverage not established.
- [electron/daily-price.test.cjs:193](<../../../../../electron/daily-price.test.cjs#L193>) — static-call-site; coverage not established.
- [electron/daily-price.test.cjs:11](<../../../../../electron/daily-price.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:23](<../../../../../electron/daily-price.test.cjs#L23>) — file-import-only; coverage not established.

<a id="s-0efd3ea9af1b9469"></a>

## createDailyPriceService.get

[electron/daily-price-service.cjs:33](<../../../../../electron/daily-price-service.cjs#L33>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Loads a ticker's bounded cached snapshot or fetches current Yahoo data. Returns timestamps and explicit cache/failure state to the Portal.

Purpose evidence: jsdoc.

Lexical owner: [createDailyPriceService](<daily-price-service.cjs.md#s-79fd9f26e8210a5a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| input | any | compiler-inferred | required |
| force | boolean | compiler-inferred | optional, default present |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [cachePath](<daily-price-service.cjs.md#s-8ce737fc5829b668>) — [electron/daily-price-service.cjs:37](<../../../../../electron/daily-price-service.cjs#L37>)
- [createDailyPriceService.get.refresh](<daily-price-service.cjs.md#s-070b615e3d76f489>) — [electron/daily-price-service.cjs:92](<../../../../../electron/daily-price-service.cjs#L92>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 6.

- engine.normalizeSymbol — signature-only-candidate; [electron/daily-price-service.cjs:34](<../../../../../electron/daily-price-service.cjs#L34>)
- Error — external-or-dynamic-dispatch; [electron/daily-price-service.cjs:36](<../../../../../electron/daily-price-service.cjs#L36>)
- pending.has — external-or-dynamic-dispatch; [electron/daily-price-service.cjs:38](<../../../../../electron/daily-price-service.cjs#L38>)
- pending.get — external-or-dynamic-dispatch; [electron/daily-price-service.cjs:38](<../../../../../electron/daily-price-service.cjs#L38>)
- pending.set — external-or-dynamic-dispatch; [electron/daily-price-service.cjs:93](<../../../../../electron/daily-price-service.cjs#L93>)
- pending.delete — external-or-dynamic-dispatch; [electron/daily-price-service.cjs:97](<../../../../../electron/daily-price-service.cjs#L97>)

**Related tests / acceptance harnesses:**

- [electron/daily-price.test.cjs:11](<../../../../../electron/daily-price.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:23](<../../../../../electron/daily-price.test.cjs#L23>) — file-import-only; coverage not established.

<a id="s-070b615e3d76f489"></a>

## createDailyPriceService.get.refresh

[electron/daily-price-service.cjs:40](<../../../../../electron/daily-price-service.cjs#L40>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Performs one ticker refresh, surfacing disk failures and retaining valid cached data for offline viewing.

Purpose evidence: jsdoc.

Lexical owner: [createDailyPriceService.get](<daily-price-service.cjs.md#s-0efd3ea9af1b9469>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [writeJson](<core/persistence/json-store.cjs.md#s-5030c6156f98dba1>) — [electron/daily-price-service.cjs:86](<../../../../../electron/daily-price-service.cjs#L86>)
- [cachePath](<daily-price-service.cjs.md#s-8ce737fc5829b668>) — [electron/daily-price-service.cjs:86](<../../../../../electron/daily-price-service.cjs#L86>)

**Called by (statically resolved):**

- [createDailyPriceService.get](<daily-price-service.cjs.md#s-0efd3ea9af1b9469>) — [electron/daily-price-service.cjs:92](<../../../../../electron/daily-price-service.cjs#L92>)

Unresolved / external call sites: 19.

- memory.get — external-or-dynamic-dispatch; [electron/daily-price-service.cjs:41](<../../../../../electron/daily-price-service.cjs#L41>)
- fs.stat — external-or-dynamic-dispatch; [electron/daily-price-service.cjs:45](<../../../../../electron/daily-price-service.cjs#L45>)
- stats.isFile — external-or-dynamic-dispatch; [electron/daily-price-service.cjs:46](<../../../../../electron/daily-price-service.cjs#L46>)
- Error — external-or-dynamic-dispatch; [electron/daily-price-service.cjs:47](<../../../../../electron/daily-price-service.cjs#L47>)
- engine.snapshotSchema.parse — external-or-dynamic-dispatch; [electron/daily-price-service.cjs:48](<../../../../../electron/daily-price-service.cjs#L48>)
- JSON.parse — external-or-dynamic-dispatch; [electron/daily-price-service.cjs:49](<../../../../../electron/daily-price-service.cjs#L49>)
- fs.readFile — external-or-dynamic-dispatch; [electron/daily-price-service.cjs:49](<../../../../../electron/daily-price-service.cjs#L49>)
- Error — external-or-dynamic-dispatch; [electron/daily-price-service.cjs:52](<../../../../../electron/daily-price-service.cjs#L52>)
- 11 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/daily-price.test.cjs:11](<../../../../../electron/daily-price.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:23](<../../../../../electron/daily-price.test.cjs#L23>) — file-import-only; coverage not established.

<a id="s-f6e7b2410292bd5b"></a>

## dailyPriceService

[electron/daily-price-service.cjs:102](<../../../../../electron/daily-price-service.cjs#L102>) · VariableDeclaration · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: dailyPriceService ([electron/daily-price-service.cjs:1](<../../../../../electron/daily-price-service.cjs#L1>)).

Lexical owner: [electron/daily-price-service.cjs](<daily-price-service.cjs.md#s-f632aa5796efbce8>).

**Calls (statically resolved):**

- [createDailyPriceService](<daily-price-service.cjs.md#s-79fd9f26e8210a5a>) — [electron/daily-price-service.cjs:102](<../../../../../electron/daily-price-service.cjs#L102>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/daily-price.test.cjs:11](<../../../../../electron/daily-price.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:23](<../../../../../electron/daily-price.test.cjs#L23>) — file-import-only; coverage not established.

<a id="s-d2b17dd7b406f45e"></a>

## getEntityPrice

[electron/daily-price-service.cjs:105](<../../../../../electron/daily-price-service.cjs#L105>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Authorizes a saved entity ticker before and after asynchronous network/cache work, rejecting concurrent ticker changes.

Purpose evidence: jsdoc.

Exported as: getEntityPrice ([electron/daily-price-service.cjs:1](<../../../../../electron/daily-price-service.cjs#L1>)).

Lexical owner: [electron/daily-price-service.cjs](<daily-price-service.cjs.md#s-f632aa5796efbce8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| id | any | compiler-inferred | required |
| force | boolean | compiler-inferred | optional, default present |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [readKnowledgeIndex](<domains/knowledge/knowledge-store.cjs.md#s-c0c55e94f399d0ad>) — [electron/daily-price-service.cjs:107](<../../../../../electron/daily-price-service.cjs#L107>)
- [readKnowledgeIndex](<domains/knowledge/knowledge-store.cjs.md#s-c0c55e94f399d0ad>) — [electron/daily-price-service.cjs:111](<../../../../../electron/daily-price-service.cjs#L111>)

**Called by (statically resolved):**

- [registerWorldViewIpc."price-get"](<core/ipc/worldview-ipc.cjs.md#s-c26b7418c6ca4022>) — [electron/core/ipc/worldview-ipc.cjs:104](<../../../../../electron/core/ipc/worldview-ipc.cjs#L104>)

Unresolved / external call sites: 4.

- require — module-loader; [electron/daily-price-service.cjs:106](<../../../../../electron/daily-price-service.cjs#L106>)
- Error — external-or-dynamic-dispatch; [electron/daily-price-service.cjs:109](<../../../../../electron/daily-price-service.cjs#L109>)
- dailyPriceService.get — signature-only-candidate; [electron/daily-price-service.cjs:110](<../../../../../electron/daily-price-service.cjs#L110>)
- Error — external-or-dynamic-dispatch; [electron/daily-price-service.cjs:113](<../../../../../electron/daily-price-service.cjs#L113>)

**Related tests / acceptance harnesses:**

- [electron/daily-price.test.cjs:11](<../../../../../electron/daily-price.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:23](<../../../../../electron/daily-price.test.cjs#L23>) — file-import-only; coverage not established.

<a id="s-ed4eb674fb9b15e6"></a>

## resolveIndexedPrice

[electron/daily-price-service.cjs:117](<../../../../../electron/daily-price-service.cjs#L117>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Resolves one applied Yahoo source to its configured ticker. Unknown, draft-only and removed declarations reject before retrieval.

Purpose evidence: jsdoc.

Exported as: resolveIndexedPrice ([electron/daily-price-service.cjs:1](<../../../../../electron/daily-price-service.cjs#L1>)).

Lexical owner: [electron/daily-price-service.cjs](<daily-price-service.cjs.md#s-f632aa5796efbce8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| id | any | compiler-inferred | required |
| menuId | any | compiler-inferred | required |
| priceId | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [readKnowledgeIndex](<domains/knowledge/knowledge-store.cjs.md#s-c0c55e94f399d0ad>) — [electron/daily-price-service.cjs:119](<../../../../../electron/daily-price-service.cjs#L119>)

**Called by (statically resolved):**

- [getIndexedPrice](<daily-price-service.cjs.md#s-985657f4b0e3a350>) — [electron/daily-price-service.cjs:138](<../../../../../electron/daily-price-service.cjs#L138>)
- [getIndexedPrice](<daily-price-service.cjs.md#s-985657f4b0e3a350>) — [electron/daily-price-service.cjs:140](<../../../../../electron/daily-price-service.cjs#L140>)
- [getAuthorizedHistory.symbol](<financial-service.cjs.md#s-a226ab5b25a63d89>) — [electron/financial-service.cjs:163](<../../../../../electron/financial-service.cjs#L163>)

Unresolved / external call sites: 6.

- require — module-loader; [electron/daily-price-service.cjs:119](<../../../../../electron/daily-price-service.cjs#L119>)
- state.menus .find((menu) =&gt; menu.id === menuId) ?.prices?.find — external-or-dynamic-dispatch; [electron/daily-price-service.cjs:123](<../../../../../electron/daily-price-service.cjs#L123>)
- state.menus .find — external-or-dynamic-dispatch; [electron/daily-price-service.cjs:123](<../../../../../electron/daily-price-service.cjs#L123>)
- Error — external-or-dynamic-dispatch; [electron/daily-price-service.cjs:127](<../../../../../electron/daily-price-service.cjs#L127>)
- Error — external-or-dynamic-dispatch; [electron/daily-price-service.cjs:130](<../../../../../electron/daily-price-service.cjs#L130>)
- engine.normalizeSymbol — signature-only-candidate; [electron/daily-price-service.cjs:133](<../../../../../electron/daily-price-service.cjs#L133>)

**Related tests / acceptance harnesses:**

- [electron/daily-price.test.cjs:11](<../../../../../electron/daily-price.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:23](<../../../../../electron/daily-price.test.cjs#L23>) — file-import-only; coverage not established.

<a id="s-6eacac4a8e5f9df5"></a>

## resolveIndexedPrice.&lt;anonymous@124:11&gt;

[electron/daily-price-service.cjs:124](<../../../../../electron/daily-price-service.cjs#L124>) · ArrowFunction · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [resolveIndexedPrice](<daily-price-service.cjs.md#s-ed4eb674fb9b15e6>).

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

- [electron/daily-price.test.cjs:11](<../../../../../electron/daily-price.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:23](<../../../../../electron/daily-price.test.cjs#L23>) — file-import-only; coverage not established.

<a id="s-c885d4d5d79c8585"></a>

## resolveIndexedPrice.&lt;anonymous@125:20&gt;

[electron/daily-price-service.cjs:125](<../../../../../electron/daily-price-service.cjs#L125>) · ArrowFunction · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [resolveIndexedPrice](<daily-price-service.cjs.md#s-ed4eb674fb9b15e6>).

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

- [electron/daily-price.test.cjs:11](<../../../../../electron/daily-price.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:23](<../../../../../electron/daily-price.test.cjs#L23>) — file-import-only; coverage not established.

<a id="s-985657f4b0e3a350"></a>

## getIndexedPrice

[electron/daily-price-service.cjs:137](<../../../../../electron/daily-price-service.cjs#L137>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Retrieves an applied section's Yahoo source and reauthorizes it after asynchronous cache/network work. Concurrent removal or ticker changes reject.

Purpose evidence: jsdoc.

Exported as: getIndexedPrice ([electron/daily-price-service.cjs:1](<../../../../../electron/daily-price-service.cjs#L1>)).

Lexical owner: [electron/daily-price-service.cjs](<daily-price-service.cjs.md#s-f632aa5796efbce8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| id | any | compiler-inferred | required |
| menuId | any | compiler-inferred | required |
| priceId | any | compiler-inferred | required |
| force | boolean | compiler-inferred | optional, default present |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [resolveIndexedPrice](<daily-price-service.cjs.md#s-ed4eb674fb9b15e6>) — [electron/daily-price-service.cjs:138](<../../../../../electron/daily-price-service.cjs#L138>)
- [resolveIndexedPrice](<daily-price-service.cjs.md#s-ed4eb674fb9b15e6>) — [electron/daily-price-service.cjs:140](<../../../../../electron/daily-price-service.cjs#L140>)

**Called by (statically resolved):**

- [registerWorldViewIpc."price-index"](<core/ipc/worldview-ipc.cjs.md#s-e31a87a4d833cbfd>) — [electron/core/ipc/worldview-ipc.cjs:92](<../../../../../electron/core/ipc/worldview-ipc.cjs#L92>)
- [&lt;anonymous@265:68&gt;.&lt;anonymous@266:22&gt;](<daily-price.test.cjs.md#s-4ed15f29548b98c0>) — [electron/daily-price.test.cjs:286](<../../../../../electron/daily-price.test.cjs#L286>)
- [&lt;anonymous@265:68&gt;.&lt;anonymous@266:22&gt;](<daily-price.test.cjs.md#s-4ed15f29548b98c0>) — [electron/daily-price.test.cjs:295](<../../../../../electron/daily-price.test.cjs#L295>)
- [&lt;anonymous@265:68&gt;.&lt;anonymous@266:22&gt;](<daily-price.test.cjs.md#s-4ed15f29548b98c0>) — [electron/daily-price.test.cjs:299](<../../../../../electron/daily-price.test.cjs#L299>)
- [&lt;anonymous@265:68&gt;.&lt;anonymous@266:22&gt;](<daily-price.test.cjs.md#s-4ed15f29548b98c0>) — [electron/daily-price.test.cjs:303](<../../../../../electron/daily-price.test.cjs#L303>)
- [&lt;anonymous@265:68&gt;.&lt;anonymous@266:22&gt;](<daily-price.test.cjs.md#s-4ed15f29548b98c0>) — [electron/daily-price.test.cjs:313](<../../../../../electron/daily-price.test.cjs#L313>)
- [&lt;anonymous@265:68&gt;.&lt;anonymous@266:22&gt;](<daily-price.test.cjs.md#s-4ed15f29548b98c0>) — [electron/daily-price.test.cjs:330](<../../../../../electron/daily-price.test.cjs#L330>)
- [&lt;anonymous@265:68&gt;.&lt;anonymous@266:22&gt;](<daily-price.test.cjs.md#s-4ed15f29548b98c0>) — [electron/daily-price.test.cjs:345](<../../../../../electron/daily-price.test.cjs#L345>)
- [executeCapability](<engines/backend-identity/capability-registry.cjs.md#s-701c955440e5983d>) — [electron/engines/backend-identity/capability-registry.cjs:81](<../../../../../electron/engines/backend-identity/capability-registry.cjs#L81>)

Unresolved / external call sites: 2.

- dailyPriceService.get — signature-only-candidate; [electron/daily-price-service.cjs:139](<../../../../../electron/daily-price-service.cjs#L139>)
- Error — external-or-dynamic-dispatch; [electron/daily-price-service.cjs:141](<../../../../../electron/daily-price-service.cjs#L141>)

**Related tests / acceptance harnesses:**

- [electron/daily-price.test.cjs:286](<../../../../../electron/daily-price.test.cjs#L286>) — static-call-site; coverage not established.
- [electron/daily-price.test.cjs:295](<../../../../../electron/daily-price.test.cjs#L295>) — static-call-site; coverage not established.
- [electron/daily-price.test.cjs:299](<../../../../../electron/daily-price.test.cjs#L299>) — static-call-site; coverage not established.
- [electron/daily-price.test.cjs:303](<../../../../../electron/daily-price.test.cjs#L303>) — static-call-site; coverage not established.
- [electron/daily-price.test.cjs:313](<../../../../../electron/daily-price.test.cjs#L313>) — static-call-site; coverage not established.
- [electron/daily-price.test.cjs:330](<../../../../../electron/daily-price.test.cjs#L330>) — static-call-site; coverage not established.
- [electron/daily-price.test.cjs:345](<../../../../../electron/daily-price.test.cjs#L345>) — static-call-site; coverage not established.
- [electron/daily-price.test.cjs:11](<../../../../../electron/daily-price.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:23](<../../../../../electron/daily-price.test.cjs#L23>) — file-import-only; coverage not established.
