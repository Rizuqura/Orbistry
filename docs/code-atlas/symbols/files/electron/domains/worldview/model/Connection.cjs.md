# electron/domains/worldview/model/Connection.cjs: symbols

[Atlas](<../../../../../../README.md>) / [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>) / [electron/domains/worldview/model/Connection.cjs:1](<../../../../../../../../electron/domains/worldview/model/Connection.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/domains/worldview/model/Connection.cjs](<Connection.cjs.md#s-e137ecb2ea0acd8a>) (Module)
- [Connection](<Connection.cjs.md#s-6d87363d28890a6c>) (ClassDeclaration)
- [Connection.constructor](<Connection.cjs.md#s-d6c1ec5a51d80cca>) (Constructor)
- [Connection.fromLegacy](<Connection.cjs.md#s-8e5b9746944b56b7>) (MethodDeclaration)
- [Connection.getSnapshot](<Connection.cjs.md#s-17b741d9ec9a95f0>) (MethodDeclaration)
- [Connection.withMetadata](<Connection.cjs.md#s-80b4d39e5d324be3>) (MethodDeclaration)
- [Connection.toLegacy](<Connection.cjs.md#s-d4415a4694a242b0>) (MethodDeclaration)

<a id="s-e137ecb2ea0acd8a"></a>

## electron/domains/worldview/model/Connection.cjs

[electron/domains/worldview/model/Connection.cjs:1](<../../../../../../../../electron/domains/worldview/model/Connection.cjs#L1>) · Module · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- require — module-loader; [electron/domains/worldview/model/Connection.cjs:4](<../../../../../../../../electron/domains/worldview/model/Connection.cjs#L4>)
- require — module-loader; [electron/domains/worldview/model/Connection.cjs:5](<../../../../../../../../electron/domains/worldview/model/Connection.cjs#L5>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-6d87363d28890a6c"></a>

## Connection

[electron/domains/worldview/model/Connection.cjs:8](<../../../../../../../../electron/domains/worldview/model/Connection.cjs#L8>) · ClassDeclaration · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

Immutable relationship value: owns endpoints and descriptive metadata, never Entity knowledge or access grants.

Purpose evidence: jsdoc.

Exported as: Connection ([electron/domains/worldview/model/Connection.cjs:1](<../../../../../../../../electron/domains/worldview/model/Connection.cjs#L1>)).

Lexical owner: [electron/domains/worldview/model/Connection.cjs](<Connection.cjs.md#s-e137ecb2ea0acd8a>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d6c1ec5a51d80cca"></a>

## Connection.constructor

[electron/domains/worldview/model/Connection.cjs:11](<../../../../../../../../electron/domains/worldview/model/Connection.cjs#L11>) · Constructor · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

Validates explicit Output-to-Input roles and distinct endpoints; copies caller state without I/O.

Purpose evidence: jsdoc.

Lexical owner: [Connection](<Connection.cjs.md#s-6d87363d28890a6c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| snapshot | any | compiler-inferred | required |

Returns: Connection (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [requireInvariant](<../contracts/worldview-errors.cjs.md#s-2dc3226dc732f323>) — [electron/domains/worldview/model/Connection.cjs:13](<../../../../../../../../electron/domains/worldview/model/Connection.cjs#L13>)

**Called by (statically resolved):**

- [Connection.fromLegacy](<Connection.cjs.md#s-8e5b9746944b56b7>) — [electron/domains/worldview/model/Connection.cjs:22](<../../../../../../../../electron/domains/worldview/model/Connection.cjs#L22>)
- [Connection.withMetadata](<Connection.cjs.md#s-80b4d39e5d324be3>) — [electron/domains/worldview/model/Connection.cjs:44](<../../../../../../../../electron/domains/worldview/model/Connection.cjs#L44>)
- [WorldView.connect](<WorldView.cjs.md#s-eb2c0a1c8b491b24>) — [electron/domains/worldview/model/WorldView.cjs:48](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L48>)
- [&lt;anonymous@91:108&gt;.&lt;anonymous@108:5&gt;](<../tests/worldview-domain.test.cjs.md#s-8cb35692aed9514b>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:109](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L109>)
- [&lt;anonymous@91:108&gt;.&lt;anonymous@115:5&gt;](<../tests/worldview-domain.test.cjs.md#s-3ebb13160ab1d673>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:116](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L116>)
- [&lt;anonymous@91:108&gt;.&lt;anonymous@125:5&gt;](<../tests/worldview-domain.test.cjs.md#s-956c23a6a0bf774e>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:126](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L126>)

Unresolved / external call sites: 1.

- connectionSchema.parse — external-or-dynamic-dispatch; [electron/domains/worldview/model/Connection.cjs:12](<../../../../../../../../electron/domains/worldview/model/Connection.cjs#L12>)

**Related tests / acceptance harnesses:**

- [electron/domains/worldview/tests/worldview-domain.test.cjs:109](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L109>) — static-call-site; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:116](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L116>) — static-call-site; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:126](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L126>) — static-call-site; coverage not established.

<a id="s-8e5b9746944b56b7"></a>

## Connection.fromLegacy

[electron/domains/worldview/model/Connection.cjs:20](<../../../../../../../../electron/domains/worldview/model/Connection.cjs#L20>) · MethodDeclaration · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

Converts existing geometric-port DTOs into logical endpoints; preserves anchors and undirected semantics.

Purpose evidence: jsdoc.

Lexical owner: [Connection](<Connection.cjs.md#s-6d87363d28890a6c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| record | any | compiler-inferred | required |

Returns: Connection (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [Connection.constructor](<Connection.cjs.md#s-d6c1ec5a51d80cca>) — [electron/domains/worldview/model/Connection.cjs:22](<../../../../../../../../electron/domains/worldview/model/Connection.cjs#L22>)

**Called by (statically resolved):**

- [WorldViewRepository.read.&lt;anonymous@29:14&gt;](<../repositories/WorldViewRepository.cjs.md#s-c694dccf57d7b05c>) — [electron/domains/worldview/repositories/WorldViewRepository.cjs:29](<../../../../../../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L29>)
- [WorldViewService.createConnection](<../services/WorldViewService.cjs.md#s-59ad55cf2312518c>) — [electron/domains/worldview/services/WorldViewService.cjs:65](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L65>)
- [WorldViewService.updateConnection](<../services/WorldViewService.cjs.md#s-bf9efb3d2453cacd>) — [electron/domains/worldview/services/WorldViewService.cjs:76](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L76>)
- [&lt;anonymous@91:108&gt;](<../tests/worldview-domain.test.cjs.md#s-9de08cc017211dc8>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:95](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L95>)
- [&lt;anonymous@91:108&gt;](<../tests/worldview-domain.test.cjs.md#s-9de08cc017211dc8>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:106](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L106>)
- [&lt;anonymous@91:108&gt;.&lt;anonymous@121:17&gt;](<../tests/worldview-domain.test.cjs.md#s-8555de68639efbff>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:122](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L122>)
- [&lt;anonymous@134:105&gt;](<../tests/worldview-domain.test.cjs.md#s-a15f357b4f1ef6c1>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:136](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L136>)
- [&lt;anonymous@134:105&gt;.&lt;anonymous@137:17&gt;](<../tests/worldview-domain.test.cjs.md#s-12357bad7042467c>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:137](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L137>)
- [&lt;anonymous@134:105&gt;.&lt;anonymous@139:5&gt;](<../tests/worldview-domain.test.cjs.md#s-7066b359fe3e2a22>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:139](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L139>)
- [&lt;anonymous@134:105&gt;](<../tests/worldview-domain.test.cjs.md#s-a15f357b4f1ef6c1>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:142](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L142>)
- [&lt;anonymous@158:85&gt;](<../tests/worldview-domain.test.cjs.md#s-a66edad033d91876>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:160](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L160>)
- [&lt;anonymous@158:85&gt;](<../tests/worldview-domain.test.cjs.md#s-a66edad033d91876>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:161](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L161>)
- [&lt;anonymous@282:89&gt;](<../tests/worldview-domain.test.cjs.md#s-488c29ce8f9a0580>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:284](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L284>)
- [&lt;anonymous@282:89&gt;](<../tests/worldview-domain.test.cjs.md#s-488c29ce8f9a0580>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:285](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L285>)

Unresolved / external call sites: 1.

- legacyConnectorSchema.parse — external-or-dynamic-dispatch; [electron/domains/worldview/model/Connection.cjs:21](<../../../../../../../../electron/domains/worldview/model/Connection.cjs#L21>)

**Related tests / acceptance harnesses:**

- [electron/domains/worldview/tests/worldview-domain.test.cjs:95](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L95>) — static-call-site; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:106](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L106>) — static-call-site; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:122](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L122>) — static-call-site; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:136](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L136>) — static-call-site; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:137](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L137>) — static-call-site; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:139](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L139>) — static-call-site; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:142](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L142>) — static-call-site; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:160](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L160>) — static-call-site; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:161](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L161>) — static-call-site; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:284](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L284>) — static-call-site; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:285](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L285>) — static-call-site; coverage not established.

<a id="s-17b741d9ec9a95f0"></a>

## Connection.getSnapshot

[electron/domains/worldview/model/Connection.cjs:39](<../../../../../../../../electron/domains/worldview/model/Connection.cjs#L39>) · MethodDeclaration · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

Returns an independent serializable value; caller edits cannot mutate the connection.

Purpose evidence: jsdoc.

Lexical owner: [Connection](<Connection.cjs.md#s-6d87363d28890a6c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [Connection.withMetadata](<Connection.cjs.md#s-80b4d39e5d324be3>) — [electron/domains/worldview/model/Connection.cjs:44](<../../../../../../../../electron/domains/worldview/model/Connection.cjs#L44>)
- [WorldView.connect](<WorldView.cjs.md#s-eb2c0a1c8b491b24>) — [electron/domains/worldview/model/WorldView.cjs:49](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L49>)
- [WorldViewRepository.read.&lt;anonymous@29:14&gt;](<../repositories/WorldViewRepository.cjs.md#s-c694dccf57d7b05c>) — [electron/domains/worldview/repositories/WorldViewRepository.cjs:29](<../../../../../../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L29>)
- [WorldViewService.createConnection](<../services/WorldViewService.cjs.md#s-59ad55cf2312518c>) — [electron/domains/worldview/services/WorldViewService.cjs:66](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L66>)
- [WorldViewService.updateConnection](<../services/WorldViewService.cjs.md#s-bf9efb3d2453cacd>) — [electron/domains/worldview/services/WorldViewService.cjs:77](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L77>)
- [&lt;anonymous@91:108&gt;](<../tests/worldview-domain.test.cjs.md#s-9de08cc017211dc8>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:96](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L96>)
- [&lt;anonymous@91:108&gt;](<../tests/worldview-domain.test.cjs.md#s-9de08cc017211dc8>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:97](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L97>)
- [&lt;anonymous@91:108&gt;](<../tests/worldview-domain.test.cjs.md#s-9de08cc017211dc8>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:103](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L103>)
- [&lt;anonymous@91:108&gt;](<../tests/worldview-domain.test.cjs.md#s-9de08cc017211dc8>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:104](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L104>)
- [&lt;anonymous@91:108&gt;](<../tests/worldview-domain.test.cjs.md#s-9de08cc017211dc8>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:106](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L106>)

Unresolved / external call sites: 1.

- structuredClone — external-or-dynamic-dispatch; [electron/domains/worldview/model/Connection.cjs:40](<../../../../../../../../electron/domains/worldview/model/Connection.cjs#L40>)

**Related tests / acceptance harnesses:**

- [electron/domains/worldview/tests/worldview-domain.test.cjs:96](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L96>) — static-call-site; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:97](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L97>) — static-call-site; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:103](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L103>) — static-call-site; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:104](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L104>) — static-call-site; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:106](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L106>) — static-call-site; coverage not established.

<a id="s-80b4d39e5d324be3"></a>

## Connection.withMetadata

[electron/domains/worldview/model/Connection.cjs:43](<../../../../../../../../electron/domains/worldview/model/Connection.cjs#L43>) · MethodDeclaration · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

Returns a new value with the same ID/endpoints; validation occurs before replacing any metadata.

Purpose evidence: jsdoc.

Lexical owner: [Connection](<Connection.cjs.md#s-6d87363d28890a6c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| metadata | any | compiler-inferred | required |
| direction | any | compiler-inferred | optional, default present |

Returns: Connection (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [Connection.constructor](<Connection.cjs.md#s-d6c1ec5a51d80cca>) — [electron/domains/worldview/model/Connection.cjs:44](<../../../../../../../../electron/domains/worldview/model/Connection.cjs#L44>)
- [Connection.getSnapshot](<Connection.cjs.md#s-17b741d9ec9a95f0>) — [electron/domains/worldview/model/Connection.cjs:44](<../../../../../../../../electron/domains/worldview/model/Connection.cjs#L44>)

**Called by (statically resolved):**

- [&lt;anonymous@91:108&gt;](<../tests/worldview-domain.test.cjs.md#s-9de08cc017211dc8>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:99](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L99>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/domains/worldview/tests/worldview-domain.test.cjs:99](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L99>) — static-call-site; coverage not established.

<a id="s-d4415a4694a242b0"></a>

## Connection.toLegacy

[electron/domains/worldview/model/Connection.cjs:47](<../../../../../../../../electron/domains/worldview/model/Connection.cjs#L47>) · MethodDeclaration · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

Produces the original wire/storage shape. Missing visual anchors reject rather than inventing a placement.

Purpose evidence: jsdoc.

Lexical owner: [Connection](<Connection.cjs.md#s-6d87363d28890a6c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [WorldViewService.createConnection](<../services/WorldViewService.cjs.md#s-59ad55cf2312518c>) — [electron/domains/worldview/services/WorldViewService.cjs:72](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L72>)
- [WorldViewService.updateConnection](<../services/WorldViewService.cjs.md#s-bf9efb3d2453cacd>) — [electron/domains/worldview/services/WorldViewService.cjs:90](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L90>)
- [&lt;anonymous@91:108&gt;](<../tests/worldview-domain.test.cjs.md#s-9de08cc017211dc8>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:98](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L98>)

Unresolved / external call sites: 1.

- legacyConnectorSchema.parse — external-or-dynamic-dispatch; [electron/domains/worldview/model/Connection.cjs:49](<../../../../../../../../electron/domains/worldview/model/Connection.cjs#L49>)

**Related tests / acceptance harnesses:**

- [electron/domains/worldview/tests/worldview-domain.test.cjs:98](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L98>) — static-call-site; coverage not established.
