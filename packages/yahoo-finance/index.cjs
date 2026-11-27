const daily = require("./src/daily.cjs");
const financials = require("./src/financials.cjs");
/** Routes declared package operations to the original validating adapters and preserves their structured results. */
async function execute({ operation, input }) {
  if (operation === "price") return daily.price(input.symbol);
  return financials.execute({ ...input, operation });
}
module.exports = { execute };
