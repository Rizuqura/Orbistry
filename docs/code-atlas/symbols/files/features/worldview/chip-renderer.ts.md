# features/worldview/chip-renderer.ts: symbols

[Atlas](<../../../../README.md>) / [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>) / [features/worldview/chip-renderer.ts:1](<../../../../../../features/worldview/chip-renderer.ts#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [features/worldview/chip-renderer.ts](<chip-renderer.ts.md#s-f8db8d67d065748f>) (Module)
- [ChipPreview](<chip-renderer.ts.md#s-8b30d343890ac45a>) (TypeAliasDeclaration)
- [orderChips](<chip-renderer.ts.md#s-5dbcc4ee15db6a00>) (FunctionDeclaration)
- [orderChips.compareDepth](<chip-renderer.ts.md#s-4c69522c10796fef>) (FunctionExpression)
- [hitTestChip](<chip-renderer.ts.md#s-1e79741cd3746389>) (FunctionDeclaration)
- [hitTestWorld](<chip-renderer.ts.md#s-9f8923f1efd018f7>) (FunctionDeclaration)
- [draggedChipPosition](<chip-renderer.ts.md#s-bd9aa40a9c5f1327>) (FunctionDeclaration)
- [drawPolygon](<chip-renderer.ts.md#s-329854438404da04>) (FunctionDeclaration)
- [drawWorldChips](<chip-renderer.ts.md#s-2b109a269a813bfa>) (FunctionDeclaration)

<a id="s-f8db8d67d065748f"></a>

## features/worldview/chip-renderer.ts

[features/worldview/chip-renderer.ts:1](<../../../../../../features/worldview/chip-renderer.ts#L1>) · Module · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-8b30d343890ac45a"></a>

## ChipPreview

[features/worldview/chip-renderer.ts:26](<../../../../../../features/worldview/chip-renderer.ts#L26>) · TypeAliasDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: ChipPreview ([features/worldview/chip-renderer.ts:1](<../../../../../../features/worldview/chip-renderer.ts#L1>)).

Lexical owner: [features/worldview/chip-renderer.ts](<chip-renderer.ts.md#s-f8db8d67d065748f>).

Contract evidence: typescript-declaration. [Full declaration index](<../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-5dbcc4ee15db6a00"></a>

## orderChips

[features/worldview/chip-renderer.ts:29](<../../../../../../features/worldview/chip-renderer.ts#L29>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Orders opaque platforms from the back of the world to the front; hit testing reverses this order.

Purpose evidence: jsdoc.

Exported as: orderChips ([features/worldview/chip-renderer.ts:1](<../../../../../../features/worldview/chip-renderer.ts#L1>)).

Lexical owner: [features/worldview/chip-renderer.ts](<chip-renderer.ts.md#s-f8db8d67d065748f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| chips | readonly WorldViewChip&#91;&#93; | annotation | required |
| preview | ChipPreview &#124; null | annotation | optional |

Returns: WorldViewChip&#91;&#93; (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [hitTestWorld](<chip-renderer.ts.md#s-9f8923f1efd018f7>) — [features/worldview/chip-renderer.ts:69](<../../../../../../features/worldview/chip-renderer.ts#L69>)
- [drawWorldChips](<chip-renderer.ts.md#s-2b109a269a813bfa>) — [features/worldview/chip-renderer.ts:134](<../../../../../../features/worldview/chip-renderer.ts#L134>)

Unresolved / external call sites: 2.

- ordered.push — external-or-dynamic-dispatch; [features/worldview/chip-renderer.ts:35](<../../../../../../features/worldview/chip-renderer.ts#L35>)
- ordered.sort — external-or-dynamic-dispatch; [features/worldview/chip-renderer.ts:39](<../../../../../../features/worldview/chip-renderer.ts#L39>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-4c69522c10796fef"></a>

## orderChips.compareDepth

[features/worldview/chip-renderer.ts:39](<../../../../../../features/worldview/chip-renderer.ts#L39>) · FunctionExpression · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [orderChips](<chip-renderer.ts.md#s-5dbcc4ee15db6a00>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| first | any | compiler-inferred | required |
| second | any | compiler-inferred | required |

Returns: number (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-1e79741cd3746389"></a>

## hitTestChip

[features/worldview/chip-renderer.ts:53](<../../../../../../features/worldview/chip-renderer.ts#L53>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Returns the frontmost chip under viewport-local CSS pixels, including its thin side faces. Callers resolve geometric connection ports separately before testing platform selection.

Purpose evidence: jsdoc.

Exported as: hitTestChip ([features/worldview/chip-renderer.ts:1](<../../../../../../features/worldview/chip-renderer.ts#L1>)).

Lexical owner: [features/worldview/chip-renderer.ts](<chip-renderer.ts.md#s-f8db8d67d065748f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| point | Point | annotation | required |
| chips | readonly WorldViewChip&#91;&#93; | annotation | required |
| camera | WorldCamera | annotation | required |
| viewport | Viewport | annotation | required |

Returns: WorldViewChip &#124; null (annotation). Implementation present.

**Calls (statically resolved):**

- [hitTestWorld](<chip-renderer.ts.md#s-9f8923f1efd018f7>) — [features/worldview/chip-renderer.ts:59](<../../../../../../features/worldview/chip-renderer.ts#L59>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-9f8923f1efd018f7"></a>

## hitTestWorld

[features/worldview/chip-renderer.ts:63](<../../../../../../features/worldview/chip-renderer.ts#L63>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Resolves buildings before their own platform, following the reverse of the scene's painter order.

Purpose evidence: jsdoc.

Exported as: hitTestWorld ([features/worldview/chip-renderer.ts:1](<../../../../../../features/worldview/chip-renderer.ts#L1>)).

Lexical owner: [features/worldview/chip-renderer.ts](<chip-renderer.ts.md#s-f8db8d67d065748f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| point | Point | annotation | required |
| chips | readonly WorldViewChip&#91;&#93; | annotation | required |
| camera | WorldCamera | annotation | required |
| viewport | Viewport | annotation | required |

Returns: { chip: WorldViewChip; building: WorldBuilding &#124; null } &#124; null (annotation). Implementation present.

**Calls (statically resolved):**

- [orderChips](<chip-renderer.ts.md#s-5dbcc4ee15db6a00>) — [features/worldview/chip-renderer.ts:69](<../../../../../../features/worldview/chip-renderer.ts#L69>)
- [hitTestFileBuilding](<building-renderer.ts.md#s-9df5fe0af1c30539>) — [features/worldview/chip-renderer.ts:72](<../../../../../../features/worldview/chip-renderer.ts#L72>)
- [worldToScreen](<coordinates.ts.md#s-3ab4b3de6a773d84>) — [features/worldview/chip-renderer.ts:74](<../../../../../../features/worldview/chip-renderer.ts#L74>)

**Called by (statically resolved):**

- [chipAgentControlClear](<chip-labels.ts.md#s-56440dd4a16ca4bb>) — [features/worldview/chip-labels.ts:43](<../../../../../../features/worldview/chip-labels.ts#L43>)
- [hitTestChip](<chip-renderer.ts.md#s-1e79741cd3746389>) — [features/worldview/chip-renderer.ts:59](<../../../../../../features/worldview/chip-renderer.ts#L59>)
- [WorldView.connectWorldCanvas.visiblePort](<worldview.tsx.md#s-503fa0e23a0b68cb>) — [features/worldview/worldview.tsx:460](<../../../../../../features/worldview/worldview.tsx#L460>)
- [WorldView.connectWorldCanvas.startDrag](<worldview.tsx.md#s-8232bd9f09185164>) — [features/worldview/worldview.tsx:493](<../../../../../../features/worldview/worldview.tsx#L493>)
- [WorldView.connectWorldCanvas.moveDrag](<worldview.tsx.md#s-c9cbc6a06e08fe3f>) — [features/worldview/worldview.tsx:587](<../../../../../../features/worldview/worldview.tsx#L587>)

Unresolved / external call sites: 1.

- Math.abs — external-or-dynamic-dispatch; [features/worldview/chip-renderer.ts:76](<../../../../../../features/worldview/chip-renderer.ts#L76>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-bd9aa40a9c5f1327"></a>

## draggedChipPosition

[features/worldview/chip-renderer.ts:91](<../../../../../../features/worldview/chip-renderer.ts#L91>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Returns a drag preview preserving the pointer's world offset from the chip center.

Purpose evidence: jsdoc.

Exported as: draggedChipPosition ([features/worldview/chip-renderer.ts:1](<../../../../../../features/worldview/chip-renderer.ts#L1>)).

Lexical owner: [features/worldview/chip-renderer.ts](<chip-renderer.ts.md#s-f8db8d67d065748f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| pointer | Point | annotation | required |
| offset | Point | annotation | required |
| camera | WorldCamera | annotation | required |
| viewport | Viewport | annotation | required |

Returns: Point (annotation). Implementation present.

**Calls (statically resolved):**

- [screenToWorld](<coordinates.ts.md#s-c7c956b865bb27e7>) — [features/worldview/chip-renderer.ts:97](<../../../../../../features/worldview/chip-renderer.ts#L97>)

**Called by (statically resolved):**

- [WorldView.connectWorldCanvas.moveDrag](<worldview.tsx.md#s-c9cbc6a06e08fe3f>) — [features/worldview/worldview.tsx:632](<../../../../../../features/worldview/worldview.tsx#L632>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-329854438404da04"></a>

## drawPolygon

[features/worldview/chip-renderer.ts:102](<../../../../../../features/worldview/chip-renderer.ts#L102>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Strokes and fills a closed polygon in the canvas's current local coordinate system.

Purpose evidence: jsdoc.

Lexical owner: [features/worldview/chip-renderer.ts](<chip-renderer.ts.md#s-f8db8d67d065748f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| context | CanvasRenderingContext2D | annotation | required |
| vertices | readonly Point&#91;&#93; | annotation | required |
| fill | string | annotation | required |

Returns: void (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [drawWorldChips](<chip-renderer.ts.md#s-2b109a269a813bfa>) — [features/worldview/chip-renderer.ts:155](<../../../../../../features/worldview/chip-renderer.ts#L155>)
- [drawWorldChips](<chip-renderer.ts.md#s-2b109a269a813bfa>) — [features/worldview/chip-renderer.ts:165](<../../../../../../features/worldview/chip-renderer.ts#L165>)
- [drawWorldChips](<chip-renderer.ts.md#s-2b109a269a813bfa>) — [features/worldview/chip-renderer.ts:176](<../../../../../../features/worldview/chip-renderer.ts#L176>)

Unresolved / external call sites: 6.

- context.beginPath — external-or-dynamic-dispatch; [features/worldview/chip-renderer.ts:107](<../../../../../../features/worldview/chip-renderer.ts#L107>)
- context.moveTo — external-or-dynamic-dispatch; [features/worldview/chip-renderer.ts:108](<../../../../../../features/worldview/chip-renderer.ts#L108>)
- context.lineTo — external-or-dynamic-dispatch; [features/worldview/chip-renderer.ts:110](<../../../../../../features/worldview/chip-renderer.ts#L110>)
- context.closePath — external-or-dynamic-dispatch; [features/worldview/chip-renderer.ts:111](<../../../../../../features/worldview/chip-renderer.ts#L111>)
- context.fill — external-or-dynamic-dispatch; [features/worldview/chip-renderer.ts:113](<../../../../../../features/worldview/chip-renderer.ts#L113>)
- context.stroke — external-or-dynamic-dispatch; [features/worldview/chip-renderer.ts:114](<../../../../../../features/worldview/chip-renderer.ts#L114>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-2b109a269a813bfa"></a>

## drawWorldChips

[features/worldview/chip-renderer.ts:123](<../../../../../../features/worldview/chip-renderer.ts#L123>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Paints equal-sized custom-colored chips after the grid, culling offscreen platforms. Uploaded icons remain centered as foreground badges even with file buildings; the canvas owner supplies images and positions floating DOM titles separately. Uses the same camera and CSS-pixel projection; only Canvas 2D drawing state is changed.

Purpose evidence: jsdoc.

Exported as: drawWorldChips ([features/worldview/chip-renderer.ts:1](<../../../../../../features/worldview/chip-renderer.ts#L1>)).

Lexical owner: [features/worldview/chip-renderer.ts](<chip-renderer.ts.md#s-f8db8d67d065748f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| context | CanvasRenderingContext2D | annotation | required |
| chips | readonly WorldViewChip&#91;&#93; | annotation | required |
| camera | WorldCamera | annotation | required |
| viewport | Viewport | annotation | required |
| selectedId | string &#124; null | annotation | required |
| preview | ChipPreview &#124; null | annotation | optional |
| icons | ReadonlyMap&lt;string, CanvasImageSource&gt; | annotation | optional |
| selectedBuilding | BuildingTarget &#124; null | annotation | optional, default present |
| hoveredBuilding | BuildingTarget &#124; null | annotation | optional, default present |

Returns: void (annotation). Implementation present.

**Calls (statically resolved):**

- [orderChips](<chip-renderer.ts.md#s-5dbcc4ee15db6a00>) — [features/worldview/chip-renderer.ts:134](<../../../../../../features/worldview/chip-renderer.ts#L134>)
- [worldToScreen](<coordinates.ts.md#s-3ab4b3de6a773d84>) — [features/worldview/chip-renderer.ts:135](<../../../../../../features/worldview/chip-renderer.ts#L135>)
- [drawPolygon](<chip-renderer.ts.md#s-329854438404da04>) — [features/worldview/chip-renderer.ts:155](<../../../../../../features/worldview/chip-renderer.ts#L155>)
- [shadeChipColor](<chip-colors.ts.md#s-1db43f8137d1199d>) — [features/worldview/chip-renderer.ts:163](<../../../../../../features/worldview/chip-renderer.ts#L163>)
- [drawPolygon](<chip-renderer.ts.md#s-329854438404da04>) — [features/worldview/chip-renderer.ts:165](<../../../../../../features/worldview/chip-renderer.ts#L165>)
- [shadeChipColor](<chip-colors.ts.md#s-1db43f8137d1199d>) — [features/worldview/chip-renderer.ts:173](<../../../../../../features/worldview/chip-renderer.ts#L173>)
- [drawPolygon](<chip-renderer.ts.md#s-329854438404da04>) — [features/worldview/chip-renderer.ts:176](<../../../../../../features/worldview/chip-renderer.ts#L176>)
- [drawFileBuildings](<building-renderer.ts.md#s-70841a890f106cba>) — [features/worldview/chip-renderer.ts:179](<../../../../../../features/worldview/chip-renderer.ts#L179>)
- [projectWorld](<coordinates.ts.md#s-402de9cb48e771a3>) — [features/worldview/chip-renderer.ts:182](<../../../../../../features/worldview/chip-renderer.ts#L182>)

**Called by (statically resolved):**

- [WorldView.connectWorldCanvas.paint](<worldview.tsx.md#s-f30798102198d6d1>) — [features/worldview/worldview.tsx:321](<../../../../../../features/worldview/worldview.tsx#L321>)

Unresolved / external call sites: 11.

- context.save — external-or-dynamic-dispatch; [features/worldview/chip-renderer.ts:145](<../../../../../../features/worldview/chip-renderer.ts#L145>)
- context.translate — external-or-dynamic-dispatch; [features/worldview/chip-renderer.ts:146](<../../../../../../features/worldview/chip-renderer.ts#L146>)
- context.scale — external-or-dynamic-dispatch; [features/worldview/chip-renderer.ts:147](<../../../../../../features/worldview/chip-renderer.ts#L147>)
- icons?.get — external-or-dynamic-dispatch; [features/worldview/chip-renderer.ts:178](<../../../../../../features/worldview/chip-renderer.ts#L178>)
- context.drawImage — external-or-dynamic-dispatch; [features/worldview/chip-renderer.ts:180](<../../../../../../features/worldview/chip-renderer.ts#L180>)
- Object.values — external-or-dynamic-dispatch; [features/worldview/chip-renderer.ts:181](<../../../../../../features/worldview/chip-renderer.ts#L181>)
- context.beginPath — external-or-dynamic-dispatch; [features/worldview/chip-renderer.ts:183](<../../../../../../features/worldview/chip-renderer.ts#L183>)
- context.arc — external-or-dynamic-dispatch; [features/worldview/chip-renderer.ts:184](<../../../../../../features/worldview/chip-renderer.ts#L184>)
- 3 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
