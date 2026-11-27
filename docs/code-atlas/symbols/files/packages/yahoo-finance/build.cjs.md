# packages/yahoo-finance/build.cjs: symbols

[Atlas](<../../../../README.md>) / [Built-in Engines and data adapters](<../../../../modules/engines.md>) / [packages/yahoo-finance/build.cjs:1](<../../../../../../packages/yahoo-finance/build.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [packages/yahoo-finance/build.cjs](<build.cjs.md#s-528eb7bec812043d>) (Module)
- [build](<build.cjs.md#s-baf3ec01e83ea7d5>) (FunctionDeclaration)
- [&lt;anonymous@31:56&gt;](<build.cjs.md#s-679e762e061595eb>) (ArrowFunction)

<a id="s-528eb7bec812043d"></a>

## packages/yahoo-finance/build.cjs

[packages/yahoo-finance/build.cjs:1](<../../../../../../packages/yahoo-finance/build.cjs#L1>) · Module · configuration · [Built-in Engines and data adapters](<../../../../modules/engines.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

- [build](<build.cjs.md#s-baf3ec01e83ea7d5>) — [packages/yahoo-finance/build.cjs:31](<../../../../../../packages/yahoo-finance/build.cjs#L31>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- require — module-loader; [packages/yahoo-finance/build.cjs:1](<../../../../../../packages/yahoo-finance/build.cjs#L1>)
- require — module-loader; [packages/yahoo-finance/build.cjs:2](<../../../../../../packages/yahoo-finance/build.cjs#L2>)
- require — module-loader; [packages/yahoo-finance/build.cjs:3](<../../../../../../packages/yahoo-finance/build.cjs#L3>)
- build(path.resolve(process.argv&#91;2&#93; ?? "dist")).catch — external-or-dynamic-dispatch; [packages/yahoo-finance/build.cjs:31](<../../../../../../packages/yahoo-finance/build.cjs#L31>)
- path.resolve — external-or-dynamic-dispatch; [packages/yahoo-finance/build.cjs:31](<../../../../../../packages/yahoo-finance/build.cjs#L31>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/yahoo-package-lifecycle.cjs:5](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L5>) — file-import-only; coverage not established.

<a id="s-baf3ec01e83ea7d5"></a>

## build

[packages/yahoo-finance/build.cjs:5](<../../../../../../packages/yahoo-finance/build.cjs#L5>) · FunctionDeclaration · configuration · [Built-in Engines and data adapters](<../../../../modules/engines.md>)

Bundles pinned dependencies and seals exact runtime bytes. The destination must be a fresh directory.

Purpose evidence: jsdoc.

Exported as: build ([packages/yahoo-finance/build.cjs:1](<../../../../../../packages/yahoo-finance/build.cjs#L1>)).

Lexical owner: [packages/yahoo-finance/build.cjs](<build.cjs.md#s-528eb7bec812043d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| directory | any | compiler-inferred | required |
| plugins | {} | compiler-inferred | optional, default present |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [packages/yahoo-finance/build.cjs](<build.cjs.md#s-528eb7bec812043d>) — [packages/yahoo-finance/build.cjs:31](<../../../../../../packages/yahoo-finance/build.cjs#L31>)
- [main](<../../scripts/acceptance/yahoo-package-lifecycle.cjs.md#s-a519dde3e44c97fd>) — [scripts/acceptance/yahoo-package-lifecycle.cjs:29](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L29>)

Unresolved / external call sites: 14.

- require("esbuild").build — external-or-dynamic-dispatch; [packages/yahoo-finance/build.cjs:6](<../../../../../../packages/yahoo-finance/build.cjs#L6>)
- require — module-loader; [packages/yahoo-finance/build.cjs:6](<../../../../../../packages/yahoo-finance/build.cjs#L6>)
- path.join — external-or-dynamic-dispatch; [packages/yahoo-finance/build.cjs:8](<../../../../../../packages/yahoo-finance/build.cjs#L8>)
- structuredClone — external-or-dynamic-dispatch; [packages/yahoo-finance/build.cjs:18](<../../../../../../packages/yahoo-finance/build.cjs#L18>)
- require — module-loader; [packages/yahoo-finance/build.cjs:18](<../../../../../../packages/yahoo-finance/build.cjs#L18>)
- createHash("sha256").update(bytes).digest — external-or-dynamic-dispatch; [packages/yahoo-finance/build.cjs:20](<../../../../../../packages/yahoo-finance/build.cjs#L20>)
- createHash("sha256").update — external-or-dynamic-dispatch; [packages/yahoo-finance/build.cjs:20](<../../../../../../packages/yahoo-finance/build.cjs#L20>)
- createHash — external-or-dynamic-dispatch; [packages/yahoo-finance/build.cjs:20](<../../../../../../packages/yahoo-finance/build.cjs#L20>)
- 6 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [scripts/acceptance/yahoo-package-lifecycle.cjs:29](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L29>) — static-call-site; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:5](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L5>) — file-import-only; coverage not established.

<a id="s-679e762e061595eb"></a>

## &lt;anonymous@31:56&gt;

[packages/yahoo-finance/build.cjs:31](<../../../../../../packages/yahoo-finance/build.cjs#L31>) · ArrowFunction · configuration · [Built-in Engines and data adapters](<../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [packages/yahoo-finance/build.cjs](<build.cjs.md#s-528eb7bec812043d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| error | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- console.error — external-or-dynamic-dispatch; [packages/yahoo-finance/build.cjs:32](<../../../../../../packages/yahoo-finance/build.cjs#L32>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/yahoo-package-lifecycle.cjs:5](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L5>) — file-import-only; coverage not established.
