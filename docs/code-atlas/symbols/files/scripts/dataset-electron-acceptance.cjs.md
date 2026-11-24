# scripts/dataset-electron-acceptance.cjs: symbols

[Atlas](<../../../README.md>) / [Development and acceptance tooling](<../../../modules/tooling.md>) / [scripts/dataset-electron-acceptance.cjs:1](<../../../../../scripts/dataset-electron-acceptance.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/dataset-electron-acceptance.cjs](<dataset-electron-acceptance.cjs.md#s-ae44a2c83e598856>) (Module)
- [main](<dataset-electron-acceptance.cjs.md#s-ea2ece21528d1ae6>) (FunctionDeclaration)
- [main.&lt;anonymous@14:36&gt;](<dataset-electron-acceptance.cjs.md#s-262ee56ac31a13e3>) (ArrowFunction)
- [main.&lt;anonymous@99:37&gt;](<dataset-electron-acceptance.cjs.md#s-40c926c7702381c0>) (ArrowFunction)
- [main.&lt;anonymous@102:32&gt;](<dataset-electron-acceptance.cjs.md#s-f941a0298f6f1492>) (ArrowFunction)
- [main.&lt;anonymous@104:40&gt;](<dataset-electron-acceptance.cjs.md#s-68cc83a8ebb76fb6>) (ArrowFunction)
- [&lt;anonymous@172:14&gt;](<dataset-electron-acceptance.cjs.md#s-4dfc2fada2611fdd>) (ArrowFunction)

<a id="s-ae44a2c83e598856"></a>

## scripts/dataset-electron-acceptance.cjs

[scripts/dataset-electron-acceptance.cjs:1](<../../../../../scripts/dataset-electron-acceptance.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

- [main](<dataset-electron-acceptance.cjs.md#s-ea2ece21528d1ae6>) — [scripts/dataset-electron-acceptance.cjs:172](<../../../../../scripts/dataset-electron-acceptance.cjs#L172>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 8.

- require — module-loader; [scripts/dataset-electron-acceptance.cjs:1](<../../../../../scripts/dataset-electron-acceptance.cjs#L1>)
- require — module-loader; [scripts/dataset-electron-acceptance.cjs:2](<../../../../../scripts/dataset-electron-acceptance.cjs#L2>)
- require — module-loader; [scripts/dataset-electron-acceptance.cjs:3](<../../../../../scripts/dataset-electron-acceptance.cjs#L3>)
- require — module-loader; [scripts/dataset-electron-acceptance.cjs:4](<../../../../../scripts/dataset-electron-acceptance.cjs#L4>)
- require — module-loader; [scripts/dataset-electron-acceptance.cjs:5](<../../../../../scripts/dataset-electron-acceptance.cjs#L5>)
- require — module-loader; [scripts/dataset-electron-acceptance.cjs:6](<../../../../../scripts/dataset-electron-acceptance.cjs#L6>)
- require — module-loader; [scripts/dataset-electron-acceptance.cjs:7](<../../../../../scripts/dataset-electron-acceptance.cjs#L7>)
- main().catch — external-or-dynamic-dispatch; [scripts/dataset-electron-acceptance.cjs:172](<../../../../../scripts/dataset-electron-acceptance.cjs#L172>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-ea2ece21528d1ae6"></a>

## main

[scripts/dataset-electron-acceptance.cjs:9](<../../../../../scripts/dataset-electron-acceptance.cjs#L9>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/dataset-electron-acceptance.cjs](<dataset-electron-acceptance.cjs.md#s-ae44a2c83e598856>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [scripts/dataset-electron-acceptance.cjs](<dataset-electron-acceptance.cjs.md#s-ae44a2c83e598856>) — [scripts/dataset-electron-acceptance.cjs:172](<../../../../../scripts/dataset-electron-acceptance.cjs#L172>)

Unresolved / external call sites: 41.

- fs.mkdtemp — external-or-dynamic-dispatch; [scripts/dataset-electron-acceptance.cjs:10](<../../../../../scripts/dataset-electron-acceptance.cjs#L10>)
- path.join — external-or-dynamic-dispatch; [scripts/dataset-electron-acceptance.cjs:11](<../../../../../scripts/dataset-electron-acceptance.cjs#L11>)
- os.tmpdir — external-or-dynamic-dispatch; [scripts/dataset-electron-acceptance.cjs:11](<../../../../../scripts/dataset-electron-acceptance.cjs#L11>)
- http.createServer — external-or-dynamic-dispatch; [scripts/dataset-electron-acceptance.cjs:14](<../../../../../scripts/dataset-electron-acceptance.cjs#L14>)
- server.listen — external-or-dynamic-dispatch; [scripts/dataset-electron-acceptance.cjs:75](<../../../../../scripts/dataset-electron-acceptance.cjs#L75>)
- once — external-or-dynamic-dispatch; [scripts/dataset-electron-acceptance.cjs:76](<../../../../../scripts/dataset-electron-acceptance.cjs#L76>)
- fs.writeFile — external-or-dynamic-dispatch; [scripts/dataset-electron-acceptance.cjs:79](<../../../../../scripts/dataset-electron-acceptance.cjs#L79>)
- path.join — external-or-dynamic-dispatch; [scripts/dataset-electron-acceptance.cjs:80](<../../../../../scripts/dataset-electron-acceptance.cjs#L80>)
- 33 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [scripts/dataset-electron-acceptance.cjs:172](<../../../../../scripts/dataset-electron-acceptance.cjs#L172>) — static-call-site; coverage not established.

<a id="s-262ee56ac31a13e3"></a>

## main.&lt;anonymous@14:36&gt;

[scripts/dataset-electron-acceptance.cjs:14](<../../../../../scripts/dataset-electron-acceptance.cjs#L14>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<dataset-electron-acceptance.cjs.md#s-ea2ece21528d1ae6>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| req | any | compiler-inferred | required |
| res | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 20.

- JSON.parse — external-or-dynamic-dispatch; [scripts/dataset-electron-acceptance.cjs:18](<../../../../../scripts/dataset-electron-acceptance.cjs#L18>)
- res.setHeader — external-or-dynamic-dispatch; [scripts/dataset-electron-acceptance.cjs:19](<../../../../../scripts/dataset-electron-acceptance.cjs#L19>)
- res.end — external-or-dynamic-dispatch; [scripts/dataset-electron-acceptance.cjs:21](<../../../../../scripts/dataset-electron-acceptance.cjs#L21>)
- JSON.stringify — external-or-dynamic-dispatch; [scripts/dataset-electron-acceptance.cjs:22](<../../../../../scripts/dataset-electron-acceptance.cjs#L22>)
- res.end — external-or-dynamic-dispatch; [scripts/dataset-electron-acceptance.cjs:29](<../../../../../scripts/dataset-electron-acceptance.cjs#L29>)
- JSON.stringify — external-or-dynamic-dispatch; [scripts/dataset-electron-acceptance.cjs:30](<../../../../../scripts/dataset-electron-acceptance.cjs#L30>)
- res.end — external-or-dynamic-dispatch; [scripts/dataset-electron-acceptance.cjs:36](<../../../../../scripts/dataset-electron-acceptance.cjs#L36>)
- JSON.stringify — external-or-dynamic-dispatch; [scripts/dataset-electron-acceptance.cjs:36](<../../../../../scripts/dataset-electron-acceptance.cjs#L36>)
- 12 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-40c926c7702381c0"></a>

## main.&lt;anonymous@99:37&gt;

[scripts/dataset-electron-acceptance.cjs:99](<../../../../../scripts/dataset-electron-acceptance.cjs#L99>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<dataset-electron-acceptance.cjs.md#s-ea2ece21528d1ae6>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| data | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- process.stderr.write — external-or-dynamic-dispatch; [scripts/dataset-electron-acceptance.cjs:99](<../../../../../scripts/dataset-electron-acceptance.cjs#L99>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-f941a0298f6f1492"></a>

## main.&lt;anonymous@102:32&gt;

[scripts/dataset-electron-acceptance.cjs:102](<../../../../../scripts/dataset-electron-acceptance.cjs#L102>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<dataset-electron-acceptance.cjs.md#s-ea2ece21528d1ae6>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- Boolean — external-or-dynamic-dispatch; [scripts/dataset-electron-acceptance.cjs:102](<../../../../../scripts/dataset-electron-acceptance.cjs#L102>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-68cc83a8ebb76fb6"></a>

## main.&lt;anonymous@104:40&gt;

[scripts/dataset-electron-acceptance.cjs:104](<../../../../../scripts/dataset-electron-acceptance.cjs#L104>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<dataset-electron-acceptance.cjs.md#s-ea2ece21528d1ae6>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 8.

- desktop.ai.handshake — external-or-dynamic-dispatch; [scripts/dataset-electron-acceptance.cjs:106](<../../../../../scripts/dataset-electron-acceptance.cjs#L106>)
- desktop.ai.settings — external-or-dynamic-dispatch; [scripts/dataset-electron-acceptance.cjs:107](<../../../../../scripts/dataset-electron-acceptance.cjs#L107>)
- desktop.context.add — external-or-dynamic-dispatch; [scripts/dataset-electron-acceptance.cjs:108](<../../../../../scripts/dataset-electron-acceptance.cjs#L108>)
- desktop.ai.saveContextBox — external-or-dynamic-dispatch; [scripts/dataset-electron-acceptance.cjs:110](<../../../../../scripts/dataset-electron-acceptance.cjs#L110>)
- desktop.ai.createConversation — external-or-dynamic-dispatch; [scripts/dataset-electron-acceptance.cjs:113](<../../../../../scripts/dataset-electron-acceptance.cjs#L113>)
- crypto.randomUUID — external-or-dynamic-dispatch; [scripts/dataset-electron-acceptance.cjs:115](<../../../../../scripts/dataset-electron-acceptance.cjs#L115>)
- desktop.ai.chat — external-or-dynamic-dispatch; [scripts/dataset-electron-acceptance.cjs:117](<../../../../../scripts/dataset-electron-acceptance.cjs#L117>)
- crypto.randomUUID — external-or-dynamic-dispatch; [scripts/dataset-electron-acceptance.cjs:121](<../../../../../scripts/dataset-electron-acceptance.cjs#L121>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-4dfc2fada2611fdd"></a>

## &lt;anonymous@172:14&gt;

[scripts/dataset-electron-acceptance.cjs:172](<../../../../../scripts/dataset-electron-acceptance.cjs#L172>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/dataset-electron-acceptance.cjs](<dataset-electron-acceptance.cjs.md#s-ae44a2c83e598856>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| error | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- process.stderr.write — external-or-dynamic-dispatch; [scripts/dataset-electron-acceptance.cjs:173](<../../../../../scripts/dataset-electron-acceptance.cjs#L173>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
