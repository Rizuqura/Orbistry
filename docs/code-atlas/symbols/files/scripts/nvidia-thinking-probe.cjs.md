# scripts/nvidia-thinking-probe.cjs: symbols

[Atlas](<../../../README.md>) / [Development and acceptance tooling](<../../../modules/tooling.md>) / [scripts/nvidia-thinking-probe.cjs:1](<../../../../../scripts/nvidia-thinking-probe.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/nvidia-thinking-probe.cjs](<nvidia-thinking-probe.cjs.md#s-a6fb467618da8023>) (Module)
- [main](<nvidia-thinking-probe.cjs.md#s-7b46bbade6f8a4ee>) (FunctionDeclaration)
- [main.&lt;anonymous@16:27&gt;](<nvidia-thinking-probe.cjs.md#s-804f971673664346>) (ArrowFunction)
- [main.&lt;anonymous@32:9&gt;](<nvidia-thinking-probe.cjs.md#s-57b9b8291f29a83d>) (ArrowFunction)
- [&lt;anonymous@54:14&gt;](<nvidia-thinking-probe.cjs.md#s-b998b4966a8f96e7>) (ArrowFunction)

<a id="s-a6fb467618da8023"></a>

## scripts/nvidia-thinking-probe.cjs

[scripts/nvidia-thinking-probe.cjs:1](<../../../../../scripts/nvidia-thinking-probe.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

- [main](<nvidia-thinking-probe.cjs.md#s-7b46bbade6f8a4ee>) — [scripts/nvidia-thinking-probe.cjs:54](<../../../../../scripts/nvidia-thinking-probe.cjs#L54>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- require — module-loader; [scripts/nvidia-thinking-probe.cjs:2](<../../../../../scripts/nvidia-thinking-probe.cjs#L2>)
- require — module-loader; [scripts/nvidia-thinking-probe.cjs:3](<../../../../../scripts/nvidia-thinking-probe.cjs#L3>)
- require — module-loader; [scripts/nvidia-thinking-probe.cjs:4](<../../../../../scripts/nvidia-thinking-probe.cjs#L4>)
- require — module-loader; [scripts/nvidia-thinking-probe.cjs:5](<../../../../../scripts/nvidia-thinking-probe.cjs#L5>)
- main().catch — external-or-dynamic-dispatch; [scripts/nvidia-thinking-probe.cjs:54](<../../../../../scripts/nvidia-thinking-probe.cjs#L54>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-7b46bbade6f8a4ee"></a>

## main

[scripts/nvidia-thinking-probe.cjs:6](<../../../../../scripts/nvidia-thinking-probe.cjs#L6>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/nvidia-thinking-probe.cjs](<nvidia-thinking-probe.cjs.md#s-a6fb467618da8023>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [scripts/nvidia-thinking-probe.cjs](<nvidia-thinking-probe.cjs.md#s-a6fb467618da8023>) — [scripts/nvidia-thinking-probe.cjs:54](<../../../../../scripts/nvidia-thinking-probe.cjs#L54>)

Unresolved / external call sites: 24.

- fs.mkdtemp — external-or-dynamic-dispatch; [scripts/nvidia-thinking-probe.cjs:7](<../../../../../scripts/nvidia-thinking-probe.cjs#L7>)
- path.join — external-or-dynamic-dispatch; [scripts/nvidia-thinking-probe.cjs:8](<../../../../../scripts/nvidia-thinking-probe.cjs#L8>)
- os.tmpdir — external-or-dynamic-dispatch; [scripts/nvidia-thinking-probe.cjs:8](<../../../../../scripts/nvidia-thinking-probe.cjs#L8>)
- path.join — external-or-dynamic-dispatch; [scripts/nvidia-thinking-probe.cjs:14](<../../../../../scripts/nvidia-thinking-probe.cjs#L14>)
- process.argv.find((a) =&gt; a.startsWith("--model="))?.slice — external-or-dynamic-dispatch; [scripts/nvidia-thinking-probe.cjs:16](<../../../../../scripts/nvidia-thinking-probe.cjs#L16>)
- process.argv.find — external-or-dynamic-dispatch; [scripts/nvidia-thinking-probe.cjs:16](<../../../../../scripts/nvidia-thinking-probe.cjs#L16>)
- electron.launch — external-or-dynamic-dispatch; [scripts/nvidia-thinking-probe.cjs:21](<../../../../../scripts/nvidia-thinking-probe.cjs#L21>)
- path.resolve — external-or-dynamic-dispatch; [scripts/nvidia-thinking-probe.cjs:23](<../../../../../scripts/nvidia-thinking-probe.cjs#L23>)
- 16 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-804f971673664346"></a>

## main.&lt;anonymous@16:27&gt;

[scripts/nvidia-thinking-probe.cjs:16](<../../../../../scripts/nvidia-thinking-probe.cjs#L16>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<nvidia-thinking-probe.cjs.md#s-7b46bbade6f8a4ee>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| a | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- a.startsWith — external-or-dynamic-dispatch; [scripts/nvidia-thinking-probe.cjs:16](<../../../../../scripts/nvidia-thinking-probe.cjs#L16>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-57b9b8291f29a83d"></a>

## main.&lt;anonymous@32:9&gt;

[scripts/nvidia-thinking-probe.cjs:32](<../../../../../scripts/nvidia-thinking-probe.cjs#L32>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<nvidia-thinking-probe.cjs.md#s-7b46bbade6f8a4ee>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| _ | any | compiler-inferred | required |
| value | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [run](<nvidia-thinking-probe-main.cjs.md#s-ef80f167de71030d>) — [scripts/nvidia-thinking-probe.cjs:32](<../../../../../scripts/nvidia-thinking-probe.cjs#L32>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-b998b4966a8f96e7"></a>

## &lt;anonymous@54:14&gt;

[scripts/nvidia-thinking-probe.cjs:54](<../../../../../scripts/nvidia-thinking-probe.cjs#L54>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/nvidia-thinking-probe.cjs](<nvidia-thinking-probe.cjs.md#s-a6fb467618da8023>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- console.error — external-or-dynamic-dispatch; [scripts/nvidia-thinking-probe.cjs:55](<../../../../../scripts/nvidia-thinking-probe.cjs#L55>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
