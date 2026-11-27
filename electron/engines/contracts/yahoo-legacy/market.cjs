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
module.exports = { quoteSchema, historySchema, RANGES };
