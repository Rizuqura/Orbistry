# scripts/acceptance/electron-model-settings-smoke.cjs: symbols

[Atlas](<../../../../README.md>) / [Development and acceptance tooling](<../../../../modules/tooling.md>) / [scripts/acceptance/electron-model-settings-smoke.cjs:1](<../../../../../../scripts/acceptance/electron-model-settings-smoke.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/acceptance/electron-model-settings-smoke.cjs](<electron-model-settings-smoke.cjs.md#s-592abf72fb6d2376>) (Module)
- [main](<electron-model-settings-smoke.cjs.md#s-029e9be4698620f3>) (FunctionDeclaration)
- [main.launch](<electron-model-settings-smoke.cjs.md#s-d6d9dc058d0cb3d8>) (ArrowFunction)
- [main.launch.&lt;anonymous@32:26&gt;](<electron-model-settings-smoke.cjs.md#s-afe3384f0bed9978>) (ArrowFunction)
- [main.&lt;anonymous@69:26&gt;](<electron-model-settings-smoke.cjs.md#s-35b25c63995f2c50>) (ArrowFunction)
- [main.&lt;anonymous@100:7&gt;](<electron-model-settings-smoke.cjs.md#s-73898d8b7c2b1414>) (ArrowFunction)
- [main.&lt;anonymous@109:7&gt;](<electron-model-settings-smoke.cjs.md#s-43d6d700a027d904>) (ArrowFunction)
- [main.&lt;anonymous@114:26&gt;](<electron-model-settings-smoke.cjs.md#s-6375a3e7c01929a2>) (ArrowFunction)
- [main.&lt;anonymous@118:40&gt;](<electron-model-settings-smoke.cjs.md#s-b1c06b9c241c86f8>) (ArrowFunction)
- [main.&lt;anonymous@164:9&gt;](<electron-model-settings-smoke.cjs.md#s-7d1b6dac29f0abde>) (ArrowFunction)
- [main.&lt;anonymous@178:11&gt;](<electron-model-settings-smoke.cjs.md#s-41edbf9abbbc31e0>) (ArrowFunction)
- [main.&lt;anonymous@188:24&gt;](<electron-model-settings-smoke.cjs.md#s-83c80ce4c3dbf2fb>) (ArrowFunction)
- [main.&lt;anonymous@191:25&gt;](<electron-model-settings-smoke.cjs.md#s-b9bdf55f7aa51f6a>) (ArrowFunction)
- [main.&lt;anonymous@197:41&gt;](<electron-model-settings-smoke.cjs.md#s-7218a468adb660ad>) (ArrowFunction)
- [main.&lt;anonymous@203:28&gt;](<electron-model-settings-smoke.cjs.md#s-02a1912fde38893b>) (ArrowFunction)
- [main.&lt;anonymous@226:26&gt;](<electron-model-settings-smoke.cjs.md#s-1a75743595d2a384>) (ArrowFunction)
- [&lt;anonymous@243:14&gt;](<electron-model-settings-smoke.cjs.md#s-d602f0460a8c7233>) (ArrowFunction)

<a id="s-592abf72fb6d2376"></a>

## scripts/acceptance/electron-model-settings-smoke.cjs

[scripts/acceptance/electron-model-settings-smoke.cjs:1](<../../../../../../scripts/acceptance/electron-model-settings-smoke.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

- [main](<electron-model-settings-smoke.cjs.md#s-029e9be4698620f3>) — [scripts/acceptance/electron-model-settings-smoke.cjs:243](<../../../../../../scripts/acceptance/electron-model-settings-smoke.cjs#L243>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 6.

- require — module-loader; [scripts/acceptance/electron-model-settings-smoke.cjs:2](<../../../../../../scripts/acceptance/electron-model-settings-smoke.cjs#L2>)
- require — module-loader; [scripts/acceptance/electron-model-settings-smoke.cjs:3](<../../../../../../scripts/acceptance/electron-model-settings-smoke.cjs#L3>)
- require — module-loader; [scripts/acceptance/electron-model-settings-smoke.cjs:4](<../../../../../../scripts/acceptance/electron-model-settings-smoke.cjs#L4>)
- require — module-loader; [scripts/acceptance/electron-model-settings-smoke.cjs:5](<../../../../../../scripts/acceptance/electron-model-settings-smoke.cjs#L5>)
- require — module-loader; [scripts/acceptance/electron-model-settings-smoke.cjs:6](<../../../../../../scripts/acceptance/electron-model-settings-smoke.cjs#L6>)
- main().catch — external-or-dynamic-dispatch; [scripts/acceptance/electron-model-settings-smoke.cjs:243](<../../../../../../scripts/acceptance/electron-model-settings-smoke.cjs#L243>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-029e9be4698620f3"></a>

## main

[scripts/acceptance/electron-model-settings-smoke.cjs:8](<../../../../../../scripts/acceptance/electron-model-settings-smoke.cjs#L8>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/acceptance/electron-model-settings-smoke.cjs](<electron-model-settings-smoke.cjs.md#s-592abf72fb6d2376>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [main.launch](<electron-model-settings-smoke.cjs.md#s-d6d9dc058d0cb3d8>) — [scripts/acceptance/electron-model-settings-smoke.cjs:39](<../../../../../../scripts/acceptance/electron-model-settings-smoke.cjs#L39>)
- [main.launch](<electron-model-settings-smoke.cjs.md#s-d6d9dc058d0cb3d8>) — [scripts/acceptance/electron-model-settings-smoke.cjs:209](<../../../../../../scripts/acceptance/electron-model-settings-smoke.cjs#L209>)

**Called by (statically resolved):**

- [scripts/acceptance/electron-model-settings-smoke.cjs](<electron-model-settings-smoke.cjs.md#s-592abf72fb6d2376>) — [scripts/acceptance/electron-model-settings-smoke.cjs:243](<../../../../../../scripts/acceptance/electron-model-settings-smoke.cjs#L243>)

Unresolved / external call sites: 115.

- fs.mkdtemp — external-or-dynamic-dispatch; [scripts/acceptance/electron-model-settings-smoke.cjs:9](<../../../../../../scripts/acceptance/electron-model-settings-smoke.cjs#L9>)
- path.join — external-or-dynamic-dispatch; [scripts/acceptance/electron-model-settings-smoke.cjs:10](<../../../../../../scripts/acceptance/electron-model-settings-smoke.cjs#L10>)
- os.tmpdir — external-or-dynamic-dispatch; [scripts/acceptance/electron-model-settings-smoke.cjs:10](<../../../../../../scripts/acceptance/electron-model-settings-smoke.cjs#L10>)
- fs.writeFile — external-or-dynamic-dispatch; [scripts/acceptance/electron-model-settings-smoke.cjs:38](<../../../../../../scripts/acceptance/electron-model-settings-smoke.cjs#L38>)
- path.join — external-or-dynamic-dispatch; [scripts/acceptance/electron-model-settings-smoke.cjs:38](<../../../../../../scripts/acceptance/electron-model-settings-smoke.cjs#L38>)
- assert.equal — external-or-dynamic-dispatch; [scripts/acceptance/electron-model-settings-smoke.cjs:40](<../../../../../../scripts/acceptance/electron-model-settings-smoke.cjs#L40>)
- page.locator('input&#91;type="password"&#93;').count — external-or-dynamic-dispatch; [scripts/acceptance/electron-model-settings-smoke.cjs:40](<../../../../../../scripts/acceptance/electron-model-settings-smoke.cjs#L40>)
- page.locator — external-or-dynamic-dispatch; [scripts/acceptance/electron-model-settings-smoke.cjs:40](<../../../../../../scripts/acceptance/electron-model-settings-smoke.cjs#L40>)
- 107 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-model-settings-smoke.cjs:243](<../../../../../../scripts/acceptance/electron-model-settings-smoke.cjs#L243>) — static-call-site; coverage not established.

<a id="s-d6d9dc058d0cb3d8"></a>

## main.launch

[scripts/acceptance/electron-model-settings-smoke.cjs:14](<../../../../../../scripts/acceptance/electron-model-settings-smoke.cjs#L14>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-model-settings-smoke.cjs.md#s-029e9be4698620f3>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [main](<electron-model-settings-smoke.cjs.md#s-029e9be4698620f3>) — [scripts/acceptance/electron-model-settings-smoke.cjs:39](<../../../../../../scripts/acceptance/electron-model-settings-smoke.cjs#L39>)
- [main](<electron-model-settings-smoke.cjs.md#s-029e9be4698620f3>) — [scripts/acceptance/electron-model-settings-smoke.cjs:209](<../../../../../../scripts/acceptance/electron-model-settings-smoke.cjs#L209>)

Unresolved / external call sites: 10.

- path.join — external-or-dynamic-dispatch; [scripts/acceptance/electron-model-settings-smoke.cjs:17](<../../../../../../scripts/acceptance/electron-model-settings-smoke.cjs#L17>)
- electron.launch — external-or-dynamic-dispatch; [scripts/acceptance/electron-model-settings-smoke.cjs:22](<../../../../../../scripts/acceptance/electron-model-settings-smoke.cjs#L22>)
- path.resolve — external-or-dynamic-dispatch; [scripts/acceptance/electron-model-settings-smoke.cjs:24](<../../../../../../scripts/acceptance/electron-model-settings-smoke.cjs#L24>)
- app.firstWindow — external-or-dynamic-dispatch; [scripts/acceptance/electron-model-settings-smoke.cjs:30](<../../../../../../scripts/acceptance/electron-model-settings-smoke.cjs#L30>)
- page.setDefaultTimeout — external-or-dynamic-dispatch; [scripts/acceptance/electron-model-settings-smoke.cjs:31](<../../../../../../scripts/acceptance/electron-model-settings-smoke.cjs#L31>)
- page.on — external-or-dynamic-dispatch; [scripts/acceptance/electron-model-settings-smoke.cjs:32](<../../../../../../scripts/acceptance/electron-model-settings-smoke.cjs#L32>)
- page.getByRole("button", { name: "SETTINGS", exact: true }).click — external-or-dynamic-dispatch; [scripts/acceptance/electron-model-settings-smoke.cjs:33](<../../../../../../scripts/acceptance/electron-model-settings-smoke.cjs#L33>)
- page.getByRole — external-or-dynamic-dispatch; [scripts/acceptance/electron-model-settings-smoke.cjs:33](<../../../../../../scripts/acceptance/electron-model-settings-smoke.cjs#L33>)
- 2 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-model-settings-smoke.cjs:39](<../../../../../../scripts/acceptance/electron-model-settings-smoke.cjs#L39>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-model-settings-smoke.cjs:209](<../../../../../../scripts/acceptance/electron-model-settings-smoke.cjs#L209>) — static-call-site; coverage not established.

<a id="s-afe3384f0bed9978"></a>

## main.launch.&lt;anonymous@32:26&gt;

[scripts/acceptance/electron-model-settings-smoke.cjs:32](<../../../../../../scripts/acceptance/electron-model-settings-smoke.cjs#L32>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main.launch](<electron-model-settings-smoke.cjs.md#s-d6d9dc058d0cb3d8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| error | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- errors.push — external-or-dynamic-dispatch; [scripts/acceptance/electron-model-settings-smoke.cjs:32](<../../../../../../scripts/acceptance/electron-model-settings-smoke.cjs#L32>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-35b25c63995f2c50"></a>

## main.&lt;anonymous@69:26&gt;

[scripts/acceptance/electron-model-settings-smoke.cjs:69](<../../../../../../scripts/acceptance/electron-model-settings-smoke.cjs#L69>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-model-settings-smoke.cjs.md#s-029e9be4698620f3>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-73898d8b7c2b1414"></a>

## main.&lt;anonymous@100:7&gt;

[scripts/acceptance/electron-model-settings-smoke.cjs:100](<../../../../../../scripts/acceptance/electron-model-settings-smoke.cjs#L100>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-model-settings-smoke.cjs.md#s-029e9be4698620f3>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- window.orbistryDesktop.ai.models — external-or-dynamic-dispatch; [scripts/acceptance/electron-model-settings-smoke.cjs:101](<../../../../../../scripts/acceptance/electron-model-settings-smoke.cjs#L101>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-43d6d700a027d904"></a>

## main.&lt;anonymous@109:7&gt;

[scripts/acceptance/electron-model-settings-smoke.cjs:109](<../../../../../../scripts/acceptance/electron-model-settings-smoke.cjs#L109>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-model-settings-smoke.cjs.md#s-029e9be4698620f3>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- window.orbistryDesktop.ai.models — external-or-dynamic-dispatch; [scripts/acceptance/electron-model-settings-smoke.cjs:110](<../../../../../../scripts/acceptance/electron-model-settings-smoke.cjs#L110>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-6375a3e7c01929a2"></a>

## main.&lt;anonymous@114:26&gt;

[scripts/acceptance/electron-model-settings-smoke.cjs:114](<../../../../../../scripts/acceptance/electron-model-settings-smoke.cjs#L114>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-model-settings-smoke.cjs.md#s-029e9be4698620f3>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-b1c06b9c241c86f8"></a>

## main.&lt;anonymous@118:40&gt;

[scripts/acceptance/electron-model-settings-smoke.cjs:118](<../../../../../../scripts/acceptance/electron-model-settings-smoke.cjs#L118>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-model-settings-smoke.cjs.md#s-029e9be4698620f3>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- window.orbistryDesktop.ai.models — external-or-dynamic-dispatch; [scripts/acceptance/electron-model-settings-smoke.cjs:119](<../../../../../../scripts/acceptance/electron-model-settings-smoke.cjs#L119>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-7d1b6dac29f0abde"></a>

## main.&lt;anonymous@164:9&gt;

[scripts/acceptance/electron-model-settings-smoke.cjs:164](<../../../../../../scripts/acceptance/electron-model-settings-smoke.cjs#L164>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-model-settings-smoke.cjs.md#s-029e9be4698620f3>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| element | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- getComputedStyle(element).gridTemplateColumns.split — external-or-dynamic-dispatch; [scripts/acceptance/electron-model-settings-smoke.cjs:165](<../../../../../../scripts/acceptance/electron-model-settings-smoke.cjs#L165>)
- getComputedStyle — external-or-dynamic-dispatch; [scripts/acceptance/electron-model-settings-smoke.cjs:165](<../../../../../../scripts/acceptance/electron-model-settings-smoke.cjs#L165>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-41edbf9abbbc31e0"></a>

## main.&lt;anonymous@178:11&gt;

[scripts/acceptance/electron-model-settings-smoke.cjs:178](<../../../../../../scripts/acceptance/electron-model-settings-smoke.cjs#L178>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-model-settings-smoke.cjs.md#s-029e9be4698620f3>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| element | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- getComputedStyle(element).gridTemplateColumns.split — external-or-dynamic-dispatch; [scripts/acceptance/electron-model-settings-smoke.cjs:179](<../../../../../../scripts/acceptance/electron-model-settings-smoke.cjs#L179>)
- getComputedStyle — external-or-dynamic-dispatch; [scripts/acceptance/electron-model-settings-smoke.cjs:179](<../../../../../../scripts/acceptance/electron-model-settings-smoke.cjs#L179>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-83c80ce4c3dbf2fb"></a>

## main.&lt;anonymous@188:24&gt;

[scripts/acceptance/electron-model-settings-smoke.cjs:188](<../../../../../../scripts/acceptance/electron-model-settings-smoke.cjs#L188>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-model-settings-smoke.cjs.md#s-029e9be4698620f3>).

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

<a id="s-b9bdf55f7aa51f6a"></a>

## main.&lt;anonymous@191:25&gt;

[scripts/acceptance/electron-model-settings-smoke.cjs:191](<../../../../../../scripts/acceptance/electron-model-settings-smoke.cjs#L191>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-model-settings-smoke.cjs.md#s-029e9be4698620f3>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- window.orbistryDesktop.ai.checkRemoteModel — external-or-dynamic-dispatch; [scripts/acceptance/electron-model-settings-smoke.cjs:192](<../../../../../../scripts/acceptance/electron-model-settings-smoke.cjs#L192>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-7218a468adb660ad"></a>

## main.&lt;anonymous@197:41&gt;

[scripts/acceptance/electron-model-settings-smoke.cjs:197](<../../../../../../scripts/acceptance/electron-model-settings-smoke.cjs#L197>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-model-settings-smoke.cjs.md#s-029e9be4698620f3>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- window.orbistryDesktop.ai.providedModels — external-or-dynamic-dispatch; [scripts/acceptance/electron-model-settings-smoke.cjs:198](<../../../../../../scripts/acceptance/electron-model-settings-smoke.cjs#L198>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-02a1912fde38893b"></a>

## main.&lt;anonymous@203:28&gt;

[scripts/acceptance/electron-model-settings-smoke.cjs:203](<../../../../../../scripts/acceptance/electron-model-settings-smoke.cjs#L203>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-model-settings-smoke.cjs.md#s-029e9be4698620f3>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- window.orbistryDesktop.ai.modelFavorites — external-or-dynamic-dispatch; [scripts/acceptance/electron-model-settings-smoke.cjs:203](<../../../../../../scripts/acceptance/electron-model-settings-smoke.cjs#L203>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-1a75743595d2a384"></a>

## main.&lt;anonymous@226:26&gt;

[scripts/acceptance/electron-model-settings-smoke.cjs:226](<../../../../../../scripts/acceptance/electron-model-settings-smoke.cjs#L226>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-model-settings-smoke.cjs.md#s-029e9be4698620f3>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d602f0460a8c7233"></a>

## &lt;anonymous@243:14&gt;

[scripts/acceptance/electron-model-settings-smoke.cjs:243](<../../../../../../scripts/acceptance/electron-model-settings-smoke.cjs#L243>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/acceptance/electron-model-settings-smoke.cjs](<electron-model-settings-smoke.cjs.md#s-592abf72fb6d2376>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| error | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- console.error — external-or-dynamic-dispatch; [scripts/acceptance/electron-model-settings-smoke.cjs:244](<../../../../../../scripts/acceptance/electron-model-settings-smoke.cjs#L244>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
