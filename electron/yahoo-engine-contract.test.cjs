const test = require("node:test");
const assert = require("node:assert/strict");
const { execFileSync } = require("node:child_process");
const engine = require("./engines/yahoo-financials/index.cjs");
const { executeNativeEngine } = require("./ai/engine-registry.cjs");
const fs = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");
const { createHash } = require("node:crypto");
const {
  createFinancialService,
  financialService,
  getAuthorizedHistory,
} = require("./financial-service.cjs");
const { planCleanup } = require("../scripts/clean-engine-backups.cjs");

/** Supplies listing-specific data without network access, including null OHLC fields and corporate actions. */
function client() {
  return {
    calls: [],
    /** Captures the exact symbol and returns quote fields in the original listing currency. */
    async quote(symbol) {
      this.calls.push(symbol);
      return {
        symbol,
        currency: symbol === "2330.TW" ? "TWD" : "USD",
        regularMarketPrice: 100,
        marketCap: 1000000,
        trailingPE: 0,
        epsTrailingTwelveMonths: null,
        regularMarketTime: new Date("2026-11-13T20:00:00Z"),
      };
    },
    /** Retains request range options and supplies validated, mixed-availability historical data. */
    async chart(symbol, options) {
      this.calls.push({ symbol, ...options });
      return {
        meta: { symbol, currency: "TWD" },
        quotes: [
          {
            date: new Date("2025-01-01"),
            open: null,
            high: 12,
            low: 8,
            close: 10,
            volume: 100,
          },
        ],
        events: {
          dividends: [{ date: new Date("2025-01-02"), amount: 0 }],
          splits: [
            { date: new Date("2025-01-03"), numerator: 2, denominator: 1 },
          ],
        },
      };
    },
  };
}

test("native Yahoo contract is executable and preserves distinct listing currencies and missing fields", async () => {
  const yahoo = client();
  const quote = await executeNativeEngine(
    "yahoo-financials",
    "quote",
    { symbol: " 2330.tw " },
    { client: yahoo },
  );
  assert.equal(quote.symbol, "2330.TW");
  assert.equal(quote.currency, "TWD");
  assert.equal(quote.eps, null);
  assert.equal(quote.trailingPE, 0);
  const adr = await engine
    .createFinancialEngine({ client: yahoo })
    .getQuote("TSM");
  assert.equal(adr.currency, "USD");
  assert.deepEqual(yahoo.calls, ["2330.TW", "TSM"]);
  for (const args of [
    { symbol: "TSM", code: "evil()" },
    { symbol: "../secret" },
    { symbol: "TSM", operation: "quote" },
  ])
    await assert.rejects(
      executeNativeEngine("yahoo-financials", "quote", args, { client: yahoo }),
    );
  await assert.rejects(
    executeNativeEngine(
      "yahoo-financials",
      "trade",
      { symbol: "TSM" },
      { client: yahoo },
    ),
  );
  assert.equal(yahoo.calls.length, 2);
  const direct = await engine.execute(
    { operation: "quote", symbol: "2330.TW" },
    { client: client() },
  );
  assert.equal(direct.currency, "TWD");
});

test("history ranges retain OHLCV and corporate actions with bounded MAX resolution", async () => {
  const yahoo = client();
  const provider = engine.createFinancialEngine({ client: yahoo });
  const history = await provider.getPriceHistory("2330.TW", "MAX");
  assert.equal(history.interval, "1mo");
  assert.equal(history.observations[0].open, null);
  assert.equal(history.observations[0].volume, 100);
  assert.equal(history.dividends[0].amount, 0);
  assert.equal(history.splits[0].numerator, 2);
  assert.equal(yahoo.calls[0].period1.getTime(), 0);
  await provider.getPriceHistory("2330.TW", "5Y");
  assert.equal(yahoo.calls[1].interval, "1wk");
  await assert.rejects(
    provider.execute({
      symbol: "TSM",
      operation: "history",
      range: "intraday",
    }),
  );
  await assert.rejects(
    provider.execute({ symbol: "TSM", operation: "quote", range: "1Y" }),
  );
});

test("offline CLI discovery matches the runtime allowlist and invalid requests fail as JSON", () => {
  const file = require.resolve("./engines/yahoo-financials/cli.cjs");
  const description = JSON.parse(
    execFileSync(process.execPath, [file, "--describe"], { encoding: "utf8" }),
  );
  assert.deepEqual(
    description.inputSchema.properties.operation.enum,
    engine.definition.operations,
  );
  assert.throws(
    () =>
      execFileSync(process.execPath, [file], {
        input: '{"operation":"shell","symbol":"TSM"}',
        stdio: ["pipe", "pipe", "pipe"],
      }),
    (error) => {
      assert.equal(error.status, 1);
      assert.ok(JSON.parse(error.stderr.toString()).error);
      assert.equal(error.stdout.toString(), "");
      return true;
    },
  );
});

/** Runs cache and cleanup tests in a fresh, bounded temporary root. */
async function isolated(run) {
  const root = await fs.mkdtemp(
    path.join(os.tmpdir(), "orbistry-yahoo-contract-"),
  );
  try {
    await run(root);
  } finally {
    assert.ok(
      path.resolve(root).startsWith(path.resolve(os.tmpdir()) + path.sep),
    );
    await fs.rm(root, { recursive: true, force: true });
  }
}

test("market cache separates listing/range identity and lifetimes and retains stale history", () =>
  isolated(async (root) => {
    let now = Date.now();
    const yahoo = client();
    const provider = engine.createFinancialEngine({
      client: yahoo,
      clock: () => now,
    });
    const service = createFinancialService({
      fetch: (symbol, operation, range) =>
        provider.execute({ symbol, operation, ...(range ? { range } : {}) }),
      clock: () => now,
    });
    await service.get(root, "2330.TW", "history", false, "5Y");
    assert.equal(
      (await service.get(root, "2330.TW", "history", false, "5Y")).cached,
      true,
    );
    await service.get(root, "2330.TW", "history", false, "MAX");
    await service.get(root, "2330.TW", "quote");
    now += 301000;
    await service.get(root, "2330.TW", "quote");
    assert.equal(
      (await service.get(root, "2330.TW", "history", false, "5Y")).cached,
      true,
    );
    assert.equal(yahoo.calls.length, 4);
    const offline = createFinancialService({
      fetch: async () => {
        throw Error("rate limited");
      },
      clock: () => now + 86400000,
    });
    const saved = await offline.get(root, "2330.TW", "history", false, "MAX");
    assert.equal(saved.stale, true);
    assert.match(saved.warning, /rate limited/);
    await assert.rejects(
      service.get(root, "2330.TW", "history", false, "invalid"),
    );
  }));

test("history IPC rejects forged and concurrently removed applied declarations", () =>
  isolated(async (root) => {
    const { saveWorldViewChip } = require("./worldview-store.cjs");
    const { saveKnowledgeIndex } = require("./knowledge-store.cjs");
    await saveWorldViewChip(root, {
      id: "company",
      name: "Company",
      icon: "",
      color: "#262b30",
      tags: [],
      position: { x: 0, y: 0 },
    });
    const state = await saveKnowledgeIndex(
      root,
      "company",
      '# Market\nsource: yahooPrice("2330.TW")',
      null,
      true,
    );
    const source = state.menus[0].prices[0];
    const input = {
      id: "company",
      menuId: state.menus[0].id,
      priceId: source.id,
      range: "MAX",
    };
    const original = financialService.get;
    let calls = 0;
    try {
      financialService.get = async () => {
        calls++;
        return {};
      };
      await assert.rejects(
        getAuthorizedHistory(root, { ...input, priceId: "forged" }),
      );
      assert.equal(calls, 0);
      await getAuthorizedHistory(root, input);
      financialService.get = async () => {
        await saveKnowledgeIndex(
          root,
          "company",
          "# Empty",
          state.revision,
          true,
        );
        return {};
      };
      await assert.rejects(getAuthorizedHistory(root, input), /applied/);
    } finally {
      financialService.get = original;
    }
  }));

test("cleanup selects only intact installer backups and rejects changed or untracked files", () =>
  isolated(async (root) => {
    const current = path.join(root, ".engine", "wonton-excel");
    const old = path.join(
      root,
      ".engine",
      "wonton-excel-backup-00000000-0000-0000-0000-000000000000",
    );
    for (const directory of [current, old]) {
      await fs.mkdir(directory, { recursive: true });
      await fs.writeFile(
        path.join(directory, "index.cjs"),
        "module.exports = {};",
      );
      await fs.writeFile(
        path.join(directory, "engine_manifest.json"),
        JSON.stringify({
          engine_id: "wonton-excel",
          engine_version: "test",
          sha256: {
            "index.cjs": createHash("sha256")
              .update("module.exports = {};")
              .digest("hex"),
          },
        }),
      );
    }
    await fs.mkdir(path.join(root, ".engine", "user-research"));
    assert.equal((await planCleanup(root)).length, 1);
    await fs.writeFile(path.join(old, "user-note.md"), "Keep me");
    await assert.rejects(planCleanup(root), /Changed or untracked/);
    assert.equal(
      await fs.readFile(path.join(old, "user-note.md"), "utf8"),
      "Keep me",
    );
  }));
