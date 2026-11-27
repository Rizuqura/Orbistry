const { z } = require("zod");
const VERSION = "0.1.0";
const QUOTE_TTL_MS = 5 * 60 * 1000;
const HISTORY_TTL_MS = 6 * 60 * 60 * 1000;
const definition = Object.freeze({
  id: "daily-price",
  name: "Daily Price",
  version: "0.1.0",
  operations: ["price"],
  nativeToolCalling: false,
  readOnly: true,
});
const snapshotSchema = z
  .object({
    schemaVersion: z.literal(1),
    engineVersion: z.literal(VERSION),
    provider: z.literal("Yahoo Finance"),
    symbol: z.string().regex(/^[A-Z0-9^][A-Z0-9.^=_-]{0,31}$/),
    currency: z.string().min(1).max(12),
    exchangeTimezone: z.string().min(1).max(80),
    price: z.number().finite().nonnegative(),
    previousClose: z.number().finite().nonnegative().nullable(),
    marketTime: z.string().datetime(),
    marketState: z.string().max(40),
    delayMinutes: z.number().finite().nonnegative().nullable(),
    fetchedAt: z.string().datetime(),
    historyFetchedAt: z.string().datetime(),
    metrics: z
      .object({
        marketCap: z.number().finite().nullable(),
        trailingPE: z.number().finite().nullable(),
        eps: z.number().finite().nullable(),
        week52Low: z.number().finite().nullable(),
        week52High: z.number().finite().nullable(),
        volume: z.number().finite().nullable(),
      })
      .strict()
      .optional(),
    history: z
      .array(
        z
          .object({
            date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
            close: z.number().finite().nonnegative(),
          })
          .strict(),
      )
      .min(1)
      .max(400),
  })
  .strict()
  .refine(function validTimezone(value) {
    try {
      new Intl.DateTimeFormat("en-US", { timeZone: value.exchangeTimezone });
      return true;
    } catch (error) {
      if (error instanceof RangeError) return false;
      throw error;
    }
  }, "Exchange timezone is invalid.")
  .refine(function ordered(value) {
    return value.history.every(function increasing(point, index, points) {
      return (
        Number.isFinite(Date.parse(point.date)) &&
        new Date(point.date).toISOString().slice(0, 10) === point.date &&
        (!index || point.date > points[index - 1].date)
      );
    });
  }, "Daily observations must be valid dates in chronological order.");

const { normalizeSymbol } = require("./ticker.cjs");

/** Converts a provider timestamp to an ISO instant, rejecting unavailable market times. */
function instant(value) {
  const date =
    value instanceof Date
      ? value
      : new Date(typeof value === "number" ? value * 1000 : value);
  if (value === null || value === undefined || !Number.isFinite(date.getTime()))
    throw new Error("Yahoo Finance returned an unavailable market timestamp.");
  return date.toISOString();
}

/** Converts provider observations into ordered daily closes using the exchange's calendar date. Missing closes are skipped and duplicate dates use the last observation. */
function dailyCloses(quotes, timeZone) {
  if (!Array.isArray(quotes) || quotes.length > 1000)
    throw new Error("Yahoo Finance returned an invalid daily history.");
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const days = new Map();
  for (const point of quotes) {
    if (!Number.isFinite(point.close) || point.close < 0) continue;
    const parts = Object.fromEntries(
      formatter
        .formatToParts(new Date(instant(point.date)))
        .map(function part(item) {
          return [item.type, item.value];
        }),
    );
    days.set(`${parts.year}-${parts.month}-${parts.day}`, point.close);
  }
  const history = [...days]
    .sort(function chronological(a, b) {
      return a[0].localeCompare(b[0]);
    })
    .map(function observation([date, close]) {
      return { date, close };
    });
  if (!history.length || history.length > 400)
    throw new Error(
      "Yahoo Finance has no usable daily prices for this ticker.",
    );
  return history;
}

/** Creates a reusable Yahoo market-data client. Network access starts only when price() is called, with a 25-second abort deadline. */
function createDailyPriceEngine({ client, clock = Date.now } = {}) {
  let yahoo = client;
  /** Fetches the latest available regular-session quote and one year of daily history, reusing recent history from a validated snapshot. */
  async function price(input, { previous = null, force = false } = {}) {
    const symbol = normalizeSymbol(input);
    if (!yahoo) {
      yahoo = require("./client.cjs").getClient();
    }
    const now = clock();
    const signal = AbortSignal.timeout(25000);
    const options = { fetchOptions: { signal } };
    const reusable =
      previous &&
      previous.symbol === symbol &&
      !force &&
      now - Date.parse(previous.historyFetchedAt) >= 0 &&
      now - Date.parse(previous.historyFetchedAt) < HISTORY_TTL_MS;
    const start = new Date(now);
    start.setUTCFullYear(start.getUTCFullYear() - 1);
    const [quote, chart] = await Promise.all([
      yahoo.quote(symbol, {}, options),
      reusable
        ? null
        : yahoo.chart(
            symbol,
            { period1: start, interval: "1d", return: "array" },
            options,
          ),
    ]);
    if (
      !quote ||
      quote.symbol?.toUpperCase() !== symbol ||
      !Number.isFinite(quote.regularMarketPrice)
    )
      throw new Error("Yahoo Finance has no latest price for this ticker.");
    const exchangeTimezone =
      quote.exchangeTimezoneName ??
      chart?.meta?.exchangeTimezoneName ??
      previous?.exchangeTimezone;
    const currency =
      quote.currency ?? chart?.meta?.currency ?? previous?.currency;
    if (!exchangeTimezone || !currency)
      throw new Error(
        "Yahoo Finance did not supply the quote currency or exchange timezone.",
      );
    const snapshot = {
      schemaVersion: 1,
      engineVersion: VERSION,
      provider: "Yahoo Finance",
      symbol,
      currency,
      exchangeTimezone,
      price: quote.regularMarketPrice,
      previousClose: Number.isFinite(quote.regularMarketPreviousClose)
        ? quote.regularMarketPreviousClose
        : null,
      marketTime: instant(quote.regularMarketTime),
      marketState: quote.marketState ?? "UNKNOWN",
      delayMinutes: Number.isFinite(quote.exchangeDataDelayedBy)
        ? quote.exchangeDataDelayedBy
        : null,
      fetchedAt: new Date(now).toISOString(),
      historyFetchedAt: reusable
        ? previous.historyFetchedAt
        : new Date(now).toISOString(),
      history: reusable
        ? previous.history
        : dailyCloses(chart?.quotes, exchangeTimezone),
      metrics: Object.fromEntries(
        Object.entries({
          marketCap: "marketCap",
          trailingPE: "trailingPE",
          eps: "epsTrailingTwelveMonths",
          week52Low: "fiftyTwoWeekLow",
          week52High: "fiftyTwoWeekHigh",
          volume: "regularMarketVolume",
        }).map(([name, key]) => [
          name,
          typeof quote[key] === "number" && Number.isFinite(quote[key])
            ? quote[key]
            : null,
        ]),
      ),
    };
    return snapshotSchema.parse(snapshot);
  }
  return { price };
}
const engine = createDailyPriceEngine();
module.exports = {
  VERSION,
  QUOTE_TTL_MS,
  HISTORY_TTL_MS,
  definition,
  snapshotSchema,
  normalizeSymbol,
  createDailyPriceEngine,
  price: engine.price,
};
