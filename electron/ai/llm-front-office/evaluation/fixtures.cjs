/** Purpose: reproducible public synthetic tasks; no proprietary data.
 * Inputs: none; outputs: 40 task cases including 25-turn replay and positioned needles.
 * Dependencies: none. Failure: none. Knobs: fixture version, controlled context lengths. Owner: evaluation. */
const VERSION = "orbistry-synthetic-v1";

/** Ground truth and human rubrics are kept outside provider messages. */
function fixtures() {
  const cases = [];
  for (let i = 1; i <= 10; i++)
    cases.push({
      id: `exact-${i}`,
      task: "format",
      turns: [
        {
          prompt: `Reply with exactly ORBISTRY_${i} and no other characters.`,
          expected: `ORBISTRY_${i}`,
        },
      ],
      rubric: "Exact string equality, whitespace trimmed.",
    });
  for (let i = 1; i <= 8; i++)
    cases.push({
      id: `fact-${i}`,
      task: "general",
      turns: [
        {
          prompt: `Synthetic fact: the fictional station ORBIT_${i} has label CODE_${i}. Return only its label.`,
          expected: `CODE_${i}`,
        },
      ],
      rubric: "Exact retrieval of supplied synthetic fact.",
    });
  const finance = [
    [
      "Explain diversification in two sentences without investment recommendations.",
      "Diversification spreads exposure across different assets. It can reduce concentration risk but does not eliminate losses.",
    ],
    [
      "Explain compound interest conceptually without giving investment advice.",
      "Compound interest means interest can itself earn interest over time. The outcome depends on the rate, time and compounding schedule.",
    ],
    [
      "Explain nominal versus real returns in plain language.",
      "A nominal return measures the money change. A real return adjusts that change for inflation.",
    ],
    [
      "Explain liquidity risk conceptually.",
      "Liquidity risk is the risk of being unable to trade an asset quickly at a reasonable price. Thin trading or market stress can make that risk larger.",
    ],
    [
      "Explain bond price and interest-rate sensitivity conceptually.",
      "Bond prices generally move inversely to market yields. Duration describes sensitivity, while credit and other risks also matter.",
    ],
    [
      "Explain why historical performance cannot guarantee future returns.",
      "Historical performance describes past conditions and outcomes. Future conditions, risks and prices can differ.",
    ],
  ];
  finance.forEach(([prompt, canonical], i) =>
    cases.push({
      id: `finance-${i + 1}`,
      task: "finance",
      turns: [{ prompt, canonical }],
      rubric:
        "Human review required: conceptual accuracy, follows requested length, no unsupported numerical claims or recommendations. Automated execution success is not a quality score.",
    }),
  );
  for (const length of [4096, 8192, 16384])
    for (const position of ["beginning", "middle", "end"]) {
      const key = `NEEDLE_${length}_${position.toUpperCase()}`;
      const filler = "abc".repeat(length);
      const cut =
        position === "beginning"
          ? 0
          : position === "middle"
            ? Math.floor(filler.length / 2)
            : filler.length;
      cases.push({
        id: `retrieval-${length}-${position}`,
        task: "retrieval",
        contextTokens: length,
        position,
        turns: [
          {
            prompt: `Return only the value after SECRET_LABEL in this synthetic data.\n${filler.slice(0, cut)}\nSECRET_LABEL=${key}\n${filler.slice(cut)}`,
            expected: key,
          },
        ],
        rubric:
          "Exact retrieval at controlled byte-estimated length and position; length is approximate, not provider-tokenized.",
      });
    }
  for (let variant = 1; variant <= 3; variant++)
    cases.push({
      id: `conversation-${variant}`,
      task: "conversation",
      turns: Array.from({ length: 25 }, (_, i) => ({
        prompt:
          i === 0
            ? `Remember the fictional session label SESSION_${variant}. Reply only ACK.`
            : i === 24
              ? "Return only the session label from turn one."
              : `Turn ${i + 1}. Return only ACK.`,
        expected: i === 24 ? `SESSION_${variant}` : "ACK",
      })),
      rubric:
        "Controlled 25-turn canonical-history replay: every successful prior exchange is included; exact final recall.",
    });
  for (let i = 1; i <= 4; i++)
    cases.push({
      id: `json-${i}`,
      task: "format",
      turns: [
        {
          prompt: `Return exactly a JSON object with one field result whose value is the string VALUE_${i}. No fences.`,
          expected: `{"result":"VALUE_${i}"}`,
          jsonExpected: { result: `VALUE_${i}` },
        },
      ],
      rubric: "Parsed JSON equality and exact required field/value.",
    });
  return cases;
}
module.exports = { fixtures, VERSION };
