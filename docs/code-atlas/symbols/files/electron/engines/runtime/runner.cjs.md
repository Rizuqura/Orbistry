# electron/engines/runtime/runner.cjs: symbols

[Atlas](<../../../../../README.md>) / [Engine package registry](<../../../../../modules/engine-registry.md>) / [electron/engines/runtime/runner.cjs:1](<../../../../../../../electron/engines/runtime/runner.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/engines/runtime/runner.cjs](<runner.cjs.md#s-aacf980f284b5caa>) (Module)
- [runPackage](<runner.cjs.md#s-9a8f4334c726b774>) (FunctionDeclaration)
- [runPackage.&lt;anonymous@12:22&gt;](<runner.cjs.md#s-059bbb0a7d1a98a0>) (ArrowFunction)
- [runPackage.&lt;anonymous@12:22&gt;.stop](<runner.cjs.md#s-5a6bba105291f758>) (ArrowFunction)
- [runPackage.&lt;anonymous@12:22&gt;.abort](<runner.cjs.md#s-cf5660917a95f55d>) (ArrowFunction)
- [runPackage.&lt;anonymous@12:22&gt;.&lt;anonymous@50:7&gt;](<runner.cjs.md#s-bdfa9950279f42c8>) (ArrowFunction)
- [runPackage.&lt;anonymous@12:22&gt;.&lt;anonymous@57:29&gt;](<runner.cjs.md#s-5a81b4f275b59156>) (ArrowFunction)
- [runPackage.&lt;anonymous@12:22&gt;.&lt;anonymous@66:29&gt;](<runner.cjs.md#s-7f41ebb07ad83b3b>) (ArrowFunction)
- [runPackage.&lt;anonymous@12:22&gt;.&lt;anonymous@74:29&gt;](<runner.cjs.md#s-879744f729b040b0>) (ArrowFunction)
- [runPackage.&lt;anonymous@12:22&gt;.&lt;anonymous@77:23&gt;](<runner.cjs.md#s-d0afd559f6176bab>) (ArrowFunction)
- [runPackage.&lt;anonymous@12:22&gt;.&lt;anonymous@80:23&gt;](<runner.cjs.md#s-1caa8432e824596f>) (ArrowFunction)

<a id="s-aacf980f284b5caa"></a>

## electron/engines/runtime/runner.cjs

[electron/engines/runtime/runner.cjs:1](<../../../../../../../electron/engines/runtime/runner.cjs#L1>) · Module · production · [Engine package registry](<../../../../../modules/engine-registry.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- require — module-loader; [electron/engines/runtime/runner.cjs:1](<../../../../../../../electron/engines/runtime/runner.cjs#L1>)
- require — module-loader; [electron/engines/runtime/runner.cjs:2](<../../../../../../../electron/engines/runtime/runner.cjs#L2>)
- require — module-loader; [electron/engines/runtime/runner.cjs:3](<../../../../../../../electron/engines/runtime/runner.cjs#L3>)
- require — module-loader; [electron/engines/runtime/runner.cjs:4](<../../../../../../../electron/engines/runtime/runner.cjs#L4>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-9a8f4334c726b774"></a>

## runPackage

[electron/engines/runtime/runner.cjs:7](<../../../../../../../electron/engines/runtime/runner.cjs#L7>) · FunctionDeclaration · production · [Engine package registry](<../../../../../modules/engine-registry.md>)

Runs the bundled protocol worker with a scrubbed environment and bounded output/deadline. Never interpolates commands into a shell; cancellation terminates the worker. Trusted plugins still execute with the user's OS permissions.

Purpose evidence: jsdoc.

Exported as: runPackage ([electron/engines/runtime/runner.cjs:1](<../../../../../../../electron/engines/runtime/runner.cjs#L1>)).

Lexical owner: [electron/engines/runtime/runner.cjs](<runner.cjs.md#s-aacf980f284b5caa>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| directory | any | compiler-inferred | required |
| request | any | compiler-inferred | required |
| operation | any | compiler-inferred | required |
| signal | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [fail](<../contracts/contract.cjs.md#s-85aeb8bea7b60d5e>) — [electron/engines/runtime/runner.cjs:11](<../../../../../../../electron/engines/runtime/runner.cjs#L11>)

**Called by (statically resolved):**

- [EnginePackageRegistry.execute](<../registry/registry.cjs.md#s-a35bb6e14bafba1e>) — [electron/engines/registry/registry.cjs:613](<../../../../../../../electron/engines/registry/registry.cjs#L613>)

Unresolved / external call sites: 5.

- signal?.throwIfAborted — external-or-dynamic-dispatch; [electron/engines/runtime/runner.cjs:8](<../../../../../../../electron/engines/runtime/runner.cjs#L8>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/engines/runtime/runner.cjs:9](<../../../../../../../electron/engines/runtime/runner.cjs#L9>)
- Buffer.byteLength — external-or-dynamic-dispatch; [electron/engines/runtime/runner.cjs:10](<../../../../../../../electron/engines/runtime/runner.cjs#L10>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/engines/runtime/runner.cjs:10](<../../../../../../../electron/engines/runtime/runner.cjs#L10>)
- Promise — external-or-dynamic-dispatch; [electron/engines/runtime/runner.cjs:12](<../../../../../../../electron/engines/runtime/runner.cjs#L12>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-059bbb0a7d1a98a0"></a>

## runPackage.&lt;anonymous@12:22&gt;

[electron/engines/runtime/runner.cjs:12](<../../../../../../../electron/engines/runtime/runner.cjs#L12>) · ArrowFunction · production · [Engine package registry](<../../../../../modules/engine-registry.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [runPackage](<runner.cjs.md#s-9a8f4334c726b774>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| resolve | any | compiler-inferred | required |
| reject | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [runPackage.&lt;anonymous@12:22&gt;.abort](<runner.cjs.md#s-cf5660917a95f55d>) — [electron/engines/runtime/runner.cjs:110](<../../../../../../../electron/engines/runtime/runner.cjs#L110>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 10.

- spawn — external-or-dynamic-dispatch; [electron/engines/runtime/runner.cjs:16](<../../../../../../../electron/engines/runtime/runner.cjs#L16>)
- path.join — external-or-dynamic-dispatch; [electron/engines/runtime/runner.cjs:20](<../../../../../../../electron/engines/runtime/runner.cjs#L20>)
- signal?.addEventListener — external-or-dynamic-dispatch; [electron/engines/runtime/runner.cjs:48](<../../../../../../../electron/engines/runtime/runner.cjs#L48>)
- setTimeout — external-or-dynamic-dispatch; [electron/engines/runtime/runner.cjs:49](<../../../../../../../electron/engines/runtime/runner.cjs#L49>)
- child.stdout.on — external-or-dynamic-dispatch; [electron/engines/runtime/runner.cjs:57](<../../../../../../../electron/engines/runtime/runner.cjs#L57>)
- child.stderr.on — external-or-dynamic-dispatch; [electron/engines/runtime/runner.cjs:66](<../../../../../../../electron/engines/runtime/runner.cjs#L66>)
- child.stdin.on — external-or-dynamic-dispatch; [electron/engines/runtime/runner.cjs:74](<../../../../../../../electron/engines/runtime/runner.cjs#L74>)
- child.on — external-or-dynamic-dispatch; [electron/engines/runtime/runner.cjs:77](<../../../../../../../electron/engines/runtime/runner.cjs#L77>)
- 2 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-5a6bba105291f758"></a>

## runPackage.&lt;anonymous@12:22&gt;.stop

[electron/engines/runtime/runner.cjs:36](<../../../../../../../electron/engines/runtime/runner.cjs#L36>) · ArrowFunction · production · [Engine package registry](<../../../../../modules/engine-registry.md>)

Stops the direct worker and closes inherited pipes so a descendant cannot hold the host's deadline/cancellation promise open.

Purpose evidence: jsdoc.

Lexical owner: [runPackage.&lt;anonymous@12:22&gt;](<runner.cjs.md#s-059bbb0a7d1a98a0>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| code | any | compiler-inferred | required |
| message | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [runPackage.&lt;anonymous@12:22&gt;.abort](<runner.cjs.md#s-cf5660917a95f55d>) — [electron/engines/runtime/runner.cjs:47](<../../../../../../../electron/engines/runtime/runner.cjs#L47>)
- [runPackage.&lt;anonymous@12:22&gt;.&lt;anonymous@50:7&gt;](<runner.cjs.md#s-bdfa9950279f42c8>) — [electron/engines/runtime/runner.cjs:51](<../../../../../../../electron/engines/runtime/runner.cjs#L51>)
- [runPackage.&lt;anonymous@12:22&gt;.&lt;anonymous@57:29&gt;](<runner.cjs.md#s-5a81b4f275b59156>) — [electron/engines/runtime/runner.cjs:60](<../../../../../../../electron/engines/runtime/runner.cjs#L60>)
- [runPackage.&lt;anonymous@12:22&gt;.&lt;anonymous@66:29&gt;](<runner.cjs.md#s-7f41ebb07ad83b3b>) — [electron/engines/runtime/runner.cjs:69](<../../../../../../../electron/engines/runtime/runner.cjs#L69>)
- [runPackage.&lt;anonymous@12:22&gt;.&lt;anonymous@77:23&gt;](<runner.cjs.md#s-d0afd559f6176bab>) — [electron/engines/runtime/runner.cjs:78](<../../../../../../../electron/engines/runtime/runner.cjs#L78>)

Unresolved / external call sites: 9.

- clearTimeout — external-or-dynamic-dispatch; [electron/engines/runtime/runner.cjs:39](<../../../../../../../electron/engines/runtime/runner.cjs#L39>)
- signal?.removeEventListener — external-or-dynamic-dispatch; [electron/engines/runtime/runner.cjs:40](<../../../../../../../electron/engines/runtime/runner.cjs#L40>)
- child.kill — external-or-dynamic-dispatch; [electron/engines/runtime/runner.cjs:41](<../../../../../../../electron/engines/runtime/runner.cjs#L41>)
- child.stdin.destroy — external-or-dynamic-dispatch; [electron/engines/runtime/runner.cjs:42](<../../../../../../../electron/engines/runtime/runner.cjs#L42>)
- child.stdout.destroy — external-or-dynamic-dispatch; [electron/engines/runtime/runner.cjs:43](<../../../../../../../electron/engines/runtime/runner.cjs#L43>)
- child.stderr.destroy — external-or-dynamic-dispatch; [electron/engines/runtime/runner.cjs:44](<../../../../../../../electron/engines/runtime/runner.cjs#L44>)
- reject — external-or-dynamic-dispatch; [electron/engines/runtime/runner.cjs:45](<../../../../../../../electron/engines/runtime/runner.cjs#L45>)
- Object.assign — external-or-dynamic-dispatch; [electron/engines/runtime/runner.cjs:45](<../../../../../../../electron/engines/runtime/runner.cjs#L45>)
- 1 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-cf5660917a95f55d"></a>

## runPackage.&lt;anonymous@12:22&gt;.abort

[electron/engines/runtime/runner.cjs:47](<../../../../../../../electron/engines/runtime/runner.cjs#L47>) · ArrowFunction · production · [Engine package registry](<../../../../../modules/engine-registry.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [runPackage.&lt;anonymous@12:22&gt;](<runner.cjs.md#s-059bbb0a7d1a98a0>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [runPackage.&lt;anonymous@12:22&gt;.stop](<runner.cjs.md#s-5a6bba105291f758>) — [electron/engines/runtime/runner.cjs:47](<../../../../../../../electron/engines/runtime/runner.cjs#L47>)

**Called by (statically resolved):**

- [runPackage.&lt;anonymous@12:22&gt;](<runner.cjs.md#s-059bbb0a7d1a98a0>) — [electron/engines/runtime/runner.cjs:110](<../../../../../../../electron/engines/runtime/runner.cjs#L110>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-bdfa9950279f42c8"></a>

## runPackage.&lt;anonymous@12:22&gt;.&lt;anonymous@50:7&gt;

[electron/engines/runtime/runner.cjs:50](<../../../../../../../electron/engines/runtime/runner.cjs#L50>) · ArrowFunction · production · [Engine package registry](<../../../../../modules/engine-registry.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [runPackage.&lt;anonymous@12:22&gt;](<runner.cjs.md#s-059bbb0a7d1a98a0>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [runPackage.&lt;anonymous@12:22&gt;.stop](<runner.cjs.md#s-5a6bba105291f758>) — [electron/engines/runtime/runner.cjs:51](<../../../../../../../electron/engines/runtime/runner.cjs#L51>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-5a81b4f275b59156"></a>

## runPackage.&lt;anonymous@12:22&gt;.&lt;anonymous@57:29&gt;

[electron/engines/runtime/runner.cjs:57](<../../../../../../../electron/engines/runtime/runner.cjs#L57>) · ArrowFunction · production · [Engine package registry](<../../../../../modules/engine-registry.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [runPackage.&lt;anonymous@12:22&gt;](<runner.cjs.md#s-059bbb0a7d1a98a0>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| chunk | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [runPackage.&lt;anonymous@12:22&gt;.stop](<runner.cjs.md#s-5a6bba105291f758>) — [electron/engines/runtime/runner.cjs:60](<../../../../../../../electron/engines/runtime/runner.cjs#L60>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- output.push — external-or-dynamic-dispatch; [electron/engines/runtime/runner.cjs:64](<../../../../../../../electron/engines/runtime/runner.cjs#L64>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-7f41ebb07ad83b3b"></a>

## runPackage.&lt;anonymous@12:22&gt;.&lt;anonymous@66:29&gt;

[electron/engines/runtime/runner.cjs:66](<../../../../../../../electron/engines/runtime/runner.cjs#L66>) · ArrowFunction · production · [Engine package registry](<../../../../../modules/engine-registry.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [runPackage.&lt;anonymous@12:22&gt;](<runner.cjs.md#s-059bbb0a7d1a98a0>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| chunk | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [runPackage.&lt;anonymous@12:22&gt;.stop](<runner.cjs.md#s-5a6bba105291f758>) — [electron/engines/runtime/runner.cjs:69](<../../../../../../../electron/engines/runtime/runner.cjs#L69>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-879744f729b040b0"></a>

## runPackage.&lt;anonymous@12:22&gt;.&lt;anonymous@74:29&gt;

[electron/engines/runtime/runner.cjs:74](<../../../../../../../electron/engines/runtime/runner.cjs#L74>) · ArrowFunction · production · [Engine package registry](<../../../../../modules/engine-registry.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [runPackage.&lt;anonymous@12:22&gt;](<runner.cjs.md#s-059bbb0a7d1a98a0>).

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

<a id="s-d0afd559f6176bab"></a>

## runPackage.&lt;anonymous@12:22&gt;.&lt;anonymous@77:23&gt;

[electron/engines/runtime/runner.cjs:77](<../../../../../../../electron/engines/runtime/runner.cjs#L77>) · ArrowFunction · production · [Engine package registry](<../../../../../modules/engine-registry.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [runPackage.&lt;anonymous@12:22&gt;](<runner.cjs.md#s-059bbb0a7d1a98a0>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [runPackage.&lt;anonymous@12:22&gt;.stop](<runner.cjs.md#s-5a6bba105291f758>) — [electron/engines/runtime/runner.cjs:78](<../../../../../../../electron/engines/runtime/runner.cjs#L78>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-1caa8432e824596f"></a>

## runPackage.&lt;anonymous@12:22&gt;.&lt;anonymous@80:23&gt;

[electron/engines/runtime/runner.cjs:80](<../../../../../../../electron/engines/runtime/runner.cjs#L80>) · ArrowFunction · production · [Engine package registry](<../../../../../modules/engine-registry.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [runPackage.&lt;anonymous@12:22&gt;](<runner.cjs.md#s-059bbb0a7d1a98a0>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| code | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [parseJson](<../registry/package.cjs.md#s-fb6b0b1816d9018a>) — [electron/engines/runtime/runner.cjs:93](<../../../../../../../electron/engines/runtime/runner.cjs#L93>)
- [fail](<../contracts/contract.cjs.md#s-85aeb8bea7b60d5e>) — [electron/engines/runtime/runner.cjs:100](<../../../../../../../electron/engines/runtime/runner.cjs#L100>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 10.

- clearTimeout — external-or-dynamic-dispatch; [electron/engines/runtime/runner.cjs:81](<../../../../../../../electron/engines/runtime/runner.cjs#L81>)
- signal?.removeEventListener — external-or-dynamic-dispatch; [electron/engines/runtime/runner.cjs:82](<../../../../../../../electron/engines/runtime/runner.cjs#L82>)
- reject — external-or-dynamic-dispatch; [electron/engines/runtime/runner.cjs:86](<../../../../../../../electron/engines/runtime/runner.cjs#L86>)
- Object.assign — external-or-dynamic-dispatch; [electron/engines/runtime/runner.cjs:87](<../../../../../../../electron/engines/runtime/runner.cjs#L87>)
- Error — external-or-dynamic-dispatch; [electron/engines/runtime/runner.cjs:88](<../../../../../../../electron/engines/runtime/runner.cjs#L88>)
- Buffer.concat — external-or-dynamic-dispatch; [electron/engines/runtime/runner.cjs:93](<../../../../../../../electron/engines/runtime/runner.cjs#L93>)
- Object.hasOwn — external-or-dynamic-dispatch; [electron/engines/runtime/runner.cjs:97](<../../../../../../../electron/engines/runtime/runner.cjs#L97>)
- Object.keys — external-or-dynamic-dispatch; [electron/engines/runtime/runner.cjs:98](<../../../../../../../electron/engines/runtime/runner.cjs#L98>)
- 2 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
