# electron/ai/llm-front-office/experiment-contracts.cjs: symbols

[Atlas](<../../../../../README.md>) / [Retained AI runtime](<../../../../../modules/ai-runtime.md>) / [electron/ai/llm-front-office/experiment-contracts.cjs:1](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/llm-front-office/experiment-contracts.cjs](<experiment-contracts.cjs.md#s-be7d3013d8cd6ac8>) (Module)
- [id](<experiment-contracts.cjs.md#s-2ca83f59d4d42046>) (SchemaBinding)
- [modelId](<experiment-contracts.cjs.md#s-e9e410c16e3a01be>) (SchemaBinding)
- [modelId.&lt;anonymous@15:11&gt;](<experiment-contracts.cjs.md#s-78416da2394f53e3>) (ArrowFunction)
- [provider](<experiment-contracts.cjs.md#s-114bb1b4f848fa8f>) (SchemaBinding)
- [deploymentId](<experiment-contracts.cjs.md#s-fff34021696e15fa>) (SchemaBinding)
- [finite](<experiment-contracts.cjs.md#s-c3835dd06edcf101>) (SchemaBinding)
- [tokens](<experiment-contracts.cjs.md#s-6524e3f8d9a6d029>) (SchemaBinding)
- [capability](<experiment-contracts.cjs.md#s-e2ebe8e8f2b27b18>) (SchemaBinding)
- [nullableCount](<experiment-contracts.cjs.md#s-676e4e6d74362b77>) (SchemaBinding)
- [configSchema](<experiment-contracts.cjs.md#s-2b0840364244df29>) (SchemaBinding)
- [configSchema.&lt;anonymous@49:19&gt;](<experiment-contracts.cjs.md#s-c4c2def25a9e10f6>) (ArrowFunction)
- [configSchema.&lt;anonymous@49:19&gt;.&lt;anonymous@49:48&gt;](<experiment-contracts.cjs.md#s-44e180e00c389b94>) (ArrowFunction)
- [configSchema.&lt;anonymous@85:19&gt;](<experiment-contracts.cjs.md#s-f377d707a82df6ba>) (ArrowFunction)
- [configSchema.&lt;anonymous@104:11&gt;](<experiment-contracts.cjs.md#s-8c28894c6c564262>) (ArrowFunction)
- [profileSchema](<experiment-contracts.cjs.md#s-21a283888527a0fe>) (SchemaBinding)
- [evidenceSchema](<experiment-contracts.cjs.md#s-1223ff69e5a0cae6>) (SchemaBinding)
- [errorSchema](<experiment-contracts.cjs.md#s-1b73a61b2ae1aa83>) (SchemaBinding)
- [messageSchema](<experiment-contracts.cjs.md#s-c0e36a686ff51a7b>) (SchemaBinding)
- [conversationSchema](<experiment-contracts.cjs.md#s-b8dd1ea2dfe1de5e>) (SchemaBinding)
- [requestSchema](<experiment-contracts.cjs.md#s-e7adc0d26642224a>) (SchemaBinding)
- [validateConfig](<experiment-contracts.cjs.md#s-3012ca16a371ad08>) (FunctionDeclaration)
- [defaultConfig](<experiment-contracts.cjs.md#s-fc7106338dbce48b>) (FunctionDeclaration)

<a id="s-be7d3013d8cd6ac8"></a>

## electron/ai/llm-front-office/experiment-contracts.cjs

[electron/ai/llm-front-office/experiment-contracts.cjs:1](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L1>) · Module · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- require — module-loader; [electron/ai/llm-front-office/experiment-contracts.cjs:3](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L3>)
- require — module-loader; [electron/ai/llm-front-office/experiment-contracts.cjs:4](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L4>)
- z.iso.datetime — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:25](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L25>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:10](<../../../../../../../electron/ai/front-office-engine.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/front-office-evaluation.test.cjs:16](<../../../../../../../electron/ai/front-office-evaluation.test.cjs#L16>) — file-import-only; coverage not established.

<a id="s-2ca83f59d4d42046"></a>

## id

[electron/ai/llm-front-office/experiment-contracts.cjs:5](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L5>) · SchemaBinding · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: id ([electron/ai/llm-front-office/experiment-contracts.cjs:1](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L1>)).

Lexical owner: [electron/ai/llm-front-office/experiment-contracts.cjs](<experiment-contracts.cjs.md#s-be7d3013d8cd6ac8>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- z .string() .min(1) .max(128) .regex — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:5](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L5>)
- z .string() .min(1) .max — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:5](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L5>)
- z .string() .min — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:5](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L5>)
- z .string — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:5](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L5>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:10](<../../../../../../../electron/ai/front-office-engine.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/front-office-evaluation.test.cjs:16](<../../../../../../../electron/ai/front-office-evaluation.test.cjs#L16>) — file-import-only; coverage not established.

<a id="s-e9e410c16e3a01be"></a>

## modelId

[electron/ai/llm-front-office/experiment-contracts.cjs:10](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L10>) · SchemaBinding · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: modelId ([electron/ai/llm-front-office/experiment-contracts.cjs:1](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L1>)).

Lexical owner: [electron/ai/llm-front-office/experiment-contracts.cjs](<experiment-contracts.cjs.md#s-be7d3013d8cd6ac8>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- z .string() .min(1) .max(200) .regex(/^~?&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9._:/-&#93;*$/) .refine — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:10](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L10>)
- z .string() .min(1) .max(200) .regex — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:10](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L10>)
- z .string() .min(1) .max — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:10](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L10>)
- z .string() .min — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:10](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L10>)
- z .string — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:10](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L10>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:10](<../../../../../../../electron/ai/front-office-engine.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/front-office-evaluation.test.cjs:16](<../../../../../../../electron/ai/front-office-evaluation.test.cjs#L16>) — file-import-only; coverage not established.

<a id="s-78416da2394f53e3"></a>

## modelId.&lt;anonymous@15:11&gt;

[electron/ai/llm-front-office/experiment-contracts.cjs:15](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L15>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [modelId](<experiment-contracts.cjs.md#s-e9e410c16e3a01be>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| v | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- v.includes — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:15](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L15>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:10](<../../../../../../../electron/ai/front-office-engine.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/front-office-evaluation.test.cjs:16](<../../../../../../../electron/ai/front-office-evaluation.test.cjs#L16>) — file-import-only; coverage not established.

<a id="s-114bb1b4f848fa8f"></a>

## provider

[electron/ai/llm-front-office/experiment-contracts.cjs:16](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L16>) · SchemaBinding · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: provider ([electron/ai/llm-front-office/experiment-contracts.cjs:1](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L1>)).

Lexical owner: [electron/ai/llm-front-office/experiment-contracts.cjs](<experiment-contracts.cjs.md#s-be7d3013d8cd6ac8>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- z.enum — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:16](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L16>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:10](<../../../../../../../electron/ai/front-office-engine.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/front-office-evaluation.test.cjs:16](<../../../../../../../electron/ai/front-office-evaluation.test.cjs#L16>) — file-import-only; coverage not established.

<a id="s-fff34021696e15fa"></a>

## deploymentId

[electron/ai/llm-front-office/experiment-contracts.cjs:17](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L17>) · SchemaBinding · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: deploymentId ([electron/ai/llm-front-office/experiment-contracts.cjs:1](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L1>)).

Lexical owner: [electron/ai/llm-front-office/experiment-contracts.cjs](<experiment-contracts.cjs.md#s-be7d3013d8cd6ac8>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- z .string() .min(1) .max(240) .regex — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:17](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L17>)
- z .string() .min(1) .max — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:17](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L17>)
- z .string() .min — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:17](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L17>)
- z .string — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:17](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L17>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:10](<../../../../../../../electron/ai/front-office-engine.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/front-office-evaluation.test.cjs:16](<../../../../../../../electron/ai/front-office-evaluation.test.cjs#L16>) — file-import-only; coverage not established.

<a id="s-c3835dd06edcf101"></a>

## finite

[electron/ai/llm-front-office/experiment-contracts.cjs:22](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L22>) · SchemaBinding · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/llm-front-office/experiment-contracts.cjs](<experiment-contracts.cjs.md#s-be7d3013d8cd6ac8>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- z.number().finite().nonnegative — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:22](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L22>)
- z.number().finite — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:22](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L22>)
- z.number — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:22](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L22>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:10](<../../../../../../../electron/ai/front-office-engine.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/front-office-evaluation.test.cjs:16](<../../../../../../../electron/ai/front-office-evaluation.test.cjs#L16>) — file-import-only; coverage not established.

<a id="s-6524e3f8d9a6d029"></a>

## tokens

[electron/ai/llm-front-office/experiment-contracts.cjs:23](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L23>) · SchemaBinding · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/llm-front-office/experiment-contracts.cjs](<experiment-contracts.cjs.md#s-be7d3013d8cd6ac8>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- z.number().int().positive().max — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:23](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L23>)
- z.number().int().positive — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:23](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L23>)
- z.number().int — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:23](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L23>)
- z.number — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:23](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L23>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:10](<../../../../../../../electron/ai/front-office-engine.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/front-office-evaluation.test.cjs:16](<../../../../../../../electron/ai/front-office-evaluation.test.cjs#L16>) — file-import-only; coverage not established.

<a id="s-e2ebe8e8f2b27b18"></a>

## capability

[electron/ai/llm-front-office/experiment-contracts.cjs:24](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L24>) · SchemaBinding · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/llm-front-office/experiment-contracts.cjs](<experiment-contracts.cjs.md#s-be7d3013d8cd6ac8>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- z.union — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:24](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L24>)
- z.boolean — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:24](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L24>)
- z.literal — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:24](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L24>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:10](<../../../../../../../electron/ai/front-office-engine.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/front-office-evaluation.test.cjs:16](<../../../../../../../electron/ai/front-office-evaluation.test.cjs#L16>) — file-import-only; coverage not established.

<a id="s-676e4e6d74362b77"></a>

## nullableCount

[electron/ai/llm-front-office/experiment-contracts.cjs:26](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L26>) · SchemaBinding · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: nullableCount ([electron/ai/llm-front-office/experiment-contracts.cjs:1](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L1>)).

Lexical owner: [electron/ai/llm-front-office/experiment-contracts.cjs](<experiment-contracts.cjs.md#s-be7d3013d8cd6ac8>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- z.number().int().nonnegative().nullable — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:26](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L26>)
- z.number().int().nonnegative — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:26](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L26>)
- z.number().int — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:26](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L26>)
- z.number — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:26](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L26>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:10](<../../../../../../../electron/ai/front-office-engine.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/front-office-evaluation.test.cjs:16](<../../../../../../../electron/ai/front-office-evaluation.test.cjs#L16>) — file-import-only; coverage not established.

<a id="s-2b0840364244df29"></a>

## configSchema

[electron/ai/llm-front-office/experiment-contracts.cjs:27](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L27>) · SchemaBinding · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/llm-front-office/experiment-contracts.cjs](<experiment-contracts.cjs.md#s-be7d3013d8cd6ac8>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 82.

- z .object({ schemaVersion: z.literal(1), enabled: z.boolean(), routing: z .object({ mode: z.enum(&#91;"manual", "auto"&#93;), priority: z.enum(&#91;"balanced", "quality", "cost", "speed"&#93;), se — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:27](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L27>)
- z .object({ schemaVersion: z.literal(1), enabled: z.boolean(), routing: z .object({ mode: z.enum(&#91;"manual", "auto"&#93;), priority: z.enum(&#91;"balanced", "quality", "cost", "speed"&#93;), se — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:27](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L27>)
- z .object — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:27](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L27>)
- z.literal — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:29](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L29>)
- z.boolean — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:30](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L30>)
- z .object({ mode: z.enum(&#91;"manual", "auto"&#93;), priority: z.enum(&#91;"balanced", "quality", "cost", "speed"&#93;), selectedDeploymentId: deploymentId.nullable(), allowedProviders: z.array(p — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:31](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L31>)
- z .object — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:31](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L31>)
- z.enum — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:33](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L33>)
- 74 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:10](<../../../../../../../electron/ai/front-office-engine.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/front-office-evaluation.test.cjs:16](<../../../../../../../electron/ai/front-office-evaluation.test.cjs#L16>) — file-import-only; coverage not established.

<a id="s-c4c2def25a9e10f6"></a>

## configSchema.&lt;anonymous@49:19&gt;

[electron/ai/llm-front-office/experiment-contracts.cjs:49](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L49>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [configSchema](<experiment-contracts.cjs.md#s-2b0840364244df29>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| w | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- Object.values(w).some — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:49](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L49>)
- Object.values — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:49](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L49>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:10](<../../../../../../../electron/ai/front-office-engine.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/front-office-evaluation.test.cjs:16](<../../../../../../../electron/ai/front-office-evaluation.test.cjs#L16>) — file-import-only; coverage not established.

<a id="s-44e180e00c389b94"></a>

## configSchema.&lt;anonymous@49:19&gt;.&lt;anonymous@49:48&gt;

[electron/ai/llm-front-office/experiment-contracts.cjs:49](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L49>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [configSchema.&lt;anonymous@49:19&gt;](<experiment-contracts.cjs.md#s-c4c2def25a9e10f6>).

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

- [electron/ai/front-office-engine.test.cjs:10](<../../../../../../../electron/ai/front-office-engine.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/front-office-evaluation.test.cjs:16](<../../../../../../../electron/ai/front-office-evaluation.test.cjs#L16>) — file-import-only; coverage not established.

<a id="s-f377d707a82df6ba"></a>

## configSchema.&lt;anonymous@85:19&gt;

[electron/ai/llm-front-office/experiment-contracts.cjs:85](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L85>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [configSchema](<experiment-contracts.cjs.md#s-2b0840364244df29>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| v | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- Number — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:87](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L87>)
- URL — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:87](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L87>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:10](<../../../../../../../electron/ai/front-office-engine.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/front-office-evaluation.test.cjs:16](<../../../../../../../electron/ai/front-office-evaluation.test.cjs#L16>) — file-import-only; coverage not established.

<a id="s-8c28894c6c564262"></a>

## configSchema.&lt;anonymous@104:11&gt;

[electron/ai/llm-front-office/experiment-contracts.cjs:104](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L104>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [configSchema](<experiment-contracts.cjs.md#s-2b0840364244df29>).

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

- [electron/ai/front-office-engine.test.cjs:10](<../../../../../../../electron/ai/front-office-engine.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/front-office-evaluation.test.cjs:16](<../../../../../../../electron/ai/front-office-evaluation.test.cjs#L16>) — file-import-only; coverage not established.

<a id="s-21a283888527a0fe"></a>

## profileSchema

[electron/ai/llm-front-office/experiment-contracts.cjs:105](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L105>) · SchemaBinding · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: profileSchema ([electron/ai/llm-front-office/experiment-contracts.cjs:1](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L1>)).

Lexical owner: [electron/ai/llm-front-office/experiment-contracts.cjs](<experiment-contracts.cjs.md#s-be7d3013d8cd6ac8>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 26.

- z .object({ deploymentId, modelId, logicalModelId: modelId, providerId: provider, label: z.string().min(1).max(300), inputModalities: z.array(z.string().max(30)).max(10), outputMod — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:105](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L105>)
- z .object — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:105](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L105>)
- z.string().min(1).max — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:111](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L111>)
- z.string().min — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:111](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L111>)
- z.string — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:111](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L111>)
- z.array(z.string().max(30)).max — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:112](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L112>)
- z.array — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:112](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L112>)
- z.string().max — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:112](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L112>)
- 18 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:10](<../../../../../../../electron/ai/front-office-engine.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/front-office-evaluation.test.cjs:16](<../../../../../../../electron/ai/front-office-evaluation.test.cjs#L16>) — file-import-only; coverage not established.

<a id="s-1223ff69e5a0cae6"></a>

## evidenceSchema

[electron/ai/llm-front-office/experiment-contracts.cjs:134](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L134>) · SchemaBinding · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: evidenceSchema ([electron/ai/llm-front-office/experiment-contracts.cjs:1](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L1>)).

Lexical owner: [electron/ai/llm-front-office/experiment-contracts.cjs](<experiment-contracts.cjs.md#s-be7d3013d8cd6ac8>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 26.

- z .object({ deploymentId, modelVersion: modelId, task: z.enum(&#91;"general", "finance", "format", "retrieval", "conversation"&#93;), benchmark: z.string().min(1).max(128), dataset: z.stri — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:134](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L134>)
- z .object — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:134](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L134>)
- z.enum — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:138](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L138>)
- z.string().min(1).max — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:139](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L139>)
- z.string().min — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:139](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L139>)
- z.string — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:139](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L139>)
- z.string().min(1).max — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:140](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L140>)
- z.string().min — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:140](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L140>)
- 18 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:10](<../../../../../../../electron/ai/front-office-engine.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/front-office-evaluation.test.cjs:16](<../../../../../../../electron/ai/front-office-evaluation.test.cjs#L16>) — file-import-only; coverage not established.

<a id="s-1b73a61b2ae1aa83"></a>

## errorSchema

[electron/ai/llm-front-office/experiment-contracts.cjs:157](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L157>) · SchemaBinding · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/llm-front-office/experiment-contracts.cjs](<experiment-contracts.cjs.md#s-be7d3013d8cd6ac8>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 8.

- z.object — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:157](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L157>)
- z.string().max — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:158](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L158>)
- z.string — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:158](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L158>)
- z.string().max — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:159](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L159>)
- z.string — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:159](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L159>)
- z.record — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:160](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L160>)
- z.string — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:160](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L160>)
- z.unknown — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:160](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L160>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:10](<../../../../../../../electron/ai/front-office-engine.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/front-office-evaluation.test.cjs:16](<../../../../../../../electron/ai/front-office-evaluation.test.cjs#L16>) — file-import-only; coverage not established.

<a id="s-c0e36a686ff51a7b"></a>

## messageSchema

[electron/ai/llm-front-office/experiment-contracts.cjs:162](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L162>) · SchemaBinding · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/llm-front-office/experiment-contracts.cjs](<experiment-contracts.cjs.md#s-be7d3013d8cd6ac8>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 10.

- z .object({ id, conversationId: id, role: z.enum(&#91;"user", "assistant"&#93;), content: z.string().min(1).max(2000000), createdAt: date, runId: id.optional(), userMessageId: id.optional( — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:162](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L162>)
- z .object — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:162](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L162>)
- z.enum — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:166](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L166>)
- z.string().min(1).max — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:167](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L167>)
- z.string().min — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:167](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L167>)
- z.string — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:167](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L167>)
- id.optional — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:169](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L169>)
- id.optional — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:170](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L170>)
- 2 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:10](<../../../../../../../electron/ai/front-office-engine.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/front-office-evaluation.test.cjs:16](<../../../../../../../electron/ai/front-office-evaluation.test.cjs#L16>) — file-import-only; coverage not established.

<a id="s-b8dd1ea2dfe1de5e"></a>

## conversationSchema

[electron/ai/llm-front-office/experiment-contracts.cjs:175](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L175>) · SchemaBinding · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: conversationSchema ([electron/ai/llm-front-office/experiment-contracts.cjs:1](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L1>)).

Lexical owner: [electron/ai/llm-front-office/experiment-contracts.cjs](<experiment-contracts.cjs.md#s-be7d3013d8cd6ac8>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 16.

- z .object({ schemaVersion: z.literal(5), mode: z.literal("front-office"), id, title: z.string().min(1).max(120), createdAt: date, updatedAt: date, selection: deploymentId.nullable( — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:175](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L175>)
- z .object — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:175](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L175>)
- z.literal — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:177](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L177>)
- z.literal — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:178](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L178>)
- z.string().min(1).max — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:180](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L180>)
- z.string().min — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:180](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L180>)
- z.string — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:180](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L180>)
- deploymentId.nullable — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:183](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L183>)
- 8 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:10](<../../../../../../../electron/ai/front-office-engine.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/front-office-evaluation.test.cjs:16](<../../../../../../../electron/ai/front-office-evaluation.test.cjs#L16>) — file-import-only; coverage not established.

<a id="s-e7adc0d26642224a"></a>

## requestSchema

[electron/ai/llm-front-office/experiment-contracts.cjs:206](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L206>) · SchemaBinding · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: requestSchema ([electron/ai/llm-front-office/experiment-contracts.cjs:1](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L1>)).

Lexical owner: [electron/ai/llm-front-office/experiment-contracts.cjs](<experiment-contracts.cjs.md#s-be7d3013d8cd6ac8>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 11.

- z .object({ conversationId: id, requestId: id, userMessage: z.string().trim().min(1).max(200000), transport: z.enum(&#91;"direct", "litellm"&#93;).default("direct"), task: z .enum(&#91;"genera — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:206](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L206>)
- z .object — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:206](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L206>)
- z.string().trim().min(1).max — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:210](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L210>)
- z.string().trim().min — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:210](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L210>)
- z.string().trim — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:210](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L210>)
- z.string — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:210](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L210>)
- z.enum(&#91;"direct", "litellm"&#93;).default — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:211](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L211>)
- z.enum — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:211](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L211>)
- 3 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:10](<../../../../../../../electron/ai/front-office-engine.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/front-office-evaluation.test.cjs:16](<../../../../../../../electron/ai/front-office-evaluation.test.cjs#L16>) — file-import-only; coverage not established.

<a id="s-3012ca16a371ad08"></a>

## validateConfig

[electron/ai/llm-front-office/experiment-contracts.cjs:220](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L220>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Validate complete non-secret configuration; no silent unknown fields.

Purpose evidence: jsdoc.

Exported as: validateConfig ([electron/ai/llm-front-office/experiment-contracts.cjs:1](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L1>)).

Lexical owner: [electron/ai/llm-front-office/experiment-contracts.cjs](<experiment-contracts.cjs.md#s-be7d3013d8cd6ac8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [parse](<../../shared/validation.cjs.md#s-f29367528a73f24d>) — [electron/ai/llm-front-office/experiment-contracts.cjs:221](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L221>)
- [validateSchemaDefinition](<response-processor.cjs.md#s-8c18e97b6f76e62b>) — [electron/ai/llm-front-office/experiment-contracts.cjs:222](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L222>)

**Called by (statically resolved):**

- [&lt;anonymous@332:98&gt;.&lt;anonymous@346:19&gt;](<../front-office-engine.test.cjs.md#s-a954007272dd0951>) — [electron/ai/front-office-engine.test.cjs:346](<../../../../../../../electron/ai/front-office-engine.test.cjs#L346>)
- [validateExperimentalRun](<conversation-manager.cjs.md#s-ffc7705100d0fefb>) — [electron/ai/llm-front-office/conversation-manager.cjs:122](<../../../../../../../electron/ai/llm-front-office/conversation-manager.cjs#L122>)
- [defaultConfig](<experiment-contracts.cjs.md#s-fc7106338dbce48b>) — [electron/ai/llm-front-office/experiment-contracts.cjs:229](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L229>)
- [createLLMClient](<provider-gateway.cjs.md#s-865c43e6ea2bf755>) — [electron/ai/llm-front-office/provider-gateway.cjs:286](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L286>)
- [gatewayHealth](<provider-gateway.cjs.md#s-9b77cb86cb8f8044>) — [electron/ai/llm-front-office/provider-gateway.cjs:402](<../../../../../../../electron/ai/llm-front-office/provider-gateway.cjs#L402>)
- [FrontOfficeService.saveConfig](<service.cjs.md#s-eefc8f4ae26d619e>) — [electron/ai/llm-front-office/service.cjs:67](<../../../../../../../electron/ai/llm-front-office/service.cjs#L67>)

Unresolved / external call sites: 1.

- require — module-loader; [electron/ai/llm-front-office/experiment-contracts.cjs:222](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L222>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:346](<../../../../../../../electron/ai/front-office-engine.test.cjs#L346>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:10](<../../../../../../../electron/ai/front-office-engine.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/front-office-evaluation.test.cjs:16](<../../../../../../../electron/ai/front-office-evaluation.test.cjs#L16>) — file-import-only; coverage not established.

<a id="s-fc7106338dbce48b"></a>

## defaultConfig

[electron/ai/llm-front-office/experiment-contracts.cjs:228](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L228>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Return a fresh safe starting configuration, never a mutable shared object.

Purpose evidence: jsdoc.

Exported as: defaultConfig ([electron/ai/llm-front-office/experiment-contracts.cjs:1](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L1>)).

Lexical owner: [electron/ai/llm-front-office/experiment-contracts.cjs](<experiment-contracts.cjs.md#s-be7d3013d8cd6ac8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [validateConfig](<experiment-contracts.cjs.md#s-3012ca16a371ad08>) — [electron/ai/llm-front-office/experiment-contracts.cjs:229](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L229>)

**Called by (statically resolved):**

- [config](<../front-office-engine.test.cjs.md#s-6ca7b90fa0653f39>) — [electron/ai/front-office-engine.test.cjs:65](<../../../../../../../electron/ai/front-office-engine.test.cjs#L65>)
- [&lt;anonymous@332:98&gt;](<../front-office-engine.test.cjs.md#s-402722bc650a89b7>) — [electron/ai/front-office-engine.test.cjs:348](<../../../../../../../electron/ai/front-office-engine.test.cjs#L348>)
- [&lt;anonymous@332:98&gt;](<../front-office-engine.test.cjs.md#s-402722bc650a89b7>) — [electron/ai/front-office-engine.test.cjs:350](<../../../../../../../electron/ai/front-office-engine.test.cjs#L350>)
- [&lt;anonymous@183:111&gt;](<../front-office-evaluation.test.cjs.md#s-17e1bbffa0618973>) — [electron/ai/front-office-evaluation.test.cjs:185](<../../../../../../../electron/ai/front-office-evaluation.test.cjs#L185>)
- [&lt;anonymous@237:5&gt;](<../front-office-evaluation.test.cjs.md#s-ef8fa49271a8596e>) — [electron/ai/front-office-evaluation.test.cjs:247](<../../../../../../../electron/ai/front-office-evaluation.test.cjs#L247>)
- [FrontOfficeService.config](<service.cjs.md#s-95e5d1f18e4f39b6>) — [electron/ai/llm-front-office/service.cjs:57](<../../../../../../../electron/ai/llm-front-office/service.cjs#L57>)
- [main](<../../../scripts/front-office-benchmark.cjs.md#s-8f8223991922089c>) — [scripts/front-office-benchmark.cjs:72](<../../../../../../../scripts/front-office-benchmark.cjs#L72>)

Unresolved / external call sites: 1.

- structuredClone — external-or-dynamic-dispatch; [electron/ai/llm-front-office/experiment-contracts.cjs:229](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L229>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:65](<../../../../../../../electron/ai/front-office-engine.test.cjs#L65>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:348](<../../../../../../../electron/ai/front-office-engine.test.cjs#L348>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:350](<../../../../../../../electron/ai/front-office-engine.test.cjs#L350>) — static-call-site; coverage not established.
- [electron/ai/front-office-evaluation.test.cjs:185](<../../../../../../../electron/ai/front-office-evaluation.test.cjs#L185>) — static-call-site; coverage not established.
- [electron/ai/front-office-evaluation.test.cjs:247](<../../../../../../../electron/ai/front-office-evaluation.test.cjs#L247>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:10](<../../../../../../../electron/ai/front-office-engine.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/front-office-evaluation.test.cjs:16](<../../../../../../../electron/ai/front-office-evaluation.test.cjs#L16>) — file-import-only; coverage not established.
