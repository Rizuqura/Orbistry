# scripts/acceptance/electron-typography-smoke.cjs: symbols

[Atlas](<../../../../README.md>) / [Development and acceptance tooling](<../../../../modules/tooling.md>) / [scripts/acceptance/electron-typography-smoke.cjs:1](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/acceptance/electron-typography-smoke.cjs](<electron-typography-smoke.cjs.md#s-3e70f0716074aa92>) (Module)
- [main](<electron-typography-smoke.cjs.md#s-eb69fd4fa622c003>) (FunctionDeclaration)
- [main.&lt;anonymous@44:26&gt;](<electron-typography-smoke.cjs.md#s-3f8b6bded54c04b1>) (ArrowFunction)
- [main.&lt;anonymous@45:24&gt;](<electron-typography-smoke.cjs.md#s-5b7a1c0a2ecfd095>) (ArrowFunction)
- [main.&lt;anonymous@51:40&gt;](<electron-typography-smoke.cjs.md#s-304d9c064c52b3d1>) (ArrowFunction)
- [main.&lt;anonymous@51:40&gt;.&lt;anonymous@60:22&gt;](<electron-typography-smoke.cjs.md#s-c9751ebadab93fc9>) (ArrowFunction)
- [main.&lt;anonymous@66:28&gt;](<electron-typography-smoke.cjs.md#s-541be6e9df124a92>) (ArrowFunction)
- [main.family](<electron-typography-smoke.cjs.md#s-01ff912119360a30>) (ArrowFunction)
- [main.family.&lt;anonymous@71:19&gt;](<electron-typography-smoke.cjs.md#s-b3cdd2fef0b2e413>) (ArrowFunction)
- [&lt;anonymous@126:14&gt;](<electron-typography-smoke.cjs.md#s-8990583e1ce2fdcb>) (ArrowFunction)

<a id="s-3e70f0716074aa92"></a>

## scripts/acceptance/electron-typography-smoke.cjs

[scripts/acceptance/electron-typography-smoke.cjs:1](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

- [main](<electron-typography-smoke.cjs.md#s-eb69fd4fa622c003>) — [scripts/acceptance/electron-typography-smoke.cjs:126](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L126>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 6.

- require — module-loader; [scripts/acceptance/electron-typography-smoke.cjs:1](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L1>)
- require — module-loader; [scripts/acceptance/electron-typography-smoke.cjs:2](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L2>)
- require — module-loader; [scripts/acceptance/electron-typography-smoke.cjs:3](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L3>)
- require — module-loader; [scripts/acceptance/electron-typography-smoke.cjs:4](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L4>)
- require — module-loader; [scripts/acceptance/electron-typography-smoke.cjs:5](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L5>)
- main().catch — external-or-dynamic-dispatch; [scripts/acceptance/electron-typography-smoke.cjs:126](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L126>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-eb69fd4fa622c003"></a>

## main

[scripts/acceptance/electron-typography-smoke.cjs:6](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L6>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/acceptance/electron-typography-smoke.cjs](<electron-typography-smoke.cjs.md#s-3e70f0716074aa92>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [main.family](<electron-typography-smoke.cjs.md#s-01ff912119360a30>) — [scripts/acceptance/electron-typography-smoke.cjs:73](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L73>)
- [main.family](<electron-typography-smoke.cjs.md#s-01ff912119360a30>) — [scripts/acceptance/electron-typography-smoke.cjs:74](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L74>)
- [main.family](<electron-typography-smoke.cjs.md#s-01ff912119360a30>) — [scripts/acceptance/electron-typography-smoke.cjs:75](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L75>)
- [main.family](<electron-typography-smoke.cjs.md#s-01ff912119360a30>) — [scripts/acceptance/electron-typography-smoke.cjs:78](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L78>)
- [main.family](<electron-typography-smoke.cjs.md#s-01ff912119360a30>) — [scripts/acceptance/electron-typography-smoke.cjs:79](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L79>)
- [main.family](<electron-typography-smoke.cjs.md#s-01ff912119360a30>) — [scripts/acceptance/electron-typography-smoke.cjs:80](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L80>)
- [main.family](<electron-typography-smoke.cjs.md#s-01ff912119360a30>) — [scripts/acceptance/electron-typography-smoke.cjs:81](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L81>)
- [main.family](<electron-typography-smoke.cjs.md#s-01ff912119360a30>) — [scripts/acceptance/electron-typography-smoke.cjs:94](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L94>)
- [main.family](<electron-typography-smoke.cjs.md#s-01ff912119360a30>) — [scripts/acceptance/electron-typography-smoke.cjs:109](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L109>)

**Called by (statically resolved):**

- [scripts/acceptance/electron-typography-smoke.cjs](<electron-typography-smoke.cjs.md#s-3e70f0716074aa92>) — [scripts/acceptance/electron-typography-smoke.cjs:126](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L126>)

Unresolved / external call sites: 51.

- fs.mkdtemp — external-or-dynamic-dispatch; [scripts/acceptance/electron-typography-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L7>)
- path.join — external-or-dynamic-dispatch; [scripts/acceptance/electron-typography-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L7>)
- os.tmpdir — external-or-dynamic-dispatch; [scripts/acceptance/electron-typography-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L7>)
- path.join — external-or-dynamic-dispatch; [scripts/acceptance/electron-typography-smoke.cjs:8](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L8>)
- path.join — external-or-dynamic-dispatch; [scripts/acceptance/electron-typography-smoke.cjs:9](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L9>)
- fs.mkdir — external-or-dynamic-dispatch; [scripts/acceptance/electron-typography-smoke.cjs:10](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L10>)
- fs.mkdir — external-or-dynamic-dispatch; [scripts/acceptance/electron-typography-smoke.cjs:11](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L11>)
- fs.writeFile — external-or-dynamic-dispatch; [scripts/acceptance/electron-typography-smoke.cjs:12](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L12>)
- 43 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-typography-smoke.cjs:126](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L126>) — static-call-site; coverage not established.

<a id="s-3f8b6bded54c04b1"></a>

## main.&lt;anonymous@44:26&gt;

[scripts/acceptance/electron-typography-smoke.cjs:44](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L44>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-typography-smoke.cjs.md#s-eb69fd4fa622c003>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| e | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- errors.push — external-or-dynamic-dispatch; [scripts/acceptance/electron-typography-smoke.cjs:44](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L44>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-5b7a1c0a2ecfd095"></a>

## main.&lt;anonymous@45:24&gt;

[scripts/acceptance/electron-typography-smoke.cjs:45](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L45>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-typography-smoke.cjs.md#s-eb69fd4fa622c003>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| r | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- /fonts\\.(googleapis&#124;gstatic)\\.com/.test — external-or-dynamic-dispatch; [scripts/acceptance/electron-typography-smoke.cjs:46](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L46>)
- r.url — external-or-dynamic-dispatch; [scripts/acceptance/electron-typography-smoke.cjs:46](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L46>)
- remoteFonts.push — external-or-dynamic-dispatch; [scripts/acceptance/electron-typography-smoke.cjs:47](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L47>)
- r.url — external-or-dynamic-dispatch; [scripts/acceptance/electron-typography-smoke.cjs:47](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L47>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-304d9c064c52b3d1"></a>

## main.&lt;anonymous@51:40&gt;

[scripts/acceptance/electron-typography-smoke.cjs:51](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L51>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-typography-smoke.cjs.md#s-eb69fd4fa622c003>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- Promise.all — external-or-dynamic-dispatch; [scripts/acceptance/electron-typography-smoke.cjs:59](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L59>)
- requests.map — external-or-dynamic-dispatch; [scripts/acceptance/electron-typography-smoke.cjs:60](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L60>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-c9751ebadab93fc9"></a>

## main.&lt;anonymous@51:40&gt;.&lt;anonymous@60:22&gt;

[scripts/acceptance/electron-typography-smoke.cjs:60](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L60>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main.&lt;anonymous@51:40&gt;](<electron-typography-smoke.cjs.md#s-304d9c064c52b3d1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| font | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- document.fonts.load — external-or-dynamic-dispatch; [scripts/acceptance/electron-typography-smoke.cjs:62](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L62>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-541be6e9df124a92"></a>

## main.&lt;anonymous@66:28&gt;

[scripts/acceptance/electron-typography-smoke.cjs:66](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L66>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-typography-smoke.cjs.md#s-eb69fd4fa622c003>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| f | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-01ff912119360a30"></a>

## main.family

[scripts/acceptance/electron-typography-smoke.cjs:67](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L67>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-typography-smoke.cjs.md#s-eb69fd4fa622c003>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| selector | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [main](<electron-typography-smoke.cjs.md#s-eb69fd4fa622c003>) — [scripts/acceptance/electron-typography-smoke.cjs:73](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L73>)
- [main](<electron-typography-smoke.cjs.md#s-eb69fd4fa622c003>) — [scripts/acceptance/electron-typography-smoke.cjs:74](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L74>)
- [main](<electron-typography-smoke.cjs.md#s-eb69fd4fa622c003>) — [scripts/acceptance/electron-typography-smoke.cjs:75](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L75>)
- [main](<electron-typography-smoke.cjs.md#s-eb69fd4fa622c003>) — [scripts/acceptance/electron-typography-smoke.cjs:78](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L78>)
- [main](<electron-typography-smoke.cjs.md#s-eb69fd4fa622c003>) — [scripts/acceptance/electron-typography-smoke.cjs:79](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L79>)
- [main](<electron-typography-smoke.cjs.md#s-eb69fd4fa622c003>) — [scripts/acceptance/electron-typography-smoke.cjs:80](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L80>)
- [main](<electron-typography-smoke.cjs.md#s-eb69fd4fa622c003>) — [scripts/acceptance/electron-typography-smoke.cjs:81](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L81>)
- [main](<electron-typography-smoke.cjs.md#s-eb69fd4fa622c003>) — [scripts/acceptance/electron-typography-smoke.cjs:94](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L94>)
- [main](<electron-typography-smoke.cjs.md#s-eb69fd4fa622c003>) — [scripts/acceptance/electron-typography-smoke.cjs:109](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L109>)

Unresolved / external call sites: 3.

- page .locator(selector) .first() .evaluate — external-or-dynamic-dispatch; [scripts/acceptance/electron-typography-smoke.cjs:68](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L68>)
- page .locator(selector) .first — external-or-dynamic-dispatch; [scripts/acceptance/electron-typography-smoke.cjs:68](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L68>)
- page .locator — external-or-dynamic-dispatch; [scripts/acceptance/electron-typography-smoke.cjs:68](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L68>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-typography-smoke.cjs:73](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L73>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-typography-smoke.cjs:74](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L74>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-typography-smoke.cjs:75](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L75>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-typography-smoke.cjs:78](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L78>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-typography-smoke.cjs:79](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L79>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-typography-smoke.cjs:80](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L80>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-typography-smoke.cjs:81](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L81>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-typography-smoke.cjs:94](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L94>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-typography-smoke.cjs:109](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L109>) — static-call-site; coverage not established.

<a id="s-b3cdd2fef0b2e413"></a>

## main.family.&lt;anonymous@71:19&gt;

[scripts/acceptance/electron-typography-smoke.cjs:71](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L71>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main.family](<electron-typography-smoke.cjs.md#s-01ff912119360a30>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| el | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- getComputedStyle — external-or-dynamic-dispatch; [scripts/acceptance/electron-typography-smoke.cjs:71](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L71>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-8990583e1ce2fdcb"></a>

## &lt;anonymous@126:14&gt;

[scripts/acceptance/electron-typography-smoke.cjs:126](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L126>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/acceptance/electron-typography-smoke.cjs](<electron-typography-smoke.cjs.md#s-3e70f0716074aa92>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| e | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- console.error — external-or-dynamic-dispatch; [scripts/acceptance/electron-typography-smoke.cjs:127](<../../../../../../scripts/acceptance/electron-typography-smoke.cjs#L127>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
