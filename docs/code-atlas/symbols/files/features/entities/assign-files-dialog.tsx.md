# features/entities/assign-files-dialog.tsx: symbols

[Atlas](<../../../../README.md>) / [Entity UI](<../../../../modules/portal-entities.md>) / [features/entities/assign-files-dialog.tsx:1](<../../../../../../features/entities/assign-files-dialog.tsx#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [features/entities/assign-files-dialog.tsx](<assign-files-dialog.tsx.md#s-952629dc2ba2de54>) (Module)
- [AssignFilesDialog](<assign-files-dialog.tsx.md#s-27e58f9de0368923>) (FunctionDeclaration)
- [AssignFilesDialog.&lt;anonymous@22:64&gt;](<assign-files-dialog.tsx.md#s-7eb72a88cf1e6d4c>) (FunctionType)
- [AssignFilesDialog.sourceId](<assign-files-dialog.tsx.md#s-a5f3d0fb7e2b56d5>) (FunctionExpression)
- [AssignFilesDialog.openPicker](<assign-files-dialog.tsx.md#s-d47ee1834dc0ffcb>) (FunctionExpression)
- [AssignFilesDialog.openPicker.closePicker](<assign-files-dialog.tsx.md#s-02d5f315e3ea0be8>) (FunctionExpression)
- [AssignFilesDialog.loadDirectory](<assign-files-dialog.tsx.md#s-504ef370a4a791a0>) (FunctionExpression)
- [AssignFilesDialog.loadDirectory.listFiles](<assign-files-dialog.tsx.md#s-ffadbf9590b8d852>) (FunctionDeclaration)
- [AssignFilesDialog.loadDirectory.cancelListing](<assign-files-dialog.tsx.md#s-6263abda9a60900d>) (FunctionExpression)
- [AssignFilesDialog.searchFiles](<assign-files-dialog.tsx.md#s-85665b08ab496a7e>) (FunctionDeclaration)
- [AssignFilesDialog.browseFolder](<assign-files-dialog.tsx.md#s-ae90455ee31b4466>) (FunctionDeclaration)
- [AssignFilesDialog.toggleFile](<assign-files-dialog.tsx.md#s-66ae5334cfed5d82>) (FunctionDeclaration)
- [AssignFilesDialog.confirmAssignment](<assign-files-dialog.tsx.md#s-a01e254655f4acbc>) (FunctionDeclaration)
- [AssignFilesDialog.cancelPicker](<assign-files-dialog.tsx.md#s-30a8d8444007f8b7>) (FunctionDeclaration)
- [AssignFilesDialog.retryListing](<assign-files-dialog.tsx.md#s-d68150d710d0c520>) (FunctionDeclaration)
- [AssignFilesDialog.renderEntry](<assign-files-dialog.tsx.md#s-a511a6b3c268693b>) (FunctionExpression)

<a id="s-952629dc2ba2de54"></a>

## features/entities/assign-files-dialog.tsx

[features/entities/assign-files-dialog.tsx:1](<../../../../../../features/entities/assign-files-dialog.tsx#L1>) · Module · production · [Entity UI](<../../../../modules/portal-entities.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-27e58f9de0368923"></a>

## AssignFilesDialog

[features/entities/assign-files-dialog.tsx:18](<../../../../../../features/entities/assign-files-dialog.tsx#L18>) · FunctionDeclaration · production · [Entity UI](<../../../../modules/portal-entities.md>)

Browses/searches the existing Universe using metadata only; confirmed selection creates file associations.

Purpose evidence: jsdoc.

Exported as: AssignFilesDialog ([features/entities/assign-files-dialog.tsx:1](<../../../../../../features/entities/assign-files-dialog.tsx#L1>)).

Lexical owner: [features/entities/assign-files-dialog.tsx](<assign-files-dialog.tsx.md#s-952629dc2ba2de54>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| {   chip,   vaultPath,   onClose, } | Readonly&lt;{ chip: WorldViewChip; vaultPath: string; onClose: () =&gt; void }&gt; | annotation | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 19.

- useRef — external-or-dynamic-dispatch; [features/entities/assign-files-dialog.tsx:23](<../../../../../../features/entities/assign-files-dialog.tsx#L23>)
- useState — external-or-dynamic-dispatch; [features/entities/assign-files-dialog.tsx:24](<../../../../../../features/entities/assign-files-dialog.tsx#L24>)
- useState — external-or-dynamic-dispatch; [features/entities/assign-files-dialog.tsx:25](<../../../../../../features/entities/assign-files-dialog.tsx#L25>)
- useState — external-or-dynamic-dispatch; [features/entities/assign-files-dialog.tsx:26](<../../../../../../features/entities/assign-files-dialog.tsx#L26>)
- useState — external-or-dynamic-dispatch; [features/entities/assign-files-dialog.tsx:27](<../../../../../../features/entities/assign-files-dialog.tsx#L27>)
- Set — external-or-dynamic-dispatch; [features/entities/assign-files-dialog.tsx:27](<../../../../../../features/entities/assign-files-dialog.tsx#L27>)
- useState — external-or-dynamic-dispatch; [features/entities/assign-files-dialog.tsx:28](<../../../../../../features/entities/assign-files-dialog.tsx#L28>)
- useState — external-or-dynamic-dispatch; [features/entities/assign-files-dialog.tsx:29](<../../../../../../features/entities/assign-files-dialog.tsx#L29>)
- 11 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-7eb72a88cf1e6d4c"></a>

## AssignFilesDialog.&lt;anonymous@22:64&gt;

[features/entities/assign-files-dialog.tsx:22](<../../../../../../features/entities/assign-files-dialog.tsx#L22>) · FunctionType · production · [Entity UI](<../../../../modules/portal-entities.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [AssignFilesDialog](<assign-files-dialog.tsx.md#s-27e58f9de0368923>).

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

<a id="s-a5f3d0fb7e2b56d5"></a>

## AssignFilesDialog.sourceId

[features/entities/assign-files-dialog.tsx:35](<../../../../../../features/entities/assign-files-dialog.tsx#L35>) · FunctionExpression · production · [Entity UI](<../../../../modules/portal-entities.md>)

Identifies existing memberships so the picker cannot create duplicates.

Purpose evidence: jsdoc.

Lexical owner: [AssignFilesDialog](<assign-files-dialog.tsx.md#s-27e58f9de0368923>).

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

<a id="s-d47ee1834dc0ffcb"></a>

## AssignFilesDialog.openPicker

[features/entities/assign-files-dialog.tsx:44](<../../../../../../features/entities/assign-files-dialog.tsx#L44>) · FunctionExpression · production · [Entity UI](<../../../../modules/portal-entities.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [AssignFilesDialog](<assign-files-dialog.tsx.md#s-27e58f9de0368923>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: () =&gt; void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- dialog.showModal — external-or-dynamic-dispatch; [features/entities/assign-files-dialog.tsx:47](<../../../../../../features/entities/assign-files-dialog.tsx#L47>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-02d5f315e3ea0be8"></a>

## AssignFilesDialog.openPicker.closePicker

[features/entities/assign-files-dialog.tsx:49](<../../../../../../features/entities/assign-files-dialog.tsx#L49>) · FunctionExpression · production · [Entity UI](<../../../../modules/portal-entities.md>)

Releases native modality and returns focus without changing camera position.

Purpose evidence: jsdoc.

Lexical owner: [AssignFilesDialog.openPicker](<assign-files-dialog.tsx.md#s-d47ee1834dc0ffcb>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- dialog.close — external-or-dynamic-dispatch; [features/entities/assign-files-dialog.tsx:50](<../../../../../../features/entities/assign-files-dialog.tsx#L50>)
- previous.focus — external-or-dynamic-dispatch; [features/entities/assign-files-dialog.tsx:52](<../../../../../../features/entities/assign-files-dialog.tsx#L52>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-504ef370a4a791a0"></a>

## AssignFilesDialog.loadDirectory

[features/entities/assign-files-dialog.tsx:58](<../../../../../../features/entities/assign-files-dialog.tsx#L58>) · FunctionExpression · production · [Entity UI](<../../../../modules/portal-entities.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [AssignFilesDialog](<assign-files-dialog.tsx.md#s-27e58f9de0368923>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: () =&gt; void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- setLoading — external-or-dynamic-dispatch; [features/entities/assign-files-dialog.tsx:60](<../../../../../../features/entities/assign-files-dialog.tsx#L60>)
- setError — external-or-dynamic-dispatch; [features/entities/assign-files-dialog.tsx:61](<../../../../../../features/entities/assign-files-dialog.tsx#L61>)
- setTimeout — external-or-dynamic-dispatch; [features/entities/assign-files-dialog.tsx:81](<../../../../../../features/entities/assign-files-dialog.tsx#L81>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-ffadbf9590b8d852"></a>

## AssignFilesDialog.loadDirectory.listFiles

[features/entities/assign-files-dialog.tsx:63](<../../../../../../features/entities/assign-files-dialog.tsx#L63>) · FunctionDeclaration · production · [Entity UI](<../../../../modules/portal-entities.md>)

Reads names/folders/stat sizes through the existing Universe root; no content is requested.

Purpose evidence: jsdoc.

Lexical owner: [AssignFilesDialog.loadDirectory](<assign-files-dialog.tsx.md#s-504ef370a4a791a0>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [requireWorldViewBridge](<../worldview/chip-session.ts.md#s-724ceb52bd424e76>) — [features/entities/assign-files-dialog.tsx:65](<../../../../../../features/entities/assign-files-dialog.tsx#L65>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- requireWorldViewBridge().request — declaration-without-runtime-body; [features/entities/assign-files-dialog.tsx:65](<../../../../../../features/entities/assign-files-dialog.tsx#L65>)
- setListing — external-or-dynamic-dispatch; [features/entities/assign-files-dialog.tsx:69](<../../../../../../features/entities/assign-files-dialog.tsx#L69>)
- setError — external-or-dynamic-dispatch; [features/entities/assign-files-dialog.tsx:72](<../../../../../../features/entities/assign-files-dialog.tsx#L72>)
- setLoading — external-or-dynamic-dispatch; [features/entities/assign-files-dialog.tsx:78](<../../../../../../features/entities/assign-files-dialog.tsx#L78>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-6263abda9a60900d"></a>

## AssignFilesDialog.loadDirectory.cancelListing

[features/entities/assign-files-dialog.tsx:83](<../../../../../../features/entities/assign-files-dialog.tsx#L83>) · FunctionExpression · production · [Entity UI](<../../../../modules/portal-entities.md>)

Cancels pending searches and makes in-flight results inert after unmount.

Purpose evidence: jsdoc.

Lexical owner: [AssignFilesDialog.loadDirectory](<assign-files-dialog.tsx.md#s-504ef370a4a791a0>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- clearTimeout — external-or-dynamic-dispatch; [features/entities/assign-files-dialog.tsx:85](<../../../../../../features/entities/assign-files-dialog.tsx#L85>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-85665b08ab496a7e"></a>

## AssignFilesDialog.searchFiles

[features/entities/assign-files-dialog.tsx:92](<../../../../../../features/entities/assign-files-dialog.tsx#L92>) · FunctionDeclaration · production · [Entity UI](<../../../../modules/portal-entities.md>)

Changes search text while preserving selected files across folders.

Purpose evidence: jsdoc.

Lexical owner: [AssignFilesDialog](<assign-files-dialog.tsx.md#s-27e58f9de0368923>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| event | ChangeEvent&lt;HTMLInputElement&gt; | annotation | required |

Returns: void (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- setQuery — external-or-dynamic-dispatch; [features/entities/assign-files-dialog.tsx:93](<../../../../../../features/entities/assign-files-dialog.tsx#L93>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-ae90455ee31b4466"></a>

## AssignFilesDialog.browseFolder

[features/entities/assign-files-dialog.tsx:96](<../../../../../../features/entities/assign-files-dialog.tsx#L96>) · FunctionDeclaration · production · [Entity UI](<../../../../modules/portal-entities.md>)

Navigates a real Universe folder and exits global search mode.

Purpose evidence: jsdoc.

Lexical owner: [AssignFilesDialog](<assign-files-dialog.tsx.md#s-27e58f9de0368923>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| event | React.MouseEvent&lt;HTMLButtonElement&gt; | annotation | required |

Returns: void (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- setDirectory — external-or-dynamic-dispatch; [features/entities/assign-files-dialog.tsx:97](<../../../../../../features/entities/assign-files-dialog.tsx#L97>)
- setQuery — external-or-dynamic-dispatch; [features/entities/assign-files-dialog.tsx:98](<../../../../../../features/entities/assign-files-dialog.tsx#L98>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-66ae5334cfed5d82"></a>

## AssignFilesDialog.toggleFile

[features/entities/assign-files-dialog.tsx:101](<../../../../../../features/entities/assign-files-dialog.tsx#L101>) · FunctionDeclaration · production · [Entity UI](<../../../../modules/portal-entities.md>)

Toggles a file reference in the staged multi-selection without writing metadata.

Purpose evidence: jsdoc.

Lexical owner: [AssignFilesDialog](<assign-files-dialog.tsx.md#s-27e58f9de0368923>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| event | ChangeEvent&lt;HTMLInputElement&gt; | annotation | required |

Returns: void (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- Set — external-or-dynamic-dispatch; [features/entities/assign-files-dialog.tsx:102](<../../../../../../features/entities/assign-files-dialog.tsx#L102>)
- next.add — external-or-dynamic-dispatch; [features/entities/assign-files-dialog.tsx:103](<../../../../../../features/entities/assign-files-dialog.tsx#L103>)
- next.delete — external-or-dynamic-dispatch; [features/entities/assign-files-dialog.tsx:104](<../../../../../../features/entities/assign-files-dialog.tsx#L104>)
- setSelected — external-or-dynamic-dispatch; [features/entities/assign-files-dialog.tsx:105](<../../../../../../features/entities/assign-files-dialog.tsx#L105>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-a01e254655f4acbc"></a>

## AssignFilesDialog.confirmAssignment

[features/entities/assign-files-dialog.tsx:108](<../../../../../../features/entities/assign-files-dialog.tsx#L108>) · FunctionDeclaration · production · [Entity UI](<../../../../modules/portal-entities.md>)

Confirms the displayed selection, waits for chip persistence, and atomically registers only file metadata.

Purpose evidence: jsdoc.

Lexical owner: [AssignFilesDialog](<assign-files-dialog.tsx.md#s-27e58f9de0368923>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: Promise&lt;void&gt; (annotation). Implementation present.

**Calls (statically resolved):**

- [flushWorldViewWrites](<../worldview/chip-session.ts.md#s-14cfc10edca5869e>) — [features/entities/assign-files-dialog.tsx:114](<../../../../../../features/entities/assign-files-dialog.tsx#L114>)
- [requireWorldViewBridge](<../worldview/chip-session.ts.md#s-724ceb52bd424e76>) — [features/entities/assign-files-dialog.tsx:115](<../../../../../../features/entities/assign-files-dialog.tsx#L115>)
- [replaceChipSources](<../worldview/chip-session.ts.md#s-9ff8f1a12cc5c2ed>) — [features/entities/assign-files-dialog.tsx:119](<../../../../../../features/entities/assign-files-dialog.tsx#L119>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 6.

- setBusy — external-or-dynamic-dispatch; [features/entities/assign-files-dialog.tsx:111](<../../../../../../features/entities/assign-files-dialog.tsx#L111>)
- setError — external-or-dynamic-dispatch; [features/entities/assign-files-dialog.tsx:112](<../../../../../../features/entities/assign-files-dialog.tsx#L112>)
- requireWorldViewBridge().request — declaration-without-runtime-body; [features/entities/assign-files-dialog.tsx:115](<../../../../../../features/entities/assign-files-dialog.tsx#L115>)
- onClose — external-or-dynamic-dispatch; [features/entities/assign-files-dialog.tsx:120](<../../../../../../features/entities/assign-files-dialog.tsx#L120>)
- setError — external-or-dynamic-dispatch; [features/entities/assign-files-dialog.tsx:122](<../../../../../../features/entities/assign-files-dialog.tsx#L122>)
- setBusy — external-or-dynamic-dispatch; [features/entities/assign-files-dialog.tsx:127](<../../../../../../features/entities/assign-files-dialog.tsx#L127>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-30a8d8444007f8b7"></a>

## AssignFilesDialog.cancelPicker

[features/entities/assign-files-dialog.tsx:131](<../../../../../../features/entities/assign-files-dialog.tsx#L131>) · FunctionDeclaration · production · [Entity UI](<../../../../modules/portal-entities.md>)

Prevents closing only while a confirmed disk mutation is already running.

Purpose evidence: jsdoc.

Lexical owner: [AssignFilesDialog](<assign-files-dialog.tsx.md#s-27e58f9de0368923>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| event | SyntheticEvent&lt;HTMLDialogElement&gt; | annotation | required |

Returns: void (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- event.preventDefault — external-or-dynamic-dispatch; [features/entities/assign-files-dialog.tsx:132](<../../../../../../features/entities/assign-files-dialog.tsx#L132>)
- onClose — external-or-dynamic-dispatch; [features/entities/assign-files-dialog.tsx:133](<../../../../../../features/entities/assign-files-dialog.tsx#L133>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d68150d710d0c520"></a>

## AssignFilesDialog.retryListing

[features/entities/assign-files-dialog.tsx:136](<../../../../../../features/entities/assign-files-dialog.tsx#L136>) · FunctionDeclaration · production · [Entity UI](<../../../../modules/portal-entities.md>)

Repeats a failed metadata listing without losing the staged selection.

Purpose evidence: jsdoc.

Lexical owner: [AssignFilesDialog](<assign-files-dialog.tsx.md#s-27e58f9de0368923>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- setReload — external-or-dynamic-dispatch; [features/entities/assign-files-dialog.tsx:137](<../../../../../../features/entities/assign-files-dialog.tsx#L137>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-a511a6b3c268693b"></a>

## AssignFilesDialog.renderEntry

[features/entities/assign-files-dialog.tsx:192](<../../../../../../features/entities/assign-files-dialog.tsx#L192>) · FunctionExpression · production · [Entity UI](<../../../../modules/portal-entities.md>)

Renders folders as navigation containers and files as selectable metadata rows.

Purpose evidence: jsdoc.

Lexical owner: [AssignFilesDialog](<assign-files-dialog.tsx.md#s-27e58f9de0368923>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| entry | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- assigned.has — external-or-dynamic-dispatch; [features/entities/assign-files-dialog.tsx:210](<../../../../../../features/entities/assign-files-dialog.tsx#L210>)
- selected.has — external-or-dynamic-dispatch; [features/entities/assign-files-dialog.tsx:216](<../../../../../../features/entities/assign-files-dialog.tsx#L216>)
- selected.has — external-or-dynamic-dispatch; [features/entities/assign-files-dialog.tsx:221](<../../../../../../features/entities/assign-files-dialog.tsx#L221>)
- entry.sizeBytes.toLocaleString — external-or-dynamic-dispatch; [features/entities/assign-files-dialog.tsx:235](<../../../../../../features/entities/assign-files-dialog.tsx#L235>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
