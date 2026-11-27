/** Shared built-in capability metadata. Keeps package validation independent of the AI registry portal and preserves the native adapters' public definitions. */
const ENGINE_DEFINITIONS = Object.freeze({
  "backend-identity": require("./backend-identity/schema.cjs").definition,
  "yahoo-financials": Object.freeze({
    id: "yahoo-financials",
    name: "Yahoo Financials & Earnings",
    version: "0.2.0",
    operations: ["quote", "history", "financials", "earnings"],
    nativeToolCalling: false,
    readOnly: true,
  }),
  "daily-price": Object.freeze({
    id: "daily-price",
    name: "Daily Price",
    version: "0.1.0",
    operations: ["price"],
    nativeToolCalling: false,
    readOnly: true,
  }),
  "wonton-excel": Object.freeze({
    id: "wonton-excel",
    name: "Wonton Excel",
    version: "0.1.2",
    operations: ["excel"],
    nativeToolCalling: false,
    readOnly: true,
  }),
  chronoz: {
    id: "chronoz",
    name: "CHronoZ",
    version: "1.0.0",
    operations: ["get_report"],
    nativeToolCalling: true,
  },
});
module.exports = { ENGINE_DEFINITIONS };
