# scripts/audit/audit-source.cjs: symbols

[Atlas](<../../../../README.md>) / [Development and acceptance tooling](<../../../../modules/tooling.md>) / [scripts/audit/audit-source.cjs:1](<../../../../../../scripts/audit/audit-source.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/audit/audit-source.cjs](<audit-source.cjs.md#s-18dfab6208f3e34a>) (Module)
- [auditSource](<audit-source.cjs.md#s-4af7de434a7530b4>) (FunctionDeclaration)
- [auditSource.&lt;anonymous@28:39&gt;](<audit-source.cjs.md#s-2d3cffa81d0eac41>) (ArrowFunction)
- [auditSource.visit](<audit-source.cjs.md#s-7c42916a51a1815d>) (FunctionDeclaration)

<a id="s-18dfab6208f3e34a"></a>

## scripts/audit/audit-source.cjs

[scripts/audit/audit-source.cjs:1](<../../../../../../scripts/audit/audit-source.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

- [auditSource](<audit-source.cjs.md#s-4af7de434a7530b4>) — [scripts/audit/audit-source.cjs:85](<../../../../../../scripts/audit/audit-source.cjs#L85>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 7.

- require — module-loader; [scripts/audit/audit-source.cjs:1](<../../../../../../scripts/audit/audit-source.cjs#L1>)
- require — module-loader; [scripts/audit/audit-source.cjs:2](<../../../../../../scripts/audit/audit-source.cjs#L2>)
- require — module-loader; [scripts/audit/audit-source.cjs:3](<../../../../../../scripts/audit/audit-source.cjs#L3>)
- require — module-loader; [scripts/audit/audit-source.cjs:4](<../../../../../../scripts/audit/audit-source.cjs#L4>)
- require — module-loader; [scripts/audit/audit-source.cjs:5](<../../../../../../scripts/audit/audit-source.cjs#L5>)
- console.log — external-or-dynamic-dispatch; [scripts/audit/audit-source.cjs:86](<../../../../../../scripts/audit/audit-source.cjs#L86>)
- JSON.stringify — external-or-dynamic-dispatch; [scripts/audit/audit-source.cjs:86](<../../../../../../scripts/audit/audit-source.cjs#L86>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-4af7de434a7530b4"></a>

## auditSource

[scripts/audit/audit-source.cjs:8](<../../../../../../scripts/audit/audit-source.cjs#L8>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Audits repository CommonJS syntax and literal relative imports under electron without executing application code. Dynamic imports, renderer types and runtime behavior require their separate checks.

Purpose evidence: jsdoc.

Exported as: auditSource ([scripts/audit/audit-source.cjs:1](<../../../../../../scripts/audit/audit-source.cjs#L1>)).

Lexical owner: [scripts/audit/audit-source.cjs](<audit-source.cjs.md#s-18dfab6208f3e34a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | optional, default present |

Returns: { indexedFiles: any; commonJsFilesChecked: number; literalProductionImportsChecked: number; syntaxErrors: {}; missingImports: {}; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [auditSource.visit](<audit-source.cjs.md#s-7c42916a51a1815d>) — [scripts/audit/audit-source.cjs:74](<../../../../../../scripts/audit/audit-source.cjs#L74>)

**Called by (statically resolved):**

- [scripts/audit/audit-source.cjs](<audit-source.cjs.md#s-18dfab6208f3e34a>) — [scripts/audit/audit-source.cjs:85](<../../../../../../scripts/audit/audit-source.cjs#L85>)

Unresolved / external call sites: 12.

- path.resolve — external-or-dynamic-dispatch; [scripts/audit/audit-source.cjs:8](<../../../../../../scripts/audit/audit-source.cjs#L8>)
- execFileSync( "rg", &#91; "--files", "electron", "features", "components", "scripts", "app", "types", &#93;, { cwd: root, encoding: "utf8" }, ) .trim() .split — external-or-dynamic-dispatch; [scripts/audit/audit-source.cjs:9](<../../../../../../scripts/audit/audit-source.cjs#L9>)
- execFileSync( "rg", &#91; "--files", "electron", "features", "components", "scripts", "app", "types", &#93;, { cwd: root, encoding: "utf8" }, ) .trim — external-or-dynamic-dispatch; [scripts/audit/audit-source.cjs:9](<../../../../../../scripts/audit/audit-source.cjs#L9>)
- execFileSync — external-or-dynamic-dispatch; [scripts/audit/audit-source.cjs:9](<../../../../../../scripts/audit/audit-source.cjs#L9>)
- files.filter — external-or-dynamic-dispatch; [scripts/audit/audit-source.cjs:28](<../../../../../../scripts/audit/audit-source.cjs#L28>)
- path.join — external-or-dynamic-dispatch; [scripts/audit/audit-source.cjs:29](<../../../../../../scripts/audit/audit-source.cjs#L29>)
- fs.readFileSync — external-or-dynamic-dispatch; [scripts/audit/audit-source.cjs:30](<../../../../../../scripts/audit/audit-source.cjs#L30>)
- vm.Script — external-or-dynamic-dispatch; [scripts/audit/audit-source.cjs:32](<../../../../../../scripts/audit/audit-source.cjs#L32>)
- 4 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-2d3cffa81d0eac41"></a>

## auditSource.&lt;anonymous@28:39&gt;

[scripts/audit/audit-source.cjs:28](<../../../../../../scripts/audit/audit-source.cjs#L28>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [auditSource](<audit-source.cjs.md#s-4af7de434a7530b4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| file | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- file.endsWith — external-or-dynamic-dispatch; [scripts/audit/audit-source.cjs:28](<../../../../../../scripts/audit/audit-source.cjs#L28>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-7c42916a51a1815d"></a>

## auditSource.visit

[scripts/audit/audit-source.cjs:50](<../../../../../../scripts/audit/audit-source.cjs#L50>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Visits actual require calls, excluding lookalikes embedded in comments and template text.

Purpose evidence: jsdoc.

Lexical owner: [auditSource](<audit-source.cjs.md#s-4af7de434a7530b4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| node | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [auditSource](<audit-source.cjs.md#s-4af7de434a7530b4>) — [scripts/audit/audit-source.cjs:74](<../../../../../../scripts/audit/audit-source.cjs#L74>)

Unresolved / external call sites: 9.

- ts.isCallExpression — external-or-dynamic-dispatch; [scripts/audit/audit-source.cjs:52](<../../../../../../scripts/audit/audit-source.cjs#L52>)
- ts.isIdentifier — external-or-dynamic-dispatch; [scripts/audit/audit-source.cjs:53](<../../../../../../scripts/audit/audit-source.cjs#L53>)
- ts.isStringLiteral — external-or-dynamic-dispatch; [scripts/audit/audit-source.cjs:56](<../../../../../../scripts/audit/audit-source.cjs#L56>)
- node.arguments&#91;0&#93;.text.startsWith — external-or-dynamic-dispatch; [scripts/audit/audit-source.cjs:57](<../../../../../../scripts/audit/audit-source.cjs#L57>)
- require.resolve — external-or-dynamic-dispatch; [scripts/audit/audit-source.cjs:61](<../../../../../../scripts/audit/audit-source.cjs#L61>)
- path.resolve — external-or-dynamic-dispatch; [scripts/audit/audit-source.cjs:62](<../../../../../../scripts/audit/audit-source.cjs#L62>)
- path.dirname — external-or-dynamic-dispatch; [scripts/audit/audit-source.cjs:62](<../../../../../../scripts/audit/audit-source.cjs#L62>)
- missingImports.push — external-or-dynamic-dispatch; [scripts/audit/audit-source.cjs:66](<../../../../../../scripts/audit/audit-source.cjs#L66>)
- 1 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
