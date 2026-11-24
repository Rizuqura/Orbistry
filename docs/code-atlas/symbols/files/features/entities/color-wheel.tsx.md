# features/entities/color-wheel.tsx: symbols

[Atlas](<../../../../README.md>) / [Entity UI](<../../../../modules/portal-entities.md>) / [features/entities/color-wheel.tsx:1](<../../../../../../features/entities/color-wheel.tsx#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [features/entities/color-wheel.tsx](<color-wheel.tsx.md#s-522df4140e66259e>) (Module)
- [ColorWheel](<color-wheel.tsx.md#s-13a56543ac190d3b>) (FunctionDeclaration)
- [ColorWheel.&lt;anonymous@16:40&gt;](<color-wheel.tsx.md#s-8b0e05bd3efff6f8>) (FunctionType)
- [ColorWheel.updateColor](<color-wheel.tsx.md#s-72dfda543b0ef935>) (FunctionDeclaration)
- [ColorWheel.pickColor](<color-wheel.tsx.md#s-3501a23d6815b7a4>) (FunctionDeclaration)
- [ColorWheel.startPicking](<color-wheel.tsx.md#s-bd6ab6ad95f13f80>) (FunctionDeclaration)
- [ColorWheel.movePicking](<color-wheel.tsx.md#s-e8bd8195ad3b2601>) (FunctionDeclaration)
- [ColorWheel.stopPicking](<color-wheel.tsx.md#s-3076bc106dcf0735>) (FunctionDeclaration)
- [ColorWheel.keyboardPick](<color-wheel.tsx.md#s-7501b75f3855eed9>) (FunctionDeclaration)
- [ColorWheel.changeBrightness](<color-wheel.tsx.md#s-82ef4da5e8cc57e6>) (FunctionDeclaration)
- [ColorWheel.changeHex](<color-wheel.tsx.md#s-faba2dca14f1d9ee>) (FunctionDeclaration)

<a id="s-522df4140e66259e"></a>

## features/entities/color-wheel.tsx

[features/entities/color-wheel.tsx:1](<../../../../../../features/entities/color-wheel.tsx#L1>) · Module · production · [Entity UI](<../../../../modules/portal-entities.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-13a56543ac190d3b"></a>

## ColorWheel

[features/entities/color-wheel.tsx:13](<../../../../../../features/entities/color-wheel.tsx#L13>) · FunctionDeclaration · production · [Entity UI](<../../../../modules/portal-entities.md>)

Provides a compact keyboard/pointer hue-saturation wheel, brightness slider, and validated hex field.

Purpose evidence: jsdoc.

Exported as: ColorWheel ([features/entities/color-wheel.tsx:1](<../../../../../../features/entities/color-wheel.tsx#L1>)).

Lexical owner: [features/entities/color-wheel.tsx](<color-wheel.tsx.md#s-522df4140e66259e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| {   value,   onChange, } | Readonly&lt;{ value: string; onChange: (color: string) =&gt; void }&gt; | annotation | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [hexToHsv](<../worldview/chip-colors.ts.md#s-fd4070793e1cb6e8>) — [features/entities/color-wheel.tsx:19](<../../../../../../features/entities/color-wheel.tsx#L19>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 9.

- useState — external-or-dynamic-dispatch; [features/entities/color-wheel.tsx:17](<../../../../../../features/entities/color-wheel.tsx#L17>)
- useId — external-or-dynamic-dispatch; [features/entities/color-wheel.tsx:18](<../../../../../../features/entities/color-wheel.tsx#L18>)
- useState — external-or-dynamic-dispatch; [features/entities/color-wheel.tsx:19](<../../../../../../features/entities/color-wheel.tsx#L19>)
- Math.round — external-or-dynamic-dispatch; [features/entities/color-wheel.tsx:134](<../../../../../../features/entities/color-wheel.tsx#L134>)
- Math.round — external-or-dynamic-dispatch; [features/entities/color-wheel.tsx:135](<../../../../../../features/entities/color-wheel.tsx#L135>)
- Math.cos — external-or-dynamic-dispatch; [features/entities/color-wheel.tsx:151](<../../../../../../features/entities/color-wheel.tsx#L151>)
- Math.sin — external-or-dynamic-dispatch; [features/entities/color-wheel.tsx:152](<../../../../../../features/entities/color-wheel.tsx#L152>)
- Math.round — external-or-dynamic-dispatch; [features/entities/color-wheel.tsx:164](<../../../../../../features/entities/color-wheel.tsx#L164>)
- 1 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-8b0e05bd3efff6f8"></a>

## ColorWheel.&lt;anonymous@16:40&gt;

[features/entities/color-wheel.tsx:16](<../../../../../../features/entities/color-wheel.tsx#L16>) · FunctionType · production · [Entity UI](<../../../../modules/portal-entities.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ColorWheel](<color-wheel.tsx.md#s-13a56543ac190d3b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| color | string | annotation | required |

Returns: void (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-72dfda543b0ef935"></a>

## ColorWheel.updateColor

[features/entities/color-wheel.tsx:23](<../../../../../../features/entities/color-wheel.tsx#L23>) · FunctionDeclaration · production · [Entity UI](<../../../../modules/portal-entities.md>)

Publishes a valid wheel color and synchronizes the editable hex field.

Purpose evidence: jsdoc.

Lexical owner: [ColorWheel](<color-wheel.tsx.md#s-13a56543ac190d3b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| next | HsvColor | annotation | required |

Returns: void (annotation). Implementation present.

**Calls (statically resolved):**

- [hsvToHex](<../worldview/chip-colors.ts.md#s-590fd1ec97ea4e9f>) — [features/entities/color-wheel.tsx:25](<../../../../../../features/entities/color-wheel.tsx#L25>)

**Called by (statically resolved):**

- [ColorWheel.pickColor](<color-wheel.tsx.md#s-3501a23d6815b7a4>) — [features/entities/color-wheel.tsx:38](<../../../../../../features/entities/color-wheel.tsx#L38>)
- [ColorWheel.keyboardPick](<color-wheel.tsx.md#s-7501b75f3855eed9>) — [features/entities/color-wheel.tsx:81](<../../../../../../features/entities/color-wheel.tsx#L81>)
- [ColorWheel.changeBrightness](<color-wheel.tsx.md#s-82ef4da5e8cc57e6>) — [features/entities/color-wheel.tsx:111](<../../../../../../features/entities/color-wheel.tsx#L111>)

Unresolved / external call sites: 3.

- setHsv — external-or-dynamic-dispatch; [features/entities/color-wheel.tsx:26](<../../../../../../features/entities/color-wheel.tsx#L26>)
- setHex — external-or-dynamic-dispatch; [features/entities/color-wheel.tsx:27](<../../../../../../features/entities/color-wheel.tsx#L27>)
- onChange — external-or-dynamic-dispatch; [features/entities/color-wheel.tsx:28](<../../../../../../features/entities/color-wheel.tsx#L28>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-3501a23d6815b7a4"></a>

## ColorWheel.pickColor

[features/entities/color-wheel.tsx:32](<../../../../../../features/entities/color-wheel.tsx#L32>) · FunctionDeclaration · production · [Entity UI](<../../../../modules/portal-entities.md>)

Converts a pointer's local polar coordinates to clamped hue/saturation without moving the world.

Purpose evidence: jsdoc.

Lexical owner: [ColorWheel](<color-wheel.tsx.md#s-13a56543ac190d3b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| event | PointerEvent&lt;HTMLDivElement&gt; | annotation | required |

Returns: void (annotation). Implementation present.

**Calls (statically resolved):**

- [ColorWheel.updateColor](<color-wheel.tsx.md#s-72dfda543b0ef935>) — [features/entities/color-wheel.tsx:38](<../../../../../../features/entities/color-wheel.tsx#L38>)

**Called by (statically resolved):**

- [ColorWheel.startPicking](<color-wheel.tsx.md#s-bd6ab6ad95f13f80>) — [features/entities/color-wheel.tsx:51](<../../../../../../features/entities/color-wheel.tsx#L51>)
- [ColorWheel.movePicking](<color-wheel.tsx.md#s-e8bd8195ad3b2601>) — [features/entities/color-wheel.tsx:57](<../../../../../../features/entities/color-wheel.tsx#L57>)

Unresolved / external call sites: 4.

- event.currentTarget.getBoundingClientRect — external-or-dynamic-dispatch; [features/entities/color-wheel.tsx:33](<../../../../../../features/entities/color-wheel.tsx#L33>)
- Math.atan2 — external-or-dynamic-dispatch; [features/entities/color-wheel.tsx:40](<../../../../../../features/entities/color-wheel.tsx#L40>)
- Math.min — external-or-dynamic-dispatch; [features/entities/color-wheel.tsx:41](<../../../../../../features/entities/color-wheel.tsx#L41>)
- Math.hypot — external-or-dynamic-dispatch; [features/entities/color-wheel.tsx:41](<../../../../../../features/entities/color-wheel.tsx#L41>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-bd6ab6ad95f13f80"></a>

## ColorWheel.startPicking

[features/entities/color-wheel.tsx:46](<../../../../../../features/entities/color-wheel.tsx#L46>) · FunctionDeclaration · production · [Entity UI](<../../../../modules/portal-entities.md>)

Captures a primary left-pointer wheel gesture and focuses its keyboard control.

Purpose evidence: jsdoc.

Lexical owner: [ColorWheel](<color-wheel.tsx.md#s-13a56543ac190d3b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| event | PointerEvent&lt;HTMLDivElement&gt; | annotation | required |

Returns: void (annotation). Implementation present.

**Calls (statically resolved):**

- [ColorWheel.pickColor](<color-wheel.tsx.md#s-3501a23d6815b7a4>) — [features/entities/color-wheel.tsx:51](<../../../../../../features/entities/color-wheel.tsx#L51>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- event.preventDefault — external-or-dynamic-dispatch; [features/entities/color-wheel.tsx:48](<../../../../../../features/entities/color-wheel.tsx#L48>)
- event.currentTarget.focus — external-or-dynamic-dispatch; [features/entities/color-wheel.tsx:49](<../../../../../../features/entities/color-wheel.tsx#L49>)
- event.currentTarget.setPointerCapture — external-or-dynamic-dispatch; [features/entities/color-wheel.tsx:50](<../../../../../../features/entities/color-wheel.tsx#L50>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-e8bd8195ad3b2601"></a>

## ColorWheel.movePicking

[features/entities/color-wheel.tsx:55](<../../../../../../features/entities/color-wheel.tsx#L55>) · FunctionDeclaration · production · [Entity UI](<../../../../modules/portal-entities.md>)

Continues picking only while this wheel owns the pointer capture.

Purpose evidence: jsdoc.

Lexical owner: [ColorWheel](<color-wheel.tsx.md#s-13a56543ac190d3b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| event | PointerEvent&lt;HTMLDivElement&gt; | annotation | required |

Returns: void (annotation). Implementation present.

**Calls (statically resolved):**

- [ColorWheel.pickColor](<color-wheel.tsx.md#s-3501a23d6815b7a4>) — [features/entities/color-wheel.tsx:57](<../../../../../../features/entities/color-wheel.tsx#L57>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- event.currentTarget.hasPointerCapture — external-or-dynamic-dispatch; [features/entities/color-wheel.tsx:56](<../../../../../../features/entities/color-wheel.tsx#L56>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-3076bc106dcf0735"></a>

## ColorWheel.stopPicking

[features/entities/color-wheel.tsx:61](<../../../../../../features/entities/color-wheel.tsx#L61>) · FunctionDeclaration · production · [Entity UI](<../../../../modules/portal-entities.md>)

Releases a completed or canceled color gesture without committing any chip edit.

Purpose evidence: jsdoc.

Lexical owner: [ColorWheel](<color-wheel.tsx.md#s-13a56543ac190d3b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| event | PointerEvent&lt;HTMLDivElement&gt; | annotation | required |

Returns: void (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- event.currentTarget.hasPointerCapture — external-or-dynamic-dispatch; [features/entities/color-wheel.tsx:62](<../../../../../../features/entities/color-wheel.tsx#L62>)
- event.currentTarget.releasePointerCapture — external-or-dynamic-dispatch; [features/entities/color-wheel.tsx:63](<../../../../../../features/entities/color-wheel.tsx#L63>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-7501b75f3855eed9"></a>

## ColorWheel.keyboardPick

[features/entities/color-wheel.tsx:67](<../../../../../../features/entities/color-wheel.tsx#L67>) · FunctionDeclaration · production · [Entity UI](<../../../../modules/portal-entities.md>)

Adjusts hue with left/right, saturation with up/down, and supports wheel endpoints.

Purpose evidence: jsdoc.

Lexical owner: [ColorWheel](<color-wheel.tsx.md#s-13a56543ac190d3b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| event | KeyboardEvent&lt;HTMLDivElement&gt; | annotation | required |

Returns: void (annotation). Implementation present.

**Calls (statically resolved):**

- [ColorWheel.updateColor](<color-wheel.tsx.md#s-72dfda543b0ef935>) — [features/entities/color-wheel.tsx:81](<../../../../../../features/entities/color-wheel.tsx#L81>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- &#91; "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End", &#93;.includes — external-or-dynamic-dispatch; [features/entities/color-wheel.tsx:69](<../../../../../../features/entities/color-wheel.tsx#L69>)
- event.preventDefault — external-or-dynamic-dispatch; [features/entities/color-wheel.tsx:79](<../../../../../../features/entities/color-wheel.tsx#L79>)
- Math.max — external-or-dynamic-dispatch; [features/entities/color-wheel.tsx:94](<../../../../../../features/entities/color-wheel.tsx#L94>)
- Math.min — external-or-dynamic-dispatch; [features/entities/color-wheel.tsx:96](<../../../../../../features/entities/color-wheel.tsx#L96>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-82ef4da5e8cc57e6"></a>

## ColorWheel.changeBrightness

[features/entities/color-wheel.tsx:110](<../../../../../../features/entities/color-wheel.tsx#L110>) · FunctionDeclaration · production · [Entity UI](<../../../../modules/portal-entities.md>)

Updates wheel brightness from its native accessible range input.

Purpose evidence: jsdoc.

Lexical owner: [ColorWheel](<color-wheel.tsx.md#s-13a56543ac190d3b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| event | ChangeEvent&lt;HTMLInputElement&gt; | annotation | required |

Returns: void (annotation). Implementation present.

**Calls (statically resolved):**

- [ColorWheel.updateColor](<color-wheel.tsx.md#s-72dfda543b0ef935>) — [features/entities/color-wheel.tsx:111](<../../../../../../features/entities/color-wheel.tsx#L111>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- Number — external-or-dynamic-dispatch; [features/entities/color-wheel.tsx:111](<../../../../../../features/entities/color-wheel.tsx#L111>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-faba2dca14f1d9ee"></a>

## ColorWheel.changeHex

[features/entities/color-wheel.tsx:115](<../../../../../../features/entities/color-wheel.tsx#L115>) · FunctionDeclaration · production · [Entity UI](<../../../../modules/portal-entities.md>)

Keeps partial hex input local; publishes only complete valid colors.

Purpose evidence: jsdoc.

Lexical owner: [ColorWheel](<color-wheel.tsx.md#s-13a56543ac190d3b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| event | ChangeEvent&lt;HTMLInputElement&gt; | annotation | required |

Returns: void (annotation). Implementation present.

**Calls (statically resolved):**

- [hexToHsv](<../worldview/chip-colors.ts.md#s-fd4070793e1cb6e8>) — [features/entities/color-wheel.tsx:119](<../../../../../../features/entities/color-wheel.tsx#L119>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- setHex — external-or-dynamic-dispatch; [features/entities/color-wheel.tsx:117](<../../../../../../features/entities/color-wheel.tsx#L117>)
- /^#&#91;0-9a-f&#93;{6}$/i.test — external-or-dynamic-dispatch; [features/entities/color-wheel.tsx:118](<../../../../../../features/entities/color-wheel.tsx#L118>)
- setHsv — external-or-dynamic-dispatch; [features/entities/color-wheel.tsx:119](<../../../../../../features/entities/color-wheel.tsx#L119>)
- onChange — external-or-dynamic-dispatch; [features/entities/color-wheel.tsx:120](<../../../../../../features/entities/color-wheel.tsx#L120>)
- next.toLowerCase — external-or-dynamic-dispatch; [features/entities/color-wheel.tsx:120](<../../../../../../features/entities/color-wheel.tsx#L120>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
