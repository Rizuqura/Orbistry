# features/knowledge/indexed-document.ts: symbols

[Atlas](<../../../../README.md>) / [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>) / [features/knowledge/indexed-document.ts:1](<../../../../../../features/knowledge/indexed-document.ts#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [features/knowledge/indexed-document.ts](<indexed-document.ts.md#s-ed5c6cf46498d9b1>) (Module)
- [DocumentSection](<indexed-document.ts.md#s-caa4944fa9047c41>) (TypeAliasDeclaration)
- [structureDocument](<indexed-document.ts.md#s-1fcc41dabcdb65d9>) (FunctionDeclaration)
- [structureDocument.append](<indexed-document.ts.md#s-4ffc187f8983918a>) (FunctionDeclaration)
- [structureDocument.append.&lt;anonymous@17:21&gt;](<indexed-document.ts.md#s-11a48e507be9df19>) (ArrowFunction)
- [structureDocument.append.&lt;anonymous@20:31&gt;](<indexed-document.ts.md#s-cc9ad077f2fd3bca>) (ArrowFunction)

<a id="s-ed5c6cf46498d9b1"></a>

## features/knowledge/indexed-document.ts

[features/knowledge/indexed-document.ts:1](<../../../../../../features/knowledge/indexed-document.ts#L1>) · Module · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/knowledge/indexed-document.test.cjs:3](<../../../../../../features/knowledge/indexed-document.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-caa4944fa9047c41"></a>

## DocumentSection

[features/knowledge/indexed-document.ts:1](<../../../../../../features/knowledge/indexed-document.ts#L1>) · TypeAliasDeclaration · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: DocumentSection ([features/knowledge/indexed-document.ts:1](<../../../../../../features/knowledge/indexed-document.ts#L1>)).

Lexical owner: [features/knowledge/indexed-document.ts](<indexed-document.ts.md#s-ed5c6cf46498d9b1>).

Contract evidence: typescript-declaration. [Full declaration index](<../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/knowledge/indexed-document.test.cjs:3](<../../../../../../features/knowledge/indexed-document.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-1fcc41dabcdb65d9"></a>

## structureDocument

[features/knowledge/indexed-document.ts:9](<../../../../../../features/knowledge/indexed-document.ts#L9>) · FunctionDeclaration · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

Groups explicit Markdown headings and labeled fields into source excerpts; never infers facts, executes HTML, or changes the original document.

Purpose evidence: jsdoc.

Exported as: structureDocument ([features/knowledge/indexed-document.ts:1](<../../../../../../features/knowledge/indexed-document.ts#L1>)).

Lexical owner: [features/knowledge/indexed-document.ts](<indexed-document.ts.md#s-ed5c6cf46498d9b1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| content | string | annotation | required |

Returns: readonly DocumentSection&#91;&#93; (annotation). Implementation present.

**Calls (statically resolved):**

- [structureDocument.append](<indexed-document.ts.md#s-4ffc187f8983918a>) — [features/knowledge/indexed-document.ts:44](<../../../../../../features/knowledge/indexed-document.ts#L44>)
- [structureDocument.append](<indexed-document.ts.md#s-4ffc187f8983918a>) — [features/knowledge/indexed-document.ts:50](<../../../../../../features/knowledge/indexed-document.ts#L50>)

**Called by (statically resolved):**

- [IndexedDocument](<indexed-document-view.tsx.md#s-9449de2e26e528ab>) — [features/knowledge/indexed-document-view.tsx:17](<../../../../../../features/knowledge/indexed-document-view.tsx#L17>)
- [&lt;anonymous@5:106&gt;](<indexed-document.test.cjs.md#s-844a7e9b03f7ae74>) — [features/knowledge/indexed-document.test.cjs:8](<../../../../../../features/knowledge/indexed-document.test.cjs#L8>)
- [&lt;anonymous@20:106&gt;](<indexed-document.test.cjs.md#s-ad957177f804d91e>) — [features/knowledge/indexed-document.test.cjs:23](<../../../../../../features/knowledge/indexed-document.test.cjs#L23>)
- [&lt;anonymous@20:106&gt;](<indexed-document.test.cjs.md#s-ad957177f804d91e>) — [features/knowledge/indexed-document.test.cjs:28](<../../../../../../features/knowledge/indexed-document.test.cjs#L28>)

Unresolved / external call sites: 5.

- content.split(/\\r?\\n/).entries — external-or-dynamic-dispatch; [features/knowledge/indexed-document.ts:40](<../../../../../../features/knowledge/indexed-document.ts#L40>)
- content.split — external-or-dynamic-dispatch; [features/knowledge/indexed-document.ts:40](<../../../../../../features/knowledge/indexed-document.ts#L40>)
- /^\\s*(&#96;&#96;&#96;&#124;~~~)/.test — external-or-dynamic-dispatch; [features/knowledge/indexed-document.ts:41](<../../../../../../features/knowledge/indexed-document.ts#L41>)
- /^#{1,6}\\s+(.+?)\\s*#*\\s*$/.exec — external-or-dynamic-dispatch; [features/knowledge/indexed-document.ts:42](<../../../../../../features/knowledge/indexed-document.ts#L42>)
- lines.push — external-or-dynamic-dispatch; [features/knowledge/indexed-document.ts:48](<../../../../../../features/knowledge/indexed-document.ts#L48>)

**Related tests / acceptance harnesses:**

- [features/knowledge/indexed-document.test.cjs:8](<../../../../../../features/knowledge/indexed-document.test.cjs#L8>) — static-call-site; coverage not established.
- [features/knowledge/indexed-document.test.cjs:23](<../../../../../../features/knowledge/indexed-document.test.cjs#L23>) — static-call-site; coverage not established.
- [features/knowledge/indexed-document.test.cjs:28](<../../../../../../features/knowledge/indexed-document.test.cjs#L28>) — static-call-site; coverage not established.
- [features/knowledge/indexed-document.test.cjs:3](<../../../../../../features/knowledge/indexed-document.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-4ffc187f8983918a"></a>

## structureDocument.append

[features/knowledge/indexed-document.ts:16](<../../../../../../features/knowledge/indexed-document.ts#L16>) · FunctionDeclaration · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

Retains source line numbers for each literal section and labeled field.

Purpose evidence: jsdoc.

Lexical owner: [structureDocument](<indexed-document.ts.md#s-1fcc41dabcdb65d9>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [structureDocument](<indexed-document.ts.md#s-1fcc41dabcdb65d9>) — [features/knowledge/indexed-document.ts:44](<../../../../../../features/knowledge/indexed-document.ts#L44>)
- [structureDocument](<indexed-document.ts.md#s-1fcc41dabcdb65d9>) — [features/knowledge/indexed-document.ts:50](<../../../../../../features/knowledge/indexed-document.ts#L50>)

Unresolved / external call sites: 5.

- lines.some — external-or-dynamic-dispatch; [features/knowledge/indexed-document.ts:17](<../../../../../../features/knowledge/indexed-document.ts#L17>)
- lines.filter — external-or-dynamic-dispatch; [features/knowledge/indexed-document.ts:20](<../../../../../../features/knowledge/indexed-document.ts#L20>)
- sections.push — external-or-dynamic-dispatch; [features/knowledge/indexed-document.ts:38](<../../../../../../features/knowledge/indexed-document.ts#L38>)
- body.join("\\n").trim — external-or-dynamic-dispatch; [features/knowledge/indexed-document.ts:38](<../../../../../../features/knowledge/indexed-document.ts#L38>)
- body.join — external-or-dynamic-dispatch; [features/knowledge/indexed-document.ts:38](<../../../../../../features/knowledge/indexed-document.ts#L38>)

**Related tests / acceptance harnesses:**

- [features/knowledge/indexed-document.test.cjs:3](<../../../../../../features/knowledge/indexed-document.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-11a48e507be9df19"></a>

## structureDocument.append.&lt;anonymous@17:21&gt;

[features/knowledge/indexed-document.ts:17](<../../../../../../features/knowledge/indexed-document.ts#L17>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [structureDocument.append](<indexed-document.ts.md#s-4ffc187f8983918a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- value.trim — external-or-dynamic-dispatch; [features/knowledge/indexed-document.ts:17](<../../../../../../features/knowledge/indexed-document.ts#L17>)

**Related tests / acceptance harnesses:**

- [features/knowledge/indexed-document.test.cjs:3](<../../../../../../features/knowledge/indexed-document.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-cc9ad077f2fd3bca"></a>

## structureDocument.append.&lt;anonymous@20:31&gt;

[features/knowledge/indexed-document.ts:20](<../../../../../../features/knowledge/indexed-document.ts#L20>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [structureDocument.append](<indexed-document.ts.md#s-4ffc187f8983918a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |
| offset | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- /^\\s*(&#96;&#96;&#96;&#124;~~~)/.test — external-or-dynamic-dispatch; [features/knowledge/indexed-document.ts:21](<../../../../../../features/knowledge/indexed-document.ts#L21>)
- /^\\s*(?:&gt;\\s*)?(?:&#91;-*&#93;\\s+)?(?:\\*\\*(&#91;^*\\n&#93;+?):\\*\\*\\s*(.+)&#124;(&#91;\\w&#93;&#91;\\w /&()%-&#93;{1,50}):\\s+(.+))$/.exec — external-or-dynamic-dispatch; [features/knowledge/indexed-document.ts:27](<../../../../../../features/knowledge/indexed-document.ts#L27>)
- fields.push — external-or-dynamic-dispatch; [features/knowledge/indexed-document.ts:31](<../../../../../../features/knowledge/indexed-document.ts#L31>)

**Related tests / acceptance harnesses:**

- [features/knowledge/indexed-document.test.cjs:3](<../../../../../../features/knowledge/indexed-document.test.cjs#L3>) — file-import-only; coverage not established.
