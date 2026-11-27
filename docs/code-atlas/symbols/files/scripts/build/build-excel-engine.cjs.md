# scripts/build/build-excel-engine.cjs: symbols

[Atlas](<../../../../README.md>) / [Development and acceptance tooling](<../../../../modules/tooling.md>) / [scripts/build/build-excel-engine.cjs:1](<../../../../../../scripts/build/build-excel-engine.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/build/build-excel-engine.cjs](<build-excel-engine.cjs.md#s-404cc3e3d12cc0e9>) (Module)
- [dependencyManifest](<build-excel-engine.cjs.md#s-a850f57913787e2d>) (FunctionDeclaration)
- [copyDependencies](<build-excel-engine.cjs.md#s-d0f75114d535da4d>) (FunctionDeclaration)
- [checksums](<build-excel-engine.cjs.md#s-cba22f66c8f6ca49>) (FunctionDeclaration)
- [checksums.byName](<build-excel-engine.cjs.md#s-a7fa624958e9ccb5>) (FunctionExpression)
- [main](<build-excel-engine.cjs.md#s-c4423626340c2941>) (FunctionDeclaration)
- [main.&lt;anonymous@178:11&gt;](<build-excel-engine.cjs.md#s-49b83cb92787c826>) (ArrowFunction)
- [failed](<build-excel-engine.cjs.md#s-1bba0697dfe80555>) (FunctionExpression)

<a id="s-404cc3e3d12cc0e9"></a>

## scripts/build/build-excel-engine.cjs

[scripts/build/build-excel-engine.cjs:1](<../../../../../../scripts/build/build-excel-engine.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

- [main](<build-excel-engine.cjs.md#s-c4423626340c2941>) — [scripts/build/build-excel-engine.cjs:223](<../../../../../../scripts/build/build-excel-engine.cjs#L223>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 9.

- require — module-loader; [scripts/build/build-excel-engine.cjs:1](<../../../../../../scripts/build/build-excel-engine.cjs#L1>)
- require — module-loader; [scripts/build/build-excel-engine.cjs:2](<../../../../../../scripts/build/build-excel-engine.cjs#L2>)
- require — module-loader; [scripts/build/build-excel-engine.cjs:3](<../../../../../../scripts/build/build-excel-engine.cjs#L3>)
- require — module-loader; [scripts/build/build-excel-engine.cjs:4](<../../../../../../scripts/build/build-excel-engine.cjs#L4>)
- require — module-loader; [scripts/build/build-excel-engine.cjs:8](<../../../../../../scripts/build/build-excel-engine.cjs#L8>)
- require — module-loader; [scripts/build/build-excel-engine.cjs:9](<../../../../../../scripts/build/build-excel-engine.cjs#L9>)
- require — module-loader; [scripts/build/build-excel-engine.cjs:10](<../../../../../../scripts/build/build-excel-engine.cjs#L10>)
- path.resolve — external-or-dynamic-dispatch; [scripts/build/build-excel-engine.cjs:11](<../../../../../../scripts/build/build-excel-engine.cjs#L11>)
- 1 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-a850f57913787e2d"></a>

## dependencyManifest

[scripts/build/build-excel-engine.cjs:14](<../../../../../../scripts/build/build-excel-engine.cjs#L14>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Finds a dependency's own package manifest even when its exports deliberately hide package.json. Only local installed modules are resolved.

Purpose evidence: jsdoc.

Lexical owner: [scripts/build/build-excel-engine.cjs](<build-excel-engine.cjs.md#s-404cc3e3d12cc0e9>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| resolveFrom | any | compiler-inferred | required |
| name | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [copyDependencies](<build-excel-engine.cjs.md#s-d0f75114d535da4d>) — [scripts/build/build-excel-engine.cjs:39](<../../../../../../scripts/build/build-excel-engine.cjs#L39>)

Unresolved / external call sites: 9.

- resolveFrom.resolve — external-or-dynamic-dispatch; [scripts/build/build-excel-engine.cjs:16](<../../../../../../scripts/build/build-excel-engine.cjs#L16>)
- path.dirname — external-or-dynamic-dispatch; [scripts/build/build-excel-engine.cjs:20](<../../../../../../scripts/build/build-excel-engine.cjs#L20>)
- resolveFrom.resolve — external-or-dynamic-dispatch; [scripts/build/build-excel-engine.cjs:20](<../../../../../../scripts/build/build-excel-engine.cjs#L20>)
- path.dirname — external-or-dynamic-dispatch; [scripts/build/build-excel-engine.cjs:21](<../../../../../../scripts/build/build-excel-engine.cjs#L21>)
- path.join — external-or-dynamic-dispatch; [scripts/build/build-excel-engine.cjs:22](<../../../../../../scripts/build/build-excel-engine.cjs#L22>)
- JSON.parse — external-or-dynamic-dispatch; [scripts/build/build-excel-engine.cjs:24](<../../../../../../scripts/build/build-excel-engine.cjs#L24>)
- fs.readFile — external-or-dynamic-dispatch; [scripts/build/build-excel-engine.cjs:24](<../../../../../../scripts/build/build-excel-engine.cjs#L24>)
- path.dirname — external-or-dynamic-dispatch; [scripts/build/build-excel-engine.cjs:29](<../../../../../../scripts/build/build-excel-engine.cjs#L29>)
- 1 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d0f75114d535da4d"></a>

## copyDependencies

[scripts/build/build-excel-engine.cjs:35](<../../../../../../scripts/build/build-excel-engine.cjs#L35>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Copies declared runtime dependencies with licenses, rejecting version collisions rather than silently producing an ambiguous standalone package.

Purpose evidence: jsdoc.

Exported as: copyDependencies ([scripts/build/build-excel-engine.cjs:1](<../../../../../../scripts/build/build-excel-engine.cjs#L1>)).

Lexical owner: [scripts/build/build-excel-engine.cjs](<build-excel-engine.cjs.md#s-404cc3e3d12cc0e9>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| manifestPath | any | compiler-inferred | required |
| destination | any | compiler-inferred | required |
| copied | any | compiler-inferred | optional, default present |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [dependencyManifest](<build-excel-engine.cjs.md#s-a850f57913787e2d>) — [scripts/build/build-excel-engine.cjs:39](<../../../../../../scripts/build/build-excel-engine.cjs#L39>)
- [copyDependencies](<build-excel-engine.cjs.md#s-d0f75114d535da4d>) — [scripts/build/build-excel-engine.cjs:52](<../../../../../../scripts/build/build-excel-engine.cjs#L52>)

**Called by (statically resolved):**

- [main](<../build-daily-price-engine.cjs.md#s-ff5ef06e63aa8ff4>) — [scripts/build-daily-price-engine.cjs:31](<../../../../../../scripts/build-daily-price-engine.cjs#L31>)
- [copyDependencies](<build-excel-engine.cjs.md#s-d0f75114d535da4d>) — [scripts/build/build-excel-engine.cjs:52](<../../../../../../scripts/build/build-excel-engine.cjs#L52>)
- [main](<build-excel-engine.cjs.md#s-c4423626340c2941>) — [scripts/build/build-excel-engine.cjs:98](<../../../../../../scripts/build/build-excel-engine.cjs#L98>)
- [main](<build-yahoo-financials-engine.cjs.md#s-226388a0515524ab>) — [scripts/build/build-yahoo-financials-engine.cjs:53](<../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L53>)

Unresolved / external call sites: 15.

- Map — external-or-dynamic-dispatch; [scripts/build/build-excel-engine.cjs:35](<../../../../../../scripts/build/build-excel-engine.cjs#L35>)
- JSON.parse — external-or-dynamic-dispatch; [scripts/build/build-excel-engine.cjs:36](<../../../../../../scripts/build/build-excel-engine.cjs#L36>)
- fs.readFile — external-or-dynamic-dispatch; [scripts/build/build-excel-engine.cjs:36](<../../../../../../scripts/build/build-excel-engine.cjs#L36>)
- createRequire — external-or-dynamic-dispatch; [scripts/build/build-excel-engine.cjs:37](<../../../../../../scripts/build/build-excel-engine.cjs#L37>)
- Object.keys — external-or-dynamic-dispatch; [scripts/build/build-excel-engine.cjs:38](<../../../../../../scripts/build/build-excel-engine.cjs#L38>)
- JSON.parse — external-or-dynamic-dispatch; [scripts/build/build-excel-engine.cjs:40](<../../../../../../scripts/build/build-excel-engine.cjs#L40>)
- fs.readFile — external-or-dynamic-dispatch; [scripts/build/build-excel-engine.cjs:40](<../../../../../../scripts/build/build-excel-engine.cjs#L40>)
- copied.has — external-or-dynamic-dispatch; [scripts/build/build-excel-engine.cjs:41](<../../../../../../scripts/build/build-excel-engine.cjs#L41>)
- 7 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-cba22f66c8f6ca49"></a>

## checksums

[scripts/build/build-excel-engine.cjs:58](<../../../../../../scripts/build/build-excel-engine.cjs#L58>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Enumerates staged package bytes in deterministic path order for a reviewable integrity manifest; linked entries are rejected.

Purpose evidence: jsdoc.

Exported as: checksums ([scripts/build/build-excel-engine.cjs:1](<../../../../../../scripts/build/build-excel-engine.cjs#L1>)).

Lexical owner: [scripts/build/build-excel-engine.cjs](<build-excel-engine.cjs.md#s-404cc3e3d12cc0e9>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| directory | any | compiler-inferred | required |
| prefix | string | compiler-inferred | optional, default present |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [checksums](<build-excel-engine.cjs.md#s-cba22f66c8f6ca49>) — [scripts/build/build-excel-engine.cjs:70](<../../../../../../scripts/build/build-excel-engine.cjs#L70>)

**Called by (statically resolved):**

- [main](<../build-daily-price-engine.cjs.md#s-ff5ef06e63aa8ff4>) — [scripts/build-daily-price-engine.cjs:55](<../../../../../../scripts/build-daily-price-engine.cjs#L55>)
- [main](<../build-daily-price-engine.cjs.md#s-ff5ef06e63aa8ff4>) — [scripts/build-daily-price-engine.cjs:98](<../../../../../../scripts/build-daily-price-engine.cjs#L98>)
- [checksums](<build-excel-engine.cjs.md#s-cba22f66c8f6ca49>) — [scripts/build/build-excel-engine.cjs:70](<../../../../../../scripts/build/build-excel-engine.cjs#L70>)
- [main](<build-excel-engine.cjs.md#s-c4423626340c2941>) — [scripts/build/build-excel-engine.cjs:114](<../../../../../../scripts/build/build-excel-engine.cjs#L114>)
- [main](<build-excel-engine.cjs.md#s-c4423626340c2941>) — [scripts/build/build-excel-engine.cjs:173](<../../../../../../scripts/build/build-excel-engine.cjs#L173>)
- [main](<build-yahoo-financials-engine.cjs.md#s-226388a0515524ab>) — [scripts/build/build-yahoo-financials-engine.cjs:74](<../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L74>)
- [main](<build-yahoo-financials-engine.cjs.md#s-226388a0515524ab>) — [scripts/build/build-yahoo-financials-engine.cjs:152](<../../../../../../scripts/build/build-yahoo-financials-engine.cjs#L152>)
- [verify](<../clean-engine-backups.cjs.md#s-243b632d010e605f>) — [scripts/clean-engine-backups.cjs:19](<../../../../../../scripts/clean-engine-backups.cjs#L19>)

Unresolved / external call sites: 11.

- ( await fs.readdir(directory, { withFileTypes: true }) ).sort — external-or-dynamic-dispatch; [scripts/build/build-excel-engine.cjs:60](<../../../../../../scripts/build/build-excel-engine.cjs#L60>)
- fs.readdir — external-or-dynamic-dispatch; [scripts/build/build-excel-engine.cjs:61](<../../../../../../scripts/build/build-excel-engine.cjs#L61>)
- path.join — external-or-dynamic-dispatch; [scripts/build/build-excel-engine.cjs:66](<../../../../../../scripts/build/build-excel-engine.cjs#L66>)
- entry.isSymbolicLink — external-or-dynamic-dispatch; [scripts/build/build-excel-engine.cjs:67](<../../../../../../scripts/build/build-excel-engine.cjs#L67>)
- Error — external-or-dynamic-dispatch; [scripts/build/build-excel-engine.cjs:68](<../../../../../../scripts/build/build-excel-engine.cjs#L68>)
- entry.isDirectory — external-or-dynamic-dispatch; [scripts/build/build-excel-engine.cjs:69](<../../../../../../scripts/build/build-excel-engine.cjs#L69>)
- Object.assign — external-or-dynamic-dispatch; [scripts/build/build-excel-engine.cjs:70](<../../../../../../scripts/build/build-excel-engine.cjs#L70>)
- createHash("sha256") .update(await fs.readFile(absolute)) .digest — external-or-dynamic-dispatch; [scripts/build/build-excel-engine.cjs:72](<../../../../../../scripts/build/build-excel-engine.cjs#L72>)
- 3 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-a7fa624958e9ccb5"></a>

## checksums.byName

[scripts/build/build-excel-engine.cjs:62](<../../../../../../scripts/build/build-excel-engine.cjs#L62>) · FunctionExpression · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [checksums](<build-excel-engine.cjs.md#s-cba22f66c8f6ca49>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| a | any | compiler-inferred | required |
| b | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- a.name.localeCompare — external-or-dynamic-dispatch; [scripts/build/build-excel-engine.cjs:63](<../../../../../../scripts/build/build-excel-engine.cjs#L63>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-c4423626340c2941"></a>

## main

[scripts/build/build-excel-engine.cjs:80](<../../../../../../scripts/build/build-excel-engine.cjs#L80>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Builds and smoke-checks a self-contained package. Explicit upgrades verify the existing manifest and preserve the old package in a sibling backup; user sources are never moved.

Purpose evidence: jsdoc.

Lexical owner: [scripts/build/build-excel-engine.cjs](<build-excel-engine.cjs.md#s-404cc3e3d12cc0e9>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [safeDirectory](<../../electron/core/persistence/json-store.cjs.md#s-429fa54bc1a890a0>) — [scripts/build/build-excel-engine.cjs:93](<../../../../../../scripts/build/build-excel-engine.cjs#L93>)
- [copyDependencies](<build-excel-engine.cjs.md#s-d0f75114d535da4d>) — [scripts/build/build-excel-engine.cjs:98](<../../../../../../scripts/build/build-excel-engine.cjs#L98>)
- [reportSection](<../report-section.cjs.md#s-832510fa6a604520>) — [scripts/build/build-excel-engine.cjs:106](<../../../../../../scripts/build/build-excel-engine.cjs#L106>)
- [checksums](<build-excel-engine.cjs.md#s-cba22f66c8f6ca49>) — [scripts/build/build-excel-engine.cjs:114](<../../../../../../scripts/build/build-excel-engine.cjs#L114>)
- [workbook](<../fixtures/excel.cjs.md#s-e5526a486067cf6f>) — [scripts/build/build-excel-engine.cjs:135](<../../../../../../scripts/build/build-excel-engine.cjs#L135>)
- [safeDirectory](<../../electron/core/persistence/json-store.cjs.md#s-429fa54bc1a890a0>) — [scripts/build/build-excel-engine.cjs:148](<../../../../../../scripts/build/build-excel-engine.cjs#L148>)
- [rejectSymlink](<../../electron/core/persistence/json-store.cjs.md#s-aaddc8aab5c0d073>) — [scripts/build/build-excel-engine.cjs:149](<../../../../../../scripts/build/build-excel-engine.cjs#L149>)
- [checksums](<build-excel-engine.cjs.md#s-cba22f66c8f6ca49>) — [scripts/build/build-excel-engine.cjs:173](<../../../../../../scripts/build/build-excel-engine.cjs#L173>)

**Called by (statically resolved):**

- [scripts/build/build-excel-engine.cjs](<build-excel-engine.cjs.md#s-404cc3e3d12cc0e9>) — [scripts/build/build-excel-engine.cjs:223](<../../../../../../scripts/build/build-excel-engine.cjs#L223>)

Unresolved / external call sites: 54.

- process.argv.slice — external-or-dynamic-dispatch; [scripts/build/build-excel-engine.cjs:81](<../../../../../../scripts/build/build-excel-engine.cjs#L81>)
- &#91;2, 3&#93;.includes — external-or-dynamic-dispatch; [scripts/build/build-excel-engine.cjs:84](<../../../../../../scripts/build/build-excel-engine.cjs#L84>)
- Error — external-or-dynamic-dispatch; [scripts/build/build-excel-engine.cjs:88](<../../../../../../scripts/build/build-excel-engine.cjs#L88>)
- path.join — external-or-dynamic-dispatch; [scripts/build/build-excel-engine.cjs:91](<../../../../../../scripts/build/build-excel-engine.cjs#L91>)
- path.join — external-or-dynamic-dispatch; [scripts/build/build-excel-engine.cjs:92](<../../../../../../scripts/build/build-excel-engine.cjs#L92>)
- fs.mkdtemp — external-or-dynamic-dispatch; [scripts/build/build-excel-engine.cjs:94](<../../../../../../scripts/build/build-excel-engine.cjs#L94>)
- path.join — external-or-dynamic-dispatch; [scripts/build/build-excel-engine.cjs:95](<../../../../../../scripts/build/build-excel-engine.cjs#L95>)
- fs.cp — external-or-dynamic-dispatch; [scripts/build/build-excel-engine.cjs:97](<../../../../../../scripts/build/build-excel-engine.cjs#L97>)
- 46 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-49b83cb92787c826"></a>

## main.&lt;anonymous@178:11&gt;

[scripts/build/build-excel-engine.cjs:178](<../../../../../../scripts/build/build-excel-engine.cjs#L178>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<build-excel-engine.cjs.md#s-c4423626340c2941>).

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

<a id="s-1bba0697dfe80555"></a>

## failed

[scripts/build/build-excel-engine.cjs:223](<../../../../../../scripts/build/build-excel-engine.cjs#L223>) · FunctionExpression · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/build/build-excel-engine.cjs](<build-excel-engine.cjs.md#s-404cc3e3d12cc0e9>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| error | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- console.error — external-or-dynamic-dispatch; [scripts/build/build-excel-engine.cjs:224](<../../../../../../scripts/build/build-excel-engine.cjs#L224>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
