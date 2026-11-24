# features/worldview/chips.ts: symbols

[Atlas](<../../../../README.md>) / [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>) / [features/worldview/chips.ts:1](<../../../../../../features/worldview/chips.ts#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [features/worldview/chips.ts](<chips.ts.md#s-c1ef559792ae6ac3>) (Module)
- [CHIP_HALF_SIZE](<chips.ts.md#s-c3b21950bf8691fd>) (VariableDeclaration)
- [CHIP_THICKNESS](<chips.ts.md#s-3b3982b1b41e667f>) (VariableDeclaration)
- [DEFAULT_CHIP_COLOR](<chips.ts.md#s-31ff695a4da9a779>) (VariableDeclaration)
- [KnowledgeMenu](<chips.ts.md#s-931696b14db0973f>) (TypeAliasDeclaration)
- [DEFAULT_KNOWLEDGE_MENUS](<chips.ts.md#s-53d017d4c33fa989>) (VariableDeclaration)
- [WorldViewChip](<chips.ts.md#s-f91cd7713285ce2d>) (TypeAliasDeclaration)
- [ChipDraft](<chips.ts.md#s-3ca855fdb9262384>) (TypeAliasDeclaration)
- [suggestChipTags](<chips.ts.md#s-a72caab4e76458bd>) (FunctionDeclaration)
- [suggestChipTags.scoreWords](<chips.ts.md#s-bac2bbc950832fba>) (FunctionDeclaration)
- [suggestChipTags.&lt;anonymous@78:81&gt;](<chips.ts.md#s-e76ff7bfadc948d4>) (ArrowFunction)
- [suggestChipTags.&lt;anonymous@84:81&gt;](<chips.ts.md#s-749ee667b518738c>) (ArrowFunction)
- [parseChipTags](<chips.ts.md#s-34509229cdfd5014>) (FunctionDeclaration)
- [snapChipPosition](<chips.ts.md#s-e2d9756e0b60dc83>) (FunctionDeclaration)
- [chipPositionsOverlap](<chips.ts.md#s-905dd4a93c69d2a1>) (FunctionDeclaration)
- [findAvailableChipPosition](<chips.ts.md#s-98577f9be7d02bb8>) (FunctionDeclaration)

<a id="s-c1ef559792ae6ac3"></a>

## features/worldview/chips.ts

[features/worldview/chips.ts:1](<../../../../../../features/worldview/chips.ts#L1>) · Module · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- Set — external-or-dynamic-dispatch; [features/worldview/chips.ts:34](<../../../../../../features/worldview/chips.ts#L34>)
- "a an and are as at be by for from in is it of on or the to with file files document documents".split — external-or-dynamic-dispatch; [features/worldview/chips.ts:35](<../../../../../../features/worldview/chips.ts#L35>)

**Related tests / acceptance harnesses:**

- [features/worldview/chip-labels.test.cjs:20](<../../../../../../features/worldview/chip-labels.test.cjs#L20>) — file-import-only; coverage not established.
- [features/worldview/chips.test.cjs:9](<../../../../../../features/worldview/chips.test.cjs#L9>) — file-import-only; coverage not established.

<a id="s-c3b21950bf8691fd"></a>

## CHIP_HALF_SIZE

[features/worldview/chips.ts:5](<../../../../../../features/worldview/chips.ts#L5>) · VariableDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

A chip covers two world units on each axis, with its center anchored to an integer cell.

Purpose evidence: jsdoc.

Exported as: CHIP_HALF_SIZE ([features/worldview/chips.ts:1](<../../../../../../features/worldview/chips.ts#L1>)).

Lexical owner: [features/worldview/chips.ts](<chips.ts.md#s-c1ef559792ae6ac3>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/worldview/chip-labels.test.cjs:20](<../../../../../../features/worldview/chip-labels.test.cjs#L20>) — file-import-only; coverage not established.
- [features/worldview/chips.test.cjs:9](<../../../../../../features/worldview/chips.test.cjs#L9>) — file-import-only; coverage not established.

<a id="s-3b3982b1b41e667f"></a>

## CHIP_THICKNESS

[features/worldview/chips.ts:6](<../../../../../../features/worldview/chips.ts#L6>) · VariableDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: CHIP_THICKNESS ([features/worldview/chips.ts:1](<../../../../../../features/worldview/chips.ts#L1>)).

Lexical owner: [features/worldview/chips.ts](<chips.ts.md#s-c1ef559792ae6ac3>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/worldview/chip-labels.test.cjs:20](<../../../../../../features/worldview/chip-labels.test.cjs#L20>) — file-import-only; coverage not established.
- [features/worldview/chips.test.cjs:9](<../../../../../../features/worldview/chips.test.cjs#L9>) — file-import-only; coverage not established.

<a id="s-31ff695a4da9a779"></a>

## DEFAULT_CHIP_COLOR

[features/worldview/chips.ts:7](<../../../../../../features/worldview/chips.ts#L7>) · VariableDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: DEFAULT_CHIP_COLOR ([features/worldview/chips.ts:1](<../../../../../../features/worldview/chips.ts#L1>)).

Lexical owner: [features/worldview/chips.ts](<chips.ts.md#s-c1ef559792ae6ac3>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/worldview/chip-labels.test.cjs:20](<../../../../../../features/worldview/chip-labels.test.cjs#L20>) — file-import-only; coverage not established.
- [features/worldview/chips.test.cjs:9](<../../../../../../features/worldview/chips.test.cjs#L9>) — file-import-only; coverage not established.

<a id="s-931696b14db0973f"></a>

## KnowledgeMenu

[features/worldview/chips.ts:8](<../../../../../../features/worldview/chips.ts#L8>) · TypeAliasDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: KnowledgeMenu ([features/worldview/chips.ts:1](<../../../../../../features/worldview/chips.ts#L1>)).

Lexical owner: [features/worldview/chips.ts](<chips.ts.md#s-c1ef559792ae6ac3>).

Contract evidence: typescript-declaration. [Full declaration index](<../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/worldview/chip-labels.test.cjs:20](<../../../../../../features/worldview/chip-labels.test.cjs#L20>) — file-import-only; coverage not established.
- [features/worldview/chips.test.cjs:9](<../../../../../../features/worldview/chips.test.cjs#L9>) — file-import-only; coverage not established.

<a id="s-53d017d4c33fa989"></a>

## DEFAULT_KNOWLEDGE_MENUS

[features/worldview/chips.ts:9](<../../../../../../features/worldview/chips.ts#L9>) · VariableDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: DEFAULT_KNOWLEDGE_MENUS ([features/worldview/chips.ts:1](<../../../../../../features/worldview/chips.ts#L1>)).

Lexical owner: [features/worldview/chips.ts](<chips.ts.md#s-c1ef559792ae6ac3>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/worldview/chip-labels.test.cjs:20](<../../../../../../features/worldview/chip-labels.test.cjs#L20>) — file-import-only; coverage not established.
- [features/worldview/chips.test.cjs:9](<../../../../../../features/worldview/chips.test.cjs#L9>) — file-import-only; coverage not established.

<a id="s-f91cd7713285ce2d"></a>

## WorldViewChip

[features/worldview/chips.ts:12](<../../../../../../features/worldview/chips.ts#L12>) · TypeAliasDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: WorldViewChip ([features/worldview/chips.ts:1](<../../../../../../features/worldview/chips.ts#L1>)).

Lexical owner: [features/worldview/chips.ts](<chips.ts.md#s-c1ef559792ae6ac3>).

Contract evidence: typescript-declaration. [Full declaration index](<../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/worldview/chip-labels.test.cjs:20](<../../../../../../features/worldview/chip-labels.test.cjs#L20>) — file-import-only; coverage not established.
- [features/worldview/chips.test.cjs:9](<../../../../../../features/worldview/chips.test.cjs#L9>) — file-import-only; coverage not established.

<a id="s-3ca855fdb9262384"></a>

## ChipDraft

[features/worldview/chips.ts:28](<../../../../../../features/worldview/chips.ts#L28>) · TypeAliasDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: ChipDraft ([features/worldview/chips.ts:1](<../../../../../../features/worldview/chips.ts#L1>)).

Lexical owner: [features/worldview/chips.ts](<chips.ts.md#s-c1ef559792ae6ac3>).

Contract evidence: typescript-declaration. [Full declaration index](<../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/worldview/chip-labels.test.cjs:20](<../../../../../../features/worldview/chip-labels.test.cjs#L20>) — file-import-only; coverage not established.
- [features/worldview/chips.test.cjs:9](<../../../../../../features/worldview/chips.test.cjs#L9>) — file-import-only; coverage not established.

<a id="s-a72caab4e76458bd"></a>

## suggestChipTags

[features/worldview/chips.ts:45](<../../../../../../features/worldview/chips.ts#L45>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Suggests up to twelve local metadata tags, favoring name/category terms and repeated filename terms. Existing tags retain their spelling/order. Suggestions fit the editor's 500-character and 100-tag limits. Accepts filenames only and performs no file reads, persistence or remote requests.

Purpose evidence: jsdoc.

Exported as: suggestChipTags ([features/worldview/chips.ts:1](<../../../../../../features/worldview/chips.ts#L1>)).

Lexical owner: [features/worldview/chips.ts](<chips.ts.md#s-c1ef559792ae6ac3>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| name | string | annotation | required |
| category | string | annotation | required |
| filenames | readonly string&#91;&#93; | annotation | required |
| existing | readonly string&#91;&#93; | annotation | required |

Returns: string&#91;&#93; (annotation). Implementation present.

**Calls (statically resolved):**

- [suggestChipTags.scoreWords](<chips.ts.md#s-bac2bbc950832fba>) — [features/worldview/chips.ts:71](<../../../../../../features/worldview/chips.ts#L71>)
- [suggestChipTags.scoreWords](<chips.ts.md#s-bac2bbc950832fba>) — [features/worldview/chips.ts:72](<../../../../../../features/worldview/chips.ts#L72>)
- [suggestChipTags.scoreWords](<chips.ts.md#s-bac2bbc950832fba>) — [features/worldview/chips.ts:74](<../../../../../../features/worldview/chips.ts#L74>)

**Called by (statically resolved):**

- [ChipDialog.generateTags](<../entities/chip-dialog.tsx.md#s-b16fbb59179fd07b>) — [features/entities/chip-dialog.tsx:105](<../../../../../../features/entities/chip-dialog.tsx#L105>)
- [&lt;anonymous@12:99&gt;](<chips.test.cjs.md#s-ba14d9a84de47ab8>) — [features/worldview/chips.test.cjs:14](<../../../../../../features/worldview/chips.test.cjs#L14>)
- [&lt;anonymous@12:99&gt;](<chips.test.cjs.md#s-ba14d9a84de47ab8>) — [features/worldview/chips.test.cjs:30](<../../../../../../features/worldview/chips.test.cjs#L30>)
- [&lt;anonymous@12:99&gt;](<chips.test.cjs.md#s-ba14d9a84de47ab8>) — [features/worldview/chips.test.cjs:31](<../../../../../../features/worldview/chips.test.cjs#L31>)
- [&lt;anonymous@12:99&gt;](<chips.test.cjs.md#s-ba14d9a84de47ab8>) — [features/worldview/chips.test.cjs:36](<../../../../../../features/worldview/chips.test.cjs#L36>)
- [&lt;anonymous@12:99&gt;](<chips.test.cjs.md#s-ba14d9a84de47ab8>) — [features/worldview/chips.test.cjs:37](<../../../../../../features/worldview/chips.test.cjs#L37>)
- [&lt;anonymous@12:99&gt;](<chips.test.cjs.md#s-ba14d9a84de47ab8>) — [features/worldview/chips.test.cjs:45](<../../../../../../features/worldview/chips.test.cjs#L45>)

Unresolved / external call sites: 9.

- Map — external-or-dynamic-dispatch; [features/worldview/chips.ts:51](<../../../../../../features/worldview/chips.ts#L51>)
- filename.replace — external-or-dynamic-dispatch; [features/worldview/chips.ts:74](<../../../../../../features/worldview/chips.ts#L74>)
- Set — external-or-dynamic-dispatch; [features/worldview/chips.ts:76](<../../../../../../features/worldview/chips.ts#L76>)
- existing.map — external-or-dynamic-dispatch; [features/worldview/chips.ts:77](<../../../../../../features/worldview/chips.ts#L77>)
- &#91;...scores&#93;.sort — external-or-dynamic-dispatch; [features/worldview/chips.ts:83](<../../../../../../features/worldview/chips.ts#L83>)
- seen.has — external-or-dynamic-dispatch; [features/worldview/chips.ts:92](<../../../../../../features/worldview/chips.ts#L92>)
- &#91;...tags, word&#93;.join — external-or-dynamic-dispatch; [features/worldview/chips.ts:92](<../../../../../../features/worldview/chips.ts#L92>)
- tags.push — external-or-dynamic-dispatch; [features/worldview/chips.ts:93](<../../../../../../features/worldview/chips.ts#L93>)
- 1 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [features/worldview/chips.test.cjs:14](<../../../../../../features/worldview/chips.test.cjs#L14>) — static-call-site; coverage not established.
- [features/worldview/chips.test.cjs:30](<../../../../../../features/worldview/chips.test.cjs#L30>) — static-call-site; coverage not established.
- [features/worldview/chips.test.cjs:31](<../../../../../../features/worldview/chips.test.cjs#L31>) — static-call-site; coverage not established.
- [features/worldview/chips.test.cjs:36](<../../../../../../features/worldview/chips.test.cjs#L36>) — static-call-site; coverage not established.
- [features/worldview/chips.test.cjs:37](<../../../../../../features/worldview/chips.test.cjs#L37>) — static-call-site; coverage not established.
- [features/worldview/chips.test.cjs:45](<../../../../../../features/worldview/chips.test.cjs#L45>) — static-call-site; coverage not established.
- [features/worldview/chip-labels.test.cjs:20](<../../../../../../features/worldview/chip-labels.test.cjs#L20>) — file-import-only; coverage not established.
- [features/worldview/chips.test.cjs:9](<../../../../../../features/worldview/chips.test.cjs#L9>) — file-import-only; coverage not established.

<a id="s-bac2bbc950832fba"></a>

## suggestChipTags.scoreWords

[features/worldview/chips.ts:53](<../../../../../../features/worldview/chips.ts#L53>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Weighs normalized words while retaining multilingual letters and excluding generic words and bare numbers.

Purpose evidence: jsdoc.

Lexical owner: [suggestChipTags](<chips.ts.md#s-a72caab4e76458bd>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| text | string | annotation | required |
| weight | number | annotation | required |

Returns: void (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [suggestChipTags](<chips.ts.md#s-a72caab4e76458bd>) — [features/worldview/chips.ts:71](<../../../../../../features/worldview/chips.ts#L71>)
- [suggestChipTags](<chips.ts.md#s-a72caab4e76458bd>) — [features/worldview/chips.ts:72](<../../../../../../features/worldview/chips.ts#L72>)
- [suggestChipTags](<chips.ts.md#s-a72caab4e76458bd>) — [features/worldview/chips.ts:74](<../../../../../../features/worldview/chips.ts#L74>)

Unresolved / external call sites: 8.

- text .replace(/(&#91;a-z&#93;)(&#91;A-Z&#93;)/g, "$1 $2") .normalize("NFKC") .toLocaleLowerCase("en") .match — external-or-dynamic-dispatch; [features/worldview/chips.ts:55](<../../../../../../features/worldview/chips.ts#L55>)
- text .replace(/(&#91;a-z&#93;)(&#91;A-Z&#93;)/g, "$1 $2") .normalize("NFKC") .toLocaleLowerCase — external-or-dynamic-dispatch; [features/worldview/chips.ts:55](<../../../../../../features/worldview/chips.ts#L55>)
- text .replace(/(&#91;a-z&#93;)(&#91;A-Z&#93;)/g, "$1 $2") .normalize — external-or-dynamic-dispatch; [features/worldview/chips.ts:55](<../../../../../../features/worldview/chips.ts#L55>)
- text .replace — external-or-dynamic-dispatch; [features/worldview/chips.ts:55](<../../../../../../features/worldview/chips.ts#L55>)
- TAG_STOP_WORDS.has — external-or-dynamic-dispatch; [features/worldview/chips.ts:64](<../../../../../../features/worldview/chips.ts#L64>)
- /^\\d+$/.test — external-or-dynamic-dispatch; [features/worldview/chips.ts:65](<../../../../../../features/worldview/chips.ts#L65>)
- scores.set — external-or-dynamic-dispatch; [features/worldview/chips.ts:68](<../../../../../../features/worldview/chips.ts#L68>)
- scores.get — external-or-dynamic-dispatch; [features/worldview/chips.ts:68](<../../../../../../features/worldview/chips.ts#L68>)

**Related tests / acceptance harnesses:**

- [features/worldview/chip-labels.test.cjs:20](<../../../../../../features/worldview/chip-labels.test.cjs#L20>) — file-import-only; coverage not established.
- [features/worldview/chips.test.cjs:9](<../../../../../../features/worldview/chips.test.cjs#L9>) — file-import-only; coverage not established.

<a id="s-e76ff7bfadc948d4"></a>

## suggestChipTags.&lt;anonymous@78:81&gt;

[features/worldview/chips.ts:78](<../../../../../../features/worldview/chips.ts#L78>) · ArrowFunction · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Recognizes equivalent manual tags without changing their spelling.

Purpose evidence: jsdoc.

Lexical owner: [suggestChipTags](<chips.ts.md#s-a72caab4e76458bd>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| tag | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- tag.normalize("NFKC").toLocaleLowerCase — external-or-dynamic-dispatch; [features/worldview/chips.ts:80](<../../../../../../features/worldview/chips.ts#L80>)
- tag.normalize — external-or-dynamic-dispatch; [features/worldview/chips.ts:80](<../../../../../../features/worldview/chips.ts#L80>)

**Related tests / acceptance harnesses:**

- [features/worldview/chip-labels.test.cjs:20](<../../../../../../features/worldview/chip-labels.test.cjs#L20>) — file-import-only; coverage not established.
- [features/worldview/chips.test.cjs:9](<../../../../../../features/worldview/chips.test.cjs#L9>) — file-import-only; coverage not established.

<a id="s-749ee667b518738c"></a>

## suggestChipTags.&lt;anonymous@84:81&gt;

[features/worldview/chips.ts:84](<../../../../../../features/worldview/chips.ts#L84>) · ArrowFunction · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Prioritizes metadata relevance, preserving encounter order for ties.

Purpose evidence: jsdoc.

Lexical owner: [suggestChipTags](<chips.ts.md#s-a72caab4e76458bd>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| a | any | compiler-inferred | required |
| b | any | compiler-inferred | required |

Returns: number (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/worldview/chip-labels.test.cjs:20](<../../../../../../features/worldview/chip-labels.test.cjs#L20>) — file-import-only; coverage not established.
- [features/worldview/chips.test.cjs:9](<../../../../../../features/worldview/chips.test.cjs#L9>) — file-import-only; coverage not established.

<a id="s-34509229cdfd5014"></a>

## parseChipTags

[features/worldview/chips.ts:101](<../../../../../../features/worldview/chips.ts#L101>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Trims and deduplicates comma-separated tags without performing storage or indexing.

Purpose evidence: jsdoc.

Exported as: parseChipTags ([features/worldview/chips.ts:1](<../../../../../../features/worldview/chips.ts#L1>)).

Lexical owner: [features/worldview/chips.ts](<chips.ts.md#s-c1ef559792ae6ac3>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | string | annotation | required |

Returns: string&#91;&#93; (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [ChipDialog.saveChip](<../entities/chip-dialog.tsx.md#s-0d625644ee855d05>) — [features/entities/chip-dialog.tsx:80](<../../../../../../features/entities/chip-dialog.tsx#L80>)
- [ChipDialog.generateTags](<../entities/chip-dialog.tsx.md#s-b16fbb59179fd07b>) — [features/entities/chip-dialog.tsx:104](<../../../../../../features/entities/chip-dialog.tsx#L104>)
- [&lt;anonymous@59:83&gt;](<chips.test.cjs.md#s-698be325b9996ad8>) — [features/worldview/chips.test.cjs:63](<../../../../../../features/worldview/chips.test.cjs#L63>)
- [&lt;anonymous@59:83&gt;](<chips.test.cjs.md#s-698be325b9996ad8>) — [features/worldview/chips.test.cjs:66](<../../../../../../features/worldview/chips.test.cjs#L66>)

Unresolved / external call sites: 4.

- Set — external-or-dynamic-dispatch; [features/worldview/chips.ts:102](<../../../../../../features/worldview/chips.ts#L102>)
- input.split — external-or-dynamic-dispatch; [features/worldview/chips.ts:103](<../../../../../../features/worldview/chips.ts#L103>)
- value.trim — external-or-dynamic-dispatch; [features/worldview/chips.ts:104](<../../../../../../features/worldview/chips.ts#L104>)
- tags.add — external-or-dynamic-dispatch; [features/worldview/chips.ts:105](<../../../../../../features/worldview/chips.ts#L105>)

**Related tests / acceptance harnesses:**

- [features/worldview/chips.test.cjs:63](<../../../../../../features/worldview/chips.test.cjs#L63>) — static-call-site; coverage not established.
- [features/worldview/chips.test.cjs:66](<../../../../../../features/worldview/chips.test.cjs#L66>) — static-call-site; coverage not established.
- [features/worldview/chip-labels.test.cjs:20](<../../../../../../features/worldview/chip-labels.test.cjs#L20>) — file-import-only; coverage not established.
- [features/worldview/chips.test.cjs:9](<../../../../../../features/worldview/chips.test.cjs#L9>) — file-import-only; coverage not established.

<a id="s-e2d9756e0b60dc83"></a>

## snapChipPosition

[features/worldview/chips.ts:111](<../../../../../../features/worldview/chips.ts#L111>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Returns the nearest integer world anchor; all platform corners then lie on grid vertices.

Purpose evidence: jsdoc.

Exported as: snapChipPosition ([features/worldview/chips.ts:1](<../../../../../../features/worldview/chips.ts#L1>)).

Lexical owner: [features/worldview/chips.ts](<chips.ts.md#s-c1ef559792ae6ac3>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| position | Point | annotation | required |

Returns: Point (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@59:83&gt;](<chips.test.cjs.md#s-698be325b9996ad8>) — [features/worldview/chips.test.cjs:60](<../../../../../../features/worldview/chips.test.cjs#L60>)
- [&lt;anonymous@59:83&gt;](<chips.test.cjs.md#s-698be325b9996ad8>) — [features/worldview/chips.test.cjs:61](<../../../../../../features/worldview/chips.test.cjs#L61>)
- [findAvailableChipPosition](<chips.ts.md#s-98577f9be7d02bb8>) — [features/worldview/chips.ts:133](<../../../../../../features/worldview/chips.ts#L133>)

Unresolved / external call sites: 2.

- Math.round — external-or-dynamic-dispatch; [features/worldview/chips.ts:112](<../../../../../../features/worldview/chips.ts#L112>)
- Math.round — external-or-dynamic-dispatch; [features/worldview/chips.ts:112](<../../../../../../features/worldview/chips.ts#L112>)

**Related tests / acceptance harnesses:**

- [features/worldview/chips.test.cjs:60](<../../../../../../features/worldview/chips.test.cjs#L60>) — static-call-site; coverage not established.
- [features/worldview/chips.test.cjs:61](<../../../../../../features/worldview/chips.test.cjs#L61>) — static-call-site; coverage not established.
- [features/worldview/chip-labels.test.cjs:20](<../../../../../../features/worldview/chip-labels.test.cjs#L20>) — file-import-only; coverage not established.
- [features/worldview/chips.test.cjs:9](<../../../../../../features/worldview/chips.test.cjs#L9>) — file-import-only; coverage not established.

<a id="s-905dd4a93c69d2a1"></a>

## chipPositionsOverlap

[features/worldview/chips.ts:116](<../../../../../../features/worldview/chips.ts#L116>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Tests equal-sized world footprints, allowing shared borders but preventing overlap.

Purpose evidence: jsdoc.

Exported as: chipPositionsOverlap ([features/worldview/chips.ts:1](<../../../../../../features/worldview/chips.ts#L1>)).

Lexical owner: [features/worldview/chips.ts](<chips.ts.md#s-c1ef559792ae6ac3>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| first | Point | annotation | required |
| second | Point | annotation | required |

Returns: boolean (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@70:91&gt;](<chips.test.cjs.md#s-206b52301170fbff>) — [features/worldview/chips.test.cjs:84](<../../../../../../features/worldview/chips.test.cjs#L84>)
- [&lt;anonymous@70:91&gt;](<chips.test.cjs.md#s-206b52301170fbff>) — [features/worldview/chips.test.cjs:88](<../../../../../../features/worldview/chips.test.cjs#L88>)
- [&lt;anonymous@70:91&gt;](<chips.test.cjs.md#s-206b52301170fbff>) — [features/worldview/chips.test.cjs:89](<../../../../../../features/worldview/chips.test.cjs#L89>)
- [&lt;anonymous@93:68&gt;](<chips.test.cjs.md#s-e60f5b0cd3681703>) — [features/worldview/chips.test.cjs:107](<../../../../../../features/worldview/chips.test.cjs#L107>)
- [findAvailableChipPosition](<chips.ts.md#s-98577f9be7d02bb8>) — [features/worldview/chips.ts:145](<../../../../../../features/worldview/chips.ts#L145>)

Unresolved / external call sites: 2.

- Math.abs — external-or-dynamic-dispatch; [features/worldview/chips.ts:118](<../../../../../../features/worldview/chips.ts#L118>)
- Math.abs — external-or-dynamic-dispatch; [features/worldview/chips.ts:119](<../../../../../../features/worldview/chips.ts#L119>)

**Related tests / acceptance harnesses:**

- [features/worldview/chips.test.cjs:84](<../../../../../../features/worldview/chips.test.cjs#L84>) — static-call-site; coverage not established.
- [features/worldview/chips.test.cjs:88](<../../../../../../features/worldview/chips.test.cjs#L88>) — static-call-site; coverage not established.
- [features/worldview/chips.test.cjs:89](<../../../../../../features/worldview/chips.test.cjs#L89>) — static-call-site; coverage not established.
- [features/worldview/chips.test.cjs:107](<../../../../../../features/worldview/chips.test.cjs#L107>) — static-call-site; coverage not established.
- [features/worldview/chip-labels.test.cjs:20](<../../../../../../features/worldview/chip-labels.test.cjs#L20>) — file-import-only; coverage not established.
- [features/worldview/chips.test.cjs:9](<../../../../../../features/worldview/chips.test.cjs#L9>) — file-import-only; coverage not established.

<a id="s-98577f9be7d02bb8"></a>

## findAvailableChipPosition

[features/worldview/chips.ts:128](<../../../../../../features/worldview/chips.ts#L128>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Finds a free snapped anchor near target, ignoring the chip being moved if supplied. Searches finite expanding rings; 2n + 2 guarantees space for n equal-size platforms. Returns world units without mutating chips or performing persistence.

Purpose evidence: jsdoc.

Exported as: findAvailableChipPosition ([features/worldview/chips.ts:1](<../../../../../../features/worldview/chips.ts#L1>)).

Lexical owner: [features/worldview/chips.ts](<chips.ts.md#s-c1ef559792ae6ac3>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| target | Point | annotation | required |
| chips | readonly WorldViewChip&#91;&#93; | annotation | required |
| excludeId | string | annotation | optional |

Returns: Point (annotation). Implementation present.

**Calls (statically resolved):**

- [snapChipPosition](<chips.ts.md#s-e2d9756e0b60dc83>) — [features/worldview/chips.ts:133](<../../../../../../features/worldview/chips.ts#L133>)
- [chipPositionsOverlap](<chips.ts.md#s-905dd4a93c69d2a1>) — [features/worldview/chips.ts:145](<../../../../../../features/worldview/chips.ts#L145>)

**Called by (statically resolved):**

- [&lt;anonymous@70:91&gt;](<chips.test.cjs.md#s-206b52301170fbff>) — [features/worldview/chips.test.cjs:77](<../../../../../../features/worldview/chips.test.cjs#L77>)
- [&lt;anonymous@93:68&gt;](<chips.test.cjs.md#s-e60f5b0cd3681703>) — [features/worldview/chips.test.cjs:99](<../../../../../../features/worldview/chips.test.cjs#L99>)
- [&lt;anonymous@93:68&gt;](<chips.test.cjs.md#s-e60f5b0cd3681703>) — [features/worldview/chips.test.cjs:102](<../../../../../../features/worldview/chips.test.cjs#L102>)
- [&lt;anonymous@184:96&gt;](<chips.test.cjs.md#s-3c93037ba54e5f5b>) — [features/worldview/chips.test.cjs:208](<../../../../../../features/worldview/chips.test.cjs#L208>)
- [WorldView.connectWorldCanvas.stopDrag](<worldview.tsx.md#s-416b42ba7224fd63>) — [features/worldview/worldview.tsx:678](<../../../../../../features/worldview/worldview.tsx#L678>)
- [WorldView.connectWorldCanvas.createChip](<worldview.tsx.md#s-5eca98fe9e1f676c>) — [features/worldview/worldview.tsx:756](<../../../../../../features/worldview/worldview.tsx#L756>)
- [WorldView.connectWorldCanvas.nudgeChip](<worldview.tsx.md#s-71368d37124fa960>) — [features/worldview/worldview.tsx:777](<../../../../../../features/worldview/worldview.tsx#L777>)

Unresolved / external call sites: 4.

- Math.max — external-or-dynamic-dispatch; [features/worldview/chips.ts:139](<../../../../../../features/worldview/chips.ts#L139>)
- Math.abs — external-or-dynamic-dispatch; [features/worldview/chips.ts:139](<../../../../../../features/worldview/chips.ts#L139>)
- Math.abs — external-or-dynamic-dispatch; [features/worldview/chips.ts:139](<../../../../../../features/worldview/chips.ts#L139>)
- Error — external-or-dynamic-dispatch; [features/worldview/chips.ts:163](<../../../../../../features/worldview/chips.ts#L163>)

**Related tests / acceptance harnesses:**

- [features/worldview/chips.test.cjs:77](<../../../../../../features/worldview/chips.test.cjs#L77>) — static-call-site; coverage not established.
- [features/worldview/chips.test.cjs:99](<../../../../../../features/worldview/chips.test.cjs#L99>) — static-call-site; coverage not established.
- [features/worldview/chips.test.cjs:102](<../../../../../../features/worldview/chips.test.cjs#L102>) — static-call-site; coverage not established.
- [features/worldview/chips.test.cjs:208](<../../../../../../features/worldview/chips.test.cjs#L208>) — static-call-site; coverage not established.
- [features/worldview/chip-labels.test.cjs:20](<../../../../../../features/worldview/chip-labels.test.cjs#L20>) — file-import-only; coverage not established.
- [features/worldview/chips.test.cjs:9](<../../../../../../features/worldview/chips.test.cjs#L9>) — file-import-only; coverage not established.
