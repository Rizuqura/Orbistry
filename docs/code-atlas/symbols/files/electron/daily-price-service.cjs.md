# electron/daily-price-service.cjs: symbols

[Atlas](<../../../README.md>) / [Built-in Engines and data adapters](<../../../modules/engines.md>) / [electron/daily-price-service.cjs:1](<../../../../../electron/daily-price-service.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/daily-price-service.cjs](<daily-price-service.cjs.md#s-f632aa5796efbce8>) (Module)
- [cachePath](<daily-price-service.cjs.md#s-7a123fc4a165fdcb>) (FunctionDeclaration)
- [createDailyPriceService](<daily-price-service.cjs.md#s-20ea2e6e10b18679>) (FunctionDeclaration)
- [createDailyPriceService.&lt;anonymous@29:11&gt;](<daily-price-service.cjs.md#s-670a4201ee1b33e0>) (ArrowFunction)
- [createDailyPriceService.get](<daily-price-service.cjs.md#s-bd43ef8b0c2d2e48>) (FunctionDeclaration)
- [createDailyPriceService.get.refresh](<daily-price-service.cjs.md#s-574fd95317908e2f>) (FunctionDeclaration)
- [createDailyPriceService.get](<daily-price-service.cjs.md#s-1fec4ab2add44ebc>) (ArrowFunction)
- [dailyPriceService](<daily-price-service.cjs.md#s-854ae66d4cec4f38>) (VariableDeclaration)
- [dailyPriceService.get](<daily-price-service.cjs.md#s-4a666375398d6888>) (MethodDeclaration)
- [getEntityPrice](<daily-price-service.cjs.md#s-228713be9d1393e3>) (FunctionDeclaration)
- [getEntityPrice.&lt;anonymous@137:5&gt;](<daily-price-service.cjs.md#s-c585afe75536c141>) (ArrowFunction)
- [resolveIndexedPrice](<daily-price-service.cjs.md#s-bc6ef6804f3a2ab0>) (FunctionDeclaration)
- [resolveIndexedPrice.&lt;anonymous@154:11&gt;](<daily-price-service.cjs.md#s-e68c7b9bf29ac69d>) (ArrowFunction)
- [resolveIndexedPrice.&lt;anonymous@155:20&gt;](<daily-price-service.cjs.md#s-4312df7359d350bd>) (ArrowFunction)
- [getIndexedPrice](<daily-price-service.cjs.md#s-7b912d435b7535f2>) (FunctionDeclaration)
- [getIndexedPrice.&lt;anonymous@174:5&gt;](<daily-price-service.cjs.md#s-bf60b8055c50fbde>) (ArrowFunction)

<a id="s-f632aa5796efbce8"></a>

## electron/daily-price-service.cjs

[electron/daily-price-service.cjs:1](<../../../../../electron/daily-price-service.cjs#L1>) · Module · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

- [createDailyPriceService](<daily-price-service.cjs.md#s-20ea2e6e10b18679>) — [electron/daily-price-service.cjs:115](<../../../../../electron/daily-price-service.cjs#L115>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 7.

- require — module-loader; [electron/daily-price-service.cjs:1](<../../../../../electron/daily-price-service.cjs#L1>)
- require — module-loader; [electron/daily-price-service.cjs:2](<../../../../../electron/daily-price-service.cjs#L2>)
- require — module-loader; [electron/daily-price-service.cjs:3](<../../../../../electron/daily-price-service.cjs#L3>)
- require — module-loader; [electron/daily-price-service.cjs:7](<../../../../../electron/daily-price-service.cjs#L7>)
- require — module-loader; [electron/daily-price-service.cjs:8](<../../../../../electron/daily-price-service.cjs#L8>)
- require — module-loader; [electron/daily-price-service.cjs:9](<../../../../../electron/daily-price-service.cjs#L9>)
- require — module-loader; [electron/daily-price-service.cjs:10](<../../../../../electron/daily-price-service.cjs#L10>)

**Related tests / acceptance harnesses:**

- [electron/daily-price.test.cjs:11](<../../../../../electron/daily-price.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:23](<../../../../../electron/daily-price.test.cjs#L23>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:13](<../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L13>) — file-import-only; coverage not established.

<a id="s-7a123fc4a165fdcb"></a>

## cachePath

[electron/daily-price-service.cjs:13](<../../../../../electron/daily-price-service.cjs#L13>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Resolves an Engine-owned cache file under the active Universe, checking each parent for links.

Purpose evidence: jsdoc.

Lexical owner: [electron/daily-price-service.cjs](<daily-price-service.cjs.md#s-f632aa5796efbce8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| symbol | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [rejectSymlink](<core/persistence/json-store.cjs.md#s-aaddc8aab5c0d073>) — [electron/daily-price-service.cjs:22](<../../../../../electron/daily-price-service.cjs#L22>)

**Called by (statically resolved):**

- [createDailyPriceService.get](<daily-price-service.cjs.md#s-bd43ef8b0c2d2e48>) — [electron/daily-price-service.cjs:40](<../../../../../electron/daily-price-service.cjs#L40>)
- [createDailyPriceService.get.refresh](<daily-price-service.cjs.md#s-574fd95317908e2f>) — [electron/daily-price-service.cjs:95](<../../../../../electron/daily-price-service.cjs#L95>)

Unresolved / external call sites: 5.

- fs.realpath — external-or-dynamic-dispatch; [electron/daily-price-service.cjs:14](<../../../../../electron/daily-price-service.cjs#L14>)
- createHash("sha256").update(symbol).digest — external-or-dynamic-dispatch; [electron/daily-price-service.cjs:19](<../../../../../electron/daily-price-service.cjs#L19>)
- createHash("sha256").update — external-or-dynamic-dispatch; [electron/daily-price-service.cjs:19](<../../../../../electron/daily-price-service.cjs#L19>)
- createHash — external-or-dynamic-dispatch; [electron/daily-price-service.cjs:19](<../../../../../electron/daily-price-service.cjs#L19>)
- path.join — external-or-dynamic-dispatch; [electron/daily-price-service.cjs:21](<../../../../../electron/daily-price-service.cjs#L21>)

**Related tests / acceptance harnesses:**

- [electron/daily-price.test.cjs:11](<../../../../../electron/daily-price.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:23](<../../../../../electron/daily-price.test.cjs#L23>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:13](<../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L13>) — file-import-only; coverage not established.

<a id="s-20ea2e6e10b18679"></a>

## createDailyPriceService

[electron/daily-price-service.cjs:28](<../../../../../electron/daily-price-service.cjs#L28>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Creates a content-validated disk/memory market cache with request coalescing. Network failures return explicitly stale saved prices when available.

Purpose evidence: jsdoc.

Exported as: createDailyPriceService ([electron/daily-price-service.cjs:1](<../../../../../electron/daily-price-service.cjs#L1>)).

Lexical owner: [electron/daily-price-service.cjs](<daily-price-service.cjs.md#s-f632aa5796efbce8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| {   price = (...args) =&gt;     require("./engines/daily-price/index.cjs").price(...args),   clock = Date.now, } | { price?: (...args: {}) =&gt; unknown; clock?: any; } | compiler-inferred | optional, default present |

Returns: { get: (root: any, input: any, force: any) =&gt; unknown; getWithGrant: (root: any, input: any, force?: boolean, grant?: any) =&gt; unknown; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [electron/daily-price-service.cjs](<daily-price-service.cjs.md#s-f632aa5796efbce8>) — [electron/daily-price-service.cjs:115](<../../../../../electron/daily-price-service.cjs#L115>)
- [&lt;anonymous@155:83&gt;.&lt;anonymous@156:22&gt;](<daily-price.test.cjs.md#s-a20736db4266bbaa>) — [electron/daily-price.test.cjs:160](<../../../../../electron/daily-price.test.cjs#L160>)
- [&lt;anonymous@155:83&gt;.&lt;anonymous@156:22&gt;](<daily-price.test.cjs.md#s-a20736db4266bbaa>) — [electron/daily-price.test.cjs:172](<../../../../../electron/daily-price.test.cjs#L172>)
- [&lt;anonymous@155:83&gt;.&lt;anonymous@156:22&gt;](<daily-price.test.cjs.md#s-a20736db4266bbaa>) — [electron/daily-price.test.cjs:193](<../../../../../electron/daily-price.test.cjs#L193>)

Unresolved / external call sites: 2.

- Map — external-or-dynamic-dispatch; [electron/daily-price-service.cjs:33](<../../../../../electron/daily-price-service.cjs#L33>)
- Map — external-or-dynamic-dispatch; [electron/daily-price-service.cjs:34](<../../../../../electron/daily-price-service.cjs#L34>)

**Related tests / acceptance harnesses:**

- [electron/daily-price.test.cjs:160](<../../../../../electron/daily-price.test.cjs#L160>) — static-call-site; coverage not established.
- [electron/daily-price.test.cjs:172](<../../../../../electron/daily-price.test.cjs#L172>) — static-call-site; coverage not established.
- [electron/daily-price.test.cjs:193](<../../../../../electron/daily-price.test.cjs#L193>) — static-call-site; coverage not established.
- [electron/daily-price.test.cjs:11](<../../../../../electron/daily-price.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:23](<../../../../../electron/daily-price.test.cjs#L23>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:13](<../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L13>) — file-import-only; coverage not established.

<a id="s-670a4201ee1b33e0"></a>

## createDailyPriceService.&lt;anonymous@29:11&gt;

[electron/daily-price-service.cjs:29](<../../../../../electron/daily-price-service.cjs#L29>) · ArrowFunction · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createDailyPriceService](<daily-price-service.cjs.md#s-20ea2e6e10b18679>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| args | {} | compiler-inferred | required, rest |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- require("./engines/daily-price/index.cjs").price — signature-only-candidate; [electron/daily-price-service.cjs:30](<../../../../../electron/daily-price-service.cjs#L30>)
- require — module-loader; [electron/daily-price-service.cjs:30](<../../../../../electron/daily-price-service.cjs#L30>)

**Related tests / acceptance harnesses:**

- [electron/daily-price.test.cjs:11](<../../../../../electron/daily-price.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:23](<../../../../../electron/daily-price.test.cjs#L23>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:13](<../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L13>) — file-import-only; coverage not established.

<a id="s-bd43ef8b0c2d2e48"></a>

## createDailyPriceService.get

[electron/daily-price-service.cjs:36](<../../../../../electron/daily-price-service.cjs#L36>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Loads a ticker's bounded cached snapshot or fetches current Yahoo data. Returns timestamps and explicit cache/failure state to the Portal.

Purpose evidence: jsdoc.

Lexical owner: [createDailyPriceService](<daily-price-service.cjs.md#s-20ea2e6e10b18679>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| input | any | compiler-inferred | required |
| force | boolean | compiler-inferred | optional, default present |
| grant | any | compiler-inferred | optional, default present |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [normalizeSymbol](<domains/indexing/ticker-syntax.cjs.md#s-fa1b2f32fc2cc10e>) — [electron/daily-price-service.cjs:37](<../../../../../electron/daily-price-service.cjs#L37>)
- [cachePath](<daily-price-service.cjs.md#s-7a123fc4a165fdcb>) — [electron/daily-price-service.cjs:40](<../../../../../electron/daily-price-service.cjs#L40>)
- [createDailyPriceService.get.refresh](<daily-price-service.cjs.md#s-574fd95317908e2f>) — [electron/daily-price-service.cjs:101](<../../../../../electron/daily-price-service.cjs#L101>)

**Called by (statically resolved):**

- [createDailyPriceService.get](<daily-price-service.cjs.md#s-1fec4ab2add44ebc>) — [electron/daily-price-service.cjs:111](<../../../../../electron/daily-price-service.cjs#L111>)

Unresolved / external call sites: 6.

- Error — external-or-dynamic-dispatch; [electron/daily-price-service.cjs:39](<../../../../../electron/daily-price-service.cjs#L39>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/daily-price-service.cjs:43](<../../../../../electron/daily-price-service.cjs#L43>)
- pending.has — external-or-dynamic-dispatch; [electron/daily-price-service.cjs:45](<../../../../../electron/daily-price-service.cjs#L45>)
- pending.get — external-or-dynamic-dispatch; [electron/daily-price-service.cjs:45](<../../../../../electron/daily-price-service.cjs#L45>)
- pending.set — external-or-dynamic-dispatch; [electron/daily-price-service.cjs:102](<../../../../../electron/daily-price-service.cjs#L102>)
- pending.delete — external-or-dynamic-dispatch; [electron/daily-price-service.cjs:106](<../../../../../electron/daily-price-service.cjs#L106>)

**Related tests / acceptance harnesses:**

- [electron/daily-price.test.cjs:11](<../../../../../electron/daily-price.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:23](<../../../../../electron/daily-price.test.cjs#L23>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:13](<../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L13>) — file-import-only; coverage not established.

<a id="s-574fd95317908e2f"></a>

## createDailyPriceService.get.refresh

[electron/daily-price-service.cjs:47](<../../../../../electron/daily-price-service.cjs#L47>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Performs one ticker refresh, surfacing disk failures and retaining valid cached data for offline viewing.

Purpose evidence: jsdoc.

Lexical owner: [createDailyPriceService.get](<daily-price-service.cjs.md#s-bd43ef8b0c2d2e48>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [writeJson](<core/persistence/json-store.cjs.md#s-5030c6156f98dba1>) — [electron/daily-price-service.cjs:95](<../../../../../electron/daily-price-service.cjs#L95>)
- [cachePath](<daily-price-service.cjs.md#s-7a123fc4a165fdcb>) — [electron/daily-price-service.cjs:95](<../../../../../electron/daily-price-service.cjs#L95>)

**Called by (statically resolved):**

- [createDailyPriceService.get](<daily-price-service.cjs.md#s-bd43ef8b0c2d2e48>) — [electron/daily-price-service.cjs:101](<../../../../../electron/daily-price-service.cjs#L101>)

Unresolved / external call sites: 20.

- memory.get — external-or-dynamic-dispatch; [electron/daily-price-service.cjs:48](<../../../../../electron/daily-price-service.cjs#L48>)
- fs.stat — external-or-dynamic-dispatch; [electron/daily-price-service.cjs:52](<../../../../../electron/daily-price-service.cjs#L52>)
- stats.isFile — external-or-dynamic-dispatch; [electron/daily-price-service.cjs:53](<../../../../../electron/daily-price-service.cjs#L53>)
- Error — external-or-dynamic-dispatch; [electron/daily-price-service.cjs:54](<../../../../../electron/daily-price-service.cjs#L54>)
- engine.snapshotSchema.parse — external-or-dynamic-dispatch; [electron/daily-price-service.cjs:55](<../../../../../electron/daily-price-service.cjs#L55>)
- JSON.parse — external-or-dynamic-dispatch; [electron/daily-price-service.cjs:56](<../../../../../electron/daily-price-service.cjs#L56>)
- fs.readFile — external-or-dynamic-dispatch; [electron/daily-price-service.cjs:56](<../../../../../electron/daily-price-service.cjs#L56>)
- Error — external-or-dynamic-dispatch; [electron/daily-price-service.cjs:59](<../../../../../electron/daily-price-service.cjs#L59>)
- 12 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/daily-price.test.cjs:11](<../../../../../electron/daily-price.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:23](<../../../../../electron/daily-price.test.cjs#L23>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:13](<../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L13>) — file-import-only; coverage not established.

<a id="s-1fec4ab2add44ebc"></a>

## createDailyPriceService.get

[electron/daily-price-service.cjs:111](<../../../../../electron/daily-price-service.cjs#L111>) · ArrowFunction · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createDailyPriceService](<daily-price-service.cjs.md#s-20ea2e6e10b18679>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| input | any | compiler-inferred | required |
| force | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [createDailyPriceService.get](<daily-price-service.cjs.md#s-bd43ef8b0c2d2e48>) — [electron/daily-price-service.cjs:111](<../../../../../electron/daily-price-service.cjs#L111>)

**Called by (statically resolved):**

- [&lt;anonymous@155:83&gt;.&lt;anonymous@156:22&gt;](<daily-price.test.cjs.md#s-a20736db4266bbaa>) — [electron/daily-price.test.cjs:165](<../../../../../electron/daily-price.test.cjs#L165>)
- [&lt;anonymous@155:83&gt;.&lt;anonymous@156:22&gt;](<daily-price.test.cjs.md#s-a20736db4266bbaa>) — [electron/daily-price.test.cjs:166](<../../../../../electron/daily-price.test.cjs#L166>)
- [&lt;anonymous@155:83&gt;.&lt;anonymous@156:22&gt;](<daily-price.test.cjs.md#s-a20736db4266bbaa>) — [electron/daily-price.test.cjs:170](<../../../../../electron/daily-price.test.cjs#L170>)
- [&lt;anonymous@155:83&gt;.&lt;anonymous@156:22&gt;](<daily-price.test.cjs.md#s-a20736db4266bbaa>) — [electron/daily-price.test.cjs:178](<../../../../../electron/daily-price.test.cjs#L178>)
- [&lt;anonymous@155:83&gt;.&lt;anonymous@156:22&gt;](<daily-price.test.cjs.md#s-a20736db4266bbaa>) — [electron/daily-price.test.cjs:180](<../../../../../electron/daily-price.test.cjs#L180>)
- [&lt;anonymous@155:83&gt;.&lt;anonymous@156:22&gt;](<daily-price.test.cjs.md#s-a20736db4266bbaa>) — [electron/daily-price.test.cjs:184](<../../../../../electron/daily-price.test.cjs#L184>)
- [&lt;anonymous@155:83&gt;.&lt;anonymous@156:22&gt;](<daily-price.test.cjs.md#s-a20736db4266bbaa>) — [electron/daily-price.test.cjs:193](<../../../../../electron/daily-price.test.cjs#L193>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/daily-price.test.cjs:165](<../../../../../electron/daily-price.test.cjs#L165>) — static-call-site; coverage not established.
- [electron/daily-price.test.cjs:166](<../../../../../electron/daily-price.test.cjs#L166>) — static-call-site; coverage not established.
- [electron/daily-price.test.cjs:170](<../../../../../electron/daily-price.test.cjs#L170>) — static-call-site; coverage not established.
- [electron/daily-price.test.cjs:178](<../../../../../electron/daily-price.test.cjs#L178>) — static-call-site; coverage not established.
- [electron/daily-price.test.cjs:180](<../../../../../electron/daily-price.test.cjs#L180>) — static-call-site; coverage not established.
- [electron/daily-price.test.cjs:184](<../../../../../electron/daily-price.test.cjs#L184>) — static-call-site; coverage not established.
- [electron/daily-price.test.cjs:193](<../../../../../electron/daily-price.test.cjs#L193>) — static-call-site; coverage not established.
- [electron/daily-price.test.cjs:11](<../../../../../electron/daily-price.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:23](<../../../../../electron/daily-price.test.cjs#L23>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:13](<../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L13>) — file-import-only; coverage not established.

<a id="s-854ae66d4cec4f38"></a>

## dailyPriceService

[electron/daily-price-service.cjs:116](<../../../../../electron/daily-price-service.cjs#L116>) · VariableDeclaration · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: dailyPriceService ([electron/daily-price-service.cjs:1](<../../../../../electron/daily-price-service.cjs#L1>)).

Lexical owner: [electron/daily-price-service.cjs](<daily-price-service.cjs.md#s-f632aa5796efbce8>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/daily-price.test.cjs:11](<../../../../../electron/daily-price.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:23](<../../../../../electron/daily-price.test.cjs#L23>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:13](<../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L13>) — file-import-only; coverage not established.

<a id="s-4a666375398d6888"></a>

## dailyPriceService.get

[electron/daily-price-service.cjs:118](<../../../../../electron/daily-price-service.cjs#L118>) · MethodDeclaration · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Resolves the reviewed package before consulting the compatible on-disk cache.

Purpose evidence: jsdoc.

Lexical owner: [dailyPriceService](<daily-price-service.cjs.md#s-854ae66d4cec4f38>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| symbol | any | compiler-inferred | required |
| force | any | compiler-inferred | required |
| entityId | any | compiler-inferred | required |
| stillApplied | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [admitYahoo](<domains/knowledge/yahoo-package.cjs.md#s-c061cc4e19880808>) — [electron/daily-price-service.cjs:119](<../../../../../electron/daily-price-service.cjs#L119>)

**Called by (statically resolved):**

- [getEntityPrice](<daily-price-service.cjs.md#s-228713be9d1393e3>) — [electron/daily-price-service.cjs:132](<../../../../../electron/daily-price-service.cjs#L132>)
- [getIndexedPrice](<daily-price-service.cjs.md#s-7b912d435b7535f2>) — [electron/daily-price-service.cjs:169](<../../../../../electron/daily-price-service.cjs#L169>)

Unresolved / external call sites: 2.

- packageCache.getWithGrant — signature-only-candidate; [electron/daily-price-service.cjs:120](<../../../../../electron/daily-price-service.cjs#L120>)
- grant.verify — external-or-dynamic-dispatch; [electron/daily-price-service.cjs:121](<../../../../../electron/daily-price-service.cjs#L121>)

**Related tests / acceptance harnesses:**

- [electron/daily-price.test.cjs:11](<../../../../../electron/daily-price.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:23](<../../../../../electron/daily-price.test.cjs#L23>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:13](<../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L13>) — file-import-only; coverage not established.

<a id="s-228713be9d1393e3"></a>

## getEntityPrice

[electron/daily-price-service.cjs:127](<../../../../../electron/daily-price-service.cjs#L127>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

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

- [readKnowledgeIndex](<domains/knowledge/knowledge-store.cjs.md#s-c0c55e94f399d0ad>) — [electron/daily-price-service.cjs:129](<../../../../../electron/daily-price-service.cjs#L129>)
- [dailyPriceService.get](<daily-price-service.cjs.md#s-4a666375398d6888>) — [electron/daily-price-service.cjs:132](<../../../../../electron/daily-price-service.cjs#L132>)
- [readKnowledgeIndex](<domains/knowledge/knowledge-store.cjs.md#s-c0c55e94f399d0ad>) — [electron/daily-price-service.cjs:141](<../../../../../electron/daily-price-service.cjs#L141>)

**Called by (statically resolved):**

- [registerWorldViewIpc."price-get"](<core/ipc/worldview-ipc.cjs.md#s-1c86fc88133535cd>) — [electron/core/ipc/worldview-ipc.cjs:124](<../../../../../electron/core/ipc/worldview-ipc.cjs#L124>)

Unresolved / external call sites: 3.

- require — module-loader; [electron/daily-price-service.cjs:128](<../../../../../electron/daily-price-service.cjs#L128>)
- Error — external-or-dynamic-dispatch; [electron/daily-price-service.cjs:131](<../../../../../electron/daily-price-service.cjs#L131>)
- Error — external-or-dynamic-dispatch; [electron/daily-price-service.cjs:143](<../../../../../electron/daily-price-service.cjs#L143>)

**Related tests / acceptance harnesses:**

- [electron/daily-price.test.cjs:11](<../../../../../electron/daily-price.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:23](<../../../../../electron/daily-price.test.cjs#L23>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:13](<../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L13>) — file-import-only; coverage not established.

<a id="s-c585afe75536c141"></a>

## getEntityPrice.&lt;anonymous@137:5&gt;

[electron/daily-price-service.cjs:137](<../../../../../electron/daily-price-service.cjs#L137>) · ArrowFunction · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [getEntityPrice](<daily-price-service.cjs.md#s-228713be9d1393e3>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [readKnowledgeIndex](<domains/knowledge/knowledge-store.cjs.md#s-c0c55e94f399d0ad>) — [electron/daily-price-service.cjs:138](<../../../../../electron/daily-price-service.cjs#L138>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/daily-price.test.cjs:11](<../../../../../electron/daily-price.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:23](<../../../../../electron/daily-price.test.cjs#L23>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:13](<../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L13>) — file-import-only; coverage not established.

<a id="s-bc6ef6804f3a2ab0"></a>

## resolveIndexedPrice

[electron/daily-price-service.cjs:147](<../../../../../electron/daily-price-service.cjs#L147>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

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

- [readKnowledgeIndex](<domains/knowledge/knowledge-store.cjs.md#s-c0c55e94f399d0ad>) — [electron/daily-price-service.cjs:149](<../../../../../electron/daily-price-service.cjs#L149>)
- [normalizeSymbol](<domains/indexing/ticker-syntax.cjs.md#s-fa1b2f32fc2cc10e>) — [electron/daily-price-service.cjs:163](<../../../../../electron/daily-price-service.cjs#L163>)

**Called by (statically resolved):**

- [getIndexedPrice](<daily-price-service.cjs.md#s-7b912d435b7535f2>) — [electron/daily-price-service.cjs:168](<../../../../../electron/daily-price-service.cjs#L168>)
- [getIndexedPrice.&lt;anonymous@174:5&gt;](<daily-price-service.cjs.md#s-bf60b8055c50fbde>) — [electron/daily-price-service.cjs:175](<../../../../../electron/daily-price-service.cjs#L175>)
- [getIndexedPrice](<daily-price-service.cjs.md#s-7b912d435b7535f2>) — [electron/daily-price-service.cjs:177](<../../../../../electron/daily-price-service.cjs#L177>)
- [getAuthorizedHistory.symbol](<financial-service.cjs.md#s-2e1b4d6265e710ac>) — [electron/financial-service.cjs:204](<../../../../../electron/financial-service.cjs#L204>)

Unresolved / external call sites: 5.

- require — module-loader; [electron/daily-price-service.cjs:149](<../../../../../electron/daily-price-service.cjs#L149>)
- state.menus .find((menu) =&gt; menu.id === menuId) ?.prices?.find — external-or-dynamic-dispatch; [electron/daily-price-service.cjs:153](<../../../../../electron/daily-price-service.cjs#L153>)
- state.menus .find — external-or-dynamic-dispatch; [electron/daily-price-service.cjs:153](<../../../../../electron/daily-price-service.cjs#L153>)
- Error — external-or-dynamic-dispatch; [electron/daily-price-service.cjs:157](<../../../../../electron/daily-price-service.cjs#L157>)
- Error — external-or-dynamic-dispatch; [electron/daily-price-service.cjs:160](<../../../../../electron/daily-price-service.cjs#L160>)

**Related tests / acceptance harnesses:**

- [electron/daily-price.test.cjs:11](<../../../../../electron/daily-price.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:23](<../../../../../electron/daily-price.test.cjs#L23>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:13](<../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L13>) — file-import-only; coverage not established.

<a id="s-e68c7b9bf29ac69d"></a>

## resolveIndexedPrice.&lt;anonymous@154:11&gt;

[electron/daily-price-service.cjs:154](<../../../../../electron/daily-price-service.cjs#L154>) · ArrowFunction · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [resolveIndexedPrice](<daily-price-service.cjs.md#s-bc6ef6804f3a2ab0>).

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
- [scripts/acceptance/yahoo-package-lifecycle.cjs:13](<../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L13>) — file-import-only; coverage not established.

<a id="s-4312df7359d350bd"></a>

## resolveIndexedPrice.&lt;anonymous@155:20&gt;

[electron/daily-price-service.cjs:155](<../../../../../electron/daily-price-service.cjs#L155>) · ArrowFunction · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [resolveIndexedPrice](<daily-price-service.cjs.md#s-bc6ef6804f3a2ab0>).

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
- [scripts/acceptance/yahoo-package-lifecycle.cjs:13](<../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L13>) — file-import-only; coverage not established.

<a id="s-7b912d435b7535f2"></a>

## getIndexedPrice

[electron/daily-price-service.cjs:167](<../../../../../electron/daily-price-service.cjs#L167>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

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

- [resolveIndexedPrice](<daily-price-service.cjs.md#s-bc6ef6804f3a2ab0>) — [electron/daily-price-service.cjs:168](<../../../../../electron/daily-price-service.cjs#L168>)
- [dailyPriceService.get](<daily-price-service.cjs.md#s-4a666375398d6888>) — [electron/daily-price-service.cjs:169](<../../../../../electron/daily-price-service.cjs#L169>)
- [resolveIndexedPrice](<daily-price-service.cjs.md#s-bc6ef6804f3a2ab0>) — [electron/daily-price-service.cjs:177](<../../../../../electron/daily-price-service.cjs#L177>)

**Called by (statically resolved):**

- [registerWorldViewIpc."price-index"](<core/ipc/worldview-ipc.cjs.md#s-72e991ced4daeb8f>) — [electron/core/ipc/worldview-ipc.cjs:112](<../../../../../electron/core/ipc/worldview-ipc.cjs#L112>)
- [&lt;anonymous@265:68&gt;.&lt;anonymous@266:22&gt;](<daily-price.test.cjs.md#s-4ed15f29548b98c0>) — [electron/daily-price.test.cjs:286](<../../../../../electron/daily-price.test.cjs#L286>)
- [&lt;anonymous@265:68&gt;.&lt;anonymous@266:22&gt;](<daily-price.test.cjs.md#s-4ed15f29548b98c0>) — [electron/daily-price.test.cjs:295](<../../../../../electron/daily-price.test.cjs#L295>)
- [&lt;anonymous@265:68&gt;.&lt;anonymous@266:22&gt;](<daily-price.test.cjs.md#s-4ed15f29548b98c0>) — [electron/daily-price.test.cjs:299](<../../../../../electron/daily-price.test.cjs#L299>)
- [&lt;anonymous@265:68&gt;.&lt;anonymous@266:22&gt;](<daily-price.test.cjs.md#s-4ed15f29548b98c0>) — [electron/daily-price.test.cjs:303](<../../../../../electron/daily-price.test.cjs#L303>)
- [&lt;anonymous@265:68&gt;.&lt;anonymous@266:22&gt;](<daily-price.test.cjs.md#s-4ed15f29548b98c0>) — [electron/daily-price.test.cjs:313](<../../../../../electron/daily-price.test.cjs#L313>)
- [&lt;anonymous@265:68&gt;.&lt;anonymous@266:22&gt;](<daily-price.test.cjs.md#s-4ed15f29548b98c0>) — [electron/daily-price.test.cjs:330](<../../../../../electron/daily-price.test.cjs#L330>)
- [&lt;anonymous@265:68&gt;.&lt;anonymous@266:22&gt;](<daily-price.test.cjs.md#s-4ed15f29548b98c0>) — [electron/daily-price.test.cjs:345](<../../../../../electron/daily-price.test.cjs#L345>)
- [executeCapability](<engines/backend-identity/capability-registry.cjs.md#s-701c955440e5983d>) — [electron/engines/backend-identity/capability-registry.cjs:81](<../../../../../electron/engines/backend-identity/capability-registry.cjs#L81>)
- [main.price](<../scripts/acceptance/yahoo-package-lifecycle.cjs.md#s-a6820aaa27b481af>) — [scripts/acceptance/yahoo-package-lifecycle.cjs:61](<../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L61>)

Unresolved / external call sites: 1.

- Error — external-or-dynamic-dispatch; [electron/daily-price-service.cjs:178](<../../../../../electron/daily-price-service.cjs#L178>)

**Related tests / acceptance harnesses:**

- [electron/daily-price.test.cjs:286](<../../../../../electron/daily-price.test.cjs#L286>) — static-call-site; coverage not established.
- [electron/daily-price.test.cjs:295](<../../../../../electron/daily-price.test.cjs#L295>) — static-call-site; coverage not established.
- [electron/daily-price.test.cjs:299](<../../../../../electron/daily-price.test.cjs#L299>) — static-call-site; coverage not established.
- [electron/daily-price.test.cjs:303](<../../../../../electron/daily-price.test.cjs#L303>) — static-call-site; coverage not established.
- [electron/daily-price.test.cjs:313](<../../../../../electron/daily-price.test.cjs#L313>) — static-call-site; coverage not established.
- [electron/daily-price.test.cjs:330](<../../../../../electron/daily-price.test.cjs#L330>) — static-call-site; coverage not established.
- [electron/daily-price.test.cjs:345](<../../../../../electron/daily-price.test.cjs#L345>) — static-call-site; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:61](<../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L61>) — static-call-site; coverage not established.
- [electron/daily-price.test.cjs:11](<../../../../../electron/daily-price.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:23](<../../../../../electron/daily-price.test.cjs#L23>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:13](<../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L13>) — file-import-only; coverage not established.

<a id="s-bf60b8055c50fbde"></a>

## getIndexedPrice.&lt;anonymous@174:5&gt;

[electron/daily-price-service.cjs:174](<../../../../../electron/daily-price-service.cjs#L174>) · ArrowFunction · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [getIndexedPrice](<daily-price-service.cjs.md#s-7b912d435b7535f2>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [resolveIndexedPrice](<daily-price-service.cjs.md#s-bc6ef6804f3a2ab0>) — [electron/daily-price-service.cjs:175](<../../../../../electron/daily-price-service.cjs#L175>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/daily-price.test.cjs:11](<../../../../../electron/daily-price.test.cjs#L11>) — file-import-only; coverage not established.
- [electron/daily-price.test.cjs:23](<../../../../../electron/daily-price.test.cjs#L23>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:13](<../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L13>) — file-import-only; coverage not established.
