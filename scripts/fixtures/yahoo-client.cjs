/** Synthetic provider at the package's client boundary for offline installation tests. */
const date = new Date("2025-02-03T16:00:00Z");
exports.getClient = () => ({
  async quote(symbol) {
    return {
      symbol,
      regularMarketPrice: 123.45,
      regularMarketTime: date,
      currency: "USD",
      exchangeTimezoneName: "UTC",
    };
  },
  async chart(symbol) {
    return {
      meta: { symbol, currency: "USD", exchangeTimezoneName: "UTC" },
      quotes: [{ date, close: 122 }],
    };
  },
  async quoteSummary() {
    return {
      financialData: { financialCurrency: "USD" },
      earningsHistory: { history: [{ quarter: date, epsActual: 2 }] },
    };
  },
  async fundamentalsTimeSeries(symbol, { type }) {
    return [
      { date, periodType: type === "annual" ? "12M" : "3M", totalRevenue: 500 },
    ];
  },
});
