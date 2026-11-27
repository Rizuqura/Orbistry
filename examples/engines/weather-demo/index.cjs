/** Provides deterministic synthetic temperature observations for package integration tests. */
async function execute({ operation, input }) {
  if (operation !== "temperature") throw new Error("Unsupported operation.");
  return {
    station: input.station,
    unit: "C",
    origin: "synthetic",
    observations: [
      { time: "2026-01-01T00:00:00Z", value: 18 },
      { time: "2026-01-01T01:00:00Z", value: 19 },
    ],
  };
}
module.exports = { execute };
