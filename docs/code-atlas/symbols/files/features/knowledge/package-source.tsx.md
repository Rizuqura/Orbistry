# features/knowledge/package-source.tsx: symbols

[Atlas](<../../../../README.md>) / [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>) / [features/knowledge/package-source.tsx:1](<../../../../../../features/knowledge/package-source.tsx#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [features/knowledge/package-source.tsx](<package-source.tsx.md#s-39624bbcef5e8981>) (Module)
- [Result](<package-source.tsx.md#s-e5993b8ea252abc4>) (TypeAliasDeclaration)
- [PackageSource](<package-source.tsx.md#s-e35dc4578616f23a>) (FunctionDeclaration)
- [PackageSource.&lt;anonymous@20:13&gt;](<package-source.tsx.md#s-f523d34e84afaeb0>) (ArrowFunction)
- [PackageSource.&lt;anonymous@20:13&gt;.&lt;anonymous@29:9&gt;](<package-source.tsx.md#s-21be03a2aadf0cbf>) (ArrowFunction)
- [PackageSource.&lt;anonymous@20:13&gt;.&lt;anonymous@32:9&gt;](<package-source.tsx.md#s-22cf88774fb6562a>) (ArrowFunction)
- [PackageSource.&lt;anonymous@20:13&gt;.&lt;anonymous@36:12&gt;](<package-source.tsx.md#s-927adbb4a8dd7934>) (ArrowFunction)
- [PackageSource.request](<package-source.tsx.md#s-79a3c5c06726917d>) (FunctionDeclaration)
- [PackageSource.&lt;anonymous@62:40&gt;](<package-source.tsx.md#s-49bda40a20cd9797>) (ArrowFunction)
- [PackageSource.&lt;anonymous@66:42&gt;](<package-source.tsx.md#s-942024209c93b798>) (ArrowFunction)
- [SourceCatalog](<package-source.tsx.md#s-f00ffce34945a9ac>) (FunctionDeclaration)
- [SourceCatalog.&lt;anonymous@91:13&gt;](<package-source.tsx.md#s-0f4d9e693495bd1b>) (ArrowFunction)
- [SourceCatalog.&lt;anonymous@91:13&gt;.&lt;anonymous@96:9&gt;](<package-source.tsx.md#s-5e336f651129d7d8>) (ArrowFunction)
- [SourceCatalog.&lt;anonymous@91:13&gt;.&lt;anonymous@99:9&gt;](<package-source.tsx.md#s-dc6960158671287f>) (ArrowFunction)
- [SourceCatalog.&lt;anonymous@91:13&gt;.&lt;anonymous@103:12&gt;](<package-source.tsx.md#s-9e87696935bd69c4>) (ArrowFunction)
- [SourceCatalog.&lt;anonymous@111:32&gt;](<package-source.tsx.md#s-b760805f92543325>) (ArrowFunction)
- [SourceCatalog.&lt;anonymous@114:24&gt;](<package-source.tsx.md#s-9b6cf9ae39ec2d35>) (ArrowFunction)
- [SourceCatalog.&lt;anonymous@114:24&gt;.&lt;anonymous@115:28&gt;](<package-source.tsx.md#s-67dbc6217ef67c31>) (ArrowFunction)
- [SourceCatalog.&lt;anonymous@114:24&gt;.&lt;anonymous@115:28&gt;.&lt;anonymous@132:40&gt;](<package-source.tsx.md#s-c95da9d8e457913e>) (ArrowFunction)

<a id="s-39624bbcef5e8981"></a>

## features/knowledge/package-source.tsx

[features/knowledge/package-source.tsx:1](<../../../../../../features/knowledge/package-source.tsx#L1>) · Module · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-e5993b8ea252abc4"></a>

## Result

[features/knowledge/package-source.tsx:4](<../../../../../../features/knowledge/package-source.tsx#L4>) · TypeAliasDeclaration · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [features/knowledge/package-source.tsx](<package-source.tsx.md#s-39624bbcef5e8981>).

Contract evidence: typescript-declaration. [Full declaration index](<../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-e35dc4578616f23a"></a>

## PackageSource

[features/knowledge/package-source.tsx:7](<../../../../../../features/knowledge/package-source.tsx#L7>) · FunctionDeclaration · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

Shows availability locally and invokes a linked source only on an explicit click.

Purpose evidence: jsdoc.

Exported as: PackageSource ([features/knowledge/package-source.tsx:1](<../../../../../../features/knowledge/package-source.tsx#L1>)).

Lexical owner: [features/knowledge/package-source.tsx](<package-source.tsx.md#s-39624bbcef5e8981>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| {   vaultPath,   id,   declarationId,   label, } | { vaultPath: string; id: string; declarationId: string; label: string; } | annotation | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- useState — external-or-dynamic-dispatch; [features/knowledge/package-source.tsx:18](<../../../../../../features/knowledge/package-source.tsx#L18>)
- useState — external-or-dynamic-dispatch; [features/knowledge/package-source.tsx:19](<../../../../../../features/knowledge/package-source.tsx#L19>)
- useEffect — external-or-dynamic-dispatch; [features/knowledge/package-source.tsx:20](<../../../../../../features/knowledge/package-source.tsx#L20>)
- result.status.replaceAll — external-or-dynamic-dispatch; [features/knowledge/package-source.tsx:61](<../../../../../../features/knowledge/package-source.tsx#L61>)
- JSON.stringify — external-or-dynamic-dispatch; [features/knowledge/package-source.tsx:73](<../../../../../../features/knowledge/package-source.tsx#L73>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-f523d34e84afaeb0"></a>

## PackageSource.&lt;anonymous@20:13&gt;

[features/knowledge/package-source.tsx:20](<../../../../../../features/knowledge/package-source.tsx#L20>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [PackageSource](<package-source.tsx.md#s-e35dc4578616f23a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: () =&gt; void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [requireWorldViewBridge](<../worldview/chip-session.ts.md#s-724ceb52bd424e76>) — [features/knowledge/package-source.tsx:22](<../../../../../../features/knowledge/package-source.tsx#L22>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- requireWorldViewBridge() .request&lt;Result&gt;("package-source-status", { vaultPath, id, declarationId, }) .then — external-or-dynamic-dispatch; [features/knowledge/package-source.tsx:22](<../../../../../../features/knowledge/package-source.tsx#L22>)
- requireWorldViewBridge() .request — declaration-without-runtime-body; [features/knowledge/package-source.tsx:22](<../../../../../../features/knowledge/package-source.tsx#L22>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-21be03a2aadf0cbf"></a>

## PackageSource.&lt;anonymous@20:13&gt;.&lt;anonymous@29:9&gt;

[features/knowledge/package-source.tsx:29](<../../../../../../features/knowledge/package-source.tsx#L29>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [PackageSource.&lt;anonymous@20:13&gt;](<package-source.tsx.md#s-f523d34e84afaeb0>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- setResult — external-or-dynamic-dispatch; [features/knowledge/package-source.tsx:30](<../../../../../../features/knowledge/package-source.tsx#L30>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-22cf88774fb6562a"></a>

## PackageSource.&lt;anonymous@20:13&gt;.&lt;anonymous@32:9&gt;

[features/knowledge/package-source.tsx:32](<../../../../../../features/knowledge/package-source.tsx#L32>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [PackageSource.&lt;anonymous@20:13&gt;](<package-source.tsx.md#s-f523d34e84afaeb0>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| error | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- setResult — external-or-dynamic-dispatch; [features/knowledge/package-source.tsx:33](<../../../../../../features/knowledge/package-source.tsx#L33>)
- String — external-or-dynamic-dispatch; [features/knowledge/package-source.tsx:33](<../../../../../../features/knowledge/package-source.tsx#L33>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-927adbb4a8dd7934"></a>

## PackageSource.&lt;anonymous@20:13&gt;.&lt;anonymous@36:12&gt;

[features/knowledge/package-source.tsx:36](<../../../../../../features/knowledge/package-source.tsx#L36>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [PackageSource.&lt;anonymous@20:13&gt;](<package-source.tsx.md#s-f523d34e84afaeb0>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-79a3c5c06726917d"></a>

## PackageSource.request

[features/knowledge/package-source.tsx:41](<../../../../../../features/knowledge/package-source.tsx#L41>) · FunctionDeclaration · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

Rechecks package state on every click; the backend resolves all operation arguments.

Purpose evidence: jsdoc.

Lexical owner: [PackageSource](<package-source.tsx.md#s-e35dc4578616f23a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| run | boolean | annotation | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [requireWorldViewBridge](<../worldview/chip-session.ts.md#s-724ceb52bd424e76>) — [features/knowledge/package-source.tsx:45](<../../../../../../features/knowledge/package-source.tsx#L45>)

**Called by (statically resolved):**

- [PackageSource.&lt;anonymous@62:40&gt;](<package-source.tsx.md#s-49bda40a20cd9797>) — [features/knowledge/package-source.tsx:62](<../../../../../../features/knowledge/package-source.tsx#L62>)
- [PackageSource.&lt;anonymous@66:42&gt;](<package-source.tsx.md#s-942024209c93b798>) — [features/knowledge/package-source.tsx:66](<../../../../../../features/knowledge/package-source.tsx#L66>)

Unresolved / external call sites: 5.

- setBusy — external-or-dynamic-dispatch; [features/knowledge/package-source.tsx:42](<../../../../../../features/knowledge/package-source.tsx#L42>)
- setResult — external-or-dynamic-dispatch; [features/knowledge/package-source.tsx:44](<../../../../../../features/knowledge/package-source.tsx#L44>)
- requireWorldViewBridge().request — declaration-without-runtime-body; [features/knowledge/package-source.tsx:45](<../../../../../../features/knowledge/package-source.tsx#L45>)
- setResult — external-or-dynamic-dispatch; [features/knowledge/package-source.tsx:51](<../../../../../../features/knowledge/package-source.tsx#L51>)
- setBusy — external-or-dynamic-dispatch; [features/knowledge/package-source.tsx:55](<../../../../../../features/knowledge/package-source.tsx#L55>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-49bda40a20cd9797"></a>

## PackageSource.&lt;anonymous@62:40&gt;

[features/knowledge/package-source.tsx:62](<../../../../../../features/knowledge/package-source.tsx#L62>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [PackageSource](<package-source.tsx.md#s-e35dc4578616f23a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [PackageSource.request](<package-source.tsx.md#s-79a3c5c06726917d>) — [features/knowledge/package-source.tsx:62](<../../../../../../features/knowledge/package-source.tsx#L62>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-942024209c93b798"></a>

## PackageSource.&lt;anonymous@66:42&gt;

[features/knowledge/package-source.tsx:66](<../../../../../../features/knowledge/package-source.tsx#L66>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [PackageSource](<package-source.tsx.md#s-e35dc4578616f23a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [PackageSource.request](<package-source.tsx.md#s-79a3c5c06726917d>) — [features/knowledge/package-source.tsx:66](<../../../../../../features/knowledge/package-source.tsx#L66>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-f00ffce34945a9ac"></a>

## SourceCatalog

[features/knowledge/package-source.tsx:80](<../../../../../../features/knowledge/package-source.tsx#L80>) · FunctionDeclaration · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

Lists validated manifest descriptors while editing. Inputs come from the operation contract.

Purpose evidence: jsdoc.

Exported as: SourceCatalog ([features/knowledge/package-source.tsx:1](<../../../../../../features/knowledge/package-source.tsx#L1>)).

Lexical owner: [features/knowledge/package-source.tsx](<package-source.tsx.md#s-39624bbcef5e8981>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| {   vaultPath,   entityId, } | { vaultPath: string; entityId: string; } | annotation | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- useState — external-or-dynamic-dispatch; [features/knowledge/package-source.tsx:87](<../../../../../../features/knowledge/package-source.tsx#L87>)
- useState — external-or-dynamic-dispatch; [features/knowledge/package-source.tsx:90](<../../../../../../features/knowledge/package-source.tsx#L90>)
- useEffect — external-or-dynamic-dispatch; [features/knowledge/package-source.tsx:91](<../../../../../../features/knowledge/package-source.tsx#L91>)
- engines.some — external-or-dynamic-dispatch; [features/knowledge/package-source.tsx:111](<../../../../../../features/knowledge/package-source.tsx#L111>)
- engines.flatMap — external-or-dynamic-dispatch; [features/knowledge/package-source.tsx:114](<../../../../../../features/knowledge/package-source.tsx#L114>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-0f4d9e693495bd1b"></a>

## SourceCatalog.&lt;anonymous@91:13&gt;

[features/knowledge/package-source.tsx:91](<../../../../../../features/knowledge/package-source.tsx#L91>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [SourceCatalog](<package-source.tsx.md#s-f00ffce34945a9ac>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: () =&gt; void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- window.orbistryDesktop?.ai .enginePackageCatalog({ vaultPath, entityId }) .then — external-or-dynamic-dispatch; [features/knowledge/package-source.tsx:93](<../../../../../../features/knowledge/package-source.tsx#L93>)
- window.orbistryDesktop?.ai .enginePackageCatalog — external-or-dynamic-dispatch; [features/knowledge/package-source.tsx:93](<../../../../../../features/knowledge/package-source.tsx#L93>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-5e336f651129d7d8"></a>

## SourceCatalog.&lt;anonymous@91:13&gt;.&lt;anonymous@96:9&gt;

[features/knowledge/package-source.tsx:96](<../../../../../../features/knowledge/package-source.tsx#L96>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [SourceCatalog.&lt;anonymous@91:13&gt;](<package-source.tsx.md#s-0f4d9e693495bd1b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| catalog | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- setEngines — external-or-dynamic-dispatch; [features/knowledge/package-source.tsx:97](<../../../../../../features/knowledge/package-source.tsx#L97>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-dc6960158671287f"></a>

## SourceCatalog.&lt;anonymous@91:13&gt;.&lt;anonymous@99:9&gt;

[features/knowledge/package-source.tsx:99](<../../../../../../features/knowledge/package-source.tsx#L99>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [SourceCatalog.&lt;anonymous@91:13&gt;](<package-source.tsx.md#s-0f4d9e693495bd1b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- setError — external-or-dynamic-dispatch; [features/knowledge/package-source.tsx:100](<../../../../../../features/knowledge/package-source.tsx#L100>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-9e87696935bd69c4"></a>

## SourceCatalog.&lt;anonymous@91:13&gt;.&lt;anonymous@103:12&gt;

[features/knowledge/package-source.tsx:103](<../../../../../../features/knowledge/package-source.tsx#L103>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [SourceCatalog.&lt;anonymous@91:13&gt;](<package-source.tsx.md#s-0f4d9e693495bd1b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-b760805f92543325"></a>

## SourceCatalog.&lt;anonymous@111:32&gt;

[features/knowledge/package-source.tsx:111](<../../../../../../features/knowledge/package-source.tsx#L111>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [SourceCatalog](<package-source.tsx.md#s-f00ffce34945a9ac>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| engine | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-9b6cf9ae39ec2d35"></a>

## SourceCatalog.&lt;anonymous@114:24&gt;

[features/knowledge/package-source.tsx:114](<../../../../../../features/knowledge/package-source.tsx#L114>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [SourceCatalog](<package-source.tsx.md#s-f00ffce34945a9ac>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| engine | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- engine.sources.map — external-or-dynamic-dispatch; [features/knowledge/package-source.tsx:115](<../../../../../../features/knowledge/package-source.tsx#L115>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-67dbc6217ef67c31"></a>

## SourceCatalog.&lt;anonymous@114:24&gt;.&lt;anonymous@115:28&gt;

[features/knowledge/package-source.tsx:115](<../../../../../../features/knowledge/package-source.tsx#L115>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [SourceCatalog.&lt;anonymous@114:24&gt;](<package-source.tsx.md#s-9b6cf9ae39ec2d35>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| source | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- JSON.stringify — external-or-dynamic-dispatch; [features/knowledge/package-source.tsx:119](<../../../../../../features/knowledge/package-source.tsx#L119>)
- JSON.stringify — external-or-dynamic-dispatch; [features/knowledge/package-source.tsx:121](<../../../../../../features/knowledge/package-source.tsx#L121>)
- engine.version.split — external-or-dynamic-dispatch; [features/knowledge/package-source.tsx:123](<../../../../../../features/knowledge/package-source.tsx#L123>)
- JSON.stringify — external-or-dynamic-dispatch; [features/knowledge/package-source.tsx:131](<../../../../../../features/knowledge/package-source.tsx#L131>)
- engine.operations.find — external-or-dynamic-dispatch; [features/knowledge/package-source.tsx:132](<../../../../../../features/knowledge/package-source.tsx#L132>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-c95da9d8e457913e"></a>

## SourceCatalog.&lt;anonymous@114:24&gt;.&lt;anonymous@115:28&gt;.&lt;anonymous@132:40&gt;

[features/knowledge/package-source.tsx:132](<../../../../../../features/knowledge/package-source.tsx#L132>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [SourceCatalog.&lt;anonymous@114:24&gt;.&lt;anonymous@115:28&gt;](<package-source.tsx.md#s-67dbc6217ef67c31>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| op | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
