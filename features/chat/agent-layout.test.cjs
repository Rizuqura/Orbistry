const test = require("node:test"),
  assert = require("node:assert/strict");
const { clampAgentWidths } = require("../agents/agent-layout.ts");
test("agent split widths recover corrupt values and reserve chat space after viewport changes", () => {
  assert.deepEqual(
    clampAgentWidths({ history: NaN, details: Infinity }, 1440),
    { history: 240, details: 280 },
  );
  const large = clampAgentWidths({ history: 99999, details: 99999 }, 1000);
  assert.ok(large.history >= 200 && large.details >= 220);
  assert.ok(large.history + large.details <= 620);
  const narrow = clampAgentWidths({ history: 360, details: 420 }, 660);
  assert.ok(narrow.history <= 280);
});
