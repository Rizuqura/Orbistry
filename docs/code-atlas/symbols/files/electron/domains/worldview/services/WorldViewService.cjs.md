# electron/domains/worldview/services/WorldViewService.cjs: symbols

[Atlas](<../../../../../../README.md>) / [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>) / [electron/domains/worldview/services/WorldViewService.cjs:1](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/domains/worldview/services/WorldViewService.cjs](<WorldViewService.cjs.md#s-0339137873bf49c0>) (Module)
- [WorldViewService](<WorldViewService.cjs.md#s-f5924f19d9b6d22d>) (ClassDeclaration)
- [WorldViewService.constructor](<WorldViewService.cjs.md#s-1e8ff3665f91cbf2>) (Constructor)
- [WorldViewService.constructor.&lt;anonymous@14:21&gt;](<WorldViewService.cjs.md#s-ed3908f0640765af>) (ArrowFunction)
- [WorldViewService.permit](<WorldViewService.cjs.md#s-5697cb02709ef464>) (MethodDeclaration)
- [WorldViewService.load](<WorldViewService.cjs.md#s-9a49a0d9bfeaa0c2>) (MethodDeclaration)
- [WorldViewService.saveChip](<WorldViewService.cjs.md#s-6cf167a187c419b7>) (MethodDeclaration)
- [WorldViewService.removeEntity](<WorldViewService.cjs.md#s-b2761547de1733a5>) (MethodDeclaration)
- [WorldViewService.createConnection](<WorldViewService.cjs.md#s-59ad55cf2312518c>) (MethodDeclaration)
- [WorldViewService.updateConnection](<WorldViewService.cjs.md#s-bf9efb3d2453cacd>) (MethodDeclaration)
- [WorldViewService.updateConnection.&lt;anonymous@85:46&gt;](<WorldViewService.cjs.md#s-d56b724de3424a2b>) (ArrowFunction)
- [WorldViewService.disconnect](<WorldViewService.cjs.md#s-2486ee0c7a4665d4>) (MethodDeclaration)
- [WorldViewService.listDirectConnections](<WorldViewService.cjs.md#s-49499fbc6b875b47>) (MethodDeclaration)
- [WorldViewService.listDirectConnections.&lt;anonymous@115:27&gt;](<WorldViewService.cjs.md#s-7679707372763a3a>) (ArrowFunction)

<a id="s-0339137873bf49c0"></a>

## electron/domains/worldview/services/WorldViewService.cjs

[electron/domains/worldview/services/WorldViewService.cjs:1](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L1>) · Module · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- require — module-loader; [electron/domains/worldview/services/WorldViewService.cjs:1](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L1>)
- require — module-loader; [electron/domains/worldview/services/WorldViewService.cjs:2](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L2>)
- require — module-loader; [electron/domains/worldview/services/WorldViewService.cjs:3](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L3>)
- require — module-loader; [electron/domains/worldview/services/WorldViewService.cjs:4](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L4>)
- require — module-loader; [electron/domains/worldview/services/WorldViewService.cjs:7](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L7>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-f5924f19d9b6d22d"></a>

## WorldViewService

[electron/domains/worldview/services/WorldViewService.cjs:10](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L10>) · ClassDeclaration · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

Coordinates WorldView invariants with trusted host authorization and compatible persistence. Never invokes knowledge readers, inference or Engines.

Purpose evidence: jsdoc.

Exported as: WorldViewService ([electron/domains/worldview/services/WorldViewService.cjs:1](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L1>)).

Lexical owner: [electron/domains/worldview/services/WorldViewService.cjs](<WorldViewService.cjs.md#s-0339137873bf49c0>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-1e8ff3665f91cbf2"></a>

## WorldViewService.constructor

[electron/domains/worldview/services/WorldViewService.cjs:12](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L12>) · Constructor · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

Host supplies authority; absent/false/truthy non-boolean admission denies. Context must be constructed by trusted backend code.

Purpose evidence: jsdoc.

Lexical owner: [WorldViewService](<WorldViewService.cjs.md#s-f5924f19d9b6d22d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| {     repository = new WorldViewRepository(),     authorization = async () =&gt; false,   } | { repository?: WorldViewRepository; authorization?: () =&gt; unknown; } | compiler-inferred | optional, default present |

Returns: WorldViewService (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [WorldViewRepository.constructor](<../repositories/WorldViewRepository.cjs.md#s-daa329050e52f346>) — [electron/domains/worldview/services/WorldViewService.cjs:13](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L13>)

**Called by (statically resolved):**

- [registerWorldViewIpc](<../../../core/ipc/worldview-ipc.cjs.md#s-a743a4d867b92345>) — [electron/core/ipc/worldview-ipc.cjs:23](<../../../../../../../../electron/core/ipc/worldview-ipc.cjs#L23>)
- [&lt;anonymous@35:94&gt;](<../../entity/tests/entity-repository.test.cjs.md#s-f6295f2de7da93d4>) — [electron/domains/entity/tests/entity-repository.test.cjs:41](<../../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L41>)
- [fixture](<../tests/worldview-domain.test.cjs.md#s-4337a6c8e6e4f156>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:61](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L61>)
- [&lt;anonymous@186:97&gt;](<../tests/worldview-domain.test.cjs.md#s-4ddaa2cce846c1fa>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:200](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L200>)
- [&lt;anonymous@223:99&gt;](<../tests/worldview-domain.test.cjs.md#s-bbf315728a031ceb>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:249](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L249>)
- [&lt;anonymous@282:89&gt;](<../tests/worldview-domain.test.cjs.md#s-488c29ce8f9a0580>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:292](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L292>)
- [&lt;anonymous@314:75&gt;](<../tests/worldview-domain.test.cjs.md#s-03349abb7988ac1b>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:316](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L316>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/domains/entity/tests/entity-repository.test.cjs:41](<../../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L41>) — static-call-site; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:61](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L61>) — static-call-site; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:200](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L200>) — static-call-site; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:249](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L249>) — static-call-site; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:292](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L292>) — static-call-site; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:316](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L316>) — static-call-site; coverage not established.

<a id="s-ed3908f0640765af"></a>

## WorldViewService.constructor.&lt;anonymous@14:21&gt;

[electron/domains/worldview/services/WorldViewService.cjs:14](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L14>) · ArrowFunction · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [WorldViewService.constructor](<WorldViewService.cjs.md#s-1e8ff3665f91cbf2>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-5697cb02709ef464"></a>

## WorldViewService.permit

[electron/domains/worldview/services/WorldViewService.cjs:20](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L20>) · MethodDeclaration · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

Requires literal-true admission for the operation and Entity scope; no renderer-supplied approval flags are interpreted here.

Purpose evidence: jsdoc.

Lexical owner: [WorldViewService](<WorldViewService.cjs.md#s-f5924f19d9b6d22d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| context | any | compiler-inferred | required |
| operation | any | compiler-inferred | required |
| entityIds | {} | compiler-inferred | optional, default present |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [requireInvariant](<../contracts/worldview-errors.cjs.md#s-2dc3226dc732f323>) — [electron/domains/worldview/services/WorldViewService.cjs:21](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L21>)

**Called by (statically resolved):**

- [WorldViewService.load](<WorldViewService.cjs.md#s-9a49a0d9bfeaa0c2>) — [electron/domains/worldview/services/WorldViewService.cjs:29](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L29>)
- [WorldViewService.load](<WorldViewService.cjs.md#s-9a49a0d9bfeaa0c2>) — [electron/domains/worldview/services/WorldViewService.cjs:31](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L31>)
- [WorldViewService.saveChip](<WorldViewService.cjs.md#s-6cf167a187c419b7>) — [electron/domains/worldview/services/WorldViewService.cjs:36](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L36>)
- [WorldViewService.saveChip](<WorldViewService.cjs.md#s-6cf167a187c419b7>) — [electron/domains/worldview/services/WorldViewService.cjs:49](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L49>)
- [WorldViewService.removeEntity](<WorldViewService.cjs.md#s-b2761547de1733a5>) — [electron/domains/worldview/services/WorldViewService.cjs:55](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L55>)
- [WorldViewService.removeEntity](<WorldViewService.cjs.md#s-b2761547de1733a5>) — [electron/domains/worldview/services/WorldViewService.cjs:60](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L60>)
- [WorldViewService.createConnection](<WorldViewService.cjs.md#s-59ad55cf2312518c>) — [electron/domains/worldview/services/WorldViewService.cjs:68](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L68>)
- [WorldViewService.createConnection](<WorldViewService.cjs.md#s-59ad55cf2312518c>) — [electron/domains/worldview/services/WorldViewService.cjs:71](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L71>)
- [WorldViewService.updateConnection](<WorldViewService.cjs.md#s-bf9efb3d2453cacd>) — [electron/domains/worldview/services/WorldViewService.cjs:79](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L79>)
- [WorldViewService.updateConnection](<WorldViewService.cjs.md#s-bf9efb3d2453cacd>) — [electron/domains/worldview/services/WorldViewService.cjs:87](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L87>)
- [WorldViewService.disconnect](<WorldViewService.cjs.md#s-2486ee0c7a4665d4>) — [electron/domains/worldview/services/WorldViewService.cjs:97](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L97>)
- [WorldViewService.disconnect](<WorldViewService.cjs.md#s-2486ee0c7a4665d4>) — [electron/domains/worldview/services/WorldViewService.cjs:102](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L102>)
- [WorldViewService.listDirectConnections](<WorldViewService.cjs.md#s-49499fbc6b875b47>) — [electron/domains/worldview/services/WorldViewService.cjs:108](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L108>)
- [WorldViewService.listDirectConnections](<WorldViewService.cjs.md#s-49499fbc6b875b47>) — [electron/domains/worldview/services/WorldViewService.cjs:120](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L120>)

Unresolved / external call sites: 1.

- this.authorization — signature-only-candidate; [electron/domains/worldview/services/WorldViewService.cjs:22](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L22>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-9a49a0d9bfeaa0c2"></a>

## WorldViewService.load

[electron/domains/worldview/services/WorldViewService.cjs:28](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L28>) · MethodDeclaration · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

Reads the existing DTO after host admission, then rechecks before disclosing it across IPC.

Purpose evidence: jsdoc.

Lexical owner: [WorldViewService](<WorldViewService.cjs.md#s-f5924f19d9b6d22d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| context | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [WorldViewService.permit](<WorldViewService.cjs.md#s-5697cb02709ef464>) — [electron/domains/worldview/services/WorldViewService.cjs:29](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L29>)
- [WorldViewRepository.read](<../repositories/WorldViewRepository.cjs.md#s-91419ef7bf2fa99e>) — [electron/domains/worldview/services/WorldViewService.cjs:30](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L30>)
- [WorldViewService.permit](<WorldViewService.cjs.md#s-5697cb02709ef464>) — [electron/domains/worldview/services/WorldViewService.cjs:31](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L31>)

**Called by (statically resolved):**

- [registerWorldViewIpc.load](<../../../core/ipc/worldview-ipc.cjs.md#s-d0cfa872371d4860>) — [electron/core/ipc/worldview-ipc.cjs:252](<../../../../../../../../electron/core/ipc/worldview-ipc.cjs#L252>)
- [&lt;anonymous@35:94&gt;](<../../entity/tests/entity-repository.test.cjs.md#s-f6295f2de7da93d4>) — [electron/domains/entity/tests/entity-repository.test.cjs:97](<../../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L97>)
- [&lt;anonymous@186:97&gt;](<../tests/worldview-domain.test.cjs.md#s-4ddaa2cce846c1fa>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:202](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L202>)
- [&lt;anonymous@314:75&gt;](<../tests/worldview-domain.test.cjs.md#s-03349abb7988ac1b>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:325](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L325>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/domains/entity/tests/entity-repository.test.cjs:97](<../../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L97>) — static-call-site; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:202](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L202>) — static-call-site; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:325](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L325>) — static-call-site; coverage not established.

<a id="s-6cf167a187c419b7"></a>

## WorldViewService.saveChip

[electron/domains/worldview/services/WorldViewService.cjs:35](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L35>) · MethodDeclaration · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

Compatibility save for the existing combined metadata/placement IPC. Only placement/membership is modeled here; Entity validation/persistence stays in its adapter.

Purpose evidence: jsdoc.

Lexical owner: [WorldViewService](<WorldViewService.cjs.md#s-f5924f19d9b6d22d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| context | any | compiler-inferred | required |
| chip | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [WorldViewService.permit](<WorldViewService.cjs.md#s-5697cb02709ef464>) — [electron/domains/worldview/services/WorldViewService.cjs:36](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L36>)
- [WorldView.constructor](<../model/WorldView.cjs.md#s-eb02dd22cedad2c1>) — [electron/domains/worldview/services/WorldViewService.cjs:39](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L39>)
- [WorldView.addEntity](<../model/WorldView.cjs.md#s-c66653250b4bea0a>) — [electron/domains/worldview/services/WorldViewService.cjs:41](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L41>)
- [WorldViewService.permit](<WorldViewService.cjs.md#s-5697cb02709ef464>) — [electron/domains/worldview/services/WorldViewService.cjs:49](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L49>)
- [WorldViewRepository.saveChip](<../repositories/WorldViewRepository.cjs.md#s-27f3832301869646>) — [electron/domains/worldview/services/WorldViewService.cjs:50](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L50>)

**Called by (statically resolved):**

- [registerWorldViewIpc.save](<../../../core/ipc/worldview-ipc.cjs.md#s-f650eb938c652013>) — [electron/core/ipc/worldview-ipc.cjs:254](<../../../../../../../../electron/core/ipc/worldview-ipc.cjs#L254>)
- [&lt;anonymous@35:94&gt;](<../../entity/tests/entity-repository.test.cjs.md#s-f6295f2de7da93d4>) — [electron/domains/entity/tests/entity-repository.test.cjs:44](<../../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L44>)
- [&lt;anonymous@35:94&gt;](<../../entity/tests/entity-repository.test.cjs.md#s-f6295f2de7da93d4>) — [electron/domains/entity/tests/entity-repository.test.cjs:45](<../../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L45>)
- [&lt;anonymous@35:94&gt;](<../../entity/tests/entity-repository.test.cjs.md#s-f6295f2de7da93d4>) — [electron/domains/entity/tests/entity-repository.test.cjs:99](<../../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L99>)
- [&lt;anonymous@186:97&gt;](<../tests/worldview-domain.test.cjs.md#s-4ddaa2cce846c1fa>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:206](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L206>)

Unresolved / external call sites: 1.

- Error — external-or-dynamic-dispatch; [electron/domains/worldview/services/WorldViewService.cjs:46](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L46>)

**Related tests / acceptance harnesses:**

- [electron/domains/entity/tests/entity-repository.test.cjs:44](<../../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L44>) — static-call-site; coverage not established.
- [electron/domains/entity/tests/entity-repository.test.cjs:45](<../../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L45>) — static-call-site; coverage not established.
- [electron/domains/entity/tests/entity-repository.test.cjs:99](<../../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L99>) — static-call-site; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:206](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L206>) — static-call-site; coverage not established.

<a id="s-b2761547de1733a5"></a>

## WorldViewService.removeEntity

[electron/domains/worldview/services/WorldViewService.cjs:53](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L53>) · MethodDeclaration · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

Removes membership via the existing deletion boundary. Physical dangling connections remain readable for legacy compatibility; no source is deleted.

Purpose evidence: jsdoc.

Lexical owner: [WorldViewService](<WorldViewService.cjs.md#s-f5924f19d9b6d22d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| context | any | compiler-inferred | required |
| entityId | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [WorldViewService.permit](<WorldViewService.cjs.md#s-5697cb02709ef464>) — [electron/domains/worldview/services/WorldViewService.cjs:55](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L55>)
- [WorldViewRepository.read](<../repositories/WorldViewRepository.cjs.md#s-91419ef7bf2fa99e>) — [electron/domains/worldview/services/WorldViewService.cjs:56](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L56>)
- [WorldViewService.permit](<WorldViewService.cjs.md#s-5697cb02709ef464>) — [electron/domains/worldview/services/WorldViewService.cjs:60](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L60>)
- [WorldViewRepository.deleteChip](<../repositories/WorldViewRepository.cjs.md#s-aa8fb2db0a6612b2>) — [electron/domains/worldview/services/WorldViewService.cjs:61](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L61>)

**Called by (statically resolved):**

- [registerWorldViewIpc.delete](<../../../core/ipc/worldview-ipc.cjs.md#s-135b8d862c7ba5c6>) — [electron/core/ipc/worldview-ipc.cjs:256](<../../../../../../../../electron/core/ipc/worldview-ipc.cjs#L256>)

Unresolved / external call sites: 2.

- identifier.parse — external-or-dynamic-dispatch; [electron/domains/worldview/services/WorldViewService.cjs:54](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L54>)
- world.removeEntity — external-or-dynamic-dispatch; [electron/domains/worldview/services/WorldViewService.cjs:59](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L59>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-59ad55cf2312518c"></a>

## WorldViewService.createConnection

[electron/domains/worldview/services/WorldViewService.cjs:64](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L64>) · MethodDeclaration · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

Validates logical endpoints and membership before compatible, queued creation. Exact retries are still accepted by storage.

Purpose evidence: jsdoc.

Lexical owner: [WorldViewService](<WorldViewService.cjs.md#s-f5924f19d9b6d22d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| context | any | compiler-inferred | required |
| record | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [Connection.fromLegacy](<../model/Connection.cjs.md#s-8e5b9746944b56b7>) — [electron/domains/worldview/services/WorldViewService.cjs:65](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L65>)
- [Connection.getSnapshot](<../model/Connection.cjs.md#s-17b741d9ec9a95f0>) — [electron/domains/worldview/services/WorldViewService.cjs:66](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L66>)
- [WorldViewService.permit](<WorldViewService.cjs.md#s-5697cb02709ef464>) — [electron/domains/worldview/services/WorldViewService.cjs:68](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L68>)
- [WorldViewRepository.endpointWorld](<../repositories/WorldViewRepository.cjs.md#s-29baed00af233aad>) — [electron/domains/worldview/services/WorldViewService.cjs:69](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L69>)
- [WorldViewService.permit](<WorldViewService.cjs.md#s-5697cb02709ef464>) — [electron/domains/worldview/services/WorldViewService.cjs:71](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L71>)
- [WorldViewRepository.createConnection](<../repositories/WorldViewRepository.cjs.md#s-a831539ba65e984b>) — [electron/domains/worldview/services/WorldViewService.cjs:72](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L72>)
- [Connection.toLegacy](<../model/Connection.cjs.md#s-d4415a4694a242b0>) — [electron/domains/worldview/services/WorldViewService.cjs:72](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L72>)

**Called by (statically resolved):**

- [registerWorldViewIpc."connector-create"](<../../../core/ipc/worldview-ipc.cjs.md#s-318d63dacd47aae1>) — [electron/core/ipc/worldview-ipc.cjs:203](<../../../../../../../../electron/core/ipc/worldview-ipc.cjs#L203>)
- [&lt;anonymous@35:94&gt;](<../../entity/tests/entity-repository.test.cjs.md#s-f6295f2de7da93d4>) — [electron/domains/entity/tests/entity-repository.test.cjs:56](<../../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L56>)
- [&lt;anonymous@186:97&gt;](<../tests/worldview-domain.test.cjs.md#s-4ddaa2cce846c1fa>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:213](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L213>)

Unresolved / external call sites: 1.

- world.connect — external-or-dynamic-dispatch; [electron/domains/worldview/services/WorldViewService.cjs:70](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L70>)

**Related tests / acceptance harnesses:**

- [electron/domains/entity/tests/entity-repository.test.cjs:56](<../../../../../../../../electron/domains/entity/tests/entity-repository.test.cjs#L56>) — static-call-site; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:213](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L213>) — static-call-site; coverage not established.

<a id="s-bf9efb3d2453cacd"></a>

## WorldViewService.updateConnection

[electron/domains/worldview/services/WorldViewService.cjs:75](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L75>) · MethodDeclaration · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

Updates metadata through the existing expected-snapshot contract. Persistence rechecks endpoints and concurrent edits.

Purpose evidence: jsdoc.

Lexical owner: [WorldViewService](<WorldViewService.cjs.md#s-f5924f19d9b6d22d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| context | any | compiler-inferred | required |
| record | any | compiler-inferred | required |
| previous | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [Connection.fromLegacy](<../model/Connection.cjs.md#s-8e5b9746944b56b7>) — [electron/domains/worldview/services/WorldViewService.cjs:76](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L76>)
- [Connection.getSnapshot](<../model/Connection.cjs.md#s-17b741d9ec9a95f0>) — [electron/domains/worldview/services/WorldViewService.cjs:77](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L77>)
- [WorldViewService.permit](<WorldViewService.cjs.md#s-5697cb02709ef464>) — [electron/domains/worldview/services/WorldViewService.cjs:79](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L79>)
- [WorldViewRepository.read](<../repositories/WorldViewRepository.cjs.md#s-91419ef7bf2fa99e>) — [electron/domains/worldview/services/WorldViewService.cjs:80](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L80>)
- [WorldViewService.permit](<WorldViewService.cjs.md#s-5697cb02709ef464>) — [electron/domains/worldview/services/WorldViewService.cjs:87](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L87>)
- [WorldViewRepository.updateConnection](<../repositories/WorldViewRepository.cjs.md#s-e6def28894ad4362>) — [electron/domains/worldview/services/WorldViewService.cjs:88](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L88>)
- [Connection.toLegacy](<../model/Connection.cjs.md#s-d4415a4694a242b0>) — [electron/domains/worldview/services/WorldViewService.cjs:90](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L90>)

**Called by (statically resolved):**

- [registerWorldViewIpc."connector-update"](<../../../core/ipc/worldview-ipc.cjs.md#s-6b25495fb101391e>) — [electron/core/ipc/worldview-ipc.cjs:206](<../../../../../../../../electron/core/ipc/worldview-ipc.cjs#L206>)

Unresolved / external call sites: 3.

- world.getSnapshot().connections.some — external-or-dynamic-dispatch; [electron/domains/worldview/services/WorldViewService.cjs:85](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L85>)
- world.getSnapshot — external-or-dynamic-dispatch; [electron/domains/worldview/services/WorldViewService.cjs:85](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L85>)
- world.updateConnection — external-or-dynamic-dispatch; [electron/domains/worldview/services/WorldViewService.cjs:86](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L86>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d56b724de3424a2b"></a>

## WorldViewService.updateConnection.&lt;anonymous@85:46&gt;

[electron/domains/worldview/services/WorldViewService.cjs:85](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L85>) · ArrowFunction · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [WorldViewService.updateConnection](<WorldViewService.cjs.md#s-bf9efb3d2453cacd>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| item | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-2486ee0c7a4665d4"></a>

## WorldViewService.disconnect

[electron/domains/worldview/services/WorldViewService.cjs:95](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L95>) · MethodDeclaration · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

Deletes only a named connection after backend authorization; no Entity or knowledge mutation follows.

Purpose evidence: jsdoc.

Lexical owner: [WorldViewService](<WorldViewService.cjs.md#s-f5924f19d9b6d22d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| context | any | compiler-inferred | required |
| connectionId | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [WorldViewService.permit](<WorldViewService.cjs.md#s-5697cb02709ef464>) — [electron/domains/worldview/services/WorldViewService.cjs:97](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L97>)
- [WorldViewRepository.connectionEntities](<../repositories/WorldViewRepository.cjs.md#s-a43f5163c18edd36>) — [electron/domains/worldview/services/WorldViewService.cjs:98](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L98>)
- [WorldViewService.permit](<WorldViewService.cjs.md#s-5697cb02709ef464>) — [electron/domains/worldview/services/WorldViewService.cjs:102](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L102>)
- [WorldViewRepository.deleteConnection](<../repositories/WorldViewRepository.cjs.md#s-d80b86147b2451c3>) — [electron/domains/worldview/services/WorldViewService.cjs:103](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L103>)

**Called by (statically resolved):**

- [registerWorldViewIpc."connector-delete"](<../../../core/ipc/worldview-ipc.cjs.md#s-aeee55f272f1e88c>) — [electron/core/ipc/worldview-ipc.cjs:213](<../../../../../../../../electron/core/ipc/worldview-ipc.cjs#L213>)
- [&lt;anonymous@186:97&gt;](<../tests/worldview-domain.test.cjs.md#s-4ddaa2cce846c1fa>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:217](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L217>)
- [&lt;anonymous@223:99&gt;](<../tests/worldview-domain.test.cjs.md#s-bbf315728a031ceb>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:253](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L253>)

Unresolved / external call sites: 1.

- identifier.parse — external-or-dynamic-dispatch; [electron/domains/worldview/services/WorldViewService.cjs:96](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L96>)

**Related tests / acceptance harnesses:**

- [electron/domains/worldview/tests/worldview-domain.test.cjs:217](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L217>) — static-call-site; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:253](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L253>) — static-call-site; coverage not established.

<a id="s-49499fbc6b875b47"></a>

## WorldViewService.listDirectConnections

[electron/domains/worldview/services/WorldViewService.cjs:106](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L106>) · MethodDeclaration · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

Returns a one-hop metadata-only page for an admitted member. No neighbor knowledge, private Identity, engine work or onward traversal is requested.

Purpose evidence: jsdoc.

Lexical owner: [WorldViewService](<WorldViewService.cjs.md#s-f5924f19d9b6d22d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| context | any | compiler-inferred | required |
| { entityId, direction = "both" } | { entityId: any; direction?: string; } | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [WorldViewService.permit](<WorldViewService.cjs.md#s-5697cb02709ef464>) — [electron/domains/worldview/services/WorldViewService.cjs:108](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L108>)
- [WorldViewRepository.read](<../repositories/WorldViewRepository.cjs.md#s-91419ef7bf2fa99e>) — [electron/domains/worldview/services/WorldViewService.cjs:109](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L109>)
- [requireInvariant](<../contracts/worldview-errors.cjs.md#s-2dc3226dc732f323>) — [electron/domains/worldview/services/WorldViewService.cjs:112](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L112>)
- [WorldViewService.permit](<WorldViewService.cjs.md#s-5697cb02709ef464>) — [electron/domains/worldview/services/WorldViewService.cjs:120](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L120>)

**Called by (statically resolved):**

- [&lt;anonymous@282:89&gt;](<../tests/worldview-domain.test.cjs.md#s-488c29ce8f9a0580>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:299](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L299>)
- [&lt;anonymous@282:89&gt;](<../tests/worldview-domain.test.cjs.md#s-488c29ce8f9a0580>) — [electron/domains/worldview/tests/worldview-domain.test.cjs:309](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L309>)

Unresolved / external call sites: 4.

- identifier.parse — external-or-dynamic-dispatch; [electron/domains/worldview/services/WorldViewService.cjs:107](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L107>)
- world .getSnapshot() .memberships.some — external-or-dynamic-dispatch; [electron/domains/worldview/services/WorldViewService.cjs:113](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L113>)
- world .getSnapshot — external-or-dynamic-dispatch; [electron/domains/worldview/services/WorldViewService.cjs:113](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L113>)
- world.getDirectConnections — external-or-dynamic-dispatch; [electron/domains/worldview/services/WorldViewService.cjs:119](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L119>)

**Related tests / acceptance harnesses:**

- [electron/domains/worldview/tests/worldview-domain.test.cjs:299](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L299>) — static-call-site; coverage not established.
- [electron/domains/worldview/tests/worldview-domain.test.cjs:309](<../../../../../../../../electron/domains/worldview/tests/worldview-domain.test.cjs#L309>) — static-call-site; coverage not established.

<a id="s-7679707372763a3a"></a>

## WorldViewService.listDirectConnections.&lt;anonymous@115:27&gt;

[electron/domains/worldview/services/WorldViewService.cjs:115](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L115>) · ArrowFunction · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [WorldViewService.listDirectConnections](<WorldViewService.cjs.md#s-49499fbc6b875b47>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| member | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
