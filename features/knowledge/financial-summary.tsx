import type { FinancialSnapshot } from "../../types/worldview";

/** Formats only supplied finite values, retaining unavailable observations. */
function number(value: number | null | undefined): string {
  return typeof value === "number" && Number.isFinite(value)
    ? new Intl.NumberFormat("en-US", {
        maximumFractionDigits: 2,
        notation: "compact",
      }).format(value)
    : "Unavailable";
}

/** Builds a small revenue/net-income trend from actual reporting dates; mixed or missing currencies disable the comparison. */
export function FinancialSummary({
  data,
  period,
}: Readonly<{
  data: FinancialSnapshot;
  period: "annual" | "quarterly";
}>) {
  const rows = data.statements.income_statement?.[period] ?? [];
  const latest = rows.at(-1);
  if (!latest) return null;
  const currencies = new Set(rows.map((row) => row.currency));
  const comparable = currencies.size === 1 && latest.currency !== null;
  const revenue = latest.values.totalRevenue;
  const income = latest.values.netIncome;
  const operating = latest.values.operatingIncome;
  const margin =
    comparable &&
    typeof revenue === "number" &&
    revenue !== 0 &&
    typeof operating === "number"
      ? (operating / revenue) * 100
      : null;
  const values = rows
    .flatMap((row) => [row.values.totalRevenue, row.values.netIncome])
    .filter((item): item is number => typeof item === "number");
  const low = Math.min(0, ...values);
  const high = Math.max(0, ...values);
  const span = high - low || 1;
  const first = Date.parse(rows[0].periodEnd);
  const last = Date.parse(latest.periodEnd);
  /** Projects finite observations using fiscal dates; null observations break the line. */
  function path(metric: string): string {
    let previous = false;
    return rows
      .map((row) => {
        const value = row.values[metric];
        if (typeof value !== "number") {
          previous = false;
          return "";
        }
        const x =
          last === first
            ? 300
            : 28 + ((Date.parse(row.periodEnd) - first) / (last - first)) * 544;
        const y = 130 - ((value - low) / span) * 105;
        const command = `${previous ? "L" : "M"}${x},${y}`;
        previous = true;
        return command + ` M${x},${y} l0.01,0`;
      })
      .join(" ");
  }
  return (
    <div className="financial-summary">
      <dl className="knowledge-metric-grid">
        {[
          [
            "Revenue",
            number(revenue),
            latest.currency ?? "Currency unavailable",
          ],
          [
            "Net income",
            number(income),
            latest.currency ?? "Currency unavailable",
          ],
          [
            "Operating margin",
            margin === null ? "Unavailable" : `${margin.toFixed(2)}%`,
            "Calculated · operating income / revenue",
          ],
        ].map(([label, value, unit]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
            <small>{unit}</small>
          </div>
        ))}
      </dl>
      {comparable && values.length > 0 && (
        <section
          className="knowledge-widget financial-trend"
          aria-label="Financial performance"
        >
          <header>
            <h4>Financial performance</h4>
            <span>
              {period} · {latest.currency} · unscaled
            </span>
          </header>
          <svg
            viewBox="0 0 600 160"
            role="img"
            aria-label={`Revenue and net income trend from ${rows[0].periodEnd} to ${latest.periodEnd}. Exact values are in the statement table.`}
          >
            {[25, 77.5, 130].map((y) => (
              <line
                key={y}
                x1="28"
                x2="572"
                y1={y}
                y2={y}
                className="financial-trend-grid"
              />
            ))}
            <path
              d={path("totalRevenue")}
              className="financial-trend-revenue"
            />
            <path d={path("netIncome")} className="financial-trend-income" />
            <text x="28" y="152">
              {rows[0].periodEnd}
            </text>
            <text x="572" y="152" textAnchor="end">
              {latest.periodEnd}
            </text>
          </svg>
          <footer>
            <span className="financial-revenue-key">Revenue</span>
            <span className="financial-income-key">Net income</span>
            <span>Yahoo Finance · fiscal period end</span>
          </footer>
        </section>
      )}
      <p className="knowledge-provenance">
        Summary period: {latest.periodEnd} · {latest.periodType} · Yahoo Finance
        · retrieved {data.fetchedAt}. Compact values; exact figures below.
      </p>
    </div>
  );
}
