# electron/domains/knowledge/backend-identity-service.cjs: symbols

[Atlas](<../../../../../README.md>) / [Backend Identity Engine](<../../../../../modules/identity.md>) / [electron/domains/knowledge/backend-identity-service.cjs:1](<../../../../../../../electron/domains/knowledge/backend-identity-service.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/domains/knowledge/backend-identity-service.cjs](<backend-identity-service.cjs.md#s-092f606958868945>) (Module)
- [inputSchema](<backend-identity-service.cjs.md#s-335b6ac113030e6f>) (SchemaBinding)
- [inspect](<backend-identity-service.cjs.md#s-ce9a187a9463c465>) (FunctionDeclaration)
- [inspect.authorize](<backend-identity-service.cjs.md#s-f958d8a5c5e1a550>) (MethodDeclaration)

<a id="s-092f606958868945"></a>

## electron/domains/knowledge/backend-identity-service.cjs

[electron/domains/knowledge/backend-identity-service.cjs:1](<../../../../../../../electron/domains/knowledge/backend-identity-service.cjs#L1>) · Module · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- require — module-loader; [electron/domains/knowledge/backend-identity-service.cjs:1](<../../../../../../../electron/domains/knowledge/backend-identity-service.cjs#L1>)
- require — module-loader; [electron/domains/knowledge/backend-identity-service.cjs:2](<../../../../../../../electron/domains/knowledge/backend-identity-service.cjs#L2>)
- require — module-loader; [electron/domains/knowledge/backend-identity-service.cjs:6](<../../../../../../../electron/domains/knowledge/backend-identity-service.cjs#L6>)
- require — module-loader; [electron/domains/knowledge/backend-identity-service.cjs:7](<../../../../../../../electron/domains/knowledge/backend-identity-service.cjs#L7>)
- require — module-loader; [electron/domains/knowledge/backend-identity-service.cjs:10](<../../../../../../../electron/domains/knowledge/backend-identity-service.cjs#L10>)

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:26](<../../../../../../../electron/backend-identity.test.cjs#L26>) — file-import-only; coverage not established.

<a id="s-335b6ac113030e6f"></a>

## inputSchema

[electron/domains/knowledge/backend-identity-service.cjs:11](<../../../../../../../electron/domains/knowledge/backend-identity-service.cjs#L11>) · SchemaBinding · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/domains/knowledge/backend-identity-service.cjs](<backend-identity-service.cjs.md#s-092f606958868945>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 17.

- z .object({ vaultPath: z.string(), id: idSchema, version: hashSchema.optional(), query: z.string().max(200).optional(), offset: z.number().int().min(0).max(2048).optional(), limit: — external-or-dynamic-dispatch; [electron/domains/knowledge/backend-identity-service.cjs:11](<../../../../../../../electron/domains/knowledge/backend-identity-service.cjs#L11>)
- z .object — external-or-dynamic-dispatch; [electron/domains/knowledge/backend-identity-service.cjs:11](<../../../../../../../electron/domains/knowledge/backend-identity-service.cjs#L11>)
- z.string — external-or-dynamic-dispatch; [electron/domains/knowledge/backend-identity-service.cjs:13](<../../../../../../../electron/domains/knowledge/backend-identity-service.cjs#L13>)
- hashSchema.optional — external-or-dynamic-dispatch; [electron/domains/knowledge/backend-identity-service.cjs:15](<../../../../../../../electron/domains/knowledge/backend-identity-service.cjs#L15>)
- z.string().max(200).optional — external-or-dynamic-dispatch; [electron/domains/knowledge/backend-identity-service.cjs:16](<../../../../../../../electron/domains/knowledge/backend-identity-service.cjs#L16>)
- z.string().max — external-or-dynamic-dispatch; [electron/domains/knowledge/backend-identity-service.cjs:16](<../../../../../../../electron/domains/knowledge/backend-identity-service.cjs#L16>)
- z.string — external-or-dynamic-dispatch; [electron/domains/knowledge/backend-identity-service.cjs:16](<../../../../../../../electron/domains/knowledge/backend-identity-service.cjs#L16>)
- z.number().int().min(0).max(2048).optional — external-or-dynamic-dispatch; [electron/domains/knowledge/backend-identity-service.cjs:17](<../../../../../../../electron/domains/knowledge/backend-identity-service.cjs#L17>)
- 9 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:26](<../../../../../../../electron/backend-identity.test.cjs#L26>) — file-import-only; coverage not established.

<a id="s-ce9a187a9463c465"></a>

## inspect

[electron/domains/knowledge/backend-identity-service.cjs:22](<../../../../../../../electron/domains/knowledge/backend-identity-service.cjs#L22>) · FunctionDeclaration · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

Restricts the inspector to local reading/manual compilation. There is deliberately no renderer capability-execution or caller-supplied permission endpoint.

Purpose evidence: jsdoc.

Exported as: inspect ([electron/domains/knowledge/backend-identity-service.cjs:1](<../../../../../../../electron/domains/knowledge/backend-identity-service.cjs#L1>)).

Lexical owner: [electron/domains/knowledge/backend-identity-service.cjs](<backend-identity-service.cjs.md#s-092f606958868945>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| operation | any | compiler-inferred | required |
| raw | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [createIdentityRuntime](<../../engines/backend-identity/identity-runtime.cjs.md#s-f3672ac091501d51>) — [electron/domains/knowledge/backend-identity-service.cjs:26](<../../../../../../../electron/domains/knowledge/backend-identity-service.cjs#L26>)

**Called by (statically resolved):**

- [&lt;anonymous@616:111&gt;.&lt;anonymous@617:11&gt;](<../../backend-identity.test.cjs.md#s-04a3ff3542bf8529>) — [electron/backend-identity.test.cjs:654](<../../../../../../../electron/backend-identity.test.cjs#L654>)
- [&lt;anonymous@616:111&gt;.&lt;anonymous@617:11&gt;](<../../backend-identity.test.cjs.md#s-04a3ff3542bf8529>) — [electron/backend-identity.test.cjs:658](<../../../../../../../electron/backend-identity.test.cjs#L658>)
- [registerWorldViewIpc."identity-copy"](<../../core/ipc/worldview-ipc.cjs.md#s-68bfc2b69b1ac5dc>) — [electron/core/ipc/worldview-ipc.cjs:33](<../../../../../../../electron/core/ipc/worldview-ipc.cjs#L33>)
- [registerWorldViewIpc."identity-status"](<../../core/ipc/worldview-ipc.cjs.md#s-77424763308167af>) — [electron/core/ipc/worldview-ipc.cjs:52](<../../../../../../../electron/core/ipc/worldview-ipc.cjs#L52>)
- [registerWorldViewIpc."identity-generate"](<../../core/ipc/worldview-ipc.cjs.md#s-a0e3ba7d6f757f71>) — [electron/core/ipc/worldview-ipc.cjs:59](<../../../../../../../electron/core/ipc/worldview-ipc.cjs#L59>)
- [registerWorldViewIpc."identity-chunks"](<../../core/ipc/worldview-ipc.cjs.md#s-4e6cf54236725947>) — [electron/core/ipc/worldview-ipc.cjs:66](<../../../../../../../electron/core/ipc/worldview-ipc.cjs#L66>)
- [registerWorldViewIpc."identity-capabilities"](<../../core/ipc/worldview-ipc.cjs.md#s-77f25b226f3f527a>) — [electron/core/ipc/worldview-ipc.cjs:73](<../../../../../../../electron/core/ipc/worldview-ipc.cjs#L73>)

Unresolved / external call sites: 9.

- inputSchema.parse — external-or-dynamic-dispatch; [electron/domains/knowledge/backend-identity-service.cjs:23](<../../../../../../../electron/domains/knowledge/backend-identity-service.cjs#L23>)
- path.resolve — external-or-dynamic-dispatch; [electron/domains/knowledge/backend-identity-service.cjs:24](<../../../../../../../electron/domains/knowledge/backend-identity-service.cjs#L24>)
- path.resolve — external-or-dynamic-dispatch; [electron/domains/knowledge/backend-identity-service.cjs:24](<../../../../../../../electron/domains/knowledge/backend-identity-service.cjs#L24>)
- Error — external-or-dynamic-dispatch; [electron/domains/knowledge/backend-identity-service.cjs:25](<../../../../../../../electron/domains/knowledge/backend-identity-service.cjs#L25>)
- runtime.getIdentity — external-or-dynamic-dispatch; [electron/domains/knowledge/backend-identity-service.cjs:48](<../../../../../../../electron/domains/knowledge/backend-identity-service.cjs#L48>)
- runtime.generate — external-or-dynamic-dispatch; [electron/domains/knowledge/backend-identity-service.cjs:49](<../../../../../../../electron/domains/knowledge/backend-identity-service.cjs#L49>)
- runtime.searchChunks — external-or-dynamic-dispatch; [electron/domains/knowledge/backend-identity-service.cjs:50](<../../../../../../../electron/domains/knowledge/backend-identity-service.cjs#L50>)
- runtime.listCapabilities — external-or-dynamic-dispatch; [electron/domains/knowledge/backend-identity-service.cjs:51](<../../../../../../../electron/domains/knowledge/backend-identity-service.cjs#L51>)
- 1 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:654](<../../../../../../../electron/backend-identity.test.cjs#L654>) — static-call-site; coverage not established.
- [electron/backend-identity.test.cjs:658](<../../../../../../../electron/backend-identity.test.cjs#L658>) — static-call-site; coverage not established.
- [electron/backend-identity.test.cjs:26](<../../../../../../../electron/backend-identity.test.cjs#L26>) — file-import-only; coverage not established.

<a id="s-f958d8a5c5e1a550"></a>

## inspect.authorize

[electron/domains/knowledge/backend-identity-service.cjs:28](<../../../../../../../electron/domains/knowledge/backend-identity-service.cjs#L28>) · MethodDeclaration · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

The outer trusted IPC verifies the active root; this policy additionally verifies entity existence on every operation.

Purpose evidence: jsdoc.

Lexical owner: [inspect](<backend-identity-service.cjs.md#s-ce9a187a9463c465>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { root: requestedRoot, entityId, permission } | { root: any; entityId: any; permission: any; } | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- &#91;"entity:read", "knowledge:read", "identity:compile"&#93;.includes — external-or-dynamic-dispatch; [electron/domains/knowledge/backend-identity-service.cjs:31](<../../../../../../../electron/domains/knowledge/backend-identity-service.cjs#L31>)
- readWorldViewChip — signature-only-candidate; [electron/domains/knowledge/backend-identity-service.cjs:36](<../../../../../../../electron/domains/knowledge/backend-identity-service.cjs#L36>)

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:26](<../../../../../../../electron/backend-identity.test.cjs#L26>) — file-import-only; coverage not established.
