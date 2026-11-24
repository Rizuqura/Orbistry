# features/worldview/building-renderer.ts: symbols

[Atlas](<../../../../README.md>) / [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>) / [features/worldview/building-renderer.ts:1](<../../../../../../features/worldview/building-renderer.ts#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [features/worldview/building-renderer.ts](<building-renderer.ts.md#s-0e2381d2bb257cce>) (Module)
- [BuildingTarget](<building-renderer.ts.md#s-71996ceb0118a1d1>) (TypeAliasDeclaration)
- [Faces](<building-renderer.ts.md#s-172ce941197b7491>) (TypeAliasDeclaration)
- [buildingFaces](<building-renderer.ts.md#s-54ad031d39546c27>) (FunctionDeclaration)
- [pointInFace](<building-renderer.ts.md#s-07aa3d7998abde2e>) (FunctionDeclaration)
- [hitTestFileBuilding](<building-renderer.ts.md#s-9df5fe0af1c30539>) (FunctionDeclaration)
- [paintFace](<building-renderer.ts.md#s-101ab624ff745a33>) (FunctionDeclaration)
- [drawFileBuildings](<building-renderer.ts.md#s-70841a890f106cba>) (FunctionDeclaration)
- [drawFileBuildings.&lt;anonymous@119:34&gt;](<building-renderer.ts.md#s-4dd9307bb7cd5e37>) (ArrowFunction)

<a id="s-0e2381d2bb257cce"></a>

## features/worldview/building-renderer.ts

[features/worldview/building-renderer.ts:1](<../../../../../../features/worldview/building-renderer.ts#L1>) · Module · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-71996ceb0118a1d1"></a>

## BuildingTarget

[features/worldview/building-renderer.ts:16](<../../../../../../features/worldview/building-renderer.ts#L16>) · TypeAliasDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: BuildingTarget ([features/worldview/building-renderer.ts:1](<../../../../../../features/worldview/building-renderer.ts#L1>)).

Lexical owner: [features/worldview/building-renderer.ts](<building-renderer.ts.md#s-0e2381d2bb257cce>).

Contract evidence: typescript-declaration. [Full declaration index](<../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-172ce941197b7491"></a>

## Faces

[features/worldview/building-renderer.ts:20](<../../../../../../features/worldview/building-renderer.ts#L20>) · TypeAliasDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [features/worldview/building-renderer.ts](<building-renderer.ts.md#s-0e2381d2bb257cce>).

Contract evidence: typescript-declaration. [Full declaration index](<../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-54ad031d39546c27"></a>

## buildingFaces

[features/worldview/building-renderer.ts:23](<../../../../../../features/worldview/building-renderer.ts#L23>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Projects a fixed world footprint and vertical CSS-unit height into chip-local isometric faces.

Purpose evidence: jsdoc.

Exported as: buildingFaces ([features/worldview/building-renderer.ts:1](<../../../../../../features/worldview/building-renderer.ts#L1>)).

Lexical owner: [features/worldview/building-renderer.ts](<building-renderer.ts.md#s-0e2381d2bb257cce>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| building | WorldBuilding | annotation | required |

Returns: Faces (annotation). Implementation present.

**Calls (statically resolved):**

- [projectWorld](<coordinates.ts.md#s-402de9cb48e771a3>) — [features/worldview/building-renderer.ts:26](<../../../../../../features/worldview/building-renderer.ts#L26>)
- [projectWorld](<coordinates.ts.md#s-402de9cb48e771a3>) — [features/worldview/building-renderer.ts:27](<../../../../../../features/worldview/building-renderer.ts#L27>)
- [projectWorld](<coordinates.ts.md#s-402de9cb48e771a3>) — [features/worldview/building-renderer.ts:28](<../../../../../../features/worldview/building-renderer.ts#L28>)
- [projectWorld](<coordinates.ts.md#s-402de9cb48e771a3>) — [features/worldview/building-renderer.ts:29](<../../../../../../features/worldview/building-renderer.ts#L29>)

**Called by (statically resolved):**

- [hitTestFileBuilding](<building-renderer.ts.md#s-9df5fe0af1c30539>) — [features/worldview/building-renderer.ts:75](<../../../../../../features/worldview/building-renderer.ts#L75>)
- [drawFileBuildings](<building-renderer.ts.md#s-70841a890f106cba>) — [features/worldview/building-renderer.ts:130](<../../../../../../features/worldview/building-renderer.ts#L130>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-07aa3d7998abde2e"></a>

## pointInFace

[features/worldview/building-renderer.ts:43](<../../../../../../features/worldview/building-renderer.ts#L43>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Returns whether a chip-local pointer lies inside a convex rendered face.

Purpose evidence: jsdoc.

Lexical owner: [features/worldview/building-renderer.ts](<building-renderer.ts.md#s-0e2381d2bb257cce>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| point | Point | annotation | required |
| vertices | readonly Point&#91;&#93; | annotation | required |

Returns: boolean (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [hitTestFileBuilding](<building-renderer.ts.md#s-9df5fe0af1c30539>) — [features/worldview/building-renderer.ts:77](<../../../../../../features/worldview/building-renderer.ts#L77>)
- [hitTestFileBuilding](<building-renderer.ts.md#s-9df5fe0af1c30539>) — [features/worldview/building-renderer.ts:78](<../../../../../../features/worldview/building-renderer.ts#L78>)
- [hitTestFileBuilding](<building-renderer.ts.md#s-9df5fe0af1c30539>) — [features/worldview/building-renderer.ts:79](<../../../../../../features/worldview/building-renderer.ts#L79>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-9df5fe0af1c30539"></a>

## hitTestFileBuilding

[features/worldview/building-renderer.ts:62](<../../../../../../features/worldview/building-renderer.ts#L62>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Returns the frontmost building under a viewport-local pointer using the exact painted faces.

Purpose evidence: jsdoc.

Exported as: hitTestFileBuilding ([features/worldview/building-renderer.ts:1](<../../../../../../features/worldview/building-renderer.ts#L1>)).

Lexical owner: [features/worldview/building-renderer.ts](<building-renderer.ts.md#s-0e2381d2bb257cce>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| point | Point | annotation | required |
| chip | WorldViewChip | annotation | required |
| camera | WorldCamera | annotation | required |
| viewport | Viewport | annotation | required |

Returns: WorldBuilding &#124; null (annotation). Implementation present.

**Calls (statically resolved):**

- [worldToScreen](<coordinates.ts.md#s-3ab4b3de6a773d84>) — [features/worldview/building-renderer.ts:68](<../../../../../../features/worldview/building-renderer.ts#L68>)
- [layoutFileBuildings](<buildings.ts.md#s-b365ed1a8afd39fc>) — [features/worldview/building-renderer.ts:73](<../../../../../../features/worldview/building-renderer.ts#L73>)
- [buildingFaces](<building-renderer.ts.md#s-54ad031d39546c27>) — [features/worldview/building-renderer.ts:75](<../../../../../../features/worldview/building-renderer.ts#L75>)
- [pointInFace](<building-renderer.ts.md#s-07aa3d7998abde2e>) — [features/worldview/building-renderer.ts:77](<../../../../../../features/worldview/building-renderer.ts#L77>)
- [pointInFace](<building-renderer.ts.md#s-07aa3d7998abde2e>) — [features/worldview/building-renderer.ts:78](<../../../../../../features/worldview/building-renderer.ts#L78>)
- [pointInFace](<building-renderer.ts.md#s-07aa3d7998abde2e>) — [features/worldview/building-renderer.ts:79](<../../../../../../features/worldview/building-renderer.ts#L79>)

**Called by (statically resolved):**

- [hitTestWorld](<chip-renderer.ts.md#s-9f8923f1efd018f7>) — [features/worldview/chip-renderer.ts:72](<../../../../../../features/worldview/chip-renderer.ts#L72>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-101ab624ff745a33"></a>

## paintFace

[features/worldview/building-renderer.ts:87](<../../../../../../features/worldview/building-renderer.ts#L87>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Fills/strokes one visible prism face in the existing chip-local Canvas transform.

Purpose evidence: jsdoc.

Lexical owner: [features/worldview/building-renderer.ts](<building-renderer.ts.md#s-0e2381d2bb257cce>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| context | CanvasRenderingContext2D | annotation | required |
| points | readonly Point&#91;&#93; | annotation | required |
| fill | string | annotation | required |

Returns: void (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [drawFileBuildings](<building-renderer.ts.md#s-70841a890f106cba>) — [features/worldview/building-renderer.ts:132](<../../../../../../features/worldview/building-renderer.ts#L132>)
- [drawFileBuildings](<building-renderer.ts.md#s-70841a890f106cba>) — [features/worldview/building-renderer.ts:133](<../../../../../../features/worldview/building-renderer.ts#L133>)
- [drawFileBuildings](<building-renderer.ts.md#s-70841a890f106cba>) — [features/worldview/building-renderer.ts:135](<../../../../../../features/worldview/building-renderer.ts#L135>)

Unresolved / external call sites: 6.

- context.beginPath — external-or-dynamic-dispatch; [features/worldview/building-renderer.ts:92](<../../../../../../features/worldview/building-renderer.ts#L92>)
- context.moveTo — external-or-dynamic-dispatch; [features/worldview/building-renderer.ts:93](<../../../../../../features/worldview/building-renderer.ts#L93>)
- context.lineTo — external-or-dynamic-dispatch; [features/worldview/building-renderer.ts:95](<../../../../../../features/worldview/building-renderer.ts#L95>)
- context.closePath — external-or-dynamic-dispatch; [features/worldview/building-renderer.ts:96](<../../../../../../features/worldview/building-renderer.ts#L96>)
- context.fill — external-or-dynamic-dispatch; [features/worldview/building-renderer.ts:98](<../../../../../../features/worldview/building-renderer.ts#L98>)
- context.stroke — external-or-dynamic-dispatch; [features/worldview/building-renderer.ts:99](<../../../../../../features/worldview/building-renderer.ts#L99>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-70841a890f106cba"></a>

## drawFileBuildings

[features/worldview/building-renderer.ts:103](<../../../../../../features/worldview/building-renderer.ts#L103>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Draws file-type prisms with shaded sides, active outlines and IBM Plex Sans status markers while preserving caller transforms.

Purpose evidence: jsdoc.

Exported as: drawFileBuildings ([features/worldview/building-renderer.ts:1](<../../../../../../features/worldview/building-renderer.ts#L1>)).

Lexical owner: [features/worldview/building-renderer.ts](<building-renderer.ts.md#s-0e2381d2bb257cce>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| context | CanvasRenderingContext2D | annotation | required |
| chip | WorldViewChip | annotation | required |
| selected | BuildingTarget &#124; null | annotation | required |
| hovered | BuildingTarget &#124; null | annotation | required |

Returns: void (annotation). Implementation present.

**Calls (statically resolved):**

- [layoutFileBuildings](<buildings.ts.md#s-b365ed1a8afd39fc>) — [features/worldview/building-renderer.ts:110](<../../../../../../features/worldview/building-renderer.ts#L110>)
- [fileBuildingColor](<buildings.ts.md#s-2be685ffa384e478>) — [features/worldview/building-renderer.ts:126](<../../../../../../features/worldview/building-renderer.ts#L126>)
- [buildingFaces](<building-renderer.ts.md#s-54ad031d39546c27>) — [features/worldview/building-renderer.ts:130](<../../../../../../features/worldview/building-renderer.ts#L130>)
- [paintFace](<building-renderer.ts.md#s-101ab624ff745a33>) — [features/worldview/building-renderer.ts:132](<../../../../../../features/worldview/building-renderer.ts#L132>)
- [shadeChipColor](<chip-colors.ts.md#s-1db43f8137d1199d>) — [features/worldview/building-renderer.ts:132](<../../../../../../features/worldview/building-renderer.ts#L132>)
- [paintFace](<building-renderer.ts.md#s-101ab624ff745a33>) — [features/worldview/building-renderer.ts:133](<../../../../../../features/worldview/building-renderer.ts#L133>)
- [shadeChipColor](<chip-colors.ts.md#s-1db43f8137d1199d>) — [features/worldview/building-renderer.ts:133](<../../../../../../features/worldview/building-renderer.ts#L133>)
- [paintFace](<building-renderer.ts.md#s-101ab624ff745a33>) — [features/worldview/building-renderer.ts:135](<../../../../../../features/worldview/building-renderer.ts#L135>)
- [projectWorld](<coordinates.ts.md#s-402de9cb48e771a3>) — [features/worldview/building-renderer.ts:137](<../../../../../../features/worldview/building-renderer.ts#L137>)
- [chipTextColor](<chip-colors.ts.md#s-5c02ec06cbea0a49>) — [features/worldview/building-renderer.ts:138](<../../../../../../features/worldview/building-renderer.ts#L138>)

**Called by (statically resolved):**

- [drawWorldChips](<chip-renderer.ts.md#s-2b109a269a813bfa>) — [features/worldview/chip-renderer.ts:179](<../../../../../../features/worldview/chip-renderer.ts#L179>)

Unresolved / external call sites: 5.

- context.save — external-or-dynamic-dispatch; [features/worldview/building-renderer.ts:109](<../../../../../../features/worldview/building-renderer.ts#L109>)
- Set — external-or-dynamic-dispatch; [features/worldview/building-renderer.ts:118](<../../../../../../features/worldview/building-renderer.ts#L118>)
- building.sources.map — external-or-dynamic-dispatch; [features/worldview/building-renderer.ts:119](<../../../../../../features/worldview/building-renderer.ts#L119>)
- context.fillText — external-or-dynamic-dispatch; [features/worldview/building-renderer.ts:141](<../../../../../../features/worldview/building-renderer.ts#L141>)
- context.restore — external-or-dynamic-dispatch; [features/worldview/building-renderer.ts:148](<../../../../../../features/worldview/building-renderer.ts#L148>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-4dd9307bb7cd5e37"></a>

## drawFileBuildings.&lt;anonymous@119:34&gt;

[features/worldview/building-renderer.ts:119](<../../../../../../features/worldview/building-renderer.ts#L119>) · ArrowFunction · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [drawFileBuildings](<building-renderer.ts.md#s-70841a890f106cba>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| source | any | compiler-inferred | required |

Returns: string (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [fileBuildingColor](<buildings.ts.md#s-2be685ffa384e478>) — [features/worldview/building-renderer.ts:120](<../../../../../../features/worldview/building-renderer.ts#L120>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
