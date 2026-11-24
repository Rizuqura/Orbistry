"use client";

import { useEffect, useRef, useState } from "react";
import type {
  DailyPriceResponse,
  KnowledgeIndexState,
  IndexedPriceSource,
  MarketHistoryResponse,
} from "../../types/worldview";
import { requireWorldViewBridge } from "../worldview/chip-session";

/** Formats market values as decimal text with the provider's currency unit, including subunits such as GBp. */
function priceText(value: number, currency: string): string {
  return `${new Intl.NumberFormat(undefined, { minimumFractionDigits: 2, maximumFractionDigits: Math.abs(value) < 0.01 ? 8 : 4 }).format(value)} ${currency}`;
}

/** Draws an accessible daily line chart with actual calendar-date spacing, pointer inspection and keyboard observation selection. */
function DailyPriceChart({
  points,
  currency,
}: Readonly<{
  points: readonly { date: string; close: number }[];
  currency: string;
}>) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const active =
    selected === null ? null : points[Math.min(selected, points.length - 1)];
  /** Repaints the price scale and selected observation after viewport, range or selection changes. */
  useEffect(
    function paintChart() {
      const element = canvas.current;
      if (!element) return;
      /** Paints a bounded set of daily observations in CSS pixels with device-pixel backing resolution. */
      function draw() {
        const context = element!.getContext("2d");
        if (!context || !points.length) return;
        const width = element!.clientWidth;
        const height = 240;
        const scale = Math.min(window.devicePixelRatio || 1, 2);
        element!.width = width * scale;
        element!.height = height * scale;
        context.scale(scale, scale);
        context.clearRect(0, 0, width, height);
        const left = 72,
          right = Math.max(left + 1, width - 16),
          top = 16,
          bottom = 208;
        const values = points.map((point) => point.close);
        const min = Math.min(...values),
          max = Math.max(...values);
        const pad = (max - min) * 0.08 || Math.max(Math.abs(min) * 0.01, 0.01);
        const low = min - pad,
          high = max + pad;
        const first = Date.parse(points[0].date),
          last = Date.parse(points.at(-1)!.date);
        /** Maps a source calendar date onto the visible horizontal time axis. */
        function x(date: string) {
          return first === last
            ? (left + right) / 2
            : left +
                ((Date.parse(date) - first) / (last - first)) * (right - left);
        }
        /** Maps a close to the displayed, padded price range. */
        function y(value: number) {
          return bottom - ((value - low) / (high - low)) * (bottom - top);
        }
        context.font = "10px 'IBM Plex Mono', monospace";
        for (let tick = 0; tick <= 4; tick++) {
          const value = low + ((high - low) * tick) / 4;
          context.strokeStyle = "#292a25";
          context.beginPath();
          context.moveTo(left, y(value));
          context.lineTo(right, y(value));
          context.stroke();
          context.fillStyle = "#b2b0a6";
          context.textAlign = "right";
          context.fillText(
            new Intl.NumberFormat(undefined, {
              notation: "compact",
              maximumFractionDigits: 2,
            }).format(value),
            left - 8,
            y(value) + 3,
          );
        }
        context.strokeStyle = "#ffb000";
        context.lineWidth = 1.5;
        context.beginPath();
        points.forEach(function segment(point, index) {
          if (index) context.lineTo(x(point.date), y(point.close));
          else context.moveTo(x(point.date), y(point.close));
        });
        context.stroke();
        if (points.length === 1) {
          context.beginPath();
          context.arc(x(points[0].date), y(points[0].close), 3, 0, Math.PI * 2);
          context.fillStyle = "#ffb000";
          context.fill();
        }
        context.fillStyle = "#b2b0a6";
        context.textAlign = "left";
        context.fillText(points[0].date, left, 230);
        context.textAlign = "right";
        context.fillText(points.at(-1)!.date, right, 230);
        if (active) {
          context.strokeStyle = "#e8e5dc";
          context.beginPath();
          context.moveTo(x(active.date), top);
          context.lineTo(x(active.date), bottom);
          context.stroke();
          context.beginPath();
          context.arc(x(active.date), y(active.close), 3, 0, Math.PI * 2);
          context.fillStyle = "#ffb000";
          context.fill();
        }
      }
      const observer = new ResizeObserver(draw);
      observer.observe(element);
      draw();
      return () => observer.disconnect();
    },
    [points, active],
  );

  /** Selects the nearest actual observation to the pointer's calendar-date position. */
  function inspect(clientX: number): void {
    const element = canvas.current;
    if (!element || !points.length) return;
    const bounds = element.getBoundingClientRect();
    const fraction = Math.max(
      0,
      Math.min(
        1,
        (clientX - bounds.left - 72) / Math.max(1, bounds.width - 88),
      ),
    );
    const time =
      Date.parse(points[0].date) +
      fraction * (Date.parse(points.at(-1)!.date) - Date.parse(points[0].date));
    let nearest = 0;
    for (let index = 1; index < points.length; index++)
      if (
        Math.abs(Date.parse(points[index].date) - time) <
        Math.abs(Date.parse(points[nearest].date) - time)
      )
        nearest = index;
    setSelected(nearest);
  }
  return (
    <div className="daily-price-chart">
      <canvas
        ref={canvas}
        role="img"
        tabIndex={0}
        aria-label={`Daily price chart, ${points.length} observations in ${currency}. Use arrow keys to inspect prices.`}
        onPointerMove={(event) => inspect(event.clientX)}
        onPointerLeave={() => setSelected(null)}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            setSelected(
              Math.max(
                0,
                Math.min(
                  points.length - 1,
                  (selected ?? points.length - 1) +
                    (event.key === "ArrowLeft" ? -1 : 1),
                ),
              ),
            );
          }
        }}
      />
      <p aria-live="polite">
        {active
          ? `${active.date} · ${priceText(active.close, currency)}`
          : "Daily price · point at the chart to inspect an observation"}
      </p>
    </div>
  );
}

/** Displays a declared section price source or a saved entity ticker through guarded desktop operations, with refresh, chart and explicit cached-data status. */
export function DailyPrice({
  entityId,
  vaultPath,
  index,
  onIndexChange,
  source,
}: Readonly<{
  entityId: string;
  vaultPath: string;
  index: KnowledgeIndexState;
  onIndexChange: (state: KnowledgeIndexState) => void;
  source?: IndexedPriceSource & Readonly<{ menuId: string }>;
}>) {
  const activeSymbol = source
    ? (source.symbol ?? index.priceSymbol)
    : index.priceSymbol;
  const configurable = !source || source.symbol === null;
  const [symbol, setSymbol] = useState(index.priceSymbol ?? "");
  const [result, setResult] = useState<DailyPriceResponse | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [range, setRange] = useState<number | "5Y" | "MAX">(365);
  const [extended, setExtended] = useState<MarketHistoryResponse | null>(null);
  const [historyError, setHistoryError] = useState("");
  const [historyLoading, setHistoryLoading] = useState(false);
  const [refresh, setRefresh] = useState(0);
  const historyRefresh = useRef(refresh);
  const generation = useRef(0);
  /** Loads longer history only after selection, using the same authorized source and separate range caches; old range responses cannot replace the current chart. */
  useEffect(
    function loadExtendedHistory() {
      let cancelled = false;
      const force = refresh > historyRefresh.current;
      historyRefresh.current = refresh;
      setExtended(null);
      setHistoryError("");
      setHistoryLoading(false);
      if (typeof range === "number" || !activeSymbol) return;
      setHistoryLoading(true);
      void requireWorldViewBridge()
        .request<MarketHistoryResponse>("price-history", {
          vaultPath,
          id: entityId,
          menuId: source?.menuId,
          priceId: source?.id,
          range,
          force,
        })
        .then(
          function loaded(value) {
            if (!cancelled) {
              setExtended(value);
              setHistoryLoading(false);
            }
          },
          function failed(cause: unknown) {
            if (!cancelled) {
              setHistoryError(
                cause instanceof Error
                  ? cause.message
                  : "Price history could not be loaded.",
              );
              setHistoryLoading(false);
            }
          },
        );
      return () => {
        cancelled = true;
      };
    },
    [
      entityId,
      vaultPath,
      activeSymbol,
      source?.menuId,
      source?.id,
      range,
      refresh,
    ],
  );
  /** Restores the input when a ticker association changes after a confirmed metadata save. */
  useEffect(
    function syncSymbol() {
      setSymbol(index.priceSymbol ?? "");
    },
    [index.priceSymbol],
  );
  /** Loads on activation and refreshes visible prices every five minutes. Late results after ticker changes or closing the card are ignored. */
  useEffect(
    function loadPrices() {
      let cancelled = false;
      setResult(null);
      setError("");
      /** Requests the entity's authorized ticker and exposes cached/offline status from the main process. */
      async function fetchPrices(force = false) {
        const ticket = ++generation.current;
        setLoading(true);
        try {
          const value =
            await requireWorldViewBridge().request<DailyPriceResponse>(
              source ? "price-index" : "price-get",
              {
                vaultPath,
                id: entityId,
                force,
                menuId: source?.menuId,
                priceId: source?.id,
              },
            );
          if (!cancelled && ticket === generation.current) {
            setResult(value);
            setError("");
          }
        } catch (cause) {
          if (!cancelled && ticket === generation.current)
            setError(
              cause instanceof Error
                ? cause.message
                : "Prices could not be loaded.",
            );
        } finally {
          if (!cancelled && ticket === generation.current) setLoading(false);
        }
      }
      if (!activeSymbol) {
        setLoading(false);
        return;
      }
      void fetchPrices(refresh > 0);
      /** Refreshes only while the price panel is visible to the user. */
      function refreshVisible() {
        if (document.visibilityState === "visible") void fetchPrices();
      }
      const timer = setInterval(refreshVisible, 5 * 60 * 1000);
      document.addEventListener("visibilitychange", refreshVisible);
      return () => {
        cancelled = true;
        generation.current++;
        clearInterval(timer);
        document.removeEventListener("visibilitychange", refreshVisible);
      };
    },
    [entityId, vaultPath, activeSymbol, source?.id, source?.menuId, refresh],
  );

  /** Saves or removes the entity ticker with its current metadata revision, surfacing conflicts and preserving a typed draft on failure. */
  async function saveTicker(): Promise<void> {
    setSaving(true);
    setError("");
    try {
      const state = await requireWorldViewBridge().request<KnowledgeIndexState>(
        "price-symbol",
        {
          vaultPath,
          id: entityId,
          symbol: symbol.trim(),
          revision: index.revision,
        },
      );
      onIndexChange(state);
    } catch (cause) {
      setError(
        cause instanceof Error ? cause.message : "Ticker could not be saved.",
      );
    } finally {
      setSaving(false);
    }
  }
  const quote = result?.snapshot;
  const cutoff = quote
    ? Date.parse(quote.history.at(-1)!.date) -
      (typeof range === "number" ? range : 365) * 86400000
    : 0;
  const historyMatchesQuote =
    !extended || !quote || extended.snapshot.currency === quote.currency;
  const points =
    typeof range === "number"
      ? (quote?.history.filter((point) => Date.parse(point.date) >= cutoff) ??
        [])
      : historyMatchesQuote
        ? (extended?.snapshot.observations
            .filter((point) => point.close !== null)
            .map((point) => ({
              date: point.date.slice(0, 10),
              close: point.close!,
            })) ?? [])
        : [];
  const change =
    quote?.previousClose !== null && quote?.previousClose !== undefined
      ? quote.price - quote.previousClose
      : null;
  return (
    <section
      className="daily-price"
      aria-label={
        source
          ? `Yahoo prices ${activeSymbol ?? "unconfigured"}`
          : "Daily prices"
      }
    >
      {!source && <h2>Prices</h2>}
      {error && <p role="alert">{error}</p>}
      {loading && <p role="status">Loading Yahoo Finance prices…</p>}
      {result?.warning && <p role="status">{result.warning}</p>}
      {quote && (
        <>
          <header className="daily-price-quote">
            <div>
              <strong>{quote.symbol}</strong>
              <p className="daily-price-value">
                {priceText(quote.price, quote.currency)}
              </p>
              {change !== null && (
                <p
                  className={
                    change >= 0 ? "financial-positive" : "financial-negative"
                  }
                >
                  {change >= 0 ? "+" : ""}
                  {priceText(change, quote.currency)}
                  {quote.previousClose
                    ? ` (${((change / quote.previousClose) * 100).toFixed(2)}%)`
                    : ""}{" "}
                  from previous close
                </p>
              )}
              <small>
                Latest available ·{" "}
                {new Intl.DateTimeFormat(undefined, {
                  dateStyle: "medium",
                  timeStyle: "short",
                  timeZone: quote.exchangeTimezone,
                }).format(new Date(quote.marketTime))}{" "}
                · {quote.exchangeTimezone}
              </small>
              <small>
                {quote.marketState.replaceAll("_", " ").toLowerCase()}
                {quote.delayMinutes !== null
                  ? ` · reported delay ${quote.delayMinutes} min`
                  : ""}
                {result.stale ? " · saved prices" : ""}
              </small>
            </div>
          </header>
          <dl className="knowledge-metric-grid">
            {Object.entries({
              marketCap: "Market cap",
              trailingPE: "P/E · TTM",
              eps: "EPS · TTM",
              week52Low: "52-week low",
              week52High: "52-week high",
              volume: "Volume",
            }).map(([key, label]) => {
              const value =
                quote.metrics?.[key as keyof NonNullable<typeof quote.metrics>];
              const unit = [
                "marketCap",
                "eps",
                "week52Low",
                "week52High",
              ].includes(key)
                ? quote.currency
                : key === "volume"
                  ? "shares / units"
                  : "ratio";
              return (
                <div key={key}>
                  <dt>{label}</dt>
                  <dd>
                    {typeof value === "number"
                      ? new Intl.NumberFormat("en-US", {
                          maximumFractionDigits: 2,
                          notation: "compact",
                        }).format(value)
                      : "Unavailable"}
                  </dd>
                  <small>{unit}</small>
                </div>
              );
            })}
          </dl>
          <div
            className="daily-price-ranges"
            role="group"
            aria-label="Price chart range"
          >
            {[
              [30, "1M"],
              [90, "3M"],
              [180, "6M"],
              [365, "1Y"],
              ["5Y", "5Y"],
              ["MAX", "MAX"],
            ].map(([days, label]) => (
              <button
                key={days}
                type="button"
                aria-pressed={range === days}
                onClick={() =>
                  setRange(
                    typeof days === "number" ? days : (days as "5Y" | "MAX"),
                  )
                }
              >
                {label}
              </button>
            ))}
          </div>
          {historyLoading && <p role="status">Loading price history…</p>}
          {historyError && <p role="alert">{historyError}</p>}
          {!historyMatchesQuote && (
            <p role="alert">
              History currency differs from the quote. This series cannot be
              compared.
            </p>
          )}
          {extended?.warning && <p role="status">{extended.warning}</p>}
          {points.length > 0 ? (
            <DailyPriceChart
              key={`${quote.symbol}:${range}`}
              points={points}
              currency={quote.currency}
            />
          ) : (
            !historyLoading && (
              <p>No price observations available for this range.</p>
            )
          )}
          {extended && (
            <small>
              {extended.snapshot.interval === "1mo" ? "Monthly" : "Weekly"}{" "}
              observations ·{" "}
              {extended.stale
                ? "Stale saved history"
                : extended.cached
                  ? "Cached history"
                  : "Retrieved history"}{" "}
              · {extended.snapshot.fetchedAt}
            </small>
          )}
          {extended &&
            (extended.snapshot.dividends.length > 0 ||
              extended.snapshot.splits.length > 0) && (
              <details className="knowledge-original-document">
                <summary>Dividends and stock splits</summary>
                <ul>
                  {extended.snapshot.dividends.map((item, index) => (
                    <li key={`div:${index}`}>
                      {item.date.slice(0, 10)} · Dividend{" "}
                      {item.amount ?? "Unavailable"}{" "}
                      {extended.snapshot.currency ?? "Currency unavailable"}
                    </li>
                  ))}
                  {extended.snapshot.splits.map((item, index) => (
                    <li key={`split:${index}`}>
                      {item.date.slice(0, 10)} · Split{" "}
                      {item.numerator ?? "Unavailable"}:
                      {item.denominator ?? "Unavailable"}
                    </li>
                  ))}
                </ul>
              </details>
            )}
          <small>
            Yahoo Finance · quote retrieved{" "}
            {new Date(quote.fetchedAt).toLocaleString()} · daily history updated{" "}
            {new Date(quote.historyFetchedAt).toLocaleString()}
          </small>
        </>
      )}
      <footer className="knowledge-utilities" aria-label="Price utilities">
        {configurable && (
          <form
            onSubmit={(event) => {
              event.preventDefault();
              void saveTicker();
            }}
          >
            <label>
              Yahoo Finance ticker
              <input
                value={symbol}
                maxLength={32}
                placeholder="AAPL or BBCA.JK"
                disabled={saving}
                onChange={(event) => setSymbol(event.target.value)}
              />
            </label>
            <button
              type="submit"
              disabled={saving || (!symbol.trim() && !index.priceSymbol)}
            >
              {saving
                ? "Saving?"
                : !symbol.trim() && index.priceSymbol
                  ? "Remove ticker"
                  : "Save ticker"}
            </button>
          </form>
        )}
        {activeSymbol && (
          <button
            type="button"
            disabled={loading || saving}
            onClick={() => setRefresh(refresh + 1)}
          >
            Refresh prices
          </button>
        )}
      </footer>
    </section>
  );
}
