# electron/engines/backend-identity/identity-compiler.cjs: symbols

[Atlas](<../../../../../README.md>) / [Backend Identity Engine](<../../../../../modules/identity.md>) / [electron/engines/backend-identity/identity-compiler.cjs:1](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/engines/backend-identity/identity-compiler.cjs](<identity-compiler.cjs.md#s-6deb7cc0d03e2756>) (Module)
- [restricted](<identity-compiler.cjs.md#s-49d86be5913cd54a>) (FunctionDeclaration)
- [restricted.&lt;anonymous@34:9&gt;](<identity-compiler.cjs.md#s-065e4854c7871d2f>) (ArrowFunction)
- [inspectSource](<identity-compiler.cjs.md#s-93b9911298f38ef7>) (FunctionDeclaration)
- [capture](<identity-compiler.cjs.md#s-1f99e7da5df73158>) (FunctionDeclaration)
- [capture.&lt;anonymous@163:27&gt;](<identity-compiler.cjs.md#s-5a8578d766197172>) (ArrowFunction)
- [capture.&lt;anonymous@163:27&gt;.&lt;anonymous@165:43&gt;](<identity-compiler.cjs.md#s-d35a069d459d50cc>) (ArrowFunction)
- [capture.&lt;anonymous@174:22&gt;](<identity-compiler.cjs.md#s-203b2820a5cb6c95>) (ArrowFunction)
- [capture.&lt;anonymous@198:7&gt;](<identity-compiler.cjs.md#s-9d5cdad9aa957ea4>) (ArrowFunction)
- [capture.&lt;anonymous@203:9&gt;](<identity-compiler.cjs.md#s-c25c586f94ed50b2>) (ArrowFunction)
- [capture.&lt;anonymous@239:26&gt;](<identity-compiler.cjs.md#s-30f8bf2a18c4f7ad>) (ArrowFunction)
- [generate](<identity-compiler.cjs.md#s-f539d3e969846edf>) (FunctionDeclaration)
- [generate.compileIdentity](<identity-compiler.cjs.md#s-06dcf38dc3b100c8>) (FunctionExpression)
- [generate.compileIdentity.encodeSource](<identity-compiler.cjs.md#s-80e161a08d14a00f>) (FunctionExpression)
- [generate.compileIdentity.&lt;anonymous@355:30&gt;](<identity-compiler.cjs.md#s-aa5e0250436b7322>) (ArrowFunction)
- [generate.compileIdentity.&lt;anonymous@359:49&gt;](<identity-compiler.cjs.md#s-3628458db7af53af>) (ArrowFunction)
- [generate.compileIdentity.&lt;anonymous@359:49&gt;.&lt;anonymous@364:51&gt;](<identity-compiler.cjs.md#s-0c372b653e00c0c4>) (ArrowFunction)
- [generate.compileIdentity.&lt;anonymous@372:17&gt;](<identity-compiler.cjs.md#s-d8663191e4e2af6b>) (ArrowFunction)
- [generate.compileIdentity.&lt;anonymous@382:15&gt;](<identity-compiler.cjs.md#s-2724ba741050c554>) (ArrowFunction)
- [generate.releaseCompilerQueue](<identity-compiler.cjs.md#s-8c69fb095bc472fd>) (FunctionExpression)
- [status](<identity-compiler.cjs.md#s-1d61d04d4313288f>) (FunctionDeclaration)

<a id="s-6deb7cc0d03e2756"></a>

## electron/engines/backend-identity/identity-compiler.cjs

[electron/engines/backend-identity/identity-compiler.cjs:1](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L1>) · Module · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 16.

- require — module-loader; [electron/engines/backend-identity/identity-compiler.cjs:1](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L1>)
- require — module-loader; [electron/engines/backend-identity/identity-compiler.cjs:2](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L2>)
- require — module-loader; [electron/engines/backend-identity/identity-compiler.cjs:3](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L3>)
- require — module-loader; [electron/engines/backend-identity/identity-compiler.cjs:4](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L4>)
- require — module-loader; [electron/engines/backend-identity/identity-compiler.cjs:5](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L5>)
- require — module-loader; [electron/engines/backend-identity/identity-compiler.cjs:8](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L8>)
- require — module-loader; [electron/engines/backend-identity/identity-compiler.cjs:11](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L11>)
- require — module-loader; [electron/engines/backend-identity/identity-compiler.cjs:12](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L12>)
- 8 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:19](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:23](<../../../../../../../electron/backend-identity.test.cjs#L23>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:77](<../../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L77>) — file-import-only; coverage not established.

<a id="s-49d86be5913cd54a"></a>

## restricted

[electron/engines/backend-identity/identity-compiler.cjs:29](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L29>) · FunctionDeclaration · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

Restricts compilation to assigned knowledge documents, excluding credential/config filenames and private-key material by file type.

Purpose evidence: jsdoc.

Lexical owner: [electron/engines/backend-identity/identity-compiler.cjs](<identity-compiler.cjs.md#s-6deb7cc0d03e2756>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| ref | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [inspectSource](<identity-compiler.cjs.md#s-93b9911298f38ef7>) — [electron/engines/backend-identity/identity-compiler.cjs:55](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L55>)

Unresolved / external call sites: 3.

- ref .split("/") .some — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:31](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L31>)
- ref .split — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:31](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L31>)
- /\\.(?:pem&#124;key&#124;pfx&#124;p12)$/i.test — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:39](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L39>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:19](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:23](<../../../../../../../electron/backend-identity.test.cjs#L23>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:77](<../../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L77>) — file-import-only; coverage not established.

<a id="s-065e4854c7871d2f"></a>

## restricted.&lt;anonymous@34:9&gt;

[electron/engines/backend-identity/identity-compiler.cjs:34](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L34>) · ArrowFunction · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [restricted](<identity-compiler.cjs.md#s-49d86be5913cd54a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| part | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- /^\\.env(?:\\.&#124;$)/i.test — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:35](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L35>)
- /^(?:provider-credentials&#124;credentials&#124;tokens&#124;model-settings&#124;vault-settings&#124;agents)\\.json$/i.test — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:36](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L36>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:19](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:23](<../../../../../../../electron/backend-identity.test.cjs#L23>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:77](<../../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L77>) — file-import-only; coverage not established.

<a id="s-93b9911298f38ef7"></a>

## inspectSource

[electron/engines/backend-identity/identity-compiler.cjs:43](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L43>) · FunctionDeclaration · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

Hashes one authorized source in bounded blocks; only basic text is retained temporarily for chunking. Changes during reads reject rather than publishing mixed versions.

Purpose evidence: jsdoc.

Lexical owner: [electron/engines/backend-identity/identity-compiler.cjs](<identity-compiler.cjs.md#s-6deb7cc0d03e2756>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| source | any | compiler-inferred | required |
| budget | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [restricted](<identity-compiler.cjs.md#s-49d86be5913cd54a>) — [electron/engines/backend-identity/identity-compiler.cjs:55](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L55>)
- [statVaultSource](<../../domains/universe/vault-service.cjs.md#s-11f97228db17e5f8>) — [electron/engines/backend-identity/identity-compiler.cjs:65](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L65>)
- [statVaultSource](<../../domains/universe/vault-service.cjs.md#s-11f97228db17e5f8>) — [electron/engines/backend-identity/identity-compiler.cjs:120](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L120>)

**Called by (statically resolved):**

- [capture](<identity-compiler.cjs.md#s-1f99e7da5df73158>) — [electron/engines/backend-identity/identity-compiler.cjs:181](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L181>)

Unresolved / external call sites: 23.

- digest — signature-only-candidate; [electron/engines/backend-identity/identity-compiler.cjs:60](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L60>)
- digest — signature-only-candidate; [electron/engines/backend-identity/identity-compiler.cjs:71](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L71>)
- resolved.stats.isFile — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:75](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L75>)
- Error — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:76](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L76>)
- resolved.stats.mtime.toISOString — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:77](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L77>)
- textExtensions.has — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:79](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L79>)
- source.extension.toLowerCase — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:79](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L79>)
- digest — signature-only-candidate; [electron/engines/backend-identity/identity-compiler.cjs:86](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L86>)
- 15 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:19](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:23](<../../../../../../../electron/backend-identity.test.cjs#L23>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:77](<../../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L77>) — file-import-only; coverage not established.

<a id="s-1f99e7da5df73158"></a>

## capture

[electron/engines/backend-identity/identity-compiler.cjs:150](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L150>) · FunctionDeclaration · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

Captures existing applied-index declarations and canonical entity metadata without creating a parallel indexing system. Source bodies are read sequentially, not accumulated as a collection.

Purpose evidence: jsdoc.

Exported as: capture ([electron/engines/backend-identity/identity-compiler.cjs:1](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L1>)).

Lexical owner: [electron/engines/backend-identity/identity-compiler.cjs](<identity-compiler.cjs.md#s-6deb7cc0d03e2756>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| entityId | any | compiler-inferred | required |
| onSource | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [readKnowledgeIndex](<../../domains/knowledge/knowledge-store.cjs.md#s-c0c55e94f399d0ad>) — [electron/engines/backend-identity/identity-compiler.cjs:153](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L153>)
- [inspectSource](<identity-compiler.cjs.md#s-93b9911298f38ef7>) — [electron/engines/backend-identity/identity-compiler.cjs:181](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L181>)
- [discoverCapabilities](<capability-registry.cjs.md#s-98fed9e53769111a>) — [electron/engines/backend-identity/identity-compiler.cjs:219](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L219>)
- [loadConnectors](<../../domains/worldview/repositories/legacy-connection-store.cjs.md#s-2937b562dd1ce8b4>) — [electron/engines/backend-identity/identity-compiler.cjs:220](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L220>)
- [encodeConnections](<connector-encoder.cjs.md#s-4cb717248b131954>) — [electron/engines/backend-identity/identity-compiler.cjs:221](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L221>)
- [describePackageSources](<package-sources.cjs.md#s-94666ad1ea56bbdc>) — [electron/engines/backend-identity/identity-compiler.cjs:227](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L227>)

**Called by (statically resolved):**

- [generate.compileIdentity](<identity-compiler.cjs.md#s-06dcf38dc3b100c8>) — [electron/engines/backend-identity/identity-compiler.cjs:265](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L265>)
- [generate.compileIdentity](<identity-compiler.cjs.md#s-06dcf38dc3b100c8>) — [electron/engines/backend-identity/identity-compiler.cjs:336](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L336>)
- [status](<identity-compiler.cjs.md#s-1d61d04d4313288f>) — [electron/engines/backend-identity/identity-compiler.cjs:443](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L443>)
- [createIdentityRuntime.executeCapability](<identity-runtime.cjs.md#s-35ccbce8833db04a>) — [electron/engines/backend-identity/identity-runtime.cjs:202](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L202>)

Unresolved / external call sites: 24.

- idSchema.parse — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:151](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L151>)
- readWorldViewChip — signature-only-candidate; [electron/engines/backend-identity/identity-compiler.cjs:152](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L152>)
- &#91; ...new Set( index.menus.flatMap((menu) =&gt; &#91; ...menu.sourceIds, ...(menu.carousels ?? &#91;&#93;).flatMap((group) =&gt; group.sourceIds), &#93;), ), &#93;.sort — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:161](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L161>)
- Set — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:162](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L162>)
- index.menus.flatMap — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:163](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L163>)
- Error — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:170](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L170>)
- Map — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:173](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L173>)
- chip.sources.map — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:174](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L174>)
- 16 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:19](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:23](<../../../../../../../electron/backend-identity.test.cjs#L23>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:77](<../../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L77>) — file-import-only; coverage not established.

<a id="s-5a8578d766197172"></a>

## capture.&lt;anonymous@163:27&gt;

[electron/engines/backend-identity/identity-compiler.cjs:163](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L163>) · ArrowFunction · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [capture](<identity-compiler.cjs.md#s-1f99e7da5df73158>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| menu | any | compiler-inferred | required |

Returns: {} (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- (menu.carousels ?? &#91;&#93;).flatMap — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:165](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L165>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:19](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:23](<../../../../../../../electron/backend-identity.test.cjs#L23>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:77](<../../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L77>) — file-import-only; coverage not established.

<a id="s-d35a069d459d50cc"></a>

## capture.&lt;anonymous@163:27&gt;.&lt;anonymous@165:43&gt;

[electron/engines/backend-identity/identity-compiler.cjs:165](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L165>) · ArrowFunction · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [capture.&lt;anonymous@163:27&gt;](<identity-compiler.cjs.md#s-5a8578d766197172>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| group | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:19](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:23](<../../../../../../../electron/backend-identity.test.cjs#L23>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:77](<../../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L77>) — file-import-only; coverage not established.

<a id="s-203b2820a5cb6c95"></a>

## capture.&lt;anonymous@174:22&gt;

[electron/engines/backend-identity/identity-compiler.cjs:174](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L174>) · ArrowFunction · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [capture](<identity-compiler.cjs.md#s-1f99e7da5df73158>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| source | any | compiler-inferred | required |

Returns: {} (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:19](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:23](<../../../../../../../electron/backend-identity.test.cjs#L23>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:77](<../../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L77>) — file-import-only; coverage not established.

<a id="s-9d5cdad9aa957ea4"></a>

## capture.&lt;anonymous@198:7&gt;

[electron/engines/backend-identity/identity-compiler.cjs:198](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L198>) · ArrowFunction · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [capture](<identity-compiler.cjs.md#s-1f99e7da5df73158>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| note | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:19](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:23](<../../../../../../../electron/backend-identity.test.cjs#L23>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:77](<../../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L77>) — file-import-only; coverage not established.

<a id="s-c25c586f94ed50b2"></a>

## capture.&lt;anonymous@203:9&gt;

[electron/engines/backend-identity/identity-compiler.cjs:203](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L203>) · ArrowFunction · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [capture](<identity-compiler.cjs.md#s-1f99e7da5df73158>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| note | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- Buffer.byteLength — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:205](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L205>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:19](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:23](<../../../../../../../electron/backend-identity.test.cjs#L23>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:77](<../../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L77>) — file-import-only; coverage not established.

<a id="s-30f8bf2a18c4f7ad"></a>

## capture.&lt;anonymous@239:26&gt;

[electron/engines/backend-identity/identity-compiler.cjs:239](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L239>) · ArrowFunction · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [capture](<identity-compiler.cjs.md#s-1f99e7da5df73158>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { chunkCount, ...value } | { &#91;x: string&#93;: any; chunkCount: any; } | compiler-inferred | required |

Returns: { &#91;x: string&#93;: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:19](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:23](<../../../../../../../electron/backend-identity.test.cjs#L23>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:77](<../../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L77>) — file-import-only; coverage not established.

<a id="s-f539d3e969846edf"></a>

## generate

[electron/engines/backend-identity/identity-compiler.cjs:254](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L254>) · FunctionDeclaration · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

Compiles only on explicit invocation. Identical inputs reuse immutable versions and unchanged chunks; concurrent changes leave the current snapshot intact.

Purpose evidence: jsdoc.

Exported as: generate ([electron/engines/backend-identity/identity-compiler.cjs:1](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L1>)).

Lexical owner: [electron/engines/backend-identity/identity-compiler.cjs](<identity-compiler.cjs.md#s-6deb7cc0d03e2756>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| entityId | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [serialQueue](<../../core/persistence/json-store.cjs.md#s-a8a605453bc9a09a>) — [electron/engines/backend-identity/identity-compiler.cjs:257](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L257>)

**Called by (statically resolved):**

- [fixture](<../../ai/agents/entity-agents.test.cjs.md#s-9ad48d6b7854c1ed>) — [electron/ai/agents/entity-agents.test.cjs:110](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L110>)
- [&lt;anonymous@1366:119&gt;](<../../ai/agents/entity-agents.test.cjs.md#s-58653e683a59839a>) — [electron/ai/agents/entity-agents.test.cjs:1394](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L1394>)
- [&lt;anonymous@1366:119&gt;](<../../ai/agents/entity-agents.test.cjs.md#s-58653e683a59839a>) — [electron/ai/agents/entity-agents.test.cjs:1434](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L1434>)
- [createIdentityRuntime.generate](<identity-runtime.cjs.md#s-00ca52391aa334d7>) — [electron/engines/backend-identity/identity-runtime.cjs:65](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L65>)
- [main.verifyAll](<../../../scripts/acceptance/yahoo-package-lifecycle.cjs.md#s-53e46664c77822ce>) — [scripts/acceptance/yahoo-package-lifecycle.cjs:79](<../../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L79>)
- [main](<../../../scripts/acceptance/yahoo-package-lifecycle.cjs.md#s-a519dde3e44c97fd>) — [scripts/acceptance/yahoo-package-lifecycle.cjs:130](<../../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L130>)

Unresolved / external call sites: 7.

- idSchema.parse — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:255](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L255>)
- fs.realpath — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:256](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L256>)
- queues.has — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:257](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L257>)
- queues.set — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:257](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L257>)
- queues.get — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:258](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L258>)
- queue .run(async function compileIdentity() { try { const references = &#91;&#93;, log = &#91;&#93;; const input = await capture( root, entityId, async function encodeSource({ descriptor, content, — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:260](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L260>)
- queue .run — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:260](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L260>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:110](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L110>) — static-call-site; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:1394](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L1394>) — static-call-site; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:1434](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L1434>) — static-call-site; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:79](<../../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L79>) — static-call-site; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:130](<../../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L130>) — static-call-site; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:19](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:23](<../../../../../../../electron/backend-identity.test.cjs#L23>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:77](<../../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L77>) — file-import-only; coverage not established.

<a id="s-06dcf38dc3b100c8"></a>

## generate.compileIdentity

[electron/engines/backend-identity/identity-compiler.cjs:261](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L261>) · FunctionExpression · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [generate](<identity-compiler.cjs.md#s-f539d3e969846edf>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [capture](<identity-compiler.cjs.md#s-1f99e7da5df73158>) — [electron/engines/backend-identity/identity-compiler.cjs:265](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L265>)
- [readVersion](<snapshot-store.cjs.md#s-a51351659d223525>) — [electron/engines/backend-identity/identity-compiler.cjs:335](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L335>)
- [capture](<identity-compiler.cjs.md#s-1f99e7da5df73158>) — [electron/engines/backend-identity/identity-compiler.cjs:336](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L336>)
- [publish](<snapshot-store.cjs.md#s-aad15ef56f75a7c7>) — [electron/engines/backend-identity/identity-compiler.cjs:403](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L403>)
- [recordAttempt](<snapshot-store.cjs.md#s-ae275b9de6284ebc>) — [electron/engines/backend-identity/identity-compiler.cjs:410](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L410>)
- [recordAttempt](<snapshot-store.cjs.md#s-ae275b9de6284ebc>) — [electron/engines/backend-identity/identity-compiler.cjs:423](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L423>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 22.

- log.push — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:324](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L324>)
- digest — signature-only-candidate; [electron/engines/backend-identity/identity-compiler.cjs:330](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L330>)
- Error — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:338](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L338>)
- log.push — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:341](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L341>)
- manifestSchema.parse — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:348](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L348>)
- new Date().toISOString — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:354](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L354>)
- Date — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:354](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L354>)
- log.some — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:355](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L355>)
- 14 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:19](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:23](<../../../../../../../electron/backend-identity.test.cjs#L23>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:77](<../../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L77>) — file-import-only; coverage not established.

<a id="s-80e161a08d14a00f"></a>

## generate.compileIdentity.encodeSource

[electron/engines/backend-identity/identity-compiler.cjs:268](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L268>) · FunctionExpression · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [generate.compileIdentity](<identity-compiler.cjs.md#s-06dcf38dc3b100c8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { descriptor, content, note } | { descriptor: any; content: any; note: any; } | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [chunkMarkdown](<markdown-chunker.cjs.md#s-647ff3dd5dad92e8>) — [electron/engines/backend-identity/identity-compiler.cjs:294](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L294>)
- [putChunk](<snapshot-store.cjs.md#s-ed9516fc7e10fb38>) — [electron/engines/backend-identity/identity-compiler.cjs:305](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L305>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- &#91;".md", ".markdown"&#93;.includes — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:276](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L276>)
- descriptor.extension.toLowerCase — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:277](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L277>)
- Error — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:302](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L302>)
- references.push — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:307](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L307>)
- log.push — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:312](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L312>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:19](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:23](<../../../../../../../electron/backend-identity.test.cjs#L23>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:77](<../../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L77>) — file-import-only; coverage not established.

<a id="s-aa5e0250436b7322"></a>

## generate.compileIdentity.&lt;anonymous@355:30&gt;

[electron/engines/backend-identity/identity-compiler.cjs:355](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L355>) · ArrowFunction · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [generate.compileIdentity](<identity-compiler.cjs.md#s-06dcf38dc3b100c8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| entry | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:19](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:23](<../../../../../../../electron/backend-identity.test.cjs#L23>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:77](<../../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L77>) — file-import-only; coverage not established.

<a id="s-3628458db7af53af"></a>

## generate.compileIdentity.&lt;anonymous@359:49&gt;

[electron/engines/backend-identity/identity-compiler.cjs:359](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L359>) · ArrowFunction · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [generate.compileIdentity](<identity-compiler.cjs.md#s-06dcf38dc3b100c8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| menu | any | compiler-inferred | required |

Returns: { id: any; title: any; sourceIds: {}; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- (menu.carousels ?? &#91;&#93;).flatMap — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:364](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L364>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:19](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:23](<../../../../../../../electron/backend-identity.test.cjs#L23>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:77](<../../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L77>) — file-import-only; coverage not established.

<a id="s-0c372b653e00c0c4"></a>

## generate.compileIdentity.&lt;anonymous@359:49&gt;.&lt;anonymous@364:51&gt;

[electron/engines/backend-identity/identity-compiler.cjs:364](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L364>) · ArrowFunction · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [generate.compileIdentity.&lt;anonymous@359:49&gt;](<identity-compiler.cjs.md#s-3628458db7af53af>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| group | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:19](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:23](<../../../../../../../electron/backend-identity.test.cjs#L23>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:77](<../../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L77>) — file-import-only; coverage not established.

<a id="s-d8663191e4e2af6b"></a>

## generate.compileIdentity.&lt;anonymous@372:17&gt;

[electron/engines/backend-identity/identity-compiler.cjs:372](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L372>) · ArrowFunction · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [generate.compileIdentity](<identity-compiler.cjs.md#s-06dcf38dc3b100c8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| sum | any | compiler-inferred | required |
| chunk | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:19](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:23](<../../../../../../../electron/backend-identity.test.cjs#L23>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:77](<../../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L77>) — file-import-only; coverage not established.

<a id="s-2724ba741050c554"></a>

## generate.compileIdentity.&lt;anonymous@382:15&gt;

[electron/engines/backend-identity/identity-compiler.cjs:382](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L382>) · ArrowFunction · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [generate.compileIdentity](<identity-compiler.cjs.md#s-06dcf38dc3b100c8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| {                 capabilityId,                 engineId,                 version,                 operation,                 availability,                 sourceId,                 symbol,               } | { capabilityId: any; engineId: any; version: any; operation: any; availability: any; sourceId: any; symbol: any; } | compiler-inferred | required |

Returns: { capabilityId: any; engineId: any; version: any; operation: any; availability: any; sourceId: any; symbol: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:19](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:23](<../../../../../../../electron/backend-identity.test.cjs#L23>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:77](<../../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L77>) — file-import-only; coverage not established.

<a id="s-8c69fb095bc472fd"></a>

## generate.releaseCompilerQueue

[electron/engines/backend-identity/identity-compiler.cjs:437](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L437>) · FunctionExpression · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [generate](<identity-compiler.cjs.md#s-f539d3e969846edf>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- queues.delete — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:438](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L438>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:19](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:23](<../../../../../../../electron/backend-identity.test.cjs#L23>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:77](<../../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L77>) — file-import-only; coverage not established.

<a id="s-1d61d04d4313288f"></a>

## status

[electron/engines/backend-identity/identity-compiler.cjs:442](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L442>) · FunctionDeclaration · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

Inspects freshness on demand using current metadata and source fingerprints; it never regenerates or executes capabilities.

Purpose evidence: jsdoc.

Exported as: status ([electron/engines/backend-identity/identity-compiler.cjs:1](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L1>)).

Lexical owner: [electron/engines/backend-identity/identity-compiler.cjs](<identity-compiler.cjs.md#s-6deb7cc0d03e2756>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| entityId | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [capture](<identity-compiler.cjs.md#s-1f99e7da5df73158>) — [electron/engines/backend-identity/identity-compiler.cjs:443](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L443>)
- [current](<snapshot-store.cjs.md#s-1b3b25fe1054f619>) — [electron/engines/backend-identity/identity-compiler.cjs:444](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L444>)
- [lastAttempt](<snapshot-store.cjs.md#s-739f94fed52517ad>) — [electron/engines/backend-identity/identity-compiler.cjs:454](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L454>)

**Called by (statically resolved):**

- [&lt;anonymous@1045:121&gt;](<../../ai/agents/entity-agents.test.cjs.md#s-f3ff7eaef7d019ef>) — [electron/ai/agents/entity-agents.test.cjs:1056](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L1056>)
- [&lt;anonymous@1045:121&gt;](<../../ai/agents/entity-agents.test.cjs.md#s-f3ff7eaef7d019ef>) — [electron/ai/agents/entity-agents.test.cjs:1148](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L1148>)
- [&lt;anonymous@1045:121&gt;](<../../ai/agents/entity-agents.test.cjs.md#s-f3ff7eaef7d019ef>) — [electron/ai/agents/entity-agents.test.cjs:1155](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L1155>)
- [&lt;anonymous@1339:104&gt;](<../../ai/agents/entity-agents.test.cjs.md#s-d28c5458a7a05b60>) — [electron/ai/agents/entity-agents.test.cjs:1341](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L1341>)
- [&lt;anonymous@1339:104&gt;](<../../ai/agents/entity-agents.test.cjs.md#s-d28c5458a7a05b60>) — [electron/ai/agents/entity-agents.test.cjs:1359](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L1359>)
- [createIdentityRuntime.fresh](<identity-runtime.cjs.md#s-49e3b9293e066309>) — [electron/engines/backend-identity/identity-runtime.cjs:35](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L35>)
- [createIdentityRuntime.getIdentity](<identity-runtime.cjs.md#s-61b9d91ded30579c>) — [electron/engines/backend-identity/identity-runtime.cjs:58](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L58>)
- [main.verifyAll](<../../../scripts/acceptance/yahoo-package-lifecycle.cjs.md#s-53e46664c77822ce>) — [scripts/acceptance/yahoo-package-lifecycle.cjs:80](<../../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L80>)
- [main](<../../../scripts/acceptance/yahoo-package-lifecycle.cjs.md#s-a519dde3e44c97fd>) — [scripts/acceptance/yahoo-package-lifecycle.cjs:129](<../../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L129>)
- [main](<../../../scripts/acceptance/yahoo-package-lifecycle.cjs.md#s-a519dde3e44c97fd>) — [scripts/acceptance/yahoo-package-lifecycle.cjs:132](<../../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L132>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:1056](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L1056>) — static-call-site; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:1148](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L1148>) — static-call-site; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:1155](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L1155>) — static-call-site; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:1341](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L1341>) — static-call-site; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:1359](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L1359>) — static-call-site; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:80](<../../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L80>) — static-call-site; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:129](<../../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L129>) — static-call-site; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:132](<../../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L132>) — static-call-site; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:19](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:23](<../../../../../../../electron/backend-identity.test.cjs#L23>) — file-import-only; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:77](<../../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L77>) — file-import-only; coverage not established.
