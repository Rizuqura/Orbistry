const fs = require("node:fs/promises");
const path = require("node:path");
const { createHash } = require("node:crypto");
const { rejectSymlink, writeJson } = require("./ai/json-store.cjs");
const engine = require("./engines/daily-price/index.cjs");

/** Resolves an Engine-owned cache file under the active Universe, checking each parent for links. */
async function cachePath(root, symbol) {
  let target = await fs.realpath(root);
  for (const part of [
    ".engine",
    "daily-price",
    "cache",
    `${createHash("sha256").update(symbol).digest("hex")}.json`,
  ]) {
    target = path.join(target, part);
    await rejectSymlink(target);
  }
  return target;
}

/** Creates a content-validated disk/memory market cache with request coalescing. Network failures return explicitly stale saved prices when available. */
function createDailyPriceService({
  price = engine.price,
  clock = Date.now,
} = {}) {
  const memory = new Map();
  const pending = new Map();
  /** Loads a ticker's bounded cached snapshot or fetches current Yahoo data. Returns timestamps and explicit cache/failure state to the Portal. */
  async function get(root, input, force = false) {
    const symbol = engine.normalizeSymbol(input);
    if (typeof force !== "boolean")
      throw new Error("Refresh must be a boolean.");
    const target = await cachePath(root, symbol);
    if (pending.has(target)) return pending.get(target);
    /** Performs one ticker refresh, surfacing disk failures and retaining valid cached data for offline viewing. */
    async function refresh() {
      let saved = memory.get(target) ?? null;
      let warning = null;
      if (!saved) {
        try {
          const stats = await fs.stat(target);
          if (!stats.isFile() || stats.size > 1024 * 1024)
            throw new Error("Price cache exceeds its size limit.");
          saved = engine.snapshotSchema.parse(
            JSON.parse(await fs.readFile(target, "utf8")),
          );
          if (saved.symbol !== symbol)
            throw new Error("Price cache ticker does not match.");
        } catch (error) {
          if (error.code !== "ENOENT")
            warning =
              "Saved price cache could not be read. Requesting Yahoo Finance data.";
          saved = null;
        }
      }
      const age = saved ? clock() - Date.parse(saved.fetchedAt) : Infinity;
      if (!force && saved && age >= 0 && age < engine.QUOTE_TTL_MS)
        return { snapshot: saved, stale: false, cached: true, warning };
      let fresh;
      try {
        fresh = engine.snapshotSchema.parse(
          await price(symbol, { previous: saved, force }),
        );
      } catch (error) {
        if (saved)
          return {
            snapshot: saved,
            stale: true,
            cached: true,
            warning: `Refresh failed. Showing saved prices. ${error.message}`,
          };
        throw new Error(
          `Yahoo Finance prices could not be loaded. ${error.message}`,
        );
      }
      if (fresh.symbol !== symbol)
        throw new Error("Provider returned a different ticker.");
      memory.delete(target);
      memory.set(target, fresh);
      while (memory.size > 50) memory.delete(memory.keys().next().value);
      try {
        await writeJson(await cachePath(root, symbol), fresh);
      } catch (error) {
        warning = `Prices loaded, but the local cache could not be saved. ${error.message}`;
      }
      return { snapshot: fresh, stale: false, cached: false, warning };
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
const dailyPriceService = createDailyPriceService();

/** Authorizes a saved entity ticker before and after asynchronous network/cache work, rejecting concurrent ticker changes. */
async function getEntityPrice(root, id, force = false) {
  const knowledge = require("./knowledge-store.cjs");
  const state = await knowledge.readKnowledgeIndex(root, id);
  if (!state.priceSymbol)
    throw new Error("Save a ticker for this entity first.");
  const result = await dailyPriceService.get(root, state.priceSymbol, force);
  const current = await knowledge.readKnowledgeIndex(root, id);
  if (current.priceSymbol !== state.priceSymbol)
    throw new Error("Entity ticker changed. Reload Prices.");
  return result;
}
/** Resolves one applied Yahoo source to its configured ticker. Unknown, draft-only and removed declarations reject before retrieval. */
async function resolveIndexedPrice(root, id, menuId, priceId) {
  const state = await require("./knowledge-store.cjs").readKnowledgeIndex(
    root,
    id,
  );
  const price = state.menus
    .find((menu) => menu.id === menuId)
    ?.prices?.find((item) => item.id === priceId);
  if (!price)
    throw new Error("Choose a Yahoo price source from the applied index.");
  const symbol = price.symbol ?? state.priceSymbol;
  if (!symbol)
    throw new Error(
      'This yahooPrice() source needs an entity ticker. Specify yahooPrice("TICKER") in the index.',
    );
  return engine.normalizeSymbol(symbol);
}

/** Retrieves an applied section's Yahoo source and reauthorizes it after asynchronous cache/network work. Concurrent removal or ticker changes reject. */
async function getIndexedPrice(root, id, menuId, priceId, force = false) {
  const symbol = await resolveIndexedPrice(root, id, menuId, priceId);
  const result = await dailyPriceService.get(root, symbol, force);
  if ((await resolveIndexedPrice(root, id, menuId, priceId)) !== symbol)
    throw new Error(
      "Indexed ticker changed. Reload the Knowledge Card section.",
    );
  return result;
}
module.exports = {
  createDailyPriceService,
  dailyPriceService,
  getEntityPrice,
  getIndexedPrice,
};
