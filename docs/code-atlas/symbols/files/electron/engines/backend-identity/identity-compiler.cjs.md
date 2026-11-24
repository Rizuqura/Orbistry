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
- [capture.&lt;anonymous@232:26&gt;](<identity-compiler.cjs.md#s-7273a265b043af4f>) (ArrowFunction)
- [generate](<identity-compiler.cjs.md#s-7cdf112c906f5772>) (FunctionDeclaration)
- [generate.compileIdentity](<identity-compiler.cjs.md#s-433e03f963d494bb>) (FunctionExpression)
- [generate.compileIdentity.encodeSource](<identity-compiler.cjs.md#s-ae162f23d69f55da>) (FunctionExpression)
- [generate.compileIdentity.&lt;anonymous@340:30&gt;](<identity-compiler.cjs.md#s-50ab14e4976e9c78>) (ArrowFunction)
- [generate.compileIdentity.&lt;anonymous@344:49&gt;](<identity-compiler.cjs.md#s-5666a602060611c5>) (ArrowFunction)
- [generate.compileIdentity.&lt;anonymous@344:49&gt;.&lt;anonymous@349:51&gt;](<identity-compiler.cjs.md#s-0463d795008c9a7d>) (ArrowFunction)
- [generate.compileIdentity.&lt;anonymous@357:17&gt;](<identity-compiler.cjs.md#s-4f198faf02842e60>) (ArrowFunction)
- [generate.compileIdentity.&lt;anonymous@364:15&gt;](<identity-compiler.cjs.md#s-6a257807fe199223>) (ArrowFunction)
- [generate.releaseCompilerQueue](<identity-compiler.cjs.md#s-a8d43aaa2f484ce6>) (FunctionExpression)
- [status](<identity-compiler.cjs.md#s-028f3e6557e09194>) (FunctionDeclaration)

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
- [loadConnectors](<../../domains/entity/connector-store.cjs.md#s-8ec496ccfadb4d52>) — [electron/engines/backend-identity/identity-compiler.cjs:220](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L220>)
- [encodeConnections](<connector-encoder.cjs.md#s-4cb717248b131954>) — [electron/engines/backend-identity/identity-compiler.cjs:221](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L221>)

**Called by (statically resolved):**

- [generate.compileIdentity](<identity-compiler.cjs.md#s-433e03f963d494bb>) — [electron/engines/backend-identity/identity-compiler.cjs:250](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L250>)
- [generate.compileIdentity](<identity-compiler.cjs.md#s-433e03f963d494bb>) — [electron/engines/backend-identity/identity-compiler.cjs:321](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L321>)
- [status](<identity-compiler.cjs.md#s-028f3e6557e09194>) — [electron/engines/backend-identity/identity-compiler.cjs:425](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L425>)
- [createIdentityRuntime.executeCapability](<identity-runtime.cjs.md#s-35ccbce8833db04a>) — [electron/engines/backend-identity/identity-runtime.cjs:202](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L202>)

Unresolved / external call sites: 23.

- idSchema.parse — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:151](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L151>)
- readWorldViewChip — signature-only-candidate; [electron/engines/backend-identity/identity-compiler.cjs:152](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L152>)
- &#91; ...new Set( index.menus.flatMap((menu) =&gt; &#91; ...menu.sourceIds, ...(menu.carousels ?? &#91;&#93;).flatMap((group) =&gt; group.sourceIds), &#93;), ), &#93;.sort — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:161](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L161>)
- Set — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:162](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L162>)
- index.menus.flatMap — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:163](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L163>)
- Error — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:170](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L170>)
- Map — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:173](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L173>)
- chip.sources.map — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:174](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L174>)
- 15 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:19](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:23](<../../../../../../../electron/backend-identity.test.cjs#L23>) — file-import-only; coverage not established.

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

<a id="s-7273a265b043af4f"></a>

## capture.&lt;anonymous@232:26&gt;

[electron/engines/backend-identity/identity-compiler.cjs:232](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L232>) · ArrowFunction · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

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

<a id="s-7cdf112c906f5772"></a>

## generate

[electron/engines/backend-identity/identity-compiler.cjs:239](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L239>) · FunctionDeclaration · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

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

- [serialQueue](<../../core/persistence/json-store.cjs.md#s-a8a605453bc9a09a>) — [electron/engines/backend-identity/identity-compiler.cjs:242](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L242>)

**Called by (statically resolved):**

- [fixture](<../../ai/agents/entity-agents.test.cjs.md#s-9ad48d6b7854c1ed>) — [electron/ai/agents/entity-agents.test.cjs:106](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L106>)
- [createIdentityRuntime.generate](<identity-runtime.cjs.md#s-00ca52391aa334d7>) — [electron/engines/backend-identity/identity-runtime.cjs:65](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L65>)

Unresolved / external call sites: 7.

- idSchema.parse — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:240](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L240>)
- fs.realpath — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:241](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L241>)
- queues.has — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:242](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L242>)
- queues.set — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:242](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L242>)
- queues.get — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:243](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L243>)
- queue .run(async function compileIdentity() { try { const references = &#91;&#93;, log = &#91;&#93;; const input = await capture( root, entityId, async function encodeSource({ descriptor, content, — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:245](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L245>)
- queue .run — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:245](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L245>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:106](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L106>) — static-call-site; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:19](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:23](<../../../../../../../electron/backend-identity.test.cjs#L23>) — file-import-only; coverage not established.

<a id="s-433e03f963d494bb"></a>

## generate.compileIdentity

[electron/engines/backend-identity/identity-compiler.cjs:246](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L246>) · FunctionExpression · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [generate](<identity-compiler.cjs.md#s-7cdf112c906f5772>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [capture](<identity-compiler.cjs.md#s-1f99e7da5df73158>) — [electron/engines/backend-identity/identity-compiler.cjs:250](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L250>)
- [readVersion](<snapshot-store.cjs.md#s-a51351659d223525>) — [electron/engines/backend-identity/identity-compiler.cjs:320](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L320>)
- [capture](<identity-compiler.cjs.md#s-1f99e7da5df73158>) — [electron/engines/backend-identity/identity-compiler.cjs:321](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L321>)
- [publish](<snapshot-store.cjs.md#s-aad15ef56f75a7c7>) — [electron/engines/backend-identity/identity-compiler.cjs:385](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L385>)
- [recordAttempt](<snapshot-store.cjs.md#s-ae275b9de6284ebc>) — [electron/engines/backend-identity/identity-compiler.cjs:392](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L392>)
- [recordAttempt](<snapshot-store.cjs.md#s-ae275b9de6284ebc>) — [electron/engines/backend-identity/identity-compiler.cjs:405](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L405>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 22.

- log.push — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:309](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L309>)
- digest — signature-only-candidate; [electron/engines/backend-identity/identity-compiler.cjs:315](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L315>)
- Error — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:323](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L323>)
- log.push — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:326](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L326>)
- manifestSchema.parse — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:333](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L333>)
- new Date().toISOString — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:339](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L339>)
- Date — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:339](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L339>)
- log.some — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:340](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L340>)
- 14 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:19](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:23](<../../../../../../../electron/backend-identity.test.cjs#L23>) — file-import-only; coverage not established.

<a id="s-ae162f23d69f55da"></a>

## generate.compileIdentity.encodeSource

[electron/engines/backend-identity/identity-compiler.cjs:253](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L253>) · FunctionExpression · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [generate.compileIdentity](<identity-compiler.cjs.md#s-433e03f963d494bb>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { descriptor, content, note } | { descriptor: any; content: any; note: any; } | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [chunkMarkdown](<markdown-chunker.cjs.md#s-647ff3dd5dad92e8>) — [electron/engines/backend-identity/identity-compiler.cjs:279](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L279>)
- [putChunk](<snapshot-store.cjs.md#s-ed9516fc7e10fb38>) — [electron/engines/backend-identity/identity-compiler.cjs:290](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L290>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- &#91;".md", ".markdown"&#93;.includes — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:261](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L261>)
- descriptor.extension.toLowerCase — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:262](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L262>)
- Error — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:287](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L287>)
- references.push — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:292](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L292>)
- log.push — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:297](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L297>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:19](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:23](<../../../../../../../electron/backend-identity.test.cjs#L23>) — file-import-only; coverage not established.

<a id="s-50ab14e4976e9c78"></a>

## generate.compileIdentity.&lt;anonymous@340:30&gt;

[electron/engines/backend-identity/identity-compiler.cjs:340](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L340>) · ArrowFunction · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [generate.compileIdentity](<identity-compiler.cjs.md#s-433e03f963d494bb>).

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

<a id="s-5666a602060611c5"></a>

## generate.compileIdentity.&lt;anonymous@344:49&gt;

[electron/engines/backend-identity/identity-compiler.cjs:344](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L344>) · ArrowFunction · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [generate.compileIdentity](<identity-compiler.cjs.md#s-433e03f963d494bb>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| menu | any | compiler-inferred | required |

Returns: { id: any; title: any; sourceIds: {}; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- (menu.carousels ?? &#91;&#93;).flatMap — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:349](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L349>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:19](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:23](<../../../../../../../electron/backend-identity.test.cjs#L23>) — file-import-only; coverage not established.

<a id="s-0463d795008c9a7d"></a>

## generate.compileIdentity.&lt;anonymous@344:49&gt;.&lt;anonymous@349:51&gt;

[electron/engines/backend-identity/identity-compiler.cjs:349](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L349>) · ArrowFunction · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [generate.compileIdentity.&lt;anonymous@344:49&gt;](<identity-compiler.cjs.md#s-5666a602060611c5>).

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

<a id="s-4f198faf02842e60"></a>

## generate.compileIdentity.&lt;anonymous@357:17&gt;

[electron/engines/backend-identity/identity-compiler.cjs:357](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L357>) · ArrowFunction · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [generate.compileIdentity](<identity-compiler.cjs.md#s-433e03f963d494bb>).

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

<a id="s-6a257807fe199223"></a>

## generate.compileIdentity.&lt;anonymous@364:15&gt;

[electron/engines/backend-identity/identity-compiler.cjs:364](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L364>) · ArrowFunction · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [generate.compileIdentity](<identity-compiler.cjs.md#s-433e03f963d494bb>).

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

<a id="s-a8d43aaa2f484ce6"></a>

## generate.releaseCompilerQueue

[electron/engines/backend-identity/identity-compiler.cjs:419](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L419>) · FunctionExpression · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [generate](<identity-compiler.cjs.md#s-7cdf112c906f5772>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- queues.delete — external-or-dynamic-dispatch; [electron/engines/backend-identity/identity-compiler.cjs:420](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L420>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:19](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:23](<../../../../../../../electron/backend-identity.test.cjs#L23>) — file-import-only; coverage not established.

<a id="s-028f3e6557e09194"></a>

## status

[electron/engines/backend-identity/identity-compiler.cjs:424](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L424>) · FunctionDeclaration · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

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

- [capture](<identity-compiler.cjs.md#s-1f99e7da5df73158>) — [electron/engines/backend-identity/identity-compiler.cjs:425](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L425>)
- [current](<snapshot-store.cjs.md#s-1b3b25fe1054f619>) — [electron/engines/backend-identity/identity-compiler.cjs:426](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L426>)
- [lastAttempt](<snapshot-store.cjs.md#s-739f94fed52517ad>) — [electron/engines/backend-identity/identity-compiler.cjs:436](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L436>)

**Called by (statically resolved):**

- [&lt;anonymous@1041:121&gt;](<../../ai/agents/entity-agents.test.cjs.md#s-0d65babfd6d4ef70>) — [electron/ai/agents/entity-agents.test.cjs:1052](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L1052>)
- [&lt;anonymous@1041:121&gt;](<../../ai/agents/entity-agents.test.cjs.md#s-0d65babfd6d4ef70>) — [electron/ai/agents/entity-agents.test.cjs:1144](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L1144>)
- [&lt;anonymous@1041:121&gt;](<../../ai/agents/entity-agents.test.cjs.md#s-0d65babfd6d4ef70>) — [electron/ai/agents/entity-agents.test.cjs:1151](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L1151>)
- [&lt;anonymous@1335:104&gt;](<../../ai/agents/entity-agents.test.cjs.md#s-7c72d56a02768214>) — [electron/ai/agents/entity-agents.test.cjs:1337](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L1337>)
- [&lt;anonymous@1335:104&gt;](<../../ai/agents/entity-agents.test.cjs.md#s-7c72d56a02768214>) — [electron/ai/agents/entity-agents.test.cjs:1355](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L1355>)
- [createIdentityRuntime.fresh](<identity-runtime.cjs.md#s-49e3b9293e066309>) — [electron/engines/backend-identity/identity-runtime.cjs:35](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L35>)
- [createIdentityRuntime.getIdentity](<identity-runtime.cjs.md#s-61b9d91ded30579c>) — [electron/engines/backend-identity/identity-runtime.cjs:58](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L58>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:1052](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L1052>) — static-call-site; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:1144](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L1144>) — static-call-site; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:1151](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L1151>) — static-call-site; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:1337](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L1337>) — static-call-site; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:1355](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L1355>) — static-call-site; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:19](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/backend-identity.test.cjs:23](<../../../../../../../electron/backend-identity.test.cjs#L23>) — file-import-only; coverage not established.
