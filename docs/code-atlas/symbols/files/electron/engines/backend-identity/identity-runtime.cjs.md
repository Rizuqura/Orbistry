# electron/engines/backend-identity/identity-runtime.cjs: symbols

[Atlas](<../../../../../README.md>) / [Backend Identity Engine](<../../../../../modules/identity.md>) / [electron/engines/backend-identity/identity-runtime.cjs:1](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/engines/backend-identity/identity-runtime.cjs](<identity-runtime.cjs.md#s-c3f3dbcf91eecead>) (Module)
- [scopeSchema](<identity-runtime.cjs.md#s-cb16f882fe7b60d6>) (SchemaBinding)
- [createIdentityRuntime](<identity-runtime.cjs.md#s-f3672ac091501d51>) (FunctionDeclaration)
- [createIdentityRuntime.permit](<identity-runtime.cjs.md#s-f16fca26720e18a2>) (FunctionDeclaration)
- [createIdentityRuntime.fresh](<identity-runtime.cjs.md#s-49e3b9293e066309>) (FunctionDeclaration)
- [createIdentityRuntime.finish](<identity-runtime.cjs.md#s-694fc813c960c284>) (FunctionDeclaration)
- [createIdentityRuntime.getIdentity](<identity-runtime.cjs.md#s-61b9d91ded30579c>) (FunctionDeclaration)
- [createIdentityRuntime.generate](<identity-runtime.cjs.md#s-00ca52391aa334d7>) (FunctionDeclaration)
- [createIdentityRuntime.getChunk](<identity-runtime.cjs.md#s-29a452afb89fd235>) (FunctionDeclaration)
- [createIdentityRuntime.getChunk.&lt;anonymous@79:34&gt;](<identity-runtime.cjs.md#s-8b46006b337a9156>) (ArrowFunction)
- [createIdentityRuntime.searchChunks](<identity-runtime.cjs.md#s-20cff2901c3b4e03>) (FunctionDeclaration)
- [createIdentityRuntime.searchChunks.{       query = "",       offset = 0,       limit = 10,     }](<identity-runtime.cjs.md#s-d786cad21d488cd8>) (SchemaBinding)
- [createIdentityRuntime.searchChunks.&lt;anonymous@120:9&gt;](<identity-runtime.cjs.md#s-b64f223015c92ea9>) (ArrowFunction)
- [createIdentityRuntime.searchChunks.&lt;anonymous@128:17&gt;](<identity-runtime.cjs.md#s-e0a1a05da892a085>) (ArrowFunction)
- [createIdentityRuntime.listTopics](<identity-runtime.cjs.md#s-ce2a3585d4984a6b>) (FunctionDeclaration)
- [createIdentityRuntime.listTopics.{ offset = 0, limit = 100 }](<identity-runtime.cjs.md#s-b0a182287303d229>) (SchemaBinding)
- [createIdentityRuntime.listCapabilities](<identity-runtime.cjs.md#s-3148355880ff347e>) (FunctionDeclaration)
- [createIdentityRuntime.executeCapability](<identity-runtime.cjs.md#s-35ccbce8833db04a>) (FunctionDeclaration)
- [createIdentityRuntime.executeCapability.&lt;anonymous@204:7&gt;](<identity-runtime.cjs.md#s-6ee5c2a2bfacbf33>) (ArrowFunction)
- [createIdentityRuntime.executeCapability.&lt;anonymous@209:9&gt;](<identity-runtime.cjs.md#s-bf85ec5eac0aee40>) (ArrowFunction)

<a id="s-c3f3dbcf91eecead"></a>

## electron/engines/backend-identity/identity-runtime.cjs

[electron/engines/backend-identity/identity-runtime.cjs:1](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L1>) · Module · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- require — module-loader; [electron/engines/backend-identity/identity-runtime.cjs:1](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L1>)
- require — module-loader; [electron/engines/backend-identity/identity-runtime.cjs:2](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L2>)
- require — module-loader; [electron/engines/backend-identity/identity-runtime.cjs:3](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L3>)
- require — module-loader; [electron/engines/backend-identity/identity-runtime.cjs:4](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L4>)
- require — module-loader; [electron/engines/backend-identity/identity-runtime.cjs:5](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L5>)

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:21](<../../../../../../../electron/backend-identity.test.cjs#L21>) — file-import-only; coverage not established.

<a id="s-cb16f882fe7b60d6"></a>

## scopeSchema

[electron/engines/backend-identity/identity-runtime.cjs:6](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L6>) · SchemaBinding · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/engines/backend-identity/identity-runtime.cjs](<identity-runtime.cjs.md#s-c3f3dbcf91eecead>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 7.

- z.object — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-runtime.cjs:6](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L6>)
- z.string().min(1).max — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-runtime.cjs:7](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L7>)
- z.string().min — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-runtime.cjs:7](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L7>)
- z.string — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-runtime.cjs:7](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L7>)
- z.unknown().optional — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-runtime.cjs:9](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L9>)
- z.unknown — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-runtime.cjs:9](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L9>)
- hashSchema.optional — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-runtime.cjs:10](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L10>)

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:21](<../../../../../../../electron/backend-identity.test.cjs#L21>) — file-import-only; coverage not established.

<a id="s-f3672ac091501d51"></a>

## createIdentityRuntime

[electron/engines/backend-identity/identity-runtime.cjs:14](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L14>) · FunctionDeclaration · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

Creates a provider-independent internal runtime. Authorization is supplied by trusted host code, never by indexed content, renderer grants or a model prompt.

Purpose evidence: jsdoc.

Exported as: createIdentityRuntime ([electron/engines/backend-identity/identity-runtime.cjs:1](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L1>)).

Lexical owner: [electron/engines/backend-identity/identity-runtime.cjs](<identity-runtime.cjs.md#s-c3f3dbcf91eecead>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { authorize } | {} | compiler-inferred | optional, default present |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [fixture](<../../backend-identity.test.cjs.md#s-2a2eeb9f70975c0c>) — [electron/backend-identity.test.cjs:257](<../../../../../../../electron/backend-identity.test.cjs#L257>)
- [&lt;anonymous@488:102&gt;.&lt;anonymous@489:11&gt;.&lt;anonymous@490:19&gt;](<../../backend-identity.test.cjs.md#s-b2ace69610a113e6>) — [electron/backend-identity.test.cjs:490](<../../../../../../../electron/backend-identity.test.cjs#L490>)
- [&lt;anonymous@573:116&gt;.&lt;anonymous@574:11&gt;](<../../backend-identity.test.cjs.md#s-65925d3a759e86b5>) — [electron/backend-identity.test.cjs:606](<../../../../../../../electron/backend-identity.test.cjs#L606>)
- [inspect](<../../domains/knowledge/backend-identity-service.cjs.md#s-ce9a187a9463c465>) — [electron/domains/knowledge/backend-identity-service.cjs:26](<../../../../../../../electron/domains/knowledge/backend-identity-service.cjs#L26>)

Unresolved / external call sites: 2.

- Error — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-runtime.cjs:16](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L16>)
- Object.freeze — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-runtime.cjs:230](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L230>)

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:257](<../../../../../../../electron/backend-identity.test.cjs#L257>) — static-call-site; coverage not established.
- [electron/backend-identity.test.cjs:490](<../../../../../../../electron/backend-identity.test.cjs#L490>) — static-call-site; coverage not established.
- [electron/backend-identity.test.cjs:606](<../../../../../../../electron/backend-identity.test.cjs#L606>) — static-call-site; coverage not established.
- [electron/backend-identity.test.cjs:21](<../../../../../../../electron/backend-identity.test.cjs#L21>) — file-import-only; coverage not established.

<a id="s-f16fca26720e18a2"></a>

## createIdentityRuntime.permit

[electron/engines/backend-identity/identity-runtime.cjs:20](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L20>) · FunctionDeclaration · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

Checks each permission against the original actor, root and entity before any snapshot/source access.

Purpose evidence: jsdoc.

Lexical owner: [createIdentityRuntime](<identity-runtime.cjs.md#s-f3672ac091501d51>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| scope | any | compiler-inferred | required |
| permissions | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [createIdentityRuntime.finish](<identity-runtime.cjs.md#s-694fc813c960c284>) — [electron/engines/backend-identity/identity-runtime.cjs:48](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L48>)
- [createIdentityRuntime.getIdentity](<identity-runtime.cjs.md#s-61b9d91ded30579c>) — [electron/engines/backend-identity/identity-runtime.cjs:57](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L57>)
- [createIdentityRuntime.getIdentity](<identity-runtime.cjs.md#s-61b9d91ded30579c>) — [electron/engines/backend-identity/identity-runtime.cjs:59](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L59>)
- [createIdentityRuntime.generate](<identity-runtime.cjs.md#s-00ca52391aa334d7>) — [electron/engines/backend-identity/identity-runtime.cjs:64](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L64>)
- [createIdentityRuntime.getChunk](<identity-runtime.cjs.md#s-29a452afb89fd235>) — [electron/engines/backend-identity/identity-runtime.cjs:76](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L76>)
- [createIdentityRuntime.searchChunks](<identity-runtime.cjs.md#s-20cff2901c3b4e03>) — [electron/engines/backend-identity/identity-runtime.cjs:99](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L99>)
- [createIdentityRuntime.listTopics](<identity-runtime.cjs.md#s-ce2a3585d4984a6b>) — [electron/engines/backend-identity/identity-runtime.cjs:152](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L152>)
- [createIdentityRuntime.listCapabilities](<identity-runtime.cjs.md#s-3148355880ff347e>) — [electron/engines/backend-identity/identity-runtime.cjs:187](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L187>)
- [createIdentityRuntime.executeCapability](<identity-runtime.cjs.md#s-35ccbce8833db04a>) — [electron/engines/backend-identity/identity-runtime.cjs:200](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L200>)
- [createIdentityRuntime.executeCapability](<identity-runtime.cjs.md#s-35ccbce8833db04a>) — [electron/engines/backend-identity/identity-runtime.cjs:213](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L213>)

Unresolved / external call sites: 4.

- scopeSchema.parse — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-runtime.cjs:21](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L21>)
- Set — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-runtime.cjs:22](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L22>)
- authorize — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-runtime.cjs:24](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L24>)
- Error — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-runtime.cjs:31](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L31>)

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:21](<../../../../../../../electron/backend-identity.test.cjs#L21>) — file-import-only; coverage not established.

<a id="s-49e3b9293e066309"></a>

## createIdentityRuntime.fresh

[electron/engines/backend-identity/identity-runtime.cjs:34](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L34>) · FunctionDeclaration · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

Rejects stale or mismatched versions before serving chunks or requesting provider work.

Purpose evidence: jsdoc.

Lexical owner: [createIdentityRuntime](<identity-runtime.cjs.md#s-f3672ac091501d51>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| scope | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [status](<identity-compiler.cjs.md#s-028f3e6557e09194>) — [electron/engines/backend-identity/identity-runtime.cjs:35](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L35>)

**Called by (statically resolved):**

- [createIdentityRuntime.finish](<identity-runtime.cjs.md#s-694fc813c960c284>) — [electron/engines/backend-identity/identity-runtime.cjs:49](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L49>)
- [createIdentityRuntime.getChunk](<identity-runtime.cjs.md#s-29a452afb89fd235>) — [electron/engines/backend-identity/identity-runtime.cjs:77](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L77>)
- [createIdentityRuntime.searchChunks](<identity-runtime.cjs.md#s-20cff2901c3b4e03>) — [electron/engines/backend-identity/identity-runtime.cjs:100](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L100>)
- [createIdentityRuntime.listTopics](<identity-runtime.cjs.md#s-ce2a3585d4984a6b>) — [electron/engines/backend-identity/identity-runtime.cjs:153](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L153>)
- [createIdentityRuntime.listCapabilities](<identity-runtime.cjs.md#s-3148355880ff347e>) — [electron/engines/backend-identity/identity-runtime.cjs:188](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L188>)
- [createIdentityRuntime.executeCapability](<identity-runtime.cjs.md#s-35ccbce8833db04a>) — [electron/engines/backend-identity/identity-runtime.cjs:201](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L201>)

Unresolved / external call sites: 2.

- Error — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-runtime.cjs:37](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L37>)
- Error — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-runtime.cjs:41](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L41>)

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:21](<../../../../../../../electron/backend-identity.test.cjs#L21>) — file-import-only; coverage not established.

<a id="s-694fc813c960c284"></a>

## createIdentityRuntime.finish

[electron/engines/backend-identity/identity-runtime.cjs:47](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L47>) · FunctionDeclaration · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

Rechecks authorization and source freshness after asynchronous reads/provider work; revoked access cannot return old source content.

Purpose evidence: jsdoc.

Lexical owner: [createIdentityRuntime](<identity-runtime.cjs.md#s-f3672ac091501d51>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| scope | any | compiler-inferred | required |
| permissions | any | compiler-inferred | required |
| manifest | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [createIdentityRuntime.permit](<identity-runtime.cjs.md#s-f16fca26720e18a2>) — [electron/engines/backend-identity/identity-runtime.cjs:48](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L48>)
- [createIdentityRuntime.fresh](<identity-runtime.cjs.md#s-49e3b9293e066309>) — [electron/engines/backend-identity/identity-runtime.cjs:49](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L49>)

**Called by (statically resolved):**

- [createIdentityRuntime.generate](<identity-runtime.cjs.md#s-00ca52391aa334d7>) — [electron/engines/backend-identity/identity-runtime.cjs:66](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L66>)
- [createIdentityRuntime.getChunk](<identity-runtime.cjs.md#s-29a452afb89fd235>) — [electron/engines/backend-identity/identity-runtime.cjs:83](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L83>)
- [createIdentityRuntime.searchChunks](<identity-runtime.cjs.md#s-20cff2901c3b4e03>) — [electron/engines/backend-identity/identity-runtime.cjs:134](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L134>)
- [createIdentityRuntime.listTopics](<identity-runtime.cjs.md#s-ce2a3585d4984a6b>) — [electron/engines/backend-identity/identity-runtime.cjs:175](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L175>)
- [createIdentityRuntime.listCapabilities](<identity-runtime.cjs.md#s-3148355880ff347e>) — [electron/engines/backend-identity/identity-runtime.cjs:194](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L194>)
- [createIdentityRuntime.executeCapability](<identity-runtime.cjs.md#s-35ccbce8833db04a>) — [electron/engines/backend-identity/identity-runtime.cjs:223](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L223>)

Unresolved / external call sites: 1.

- Error — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-runtime.cjs:51](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L51>)

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:21](<../../../../../../../electron/backend-identity.test.cjs#L21>) — file-import-only; coverage not established.

<a id="s-61b9d91ded30579c"></a>

## createIdentityRuntime.getIdentity

[electron/engines/backend-identity/identity-runtime.cjs:56](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L56>) · FunctionDeclaration · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

Returns a compact identity manifest with on-demand freshness, without reading all chunk bodies.

Purpose evidence: jsdoc.

Lexical owner: [createIdentityRuntime](<identity-runtime.cjs.md#s-f3672ac091501d51>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| scope | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [createIdentityRuntime.permit](<identity-runtime.cjs.md#s-f16fca26720e18a2>) — [electron/engines/backend-identity/identity-runtime.cjs:57](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L57>)
- [status](<identity-compiler.cjs.md#s-028f3e6557e09194>) — [electron/engines/backend-identity/identity-runtime.cjs:58](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L58>)
- [createIdentityRuntime.permit](<identity-runtime.cjs.md#s-f16fca26720e18a2>) — [electron/engines/backend-identity/identity-runtime.cjs:59](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L59>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:21](<../../../../../../../electron/backend-identity.test.cjs#L21>) — file-import-only; coverage not established.

<a id="s-00ca52391aa334d7"></a>

## createIdentityRuntime.generate

[electron/engines/backend-identity/identity-runtime.cjs:63](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L63>) · FunctionDeclaration · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

Performs host-authorized compilation with the existing compiler, including assignment refresh. Writes derived snapshots only and checks the same entity permissions before and after compilation.

Purpose evidence: jsdoc.

Lexical owner: [createIdentityRuntime](<identity-runtime.cjs.md#s-f3672ac091501d51>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| scope | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [createIdentityRuntime.permit](<identity-runtime.cjs.md#s-f16fca26720e18a2>) — [electron/engines/backend-identity/identity-runtime.cjs:64](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L64>)
- [generate](<identity-compiler.cjs.md#s-7cdf112c906f5772>) — [electron/engines/backend-identity/identity-runtime.cjs:65](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L65>)
- [createIdentityRuntime.finish](<identity-runtime.cjs.md#s-694fc813c960c284>) — [electron/engines/backend-identity/identity-runtime.cjs:66](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L66>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:21](<../../../../../../../electron/backend-identity.test.cjs#L21>) — file-import-only; coverage not established.

<a id="s-29a452afb89fd235"></a>

## createIdentityRuntime.getChunk

[electron/engines/backend-identity/identity-runtime.cjs:74](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L74>) · FunctionDeclaration · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

Retrieves a manifest-member chunk for the selected entity and version, enforcing original-source freshness before and after access.

Purpose evidence: jsdoc.

Lexical owner: [createIdentityRuntime](<identity-runtime.cjs.md#s-f3672ac091501d51>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| scope | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [createIdentityRuntime.permit](<identity-runtime.cjs.md#s-f16fca26720e18a2>) — [electron/engines/backend-identity/identity-runtime.cjs:76](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L76>)
- [createIdentityRuntime.fresh](<identity-runtime.cjs.md#s-49e3b9293e066309>) — [electron/engines/backend-identity/identity-runtime.cjs:77](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L77>)
- [index](<snapshot-store.cjs.md#s-0306e55cc435f9ec>) — [electron/engines/backend-identity/identity-runtime.cjs:78](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L78>)
- [getChunk](<snapshot-store.cjs.md#s-4d5e1ea6610b8273>) — [electron/engines/backend-identity/identity-runtime.cjs:82](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L82>)
- [createIdentityRuntime.finish](<identity-runtime.cjs.md#s-694fc813c960c284>) — [electron/engines/backend-identity/identity-runtime.cjs:83](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L83>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- hashSchema.parse — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-runtime.cjs:75](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L75>)
- index.find — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-runtime.cjs:79](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L79>)
- Error — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-runtime.cjs:81](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L81>)

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:21](<../../../../../../../electron/backend-identity.test.cjs#L21>) — file-import-only; coverage not established.

<a id="s-8b46006b337a9156"></a>

## createIdentityRuntime.getChunk.&lt;anonymous@79:34&gt;

[electron/engines/backend-identity/identity-runtime.cjs:79](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L79>) · ArrowFunction · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createIdentityRuntime.getChunk](<identity-runtime.cjs.md#s-29a452afb89fd235>).

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

- [electron/backend-identity.test.cjs:21](<../../../../../../../electron/backend-identity.test.cjs#L21>) — file-import-only; coverage not established.

<a id="s-20cff2901c3b4e03"></a>

## createIdentityRuntime.searchChunks

[electron/engines/backend-identity/identity-runtime.cjs:87](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L87>) · FunctionDeclaration · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

Searches bounded chunk pages locally. Ranking is lexical and content is explicitly untrusted; no embeddings, provider calls or prompt concatenation occur.

Purpose evidence: jsdoc.

Lexical owner: [createIdentityRuntime](<identity-runtime.cjs.md#s-f3672ac091501d51>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| scope | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [createIdentityRuntime.permit](<identity-runtime.cjs.md#s-f16fca26720e18a2>) — [electron/engines/backend-identity/identity-runtime.cjs:99](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L99>)
- [createIdentityRuntime.fresh](<identity-runtime.cjs.md#s-49e3b9293e066309>) — [electron/engines/backend-identity/identity-runtime.cjs:100](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L100>)
- [index](<snapshot-store.cjs.md#s-0306e55cc435f9ec>) — [electron/engines/backend-identity/identity-runtime.cjs:101](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L101>)
- [getChunk](<snapshot-store.cjs.md#s-4d5e1ea6610b8273>) — [electron/engines/backend-identity/identity-runtime.cjs:113](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L113>)
- [getChunk](<snapshot-store.cjs.md#s-4d5e1ea6610b8273>) — [electron/engines/backend-identity/identity-runtime.cjs:132](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L132>)
- [createIdentityRuntime.finish](<identity-runtime.cjs.md#s-694fc813c960c284>) — [electron/engines/backend-identity/identity-runtime.cjs:134](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L134>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 14.

- &#91; ...new Set( query.toLocaleLowerCase("en").match(/&#91;\\p{L}\\p{N}_-&#93;+/gu) ?? &#91;&#93;, ), &#93;.slice — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-runtime.cjs:102](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L102>)
- Set — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-runtime.cjs:103](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L103>)
- query.toLocaleLowerCase("en").match — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-runtime.cjs:104](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L104>)
- query.toLocaleLowerCase — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-runtime.cjs:104](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L104>)
- references.entries — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-runtime.cjs:108](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L108>)
- ranked.push — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-runtime.cjs:110](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L110>)
- &#96;${chunk.sourceId} ${chunk.headingPath.join(" ")}&#96;.toLocaleLowerCase — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-runtime.cjs:115](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L115>)
- chunk.headingPath.join — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-runtime.cjs:115](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L115>)
- 6 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:21](<../../../../../../../electron/backend-identity.test.cjs#L21>) — file-import-only; coverage not established.

<a id="s-d786cad21d488cd8"></a>

## createIdentityRuntime.searchChunks.{       query = "",       offset = 0,       limit = 10,     }

[electron/engines/backend-identity/identity-runtime.cjs:88](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L88>) · SchemaBinding · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createIdentityRuntime.searchChunks](<identity-runtime.cjs.md#s-20cff2901c3b4e03>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 15.

- z .object({ query: z.string().max(200).optional(), offset: z.number().int().min(0).max(2048).optional(), limit: z.number().int().min(1).max(20).optional(), }) .parse — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-runtime.cjs:92](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L92>)
- z .object — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-runtime.cjs:92](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L92>)
- z.string().max(200).optional — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-runtime.cjs:94](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L94>)
- z.string().max — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-runtime.cjs:94](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L94>)
- z.string — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-runtime.cjs:94](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L94>)
- z.number().int().min(0).max(2048).optional — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-runtime.cjs:95](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L95>)
- z.number().int().min(0).max — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-runtime.cjs:95](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L95>)
- z.number().int().min — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-runtime.cjs:95](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L95>)
- 7 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:21](<../../../../../../../electron/backend-identity.test.cjs#L21>) — file-import-only; coverage not established.

<a id="s-b64f223015c92ea9"></a>

## createIdentityRuntime.searchChunks.&lt;anonymous@120:9&gt;

[electron/engines/backend-identity/identity-runtime.cjs:120](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L120>) · ArrowFunction · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createIdentityRuntime.searchChunks](<identity-runtime.cjs.md#s-20cff2901c3b4e03>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| sum | any | compiler-inferred | required |
| term | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- metadata.includes — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-runtime.cjs:122](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L122>)
- body.includes — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-runtime.cjs:123](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L123>)

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:21](<../../../../../../../electron/backend-identity.test.cjs#L21>) — file-import-only; coverage not established.

<a id="s-e0a1a05da892a085"></a>

## createIdentityRuntime.searchChunks.&lt;anonymous@128:17&gt;

[electron/engines/backend-identity/identity-runtime.cjs:128](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L128>) · ArrowFunction · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createIdentityRuntime.searchChunks](<identity-runtime.cjs.md#s-20cff2901c3b4e03>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| a | any | compiler-inferred | required |
| b | any | compiler-inferred | required |

Returns: number (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:21](<../../../../../../../electron/backend-identity.test.cjs#L21>) — file-import-only; coverage not established.

<a id="s-ce2a3585d4984a6b"></a>

## createIdentityRuntime.listTopics

[electron/engines/backend-identity/identity-runtime.cjs:145](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L145>) · FunctionDeclaration · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

Enumerates a deterministic page of indexed heading references without reading chunk bodies. Keeps source versions and line/chunk provenance and rechecks scope/freshness before returning.

Purpose evidence: jsdoc.

Lexical owner: [createIdentityRuntime](<identity-runtime.cjs.md#s-f3672ac091501d51>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| scope | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [createIdentityRuntime.permit](<identity-runtime.cjs.md#s-f16fca26720e18a2>) — [electron/engines/backend-identity/identity-runtime.cjs:152](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L152>)
- [createIdentityRuntime.fresh](<identity-runtime.cjs.md#s-49e3b9293e066309>) — [electron/engines/backend-identity/identity-runtime.cjs:153](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L153>)
- [index](<snapshot-store.cjs.md#s-0306e55cc435f9ec>) — [electron/engines/backend-identity/identity-runtime.cjs:154](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L154>)
- [createIdentityRuntime.finish](<identity-runtime.cjs.md#s-694fc813c960c284>) — [electron/engines/backend-identity/identity-runtime.cjs:175](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L175>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 7.

- Map — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-runtime.cjs:155](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L155>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-runtime.cjs:157](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L157>)
- topics.get — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-runtime.cjs:158](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L158>)
- topic.chunks.push — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-runtime.cjs:165](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L165>)
- topics.set — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-runtime.cjs:171](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L171>)
- topics.values — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-runtime.cjs:173](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L173>)
- all.slice — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-runtime.cjs:174](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L174>)

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:21](<../../../../../../../electron/backend-identity.test.cjs#L21>) — file-import-only; coverage not established.

<a id="s-b0a182287303d229"></a>

## createIdentityRuntime.listTopics.{ offset = 0, limit = 100 }

[electron/engines/backend-identity/identity-runtime.cjs:146](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L146>) · SchemaBinding · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createIdentityRuntime.listTopics](<identity-runtime.cjs.md#s-ce2a3585d4984a6b>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 12.

- z .object({ offset: z.number().int().min(0).max(2048).optional(), limit: z.number().int().min(1).max(200).optional(), }) .parse — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-runtime.cjs:146](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L146>)
- z .object — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-runtime.cjs:146](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L146>)
- z.number().int().min(0).max(2048).optional — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-runtime.cjs:148](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L148>)
- z.number().int().min(0).max — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-runtime.cjs:148](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L148>)
- z.number().int().min — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-runtime.cjs:148](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L148>)
- z.number().int — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-runtime.cjs:148](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L148>)
- z.number — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-runtime.cjs:148](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L148>)
- z.number().int().min(1).max(200).optional — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-runtime.cjs:149](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L149>)
- 4 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:21](<../../../../../../../electron/backend-identity.test.cjs#L21>) — file-import-only; coverage not established.

<a id="s-3148355880ff347e"></a>

## createIdentityRuntime.listCapabilities

[electron/engines/backend-identity/identity-runtime.cjs:186](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L186>) · FunctionDeclaration · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

Discovers compiled capability contracts only; availability means configured, not a successful network probe.

Purpose evidence: jsdoc.

Lexical owner: [createIdentityRuntime](<identity-runtime.cjs.md#s-f3672ac091501d51>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| scope | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [createIdentityRuntime.permit](<identity-runtime.cjs.md#s-f16fca26720e18a2>) — [electron/engines/backend-identity/identity-runtime.cjs:187](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L187>)
- [createIdentityRuntime.fresh](<identity-runtime.cjs.md#s-49e3b9293e066309>) — [electron/engines/backend-identity/identity-runtime.cjs:188](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L188>)
- [index](<snapshot-store.cjs.md#s-0306e55cc435f9ec>) — [electron/engines/backend-identity/identity-runtime.cjs:189](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L189>)
- [createIdentityRuntime.finish](<identity-runtime.cjs.md#s-694fc813c960c284>) — [electron/engines/backend-identity/identity-runtime.cjs:194](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L194>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:21](<../../../../../../../electron/backend-identity.test.cjs#L21>) — file-import-only; coverage not established.

<a id="s-35ccbce8833db04a"></a>

## createIdentityRuntime.executeCapability

[electron/engines/backend-identity/identity-runtime.cjs:198](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L198>) · FunctionDeclaration · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

Executes one explicitly requested current declaration after backend grants. Registry values are rebuilt from the live index, never trusted as executable snapshot instructions.

Purpose evidence: jsdoc.

Lexical owner: [createIdentityRuntime](<identity-runtime.cjs.md#s-f3672ac091501d51>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| scope | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [createIdentityRuntime.permit](<identity-runtime.cjs.md#s-f16fca26720e18a2>) — [electron/engines/backend-identity/identity-runtime.cjs:200](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L200>)
- [createIdentityRuntime.fresh](<identity-runtime.cjs.md#s-49e3b9293e066309>) — [electron/engines/backend-identity/identity-runtime.cjs:201](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L201>)
- [capture](<identity-compiler.cjs.md#s-1f99e7da5df73158>) — [electron/engines/backend-identity/identity-runtime.cjs:202](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L202>)
- [createIdentityRuntime.permit](<identity-runtime.cjs.md#s-f16fca26720e18a2>) — [electron/engines/backend-identity/identity-runtime.cjs:213](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L213>)
- [executeCapability](<capability-registry.cjs.md#s-701c955440e5983d>) — [electron/engines/backend-identity/identity-runtime.cjs:217](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L217>)
- [createIdentityRuntime.finish](<identity-runtime.cjs.md#s-694fc813c960c284>) — [electron/engines/backend-identity/identity-runtime.cjs:223](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L223>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- hashSchema.parse — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-runtime.cjs:199](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L199>)
- live.capabilities.find — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-runtime.cjs:203](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L203>)
- manifest.capabilities.some — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-runtime.cjs:208](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L208>)
- Error — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-runtime.cjs:212](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L212>)

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:21](<../../../../../../../electron/backend-identity.test.cjs#L21>) — file-import-only; coverage not established.

<a id="s-6ee5c2a2bfacbf33"></a>

## createIdentityRuntime.executeCapability.&lt;anonymous@204:7&gt;

[electron/engines/backend-identity/identity-runtime.cjs:204](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L204>) · ArrowFunction · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createIdentityRuntime.executeCapability](<identity-runtime.cjs.md#s-35ccbce8833db04a>).

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

- [electron/backend-identity.test.cjs:21](<../../../../../../../electron/backend-identity.test.cjs#L21>) — file-import-only; coverage not established.

<a id="s-bf85ec5eac0aee40"></a>

## createIdentityRuntime.executeCapability.&lt;anonymous@209:9&gt;

[electron/engines/backend-identity/identity-runtime.cjs:209](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L209>) · ArrowFunction · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createIdentityRuntime.executeCapability](<identity-runtime.cjs.md#s-35ccbce8833db04a>).

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

- [electron/backend-identity.test.cjs:21](<../../../../../../../electron/backend-identity.test.cjs#L21>) — file-import-only; coverage not established.
