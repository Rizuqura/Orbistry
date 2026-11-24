# features/knowledge/source-preview.tsx: symbols

[Atlas](<../../../../README.md>) / [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>) / [features/knowledge/source-preview.tsx:1](<../../../../../../features/knowledge/source-preview.tsx#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [features/knowledge/source-preview.tsx](<source-preview.tsx.md#s-7a89ca781eb7ca3b>) (Module)
- [SourcePreview](<source-preview.tsx.md#s-6ab24bde8475f00a>) (FunctionDeclaration)
- [SourcePreview.loadPreview](<source-preview.tsx.md#s-94839dee0bfd0dd8>) (FunctionExpression)
- [SourcePreview.loadPreview.loaded](<source-preview.tsx.md#s-cc5fd0b4088d0861>) (FunctionExpression)
- [SourcePreview.loadPreview.failed](<source-preview.tsx.md#s-56b84287d8842d18>) (FunctionExpression)
- [SourcePreview.loadPreview.&lt;anonymous@57:14&gt;](<source-preview.tsx.md#s-ab1ce673a1bf4bca>) (ArrowFunction)
- [SourcePreview.locateOriginal](<source-preview.tsx.md#s-1f3c37bba8a58dfb>) (FunctionDeclaration)
- [SourcePreview.&lt;anonymous@149:20&gt;](<source-preview.tsx.md#s-f932b608a36c5a0e>) (ArrowFunction)
- [SourcePreview.&lt;anonymous@163:20&gt;](<source-preview.tsx.md#s-9ceb283174ed220a>) (ArrowFunction)
- [SourcePreview.&lt;anonymous@169:42&gt;](<source-preview.tsx.md#s-fcfe5a6f20a75bba>) (ArrowFunction)

<a id="s-7a89ca781eb7ca3b"></a>

## features/knowledge/source-preview.tsx

[features/knowledge/source-preview.tsx:1](<../../../../../../features/knowledge/source-preview.tsx#L1>) · Module · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-6ab24bde8475f00a"></a>

## SourcePreview

[features/knowledge/source-preview.tsx:15](<../../../../../../features/knowledge/source-preview.tsx#L15>) · FunctionDeclaration · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

Resolves an applied source through the guarded preview API, rendering attributed document widgets and read-only original viewers.

Purpose evidence: jsdoc.

Exported as: SourcePreview ([features/knowledge/source-preview.tsx:1](<../../../../../../features/knowledge/source-preview.tsx#L1>)).

Lexical owner: [features/knowledge/source-preview.tsx](<source-preview.tsx.md#s-7a89ca781eb7ca3b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| {   entityId,   vaultPath,   sourceId,   assigned, } | Readonly&lt;{ entityId: string; vaultPath: string; sourceId: string; assigned?: WorldViewSource; }&gt; | annotation | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 7.

- useState — external-or-dynamic-dispatch; [features/knowledge/source-preview.tsx:26](<../../../../../../features/knowledge/source-preview.tsx#L26>)
- useState — external-or-dynamic-dispatch; [features/knowledge/source-preview.tsx:27](<../../../../../../features/knowledge/source-preview.tsx#L27>)
- useState — external-or-dynamic-dispatch; [features/knowledge/source-preview.tsx:28](<../../../../../../features/knowledge/source-preview.tsx#L28>)
- useState — external-or-dynamic-dispatch; [features/knowledge/source-preview.tsx:29](<../../../../../../features/knowledge/source-preview.tsx#L29>)
- useEffect — external-or-dynamic-dispatch; [features/knowledge/source-preview.tsx:31](<../../../../../../features/knowledge/source-preview.tsx#L31>)
- &#91;".md", ".markdown"&#93;.includes — external-or-dynamic-dispatch; [features/knowledge/source-preview.tsx:125](<../../../../../../features/knowledge/source-preview.tsx#L125>)
- file.extension.toLowerCase — external-or-dynamic-dispatch; [features/knowledge/source-preview.tsx:125](<../../../../../../features/knowledge/source-preview.tsx#L125>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-94839dee0bfd0dd8"></a>

## SourcePreview.loadPreview

[features/knowledge/source-preview.tsx:32](<../../../../../../features/knowledge/source-preview.tsx#L32>) · FunctionExpression · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [SourcePreview](<source-preview.tsx.md#s-6ab24bde8475f00a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: () =&gt; void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [requireWorldViewBridge](<../worldview/chip-session.ts.md#s-724ceb52bd424e76>) — [features/knowledge/source-preview.tsx:37](<../../../../../../features/knowledge/source-preview.tsx#L37>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- setFile — external-or-dynamic-dispatch; [features/knowledge/source-preview.tsx:34](<../../../../../../features/knowledge/source-preview.tsx#L34>)
- setError — external-or-dynamic-dispatch; [features/knowledge/source-preview.tsx:35](<../../../../../../features/knowledge/source-preview.tsx#L35>)
- requireWorldViewBridge() .request&lt;KnowledgeSourcePreview&gt;("knowledge-preview", { vaultPath, id: entityId, sourceId, }) .then — external-or-dynamic-dispatch; [features/knowledge/source-preview.tsx:37](<../../../../../../features/knowledge/source-preview.tsx#L37>)
- requireWorldViewBridge() .request — declaration-without-runtime-body; [features/knowledge/source-preview.tsx:37](<../../../../../../features/knowledge/source-preview.tsx#L37>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-cc5fd0b4088d0861"></a>

## SourcePreview.loadPreview.loaded

[features/knowledge/source-preview.tsx:44](<../../../../../../features/knowledge/source-preview.tsx#L44>) · FunctionExpression · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [SourcePreview.loadPreview](<source-preview.tsx.md#s-94839dee0bfd0dd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- setFile — external-or-dynamic-dispatch; [features/knowledge/source-preview.tsx:45](<../../../../../../features/knowledge/source-preview.tsx#L45>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-56b84287d8842d18"></a>

## SourcePreview.loadPreview.failed

[features/knowledge/source-preview.tsx:47](<../../../../../../features/knowledge/source-preview.tsx#L47>) · FunctionExpression · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [SourcePreview.loadPreview](<source-preview.tsx.md#s-94839dee0bfd0dd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| cause | unknown | annotation | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- setError — external-or-dynamic-dispatch; [features/knowledge/source-preview.tsx:49](<../../../../../../features/knowledge/source-preview.tsx#L49>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-ab1ce673a1bf4bca"></a>

## SourcePreview.loadPreview.&lt;anonymous@57:14&gt;

[features/knowledge/source-preview.tsx:57](<../../../../../../features/knowledge/source-preview.tsx#L57>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [SourcePreview.loadPreview](<source-preview.tsx.md#s-94839dee0bfd0dd8>).

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

<a id="s-1f3c37bba8a58dfb"></a>

## SourcePreview.locateOriginal

[features/knowledge/source-preview.tsx:73](<../../../../../../features/knowledge/source-preview.tsx#L73>) · FunctionDeclaration · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

Reveals an authorized original through the existing shell and surfaces any file availability failure.

Purpose evidence: jsdoc.

Lexical owner: [SourcePreview](<source-preview.tsx.md#s-6ab24bde8475f00a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: Promise&lt;void&gt; (annotation). Implementation present.

**Calls (statically resolved):**

- [requireWorldViewBridge](<../worldview/chip-session.ts.md#s-724ceb52bd424e76>) — [features/knowledge/source-preview.tsx:76](<../../../../../../features/knowledge/source-preview.tsx#L76>)

**Called by (statically resolved):**

- [SourcePreview.&lt;anonymous@163:20&gt;](<source-preview.tsx.md#s-9ceb283174ed220a>) — [features/knowledge/source-preview.tsx:163](<../../../../../../features/knowledge/source-preview.tsx#L163>)

Unresolved / external call sites: 4.

- setLocating — external-or-dynamic-dispatch; [features/knowledge/source-preview.tsx:74](<../../../../../../features/knowledge/source-preview.tsx#L74>)
- requireWorldViewBridge().request — declaration-without-runtime-body; [features/knowledge/source-preview.tsx:76](<../../../../../../features/knowledge/source-preview.tsx#L76>)
- setError — external-or-dynamic-dispatch; [features/knowledge/source-preview.tsx:82](<../../../../../../features/knowledge/source-preview.tsx#L82>)
- setLocating — external-or-dynamic-dispatch; [features/knowledge/source-preview.tsx:88](<../../../../../../features/knowledge/source-preview.tsx#L88>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-f932b608a36c5a0e"></a>

## SourcePreview.&lt;anonymous@149:20&gt;

[features/knowledge/source-preview.tsx:149](<../../../../../../features/knowledge/source-preview.tsx#L149>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [SourcePreview](<source-preview.tsx.md#s-6ab24bde8475f00a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- setError — external-or-dynamic-dispatch; [features/knowledge/source-preview.tsx:150](<../../../../../../features/knowledge/source-preview.tsx#L150>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-9ceb283174ed220a"></a>

## SourcePreview.&lt;anonymous@163:20&gt;

[features/knowledge/source-preview.tsx:163](<../../../../../../features/knowledge/source-preview.tsx#L163>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [SourcePreview](<source-preview.tsx.md#s-6ab24bde8475f00a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [SourcePreview.locateOriginal](<source-preview.tsx.md#s-1f3c37bba8a58dfb>) — [features/knowledge/source-preview.tsx:163](<../../../../../../features/knowledge/source-preview.tsx#L163>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-fcfe5a6f20a75bba"></a>

## SourcePreview.&lt;anonymous@169:42&gt;

[features/knowledge/source-preview.tsx:169](<../../../../../../features/knowledge/source-preview.tsx#L169>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [SourcePreview](<source-preview.tsx.md#s-6ab24bde8475f00a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- setRetry — external-or-dynamic-dispatch; [features/knowledge/source-preview.tsx:169](<../../../../../../features/knowledge/source-preview.tsx#L169>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
