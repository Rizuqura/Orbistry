const { z } = require("zod");
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
module.exports = { snapshotSchema };
