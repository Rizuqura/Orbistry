# features/entities/chip-dialog.tsx: symbols

[Atlas](<../../../../README.md>) / [Entity UI](<../../../../modules/portal-entities.md>) / [features/entities/chip-dialog.tsx:1](<../../../../../../features/entities/chip-dialog.tsx#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [features/entities/chip-dialog.tsx](<chip-dialog.tsx.md#s-00212a27b668bd08>) (Module)
- [ChipDialog](<chip-dialog.tsx.md#s-89acd8e3c5e7622e>) (FunctionDeclaration)
- [ChipDialog.&lt;anonymous@30:11&gt;](<chip-dialog.tsx.md#s-18facfbeed6a5973>) (FunctionType)
- [ChipDialog.&lt;anonymous@31:12&gt;](<chip-dialog.tsx.md#s-3cff954b319eb845>) (FunctionType)
- [ChipDialog.openDialog](<chip-dialog.tsx.md#s-fbeb5dc72bb7effe>) (FunctionExpression)
- [ChipDialog.openDialog.closeDialog](<chip-dialog.tsx.md#s-7cfb10f6ac748f3c>) (FunctionExpression)
- [ChipDialog.saveChip](<chip-dialog.tsx.md#s-0d625644ee855d05>) (FunctionDeclaration)
- [ChipDialog.cancelDialog](<chip-dialog.tsx.md#s-6e2d88e024837531>) (FunctionDeclaration)
- [ChipDialog.clearError](<chip-dialog.tsx.md#s-410918039161ae49>) (FunctionDeclaration)
- [ChipDialog.generateTags](<chip-dialog.tsx.md#s-b16fbb59179fd07b>) (FunctionDeclaration)
- [ChipDialog.generateTags.&lt;anonymous@109:81&gt;](<chip-dialog.tsx.md#s-80c611eececbc66a>) (ArrowFunction)
- [ChipDialog.editTags](<chip-dialog.tsx.md#s-ecbd0c9c97fdfd47>) (FunctionDeclaration)
- [ChipDialog.uploadIcon](<chip-dialog.tsx.md#s-6e83dcf19c544e3d>) (FunctionDeclaration)
- [ChipDialog.removeImage](<chip-dialog.tsx.md#s-18dfdc424c302218>) (FunctionDeclaration)

<a id="s-00212a27b668bd08"></a>

## features/entities/chip-dialog.tsx

[features/entities/chip-dialog.tsx:1](<../../../../../../features/entities/chip-dialog.tsx#L1>) · Module · production · [Entity UI](<../../../../modules/portal-entities.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-89acd8e3c5e7622e"></a>

## ChipDialog

[features/entities/chip-dialog.tsx:24](<../../../../../../features/entities/chip-dialog.tsx#L24>) · FunctionDeclaration · production · [Entity UI](<../../../../modules/portal-entities.md>)

Stages a stable entity key, editable local tag suggestions, icon and color before confirmed creation/editing.

Purpose evidence: jsdoc.

Exported as: ChipDialog ([features/entities/chip-dialog.tsx:1](<../../../../../../features/entities/chip-dialog.tsx#L1>)).

Lexical owner: [features/entities/chip-dialog.tsx](<chip-dialog.tsx.md#s-00212a27b668bd08>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| {   chip,   onSave,   onClose, } | Readonly&lt;{ chip?: WorldViewChip; onSave: (draft: ChipDraft) =&gt; void; onClose: () =&gt; void; }&gt; | annotation | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 13.

- useRef — external-or-dynamic-dispatch; [features/entities/chip-dialog.tsx:33](<../../../../../../features/entities/chip-dialog.tsx#L33>)
- useRef — external-or-dynamic-dispatch; [features/entities/chip-dialog.tsx:34](<../../../../../../features/entities/chip-dialog.tsx#L34>)
- useRef — external-or-dynamic-dispatch; [features/entities/chip-dialog.tsx:35](<../../../../../../features/entities/chip-dialog.tsx#L35>)
- useRef — external-or-dynamic-dispatch; [features/entities/chip-dialog.tsx:36](<../../../../../../features/entities/chip-dialog.tsx#L36>)
- useState — external-or-dynamic-dispatch; [features/entities/chip-dialog.tsx:37](<../../../../../../features/entities/chip-dialog.tsx#L37>)
- useState — external-or-dynamic-dispatch; [features/entities/chip-dialog.tsx:38](<../../../../../../features/entities/chip-dialog.tsx#L38>)
- useState — external-or-dynamic-dispatch; [features/entities/chip-dialog.tsx:39](<../../../../../../features/entities/chip-dialog.tsx#L39>)
- useState — external-or-dynamic-dispatch; [features/entities/chip-dialog.tsx:40](<../../../../../../features/entities/chip-dialog.tsx#L40>)
- 5 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-18facfbeed6a5973"></a>

## ChipDialog.&lt;anonymous@30:11&gt;

[features/entities/chip-dialog.tsx:30](<../../../../../../features/entities/chip-dialog.tsx#L30>) · FunctionType · production · [Entity UI](<../../../../modules/portal-entities.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ChipDialog](<chip-dialog.tsx.md#s-89acd8e3c5e7622e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| draft | ChipDraft | annotation | required |

Returns: void (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-3cff954b319eb845"></a>

## ChipDialog.&lt;anonymous@31:12&gt;

[features/entities/chip-dialog.tsx:31](<../../../../../../features/entities/chip-dialog.tsx#L31>) · FunctionType · production · [Entity UI](<../../../../modules/portal-entities.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ChipDialog](<chip-dialog.tsx.md#s-89acd8e3c5e7622e>).

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

<a id="s-fbeb5dc72bb7effe"></a>

## ChipDialog.openDialog

[features/entities/chip-dialog.tsx:46](<../../../../../../features/entities/chip-dialog.tsx#L46>) · FunctionExpression · production · [Entity UI](<../../../../modules/portal-entities.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ChipDialog](<chip-dialog.tsx.md#s-89acd8e3c5e7622e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: () =&gt; void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- setEntityKey — external-or-dynamic-dispatch; [features/entities/chip-dialog.tsx:49](<../../../../../../features/entities/chip-dialog.tsx#L49>)
- crypto.randomUUID — external-or-dynamic-dispatch; [features/entities/chip-dialog.tsx:49](<../../../../../../features/entities/chip-dialog.tsx#L49>)
- dialog.showModal — external-or-dynamic-dispatch; [features/entities/chip-dialog.tsx:50](<../../../../../../features/entities/chip-dialog.tsx#L50>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-7cfb10f6ac748f3c"></a>

## ChipDialog.openDialog.closeDialog

[features/entities/chip-dialog.tsx:52](<../../../../../../features/entities/chip-dialog.tsx#L52>) · FunctionExpression · production · [Entity UI](<../../../../modules/portal-entities.md>)

Discards late icon reads and restores focus when creation/editing ends.

Purpose evidence: jsdoc.

Lexical owner: [ChipDialog.openDialog](<chip-dialog.tsx.md#s-fbeb5dc72bb7effe>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- dialog.close — external-or-dynamic-dispatch; [features/entities/chip-dialog.tsx:54](<../../../../../../features/entities/chip-dialog.tsx#L54>)
- previous.focus — external-or-dynamic-dispatch; [features/entities/chip-dialog.tsx:56](<../../../../../../features/entities/chip-dialog.tsx#L56>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-0d625644ee855d05"></a>

## ChipDialog.saveChip

[features/entities/chip-dialog.tsx:61](<../../../../../../features/entities/chip-dialog.tsx#L61>) · FunctionDeclaration · production · [Entity UI](<../../../../modules/portal-entities.md>)

Validates the staged key and metadata, then submits once; errors preserve the current draft and suggestions.

Purpose evidence: jsdoc.

Lexical owner: [ChipDialog](<chip-dialog.tsx.md#s-89acd8e3c5e7622e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| event | FormEvent&lt;HTMLFormElement&gt; | annotation | required |

Returns: void (annotation). Implementation present.

**Calls (statically resolved):**

- [normalizeChipColor](<../worldview/chip-colors.ts.md#s-2ae81619dacf15f7>) — [features/entities/chip-dialog.tsx:71](<../../../../../../features/entities/chip-dialog.tsx#L71>)
- [parseChipTags](<../worldview/chips.ts.md#s-34509229cdfd5014>) — [features/entities/chip-dialog.tsx:80](<../../../../../../features/entities/chip-dialog.tsx#L80>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 14.

- event.preventDefault — external-or-dynamic-dispatch; [features/entities/chip-dialog.tsx:62](<../../../../../../features/entities/chip-dialog.tsx#L62>)
- FormData — external-or-dynamic-dispatch; [features/entities/chip-dialog.tsx:64](<../../../../../../features/entities/chip-dialog.tsx#L64>)
- String(data.get("name") ?? "").trim — external-or-dynamic-dispatch; [features/entities/chip-dialog.tsx:65](<../../../../../../features/entities/chip-dialog.tsx#L65>)
- String — external-or-dynamic-dispatch; [features/entities/chip-dialog.tsx:65](<../../../../../../features/entities/chip-dialog.tsx#L65>)
- data.get — external-or-dynamic-dispatch; [features/entities/chip-dialog.tsx:65](<../../../../../../features/entities/chip-dialog.tsx#L65>)
- setError — external-or-dynamic-dispatch; [features/entities/chip-dialog.tsx:67](<../../../../../../features/entities/chip-dialog.tsx#L67>)
- String — external-or-dynamic-dispatch; [features/entities/chip-dialog.tsx:71](<../../../../../../features/entities/chip-dialog.tsx#L71>)
- data.get — external-or-dynamic-dispatch; [features/entities/chip-dialog.tsx:71](<../../../../../../features/entities/chip-dialog.tsx#L71>)
- 6 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-6e2d88e024837531"></a>

## ChipDialog.cancelDialog

[features/entities/chip-dialog.tsx:92](<../../../../../../features/entities/chip-dialog.tsx#L92>) · FunctionDeclaration · production · [Entity UI](<../../../../modules/portal-entities.md>)

Makes Escape discard all staged edits just like Cancel.

Purpose evidence: jsdoc.

Lexical owner: [ChipDialog](<chip-dialog.tsx.md#s-89acd8e3c5e7622e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| event | SyntheticEvent&lt;HTMLDialogElement&gt; | annotation | required |

Returns: void (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- event.preventDefault — external-or-dynamic-dispatch; [features/entities/chip-dialog.tsx:93](<../../../../../../features/entities/chip-dialog.tsx#L93>)
- onClose — external-or-dynamic-dispatch; [features/entities/chip-dialog.tsx:94](<../../../../../../features/entities/chip-dialog.tsx#L94>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-410918039161ae49"></a>

## ChipDialog.clearError

[features/entities/chip-dialog.tsx:97](<../../../../../../features/entities/chip-dialog.tsx#L97>) · FunctionDeclaration · production · [Entity UI](<../../../../modules/portal-entities.md>)

Clears stale validation feedback while the user edits the form.

Purpose evidence: jsdoc.

Lexical owner: [ChipDialog](<chip-dialog.tsx.md#s-89acd8e3c5e7622e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- setError — external-or-dynamic-dispatch; [features/entities/chip-dialog.tsx:98](<../../../../../../features/entities/chip-dialog.tsx#L98>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-b16fbb59179fd07b"></a>

## ChipDialog.generateTags

[features/entities/chip-dialog.tsx:102](<../../../../../../features/entities/chip-dialog.tsx#L102>) · FunctionDeclaration · production · [Entity UI](<../../../../modules/portal-entities.md>)

Adds local suggestions from the current form and assigned filename metadata; writes stay staged until Save/Create.

Purpose evidence: jsdoc.

Lexical owner: [ChipDialog](<chip-dialog.tsx.md#s-89acd8e3c5e7622e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| event | MouseEvent&lt;HTMLButtonElement&gt; | annotation | required |

Returns: void (annotation). Implementation present.

**Calls (statically resolved):**

- [parseChipTags](<../worldview/chips.ts.md#s-34509229cdfd5014>) — [features/entities/chip-dialog.tsx:104](<../../../../../../features/entities/chip-dialog.tsx#L104>)
- [suggestChipTags](<../worldview/chips.ts.md#s-a72caab4e76458bd>) — [features/entities/chip-dialog.tsx:105](<../../../../../../features/entities/chip-dialog.tsx#L105>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 9.

- FormData — external-or-dynamic-dispatch; [features/entities/chip-dialog.tsx:103](<../../../../../../features/entities/chip-dialog.tsx#L103>)
- String — external-or-dynamic-dispatch; [features/entities/chip-dialog.tsx:106](<../../../../../../features/entities/chip-dialog.tsx#L106>)
- data.get — external-or-dynamic-dispatch; [features/entities/chip-dialog.tsx:106](<../../../../../../features/entities/chip-dialog.tsx#L106>)
- String — external-or-dynamic-dispatch; [features/entities/chip-dialog.tsx:107](<../../../../../../features/entities/chip-dialog.tsx#L107>)
- data.get — external-or-dynamic-dispatch; [features/entities/chip-dialog.tsx:107](<../../../../../../features/entities/chip-dialog.tsx#L107>)
- chip?.sources?.map — external-or-dynamic-dispatch; [features/entities/chip-dialog.tsx:108](<../../../../../../features/entities/chip-dialog.tsx#L108>)
- setTags — external-or-dynamic-dispatch; [features/entities/chip-dialog.tsx:115](<../../../../../../features/entities/chip-dialog.tsx#L115>)
- next.join — external-or-dynamic-dispatch; [features/entities/chip-dialog.tsx:115](<../../../../../../features/entities/chip-dialog.tsx#L115>)
- 1 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-80c611eececbc66a"></a>

## ChipDialog.generateTags.&lt;anonymous@109:81&gt;

[features/entities/chip-dialog.tsx:109](<../../../../../../features/entities/chip-dialog.tsx#L109>) · ArrowFunction · production · [Entity UI](<../../../../modules/portal-entities.md>)

Uses assigned filename metadata without loading source contents.

Purpose evidence: jsdoc.

Lexical owner: [ChipDialog.generateTags](<chip-dialog.tsx.md#s-b16fbb59179fd07b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| source | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-ecbd0c9c97fdfd47"></a>

## ChipDialog.editTags

[features/entities/chip-dialog.tsx:125](<../../../../../../features/entities/chip-dialog.tsx#L125>) · FunctionDeclaration · production · [Entity UI](<../../../../modules/portal-entities.md>)

Keeps generated/manual tags editable and clears stale generation feedback.

Purpose evidence: jsdoc.

Lexical owner: [ChipDialog](<chip-dialog.tsx.md#s-89acd8e3c5e7622e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| event | ChangeEvent&lt;HTMLInputElement&gt; | annotation | required |

Returns: void (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- setTags — external-or-dynamic-dispatch; [features/entities/chip-dialog.tsx:126](<../../../../../../features/entities/chip-dialog.tsx#L126>)
- setGenerationStatus — external-or-dynamic-dispatch; [features/entities/chip-dialog.tsx:127](<../../../../../../features/entities/chip-dialog.tsx#L127>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-6e83dcf19c544e3d"></a>

## ChipDialog.uploadIcon

[features/entities/chip-dialog.tsx:131](<../../../../../../features/entities/chip-dialog.tsx#L131>) · FunctionDeclaration · production · [Entity UI](<../../../../modules/portal-entities.md>)

Decodes the latest chosen image locally; older reads and reads after closing are ignored.

Purpose evidence: jsdoc.

Lexical owner: [ChipDialog](<chip-dialog.tsx.md#s-89acd8e3c5e7622e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| event | ChangeEvent&lt;HTMLInputElement&gt; | annotation | required |

Returns: Promise&lt;void&gt; (annotation). Implementation present.

**Calls (statically resolved):**

- [readChipIcon](<chip-icon.ts.md#s-08a72166f73c1f0b>) — [features/entities/chip-dialog.tsx:140](<../../../../../../features/entities/chip-dialog.tsx#L140>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- setReadingImage — external-or-dynamic-dispatch; [features/entities/chip-dialog.tsx:137](<../../../../../../features/entities/chip-dialog.tsx#L137>)
- setError — external-or-dynamic-dispatch; [features/entities/chip-dialog.tsx:138](<../../../../../../features/entities/chip-dialog.tsx#L138>)
- setIconImage — external-or-dynamic-dispatch; [features/entities/chip-dialog.tsx:141](<../../../../../../features/entities/chip-dialog.tsx#L141>)
- setError — external-or-dynamic-dispatch; [features/entities/chip-dialog.tsx:144](<../../../../../../features/entities/chip-dialog.tsx#L144>)
- setReadingImage — external-or-dynamic-dispatch; [features/entities/chip-dialog.tsx:148](<../../../../../../features/entities/chip-dialog.tsx#L148>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-18dfdc424c302218"></a>

## ChipDialog.removeImage

[features/entities/chip-dialog.tsx:153](<../../../../../../features/entities/chip-dialog.tsx#L153>) · FunctionDeclaration · production · [Entity UI](<../../../../modules/portal-entities.md>)

Removes the staged image and resets the native field so the same file can be chosen again.

Purpose evidence: jsdoc.

Lexical owner: [ChipDialog](<chip-dialog.tsx.md#s-89acd8e3c5e7622e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- setReadingImage — external-or-dynamic-dispatch; [features/entities/chip-dialog.tsx:155](<../../../../../../features/entities/chip-dialog.tsx#L155>)
- setIconImage — external-or-dynamic-dispatch; [features/entities/chip-dialog.tsx:156](<../../../../../../features/entities/chip-dialog.tsx#L156>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
