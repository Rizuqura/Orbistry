# electron/ai/agents/agent-store.cjs: symbols

[Atlas](<../../../../../README.md>) / [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>) / [electron/ai/agents/agent-store.cjs:1](<../../../../../../../electron/ai/agents/agent-store.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/agents/agent-store.cjs](<agent-store.cjs.md#s-7193255caba971fa>) (Module)
- [idSchema](<agent-store.cjs.md#s-97ff5589158b9f2a>) (SchemaBinding)
- [rowSchema](<agent-store.cjs.md#s-9414db7ddfffa59c>) (SchemaBinding)
- [schema](<agent-store.cjs.md#s-dfcd237495d42ab5>) (SchemaBinding)
- [seed](<agent-store.cjs.md#s-7fe48eec2fe694c9>) (ArrowFunction)
- [fallbackAvatar](<agent-store.cjs.md#s-b80d70abcda41f45>) (ArrowFunction)
- [defaultIds](<agent-store.cjs.md#s-1a17537ccf0a2905>) (ArrowFunction)
- [storedOrDefault](<agent-store.cjs.md#s-450719ec7ed10db2>) (ArrowFunction)
- [withoutRetiredReferences](<agent-store.cjs.md#s-ea17e1507617eada>) (FunctionDeclaration)
- [AgentStore](<agent-store.cjs.md#s-5c48479ffb9d36b6>) (ClassDeclaration)
- [AgentStore.constructor](<agent-store.cjs.md#s-61feae93fee7ec73>) (Constructor)
- [AgentStore.normalizeProfiles](<agent-store.cjs.md#s-3b587231b3c639de>) (MethodDeclaration)
- [AgentStore.normalizeProfiles.&lt;anonymous@131:19&gt;](<agent-store.cjs.md#s-78325ba5282974e5>) (ArrowFunction)
- [AgentStore.normalizeProfiles.&lt;anonymous@132:16&gt;](<agent-store.cjs.md#s-4f24482c0ae2b601>) (ArrowFunction)
- [AgentStore.read](<agent-store.cjs.md#s-3be90932d4fcc267>) (MethodDeclaration)
- [AgentStore.read.&lt;anonymous@151:7&gt;](<agent-store.cjs.md#s-dd35e8ef3ae2c787>) (ArrowFunction)
- [AgentStore.list](<agent-store.cjs.md#s-34fc9e69d7172ee9>) (MethodDeclaration)
- [AgentStore.list.&lt;anonymous@174:17&gt;](<agent-store.cjs.md#s-0ce47076c0b4b723>) (ArrowFunction)
- [AgentStore.list.&lt;anonymous@175:14&gt;](<agent-store.cjs.md#s-2aa059e7b146f7d7>) (ArrowFunction)
- [AgentStore.archive](<agent-store.cjs.md#s-92d1829d7ff7e323>) (MethodDeclaration)
- [AgentStore.archive.&lt;anonymous@180:23&gt;](<agent-store.cjs.md#s-d4ed7663c6efd3ff>) (ArrowFunction)
- [AgentStore.archive.&lt;anonymous@180:23&gt;.{ id }](<agent-store.cjs.md#s-1224270a7b5fb39d>) (SchemaBinding)
- [AgentStore.create](<agent-store.cjs.md#s-a855b2d37033dc99>) (MethodDeclaration)
- [AgentStore.create.&lt;anonymous@194:23&gt;](<agent-store.cjs.md#s-9bcf573f56449023>) (ArrowFunction)
- [AgentStore.create.&lt;anonymous@194:23&gt;.patch](<agent-store.cjs.md#s-462acc67e49dc642>) (SchemaBinding)
- [AgentStore.create.&lt;anonymous@194:23&gt;.&lt;anonymous@217:19&gt;](<agent-store.cjs.md#s-721f8ac3c1bfedae>) (ArrowFunction)
- [AgentStore.create.&lt;anonymous@194:23&gt;.&lt;anonymous@218:16&gt;](<agent-store.cjs.md#s-59de188728e2f4e9>) (ArrowFunction)
- [AgentStore.create.&lt;anonymous@194:23&gt;.&lt;anonymous@222:11&gt;](<agent-store.cjs.md#s-8b0d82b82cd4533c>) (ArrowFunction)
- [AgentStore.get](<agent-store.cjs.md#s-feff3820609fc57c>) (MethodDeclaration)
- [AgentStore.avatarUrl](<agent-store.cjs.md#s-78d662b9ac7d6d48>) (MethodDeclaration)
- [AgentStore.resolveAppearance](<agent-store.cjs.md#s-131f9ea2850450d6>) (MethodDeclaration)
- [AgentStore.backdropAsset](<agent-store.cjs.md#s-3f40538fbdbbeacd>) (MethodDeclaration)
- [AgentStore.constructionAvatar](<agent-store.cjs.md#s-7aaef4f6575aff33>) (MethodDeclaration)
- [AgentStore.saveConstruction](<agent-store.cjs.md#s-79e9bb1291ef0de1>) (MethodDeclaration)
- [AgentStore.saveConstruction.&lt;anonymous@389:23&gt;](<agent-store.cjs.md#s-5d9fe7550818f8a0>) (ArrowFunction)
- [AgentStore.saveConstruction.&lt;anonymous@389:23&gt;.patch](<agent-store.cjs.md#s-236a247583a053e3>) (SchemaBinding)
- [AgentStore.decodePicture](<agent-store.cjs.md#s-2b527d12d06d9f39>) (MethodDeclaration)
- [AgentStore.prepareBackdrop](<agent-store.cjs.md#s-1bfecd82d2554bef>) (MethodDeclaration)
- [AgentStore.prepareAvatar](<agent-store.cjs.md#s-04663720655bccdc>) (MethodDeclaration)
- [AgentStore.save](<agent-store.cjs.md#s-0dc45f8eafe8dd4b>) (MethodDeclaration)
- [AgentStore.save.&lt;anonymous@580:23&gt;](<agent-store.cjs.md#s-92c7ebeb214bb98f>) (ArrowFunction)
- [AgentStore.save.&lt;anonymous@580:23&gt;.patch](<agent-store.cjs.md#s-4faff5b06043bb90>) (SchemaBinding)

<a id="s-7193255caba971fa"></a>

## electron/ai/agents/agent-store.cjs

[electron/ai/agents/agent-store.cjs:1](<../../../../../../../electron/ai/agents/agent-store.cjs#L1>) · Module · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 9.

- require — module-loader; [electron/ai/agents/agent-store.cjs:1](<../../../../../../../electron/ai/agents/agent-store.cjs#L1>)
- require — module-loader; [electron/ai/agents/agent-store.cjs:2](<../../../../../../../electron/ai/agents/agent-store.cjs#L2>)
- require — module-loader; [electron/ai/agents/agent-store.cjs:3](<../../../../../../../electron/ai/agents/agent-store.cjs#L3>)
- require — module-loader; [electron/ai/agents/agent-store.cjs:10](<../../../../../../../electron/ai/agents/agent-store.cjs#L10>)
- require — module-loader; [electron/ai/agents/agent-store.cjs:11](<../../../../../../../electron/ai/agents/agent-store.cjs#L11>)
- require — module-loader; [electron/ai/agents/agent-store.cjs:12](<../../../../../../../electron/ai/agents/agent-store.cjs#L12>)
- require — module-loader; [electron/ai/agents/agent-store.cjs:13](<../../../../../../../electron/ai/agents/agent-store.cjs#L13>)
- require — module-loader; [electron/ai/agents/agent-store.cjs:22](<../../../../../../../electron/ai/agents/agent-store.cjs#L22>)
- 1 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-store.test.cjs:24](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:394](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L394>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:410](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L410>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:7](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:10](<../../../../../../../electron/ai/engine-registry.test.cjs#L10>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:20](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L20>) — file-import-only; coverage not established.

<a id="s-97ff5589158b9f2a"></a>

## idSchema

[electron/ai/agents/agent-store.cjs:29](<../../../../../../../electron/ai/agents/agent-store.cjs#L29>) · SchemaBinding · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/agents/agent-store.cjs](<agent-store.cjs.md#s-7193255caba971fa>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- z.string().regex — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:29](<../../../../../../../electron/ai/agents/agent-store.cjs#L29>)
- z.string — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:29](<../../../../../../../electron/ai/agents/agent-store.cjs#L29>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-store.test.cjs:24](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:394](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L394>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:410](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L410>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:7](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:10](<../../../../../../../electron/ai/engine-registry.test.cjs#L10>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:20](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L20>) — file-import-only; coverage not established.

<a id="s-9414db7ddfffa59c"></a>

## rowSchema

[electron/ai/agents/agent-store.cjs:30](<../../../../../../../electron/ai/agents/agent-store.cjs#L30>) · SchemaBinding · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/agents/agent-store.cjs](<agent-store.cjs.md#s-7193255caba971fa>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 35.

- z .object({ id: idSchema, displayName: z.string().min(1).max(120), avatar: z.union(&#91; z .object({ type: z.literal("letter"), letter: z.string().regex(/^&#91;A-Z0-9&#93;$/), }) .strict(), z  — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:30](<../../../../../../../electron/ai/agents/agent-store.cjs#L30>)
- z .object — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:30](<../../../../../../../electron/ai/agents/agent-store.cjs#L30>)
- z.string().min(1).max — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:33](<../../../../../../../electron/ai/agents/agent-store.cjs#L33>)
- z.string().min — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:33](<../../../../../../../electron/ai/agents/agent-store.cjs#L33>)
- z.string — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:33](<../../../../../../../electron/ai/agents/agent-store.cjs#L33>)
- z.union — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:34](<../../../../../../../electron/ai/agents/agent-store.cjs#L34>)
- z .object({ type: z.literal("letter"), letter: z.string().regex(/^&#91;A-Z0-9&#93;$/), }) .strict — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:35](<../../../../../../../electron/ai/agents/agent-store.cjs#L35>)
- z .object — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:35](<../../../../../../../electron/ai/agents/agent-store.cjs#L35>)
- 27 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-store.test.cjs:24](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:394](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L394>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:410](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L410>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:7](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:10](<../../../../../../../electron/ai/engine-registry.test.cjs#L10>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:20](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L20>) — file-import-only; coverage not established.

<a id="s-dfcd237495d42ab5"></a>

## schema

[electron/ai/agents/agent-store.cjs:60](<../../../../../../../electron/ai/agents/agent-store.cjs#L60>) · SchemaBinding · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/agents/agent-store.cjs](<agent-store.cjs.md#s-7193255caba971fa>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 6.

- z .object({ schemaVersion: z.literal(1), includeDefaultAgents: z.boolean().optional(), agents: z.record(idSchema, rowSchema), }) .strict — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:60](<../../../../../../../electron/ai/agents/agent-store.cjs#L60>)
- z .object — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:60](<../../../../../../../electron/ai/agents/agent-store.cjs#L60>)
- z.literal — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:62](<../../../../../../../electron/ai/agents/agent-store.cjs#L62>)
- z.boolean().optional — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:63](<../../../../../../../electron/ai/agents/agent-store.cjs#L63>)
- z.boolean — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:63](<../../../../../../../electron/ai/agents/agent-store.cjs#L63>)
- z.record — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:64](<../../../../../../../electron/ai/agents/agent-store.cjs#L64>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-store.test.cjs:24](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:394](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L394>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:410](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L410>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:7](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:10](<../../../../../../../electron/ai/engine-registry.test.cjs#L10>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:20](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L20>) — file-import-only; coverage not established.

<a id="s-7fe48eec2fe694c9"></a>

## seed

[electron/ai/agents/agent-store.cjs:67](<../../../../../../../electron/ai/agents/agent-store.cjs#L67>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/agents/agent-store.cjs](<agent-store.cjs.md#s-7193255caba971fa>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| id | string | compiler-inferred | optional, default present |

Returns: { id: string; displayName: any; avatar: { type: string; letter: any; }; customInstructions: string; mode: string; policyVersion: string; createdAt: any; updatedAt: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [storedOrDefault](<agent-store.cjs.md#s-450719ec7ed10db2>) — [electron/ai/agents/agent-store.cjs:95](<../../../../../../../electron/ai/agents/agent-store.cjs#L95>)
- [AgentStore.read](<agent-store.cjs.md#s-3be90932d4fcc267>) — [electron/ai/agents/agent-store.cjs:161](<../../../../../../../electron/ai/agents/agent-store.cjs#L161>)
- [AgentStore.create.&lt;anonymous@194:23&gt;.&lt;anonymous@218:16&gt;](<agent-store.cjs.md#s-59de188728e2f4e9>) — [electron/ai/agents/agent-store.cjs:218](<../../../../../../../electron/ai/agents/agent-store.cjs#L218>)

Unresolved / external call sites: 2.

- new Date().toISOString — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:70](<../../../../../../../electron/ai/agents/agent-store.cjs#L70>)
- Date — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:70](<../../../../../../../electron/ai/agents/agent-store.cjs#L70>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-store.test.cjs:24](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:394](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L394>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:410](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L410>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:7](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:10](<../../../../../../../electron/ai/engine-registry.test.cjs#L10>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:20](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L20>) — file-import-only; coverage not established.

<a id="s-b80d70abcda41f45"></a>

## fallbackAvatar

[electron/ai/agents/agent-store.cjs:82](<../../../../../../../electron/ai/agents/agent-store.cjs#L82>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/agents/agent-store.cjs](<agent-store.cjs.md#s-7193255caba971fa>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| row | any | compiler-inferred | required |

Returns: { type: string; letter: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [AgentStore.create.&lt;anonymous@194:23&gt;](<agent-store.cjs.md#s-9bcf573f56449023>) — [electron/ai/agents/agent-store.cjs:239](<../../../../../../../electron/ai/agents/agent-store.cjs#L239>)
- [AgentStore.get](<agent-store.cjs.md#s-feff3820609fc57c>) — [electron/ai/agents/agent-store.cjs:315](<../../../../../../../electron/ai/agents/agent-store.cjs#L315>)
- [AgentStore.constructionAvatar](<agent-store.cjs.md#s-7aaef4f6575aff33>) — [electron/ai/agents/agent-store.cjs:370](<../../../../../../../electron/ai/agents/agent-store.cjs#L370>)
- [AgentStore.save.&lt;anonymous@580:23&gt;](<agent-store.cjs.md#s-92c7ebeb214bb98f>) — [electron/ai/agents/agent-store.cjs:599](<../../../../../../../electron/ai/agents/agent-store.cjs#L599>)

Unresolved / external call sites: 2.

- row.displayName.toUpperCase().match — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:86](<../../../../../../../electron/ai/agents/agent-store.cjs#L86>)
- row.displayName.toUpperCase — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:86](<../../../../../../../electron/ai/agents/agent-store.cjs#L86>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-store.test.cjs:24](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:394](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L394>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:410](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L410>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:7](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:10](<../../../../../../../electron/ai/engine-registry.test.cjs#L10>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:20](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L20>) — file-import-only; coverage not established.

<a id="s-1a17537ccf0a2905"></a>

## defaultIds

[electron/ai/agents/agent-store.cjs:89](<../../../../../../../electron/ai/agents/agent-store.cjs#L89>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/agents/agent-store.cjs](<agent-store.cjs.md#s-7193255caba971fa>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| state | any | compiler-inferred | required |
| allowDefaults | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [AgentStore.list](<agent-store.cjs.md#s-34fc9e69d7172ee9>) — [electron/ai/agents/agent-store.cjs:170](<../../../../../../../electron/ai/agents/agent-store.cjs#L170>)
- [AgentStore.create.&lt;anonymous@194:23&gt;](<agent-store.cjs.md#s-9bcf573f56449023>) — [electron/ai/agents/agent-store.cjs:216](<../../../../../../../electron/ai/agents/agent-store.cjs#L216>)

Unresolved / external call sites: 1.

- Object.keys — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:92](<../../../../../../../electron/ai/agents/agent-store.cjs#L92>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-store.test.cjs:24](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:394](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L394>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:410](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L410>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:7](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:10](<../../../../../../../electron/ai/engine-registry.test.cjs#L10>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:20](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L20>) — file-import-only; coverage not established.

<a id="s-450719ec7ed10db2"></a>

## storedOrDefault

[electron/ai/agents/agent-store.cjs:93](<../../../../../../../electron/ai/agents/agent-store.cjs#L93>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/agents/agent-store.cjs](<agent-store.cjs.md#s-7193255caba971fa>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| state | any | compiler-inferred | required |
| id | any | compiler-inferred | required |
| allowDefaults | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [seed](<agent-store.cjs.md#s-7fe48eec2fe694c9>) — [electron/ai/agents/agent-store.cjs:95](<../../../../../../../electron/ai/agents/agent-store.cjs#L95>)

**Called by (statically resolved):**

- [AgentStore.archive.&lt;anonymous@180:23&gt;](<agent-store.cjs.md#s-d4ed7663c6efd3ff>) — [electron/ai/agents/agent-store.cjs:183](<../../../../../../../electron/ai/agents/agent-store.cjs#L183>)
- [AgentStore.get](<agent-store.cjs.md#s-feff3820609fc57c>) — [electron/ai/agents/agent-store.cjs:251](<../../../../../../../electron/ai/agents/agent-store.cjs#L251>)
- [AgentStore.saveConstruction.&lt;anonymous@389:23&gt;](<agent-store.cjs.md#s-5d9fe7550818f8a0>) — [electron/ai/agents/agent-store.cjs:406](<../../../../../../../electron/ai/agents/agent-store.cjs#L406>)
- [AgentStore.save.&lt;anonymous@580:23&gt;](<agent-store.cjs.md#s-92c7ebeb214bb98f>) — [electron/ai/agents/agent-store.cjs:595](<../../../../../../../electron/ai/agents/agent-store.cjs#L595>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-store.test.cjs:24](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:394](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L394>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:410](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L410>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:7](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:10](<../../../../../../../electron/ai/engine-registry.test.cjs#L10>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:20](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L20>) — file-import-only; coverage not established.

<a id="s-ea17e1507617eada"></a>

## withoutRetiredReferences

[electron/ai/agents/agent-store.cjs:98](<../../../../../../../electron/ai/agents/agent-store.cjs#L98>) · FunctionDeclaration · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/agents/agent-store.cjs](<agent-store.cjs.md#s-7193255caba971fa>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [AgentStore.read.&lt;anonymous@151:7&gt;](<agent-store.cjs.md#s-dd35e8ef3ae2c787>) — [electron/ai/agents/agent-store.cjs:154](<../../../../../../../electron/ai/agents/agent-store.cjs#L154>)

Unresolved / external call sites: 3.

- structuredClone — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:99](<../../../../../../../electron/ai/agents/agent-store.cjs#L99>)
- Object.values — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:100](<../../../../../../../electron/ai/agents/agent-store.cjs#L100>)
- Array.isArray — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:105](<../../../../../../../electron/ai/agents/agent-store.cjs#L105>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-store.test.cjs:24](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:394](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L394>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:410](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L410>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:7](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:10](<../../../../../../../electron/ai/engine-registry.test.cjs#L10>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:20](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L20>) — file-import-only; coverage not established.

<a id="s-5c48479ffb9d36b6"></a>

## AgentStore

[electron/ai/agents/agent-store.cjs:117](<../../../../../../../electron/ai/agents/agent-store.cjs#L117>) · ClassDeclaration · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: AgentStore ([electron/ai/agents/agent-store.cjs:1](<../../../../../../../electron/ai/agents/agent-store.cjs#L1>)).

Lexical owner: [electron/ai/agents/agent-store.cjs](<agent-store.cjs.md#s-7193255caba971fa>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-store.test.cjs:24](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:394](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L394>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:410](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L410>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:7](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:10](<../../../../../../../electron/ai/engine-registry.test.cjs#L10>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:20](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L20>) — file-import-only; coverage not established.

<a id="s-61feae93fee7ec73"></a>

## AgentStore.constructor

[electron/ai/agents/agent-store.cjs:118](<../../../../../../../electron/ai/agents/agent-store.cjs#L118>) · Constructor · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [AgentStore](<agent-store.cjs.md#s-5c48479ffb9d36b6>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| directory | any | compiler-inferred | required |
| decodeImage | any | compiler-inferred | required |
| options | {} | compiler-inferred | optional, default present |

Returns: AgentStore (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [serialQueue](<../../core/persistence/json-store.cjs.md#s-a8a605453bc9a09a>) — [electron/ai/agents/agent-store.cjs:123](<../../../../../../../electron/ai/agents/agent-store.cjs#L123>)

**Called by (statically resolved):**

- [&lt;anonymous@22:85&gt;](<agent-store.test.cjs.md#s-1e06a9ac33f08e0e>) — [electron/ai/agents/agent-store.test.cjs:25](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L25>)
- [&lt;anonymous@392:85&gt;](<agent-store.test.cjs.md#s-872f64c210c4127c>) — [electron/ai/agents/agent-store.test.cjs:395](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L395>)
- [&lt;anonymous@403:107&gt;](<agent-store.test.cjs.md#s-af456ca4470f940b>) — [electron/ai/agents/agent-store.test.cjs:411](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L411>)
- [fixture](<entity-agents.test.cjs.md#s-9ad48d6b7854c1ed>) — [electron/ai/agents/entity-agents.test.cjs:35](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L35>)
- [&lt;anonymous@267:122&gt;](<entity-agents.test.cjs.md#s-170a0d3c49e413cb>) — [electron/ai/agents/entity-agents.test.cjs:269](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L269>)
- [&lt;anonymous@1297:116&gt;](<entity-agents.test.cjs.md#s-912c4903c18a71e9>) — [electron/ai/agents/entity-agents.test.cjs:1335](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L1335>)
- [fixture](<../engine-registry.test.cjs.md#s-65055825671a5a43>) — [electron/ai/engine-registry.test.cjs:75](<../../../../../../../electron/ai/engine-registry.test.cjs#L75>)
- [&lt;anonymous@183:106&gt;](<../engine-registry.test.cjs.md#s-4ed4a78d66cd545d>) — [electron/ai/engine-registry.test.cjs:206](<../../../../../../../electron/ai/engine-registry.test.cjs#L206>)
- [&lt;anonymous@163:22&gt;](<../../main.cjs.md#s-2232a6bfcb723f81>) — [electron/main.cjs:229](<../../../../../../../electron/main.cjs#L229>)
- [main](<../../../scripts/acceptance/electron-backend-reset-smoke.cjs.md#s-648eff2573c5a425>) — [scripts/acceptance/electron-backend-reset-smoke.cjs:20](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L20>)
- [main](<../../../scripts/enable-entity-agent-read-access.cjs.md#s-86d517edd5e58413>) — [scripts/enable-entity-agent-read-access.cjs:25](<../../../../../../../scripts/enable-entity-agent-read-access.cjs#L25>)
- [main](<../../../scripts/engine-chat-live.cjs.md#s-d9d25d752f6311a1>) — [scripts/engine-chat-live.cjs:67](<../../../../../../../scripts/engine-chat-live.cjs#L67>)

Unresolved / external call sites: 2.

- path.join — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:119](<../../../../../../../electron/ai/agents/agent-store.cjs#L119>)
- path.join — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:120](<../../../../../../../electron/ai/agents/agent-store.cjs#L120>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-store.test.cjs:25](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L25>) — static-call-site; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:395](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L395>) — static-call-site; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:411](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L411>) — static-call-site; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:35](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L35>) — static-call-site; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:269](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L269>) — static-call-site; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:1335](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L1335>) — static-call-site; coverage not established.
- [electron/ai/engine-registry.test.cjs:75](<../../../../../../../electron/ai/engine-registry.test.cjs#L75>) — static-call-site; coverage not established.
- [electron/ai/engine-registry.test.cjs:206](<../../../../../../../electron/ai/engine-registry.test.cjs#L206>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:20](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L20>) — static-call-site; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:24](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:394](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L394>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:410](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L410>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:7](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:10](<../../../../../../../electron/ai/engine-registry.test.cjs#L10>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:20](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L20>) — file-import-only; coverage not established.

<a id="s-3b587231b3c639de"></a>

## AgentStore.normalizeProfiles

[electron/ai/agents/agent-store.cjs:125](<../../../../../../../electron/ai/agents/agent-store.cjs#L125>) · MethodDeclaration · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [AgentStore](<agent-store.cjs.md#s-5c48479ffb9d36b6>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| state | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [AgentStore.read.&lt;anonymous@151:7&gt;](<agent-store.cjs.md#s-dd35e8ef3ae2c787>) — [electron/ai/agents/agent-store.cjs:154](<../../../../../../../electron/ai/agents/agent-store.cjs#L154>)

Unresolved / external call sites: 6.

- Set — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:129](<../../../../../../../electron/ai/agents/agent-store.cjs#L129>)
- Object.values(state.agents) .filter((row) =&gt; row !== legacy) .map — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:130](<../../../../../../../electron/ai/agents/agent-store.cjs#L130>)
- Object.values(state.agents) .filter — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:130](<../../../../../../../electron/ai/agents/agent-store.cjs#L130>)
- Object.values — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:130](<../../../../../../../electron/ai/agents/agent-store.cjs#L130>)
- names.has — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:136](<../../../../../../../electron/ai/agents/agent-store.cjs#L136>)
- name.toLowerCase — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:136](<../../../../../../../electron/ai/agents/agent-store.cjs#L136>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-store.test.cjs:24](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:394](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L394>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:410](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L410>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:7](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:10](<../../../../../../../electron/ai/engine-registry.test.cjs#L10>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:20](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L20>) — file-import-only; coverage not established.

<a id="s-78325ba5282974e5"></a>

## AgentStore.normalizeProfiles.&lt;anonymous@131:19&gt;

[electron/ai/agents/agent-store.cjs:131](<../../../../../../../electron/ai/agents/agent-store.cjs#L131>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [AgentStore.normalizeProfiles](<agent-store.cjs.md#s-3b587231b3c639de>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| row | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-store.test.cjs:24](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:394](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L394>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:410](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L410>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:7](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:10](<../../../../../../../electron/ai/engine-registry.test.cjs#L10>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:20](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L20>) — file-import-only; coverage not established.

<a id="s-4f24482c0ae2b601"></a>

## AgentStore.normalizeProfiles.&lt;anonymous@132:16&gt;

[electron/ai/agents/agent-store.cjs:132](<../../../../../../../electron/ai/agents/agent-store.cjs#L132>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [AgentStore.normalizeProfiles](<agent-store.cjs.md#s-3b587231b3c639de>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| row | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- row.displayName.toLowerCase — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:132](<../../../../../../../electron/ai/agents/agent-store.cjs#L132>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-store.test.cjs:24](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:394](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L394>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:410](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L410>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:7](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:10](<../../../../../../../electron/ai/engine-registry.test.cjs#L10>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:20](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L20>) — file-import-only; coverage not established.

<a id="s-3be90932d4fcc267"></a>

## AgentStore.read

[electron/ai/agents/agent-store.cjs:148](<../../../../../../../electron/ai/agents/agent-store.cjs#L148>) · MethodDeclaration · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [AgentStore](<agent-store.cjs.md#s-5c48479ffb9d36b6>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [readJson](<../../core/persistence/json-store.cjs.md#s-7f9e3b493f3ab942>) — [electron/ai/agents/agent-store.cjs:149](<../../../../../../../electron/ai/agents/agent-store.cjs#L149>)
- [seed](<agent-store.cjs.md#s-7fe48eec2fe694c9>) — [electron/ai/agents/agent-store.cjs:161](<../../../../../../../electron/ai/agents/agent-store.cjs#L161>)

**Called by (statically resolved):**

- [AgentStore.list](<agent-store.cjs.md#s-34fc9e69d7172ee9>) — [electron/ai/agents/agent-store.cjs:166](<../../../../../../../electron/ai/agents/agent-store.cjs#L166>)
- [AgentStore.archive.&lt;anonymous@180:23&gt;](<agent-store.cjs.md#s-d4ed7663c6efd3ff>) — [electron/ai/agents/agent-store.cjs:182](<../../../../../../../electron/ai/agents/agent-store.cjs#L182>)
- [AgentStore.create.&lt;anonymous@194:23&gt;](<agent-store.cjs.md#s-9bcf573f56449023>) — [electron/ai/agents/agent-store.cjs:204](<../../../../../../../electron/ai/agents/agent-store.cjs#L204>)
- [AgentStore.get](<agent-store.cjs.md#s-feff3820609fc57c>) — [electron/ai/agents/agent-store.cjs:247](<../../../../../../../electron/ai/agents/agent-store.cjs#L247>)
- [AgentStore.saveConstruction.&lt;anonymous@389:23&gt;](<agent-store.cjs.md#s-5d9fe7550818f8a0>) — [electron/ai/agents/agent-store.cjs:405](<../../../../../../../electron/ai/agents/agent-store.cjs#L405>)
- [AgentStore.save.&lt;anonymous@580:23&gt;](<agent-store.cjs.md#s-92c7ebeb214bb98f>) — [electron/ai/agents/agent-store.cjs:594](<../../../../../../../electron/ai/agents/agent-store.cjs#L594>)
- [&lt;anonymous@30:95&gt;](<agent-store.test.cjs.md#s-baa985941a96dcef>) — [electron/ai/agents/agent-store.test.cjs:52](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L52>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-store.test.cjs:52](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L52>) — static-call-site; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:24](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:394](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L394>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:410](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L410>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:7](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:10](<../../../../../../../electron/ai/engine-registry.test.cjs#L10>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:20](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L20>) — file-import-only; coverage not established.

<a id="s-dd35e8ef3ae2c787"></a>

## AgentStore.read.&lt;anonymous@151:7&gt;

[electron/ai/agents/agent-store.cjs:151](<../../../../../../../electron/ai/agents/agent-store.cjs#L151>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [AgentStore.read](<agent-store.cjs.md#s-3be90932d4fcc267>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [parse](<../../shared/validation.cjs.md#s-f29367528a73f24d>) — [electron/ai/agents/agent-store.cjs:152](<../../../../../../../electron/ai/agents/agent-store.cjs#L152>)
- [AgentStore.normalizeProfiles](<agent-store.cjs.md#s-3b587231b3c639de>) — [electron/ai/agents/agent-store.cjs:154](<../../../../../../../electron/ai/agents/agent-store.cjs#L154>)
- [withoutRetiredReferences](<agent-store.cjs.md#s-ea17e1507617eada>) — [electron/ai/agents/agent-store.cjs:154](<../../../../../../../electron/ai/agents/agent-store.cjs#L154>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-store.test.cjs:24](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:394](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L394>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:410](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L410>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:7](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:10](<../../../../../../../electron/ai/engine-registry.test.cjs#L10>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:20](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L20>) — file-import-only; coverage not established.

<a id="s-34fc9e69d7172ee9"></a>

## AgentStore.list

[electron/ai/agents/agent-store.cjs:165](<../../../../../../../electron/ai/agents/agent-store.cjs#L165>) · MethodDeclaration · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [AgentStore](<agent-store.cjs.md#s-5c48479ffb9d36b6>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [AgentStore.read](<agent-store.cjs.md#s-3be90932d4fcc267>) — [electron/ai/agents/agent-store.cjs:166](<../../../../../../../electron/ai/agents/agent-store.cjs#L166>)
- [defaultIds](<agent-store.cjs.md#s-1a17537ccf0a2905>) — [electron/ai/agents/agent-store.cjs:170](<../../../../../../../electron/ai/agents/agent-store.cjs#L170>)

**Called by (statically resolved):**

- [&lt;anonymous@22:85&gt;](<agent-store.test.cjs.md#s-1e06a9ac33f08e0e>) — [electron/ai/agents/agent-store.test.cjs:26](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L26>)
- [&lt;anonymous@30:95&gt;](<agent-store.test.cjs.md#s-baa985941a96dcef>) — [electron/ai/agents/agent-store.test.cjs:49](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L49>)
- [&lt;anonymous@80:101&gt;](<agent-store.test.cjs.md#s-0dbef8c3f34bd547>) — [electron/ai/agents/agent-store.test.cjs:119](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L119>)
- [&lt;anonymous@392:85&gt;](<agent-store.test.cjs.md#s-872f64c210c4127c>) — [electron/ai/agents/agent-store.test.cjs:398](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L398>)
- [&lt;anonymous@403:107&gt;](<agent-store.test.cjs.md#s-af456ca4470f940b>) — [electron/ai/agents/agent-store.test.cjs:412](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L412>)
- [&lt;anonymous@1297:116&gt;](<entity-agents.test.cjs.md#s-912c4903c18a71e9>) — [electron/ai/agents/entity-agents.test.cjs:1336](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L1336>)

Unresolved / external call sites: 5.

- Promise.all — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:167](<../../../../../../../electron/ai/agents/agent-store.cjs#L167>)
- &#91; ...new Set(&#91; ...defaultIds(state, this.includeDefaultAgents), ...Object.keys(state.agents), &#93;), &#93; .filter((id) =&gt; !state.agents&#91;id&#93;?.deletedAt) .map — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:168](<../../../../../../../electron/ai/agents/agent-store.cjs#L168>)
- &#91; ...new Set(&#91; ...defaultIds(state, this.includeDefaultAgents), ...Object.keys(state.agents), &#93;), &#93; .filter — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:168](<../../../../../../../electron/ai/agents/agent-store.cjs#L168>)
- Set — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:169](<../../../../../../../electron/ai/agents/agent-store.cjs#L169>)
- Object.keys — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:171](<../../../../../../../electron/ai/agents/agent-store.cjs#L171>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-store.test.cjs:26](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L26>) — static-call-site; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:49](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L49>) — static-call-site; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:119](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L119>) — static-call-site; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:398](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L398>) — static-call-site; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:412](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L412>) — static-call-site; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:1336](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L1336>) — static-call-site; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:24](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:394](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L394>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:410](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L410>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:7](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:10](<../../../../../../../electron/ai/engine-registry.test.cjs#L10>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:20](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L20>) — file-import-only; coverage not established.

<a id="s-0ce47076c0b4b723"></a>

## AgentStore.list.&lt;anonymous@174:17&gt;

[electron/ai/agents/agent-store.cjs:174](<../../../../../../../electron/ai/agents/agent-store.cjs#L174>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [AgentStore.list](<agent-store.cjs.md#s-34fc9e69d7172ee9>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| id | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-store.test.cjs:24](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:394](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L394>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:410](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L410>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:7](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:10](<../../../../../../../electron/ai/engine-registry.test.cjs#L10>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:20](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L20>) — file-import-only; coverage not established.

<a id="s-2aa059e7b146f7d7"></a>

## AgentStore.list.&lt;anonymous@175:14&gt;

[electron/ai/agents/agent-store.cjs:175](<../../../../../../../electron/ai/agents/agent-store.cjs#L175>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [AgentStore.list](<agent-store.cjs.md#s-34fc9e69d7172ee9>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| id | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [AgentStore.get](<agent-store.cjs.md#s-feff3820609fc57c>) — [electron/ai/agents/agent-store.cjs:175](<../../../../../../../electron/ai/agents/agent-store.cjs#L175>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-store.test.cjs:24](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:394](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L394>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:410](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L410>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:7](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:10](<../../../../../../../electron/ai/engine-registry.test.cjs#L10>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:20](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L20>) — file-import-only; coverage not established.

<a id="s-92d1829d7ff7e323"></a>

## AgentStore.archive

[electron/ai/agents/agent-store.cjs:179](<../../../../../../../electron/ai/agents/agent-store.cjs#L179>) · MethodDeclaration · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

Archives an agent without deleting its assets, chats, assignments or execution history. Serialized, idempotent and restricted to validated IDs.

Purpose evidence: jsdoc.

Lexical owner: [AgentStore](<agent-store.cjs.md#s-5c48479ffb9d36b6>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- this.queue — signature-only-candidate; [electron/ai/agents/agent-store.cjs:180](<../../../../../../../electron/ai/agents/agent-store.cjs#L180>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-store.test.cjs:24](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:394](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L394>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:410](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L410>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:7](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:10](<../../../../../../../electron/ai/engine-registry.test.cjs#L10>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:20](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L20>) — file-import-only; coverage not established.

<a id="s-d4ed7663c6efd3ff"></a>

## AgentStore.archive.&lt;anonymous@180:23&gt;

[electron/ai/agents/agent-store.cjs:180](<../../../../../../../electron/ai/agents/agent-store.cjs#L180>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [AgentStore.archive](<agent-store.cjs.md#s-92d1829d7ff7e323>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [AgentStore.read](<agent-store.cjs.md#s-3be90932d4fcc267>) — [electron/ai/agents/agent-store.cjs:182](<../../../../../../../electron/ai/agents/agent-store.cjs#L182>)
- [storedOrDefault](<agent-store.cjs.md#s-450719ec7ed10db2>) — [electron/ai/agents/agent-store.cjs:183](<../../../../../../../electron/ai/agents/agent-store.cjs#L183>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/agents/agent-store.cjs:185](<../../../../../../../electron/ai/agents/agent-store.cjs#L185>)
- [writeJson](<../../core/persistence/json-store.cjs.md#s-5030c6156f98dba1>) — [electron/ai/agents/agent-store.cjs:188](<../../../../../../../electron/ai/agents/agent-store.cjs#L188>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- new Date().toISOString — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:187](<../../../../../../../electron/ai/agents/agent-store.cjs#L187>)
- Date — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:187](<../../../../../../../electron/ai/agents/agent-store.cjs#L187>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-store.test.cjs:24](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:394](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L394>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:410](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L410>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:7](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:10](<../../../../../../../electron/ai/engine-registry.test.cjs#L10>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:20](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L20>) — file-import-only; coverage not established.

<a id="s-1224270a7b5fb39d"></a>

## AgentStore.archive.&lt;anonymous@180:23&gt;.{ id }

[electron/ai/agents/agent-store.cjs:181](<../../../../../../../electron/ai/agents/agent-store.cjs#L181>) · SchemaBinding · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [AgentStore.archive.&lt;anonymous@180:23&gt;](<agent-store.cjs.md#s-d4ed7663c6efd3ff>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

- [parse](<../../shared/validation.cjs.md#s-f29367528a73f24d>) — [electron/ai/agents/agent-store.cjs:181](<../../../../../../../electron/ai/agents/agent-store.cjs#L181>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- z.object({ id: idSchema }).strict — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:181](<../../../../../../../electron/ai/agents/agent-store.cjs#L181>)
- z.object — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:181](<../../../../../../../electron/ai/agents/agent-store.cjs#L181>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-store.test.cjs:24](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:394](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L394>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:410](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L410>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:7](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:10](<../../../../../../../electron/ai/engine-registry.test.cjs#L10>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:20](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L20>) — file-import-only; coverage not established.

<a id="s-a855b2d37033dc99"></a>

## AgentStore.create

[electron/ai/agents/agent-store.cjs:193](<../../../../../../../electron/ai/agents/agent-store.cjs#L193>) · MethodDeclaration · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [AgentStore](<agent-store.cjs.md#s-5c48479ffb9d36b6>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [fixture](<entity-agents.test.cjs.md#s-9ad48d6b7854c1ed>) — [electron/ai/agents/entity-agents.test.cjs:36](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L36>)
- [fixture](<../engine-registry.test.cjs.md#s-65055825671a5a43>) — [electron/ai/engine-registry.test.cjs:76](<../../../../../../../electron/ai/engine-registry.test.cjs#L76>)
- [fixture](<../engine-registry.test.cjs.md#s-65055825671a5a43>) — [electron/ai/engine-registry.test.cjs:80](<../../../../../../../electron/ai/engine-registry.test.cjs#L80>)
- [main](<../../../scripts/acceptance/electron-backend-reset-smoke.cjs.md#s-648eff2573c5a425>) — [scripts/acceptance/electron-backend-reset-smoke.cjs:23](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L23>)
- [main](<../../../scripts/engine-chat-live.cjs.md#s-d9d25d752f6311a1>) — [scripts/engine-chat-live.cjs:68](<../../../../../../../scripts/engine-chat-live.cjs#L68>)

Unresolved / external call sites: 1.

- this.queue — signature-only-candidate; [electron/ai/agents/agent-store.cjs:194](<../../../../../../../electron/ai/agents/agent-store.cjs#L194>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:36](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L36>) — static-call-site; coverage not established.
- [electron/ai/engine-registry.test.cjs:76](<../../../../../../../electron/ai/engine-registry.test.cjs#L76>) — static-call-site; coverage not established.
- [electron/ai/engine-registry.test.cjs:80](<../../../../../../../electron/ai/engine-registry.test.cjs#L80>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:23](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L23>) — static-call-site; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:24](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:394](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L394>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:410](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L410>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:7](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:10](<../../../../../../../electron/ai/engine-registry.test.cjs#L10>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:20](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L20>) — file-import-only; coverage not established.

<a id="s-9bcf573f56449023"></a>

## AgentStore.create.&lt;anonymous@194:23&gt;

[electron/ai/agents/agent-store.cjs:194](<../../../../../../../electron/ai/agents/agent-store.cjs#L194>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [AgentStore.create](<agent-store.cjs.md#s-a855b2d37033dc99>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [AgentStore.read](<agent-store.cjs.md#s-3be90932d4fcc267>) — [electron/ai/agents/agent-store.cjs:204](<../../../../../../../electron/ai/agents/agent-store.cjs#L204>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/agents/agent-store.cjs:208](<../../../../../../../electron/ai/agents/agent-store.cjs#L208>)
- [AgentStore.get](<agent-store.cjs.md#s-feff3820609fc57c>) — [electron/ai/agents/agent-store.cjs:212](<../../../../../../../electron/ai/agents/agent-store.cjs#L212>)
- [defaultIds](<agent-store.cjs.md#s-1a17537ccf0a2905>) — [electron/ai/agents/agent-store.cjs:216](<../../../../../../../electron/ai/agents/agent-store.cjs#L216>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/agents/agent-store.cjs:225](<../../../../../../../electron/ai/agents/agent-store.cjs#L225>)
- [fallbackAvatar](<agent-store.cjs.md#s-b80d70abcda41f45>) — [electron/ai/agents/agent-store.cjs:239](<../../../../../../../electron/ai/agents/agent-store.cjs#L239>)
- [writeJson](<../../core/persistence/json-store.cjs.md#s-5030c6156f98dba1>) — [electron/ai/agents/agent-store.cjs:240](<../../../../../../../electron/ai/agents/agent-store.cjs#L240>)
- [AgentStore.get](<agent-store.cjs.md#s-feff3820609fc57c>) — [electron/ai/agents/agent-store.cjs:241](<../../../../../../../electron/ai/agents/agent-store.cjs#L241>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 7.

- patch.creationId.toLowerCase — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:205](<../../../../../../../electron/ai/agents/agent-store.cjs#L205>)
- Object.values — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:215](<../../../../../../../electron/ai/agents/agent-store.cjs#L215>)
- defaultIds(state, this.includeDefaultAgents) .filter((key) =&gt; !state.agents&#91;key&#93;) .map — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:216](<../../../../../../../electron/ai/agents/agent-store.cjs#L216>)
- defaultIds(state, this.includeDefaultAgents) .filter — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:216](<../../../../../../../electron/ai/agents/agent-store.cjs#L216>)
- existing.some — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:221](<../../../../../../../electron/ai/agents/agent-store.cjs#L221>)
- new Date().toISOString — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:229](<../../../../../../../electron/ai/agents/agent-store.cjs#L229>)
- Date — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:229](<../../../../../../../electron/ai/agents/agent-store.cjs#L229>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-store.test.cjs:24](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:394](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L394>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:410](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L410>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:7](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:10](<../../../../../../../electron/ai/engine-registry.test.cjs#L10>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:20](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L20>) — file-import-only; coverage not established.

<a id="s-462acc67e49dc642"></a>

## AgentStore.create.&lt;anonymous@194:23&gt;.patch

[electron/ai/agents/agent-store.cjs:195](<../../../../../../../electron/ai/agents/agent-store.cjs#L195>) · SchemaBinding · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [AgentStore.create.&lt;anonymous@194:23&gt;](<agent-store.cjs.md#s-9bcf573f56449023>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

- [parse](<../../shared/validation.cjs.md#s-f29367528a73f24d>) — [electron/ai/agents/agent-store.cjs:195](<../../../../../../../electron/ai/agents/agent-store.cjs#L195>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- z .object({ name: configSchema.shape.displayName, creationId: z.string().uuid(), }) .strict — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:196](<../../../../../../../electron/ai/agents/agent-store.cjs#L196>)
- z .object — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:196](<../../../../../../../electron/ai/agents/agent-store.cjs#L196>)
- z.string().uuid — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:199](<../../../../../../../electron/ai/agents/agent-store.cjs#L199>)
- z.string — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:199](<../../../../../../../electron/ai/agents/agent-store.cjs#L199>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-store.test.cjs:24](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:394](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L394>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:410](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L410>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:7](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:10](<../../../../../../../electron/ai/engine-registry.test.cjs#L10>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:20](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L20>) — file-import-only; coverage not established.

<a id="s-721f8ac3c1bfedae"></a>

## AgentStore.create.&lt;anonymous@194:23&gt;.&lt;anonymous@217:19&gt;

[electron/ai/agents/agent-store.cjs:217](<../../../../../../../electron/ai/agents/agent-store.cjs#L217>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [AgentStore.create.&lt;anonymous@194:23&gt;](<agent-store.cjs.md#s-9bcf573f56449023>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| key | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-store.test.cjs:24](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:394](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L394>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:410](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L410>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:7](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:10](<../../../../../../../electron/ai/engine-registry.test.cjs#L10>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:20](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L20>) — file-import-only; coverage not established.

<a id="s-59de188728e2f4e9"></a>

## AgentStore.create.&lt;anonymous@194:23&gt;.&lt;anonymous@218:16&gt;

[electron/ai/agents/agent-store.cjs:218](<../../../../../../../electron/ai/agents/agent-store.cjs#L218>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [AgentStore.create.&lt;anonymous@194:23&gt;](<agent-store.cjs.md#s-9bcf573f56449023>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| key | any | compiler-inferred | required |

Returns: { id: string; displayName: any; avatar: { type: string; letter: any; }; customInstructions: string; mode: string; policyVersion: string; createdAt: any; updatedAt: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [seed](<agent-store.cjs.md#s-7fe48eec2fe694c9>) — [electron/ai/agents/agent-store.cjs:218](<../../../../../../../electron/ai/agents/agent-store.cjs#L218>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-store.test.cjs:24](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:394](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L394>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:410](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L410>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:7](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:10](<../../../../../../../electron/ai/engine-registry.test.cjs#L10>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:20](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L20>) — file-import-only; coverage not established.

<a id="s-8b0d82b82cd4533c"></a>

## AgentStore.create.&lt;anonymous@194:23&gt;.&lt;anonymous@222:11&gt;

[electron/ai/agents/agent-store.cjs:222](<../../../../../../../electron/ai/agents/agent-store.cjs#L222>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [AgentStore.create.&lt;anonymous@194:23&gt;](<agent-store.cjs.md#s-9bcf573f56449023>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| row | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- row.displayName.toLowerCase — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:222](<../../../../../../../electron/ai/agents/agent-store.cjs#L222>)
- patch.name.toLowerCase — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:222](<../../../../../../../electron/ai/agents/agent-store.cjs#L222>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-store.test.cjs:24](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:394](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L394>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:410](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L410>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:7](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:10](<../../../../../../../electron/ai/engine-registry.test.cjs#L10>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:20](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L20>) — file-import-only; coverage not established.

<a id="s-feff3820609fc57c"></a>

## AgentStore.get

[electron/ai/agents/agent-store.cjs:245](<../../../../../../../electron/ai/agents/agent-store.cjs#L245>) · MethodDeclaration · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

Resolves a persisted agent or the reserved host Gateway, validating configuration and local assets without modifying either profile.

Purpose evidence: jsdoc.

Lexical owner: [AgentStore](<agent-store.cjs.md#s-5c48479ffb9d36b6>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| id | string | compiler-inferred | optional, default present |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [parse](<../../shared/validation.cjs.md#s-f29367528a73f24d>) — [electron/ai/agents/agent-store.cjs:246](<../../../../../../../electron/ai/agents/agent-store.cjs#L246>)
- [AgentStore.read](<agent-store.cjs.md#s-3be90932d4fcc267>) — [electron/ai/agents/agent-store.cjs:247](<../../../../../../../electron/ai/agents/agent-store.cjs#L247>)
- [gatewayProfile](<gateway-profile.cjs.md#s-a31ba5d37b2db799>) — [electron/ai/agents/agent-store.cjs:250](<../../../../../../../electron/ai/agents/agent-store.cjs#L250>)
- [storedOrDefault](<agent-store.cjs.md#s-450719ec7ed10db2>) — [electron/ai/agents/agent-store.cjs:251](<../../../../../../../electron/ai/agents/agent-store.cjs#L251>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/agents/agent-store.cjs:253](<../../../../../../../electron/ai/agents/agent-store.cjs#L253>)
- [validateConstruction](<agent-construction.cjs.md#s-818f4b1aaf6e1b48>) — [electron/ai/agents/agent-store.cjs:255](<../../../../../../../electron/ai/agents/agent-store.cjs#L255>)
- [skillsFor](<../skills.cjs.md#s-b3ded4fcddd47806>) — [electron/ai/agents/agent-store.cjs:265](<../../../../../../../electron/ai/agents/agent-store.cjs#L265>)
- [skillsFor](<../skills.cjs.md#s-b3ded4fcddd47806>) — [electron/ai/agents/agent-store.cjs:268](<../../../../../../../electron/ai/agents/agent-store.cjs#L268>)
- [AgentStore.resolveAppearance](<agent-store.cjs.md#s-131f9ea2850450d6>) — [electron/ai/agents/agent-store.cjs:274](<../../../../../../../electron/ai/agents/agent-store.cjs#L274>)
- [defaultAppearance](<agent-construction.cjs.md#s-69bd5cab9d7b2fa1>) — [electron/ai/agents/agent-store.cjs:275](<../../../../../../../electron/ai/agents/agent-store.cjs#L275>)
- [AgentStore.avatarUrl](<agent-store.cjs.md#s-78d662b9ac7d6d48>) — [electron/ai/agents/agent-store.cjs:280](<../../../../../../../electron/ai/agents/agent-store.cjs#L280>)
- [AgentStore.resolveAppearance](<agent-store.cjs.md#s-131f9ea2850450d6>) — [electron/ai/agents/agent-store.cjs:281](<../../../../../../../electron/ai/agents/agent-store.cjs#L281>)
- [defaultAppearance](<agent-construction.cjs.md#s-69bd5cab9d7b2fa1>) — [electron/ai/agents/agent-store.cjs:284](<../../../../../../../electron/ai/agents/agent-store.cjs#L284>)
- [defaults](<agent-construction.cjs.md#s-a6f7591b9f78cb97>) — [electron/ai/agents/agent-store.cjs:291](<../../../../../../../electron/ai/agents/agent-store.cjs#L291>)
- [AgentStore.avatarUrl](<agent-store.cjs.md#s-78d662b9ac7d6d48>) — [electron/ai/agents/agent-store.cjs:294](<../../../../../../../electron/ai/agents/agent-store.cjs#L294>)
- [AgentStore.resolveAppearance](<agent-store.cjs.md#s-131f9ea2850450d6>) — [electron/ai/agents/agent-store.cjs:295](<../../../../../../../electron/ai/agents/agent-store.cjs#L295>)
- [defaultAppearance](<agent-construction.cjs.md#s-69bd5cab9d7b2fa1>) — [electron/ai/agents/agent-store.cjs:296](<../../../../../../../electron/ai/agents/agent-store.cjs#L296>)
- [rejectSymlink](<../../core/persistence/json-store.cjs.md#s-aaddc8aab5c0d073>) — [electron/ai/agents/agent-store.cjs:305](<../../../../../../../electron/ai/agents/agent-store.cjs#L305>)
- [fallbackAvatar](<agent-store.cjs.md#s-b80d70abcda41f45>) — [electron/ai/agents/agent-store.cjs:315](<../../../../../../../electron/ai/agents/agent-store.cjs#L315>)

**Called by (statically resolved):**

- [&lt;anonymous@8:104&gt;](<agent-construction.test.cjs.md#s-3c4e992af342c65c>) — [electron/ai/agents/agent-construction.test.cjs:23](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L23>)
- [&lt;anonymous@8:104&gt;](<agent-construction.test.cjs.md#s-3c4e992af342c65c>) — [electron/ai/agents/agent-construction.test.cjs:51](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L51>)
- [&lt;anonymous@8:104&gt;](<agent-construction.test.cjs.md#s-3c4e992af342c65c>) — [electron/ai/agents/agent-construction.test.cjs:54](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L54>)
- [&lt;anonymous@127:102&gt;](<agent-construction.test.cjs.md#s-7322f921221bc9e8>) — [electron/ai/agents/agent-construction.test.cjs:150](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L150>)
- [&lt;anonymous@127:102&gt;](<agent-construction.test.cjs.md#s-7322f921221bc9e8>) — [electron/ai/agents/agent-construction.test.cjs:166](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L166>)
- [&lt;anonymous@279:97&gt;](<agent-construction.test.cjs.md#s-e3b1c140ff9d5a48>) — [electron/ai/agents/agent-construction.test.cjs:290](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L290>)
- [&lt;anonymous@279:97&gt;](<agent-construction.test.cjs.md#s-e3b1c140ff9d5a48>) — [electron/ai/agents/agent-construction.test.cjs:301](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L301>)
- [AgentStore.list.&lt;anonymous@175:14&gt;](<agent-store.cjs.md#s-2aa059e7b146f7d7>) — [electron/ai/agents/agent-store.cjs:175](<../../../../../../../electron/ai/agents/agent-store.cjs#L175>)
- [AgentStore.create.&lt;anonymous@194:23&gt;](<agent-store.cjs.md#s-9bcf573f56449023>) — [electron/ai/agents/agent-store.cjs:212](<../../../../../../../electron/ai/agents/agent-store.cjs#L212>)
- [AgentStore.create.&lt;anonymous@194:23&gt;](<agent-store.cjs.md#s-9bcf573f56449023>) — [electron/ai/agents/agent-store.cjs:241](<../../../../../../../electron/ai/agents/agent-store.cjs#L241>)
- [AgentStore.saveConstruction.&lt;anonymous@389:23&gt;](<agent-store.cjs.md#s-5d9fe7550818f8a0>) — [electron/ai/agents/agent-store.cjs:483](<../../../../../../../electron/ai/agents/agent-store.cjs#L483>)
- [AgentStore.save.&lt;anonymous@580:23&gt;](<agent-store.cjs.md#s-92c7ebeb214bb98f>) — [electron/ai/agents/agent-store.cjs:652](<../../../../../../../electron/ai/agents/agent-store.cjs#L652>)
- [&lt;anonymous@22:85&gt;](<agent-store.test.cjs.md#s-1e06a9ac33f08e0e>) — [electron/ai/agents/agent-store.test.cjs:27](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L27>)
- [&lt;anonymous@80:101&gt;](<agent-store.test.cjs.md#s-0dbef8c3f34bd547>) — [electron/ai/agents/agent-store.test.cjs:122](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L122>)
- [&lt;anonymous@203:98&gt;](<agent-store.test.cjs.md#s-36acfe0da3e02257>) — [electron/ai/agents/agent-store.test.cjs:231](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L231>)
- [&lt;anonymous@203:98&gt;](<agent-store.test.cjs.md#s-36acfe0da3e02257>) — [electron/ai/agents/agent-store.test.cjs:233](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L233>)
- [&lt;anonymous@203:98&gt;](<agent-store.test.cjs.md#s-36acfe0da3e02257>) — [electron/ai/agents/agent-store.test.cjs:237](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L237>)
- [&lt;anonymous@203:98&gt;](<agent-store.test.cjs.md#s-36acfe0da3e02257>) — [electron/ai/agents/agent-store.test.cjs:240](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L240>)
- [&lt;anonymous@252:102&gt;](<agent-store.test.cjs.md#s-919270a70c69e6e2>) — [electron/ai/agents/agent-store.test.cjs:275](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L275>)
- [&lt;anonymous@252:102&gt;](<agent-store.test.cjs.md#s-919270a70c69e6e2>) — [electron/ai/agents/agent-store.test.cjs:277](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L277>)
- [&lt;anonymous@297:106&gt;](<agent-store.test.cjs.md#s-4a0a1b0f13ec255e>) — [electron/ai/agents/agent-store.test.cjs:309](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L309>)
- [&lt;anonymous@392:85&gt;](<agent-store.test.cjs.md#s-872f64c210c4127c>) — [electron/ai/agents/agent-store.test.cjs:399](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L399>)
- [&lt;anonymous@267:122&gt;](<entity-agents.test.cjs.md#s-170a0d3c49e413cb>) — [electron/ai/agents/entity-agents.test.cjs:269](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L269>)
- [&lt;anonymous@183:106&gt;](<../engine-registry.test.cjs.md#s-4ed4a78d66cd545d>) — [electron/ai/engine-registry.test.cjs:206](<../../../../../../../electron/ai/engine-registry.test.cjs#L206>)
- [main](<../../../scripts/enable-entity-agent-read-access.cjs.md#s-86d517edd5e58413>) — [scripts/enable-entity-agent-read-access.cjs:34](<../../../../../../../scripts/enable-entity-agent-read-access.cjs#L34>)

Unresolved / external call sites: 12.

- require — module-loader; [electron/ai/agents/agent-store.cjs:249](<../../../../../../../electron/ai/agents/agent-store.cjs#L249>)
- require — module-loader; [electron/ai/agents/agent-store.cjs:250](<../../../../../../../electron/ai/agents/agent-store.cjs#L250>)
- SYSTEM_PROMPT.replaceAll — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:260](<../../../../../../../electron/ai/agents/agent-store.cjs#L260>)
- require — module-loader; [electron/ai/agents/agent-store.cjs:265](<../../../../../../../electron/ai/agents/agent-store.cjs#L265>)
- require — module-loader; [electron/ai/agents/agent-store.cjs:268](<../../../../../../../electron/ai/agents/agent-store.cjs#L268>)
- path.join — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:304](<../../../../../../../electron/ai/agents/agent-store.cjs#L304>)
- fs.readFile — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:306](<../../../../../../../electron/ai/agents/agent-store.cjs#L306>)
- createHash("sha256").update(bytes).digest — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:309](<../../../../../../../electron/ai/agents/agent-store.cjs#L309>)
- 4 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-construction.test.cjs:23](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L23>) — static-call-site; coverage not established.
- [electron/ai/agents/agent-construction.test.cjs:51](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L51>) — static-call-site; coverage not established.
- [electron/ai/agents/agent-construction.test.cjs:54](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L54>) — static-call-site; coverage not established.
- [electron/ai/agents/agent-construction.test.cjs:150](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L150>) — static-call-site; coverage not established.
- [electron/ai/agents/agent-construction.test.cjs:166](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L166>) — static-call-site; coverage not established.
- [electron/ai/agents/agent-construction.test.cjs:290](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L290>) — static-call-site; coverage not established.
- [electron/ai/agents/agent-construction.test.cjs:301](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L301>) — static-call-site; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:27](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L27>) — static-call-site; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:122](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L122>) — static-call-site; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:231](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L231>) — static-call-site; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:233](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L233>) — static-call-site; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:237](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L237>) — static-call-site; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:240](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L240>) — static-call-site; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:275](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L275>) — static-call-site; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:277](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L277>) — static-call-site; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:309](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L309>) — static-call-site; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:399](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L399>) — static-call-site; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:269](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L269>) — static-call-site; coverage not established.
- [electron/ai/engine-registry.test.cjs:206](<../../../../../../../electron/ai/engine-registry.test.cjs#L206>) — static-call-site; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:24](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:394](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L394>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:410](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L410>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:7](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:10](<../../../../../../../electron/ai/engine-registry.test.cjs#L10>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:20](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L20>) — file-import-only; coverage not established.

<a id="s-78d662b9ac7d6d48"></a>

## AgentStore.avatarUrl

[electron/ai/agents/agent-store.cjs:320](<../../../../../../../electron/ai/agents/agent-store.cjs#L320>) · MethodDeclaration · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [AgentStore](<agent-store.cjs.md#s-5c48479ffb9d36b6>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| avatar | any | compiler-inferred | required |
| maxBytes | number | compiler-inferred | optional, default present |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [rejectSymlink](<../../core/persistence/json-store.cjs.md#s-aaddc8aab5c0d073>) — [electron/ai/agents/agent-store.cjs:324](<../../../../../../../electron/ai/agents/agent-store.cjs#L324>)

**Called by (statically resolved):**

- [AgentStore.get](<agent-store.cjs.md#s-feff3820609fc57c>) — [electron/ai/agents/agent-store.cjs:280](<../../../../../../../electron/ai/agents/agent-store.cjs#L280>)
- [AgentStore.get](<agent-store.cjs.md#s-feff3820609fc57c>) — [electron/ai/agents/agent-store.cjs:294](<../../../../../../../electron/ai/agents/agent-store.cjs#L294>)
- [AgentStore.resolveAppearance](<agent-store.cjs.md#s-131f9ea2850450d6>) — [electron/ai/agents/agent-store.cjs:340](<../../../../../../../electron/ai/agents/agent-store.cjs#L340>)
- [AgentStore.resolveAppearance](<agent-store.cjs.md#s-131f9ea2850450d6>) — [electron/ai/agents/agent-store.cjs:343](<../../../../../../../electron/ai/agents/agent-store.cjs#L343>)

Unresolved / external call sites: 6.

- path.join — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:323](<../../../../../../../electron/ai/agents/agent-store.cjs#L323>)
- fs.readFile — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:325](<../../../../../../../electron/ai/agents/agent-store.cjs#L325>)
- createHash("sha256").update(bytes).digest — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:328](<../../../../../../../electron/ai/agents/agent-store.cjs#L328>)
- createHash("sha256").update — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:328](<../../../../../../../electron/ai/agents/agent-store.cjs#L328>)
- createHash — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:328](<../../../../../../../electron/ai/agents/agent-store.cjs#L328>)
- bytes.toString — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:331](<../../../../../../../electron/ai/agents/agent-store.cjs#L331>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-store.test.cjs:24](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:394](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L394>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:410](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L410>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:7](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:10](<../../../../../../../electron/ai/engine-registry.test.cjs#L10>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:20](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L20>) — file-import-only; coverage not established.

<a id="s-131f9ea2850450d6"></a>

## AgentStore.resolveAppearance

[electron/ai/agents/agent-store.cjs:336](<../../../../../../../electron/ai/agents/agent-store.cjs#L336>) · MethodDeclaration · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [AgentStore](<agent-store.cjs.md#s-5c48479ffb9d36b6>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [AgentStore.avatarUrl](<agent-store.cjs.md#s-78d662b9ac7d6d48>) — [electron/ai/agents/agent-store.cjs:340](<../../../../../../../electron/ai/agents/agent-store.cjs#L340>)
- [AgentStore.avatarUrl](<agent-store.cjs.md#s-78d662b9ac7d6d48>) — [electron/ai/agents/agent-store.cjs:343](<../../../../../../../electron/ai/agents/agent-store.cjs#L343>)

**Called by (statically resolved):**

- [AgentStore.get](<agent-store.cjs.md#s-feff3820609fc57c>) — [electron/ai/agents/agent-store.cjs:274](<../../../../../../../electron/ai/agents/agent-store.cjs#L274>)
- [AgentStore.get](<agent-store.cjs.md#s-feff3820609fc57c>) — [electron/ai/agents/agent-store.cjs:281](<../../../../../../../electron/ai/agents/agent-store.cjs#L281>)
- [AgentStore.get](<agent-store.cjs.md#s-feff3820609fc57c>) — [electron/ai/agents/agent-store.cjs:295](<../../../../../../../electron/ai/agents/agent-store.cjs#L295>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-store.test.cjs:24](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:394](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L394>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:410](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L410>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:7](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:10](<../../../../../../../electron/ai/engine-registry.test.cjs#L10>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:20](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L20>) — file-import-only; coverage not established.

<a id="s-3f40538fbdbbeacd"></a>

## AgentStore.backdropAsset

[electron/ai/agents/agent-store.cjs:347](<../../../../../../../electron/ai/agents/agent-store.cjs#L347>) · MethodDeclaration · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [AgentStore](<agent-store.cjs.md#s-5c48479ffb9d36b6>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| data | any | compiler-inferred | required |
| previous | any | compiler-inferred | required |
| kind | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/agents/agent-store.cjs:351](<../../../../../../../electron/ai/agents/agent-store.cjs#L351>)
- [AgentStore.prepareBackdrop](<agent-store.cjs.md#s-1bfecd82d2554bef>) — [electron/ai/agents/agent-store.cjs:355](<../../../../../../../electron/ai/agents/agent-store.cjs#L355>)
- [safeDirectory](<../../core/persistence/json-store.cjs.md#s-429fa54bc1a890a0>) — [electron/ai/agents/agent-store.cjs:362](<../../../../../../../electron/ai/agents/agent-store.cjs#L362>)
- [rejectSymlink](<../../core/persistence/json-store.cjs.md#s-aaddc8aab5c0d073>) — [electron/ai/agents/agent-store.cjs:364](<../../../../../../../electron/ai/agents/agent-store.cjs#L364>)

**Called by (statically resolved):**

- [AgentStore.saveConstruction.&lt;anonymous@389:23&gt;](<agent-store.cjs.md#s-5d9fe7550818f8a0>) — [electron/ai/agents/agent-store.cjs:432](<../../../../../../../electron/ai/agents/agent-store.cjs#L432>)
- [AgentStore.saveConstruction.&lt;anonymous@389:23&gt;](<agent-store.cjs.md#s-5d9fe7550818f8a0>) — [electron/ai/agents/agent-store.cjs:437](<../../../../../../../electron/ai/agents/agent-store.cjs#L437>)

Unresolved / external call sites: 10.

- /^data:image\\/png;base64,&#91;A-Za-z0-9+/&#93;+={0,2}$/.test — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:350](<../../../../../../../electron/ai/agents/agent-store.cjs#L350>)
- Buffer.from — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:356](<../../../../../../../electron/ai/agents/agent-store.cjs#L356>)
- data.split — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:356](<../../../../../../../electron/ai/agents/agent-store.cjs#L356>)
- Buffer.from — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:360](<../../../../../../../electron/ai/agents/agent-store.cjs#L360>)
- url.split — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:360](<../../../../../../../electron/ai/agents/agent-store.cjs#L360>)
- createHash("sha256").update(bytes).digest — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:361](<../../../../../../../electron/ai/agents/agent-store.cjs#L361>)
- createHash("sha256").update — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:361](<../../../../../../../electron/ai/agents/agent-store.cjs#L361>)
- createHash — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:361](<../../../../../../../electron/ai/agents/agent-store.cjs#L361>)
- 2 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-store.test.cjs:24](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:394](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L394>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:410](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L410>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:7](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:10](<../../../../../../../electron/ai/engine-registry.test.cjs#L10>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:20](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L20>) — file-import-only; coverage not established.

<a id="s-7aaef4f6575aff33"></a>

## AgentStore.constructionAvatar

[electron/ai/agents/agent-store.cjs:368](<../../../../../../../electron/ai/agents/agent-store.cjs#L368>) · MethodDeclaration · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [AgentStore](<agent-store.cjs.md#s-5c48479ffb9d36b6>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| data | any | compiler-inferred | required |
| previous | any | compiler-inferred | required |
| row | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [fallbackAvatar](<agent-store.cjs.md#s-b80d70abcda41f45>) — [electron/ai/agents/agent-store.cjs:370](<../../../../../../../electron/ai/agents/agent-store.cjs#L370>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/agents/agent-store.cjs:372](<../../../../../../../electron/ai/agents/agent-store.cjs#L372>)
- [AgentStore.prepareAvatar](<agent-store.cjs.md#s-04663720655bccdc>) — [electron/ai/agents/agent-store.cjs:376](<../../../../../../../electron/ai/agents/agent-store.cjs#L376>)
- [safeDirectory](<../../core/persistence/json-store.cjs.md#s-429fa54bc1a890a0>) — [electron/ai/agents/agent-store.cjs:382](<../../../../../../../electron/ai/agents/agent-store.cjs#L382>)
- [rejectSymlink](<../../core/persistence/json-store.cjs.md#s-aaddc8aab5c0d073>) — [electron/ai/agents/agent-store.cjs:384](<../../../../../../../electron/ai/agents/agent-store.cjs#L384>)

**Called by (statically resolved):**

- [AgentStore.saveConstruction.&lt;anonymous@389:23&gt;](<agent-store.cjs.md#s-5d9fe7550818f8a0>) — [electron/ai/agents/agent-store.cjs:419](<../../../../../../../electron/ai/agents/agent-store.cjs#L419>)

Unresolved / external call sites: 10.

- /^data:image\\/png;base64,&#91;A-Za-z0-9+/&#93;+={0,2}$/.test — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:371](<../../../../../../../electron/ai/agents/agent-store.cjs#L371>)
- Buffer.from — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:377](<../../../../../../../electron/ai/agents/agent-store.cjs#L377>)
- data.split — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:377](<../../../../../../../electron/ai/agents/agent-store.cjs#L377>)
- Buffer.from — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:380](<../../../../../../../electron/ai/agents/agent-store.cjs#L380>)
- url.split — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:380](<../../../../../../../electron/ai/agents/agent-store.cjs#L380>)
- createHash("sha256").update(bytes).digest — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:381](<../../../../../../../electron/ai/agents/agent-store.cjs#L381>)
- createHash("sha256").update — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:381](<../../../../../../../electron/ai/agents/agent-store.cjs#L381>)
- createHash — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:381](<../../../../../../../electron/ai/agents/agent-store.cjs#L381>)
- 2 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-store.test.cjs:24](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:394](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L394>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:410](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L410>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:7](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:10](<../../../../../../../electron/ai/engine-registry.test.cjs#L10>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:20](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L20>) — file-import-only; coverage not established.

<a id="s-79e9bb1291ef0de1"></a>

## AgentStore.saveConstruction

[electron/ai/agents/agent-store.cjs:388](<../../../../../../../electron/ai/agents/agent-store.cjs#L388>) · MethodDeclaration · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [AgentStore](<agent-store.cjs.md#s-5c48479ffb9d36b6>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@8:104&gt;](<agent-construction.test.cjs.md#s-3c4e992af342c65c>) — [electron/ai/agents/agent-construction.test.cjs:28](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L28>)
- [&lt;anonymous@8:104&gt;](<agent-construction.test.cjs.md#s-3c4e992af342c65c>) — [electron/ai/agents/agent-construction.test.cjs:40](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L40>)
- [&lt;anonymous@8:104&gt;](<agent-construction.test.cjs.md#s-3c4e992af342c65c>) — [electron/ai/agents/agent-construction.test.cjs:56](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L56>)
- [&lt;anonymous@279:97&gt;](<agent-construction.test.cjs.md#s-e3b1c140ff9d5a48>) — [electron/ai/agents/agent-construction.test.cjs:292](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L292>)
- [&lt;anonymous@279:97&gt;](<agent-construction.test.cjs.md#s-e3b1c140ff9d5a48>) — [electron/ai/agents/agent-construction.test.cjs:303](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L303>)
- [fixture](<entity-agents.test.cjs.md#s-9ad48d6b7854c1ed>) — [electron/ai/agents/entity-agents.test.cjs:71](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L71>)
- [fixture.save](<../engine-registry.test.cjs.md#s-187117dc2185084a>) — [electron/ai/engine-registry.test.cjs:125](<../../../../../../../electron/ai/engine-registry.test.cjs#L125>)
- [main](<../../../scripts/acceptance/electron-backend-reset-smoke.cjs.md#s-648eff2573c5a425>) — [scripts/acceptance/electron-backend-reset-smoke.cjs:27](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L27>)
- [main](<../../../scripts/enable-entity-agent-read-access.cjs.md#s-86d517edd5e58413>) — [scripts/enable-entity-agent-read-access.cjs:52](<../../../../../../../scripts/enable-entity-agent-read-access.cjs#L52>)
- [main](<../../../scripts/enable-entity-agent-read-access.cjs.md#s-86d517edd5e58413>) — [scripts/enable-entity-agent-read-access.cjs:59](<../../../../../../../scripts/enable-entity-agent-read-access.cjs#L59>)
- [main](<../../../scripts/engine-chat-live.cjs.md#s-d9d25d752f6311a1>) — [scripts/engine-chat-live.cjs:82](<../../../../../../../scripts/engine-chat-live.cjs#L82>)

Unresolved / external call sites: 1.

- this.queue — signature-only-candidate; [electron/ai/agents/agent-store.cjs:389](<../../../../../../../electron/ai/agents/agent-store.cjs#L389>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-construction.test.cjs:28](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L28>) — static-call-site; coverage not established.
- [electron/ai/agents/agent-construction.test.cjs:40](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L40>) — static-call-site; coverage not established.
- [electron/ai/agents/agent-construction.test.cjs:56](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L56>) — static-call-site; coverage not established.
- [electron/ai/agents/agent-construction.test.cjs:292](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L292>) — static-call-site; coverage not established.
- [electron/ai/agents/agent-construction.test.cjs:303](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L303>) — static-call-site; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:71](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L71>) — static-call-site; coverage not established.
- [electron/ai/engine-registry.test.cjs:125](<../../../../../../../electron/ai/engine-registry.test.cjs#L125>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:27](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L27>) — static-call-site; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:24](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:394](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L394>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:410](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L410>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:7](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:10](<../../../../../../../electron/ai/engine-registry.test.cjs#L10>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:20](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L20>) — file-import-only; coverage not established.

<a id="s-5d9fe7550818f8a0"></a>

## AgentStore.saveConstruction.&lt;anonymous@389:23&gt;

[electron/ai/agents/agent-store.cjs:389](<../../../../../../../electron/ai/agents/agent-store.cjs#L389>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [AgentStore.saveConstruction](<agent-store.cjs.md#s-79e9bb1291ef0de1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [AgentStore.read](<agent-store.cjs.md#s-3be90932d4fcc267>) — [electron/ai/agents/agent-store.cjs:405](<../../../../../../../electron/ai/agents/agent-store.cjs#L405>)
- [storedOrDefault](<agent-store.cjs.md#s-450719ec7ed10db2>) — [electron/ai/agents/agent-store.cjs:406](<../../../../../../../electron/ai/agents/agent-store.cjs#L406>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/agents/agent-store.cjs:408](<../../../../../../../electron/ai/agents/agent-store.cjs#L408>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/agents/agent-store.cjs:410](<../../../../../../../electron/ai/agents/agent-store.cjs#L410>)
- [validateConstruction](<agent-construction.cjs.md#s-818f4b1aaf6e1b48>) — [electron/ai/agents/agent-store.cjs:414](<../../../../../../../electron/ai/agents/agent-store.cjs#L414>)
- [AgentStore.constructionAvatar](<agent-store.cjs.md#s-7aaef4f6575aff33>) — [electron/ai/agents/agent-store.cjs:419](<../../../../../../../electron/ai/agents/agent-store.cjs#L419>)
- [defaultAppearance](<agent-construction.cjs.md#s-69bd5cab9d7b2fa1>) — [electron/ai/agents/agent-store.cjs:428](<../../../../../../../electron/ai/agents/agent-store.cjs#L428>)
- [AgentStore.backdropAsset](<agent-store.cjs.md#s-3f40538fbdbbeacd>) — [electron/ai/agents/agent-store.cjs:432](<../../../../../../../electron/ai/agents/agent-store.cjs#L432>)
- [AgentStore.backdropAsset](<agent-store.cjs.md#s-3f40538fbdbbeacd>) — [electron/ai/agents/agent-store.cjs:437](<../../../../../../../electron/ai/agents/agent-store.cjs#L437>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/agents/agent-store.cjs:444](<../../../../../../../electron/ai/agents/agent-store.cjs#L444>)
- [writeJson](<../../core/persistence/json-store.cjs.md#s-5030c6156f98dba1>) — [electron/ai/agents/agent-store.cjs:482](<../../../../../../../electron/ai/agents/agent-store.cjs#L482>)
- [AgentStore.get](<agent-store.cjs.md#s-feff3820609fc57c>) — [electron/ai/agents/agent-store.cjs:483](<../../../../../../../electron/ai/agents/agent-store.cjs#L483>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- new Date().toISOString — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:448](<../../../../../../../electron/ai/agents/agent-store.cjs#L448>)
- Date — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:448](<../../../../../../../electron/ai/agents/agent-store.cjs#L448>)
- &#91; ...(row.construction?.log ?? &#91;&#93;), { revision, action: patch.action, at }, &#93;.slice — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:476](<../../../../../../../electron/ai/agents/agent-store.cjs#L476>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-store.test.cjs:24](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:394](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L394>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:410](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L410>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:7](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:10](<../../../../../../../electron/ai/engine-registry.test.cjs#L10>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:20](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L20>) — file-import-only; coverage not established.

<a id="s-236a247583a053e3"></a>

## AgentStore.saveConstruction.&lt;anonymous@389:23&gt;.patch

[electron/ai/agents/agent-store.cjs:390](<../../../../../../../electron/ai/agents/agent-store.cjs#L390>) · SchemaBinding · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [AgentStore.saveConstruction.&lt;anonymous@389:23&gt;](<agent-store.cjs.md#s-5d9fe7550818f8a0>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

- [parse](<../../shared/validation.cjs.md#s-f29367528a73f24d>) — [electron/ai/agents/agent-store.cjs:390](<../../../../../../../electron/ai/agents/agent-store.cjs#L390>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 19.

- z .object({ id: idSchema, action: z.enum(&#91;"draft", "apply"&#93;), expectedRevision: z.number().int().min(0), config: configSchema, avatarDataUrl: z.string().max(700000).nullable().opti — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:391](<../../../../../../../electron/ai/agents/agent-store.cjs#L391>)
- z .object — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:391](<../../../../../../../electron/ai/agents/agent-store.cjs#L391>)
- z.enum — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:394](<../../../../../../../electron/ai/agents/agent-store.cjs#L394>)
- z.number().int().min — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:395](<../../../../../../../electron/ai/agents/agent-store.cjs#L395>)
- z.number().int — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:395](<../../../../../../../electron/ai/agents/agent-store.cjs#L395>)
- z.number — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:395](<../../../../../../../electron/ai/agents/agent-store.cjs#L395>)
- z.string().max(700000).nullable().optional — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:397](<../../../../../../../electron/ai/agents/agent-store.cjs#L397>)
- z.string().max(700000).nullable — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:397](<../../../../../../../electron/ai/agents/agent-store.cjs#L397>)
- 11 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-store.test.cjs:24](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:394](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L394>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:410](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L410>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:7](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:10](<../../../../../../../electron/ai/engine-registry.test.cjs#L10>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:20](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L20>) — file-import-only; coverage not established.

<a id="s-2b527d12d06d9f39"></a>

## AgentStore.decodePicture

[electron/ai/agents/agent-store.cjs:486](<../../../../../../../electron/ai/agents/agent-store.cjs#L486>) · MethodDeclaration · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [AgentStore](<agent-store.cjs.md#s-5c48479ffb9d36b6>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| bytes | any | compiler-inferred | required |
| extension | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/agents/agent-store.cjs:503](<../../../../../../../electron/ai/agents/agent-store.cjs#L503>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/agents/agent-store.cjs:518](<../../../../../../../electron/ai/agents/agent-store.cjs#L518>)

**Called by (statically resolved):**

- [AgentStore.prepareBackdrop](<agent-store.cjs.md#s-1bfecd82d2554bef>) — [electron/ai/agents/agent-store.cjs:530](<../../../../../../../electron/ai/agents/agent-store.cjs#L530>)
- [AgentStore.prepareAvatar](<agent-store.cjs.md#s-04663720655bccdc>) — [electron/ai/agents/agent-store.cjs:560](<../../../../../../../electron/ai/agents/agent-store.cjs#L560>)

Unresolved / external call sites: 9.

- bytes .subarray(0, 8) .equals — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:487](<../../../../../../../electron/ai/agents/agent-store.cjs#L487>)
- bytes .subarray — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:487](<../../../../../../../electron/ai/agents/agent-store.cjs#L487>)
- Buffer.from — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:489](<../../../../../../../electron/ai/agents/agent-store.cjs#L489>)
- bytes.toString — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:492](<../../../../../../../electron/ai/agents/agent-store.cjs#L492>)
- bytes.toString — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:493](<../../../../../../../electron/ai/agents/agent-store.cjs#L493>)
- &#91;".jpg", ".jpeg"&#93;.includes — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:499](<../../../../../../../electron/ai/agents/agent-store.cjs#L499>)
- this.decodeImage — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:507](<../../../../../../../electron/ai/agents/agent-store.cjs#L507>)
- image?.getSize — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:508](<../../../../../../../electron/ai/agents/agent-store.cjs#L508>)
- 1 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-store.test.cjs:24](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:394](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L394>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:410](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L410>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:7](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:10](<../../../../../../../electron/ai/engine-registry.test.cjs#L10>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:20](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L20>) — file-import-only; coverage not established.

<a id="s-1bfecd82d2554bef"></a>

## AgentStore.prepareBackdrop

[electron/ai/agents/agent-store.cjs:524](<../../../../../../../electron/ai/agents/agent-store.cjs#L524>) · MethodDeclaration · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [AgentStore](<agent-store.cjs.md#s-5c48479ffb9d36b6>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| bytes | any | compiler-inferred | required |
| extension | any | compiler-inferred | required |
| kind | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/agents/agent-store.cjs:526](<../../../../../../../electron/ai/agents/agent-store.cjs#L526>)
- [AgentStore.decodePicture](<agent-store.cjs.md#s-2b527d12d06d9f39>) — [electron/ai/agents/agent-store.cjs:530](<../../../../../../../electron/ai/agents/agent-store.cjs#L530>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/agents/agent-store.cjs:553](<../../../../../../../electron/ai/agents/agent-store.cjs#L553>)

**Called by (statically resolved):**

- [&lt;anonymous@8:104&gt;](<agent-construction.test.cjs.md#s-3c4e992af342c65c>) — [electron/ai/agents/agent-construction.test.cjs:25](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L25>)
- [AgentStore.backdropAsset](<agent-store.cjs.md#s-3f40538fbdbbeacd>) — [electron/ai/agents/agent-store.cjs:355](<../../../../../../../electron/ai/agents/agent-store.cjs#L355>)
- [&lt;anonymous@163:22&gt;.chooseAgentPicture](<../../main.cjs.md#s-424cb22ada61b036>) — [electron/main.cjs:262](<../../../../../../../electron/main.cjs#L262>)

Unresolved / external call sites: 20.

- &#91;"banner", "wallpaper"&#93;.includes — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:525](<../../../../../../../electron/ai/agents/agent-store.cjs#L525>)
- image.getSize — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:531](<../../../../../../../electron/ai/agents/agent-store.cjs#L531>)
- Math.min — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:534](<../../../../../../../electron/ai/agents/agent-store.cjs#L534>)
- Math.floor — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:534](<../../../../../../../electron/ai/agents/agent-store.cjs#L534>)
- Math.min — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:535](<../../../../../../../electron/ai/agents/agent-store.cjs#L535>)
- Math.floor — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:535](<../../../../../../../electron/ai/agents/agent-store.cjs#L535>)
- image .crop({ x: Math.floor((size.width - w) / 2), y: Math.floor((size.height - h) / 2), width: Math.max(1, w), height: Math.max(1, h), }) .resize — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:536](<../../../../../../../electron/ai/agents/agent-store.cjs#L536>)
- image .crop — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:536](<../../../../../../../electron/ai/agents/agent-store.cjs#L536>)
- 12 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-construction.test.cjs:25](<../../../../../../../electron/ai/agents/agent-construction.test.cjs#L25>) — static-call-site; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:24](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:394](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L394>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:410](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L410>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:7](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:10](<../../../../../../../electron/ai/engine-registry.test.cjs#L10>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:20](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L20>) — file-import-only; coverage not established.

<a id="s-04663720655bccdc"></a>

## AgentStore.prepareAvatar

[electron/ai/agents/agent-store.cjs:559](<../../../../../../../electron/ai/agents/agent-store.cjs#L559>) · MethodDeclaration · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [AgentStore](<agent-store.cjs.md#s-5c48479ffb9d36b6>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| bytes | any | compiler-inferred | required |
| extension | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [AgentStore.decodePicture](<agent-store.cjs.md#s-2b527d12d06d9f39>) — [electron/ai/agents/agent-store.cjs:560](<../../../../../../../electron/ai/agents/agent-store.cjs#L560>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/agents/agent-store.cjs:573](<../../../../../../../electron/ai/agents/agent-store.cjs#L573>)

**Called by (statically resolved):**

- [AgentStore.constructionAvatar](<agent-store.cjs.md#s-7aaef4f6575aff33>) — [electron/ai/agents/agent-store.cjs:376](<../../../../../../../electron/ai/agents/agent-store.cjs#L376>)
- [AgentStore.save.&lt;anonymous@580:23&gt;](<agent-store.cjs.md#s-92c7ebeb214bb98f>) — [electron/ai/agents/agent-store.cjs:611](<../../../../../../../electron/ai/agents/agent-store.cjs#L611>)
- [&lt;anonymous@297:106&gt;](<agent-store.test.cjs.md#s-4a0a1b0f13ec255e>) — [electron/ai/agents/agent-store.test.cjs:350](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L350>)
- [&lt;anonymous@163:22&gt;.chooseAgentPicture](<../../main.cjs.md#s-424cb22ada61b036>) — [electron/main.cjs:261](<../../../../../../../electron/main.cjs#L261>)

Unresolved / external call sites: 8.

- image.getSize — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:561](<../../../../../../../electron/ai/agents/agent-store.cjs#L561>)
- Math.min — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:562](<../../../../../../../electron/ai/agents/agent-store.cjs#L562>)
- image .crop({ x: Math.floor((size.width - side) / 2), y: Math.floor((size.height - side) / 2), width: side, height: side, }) .resize({ width: 128, height: 128 }) .toPNG — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:563](<../../../../../../../electron/ai/agents/agent-store.cjs#L563>)
- image .crop({ x: Math.floor((size.width - side) / 2), y: Math.floor((size.height - side) / 2), width: side, height: side, }) .resize — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:563](<../../../../../../../electron/ai/agents/agent-store.cjs#L563>)
- image .crop — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:563](<../../../../../../../electron/ai/agents/agent-store.cjs#L563>)
- Math.floor — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:565](<../../../../../../../electron/ai/agents/agent-store.cjs#L565>)
- Math.floor — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:566](<../../../../../../../electron/ai/agents/agent-store.cjs#L566>)
- processed.toString — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:577](<../../../../../../../electron/ai/agents/agent-store.cjs#L577>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-store.test.cjs:350](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L350>) — static-call-site; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:24](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:394](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L394>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:410](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L410>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:7](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:10](<../../../../../../../electron/ai/engine-registry.test.cjs#L10>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:20](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L20>) — file-import-only; coverage not established.

<a id="s-0dc45f8eafe8dd4b"></a>

## AgentStore.save

[electron/ai/agents/agent-store.cjs:579](<../../../../../../../electron/ai/agents/agent-store.cjs#L579>) · MethodDeclaration · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [AgentStore](<agent-store.cjs.md#s-5c48479ffb9d36b6>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- this.queue — signature-only-candidate; [electron/ai/agents/agent-store.cjs:580](<../../../../../../../electron/ai/agents/agent-store.cjs#L580>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-store.test.cjs:24](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:394](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L394>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:410](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L410>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:7](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:10](<../../../../../../../electron/ai/engine-registry.test.cjs#L10>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:20](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L20>) — file-import-only; coverage not established.

<a id="s-92c7ebeb214bb98f"></a>

## AgentStore.save.&lt;anonymous@580:23&gt;

[electron/ai/agents/agent-store.cjs:580](<../../../../../../../electron/ai/agents/agent-store.cjs#L580>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [AgentStore.save](<agent-store.cjs.md#s-0dc45f8eafe8dd4b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [validateCustomInstructions](<agent-policy.cjs.md#s-0dbc6d2e83719bfc>) — [electron/ai/agents/agent-store.cjs:591](<../../../../../../../electron/ai/agents/agent-store.cjs#L591>)
- [AgentStore.read](<agent-store.cjs.md#s-3be90932d4fcc267>) — [electron/ai/agents/agent-store.cjs:594](<../../../../../../../electron/ai/agents/agent-store.cjs#L594>)
- [storedOrDefault](<agent-store.cjs.md#s-450719ec7ed10db2>) — [electron/ai/agents/agent-store.cjs:595](<../../../../../../../electron/ai/agents/agent-store.cjs#L595>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/agents/agent-store.cjs:597](<../../../../../../../electron/ai/agents/agent-store.cjs#L597>)
- [fallbackAvatar](<agent-store.cjs.md#s-b80d70abcda41f45>) — [electron/ai/agents/agent-store.cjs:599](<../../../../../../../electron/ai/agents/agent-store.cjs#L599>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/agents/agent-store.cjs:606](<../../../../../../../electron/ai/agents/agent-store.cjs#L606>)
- [AgentStore.prepareAvatar](<agent-store.cjs.md#s-04663720655bccdc>) — [electron/ai/agents/agent-store.cjs:611](<../../../../../../../electron/ai/agents/agent-store.cjs#L611>)
- [safeDirectory](<../../core/persistence/json-store.cjs.md#s-429fa54bc1a890a0>) — [electron/ai/agents/agent-store.cjs:614](<../../../../../../../electron/ai/agents/agent-store.cjs#L614>)
- [rejectSymlink](<../../core/persistence/json-store.cjs.md#s-aaddc8aab5c0d073>) — [electron/ai/agents/agent-store.cjs:616](<../../../../../../../electron/ai/agents/agent-store.cjs#L616>)
- [writeJson](<../../core/persistence/json-store.cjs.md#s-5030c6156f98dba1>) — [electron/ai/agents/agent-store.cjs:651](<../../../../../../../electron/ai/agents/agent-store.cjs#L651>)
- [AgentStore.get](<agent-store.cjs.md#s-feff3820609fc57c>) — [electron/ai/agents/agent-store.cjs:652](<../../../../../../../electron/ai/agents/agent-store.cjs#L652>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 15.

- /^data:image\\/png;base64,&#91;A-Za-z0-9+/&#93;+={0,2}$/.test — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:602](<../../../../../../../electron/ai/agents/agent-store.cjs#L602>)
- Buffer.from — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:610](<../../../../../../../electron/ai/agents/agent-store.cjs#L610>)
- patch.avatarDataUrl.split — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:610](<../../../../../../../electron/ai/agents/agent-store.cjs#L610>)
- Buffer.from — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:612](<../../../../../../../electron/ai/agents/agent-store.cjs#L612>)
- url.split — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:612](<../../../../../../../electron/ai/agents/agent-store.cjs#L612>)
- createHash("sha256").update(processed).digest — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:613](<../../../../../../../electron/ai/agents/agent-store.cjs#L613>)
- createHash("sha256").update — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:613](<../../../../../../../electron/ai/agents/agent-store.cjs#L613>)
- createHash — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:613](<../../../../../../../electron/ai/agents/agent-store.cjs#L613>)
- 7 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-store.test.cjs:24](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:394](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L394>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:410](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L410>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:7](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:10](<../../../../../../../electron/ai/engine-registry.test.cjs#L10>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:20](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L20>) — file-import-only; coverage not established.

<a id="s-4faff5b06043bb90"></a>

## AgentStore.save.&lt;anonymous@580:23&gt;.patch

[electron/ai/agents/agent-store.cjs:581](<../../../../../../../electron/ai/agents/agent-store.cjs#L581>) · SchemaBinding · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [AgentStore.save.&lt;anonymous@580:23&gt;](<agent-store.cjs.md#s-92c7ebeb214bb98f>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

- [parse](<../../shared/validation.cjs.md#s-f29367528a73f24d>) — [electron/ai/agents/agent-store.cjs:581](<../../../../../../../electron/ai/agents/agent-store.cjs#L581>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 8.

- z .object({ id: idSchema, customInstructions: z.string().max(8000), avatarDataUrl: z.string().max(700000).nullable().optional(), }) .strict — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:582](<../../../../../../../electron/ai/agents/agent-store.cjs#L582>)
- z .object — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:582](<../../../../../../../electron/ai/agents/agent-store.cjs#L582>)
- z.string().max — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:585](<../../../../../../../electron/ai/agents/agent-store.cjs#L585>)
- z.string — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:585](<../../../../../../../electron/ai/agents/agent-store.cjs#L585>)
- z.string().max(700000).nullable().optional — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:586](<../../../../../../../electron/ai/agents/agent-store.cjs#L586>)
- z.string().max(700000).nullable — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:586](<../../../../../../../electron/ai/agents/agent-store.cjs#L586>)
- z.string().max — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:586](<../../../../../../../electron/ai/agents/agent-store.cjs#L586>)
- z.string — external-or-dynamic-dispatch; [electron/ai/agents/agent-store.cjs:586](<../../../../../../../electron/ai/agents/agent-store.cjs#L586>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-store.test.cjs:24](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L24>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:394](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L394>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:410](<../../../../../../../electron/ai/agents/agent-store.test.cjs#L410>) — file-import-only; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:7](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L7>) — file-import-only; coverage not established.
- [electron/ai/engine-registry.test.cjs:10](<../../../../../../../electron/ai/engine-registry.test.cjs#L10>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-backend-reset-smoke.cjs:20](<../../../../../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L20>) — file-import-only; coverage not established.
