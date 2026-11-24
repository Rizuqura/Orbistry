# features/workspace/document-workspace.tsx: symbols

[Atlas](<../../../../README.md>) / [Document workspace](<../../../../modules/portal-documents.md>) / [features/workspace/document-workspace.tsx:1](<../../../../../../features/workspace/document-workspace.tsx#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [features/workspace/document-workspace.tsx](<document-workspace.tsx.md#s-0d1c2bd8ce81f5ba>) (Module)
- [DocumentWorkspace](<document-workspace.tsx.md#s-55aacba4a222e580>) (FunctionDeclaration)
- [DocumentWorkspace.&lt;anonymous@19:13&gt;](<document-workspace.tsx.md#s-483ad7d0b3f44baa>) (FunctionType)
- [DocumentWorkspace.&lt;anonymous@23:20&gt;](<document-workspace.tsx.md#s-4428c6e9cb5189ae>) (FunctionType)
- [DocumentWorkspace.&lt;anonymous@24:22&gt;](<document-workspace.tsx.md#s-abff6bdfe4bb5bbb>) (FunctionType)
- [DocumentWorkspace.&lt;anonymous@25:20&gt;](<document-workspace.tsx.md#s-78baa9d5b4332498>) (FunctionType)
- [DocumentWorkspace.&lt;anonymous@26:22&gt;](<document-workspace.tsx.md#s-ebbd1e560921f028>) (FunctionType)
- [DocumentWorkspace.&lt;anonymous@215:27&gt;](<document-workspace.tsx.md#s-b5fa32afcfe39cd5>) (ArrowFunction)
- [DocumentWorkspace.&lt;anonymous@216:28&gt;](<document-workspace.tsx.md#s-fe53094e2c8eb2cd>) (ArrowFunction)
- [stripExtension](<document-workspace.tsx.md#s-3a629b8065bcede4>) (FunctionDeclaration)
- [MarkdownContent](<document-workspace.tsx.md#s-cba84f1feb035e99>) (FunctionDeclaration)
- [CsvTable](<document-workspace.tsx.md#s-a29cd93c360f27a7>) (FunctionDeclaration)
- [CsvTable.&lt;anonymous@282:26&gt;](<document-workspace.tsx.md#s-daf1e5810d6151dd>) (ArrowFunction)
- [CsvTable.&lt;anonymous@288:28&gt;](<document-workspace.tsx.md#s-f9a9450b3455aa7e>) (ArrowFunction)
- [CsvTable.&lt;anonymous@288:28&gt;.&lt;anonymous@290:28&gt;](<document-workspace.tsx.md#s-b1059d2d7f7a0c7c>) (ArrowFunction)

<a id="s-0d1c2bd8ce81f5ba"></a>

## features/workspace/document-workspace.tsx

[features/workspace/document-workspace.tsx:1](<../../../../../../features/workspace/document-workspace.tsx#L1>) · Module · production · [Document workspace](<../../../../modules/portal-documents.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-55aacba4a222e580"></a>

## DocumentWorkspace

[features/workspace/document-workspace.tsx:5](<../../../../../../features/workspace/document-workspace.tsx#L5>) · FunctionDeclaration · production · [Document workspace](<../../../../modules/portal-documents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: DocumentWorkspace ([features/workspace/document-workspace.tsx:1](<../../../../../../features/workspace/document-workspace.tsx#L1>)).

Lexical owner: [features/workspace/document-workspace.tsx](<document-workspace.tsx.md#s-0d1c2bd8ce81f5ba>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| {   file,   error,   onClose,   markdownDraft = null,   markdownSaving,   markdownError,   onEditMarkdown,   onMarkdownChange,   onSaveMarkdown,   onCancelMarkdown, } | Readonly&lt;{ file: VaultFile &#124; VaultPdfFile &#124; null; error?: string &#124; null; onClose?: () =&gt; void; markdownDraft?: string &#124; null; markdownSaving?: boolean; markdownError?: string &#124; null; onEditMarkdown?: () =&gt; void; onMarkdownChange?: (content: string) =&gt; void; onSaveMarkdown?: () =&gt; void; onCancelMarkdown?: () =&gt; void; }&gt; | annotation | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [stripExtension](<document-workspace.tsx.md#s-3a629b8065bcede4>) — [features/workspace/document-workspace.tsx:189](<../../../../../../features/workspace/document-workspace.tsx#L189>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- file.relativePath.split — external-or-dynamic-dispatch; [features/workspace/document-workspace.tsx:66](<../../../../../../features/workspace/document-workspace.tsx#L66>)
- file.content.replace — external-or-dynamic-dispatch; [features/workspace/document-workspace.tsx:129](<../../../../../../features/workspace/document-workspace.tsx#L129>)
- segments.slice(0, -1).join — external-or-dynamic-dispatch; [features/workspace/document-workspace.tsx:180](<../../../../../../features/workspace/document-workspace.tsx#L180>)
- segments.slice — external-or-dynamic-dispatch; [features/workspace/document-workspace.tsx:180](<../../../../../../features/workspace/document-workspace.tsx#L180>)
- file.extension.toUpperCase — external-or-dynamic-dispatch; [features/workspace/document-workspace.tsx:196](<../../../../../../features/workspace/document-workspace.tsx#L196>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-483ad7d0b3f44baa"></a>

## DocumentWorkspace.&lt;anonymous@19:13&gt;

[features/workspace/document-workspace.tsx:19](<../../../../../../features/workspace/document-workspace.tsx#L19>) · FunctionType · production · [Document workspace](<../../../../modules/portal-documents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [DocumentWorkspace](<document-workspace.tsx.md#s-55aacba4a222e580>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-4428c6e9cb5189ae"></a>

## DocumentWorkspace.&lt;anonymous@23:20&gt;

[features/workspace/document-workspace.tsx:23](<../../../../../../features/workspace/document-workspace.tsx#L23>) · FunctionType · production · [Document workspace](<../../../../modules/portal-documents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [DocumentWorkspace](<document-workspace.tsx.md#s-55aacba4a222e580>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-abff6bdfe4bb5bbb"></a>

## DocumentWorkspace.&lt;anonymous@24:22&gt;

[features/workspace/document-workspace.tsx:24](<../../../../../../features/workspace/document-workspace.tsx#L24>) · FunctionType · production · [Document workspace](<../../../../modules/portal-documents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [DocumentWorkspace](<document-workspace.tsx.md#s-55aacba4a222e580>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| content | string | annotation | required |

Returns: void (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-78baa9d5b4332498"></a>

## DocumentWorkspace.&lt;anonymous@25:20&gt;

[features/workspace/document-workspace.tsx:25](<../../../../../../features/workspace/document-workspace.tsx#L25>) · FunctionType · production · [Document workspace](<../../../../modules/portal-documents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [DocumentWorkspace](<document-workspace.tsx.md#s-55aacba4a222e580>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-ebbd1e560921f028"></a>

## DocumentWorkspace.&lt;anonymous@26:22&gt;

[features/workspace/document-workspace.tsx:26](<../../../../../../features/workspace/document-workspace.tsx#L26>) · FunctionType · production · [Document workspace](<../../../../modules/portal-documents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [DocumentWorkspace](<document-workspace.tsx.md#s-55aacba4a222e580>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-b5fa32afcfe39cd5"></a>

## DocumentWorkspace.&lt;anonymous@215:27&gt;

[features/workspace/document-workspace.tsx:215](<../../../../../../features/workspace/document-workspace.tsx#L215>) · ArrowFunction · production · [Document workspace](<../../../../modules/portal-documents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [DocumentWorkspace](<document-workspace.tsx.md#s-55aacba4a222e580>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| event | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- onMarkdownChange — external-or-dynamic-dispatch; [features/workspace/document-workspace.tsx:215](<../../../../../../features/workspace/document-workspace.tsx#L215>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-fe53094e2c8eb2cd"></a>

## DocumentWorkspace.&lt;anonymous@216:28&gt;

[features/workspace/document-workspace.tsx:216](<../../../../../../features/workspace/document-workspace.tsx#L216>) · ArrowFunction · production · [Document workspace](<../../../../modules/portal-documents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [DocumentWorkspace](<document-workspace.tsx.md#s-55aacba4a222e580>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| event | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- event.key.toLowerCase — external-or-dynamic-dispatch; [features/workspace/document-workspace.tsx:219](<../../../../../../features/workspace/document-workspace.tsx#L219>)
- event.preventDefault — external-or-dynamic-dispatch; [features/workspace/document-workspace.tsx:221](<../../../../../../features/workspace/document-workspace.tsx#L221>)
- onSaveMarkdown — external-or-dynamic-dispatch; [features/workspace/document-workspace.tsx:222](<../../../../../../features/workspace/document-workspace.tsx#L222>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-3a629b8065bcede4"></a>

## stripExtension

[features/workspace/document-workspace.tsx:242](<../../../../../../features/workspace/document-workspace.tsx#L242>) · FunctionDeclaration · production · [Document workspace](<../../../../modules/portal-documents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [features/workspace/document-workspace.tsx](<document-workspace.tsx.md#s-0d1c2bd8ce81f5ba>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| name | string | annotation | required |

Returns: string (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [DocumentWorkspace](<document-workspace.tsx.md#s-55aacba4a222e580>) — [features/workspace/document-workspace.tsx:189](<../../../../../../features/workspace/document-workspace.tsx#L189>)

Unresolved / external call sites: 1.

- name.replace — external-or-dynamic-dispatch; [features/workspace/document-workspace.tsx:243](<../../../../../../features/workspace/document-workspace.tsx#L243>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-cba84f1feb035e99"></a>

## MarkdownContent

[features/workspace/document-workspace.tsx:247](<../../../../../../features/workspace/document-workspace.tsx#L247>) · FunctionDeclaration · production · [Document workspace](<../../../../modules/portal-documents.md>)

Displays original Markdown as escaped, read-only source text.

Purpose evidence: jsdoc.

Exported as: MarkdownContent ([features/workspace/document-workspace.tsx:1](<../../../../../../features/workspace/document-workspace.tsx#L1>)).

Lexical owner: [features/workspace/document-workspace.tsx](<document-workspace.tsx.md#s-0d1c2bd8ce81f5ba>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { content } | Readonly&lt;{ content: string }&gt; | annotation | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-a29cd93c360f27a7"></a>

## CsvTable

[features/workspace/document-workspace.tsx:256](<../../../../../../features/workspace/document-workspace.tsx#L256>) · FunctionDeclaration · production · [Document workspace](<../../../../modules/portal-documents.md>)

Displays original CSV cells with optional preview row/column limits and explicit malformed-input feedback.

Purpose evidence: jsdoc.

Exported as: CsvTable ([features/workspace/document-workspace.tsx:1](<../../../../../../features/workspace/document-workspace.tsx#L1>)).

Lexical owner: [features/workspace/document-workspace.tsx](<document-workspace.tsx.md#s-0d1c2bd8ce81f5ba>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| {   content,   maxRows,   maxColumns, } | Readonly&lt;{ content: string; maxRows?: number; maxColumns?: number }&gt; | annotation | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [decodeCsvPreview](<../knowledge/csv-preview.ts.md#s-594c4e5e07860c63>) — [features/workspace/document-workspace.tsx:263](<../../../../../../features/workspace/document-workspace.tsx#L263>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- records&#91;0&#93;.slice — external-or-dynamic-dispatch; [features/workspace/document-workspace.tsx:274](<../../../../../../features/workspace/document-workspace.tsx#L274>)
- records.slice — external-or-dynamic-dispatch; [features/workspace/document-workspace.tsx:275](<../../../../../../features/workspace/document-workspace.tsx#L275>)
- rows.slice — external-or-dynamic-dispatch; [features/workspace/document-workspace.tsx:276](<../../../../../../features/workspace/document-workspace.tsx#L276>)
- headers.map — external-or-dynamic-dispatch; [features/workspace/document-workspace.tsx:282](<../../../../../../features/workspace/document-workspace.tsx#L282>)
- visibleRows.map — external-or-dynamic-dispatch; [features/workspace/document-workspace.tsx:288](<../../../../../../features/workspace/document-workspace.tsx#L288>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-daf1e5810d6151dd"></a>

## CsvTable.&lt;anonymous@282:26&gt;

[features/workspace/document-workspace.tsx:282](<../../../../../../features/workspace/document-workspace.tsx#L282>) · ArrowFunction · production · [Document workspace](<../../../../modules/portal-documents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [CsvTable](<document-workspace.tsx.md#s-a29cd93c360f27a7>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| header | any | compiler-inferred | required |
| index | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-f9a9450b3455aa7e"></a>

## CsvTable.&lt;anonymous@288:28&gt;

[features/workspace/document-workspace.tsx:288](<../../../../../../features/workspace/document-workspace.tsx#L288>) · ArrowFunction · production · [Document workspace](<../../../../modules/portal-documents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [CsvTable](<document-workspace.tsx.md#s-a29cd93c360f27a7>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| row | any | compiler-inferred | required |
| rowIndex | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- headers.map — external-or-dynamic-dispatch; [features/workspace/document-workspace.tsx:290](<../../../../../../features/workspace/document-workspace.tsx#L290>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-b1059d2d7f7a0c7c"></a>

## CsvTable.&lt;anonymous@288:28&gt;.&lt;anonymous@290:28&gt;

[features/workspace/document-workspace.tsx:290](<../../../../../../features/workspace/document-workspace.tsx#L290>) · ArrowFunction · production · [Document workspace](<../../../../modules/portal-documents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [CsvTable.&lt;anonymous@288:28&gt;](<document-workspace.tsx.md#s-f9a9450b3455aa7e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| _ | any | compiler-inferred | required |
| cellIndex | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
