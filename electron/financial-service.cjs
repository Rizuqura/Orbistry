const fs = require("node:fs/promises");
const path = require("node:path");
const { createHash } = require("node:crypto");
const {
  rejectSymlink,
  writeJson,
} = require("./core/persistence/json-store.cjs");
const engine = require("./engines/contracts/yahoo-legacy/financials.cjs");
const { normalizeSymbol } = require("./domains/indexing/ticker-syntax.cjs");
const { admitYahoo } = require("./domains/knowledge/yahoo-package.cjs");
const market = require("./engines/contracts/yahoo-legacy/market.cjs");

/** Creates a bounded, coalesced Universe cache using the existing atomic JSON storage conventions. TTL defaults to 24 hours. */
function createFinancialService({
  fetch = (symbol, operation, range) =>
    require("./engines/yahoo-financials/index.cjs").execute({
      symbol,
      operation,
      ...(range ? { range } : {}),
    }),
  clock = Date.now,
  ttlMs = 86400000,
  ttlByKind = {},
} = {}) {
  const pending = new Map();
  if (!Number.isFinite(ttlMs) || ttlMs < 0)
    throw new Error("Invalid financial cache TTL.");
  const lifetimes = {
    quote: 300000,
    history: 21600000,
    financials: ttlMs,
    earnings: ttlMs,
    ...ttlByKind,
  };
  if (
    Object.values(lifetimes).some(
      (value) => !Number.isFinite(value) || value < 0,
    )
  )
    throw new Error("Invalid market cache TTL.");
  /** Reads a validated snapshot or refreshes it, preserving successful data on provider failure and reporting corrupt caches. */
  async function get(root, input, kind, force = false, range, grant = null) {
    const symbol = normalizeSymbol(input);
    if (
      !["financials", "earnings", "quote", "history"].includes(kind) ||
      typeof force !== "boolean"
    )
      throw new Error("Invalid finance request.");
    if (kind === "history") range = range ?? "1Y";
    if (
      (kind === "history" && !market.RANGES.includes(range)) ||
      (kind !== "history" && range !== undefined)
    )
      throw new Error("Invalid market history range.");
    const schema =
      kind === "quote"
        ? market.quoteSchema
        : kind === "history"
          ? market.historySchema
          : engine.snapshotSchema;
    let target = await fs.realpath(root);
    for (const part of [
      ".engine",
      "yahoo-financials",
      "cache",
      createHash("sha256")
        .update(`${symbol}:${kind}${range ? ":" + range : ""}`)
        .digest("hex") + ".json",
    ]) {
      target = path.join(target, part);
      await rejectSymlink(target);
    }
    // Only callers admitted under the same Entity grant share a provider request.
    const pendingKey = grant
      ? JSON.stringify([target, grant.key, force])
      : target;
    if (pending.has(pendingKey)) return pending.get(pendingKey);
    /** Coalesces one disk read and provider refresh, with explicit stale fallback. */
    async function refresh() {
      let saved = null,
        warning = null;
      try {
        const stat = await fs.stat(target);
        if (!stat.isFile() || stat.size > 8 * 1024 * 1024)
          throw new Error("Financial cache exceeds its size limit.");
        saved = schema.parse(JSON.parse(await fs.readFile(target, "utf8")));
        if (
          saved.symbol !== symbol ||
          (saved.kind && saved.kind !== kind) ||
          (range && saved.range !== range)
        )
          throw new Error("Financial cache identity mismatch.");
      } catch (error) {
        saved = null;
        if (error.code !== "ENOENT")
          warning = `Saved cache could not be read. ${error.message}`;
      }
      const age = saved ? clock() - Date.parse(saved.fetchedAt) : Infinity;
      if (!force && saved && age >= 0 && age < lifetimes[kind])
        return { snapshot: saved, cached: true, stale: false, warning };
      let snapshot;
      try {
        snapshot = schema.parse(
          grant
            ? await grant.fetch({ symbol, ...(range ? { range } : {}) })
            : await fetch(symbol, kind, range),
        );
        if (
          snapshot.symbol !== symbol ||
          (snapshot.kind && snapshot.kind !== kind) ||
          (range && snapshot.range !== range)
        )
          throw new Error("Provider dataset identity mismatch.");
        if (saved && snapshot.warnings?.length)
          throw new Error(snapshot.warnings.join(" "));
      } catch (error) {
        if (saved)
          return {
            snapshot: saved,
            cached: true,
            stale: true,
            warning: `Refresh failed. Showing saved data. ${error.message}`,
          };
        throw new Error(`Yahoo Finance ${kind} unavailable. ${error.message}`);
      }
      try {
        await writeJson(target, snapshot);
      } catch (error) {
        warning = `Data loaded, but cache could not be saved. ${error.message}`;
      }
      return { snapshot, cached: false, stale: false, warning };
    }
    const job = refresh();
    pending.set(pendingKey, job);
    try {
      return await job;
    } finally {
      pending.delete(pendingKey);
    }
  }
  // Compatibility callers may provide additional host context. Only the private package path accepts a grant.
  return {
    get: (root, input, kind, force, range) =>
      get(root, input, kind, force, range),
    getWithGrant: get,
  };
}
const packageCache = createFinancialService();
const financialService = {
  /** Admits package reads before serving a cached or receipt-backed provider snapshot. */
  async get(root, symbol, operation, force, range, entityId, stillApplied) {
    const grant = await admitYahoo(root, entityId, operation, stillApplied);
    const value = await packageCache.getWithGrant(
      root,
      symbol,
      operation,
      force,
      range,
      grant,
    );
    await grant.verify();
    return value;
  },
};
/** Resolves an applied entity/menu/source triple. Draft-only, removed and forged declarations reject before provider access. */
async function resolve(root, id, menuId, financeId) {
  const state =
    await require("./domains/knowledge/knowledge-store.cjs").readKnowledgeIndex(
      root,
      id,
    );
  const source = state.menus
    .find((menu) => menu.id === menuId)
    ?.finance?.find((item) => item.id === financeId);
  if (!source) throw new Error("Choose an applied Yahoo financial source.");
  return source;
}
/** Reauthorizes the applied declaration after asynchronous cache/provider work to detect concurrent changes. */
async function getIndexedFinance(root, id, menuId, financeId, force = false) {
  const source = await resolve(root, id, menuId, financeId);
  const result = await financialService.get(
    root,
    source.symbol,
    source.kind,
    force,
    undefined,
    id,
    async () => {
      const current = await resolve(root, id, menuId, financeId);
      return current.symbol === source.symbol && current.kind === source.kind;
    },
  );
  const current = await resolve(root, id, menuId, financeId);
  if (current.symbol !== source.symbol || current.kind !== source.kind)
    throw new Error("Financial source changed. Reopen this section.");
  return result;
}
/** Resolves an applied price declaration or saved entity ticker before and after fetching history. Callers cannot supply a different symbol. */
async function getAuthorizedHistory(root, input) {
  const prices = require("./daily-price-service.cjs");
  /** Rechecks the original entity declaration on every access, including after provider work. */
  async function symbol() {
    if (input.priceId)
      return prices.resolveIndexedPrice(
        root,
        input.id,
        input.menuId,
        input.priceId,
      );
    const state =
      await require("./domains/knowledge/knowledge-store.cjs").readKnowledgeIndex(
        root,
        input.id,
      );
    if (!state.priceSymbol)
      throw new Error(
        "Save a ticker or choose an applied Yahoo price source first.",
      );
    return normalizeSymbol(state.priceSymbol);
  }
  const ticker = await symbol();
  const result = await financialService.get(
    root,
    ticker,
    "history",
    input.force ?? false,
    input.range,
    input.id,
    async () => (await symbol()) === ticker,
  );
  if ((await symbol()) !== ticker)
    throw new Error("Price source changed. Reopen this section.");
  return result;
}
module.exports = {
  createFinancialService,
  financialService,
  getIndexedFinance,
  getAuthorizedHistory,
};
