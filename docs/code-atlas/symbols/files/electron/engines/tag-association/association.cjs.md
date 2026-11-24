# electron/engines/tag-association/association.cjs: symbols

[Atlas](<../../../../../README.md>) / [Built-in Engines and data adapters](<../../../../../modules/engines.md>) / [electron/engines/tag-association/association.cjs:1](<../../../../../../../electron/engines/tag-association/association.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/engines/tag-association/association.cjs](<association.cjs.md#s-4c0b9b8fb1b4e642>) (Module)
- [countAssociations](<association.cjs.md#s-bd0d1e8a7f55919c>) (FunctionDeclaration)
- [countAssociations.&lt;anonymous@9:49&gt;](<association.cjs.md#s-7bb02d11048dbdad>) (ArrowFunction)
- [countAssociations.&lt;anonymous@28:48&gt;](<association.cjs.md#s-5940987cfc0b94f9>) (ArrowFunction)
- [countAssociations.&lt;anonymous@33:50&gt;](<association.cjs.md#s-847e5b1d7ba62168>) (ArrowFunction)
- [countAssociations.&lt;anonymous@37:74&gt;](<association.cjs.md#s-82c0ce592c07621a>) (ArrowFunction)
- [getAssociationStatistics](<association.cjs.md#s-0f4930cf16ce31ba>) (FunctionDeclaration)
- [getAssociationStatistics.&lt;anonymous@50:70&gt;](<association.cjs.md#s-eb003ba807df5321>) (ArrowFunction)
- [getAssociationStatistics.&lt;anonymous@70:80&gt;](<association.cjs.md#s-d8679f01f59c45b5>) (ArrowFunction)

<a id="s-4c0b9b8fb1b4e642"></a>

## electron/engines/tag-association/association.cjs

[electron/engines/tag-association/association.cjs:1](<../../../../../../../electron/engines/tag-association/association.cjs#L1>) · Module · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- require — module-loader; [electron/engines/tag-association/association.cjs:1](<../../../../../../../electron/engines/tag-association/association.cjs#L1>)

**Related tests / acceptance harnesses:**

- [electron/tag-association.test.cjs:12](<../../../../../../../electron/tag-association.test.cjs#L12>) — file-import-only; coverage not established.

<a id="s-bd0d1e8a7f55919c"></a>

## countAssociations

[electron/engines/tag-association/association.cjs:4](<../../../../../../../electron/engines/tag-association/association.cjs#L4>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Counts each normalized entity tag and unordered distinct pair once. Input entities contain deduplicated tag sets; no I/O occurs.

Purpose evidence: jsdoc.

Exported as: countAssociations ([electron/engines/tag-association/association.cjs:1](<../../../../../../../electron/engines/tag-association/association.cjs#L1>)).

Lexical owner: [electron/engines/tag-association/association.cjs](<association.cjs.md#s-4c0b9b8fb1b4e642>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| entities | any | compiler-inferred | required |

Returns: { tagFrequencies: any; pairFrequencies: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [buildTagIndex](<indexer.cjs.md#s-a49589612a28771b>) — [electron/engines/tag-association/indexer.cjs:26](<../../../../../../../electron/engines/tag-association/indexer.cjs#L26>)

Unresolved / external call sites: 12.

- Map — external-or-dynamic-dispatch; [electron/engines/tag-association/association.cjs:5](<../../../../../../../electron/engines/tag-association/association.cjs#L5>)
- Map — external-or-dynamic-dispatch; [electron/engines/tag-association/association.cjs:6](<../../../../../../../electron/engines/tag-association/association.cjs#L6>)
- &#91;...entity.tags&#93;.sort — external-or-dynamic-dispatch; [electron/engines/tag-association/association.cjs:8](<../../../../../../../electron/engines/tag-association/association.cjs#L8>)
- frequencies.get — external-or-dynamic-dispatch; [electron/engines/tag-association/association.cjs:14](<../../../../../../../electron/engines/tag-association/association.cjs#L14>)
- frequencies.set — external-or-dynamic-dispatch; [electron/engines/tag-association/association.cjs:15](<../../../../../../../electron/engines/tag-association/association.cjs#L15>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/engines/tag-association/association.cjs:21](<../../../../../../../electron/engines/tag-association/association.cjs#L21>)
- pairs.set — external-or-dynamic-dispatch; [electron/engines/tag-association/association.cjs:22](<../../../../../../../electron/engines/tag-association/association.cjs#L22>)
- pairs.get — external-or-dynamic-dispatch; [electron/engines/tag-association/association.cjs:22](<../../../../../../../electron/engines/tag-association/association.cjs#L22>)
- 4 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/tag-association.test.cjs:12](<../../../../../../../electron/tag-association.test.cjs#L12>) — file-import-only; coverage not established.

<a id="s-7bb02d11048dbdad"></a>

## countAssociations.&lt;anonymous@9:49&gt;

[electron/engines/tag-association/association.cjs:9](<../../../../../../../electron/engines/tag-association/association.cjs#L9>) · ArrowFunction · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Canonicalizes unordered pair keys.

Purpose evidence: jsdoc.

Lexical owner: [countAssociations](<association.cjs.md#s-bd0d1e8a7f55919c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| a | any | compiler-inferred | required |
| b | any | compiler-inferred | required |

Returns: 0 &#124; 1 &#124; -1 (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [compareText](<normalizer.cjs.md#s-c87526cd72a39569>) — [electron/engines/tag-association/association.cjs:10](<../../../../../../../electron/engines/tag-association/association.cjs#L10>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/tag-association.test.cjs:12](<../../../../../../../electron/tag-association.test.cjs#L12>) — file-import-only; coverage not established.

<a id="s-5940987cfc0b94f9"></a>

## countAssociations.&lt;anonymous@28:48&gt;

[electron/engines/tag-association/association.cjs:28](<../../../../../../../electron/engines/tag-association/association.cjs#L28>) · ArrowFunction · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Stabilizes serialized statistics.

Purpose evidence: jsdoc.

Lexical owner: [countAssociations](<association.cjs.md#s-bd0d1e8a7f55919c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| a | any | compiler-inferred | required |
| b | any | compiler-inferred | required |

Returns: 0 &#124; 1 &#124; -1 (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [compareText](<normalizer.cjs.md#s-c87526cd72a39569>) — [electron/engines/tag-association/association.cjs:29](<../../../../../../../electron/engines/tag-association/association.cjs#L29>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/tag-association.test.cjs:12](<../../../../../../../electron/tag-association.test.cjs#L12>) — file-import-only; coverage not established.

<a id="s-847e5b1d7ba62168"></a>

## countAssociations.&lt;anonymous@33:50&gt;

[electron/engines/tag-association/association.cjs:33](<../../../../../../../electron/engines/tag-association/association.cjs#L33>) · ArrowFunction · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Stabilizes serialized pair order.

Purpose evidence: jsdoc.

Lexical owner: [countAssociations](<association.cjs.md#s-bd0d1e8a7f55919c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| a | any | compiler-inferred | required |
| b | any | compiler-inferred | required |

Returns: 0 &#124; 1 &#124; -1 (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [compareText](<normalizer.cjs.md#s-c87526cd72a39569>) — [electron/engines/tag-association/association.cjs:34](<../../../../../../../electron/engines/tag-association/association.cjs#L34>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/tag-association.test.cjs:12](<../../../../../../../electron/tag-association.test.cjs#L12>) — file-import-only; coverage not established.

<a id="s-82c0ce592c07621a"></a>

## countAssociations.&lt;anonymous@37:74&gt;

[electron/engines/tag-association/association.cjs:37](<../../../../../../../electron/engines/tag-association/association.cjs#L37>) · ArrowFunction · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Restores the canonical pair with its actual entity count.

Purpose evidence: jsdoc.

Lexical owner: [countAssociations](<association.cjs.md#s-bd0d1e8a7f55919c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| &#91;           key,           count,         &#93; | &#91;any, any&#93; | compiler-inferred | required |

Returns: { tags: any; count: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- JSON.parse — external-or-dynamic-dispatch; [electron/engines/tag-association/association.cjs:40](<../../../../../../../electron/engines/tag-association/association.cjs#L40>)

**Related tests / acceptance harnesses:**

- [electron/tag-association.test.cjs:12](<../../../../../../../electron/tag-association.test.cjs#L12>) — file-import-only; coverage not established.

<a id="s-0f4930cf16ce31ba"></a>

## getAssociationStatistics

[electron/engines/tag-association/association.cjs:46](<../../../../../../../electron/engines/tag-association/association.cjs#L46>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Returns symmetric query associations ordered by count, then Jaccard confidence, then tag text. Counts remain the primary signal.

Purpose evidence: jsdoc.

Exported as: getAssociationStatistics ([electron/engines/tag-association/association.cjs:1](<../../../../../../../electron/engines/tag-association/association.cjs#L1>)).

Lexical owner: [electron/engines/tag-association/association.cjs](<association.cjs.md#s-4c0b9b8fb1b4e642>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| index | any | compiler-inferred | required |
| query | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [normalizeTag](<normalizer.cjs.md#s-4ab62262e70889fe>) — [electron/engines/tag-association/association.cjs:47](<../../../../../../../electron/engines/tag-association/association.cjs#L47>)

**Called by (statically resolved):**

- [getWorldTagStatistics](<../../domains/indexing/tag-association-service.cjs.md#s-d8dcfd2227d71133>) — [electron/domains/indexing/tag-association-service.cjs:226](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L226>)
- [searchEntities](<search.cjs.md#s-4b1bc7bc0802b0f4>) — [electron/engines/tag-association/search.cjs:8](<../../../../../../../electron/engines/tag-association/search.cjs#L8>)
- [&lt;anonymous@53:85&gt;](<../../tag-association.test.cjs.md#s-0e041be6465ddb0f>) — [electron/tag-association.test.cjs:62](<../../../../../../../electron/tag-association.test.cjs#L62>)
- [&lt;anonymous@53:85&gt;](<../../tag-association.test.cjs.md#s-0e041be6465ddb0f>) — [electron/tag-association.test.cjs:66](<../../../../../../../electron/tag-association.test.cjs#L66>)

Unresolved / external call sites: 7.

- Map — external-or-dynamic-dispatch; [electron/engines/tag-association/association.cjs:48](<../../../../../../../electron/engines/tag-association/association.cjs#L48>)
- index.tagFrequencies.map — external-or-dynamic-dispatch; [electron/engines/tag-association/association.cjs:49](<../../../../../../../electron/engines/tag-association/association.cjs#L49>)
- frequencies.get — external-or-dynamic-dispatch; [electron/engines/tag-association/association.cjs:56](<../../../../../../../electron/engines/tag-association/association.cjs#L56>)
- pair.tags.includes — external-or-dynamic-dispatch; [electron/engines/tag-association/association.cjs:59](<../../../../../../../electron/engines/tag-association/association.cjs#L59>)
- frequencies.get — external-or-dynamic-dispatch; [electron/engines/tag-association/association.cjs:61](<../../../../../../../electron/engines/tag-association/association.cjs#L61>)
- associations.push — external-or-dynamic-dispatch; [electron/engines/tag-association/association.cjs:62](<../../../../../../../electron/engines/tag-association/association.cjs#L62>)
- associations.sort — external-or-dynamic-dispatch; [electron/engines/tag-association/association.cjs:69](<../../../../../../../electron/engines/tag-association/association.cjs#L69>)

**Related tests / acceptance harnesses:**

- [electron/tag-association.test.cjs:62](<../../../../../../../electron/tag-association.test.cjs#L62>) — static-call-site; coverage not established.
- [electron/tag-association.test.cjs:66](<../../../../../../../electron/tag-association.test.cjs#L66>) — static-call-site; coverage not established.
- [electron/tag-association.test.cjs:12](<../../../../../../../electron/tag-association.test.cjs#L12>) — file-import-only; coverage not established.

<a id="s-eb003ba807df5321"></a>

## getAssociationStatistics.&lt;anonymous@50:70&gt;

[electron/engines/tag-association/association.cjs:50](<../../../../../../../electron/engines/tag-association/association.cjs#L50>) · ArrowFunction · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Indexes frequency denominators for measured confidence.

Purpose evidence: jsdoc.

Lexical owner: [getAssociationStatistics](<association.cjs.md#s-0f4930cf16ce31ba>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| tag | any | compiler-inferred | required |

Returns: {} (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/tag-association.test.cjs:12](<../../../../../../../electron/tag-association.test.cjs#L12>) — file-import-only; coverage not established.

<a id="s-d8679f01f59c45b5"></a>

## getAssociationStatistics.&lt;anonymous@70:80&gt;

[electron/engines/tag-association/association.cjs:70](<../../../../../../../electron/engines/tag-association/association.cjs#L70>) · ArrowFunction · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Ranks frequency ahead of confidence and deterministic lexical ties.

Purpose evidence: jsdoc.

Lexical owner: [getAssociationStatistics](<association.cjs.md#s-0f4930cf16ce31ba>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| a | any | compiler-inferred | required |
| b | any | compiler-inferred | required |

Returns: number (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [compareText](<normalizer.cjs.md#s-c87526cd72a39569>) — [electron/engines/tag-association/association.cjs:76](<../../../../../../../electron/engines/tag-association/association.cjs#L76>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/tag-association.test.cjs:12](<../../../../../../../electron/tag-association.test.cjs#L12>) — file-import-only; coverage not established.
