const assert = require("node:assert/strict");
const path = require("node:path");

/** Verifies financial and earnings sections through the real IPC/cache/viewer using deterministic provider responses. */
async function verifyFinancials({ app, page, createChip }) {
  await app.evaluate((_, repository) => {
    const require = process
      .getBuiltinModule("node:module")
      .createRequire(repository + "/package.json");
    const service = require(repository + "/electron/financial-service.cjs");
    const { createFinancialEngine } = require(
      repository + "/electron/engines/yahoo-financials/index.cjs",
    );
    globalThis.financeSmoke = { calls: 0, offline: false };
    const engine = createFinancialEngine({
      client: {
        /** Supplies fixture earnings with a real-shaped fiscal date and scheduled estimate. */
        async quoteSummary() {
          if (globalThis.financeSmoke.offline) throw Error("synthetic offline");
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
        /** Supplies independent annual and quarterly observations. */
        async fundamentalsTimeSeries(symbol, options) {
          return [
            {
              date: new Date("2025-06-28"),
              periodType: options.type === "annual" ? "12M" : "3M",
              totalRevenue: options.type === "annual" ? 100 : 25,
              netIncome: null,
            },
          ];
        },
      },
    });
    const fixture = service.createFinancialService({
      fetch: async (symbol, kind) => {
        globalThis.financeSmoke.calls++;
        return engine.fetch(symbol, kind);
      },
    });
    service.financialService.get = fixture.get;
  }, path.resolve("."));
  await createChip(page, "Financials Test");
  await page.waitForFunction(
    () =>
      !/Saving|Loading/.test(
        document.querySelector(".worldview-save-status").textContent,
      ),
  );
  await page
    .getByRole("button", { name: "View Knowledge Card", exact: true })
    .click();
  const card = page.locator(".knowledge-card");
  await page.waitForFunction(
    () => document.querySelector(".knowledge-write-index")?.disabled === false,
  );
  await card.getByRole("button", { name: "Write Index", exact: true }).click();
  await card
    .getByRole("textbox", { name: "Index declarations", exact: true })
    .fill(
      '# Financials\nsource: yahooFinancials("TSM")\n# Earnings\nsource: yahooEarnings("TSM")',
    );
  await card.getByRole("button", { name: "Apply Index", exact: true }).click();
  const financial = card.getByRole("region", {
    name: "Financial Statements",
    exact: true,
  });
  await financial.getByRole("cell", { name: "100", exact: true }).waitFor();
  assert.match(await financial.innerText(), /TWD/);
  await financial
    .getByRole("button", { name: "Quarterly", exact: true })
    .click();
  await financial.getByRole("cell", { name: "25", exact: true }).waitFor();
  await financial
    .getByRole("button", { name: "Balance Sheet", exact: true })
    .click();
  await financial
    .getByRole("button", { name: "Cash Flow", exact: true })
    .click();
  assert.equal(await app.evaluate(() => globalThis.financeSmoke.calls), 1);
  assert.equal(
    await financial
      .getByRole("cell", { name: "Unavailable", exact: true })
      .count(),
    1,
  );
  await app.evaluate(() => {
    globalThis.financeSmoke.offline = true;
  });
  await financial.getByRole("button", { name: "Refresh", exact: true }).click();
  await financial.getByText(/Refresh failed/).waitFor();
  await financial.getByRole("cell", { name: "25", exact: true }).waitFor();
  await app.evaluate(() => {
    globalThis.financeSmoke.offline = false;
  });
  await card.getByRole("button", { name: "Earnings", exact: true }).click();
  const earnings = card.getByRole("region", { name: "Earnings", exact: true });
  await earnings.getByRole("cell", { name: "computed", exact: true }).waitFor();
  assert.match(await earnings.innerText(), /2025-06-28/);
  assert.match(await earnings.innerText(), /2027-01-12/);
  await card.getByRole("button", { name: "Financials", exact: true }).click();
  await financial.getByRole("cell", { name: "100", exact: true }).waitFor();
  assert.equal(await app.evaluate(() => globalThis.financeSmoke.calls), 3);
  await page.screenshot({ path: "test-results/yahoo-financials-native.png" });
  return { financials: true, earnings: true, localTabs: true, offline: true };
}
module.exports = { verifyFinancials };
