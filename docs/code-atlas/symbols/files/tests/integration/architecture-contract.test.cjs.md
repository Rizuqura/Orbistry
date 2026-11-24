# tests/integration/architecture-contract.test.cjs: symbols

[Atlas](<../../../../README.md>) / [Development and acceptance tooling](<../../../../modules/tooling.md>) / [tests/integration/architecture-contract.test.cjs:1](<../../../../../../tests/integration/architecture-contract.test.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [tests/integration/architecture-contract.test.cjs](<architecture-contract.test.cjs.md#s-a2aed19de4f3ba5b>) (Module)
- [&lt;anonymous@14:86&gt;](<architecture-contract.test.cjs.md#s-60ca4347c543e0cd>) (ArrowFunction)
- [&lt;anonymous@14:86&gt;.&lt;anonymous@20:24&gt;](<architecture-contract.test.cjs.md#s-5aa75b69a78034a9>) (ArrowFunction)
- [&lt;anonymous@30:95&gt;](<architecture-contract.test.cjs.md#s-3ad79f1d179a4db2>) (ArrowFunction)
- [&lt;anonymous@30:95&gt;.&lt;anonymous@34:11&gt;](<architecture-contract.test.cjs.md#s-ea211370c30a9fa7>) (ArrowFunction)
- [&lt;anonymous@30:95&gt;.&lt;anonymous@51:23&gt;](<architecture-contract.test.cjs.md#s-10a8c54d90a46b1b>) (ArrowFunction)
- [&lt;anonymous@30:95&gt;.&lt;anonymous@68:7&gt;](<architecture-contract.test.cjs.md#s-9f81ac982ccbdd3d>) (ArrowFunction)
- [&lt;anonymous@30:95&gt;.&lt;anonymous@75:7&gt;](<architecture-contract.test.cjs.md#s-ec073bfb65c9d3aa>) (ArrowFunction)
- [&lt;anonymous@81:84&gt;](<architecture-contract.test.cjs.md#s-74a1e39944bdcee9>) (ArrowFunction)
- [&lt;anonymous@90:100&gt;](<architecture-contract.test.cjs.md#s-e044f3f9f8c446da>) (ArrowFunction)
- [&lt;anonymous@108:96&gt;](<architecture-contract.test.cjs.md#s-935f5f830abc451f>) (ArrowFunction)
- [&lt;anonymous@108:96&gt;.coreOnly](<architecture-contract.test.cjs.md#s-4bc8fbf2436627df>) (FunctionDeclaration)
- [&lt;anonymous@108:96&gt;.coreOnly.&lt;anonymous@113:20&gt;](<architecture-contract.test.cjs.md#s-0ea5603f9e1f32a7>) (FunctionExpression)
- [&lt;anonymous@108:96&gt;.coreOnly.&lt;anonymous@123:24&gt;](<architecture-contract.test.cjs.md#s-59b079334d374ab0>) (ArrowFunction)
- [&lt;anonymous@108:96&gt;.coreOnly.authorize](<architecture-contract.test.cjs.md#s-a38b50ae8338526a>) (ArrowFunction)
- [&lt;anonymous@214:92&gt;](<architecture-contract.test.cjs.md#s-be4d714c32a1b9a9>) (ArrowFunction)

<a id="s-a2aed19de4f3ba5b"></a>

## tests/integration/architecture-contract.test.cjs

[tests/integration/architecture-contract.test.cjs:1](<../../../../../../tests/integration/architecture-contract.test.cjs#L1>) · Module · test · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 14.

- require — module-loader; [tests/integration/architecture-contract.test.cjs:1](<../../../../../../tests/integration/architecture-contract.test.cjs#L1>)
- require — module-loader; [tests/integration/architecture-contract.test.cjs:2](<../../../../../../tests/integration/architecture-contract.test.cjs#L2>)
- require — module-loader; [tests/integration/architecture-contract.test.cjs:3](<../../../../../../tests/integration/architecture-contract.test.cjs#L3>)
- require — module-loader; [tests/integration/architecture-contract.test.cjs:4](<../../../../../../tests/integration/architecture-contract.test.cjs#L4>)
- require — module-loader; [tests/integration/architecture-contract.test.cjs:5](<../../../../../../tests/integration/architecture-contract.test.cjs#L5>)
- require — module-loader; [tests/integration/architecture-contract.test.cjs:6](<../../../../../../tests/integration/architecture-contract.test.cjs#L6>)
- require — module-loader; [tests/integration/architecture-contract.test.cjs:7](<../../../../../../tests/integration/architecture-contract.test.cjs#L7>)
- require — module-loader; [tests/integration/architecture-contract.test.cjs:12](<../../../../../../tests/integration/architecture-contract.test.cjs#L12>)
- 6 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-60ca4347c543e0cd"></a>

## &lt;anonymous@14:86&gt;

[tests/integration/architecture-contract.test.cjs:14](<../../../../../../tests/integration/architecture-contract.test.cjs#L14>) · ArrowFunction · test · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [tests/integration/architecture-contract.test.cjs](<architecture-contract.test.cjs.md#s-a2aed19de4f3ba5b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [runtimeImports](<../../scripts/audit/audit-architecture.cjs.md#s-f03ed73432be48ab>) — [tests/integration/architecture-contract.test.cjs:15](<../../../../../../tests/integration/architecture-contract.test.cjs#L15>)
- [dependencyCycles](<../../scripts/audit/audit-architecture.cjs.md#s-519c7982a25643d8>) — [tests/integration/architecture-contract.test.cjs:27](<../../../../../../tests/integration/architecture-contract.test.cjs#L27>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- assert.deepEqual — external-or-dynamic-dispatch; [tests/integration/architecture-contract.test.cjs:19](<../../../../../../tests/integration/architecture-contract.test.cjs#L19>)
- result.imports.map — external-or-dynamic-dispatch; [tests/integration/architecture-contract.test.cjs:20](<../../../../../../tests/integration/architecture-contract.test.cjs#L20>)
- Map — external-or-dynamic-dispatch; [tests/integration/architecture-contract.test.cjs:23](<../../../../../../tests/integration/architecture-contract.test.cjs#L23>)
- assert.deepEqual — external-or-dynamic-dispatch; [tests/integration/architecture-contract.test.cjs:27](<../../../../../../tests/integration/architecture-contract.test.cjs#L27>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-5aa75b69a78034a9"></a>

## &lt;anonymous@14:86&gt;.&lt;anonymous@20:24&gt;

[tests/integration/architecture-contract.test.cjs:20](<../../../../../../tests/integration/architecture-contract.test.cjs#L20>) · ArrowFunction · test · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@14:86&gt;](<architecture-contract.test.cjs.md#s-60ca4347c543e0cd>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| item | any | compiler-inferred | required |

Returns: {} (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-3ad79f1d179a4db2"></a>

## &lt;anonymous@30:95&gt;

[tests/integration/architecture-contract.test.cjs:30](<../../../../../../tests/integration/architecture-contract.test.cjs#L30>) · ArrowFunction · test · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [tests/integration/architecture-contract.test.cjs](<architecture-contract.test.cjs.md#s-a2aed19de4f3ba5b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| t | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [auditArchitecture](<../../scripts/audit/audit-architecture.cjs.md#s-b92801371032ffaa>) — [tests/integration/architecture-contract.test.cjs:50](<../../../../../../tests/integration/architecture-contract.test.cjs#L50>)
- [auditArchitecture](<../../scripts/audit/audit-architecture.cjs.md#s-b92801371032ffaa>) — [tests/integration/architecture-contract.test.cjs:67](<../../../../../../tests/integration/architecture-contract.test.cjs#L67>)
- [auditArchitecture](<../../scripts/audit/audit-architecture.cjs.md#s-b92801371032ffaa>) — [tests/integration/architecture-contract.test.cjs:74](<../../../../../../tests/integration/architecture-contract.test.cjs#L74>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 28.

- fs.mkdtemp — external-or-dynamic-dispatch; [tests/integration/architecture-contract.test.cjs:31](<../../../../../../tests/integration/architecture-contract.test.cjs#L31>)
- path.join — external-or-dynamic-dispatch; [tests/integration/architecture-contract.test.cjs:32](<../../../../../../tests/integration/architecture-contract.test.cjs#L32>)
- os.tmpdir — external-or-dynamic-dispatch; [tests/integration/architecture-contract.test.cjs:32](<../../../../../../tests/integration/architecture-contract.test.cjs#L32>)
- t.after — external-or-dynamic-dispatch; [tests/integration/architecture-contract.test.cjs:34](<../../../../../../tests/integration/architecture-contract.test.cjs#L34>)
- Object.entries — external-or-dynamic-dispatch; [tests/integration/architecture-contract.test.cjs:45](<../../../../../../tests/integration/architecture-contract.test.cjs#L45>)
- fs.mkdir — external-or-dynamic-dispatch; [tests/integration/architecture-contract.test.cjs:46](<../../../../../../tests/integration/architecture-contract.test.cjs#L46>)
- path.dirname — external-or-dynamic-dispatch; [tests/integration/architecture-contract.test.cjs:46](<../../../../../../tests/integration/architecture-contract.test.cjs#L46>)
- path.join — external-or-dynamic-dispatch; [tests/integration/architecture-contract.test.cjs:46](<../../../../../../tests/integration/architecture-contract.test.cjs#L46>)
- 20 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-ea211370c30a9fa7"></a>

## &lt;anonymous@30:95&gt;.&lt;anonymous@34:11&gt;

[tests/integration/architecture-contract.test.cjs:34](<../../../../../../tests/integration/architecture-contract.test.cjs#L34>) · ArrowFunction · test · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@30:95&gt;](<architecture-contract.test.cjs.md#s-3ad79f1d179a4db2>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 6.

- assert.ok — external-or-dynamic-dispatch; [tests/integration/architecture-contract.test.cjs:35](<../../../../../../tests/integration/architecture-contract.test.cjs#L35>)
- path.resolve(root).startsWith — external-or-dynamic-dispatch; [tests/integration/architecture-contract.test.cjs:36](<../../../../../../tests/integration/architecture-contract.test.cjs#L36>)
- path.resolve — external-or-dynamic-dispatch; [tests/integration/architecture-contract.test.cjs:36](<../../../../../../tests/integration/architecture-contract.test.cjs#L36>)
- path.resolve — external-or-dynamic-dispatch; [tests/integration/architecture-contract.test.cjs:36](<../../../../../../tests/integration/architecture-contract.test.cjs#L36>)
- os.tmpdir — external-or-dynamic-dispatch; [tests/integration/architecture-contract.test.cjs:36](<../../../../../../tests/integration/architecture-contract.test.cjs#L36>)
- fs.rm — external-or-dynamic-dispatch; [tests/integration/architecture-contract.test.cjs:38](<../../../../../../tests/integration/architecture-contract.test.cjs#L38>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-10a8c54d90a46b1b"></a>

## &lt;anonymous@30:95&gt;.&lt;anonymous@51:23&gt;

[tests/integration/architecture-contract.test.cjs:51](<../../../../../../tests/integration/architecture-contract.test.cjs#L51>) · ArrowFunction · test · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@30:95&gt;](<architecture-contract.test.cjs.md#s-3ad79f1d179a4db2>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| item | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-9f81ac982ccbdd3d"></a>

## &lt;anonymous@30:95&gt;.&lt;anonymous@68:7&gt;

[tests/integration/architecture-contract.test.cjs:68](<../../../../../../tests/integration/architecture-contract.test.cjs#L68>) · ArrowFunction · test · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@30:95&gt;](<architecture-contract.test.cjs.md#s-3ad79f1d179a4db2>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| item | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-ec073bfb65c9d3aa"></a>

## &lt;anonymous@30:95&gt;.&lt;anonymous@75:7&gt;

[tests/integration/architecture-contract.test.cjs:75](<../../../../../../tests/integration/architecture-contract.test.cjs#L75>) · ArrowFunction · test · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@30:95&gt;](<architecture-contract.test.cjs.md#s-3ad79f1d179a4db2>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| item | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-74a1e39944bdcee9"></a>

## &lt;anonymous@81:84&gt;

[tests/integration/architecture-contract.test.cjs:81](<../../../../../../tests/integration/architecture-contract.test.cjs#L81>) · ArrowFunction · test · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [tests/integration/architecture-contract.test.cjs](<architecture-contract.test.cjs.md#s-a2aed19de4f3ba5b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [auditArchitecture](<../../scripts/audit/audit-architecture.cjs.md#s-b92801371032ffaa>) — [tests/integration/architecture-contract.test.cjs:82](<../../../../../../tests/integration/architecture-contract.test.cjs#L82>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- assert.deepEqual — external-or-dynamic-dispatch; [tests/integration/architecture-contract.test.cjs:83](<../../../../../../tests/integration/architecture-contract.test.cjs#L83>)
- assert.deepEqual — external-or-dynamic-dispatch; [tests/integration/architecture-contract.test.cjs:84](<../../../../../../tests/integration/architecture-contract.test.cjs#L84>)
- assert.deepEqual — external-or-dynamic-dispatch; [tests/integration/architecture-contract.test.cjs:85](<../../../../../../tests/integration/architecture-contract.test.cjs#L85>)
- assert.deepEqual — external-or-dynamic-dispatch; [tests/integration/architecture-contract.test.cjs:86](<../../../../../../tests/integration/architecture-contract.test.cjs#L86>)
- assert.deepEqual — external-or-dynamic-dispatch; [tests/integration/architecture-contract.test.cjs:87](<../../../../../../tests/integration/architecture-contract.test.cjs#L87>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-e044f3f9f8c446da"></a>

## &lt;anonymous@90:100&gt;

[tests/integration/architecture-contract.test.cjs:90](<../../../../../../tests/integration/architecture-contract.test.cjs#L90>) · ArrowFunction · test · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [tests/integration/architecture-contract.test.cjs](<architecture-contract.test.cjs.md#s-a2aed19de4f3ba5b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [executeNativeEngine](<../../electron/engines/native.cjs.md#s-acb52912a7e235f5>) — [tests/integration/architecture-contract.test.cjs:97](<../../../../../../tests/integration/architecture-contract.test.cjs#L97>)
- [executeNativeEngine](<../../electron/engines/native.cjs.md#s-acb52912a7e235f5>) — [tests/integration/architecture-contract.test.cjs:101](<../../../../../../tests/integration/architecture-contract.test.cjs#L101>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- require — module-loader; [tests/integration/architecture-contract.test.cjs:91](<../../../../../../tests/integration/architecture-contract.test.cjs#L91>)
- assert.equal — external-or-dynamic-dispatch; [tests/integration/architecture-contract.test.cjs:92](<../../../../../../tests/integration/architecture-contract.test.cjs#L92>)
- require — module-loader; [tests/integration/architecture-contract.test.cjs:93](<../../../../../../tests/integration/architecture-contract.test.cjs#L93>)
- assert.rejects — external-or-dynamic-dispatch; [tests/integration/architecture-contract.test.cjs:96](<../../../../../../tests/integration/architecture-contract.test.cjs#L96>)
- assert.rejects — external-or-dynamic-dispatch; [tests/integration/architecture-contract.test.cjs:100](<../../../../../../tests/integration/architecture-contract.test.cjs#L100>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-935f5f830abc451f"></a>

## &lt;anonymous@108:96&gt;

[tests/integration/architecture-contract.test.cjs:108](<../../../../../../tests/integration/architecture-contract.test.cjs#L108>) · ArrowFunction · test · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [tests/integration/architecture-contract.test.cjs](<architecture-contract.test.cjs.md#s-a2aed19de4f3ba5b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 6.

- promisify(execFile) — external-or-dynamic-dispatch; [tests/integration/architecture-contract.test.cjs:194](<../../../../../../tests/integration/architecture-contract.test.cjs#L194>)
- promisify — external-or-dynamic-dispatch; [tests/integration/architecture-contract.test.cjs:194](<../../../../../../tests/integration/architecture-contract.test.cjs#L194>)
- coreOnly.toString — external-or-dynamic-dispatch; [tests/integration/architecture-contract.test.cjs:199](<../../../../../../tests/integration/architecture-contract.test.cjs#L199>)
- path.resolve — external-or-dynamic-dispatch; [tests/integration/architecture-contract.test.cjs:203](<../../../../../../tests/integration/architecture-contract.test.cjs#L203>)
- assert.deepEqual — external-or-dynamic-dispatch; [tests/integration/architecture-contract.test.cjs:208](<../../../../../../tests/integration/architecture-contract.test.cjs#L208>)
- JSON.parse — external-or-dynamic-dispatch; [tests/integration/architecture-contract.test.cjs:208](<../../../../../../tests/integration/architecture-contract.test.cjs#L208>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-4bc8fbf2436627df"></a>

## &lt;anonymous@108:96&gt;.coreOnly

[tests/integration/architecture-contract.test.cjs:110](<../../../../../../tests/integration/architecture-contract.test.cjs#L110>) · FunctionDeclaration · test · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Runs real local stores/compiler in a fresh process; denies AI entry points and all fetch requests before loading core modules.

Purpose evidence: jsdoc.

Lexical owner: [&lt;anonymous@108:96&gt;](<architecture-contract.test.cjs.md#s-935f5f830abc451f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 38.

- require — module-loader; [tests/integration/architecture-contract.test.cjs:111](<../../../../../../tests/integration/architecture-contract.test.cjs#L111>)
- require — module-loader; [tests/integration/architecture-contract.test.cjs:126](<../../../../../../tests/integration/architecture-contract.test.cjs#L126>)
- require — module-loader; [tests/integration/architecture-contract.test.cjs:127](<../../../../../../tests/integration/architecture-contract.test.cjs#L127>)
- require — module-loader; [tests/integration/architecture-contract.test.cjs:128](<../../../../../../tests/integration/architecture-contract.test.cjs#L128>)
- require — module-loader; [tests/integration/architecture-contract.test.cjs:129](<../../../../../../tests/integration/architecture-contract.test.cjs#L129>)
- fs.mkdtemp — external-or-dynamic-dispatch; [tests/integration/architecture-contract.test.cjs:130](<../../../../../../tests/integration/architecture-contract.test.cjs#L130>)
- path.join — external-or-dynamic-dispatch; [tests/integration/architecture-contract.test.cjs:131](<../../../../../../tests/integration/architecture-contract.test.cjs#L131>)
- os.tmpdir — external-or-dynamic-dispatch; [tests/integration/architecture-contract.test.cjs:131](<../../../../../../tests/integration/architecture-contract.test.cjs#L131>)
- 30 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-0ea5603f9e1f32a7"></a>

## &lt;anonymous@108:96&gt;.coreOnly.&lt;anonymous@113:20&gt;

[tests/integration/architecture-contract.test.cjs:113](<../../../../../../tests/integration/architecture-contract.test.cjs#L113>) · FunctionExpression · test · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@108:96&gt;.coreOnly](<architecture-contract.test.cjs.md#s-4bc8fbf2436627df>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| request | any | compiler-inferred | required |
| parent | any | compiler-inferred | required |
| main | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- Module._resolveFilename( request, parent, main, ).replaceAll — external-or-dynamic-dispatch; [tests/integration/architecture-contract.test.cjs:114](<../../../../../../tests/integration/architecture-contract.test.cjs#L114>)
- Module._resolveFilename — external-or-dynamic-dispatch; [tests/integration/architecture-contract.test.cjs:114](<../../../../../../tests/integration/architecture-contract.test.cjs#L114>)
- resolved.split — external-or-dynamic-dispatch; [tests/integration/architecture-contract.test.cjs:119](<../../../../../../tests/integration/architecture-contract.test.cjs#L119>)
- Error — external-or-dynamic-dispatch; [tests/integration/architecture-contract.test.cjs:120](<../../../../../../tests/integration/architecture-contract.test.cjs#L120>)
- original.apply — external-or-dynamic-dispatch; [tests/integration/architecture-contract.test.cjs:121](<../../../../../../tests/integration/architecture-contract.test.cjs#L121>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-59b079334d374ab0"></a>

## &lt;anonymous@108:96&gt;.coreOnly.&lt;anonymous@123:24&gt;

[tests/integration/architecture-contract.test.cjs:123](<../../../../../../tests/integration/architecture-contract.test.cjs#L123>) · ArrowFunction · test · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@108:96&gt;.coreOnly](<architecture-contract.test.cjs.md#s-4bc8fbf2436627df>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- Error — external-or-dynamic-dispatch; [tests/integration/architecture-contract.test.cjs:124](<../../../../../../tests/integration/architecture-contract.test.cjs#L124>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-a38b50ae8338526a"></a>

## &lt;anonymous@108:96&gt;.coreOnly.authorize

[tests/integration/architecture-contract.test.cjs:167](<../../../../../../tests/integration/architecture-contract.test.cjs#L167>) · ArrowFunction · test · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@108:96&gt;.coreOnly](<architecture-contract.test.cjs.md#s-4bc8fbf2436627df>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { entityId, permission } | { entityId: any; permission: any; } | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- &#91;"entity:read", "knowledge:read", "identity:compile"&#93;.includes — external-or-dynamic-dispatch; [tests/integration/architecture-contract.test.cjs:169](<../../../../../../tests/integration/architecture-contract.test.cjs#L169>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-be4d714c32a1b9a9"></a>

## &lt;anonymous@214:92&gt;

[tests/integration/architecture-contract.test.cjs:214](<../../../../../../tests/integration/architecture-contract.test.cjs#L214>) · ArrowFunction · test · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [tests/integration/architecture-contract.test.cjs](<architecture-contract.test.cjs.md#s-a2aed19de4f3ba5b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 18.

- assert.equal — external-or-dynamic-dispatch; [tests/integration/architecture-contract.test.cjs:215](<../../../../../../tests/integration/architecture-contract.test.cjs#L215>)
- require — module-loader; [tests/integration/architecture-contract.test.cjs:216](<../../../../../../tests/integration/architecture-contract.test.cjs#L216>)
- require — module-loader; [tests/integration/architecture-contract.test.cjs:217](<../../../../../../tests/integration/architecture-contract.test.cjs#L217>)
- assert.equal — external-or-dynamic-dispatch; [tests/integration/architecture-contract.test.cjs:219](<../../../../../../tests/integration/architecture-contract.test.cjs#L219>)
- require — module-loader; [tests/integration/architecture-contract.test.cjs:220](<../../../../../../tests/integration/architecture-contract.test.cjs#L220>)
- require — module-loader; [tests/integration/architecture-contract.test.cjs:221](<../../../../../../tests/integration/architecture-contract.test.cjs#L221>)
- assert.equal — external-or-dynamic-dispatch; [tests/integration/architecture-contract.test.cjs:223](<../../../../../../tests/integration/architecture-contract.test.cjs#L223>)
- require — module-loader; [tests/integration/architecture-contract.test.cjs:224](<../../../../../../tests/integration/architecture-contract.test.cjs#L224>)
- 10 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
