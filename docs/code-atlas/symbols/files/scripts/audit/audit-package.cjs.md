# scripts/audit/audit-package.cjs: symbols

[Atlas](<../../../../README.md>) / [Development and acceptance tooling](<../../../../modules/tooling.md>) / [scripts/audit/audit-package.cjs:1](<../../../../../../scripts/audit/audit-package.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/audit/audit-package.cjs](<audit-package.cjs.md#s-5ba2cbf4cd23679d>) (Module)
- [&lt;anonymous@9:8&gt;](<audit-package.cjs.md#s-522aa98de561252b>) (ArrowFunction)
- [&lt;anonymous@12:30&gt;](<audit-package.cjs.md#s-d9e90b0c3c1b7186>) (ArrowFunction)
- [size](<audit-package.cjs.md#s-b30d58474517f908>) (FunctionDeclaration)
- [size.&lt;anonymous@49:7&gt;](<audit-package.cjs.md#s-21a0ad916a305af3>) (ArrowFunction)
- [&lt;anonymous@64:13&gt;](<audit-package.cjs.md#s-bbe000d5d7257bab>) (ArrowFunction)
- [&lt;anonymous@65:10&gt;](<audit-package.cjs.md#s-daff44e0f82879fa>) (ArrowFunction)

<a id="s-5ba2cbf4cd23679d"></a>

## scripts/audit/audit-package.cjs

[scripts/audit/audit-package.cjs:1](<../../../../../../scripts/audit/audit-package.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

- [size](<audit-package.cjs.md#s-b30d58474517f908>) — [scripts/audit/audit-package.cjs:58](<../../../../../../scripts/audit/audit-package.cjs#L58>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 35.

- require — module-loader; [scripts/audit/audit-package.cjs:1](<../../../../../../scripts/audit/audit-package.cjs#L1>)
- require — module-loader; [scripts/audit/audit-package.cjs:2](<../../../../../../scripts/audit/audit-package.cjs#L2>)
- require — module-loader; [scripts/audit/audit-package.cjs:3](<../../../../../../scripts/audit/audit-package.cjs#L3>)
- require — module-loader; [scripts/audit/audit-package.cjs:4](<../../../../../../scripts/audit/audit-package.cjs#L4>)
- path.resolve — external-or-dynamic-dispatch; [scripts/audit/audit-package.cjs:5](<../../../../../../scripts/audit/audit-package.cjs#L5>)
- path.join — external-or-dynamic-dispatch; [scripts/audit/audit-package.cjs:6](<../../../../../../scripts/audit/audit-package.cjs#L6>)
- asar .listPackage(archive) .map — external-or-dynamic-dispatch; [scripts/audit/audit-package.cjs:7](<../../../../../../scripts/audit/audit-package.cjs#L7>)
- asar .listPackage — external-or-dynamic-dispatch; [scripts/audit/audit-package.cjs:7](<../../../../../../scripts/audit/audit-package.cjs#L7>)
- 27 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-522aa98de561252b"></a>

## &lt;anonymous@9:8&gt;

[scripts/audit/audit-package.cjs:9](<../../../../../../scripts/audit/audit-package.cjs#L9>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/audit/audit-package.cjs](<audit-package.cjs.md#s-5ba2cbf4cd23679d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| entry | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- entry.replaceAll — external-or-dynamic-dispatch; [scripts/audit/audit-package.cjs:9](<../../../../../../scripts/audit/audit-package.cjs#L9>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d9e90b0c3c1b7186"></a>

## &lt;anonymous@12:30&gt;

[scripts/audit/audit-package.cjs:12](<../../../../../../scripts/audit/audit-package.cjs#L12>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/audit/audit-package.cjs](<audit-package.cjs.md#s-5ba2cbf4cd23679d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| entry | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- forbidden.test — external-or-dynamic-dispatch; [scripts/audit/audit-package.cjs:12](<../../../../../../scripts/audit/audit-package.cjs#L12>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-b30d58474517f908"></a>

## size

[scripts/audit/audit-package.cjs:45](<../../../../../../scripts/audit/audit-package.cjs#L45>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/audit/audit-package.cjs](<audit-package.cjs.md#s-5ba2cbf4cd23679d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| target | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [size.&lt;anonymous@49:7&gt;](<audit-package.cjs.md#s-21a0ad916a305af3>) — [scripts/audit/audit-package.cjs:52](<../../../../../../scripts/audit/audit-package.cjs#L52>)
- [scripts/audit/audit-package.cjs](<audit-package.cjs.md#s-5ba2cbf4cd23679d>) — [scripts/audit/audit-package.cjs:58](<../../../../../../scripts/audit/audit-package.cjs#L58>)

Unresolved / external call sites: 2.

- fs .readdirSync(target, { withFileTypes: true }) .reduce — external-or-dynamic-dispatch; [scripts/audit/audit-package.cjs:46](<../../../../../../scripts/audit/audit-package.cjs#L46>)
- fs .readdirSync — external-or-dynamic-dispatch; [scripts/audit/audit-package.cjs:46](<../../../../../../scripts/audit/audit-package.cjs#L46>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-21a0ad916a305af3"></a>

## size.&lt;anonymous@49:7&gt;

[scripts/audit/audit-package.cjs:49](<../../../../../../scripts/audit/audit-package.cjs#L49>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [size](<audit-package.cjs.md#s-b30d58474517f908>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| sum | any | compiler-inferred | required |
| entry | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [size](<audit-package.cjs.md#s-b30d58474517f908>) — [scripts/audit/audit-package.cjs:52](<../../../../../../scripts/audit/audit-package.cjs#L52>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- entry.isDirectory — external-or-dynamic-dispatch; [scripts/audit/audit-package.cjs:51](<../../../../../../scripts/audit/audit-package.cjs#L51>)
- path.join — external-or-dynamic-dispatch; [scripts/audit/audit-package.cjs:52](<../../../../../../scripts/audit/audit-package.cjs#L52>)
- fs.statSync — external-or-dynamic-dispatch; [scripts/audit/audit-package.cjs:53](<../../../../../../scripts/audit/audit-package.cjs#L53>)
- path.join — external-or-dynamic-dispatch; [scripts/audit/audit-package.cjs:53](<../../../../../../scripts/audit/audit-package.cjs#L53>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-bbe000d5d7257bab"></a>

## &lt;anonymous@64:13&gt;

[scripts/audit/audit-package.cjs:64](<../../../../../../scripts/audit/audit-package.cjs#L64>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/audit/audit-package.cjs](<audit-package.cjs.md#s-5ba2cbf4cd23679d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| name | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- /\\.(exe&#124;blockmap)$/.test — external-or-dynamic-dispatch; [scripts/audit/audit-package.cjs:64](<../../../../../../scripts/audit/audit-package.cjs#L64>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-daff44e0f82879fa"></a>

## &lt;anonymous@65:10&gt;

[scripts/audit/audit-package.cjs:65](<../../../../../../scripts/audit/audit-package.cjs#L65>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/audit/audit-package.cjs](<audit-package.cjs.md#s-5ba2cbf4cd23679d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| name | any | compiler-inferred | required |

Returns: { name: any; bytes: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- fs.statSync — external-or-dynamic-dispatch; [scripts/audit/audit-package.cjs:67](<../../../../../../scripts/audit/audit-package.cjs#L67>)
- path.join — external-or-dynamic-dispatch; [scripts/audit/audit-package.cjs:67](<../../../../../../scripts/audit/audit-package.cjs#L67>)
- path.dirname — external-or-dynamic-dispatch; [scripts/audit/audit-package.cjs:67](<../../../../../../scripts/audit/audit-package.cjs#L67>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
