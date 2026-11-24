# electron/engine-signing.test.cjs: symbols

[Atlas](<../../../README.md>) / [Electron composition and IPC security](<../../../modules/desktop.md>) / [electron/engine-signing.test.cjs:1](<../../../../../electron/engine-signing.test.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/engine-signing.test.cjs](<engine-signing.test.cjs.md#s-ed5fed1a78359a49>) (Module)
- [fixture](<engine-signing.test.cjs.md#s-7b808f72af17b9f9>) (FunctionDeclaration)
- [fixture.&lt;anonymous@28:11&gt;](<engine-signing.test.cjs.md#s-2bdcc5c2b4cc13eb>) (ArrowFunction)
- [&lt;anonymous@43:114&gt;](<engine-signing.test.cjs.md#s-3f1693c64119836b>) (ArrowFunction)
- [&lt;anonymous@84:116&gt;](<engine-signing.test.cjs.md#s-02bf4bb73d3661ee>) (ArrowFunction)
- [&lt;anonymous@100:109&gt;](<engine-signing.test.cjs.md#s-6bb332f41f761ed8>) (ArrowFunction)
- [initTemporaryEntry](<engine-signing.test.cjs.md#s-2db75a0c9a167587>) (FunctionDeclaration)
- [&lt;anonymous@176:104&gt;](<engine-signing.test.cjs.md#s-090bc15d5cdc7060>) (ArrowFunction)
- [&lt;anonymous@194:103&gt;](<engine-signing.test.cjs.md#s-41839bdef2512cfd>) (ArrowFunction)
- [&lt;anonymous@194:103&gt;.authorize](<engine-signing.test.cjs.md#s-bdc7bcb9002eba37>) (ArrowFunction)
- [&lt;anonymous@194:103&gt;.fetchImpl](<engine-signing.test.cjs.md#s-786bfaa6abb7fb8d>) (ArrowFunction)
- [&lt;anonymous@257:107&gt;](<engine-signing.test.cjs.md#s-49e5664997f76bff>) (ArrowFunction)
- [&lt;anonymous@257:107&gt;.cli](<engine-signing.test.cjs.md#s-0c13933435439588>) (ArrowFunction)

<a id="s-ed5fed1a78359a49"></a>

## electron/engine-signing.test.cjs

[electron/engine-signing.test.cjs:1](<../../../../../electron/engine-signing.test.cjs#L1>) · Module · test · [Electron composition and IPC security](<../../../modules/desktop.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 17.

- require — module-loader; [electron/engine-signing.test.cjs:1](<../../../../../electron/engine-signing.test.cjs#L1>)
- require — module-loader; [electron/engine-signing.test.cjs:2](<../../../../../electron/engine-signing.test.cjs#L2>)
- require — module-loader; [electron/engine-signing.test.cjs:3](<../../../../../electron/engine-signing.test.cjs#L3>)
- require — module-loader; [electron/engine-signing.test.cjs:4](<../../../../../electron/engine-signing.test.cjs#L4>)
- require — module-loader; [electron/engine-signing.test.cjs:5](<../../../../../electron/engine-signing.test.cjs#L5>)
- require — module-loader; [electron/engine-signing.test.cjs:6](<../../../../../electron/engine-signing.test.cjs#L6>)
- require — module-loader; [electron/engine-signing.test.cjs:7](<../../../../../electron/engine-signing.test.cjs#L7>)
- require — module-loader; [electron/engine-signing.test.cjs:11](<../../../../../electron/engine-signing.test.cjs#L11>)
- 9 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-7b808f72af17b9f9"></a>

## fixture

[electron/engine-signing.test.cjs:24](<../../../../../electron/engine-signing.test.cjs#L24>) · FunctionDeclaration · test · [Electron composition and IPC security](<../../../modules/desktop.md>)

Uses real cryptography and disposable package/Universe files. Private keys stay outside package sources and all fixture paths are removed after the test.

Purpose evidence: jsdoc.

Lexical owner: [electron/engine-signing.test.cjs](<engine-signing.test.cjs.md#s-ed5fed1a78359a49>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| t | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [initPackage](<engines/registry/authoring.cjs.md#s-bbfb28bee2f9c0b0>) — [electron/engine-signing.test.cjs:38](<../../../../../electron/engine-signing.test.cjs#L38>)

**Called by (statically resolved):**

- [&lt;anonymous@43:114&gt;](<engine-signing.test.cjs.md#s-3f1693c64119836b>) — [electron/engine-signing.test.cjs:44](<../../../../../electron/engine-signing.test.cjs#L44>)
- [&lt;anonymous@84:116&gt;](<engine-signing.test.cjs.md#s-02bf4bb73d3661ee>) — [electron/engine-signing.test.cjs:85](<../../../../../electron/engine-signing.test.cjs#L85>)
- [&lt;anonymous@100:109&gt;](<engine-signing.test.cjs.md#s-6bb332f41f761ed8>) — [electron/engine-signing.test.cjs:101](<../../../../../electron/engine-signing.test.cjs#L101>)
- [&lt;anonymous@176:104&gt;](<engine-signing.test.cjs.md#s-090bc15d5cdc7060>) — [electron/engine-signing.test.cjs:177](<../../../../../electron/engine-signing.test.cjs#L177>)
- [&lt;anonymous@194:103&gt;](<engine-signing.test.cjs.md#s-41839bdef2512cfd>) — [electron/engine-signing.test.cjs:195](<../../../../../electron/engine-signing.test.cjs#L195>)
- [&lt;anonymous@257:107&gt;](<engine-signing.test.cjs.md#s-49e5664997f76bff>) — [electron/engine-signing.test.cjs:258](<../../../../../electron/engine-signing.test.cjs#L258>)

Unresolved / external call sites: 9.

- fs.mkdtemp — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:25](<../../../../../electron/engine-signing.test.cjs#L25>)
- path.join — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:26](<../../../../../electron/engine-signing.test.cjs#L26>)
- os.tmpdir — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:26](<../../../../../electron/engine-signing.test.cjs#L26>)
- t.after — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:28](<../../../../../electron/engine-signing.test.cjs#L28>)
- path.join — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:34](<../../../../../electron/engine-signing.test.cjs#L34>)
- path.join — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:35](<../../../../../electron/engine-signing.test.cjs#L35>)
- path.join — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:36](<../../../../../electron/engine-signing.test.cjs#L36>)
- path.join — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:37](<../../../../../electron/engine-signing.test.cjs#L37>)
- 1 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/engine-signing.test.cjs:44](<../../../../../electron/engine-signing.test.cjs#L44>) — static-call-site; coverage not established.
- [electron/engine-signing.test.cjs:85](<../../../../../electron/engine-signing.test.cjs#L85>) — static-call-site; coverage not established.
- [electron/engine-signing.test.cjs:101](<../../../../../electron/engine-signing.test.cjs#L101>) — static-call-site; coverage not established.
- [electron/engine-signing.test.cjs:177](<../../../../../electron/engine-signing.test.cjs#L177>) — static-call-site; coverage not established.
- [electron/engine-signing.test.cjs:195](<../../../../../electron/engine-signing.test.cjs#L195>) — static-call-site; coverage not established.
- [electron/engine-signing.test.cjs:258](<../../../../../electron/engine-signing.test.cjs#L258>) — static-call-site; coverage not established.

<a id="s-2bdcc5c2b4cc13eb"></a>

## fixture.&lt;anonymous@28:11&gt;

[electron/engine-signing.test.cjs:28](<../../../../../electron/engine-signing.test.cjs#L28>) · ArrowFunction · test · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [fixture](<engine-signing.test.cjs.md#s-7b808f72af17b9f9>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 6.

- assert.ok — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:29](<../../../../../electron/engine-signing.test.cjs#L29>)
- path.resolve(root).startsWith — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:30](<../../../../../electron/engine-signing.test.cjs#L30>)
- path.resolve — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:30](<../../../../../electron/engine-signing.test.cjs#L30>)
- path.resolve — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:30](<../../../../../electron/engine-signing.test.cjs#L30>)
- os.tmpdir — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:30](<../../../../../electron/engine-signing.test.cjs#L30>)
- fs.rm — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:32](<../../../../../electron/engine-signing.test.cjs#L32>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-3f1693c64119836b"></a>

## &lt;anonymous@43:114&gt;

[electron/engine-signing.test.cjs:43](<../../../../../electron/engine-signing.test.cjs#L43>) · ArrowFunction · test · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/engine-signing.test.cjs](<engine-signing.test.cjs.md#s-ed5fed1a78359a49>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| t | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [fixture](<engine-signing.test.cjs.md#s-7b808f72af17b9f9>) — [electron/engine-signing.test.cjs:44](<../../../../../electron/engine-signing.test.cjs#L44>)
- [createSigningKey](<engines/registry/signing.cjs.md#s-dbf5e585ccf2aea6>) — [electron/engine-signing.test.cjs:46](<../../../../../electron/engine-signing.test.cjs#L46>)
- [createSigningKey](<engines/registry/signing.cjs.md#s-dbf5e585ccf2aea6>) — [electron/engine-signing.test.cjs:59](<../../../../../electron/engine-signing.test.cjs#L59>)
- [signPackage](<engines/registry/signing.cjs.md#s-9317466d274715e3>) — [electron/engine-signing.test.cjs:64](<../../../../../electron/engine-signing.test.cjs#L64>)
- [signPackage](<engines/registry/signing.cjs.md#s-9317466d274715e3>) — [electron/engine-signing.test.cjs:68](<../../../../../electron/engine-signing.test.cjs#L68>)
- [signPackage](<engines/registry/signing.cjs.md#s-9317466d274715e3>) — [electron/engine-signing.test.cjs:71](<../../../../../electron/engine-signing.test.cjs#L71>)
- [verifyPackage](<engines/registry/signing.cjs.md#s-3b8c467c9b1420c7>) — [electron/engine-signing.test.cjs:74](<../../../../../electron/engine-signing.test.cjs#L74>)
- [createSigningKey](<engines/registry/signing.cjs.md#s-dbf5e585ccf2aea6>) — [electron/engine-signing.test.cjs:78](<../../../../../electron/engine-signing.test.cjs#L78>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 18.

- fs.readFile — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:51](<../../../../../electron/engine-signing.test.cjs#L51>)
- assert.match — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:52](<../../../../../electron/engine-signing.test.cjs#L52>)
- assert.equal — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:53](<../../../../../electron/engine-signing.test.cjs#L53>)
- assert.match — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:54](<../../../../../electron/engine-signing.test.cjs#L54>)
- assert.doesNotMatch — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:55](<../../../../../electron/engine-signing.test.cjs#L55>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:56](<../../../../../electron/engine-signing.test.cjs#L56>)
- assert.rejects — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:59](<../../../../../electron/engine-signing.test.cjs#L59>)
- assert.equal — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:62](<../../../../../electron/engine-signing.test.cjs#L62>)
- 10 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-02bf4bb73d3661ee"></a>

## &lt;anonymous@84:116&gt;

[electron/engine-signing.test.cjs:84](<../../../../../electron/engine-signing.test.cjs#L84>) · ArrowFunction · test · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/engine-signing.test.cjs](<engine-signing.test.cjs.md#s-ed5fed1a78359a49>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| t | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [fixture](<engine-signing.test.cjs.md#s-7b808f72af17b9f9>) — [electron/engine-signing.test.cjs:85](<../../../../../electron/engine-signing.test.cjs#L85>)
- [createSigningKey](<engines/registry/signing.cjs.md#s-dbf5e585ccf2aea6>) — [electron/engine-signing.test.cjs:86](<../../../../../electron/engine-signing.test.cjs#L86>)
- [signPackage](<engines/registry/signing.cjs.md#s-9317466d274715e3>) — [electron/engine-signing.test.cjs:87](<../../../../../electron/engine-signing.test.cjs#L87>)
- [verifyPackage](<engines/registry/signing.cjs.md#s-3b8c467c9b1420c7>) — [electron/engine-signing.test.cjs:94](<../../../../../electron/engine-signing.test.cjs#L94>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 11.

- path.join — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:88](<../../../../../electron/engine-signing.test.cjs#L88>)
- JSON.parse — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:89](<../../../../../electron/engine-signing.test.cjs#L89>)
- fs.readFile — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:89](<../../../../../electron/engine-signing.test.cjs#L89>)
- fs.writeFile — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:90](<../../../../../electron/engine-signing.test.cjs#L90>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:92](<../../../../../electron/engine-signing.test.cjs#L92>)
- Object.fromEntries — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:92](<../../../../../electron/engine-signing.test.cjs#L92>)
- Object.entries(manifest).reverse — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:92](<../../../../../electron/engine-signing.test.cjs#L92>)
- Object.entries — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:92](<../../../../../electron/engine-signing.test.cjs#L92>)
- 3 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-6bb332f41f761ed8"></a>

## &lt;anonymous@100:109&gt;

[electron/engine-signing.test.cjs:100](<../../../../../electron/engine-signing.test.cjs#L100>) · ArrowFunction · test · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/engine-signing.test.cjs](<engine-signing.test.cjs.md#s-ed5fed1a78359a49>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| t | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [fixture](<engine-signing.test.cjs.md#s-7b808f72af17b9f9>) — [electron/engine-signing.test.cjs:101](<../../../../../electron/engine-signing.test.cjs#L101>)
- [createSigningKey](<engines/registry/signing.cjs.md#s-dbf5e585ccf2aea6>) — [electron/engine-signing.test.cjs:102](<../../../../../electron/engine-signing.test.cjs#L102>)
- [signPackage](<engines/registry/signing.cjs.md#s-9317466d274715e3>) — [electron/engine-signing.test.cjs:103](<../../../../../electron/engine-signing.test.cjs#L103>)
- [inspectPackage](<engines/registry/package.cjs.md#s-71ed017a00706142>) — [electron/engine-signing.test.cjs:111](<../../../../../electron/engine-signing.test.cjs#L111>)
- [inspectPackage](<engines/registry/package.cjs.md#s-71ed017a00706142>) — [electron/engine-signing.test.cjs:125](<../../../../../electron/engine-signing.test.cjs#L125>)
- [inspectPackage](<engines/registry/package.cjs.md#s-71ed017a00706142>) — [electron/engine-signing.test.cjs:138](<../../../../../electron/engine-signing.test.cjs#L138>)
- [inspectPackage](<engines/registry/package.cjs.md#s-71ed017a00706142>) — [electron/engine-signing.test.cjs:143](<../../../../../electron/engine-signing.test.cjs#L143>)
- [initTemporaryEntry](<engine-signing.test.cjs.md#s-2db75a0c9a167587>) — [electron/engine-signing.test.cjs:148](<../../../../../electron/engine-signing.test.cjs#L148>)
- [inspectPackage](<engines/registry/package.cjs.md#s-71ed017a00706142>) — [electron/engine-signing.test.cjs:157](<../../../../../electron/engine-signing.test.cjs#L157>)
- [createSigningKey](<engines/registry/signing.cjs.md#s-dbf5e585ccf2aea6>) — [electron/engine-signing.test.cjs:163](<../../../../../electron/engine-signing.test.cjs#L163>)
- [verifyPackage](<engines/registry/signing.cjs.md#s-3b8c467c9b1420c7>) — [electron/engine-signing.test.cjs:164](<../../../../../electron/engine-signing.test.cjs#L164>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 28.

- path.join — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:104](<../../../../../electron/engine-signing.test.cjs#L104>)
- fs.readFile — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:105](<../../../../../electron/engine-signing.test.cjs#L105>)
- JSON.parse — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:106](<../../../../../electron/engine-signing.test.cjs#L106>)
- fs.writeFile — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:107](<../../../../../electron/engine-signing.test.cjs#L107>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:109](<../../../../../electron/engine-signing.test.cjs#L109>)
- assert.rejects — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:111](<../../../../../electron/engine-signing.test.cjs#L111>)
- fs.writeFile — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:115](<../../../../../electron/engine-signing.test.cjs#L115>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:117](<../../../../../electron/engine-signing.test.cjs#L117>)
- 20 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-2db75a0c9a167587"></a>

## initTemporaryEntry

[electron/engine-signing.test.cjs:170](<../../../../../electron/engine-signing.test.cjs#L170>) · FunctionDeclaration · test · [Electron composition and IPC security](<../../../modules/desktop.md>)

Reads an untouched generated entry for tamper recovery without copying implementation text into the test.

Purpose evidence: jsdoc.

Lexical owner: [electron/engine-signing.test.cjs](<engine-signing.test.cjs.md#s-ed5fed1a78359a49>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [initPackage](<engines/registry/authoring.cjs.md#s-bbfb28bee2f9c0b0>) — [electron/engine-signing.test.cjs:172](<../../../../../electron/engine-signing.test.cjs#L172>)

**Called by (statically resolved):**

- [&lt;anonymous@100:109&gt;](<engine-signing.test.cjs.md#s-6bb332f41f761ed8>) — [electron/engine-signing.test.cjs:148](<../../../../../electron/engine-signing.test.cjs#L148>)

Unresolved / external call sites: 3.

- path.join — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:171](<../../../../../electron/engine-signing.test.cjs#L171>)
- fs.readFile — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:173](<../../../../../electron/engine-signing.test.cjs#L173>)
- path.join — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:173](<../../../../../electron/engine-signing.test.cjs#L173>)

**Related tests / acceptance harnesses:**

- [electron/engine-signing.test.cjs:148](<../../../../../electron/engine-signing.test.cjs#L148>) — static-call-site; coverage not established.

<a id="s-090bc15d5cdc7060"></a>

## &lt;anonymous@176:104&gt;

[electron/engine-signing.test.cjs:176](<../../../../../electron/engine-signing.test.cjs#L176>) · ArrowFunction · test · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/engine-signing.test.cjs](<engine-signing.test.cjs.md#s-ed5fed1a78359a49>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| t | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [fixture](<engine-signing.test.cjs.md#s-7b808f72af17b9f9>) — [electron/engine-signing.test.cjs:177](<../../../../../electron/engine-signing.test.cjs#L177>)
- [verifyPackage](<engines/registry/signing.cjs.md#s-3b8c467c9b1420c7>) — [electron/engine-signing.test.cjs:178](<../../../../../electron/engine-signing.test.cjs#L178>)
- [createSigningKey](<engines/registry/signing.cjs.md#s-dbf5e585ccf2aea6>) — [electron/engine-signing.test.cjs:181](<../../../../../electron/engine-signing.test.cjs#L181>)
- [signPackage](<engines/registry/signing.cjs.md#s-9317466d274715e3>) — [electron/engine-signing.test.cjs:182](<../../../../../electron/engine-signing.test.cjs#L182>)
- [sealPackage](<engines/registry/package.cjs.md#s-d9c25ce14dcf2863>) — [electron/engine-signing.test.cjs:184](<../../../../../electron/engine-signing.test.cjs#L184>)
- [signPackage](<engines/registry/signing.cjs.md#s-9317466d274715e3>) — [electron/engine-signing.test.cjs:189](<../../../../../electron/engine-signing.test.cjs#L189>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 8.

- assert.rejects — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:178](<../../../../../electron/engine-signing.test.cjs#L178>)
- fs.appendFile — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:183](<../../../../../electron/engine-signing.test.cjs#L183>)
- path.join — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:183](<../../../../../electron/engine-signing.test.cjs#L183>)
- assert.equal — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:185](<../../../../../electron/engine-signing.test.cjs#L185>)
- assert.equal — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:186](<../../../../../electron/engine-signing.test.cjs#L186>)
- path.join — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:187](<../../../../../electron/engine-signing.test.cjs#L187>)
- fs.copyFile — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:188](<../../../../../electron/engine-signing.test.cjs#L188>)
- assert.rejects — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:189](<../../../../../electron/engine-signing.test.cjs#L189>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-41839bdef2512cfd"></a>

## &lt;anonymous@194:103&gt;

[electron/engine-signing.test.cjs:194](<../../../../../electron/engine-signing.test.cjs#L194>) · ArrowFunction · test · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/engine-signing.test.cjs](<engine-signing.test.cjs.md#s-ed5fed1a78359a49>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| t | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [fixture](<engine-signing.test.cjs.md#s-7b808f72af17b9f9>) — [electron/engine-signing.test.cjs:195](<../../../../../electron/engine-signing.test.cjs#L195>)
- [createSigningKey](<engines/registry/signing.cjs.md#s-dbf5e585ccf2aea6>) — [electron/engine-signing.test.cjs:196](<../../../../../electron/engine-signing.test.cjs#L196>)
- [signPackage](<engines/registry/signing.cjs.md#s-9317466d274715e3>) — [electron/engine-signing.test.cjs:197](<../../../../../electron/engine-signing.test.cjs#L197>)
- [EnginePackageRegistry.constructor](<engines/registry/registry.cjs.md#s-67d4e7282499da54>) — [electron/engine-signing.test.cjs:209](<../../../../../electron/engine-signing.test.cjs#L209>)
- [inspectPackage](<engines/registry/package.cjs.md#s-71ed017a00706142>) — [electron/engine-signing.test.cjs:212](<../../../../../electron/engine-signing.test.cjs#L212>)
- [pullPackage](<engines/registry/authoring.cjs.md#s-dd26bc55111fb682>) — [electron/engine-signing.test.cjs:213](<../../../../../electron/engine-signing.test.cjs#L213>)
- [EnginePackageRegistry.catalog](<engines/registry/registry.cjs.md#s-31238ee0e1cb396f>) — [electron/engine-signing.test.cjs:224](<../../../../../electron/engine-signing.test.cjs#L224>)
- [EnginePackageRegistry.link](<engines/registry/registry.cjs.md#s-cc2ef75797a08101>) — [electron/engine-signing.test.cjs:228](<../../../../../electron/engine-signing.test.cjs#L228>)
- [EnginePackageRegistry.trust](<engines/registry/registry.cjs.md#s-875db17c7cae1a9d>) — [electron/engine-signing.test.cjs:235](<../../../../../electron/engine-signing.test.cjs#L235>)
- [EnginePackageRegistry.link](<engines/registry/registry.cjs.md#s-cc2ef75797a08101>) — [electron/engine-signing.test.cjs:236](<../../../../../electron/engine-signing.test.cjs#L236>)
- [EnginePackageRegistry.catalog](<engines/registry/registry.cjs.md#s-31238ee0e1cb396f>) — [electron/engine-signing.test.cjs:241](<../../../../../electron/engine-signing.test.cjs#L241>)
- [EnginePackageRegistry.execute](<engines/registry/registry.cjs.md#s-a35bb6e14bafba1e>) — [electron/engine-signing.test.cjs:243](<../../../../../electron/engine-signing.test.cjs#L243>)
- [EnginePackageRegistry.readResult](<engines/registry/registry.cjs.md#s-d6c27a69455a5f09>) — [electron/engine-signing.test.cjs:252](<../../../../../electron/engine-signing.test.cjs#L252>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 9.

- require("./domains/entity/worldview-store.cjs").saveWorldViewChip — signature-only-candidate; [electron/engine-signing.test.cjs:198](<../../../../../electron/engine-signing.test.cjs#L198>)
- require — module-loader; [electron/engine-signing.test.cjs:198](<../../../../../electron/engine-signing.test.cjs#L198>)
- assert.equal — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:223](<../../../../../electron/engine-signing.test.cjs#L223>)
- assert.equal — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:225](<../../../../../electron/engine-signing.test.cjs#L225>)
- assert.deepEqual — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:226](<../../../../../electron/engine-signing.test.cjs#L226>)
- assert.rejects — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:227](<../../../../../electron/engine-signing.test.cjs#L227>)
- assert.equal — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:242](<../../../../../electron/engine-signing.test.cjs#L242>)
- assert.deepEqual — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:250](<../../../../../electron/engine-signing.test.cjs#L250>)
- 1 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-bdc7bcb9002eba37"></a>

## &lt;anonymous@194:103&gt;.authorize

[electron/engine-signing.test.cjs:210](<../../../../../electron/engine-signing.test.cjs#L210>) · ArrowFunction · test · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@194:103&gt;](<engine-signing.test.cjs.md#s-41839bdef2512cfd>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-786bfaa6abb7fb8d"></a>

## &lt;anonymous@194:103&gt;.fetchImpl

[electron/engine-signing.test.cjs:217](<../../../../../electron/engine-signing.test.cjs#L217>) · ArrowFunction · test · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@194:103&gt;](<engine-signing.test.cjs.md#s-41839bdef2512cfd>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| url | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- Response — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:218](<../../../../../electron/engine-signing.test.cjs#L218>)
- checked.files.get — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:219](<../../../../../electron/engine-signing.test.cjs#L219>)
- new URL(url).pathname.split("/").at — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:219](<../../../../../electron/engine-signing.test.cjs#L219>)
- new URL(url).pathname.split — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:219](<../../../../../electron/engine-signing.test.cjs#L219>)
- URL — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:219](<../../../../../electron/engine-signing.test.cjs#L219>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-49e5664997f76bff"></a>

## &lt;anonymous@257:107&gt;

[electron/engine-signing.test.cjs:257](<../../../../../electron/engine-signing.test.cjs#L257>) · ArrowFunction · test · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/engine-signing.test.cjs](<engine-signing.test.cjs.md#s-ed5fed1a78359a49>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| t | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [fixture](<engine-signing.test.cjs.md#s-7b808f72af17b9f9>) — [electron/engine-signing.test.cjs:258](<../../../../../electron/engine-signing.test.cjs#L258>)
- [&lt;anonymous@257:107&gt;.cli](<engine-signing.test.cjs.md#s-0c13933435439588>) — [electron/engine-signing.test.cjs:273](<../../../../../electron/engine-signing.test.cjs#L273>)
- [&lt;anonymous@257:107&gt;.cli](<engine-signing.test.cjs.md#s-0c13933435439588>) — [electron/engine-signing.test.cjs:282](<../../../../../electron/engine-signing.test.cjs#L282>)
- [&lt;anonymous@257:107&gt;.cli](<engine-signing.test.cjs.md#s-0c13933435439588>) — [electron/engine-signing.test.cjs:291](<../../../../../electron/engine-signing.test.cjs#L291>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 6.

- path.resolve — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:259](<../../../../../electron/engine-signing.test.cjs#L259>)
- assert.equal — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:281](<../../../../../electron/engine-signing.test.cjs#L281>)
- assert.equal — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:290](<../../../../../electron/engine-signing.test.cjs#L290>)
- assert.equal — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:298](<../../../../../electron/engine-signing.test.cjs#L298>)
- assert.doesNotMatch — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:299](<../../../../../electron/engine-signing.test.cjs#L299>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:300](<../../../../../electron/engine-signing.test.cjs#L300>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-0c13933435439588"></a>

## &lt;anonymous@257:107&gt;.cli

[electron/engine-signing.test.cjs:260](<../../../../../electron/engine-signing.test.cjs#L260>) · ArrowFunction · test · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@257:107&gt;](<engine-signing.test.cjs.md#s-49e5664997f76bff>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| args | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@257:107&gt;](<engine-signing.test.cjs.md#s-49e5664997f76bff>) — [electron/engine-signing.test.cjs:273](<../../../../../electron/engine-signing.test.cjs#L273>)
- [&lt;anonymous@257:107&gt;](<engine-signing.test.cjs.md#s-49e5664997f76bff>) — [electron/engine-signing.test.cjs:282](<../../../../../electron/engine-signing.test.cjs#L282>)
- [&lt;anonymous@257:107&gt;](<engine-signing.test.cjs.md#s-49e5664997f76bff>) — [electron/engine-signing.test.cjs:291](<../../../../../electron/engine-signing.test.cjs#L291>)

Unresolved / external call sites: 3.

- JSON.parse — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:261](<../../../../../electron/engine-signing.test.cjs#L261>)
- promisify(execFile) — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:263](<../../../../../electron/engine-signing.test.cjs#L263>)
- promisify — external-or-dynamic-dispatch; [electron/engine-signing.test.cjs:263](<../../../../../electron/engine-signing.test.cjs#L263>)

**Related tests / acceptance harnesses:**

- [electron/engine-signing.test.cjs:273](<../../../../../electron/engine-signing.test.cjs#L273>) — static-call-site; coverage not established.
- [electron/engine-signing.test.cjs:282](<../../../../../electron/engine-signing.test.cjs#L282>) — static-call-site; coverage not established.
- [electron/engine-signing.test.cjs:291](<../../../../../electron/engine-signing.test.cjs#L291>) — static-call-site; coverage not established.
