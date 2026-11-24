# features/knowledge/csv-preview.ts: symbols

[Atlas](<../../../../README.md>) / [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>) / [features/knowledge/csv-preview.ts:1](<../../../../../../features/knowledge/csv-preview.ts#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [features/knowledge/csv-preview.ts](<csv-preview.ts.md#s-98cb58da95190189>) (Module)
- [decodeCsvPreview](<csv-preview.ts.md#s-594c4e5e07860c63>) (FunctionDeclaration)

<a id="s-98cb58da95190189"></a>

## features/knowledge/csv-preview.ts

[features/knowledge/csv-preview.ts:1](<../../../../../../features/knowledge/csv-preview.ts#L1>) · Module · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/knowledge/csv-preview.test.cjs:3](<../../../../../../features/knowledge/csv-preview.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-594c4e5e07860c63"></a>

## decodeCsvPreview

[features/knowledge/csv-preview.ts:2](<../../../../../../features/knowledge/csv-preview.ts#L2>) · FunctionDeclaration · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

Decodes comma-separated records for display, preserving quoted newlines and escaped quotes. Malformed quotes throw.

Purpose evidence: jsdoc.

Exported as: decodeCsvPreview ([features/knowledge/csv-preview.ts:1](<../../../../../../features/knowledge/csv-preview.ts#L1>)).

Lexical owner: [features/knowledge/csv-preview.ts](<csv-preview.ts.md#s-98cb58da95190189>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| content | string | annotation | required |

Returns: string&#91;&#93;&#91;&#93; (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@6:65&gt;](<csv-preview.test.cjs.md#s-e0852b09176a2c2d>) — [features/knowledge/csv-preview.test.cjs:8](<../../../../../../features/knowledge/csv-preview.test.cjs#L8>)
- [&lt;anonymous@6:65&gt;](<csv-preview.test.cjs.md#s-e0852b09176a2c2d>) — [features/knowledge/csv-preview.test.cjs:17](<../../../../../../features/knowledge/csv-preview.test.cjs#L17>)
- [&lt;anonymous@6:65&gt;](<csv-preview.test.cjs.md#s-e0852b09176a2c2d>) — [features/knowledge/csv-preview.test.cjs:18](<../../../../../../features/knowledge/csv-preview.test.cjs#L18>)
- [&lt;anonymous@6:65&gt;](<csv-preview.test.cjs.md#s-e0852b09176a2c2d>) — [features/knowledge/csv-preview.test.cjs:19](<../../../../../../features/knowledge/csv-preview.test.cjs#L19>)
- [&lt;anonymous@6:65&gt;.&lt;anonymous@23:17&gt;](<csv-preview.test.cjs.md#s-0f007d07dd0c18df>) — [features/knowledge/csv-preview.test.cjs:23](<../../../../../../features/knowledge/csv-preview.test.cjs#L23>)
- [CsvTable](<../workspace/document-workspace.tsx.md#s-a29cd93c360f27a7>) — [features/workspace/document-workspace.tsx:263](<../../../../../../features/workspace/document-workspace.tsx#L263>)

Unresolved / external call sites: 7.

- content.replace — external-or-dynamic-dispatch; [features/knowledge/csv-preview.ts:8](<../../../../../../features/knowledge/csv-preview.ts#L8>)
- row.push — external-or-dynamic-dispatch; [features/knowledge/csv-preview.ts:20](<../../../../../../features/knowledge/csv-preview.ts#L20>)
- row.push — external-or-dynamic-dispatch; [features/knowledge/csv-preview.ts:24](<../../../../../../features/knowledge/csv-preview.ts#L24>)
- rows.push — external-or-dynamic-dispatch; [features/knowledge/csv-preview.ts:25](<../../../../../../features/knowledge/csv-preview.ts#L25>)
- Error — external-or-dynamic-dispatch; [features/knowledge/csv-preview.ts:34](<../../../../../../features/knowledge/csv-preview.ts#L34>)
- row.push — external-or-dynamic-dispatch; [features/knowledge/csv-preview.ts:36](<../../../../../../features/knowledge/csv-preview.ts#L36>)
- rows.push — external-or-dynamic-dispatch; [features/knowledge/csv-preview.ts:37](<../../../../../../features/knowledge/csv-preview.ts#L37>)

**Related tests / acceptance harnesses:**

- [features/knowledge/csv-preview.test.cjs:8](<../../../../../../features/knowledge/csv-preview.test.cjs#L8>) — static-call-site; coverage not established.
- [features/knowledge/csv-preview.test.cjs:17](<../../../../../../features/knowledge/csv-preview.test.cjs#L17>) — static-call-site; coverage not established.
- [features/knowledge/csv-preview.test.cjs:18](<../../../../../../features/knowledge/csv-preview.test.cjs#L18>) — static-call-site; coverage not established.
- [features/knowledge/csv-preview.test.cjs:19](<../../../../../../features/knowledge/csv-preview.test.cjs#L19>) — static-call-site; coverage not established.
- [features/knowledge/csv-preview.test.cjs:23](<../../../../../../features/knowledge/csv-preview.test.cjs#L23>) — static-call-site; coverage not established.
- [features/knowledge/csv-preview.test.cjs:3](<../../../../../../features/knowledge/csv-preview.test.cjs#L3>) — file-import-only; coverage not established.
