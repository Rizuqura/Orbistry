"use client";

import { useEffect, useState } from "react";
import type {
  FinancialResponse,
  IndexedFinanceSource,
} from "../../types/worldview";
import { requireWorldViewBridge } from "./chip-session";

/** Formats finite financial results without scaling or replacing missing values with zero. */
function value(number: number | null | undefined): string {
  return number === null || number === undefined
    ? "Unavailable"
    : new Intl.NumberFormat("en-US", { maximumFractionDigits: 10 }).format(
        number,
      );
}

/** Loads one applied Yahoo dataset on opening or manual refresh. Statement navigation uses the loaded snapshot. */
export function FinancialViewer({
  entityId,
  vaultPath,
  menuId,
  source,
}: Readonly<{
  entityId: string;
  vaultPath: string;
  menuId: string;
  source: IndexedFinanceSource;
}>) {
  const [result, setResult] = useState<FinancialResponse | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(0);
  const [statement, setStatement] = useState("income_statement");
  const [period, setPeriod] = useState<"annual" | "quarterly">("annual");
  /** Ignores late results after section changes and retains visible data if refresh fails. */
  useEffect(
    function load() {
      let cancelled = false;
      setLoading(true);
      setError("");
      void requireWorldViewBridge()
        .request<FinancialResponse>("finance-index", {
          vaultPath,
          id: entityId,
          menuId,
          financeId: source.id,
          force: refresh > 0,
        })
        .then(
          function loaded(response) {
            if (!cancelled) {
              setResult(response);
              setLoading(false);
            }
          },
          function failed(cause: unknown) {
            if (!cancelled) {
              setError(
                cause instanceof Error
                  ? cause.message
                  : "Financial data could not be loaded.",
              );
              setLoading(false);
            }
          },
        );
      return () => {
        cancelled = true;
      };
    },
    [entityId, vaultPath, menuId, source.id, refresh],
  );
  const data = result?.snapshot;
  const rows = data?.statements[statement]?.[period] ?? [];
  const metrics = [...new Set(rows.flatMap((row) => Object.keys(row.values)))];
  return (
    <section
      className="excel-preview financial-viewer"
      aria-label={
        source.kind === "financials" ? "Financial Statements" : "Earnings"
      }
    >
      <header>
        <h3>
          {source.kind === "financials" ? "Financial Statements" : "Earnings"}
        </h3>
        <p>Yahoo Finance · {source.symbol}</p>
        <button
          type="button"
          disabled={loading}
          onClick={() => setRefresh(refresh + 1)}
        >
          Refresh
        </button>
      </header>
      {loading && <p role="status">Loading Yahoo Finance data…</p>}
      {error && (
        <p role="alert">
          {error}
          {data ? " Showing saved data, stale." : ""}
        </p>
      )}
      {result?.warning && <p role="status">{result.warning}</p>}
      {data && (
        <>
          <p>
            {result?.stale
              ? "Stale saved data"
              : result?.cached
                ? "Cached data"
                : "Retrieved data"}{" "}
            · {data.fetchedAt}
          </p>
          {data.warnings.map((warning, index) => (
            <p role="status" key={index}>
              {warning}
            </p>
          ))}
          {source.kind === "financials" ? (
            <>
              <div className="excel-tabs" aria-label="Financial statement">
                {Object.entries({
                  income_statement: "Income Statement",
                  balance_sheet: "Balance Sheet",
                  cash_flow: "Cash Flow",
                }).map(([id, label]) => (
                  <button
                    type="button"
                    key={id}
                    aria-pressed={statement === id}
                    onClick={() => setStatement(id)}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <div className="excel-tabs" aria-label="Reporting frequency">
                {(["annual", "quarterly"] as const).map((item) => (
                  <button
                    type="button"
                    key={item}
                    aria-pressed={period === item}
                    onClick={() => setPeriod(item)}
                  >
                    {item === "annual" ? "Annual" : "Quarterly"}
                  </button>
                ))}
              </div>
              <p>
                Reporting currency · {data.currency ?? "Unavailable"}. Original
                unscaled values. EPS metrics use currency per share, share
                counts use shares, and ratios retain provider units.
              </p>
              {rows.length && metrics.length ? (
                <div
                  className="excel-table-scroll"
                  tabIndex={0}
                  aria-label="Financial statement cells"
                >
                  <table>
                    <thead>
                      <tr>
                        <th scope="col">Metric</th>
                        {rows.map((row, index) => (
                          <th scope="col" key={index}>
                            {row.periodEnd}
                            <br />
                            {row.periodType} ·{" "}
                            {row.currency ?? "Currency unavailable"}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {metrics.map((metric) => (
                        <tr key={metric}>
                          <th scope="row">{metric}</th>
                          {rows.map((row, index) => (
                            <td className="excel-number" key={index}>
                              {value(row.values[metric])}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p>No {period} statement data available.</p>
              )}
            </>
          ) : (
            <>
              <p>
                EPS values use the source currency per share. Period ends below
                are fiscal dates. Announcement dates are displayed separately
                when supplied.
              </p>
              {data.history.length ? (
                <div
                  className="excel-table-scroll"
                  tabIndex={0}
                  aria-label="Earnings history"
                >
                  <table>
                    <thead>
                      <tr>
                        {[
                          "Period end",
                          "Announcement date",
                          "Currency",
                          "EPS Estimate",
                          "EPS Actual",
                          "Surprise (%)",
                          "Basis",
                        ].map((label) => (
                          <th scope="col" key={label}>
                            {label}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {data.history.map((row, index) => (
                        <tr key={index}>
                          <th scope="row">{row.periodEnd ?? "Unavailable"}</th>
                          <td>{row.announcementDate ?? "Unavailable"}</td>
                          <td>{row.currency ?? "Unavailable"}</td>
                          <td>{value(row.estimate)}</td>
                          <td>{value(row.actual)}</td>
                          <td>{value(row.surprise)}</td>
                          <td>{row.surpriseBasis ?? "Unavailable"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p>No earnings history available.</p>
              )}
              <h4>Scheduled earnings dates</h4>
              <p>
                Multiple dates may describe a provider date window. A scheduled
                date does not confirm an announcement.
              </p>
              {data.scheduled.length ? (
                <ul>
                  {data.scheduled.map((item, index) => (
                    <li key={index}>
                      {item.date} ·{" "}
                      {item.estimated === true
                        ? "Estimated"
                        : item.estimated === false
                          ? "Provider scheduled"
                          : "Confirmation unavailable"}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No scheduled earnings dates available.</p>
              )}
            </>
          )}
        </>
      )}
    </section>
  );
}
