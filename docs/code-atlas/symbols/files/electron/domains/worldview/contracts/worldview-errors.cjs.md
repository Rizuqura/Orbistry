# electron/domains/worldview/contracts/worldview-errors.cjs: symbols

[Atlas](<../../../../../../README.md>) / [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>) / [electron/domains/worldview/contracts/worldview-errors.cjs:1](<../../../../../../../../electron/domains/worldview/contracts/worldview-errors.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/domains/worldview/contracts/worldview-errors.cjs](<worldview-errors.cjs.md#s-cdd7198bea0f5cbe>) (Module)
- [WorldViewError](<worldview-errors.cjs.md#s-1c18c65fdb1fc9b7>) (ClassDeclaration)
- [WorldViewError.constructor](<worldview-errors.cjs.md#s-3ad25a84a761dd0a>) (Constructor)
- [requireInvariant](<worldview-errors.cjs.md#s-2dc3226dc732f323>) (FunctionDeclaration)

<a id="s-cdd7198bea0f5cbe"></a>

## electron/domains/worldview/contracts/worldview-errors.cjs

[electron/domains/worldview/contracts/worldview-errors.cjs:1](<../../../../../../../../electron/domains/worldview/contracts/worldview-errors.cjs#L1>) · Module · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-1c18c65fdb1fc9b7"></a>

## WorldViewError

[electron/domains/worldview/contracts/worldview-errors.cjs:2](<../../../../../../../../electron/domains/worldview/contracts/worldview-errors.cjs#L2>) · ClassDeclaration · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

Identifies domain validation/conflict failures without exposing source contents or granting authority.

Purpose evidence: jsdoc.

Exported as: WorldViewError ([electron/domains/worldview/contracts/worldview-errors.cjs:1](<../../../../../../../../electron/domains/worldview/contracts/worldview-errors.cjs#L1>)).

Lexical owner: [electron/domains/worldview/contracts/worldview-errors.cjs](<worldview-errors.cjs.md#s-cdd7198bea0f5cbe>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-3ad25a84a761dd0a"></a>

## WorldViewError.constructor

[electron/domains/worldview/contracts/worldview-errors.cjs:4](<../../../../../../../../electron/domains/worldview/contracts/worldview-errors.cjs#L4>) · Constructor · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

Accepts a stable classification and a safe, actionable message; performs no I/O.

Purpose evidence: jsdoc.

Lexical owner: [WorldViewError](<worldview-errors.cjs.md#s-1c18c65fdb1fc9b7>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| code | any | compiler-inferred | required |
| message | any | compiler-inferred | required |

Returns: WorldViewError (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [requireInvariant](<worldview-errors.cjs.md#s-2dc3226dc732f323>) — [electron/domains/worldview/contracts/worldview-errors.cjs:13](<../../../../../../../../electron/domains/worldview/contracts/worldview-errors.cjs#L13>)

Unresolved / external call sites: 1.

- super — external-or-dynamic-dispatch; [electron/domains/worldview/contracts/worldview-errors.cjs:5](<../../../../../../../../electron/domains/worldview/contracts/worldview-errors.cjs#L5>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-2dc3226dc732f323"></a>

## requireInvariant

[electron/domains/worldview/contracts/worldview-errors.cjs:12](<../../../../../../../../electron/domains/worldview/contracts/worldview-errors.cjs#L12>) · FunctionDeclaration · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

Rejects a failed invariant with a structured domain error; no state is modified.

Purpose evidence: jsdoc.

Exported as: requireInvariant ([electron/domains/worldview/contracts/worldview-errors.cjs:1](<../../../../../../../../electron/domains/worldview/contracts/worldview-errors.cjs#L1>)).

Lexical owner: [electron/domains/worldview/contracts/worldview-errors.cjs](<worldview-errors.cjs.md#s-cdd7198bea0f5cbe>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| condition | any | compiler-inferred | required |
| code | any | compiler-inferred | required |
| message | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [WorldViewError.constructor](<worldview-errors.cjs.md#s-3ad25a84a761dd0a>) — [electron/domains/worldview/contracts/worldview-errors.cjs:13](<../../../../../../../../electron/domains/worldview/contracts/worldview-errors.cjs#L13>)

**Called by (statically resolved):**

- [Connection.constructor](<../model/Connection.cjs.md#s-d6c1ec5a51d80cca>) — [electron/domains/worldview/model/Connection.cjs:13](<../../../../../../../../electron/domains/worldview/model/Connection.cjs#L13>)
- [WorldView.addEntity](<../model/WorldView.cjs.md#s-c66653250b4bea0a>) — [electron/domains/worldview/model/WorldView.cjs:22](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L22>)
- [WorldView.moveEntity](<../model/WorldView.cjs.md#s-9dac880bfab35b99>) — [electron/domains/worldview/model/WorldView.cjs:31](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L31>)
- [WorldView.connect](<../model/WorldView.cjs.md#s-eb2c0a1c8b491b24>) — [electron/domains/worldview/model/WorldView.cjs:50](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L50>)
- [WorldView.connect](<../model/WorldView.cjs.md#s-eb2c0a1c8b491b24>) — [electron/domains/worldview/model/WorldView.cjs:55](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L55>)
- [WorldView.updateConnection](<../model/WorldView.cjs.md#s-756603622bedfc0c>) — [electron/domains/worldview/model/WorldView.cjs:71](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L71>)
- [directConnections](<../queries/connection-queries.cjs.md#s-a2c4c119e7dfa264>) — [electron/domains/worldview/queries/connection-queries.cjs:7](<../../../../../../../../electron/domains/worldview/queries/connection-queries.cjs#L7>)
- [WorldViewService.permit](<../services/WorldViewService.cjs.md#s-5697cb02709ef464>) — [electron/domains/worldview/services/WorldViewService.cjs:21](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L21>)
- [WorldViewService.listDirectConnections](<../services/WorldViewService.cjs.md#s-49499fbc6b875b47>) — [electron/domains/worldview/services/WorldViewService.cjs:112](<../../../../../../../../electron/domains/worldview/services/WorldViewService.cjs#L112>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
