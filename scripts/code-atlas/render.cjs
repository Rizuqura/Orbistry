const path = require("node:path");
const { MODULES } = require("./catalog.cjs");
const { compare } = require("./analyze.cjs");
const { dependencySvg, selectCallEdges, callSvg } = require("./graphs.cjs");

/** Escapes text embedded in generated Markdown tables and link labels. */
function md(value) {
  return String(value ?? "")
    .replace(/[\r\n]+/g, " ")
    .replace(/\\/g, "\\\\")
    .replace(/\|/g, "&#124;")
    .replace(/\[/g, "&#91;")
    .replace(/\]/g, "&#93;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/`/g, "&#96;");
}

/** Creates a repository-relative Markdown link, optionally to a source line or explicit generated anchor. */
function link(doc, target, label, fragment = "") {
  return `[${md(label)}](<${path.posix.relative(path.posix.dirname(doc), target)}${fragment ? "#" + fragment : ""}>)`;
}

/** Links one symbol to its generated detail without substituting similarly named declarations. */
function symbolLink(doc, symbol, label = symbol.qualifiedName) {
  return link(
    doc,
    `docs/code-atlas/symbols/files/${symbol.file}.md`,
    label,
    symbol.anchor,
  );
}

/** Links a verified declaration or call-site location back to source. */
function sourceLink(doc, file, line = 1) {
  return link(doc, file, `${file}:${line}`, `L${line}`);
}

/** Serializes generated JSON with fixed indentation and a terminal newline. */
function json(value) {
  return JSON.stringify(value, null, 2) + "\n";
}

/** Stores large arrays as one JSON record per line, retaining diffable ordering without repeated indentation overhead. */
function recordJson(value) {
  return (
    "{\n" +
    Object.entries(value)
      .map(
        ([key, entry]) =>
          `  ${JSON.stringify(key)}: ${Array.isArray(entry) ? "[\n" + entry.map((item) => "    " + JSON.stringify(item)).join(",\n") + "\n  ]" : JSON.stringify(entry)}`,
      )
      .join(",\n") +
    "\n}\n"
  );
}

/** Aggregates literal runtime production-file imports into editorial module edges; type-only and test imports remain in the full index. */
function moduleEdges(data) {
  const files = new Map(data.files.map((file) => [file.file, file]));
  const edges = new Map();
  for (const dependency of data.dependencies) {
    const from = files.get(dependency.from),
      to = files.get(dependency.target);
    if (
      !to ||
      from.role !== "production" ||
      to.role !== "production" ||
      dependency.typeOnly ||
      from.module === to.module
    )
      continue;
    const key = `${from.module}:${to.module}`;
    const entry = edges.get(key) ?? {
      from: from.module,
      to: to.module,
      sites: 0,
      evidence: [],
    };
    entry.sites++;
    entry.evidence.push({
      file: dependency.from,
      line: dependency.line,
      target: dependency.target,
      deferred: dependency.deferred,
    });
    edges.set(key, entry);
  }
  return [...edges.values()].sort((a, b) =>
    compare(`${a.from}:${a.to}`, `${b.from}:${b.to}`),
  );
}

/** Emits complete per-symbol details; missing comments and unresolved calls remain visible rather than receiving invented explanations. */
function symbolPages(data, output) {
  const byId = new Map(data.symbols.map((symbol) => [symbol.id, symbol]));
  const unresolvedByOwner = new Map();
  for (const site of data.unresolvedCalls) {
    const sites = unresolvedByOwner.get(site.from) ?? [];
    sites.push(site);
    unresolvedByOwner.set(site.from, sites);
  }
  for (const module of MODULES) {
    const doc = `docs/code-atlas/symbols/${module.id}.md`;
    const symbols = data.symbols.filter(
      (symbol) => symbol.module === module.id,
    );
    const lines = [
      `# ${module.name}: symbols`,
      "",
      `${link(doc, "docs/code-atlas/README.md", "Atlas")} / ${link(doc, `docs/code-atlas/modules/${module.id}.md`, "Module overview")}`,
      "",
      "Generated from AST declarations. Compiler-inferred contracts are approximate and exclude third-party/global types. Static call edges do not establish runtime execution, permissions or test coverage.",
      "",
      "## Source files",
      "",
    ];
    for (const file of data.files.filter((item) => item.module === module.id)) {
      const moduleSymbol = symbols.find(
        (symbol) => symbol.file === file.file && symbol.kind === "Module",
      );
      lines.push(
        `- ${symbolLink(doc, moduleSymbol, file.file)} (${file.role}; ${file.symbols.length - 1} declarations)`,
      );
    }
    output.set(doc, lines.join("\n") + "\n");
  }
  for (const file of data.files) {
    const module = MODULES.find((item) => item.id === file.module);
    const doc = `docs/code-atlas/symbols/files/${file.file}.md`;
    const symbols = data.symbols.filter((symbol) => symbol.file === file.file);
    const lines = [
      `# ${file.file}: symbols`,
      "",
      `${link(doc, "docs/code-atlas/README.md", "Atlas")} / ${link(doc, `docs/code-atlas/modules/${module.id}.md`, module.name)} / ${sourceLink(doc, file.file)}`,
      "",
      "Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.",
      "",
      "## Declarations",
      "",
    ];
    for (const symbol of symbols)
      lines.push(`- ${symbolLink(doc, symbol)} (${symbol.kind})`);
    for (const symbol of symbols) {
      lines.push(
        "",
        `<a id="${symbol.anchor}"></a>`,
        "",
        `## ${md(symbol.qualifiedName)}`,
        "",
        `${sourceLink(doc, symbol.file, symbol.line)} · ${md(symbol.kind)} · ${symbol.role} · ${link(doc, `docs/code-atlas/modules/${module.id}.md`, module.name)}`,
        "",
        md(symbol.purpose.text),
        "",
        `Purpose evidence: ${symbol.purpose.evidence}.`,
      );
      if (symbol.exports.length)
        lines.push(
          "",
          `Exported as: ${symbol.exports.map((entry) => `${md(entry.name)} (${sourceLink(doc, entry.file)})`).join(", ")}.`,
        );
      if (symbol.ownerId)
        lines.push(
          "",
          `Lexical owner: ${symbolLink(doc, byId.get(symbol.ownerId))}.`,
        );
      if (symbol.callable) {
        lines.push(
          "",
          "| Parameter | Contract | Evidence | Optional / rest |",
          "| --- | --- | --- | --- |",
        );
        for (const parameter of symbol.parameters)
          lines.push(
            `| ${md(parameter.name)} | ${md(parameter.contract.text)} | ${parameter.contract.evidence} | ${parameter.optional === null ? "optionality not classified" : parameter.optional ? "optional" : "required"}${parameter.rest ? ", rest" : ""}${parameter.defaultPresent ? ", default present" : ""} |`,
          );
        if (!symbol.parameters.length)
          lines.push("| (none) | — | source syntax | — |");
        lines.push(
          "",
          `Returns: ${md(symbol.returns.text)} (${symbol.returns.evidence}${symbol.returns.truncated ? "; display truncated" : ""}). ${symbol.hasBody ? "Implementation present." : "Declaration only; no runtime body indexed."}`,
        );
      }
      if (symbol.contract)
        lines.push(
          "",
          `Contract evidence: ${symbol.contract.evidence}. ${link(doc, "docs/code-atlas/contracts/contract-index.json", "Full declaration index")}.`,
        );
      for (const [title, edges] of [
        ["Calls", symbol.callees],
        ["Called by", symbol.callers],
      ]) {
        lines.push("", `**${title} (statically resolved):**`, "");
        if (!edges.length)
          lines.push(
            "No resolved sites. This does not prove absence of runtime callers or callees.",
          );
        for (const edge of edges) {
          const other = byId.get(edge.symbolId);
          const siteFile = title === "Calls" ? symbol.file : other.file;
          lines.push(
            `- ${symbolLink(doc, other)} — ${sourceLink(doc, siteFile, edge.line)}`,
          );
        }
      }
      const unresolved = unresolvedByOwner.get(symbol.id) ?? [];
      lines.push(
        "",
        `Unresolved / external call sites: ${unresolved.length}.`,
        "",
      );
      // Keep long symbol pages usable; full expressions and reasons always remain in the JSON index.
      for (const site of unresolved.slice(0, 8))
        lines.push(
          `- ${md(site.expression)} — ${site.reason}; ${sourceLink(doc, site.file, site.line)}`,
        );
      if (unresolved.length > 8)
        lines.push(
          `- ${unresolved.length - 8} additional sites in ${link(doc, "docs/code-atlas/symbols/symbol-index.json", "symbol-index.json")}.`,
        );
      lines.push("", "**Related tests / acceptance harnesses:**", "");
      if (!symbol.relatedTests.length)
        lines.push(
          "No direct static call/import association found; coverage unknown.",
        );
      for (const test of symbol.relatedTests)
        lines.push(
          `- ${sourceLink(doc, test.file, test.line)} — ${test.evidence}; coverage not established.`,
        );
    }
    output.set(doc, lines.join("\n") + "\n");
  }
}

/** Emits architect-facing module pages with entry-point candidates, source ownership, dependency evidence and contract links. */
function modulePages(data, edges, output) {
  for (const module of MODULES) {
    const doc = `docs/code-atlas/modules/${module.id}.md`;
    const files = data.files.filter((file) => file.module === module.id);
    const symbols = data.symbols.filter(
      (symbol) => symbol.module === module.id,
    );
    const publicSymbols = symbols.filter(
      (symbol) =>
        symbol.exports.length ||
        symbol.kind === "PowerShellScript" ||
        (symbol.kind === "ClassDeclaration" && symbol.role === "production"),
    );
    const methods = symbols.filter(
      (symbol) =>
        symbol.kind === "MethodDeclaration" &&
        symbol.role === "production" &&
        data.symbols.find((owner) => owner.id === symbol.ownerId)?.exports
          .length,
    );
    const entries = [
      ...new Map(
        [...publicSymbols, ...methods].map((symbol) => [symbol.id, symbol]),
      ).values(),
    ];
    const lines = [
      `# ${module.name}`,
      "",
      `${link(doc, "docs/code-atlas/README.md", "Atlas")} / ${link(doc, `docs/code-atlas/symbols/${module.id}.md`, "All symbols and callers/callees")}`,
      "",
      module.purpose,
      "",
      `Owns: ${module.owns}. This ownership is editorial; source locations and import edges below are generated facts.`,
      "",
      `${files.length} source files; ${symbols.filter((symbol) => symbol.callable).length} callable declarations; ${symbols.filter((symbol) => symbol.contract).length} contract declarations.`,
      "",
      "## Entry points and exported symbols",
      "",
      "Candidates from compiler export tables and methods on exported classes. Registration, availability, authorization and runtime reachability must be checked separately.",
      "",
      "| Symbol | Source | Kind |",
      "| --- | --- | --- |",
    ];
    for (const symbol of entries)
      lines.push(
        `| ${symbolLink(doc, symbol)} | ${sourceLink(doc, symbol.file, symbol.line)} | ${symbol.kind} |`,
      );
    if (!entries.length)
      lines.push(
        "| No export resolved | See source initialization scopes | — |",
      );
    for (const [heading, related] of [
      ["Depends on", edges.filter((edge) => edge.from === module.id)],
      ["Depended on by", edges.filter((edge) => edge.to === module.id)],
    ]) {
      lines.push(
        "",
        `## ${heading}`,
        "",
        "Literal runtime production-file imports only; lazy imports are included. Type, test, tool and external dependencies remain available in the full index.",
        "",
      );
      if (!related.length)
        lines.push("No cross-module production imports in this view.");
      for (const edge of related) {
        const other = MODULES.find(
          (item) =>
            item.id === (heading === "Depends on" ? edge.to : edge.from),
        );
        const first = edge.evidence[0];
        lines.push(
          `- ${link(doc, `docs/code-atlas/modules/${other.id}.md`, other.name)}: ${edge.sites} import sites; example ${sourceLink(doc, first.file, first.line)}.`,
        );
      }
    }
    lines.push("", "## Contracts", "");
    const contracts = symbols.filter((symbol) => symbol.contract);
    if (!contracts.length)
      lines.push(
        "No TypeScript/Zod contract declaration indexed here. Function signatures and IPC contracts may still apply.",
      );
    for (const symbol of contracts)
      lines.push(
        `- ${symbolLink(doc, symbol)} — ${symbol.contract.evidence}; ${symbol.exports.length ? "exported" : "local schema/type"}.`,
      );
    lines.push(
      "",
      "## Source inventory",
      "",
      "| File | Role | Declarations |",
      "| --- | --- | --- |",
    );
    for (const file of files)
      lines.push(
        `| ${sourceLink(doc, file.file)} | ${file.role} | ${file.symbols.length - 1} |`,
      );
    output.set(doc, lines.join("\n") + "\n");
  }
}

/** Emits a channel catalog with evidence for direct registration, local wrapper expansion and finite operation tables. */
function ipcPage(data, output) {
  const doc = "docs/code-atlas/contracts/electron-ipc.md";
  const byId = new Map(data.symbols.map((symbol) => [symbol.id, symbol]));
  const channels = [
    ...new Set(data.ipc.map((endpoint) => endpoint.channel).filter(Boolean)),
  ].sort(compare);
  const lines = [
    "# Electron IPC contracts",
    "",
    `${link(doc, "docs/code-atlas/README.md", "Atlas")} / ${link(doc, "docs/code-atlas/contracts/contract-index.json", "Machine-readable contract index")}`,
    "",
    "These are statically observed registrations, invocations and event names. A matching channel is a transport relation, not an ordinary function-call edge, permission grant or proof the route is enabled. Local AI handle wrappers and literal WorldView Object.entries operation tables are expanded from AST syntax. Interpolated preload requests remain dynamic patterns.",
    "",
    "Security composition must be reviewed at the main-process registration call: guardedIpc restricts the sending window/frame/document; the handlers add their own version, active-Universe and operation-specific checks.",
    "",
    "| Channel | Kind | Evidence | Source | Handler / operation |",
    "| --- | --- | --- | --- | --- |",
  ];
  for (const channel of channels) {
    for (const endpoint of data.ipc.filter(
      (item) => item.channel === channel,
    )) {
      const handler = byId.get(
        endpoint.operationSymbolId ?? endpoint.handlerSymbolId,
      );
      lines.push(
        `| ${md(channel)} | ${endpoint.kind} | ${endpoint.evidence} | ${sourceLink(doc, endpoint.file, endpoint.line)} | ${handler ? symbolLink(doc, handler) : "Not statically bound"} |`,
      );
    }
  }
  lines.push(
    "",
    "## Dynamic patterns",
    "",
    "These patterns are intentionally not expanded into speculative channels.",
    "",
  );
  for (const endpoint of data.ipc.filter((item) => !item.channel))
    lines.push(
      `- ${md(endpoint.pattern)} (${endpoint.kind}) — ${sourceLink(doc, endpoint.file, endpoint.line)}.`,
    );
  output.set(doc, lines.join("\n") + "\n");
}

/** Builds a source-backed architecture narrative; reviewed routes are explicitly distinct from verified call-graph edges. */
function architecturePage(data, output) {
  const doc = "docs/code-atlas/architecture-map.md";
  /** Resolves narrative references from indexed source, failing generation when curated evidence drifts. */
  function evidence(file, name) {
    const match = data.symbols.find(
      (symbol) =>
        symbol.file === file &&
        (!name || symbol.name === name || symbol.qualifiedName === name),
    );
    if (!match)
      throw new Error(`Architecture evidence missing: ${file} ${name ?? ""}`);
    return `${sourceLink(doc, file, match.line)}${name ? ` (${symbolLink(doc, match)})` : ""}`;
  }
  const dashboardCandidates = data.symbols.filter(
    (symbol) =>
      symbol.role === "production" &&
      /dashboard/i.test(symbol.name + " " + symbol.file),
  );
  const refs = {
    main: evidence("electron/main.cjs"),
    preload: evidence("electron/preload.cjs"),
    guard: evidence(
      "electron/core/security/desktop-security.cjs",
      "guardedIpc",
    ),
    worldIpc: evidence(
      "electron/core/ipc/worldview-ipc.cjs",
      "registerWorldViewIpc",
    ),
    aiIpc: evidence("electron/ai/ipc.cjs", "registerAiIpc"),
    registry: evidence(
      "electron/engines/registry/registry.cjs",
      "EnginePackageRegistry",
    ),
    native: evidence("electron/engines/native.cjs", "executeNativeEngine"),
    identity: evidence(
      "electron/engines/backend-identity/identity-runtime.cjs",
      "createIdentityRuntime",
    ),
    entity: evidence(
      "electron/ai/agents/entity-agents.cjs",
      "EntityAgentService",
    ),
    scope: evidence("electron/ai/agents/entity-jurisdiction.cjs"),
    chat: evidence("electron/ai/chat/chat-service.cjs"),
    assigned: evidence(
      "electron/ai/agents/assigned-chat.cjs",
      "runAssignedTurn",
    ),
    knowledge: evidence("electron/domains/knowledge/knowledge-store.cjs"),
    source: evidence(
      "electron/domains/knowledge/knowledge-source-access.cjs",
      "resolveKnowledgeSource",
    ),
    vault: evidence(
      "electron/domains/universe/vault-service.cjs",
      "statVaultSource",
    ),
    world: evidence("electron/domains/entity/worldview-store.cjs"),
  };
  output.set(
    doc,
    [
      "# Architecture map and findings",
      "",
      `${link(doc, "docs/code-atlas/README.md", "Atlas")} / ${link(doc, "docs/code-atlas/graphs/module-dependencies.svg", "Dependency graph")} / ${link(doc, "docs/code-atlas/contracts/electron-ipc.md", "IPC catalog")}`,
      "",
      "The module catalog is an editorial view of existing files. The routes below were reviewed in source and link to their owning implementations; they are not a claim that every hop resolves as a direct call. The JSON indexes distinguish static edges, table/wrapper expansion and unresolved dispatch. Runtime authorization and provider availability require runtime tests.",
      "",
      "## Application composition and trusted boundaries",
      "",
      `The static React entry ${evidence("app/page.tsx")} composes ${evidence("components/app-shell.tsx")}. Electron's composition root ${refs.main} creates the desktop services and window. The preload ${refs.preload} exposes named operations rather than unrestricted Node access. ${refs.guard} wraps main-process IPC; ${refs.worldIpc} and ${refs.aiIpc} add their request-specific checks.`,
      "",
      "## WorldView, Entity, indexing and Knowledge Cards",
      "",
      `WorldView membership, placement and connection invariants are modeled by ${evidence("electron/domains/worldview/model/WorldView.cjs", "WorldView")} and ${evidence("electron/domains/worldview/model/Connection.cjs", "Connection")}. ${evidence("electron/domains/worldview/services/WorldViewService.cjs", "WorldViewService")} coordinates host authorization with ${evidence("electron/domains/worldview/repositories/WorldViewRepository.cjs", "WorldViewRepository")}; existing IPC shapes and physical storage remain compatible. See ${link(doc, "docs/architecture/WORLDVIEW_DOMAIN_OOP.md", "WorldView domain report")} for revision and legacy-port limitations.`,
      "",
      `WorldView presentation ${evidence("features/worldview/worldview.tsx")} and ${evidence("features/knowledge/knowledge-workspace.tsx")} use the desktop bridge. The WorldView handler ${refs.worldIpc} dispatches a finite operation table into Entity/source metadata ${refs.world}, index/editor operations ${refs.knowledge}, authorized source resolution ${refs.source}, and Vault checks ${refs.vault}.`,
      "",
      `Index declarations are parsed in ${evidence("electron/domains/indexing/knowledge-index.cjs")}. Data services and built-in Engines implement previews and provider reads; source associations remain separate from original Vault files. Backend Identity ${refs.identity} exposes compiled snapshots, scoped retrieval and capability execution. Connector metadata ${evidence("electron/domains/entity/connector-store.cjs")} is a relationship, not an authorization grant.`,
      "",
      "## Engine Registry integration and execution",
      "",
      `There are two existing paths. Built-in definitions ${evidence("electron/engines/definitions.cjs")} dispatch through ${refs.native} and scoped Identity/assigned-agent services. Separately, ${refs.registry} validates immutable package versions, local trust, Entity links and host admission; its worker runner ${evidence("electron/engines/runtime/runner.cjs")} invokes the worker ${evidence("electron/engines/runtime/worker.cjs")}. Its readResult path reads stored records rather than requesting a new provider execution.`,
      "",
      `The terminal entry ${evidence("scripts/orbistry-engine.cjs")} exposes package authoring, registration, linking, execution, signing and history operations. Settings ${evidence("features/model-settings/engine-settings.tsx")} uses catalog discovery through the IPC handler, not package installation or execution endpoints. Publisher signature verification ${evidence("electron/engines/registry/signature.cjs")} is distinct from local trust and host authorization.`,
      "",
      `Formats and operating instructions remain in ${link(doc, "docs/engines/ENGINE_AUTHORING.md", "Engine authoring")}, ${link(doc, "docs/engines/ENGINE_SIGNING.md", "Engine signing")}, and ${link(doc, "docs/engines/engine-manifest.schema.json", "manifest schema")}.`,
      "",
      "## Assigned Agents and optional inference",
      "",
      `Assignment/construction controls in ${evidence("features/agents/entity-agents-dialog.tsx")} and ${evidence("features/agents/agent-construction.tsx")} use the versioned bridge. ${refs.aiIpc} creates ${refs.entity}; ${refs.scope} enforces delegated jurisdiction. Assigned chat runs through ${refs.assigned}; authorization and Engine evidence remain backend responsibilities. Construction persists independently of successful inference.`,
      "",
      `Universe generation currently rejects requests in ${refs.chat}; retained runtime/provider modules are not evidence that every feature is enabled. The actual provider composition is in ${refs.main}. Dynamic injected service/agent/Engine methods commonly remain unresolved in the call graph. Consult the source and regression tests before interpreting an unresolved edge as missing functionality.`,
      "",
      "## Dashboard and monitoring scope",
      "",
      `${dashboardCandidates.length ? `Dashboard-named implementation candidates: ${dashboardCandidates.map((symbol) => symbolLink(doc, symbol)).join(", ")}. Naming alone does not establish a complete Dashboard feature.` : "No dedicated Dashboard implementation was found in the current source review or Dashboard-named production declarations/paths. This does not establish that all operational displays are absent."} Existing status and usage displays include ${evidence("components/status-bar.tsx")} and ${evidence("electron/ai/provider-usage.cjs")}; the Settings Engine catalog is another operational view.`,
      "",
      "## Architectural findings",
      "",
      "- The deployed application combines a static renderer with an Electron composition root and narrow IPC. File imports alone cannot describe this process boundary.",
      "- Entity state, original Vault files, applied indexes, compiled Identity snapshots and execution receipts have distinct owning modules. Their contracts should remain distinct in future work.",
      "- Package Engine execution and built-in/assigned-agent capability execution coexist. Their authorization and receipt paths need independent review; registry presence does not grant execution.",
      "- A substantial retained AI runtime and acceptance-tooling surface exists. Static presence/export counts do not determine current feature availability or justify deletion.",
      "- Compiler-resolved calls provide useful navigation, but callbacks, injected interfaces, IPC, worker processes and dynamic capability dispatch leave deliberate gaps. The unresolved-call index makes those gaps inspectable.",
      "",
      "## Suggested cleanup priorities (proposals only)",
      "",
      "1. Document which retained AI and acceptance modules are active, compatibility-only, experimental or historical, using composition evidence and tests before considering deletion.",
      "2. Add purpose and boundary comments to undocumented exported functions first; the symbol index records the exact documentation gaps without guessing behavior.",
      "3. Continue strengthening explicit typed ports for dynamic service/Engine calls when implementation work is separately approved. Do not replace runtime authorization with types.",
      "4. Review large composition/UI files for future focused extraction only after profiling and regression coverage. This Atlas makes no performance claims and moves no sources.",
      "5. Keep public Engine schemas, bridge DTOs and their runtime validators synchronized. Use the contract and IPC indexes during interface reviews.",
      "6. Expand runtime tracing/coverage evidence for unresolved dispatch if operational flow needs stronger proof. Static analysis alone cannot prove execution or test coverage.",
      "",
    ].join("\n"),
  );
}

/** Documents the generated data contracts and maintenance path without treating static analysis as runtime evidence. */
function formatPage(output) {
  const doc = "docs/code-atlas/contracts/atlas-format.md";
  output.set(
    doc,
    [
      "# Atlas data format and maintenance",
      "",
      `${link(doc, "docs/code-atlas/README.md", "Atlas")} / ${link(doc, "docs/code-atlas/symbols/symbol-index.json", "Symbol index")}`,
      "",
      "## Machine-readable records",
      "",
      "The indexes use schemaVersion: 1. Repository paths use forward slashes. Lines and columns are one-based. IDs identify source locations, not persistent application objects. All cross-references use exact symbol IDs; duplicate display names must not be merged.",
      "",
      "| File / field | Contract |",
      "| --- | --- |",
      "| symbol-index.json: inventory | Ignored-aware, bounded list of repository paths; includes non-code assets without parsing them as JavaScript. |",
      "| files | Source path, editorial module, role, UTF-8 bytes, SHA-256, line count and symbol IDs. Hashes detect source drift; they do not prove trusted authorship. |",
      "| symbols | ID, anchor, name, qualifiedName, kind, file/line/column/endLine, owning module/lexical owner, purpose evidence, export references, caller/callee references and test associations. Callable records add parameter/return contracts, async and body-presence flags. |",
      "| symbols[].parameters / returns | Explicit annotations when present; otherwise bounded local compiler inference. Default values are indicated, not reproduced. External/global types are not loaded. |",
      "| symbols[].contract | Exact TypeScript declaration or candidate Zod initializer syntax, with evidence classification. No schema evaluation. |",
      "| dependencies | From-file, source line, syntax kind, typeOnly/deferred flags, literal specifier and inventory-backed target, or explicit external/unresolved status. |",
      "| exports | Compiler-observed or literal CommonJS re-export name with targetId where resolved. Unresolved/data exports remain visible. |",
      "| calls | Potential statically bound caller/callee pair, call/construct kind, source location and optional-call flag. Neither runtime reachability nor execution is established. |",
      "| unresolvedCalls | Call site plus reason and optional candidateId. A signature-only candidate is an inference and is deliberately excluded from verified call edges. |",
      "| ipc | Channel or dynamic pattern, handler/invoke/event kind, source, lexical owner, handler/operation symbol references where resolved and expansion evidence. |",
      "| contract-index.json | TypeScript/Zod declarations, parsed Engine JSON format artifacts and IPC records. |",
      "| module-edges.json | Module catalog and aggregated production runtime import sites with original file/line evidence. |",
      "| call-edges.json | Complete resolved call-site edges; symbol metadata and unresolved sites are referenced through symbolIndex to avoid a duplicate store. svgExcerpt records the exact displayed subset. |",
      "| generated-files.json | Generator-owned artifact list used to identify obsolete output and preserve unexpected manual files. |",
      "",
      "Test associations carry coverageProven: false. A direct file import does not prove that a particular symbol was tested. A completed analyzer run cannot attest to a provider, an authorization decision or a completed Engine execution.",
      "",
      "## Generator components",
      "",
      `1. ${link(doc, "scripts/code-atlas.cjs", "CLI")} accepts generation or --check, reports failures through a nonzero exit code and never starts the application.`,
      `2. ${link(doc, "scripts/code-atlas/generate.cjs", "Generation service")} inventories source, builds artifacts in memory, verifies links and performs bounded output writes. It rejects linked output directories and preserves unowned files.`,
      `3. ${link(doc, "scripts/code-atlas/analyze.cjs", "AST analyzer")} creates a repository-only TypeScript program, indexes declarations and resolves bound call/import/export relationships. Source bodies are not evaluated.`,
      `4. ${link(doc, "scripts/code-atlas/ipc.cjs", "IPC discovery")} recognizes direct channels, the bound AI registration wrapper and finite WorldView operation tables. Dynamic strings remain patterns.`,
      `5. ${link(doc, "scripts/code-atlas/powershell.cjs", "PowerShell adapter")} runs the native parser against text only. The helper script uses System.Management.Automation.Language.Parser; it does not execute or import the indexed scripts. Script/function parameters and local literal command calls are indexed. Member/.NET/external/dynamic commands remain unresolved; pipeline return types and parameter optionality are not inferred.`,
      `6. ${link(doc, "scripts/code-atlas/catalog.cjs", "Ownership catalog")} assigns existing paths to editorial modules. Adjust this small map when source ownership changes; do not move source files to fit the Atlas.`,
      `7. ${link(doc, "scripts/code-atlas/render.cjs", "Documentation renderer")} and ${link(doc, "scripts/code-atlas/graphs.cjs", "SVG renderer")} create relative navigation, source-backed reviewed routes and deterministic diagrams.`,
      "",
      "To update the Atlas, change source normally, regenerate, inspect the relevant module and symbol pages, then run atlas:check. Commit generator changes and regenerated artifacts together. For a new module, update the ownership catalog and reviewed narrative only where source evidence supports it. The architecture narrative fails generation when a required source/symbol reference disappears; review the route instead of substituting a similarly named function.",
      "",
      "CI can run npm ci, npm run test:atlas and npm run atlas:check with ripgrep and Windows PowerShell (or pwsh on other systems) installed. The existing TypeScript development dependency and lockfile supply the JS/TS parser; there is no new production dependency. Generated indexes may be sizeable because tests, tools and anonymous closures are included. Per-file Markdown pages and one-record-per-line JSON keep navigation and diffs bounded.",
      "",
      "## Debug Audit: conservative call resolution",
      "",
      "**Component:** Atlas AST analyzer (new development tooling).",
      `**Affected files:** ${link(doc, "scripts/code-atlas/analyze.cjs", "analyze.cjs")} and ${link(doc, "scripts/code-atlas/atlas.test.cjs", "Atlas regression fixtures")}.`,
      "**Observed error:** An early fixture showed compiler signature inference selecting alpha for a defaulted function parameter or a conditional alpha/beta call.",
      "**Root cause:** A signature declaration describes the callable shape and may refer to one inferred branch; it does not establish a unique bound runtime implementation.",
      "**Changes applied:** Only bound local declarations create verified call edges. Signature-only candidates remain unresolved records. Accessor-returned functions are not mislabeled as direct calls to getter bodies. Literal CommonJS re-export bridges are expanded separately.",
      "**Verification:** Deterministic fixtures assert imported aliases, constructors/methods, CommonJS bridges, defaulted/injected/conditional calls, callback passing, accessor dispatch, shadowed require, IPC expansion, reproducibility, stale output and link validation.",
      "**Remaining risks:** Static analysis cannot prove runtime execution, handle arbitrary reassignment or resolve every injected/dynamic call. Those limits remain explicit in every graph/index.",
      "",
    ].join("\n"),
  );
}

/** Renders every owned artifact in memory, allowing check mode to compare without writes. */
function render(data, packageInfo, { architecture = true } = {}) {
  const output = new Map();
  const edges = moduleEdges(data);
  const contracts = data.symbols
    .filter((symbol) => symbol.contract)
    .map((symbol) => ({
      symbolId: symbol.id,
      name: symbol.qualifiedName,
      file: symbol.file,
      line: symbol.line,
      module: symbol.module,
      exported: symbol.exports.length > 0,
      ...symbol.contract,
    }));
  const jsonContracts = data.jsonContracts ?? [];
  output.set("docs/code-atlas/symbols/symbol-index.json", recordJson(data));
  output.set(
    "docs/code-atlas/contracts/contract-index.json",
    recordJson({
      schemaVersion: 1,
      declarations: contracts,
      jsonContracts,
      ipc: data.ipc,
      limitations: [
        "Zod syntax is a candidate, not an evaluated schema.",
        "Type declarations and IPC names do not establish authorization or runtime availability.",
      ],
    }),
  );
  output.set(
    "docs/code-atlas/graphs/module-edges.json",
    json({
      scope: "literal-runtime-production-imports",
      modules: MODULES,
      edges,
    }),
  );
  const excerpt = selectCallEdges(data);
  output.set(
    "docs/code-atlas/graphs/call-edges.json",
    recordJson({
      schemaVersion: 1,
      scope: "all-inventoried-source-call-sites",
      symbolIndex: "../symbols/symbol-index.json",
      symbolsField: "symbols",
      edges: data.calls,
      unresolvedField: "unresolvedCalls (in symbolIndex)",
      svgExcerpt: excerpt,
    }),
  );
  const activeModules = MODULES.filter((module) =>
    data.files.some(
      (file) => file.module === module.id && file.role === "production",
    ),
  );
  output.set(
    "docs/code-atlas/graphs/module-dependencies.svg",
    dependencySvg(activeModules, edges),
  );
  output.set("docs/code-atlas/graphs/call-graph.svg", callSvg(data, excerpt));
  modulePages(data, edges, output);
  symbolPages(data, output);
  ipcPage(data, output);
  formatPage(output);
  if (architecture) architecturePage(data, output);
  else
    output.set(
      "docs/code-atlas/architecture-map.md",
      "# Architecture map\n\nFixture mode: repository-specific reviewed routes are disabled.\n",
    );
  const contractDoc = "docs/code-atlas/contracts/README.md";
  const contractLines = [
    "# Contract index",
    "",
    `${link(contractDoc, "docs/code-atlas/README.md", "Atlas")} / ${link(contractDoc, "docs/code-atlas/contracts/electron-ipc.md", "Electron IPC")}`,
    "",
    "TypeScript interfaces, aliases and enums are verified declarations. Zod bindings are recognized by z.* initializer syntax and labeled candidates; the generator never evaluates a schema. Export status comes from the local compiler export table. JSON contracts are parsed source artifacts, not runtime validation evidence.",
    "",
    `${link(contractDoc, "docs/code-atlas/contracts/contract-index.json", "Machine-readable contracts")} · ${link(contractDoc, "docs/code-atlas/symbols/symbol-index.json", "All symbols")}`,
    "",
    "## JSON formats",
    "",
  ];
  for (const contract of jsonContracts)
    contractLines.push(
      `- ${link(contractDoc, contract.file, contract.file)} — ${md(contract.kind)}.`,
    );
  contractLines.push(
    "",
    "## Declarations",
    "",
    "| Contract | Module | Evidence | Export |",
    "| --- | --- | --- | --- |",
  );
  for (const symbol of data.symbols.filter((item) => item.contract))
    contractLines.push(
      `| ${symbolLink(contractDoc, symbol)} | ${symbol.module} | ${symbol.contract.evidence} | ${symbol.exports.length ? "yes" : "local"} |`,
    );
  output.set(contractDoc, contractLines.join("\n") + "\n");
  const readme = "docs/code-atlas/README.md";
  const callableCount = data.symbols.filter((symbol) => symbol.callable).length;
  const missingDocs = data.symbols.filter(
    (symbol) => symbol.callable && symbol.purpose.evidence === "undocumented",
  ).length;
  const lines = [
    "# Orbistry Code Atlas v1",
    "",
    "A generated map of the existing implementation for architecture review and task delegation. Start with the architecture routes, choose an owning module, then follow a symbol to its implementation, contracts, callers, callees and associated tests.",
    "",
    `- ${link(readme, "docs/code-atlas/architecture-map.md", "Architecture map, execution routes, findings and cleanup priorities")}`,
    `- ${link(readme, "docs/code-atlas/contracts/README.md", "Contract index")} and ${link(readme, "docs/code-atlas/contracts/electron-ipc.md", "Electron IPC entry points")}`,
    `- ${link(readme, "docs/code-atlas/graphs/module-dependencies.svg", "Module dependency graph")} (row imports column)`,
    `- ${link(readme, "docs/code-atlas/graphs/call-graph.svg", "Function call graph excerpt")} and ${link(readme, "docs/code-atlas/graphs/call-edges.json", "complete call-site graph")}`,
    `- ${link(readme, "docs/code-atlas/symbols/symbol-index.json", "Machine-readable symbol, source, import and unresolved-call index")}`,
    `- ${link(readme, "docs/code-atlas/contracts/atlas-format.md", "Data format, generator components and maintenance guide")}`,
    "",
    "## Regenerate and check",
    "",
    "```sh",
    "npm run atlas:generate",
    "npm run atlas:check",
    "npm run test:atlas",
    "```",
    "",
    "Requires the existing development install (Node, TypeScript and ripgrep on PATH), plus the native PowerShell parser: Windows PowerShell on Windows, or pwsh on other systems. No additional npm dependencies or application runtime processes are introduced. The development generator starts a parser process for PowerShell text only. Run from the repository root. Generation writes only owned docs/code-atlas files. Check mode regenerates in memory, compares exact bytes, validates generated Markdown/SVG links and source-line anchors, and fails for stale, missing or unexpected artifacts. It does not modify files.",
    "",
    "Output order, IDs, LF encoding and graph layout are deterministic for the same source bytes, inventory and installed TypeScript version. There are no wall-clock timestamps or absolute machine paths. Source location IDs change when declarations move; they are navigation IDs, not persistent application identities. Generated content indexes the current working tree, including uncommitted sources.",
    "",
    "## Discovery scope",
    "",
    `${data.inventory.length} inventoried repository files; ${data.files.length} analyzed source files (${data.files.filter((file) => file.language === "powershell").length} PowerShell, remainder JavaScript/TypeScript); ${data.symbols.length} symbols including file scopes; ${callableCount} callable declarations; ${contracts.length} TypeScript/Zod contract declarations; ${data.exports.length} compiler-observed/literal-bridge exports.`,
    "",
    `${data.calls.length} statically resolved call sites; ${data.unresolvedCalls.length} unresolved/external call sites; ${data.dependencies.length} import/re-export/require sites; ${data.ipc.length} IPC observations. ${missingDocs} callable declarations have no purpose JSDoc. These are discovery counts, not code-quality scores or coverage measurements.`,
    "",
    "Discovery uses rg --files --hidden with repository ignore rules plus explicit exclusions for dependencies, generated output, Atlas output, temporary files, credentials, application state and Universe data. TypeScript AST analysis covers JS, JSX, CJS, MJS, TS, TSX, CTS and MTS, including tests, scripts, declarations, examples and root configuration. Native PowerShell AST analysis adds the Windows OCR helper and parser-tool script without executing them. Other inventoried formats (CSS, Markdown, YAML, images and generic JSON) are listed but are not parsed as JS/TS. Relevant Engine JSON schemas/manifests are indexed separately. Ignored local files and third-party/vendor source are not repository implementation evidence.",
    "",
    `AST parse diagnostics: ${data.diagnostics.length}. ${data.diagnostics.length ? "Review diagnostics in the symbol index before relying on affected files." : "No indexed source syntax errors reported."}`,
    "",
    "## Evidence and limitations",
    "",
    "| Label | Meaning |",
    "| --- | --- |",
    "| static-declaration | Local checker resolves a call expression to an indexed implementation. A potential static edge, not proof it ran. |",
    "| powershell-static-command | Native AST command name matches one local function declaration. PowerShell runtime shadowing/redefinition is not resolved. |",
    "| annotation / typescript-declaration | Explicit source type syntax. Types do not replace runtime validators. |",
    "| compiler-inferred | Approximate local inference without standard-library or third-party types; may be any/unknown or incomplete. |",
    "| jsdoc / undocumented | Purpose copied from an existing documentation comment, or a visible documentation gap. |",
    "| local-wrapper / literal-operation-table expansion | IPC name derived from a bound wrapper or literal table, not a function-call edge. |",
    "| dynamic-unresolved / external-or-dynamic-dispatch | No unique local implementation established; includes injected methods, external libraries, callbacks and computed access. |",
    "| signature-only-candidate | Compiler signature suggests a declaration, but no unique bound implementation is established. Candidate retained outside the verified graph. |",
    "| static-call-site / file-import-only | A test/harness association; execution and coverage are not proven. |",
    "| Editorial ownership / reviewed route | Human-readable interpretation backed by linked source, kept separate from AST facts. |",
    "",
    "Anonymous functions, object methods and nested closures have source-location labels and lexical owners. Passing a callback is not recorded as invoking it. Declaration-only methods and function types are indexed as contracts, not executed implementations. Re-exports resolve through compiler declarations and explicit literal CommonJS bridges; dynamic export spreads/assignments may stay unresolved. Injected/defaulted function parameters, conditional/union callees and accessor-returned functions do not acquire a verified callee from signature inference alone. Interpolated imports, IPC, workers, dependency injection, runtime reassignment, reflection and provider behavior cannot be fully resolved statically. External symbol details are deliberately not loaded. Large JSON arrays use one record per line to limit generated size; symbol pages are split by source file for navigation.",
    "",
    "The SVG call graph is a bounded excerpt: up to two distinct caller/callee pairs for reviewed Engine/assignment/Identity entry functions (preferring non-utility callees), followed by one cross-module pair per selected production module. Selection and tie-breaking are deterministic; the reviewed seed list is in scripts/code-atlas/graphs.cjs. It does not imply exhaustive execution paths. Every resolved site, including same-module, test and tool calls, is preserved in call-edges.json and the symbol detail pages. The dependency SVG includes literal runtime production imports (including lazy imports), excludes type/test/tool imports and shows no permission relationship.",
    "",
    "The generator checks syntax and documentation links. It does not replace application tests, runtime authorization review, live provider verification or performance measurement. No runtime performance improvement is claimed.",
    "",
    "## Modules",
    "",
    "| Module | Responsibility | Navigation |",
    "| --- | --- | --- |",
  ];
  for (const module of MODULES)
    lines.push(
      `| ${link(readme, `docs/code-atlas/modules/${module.id}.md`, module.name)} | ${module.purpose} | ${link(readme, `docs/code-atlas/symbols/${module.id}.md`, "Symbols")} |`,
    );
  lines.push(
    "",
    "## External package declarations",
    "",
    "Versions below are package.json declarations, not an installed-version or vulnerability audit.",
    "",
    "| Package | Declared version | Scope |",
    "| --- | --- | --- |",
  );
  for (const scope of ["dependencies", "devDependencies"])
    for (const name of Object.keys(packageInfo[scope] ?? {}).sort(compare))
      lines.push(
        `| ${md(name)} | ${md(packageInfo[scope][name])} | ${scope} |`,
      );
  lines.push(
    "",
    `Generator implementation: ${link(readme, "scripts/code-atlas.cjs", "CLI")} and ${link(readme, "scripts/code-atlas/generate.cjs", "generation/check service")}. Engineering contract: ${link(readme, "AGENTS.md", "ORB-ARCH-001")}.`,
    "",
  );
  output.set(readme, lines.join("\n") + "\n");
  return output;
}

module.exports = { render, moduleEdges, md, link };
