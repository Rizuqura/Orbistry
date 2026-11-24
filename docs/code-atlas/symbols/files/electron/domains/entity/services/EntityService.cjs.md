# electron/domains/entity/services/EntityService.cjs: symbols

[Atlas](<../../../../../../README.md>) / [Entity domain](<../../../../../../modules/entity-domain.md>) / [electron/domains/entity/services/EntityService.cjs:1](<../../../../../../../../electron/domains/entity/services/EntityService.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/domains/entity/services/EntityService.cjs](<EntityService.cjs.md#s-8b938502328a17d4>) (Module)
- [EntityService](<EntityService.cjs.md#s-ab72a5463244b2fd>) (ClassDeclaration)
- [EntityService.constructor](<EntityService.cjs.md#s-a2eab88e993348f3>) (Constructor)
- [EntityService.constructor.&lt;anonymous@17:21&gt;](<EntityService.cjs.md#s-63bd3e075844a4ed>) (ArrowFunction)
- [EntityService.#permit](<EntityService.cjs.md#s-211cfcd8c8342997>) (MethodDeclaration)
- [EntityService.#run](<EntityService.cjs.md#s-d0ec59c4a934fcb1>) (MethodDeclaration)
- [EntityService.#run.recheck](<EntityService.cjs.md#s-cc538fbad08f018d>) (ArrowFunction)
- [EntityService.load](<EntityService.cjs.md#s-4875c21390630c2b>) (MethodDeclaration)
- [EntityService.load.&lt;anonymous@45:46&gt;](<EntityService.cjs.md#s-27c229f26dbeec39>) (ArrowFunction)
- [EntityService.getContextReferences](<EntityService.cjs.md#s-e2eb3763bd0f7c10>) (MethodDeclaration)
- [EntityService.getContextReferences.&lt;anonymous@52:46&gt;](<EntityService.cjs.md#s-2613cbaba5b68b23>) (ArrowFunction)
- [EntityService.rename](<EntityService.cjs.md#s-43e36ad0ec731850>) (MethodDeclaration)
- [EntityService.updateMetadata](<EntityService.cjs.md#s-f9b00da652446f2a>) (MethodDeclaration)
- [EntityService.updateMetadata.&lt;anonymous@64:55&gt;](<EntityService.cjs.md#s-c745f1d9d2ea5553>) (ArrowFunction)
- [EntityService.assignSources](<EntityService.cjs.md#s-37bb8f6e632e75c6>) (MethodDeclaration)
- [EntityService.assignSources.&lt;anonymous@71:56&gt;](<EntityService.cjs.md#s-a955dee164f68fb1>) (ArrowFunction)
- [EntityService.unassignSource](<EntityService.cjs.md#s-3811f22ee35e161e>) (MethodDeclaration)
- [EntityService.unassignSource.&lt;anonymous@78:57&gt;](<EntityService.cjs.md#s-d78e1a2e4be377ea>) (ArrowFunction)

<a id="s-8b938502328a17d4"></a>

## electron/domains/entity/services/EntityService.cjs

[electron/domains/entity/services/EntityService.cjs:1](<../../../../../../../../electron/domains/entity/services/EntityService.cjs#L1>) · Module · production · [Entity domain](<../../../../../../modules/entity-domain.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- require — module-loader; [electron/domains/entity/services/EntityService.cjs:1](<../../../../../../../../electron/domains/entity/services/EntityService.cjs#L1>)
- require — module-loader; [electron/domains/entity/services/EntityService.cjs:2](<../../../../../../../../electron/domains/entity/services/EntityService.cjs#L2>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-ab72a5463244b2fd"></a>

## EntityService

[electron/domains/entity/services/EntityService.cjs:8](<../../../../../../../../electron/domains/entity/services/EntityService.cjs#L8>) · ClassDeclaration · production · [Entity domain](<../../../../../../modules/entity-domain.md>)

Backend application boundary. Policies come from the trusted host and are evaluated for the actual root, Entity and operation.

Purpose evidence: jsdoc.

Exported as: EntityService ([electron/domains/entity/services/EntityService.cjs:1](<../../../../../../../../electron/domains/entity/services/EntityService.cjs#L1>)).

Lexical owner: [electron/domains/entity/services/EntityService.cjs](<EntityService.cjs.md#s-8b938502328a17d4>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-a2eab88e993348f3"></a>

## EntityService.constructor

[electron/domains/entity/services/EntityService.cjs:15](<../../../../../../../../electron/domains/entity/services/EntityService.cjs#L15>) · Constructor · production · [Entity domain](<../../../../../../modules/entity-domain.md>)

Inject the host policy and optionally a repository for isolated tests. Omitting authorization denies every call.

Purpose evidence: jsdoc.

Lexical owner: [EntityService](<EntityService.cjs.md#s-ab72a5463244b2fd>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| {     repository = new EntityRepository(),     authorization = () =&gt; false,   } | { repository?: EntityRepository; authorization?: EntityAuthorization; } | compiler-inferred | optional, default present |

Returns: EntityService (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [EntityRepository](<../repositories/EntityRepository.cjs.md#s-2917112168686a52>) — [electron/domains/entity/services/EntityService.cjs:16](<../../../../../../../../electron/domains/entity/services/EntityService.cjs#L16>)

**Called by (statically resolved):**

- [registerWorldViewIpc](<../../../core/ipc/worldview-ipc.cjs.md#s-9fddfe3a6bc8df63>) — [electron/core/ipc/worldview-ipc.cjs:21](<../../../../../../../../electron/core/ipc/worldview-ipc.cjs#L21>)
- [&lt;anonymous@35:94&gt;](<../tests/entity-repository.test.cjs.md#s-f6295f2de7da93d4>) — [electron/domains/entity/tests/entity-repository.test.cjs:38](<../../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L38>)
- [&lt;anonymous@129:97&gt;](<../tests/entity-repository.test.cjs.md#s-a09e4e6fcd25c9f0>) — [electron/domains/entity/tests/entity-repository.test.cjs:137](<../../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L137>)
- [&lt;anonymous@129:97&gt;](<../tests/entity-repository.test.cjs.md#s-a09e4e6fcd25c9f0>) — [electron/domains/entity/tests/entity-repository.test.cjs:145](<../../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L145>)
- [&lt;anonymous@196:95&gt;](<../tests/entity-repository.test.cjs.md#s-63471ff34ad484bf>) — [electron/domains/entity/tests/entity-repository.test.cjs:202](<../../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L202>)
- [&lt;anonymous@6:88&gt;](<../tests/entity-service.test.cjs.md#s-10f81c047d246d3b>) — [electron/domains/entity/tests/entity-service.test.cjs:13](<../../../../../../../../electron/domains/entity/tests/entity-service.test.cjs#L13>)
- [&lt;anonymous@26:75&gt;](<../tests/entity-service.test.cjs.md#s-8555e3d0e4681c8c>) — [electron/domains/entity/tests/entity-service.test.cjs:30](<../../../../../../../../electron/domains/entity/tests/entity-service.test.cjs#L30>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/domains/entity/tests/entity-repository.test.cjs:38](<../../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L38>) — static-call-site; coverage not established.
- [electron/domains/entity/tests/entity-repository.test.cjs:137](<../../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L137>) — static-call-site; coverage not established.
- [electron/domains/entity/tests/entity-repository.test.cjs:145](<../../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L145>) — static-call-site; coverage not established.
- [electron/domains/entity/tests/entity-repository.test.cjs:202](<../../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L202>) — static-call-site; coverage not established.
- [electron/domains/entity/tests/entity-service.test.cjs:13](<../../../../../../../../electron/domains/entity/tests/entity-service.test.cjs#L13>) — static-call-site; coverage not established.
- [electron/domains/entity/tests/entity-service.test.cjs:30](<../../../../../../../../electron/domains/entity/tests/entity-service.test.cjs#L30>) — static-call-site; coverage not established.

<a id="s-63bd3e075844a4ed"></a>

## EntityService.constructor.&lt;anonymous@17:21&gt;

[electron/domains/entity/services/EntityService.cjs:17](<../../../../../../../../electron/domains/entity/services/EntityService.cjs#L17>) · ArrowFunction · production · [Entity domain](<../../../../../../modules/entity-domain.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EntityService.constructor](<EntityService.cjs.md#s-a2eab88e993348f3>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-211cfcd8c8342997"></a>

## EntityService.#permit

[electron/domains/entity/services/EntityService.cjs:24](<../../../../../../../../electron/domains/entity/services/EntityService.cjs#L24>) · MethodDeclaration · production · [Entity domain](<../../../../../../modules/entity-domain.md>)

Requires a literal grant for this scope. The host may re-evaluate membership or active-Universe state.

Purpose evidence: jsdoc.

Lexical owner: [EntityService](<EntityService.cjs.md#s-ab72a5463244b2fd>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| entityId | any | compiler-inferred | required |
| operation | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [EntityService.#run](<EntityService.cjs.md#s-d0ec59c4a934fcb1>) — [electron/domains/entity/services/EntityService.cjs:35](<../../../../../../../../electron/domains/entity/services/EntityService.cjs#L35>)
- [EntityService.#run.recheck](<EntityService.cjs.md#s-cc538fbad08f018d>) — [electron/domains/entity/services/EntityService.cjs:37](<../../../../../../../../electron/domains/entity/services/EntityService.cjs#L37>)
- [EntityService.#run](<EntityService.cjs.md#s-d0ec59c4a934fcb1>) — [electron/domains/entity/services/EntityService.cjs:39](<../../../../../../../../electron/domains/entity/services/EntityService.cjs#L39>)

Unresolved / external call sites: 3.

- entityKey.parse — external-or-dynamic-dispatch; [electron/domains/entity/services/EntityService.cjs:25](<../../../../../../../../electron/domains/entity/services/EntityService.cjs#L25>)
- this.#authorization — external-or-dynamic-dispatch; [electron/domains/entity/services/EntityService.cjs:26](<../../../../../../../../electron/domains/entity/services/EntityService.cjs#L26>)
- Error — external-or-dynamic-dispatch; [electron/domains/entity/services/EntityService.cjs:27](<../../../../../../../../electron/domains/entity/services/EntityService.cjs#L27>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d0ec59c4a934fcb1"></a>

## EntityService.#run

[electron/domains/entity/services/EntityService.cjs:34](<../../../../../../../../electron/domains/entity/services/EntityService.cjs#L34>) · MethodDeclaration · production · [Entity domain](<../../../../../../modules/entity-domain.md>)

Admits a single repository operation, then rechecks before disclosing its DTO. A later denial cannot undo a committed write.

Purpose evidence: jsdoc.

Lexical owner: [EntityService](<EntityService.cjs.md#s-ab72a5463244b2fd>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| entityId | any | compiler-inferred | required |
| operation | any | compiler-inferred | required |
| perform | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [EntityService.#permit](<EntityService.cjs.md#s-211cfcd8c8342997>) — [electron/domains/entity/services/EntityService.cjs:35](<../../../../../../../../electron/domains/entity/services/EntityService.cjs#L35>)
- [EntityService.#permit](<EntityService.cjs.md#s-211cfcd8c8342997>) — [electron/domains/entity/services/EntityService.cjs:39](<../../../../../../../../electron/domains/entity/services/EntityService.cjs#L39>)

**Called by (statically resolved):**

- [EntityService.load](<EntityService.cjs.md#s-4875c21390630c2b>) — [electron/domains/entity/services/EntityService.cjs:45](<../../../../../../../../electron/domains/entity/services/EntityService.cjs#L45>)
- [EntityService.getContextReferences](<EntityService.cjs.md#s-e2eb3763bd0f7c10>) — [electron/domains/entity/services/EntityService.cjs:52](<../../../../../../../../electron/domains/entity/services/EntityService.cjs#L52>)
- [EntityService.updateMetadata](<EntityService.cjs.md#s-f9b00da652446f2a>) — [electron/domains/entity/services/EntityService.cjs:64](<../../../../../../../../electron/domains/entity/services/EntityService.cjs#L64>)
- [EntityService.assignSources](<EntityService.cjs.md#s-37bb8f6e632e75c6>) — [electron/domains/entity/services/EntityService.cjs:71](<../../../../../../../../electron/domains/entity/services/EntityService.cjs#L71>)
- [EntityService.unassignSource](<EntityService.cjs.md#s-3811f22ee35e161e>) — [electron/domains/entity/services/EntityService.cjs:78](<../../../../../../../../electron/domains/entity/services/EntityService.cjs#L78>)

Unresolved / external call sites: 1.

- perform — external-or-dynamic-dispatch; [electron/domains/entity/services/EntityService.cjs:38](<../../../../../../../../electron/domains/entity/services/EntityService.cjs#L38>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-cc538fbad08f018d"></a>

## EntityService.#run.recheck

[electron/domains/entity/services/EntityService.cjs:37](<../../../../../../../../electron/domains/entity/services/EntityService.cjs#L37>) · ArrowFunction · production · [Entity domain](<../../../../../../modules/entity-domain.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EntityService.#run](<EntityService.cjs.md#s-d0ec59c4a934fcb1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [EntityService.#permit](<EntityService.cjs.md#s-211cfcd8c8342997>) — [electron/domains/entity/services/EntityService.cjs:37](<../../../../../../../../electron/domains/entity/services/EntityService.cjs#L37>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-4875c21390630c2b"></a>

## EntityService.load

[electron/domains/entity/services/EntityService.cjs:44](<../../../../../../../../electron/domains/entity/services/EntityService.cjs#L44>) · MethodDeclaration · production · [Entity domain](<../../../../../../modules/entity-domain.md>)

Returns detached metadata and recorded references. Associated resources use this same scoped key at their own boundaries.

Purpose evidence: jsdoc.

Lexical owner: [EntityService](<EntityService.cjs.md#s-ab72a5463244b2fd>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { root } | { root: any; } | compiler-inferred | required |
| entityId | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [EntityService.#run](<EntityService.cjs.md#s-d0ec59c4a934fcb1>) — [electron/domains/entity/services/EntityService.cjs:45](<../../../../../../../../electron/domains/entity/services/EntityService.cjs#L45>)

**Called by (statically resolved):**

- [&lt;anonymous@35:94&gt;](<../tests/entity-repository.test.cjs.md#s-f6295f2de7da93d4>) — [electron/domains/entity/tests/entity-repository.test.cjs:42](<../../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L42>)
- [&lt;anonymous@35:94&gt;](<../tests/entity-repository.test.cjs.md#s-f6295f2de7da93d4>) — [electron/domains/entity/tests/entity-repository.test.cjs:76](<../../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L76>)
- [&lt;anonymous@35:94&gt;](<../tests/entity-repository.test.cjs.md#s-f6295f2de7da93d4>) — [electron/domains/entity/tests/entity-repository.test.cjs:103](<../../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L103>)
- [&lt;anonymous@6:88&gt;.&lt;anonymous@15:7&gt;](<../tests/entity-service.test.cjs.md#s-bd62f74abff36237>) — [electron/domains/entity/tests/entity-service.test.cjs:15](<../../../../../../../../electron/domains/entity/tests/entity-service.test.cjs#L15>)
- [&lt;anonymous@26:75&gt;](<../tests/entity-service.test.cjs.md#s-8555e3d0e4681c8c>) — [electron/domains/entity/tests/entity-service.test.cjs:39](<../../../../../../../../electron/domains/entity/tests/entity-service.test.cjs#L39>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/domains/entity/tests/entity-repository.test.cjs:42](<../../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L42>) — static-call-site; coverage not established.
- [electron/domains/entity/tests/entity-repository.test.cjs:76](<../../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L76>) — static-call-site; coverage not established.
- [electron/domains/entity/tests/entity-repository.test.cjs:103](<../../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L103>) — static-call-site; coverage not established.
- [electron/domains/entity/tests/entity-service.test.cjs:15](<../../../../../../../../electron/domains/entity/tests/entity-service.test.cjs#L15>) — static-call-site; coverage not established.
- [electron/domains/entity/tests/entity-service.test.cjs:39](<../../../../../../../../electron/domains/entity/tests/entity-service.test.cjs#L39>) — static-call-site; coverage not established.

<a id="s-27c229f26dbeec39"></a>

## EntityService.load.&lt;anonymous@45:46&gt;

[electron/domains/entity/services/EntityService.cjs:45](<../../../../../../../../electron/domains/entity/services/EntityService.cjs#L45>) · ArrowFunction · production · [Entity domain](<../../../../../../modules/entity-domain.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EntityService.load](<EntityService.cjs.md#s-4875c21390630c2b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [EntityRepository.load](<../repositories/EntityRepository.cjs.md#s-41d14a547f2204eb>) — [electron/domains/entity/services/EntityService.cjs:46](<../../../../../../../../electron/domains/entity/services/EntityService.cjs#L46>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-e2eb3763bd0f7c10"></a>

## EntityService.getContextReferences

[electron/domains/entity/services/EntityService.cjs:51](<../../../../../../../../electron/domains/entity/services/EntityService.cjs#L51>) · MethodDeclaration · production · [Entity domain](<../../../../../../modules/entity-domain.md>)

Admits a metadata read before returning scoped lookup inputs for the authoritative companion stores.

Purpose evidence: jsdoc.

Lexical owner: [EntityService](<EntityService.cjs.md#s-ab72a5463244b2fd>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { root } | { root: any; } | compiler-inferred | required |
| entityId | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [EntityService.#run](<EntityService.cjs.md#s-d0ec59c4a934fcb1>) — [electron/domains/entity/services/EntityService.cjs:52](<../../../../../../../../electron/domains/entity/services/EntityService.cjs#L52>)

**Called by (statically resolved):**

- [&lt;anonymous@35:94&gt;](<../tests/entity-repository.test.cjs.md#s-f6295f2de7da93d4>) — [electron/domains/entity/tests/entity-repository.test.cjs:104](<../../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L104>)
- [&lt;anonymous@35:94&gt;](<../tests/entity-repository.test.cjs.md#s-f6295f2de7da93d4>) — [electron/domains/entity/tests/entity-repository.test.cjs:116](<../../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L116>)
- [&lt;anonymous@6:88&gt;.&lt;anonymous@16:7&gt;](<../tests/entity-service.test.cjs.md#s-86bf1067c8b3248f>) — [electron/domains/entity/tests/entity-service.test.cjs:16](<../../../../../../../../electron/domains/entity/tests/entity-service.test.cjs#L16>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/domains/entity/tests/entity-repository.test.cjs:104](<../../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L104>) — static-call-site; coverage not established.
- [electron/domains/entity/tests/entity-repository.test.cjs:116](<../../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L116>) — static-call-site; coverage not established.
- [electron/domains/entity/tests/entity-service.test.cjs:16](<../../../../../../../../electron/domains/entity/tests/entity-service.test.cjs#L16>) — static-call-site; coverage not established.

<a id="s-2613cbaba5b68b23"></a>

## EntityService.getContextReferences.&lt;anonymous@52:46&gt;

[electron/domains/entity/services/EntityService.cjs:52](<../../../../../../../../electron/domains/entity/services/EntityService.cjs#L52>) · ArrowFunction · production · [Entity domain](<../../../../../../modules/entity-domain.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EntityService.getContextReferences](<EntityService.cjs.md#s-e2eb3763bd0f7c10>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [EntityRepository.getContextReferences](<../repositories/EntityRepository.cjs.md#s-698bd30d44856403>) — [electron/domains/entity/services/EntityService.cjs:53](<../../../../../../../../electron/domains/entity/services/EntityService.cjs#L53>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-43e36ad0ec731850"></a>

## EntityService.rename

[electron/domains/entity/services/EntityService.cjs:58](<../../../../../../../../electron/domains/entity/services/EntityService.cjs#L58>) · MethodDeclaration · production · [Entity domain](<../../../../../../modules/entity-domain.md>)

Changes only the display name of an existing record, under the metadata-edit policy.

Purpose evidence: jsdoc.

Lexical owner: [EntityService](<EntityService.cjs.md#s-ab72a5463244b2fd>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| context | any | compiler-inferred | required |
| entityId | any | compiler-inferred | required |
| name | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [EntityService.updateMetadata](<EntityService.cjs.md#s-f9b00da652446f2a>) — [electron/domains/entity/services/EntityService.cjs:59](<../../../../../../../../electron/domains/entity/services/EntityService.cjs#L59>)

**Called by (statically resolved):**

- [&lt;anonymous@35:94&gt;](<../tests/entity-repository.test.cjs.md#s-f6295f2de7da93d4>) — [electron/domains/entity/tests/entity-repository.test.cjs:73](<../../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L73>)
- [&lt;anonymous@129:97&gt;](<../tests/entity-repository.test.cjs.md#s-a09e4e6fcd25c9f0>) — [electron/domains/entity/tests/entity-repository.test.cjs:138](<../../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L138>)
- [&lt;anonymous@196:95&gt;](<../tests/entity-repository.test.cjs.md#s-63471ff34ad484bf>) — [electron/domains/entity/tests/entity-repository.test.cjs:209](<../../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L209>)
- [&lt;anonymous@6:88&gt;.&lt;anonymous@17:7&gt;](<../tests/entity-service.test.cjs.md#s-4f27b4565fd67c54>) — [electron/domains/entity/tests/entity-service.test.cjs:17](<../../../../../../../../electron/domains/entity/tests/entity-service.test.cjs#L17>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/domains/entity/tests/entity-repository.test.cjs:73](<../../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L73>) — static-call-site; coverage not established.
- [electron/domains/entity/tests/entity-repository.test.cjs:138](<../../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L138>) — static-call-site; coverage not established.
- [electron/domains/entity/tests/entity-repository.test.cjs:209](<../../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L209>) — static-call-site; coverage not established.
- [electron/domains/entity/tests/entity-service.test.cjs:17](<../../../../../../../../electron/domains/entity/tests/entity-service.test.cjs#L17>) — static-call-site; coverage not established.

<a id="s-f9b00da652446f2a"></a>

## EntityService.updateMetadata

[electron/domains/entity/services/EntityService.cjs:63](<../../../../../../../../electron/domains/entity/services/EntityService.cjs#L63>) · MethodDeclaration · production · [Entity domain](<../../../../../../modules/entity-domain.md>)

Applies a bounded Entity-only patch to the latest existing record. Placement and connections have independent owners.

Purpose evidence: jsdoc.

Lexical owner: [EntityService](<EntityService.cjs.md#s-ab72a5463244b2fd>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { root } | { root: any; } | compiler-inferred | required |
| entityId | any | compiler-inferred | required |
| changes | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [EntityService.#run](<EntityService.cjs.md#s-d0ec59c4a934fcb1>) — [electron/domains/entity/services/EntityService.cjs:64](<../../../../../../../../electron/domains/entity/services/EntityService.cjs#L64>)

**Called by (statically resolved):**

- [EntityService.rename](<EntityService.cjs.md#s-43e36ad0ec731850>) — [electron/domains/entity/services/EntityService.cjs:59](<../../../../../../../../electron/domains/entity/services/EntityService.cjs#L59>)
- [&lt;anonymous@35:94&gt;](<../tests/entity-repository.test.cjs.md#s-f6295f2de7da93d4>) — [electron/domains/entity/tests/entity-repository.test.cjs:74](<../../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L74>)
- [&lt;anonymous@129:97&gt;](<../tests/entity-repository.test.cjs.md#s-a09e4e6fcd25c9f0>) — [electron/domains/entity/tests/entity-repository.test.cjs:150](<../../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L150>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/domains/entity/tests/entity-repository.test.cjs:74](<../../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L74>) — static-call-site; coverage not established.
- [electron/domains/entity/tests/entity-repository.test.cjs:150](<../../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L150>) — static-call-site; coverage not established.

<a id="s-c745f1d9d2ea5553"></a>

## EntityService.updateMetadata.&lt;anonymous@64:55&gt;

[electron/domains/entity/services/EntityService.cjs:64](<../../../../../../../../electron/domains/entity/services/EntityService.cjs#L64>) · ArrowFunction · production · [Entity domain](<../../../../../../modules/entity-domain.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EntityService.updateMetadata](<EntityService.cjs.md#s-f9b00da652446f2a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| recheck | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [EntityRepository.updateMetadata](<../repositories/EntityRepository.cjs.md#s-61e018993e6359d1>) — [electron/domains/entity/services/EntityService.cjs:65](<../../../../../../../../electron/domains/entity/services/EntityService.cjs#L65>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-37bb8f6e632e75c6"></a>

## EntityService.assignSources

[electron/domains/entity/services/EntityService.cjs:70](<../../../../../../../../electron/domains/entity/services/EntityService.cjs#L70>) · MethodDeclaration · production · [Entity domain](<../../../../../../modules/entity-domain.md>)

Resolves all requested Vault references through existing trusted storage before writing one batch.

Purpose evidence: jsdoc.

Lexical owner: [EntityService](<EntityService.cjs.md#s-ab72a5463244b2fd>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { root } | { root: any; } | compiler-inferred | required |
| entityId | any | compiler-inferred | required |
| references | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [EntityService.#run](<EntityService.cjs.md#s-d0ec59c4a934fcb1>) — [electron/domains/entity/services/EntityService.cjs:71](<../../../../../../../../electron/domains/entity/services/EntityService.cjs#L71>)

**Called by (statically resolved):**

- [registerWorldViewIpc.assign](<../../../core/ipc/worldview-ipc.cjs.md#s-7e31517fb2a8baf1>) — [electron/core/ipc/worldview-ipc.cjs:254](<../../../../../../../../electron/core/ipc/worldview-ipc.cjs#L254>)
- [&lt;anonymous@35:94&gt;](<../tests/entity-repository.test.cjs.md#s-f6295f2de7da93d4>) — [electron/domains/entity/tests/entity-repository.test.cjs:64](<../../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L64>)
- [&lt;anonymous@35:94&gt;](<../tests/entity-repository.test.cjs.md#s-f6295f2de7da93d4>) — [electron/domains/entity/tests/entity-repository.test.cjs:71](<../../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L71>)
- [&lt;anonymous@129:97&gt;](<../tests/entity-repository.test.cjs.md#s-a09e4e6fcd25c9f0>) — [electron/domains/entity/tests/entity-repository.test.cjs:142](<../../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L142>)
- [&lt;anonymous@129:97&gt;](<../tests/entity-repository.test.cjs.md#s-a09e4e6fcd25c9f0>) — [electron/domains/entity/tests/entity-repository.test.cjs:147](<../../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L147>)
- [&lt;anonymous@6:88&gt;.&lt;anonymous@18:7&gt;](<../tests/entity-service.test.cjs.md#s-c52b110b2ab9b43d>) — [electron/domains/entity/tests/entity-service.test.cjs:18](<../../../../../../../../electron/domains/entity/tests/entity-service.test.cjs#L18>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/domains/entity/tests/entity-repository.test.cjs:64](<../../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L64>) — static-call-site; coverage not established.
- [electron/domains/entity/tests/entity-repository.test.cjs:71](<../../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L71>) — static-call-site; coverage not established.
- [electron/domains/entity/tests/entity-repository.test.cjs:142](<../../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L142>) — static-call-site; coverage not established.
- [electron/domains/entity/tests/entity-repository.test.cjs:147](<../../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L147>) — static-call-site; coverage not established.
- [electron/domains/entity/tests/entity-service.test.cjs:18](<../../../../../../../../electron/domains/entity/tests/entity-service.test.cjs#L18>) — static-call-site; coverage not established.

<a id="s-a955dee164f68fb1"></a>

## EntityService.assignSources.&lt;anonymous@71:56&gt;

[electron/domains/entity/services/EntityService.cjs:71](<../../../../../../../../electron/domains/entity/services/EntityService.cjs#L71>) · ArrowFunction · production · [Entity domain](<../../../../../../modules/entity-domain.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EntityService.assignSources](<EntityService.cjs.md#s-37bb8f6e632e75c6>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| recheck | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [EntityRepository.assignSources](<../repositories/EntityRepository.cjs.md#s-aa7845b446e0e846>) — [electron/domains/entity/services/EntityService.cjs:72](<../../../../../../../../electron/domains/entity/services/EntityService.cjs#L72>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-3811f22ee35e161e"></a>

## EntityService.unassignSource

[electron/domains/entity/services/EntityService.cjs:77](<../../../../../../../../electron/domains/entity/services/EntityService.cjs#L77>) · MethodDeclaration · production · [Entity domain](<../../../../../../modules/entity-domain.md>)

Detaches one recorded reference under host authorization and retains the original Vault file.

Purpose evidence: jsdoc.

Lexical owner: [EntityService](<EntityService.cjs.md#s-ab72a5463244b2fd>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { root } | { root: any; } | compiler-inferred | required |
| entityId | any | compiler-inferred | required |
| sourceId | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [EntityService.#run](<EntityService.cjs.md#s-d0ec59c4a934fcb1>) — [electron/domains/entity/services/EntityService.cjs:78](<../../../../../../../../electron/domains/entity/services/EntityService.cjs#L78>)

**Called by (statically resolved):**

- [registerWorldViewIpc.unassign](<../../../core/ipc/worldview-ipc.cjs.md#s-79b436e52ba3a963>) — [electron/core/ipc/worldview-ipc.cjs:257](<../../../../../../../../electron/core/ipc/worldview-ipc.cjs#L257>)
- [&lt;anonymous@6:88&gt;.&lt;anonymous@19:7&gt;](<../tests/entity-service.test.cjs.md#s-4d5caf0dfe0903c9>) — [electron/domains/entity/tests/entity-service.test.cjs:19](<../../../../../../../../electron/domains/entity/tests/entity-service.test.cjs#L19>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/domains/entity/tests/entity-service.test.cjs:19](<../../../../../../../../electron/domains/entity/tests/entity-service.test.cjs#L19>) — static-call-site; coverage not established.

<a id="s-d78e1a2e4be377ea"></a>

## EntityService.unassignSource.&lt;anonymous@78:57&gt;

[electron/domains/entity/services/EntityService.cjs:78](<../../../../../../../../electron/domains/entity/services/EntityService.cjs#L78>) · ArrowFunction · production · [Entity domain](<../../../../../../modules/entity-domain.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EntityService.unassignSource](<EntityService.cjs.md#s-3811f22ee35e161e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| recheck | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [EntityRepository.unassignSource](<../repositories/EntityRepository.cjs.md#s-919e66b14255e4a2>) — [electron/domains/entity/services/EntityService.cjs:79](<../../../../../../../../electron/domains/entity/services/EntityService.cjs#L79>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
