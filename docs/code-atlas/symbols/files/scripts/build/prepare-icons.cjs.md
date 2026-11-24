# scripts/build/prepare-icons.cjs: symbols

[Atlas](<../../../../README.md>) / [Development and acceptance tooling](<../../../../modules/tooling.md>) / [scripts/build/prepare-icons.cjs:1](<../../../../../../scripts/build/prepare-icons.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/build/prepare-icons.cjs](<prepare-icons.cjs.md#s-1154f9e678947054>) (Module)
- [main](<prepare-icons.cjs.md#s-51564905c6600ec3>) (FunctionDeclaration)
- [main.png](<prepare-icons.cjs.md#s-f485cb2b1bad295e>) (ArrowFunction)
- [main.&lt;anonymous@30:24&gt;](<prepare-icons.cjs.md#s-d1dfd607af502c76>) (ArrowFunction)
- [main.&lt;anonymous@35:17&gt;](<prepare-icons.cjs.md#s-fb0a59fa8f96ffd1>) (ArrowFunction)
- [&lt;anonymous@53:14&gt;](<prepare-icons.cjs.md#s-5618704c1d406e70>) (ArrowFunction)

<a id="s-1154f9e678947054"></a>

## scripts/build/prepare-icons.cjs

[scripts/build/prepare-icons.cjs:1](<../../../../../../scripts/build/prepare-icons.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

- [main](<prepare-icons.cjs.md#s-51564905c6600ec3>) — [scripts/build/prepare-icons.cjs:53](<../../../../../../scripts/build/prepare-icons.cjs#L53>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- require — module-loader; [scripts/build/prepare-icons.cjs:1](<../../../../../../scripts/build/prepare-icons.cjs#L1>)
- require — module-loader; [scripts/build/prepare-icons.cjs:2](<../../../../../../scripts/build/prepare-icons.cjs#L2>)
- require — module-loader; [scripts/build/prepare-icons.cjs:3](<../../../../../../scripts/build/prepare-icons.cjs#L3>)
- main().catch — external-or-dynamic-dispatch; [scripts/build/prepare-icons.cjs:53](<../../../../../../scripts/build/prepare-icons.cjs#L53>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-51564905c6600ec3"></a>

## main

[scripts/build/prepare-icons.cjs:4](<../../../../../../scripts/build/prepare-icons.cjs#L4>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/build/prepare-icons.cjs](<prepare-icons.cjs.md#s-1154f9e678947054>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [main.png](<prepare-icons.cjs.md#s-f485cb2b1bad295e>) — [scripts/build/prepare-icons.cjs:22](<../../../../../../scripts/build/prepare-icons.cjs#L22>)
- [main.png](<prepare-icons.cjs.md#s-f485cb2b1bad295e>) — [scripts/build/prepare-icons.cjs:27](<../../../../../../scripts/build/prepare-icons.cjs#L27>)

**Called by (statically resolved):**

- [scripts/build/prepare-icons.cjs](<prepare-icons.cjs.md#s-1154f9e678947054>) — [scripts/build/prepare-icons.cjs:53](<../../../../../../scripts/build/prepare-icons.cjs#L53>)

Unresolved / external call sites: 18.

- path.resolve — external-or-dynamic-dispatch; [scripts/build/prepare-icons.cjs:5](<../../../../../../scripts/build/prepare-icons.cjs#L5>)
- loadImage — external-or-dynamic-dispatch; [scripts/build/prepare-icons.cjs:6](<../../../../../../scripts/build/prepare-icons.cjs#L6>)
- path.join — external-or-dynamic-dispatch; [scripts/build/prepare-icons.cjs:6](<../../../../../../scripts/build/prepare-icons.cjs#L6>)
- fs.mkdirSync — external-or-dynamic-dispatch; [scripts/build/prepare-icons.cjs:21](<../../../../../../scripts/build/prepare-icons.cjs#L21>)
- path.join — external-or-dynamic-dispatch; [scripts/build/prepare-icons.cjs:21](<../../../../../../scripts/build/prepare-icons.cjs#L21>)
- fs.writeFileSync — external-or-dynamic-dispatch; [scripts/build/prepare-icons.cjs:24](<../../../../../../scripts/build/prepare-icons.cjs#L24>)
- path.join — external-or-dynamic-dispatch; [scripts/build/prepare-icons.cjs:24](<../../../../../../scripts/build/prepare-icons.cjs#L24>)
- fs.writeFileSync — external-or-dynamic-dispatch; [scripts/build/prepare-icons.cjs:25](<../../../../../../scripts/build/prepare-icons.cjs#L25>)
- 10 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-f485cb2b1bad295e"></a>

## main.png

[scripts/build/prepare-icons.cjs:7](<../../../../../../scripts/build/prepare-icons.cjs#L7>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<prepare-icons.cjs.md#s-51564905c6600ec3>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| size | any | compiler-inferred | required |
| white | boolean | compiler-inferred | optional, default present |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [main](<prepare-icons.cjs.md#s-51564905c6600ec3>) — [scripts/build/prepare-icons.cjs:22](<../../../../../../scripts/build/prepare-icons.cjs#L22>)
- [main](<prepare-icons.cjs.md#s-51564905c6600ec3>) — [scripts/build/prepare-icons.cjs:27](<../../../../../../scripts/build/prepare-icons.cjs#L27>)
- [main.&lt;anonymous@30:24&gt;](<prepare-icons.cjs.md#s-d1dfd607af502c76>) — [scripts/build/prepare-icons.cjs:30](<../../../../../../scripts/build/prepare-icons.cjs#L30>)

Unresolved / external call sites: 6.

- createCanvas — external-or-dynamic-dispatch; [scripts/build/prepare-icons.cjs:8](<../../../../../../scripts/build/prepare-icons.cjs#L8>)
- c.getContext — external-or-dynamic-dispatch; [scripts/build/prepare-icons.cjs:9](<../../../../../../scripts/build/prepare-icons.cjs#L9>)
- Math.min — external-or-dynamic-dispatch; [scripts/build/prepare-icons.cjs:10](<../../../../../../scripts/build/prepare-icons.cjs#L10>)
- ctx.drawImage — external-or-dynamic-dispatch; [scripts/build/prepare-icons.cjs:13](<../../../../../../scripts/build/prepare-icons.cjs#L13>)
- ctx.fillRect — external-or-dynamic-dispatch; [scripts/build/prepare-icons.cjs:17](<../../../../../../scripts/build/prepare-icons.cjs#L17>)
- c.toBuffer — external-or-dynamic-dispatch; [scripts/build/prepare-icons.cjs:19](<../../../../../../scripts/build/prepare-icons.cjs#L19>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d1dfd607af502c76"></a>

## main.&lt;anonymous@30:24&gt;

[scripts/build/prepare-icons.cjs:30](<../../../../../../scripts/build/prepare-icons.cjs#L30>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<prepare-icons.cjs.md#s-51564905c6600ec3>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| size | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [main.png](<prepare-icons.cjs.md#s-f485cb2b1bad295e>) — [scripts/build/prepare-icons.cjs:30](<../../../../../../scripts/build/prepare-icons.cjs#L30>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-fb0a59fa8f96ffd1"></a>

## main.&lt;anonymous@35:17&gt;

[scripts/build/prepare-icons.cjs:35](<../../../../../../scripts/build/prepare-icons.cjs#L35>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<prepare-icons.cjs.md#s-51564905c6600ec3>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| size | any | compiler-inferred | required |
| index | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- header.writeUInt16LE — external-or-dynamic-dispatch; [scripts/build/prepare-icons.cjs:39](<../../../../../../scripts/build/prepare-icons.cjs#L39>)
- header.writeUInt16LE — external-or-dynamic-dispatch; [scripts/build/prepare-icons.cjs:40](<../../../../../../scripts/build/prepare-icons.cjs#L40>)
- header.writeUInt32LE — external-or-dynamic-dispatch; [scripts/build/prepare-icons.cjs:41](<../../../../../../scripts/build/prepare-icons.cjs#L41>)
- header.writeUInt32LE — external-or-dynamic-dispatch; [scripts/build/prepare-icons.cjs:42](<../../../../../../scripts/build/prepare-icons.cjs#L42>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-5618704c1d406e70"></a>

## &lt;anonymous@53:14&gt;

[scripts/build/prepare-icons.cjs:53](<../../../../../../scripts/build/prepare-icons.cjs#L53>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/build/prepare-icons.cjs](<prepare-icons.cjs.md#s-1154f9e678947054>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| error | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- console.error — external-or-dynamic-dispatch; [scripts/build/prepare-icons.cjs:54](<../../../../../../scripts/build/prepare-icons.cjs#L54>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
