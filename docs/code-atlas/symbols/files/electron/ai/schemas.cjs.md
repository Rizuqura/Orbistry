# electron/ai/schemas.cjs: symbols

[Atlas](<../../../../README.md>) / [Retained AI runtime](<../../../../modules/ai-runtime.md>) / [electron/ai/schemas.cjs:1](<../../../../../../electron/ai/schemas.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/schemas.cjs](<schemas.cjs.md#s-6693489ec78adeba>) (Module)
- [providerId](<schemas.cjs.md#s-0cc761e7c918d390>) (SchemaBinding)
- [credentialInput](<schemas.cjs.md#s-498dcf3f5bc309b9>) (SchemaBinding)
- [credentialProvider](<schemas.cjs.md#s-825c894f9ec2c8a6>) (SchemaBinding)
- [parseCredential](<schemas.cjs.md#s-b69a42e30e64ae53>) (FunctionDeclaration)
- [settingsSchema](<schemas.cjs.md#s-0eb862618f55f6f1>) (SchemaBinding)
- [settingsSchema.&lt;anonymous@65:11&gt;](<schemas.cjs.md#s-567f73e50ae868b4>) (ArrowFunction)
- [settingsSchema.&lt;anonymous@67:5&gt;](<schemas.cjs.md#s-996d3ee73d17c249>) (ArrowFunction)
- [geminiModel](<schemas.cjs.md#s-b766b12f3fe0fa8a>) (SchemaBinding)
- [geminiPage](<schemas.cjs.md#s-dd31eb2f37fc0ba9>) (SchemaBinding)
- [tokenCount](<schemas.cjs.md#s-f630c43aa879e8fe>) (SchemaBinding)
- [geminiChunk](<schemas.cjs.md#s-c6e950c213a34e76>) (SchemaBinding)

<a id="s-6693489ec78adeba"></a>

## electron/ai/schemas.cjs

[electron/ai/schemas.cjs:1](<../../../../../../electron/ai/schemas.cjs#L1>) · Module · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- require — module-loader; [electron/ai/schemas.cjs:1](<../../../../../../electron/ai/schemas.cjs#L1>)
- require — module-loader; [electron/ai/schemas.cjs:5](<../../../../../../electron/ai/schemas.cjs#L5>)
- require — module-loader; [electron/ai/schemas.cjs:7](<../../../../../../electron/ai/schemas.cjs#L7>)

**Related tests / acceptance harnesses:**

- [electron/ai/credential-store.test.cjs:7](<../../../../../../electron/ai/credential-store.test.cjs#L7>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:228](<../../../../../../tests/integration/architecture-contract.test.cjs#L228>) — file-import-only; coverage not established.

<a id="s-0cc761e7c918d390"></a>

## providerId

[electron/ai/schemas.cjs:11](<../../../../../../electron/ai/schemas.cjs#L11>) · SchemaBinding · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: providerId ([electron/ai/schemas.cjs:1](<../../../../../../electron/ai/schemas.cjs#L1>)).

Lexical owner: [electron/ai/schemas.cjs](<schemas.cjs.md#s-6693489ec78adeba>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- z.enum — external-or-dynamic-dispatch; [electron/ai/schemas.cjs:11](<../../../../../../electron/ai/schemas.cjs#L11>)

**Related tests / acceptance harnesses:**

- [electron/ai/credential-store.test.cjs:7](<../../../../../../electron/ai/credential-store.test.cjs#L7>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:228](<../../../../../../tests/integration/architecture-contract.test.cjs#L228>) — file-import-only; coverage not established.

<a id="s-498dcf3f5bc309b9"></a>

## credentialInput

[electron/ai/schemas.cjs:18](<../../../../../../electron/ai/schemas.cjs#L18>) · SchemaBinding · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: credentialInput ([electron/ai/schemas.cjs:1](<../../../../../../electron/ai/schemas.cjs#L1>)).

Lexical owner: [electron/ai/schemas.cjs](<schemas.cjs.md#s-6693489ec78adeba>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 8.

- z .object({ providerId: z.enum(&#91;"gemini", "nvidia", "openrouter", "litellm"&#93;), apiKey: z .string() .trim() .min(10) .max(512) // Authorization keys (AQ.*) contain dots; legacy AIza — external-or-dynamic-dispatch; [electron/ai/schemas.cjs:18](<../../../../../../electron/ai/schemas.cjs#L18>)
- z .object — external-or-dynamic-dispatch; [electron/ai/schemas.cjs:18](<../../../../../../electron/ai/schemas.cjs#L18>)
- z.enum — external-or-dynamic-dispatch; [electron/ai/schemas.cjs:20](<../../../../../../electron/ai/schemas.cjs#L20>)
- z .string() .trim() .min(10) .max(512) // Authorization keys (AQ.*) contain dots; legacy AIza keys do not. .regex — external-or-dynamic-dispatch; [electron/ai/schemas.cjs:21](<../../../../../../electron/ai/schemas.cjs#L21>)
- z .string() .trim() .min(10) .max — external-or-dynamic-dispatch; [electron/ai/schemas.cjs:21](<../../../../../../electron/ai/schemas.cjs#L21>)
- z .string() .trim() .min — external-or-dynamic-dispatch; [electron/ai/schemas.cjs:21](<../../../../../../electron/ai/schemas.cjs#L21>)
- z .string() .trim — external-or-dynamic-dispatch; [electron/ai/schemas.cjs:21](<../../../../../../electron/ai/schemas.cjs#L21>)
- z .string — external-or-dynamic-dispatch; [electron/ai/schemas.cjs:21](<../../../../../../electron/ai/schemas.cjs#L21>)

**Related tests / acceptance harnesses:**

- [electron/ai/credential-store.test.cjs:7](<../../../../../../electron/ai/credential-store.test.cjs#L7>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:228](<../../../../../../tests/integration/architecture-contract.test.cjs#L228>) — file-import-only; coverage not established.

<a id="s-825c894f9ec2c8a6"></a>

## credentialProvider

[electron/ai/schemas.cjs:30](<../../../../../../electron/ai/schemas.cjs#L30>) · SchemaBinding · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: credentialProvider ([electron/ai/schemas.cjs:1](<../../../../../../electron/ai/schemas.cjs#L1>)).

Lexical owner: [electron/ai/schemas.cjs](<schemas.cjs.md#s-6693489ec78adeba>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- z .object({ providerId: z.enum(&#91;"gemini", "nvidia", "openrouter", "litellm"&#93;), }) .strict — external-or-dynamic-dispatch; [electron/ai/schemas.cjs:30](<../../../../../../electron/ai/schemas.cjs#L30>)
- z .object — external-or-dynamic-dispatch; [electron/ai/schemas.cjs:30](<../../../../../../electron/ai/schemas.cjs#L30>)
- z.enum — external-or-dynamic-dispatch; [electron/ai/schemas.cjs:32](<../../../../../../electron/ai/schemas.cjs#L32>)

**Related tests / acceptance harnesses:**

- [electron/ai/credential-store.test.cjs:7](<../../../../../../electron/ai/credential-store.test.cjs#L7>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:228](<../../../../../../tests/integration/architecture-contract.test.cjs#L228>) — file-import-only; coverage not established.

<a id="s-b69a42e30e64ae53"></a>

## parseCredential

[electron/ai/schemas.cjs:36](<../../../../../../electron/ai/schemas.cjs#L36>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

Validates supported credential operations with content-free errors; retired infrastructure credentials cannot be configured.

Purpose evidence: jsdoc.

Exported as: parseCredential ([electron/ai/schemas.cjs:1](<../../../../../../electron/ai/schemas.cjs#L1>)).

Lexical owner: [electron/ai/schemas.cjs](<schemas.cjs.md#s-6693489ec78adeba>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [parse](<../shared/validation.cjs.md#s-f29367528a73f24d>) — [electron/ai/schemas.cjs:37](<../../../../../../electron/ai/schemas.cjs#L37>)

**Called by (statically resolved):**

- [CredentialStore.save](<credential-store.cjs.md#s-b962c2d90c2198fb>) — [electron/ai/credential-store.cjs:95](<../../../../../../electron/ai/credential-store.cjs#L95>)
- [&lt;anonymous@89:107&gt;](<credential-store.test.cjs.md#s-98e7a59df07e47a2>) — [electron/ai/credential-store.test.cjs:95](<../../../../../../electron/ai/credential-store.test.cjs#L95>)
- [&lt;anonymous@89:107&gt;.&lt;anonymous@106:7&gt;](<credential-store.test.cjs.md#s-bbc530ab94f6a051>) — [electron/ai/credential-store.test.cjs:106](<../../../../../../electron/ai/credential-store.test.cjs#L106>)
- [registerAiIpc.&lt;anonymous@405:28&gt;.&lt;anonymous@406:23&gt;](<ipc.cjs.md#s-89a4e9ad1144b298>) — [electron/ai/ipc.cjs:407](<../../../../../../electron/ai/ipc.cjs#L407>)
- [ModelAccess.connect](<model-access.cjs.md#s-288ebd01a07b9da9>) — [electron/ai/model-access.cjs:71](<../../../../../../electron/ai/model-access.cjs#L71>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/credential-store.test.cjs:95](<../../../../../../electron/ai/credential-store.test.cjs#L95>) — static-call-site; coverage not established.
- [electron/ai/credential-store.test.cjs:106](<../../../../../../electron/ai/credential-store.test.cjs#L106>) — static-call-site; coverage not established.
- [electron/ai/credential-store.test.cjs:7](<../../../../../../electron/ai/credential-store.test.cjs#L7>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:228](<../../../../../../tests/integration/architecture-contract.test.cjs#L228>) — file-import-only; coverage not established.

<a id="s-0eb862618f55f6f1"></a>

## settingsSchema

[electron/ai/schemas.cjs:50](<../../../../../../electron/ai/schemas.cjs#L50>) · SchemaBinding · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: settingsSchema ([electron/ai/schemas.cjs:1](<../../../../../../electron/ai/schemas.cjs#L1>)).

Lexical owner: [electron/ai/schemas.cjs](<schemas.cjs.md#s-6693489ec78adeba>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 37.

- z .object({ schemaVersion: z.literal(1), providerId, modelId: z.string().min(1).max(200).nullable(), contextWindow: z.number().int().min(2048).max(REMOTE_CONTEXT_LIMIT), outputLimi — external-or-dynamic-dispatch; [electron/ai/schemas.cjs:50](<../../../../../../electron/ai/schemas.cjs#L50>)
- z .object({ schemaVersion: z.literal(1), providerId, modelId: z.string().min(1).max(200).nullable(), contextWindow: z.number().int().min(2048).max(REMOTE_CONTEXT_LIMIT), outputLimi — external-or-dynamic-dispatch; [electron/ai/schemas.cjs:50](<../../../../../../electron/ai/schemas.cjs#L50>)
- z .object({ schemaVersion: z.literal(1), providerId, modelId: z.string().min(1).max(200).nullable(), contextWindow: z.number().int().min(2048).max(REMOTE_CONTEXT_LIMIT), outputLimi — external-or-dynamic-dispatch; [electron/ai/schemas.cjs:50](<../../../../../../electron/ai/schemas.cjs#L50>)
- z .object — external-or-dynamic-dispatch; [electron/ai/schemas.cjs:50](<../../../../../../electron/ai/schemas.cjs#L50>)
- z.literal — external-or-dynamic-dispatch; [electron/ai/schemas.cjs:52](<../../../../../../electron/ai/schemas.cjs#L52>)
- z.string().min(1).max(200).nullable — external-or-dynamic-dispatch; [electron/ai/schemas.cjs:54](<../../../../../../electron/ai/schemas.cjs#L54>)
- z.string().min(1).max — external-or-dynamic-dispatch; [electron/ai/schemas.cjs:54](<../../../../../../electron/ai/schemas.cjs#L54>)
- z.string().min — external-or-dynamic-dispatch; [electron/ai/schemas.cjs:54](<../../../../../../electron/ai/schemas.cjs#L54>)
- 29 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/credential-store.test.cjs:7](<../../../../../../electron/ai/credential-store.test.cjs#L7>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:228](<../../../../../../tests/integration/architecture-contract.test.cjs#L228>) — file-import-only; coverage not established.

<a id="s-567f73e50ae868b4"></a>

## settingsSchema.&lt;anonymous@65:11&gt;

[electron/ai/schemas.cjs:65](<../../../../../../electron/ai/schemas.cjs#L65>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [settingsSchema](<schemas.cjs.md#s-0eb862618f55f6f1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| v | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/credential-store.test.cjs:7](<../../../../../../electron/ai/credential-store.test.cjs#L7>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:228](<../../../../../../tests/integration/architecture-contract.test.cjs#L228>) — file-import-only; coverage not established.

<a id="s-996d3ee73d17c249"></a>

## settingsSchema.&lt;anonymous@67:5&gt;

[electron/ai/schemas.cjs:67](<../../../../../../electron/ai/schemas.cjs#L67>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [settingsSchema](<schemas.cjs.md#s-0eb862618f55f6f1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| v | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/credential-store.test.cjs:7](<../../../../../../electron/ai/credential-store.test.cjs#L7>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:228](<../../../../../../tests/integration/architecture-contract.test.cjs#L228>) — file-import-only; coverage not established.

<a id="s-b766b12f3fe0fa8a"></a>

## geminiModel

[electron/ai/schemas.cjs:69](<../../../../../../electron/ai/schemas.cjs#L69>) · SchemaBinding · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/schemas.cjs](<schemas.cjs.md#s-6693489ec78adeba>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 20.

- z.object — external-or-dynamic-dispatch; [electron/ai/schemas.cjs:69](<../../../../../../electron/ai/schemas.cjs#L69>)
- z .string() .regex(/^models\\/&#91;A-Za-z0-9._-&#93;+$/) .max — external-or-dynamic-dispatch; [electron/ai/schemas.cjs:70](<../../../../../../electron/ai/schemas.cjs#L70>)
- z .string() .regex — external-or-dynamic-dispatch; [electron/ai/schemas.cjs:70](<../../../../../../electron/ai/schemas.cjs#L70>)
- z .string — external-or-dynamic-dispatch; [electron/ai/schemas.cjs:70](<../../../../../../electron/ai/schemas.cjs#L70>)
- z.string().max(200).optional — external-or-dynamic-dispatch; [electron/ai/schemas.cjs:74](<../../../../../../electron/ai/schemas.cjs#L74>)
- z.string().max — external-or-dynamic-dispatch; [electron/ai/schemas.cjs:74](<../../../../../../electron/ai/schemas.cjs#L74>)
- z.string — external-or-dynamic-dispatch; [electron/ai/schemas.cjs:74](<../../../../../../electron/ai/schemas.cjs#L74>)
- z.array — external-or-dynamic-dispatch; [electron/ai/schemas.cjs:75](<../../../../../../electron/ai/schemas.cjs#L75>)
- 12 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/credential-store.test.cjs:7](<../../../../../../electron/ai/credential-store.test.cjs#L7>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:228](<../../../../../../tests/integration/architecture-contract.test.cjs#L228>) — file-import-only; coverage not established.

<a id="s-dd31eb2f37fc0ba9"></a>

## geminiPage

[electron/ai/schemas.cjs:80](<../../../../../../electron/ai/schemas.cjs#L80>) · SchemaBinding · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: geminiPage ([electron/ai/schemas.cjs:1](<../../../../../../electron/ai/schemas.cjs#L1>)).

Lexical owner: [electron/ai/schemas.cjs](<schemas.cjs.md#s-6693489ec78adeba>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 7.

- z.object — external-or-dynamic-dispatch; [electron/ai/schemas.cjs:80](<../../../../../../electron/ai/schemas.cjs#L80>)
- z.array(geminiModel).max(1000).default — external-or-dynamic-dispatch; [electron/ai/schemas.cjs:81](<../../../../../../electron/ai/schemas.cjs#L81>)
- z.array(geminiModel).max — external-or-dynamic-dispatch; [electron/ai/schemas.cjs:81](<../../../../../../electron/ai/schemas.cjs#L81>)
- z.array — external-or-dynamic-dispatch; [electron/ai/schemas.cjs:81](<../../../../../../electron/ai/schemas.cjs#L81>)
- z.string().max(4096).optional — external-or-dynamic-dispatch; [electron/ai/schemas.cjs:82](<../../../../../../electron/ai/schemas.cjs#L82>)
- z.string().max — external-or-dynamic-dispatch; [electron/ai/schemas.cjs:82](<../../../../../../electron/ai/schemas.cjs#L82>)
- z.string — external-or-dynamic-dispatch; [electron/ai/schemas.cjs:82](<../../../../../../electron/ai/schemas.cjs#L82>)

**Related tests / acceptance harnesses:**

- [electron/ai/credential-store.test.cjs:7](<../../../../../../electron/ai/credential-store.test.cjs#L7>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:228](<../../../../../../tests/integration/architecture-contract.test.cjs#L228>) — file-import-only; coverage not established.

<a id="s-f630c43aa879e8fe"></a>

## tokenCount

[electron/ai/schemas.cjs:84](<../../../../../../electron/ai/schemas.cjs#L84>) · SchemaBinding · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/schemas.cjs](<schemas.cjs.md#s-6693489ec78adeba>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- z.number().int().nonnegative().optional — external-or-dynamic-dispatch; [electron/ai/schemas.cjs:84](<../../../../../../electron/ai/schemas.cjs#L84>)
- z.number().int().nonnegative — external-or-dynamic-dispatch; [electron/ai/schemas.cjs:84](<../../../../../../electron/ai/schemas.cjs#L84>)
- z.number().int — external-or-dynamic-dispatch; [electron/ai/schemas.cjs:84](<../../../../../../electron/ai/schemas.cjs#L84>)
- z.number — external-or-dynamic-dispatch; [electron/ai/schemas.cjs:84](<../../../../../../electron/ai/schemas.cjs#L84>)

**Related tests / acceptance harnesses:**

- [electron/ai/credential-store.test.cjs:7](<../../../../../../electron/ai/credential-store.test.cjs#L7>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:228](<../../../../../../tests/integration/architecture-contract.test.cjs#L228>) — file-import-only; coverage not established.

<a id="s-c6e950c213a34e76"></a>

## geminiChunk

[electron/ai/schemas.cjs:85](<../../../../../../electron/ai/schemas.cjs#L85>) · SchemaBinding · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: geminiChunk ([electron/ai/schemas.cjs:1](<../../../../../../electron/ai/schemas.cjs#L1>)).

Lexical owner: [electron/ai/schemas.cjs](<schemas.cjs.md#s-6693489ec78adeba>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 28.

- z.object — external-or-dynamic-dispatch; [electron/ai/schemas.cjs:85](<../../../../../../electron/ai/schemas.cjs#L85>)
- z .array( z.object({ index: z.number().int().optional(), content: z .object({ parts: z .array( z.object({ text: z.string().optional(), thought: z.boolean().optional(), }), ) .optio — external-or-dynamic-dispatch; [electron/ai/schemas.cjs:86](<../../../../../../electron/ai/schemas.cjs#L86>)
- z .array( z.object({ index: z.number().int().optional(), content: z .object({ parts: z .array( z.object({ text: z.string().optional(), thought: z.boolean().optional(), }), ) .optio — external-or-dynamic-dispatch; [electron/ai/schemas.cjs:86](<../../../../../../electron/ai/schemas.cjs#L86>)
- z .array — external-or-dynamic-dispatch; [electron/ai/schemas.cjs:86](<../../../../../../electron/ai/schemas.cjs#L86>)
- z.object — external-or-dynamic-dispatch; [electron/ai/schemas.cjs:88](<../../../../../../electron/ai/schemas.cjs#L88>)
- z.number().int().optional — external-or-dynamic-dispatch; [electron/ai/schemas.cjs:89](<../../../../../../electron/ai/schemas.cjs#L89>)
- z.number().int — external-or-dynamic-dispatch; [electron/ai/schemas.cjs:89](<../../../../../../electron/ai/schemas.cjs#L89>)
- z.number — external-or-dynamic-dispatch; [electron/ai/schemas.cjs:89](<../../../../../../electron/ai/schemas.cjs#L89>)
- 20 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/credential-store.test.cjs:7](<../../../../../../electron/ai/credential-store.test.cjs#L7>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:228](<../../../../../../tests/integration/architecture-contract.test.cjs#L228>) — file-import-only; coverage not established.
