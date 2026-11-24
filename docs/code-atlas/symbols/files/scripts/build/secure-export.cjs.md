# scripts/build/secure-export.cjs: symbols

[Atlas](<../../../../README.md>) / [Development and acceptance tooling](<../../../../modules/tooling.md>) / [scripts/build/secure-export.cjs:1](<../../../../../../scripts/build/secure-export.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/build/secure-export.cjs](<secure-export.cjs.md#s-1dca79670dab1ec3>) (Module)
- [secure](<secure-export.cjs.md#s-5b3f2877fcd4546a>) (FunctionDeclaration)
- [secure.&lt;anonymous@18:15&gt;](<secure-export.cjs.md#s-6abe40179ba32321>) (ArrowFunction)
- [secure.&lt;anonymous@20:9&gt;](<secure-export.cjs.md#s-33f53d8cd5f07173>) (ArrowFunction)

<a id="s-1dca79670dab1ec3"></a>

## scripts/build/secure-export.cjs

[scripts/build/secure-export.cjs:1](<../../../../../../scripts/build/secure-export.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

- [secure](<secure-export.cjs.md#s-5b3f2877fcd4546a>) — [scripts/build/secure-export.cjs:31](<../../../../../../scripts/build/secure-export.cjs#L31>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- require — module-loader; [scripts/build/secure-export.cjs:1](<../../../../../../scripts/build/secure-export.cjs#L1>)
- require — module-loader; [scripts/build/secure-export.cjs:2](<../../../../../../scripts/build/secure-export.cjs#L2>)
- require — module-loader; [scripts/build/secure-export.cjs:3](<../../../../../../scripts/build/secure-export.cjs#L3>)
- path.resolve — external-or-dynamic-dispatch; [scripts/build/secure-export.cjs:31](<../../../../../../scripts/build/secure-export.cjs#L31>)
- console.log — external-or-dynamic-dispatch; [scripts/build/secure-export.cjs:32](<../../../../../../scripts/build/secure-export.cjs#L32>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-5b3f2877fcd4546a"></a>

## secure

[scripts/build/secure-export.cjs:4](<../../../../../../scripts/build/secure-export.cjs#L4>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/build/secure-export.cjs](<secure-export.cjs.md#s-1dca79670dab1ec3>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| directory | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [secure](<secure-export.cjs.md#s-5b3f2877fcd4546a>) — [scripts/build/secure-export.cjs:8](<../../../../../../scripts/build/secure-export.cjs#L8>)

**Called by (statically resolved):**

- [secure](<secure-export.cjs.md#s-5b3f2877fcd4546a>) — [scripts/build/secure-export.cjs:8](<../../../../../../scripts/build/secure-export.cjs#L8>)
- [scripts/build/secure-export.cjs](<secure-export.cjs.md#s-1dca79670dab1ec3>) — [scripts/build/secure-export.cjs:31](<../../../../../../scripts/build/secure-export.cjs#L31>)

Unresolved / external call sites: 13.

- fs.readdirSync — external-or-dynamic-dispatch; [scripts/build/secure-export.cjs:5](<../../../../../../scripts/build/secure-export.cjs#L5>)
- path.join — external-or-dynamic-dispatch; [scripts/build/secure-export.cjs:6](<../../../../../../scripts/build/secure-export.cjs#L6>)
- entry.isDirectory — external-or-dynamic-dispatch; [scripts/build/secure-export.cjs:7](<../../../../../../scripts/build/secure-export.cjs#L7>)
- entry.name.endsWith — external-or-dynamic-dispatch; [scripts/build/secure-export.cjs:11](<../../../../../../scripts/build/secure-export.cjs#L11>)
- fs.readFileSync — external-or-dynamic-dispatch; [scripts/build/secure-export.cjs:12](<../../../../../../scripts/build/secure-export.cjs#L12>)
- html.replace — external-or-dynamic-dispatch; [scripts/build/secure-export.cjs:13](<../../../../../../scripts/build/secure-export.cjs#L13>)
- &#91;...html.matchAll(/&lt;script\\b(&#91;^&gt;&#93;*)&gt;(&#91;\\s\\S&#93;*?)&lt;\\/script&gt;/gi)&#93; .filter((match) =&gt; !/\\bsrc\\s*=/i.test(match&#91;1&#93;) && match&#91;2&#93;) .map — external-or-dynamic-dispatch; [scripts/build/secure-export.cjs:17](<../../../../../../scripts/build/secure-export.cjs#L17>)
- &#91;...html.matchAll(/&lt;script\\b(&#91;^&gt;&#93;*)&gt;(&#91;\\s\\S&#93;*?)&lt;\\/script&gt;/gi)&#93; .filter — external-or-dynamic-dispatch; [scripts/build/secure-export.cjs:17](<../../../../../../scripts/build/secure-export.cjs#L17>)
- 5 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-6abe40179ba32321"></a>

## secure.&lt;anonymous@18:15&gt;

[scripts/build/secure-export.cjs:18](<../../../../../../scripts/build/secure-export.cjs#L18>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [secure](<secure-export.cjs.md#s-5b3f2877fcd4546a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| match | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- /\\bsrc\\s*=/i.test — external-or-dynamic-dispatch; [scripts/build/secure-export.cjs:18](<../../../../../../scripts/build/secure-export.cjs#L18>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-33f53d8cd5f07173"></a>

## secure.&lt;anonymous@20:9&gt;

[scripts/build/secure-export.cjs:20](<../../../../../../scripts/build/secure-export.cjs#L20>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [secure](<secure-export.cjs.md#s-5b3f2877fcd4546a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| match | any | compiler-inferred | required |

Returns: string (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- createHash("sha256").update(match&#91;2&#93;).digest — external-or-dynamic-dispatch; [scripts/build/secure-export.cjs:21](<../../../../../../scripts/build/secure-export.cjs#L21>)
- createHash("sha256").update — external-or-dynamic-dispatch; [scripts/build/secure-export.cjs:21](<../../../../../../scripts/build/secure-export.cjs#L21>)
- createHash — external-or-dynamic-dispatch; [scripts/build/secure-export.cjs:21](<../../../../../../scripts/build/secure-export.cjs#L21>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
