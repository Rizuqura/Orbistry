/** Dispatches allowlisted native adapters without loading AI services. Trusted callers must authorize the Entity/source and any network request first; returns adapter data or its validation/provider error. This low-level port does not grant permissions or mint execution receipts. */
async function executeNativeEngine(engineId, operation, input, options) {
  if (engineId === "yahoo-financials") {
    if (
      input === null ||
      typeof input !== "object" ||
      Array.isArray(input) ||
      Object.hasOwn(input, "operation")
    )
      throw new Error(
        "Use an operation and a separate Yahoo arguments object.",
      );
    return require("./yahoo-financials/index.cjs")
      .createFinancialEngine(options)
      .execute({ ...input, operation });
  }
  if (engineId === "daily-price" && operation === "price")
    return require("./daily-price/index.cjs").price(input, options);
  if (engineId !== "wonton-excel" || operation !== "excel")
    throw new Error("Unsupported native Engine operation.");
  return require("./excel/index.cjs").excel(input, options);
}
module.exports = { executeNativeEngine };
