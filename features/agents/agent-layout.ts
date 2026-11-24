export type AgentWidths = { history: number; details: number };
export const DEFAULT_AGENT_WIDTHS: AgentWidths = { history: 240, details: 280 };
export function clampAgentWidths(
  value: AgentWidths,
  width: number,
): AgentWidths {
  const budget = Math.max(0, width - 380);
  const history = Math.min(
    360,
    Math.max(200, Number.isFinite(value.history) ? value.history : 240),
  );
  const details = Math.min(
    420,
    Math.max(220, Number.isFinite(value.details) ? value.details : 280),
  );
  if (width < 960)
    return { history: Math.min(history, Math.max(200, width - 380)), details };
  const ratio = Math.min(1, budget / (history + details));
  return {
    history: Math.max(200, Math.floor(history * ratio)),
    details: Math.max(220, Math.floor(details * ratio)),
  };
}
