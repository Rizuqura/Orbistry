# electron/ai/backend-reset.cjs: symbols

[Atlas](<../../../../README.md>) / [Retained AI runtime](<../../../../modules/ai-runtime.md>) / [electron/ai/backend-reset.cjs:1](<../../../../../../electron/ai/backend-reset.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/backend-reset.cjs](<backend-reset.cjs.md#s-8a7b8700411de35c>) (Module)
- [target](<backend-reset.cjs.md#s-95401917ec5cb0ce>) (FunctionDeclaration)
- [inventory](<backend-reset.cjs.md#s-2b14d7e14d8a506d>) (FunctionDeclaration)
- [optional](<backend-reset.cjs.md#s-b24bb203220cfac5>) (FunctionDeclaration)
- [hashFile](<backend-reset.cjs.md#s-9c8c4f992c4cadd8>) (FunctionDeclaration)
- [resetBackend](<backend-reset.cjs.md#s-8923e8f07754093d>) (FunctionDeclaration)
- [resetBackend.&lt;anonymous@82:17&gt;](<backend-reset.cjs.md#s-6cc5479a97cee9c9>) (ArrowFunction)
- [resetBackend.&lt;anonymous@90:20&gt;](<backend-reset.cjs.md#s-a696be752b17d272>) (ArrowFunction)
- [resetBackend.&lt;anonymous@144:9&gt;](<backend-reset.cjs.md#s-337eda88e331f03f>) (ArrowFunction)
- [resetBackend.&lt;anonymous@157:7&gt;](<backend-reset.cjs.md#s-132f47a8a0c39a26>) (ArrowFunction)

<a id="s-8a7b8700411de35c"></a>

## electron/ai/backend-reset.cjs

[electron/ai/backend-reset.cjs:1](<../../../../../../electron/ai/backend-reset.cjs#L1>) · Module · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 7.

- require — module-loader; [electron/ai/backend-reset.cjs:1](<../../../../../../electron/ai/backend-reset.cjs#L1>)
- require — module-loader; [electron/ai/backend-reset.cjs:2](<../../../../../../electron/ai/backend-reset.cjs#L2>)
- require — module-loader; [electron/ai/backend-reset.cjs:3](<../../../../../../electron/ai/backend-reset.cjs#L3>)
- require — module-loader; [electron/ai/backend-reset.cjs:4](<../../../../../../electron/ai/backend-reset.cjs#L4>)
- require — module-loader; [electron/ai/backend-reset.cjs:5](<../../../../../../electron/ai/backend-reset.cjs#L5>)
- require — module-loader; [electron/ai/backend-reset.cjs:6](<../../../../../../electron/ai/backend-reset.cjs#L6>)
- require — module-loader; [electron/ai/backend-reset.cjs:7](<../../../../../../electron/ai/backend-reset.cjs#L7>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:167](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L167>) — file-import-only; coverage not established.
- [electron/ai/backend-audit.test.cjs:10](<../../../../../../electron/ai/backend-audit.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/backend-reset.test.cjs:6](<../../../../../../electron/ai/backend-reset.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-95401917ec5cb0ce"></a>

## target

[electron/ai/backend-reset.cjs:10](<../../../../../../electron/ai/backend-reset.cjs#L10>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

Resolves an allowlisted reset target inside an explicit root and rejects linked ancestors. Missing targets are safe no-ops; no provider/source data is read.

Purpose evidence: jsdoc.

Lexical owner: [electron/ai/backend-reset.cjs](<backend-reset.cjs.md#s-8a7b8700411de35c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| relative | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [resetBackend.&lt;anonymous@82:17&gt;](<backend-reset.cjs.md#s-6cc5479a97cee9c9>) — [electron/ai/backend-reset.cjs:82](<../../../../../../electron/ai/backend-reset.cjs#L82>)
- [resetBackend.&lt;anonymous@90:20&gt;](<backend-reset.cjs.md#s-a696be752b17d272>) — [electron/ai/backend-reset.cjs:90](<../../../../../../electron/ai/backend-reset.cjs#L90>)
- [resetBackend](<backend-reset.cjs.md#s-8923e8f07754093d>) — [electron/ai/backend-reset.cjs:102](<../../../../../../electron/ai/backend-reset.cjs#L102>)
- [resetBackend](<backend-reset.cjs.md#s-8923e8f07754093d>) — [electron/ai/backend-reset.cjs:103](<../../../../../../electron/ai/backend-reset.cjs#L103>)
- [resetBackend](<backend-reset.cjs.md#s-8923e8f07754093d>) — [electron/ai/backend-reset.cjs:109](<../../../../../../electron/ai/backend-reset.cjs#L109>)
- [resetBackend](<backend-reset.cjs.md#s-8923e8f07754093d>) — [electron/ai/backend-reset.cjs:110](<../../../../../../electron/ai/backend-reset.cjs#L110>)
- [resetBackend](<backend-reset.cjs.md#s-8923e8f07754093d>) — [electron/ai/backend-reset.cjs:111](<../../../../../../electron/ai/backend-reset.cjs#L111>)
- [resetBackend](<backend-reset.cjs.md#s-8923e8f07754093d>) — [electron/ai/backend-reset.cjs:119](<../../../../../../electron/ai/backend-reset.cjs#L119>)
- [resetBackend](<backend-reset.cjs.md#s-8923e8f07754093d>) — [electron/ai/backend-reset.cjs:129](<../../../../../../electron/ai/backend-reset.cjs#L129>)

Unresolved / external call sites: 9.

- path.resolve — external-or-dynamic-dispatch; [electron/ai/backend-reset.cjs:11](<../../../../../../electron/ai/backend-reset.cjs#L11>)
- absolute.startsWith — external-or-dynamic-dispatch; [electron/ai/backend-reset.cjs:12](<../../../../../../electron/ai/backend-reset.cjs#L12>)
- Error — external-or-dynamic-dispatch; [electron/ai/backend-reset.cjs:13](<../../../../../../electron/ai/backend-reset.cjs#L13>)
- path.relative(root, absolute).split — external-or-dynamic-dispatch; [electron/ai/backend-reset.cjs:15](<../../../../../../electron/ai/backend-reset.cjs#L15>)
- path.relative — external-or-dynamic-dispatch; [electron/ai/backend-reset.cjs:15](<../../../../../../electron/ai/backend-reset.cjs#L15>)
- path.join — external-or-dynamic-dispatch; [electron/ai/backend-reset.cjs:16](<../../../../../../electron/ai/backend-reset.cjs#L16>)
- (await fs.lstat(current)).isSymbolicLink — external-or-dynamic-dispatch; [electron/ai/backend-reset.cjs:18](<../../../../../../electron/ai/backend-reset.cjs#L18>)
- fs.lstat — external-or-dynamic-dispatch; [electron/ai/backend-reset.cjs:18](<../../../../../../electron/ai/backend-reset.cjs#L18>)
- 1 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:167](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L167>) — file-import-only; coverage not established.
- [electron/ai/backend-audit.test.cjs:10](<../../../../../../electron/ai/backend-audit.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/backend-reset.test.cjs:6](<../../../../../../electron/ai/backend-reset.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-2b14d7e14d8a506d"></a>

## inventory

[electron/ai/backend-reset.cjs:28](<../../../../../../electron/ai/backend-reset.cjs#L28>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

Lists only real files/directories below one verified reset target; refuses links instead of following them during removal.

Purpose evidence: jsdoc.

Lexical owner: [electron/ai/backend-reset.cjs](<backend-reset.cjs.md#s-8a7b8700411de35c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| directory | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [inventory](<backend-reset.cjs.md#s-2b14d7e14d8a506d>) — [electron/ai/backend-reset.cjs:41](<../../../../../../electron/ai/backend-reset.cjs#L41>)

**Called by (statically resolved):**

- [inventory](<backend-reset.cjs.md#s-2b14d7e14d8a506d>) — [electron/ai/backend-reset.cjs:41](<../../../../../../electron/ai/backend-reset.cjs#L41>)
- [resetBackend](<backend-reset.cjs.md#s-8923e8f07754093d>) — [electron/ai/backend-reset.cjs:119](<../../../../../../electron/ai/backend-reset.cjs#L119>)
- [resetBackend](<backend-reset.cjs.md#s-8923e8f07754093d>) — [electron/ai/backend-reset.cjs:134](<../../../../../../electron/ai/backend-reset.cjs#L134>)

Unresolved / external call sites: 9.

- fs.readdir — external-or-dynamic-dispatch; [electron/ai/backend-reset.cjs:31](<../../../../../../electron/ai/backend-reset.cjs#L31>)
- entry.isSymbolicLink — external-or-dynamic-dispatch; [electron/ai/backend-reset.cjs:38](<../../../../../../electron/ai/backend-reset.cjs#L38>)
- Error — external-or-dynamic-dispatch; [electron/ai/backend-reset.cjs:39](<../../../../../../electron/ai/backend-reset.cjs#L39>)
- path.join — external-or-dynamic-dispatch; [electron/ai/backend-reset.cjs:40](<../../../../../../electron/ai/backend-reset.cjs#L40>)
- entry.isDirectory — external-or-dynamic-dispatch; [electron/ai/backend-reset.cjs:41](<../../../../../../electron/ai/backend-reset.cjs#L41>)
- files.push — external-or-dynamic-dispatch; [electron/ai/backend-reset.cjs:41](<../../../../../../electron/ai/backend-reset.cjs#L41>)
- entry.isFile — external-or-dynamic-dispatch; [electron/ai/backend-reset.cjs:42](<../../../../../../electron/ai/backend-reset.cjs#L42>)
- files.push — external-or-dynamic-dispatch; [electron/ai/backend-reset.cjs:42](<../../../../../../electron/ai/backend-reset.cjs#L42>)
- 1 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:167](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L167>) — file-import-only; coverage not established.
- [electron/ai/backend-audit.test.cjs:10](<../../../../../../electron/ai/backend-audit.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/backend-reset.test.cjs:6](<../../../../../../electron/ai/backend-reset.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-b24bb203220cfac5"></a>

## optional

[electron/ai/backend-reset.cjs:49](<../../../../../../electron/ai/backend-reset.cjs#L49>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

Reads a known optional configuration file. Invalid JSON aborts the reset before mutation.

Purpose evidence: jsdoc.

Lexical owner: [electron/ai/backend-reset.cjs](<backend-reset.cjs.md#s-8a7b8700411de35c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| file | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [resetBackend](<backend-reset.cjs.md#s-8923e8f07754093d>) — [electron/ai/backend-reset.cjs:104](<../../../../../../electron/ai/backend-reset.cjs#L104>)
- [resetBackend](<backend-reset.cjs.md#s-8923e8f07754093d>) — [electron/ai/backend-reset.cjs:105](<../../../../../../electron/ai/backend-reset.cjs#L105>)
- [resetBackend](<backend-reset.cjs.md#s-8923e8f07754093d>) — [electron/ai/backend-reset.cjs:137](<../../../../../../electron/ai/backend-reset.cjs#L137>)
- [resetBackend](<backend-reset.cjs.md#s-8923e8f07754093d>) — [electron/ai/backend-reset.cjs:192](<../../../../../../electron/ai/backend-reset.cjs#L192>)

Unresolved / external call sites: 2.

- JSON.parse — external-or-dynamic-dispatch; [electron/ai/backend-reset.cjs:51](<../../../../../../electron/ai/backend-reset.cjs#L51>)
- fs.readFile — external-or-dynamic-dispatch; [electron/ai/backend-reset.cjs:51](<../../../../../../electron/ai/backend-reset.cjs#L51>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:167](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L167>) — file-import-only; coverage not established.
- [electron/ai/backend-audit.test.cjs:10](<../../../../../../electron/ai/backend-audit.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/backend-reset.test.cjs:6](<../../../../../../electron/ai/backend-reset.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-9c8c4f992c4cadd8"></a>

## hashFile

[electron/ai/backend-reset.cjs:59](<../../../../../../electron/ai/backend-reset.cjs#L59>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

Hashes a retained file in bounded stream chunks instead of loading its entire Engine result into memory. Read errors abort reset verification.

Purpose evidence: jsdoc.

Lexical owner: [electron/ai/backend-reset.cjs](<backend-reset.cjs.md#s-8a7b8700411de35c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| file | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [resetBackend](<backend-reset.cjs.md#s-8923e8f07754093d>) — [electron/ai/backend-reset.cjs:123](<../../../../../../electron/ai/backend-reset.cjs#L123>)
- [resetBackend](<backend-reset.cjs.md#s-8923e8f07754093d>) — [electron/ai/backend-reset.cjs:189](<../../../../../../electron/ai/backend-reset.cjs#L189>)

Unresolved / external call sites: 4.

- createHash — external-or-dynamic-dispatch; [electron/ai/backend-reset.cjs:60](<../../../../../../electron/ai/backend-reset.cjs#L60>)
- createReadStream — external-or-dynamic-dispatch; [electron/ai/backend-reset.cjs:61](<../../../../../../electron/ai/backend-reset.cjs#L61>)
- hash.update — external-or-dynamic-dispatch; [electron/ai/backend-reset.cjs:61](<../../../../../../electron/ai/backend-reset.cjs#L61>)
- hash.digest — external-or-dynamic-dispatch; [electron/ai/backend-reset.cjs:62](<../../../../../../electron/ai/backend-reset.cjs#L62>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:167](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L167>) — file-import-only; coverage not established.
- [electron/ai/backend-audit.test.cjs:10](<../../../../../../electron/ai/backend-audit.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/backend-reset.test.cjs:6](<../../../../../../electron/ai/backend-reset.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-8923e8f07754093d"></a>

## resetBackend

[electron/ai/backend-reset.cjs:66](<../../../../../../electron/ai/backend-reset.cjs#L66>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

Plans or applies the explicitly requested history/provider reset. Preserves definitions, construction, assignments, source/index/Identity data and Engine execution/results; never decrypts credentials or calls a provider.

Purpose evidence: jsdoc.

Exported as: resetBackend ([electron/ai/backend-reset.cjs:1](<../../../../../../electron/ai/backend-reset.cjs#L1>)).

Lexical owner: [electron/ai/backend-reset.cjs](<backend-reset.cjs.md#s-8a7b8700411de35c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { profile, vault, apply = false } | { profile: any; vault: any; apply?: boolean; } | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [target](<backend-reset.cjs.md#s-95401917ec5cb0ce>) — [electron/ai/backend-reset.cjs:102](<../../../../../../electron/ai/backend-reset.cjs#L102>)
- [target](<backend-reset.cjs.md#s-95401917ec5cb0ce>) — [electron/ai/backend-reset.cjs:103](<../../../../../../electron/ai/backend-reset.cjs#L103>)
- [optional](<backend-reset.cjs.md#s-b24bb203220cfac5>) — [electron/ai/backend-reset.cjs:104](<../../../../../../electron/ai/backend-reset.cjs#L104>)
- [optional](<backend-reset.cjs.md#s-b24bb203220cfac5>) — [electron/ai/backend-reset.cjs:105](<../../../../../../electron/ai/backend-reset.cjs#L105>)
- [validateCredentialState](<credential-store.cjs.md#s-f2db6513cc372f52>) — [electron/ai/backend-reset.cjs:106](<../../../../../../electron/ai/backend-reset.cjs#L106>)
- [validateSettings](<model-registry.cjs.md#s-f1f9d1092d51054a>) — [electron/ai/backend-reset.cjs:107](<../../../../../../electron/ai/backend-reset.cjs#L107>)
- [target](<backend-reset.cjs.md#s-95401917ec5cb0ce>) — [electron/ai/backend-reset.cjs:109](<../../../../../../electron/ai/backend-reset.cjs#L109>)
- [target](<backend-reset.cjs.md#s-95401917ec5cb0ce>) — [electron/ai/backend-reset.cjs:110](<../../../../../../electron/ai/backend-reset.cjs#L110>)
- [target](<backend-reset.cjs.md#s-95401917ec5cb0ce>) — [electron/ai/backend-reset.cjs:111](<../../../../../../electron/ai/backend-reset.cjs#L111>)
- [inventory](<backend-reset.cjs.md#s-2b14d7e14d8a506d>) — [electron/ai/backend-reset.cjs:119](<../../../../../../electron/ai/backend-reset.cjs#L119>)
- [target](<backend-reset.cjs.md#s-95401917ec5cb0ce>) — [electron/ai/backend-reset.cjs:119](<../../../../../../electron/ai/backend-reset.cjs#L119>)
- [hashFile](<backend-reset.cjs.md#s-9c8c4f992c4cadd8>) — [electron/ai/backend-reset.cjs:123](<../../../../../../electron/ai/backend-reset.cjs#L123>)
- [target](<backend-reset.cjs.md#s-95401917ec5cb0ce>) — [electron/ai/backend-reset.cjs:129](<../../../../../../electron/ai/backend-reset.cjs#L129>)
- [inventory](<backend-reset.cjs.md#s-2b14d7e14d8a506d>) — [electron/ai/backend-reset.cjs:134](<../../../../../../electron/ai/backend-reset.cjs#L134>)
- [optional](<backend-reset.cjs.md#s-b24bb203220cfac5>) — [electron/ai/backend-reset.cjs:137](<../../../../../../electron/ai/backend-reset.cjs#L137>)
- [writeJson](<../core/persistence/json-store.cjs.md#s-5030c6156f98dba1>) — [electron/ai/backend-reset.cjs:170](<../../../../../../electron/ai/backend-reset.cjs#L170>)
- [writeJson](<../core/persistence/json-store.cjs.md#s-5030c6156f98dba1>) — [electron/ai/backend-reset.cjs:175](<../../../../../../electron/ai/backend-reset.cjs#L175>)
- [writeJson](<../core/persistence/json-store.cjs.md#s-5030c6156f98dba1>) — [electron/ai/backend-reset.cjs:186](<../../../../../../electron/ai/backend-reset.cjs#L186>)
- [hashFile](<backend-reset.cjs.md#s-9c8c4f992c4cadd8>) — [electron/ai/backend-reset.cjs:189](<../../../../../../electron/ai/backend-reset.cjs#L189>)
- [optional](<backend-reset.cjs.md#s-b24bb203220cfac5>) — [electron/ai/backend-reset.cjs:192](<../../../../../../electron/ai/backend-reset.cjs#L192>)

**Called by (statically resolved):**

- [&lt;anonymous@158:89&gt;](<agents/entity-agents.test.cjs.md#s-21024ee92564c8ac>) — [electron/ai/agents/entity-agents.test.cjs:167](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L167>)
- [&lt;anonymous@77:89&gt;](<backend-audit.test.cjs.md#s-2b329a7382c5a6fb>) — [electron/ai/backend-audit.test.cjs:87](<../../../../../../electron/ai/backend-audit.test.cjs#L87>)
- [&lt;anonymous@96:65&gt;](<backend-audit.test.cjs.md#s-a94d01819c5fe5a5>) — [electron/ai/backend-audit.test.cjs:99](<../../../../../../electron/ai/backend-audit.test.cjs#L99>)
- [&lt;anonymous@109:67&gt;](<backend-audit.test.cjs.md#s-2ed6410f2f314d5d>) — [electron/ai/backend-audit.test.cjs:121](<../../../../../../electron/ai/backend-audit.test.cjs#L121>)
- [&lt;anonymous@126:108&gt;](<backend-audit.test.cjs.md#s-5998d09002d1b3c8>) — [electron/ai/backend-audit.test.cjs:132](<../../../../../../electron/ai/backend-audit.test.cjs#L132>)
- [&lt;anonymous@126:108&gt;](<backend-audit.test.cjs.md#s-5998d09002d1b3c8>) — [electron/ai/backend-audit.test.cjs:150](<../../../../../../electron/ai/backend-audit.test.cjs#L150>)
- [&lt;anonymous@99:108&gt;](<backend-reset.test.cjs.md#s-5d70af605cec54b0>) — [electron/ai/backend-reset.test.cjs:104](<../../../../../../electron/ai/backend-reset.test.cjs#L104>)
- [&lt;anonymous@99:108&gt;](<backend-reset.test.cjs.md#s-5d70af605cec54b0>) — [electron/ai/backend-reset.test.cjs:110](<../../../../../../electron/ai/backend-reset.test.cjs#L110>)
- [&lt;anonymous@99:108&gt;](<backend-reset.test.cjs.md#s-5d70af605cec54b0>) — [electron/ai/backend-reset.test.cjs:131](<../../../../../../electron/ai/backend-reset.test.cjs#L131>)
- [&lt;anonymous@138:76&gt;](<backend-reset.test.cjs.md#s-73e38c9bbdc70544>) — [electron/ai/backend-reset.test.cjs:148](<../../../../../../electron/ai/backend-reset.test.cjs#L148>)
- [main](<../../scripts/reset-universe-chat.cjs.md#s-ea0ee3a6ff715091>) — [scripts/reset-universe-chat.cjs:11](<../../../../../../scripts/reset-universe-chat.cjs#L11>)

Unresolved / external call sites: 32.

- fs.realpath — external-or-dynamic-dispatch; [electron/ai/backend-reset.cjs:67](<../../../../../../electron/ai/backend-reset.cjs#L67>)
- fs.realpath — external-or-dynamic-dispatch; [electron/ai/backend-reset.cjs:68](<../../../../../../electron/ai/backend-reset.cjs#L68>)
- profile.startsWith — external-or-dynamic-dispatch; [electron/ai/backend-reset.cjs:71](<../../../../../../electron/ai/backend-reset.cjs#L71>)
- vault.startsWith — external-or-dynamic-dispatch; [electron/ai/backend-reset.cjs:72](<../../../../../../electron/ai/backend-reset.cjs#L72>)
- Error — external-or-dynamic-dispatch; [electron/ai/backend-reset.cjs:74](<../../../../../../electron/ai/backend-reset.cjs#L74>)
- Promise.all — external-or-dynamic-dispatch; [electron/ai/backend-reset.cjs:81](<../../../../../../electron/ai/backend-reset.cjs#L81>)
- history.map — external-or-dynamic-dispatch; [electron/ai/backend-reset.cjs:82](<../../../../../../electron/ai/backend-reset.cjs#L82>)
- Promise.all — external-or-dynamic-dispatch; [electron/ai/backend-reset.cjs:89](<../../../../../../electron/ai/backend-reset.cjs#L89>)
- 24 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:167](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L167>) — static-call-site; coverage not established.
- [electron/ai/backend-audit.test.cjs:87](<../../../../../../electron/ai/backend-audit.test.cjs#L87>) — static-call-site; coverage not established.
- [electron/ai/backend-audit.test.cjs:99](<../../../../../../electron/ai/backend-audit.test.cjs#L99>) — static-call-site; coverage not established.
- [electron/ai/backend-audit.test.cjs:121](<../../../../../../electron/ai/backend-audit.test.cjs#L121>) — static-call-site; coverage not established.
- [electron/ai/backend-audit.test.cjs:132](<../../../../../../electron/ai/backend-audit.test.cjs#L132>) — static-call-site; coverage not established.
- [electron/ai/backend-audit.test.cjs:150](<../../../../../../electron/ai/backend-audit.test.cjs#L150>) — static-call-site; coverage not established.
- [electron/ai/backend-reset.test.cjs:104](<../../../../../../electron/ai/backend-reset.test.cjs#L104>) — static-call-site; coverage not established.
- [electron/ai/backend-reset.test.cjs:110](<../../../../../../electron/ai/backend-reset.test.cjs#L110>) — static-call-site; coverage not established.
- [electron/ai/backend-reset.test.cjs:131](<../../../../../../electron/ai/backend-reset.test.cjs#L131>) — static-call-site; coverage not established.
- [electron/ai/backend-reset.test.cjs:148](<../../../../../../electron/ai/backend-reset.test.cjs#L148>) — static-call-site; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:167](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L167>) — file-import-only; coverage not established.
- [electron/ai/backend-audit.test.cjs:10](<../../../../../../electron/ai/backend-audit.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/backend-reset.test.cjs:6](<../../../../../../electron/ai/backend-reset.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-6cc5479a97cee9c9"></a>

## resetBackend.&lt;anonymous@82:17&gt;

[electron/ai/backend-reset.cjs:82](<../../../../../../electron/ai/backend-reset.cjs#L82>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [resetBackend](<backend-reset.cjs.md#s-8923e8f07754093d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| relative | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [target](<backend-reset.cjs.md#s-95401917ec5cb0ce>) — [electron/ai/backend-reset.cjs:82](<../../../../../../electron/ai/backend-reset.cjs#L82>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:167](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L167>) — file-import-only; coverage not established.
- [electron/ai/backend-audit.test.cjs:10](<../../../../../../electron/ai/backend-audit.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/backend-reset.test.cjs:6](<../../../../../../electron/ai/backend-reset.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-a696be752b17d272"></a>

## resetBackend.&lt;anonymous@90:20&gt;

[electron/ai/backend-reset.cjs:90](<../../../../../../electron/ai/backend-reset.cjs#L90>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [resetBackend](<backend-reset.cjs.md#s-8923e8f07754093d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| relative | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [target](<backend-reset.cjs.md#s-95401917ec5cb0ce>) — [electron/ai/backend-reset.cjs:90](<../../../../../../electron/ai/backend-reset.cjs#L90>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:167](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L167>) — file-import-only; coverage not established.
- [electron/ai/backend-audit.test.cjs:10](<../../../../../../electron/ai/backend-audit.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/backend-reset.test.cjs:6](<../../../../../../electron/ai/backend-reset.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-337eda88e331f03f"></a>

## resetBackend.&lt;anonymous@144:9&gt;

[electron/ai/backend-reset.cjs:144](<../../../../../../electron/ai/backend-reset.cjs#L144>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [resetBackend](<backend-reset.cjs.md#s-8923e8f07754093d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| request | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:167](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L167>) — file-import-only; coverage not established.
- [electron/ai/backend-audit.test.cjs:10](<../../../../../../electron/ai/backend-audit.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/backend-reset.test.cjs:6](<../../../../../../electron/ai/backend-reset.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-132f47a8a0c39a26"></a>

## resetBackend.&lt;anonymous@157:7&gt;

[electron/ai/backend-reset.cjs:157](<../../../../../../electron/ai/backend-reset.cjs#L157>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [resetBackend](<backend-reset.cjs.md#s-8923e8f07754093d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| sum | any | compiler-inferred | required |
| item | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:167](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L167>) — file-import-only; coverage not established.
- [electron/ai/backend-audit.test.cjs:10](<../../../../../../electron/ai/backend-audit.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/backend-reset.test.cjs:6](<../../../../../../electron/ai/backend-reset.test.cjs#L6>) — file-import-only; coverage not established.
