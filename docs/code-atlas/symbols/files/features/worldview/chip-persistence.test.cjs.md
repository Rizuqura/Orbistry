# features/worldview/chip-persistence.test.cjs: symbols

[Atlas](<../../../../README.md>) / [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>) / [features/worldview/chip-persistence.test.cjs:1](<../../../../../../features/worldview/chip-persistence.test.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [features/worldview/chip-persistence.test.cjs](<chip-persistence.test.cjs.md#s-cbc003843141bc8e>) (Module)
- [&lt;anonymous@16:90&gt;](<chip-persistence.test.cjs.md#s-c6dda4078cc18edc>) (ArrowFunction)
- [&lt;anonymous@16:90&gt;.request](<chip-persistence.test.cjs.md#s-8a63e13a92cba849>) (MethodDeclaration)
- [&lt;anonymous@16:90&gt;.request.&lt;anonymous@31:48&gt;](<chip-persistence.test.cjs.md#s-b7aba99be4c5066d>) (ArrowFunction)

<a id="s-cbc003843141bc8e"></a>

## features/worldview/chip-persistence.test.cjs

[features/worldview/chip-persistence.test.cjs:1](<../../../../../../features/worldview/chip-persistence.test.cjs#L1>) · Module · test · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- require — module-loader; [features/worldview/chip-persistence.test.cjs:1](<../../../../../../features/worldview/chip-persistence.test.cjs#L1>)
- require — module-loader; [features/worldview/chip-persistence.test.cjs:2](<../../../../../../features/worldview/chip-persistence.test.cjs#L2>)
- require — module-loader; [features/worldview/chip-persistence.test.cjs:13](<../../../../../../features/worldview/chip-persistence.test.cjs#L13>)
- test — external-or-dynamic-dispatch; [features/worldview/chip-persistence.test.cjs:16](<../../../../../../features/worldview/chip-persistence.test.cjs#L16>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-c6dda4078cc18edc"></a>

## &lt;anonymous@16:90&gt;

[features/worldview/chip-persistence.test.cjs:16](<../../../../../../features/worldview/chip-persistence.test.cjs#L16>) · ArrowFunction · test · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [features/worldview/chip-persistence.test.cjs](<chip-persistence.test.cjs.md#s-cbc003843141bc8e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [loadWorldViewSession](<chip-session.ts.md#s-16fd179714630bf4>) — [features/worldview/chip-persistence.test.cjs:50](<../../../../../../features/worldview/chip-persistence.test.cjs#L50>)
- [getWorldViewPersistence](<chip-session.ts.md#s-170ed9fa2eb9b784>) — [features/worldview/chip-persistence.test.cjs:51](<../../../../../../features/worldview/chip-persistence.test.cjs#L51>)
- [addSessionChip](<chip-session.ts.md#s-323a156c7123bc4e>) — [features/worldview/chip-persistence.test.cjs:60](<../../../../../../features/worldview/chip-persistence.test.cjs#L60>)
- [moveSessionChip](<chip-session.ts.md#s-ca7fa5bab39f79d9>) — [features/worldview/chip-persistence.test.cjs:61](<../../../../../../features/worldview/chip-persistence.test.cjs#L61>)
- [flushWorldViewWrites](<chip-session.ts.md#s-14cfc10edca5869e>) — [features/worldview/chip-persistence.test.cjs:62](<../../../../../../features/worldview/chip-persistence.test.cjs#L62>)
- [getWorldViewPersistence](<chip-session.ts.md#s-170ed9fa2eb9b784>) — [features/worldview/chip-persistence.test.cjs:63](<../../../../../../features/worldview/chip-persistence.test.cjs#L63>)
- [loadWorldViewSession](<chip-session.ts.md#s-16fd179714630bf4>) — [features/worldview/chip-persistence.test.cjs:68](<../../../../../../features/worldview/chip-persistence.test.cjs#L68>)
- [getSessionChips](<chip-session.ts.md#s-4bccdef1d4d202d5>) — [features/worldview/chip-persistence.test.cjs:69](<../../../../../../features/worldview/chip-persistence.test.cjs#L69>)
- [updateSessionChip](<chip-session.ts.md#s-ea5b80cfa0863cae>) — [features/worldview/chip-persistence.test.cjs:71](<../../../../../../features/worldview/chip-persistence.test.cjs#L71>)
- [flushWorldViewWrites](<chip-session.ts.md#s-14cfc10edca5869e>) — [features/worldview/chip-persistence.test.cjs:72](<../../../../../../features/worldview/chip-persistence.test.cjs#L72>)
- [getWorldViewPersistence](<chip-session.ts.md#s-170ed9fa2eb9b784>) — [features/worldview/chip-persistence.test.cjs:73](<../../../../../../features/worldview/chip-persistence.test.cjs#L73>)
- [getSessionChips](<chip-session.ts.md#s-4bccdef1d4d202d5>) — [features/worldview/chip-persistence.test.cjs:74](<../../../../../../features/worldview/chip-persistence.test.cjs#L74>)
- [retryWorldViewWrites](<chip-session.ts.md#s-20897c315f6c802a>) — [features/worldview/chip-persistence.test.cjs:76](<../../../../../../features/worldview/chip-persistence.test.cjs#L76>)
- [getWorldViewPersistence](<chip-session.ts.md#s-170ed9fa2eb9b784>) — [features/worldview/chip-persistence.test.cjs:77](<../../../../../../features/worldview/chip-persistence.test.cjs#L77>)
- [loadWorldViewSession](<chip-session.ts.md#s-16fd179714630bf4>) — [features/worldview/chip-persistence.test.cjs:79](<../../../../../../features/worldview/chip-persistence.test.cjs#L79>)
- [getSessionChips](<chip-session.ts.md#s-4bccdef1d4d202d5>) — [features/worldview/chip-persistence.test.cjs:80](<../../../../../../features/worldview/chip-persistence.test.cjs#L80>)
- [loadWorldViewSession](<chip-session.ts.md#s-16fd179714630bf4>) — [features/worldview/chip-persistence.test.cjs:81](<../../../../../../features/worldview/chip-persistence.test.cjs#L81>)
- [getSessionChips](<chip-session.ts.md#s-4bccdef1d4d202d5>) — [features/worldview/chip-persistence.test.cjs:82](<../../../../../../features/worldview/chip-persistence.test.cjs#L82>)
- [removeSessionChip](<chip-session.ts.md#s-6d3b3ae95e4a805a>) — [features/worldview/chip-persistence.test.cjs:83](<../../../../../../features/worldview/chip-persistence.test.cjs#L83>)
- [flushWorldViewWrites](<chip-session.ts.md#s-14cfc10edca5869e>) — [features/worldview/chip-persistence.test.cjs:84](<../../../../../../features/worldview/chip-persistence.test.cjs#L84>)
- [loadWorldViewSession](<chip-session.ts.md#s-16fd179714630bf4>) — [features/worldview/chip-persistence.test.cjs:85](<../../../../../../features/worldview/chip-persistence.test.cjs#L85>)
- [getSessionChips](<chip-session.ts.md#s-4bccdef1d4d202d5>) — [features/worldview/chip-persistence.test.cjs:86](<../../../../../../features/worldview/chip-persistence.test.cjs#L86>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 17.

- Map — external-or-dynamic-dispatch; [features/worldview/chip-persistence.test.cjs:17](<../../../../../../features/worldview/chip-persistence.test.cjs#L17>)
- assert.equal — external-or-dynamic-dispatch; [features/worldview/chip-persistence.test.cjs:51](<../../../../../../features/worldview/chip-persistence.test.cjs#L51>)
- assert.equal — external-or-dynamic-dispatch; [features/worldview/chip-persistence.test.cjs:63](<../../../../../../features/worldview/chip-persistence.test.cjs#L63>)
- assert.deepEqual — external-or-dynamic-dispatch; [features/worldview/chip-persistence.test.cjs:64](<../../../../../../features/worldview/chip-persistence.test.cjs#L64>)
- roots.get("Universe-A").get — external-or-dynamic-dispatch; [features/worldview/chip-persistence.test.cjs:64](<../../../../../../features/worldview/chip-persistence.test.cjs#L64>)
- roots.get — external-or-dynamic-dispatch; [features/worldview/chip-persistence.test.cjs:64](<../../../../../../features/worldview/chip-persistence.test.cjs#L64>)
- assert.deepEqual — external-or-dynamic-dispatch; [features/worldview/chip-persistence.test.cjs:69](<../../../../../../features/worldview/chip-persistence.test.cjs#L69>)
- assert.rejects — external-or-dynamic-dispatch; [features/worldview/chip-persistence.test.cjs:72](<../../../../../../features/worldview/chip-persistence.test.cjs#L72>)
- 9 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-8a63e13a92cba849"></a>

## &lt;anonymous@16:90&gt;.request

[features/worldview/chip-persistence.test.cjs:23](<../../../../../../features/worldview/chip-persistence.test.cjs#L23>) · MethodDeclaration · test · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Emulates metadata persistence without any source-content capability.

Purpose evidence: jsdoc.

Lexical owner: [&lt;anonymous@16:90&gt;](<chip-persistence.test.cjs.md#s-c6dda4078cc18edc>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| operation | any | compiler-inferred | required |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 12.

- roots.has — external-or-dynamic-dispatch; [features/worldview/chip-persistence.test.cjs:24](<../../../../../../features/worldview/chip-persistence.test.cjs#L24>)
- roots.set — external-or-dynamic-dispatch; [features/worldview/chip-persistence.test.cjs:25](<../../../../../../features/worldview/chip-persistence.test.cjs#L25>)
- Map — external-or-dynamic-dispatch; [features/worldview/chip-persistence.test.cjs:25](<../../../../../../features/worldview/chip-persistence.test.cjs#L25>)
- roots.get — external-or-dynamic-dispatch; [features/worldview/chip-persistence.test.cjs:26](<../../../../../../features/worldview/chip-persistence.test.cjs#L26>)
- &#91;...records.values()&#93;.map — external-or-dynamic-dispatch; [features/worldview/chip-persistence.test.cjs:31](<../../../../../../features/worldview/chip-persistence.test.cjs#L31>)
- records.values — external-or-dynamic-dispatch; [features/worldview/chip-persistence.test.cjs:31](<../../../../../../features/worldview/chip-persistence.test.cjs#L31>)
- Error — external-or-dynamic-dispatch; [features/worldview/chip-persistence.test.cjs:34](<../../../../../../features/worldview/chip-persistence.test.cjs#L34>)
- structuredClone — external-or-dynamic-dispatch; [features/worldview/chip-persistence.test.cjs:37](<../../../../../../features/worldview/chip-persistence.test.cjs#L37>)
- 4 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-b7aba99be4c5066d"></a>

## &lt;anonymous@16:90&gt;.request.&lt;anonymous@31:48&gt;

[features/worldview/chip-persistence.test.cjs:31](<../../../../../../features/worldview/chip-persistence.test.cjs#L31>) · ArrowFunction · test · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@16:90&gt;.request](<chip-persistence.test.cjs.md#s-8a63e13a92cba849>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| chip | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- structuredClone — external-or-dynamic-dispatch; [features/worldview/chip-persistence.test.cjs:31](<../../../../../../features/worldview/chip-persistence.test.cjs#L31>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
