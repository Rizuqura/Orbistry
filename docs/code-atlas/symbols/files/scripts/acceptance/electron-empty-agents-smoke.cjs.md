# scripts/acceptance/electron-empty-agents-smoke.cjs: symbols

[Atlas](<../../../../README.md>) / [Development and acceptance tooling](<../../../../modules/tooling.md>) / [scripts/acceptance/electron-empty-agents-smoke.cjs:1](<../../../../../../scripts/acceptance/electron-empty-agents-smoke.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/acceptance/electron-empty-agents-smoke.cjs](<electron-empty-agents-smoke.cjs.md#s-2ba7be06ad39d4e3>) (Module)
- [main](<electron-empty-agents-smoke.cjs.md#s-f558189b009c882e>) (FunctionDeclaration)
- [main.launch](<electron-empty-agents-smoke.cjs.md#s-33aa6582512deeda>) (ArrowFunction)
- [main.launch.&lt;anonymous@30:26&gt;](<electron-empty-agents-smoke.cjs.md#s-623c626355fe358f>) (ArrowFunction)
- [main.&lt;anonymous@51:27&gt;](<electron-empty-agents-smoke.cjs.md#s-1e420eec7d67bbb5>) (ArrowFunction)
- [main.&lt;anonymous@73:28&gt;](<electron-empty-agents-smoke.cjs.md#s-fa0394497be2e5df>) (ArrowFunction)
- [main.&lt;anonymous@74:9&gt;](<electron-empty-agents-smoke.cjs.md#s-1917fe7132abc1d4>) (ArrowFunction)
- [main.&lt;anonymous@83:38&gt;](<electron-empty-agents-smoke.cjs.md#s-e42833758bd550e4>) (ArrowFunction)
- [&lt;anonymous@87:14&gt;](<electron-empty-agents-smoke.cjs.md#s-8adb96e6e3c92128>) (ArrowFunction)

<a id="s-2ba7be06ad39d4e3"></a>

## scripts/acceptance/electron-empty-agents-smoke.cjs

[scripts/acceptance/electron-empty-agents-smoke.cjs:1](<../../../../../../scripts/acceptance/electron-empty-agents-smoke.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

- [main](<electron-empty-agents-smoke.cjs.md#s-f558189b009c882e>) — [scripts/acceptance/electron-empty-agents-smoke.cjs:87](<../../../../../../scripts/acceptance/electron-empty-agents-smoke.cjs#L87>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 6.

- require — module-loader; [scripts/acceptance/electron-empty-agents-smoke.cjs:1](<../../../../../../scripts/acceptance/electron-empty-agents-smoke.cjs#L1>)
- require — module-loader; [scripts/acceptance/electron-empty-agents-smoke.cjs:2](<../../../../../../scripts/acceptance/electron-empty-agents-smoke.cjs#L2>)
- require — module-loader; [scripts/acceptance/electron-empty-agents-smoke.cjs:3](<../../../../../../scripts/acceptance/electron-empty-agents-smoke.cjs#L3>)
- require — module-loader; [scripts/acceptance/electron-empty-agents-smoke.cjs:4](<../../../../../../scripts/acceptance/electron-empty-agents-smoke.cjs#L4>)
- require — module-loader; [scripts/acceptance/electron-empty-agents-smoke.cjs:5](<../../../../../../scripts/acceptance/electron-empty-agents-smoke.cjs#L5>)
- main().catch — external-or-dynamic-dispatch; [scripts/acceptance/electron-empty-agents-smoke.cjs:87](<../../../../../../scripts/acceptance/electron-empty-agents-smoke.cjs#L87>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-f558189b009c882e"></a>

## main

[scripts/acceptance/electron-empty-agents-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-empty-agents-smoke.cjs#L7>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/acceptance/electron-empty-agents-smoke.cjs](<electron-empty-agents-smoke.cjs.md#s-2ba7be06ad39d4e3>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [main.launch](<electron-empty-agents-smoke.cjs.md#s-33aa6582512deeda>) — [scripts/acceptance/electron-empty-agents-smoke.cjs:45](<../../../../../../scripts/acceptance/electron-empty-agents-smoke.cjs#L45>)
- [main.launch](<electron-empty-agents-smoke.cjs.md#s-33aa6582512deeda>) — [scripts/acceptance/electron-empty-agents-smoke.cjs:55](<../../../../../../scripts/acceptance/electron-empty-agents-smoke.cjs#L55>)

**Called by (statically resolved):**

- [scripts/acceptance/electron-empty-agents-smoke.cjs](<electron-empty-agents-smoke.cjs.md#s-2ba7be06ad39d4e3>) — [scripts/acceptance/electron-empty-agents-smoke.cjs:87](<../../../../../../scripts/acceptance/electron-empty-agents-smoke.cjs#L87>)

Unresolved / external call sites: 39.

- fs.mkdtemp — external-or-dynamic-dispatch; [scripts/acceptance/electron-empty-agents-smoke.cjs:8](<../../../../../../scripts/acceptance/electron-empty-agents-smoke.cjs#L8>)
- path.join — external-or-dynamic-dispatch; [scripts/acceptance/electron-empty-agents-smoke.cjs:9](<../../../../../../scripts/acceptance/electron-empty-agents-smoke.cjs#L9>)
- os.tmpdir — external-or-dynamic-dispatch; [scripts/acceptance/electron-empty-agents-smoke.cjs:9](<../../../../../../scripts/acceptance/electron-empty-agents-smoke.cjs#L9>)
- path.join — external-or-dynamic-dispatch; [scripts/acceptance/electron-empty-agents-smoke.cjs:11](<../../../../../../scripts/acceptance/electron-empty-agents-smoke.cjs#L11>)
- fs.mkdir — external-or-dynamic-dispatch; [scripts/acceptance/electron-empty-agents-smoke.cjs:36](<../../../../../../scripts/acceptance/electron-empty-agents-smoke.cjs#L36>)
- fs.writeFile — external-or-dynamic-dispatch; [scripts/acceptance/electron-empty-agents-smoke.cjs:37](<../../../../../../scripts/acceptance/electron-empty-agents-smoke.cjs#L37>)
- path.join — external-or-dynamic-dispatch; [scripts/acceptance/electron-empty-agents-smoke.cjs:38](<../../../../../../scripts/acceptance/electron-empty-agents-smoke.cjs#L38>)
- JSON.stringify — external-or-dynamic-dispatch; [scripts/acceptance/electron-empty-agents-smoke.cjs:39](<../../../../../../scripts/acceptance/electron-empty-agents-smoke.cjs#L39>)
- 31 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-empty-agents-smoke.cjs:87](<../../../../../../scripts/acceptance/electron-empty-agents-smoke.cjs#L87>) — static-call-site; coverage not established.

<a id="s-33aa6582512deeda"></a>

## main.launch

[scripts/acceptance/electron-empty-agents-smoke.cjs:14](<../../../../../../scripts/acceptance/electron-empty-agents-smoke.cjs#L14>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-empty-agents-smoke.cjs.md#s-f558189b009c882e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [main](<electron-empty-agents-smoke.cjs.md#s-f558189b009c882e>) — [scripts/acceptance/electron-empty-agents-smoke.cjs:45](<../../../../../../scripts/acceptance/electron-empty-agents-smoke.cjs#L45>)
- [main](<electron-empty-agents-smoke.cjs.md#s-f558189b009c882e>) — [scripts/acceptance/electron-empty-agents-smoke.cjs:55](<../../../../../../scripts/acceptance/electron-empty-agents-smoke.cjs#L55>)

Unresolved / external call sites: 8.

- electron.launch — external-or-dynamic-dispatch; [scripts/acceptance/electron-empty-agents-smoke.cjs:22](<../../../../../../scripts/acceptance/electron-empty-agents-smoke.cjs#L22>)
- path.resolve — external-or-dynamic-dispatch; [scripts/acceptance/electron-empty-agents-smoke.cjs:24](<../../../../../../scripts/acceptance/electron-empty-agents-smoke.cjs#L24>)
- app.firstWindow — external-or-dynamic-dispatch; [scripts/acceptance/electron-empty-agents-smoke.cjs:29](<../../../../../../scripts/acceptance/electron-empty-agents-smoke.cjs#L29>)
- page.on — external-or-dynamic-dispatch; [scripts/acceptance/electron-empty-agents-smoke.cjs:30](<../../../../../../scripts/acceptance/electron-empty-agents-smoke.cjs#L30>)
- page.locator(".startup-screen").waitFor — external-or-dynamic-dispatch; [scripts/acceptance/electron-empty-agents-smoke.cjs:31](<../../../../../../scripts/acceptance/electron-empty-agents-smoke.cjs#L31>)
- page.locator — external-or-dynamic-dispatch; [scripts/acceptance/electron-empty-agents-smoke.cjs:31](<../../../../../../scripts/acceptance/electron-empty-agents-smoke.cjs#L31>)
- page.getByRole("button", { name: "AGENT", exact: true }).click — external-or-dynamic-dispatch; [scripts/acceptance/electron-empty-agents-smoke.cjs:32](<../../../../../../scripts/acceptance/electron-empty-agents-smoke.cjs#L32>)
- page.getByRole — external-or-dynamic-dispatch; [scripts/acceptance/electron-empty-agents-smoke.cjs:32](<../../../../../../scripts/acceptance/electron-empty-agents-smoke.cjs#L32>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-empty-agents-smoke.cjs:45](<../../../../../../scripts/acceptance/electron-empty-agents-smoke.cjs#L45>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-empty-agents-smoke.cjs:55](<../../../../../../scripts/acceptance/electron-empty-agents-smoke.cjs#L55>) — static-call-site; coverage not established.

<a id="s-623c626355fe358f"></a>

## main.launch.&lt;anonymous@30:26&gt;

[scripts/acceptance/electron-empty-agents-smoke.cjs:30](<../../../../../../scripts/acceptance/electron-empty-agents-smoke.cjs#L30>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main.launch](<electron-empty-agents-smoke.cjs.md#s-33aa6582512deeda>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| error | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- errors.push — external-or-dynamic-dispatch; [scripts/acceptance/electron-empty-agents-smoke.cjs:30](<../../../../../../scripts/acceptance/electron-empty-agents-smoke.cjs#L30>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-1e420eec7d67bbb5"></a>

## main.&lt;anonymous@51:27&gt;

[scripts/acceptance/electron-empty-agents-smoke.cjs:51](<../../../../../../scripts/acceptance/electron-empty-agents-smoke.cjs#L51>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-empty-agents-smoke.cjs.md#s-f558189b009c882e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- window.orbistryDesktop.ai.listAgents — external-or-dynamic-dispatch; [scripts/acceptance/electron-empty-agents-smoke.cjs:51](<../../../../../../scripts/acceptance/electron-empty-agents-smoke.cjs#L51>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-fa0394497be2e5df"></a>

## main.&lt;anonymous@73:28&gt;

[scripts/acceptance/electron-empty-agents-smoke.cjs:73](<../../../../../../scripts/acceptance/electron-empty-agents-smoke.cjs#L73>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-empty-agents-smoke.cjs.md#s-f558189b009c882e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- window.orbistryDesktop.ai.listAgents — external-or-dynamic-dispatch; [scripts/acceptance/electron-empty-agents-smoke.cjs:73](<../../../../../../scripts/acceptance/electron-empty-agents-smoke.cjs#L73>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-1917fe7132abc1d4"></a>

## main.&lt;anonymous@74:9&gt;

[scripts/acceptance/electron-empty-agents-smoke.cjs:74](<../../../../../../scripts/acceptance/electron-empty-agents-smoke.cjs#L74>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-empty-agents-smoke.cjs.md#s-f558189b009c882e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| agent | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-e42833758bd550e4"></a>

## main.&lt;anonymous@83:38&gt;

[scripts/acceptance/electron-empty-agents-smoke.cjs:83](<../../../../../../scripts/acceptance/electron-empty-agents-smoke.cjs#L83>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-empty-agents-smoke.cjs.md#s-f558189b009c882e>).

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

<a id="s-8adb96e6e3c92128"></a>

## &lt;anonymous@87:14&gt;

[scripts/acceptance/electron-empty-agents-smoke.cjs:87](<../../../../../../scripts/acceptance/electron-empty-agents-smoke.cjs#L87>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/acceptance/electron-empty-agents-smoke.cjs](<electron-empty-agents-smoke.cjs.md#s-2ba7be06ad39d4e3>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| error | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- console.error — external-or-dynamic-dispatch; [scripts/acceptance/electron-empty-agents-smoke.cjs:88](<../../../../../../scripts/acceptance/electron-empty-agents-smoke.cjs#L88>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
