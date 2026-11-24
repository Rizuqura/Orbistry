# scripts/audit/audit-architecture.cjs: symbols

[Atlas](<../../../../README.md>) / [Development and acceptance tooling](<../../../../modules/tooling.md>) / [scripts/audit/audit-architecture.cjs:1](<../../../../../../scripts/audit/audit-architecture.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/audit/audit-architecture.cjs](<audit-architecture.cjs.md#s-8d208d6c3e26edc9>) (Module)
- [&lt;anonymous@8:22&gt;](<audit-architecture.cjs.md#s-3aa0f0431d428224>) (ArrowFunction)
- [resolveLocal](<audit-architecture.cjs.md#s-089dbd5781a3ff2b>) (FunctionDeclaration)
- [runtimeImports](<audit-architecture.cjs.md#s-f03ed73432be48ab>) (FunctionDeclaration)
- [runtimeImports.visit](<audit-architecture.cjs.md#s-db7a3782c337b296>) (FunctionDeclaration)
- [runtimeImports.visit.&lt;anonymous@67:32&gt;](<audit-architecture.cjs.md#s-6f3af1f6f5709e1d>) (ArrowFunction)
- [runtimeImports.visit.&lt;anonymous@75:30&gt;](<audit-architecture.cjs.md#s-307a8c2f865ece21>) (ArrowFunction)
- [runtimeImports.visit.&lt;anonymous@95:27&gt;](<audit-architecture.cjs.md#s-576305e86b3b433c>) (ArrowFunction)
- [dependencyCycles](<audit-architecture.cjs.md#s-519c7982a25643d8>) (FunctionDeclaration)
- [dependencyCycles.visit](<audit-architecture.cjs.md#s-7c7cb3492030db2e>) (FunctionDeclaration)
- [dependencyCycles.visit.&lt;anonymous@135:36&gt;](<audit-architecture.cjs.md#s-9c94da563b22f813>) (ArrowFunction)
- [dependencyCycles.visit.&lt;anonymous@140:32&gt;](<audit-architecture.cjs.md#s-741619bb1ba3e4cf>) (ArrowFunction)
- [dependencyCycles.visit.&lt;anonymous@140:32&gt;.&lt;anonymous@142:21&gt;](<audit-architecture.cjs.md#s-fda76506113913b5>) (ArrowFunction)
- [dependencyCycles.visit.&lt;anonymous@140:32&gt;.&lt;anonymous@143:18&gt;](<audit-architecture.cjs.md#s-3f1fdbe38b50a157>) (ArrowFunction)
- [dependencyCycles.&lt;anonymous@149:22&gt;](<audit-architecture.cjs.md#s-b8889c99e7e70a8e>) (ArrowFunction)
- [auditArchitecture](<audit-architecture.cjs.md#s-b92801371032ffaa>) (FunctionDeclaration)
- [auditArchitecture.&lt;anonymous@166:10&gt;](<audit-architecture.cjs.md#s-fa851ca6b502e16e>) (ArrowFunction)
- [auditArchitecture.&lt;anonymous@168:7&gt;](<audit-architecture.cjs.md#s-346dbcfaddd28935>) (ArrowFunction)

<a id="s-8d208d6c3e26edc9"></a>

## scripts/audit/audit-architecture.cjs

[scripts/audit/audit-architecture.cjs:1](<../../../../../../scripts/audit/audit-architecture.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

- [auditArchitecture](<audit-architecture.cjs.md#s-b92801371032ffaa>) — [scripts/audit/audit-architecture.cjs:249](<../../../../../../scripts/audit/audit-architecture.cjs#L249>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 11.

- require — module-loader; [scripts/audit/audit-architecture.cjs:1](<../../../../../../scripts/audit/audit-architecture.cjs#L1>)
- require — module-loader; [scripts/audit/audit-architecture.cjs:2](<../../../../../../scripts/audit/audit-architecture.cjs#L2>)
- require — module-loader; [scripts/audit/audit-architecture.cjs:3](<../../../../../../scripts/audit/audit-architecture.cjs#L3>)
- require — module-loader; [scripts/audit/audit-architecture.cjs:4](<../../../../../../scripts/audit/audit-architecture.cjs#L4>)
- require — module-loader; [scripts/audit/audit-architecture.cjs:5](<../../../../../../scripts/audit/audit-architecture.cjs#L5>)
- require — module-loader; [scripts/audit/audit-architecture.cjs:6](<../../../../../../scripts/audit/audit-architecture.cjs#L6>)
- Set — external-or-dynamic-dispatch; [scripts/audit/audit-architecture.cjs:7](<../../../../../../scripts/audit/audit-architecture.cjs#L7>)
- builtinModules.map — external-or-dynamic-dispatch; [scripts/audit/audit-architecture.cjs:8](<../../../../../../scripts/audit/audit-architecture.cjs#L8>)
- 3 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [tests/integration/architecture-contract.test.cjs:12](<../../../../../../tests/integration/architecture-contract.test.cjs#L12>) — file-import-only; coverage not established.

<a id="s-3aa0f0431d428224"></a>

## &lt;anonymous@8:22&gt;

[scripts/audit/audit-architecture.cjs:8](<../../../../../../scripts/audit/audit-architecture.cjs#L8>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/audit/audit-architecture.cjs](<audit-architecture.cjs.md#s-8d208d6c3e26edc9>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| name | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- name.replace — external-or-dynamic-dispatch; [scripts/audit/audit-architecture.cjs:8](<../../../../../../scripts/audit/audit-architecture.cjs#L8>)

**Related tests / acceptance harnesses:**

- [tests/integration/architecture-contract.test.cjs:12](<../../../../../../tests/integration/architecture-contract.test.cjs#L12>) — file-import-only; coverage not established.

<a id="s-089dbd5781a3ff2b"></a>

## resolveLocal

[scripts/audit/audit-architecture.cjs:15](<../../../../../../scripts/audit/audit-architecture.cjs#L15>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Resolves literal local imports against source files only. Does not load modules, evaluate manifests or read user/application data.

Purpose evidence: jsdoc.

Lexical owner: [scripts/audit/audit-architecture.cjs](<audit-architecture.cjs.md#s-8d208d6c3e26edc9>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| from | any | compiler-inferred | required |
| specifier | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [auditArchitecture](<audit-architecture.cjs.md#s-b92801371032ffaa>) — [scripts/audit/audit-architecture.cjs:188](<../../../../../../scripts/audit/audit-architecture.cjs#L188>)

Unresolved / external call sites: 12.

- specifier.startsWith — external-or-dynamic-dispatch; [scripts/audit/audit-architecture.cjs:16](<../../../../../../scripts/audit/audit-architecture.cjs#L16>)
- path.join — external-or-dynamic-dispatch; [scripts/audit/audit-architecture.cjs:17](<../../../../../../scripts/audit/audit-architecture.cjs#L17>)
- specifier.slice — external-or-dynamic-dispatch; [scripts/audit/audit-architecture.cjs:17](<../../../../../../scripts/audit/audit-architecture.cjs#L17>)
- specifier.startsWith — external-or-dynamic-dispatch; [scripts/audit/audit-architecture.cjs:18](<../../../../../../scripts/audit/audit-architecture.cjs#L18>)
- path.resolve — external-or-dynamic-dispatch; [scripts/audit/audit-architecture.cjs:19](<../../../../../../scripts/audit/audit-architecture.cjs#L19>)
- path.dirname — external-or-dynamic-dispatch; [scripts/audit/audit-architecture.cjs:19](<../../../../../../scripts/audit/audit-architecture.cjs#L19>)
- fs.existsSync — external-or-dynamic-dispatch; [scripts/audit/audit-architecture.cjs:34](<../../../../../../scripts/audit/audit-architecture.cjs#L34>)
- fs.statSync(candidate).isFile — external-or-dynamic-dispatch; [scripts/audit/audit-architecture.cjs:34](<../../../../../../scripts/audit/audit-architecture.cjs#L34>)
- 4 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [tests/integration/architecture-contract.test.cjs:12](<../../../../../../tests/integration/architecture-contract.test.cjs#L12>) — file-import-only; coverage not established.

<a id="s-f03ed73432be48ab"></a>

## runtimeImports

[scripts/audit/audit-architecture.cjs:41](<../../../../../../scripts/audit/audit-architecture.cjs#L41>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Extracts actual literal runtime imports with locations, excluding type-only imports and strings/comments. Lazy require edges remain visible as structural dependencies.

Purpose evidence: jsdoc.

Exported as: runtimeImports ([scripts/audit/audit-architecture.cjs:1](<../../../../../../scripts/audit/audit-architecture.cjs#L1>)).

Lexical owner: [scripts/audit/audit-architecture.cjs](<audit-architecture.cjs.md#s-8d208d6c3e26edc9>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| source | any | compiler-inferred | required |
| file | any | compiler-inferred | required |

Returns: { imports: {}; dynamic: number; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [runtimeImports.visit](<audit-architecture.cjs.md#s-db7a3782c337b296>) — [scripts/audit/audit-architecture.cjs:99](<../../../../../../scripts/audit/audit-architecture.cjs#L99>)

**Called by (statically resolved):**

- [auditArchitecture](<audit-architecture.cjs.md#s-b92801371032ffaa>) — [scripts/audit/audit-architecture.cjs:180](<../../../../../../scripts/audit/audit-architecture.cjs#L180>)
- [auditArchitecture](<audit-architecture.cjs.md#s-b92801371032ffaa>) — [scripts/audit/audit-architecture.cjs:205](<../../../../../../scripts/audit/audit-architecture.cjs#L205>)
- [&lt;anonymous@14:86&gt;](<../../tests/integration/architecture-contract.test.cjs.md#s-60ca4347c543e0cd>) — [tests/integration/architecture-contract.test.cjs:15](<../../../../../../tests/integration/architecture-contract.test.cjs#L15>)

Unresolved / external call sites: 3.

- ts.createSourceFile — external-or-dynamic-dispatch; [scripts/audit/audit-architecture.cjs:42](<../../../../../../scripts/audit/audit-architecture.cjs#L42>)
- file.endsWith — external-or-dynamic-dispatch; [scripts/audit/audit-architecture.cjs:47](<../../../../../../scripts/audit/audit-architecture.cjs#L47>)
- file.endsWith — external-or-dynamic-dispatch; [scripts/audit/audit-architecture.cjs:49](<../../../../../../scripts/audit/audit-architecture.cjs#L49>)

**Related tests / acceptance harnesses:**

- [tests/integration/architecture-contract.test.cjs:15](<../../../../../../tests/integration/architecture-contract.test.cjs#L15>) — static-call-site; coverage not established.
- [tests/integration/architecture-contract.test.cjs:12](<../../../../../../tests/integration/architecture-contract.test.cjs#L12>) — file-import-only; coverage not established.

<a id="s-db7a3782c337b296"></a>

## runtimeImports.visit

[scripts/audit/audit-architecture.cjs:56](<../../../../../../scripts/audit/audit-architecture.cjs#L56>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Visits syntax nodes while retaining whether execution of an import is deferred by a function body.

Purpose evidence: jsdoc.

Lexical owner: [runtimeImports](<audit-architecture.cjs.md#s-f03ed73432be48ab>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| node | any | compiler-inferred | required |
| deferred | boolean | compiler-inferred | optional, default present |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [runtimeImports.visit.&lt;anonymous@95:27&gt;](<audit-architecture.cjs.md#s-576305e86b3b433c>) — [scripts/audit/audit-architecture.cjs:96](<../../../../../../scripts/audit/audit-architecture.cjs#L96>)
- [runtimeImports](<audit-architecture.cjs.md#s-f03ed73432be48ab>) — [scripts/audit/audit-architecture.cjs:99](<../../../../../../scripts/audit/audit-architecture.cjs#L99>)

Unresolved / external call sites: 14.

- ts.isImportDeclaration — external-or-dynamic-dispatch; [scripts/audit/audit-architecture.cjs:58](<../../../../../../scripts/audit/audit-architecture.cjs#L58>)
- ts.isNamedImports — external-or-dynamic-dispatch; [scripts/audit/audit-architecture.cjs:65](<../../../../../../scripts/audit/audit-architecture.cjs#L65>)
- named.elements.every — external-or-dynamic-dispatch; [scripts/audit/audit-architecture.cjs:67](<../../../../../../scripts/audit/audit-architecture.cjs#L67>)
- ts.isExportDeclaration — external-or-dynamic-dispatch; [scripts/audit/audit-architecture.cjs:69](<../../../../../../scripts/audit/audit-architecture.cjs#L69>)
- ts.isNamedExports — external-or-dynamic-dispatch; [scripts/audit/audit-architecture.cjs:73](<../../../../../../scripts/audit/audit-architecture.cjs#L73>)
- named.elements.every — external-or-dynamic-dispatch; [scripts/audit/audit-architecture.cjs:75](<../../../../../../scripts/audit/audit-architecture.cjs#L75>)
- ts.isCallExpression — external-or-dynamic-dispatch; [scripts/audit/audit-architecture.cjs:79](<../../../../../../scripts/audit/audit-architecture.cjs#L79>)
- ts.isIdentifier — external-or-dynamic-dispatch; [scripts/audit/audit-architecture.cjs:80](<../../../../../../scripts/audit/audit-architecture.cjs#L80>)
- 6 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [tests/integration/architecture-contract.test.cjs:12](<../../../../../../tests/integration/architecture-contract.test.cjs#L12>) — file-import-only; coverage not established.

<a id="s-6f3af1f6f5709e1d"></a>

## runtimeImports.visit.&lt;anonymous@67:32&gt;

[scripts/audit/audit-architecture.cjs:67](<../../../../../../scripts/audit/audit-architecture.cjs#L67>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [runtimeImports.visit](<audit-architecture.cjs.md#s-db7a3782c337b296>).

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

- [tests/integration/architecture-contract.test.cjs:12](<../../../../../../tests/integration/architecture-contract.test.cjs#L12>) — file-import-only; coverage not established.

<a id="s-307a8c2f865ece21"></a>

## runtimeImports.visit.&lt;anonymous@75:30&gt;

[scripts/audit/audit-architecture.cjs:75](<../../../../../../scripts/audit/audit-architecture.cjs#L75>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [runtimeImports.visit](<audit-architecture.cjs.md#s-db7a3782c337b296>).

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

- [tests/integration/architecture-contract.test.cjs:12](<../../../../../../tests/integration/architecture-contract.test.cjs#L12>) — file-import-only; coverage not established.

<a id="s-576305e86b3b433c"></a>

## runtimeImports.visit.&lt;anonymous@95:27&gt;

[scripts/audit/audit-architecture.cjs:95](<../../../../../../scripts/audit/audit-architecture.cjs#L95>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [runtimeImports.visit](<audit-architecture.cjs.md#s-db7a3782c337b296>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| child | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [runtimeImports.visit](<audit-architecture.cjs.md#s-db7a3782c337b296>) — [scripts/audit/audit-architecture.cjs:96](<../../../../../../scripts/audit/audit-architecture.cjs#L96>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- ts.isFunctionLike — external-or-dynamic-dispatch; [scripts/audit/audit-architecture.cjs:96](<../../../../../../scripts/audit/audit-architecture.cjs#L96>)

**Related tests / acceptance harnesses:**

- [tests/integration/architecture-contract.test.cjs:12](<../../../../../../tests/integration/architecture-contract.test.cjs#L12>) — file-import-only; coverage not established.

<a id="s-519c7982a25643d8"></a>

## dependencyCycles

[scripts/audit/audit-architecture.cjs:104](<../../../../../../scripts/audit/audit-architecture.cjs#L104>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Finds strongly connected source groups. Includes lazy imports; a reported cycle requires review and is not proof of a runtime initialization failure.

Purpose evidence: jsdoc.

Exported as: dependencyCycles ([scripts/audit/audit-architecture.cjs:1](<../../../../../../scripts/audit/audit-architecture.cjs#L1>)).

Lexical owner: [scripts/audit/audit-architecture.cjs](<audit-architecture.cjs.md#s-8d208d6c3e26edc9>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| graph | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [dependencyCycles.visit](<audit-architecture.cjs.md#s-7c7cb3492030db2e>) — [scripts/audit/audit-architecture.cjs:148](<../../../../../../scripts/audit/audit-architecture.cjs#L148>)

**Called by (statically resolved):**

- [auditArchitecture](<audit-architecture.cjs.md#s-b92801371032ffaa>) — [scripts/audit/audit-architecture.cjs:232](<../../../../../../scripts/audit/audit-architecture.cjs#L232>)
- [&lt;anonymous@14:86&gt;](<../../tests/integration/architecture-contract.test.cjs.md#s-60ca4347c543e0cd>) — [tests/integration/architecture-contract.test.cjs:27](<../../../../../../tests/integration/architecture-contract.test.cjs#L27>)

Unresolved / external call sites: 6.

- Map — external-or-dynamic-dispatch; [scripts/audit/audit-architecture.cjs:106](<../../../../../../scripts/audit/audit-architecture.cjs#L106>)
- Map — external-or-dynamic-dispatch; [scripts/audit/audit-architecture.cjs:107](<../../../../../../scripts/audit/audit-architecture.cjs#L107>)
- Set — external-or-dynamic-dispatch; [scripts/audit/audit-architecture.cjs:109](<../../../../../../scripts/audit/audit-architecture.cjs#L109>)
- graph.keys — external-or-dynamic-dispatch; [scripts/audit/audit-architecture.cjs:148](<../../../../../../scripts/audit/audit-architecture.cjs#L148>)
- indices.has — external-or-dynamic-dispatch; [scripts/audit/audit-architecture.cjs:148](<../../../../../../scripts/audit/audit-architecture.cjs#L148>)
- cycles.sort — external-or-dynamic-dispatch; [scripts/audit/audit-architecture.cjs:149](<../../../../../../scripts/audit/audit-architecture.cjs#L149>)

**Related tests / acceptance harnesses:**

- [tests/integration/architecture-contract.test.cjs:27](<../../../../../../tests/integration/architecture-contract.test.cjs#L27>) — static-call-site; coverage not established.
- [tests/integration/architecture-contract.test.cjs:12](<../../../../../../tests/integration/architecture-contract.test.cjs#L12>) — file-import-only; coverage not established.

<a id="s-7c7cb3492030db2e"></a>

## dependencyCycles.visit

[scripts/audit/audit-architecture.cjs:112](<../../../../../../scripts/audit/audit-architecture.cjs#L112>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Traverses one graph component with Tarjan's algorithm; no module code is executed.

Purpose evidence: jsdoc.

Lexical owner: [dependencyCycles](<audit-architecture.cjs.md#s-519c7982a25643d8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| node | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [dependencyCycles.visit](<audit-architecture.cjs.md#s-7c7cb3492030db2e>) — [scripts/audit/audit-architecture.cjs:120](<../../../../../../scripts/audit/audit-architecture.cjs#L120>)

**Called by (statically resolved):**

- [dependencyCycles.visit](<audit-architecture.cjs.md#s-7c7cb3492030db2e>) — [scripts/audit/audit-architecture.cjs:120](<../../../../../../scripts/audit/audit-architecture.cjs#L120>)
- [dependencyCycles](<audit-architecture.cjs.md#s-519c7982a25643d8>) — [scripts/audit/audit-architecture.cjs:148](<../../../../../../scripts/audit/audit-architecture.cjs#L148>)

Unresolved / external call sites: 27.

- indices.set — external-or-dynamic-dispatch; [scripts/audit/audit-architecture.cjs:113](<../../../../../../scripts/audit/audit-architecture.cjs#L113>)
- low.set — external-or-dynamic-dispatch; [scripts/audit/audit-architecture.cjs:114](<../../../../../../scripts/audit/audit-architecture.cjs#L114>)
- stack.push — external-or-dynamic-dispatch; [scripts/audit/audit-architecture.cjs:115](<../../../../../../scripts/audit/audit-architecture.cjs#L115>)
- active.add — external-or-dynamic-dispatch; [scripts/audit/audit-architecture.cjs:116](<../../../../../../scripts/audit/audit-architecture.cjs#L116>)
- graph.get — external-or-dynamic-dispatch; [scripts/audit/audit-architecture.cjs:117](<../../../../../../scripts/audit/audit-architecture.cjs#L117>)
- graph.has — external-or-dynamic-dispatch; [scripts/audit/audit-architecture.cjs:118](<../../../../../../scripts/audit/audit-architecture.cjs#L118>)
- indices.has — external-or-dynamic-dispatch; [scripts/audit/audit-architecture.cjs:119](<../../../../../../scripts/audit/audit-architecture.cjs#L119>)
- low.set — external-or-dynamic-dispatch; [scripts/audit/audit-architecture.cjs:121](<../../../../../../scripts/audit/audit-architecture.cjs#L121>)
- 19 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [tests/integration/architecture-contract.test.cjs:12](<../../../../../../tests/integration/architecture-contract.test.cjs#L12>) — file-import-only; coverage not established.

<a id="s-9c94da563b22f813"></a>

## dependencyCycles.visit.&lt;anonymous@135:36&gt;

[scripts/audit/audit-architecture.cjs:135](<../../../../../../scripts/audit/audit-architecture.cjs#L135>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [dependencyCycles.visit](<audit-architecture.cjs.md#s-7c7cb3492030db2e>).

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

- [tests/integration/architecture-contract.test.cjs:12](<../../../../../../tests/integration/architecture-contract.test.cjs#L12>) — file-import-only; coverage not established.

<a id="s-741619bb1ba3e4cf"></a>

## dependencyCycles.visit.&lt;anonymous@140:32&gt;

[scripts/audit/audit-architecture.cjs:140](<../../../../../../scripts/audit/audit-architecture.cjs#L140>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [dependencyCycles.visit](<audit-architecture.cjs.md#s-7c7cb3492030db2e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| from | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- (graph.get(from) ?? &#91;&#93;) .filter((edge) =&gt; included.has(edge.target)) .map — external-or-dynamic-dispatch; [scripts/audit/audit-architecture.cjs:141](<../../../../../../scripts/audit/audit-architecture.cjs#L141>)
- (graph.get(from) ?? &#91;&#93;) .filter — external-or-dynamic-dispatch; [scripts/audit/audit-architecture.cjs:141](<../../../../../../scripts/audit/audit-architecture.cjs#L141>)
- graph.get — external-or-dynamic-dispatch; [scripts/audit/audit-architecture.cjs:141](<../../../../../../scripts/audit/audit-architecture.cjs#L141>)

**Related tests / acceptance harnesses:**

- [tests/integration/architecture-contract.test.cjs:12](<../../../../../../tests/integration/architecture-contract.test.cjs#L12>) — file-import-only; coverage not established.

<a id="s-fda76506113913b5"></a>

## dependencyCycles.visit.&lt;anonymous@140:32&gt;.&lt;anonymous@142:21&gt;

[scripts/audit/audit-architecture.cjs:142](<../../../../../../scripts/audit/audit-architecture.cjs#L142>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [dependencyCycles.visit.&lt;anonymous@140:32&gt;](<audit-architecture.cjs.md#s-741619bb1ba3e4cf>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| edge | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- included.has — external-or-dynamic-dispatch; [scripts/audit/audit-architecture.cjs:142](<../../../../../../scripts/audit/audit-architecture.cjs#L142>)

**Related tests / acceptance harnesses:**

- [tests/integration/architecture-contract.test.cjs:12](<../../../../../../tests/integration/architecture-contract.test.cjs#L12>) — file-import-only; coverage not established.

<a id="s-3f1fdbe38b50a157"></a>

## dependencyCycles.visit.&lt;anonymous@140:32&gt;.&lt;anonymous@143:18&gt;

[scripts/audit/audit-architecture.cjs:143](<../../../../../../scripts/audit/audit-architecture.cjs#L143>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [dependencyCycles.visit.&lt;anonymous@140:32&gt;](<audit-architecture.cjs.md#s-741619bb1ba3e4cf>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| edge | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [tests/integration/architecture-contract.test.cjs:12](<../../../../../../tests/integration/architecture-contract.test.cjs#L12>) — file-import-only; coverage not established.

<a id="s-b8889c99e7e70a8e"></a>

## dependencyCycles.&lt;anonymous@149:22&gt;

[scripts/audit/audit-architecture.cjs:149](<../../../../../../scripts/audit/audit-architecture.cjs#L149>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [dependencyCycles](<audit-architecture.cjs.md#s-519c7982a25643d8>).

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

- a.files&#91;0&#93;.localeCompare — external-or-dynamic-dispatch; [scripts/audit/audit-architecture.cjs:149](<../../../../../../scripts/audit/audit-architecture.cjs#L149>)

**Related tests / acceptance harnesses:**

- [tests/integration/architecture-contract.test.cjs:12](<../../../../../../tests/integration/architecture-contract.test.cjs#L12>) — file-import-only; coverage not established.

<a id="s-b92801371032ffaa"></a>

## auditArchitecture

[scripts/audit/audit-architecture.cjs:153](<../../../../../../scripts/audit/audit-architecture.cjs#L153>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Audits selected repository sources against explicit ORB-ARCH-001 import boundaries. Returns violations, structural cycles and utility-placement debt; cannot establish runtime authorization, dynamic-import safety or live-provider health.

Purpose evidence: jsdoc.

Exported as: auditArchitecture ([scripts/audit/audit-architecture.cjs:1](<../../../../../../scripts/audit/audit-architecture.cjs#L1>)).

Lexical owner: [scripts/audit/audit-architecture.cjs](<audit-architecture.cjs.md#s-8d208d6c3e26edc9>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | optional, default present |
| files | any | compiler-inferred | optional, default present |

Returns: { specification: string; sourceFiles: any; runtimeImportsChecked: number; nonliteralImportsForManualReview: number; violations: {}; unresolvedLocalImports: {}; dependencyCycles: any; unexpectedDependencyCycles: any; sharedUtilities: {}; rendererSharedModules: {}; elapsedMs: number; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [runtimeImports](<audit-architecture.cjs.md#s-f03ed73432be48ab>) — [scripts/audit/audit-architecture.cjs:180](<../../../../../../scripts/audit/audit-architecture.cjs#L180>)
- [resolveLocal](<audit-architecture.cjs.md#s-089dbd5781a3ff2b>) — [scripts/audit/audit-architecture.cjs:188](<../../../../../../scripts/audit/audit-architecture.cjs#L188>)
- [runtimeImports](<audit-architecture.cjs.md#s-f03ed73432be48ab>) — [scripts/audit/audit-architecture.cjs:205](<../../../../../../scripts/audit/audit-architecture.cjs#L205>)
- [dependencyCycles](<audit-architecture.cjs.md#s-519c7982a25643d8>) — [scripts/audit/audit-architecture.cjs:232](<../../../../../../scripts/audit/audit-architecture.cjs#L232>)

**Called by (statically resolved):**

- [scripts/audit/audit-architecture.cjs](<audit-architecture.cjs.md#s-8d208d6c3e26edc9>) — [scripts/audit/audit-architecture.cjs:249](<../../../../../../scripts/audit/audit-architecture.cjs#L249>)
- [&lt;anonymous@30:95&gt;](<../../tests/integration/architecture-contract.test.cjs.md#s-3ad79f1d179a4db2>) — [tests/integration/architecture-contract.test.cjs:50](<../../../../../../tests/integration/architecture-contract.test.cjs#L50>)
- [&lt;anonymous@30:95&gt;](<../../tests/integration/architecture-contract.test.cjs.md#s-3ad79f1d179a4db2>) — [tests/integration/architecture-contract.test.cjs:67](<../../../../../../tests/integration/architecture-contract.test.cjs#L67>)
- [&lt;anonymous@30:95&gt;](<../../tests/integration/architecture-contract.test.cjs.md#s-3ad79f1d179a4db2>) — [tests/integration/architecture-contract.test.cjs:74](<../../../../../../tests/integration/architecture-contract.test.cjs#L74>)
- [&lt;anonymous@81:84&gt;](<../../tests/integration/architecture-contract.test.cjs.md#s-74a1e39944bdcee9>) — [tests/integration/architecture-contract.test.cjs:82](<../../../../../../tests/integration/architecture-contract.test.cjs#L82>)

Unresolved / external call sites: 38.

- path.resolve — external-or-dynamic-dispatch; [scripts/audit/audit-architecture.cjs:154](<../../../../../../scripts/audit/audit-architecture.cjs#L154>)
- performance.now — external-or-dynamic-dispatch; [scripts/audit/audit-architecture.cjs:157](<../../../../../../scripts/audit/audit-architecture.cjs#L157>)
- execFileSync( "rg", &#91;"--files", "electron", "features", "components", "app", "types"&#93;, { cwd: root, encoding: "utf8" }, ) .trim() .split — external-or-dynamic-dispatch; [scripts/audit/audit-architecture.cjs:158](<../../../../../../scripts/audit/audit-architecture.cjs#L158>)
- execFileSync( "rg", &#91;"--files", "electron", "features", "components", "app", "types"&#93;, { cwd: root, encoding: "utf8" }, ) .trim — external-or-dynamic-dispatch; [scripts/audit/audit-architecture.cjs:158](<../../../../../../scripts/audit/audit-architecture.cjs#L158>)
- execFileSync — external-or-dynamic-dispatch; [scripts/audit/audit-architecture.cjs:158](<../../../../../../scripts/audit/audit-architecture.cjs#L158>)
- files .map((file) =&gt; file.split(path.sep).join("/")) .filter — external-or-dynamic-dispatch; [scripts/audit/audit-architecture.cjs:165](<../../../../../../scripts/audit/audit-architecture.cjs#L165>)
- files .map — external-or-dynamic-dispatch; [scripts/audit/audit-architecture.cjs:165](<../../../../../../scripts/audit/audit-architecture.cjs#L165>)
- Map — external-or-dynamic-dispatch; [scripts/audit/audit-architecture.cjs:172](<../../../../../../scripts/audit/audit-architecture.cjs#L172>)
- 30 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [tests/integration/architecture-contract.test.cjs:50](<../../../../../../tests/integration/architecture-contract.test.cjs#L50>) — static-call-site; coverage not established.
- [tests/integration/architecture-contract.test.cjs:67](<../../../../../../tests/integration/architecture-contract.test.cjs#L67>) — static-call-site; coverage not established.
- [tests/integration/architecture-contract.test.cjs:74](<../../../../../../tests/integration/architecture-contract.test.cjs#L74>) — static-call-site; coverage not established.
- [tests/integration/architecture-contract.test.cjs:82](<../../../../../../tests/integration/architecture-contract.test.cjs#L82>) — static-call-site; coverage not established.
- [tests/integration/architecture-contract.test.cjs:12](<../../../../../../tests/integration/architecture-contract.test.cjs#L12>) — file-import-only; coverage not established.

<a id="s-fa851ca6b502e16e"></a>

## auditArchitecture.&lt;anonymous@166:10&gt;

[scripts/audit/audit-architecture.cjs:166](<../../../../../../scripts/audit/audit-architecture.cjs#L166>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [auditArchitecture](<audit-architecture.cjs.md#s-b92801371032ffaa>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| file | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- file.split(path.sep).join — external-or-dynamic-dispatch; [scripts/audit/audit-architecture.cjs:166](<../../../../../../scripts/audit/audit-architecture.cjs#L166>)
- file.split — external-or-dynamic-dispatch; [scripts/audit/audit-architecture.cjs:166](<../../../../../../scripts/audit/audit-architecture.cjs#L166>)

**Related tests / acceptance harnesses:**

- [tests/integration/architecture-contract.test.cjs:12](<../../../../../../tests/integration/architecture-contract.test.cjs#L12>) — file-import-only; coverage not established.

<a id="s-346dbcfaddd28935"></a>

## auditArchitecture.&lt;anonymous@168:7&gt;

[scripts/audit/audit-architecture.cjs:168](<../../../../../../scripts/audit/audit-architecture.cjs#L168>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [auditArchitecture](<audit-architecture.cjs.md#s-b92801371032ffaa>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| file | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- /\\.(cjs&#124;js&#124;ts&#124;tsx)$/.test — external-or-dynamic-dispatch; [scripts/audit/audit-architecture.cjs:169](<../../../../../../scripts/audit/audit-architecture.cjs#L169>)
- /\\.(?:test\\.cjs&#124;d\\.cts&#124;d\\.ts)$/.test — external-or-dynamic-dispatch; [scripts/audit/audit-architecture.cjs:170](<../../../../../../scripts/audit/audit-architecture.cjs#L170>)

**Related tests / acceptance harnesses:**

- [tests/integration/architecture-contract.test.cjs:12](<../../../../../../tests/integration/architecture-contract.test.cjs#L12>) — file-import-only; coverage not established.
