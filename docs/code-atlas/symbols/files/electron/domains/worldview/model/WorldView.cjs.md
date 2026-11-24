# electron/domains/worldview/model/WorldView.cjs: symbols

[Atlas](<../../../../../../README.md>) / [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>) / [electron/domains/worldview/model/WorldView.cjs:1](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/domains/worldview/model/WorldView.cjs](<WorldView.cjs.md#s-1c519701178f11fd>) (Module)
- [WorldView](<WorldView.cjs.md#s-79a62e03ca45f3a5>) (ClassDeclaration)
- [WorldView.constructor](<WorldView.cjs.md#s-eb02dd22cedad2c1>) (Constructor)
- [WorldView.addEntity](<WorldView.cjs.md#s-c66653250b4bea0a>) (MethodDeclaration)
- [WorldView.moveEntity](<WorldView.cjs.md#s-9dac880bfab35b99>) (MethodDeclaration)
- [WorldView.removeEntity](<WorldView.cjs.md#s-7d3634b31f12d2cc>) (MethodDeclaration)
- [WorldView.connect](<WorldView.cjs.md#s-eb2c0a1c8b491b24>) (MethodDeclaration)
- [WorldView.disconnect](<WorldView.cjs.md#s-c18f68ecd5155e95>) (MethodDeclaration)
- [WorldView.updateConnection](<WorldView.cjs.md#s-756603622bedfc0c>) (MethodDeclaration)
- [WorldView.getDirectConnections](<WorldView.cjs.md#s-6fccf54e1a31faa2>) (MethodDeclaration)
- [WorldView.getDirectConnections.&lt;anonymous@84:43&gt;](<WorldView.cjs.md#s-7d4c64e981aa46eb>) (ArrowFunction)
- [WorldView.getSnapshot](<WorldView.cjs.md#s-fd6f0b92f9be833e>) (MethodDeclaration)
- [WorldView.getSnapshot.&lt;anonymous@96:14&gt;](<WorldView.cjs.md#s-a7424f62b46155f2>) (ArrowFunction)
- [WorldView.getSnapshot.&lt;anonymous@100:15&gt;](<WorldView.cjs.md#s-2a88fed1a3dd9618>) (ArrowFunction)
- [WorldView.getSnapshot.&lt;anonymous@102:14&gt;](<WorldView.cjs.md#s-b377aa27cc5bb2dc>) (ArrowFunction)
- [WorldView.getSnapshot.&lt;anonymous@103:15&gt;](<WorldView.cjs.md#s-d4e6a51bcd466451>) (ArrowFunction)
- [WorldView.revision](<WorldView.cjs.md#s-20abe846ec52d712>) (GetAccessor)

<a id="s-1c519701178f11fd"></a>

## electron/domains/worldview/model/WorldView.cjs

[electron/domains/worldview/model/WorldView.cjs:1](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L1>) · Module · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- require — module-loader; [electron/domains/worldview/model/WorldView.cjs:1](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L1>)
- require — module-loader; [electron/domains/worldview/model/WorldView.cjs:2](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L2>)
- require — module-loader; [electron/domains/worldview/model/WorldView.cjs:3](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L3>)
- require — module-loader; [electron/domains/worldview/model/WorldView.cjs:4](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L4>)
- require — module-loader; [electron/domains/worldview/model/WorldView.cjs:5](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L5>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-79a62e03ca45f3a5"></a>

## WorldView

[electron/domains/worldview/model/WorldView.cjs:8](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L8>) · ClassDeclaration · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

Pure WorldView aggregate. Holds references/placement/connections only; no Entity metadata, UI camera, filesystem or providers.

Purpose evidence: jsdoc.

Exported as: WorldView ([electron/domains/worldview/model/WorldView.cjs:1](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L1>)).

Lexical owner: [electron/domains/worldview/model/WorldView.cjs](<WorldView.cjs.md#s-1c519701178f11fd>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- Map — external-or-dynamic-dispatch; [electron/domains/worldview/model/WorldView.cjs:10](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L10>)
- Map — external-or-dynamic-dispatch; [electron/domains/worldview/model/WorldView.cjs:11](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L11>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-eb02dd22cedad2c1"></a>

## WorldView.constructor

[electron/domains/worldview/model/WorldView.cjs:13](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L13>) · Constructor · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

Restores a serializable snapshot, rejecting duplicate membership, duplicate edges or missing endpoints.

Purpose evidence: jsdoc.

Lexical owner: [WorldView](<WorldView.cjs.md#s-79a62e03ca45f3a5>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { id, memberships = &#91;&#93;, connections = &#91;&#93; } | { id: any; memberships?: {}; connections?: {}; } | compiler-inferred | required |

Returns: WorldView (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [WorldView.addEntity](<WorldView.cjs.md#s-c66653250b4bea0a>) — [electron/domains/worldview/model/WorldView.cjs:16](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L16>)
- [WorldView.connect](<WorldView.cjs.md#s-eb2c0a1c8b491b24>) — [electron/domains/worldview/model/WorldView.cjs:17](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L17>)

**Called by (statically resolved):**

- [WorldViewRepository.read](<../repositories/WorldViewRepository.cjs.md#s-91419ef7bf2fa99e>) — [electron/domains/worldview/repositories/WorldViewRepository.cjs:18](<../../../../../../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L18>)
- [WorldViewRepository.endpointWorld](<../repositories/WorldViewRepository.cjs.md#s-29baed00af233aad>) — [electron/domains/worldview/repositories/WorldViewRepository.cjs:47](<../../../../../../../../electron/domains/worldview/repositories/WorldViewRepository.cjs#L47>)
- [WorldViewService.saveChip](<../services/WorldViewService.cjs.md#s-6cf167a187c419b7>) — [electron/domains/worldview/services/WorldViewService.cjs:39](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L39>)
- [world](<../tests/worldview-domain.test.cjs.md#s-039be3acf777df28>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:31](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L31>)
- [&lt;anonymous@67:97&gt;](<../tests/worldview-domain.test.cjs.md#s-addabe66f9ffffb6>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:83](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L83>)
- [&lt;anonymous@223:99&gt;](<../tests/worldview-domain.test.cjs.md#s-bbf315728a031ceb>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:247](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L247>)

Unresolved / external call sites: 1.

- identifier.parse — external-or-dynamic-dispatch; [electron/domains/worldview/model/WorldView.cjs:14](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L14>)

**Related tests / acceptance harnesses:**

- [electron/domains/worldview/tests/worldview-domain.test.cjs:31](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L31>) — static-call-site; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:83](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L83>) — static-call-site; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:247](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L247>) — static-call-site; coverage not established.

<a id="s-c66653250b4bea0a"></a>

## WorldView.addEntity

[electron/domains/worldview/model/WorldView.cjs:20](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L20>) · MethodDeclaration · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

Adds one existing Entity reference and its placement; duplicate IDs reject without changing state.

Purpose evidence: jsdoc.

Lexical owner: [WorldView](<WorldView.cjs.md#s-79a62e03ca45f3a5>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| entityId | any | compiler-inferred | required |
| placement | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [requireInvariant](<../contracts/worldview-errors.cjs.md#s-2dc3226dc732f323>) — [electron/domains/worldview/model/WorldView.cjs:22](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L22>)

**Called by (statically resolved):**

- [WorldView.constructor](<WorldView.cjs.md#s-eb02dd22cedad2c1>) — [electron/domains/worldview/model/WorldView.cjs:16](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L16>)
- [WorldViewService.saveChip](<../services/WorldViewService.cjs.md#s-6cf167a187c419b7>) — [electron/domains/worldview/services/WorldViewService.cjs:41](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L41>)
- [&lt;anonymous@67:97&gt;.&lt;anonymous@71:5&gt;](<../tests/worldview-domain.test.cjs.md#s-10fa1018842f207a>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:71](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L71>)

Unresolved / external call sites: 4.

- identifier.parse — external-or-dynamic-dispatch; [electron/domains/worldview/model/WorldView.cjs:21](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L21>)
- this.#members.has — external-or-dynamic-dispatch; [electron/domains/worldview/model/WorldView.cjs:23](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L23>)
- this.#members.set — external-or-dynamic-dispatch; [electron/domains/worldview/model/WorldView.cjs:27](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L27>)
- position.parse — external-or-dynamic-dispatch; [electron/domains/worldview/model/WorldView.cjs:27](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L27>)

**Related tests / acceptance harnesses:**

- [electron/domains/worldview/tests/worldview-domain.test.cjs:71](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L71>) — static-call-site; coverage not established.

<a id="s-9dac880bfab35b99"></a>

## WorldView.moveEntity

[electron/domains/worldview/model/WorldView.cjs:30](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L30>) · MethodDeclaration · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

Updates placement without changing identity or Entity-owned metadata; unknown members reject.

Purpose evidence: jsdoc.

Lexical owner: [WorldView](<WorldView.cjs.md#s-79a62e03ca45f3a5>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| entityId | any | compiler-inferred | required |
| placement | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [requireInvariant](<../contracts/worldview-errors.cjs.md#s-2dc3226dc732f323>) — [electron/domains/worldview/model/WorldView.cjs:31](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L31>)

**Called by (statically resolved):**

- [&lt;anonymous@67:97&gt;](<../tests/worldview-domain.test.cjs.md#s-addabe66f9ffffb6>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:75](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L75>)
- [&lt;anonymous@67:97&gt;.&lt;anonymous@78:17&gt;](<../tests/worldview-domain.test.cjs.md#s-6446705927ec34ff>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:78](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L78>)
- [&lt;anonymous@67:97&gt;.&lt;anonymous@79:17&gt;](<../tests/worldview-domain.test.cjs.md#s-3e1e5a9db573e0a5>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:79](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L79>)

Unresolved / external call sites: 3.

- this.#members.has — external-or-dynamic-dispatch; [electron/domains/worldview/model/WorldView.cjs:32](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L32>)
- this.#members.set — external-or-dynamic-dispatch; [electron/domains/worldview/model/WorldView.cjs:36](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L36>)
- position.parse — external-or-dynamic-dispatch; [electron/domains/worldview/model/WorldView.cjs:36](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L36>)

**Related tests / acceptance harnesses:**

- [electron/domains/worldview/tests/worldview-domain.test.cjs:75](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L75>) — static-call-site; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:78](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L78>) — static-call-site; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:79](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L79>) — static-call-site; coverage not established.

<a id="s-7d3634b31f12d2cc"></a>

## WorldView.removeEntity

[electron/domains/worldview/model/WorldView.cjs:39](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L39>) · MethodDeclaration · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

Removes membership and incident edges from this snapshot; does not delete an Entity or any persisted record.

Purpose evidence: jsdoc.

Lexical owner: [WorldView](<WorldView.cjs.md#s-79a62e03ca45f3a5>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| entityId | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [WorldView.getDirectConnections](<WorldView.cjs.md#s-6fccf54e1a31faa2>) — [electron/domains/worldview/model/WorldView.cjs:42](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L42>)

**Called by (statically resolved):**

- [&lt;anonymous@134:105&gt;](<../tests/worldview-domain.test.cjs.md#s-a15f357b4f1ef6c1>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:153](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L153>)

Unresolved / external call sites: 3.

- identifier.parse — external-or-dynamic-dispatch; [electron/domains/worldview/model/WorldView.cjs:40](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L40>)
- this.#members.delete — external-or-dynamic-dispatch; [electron/domains/worldview/model/WorldView.cjs:41](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L41>)
- this.#connections.delete — external-or-dynamic-dispatch; [electron/domains/worldview/model/WorldView.cjs:43](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L43>)

**Related tests / acceptance harnesses:**

- [electron/domains/worldview/tests/worldview-domain.test.cjs:153](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L153>) — static-call-site; coverage not established.

<a id="s-eb2c0a1c8b491b24"></a>

## WorldView.connect

[electron/domains/worldview/model/WorldView.cjs:46](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L46>) · MethodDeclaration · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

Adds a structurally valid edge with unique identity; allows existing multiple-edge-per-anchor behavior.

Purpose evidence: jsdoc.

Lexical owner: [WorldView](<WorldView.cjs.md#s-79a62e03ca45f3a5>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [Connection.constructor](<Connection.cjs.md#s-d6c1ec5a51d80cca>) — [electron/domains/worldview/model/WorldView.cjs:48](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L48>)
- [Connection.getSnapshot](<Connection.cjs.md#s-17b741d9ec9a95f0>) — [electron/domains/worldview/model/WorldView.cjs:49](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L49>)
- [requireInvariant](<../contracts/worldview-errors.cjs.md#s-2dc3226dc732f323>) — [electron/domains/worldview/model/WorldView.cjs:50](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L50>)
- [requireInvariant](<../contracts/worldview-errors.cjs.md#s-2dc3226dc732f323>) — [electron/domains/worldview/model/WorldView.cjs:55](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L55>)

**Called by (statically resolved):**

- [WorldView.constructor](<WorldView.cjs.md#s-eb02dd22cedad2c1>) — [electron/domains/worldview/model/WorldView.cjs:17](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L17>)
- [&lt;anonymous@134:105&gt;](<../tests/worldview-domain.test.cjs.md#s-a15f357b4f1ef6c1>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:136](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L136>)
- [&lt;anonymous@134:105&gt;.&lt;anonymous@137:17&gt;](<../tests/worldview-domain.test.cjs.md#s-12357bad7042467c>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:137](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L137>)
- [&lt;anonymous@134:105&gt;.&lt;anonymous@139:5&gt;](<../tests/worldview-domain.test.cjs.md#s-7066b359fe3e2a22>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:139](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L139>)
- [&lt;anonymous@134:105&gt;](<../tests/worldview-domain.test.cjs.md#s-a15f357b4f1ef6c1>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:142](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L142>)
- [&lt;anonymous@158:85&gt;](<../tests/worldview-domain.test.cjs.md#s-a66edad033d91876>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:160](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L160>)
- [&lt;anonymous@158:85&gt;](<../tests/worldview-domain.test.cjs.md#s-a66edad033d91876>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:161](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L161>)
- [&lt;anonymous@282:89&gt;](<../tests/worldview-domain.test.cjs.md#s-488c29ce8f9a0580>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:284](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L284>)
- [&lt;anonymous@282:89&gt;](<../tests/worldview-domain.test.cjs.md#s-488c29ce8f9a0580>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:285](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L285>)

Unresolved / external call sites: 4.

- this.#connections.has — external-or-dynamic-dispatch; [electron/domains/worldview/model/WorldView.cjs:51](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L51>)
- this.#members.has — external-or-dynamic-dispatch; [electron/domains/worldview/model/WorldView.cjs:56](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L56>)
- this.#members.has — external-or-dynamic-dispatch; [electron/domains/worldview/model/WorldView.cjs:57](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L57>)
- this.#connections.set — external-or-dynamic-dispatch; [electron/domains/worldview/model/WorldView.cjs:61](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L61>)

**Related tests / acceptance harnesses:**

- [electron/domains/worldview/tests/worldview-domain.test.cjs:136](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L136>) — static-call-site; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:137](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L137>) — static-call-site; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:139](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L139>) — static-call-site; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:142](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L142>) — static-call-site; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:160](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L160>) — static-call-site; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:161](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L161>) — static-call-site; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:284](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L284>) — static-call-site; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:285](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L285>) — static-call-site; coverage not established.

<a id="s-c18f68ecd5155e95"></a>

## WorldView.disconnect

[electron/domains/worldview/model/WorldView.cjs:64](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L64>) · MethodDeclaration · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

Removes only an edge; repeated removal is harmless and does not affect endpoints.

Purpose evidence: jsdoc.

Lexical owner: [WorldView](<WorldView.cjs.md#s-79a62e03ca45f3a5>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| connectionId | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@134:105&gt;](<../tests/worldview-domain.test.cjs.md#s-a15f357b4f1ef6c1>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:151](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L151>)

Unresolved / external call sites: 2.

- identifier.parse — external-or-dynamic-dispatch; [electron/domains/worldview/model/WorldView.cjs:65](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L65>)
- this.#connections.delete — external-or-dynamic-dispatch; [electron/domains/worldview/model/WorldView.cjs:66](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L66>)

**Related tests / acceptance harnesses:**

- [electron/domains/worldview/tests/worldview-domain.test.cjs:151](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L151>) — static-call-site; coverage not established.

<a id="s-756603622bedfc0c"></a>

## WorldView.updateConnection

[electron/domains/worldview/model/WorldView.cjs:69](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L69>) · MethodDeclaration · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

Changes metadata/direction while preserving identity and endpoint references.

Purpose evidence: jsdoc.

Lexical owner: [WorldView](<WorldView.cjs.md#s-79a62e03ca45f3a5>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| connectionId | any | compiler-inferred | required |
| metadata | any | compiler-inferred | required |
| direction | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [requireInvariant](<../contracts/worldview-errors.cjs.md#s-2dc3226dc732f323>) — [electron/domains/worldview/model/WorldView.cjs:71](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L71>)

**Called by (statically resolved):**

- [&lt;anonymous@134:105&gt;](<../tests/worldview-domain.test.cjs.md#s-a15f357b4f1ef6c1>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:143](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L143>)
- [&lt;anonymous@158:85&gt;](<../tests/worldview-domain.test.cjs.md#s-a66edad033d91876>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:178](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L178>)

Unresolved / external call sites: 3.

- this.#connections.get — external-or-dynamic-dispatch; [electron/domains/worldview/model/WorldView.cjs:70](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L70>)
- this.#connections.set — external-or-dynamic-dispatch; [electron/domains/worldview/model/WorldView.cjs:76](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L76>)
- existing.withMetadata — external-or-dynamic-dispatch; [electron/domains/worldview/model/WorldView.cjs:78](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L78>)

**Related tests / acceptance harnesses:**

- [electron/domains/worldview/tests/worldview-domain.test.cjs:143](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L143>) — static-call-site; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:178](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L178>) — static-call-site; coverage not established.

<a id="s-6fccf54e1a31faa2"></a>

## WorldView.getDirectConnections

[electron/domains/worldview/model/WorldView.cjs:82](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L82>) · MethodDeclaration · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

Returns direct descriptive edges only; no recursive traversal, data transfer or permission effects.

Purpose evidence: jsdoc.

Lexical owner: [WorldView](<WorldView.cjs.md#s-79a62e03ca45f3a5>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| entityId | any | compiler-inferred | required |
| direction | string | compiler-inferred | optional, default present |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [directConnections](<../queries/connection-queries.cjs.md#s-a2c4c119e7dfa264>) — [electron/domains/worldview/model/WorldView.cjs:83](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L83>)

**Called by (statically resolved):**

- [WorldView.removeEntity](<WorldView.cjs.md#s-7d3634b31f12d2cc>) — [electron/domains/worldview/model/WorldView.cjs:42](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L42>)
- [&lt;anonymous@134:105&gt;](<../tests/worldview-domain.test.cjs.md#s-a15f357b4f1ef6c1>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:148](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L148>)
- [&lt;anonymous@134:105&gt;](<../tests/worldview-domain.test.cjs.md#s-a15f357b4f1ef6c1>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:149](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L149>)
- [&lt;anonymous@158:85&gt;](<../tests/worldview-domain.test.cjs.md#s-a66edad033d91876>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:163](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L163>)
- [&lt;anonymous@158:85&gt;](<../tests/worldview-domain.test.cjs.md#s-a66edad033d91876>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:167](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L167>)
- [&lt;anonymous@158:85&gt;](<../tests/worldview-domain.test.cjs.md#s-a66edad033d91876>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:171](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L171>)
- [&lt;anonymous@158:85&gt;.&lt;anonymous@175:5&gt;](<../tests/worldview-domain.test.cjs.md#s-7dc2c93cd701d538>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:175](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L175>)
- [&lt;anonymous@158:85&gt;](<../tests/worldview-domain.test.cjs.md#s-a66edad033d91876>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:183](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L183>)

Unresolved / external call sites: 2.

- &#91;...this.#connections.values()&#93;.map — external-or-dynamic-dispatch; [electron/domains/worldview/model/WorldView.cjs:84](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L84>)
- this.#connections.values — external-or-dynamic-dispatch; [electron/domains/worldview/model/WorldView.cjs:84](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L84>)

**Related tests / acceptance harnesses:**

- [electron/domains/worldview/tests/worldview-domain.test.cjs:148](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L148>) — static-call-site; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:149](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L149>) — static-call-site; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:163](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L163>) — static-call-site; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:167](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L167>) — static-call-site; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:171](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L171>) — static-call-site; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:175](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L175>) — static-call-site; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:183](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L183>) — static-call-site; coverage not established.

<a id="s-7d4c64e981aa46eb"></a>

## WorldView.getDirectConnections.&lt;anonymous@84:43&gt;

[electron/domains/worldview/model/WorldView.cjs:84](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L84>) · ArrowFunction · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [WorldView.getDirectConnections](<WorldView.cjs.md#s-6fccf54e1a31faa2>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| connection | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- connection.getSnapshot — external-or-dynamic-dispatch; [electron/domains/worldview/model/WorldView.cjs:85](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L85>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-fd6f0b92f9be833e"></a>

## WorldView.getSnapshot

[electron/domains/worldview/model/WorldView.cjs:92](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L92>) · MethodDeclaration · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

Exports deterministic detached state. Entity metadata and transient renderer state are intentionally absent.

Purpose evidence: jsdoc.

Lexical owner: [WorldView](<WorldView.cjs.md#s-79a62e03ca45f3a5>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: { id: any; memberships: any; connections: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [WorldView.revision](<WorldView.cjs.md#s-20abe846ec52d712>) — [electron/domains/worldview/model/WorldView.cjs:109](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L109>)
- [&lt;anonymous@67:97&gt;](<../tests/worldview-domain.test.cjs.md#s-addabe66f9ffffb6>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:77](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L77>)
- [&lt;anonymous@67:97&gt;](<../tests/worldview-domain.test.cjs.md#s-addabe66f9ffffb6>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:80](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L80>)
- [&lt;anonymous@67:97&gt;](<../tests/worldview-domain.test.cjs.md#s-addabe66f9ffffb6>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:82](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L82>)
- [&lt;anonymous@67:97&gt;](<../tests/worldview-domain.test.cjs.md#s-addabe66f9ffffb6>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:83](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L83>)
- [&lt;anonymous@67:97&gt;](<../tests/worldview-domain.test.cjs.md#s-addabe66f9ffffb6>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:84](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L84>)
- [&lt;anonymous@134:105&gt;](<../tests/worldview-domain.test.cjs.md#s-a15f357b4f1ef6c1>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:154](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L154>)
- [&lt;anonymous@134:105&gt;](<../tests/worldview-domain.test.cjs.md#s-a15f357b4f1ef6c1>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:155](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L155>)

Unresolved / external call sites: 5.

- &#91;...this.#members&#93; .map((&#91;entityId, position&#93;) =&gt; ({ entityId, position: structuredClone(position), })) .sort — external-or-dynamic-dispatch; [electron/domains/worldview/model/WorldView.cjs:95](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L95>)
- &#91;...this.#members&#93; .map — external-or-dynamic-dispatch; [electron/domains/worldview/model/WorldView.cjs:95](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L95>)
- &#91;...this.#connections.values()&#93; .map((connection) =&gt; connection.getSnapshot()) .sort — external-or-dynamic-dispatch; [electron/domains/worldview/model/WorldView.cjs:101](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L101>)
- &#91;...this.#connections.values()&#93; .map — external-or-dynamic-dispatch; [electron/domains/worldview/model/WorldView.cjs:101](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L101>)
- this.#connections.values — external-or-dynamic-dispatch; [electron/domains/worldview/model/WorldView.cjs:101](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L101>)

**Related tests / acceptance harnesses:**

- [electron/domains/worldview/tests/worldview-domain.test.cjs:77](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L77>) — static-call-site; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:80](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L80>) — static-call-site; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:82](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L82>) — static-call-site; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:83](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L83>) — static-call-site; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:84](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L84>) — static-call-site; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:154](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L154>) — static-call-site; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:155](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L155>) — static-call-site; coverage not established.

<a id="s-a7424f62b46155f2"></a>

## WorldView.getSnapshot.&lt;anonymous@96:14&gt;

[electron/domains/worldview/model/WorldView.cjs:96](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L96>) · ArrowFunction · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [WorldView.getSnapshot](<WorldView.cjs.md#s-fd6f0b92f9be833e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| &#91;entityId, position&#93; | &#91;any, any&#93; | compiler-inferred | required |

Returns: { entityId: any; position: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- structuredClone — external-or-dynamic-dispatch; [electron/domains/worldview/model/WorldView.cjs:98](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L98>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-2a88fed1a3dd9618"></a>

## WorldView.getSnapshot.&lt;anonymous@100:15&gt;

[electron/domains/worldview/model/WorldView.cjs:100](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L100>) · ArrowFunction · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [WorldView.getSnapshot](<WorldView.cjs.md#s-fd6f0b92f9be833e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| a | any | compiler-inferred | required |
| b | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- a.entityId.localeCompare — external-or-dynamic-dispatch; [electron/domains/worldview/model/WorldView.cjs:100](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L100>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-b377aa27cc5bb2dc"></a>

## WorldView.getSnapshot.&lt;anonymous@102:14&gt;

[electron/domains/worldview/model/WorldView.cjs:102](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L102>) · ArrowFunction · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [WorldView.getSnapshot](<WorldView.cjs.md#s-fd6f0b92f9be833e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| connection | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- connection.getSnapshot — external-or-dynamic-dispatch; [electron/domains/worldview/model/WorldView.cjs:102](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L102>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d4e6a51bcd466451"></a>

## WorldView.getSnapshot.&lt;anonymous@103:15&gt;

[electron/domains/worldview/model/WorldView.cjs:103](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L103>) · ArrowFunction · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [WorldView.getSnapshot](<WorldView.cjs.md#s-fd6f0b92f9be833e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| a | any | compiler-inferred | required |
| b | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- a.id.localeCompare — external-or-dynamic-dispatch; [electron/domains/worldview/model/WorldView.cjs:103](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L103>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-20abe846ec52d712"></a>

## WorldView.revision

[electron/domains/worldview/model/WorldView.cjs:107](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L107>) · GetAccessor · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

Content revision for this in-memory graph only; not an Entity/Identity revision or a persisted global concurrency token.

Purpose evidence: jsdoc.

Lexical owner: [WorldView](<WorldView.cjs.md#s-79a62e03ca45f3a5>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [WorldView.getSnapshot](<WorldView.cjs.md#s-fd6f0b92f9be833e>) — [electron/domains/worldview/model/WorldView.cjs:109](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L109>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- createHash("sha256") .update(JSON.stringify(this.getSnapshot())) .digest — external-or-dynamic-dispatch; [electron/domains/worldview/model/WorldView.cjs:108](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L108>)
- createHash("sha256") .update — external-or-dynamic-dispatch; [electron/domains/worldview/model/WorldView.cjs:108](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L108>)
- createHash — external-or-dynamic-dispatch; [electron/domains/worldview/model/WorldView.cjs:108](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L108>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/domains/worldview/model/WorldView.cjs:109](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L109>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
