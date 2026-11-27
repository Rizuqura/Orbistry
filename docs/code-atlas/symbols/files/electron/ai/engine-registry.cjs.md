# electron/ai/engine-registry.cjs: symbols

[Atlas](<../../../../README.md>) / [Retained AI runtime](<../../../../modules/ai-runtime.md>) / [electron/ai/engine-registry.cjs:1](<../../../../../../electron/ai/engine-registry.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/engine-registry.cjs](<engine-registry.cjs.md#s-a2ee8de7b0fe3238>) (Module)
- [registrationSchema](<engine-registry.cjs.md#s-94ccd034fe51efb1>) (SchemaBinding)
- [bindingInput](<engine-registry.cjs.md#s-9f177894e4772dca>) (SchemaBinding)
- [executeSchema](<engine-registry.cjs.md#s-a33fb616f7ae6afe>) (SchemaBinding)
- [denied](<engine-registry.cjs.md#s-8a1184d3181174dc>) (FunctionDeclaration)
- [EngineRegistry](<engine-registry.cjs.md#s-90dfc3f14ffbdfd8>) (ClassDeclaration)
- [EngineRegistry.packages](<engine-registry.cjs.md#s-a29e8bc55fbeda42>) (MethodDeclaration)
- [EngineRegistry.constructor](<engine-registry.cjs.md#s-ce9e7ec9029897d3>) (Constructor)
- [EngineRegistry.adapter](<engine-registry.cjs.md#s-a7684e97cd1a2f57>) (GetAccessor)
- [EngineRegistry.registration](<engine-registry.cjs.md#s-b8a4cb300b636c21>) (MethodDeclaration)
- [EngineRegistry.registration.&lt;anonymous@63:32&gt;](<engine-registry.cjs.md#s-922e149d116af8e6>) (ArrowFunction)
- [EngineRegistry.checked](<engine-registry.cjs.md#s-122ca8b3584a7a02>) (MethodDeclaration)
- [EngineRegistry.state](<engine-registry.cjs.md#s-4aff15db21fd48a2>) (MethodDeclaration)
- [EngineRegistry.exclusive](<engine-registry.cjs.md#s-d0f8dde8baf2ee15>) (MethodDeclaration)
- [EngineRegistry.exclusive.cancel](<engine-registry.cjs.md#s-e7bcaa36a5fd8805>) (ArrowFunction)
- [EngineRegistry.cancel](<engine-registry.cjs.md#s-540fcc7c581d5730>) (MethodDeclaration)
- [EngineRegistry.shutdown](<engine-registry.cjs.md#s-82da9094ec0d68df>) (MethodDeclaration)
- [EngineRegistry.configure](<engine-registry.cjs.md#s-3e866b331ac40f05>) (MethodDeclaration)
- [EngineRegistry.configure.&lt;anonymous@130:34&gt;](<engine-registry.cjs.md#s-47e4db6bcef180fc>) (ArrowFunction)
- [EngineRegistry.probeResult](<engine-registry.cjs.md#s-81aa3b3147f2cbc6>) (MethodDeclaration)
- [EngineRegistry.probe](<engine-registry.cjs.md#s-64207e9c39d81a79>) (MethodDeclaration)
- [EngineRegistry.probe.&lt;anonymous@194:34&gt;](<engine-registry.cjs.md#s-a6cee996977307af>) (ArrowFunction)
- [EngineRegistry.binding](<engine-registry.cjs.md#s-d2b2849dffb7882e>) (MethodDeclaration)
- [EngineRegistry.binding.&lt;anonymous@222:7&gt;](<engine-registry.cjs.md#s-954944f2ac18b74e>) (ArrowFunction)
- [EngineRegistry.binding.&lt;anonymous@230:9&gt;](<engine-registry.cjs.md#s-ce1889405db8e5ff>) (ArrowFunction)
- [EngineRegistry.binding.&lt;anonymous@230:9&gt;.&lt;anonymous@232:28&gt;](<engine-registry.cjs.md#s-464672bb39d8cb0b>) (ArrowFunction)
- [EngineRegistry.execute](<engine-registry.cjs.md#s-119128e3bab0ee5c>) (MethodDeclaration)
- [EngineRegistry.execute.&lt;anonymous@249:7&gt;](<engine-registry.cjs.md#s-a824e8f0b090f68e>) (ArrowFunction)
- [EngineRegistry.record](<engine-registry.cjs.md#s-9be6b57412fb340f>) (MethodDeclaration)
- [EngineRegistry.open](<engine-registry.cjs.md#s-3478cb94d7277ce5>) (MethodDeclaration)
- [EngineRegistry.open.input](<engine-registry.cjs.md#s-82e59078a13c16b3>) (SchemaBinding)
- [EngineRegistry.open.&lt;anonymous@359:7&gt;](<engine-registry.cjs.md#s-15d184da79d31e07>) (ArrowFunction)

<a id="s-a2ee8de7b0fe3238"></a>

## electron/ai/engine-registry.cjs

[electron/ai/engine-registry.cjs:1](<../../../../../../electron/ai/engine-registry.cjs#L1>) · Module · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 10.

- require — module-loader; [electron/ai/engine-registry.cjs:1](<../../../../../../electron/ai/engine-registry.cjs#L1>)
- require — module-loader; [electron/ai/engine-registry.cjs:2](<../../../../../../electron/ai/engine-registry.cjs#L2>)
- require — module-loader; [electron/ai/engine-registry.cjs:3](<../../../../../../electron/ai/engine-registry.cjs#L3>)
- require — module-loader; [electron/ai/engine-registry.cjs:4](<../../../../../../electron/ai/engine-registry.cjs#L4>)
- require — module-loader; [electron/ai/engine-registry.cjs:5](<../../../../../../electron/ai/engine-registry.cjs#L5>)
- require — module-loader; [electron/ai/engine-registry.cjs:6](<../../../../../../electron/ai/engine-registry.cjs#L6>)
- require — module-loader; [electron/ai/engine-registry.cjs:7](<../../../../../../electron/ai/engine-registry.cjs#L7>)
- require — module-loader; [electron/ai/engine-registry.cjs:8](<../../../../../../electron/ai/engine-registry.cjs#L8>)
- 2 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:10](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:8](<../../../../../../electron/ai/engine-registry.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:8](<../../../../../../electron/engine-packages.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/excel-engine.test.cjs:17](<../../../../../../electron/excel-engine.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:8](<../../../../../../electron/excel-service.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:5](<../../../../../../electron/yahoo-engine-contract.test.cjs#L5>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:78](<../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L78>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:93](<../../../../../../tests/integration/architecture-contract.test.cjs#L93>) — file-import-only; coverage not established.

<a id="s-94ccd034fe51efb1"></a>

## registrationSchema

[electron/ai/engine-registry.cjs:11](<../../../../../../electron/ai/engine-registry.cjs#L11>) · SchemaBinding · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/engine-registry.cjs](<engine-registry.cjs.md#s-a2ee8de7b0fe3238>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 16.

- z .object({ schemaVersion: z.literal(1), root: z.string().max(4096), fingerprint: z.string().regex(/^&#91;a-f0-9&#93;{64}$/), version: z.literal("1.0.0"), probe: z .object({ status: z.stri — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:11](<../../../../../../electron/ai/engine-registry.cjs#L11>)
- z .object — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:11](<../../../../../../electron/ai/engine-registry.cjs#L11>)
- z.literal — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:13](<../../../../../../electron/ai/engine-registry.cjs#L13>)
- z.string().max — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:14](<../../../../../../electron/ai/engine-registry.cjs#L14>)
- z.string — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:14](<../../../../../../electron/ai/engine-registry.cjs#L14>)
- z.string().regex — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:15](<../../../../../../electron/ai/engine-registry.cjs#L15>)
- z.string — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:15](<../../../../../../electron/ai/engine-registry.cjs#L15>)
- z.literal — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:16](<../../../../../../electron/ai/engine-registry.cjs#L16>)
- 8 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:10](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:8](<../../../../../../electron/ai/engine-registry.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:8](<../../../../../../electron/engine-packages.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/excel-engine.test.cjs:17](<../../../../../../electron/excel-engine.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:8](<../../../../../../electron/excel-service.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:5](<../../../../../../electron/yahoo-engine-contract.test.cjs#L5>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:78](<../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L78>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:93](<../../../../../../tests/integration/architecture-contract.test.cjs#L93>) — file-import-only; coverage not established.

<a id="s-9f177894e4772dca"></a>

## bindingInput

[electron/ai/engine-registry.cjs:26](<../../../../../../electron/ai/engine-registry.cjs#L26>) · SchemaBinding · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/engine-registry.cjs](<engine-registry.cjs.md#s-a2ee8de7b0fe3238>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- z.object — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:26](<../../../../../../electron/ai/engine-registry.cjs#L26>)
- z.string().regex — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:27](<../../../../../../electron/ai/engine-registry.cjs#L27>)
- z.string — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:27](<../../../../../../electron/ai/engine-registry.cjs#L27>)
- z.string().uuid — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:28](<../../../../../../electron/ai/engine-registry.cjs#L28>)
- z.string — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:28](<../../../../../../electron/ai/engine-registry.cjs#L28>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:10](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:8](<../../../../../../electron/ai/engine-registry.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:8](<../../../../../../electron/engine-packages.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/excel-engine.test.cjs:17](<../../../../../../electron/excel-engine.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:8](<../../../../../../electron/excel-service.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:5](<../../../../../../electron/yahoo-engine-contract.test.cjs#L5>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:78](<../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L78>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:93](<../../../../../../tests/integration/architecture-contract.test.cjs#L93>) — file-import-only; coverage not established.

<a id="s-a33fb616f7ae6afe"></a>

## executeSchema

[electron/ai/engine-registry.cjs:30](<../../../../../../electron/ai/engine-registry.cjs#L30>) · SchemaBinding · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/engine-registry.cjs](<engine-registry.cjs.md#s-a2ee8de7b0fe3238>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- bindingInput .extend({ engineId: z.literal("chronoz"), operation: z.literal("get_report"), arguments: adapter.argumentsSchema, }) .strict — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:30](<../../../../../../electron/ai/engine-registry.cjs#L30>)
- bindingInput .extend — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:30](<../../../../../../electron/ai/engine-registry.cjs#L30>)
- z.literal — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:32](<../../../../../../electron/ai/engine-registry.cjs#L32>)
- z.literal — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:33](<../../../../../../electron/ai/engine-registry.cjs#L33>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:10](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:8](<../../../../../../electron/ai/engine-registry.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:8](<../../../../../../electron/engine-packages.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/excel-engine.test.cjs:17](<../../../../../../electron/excel-engine.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:8](<../../../../../../electron/excel-service.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:5](<../../../../../../electron/yahoo-engine-contract.test.cjs#L5>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:78](<../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L78>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:93](<../../../../../../tests/integration/architecture-contract.test.cjs#L93>) — file-import-only; coverage not established.

<a id="s-8a1184d3181174dc"></a>

## denied

[electron/ai/engine-registry.cjs:37](<../../../../../../electron/ai/engine-registry.cjs#L37>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/engine-registry.cjs](<engine-registry.cjs.md#s-a2ee8de7b0fe3238>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| message | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ModelRuntimeError.constructor](<../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/engine-registry.cjs:38](<../../../../../../electron/ai/engine-registry.cjs#L38>)

**Called by (statically resolved):**

- [EngineRegistry.checked](<engine-registry.cjs.md#s-122ca8b3584a7a02>) — [electron/ai/engine-registry.cjs:67](<../../../../../../electron/ai/engine-registry.cjs#L67>)
- [EngineRegistry.checked](<engine-registry.cjs.md#s-122ca8b3584a7a02>) — [electron/ai/engine-registry.cjs:75](<../../../../../../electron/ai/engine-registry.cjs#L75>)
- [EngineRegistry.configure.&lt;anonymous@130:34&gt;](<engine-registry.cjs.md#s-47e4db6bcef180fc>) — [electron/ai/engine-registry.cjs:147](<../../../../../../electron/ai/engine-registry.cjs#L147>)
- [EngineRegistry.binding](<engine-registry.cjs.md#s-d2b2849dffb7882e>) — [electron/ai/engine-registry.cjs:235](<../../../../../../electron/ai/engine-registry.cjs#L235>)
- [EngineRegistry.open](<engine-registry.cjs.md#s-3478cb94d7277ce5>) — [electron/ai/engine-registry.cjs:367](<../../../../../../electron/ai/engine-registry.cjs#L367>)
- [EngineRegistry.open](<engine-registry.cjs.md#s-3478cb94d7277ce5>) — [electron/ai/engine-registry.cjs:378](<../../../../../../electron/ai/engine-registry.cjs#L378>)
- [EngineRegistry.open](<engine-registry.cjs.md#s-3478cb94d7277ce5>) — [electron/ai/engine-registry.cjs:381](<../../../../../../electron/ai/engine-registry.cjs#L381>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:10](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:8](<../../../../../../electron/ai/engine-registry.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:8](<../../../../../../electron/engine-packages.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/excel-engine.test.cjs:17](<../../../../../../electron/excel-engine.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:8](<../../../../../../electron/excel-service.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:5](<../../../../../../electron/yahoo-engine-contract.test.cjs#L5>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:78](<../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L78>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:93](<../../../../../../tests/integration/architecture-contract.test.cjs#L93>) — file-import-only; coverage not established.

<a id="s-90dfc3f14ffbdfd8"></a>

## EngineRegistry

[electron/ai/engine-registry.cjs:40](<../../../../../../electron/ai/engine-registry.cjs#L40>) · ClassDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: EngineRegistry ([electron/ai/engine-registry.cjs:1](<../../../../../../electron/ai/engine-registry.cjs#L1>)).

Lexical owner: [electron/ai/engine-registry.cjs](<engine-registry.cjs.md#s-a2ee8de7b0fe3238>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:10](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:8](<../../../../../../electron/ai/engine-registry.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:8](<../../../../../../electron/engine-packages.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/excel-engine.test.cjs:17](<../../../../../../electron/excel-engine.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:8](<../../../../../../electron/excel-service.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:5](<../../../../../../electron/yahoo-engine-contract.test.cjs#L5>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:78](<../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L78>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:93](<../../../../../../tests/integration/architecture-contract.test.cjs#L93>) — file-import-only; coverage not established.

<a id="s-a29e8bc55fbeda42"></a>

## EngineRegistry.packages

[electron/ai/engine-registry.cjs:42](<../../../../../../electron/ai/engine-registry.cjs#L42>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

Opens the standard per-Universe package portal. Caller-owned authorization is mandatory for execution; existing built-in/CHronoZ paths remain independent.

Purpose evidence: jsdoc.

Lexical owner: [EngineRegistry](<engine-registry.cjs.md#s-90dfc3f14ffbdfd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| options | any | compiler-inferred | required |

Returns: EnginePackageRegistry (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [EnginePackageRegistry.constructor](<../engines/registry/registry.cjs.md#s-0e6ad7bd522e9fad>) — [electron/ai/engine-registry.cjs:43](<../../../../../../electron/ai/engine-registry.cjs#L43>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:10](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:8](<../../../../../../electron/ai/engine-registry.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:8](<../../../../../../electron/engine-packages.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/excel-engine.test.cjs:17](<../../../../../../electron/excel-engine.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:8](<../../../../../../electron/excel-service.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:5](<../../../../../../electron/yahoo-engine-contract.test.cjs#L5>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:78](<../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L78>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:93](<../../../../../../tests/integration/architecture-contract.test.cjs#L93>) — file-import-only; coverage not established.

<a id="s-ce9e7ec9029897d3"></a>

## EngineRegistry.constructor

[electron/ai/engine-registry.cjs:45](<../../../../../../electron/ai/engine-registry.cjs#L45>) · Constructor · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineRegistry](<engine-registry.cjs.md#s-90dfc3f14ffbdfd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| directory | any | compiler-inferred | required |
| { agents, chooseFolder, openPath, adapterImpl, processOptions = {} } | { processOptions?: {}; } | compiler-inferred | optional, default present |

Returns: EngineRegistry (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [fixture](<engine-registry.test.cjs.md#s-65055825671a5a43>) — [electron/ai/engine-registry.test.cjs:108](<../../../../../../electron/ai/engine-registry.test.cjs#L108>)
- [&lt;anonymous@183:106&gt;](<engine-registry.test.cjs.md#s-4ed4a78d66cd545d>) — [electron/ai/engine-registry.test.cjs:209](<../../../../../../electron/ai/engine-registry.test.cjs#L209>)
- [&lt;anonymous@163:22&gt;](<../main.cjs.md#s-2232a6bfcb723f81>) — [electron/main.cjs:264](<../../../../../../electron/main.cjs#L264>)
- [main](<../../scripts/engine-chat-live.cjs.md#s-d9d25d752f6311a1>) — [scripts/engine-chat-live.cjs:88](<../../../../../../scripts/engine-chat-live.cjs#L88>)

Unresolved / external call sites: 1.

- path.join — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:50](<../../../../../../electron/ai/engine-registry.cjs#L50>)

**Related tests / acceptance harnesses:**

- [electron/ai/engine-registry.test.cjs:108](<../../../../../../electron/ai/engine-registry.test.cjs#L108>) — static-call-site; coverage not established.
- [electron/ai/engine-registry.test.cjs:209](<../../../../../../electron/ai/engine-registry.test.cjs#L209>) — static-call-site; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:10](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:8](<../../../../../../electron/ai/engine-registry.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:8](<../../../../../../electron/engine-packages.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/excel-engine.test.cjs:17](<../../../../../../electron/excel-engine.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:8](<../../../../../../electron/excel-service.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:5](<../../../../../../electron/yahoo-engine-contract.test.cjs#L5>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:78](<../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L78>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:93](<../../../../../../tests/integration/architecture-contract.test.cjs#L93>) — file-import-only; coverage not established.

<a id="s-a7684e97cd1a2f57"></a>

## EngineRegistry.adapter

[electron/ai/engine-registry.cjs:59](<../../../../../../electron/ai/engine-registry.cjs#L59>) · GetAccessor · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineRegistry](<engine-registry.cjs.md#s-90dfc3f14ffbdfd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- require — module-loader; [electron/ai/engine-registry.cjs:60](<../../../../../../electron/ai/engine-registry.cjs#L60>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:10](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:8](<../../../../../../electron/ai/engine-registry.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:8](<../../../../../../electron/engine-packages.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/excel-engine.test.cjs:17](<../../../../../../electron/excel-engine.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:8](<../../../../../../electron/excel-service.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:5](<../../../../../../electron/yahoo-engine-contract.test.cjs#L5>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:78](<../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L78>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:93](<../../../../../../tests/integration/architecture-contract.test.cjs#L93>) — file-import-only; coverage not established.

<a id="s-b8a4cb300b636c21"></a>

## EngineRegistry.registration

[electron/ai/engine-registry.cjs:62](<../../../../../../electron/ai/engine-registry.cjs#L62>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineRegistry](<engine-registry.cjs.md#s-90dfc3f14ffbdfd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [readJson](<../core/persistence/json-store.cjs.md#s-7f9e3b493f3ab942>) — [electron/ai/engine-registry.cjs:63](<../../../../../../electron/ai/engine-registry.cjs#L63>)

**Called by (statically resolved):**

- [EngineRegistry.state](<engine-registry.cjs.md#s-4aff15db21fd48a2>) — [electron/ai/engine-registry.cjs:81](<../../../../../../electron/ai/engine-registry.cjs#L81>)
- [EngineRegistry.probe.&lt;anonymous@194:34&gt;](<engine-registry.cjs.md#s-a6cee996977307af>) — [electron/ai/engine-registry.cjs:195](<../../../../../../electron/ai/engine-registry.cjs#L195>)
- [EngineRegistry.execute.&lt;anonymous@249:7&gt;](<engine-registry.cjs.md#s-a824e8f0b090f68e>) — [electron/ai/engine-registry.cjs:269](<../../../../../../electron/ai/engine-registry.cjs#L269>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:10](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:8](<../../../../../../electron/ai/engine-registry.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:8](<../../../../../../electron/engine-packages.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/excel-engine.test.cjs:17](<../../../../../../electron/excel-engine.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:8](<../../../../../../electron/excel-service.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:5](<../../../../../../electron/yahoo-engine-contract.test.cjs#L5>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:78](<../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L78>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:93](<../../../../../../tests/integration/architecture-contract.test.cjs#L93>) — file-import-only; coverage not established.

<a id="s-922e149d116af8e6"></a>

## EngineRegistry.registration.&lt;anonymous@63:32&gt;

[electron/ai/engine-registry.cjs:63](<../../../../../../electron/ai/engine-registry.cjs#L63>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineRegistry.registration](<engine-registry.cjs.md#s-b8a4cb300b636c21>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| v | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [parse](<../shared/validation.cjs.md#s-f29367528a73f24d>) — [electron/ai/engine-registry.cjs:63](<../../../../../../electron/ai/engine-registry.cjs#L63>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:10](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:8](<../../../../../../electron/ai/engine-registry.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:8](<../../../../../../electron/engine-packages.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/excel-engine.test.cjs:17](<../../../../../../electron/excel-engine.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:8](<../../../../../../electron/excel-service.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:5](<../../../../../../electron/yahoo-engine-contract.test.cjs#L5>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:78](<../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L78>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:93](<../../../../../../tests/integration/architecture-contract.test.cjs#L93>) — file-import-only; coverage not established.

<a id="s-122ca8b3584a7a02"></a>

## EngineRegistry.checked

[electron/ai/engine-registry.cjs:65](<../../../../../../electron/ai/engine-registry.cjs#L65>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineRegistry](<engine-registry.cjs.md#s-90dfc3f14ffbdfd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| registration | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [denied](<engine-registry.cjs.md#s-8a1184d3181174dc>) — [electron/ai/engine-registry.cjs:67](<../../../../../../electron/ai/engine-registry.cjs#L67>)
- [denied](<engine-registry.cjs.md#s-8a1184d3181174dc>) — [electron/ai/engine-registry.cjs:75](<../../../../../../electron/ai/engine-registry.cjs#L75>)

**Called by (statically resolved):**

- [EngineRegistry.state](<engine-registry.cjs.md#s-4aff15db21fd48a2>) — [electron/ai/engine-registry.cjs:90](<../../../../../../electron/ai/engine-registry.cjs#L90>)
- [EngineRegistry.probe.&lt;anonymous@194:34&gt;](<engine-registry.cjs.md#s-a6cee996977307af>) — [electron/ai/engine-registry.cjs:196](<../../../../../../electron/ai/engine-registry.cjs#L196>)
- [EngineRegistry.execute.&lt;anonymous@249:7&gt;](<engine-registry.cjs.md#s-a824e8f0b090f68e>) — [electron/ai/engine-registry.cjs:270](<../../../../../../electron/ai/engine-registry.cjs#L270>)

Unresolved / external call sites: 1.

- this.adapter.inspectBundle — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:70](<../../../../../../electron/ai/engine-registry.cjs#L70>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:10](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:8](<../../../../../../electron/ai/engine-registry.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:8](<../../../../../../electron/engine-packages.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/excel-engine.test.cjs:17](<../../../../../../electron/excel-engine.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:8](<../../../../../../electron/excel-service.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:5](<../../../../../../electron/yahoo-engine-contract.test.cjs#L5>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:78](<../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L78>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:93](<../../../../../../tests/integration/architecture-contract.test.cjs#L93>) — file-import-only; coverage not established.

<a id="s-4aff15db21fd48a2"></a>

## EngineRegistry.state

[electron/ai/engine-registry.cjs:80](<../../../../../../electron/ai/engine-registry.cjs#L80>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineRegistry](<engine-registry.cjs.md#s-90dfc3f14ffbdfd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [EngineRegistry.registration](<engine-registry.cjs.md#s-b8a4cb300b636c21>) — [electron/ai/engine-registry.cjs:81](<../../../../../../electron/ai/engine-registry.cjs#L81>)
- [EngineRegistry.checked](<engine-registry.cjs.md#s-122ca8b3584a7a02>) — [electron/ai/engine-registry.cjs:90](<../../../../../../electron/ai/engine-registry.cjs#L90>)

**Called by (statically resolved):**

- [&lt;anonymous@183:106&gt;](<engine-registry.test.cjs.md#s-4ed4a78d66cd545d>) — [electron/ai/engine-registry.test.cjs:209](<../../../../../../electron/ai/engine-registry.test.cjs#L209>)

Unresolved / external call sites: 2.

- new Date().toISOString — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:100](<../../../../../../electron/ai/engine-registry.cjs#L100>)
- Date — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:100](<../../../../../../electron/ai/engine-registry.cjs#L100>)

**Related tests / acceptance harnesses:**

- [electron/ai/engine-registry.test.cjs:209](<../../../../../../electron/ai/engine-registry.test.cjs#L209>) — static-call-site; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:10](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:8](<../../../../../../electron/ai/engine-registry.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:8](<../../../../../../electron/engine-packages.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/excel-engine.test.cjs:17](<../../../../../../electron/excel-engine.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:8](<../../../../../../electron/excel-service.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:5](<../../../../../../electron/yahoo-engine-contract.test.cjs#L5>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:78](<../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L78>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:93](<../../../../../../tests/integration/architecture-contract.test.cjs#L93>) — file-import-only; coverage not established.

<a id="s-d0f8dde8baf2ee15"></a>

## EngineRegistry.exclusive

[electron/ai/engine-registry.cjs:105](<../../../../../../electron/ai/engine-registry.cjs#L105>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineRegistry](<engine-registry.cjs.md#s-90dfc3f14ffbdfd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| owner | any | compiler-inferred | required |
| operation | any | compiler-inferred | required |
| parentSignal | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ModelRuntimeError.constructor](<../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/engine-registry.cjs:107](<../../../../../../electron/ai/engine-registry.cjs#L107>)
- [EngineRegistry.exclusive.cancel](<engine-registry.cjs.md#s-e7bcaa36a5fd8805>) — [electron/ai/engine-registry.cjs:114](<../../../../../../electron/ai/engine-registry.cjs#L114>)

**Called by (statically resolved):**

- [EngineRegistry.configure](<engine-registry.cjs.md#s-3e866b331ac40f05>) — [electron/ai/engine-registry.cjs:130](<../../../../../../electron/ai/engine-registry.cjs#L130>)
- [EngineRegistry.probe](<engine-registry.cjs.md#s-64207e9c39d81a79>) — [electron/ai/engine-registry.cjs:194](<../../../../../../electron/ai/engine-registry.cjs#L194>)
- [EngineRegistry.execute](<engine-registry.cjs.md#s-119128e3bab0ee5c>) — [electron/ai/engine-registry.cjs:247](<../../../../../../electron/ai/engine-registry.cjs#L247>)

Unresolved / external call sites: 4.

- AbortController — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:111](<../../../../../../electron/ai/engine-registry.cjs#L111>)
- parentSignal?.addEventListener — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:113](<../../../../../../electron/ai/engine-registry.cjs#L113>)
- operation — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:117](<../../../../../../electron/ai/engine-registry.cjs#L117>)
- parentSignal?.removeEventListener — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:119](<../../../../../../electron/ai/engine-registry.cjs#L119>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:10](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:8](<../../../../../../electron/ai/engine-registry.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:8](<../../../../../../electron/engine-packages.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/excel-engine.test.cjs:17](<../../../../../../electron/excel-engine.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:8](<../../../../../../electron/excel-service.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:5](<../../../../../../electron/yahoo-engine-contract.test.cjs#L5>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:78](<../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L78>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:93](<../../../../../../tests/integration/architecture-contract.test.cjs#L93>) — file-import-only; coverage not established.

<a id="s-e7bcaa36a5fd8805"></a>

## EngineRegistry.exclusive.cancel

[electron/ai/engine-registry.cjs:112](<../../../../../../electron/ai/engine-registry.cjs#L112>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineRegistry.exclusive](<engine-registry.cjs.md#s-d0f8dde8baf2ee15>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [EngineRegistry.exclusive](<engine-registry.cjs.md#s-d0f8dde8baf2ee15>) — [electron/ai/engine-registry.cjs:114](<../../../../../../electron/ai/engine-registry.cjs#L114>)

Unresolved / external call sites: 1.

- controller.abort — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:112](<../../../../../../electron/ai/engine-registry.cjs#L112>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:10](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:8](<../../../../../../electron/ai/engine-registry.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:8](<../../../../../../electron/engine-packages.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/excel-engine.test.cjs:17](<../../../../../../electron/excel-engine.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:8](<../../../../../../electron/excel-service.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:5](<../../../../../../electron/yahoo-engine-contract.test.cjs#L5>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:78](<../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L78>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:93](<../../../../../../tests/integration/architecture-contract.test.cjs#L93>) — file-import-only; coverage not established.

<a id="s-540fcc7c581d5730"></a>

## EngineRegistry.cancel

[electron/ai/engine-registry.cjs:123](<../../../../../../electron/ai/engine-registry.cjs#L123>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineRegistry](<engine-registry.cjs.md#s-90dfc3f14ffbdfd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| owner | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- this.running.controller.abort — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:124](<../../../../../../electron/ai/engine-registry.cjs#L124>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:10](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:8](<../../../../../../electron/ai/engine-registry.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:8](<../../../../../../electron/engine-packages.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/excel-engine.test.cjs:17](<../../../../../../electron/excel-engine.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:8](<../../../../../../electron/excel-service.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:5](<../../../../../../electron/yahoo-engine-contract.test.cjs#L5>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:78](<../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L78>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:93](<../../../../../../tests/integration/architecture-contract.test.cjs#L93>) — file-import-only; coverage not established.

<a id="s-82da9094ec0d68df"></a>

## EngineRegistry.shutdown

[electron/ai/engine-registry.cjs:126](<../../../../../../electron/ai/engine-registry.cjs#L126>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineRegistry](<engine-registry.cjs.md#s-90dfc3f14ffbdfd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@163:22&gt;.&lt;anonymous@278:27&gt;](<../main.cjs.md#s-c28fa4218a645f01>) — [electron/main.cjs:278](<../../../../../../electron/main.cjs#L278>)
- [main](<../../scripts/engine-chat-live.cjs.md#s-d9d25d752f6311a1>) — [scripts/engine-chat-live.cjs:165](<../../../../../../scripts/engine-chat-live.cjs#L165>)

Unresolved / external call sites: 1.

- this.running?.controller.abort — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:127](<../../../../../../electron/ai/engine-registry.cjs#L127>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:10](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:8](<../../../../../../electron/ai/engine-registry.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:8](<../../../../../../electron/engine-packages.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/excel-engine.test.cjs:17](<../../../../../../electron/excel-engine.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:8](<../../../../../../electron/excel-service.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:5](<../../../../../../electron/yahoo-engine-contract.test.cjs#L5>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:78](<../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L78>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:93](<../../../../../../tests/integration/architecture-contract.test.cjs#L93>) — file-import-only; coverage not established.

<a id="s-3e866b331ac40f05"></a>

## EngineRegistry.configure

[electron/ai/engine-registry.cjs:129](<../../../../../../electron/ai/engine-registry.cjs#L129>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineRegistry](<engine-registry.cjs.md#s-90dfc3f14ffbdfd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| owner | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [EngineRegistry.exclusive](<engine-registry.cjs.md#s-d0f8dde8baf2ee15>) — [electron/ai/engine-registry.cjs:130](<../../../../../../electron/ai/engine-registry.cjs#L130>)

**Called by (statically resolved):**

- [main](<../../scripts/engine-chat-live.cjs.md#s-d9d25d752f6311a1>) — [scripts/engine-chat-live.cjs:93](<../../../../../../scripts/engine-chat-live.cjs#L93>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:10](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:8](<../../../../../../electron/ai/engine-registry.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:8](<../../../../../../electron/engine-packages.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/excel-engine.test.cjs:17](<../../../../../../electron/excel-engine.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:8](<../../../../../../electron/excel-service.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:5](<../../../../../../electron/yahoo-engine-contract.test.cjs#L5>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:78](<../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L78>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:93](<../../../../../../tests/integration/architecture-contract.test.cjs#L93>) — file-import-only; coverage not established.

<a id="s-47e4db6bcef180fc"></a>

## EngineRegistry.configure.&lt;anonymous@130:34&gt;

[electron/ai/engine-registry.cjs:130](<../../../../../../electron/ai/engine-registry.cjs#L130>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineRegistry.configure](<engine-registry.cjs.md#s-3e866b331ac40f05>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| signal | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [denied](<engine-registry.cjs.md#s-8a1184d3181174dc>) — [electron/ai/engine-registry.cjs:147](<../../../../../../electron/ai/engine-registry.cjs#L147>)
- [ModelRuntimeError.constructor](<../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/engine-registry.cjs:151](<../../../../../../electron/ai/engine-registry.cjs#L151>)
- [EngineRegistry.probeResult](<engine-registry.cjs.md#s-81aa3b3147f2cbc6>) — [electron/ai/engine-registry.cjs:155](<../../../../../../electron/ai/engine-registry.cjs#L155>)
- [writeJson](<../core/persistence/json-store.cjs.md#s-5030c6156f98dba1>) — [electron/ai/engine-registry.cjs:156](<../../../../../../electron/ai/engine-registry.cjs#L156>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- this.chooseFolder — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:131](<../../../../../../electron/ai/engine-registry.cjs#L131>)
- this.adapter.inspectBundle — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:133](<../../../../../../electron/ai/engine-registry.cjs#L133>)
- this.adapter.runTrigger — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:134](<../../../../../../electron/ai/engine-registry.cjs#L134>)
- this.adapter.verifyReport — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:144](<../../../../../../electron/ai/engine-registry.cjs#L144>)
- this.adapter.inspectBundle — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:145](<../../../../../../electron/ai/engine-registry.cjs#L145>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:10](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:8](<../../../../../../electron/ai/engine-registry.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:8](<../../../../../../electron/engine-packages.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/excel-engine.test.cjs:17](<../../../../../../electron/excel-engine.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:8](<../../../../../../electron/excel-service.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:5](<../../../../../../electron/yahoo-engine-contract.test.cjs#L5>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:78](<../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L78>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:93](<../../../../../../tests/integration/architecture-contract.test.cjs#L93>) — file-import-only; coverage not established.

<a id="s-81aa3b3147f2cbc6"></a>

## EngineRegistry.probeResult

[electron/ai/engine-registry.cjs:171](<../../../../../../electron/ai/engine-registry.cjs#L171>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineRegistry](<engine-registry.cjs.md#s-90dfc3f14ffbdfd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| payload | any | compiler-inferred | required |

Returns: { status: string; diagnostic: string; at: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [EngineRegistry.configure.&lt;anonymous@130:34&gt;](<engine-registry.cjs.md#s-47e4db6bcef180fc>) — [electron/ai/engine-registry.cjs:155](<../../../../../../electron/ai/engine-registry.cjs#L155>)
- [EngineRegistry.probe.&lt;anonymous@194:34&gt;](<engine-registry.cjs.md#s-a6cee996977307af>) — [electron/ai/engine-registry.cjs:208](<../../../../../../electron/ai/engine-registry.cjs#L208>)

Unresolved / external call sites: 2.

- new Date().toISOString — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:190](<../../../../../../electron/ai/engine-registry.cjs#L190>)
- Date — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:190](<../../../../../../electron/ai/engine-registry.cjs#L190>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:10](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:8](<../../../../../../electron/ai/engine-registry.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:8](<../../../../../../electron/engine-packages.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/excel-engine.test.cjs:17](<../../../../../../electron/excel-engine.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:8](<../../../../../../electron/excel-service.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:5](<../../../../../../electron/yahoo-engine-contract.test.cjs#L5>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:78](<../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L78>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:93](<../../../../../../tests/integration/architecture-contract.test.cjs#L93>) — file-import-only; coverage not established.

<a id="s-64207e9c39d81a79"></a>

## EngineRegistry.probe

[electron/ai/engine-registry.cjs:193](<../../../../../../electron/ai/engine-registry.cjs#L193>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineRegistry](<engine-registry.cjs.md#s-90dfc3f14ffbdfd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| owner | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [EngineRegistry.exclusive](<engine-registry.cjs.md#s-d0f8dde8baf2ee15>) — [electron/ai/engine-registry.cjs:194](<../../../../../../electron/ai/engine-registry.cjs#L194>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:10](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:8](<../../../../../../electron/ai/engine-registry.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:8](<../../../../../../electron/engine-packages.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/excel-engine.test.cjs:17](<../../../../../../electron/excel-engine.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:8](<../../../../../../electron/excel-service.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:5](<../../../../../../electron/yahoo-engine-contract.test.cjs#L5>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:78](<../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L78>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:93](<../../../../../../tests/integration/architecture-contract.test.cjs#L93>) — file-import-only; coverage not established.

<a id="s-a6cee996977307af"></a>

## EngineRegistry.probe.&lt;anonymous@194:34&gt;

[electron/ai/engine-registry.cjs:194](<../../../../../../electron/ai/engine-registry.cjs#L194>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineRegistry.probe](<engine-registry.cjs.md#s-64207e9c39d81a79>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| signal | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [EngineRegistry.registration](<engine-registry.cjs.md#s-b8a4cb300b636c21>) — [electron/ai/engine-registry.cjs:195](<../../../../../../electron/ai/engine-registry.cjs#L195>)
- [EngineRegistry.checked](<engine-registry.cjs.md#s-122ca8b3584a7a02>) — [electron/ai/engine-registry.cjs:196](<../../../../../../electron/ai/engine-registry.cjs#L196>)
- [EngineRegistry.probeResult](<engine-registry.cjs.md#s-81aa3b3147f2cbc6>) — [electron/ai/engine-registry.cjs:208](<../../../../../../electron/ai/engine-registry.cjs#L208>)
- [writeJson](<../core/persistence/json-store.cjs.md#s-5030c6156f98dba1>) — [electron/ai/engine-registry.cjs:209](<../../../../../../electron/ai/engine-registry.cjs#L209>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- this.adapter.runTrigger — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:197](<../../../../../../electron/ai/engine-registry.cjs#L197>)
- this.adapter.verifyReport — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:207](<../../../../../../electron/ai/engine-registry.cjs#L207>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:10](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:8](<../../../../../../electron/ai/engine-registry.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:8](<../../../../../../electron/engine-packages.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/excel-engine.test.cjs:17](<../../../../../../electron/excel-engine.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:8](<../../../../../../electron/excel-service.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:5](<../../../../../../electron/yahoo-engine-contract.test.cjs#L5>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:78](<../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L78>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:93](<../../../../../../tests/integration/architecture-contract.test.cjs#L93>) — file-import-only; coverage not established.

<a id="s-d2b2849dffb7882e"></a>

## EngineRegistry.binding

[electron/ai/engine-registry.cjs:218](<../../../../../../electron/ai/engine-registry.cjs#L218>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineRegistry](<engine-registry.cjs.md#s-90dfc3f14ffbdfd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [denied](<engine-registry.cjs.md#s-8a1184d3181174dc>) — [electron/ai/engine-registry.cjs:235](<../../../../../../electron/ai/engine-registry.cjs#L235>)
- [sha](<chronoz-contract.cjs.md#s-be6194fd3a77a55d>) — [electron/ai/engine-registry.cjs:241](<../../../../../../electron/ai/engine-registry.cjs#L241>)

**Called by (statically resolved):**

- [EngineRegistry.execute.&lt;anonymous@249:7&gt;](<engine-registry.cjs.md#s-a824e8f0b090f68e>) — [electron/ai/engine-registry.cjs:250](<../../../../../../electron/ai/engine-registry.cjs#L250>)
- [EngineRegistry.open](<engine-registry.cjs.md#s-3478cb94d7277ce5>) — [electron/ai/engine-registry.cjs:356](<../../../../../../electron/ai/engine-registry.cjs#L356>)

Unresolved / external call sites: 4.

- this.agents.get — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:219](<../../../../../../electron/ai/engine-registry.cjs#L219>)
- graph?.nodes.find — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:221](<../../../../../../electron/ai/engine-registry.cjs#L221>)
- graph.edges.some — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:229](<../../../../../../electron/ai/engine-registry.cjs#L229>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:241](<../../../../../../electron/ai/engine-registry.cjs#L241>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:10](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:8](<../../../../../../electron/ai/engine-registry.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:8](<../../../../../../electron/engine-packages.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/excel-engine.test.cjs:17](<../../../../../../electron/excel-engine.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:8](<../../../../../../electron/excel-service.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:5](<../../../../../../electron/yahoo-engine-contract.test.cjs#L5>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:78](<../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L78>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:93](<../../../../../../tests/integration/architecture-contract.test.cjs#L93>) — file-import-only; coverage not established.

<a id="s-954944f2ac18b74e"></a>

## EngineRegistry.binding.&lt;anonymous@222:7&gt;

[electron/ai/engine-registry.cjs:222](<../../../../../../electron/ai/engine-registry.cjs#L222>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineRegistry.binding](<engine-registry.cjs.md#s-d2b2849dffb7882e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| n | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:10](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:8](<../../../../../../electron/ai/engine-registry.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:8](<../../../../../../electron/engine-packages.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/excel-engine.test.cjs:17](<../../../../../../electron/excel-engine.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:8](<../../../../../../electron/excel-service.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:5](<../../../../../../electron/yahoo-engine-contract.test.cjs#L5>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:78](<../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L78>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:93](<../../../../../../tests/integration/architecture-contract.test.cjs#L93>) — file-import-only; coverage not established.

<a id="s-ce1889405db8e5ff"></a>

## EngineRegistry.binding.&lt;anonymous@230:9&gt;

[electron/ai/engine-registry.cjs:230](<../../../../../../electron/ai/engine-registry.cjs#L230>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineRegistry.binding](<engine-registry.cjs.md#s-d2b2849dffb7882e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| e | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- graph.nodes.some — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:232](<../../../../../../electron/ai/engine-registry.cjs#L232>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:10](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:8](<../../../../../../electron/ai/engine-registry.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:8](<../../../../../../electron/engine-packages.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/excel-engine.test.cjs:17](<../../../../../../electron/excel-engine.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:8](<../../../../../../electron/excel-service.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:5](<../../../../../../electron/yahoo-engine-contract.test.cjs#L5>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:78](<../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L78>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:93](<../../../../../../tests/integration/architecture-contract.test.cjs#L93>) — file-import-only; coverage not established.

<a id="s-464672bb39d8cb0b"></a>

## EngineRegistry.binding.&lt;anonymous@230:9&gt;.&lt;anonymous@232:28&gt;

[electron/ai/engine-registry.cjs:232](<../../../../../../electron/ai/engine-registry.cjs#L232>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineRegistry.binding.&lt;anonymous@230:9&gt;](<engine-registry.cjs.md#s-ce1889405db8e5ff>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| n | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:10](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:8](<../../../../../../electron/ai/engine-registry.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:8](<../../../../../../electron/engine-packages.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/excel-engine.test.cjs:17](<../../../../../../electron/excel-engine.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:8](<../../../../../../electron/excel-service.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:5](<../../../../../../electron/yahoo-engine-contract.test.cjs#L5>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:78](<../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L78>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:93](<../../../../../../tests/integration/architecture-contract.test.cjs#L93>) — file-import-only; coverage not established.

<a id="s-119128e3bab0ee5c"></a>

## EngineRegistry.execute

[electron/ai/engine-registry.cjs:245](<../../../../../../electron/ai/engine-registry.cjs#L245>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineRegistry](<engine-registry.cjs.md#s-90dfc3f14ffbdfd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| owner | any | compiler-inferred | required |
| raw | any | compiler-inferred | required |
| options | {} | compiler-inferred | optional, default present |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [parse](<../shared/validation.cjs.md#s-f29367528a73f24d>) — [electron/ai/engine-registry.cjs:246](<../../../../../../electron/ai/engine-registry.cjs#L246>)
- [EngineRegistry.exclusive](<engine-registry.cjs.md#s-d0f8dde8baf2ee15>) — [electron/ai/engine-registry.cjs:247](<../../../../../../electron/ai/engine-registry.cjs#L247>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:10](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:8](<../../../../../../electron/ai/engine-registry.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:8](<../../../../../../electron/engine-packages.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/excel-engine.test.cjs:17](<../../../../../../electron/excel-engine.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:8](<../../../../../../electron/excel-service.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:5](<../../../../../../electron/yahoo-engine-contract.test.cjs#L5>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:78](<../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L78>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:93](<../../../../../../tests/integration/architecture-contract.test.cjs#L93>) — file-import-only; coverage not established.

<a id="s-a824e8f0b090f68e"></a>

## EngineRegistry.execute.&lt;anonymous@249:7&gt;

[electron/ai/engine-registry.cjs:249](<../../../../../../electron/ai/engine-registry.cjs#L249>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineRegistry.execute](<engine-registry.cjs.md#s-119128e3bab0ee5c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| signal | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [EngineRegistry.binding](<engine-registry.cjs.md#s-d2b2849dffb7882e>) — [electron/ai/engine-registry.cjs:250](<../../../../../../electron/ai/engine-registry.cjs#L250>)
- [EngineRegistry.registration](<engine-registry.cjs.md#s-b8a4cb300b636c21>) — [electron/ai/engine-registry.cjs:269](<../../../../../../electron/ai/engine-registry.cjs#L269>)
- [EngineRegistry.checked](<engine-registry.cjs.md#s-122ca8b3584a7a02>) — [electron/ai/engine-registry.cjs:270](<../../../../../../electron/ai/engine-registry.cjs#L270>)
- [ModelRuntimeError.constructor](<../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/engine-registry.cjs:283](<../../../../../../electron/ai/engine-registry.cjs#L283>)
- [safeDirectory](<../core/persistence/json-store.cjs.md#s-429fa54bc1a890a0>) — [electron/ai/engine-registry.cjs:296](<../../../../../../electron/ai/engine-registry.cjs#L296>)
- [EngineRegistry.record](<engine-registry.cjs.md#s-9be6b57412fb340f>) — [electron/ai/engine-registry.cjs:315](<../../../../../../electron/ai/engine-registry.cjs#L315>)
- [EngineRegistry.record](<engine-registry.cjs.md#s-9be6b57412fb340f>) — [electron/ai/engine-registry.cjs:328](<../../../../../../electron/ai/engine-registry.cjs#L328>)
- [ModelRuntimeError.constructor](<../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/engine-registry.cjs:336](<../../../../../../electron/ai/engine-registry.cjs#L336>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 16.

- randomUUID — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:253](<../../../../../../electron/ai/engine-registry.cjs#L253>)
- new Date().toISOString — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:265](<../../../../../../electron/ai/engine-registry.cjs#L265>)
- Date — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:265](<../../../../../../electron/ai/engine-registry.cjs#L265>)
- Date.now — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:267](<../../../../../../electron/ai/engine-registry.cjs#L267>)
- this.adapter.runTrigger — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:271](<../../../../../../electron/ai/engine-registry.cjs#L271>)
- this.adapter.verifyReport — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:277](<../../../../../../electron/ai/engine-registry.cjs#L277>)
- path.join — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:291](<../../../../../../electron/ai/engine-registry.cjs#L291>)
- require — module-loader; [electron/ai/engine-registry.cjs:296](<../../../../../../electron/ai/engine-registry.cjs#L296>)
- 8 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:10](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:8](<../../../../../../electron/ai/engine-registry.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:8](<../../../../../../electron/engine-packages.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/excel-engine.test.cjs:17](<../../../../../../electron/excel-engine.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:8](<../../../../../../electron/excel-service.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:5](<../../../../../../electron/yahoo-engine-contract.test.cjs#L5>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:78](<../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L78>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:93](<../../../../../../tests/integration/architecture-contract.test.cjs#L93>) — file-import-only; coverage not established.

<a id="s-9be6b57412fb340f"></a>

## EngineRegistry.record

[electron/ai/engine-registry.cjs:345](<../../../../../../electron/ai/engine-registry.cjs#L345>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineRegistry](<engine-registry.cjs.md#s-90dfc3f14ffbdfd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| run | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [writeJson](<../core/persistence/json-store.cjs.md#s-5030c6156f98dba1>) — [electron/ai/engine-registry.cjs:346](<../../../../../../electron/ai/engine-registry.cjs#L346>)

**Called by (statically resolved):**

- [EngineRegistry.execute.&lt;anonymous@249:7&gt;](<engine-registry.cjs.md#s-a824e8f0b090f68e>) — [electron/ai/engine-registry.cjs:315](<../../../../../../electron/ai/engine-registry.cjs#L315>)
- [EngineRegistry.execute.&lt;anonymous@249:7&gt;](<engine-registry.cjs.md#s-a824e8f0b090f68e>) — [electron/ai/engine-registry.cjs:328](<../../../../../../electron/ai/engine-registry.cjs#L328>)

Unresolved / external call sites: 1.

- path.join — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:347](<../../../../../../electron/ai/engine-registry.cjs#L347>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:10](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:8](<../../../../../../electron/ai/engine-registry.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:8](<../../../../../../electron/engine-packages.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/excel-engine.test.cjs:17](<../../../../../../electron/excel-engine.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:8](<../../../../../../electron/excel-service.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:5](<../../../../../../electron/yahoo-engine-contract.test.cjs#L5>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:78](<../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L78>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:93](<../../../../../../tests/integration/architecture-contract.test.cjs#L93>) — file-import-only; coverage not established.

<a id="s-3478cb94d7277ce5"></a>

## EngineRegistry.open

[electron/ai/engine-registry.cjs:351](<../../../../../../electron/ai/engine-registry.cjs#L351>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineRegistry](<engine-registry.cjs.md#s-90dfc3f14ffbdfd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| raw | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [EngineRegistry.binding](<engine-registry.cjs.md#s-d2b2849dffb7882e>) — [electron/ai/engine-registry.cjs:356](<../../../../../../electron/ai/engine-registry.cjs#L356>)
- [readJson](<../core/persistence/json-store.cjs.md#s-7f9e3b493f3ab942>) — [electron/ai/engine-registry.cjs:357](<../../../../../../electron/ai/engine-registry.cjs#L357>)
- [denied](<engine-registry.cjs.md#s-8a1184d3181174dc>) — [electron/ai/engine-registry.cjs:367](<../../../../../../electron/ai/engine-registry.cjs#L367>)
- [boundedRead](<chronoz-contract.cjs.md#s-6dd18264afbdab77>) — [electron/ai/engine-registry.cjs:373](<../../../../../../electron/ai/engine-registry.cjs#L373>)
- [sha](<chronoz-contract.cjs.md#s-be6194fd3a77a55d>) — [electron/ai/engine-registry.cjs:375](<../../../../../../electron/ai/engine-registry.cjs#L375>)
- [denied](<engine-registry.cjs.md#s-8a1184d3181174dc>) — [electron/ai/engine-registry.cjs:378](<../../../../../../electron/ai/engine-registry.cjs#L378>)
- [denied](<engine-registry.cjs.md#s-8a1184d3181174dc>) — [electron/ai/engine-registry.cjs:381](<../../../../../../electron/ai/engine-registry.cjs#L381>)

**Called by (statically resolved):**

- [main](<../../scripts/engine-chat-live.cjs.md#s-d9d25d752f6311a1>) — [scripts/engine-chat-live.cjs:128](<../../../../../../scripts/engine-chat-live.cjs#L128>)

Unresolved / external call sites: 5.

- path.join — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:358](<../../../../../../electron/ai/engine-registry.cjs#L358>)
- path.join — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:368](<../../../../../../electron/ai/engine-registry.cjs#L368>)
- bytes.subarray(0, 5).toString — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:376](<../../../../../../electron/ai/engine-registry.cjs#L376>)
- bytes.subarray — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:376](<../../../../../../electron/ai/engine-registry.cjs#L376>)
- this.openPath — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:379](<../../../../../../electron/ai/engine-registry.cjs#L379>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:10](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:8](<../../../../../../electron/ai/engine-registry.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:8](<../../../../../../electron/engine-packages.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/excel-engine.test.cjs:17](<../../../../../../electron/excel-engine.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:8](<../../../../../../electron/excel-service.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:5](<../../../../../../electron/yahoo-engine-contract.test.cjs#L5>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:78](<../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L78>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:93](<../../../../../../tests/integration/architecture-contract.test.cjs#L93>) — file-import-only; coverage not established.

<a id="s-82e59078a13c16b3"></a>

## EngineRegistry.open.input

[electron/ai/engine-registry.cjs:352](<../../../../../../electron/ai/engine-registry.cjs#L352>) · SchemaBinding · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineRegistry.open](<engine-registry.cjs.md#s-3478cb94d7277ce5>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

- [parse](<../shared/validation.cjs.md#s-f29367528a73f24d>) — [electron/ai/engine-registry.cjs:352](<../../../../../../electron/ai/engine-registry.cjs#L352>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- bindingInput.extend({ runId: z.string().uuid() }).strict — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:353](<../../../../../../electron/ai/engine-registry.cjs#L353>)
- bindingInput.extend — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:353](<../../../../../../electron/ai/engine-registry.cjs#L353>)
- z.string().uuid — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:353](<../../../../../../electron/ai/engine-registry.cjs#L353>)
- z.string — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:353](<../../../../../../electron/ai/engine-registry.cjs#L353>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:10](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:8](<../../../../../../electron/ai/engine-registry.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:8](<../../../../../../electron/engine-packages.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/excel-engine.test.cjs:17](<../../../../../../electron/excel-engine.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:8](<../../../../../../electron/excel-service.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:5](<../../../../../../electron/yahoo-engine-contract.test.cjs#L5>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:78](<../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L78>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:93](<../../../../../../tests/integration/architecture-contract.test.cjs#L93>) — file-import-only; coverage not established.

<a id="s-15d184da79d31e07"></a>

## EngineRegistry.open.&lt;anonymous@359:7&gt;

[electron/ai/engine-registry.cjs:359](<../../../../../../electron/ai/engine-registry.cjs#L359>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineRegistry.open](<engine-registry.cjs.md#s-3478cb94d7277ce5>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:10](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:8](<../../../../../../electron/ai/engine-registry.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:8](<../../../../../../electron/engine-packages.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/excel-engine.test.cjs:17](<../../../../../../electron/excel-engine.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:8](<../../../../../../electron/excel-service.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:5](<../../../../../../electron/yahoo-engine-contract.test.cjs#L5>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:78](<../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L78>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:93](<../../../../../../tests/integration/architecture-contract.test.cjs#L93>) — file-import-only; coverage not established.
