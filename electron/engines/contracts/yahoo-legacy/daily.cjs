const { z } = require("zod");
const VERSION = "0.1.0";
const QUOTE_TTL_MS = 5 * 60 * 1000;
const HISTORY_TTL_MS = 6 * 60 * 60 * 1000;
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

module.exports = { snapshotSchema, QUOTE_TTL_MS, HISTORY_TTL_MS };
