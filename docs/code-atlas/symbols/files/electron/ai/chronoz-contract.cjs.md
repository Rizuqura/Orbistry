# electron/ai/chronoz-contract.cjs: symbols

[Atlas](<../../../../README.md>) / [Retained AI runtime](<../../../../modules/ai-runtime.md>) / [electron/ai/chronoz-contract.cjs:1](<../../../../../../electron/ai/chronoz-contract.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/chronoz-contract.cjs](<chronoz-contract.cjs.md#s-98048a4581dba5cf>) (Module)
- [sha](<chronoz-contract.cjs.md#s-be6194fd3a77a55d>) (ArrowFunction)
- [monthSchema](<chronoz-contract.cjs.md#s-ac76f681e96c018b>) (SchemaBinding)
- [argumentsSchema](<chronoz-contract.cjs.md#s-733b5e3a382e5a9a>) (SchemaBinding)
- [fail](<chronoz-contract.cjs.md#s-0a5da8b8dbe15a4c>) (FunctionDeclaration)
- [contained](<chronoz-contract.cjs.md#s-7c17f67290ab9c26>) (FunctionDeclaration)
- [unlinked](<chronoz-contract.cjs.md#s-4c704f10680e63b0>) (FunctionDeclaration)
- [boundedRead](<chronoz-contract.cjs.md#s-6dd18264afbdab77>) (FunctionDeclaration)

<a id="s-98048a4581dba5cf"></a>

## electron/ai/chronoz-contract.cjs

[electron/ai/chronoz-contract.cjs:1](<../../../../../../electron/ai/chronoz-contract.cjs#L1>) · Module · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- require — module-loader; [electron/ai/chronoz-contract.cjs:1](<../../../../../../electron/ai/chronoz-contract.cjs#L1>)
- require — module-loader; [electron/ai/chronoz-contract.cjs:2](<../../../../../../electron/ai/chronoz-contract.cjs#L2>)
- require — module-loader; [electron/ai/chronoz-contract.cjs:3](<../../../../../../electron/ai/chronoz-contract.cjs#L3>)
- require — module-loader; [electron/ai/chronoz-contract.cjs:4](<../../../../../../electron/ai/chronoz-contract.cjs#L4>)
- require — module-loader; [electron/ai/chronoz-contract.cjs:5](<../../../../../../electron/ai/chronoz-contract.cjs#L5>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-be6194fd3a77a55d"></a>

## sha

[electron/ai/chronoz-contract.cjs:6](<../../../../../../electron/ai/chronoz-contract.cjs#L6>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: sha ([electron/ai/chronoz-adapter.cjs:1](<../../../../../../electron/ai/chronoz-adapter.cjs#L1>)), sha ([electron/ai/chronoz-contract.cjs:1](<../../../../../../electron/ai/chronoz-contract.cjs#L1>)).

Lexical owner: [electron/ai/chronoz-contract.cjs](<chronoz-contract.cjs.md#s-98048a4581dba5cf>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| bytes | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [inspectBundleFiles.walk](<chronoz-adapter.cjs.md#s-4e7e45c264e4d77a>) — [electron/ai/chronoz-adapter.cjs:118](<../../../../../../electron/ai/chronoz-adapter.cjs#L118>)
- [inspectBundleFiles.walk](<chronoz-adapter.cjs.md#s-4e7e45c264e4d77a>) — [electron/ai/chronoz-adapter.cjs:120](<../../../../../../electron/ai/chronoz-adapter.cjs#L120>)
- [verifyReport](<chronoz-adapter.cjs.md#s-99b6ea0d2b1d6595>) — [electron/ai/chronoz-adapter.cjs:322](<../../../../../../electron/ai/chronoz-adapter.cjs#L322>)
- [EngineRegistry.binding](<engine-registry.cjs.md#s-d2b2849dffb7882e>) — [electron/ai/engine-registry.cjs:241](<../../../../../../electron/ai/engine-registry.cjs#L241>)
- [EngineRegistry.open](<engine-registry.cjs.md#s-3478cb94d7277ce5>) — [electron/ai/engine-registry.cjs:375](<../../../../../../electron/ai/engine-registry.cjs#L375>)
- [fixture.&lt;anonymous@48:40&gt;](<engine-registry.test.cjs.md#s-dc159691dac9f1e7>) — [electron/ai/engine-registry.test.cjs:50](<../../../../../../electron/ai/engine-registry.test.cjs#L50>)
- [fixture](<engine-registry.test.cjs.md#s-65055825671a5a43>) — [electron/ai/engine-registry.test.cjs:68](<../../../../../../electron/ai/engine-registry.test.cjs#L68>)
- [&lt;anonymous@329:118&gt;.&lt;anonymous@338:24&gt;](<engine-registry.test.cjs.md#s-5d4b5141e2aaf211>) — [electron/ai/engine-registry.test.cjs:356](<../../../../../../electron/ai/engine-registry.test.cjs#L356>)
- [main](<../../scripts/acceptance/electron-engine-smoke.cjs.md#s-ed7db303dceee445>) — [scripts/acceptance/electron-engine-smoke.cjs:168](<../../../../../../scripts/acceptance/electron-engine-smoke.cjs#L168>)

Unresolved / external call sites: 3.

- createHash("sha256").update(bytes).digest — external-or-dynamic-dispatch; [electron/ai/chronoz-contract.cjs:6](<../../../../../../electron/ai/chronoz-contract.cjs#L6>)
- createHash("sha256").update — external-or-dynamic-dispatch; [electron/ai/chronoz-contract.cjs:6](<../../../../../../electron/ai/chronoz-contract.cjs#L6>)
- createHash — external-or-dynamic-dispatch; [electron/ai/chronoz-contract.cjs:6](<../../../../../../electron/ai/chronoz-contract.cjs#L6>)

**Related tests / acceptance harnesses:**

- [electron/ai/engine-registry.test.cjs:50](<../../../../../../electron/ai/engine-registry.test.cjs#L50>) — static-call-site; coverage not established.
- [electron/ai/engine-registry.test.cjs:68](<../../../../../../electron/ai/engine-registry.test.cjs#L68>) — static-call-site; coverage not established.
- [electron/ai/engine-registry.test.cjs:356](<../../../../../../electron/ai/engine-registry.test.cjs#L356>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-engine-smoke.cjs:168](<../../../../../../scripts/acceptance/electron-engine-smoke.cjs#L168>) — static-call-site; coverage not established.

<a id="s-ac76f681e96c018b"></a>

## monthSchema

[electron/ai/chronoz-contract.cjs:7](<../../../../../../electron/ai/chronoz-contract.cjs#L7>) · SchemaBinding · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: monthSchema ([electron/ai/chronoz-adapter.cjs:1](<../../../../../../electron/ai/chronoz-adapter.cjs#L1>)), monthSchema ([electron/ai/chronoz-contract.cjs:1](<../../../../../../electron/ai/chronoz-contract.cjs#L1>)).

Lexical owner: [electron/ai/chronoz-contract.cjs](<chronoz-contract.cjs.md#s-98048a4581dba5cf>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- z.string().regex — external-or-dynamic-dispatch; [electron/ai/chronoz-contract.cjs:7](<../../../../../../electron/ai/chronoz-contract.cjs#L7>)
- z.string — external-or-dynamic-dispatch; [electron/ai/chronoz-contract.cjs:7](<../../../../../../electron/ai/chronoz-contract.cjs#L7>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-733b5e3a382e5a9a"></a>

## argumentsSchema

[electron/ai/chronoz-contract.cjs:8](<../../../../../../electron/ai/chronoz-contract.cjs#L8>) · SchemaBinding · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: argumentsSchema ([electron/ai/chronoz-adapter.cjs:1](<../../../../../../electron/ai/chronoz-adapter.cjs#L1>)), argumentsSchema ([electron/ai/chronoz-contract.cjs:1](<../../../../../../electron/ai/chronoz-contract.cjs#L1>)).

Lexical owner: [electron/ai/chronoz-contract.cjs](<chronoz-contract.cjs.md#s-98048a4581dba5cf>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- z.object({ month: monthSchema.optional() }).strict — external-or-dynamic-dispatch; [electron/ai/chronoz-contract.cjs:8](<../../../../../../electron/ai/chronoz-contract.cjs#L8>)
- z.object — external-or-dynamic-dispatch; [electron/ai/chronoz-contract.cjs:8](<../../../../../../electron/ai/chronoz-contract.cjs#L8>)
- monthSchema.optional — external-or-dynamic-dispatch; [electron/ai/chronoz-contract.cjs:8](<../../../../../../electron/ai/chronoz-contract.cjs#L8>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-0a5da8b8dbe15a4c"></a>

## fail

[electron/ai/chronoz-contract.cjs:9](<../../../../../../electron/ai/chronoz-contract.cjs#L9>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: fail ([electron/ai/chronoz-contract.cjs:1](<../../../../../../electron/ai/chronoz-contract.cjs#L1>)).

Lexical owner: [electron/ai/chronoz-contract.cjs](<chronoz-contract.cjs.md#s-98048a4581dba5cf>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| message | any | compiler-inferred | required |
| code | string | compiler-inferred | optional, default present |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ModelRuntimeError.constructor](<../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/chronoz-contract.cjs:10](<../../../../../../electron/ai/chronoz-contract.cjs#L10>)

**Called by (statically resolved):**

- [inspectBundle](<chronoz-adapter.cjs.md#s-27254e2757fbd276>) — [electron/ai/chronoz-adapter.cjs:47](<../../../../../../electron/ai/chronoz-adapter.cjs#L47>)
- [inspectBundleFiles](<chronoz-adapter.cjs.md#s-ea6badb360163d1a>) — [electron/ai/chronoz-adapter.cjs:56](<../../../../../../electron/ai/chronoz-adapter.cjs#L56>)
- [inspectBundleFiles](<chronoz-adapter.cjs.md#s-ea6badb360163d1a>) — [electron/ai/chronoz-adapter.cjs:65](<../../../../../../electron/ai/chronoz-adapter.cjs#L65>)
- [inspectBundleFiles](<chronoz-adapter.cjs.md#s-ea6badb360163d1a>) — [electron/ai/chronoz-adapter.cjs:74](<../../../../../../electron/ai/chronoz-adapter.cjs#L74>)
- [inspectBundleFiles](<chronoz-adapter.cjs.md#s-ea6badb360163d1a>) — [electron/ai/chronoz-adapter.cjs:83](<../../../../../../electron/ai/chronoz-adapter.cjs#L83>)
- [inspectBundleFiles](<chronoz-adapter.cjs.md#s-ea6badb360163d1a>) — [electron/ai/chronoz-adapter.cjs:84](<../../../../../../electron/ai/chronoz-adapter.cjs#L84>)
- [inspectBundleFiles](<chronoz-adapter.cjs.md#s-ea6badb360163d1a>) — [electron/ai/chronoz-adapter.cjs:94](<../../../../../../electron/ai/chronoz-adapter.cjs#L94>)
- [inspectBundleFiles.walk](<chronoz-adapter.cjs.md#s-4e7e45c264e4d77a>) — [electron/ai/chronoz-adapter.cjs:105](<../../../../../../electron/ai/chronoz-adapter.cjs#L105>)
- [inspectBundleFiles.walk](<chronoz-adapter.cjs.md#s-4e7e45c264e4d77a>) — [electron/ai/chronoz-adapter.cjs:112](<../../../../../../electron/ai/chronoz-adapter.cjs#L112>)
- [inspectBundleFiles.walk](<chronoz-adapter.cjs.md#s-4e7e45c264e4d77a>) — [electron/ai/chronoz-adapter.cjs:119](<../../../../../../electron/ai/chronoz-adapter.cjs#L119>)
- [inspectBundleFiles](<chronoz-adapter.cjs.md#s-ea6badb360163d1a>) — [electron/ai/chronoz-adapter.cjs:139](<../../../../../../electron/ai/chronoz-adapter.cjs#L139>)
- [runTrigger](<chronoz-adapter.cjs.md#s-9a8362270da4fd67>) — [electron/ai/chronoz-adapter.cjs:160](<../../../../../../electron/ai/chronoz-adapter.cjs#L160>)
- [runTrigger.&lt;anonymous@165:22&gt;.&lt;anonymous@243:25&gt;](<chronoz-adapter.cjs.md#s-52f2f0f3b3b3c5dd>) — [electron/ai/chronoz-adapter.cjs:263](<../../../../../../electron/ai/chronoz-adapter.cjs#L263>)
- [runTrigger.&lt;anonymous@165:22&gt;.&lt;anonymous@243:25&gt;](<chronoz-adapter.cjs.md#s-52f2f0f3b3b3c5dd>) — [electron/ai/chronoz-adapter.cjs:270](<../../../../../../electron/ai/chronoz-adapter.cjs#L270>)
- [verifyReport](<chronoz-adapter.cjs.md#s-99b6ea0d2b1d6595>) — [electron/ai/chronoz-adapter.cjs:298](<../../../../../../electron/ai/chronoz-adapter.cjs#L298>)
- [verifyReport](<chronoz-adapter.cjs.md#s-99b6ea0d2b1d6595>) — [electron/ai/chronoz-adapter.cjs:306](<../../../../../../electron/ai/chronoz-adapter.cjs#L306>)
- [verifyReport](<chronoz-adapter.cjs.md#s-99b6ea0d2b1d6595>) — [electron/ai/chronoz-adapter.cjs:313](<../../../../../../electron/ai/chronoz-adapter.cjs#L313>)
- [verifyReport](<chronoz-adapter.cjs.md#s-99b6ea0d2b1d6595>) — [electron/ai/chronoz-adapter.cjs:317](<../../../../../../electron/ai/chronoz-adapter.cjs#L317>)
- [verifyReport](<chronoz-adapter.cjs.md#s-99b6ea0d2b1d6595>) — [electron/ai/chronoz-adapter.cjs:324](<../../../../../../electron/ai/chronoz-adapter.cjs#L324>)
- [unlinked](<chronoz-contract.cjs.md#s-4c704f10680e63b0>) — [electron/ai/chronoz-contract.cjs:25](<../../../../../../electron/ai/chronoz-contract.cjs#L25>)
- [boundedRead](<chronoz-contract.cjs.md#s-6dd18264afbdab77>) — [electron/ai/chronoz-contract.cjs:39](<../../../../../../electron/ai/chronoz-contract.cjs#L39>)
- [boundedRead](<chronoz-contract.cjs.md#s-6dd18264afbdab77>) — [electron/ai/chronoz-contract.cjs:54](<../../../../../../electron/ai/chronoz-contract.cjs#L54>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-7c17f67290ab9c26"></a>

## contained

[electron/ai/chronoz-contract.cjs:12](<../../../../../../electron/ai/chronoz-contract.cjs#L12>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: contained ([electron/ai/chronoz-contract.cjs:1](<../../../../../../electron/ai/chronoz-contract.cjs#L1>)).

Lexical owner: [electron/ai/chronoz-contract.cjs](<chronoz-contract.cjs.md#s-98048a4581dba5cf>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| target | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [inspectBundleFiles](<chronoz-adapter.cjs.md#s-ea6badb360163d1a>) — [electron/ai/chronoz-adapter.cjs:81](<../../../../../../electron/ai/chronoz-adapter.cjs#L81>)
- [verifyReport](<chronoz-adapter.cjs.md#s-99b6ea0d2b1d6595>) — [electron/ai/chronoz-adapter.cjs:310](<../../../../../../electron/ai/chronoz-adapter.cjs#L310>)
- [verifyReport](<chronoz-adapter.cjs.md#s-99b6ea0d2b1d6595>) — [electron/ai/chronoz-adapter.cjs:316](<../../../../../../electron/ai/chronoz-adapter.cjs#L316>)

Unresolved / external call sites: 3.

- path.relative — external-or-dynamic-dispatch; [electron/ai/chronoz-contract.cjs:13](<../../../../../../electron/ai/chronoz-contract.cjs#L13>)
- relative.startsWith — external-or-dynamic-dispatch; [electron/ai/chronoz-contract.cjs:16](<../../../../../../electron/ai/chronoz-contract.cjs#L16>)
- path.isAbsolute — external-or-dynamic-dispatch; [electron/ai/chronoz-contract.cjs:18](<../../../../../../electron/ai/chronoz-contract.cjs#L18>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-4c704f10680e63b0"></a>

## unlinked

[electron/ai/chronoz-contract.cjs:21](<../../../../../../electron/ai/chronoz-contract.cjs#L21>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: unlinked ([electron/ai/chronoz-adapter.cjs:1](<../../../../../../electron/ai/chronoz-adapter.cjs#L1>)), unlinked ([electron/ai/chronoz-contract.cjs:1](<../../../../../../electron/ai/chronoz-contract.cjs#L1>)).

Lexical owner: [electron/ai/chronoz-contract.cjs](<chronoz-contract.cjs.md#s-98048a4581dba5cf>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| target | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [fail](<chronoz-contract.cjs.md#s-0a5da8b8dbe15a4c>) — [electron/ai/chronoz-contract.cjs:25](<../../../../../../electron/ai/chronoz-contract.cjs#L25>)

**Called by (statically resolved):**

- [inspectBundleFiles](<chronoz-adapter.cjs.md#s-ea6badb360163d1a>) — [electron/ai/chronoz-adapter.cjs:54](<../../../../../../electron/ai/chronoz-adapter.cjs#L54>)
- [verifyReport](<chronoz-adapter.cjs.md#s-99b6ea0d2b1d6595>) — [electron/ai/chronoz-adapter.cjs:314](<../../../../../../electron/ai/chronoz-adapter.cjs#L314>)
- [verifyReport](<chronoz-adapter.cjs.md#s-99b6ea0d2b1d6595>) — [electron/ai/chronoz-adapter.cjs:315](<../../../../../../electron/ai/chronoz-adapter.cjs#L315>)
- [boundedRead](<chronoz-contract.cjs.md#s-6dd18264afbdab77>) — [electron/ai/chronoz-contract.cjs:34](<../../../../../../electron/ai/chronoz-contract.cjs#L34>)

Unresolved / external call sites: 6.

- path.resolve — external-or-dynamic-dispatch; [electron/ai/chronoz-contract.cjs:22](<../../../../../../electron/ai/chronoz-contract.cjs#L22>)
- path.dirname — external-or-dynamic-dispatch; [electron/ai/chronoz-contract.cjs:23](<../../../../../../electron/ai/chronoz-contract.cjs#L23>)
- path.dirname — external-or-dynamic-dispatch; [electron/ai/chronoz-contract.cjs:23](<../../../../../../electron/ai/chronoz-contract.cjs#L23>)
- (await fs.lstat(p)).isSymbolicLink — external-or-dynamic-dispatch; [electron/ai/chronoz-contract.cjs:24](<../../../../../../electron/ai/chronoz-contract.cjs#L24>)
- fs.lstat — external-or-dynamic-dispatch; [electron/ai/chronoz-contract.cjs:24](<../../../../../../electron/ai/chronoz-contract.cjs#L24>)
- fs.realpath — external-or-dynamic-dispatch; [electron/ai/chronoz-contract.cjs:31](<../../../../../../electron/ai/chronoz-contract.cjs#L31>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-6dd18264afbdab77"></a>

## boundedRead

[electron/ai/chronoz-contract.cjs:33](<../../../../../../electron/ai/chronoz-contract.cjs#L33>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: boundedRead ([electron/ai/chronoz-adapter.cjs:1](<../../../../../../electron/ai/chronoz-adapter.cjs#L1>)), boundedRead ([electron/ai/chronoz-contract.cjs:1](<../../../../../../electron/ai/chronoz-contract.cjs#L1>)).

Lexical owner: [electron/ai/chronoz-contract.cjs](<chronoz-contract.cjs.md#s-98048a4581dba5cf>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| file | any | compiler-inferred | required |
| maxBytes | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [unlinked](<chronoz-contract.cjs.md#s-4c704f10680e63b0>) — [electron/ai/chronoz-contract.cjs:34](<../../../../../../electron/ai/chronoz-contract.cjs#L34>)
- [fail](<chronoz-contract.cjs.md#s-0a5da8b8dbe15a4c>) — [electron/ai/chronoz-contract.cjs:39](<../../../../../../electron/ai/chronoz-contract.cjs#L39>)
- [fail](<chronoz-contract.cjs.md#s-0a5da8b8dbe15a4c>) — [electron/ai/chronoz-contract.cjs:54](<../../../../../../electron/ai/chronoz-contract.cjs#L54>)

**Called by (statically resolved):**

- [EntityAgentService.recentResults](<agents/entity-agents.cjs.md#s-8a9788a3c797a765>) — [electron/ai/agents/entity-agents.cjs:801](<../../../../../../electron/ai/agents/entity-agents.cjs#L801>)
- [EntityAgentService.recentResults](<agents/entity-agents.cjs.md#s-8a9788a3c797a765>) — [electron/ai/agents/entity-agents.cjs:833](<../../../../../../electron/ai/agents/entity-agents.cjs#L833>)
- [EntityAgentService.readExecutionResult](<agents/entity-agents.cjs.md#s-23aca86db20e2c12>) — [electron/ai/agents/entity-agents.cjs:947](<../../../../../../electron/ai/agents/entity-agents.cjs#L947>)
- [inspectBundleFiles](<chronoz-adapter.cjs.md#s-ea6badb360163d1a>) — [electron/ai/chronoz-adapter.cjs:57](<../../../../../../electron/ai/chronoz-adapter.cjs#L57>)
- [inspectBundleFiles.walk](<chronoz-adapter.cjs.md#s-4e7e45c264e4d77a>) — [electron/ai/chronoz-adapter.cjs:116](<../../../../../../electron/ai/chronoz-adapter.cjs#L116>)
- [inspectBundleFiles](<chronoz-adapter.cjs.md#s-ea6badb360163d1a>) — [electron/ai/chronoz-adapter.cjs:129](<../../../../../../electron/ai/chronoz-adapter.cjs#L129>)
- [verifyReport](<chronoz-adapter.cjs.md#s-99b6ea0d2b1d6595>) — [electron/ai/chronoz-adapter.cjs:318](<../../../../../../electron/ai/chronoz-adapter.cjs#L318>)
- [EngineRegistry.open](<engine-registry.cjs.md#s-3478cb94d7277ce5>) — [electron/ai/engine-registry.cjs:373](<../../../../../../electron/ai/engine-registry.cjs#L373>)

Unresolved / external call sites: 7.

- fs.open — external-or-dynamic-dispatch; [electron/ai/chronoz-contract.cjs:35](<../../../../../../electron/ai/chronoz-contract.cjs#L35>)
- handle.stat — external-or-dynamic-dispatch; [electron/ai/chronoz-contract.cjs:37](<../../../../../../electron/ai/chronoz-contract.cjs#L37>)
- info.isFile — external-or-dynamic-dispatch; [electron/ai/chronoz-contract.cjs:38](<../../../../../../electron/ai/chronoz-contract.cjs#L38>)
- Buffer.alloc — external-or-dynamic-dispatch; [electron/ai/chronoz-contract.cjs:41](<../../../../../../electron/ai/chronoz-contract.cjs#L41>)
- handle.read — external-or-dynamic-dispatch; [electron/ai/chronoz-contract.cjs:44](<../../../../../../electron/ai/chronoz-contract.cjs#L44>)
- bytes.subarray — external-or-dynamic-dispatch; [electron/ai/chronoz-contract.cjs:57](<../../../../../../electron/ai/chronoz-contract.cjs#L57>)
- handle.close — external-or-dynamic-dispatch; [electron/ai/chronoz-contract.cjs:59](<../../../../../../electron/ai/chronoz-contract.cjs#L59>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
