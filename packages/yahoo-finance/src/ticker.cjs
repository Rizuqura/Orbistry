/** Normalizes a user-entered Yahoo ticker into a bounded symbol. Invalid symbols throw before any network request. */
function normalizeSymbol(value) {
  if (typeof value !== "string")
    throw new Error("Enter a Yahoo Finance ticker.");
  const symbol = value.trim().toUpperCase();
  if (!/^[A-Z0-9^][A-Z0-9.^=_-]{0,31}$/.test(symbol))
    throw new Error(
      "Use a Yahoo ticker such as AAPL, BBCA.JK, ^JKSE or BTC-USD.",
    );
  return symbol;
}
module.exports = { normalizeSymbol };
