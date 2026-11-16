const fs = require("node:fs/promises");
const path = require("node:path");
const { createHash } = require("node:crypto");
const { rejectSymlink, writeJson } = require("./ai/json-store.cjs");
const engine = require("./engines/yahoo-financials/index.cjs");

/** Creates a bounded, coalesced Universe cache using the existing atomic JSON storage conventions. TTL defaults to 24 hours. */
function createFinancialService({
  fetch = engine.fetch,
  clock = Date.now,
  ttlMs = 86400000,
} = {}) {
  const pending = new Map();
  if (!Number.isFinite(ttlMs) || ttlMs < 0)
    throw new Error("Invalid financial cache TTL.");
  /** Reads a validated snapshot or refreshes it, preserving successful data on provider failure and reporting corrupt caches. */
  async function get(root, input, kind, force = false) {
    const symbol = engine.normalizeSymbol(input);
    if (
      !["financials", "earnings"].includes(kind) ||
      typeof force !== "boolean"
    )
      throw new Error("Invalid finance request.");
    let target = await fs.realpath(root);
    for (const part of [
      ".engine",
      "yahoo-financials",
      "cache",
      createHash("sha256").update(`${symbol}:${kind}`).digest("hex") + ".json",
    ]) {
      target = path.join(target, part);
      await rejectSymlink(target);
    }
    if (pending.has(target)) return pending.get(target);
    /** Coalesces one disk read and provider refresh, with explicit stale fallback. */
    async function refresh() {
      let saved = null,
        warning = null;
      try {
        const stat = await fs.stat(target);
        if (!stat.isFile() || stat.size > 8 * 1024 * 1024)
          throw new Error("Financial cache exceeds its size limit.");
        saved = engine.snapshotSchema.parse(
          JSON.parse(await fs.readFile(target, "utf8")),
        );
        if (saved.symbol !== symbol || saved.kind !== kind)
          throw new Error("Financial cache identity mismatch.");
      } catch (error) {
        saved = null;
        if (error.code !== "ENOENT")
          warning = `Saved cache could not be read. ${error.message}`;
      }
      const age = saved ? clock() - Date.parse(saved.fetchedAt) : Infinity;
      if (!force && saved && age >= 0 && age < ttlMs)
        return { snapshot: saved, cached: true, stale: false, warning };
      let snapshot;
      try {
        snapshot = engine.snapshotSchema.parse(await fetch(symbol, kind));
        if (snapshot.symbol !== symbol || snapshot.kind !== kind)
          throw new Error("Provider dataset identity mismatch.");
        if (saved && snapshot.warnings.length)
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
    pending.set(target, job);
    try {
      return await job;
    } finally {
      pending.delete(target);
    }
  }
  return { get };
}
const financialService = createFinancialService();
/** Resolves an applied entity/menu/source triple. Draft-only, removed and forged declarations reject before provider access. */
async function resolve(root, id, menuId, financeId) {
  const state = await require("./knowledge-store.cjs").readKnowledgeIndex(
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
  );
  const current = await resolve(root, id, menuId, financeId);
  if (current.symbol !== source.symbol || current.kind !== source.kind)
    throw new Error("Financial source changed. Reopen this section.");
  return result;
}
module.exports = {
  createFinancialService,
  financialService,
  getIndexedFinance,
};
