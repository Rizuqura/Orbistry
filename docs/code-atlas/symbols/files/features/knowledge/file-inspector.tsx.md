# features/knowledge/file-inspector.tsx: symbols

[Atlas](<../../../../README.md>) / [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>) / [features/knowledge/file-inspector.tsx:1](<../../../../../../features/knowledge/file-inspector.tsx#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [features/knowledge/file-inspector.tsx](<file-inspector.tsx.md#s-eab1fbfcabce8fd0>) (Module)
- [FileInspector](<file-inspector.tsx.md#s-daeb528002ede13d>) (FunctionDeclaration)
- [FileInspector.&lt;anonymous@22:13&gt;](<file-inspector.tsx.md#s-9e55b1819370f838>) (FunctionType)
- [FileInspector.&lt;anonymous@23:12&gt;](<file-inspector.tsx.md#s-cf78b985149889bf>) (FunctionType)
- [FileInspector.selectedSource](<file-inspector.tsx.md#s-4fdd91bb9d628d81>) (FunctionExpression)
- [FileInspector.revealSource](<file-inspector.tsx.md#s-16a1cf6c2c2f9829>) (FunctionDeclaration)
- [FileInspector.unassignSource](<file-inspector.tsx.md#s-c1814e4103505ec0>) (FunctionDeclaration)
- [FileInspector.selectSource](<file-inspector.tsx.md#s-50bdcd1e46bdceee>) (FunctionDeclaration)
- [FileInspector.renderSource](<file-inspector.tsx.md#s-03952831deb8582f>) (FunctionExpression)

<a id="s-eab1fbfcabce8fd0"></a>

## features/knowledge/file-inspector.tsx

[features/knowledge/file-inspector.tsx:1](<../../../../../../features/knowledge/file-inspector.tsx#L1>) · Module · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-daeb528002ede13d"></a>

## FileInspector

[features/knowledge/file-inspector.tsx:12](<../../../../../../features/knowledge/file-inspector.tsx#L12>) · FunctionDeclaration · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

Inspects every assigned file, including overflow/missing sources; locate and unassign never read original contents.

Purpose evidence: jsdoc.

Exported as: FileInspector ([features/knowledge/file-inspector.tsx:1](<../../../../../../features/knowledge/file-inspector.tsx#L1>)).

Lexical owner: [features/knowledge/file-inspector.tsx](<file-inspector.tsx.md#s-eab1fbfcabce8fd0>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| {   chip,   vaultPath,   sourceId,   onSelect,   onClose, } | Readonly&lt;{ chip: WorldViewChip; vaultPath: string; sourceId: string &#124; null; onSelect: (id: string) =&gt; void; onClose: () =&gt; void; }&gt; | annotation | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [useConfirmation](<../dialogs/use-confirmation.tsx.md#s-68cb241f4bfc872f>) — [features/knowledge/file-inspector.tsx:27](<../../../../../../features/knowledge/file-inspector.tsx#L27>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- useState — external-or-dynamic-dispatch; [features/knowledge/file-inspector.tsx:25](<../../../../../../features/knowledge/file-inspector.tsx#L25>)
- useState — external-or-dynamic-dispatch; [features/knowledge/file-inspector.tsx:26](<../../../../../../features/knowledge/file-inspector.tsx#L26>)
- sources.find — external-or-dynamic-dispatch; [features/knowledge/file-inspector.tsx:30](<../../../../../../features/knowledge/file-inspector.tsx#L30>)
- sources.map — external-or-dynamic-dispatch; [features/knowledge/file-inspector.tsx:110](<../../../../../../features/knowledge/file-inspector.tsx#L110>)
- source.sizeBytes.toLocaleString — external-or-dynamic-dispatch; [features/knowledge/file-inspector.tsx:146](<../../../../../../features/knowledge/file-inspector.tsx#L146>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-9e55b1819370f838"></a>

## FileInspector.&lt;anonymous@22:13&gt;

[features/knowledge/file-inspector.tsx:22](<../../../../../../features/knowledge/file-inspector.tsx#L22>) · FunctionType · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [FileInspector](<file-inspector.tsx.md#s-daeb528002ede13d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| id | string | annotation | required |

Returns: void (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-cf78b985149889bf"></a>

## FileInspector.&lt;anonymous@23:12&gt;

[features/knowledge/file-inspector.tsx:23](<../../../../../../features/knowledge/file-inspector.tsx#L23>) · FunctionType · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [FileInspector](<file-inspector.tsx.md#s-daeb528002ede13d>).

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

<a id="s-4fdd91bb9d628d81"></a>

## FileInspector.selectedSource

[features/knowledge/file-inspector.tsx:31](<../../../../../../features/knowledge/file-inspector.tsx#L31>) · FunctionExpression · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

Finds the selected exact source ID without relying on duplicate filenames.

Purpose evidence: jsdoc.

Lexical owner: [FileInspector](<file-inspector.tsx.md#s-daeb528002ede13d>).

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

<a id="s-16a1cf6c2c2f9829"></a>

## FileInspector.revealSource

[features/knowledge/file-inspector.tsx:39](<../../../../../../features/knowledge/file-inspector.tsx#L39>) · FunctionDeclaration · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

Locates the source through the desktop's existing OS shell capability after validating its Universe reference.

Purpose evidence: jsdoc.

Lexical owner: [FileInspector](<file-inspector.tsx.md#s-daeb528002ede13d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: Promise&lt;void&gt; (annotation). Implementation present.

**Calls (statically resolved):**

- [requireWorldViewBridge](<../worldview/chip-session.ts.md#s-724ceb52bd424e76>) — [features/knowledge/file-inspector.tsx:43](<../../../../../../features/knowledge/file-inspector.tsx#L43>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- setError — external-or-dynamic-dispatch; [features/knowledge/file-inspector.tsx:41](<../../../../../../features/knowledge/file-inspector.tsx#L41>)
- requireWorldViewBridge().request — declaration-without-runtime-body; [features/knowledge/file-inspector.tsx:43](<../../../../../../features/knowledge/file-inspector.tsx#L43>)
- setError — external-or-dynamic-dispatch; [features/knowledge/file-inspector.tsx:48](<../../../../../../features/knowledge/file-inspector.tsx#L48>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-c1814e4103505ec0"></a>

## FileInspector.unassignSource

[features/knowledge/file-inspector.tsx:57](<../../../../../../features/knowledge/file-inspector.tsx#L57>) · FunctionDeclaration · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

Confirms removal of one entity association; only its Markdown index is written.

Purpose evidence: jsdoc.

Lexical owner: [FileInspector](<file-inspector.tsx.md#s-daeb528002ede13d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: Promise&lt;void&gt; (annotation). Implementation present.

**Calls (statically resolved):**

- [flushWorldViewWrites](<../worldview/chip-session.ts.md#s-14cfc10edca5869e>) — [features/knowledge/file-inspector.tsx:67](<../../../../../../features/knowledge/file-inspector.tsx#L67>)
- [requireWorldViewBridge](<../worldview/chip-session.ts.md#s-724ceb52bd424e76>) — [features/knowledge/file-inspector.tsx:68](<../../../../../../features/knowledge/file-inspector.tsx#L68>)
- [replaceChipSources](<../worldview/chip-session.ts.md#s-9ff8f1a12cc5c2ed>) — [features/knowledge/file-inspector.tsx:72](<../../../../../../features/knowledge/file-inspector.tsx#L72>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 7.

- setBusy — external-or-dynamic-dispatch; [features/knowledge/file-inspector.tsx:59](<../../../../../../features/knowledge/file-inspector.tsx#L59>)
- setError — external-or-dynamic-dispatch; [features/knowledge/file-inspector.tsx:60](<../../../../../../features/knowledge/file-inspector.tsx#L60>)
- confirm — external-or-dynamic-dispatch; [features/knowledge/file-inspector.tsx:62](<../../../../../../features/knowledge/file-inspector.tsx#L62>)
- requireWorldViewBridge().request — declaration-without-runtime-body; [features/knowledge/file-inspector.tsx:68](<../../../../../../features/knowledge/file-inspector.tsx#L68>)
- onSelect — external-or-dynamic-dispatch; [features/knowledge/file-inspector.tsx:73](<../../../../../../features/knowledge/file-inspector.tsx#L73>)
- setError — external-or-dynamic-dispatch; [features/knowledge/file-inspector.tsx:75](<../../../../../../features/knowledge/file-inspector.tsx#L75>)
- setBusy — external-or-dynamic-dispatch; [features/knowledge/file-inspector.tsx:81](<../../../../../../features/knowledge/file-inspector.tsx#L81>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-50bdcd1e46bdceee"></a>

## FileInspector.selectSource

[features/knowledge/file-inspector.tsx:86](<../../../../../../features/knowledge/file-inspector.tsx#L86>) · FunctionDeclaration · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

Selects a list item for metadata review without dragging the chip or moving the camera.

Purpose evidence: jsdoc.

Lexical owner: [FileInspector](<file-inspector.tsx.md#s-daeb528002ede13d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| event | React.MouseEvent&lt;HTMLButtonElement&gt; | annotation | required |

Returns: void (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- onSelect — external-or-dynamic-dispatch; [features/knowledge/file-inspector.tsx:88](<../../../../../../features/knowledge/file-inspector.tsx#L88>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-03952831deb8582f"></a>

## FileInspector.renderSource

[features/knowledge/file-inspector.tsx:111](<../../../../../../features/knowledge/file-inspector.tsx#L111>) · FunctionExpression · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

Preserves access to all assignments rather than silently hiding buildings beyond capacity.

Purpose evidence: jsdoc.

Lexical owner: [FileInspector](<file-inspector.tsx.md#s-daeb528002ede13d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| item | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- item.sizeBytes?.toLocaleString — external-or-dynamic-dispatch; [features/knowledge/file-inspector.tsx:125](<../../../../../../features/knowledge/file-inspector.tsx#L125>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
