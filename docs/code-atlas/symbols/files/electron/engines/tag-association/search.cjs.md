# electron/engines/tag-association/search.cjs: symbols

[Atlas](<../../../../../README.md>) / [Built-in Engines and data adapters](<../../../../../modules/engines.md>) / [electron/engines/tag-association/search.cjs:1](<../../../../../../../electron/engines/tag-association/search.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/engines/tag-association/search.cjs](<search.cjs.md#s-3a9a55d18d8ba71e>) (Module)
- [searchEntities](<search.cjs.md#s-4b1bc7bc0802b0f4>) (FunctionDeclaration)
- [searchEntities.&lt;anonymous@12:65&gt;](<search.cjs.md#s-c9c0e7e0d1122c17>) (ArrowFunction)
- [searchEntities.&lt;anonymous@20:68&gt;](<search.cjs.md#s-02760ed1f5395a76>) (ArrowFunction)
- [searchEntities.&lt;anonymous@28:76&gt;](<search.cjs.md#s-48c4e48e33359864>) (ArrowFunction)
- [searchEntities.&lt;anonymous@33:71&gt;](<search.cjs.md#s-1ff72c4e96ec0ee3>) (ArrowFunction)
- [searchEntities.&lt;anonymous@38:99&gt;](<search.cjs.md#s-399df6e6e126cc70>) (ArrowFunction)
- [searchEntities.&lt;anonymous@49:84&gt;](<search.cjs.md#s-c6e2f5042b1cc473>) (ArrowFunction)
- [searchEntities.&lt;anonymous@99:61&gt;](<search.cjs.md#s-74d00096577f0837>) (ArrowFunction)
- [searchEntities.&lt;anonymous@103:80&gt;](<search.cjs.md#s-429b39d4e1f61fac>) (ArrowFunction)
- [searchEntities.&lt;anonymous@112:111&gt;](<search.cjs.md#s-ea22941215800f64>) (ArrowFunction)
- [searchEntities.&lt;anonymous@128:78&gt;](<search.cjs.md#s-381480638f50a665>) (ArrowFunction)

<a id="s-3a9a55d18d8ba71e"></a>

## electron/engines/tag-association/search.cjs

[electron/engines/tag-association/search.cjs:1](<../../../../../../../electron/engines/tag-association/search.cjs#L1>) · Module · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- require — module-loader; [electron/engines/tag-association/search.cjs:1](<../../../../../../../electron/engines/tag-association/search.cjs#L1>)
- require — module-loader; [electron/engines/tag-association/search.cjs:2](<../../../../../../../electron/engines/tag-association/search.cjs#L2>)

**Related tests / acceptance harnesses:**

- [electron/tag-association.test.cjs:8](<../../../../../../../electron/tag-association.test.cjs#L8>) — file-import-only; coverage not established.

<a id="s-4b1bc7bc0802b0f4"></a>

## searchEntities

[electron/engines/tag-association/search.cjs:5](<../../../../../../../electron/engines/tag-association/search.cjs#L5>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Searches one immutable World index. Exact tags precede name/partial lexical matches, followed by strongest-count associations, with no duplicate entities.

Purpose evidence: jsdoc.

Exported as: searchEntities ([electron/engines/tag-association/search.cjs:1](<../../../../../../../electron/engines/tag-association/search.cjs#L1>)).

Lexical owner: [electron/engines/tag-association/search.cjs](<search.cjs.md#s-3a9a55d18d8ba71e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| index | any | compiler-inferred | required |
| query | any | compiler-inferred | required |

Returns: { query: any; normalizedQuery: any; worldId: any; revision: any; results: any; suggestions: any; associations: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [normalizeTag](<normalizer.cjs.md#s-4ab62262e70889fe>) — [electron/engines/tag-association/search.cjs:6](<../../../../../../../electron/engines/tag-association/search.cjs#L6>)
- [getAssociationStatistics](<association.cjs.md#s-0f4930cf16ce31ba>) — [electron/engines/tag-association/search.cjs:8](<../../../../../../../electron/engines/tag-association/search.cjs#L8>)
- [normalizeTag](<normalizer.cjs.md#s-4ab62262e70889fe>) — [electron/engines/tag-association/search.cjs:57](<../../../../../../../electron/engines/tag-association/search.cjs#L57>)

**Called by (statically resolved):**

- [searchWorldTags](<../../domains/indexing/tag-association-service.cjs.md#s-84e1d1f7ed2f2bae>) — [electron/domains/indexing/tag-association-service.cjs:199](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L199>)
- [&lt;anonymous@53:85&gt;](<../../tag-association.test.cjs.md#s-0e041be6465ddb0f>) — [electron/tag-association.test.cjs:82](<../../../../../../../electron/tag-association.test.cjs#L82>)
- [&lt;anonymous@53:85&gt;](<../../tag-association.test.cjs.md#s-0e041be6465ddb0f>) — [electron/tag-association.test.cjs:115](<../../../../../../../electron/tag-association.test.cjs#L115>)
- [&lt;anonymous@53:85&gt;](<../../tag-association.test.cjs.md#s-0e041be6465ddb0f>) — [electron/tag-association.test.cjs:120](<../../../../../../../electron/tag-association.test.cjs#L120>)
- [&lt;anonymous@53:85&gt;](<../../tag-association.test.cjs.md#s-0e041be6465ddb0f>) — [electron/tag-association.test.cjs:121](<../../../../../../../electron/tag-association.test.cjs#L121>)
- [&lt;anonymous@53:85&gt;](<../../tag-association.test.cjs.md#s-0e041be6465ddb0f>) — [electron/tag-association.test.cjs:122](<../../../../../../../electron/tag-association.test.cjs#L122>)
- [&lt;anonymous@53:85&gt;](<../../tag-association.test.cjs.md#s-0e041be6465ddb0f>) — [electron/tag-association.test.cjs:123](<../../../../../../../electron/tag-association.test.cjs#L123>)
- [&lt;anonymous@53:85&gt;](<../../tag-association.test.cjs.md#s-0e041be6465ddb0f>) — [electron/tag-association.test.cjs:125](<../../../../../../../electron/tag-association.test.cjs#L125>)
- [&lt;anonymous@53:85&gt;](<../../tag-association.test.cjs.md#s-0e041be6465ddb0f>) — [electron/tag-association.test.cjs:130](<../../../../../../../electron/tag-association.test.cjs#L130>)
- [&lt;anonymous@53:85&gt;](<../../tag-association.test.cjs.md#s-0e041be6465ddb0f>) — [electron/tag-association.test.cjs:131](<../../../../../../../electron/tag-association.test.cjs#L131>)

Unresolved / external call sites: 15.

- Map — external-or-dynamic-dispatch; [electron/engines/tag-association/search.cjs:10](<../../../../../../../electron/engines/tag-association/search.cjs#L10>)
- associations.map — external-or-dynamic-dispatch; [electron/engines/tag-association/search.cjs:11](<../../../../../../../electron/engines/tag-association/search.cjs#L11>)
- index.tagFrequencies.filter — external-or-dynamic-dispatch; [electron/engines/tag-association/search.cjs:19](<../../../../../../../electron/engines/tag-association/search.cjs#L19>)
- entity.tags.find — external-or-dynamic-dispatch; [electron/engines/tag-association/search.cjs:27](<../../../../../../../electron/engines/tag-association/search.cjs#L27>)
- entity.tags.filter — external-or-dynamic-dispatch; [electron/engines/tag-association/search.cjs:32](<../../../../../../../electron/engines/tag-association/search.cjs#L32>)
- entity.tags .map( /** Resolves measured evidence while preserving this entity's assigned tag spelling. */ ( tag, ) =&gt; { const association = associationMap.get(tag.normalized); retu — external-or-dynamic-dispatch; [electron/engines/tag-association/search.cjs:36](<../../../../../../../electron/engines/tag-association/search.cjs#L36>)
- entity.tags .map( /** Resolves measured evidence while preserving this entity's assigned tag spelling. */ ( tag, ) =&gt; { const association = associationMap.get(tag.normalized); retu — external-or-dynamic-dispatch; [electron/engines/tag-association/search.cjs:36](<../../../../../../../electron/engines/tag-association/search.cjs#L36>)
- entity.tags .map — external-or-dynamic-dispatch; [electron/engines/tag-association/search.cjs:36](<../../../../../../../electron/engines/tag-association/search.cjs#L36>)
- 7 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/tag-association.test.cjs:82](<../../../../../../../electron/tag-association.test.cjs#L82>) — static-call-site; coverage not established.
- [electron/tag-association.test.cjs:115](<../../../../../../../electron/tag-association.test.cjs#L115>) — static-call-site; coverage not established.
- [electron/tag-association.test.cjs:120](<../../../../../../../electron/tag-association.test.cjs#L120>) — static-call-site; coverage not established.
- [electron/tag-association.test.cjs:121](<../../../../../../../electron/tag-association.test.cjs#L121>) — static-call-site; coverage not established.
- [electron/tag-association.test.cjs:122](<../../../../../../../electron/tag-association.test.cjs#L122>) — static-call-site; coverage not established.
- [electron/tag-association.test.cjs:123](<../../../../../../../electron/tag-association.test.cjs#L123>) — static-call-site; coverage not established.
- [electron/tag-association.test.cjs:125](<../../../../../../../electron/tag-association.test.cjs#L125>) — static-call-site; coverage not established.
- [electron/tag-association.test.cjs:130](<../../../../../../../electron/tag-association.test.cjs#L130>) — static-call-site; coverage not established.
- [electron/tag-association.test.cjs:131](<../../../../../../../electron/tag-association.test.cjs#L131>) — static-call-site; coverage not established.
- [electron/tag-association.test.cjs:8](<../../../../../../../electron/tag-association.test.cjs#L8>) — file-import-only; coverage not established.

<a id="s-c9c0e7e0d1122c17"></a>

## searchEntities.&lt;anonymous@12:65&gt;

[electron/engines/tag-association/search.cjs:12](<../../../../../../../electron/engines/tag-association/search.cjs#L12>) · ArrowFunction · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Preserves association ranking for entity evidence.

Purpose evidence: jsdoc.

Lexical owner: [searchEntities](<search.cjs.md#s-4b1bc7bc0802b0f4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: {} (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/tag-association.test.cjs:8](<../../../../../../../electron/tag-association.test.cjs#L8>) — file-import-only; coverage not established.

<a id="s-02760ed1f5395a76"></a>

## searchEntities.&lt;anonymous@20:68&gt;

[electron/engines/tag-association/search.cjs:20](<../../../../../../../electron/engines/tag-association/search.cjs#L20>) · ArrowFunction · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Offers phrase-preserving lexical typing assistance.

Purpose evidence: jsdoc.

Lexical owner: [searchEntities](<search.cjs.md#s-4b1bc7bc0802b0f4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- value.tag.includes — external-or-dynamic-dispatch; [electron/engines/tag-association/search.cjs:21](<../../../../../../../electron/engines/tag-association/search.cjs#L21>)

**Related tests / acceptance harnesses:**

- [electron/tag-association.test.cjs:8](<../../../../../../../electron/tag-association.test.cjs#L8>) — file-import-only; coverage not established.

<a id="s-48c4e48e33359864"></a>

## searchEntities.&lt;anonymous@28:76&gt;

[electron/engines/tag-association/search.cjs:28](<../../../../../../../electron/engines/tag-association/search.cjs#L28>) · ArrowFunction · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Matches the entire normalized phrase before partial lookup.

Purpose evidence: jsdoc.

Lexical owner: [searchEntities](<search.cjs.md#s-4b1bc7bc0802b0f4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| tag | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/tag-association.test.cjs:8](<../../../../../../../electron/tag-association.test.cjs#L8>) — file-import-only; coverage not established.

<a id="s-1ff72c4e96ec0ee3"></a>

## searchEntities.&lt;anonymous@33:71&gt;

[electron/engines/tag-association/search.cjs:33](<../../../../../../../electron/engines/tag-association/search.cjs#L33>) · ArrowFunction · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Matches contiguous phrases without splitting keywords.

Purpose evidence: jsdoc.

Lexical owner: [searchEntities](<search.cjs.md#s-4b1bc7bc0802b0f4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| tag | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- tag.normalized.includes — external-or-dynamic-dispatch; [electron/engines/tag-association/search.cjs:34](<../../../../../../../electron/engines/tag-association/search.cjs#L34>)

**Related tests / acceptance harnesses:**

- [electron/tag-association.test.cjs:8](<../../../../../../../electron/tag-association.test.cjs#L8>) — file-import-only; coverage not established.

<a id="s-399df6e6e126cc70"></a>

## searchEntities.&lt;anonymous@38:99&gt;

[electron/engines/tag-association/search.cjs:38](<../../../../../../../electron/engines/tag-association/search.cjs#L38>) · ArrowFunction · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Resolves measured evidence while preserving this entity's assigned tag spelling.

Purpose evidence: jsdoc.

Lexical owner: [searchEntities](<search.cjs.md#s-4b1bc7bc0802b0f4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| tag | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- associationMap.get — external-or-dynamic-dispatch; [electron/engines/tag-association/search.cjs:41](<../../../../../../../electron/engines/tag-association/search.cjs#L41>)

**Related tests / acceptance harnesses:**

- [electron/tag-association.test.cjs:8](<../../../../../../../electron/tag-association.test.cjs#L8>) — file-import-only; coverage not established.

<a id="s-c6e2f5042b1cc473"></a>

## searchEntities.&lt;anonymous@49:84&gt;

[electron/engines/tag-association/search.cjs:49](<../../../../../../../electron/engines/tag-association/search.cjs#L49>) · ArrowFunction · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Chooses strongest evidence without summing correlated tag counts.

Purpose evidence: jsdoc.

Lexical owner: [searchEntities](<search.cjs.md#s-4b1bc7bc0802b0f4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| a | any | compiler-inferred | required |
| b | any | compiler-inferred | required |

Returns: number (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [compareText](<normalizer.cjs.md#s-c87526cd72a39569>) — [electron/engines/tag-association/search.cjs:55](<../../../../../../../electron/engines/tag-association/search.cjs#L55>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/tag-association.test.cjs:8](<../../../../../../../electron/tag-association.test.cjs#L8>) — file-import-only; coverage not established.

<a id="s-74d00096577f0837"></a>

## searchEntities.&lt;anonymous@99:61&gt;

[electron/engines/tag-association/search.cjs:99](<../../../../../../../electron/engines/tag-association/search.cjs#L99>) · ArrowFunction · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Exposes lexical matching display tags.

Purpose evidence: jsdoc.

Lexical owner: [searchEntities](<search.cjs.md#s-4b1bc7bc0802b0f4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| tag | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/tag-association.test.cjs:8](<../../../../../../../electron/tag-association.test.cjs#L8>) — file-import-only; coverage not established.

<a id="s-429b39d4e1f61fac"></a>

## searchEntities.&lt;anonymous@103:80&gt;

[electron/engines/tag-association/search.cjs:103](<../../../../../../../electron/engines/tag-association/search.cjs#L103>) · ArrowFunction · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Exposes every related tag without adding evidence scores.

Purpose evidence: jsdoc.

Lexical owner: [searchEntities](<search.cjs.md#s-4b1bc7bc0802b0f4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| tag | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/tag-association.test.cjs:8](<../../../../../../../electron/tag-association.test.cjs#L8>) — file-import-only; coverage not established.

<a id="s-ea22941215800f64"></a>

## searchEntities.&lt;anonymous@112:111&gt;

[electron/engines/tag-association/search.cjs:112](<../../../../../../../electron/engines/tag-association/search.cjs#L112>) · ArrowFunction · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Applies exact/direct lexical priority, measured association rank, then stable entity-name/ID ties.

Purpose evidence: jsdoc.

Lexical owner: [searchEntities](<search.cjs.md#s-4b1bc7bc0802b0f4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| a | any | compiler-inferred | required |
| b | any | compiler-inferred | required |

Returns: number (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [compareText](<normalizer.cjs.md#s-c87526cd72a39569>) — [electron/engines/tag-association/search.cjs:119](<../../../../../../../electron/engines/tag-association/search.cjs#L119>)
- [normalizeTag](<normalizer.cjs.md#s-4ab62262e70889fe>) — [electron/engines/tag-association/search.cjs:119](<../../../../../../../electron/engines/tag-association/search.cjs#L119>)
- [normalizeTag](<normalizer.cjs.md#s-4ab62262e70889fe>) — [electron/engines/tag-association/search.cjs:119](<../../../../../../../electron/engines/tag-association/search.cjs#L119>)
- [compareText](<normalizer.cjs.md#s-c87526cd72a39569>) — [electron/engines/tag-association/search.cjs:120](<../../../../../../../electron/engines/tag-association/search.cjs#L120>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/tag-association.test.cjs:8](<../../../../../../../electron/tag-association.test.cjs#L8>) — file-import-only; coverage not established.

<a id="s-381480638f50a665"></a>

## searchEntities.&lt;anonymous@128:78&gt;

[electron/engines/tag-association/search.cjs:128](<../../../../../../../electron/engines/tag-association/search.cjs#L128>) · ArrowFunction · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Removes the internal ordering tier from public result metadata.

Purpose evidence: jsdoc.

Lexical owner: [searchEntities](<search.cjs.md#s-4b1bc7bc0802b0f4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| {         priority,         ...result       } | { &#91;x: string&#93;: any; priority: any; } | compiler-inferred | required |

Returns: { &#91;x: string&#93;: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/tag-association.test.cjs:8](<../../../../../../../electron/tag-association.test.cjs#L8>) — file-import-only; coverage not established.
