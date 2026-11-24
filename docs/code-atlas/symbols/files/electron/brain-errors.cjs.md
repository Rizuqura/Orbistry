# electron/brain-errors.cjs: symbols

[Atlas](<../../../README.md>) / [Electron composition and IPC security](<../../../modules/desktop.md>) / [electron/brain-errors.cjs:1](<../../../../../electron/brain-errors.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/brain-errors.cjs](<brain-errors.cjs.md#s-cc3291ae9e830021>) (Module)
- [BRAIN_ERROR_CODES](<brain-errors.cjs.md#s-6b9aa1461614a094>) (VariableDeclaration)
- [BrainScopeError](<brain-errors.cjs.md#s-f59676b11c44c005>) (ClassDeclaration)
- [BrainScopeError.constructor](<brain-errors.cjs.md#s-d5903b380579f4df>) (Constructor)
- [serializeBrainError](<brain-errors.cjs.md#s-f87a7896b4010ea8>) (FunctionDeclaration)

<a id="s-cc3291ae9e830021"></a>

## electron/brain-errors.cjs

[electron/brain-errors.cjs:1](<../../../../../electron/brain-errors.cjs#L1>) · Module · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/model-errors.test.cjs:3](<../../../../../electron/ai/model-errors.test.cjs#L3>) — file-import-only; coverage not established.
- [electron/ai/orchestrator.test.cjs:7](<../../../../../electron/ai/orchestrator.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-6b9aa1461614a094"></a>

## BRAIN_ERROR_CODES

[electron/brain-errors.cjs:1](<../../../../../electron/brain-errors.cjs#L1>) · VariableDeclaration · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: BRAIN_ERROR_CODES ([electron/brain-errors.cjs:1](<../../../../../electron/brain-errors.cjs#L1>)).

Lexical owner: [electron/brain-errors.cjs](<brain-errors.cjs.md#s-cc3291ae9e830021>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- Object.freeze — external-or-dynamic-dispatch; [electron/brain-errors.cjs:1](<../../../../../electron/brain-errors.cjs#L1>)

**Related tests / acceptance harnesses:**

- [electron/ai/model-errors.test.cjs:3](<../../../../../electron/ai/model-errors.test.cjs#L3>) — file-import-only; coverage not established.
- [electron/ai/orchestrator.test.cjs:7](<../../../../../electron/ai/orchestrator.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-f59676b11c44c005"></a>

## BrainScopeError

[electron/brain-errors.cjs:14](<../../../../../electron/brain-errors.cjs#L14>) · ClassDeclaration · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: BrainScopeError ([electron/brain-errors.cjs:1](<../../../../../electron/brain-errors.cjs#L1>)).

Lexical owner: [electron/brain-errors.cjs](<brain-errors.cjs.md#s-cc3291ae9e830021>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/model-errors.test.cjs:3](<../../../../../electron/ai/model-errors.test.cjs#L3>) — file-import-only; coverage not established.
- [electron/ai/orchestrator.test.cjs:7](<../../../../../electron/ai/orchestrator.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-d5903b380579f4df"></a>

## BrainScopeError.constructor

[electron/brain-errors.cjs:15](<../../../../../electron/brain-errors.cjs#L15>) · Constructor · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [BrainScopeError](<brain-errors.cjs.md#s-f59676b11c44c005>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| code | any | compiler-inferred | required |
| message | any | compiler-inferred | required |
| details | {} | compiler-inferred | optional, default present |

Returns: BrainScopeError (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@9:85&gt;](<ai/model-errors.test.cjs.md#s-97d3e16cb74e5af0>) — [electron/ai/model-errors.test.cjs:22](<../../../../../electron/ai/model-errors.test.cjs#L22>)
- [&lt;anonymous@348:86&gt;.&lt;anonymous@354:24&gt;.readSource](<ai/orchestrator.test.cjs.md#s-e9dd1c0baae7604b>) — [electron/ai/orchestrator.test.cjs:360](<../../../../../electron/ai/orchestrator.test.cjs#L360>)
- [&lt;anonymous@453:62&gt;.readSource](<ai/orchestrator.test.cjs.md#s-aff8657b6d4d2ace>) — [electron/ai/orchestrator.test.cjs:459](<../../../../../electron/ai/orchestrator.test.cjs#L459>)
- [approveChatSource.&lt;anonymous@451:27&gt;](<domains/universe/station-service.cjs.md#s-9af64c63b97f180e>) — [electron/domains/universe/station-service.cjs:470](<../../../../../electron/domains/universe/station-service.cjs#L470>)
- [assertPlainObject](<domains/universe/station-service.cjs.md#s-dd2938d871cf4a8c>) — [electron/domains/universe/station-service.cjs:586](<../../../../../electron/domains/universe/station-service.cjs#L586>)
- [validateCapabilityId](<domains/universe/station-service.cjs.md#s-1ac629b569bc33a4>) — [electron/domains/universe/station-service.cjs:600](<../../../../../electron/domains/universe/station-service.cjs#L600>)
- [validateScopeRequest](<domains/universe/station-service.cjs.md#s-41dc8ad7217c8b86>) — [electron/domains/universe/station-service.cjs:616](<../../../../../electron/domains/universe/station-service.cjs#L616>)
- [validateScopeRequest](<domains/universe/station-service.cjs.md#s-41dc8ad7217c8b86>) — [electron/domains/universe/station-service.cjs:626](<../../../../../electron/domains/universe/station-service.cjs#L626>)
- [validateScopeRequest](<domains/universe/station-service.cjs.md#s-41dc8ad7217c8b86>) — [electron/domains/universe/station-service.cjs:633](<../../../../../electron/domains/universe/station-service.cjs#L633>)
- [validateSourceReadRequest](<domains/universe/station-service.cjs.md#s-254725ab2dbdfce0>) — [electron/domains/universe/station-service.cjs:653](<../../../../../electron/domains/universe/station-service.cjs#L653>)
- [prepareBrainScope](<domains/universe/station-service.cjs.md#s-e4cff95cf847ee92>) — [electron/domains/universe/station-service.cjs:704](<../../../../../electron/domains/universe/station-service.cjs#L704>)
- [prepareBrainScope](<domains/universe/station-service.cjs.md#s-e4cff95cf847ee92>) — [electron/domains/universe/station-service.cjs:717](<../../../../../electron/domains/universe/station-service.cjs#L717>)
- [prepareBrainScope](<domains/universe/station-service.cjs.md#s-e4cff95cf847ee92>) — [electron/domains/universe/station-service.cjs:725](<../../../../../electron/domains/universe/station-service.cjs#L725>)
- [prepareBrainScope](<domains/universe/station-service.cjs.md#s-e4cff95cf847ee92>) — [electron/domains/universe/station-service.cjs:748](<../../../../../electron/domains/universe/station-service.cjs#L748>)
- [prepareBrainScope](<domains/universe/station-service.cjs.md#s-e4cff95cf847ee92>) — [electron/domains/universe/station-service.cjs:824](<../../../../../electron/domains/universe/station-service.cjs#L824>)
- [prepareBrainScope](<domains/universe/station-service.cjs.md#s-e4cff95cf847ee92>) — [electron/domains/universe/station-service.cjs:860](<../../../../../electron/domains/universe/station-service.cjs#L860>)
- [readBrainSource](<domains/universe/station-service.cjs.md#s-b62c400d5ba597c7>) — [electron/domains/universe/station-service.cjs:909](<../../../../../electron/domains/universe/station-service.cjs#L909>)
- [readBrainSource](<domains/universe/station-service.cjs.md#s-b62c400d5ba597c7>) — [electron/domains/universe/station-service.cjs:917](<../../../../../electron/domains/universe/station-service.cjs#L917>)
- [readBrainSource](<domains/universe/station-service.cjs.md#s-b62c400d5ba597c7>) — [electron/domains/universe/station-service.cjs:924](<../../../../../electron/domains/universe/station-service.cjs#L924>)
- [readBrainSource](<domains/universe/station-service.cjs.md#s-b62c400d5ba597c7>) — [electron/domains/universe/station-service.cjs:931](<../../../../../electron/domains/universe/station-service.cjs#L931>)
- [readBrainSource](<domains/universe/station-service.cjs.md#s-b62c400d5ba597c7>) — [electron/domains/universe/station-service.cjs:954](<../../../../../electron/domains/universe/station-service.cjs#L954>)
- [readBrainSource](<domains/universe/station-service.cjs.md#s-b62c400d5ba597c7>) — [electron/domains/universe/station-service.cjs:964](<../../../../../electron/domains/universe/station-service.cjs#L964>)

Unresolved / external call sites: 1.

- super — external-or-dynamic-dispatch; [electron/brain-errors.cjs:16](<../../../../../electron/brain-errors.cjs#L16>)

**Related tests / acceptance harnesses:**

- [electron/ai/model-errors.test.cjs:22](<../../../../../electron/ai/model-errors.test.cjs#L22>) — static-call-site; coverage not established.
- [electron/ai/orchestrator.test.cjs:360](<../../../../../electron/ai/orchestrator.test.cjs#L360>) — static-call-site; coverage not established.
- [electron/ai/orchestrator.test.cjs:459](<../../../../../electron/ai/orchestrator.test.cjs#L459>) — static-call-site; coverage not established.
- [electron/ai/model-errors.test.cjs:3](<../../../../../electron/ai/model-errors.test.cjs#L3>) — file-import-only; coverage not established.
- [electron/ai/orchestrator.test.cjs:7](<../../../../../electron/ai/orchestrator.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-f87a7896b4010ea8"></a>

## serializeBrainError

[electron/brain-errors.cjs:23](<../../../../../electron/brain-errors.cjs#L23>) · FunctionDeclaration · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: serializeBrainError ([electron/brain-errors.cjs:1](<../../../../../electron/brain-errors.cjs#L1>)).

Lexical owner: [electron/brain-errors.cjs](<brain-errors.cjs.md#s-cc3291ae9e830021>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| error | any | compiler-inferred | required |

Returns: { code: any; message: any; details: {}; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/model-errors.test.cjs:3](<../../../../../electron/ai/model-errors.test.cjs#L3>) — file-import-only; coverage not established.
- [electron/ai/orchestrator.test.cjs:7](<../../../../../electron/ai/orchestrator.test.cjs#L7>) — file-import-only; coverage not established.
