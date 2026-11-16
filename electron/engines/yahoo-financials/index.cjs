const { z } = require("zod");
/** Validates bounded Yahoo tickers before provider access. */
function normalizeSymbol(value) {
  if (
    typeof value !== "string" ||
    !/^[A-Z0-9^][A-Z0-9.^=_-]{0,31}$/.test(value.trim().toUpperCase())
  )
    throw new Error("Enter a valid Yahoo Finance ticker.");
  return value.trim().toUpperCase();
}
const definition = Object.freeze({
  id: "yahoo-financials",
  name: "Yahoo Financials & Earnings",
  version: "0.1.0",
  operations: ["financials", "earnings"],
  nativeToolCalling: false,
  readOnly: true,
});
const nullableNumber = z.number().finite().nullable();
const recordSchema = z
  .object({
    periodEnd: z.string().date(),
    periodType: z.enum(["3M", "12M"]),
    currency: z.string().nullable(),
    values: z.record(z.string(), nullableNumber),
  })
  .strict();
const snapshotSchema = z
  .object({
    schemaVersion: z.literal(1),
    provider: z.literal("Yahoo Finance"),
    symbol: z.string(),
    kind: z.enum(["financials", "earnings"]),
    fetchedAt: z.string().datetime(),
    currency: z.string().nullable(),
    warnings: z.array(z.string()),
    statements: z.record(
      z.string(),
      z
        .object({
          annual: z.array(recordSchema).max(100),
          quarterly: z.array(recordSchema).max(100),
        })
        .strict(),
    ),
    history: z
      .array(
        z
          .object({
            periodEnd: z.string().date().nullable(),
            announcementDate: z.string().datetime().nullable(),
            currency: z.string().nullable(),
            estimate: nullableNumber,
            actual: nullableNumber,
            surprise: nullableNumber,
            surpriseBasis: z.enum(["provider", "computed"]).nullable(),
          })
          .strict(),
      )
      .max(100),
    scheduled: z
      .array(
        z
          .object({
            date: z.string().datetime(),
            estimated: z.boolean().nullable(),
          })
          .strict(),
      )
      .max(20),
  })
  .strict()
  .refine(function completeDataset(snapshot) {
    return (
      snapshot.kind !== "financials" ||
      ["income_statement", "balance_sheet", "cash_flow"].every((name) =>
        Object.hasOwn(snapshot.statements, name),
      )
    );
  }, "Financial cache is incomplete.");
/** Preserves unavailable numeric values as null. */
function number(value) {
  return typeof value === "number" && Number.isFinite(value) ? value : null;
}
/** Converts provider dates to ISO timestamps without inventing missing dates. */
function date(value) {
  if (value === null || value === undefined) return null;
  const result = value instanceof Date ? value : new Date(value);
  return Number.isFinite(result.getTime()) ? result.toISOString() : null;
}
/** Normalizes statement rows preserving provider metric keys, real period ends and original units. Invalid shapes reject. */
function normalizeRecords(rows, currency, period) {
  if (!Array.isArray(rows) || rows.length > 100)
    throw new Error("Yahoo statement schema changed.");
  return rows
    .map(function normalizeRow(row) {
      const periodEnd = date(row.date)?.slice(0, 10);
      if (!periodEnd || row.periodType !== period)
        throw new Error("Invalid financial reporting period.");
      const values = {};
      for (const [key, value] of Object.entries(row)) {
        if (
          ["date", "TYPE", "periodType", "currencyCode", "currency"].includes(
            key,
          )
        )
          continue;
        if (value !== null && value !== undefined && typeof value !== "number")
          throw new Error(`Unexpected financial metric type for ${key}.`);
        values[key] = number(value);
      }
      return {
        periodEnd,
        periodType: period,
        currency: row.currencyCode ?? row.currency ?? currency,
        values,
      };
    })
    .sort((a, b) => a.periodEnd.localeCompare(b.periodEnd));
}
/** Creates a lazy keyless Yahoo client. Fetching uses a 25-second deadline and returns validated structured snapshots. */
function createFinancialEngine({ client, clock = Date.now } = {}) {
  let yahoo = client;
  /** Retrieves financial statements or earnings for a validated ticker. Partial statement failures are reported per dataset. */
  async function fetch(input, kind) {
    const symbol = normalizeSymbol(input);
    if (!["financials", "earnings"].includes(kind))
      throw new Error("Unknown Yahoo dataset.");
    if (!yahoo) {
      const YahooFinance = require("yahoo-finance2").default;
      yahoo = new YahooFinance({ suppressNotices: ["yahooSurvey"] });
    }
    const options = { fetchOptions: { signal: AbortSignal.timeout(25000) } };
    const summary = await yahoo.quoteSummary(
      symbol,
      {
        modules:
          kind === "financials"
            ? ["financialData"]
            : ["earningsHistory", "calendarEvents", "financialData"],
      },
      options,
    );
    if (!summary || typeof summary !== "object")
      throw new Error("Yahoo Finance returned an invalid company response.");
    const currency = summary.financialData?.financialCurrency ?? null;
    const snapshot = {
      schemaVersion: 1,
      provider: "Yahoo Finance",
      symbol,
      kind,
      fetchedAt: new Date(clock()).toISOString(),
      currency,
      warnings: [],
      statements: {},
      history: [],
      scheduled: [],
    };
    if (kind === "financials") {
      const start = new Date(clock());
      start.setUTCFullYear(start.getUTCFullYear() - 5);
      let successes = 0;
      for (const [name, module] of Object.entries({
        income_statement: "financials",
        balance_sheet: "balance-sheet",
        cash_flow: "cash-flow",
      })) {
        snapshot.statements[name] = { annual: [], quarterly: [] };
        for (const [type, period] of [
          ["annual", "12M"],
          ["quarterly", "3M"],
        ]) {
          try {
            const rows = await yahoo.fundamentalsTimeSeries(
              symbol,
              { period1: start, type, module },
              options,
            );
            snapshot.statements[name][type] = normalizeRecords(
              rows,
              currency,
              period,
            );
            successes++;
          } catch (error) {
            snapshot.warnings.push(
              `${name} ${type} unavailable. ${error.message}`,
            );
          }
        }
      }
      if (!successes) throw new Error(snapshot.warnings.join(" "));
    } else {
      const history = summary.earningsHistory?.history ?? [];
      if (!Array.isArray(history))
        throw new Error("Yahoo earnings schema changed.");
      snapshot.history = history.map(function normalizeEarnings(item) {
        const actual = number(item.epsActual),
          estimate = number(item.epsEstimate);
        const supplied = number(item.surprisePercent);
        const computed =
          actual !== null && estimate !== null && estimate !== 0
            ? ((actual - estimate) / Math.abs(estimate)) * 100
            : null;
        return {
          periodEnd: date(item.quarter)?.slice(0, 10) ?? null,
          announcementDate: null,
          currency: item.currency ?? null,
          actual,
          estimate,
          surprise: supplied === null ? computed : supplied * 100,
          surpriseBasis:
            supplied !== null
              ? "provider"
              : computed !== null
                ? "computed"
                : null,
        };
      });
      const earnings = summary.calendarEvents?.earnings;
      snapshot.scheduled = (earnings?.earningsDate ?? []).map(
        function scheduled(value) {
          return {
            date: date(value),
            estimated: earnings.isEarningsDateEstimate ?? null,
          };
        },
      );
    }
    return snapshotSchema.parse(snapshot);
  }
  return { fetch };
}
const financialEngine = createFinancialEngine();
module.exports = {
  definition,
  normalizeSymbol,
  snapshotSchema,
  normalizeRecords,
  createFinancialEngine,
  fetch: financialEngine.fetch,
};
