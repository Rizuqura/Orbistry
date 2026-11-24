# features/worldview/chip-colors.ts: symbols

[Atlas](<../../../../README.md>) / [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>) / [features/worldview/chip-colors.ts:1](<../../../../../../features/worldview/chip-colors.ts#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [features/worldview/chip-colors.ts](<chip-colors.ts.md#s-b614b58aecc89630>) (Module)
- [HsvColor](<chip-colors.ts.md#s-451166b93b5deb8a>) (TypeAliasDeclaration)
- [normalizeChipColor](<chip-colors.ts.md#s-2ae81619dacf15f7>) (FunctionDeclaration)
- [hsvToHex](<chip-colors.ts.md#s-590fd1ec97ea4e9f>) (FunctionDeclaration)
- [hexToHsv](<chip-colors.ts.md#s-fd4070793e1cb6e8>) (FunctionDeclaration)
- [shadeChipColor](<chip-colors.ts.md#s-1db43f8137d1199d>) (FunctionDeclaration)
- [chipTextColor](<chip-colors.ts.md#s-5c02ec06cbea0a49>) (FunctionDeclaration)

<a id="s-b614b58aecc89630"></a>

## features/worldview/chip-colors.ts

[features/worldview/chip-colors.ts:1](<../../../../../../features/worldview/chip-colors.ts#L1>) · Module · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/worldview/chip-colors.test.cjs:9](<../../../../../../features/worldview/chip-colors.test.cjs#L9>) — file-import-only; coverage not established.

<a id="s-451166b93b5deb8a"></a>

## HsvColor

[features/worldview/chip-colors.ts:1](<../../../../../../features/worldview/chip-colors.ts#L1>) · TypeAliasDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: HsvColor ([features/worldview/chip-colors.ts:1](<../../../../../../features/worldview/chip-colors.ts#L1>)).

Lexical owner: [features/worldview/chip-colors.ts](<chip-colors.ts.md#s-b614b58aecc89630>).

Contract evidence: typescript-declaration. [Full declaration index](<../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/worldview/chip-colors.test.cjs:9](<../../../../../../features/worldview/chip-colors.test.cjs#L9>) — file-import-only; coverage not established.

<a id="s-2ae81619dacf15f7"></a>

## normalizeChipColor

[features/worldview/chip-colors.ts:8](<../../../../../../features/worldview/chip-colors.ts#L8>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Normalizes a six-digit CSS hex color; invalid input throws without side effects.

Purpose evidence: jsdoc.

Exported as: normalizeChipColor ([features/worldview/chip-colors.ts:1](<../../../../../../features/worldview/chip-colors.ts#L1>)).

Lexical owner: [features/worldview/chip-colors.ts](<chip-colors.ts.md#s-b614b58aecc89630>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | string | annotation | required |

Returns: string (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [ChipDialog.saveChip](<../entities/chip-dialog.tsx.md#s-0d625644ee855d05>) — [features/entities/chip-dialog.tsx:71](<../../../../../../features/entities/chip-dialog.tsx#L71>)
- [&lt;anonymous@34:78&gt;](<chip-colors.test.cjs.md#s-323d0dc1e4d963dd>) — [features/worldview/chip-colors.test.cjs:35](<../../../../../../features/worldview/chip-colors.test.cjs#L35>)
- [&lt;anonymous@34:78&gt;.&lt;anonymous@37:19&gt;](<chip-colors.test.cjs.md#s-3c1c670010a57609>) — [features/worldview/chip-colors.test.cjs:37](<../../../../../../features/worldview/chip-colors.test.cjs#L37>)
- [hexToHsv](<chip-colors.ts.md#s-fd4070793e1cb6e8>) — [features/worldview/chip-colors.ts:40](<../../../../../../features/worldview/chip-colors.ts#L40>)
- [chipTextColor](<chip-colors.ts.md#s-5c02ec06cbea0a49>) — [features/worldview/chip-colors.ts:68](<../../../../../../features/worldview/chip-colors.ts#L68>)

Unresolved / external call sites: 4.

- input.trim — external-or-dynamic-dispatch; [features/worldview/chip-colors.ts:9](<../../../../../../features/worldview/chip-colors.ts#L9>)
- /^#&#91;0-9a-f&#93;{6}$/i.test — external-or-dynamic-dispatch; [features/worldview/chip-colors.ts:10](<../../../../../../features/worldview/chip-colors.ts#L10>)
- Error — external-or-dynamic-dispatch; [features/worldview/chip-colors.ts:11](<../../../../../../features/worldview/chip-colors.ts#L11>)
- color.toLowerCase — external-or-dynamic-dispatch; [features/worldview/chip-colors.ts:12](<../../../../../../features/worldview/chip-colors.ts#L12>)

**Related tests / acceptance harnesses:**

- [features/worldview/chip-colors.test.cjs:35](<../../../../../../features/worldview/chip-colors.test.cjs#L35>) — static-call-site; coverage not established.
- [features/worldview/chip-colors.test.cjs:37](<../../../../../../features/worldview/chip-colors.test.cjs#L37>) — static-call-site; coverage not established.
- [features/worldview/chip-colors.test.cjs:9](<../../../../../../features/worldview/chip-colors.test.cjs#L9>) — file-import-only; coverage not established.

<a id="s-590fd1ec97ea4e9f"></a>

## hsvToHex

[features/worldview/chip-colors.ts:16](<../../../../../../features/worldview/chip-colors.ts#L16>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Converts degrees and unit-range saturation/value into a clamped six-digit CSS color.

Purpose evidence: jsdoc.

Exported as: hsvToHex ([features/worldview/chip-colors.ts:1](<../../../../../../features/worldview/chip-colors.ts#L1>)).

Lexical owner: [features/worldview/chip-colors.ts](<chip-colors.ts.md#s-b614b58aecc89630>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| color | HsvColor | annotation | required |

Returns: string (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [ColorWheel.updateColor](<../entities/color-wheel.tsx.md#s-72dfda543b0ef935>) — [features/entities/color-wheel.tsx:25](<../../../../../../features/entities/color-wheel.tsx#L25>)
- [&lt;anonymous@13:82&gt;](<chip-colors.test.cjs.md#s-f6a4dfb1be367e65>) — [features/worldview/chip-colors.test.cjs:25](<../../../../../../features/worldview/chip-colors.test.cjs#L25>)
- [&lt;anonymous@13:82&gt;](<chip-colors.test.cjs.md#s-f6a4dfb1be367e65>) — [features/worldview/chip-colors.test.cjs:27](<../../../../../../features/worldview/chip-colors.test.cjs#L27>)
- [&lt;anonymous@13:82&gt;](<chip-colors.test.cjs.md#s-f6a4dfb1be367e65>) — [features/worldview/chip-colors.test.cjs:28](<../../../../../../features/worldview/chip-colors.test.cjs#L28>)
- [&lt;anonymous@13:82&gt;](<chip-colors.test.cjs.md#s-f6a4dfb1be367e65>) — [features/worldview/chip-colors.test.cjs:29](<../../../../../../features/worldview/chip-colors.test.cjs#L29>)
- [&lt;anonymous@13:82&gt;](<chip-colors.test.cjs.md#s-f6a4dfb1be367e65>) — [features/worldview/chip-colors.test.cjs:30](<../../../../../../features/worldview/chip-colors.test.cjs#L30>)
- [shadeChipColor](<chip-colors.ts.md#s-1db43f8137d1199d>) — [features/worldview/chip-colors.ts:63](<../../../../../../features/worldview/chip-colors.ts#L63>)

Unresolved / external call sites: 9.

- Math.max — external-or-dynamic-dispatch; [features/worldview/chip-colors.ts:18](<../../../../../../features/worldview/chip-colors.ts#L18>)
- Math.min — external-or-dynamic-dispatch; [features/worldview/chip-colors.ts:18](<../../../../../../features/worldview/chip-colors.ts#L18>)
- Math.max — external-or-dynamic-dispatch; [features/worldview/chip-colors.ts:19](<../../../../../../features/worldview/chip-colors.ts#L19>)
- Math.min — external-or-dynamic-dispatch; [features/worldview/chip-colors.ts:19](<../../../../../../features/worldview/chip-colors.ts#L19>)
- Math.abs — external-or-dynamic-dispatch; [features/worldview/chip-colors.ts:21](<../../../../../../features/worldview/chip-colors.ts#L21>)
- Math.floor — external-or-dynamic-dispatch; [features/worldview/chip-colors.ts:31](<../../../../../../features/worldview/chip-colors.ts#L31>)
- Math.round((channel + value - chroma) * 255) .toString(16) .padStart — external-or-dynamic-dispatch; [features/worldview/chip-colors.ts:32](<../../../../../../features/worldview/chip-colors.ts#L32>)
- Math.round((channel + value - chroma) * 255) .toString — external-or-dynamic-dispatch; [features/worldview/chip-colors.ts:32](<../../../../../../features/worldview/chip-colors.ts#L32>)
- 1 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [features/worldview/chip-colors.test.cjs:25](<../../../../../../features/worldview/chip-colors.test.cjs#L25>) — static-call-site; coverage not established.
- [features/worldview/chip-colors.test.cjs:27](<../../../../../../features/worldview/chip-colors.test.cjs#L27>) — static-call-site; coverage not established.
- [features/worldview/chip-colors.test.cjs:28](<../../../../../../features/worldview/chip-colors.test.cjs#L28>) — static-call-site; coverage not established.
- [features/worldview/chip-colors.test.cjs:29](<../../../../../../features/worldview/chip-colors.test.cjs#L29>) — static-call-site; coverage not established.
- [features/worldview/chip-colors.test.cjs:30](<../../../../../../features/worldview/chip-colors.test.cjs#L30>) — static-call-site; coverage not established.
- [features/worldview/chip-colors.test.cjs:9](<../../../../../../features/worldview/chip-colors.test.cjs#L9>) — file-import-only; coverage not established.

<a id="s-fd4070793e1cb6e8"></a>

## hexToHsv

[features/worldview/chip-colors.ts:39](<../../../../../../features/worldview/chip-colors.ts#L39>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Converts validated CSS hex into HSV for wheel positioning; invalid colors throw.

Purpose evidence: jsdoc.

Exported as: hexToHsv ([features/worldview/chip-colors.ts:1](<../../../../../../features/worldview/chip-colors.ts#L1>)).

Lexical owner: [features/worldview/chip-colors.ts](<chip-colors.ts.md#s-b614b58aecc89630>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | string | annotation | required |

Returns: HsvColor (annotation). Implementation present.

**Calls (statically resolved):**

- [normalizeChipColor](<chip-colors.ts.md#s-2ae81619dacf15f7>) — [features/worldview/chip-colors.ts:40](<../../../../../../features/worldview/chip-colors.ts#L40>)

**Called by (statically resolved):**

- [ColorWheel](<../entities/color-wheel.tsx.md#s-13a56543ac190d3b>) — [features/entities/color-wheel.tsx:19](<../../../../../../features/entities/color-wheel.tsx#L19>)
- [ColorWheel.changeHex](<../entities/color-wheel.tsx.md#s-faba2dca14f1d9ee>) — [features/entities/color-wheel.tsx:119](<../../../../../../features/entities/color-wheel.tsx#L119>)
- [&lt;anonymous@13:82&gt;](<chip-colors.test.cjs.md#s-f6a4dfb1be367e65>) — [features/worldview/chip-colors.test.cjs:25](<../../../../../../features/worldview/chip-colors.test.cjs#L25>)
- [shadeChipColor](<chip-colors.ts.md#s-1db43f8137d1199d>) — [features/worldview/chip-colors.ts:62](<../../../../../../features/worldview/chip-colors.ts#L62>)

Unresolved / external call sites: 8.

- parseInt — external-or-dynamic-dispatch; [features/worldview/chip-colors.ts:41](<../../../../../../features/worldview/chip-colors.ts#L41>)
- hex.slice — external-or-dynamic-dispatch; [features/worldview/chip-colors.ts:41](<../../../../../../features/worldview/chip-colors.ts#L41>)
- parseInt — external-or-dynamic-dispatch; [features/worldview/chip-colors.ts:42](<../../../../../../features/worldview/chip-colors.ts#L42>)
- hex.slice — external-or-dynamic-dispatch; [features/worldview/chip-colors.ts:42](<../../../../../../features/worldview/chip-colors.ts#L42>)
- parseInt — external-or-dynamic-dispatch; [features/worldview/chip-colors.ts:43](<../../../../../../features/worldview/chip-colors.ts#L43>)
- hex.slice — external-or-dynamic-dispatch; [features/worldview/chip-colors.ts:43](<../../../../../../features/worldview/chip-colors.ts#L43>)
- Math.max — external-or-dynamic-dispatch; [features/worldview/chip-colors.ts:44](<../../../../../../features/worldview/chip-colors.ts#L44>)
- Math.min — external-or-dynamic-dispatch; [features/worldview/chip-colors.ts:45](<../../../../../../features/worldview/chip-colors.ts#L45>)

**Related tests / acceptance harnesses:**

- [features/worldview/chip-colors.test.cjs:25](<../../../../../../features/worldview/chip-colors.test.cjs#L25>) — static-call-site; coverage not established.
- [features/worldview/chip-colors.test.cjs:9](<../../../../../../features/worldview/chip-colors.test.cjs#L9>) — file-import-only; coverage not established.

<a id="s-1db43f8137d1199d"></a>

## shadeChipColor

[features/worldview/chip-colors.ts:61](<../../../../../../features/worldview/chip-colors.ts#L61>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Darkens the chosen top color for a side face; rejects invalid CSS colors.

Purpose evidence: jsdoc.

Exported as: shadeChipColor ([features/worldview/chip-colors.ts:1](<../../../../../../features/worldview/chip-colors.ts#L1>)).

Lexical owner: [features/worldview/chip-colors.ts](<chip-colors.ts.md#s-b614b58aecc89630>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| color | string | annotation | required |
| amount | number | annotation | required |

Returns: string (annotation). Implementation present.

**Calls (statically resolved):**

- [hexToHsv](<chip-colors.ts.md#s-fd4070793e1cb6e8>) — [features/worldview/chip-colors.ts:62](<../../../../../../features/worldview/chip-colors.ts#L62>)
- [hsvToHex](<chip-colors.ts.md#s-590fd1ec97ea4e9f>) — [features/worldview/chip-colors.ts:63](<../../../../../../features/worldview/chip-colors.ts#L63>)

**Called by (statically resolved):**

- [drawFileBuildings](<building-renderer.ts.md#s-70841a890f106cba>) — [features/worldview/building-renderer.ts:132](<../../../../../../features/worldview/building-renderer.ts#L132>)
- [drawFileBuildings](<building-renderer.ts.md#s-70841a890f106cba>) — [features/worldview/building-renderer.ts:133](<../../../../../../features/worldview/building-renderer.ts#L133>)
- [&lt;anonymous@34:78&gt;](<chip-colors.test.cjs.md#s-323d0dc1e4d963dd>) — [features/worldview/chip-colors.test.cjs:38](<../../../../../../features/worldview/chip-colors.test.cjs#L38>)
- [&lt;anonymous@34:78&gt;](<chip-colors.test.cjs.md#s-323d0dc1e4d963dd>) — [features/worldview/chip-colors.test.cjs:39](<../../../../../../features/worldview/chip-colors.test.cjs#L39>)
- [drawWorldChips](<chip-renderer.ts.md#s-2b109a269a813bfa>) — [features/worldview/chip-renderer.ts:163](<../../../../../../features/worldview/chip-renderer.ts#L163>)
- [drawWorldChips](<chip-renderer.ts.md#s-2b109a269a813bfa>) — [features/worldview/chip-renderer.ts:173](<../../../../../../features/worldview/chip-renderer.ts#L173>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/worldview/chip-colors.test.cjs:38](<../../../../../../features/worldview/chip-colors.test.cjs#L38>) — static-call-site; coverage not established.
- [features/worldview/chip-colors.test.cjs:39](<../../../../../../features/worldview/chip-colors.test.cjs#L39>) — static-call-site; coverage not established.
- [features/worldview/chip-colors.test.cjs:9](<../../../../../../features/worldview/chip-colors.test.cjs#L9>) — file-import-only; coverage not established.

<a id="s-5c02ec06cbea0a49"></a>

## chipTextColor

[features/worldview/chip-colors.ts:67](<../../../../../../features/worldview/chip-colors.ts#L67>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Chooses dark or light icon/name ink using relative luminance for readable custom tiles.

Purpose evidence: jsdoc.

Exported as: chipTextColor ([features/worldview/chip-colors.ts:1](<../../../../../../features/worldview/chip-colors.ts#L1>)).

Lexical owner: [features/worldview/chip-colors.ts](<chip-colors.ts.md#s-b614b58aecc89630>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| color | string | annotation | required |

Returns: string (annotation). Implementation present.

**Calls (statically resolved):**

- [normalizeChipColor](<chip-colors.ts.md#s-2ae81619dacf15f7>) — [features/worldview/chip-colors.ts:68](<../../../../../../features/worldview/chip-colors.ts#L68>)

**Called by (statically resolved):**

- [EntityActions](<../entities/entity-actions.tsx.md#s-37edcde199a52244>) — [features/entities/entity-actions.tsx:50](<../../../../../../features/entities/entity-actions.tsx#L50>)
- [KnowledgeWorkspace](<../knowledge/knowledge-workspace.tsx.md#s-de61e2373aa42255>) — [features/knowledge/knowledge-workspace.tsx:290](<../../../../../../features/knowledge/knowledge-workspace.tsx#L290>)
- [drawFileBuildings](<building-renderer.ts.md#s-70841a890f106cba>) — [features/worldview/building-renderer.ts:138](<../../../../../../features/worldview/building-renderer.ts#L138>)
- [&lt;anonymous@34:78&gt;](<chip-colors.test.cjs.md#s-323d0dc1e4d963dd>) — [features/worldview/chip-colors.test.cjs:40](<../../../../../../features/worldview/chip-colors.test.cjs#L40>)
- [&lt;anonymous@34:78&gt;](<chip-colors.test.cjs.md#s-323d0dc1e4d963dd>) — [features/worldview/chip-colors.test.cjs:41](<../../../../../../features/worldview/chip-colors.test.cjs#L41>)
- [&lt;anonymous@34:78&gt;](<chip-colors.test.cjs.md#s-323d0dc1e4d963dd>) — [features/worldview/chip-colors.test.cjs:42](<../../../../../../features/worldview/chip-colors.test.cjs#L42>)
- [&lt;anonymous@34:78&gt;](<chip-colors.test.cjs.md#s-323d0dc1e4d963dd>) — [features/worldview/chip-colors.test.cjs:43](<../../../../../../features/worldview/chip-colors.test.cjs#L43>)
- [WorldView.&lt;anonymous@1148:13&gt;](<worldview.tsx.md#s-a8fb283c285eb142>) — [features/worldview/worldview.tsx:1150](<../../../../../../features/worldview/worldview.tsx#L1150>)

Unresolved / external call sites: 2.

- parseInt — external-or-dynamic-dispatch; [features/worldview/chip-colors.ts:72](<../../../../../../features/worldview/chip-colors.ts#L72>)
- hex.slice — external-or-dynamic-dispatch; [features/worldview/chip-colors.ts:72](<../../../../../../features/worldview/chip-colors.ts#L72>)

**Related tests / acceptance harnesses:**

- [features/worldview/chip-colors.test.cjs:40](<../../../../../../features/worldview/chip-colors.test.cjs#L40>) — static-call-site; coverage not established.
- [features/worldview/chip-colors.test.cjs:41](<../../../../../../features/worldview/chip-colors.test.cjs#L41>) — static-call-site; coverage not established.
- [features/worldview/chip-colors.test.cjs:42](<../../../../../../features/worldview/chip-colors.test.cjs#L42>) — static-call-site; coverage not established.
- [features/worldview/chip-colors.test.cjs:43](<../../../../../../features/worldview/chip-colors.test.cjs#L43>) — static-call-site; coverage not established.
- [features/worldview/chip-colors.test.cjs:9](<../../../../../../features/worldview/chip-colors.test.cjs#L9>) — file-import-only; coverage not established.
