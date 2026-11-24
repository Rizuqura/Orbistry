# electron/domains/entity/model/Entity.cjs: symbols

[Atlas](<../../../../../../README.md>) / [Entity domain](<../../../../../../modules/entity-domain.md>) / [electron/domains/entity/model/Entity.cjs:1](<../../../../../../../../electron/domains/entity/model/Entity.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/domains/entity/model/Entity.cjs](<Entity.cjs.md#s-a3a5d44910725d99>) (Module)
- [Entity](<Entity.cjs.md#s-ac6f61aab61eff1e>) (ClassDeclaration)
- [Entity.constructor](<Entity.cjs.md#s-156ad8f597ca330e>) (Constructor)
- [Entity.key](<Entity.cjs.md#s-89bdfa02b143cd24>) (GetAccessor)
- [Entity.getPorts](<Entity.cjs.md#s-f3f53c5d1b27e358>) (MethodDeclaration)
- [Entity.updateMetadata](<Entity.cjs.md#s-6bb763029bffe74d>) (MethodDeclaration)
- [Entity.rename](<Entity.cjs.md#s-3e5fe032fae06194>) (MethodDeclaration)
- [Entity.setTags](<Entity.cjs.md#s-cee9e5e0f7ce3127>) (MethodDeclaration)
- [Entity.updateAppearance](<Entity.cjs.md#s-0e9c20de0e27bfb6>) (MethodDeclaration)
- [Entity.attachSource](<Entity.cjs.md#s-d5d81e31b65f24bf>) (MethodDeclaration)
- [Entity.hasSource](<Entity.cjs.md#s-272a7e2fc98ca22b>) (MethodDeclaration)
- [Entity.detachSource](<Entity.cjs.md#s-e6ba195fea19d208>) (MethodDeclaration)
- [Entity.getSnapshot](<Entity.cjs.md#s-8a8fd069f9bac4e4>) (MethodDeclaration)

<a id="s-a3a5d44910725d99"></a>

## electron/domains/entity/model/Entity.cjs

[electron/domains/entity/model/Entity.cjs:1](<../../../../../../../../electron/domains/entity/model/Entity.cjs#L1>) · Module · production · [Entity domain](<../../../../../../modules/entity-domain.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 7.

- require — module-loader; [electron/domains/entity/model/Entity.cjs:5](<../../../../../../../../electron/domains/entity/model/Entity.cjs#L5>)
- metadataSchema .extend({ icon: metadataSchema.shape.icon.removeDefault() }) .partial() .strict — external-or-dynamic-dispatch; [electron/domains/entity/model/Entity.cjs:8](<../../../../../../../../electron/domains/entity/model/Entity.cjs#L8>)
- metadataSchema .extend({ icon: metadataSchema.shape.icon.removeDefault() }) .partial — external-or-dynamic-dispatch; [electron/domains/entity/model/Entity.cjs:8](<../../../../../../../../electron/domains/entity/model/Entity.cjs#L8>)
- metadataSchema .extend — external-or-dynamic-dispatch; [electron/domains/entity/model/Entity.cjs:8](<../../../../../../../../electron/domains/entity/model/Entity.cjs#L8>)
- metadataSchema.shape.icon.removeDefault — external-or-dynamic-dispatch; [electron/domains/entity/model/Entity.cjs:9](<../../../../../../../../electron/domains/entity/model/Entity.cjs#L9>)
- metadataPatch .pick({ icon: true, iconImage: true, color: true }) .strict — external-or-dynamic-dispatch; [electron/domains/entity/model/Entity.cjs:12](<../../../../../../../../electron/domains/entity/model/Entity.cjs#L12>)
- metadataPatch .pick — external-or-dynamic-dispatch; [electron/domains/entity/model/Entity.cjs:12](<../../../../../../../../electron/domains/entity/model/Entity.cjs#L12>)

**Related tests / acceptance harnesses:**

- [electron/domains/entity/tests/entity-domain.test.cjs:3](<../../../../../../../../electron/domains/entity/tests/entity-domain.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-ac6f61aab61eff1e"></a>

## Entity

[electron/domains/entity/model/Entity.cjs:23](<../../../../../../../../electron/domains/entity/model/Entity.cjs#L23>) · ClassDeclaration · production · [Entity domain](<../../../../../../modules/entity-domain.md>)

Entity-owned state within one Universe. The host supplies recorded references and handles storage and permissions.

Purpose evidence: jsdoc.

Exported as: Entity ([electron/domains/entity/model/Entity.cjs:1](<../../../../../../../../electron/domains/entity/model/Entity.cjs#L1>)).

Lexical owner: [electron/domains/entity/model/Entity.cjs](<Entity.cjs.md#s-a3a5d44910725d99>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- Map — external-or-dynamic-dispatch; [electron/domains/entity/model/Entity.cjs:27](<../../../../../../../../electron/domains/entity/model/Entity.cjs#L27>)

**Related tests / acceptance harnesses:**

- [electron/domains/entity/tests/entity-domain.test.cjs:3](<../../../../../../../../electron/domains/entity/tests/entity-domain.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-156ad8f597ca330e"></a>

## Entity.constructor

[electron/domains/entity/model/Entity.cjs:32](<../../../../../../../../electron/domains/entity/model/Entity.cjs#L32>) · Constructor · production · [Entity domain](<../../../../../../modules/entity-domain.md>)

Restores schema-v1 fields without resolving Vault files or opening associated subsystems. Rejects duplicate stored IDs.

Purpose evidence: jsdoc.

Lexical owner: [Entity](<Entity.cjs.md#s-ac6f61aab61eff1e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { key, createdAt, metadata, sourceReferences = &#91;&#93; } | EntitySnapshot | compiler-inferred | required |

Returns: Entity (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@20:87&gt;](<../tests/entity-domain.test.cjs.md#s-0d9769d7ad737e1c>) — [electron/domains/entity/tests/entity-domain.test.cjs:22](<../../../../../../../../electron/domains/entity/tests/entity-domain.test.cjs#L22>)
- [&lt;anonymous@57:69&gt;](<../tests/entity-domain.test.cjs.md#s-7646f6603c6cab35>) — [electron/domains/entity/tests/entity-domain.test.cjs:58](<../../../../../../../../electron/domains/entity/tests/entity-domain.test.cjs#L58>)
- [&lt;anonymous@57:69&gt;.&lt;anonymous@73:17&gt;](<../tests/entity-domain.test.cjs.md#s-2d016c91fb2c1036>) — [electron/domains/entity/tests/entity-domain.test.cjs:73](<../../../../../../../../electron/domains/entity/tests/entity-domain.test.cjs#L73>)
- [&lt;anonymous@78:87&gt;.&lt;anonymous@80:5&gt;](<../tests/entity-domain.test.cjs.md#s-dfdb0dce9973c25a>) — [electron/domains/entity/tests/entity-domain.test.cjs:80](<../../../../../../../../electron/domains/entity/tests/entity-domain.test.cjs#L80>)
- [&lt;anonymous@78:87&gt;](<../tests/entity-domain.test.cjs.md#s-98745232b9968f8f>) — [electron/domains/entity/tests/entity-domain.test.cjs:82](<../../../../../../../../electron/domains/entity/tests/entity-domain.test.cjs#L82>)
- [validateChip](<../worldview-store.cjs.md#s-c8761a1b2b8d150a>) — [electron/domains/entity/worldview-store.cjs:48](<../../../../../../../../electron/domains/entity/worldview-store.cjs#L48>)
- [entityFromRecord](<../worldview-store.cjs.md#s-36add00d304ae43d>) — [electron/domains/entity/worldview-store.cjs:378](<../../../../../../../../electron/domains/entity/worldview-store.cjs#L378>)

Unresolved / external call sites: 9.

- entityKey.parse — external-or-dynamic-dispatch; [electron/domains/entity/model/Entity.cjs:33](<../../../../../../../../electron/domains/entity/model/Entity.cjs#L33>)
- Error — external-or-dynamic-dispatch; [electron/domains/entity/model/Entity.cjs:35](<../../../../../../../../electron/domains/entity/model/Entity.cjs#L35>)
- metadataSchema.parse — external-or-dynamic-dispatch; [electron/domains/entity/model/Entity.cjs:37](<../../../../../../../../electron/domains/entity/model/Entity.cjs#L37>)
- Array.isArray — external-or-dynamic-dispatch; [electron/domains/entity/model/Entity.cjs:39](<../../../../../../../../electron/domains/entity/model/Entity.cjs#L39>)
- Error — external-or-dynamic-dispatch; [electron/domains/entity/model/Entity.cjs:42](<../../../../../../../../electron/domains/entity/model/Entity.cjs#L42>)
- sourceReference.parse — external-or-dynamic-dispatch; [electron/domains/entity/model/Entity.cjs:44](<../../../../../../../../electron/domains/entity/model/Entity.cjs#L44>)
- this.#sources.has — external-or-dynamic-dispatch; [electron/domains/entity/model/Entity.cjs:45](<../../../../../../../../electron/domains/entity/model/Entity.cjs#L45>)
- Error — external-or-dynamic-dispatch; [electron/domains/entity/model/Entity.cjs:46](<../../../../../../../../electron/domains/entity/model/Entity.cjs#L46>)
- 1 additional sites in [symbol-index.json](<../../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/domains/entity/tests/entity-domain.test.cjs:22](<../../../../../../../../electron/domains/entity/tests/entity-domain.test.cjs#L22>) — static-call-site; coverage not established.
- [electron/domains/entity/tests/entity-domain.test.cjs:58](<../../../../../../../../electron/domains/entity/tests/entity-domain.test.cjs#L58>) — static-call-site; coverage not established.
- [electron/domains/entity/tests/entity-domain.test.cjs:73](<../../../../../../../../electron/domains/entity/tests/entity-domain.test.cjs#L73>) — static-call-site; coverage not established.
- [electron/domains/entity/tests/entity-domain.test.cjs:80](<../../../../../../../../electron/domains/entity/tests/entity-domain.test.cjs#L80>) — static-call-site; coverage not established.
- [electron/domains/entity/tests/entity-domain.test.cjs:82](<../../../../../../../../electron/domains/entity/tests/entity-domain.test.cjs#L82>) — static-call-site; coverage not established.
- [electron/domains/entity/tests/entity-domain.test.cjs:3](<../../../../../../../../electron/domains/entity/tests/entity-domain.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-89bdfa02b143cd24"></a>

## Entity.key

[electron/domains/entity/model/Entity.cjs:54](<../../../../../../../../electron/domains/entity/model/Entity.cjs#L54>) · GetAccessor · production · [Entity domain](<../../../../../../modules/entity-domain.md>)

Stable within the Universe across edits, moves and connection changes.

Purpose evidence: jsdoc.

Lexical owner: [Entity](<Entity.cjs.md#s-ac6f61aab61eff1e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/domains/entity/tests/entity-domain.test.cjs:3](<../../../../../../../../electron/domains/entity/tests/entity-domain.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-f3f53c5d1b27e358"></a>

## Entity.getPorts

[electron/domains/entity/model/Entity.cjs:59](<../../../../../../../../electron/domains/entity/model/Entity.cjs#L59>) · MethodDeclaration · production · [Entity domain](<../../../../../../modules/entity-domain.md>)

Returns fresh endpoint definitions. WorldView owns visual anchors and saved relationships.

Purpose evidence: jsdoc.

Lexical owner: [Entity](<Entity.cjs.md#s-ac6f61aab61eff1e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: { input: { id: string; direction: string; }; output: { id: string; direction: string; }; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@20:87&gt;](<../tests/entity-domain.test.cjs.md#s-0d9769d7ad737e1c>) — [electron/domains/entity/tests/entity-domain.test.cjs:32](<../../../../../../../../electron/domains/entity/tests/entity-domain.test.cjs#L32>)
- [&lt;anonymous@20:87&gt;](<../tests/entity-domain.test.cjs.md#s-0d9769d7ad737e1c>) — [electron/domains/entity/tests/entity-domain.test.cjs:33](<../../../../../../../../electron/domains/entity/tests/entity-domain.test.cjs#L33>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/domains/entity/tests/entity-domain.test.cjs:32](<../../../../../../../../electron/domains/entity/tests/entity-domain.test.cjs#L32>) — static-call-site; coverage not established.
- [electron/domains/entity/tests/entity-domain.test.cjs:33](<../../../../../../../../electron/domains/entity/tests/entity-domain.test.cjs#L33>) — static-call-site; coverage not established.
- [electron/domains/entity/tests/entity-domain.test.cjs:3](<../../../../../../../../electron/domains/entity/tests/entity-domain.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-6bb763029bffe74d"></a>

## Entity.updateMetadata

[electron/domains/entity/model/Entity.cjs:67](<../../../../../../../../electron/domains/entity/model/Entity.cjs#L67>) · MethodDeclaration · production · [Entity domain](<../../../../../../modules/entity-domain.md>)

Applies only declared metadata fields after the entire candidate passes validation.

Purpose evidence: jsdoc.

Lexical owner: [Entity](<Entity.cjs.md#s-ac6f61aab61eff1e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| changes | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [Entity.rename](<Entity.cjs.md#s-3e5fe032fae06194>) — [electron/domains/entity/model/Entity.cjs:79](<../../../../../../../../electron/domains/entity/model/Entity.cjs#L79>)
- [Entity.setTags](<Entity.cjs.md#s-cee9e5e0f7ce3127>) — [electron/domains/entity/model/Entity.cjs:84](<../../../../../../../../electron/domains/entity/model/Entity.cjs#L84>)
- [Entity.updateAppearance](<Entity.cjs.md#s-0e9c20de0e27bfb6>) — [electron/domains/entity/model/Entity.cjs:89](<../../../../../../../../electron/domains/entity/model/Entity.cjs#L89>)
- [&lt;anonymous@57:69&gt;.&lt;anonymous@70:19&gt;](<../tests/entity-domain.test.cjs.md#s-a93bd83d03d35278>) — [electron/domains/entity/tests/entity-domain.test.cjs:70](<../../../../../../../../electron/domains/entity/tests/entity-domain.test.cjs#L70>)
- [patchEntityMetadata.writeMetadataPatch](<../worldview-store.cjs.md#s-7893d386a67f06d9>) — [electron/domains/entity/worldview-store.cjs:399](<../../../../../../../../electron/domains/entity/worldview-store.cjs#L399>)

Unresolved / external call sites: 4.

- metadataPatch.parse — external-or-dynamic-dispatch; [electron/domains/entity/model/Entity.cjs:68](<../../../../../../../../electron/domains/entity/model/Entity.cjs#L68>)
- Object.hasOwn — external-or-dynamic-dispatch; [electron/domains/entity/model/Entity.cjs:70](<../../../../../../../../electron/domains/entity/model/Entity.cjs#L70>)
- Error — external-or-dynamic-dispatch; [electron/domains/entity/model/Entity.cjs:73](<../../../../../../../../electron/domains/entity/model/Entity.cjs#L73>)
- metadataSchema.parse — external-or-dynamic-dispatch; [electron/domains/entity/model/Entity.cjs:74](<../../../../../../../../electron/domains/entity/model/Entity.cjs#L74>)

**Related tests / acceptance harnesses:**

- [electron/domains/entity/tests/entity-domain.test.cjs:70](<../../../../../../../../electron/domains/entity/tests/entity-domain.test.cjs#L70>) — static-call-site; coverage not established.
- [electron/domains/entity/tests/entity-domain.test.cjs:3](<../../../../../../../../electron/domains/entity/tests/entity-domain.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-3e5fe032fae06194"></a>

## Entity.rename

[electron/domains/entity/model/Entity.cjs:78](<../../../../../../../../electron/domains/entity/model/Entity.cjs#L78>) · MethodDeclaration · production · [Entity domain](<../../../../../../modules/entity-domain.md>)

Trims and validates the display name while retaining the key.

Purpose evidence: jsdoc.

Lexical owner: [Entity](<Entity.cjs.md#s-ac6f61aab61eff1e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| name | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [Entity.updateMetadata](<Entity.cjs.md#s-6bb763029bffe74d>) — [electron/domains/entity/model/Entity.cjs:79](<../../../../../../../../electron/domains/entity/model/Entity.cjs#L79>)

**Called by (statically resolved):**

- [&lt;anonymous@20:87&gt;](<../tests/entity-domain.test.cjs.md#s-0d9769d7ad737e1c>) — [electron/domains/entity/tests/entity-domain.test.cjs:38](<../../../../../../../../electron/domains/entity/tests/entity-domain.test.cjs#L38>)
- [&lt;anonymous@20:87&gt;](<../tests/entity-domain.test.cjs.md#s-0d9769d7ad737e1c>) — [electron/domains/entity/tests/entity-domain.test.cjs:45](<../../../../../../../../electron/domains/entity/tests/entity-domain.test.cjs#L45>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/domains/entity/tests/entity-domain.test.cjs:38](<../../../../../../../../electron/domains/entity/tests/entity-domain.test.cjs#L38>) — static-call-site; coverage not established.
- [electron/domains/entity/tests/entity-domain.test.cjs:45](<../../../../../../../../electron/domains/entity/tests/entity-domain.test.cjs#L45>) — static-call-site; coverage not established.
- [electron/domains/entity/tests/entity-domain.test.cjs:3](<../../../../../../../../electron/domains/entity/tests/entity-domain.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-cee9e5e0f7ce3127"></a>

## Entity.setTags

[electron/domains/entity/model/Entity.cjs:83](<../../../../../../../../electron/domains/entity/model/Entity.cjs#L83>) · MethodDeclaration · production · [Entity domain](<../../../../../../modules/entity-domain.md>)

Preserves stored tag order, duplicates and spelling, as required by the existing backend contract.

Purpose evidence: jsdoc.

Lexical owner: [Entity](<Entity.cjs.md#s-ac6f61aab61eff1e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| tags | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [Entity.updateMetadata](<Entity.cjs.md#s-6bb763029bffe74d>) — [electron/domains/entity/model/Entity.cjs:84](<../../../../../../../../electron/domains/entity/model/Entity.cjs#L84>)

**Called by (statically resolved):**

- [&lt;anonymous@20:87&gt;](<../tests/entity-domain.test.cjs.md#s-0d9769d7ad737e1c>) — [electron/domains/entity/tests/entity-domain.test.cjs:39](<../../../../../../../../electron/domains/entity/tests/entity-domain.test.cjs#L39>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/domains/entity/tests/entity-domain.test.cjs:39](<../../../../../../../../electron/domains/entity/tests/entity-domain.test.cjs#L39>) — static-call-site; coverage not established.
- [electron/domains/entity/tests/entity-domain.test.cjs:3](<../../../../../../../../electron/domains/entity/tests/entity-domain.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-0e9c20de0e27bfb6"></a>

## Entity.updateAppearance

[electron/domains/entity/model/Entity.cjs:88](<../../../../../../../../electron/domains/entity/model/Entity.cjs#L88>) · MethodDeclaration · production · [Entity domain](<../../../../../../modules/entity-domain.md>)

Updates the color, glyph or bounded PNG data URL together after validating their shape.

Purpose evidence: jsdoc.

Lexical owner: [Entity](<Entity.cjs.md#s-ac6f61aab61eff1e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| changes | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [Entity.updateMetadata](<Entity.cjs.md#s-6bb763029bffe74d>) — [electron/domains/entity/model/Entity.cjs:89](<../../../../../../../../electron/domains/entity/model/Entity.cjs#L89>)

**Called by (statically resolved):**

- [&lt;anonymous@20:87&gt;](<../tests/entity-domain.test.cjs.md#s-0d9769d7ad737e1c>) — [electron/domains/entity/tests/entity-domain.test.cjs:40](<../../../../../../../../electron/domains/entity/tests/entity-domain.test.cjs#L40>)
- [&lt;anonymous@57:69&gt;.&lt;anonymous@74:17&gt;](<../tests/entity-domain.test.cjs.md#s-628adfdb174634df>) — [electron/domains/entity/tests/entity-domain.test.cjs:74](<../../../../../../../../electron/domains/entity/tests/entity-domain.test.cjs#L74>)

Unresolved / external call sites: 1.

- appearancePatch.parse — external-or-dynamic-dispatch; [electron/domains/entity/model/Entity.cjs:89](<../../../../../../../../electron/domains/entity/model/Entity.cjs#L89>)

**Related tests / acceptance harnesses:**

- [electron/domains/entity/tests/entity-domain.test.cjs:40](<../../../../../../../../electron/domains/entity/tests/entity-domain.test.cjs#L40>) — static-call-site; coverage not established.
- [electron/domains/entity/tests/entity-domain.test.cjs:74](<../../../../../../../../electron/domains/entity/tests/entity-domain.test.cjs#L74>) — static-call-site; coverage not established.
- [electron/domains/entity/tests/entity-domain.test.cjs:3](<../../../../../../../../electron/domains/entity/tests/entity-domain.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-d5d81e31b65f24bf"></a>

## Entity.attachSource

[electron/domains/entity/model/Entity.cjs:93](<../../../../../../../../electron/domains/entity/model/Entity.cjs#L93>) · MethodDeclaration · production · [Entity domain](<../../../../../../modules/entity-domain.md>)

Upserts one structurally valid reference. The storage adapter verifies the actual Vault file before calling.

Purpose evidence: jsdoc.

Lexical owner: [Entity](<Entity.cjs.md#s-ac6f61aab61eff1e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| reference | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@78:87&gt;](<../tests/entity-domain.test.cjs.md#s-98745232b9968f8f>) — [electron/domains/entity/tests/entity-domain.test.cjs:83](<../../../../../../../../electron/domains/entity/tests/entity-domain.test.cjs#L83>)
- [&lt;anonymous@78:87&gt;](<../tests/entity-domain.test.cjs.md#s-98745232b9968f8f>) — [electron/domains/entity/tests/entity-domain.test.cjs:84](<../../../../../../../../electron/domains/entity/tests/entity-domain.test.cjs#L84>)
- [&lt;anonymous@78:87&gt;.&lt;anonymous@85:17&gt;](<../tests/entity-domain.test.cjs.md#s-dbbaf69e6a8bf96b>) — [electron/domains/entity/tests/entity-domain.test.cjs:85](<../../../../../../../../electron/domains/entity/tests/entity-domain.test.cjs#L85>)
- [assignWorldViewFiles.assignFiles](<../worldview-store.cjs.md#s-6fb69637a7e981f0>) — [electron/domains/entity/worldview-store.cjs:305](<../../../../../../../../electron/domains/entity/worldview-store.cjs#L305>)

Unresolved / external call sites: 4.

- sourceReference.parse — external-or-dynamic-dispatch; [electron/domains/entity/model/Entity.cjs:94](<../../../../../../../../electron/domains/entity/model/Entity.cjs#L94>)
- this.#sources.has — external-or-dynamic-dispatch; [electron/domains/entity/model/Entity.cjs:96](<../../../../../../../../electron/domains/entity/model/Entity.cjs#L96>)
- Error — external-or-dynamic-dispatch; [electron/domains/entity/model/Entity.cjs:99](<../../../../../../../../electron/domains/entity/model/Entity.cjs#L99>)
- this.#sources.set — external-or-dynamic-dispatch; [electron/domains/entity/model/Entity.cjs:100](<../../../../../../../../electron/domains/entity/model/Entity.cjs#L100>)

**Related tests / acceptance harnesses:**

- [electron/domains/entity/tests/entity-domain.test.cjs:83](<../../../../../../../../electron/domains/entity/tests/entity-domain.test.cjs#L83>) — static-call-site; coverage not established.
- [electron/domains/entity/tests/entity-domain.test.cjs:84](<../../../../../../../../electron/domains/entity/tests/entity-domain.test.cjs#L84>) — static-call-site; coverage not established.
- [electron/domains/entity/tests/entity-domain.test.cjs:85](<../../../../../../../../electron/domains/entity/tests/entity-domain.test.cjs#L85>) — static-call-site; coverage not established.
- [electron/domains/entity/tests/entity-domain.test.cjs:3](<../../../../../../../../electron/domains/entity/tests/entity-domain.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-272a7e2fc98ca22b"></a>

## Entity.hasSource

[electron/domains/entity/model/Entity.cjs:104](<../../../../../../../../electron/domains/entity/model/Entity.cjs#L104>) · MethodDeclaration · production · [Entity domain](<../../../../../../modules/entity-domain.md>)

Tests exact association identity without exposing stored source metadata.

Purpose evidence: jsdoc.

Lexical owner: [Entity](<Entity.cjs.md#s-ac6f61aab61eff1e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| sourceId | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [unassignWorldViewFile.unassignFile.&lt;anonymous@351:62&gt;](<../worldview-store.cjs.md#s-58946a1d1bf33726>) — [electron/domains/entity/worldview-store.cjs:352](<../../../../../../../../electron/domains/entity/worldview-store.cjs#L352>)

Unresolved / external call sites: 1.

- this.#sources.has — external-or-dynamic-dispatch; [electron/domains/entity/model/Entity.cjs:105](<../../../../../../../../electron/domains/entity/model/Entity.cjs#L105>)

**Related tests / acceptance harnesses:**

- [electron/domains/entity/tests/entity-domain.test.cjs:3](<../../../../../../../../electron/domains/entity/tests/entity-domain.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-e6ba195fea19d208"></a>

## Entity.detachSource

[electron/domains/entity/model/Entity.cjs:109](<../../../../../../../../electron/domains/entity/model/Entity.cjs#L109>) · MethodDeclaration · production · [Entity domain](<../../../../../../modules/entity-domain.md>)

Removes an exact recorded ID. Repeating a removal has no further effect.

Purpose evidence: jsdoc.

Lexical owner: [Entity](<Entity.cjs.md#s-ac6f61aab61eff1e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| sourceId | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@78:87&gt;](<../tests/entity-domain.test.cjs.md#s-98745232b9968f8f>) — [electron/domains/entity/tests/entity-domain.test.cjs:89](<../../../../../../../../electron/domains/entity/tests/entity-domain.test.cjs#L89>)
- [&lt;anonymous@78:87&gt;](<../tests/entity-domain.test.cjs.md#s-98745232b9968f8f>) — [electron/domains/entity/tests/entity-domain.test.cjs:90](<../../../../../../../../electron/domains/entity/tests/entity-domain.test.cjs#L90>)
- [unassignWorldViewFile.unassignFile](<../worldview-store.cjs.md#s-207b02cadaf17fb3>) — [electron/domains/entity/worldview-store.cjs:350](<../../../../../../../../electron/domains/entity/worldview-store.cjs#L350>)

Unresolved / external call sites: 2.

- Error — external-or-dynamic-dispatch; [electron/domains/entity/model/Entity.cjs:111](<../../../../../../../../electron/domains/entity/model/Entity.cjs#L111>)
- this.#sources.delete — external-or-dynamic-dispatch; [electron/domains/entity/model/Entity.cjs:112](<../../../../../../../../electron/domains/entity/model/Entity.cjs#L112>)

**Related tests / acceptance harnesses:**

- [electron/domains/entity/tests/entity-domain.test.cjs:89](<../../../../../../../../electron/domains/entity/tests/entity-domain.test.cjs#L89>) — static-call-site; coverage not established.
- [electron/domains/entity/tests/entity-domain.test.cjs:90](<../../../../../../../../electron/domains/entity/tests/entity-domain.test.cjs#L90>) — static-call-site; coverage not established.
- [electron/domains/entity/tests/entity-domain.test.cjs:3](<../../../../../../../../electron/domains/entity/tests/entity-domain.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-8a8fd069f9bac4e4"></a>

## Entity.getSnapshot

[electron/domains/entity/model/Entity.cjs:118](<../../../../../../../../electron/domains/entity/model/Entity.cjs#L118>) · MethodDeclaration · production · [Entity domain](<../../../../../../modules/entity-domain.md>)

Returns detached Entity state in recorded order, suitable for backend DTOs or persistence mapping.

Purpose evidence: jsdoc.

Lexical owner: [Entity](<Entity.cjs.md#s-ac6f61aab61eff1e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: EntitySnapshot (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@20:87&gt;](<../tests/entity-domain.test.cjs.md#s-0d9769d7ad737e1c>) — [electron/domains/entity/tests/entity-domain.test.cjs:28](<../../../../../../../../electron/domains/entity/tests/entity-domain.test.cjs#L28>)
- [&lt;anonymous@20:87&gt;](<../tests/entity-domain.test.cjs.md#s-0d9769d7ad737e1c>) — [electron/domains/entity/tests/entity-domain.test.cjs:37](<../../../../../../../../electron/domains/entity/tests/entity-domain.test.cjs#L37>)
- [&lt;anonymous@20:87&gt;](<../tests/entity-domain.test.cjs.md#s-0d9769d7ad737e1c>) — [electron/domains/entity/tests/entity-domain.test.cjs:47](<../../../../../../../../electron/domains/entity/tests/entity-domain.test.cjs#L47>)
- [&lt;anonymous@57:69&gt;](<../tests/entity-domain.test.cjs.md#s-7646f6603c6cab35>) — [electron/domains/entity/tests/entity-domain.test.cjs:59](<../../../../../../../../electron/domains/entity/tests/entity-domain.test.cjs#L59>)
- [&lt;anonymous@57:69&gt;](<../tests/entity-domain.test.cjs.md#s-7646f6603c6cab35>) — [electron/domains/entity/tests/entity-domain.test.cjs:71](<../../../../../../../../electron/domains/entity/tests/entity-domain.test.cjs#L71>)
- [&lt;anonymous@78:87&gt;](<../tests/entity-domain.test.cjs.md#s-98745232b9968f8f>) — [electron/domains/entity/tests/entity-domain.test.cjs:86](<../../../../../../../../electron/domains/entity/tests/entity-domain.test.cjs#L86>)
- [&lt;anonymous@78:87&gt;](<../tests/entity-domain.test.cjs.md#s-98745232b9968f8f>) — [electron/domains/entity/tests/entity-domain.test.cjs:91](<../../../../../../../../electron/domains/entity/tests/entity-domain.test.cjs#L91>)
- [validateChip](<../worldview-store.cjs.md#s-c8761a1b2b8d150a>) — [electron/domains/entity/worldview-store.cjs:51](<../../../../../../../../electron/domains/entity/worldview-store.cjs#L51>)
- [assignWorldViewFiles.assignFiles](<../worldview-store.cjs.md#s-6fb69637a7e981f0>) — [electron/domains/entity/worldview-store.cjs:314](<../../../../../../../../electron/domains/entity/worldview-store.cjs#L314>)
- [readEntitySnapshot](<../worldview-store.cjs.md#s-0bc55610e941689d>) — [electron/domains/entity/worldview-store.cjs:388](<../../../../../../../../electron/domains/entity/worldview-store.cjs#L388>)
- [patchEntityMetadata.writeMetadataPatch](<../worldview-store.cjs.md#s-7893d386a67f06d9>) — [electron/domains/entity/worldview-store.cjs:400](<../../../../../../../../electron/domains/entity/worldview-store.cjs#L400>)

Unresolved / external call sites: 2.

- structuredClone — external-or-dynamic-dispatch; [electron/domains/entity/model/Entity.cjs:119](<../../../../../../../../electron/domains/entity/model/Entity.cjs#L119>)
- this.#sources.values — external-or-dynamic-dispatch; [electron/domains/entity/model/Entity.cjs:123](<../../../../../../../../electron/domains/entity/model/Entity.cjs#L123>)

**Related tests / acceptance harnesses:**

- [electron/domains/entity/tests/entity-domain.test.cjs:28](<../../../../../../../../electron/domains/entity/tests/entity-domain.test.cjs#L28>) — static-call-site; coverage not established.
- [electron/domains/entity/tests/entity-domain.test.cjs:37](<../../../../../../../../electron/domains/entity/tests/entity-domain.test.cjs#L37>) — static-call-site; coverage not established.
- [electron/domains/entity/tests/entity-domain.test.cjs:47](<../../../../../../../../electron/domains/entity/tests/entity-domain.test.cjs#L47>) — static-call-site; coverage not established.
- [electron/domains/entity/tests/entity-domain.test.cjs:59](<../../../../../../../../electron/domains/entity/tests/entity-domain.test.cjs#L59>) — static-call-site; coverage not established.
- [electron/domains/entity/tests/entity-domain.test.cjs:71](<../../../../../../../../electron/domains/entity/tests/entity-domain.test.cjs#L71>) — static-call-site; coverage not established.
- [electron/domains/entity/tests/entity-domain.test.cjs:86](<../../../../../../../../electron/domains/entity/tests/entity-domain.test.cjs#L86>) — static-call-site; coverage not established.
- [electron/domains/entity/tests/entity-domain.test.cjs:91](<../../../../../../../../electron/domains/entity/tests/entity-domain.test.cjs#L91>) — static-call-site; coverage not established.
- [electron/domains/entity/tests/entity-domain.test.cjs:3](<../../../../../../../../electron/domains/entity/tests/entity-domain.test.cjs#L3>) — file-import-only; coverage not established.
