# electron/ai/chronoz-adapter.cjs: symbols

[Atlas](<../../../../README.md>) / [Retained AI runtime](<../../../../modules/ai-runtime.md>) / [electron/ai/chronoz-adapter.cjs:1](<../../../../../../electron/ai/chronoz-adapter.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/chronoz-adapter.cjs](<chronoz-adapter.cjs.md#s-44c98c41283718b7>) (Module)
- [responseSchema](<chronoz-adapter.cjs.md#s-887c2eca70194af9>) (SchemaBinding)
- [inspectBundle](<chronoz-adapter.cjs.md#s-27254e2757fbd276>) (FunctionDeclaration)
- [inspectBundleFiles](<chronoz-adapter.cjs.md#s-ea6badb360163d1a>) (FunctionDeclaration)
- [inspectBundleFiles.walk](<chronoz-adapter.cjs.md#s-4e7e45c264e4d77a>) (FunctionDeclaration)
- [inspectBundleFiles.walk.&lt;anonymous@103:12&gt;](<chronoz-adapter.cjs.md#s-f16128a63d2757bb>) (ArrowFunction)
- [runTrigger](<chronoz-adapter.cjs.md#s-9a8362270da4fd67>) (FunctionDeclaration)
- [runTrigger.&lt;anonymous@165:22&gt;](<chronoz-adapter.cjs.md#s-7bc573c5ed02845b>) (ArrowFunction)
- [runTrigger.&lt;anonymous@165:22&gt;.finish](<chronoz-adapter.cjs.md#s-6b6a0563c757350b>) (ArrowFunction)
- [runTrigger.&lt;anonymous@165:22&gt;.stop](<chronoz-adapter.cjs.md#s-96d24837ec504c5f>) (ArrowFunction)
- [runTrigger.&lt;anonymous@165:22&gt;.cancel](<chronoz-adapter.cjs.md#s-828453112eb020eb>) (ArrowFunction)
- [runTrigger.&lt;anonymous@165:22&gt;.&lt;anonymous@205:9&gt;](<chronoz-adapter.cjs.md#s-064c0fd532b029dd>) (ArrowFunction)
- [runTrigger.&lt;anonymous@165:22&gt;.&lt;anonymous@212:25&gt;](<chronoz-adapter.cjs.md#s-97d4b5558f2f24a1>) (ArrowFunction)
- [runTrigger.&lt;anonymous@165:22&gt;.&lt;anonymous@220:31&gt;](<chronoz-adapter.cjs.md#s-df9e79249644763c>) (ArrowFunction)
- [runTrigger.&lt;anonymous@165:22&gt;.&lt;anonymous@229:31&gt;](<chronoz-adapter.cjs.md#s-207363bbcc0bd800>) (ArrowFunction)
- [runTrigger.&lt;anonymous@165:22&gt;.&lt;anonymous@237:31&gt;](<chronoz-adapter.cjs.md#s-4a97dd8604d6506b>) (ArrowFunction)
- [runTrigger.&lt;anonymous@165:22&gt;.&lt;anonymous@243:25&gt;](<chronoz-adapter.cjs.md#s-52f2f0f3b3b3c5dd>) (ArrowFunction)
- [verifyReport](<chronoz-adapter.cjs.md#s-99b6ea0d2b1d6595>) (FunctionDeclaration)

<a id="s-44c98c41283718b7"></a>

## electron/ai/chronoz-adapter.cjs

[electron/ai/chronoz-adapter.cjs:1](<../../../../../../electron/ai/chronoz-adapter.cjs#L1>) · Module · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 7.

- require — module-loader; [electron/ai/chronoz-adapter.cjs:2](<../../../../../../electron/ai/chronoz-adapter.cjs#L2>)
- require — module-loader; [electron/ai/chronoz-adapter.cjs:3](<../../../../../../electron/ai/chronoz-adapter.cjs#L3>)
- require — module-loader; [electron/ai/chronoz-adapter.cjs:4](<../../../../../../electron/ai/chronoz-adapter.cjs#L4>)
- require — module-loader; [electron/ai/chronoz-adapter.cjs:5](<../../../../../../electron/ai/chronoz-adapter.cjs#L5>)
- require — module-loader; [electron/ai/chronoz-adapter.cjs:6](<../../../../../../electron/ai/chronoz-adapter.cjs#L6>)
- require — module-loader; [electron/ai/chronoz-adapter.cjs:7](<../../../../../../electron/ai/chronoz-adapter.cjs#L7>)
- require — module-loader; [electron/ai/chronoz-adapter.cjs:16](<../../../../../../electron/ai/chronoz-adapter.cjs#L16>)

**Related tests / acceptance harnesses:**

- [electron/ai/engine-registry.test.cjs:9](<../../../../../../electron/ai/engine-registry.test.cjs#L9>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-engine-smoke.cjs:168](<../../../../../../scripts/acceptance/electron-engine-smoke.cjs#L168>) — file-import-only; coverage not established.

<a id="s-887c2eca70194af9"></a>

## responseSchema

[electron/ai/chronoz-adapter.cjs:17](<../../../../../../electron/ai/chronoz-adapter.cjs#L17>) · SchemaBinding · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/chronoz-adapter.cjs](<chronoz-adapter.cjs.md#s-44c98c41283718b7>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 18.

- z .object({ status: z.enum(&#91; "SCHEDULED", "FROZEN", "GENERATING", "PUBLISHED", "PARTIAL", "BLOCKED", "FAILED", "READY", &#93;), issue_month: monthSchema.optional(), month: monthSchema. — external-or-dynamic-dispatch; [electron/ai/chronoz-adapter.cjs:17](<../../../../../../electron/ai/chronoz-adapter.cjs#L17>)
- z .object — external-or-dynamic-dispatch; [electron/ai/chronoz-adapter.cjs:17](<../../../../../../electron/ai/chronoz-adapter.cjs#L17>)
- z.enum — external-or-dynamic-dispatch; [electron/ai/chronoz-adapter.cjs:19](<../../../../../../electron/ai/chronoz-adapter.cjs#L19>)
- monthSchema.optional — external-or-dynamic-dispatch; [electron/ai/chronoz-adapter.cjs:29](<../../../../../../electron/ai/chronoz-adapter.cjs#L29>)
- monthSchema.optional — external-or-dynamic-dispatch; [electron/ai/chronoz-adapter.cjs:30](<../../../../../../electron/ai/chronoz-adapter.cjs#L30>)
- z .object({ path: z.string().min(1).max(4096), media_type: z.literal("application/pdf"), sha256: z.string().regex(/^&#91;a-f0-9&#93;{64}$/), }) .passthrough() .optional — external-or-dynamic-dispatch; [electron/ai/chronoz-adapter.cjs:31](<../../../../../../electron/ai/chronoz-adapter.cjs#L31>)
- z .object({ path: z.string().min(1).max(4096), media_type: z.literal("application/pdf"), sha256: z.string().regex(/^&#91;a-f0-9&#93;{64}$/), }) .passthrough — external-or-dynamic-dispatch; [electron/ai/chronoz-adapter.cjs:31](<../../../../../../electron/ai/chronoz-adapter.cjs#L31>)
- z .object — external-or-dynamic-dispatch; [electron/ai/chronoz-adapter.cjs:31](<../../../../../../electron/ai/chronoz-adapter.cjs#L31>)
- 10 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/engine-registry.test.cjs:9](<../../../../../../electron/ai/engine-registry.test.cjs#L9>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-engine-smoke.cjs:168](<../../../../../../scripts/acceptance/electron-engine-smoke.cjs#L168>) — file-import-only; coverage not established.

<a id="s-27254e2757fbd276"></a>

## inspectBundle

[electron/ai/chronoz-adapter.cjs:42](<../../../../../../electron/ai/chronoz-adapter.cjs#L42>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: inspectBundle ([electron/ai/chronoz-adapter.cjs:1](<../../../../../../electron/ai/chronoz-adapter.cjs#L1>)).

Lexical owner: [electron/ai/chronoz-adapter.cjs](<chronoz-adapter.cjs.md#s-44c98c41283718b7>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| folder | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [inspectBundleFiles](<chronoz-adapter.cjs.md#s-ea6badb360163d1a>) — [electron/ai/chronoz-adapter.cjs:44](<../../../../../../electron/ai/chronoz-adapter.cjs#L44>)
- [fail](<chronoz-contract.cjs.md#s-0a5da8b8dbe15a4c>) — [electron/ai/chronoz-adapter.cjs:47](<../../../../../../electron/ai/chronoz-adapter.cjs#L47>)

**Called by (statically resolved):**

- [&lt;anonymous@329:118&gt;.&lt;anonymous@338:24&gt;](<engine-registry.test.cjs.md#s-5d4b5141e2aaf211>) — [electron/ai/engine-registry.test.cjs:340](<../../../../../../electron/ai/engine-registry.test.cjs#L340>)
- [&lt;anonymous@372:108&gt;](<engine-registry.test.cjs.md#s-e9d95fd3c98d7b70>) — [electron/ai/engine-registry.test.cjs:374](<../../../../../../electron/ai/engine-registry.test.cjs#L374>)
- [&lt;anonymous@439:126&gt;](<engine-registry.test.cjs.md#s-f6eb1dd67fe2142f>) — [electron/ai/engine-registry.test.cjs:444](<../../../../../../electron/ai/engine-registry.test.cjs#L444>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/engine-registry.test.cjs:340](<../../../../../../electron/ai/engine-registry.test.cjs#L340>) — static-call-site; coverage not established.
- [electron/ai/engine-registry.test.cjs:374](<../../../../../../electron/ai/engine-registry.test.cjs#L374>) — static-call-site; coverage not established.
- [electron/ai/engine-registry.test.cjs:444](<../../../../../../electron/ai/engine-registry.test.cjs#L444>) — static-call-site; coverage not established.
- [electron/ai/engine-registry.test.cjs:9](<../../../../../../electron/ai/engine-registry.test.cjs#L9>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-engine-smoke.cjs:168](<../../../../../../scripts/acceptance/electron-engine-smoke.cjs#L168>) — file-import-only; coverage not established.

<a id="s-ea6badb360163d1a"></a>

## inspectBundleFiles

[electron/ai/chronoz-adapter.cjs:53](<../../../../../../electron/ai/chronoz-adapter.cjs#L53>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/chronoz-adapter.cjs](<chronoz-adapter.cjs.md#s-44c98c41283718b7>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| folder | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [unlinked](<chronoz-contract.cjs.md#s-4c704f10680e63b0>) — [electron/ai/chronoz-adapter.cjs:54](<../../../../../../electron/ai/chronoz-adapter.cjs#L54>)
- [fail](<chronoz-contract.cjs.md#s-0a5da8b8dbe15a4c>) — [electron/ai/chronoz-adapter.cjs:56](<../../../../../../electron/ai/chronoz-adapter.cjs#L56>)
- [boundedRead](<chronoz-contract.cjs.md#s-6dd18264afbdab77>) — [electron/ai/chronoz-adapter.cjs:57](<../../../../../../electron/ai/chronoz-adapter.cjs#L57>)
- [fail](<chronoz-contract.cjs.md#s-0a5da8b8dbe15a4c>) — [electron/ai/chronoz-adapter.cjs:65](<../../../../../../electron/ai/chronoz-adapter.cjs#L65>)
- [fail](<chronoz-contract.cjs.md#s-0a5da8b8dbe15a4c>) — [electron/ai/chronoz-adapter.cjs:74](<../../../../../../electron/ai/chronoz-adapter.cjs#L74>)
- [contained](<chronoz-contract.cjs.md#s-7c17f67290ab9c26>) — [electron/ai/chronoz-adapter.cjs:81](<../../../../../../electron/ai/chronoz-adapter.cjs#L81>)
- [fail](<chronoz-contract.cjs.md#s-0a5da8b8dbe15a4c>) — [electron/ai/chronoz-adapter.cjs:83](<../../../../../../electron/ai/chronoz-adapter.cjs#L83>)
- [fail](<chronoz-contract.cjs.md#s-0a5da8b8dbe15a4c>) — [electron/ai/chronoz-adapter.cjs:84](<../../../../../../electron/ai/chronoz-adapter.cjs#L84>)
- [fail](<chronoz-contract.cjs.md#s-0a5da8b8dbe15a4c>) — [electron/ai/chronoz-adapter.cjs:94](<../../../../../../electron/ai/chronoz-adapter.cjs#L94>)
- [inspectBundleFiles.walk](<chronoz-adapter.cjs.md#s-4e7e45c264e4d77a>) — [electron/ai/chronoz-adapter.cjs:123](<../../../../../../electron/ai/chronoz-adapter.cjs#L123>)
- [inspectBundleFiles.walk](<chronoz-adapter.cjs.md#s-4e7e45c264e4d77a>) — [electron/ai/chronoz-adapter.cjs:124](<../../../../../../electron/ai/chronoz-adapter.cjs#L124>)
- [boundedRead](<chronoz-contract.cjs.md#s-6dd18264afbdab77>) — [electron/ai/chronoz-adapter.cjs:129](<../../../../../../electron/ai/chronoz-adapter.cjs#L129>)
- [fail](<chronoz-contract.cjs.md#s-0a5da8b8dbe15a4c>) — [electron/ai/chronoz-adapter.cjs:139](<../../../../../../electron/ai/chronoz-adapter.cjs#L139>)

**Called by (statically resolved):**

- [inspectBundle](<chronoz-adapter.cjs.md#s-27254e2757fbd276>) — [electron/ai/chronoz-adapter.cjs:44](<../../../../../../electron/ai/chronoz-adapter.cjs#L44>)

Unresolved / external call sites: 29.

- (await fs.stat(root)).isDirectory — external-or-dynamic-dispatch; [electron/ai/chronoz-adapter.cjs:55](<../../../../../../electron/ai/chronoz-adapter.cjs#L55>)
- fs.stat — external-or-dynamic-dispatch; [electron/ai/chronoz-adapter.cjs:55](<../../../../../../electron/ai/chronoz-adapter.cjs#L55>)
- path.join — external-or-dynamic-dispatch; [electron/ai/chronoz-adapter.cjs:58](<../../../../../../electron/ai/chronoz-adapter.cjs#L58>)
- JSON.parse — external-or-dynamic-dispatch; [electron/ai/chronoz-adapter.cjs:63](<../../../../../../electron/ai/chronoz-adapter.cjs#L63>)
- manifestBytes.toString — external-or-dynamic-dispatch; [electron/ai/chronoz-adapter.cjs:63](<../../../../../../electron/ai/chronoz-adapter.cjs#L63>)
- Array.isArray — external-or-dynamic-dispatch; [electron/ai/chronoz-adapter.cjs:71](<../../../../../../electron/ai/chronoz-adapter.cjs#L71>)
- Map — external-or-dynamic-dispatch; [electron/ai/chronoz-adapter.cjs:75](<../../../../../../electron/ai/chronoz-adapter.cjs#L75>)
- /^&#91;a-f0-9&#93;{64}$/.test — external-or-dynamic-dispatch; [electron/ai/chronoz-adapter.cjs:79](<../../../../../../electron/ai/chronoz-adapter.cjs#L79>)
- 21 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/engine-registry.test.cjs:9](<../../../../../../electron/ai/engine-registry.test.cjs#L9>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-engine-smoke.cjs:168](<../../../../../../scripts/acceptance/electron-engine-smoke.cjs#L168>) — file-import-only; coverage not established.

<a id="s-4e7e45c264e4d77a"></a>

## inspectBundleFiles.walk

[electron/ai/chronoz-adapter.cjs:100](<../../../../../../electron/ai/chronoz-adapter.cjs#L100>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [inspectBundleFiles](<chronoz-adapter.cjs.md#s-ea6badb360163d1a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| directory | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [fail](<chronoz-contract.cjs.md#s-0a5da8b8dbe15a4c>) — [electron/ai/chronoz-adapter.cjs:105](<../../../../../../electron/ai/chronoz-adapter.cjs#L105>)
- [inspectBundleFiles.walk](<chronoz-adapter.cjs.md#s-4e7e45c264e4d77a>) — [electron/ai/chronoz-adapter.cjs:107](<../../../../../../electron/ai/chronoz-adapter.cjs#L107>)
- [fail](<chronoz-contract.cjs.md#s-0a5da8b8dbe15a4c>) — [electron/ai/chronoz-adapter.cjs:112](<../../../../../../electron/ai/chronoz-adapter.cjs#L112>)
- [boundedRead](<chronoz-contract.cjs.md#s-6dd18264afbdab77>) — [electron/ai/chronoz-adapter.cjs:116](<../../../../../../electron/ai/chronoz-adapter.cjs#L116>)
- [sha](<chronoz-contract.cjs.md#s-be6194fd3a77a55d>) — [electron/ai/chronoz-adapter.cjs:118](<../../../../../../electron/ai/chronoz-adapter.cjs#L118>)
- [fail](<chronoz-contract.cjs.md#s-0a5da8b8dbe15a4c>) — [electron/ai/chronoz-adapter.cjs:119](<../../../../../../electron/ai/chronoz-adapter.cjs#L119>)
- [sha](<chronoz-contract.cjs.md#s-be6194fd3a77a55d>) — [electron/ai/chronoz-adapter.cjs:120](<../../../../../../electron/ai/chronoz-adapter.cjs#L120>)

**Called by (statically resolved):**

- [inspectBundleFiles.walk](<chronoz-adapter.cjs.md#s-4e7e45c264e4d77a>) — [electron/ai/chronoz-adapter.cjs:107](<../../../../../../electron/ai/chronoz-adapter.cjs#L107>)
- [inspectBundleFiles](<chronoz-adapter.cjs.md#s-ea6badb360163d1a>) — [electron/ai/chronoz-adapter.cjs:123](<../../../../../../electron/ai/chronoz-adapter.cjs#L123>)
- [inspectBundleFiles](<chronoz-adapter.cjs.md#s-ea6badb360163d1a>) — [electron/ai/chronoz-adapter.cjs:124](<../../../../../../electron/ai/chronoz-adapter.cjs#L124>)

Unresolved / external call sites: 12.

- ( await fs.readdir(directory, { withFileTypes: true }) ).sort — external-or-dynamic-dispatch; [electron/ai/chronoz-adapter.cjs:101](<../../../../../../electron/ai/chronoz-adapter.cjs#L101>)
- fs.readdir — external-or-dynamic-dispatch; [electron/ai/chronoz-adapter.cjs:102](<../../../../../../electron/ai/chronoz-adapter.cjs#L102>)
- path.join — external-or-dynamic-dispatch; [electron/ai/chronoz-adapter.cjs:104](<../../../../../../electron/ai/chronoz-adapter.cjs#L104>)
- entry.isSymbolicLink — external-or-dynamic-dispatch; [electron/ai/chronoz-adapter.cjs:105](<../../../../../../electron/ai/chronoz-adapter.cjs#L105>)
- entry.isDirectory — external-or-dynamic-dispatch; [electron/ai/chronoz-adapter.cjs:106](<../../../../../../electron/ai/chronoz-adapter.cjs#L106>)
- path.relative(root, file).split(path.sep).join — external-or-dynamic-dispatch; [electron/ai/chronoz-adapter.cjs:110](<../../../../../../electron/ai/chronoz-adapter.cjs#L110>)
- path.relative(root, file).split — external-or-dynamic-dispatch; [electron/ai/chronoz-adapter.cjs:110](<../../../../../../electron/ai/chronoz-adapter.cjs#L110>)
- path.relative — external-or-dynamic-dispatch; [electron/ai/chronoz-adapter.cjs:110](<../../../../../../electron/ai/chronoz-adapter.cjs#L110>)
- 4 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/engine-registry.test.cjs:9](<../../../../../../electron/ai/engine-registry.test.cjs#L9>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-engine-smoke.cjs:168](<../../../../../../scripts/acceptance/electron-engine-smoke.cjs#L168>) — file-import-only; coverage not established.

<a id="s-f16128a63d2757bb"></a>

## inspectBundleFiles.walk.&lt;anonymous@103:12&gt;

[electron/ai/chronoz-adapter.cjs:103](<../../../../../../electron/ai/chronoz-adapter.cjs#L103>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [inspectBundleFiles.walk](<chronoz-adapter.cjs.md#s-4e7e45c264e4d77a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| a | any | compiler-inferred | required |
| b | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- a.name.localeCompare — external-or-dynamic-dispatch; [electron/ai/chronoz-adapter.cjs:103](<../../../../../../electron/ai/chronoz-adapter.cjs#L103>)

**Related tests / acceptance harnesses:**

- [electron/ai/engine-registry.test.cjs:9](<../../../../../../electron/ai/engine-registry.test.cjs#L9>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-engine-smoke.cjs:168](<../../../../../../scripts/acceptance/electron-engine-smoke.cjs#L168>) — file-import-only; coverage not established.

<a id="s-9a8362270da4fd67"></a>

## runTrigger

[electron/ai/chronoz-adapter.cjs:147](<../../../../../../electron/ai/chronoz-adapter.cjs#L147>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: runTrigger ([electron/ai/chronoz-adapter.cjs:1](<../../../../../../electron/ai/chronoz-adapter.cjs#L1>)).

Lexical owner: [electron/ai/chronoz-adapter.cjs](<chronoz-adapter.cjs.md#s-44c98c41283718b7>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| bundle | any | compiler-inferred | required |
| operation | any | compiler-inferred | required |
| args | any | compiler-inferred | required |
| {     signal,     timeoutMs = 60000,     maxOutputBytes = 1024 * 1024,     spawnImpl = spawn,   } | { timeoutMs?: number; maxOutputBytes?: number; spawnImpl?: any; } | compiler-inferred | optional, default present |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [parse](<../shared/validation.cjs.md#s-f29367528a73f24d>) — [electron/ai/chronoz-adapter.cjs:158](<../../../../../../electron/ai/chronoz-adapter.cjs#L158>)
- [fail](<chronoz-contract.cjs.md#s-0a5da8b8dbe15a4c>) — [electron/ai/chronoz-adapter.cjs:160](<../../../../../../electron/ai/chronoz-adapter.cjs#L160>)
- [ModelRuntimeError.constructor](<../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/chronoz-adapter.cjs:163](<../../../../../../electron/ai/chronoz-adapter.cjs#L163>)

**Called by (statically resolved):**

- [&lt;anonymous@372:108&gt;](<engine-registry.test.cjs.md#s-e9d95fd3c98d7b70>) — [electron/ai/engine-registry.test.cjs:378](<../../../../../../electron/ai/engine-registry.test.cjs#L378>)
- [&lt;anonymous@372:108&gt;](<engine-registry.test.cjs.md#s-e9d95fd3c98d7b70>) — [electron/ai/engine-registry.test.cjs:389](<../../../../../../electron/ai/engine-registry.test.cjs#L389>)
- [&lt;anonymous@372:108&gt;](<engine-registry.test.cjs.md#s-e9d95fd3c98d7b70>) — [electron/ai/engine-registry.test.cjs:394](<../../../../../../electron/ai/engine-registry.test.cjs#L394>)
- [&lt;anonymous@372:108&gt;](<engine-registry.test.cjs.md#s-e9d95fd3c98d7b70>) — [electron/ai/engine-registry.test.cjs:403](<../../../../../../electron/ai/engine-registry.test.cjs#L403>)
- [&lt;anonymous@372:108&gt;](<engine-registry.test.cjs.md#s-e9d95fd3c98d7b70>) — [electron/ai/engine-registry.test.cjs:412](<../../../../../../electron/ai/engine-registry.test.cjs#L412>)

Unresolved / external call sites: 3.

- &#91;"get_report", "status"&#93;.includes — external-or-dynamic-dispatch; [electron/ai/chronoz-adapter.cjs:159](<../../../../../../electron/ai/chronoz-adapter.cjs#L159>)
- Promise.reject — external-or-dynamic-dispatch; [electron/ai/chronoz-adapter.cjs:162](<../../../../../../electron/ai/chronoz-adapter.cjs#L162>)
- Promise — external-or-dynamic-dispatch; [electron/ai/chronoz-adapter.cjs:165](<../../../../../../electron/ai/chronoz-adapter.cjs#L165>)

**Related tests / acceptance harnesses:**

- [electron/ai/engine-registry.test.cjs:378](<../../../../../../electron/ai/engine-registry.test.cjs#L378>) — static-call-site; coverage not established.
- [electron/ai/engine-registry.test.cjs:389](<../../../../../../electron/ai/engine-registry.test.cjs#L389>) — static-call-site; coverage not established.
- [electron/ai/engine-registry.test.cjs:394](<../../../../../../electron/ai/engine-registry.test.cjs#L394>) — static-call-site; coverage not established.
- [electron/ai/engine-registry.test.cjs:403](<../../../../../../electron/ai/engine-registry.test.cjs#L403>) — static-call-site; coverage not established.
- [electron/ai/engine-registry.test.cjs:412](<../../../../../../electron/ai/engine-registry.test.cjs#L412>) — static-call-site; coverage not established.
- [electron/ai/engine-registry.test.cjs:9](<../../../../../../electron/ai/engine-registry.test.cjs#L9>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-engine-smoke.cjs:168](<../../../../../../scripts/acceptance/electron-engine-smoke.cjs#L168>) — file-import-only; coverage not established.

<a id="s-7bc573c5ed02845b"></a>

## runTrigger.&lt;anonymous@165:22&gt;

[electron/ai/chronoz-adapter.cjs:165](<../../../../../../electron/ai/chronoz-adapter.cjs#L165>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [runTrigger](<chronoz-adapter.cjs.md#s-9a8362270da4fd67>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| resolve | any | compiler-inferred | required |
| reject | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [runTrigger.&lt;anonymous@165:22&gt;.cancel](<chronoz-adapter.cjs.md#s-828453112eb020eb>) — [electron/ai/chronoz-adapter.cjs:203](<../../../../../../electron/ai/chronoz-adapter.cjs#L203>)
- [runTrigger.&lt;anonymous@165:22&gt;.finish](<chronoz-adapter.cjs.md#s-6b6a0563c757350b>) — [electron/ai/chronoz-adapter.cjs:285](<../../../../../../electron/ai/chronoz-adapter.cjs#L285>)
- [ModelRuntimeError.constructor](<../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/chronoz-adapter.cjs:286](<../../../../../../electron/ai/chronoz-adapter.cjs#L286>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 11.

- spawnImpl — external-or-dynamic-dispatch; [electron/ai/chronoz-adapter.cjs:191](<../../../../../../electron/ai/chronoz-adapter.cjs#L191>)
- path.join — external-or-dynamic-dispatch; [electron/ai/chronoz-adapter.cjs:192](<../../../../../../electron/ai/chronoz-adapter.cjs#L192>)
- signal?.addEventListener — external-or-dynamic-dispatch; [electron/ai/chronoz-adapter.cjs:202](<../../../../../../electron/ai/chronoz-adapter.cjs#L202>)
- setTimeout — external-or-dynamic-dispatch; [electron/ai/chronoz-adapter.cjs:204](<../../../../../../electron/ai/chronoz-adapter.cjs#L204>)
- child.on — external-or-dynamic-dispatch; [electron/ai/chronoz-adapter.cjs:212](<../../../../../../electron/ai/chronoz-adapter.cjs#L212>)
- child.stdout.on — external-or-dynamic-dispatch; [electron/ai/chronoz-adapter.cjs:220](<../../../../../../electron/ai/chronoz-adapter.cjs#L220>)
- child.stderr.on — external-or-dynamic-dispatch; [electron/ai/chronoz-adapter.cjs:229](<../../../../../../electron/ai/chronoz-adapter.cjs#L229>)
- child.stdin.on — external-or-dynamic-dispatch; [electron/ai/chronoz-adapter.cjs:237](<../../../../../../electron/ai/chronoz-adapter.cjs#L237>)
- 3 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/engine-registry.test.cjs:9](<../../../../../../electron/ai/engine-registry.test.cjs#L9>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-engine-smoke.cjs:168](<../../../../../../scripts/acceptance/electron-engine-smoke.cjs#L168>) — file-import-only; coverage not established.

<a id="s-6b6a0563c757350b"></a>

## runTrigger.&lt;anonymous@165:22&gt;.finish

[electron/ai/chronoz-adapter.cjs:173](<../../../../../../electron/ai/chronoz-adapter.cjs#L173>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [runTrigger.&lt;anonymous@165:22&gt;](<chronoz-adapter.cjs.md#s-7bc573c5ed02845b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| error | any | compiler-inferred | required |
| value | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [runTrigger.&lt;anonymous@165:22&gt;.&lt;anonymous@212:25&gt;](<chronoz-adapter.cjs.md#s-97d4b5558f2f24a1>) — [electron/ai/chronoz-adapter.cjs:213](<../../../../../../electron/ai/chronoz-adapter.cjs#L213>)
- [runTrigger.&lt;anonymous@165:22&gt;.&lt;anonymous@243:25&gt;](<chronoz-adapter.cjs.md#s-52f2f0f3b3b3c5dd>) — [electron/ai/chronoz-adapter.cjs:244](<../../../../../../electron/ai/chronoz-adapter.cjs#L244>)
- [runTrigger.&lt;anonymous@165:22&gt;.&lt;anonymous@243:25&gt;](<chronoz-adapter.cjs.md#s-52f2f0f3b3b3c5dd>) — [electron/ai/chronoz-adapter.cjs:271](<../../../../../../electron/ai/chronoz-adapter.cjs#L271>)
- [runTrigger.&lt;anonymous@165:22&gt;.&lt;anonymous@243:25&gt;](<chronoz-adapter.cjs.md#s-52f2f0f3b3b3c5dd>) — [electron/ai/chronoz-adapter.cjs:273](<../../../../../../electron/ai/chronoz-adapter.cjs#L273>)
- [runTrigger.&lt;anonymous@165:22&gt;](<chronoz-adapter.cjs.md#s-7bc573c5ed02845b>) — [electron/ai/chronoz-adapter.cjs:285](<../../../../../../electron/ai/chronoz-adapter.cjs#L285>)

Unresolved / external call sites: 4.

- clearTimeout — external-or-dynamic-dispatch; [electron/ai/chronoz-adapter.cjs:176](<../../../../../../electron/ai/chronoz-adapter.cjs#L176>)
- signal?.removeEventListener — external-or-dynamic-dispatch; [electron/ai/chronoz-adapter.cjs:177](<../../../../../../electron/ai/chronoz-adapter.cjs#L177>)
- reject — external-or-dynamic-dispatch; [electron/ai/chronoz-adapter.cjs:178](<../../../../../../electron/ai/chronoz-adapter.cjs#L178>)
- resolve — external-or-dynamic-dispatch; [electron/ai/chronoz-adapter.cjs:178](<../../../../../../electron/ai/chronoz-adapter.cjs#L178>)

**Related tests / acceptance harnesses:**

- [electron/ai/engine-registry.test.cjs:9](<../../../../../../electron/ai/engine-registry.test.cjs#L9>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-engine-smoke.cjs:168](<../../../../../../scripts/acceptance/electron-engine-smoke.cjs#L168>) — file-import-only; coverage not established.

<a id="s-96d24837ec504c5f"></a>

## runTrigger.&lt;anonymous@165:22&gt;.stop

[electron/ai/chronoz-adapter.cjs:180](<../../../../../../electron/ai/chronoz-adapter.cjs#L180>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [runTrigger.&lt;anonymous@165:22&gt;](<chronoz-adapter.cjs.md#s-7bc573c5ed02845b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| code | any | compiler-inferred | required |
| message | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ModelRuntimeError.constructor](<../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/chronoz-adapter.cjs:181](<../../../../../../electron/ai/chronoz-adapter.cjs#L181>)

**Called by (statically resolved):**

- [runTrigger.&lt;anonymous@165:22&gt;.cancel](<chronoz-adapter.cjs.md#s-828453112eb020eb>) — [electron/ai/chronoz-adapter.cjs:184](<../../../../../../electron/ai/chronoz-adapter.cjs#L184>)
- [runTrigger.&lt;anonymous@165:22&gt;.&lt;anonymous@205:9&gt;](<chronoz-adapter.cjs.md#s-064c0fd532b029dd>) — [electron/ai/chronoz-adapter.cjs:206](<../../../../../../electron/ai/chronoz-adapter.cjs#L206>)
- [runTrigger.&lt;anonymous@165:22&gt;.&lt;anonymous@220:31&gt;](<chronoz-adapter.cjs.md#s-df9e79249644763c>) — [electron/ai/chronoz-adapter.cjs:223](<../../../../../../electron/ai/chronoz-adapter.cjs#L223>)
- [runTrigger.&lt;anonymous@165:22&gt;.&lt;anonymous@229:31&gt;](<chronoz-adapter.cjs.md#s-207363bbcc0bd800>) — [electron/ai/chronoz-adapter.cjs:232](<../../../../../../electron/ai/chronoz-adapter.cjs#L232>)
- [runTrigger.&lt;anonymous@165:22&gt;.&lt;anonymous@237:31&gt;](<chronoz-adapter.cjs.md#s-4a97dd8604d6506b>) — [electron/ai/chronoz-adapter.cjs:238](<../../../../../../electron/ai/chronoz-adapter.cjs#L238>)

Unresolved / external call sites: 1.

- child?.kill — external-or-dynamic-dispatch; [electron/ai/chronoz-adapter.cjs:182](<../../../../../../electron/ai/chronoz-adapter.cjs#L182>)

**Related tests / acceptance harnesses:**

- [electron/ai/engine-registry.test.cjs:9](<../../../../../../electron/ai/engine-registry.test.cjs#L9>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-engine-smoke.cjs:168](<../../../../../../scripts/acceptance/electron-engine-smoke.cjs#L168>) — file-import-only; coverage not established.

<a id="s-828453112eb020eb"></a>

## runTrigger.&lt;anonymous@165:22&gt;.cancel

[electron/ai/chronoz-adapter.cjs:184](<../../../../../../electron/ai/chronoz-adapter.cjs#L184>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [runTrigger.&lt;anonymous@165:22&gt;](<chronoz-adapter.cjs.md#s-7bc573c5ed02845b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [runTrigger.&lt;anonymous@165:22&gt;.stop](<chronoz-adapter.cjs.md#s-96d24837ec504c5f>) — [electron/ai/chronoz-adapter.cjs:184](<../../../../../../electron/ai/chronoz-adapter.cjs#L184>)

**Called by (statically resolved):**

- [runTrigger.&lt;anonymous@165:22&gt;](<chronoz-adapter.cjs.md#s-7bc573c5ed02845b>) — [electron/ai/chronoz-adapter.cjs:203](<../../../../../../electron/ai/chronoz-adapter.cjs#L203>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/engine-registry.test.cjs:9](<../../../../../../electron/ai/engine-registry.test.cjs#L9>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-engine-smoke.cjs:168](<../../../../../../scripts/acceptance/electron-engine-smoke.cjs#L168>) — file-import-only; coverage not established.

<a id="s-064c0fd532b029dd"></a>

## runTrigger.&lt;anonymous@165:22&gt;.&lt;anonymous@205:9&gt;

[electron/ai/chronoz-adapter.cjs:205](<../../../../../../electron/ai/chronoz-adapter.cjs#L205>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [runTrigger.&lt;anonymous@165:22&gt;](<chronoz-adapter.cjs.md#s-7bc573c5ed02845b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [runTrigger.&lt;anonymous@165:22&gt;.stop](<chronoz-adapter.cjs.md#s-96d24837ec504c5f>) — [electron/ai/chronoz-adapter.cjs:206](<../../../../../../electron/ai/chronoz-adapter.cjs#L206>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/engine-registry.test.cjs:9](<../../../../../../electron/ai/engine-registry.test.cjs#L9>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-engine-smoke.cjs:168](<../../../../../../scripts/acceptance/electron-engine-smoke.cjs#L168>) — file-import-only; coverage not established.

<a id="s-97d4b5558f2f24a1"></a>

## runTrigger.&lt;anonymous@165:22&gt;.&lt;anonymous@212:25&gt;

[electron/ai/chronoz-adapter.cjs:212](<../../../../../../electron/ai/chronoz-adapter.cjs#L212>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [runTrigger.&lt;anonymous@165:22&gt;](<chronoz-adapter.cjs.md#s-7bc573c5ed02845b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [runTrigger.&lt;anonymous@165:22&gt;.finish](<chronoz-adapter.cjs.md#s-6b6a0563c757350b>) — [electron/ai/chronoz-adapter.cjs:213](<../../../../../../electron/ai/chronoz-adapter.cjs#L213>)
- [ModelRuntimeError.constructor](<../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/chronoz-adapter.cjs:214](<../../../../../../electron/ai/chronoz-adapter.cjs#L214>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/engine-registry.test.cjs:9](<../../../../../../electron/ai/engine-registry.test.cjs#L9>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-engine-smoke.cjs:168](<../../../../../../scripts/acceptance/electron-engine-smoke.cjs#L168>) — file-import-only; coverage not established.

<a id="s-df9e79249644763c"></a>

## runTrigger.&lt;anonymous@165:22&gt;.&lt;anonymous@220:31&gt;

[electron/ai/chronoz-adapter.cjs:220](<../../../../../../electron/ai/chronoz-adapter.cjs#L220>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [runTrigger.&lt;anonymous@165:22&gt;](<chronoz-adapter.cjs.md#s-7bc573c5ed02845b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| data | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [runTrigger.&lt;anonymous@165:22&gt;.stop](<chronoz-adapter.cjs.md#s-96d24837ec504c5f>) — [electron/ai/chronoz-adapter.cjs:223](<../../../../../../electron/ai/chronoz-adapter.cjs#L223>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- out.push — external-or-dynamic-dispatch; [electron/ai/chronoz-adapter.cjs:227](<../../../../../../electron/ai/chronoz-adapter.cjs#L227>)

**Related tests / acceptance harnesses:**

- [electron/ai/engine-registry.test.cjs:9](<../../../../../../electron/ai/engine-registry.test.cjs#L9>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-engine-smoke.cjs:168](<../../../../../../scripts/acceptance/electron-engine-smoke.cjs#L168>) — file-import-only; coverage not established.

<a id="s-207363bbcc0bd800"></a>

## runTrigger.&lt;anonymous@165:22&gt;.&lt;anonymous@229:31&gt;

[electron/ai/chronoz-adapter.cjs:229](<../../../../../../electron/ai/chronoz-adapter.cjs#L229>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [runTrigger.&lt;anonymous@165:22&gt;](<chronoz-adapter.cjs.md#s-7bc573c5ed02845b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| data | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [runTrigger.&lt;anonymous@165:22&gt;.stop](<chronoz-adapter.cjs.md#s-96d24837ec504c5f>) — [electron/ai/chronoz-adapter.cjs:232](<../../../../../../electron/ai/chronoz-adapter.cjs#L232>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/engine-registry.test.cjs:9](<../../../../../../electron/ai/engine-registry.test.cjs#L9>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-engine-smoke.cjs:168](<../../../../../../scripts/acceptance/electron-engine-smoke.cjs#L168>) — file-import-only; coverage not established.

<a id="s-4a97dd8604d6506b"></a>

## runTrigger.&lt;anonymous@165:22&gt;.&lt;anonymous@237:31&gt;

[electron/ai/chronoz-adapter.cjs:237](<../../../../../../electron/ai/chronoz-adapter.cjs#L237>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [runTrigger.&lt;anonymous@165:22&gt;](<chronoz-adapter.cjs.md#s-7bc573c5ed02845b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [runTrigger.&lt;anonymous@165:22&gt;.stop](<chronoz-adapter.cjs.md#s-96d24837ec504c5f>) — [electron/ai/chronoz-adapter.cjs:238](<../../../../../../electron/ai/chronoz-adapter.cjs#L238>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/engine-registry.test.cjs:9](<../../../../../../electron/ai/engine-registry.test.cjs#L9>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-engine-smoke.cjs:168](<../../../../../../scripts/acceptance/electron-engine-smoke.cjs#L168>) — file-import-only; coverage not established.

<a id="s-52f2f0f3b3b3c5dd"></a>

## runTrigger.&lt;anonymous@165:22&gt;.&lt;anonymous@243:25&gt;

[electron/ai/chronoz-adapter.cjs:243](<../../../../../../electron/ai/chronoz-adapter.cjs#L243>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [runTrigger.&lt;anonymous@165:22&gt;](<chronoz-adapter.cjs.md#s-7bc573c5ed02845b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| exitCode | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [runTrigger.&lt;anonymous@165:22&gt;.finish](<chronoz-adapter.cjs.md#s-6b6a0563c757350b>) — [electron/ai/chronoz-adapter.cjs:244](<../../../../../../electron/ai/chronoz-adapter.cjs#L244>)
- [parse](<../shared/validation.cjs.md#s-f29367528a73f24d>) — [electron/ai/chronoz-adapter.cjs:246](<../../../../../../electron/ai/chronoz-adapter.cjs#L246>)
- [fail](<chronoz-contract.cjs.md#s-0a5da8b8dbe15a4c>) — [electron/ai/chronoz-adapter.cjs:263](<../../../../../../electron/ai/chronoz-adapter.cjs#L263>)
- [fail](<chronoz-contract.cjs.md#s-0a5da8b8dbe15a4c>) — [electron/ai/chronoz-adapter.cjs:270](<../../../../../../electron/ai/chronoz-adapter.cjs#L270>)
- [runTrigger.&lt;anonymous@165:22&gt;.finish](<chronoz-adapter.cjs.md#s-6b6a0563c757350b>) — [electron/ai/chronoz-adapter.cjs:271](<../../../../../../electron/ai/chronoz-adapter.cjs#L271>)
- [runTrigger.&lt;anonymous@165:22&gt;.finish](<chronoz-adapter.cjs.md#s-6b6a0563c757350b>) — [electron/ai/chronoz-adapter.cjs:273](<../../../../../../electron/ai/chronoz-adapter.cjs#L273>)
- [ModelRuntimeError.constructor](<../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/chronoz-adapter.cjs:276](<../../../../../../electron/ai/chronoz-adapter.cjs#L276>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- JSON.parse — external-or-dynamic-dispatch; [electron/ai/chronoz-adapter.cjs:248](<../../../../../../electron/ai/chronoz-adapter.cjs#L248>)
- Buffer.concat(out).toString — external-or-dynamic-dispatch; [electron/ai/chronoz-adapter.cjs:248](<../../../../../../electron/ai/chronoz-adapter.cjs#L248>)
- Buffer.concat — external-or-dynamic-dispatch; [electron/ai/chronoz-adapter.cjs:248](<../../../../../../electron/ai/chronoz-adapter.cjs#L248>)
- &#91;"BLOCKED", "FAILED"&#93;.includes — external-or-dynamic-dispatch; [electron/ai/chronoz-adapter.cjs:252](<../../../../../../electron/ai/chronoz-adapter.cjs#L252>)
- &#91;"PUBLISHED", "PARTIAL"&#93;.includes — external-or-dynamic-dispatch; [electron/ai/chronoz-adapter.cjs:267](<../../../../../../electron/ai/chronoz-adapter.cjs#L267>)

**Related tests / acceptance harnesses:**

- [electron/ai/engine-registry.test.cjs:9](<../../../../../../electron/ai/engine-registry.test.cjs#L9>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-engine-smoke.cjs:168](<../../../../../../scripts/acceptance/electron-engine-smoke.cjs#L168>) — file-import-only; coverage not established.

<a id="s-99b6ea0d2b1d6595"></a>

## verifyReport

[electron/ai/chronoz-adapter.cjs:294](<../../../../../../electron/ai/chronoz-adapter.cjs#L294>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: verifyReport ([electron/ai/chronoz-adapter.cjs:1](<../../../../../../electron/ai/chronoz-adapter.cjs#L1>)).

Lexical owner: [electron/ai/chronoz-adapter.cjs](<chronoz-adapter.cjs.md#s-44c98c41283718b7>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| bundle | any | compiler-inferred | required |
| payload | any | compiler-inferred | required |
| requestedMonth | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [fail](<chronoz-contract.cjs.md#s-0a5da8b8dbe15a4c>) — [electron/ai/chronoz-adapter.cjs:298](<../../../../../../electron/ai/chronoz-adapter.cjs#L298>)
- [parse](<../shared/validation.cjs.md#s-f29367528a73f24d>) — [electron/ai/chronoz-adapter.cjs:299](<../../../../../../electron/ai/chronoz-adapter.cjs#L299>)
- [fail](<chronoz-contract.cjs.md#s-0a5da8b8dbe15a4c>) — [electron/ai/chronoz-adapter.cjs:306](<../../../../../../electron/ai/chronoz-adapter.cjs#L306>)
- [contained](<chronoz-contract.cjs.md#s-7c17f67290ab9c26>) — [electron/ai/chronoz-adapter.cjs:310](<../../../../../../electron/ai/chronoz-adapter.cjs#L310>)
- [fail](<chronoz-contract.cjs.md#s-0a5da8b8dbe15a4c>) — [electron/ai/chronoz-adapter.cjs:313](<../../../../../../electron/ai/chronoz-adapter.cjs#L313>)
- [unlinked](<chronoz-contract.cjs.md#s-4c704f10680e63b0>) — [electron/ai/chronoz-adapter.cjs:314](<../../../../../../electron/ai/chronoz-adapter.cjs#L314>)
- [unlinked](<chronoz-contract.cjs.md#s-4c704f10680e63b0>) — [electron/ai/chronoz-adapter.cjs:315](<../../../../../../electron/ai/chronoz-adapter.cjs#L315>)
- [contained](<chronoz-contract.cjs.md#s-7c17f67290ab9c26>) — [electron/ai/chronoz-adapter.cjs:316](<../../../../../../electron/ai/chronoz-adapter.cjs#L316>)
- [fail](<chronoz-contract.cjs.md#s-0a5da8b8dbe15a4c>) — [electron/ai/chronoz-adapter.cjs:317](<../../../../../../electron/ai/chronoz-adapter.cjs#L317>)
- [boundedRead](<chronoz-contract.cjs.md#s-6dd18264afbdab77>) — [electron/ai/chronoz-adapter.cjs:318](<../../../../../../electron/ai/chronoz-adapter.cjs#L318>)
- [sha](<chronoz-contract.cjs.md#s-be6194fd3a77a55d>) — [electron/ai/chronoz-adapter.cjs:322](<../../../../../../electron/ai/chronoz-adapter.cjs#L322>)
- [fail](<chronoz-contract.cjs.md#s-0a5da8b8dbe15a4c>) — [electron/ai/chronoz-adapter.cjs:324](<../../../../../../electron/ai/chronoz-adapter.cjs#L324>)

**Called by (statically resolved):**

- [&lt;anonymous@329:118&gt;.&lt;anonymous@338:24&gt;](<engine-registry.test.cjs.md#s-5d4b5141e2aaf211>) — [electron/ai/engine-registry.test.cjs:369](<../../../../../../electron/ai/engine-registry.test.cjs#L369>)

Unresolved / external call sites: 9.

- &#91;"PUBLISHED", "PARTIAL", "READY"&#93;.includes — external-or-dynamic-dispatch; [electron/ai/chronoz-adapter.cjs:297](<../../../../../../electron/ai/chronoz-adapter.cjs#L297>)
- path.join — external-or-dynamic-dispatch; [electron/ai/chronoz-adapter.cjs:307](<../../../../../../electron/ai/chronoz-adapter.cjs#L307>)
- path.isAbsolute — external-or-dynamic-dispatch; [electron/ai/chronoz-adapter.cjs:309](<../../../../../../electron/ai/chronoz-adapter.cjs#L309>)
- path.extname(output.path).toLowerCase — external-or-dynamic-dispatch; [electron/ai/chronoz-adapter.cjs:311](<../../../../../../electron/ai/chronoz-adapter.cjs#L311>)
- path.extname — external-or-dynamic-dispatch; [electron/ai/chronoz-adapter.cjs:311](<../../../../../../electron/ai/chronoz-adapter.cjs#L311>)
- fs.realpath — external-or-dynamic-dispatch; [electron/ai/chronoz-adapter.cjs:316](<../../../../../../electron/ai/chronoz-adapter.cjs#L316>)
- fs.realpath — external-or-dynamic-dispatch; [electron/ai/chronoz-adapter.cjs:316](<../../../../../../electron/ai/chronoz-adapter.cjs#L316>)
- bytes.subarray(0, 5).toString — external-or-dynamic-dispatch; [electron/ai/chronoz-adapter.cjs:321](<../../../../../../electron/ai/chronoz-adapter.cjs#L321>)
- 1 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/engine-registry.test.cjs:369](<../../../../../../electron/ai/engine-registry.test.cjs#L369>) — static-call-site; coverage not established.
- [electron/ai/engine-registry.test.cjs:9](<../../../../../../electron/ai/engine-registry.test.cjs#L9>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-engine-smoke.cjs:168](<../../../../../../scripts/acceptance/electron-engine-smoke.cjs#L168>) — file-import-only; coverage not established.
