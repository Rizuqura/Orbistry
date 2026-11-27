let client;
/** Creates the keyless Yahoo provider only on an explicit operation. */
function getClient() {
  if (!client) {
    const YahooFinance = require("yahoo-finance2").default;
    client = new YahooFinance({ suppressNotices: ["yahooSurvey"] });
  }
  return client;
}
module.exports = { getClient };
