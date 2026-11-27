# electron/engines/backend-identity/package-sources.cjs: symbols

[Atlas](<../../../../../README.md>) / [Backend Identity Engine](<../../../../../modules/identity.md>) / [electron/engines/backend-identity/package-sources.cjs:1](<../../../../../../../electron/engines/backend-identity/package-sources.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/engines/backend-identity/package-sources.cjs](<package-sources.cjs.md#s-2af530469af95fa2>) (Module)
- [describePackageSources](<package-sources.cjs.md#s-94666ad1ea56bbdc>) (FunctionDeclaration)
- [describePackageSources.&lt;anonymous@4:44&gt;](<package-sources.cjs.md#s-f3aa924c84f42223>) (ArrowFunction)
- [describePackageSources.&lt;anonymous@4:44&gt;.&lt;anonymous@5:40&gt;](<package-sources.cjs.md#s-2dffc8a1a798448b>) (ArrowFunction)
- [describePackageSources.&lt;anonymous@4:44&gt;.&lt;anonymous@6:32&gt;](<package-sources.cjs.md#s-a85c332fdf117885>) (ArrowFunction)
- [describePackageSources.&lt;anonymous@4:44&gt;.&lt;anonymous@12:33&gt;](<package-sources.cjs.md#s-6bd5bba9dfada8d6>) (ArrowFunction)
- [describePackageSources.&lt;anonymous@64:38&gt;](<package-sources.cjs.md#s-b542f5018cf0be85>) (ArrowFunction)
- [describePackageSources.&lt;anonymous@67:11&gt;](<package-sources.cjs.md#s-825eb3cc57cebbc7>) (ArrowFunction)
- [describePackageSources.&lt;anonymous@74:11&gt;](<package-sources.cjs.md#s-206956fd798536c6>) (ArrowFunction)
- [validInput](<package-sources.cjs.md#s-b29dcc40c328ce24>) (FunctionDeclaration)

<a id="s-2af530469af95fa2"></a>

## electron/engines/backend-identity/package-sources.cjs

[electron/engines/backend-identity/package-sources.cjs:1](<../../../../../../../electron/engines/backend-identity/package-sources.cjs#L1>) · Module · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- require — module-loader; [electron/engines/backend-identity/package-sources.cjs:1](<../../../../../../../electron/engines/backend-identity/package-sources.cjs#L1>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-94666ad1ea56bbdc"></a>

## describePackageSources

[electron/engines/backend-identity/package-sources.cjs:3](<../../../../../../../electron/engines/backend-identity/package-sources.cjs#L3>) · FunctionDeclaration · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

Describes configured package sources for Identity without loading code, authorizing execution or copying provider data.

Purpose evidence: jsdoc.

Exported as: describePackageSources ([electron/engines/backend-identity/package-sources.cjs:1](<../../../../../../../electron/engines/backend-identity/package-sources.cjs#L1>)).

Lexical owner: [electron/engines/backend-identity/package-sources.cjs](<package-sources.cjs.md#s-2af530469af95fa2>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| entityId | any | compiler-inferred | required |
| index | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [EnginePackageRegistry.constructor](<../registry/registry.cjs.md#s-0e6ad7bd522e9fad>) — [electron/engines/backend-identity/package-sources.cjs:22](<../../../../../../../electron/engines/backend-identity/package-sources.cjs#L22>)
- [EnginePackageRegistry.read](<../registry/registry.cjs.md#s-abffabd42b530015>) — [electron/engines/backend-identity/package-sources.cjs:23](<../../../../../../../electron/engines/backend-identity/package-sources.cjs#L23>)
- [EnginePackageRegistry.installed](<../registry/registry.cjs.md#s-4b2796c726a80a4b>) — [electron/engines/backend-identity/package-sources.cjs:37](<../../../../../../../electron/engines/backend-identity/package-sources.cjs#L37>)
- [validInput](<package-sources.cjs.md#s-b29dcc40c328ce24>) — [electron/engines/backend-identity/package-sources.cjs:80](<../../../../../../../electron/engines/backend-identity/package-sources.cjs#L80>)

**Called by (statically resolved):**

- [capture](<identity-compiler.cjs.md#s-1f99e7da5df73158>) — [electron/engines/backend-identity/identity-compiler.cjs:227](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L227>)

Unresolved / external call sites: 16.

- index.menus.flatMap — external-or-dynamic-dispatch; [electron/engines/backend-identity/package-sources.cjs:4](<../../../../../../../electron/engines/backend-identity/package-sources.cjs#L4>)
- Error — external-or-dynamic-dispatch; [electron/engines/backend-identity/package-sources.cjs:21](<../../../../../../../electron/engines/backend-identity/package-sources.cjs#L21>)
- Map — external-or-dynamic-dispatch; [electron/engines/backend-identity/package-sources.cjs:24](<../../../../../../../electron/engines/backend-identity/package-sources.cjs#L24>)
- Object.hasOwn — external-or-dynamic-dispatch; [electron/engines/backend-identity/package-sources.cjs:32](<../../../../../../../electron/engines/backend-identity/package-sources.cjs#L32>)
- packages.has — external-or-dynamic-dispatch; [electron/engines/backend-identity/package-sources.cjs:33](<../../../../../../../electron/engines/backend-identity/package-sources.cjs#L33>)
- packages.set — external-or-dynamic-dispatch; [electron/engines/backend-identity/package-sources.cjs:35](<../../../../../../../electron/engines/backend-identity/package-sources.cjs#L35>)
- &#91; "ENOENT", "ENGINE_INTEGRITY_FAILED", "ENGINE_CHANGED", "ENGINE_JSON_INVALID", "ENGINE_FILE_INVALID", "ENGINE_SIGNATURE_INVALID", "ENGINE_PACKAGE_TOO_LARGE", "ENGINE_MANIFEST_INVA — external-or-dynamic-dispatch; [electron/engines/backend-identity/package-sources.cjs:41](<../../../../../../../electron/engines/backend-identity/package-sources.cjs#L41>)
- packages.set — external-or-dynamic-dispatch; [electron/engines/backend-identity/package-sources.cjs:55](<../../../../../../../electron/engines/backend-identity/package-sources.cjs#L55>)
- 8 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-f3aa924c84f42223"></a>

## describePackageSources.&lt;anonymous@4:44&gt;

[electron/engines/backend-identity/package-sources.cjs:4](<../../../../../../../electron/engines/backend-identity/package-sources.cjs#L4>) · ArrowFunction · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [describePackageSources](<package-sources.cjs.md#s-94666ad1ea56bbdc>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| menu | any | compiler-inferred | required |

Returns: {} (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- (menu.packageSources ?? &#91;&#93;).map — external-or-dynamic-dispatch; [electron/engines/backend-identity/package-sources.cjs:5](<../../../../../../../electron/engines/backend-identity/package-sources.cjs#L5>)
- (menu.prices ?? &#91;&#93;).map — external-or-dynamic-dispatch; [electron/engines/backend-identity/package-sources.cjs:6](<../../../../../../../electron/engines/backend-identity/package-sources.cjs#L6>)
- (menu.finance ?? &#91;&#93;).map — external-or-dynamic-dispatch; [electron/engines/backend-identity/package-sources.cjs:12](<../../../../../../../electron/engines/backend-identity/package-sources.cjs#L12>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-2dffc8a1a798448b"></a>

## describePackageSources.&lt;anonymous@4:44&gt;.&lt;anonymous@5:40&gt;

[electron/engines/backend-identity/package-sources.cjs:5](<../../../../../../../electron/engines/backend-identity/package-sources.cjs#L5>) · ArrowFunction · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [describePackageSources.&lt;anonymous@4:44&gt;](<package-sources.cjs.md#s-f3aa924c84f42223>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| ref | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-a85c332fdf117885"></a>

## describePackageSources.&lt;anonymous@4:44&gt;.&lt;anonymous@6:32&gt;

[electron/engines/backend-identity/package-sources.cjs:6](<../../../../../../../electron/engines/backend-identity/package-sources.cjs#L6>) · ArrowFunction · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [describePackageSources.&lt;anonymous@4:44&gt;](<package-sources.cjs.md#s-f3aa924c84f42223>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| item | any | compiler-inferred | required |

Returns: { id: any; engineId: string; sourceId: string; major: number; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-6bd5bba9dfada8d6"></a>

## describePackageSources.&lt;anonymous@4:44&gt;.&lt;anonymous@12:33&gt;

[electron/engines/backend-identity/package-sources.cjs:12](<../../../../../../../electron/engines/backend-identity/package-sources.cjs#L12>) · ArrowFunction · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [describePackageSources.&lt;anonymous@4:44&gt;](<package-sources.cjs.md#s-f3aa924c84f42223>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| item | any | compiler-inferred | required |

Returns: { id: any; engineId: string; sourceId: any; major: number; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-b542f5018cf0be85"></a>

## describePackageSources.&lt;anonymous@64:38&gt;

[electron/engines/backend-identity/package-sources.cjs:64](<../../../../../../../electron/engines/backend-identity/package-sources.cjs#L64>) · ArrowFunction · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [describePackageSources](<package-sources.cjs.md#s-94666ad1ea56bbdc>).

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

<a id="s-825eb3cc57cebbc7"></a>

## describePackageSources.&lt;anonymous@67:11&gt;

[electron/engines/backend-identity/package-sources.cjs:67](<../../../../../../../electron/engines/backend-identity/package-sources.cjs#L67>) · ArrowFunction · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [describePackageSources](<package-sources.cjs.md#s-94666ad1ea56bbdc>).

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

<a id="s-206956fd798536c6"></a>

## describePackageSources.&lt;anonymous@74:11&gt;

[electron/engines/backend-identity/package-sources.cjs:74](<../../../../../../../electron/engines/backend-identity/package-sources.cjs#L74>) · ArrowFunction · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [describePackageSources](<package-sources.cjs.md#s-94666ad1ea56bbdc>).

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

<a id="s-b29dcc40c328ce24"></a>

## validInput

[electron/engines/backend-identity/package-sources.cjs:106](<../../../../../../../electron/engines/backend-identity/package-sources.cjs#L106>) · FunctionDeclaration · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

Marks an invalid saved argument locally without invalidating the rest of the Identity.

Purpose evidence: jsdoc.

Lexical owner: [electron/engines/backend-identity/package-sources.cjs](<package-sources.cjs.md#s-2af530469af95fa2>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| contract | any | compiler-inferred | required |
| input | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [validateData](<../contracts/contract.cjs.md#s-567344da6db54f40>) — [electron/engines/backend-identity/package-sources.cjs:108](<../../../../../../../electron/engines/backend-identity/package-sources.cjs#L108>)

**Called by (statically resolved):**

- [describePackageSources](<package-sources.cjs.md#s-94666ad1ea56bbdc>) — [electron/engines/backend-identity/package-sources.cjs:80](<../../../../../../../electron/engines/backend-identity/package-sources.cjs#L80>)

Unresolved / external call sites: 1.

- require — module-loader; [electron/engines/backend-identity/package-sources.cjs:108](<../../../../../../../electron/engines/backend-identity/package-sources.cjs#L108>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
