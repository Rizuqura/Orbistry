# electron/engines/tag-association/indexer.cjs: symbols

[Atlas](<../../../../../README.md>) / [Built-in Engines and data adapters](<../../../../../modules/engines.md>) / [electron/engines/tag-association/indexer.cjs:1](<../../../../../../../electron/engines/tag-association/indexer.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/engines/tag-association/indexer.cjs](<indexer.cjs.md#s-8b1dfe75ee98589b>) (Module)
- [INDEX_VERSION](<indexer.cjs.md#s-86cee73d2eeae3a5>) (VariableDeclaration)
- [buildTagIndex](<indexer.cjs.md#s-a49589612a28771b>) (FunctionDeclaration)
- [buildTagIndex.&lt;anonymous@9:90&gt;](<indexer.cjs.md#s-d4b997c8f0f70cbd>) (ArrowFunction)
- [buildTagIndex.&lt;anonymous@18:72&gt;](<indexer.cjs.md#s-ae41ce9161565e3a>) (ArrowFunction)
- [updateTagIndex](<indexer.cjs.md#s-aef49e19581a1e3a>) (FunctionDeclaration)

<a id="s-8b1dfe75ee98589b"></a>

## electron/engines/tag-association/indexer.cjs

[electron/engines/tag-association/indexer.cjs:1](<../../../../../../../electron/engines/tag-association/indexer.cjs#L1>) · Module · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- require — module-loader; [electron/engines/tag-association/indexer.cjs:1](<../../../../../../../electron/engines/tag-association/indexer.cjs#L1>)
- require — module-loader; [electron/engines/tag-association/indexer.cjs:2](<../../../../../../../electron/engines/tag-association/indexer.cjs#L2>)

**Related tests / acceptance harnesses:**

- [electron/tag-association.test.cjs:7](<../../../../../../../electron/tag-association.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-86cee73d2eeae3a5"></a>

## INDEX_VERSION

[electron/engines/tag-association/indexer.cjs:3](<../../../../../../../electron/engines/tag-association/indexer.cjs#L3>) · VariableDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: INDEX_VERSION ([electron/engines/tag-association/indexer.cjs:1](<../../../../../../../electron/engines/tag-association/indexer.cjs#L1>)).

Lexical owner: [electron/engines/tag-association/indexer.cjs](<indexer.cjs.md#s-8b1dfe75ee98589b>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/tag-association.test.cjs:7](<../../../../../../../electron/tag-association.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-a49589612a28771b"></a>

## buildTagIndex

[electron/engines/tag-association/indexer.cjs:6](<../../../../../../../electron/engines/tag-association/indexer.cjs#L6>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Builds a serializable index solely from persisted entity IDs, names and assigned tags within the supplied World. Never mutates inputs.

Purpose evidence: jsdoc.

Exported as: buildTagIndex ([electron/engines/tag-association/indexer.cjs:1](<../../../../../../../electron/engines/tag-association/indexer.cjs#L1>)).

Lexical owner: [electron/engines/tag-association/indexer.cjs](<indexer.cjs.md#s-8b1dfe75ee98589b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| worldId | any | compiler-inferred | required |
| sourceEntities | any | compiler-inferred | required |
| revision | any | compiler-inferred | required |

Returns: { tagFrequencies: any; pairFrequencies: any; version: number; worldId: any; revision: any; entities: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [countAssociations](<association.cjs.md#s-bd0d1e8a7f55919c>) — [electron/engines/tag-association/indexer.cjs:26](<../../../../../../../electron/engines/tag-association/indexer.cjs#L26>)

**Called by (statically resolved):**

- [updateTagIndex](<indexer.cjs.md#s-aef49e19581a1e3a>) — [electron/engines/tag-association/indexer.cjs:38](<../../../../../../../electron/engines/tag-association/indexer.cjs#L38>)
- [&lt;anonymous@53:85&gt;](<../../tag-association.test.cjs.md#s-0e041be6465ddb0f>) — [electron/tag-association.test.cjs:56](<../../../../../../../electron/tag-association.test.cjs#L56>)
- [&lt;anonymous@53:85&gt;](<../../tag-association.test.cjs.md#s-0e041be6465ddb0f>) — [electron/tag-association.test.cjs:125](<../../../../../../../electron/tag-association.test.cjs#L125>)
- [&lt;anonymous@53:85&gt;](<../../tag-association.test.cjs.md#s-0e041be6465ddb0f>) — [electron/tag-association.test.cjs:132](<../../../../../../../electron/tag-association.test.cjs#L132>)

Unresolved / external call sites: 2.

- sourceEntities .map( /** Copies authoritative display metadata into independent normalized tag sets. */ ( entity, ) =&gt; ({ id: entity.id, name: entity.name, tags: normalizeEntityTag — external-or-dynamic-dispatch; [electron/engines/tag-association/indexer.cjs:7](<../../../../../../../electron/engines/tag-association/indexer.cjs#L7>)
- sourceEntities .map — external-or-dynamic-dispatch; [electron/engines/tag-association/indexer.cjs:7](<../../../../../../../electron/engines/tag-association/indexer.cjs#L7>)

**Related tests / acceptance harnesses:**

- [electron/tag-association.test.cjs:56](<../../../../../../../electron/tag-association.test.cjs#L56>) — static-call-site; coverage not established.
- [electron/tag-association.test.cjs:125](<../../../../../../../electron/tag-association.test.cjs#L125>) — static-call-site; coverage not established.
- [electron/tag-association.test.cjs:132](<../../../../../../../electron/tag-association.test.cjs#L132>) — static-call-site; coverage not established.
- [electron/tag-association.test.cjs:7](<../../../../../../../electron/tag-association.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-d4b997c8f0f70cbd"></a>

## buildTagIndex.&lt;anonymous@9:90&gt;

[electron/engines/tag-association/indexer.cjs:9](<../../../../../../../electron/engines/tag-association/indexer.cjs#L9>) · ArrowFunction · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Copies authoritative display metadata into independent normalized tag sets.

Purpose evidence: jsdoc.

Lexical owner: [buildTagIndex](<indexer.cjs.md#s-a49589612a28771b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| entity | any | compiler-inferred | required |

Returns: { id: any; name: any; tags: {}; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [normalizeEntityTags](<normalizer.cjs.md#s-806115fa5819ac79>) — [electron/engines/tag-association/indexer.cjs:14](<../../../../../../../electron/engines/tag-association/indexer.cjs#L14>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/tag-association.test.cjs:7](<../../../../../../../electron/tag-association.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-ae41ce9161565e3a"></a>

## buildTagIndex.&lt;anonymous@18:72&gt;

[electron/engines/tag-association/indexer.cjs:18](<../../../../../../../electron/engines/tag-association/indexer.cjs#L18>) · ArrowFunction · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Stabilizes display spelling and record order by identity.

Purpose evidence: jsdoc.

Lexical owner: [buildTagIndex](<indexer.cjs.md#s-a49589612a28771b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| a | any | compiler-inferred | required |
| b | any | compiler-inferred | required |

Returns: 0 &#124; 1 &#124; -1 (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [compareText](<normalizer.cjs.md#s-c87526cd72a39569>) — [electron/engines/tag-association/indexer.cjs:19](<../../../../../../../electron/engines/tag-association/indexer.cjs#L19>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/tag-association.test.cjs:7](<../../../../../../../electron/tag-association.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-aef49e19581a1e3a"></a>

## updateTagIndex

[electron/engines/tag-association/indexer.cjs:31](<../../../../../../../electron/engines/tag-association/indexer.cjs#L31>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Updates derived data using a deterministic full rebuild when persisted metadata revision changes; unchanged revisions reuse the index.

Purpose evidence: jsdoc.

Exported as: updateTagIndex ([electron/engines/tag-association/indexer.cjs:1](<../../../../../../../electron/engines/tag-association/indexer.cjs#L1>)).

Lexical owner: [electron/engines/tag-association/indexer.cjs](<indexer.cjs.md#s-8b1dfe75ee98589b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| index | any | compiler-inferred | required |
| worldId | any | compiler-inferred | required |
| sourceEntities | any | compiler-inferred | required |
| revision | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [buildTagIndex](<indexer.cjs.md#s-a49589612a28771b>) — [electron/engines/tag-association/indexer.cjs:38](<../../../../../../../electron/engines/tag-association/indexer.cjs#L38>)

**Called by (statically resolved):**

- [getTagIndex.resolveCurrentWorldIndex](<../../domains/indexing/tag-association-service.cjs.md#s-3687082d2cc78c11>) — [electron/domains/indexing/tag-association-service.cjs:166](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L166>)
- [getTagIndex.resolveCurrentWorldIndex](<../../domains/indexing/tag-association-service.cjs.md#s-3687082d2cc78c11>) — [electron/domains/indexing/tag-association-service.cjs:170](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L170>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/tag-association.test.cjs:7](<../../../../../../../electron/tag-association.test.cjs#L7>) — file-import-only; coverage not established.
