# scripts/clean-engine-backups.cjs: symbols

[Atlas](<../../../README.md>) / [Development and acceptance tooling](<../../../modules/tooling.md>) / [scripts/clean-engine-backups.cjs:1](<../../../../../scripts/clean-engine-backups.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/clean-engine-backups.cjs](<clean-engine-backups.cjs.md#s-3482a20fb6249c52>) (Module)
- [verify](<clean-engine-backups.cjs.md#s-243b632d010e605f>) (FunctionDeclaration)
- [verify.&lt;anonymous@24:7&gt;](<clean-engine-backups.cjs.md#s-fdbe51dad7946ee3>) (ArrowFunction)
- [planCleanup](<clean-engine-backups.cjs.md#s-9fdf038c44152d4f>) (FunctionDeclaration)
- [main](<clean-engine-backups.cjs.md#s-5cdd86a3764396b0>) (FunctionDeclaration)
- [failed](<clean-engine-backups.cjs.md#s-68248a6ee0481c96>) (FunctionExpression)

<a id="s-3482a20fb6249c52"></a>

## scripts/clean-engine-backups.cjs

[scripts/clean-engine-backups.cjs:1](<../../../../../scripts/clean-engine-backups.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

- [main](<clean-engine-backups.cjs.md#s-5cdd86a3764396b0>) — [scripts/clean-engine-backups.cjs:103](<../../../../../scripts/clean-engine-backups.cjs#L103>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- require — module-loader; [scripts/clean-engine-backups.cjs:1](<../../../../../scripts/clean-engine-backups.cjs#L1>)
- require — module-loader; [scripts/clean-engine-backups.cjs:2](<../../../../../scripts/clean-engine-backups.cjs#L2>)
- require — module-loader; [scripts/clean-engine-backups.cjs:3](<../../../../../scripts/clean-engine-backups.cjs#L3>)
- require — module-loader; [scripts/clean-engine-backups.cjs:4](<../../../../../scripts/clean-engine-backups.cjs#L4>)
- main().catch — external-or-dynamic-dispatch; [scripts/clean-engine-backups.cjs:103](<../../../../../scripts/clean-engine-backups.cjs#L103>)

**Related tests / acceptance harnesses:**

- [electron/yahoo-engine-contract.test.cjs:15](<../../../../../electron/yahoo-engine-contract.test.cjs#L15>) — file-import-only; coverage not established.

<a id="s-243b632d010e605f"></a>

## verify

[scripts/clean-engine-backups.cjs:8](<../../../../../scripts/clean-engine-backups.cjs#L8>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

Verifies every package byte against its manifest, rejecting altered files and links before considering removal of an obsolete backup.

Purpose evidence: jsdoc.

Lexical owner: [scripts/clean-engine-backups.cjs](<clean-engine-backups.cjs.md#s-3482a20fb6249c52>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| directory | any | compiler-inferred | required |
| id | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [rejectSymlink](<../electron/core/persistence/json-store.cjs.md#s-aaddc8aab5c0d073>) — [scripts/clean-engine-backups.cjs:9](<../../../../../scripts/clean-engine-backups.cjs#L9>)
- [rejectSymlink](<../electron/core/persistence/json-store.cjs.md#s-aaddc8aab5c0d073>) — [scripts/clean-engine-backups.cjs:11](<../../../../../scripts/clean-engine-backups.cjs#L11>)
- [checksums](<build/build-excel-engine.cjs.md#s-cba22f66c8f6ca49>) — [scripts/clean-engine-backups.cjs:19](<../../../../../scripts/clean-engine-backups.cjs#L19>)

**Called by (statically resolved):**

- [planCleanup](<clean-engine-backups.cjs.md#s-9fdf038c44152d4f>) — [scripts/clean-engine-backups.cjs:71](<../../../../../scripts/clean-engine-backups.cjs#L71>)
- [planCleanup](<clean-engine-backups.cjs.md#s-9fdf038c44152d4f>) — [scripts/clean-engine-backups.cjs:72](<../../../../../scripts/clean-engine-backups.cjs#L72>)
- [main](<clean-engine-backups.cjs.md#s-5cdd86a3764396b0>) — [scripts/clean-engine-backups.cjs:93](<../../../../../scripts/clean-engine-backups.cjs#L93>)
- [main](<clean-engine-backups.cjs.md#s-5cdd86a3764396b0>) — [scripts/clean-engine-backups.cjs:94](<../../../../../scripts/clean-engine-backups.cjs#L94>)

Unresolved / external call sites: 10.

- path.join — external-or-dynamic-dispatch; [scripts/clean-engine-backups.cjs:10](<../../../../../scripts/clean-engine-backups.cjs#L10>)
- JSON.parse — external-or-dynamic-dispatch; [scripts/clean-engine-backups.cjs:12](<../../../../../scripts/clean-engine-backups.cjs#L12>)
- fs.readFile — external-or-dynamic-dispatch; [scripts/clean-engine-backups.cjs:12](<../../../../../scripts/clean-engine-backups.cjs#L12>)
- Object.keys — external-or-dynamic-dispatch; [scripts/clean-engine-backups.cjs:16](<../../../../../scripts/clean-engine-backups.cjs#L16>)
- Error — external-or-dynamic-dispatch; [scripts/clean-engine-backups.cjs:18](<../../../../../scripts/clean-engine-backups.cjs#L18>)
- Object.keys — external-or-dynamic-dispatch; [scripts/clean-engine-backups.cjs:22](<../../../../../scripts/clean-engine-backups.cjs#L22>)
- Object.keys — external-or-dynamic-dispatch; [scripts/clean-engine-backups.cjs:22](<../../../../../scripts/clean-engine-backups.cjs#L22>)
- Object.entries(actual).some — external-or-dynamic-dispatch; [scripts/clean-engine-backups.cjs:23](<../../../../../scripts/clean-engine-backups.cjs#L23>)
- 2 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/yahoo-engine-contract.test.cjs:15](<../../../../../electron/yahoo-engine-contract.test.cjs#L15>) — file-import-only; coverage not established.

<a id="s-fdbe51dad7946ee3"></a>

## verify.&lt;anonymous@24:7&gt;

[scripts/clean-engine-backups.cjs:24](<../../../../../scripts/clean-engine-backups.cjs#L24>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verify](<clean-engine-backups.cjs.md#s-243b632d010e605f>).

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

- [electron/yahoo-engine-contract.test.cjs:15](<../../../../../electron/yahoo-engine-contract.test.cjs#L15>) — file-import-only; coverage not established.

<a id="s-9fdf038c44152d4f"></a>

## planCleanup

[scripts/clean-engine-backups.cjs:34](<../../../../../scripts/clean-engine-backups.cjs#L34>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

Plans removal only of recognized, intact installer backups whose active replacement also verifies; active engines, caches and arbitrary directories are never selected.

Purpose evidence: jsdoc.

Exported as: planCleanup ([scripts/clean-engine-backups.cjs:1](<../../../../../scripts/clean-engine-backups.cjs#L1>)).

Lexical owner: [scripts/clean-engine-backups.cjs](<clean-engine-backups.cjs.md#s-3482a20fb6249c52>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| universe | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [rejectSymlink](<../electron/core/persistence/json-store.cjs.md#s-aaddc8aab5c0d073>) — [scripts/clean-engine-backups.cjs:37](<../../../../../scripts/clean-engine-backups.cjs#L37>)
- [rejectSymlink](<../electron/core/persistence/json-store.cjs.md#s-aaddc8aab5c0d073>) — [scripts/clean-engine-backups.cjs:51](<../../../../../scripts/clean-engine-backups.cjs#L51>)
- [verify](<clean-engine-backups.cjs.md#s-243b632d010e605f>) — [scripts/clean-engine-backups.cjs:71](<../../../../../scripts/clean-engine-backups.cjs#L71>)
- [verify](<clean-engine-backups.cjs.md#s-243b632d010e605f>) — [scripts/clean-engine-backups.cjs:72](<../../../../../scripts/clean-engine-backups.cjs#L72>)

**Called by (statically resolved):**

- [&lt;anonymous@263:94&gt;.&lt;anonymous@264:12&gt;](<../electron/yahoo-engine-contract.test.cjs.md#s-79412942bec3c094>) — [electron/yahoo-engine-contract.test.cjs:291](<../../../../../electron/yahoo-engine-contract.test.cjs#L291>)
- [&lt;anonymous@263:94&gt;.&lt;anonymous@264:12&gt;](<../electron/yahoo-engine-contract.test.cjs.md#s-79412942bec3c094>) — [electron/yahoo-engine-contract.test.cjs:293](<../../../../../electron/yahoo-engine-contract.test.cjs#L293>)
- [main](<clean-engine-backups.cjs.md#s-5cdd86a3764396b0>) — [scripts/clean-engine-backups.cjs:90](<../../../../../scripts/clean-engine-backups.cjs#L90>)

Unresolved / external call sites: 21.

- fs.realpath — external-or-dynamic-dispatch; [scripts/clean-engine-backups.cjs:35](<../../../../../scripts/clean-engine-backups.cjs#L35>)
- path.join — external-or-dynamic-dispatch; [scripts/clean-engine-backups.cjs:36](<../../../../../scripts/clean-engine-backups.cjs#L36>)
- fs.readdir — external-or-dynamic-dispatch; [scripts/clean-engine-backups.cjs:39](<../../../../../scripts/clean-engine-backups.cjs#L39>)
- new RegExp(&#96;^(wonton-excel)-backup-${uuid}$&#96;, "i").exec — external-or-dynamic-dispatch; [scripts/clean-engine-backups.cjs:40](<../../../../../scripts/clean-engine-backups.cjs#L40>)
- RegExp — external-or-dynamic-dispatch; [scripts/clean-engine-backups.cjs:40](<../../../../../scripts/clean-engine-backups.cjs#L40>)
- candidates.push — external-or-dynamic-dispatch; [scripts/clean-engine-backups.cjs:44](<../../../../../scripts/clean-engine-backups.cjs#L44>)
- path.join — external-or-dynamic-dispatch; [scripts/clean-engine-backups.cjs:46](<../../../../../scripts/clean-engine-backups.cjs#L46>)
- path.join — external-or-dynamic-dispatch; [scripts/clean-engine-backups.cjs:47](<../../../../../scripts/clean-engine-backups.cjs#L47>)
- 13 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/yahoo-engine-contract.test.cjs:291](<../../../../../electron/yahoo-engine-contract.test.cjs#L291>) — static-call-site; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:293](<../../../../../electron/yahoo-engine-contract.test.cjs#L293>) — static-call-site; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:15](<../../../../../electron/yahoo-engine-contract.test.cjs#L15>) — file-import-only; coverage not established.

<a id="s-5cdd86a3764396b0"></a>

## main

[scripts/clean-engine-backups.cjs:79](<../../../../../scripts/clean-engine-backups.cjs#L79>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

Prints a reviewable plan by default; --apply revalidates each exact package immediately before removing it.

Purpose evidence: jsdoc.

Lexical owner: [scripts/clean-engine-backups.cjs](<clean-engine-backups.cjs.md#s-3482a20fb6249c52>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [planCleanup](<clean-engine-backups.cjs.md#s-9fdf038c44152d4f>) — [scripts/clean-engine-backups.cjs:90](<../../../../../scripts/clean-engine-backups.cjs#L90>)
- [verify](<clean-engine-backups.cjs.md#s-243b632d010e605f>) — [scripts/clean-engine-backups.cjs:93](<../../../../../scripts/clean-engine-backups.cjs#L93>)
- [verify](<clean-engine-backups.cjs.md#s-243b632d010e605f>) — [scripts/clean-engine-backups.cjs:94](<../../../../../scripts/clean-engine-backups.cjs#L94>)

**Called by (statically resolved):**

- [scripts/clean-engine-backups.cjs](<clean-engine-backups.cjs.md#s-3482a20fb6249c52>) — [scripts/clean-engine-backups.cjs:103](<../../../../../scripts/clean-engine-backups.cjs#L103>)

Unresolved / external call sites: 5.

- process.argv.slice — external-or-dynamic-dispatch; [scripts/clean-engine-backups.cjs:80](<../../../../../scripts/clean-engine-backups.cjs#L80>)
- Error — external-or-dynamic-dispatch; [scripts/clean-engine-backups.cjs:87](<../../../../../scripts/clean-engine-backups.cjs#L87>)
- fs.rm — external-or-dynamic-dispatch; [scripts/clean-engine-backups.cjs:95](<../../../../../scripts/clean-engine-backups.cjs#L95>)
- console.log — external-or-dynamic-dispatch; [scripts/clean-engine-backups.cjs:97](<../../../../../scripts/clean-engine-backups.cjs#L97>)
- JSON.stringify — external-or-dynamic-dispatch; [scripts/clean-engine-backups.cjs:98](<../../../../../scripts/clean-engine-backups.cjs#L98>)

**Related tests / acceptance harnesses:**

- [electron/yahoo-engine-contract.test.cjs:15](<../../../../../electron/yahoo-engine-contract.test.cjs#L15>) — file-import-only; coverage not established.

<a id="s-68248a6ee0481c96"></a>

## failed

[scripts/clean-engine-backups.cjs:103](<../../../../../scripts/clean-engine-backups.cjs#L103>) · FunctionExpression · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/clean-engine-backups.cjs](<clean-engine-backups.cjs.md#s-3482a20fb6249c52>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| error | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- console.error — external-or-dynamic-dispatch; [scripts/clean-engine-backups.cjs:104](<../../../../../scripts/clean-engine-backups.cjs#L104>)

**Related tests / acceptance harnesses:**

- [electron/yahoo-engine-contract.test.cjs:15](<../../../../../electron/yahoo-engine-contract.test.cjs#L15>) — file-import-only; coverage not established.
