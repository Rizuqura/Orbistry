# electron/domains/worldview/repositories/WorldViewRepository.cjs: symbols

[Atlas](<../../../../../../README.md>) / [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>) / [electron/domains/worldview/repositories/WorldViewRepository.cjs:1](<../../../../../../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/domains/worldview/repositories/WorldViewRepository.cjs](<WorldViewRepository.cjs.md#s-16bf0eac4ffa6e47>) (Module)
- [WorldViewRepository](<WorldViewRepository.cjs.md#s-4b10c526ffcac3bd>) (ClassDeclaration)
- [WorldViewRepository.constructor](<WorldViewRepository.cjs.md#s-daa329050e52f346>) (Constructor)
- [WorldViewRepository.read](<WorldViewRepository.cjs.md#s-91419ef7bf2fa99e>) (MethodDeclaration)
- [WorldViewRepository.read.&lt;anonymous@17:41&gt;](<WorldViewRepository.cjs.md#s-0caaf510f0511e51>) (ArrowFunction)
- [WorldViewRepository.read.&lt;anonymous@20:36&gt;](<WorldViewRepository.cjs.md#s-7b728166eaa11e7d>) (ArrowFunction)
- [WorldViewRepository.read.&lt;anonymous@26:11&gt;](<WorldViewRepository.cjs.md#s-04ce0309973ff813>) (ArrowFunction)
- [WorldViewRepository.read.&lt;anonymous@29:14&gt;](<WorldViewRepository.cjs.md#s-c694dccf57d7b05c>) (ArrowFunction)
- [WorldViewRepository.endpointWorld](<WorldViewRepository.cjs.md#s-29baed00af233aad>) (MethodDeclaration)
- [WorldViewRepository.saveChip](<WorldViewRepository.cjs.md#s-27f3832301869646>) (MethodDeclaration)
- [WorldViewRepository.deleteChip](<WorldViewRepository.cjs.md#s-aa8fb2db0a6612b2>) (MethodDeclaration)
- [WorldViewRepository.createConnection](<WorldViewRepository.cjs.md#s-a831539ba65e984b>) (MethodDeclaration)
- [WorldViewRepository.updateConnection](<WorldViewRepository.cjs.md#s-e6def28894ad4362>) (MethodDeclaration)
- [WorldViewRepository.deleteConnection](<WorldViewRepository.cjs.md#s-d80b86147b2451c3>) (MethodDeclaration)
- [WorldViewRepository.connectionEntities](<WorldViewRepository.cjs.md#s-a43f5163c18edd36>) (MethodDeclaration)
- [WorldViewRepository.connectionEntities.&lt;anonymous@73:7&gt;](<WorldViewRepository.cjs.md#s-1db5ae9c2c7a68d8>) (ArrowFunction)

<a id="s-16bf0eac4ffa6e47"></a>

## electron/domains/worldview/repositories/WorldViewRepository.cjs

[electron/domains/worldview/repositories/WorldViewRepository.cjs:1](<../../../../../../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L1>) · Module · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- require — module-loader; [electron/domains/worldview/repositories/WorldViewRepository.cjs:1](<../../../../../../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L1>)
- require — module-loader; [electron/domains/worldview/repositories/WorldViewRepository.cjs:2](<../../../../../../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L2>)
- require — module-loader; [electron/domains/worldview/repositories/WorldViewRepository.cjs:3](<../../../../../../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L3>)
- require — module-loader; [electron/domains/worldview/repositories/WorldViewRepository.cjs:4](<../../../../../../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L4>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-4b10c526ffcac3bd"></a>

## WorldViewRepository

[electron/domains/worldview/repositories/WorldViewRepository.cjs:7](<../../../../../../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L7>) · ClassDeclaration · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

Adapts the existing combined Entity/layout and connection storage; creates no new files or persisted revision scheme.

Purpose evidence: jsdoc.

Exported as: WorldViewRepository ([electron/domains/worldview/repositories/WorldViewRepository.cjs:1](<../../../../../../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L1>)).

Lexical owner: [electron/domains/worldview/repositories/WorldViewRepository.cjs](<WorldViewRepository.cjs.md#s-16bf0eac4ffa6e47>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-daa329050e52f346"></a>

## WorldViewRepository.constructor

[electron/domains/worldview/repositories/WorldViewRepository.cjs:9](<../../../../../../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L9>) · Constructor · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

Allows existing storage adapters to be injected for isolated tests; no reads occur during construction.

Purpose evidence: jsdoc.

Lexical owner: [WorldViewRepository](<WorldViewRepository.cjs.md#s-4b10c526ffcac3bd>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { entityStore = entities, connectionStore = connections } | { entityStore?: { withWorldViewMutation: (rootPath: any, operation: any) =&gt; unknown; readWorldViewChip: (rootPath: any, id: any) =&gt; unknown; loadWorldView: (rootPath: any, { metadataOnly }?: { metadataOnly?: boolean; }) =&gt; unknown; saveWorldViewChip: (rootPath: any, input: any) =&gt; unknown; assignWorldViewFiles: (rootPath: any, id: any, references: any) =&gt; unknown; unassignWorldViewFile: (rootPath: any, id: any, sourceId: any) =&gt; unknown; deleteWorldViewChip: (rootPath: any, id: any) =&gt; unknow... | compiler-inferred | optional, default present |

Returns: WorldViewRepository (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [WorldViewService.constructor](<../services/WorldViewService.cjs.md#s-1e8ff3665f91cbf2>) — [electron/domains/worldview/services/WorldViewService.cjs:13](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L13>)
- [&lt;anonymous@223:99&gt;](<../tests/worldview-domain.test.cjs.md#s-bbf315728a031ceb>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:245](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L245>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/domains/worldview/tests/worldview-domain.test.cjs:245](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L245>) — static-call-site; coverage not established.

<a id="s-91419ef7bf2fa99e"></a>

## WorldViewRepository.read

[electron/domains/worldview/repositories/WorldViewRepository.cjs:14](<../../../../../../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L14>) · MethodDeclaration · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

Loads the compatible UI DTO and a metadata-free aggregate. Legacy dangling records stay in the DTO, outside the valid aggregate.

Purpose evidence: jsdoc.

Lexical owner: [WorldViewRepository](<WorldViewRepository.cjs.md#s-4b10c526ffcac3bd>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| { metadataOnly = false } | { metadataOnly?: boolean; } | compiler-inferred | optional, default present |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [loadConnectors](<legacy-connection-store.cjs.md#s-2937b562dd1ce8b4>) — [electron/domains/worldview/repositories/WorldViewRepository.cjs:16](<../../../../../../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L16>)
- [WorldView.constructor](<../model/WorldView.cjs.md#s-eb02dd22cedad2c1>) — [electron/domains/worldview/repositories/WorldViewRepository.cjs:18](<../../../../../../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L18>)

**Called by (statically resolved):**

- [WorldViewService.load](<../services/WorldViewService.cjs.md#s-9a49a0d9bfeaa0c2>) — [electron/domains/worldview/services/WorldViewService.cjs:30](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L30>)
- [WorldViewService.removeEntity](<../services/WorldViewService.cjs.md#s-b2761547de1733a5>) — [electron/domains/worldview/services/WorldViewService.cjs:56](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L56>)
- [WorldViewService.updateConnection](<../services/WorldViewService.cjs.md#s-bf9efb3d2453cacd>) — [electron/domains/worldview/services/WorldViewService.cjs:80](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L80>)
- [WorldViewService.listDirectConnections](<../services/WorldViewService.cjs.md#s-49499fbc6b875b47>) — [electron/domains/worldview/services/WorldViewService.cjs:109](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L109>)
- [&lt;anonymous@223:99&gt;](<../tests/worldview-domain.test.cjs.md#s-bbf315728a031ceb>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:246](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L246>)
- [&lt;anonymous@223:99&gt;](<../tests/worldview-domain.test.cjs.md#s-bbf315728a031ceb>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:270](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L270>)

Unresolved / external call sites: 6.

- this.entities.loadWorldView — signature-only-candidate; [electron/domains/worldview/repositories/WorldViewRepository.cjs:15](<../../../../../../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L15>)
- Set — external-or-dynamic-dispatch; [electron/domains/worldview/repositories/WorldViewRepository.cjs:17](<../../../../../../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L17>)
- state.chips.map — external-or-dynamic-dispatch; [electron/domains/worldview/repositories/WorldViewRepository.cjs:17](<../../../../../../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L17>)
- state.chips.map — external-or-dynamic-dispatch; [electron/domains/worldview/repositories/WorldViewRepository.cjs:20](<../../../../../../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L20>)
- relationships.connectors .filter( (edge) =&gt; ids.has(edge.sourceEntityId) && ids.has(edge.targetEntityId), ) .map — external-or-dynamic-dispatch; [electron/domains/worldview/repositories/WorldViewRepository.cjs:24](<../../../../../../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L24>)
- relationships.connectors .filter — external-or-dynamic-dispatch; [electron/domains/worldview/repositories/WorldViewRepository.cjs:24](<../../../../../../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L24>)

**Related tests / acceptance harnesses:**

- [electron/domains/worldview/tests/worldview-domain.test.cjs:246](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L246>) — static-call-site; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:270](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L270>) — static-call-site; coverage not established.

<a id="s-0caaf510f0511e51"></a>

## WorldViewRepository.read.&lt;anonymous@17:41&gt;

[electron/domains/worldview/repositories/WorldViewRepository.cjs:17](<../../../../../../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L17>) · ArrowFunction · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [WorldViewRepository.read](<WorldViewRepository.cjs.md#s-91419ef7bf2fa99e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| chip | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-7b728166eaa11e7d"></a>

## WorldViewRepository.read.&lt;anonymous@20:36&gt;

[electron/domains/worldview/repositories/WorldViewRepository.cjs:20](<../../../../../../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L20>) · ArrowFunction · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [WorldViewRepository.read](<WorldViewRepository.cjs.md#s-91419ef7bf2fa99e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| chip | any | compiler-inferred | required |

Returns: { entityId: any; position: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-04ce0309973ff813"></a>

## WorldViewRepository.read.&lt;anonymous@26:11&gt;

[electron/domains/worldview/repositories/WorldViewRepository.cjs:26](<../../../../../../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L26>) · ArrowFunction · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [WorldViewRepository.read](<WorldViewRepository.cjs.md#s-91419ef7bf2fa99e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| edge | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- ids.has — external-or-dynamic-dispatch; [electron/domains/worldview/repositories/WorldViewRepository.cjs:27](<../../../../../../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L27>)
- ids.has — external-or-dynamic-dispatch; [electron/domains/worldview/repositories/WorldViewRepository.cjs:27](<../../../../../../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L27>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-c694dccf57d7b05c"></a>

## WorldViewRepository.read.&lt;anonymous@29:14&gt;

[electron/domains/worldview/repositories/WorldViewRepository.cjs:29](<../../../../../../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L29>) · ArrowFunction · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [WorldViewRepository.read](<WorldViewRepository.cjs.md#s-91419ef7bf2fa99e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| edge | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [Connection.getSnapshot](<../model/Connection.cjs.md#s-17b741d9ec9a95f0>) — [electron/domains/worldview/repositories/WorldViewRepository.cjs:29](<../../../../../../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L29>)
- [Connection.fromLegacy](<../model/Connection.cjs.md#s-8e5b9746944b56b7>) — [electron/domains/worldview/repositories/WorldViewRepository.cjs:29](<../../../../../../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L29>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-29baed00af233aad"></a>

## WorldViewRepository.endpointWorld

[electron/domains/worldview/repositories/WorldViewRepository.cjs:41](<../../../../../../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L41>) · MethodDeclaration · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

Builds a small placement-only aggregate for affected endpoints; avoids loading the full map on each connection mutation.

Purpose evidence: jsdoc.

Lexical owner: [WorldViewRepository](<WorldViewRepository.cjs.md#s-4b10c526ffcac3bd>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| entityIds | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [WorldView.constructor](<../model/WorldView.cjs.md#s-eb02dd22cedad2c1>) — [electron/domains/worldview/repositories/WorldViewRepository.cjs:47](<../../../../../../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L47>)

**Called by (statically resolved):**

- [WorldViewService.createConnection](<../services/WorldViewService.cjs.md#s-59ad55cf2312518c>) — [electron/domains/worldview/services/WorldViewService.cjs:69](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L69>)

Unresolved / external call sites: 3.

- Set — external-or-dynamic-dispatch; [electron/domains/worldview/repositories/WorldViewRepository.cjs:43](<../../../../../../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L43>)
- this.entities.readWorldViewChip — signature-only-candidate; [electron/domains/worldview/repositories/WorldViewRepository.cjs:44](<../../../../../../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L44>)
- memberships.push — external-or-dynamic-dispatch; [electron/domains/worldview/repositories/WorldViewRepository.cjs:45](<../../../../../../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L45>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-27f3832301869646"></a>

## WorldViewRepository.saveChip

[electron/domains/worldview/repositories/WorldViewRepository.cjs:50](<../../../../../../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L50>) · MethodDeclaration · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

Saves through the existing serialized, compare-before-write Entity adapter, preserving unknown YAML, sources and body.

Purpose evidence: jsdoc.

Lexical owner: [WorldViewRepository](<WorldViewRepository.cjs.md#s-4b10c526ffcac3bd>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| chip | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [WorldViewService.saveChip](<../services/WorldViewService.cjs.md#s-6cf167a187c419b7>) — [electron/domains/worldview/services/WorldViewService.cjs:50](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L50>)

Unresolved / external call sites: 1.

- this.entities.saveWorldViewChip — signature-only-candidate; [electron/domains/worldview/repositories/WorldViewRepository.cjs:51](<../../../../../../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L51>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-aa8fb2db0a6612b2"></a>

## WorldViewRepository.deleteChip

[electron/domains/worldview/repositories/WorldViewRepository.cjs:54](<../../../../../../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L54>) · MethodDeclaration · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

Preserves legacy deletion: removes the Entity index, not sources or historical connection records.

Purpose evidence: jsdoc.

Lexical owner: [WorldViewRepository](<WorldViewRepository.cjs.md#s-4b10c526ffcac3bd>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| id | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [WorldViewService.removeEntity](<../services/WorldViewService.cjs.md#s-b2761547de1733a5>) — [electron/domains/worldview/services/WorldViewService.cjs:61](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L61>)

Unresolved / external call sites: 1.

- this.entities.deleteWorldViewChip — signature-only-candidate; [electron/domains/worldview/repositories/WorldViewRepository.cjs:55](<../../../../../../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L55>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-a831539ba65e984b"></a>

## WorldViewRepository.createConnection

[electron/domains/worldview/repositories/WorldViewRepository.cjs:58](<../../../../../../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L58>) · MethodDeclaration · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

Uses the original queued creation/idempotency and live endpoint checks, closing read-to-write races.

Purpose evidence: jsdoc.

Lexical owner: [WorldViewRepository](<WorldViewRepository.cjs.md#s-4b10c526ffcac3bd>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| record | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [createConnector](<legacy-connection-store.cjs.md#s-1cf3233508e51f50>) — [electron/domains/worldview/repositories/WorldViewRepository.cjs:59](<../../../../../../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L59>)

**Called by (statically resolved):**

- [WorldViewService.createConnection](<../services/WorldViewService.cjs.md#s-59ad55cf2312518c>) — [electron/domains/worldview/services/WorldViewService.cjs:72](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L72>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-e6def28894ad4362"></a>

## WorldViewRepository.updateConnection

[electron/domains/worldview/repositories/WorldViewRepository.cjs:62](<../../../../../../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L62>) · MethodDeclaration · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

Retains the original expected-record CAS and immutable endpoint checks inside the shared root queue.

Purpose evidence: jsdoc.

Lexical owner: [WorldViewRepository](<WorldViewRepository.cjs.md#s-4b10c526ffcac3bd>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| record | any | compiler-inferred | required |
| previous | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [updateConnector](<legacy-connection-store.cjs.md#s-0c4952848c75ff0b>) — [electron/domains/worldview/repositories/WorldViewRepository.cjs:63](<../../../../../../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L63>)

**Called by (statically resolved):**

- [WorldViewService.updateConnection](<../services/WorldViewService.cjs.md#s-bf9efb3d2453cacd>) — [electron/domains/worldview/services/WorldViewService.cjs:88](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L88>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d80b86147b2451c3"></a>

## WorldViewRepository.deleteConnection

[electron/domains/worldview/repositories/WorldViewRepository.cjs:66](<../../../../../../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L66>) · MethodDeclaration · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

Deletes the exact relationship using the original serialized safe-path boundary.

Purpose evidence: jsdoc.

Lexical owner: [WorldViewRepository](<WorldViewRepository.cjs.md#s-4b10c526ffcac3bd>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| id | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [deleteConnector](<legacy-connection-store.cjs.md#s-2ec984f7c5214ed3>) — [electron/domains/worldview/repositories/WorldViewRepository.cjs:67](<../../../../../../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L67>)

**Called by (statically resolved):**

- [WorldViewService.disconnect](<../services/WorldViewService.cjs.md#s-2486ee0c7a4665d4>) — [electron/domains/worldview/services/WorldViewService.cjs:103](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L103>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-a43f5163c18edd36"></a>

## WorldViewRepository.connectionEntities

[electron/domains/worldview/repositories/WorldViewRepository.cjs:70](<../../../../../../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L70>) · MethodDeclaration · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

Reads saved endpoint identities for authorization, never accepting ownership claims from a delete payload. Missing/damaged records retain legacy root-authorized cleanup semantics.

Purpose evidence: jsdoc.

Lexical owner: [WorldViewRepository](<WorldViewRepository.cjs.md#s-4b10c526ffcac3bd>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| connectionId | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [loadConnectors](<legacy-connection-store.cjs.md#s-2937b562dd1ce8b4>) — [electron/domains/worldview/repositories/WorldViewRepository.cjs:71](<../../../../../../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L71>)

**Called by (statically resolved):**

- [WorldViewService.disconnect](<../services/WorldViewService.cjs.md#s-2486ee0c7a4665d4>) — [electron/domains/worldview/services/WorldViewService.cjs:98](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L98>)

Unresolved / external call sites: 1.

- connectors.find — external-or-dynamic-dispatch; [electron/domains/worldview/repositories/WorldViewRepository.cjs:72](<../../../../../../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L72>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-1db5ae9c2c7a68d8"></a>

## WorldViewRepository.connectionEntities.&lt;anonymous@73:7&gt;

[electron/domains/worldview/repositories/WorldViewRepository.cjs:73](<../../../../../../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L73>) · ArrowFunction · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [WorldViewRepository.connectionEntities](<WorldViewRepository.cjs.md#s-a43f5163c18edd36>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| connection | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
