/** Labels delivery origin independently of market observation age. History reads do not claim a new provider invocation; no network or storage side effects. */
function quoteOrigin(quote, historical = false) {
  if (historical) return "historical";
  if (quote.stale) return "stale_cache";
  return quote.cached ? "valid_cache" : "provider";
}
module.exports = { quoteOrigin };
