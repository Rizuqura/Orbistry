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
- [verifyKnowledgeCards.&lt;anonymous@72:42&gt;](<worldview-phase04-check.cjs.md#s-fdbfb766138e32e9>) (ArrowFunction)
- [verifyKnowledgeCards.applyMenus](<worldview-phase04-check.cjs.md#s-4f9166ef42f35da3>) (FunctionDeclaration)
- [verifyKnowledgeCards.&lt;anonymous@176:34&gt;](<worldview-phase04-check.cjs.md#s-eca2255fb48ef447>) (ArrowFunction)

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

- [verifyKnowledgeCards](<worldview-phase04-check.cjs.md#s-735eeedac3d937b3>) — [scripts/acceptance/worldview-phase04-check.cjs:162](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L162>)
- [verifyKnowledgeCards](<worldview-phase04-check.cjs.md#s-735eeedac3d937b3>) — [scripts/acceptance/worldview-phase04-check.cjs:187](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L187>)
- [verifyKnowledgeCards](<worldview-phase04-check.cjs.md#s-735eeedac3d937b3>) — [scripts/acceptance/worldview-phase04-check.cjs:190](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L190>)

Unresolved / external call sites: 1.

- page.waitForFunction — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase04-check.cjs:5](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L5>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/worldview-phase04-check.cjs:162](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L162>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase04-check.cjs:187](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L187>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase04-check.cjs:190](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L190>) — static-call-site; coverage not established.
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
- [verifyKnowledgeCards.count](<worldview-phase04-check.cjs.md#s-be50e8de5438101f>) — [scripts/acceptance/worldview-phase04-check.cjs:86](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L86>)
- [verifyKnowledgeCards.click](<worldview-phase04-check.cjs.md#s-fbef32edfa6944f2>) — [scripts/acceptance/worldview-phase04-check.cjs:93](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L93>)
- [verifyKnowledgeCards.applyMenus](<worldview-phase04-check.cjs.md#s-4f9166ef42f35da3>) — [scripts/acceptance/worldview-phase04-check.cjs:154](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L154>)
- [verifyKnowledgeCards.applyMenus](<worldview-phase04-check.cjs.md#s-4f9166ef42f35da3>) — [scripts/acceptance/worldview-phase04-check.cjs:155](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L155>)
- [verifyKnowledgeCards.applyMenus](<worldview-phase04-check.cjs.md#s-4f9166ef42f35da3>) — [scripts/acceptance/worldview-phase04-check.cjs:156](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L156>)
- [waitSaved](<worldview-phase04-check.cjs.md#s-1b873beff8c4232d>) — [scripts/acceptance/worldview-phase04-check.cjs:162](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L162>)
- [verifyKnowledgeCards.select](<worldview-phase04-check.cjs.md#s-6d24d33fb839c21e>) — [scripts/acceptance/worldview-phase04-check.cjs:179](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L179>)
- [verifyKnowledgeCards.click](<worldview-phase04-check.cjs.md#s-fbef32edfa6944f2>) — [scripts/acceptance/worldview-phase04-check.cjs:180](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L180>)
- [verifyKnowledgeCards.applyMenus](<worldview-phase04-check.cjs.md#s-4f9166ef42f35da3>) — [scripts/acceptance/worldview-phase04-check.cjs:186](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L186>)
- [waitSaved](<worldview-phase04-check.cjs.md#s-1b873beff8c4232d>) — [scripts/acceptance/worldview-phase04-check.cjs:187](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L187>)
- [waitSaved](<worldview-phase04-check.cjs.md#s-1b873beff8c4232d>) — [scripts/acceptance/worldview-phase04-check.cjs:190](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L190>)
- [verifyKnowledgeCards.count](<worldview-phase04-check.cjs.md#s-be50e8de5438101f>) — [scripts/acceptance/worldview-phase04-check.cjs:191](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L191>)
- [verifyKnowledgeCards.select](<worldview-phase04-check.cjs.md#s-6d24d33fb839c21e>) — [scripts/acceptance/worldview-phase04-check.cjs:192](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L192>)
- [verifyKnowledgeCards.click](<worldview-phase04-check.cjs.md#s-fbef32edfa6944f2>) — [scripts/acceptance/worldview-phase04-check.cjs:194](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L194>)
- [verifyKnowledgeCards.select](<worldview-phase04-check.cjs.md#s-6d24d33fb839c21e>) — [scripts/acceptance/worldview-phase04-check.cjs:214](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L214>)
- [verifyKnowledgeCards.click](<worldview-phase04-check.cjs.md#s-fbef32edfa6944f2>) — [scripts/acceptance/worldview-phase04-check.cjs:215](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L215>)
- [verifyKnowledgeCards.select](<worldview-phase04-check.cjs.md#s-6d24d33fb839c21e>) — [scripts/acceptance/worldview-phase04-check.cjs:223](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L223>)
- [verifyKnowledgeCards.click](<worldview-phase04-check.cjs.md#s-fbef32edfa6944f2>) — [scripts/acceptance/worldview-phase04-check.cjs:224](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L224>)

**Called by (statically resolved):**

- [main](<electron-worldview-smoke.cjs.md#s-d74fd257ed7793d3>) — [scripts/acceptance/electron-worldview-smoke.cjs:1223](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L1223>)

Unresolved / external call sites: 114.

- console.log — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase04-check.cjs:19](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L19>)
- page.getByRole — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase04-check.cjs:22](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L22>)
- assert.equal — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase04-check.cjs:37](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L37>)
- readChips — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase04-check.cjs:38](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L38>)
- createChip — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase04-check.cjs:39](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L39>)
- (await readChips(page)).at — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase04-check.cjs:40](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L40>)
- readChips — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase04-check.cjs:40](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L40>)
- createChip — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase04-check.cjs:41](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L41>)
- 106 additional sites in [symbol-index.json](<../../../symbol-index.json>).

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
- [verifyKnowledgeCards](<worldview-phase04-check.cjs.md#s-735eeedac3d937b3>) — [scripts/acceptance/worldview-phase04-check.cjs:86](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L86>)
- [verifyKnowledgeCards](<worldview-phase04-check.cjs.md#s-735eeedac3d937b3>) — [scripts/acceptance/worldview-phase04-check.cjs:191](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L191>)

Unresolved / external call sites: 1.

- openButton.count — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase04-check.cjs:28](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L28>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/worldview-phase04-check.cjs:37](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L37>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase04-check.cjs:68](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L68>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase04-check.cjs:86](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L86>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase04-check.cjs:191](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L191>) — static-call-site; coverage not established.
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

- [verifyKnowledgeCards](<worldview-phase04-check.cjs.md#s-735eeedac3d937b3>) — [scripts/acceptance/worldview-phase04-check.cjs:93](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L93>)
- [verifyKnowledgeCards](<worldview-phase04-check.cjs.md#s-735eeedac3d937b3>) — [scripts/acceptance/worldview-phase04-check.cjs:180](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L180>)
- [verifyKnowledgeCards](<worldview-phase04-check.cjs.md#s-735eeedac3d937b3>) — [scripts/acceptance/worldview-phase04-check.cjs:194](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L194>)
- [verifyKnowledgeCards](<worldview-phase04-check.cjs.md#s-735eeedac3d937b3>) — [scripts/acceptance/worldview-phase04-check.cjs:215](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L215>)
- [verifyKnowledgeCards](<worldview-phase04-check.cjs.md#s-735eeedac3d937b3>) — [scripts/acceptance/worldview-phase04-check.cjs:224](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L224>)

Unresolved / external call sites: 2.

- openButton.click — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase04-check.cjs:30](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L30>)
- page.waitForFunction — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase04-check.cjs:31](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L31>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/worldview-phase04-check.cjs:93](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L93>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase04-check.cjs:180](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L180>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase04-check.cjs:194](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L194>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase04-check.cjs:215](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L215>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase04-check.cjs:224](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L224>) — static-call-site; coverage not established.
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
- [verifyKnowledgeCards](<worldview-phase04-check.cjs.md#s-735eeedac3d937b3>) — [scripts/acceptance/worldview-phase04-check.cjs:179](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L179>)
- [verifyKnowledgeCards](<worldview-phase04-check.cjs.md#s-735eeedac3d937b3>) — [scripts/acceptance/worldview-phase04-check.cjs:192](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L192>)
- [verifyKnowledgeCards](<worldview-phase04-check.cjs.md#s-735eeedac3d937b3>) — [scripts/acceptance/worldview-phase04-check.cjs:214](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L214>)
- [verifyKnowledgeCards](<worldview-phase04-check.cjs.md#s-735eeedac3d937b3>) — [scripts/acceptance/worldview-phase04-check.cjs:223](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L223>)

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
- [scripts/acceptance/worldview-phase04-check.cjs:179](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L179>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase04-check.cjs:192](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L192>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase04-check.cjs:214](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L214>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase04-check.cjs:223](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L223>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-worldview-smoke.cjs:8](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L8>) — file-import-only; coverage not established.

<a id="s-fdbfb766138e32e9"></a>

## verifyKnowledgeCards.&lt;anonymous@72:42&gt;

[scripts/acceptance/worldview-phase04-check.cjs:72](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L72>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyKnowledgeCards](<worldview-phase04-check.cjs.md#s-735eeedac3d937b3>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| element | any | compiler-inferred | required |

Returns: { x: any; y: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- element.getBoundingClientRect — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase04-check.cjs:73](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L73>)
- document.elementFromPoint — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase04-check.cjs:78](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L78>)
- Error — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase04-check.cjs:80](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L80>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:8](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L8>) — file-import-only; coverage not established.

<a id="s-4f9166ef42f35da3"></a>

## verifyKnowledgeCards.applyMenus

[scripts/acceptance/worldview-phase04-check.cjs:142](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L142>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

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

- [verifyKnowledgeCards](<worldview-phase04-check.cjs.md#s-735eeedac3d937b3>) — [scripts/acceptance/worldview-phase04-check.cjs:154](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L154>)
- [verifyKnowledgeCards](<worldview-phase04-check.cjs.md#s-735eeedac3d937b3>) — [scripts/acceptance/worldview-phase04-check.cjs:155](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L155>)
- [verifyKnowledgeCards](<worldview-phase04-check.cjs.md#s-735eeedac3d937b3>) — [scripts/acceptance/worldview-phase04-check.cjs:156](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L156>)
- [verifyKnowledgeCards](<worldview-phase04-check.cjs.md#s-735eeedac3d937b3>) — [scripts/acceptance/worldview-phase04-check.cjs:186](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L186>)

Unresolved / external call sites: 8.

- card .getByRole("button", { name: "Write Index", exact: true }) .click — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase04-check.cjs:143](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L143>)
- card .getByRole — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase04-check.cjs:143](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L143>)
- card .getByRole("textbox", { name: "Index declarations", exact: true }) .fill — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase04-check.cjs:146](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L146>)
- card .getByRole — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase04-check.cjs:146](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L146>)
- card .getByRole("button", { name: "Apply Index", exact: true }) .click — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase04-check.cjs:149](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L149>)
- card .getByRole — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase04-check.cjs:149](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L149>)
- card.locator(".knowledge-index-editor").waitFor — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase04-check.cjs:152](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L152>)
- card.locator — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase04-check.cjs:152](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L152>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/worldview-phase04-check.cjs:154](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L154>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase04-check.cjs:155](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L155>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase04-check.cjs:156](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L156>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase04-check.cjs:186](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L186>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-worldview-smoke.cjs:8](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L8>) — file-import-only; coverage not established.

<a id="s-eca2255fb48ef447"></a>

## verifyKnowledgeCards.&lt;anonymous@176:34&gt;

[scripts/acceptance/worldview-phase04-check.cjs:176](<../../../../../../scripts/acceptance/worldview-phase04-check.cjs#L176>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

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
