# features/worldview/coordinates.test.cjs: symbols

[Atlas](<../../../../README.md>) / [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>) / [features/worldview/coordinates.test.cjs:1](<../../../../../../features/worldview/coordinates.test.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [features/worldview/coordinates.test.cjs](<coordinates.test.cjs.md#s-80005c25ad606fd8>) (Module)
- [closePoint](<coordinates.test.cjs.md#s-52fe5407a1be87ad>) (FunctionDeclaration)
- [&lt;anonymous@29:83&gt;](<coordinates.test.cjs.md#s-a6c8fd84398394ec>) (ArrowFunction)
- [&lt;anonymous@58:72&gt;](<coordinates.test.cjs.md#s-ecf44f187224b064>) (ArrowFunction)
- [&lt;anonymous@84:67&gt;](<coordinates.test.cjs.md#s-eb425c317c2c57cc>) (ArrowFunction)
- [&lt;anonymous@98:91&gt;](<coordinates.test.cjs.md#s-15935863d59283c3>) (ArrowFunction)

<a id="s-80005c25ad606fd8"></a>

## features/worldview/coordinates.test.cjs

[features/worldview/coordinates.test.cjs:1](<../../../../../../features/worldview/coordinates.test.cjs#L1>) · Module · test · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 7.

- require — module-loader; [features/worldview/coordinates.test.cjs:1](<../../../../../../features/worldview/coordinates.test.cjs#L1>)
- require — module-loader; [features/worldview/coordinates.test.cjs:2](<../../../../../../features/worldview/coordinates.test.cjs#L2>)
- require — module-loader; [features/worldview/coordinates.test.cjs:14](<../../../../../../features/worldview/coordinates.test.cjs#L14>)
- test — external-or-dynamic-dispatch; [features/worldview/coordinates.test.cjs:29](<../../../../../../features/worldview/coordinates.test.cjs#L29>)
- test — external-or-dynamic-dispatch; [features/worldview/coordinates.test.cjs:58](<../../../../../../features/worldview/coordinates.test.cjs#L58>)
- test — external-or-dynamic-dispatch; [features/worldview/coordinates.test.cjs:84](<../../../../../../features/worldview/coordinates.test.cjs#L84>)
- test — external-or-dynamic-dispatch; [features/worldview/coordinates.test.cjs:98](<../../../../../../features/worldview/coordinates.test.cjs#L98>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-52fe5407a1be87ad"></a>

## closePoint

[features/worldview/coordinates.test.cjs:17](<../../../../../../features/worldview/coordinates.test.cjs#L17>) · FunctionDeclaration · test · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Asserts floating-point point equality with a tolerance measured in world or CSS units.

Purpose evidence: jsdoc.

Lexical owner: [features/worldview/coordinates.test.cjs](<coordinates.test.cjs.md#s-80005c25ad606fd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| actual | any | compiler-inferred | required |
| expected | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@29:83&gt;](<coordinates.test.cjs.md#s-a6c8fd84398394ec>) — [features/worldview/coordinates.test.cjs:37](<../../../../../../features/worldview/coordinates.test.cjs#L37>)
- [&lt;anonymous@29:83&gt;](<coordinates.test.cjs.md#s-a6c8fd84398394ec>) — [features/worldview/coordinates.test.cjs:44](<../../../../../../features/worldview/coordinates.test.cjs#L44>)
- [&lt;anonymous@58:72&gt;](<coordinates.test.cjs.md#s-ecf44f187224b064>) — [features/worldview/coordinates.test.cjs:71](<../../../../../../features/worldview/coordinates.test.cjs#L71>)
- [&lt;anonymous@58:72&gt;](<coordinates.test.cjs.md#s-ecf44f187224b064>) — [features/worldview/coordinates.test.cjs:75](<../../../../../../features/worldview/coordinates.test.cjs#L75>)
- [&lt;anonymous@84:67&gt;](<coordinates.test.cjs.md#s-eb425c317c2c57cc>) — [features/worldview/coordinates.test.cjs:92](<../../../../../../features/worldview/coordinates.test.cjs#L92>)
- [&lt;anonymous@84:67&gt;](<coordinates.test.cjs.md#s-eb425c317c2c57cc>) — [features/worldview/coordinates.test.cjs:93](<../../../../../../features/worldview/coordinates.test.cjs#L93>)
- [&lt;anonymous@98:91&gt;](<coordinates.test.cjs.md#s-15935863d59283c3>) — [features/worldview/coordinates.test.cjs:104](<../../../../../../features/worldview/coordinates.test.cjs#L104>)

Unresolved / external call sites: 4.

- assert.ok — external-or-dynamic-dispatch; [features/worldview/coordinates.test.cjs:18](<../../../../../../features/worldview/coordinates.test.cjs#L18>)
- Math.abs — external-or-dynamic-dispatch; [features/worldview/coordinates.test.cjs:19](<../../../../../../features/worldview/coordinates.test.cjs#L19>)
- assert.ok — external-or-dynamic-dispatch; [features/worldview/coordinates.test.cjs:22](<../../../../../../features/worldview/coordinates.test.cjs#L22>)
- Math.abs — external-or-dynamic-dispatch; [features/worldview/coordinates.test.cjs:23](<../../../../../../features/worldview/coordinates.test.cjs#L23>)

**Related tests / acceptance harnesses:**

- [features/worldview/coordinates.test.cjs:37](<../../../../../../features/worldview/coordinates.test.cjs#L37>) — static-call-site; coverage not established.
- [features/worldview/coordinates.test.cjs:44](<../../../../../../features/worldview/coordinates.test.cjs#L44>) — static-call-site; coverage not established.
- [features/worldview/coordinates.test.cjs:71](<../../../../../../features/worldview/coordinates.test.cjs#L71>) — static-call-site; coverage not established.
- [features/worldview/coordinates.test.cjs:75](<../../../../../../features/worldview/coordinates.test.cjs#L75>) — static-call-site; coverage not established.
- [features/worldview/coordinates.test.cjs:92](<../../../../../../features/worldview/coordinates.test.cjs#L92>) — static-call-site; coverage not established.
- [features/worldview/coordinates.test.cjs:93](<../../../../../../features/worldview/coordinates.test.cjs#L93>) — static-call-site; coverage not established.
- [features/worldview/coordinates.test.cjs:104](<../../../../../../features/worldview/coordinates.test.cjs#L104>) — static-call-site; coverage not established.

<a id="s-a6c8fd84398394ec"></a>

## &lt;anonymous@29:83&gt;

[features/worldview/coordinates.test.cjs:29](<../../../../../../features/worldview/coordinates.test.cjs#L29>) · ArrowFunction · test · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [features/worldview/coordinates.test.cjs](<coordinates.test.cjs.md#s-80005c25ad606fd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [projectWorld](<coordinates.ts.md#s-402de9cb48e771a3>) — [features/worldview/coordinates.test.cjs:30](<../../../../../../features/worldview/coordinates.test.cjs#L30>)
- [projectWorld](<coordinates.ts.md#s-402de9cb48e771a3>) — [features/worldview/coordinates.test.cjs:31](<../../../../../../features/worldview/coordinates.test.cjs#L31>)
- [closePoint](<coordinates.test.cjs.md#s-52fe5407a1be87ad>) — [features/worldview/coordinates.test.cjs:37](<../../../../../../features/worldview/coordinates.test.cjs#L37>)
- [unprojectWorld](<coordinates.ts.md#s-b19d0261c0f89b35>) — [features/worldview/coordinates.test.cjs:37](<../../../../../../features/worldview/coordinates.test.cjs#L37>)
- [projectWorld](<coordinates.ts.md#s-402de9cb48e771a3>) — [features/worldview/coordinates.test.cjs:37](<../../../../../../features/worldview/coordinates.test.cjs#L37>)
- [closePoint](<coordinates.test.cjs.md#s-52fe5407a1be87ad>) — [features/worldview/coordinates.test.cjs:44](<../../../../../../features/worldview/coordinates.test.cjs#L44>)
- [screenToWorld](<coordinates.ts.md#s-c7c956b865bb27e7>) — [features/worldview/coordinates.test.cjs:45](<../../../../../../features/worldview/coordinates.test.cjs#L45>)
- [worldToScreen](<coordinates.ts.md#s-3ab4b3de6a773d84>) — [features/worldview/coordinates.test.cjs:46](<../../../../../../features/worldview/coordinates.test.cjs#L46>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- assert.deepEqual — external-or-dynamic-dispatch; [features/worldview/coordinates.test.cjs:30](<../../../../../../features/worldview/coordinates.test.cjs#L30>)
- assert.deepEqual — external-or-dynamic-dispatch; [features/worldview/coordinates.test.cjs:31](<../../../../../../features/worldview/coordinates.test.cjs#L31>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-ecf44f187224b064"></a>

## &lt;anonymous@58:72&gt;

[features/worldview/coordinates.test.cjs:58](<../../../../../../features/worldview/coordinates.test.cjs#L58>) · ArrowFunction · test · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [features/worldview/coordinates.test.cjs](<coordinates.test.cjs.md#s-80005c25ad606fd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [worldToScreen](<coordinates.ts.md#s-3ab4b3de6a773d84>) — [features/worldview/coordinates.test.cjs:63](<../../../../../../features/worldview/coordinates.test.cjs#L63>)
- [panCamera](<coordinates.ts.md#s-3f3e3c3879a3d267>) — [features/worldview/coordinates.test.cjs:70](<../../../../../../features/worldview/coordinates.test.cjs#L70>)
- [closePoint](<coordinates.test.cjs.md#s-52fe5407a1be87ad>) — [features/worldview/coordinates.test.cjs:71](<../../../../../../features/worldview/coordinates.test.cjs#L71>)
- [worldToScreen](<coordinates.ts.md#s-3ab4b3de6a773d84>) — [features/worldview/coordinates.test.cjs:71](<../../../../../../features/worldview/coordinates.test.cjs#L71>)
- [closePoint](<coordinates.test.cjs.md#s-52fe5407a1be87ad>) — [features/worldview/coordinates.test.cjs:75](<../../../../../../features/worldview/coordinates.test.cjs#L75>)
- [panCamera](<coordinates.ts.md#s-3f3e3c3879a3d267>) — [features/worldview/coordinates.test.cjs:76](<../../../../../../features/worldview/coordinates.test.cjs#L76>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-eb425c317c2c57cc"></a>

## &lt;anonymous@84:67&gt;

[features/worldview/coordinates.test.cjs:84](<../../../../../../features/worldview/coordinates.test.cjs#L84>) · ArrowFunction · test · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [features/worldview/coordinates.test.cjs](<coordinates.test.cjs.md#s-80005c25ad606fd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [screenToWorld](<coordinates.ts.md#s-c7c956b865bb27e7>) — [features/worldview/coordinates.test.cjs:88](<../../../../../../features/worldview/coordinates.test.cjs#L88>)
- [zoomCameraAt](<coordinates.ts.md#s-25dbc565c0e7d818>) — [features/worldview/coordinates.test.cjs:90](<../../../../../../features/worldview/coordinates.test.cjs#L90>)
- [closePoint](<coordinates.test.cjs.md#s-52fe5407a1be87ad>) — [features/worldview/coordinates.test.cjs:92](<../../../../../../features/worldview/coordinates.test.cjs#L92>)
- [screenToWorld](<coordinates.ts.md#s-c7c956b865bb27e7>) — [features/worldview/coordinates.test.cjs:92](<../../../../../../features/worldview/coordinates.test.cjs#L92>)
- [closePoint](<coordinates.test.cjs.md#s-52fe5407a1be87ad>) — [features/worldview/coordinates.test.cjs:93](<../../../../../../features/worldview/coordinates.test.cjs#L93>)
- [worldToScreen](<coordinates.ts.md#s-3ab4b3de6a773d84>) — [features/worldview/coordinates.test.cjs:93](<../../../../../../features/worldview/coordinates.test.cjs#L93>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- assert.ok — external-or-dynamic-dispatch; [features/worldview/coordinates.test.cjs:91](<../../../../../../features/worldview/coordinates.test.cjs#L91>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-15935863d59283c3"></a>

## &lt;anonymous@98:91&gt;

[features/worldview/coordinates.test.cjs:98](<../../../../../../features/worldview/coordinates.test.cjs#L98>) · ArrowFunction · test · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [features/worldview/coordinates.test.cjs](<coordinates.test.cjs.md#s-80005c25ad606fd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [closePoint](<coordinates.test.cjs.md#s-52fe5407a1be87ad>) — [features/worldview/coordinates.test.cjs:104](<../../../../../../features/worldview/coordinates.test.cjs#L104>)
- [worldToScreen](<coordinates.ts.md#s-3ab4b3de6a773d84>) — [features/worldview/coordinates.test.cjs:104](<../../../../../../features/worldview/coordinates.test.cjs#L104>)
- [visibleWorldBounds](<coordinates.ts.md#s-7136899dfe740341>) — [features/worldview/coordinates.test.cjs:108](<../../../../../../features/worldview/coordinates.test.cjs#L108>)
- [screenToWorld](<coordinates.ts.md#s-c7c956b865bb27e7>) — [features/worldview/coordinates.test.cjs:115](<../../../../../../features/worldview/coordinates.test.cjs#L115>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- assert.ok — external-or-dynamic-dispatch; [features/worldview/coordinates.test.cjs:116](<../../../../../../features/worldview/coordinates.test.cjs#L116>)
- assert.ok — external-or-dynamic-dispatch; [features/worldview/coordinates.test.cjs:117](<../../../../../../features/worldview/coordinates.test.cjs#L117>)
- assert.ok — external-or-dynamic-dispatch; [features/worldview/coordinates.test.cjs:119](<../../../../../../features/worldview/coordinates.test.cjs#L119>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
