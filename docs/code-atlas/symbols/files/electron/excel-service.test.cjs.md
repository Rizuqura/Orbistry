# electron/excel-service.test.cjs: symbols

[Atlas](<../../../README.md>) / [Built-in Engines and data adapters](<../../../modules/engines.md>) / [electron/excel-service.test.cjs:1](<../../../../../electron/excel-service.test.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/excel-service.test.cjs](<excel-service.test.cjs.md#s-6b17ae6fefcddcce>) (Module)
- [withUniverse](<excel-service.test.cjs.md#s-6b5e67b62cf4c0be>) (FunctionDeclaration)
- [&lt;anonymous@55:89&gt;](<excel-service.test.cjs.md#s-9fc1f4514fc208bd>) (ArrowFunction)
- [&lt;anonymous@55:89&gt;.&lt;anonymous@56:22&gt;](<excel-service.test.cjs.md#s-1ce2ad7c1e58b379>) (ArrowFunction)
- [&lt;anonymous@55:89&gt;.&lt;anonymous@56:22&gt;.execute](<excel-service.test.cjs.md#s-aa71f176d701d918>) (MethodDeclaration)
- [&lt;anonymous@141:67&gt;](<excel-service.test.cjs.md#s-131292fab7da298f>) (ArrowFunction)
- [&lt;anonymous@141:67&gt;.&lt;anonymous@142:22&gt;](<excel-service.test.cjs.md#s-88707e32ec13c432>) (ArrowFunction)
- [&lt;anonymous@141:67&gt;.&lt;anonymous@142:22&gt;.execute](<excel-service.test.cjs.md#s-5be5881aa4fdd6e8>) (MethodDeclaration)
- [&lt;anonymous@158:84&gt;](<excel-service.test.cjs.md#s-9998dea03cb244f9>) (ArrowFunction)
- [&lt;anonymous@158:84&gt;.&lt;anonymous@159:22&gt;](<excel-service.test.cjs.md#s-e13736c46b99f55b>) (ArrowFunction)
- [&lt;anonymous@158:84&gt;.&lt;anonymous@159:22&gt;.handle](<excel-service.test.cjs.md#s-e6a1d87e2a4eea2c>) (MethodDeclaration)
- [&lt;anonymous@158:84&gt;.&lt;anonymous@159:22&gt;.&lt;anonymous@169:7&gt;](<excel-service.test.cjs.md#s-1253ac570988d85a>) (ArrowFunction)
- [&lt;anonymous@158:84&gt;.&lt;anonymous@159:22&gt;.writeText](<excel-service.test.cjs.md#s-b17099cb023dbadb>) (MethodDeclaration)
- [&lt;anonymous@204:89&gt;](<excel-service.test.cjs.md#s-46453e0681a49231>) (ArrowFunction)
- [&lt;anonymous@204:89&gt;.&lt;anonymous@205:22&gt;](<excel-service.test.cjs.md#s-6ed995772b3bfb7d>) (ArrowFunction)
- [&lt;anonymous@204:89&gt;.&lt;anonymous@205:22&gt;.&lt;anonymous@221:38&gt;](<excel-service.test.cjs.md#s-5f3f000a4b9867f8>) (ArrowFunction)
- [&lt;anonymous@204:89&gt;.&lt;anonymous@205:22&gt;.handle](<excel-service.test.cjs.md#s-0675f6298399f134>) (MethodDeclaration)
- [&lt;anonymous@204:89&gt;.&lt;anonymous@205:22&gt;.&lt;anonymous@266:7&gt;](<excel-service.test.cjs.md#s-424ab7e16a8e0e24>) (ArrowFunction)
- [&lt;anonymous@204:89&gt;.&lt;anonymous@205:22&gt;.writeText](<excel-service.test.cjs.md#s-228edb2b64757936>) (MethodDeclaration)

<a id="s-6b17ae6fefcddcce"></a>

## electron/excel-service.test.cjs

[electron/excel-service.test.cjs:1](<../../../../../electron/excel-service.test.cjs#L1>) · Module · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 15.

- require — module-loader; [electron/excel-service.test.cjs:1](<../../../../../electron/excel-service.test.cjs#L1>)
- require — module-loader; [electron/excel-service.test.cjs:2](<../../../../../electron/excel-service.test.cjs#L2>)
- require — module-loader; [electron/excel-service.test.cjs:3](<../../../../../electron/excel-service.test.cjs#L3>)
- require — module-loader; [electron/excel-service.test.cjs:4](<../../../../../electron/excel-service.test.cjs#L4>)
- require — module-loader; [electron/excel-service.test.cjs:5](<../../../../../electron/excel-service.test.cjs#L5>)
- require — module-loader; [electron/excel-service.test.cjs:6](<../../../../../electron/excel-service.test.cjs#L6>)
- require — module-loader; [electron/excel-service.test.cjs:7](<../../../../../electron/excel-service.test.cjs#L7>)
- require — module-loader; [electron/excel-service.test.cjs:8](<../../../../../electron/excel-service.test.cjs#L8>)
- 7 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-6b5e67b62cf4c0be"></a>

## withUniverse

[electron/excel-service.test.cjs:21](<../../../../../electron/excel-service.test.cjs#L21>) · FunctionDeclaration · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Seeds assigned and applied synthetic workbooks in an isolated Universe, cleaning only the created temporary tree.

Purpose evidence: jsdoc.

Lexical owner: [electron/excel-service.test.cjs](<excel-service.test.cjs.md#s-6b17ae6fefcddcce>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| run | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [workbook](<../scripts/fixtures/excel.cjs.md#s-e5526a486067cf6f>) — [electron/excel-service.test.cjs:27](<../../../../../electron/excel-service.test.cjs#L27>)
- [workbook](<../scripts/fixtures/excel.cjs.md#s-e5526a486067cf6f>) — [electron/excel-service.test.cjs:28](<../../../../../electron/excel-service.test.cjs#L28>)
- [saveKnowledgeIndex](<domains/knowledge/knowledge-store.cjs.md#s-23c92923d2d74292>) — [electron/excel-service.test.cjs:40](<../../../../../electron/excel-service.test.cjs#L40>)

**Called by (statically resolved):**

- [&lt;anonymous@55:89&gt;](<excel-service.test.cjs.md#s-9fc1f4514fc208bd>) — [electron/excel-service.test.cjs:56](<../../../../../electron/excel-service.test.cjs#L56>)
- [&lt;anonymous@141:67&gt;](<excel-service.test.cjs.md#s-131292fab7da298f>) — [electron/excel-service.test.cjs:142](<../../../../../electron/excel-service.test.cjs#L142>)
- [&lt;anonymous@158:84&gt;](<excel-service.test.cjs.md#s-9998dea03cb244f9>) — [electron/excel-service.test.cjs:159](<../../../../../electron/excel-service.test.cjs#L159>)
- [&lt;anonymous@204:89&gt;](<excel-service.test.cjs.md#s-46453e0681a49231>) — [electron/excel-service.test.cjs:205](<../../../../../electron/excel-service.test.cjs#L205>)

Unresolved / external call sites: 13.

- fs.mkdtemp — external-or-dynamic-dispatch; [electron/excel-service.test.cjs:22](<../../../../../electron/excel-service.test.cjs#L22>)
- path.join — external-or-dynamic-dispatch; [electron/excel-service.test.cjs:23](<../../../../../electron/excel-service.test.cjs#L23>)
- os.tmpdir — external-or-dynamic-dispatch; [electron/excel-service.test.cjs:23](<../../../../../electron/excel-service.test.cjs#L23>)
- fs.mkdir — external-or-dynamic-dispatch; [electron/excel-service.test.cjs:26](<../../../../../electron/excel-service.test.cjs#L26>)
- path.join — external-or-dynamic-dispatch; [electron/excel-service.test.cjs:26](<../../../../../electron/excel-service.test.cjs#L26>)
- fs.writeFile — external-or-dynamic-dispatch; [electron/excel-service.test.cjs:27](<../../../../../electron/excel-service.test.cjs#L27>)
- path.join — external-or-dynamic-dispatch; [electron/excel-service.test.cjs:27](<../../../../../electron/excel-service.test.cjs#L27>)
- fs.writeFile — external-or-dynamic-dispatch; [electron/excel-service.test.cjs:28](<../../../../../electron/excel-service.test.cjs#L28>)
- 5 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/excel-service.test.cjs:56](<../../../../../electron/excel-service.test.cjs#L56>) — static-call-site; coverage not established.
- [electron/excel-service.test.cjs:142](<../../../../../electron/excel-service.test.cjs#L142>) — static-call-site; coverage not established.
- [electron/excel-service.test.cjs:159](<../../../../../electron/excel-service.test.cjs#L159>) — static-call-site; coverage not established.
- [electron/excel-service.test.cjs:205](<../../../../../electron/excel-service.test.cjs#L205>) — static-call-site; coverage not established.

<a id="s-9fc1f4514fc208bd"></a>

## &lt;anonymous@55:89&gt;

[electron/excel-service.test.cjs:55](<../../../../../electron/excel-service.test.cjs#L55>) · ArrowFunction · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/excel-service.test.cjs](<excel-service.test.cjs.md#s-6b17ae6fefcddcce>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [withUniverse](<excel-service.test.cjs.md#s-6b5e67b62cf4c0be>) — [electron/excel-service.test.cjs:56](<../../../../../electron/excel-service.test.cjs#L56>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-1ce2ad7c1e58b379"></a>

## &lt;anonymous@55:89&gt;.&lt;anonymous@56:22&gt;

[electron/excel-service.test.cjs:56](<../../../../../electron/excel-service.test.cjs#L56>) · ArrowFunction · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@55:89&gt;](<excel-service.test.cjs.md#s-9fc1f4514fc208bd>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [createExcelService](<excel-service.cjs.md#s-adfd4f07e6ae9eaf>) — [electron/excel-service.test.cjs:58](<../../../../../electron/excel-service.test.cjs#L58>)
- [previewKnowledgeSource](<domains/knowledge/knowledge-store.cjs.md#s-5b3b21e330d3d260>) — [electron/excel-service.test.cjs:75](<../../../../../electron/excel-service.test.cjs#L75>)
- [workbook](<../scripts/fixtures/excel.cjs.md#s-e5526a486067cf6f>) — [electron/excel-service.test.cjs:105](<../../../../../electron/excel-service.test.cjs#L105>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 36.

- service.request — signature-only-candidate; [electron/excel-service.test.cjs:65](<../../../../../electron/excel-service.test.cjs#L65>)
- assert.equal — external-or-dynamic-dispatch; [electron/excel-service.test.cjs:66](<../../../../../electron/excel-service.test.cjs#L66>)
- assert.equal — external-or-dynamic-dispatch; [electron/excel-service.test.cjs:67](<../../../../../electron/excel-service.test.cjs#L67>)
- assert.equal — external-or-dynamic-dispatch; [electron/excel-service.test.cjs:68](<../../../../../electron/excel-service.test.cjs#L68>)
- assert.equal — external-or-dynamic-dispatch; [electron/excel-service.test.cjs:69](<../../../../../electron/excel-service.test.cjs#L69>)
- service.request — signature-only-candidate; [electron/excel-service.test.cjs:70](<../../../../../electron/excel-service.test.cjs#L70>)
- assert.equal — external-or-dynamic-dispatch; [electron/excel-service.test.cjs:73](<../../../../../electron/excel-service.test.cjs#L73>)
- assert.equal — external-or-dynamic-dispatch; [electron/excel-service.test.cjs:74](<../../../../../electron/excel-service.test.cjs#L74>)
- 28 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-aa71f176d701d918"></a>

## &lt;anonymous@55:89&gt;.&lt;anonymous@56:22&gt;.execute

[electron/excel-service.test.cjs:60](<../../../../../electron/excel-service.test.cjs#L60>) · MethodDeclaration · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Counts trusted worker invocations to prove unchanged sources are not reparsed.

Purpose evidence: jsdoc.

Lexical owner: [&lt;anonymous@55:89&gt;.&lt;anonymous@56:22&gt;](<excel-service.test.cjs.md#s-1ce2ad7c1e58b379>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| args | &#91;engineId?: any, operation?: any, input?: any, options?: any&#93; | compiler-inferred | required, rest |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [executeNativeEngine](<engines/native.cjs.md#s-acb52912a7e235f5>) — [electron/excel-service.test.cjs:62](<../../../../../electron/excel-service.test.cjs#L62>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-131292fab7da298f"></a>

## &lt;anonymous@141:67&gt;

[electron/excel-service.test.cjs:141](<../../../../../electron/excel-service.test.cjs#L141>) · ArrowFunction · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/excel-service.test.cjs](<excel-service.test.cjs.md#s-6b17ae6fefcddcce>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [withUniverse](<excel-service.test.cjs.md#s-6b5e67b62cf4c0be>) — [electron/excel-service.test.cjs:142](<../../../../../electron/excel-service.test.cjs#L142>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-88707e32ec13c432"></a>

## &lt;anonymous@141:67&gt;.&lt;anonymous@142:22&gt;

[electron/excel-service.test.cjs:142](<../../../../../electron/excel-service.test.cjs#L142>) · ArrowFunction · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@141:67&gt;](<excel-service.test.cjs.md#s-131292fab7da298f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [createExcelService](<excel-service.cjs.md#s-adfd4f07e6ae9eaf>) — [electron/excel-service.test.cjs:143](<../../../../../electron/excel-service.test.cjs#L143>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- assert.rejects — external-or-dynamic-dispatch; [electron/excel-service.test.cjs:150](<../../../../../electron/excel-service.test.cjs#L150>)
- service.request — signature-only-candidate; [electron/excel-service.test.cjs:151](<../../../../../electron/excel-service.test.cjs#L151>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-5be5881aa4fdd6e8"></a>

## &lt;anonymous@141:67&gt;.&lt;anonymous@142:22&gt;.execute

[electron/excel-service.test.cjs:145](<../../../../../electron/excel-service.test.cjs#L145>) · MethodDeclaration · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Revokes the test association while the worker runs, reproducing a concurrent user action.

Purpose evidence: jsdoc.

Lexical owner: [&lt;anonymous@141:67&gt;.&lt;anonymous@142:22&gt;](<excel-service.test.cjs.md#s-88707e32ec13c432>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| args | &#91;engineId?: any, operation?: any, input?: any, options?: any&#93; | compiler-inferred | required, rest |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [executeNativeEngine](<engines/native.cjs.md#s-acb52912a7e235f5>) — [electron/excel-service.test.cjs:147](<../../../../../electron/excel-service.test.cjs#L147>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- unassignWorldViewFile — signature-only-candidate; [electron/excel-service.test.cjs:146](<../../../../../electron/excel-service.test.cjs#L146>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-9998dea03cb244f9"></a>

## &lt;anonymous@158:84&gt;

[electron/excel-service.test.cjs:158](<../../../../../electron/excel-service.test.cjs#L158>) · ArrowFunction · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/excel-service.test.cjs](<excel-service.test.cjs.md#s-6b17ae6fefcddcce>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [withUniverse](<excel-service.test.cjs.md#s-6b5e67b62cf4c0be>) — [electron/excel-service.test.cjs:159](<../../../../../electron/excel-service.test.cjs#L159>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-e13736c46b99f55b"></a>

## &lt;anonymous@158:84&gt;.&lt;anonymous@159:22&gt;

[electron/excel-service.test.cjs:159](<../../../../../electron/excel-service.test.cjs#L159>) · ArrowFunction · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@158:84&gt;](<excel-service.test.cjs.md#s-9998dea03cb244f9>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [registerWorldViewIpc](<core/ipc/worldview-ipc.cjs.md#s-a743a4d867b92345>) — [electron/excel-service.test.cjs:162](<../../../../../electron/excel-service.test.cjs#L162>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 13.

- Map — external-or-dynamic-dispatch; [electron/excel-service.test.cjs:160](<../../../../../electron/excel-service.test.cjs#L160>)
- handlers.get — external-or-dynamic-dispatch; [electron/excel-service.test.cjs:178](<../../../../../electron/excel-service.test.cjs#L178>)
- assert.equal — external-or-dynamic-dispatch; [electron/excel-service.test.cjs:187](<../../../../../electron/excel-service.test.cjs#L187>)
- copy — external-or-dynamic-dispatch; [electron/excel-service.test.cjs:187](<../../../../../electron/excel-service.test.cjs#L187>)
- assert.match — external-or-dynamic-dispatch; [electron/excel-service.test.cjs:188](<../../../../../electron/excel-service.test.cjs#L188>)
- assert.match — external-or-dynamic-dispatch; [electron/excel-service.test.cjs:189](<../../../../../electron/excel-service.test.cjs#L189>)
- assert.ok — external-or-dynamic-dispatch; [electron/excel-service.test.cjs:190](<../../../../../electron/excel-service.test.cjs#L190>)
- copies&#91;0&#93;.includes — external-or-dynamic-dispatch; [electron/excel-service.test.cjs:190](<../../../../../electron/excel-service.test.cjs#L190>)
- 5 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-e6a1d87e2a4eea2c"></a>

## &lt;anonymous@158:84&gt;.&lt;anonymous@159:22&gt;.handle

[electron/excel-service.test.cjs:165](<../../../../../electron/excel-service.test.cjs#L165>) · MethodDeclaration · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Captures handlers without launching Electron for a guarded boundary test.

Purpose evidence: jsdoc.

Lexical owner: [&lt;anonymous@158:84&gt;.&lt;anonymous@159:22&gt;](<excel-service.test.cjs.md#s-e13736c46b99f55b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| name | any | compiler-inferred | required |
| handler | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- handlers.set — external-or-dynamic-dispatch; [electron/excel-service.test.cjs:166](<../../../../../electron/excel-service.test.cjs#L166>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-1253ac570988d85a"></a>

## &lt;anonymous@158:84&gt;.&lt;anonymous@159:22&gt;.&lt;anonymous@169:7&gt;

[electron/excel-service.test.cjs:169](<../../../../../electron/excel-service.test.cjs#L169>) · ArrowFunction · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@158:84&gt;.&lt;anonymous@159:22&gt;](<excel-service.test.cjs.md#s-e13736c46b99f55b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-b17099cb023dbadb"></a>

## &lt;anonymous@158:84&gt;.&lt;anonymous@159:22&gt;.writeText

[electron/excel-service.test.cjs:173](<../../../../../electron/excel-service.test.cjs#L173>) · MethodDeclaration · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Records exactly the generated text the native clipboard would receive.

Purpose evidence: jsdoc.

Lexical owner: [&lt;anonymous@158:84&gt;.&lt;anonymous@159:22&gt;](<excel-service.test.cjs.md#s-e13736c46b99f55b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| text | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- copies.push — external-or-dynamic-dispatch; [electron/excel-service.test.cjs:174](<../../../../../electron/excel-service.test.cjs#L174>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-46453e0681a49231"></a>

## &lt;anonymous@204:89&gt;

[electron/excel-service.test.cjs:204](<../../../../../electron/excel-service.test.cjs#L204>) · ArrowFunction · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/excel-service.test.cjs](<excel-service.test.cjs.md#s-6b17ae6fefcddcce>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [withUniverse](<excel-service.test.cjs.md#s-6b5e67b62cf4c0be>) — [electron/excel-service.test.cjs:205](<../../../../../electron/excel-service.test.cjs#L205>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-6ed995772b3bfb7d"></a>

## &lt;anonymous@204:89&gt;.&lt;anonymous@205:22&gt;

[electron/excel-service.test.cjs:205](<../../../../../electron/excel-service.test.cjs#L205>) · ArrowFunction · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@204:89&gt;](<excel-service.test.cjs.md#s-46453e0681a49231>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [workbook](<../scripts/fixtures/excel.cjs.md#s-e5526a486067cf6f>) — [electron/excel-service.test.cjs:207](<../../../../../electron/excel-service.test.cjs#L207>)
- [createExcelService](<excel-service.cjs.md#s-adfd4f07e6ae9eaf>) — [electron/excel-service.test.cjs:218](<../../../../../electron/excel-service.test.cjs#L218>)
- [registerWorldViewIpc](<core/ipc/worldview-ipc.cjs.md#s-a743a4d867b92345>) — [electron/excel-service.test.cjs:259](<../../../../../electron/excel-service.test.cjs#L259>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 25.

- fs.writeFile — external-or-dynamic-dispatch; [electron/excel-service.test.cjs:217](<../../../../../electron/excel-service.test.cjs#L217>)
- path.join — external-or-dynamic-dispatch; [electron/excel-service.test.cjs:217](<../../../../../electron/excel-service.test.cjs#L217>)
- service.request — signature-only-candidate; [electron/excel-service.test.cjs:219](<../../../../../electron/excel-service.test.cjs#L219>)
- assert.deepEqual — external-or-dynamic-dispatch; [electron/excel-service.test.cjs:220](<../../../../../electron/excel-service.test.cjs#L220>)
- preview.page.rows&#91;0&#93;.cells.map — external-or-dynamic-dispatch; [electron/excel-service.test.cjs:221](<../../../../../electron/excel-service.test.cjs#L221>)
- assert.equal — external-or-dynamic-dispatch; [electron/excel-service.test.cjs:232](<../../../../../electron/excel-service.test.cjs#L232>)
- assert.doesNotMatch — external-or-dynamic-dispatch; [electron/excel-service.test.cjs:233](<../../../../../electron/excel-service.test.cjs#L233>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/excel-service.test.cjs:234](<../../../../../electron/excel-service.test.cjs#L234>)
- 17 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-5f3f000a4b9867f8"></a>

## &lt;anonymous@204:89&gt;.&lt;anonymous@205:22&gt;.&lt;anonymous@221:38&gt;

[electron/excel-service.test.cjs:221](<../../../../../electron/excel-service.test.cjs#L221>) · ArrowFunction · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@204:89&gt;.&lt;anonymous@205:22&gt;](<excel-service.test.cjs.md#s-6ed995772b3bfb7d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| cell | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-0675f6298399f134"></a>

## &lt;anonymous@204:89&gt;.&lt;anonymous@205:22&gt;.handle

[electron/excel-service.test.cjs:262](<../../../../../electron/excel-service.test.cjs#L262>) · MethodDeclaration · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Captures native operations for the synthetic clipboard regression.

Purpose evidence: jsdoc.

Lexical owner: [&lt;anonymous@204:89&gt;.&lt;anonymous@205:22&gt;](<excel-service.test.cjs.md#s-6ed995772b3bfb7d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| name | any | compiler-inferred | required |
| handler | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- handlers.set — external-or-dynamic-dispatch; [electron/excel-service.test.cjs:263](<../../../../../electron/excel-service.test.cjs#L263>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-424ab7e16a8e0e24"></a>

## &lt;anonymous@204:89&gt;.&lt;anonymous@205:22&gt;.&lt;anonymous@266:7&gt;

[electron/excel-service.test.cjs:266](<../../../../../electron/excel-service.test.cjs#L266>) · ArrowFunction · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@204:89&gt;.&lt;anonymous@205:22&gt;](<excel-service.test.cjs.md#s-6ed995772b3bfb7d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-228edb2b64757936"></a>

## &lt;anonymous@204:89&gt;.&lt;anonymous@205:22&gt;.writeText

[electron/excel-service.test.cjs:270](<../../../../../electron/excel-service.test.cjs#L270>) · MethodDeclaration · test · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Captures the actual generated final-text Markdown payload.

Purpose evidence: jsdoc.

Lexical owner: [&lt;anonymous@204:89&gt;.&lt;anonymous@205:22&gt;](<excel-service.test.cjs.md#s-6ed995772b3bfb7d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| text | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- copies.push — external-or-dynamic-dispatch; [electron/excel-service.test.cjs:271](<../../../../../electron/excel-service.test.cjs#L271>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
