# scripts/fixtures/chronoz-trigger.cjs: symbols

[Atlas](<../../../../README.md>) / [Development and acceptance tooling](<../../../../modules/tooling.md>) / [scripts/fixtures/chronoz-trigger.cjs:1](<../../../../../../scripts/fixtures/chronoz-trigger.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/fixtures/chronoz-trigger.cjs](<chronoz-trigger.cjs.md#s-4528f7479b8f5c59>) (Module)
- [&lt;anonymous@9:26&gt;](<chronoz-trigger.cjs.md#s-d1074c9a62a0e5ac>) (ArrowFunction)
- [&lt;anonymous@10:25&gt;](<chronoz-trigger.cjs.md#s-77ed565466ded663>) (ArrowFunction)
- [&lt;anonymous@10:25&gt;.&lt;anonymous@12:50&gt;](<chronoz-trigger.cjs.md#s-2f453f0e4bf9f62a>) (ArrowFunction)

<a id="s-4528f7479b8f5c59"></a>

## scripts/fixtures/chronoz-trigger.cjs

[scripts/fixtures/chronoz-trigger.cjs:1](<../../../../../../scripts/fixtures/chronoz-trigger.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 7.

- require — module-loader; [scripts/fixtures/chronoz-trigger.cjs:2](<../../../../../../scripts/fixtures/chronoz-trigger.cjs#L2>)
- require — module-loader; [scripts/fixtures/chronoz-trigger.cjs:3](<../../../../../../scripts/fixtures/chronoz-trigger.cjs#L3>)
- JSON.parse — external-or-dynamic-dispatch; [scripts/fixtures/chronoz-trigger.cjs:5](<../../../../../../scripts/fixtures/chronoz-trigger.cjs#L5>)
- fs.readFileSync — external-or-dynamic-dispatch; [scripts/fixtures/chronoz-trigger.cjs:6](<../../../../../../scripts/fixtures/chronoz-trigger.cjs#L6>)
- path.join — external-or-dynamic-dispatch; [scripts/fixtures/chronoz-trigger.cjs:6](<../../../../../../scripts/fixtures/chronoz-trigger.cjs#L6>)
- process.stdin.on — external-or-dynamic-dispatch; [scripts/fixtures/chronoz-trigger.cjs:9](<../../../../../../scripts/fixtures/chronoz-trigger.cjs#L9>)
- process.stdin.on — external-or-dynamic-dispatch; [scripts/fixtures/chronoz-trigger.cjs:10](<../../../../../../scripts/fixtures/chronoz-trigger.cjs#L10>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d1074c9a62a0e5ac"></a>

## &lt;anonymous@9:26&gt;

[scripts/fixtures/chronoz-trigger.cjs:9](<../../../../../../scripts/fixtures/chronoz-trigger.cjs#L9>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/fixtures/chronoz-trigger.cjs](<chronoz-trigger.cjs.md#s-4528f7479b8f5c59>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| chunk | any | compiler-inferred | required |

Returns: string (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-77ed565466ded663"></a>

## &lt;anonymous@10:25&gt;

[scripts/fixtures/chronoz-trigger.cjs:10](<../../../../../../scripts/fixtures/chronoz-trigger.cjs#L10>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/fixtures/chronoz-trigger.cjs](<chronoz-trigger.cjs.md#s-4528f7479b8f5c59>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 13.

- JSON.parse — external-or-dynamic-dispatch; [scripts/fixtures/chronoz-trigger.cjs:11](<../../../../../../scripts/fixtures/chronoz-trigger.cjs#L11>)
- setTimeout — external-or-dynamic-dispatch; [scripts/fixtures/chronoz-trigger.cjs:12](<../../../../../../scripts/fixtures/chronoz-trigger.cjs#L12>)
- process.stdout.write — external-or-dynamic-dispatch; [scripts/fixtures/chronoz-trigger.cjs:13](<../../../../../../scripts/fixtures/chronoz-trigger.cjs#L13>)
- "x".repeat — external-or-dynamic-dispatch; [scripts/fixtures/chronoz-trigger.cjs:13](<../../../../../../scripts/fixtures/chronoz-trigger.cjs#L13>)
- process.stderr.write — external-or-dynamic-dispatch; [scripts/fixtures/chronoz-trigger.cjs:14](<../../../../../../scripts/fixtures/chronoz-trigger.cjs#L14>)
- "x".repeat — external-or-dynamic-dispatch; [scripts/fixtures/chronoz-trigger.cjs:14](<../../../../../../scripts/fixtures/chronoz-trigger.cjs#L14>)
- process.stdout.write — external-or-dynamic-dispatch; [scripts/fixtures/chronoz-trigger.cjs:16](<../../../../../../scripts/fixtures/chronoz-trigger.cjs#L16>)
- process.stdout.write — external-or-dynamic-dispatch; [scripts/fixtures/chronoz-trigger.cjs:17](<../../../../../../scripts/fixtures/chronoz-trigger.cjs#L17>)
- 5 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-2f453f0e4bf9f62a"></a>

## &lt;anonymous@10:25&gt;.&lt;anonymous@12:50&gt;

[scripts/fixtures/chronoz-trigger.cjs:12](<../../../../../../scripts/fixtures/chronoz-trigger.cjs#L12>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@10:25&gt;](<chronoz-trigger.cjs.md#s-77ed565466ded663>).

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
