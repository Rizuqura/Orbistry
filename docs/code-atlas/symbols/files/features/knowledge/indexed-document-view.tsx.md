# features/knowledge/indexed-document-view.tsx: symbols

[Atlas](<../../../../README.md>) / [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>) / [features/knowledge/indexed-document-view.tsx:1](<../../../../../../features/knowledge/indexed-document-view.tsx#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [features/knowledge/indexed-document-view.tsx](<indexed-document-view.tsx.md#s-82020c62107fcb4f>) (Module)
- [IndexedDocument](<indexed-document-view.tsx.md#s-9449de2e26e528ab>) (FunctionDeclaration)
- [IndexedDocument.&lt;anonymous@26:23&gt;](<indexed-document-view.tsx.md#s-0cd73c2cfd07280b>) (ArrowFunction)
- [IndexedDocument.&lt;anonymous@26:23&gt;.&lt;anonymous@37:37&gt;](<indexed-document-view.tsx.md#s-2a7a0cc4b5c8c96e>) (ArrowFunction)
- [IndexedDocument.&lt;anonymous@60:19&gt;](<indexed-document-view.tsx.md#s-7b84ac3b1a8b5ce6>) (ArrowFunction)

<a id="s-82020c62107fcb4f"></a>

## features/knowledge/indexed-document-view.tsx

[features/knowledge/indexed-document-view.tsx:1](<../../../../../../features/knowledge/indexed-document-view.tsx#L1>) · Module · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-9449de2e26e528ab"></a>

## IndexedDocument

[features/knowledge/indexed-document-view.tsx:8](<../../../../../../features/knowledge/indexed-document-view.tsx#L8>) · FunctionDeclaration · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

Presents explicit document sections as attributed widgets, with the complete original rendering available on demand.

Purpose evidence: jsdoc.

Exported as: IndexedDocument ([features/knowledge/indexed-document-view.tsx:1](<../../../../../../features/knowledge/indexed-document-view.tsx#L1>)).

Lexical owner: [features/knowledge/indexed-document-view.tsx](<indexed-document-view.tsx.md#s-82020c62107fcb4f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| {   content,   filename,   sourceRef, } | Readonly&lt;{ content: string; filename: string; sourceRef: string; }&gt; | annotation | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [structureDocument](<indexed-document.ts.md#s-1fcc41dabcdb65d9>) — [features/knowledge/indexed-document-view.tsx:17](<../../../../../../features/knowledge/indexed-document-view.tsx#L17>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- useState — external-or-dynamic-dispatch; [features/knowledge/indexed-document-view.tsx:18](<../../../../../../features/knowledge/indexed-document-view.tsx#L18>)
- sections.map — external-or-dynamic-dispatch; [features/knowledge/indexed-document-view.tsx:26](<../../../../../../features/knowledge/indexed-document-view.tsx#L26>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-0cd73c2cfd07280b"></a>

## IndexedDocument.&lt;anonymous@26:23&gt;

[features/knowledge/indexed-document-view.tsx:26](<../../../../../../features/knowledge/indexed-document-view.tsx#L26>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [IndexedDocument](<indexed-document-view.tsx.md#s-9449de2e26e528ab>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| section | any | compiler-inferred | required |
| index | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- section.fields.map — external-or-dynamic-dispatch; [features/knowledge/indexed-document-view.tsx:37](<../../../../../../features/knowledge/indexed-document-view.tsx#L37>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-2a7a0cc4b5c8c96e"></a>

## IndexedDocument.&lt;anonymous@26:23&gt;.&lt;anonymous@37:37&gt;

[features/knowledge/indexed-document-view.tsx:37](<../../../../../../features/knowledge/indexed-document-view.tsx#L37>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [IndexedDocument.&lt;anonymous@26:23&gt;](<indexed-document-view.tsx.md#s-0cd73c2cfd07280b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| field | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-7b84ac3b1a8b5ce6"></a>

## IndexedDocument.&lt;anonymous@60:19&gt;

[features/knowledge/indexed-document-view.tsx:60](<../../../../../../features/knowledge/indexed-document-view.tsx#L60>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [IndexedDocument](<indexed-document-view.tsx.md#s-9449de2e26e528ab>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| event | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- setOriginalOpen — external-or-dynamic-dispatch; [features/knowledge/indexed-document-view.tsx:60](<../../../../../../features/knowledge/indexed-document-view.tsx#L60>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
