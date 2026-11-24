# features/worldview/world-search.tsx: symbols

[Atlas](<../../../../README.md>) / [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>) / [features/worldview/world-search.tsx:1](<../../../../../../features/worldview/world-search.tsx#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [features/worldview/world-search.tsx](<world-search.tsx.md#s-0ec0d6115014346c>) (Module)
- [resultExplanation](<world-search.tsx.md#s-53c2acf2d89dfe3e>) (FunctionDeclaration)
- [WorldSearch](<world-search.tsx.md#s-bafbdad2161989ce>) (FunctionDeclaration)
- [WorldSearch.&lt;anonymous@48:13&gt;](<world-search.tsx.md#s-30702f2280bce955>) (FunctionType)
- [WorldSearch.&lt;anonymous@72:75&gt;](<world-search.tsx.md#s-4ff4b5aea84dabba>) (ArrowFunction)
- [WorldSearch.searchPersistedMetadata](<world-search.tsx.md#s-951675a9af2b4ddc>) (FunctionExpression)
- [WorldSearch.searchPersistedMetadata.requestSearch](<world-search.tsx.md#s-fcacac8ba3cdd291>) (FunctionExpression)
- [WorldSearch.searchPersistedMetadata.cancelSearch](<world-search.tsx.md#s-1ab798a59b1d3e96>) (FunctionExpression)
- [WorldSearch.dismissOutside](<world-search.tsx.md#s-c1a0bc0e1a6a08aa>) (FunctionExpression)
- [WorldSearch.dismissOutside.closeOutside](<world-search.tsx.md#s-d4083659344d3474>) (FunctionDeclaration)
- [WorldSearch.dismissOutside.removeOutsideListener](<world-search.tsx.md#s-f2d6c4e95c105853>) (FunctionExpression)
- [WorldSearch.changeQuery](<world-search.tsx.md#s-ac14534e60d658ba>) (FunctionDeclaration)
- [WorldSearch.focusSearch](<world-search.tsx.md#s-ae297c4299db289a>) (FunctionDeclaration)
- [WorldSearch.clearSearch](<world-search.tsx.md#s-22f645eee1803bfa>) (FunctionDeclaration)
- [WorldSearch.chooseResult](<world-search.tsx.md#s-bfc696119af328aa>) (FunctionDeclaration)
- [WorldSearch.clickResult](<world-search.tsx.md#s-e162b054e5087eea>) (FunctionDeclaration)
- [WorldSearch.chooseSuggestion](<world-search.tsx.md#s-98631eb48b9fe09d>) (FunctionDeclaration)
- [WorldSearch.navigate](<world-search.tsx.md#s-87398cd6d3a7e942>) (FunctionDeclaration)
- [WorldSearch.revealActiveResult](<world-search.tsx.md#s-ba455552c734c4fc>) (FunctionExpression)
- [WorldSearch.retrySearch](<world-search.tsx.md#s-5adcedbebe0422e8>) (FunctionDeclaration)
- [WorldSearch.rebuildCache](<world-search.tsx.md#s-7246c3c99790de9a>) (FunctionDeclaration)
- [WorldSearch.&lt;anonymous@286:84&gt;](<world-search.tsx.md#s-7883f68bda9d2546>) (ArrowFunction)
- [WorldSearch.&lt;anonymous@317:118&gt;](<world-search.tsx.md#s-93c5e476bf18b7ca>) (ArrowFunction)
- [WorldSearch.&lt;anonymous@351:103&gt;](<world-search.tsx.md#s-d1f9e6dd12cb2a3a>) (ArrowFunction)

<a id="s-0ec0d6115014346c"></a>

## features/worldview/world-search.tsx

[features/worldview/world-search.tsx:1](<../../../../../../features/worldview/world-search.tsx#L1>) · Module · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-53c2acf2d89dfe3e"></a>

## resultExplanation

[features/worldview/world-search.tsx:27](<../../../../../../features/worldview/world-search.tsx#L27>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Explains a measured result using its actual matched field/count. Pure; never invents semantic relevance or a probability.

Purpose evidence: jsdoc.

Lexical owner: [features/worldview/world-search.tsx](<world-search.tsx.md#s-0ec0d6115014346c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| result | WorldTagSearchResult | annotation | required |
| query | string | annotation | required |

Returns: string (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [WorldSearch.&lt;anonymous@317:118&gt;](<world-search.tsx.md#s-93c5e476bf18b7ca>) — [features/worldview/world-search.tsx:336](<../../../../../../features/worldview/world-search.tsx#L336>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-bafbdad2161989ce"></a>

## WorldSearch

[features/worldview/world-search.tsx:41](<../../../../../../features/worldview/world-search.tsx#L41>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Presents compact persisted-tag search. Debounces queries, awaits metadata writes and discards stale responses after query/World changes.

Purpose evidence: jsdoc.

Exported as: WorldSearch ([features/worldview/world-search.tsx:1](<../../../../../../features/worldview/world-search.tsx#L1>)).

Lexical owner: [features/worldview/world-search.tsx](<world-search.tsx.md#s-0ec0d6115014346c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| {   vaultPath,   disabled,   onSelect, } | Readonly&lt;{ vaultPath: string &#124; null; disabled: boolean; onSelect: (id: string) =&gt; void; }&gt; | annotation | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 23.

- useRef — external-or-dynamic-dispatch; [features/worldview/world-search.tsx:50](<../../../../../../features/worldview/world-search.tsx#L50>)
- useRef — external-or-dynamic-dispatch; [features/worldview/world-search.tsx:51](<../../../../../../features/worldview/world-search.tsx#L51>)
- useState — external-or-dynamic-dispatch; [features/worldview/world-search.tsx:52](<../../../../../../features/worldview/world-search.tsx#L52>)
- useState — external-or-dynamic-dispatch; [features/worldview/world-search.tsx:53](<../../../../../../features/worldview/world-search.tsx#L53>)
- useState — external-or-dynamic-dispatch; [features/worldview/world-search.tsx:54](<../../../../../../features/worldview/world-search.tsx#L54>)
- useState — external-or-dynamic-dispatch; [features/worldview/world-search.tsx:55](<../../../../../../features/worldview/world-search.tsx#L55>)
- useState — external-or-dynamic-dispatch; [features/worldview/world-search.tsx:56](<../../../../../../features/worldview/world-search.tsx#L56>)
- useState — external-or-dynamic-dispatch; [features/worldview/world-search.tsx:57](<../../../../../../features/worldview/world-search.tsx#L57>)
- 15 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-30702f2280bce955"></a>

## WorldSearch.&lt;anonymous@48:13&gt;

[features/worldview/world-search.tsx:48](<../../../../../../features/worldview/world-search.tsx#L48>) · FunctionType · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [WorldSearch](<world-search.tsx.md#s-bafbdad2161989ce>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| id | string | annotation | required |

Returns: void (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-4ff4b5aea84dabba"></a>

## WorldSearch.&lt;anonymous@72:75&gt;

[features/worldview/world-search.tsx:72](<../../../../../../features/worldview/world-search.tsx#L72>) · ArrowFunction · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Invalidates UI results only for searchable metadata changes.

Purpose evidence: jsdoc.

Lexical owner: [WorldSearch](<world-search.tsx.md#s-bafbdad2161989ce>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| chip | any | compiler-inferred | required |

Returns: {} (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-951675a9af2b4ddc"></a>

## WorldSearch.searchPersistedMetadata

[features/worldview/world-search.tsx:80](<../../../../../../features/worldview/world-search.tsx#L80>) · FunctionExpression · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [WorldSearch](<world-search.tsx.md#s-bafbdad2161989ce>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: () =&gt; void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 7.

- setResponse — external-or-dynamic-dispatch; [features/worldview/world-search.tsx:82](<../../../../../../features/worldview/world-search.tsx#L82>)
- setError — external-or-dynamic-dispatch; [features/worldview/world-search.tsx:83](<../../../../../../features/worldview/world-search.tsx#L83>)
- setActiveIndex — external-or-dynamic-dispatch; [features/worldview/world-search.tsx:84](<../../../../../../features/worldview/world-search.tsx#L84>)
- setLoading — external-or-dynamic-dispatch; [features/worldview/world-search.tsx:86](<../../../../../../features/worldview/world-search.tsx#L86>)
- Boolean — external-or-dynamic-dispatch; [features/worldview/world-search.tsx:86](<../../../../../../features/worldview/world-search.tsx#L86>)
- setLoading — external-or-dynamic-dispatch; [features/worldview/world-search.tsx:89](<../../../../../../features/worldview/world-search.tsx#L89>)
- window.setTimeout — external-or-dynamic-dispatch; [features/worldview/world-search.tsx:90](<../../../../../../features/worldview/world-search.tsx#L90>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-fcacac8ba3cdd291"></a>

## WorldSearch.searchPersistedMetadata.requestSearch

[features/worldview/world-search.tsx:91](<../../../../../../features/worldview/world-search.tsx#L91>) · FunctionExpression · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Loads one debounced response; stale or unmounted requests cannot replace newer results.

Purpose evidence: jsdoc.

Lexical owner: [WorldSearch.searchPersistedMetadata](<world-search.tsx.md#s-951675a9af2b4ddc>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [flushWorldViewWrites](<chip-session.ts.md#s-14cfc10edca5869e>) — [features/worldview/world-search.tsx:93](<../../../../../../features/worldview/world-search.tsx#L93>)
- [requireWorldViewBridge](<chip-session.ts.md#s-724ceb52bd424e76>) — [features/worldview/world-search.tsx:95](<../../../../../../features/worldview/world-search.tsx#L95>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- requireWorldViewBridge().request — declaration-without-runtime-body; [features/worldview/world-search.tsx:95](<../../../../../../features/worldview/world-search.tsx#L95>)
- setResponse — external-or-dynamic-dispatch; [features/worldview/world-search.tsx:99](<../../../../../../features/worldview/world-search.tsx#L99>)
- setError — external-or-dynamic-dispatch; [features/worldview/world-search.tsx:102](<../../../../../../features/worldview/world-search.tsx#L102>)
- setLoading — external-or-dynamic-dispatch; [features/worldview/world-search.tsx:108](<../../../../../../features/worldview/world-search.tsx#L108>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-1ab798a59b1d3e96"></a>

## WorldSearch.searchPersistedMetadata.cancelSearch

[features/worldview/world-search.tsx:114](<../../../../../../features/worldview/world-search.tsx#L114>) · FunctionExpression · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Cancels pending debounce work and ignores in-flight results from an old query or Universe.

Purpose evidence: jsdoc.

Lexical owner: [WorldSearch.searchPersistedMetadata](<world-search.tsx.md#s-951675a9af2b4ddc>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- window.clearTimeout — external-or-dynamic-dispatch; [features/worldview/world-search.tsx:116](<../../../../../../features/worldview/world-search.tsx#L116>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-c1a0bc0e1a6a08aa"></a>

## WorldSearch.dismissOutside

[features/worldview/world-search.tsx:123](<../../../../../../features/worldview/world-search.tsx#L123>) · FunctionExpression · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [WorldSearch](<world-search.tsx.md#s-bafbdad2161989ce>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: () =&gt; void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- document.addEventListener — external-or-dynamic-dispatch; [features/worldview/world-search.tsx:132](<../../../../../../features/worldview/world-search.tsx#L132>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d4083659344d3474"></a>

## WorldSearch.dismissOutside.closeOutside

[features/worldview/world-search.tsx:125](<../../../../../../features/worldview/world-search.tsx#L125>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Closes results when pointer input leaves this floating search region.

Purpose evidence: jsdoc.

Lexical owner: [WorldSearch.dismissOutside](<world-search.tsx.md#s-c1a0bc0e1a6a08aa>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| event | PointerEvent | annotation | required |

Returns: void (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- rootRef.current?.contains — external-or-dynamic-dispatch; [features/worldview/world-search.tsx:128](<../../../../../../features/worldview/world-search.tsx#L128>)
- setOpen — external-or-dynamic-dispatch; [features/worldview/world-search.tsx:130](<../../../../../../features/worldview/world-search.tsx#L130>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-f2d6c4e95c105853"></a>

## WorldSearch.dismissOutside.removeOutsideListener

[features/worldview/world-search.tsx:134](<../../../../../../features/worldview/world-search.tsx#L134>) · FunctionExpression · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Releases the document listener when WorldView unmounts.

Purpose evidence: jsdoc.

Lexical owner: [WorldSearch.dismissOutside](<world-search.tsx.md#s-c1a0bc0e1a6a08aa>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- document.removeEventListener — external-or-dynamic-dispatch; [features/worldview/world-search.tsx:135](<../../../../../../features/worldview/world-search.tsx#L135>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-ac14534e60d658ba"></a>

## WorldSearch.changeQuery

[features/worldview/world-search.tsx:140](<../../../../../../features/worldview/world-search.tsx#L140>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Stages query text and opens the dropdown; matching remains in the local engine.

Purpose evidence: jsdoc.

Lexical owner: [WorldSearch](<world-search.tsx.md#s-bafbdad2161989ce>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| event | ChangeEvent&lt;HTMLInputElement&gt; | annotation | required |

Returns: void (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- setQuery — external-or-dynamic-dispatch; [features/worldview/world-search.tsx:141](<../../../../../../features/worldview/world-search.tsx#L141>)
- setOpen — external-or-dynamic-dispatch; [features/worldview/world-search.tsx:142](<../../../../../../features/worldview/world-search.tsx#L142>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-ae297c4299db289a"></a>

## WorldSearch.focusSearch

[features/worldview/world-search.tsx:145](<../../../../../../features/worldview/world-search.tsx#L145>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Reopens existing results when the user focuses a nonempty search.

Purpose evidence: jsdoc.

Lexical owner: [WorldSearch](<world-search.tsx.md#s-bafbdad2161989ce>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- query.trim — external-or-dynamic-dispatch; [features/worldview/world-search.tsx:146](<../../../../../../features/worldview/world-search.tsx#L146>)
- setOpen — external-or-dynamic-dispatch; [features/worldview/world-search.tsx:146](<../../../../../../features/worldview/world-search.tsx#L146>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-22f645eee1803bfa"></a>

## WorldSearch.clearSearch

[features/worldview/world-search.tsx:149](<../../../../../../features/worldview/world-search.tsx#L149>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Clears query/results visibility and restores input focus without moving the camera.

Purpose evidence: jsdoc.

Lexical owner: [WorldSearch](<world-search.tsx.md#s-bafbdad2161989ce>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- setQuery — external-or-dynamic-dispatch; [features/worldview/world-search.tsx:150](<../../../../../../features/worldview/world-search.tsx#L150>)
- setOpen — external-or-dynamic-dispatch; [features/worldview/world-search.tsx:151](<../../../../../../features/worldview/world-search.tsx#L151>)
- setActiveIndex — external-or-dynamic-dispatch; [features/worldview/world-search.tsx:152](<../../../../../../features/worldview/world-search.tsx#L152>)
- inputRef.current?.focus — external-or-dynamic-dispatch; [features/worldview/world-search.tsx:153](<../../../../../../features/worldview/world-search.tsx#L153>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-bfc696119af328aa"></a>

## WorldSearch.chooseResult

[features/worldview/world-search.tsx:156](<../../../../../../features/worldview/world-search.tsx#L156>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Resolves one existing entity through WorldView selection/camera controls; Knowledge Card opening stays a separate action.

Purpose evidence: jsdoc.

Lexical owner: [WorldSearch](<world-search.tsx.md#s-bafbdad2161989ce>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| id | string | annotation | required |

Returns: void (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [WorldSearch.clickResult](<world-search.tsx.md#s-e162b054e5087eea>) — [features/worldview/world-search.tsx:164](<../../../../../../features/worldview/world-search.tsx#L164>)
- [WorldSearch.navigate](<world-search.tsx.md#s-87398cd6d3a7e942>) — [features/worldview/world-search.tsx:189](<../../../../../../features/worldview/world-search.tsx#L189>)

Unresolved / external call sites: 3.

- onSelect — external-or-dynamic-dispatch; [features/worldview/world-search.tsx:157](<../../../../../../features/worldview/world-search.tsx#L157>)
- inputRef.current?.focus — external-or-dynamic-dispatch; [features/worldview/world-search.tsx:158](<../../../../../../features/worldview/world-search.tsx#L158>)
- setOpen — external-or-dynamic-dispatch; [features/worldview/world-search.tsx:159](<../../../../../../features/worldview/world-search.tsx#L159>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-e162b054e5087eea"></a>

## WorldSearch.clickResult

[features/worldview/world-search.tsx:162](<../../../../../../features/worldview/world-search.tsx#L162>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Selects a stable entity ID from a pointer-activated result.

Purpose evidence: jsdoc.

Lexical owner: [WorldSearch](<world-search.tsx.md#s-bafbdad2161989ce>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| event | MouseEvent&lt;HTMLButtonElement&gt; | annotation | required |

Returns: void (annotation). Implementation present.

**Calls (statically resolved):**

- [WorldSearch.chooseResult](<world-search.tsx.md#s-bfc696119af328aa>) — [features/worldview/world-search.tsx:164](<../../../../../../features/worldview/world-search.tsx#L164>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-98631eb48b9fe09d"></a>

## WorldSearch.chooseSuggestion

[features/worldview/world-search.tsx:167](<../../../../../../features/worldview/world-search.tsx#L167>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Accepts a complete lexical tag suggestion without splitting a multiword phrase.

Purpose evidence: jsdoc.

Lexical owner: [WorldSearch](<world-search.tsx.md#s-bafbdad2161989ce>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| event | MouseEvent&lt;HTMLButtonElement&gt; | annotation | required |

Returns: void (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- setQuery — external-or-dynamic-dispatch; [features/worldview/world-search.tsx:168](<../../../../../../features/worldview/world-search.tsx#L168>)
- setOpen — external-or-dynamic-dispatch; [features/worldview/world-search.tsx:169](<../../../../../../features/worldview/world-search.tsx#L169>)
- inputRef.current?.focus — external-or-dynamic-dispatch; [features/worldview/world-search.tsx:170](<../../../../../../features/worldview/world-search.tsx#L170>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-87398cd6d3a7e942"></a>

## WorldSearch.navigate

[features/worldview/world-search.tsx:173](<../../../../../../features/worldview/world-search.tsx#L173>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Supports result navigation, selection and Escape while keeping input events separate from canvas shortcuts.

Purpose evidence: jsdoc.

Lexical owner: [WorldSearch](<world-search.tsx.md#s-bafbdad2161989ce>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| event | KeyboardEvent&lt;HTMLInputElement&gt; | annotation | required |

Returns: void (annotation). Implementation present.

**Calls (statically resolved):**

- [WorldSearch.chooseResult](<world-search.tsx.md#s-bfc696119af328aa>) — [features/worldview/world-search.tsx:189](<../../../../../../features/worldview/world-search.tsx#L189>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 7.

- event.preventDefault — external-or-dynamic-dispatch; [features/worldview/world-search.tsx:176](<../../../../../../features/worldview/world-search.tsx#L176>)
- setOpen — external-or-dynamic-dispatch; [features/worldview/world-search.tsx:177](<../../../../../../features/worldview/world-search.tsx#L177>)
- event.preventDefault — external-or-dynamic-dispatch; [features/worldview/world-search.tsx:179](<../../../../../../features/worldview/world-search.tsx#L179>)
- setOpen — external-or-dynamic-dispatch; [features/worldview/world-search.tsx:180](<../../../../../../features/worldview/world-search.tsx#L180>)
- setActiveIndex — external-or-dynamic-dispatch; [features/worldview/world-search.tsx:182](<../../../../../../features/worldview/world-search.tsx#L182>)
- event.preventDefault — external-or-dynamic-dispatch; [features/worldview/world-search.tsx:188](<../../../../../../features/worldview/world-search.tsx#L188>)
- Math.max — external-or-dynamic-dispatch; [features/worldview/world-search.tsx:189](<../../../../../../features/worldview/world-search.tsx#L189>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-ba455552c734c4fc"></a>

## WorldSearch.revealActiveResult

[features/worldview/world-search.tsx:194](<../../../../../../features/worldview/world-search.tsx#L194>) · FunctionExpression · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [WorldSearch](<world-search.tsx.md#s-bafbdad2161989ce>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- rootRef.current ?.querySelector(&#96;#worldview-search-result-${activeIndex}&#96;) ?.scrollIntoView — external-or-dynamic-dispatch; [features/worldview/world-search.tsx:196](<../../../../../../features/worldview/world-search.tsx#L196>)
- rootRef.current ?.querySelector — external-or-dynamic-dispatch; [features/worldview/world-search.tsx:196](<../../../../../../features/worldview/world-search.tsx#L196>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-5adcedbebe0422e8"></a>

## WorldSearch.retrySearch

[features/worldview/world-search.tsx:203](<../../../../../../features/worldview/world-search.tsx#L203>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Retries an explicit failed query using the same persisted metadata boundary.

Purpose evidence: jsdoc.

Lexical owner: [WorldSearch](<world-search.tsx.md#s-bafbdad2161989ce>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- setRetry — external-or-dynamic-dispatch; [features/worldview/world-search.tsx:204](<../../../../../../features/worldview/world-search.tsx#L204>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-7246c3c99790de9a"></a>

## WorldSearch.rebuildCache

[features/worldview/world-search.tsx:207](<../../../../../../features/worldview/world-search.tsx#L207>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Recreates disposable cache data and refreshes results; failures are displayed in the dropdown.

Purpose evidence: jsdoc.

Lexical owner: [WorldSearch](<world-search.tsx.md#s-bafbdad2161989ce>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: Promise&lt;void&gt; (annotation). Implementation present.

**Calls (statically resolved):**

- [flushWorldViewWrites](<chip-session.ts.md#s-14cfc10edca5869e>) — [features/worldview/world-search.tsx:211](<../../../../../../features/worldview/world-search.tsx#L211>)
- [requireWorldViewBridge](<chip-session.ts.md#s-724ceb52bd424e76>) — [features/worldview/world-search.tsx:212](<../../../../../../features/worldview/world-search.tsx#L212>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- setRebuilding — external-or-dynamic-dispatch; [features/worldview/world-search.tsx:209](<../../../../../../features/worldview/world-search.tsx#L209>)
- requireWorldViewBridge().request — declaration-without-runtime-body; [features/worldview/world-search.tsx:212](<../../../../../../features/worldview/world-search.tsx#L212>)
- setRetry — external-or-dynamic-dispatch; [features/worldview/world-search.tsx:213](<../../../../../../features/worldview/world-search.tsx#L213>)
- setError — external-or-dynamic-dispatch; [features/worldview/world-search.tsx:215](<../../../../../../features/worldview/world-search.tsx#L215>)
- setRebuilding — external-or-dynamic-dispatch; [features/worldview/world-search.tsx:219](<../../../../../../features/worldview/world-search.tsx#L219>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-7883f68bda9d2546"></a>

## WorldSearch.&lt;anonymous@286:84&gt;

[features/worldview/world-search.tsx:286](<../../../../../../features/worldview/world-search.tsx#L286>) · ArrowFunction · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Offers measured lexical tags as complete query buttons.

Purpose evidence: jsdoc.

Lexical owner: [WorldSearch](<world-search.tsx.md#s-bafbdad2161989ce>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| suggestion | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-93c5e476bf18b7ca"></a>

## WorldSearch.&lt;anonymous@317:118&gt;

[features/worldview/world-search.tsx:317](<../../../../../../features/worldview/world-search.tsx#L317>) · ArrowFunction · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Displays a single stable entity with its measured matching explanation and all relevant tags.

Purpose evidence: jsdoc.

Lexical owner: [WorldSearch](<world-search.tsx.md#s-bafbdad2161989ce>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| result | any | compiler-inferred | required |
| index | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [resultExplanation](<world-search.tsx.md#s-53c2acf2d89dfe3e>) — [features/worldview/world-search.tsx:336](<../../../../../../features/worldview/world-search.tsx#L336>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- result.matchedTags.join — external-or-dynamic-dispatch; [features/worldview/world-search.tsx:340](<../../../../../../features/worldview/world-search.tsx#L340>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d1f9e6dd12cb2a3a"></a>

## WorldSearch.&lt;anonymous@351:103&gt;

[features/worldview/world-search.tsx:351](<../../../../../../features/worldview/world-search.tsx#L351>) · ArrowFunction · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Reports real cache/metadata failures while healthy in-memory search continues.

Purpose evidence: jsdoc.

Lexical owner: [WorldSearch](<world-search.tsx.md#s-bafbdad2161989ce>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| warning | any | compiler-inferred | required |
| index | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
