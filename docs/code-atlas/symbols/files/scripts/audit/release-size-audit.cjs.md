# scripts/audit/release-size-audit.cjs: symbols

[Atlas](<../../../../README.md>) / [Development and acceptance tooling](<../../../../modules/tooling.md>) / [scripts/audit/release-size-audit.cjs:1](<../../../../../../scripts/audit/release-size-audit.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/audit/release-size-audit.cjs](<release-size-audit.cjs.md#s-870fc97e7cc9002b>) (Module)
- [walk](<release-size-audit.cjs.md#s-1ba58b89ca654a9e>) (FunctionDeclaration)
- [&lt;anonymous@47:34&gt;](<release-size-audit.cjs.md#s-2afb0621362d3b9b>) (ArrowFunction)
- [&lt;anonymous@63:18&gt;](<release-size-audit.cjs.md#s-d8682cf058a2d6ca>) (ArrowFunction)
- [top](<release-size-audit.cjs.md#s-efb07a67a549c3bf>) (ArrowFunction)
- [top.&lt;anonymous@69:18&gt;](<release-size-audit.cjs.md#s-889ed14052fa4d50>) (ArrowFunction)
- [&lt;anonymous@71:3&gt;](<release-size-audit.cjs.md#s-801b2e3faf9e39e1>) (ArrowFunction)
- [&lt;anonymous@73:37&gt;](<release-size-audit.cjs.md#s-a4ea2df191b24a93>) (ArrowFunction)
- [&lt;anonymous@81:42&gt;](<release-size-audit.cjs.md#s-f423064f9ba1fa50>) (ArrowFunction)
- [&lt;anonymous@83:37&gt;](<release-size-audit.cjs.md#s-169bc0205ee127fe>) (ArrowFunction)
- [&lt;anonymous@85:5&gt;](<release-size-audit.cjs.md#s-0ac1a045ca357a14>) (ArrowFunction)

<a id="s-870fc97e7cc9002b"></a>

## scripts/audit/release-size-audit.cjs

[scripts/audit/release-size-audit.cjs:1](<../../../../../../scripts/audit/release-size-audit.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

- [walk](<release-size-audit.cjs.md#s-1ba58b89ca654a9e>) — [scripts/audit/release-size-audit.cjs:42](<../../../../../../scripts/audit/release-size-audit.cjs#L42>)
- [top](<release-size-audit.cjs.md#s-efb07a67a549c3bf>) — [scripts/audit/release-size-audit.cjs:80](<../../../../../../scripts/audit/release-size-audit.cjs#L80>)
- [top](<release-size-audit.cjs.md#s-efb07a67a549c3bf>) — [scripts/audit/release-size-audit.cjs:81](<../../../../../../scripts/audit/release-size-audit.cjs#L81>)
- [top](<release-size-audit.cjs.md#s-efb07a67a549c3bf>) — [scripts/audit/release-size-audit.cjs:82](<../../../../../../scripts/audit/release-size-audit.cjs#L82>)
- [top](<release-size-audit.cjs.md#s-efb07a67a549c3bf>) — [scripts/audit/release-size-audit.cjs:88](<../../../../../../scripts/audit/release-size-audit.cjs#L88>)
- [top](<release-size-audit.cjs.md#s-efb07a67a549c3bf>) — [scripts/audit/release-size-audit.cjs:89](<../../../../../../scripts/audit/release-size-audit.cjs#L89>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 29.

- require — module-loader; [scripts/audit/release-size-audit.cjs:1](<../../../../../../scripts/audit/release-size-audit.cjs#L1>)
- require — module-loader; [scripts/audit/release-size-audit.cjs:2](<../../../../../../scripts/audit/release-size-audit.cjs#L2>)
- require — module-loader; [scripts/audit/release-size-audit.cjs:3](<../../../../../../scripts/audit/release-size-audit.cjs#L3>)
- path.resolve — external-or-dynamic-dispatch; [scripts/audit/release-size-audit.cjs:4](<../../../../../../scripts/audit/release-size-audit.cjs#L4>)
- execFileSync("git", &#91;"ls-files", "-z"&#93;, { cwd: root }) .toString() .split("\\0") .filter — external-or-dynamic-dispatch; [scripts/audit/release-size-audit.cjs:43](<../../../../../../scripts/audit/release-size-audit.cjs#L43>)
- execFileSync("git", &#91;"ls-files", "-z"&#93;, { cwd: root }) .toString() .split — external-or-dynamic-dispatch; [scripts/audit/release-size-audit.cjs:43](<../../../../../../scripts/audit/release-size-audit.cjs#L43>)
- execFileSync("git", &#91;"ls-files", "-z"&#93;, { cwd: root }) .toString — external-or-dynamic-dispatch; [scripts/audit/release-size-audit.cjs:43](<../../../../../../scripts/audit/release-size-audit.cjs#L43>)
- execFileSync — external-or-dynamic-dispatch; [scripts/audit/release-size-audit.cjs:43](<../../../../../../scripts/audit/release-size-audit.cjs#L43>)
- 21 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-1ba58b89ca654a9e"></a>

## walk

[scripts/audit/release-size-audit.cjs:8](<../../../../../../scripts/audit/release-size-audit.cjs#L8>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/audit/release-size-audit.cjs](<release-size-audit.cjs.md#s-870fc97e7cc9002b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| directory | any | compiler-inferred | required |

Returns: { bytes: number; count: number; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [walk](<release-size-audit.cjs.md#s-1ba58b89ca654a9e>) — [scripts/audit/release-size-audit.cjs:22](<../../../../../../scripts/audit/release-size-audit.cjs#L22>)

**Called by (statically resolved):**

- [walk](<release-size-audit.cjs.md#s-1ba58b89ca654a9e>) — [scripts/audit/release-size-audit.cjs:22](<../../../../../../scripts/audit/release-size-audit.cjs#L22>)
- [scripts/audit/release-size-audit.cjs](<release-size-audit.cjs.md#s-870fc97e7cc9002b>) — [scripts/audit/release-size-audit.cjs:42](<../../../../../../scripts/audit/release-size-audit.cjs#L42>)

Unresolved / external call sites: 14.

- fs.readdirSync — external-or-dynamic-dispatch; [scripts/audit/release-size-audit.cjs:13](<../../../../../../scripts/audit/release-size-audit.cjs#L13>)
- errors.push — external-or-dynamic-dispatch; [scripts/audit/release-size-audit.cjs:15](<../../../../../../scripts/audit/release-size-audit.cjs#L15>)
- path.relative — external-or-dynamic-dispatch; [scripts/audit/release-size-audit.cjs:15](<../../../../../../scripts/audit/release-size-audit.cjs#L15>)
- path.join — external-or-dynamic-dispatch; [scripts/audit/release-size-audit.cjs:19](<../../../../../../scripts/audit/release-size-audit.cjs#L19>)
- entry.isSymbolicLink — external-or-dynamic-dispatch; [scripts/audit/release-size-audit.cjs:20](<../../../../../../scripts/audit/release-size-audit.cjs#L20>)
- entry.isDirectory — external-or-dynamic-dispatch; [scripts/audit/release-size-audit.cjs:21](<../../../../../../scripts/audit/release-size-audit.cjs#L21>)
- entry.isFile — external-or-dynamic-dispatch; [scripts/audit/release-size-audit.cjs:25](<../../../../../../scripts/audit/release-size-audit.cjs#L25>)
- fs.statSync — external-or-dynamic-dispatch; [scripts/audit/release-size-audit.cjs:26](<../../../../../../scripts/audit/release-size-audit.cjs#L26>)
- 6 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-2afb0621362d3b9b"></a>

## &lt;anonymous@47:34&gt;

[scripts/audit/release-size-audit.cjs:47](<../../../../../../scripts/audit/release-size-audit.cjs#L47>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/audit/release-size-audit.cjs](<release-size-audit.cjs.md#s-870fc97e7cc9002b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| file | any | compiler-inferred | required |

Returns: { path: any; bytes: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- fs.existsSync — external-or-dynamic-dispatch; [scripts/audit/release-size-audit.cjs:49](<../../../../../../scripts/audit/release-size-audit.cjs#L49>)
- path.join — external-or-dynamic-dispatch; [scripts/audit/release-size-audit.cjs:49](<../../../../../../scripts/audit/release-size-audit.cjs#L49>)
- fs.statSync — external-or-dynamic-dispatch; [scripts/audit/release-size-audit.cjs:50](<../../../../../../scripts/audit/release-size-audit.cjs#L50>)
- path.join — external-or-dynamic-dispatch; [scripts/audit/release-size-audit.cjs:50](<../../../../../../scripts/audit/release-size-audit.cjs#L50>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d8682cf058a2d6ca"></a>

## &lt;anonymous@63:18&gt;

[scripts/audit/release-size-audit.cjs:63](<../../../../../../scripts/audit/release-size-audit.cjs#L63>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/audit/release-size-audit.cjs](<release-size-audit.cjs.md#s-870fc97e7cc9002b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| file | any | compiler-inferred | required |

Returns: { path: any; bytes: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- fs.statSync — external-or-dynamic-dispatch; [scripts/audit/release-size-audit.cjs:65](<../../../../../../scripts/audit/release-size-audit.cjs#L65>)
- path.join — external-or-dynamic-dispatch; [scripts/audit/release-size-audit.cjs:65](<../../../../../../scripts/audit/release-size-audit.cjs#L65>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-efb07a67a549c3bf"></a>

## top

[scripts/audit/release-size-audit.cjs:68](<../../../../../../scripts/audit/release-size-audit.cjs#L68>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/audit/release-size-audit.cjs](<release-size-audit.cjs.md#s-870fc97e7cc9002b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| rows | any | compiler-inferred | required |
| limit | number | compiler-inferred | optional, default present |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [scripts/audit/release-size-audit.cjs](<release-size-audit.cjs.md#s-870fc97e7cc9002b>) — [scripts/audit/release-size-audit.cjs:80](<../../../../../../scripts/audit/release-size-audit.cjs#L80>)
- [scripts/audit/release-size-audit.cjs](<release-size-audit.cjs.md#s-870fc97e7cc9002b>) — [scripts/audit/release-size-audit.cjs:81](<../../../../../../scripts/audit/release-size-audit.cjs#L81>)
- [scripts/audit/release-size-audit.cjs](<release-size-audit.cjs.md#s-870fc97e7cc9002b>) — [scripts/audit/release-size-audit.cjs:82](<../../../../../../scripts/audit/release-size-audit.cjs#L82>)
- [scripts/audit/release-size-audit.cjs](<release-size-audit.cjs.md#s-870fc97e7cc9002b>) — [scripts/audit/release-size-audit.cjs:88](<../../../../../../scripts/audit/release-size-audit.cjs#L88>)
- [scripts/audit/release-size-audit.cjs](<release-size-audit.cjs.md#s-870fc97e7cc9002b>) — [scripts/audit/release-size-audit.cjs:89](<../../../../../../scripts/audit/release-size-audit.cjs#L89>)

Unresolved / external call sites: 2.

- &#91;...rows&#93;.sort((a, b) =&gt; b.bytes - a.bytes).slice — external-or-dynamic-dispatch; [scripts/audit/release-size-audit.cjs:69](<../../../../../../scripts/audit/release-size-audit.cjs#L69>)
- &#91;...rows&#93;.sort — external-or-dynamic-dispatch; [scripts/audit/release-size-audit.cjs:69](<../../../../../../scripts/audit/release-size-audit.cjs#L69>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-889ed14052fa4d50"></a>

## top.&lt;anonymous@69:18&gt;

[scripts/audit/release-size-audit.cjs:69](<../../../../../../scripts/audit/release-size-audit.cjs#L69>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [top](<release-size-audit.cjs.md#s-efb07a67a549c3bf>).

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

No direct static call/import association found; coverage unknown.

<a id="s-801b2e3faf9e39e1"></a>

## &lt;anonymous@71:3&gt;

[scripts/audit/release-size-audit.cjs:71](<../../../../../../scripts/audit/release-size-audit.cjs#L71>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/audit/release-size-audit.cjs](<release-size-audit.cjs.md#s-870fc97e7cc9002b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| row | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- row.path.includes — external-or-dynamic-dispatch; [scripts/audit/release-size-audit.cjs:71](<../../../../../../scripts/audit/release-size-audit.cjs#L71>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-a4ea2df191b24a93"></a>

## &lt;anonymous@73:37&gt;

[scripts/audit/release-size-audit.cjs:73](<../../../../../../scripts/audit/release-size-audit.cjs#L73>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/audit/release-size-audit.cjs](<release-size-audit.cjs.md#s-870fc97e7cc9002b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| row | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- /^node_modules\\/(?:@&#91;^/&#93;+\\/&#91;^/&#93;+&#124;&#91;^@/&#93;&#91;^/&#93;*)$/.test — external-or-dynamic-dispatch; [scripts/audit/release-size-audit.cjs:74](<../../../../../../scripts/audit/release-size-audit.cjs#L74>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-f423064f9ba1fa50"></a>

## &lt;anonymous@81:42&gt;

[scripts/audit/release-size-audit.cjs:81](<../../../../../../scripts/audit/release-size-audit.cjs#L81>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/audit/release-size-audit.cjs](<release-size-audit.cjs.md#s-870fc97e7cc9002b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| row | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-169bc0205ee127fe"></a>

## &lt;anonymous@83:37&gt;

[scripts/audit/release-size-audit.cjs:83](<../../../../../../scripts/audit/release-size-audit.cjs#L83>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/audit/release-size-audit.cjs](<release-size-audit.cjs.md#s-870fc97e7cc9002b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| sum | any | compiler-inferred | required |
| row | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-0ac1a045ca357a14"></a>

## &lt;anonymous@85:5&gt;

[scripts/audit/release-size-audit.cjs:85](<../../../../../../scripts/audit/release-size-audit.cjs#L85>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/audit/release-size-audit.cjs](<release-size-audit.cjs.md#s-870fc97e7cc9002b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| sum | any | compiler-inferred | required |
| row | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
