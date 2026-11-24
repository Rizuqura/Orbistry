# scripts/acceptance/worldview-phase04-check.cjs: symbols

[Atlas](<../../../../README.md>) / [Development and acceptance tooling](<../../../../modules/tooling.md>) / [scripts/acceptance/worldview-phase04-check.cjs:1](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/acceptance/worldview-phase04-check.cjs](<worldview-phase04-check.cjs.md#s-b2715adb48392f65>) (Module)
- [waitSaved](<worldview-phase04-check.cjs.md#s-1b873beff8c4232d>) (FunctionDeclaration)
- [waitSaved.&lt;anonymous@5:30&gt;](<worldview-phase04-check.cjs.md#s-cf2ac87ed44a7166>) (ArrowFunction)
- [verifyKnowledgeCards](<worldview-phase04-check.cjs.md#s-735eeedac3d937b3>) (FunctionDeclaration)
- [verifyKnowledgeCards.count](<worldview-phase04-check.cjs.md#s-be50e8de5438101f>) (ArrowFunction)
- [verifyKnowledgeCards.click](<worldview-phase04-check.cjs.md#s-fbef32edfa6944f2>) (MethodDeclaration)
- [verifyKnowledgeCards.click.&lt;anonymous@32:9&gt;](<worldview-phase04-check.cjs.md#s-58a5aa1535ff06a1>) (ArrowFunction)
- [verifyKnowledgeCards.select](<worldview-phase04-check.cjs.md#s-6d24d33fb839c21e>) (FunctionDeclaration)
- [verifyKnowledgeCards.applyMenus](<worldview-phase04-check.cjs.md#s-ca5c8526cf94c9e6>) (FunctionDeclaration)
- [verifyKnowledgeCards.&lt;anonymous@165:34&gt;](<worldview-phase04-check.cjs.md#s-fc69e4b81c02e572>) (ArrowFunction)

<a id="s-b2715adb48392f65"></a>

## scripts/acceptance/worldview-phase04-check.cjs

[scripts/acceptance/worldview-phase04-check.cjs:1](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- require — module-loader; [scripts/acceptance/worldview-phase04-check.cjs:1](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L1>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:8](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L8>) — file-import-only; coverage not established.

<a id="s-1b873beff8c4232d"></a>

## waitSaved

[scripts/acceptance/worldview-phase04-check.cjs:4](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L4>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Waits for menu persistence and surfaces any failed write before refreshing.

Purpose evidence: jsdoc.

Lexical owner: [scripts/acceptance/worldview-phase04-check.cjs](<worldview-phase04-check.cjs.md#s-b2715adb48392f65>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| page | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [verifyKnowledgeCards](<worldview-phase04-check.cjs.md#s-735eeedac3d937b3>) — [scripts/acceptance/worldview-phase04-check.cjs:151](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L151>)
- [verifyKnowledgeCards](<worldview-phase04-check.cjs.md#s-735eeedac3d937b3>) — [scripts/acceptance/worldview-phase04-check.cjs:176](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L176>)
- [verifyKnowledgeCards](<worldview-phase04-check.cjs.md#s-735eeedac3d937b3>) — [scripts/acceptance/worldview-phase04-check.cjs:179](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L179>)

Unresolved / external call sites: 1.

- page.waitForFunction — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase04-check.cjs:5](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L5>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/worldview-phase04-check.cjs:151](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L151>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase04-check.cjs:176](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L176>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase04-check.cjs:179](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L179>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-worldview-smoke.cjs:8](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L8>) — file-import-only; coverage not established.

<a id="s-cf2ac87ed44a7166"></a>

## waitSaved.&lt;anonymous@5:30&gt;

[scripts/acceptance/worldview-phase04-check.cjs:5](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L5>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [waitSaved](<worldview-phase04-check.cjs.md#s-1b873beff8c4232d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- document.querySelector — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase04-check.cjs:6](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L6>)
- status.querySelector — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase04-check.cjs:7](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L7>)
- Error — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase04-check.cjs:7](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L7>)
- /Saving&#124;Loading/.test — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase04-check.cjs:8](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L8>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:8](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L8>) — file-import-only; coverage not established.

<a id="s-735eeedac3d937b3"></a>

## verifyKnowledgeCards

[scripts/acceptance/worldview-phase04-check.cjs:13](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L13>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Verifies floating card movement, selection actions, per-entity menus, persistence, and unchanged world camera through desktop UI.

Purpose evidence: jsdoc.

Exported as: verifyKnowledgeCards ([scripts/acceptance/worldview-phase04-check.cjs:1](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L1>)).

Lexical owner: [scripts/acceptance/worldview-phase04-check.cjs](<worldview-phase04-check.cjs.md#s-b2715adb48392f65>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| {   page,   createChip,   readChips,   gridImage, } | { page: any; createChip: any; readChips: any; gridImage: any; } | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [verifyKnowledgeCards.count](<worldview-phase04-check.cjs.md#s-be50e8de5438101f>) — [scripts/acceptance/worldview-phase04-check.cjs:37](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L37>)
- [verifyKnowledgeCards.count](<worldview-phase04-check.cjs.md#s-be50e8de5438101f>) — [scripts/acceptance/worldview-phase04-check.cjs:68](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L68>)
- [verifyKnowledgeCards.select](<worldview-phase04-check.cjs.md#s-6d24d33fb839c21e>) — [scripts/acceptance/worldview-phase04-check.cjs:69](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L69>)
- [verifyKnowledgeCards.count](<worldview-phase04-check.cjs.md#s-be50e8de5438101f>) — [scripts/acceptance/worldview-phase04-check.cjs:75](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L75>)
- [verifyKnowledgeCards.click](<worldview-phase04-check.cjs.md#s-fbef32edfa6944f2>) — [scripts/acceptance/worldview-phase04-check.cjs:82](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L82>)
- [verifyKnowledgeCards.applyMenus](<worldview-phase04-check.cjs.md#s-ca5c8526cf94c9e6>) — [scripts/acceptance/worldview-phase04-check.cjs:143](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L143>)
- [verifyKnowledgeCards.applyMenus](<worldview-phase04-check.cjs.md#s-ca5c8526cf94c9e6>) — [scripts/acceptance/worldview-phase04-check.cjs:144](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L144>)
- [verifyKnowledgeCards.applyMenus](<worldview-phase04-check.cjs.md#s-ca5c8526cf94c9e6>) — [scripts/acceptance/worldview-phase04-check.cjs:145](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L145>)
- [waitSaved](<worldview-phase04-check.cjs.md#s-1b873beff8c4232d>) — [scripts/acceptance/worldview-phase04-check.cjs:151](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L151>)
- [verifyKnowledgeCards.select](<worldview-phase04-check.cjs.md#s-6d24d33fb839c21e>) — [scripts/acceptance/worldview-phase04-check.cjs:168](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L168>)
- [verifyKnowledgeCards.click](<worldview-phase04-check.cjs.md#s-fbef32edfa6944f2>) — [scripts/acceptance/worldview-phase04-check.cjs:169](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L169>)
- [verifyKnowledgeCards.applyMenus](<worldview-phase04-check.cjs.md#s-ca5c8526cf94c9e6>) — [scripts/acceptance/worldview-phase04-check.cjs:175](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L175>)
- [waitSaved](<worldview-phase04-check.cjs.md#s-1b873beff8c4232d>) — [scripts/acceptance/worldview-phase04-check.cjs:176](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L176>)
- [waitSaved](<worldview-phase04-check.cjs.md#s-1b873beff8c4232d>) — [scripts/acceptance/worldview-phase04-check.cjs:179](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L179>)
- [verifyKnowledgeCards.count](<worldview-phase04-check.cjs.md#s-be50e8de5438101f>) — [scripts/acceptance/worldview-phase04-check.cjs:180](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L180>)
- [verifyKnowledgeCards.select](<worldview-phase04-check.cjs.md#s-6d24d33fb839c21e>) — [scripts/acceptance/worldview-phase04-check.cjs:181](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L181>)
- [verifyKnowledgeCards.click](<worldview-phase04-check.cjs.md#s-fbef32edfa6944f2>) — [scripts/acceptance/worldview-phase04-check.cjs:183](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L183>)
- [verifyKnowledgeCards.select](<worldview-phase04-check.cjs.md#s-6d24d33fb839c21e>) — [scripts/acceptance/worldview-phase04-check.cjs:203](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L203>)
- [verifyKnowledgeCards.click](<worldview-phase04-check.cjs.md#s-fbef32edfa6944f2>) — [scripts/acceptance/worldview-phase04-check.cjs:204](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L204>)
- [verifyKnowledgeCards.select](<worldview-phase04-check.cjs.md#s-6d24d33fb839c21e>) — [scripts/acceptance/worldview-phase04-check.cjs:212](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L212>)
- [verifyKnowledgeCards.click](<worldview-phase04-check.cjs.md#s-fbef32edfa6944f2>) — [scripts/acceptance/worldview-phase04-check.cjs:213](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L213>)

**Called by (statically resolved):**

- [main](<electron-worldview-smoke.cjs.md#s-d74fd257ed7793d3>) — [scripts/acceptance/electron-worldview-smoke.cjs:1223](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L1223>)

Unresolved / external call sites: 113.

- console.log — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase04-check.cjs:19](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L19>)
- page.getByRole — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase04-check.cjs:22](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L22>)
- assert.equal — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase04-check.cjs:37](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L37>)
- readChips — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase04-check.cjs:38](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L38>)
- createChip — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase04-check.cjs:39](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L39>)
- (await readChips(page)).at — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase04-check.cjs:40](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L40>)
- readChips — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase04-check.cjs:40](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L40>)
- createChip — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase04-check.cjs:41](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L41>)
- 105 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:1223](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L1223>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-worldview-smoke.cjs:8](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L8>) — file-import-only; coverage not established.

<a id="s-be50e8de5438101f"></a>

## verifyKnowledgeCards.count

[scripts/acceptance/worldview-phase04-check.cjs:28](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L28>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyKnowledgeCards](<worldview-phase04-check.cjs.md#s-735eeedac3d937b3>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [verifyKnowledgeCards](<worldview-phase04-check.cjs.md#s-735eeedac3d937b3>) — [scripts/acceptance/worldview-phase04-check.cjs:37](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L37>)
- [verifyKnowledgeCards](<worldview-phase04-check.cjs.md#s-735eeedac3d937b3>) — [scripts/acceptance/worldview-phase04-check.cjs:68](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L68>)
- [verifyKnowledgeCards](<worldview-phase04-check.cjs.md#s-735eeedac3d937b3>) — [scripts/acceptance/worldview-phase04-check.cjs:75](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L75>)
- [verifyKnowledgeCards](<worldview-phase04-check.cjs.md#s-735eeedac3d937b3>) — [scripts/acceptance/worldview-phase04-check.cjs:180](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L180>)

Unresolved / external call sites: 1.

- openButton.count — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase04-check.cjs:28](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L28>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/worldview-phase04-check.cjs:37](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L37>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase04-check.cjs:68](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L68>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase04-check.cjs:75](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L75>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase04-check.cjs:180](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L180>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-worldview-smoke.cjs:8](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L8>) — file-import-only; coverage not established.

<a id="s-fbef32edfa6944f2"></a>

## verifyKnowledgeCards.click

[scripts/acceptance/worldview-phase04-check.cjs:29](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L29>) · MethodDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyKnowledgeCards](<worldview-phase04-check.cjs.md#s-735eeedac3d937b3>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [verifyKnowledgeCards](<worldview-phase04-check.cjs.md#s-735eeedac3d937b3>) — [scripts/acceptance/worldview-phase04-check.cjs:82](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L82>)
- [verifyKnowledgeCards](<worldview-phase04-check.cjs.md#s-735eeedac3d937b3>) — [scripts/acceptance/worldview-phase04-check.cjs:169](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L169>)
- [verifyKnowledgeCards](<worldview-phase04-check.cjs.md#s-735eeedac3d937b3>) — [scripts/acceptance/worldview-phase04-check.cjs:183](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L183>)
- [verifyKnowledgeCards](<worldview-phase04-check.cjs.md#s-735eeedac3d937b3>) — [scripts/acceptance/worldview-phase04-check.cjs:204](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L204>)
- [verifyKnowledgeCards](<worldview-phase04-check.cjs.md#s-735eeedac3d937b3>) — [scripts/acceptance/worldview-phase04-check.cjs:213](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L213>)

Unresolved / external call sites: 2.

- openButton.click — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase04-check.cjs:30](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L30>)
- page.waitForFunction — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase04-check.cjs:31](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L31>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/worldview-phase04-check.cjs:82](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L82>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase04-check.cjs:169](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L169>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase04-check.cjs:183](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L183>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase04-check.cjs:204](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L204>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase04-check.cjs:213](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L213>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-worldview-smoke.cjs:8](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L8>) — file-import-only; coverage not established.

<a id="s-58a5aa1535ff06a1"></a>

## verifyKnowledgeCards.click.&lt;anonymous@32:9&gt;

[scripts/acceptance/worldview-phase04-check.cjs:32](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L32>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyKnowledgeCards.click](<worldview-phase04-check.cjs.md#s-fbef32edfa6944f2>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- document.querySelector — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase04-check.cjs:33](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L33>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:8](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L8>) — file-import-only; coverage not established.

<a id="s-6d24d33fb839c21e"></a>

## verifyKnowledgeCards.select

[scripts/acceptance/worldview-phase04-check.cjs:46](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L46>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Clicks actual chip ground at the reset camera, never opening a card implicitly.

Purpose evidence: jsdoc.

Lexical owner: [verifyKnowledgeCards](<worldview-phase04-check.cjs.md#s-735eeedac3d937b3>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| chip | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [verifyKnowledgeCards](<worldview-phase04-check.cjs.md#s-735eeedac3d937b3>) — [scripts/acceptance/worldview-phase04-check.cjs:69](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L69>)
- [verifyKnowledgeCards](<worldview-phase04-check.cjs.md#s-735eeedac3d937b3>) — [scripts/acceptance/worldview-phase04-check.cjs:168](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L168>)
- [verifyKnowledgeCards](<worldview-phase04-check.cjs.md#s-735eeedac3d937b3>) — [scripts/acceptance/worldview-phase04-check.cjs:181](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L181>)
- [verifyKnowledgeCards](<worldview-phase04-check.cjs.md#s-735eeedac3d937b3>) — [scripts/acceptance/worldview-phase04-check.cjs:203](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L203>)
- [verifyKnowledgeCards](<worldview-phase04-check.cjs.md#s-735eeedac3d937b3>) — [scripts/acceptance/worldview-phase04-check.cjs:212](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L212>)

Unresolved / external call sites: 11.

- page.getByRole("button", { name: "Reset view", exact: true }).click — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase04-check.cjs:47](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L47>)
- page.getByRole — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase04-check.cjs:47](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L47>)
- page.mouse.click — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase04-check.cjs:48](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L48>)
- assert.ok — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase04-check.cjs:52](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L52>)
- ( await page .getByRole("complementary", { name: "Selected entity actions" }) .innerText() ).includes — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase04-check.cjs:53](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L53>)
- page .getByRole("complementary", { name: "Selected entity actions" }) .innerText — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase04-check.cjs:54](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L54>)
- page .getByRole — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase04-check.cjs:54](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L54>)
- chip.name.split — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase04-check.cjs:57](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L57>)
- 3 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [scripts/acceptance/worldview-phase04-check.cjs:69](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L69>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase04-check.cjs:168](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L168>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase04-check.cjs:181](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L181>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase04-check.cjs:203](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L203>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase04-check.cjs:212](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L212>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-worldview-smoke.cjs:8](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L8>) — file-import-only; coverage not established.

<a id="s-ca5c8526cf94c9e6"></a>

## verifyKnowledgeCards.applyMenus

[scripts/acceptance/worldview-phase04-check.cjs:131](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L131>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Updates empty navigation declarations through the Phase 05 authoritative index editor.

Purpose evidence: jsdoc.

Lexical owner: [verifyKnowledgeCards](<worldview-phase04-check.cjs.md#s-735eeedac3d937b3>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| text | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [verifyKnowledgeCards](<worldview-phase04-check.cjs.md#s-735eeedac3d937b3>) — [scripts/acceptance/worldview-phase04-check.cjs:143](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L143>)
- [verifyKnowledgeCards](<worldview-phase04-check.cjs.md#s-735eeedac3d937b3>) — [scripts/acceptance/worldview-phase04-check.cjs:144](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L144>)
- [verifyKnowledgeCards](<worldview-phase04-check.cjs.md#s-735eeedac3d937b3>) — [scripts/acceptance/worldview-phase04-check.cjs:145](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L145>)
- [verifyKnowledgeCards](<worldview-phase04-check.cjs.md#s-735eeedac3d937b3>) — [scripts/acceptance/worldview-phase04-check.cjs:175](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L175>)

Unresolved / external call sites: 8.

- card .getByRole("button", { name: "Write Index", exact: true }) .click — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase04-check.cjs:132](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L132>)
- card .getByRole — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase04-check.cjs:132](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L132>)
- card .getByRole("textbox", { name: "Index declarations", exact: true }) .fill — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase04-check.cjs:135](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L135>)
- card .getByRole — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase04-check.cjs:135](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L135>)
- card .getByRole("button", { name: "Apply Index", exact: true }) .click — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase04-check.cjs:138](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L138>)
- card .getByRole — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase04-check.cjs:138](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L138>)
- card.locator(".knowledge-index-editor").waitFor — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase04-check.cjs:141](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L141>)
- card.locator — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase04-check.cjs:141](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L141>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/worldview-phase04-check.cjs:143](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L143>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase04-check.cjs:144](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L144>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase04-check.cjs:145](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L145>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase04-check.cjs:175](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L175>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-worldview-smoke.cjs:8](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L8>) — file-import-only; coverage not established.

<a id="s-fc69e4b81c02e572"></a>

## verifyKnowledgeCards.&lt;anonymous@165:34&gt;

[scripts/acceptance/worldview-phase04-check.cjs:165](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L165>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyKnowledgeCards](<worldview-phase04-check.cjs.md#s-735eeedac3d937b3>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| chip | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:8](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L8>) — file-import-only; coverage not established.
