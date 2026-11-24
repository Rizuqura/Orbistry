# electron/engines/backend-identity/connector-encoder.cjs: symbols

[Atlas](<../../../../../README.md>) / [Backend Identity Engine](<../../../../../modules/identity.md>) / [electron/engines/backend-identity/connector-encoder.cjs:1](<../../../../../../../electron/engines/backend-identity/connector-encoder.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/engines/backend-identity/connector-encoder.cjs](<connector-encoder.cjs.md#s-017a2eddebea9fc3>) (Module)
- [encodeConnections](<connector-encoder.cjs.md#s-4cb717248b131954>) (FunctionDeclaration)
- [encodeConnections.&lt;anonymous@5:48&gt;](<connector-encoder.cjs.md#s-4935688118947742>) (ArrowFunction)

<a id="s-017a2eddebea9fc3"></a>

## electron/engines/backend-identity/connector-encoder.cjs

[electron/engines/backend-identity/connector-encoder.cjs:1](<../../../../../../../electron/engines/backend-identity/connector-encoder.cjs#L1>) · Module · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:34](<../../../../../../../electron/backend-identity.test.cjs#L34>) — file-import-only; coverage not established.

<a id="s-4cb717248b131954"></a>

## encodeConnections

[electron/engines/backend-identity/connector-encoder.cjs:2](<../../../../../../../electron/engines/backend-identity/connector-encoder.cjs#L2>) · FunctionDeclaration · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

Encodes relationship metadata from the selected entity's perspective. Geometric ports never determine flow, and descriptions remain data rather than executable capabilities.

Purpose evidence: jsdoc.

Exported as: encodeConnections ([electron/engines/backend-identity/connector-encoder.cjs:1](<../../../../../../../electron/engines/backend-identity/connector-encoder.cjs#L1>)).

Lexical owner: [electron/engines/backend-identity/connector-encoder.cjs](<connector-encoder.cjs.md#s-017a2eddebea9fc3>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| entityId | any | compiler-inferred | required |
| connectors | any | compiler-inferred | required |
| unavailableCount | number | compiler-inferred | optional, default present |

Returns: { inputs: {}; outputs: {}; unavailableCount: number; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@37:127&gt;](<../../backend-identity.test.cjs.md#s-730796add039fe63>) — [electron/backend-identity.test.cjs:48](<../../../../../../../electron/backend-identity.test.cjs#L48>)
- [&lt;anonymous@37:127&gt;](<../../backend-identity.test.cjs.md#s-730796add039fe63>) — [electron/backend-identity.test.cjs:77](<../../../../../../../electron/backend-identity.test.cjs#L77>)
- [capture](<identity-compiler.cjs.md#s-1f99e7da5df73158>) — [electron/engines/backend-identity/identity-compiler.cjs:221](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L221>)

Unresolved / external call sites: 3.

- &#91;...connectors&#93;.sort — external-or-dynamic-dispatch; [electron/engines/backend-identity/connector-encoder.cjs:5](<../../../../../../../electron/engines/backend-identity/connector-encoder.cjs#L5>)
- inputs.push — external-or-dynamic-dispatch; [electron/engines/backend-identity/connector-encoder.cjs:23](<../../../../../../../electron/engines/backend-identity/connector-encoder.cjs#L23>)
- outputs.push — external-or-dynamic-dispatch; [electron/engines/backend-identity/connector-encoder.cjs:25](<../../../../../../../electron/engines/backend-identity/connector-encoder.cjs#L25>)

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:48](<../../../../../../../electron/backend-identity.test.cjs#L48>) — static-call-site; coverage not established.
- [electron/backend-identity.test.cjs:77](<../../../../../../../electron/backend-identity.test.cjs#L77>) — static-call-site; coverage not established.
- [electron/backend-identity.test.cjs:34](<../../../../../../../electron/backend-identity.test.cjs#L34>) — file-import-only; coverage not established.

<a id="s-4935688118947742"></a>

## encodeConnections.&lt;anonymous@5:48&gt;

[electron/engines/backend-identity/connector-encoder.cjs:5](<../../../../../../../electron/engines/backend-identity/connector-encoder.cjs#L5>) · ArrowFunction · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [encodeConnections](<connector-encoder.cjs.md#s-4cb717248b131954>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| a | any | compiler-inferred | required |
| b | any | compiler-inferred | required |

Returns: 0 &#124; 1 &#124; -1 (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:34](<../../../../../../../electron/backend-identity.test.cjs#L34>) — file-import-only; coverage not established.
