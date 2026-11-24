# features/worldview/grid.ts: symbols

[Atlas](<../../../../README.md>) / [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>) / [features/worldview/grid.ts:1](<../../../../../../features/worldview/grid.ts#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [features/worldview/grid.ts](<grid.ts.md#s-28ff84084bac4869>) (Module)
- [drawWorldGrid](<grid.ts.md#s-a64710dd27741096>) (FunctionDeclaration)
- [drawWorldGrid.addLine](<grid.ts.md#s-32e5fcbfb0fe8dfe>) (FunctionDeclaration)

<a id="s-28ff84084bac4869"></a>

## features/worldview/grid.ts

[features/worldview/grid.ts:1](<../../../../../../features/worldview/grid.ts#L1>) · Module · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- WeakMap — external-or-dynamic-dispatch; [features/worldview/grid.ts:12](<../../../../../../features/worldview/grid.ts#L12>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-a64710dd27741096"></a>

## drawWorldGrid

[features/worldview/grid.ts:28](<../../../../../../features/worldview/grid.ts#L28>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Clears and draws visible integer-world grid lines plus a two-cell margin. Fades from invisible at minimum zoom to 10% opacity at 100% zoom, then remains capped. Composites an opaque scratch layer once so intersections cannot exceed the opacity cap. Inputs use CSS pixels; pixelRatio controls backing resolution, never geometry. Side effects: resizes/paints canvases and caches one scratch layer per viewport; restores drawing state. Throws if the browser cannot create the offscreen 2D context.

Purpose evidence: jsdoc.

Exported as: drawWorldGrid ([features/worldview/grid.ts:1](<../../../../../../features/worldview/grid.ts#L1>)).

Lexical owner: [features/worldview/grid.ts](<grid.ts.md#s-28ff84084bac4869>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| canvas | HTMLCanvasElement | annotation | required |
| context | CanvasRenderingContext2D | annotation | required |
| camera | WorldCamera | annotation | required |
| viewport | Viewport | annotation | required |
| pixelRatio | number | annotation | required |
| stroke | string | annotation | required |

Returns: void (annotation). Implementation present.

**Calls (statically resolved):**

- [visibleWorldBounds](<coordinates.ts.md#s-7136899dfe740341>) — [features/worldview/grid.ts:80](<../../../../../../features/worldview/grid.ts#L80>)
- [drawWorldGrid.addLine](<grid.ts.md#s-32e5fcbfb0fe8dfe>) — [features/worldview/grid.ts:94](<../../../../../../features/worldview/grid.ts#L94>)
- [drawWorldGrid.addLine](<grid.ts.md#s-32e5fcbfb0fe8dfe>) — [features/worldview/grid.ts:96](<../../../../../../features/worldview/grid.ts#L96>)

**Called by (statically resolved):**

- [WorldView.connectWorldCanvas.paint](<worldview.tsx.md#s-f30798102198d6d1>) — [features/worldview/worldview.tsx:285](<../../../../../../features/worldview/worldview.tsx#L285>)

Unresolved / external call sites: 18.

- Math.round — external-or-dynamic-dispatch; [features/worldview/grid.ts:36](<../../../../../../features/worldview/grid.ts#L36>)
- Math.round — external-or-dynamic-dispatch; [features/worldview/grid.ts:37](<../../../../../../features/worldview/grid.ts#L37>)
- context.setTransform — external-or-dynamic-dispatch; [features/worldview/grid.ts:43](<../../../../../../features/worldview/grid.ts#L43>)
- context.clearRect — external-or-dynamic-dispatch; [features/worldview/grid.ts:51](<../../../../../../features/worldview/grid.ts#L51>)
- Math.max — external-or-dynamic-dispatch; [features/worldview/grid.ts:52](<../../../../../../features/worldview/grid.ts#L52>)
- Math.min — external-or-dynamic-dispatch; [features/worldview/grid.ts:54](<../../../../../../features/worldview/grid.ts#L54>)
- gridLayers.get — external-or-dynamic-dispatch; [features/worldview/grid.ts:57](<../../../../../../features/worldview/grid.ts#L57>)
- OffscreenCanvas — external-or-dynamic-dispatch; [features/worldview/grid.ts:59](<../../../../../../features/worldview/grid.ts#L59>)
- 10 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-32e5fcbfb0fe8dfe"></a>

## drawWorldGrid.addLine

[features/worldview/grid.ts:86](<../../../../../../features/worldview/grid.ts#L86>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Adds an unsnapped world segment, preserving subpixel camera motion.

Purpose evidence: jsdoc.

Lexical owner: [drawWorldGrid](<grid.ts.md#s-a64710dd27741096>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| start | Point | annotation | required |
| end | Point | annotation | required |

Returns: void (annotation). Implementation present.

**Calls (statically resolved):**

- [worldToScreen](<coordinates.ts.md#s-3ab4b3de6a773d84>) — [features/worldview/grid.ts:87](<../../../../../../features/worldview/grid.ts#L87>)
- [worldToScreen](<coordinates.ts.md#s-3ab4b3de6a773d84>) — [features/worldview/grid.ts:88](<../../../../../../features/worldview/grid.ts#L88>)

**Called by (statically resolved):**

- [drawWorldGrid](<grid.ts.md#s-a64710dd27741096>) — [features/worldview/grid.ts:94](<../../../../../../features/worldview/grid.ts#L94>)
- [drawWorldGrid](<grid.ts.md#s-a64710dd27741096>) — [features/worldview/grid.ts:96](<../../../../../../features/worldview/grid.ts#L96>)

Unresolved / external call sites: 2.

- gridContext.moveTo — external-or-dynamic-dispatch; [features/worldview/grid.ts:89](<../../../../../../features/worldview/grid.ts#L89>)
- gridContext.lineTo — external-or-dynamic-dispatch; [features/worldview/grid.ts:90](<../../../../../../features/worldview/grid.ts#L90>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
