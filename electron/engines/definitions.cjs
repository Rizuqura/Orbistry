/** Shared built-in capability metadata. Keeps package validation independent of the AI registry portal and preserves the native adapters' public definitions. */
const ENGINE_DEFINITIONS = Object.freeze({
  "backend-identity": require("./backend-identity/schema.cjs").definition,
  "yahoo-financials": require("./yahoo-financials/index.cjs").definition,
  "daily-price": require("./daily-price/index.cjs").definition,
  "wonton-excel": require("./excel/index.cjs").definition,
  chronoz: {
    id: "chronoz",
    name: "CHronoZ",
    version: "1.0.0",
    operations: ["get_report"],
    nativeToolCalling: true,
  },
});
module.exports = { ENGINE_DEFINITIONS };
