# features/worldview/coordinates.ts: symbols

[Atlas](<../../../../README.md>) / [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>) / [features/worldview/coordinates.ts:1](<../../../../../../features/worldview/coordinates.ts#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [features/worldview/coordinates.ts](<coordinates.ts.md#s-5beba825baeedb68>) (Module)
- [TILE_WIDTH](<coordinates.ts.md#s-b13006f86e086a12>) (VariableDeclaration)
- [TILE_HEIGHT](<coordinates.ts.md#s-883288df25f0d88f>) (VariableDeclaration)
- [MIN_ZOOM](<coordinates.ts.md#s-8d87b906bd0e5cc2>) (VariableDeclaration)
- [MAX_ZOOM](<coordinates.ts.md#s-a7a58eedfcf4df81>) (VariableDeclaration)
- [Point](<coordinates.ts.md#s-800323051b9a9472>) (TypeAliasDeclaration)
- [Viewport](<coordinates.ts.md#s-b71ed1f5e0db0cdf>) (TypeAliasDeclaration)
- [WorldCamera](<coordinates.ts.md#s-e5b574f359851c86>) (TypeAliasDeclaration)
- [DEFAULT_CAMERA](<coordinates.ts.md#s-13cf649c5c32be5f>) (VariableDeclaration)
- [projectWorld](<coordinates.ts.md#s-402de9cb48e771a3>) (FunctionDeclaration)
- [unprojectWorld](<coordinates.ts.md#s-b19d0261c0f89b35>) (FunctionDeclaration)
- [worldToScreen](<coordinates.ts.md#s-3ab4b3de6a773d84>) (FunctionDeclaration)
- [screenToWorld](<coordinates.ts.md#s-c7c956b865bb27e7>) (FunctionDeclaration)
- [panCamera](<coordinates.ts.md#s-3f3e3c3879a3d267>) (FunctionDeclaration)
- [zoomCameraAt](<coordinates.ts.md#s-25dbc565c0e7d818>) (FunctionDeclaration)
- [visibleWorldBounds](<coordinates.ts.md#s-7136899dfe740341>) (FunctionDeclaration)
- [visibleWorldBounds.&lt;anonymous@101:46&gt;](<coordinates.ts.md#s-5e19d9fef85eb312>) (ArrowFunction)
- [visibleWorldBounds.&lt;anonymous@102:45&gt;](<coordinates.ts.md#s-c1c899b1bfd197a3>) (ArrowFunction)
- [visibleWorldBounds.&lt;anonymous@103:46&gt;](<coordinates.ts.md#s-474149117eaff2b0>) (ArrowFunction)
- [visibleWorldBounds.&lt;anonymous@104:45&gt;](<coordinates.ts.md#s-d5e20a6ca7508bd0>) (ArrowFunction)

<a id="s-5beba825baeedb68"></a>

## features/worldview/coordinates.ts

[features/worldview/coordinates.ts:1](<../../../../../../features/worldview/coordinates.ts#L1>) · Module · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/worldview/chip-labels.test.cjs:21](<../../../../../../features/worldview/chip-labels.test.cjs#L21>) — file-import-only; coverage not established.
- [features/worldview/connectors.test.cjs:25](<../../../../../../features/worldview/connectors.test.cjs#L25>) — file-import-only; coverage not established.
- [features/worldview/coordinates.test.cjs:14](<../../../../../../features/worldview/coordinates.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-b13006f86e086a12"></a>

## TILE_WIDTH

[features/worldview/coordinates.ts:2](<../../../../../../features/worldview/coordinates.ts#L2>) · VariableDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

One world unit is one 96 × 48 CSS-pixel diamond at 100% zoom.

Purpose evidence: jsdoc.

Exported as: TILE_WIDTH ([features/worldview/coordinates.ts:1](<../../../../../../features/worldview/coordinates.ts#L1>)).

Lexical owner: [features/worldview/coordinates.ts](<coordinates.ts.md#s-5beba825baeedb68>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/worldview/chip-labels.test.cjs:21](<../../../../../../features/worldview/chip-labels.test.cjs#L21>) — file-import-only; coverage not established.
- [features/worldview/connectors.test.cjs:25](<../../../../../../features/worldview/connectors.test.cjs#L25>) — file-import-only; coverage not established.
- [features/worldview/coordinates.test.cjs:14](<../../../../../../features/worldview/coordinates.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-883288df25f0d88f"></a>

## TILE_HEIGHT

[features/worldview/coordinates.ts:3](<../../../../../../features/worldview/coordinates.ts#L3>) · VariableDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: TILE_HEIGHT ([features/worldview/coordinates.ts:1](<../../../../../../features/worldview/coordinates.ts#L1>)).

Lexical owner: [features/worldview/coordinates.ts](<coordinates.ts.md#s-5beba825baeedb68>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/worldview/chip-labels.test.cjs:21](<../../../../../../features/worldview/chip-labels.test.cjs#L21>) — file-import-only; coverage not established.
- [features/worldview/connectors.test.cjs:25](<../../../../../../features/worldview/connectors.test.cjs#L25>) — file-import-only; coverage not established.
- [features/worldview/coordinates.test.cjs:14](<../../../../../../features/worldview/coordinates.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-8d87b906bd0e5cc2"></a>

## MIN_ZOOM

[features/worldview/coordinates.ts:4](<../../../../../../features/worldview/coordinates.ts#L4>) · VariableDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: MIN_ZOOM ([features/worldview/coordinates.ts:1](<../../../../../../features/worldview/coordinates.ts#L1>)).

Lexical owner: [features/worldview/coordinates.ts](<coordinates.ts.md#s-5beba825baeedb68>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/worldview/chip-labels.test.cjs:21](<../../../../../../features/worldview/chip-labels.test.cjs#L21>) — file-import-only; coverage not established.
- [features/worldview/connectors.test.cjs:25](<../../../../../../features/worldview/connectors.test.cjs#L25>) — file-import-only; coverage not established.
- [features/worldview/coordinates.test.cjs:14](<../../../../../../features/worldview/coordinates.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-a7a58eedfcf4df81"></a>

## MAX_ZOOM

[features/worldview/coordinates.ts:5](<../../../../../../features/worldview/coordinates.ts#L5>) · VariableDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: MAX_ZOOM ([features/worldview/coordinates.ts:1](<../../../../../../features/worldview/coordinates.ts#L1>)).

Lexical owner: [features/worldview/coordinates.ts](<coordinates.ts.md#s-5beba825baeedb68>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/worldview/chip-labels.test.cjs:21](<../../../../../../features/worldview/chip-labels.test.cjs#L21>) — file-import-only; coverage not established.
- [features/worldview/connectors.test.cjs:25](<../../../../../../features/worldview/connectors.test.cjs#L25>) — file-import-only; coverage not established.
- [features/worldview/coordinates.test.cjs:14](<../../../../../../features/worldview/coordinates.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-800323051b9a9472"></a>

## Point

[features/worldview/coordinates.ts:7](<../../../../../../features/worldview/coordinates.ts#L7>) · TypeAliasDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: Point ([features/worldview/coordinates.ts:1](<../../../../../../features/worldview/coordinates.ts#L1>)).

Lexical owner: [features/worldview/coordinates.ts](<coordinates.ts.md#s-5beba825baeedb68>).

Contract evidence: typescript-declaration. [Full declaration index](<../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/worldview/chip-labels.test.cjs:21](<../../../../../../features/worldview/chip-labels.test.cjs#L21>) — file-import-only; coverage not established.
- [features/worldview/connectors.test.cjs:25](<../../../../../../features/worldview/connectors.test.cjs#L25>) — file-import-only; coverage not established.
- [features/worldview/coordinates.test.cjs:14](<../../../../../../features/worldview/coordinates.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-b71ed1f5e0db0cdf"></a>

## Viewport

[features/worldview/coordinates.ts:8](<../../../../../../features/worldview/coordinates.ts#L8>) · TypeAliasDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: Viewport ([features/worldview/coordinates.ts:1](<../../../../../../features/worldview/coordinates.ts#L1>)).

Lexical owner: [features/worldview/coordinates.ts](<coordinates.ts.md#s-5beba825baeedb68>).

Contract evidence: typescript-declaration. [Full declaration index](<../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/worldview/chip-labels.test.cjs:21](<../../../../../../features/worldview/chip-labels.test.cjs#L21>) — file-import-only; coverage not established.
- [features/worldview/connectors.test.cjs:25](<../../../../../../features/worldview/connectors.test.cjs#L25>) — file-import-only; coverage not established.
- [features/worldview/coordinates.test.cjs:14](<../../../../../../features/worldview/coordinates.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-e5b574f359851c86"></a>

## WorldCamera

[features/worldview/coordinates.ts:10](<../../../../../../features/worldview/coordinates.ts#L10>) · TypeAliasDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

The world point at the viewport center; zoom never changes world units.

Purpose evidence: jsdoc.

Exported as: WorldCamera ([features/worldview/coordinates.ts:1](<../../../../../../features/worldview/coordinates.ts#L1>)).

Lexical owner: [features/worldview/coordinates.ts](<coordinates.ts.md#s-5beba825baeedb68>).

Contract evidence: typescript-declaration. [Full declaration index](<../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/worldview/chip-labels.test.cjs:21](<../../../../../../features/worldview/chip-labels.test.cjs#L21>) — file-import-only; coverage not established.
- [features/worldview/connectors.test.cjs:25](<../../../../../../features/worldview/connectors.test.cjs#L25>) — file-import-only; coverage not established.
- [features/worldview/coordinates.test.cjs:14](<../../../../../../features/worldview/coordinates.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-13cf649c5c32be5f"></a>

## DEFAULT_CAMERA

[features/worldview/coordinates.ts:11](<../../../../../../features/worldview/coordinates.ts#L11>) · VariableDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: DEFAULT_CAMERA ([features/worldview/coordinates.ts:1](<../../../../../../features/worldview/coordinates.ts#L1>)).

Lexical owner: [features/worldview/coordinates.ts](<coordinates.ts.md#s-5beba825baeedb68>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/worldview/chip-labels.test.cjs:21](<../../../../../../features/worldview/chip-labels.test.cjs#L21>) — file-import-only; coverage not established.
- [features/worldview/connectors.test.cjs:25](<../../../../../../features/worldview/connectors.test.cjs#L25>) — file-import-only; coverage not established.
- [features/worldview/coordinates.test.cjs:14](<../../../../../../features/worldview/coordinates.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-402de9cb48e771a3"></a>

## projectWorld

[features/worldview/coordinates.ts:14](<../../../../../../features/worldview/coordinates.ts#L14>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Projects a world point into unscaled isometric CSS pixels, without side effects.

Purpose evidence: jsdoc.

Exported as: projectWorld ([features/worldview/coordinates.ts:1](<../../../../../../features/worldview/coordinates.ts#L1>)).

Lexical owner: [features/worldview/coordinates.ts](<coordinates.ts.md#s-5beba825baeedb68>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| point | Point | annotation | required |

Returns: Point (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [buildingFaces](<building-renderer.ts.md#s-54ad031d39546c27>) — [features/worldview/building-renderer.ts:26](<../../../../../../features/worldview/building-renderer.ts#L26>)
- [buildingFaces](<building-renderer.ts.md#s-54ad031d39546c27>) — [features/worldview/building-renderer.ts:27](<../../../../../../features/worldview/building-renderer.ts#L27>)
- [buildingFaces](<building-renderer.ts.md#s-54ad031d39546c27>) — [features/worldview/building-renderer.ts:28](<../../../../../../features/worldview/building-renderer.ts#L28>)
- [buildingFaces](<building-renderer.ts.md#s-54ad031d39546c27>) — [features/worldview/building-renderer.ts:29](<../../../../../../features/worldview/building-renderer.ts#L29>)
- [drawFileBuildings](<building-renderer.ts.md#s-70841a890f106cba>) — [features/worldview/building-renderer.ts:137](<../../../../../../features/worldview/building-renderer.ts#L137>)
- [drawWorldChips](<chip-renderer.ts.md#s-2b109a269a813bfa>) — [features/worldview/chip-renderer.ts:182](<../../../../../../features/worldview/chip-renderer.ts#L182>)
- [&lt;anonymous@29:83&gt;](<coordinates.test.cjs.md#s-a6c8fd84398394ec>) — [features/worldview/coordinates.test.cjs:30](<../../../../../../features/worldview/coordinates.test.cjs#L30>)
- [&lt;anonymous@29:83&gt;](<coordinates.test.cjs.md#s-a6c8fd84398394ec>) — [features/worldview/coordinates.test.cjs:31](<../../../../../../features/worldview/coordinates.test.cjs#L31>)
- [&lt;anonymous@29:83&gt;](<coordinates.test.cjs.md#s-a6c8fd84398394ec>) — [features/worldview/coordinates.test.cjs:37](<../../../../../../features/worldview/coordinates.test.cjs#L37>)
- [worldToScreen](<coordinates.ts.md#s-3ab4b3de6a773d84>) — [features/worldview/coordinates.ts:35](<../../../../../../features/worldview/coordinates.ts#L35>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/worldview/coordinates.test.cjs:30](<../../../../../../features/worldview/coordinates.test.cjs#L30>) — static-call-site; coverage not established.
- [features/worldview/coordinates.test.cjs:31](<../../../../../../features/worldview/coordinates.test.cjs#L31>) — static-call-site; coverage not established.
- [features/worldview/coordinates.test.cjs:37](<../../../../../../features/worldview/coordinates.test.cjs#L37>) — static-call-site; coverage not established.
- [features/worldview/chip-labels.test.cjs:21](<../../../../../../features/worldview/chip-labels.test.cjs#L21>) — file-import-only; coverage not established.
- [features/worldview/connectors.test.cjs:25](<../../../../../../features/worldview/connectors.test.cjs#L25>) — file-import-only; coverage not established.
- [features/worldview/coordinates.test.cjs:14](<../../../../../../features/worldview/coordinates.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-b19d0261c0f89b35"></a>

## unprojectWorld

[features/worldview/coordinates.ts:22](<../../../../../../features/worldview/coordinates.ts#L22>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Inverts unscaled isometric pixels into fractional world coordinates.

Purpose evidence: jsdoc.

Exported as: unprojectWorld ([features/worldview/coordinates.ts:1](<../../../../../../features/worldview/coordinates.ts#L1>)).

Lexical owner: [features/worldview/coordinates.ts](<coordinates.ts.md#s-5beba825baeedb68>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| point | Point | annotation | required |

Returns: Point (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@29:83&gt;](<coordinates.test.cjs.md#s-a6c8fd84398394ec>) — [features/worldview/coordinates.test.cjs:37](<../../../../../../features/worldview/coordinates.test.cjs#L37>)
- [screenToWorld](<coordinates.ts.md#s-c7c956b865bb27e7>) — [features/worldview/coordinates.ts:51](<../../../../../../features/worldview/coordinates.ts#L51>)
- [panCamera](<coordinates.ts.md#s-3f3e3c3879a3d267>) — [features/worldview/coordinates.ts:60](<../../../../../../features/worldview/coordinates.ts#L60>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/worldview/coordinates.test.cjs:37](<../../../../../../features/worldview/coordinates.test.cjs#L37>) — static-call-site; coverage not established.
- [features/worldview/chip-labels.test.cjs:21](<../../../../../../features/worldview/chip-labels.test.cjs#L21>) — file-import-only; coverage not established.
- [features/worldview/connectors.test.cjs:25](<../../../../../../features/worldview/connectors.test.cjs#L25>) — file-import-only; coverage not established.
- [features/worldview/coordinates.test.cjs:14](<../../../../../../features/worldview/coordinates.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-3ab4b3de6a773d84"></a>

## worldToScreen

[features/worldview/coordinates.ts:30](<../../../../../../features/worldview/coordinates.ts#L30>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Converts a world point to viewport-local CSS pixels using the given camera.

Purpose evidence: jsdoc.

Exported as: worldToScreen ([features/worldview/coordinates.ts:1](<../../../../../../features/worldview/coordinates.ts#L1>)).

Lexical owner: [features/worldview/coordinates.ts](<coordinates.ts.md#s-5beba825baeedb68>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| point | Point | annotation | required |
| camera | WorldCamera | annotation | required |
| viewport | Viewport | annotation | required |

Returns: Point (annotation). Implementation present.

**Calls (statically resolved):**

- [projectWorld](<coordinates.ts.md#s-402de9cb48e771a3>) — [features/worldview/coordinates.ts:35](<../../../../../../features/worldview/coordinates.ts#L35>)

**Called by (statically resolved):**

- [hitTestFileBuilding](<building-renderer.ts.md#s-9df5fe0af1c30539>) — [features/worldview/building-renderer.ts:68](<../../../../../../features/worldview/building-renderer.ts#L68>)
- [&lt;anonymous@39:95&gt;](<chip-labels.test.cjs.md#s-554d690bc54a95e7>) — [features/worldview/chip-labels.test.cjs:46](<../../../../../../features/worldview/chip-labels.test.cjs#L46>)
- [&lt;anonymous@62:66&gt;](<chip-labels.test.cjs.md#s-fefc609890b3cde2>) — [features/worldview/chip-labels.test.cjs:80](<../../../../../../features/worldview/chip-labels.test.cjs#L80>)
- [&lt;anonymous@62:66&gt;](<chip-labels.test.cjs.md#s-fefc609890b3cde2>) — [features/worldview/chip-labels.test.cjs:86](<../../../../../../features/worldview/chip-labels.test.cjs#L86>)
- [chipLabelAnchor](<chip-labels.ts.md#s-d95382b476d6da70>) — [features/worldview/chip-labels.ts:21](<../../../../../../features/worldview/chip-labels.ts#L21>)
- [chipScreenBuckets](<chip-labels.ts.md#s-62d0ffbc24e3261a>) — [features/worldview/chip-labels.ts:59](<../../../../../../features/worldview/chip-labels.ts#L59>)
- [chipAgentAnchor](<chip-labels.ts.md#s-099d940751a1951f>) — [features/worldview/chip-labels.ts:99](<../../../../../../features/worldview/chip-labels.ts#L99>)
- [hitTestWorld](<chip-renderer.ts.md#s-9f8923f1efd018f7>) — [features/worldview/chip-renderer.ts:74](<../../../../../../features/worldview/chip-renderer.ts#L74>)
- [drawWorldChips](<chip-renderer.ts.md#s-2b109a269a813bfa>) — [features/worldview/chip-renderer.ts:135](<../../../../../../features/worldview/chip-renderer.ts#L135>)
- [updateConnectorLabels.&lt;anonymous@155:5&gt;](<connector-labels.ts.md#s-b009b1d2c5da04e7>) — [features/worldview/connector-labels.ts:156](<../../../../../../features/worldview/connector-labels.ts#L156>)
- [portPoint](<connectors.ts.md#s-6903675123075515>) — [features/worldview/connectors.ts:55](<../../../../../../features/worldview/connectors.ts#L55>)
- [connectorRoutes.&lt;anonymous@120:84&gt;](<connectors.ts.md#s-2ad7b5fa25b21317>) — [features/worldview/connectors.ts:158](<../../../../../../features/worldview/connectors.ts#L158>)
- [connectorRoutes.&lt;anonymous@120:84&gt;](<connectors.ts.md#s-2ad7b5fa25b21317>) — [features/worldview/connectors.ts:163](<../../../../../../features/worldview/connectors.ts#L163>)
- [&lt;anonymous@29:83&gt;](<coordinates.test.cjs.md#s-a6c8fd84398394ec>) — [features/worldview/coordinates.test.cjs:46](<../../../../../../features/worldview/coordinates.test.cjs#L46>)
- [&lt;anonymous@58:72&gt;](<coordinates.test.cjs.md#s-ecf44f187224b064>) — [features/worldview/coordinates.test.cjs:63](<../../../../../../features/worldview/coordinates.test.cjs#L63>)
- [&lt;anonymous@58:72&gt;](<coordinates.test.cjs.md#s-ecf44f187224b064>) — [features/worldview/coordinates.test.cjs:71](<../../../../../../features/worldview/coordinates.test.cjs#L71>)
- [&lt;anonymous@84:67&gt;](<coordinates.test.cjs.md#s-eb425c317c2c57cc>) — [features/worldview/coordinates.test.cjs:93](<../../../../../../features/worldview/coordinates.test.cjs#L93>)
- [&lt;anonymous@98:91&gt;](<coordinates.test.cjs.md#s-15935863d59283c3>) — [features/worldview/coordinates.test.cjs:104](<../../../../../../features/worldview/coordinates.test.cjs#L104>)
- [drawWorldGrid.addLine](<grid.ts.md#s-32e5fcbfb0fe8dfe>) — [features/worldview/grid.ts:87](<../../../../../../features/worldview/grid.ts#L87>)
- [drawWorldGrid.addLine](<grid.ts.md#s-32e5fcbfb0fe8dfe>) — [features/worldview/grid.ts:88](<../../../../../../features/worldview/grid.ts#L88>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/worldview/chip-labels.test.cjs:46](<../../../../../../features/worldview/chip-labels.test.cjs#L46>) — static-call-site; coverage not established.
- [features/worldview/chip-labels.test.cjs:80](<../../../../../../features/worldview/chip-labels.test.cjs#L80>) — static-call-site; coverage not established.
- [features/worldview/chip-labels.test.cjs:86](<../../../../../../features/worldview/chip-labels.test.cjs#L86>) — static-call-site; coverage not established.
- [features/worldview/coordinates.test.cjs:46](<../../../../../../features/worldview/coordinates.test.cjs#L46>) — static-call-site; coverage not established.
- [features/worldview/coordinates.test.cjs:63](<../../../../../../features/worldview/coordinates.test.cjs#L63>) — static-call-site; coverage not established.
- [features/worldview/coordinates.test.cjs:71](<../../../../../../features/worldview/coordinates.test.cjs#L71>) — static-call-site; coverage not established.
- [features/worldview/coordinates.test.cjs:93](<../../../../../../features/worldview/coordinates.test.cjs#L93>) — static-call-site; coverage not established.
- [features/worldview/coordinates.test.cjs:104](<../../../../../../features/worldview/coordinates.test.cjs#L104>) — static-call-site; coverage not established.
- [features/worldview/chip-labels.test.cjs:21](<../../../../../../features/worldview/chip-labels.test.cjs#L21>) — file-import-only; coverage not established.
- [features/worldview/connectors.test.cjs:25](<../../../../../../features/worldview/connectors.test.cjs#L25>) — file-import-only; coverage not established.
- [features/worldview/coordinates.test.cjs:14](<../../../../../../features/worldview/coordinates.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-c7c956b865bb27e7"></a>

## screenToWorld

[features/worldview/coordinates.ts:46](<../../../../../../features/worldview/coordinates.ts#L46>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Converts viewport-local CSS pixels into world units for placement or hit testing.

Purpose evidence: jsdoc.

Exported as: screenToWorld ([features/worldview/coordinates.ts:1](<../../../../../../features/worldview/coordinates.ts#L1>)).

Lexical owner: [features/worldview/coordinates.ts](<coordinates.ts.md#s-5beba825baeedb68>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| point | Point | annotation | required |
| camera | WorldCamera | annotation | required |
| viewport | Viewport | annotation | required |

Returns: Point (annotation). Implementation present.

**Calls (statically resolved):**

- [unprojectWorld](<coordinates.ts.md#s-b19d0261c0f89b35>) — [features/worldview/coordinates.ts:51](<../../../../../../features/worldview/coordinates.ts#L51>)

**Called by (statically resolved):**

- [draggedChipPosition](<chip-renderer.ts.md#s-bd9aa40a9c5f1327>) — [features/worldview/chip-renderer.ts:97](<../../../../../../features/worldview/chip-renderer.ts#L97>)
- [&lt;anonymous@167:76&gt;](<connectors.test.cjs.md#s-77689194805bf6f3>) — [features/worldview/connectors.test.cjs:217](<../../../../../../features/worldview/connectors.test.cjs#L217>)
- [&lt;anonymous@167:76&gt;](<connectors.test.cjs.md#s-77689194805bf6f3>) — [features/worldview/connectors.test.cjs:218](<../../../../../../features/worldview/connectors.test.cjs#L218>)
- [&lt;anonymous@29:83&gt;](<coordinates.test.cjs.md#s-a6c8fd84398394ec>) — [features/worldview/coordinates.test.cjs:45](<../../../../../../features/worldview/coordinates.test.cjs#L45>)
- [&lt;anonymous@84:67&gt;](<coordinates.test.cjs.md#s-eb425c317c2c57cc>) — [features/worldview/coordinates.test.cjs:88](<../../../../../../features/worldview/coordinates.test.cjs#L88>)
- [&lt;anonymous@84:67&gt;](<coordinates.test.cjs.md#s-eb425c317c2c57cc>) — [features/worldview/coordinates.test.cjs:92](<../../../../../../features/worldview/coordinates.test.cjs#L92>)
- [&lt;anonymous@98:91&gt;](<coordinates.test.cjs.md#s-15935863d59283c3>) — [features/worldview/coordinates.test.cjs:115](<../../../../../../features/worldview/coordinates.test.cjs#L115>)
- [zoomCameraAt](<coordinates.ts.md#s-25dbc565c0e7d818>) — [features/worldview/coordinates.ts:81](<../../../../../../features/worldview/coordinates.ts#L81>)
- [zoomCameraAt](<coordinates.ts.md#s-25dbc565c0e7d818>) — [features/worldview/coordinates.ts:82](<../../../../../../features/worldview/coordinates.ts#L82>)
- [visibleWorldBounds](<coordinates.ts.md#s-7136899dfe740341>) — [features/worldview/coordinates.ts:95](<../../../../../../features/worldview/coordinates.ts#L95>)
- [visibleWorldBounds](<coordinates.ts.md#s-7136899dfe740341>) — [features/worldview/coordinates.ts:96](<../../../../../../features/worldview/coordinates.ts#L96>)
- [visibleWorldBounds](<coordinates.ts.md#s-7136899dfe740341>) — [features/worldview/coordinates.ts:97](<../../../../../../features/worldview/coordinates.ts#L97>)
- [visibleWorldBounds](<coordinates.ts.md#s-7136899dfe740341>) — [features/worldview/coordinates.ts:98](<../../../../../../features/worldview/coordinates.ts#L98>)
- [WorldView.connectWorldCanvas.startDrag](<worldview.tsx.md#s-8232bd9f09185164>) — [features/worldview/worldview.tsx:552](<../../../../../../features/worldview/worldview.tsx#L552>)
- [WorldView.connectWorldCanvas.createChip](<worldview.tsx.md#s-5eca98fe9e1f676c>) — [features/worldview/worldview.tsx:748](<../../../../../../features/worldview/worldview.tsx#L748>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/worldview/connectors.test.cjs:217](<../../../../../../features/worldview/connectors.test.cjs#L217>) — static-call-site; coverage not established.
- [features/worldview/connectors.test.cjs:218](<../../../../../../features/worldview/connectors.test.cjs#L218>) — static-call-site; coverage not established.
- [features/worldview/coordinates.test.cjs:45](<../../../../../../features/worldview/coordinates.test.cjs#L45>) — static-call-site; coverage not established.
- [features/worldview/coordinates.test.cjs:88](<../../../../../../features/worldview/coordinates.test.cjs#L88>) — static-call-site; coverage not established.
- [features/worldview/coordinates.test.cjs:92](<../../../../../../features/worldview/coordinates.test.cjs#L92>) — static-call-site; coverage not established.
- [features/worldview/coordinates.test.cjs:115](<../../../../../../features/worldview/coordinates.test.cjs#L115>) — static-call-site; coverage not established.
- [features/worldview/chip-labels.test.cjs:21](<../../../../../../features/worldview/chip-labels.test.cjs#L21>) — file-import-only; coverage not established.
- [features/worldview/connectors.test.cjs:25](<../../../../../../features/worldview/connectors.test.cjs#L25>) — file-import-only; coverage not established.
- [features/worldview/coordinates.test.cjs:14](<../../../../../../features/worldview/coordinates.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-3f3e3c3879a3d267"></a>

## panCamera

[features/worldview/coordinates.ts:59](<../../../../../../features/worldview/coordinates.ts#L59>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Returns a camera translating the ground by the supplied CSS-pixel drag delta.

Purpose evidence: jsdoc.

Exported as: panCamera ([features/worldview/coordinates.ts:1](<../../../../../../features/worldview/coordinates.ts#L1>)).

Lexical owner: [features/worldview/coordinates.ts](<coordinates.ts.md#s-5beba825baeedb68>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| camera | WorldCamera | annotation | required |
| delta | Point | annotation | required |

Returns: WorldCamera (annotation). Implementation present.

**Calls (statically resolved):**

- [unprojectWorld](<coordinates.ts.md#s-b19d0261c0f89b35>) — [features/worldview/coordinates.ts:60](<../../../../../../features/worldview/coordinates.ts#L60>)

**Called by (statically resolved):**

- [&lt;anonymous@58:72&gt;](<coordinates.test.cjs.md#s-ecf44f187224b064>) — [features/worldview/coordinates.test.cjs:70](<../../../../../../features/worldview/coordinates.test.cjs#L70>)
- [&lt;anonymous@58:72&gt;](<coordinates.test.cjs.md#s-ecf44f187224b064>) — [features/worldview/coordinates.test.cjs:76](<../../../../../../features/worldview/coordinates.test.cjs#L76>)
- [WorldView.connectWorldCanvas.moveDrag](<worldview.tsx.md#s-c9cbc6a06e08fe3f>) — [features/worldview/worldview.tsx:642](<../../../../../../features/worldview/worldview.tsx#L642>)
- [WorldView.connectWorldCanvas.keyControl](<worldview.tsx.md#s-d5810270e0ac232a>) — [features/worldview/worldview.tsx:827](<../../../../../../features/worldview/worldview.tsx#L827>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/worldview/coordinates.test.cjs:70](<../../../../../../features/worldview/coordinates.test.cjs#L70>) — static-call-site; coverage not established.
- [features/worldview/coordinates.test.cjs:76](<../../../../../../features/worldview/coordinates.test.cjs#L76>) — static-call-site; coverage not established.
- [features/worldview/chip-labels.test.cjs:21](<../../../../../../features/worldview/chip-labels.test.cjs#L21>) — file-import-only; coverage not established.
- [features/worldview/connectors.test.cjs:25](<../../../../../../features/worldview/connectors.test.cjs#L25>) — file-import-only; coverage not established.
- [features/worldview/coordinates.test.cjs:14](<../../../../../../features/worldview/coordinates.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-25dbc565c0e7d818"></a>

## zoomCameraAt

[features/worldview/coordinates.ts:71](<../../../../../../features/worldview/coordinates.ts#L71>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Returns a clamped camera preserving the world point beneath the viewport-local anchor.

Purpose evidence: jsdoc.

Exported as: zoomCameraAt ([features/worldview/coordinates.ts:1](<../../../../../../features/worldview/coordinates.ts#L1>)).

Lexical owner: [features/worldview/coordinates.ts](<coordinates.ts.md#s-5beba825baeedb68>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| camera | WorldCamera | annotation | required |
| zoom | number | annotation | required |
| anchor | Point | annotation | required |
| viewport | Viewport | annotation | required |

Returns: WorldCamera (annotation). Implementation present.

**Calls (statically resolved):**

- [screenToWorld](<coordinates.ts.md#s-c7c956b865bb27e7>) — [features/worldview/coordinates.ts:81](<../../../../../../features/worldview/coordinates.ts#L81>)
- [screenToWorld](<coordinates.ts.md#s-c7c956b865bb27e7>) — [features/worldview/coordinates.ts:82](<../../../../../../features/worldview/coordinates.ts#L82>)

**Called by (statically resolved):**

- [&lt;anonymous@84:67&gt;](<coordinates.test.cjs.md#s-eb425c317c2c57cc>) — [features/worldview/coordinates.test.cjs:90](<../../../../../../features/worldview/coordinates.test.cjs#L90>)
- [WorldView.connectWorldCanvas.wheelZoom](<worldview.tsx.md#s-c4026cd518550174>) — [features/worldview/worldview.tsx:717](<../../../../../../features/worldview/worldview.tsx#L717>)
- [WorldView.connectWorldCanvas.zoomBy](<worldview.tsx.md#s-8d17221d15a10a02>) — [features/worldview/worldview.tsx:730](<../../../../../../features/worldview/worldview.tsx#L730>)

Unresolved / external call sites: 2.

- Math.min — external-or-dynamic-dispatch; [features/worldview/coordinates.ts:79](<../../../../../../features/worldview/coordinates.ts#L79>)
- Math.max — external-or-dynamic-dispatch; [features/worldview/coordinates.ts:79](<../../../../../../features/worldview/coordinates.ts#L79>)

**Related tests / acceptance harnesses:**

- [features/worldview/coordinates.test.cjs:90](<../../../../../../features/worldview/coordinates.test.cjs#L90>) — static-call-site; coverage not established.
- [features/worldview/chip-labels.test.cjs:21](<../../../../../../features/worldview/chip-labels.test.cjs#L21>) — file-import-only; coverage not established.
- [features/worldview/connectors.test.cjs:25](<../../../../../../features/worldview/connectors.test.cjs#L25>) — file-import-only; coverage not established.
- [features/worldview/coordinates.test.cjs:14](<../../../../../../features/worldview/coordinates.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-7136899dfe740341"></a>

## visibleWorldBounds

[features/worldview/coordinates.ts:93](<../../../../../../features/worldview/coordinates.ts#L93>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Bounds the inverse-projected viewport with two extra world cells for edge coverage.

Purpose evidence: jsdoc.

Exported as: visibleWorldBounds ([features/worldview/coordinates.ts:1](<../../../../../../features/worldview/coordinates.ts#L1>)).

Lexical owner: [features/worldview/coordinates.ts](<coordinates.ts.md#s-5beba825baeedb68>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| camera | WorldCamera | annotation | required |
| viewport | Viewport | annotation | required |

Returns: { minX: number; maxX: any; minY: number; maxY: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [screenToWorld](<coordinates.ts.md#s-c7c956b865bb27e7>) — [features/worldview/coordinates.ts:95](<../../../../../../features/worldview/coordinates.ts#L95>)
- [screenToWorld](<coordinates.ts.md#s-c7c956b865bb27e7>) — [features/worldview/coordinates.ts:96](<../../../../../../features/worldview/coordinates.ts#L96>)
- [screenToWorld](<coordinates.ts.md#s-c7c956b865bb27e7>) — [features/worldview/coordinates.ts:97](<../../../../../../features/worldview/coordinates.ts#L97>)
- [screenToWorld](<coordinates.ts.md#s-c7c956b865bb27e7>) — [features/worldview/coordinates.ts:98](<../../../../../../features/worldview/coordinates.ts#L98>)

**Called by (statically resolved):**

- [&lt;anonymous@98:91&gt;](<coordinates.test.cjs.md#s-15935863d59283c3>) — [features/worldview/coordinates.test.cjs:108](<../../../../../../features/worldview/coordinates.test.cjs#L108>)
- [drawWorldGrid](<grid.ts.md#s-a64710dd27741096>) — [features/worldview/grid.ts:80](<../../../../../../features/worldview/grid.ts#L80>)

Unresolved / external call sites: 12.

- Math.floor — external-or-dynamic-dispatch; [features/worldview/coordinates.ts:101](<../../../../../../features/worldview/coordinates.ts#L101>)
- Math.min — external-or-dynamic-dispatch; [features/worldview/coordinates.ts:101](<../../../../../../features/worldview/coordinates.ts#L101>)
- corners.map — external-or-dynamic-dispatch; [features/worldview/coordinates.ts:101](<../../../../../../features/worldview/coordinates.ts#L101>)
- Math.ceil — external-or-dynamic-dispatch; [features/worldview/coordinates.ts:102](<../../../../../../features/worldview/coordinates.ts#L102>)
- Math.max — external-or-dynamic-dispatch; [features/worldview/coordinates.ts:102](<../../../../../../features/worldview/coordinates.ts#L102>)
- corners.map — external-or-dynamic-dispatch; [features/worldview/coordinates.ts:102](<../../../../../../features/worldview/coordinates.ts#L102>)
- Math.floor — external-or-dynamic-dispatch; [features/worldview/coordinates.ts:103](<../../../../../../features/worldview/coordinates.ts#L103>)
- Math.min — external-or-dynamic-dispatch; [features/worldview/coordinates.ts:103](<../../../../../../features/worldview/coordinates.ts#L103>)
- 4 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [features/worldview/coordinates.test.cjs:108](<../../../../../../features/worldview/coordinates.test.cjs#L108>) — static-call-site; coverage not established.
- [features/worldview/chip-labels.test.cjs:21](<../../../../../../features/worldview/chip-labels.test.cjs#L21>) — file-import-only; coverage not established.
- [features/worldview/connectors.test.cjs:25](<../../../../../../features/worldview/connectors.test.cjs#L25>) — file-import-only; coverage not established.
- [features/worldview/coordinates.test.cjs:14](<../../../../../../features/worldview/coordinates.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-5e19d9fef85eb312"></a>

## visibleWorldBounds.&lt;anonymous@101:46&gt;

[features/worldview/coordinates.ts:101](<../../../../../../features/worldview/coordinates.ts#L101>) · ArrowFunction · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [visibleWorldBounds](<coordinates.ts.md#s-7136899dfe740341>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| point | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/worldview/chip-labels.test.cjs:21](<../../../../../../features/worldview/chip-labels.test.cjs#L21>) — file-import-only; coverage not established.
- [features/worldview/connectors.test.cjs:25](<../../../../../../features/worldview/connectors.test.cjs#L25>) — file-import-only; coverage not established.
- [features/worldview/coordinates.test.cjs:14](<../../../../../../features/worldview/coordinates.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-c1c899b1bfd197a3"></a>

## visibleWorldBounds.&lt;anonymous@102:45&gt;

[features/worldview/coordinates.ts:102](<../../../../../../features/worldview/coordinates.ts#L102>) · ArrowFunction · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [visibleWorldBounds](<coordinates.ts.md#s-7136899dfe740341>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| point | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/worldview/chip-labels.test.cjs:21](<../../../../../../features/worldview/chip-labels.test.cjs#L21>) — file-import-only; coverage not established.
- [features/worldview/connectors.test.cjs:25](<../../../../../../features/worldview/connectors.test.cjs#L25>) — file-import-only; coverage not established.
- [features/worldview/coordinates.test.cjs:14](<../../../../../../features/worldview/coordinates.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-474149117eaff2b0"></a>

## visibleWorldBounds.&lt;anonymous@103:46&gt;

[features/worldview/coordinates.ts:103](<../../../../../../features/worldview/coordinates.ts#L103>) · ArrowFunction · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [visibleWorldBounds](<coordinates.ts.md#s-7136899dfe740341>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| point | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/worldview/chip-labels.test.cjs:21](<../../../../../../features/worldview/chip-labels.test.cjs#L21>) — file-import-only; coverage not established.
- [features/worldview/connectors.test.cjs:25](<../../../../../../features/worldview/connectors.test.cjs#L25>) — file-import-only; coverage not established.
- [features/worldview/coordinates.test.cjs:14](<../../../../../../features/worldview/coordinates.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-d5e20a6ca7508bd0"></a>

## visibleWorldBounds.&lt;anonymous@104:45&gt;

[features/worldview/coordinates.ts:104](<../../../../../../features/worldview/coordinates.ts#L104>) · ArrowFunction · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [visibleWorldBounds](<coordinates.ts.md#s-7136899dfe740341>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| point | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/worldview/chip-labels.test.cjs:21](<../../../../../../features/worldview/chip-labels.test.cjs#L21>) — file-import-only; coverage not established.
- [features/worldview/connectors.test.cjs:25](<../../../../../../features/worldview/connectors.test.cjs#L25>) — file-import-only; coverage not established.
- [features/worldview/coordinates.test.cjs:14](<../../../../../../features/worldview/coordinates.test.cjs#L14>) — file-import-only; coverage not established.
