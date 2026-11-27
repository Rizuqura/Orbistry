# scripts/acceptance/electron-packaged-smoke.cjs: symbols

[Atlas](<../../../../README.md>) / [Development and acceptance tooling](<../../../../modules/tooling.md>) / [scripts/acceptance/electron-packaged-smoke.cjs:1](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/acceptance/electron-packaged-smoke.cjs](<electron-packaged-smoke.cjs.md#s-f3fbcaf9639c92de>) (Module)
- [main](<electron-packaged-smoke.cjs.md#s-f882e9165e7b6781>) (FunctionDeclaration)
- [main.&lt;anonymous@30:26&gt;](<electron-packaged-smoke.cjs.md#s-f9b41a57ac448f98>) (ArrowFunction)
- [main.&lt;anonymous@35:39&gt;](<electron-packaged-smoke.cjs.md#s-60bed44771e1bf0c>) (ArrowFunction)
- [main.&lt;anonymous@54:17&gt;](<electron-packaged-smoke.cjs.md#s-4978711debcddea7>) (ArrowFunction)
- [main.&lt;anonymous@55:16&gt;](<electron-packaged-smoke.cjs.md#s-1cd597797acea852>) (ArrowFunction)
- [main.&lt;anonymous@67:43&gt;](<electron-packaged-smoke.cjs.md#s-482952e266128287>) (ArrowFunction)
- [main.&lt;anonymous@95:37&gt;](<electron-packaged-smoke.cjs.md#s-e64356799164b42b>) (ArrowFunction)
- [main.&lt;anonymous@103:41&gt;](<electron-packaged-smoke.cjs.md#s-7217f554071bab91>) (ArrowFunction)
- [main.&lt;anonymous@164:18&gt;](<electron-packaged-smoke.cjs.md#s-6c7cf0264332165c>) (ArrowFunction)
- [main.&lt;anonymous@170:38&gt;](<electron-packaged-smoke.cjs.md#s-159f757283810f66>) (ArrowFunction)
- [&lt;anonymous@174:14&gt;](<electron-packaged-smoke.cjs.md#s-8bb2cf2fa3f5d1da>) (ArrowFunction)

<a id="s-f3fbcaf9639c92de"></a>

## scripts/acceptance/electron-packaged-smoke.cjs

[scripts/acceptance/electron-packaged-smoke.cjs:1](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

- [main](<electron-packaged-smoke.cjs.md#s-f882e9165e7b6781>) — [scripts/acceptance/electron-packaged-smoke.cjs:174](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L174>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 7.

- require — module-loader; [scripts/acceptance/electron-packaged-smoke.cjs:1](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L1>)
- require — module-loader; [scripts/acceptance/electron-packaged-smoke.cjs:2](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L2>)
- require — module-loader; [scripts/acceptance/electron-packaged-smoke.cjs:3](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L3>)
- require — module-loader; [scripts/acceptance/electron-packaged-smoke.cjs:4](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L4>)
- require — module-loader; [scripts/acceptance/electron-packaged-smoke.cjs:5](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L5>)
- require — module-loader; [scripts/acceptance/electron-packaged-smoke.cjs:6](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L6>)
- main().catch — external-or-dynamic-dispatch; [scripts/acceptance/electron-packaged-smoke.cjs:174](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L174>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-f882e9165e7b6781"></a>

## main

[scripts/acceptance/electron-packaged-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L7>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/acceptance/electron-packaged-smoke.cjs](<electron-packaged-smoke.cjs.md#s-f3fbcaf9639c92de>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [imagePdf](<../fixtures/image-pdf.cjs.md#s-1b7b36e15c54a255>) — [scripts/acceptance/electron-packaged-smoke.cjs:66](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L66>)

**Called by (statically resolved):**

- [scripts/acceptance/electron-packaged-smoke.cjs](<electron-packaged-smoke.cjs.md#s-f3fbcaf9639c92de>) — [scripts/acceptance/electron-packaged-smoke.cjs:174](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L174>)

Unresolved / external call sites: 71.

- fs.mkdtemp — external-or-dynamic-dispatch; [scripts/acceptance/electron-packaged-smoke.cjs:8](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L8>)
- path.join — external-or-dynamic-dispatch; [scripts/acceptance/electron-packaged-smoke.cjs:8](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L8>)
- os.tmpdir — external-or-dynamic-dispatch; [scripts/acceptance/electron-packaged-smoke.cjs:8](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L8>)
- path.join — external-or-dynamic-dispatch; [scripts/acceptance/electron-packaged-smoke.cjs:9](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L9>)
- path.join — external-or-dynamic-dispatch; [scripts/acceptance/electron-packaged-smoke.cjs:10](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L10>)
- fs.mkdir — external-or-dynamic-dispatch; [scripts/acceptance/electron-packaged-smoke.cjs:14](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L14>)
- electron.launch — external-or-dynamic-dispatch; [scripts/acceptance/electron-packaged-smoke.cjs:19](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L19>)
- path.resolve — external-or-dynamic-dispatch; [scripts/acceptance/electron-packaged-smoke.cjs:20](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L20>)
- 63 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-packaged-smoke.cjs:174](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L174>) — static-call-site; coverage not established.

<a id="s-f9b41a57ac448f98"></a>

## main.&lt;anonymous@30:26&gt;

[scripts/acceptance/electron-packaged-smoke.cjs:30](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L30>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-packaged-smoke.cjs.md#s-f882e9165e7b6781>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| error | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- errors.push — external-or-dynamic-dispatch; [scripts/acceptance/electron-packaged-smoke.cjs:30](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L30>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-60bed44771e1bf0c"></a>

## main.&lt;anonymous@35:39&gt;

[scripts/acceptance/electron-packaged-smoke.cjs:35](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L35>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-packaged-smoke.cjs.md#s-f882e9165e7b6781>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 6.

- ai.listAgents — external-or-dynamic-dispatch; [scripts/acceptance/electron-packaged-smoke.cjs:38](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L38>)
- ai.listContextBoxes — external-or-dynamic-dispatch; [scripts/acceptance/electron-packaged-smoke.cjs:39](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L39>)
- ai.listConversations — external-or-dynamic-dispatch; [scripts/acceptance/electron-packaged-smoke.cjs:40](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L40>)
- ai.models — external-or-dynamic-dispatch; [scripts/acceptance/electron-packaged-smoke.cjs:41](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L41>)
- vault.getSnapshot — external-or-dynamic-dispatch; [scripts/acceptance/electron-packaged-smoke.cjs:42](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L42>)
- document.querySelector — external-or-dynamic-dispatch; [scripts/acceptance/electron-packaged-smoke.cjs:43](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L43>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-4978711debcddea7"></a>

## main.&lt;anonymous@54:17&gt;

[scripts/acceptance/electron-packaged-smoke.cjs:54](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L54>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-packaged-smoke.cjs.md#s-f882e9165e7b6781>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| p | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-1cd597797acea852"></a>

## main.&lt;anonymous@55:16&gt;

[scripts/acceptance/electron-packaged-smoke.cjs:55](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L55>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-packaged-smoke.cjs.md#s-f882e9165e7b6781>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| p | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-482952e266128287"></a>

## main.&lt;anonymous@67:43&gt;

[scripts/acceptance/electron-packaged-smoke.cjs:67](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L67>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-packaged-smoke.cjs.md#s-f882e9165e7b6781>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- window.orbistryDesktop.vault.read — external-or-dynamic-dispatch; [scripts/acceptance/electron-packaged-smoke.cjs:68](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L68>)
- window.orbistryDesktop.vault.readPdf — external-or-dynamic-dispatch; [scripts/acceptance/electron-packaged-smoke.cjs:69](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L69>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-e64356799164b42b"></a>

## main.&lt;anonymous@95:37&gt;

[scripts/acceptance/electron-packaged-smoke.cjs:95](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L95>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-packaged-smoke.cjs.md#s-f882e9165e7b6781>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- window.orbistryDesktop.ai.editContextBox — external-or-dynamic-dispatch; [scripts/acceptance/electron-packaged-smoke.cjs:96](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L96>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-7217f554071bab91"></a>

## main.&lt;anonymous@103:41&gt;

[scripts/acceptance/electron-packaged-smoke.cjs:103](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L103>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-packaged-smoke.cjs.md#s-f882e9165e7b6781>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { app } | { app: any; } | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 8.

- process.getBuiltinModule — external-or-dynamic-dispatch; [scripts/acceptance/electron-packaged-smoke.cjs:104](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L104>)
- createRequire — external-or-dynamic-dispatch; [scripts/acceptance/electron-packaged-smoke.cjs:105](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L105>)
- app.getAppPath — external-or-dynamic-dispatch; [scripts/acceptance/electron-packaged-smoke.cjs:105](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L105>)
- load — external-or-dynamic-dispatch; [scripts/acceptance/electron-packaged-smoke.cjs:106](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L106>)
- createDatasetSession — external-or-dynamic-dispatch; [scripts/acceptance/electron-packaged-smoke.cjs:109](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L109>)
- session.call — external-or-dynamic-dispatch; [scripts/acceptance/electron-packaged-smoke.cjs:111](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L111>)
- session.call — external-or-dynamic-dispatch; [scripts/acceptance/electron-packaged-smoke.cjs:116](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L116>)
- session.close — external-or-dynamic-dispatch; [scripts/acceptance/electron-packaged-smoke.cjs:126](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L126>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-6c7cf0264332165c"></a>

## main.&lt;anonymous@164:18&gt;

[scripts/acceptance/electron-packaged-smoke.cjs:164](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L164>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-packaged-smoke.cjs.md#s-f882e9165e7b6781>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: string (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-159f757283810f66"></a>

## main.&lt;anonymous@170:38&gt;

[scripts/acceptance/electron-packaged-smoke.cjs:170](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L170>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-packaged-smoke.cjs.md#s-f882e9165e7b6781>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-8bb2cf2fa3f5d1da"></a>

## &lt;anonymous@174:14&gt;

[scripts/acceptance/electron-packaged-smoke.cjs:174](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L174>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/acceptance/electron-packaged-smoke.cjs](<electron-packaged-smoke.cjs.md#s-f3fbcaf9639c92de>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| error | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- console.error — external-or-dynamic-dispatch; [scripts/acceptance/electron-packaged-smoke.cjs:175](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L175>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
