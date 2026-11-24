# electron/engines/runtime/worker.cjs: symbols

[Atlas](<../../../../../README.md>) / [Engine package registry](<../../../../../modules/engine-registry.md>) / [electron/engines/runtime/worker.cjs:1](<../../../../../../../electron/engines/runtime/worker.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/engines/runtime/worker.cjs](<worker.cjs.md#s-f0cf985317b26cb8>) (Module)
- [main](<worker.cjs.md#s-fb07682c5c8192d8>) (FunctionDeclaration)
- [main.&lt;anonymous@17:5&gt;](<worker.cjs.md#s-a6629a350c6522d0>) (ArrowFunction)
- [main.&lt;anonymous@22:63&gt;](<worker.cjs.md#s-3290b53da56871fc>) (ArrowFunction)
- [&lt;anonymous@43:14&gt;](<worker.cjs.md#s-d58077750378e7d6>) (ArrowFunction)

<a id="s-f0cf985317b26cb8"></a>

## electron/engines/runtime/worker.cjs

[electron/engines/runtime/worker.cjs:1](<../../../../../../../electron/engines/runtime/worker.cjs#L1>) · Module · production · [Engine package registry](<../../../../../modules/engine-registry.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

- [main](<worker.cjs.md#s-fb07682c5c8192d8>) — [electron/engines/runtime/worker.cjs:43](<../../../../../../../electron/engines/runtime/worker.cjs#L43>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- require — module-loader; [electron/engines/runtime/worker.cjs:1](<../../../../../../../electron/engines/runtime/worker.cjs#L1>)
- require — module-loader; [electron/engines/runtime/worker.cjs:2](<../../../../../../../electron/engines/runtime/worker.cjs#L2>)
- main().catch — external-or-dynamic-dispatch; [electron/engines/runtime/worker.cjs:43](<../../../../../../../electron/engines/runtime/worker.cjs#L43>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-fb07682c5c8192d8"></a>

## main

[electron/engines/runtime/worker.cjs:5](<../../../../../../../electron/engines/runtime/worker.cjs#L5>) · FunctionDeclaration · production · [Engine package registry](<../../../../../modules/engine-registry.md>)

Executes one explicitly trusted package in a dedicated process. This is fault/resource isolation, not an OS security sandbox. Only protocol JSON goes to stdout.

Purpose evidence: jsdoc.

Lexical owner: [electron/engines/runtime/worker.cjs](<worker.cjs.md#s-f0cf985317b26cb8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [parseJson](<../registry/package.cjs.md#s-fb6b0b1816d9018a>) — [electron/engines/runtime/worker.cjs:13](<../../../../../../../electron/engines/runtime/worker.cjs#L13>)
- [inspectPackage](<../registry/package.cjs.md#s-71ed017a00706142>) — [electron/engines/runtime/worker.cjs:14](<../../../../../../../electron/engines/runtime/worker.cjs#L14>)
- [validateData](<../contracts/contract.cjs.md#s-5f70c362b7bc04d9>) — [electron/engines/runtime/worker.cjs:20](<../../../../../../../electron/engines/runtime/worker.cjs#L20>)
- [validateData](<../contracts/contract.cjs.md#s-5f70c362b7bc04d9>) — [electron/engines/runtime/worker.cjs:33](<../../../../../../../electron/engines/runtime/worker.cjs#L33>)

**Called by (statically resolved):**

- [electron/engines/runtime/worker.cjs](<worker.cjs.md#s-f0cf985317b26cb8>) — [electron/engines/runtime/worker.cjs:43](<../../../../../../../electron/engines/runtime/worker.cjs#L43>)

Unresolved / external call sites: 15.

- Error — external-or-dynamic-dispatch; [electron/engines/runtime/worker.cjs:10](<../../../../../../../electron/engines/runtime/worker.cjs#L10>)
- chunks.push — external-or-dynamic-dispatch; [electron/engines/runtime/worker.cjs:11](<../../../../../../../electron/engines/runtime/worker.cjs#L11>)
- Buffer.concat — external-or-dynamic-dispatch; [electron/engines/runtime/worker.cjs:13](<../../../../../../../electron/engines/runtime/worker.cjs#L13>)
- Error — external-or-dynamic-dispatch; [electron/engines/runtime/worker.cjs:15](<../../../../../../../electron/engines/runtime/worker.cjs#L15>)
- checked.manifest.operations.find — external-or-dynamic-dispatch; [electron/engines/runtime/worker.cjs:16](<../../../../../../../electron/engines/runtime/worker.cjs#L16>)
- Error — external-or-dynamic-dispatch; [electron/engines/runtime/worker.cjs:19](<../../../../../../../electron/engines/runtime/worker.cjs#L19>)
- require — module-loader; [electron/engines/runtime/worker.cjs:23](<../../../../../../../electron/engines/runtime/worker.cjs#L23>)
- require("node:path").join — external-or-dynamic-dispatch; [electron/engines/runtime/worker.cjs:24](<../../../../../../../electron/engines/runtime/worker.cjs#L24>)
- 7 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-a6629a350c6522d0"></a>

## main.&lt;anonymous@17:5&gt;

[electron/engines/runtime/worker.cjs:17](<../../../../../../../electron/engines/runtime/worker.cjs#L17>) · ArrowFunction · production · [Engine package registry](<../../../../../modules/engine-registry.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<worker.cjs.md#s-fb07682c5c8192d8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| op | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-3290b53da56871fc"></a>

## main.&lt;anonymous@22:63&gt;

[electron/engines/runtime/worker.cjs:22](<../../../../../../../electron/engines/runtime/worker.cjs#L22>) · ArrowFunction · production · [Engine package registry](<../../../../../modules/engine-registry.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<worker.cjs.md#s-fb07682c5c8192d8>).

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

<a id="s-d58077750378e7d6"></a>

## &lt;anonymous@43:14&gt;

[electron/engines/runtime/worker.cjs:43](<../../../../../../../electron/engines/runtime/worker.cjs#L43>) · ArrowFunction · production · [Engine package registry](<../../../../../modules/engine-registry.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/engines/runtime/worker.cjs](<worker.cjs.md#s-f0cf985317b26cb8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- process.stderr.write — external-or-dynamic-dispatch; [electron/engines/runtime/worker.cjs:44](<../../../../../../../electron/engines/runtime/worker.cjs#L44>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
