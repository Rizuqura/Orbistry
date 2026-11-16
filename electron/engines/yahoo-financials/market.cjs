const { z } = require("zod");
const RANGES = Object.freeze(["1M", "3M", "6M", "1Y", "5Y", "MAX"]);
const numeric = z.number().finite().nullable();
const quoteSchema = z
  .object({
    provider: z.literal("Yahoo Finance"),
    symbol: z.string(),
    fetchedAt: z.string().datetime(),
    currency: z.string().nullable(),
    exchange: z.string().nullable(),
    marketTime: z.string().datetime().nullable(),
    price: numeric,
    change: numeric,
    changePercent: numeric,
    marketCap: numeric,
    trailingPE: numeric,
    eps: numeric,
    week52Low: numeric,
    week52High: numeric,
    volume: numeric,
    delayMinutes: numeric,
    marketState: z.string().nullable(),
  })
  .strict();
const historySchema = z
  .object({
    provider: z.literal("Yahoo Finance"),
    symbol: z.string(),
    fetchedAt: z.string().datetime(),
    currency: z.string().nullable(),
    range: z.enum(RANGES),
    interval: z.enum(["1d", "1wk", "1mo"]),
    observations: z
      .array(
        z
          .object({
            date: z.string().datetime(),
            open: numeric,
            high: numeric,
            low: numeric,
            close: numeric,
            volume: numeric,
          })
          .strict(),
      )
      .max(20000),
    dividends: z
      .array(
        z.object({ date: z.string().datetime(), amount: numeric }).strict(),
      )
      .max(20000),
    splits: z
      .array(
        z
          .object({
            date: z.string().datetime(),
            numerator: numeric,
            denominator: numeric,
          })
          .strict(),
      )
      .max(20000),
  })
  .strict();
/** Retains unavailable numeric provider fields as null. */
function number(value) {
  return typeof value === "number" && Number.isFinite(value) ? value : null;
}
/** Converts Yahoo Date/epoch timestamps without silently assigning a date to missing values. */
function instant(value) {
  if (value === null || value === undefined) return null;
  const date =
    value instanceof Date
      ? value
      : new Date(typeof value === "number" ? value * 1000 : value);
  return Number.isFinite(date.getTime()) ? date.toISOString() : null;
}
/** Creates a lazy market provider, with exact ticker identity and bounded, cancellable requests. */
function createMarketProvider({ client, clock = Date.now, signal } = {}) {
  let yahoo = client;
  /** Resolves the trusted installed provider only when an operation is explicitly requested. */
  function provider() {
    if (!yahoo) {
      const YahooFinance = require("yahoo-finance2").default;
      yahoo = new YahooFinance({ suppressNotices: ["yahooSurvey"] });
    }
    return yahoo;
  }
  /** Combines the caller's cancellation signal with a 25-second request deadline. */
  function options() {
    const timeout = AbortSignal.timeout(25000);
    return {
      fetchOptions: {
        signal: signal ? AbortSignal.any([signal, timeout]) : timeout,
      },
    };
  }
  /** Retrieves unscaled quote fields from the exact listing; missing metrics remain null. */
  async function getQuote(symbol) {
    const raw = await provider().quote(symbol, {}, options());
    if (raw?.symbol?.toUpperCase() !== symbol)
      throw new Error("Yahoo quote ticker mismatch.");
    return quoteSchema.parse({
      provider: "Yahoo Finance",
      symbol,
      fetchedAt: new Date(clock()).toISOString(),
      currency: raw.currency ?? null,
      exchange: raw.fullExchangeName ?? raw.exchange ?? null,
      marketTime: instant(raw.regularMarketTime),
      price: number(raw.regularMarketPrice),
      change: number(raw.regularMarketChange),
      changePercent: number(raw.regularMarketChangePercent),
      marketCap: number(raw.marketCap),
      trailingPE: number(raw.trailingPE),
      eps: number(raw.epsTrailingTwelveMonths),
      week52Low: number(raw.fiftyTwoWeekLow),
      week52High: number(raw.fiftyTwoWeekHigh),
      volume: number(raw.regularMarketVolume),
      delayMinutes: number(raw.exchangeDataDelayedBy),
      marketState: raw.marketState ?? null,
    });
  }
  /** Retrieves range-specific OHLCV and supplied corporate actions; MAX uses monthly resolution to bound output. */
  async function getPriceHistory(symbol, range = "1Y") {
    if (!RANGES.includes(range))
      throw new Error("Unsupported Yahoo history range.");
    const start = new Date(clock());
    if (range === "MAX") start.setTime(0);
    else
      start.setUTCMonth(
        start.getUTCMonth() -
          { "1M": 1, "3M": 3, "6M": 6, "1Y": 12, "5Y": 60 }[range],
      );
    const interval = range === "MAX" ? "1mo" : range === "5Y" ? "1wk" : "1d";
    const raw = await provider().chart(
      symbol,
      { period1: start, interval, return: "array", events: "div|split" },
      options(),
    );
    if (
      raw?.meta?.symbol?.toUpperCase() !== symbol ||
      !Array.isArray(raw.quotes) ||
      raw.quotes.length > 20000
    )
      throw new Error("Yahoo history identity or schema mismatch.");
    return historySchema.parse({
      provider: "Yahoo Finance",
      symbol,
      fetchedAt: new Date(clock()).toISOString(),
      currency: raw.meta.currency ?? null,
      range,
      interval,
      observations: raw.quotes
        .map((row) => ({
          date: instant(row.date),
          open: number(row.open),
          high: number(row.high),
          low: number(row.low),
          close: number(row.close),
          volume: number(row.volume),
        }))
        .sort((a, b) => String(a.date).localeCompare(String(b.date))),
      dividends: (raw.events?.dividends ?? []).map((item) => ({
        date: instant(item.date),
        amount: number(item.amount),
      })),
      splits: (raw.events?.splits ?? []).map((item) => ({
        date: instant(item.date),
        numerator: number(item.numerator),
        denominator: number(item.denominator),
      })),
    });
  }
  return { getQuote, getPriceHistory };
}
module.exports = { RANGES, quoteSchema, historySchema, createMarketProvider };
