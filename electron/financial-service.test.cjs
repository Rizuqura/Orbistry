const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");
const { createHash } = require("node:crypto");
const {
  createFinancialEngine,
  normalizeRecords,
} = require("./engines/yahoo-financials/index.cjs");
const {
  createFinancialService,
  financialService,
  getIndexedFinance,
} = require("./financial-service.cjs");
const { parseKnowledgeIndex } = require("./knowledge-index.cjs");
const { saveWorldViewChip } = require("./worldview-store.cjs");
const {
  saveKnowledgeIndex,
  readKnowledgeIndex,
} = require("./knowledge-store.cjs");

/** Supplies deterministic statement and earnings responses, including missing values and unusual fiscal dates. */
function fixtureClient() {
  return {
    calls: 0,
    /** Returns provider earnings fields with explicit currency and fiscal period. */
    async quoteSummary() {
      return {
        financialData: { financialCurrency: "TWD" },
        earningsHistory: {
          history: [
            {
              quarter: new Date("2025-06-28"),
              epsActual: 2,
              epsEstimate: 1,
              currency: "USD",
            },
            { quarter: null, epsActual: null, epsEstimate: 0 },
          ],
        },
        calendarEvents: {
          earnings: {
            earningsDate: [new Date("2027-01-12")],
            isEarningsDateEstimate: true,
          },
        },
      };
    },
    /** Returns distinct annual/quarterly records with original metric keys. */
    async fundamentalsTimeSeries(symbol, options) {
      this.calls++;
      return [
        {
          date: new Date("2025-06-28"),
          periodType: options.type === "annual" ? "12M" : "3M",
          totalRevenue: options.type === "annual" ? 100 : 25,
          netIncome: null,
        },
      ];
    },
  };
}
/** Runs storage tests in an isolated Universe and removes only the verified temporary directory. */
async function withUniverse(run) {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "orbistry-financials-"));
  try {
    await run(root);
  } finally {
    assert.ok(
      path.resolve(root).startsWith(path.resolve(os.tmpdir()) + path.sep),
    );
    await fs.rm(root, { recursive: true, force: true });
  }
}
test("registered financial calls coexist with price, files and carousel syntax and reject execution", () => {
  const parsed = parseKnowledgeIndex(
    '# Price\nsource: yahooPrice("TSM")\n# Financials\nsource: yahooFinancials("tsm")\nsource: yahooEarnings("TSM")\nsource: notes.md\nImages = [\nsource: image.png\n].view(timeline)',
  );
  assert.deepEqual(parsed.errors, []);
  assert.deepEqual(
    parsed.menus[1].finance.map((item) => item.kind),
    ["financials", "earnings"],
  );
  assert.equal(parsed.menus[1].finance[0].symbol, "TSM");
  for (const source of [
    "yahooFinancials()",
    'yahooEarnings("../bad")',
    'yahooFinancials("TSM");evil()',
  ])
    assert.ok(parseKnowledgeIndex("# Test\nsource: " + source).errors.length);
});
test("financial normalization preserves period/currency, missing data and dynamic metrics", async () => {
  const client = fixtureClient();
  const engine = createFinancialEngine({ client });
  const data = await engine.fetch("TSM", "financials");
  assert.equal(client.calls, 6);
  assert.equal(data.currency, "TWD");
  assert.equal(
    data.statements.income_statement.annual[0].values.totalRevenue,
    100,
  );
  assert.equal(
    data.statements.income_statement.quarterly[0].values.totalRevenue,
    25,
  );
  assert.equal(data.statements.cash_flow.annual[0].values.netIncome, null);
  assert.equal(data.statements.balance_sheet.annual[0].periodEnd, "2025-06-28");
  assert.throws(() =>
    normalizeRecords([{ date: "bad", periodType: "12M" }], null, "12M"),
  );
  await assert.rejects(() => engine.fetch("../bad", "financials"));
});
test("earnings separates fiscal dates and schedules and computes only comparable nonzero EPS", async () => {
  const data = await createFinancialEngine({ client: fixtureClient() }).fetch(
    "TSM",
    "earnings",
  );
  assert.equal(data.history[0].announcementDate, null);
  assert.equal(data.history[0].periodEnd, "2025-06-28");
  assert.equal(data.history[0].surprise, 100);
  assert.equal(data.history[0].surpriseBasis, "computed");
  assert.equal(data.history[1].actual, null);
  assert.equal(data.history[1].surprise, null);
  assert.equal(data.scheduled[0].estimated, true);
});
test("financial cache coalesces, survives restart/offline, and preserves stale data on failed refresh", () =>
  withUniverse(async (root) => {
    let calls = 0,
      offline = false;
    const engine = createFinancialEngine({ client: fixtureClient() });
    /** Counts fixture retrievals and simulates a provider outage. */
    async function fetch(symbol, kind) {
      calls++;
      if (offline) throw Error("offline");
      return engine.fetch(symbol, kind);
    }
    const service = createFinancialService({ fetch });
    await Promise.all([
      service.get(root, "TSM", "financials"),
      service.get(root, "TSM", "financials"),
    ]);
    assert.equal(calls, 1);
    offline = true;
    assert.equal(
      (await createFinancialService({ fetch }).get(root, "TSM", "financials"))
        .cached,
      true,
    );
    const stale = await service.get(root, "TSM", "financials", true);
    assert.equal(stale.stale, true);
    assert.equal(
      stale.snapshot.statements.income_statement.annual[0].values.totalRevenue,
      100,
    );
    assert.match(stale.warning, /offline/);
    await assert.rejects(
      () => service.get(root, "UNKNOWN", "earnings"),
      /offline/,
    );
  }));
test("finance requests authorize applied sources and reject removed and forged declarations", () =>
  withUniverse(async (root) => {
    await saveWorldViewChip(root, {
      id: "company",
      name: "Company",
      icon: "",
      color: "#262b30",
      tags: [],
      position: { x: 0, y: 0 },
    });
    const applied = await saveKnowledgeIndex(
      root,
      "company",
      '# Financials\nsource: yahooFinancials("TSM")',
      null,
      true,
    );
    const menu = applied.menus[0],
      source = menu.finance[0];
    const original = financialService.get;
    const snapshot = await createFinancialEngine({
      client: fixtureClient(),
    }).fetch("TSM", "financials");
    try {
      financialService.get = async () => ({ snapshot });
      assert.equal(
        (await getIndexedFinance(root, "company", menu.id, source.id)).snapshot
          .symbol,
        "TSM",
      );
      await assert.rejects(() =>
        getIndexedFinance(root, "company", menu.id, "forged"),
      );
      /** Removes the declaration during a request to exercise reauthorization. */
      financialService.get = async () => {
        const current = await readKnowledgeIndex(root, "company");
        await saveKnowledgeIndex(
          root,
          "company",
          "# Empty",
          current.revision,
          true,
        );
        return { snapshot };
      };
      await assert.rejects(
        () => getIndexedFinance(root, "company", menu.id, source.id),
        /applied/,
      );
    } finally {
      financialService.get = original;
    }
  }));
test("empty and partially unavailable financial periods remain explicit", async () => {
  const client = fixtureClient();
  client.fundamentalsTimeSeries = async (_, options) => {
    if (options.type === "quarterly") throw Error("rate limited");
    return [];
  };
  const snapshot = await createFinancialEngine({ client }).fetch(
    "TSM",
    "financials",
  );
  assert.deepEqual(snapshot.statements.income_statement.annual, []);
  assert.equal(snapshot.warnings.length, 3);
});

test("corrupt and incomplete cache files warn and recover, while expired snapshots remain usable offline", () =>
  withUniverse(async (root) => {
    const engine = createFinancialEngine({ client: fixtureClient() });
    const folder = path.join(root, ".engine", "yahoo-financials", "cache");
    await fs.mkdir(folder, { recursive: true });
    const file = path.join(
      folder,
      createHash("sha256").update("TSM:financials").digest("hex") + ".json",
    );
    for (const corrupt of ["{broken", JSON.stringify({ schemaVersion: 1 })]) {
      await fs.writeFile(file, corrupt);
      const recovered = await createFinancialService({
        fetch: engine.fetch,
      }).get(root, "TSM", "financials");
      assert.match(recovered.warning, /could not be read/);
      assert.equal(recovered.snapshot.symbol, "TSM");
    }
    const offline = createFinancialService({
      clock: () => Date.now() + 2 * 86400000,
      fetch: async () => {
        throw Error("timeout");
      },
    });
    assert.equal((await offline.get(root, "TSM", "financials")).stale, true);
  }));
