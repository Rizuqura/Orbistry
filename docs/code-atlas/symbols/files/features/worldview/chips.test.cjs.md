# features/worldview/chips.test.cjs: symbols

[Atlas](<../../../../README.md>) / [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>) / [features/worldview/chips.test.cjs:1](<../../../../../../features/worldview/chips.test.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [features/worldview/chips.test.cjs](<chips.test.cjs.md#s-ddb62c1c016d591c>) (Module)
- [&lt;anonymous@12:99&gt;](<chips.test.cjs.md#s-ba14d9a84de47ab8>) (ArrowFunction)
- [&lt;anonymous@12:99&gt;.&lt;anonymous@40:33&gt;](<chips.test.cjs.md#s-de4305cdab40454a>) (ArrowFunction)
- [&lt;anonymous@59:83&gt;](<chips.test.cjs.md#s-698be325b9996ad8>) (ArrowFunction)
- [&lt;anonymous@70:91&gt;](<chips.test.cjs.md#s-206b52301170fbff>) (ArrowFunction)
- [&lt;anonymous@93:68&gt;](<chips.test.cjs.md#s-e60f5b0cd3681703>) (ArrowFunction)
- [&lt;anonymous@112:81&gt;](<chips.test.cjs.md#s-5a388644096a684a>) (ArrowFunction)
- [&lt;anonymous@112:81&gt;.notify](<chips.test.cjs.md#s-0f867c2d2d02ee55>) (FunctionDeclaration)
- [&lt;anonymous@112:81&gt;.&lt;anonymous@136:17&gt;](<chips.test.cjs.md#s-6a74a1bd5204f6d1>) (ArrowFunction)
- [&lt;anonymous@112:81&gt;.&lt;anonymous@138:5&gt;](<chips.test.cjs.md#s-3992466e906dec4d>) (ArrowFunction)
- [&lt;anonymous@148:70&gt;](<chips.test.cjs.md#s-10e26ccfad544496>) (ArrowFunction)
- [&lt;anonymous@148:70&gt;.&lt;anonymous@175:17&gt;](<chips.test.cjs.md#s-8d5cf8fb8ebc7189>) (ArrowFunction)
- [&lt;anonymous@184:96&gt;](<chips.test.cjs.md#s-3c93037ba54e5f5b>) (ArrowFunction)
- [&lt;anonymous@184:96&gt;.notifyDeletion](<chips.test.cjs.md#s-3e098e663dcf6b5e>) (FunctionDeclaration)

<a id="s-ddb62c1c016d591c"></a>

## features/worldview/chips.test.cjs

[features/worldview/chips.test.cjs:1](<../../../../../../features/worldview/chips.test.cjs#L1>) · Module · test · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 11.

- require — module-loader; [features/worldview/chips.test.cjs:1](<../../../../../../features/worldview/chips.test.cjs#L1>)
- require — module-loader; [features/worldview/chips.test.cjs:2](<../../../../../../features/worldview/chips.test.cjs#L2>)
- require — module-loader; [features/worldview/chips.test.cjs:9](<../../../../../../features/worldview/chips.test.cjs#L9>)
- test — external-or-dynamic-dispatch; [features/worldview/chips.test.cjs:12](<../../../../../../features/worldview/chips.test.cjs#L12>)
- require — module-loader; [features/worldview/chips.test.cjs:56](<../../../../../../features/worldview/chips.test.cjs#L56>)
- test — external-or-dynamic-dispatch; [features/worldview/chips.test.cjs:59](<../../../../../../features/worldview/chips.test.cjs#L59>)
- test — external-or-dynamic-dispatch; [features/worldview/chips.test.cjs:70](<../../../../../../features/worldview/chips.test.cjs#L70>)
- test — external-or-dynamic-dispatch; [features/worldview/chips.test.cjs:93](<../../../../../../features/worldview/chips.test.cjs#L93>)
- 3 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-ba14d9a84de47ab8"></a>

## &lt;anonymous@12:99&gt;

[features/worldview/chips.test.cjs:12](<../../../../../../features/worldview/chips.test.cjs#L12>) · ArrowFunction · test · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [features/worldview/chips.test.cjs](<chips.test.cjs.md#s-ddb62c1c016d591c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [suggestChipTags](<chips.ts.md#s-a72caab4e76458bd>) — [features/worldview/chips.test.cjs:14](<../../../../../../features/worldview/chips.test.cjs#L14>)
- [suggestChipTags](<chips.ts.md#s-a72caab4e76458bd>) — [features/worldview/chips.test.cjs:30](<../../../../../../features/worldview/chips.test.cjs#L30>)
- [suggestChipTags](<chips.ts.md#s-a72caab4e76458bd>) — [features/worldview/chips.test.cjs:31](<../../../../../../features/worldview/chips.test.cjs#L31>)
- [suggestChipTags](<chips.ts.md#s-a72caab4e76458bd>) — [features/worldview/chips.test.cjs:36](<../../../../../../features/worldview/chips.test.cjs#L36>)
- [suggestChipTags](<chips.ts.md#s-a72caab4e76458bd>) — [features/worldview/chips.test.cjs:37](<../../../../../../features/worldview/chips.test.cjs#L37>)
- [suggestChipTags](<chips.ts.md#s-a72caab4e76458bd>) — [features/worldview/chips.test.cjs:45](<../../../../../../features/worldview/chips.test.cjs#L45>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 10.

- assert.deepEqual — external-or-dynamic-dispatch; [features/worldview/chips.test.cjs:13](<../../../../../../features/worldview/chips.test.cjs#L13>)
- assert.deepEqual — external-or-dynamic-dispatch; [features/worldview/chips.test.cjs:30](<../../../../../../features/worldview/chips.test.cjs#L30>)
- assert.deepEqual — external-or-dynamic-dispatch; [features/worldview/chips.test.cjs:31](<../../../../../../features/worldview/chips.test.cjs#L31>)
- "x".repeat — external-or-dynamic-dispatch; [features/worldview/chips.test.cjs:35](<../../../../../../features/worldview/chips.test.cjs#L35>)
- assert.deepEqual — external-or-dynamic-dispatch; [features/worldview/chips.test.cjs:36](<../../../../../../features/worldview/chips.test.cjs#L36>)
- Array.from — external-or-dynamic-dispatch; [features/worldview/chips.test.cjs:40](<../../../../../../features/worldview/chips.test.cjs#L40>)
- assert.equal — external-or-dynamic-dispatch; [features/worldview/chips.test.cjs:43](<../../../../../../features/worldview/chips.test.cjs#L43>)
- assert.ok — external-or-dynamic-dispatch; [features/worldview/chips.test.cjs:44](<../../../../../../features/worldview/chips.test.cjs#L44>)
- 2 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-de4305cdab40454a"></a>

## &lt;anonymous@12:99&gt;.&lt;anonymous@40:33&gt;

[features/worldview/chips.test.cjs:40](<../../../../../../features/worldview/chips.test.cjs#L40>) · ArrowFunction · test · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@12:99&gt;](<chips.test.cjs.md#s-ba14d9a84de47ab8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| _ | any | compiler-inferred | required |
| index | any | compiler-inferred | required |

Returns: string (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-698be325b9996ad8"></a>

## &lt;anonymous@59:83&gt;

[features/worldview/chips.test.cjs:59](<../../../../../../features/worldview/chips.test.cjs#L59>) · ArrowFunction · test · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [features/worldview/chips.test.cjs](<chips.test.cjs.md#s-ddb62c1c016d591c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [snapChipPosition](<chips.ts.md#s-e2d9756e0b60dc83>) — [features/worldview/chips.test.cjs:60](<../../../../../../features/worldview/chips.test.cjs#L60>)
- [snapChipPosition](<chips.ts.md#s-e2d9756e0b60dc83>) — [features/worldview/chips.test.cjs:61](<../../../../../../features/worldview/chips.test.cjs#L61>)
- [parseChipTags](<chips.ts.md#s-34509229cdfd5014>) — [features/worldview/chips.test.cjs:63](<../../../../../../features/worldview/chips.test.cjs#L63>)
- [parseChipTags](<chips.ts.md#s-34509229cdfd5014>) — [features/worldview/chips.test.cjs:66](<../../../../../../features/worldview/chips.test.cjs#L66>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- assert.deepEqual — external-or-dynamic-dispatch; [features/worldview/chips.test.cjs:60](<../../../../../../features/worldview/chips.test.cjs#L60>)
- assert.deepEqual — external-or-dynamic-dispatch; [features/worldview/chips.test.cjs:61](<../../../../../../features/worldview/chips.test.cjs#L61>)
- assert.deepEqual — external-or-dynamic-dispatch; [features/worldview/chips.test.cjs:62](<../../../../../../features/worldview/chips.test.cjs#L62>)
- assert.deepEqual — external-or-dynamic-dispatch; [features/worldview/chips.test.cjs:66](<../../../../../../features/worldview/chips.test.cjs#L66>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-206b52301170fbff"></a>

## &lt;anonymous@70:91&gt;

[features/worldview/chips.test.cjs:70](<../../../../../../features/worldview/chips.test.cjs#L70>) · ArrowFunction · test · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [features/worldview/chips.test.cjs](<chips.test.cjs.md#s-ddb62c1c016d591c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [findAvailableChipPosition](<chips.ts.md#s-98577f9be7d02bb8>) — [features/worldview/chips.test.cjs:77](<../../../../../../features/worldview/chips.test.cjs#L77>)
- [chipPositionsOverlap](<chips.ts.md#s-905dd4a93c69d2a1>) — [features/worldview/chips.test.cjs:84](<../../../../../../features/worldview/chips.test.cjs#L84>)
- [chipPositionsOverlap](<chips.ts.md#s-905dd4a93c69d2a1>) — [features/worldview/chips.test.cjs:88](<../../../../../../features/worldview/chips.test.cjs#L88>)
- [chipPositionsOverlap](<chips.ts.md#s-905dd4a93c69d2a1>) — [features/worldview/chips.test.cjs:89](<../../../../../../features/worldview/chips.test.cjs#L89>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 11.

- assert.ok — external-or-dynamic-dispatch; [features/worldview/chips.test.cjs:78](<../../../../../../features/worldview/chips.test.cjs#L78>)
- Number.isInteger — external-or-dynamic-dispatch; [features/worldview/chips.test.cjs:78](<../../../../../../features/worldview/chips.test.cjs#L78>)
- Number.isInteger — external-or-dynamic-dispatch; [features/worldview/chips.test.cjs:78](<../../../../../../features/worldview/chips.test.cjs#L78>)
- assert.ok — external-or-dynamic-dispatch; [features/worldview/chips.test.cjs:79](<../../../../../../features/worldview/chips.test.cjs#L79>)
- Math.abs — external-or-dynamic-dispatch; [features/worldview/chips.test.cjs:80](<../../../../../../features/worldview/chips.test.cjs#L80>)
- Math.abs — external-or-dynamic-dispatch; [features/worldview/chips.test.cjs:81](<../../../../../../features/worldview/chips.test.cjs#L81>)
- assert.equal — external-or-dynamic-dispatch; [features/worldview/chips.test.cjs:84](<../../../../../../features/worldview/chips.test.cjs#L84>)
- chips.push — external-or-dynamic-dispatch; [features/worldview/chips.test.cjs:85](<../../../../../../features/worldview/chips.test.cjs#L85>)
- 3 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-e60f5b0cd3681703"></a>

## &lt;anonymous@93:68&gt;

[features/worldview/chips.test.cjs:93](<../../../../../../features/worldview/chips.test.cjs#L93>) · ArrowFunction · test · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [features/worldview/chips.test.cjs](<chips.test.cjs.md#s-ddb62c1c016d591c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [findAvailableChipPosition](<chips.ts.md#s-98577f9be7d02bb8>) — [features/worldview/chips.test.cjs:99](<../../../../../../features/worldview/chips.test.cjs#L99>)
- [findAvailableChipPosition](<chips.ts.md#s-98577f9be7d02bb8>) — [features/worldview/chips.test.cjs:102](<../../../../../../features/worldview/chips.test.cjs#L102>)
- [chipPositionsOverlap](<chips.ts.md#s-905dd4a93c69d2a1>) — [features/worldview/chips.test.cjs:107](<../../../../../../features/worldview/chips.test.cjs#L107>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- assert.deepEqual — external-or-dynamic-dispatch; [features/worldview/chips.test.cjs:98](<../../../../../../features/worldview/chips.test.cjs#L98>)
- assert.equal — external-or-dynamic-dispatch; [features/worldview/chips.test.cjs:107](<../../../../../../features/worldview/chips.test.cjs#L107>)
- assert.ok — external-or-dynamic-dispatch; [features/worldview/chips.test.cjs:108](<../../../../../../features/worldview/chips.test.cjs#L108>)
- Number.isInteger — external-or-dynamic-dispatch; [features/worldview/chips.test.cjs:108](<../../../../../../features/worldview/chips.test.cjs#L108>)
- Number.isInteger — external-or-dynamic-dispatch; [features/worldview/chips.test.cjs:108](<../../../../../../features/worldview/chips.test.cjs#L108>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-5a388644096a684a"></a>

## &lt;anonymous@112:81&gt;

[features/worldview/chips.test.cjs:112](<../../../../../../features/worldview/chips.test.cjs#L112>) · ArrowFunction · test · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [features/worldview/chips.test.cjs](<chips.test.cjs.md#s-ddb62c1c016d591c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [getSessionChips](<chip-session.ts.md#s-4bccdef1d4d202d5>) — [features/worldview/chips.test.cjs:113](<../../../../../../features/worldview/chips.test.cjs#L113>)
- [subscribeChips](<chip-session.ts.md#s-84efc8cede0b1c37>) — [features/worldview/chips.test.cjs:119](<../../../../../../features/worldview/chips.test.cjs#L119>)
- [addSessionChip](<chip-session.ts.md#s-323a156c7123bc4e>) — [features/worldview/chips.test.cjs:127](<../../../../../../features/worldview/chips.test.cjs#L127>)
- [getSessionChips](<chip-session.ts.md#s-4bccdef1d4d202d5>) — [features/worldview/chips.test.cjs:128](<../../../../../../features/worldview/chips.test.cjs#L128>)
- [moveSessionChip](<chip-session.ts.md#s-ca7fa5bab39f79d9>) — [features/worldview/chips.test.cjs:131](<../../../../../../features/worldview/chips.test.cjs#L131>)
- [getSessionChips](<chip-session.ts.md#s-4bccdef1d4d202d5>) — [features/worldview/chips.test.cjs:133](<../../../../../../features/worldview/chips.test.cjs#L133>)
- [getSessionChips](<chip-session.ts.md#s-4bccdef1d4d202d5>) — [features/worldview/chips.test.cjs:135](<../../../../../../features/worldview/chips.test.cjs#L135>)
- [moveSessionChip](<chip-session.ts.md#s-ca7fa5bab39f79d9>) — [features/worldview/chips.test.cjs:143](<../../../../../../features/worldview/chips.test.cjs#L143>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 12.

- assert.deepEqual — external-or-dynamic-dispatch; [features/worldview/chips.test.cjs:113](<../../../../../../features/worldview/chips.test.cjs#L113>)
- assert.equal — external-or-dynamic-dispatch; [features/worldview/chips.test.cjs:129](<../../../../../../features/worldview/chips.test.cjs#L129>)
- assert.equal — external-or-dynamic-dispatch; [features/worldview/chips.test.cjs:130](<../../../../../../features/worldview/chips.test.cjs#L130>)
- assert.equal — external-or-dynamic-dispatch; [features/worldview/chips.test.cjs:132](<../../../../../../features/worldview/chips.test.cjs#L132>)
- assert.notEqual — external-or-dynamic-dispatch; [features/worldview/chips.test.cjs:133](<../../../../../../features/worldview/chips.test.cjs#L133>)
- assert.deepEqual — external-or-dynamic-dispatch; [features/worldview/chips.test.cjs:134](<../../../../../../features/worldview/chips.test.cjs#L134>)
- assert.deepEqual — external-or-dynamic-dispatch; [features/worldview/chips.test.cjs:135](<../../../../../../features/worldview/chips.test.cjs#L135>)
- assert.throws — external-or-dynamic-dispatch; [features/worldview/chips.test.cjs:136](<../../../../../../features/worldview/chips.test.cjs#L136>)
- 4 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-0f867c2d2d02ee55"></a>

## &lt;anonymous@112:81&gt;.notify

[features/worldview/chips.test.cjs:116](<../../../../../../features/worldview/chips.test.cjs#L116>) · FunctionDeclaration · test · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Counts session publications for exactly-once mutation assertions.

Purpose evidence: jsdoc.

Lexical owner: [&lt;anonymous@112:81&gt;](<chips.test.cjs.md#s-5a388644096a684a>).

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

<a id="s-6a74a1bd5204f6d1"></a>

## &lt;anonymous@112:81&gt;.&lt;anonymous@136:17&gt;

[features/worldview/chips.test.cjs:136](<../../../../../../features/worldview/chips.test.cjs#L136>) · ArrowFunction · test · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@112:81&gt;](<chips.test.cjs.md#s-5a388644096a684a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [addSessionChip](<chip-session.ts.md#s-323a156c7123bc4e>) — [features/worldview/chips.test.cjs:136](<../../../../../../features/worldview/chips.test.cjs#L136>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-3992466e906dec4d"></a>

## &lt;anonymous@112:81&gt;.&lt;anonymous@138:5&gt;

[features/worldview/chips.test.cjs:138](<../../../../../../features/worldview/chips.test.cjs#L138>) · ArrowFunction · test · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@112:81&gt;](<chips.test.cjs.md#s-5a388644096a684a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [moveSessionChip](<chip-session.ts.md#s-ca7fa5bab39f79d9>) — [features/worldview/chips.test.cjs:138](<../../../../../../features/worldview/chips.test.cjs#L138>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-10e26ccfad544496"></a>

## &lt;anonymous@148:70&gt;

[features/worldview/chips.test.cjs:148](<../../../../../../features/worldview/chips.test.cjs#L148>) · ArrowFunction · test · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [features/worldview/chips.test.cjs](<chips.test.cjs.md#s-ddb62c1c016d591c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [getSessionChips](<chip-session.ts.md#s-4bccdef1d4d202d5>) — [features/worldview/chips.test.cjs:149](<../../../../../../features/worldview/chips.test.cjs#L149>)
- [addSessionChip](<chip-session.ts.md#s-323a156c7123bc4e>) — [features/worldview/chips.test.cjs:158](<../../../../../../features/worldview/chips.test.cjs#L158>)
- [getSessionChips](<chip-session.ts.md#s-4bccdef1d4d202d5>) — [features/worldview/chips.test.cjs:159](<../../../../../../features/worldview/chips.test.cjs#L159>)
- [updateSessionChip](<chip-session.ts.md#s-ea5b80cfa0863cae>) — [features/worldview/chips.test.cjs:168](<../../../../../../features/worldview/chips.test.cjs#L168>)
- [getSessionChips](<chip-session.ts.md#s-4bccdef1d4d202d5>) — [features/worldview/chips.test.cjs:169](<../../../../../../features/worldview/chips.test.cjs#L169>)
- [getSessionChips](<chip-session.ts.md#s-4bccdef1d4d202d5>) — [features/worldview/chips.test.cjs:174](<../../../../../../features/worldview/chips.test.cjs#L174>)
- [getSessionChips](<chip-session.ts.md#s-4bccdef1d4d202d5>) — [features/worldview/chips.test.cjs:176](<../../../../../../features/worldview/chips.test.cjs#L176>)
- [updateSessionChip](<chip-session.ts.md#s-ea5b80cfa0863cae>) — [features/worldview/chips.test.cjs:177](<../../../../../../features/worldview/chips.test.cjs#L177>)
- [getSessionChips](<chip-session.ts.md#s-4bccdef1d4d202d5>) — [features/worldview/chips.test.cjs:178](<../../../../../../features/worldview/chips.test.cjs#L178>)
- [removeSessionChip](<chip-session.ts.md#s-6d3b3ae95e4a805a>) — [features/worldview/chips.test.cjs:179](<../../../../../../features/worldview/chips.test.cjs#L179>)
- [getSessionChips](<chip-session.ts.md#s-4bccdef1d4d202d5>) — [features/worldview/chips.test.cjs:180](<../../../../../../features/worldview/chips.test.cjs#L180>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 7.

- assert.deepEqual — external-or-dynamic-dispatch; [features/worldview/chips.test.cjs:169](<../../../../../../features/worldview/chips.test.cjs#L169>)
- assert.deepEqual — external-or-dynamic-dispatch; [features/worldview/chips.test.cjs:173](<../../../../../../features/worldview/chips.test.cjs#L173>)
- assert.throws — external-or-dynamic-dispatch; [features/worldview/chips.test.cjs:175](<../../../../../../features/worldview/chips.test.cjs#L175>)
- assert.equal — external-or-dynamic-dispatch; [features/worldview/chips.test.cjs:176](<../../../../../../features/worldview/chips.test.cjs#L176>)
- assert.equal — external-or-dynamic-dispatch; [features/worldview/chips.test.cjs:178](<../../../../../../features/worldview/chips.test.cjs#L178>)
- getSessionChips().at — external-or-dynamic-dispatch; [features/worldview/chips.test.cjs:178](<../../../../../../features/worldview/chips.test.cjs#L178>)
- assert.deepEqual — external-or-dynamic-dispatch; [features/worldview/chips.test.cjs:180](<../../../../../../features/worldview/chips.test.cjs#L180>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-8d5cf8fb8ebc7189"></a>

## &lt;anonymous@148:70&gt;.&lt;anonymous@175:17&gt;

[features/worldview/chips.test.cjs:175](<../../../../../../features/worldview/chips.test.cjs#L175>) · ArrowFunction · test · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@148:70&gt;](<chips.test.cjs.md#s-10e26ccfad544496>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [updateSessionChip](<chip-session.ts.md#s-ea5b80cfa0863cae>) — [features/worldview/chips.test.cjs:175](<../../../../../../features/worldview/chips.test.cjs#L175>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-3c93037ba54e5f5b"></a>

## &lt;anonymous@184:96&gt;

[features/worldview/chips.test.cjs:184](<../../../../../../features/worldview/chips.test.cjs#L184>) · ArrowFunction · test · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [features/worldview/chips.test.cjs](<chips.test.cjs.md#s-ddb62c1c016d591c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [getSessionChips](<chip-session.ts.md#s-4bccdef1d4d202d5>) — [features/worldview/chips.test.cjs:185](<../../../../../../features/worldview/chips.test.cjs#L185>)
- [addSessionChip](<chip-session.ts.md#s-323a156c7123bc4e>) — [features/worldview/chips.test.cjs:194](<../../../../../../features/worldview/chips.test.cjs#L194>)
- [addSessionChip](<chip-session.ts.md#s-323a156c7123bc4e>) — [features/worldview/chips.test.cjs:195](<../../../../../../features/worldview/chips.test.cjs#L195>)
- [getSessionChips](<chip-session.ts.md#s-4bccdef1d4d202d5>) — [features/worldview/chips.test.cjs:196](<../../../../../../features/worldview/chips.test.cjs#L196>)
- [subscribeChips](<chip-session.ts.md#s-84efc8cede0b1c37>) — [features/worldview/chips.test.cjs:202](<../../../../../../features/worldview/chips.test.cjs#L202>)
- [removeSessionChip](<chip-session.ts.md#s-6d3b3ae95e4a805a>) — [features/worldview/chips.test.cjs:203](<../../../../../../features/worldview/chips.test.cjs#L203>)
- [getSessionChips](<chip-session.ts.md#s-4bccdef1d4d202d5>) — [features/worldview/chips.test.cjs:205](<../../../../../../features/worldview/chips.test.cjs#L205>)
- [findAvailableChipPosition](<chips.ts.md#s-98577f9be7d02bb8>) — [features/worldview/chips.test.cjs:208](<../../../../../../features/worldview/chips.test.cjs#L208>)
- [getSessionChips](<chip-session.ts.md#s-4bccdef1d4d202d5>) — [features/worldview/chips.test.cjs:208](<../../../../../../features/worldview/chips.test.cjs#L208>)
- [getSessionChips](<chip-session.ts.md#s-4bccdef1d4d202d5>) — [features/worldview/chips.test.cjs:211](<../../../../../../features/worldview/chips.test.cjs#L211>)
- [removeSessionChip](<chip-session.ts.md#s-6d3b3ae95e4a805a>) — [features/worldview/chips.test.cjs:212](<../../../../../../features/worldview/chips.test.cjs#L212>)
- [removeSessionChip](<chip-session.ts.md#s-6d3b3ae95e4a805a>) — [features/worldview/chips.test.cjs:213](<../../../../../../features/worldview/chips.test.cjs#L213>)
- [getSessionChips](<chip-session.ts.md#s-4bccdef1d4d202d5>) — [features/worldview/chips.test.cjs:214](<../../../../../../features/worldview/chips.test.cjs#L214>)
- [removeSessionChip](<chip-session.ts.md#s-6d3b3ae95e4a805a>) — [features/worldview/chips.test.cjs:216](<../../../../../../features/worldview/chips.test.cjs#L216>)
- [getSessionChips](<chip-session.ts.md#s-4bccdef1d4d202d5>) — [features/worldview/chips.test.cjs:218](<../../../../../../features/worldview/chips.test.cjs#L218>)
- [removeSessionChip](<chip-session.ts.md#s-6d3b3ae95e4a805a>) — [features/worldview/chips.test.cjs:220](<../../../../../../features/worldview/chips.test.cjs#L220>)
- [getSessionChips](<chip-session.ts.md#s-4bccdef1d4d202d5>) — [features/worldview/chips.test.cjs:221](<../../../../../../features/worldview/chips.test.cjs#L221>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 14.

- assert.equal — external-or-dynamic-dispatch; [features/worldview/chips.test.cjs:203](<../../../../../../features/worldview/chips.test.cjs#L203>)
- assert.equal — external-or-dynamic-dispatch; [features/worldview/chips.test.cjs:204](<../../../../../../features/worldview/chips.test.cjs#L204>)
- assert.deepEqual — external-or-dynamic-dispatch; [features/worldview/chips.test.cjs:205](<../../../../../../features/worldview/chips.test.cjs#L205>)
- assert.deepEqual — external-or-dynamic-dispatch; [features/worldview/chips.test.cjs:206](<../../../../../../features/worldview/chips.test.cjs#L206>)
- assert.deepEqual — external-or-dynamic-dispatch; [features/worldview/chips.test.cjs:207](<../../../../../../features/worldview/chips.test.cjs#L207>)
- assert.equal — external-or-dynamic-dispatch; [features/worldview/chips.test.cjs:212](<../../../../../../features/worldview/chips.test.cjs#L212>)
- assert.equal — external-or-dynamic-dispatch; [features/worldview/chips.test.cjs:213](<../../../../../../features/worldview/chips.test.cjs#L213>)
- assert.equal — external-or-dynamic-dispatch; [features/worldview/chips.test.cjs:214](<../../../../../../features/worldview/chips.test.cjs#L214>)
- 6 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-3e098e663dcf6b5e"></a>

## &lt;anonymous@184:96&gt;.notifyDeletion

[features/worldview/chips.test.cjs:199](<../../../../../../features/worldview/chips.test.cjs#L199>) · FunctionDeclaration · test · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Counts deletion publications to guard against duplicate or missing-ID notifications.

Purpose evidence: jsdoc.

Lexical owner: [&lt;anonymous@184:96&gt;](<chips.test.cjs.md#s-3c93037ba54e5f5b>).

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
