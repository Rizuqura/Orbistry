# electron/domains/knowledge/package-source.cjs: symbols

[Atlas](<../../../../../README.md>) / [Knowledge indexing and source access](<../../../../../modules/knowledge.md>) / [electron/domains/knowledge/package-source.cjs:1](<../../../../../../../electron/domains/knowledge/package-source.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/domains/knowledge/package-source.cjs](<package-source.cjs.md#s-e930aadb7ee5025a>) (Module)
- [packageSource](<package-source.cjs.md#s-1884c4d4b5872c82>) (FunctionDeclaration)
- [packageSource.reference](<package-source.cjs.md#s-5a15f265f6ea6ea9>) (FunctionDeclaration)
- [packageSource.reference.&lt;anonymous@20:16&gt;](<package-source.cjs.md#s-2b597d9318dee6c2>) (ArrowFunction)
- [packageSource.reference.&lt;anonymous@21:13&gt;](<package-source.cjs.md#s-ee5804642363a370>) (ArrowFunction)
- [packageSource.authorize](<package-source.cjs.md#s-7b26ccb1b51239b3>) (ArrowFunction)
- [packageSource.&lt;anonymous@51:5&gt;](<package-source.cjs.md#s-f0f10e0a291fe8a1>) (ArrowFunction)
- [packageSource.&lt;anonymous@60:47&gt;](<package-source.cjs.md#s-d1ad26848db7ddc7>) (ArrowFunction)
- [packageSource.&lt;anonymous@69:5&gt;](<package-source.cjs.md#s-239d9ae185364eb3>) (ArrowFunction)

<a id="s-e930aadb7ee5025a"></a>

## electron/domains/knowledge/package-source.cjs

[electron/domains/knowledge/package-source.cjs:1](<../../../../../../../electron/domains/knowledge/package-source.cjs#L1>) · Module · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- require — module-loader; [electron/domains/knowledge/package-source.cjs:3](<../../../../../../../electron/domains/knowledge/package-source.cjs#L3>)
- require — module-loader; [electron/domains/knowledge/package-source.cjs:4](<../../../../../../../electron/domains/knowledge/package-source.cjs#L4>)
- require — module-loader; [electron/domains/knowledge/package-source.cjs:5](<../../../../../../../electron/domains/knowledge/package-source.cjs#L5>)

**Related tests / acceptance harnesses:**

- [electron/engine-packages.test.cjs:802](<../../../../../../../electron/engine-packages.test.cjs#L802>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:870](<../../../../../../../electron/engine-packages.test.cjs#L870>) — file-import-only; coverage not established.

<a id="s-1884c4d4b5872c82"></a>

## packageSource

[electron/domains/knowledge/package-source.cjs:8](<../../../../../../../electron/domains/knowledge/package-source.cjs#L8>) · FunctionDeclaration · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

Resolves one applied declaration. Only a live automatic Entity link permits the card's explicit Run action.

Purpose evidence: jsdoc.

Exported as: packageSource ([electron/domains/knowledge/package-source.cjs:1](<../../../../../../../electron/domains/knowledge/package-source.cjs#L1>)).

Lexical owner: [electron/domains/knowledge/package-source.cjs](<package-source.cjs.md#s-e930aadb7ee5025a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| { id, declarationId } | { id: any; declarationId: any; } | compiler-inferred | required |
| active | any | compiler-inferred | required |
| run | boolean | compiler-inferred | optional, default present |
| assignment | any | compiler-inferred | optional, default present |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [packageSource.reference](<package-source.cjs.md#s-5a15f265f6ea6ea9>) — [electron/domains/knowledge/package-source.cjs:25](<../../../../../../../electron/domains/knowledge/package-source.cjs#L25>)
- [EnginePackageRegistry.constructor](<../../engines/registry/registry.cjs.md#s-0e6ad7bd522e9fad>) — [electron/domains/knowledge/package-source.cjs:27](<../../../../../../../electron/domains/knowledge/package-source.cjs#L27>)
- [EnginePackageRegistry.read](<../../engines/registry/registry.cjs.md#s-abffabd42b530015>) — [electron/domains/knowledge/package-source.cjs:44](<../../../../../../../electron/domains/knowledge/package-source.cjs#L44>)
- [EnginePackageRegistry.installed](<../../engines/registry/registry.cjs.md#s-4b2796c726a80a4b>) — [electron/domains/knowledge/package-source.cjs:47](<../../../../../../../electron/domains/knowledge/package-source.cjs#L47>)
- [validateData](<../../engines/contracts/contract.cjs.md#s-567344da6db54f40>) — [electron/domains/knowledge/package-source.cjs:62](<../../../../../../../electron/domains/knowledge/package-source.cjs#L62>)
- [EnginePackageRegistry.execute](<../../engines/registry/registry.cjs.md#s-61267d4d373b62b8>) — [electron/domains/knowledge/package-source.cjs:82](<../../../../../../../electron/domains/knowledge/package-source.cjs#L82>)

**Called by (statically resolved):**

- [EntityAgentService.executePackageSource](<../../ai/agents/entity-agents.cjs.md#s-ff8dc88b32ff3d4c>) — [electron/ai/agents/entity-agents.cjs:1917](<../../../../../../../electron/ai/agents/entity-agents.cjs#L1917>)
- [registerWorldViewIpc."package-source-status"](<../../core/ipc/worldview-ipc.cjs.md#s-baecb2086d8b7f04>) — [electron/core/ipc/worldview-ipc.cjs:31](<../../../../../../../electron/core/ipc/worldview-ipc.cjs#L31>)
- [registerWorldViewIpc."package-source-run"](<../../core/ipc/worldview-ipc.cjs.md#s-8a0bb58180f9b286>) — [electron/core/ipc/worldview-ipc.cjs:34](<../../../../../../../electron/core/ipc/worldview-ipc.cjs#L34>)
- [&lt;anonymous@796:89&gt;.status](<../../engine-packages.test.cjs.md#s-981c8a99e0c29c28>) — [electron/engine-packages.test.cjs:821](<../../../../../../../electron/engine-packages.test.cjs#L821>)
- [&lt;anonymous@796:89&gt;](<../../engine-packages.test.cjs.md#s-d8ce262c4b7b63c7>) — [electron/engine-packages.test.cjs:835](<../../../../../../../electron/engine-packages.test.cjs#L835>)
- [&lt;anonymous@796:89&gt;](<../../engine-packages.test.cjs.md#s-d8ce262c4b7b63c7>) — [electron/engine-packages.test.cjs:855](<../../../../../../../electron/engine-packages.test.cjs#L855>)
- [&lt;anonymous@796:89&gt;](<../../engine-packages.test.cjs.md#s-d8ce262c4b7b63c7>) — [electron/engine-packages.test.cjs:859](<../../../../../../../electron/engine-packages.test.cjs#L859>)
- [&lt;anonymous@796:89&gt;](<../../engine-packages.test.cjs.md#s-d8ce262c4b7b63c7>) — [electron/engine-packages.test.cjs:861](<../../../../../../../electron/engine-packages.test.cjs#L861>)
- [&lt;anonymous@864:112&gt;](<../../engine-packages.test.cjs.md#s-b50f9582b28483cb>) — [electron/engine-packages.test.cjs:895](<../../../../../../../electron/engine-packages.test.cjs#L895>)
- [&lt;anonymous@864:112&gt;](<../../engine-packages.test.cjs.md#s-b50f9582b28483cb>) — [electron/engine-packages.test.cjs:907](<../../../../../../../electron/engine-packages.test.cjs#L907>)

Unresolved / external call sites: 9.

- Object.hasOwn — external-or-dynamic-dispatch; [electron/domains/knowledge/package-source.cjs:45](<../../../../../../../electron/domains/knowledge/package-source.cjs#L45>)
- checked.manifest.sources?.find — external-or-dynamic-dispatch; [electron/domains/knowledge/package-source.cjs:50](<../../../../../../../electron/domains/knowledge/package-source.cjs#L50>)
- Number — external-or-dynamic-dispatch; [electron/domains/knowledge/package-source.cjs:55](<../../../../../../../electron/domains/knowledge/package-source.cjs#L55>)
- checked.manifest.engine_version.split — external-or-dynamic-dispatch; [electron/domains/knowledge/package-source.cjs:55](<../../../../../../../electron/domains/knowledge/package-source.cjs#L55>)
- checked.manifest.operations.find — external-or-dynamic-dispatch; [electron/domains/knowledge/package-source.cjs:60](<../../../../../../../electron/domains/knowledge/package-source.cjs#L60>)
- state.links.find — external-or-dynamic-dispatch; [electron/domains/knowledge/package-source.cjs:68](<../../../../../../../electron/domains/knowledge/package-source.cjs#L68>)
- link?.operations.includes — external-or-dynamic-dispatch; [electron/domains/knowledge/package-source.cjs:74](<../../../../../../../electron/domains/knowledge/package-source.cjs#L74>)
- active — external-or-dynamic-dispatch; [electron/domains/knowledge/package-source.cjs:80](<../../../../../../../electron/domains/knowledge/package-source.cjs#L80>)
- 1 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/engine-packages.test.cjs:821](<../../../../../../../electron/engine-packages.test.cjs#L821>) — static-call-site; coverage not established.
- [electron/engine-packages.test.cjs:835](<../../../../../../../electron/engine-packages.test.cjs#L835>) — static-call-site; coverage not established.
- [electron/engine-packages.test.cjs:855](<../../../../../../../electron/engine-packages.test.cjs#L855>) — static-call-site; coverage not established.
- [electron/engine-packages.test.cjs:859](<../../../../../../../electron/engine-packages.test.cjs#L859>) — static-call-site; coverage not established.
- [electron/engine-packages.test.cjs:861](<../../../../../../../electron/engine-packages.test.cjs#L861>) — static-call-site; coverage not established.
- [electron/engine-packages.test.cjs:895](<../../../../../../../electron/engine-packages.test.cjs#L895>) — static-call-site; coverage not established.
- [electron/engine-packages.test.cjs:907](<../../../../../../../electron/engine-packages.test.cjs#L907>) — static-call-site; coverage not established.
- [electron/engine-packages.test.cjs:802](<../../../../../../../electron/engine-packages.test.cjs#L802>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:870](<../../../../../../../electron/engine-packages.test.cjs#L870>) — file-import-only; coverage not established.

<a id="s-5a15f265f6ea6ea9"></a>

## packageSource.reference

[electron/domains/knowledge/package-source.cjs:16](<../../../../../../../electron/domains/knowledge/package-source.cjs#L16>) · FunctionDeclaration · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

Re-read authoritative configuration for admission and again before publication.

Purpose evidence: jsdoc.

Lexical owner: [packageSource](<package-source.cjs.md#s-1884c4d4b5872c82>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [readKnowledgeIndex](<knowledge-store.cjs.md#s-c0c55e94f399d0ad>) — [electron/domains/knowledge/package-source.cjs:18](<../../../../../../../electron/domains/knowledge/package-source.cjs#L18>)

**Called by (statically resolved):**

- [packageSource](<package-source.cjs.md#s-1884c4d4b5872c82>) — [electron/domains/knowledge/package-source.cjs:25](<../../../../../../../electron/domains/knowledge/package-source.cjs#L25>)
- [packageSource.authorize](<package-source.cjs.md#s-7b26ccb1b51239b3>) — [electron/domains/knowledge/package-source.cjs:29](<../../../../../../../electron/domains/knowledge/package-source.cjs#L29>)

Unresolved / external call sites: 5.

- active — external-or-dynamic-dispatch; [electron/domains/knowledge/package-source.cjs:17](<../../../../../../../electron/domains/knowledge/package-source.cjs#L17>)
- Error — external-or-dynamic-dispatch; [electron/domains/knowledge/package-source.cjs:17](<../../../../../../../electron/domains/knowledge/package-source.cjs#L17>)
- state.menus .flatMap((menu) =&gt; menu.packageSources ?? &#91;&#93;) .find — external-or-dynamic-dispatch; [electron/domains/knowledge/package-source.cjs:19](<../../../../../../../electron/domains/knowledge/package-source.cjs#L19>)
- state.menus .flatMap — external-or-dynamic-dispatch; [electron/domains/knowledge/package-source.cjs:19](<../../../../../../../electron/domains/knowledge/package-source.cjs#L19>)
- Error — external-or-dynamic-dispatch; [electron/domains/knowledge/package-source.cjs:22](<../../../../../../../electron/domains/knowledge/package-source.cjs#L22>)

**Related tests / acceptance harnesses:**

- [electron/engine-packages.test.cjs:802](<../../../../../../../electron/engine-packages.test.cjs#L802>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:870](<../../../../../../../electron/engine-packages.test.cjs#L870>) — file-import-only; coverage not established.

<a id="s-2b597d9318dee6c2"></a>

## packageSource.reference.&lt;anonymous@20:16&gt;

[electron/domains/knowledge/package-source.cjs:20](<../../../../../../../electron/domains/knowledge/package-source.cjs#L20>) · ArrowFunction · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [packageSource.reference](<package-source.cjs.md#s-5a15f265f6ea6ea9>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| menu | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/engine-packages.test.cjs:802](<../../../../../../../electron/engine-packages.test.cjs#L802>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:870](<../../../../../../../electron/engine-packages.test.cjs#L870>) — file-import-only; coverage not established.

<a id="s-ee5804642363a370"></a>

## packageSource.reference.&lt;anonymous@21:13&gt;

[electron/domains/knowledge/package-source.cjs:21](<../../../../../../../electron/domains/knowledge/package-source.cjs#L21>) · ArrowFunction · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [packageSource.reference](<package-source.cjs.md#s-5a15f265f6ea6ea9>).

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

- [electron/engine-packages.test.cjs:802](<../../../../../../../electron/engine-packages.test.cjs#L802>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:870](<../../../../../../../electron/engine-packages.test.cjs#L870>) — file-import-only; coverage not established.

<a id="s-7b26ccb1b51239b3"></a>

## packageSource.authorize

[electron/domains/knowledge/package-source.cjs:28](<../../../../../../../electron/domains/knowledge/package-source.cjs#L28>) · ArrowFunction · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [packageSource](<package-source.cjs.md#s-1884c4d4b5872c82>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| request | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [packageSource.reference](<package-source.cjs.md#s-5a15f265f6ea6ea9>) — [electron/domains/knowledge/package-source.cjs:29](<../../../../../../../electron/domains/knowledge/package-source.cjs#L29>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- assignment.authorize — external-or-dynamic-dispatch; [electron/domains/knowledge/package-source.cjs:35](<../../../../../../../electron/domains/knowledge/package-source.cjs#L35>)
- active — external-or-dynamic-dispatch; [electron/domains/knowledge/package-source.cjs:36](<../../../../../../../electron/domains/knowledge/package-source.cjs#L36>)

**Related tests / acceptance harnesses:**

- [electron/engine-packages.test.cjs:802](<../../../../../../../electron/engine-packages.test.cjs#L802>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:870](<../../../../../../../electron/engine-packages.test.cjs#L870>) — file-import-only; coverage not established.

<a id="s-f0f10e0a291fe8a1"></a>

## packageSource.&lt;anonymous@51:5&gt;

[electron/domains/knowledge/package-source.cjs:51](<../../../../../../../electron/domains/knowledge/package-source.cjs#L51>) · ArrowFunction · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [packageSource](<package-source.cjs.md#s-1884c4d4b5872c82>).

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

- [electron/engine-packages.test.cjs:802](<../../../../../../../electron/engine-packages.test.cjs#L802>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:870](<../../../../../../../electron/engine-packages.test.cjs#L870>) — file-import-only; coverage not established.

<a id="s-d1ad26848db7ddc7"></a>

## packageSource.&lt;anonymous@60:47&gt;

[electron/domains/knowledge/package-source.cjs:60](<../../../../../../../electron/domains/knowledge/package-source.cjs#L60>) · ArrowFunction · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [packageSource](<package-source.cjs.md#s-1884c4d4b5872c82>).

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

- [electron/engine-packages.test.cjs:802](<../../../../../../../electron/engine-packages.test.cjs#L802>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:870](<../../../../../../../electron/engine-packages.test.cjs#L870>) — file-import-only; coverage not established.

<a id="s-239d9ae185364eb3"></a>

## packageSource.&lt;anonymous@69:5&gt;

[electron/domains/knowledge/package-source.cjs:69](<../../../../../../../electron/domains/knowledge/package-source.cjs#L69>) · ArrowFunction · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [packageSource](<package-source.cjs.md#s-1884c4d4b5872c82>).

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

- [electron/engine-packages.test.cjs:802](<../../../../../../../electron/engine-packages.test.cjs#L802>) — file-import-only; coverage not established.
- [electron/engine-packages.test.cjs:870](<../../../../../../../electron/engine-packages.test.cjs#L870>) — file-import-only; coverage not established.
