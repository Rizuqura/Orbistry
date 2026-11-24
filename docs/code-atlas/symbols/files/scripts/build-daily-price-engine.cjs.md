# scripts/build-daily-price-engine.cjs: symbols

[Atlas](<../../../README.md>) / [Development and acceptance tooling](<../../../modules/tooling.md>) / [scripts/build-daily-price-engine.cjs:1](<../../../../../scripts/build-daily-price-engine.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/build-daily-price-engine.cjs](<build-daily-price-engine.cjs.md#s-38fdb2fd87391e02>) (Module)
- [main](<build-daily-price-engine.cjs.md#s-ff5ef06e63aa8ff4>) (FunctionDeclaration)
- [main.&lt;anonymous@105:11&gt;](<build-daily-price-engine.cjs.md#s-58015240a652f5ca>) (ArrowFunction)
- [failed](<build-daily-price-engine.cjs.md#s-103168b82006dca9>) (FunctionExpression)

<a id="s-38fdb2fd87391e02"></a>

## scripts/build-daily-price-engine.cjs

[scripts/build-daily-price-engine.cjs:1](<../../../../../scripts/build-daily-price-engine.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

- [main](<build-daily-price-engine.cjs.md#s-ff5ef06e63aa8ff4>) — [scripts/build-daily-price-engine.cjs:148](<../../../../../scripts/build-daily-price-engine.cjs#L148>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 6.

- require — module-loader; [scripts/build-daily-price-engine.cjs:1](<../../../../../scripts/build-daily-price-engine.cjs#L1>)
- require — module-loader; [scripts/build-daily-price-engine.cjs:2](<../../../../../scripts/build-daily-price-engine.cjs#L2>)
- require — module-loader; [scripts/build-daily-price-engine.cjs:3](<../../../../../scripts/build-daily-price-engine.cjs#L3>)
- require — module-loader; [scripts/build-daily-price-engine.cjs:7](<../../../../../scripts/build-daily-price-engine.cjs#L7>)
- require — module-loader; [scripts/build-daily-price-engine.cjs:11](<../../../../../scripts/build-daily-price-engine.cjs#L11>)
- main().catch — external-or-dynamic-dispatch; [scripts/build-daily-price-engine.cjs:148](<../../../../../scripts/build-daily-price-engine.cjs#L148>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-ff5ef06e63aa8ff4"></a>

## main

[scripts/build-daily-price-engine.cjs:14](<../../../../../scripts/build-daily-price-engine.cjs#L14>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

Builds a self-contained price package. Explicit upgrades verify installed files and retain a sibling package backup, preserving the separate market cache.

Purpose evidence: jsdoc.

Lexical owner: [scripts/build-daily-price-engine.cjs](<build-daily-price-engine.cjs.md#s-38fdb2fd87391e02>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [safeDirectory](<../electron/core/persistence/json-store.cjs.md#s-429fa54bc1a890a0>) — [scripts/build-daily-price-engine.cjs:28](<../../../../../scripts/build-daily-price-engine.cjs#L28>)
- [copyDependencies](<build/build-excel-engine.cjs.md#s-d0f75114d535da4d>) — [scripts/build-daily-price-engine.cjs:31](<../../../../../scripts/build-daily-price-engine.cjs#L31>)
- [checksums](<build/build-excel-engine.cjs.md#s-cba22f66c8f6ca49>) — [scripts/build-daily-price-engine.cjs:55](<../../../../../scripts/build-daily-price-engine.cjs#L55>)
- [safeDirectory](<../electron/core/persistence/json-store.cjs.md#s-429fa54bc1a890a0>) — [scripts/build-daily-price-engine.cjs:81](<../../../../../scripts/build-daily-price-engine.cjs#L81>)
- [rejectSymlink](<../electron/core/persistence/json-store.cjs.md#s-aaddc8aab5c0d073>) — [scripts/build-daily-price-engine.cjs:82](<../../../../../scripts/build-daily-price-engine.cjs#L82>)
- [checksums](<build/build-excel-engine.cjs.md#s-cba22f66c8f6ca49>) — [scripts/build-daily-price-engine.cjs:98](<../../../../../scripts/build-daily-price-engine.cjs#L98>)

**Called by (statically resolved):**

- [scripts/build-daily-price-engine.cjs](<build-daily-price-engine.cjs.md#s-38fdb2fd87391e02>) — [scripts/build-daily-price-engine.cjs:148](<../../../../../scripts/build-daily-price-engine.cjs#L148>)

Unresolved / external call sites: 52.

- process.argv.slice — external-or-dynamic-dispatch; [scripts/build-daily-price-engine.cjs:15](<../../../../../scripts/build-daily-price-engine.cjs#L15>)
- &#91;2, 3&#93;.includes — external-or-dynamic-dispatch; [scripts/build-daily-price-engine.cjs:18](<../../../../../scripts/build-daily-price-engine.cjs#L18>)
- Error — external-or-dynamic-dispatch; [scripts/build-daily-price-engine.cjs:22](<../../../../../scripts/build-daily-price-engine.cjs#L22>)
- path.resolve — external-or-dynamic-dispatch; [scripts/build-daily-price-engine.cjs:25](<../../../../../scripts/build-daily-price-engine.cjs#L25>)
- path.join — external-or-dynamic-dispatch; [scripts/build-daily-price-engine.cjs:26](<../../../../../scripts/build-daily-price-engine.cjs#L26>)
- path.join — external-or-dynamic-dispatch; [scripts/build-daily-price-engine.cjs:27](<../../../../../scripts/build-daily-price-engine.cjs#L27>)
- fs.mkdtemp — external-or-dynamic-dispatch; [scripts/build-daily-price-engine.cjs:29](<../../../../../scripts/build-daily-price-engine.cjs#L29>)
- path.join — external-or-dynamic-dispatch; [scripts/build-daily-price-engine.cjs:29](<../../../../../scripts/build-daily-price-engine.cjs#L29>)
- 44 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-58015240a652f5ca"></a>

## main.&lt;anonymous@105:11&gt;

[scripts/build-daily-price-engine.cjs:105](<../../../../../scripts/build-daily-price-engine.cjs#L105>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<build-daily-price-engine.cjs.md#s-ff5ef06e63aa8ff4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| &#91;name, hash&#93; | &#91;any, any&#93; | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-103168b82006dca9"></a>

## failed

[scripts/build-daily-price-engine.cjs:148](<../../../../../scripts/build-daily-price-engine.cjs#L148>) · FunctionExpression · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/build-daily-price-engine.cjs](<build-daily-price-engine.cjs.md#s-38fdb2fd87391e02>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| error | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- console.error — external-or-dynamic-dispatch; [scripts/build-daily-price-engine.cjs:149](<../../../../../scripts/build-daily-price-engine.cjs#L149>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
