# scripts/acceptance/electron-openrouter-live-catalog.cjs: symbols

[Atlas](<../../../../README.md>) / [Development and acceptance tooling](<../../../../modules/tooling.md>) / [scripts/acceptance/electron-openrouter-live-catalog.cjs:1](<../../../../../../scripts/acceptance/electron-openrouter-live-catalog.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/acceptance/electron-openrouter-live-catalog.cjs](<electron-openrouter-live-catalog.cjs.md#s-f96fc80370ecd476>) (Module)
- [main](<electron-openrouter-live-catalog.cjs.md#s-c3e48a8495ce37ce>) (FunctionDeclaration)
- [main.&lt;anonymous@47:42&gt;](<electron-openrouter-live-catalog.cjs.md#s-44cfa230048e37a3>) (ArrowFunction)
- [&lt;anonymous@72:14&gt;](<electron-openrouter-live-catalog.cjs.md#s-2d067a7a9d8be06a>) (ArrowFunction)

<a id="s-f96fc80370ecd476"></a>

## scripts/acceptance/electron-openrouter-live-catalog.cjs

[scripts/acceptance/electron-openrouter-live-catalog.cjs:1](<../../../../../../scripts/acceptance/electron-openrouter-live-catalog.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

- [main](<electron-openrouter-live-catalog.cjs.md#s-c3e48a8495ce37ce>) — [scripts/acceptance/electron-openrouter-live-catalog.cjs:72](<../../../../../../scripts/acceptance/electron-openrouter-live-catalog.cjs#L72>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 6.

- require — module-loader; [scripts/acceptance/electron-openrouter-live-catalog.cjs:3](<../../../../../../scripts/acceptance/electron-openrouter-live-catalog.cjs#L3>)
- require — module-loader; [scripts/acceptance/electron-openrouter-live-catalog.cjs:4](<../../../../../../scripts/acceptance/electron-openrouter-live-catalog.cjs#L4>)
- require — module-loader; [scripts/acceptance/electron-openrouter-live-catalog.cjs:5](<../../../../../../scripts/acceptance/electron-openrouter-live-catalog.cjs#L5>)
- require — module-loader; [scripts/acceptance/electron-openrouter-live-catalog.cjs:6](<../../../../../../scripts/acceptance/electron-openrouter-live-catalog.cjs#L6>)
- require — module-loader; [scripts/acceptance/electron-openrouter-live-catalog.cjs:7](<../../../../../../scripts/acceptance/electron-openrouter-live-catalog.cjs#L7>)
- main().catch — external-or-dynamic-dispatch; [scripts/acceptance/electron-openrouter-live-catalog.cjs:72](<../../../../../../scripts/acceptance/electron-openrouter-live-catalog.cjs#L72>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-c3e48a8495ce37ce"></a>

## main

[scripts/acceptance/electron-openrouter-live-catalog.cjs:9](<../../../../../../scripts/acceptance/electron-openrouter-live-catalog.cjs#L9>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/acceptance/electron-openrouter-live-catalog.cjs](<electron-openrouter-live-catalog.cjs.md#s-f96fc80370ecd476>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [scripts/acceptance/electron-openrouter-live-catalog.cjs](<electron-openrouter-live-catalog.cjs.md#s-f96fc80370ecd476>) — [scripts/acceptance/electron-openrouter-live-catalog.cjs:72](<../../../../../../scripts/acceptance/electron-openrouter-live-catalog.cjs#L72>)

Unresolved / external call sites: 38.

- fs.mkdtemp — external-or-dynamic-dispatch; [scripts/acceptance/electron-openrouter-live-catalog.cjs:10](<../../../../../../scripts/acceptance/electron-openrouter-live-catalog.cjs#L10>)
- path.join — external-or-dynamic-dispatch; [scripts/acceptance/electron-openrouter-live-catalog.cjs:11](<../../../../../../scripts/acceptance/electron-openrouter-live-catalog.cjs#L11>)
- os.tmpdir — external-or-dynamic-dispatch; [scripts/acceptance/electron-openrouter-live-catalog.cjs:11](<../../../../../../scripts/acceptance/electron-openrouter-live-catalog.cjs#L11>)
- electron.launch — external-or-dynamic-dispatch; [scripts/acceptance/electron-openrouter-live-catalog.cjs:18](<../../../../../../scripts/acceptance/electron-openrouter-live-catalog.cjs#L18>)
- path.resolve — external-or-dynamic-dispatch; [scripts/acceptance/electron-openrouter-live-catalog.cjs:20](<../../../../../../scripts/acceptance/electron-openrouter-live-catalog.cjs#L20>)
- app.firstWindow — external-or-dynamic-dispatch; [scripts/acceptance/electron-openrouter-live-catalog.cjs:26](<../../../../../../scripts/acceptance/electron-openrouter-live-catalog.cjs#L26>)
- page.setDefaultTimeout — external-or-dynamic-dispatch; [scripts/acceptance/electron-openrouter-live-catalog.cjs:27](<../../../../../../scripts/acceptance/electron-openrouter-live-catalog.cjs#L27>)
- page.getByRole("button", { name: "SETTINGS", exact: true }).click — external-or-dynamic-dispatch; [scripts/acceptance/electron-openrouter-live-catalog.cjs:28](<../../../../../../scripts/acceptance/electron-openrouter-live-catalog.cjs#L28>)
- 30 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-openrouter-live-catalog.cjs:72](<../../../../../../scripts/acceptance/electron-openrouter-live-catalog.cjs#L72>) — static-call-site; coverage not established.

<a id="s-44cfa230048e37a3"></a>

## main.&lt;anonymous@47:42&gt;

[scripts/acceptance/electron-openrouter-live-catalog.cjs:47](<../../../../../../scripts/acceptance/electron-openrouter-live-catalog.cjs#L47>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-openrouter-live-catalog.cjs.md#s-c3e48a8495ce37ce>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: { blockedRequests: number; forwardedInferenceRequests: number; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-2d067a7a9d8be06a"></a>

## &lt;anonymous@72:14&gt;

[scripts/acceptance/electron-openrouter-live-catalog.cjs:72](<../../../../../../scripts/acceptance/electron-openrouter-live-catalog.cjs#L72>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/acceptance/electron-openrouter-live-catalog.cjs](<electron-openrouter-live-catalog.cjs.md#s-f96fc80370ecd476>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- console.error — external-or-dynamic-dispatch; [scripts/acceptance/electron-openrouter-live-catalog.cjs:73](<../../../../../../scripts/acceptance/electron-openrouter-live-catalog.cjs#L73>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
