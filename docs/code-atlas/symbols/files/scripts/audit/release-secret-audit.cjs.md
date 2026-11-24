# scripts/audit/release-secret-audit.cjs: symbols

[Atlas](<../../../../README.md>) / [Development and acceptance tooling](<../../../../modules/tooling.md>) / [scripts/audit/release-secret-audit.cjs:1](<../../../../../../scripts/audit/release-secret-audit.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/audit/release-secret-audit.cjs](<release-secret-audit.cjs.md#s-5054ec9ea328cfd2>) (Module)
- [inspect](<release-secret-audit.cjs.md#s-74cd34ba8e86b444>) (FunctionDeclaration)
- [inspectExport](<release-secret-audit.cjs.md#s-04361869da1aeb6f>) (FunctionDeclaration)
- [&lt;anonymous@64:15&gt;](<release-secret-audit.cjs.md#s-05a1b7ce2a43e45e>) (ArrowFunction)

<a id="s-5054ec9ea328cfd2"></a>

## scripts/audit/release-secret-audit.cjs

[scripts/audit/release-secret-audit.cjs:1](<../../../../../../scripts/audit/release-secret-audit.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

- [inspect](<release-secret-audit.cjs.md#s-74cd34ba8e86b444>) — [scripts/audit/release-secret-audit.cjs:27](<../../../../../../scripts/audit/release-secret-audit.cjs#L27>)
- [inspect](<release-secret-audit.cjs.md#s-74cd34ba8e86b444>) — [scripts/audit/release-secret-audit.cjs:39](<../../../../../../scripts/audit/release-secret-audit.cjs#L39>)
- [inspectExport](<release-secret-audit.cjs.md#s-04361869da1aeb6f>) — [scripts/audit/release-secret-audit.cjs:57](<../../../../../../scripts/audit/release-secret-audit.cjs#L57>)
- [inspect](<release-secret-audit.cjs.md#s-74cd34ba8e86b444>) — [scripts/audit/release-secret-audit.cjs:82](<../../../../../../scripts/audit/release-secret-audit.cjs#L82>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 40.

- require — module-loader; [scripts/audit/release-secret-audit.cjs:2](<../../../../../../scripts/audit/release-secret-audit.cjs#L2>)
- require — module-loader; [scripts/audit/release-secret-audit.cjs:3](<../../../../../../scripts/audit/release-secret-audit.cjs#L3>)
- require — module-loader; [scripts/audit/release-secret-audit.cjs:4](<../../../../../../scripts/audit/release-secret-audit.cjs#L4>)
- execFileSync("git", &#91;"ls-files", "-z"&#93;) .toString() .split("\\0") .filter — external-or-dynamic-dispatch; [scripts/audit/release-secret-audit.cjs:21](<../../../../../../scripts/audit/release-secret-audit.cjs#L21>)
- execFileSync("git", &#91;"ls-files", "-z"&#93;) .toString() .split — external-or-dynamic-dispatch; [scripts/audit/release-secret-audit.cjs:21](<../../../../../../scripts/audit/release-secret-audit.cjs#L21>)
- execFileSync("git", &#91;"ls-files", "-z"&#93;) .toString — external-or-dynamic-dispatch; [scripts/audit/release-secret-audit.cjs:21](<../../../../../../scripts/audit/release-secret-audit.cjs#L21>)
- execFileSync — external-or-dynamic-dispatch; [scripts/audit/release-secret-audit.cjs:21](<../../../../../../scripts/audit/release-secret-audit.cjs#L21>)
- fs.existsSync — external-or-dynamic-dispatch; [scripts/audit/release-secret-audit.cjs:26](<../../../../../../scripts/audit/release-secret-audit.cjs#L26>)
- 32 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-74cd34ba8e86b444"></a>

## inspect

[scripts/audit/release-secret-audit.cjs:13](<../../../../../../scripts/audit/release-secret-audit.cjs#L13>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/audit/release-secret-audit.cjs](<release-secret-audit.cjs.md#s-5054ec9ea328cfd2>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| buffer | any | compiler-inferred | required |
| location | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [scripts/audit/release-secret-audit.cjs](<release-secret-audit.cjs.md#s-5054ec9ea328cfd2>) — [scripts/audit/release-secret-audit.cjs:27](<../../../../../../scripts/audit/release-secret-audit.cjs#L27>)
- [scripts/audit/release-secret-audit.cjs](<release-secret-audit.cjs.md#s-5054ec9ea328cfd2>) — [scripts/audit/release-secret-audit.cjs:39](<../../../../../../scripts/audit/release-secret-audit.cjs#L39>)
- [inspectExport](<release-secret-audit.cjs.md#s-04361869da1aeb6f>) — [scripts/audit/release-secret-audit.cjs:50](<../../../../../../scripts/audit/release-secret-audit.cjs#L50>)
- [scripts/audit/release-secret-audit.cjs](<release-secret-audit.cjs.md#s-5054ec9ea328cfd2>) — [scripts/audit/release-secret-audit.cjs:82](<../../../../../../scripts/audit/release-secret-audit.cjs#L82>)

Unresolved / external call sites: 4.

- buffer.includes — external-or-dynamic-dispatch; [scripts/audit/release-secret-audit.cjs:14](<../../../../../../scripts/audit/release-secret-audit.cjs#L14>)
- buffer.toString — external-or-dynamic-dispatch; [scripts/audit/release-secret-audit.cjs:15](<../../../../../../scripts/audit/release-secret-audit.cjs#L15>)
- patterns&#91;index&#93;.test — external-or-dynamic-dispatch; [scripts/audit/release-secret-audit.cjs:18](<../../../../../../scripts/audit/release-secret-audit.cjs#L18>)
- findings.push — external-or-dynamic-dispatch; [scripts/audit/release-secret-audit.cjs:18](<../../../../../../scripts/audit/release-secret-audit.cjs#L18>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-04361869da1aeb6f"></a>

## inspectExport

[scripts/audit/release-secret-audit.cjs:43](<../../../../../../scripts/audit/release-secret-audit.cjs#L43>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/audit/release-secret-audit.cjs](<release-secret-audit.cjs.md#s-5054ec9ea328cfd2>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| directory | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [inspectExport](<release-secret-audit.cjs.md#s-04361869da1aeb6f>) — [scripts/audit/release-secret-audit.cjs:47](<../../../../../../scripts/audit/release-secret-audit.cjs#L47>)
- [inspect](<release-secret-audit.cjs.md#s-74cd34ba8e86b444>) — [scripts/audit/release-secret-audit.cjs:50](<../../../../../../scripts/audit/release-secret-audit.cjs#L50>)

**Called by (statically resolved):**

- [inspectExport](<release-secret-audit.cjs.md#s-04361869da1aeb6f>) — [scripts/audit/release-secret-audit.cjs:47](<../../../../../../scripts/audit/release-secret-audit.cjs#L47>)
- [scripts/audit/release-secret-audit.cjs](<release-secret-audit.cjs.md#s-5054ec9ea328cfd2>) — [scripts/audit/release-secret-audit.cjs:57](<../../../../../../scripts/audit/release-secret-audit.cjs#L57>)

Unresolved / external call sites: 8.

- fs.existsSync — external-or-dynamic-dispatch; [scripts/audit/release-secret-audit.cjs:44](<../../../../../../scripts/audit/release-secret-audit.cjs#L44>)
- fs.readdirSync — external-or-dynamic-dispatch; [scripts/audit/release-secret-audit.cjs:45](<../../../../../../scripts/audit/release-secret-audit.cjs#L45>)
- path.join — external-or-dynamic-dispatch; [scripts/audit/release-secret-audit.cjs:46](<../../../../../../scripts/audit/release-secret-audit.cjs#L46>)
- entry.isDirectory — external-or-dynamic-dispatch; [scripts/audit/release-secret-audit.cjs:47](<../../../../../../scripts/audit/release-secret-audit.cjs#L47>)
- entry.isFile — external-or-dynamic-dispatch; [scripts/audit/release-secret-audit.cjs:48](<../../../../../../scripts/audit/release-secret-audit.cjs#L48>)
- fs.readFileSync — external-or-dynamic-dispatch; [scripts/audit/release-secret-audit.cjs:50](<../../../../../../scripts/audit/release-secret-audit.cjs#L50>)
- path.relative — external-or-dynamic-dispatch; [scripts/audit/release-secret-audit.cjs:52](<../../../../../../scripts/audit/release-secret-audit.cjs#L52>)
- process.cwd — external-or-dynamic-dispatch; [scripts/audit/release-secret-audit.cjs:52](<../../../../../../scripts/audit/release-secret-audit.cjs#L52>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-05a1b7ce2a43e45e"></a>

## &lt;anonymous@64:15&gt;

[scripts/audit/release-secret-audit.cjs:64](<../../../../../../scripts/audit/release-secret-audit.cjs#L64>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/audit/release-secret-audit.cjs](<release-secret-audit.cjs.md#s-5054ec9ea328cfd2>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| line | any | compiler-inferred | required |

Returns: {} (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- line.slice — external-or-dynamic-dispatch; [scripts/audit/release-secret-audit.cjs:64](<../../../../../../scripts/audit/release-secret-audit.cjs#L64>)
- line.slice — external-or-dynamic-dispatch; [scripts/audit/release-secret-audit.cjs:64](<../../../../../../scripts/audit/release-secret-audit.cjs#L64>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
