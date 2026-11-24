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
- [EngineRegistry.registration](<engine-registry.cjs.md#s-8ab6043db31cc707>) (MethodDeclaration)
- [EngineRegistry.registration.&lt;anonymous@65:32&gt;](<engine-registry.cjs.md#s-68beb6cdccf02b7e>) (ArrowFunction)
- [EngineRegistry.checked](<engine-registry.cjs.md#s-8396dabf7b2bc949>) (MethodDeclaration)
- [EngineRegistry.state](<engine-registry.cjs.md#s-06645e4647def7ef>) (MethodDeclaration)
- [EngineRegistry.exclusive](<engine-registry.cjs.md#s-554a6859398689fa>) (MethodDeclaration)
- [EngineRegistry.exclusive.cancel](<engine-registry.cjs.md#s-4ea56a6f46fa3c69>) (ArrowFunction)
- [EngineRegistry.cancel](<engine-registry.cjs.md#s-15051950a5638b03>) (MethodDeclaration)
- [EngineRegistry.shutdown](<engine-registry.cjs.md#s-922650a4d5052117>) (MethodDeclaration)
- [EngineRegistry.configure](<engine-registry.cjs.md#s-296305f9b4abd79c>) (MethodDeclaration)
- [EngineRegistry.configure.&lt;anonymous@132:34&gt;](<engine-registry.cjs.md#s-688aaee9ba17a08f>) (ArrowFunction)
- [EngineRegistry.probeResult](<engine-registry.cjs.md#s-62de64944a666b6c>) (MethodDeclaration)
- [EngineRegistry.probe](<engine-registry.cjs.md#s-e093b5f5f5d00fe2>) (MethodDeclaration)
- [EngineRegistry.probe.&lt;anonymous@196:34&gt;](<engine-registry.cjs.md#s-97c54759e2c0190b>) (ArrowFunction)
- [EngineRegistry.binding](<engine-registry.cjs.md#s-780b5088edc49ed5>) (MethodDeclaration)
- [EngineRegistry.binding.&lt;anonymous@224:7&gt;](<engine-registry.cjs.md#s-a78c9593f8d2970f>) (ArrowFunction)
- [EngineRegistry.binding.&lt;anonymous@232:9&gt;](<engine-registry.cjs.md#s-c16d9752032b500b>) (ArrowFunction)
- [EngineRegistry.binding.&lt;anonymous@232:9&gt;.&lt;anonymous@234:28&gt;](<engine-registry.cjs.md#s-48b9d55ba28cd3d3>) (ArrowFunction)
- [EngineRegistry.execute](<engine-registry.cjs.md#s-918f1571185e7e73>) (MethodDeclaration)
- [EngineRegistry.execute.&lt;anonymous@251:7&gt;](<engine-registry.cjs.md#s-b3a7dd18c41f429c>) (ArrowFunction)
- [EngineRegistry.record](<engine-registry.cjs.md#s-16e1ffd3b44b809e>) (MethodDeclaration)
- [EngineRegistry.open](<engine-registry.cjs.md#s-d94730f5ef785e5f>) (MethodDeclaration)
- [EngineRegistry.open.input](<engine-registry.cjs.md#s-fc98a438951bc5ae>) (SchemaBinding)
- [EngineRegistry.open.&lt;anonymous@361:7&gt;](<engine-registry.cjs.md#s-e52e83fcf9a98d63>) (ArrowFunction)

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

- [EngineRegistry.checked](<engine-registry.cjs.md#s-8396dabf7b2bc949>) — [electron/ai/engine-registry.cjs:69](<../../../../../../electron/ai/engine-registry.cjs#L69>)
- [EngineRegistry.checked](<engine-registry.cjs.md#s-8396dabf7b2bc949>) — [electron/ai/engine-registry.cjs:77](<../../../../../../electron/ai/engine-registry.cjs#L77>)
- [EngineRegistry.configure.&lt;anonymous@132:34&gt;](<engine-registry.cjs.md#s-688aaee9ba17a08f>) — [electron/ai/engine-registry.cjs:149](<../../../../../../electron/ai/engine-registry.cjs#L149>)
- [EngineRegistry.binding](<engine-registry.cjs.md#s-780b5088edc49ed5>) — [electron/ai/engine-registry.cjs:237](<../../../../../../electron/ai/engine-registry.cjs#L237>)
- [EngineRegistry.open](<engine-registry.cjs.md#s-d94730f5ef785e5f>) — [electron/ai/engine-registry.cjs:369](<../../../../../../electron/ai/engine-registry.cjs#L369>)
- [EngineRegistry.open](<engine-registry.cjs.md#s-d94730f5ef785e5f>) — [electron/ai/engine-registry.cjs:380](<../../../../../../electron/ai/engine-registry.cjs#L380>)
- [EngineRegistry.open](<engine-registry.cjs.md#s-d94730f5ef785e5f>) — [electron/ai/engine-registry.cjs:383](<../../../../../../electron/ai/engine-registry.cjs#L383>)

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

- [EnginePackageRegistry.constructor](<../engines/registry/registry.cjs.md#s-67d4e7282499da54>) — [electron/ai/engine-registry.cjs:43](<../../../../../../electron/ai/engine-registry.cjs#L43>)

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
| {       agents,       chooseFolder,       openPath,       adapterImpl = adapter,       processOptions = {},     } | { adapterImpl?: typeof adapter; processOptions?: {}; } | compiler-inferred | optional, default present |

Returns: EngineRegistry (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [fixture](<engine-registry.test.cjs.md#s-65055825671a5a43>) — [electron/ai/engine-registry.test.cjs:108](<../../../../../../electron/ai/engine-registry.test.cjs#L108>)
- [&lt;anonymous@183:106&gt;](<engine-registry.test.cjs.md#s-4ed4a78d66cd545d>) — [electron/ai/engine-registry.test.cjs:209](<../../../../../../electron/ai/engine-registry.test.cjs#L209>)
- [&lt;anonymous@163:22&gt;](<../main.cjs.md#s-2232a6bfcb723f81>) — [electron/main.cjs:264](<../../../../../../electron/main.cjs#L264>)
- [main](<../../scripts/engine-chat-live.cjs.md#s-d9d25d752f6311a1>) — [scripts/engine-chat-live.cjs:88](<../../../../../../scripts/engine-chat-live.cjs#L88>)

Unresolved / external call sites: 1.

- path.join — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:56](<../../../../../../electron/ai/engine-registry.cjs#L56>)

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

<a id="s-8ab6043db31cc707"></a>

## EngineRegistry.registration

[electron/ai/engine-registry.cjs:64](<../../../../../../electron/ai/engine-registry.cjs#L64>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineRegistry](<engine-registry.cjs.md#s-90dfc3f14ffbdfd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [readJson](<../core/persistence/json-store.cjs.md#s-7f9e3b493f3ab942>) — [electron/ai/engine-registry.cjs:65](<../../../../../../electron/ai/engine-registry.cjs#L65>)

**Called by (statically resolved):**

- [EngineRegistry.state](<engine-registry.cjs.md#s-06645e4647def7ef>) — [electron/ai/engine-registry.cjs:83](<../../../../../../electron/ai/engine-registry.cjs#L83>)
- [EngineRegistry.probe.&lt;anonymous@196:34&gt;](<engine-registry.cjs.md#s-97c54759e2c0190b>) — [electron/ai/engine-registry.cjs:197](<../../../../../../electron/ai/engine-registry.cjs#L197>)
- [EngineRegistry.execute.&lt;anonymous@251:7&gt;](<engine-registry.cjs.md#s-b3a7dd18c41f429c>) — [electron/ai/engine-registry.cjs:271](<../../../../../../electron/ai/engine-registry.cjs#L271>)

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

<a id="s-68beb6cdccf02b7e"></a>

## EngineRegistry.registration.&lt;anonymous@65:32&gt;

[electron/ai/engine-registry.cjs:65](<../../../../../../electron/ai/engine-registry.cjs#L65>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineRegistry.registration](<engine-registry.cjs.md#s-8ab6043db31cc707>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| v | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [parse](<../shared/validation.cjs.md#s-f29367528a73f24d>) — [electron/ai/engine-registry.cjs:65](<../../../../../../electron/ai/engine-registry.cjs#L65>)

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

<a id="s-8396dabf7b2bc949"></a>

## EngineRegistry.checked

[electron/ai/engine-registry.cjs:67](<../../../../../../electron/ai/engine-registry.cjs#L67>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineRegistry](<engine-registry.cjs.md#s-90dfc3f14ffbdfd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| registration | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [denied](<engine-registry.cjs.md#s-8a1184d3181174dc>) — [electron/ai/engine-registry.cjs:69](<../../../../../../electron/ai/engine-registry.cjs#L69>)
- [inspectBundle](<chronoz-adapter.cjs.md#s-ca72c2c506d158b6>) — [electron/ai/engine-registry.cjs:72](<../../../../../../electron/ai/engine-registry.cjs#L72>)
- [denied](<engine-registry.cjs.md#s-8a1184d3181174dc>) — [electron/ai/engine-registry.cjs:77](<../../../../../../electron/ai/engine-registry.cjs#L77>)

**Called by (statically resolved):**

- [EngineRegistry.state](<engine-registry.cjs.md#s-06645e4647def7ef>) — [electron/ai/engine-registry.cjs:92](<../../../../../../electron/ai/engine-registry.cjs#L92>)
- [EngineRegistry.probe.&lt;anonymous@196:34&gt;](<engine-registry.cjs.md#s-97c54759e2c0190b>) — [electron/ai/engine-registry.cjs:198](<../../../../../../electron/ai/engine-registry.cjs#L198>)
- [EngineRegistry.execute.&lt;anonymous@251:7&gt;](<engine-registry.cjs.md#s-b3a7dd18c41f429c>) — [electron/ai/engine-registry.cjs:272](<../../../../../../electron/ai/engine-registry.cjs#L272>)

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

<a id="s-06645e4647def7ef"></a>

## EngineRegistry.state

[electron/ai/engine-registry.cjs:82](<../../../../../../electron/ai/engine-registry.cjs#L82>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineRegistry](<engine-registry.cjs.md#s-90dfc3f14ffbdfd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [EngineRegistry.registration](<engine-registry.cjs.md#s-8ab6043db31cc707>) — [electron/ai/engine-registry.cjs:83](<../../../../../../electron/ai/engine-registry.cjs#L83>)
- [EngineRegistry.checked](<engine-registry.cjs.md#s-8396dabf7b2bc949>) — [electron/ai/engine-registry.cjs:92](<../../../../../../electron/ai/engine-registry.cjs#L92>)

**Called by (statically resolved):**

- [&lt;anonymous@183:106&gt;](<engine-registry.test.cjs.md#s-4ed4a78d66cd545d>) — [electron/ai/engine-registry.test.cjs:209](<../../../../../../electron/ai/engine-registry.test.cjs#L209>)

Unresolved / external call sites: 2.

- new Date().toISOString — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:102](<../../../../../../electron/ai/engine-registry.cjs#L102>)
- Date — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:102](<../../../../../../electron/ai/engine-registry.cjs#L102>)

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

<a id="s-554a6859398689fa"></a>

## EngineRegistry.exclusive

[electron/ai/engine-registry.cjs:107](<../../../../../../electron/ai/engine-registry.cjs#L107>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

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

- [ModelRuntimeError.constructor](<../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/engine-registry.cjs:109](<../../../../../../electron/ai/engine-registry.cjs#L109>)
- [EngineRegistry.exclusive.cancel](<engine-registry.cjs.md#s-4ea56a6f46fa3c69>) — [electron/ai/engine-registry.cjs:116](<../../../../../../electron/ai/engine-registry.cjs#L116>)

**Called by (statically resolved):**

- [EngineRegistry.configure](<engine-registry.cjs.md#s-296305f9b4abd79c>) — [electron/ai/engine-registry.cjs:132](<../../../../../../electron/ai/engine-registry.cjs#L132>)
- [EngineRegistry.probe](<engine-registry.cjs.md#s-e093b5f5f5d00fe2>) — [electron/ai/engine-registry.cjs:196](<../../../../../../electron/ai/engine-registry.cjs#L196>)
- [EngineRegistry.execute](<engine-registry.cjs.md#s-918f1571185e7e73>) — [electron/ai/engine-registry.cjs:249](<../../../../../../electron/ai/engine-registry.cjs#L249>)

Unresolved / external call sites: 4.

- AbortController — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:113](<../../../../../../electron/ai/engine-registry.cjs#L113>)
- parentSignal?.addEventListener — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:115](<../../../../../../electron/ai/engine-registry.cjs#L115>)
- operation — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:119](<../../../../../../electron/ai/engine-registry.cjs#L119>)
- parentSignal?.removeEventListener — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:121](<../../../../../../electron/ai/engine-registry.cjs#L121>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:10](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:8](<../../../../../../electron/ai/engine-registry.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:8](<../../../../../../electron/engine-packages.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/excel-engine.test.cjs:17](<../../../../../../electron/excel-engine.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:8](<../../../../../../electron/excel-service.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:5](<../../../../../../electron/yahoo-engine-contract.test.cjs#L5>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:78](<../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L78>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:93](<../../../../../../tests/integration/architecture-contract.test.cjs#L93>) — file-import-only; coverage not established.

<a id="s-4ea56a6f46fa3c69"></a>

## EngineRegistry.exclusive.cancel

[electron/ai/engine-registry.cjs:114](<../../../../../../electron/ai/engine-registry.cjs#L114>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineRegistry.exclusive](<engine-registry.cjs.md#s-554a6859398689fa>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [EngineRegistry.exclusive](<engine-registry.cjs.md#s-554a6859398689fa>) — [electron/ai/engine-registry.cjs:116](<../../../../../../electron/ai/engine-registry.cjs#L116>)

Unresolved / external call sites: 1.

- controller.abort — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:114](<../../../../../../electron/ai/engine-registry.cjs#L114>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:10](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:8](<../../../../../../electron/ai/engine-registry.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:8](<../../../../../../electron/engine-packages.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/excel-engine.test.cjs:17](<../../../../../../electron/excel-engine.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:8](<../../../../../../electron/excel-service.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:5](<../../../../../../electron/yahoo-engine-contract.test.cjs#L5>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:78](<../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L78>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:93](<../../../../../../tests/integration/architecture-contract.test.cjs#L93>) — file-import-only; coverage not established.

<a id="s-15051950a5638b03"></a>

## EngineRegistry.cancel

[electron/ai/engine-registry.cjs:125](<../../../../../../electron/ai/engine-registry.cjs#L125>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

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

- this.running.controller.abort — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:126](<../../../../../../electron/ai/engine-registry.cjs#L126>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:10](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:8](<../../../../../../electron/ai/engine-registry.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:8](<../../../../../../electron/engine-packages.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/excel-engine.test.cjs:17](<../../../../../../electron/excel-engine.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:8](<../../../../../../electron/excel-service.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:5](<../../../../../../electron/yahoo-engine-contract.test.cjs#L5>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:78](<../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L78>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:93](<../../../../../../tests/integration/architecture-contract.test.cjs#L93>) — file-import-only; coverage not established.

<a id="s-922650a4d5052117"></a>

## EngineRegistry.shutdown

[electron/ai/engine-registry.cjs:128](<../../../../../../electron/ai/engine-registry.cjs#L128>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

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

- this.running?.controller.abort — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:129](<../../../../../../electron/ai/engine-registry.cjs#L129>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:10](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:8](<../../../../../../electron/ai/engine-registry.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:8](<../../../../../../electron/engine-packages.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/excel-engine.test.cjs:17](<../../../../../../electron/excel-engine.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:8](<../../../../../../electron/excel-service.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:5](<../../../../../../electron/yahoo-engine-contract.test.cjs#L5>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:78](<../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L78>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:93](<../../../../../../tests/integration/architecture-contract.test.cjs#L93>) — file-import-only; coverage not established.

<a id="s-296305f9b4abd79c"></a>

## EngineRegistry.configure

[electron/ai/engine-registry.cjs:131](<../../../../../../electron/ai/engine-registry.cjs#L131>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineRegistry](<engine-registry.cjs.md#s-90dfc3f14ffbdfd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| owner | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [EngineRegistry.exclusive](<engine-registry.cjs.md#s-554a6859398689fa>) — [electron/ai/engine-registry.cjs:132](<../../../../../../electron/ai/engine-registry.cjs#L132>)

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

<a id="s-688aaee9ba17a08f"></a>

## EngineRegistry.configure.&lt;anonymous@132:34&gt;

[electron/ai/engine-registry.cjs:132](<../../../../../../electron/ai/engine-registry.cjs#L132>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineRegistry.configure](<engine-registry.cjs.md#s-296305f9b4abd79c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| signal | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [inspectBundle](<chronoz-adapter.cjs.md#s-ca72c2c506d158b6>) — [electron/ai/engine-registry.cjs:135](<../../../../../../electron/ai/engine-registry.cjs#L135>)
- [runTrigger](<chronoz-adapter.cjs.md#s-1578e21474f428b1>) — [electron/ai/engine-registry.cjs:136](<../../../../../../electron/ai/engine-registry.cjs#L136>)
- [verifyReport](<chronoz-adapter.cjs.md#s-d95eb12fa1b37a46>) — [electron/ai/engine-registry.cjs:146](<../../../../../../electron/ai/engine-registry.cjs#L146>)
- [inspectBundle](<chronoz-adapter.cjs.md#s-ca72c2c506d158b6>) — [electron/ai/engine-registry.cjs:147](<../../../../../../electron/ai/engine-registry.cjs#L147>)
- [denied](<engine-registry.cjs.md#s-8a1184d3181174dc>) — [electron/ai/engine-registry.cjs:149](<../../../../../../electron/ai/engine-registry.cjs#L149>)
- [ModelRuntimeError.constructor](<../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/engine-registry.cjs:153](<../../../../../../electron/ai/engine-registry.cjs#L153>)
- [EngineRegistry.probeResult](<engine-registry.cjs.md#s-62de64944a666b6c>) — [electron/ai/engine-registry.cjs:157](<../../../../../../electron/ai/engine-registry.cjs#L157>)
- [writeJson](<../core/persistence/json-store.cjs.md#s-5030c6156f98dba1>) — [electron/ai/engine-registry.cjs:158](<../../../../../../electron/ai/engine-registry.cjs#L158>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- this.chooseFolder — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:133](<../../../../../../electron/ai/engine-registry.cjs#L133>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:10](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:8](<../../../../../../electron/ai/engine-registry.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:8](<../../../../../../electron/engine-packages.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/excel-engine.test.cjs:17](<../../../../../../electron/excel-engine.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:8](<../../../../../../electron/excel-service.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:5](<../../../../../../electron/yahoo-engine-contract.test.cjs#L5>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:78](<../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L78>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:93](<../../../../../../tests/integration/architecture-contract.test.cjs#L93>) — file-import-only; coverage not established.

<a id="s-62de64944a666b6c"></a>

## EngineRegistry.probeResult

[electron/ai/engine-registry.cjs:173](<../../../../../../electron/ai/engine-registry.cjs#L173>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

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

- [EngineRegistry.configure.&lt;anonymous@132:34&gt;](<engine-registry.cjs.md#s-688aaee9ba17a08f>) — [electron/ai/engine-registry.cjs:157](<../../../../../../electron/ai/engine-registry.cjs#L157>)
- [EngineRegistry.probe.&lt;anonymous@196:34&gt;](<engine-registry.cjs.md#s-97c54759e2c0190b>) — [electron/ai/engine-registry.cjs:210](<../../../../../../electron/ai/engine-registry.cjs#L210>)

Unresolved / external call sites: 2.

- new Date().toISOString — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:192](<../../../../../../electron/ai/engine-registry.cjs#L192>)
- Date — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:192](<../../../../../../electron/ai/engine-registry.cjs#L192>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:10](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:8](<../../../../../../electron/ai/engine-registry.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:8](<../../../../../../electron/engine-packages.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/excel-engine.test.cjs:17](<../../../../../../electron/excel-engine.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:8](<../../../../../../electron/excel-service.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:5](<../../../../../../electron/yahoo-engine-contract.test.cjs#L5>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:78](<../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L78>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:93](<../../../../../../tests/integration/architecture-contract.test.cjs#L93>) — file-import-only; coverage not established.

<a id="s-e093b5f5f5d00fe2"></a>

## EngineRegistry.probe

[electron/ai/engine-registry.cjs:195](<../../../../../../electron/ai/engine-registry.cjs#L195>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineRegistry](<engine-registry.cjs.md#s-90dfc3f14ffbdfd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| owner | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [EngineRegistry.exclusive](<engine-registry.cjs.md#s-554a6859398689fa>) — [electron/ai/engine-registry.cjs:196](<../../../../../../electron/ai/engine-registry.cjs#L196>)

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

<a id="s-97c54759e2c0190b"></a>

## EngineRegistry.probe.&lt;anonymous@196:34&gt;

[electron/ai/engine-registry.cjs:196](<../../../../../../electron/ai/engine-registry.cjs#L196>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineRegistry.probe](<engine-registry.cjs.md#s-e093b5f5f5d00fe2>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| signal | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [EngineRegistry.registration](<engine-registry.cjs.md#s-8ab6043db31cc707>) — [electron/ai/engine-registry.cjs:197](<../../../../../../electron/ai/engine-registry.cjs#L197>)
- [EngineRegistry.checked](<engine-registry.cjs.md#s-8396dabf7b2bc949>) — [electron/ai/engine-registry.cjs:198](<../../../../../../electron/ai/engine-registry.cjs#L198>)
- [runTrigger](<chronoz-adapter.cjs.md#s-1578e21474f428b1>) — [electron/ai/engine-registry.cjs:199](<../../../../../../electron/ai/engine-registry.cjs#L199>)
- [verifyReport](<chronoz-adapter.cjs.md#s-d95eb12fa1b37a46>) — [electron/ai/engine-registry.cjs:209](<../../../../../../electron/ai/engine-registry.cjs#L209>)
- [EngineRegistry.probeResult](<engine-registry.cjs.md#s-62de64944a666b6c>) — [electron/ai/engine-registry.cjs:210](<../../../../../../electron/ai/engine-registry.cjs#L210>)
- [writeJson](<../core/persistence/json-store.cjs.md#s-5030c6156f98dba1>) — [electron/ai/engine-registry.cjs:211](<../../../../../../electron/ai/engine-registry.cjs#L211>)

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

<a id="s-780b5088edc49ed5"></a>

## EngineRegistry.binding

[electron/ai/engine-registry.cjs:220](<../../../../../../electron/ai/engine-registry.cjs#L220>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineRegistry](<engine-registry.cjs.md#s-90dfc3f14ffbdfd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [denied](<engine-registry.cjs.md#s-8a1184d3181174dc>) — [electron/ai/engine-registry.cjs:237](<../../../../../../electron/ai/engine-registry.cjs#L237>)
- [sha](<chronoz-adapter.cjs.md#s-c95e7f0287adc21f>) — [electron/ai/engine-registry.cjs:243](<../../../../../../electron/ai/engine-registry.cjs#L243>)

**Called by (statically resolved):**

- [EngineRegistry.execute.&lt;anonymous@251:7&gt;](<engine-registry.cjs.md#s-b3a7dd18c41f429c>) — [electron/ai/engine-registry.cjs:252](<../../../../../../electron/ai/engine-registry.cjs#L252>)
- [EngineRegistry.open](<engine-registry.cjs.md#s-d94730f5ef785e5f>) — [electron/ai/engine-registry.cjs:358](<../../../../../../electron/ai/engine-registry.cjs#L358>)

Unresolved / external call sites: 4.

- this.agents.get — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:221](<../../../../../../electron/ai/engine-registry.cjs#L221>)
- graph?.nodes.find — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:223](<../../../../../../electron/ai/engine-registry.cjs#L223>)
- graph.edges.some — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:231](<../../../../../../electron/ai/engine-registry.cjs#L231>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:243](<../../../../../../electron/ai/engine-registry.cjs#L243>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:10](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:8](<../../../../../../electron/ai/engine-registry.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:8](<../../../../../../electron/engine-packages.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/excel-engine.test.cjs:17](<../../../../../../electron/excel-engine.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:8](<../../../../../../electron/excel-service.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:5](<../../../../../../electron/yahoo-engine-contract.test.cjs#L5>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:78](<../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L78>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:93](<../../../../../../tests/integration/architecture-contract.test.cjs#L93>) — file-import-only; coverage not established.

<a id="s-a78c9593f8d2970f"></a>

## EngineRegistry.binding.&lt;anonymous@224:7&gt;

[electron/ai/engine-registry.cjs:224](<../../../../../../electron/ai/engine-registry.cjs#L224>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineRegistry.binding](<engine-registry.cjs.md#s-780b5088edc49ed5>).

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

<a id="s-c16d9752032b500b"></a>

## EngineRegistry.binding.&lt;anonymous@232:9&gt;

[electron/ai/engine-registry.cjs:232](<../../../../../../electron/ai/engine-registry.cjs#L232>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineRegistry.binding](<engine-registry.cjs.md#s-780b5088edc49ed5>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| e | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- graph.nodes.some — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:234](<../../../../../../electron/ai/engine-registry.cjs#L234>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:10](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:8](<../../../../../../electron/ai/engine-registry.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:8](<../../../../../../electron/engine-packages.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/excel-engine.test.cjs:17](<../../../../../../electron/excel-engine.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:8](<../../../../../../electron/excel-service.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:5](<../../../../../../electron/yahoo-engine-contract.test.cjs#L5>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:78](<../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L78>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:93](<../../../../../../tests/integration/architecture-contract.test.cjs#L93>) — file-import-only; coverage not established.

<a id="s-48b9d55ba28cd3d3"></a>

## EngineRegistry.binding.&lt;anonymous@232:9&gt;.&lt;anonymous@234:28&gt;

[electron/ai/engine-registry.cjs:234](<../../../../../../electron/ai/engine-registry.cjs#L234>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineRegistry.binding.&lt;anonymous@232:9&gt;](<engine-registry.cjs.md#s-c16d9752032b500b>).

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

<a id="s-918f1571185e7e73"></a>

## EngineRegistry.execute

[electron/ai/engine-registry.cjs:247](<../../../../../../electron/ai/engine-registry.cjs#L247>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

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

- [parse](<../shared/validation.cjs.md#s-f29367528a73f24d>) — [electron/ai/engine-registry.cjs:248](<../../../../../../electron/ai/engine-registry.cjs#L248>)
- [EngineRegistry.exclusive](<engine-registry.cjs.md#s-554a6859398689fa>) — [electron/ai/engine-registry.cjs:249](<../../../../../../electron/ai/engine-registry.cjs#L249>)

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

<a id="s-b3a7dd18c41f429c"></a>

## EngineRegistry.execute.&lt;anonymous@251:7&gt;

[electron/ai/engine-registry.cjs:251](<../../../../../../electron/ai/engine-registry.cjs#L251>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineRegistry.execute](<engine-registry.cjs.md#s-918f1571185e7e73>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| signal | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [EngineRegistry.binding](<engine-registry.cjs.md#s-780b5088edc49ed5>) — [electron/ai/engine-registry.cjs:252](<../../../../../../electron/ai/engine-registry.cjs#L252>)
- [EngineRegistry.registration](<engine-registry.cjs.md#s-8ab6043db31cc707>) — [electron/ai/engine-registry.cjs:271](<../../../../../../electron/ai/engine-registry.cjs#L271>)
- [EngineRegistry.checked](<engine-registry.cjs.md#s-8396dabf7b2bc949>) — [electron/ai/engine-registry.cjs:272](<../../../../../../electron/ai/engine-registry.cjs#L272>)
- [runTrigger](<chronoz-adapter.cjs.md#s-1578e21474f428b1>) — [electron/ai/engine-registry.cjs:273](<../../../../../../electron/ai/engine-registry.cjs#L273>)
- [verifyReport](<chronoz-adapter.cjs.md#s-d95eb12fa1b37a46>) — [electron/ai/engine-registry.cjs:279](<../../../../../../electron/ai/engine-registry.cjs#L279>)
- [ModelRuntimeError.constructor](<../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/engine-registry.cjs:285](<../../../../../../electron/ai/engine-registry.cjs#L285>)
- [safeDirectory](<../core/persistence/json-store.cjs.md#s-429fa54bc1a890a0>) — [electron/ai/engine-registry.cjs:298](<../../../../../../electron/ai/engine-registry.cjs#L298>)
- [EngineRegistry.record](<engine-registry.cjs.md#s-16e1ffd3b44b809e>) — [electron/ai/engine-registry.cjs:317](<../../../../../../electron/ai/engine-registry.cjs#L317>)
- [EngineRegistry.record](<engine-registry.cjs.md#s-16e1ffd3b44b809e>) — [electron/ai/engine-registry.cjs:330](<../../../../../../electron/ai/engine-registry.cjs#L330>)
- [ModelRuntimeError.constructor](<../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/engine-registry.cjs:338](<../../../../../../electron/ai/engine-registry.cjs#L338>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 14.

- randomUUID — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:255](<../../../../../../electron/ai/engine-registry.cjs#L255>)
- new Date().toISOString — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:267](<../../../../../../electron/ai/engine-registry.cjs#L267>)
- Date — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:267](<../../../../../../electron/ai/engine-registry.cjs#L267>)
- Date.now — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:269](<../../../../../../electron/ai/engine-registry.cjs#L269>)
- path.join — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:293](<../../../../../../electron/ai/engine-registry.cjs#L293>)
- require — module-loader; [electron/ai/engine-registry.cjs:298](<../../../../../../electron/ai/engine-registry.cjs#L298>)
- path.dirname — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:298](<../../../../../../electron/ai/engine-registry.cjs#L298>)
- fs.writeFile — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:299](<../../../../../../electron/ai/engine-registry.cjs#L299>)
- 6 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:10](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:8](<../../../../../../electron/ai/engine-registry.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:8](<../../../../../../electron/engine-packages.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/excel-engine.test.cjs:17](<../../../../../../electron/excel-engine.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:8](<../../../../../../electron/excel-service.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:5](<../../../../../../electron/yahoo-engine-contract.test.cjs#L5>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:78](<../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L78>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:93](<../../../../../../tests/integration/architecture-contract.test.cjs#L93>) — file-import-only; coverage not established.

<a id="s-16e1ffd3b44b809e"></a>

## EngineRegistry.record

[electron/ai/engine-registry.cjs:347](<../../../../../../electron/ai/engine-registry.cjs#L347>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineRegistry](<engine-registry.cjs.md#s-90dfc3f14ffbdfd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| run | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [writeJson](<../core/persistence/json-store.cjs.md#s-5030c6156f98dba1>) — [electron/ai/engine-registry.cjs:348](<../../../../../../electron/ai/engine-registry.cjs#L348>)

**Called by (statically resolved):**

- [EngineRegistry.execute.&lt;anonymous@251:7&gt;](<engine-registry.cjs.md#s-b3a7dd18c41f429c>) — [electron/ai/engine-registry.cjs:317](<../../../../../../electron/ai/engine-registry.cjs#L317>)
- [EngineRegistry.execute.&lt;anonymous@251:7&gt;](<engine-registry.cjs.md#s-b3a7dd18c41f429c>) — [electron/ai/engine-registry.cjs:330](<../../../../../../electron/ai/engine-registry.cjs#L330>)

Unresolved / external call sites: 1.

- path.join — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:349](<../../../../../../electron/ai/engine-registry.cjs#L349>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:10](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:8](<../../../../../../electron/ai/engine-registry.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:8](<../../../../../../electron/engine-packages.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/excel-engine.test.cjs:17](<../../../../../../electron/excel-engine.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:8](<../../../../../../electron/excel-service.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:5](<../../../../../../electron/yahoo-engine-contract.test.cjs#L5>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:78](<../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L78>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:93](<../../../../../../tests/integration/architecture-contract.test.cjs#L93>) — file-import-only; coverage not established.

<a id="s-d94730f5ef785e5f"></a>

## EngineRegistry.open

[electron/ai/engine-registry.cjs:353](<../../../../../../electron/ai/engine-registry.cjs#L353>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineRegistry](<engine-registry.cjs.md#s-90dfc3f14ffbdfd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| raw | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [EngineRegistry.binding](<engine-registry.cjs.md#s-780b5088edc49ed5>) — [electron/ai/engine-registry.cjs:358](<../../../../../../electron/ai/engine-registry.cjs#L358>)
- [readJson](<../core/persistence/json-store.cjs.md#s-7f9e3b493f3ab942>) — [electron/ai/engine-registry.cjs:359](<../../../../../../electron/ai/engine-registry.cjs#L359>)
- [denied](<engine-registry.cjs.md#s-8a1184d3181174dc>) — [electron/ai/engine-registry.cjs:369](<../../../../../../electron/ai/engine-registry.cjs#L369>)
- [boundedRead](<chronoz-adapter.cjs.md#s-ab7f70176d8b6e40>) — [electron/ai/engine-registry.cjs:375](<../../../../../../electron/ai/engine-registry.cjs#L375>)
- [sha](<chronoz-adapter.cjs.md#s-c95e7f0287adc21f>) — [electron/ai/engine-registry.cjs:377](<../../../../../../electron/ai/engine-registry.cjs#L377>)
- [denied](<engine-registry.cjs.md#s-8a1184d3181174dc>) — [electron/ai/engine-registry.cjs:380](<../../../../../../electron/ai/engine-registry.cjs#L380>)
- [denied](<engine-registry.cjs.md#s-8a1184d3181174dc>) — [electron/ai/engine-registry.cjs:383](<../../../../../../electron/ai/engine-registry.cjs#L383>)

**Called by (statically resolved):**

- [main](<../../scripts/engine-chat-live.cjs.md#s-d9d25d752f6311a1>) — [scripts/engine-chat-live.cjs:128](<../../../../../../scripts/engine-chat-live.cjs#L128>)

Unresolved / external call sites: 5.

- path.join — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:360](<../../../../../../electron/ai/engine-registry.cjs#L360>)
- path.join — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:370](<../../../../../../electron/ai/engine-registry.cjs#L370>)
- bytes.subarray(0, 5).toString — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:378](<../../../../../../electron/ai/engine-registry.cjs#L378>)
- bytes.subarray — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:378](<../../../../../../electron/ai/engine-registry.cjs#L378>)
- this.openPath — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:381](<../../../../../../electron/ai/engine-registry.cjs#L381>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:10](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:8](<../../../../../../electron/ai/engine-registry.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:8](<../../../../../../electron/engine-packages.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/excel-engine.test.cjs:17](<../../../../../../electron/excel-engine.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:8](<../../../../../../electron/excel-service.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:5](<../../../../../../electron/yahoo-engine-contract.test.cjs#L5>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:78](<../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L78>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:93](<../../../../../../tests/integration/architecture-contract.test.cjs#L93>) — file-import-only; coverage not established.

<a id="s-fc98a438951bc5ae"></a>

## EngineRegistry.open.input

[electron/ai/engine-registry.cjs:354](<../../../../../../electron/ai/engine-registry.cjs#L354>) · SchemaBinding · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineRegistry.open](<engine-registry.cjs.md#s-d94730f5ef785e5f>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

- [parse](<../shared/validation.cjs.md#s-f29367528a73f24d>) — [electron/ai/engine-registry.cjs:354](<../../../../../../electron/ai/engine-registry.cjs#L354>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- bindingInput.extend({ runId: z.string().uuid() }).strict — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:355](<../../../../../../electron/ai/engine-registry.cjs#L355>)
- bindingInput.extend — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:355](<../../../../../../electron/ai/engine-registry.cjs#L355>)
- z.string().uuid — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:355](<../../../../../../electron/ai/engine-registry.cjs#L355>)
- z.string — external-or-dynamic-dispatch; [electron/ai/engine-registry.cjs:355](<../../../../../../electron/ai/engine-registry.cjs#L355>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:10](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:8](<../../../../../../electron/ai/engine-registry.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:8](<../../../../../../electron/engine-packages.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/excel-engine.test.cjs:17](<../../../../../../electron/excel-engine.test.cjs#L17>) — file-import-only; coverage not established.
- [electron/excel-service.test.cjs:8](<../../../../../../electron/excel-service.test.cjs#L8>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:5](<../../../../../../electron/yahoo-engine-contract.test.cjs#L5>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:78](<../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L78>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:93](<../../../../../../tests/integration/architecture-contract.test.cjs#L93>) — file-import-only; coverage not established.

<a id="s-e52e83fcf9a98d63"></a>

## EngineRegistry.open.&lt;anonymous@361:7&gt;

[electron/ai/engine-registry.cjs:361](<../../../../../../electron/ai/engine-registry.cjs#L361>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineRegistry.open](<engine-registry.cjs.md#s-d94730f5ef785e5f>).

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
