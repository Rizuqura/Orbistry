# electron/domains/entity/repositories/EntityRepository.cjs: symbols

[Atlas](<../../../../../../README.md>) / [Entity domain](<../../../../../../modules/entity-domain.md>) / [electron/domains/entity/repositories/EntityRepository.cjs:1](<../../../../../../../../electron/domains/entity/repositories/EntityRepository.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/domains/entity/repositories/EntityRepository.cjs](<EntityRepository.cjs.md#s-01621deea2c2854e>) (Module)
- [EntityRepository](<EntityRepository.cjs.md#s-2917112168686a52>) (ClassDeclaration)
- [EntityRepository.load](<EntityRepository.cjs.md#s-41d14a547f2204eb>) (MethodDeclaration)
- [EntityRepository.getContextReferences](<EntityRepository.cjs.md#s-698bd30d44856403>) (MethodDeclaration)
- [EntityRepository.updateMetadata](<EntityRepository.cjs.md#s-61e018993e6359d1>) (MethodDeclaration)
- [EntityRepository.assignSources](<EntityRepository.cjs.md#s-aa7845b446e0e846>) (MethodDeclaration)
- [EntityRepository.unassignSource](<EntityRepository.cjs.md#s-919e66b14255e4a2>) (MethodDeclaration)

<a id="s-01621deea2c2854e"></a>

## electron/domains/entity/repositories/EntityRepository.cjs

[electron/domains/entity/repositories/EntityRepository.cjs:1](<../../../../../../../../electron/domains/entity/repositories/EntityRepository.cjs#L1>) · Module · production · [Entity domain](<../../../../../../modules/entity-domain.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- require — module-loader; [electron/domains/entity/repositories/EntityRepository.cjs:1](<../../../../../../../../electron/domains/entity/repositories/EntityRepository.cjs#L1>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-2917112168686a52"></a>

## EntityRepository

[electron/domains/entity/repositories/EntityRepository.cjs:4](<../../../../../../../../electron/domains/entity/repositories/EntityRepository.cjs#L4>) · ClassDeclaration · production · [Entity domain](<../../../../../../modules/entity-domain.md>)

Maps logical Entity edits onto the shared v1 Markdown record. Callers supply an authorized root and key.

Purpose evidence: jsdoc.

Exported as: EntityRepository ([electron/domains/entity/repositories/EntityRepository.cjs:1](<../../../../../../../../electron/domains/entity/repositories/EntityRepository.cjs#L1>)).

Lexical owner: [electron/domains/entity/repositories/EntityRepository.cjs](<EntityRepository.cjs.md#s-01621deea2c2854e>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [EntityService.constructor](<../services/EntityService.cjs.md#s-a2eab88e993348f3>) — [electron/domains/entity/services/EntityService.cjs:16](<../../../../../../../../electron/domains/entity/services/EntityService.cjs#L16>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-41d14a547f2204eb"></a>

## EntityRepository.load

[electron/domains/entity/repositories/EntityRepository.cjs:6](<../../../../../../../../electron/domains/entity/repositories/EntityRepository.cjs#L6>) · MethodDeclaration · production · [Entity domain](<../../../../../../modules/entity-domain.md>)

Loads only the bounded Entity record. Missing or damaged records propagate to the trusted caller.

Purpose evidence: jsdoc.

Lexical owner: [EntityRepository](<EntityRepository.cjs.md#s-2917112168686a52>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| entityId | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [EntityRepository.getContextReferences](<EntityRepository.cjs.md#s-698bd30d44856403>) — [electron/domains/entity/repositories/EntityRepository.cjs:12](<../../../../../../../../electron/domains/entity/repositories/EntityRepository.cjs#L12>)
- [EntityService.load.&lt;anonymous@45:46&gt;](<../services/EntityService.cjs.md#s-27c229f26dbeec39>) — [electron/domains/entity/services/EntityService.cjs:46](<../../../../../../../../electron/domains/entity/services/EntityService.cjs#L46>)

Unresolved / external call sites: 1.

- store.readEntitySnapshot — signature-only-candidate; [electron/domains/entity/repositories/EntityRepository.cjs:7](<../../../../../../../../electron/domains/entity/repositories/EntityRepository.cjs#L7>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-698bd30d44856403"></a>

## EntityRepository.getContextReferences

[electron/domains/entity/repositories/EntityRepository.cjs:11](<../../../../../../../../electron/domains/entity/repositories/EntityRepository.cjs#L11>) · MethodDeclaration · production · [Entity domain](<../../../../../../modules/entity-domain.md>)

Returns scoped lookup inputs for existing companion APIs. No package links, versions or assignments are assumed to exist.

Purpose evidence: jsdoc.

Lexical owner: [EntityRepository](<EntityRepository.cjs.md#s-2917112168686a52>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| entityId | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [EntityRepository.load](<EntityRepository.cjs.md#s-41d14a547f2204eb>) — [electron/domains/entity/repositories/EntityRepository.cjs:12](<../../../../../../../../electron/domains/entity/repositories/EntityRepository.cjs#L12>)

**Called by (statically resolved):**

- [EntityService.getContextReferences.&lt;anonymous@52:46&gt;](<../services/EntityService.cjs.md#s-2613cbaba5b68b23>) — [electron/domains/entity/services/EntityService.cjs:53](<../../../../../../../../electron/domains/entity/services/EntityService.cjs#L53>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-61e018993e6359d1"></a>

## EntityRepository.updateMetadata

[electron/domains/entity/repositories/EntityRepository.cjs:23](<../../../../../../../../electron/domains/entity/repositories/EntityRepository.cjs#L23>) · MethodDeclaration · production · [Entity domain](<../../../../../../modules/entity-domain.md>)

Reads the latest placement and sources inside the shared queue and persists only requested metadata columns.

Purpose evidence: jsdoc.

Lexical owner: [EntityRepository](<EntityRepository.cjs.md#s-2917112168686a52>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| entityId | any | compiler-inferred | required |
| changes | any | compiler-inferred | required |
| beforeWrite | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [EntityService.updateMetadata.&lt;anonymous@64:55&gt;](<../services/EntityService.cjs.md#s-c745f1d9d2ea5553>) — [electron/domains/entity/services/EntityService.cjs:65](<../../../../../../../../electron/domains/entity/services/EntityService.cjs#L65>)

Unresolved / external call sites: 1.

- store.patchEntityMetadata — signature-only-candidate; [electron/domains/entity/repositories/EntityRepository.cjs:24](<../../../../../../../../electron/domains/entity/repositories/EntityRepository.cjs#L24>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-aa7845b446e0e846"></a>

## EntityRepository.assignSources

[electron/domains/entity/repositories/EntityRepository.cjs:28](<../../../../../../../../electron/domains/entity/repositories/EntityRepository.cjs#L28>) · MethodDeclaration · production · [Entity domain](<../../../../../../modules/entity-domain.md>)

Uses the existing Vault stat, batch limit, root queue and source-status DTO for assignment.

Purpose evidence: jsdoc.

Lexical owner: [EntityRepository](<EntityRepository.cjs.md#s-2917112168686a52>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| entityId | any | compiler-inferred | required |
| references | any | compiler-inferred | required |
| beforeWrite | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [EntityService.assignSources.&lt;anonymous@71:56&gt;](<../services/EntityService.cjs.md#s-a955dee164f68fb1>) — [electron/domains/entity/services/EntityService.cjs:72](<../../../../../../../../electron/domains/entity/services/EntityService.cjs#L72>)

Unresolved / external call sites: 1.

- store.assignWorldViewFiles — signature-only-candidate; [electron/domains/entity/repositories/EntityRepository.cjs:29](<../../../../../../../../electron/domains/entity/repositories/EntityRepository.cjs#L29>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-919e66b14255e4a2"></a>

## EntityRepository.unassignSource

[electron/domains/entity/repositories/EntityRepository.cjs:33](<../../../../../../../../electron/domains/entity/repositories/EntityRepository.cjs#L33>) · MethodDeclaration · production · [Entity domain](<../../../../../../modules/entity-domain.md>)

Removes only the recorded association and returns the compatible chip DTO.

Purpose evidence: jsdoc.

Lexical owner: [EntityRepository](<EntityRepository.cjs.md#s-2917112168686a52>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| entityId | any | compiler-inferred | required |
| sourceId | any | compiler-inferred | required |
| beforeWrite | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [EntityService.unassignSource.&lt;anonymous@78:57&gt;](<../services/EntityService.cjs.md#s-d78e1a2e4be377ea>) — [electron/domains/entity/services/EntityService.cjs:79](<../../../../../../../../electron/domains/entity/services/EntityService.cjs#L79>)

Unresolved / external call sites: 1.

- store.unassignWorldViewFile — signature-only-candidate; [electron/domains/entity/repositories/EntityRepository.cjs:34](<../../../../../../../../electron/domains/entity/repositories/EntityRepository.cjs#L34>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
