const { compare } = require("./analyze.cjs");

/** Escapes text/attributes for standalone SVG; indexed source cannot inject markup. */
function xml(value) {
  return String(value).replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;",
      })[character],
  );
}

/** Renders a deterministic adjacency matrix with hyperlinks, avoiding overlapping graph edges at repository scale. */
function dependencySvg(modules, edges) {
  const size = 32,
    left = 280,
    top = 320,
    width = left + modules.length * size + 240,
    height = top + modules.length * size + 85;
  const parts = [
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="title desc">`,
    '<title id="title">Orbistry module dependency graph</title>',
    '<desc id="desc">Directed adjacency matrix. Row imports column. Cells count literal runtime production-file import sites; tests, tooling and type-only edges are excluded.</desc>',
    '<rect width="100%" height="100%" fill="#0e1a23"/>',
    '<g font-family="sans-serif" font-size="12" fill="#dce8ed">',
    '<text x="20" y="28" font-size="19">Module dependencies: row imports column</text>',
    '<text x="20" y="51">Numbers count literal runtime import sites. Open a label for module documentation.</text>',
  ];
  modules.forEach((module, i) => {
    const y = top + i * size;
    parts.push(
      `<a href="../modules/${module.id}.md"><text x="${left - 12}" y="${y + 21}" text-anchor="end">${xml(module.name)}</text><text transform="translate(${left + i * size + 20} ${top - 12}) rotate(-55)">${xml(module.name)}</text></a>`,
    );
    modules.forEach((target, j) => {
      const edge = edges.find(
        (item) => item.from === module.id && item.to === target.id,
      );
      const count = edge?.sites ?? 0;
      parts.push(
        `<rect x="${left + j * size}" y="${y}" width="30" height="30" fill="${count ? "#225b70" : i === j ? "#263442" : "#162734"}"><title>${xml(module.name)} imports ${xml(target.name)}: ${count} sites</title></rect>`,
      );
      if (count)
        parts.push(
          `<text x="${left + j * size + 15}" y="${y + 20}" text-anchor="middle">${count}</text>`,
        );
    });
  });
  parts.push(
    `<text x="20" y="${height - 33}">Self-imports within a module are omitted. This graph describes syntax, not runtime reachability or permission.</text></g></svg>\n`,
  );
  return parts.join("\n");
}

/** Selects a bounded set of real function-to-function edges at key boundaries; the complete graph remains in JSON. */
function selectCallEdges(data) {
  const byId = new Map(data.symbols.map((symbol) => [symbol.id, symbol]));
  const selected = new Map();
  const reviewedEntries = [
    ["electron/engines/registry/registry.cjs", "EnginePackageRegistry.execute"],
    [
      "electron/engines/registry/registry.cjs",
      "EnginePackageRegistry.readResult",
    ],
    ["electron/engines/registry/registry.cjs", "EnginePackageRegistry.catalog"],
    ["electron/ai/agents/entity-agents.cjs", "EntityAgentService.assign"],
    ["electron/ai/agents/entity-agents.cjs", "EntityAgentService.sendTurn"],
    ["electron/ai/agents/entity-agents.cjs", "EntityAgentService.readResult"],
    ["electron/ai/agents/assigned-chat.cjs", "runAssignedTurn"],
    [
      "electron/domains/knowledge/knowledge-source-access.cjs",
      "resolveKnowledgeSource",
    ],
    [
      "electron/engines/backend-identity/identity-runtime.cjs",
      "createIdentityRuntime",
    ],
  ];
  for (const [file, name] of reviewedEntries) {
    const symbol = data.symbols.find(
      (item) => item.file === file && item.qualifiedName === name,
    );
    if (!symbol) continue;
    const edges = data.calls.filter(
      (edge) => edge.from === symbol.id && byId.get(edge.to)?.callable,
    );
    edges.sort((a, b) => {
      const left = byId.get(a.to),
        right = byId.get(b.to);
      const leftUtility = left.module === "shared" || left.name === "fail",
        rightUtility = right.module === "shared" || right.name === "fail";
      return (
        Number(leftUtility) - Number(rightUtility) ||
        compare(
          `${left.qualifiedName}:${a.line}`,
          `${right.qualifiedName}:${b.line}`,
        )
      );
    });
    let count = 0;
    for (const edge of edges) {
      const key = `${edge.from}\0${edge.to}`;
      if (selected.has(key)) continue;
      selected.set(key, edge);
      if (++count === 2) break;
    }
  }
  const priorities = [
    "worldview-domain",
    "entity-domain",
    "engine-registry",
    "identity",
    "agents",
    "worldview",
    "knowledge",
    "vault",
    "desktop",
    "engines",
    "portal-agents",
    "portal-settings",
    "portal-worldview",
    "ai-runtime",
    "shared",
    "portal-chat",
    "portal-shell",
    "providers",
    "connectors",
  ];
  for (const module of priorities) {
    const edges = data.calls
      .filter((edge) => {
        const from = byId.get(edge.from),
          to = byId.get(edge.to);
        return (
          from?.role === "production" &&
          to?.role === "production" &&
          from.callable &&
          to.callable &&
          from.module === module &&
          from.module !== to.module
        );
      })
      .sort((a, b) =>
        compare(
          `${byId.get(a.from).qualifiedName}:${byId.get(a.to).qualifiedName}:${a.line}`,
          `${byId.get(b.from).qualifiedName}:${byId.get(b.to).qualifiedName}:${b.line}`,
        ),
      );
    let count = 0;
    for (const edge of edges) {
      const key = `${edge.from}\0${edge.to}`;
      if (selected.has(key)) continue;
      selected.set(key, edge);
      if (++count === 1) break;
    }
  }
  // Small fixture repositories may contain only internal edges.
  if (!selected.size)
    for (const edge of data.calls.slice(0, 12))
      selected.set(`${edge.from}\0${edge.to}`, edge);
  return [...selected.values()];
}

/** Renders actual symbol pairs as a readable call graph excerpt, linking every node to its complete caller/callee page. */
function callSvg(data, edges) {
  const byId = new Map(data.symbols.map((symbol) => [symbol.id, symbol]));
  const height = Math.max(160, 100 + edges.length * 78);
  const parts = [
    `<svg xmlns="http://www.w3.org/2000/svg" width="1300" height="${height}" viewBox="0 0 1300 ${height}" role="img" aria-labelledby="title desc">`,
    '<title id="title">Orbistry function call graph excerpt</title>',
    `<desc id="desc">${edges.length} statically resolved caller and callee pairs. Up to two pairs for reviewed entry functions, then one cross-module pair per selected production module. This is an excerpt; all verified call sites are in call-edges.json and symbol-index.json.</desc>`,
    '<defs><marker id="arrow" markerWidth="10" markerHeight="8" refX="9" refY="4" orient="auto"><path d="M0,0 L10,4 L0,8" fill="#ffb147"/></marker></defs>',
    '<rect width="100%" height="100%" fill="#0e1a23"/>',
    '<g font-family="sans-serif" fill="#dce8ed">',
    '<text x="20" y="30" font-size="20">Verified static call sites: function graph excerpt</text>',
    '<text x="20" y="55" font-size="13">Arrow: caller → callee. Open nodes for full callers/callees. Dynamic IPC and injected dispatch are excluded.</text>',
  ];
  edges.forEach((edge, i) => {
    const y = 78 + i * 78;
    [byId.get(edge.from), byId.get(edge.to)].forEach((symbol, side) => {
      const x = side ? 710 : 20;
      parts.push(
        `<a href="../symbols/files/${symbol.file}.md#${symbol.anchor}"><rect x="${x}" y="${y}" width="565" height="60" rx="6" fill="#183344"/><text x="${x + 10}" y="${y + 23}" font-size="13">${xml(symbol.qualifiedName.slice(0, 72))}</text><text x="${x + 10}" y="${y + 44}" font-size="11">${xml(symbol.file)}:${symbol.line}</text><title>${xml(symbol.qualifiedName)}</title></a>`,
      );
    });
    parts.push(
      `<path d="M590,${y + 30} L700,${y + 30}" stroke="#ffb147" stroke-width="2" marker-end="url(#arrow)"/><text x="610" y="${y + 20}" font-size="11">line ${edge.line}</text>`,
    );
  });
  parts.push("</g></svg>\n");
  return parts.join("\n");
}

module.exports = { dependencySvg, selectCallEdges, callSvg };
