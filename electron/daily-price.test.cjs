const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");
const {
  createDailyPriceEngine,
  normalizeSymbol,
  snapshotSchema,
} = require("./engines/daily-price/index.cjs");
const { createDailyPriceService } = require("./daily-price-service.cjs");
const {
  readKnowledgeIndex,
  saveKnowledgeIndex,
  savePriceSymbol,
} = require("./knowledge-store.cjs");
const { parseKnowledgeIndex } = require("./knowledge-index.cjs");
const {
  dailyPriceService,
  getIndexedPrice,
} = require("./daily-price-service.cjs");
const { saveWorldViewChip } = require("./worldview-store.cjs");

/** Supplies deterministic public-market-shaped provider data with timezone-sensitive dates and a valid zero close. */
function fakeClient() {
  return {
    calls: { quote: 0, chart: 0 },
    /** Returns a saved regular-session quote without network access. */
    async quote(symbol) {
      this.calls.quote++;
      return {
        symbol,
        currency: "USD",
        exchangeTimezoneName: "America/New_York",
        regularMarketPrice: 12.5,
        regularMarketPreviousClose: 10,
        regularMarketTime: new Date("2026-11-13T21:00:00Z"),
        marketState: "CLOSED",
        exchangeDataDelayedBy: 15,
      };
    },
    /** Returns deliberately unordered observations and missing data to exercise normalization. */
    async chart() {
      this.calls.chart++;
      return {
        quotes: [
          { date: new Date("2026-11-14T00:00:00Z"), close: 12 },
          { date: new Date("2026-11-12T14:30:00Z"), close: 0 },
          { date: new Date("2026-11-11T14:30:00Z"), close: null },
        ],
      };
    },
  };
}

/** Creates and cleans only an isolated temporary Universe for price cache and metadata tests. */
async function withUniverse(run) {
  const root = await fs.mkdtemp(
    path.join(os.tmpdir(), "orbistry-daily-price-"),
  );
  try {
    await saveWorldViewChip(root, {
      id: "company",
      name: "Company",
      icon: "",
      color: "#262b30",
      tags: [],
      position: { x: 0, y: 0 },
    });
    await run(root);
  } finally {
    assert.ok(
      path.resolve(root).startsWith(path.resolve(os.tmpdir()) + path.sep),
    );
    await fs.rm(root, { recursive: true, force: true });
  }
}

/** Verifies supported Yahoo symbols and rejects path/URL inputs before reaching the provider. */
test("daily price validates ticker symbols and normalizes market data", async () => {
  for (const symbol of [" aapl ", "bbca.jk", "^JKSE", "BTC-USD", "EURUSD=X"])
    assert.ok(normalizeSymbol(symbol));
  for (const symbol of ["", "../file", "https://host", "AAPL?x=1", null])
    assert.throws(() => normalizeSymbol(symbol));
  const client = fakeClient();
  let now = Date.parse("2026-11-14T10:00:00Z");
  const engine = createDailyPriceEngine({ client, clock: () => now });
  const result = await engine.price("aapl");
  assert.equal(result.symbol, "AAPL");
  assert.equal(result.price, 12.5);
  assert.equal(result.delayMinutes, 15);
  assert.deepEqual(result.history, [
    { date: "2026-11-12", close: 0 },
    { date: "2026-11-13", close: 12 },
  ]);
  now += 5 * 60 * 1000;
  await engine.price("AAPL", { previous: result });
  assert.equal(client.calls.chart, 1);
  assert.equal(client.calls.quote, 2);
  await engine.price("AAPL", { previous: result, force: true });
  assert.equal(client.calls.chart, 2);
  await assert.rejects(engine.price("../bad"));
  assert.equal(client.calls.quote, 3);
});

/** Ensures missing quotes, missing history and invalid provider numbers produce explicit errors. */
test("daily price rejects unavailable and malformed provider data", async () => {
  const client = fakeClient();
  client.quote = async function missing() {
    return { symbol: "AAPL" };
  };
  await assert.rejects(
    createDailyPriceEngine({ client }).price("AAPL"),
    /no latest price/,
  );
  const empty = fakeClient();
  empty.chart = async function noHistory() {
    return { quotes: [] };
  };
  await assert.rejects(
    createDailyPriceEngine({ client: empty }).price("AAPL"),
    /no usable daily/,
  );
  const noTime = fakeClient();
  const quote = await noTime.quote("AAPL");
  noTime.quote = async function unavailableTime() {
    return { ...quote, regularMarketTime: null };
  };
  await assert.rejects(
    createDailyPriceEngine({ client: noTime }).price("AAPL"),
    /timestamp/,
  );
  const snapshot = await createDailyPriceEngine({ client: fakeClient() }).price(
    "AAPL",
  );
  assert.equal(
    snapshotSchema.safeParse({
      ...snapshot,
      exchangeTimezone: "invalid/timezone",
    }).success,
    false,
  );
  assert.equal(
    snapshotSchema.safeParse({
      ...snapshot,
      history: [{ date: "2026-02-31", close: 1 }],
    }).success,
    false,
  );
});

/** Checks cache coalescing, reload persistence, explicit stale fallback and a fresh-source error without dummy data. */
test("daily price persists cache and reports stale data during provider outages", async () => {
  await withUniverse(async (root) => {
    let now = Date.parse("2026-11-14T10:00:00Z");
    const client = fakeClient();
    const engine = createDailyPriceEngine({ client, clock: () => now });
    const service = createDailyPriceService({
      price: engine.price,
      clock: () => now,
    });
    const values = await Promise.all([
      service.get(root, "AAPL"),
      service.get(root, "AAPL"),
    ]);
    assert.equal(client.calls.quote, 1);
    assert.equal(values[0].stale, false);
    assert.equal((await service.get(root, "AAPL")).cached, true);
    assert.equal(client.calls.quote, 1);
    const offline = createDailyPriceService({
      clock: () => now,
      price: async function unavailable() {
        throw new Error("synthetic offline");
      },
    });
    assert.equal((await offline.get(root, "AAPL")).stale, false);
    now += 6 * 60 * 1000;
    const stale = await offline.get(root, "AAPL");
    assert.equal(stale.stale, true);
    assert.match(stale.warning, /Showing saved prices/);
    assert.equal(stale.snapshot.price, 12.5);
    await assert.rejects(offline.get(root, "MSFT"), /synthetic offline/);
    const cache = await fs.readdir(
      path.join(root, ".engine", "daily-price", "cache"),
    );
    assert.equal(cache.length, 1);
    await fs.writeFile(
      path.join(root, ".engine", "daily-price", "cache", cache[0]),
      "corrupt",
    );
    const repaired = await createDailyPriceService({
      price: engine.price,
      clock: () => now,
    }).get(root, "AAPL");
    assert.match(repaired.warning, /cache could not be read/);
    snapshotSchema.parse(repaired.snapshot);
  });
});

/** Verifies ticker edits preserve manual indexes, protect concurrent revisions and persist independently for each entity. */
test("entity ticker saves preserve existing Knowledge Card metadata", async () => {
  await withUniverse(async (root) => {
    const original = await saveKnowledgeIndex(
      root,
      "company",
      "# Profile",
      null,
      true,
    );
    const saved = await savePriceSymbol(
      root,
      "company",
      " bbca.jk ",
      original.revision,
    );
    assert.equal(saved.priceSymbol, "BBCA.JK");
    assert.equal(saved.draft, "# Profile");
    assert.equal(saved.applied, "# Profile");
    assert.equal(
      (await readKnowledgeIndex(root, "company")).priceSymbol,
      "BBCA.JK",
    );
    await assert.rejects(
      savePriceSymbol(root, "company", "AAPL", original.revision),
      /changed/,
    );
    await assert.rejects(savePriceSymbol(root, "missing", "AAPL", null));
    const cleared = await savePriceSymbol(root, "company", "", saved.revision);
    assert.equal(cleared.priceSymbol, undefined);
    assert.equal(cleared.applied, "# Profile");
  });
});

/** Verifies industry sections accept literal Yahoo sources, default ticker calls and ordinary file references while rejecting executable syntax and invalid symbols. */
test("index parser supports yahooPrice source declarations", () => {
  const parsed = parseKnowledgeIndex(
    "# Banks\nsource: yahooPrice(\"bbca.jk\")\nsource: notes.md\n# Chips\nsource: yahooPrice('NVDA')\nsource: yahooPrice()",
  );
  assert.deepEqual(parsed.errors, []);
  assert.deepEqual(parsed.menus[0].sourceIds, ["notes.md"]);
  assert.equal(parsed.menus[0].prices[0].symbol, "BBCA.JK");
  assert.deepEqual(
    parsed.menus[1].prices.map((source) => source.symbol),
    ["NVDA", null],
  );
  assert.equal(
    parseKnowledgeIndex('# Banks\nsource: yahooPrice("BBCA.JK")').menus[0]
      .prices[0].id,
    parsed.menus[0].prices[0].id,
  );
  for (const input of [
    'source: yahooPrice("AAPL")',
    "# One\nsource: yahooPrice(AAPL)",
    '# One\nsource: yahooPrice("../bad")',
    '# One\nsource: yahooPrice("AAPL"); process.exit()',
    '# One\nsource: yahooPrice("AAPL")\nsource: yahooPrice("aapl")',
    '# One\nImages = [\nsource: yahooPrice("AAPL")\n].view(carousel)',
  ])
    assert.ok(parseKnowledgeIndex(input).errors.length, input);
});

/** Checks applied declarations authorize retrieval independently of file assignments and reject draft-only, removed and unknown sources before returning data. */
test("indexed Yahoo retrieval follows the applied section source", async () => {
  await withUniverse(async (root) => {
    const original = dailyPriceService.get;
    const calls = [];
    try {
      dailyPriceService.get = async function quoted(_, symbol) {
        calls.push(symbol);
        return { symbol };
      };
      let state = await saveKnowledgeIndex(
        root,
        "company",
        '# Banking\nsource: yahooPrice("BBCA.JK")\n# Energy\nsource: yahooPrice("XOM")\n# Configurable\nsource: yahooPrice()',
        null,
        true,
      );
      assert.equal(state.saved, true);
      const banking = state.menus[0],
        energy = state.menus[1],
        configurable = state.menus[2];
      assert.deepEqual(
        await getIndexedPrice(
          root,
          "company",
          banking.id,
          banking.prices[0].id,
        ),
        { symbol: "BBCA.JK" },
      );
      assert.deepEqual(
        await getIndexedPrice(root, "company", energy.id, energy.prices[0].id),
        { symbol: "XOM" },
      );
      await assert.rejects(
        getIndexedPrice(root, "company", banking.id, "forged"),
        /applied index/,
      );
      await assert.rejects(
        getIndexedPrice(
          root,
          "company",
          configurable.id,
          configurable.prices[0].id,
        ),
        /entity ticker/,
      );
      state = await savePriceSymbol(root, "company", "AAPL", state.revision);
      assert.deepEqual(
        await getIndexedPrice(
          root,
          "company",
          configurable.id,
          configurable.prices[0].id,
        ),
        { symbol: "AAPL" },
      );
      state = await saveKnowledgeIndex(
        root,
        "company",
        '# Draft\nsource: yahooPrice("MSFT")',
        state.revision,
        false,
      );
      const draft = parseKnowledgeIndex(state.draft).menus[0];
      await assert.rejects(
        getIndexedPrice(root, "company", draft.id, draft.prices[0].id),
        /applied index/,
      );
      assert.deepEqual(calls, ["BBCA.JK", "XOM", "AAPL"]);
      dailyPriceService.get = async function removedDuringRequest() {
        state = await saveKnowledgeIndex(
          root,
          "company",
          "# Empty",
          state.revision,
          true,
        );
        return { symbol: "BBCA.JK" };
      };
      await assert.rejects(
        getIndexedPrice(root, "company", banking.id, banking.prices[0].id),
        /applied index/,
      );
    } finally {
      dailyPriceService.get = original;
    }
  });
});
