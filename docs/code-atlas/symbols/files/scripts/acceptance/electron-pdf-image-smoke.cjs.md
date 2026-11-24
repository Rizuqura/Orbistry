# scripts/acceptance/electron-pdf-image-smoke.cjs: symbols

[Atlas](<../../../../README.md>) / [Development and acceptance tooling](<../../../../modules/tooling.md>) / [scripts/acceptance/electron-pdf-image-smoke.cjs:1](<../../../../../../scripts/acceptance/electron-pdf-image-smoke.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/acceptance/electron-pdf-image-smoke.cjs](<electron-pdf-image-smoke.cjs.md#s-7341d7a30e5f884e>) (Module)
- [main](<electron-pdf-image-smoke.cjs.md#s-f679c8105b6317ac>) (FunctionDeclaration)
- [main.&lt;anonymous@50:26&gt;](<electron-pdf-image-smoke.cjs.md#s-0b4523cb32cd5471>) (ArrowFunction)
- [main.&lt;anonymous@52:39&gt;](<electron-pdf-image-smoke.cjs.md#s-41fa1707b5a77560>) (ArrowFunction)
- [main.&lt;anonymous@99:7&gt;](<electron-pdf-image-smoke.cjs.md#s-f2c5249bf3c0e193>) (ArrowFunction)
- [main.&lt;anonymous@99:7&gt;.&lt;anonymous@101:19&gt;](<electron-pdf-image-smoke.cjs.md#s-f200e8d8766c435d>) (ArrowFunction)
- [main.&lt;anonymous@103:17&gt;](<electron-pdf-image-smoke.cjs.md#s-b84a4ccfa1b9153e>) (ArrowFunction)
- [main.&lt;anonymous@107:9&gt;](<electron-pdf-image-smoke.cjs.md#s-5b7c46ce37a649d6>) (ArrowFunction)
- [main.&lt;anonymous@111:37&gt;](<electron-pdf-image-smoke.cjs.md#s-05d98f5ca673dd4d>) (ArrowFunction)
- [main.&lt;anonymous@146:7&gt;](<electron-pdf-image-smoke.cjs.md#s-67d944c9e48c04cf>) (ArrowFunction)
- [main.&lt;anonymous@151:40&gt;](<electron-pdf-image-smoke.cjs.md#s-69c5232d298e0f90>) (ArrowFunction)
- [main.&lt;anonymous@157:39&gt;](<electron-pdf-image-smoke.cjs.md#s-38d1448949c70483>) (ArrowFunction)
- [main.&lt;anonymous@169:14&gt;](<electron-pdf-image-smoke.cjs.md#s-f987c74a0ac871fb>) (ArrowFunction)
- [&lt;anonymous@179:14&gt;](<electron-pdf-image-smoke.cjs.md#s-a409862e3596e786>) (ArrowFunction)

<a id="s-7341d7a30e5f884e"></a>

## scripts/acceptance/electron-pdf-image-smoke.cjs

[scripts/acceptance/electron-pdf-image-smoke.cjs:1](<../../../../../../scripts/acceptance/electron-pdf-image-smoke.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

- [main](<electron-pdf-image-smoke.cjs.md#s-f679c8105b6317ac>) — [scripts/acceptance/electron-pdf-image-smoke.cjs:179](<../../../../../../scripts/acceptance/electron-pdf-image-smoke.cjs#L179>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 8.

- require — module-loader; [scripts/acceptance/electron-pdf-image-smoke.cjs:1](<../../../../../../scripts/acceptance/electron-pdf-image-smoke.cjs#L1>)
- require — module-loader; [scripts/acceptance/electron-pdf-image-smoke.cjs:2](<../../../../../../scripts/acceptance/electron-pdf-image-smoke.cjs#L2>)
- require — module-loader; [scripts/acceptance/electron-pdf-image-smoke.cjs:3](<../../../../../../scripts/acceptance/electron-pdf-image-smoke.cjs#L3>)
- require — module-loader; [scripts/acceptance/electron-pdf-image-smoke.cjs:4](<../../../../../../scripts/acceptance/electron-pdf-image-smoke.cjs#L4>)
- require — module-loader; [scripts/acceptance/electron-pdf-image-smoke.cjs:5](<../../../../../../scripts/acceptance/electron-pdf-image-smoke.cjs#L5>)
- require — module-loader; [scripts/acceptance/electron-pdf-image-smoke.cjs:6](<../../../../../../scripts/acceptance/electron-pdf-image-smoke.cjs#L6>)
- require — module-loader; [scripts/acceptance/electron-pdf-image-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-pdf-image-smoke.cjs#L7>)
- main().catch — external-or-dynamic-dispatch; [scripts/acceptance/electron-pdf-image-smoke.cjs:179](<../../../../../../scripts/acceptance/electron-pdf-image-smoke.cjs#L179>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-f679c8105b6317ac"></a>

## main

[scripts/acceptance/electron-pdf-image-smoke.cjs:8](<../../../../../../scripts/acceptance/electron-pdf-image-smoke.cjs#L8>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/acceptance/electron-pdf-image-smoke.cjs](<electron-pdf-image-smoke.cjs.md#s-7341d7a30e5f884e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [textPdf](<../fixtures/text-pdf.cjs.md#s-471938689fc127a1>) — [scripts/acceptance/electron-pdf-image-smoke.cjs:22](<../../../../../../scripts/acceptance/electron-pdf-image-smoke.cjs#L22>)
- [imagePdf](<../fixtures/image-pdf.cjs.md#s-1b7b36e15c54a255>) — [scripts/acceptance/electron-pdf-image-smoke.cjs:24](<../../../../../../scripts/acceptance/electron-pdf-image-smoke.cjs#L24>)
- [textPdf](<../fixtures/text-pdf.cjs.md#s-471938689fc127a1>) — [scripts/acceptance/electron-pdf-image-smoke.cjs:91](<../../../../../../scripts/acceptance/electron-pdf-image-smoke.cjs#L91>)

**Called by (statically resolved):**

- [scripts/acceptance/electron-pdf-image-smoke.cjs](<electron-pdf-image-smoke.cjs.md#s-7341d7a30e5f884e>) — [scripts/acceptance/electron-pdf-image-smoke.cjs:179](<../../../../../../scripts/acceptance/electron-pdf-image-smoke.cjs#L179>)

Unresolved / external call sites: 105.

- fs.mkdtemp — external-or-dynamic-dispatch; [scripts/acceptance/electron-pdf-image-smoke.cjs:9](<../../../../../../scripts/acceptance/electron-pdf-image-smoke.cjs#L9>)
- path.join — external-or-dynamic-dispatch; [scripts/acceptance/electron-pdf-image-smoke.cjs:9](<../../../../../../scripts/acceptance/electron-pdf-image-smoke.cjs#L9>)
- os.tmpdir — external-or-dynamic-dispatch; [scripts/acceptance/electron-pdf-image-smoke.cjs:9](<../../../../../../scripts/acceptance/electron-pdf-image-smoke.cjs#L9>)
- fs.writeFile — external-or-dynamic-dispatch; [scripts/acceptance/electron-pdf-image-smoke.cjs:20](<../../../../../../scripts/acceptance/electron-pdf-image-smoke.cjs#L20>)
- path.join — external-or-dynamic-dispatch; [scripts/acceptance/electron-pdf-image-smoke.cjs:21](<../../../../../../scripts/acceptance/electron-pdf-image-smoke.cjs#L21>)
- fs.writeFile — external-or-dynamic-dispatch; [scripts/acceptance/electron-pdf-image-smoke.cjs:24](<../../../../../../scripts/acceptance/electron-pdf-image-smoke.cjs#L24>)
- path.join — external-or-dynamic-dispatch; [scripts/acceptance/electron-pdf-image-smoke.cjs:24](<../../../../../../scripts/acceptance/electron-pdf-image-smoke.cjs#L24>)
- fs.writeFile — external-or-dynamic-dispatch; [scripts/acceptance/electron-pdf-image-smoke.cjs:25](<../../../../../../scripts/acceptance/electron-pdf-image-smoke.cjs#L25>)
- 97 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-pdf-image-smoke.cjs:179](<../../../../../../scripts/acceptance/electron-pdf-image-smoke.cjs#L179>) — static-call-site; coverage not established.

<a id="s-0b4523cb32cd5471"></a>

## main.&lt;anonymous@50:26&gt;

[scripts/acceptance/electron-pdf-image-smoke.cjs:50](<../../../../../../scripts/acceptance/electron-pdf-image-smoke.cjs#L50>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-pdf-image-smoke.cjs.md#s-f679c8105b6317ac>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| e | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- errors.push — external-or-dynamic-dispatch; [scripts/acceptance/electron-pdf-image-smoke.cjs:50](<../../../../../../scripts/acceptance/electron-pdf-image-smoke.cjs#L50>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-41fa1707b5a77560"></a>

## main.&lt;anonymous@52:39&gt;

[scripts/acceptance/electron-pdf-image-smoke.cjs:52](<../../../../../../scripts/acceptance/electron-pdf-image-smoke.cjs#L52>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-pdf-image-smoke.cjs.md#s-f679c8105b6317ac>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| paths | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- boxes.push — external-or-dynamic-dispatch; [scripts/acceptance/electron-pdf-image-smoke.cjs:56](<../../../../../../scripts/acceptance/electron-pdf-image-smoke.cjs#L56>)
- ai.editContextBox — external-or-dynamic-dispatch; [scripts/acceptance/electron-pdf-image-smoke.cjs:57](<../../../../../../scripts/acceptance/electron-pdf-image-smoke.cjs#L57>)
- boxes.push — external-or-dynamic-dispatch; [scripts/acceptance/electron-pdf-image-smoke.cjs:63](<../../../../../../scripts/acceptance/electron-pdf-image-smoke.cjs#L63>)
- ai.editContextBox — external-or-dynamic-dispatch; [scripts/acceptance/electron-pdf-image-smoke.cjs:64](<../../../../../../scripts/acceptance/electron-pdf-image-smoke.cjs#L64>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-f2c5249bf3c0e193"></a>

## main.&lt;anonymous@99:7&gt;

[scripts/acceptance/electron-pdf-image-smoke.cjs:99](<../../../../../../scripts/acceptance/electron-pdf-image-smoke.cjs#L99>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-pdf-image-smoke.cjs.md#s-f679c8105b6317ac>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| ids | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- Promise.all — external-or-dynamic-dispatch; [scripts/acceptance/electron-pdf-image-smoke.cjs:100](<../../../../../../scripts/acceptance/electron-pdf-image-smoke.cjs#L100>)
- ids.map — external-or-dynamic-dispatch; [scripts/acceptance/electron-pdf-image-smoke.cjs:101](<../../../../../../scripts/acceptance/electron-pdf-image-smoke.cjs#L101>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-f200e8d8766c435d"></a>

## main.&lt;anonymous@99:7&gt;.&lt;anonymous@101:19&gt;

[scripts/acceptance/electron-pdf-image-smoke.cjs:101](<../../../../../../scripts/acceptance/electron-pdf-image-smoke.cjs#L101>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main.&lt;anonymous@99:7&gt;](<electron-pdf-image-smoke.cjs.md#s-f2c5249bf3c0e193>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| id | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- window.orbistryDesktop.ai.inspectContextBox — external-or-dynamic-dispatch; [scripts/acceptance/electron-pdf-image-smoke.cjs:101](<../../../../../../scripts/acceptance/electron-pdf-image-smoke.cjs#L101>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-b84a4ccfa1b9153e"></a>

## main.&lt;anonymous@103:17&gt;

[scripts/acceptance/electron-pdf-image-smoke.cjs:103](<../../../../../../scripts/acceptance/electron-pdf-image-smoke.cjs#L103>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-pdf-image-smoke.cjs.md#s-f679c8105b6317ac>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| b | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-5b7c46ce37a649d6"></a>

## main.&lt;anonymous@107:9&gt;

[scripts/acceptance/electron-pdf-image-smoke.cjs:107](<../../../../../../scripts/acceptance/electron-pdf-image-smoke.cjs#L107>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-pdf-image-smoke.cjs.md#s-f679c8105b6317ac>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| box | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-05d98f5ca673dd4d"></a>

## main.&lt;anonymous@111:37&gt;

[scripts/acceptance/electron-pdf-image-smoke.cjs:111](<../../../../../../scripts/acceptance/electron-pdf-image-smoke.cjs#L111>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-pdf-image-smoke.cjs.md#s-f679c8105b6317ac>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- window.orbistryDesktop.vault.readPdf — external-or-dynamic-dispatch; [scripts/acceptance/electron-pdf-image-smoke.cjs:112](<../../../../../../scripts/acceptance/electron-pdf-image-smoke.cjs#L112>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-67d944c9e48c04cf"></a>

## main.&lt;anonymous@146:7&gt;

[scripts/acceptance/electron-pdf-image-smoke.cjs:146](<../../../../../../scripts/acceptance/electron-pdf-image-smoke.cjs#L146>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-pdf-image-smoke.cjs.md#s-f679c8105b6317ac>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- (await window.orbistryDesktop.ai.listConversations())&#91;0&#93;?.attempts.at — external-or-dynamic-dispatch; [scripts/acceptance/electron-pdf-image-smoke.cjs:147](<../../../../../../scripts/acceptance/electron-pdf-image-smoke.cjs#L147>)
- window.orbistryDesktop.ai.listConversations — external-or-dynamic-dispatch; [scripts/acceptance/electron-pdf-image-smoke.cjs:147](<../../../../../../scripts/acceptance/electron-pdf-image-smoke.cjs#L147>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-69c5232d298e0f90"></a>

## main.&lt;anonymous@151:40&gt;

[scripts/acceptance/electron-pdf-image-smoke.cjs:151](<../../../../../../scripts/acceptance/electron-pdf-image-smoke.cjs#L151>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-pdf-image-smoke.cjs.md#s-f679c8105b6317ac>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- globalThis.onlineSmoke.localRequests.at — external-or-dynamic-dispatch; [scripts/acceptance/electron-pdf-image-smoke.cjs:152](<../../../../../../scripts/acceptance/electron-pdf-image-smoke.cjs#L152>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-38d1448949c70483"></a>

## main.&lt;anonymous@157:39&gt;

[scripts/acceptance/electron-pdf-image-smoke.cjs:157](<../../../../../../scripts/acceptance/electron-pdf-image-smoke.cjs#L157>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-pdf-image-smoke.cjs.md#s-f679c8105b6317ac>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- window.orbistryDesktop.ai.listConversations — external-or-dynamic-dispatch; [scripts/acceptance/electron-pdf-image-smoke.cjs:158](<../../../../../../scripts/acceptance/electron-pdf-image-smoke.cjs#L158>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-f987c74a0ac871fb"></a>

## main.&lt;anonymous@169:14&gt;

[scripts/acceptance/electron-pdf-image-smoke.cjs:169](<../../../../../../scripts/acceptance/electron-pdf-image-smoke.cjs#L169>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-pdf-image-smoke.cjs.md#s-f679c8105b6317ac>).

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

<a id="s-a409862e3596e786"></a>

## &lt;anonymous@179:14&gt;

[scripts/acceptance/electron-pdf-image-smoke.cjs:179](<../../../../../../scripts/acceptance/electron-pdf-image-smoke.cjs#L179>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/acceptance/electron-pdf-image-smoke.cjs](<electron-pdf-image-smoke.cjs.md#s-7341d7a30e5f884e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| error | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- console.error — external-or-dynamic-dispatch; [scripts/acceptance/electron-pdf-image-smoke.cjs:180](<../../../../../../scripts/acceptance/electron-pdf-image-smoke.cjs#L180>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
