# electron/engines/tag-association/normalizer.cjs: symbols

[Atlas](<../../../../../README.md>) / [Built-in Engines and data adapters](<../../../../../modules/engines.md>) / [electron/engines/tag-association/normalizer.cjs:1](<../../../../../../../electron/engines/tag-association/normalizer.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/engines/tag-association/normalizer.cjs](<normalizer.cjs.md#s-60a83ac21cd030a7>) (Module)
- [normalizeTag](<normalizer.cjs.md#s-4ab62262e70889fe>) (FunctionDeclaration)
- [normalizeEntityTags](<normalizer.cjs.md#s-806115fa5819ac79>) (FunctionDeclaration)
- [compareText](<normalizer.cjs.md#s-c87526cd72a39569>) (FunctionDeclaration)

<a id="s-60a83ac21cd030a7"></a>

## electron/engines/tag-association/normalizer.cjs

[electron/engines/tag-association/normalizer.cjs:1](<../../../../../../../electron/engines/tag-association/normalizer.cjs#L1>) · Module · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/tag-association.test.cjs:9](<../../../../../../../electron/tag-association.test.cjs#L9>) — file-import-only; coverage not established.

<a id="s-4ab62262e70889fe"></a>

## normalizeTag

[electron/engines/tag-association/normalizer.cjs:2](<../../../../../../../electron/engines/tag-association/normalizer.cjs#L2>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Normalizes matching text consistently without changing persisted spelling or inferring aliases. Pure, accepts strings only.

Purpose evidence: jsdoc.

Exported as: normalizeTag ([electron/engines/tag-association/normalizer.cjs:1](<../../../../../../../electron/engines/tag-association/normalizer.cjs#L1>)).

Lexical owner: [electron/engines/tag-association/normalizer.cjs](<normalizer.cjs.md#s-60a83ac21cd030a7>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [getAssociationStatistics](<association.cjs.md#s-0f4930cf16ce31ba>) — [electron/engines/tag-association/association.cjs:47](<../../../../../../../electron/engines/tag-association/association.cjs#L47>)
- [normalizeEntityTags](<normalizer.cjs.md#s-806115fa5819ac79>) — [electron/engines/tag-association/normalizer.cjs:12](<../../../../../../../electron/engines/tag-association/normalizer.cjs#L12>)
- [searchEntities](<search.cjs.md#s-4b1bc7bc0802b0f4>) — [electron/engines/tag-association/search.cjs:6](<../../../../../../../electron/engines/tag-association/search.cjs#L6>)
- [searchEntities](<search.cjs.md#s-4b1bc7bc0802b0f4>) — [electron/engines/tag-association/search.cjs:57](<../../../../../../../electron/engines/tag-association/search.cjs#L57>)
- [searchEntities.&lt;anonymous@112:111&gt;](<search.cjs.md#s-ea22941215800f64>) — [electron/engines/tag-association/search.cjs:119](<../../../../../../../electron/engines/tag-association/search.cjs#L119>)
- [searchEntities.&lt;anonymous@112:111&gt;](<search.cjs.md#s-ea22941215800f64>) — [electron/engines/tag-association/search.cjs:119](<../../../../../../../electron/engines/tag-association/search.cjs#L119>)
- [&lt;anonymous@53:85&gt;](<../../tag-association.test.cjs.md#s-0e041be6465ddb0f>) — [electron/tag-association.test.cjs:57](<../../../../../../../electron/tag-association.test.cjs#L57>)

Unresolved / external call sites: 5.

- TypeError — external-or-dynamic-dispatch; [electron/engines/tag-association/normalizer.cjs:4](<../../../../../../../electron/engines/tag-association/normalizer.cjs#L4>)
- value.normalize("NFKC").trim().replace(/\\s+/gu, " ").toLowerCase — external-or-dynamic-dispatch; [electron/engines/tag-association/normalizer.cjs:5](<../../../../../../../electron/engines/tag-association/normalizer.cjs#L5>)
- value.normalize("NFKC").trim().replace — external-or-dynamic-dispatch; [electron/engines/tag-association/normalizer.cjs:5](<../../../../../../../electron/engines/tag-association/normalizer.cjs#L5>)
- value.normalize("NFKC").trim — external-or-dynamic-dispatch; [electron/engines/tag-association/normalizer.cjs:5](<../../../../../../../electron/engines/tag-association/normalizer.cjs#L5>)
- value.normalize — external-or-dynamic-dispatch; [electron/engines/tag-association/normalizer.cjs:5](<../../../../../../../electron/engines/tag-association/normalizer.cjs#L5>)

**Related tests / acceptance harnesses:**

- [electron/tag-association.test.cjs:57](<../../../../../../../electron/tag-association.test.cjs#L57>) — static-call-site; coverage not established.
- [electron/tag-association.test.cjs:9](<../../../../../../../electron/tag-association.test.cjs#L9>) — file-import-only; coverage not established.

<a id="s-806115fa5819ac79"></a>

## normalizeEntityTags

[electron/engines/tag-association/normalizer.cjs:9](<../../../../../../../electron/engines/tag-association/normalizer.cjs#L9>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Returns unique normalized tags with their first original spelling for display. Reads only the supplied persisted tag array.

Purpose evidence: jsdoc.

Exported as: normalizeEntityTags ([electron/engines/tag-association/normalizer.cjs:1](<../../../../../../../electron/engines/tag-association/normalizer.cjs#L1>)).

Lexical owner: [electron/engines/tag-association/normalizer.cjs](<normalizer.cjs.md#s-60a83ac21cd030a7>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| tags | any | compiler-inferred | required |

Returns: {} (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [normalizeTag](<normalizer.cjs.md#s-4ab62262e70889fe>) — [electron/engines/tag-association/normalizer.cjs:12](<../../../../../../../electron/engines/tag-association/normalizer.cjs#L12>)

**Called by (statically resolved):**

- [buildTagIndex.&lt;anonymous@9:90&gt;](<indexer.cjs.md#s-d4b997c8f0f70cbd>) — [electron/engines/tag-association/indexer.cjs:14](<../../../../../../../electron/engines/tag-association/indexer.cjs#L14>)

Unresolved / external call sites: 4.

- Map — external-or-dynamic-dispatch; [electron/engines/tag-association/normalizer.cjs:10](<../../../../../../../electron/engines/tag-association/normalizer.cjs#L10>)
- unique.has — external-or-dynamic-dispatch; [electron/engines/tag-association/normalizer.cjs:13](<../../../../../../../electron/engines/tag-association/normalizer.cjs#L13>)
- unique.set — external-or-dynamic-dispatch; [electron/engines/tag-association/normalizer.cjs:14](<../../../../../../../electron/engines/tag-association/normalizer.cjs#L14>)
- unique.values — external-or-dynamic-dispatch; [electron/engines/tag-association/normalizer.cjs:16](<../../../../../../../electron/engines/tag-association/normalizer.cjs#L16>)

**Related tests / acceptance harnesses:**

- [electron/tag-association.test.cjs:9](<../../../../../../../electron/tag-association.test.cjs#L9>) — file-import-only; coverage not established.

<a id="s-c87526cd72a39569"></a>

## compareText

[electron/engines/tag-association/normalizer.cjs:20](<../../../../../../../electron/engines/tag-association/normalizer.cjs#L20>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Compares normalized strings using stable code-point ordering independent of machine locale.

Purpose evidence: jsdoc.

Exported as: compareText ([electron/engines/tag-association/normalizer.cjs:1](<../../../../../../../electron/engines/tag-association/normalizer.cjs#L1>)).

Lexical owner: [electron/engines/tag-association/normalizer.cjs](<normalizer.cjs.md#s-60a83ac21cd030a7>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| a | any | compiler-inferred | required |
| b | any | compiler-inferred | required |

Returns: 0 &#124; 1 &#124; -1 (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [getTagIndex.resolveCurrentWorldIndex.&lt;anonymous@131:91&gt;](<../../domains/indexing/tag-association-service.cjs.md#s-679857e842975035>) — [electron/domains/indexing/tag-association-service.cjs:134](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L134>)
- [countAssociations.&lt;anonymous@9:49&gt;](<association.cjs.md#s-7bb02d11048dbdad>) — [electron/engines/tag-association/association.cjs:10](<../../../../../../../electron/engines/tag-association/association.cjs#L10>)
- [countAssociations.&lt;anonymous@28:48&gt;](<association.cjs.md#s-5940987cfc0b94f9>) — [electron/engines/tag-association/association.cjs:29](<../../../../../../../electron/engines/tag-association/association.cjs#L29>)
- [countAssociations.&lt;anonymous@33:50&gt;](<association.cjs.md#s-847e5b1d7ba62168>) — [electron/engines/tag-association/association.cjs:34](<../../../../../../../electron/engines/tag-association/association.cjs#L34>)
- [getAssociationStatistics.&lt;anonymous@70:80&gt;](<association.cjs.md#s-d8679f01f59c45b5>) — [electron/engines/tag-association/association.cjs:76](<../../../../../../../electron/engines/tag-association/association.cjs#L76>)
- [buildTagIndex.&lt;anonymous@18:72&gt;](<indexer.cjs.md#s-ae41ce9161565e3a>) — [electron/engines/tag-association/indexer.cjs:19](<../../../../../../../electron/engines/tag-association/indexer.cjs#L19>)
- [searchEntities.&lt;anonymous@49:84&gt;](<search.cjs.md#s-c6e2f5042b1cc473>) — [electron/engines/tag-association/search.cjs:55](<../../../../../../../electron/engines/tag-association/search.cjs#L55>)
- [searchEntities.&lt;anonymous@112:111&gt;](<search.cjs.md#s-ea22941215800f64>) — [electron/engines/tag-association/search.cjs:119](<../../../../../../../electron/engines/tag-association/search.cjs#L119>)
- [searchEntities.&lt;anonymous@112:111&gt;](<search.cjs.md#s-ea22941215800f64>) — [electron/engines/tag-association/search.cjs:120](<../../../../../../../electron/engines/tag-association/search.cjs#L120>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/tag-association.test.cjs:9](<../../../../../../../electron/tag-association.test.cjs#L9>) — file-import-only; coverage not established.
