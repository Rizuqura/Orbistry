# electron/ai/agents/agent-construction.cjs: symbols

[Atlas](<../../../../../README.md>) / [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>) / [electron/ai/agents/agent-construction.cjs:1](<../../../../../../../electron/ai/agents/agent-construction.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/agents/agent-construction.cjs](<agent-construction.cjs.md#s-735a88a8a9e9396f>) (Module)
- [identifier](<agent-construction.cjs.md#s-da148b27eb7b9482>) (SchemaBinding)
- [contextBoxBindingSchema](<agent-construction.cjs.md#s-b652604f07e2c428>) (SchemaBinding)
- [contextFileBindingSchema](<agent-construction.cjs.md#s-274f87ab64023713>) (SchemaBinding)
- [contextFileBindingSchema.&lt;anonymous@49:5&gt;](<agent-construction.cjs.md#s-adcf7a8dc66ad452>) (ArrowFunction)
- [constructionSourceSchema](<agent-construction.cjs.md#s-c42be620f7f5f9c2>) (SchemaBinding)
- [imageReference](<agent-construction.cjs.md#s-af1bf58f976af424>) (SchemaBinding)
- [appearanceOptions](<agent-construction.cjs.md#s-d8eaffc78dbe80bd>) (SchemaBinding)
- [appearanceSchema](<agent-construction.cjs.md#s-41b69bb4291f98f3>) (VariableDeclaration)
- [defaultAppearance](<agent-construction.cjs.md#s-69bd5cab9d7b2fa1>) (ArrowFunction)
- [nodeSchema](<agent-construction.cjs.md#s-9498f6659cd1414f>) (SchemaBinding)
- [configSchema](<agent-construction.cjs.md#s-3ac068a6dfff4add>) (SchemaBinding)
- [configSchema.&lt;anonymous@134:15&gt;](<agent-construction.cjs.md#s-f8bda6e583ea1a8e>) (ArrowFunction)
- [avatarSchema](<agent-construction.cjs.md#s-255472519cf1d35f>) (SchemaBinding)
- [stateSchema](<agent-construction.cjs.md#s-0846a7ba9da7db7f>) (SchemaBinding)
- [defaults](<agent-construction.cjs.md#s-a6f7591b9f78cb97>) (FunctionDeclaration)
- [invalid](<agent-construction.cjs.md#s-c40c24f689846a0d>) (FunctionDeclaration)
- [validateConstruction](<agent-construction.cjs.md#s-818f4b1aaf6e1b48>) (FunctionDeclaration)
- [validateConstruction.&lt;anonymous@226:42&gt;](<agent-construction.cjs.md#s-c6ca065ef0bae2d5>) (ArrowFunction)
- [validateConstruction.&lt;anonymous@231:17&gt;](<agent-construction.cjs.md#s-ddd2684575324a95>) (ArrowFunction)
- [validateConstruction.&lt;anonymous@232:14&gt;](<agent-construction.cjs.md#s-dfd7096151e6175b>) (ArrowFunction)
- [validateConstruction.&lt;anonymous@233:36&gt;](<agent-construction.cjs.md#s-d098c5027138f1d4>) (ArrowFunction)
- [validateConstruction.&lt;anonymous@236:39&gt;](<agent-construction.cjs.md#s-fdc2499cf0c897e7>) (ArrowFunction)
- [validateConstruction.&lt;anonymous@239:25&gt;](<agent-construction.cjs.md#s-5ab0511626f22664>) (ArrowFunction)
- [validateConstruction.&lt;anonymous@309:37&gt;](<agent-construction.cjs.md#s-4fcff084940e26c4>) (ArrowFunction)
- [validateConstruction.&lt;anonymous@360:30&gt;](<agent-construction.cjs.md#s-3b9573b1d3152d44>) (ArrowFunction)
- [validateConstruction.&lt;anonymous@365:28&gt;](<agent-construction.cjs.md#s-99bb15b7edd02c9b>) (ArrowFunction)
- [validateConstruction.&lt;anonymous@375:15&gt;](<agent-construction.cjs.md#s-d96581af86fd8685>) (ArrowFunction)
- [validateConstruction.&lt;anonymous@375:15&gt;.&lt;anonymous@377:11&gt;](<agent-construction.cjs.md#s-d497175462147852>) (ArrowFunction)
- [validateConstruction.&lt;anonymous@382:12&gt;](<agent-construction.cjs.md#s-16d8296dc571f650>) (ArrowFunction)
- [validateConstruction.&lt;anonymous@394:30&gt;](<agent-construction.cjs.md#s-d01d91437d667b09>) (ArrowFunction)
- [validateConstruction.&lt;anonymous@397:9&gt;](<agent-construction.cjs.md#s-0296f28e78ac56cd>) (ArrowFunction)
- [validateConstruction.&lt;anonymous@397:9&gt;.&lt;anonymous@400:29&gt;](<agent-construction.cjs.md#s-4ac7a5a3a69f709f>) (ArrowFunction)
- [validateConstruction.&lt;anonymous@402:12&gt;](<agent-construction.cjs.md#s-3574bd398e1357e6>) (ArrowFunction)

<a id="s-735a88a8a9e9396f"></a>

## electron/ai/agents/agent-construction.cjs

[electron/ai/agents/agent-construction.cjs:1](<../../../../../../../electron/ai/agents/agent-construction.cjs#L1>) · Module · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- require — module-loader; [electron/ai/agents/agent-construction.cjs:1](<../../../../../../../electron/ai/agents/agent-construction.cjs#L1>)
- require — module-loader; [electron/ai/agents/agent-construction.cjs:2](<../../../../../../../electron/ai/agents/agent-construction.cjs#L2>)
- require — module-loader; [electron/ai/agents/agent-construction.cjs:3](<../../../../../../../electron/ai/agents/agent-construction.cjs#L3>)
- require — module-loader; [electron/ai/agents/agent-construction.cjs:4](<../../../../../../../electron/ai/agents/agent-construction.cjs#L4>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-construction.test.cjs:7](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:9](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:14](<../../../../../../../electron/ai/engine-registry.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-da148b27eb7b9482"></a>

## identifier

[electron/ai/agents/agent-construction.cjs:15](<../../../../../../../electron/ai/agents/agent-construction.cjs#L15>) · SchemaBinding · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/agents/agent-construction.cjs](<agent-construction.cjs.md#s-735a88a8a9e9396f>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- z.string().regex — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:15](<../../../../../../../electron/ai/agents/agent-construction.cjs#L15>)
- z.string — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:15](<../../../../../../../electron/ai/agents/agent-construction.cjs#L15>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-construction.test.cjs:7](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:9](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:14](<../../../../../../../electron/ai/engine-registry.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-b652604f07e2c428"></a>

## contextBoxBindingSchema

[electron/ai/agents/agent-construction.cjs:16](<../../../../../../../electron/ai/agents/agent-construction.cjs#L16>) · SchemaBinding · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: contextBoxBindingSchema ([electron/ai/agents/agent-construction.cjs:1](<../../../../../../../electron/ai/agents/agent-construction.cjs#L1>)).

Lexical owner: [electron/ai/agents/agent-construction.cjs](<agent-construction.cjs.md#s-735a88a8a9e9396f>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 34.

- z .object({ vaultPath: z.string().min(1).max(4096), boxId: z.string().regex(/^&#91;a-zA-Z0-9_-&#93;{1,128}$/), boxName: z.string().min(1).max(120), boxRevision: z.number().int().min(1), re — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:16](<../../../../../../../electron/ai/agents/agent-construction.cjs#L16>)
- z .object — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:16](<../../../../../../../electron/ai/agents/agent-construction.cjs#L16>)
- z.string().min(1).max — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:18](<../../../../../../../electron/ai/agents/agent-construction.cjs#L18>)
- z.string().min — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:18](<../../../../../../../electron/ai/agents/agent-construction.cjs#L18>)
- z.string — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:18](<../../../../../../../electron/ai/agents/agent-construction.cjs#L18>)
- z.string().regex — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:19](<../../../../../../../electron/ai/agents/agent-construction.cjs#L19>)
- z.string — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:19](<../../../../../../../electron/ai/agents/agent-construction.cjs#L19>)
- z.string().min(1).max — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:20](<../../../../../../../electron/ai/agents/agent-construction.cjs#L20>)
- 26 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-construction.test.cjs:7](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:9](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:14](<../../../../../../../electron/ai/engine-registry.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-274f87ab64023713"></a>

## contextFileBindingSchema

[electron/ai/agents/agent-construction.cjs:44](<../../../../../../../electron/ai/agents/agent-construction.cjs#L44>) · SchemaBinding · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: contextFileBindingSchema ([electron/ai/agents/agent-construction.cjs:1](<../../../../../../../electron/ai/agents/agent-construction.cjs#L1>)).

Lexical owner: [electron/ai/agents/agent-construction.cjs](<agent-construction.cjs.md#s-735a88a8a9e9396f>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 7.

- contextBoxBindingSchema .omit({ boxId: true, boxName: true, boxRevision: true }) .extend({ relativePath: z.string().min(1).max(4096) }) .strict() .refine — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:44](<../../../../../../../electron/ai/agents/agent-construction.cjs#L44>)
- contextBoxBindingSchema .omit({ boxId: true, boxName: true, boxRevision: true }) .extend({ relativePath: z.string().min(1).max(4096) }) .strict — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:44](<../../../../../../../electron/ai/agents/agent-construction.cjs#L44>)
- contextBoxBindingSchema .omit({ boxId: true, boxName: true, boxRevision: true }) .extend — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:44](<../../../../../../../electron/ai/agents/agent-construction.cjs#L44>)
- contextBoxBindingSchema .omit — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:44](<../../../../../../../electron/ai/agents/agent-construction.cjs#L44>)
- z.string().min(1).max — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:46](<../../../../../../../electron/ai/agents/agent-construction.cjs#L46>)
- z.string().min — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:46](<../../../../../../../electron/ai/agents/agent-construction.cjs#L46>)
- z.string — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:46](<../../../../../../../electron/ai/agents/agent-construction.cjs#L46>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-construction.test.cjs:7](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:9](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:14](<../../../../../../../electron/ai/engine-registry.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-adcf7a8dc66ad452"></a>

## contextFileBindingSchema.&lt;anonymous@49:5&gt;

[electron/ai/agents/agent-construction.cjs:49](<../../../../../../../electron/ai/agents/agent-construction.cjs#L49>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [contextFileBindingSchema](<agent-construction.cjs.md#s-274f87ab64023713>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-construction.test.cjs:7](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:9](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:14](<../../../../../../../electron/ai/engine-registry.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-c42be620f7f5f9c2"></a>

## constructionSourceSchema

[electron/ai/agents/agent-construction.cjs:55](<../../../../../../../electron/ai/agents/agent-construction.cjs#L55>) · SchemaBinding · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: constructionSourceSchema ([electron/ai/agents/agent-construction.cjs:1](<../../../../../../../electron/ai/agents/agent-construction.cjs#L1>)).

Lexical owner: [electron/ai/agents/agent-construction.cjs](<agent-construction.cjs.md#s-735a88a8a9e9396f>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- z.union — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:55](<../../../../../../../electron/ai/agents/agent-construction.cjs#L55>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-construction.test.cjs:7](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:9](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:14](<../../../../../../../electron/ai/engine-registry.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-af1bf58f976af424"></a>

## imageReference

[electron/ai/agents/agent-construction.cjs:59](<../../../../../../../electron/ai/agents/agent-construction.cjs#L59>) · SchemaBinding · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/agents/agent-construction.cjs](<agent-construction.cjs.md#s-735a88a8a9e9396f>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 6.

- z .object({ type: z.literal("local-asset"), assetId: z.string().regex(/^&#91;a-f0-9&#93;{64}$/), }) .strict() .nullable — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:59](<../../../../../../../electron/ai/agents/agent-construction.cjs#L59>)
- z .object({ type: z.literal("local-asset"), assetId: z.string().regex(/^&#91;a-f0-9&#93;{64}$/), }) .strict — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:59](<../../../../../../../electron/ai/agents/agent-construction.cjs#L59>)
- z .object — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:59](<../../../../../../../electron/ai/agents/agent-construction.cjs#L59>)
- z.literal — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:61](<../../../../../../../electron/ai/agents/agent-construction.cjs#L61>)
- z.string().regex — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:62](<../../../../../../../electron/ai/agents/agent-construction.cjs#L62>)
- z.string — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:62](<../../../../../../../electron/ai/agents/agent-construction.cjs#L62>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-construction.test.cjs:7](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:9](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:14](<../../../../../../../electron/ai/engine-registry.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-d8eaffc78dbe80bd"></a>

## appearanceOptions

[electron/ai/agents/agent-construction.cjs:66](<../../../../../../../electron/ai/agents/agent-construction.cjs#L66>) · SchemaBinding · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: appearanceOptions ([electron/ai/agents/agent-construction.cjs:1](<../../../../../../../electron/ai/agents/agent-construction.cjs#L1>)).

Lexical owner: [electron/ai/agents/agent-construction.cjs](<agent-construction.cjs.md#s-735a88a8a9e9396f>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 12.

- z .object({ wallpaperMode: z.enum(&#91;"none", "dots", "image"&#93;), dim: z.number().int().min(0).max(90), fontSize: z.union(&#91; z.literal(14), z.literal(15), z.literal(16), z.literal(18),  — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:66](<../../../../../../../electron/ai/agents/agent-construction.cjs#L66>)
- z .object — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:66](<../../../../../../../electron/ai/agents/agent-construction.cjs#L66>)
- z.enum — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:68](<../../../../../../../electron/ai/agents/agent-construction.cjs#L68>)
- z.number().int().min(0).max — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:69](<../../../../../../../electron/ai/agents/agent-construction.cjs#L69>)
- z.number().int().min — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:69](<../../../../../../../electron/ai/agents/agent-construction.cjs#L69>)
- z.number().int — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:69](<../../../../../../../electron/ai/agents/agent-construction.cjs#L69>)
- z.number — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:69](<../../../../../../../electron/ai/agents/agent-construction.cjs#L69>)
- z.union — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:70](<../../../../../../../electron/ai/agents/agent-construction.cjs#L70>)
- 4 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-construction.test.cjs:7](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:9](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:14](<../../../../../../../electron/ai/engine-registry.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-41b69bb4291f98f3"></a>

## appearanceSchema

[electron/ai/agents/agent-construction.cjs:78](<../../../../../../../electron/ai/agents/agent-construction.cjs#L78>) · VariableDeclaration · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: appearanceSchema ([electron/ai/agents/agent-construction.cjs:1](<../../../../../../../electron/ai/agents/agent-construction.cjs#L1>)).

Lexical owner: [electron/ai/agents/agent-construction.cjs](<agent-construction.cjs.md#s-735a88a8a9e9396f>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- appearanceOptions .extend({ banner: imageReference, wallpaper: imageReference }) .strict — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:78](<../../../../../../../electron/ai/agents/agent-construction.cjs#L78>)
- appearanceOptions .extend — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:78](<../../../../../../../electron/ai/agents/agent-construction.cjs#L78>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-construction.test.cjs:7](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:9](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:14](<../../../../../../../electron/ai/engine-registry.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-69bd5cab9d7b2fa1"></a>

## defaultAppearance

[electron/ai/agents/agent-construction.cjs:81](<../../../../../../../electron/ai/agents/agent-construction.cjs#L81>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: defaultAppearance ([electron/ai/agents/agent-construction.cjs:1](<../../../../../../../electron/ai/agents/agent-construction.cjs#L1>)).

Lexical owner: [electron/ai/agents/agent-construction.cjs](<agent-construction.cjs.md#s-735a88a8a9e9396f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: { banner: any; wallpaper: any; wallpaperMode: string; dim: number; fontSize: number; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [AgentStore.get](<agent-store.cjs.md#s-feff3820609fc57c>) — [electron/ai/agents/agent-store.cjs:275](<../../../../../../../electron/ai/agents/agent-store.cjs#L275>)
- [AgentStore.get](<agent-store.cjs.md#s-feff3820609fc57c>) — [electron/ai/agents/agent-store.cjs:284](<../../../../../../../electron/ai/agents/agent-store.cjs#L284>)
- [AgentStore.get](<agent-store.cjs.md#s-feff3820609fc57c>) — [electron/ai/agents/agent-store.cjs:296](<../../../../../../../electron/ai/agents/agent-store.cjs#L296>)
- [AgentStore.saveConstruction.&lt;anonymous@389:23&gt;](<agent-store.cjs.md#s-5d9fe7550818f8a0>) — [electron/ai/agents/agent-store.cjs:428](<../../../../../../../electron/ai/agents/agent-store.cjs#L428>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-construction.test.cjs:7](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:9](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:14](<../../../../../../../electron/ai/engine-registry.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-9498f6659cd1414f"></a>

## nodeSchema

[electron/ai/agents/agent-construction.cjs:88](<../../../../../../../electron/ai/agents/agent-construction.cjs#L88>) · SchemaBinding · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/agents/agent-construction.cjs](<agent-construction.cjs.md#s-735a88a8a9e9396f>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 51.

- z .object({ id: identifier, kind: z.enum(kinds), x: z.number().finite().min(0).max(880), y: z.number().finite().min(0).max(520), config: z .object({ instructions: z.string().max(12 — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:88](<../../../../../../../electron/ai/agents/agent-construction.cjs#L88>)
- z .object — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:88](<../../../../../../../electron/ai/agents/agent-construction.cjs#L88>)
- z.enum — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:91](<../../../../../../../electron/ai/agents/agent-construction.cjs#L91>)
- z.number().finite().min(0).max — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:92](<../../../../../../../electron/ai/agents/agent-construction.cjs#L92>)
- z.number().finite().min — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:92](<../../../../../../../electron/ai/agents/agent-construction.cjs#L92>)
- z.number().finite — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:92](<../../../../../../../electron/ai/agents/agent-construction.cjs#L92>)
- z.number — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:92](<../../../../../../../electron/ai/agents/agent-construction.cjs#L92>)
- z.number().finite().min(0).max — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:93](<../../../../../../../electron/ai/agents/agent-construction.cjs#L93>)
- 43 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-construction.test.cjs:7](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:9](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:14](<../../../../../../../electron/ai/engine-registry.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-3ac068a6dfff4add"></a>

## configSchema

[electron/ai/agents/agent-construction.cjs:127](<../../../../../../../electron/ai/agents/agent-construction.cjs#L127>) · SchemaBinding · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: configSchema ([electron/ai/agents/agent-construction.cjs:1](<../../../../../../../electron/ai/agents/agent-construction.cjs#L1>)).

Lexical owner: [electron/ai/agents/agent-construction.cjs](<agent-construction.cjs.md#s-735a88a8a9e9396f>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 20.

- z .object({ displayName: z .string() .trim() .min(1) .max(120) .refine((value) =&gt; !/&#91;\\u0000-\\u001f\\u007f&#93;/u.test(value)), description: z.string().trim().max(240), personality: z.st — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:127](<../../../../../../../electron/ai/agents/agent-construction.cjs#L127>)
- z .object — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:127](<../../../../../../../electron/ai/agents/agent-construction.cjs#L127>)
- z .string() .trim() .min(1) .max(120) .refine — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:129](<../../../../../../../electron/ai/agents/agent-construction.cjs#L129>)
- z .string() .trim() .min(1) .max — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:129](<../../../../../../../electron/ai/agents/agent-construction.cjs#L129>)
- z .string() .trim() .min — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:129](<../../../../../../../electron/ai/agents/agent-construction.cjs#L129>)
- z .string() .trim — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:129](<../../../../../../../electron/ai/agents/agent-construction.cjs#L129>)
- z .string — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:129](<../../../../../../../electron/ai/agents/agent-construction.cjs#L129>)
- z.string().trim().max — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:135](<../../../../../../../electron/ai/agents/agent-construction.cjs#L135>)
- 12 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-construction.test.cjs:7](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:9](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:14](<../../../../../../../electron/ai/engine-registry.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-f8bda6e583ea1a8e"></a>

## configSchema.&lt;anonymous@134:15&gt;

[electron/ai/agents/agent-construction.cjs:134](<../../../../../../../electron/ai/agents/agent-construction.cjs#L134>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [configSchema](<agent-construction.cjs.md#s-3ac068a6dfff4add>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- /&#91;\\u0000-\\u001f\\u007f&#93;/u.test — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:134](<../../../../../../../electron/ai/agents/agent-construction.cjs#L134>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-construction.test.cjs:7](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:9](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:14](<../../../../../../../electron/ai/engine-registry.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-255472519cf1d35f"></a>

## avatarSchema

[electron/ai/agents/agent-construction.cjs:144](<../../../../../../../electron/ai/agents/agent-construction.cjs#L144>) · SchemaBinding · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: avatarSchema ([electron/ai/agents/agent-construction.cjs:1](<../../../../../../../electron/ai/agents/agent-construction.cjs#L1>)).

Lexical owner: [electron/ai/agents/agent-construction.cjs](<agent-construction.cjs.md#s-735a88a8a9e9396f>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 11.

- z.union — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:144](<../../../../../../../electron/ai/agents/agent-construction.cjs#L144>)
- z .object({ type: z.literal("letter"), letter: z.string().regex(/^&#91;A-Z0-9&#93;$/), }) .strict — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:145](<../../../../../../../electron/ai/agents/agent-construction.cjs#L145>)
- z .object — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:145](<../../../../../../../electron/ai/agents/agent-construction.cjs#L145>)
- z.literal — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:147](<../../../../../../../electron/ai/agents/agent-construction.cjs#L147>)
- z.string().regex — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:148](<../../../../../../../electron/ai/agents/agent-construction.cjs#L148>)
- z.string — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:148](<../../../../../../../electron/ai/agents/agent-construction.cjs#L148>)
- z .object({ type: z.literal("local-asset"), assetId: z.string().regex(/^&#91;a-f0-9&#93;{64}$/), }) .strict — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:151](<../../../../../../../electron/ai/agents/agent-construction.cjs#L151>)
- z .object — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:151](<../../../../../../../electron/ai/agents/agent-construction.cjs#L151>)
- 3 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-construction.test.cjs:7](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:9](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:14](<../../../../../../../electron/ai/engine-registry.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-0846a7ba9da7db7f"></a>

## stateSchema

[electron/ai/agents/agent-construction.cjs:158](<../../../../../../../electron/ai/agents/agent-construction.cjs#L158>) · SchemaBinding · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: stateSchema ([electron/ai/agents/agent-construction.cjs:1](<../../../../../../../electron/ai/agents/agent-construction.cjs#L1>)).

Lexical owner: [electron/ai/agents/agent-construction.cjs](<agent-construction.cjs.md#s-735a88a8a9e9396f>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 22.

- z .object({ revision: z.number().int().min(1), draftRevision: z.number().int().min(1), activeRevision: z.number().int().min(0), draft: configSchema, active: configSchema.nullable() — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:158](<../../../../../../../electron/ai/agents/agent-construction.cjs#L158>)
- z .object — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:158](<../../../../../../../electron/ai/agents/agent-construction.cjs#L158>)
- z.number().int().min — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:160](<../../../../../../../electron/ai/agents/agent-construction.cjs#L160>)
- z.number().int — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:160](<../../../../../../../electron/ai/agents/agent-construction.cjs#L160>)
- z.number — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:160](<../../../../../../../electron/ai/agents/agent-construction.cjs#L160>)
- z.number().int().min — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:161](<../../../../../../../electron/ai/agents/agent-construction.cjs#L161>)
- z.number().int — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:161](<../../../../../../../electron/ai/agents/agent-construction.cjs#L161>)
- z.number — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:161](<../../../../../../../electron/ai/agents/agent-construction.cjs#L161>)
- 14 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-construction.test.cjs:7](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:9](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:14](<../../../../../../../electron/ai/engine-registry.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-a6f7591b9f78cb97"></a>

## defaults

[electron/ai/agents/agent-construction.cjs:180](<../../../../../../../electron/ai/agents/agent-construction.cjs#L180>) · FunctionDeclaration · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: defaults ([electron/ai/agents/agent-construction.cjs:1](<../../../../../../../electron/ai/agents/agent-construction.cjs#L1>)).

Lexical owner: [electron/ai/agents/agent-construction.cjs](<agent-construction.cjs.md#s-735a88a8a9e9396f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| row | any | compiler-inferred | required |
| generic | boolean | compiler-inferred | optional, default present |

Returns: { displayName: any; description: any; personality: any; instructions: any; nodes: {}; edges: {}; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [skillsFor](<../skills.cjs.md#s-b3ded4fcddd47806>) — [electron/ai/agents/agent-construction.cjs:208](<../../../../../../../electron/ai/agents/agent-construction.cjs#L208>)
- [skillsFor](<../skills.cjs.md#s-b3ded4fcddd47806>) — [electron/ai/agents/agent-construction.cjs:209](<../../../../../../../electron/ai/agents/agent-construction.cjs#L209>)

**Called by (statically resolved):**

- [AgentStore.get](<agent-store.cjs.md#s-feff3820609fc57c>) — [electron/ai/agents/agent-store.cjs:291](<../../../../../../../electron/ai/agents/agent-store.cjs#L291>)
- [&lt;anonymous@152:110&gt;](<../engine-registry.test.cjs.md#s-e9f24b549acc435a>) — [electron/ai/engine-registry.test.cjs:154](<../../../../../../../electron/ai/engine-registry.test.cjs#L154>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/engine-registry.test.cjs:154](<../../../../../../../electron/ai/engine-registry.test.cjs#L154>) — static-call-site; coverage not established.
- [electron/ai/agents/agent-construction.test.cjs:7](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:9](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:14](<../../../../../../../electron/ai/engine-registry.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-c40c24f689846a0d"></a>

## invalid

[electron/ai/agents/agent-construction.cjs:220](<../../../../../../../electron/ai/agents/agent-construction.cjs#L220>) · FunctionDeclaration · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/agents/agent-construction.cjs](<agent-construction.cjs.md#s-735a88a8a9e9396f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| message | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/agents/agent-construction.cjs:221](<../../../../../../../electron/ai/agents/agent-construction.cjs#L221>)

**Called by (statically resolved):**

- [validateConstruction](<agent-construction.cjs.md#s-818f4b1aaf6e1b48>) — [electron/ai/agents/agent-construction.cjs:235](<../../../../../../../electron/ai/agents/agent-construction.cjs#L235>)
- [validateConstruction](<agent-construction.cjs.md#s-818f4b1aaf6e1b48>) — [electron/ai/agents/agent-construction.cjs:237](<../../../../../../../electron/ai/agents/agent-construction.cjs#L237>)
- [validateConstruction](<agent-construction.cjs.md#s-818f4b1aaf6e1b48>) — [electron/ai/agents/agent-construction.cjs:242](<../../../../../../../electron/ai/agents/agent-construction.cjs#L242>)
- [validateConstruction](<agent-construction.cjs.md#s-818f4b1aaf6e1b48>) — [electron/ai/agents/agent-construction.cjs:269](<../../../../../../../electron/ai/agents/agent-construction.cjs#L269>)
- [validateConstruction](<agent-construction.cjs.md#s-818f4b1aaf6e1b48>) — [electron/ai/agents/agent-construction.cjs:290](<../../../../../../../electron/ai/agents/agent-construction.cjs#L290>)
- [validateConstruction](<agent-construction.cjs.md#s-818f4b1aaf6e1b48>) — [electron/ai/agents/agent-construction.cjs:298](<../../../../../../../electron/ai/agents/agent-construction.cjs#L298>)
- [validateConstruction](<agent-construction.cjs.md#s-818f4b1aaf6e1b48>) — [electron/ai/agents/agent-construction.cjs:304](<../../../../../../../electron/ai/agents/agent-construction.cjs#L304>)
- [validateConstruction](<agent-construction.cjs.md#s-818f4b1aaf6e1b48>) — [electron/ai/agents/agent-construction.cjs:311](<../../../../../../../electron/ai/agents/agent-construction.cjs#L311>)
- [validateConstruction](<agent-construction.cjs.md#s-818f4b1aaf6e1b48>) — [electron/ai/agents/agent-construction.cjs:313](<../../../../../../../electron/ai/agents/agent-construction.cjs#L313>)
- [validateConstruction](<agent-construction.cjs.md#s-818f4b1aaf6e1b48>) — [electron/ai/agents/agent-construction.cjs:321](<../../../../../../../electron/ai/agents/agent-construction.cjs#L321>)
- [validateConstruction](<agent-construction.cjs.md#s-818f4b1aaf6e1b48>) — [electron/ai/agents/agent-construction.cjs:327](<../../../../../../../electron/ai/agents/agent-construction.cjs#L327>)
- [validateConstruction](<agent-construction.cjs.md#s-818f4b1aaf6e1b48>) — [electron/ai/agents/agent-construction.cjs:336](<../../../../../../../electron/ai/agents/agent-construction.cjs#L336>)
- [validateConstruction](<agent-construction.cjs.md#s-818f4b1aaf6e1b48>) — [electron/ai/agents/agent-construction.cjs:353](<../../../../../../../electron/ai/agents/agent-construction.cjs#L353>)
- [validateConstruction](<agent-construction.cjs.md#s-818f4b1aaf6e1b48>) — [electron/ai/agents/agent-construction.cjs:361](<../../../../../../../electron/ai/agents/agent-construction.cjs#L361>)
- [validateConstruction](<agent-construction.cjs.md#s-818f4b1aaf6e1b48>) — [electron/ai/agents/agent-construction.cjs:367](<../../../../../../../electron/ai/agents/agent-construction.cjs#L367>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-construction.test.cjs:7](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:9](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:14](<../../../../../../../electron/ai/engine-registry.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-818f4b1aaf6e1b48"></a>

## validateConstruction

[electron/ai/agents/agent-construction.cjs:224](<../../../../../../../electron/ai/agents/agent-construction.cjs#L224>) · FunctionDeclaration · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

Validates saved or applied graphs, preserving singleton inputs and legacy CHronoZ bindings. Throws before persistence on invalid node contracts.

Purpose evidence: jsdoc.

Exported as: validateConstruction ([electron/ai/agents/agent-construction.cjs:1](<../../../../../../../electron/ai/agents/agent-construction.cjs#L1>)).

Lexical owner: [electron/ai/agents/agent-construction.cjs](<agent-construction.cjs.md#s-735a88a8a9e9396f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |
| agentId | any | compiler-inferred | required |
| apply | boolean | compiler-inferred | optional, default present |

Returns: { config: any; preferences: any; model: any; skills: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [parse](<../../shared/validation.cjs.md#s-f29367528a73f24d>) — [electron/ai/agents/agent-construction.cjs:225](<../../../../../../../electron/ai/agents/agent-construction.cjs#L225>)
- [invalid](<agent-construction.cjs.md#s-c40c24f689846a0d>) — [electron/ai/agents/agent-construction.cjs:235](<../../../../../../../electron/ai/agents/agent-construction.cjs#L235>)
- [invalid](<agent-construction.cjs.md#s-c40c24f689846a0d>) — [electron/ai/agents/agent-construction.cjs:237](<../../../../../../../electron/ai/agents/agent-construction.cjs#L237>)
- [invalid](<agent-construction.cjs.md#s-c40c24f689846a0d>) — [electron/ai/agents/agent-construction.cjs:242](<../../../../../../../electron/ai/agents/agent-construction.cjs#L242>)
- [invalid](<agent-construction.cjs.md#s-c40c24f689846a0d>) — [electron/ai/agents/agent-construction.cjs:269](<../../../../../../../electron/ai/agents/agent-construction.cjs#L269>)
- [invalid](<agent-construction.cjs.md#s-c40c24f689846a0d>) — [electron/ai/agents/agent-construction.cjs:290](<../../../../../../../electron/ai/agents/agent-construction.cjs#L290>)
- [invalid](<agent-construction.cjs.md#s-c40c24f689846a0d>) — [electron/ai/agents/agent-construction.cjs:298](<../../../../../../../electron/ai/agents/agent-construction.cjs#L298>)
- [invalid](<agent-construction.cjs.md#s-c40c24f689846a0d>) — [electron/ai/agents/agent-construction.cjs:304](<../../../../../../../electron/ai/agents/agent-construction.cjs#L304>)
- [invalid](<agent-construction.cjs.md#s-c40c24f689846a0d>) — [electron/ai/agents/agent-construction.cjs:311](<../../../../../../../electron/ai/agents/agent-construction.cjs#L311>)
- [invalid](<agent-construction.cjs.md#s-c40c24f689846a0d>) — [electron/ai/agents/agent-construction.cjs:313](<../../../../../../../electron/ai/agents/agent-construction.cjs#L313>)
- [validateCustomInstructions](<agent-policy.cjs.md#s-0dbc6d2e83719bfc>) — [electron/ai/agents/agent-construction.cjs:315](<../../../../../../../electron/ai/agents/agent-construction.cjs#L315>)
- [skillsFor](<../skills.cjs.md#s-b3ded4fcddd47806>) — [electron/ai/agents/agent-construction.cjs:319](<../../../../../../../electron/ai/agents/agent-construction.cjs#L319>)
- [invalid](<agent-construction.cjs.md#s-c40c24f689846a0d>) — [electron/ai/agents/agent-construction.cjs:321](<../../../../../../../electron/ai/agents/agent-construction.cjs#L321>)
- [validateContextIdentity](<../context-identity.cjs.md#s-074b8d05ecfc17f5>) — [electron/ai/agents/agent-construction.cjs:323](<../../../../../../../electron/ai/agents/agent-construction.cjs#L323>)
- [invalid](<agent-construction.cjs.md#s-c40c24f689846a0d>) — [electron/ai/agents/agent-construction.cjs:327](<../../../../../../../electron/ai/agents/agent-construction.cjs#L327>)
- [validateContextIdentity](<../context-identity.cjs.md#s-074b8d05ecfc17f5>) — [electron/ai/agents/agent-construction.cjs:329](<../../../../../../../electron/ai/agents/agent-construction.cjs#L329>)
- [invalid](<agent-construction.cjs.md#s-c40c24f689846a0d>) — [electron/ai/agents/agent-construction.cjs:336](<../../../../../../../electron/ai/agents/agent-construction.cjs#L336>)
- [invalid](<agent-construction.cjs.md#s-c40c24f689846a0d>) — [electron/ai/agents/agent-construction.cjs:353](<../../../../../../../electron/ai/agents/agent-construction.cjs#L353>)
- [invalid](<agent-construction.cjs.md#s-c40c24f689846a0d>) — [electron/ai/agents/agent-construction.cjs:361](<../../../../../../../electron/ai/agents/agent-construction.cjs#L361>)
- [invalid](<agent-construction.cjs.md#s-c40c24f689846a0d>) — [electron/ai/agents/agent-construction.cjs:367](<../../../../../../../electron/ai/agents/agent-construction.cjs#L367>)
- [validateCustomInstructions](<agent-policy.cjs.md#s-0dbc6d2e83719bfc>) — [electron/ai/agents/agent-construction.cjs:369](<../../../../../../../electron/ai/agents/agent-construction.cjs#L369>)
- [validateCustomInstructions](<agent-policy.cjs.md#s-0dbc6d2e83719bfc>) — [electron/ai/agents/agent-construction.cjs:370](<../../../../../../../electron/ai/agents/agent-construction.cjs#L370>)
- [validateCustomInstructions](<agent-policy.cjs.md#s-0dbc6d2e83719bfc>) — [electron/ai/agents/agent-construction.cjs:390](<../../../../../../../electron/ai/agents/agent-construction.cjs#L390>)

**Called by (statically resolved):**

- [&lt;anonymous@111:98&gt;](<agent-construction.test.cjs.md#s-92c86b60c9bd748c>) — [electron/ai/agents/agent-construction.test.cjs:121](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L121>)
- [AgentStore.get](<agent-store.cjs.md#s-feff3820609fc57c>) — [electron/ai/agents/agent-store.cjs:255](<../../../../../../../electron/ai/agents/agent-store.cjs#L255>)
- [AgentStore.saveConstruction.&lt;anonymous@389:23&gt;](<agent-store.cjs.md#s-5d9fe7550818f8a0>) — [electron/ai/agents/agent-store.cjs:414](<../../../../../../../electron/ai/agents/agent-store.cjs#L414>)
- [&lt;anonymous@267:122&gt;.&lt;anonymous@294:5&gt;](<entity-agents.test.cjs.md#s-472db081c3aded18>) — [electron/ai/agents/entity-agents.test.cjs:294](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L294>)
- [&lt;anonymous@299:106&gt;](<entity-agents.test.cjs.md#s-9f03d7b1a265b10c>) — [electron/ai/agents/entity-agents.test.cjs:304](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L304>)
- [&lt;anonymous@299:106&gt;](<entity-agents.test.cjs.md#s-9f03d7b1a265b10c>) — [electron/ai/agents/entity-agents.test.cjs:313](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L313>)
- [&lt;anonymous@299:106&gt;.&lt;anonymous@318:5&gt;](<entity-agents.test.cjs.md#s-1f0aca7b5cc550c5>) — [electron/ai/agents/entity-agents.test.cjs:318](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L318>)
- [&lt;anonymous@299:106&gt;.&lt;anonymous@323:5&gt;](<entity-agents.test.cjs.md#s-a0a1471d9504f5da>) — [electron/ai/agents/entity-agents.test.cjs:323](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L323>)
- [&lt;anonymous@597:108&gt;](<entity-agents.test.cjs.md#s-26cc8d5eb649b8aa>) — [electron/ai/agents/entity-agents.test.cjs:611](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L611>)
- [&lt;anonymous@597:108&gt;.&lt;anonymous@628:17&gt;](<entity-agents.test.cjs.md#s-d68d74175ea88b25>) — [electron/ai/agents/entity-agents.test.cjs:628](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L628>)
- [&lt;anonymous@152:110&gt;](<../engine-registry.test.cjs.md#s-e9f24b549acc435a>) — [electron/ai/engine-registry.test.cjs:159](<../../../../../../../electron/ai/engine-registry.test.cjs#L159>)
- [&lt;anonymous@152:110&gt;](<../engine-registry.test.cjs.md#s-e9f24b549acc435a>) — [electron/ai/engine-registry.test.cjs:160](<../../../../../../../electron/ai/engine-registry.test.cjs#L160>)
- [&lt;anonymous@152:110&gt;.&lt;anonymous@178:19&gt;](<../engine-registry.test.cjs.md#s-79ea263305fa4f36>) — [electron/ai/engine-registry.test.cjs:178](<../../../../../../../electron/ai/engine-registry.test.cjs#L178>)

Unresolved / external call sites: 35.

- Map — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:226](<../../../../../../../electron/ai/agents/agent-construction.cjs#L226>)
- config.nodes.map — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:226](<../../../../../../../electron/ai/agents/agent-construction.cjs#L226>)
- Set — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:229](<../../../../../../../electron/ai/agents/agent-construction.cjs#L229>)
- config.nodes .filter((node) =&gt; node.kind !== "Engine") .map — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:230](<../../../../../../../electron/ai/agents/agent-construction.cjs#L230>)
- config.nodes .filter — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:230](<../../../../../../../electron/ai/agents/agent-construction.cjs#L230>)
- config.nodes.filter — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:233](<../../../../../../../electron/ai/agents/agent-construction.cjs#L233>)
- config.nodes.filter — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:236](<../../../../../../../electron/ai/agents/agent-construction.cjs#L236>)
- Set — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:239](<../../../../../../../electron/ai/agents/agent-construction.cjs#L239>)
- 27 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-construction.test.cjs:121](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L121>) — static-call-site; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:294](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L294>) — static-call-site; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:304](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L304>) — static-call-site; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:313](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L313>) — static-call-site; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:318](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L318>) — static-call-site; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:323](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L323>) — static-call-site; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:611](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L611>) — static-call-site; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:628](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L628>) — static-call-site; coverage not established.
- [electron/ai/engine-registry.test.cjs:159](<../../../../../../../electron/ai/engine-registry.test.cjs#L159>) — static-call-site; coverage not established.
- [electron/ai/engine-registry.test.cjs:160](<../../../../../../../electron/ai/engine-registry.test.cjs#L160>) — static-call-site; coverage not established.
- [electron/ai/engine-registry.test.cjs:178](<../../../../../../../electron/ai/engine-registry.test.cjs#L178>) — static-call-site; coverage not established.
- [electron/ai/agents/agent-construction.test.cjs:7](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:9](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:14](<../../../../../../../electron/ai/engine-registry.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-c6ca065ef0bae2d5"></a>

## validateConstruction.&lt;anonymous@226:42&gt;

[electron/ai/agents/agent-construction.cjs:226](<../../../../../../../electron/ai/agents/agent-construction.cjs#L226>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [validateConstruction](<agent-construction.cjs.md#s-818f4b1aaf6e1b48>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| node | any | compiler-inferred | required |

Returns: {} (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-construction.test.cjs:7](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:9](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:14](<../../../../../../../electron/ai/engine-registry.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-ddd2684575324a95"></a>

## validateConstruction.&lt;anonymous@231:17&gt;

[electron/ai/agents/agent-construction.cjs:231](<../../../../../../../electron/ai/agents/agent-construction.cjs#L231>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [validateConstruction](<agent-construction.cjs.md#s-818f4b1aaf6e1b48>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| node | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-construction.test.cjs:7](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:9](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:14](<../../../../../../../electron/ai/engine-registry.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-dfd7096151e6175b"></a>

## validateConstruction.&lt;anonymous@232:14&gt;

[electron/ai/agents/agent-construction.cjs:232](<../../../../../../../electron/ai/agents/agent-construction.cjs#L232>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [validateConstruction](<agent-construction.cjs.md#s-818f4b1aaf6e1b48>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| node | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-construction.test.cjs:7](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:9](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:14](<../../../../../../../electron/ai/engine-registry.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-d098c5027138f1d4"></a>

## validateConstruction.&lt;anonymous@233:36&gt;

[electron/ai/agents/agent-construction.cjs:233](<../../../../../../../electron/ai/agents/agent-construction.cjs#L233>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [validateConstruction](<agent-construction.cjs.md#s-818f4b1aaf6e1b48>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| node | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-construction.test.cjs:7](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:9](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:14](<../../../../../../../electron/ai/engine-registry.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-fdc2499cf0c897e7"></a>

## validateConstruction.&lt;anonymous@236:39&gt;

[electron/ai/agents/agent-construction.cjs:236](<../../../../../../../electron/ai/agents/agent-construction.cjs#L236>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [validateConstruction](<agent-construction.cjs.md#s-818f4b1aaf6e1b48>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| node | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-construction.test.cjs:7](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:9](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:14](<../../../../../../../electron/ai/engine-registry.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-5ab0511626f22664"></a>

## validateConstruction.&lt;anonymous@239:25&gt;

[electron/ai/agents/agent-construction.cjs:239](<../../../../../../../electron/ai/agents/agent-construction.cjs#L239>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [validateConstruction](<agent-construction.cjs.md#s-818f4b1aaf6e1b48>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| node | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-construction.test.cjs:7](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:9](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:14](<../../../../../../../electron/ai/engine-registry.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-4fcff084940e26c4"></a>

## validateConstruction.&lt;anonymous@309:37&gt;

[electron/ai/agents/agent-construction.cjs:309](<../../../../../../../electron/ai/agents/agent-construction.cjs#L309>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [validateConstruction](<agent-construction.cjs.md#s-818f4b1aaf6e1b48>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| key | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- fields&#91;node.kind&#93;.includes — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:309](<../../../../../../../electron/ai/agents/agent-construction.cjs#L309>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-construction.test.cjs:7](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:9](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:14](<../../../../../../../electron/ai/engine-registry.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-3b9573b1d3152d44"></a>

## validateConstruction.&lt;anonymous@360:30&gt;

[electron/ai/agents/agent-construction.cjs:360](<../../../../../../../electron/ai/agents/agent-construction.cjs#L360>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [validateConstruction](<agent-construction.cjs.md#s-818f4b1aaf6e1b48>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| node | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-construction.test.cjs:7](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:9](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:14](<../../../../../../../electron/ai/engine-registry.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-99bb15b7edd02c9b"></a>

## validateConstruction.&lt;anonymous@365:28&gt;

[electron/ai/agents/agent-construction.cjs:365](<../../../../../../../electron/ai/agents/agent-construction.cjs#L365>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [validateConstruction](<agent-construction.cjs.md#s-818f4b1aaf6e1b48>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| edge | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-construction.test.cjs:7](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:9](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:14](<../../../../../../../electron/ai/engine-registry.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-d96581af86fd8685"></a>

## validateConstruction.&lt;anonymous@375:15&gt;

[electron/ai/agents/agent-construction.cjs:375](<../../../../../../../electron/ai/agents/agent-construction.cjs#L375>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [validateConstruction](<agent-construction.cjs.md#s-818f4b1aaf6e1b48>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| node | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- config.edges.some — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:376](<../../../../../../../electron/ai/agents/agent-construction.cjs#L376>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-construction.test.cjs:7](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:9](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:14](<../../../../../../../electron/ai/engine-registry.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-d497175462147852"></a>

## validateConstruction.&lt;anonymous@375:15&gt;.&lt;anonymous@377:11&gt;

[electron/ai/agents/agent-construction.cjs:377](<../../../../../../../electron/ai/agents/agent-construction.cjs#L377>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [validateConstruction.&lt;anonymous@375:15&gt;](<agent-construction.cjs.md#s-d96581af86fd8685>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| edge | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-construction.test.cjs:7](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:9](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:14](<../../../../../../../electron/ai/engine-registry.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-16d8296dc571f650"></a>

## validateConstruction.&lt;anonymous@382:12&gt;

[electron/ai/agents/agent-construction.cjs:382](<../../../../../../../electron/ai/agents/agent-construction.cjs#L382>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [validateConstruction](<agent-construction.cjs.md#s-818f4b1aaf6e1b48>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| node | any | compiler-inferred | required |

Returns: string (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-construction.test.cjs:7](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:9](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:14](<../../../../../../../electron/ai/engine-registry.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-d01d91437d667b09"></a>

## validateConstruction.&lt;anonymous@394:30&gt;

[electron/ai/agents/agent-construction.cjs:394](<../../../../../../../electron/ai/agents/agent-construction.cjs#L394>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [validateConstruction](<agent-construction.cjs.md#s-818f4b1aaf6e1b48>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| node | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-construction.test.cjs:7](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:9](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:14](<../../../../../../../electron/ai/engine-registry.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-0296f28e78ac56cd"></a>

## validateConstruction.&lt;anonymous@397:9&gt;

[electron/ai/agents/agent-construction.cjs:397](<../../../../../../../electron/ai/agents/agent-construction.cjs#L397>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [validateConstruction](<agent-construction.cjs.md#s-818f4b1aaf6e1b48>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| node | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- config.edges.some — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:400](<../../../../../../../electron/ai/agents/agent-construction.cjs#L400>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-construction.test.cjs:7](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:9](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:14](<../../../../../../../electron/ai/engine-registry.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-4ac7a5a3a69f709f"></a>

## validateConstruction.&lt;anonymous@397:9&gt;.&lt;anonymous@400:29&gt;

[electron/ai/agents/agent-construction.cjs:400](<../../../../../../../electron/ai/agents/agent-construction.cjs#L400>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [validateConstruction.&lt;anonymous@397:9&gt;](<agent-construction.cjs.md#s-0296f28e78ac56cd>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| edge | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-construction.test.cjs:7](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:9](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:14](<../../../../../../../electron/ai/engine-registry.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-3574bd398e1357e6"></a>

## validateConstruction.&lt;anonymous@402:12&gt;

[electron/ai/agents/agent-construction.cjs:402](<../../../../../../../electron/ai/agents/agent-construction.cjs#L402>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [validateConstruction](<agent-construction.cjs.md#s-818f4b1aaf6e1b48>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| node | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-construction.test.cjs:7](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:9](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:14](<../../../../../../../electron/ai/engine-registry.test.cjs#L14>) — file-import-only; coverage not established.
