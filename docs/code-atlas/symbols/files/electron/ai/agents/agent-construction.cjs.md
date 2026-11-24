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
- [configSchema](<agent-construction.cjs.md#s-3699637ab49da27a>) (SchemaBinding)
- [configSchema.&lt;anonymous@130:15&gt;](<agent-construction.cjs.md#s-acb6cb2ffc669bb6>) (ArrowFunction)
- [avatarSchema](<agent-construction.cjs.md#s-f6ef375df84a6c1c>) (SchemaBinding)
- [stateSchema](<agent-construction.cjs.md#s-9ec4f8d8b1a5035c>) (SchemaBinding)
- [defaults](<agent-construction.cjs.md#s-b11797218b524d62>) (FunctionDeclaration)
- [invalid](<agent-construction.cjs.md#s-9e0068ef74a008e9>) (FunctionDeclaration)
- [validateConstruction](<agent-construction.cjs.md#s-c40c24f689846a0d>) (FunctionDeclaration)
- [validateConstruction.&lt;anonymous@222:42&gt;](<agent-construction.cjs.md#s-fd036796b6921bd3>) (ArrowFunction)
- [validateConstruction.&lt;anonymous@227:17&gt;](<agent-construction.cjs.md#s-666482c2cbb50537>) (ArrowFunction)
- [validateConstruction.&lt;anonymous@228:14&gt;](<agent-construction.cjs.md#s-f8ac5eaa8869b492>) (ArrowFunction)
- [validateConstruction.&lt;anonymous@229:36&gt;](<agent-construction.cjs.md#s-90d19304d10ed5bc>) (ArrowFunction)
- [validateConstruction.&lt;anonymous@232:39&gt;](<agent-construction.cjs.md#s-e255d28da5555513>) (ArrowFunction)
- [validateConstruction.&lt;anonymous@235:25&gt;](<agent-construction.cjs.md#s-26133423e2dcbe4f>) (ArrowFunction)
- [validateConstruction.&lt;anonymous@285:37&gt;](<agent-construction.cjs.md#s-e6932bee36a18013>) (ArrowFunction)
- [validateConstruction.&lt;anonymous@336:30&gt;](<agent-construction.cjs.md#s-fa820c52823e01c6>) (ArrowFunction)
- [validateConstruction.&lt;anonymous@341:28&gt;](<agent-construction.cjs.md#s-d10727035aaadb27>) (ArrowFunction)
- [validateConstruction.&lt;anonymous@351:15&gt;](<agent-construction.cjs.md#s-6d0813333f20660c>) (ArrowFunction)
- [validateConstruction.&lt;anonymous@351:15&gt;.&lt;anonymous@353:11&gt;](<agent-construction.cjs.md#s-d359cc8af5246026>) (ArrowFunction)
- [validateConstruction.&lt;anonymous@358:12&gt;](<agent-construction.cjs.md#s-e1d9dcdb1ba3c625>) (ArrowFunction)
- [validateConstruction.&lt;anonymous@370:30&gt;](<agent-construction.cjs.md#s-4ea604938d01de96>) (ArrowFunction)
- [validateConstruction.&lt;anonymous@373:9&gt;](<agent-construction.cjs.md#s-5a2c570b4f923b0f>) (ArrowFunction)
- [validateConstruction.&lt;anonymous@373:9&gt;.&lt;anonymous@376:29&gt;](<agent-construction.cjs.md#s-a5481b70e04baaea>) (ArrowFunction)
- [validateConstruction.&lt;anonymous@378:12&gt;](<agent-construction.cjs.md#s-2d431fb4bfec81a2>) (ArrowFunction)

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

Unresolved / external call sites: 48.

- z .object({ id: identifier, kind: z.enum(kinds), x: z.number().finite().min(0).max(880), y: z.number().finite().min(0).max(520), config: z .object({ instructions: z.string().max(12 — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:88](<../../../../../../../electron/ai/agents/agent-construction.cjs#L88>)
- z .object — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:88](<../../../../../../../electron/ai/agents/agent-construction.cjs#L88>)
- z.enum — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:91](<../../../../../../../electron/ai/agents/agent-construction.cjs#L91>)
- z.number().finite().min(0).max — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:92](<../../../../../../../electron/ai/agents/agent-construction.cjs#L92>)
- z.number().finite().min — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:92](<../../../../../../../electron/ai/agents/agent-construction.cjs#L92>)
- z.number().finite — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:92](<../../../../../../../electron/ai/agents/agent-construction.cjs#L92>)
- z.number — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:92](<../../../../../../../electron/ai/agents/agent-construction.cjs#L92>)
- z.number().finite().min(0).max — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:93](<../../../../../../../electron/ai/agents/agent-construction.cjs#L93>)
- 40 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-construction.test.cjs:7](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:9](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:14](<../../../../../../../electron/ai/engine-registry.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-3699637ab49da27a"></a>

## configSchema

[electron/ai/agents/agent-construction.cjs:123](<../../../../../../../electron/ai/agents/agent-construction.cjs#L123>) · SchemaBinding · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

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

- z .object({ displayName: z .string() .trim() .min(1) .max(120) .refine((value) =&gt; !/&#91;\\u0000-\\u001f\\u007f&#93;/u.test(value)), description: z.string().trim().max(240), personality: z.st — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:123](<../../../../../../../electron/ai/agents/agent-construction.cjs#L123>)
- z .object — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:123](<../../../../../../../electron/ai/agents/agent-construction.cjs#L123>)
- z .string() .trim() .min(1) .max(120) .refine — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:125](<../../../../../../../electron/ai/agents/agent-construction.cjs#L125>)
- z .string() .trim() .min(1) .max — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:125](<../../../../../../../electron/ai/agents/agent-construction.cjs#L125>)
- z .string() .trim() .min — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:125](<../../../../../../../electron/ai/agents/agent-construction.cjs#L125>)
- z .string() .trim — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:125](<../../../../../../../electron/ai/agents/agent-construction.cjs#L125>)
- z .string — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:125](<../../../../../../../electron/ai/agents/agent-construction.cjs#L125>)
- z.string().trim().max — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:131](<../../../../../../../electron/ai/agents/agent-construction.cjs#L131>)
- 12 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-construction.test.cjs:7](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:9](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:14](<../../../../../../../electron/ai/engine-registry.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-acb6cb2ffc669bb6"></a>

## configSchema.&lt;anonymous@130:15&gt;

[electron/ai/agents/agent-construction.cjs:130](<../../../../../../../electron/ai/agents/agent-construction.cjs#L130>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [configSchema](<agent-construction.cjs.md#s-3699637ab49da27a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- /&#91;\\u0000-\\u001f\\u007f&#93;/u.test — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:130](<../../../../../../../electron/ai/agents/agent-construction.cjs#L130>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-construction.test.cjs:7](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:9](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:14](<../../../../../../../electron/ai/engine-registry.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-f6ef375df84a6c1c"></a>

## avatarSchema

[electron/ai/agents/agent-construction.cjs:140](<../../../../../../../electron/ai/agents/agent-construction.cjs#L140>) · SchemaBinding · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

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

- z.union — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:140](<../../../../../../../electron/ai/agents/agent-construction.cjs#L140>)
- z .object({ type: z.literal("letter"), letter: z.string().regex(/^&#91;A-Z0-9&#93;$/), }) .strict — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:141](<../../../../../../../electron/ai/agents/agent-construction.cjs#L141>)
- z .object — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:141](<../../../../../../../electron/ai/agents/agent-construction.cjs#L141>)
- z.literal — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:143](<../../../../../../../electron/ai/agents/agent-construction.cjs#L143>)
- z.string().regex — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:144](<../../../../../../../electron/ai/agents/agent-construction.cjs#L144>)
- z.string — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:144](<../../../../../../../electron/ai/agents/agent-construction.cjs#L144>)
- z .object({ type: z.literal("local-asset"), assetId: z.string().regex(/^&#91;a-f0-9&#93;{64}$/), }) .strict — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:147](<../../../../../../../electron/ai/agents/agent-construction.cjs#L147>)
- z .object — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:147](<../../../../../../../electron/ai/agents/agent-construction.cjs#L147>)
- 3 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-construction.test.cjs:7](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:9](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:14](<../../../../../../../electron/ai/engine-registry.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-9ec4f8d8b1a5035c"></a>

## stateSchema

[electron/ai/agents/agent-construction.cjs:154](<../../../../../../../electron/ai/agents/agent-construction.cjs#L154>) · SchemaBinding · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

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

- z .object({ revision: z.number().int().min(1), draftRevision: z.number().int().min(1), activeRevision: z.number().int().min(0), draft: configSchema, active: configSchema.nullable() — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:154](<../../../../../../../electron/ai/agents/agent-construction.cjs#L154>)
- z .object — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:154](<../../../../../../../electron/ai/agents/agent-construction.cjs#L154>)
- z.number().int().min — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:156](<../../../../../../../electron/ai/agents/agent-construction.cjs#L156>)
- z.number().int — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:156](<../../../../../../../electron/ai/agents/agent-construction.cjs#L156>)
- z.number — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:156](<../../../../../../../electron/ai/agents/agent-construction.cjs#L156>)
- z.number().int().min — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:157](<../../../../../../../electron/ai/agents/agent-construction.cjs#L157>)
- z.number().int — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:157](<../../../../../../../electron/ai/agents/agent-construction.cjs#L157>)
- z.number — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:157](<../../../../../../../electron/ai/agents/agent-construction.cjs#L157>)
- 14 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-construction.test.cjs:7](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:9](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:14](<../../../../../../../electron/ai/engine-registry.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-b11797218b524d62"></a>

## defaults

[electron/ai/agents/agent-construction.cjs:176](<../../../../../../../electron/ai/agents/agent-construction.cjs#L176>) · FunctionDeclaration · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

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

- [skillsFor](<../skills.cjs.md#s-b3ded4fcddd47806>) — [electron/ai/agents/agent-construction.cjs:204](<../../../../../../../electron/ai/agents/agent-construction.cjs#L204>)
- [skillsFor](<../skills.cjs.md#s-b3ded4fcddd47806>) — [electron/ai/agents/agent-construction.cjs:205](<../../../../../../../electron/ai/agents/agent-construction.cjs#L205>)

**Called by (statically resolved):**

- [AgentStore.get](<agent-store.cjs.md#s-feff3820609fc57c>) — [electron/ai/agents/agent-store.cjs:291](<../../../../../../../electron/ai/agents/agent-store.cjs#L291>)
- [&lt;anonymous@152:110&gt;](<../engine-registry.test.cjs.md#s-e9f24b549acc435a>) — [electron/ai/engine-registry.test.cjs:154](<../../../../../../../electron/ai/engine-registry.test.cjs#L154>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/engine-registry.test.cjs:154](<../../../../../../../electron/ai/engine-registry.test.cjs#L154>) — static-call-site; coverage not established.
- [electron/ai/agents/agent-construction.test.cjs:7](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:9](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:14](<../../../../../../../electron/ai/engine-registry.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-9e0068ef74a008e9"></a>

## invalid

[electron/ai/agents/agent-construction.cjs:216](<../../../../../../../electron/ai/agents/agent-construction.cjs#L216>) · FunctionDeclaration · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/agents/agent-construction.cjs](<agent-construction.cjs.md#s-735a88a8a9e9396f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| message | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/agents/agent-construction.cjs:217](<../../../../../../../electron/ai/agents/agent-construction.cjs#L217>)

**Called by (statically resolved):**

- [validateConstruction](<agent-construction.cjs.md#s-c40c24f689846a0d>) — [electron/ai/agents/agent-construction.cjs:231](<../../../../../../../electron/ai/agents/agent-construction.cjs#L231>)
- [validateConstruction](<agent-construction.cjs.md#s-c40c24f689846a0d>) — [electron/ai/agents/agent-construction.cjs:233](<../../../../../../../electron/ai/agents/agent-construction.cjs#L233>)
- [validateConstruction](<agent-construction.cjs.md#s-c40c24f689846a0d>) — [electron/ai/agents/agent-construction.cjs:238](<../../../../../../../electron/ai/agents/agent-construction.cjs#L238>)
- [validateConstruction](<agent-construction.cjs.md#s-c40c24f689846a0d>) — [electron/ai/agents/agent-construction.cjs:264](<../../../../../../../electron/ai/agents/agent-construction.cjs#L264>)
- [validateConstruction](<agent-construction.cjs.md#s-c40c24f689846a0d>) — [electron/ai/agents/agent-construction.cjs:275](<../../../../../../../electron/ai/agents/agent-construction.cjs#L275>)
- [validateConstruction](<agent-construction.cjs.md#s-c40c24f689846a0d>) — [electron/ai/agents/agent-construction.cjs:280](<../../../../../../../electron/ai/agents/agent-construction.cjs#L280>)
- [validateConstruction](<agent-construction.cjs.md#s-c40c24f689846a0d>) — [electron/ai/agents/agent-construction.cjs:287](<../../../../../../../electron/ai/agents/agent-construction.cjs#L287>)
- [validateConstruction](<agent-construction.cjs.md#s-c40c24f689846a0d>) — [electron/ai/agents/agent-construction.cjs:289](<../../../../../../../electron/ai/agents/agent-construction.cjs#L289>)
- [validateConstruction](<agent-construction.cjs.md#s-c40c24f689846a0d>) — [electron/ai/agents/agent-construction.cjs:297](<../../../../../../../electron/ai/agents/agent-construction.cjs#L297>)
- [validateConstruction](<agent-construction.cjs.md#s-c40c24f689846a0d>) — [electron/ai/agents/agent-construction.cjs:303](<../../../../../../../electron/ai/agents/agent-construction.cjs#L303>)
- [validateConstruction](<agent-construction.cjs.md#s-c40c24f689846a0d>) — [electron/ai/agents/agent-construction.cjs:312](<../../../../../../../electron/ai/agents/agent-construction.cjs#L312>)
- [validateConstruction](<agent-construction.cjs.md#s-c40c24f689846a0d>) — [electron/ai/agents/agent-construction.cjs:329](<../../../../../../../electron/ai/agents/agent-construction.cjs#L329>)
- [validateConstruction](<agent-construction.cjs.md#s-c40c24f689846a0d>) — [electron/ai/agents/agent-construction.cjs:337](<../../../../../../../electron/ai/agents/agent-construction.cjs#L337>)
- [validateConstruction](<agent-construction.cjs.md#s-c40c24f689846a0d>) — [electron/ai/agents/agent-construction.cjs:343](<../../../../../../../electron/ai/agents/agent-construction.cjs#L343>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-construction.test.cjs:7](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:9](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:14](<../../../../../../../electron/ai/engine-registry.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-c40c24f689846a0d"></a>

## validateConstruction

[electron/ai/agents/agent-construction.cjs:220](<../../../../../../../electron/ai/agents/agent-construction.cjs#L220>) · FunctionDeclaration · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

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

- [parse](<../../shared/validation.cjs.md#s-f29367528a73f24d>) — [electron/ai/agents/agent-construction.cjs:221](<../../../../../../../electron/ai/agents/agent-construction.cjs#L221>)
- [invalid](<agent-construction.cjs.md#s-9e0068ef74a008e9>) — [electron/ai/agents/agent-construction.cjs:231](<../../../../../../../electron/ai/agents/agent-construction.cjs#L231>)
- [invalid](<agent-construction.cjs.md#s-9e0068ef74a008e9>) — [electron/ai/agents/agent-construction.cjs:233](<../../../../../../../electron/ai/agents/agent-construction.cjs#L233>)
- [invalid](<agent-construction.cjs.md#s-9e0068ef74a008e9>) — [electron/ai/agents/agent-construction.cjs:238](<../../../../../../../electron/ai/agents/agent-construction.cjs#L238>)
- [invalid](<agent-construction.cjs.md#s-9e0068ef74a008e9>) — [electron/ai/agents/agent-construction.cjs:264](<../../../../../../../electron/ai/agents/agent-construction.cjs#L264>)
- [invalid](<agent-construction.cjs.md#s-9e0068ef74a008e9>) — [electron/ai/agents/agent-construction.cjs:275](<../../../../../../../electron/ai/agents/agent-construction.cjs#L275>)
- [invalid](<agent-construction.cjs.md#s-9e0068ef74a008e9>) — [electron/ai/agents/agent-construction.cjs:280](<../../../../../../../electron/ai/agents/agent-construction.cjs#L280>)
- [invalid](<agent-construction.cjs.md#s-9e0068ef74a008e9>) — [electron/ai/agents/agent-construction.cjs:287](<../../../../../../../electron/ai/agents/agent-construction.cjs#L287>)
- [invalid](<agent-construction.cjs.md#s-9e0068ef74a008e9>) — [electron/ai/agents/agent-construction.cjs:289](<../../../../../../../electron/ai/agents/agent-construction.cjs#L289>)
- [validateCustomInstructions](<agent-policy.cjs.md#s-0dbc6d2e83719bfc>) — [electron/ai/agents/agent-construction.cjs:291](<../../../../../../../electron/ai/agents/agent-construction.cjs#L291>)
- [skillsFor](<../skills.cjs.md#s-b3ded4fcddd47806>) — [electron/ai/agents/agent-construction.cjs:295](<../../../../../../../electron/ai/agents/agent-construction.cjs#L295>)
- [invalid](<agent-construction.cjs.md#s-9e0068ef74a008e9>) — [electron/ai/agents/agent-construction.cjs:297](<../../../../../../../electron/ai/agents/agent-construction.cjs#L297>)
- [validateContextIdentity](<../context-identity.cjs.md#s-074b8d05ecfc17f5>) — [electron/ai/agents/agent-construction.cjs:299](<../../../../../../../electron/ai/agents/agent-construction.cjs#L299>)
- [invalid](<agent-construction.cjs.md#s-9e0068ef74a008e9>) — [electron/ai/agents/agent-construction.cjs:303](<../../../../../../../electron/ai/agents/agent-construction.cjs#L303>)
- [validateContextIdentity](<../context-identity.cjs.md#s-074b8d05ecfc17f5>) — [electron/ai/agents/agent-construction.cjs:305](<../../../../../../../electron/ai/agents/agent-construction.cjs#L305>)
- [invalid](<agent-construction.cjs.md#s-9e0068ef74a008e9>) — [electron/ai/agents/agent-construction.cjs:312](<../../../../../../../electron/ai/agents/agent-construction.cjs#L312>)
- [invalid](<agent-construction.cjs.md#s-9e0068ef74a008e9>) — [electron/ai/agents/agent-construction.cjs:329](<../../../../../../../electron/ai/agents/agent-construction.cjs#L329>)
- [invalid](<agent-construction.cjs.md#s-9e0068ef74a008e9>) — [electron/ai/agents/agent-construction.cjs:337](<../../../../../../../electron/ai/agents/agent-construction.cjs#L337>)
- [invalid](<agent-construction.cjs.md#s-9e0068ef74a008e9>) — [electron/ai/agents/agent-construction.cjs:343](<../../../../../../../electron/ai/agents/agent-construction.cjs#L343>)
- [validateCustomInstructions](<agent-policy.cjs.md#s-0dbc6d2e83719bfc>) — [electron/ai/agents/agent-construction.cjs:345](<../../../../../../../electron/ai/agents/agent-construction.cjs#L345>)
- [validateCustomInstructions](<agent-policy.cjs.md#s-0dbc6d2e83719bfc>) — [electron/ai/agents/agent-construction.cjs:346](<../../../../../../../electron/ai/agents/agent-construction.cjs#L346>)
- [validateCustomInstructions](<agent-policy.cjs.md#s-0dbc6d2e83719bfc>) — [electron/ai/agents/agent-construction.cjs:366](<../../../../../../../electron/ai/agents/agent-construction.cjs#L366>)

**Called by (statically resolved):**

- [&lt;anonymous@111:98&gt;](<agent-construction.test.cjs.md#s-92c86b60c9bd748c>) — [electron/ai/agents/agent-construction.test.cjs:121](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L121>)
- [AgentStore.get](<agent-store.cjs.md#s-feff3820609fc57c>) — [electron/ai/agents/agent-store.cjs:255](<../../../../../../../electron/ai/agents/agent-store.cjs#L255>)
- [AgentStore.saveConstruction.&lt;anonymous@389:23&gt;](<agent-store.cjs.md#s-5d9fe7550818f8a0>) — [electron/ai/agents/agent-store.cjs:414](<../../../../../../../electron/ai/agents/agent-store.cjs#L414>)
- [&lt;anonymous@263:122&gt;.&lt;anonymous@290:5&gt;](<entity-agents.test.cjs.md#s-32df9e400b3f94b7>) — [electron/ai/agents/entity-agents.test.cjs:290](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L290>)
- [&lt;anonymous@295:106&gt;](<entity-agents.test.cjs.md#s-f18c8aa57d1b5d66>) — [electron/ai/agents/entity-agents.test.cjs:300](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L300>)
- [&lt;anonymous@295:106&gt;](<entity-agents.test.cjs.md#s-f18c8aa57d1b5d66>) — [electron/ai/agents/entity-agents.test.cjs:309](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L309>)
- [&lt;anonymous@295:106&gt;.&lt;anonymous@314:5&gt;](<entity-agents.test.cjs.md#s-36c888e113155664>) — [electron/ai/agents/entity-agents.test.cjs:314](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L314>)
- [&lt;anonymous@295:106&gt;.&lt;anonymous@319:5&gt;](<entity-agents.test.cjs.md#s-57f67eec6cbffdf0>) — [electron/ai/agents/entity-agents.test.cjs:319](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L319>)
- [&lt;anonymous@593:108&gt;](<entity-agents.test.cjs.md#s-708df85f8629abe5>) — [electron/ai/agents/entity-agents.test.cjs:607](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L607>)
- [&lt;anonymous@593:108&gt;.&lt;anonymous@624:17&gt;](<entity-agents.test.cjs.md#s-55641c11ab3f67a7>) — [electron/ai/agents/entity-agents.test.cjs:624](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L624>)
- [&lt;anonymous@152:110&gt;](<../engine-registry.test.cjs.md#s-e9f24b549acc435a>) — [electron/ai/engine-registry.test.cjs:159](<../../../../../../../electron/ai/engine-registry.test.cjs#L159>)
- [&lt;anonymous@152:110&gt;](<../engine-registry.test.cjs.md#s-e9f24b549acc435a>) — [electron/ai/engine-registry.test.cjs:160](<../../../../../../../electron/ai/engine-registry.test.cjs#L160>)
- [&lt;anonymous@152:110&gt;.&lt;anonymous@178:19&gt;](<../engine-registry.test.cjs.md#s-79ea263305fa4f36>) — [electron/ai/engine-registry.test.cjs:178](<../../../../../../../electron/ai/engine-registry.test.cjs#L178>)

Unresolved / external call sites: 34.

- Map — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:222](<../../../../../../../electron/ai/agents/agent-construction.cjs#L222>)
- config.nodes.map — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:222](<../../../../../../../electron/ai/agents/agent-construction.cjs#L222>)
- Set — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:225](<../../../../../../../electron/ai/agents/agent-construction.cjs#L225>)
- config.nodes .filter((node) =&gt; node.kind !== "Engine") .map — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:226](<../../../../../../../electron/ai/agents/agent-construction.cjs#L226>)
- config.nodes .filter — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:226](<../../../../../../../electron/ai/agents/agent-construction.cjs#L226>)
- config.nodes.filter — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:229](<../../../../../../../electron/ai/agents/agent-construction.cjs#L229>)
- config.nodes.filter — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:232](<../../../../../../../electron/ai/agents/agent-construction.cjs#L232>)
- Set — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:235](<../../../../../../../electron/ai/agents/agent-construction.cjs#L235>)
- 26 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-construction.test.cjs:121](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L121>) — static-call-site; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:290](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L290>) — static-call-site; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:300](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L300>) — static-call-site; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:309](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L309>) — static-call-site; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:314](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L314>) — static-call-site; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:319](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L319>) — static-call-site; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:607](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L607>) — static-call-site; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:624](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L624>) — static-call-site; coverage not established.
- [electron/ai/engine-registry.test.cjs:159](<../../../../../../../electron/ai/engine-registry.test.cjs#L159>) — static-call-site; coverage not established.
- [electron/ai/engine-registry.test.cjs:160](<../../../../../../../electron/ai/engine-registry.test.cjs#L160>) — static-call-site; coverage not established.
- [electron/ai/engine-registry.test.cjs:178](<../../../../../../../electron/ai/engine-registry.test.cjs#L178>) — static-call-site; coverage not established.
- [electron/ai/agents/agent-construction.test.cjs:7](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:9](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:14](<../../../../../../../electron/ai/engine-registry.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-fd036796b6921bd3"></a>

## validateConstruction.&lt;anonymous@222:42&gt;

[electron/ai/agents/agent-construction.cjs:222](<../../../../../../../electron/ai/agents/agent-construction.cjs#L222>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [validateConstruction](<agent-construction.cjs.md#s-c40c24f689846a0d>).

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

<a id="s-666482c2cbb50537"></a>

## validateConstruction.&lt;anonymous@227:17&gt;

[electron/ai/agents/agent-construction.cjs:227](<../../../../../../../electron/ai/agents/agent-construction.cjs#L227>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [validateConstruction](<agent-construction.cjs.md#s-c40c24f689846a0d>).

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

<a id="s-f8ac5eaa8869b492"></a>

## validateConstruction.&lt;anonymous@228:14&gt;

[electron/ai/agents/agent-construction.cjs:228](<../../../../../../../electron/ai/agents/agent-construction.cjs#L228>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [validateConstruction](<agent-construction.cjs.md#s-c40c24f689846a0d>).

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

<a id="s-90d19304d10ed5bc"></a>

## validateConstruction.&lt;anonymous@229:36&gt;

[electron/ai/agents/agent-construction.cjs:229](<../../../../../../../electron/ai/agents/agent-construction.cjs#L229>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [validateConstruction](<agent-construction.cjs.md#s-c40c24f689846a0d>).

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

<a id="s-e255d28da5555513"></a>

## validateConstruction.&lt;anonymous@232:39&gt;

[electron/ai/agents/agent-construction.cjs:232](<../../../../../../../electron/ai/agents/agent-construction.cjs#L232>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [validateConstruction](<agent-construction.cjs.md#s-c40c24f689846a0d>).

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

<a id="s-26133423e2dcbe4f"></a>

## validateConstruction.&lt;anonymous@235:25&gt;

[electron/ai/agents/agent-construction.cjs:235](<../../../../../../../electron/ai/agents/agent-construction.cjs#L235>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [validateConstruction](<agent-construction.cjs.md#s-c40c24f689846a0d>).

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

<a id="s-e6932bee36a18013"></a>

## validateConstruction.&lt;anonymous@285:37&gt;

[electron/ai/agents/agent-construction.cjs:285](<../../../../../../../electron/ai/agents/agent-construction.cjs#L285>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [validateConstruction](<agent-construction.cjs.md#s-c40c24f689846a0d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| key | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- fields&#91;node.kind&#93;.includes — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:285](<../../../../../../../electron/ai/agents/agent-construction.cjs#L285>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-construction.test.cjs:7](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:9](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:14](<../../../../../../../electron/ai/engine-registry.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-fa820c52823e01c6"></a>

## validateConstruction.&lt;anonymous@336:30&gt;

[electron/ai/agents/agent-construction.cjs:336](<../../../../../../../electron/ai/agents/agent-construction.cjs#L336>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [validateConstruction](<agent-construction.cjs.md#s-c40c24f689846a0d>).

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

<a id="s-d10727035aaadb27"></a>

## validateConstruction.&lt;anonymous@341:28&gt;

[electron/ai/agents/agent-construction.cjs:341](<../../../../../../../electron/ai/agents/agent-construction.cjs#L341>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [validateConstruction](<agent-construction.cjs.md#s-c40c24f689846a0d>).

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

<a id="s-6d0813333f20660c"></a>

## validateConstruction.&lt;anonymous@351:15&gt;

[electron/ai/agents/agent-construction.cjs:351](<../../../../../../../electron/ai/agents/agent-construction.cjs#L351>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [validateConstruction](<agent-construction.cjs.md#s-c40c24f689846a0d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| node | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- config.edges.some — external-or-dynamic-dispatch; [electron/ai/agents/agent-construction.cjs:352](<../../../../../../../electron/ai/agents/agent-construction.cjs#L352>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-construction.test.cjs:7](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:9](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:14](<../../../../../../../electron/ai/engine-registry.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-d359cc8af5246026"></a>

## validateConstruction.&lt;anonymous@351:15&gt;.&lt;anonymous@353:11&gt;

[electron/ai/agents/agent-construction.cjs:353](<../../../../../../../electron/ai/agents/agent-construction.cjs#L353>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [validateConstruction.&lt;anonymous@351:15&gt;](<agent-construction.cjs.md#s-6d0813333f20660c>).

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

<a id="s-e1d9dcdb1ba3c625"></a>

## validateConstruction.&lt;anonymous@358:12&gt;

[electron/ai/agents/agent-construction.cjs:358](<../../../../../../../electron/ai/agents/agent-construction.cjs#L358>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [validateConstruction](<agent-construction.cjs.md#s-c40c24f689846a0d>).

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

<a id="s-4ea604938d01de96"></a>

## validateConstruction.&lt;anonymous@370:30&gt;

[electron/ai/agents/agent-construction.cjs:370](<../../../../../../../electron/ai/agents/agent-construction.cjs#L370>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [validateConstruction](<agent-construction.cjs.md#s-c40c24f689846a0d>).

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

<a id="s-5a2c570b4f923b0f"></a>

## validateConstruction.&lt;anonymous@373:9&gt;

[electron/ai/agents/agent-construction.cjs:373](<../../../../../../../electron/ai/agents/agent-construction.cjs#L373>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [validateConstruction](<agent-construction.cjs.md#s-c40c24f689846a0d>).

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

<a id="s-a5481b70e04baaea"></a>

## validateConstruction.&lt;anonymous@373:9&gt;.&lt;anonymous@376:29&gt;

[electron/ai/agents/agent-construction.cjs:376](<../../../../../../../electron/ai/agents/agent-construction.cjs#L376>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [validateConstruction.&lt;anonymous@373:9&gt;](<agent-construction.cjs.md#s-5a2c570b4f923b0f>).

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

<a id="s-2d431fb4bfec81a2"></a>

## validateConstruction.&lt;anonymous@378:12&gt;

[electron/ai/agents/agent-construction.cjs:378](<../../../../../../../electron/ai/agents/agent-construction.cjs#L378>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [validateConstruction](<agent-construction.cjs.md#s-c40c24f689846a0d>).

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
