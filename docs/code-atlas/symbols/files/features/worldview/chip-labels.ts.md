# features/worldview/chip-labels.ts: symbols

[Atlas](<../../../../README.md>) / [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>) / [features/worldview/chip-labels.ts:1](<../../../../../../features/worldview/chip-labels.ts#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [features/worldview/chip-labels.ts](<chip-labels.ts.md#s-57cc669b63d1000f>) (Module)
- [chipLabelAnchor](<chip-labels.ts.md#s-d95382b476d6da70>) (FunctionDeclaration)
- [chipAgentControlClear](<chip-labels.ts.md#s-56440dd4a16ca4bb>) (FunctionDeclaration)
- [chipScreenBuckets](<chip-labels.ts.md#s-62d0ffbc24e3261a>) (FunctionDeclaration)
- [chipAgentAnchor](<chip-labels.ts.md#s-099d940751a1951f>) (FunctionDeclaration)
- [updateChipLabels](<chip-labels.ts.md#s-06a874e07ffa5d87>) (FunctionDeclaration)
- [updateChipLabels.&lt;anonymous@123:38&gt;](<chip-labels.ts.md#s-e4fa28f8cc5a89f6>) (ArrowFunction)
- [updateChipLabels.&lt;anonymous@125:17&gt;](<chip-labels.ts.md#s-11549f8de4e71e97>) (ArrowFunction)
- [updateChipLabels.&lt;anonymous@134:5&gt;](<chip-labels.ts.md#s-e84f00a1622d1118>) (ArrowFunction)

<a id="s-57cc669b63d1000f"></a>

## features/worldview/chip-labels.ts

[features/worldview/chip-labels.ts:1](<../../../../../../features/worldview/chip-labels.ts#L1>) · Module · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/worldview/chip-labels.test.cjs:19](<../../../../../../features/worldview/chip-labels.test.cjs#L19>) — file-import-only; coverage not established.

<a id="s-d95382b476d6da70"></a>

## chipLabelAnchor

[features/worldview/chip-labels.ts:15](<../../../../../../features/worldview/chip-labels.ts#L15>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Projects the floating title's top-center anchor ten CSS pixels below the chip's bottom face, including camera scale and live dragging. Pure.

Purpose evidence: jsdoc.

Exported as: chipLabelAnchor ([features/worldview/chip-labels.ts:1](<../../../../../../features/worldview/chip-labels.ts#L1>)).

Lexical owner: [features/worldview/chip-labels.ts](<chip-labels.ts.md#s-57cc669b63d1000f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| chip | WorldViewChip | annotation | required |
| camera | WorldCamera | annotation | required |
| viewport | Viewport | annotation | required |
| preview | ChipPreview &#124; null | annotation | optional |

Returns: Point (annotation). Implementation present.

**Calls (statically resolved):**

- [worldToScreen](<coordinates.ts.md#s-3ab4b3de6a773d84>) — [features/worldview/chip-labels.ts:21](<../../../../../../features/worldview/chip-labels.ts#L21>)

**Called by (statically resolved):**

- [&lt;anonymous@62:66&gt;](<chip-labels.test.cjs.md#s-fefc609890b3cde2>) — [features/worldview/chip-labels.test.cjs:81](<../../../../../../features/worldview/chip-labels.test.cjs#L81>)
- [&lt;anonymous@62:66&gt;](<chip-labels.test.cjs.md#s-fefc609890b3cde2>) — [features/worldview/chip-labels.test.cjs:87](<../../../../../../features/worldview/chip-labels.test.cjs#L87>)
- [updateChipLabels](<chip-labels.ts.md#s-06a874e07ffa5d87>) — [features/worldview/chip-labels.ts:146](<../../../../../../features/worldview/chip-labels.ts#L146>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/worldview/chip-labels.test.cjs:81](<../../../../../../features/worldview/chip-labels.test.cjs#L81>) — static-call-site; coverage not established.
- [features/worldview/chip-labels.test.cjs:87](<../../../../../../features/worldview/chip-labels.test.cjs#L87>) — static-call-site; coverage not established.
- [features/worldview/chip-labels.test.cjs:19](<../../../../../../features/worldview/chip-labels.test.cjs#L19>) — file-import-only; coverage not established.

<a id="s-56440dd4a16ca4bb"></a>

## chipAgentControlClear

[features/worldview/chip-labels.ts:33](<../../../../../../features/worldview/chip-labels.ts#L33>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Tests a control's nine hit-area samples against nearby canvas geometry and connector handles. Occluded controls yield to the existing world interactions. Pure.

Purpose evidence: jsdoc.

Exported as: chipAgentControlClear ([features/worldview/chip-labels.ts:1](<../../../../../../features/worldview/chip-labels.ts#L1>)).

Lexical owner: [features/worldview/chip-labels.ts](<chip-labels.ts.md#s-57cc669b63d1000f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| anchor | Point | annotation | required |
| nearby | readonly WorldViewChip&#91;&#93; | annotation | required |
| camera | WorldCamera | annotation | required |
| viewport | Viewport | annotation | required |

Returns: boolean (annotation). Implementation present.

**Calls (statically resolved):**

- [hitTestWorld](<chip-renderer.ts.md#s-9f8923f1efd018f7>) — [features/worldview/chip-labels.ts:43](<../../../../../../features/worldview/chip-labels.ts#L43>)
- [hitTestPort](<connectors.ts.md#s-5dc2a0651adbdadf>) — [features/worldview/chip-labels.ts:44](<../../../../../../features/worldview/chip-labels.ts#L44>)

**Called by (statically resolved):**

- [&lt;anonymous@25:80&gt;](<chip-labels.test.cjs.md#s-7da6c7fcbc76f655>) — [features/worldview/chip-labels.test.cjs:31](<../../../../../../features/worldview/chip-labels.test.cjs#L31>)
- [&lt;anonymous@25:80&gt;](<chip-labels.test.cjs.md#s-7da6c7fcbc76f655>) — [features/worldview/chip-labels.test.cjs:33](<../../../../../../features/worldview/chip-labels.test.cjs#L33>)
- [updateChipLabels](<chip-labels.ts.md#s-06a874e07ffa5d87>) — [features/worldview/chip-labels.ts:180](<../../../../../../features/worldview/chip-labels.ts#L180>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/worldview/chip-labels.test.cjs:31](<../../../../../../features/worldview/chip-labels.test.cjs#L31>) — static-call-site; coverage not established.
- [features/worldview/chip-labels.test.cjs:33](<../../../../../../features/worldview/chip-labels.test.cjs#L33>) — static-call-site; coverage not established.
- [features/worldview/chip-labels.test.cjs:19](<../../../../../../features/worldview/chip-labels.test.cjs#L19>) — file-import-only; coverage not established.

<a id="s-62d0ffbc24e3261a"></a>

## chipScreenBuckets

[features/worldview/chip-labels.ts:52](<../../../../../../features/worldview/chip-labels.ts#L52>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Indexes visible chip/building bounds in screen-space buckets once per paint, limiting assignment-control collision checks to local neighbors.

Purpose evidence: jsdoc.

Lexical owner: [features/worldview/chip-labels.ts](<chip-labels.ts.md#s-57cc669b63d1000f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| chips | readonly WorldViewChip&#91;&#93; | annotation | required |
| camera | WorldCamera | annotation | required |
| viewport | Viewport | annotation | required |

Returns: Map&lt;string, WorldViewChip&#91;&#93;&gt; (annotation). Implementation present.

**Calls (statically resolved):**

- [worldToScreen](<coordinates.ts.md#s-3ab4b3de6a773d84>) — [features/worldview/chip-labels.ts:59](<../../../../../../features/worldview/chip-labels.ts#L59>)

**Called by (statically resolved):**

- [updateChipLabels](<chip-labels.ts.md#s-06a874e07ffa5d87>) — [features/worldview/chip-labels.ts:129](<../../../../../../features/worldview/chip-labels.ts#L129>)

Unresolved / external call sites: 14.

- Map — external-or-dynamic-dispatch; [features/worldview/chip-labels.ts:57](<../../../../../../features/worldview/chip-labels.ts#L57>)
- Math.max — external-or-dynamic-dispatch; [features/worldview/chip-labels.ts:60](<../../../../../../features/worldview/chip-labels.ts#L60>)
- Math.floor — external-or-dynamic-dispatch; [features/worldview/chip-labels.ts:62](<../../../../../../features/worldview/chip-labels.ts#L62>)
- Math.min — external-or-dynamic-dispatch; [features/worldview/chip-labels.ts:64](<../../../../../../features/worldview/chip-labels.ts#L64>)
- Math.floor — external-or-dynamic-dispatch; [features/worldview/chip-labels.ts:65](<../../../../../../features/worldview/chip-labels.ts#L65>)
- Math.floor — external-or-dynamic-dispatch; [features/worldview/chip-labels.ts:66](<../../../../../../features/worldview/chip-labels.ts#L66>)
- Math.max — external-or-dynamic-dispatch; [features/worldview/chip-labels.ts:68](<../../../../../../features/worldview/chip-labels.ts#L68>)
- Math.floor — external-or-dynamic-dispatch; [features/worldview/chip-labels.ts:70](<../../../../../../features/worldview/chip-labels.ts#L70>)
- 6 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [features/worldview/chip-labels.test.cjs:19](<../../../../../../features/worldview/chip-labels.test.cjs#L19>) — file-import-only; coverage not established.

<a id="s-099d940751a1951f"></a>

## chipAgentAnchor

[features/worldview/chip-labels.ts:93](<../../../../../../features/worldview/chip-labels.ts#L93>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Anchors the 22px assignment control below the bottom-right side face, reserving the south port's constant-pixel hit area at every zoom level. Pure.

Purpose evidence: jsdoc.

Exported as: chipAgentAnchor ([features/worldview/chip-labels.ts:1](<../../../../../../features/worldview/chip-labels.ts#L1>)).

Lexical owner: [features/worldview/chip-labels.ts](<chip-labels.ts.md#s-57cc669b63d1000f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| chip | WorldViewChip | annotation | required |
| camera | WorldCamera | annotation | required |
| viewport | Viewport | annotation | required |
| preview | ChipPreview &#124; null | annotation | optional |

Returns: Point (annotation). Implementation present.

**Calls (statically resolved):**

- [worldToScreen](<coordinates.ts.md#s-3ab4b3de6a773d84>) — [features/worldview/chip-labels.ts:99](<../../../../../../features/worldview/chip-labels.ts#L99>)

**Called by (statically resolved):**

- [&lt;anonymous@25:80&gt;](<chip-labels.test.cjs.md#s-7da6c7fcbc76f655>) — [features/worldview/chip-labels.test.cjs:30](<../../../../../../features/worldview/chip-labels.test.cjs#L30>)
- [&lt;anonymous@39:95&gt;](<chip-labels.test.cjs.md#s-554d690bc54a95e7>) — [features/worldview/chip-labels.test.cjs:51](<../../../../../../features/worldview/chip-labels.test.cjs#L51>)
- [updateChipLabels](<chip-labels.ts.md#s-06a874e07ffa5d87>) — [features/worldview/chip-labels.ts:166](<../../../../../../features/worldview/chip-labels.ts#L166>)

Unresolved / external call sites: 1.

- Math.max — external-or-dynamic-dispatch; [features/worldview/chip-labels.ts:109](<../../../../../../features/worldview/chip-labels.ts#L109>)

**Related tests / acceptance harnesses:**

- [features/worldview/chip-labels.test.cjs:30](<../../../../../../features/worldview/chip-labels.test.cjs#L30>) — static-call-site; coverage not established.
- [features/worldview/chip-labels.test.cjs:51](<../../../../../../features/worldview/chip-labels.test.cjs#L51>) — static-call-site; coverage not established.
- [features/worldview/chip-labels.test.cjs:19](<../../../../../../features/worldview/chip-labels.test.cjs#L19>) — file-import-only; coverage not established.

<a id="s-06a874e07ffa5d87"></a>

## updateChipLabels

[features/worldview/chip-labels.ts:115](<../../../../../../features/worldview/chip-labels.ts#L115>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Positions titles and attached assignment controls with the live camera/drag preview, culling offscreen elements without React updates per frame.

Purpose evidence: jsdoc.

Exported as: updateChipLabels ([features/worldview/chip-labels.ts:1](<../../../../../../features/worldview/chip-labels.ts#L1>)).

Lexical owner: [features/worldview/chip-labels.ts](<chip-labels.ts.md#s-57cc669b63d1000f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| container | HTMLDivElement &#124; null | annotation | required |
| chips | readonly WorldViewChip&#91;&#93; | annotation | required |
| camera | WorldCamera | annotation | required |
| viewport | Viewport | annotation | required |
| preview | ChipPreview &#124; null | annotation | optional |

Returns: void (annotation). Implementation present.

**Calls (statically resolved):**

- [chipScreenBuckets](<chip-labels.ts.md#s-62d0ffbc24e3261a>) — [features/worldview/chip-labels.ts:129](<../../../../../../features/worldview/chip-labels.ts#L129>)
- [chipLabelAnchor](<chip-labels.ts.md#s-d95382b476d6da70>) — [features/worldview/chip-labels.ts:146](<../../../../../../features/worldview/chip-labels.ts#L146>)
- [chipAgentAnchor](<chip-labels.ts.md#s-099d940751a1951f>) — [features/worldview/chip-labels.ts:166](<../../../../../../features/worldview/chip-labels.ts#L166>)
- [chipAgentControlClear](<chip-labels.ts.md#s-56440dd4a16ca4bb>) — [features/worldview/chip-labels.ts:180](<../../../../../../features/worldview/chip-labels.ts#L180>)

**Called by (statically resolved):**

- [WorldView.connectWorldCanvas.paint](<worldview.tsx.md#s-f30798102198d6d1>) — [features/worldview/worldview.tsx:297](<../../../../../../features/worldview/worldview.tsx#L297>)

Unresolved / external call sites: 13.

- Map — external-or-dynamic-dispatch; [features/worldview/chip-labels.ts:123](<../../../../../../features/worldview/chip-labels.ts#L123>)
- chips.map — external-or-dynamic-dispatch; [features/worldview/chip-labels.ts:123](<../../../../../../features/worldview/chip-labels.ts#L123>)
- chips.map — external-or-dynamic-dispatch; [features/worldview/chip-labels.ts:125](<../../../../../../features/worldview/chip-labels.ts#L125>)
- Array.from( container.querySelectorAll&lt;HTMLButtonElement&gt;("&#91;data-chip-id&#93;"), ).map — external-or-dynamic-dispatch; [features/worldview/chip-labels.ts:130](<../../../../../../features/worldview/chip-labels.ts#L130>)
- Array.from — external-or-dynamic-dispatch; [features/worldview/chip-labels.ts:130](<../../../../../../features/worldview/chip-labels.ts#L130>)
- container.querySelectorAll — external-or-dynamic-dispatch; [features/worldview/chip-labels.ts:131](<../../../../../../features/worldview/chip-labels.ts#L131>)
- container.querySelectorAll — external-or-dynamic-dispatch; [features/worldview/chip-labels.ts:158](<../../../../../../features/worldview/chip-labels.ts#L158>)
- entities.get — external-or-dynamic-dispatch; [features/worldview/chip-labels.ts:161](<../../../../../../features/worldview/chip-labels.ts#L161>)
- 5 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [features/worldview/chip-labels.test.cjs:19](<../../../../../../features/worldview/chip-labels.test.cjs#L19>) — file-import-only; coverage not established.

<a id="s-e4fa28f8cc5a89f6"></a>

## updateChipLabels.&lt;anonymous@123:38&gt;

[features/worldview/chip-labels.ts:123](<../../../../../../features/worldview/chip-labels.ts#L123>) · ArrowFunction · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [updateChipLabels](<chip-labels.ts.md#s-06a874e07ffa5d87>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| chip | any | compiler-inferred | required |

Returns: {} (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/worldview/chip-labels.test.cjs:19](<../../../../../../features/worldview/chip-labels.test.cjs#L19>) — file-import-only; coverage not established.

<a id="s-11549f8de4e71e97"></a>

## updateChipLabels.&lt;anonymous@125:17&gt;

[features/worldview/chip-labels.ts:125](<../../../../../../features/worldview/chip-labels.ts#L125>) · ArrowFunction · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [updateChipLabels](<chip-labels.ts.md#s-06a874e07ffa5d87>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| chip | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/worldview/chip-labels.test.cjs:19](<../../../../../../features/worldview/chip-labels.test.cjs#L19>) — file-import-only; coverage not established.

<a id="s-e84f00a1622d1118"></a>

## updateChipLabels.&lt;anonymous@134:5&gt;

[features/worldview/chip-labels.ts:134](<../../../../../../features/worldview/chip-labels.ts#L134>) · ArrowFunction · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Measures the full wrapped title against its current stable entity identity.

Purpose evidence: jsdoc.

Lexical owner: [updateChipLabels](<chip-labels.ts.md#s-06a874e07ffa5d87>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| element | any | compiler-inferred | required |

Returns: { element: any; chip: any; width: any; height: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- entities.get — external-or-dynamic-dispatch; [features/worldview/chip-labels.ts:136](<../../../../../../features/worldview/chip-labels.ts#L136>)

**Related tests / acceptance harnesses:**

- [features/worldview/chip-labels.test.cjs:19](<../../../../../../features/worldview/chip-labels.test.cjs#L19>) — file-import-only; coverage not established.
