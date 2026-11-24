# features/worldview/connector-labels.ts: symbols

[Atlas](<../../../../README.md>) / [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>) / [features/worldview/connector-labels.ts:1](<../../../../../../features/worldview/connector-labels.ts#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [features/worldview/connector-labels.ts](<connector-labels.ts.md#s-2ba1339ac51b504d>) (Module)
- [LabelBounds](<connector-labels.ts.md#s-28a7dcc25f63169d>) (TypeAliasDeclaration)
- [ConnectorLabel](<connector-labels.ts.md#s-20aabd872854399d>) (TypeAliasDeclaration)
- [overlaps](<connector-labels.ts.md#s-191b742adbabe68e>) (FunctionDeclaration)
- [connectorLabelLayouts](<connector-labels.ts.md#s-08c0ed548feeee3e>) (FunctionDeclaration)
- [connectorLabelLayouts.&lt;anonymous@73:30&gt;](<connector-labels.ts.md#s-2554f216f434790d>) (ArrowFunction)
- [updateConnectorLabels](<connector-labels.ts.md#s-a3f6f9836f09105b>) (FunctionDeclaration)
- [updateConnectorLabels.&lt;anonymous@116:7&gt;](<connector-labels.ts.md#s-0887bdfecd352831>) (ArrowFunction)
- [updateConnectorLabels.&lt;anonymous@132:5&gt;](<connector-labels.ts.md#s-cdd1953d2a9a80dd>) (ArrowFunction)
- [updateConnectorLabels.&lt;anonymous@155:5&gt;](<connector-labels.ts.md#s-b009b1d2c5da04e7>) (ArrowFunction)

<a id="s-2ba1339ac51b504d"></a>

## features/worldview/connector-labels.ts

[features/worldview/connector-labels.ts:1](<../../../../../../features/worldview/connector-labels.ts#L1>) · Module · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/worldview/connectors.test.cjs:24](<../../../../../../features/worldview/connectors.test.cjs#L24>) — file-import-only; coverage not established.

<a id="s-28a7dcc25f63169d"></a>

## LabelBounds

[features/worldview/connector-labels.ts:12](<../../../../../../features/worldview/connector-labels.ts#L12>) · TypeAliasDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: LabelBounds ([features/worldview/connector-labels.ts:1](<../../../../../../features/worldview/connector-labels.ts#L1>)).

Lexical owner: [features/worldview/connector-labels.ts](<connector-labels.ts.md#s-2ba1339ac51b504d>).

Contract evidence: typescript-declaration. [Full declaration index](<../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/worldview/connectors.test.cjs:24](<../../../../../../features/worldview/connectors.test.cjs#L24>) — file-import-only; coverage not established.

<a id="s-20aabd872854399d"></a>

## ConnectorLabel

[features/worldview/connector-labels.ts:18](<../../../../../../features/worldview/connector-labels.ts#L18>) · TypeAliasDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: ConnectorLabel ([features/worldview/connector-labels.ts:1](<../../../../../../features/worldview/connector-labels.ts#L1>)).

Lexical owner: [features/worldview/connector-labels.ts](<connector-labels.ts.md#s-2ba1339ac51b504d>).

Contract evidence: typescript-declaration. [Full declaration index](<../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/worldview/connectors.test.cjs:24](<../../../../../../features/worldview/connectors.test.cjs#L24>) — file-import-only; coverage not established.

<a id="s-191b742adbabe68e"></a>

## overlaps

[features/worldview/connector-labels.ts:22](<../../../../../../features/worldview/connector-labels.ts#L22>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Checks padded label/platform rectangles to reserve readable space. Pure.

Purpose evidence: jsdoc.

Lexical owner: [features/worldview/connector-labels.ts](<connector-labels.ts.md#s-2ba1339ac51b504d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| first | LabelBounds | annotation | required |
| second | LabelBounds | annotation | required |

Returns: boolean (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [connectorLabelLayouts.&lt;anonymous@73:30&gt;](<connector-labels.ts.md#s-2554f216f434790d>) — [features/worldview/connector-labels.ts:73](<../../../../../../features/worldview/connector-labels.ts#L73>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/worldview/connectors.test.cjs:24](<../../../../../../features/worldview/connectors.test.cjs#L24>) — file-import-only; coverage not established.

<a id="s-08c0ed548feeee3e"></a>

## connectorLabelLayouts

[features/worldview/connector-labels.ts:32](<../../../../../../features/worldview/connector-labels.ts#L32>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Places labels near their own curves, searching nearby viewport space around already placed labels and chips. Dense views may exhaust available space. Pure.

Purpose evidence: jsdoc.

Exported as: connectorLabelLayouts ([features/worldview/connector-labels.ts:1](<../../../../../../features/worldview/connector-labels.ts#L1>)).

Lexical owner: [features/worldview/connector-labels.ts](<connector-labels.ts.md#s-2ba1339ac51b504d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| entries | readonly Readonly&lt;{ id: string; anchor: Point; width: number; height: number; }&gt;&#91;&#93; | annotation | required |
| obstacles | readonly LabelBounds&#91;&#93; | annotation | required |
| viewport | Viewport | annotation | required |

Returns: ConnectorLabel&#91;&#93; (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [updateConnectorLabels](<connector-labels.ts.md#s-a3f6f9836f09105b>) — [features/worldview/connector-labels.ts:184](<../../../../../../features/worldview/connector-labels.ts#L184>)
- [&lt;anonymous@226:91&gt;](<connectors.test.cjs.md#s-f9307ddea7f2fdba>) — [features/worldview/connectors.test.cjs:234](<../../../../../../features/worldview/connectors.test.cjs#L234>)
- [&lt;anonymous@226:91&gt;](<connectors.test.cjs.md#s-f9307ddea7f2fdba>) — [features/worldview/connectors.test.cjs:238](<../../../../../../features/worldview/connectors.test.cjs#L238>)

Unresolved / external call sites: 16.

- Math.ceil — external-or-dynamic-dispatch; [features/worldview/connector-labels.ts:44](<../../../../../../features/worldview/connector-labels.ts#L44>)
- Math.sqrt — external-or-dynamic-dispatch; [features/worldview/connector-labels.ts:44](<../../../../../../features/worldview/connector-labels.ts#L44>)
- Math.max — external-or-dynamic-dispatch; [features/worldview/connector-labels.ts:54](<../../../../../../features/worldview/connector-labels.ts#L54>)
- Math.abs — external-or-dynamic-dispatch; [features/worldview/connector-labels.ts:54](<../../../../../../features/worldview/connector-labels.ts#L54>)
- Math.abs — external-or-dynamic-dispatch; [features/worldview/connector-labels.ts:54](<../../../../../../features/worldview/connector-labels.ts#L54>)
- Math.max — external-or-dynamic-dispatch; [features/worldview/connector-labels.ts:56](<../../../../../../features/worldview/connector-labels.ts#L56>)
- Math.min — external-or-dynamic-dispatch; [features/worldview/connector-labels.ts:58](<../../../../../../features/worldview/connector-labels.ts#L58>)
- Math.max — external-or-dynamic-dispatch; [features/worldview/connector-labels.ts:63](<../../../../../../features/worldview/connector-labels.ts#L63>)
- 8 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [features/worldview/connectors.test.cjs:234](<../../../../../../features/worldview/connectors.test.cjs#L234>) — static-call-site; coverage not established.
- [features/worldview/connectors.test.cjs:238](<../../../../../../features/worldview/connectors.test.cjs#L238>) — static-call-site; coverage not established.
- [features/worldview/connectors.test.cjs:24](<../../../../../../features/worldview/connectors.test.cjs#L24>) — file-import-only; coverage not established.

<a id="s-2554f216f434790d"></a>

## connectorLabelLayouts.&lt;anonymous@73:30&gt;

[features/worldview/connector-labels.ts:73](<../../../../../../features/worldview/connector-labels.ts#L73>) · ArrowFunction · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [connectorLabelLayouts](<connector-labels.ts.md#s-08c0ed548feeee3e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| bounds | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [overlaps](<connector-labels.ts.md#s-191b742adbabe68e>) — [features/worldview/connector-labels.ts:73](<../../../../../../features/worldview/connector-labels.ts#L73>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/worldview/connectors.test.cjs:24](<../../../../../../features/worldview/connectors.test.cjs#L24>) — file-import-only; coverage not established.

<a id="s-a3f6f9836f09105b"></a>

## updateConnectorLabels

[features/worldview/connector-labels.ts:92](<../../../../../../features/worldview/connector-labels.ts#L92>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Positions bubbles using their scaled bounds: size follows zoom below 170% and caps there. Bubbles/leaders fade below 130% and become hidden/inert at minimum zoom.

Purpose evidence: jsdoc.

Exported as: updateConnectorLabels ([features/worldview/connector-labels.ts:1](<../../../../../../features/worldview/connector-labels.ts#L1>)).

Lexical owner: [features/worldview/connector-labels.ts](<connector-labels.ts.md#s-2ba1339ac51b504d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| {   container,   context,   routes,   chips,   camera,   viewport,   preview, } | Readonly&lt;{ container: HTMLDivElement &#124; null; context: CanvasRenderingContext2D; routes: readonly ConnectorRoute&#91;&#93;; chips: readonly WorldViewChip&#91;&#93;; camera: WorldCamera; viewport: Viewport; preview?: ChipPreview &#124; null; }&gt; | annotation | required |

Returns: void (annotation). Implementation present.

**Calls (statically resolved):**

- [connectorLabelLayouts](<connector-labels.ts.md#s-08c0ed548feeee3e>) — [features/worldview/connector-labels.ts:184](<../../../../../../features/worldview/connector-labels.ts#L184>)

**Called by (statically resolved):**

- [WorldView.connectWorldCanvas.paint](<worldview.tsx.md#s-f30798102198d6d1>) — [features/worldview/worldview.tsx:312](<../../../../../../features/worldview/worldview.tsx#L312>)

Unresolved / external call sites: 27.

- Math.min — external-or-dynamic-dispatch; [features/worldview/connector-labels.ts:110](<../../../../../../features/worldview/connector-labels.ts#L110>)
- Map — external-or-dynamic-dispatch; [features/worldview/connector-labels.ts:111](<../../../../../../features/worldview/connector-labels.ts#L111>)
- Array.from( container.querySelectorAll&lt;HTMLButtonElement&gt;("&#91;data-connector-id&#93;"), ).map — external-or-dynamic-dispatch; [features/worldview/connector-labels.ts:112](<../../../../../../features/worldview/connector-labels.ts#L112>)
- Array.from — external-or-dynamic-dispatch; [features/worldview/connector-labels.ts:112](<../../../../../../features/worldview/connector-labels.ts#L112>)
- container.querySelectorAll — external-or-dynamic-dispatch; [features/worldview/connector-labels.ts:113](<../../../../../../features/worldview/connector-labels.ts#L113>)
- Math.max — external-or-dynamic-dispatch; [features/worldview/connector-labels.ts:119](<../../../../../../features/worldview/connector-labels.ts#L119>)
- Math.min — external-or-dynamic-dispatch; [features/worldview/connector-labels.ts:121](<../../../../../../features/worldview/connector-labels.ts#L121>)
- String — external-or-dynamic-dispatch; [features/worldview/connector-labels.ts:123](<../../../../../../features/worldview/connector-labels.ts#L123>)
- 19 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [features/worldview/connectors.test.cjs:24](<../../../../../../features/worldview/connectors.test.cjs#L24>) — file-import-only; coverage not established.

<a id="s-0887bdfecd352831"></a>

## updateConnectorLabels.&lt;anonymous@116:7&gt;

[features/worldview/connector-labels.ts:116](<../../../../../../features/worldview/connector-labels.ts#L116>) · ArrowFunction · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Indexes rendered labels by their independent relationship identity.

Purpose evidence: jsdoc.

Lexical owner: [updateConnectorLabels](<connector-labels.ts.md#s-a3f6f9836f09105b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| element | any | compiler-inferred | required |

Returns: {} (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/worldview/connectors.test.cjs:24](<../../../../../../features/worldview/connectors.test.cjs#L24>) — file-import-only; coverage not established.

<a id="s-cdd1953d2a9a80dd"></a>

## updateConnectorLabels.&lt;anonymous@132:5&gt;

[features/worldview/connector-labels.ts:132](<../../../../../../features/worldview/connector-labels.ts#L132>) · ArrowFunction · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Measures labels only when their curve anchor is inside the world viewport.

Purpose evidence: jsdoc.

Lexical owner: [updateConnectorLabels](<connector-labels.ts.md#s-a3f6f9836f09105b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| route | any | compiler-inferred | required |

Returns: {} (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [routePoint](<connectors.ts.md#s-10a92d551da55140>) — [features/worldview/connector-labels.ts:134](<../../../../../../features/worldview/connector-labels.ts#L134>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- elements.get — external-or-dynamic-dispatch; [features/worldview/connector-labels.ts:133](<../../../../../../features/worldview/connector-labels.ts#L133>)

**Related tests / acceptance harnesses:**

- [features/worldview/connectors.test.cjs:24](<../../../../../../features/worldview/connectors.test.cjs#L24>) — file-import-only; coverage not established.

<a id="s-b009b1d2c5da04e7"></a>

## updateConnectorLabels.&lt;anonymous@155:5&gt;

[features/worldview/connector-labels.ts:155](<../../../../../../features/worldview/connector-labels.ts#L155>) · ArrowFunction · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Reserves the projected platform and its exact ports, including live chip movement.

Purpose evidence: jsdoc.

Lexical owner: [updateConnectorLabels](<connector-labels.ts.md#s-a3f6f9836f09105b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| chip | any | compiler-inferred | required |

Returns: { x: number; y: number; width: number; height: number; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [worldToScreen](<coordinates.ts.md#s-3ab4b3de6a773d84>) — [features/worldview/connector-labels.ts:156](<../../../../../../features/worldview/connector-labels.ts#L156>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/worldview/connectors.test.cjs:24](<../../../../../../features/worldview/connectors.test.cjs#L24>) — file-import-only; coverage not established.
