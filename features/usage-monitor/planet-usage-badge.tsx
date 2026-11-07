"use client";
import { useEffect, useRef, useState } from "react";
import type { OpenRouterUsageSnapshot } from "../../types/ai";
import { connectAi } from "../chat/desktop-client";
import { resetView, usageView } from "./usage-view";
import "./usage-monitor.css";

const money = (n: number | null) =>
  n === null
    ? "Unavailable"
    : new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
        maximumFractionDigits: 4,
      }).format(n);
const labels: Record<OpenRouterUsageSnapshot["status"], string> = {
  unconfigured: "Setup required",
  loading: "Checking",
  ready: "Ready",
  stale: "Stale",
  offline: "Offline",
  unauthorized: "Auth required",
  rate_limited: "Rate limited",
  unsupported: "Unsupported",
  error: "Error",
};
export function PlanetUsageBadge({
  onOpenSettings,
}: {
  onOpenSettings: () => void;
}) {
  const [snapshot, setSnapshot] = useState<OpenRouterUsageSnapshot | null>(
    null,
  );
  const [expanded, setExpanded] = useState(false),
    [busy, setBusy] = useState(true),
    [error, setError] = useState("");
  const [now, setNow] = useState(() => Date.now());
  const refreshedReset = useRef<string | null>(null);
  const refresh = useRef<(manual?: boolean) => void>(() => {});
  useEffect(() => {
    const tick = () => {
      if (document.visibilityState === "visible" && document.hasFocus())
        setNow(Date.now());
    };
    const timer = setInterval(tick, 1000);
    window.addEventListener("focus", tick);
    document.addEventListener("visibilitychange", tick);
    return () => {
      clearInterval(timer);
      window.removeEventListener("focus", tick);
      document.removeEventListener("visibilitychange", tick);
    };
  }, []);
  const reset = resetView(snapshot, now);
  useEffect(() => {
    if (
      reset.expired &&
      snapshot?.resetAt &&
      refreshedReset.current !== snapshot.resetAt
    ) {
      refreshedReset.current = snapshot.resetAt;
      refresh.current(true);
    }
  }, [reset.expired, snapshot?.resetAt]);
  useEffect(() => {
    try {
      setExpanded(
        localStorage.getItem("qterminal-usage-expanded-v1") === "true",
      );
    } catch {}
    let alive = true,
      running = false,
      generation = 0,
      debounce: ReturnType<typeof setTimeout> | undefined;
    const visible = () =>
      document.visibilityState === "visible" && document.hasFocus();
    const update = async (manual = false) => {
      if (!alive || running || (!manual && !visible())) return;
      running = true;
      const current = generation;
      setBusy(true);
      try {
        const client = await connectAi();
        if (!client.openRouterUsage)
          throw new Error("Restart Orbistry to enable usage monitoring.");
        const result = await client.openRouterUsage({ refresh: manual });
        if (alive && current === generation) {
          setSnapshot(result);
          setError("");
        }
      } catch {
        if (alive && current === generation) {
          setSnapshot(null);
          setError(
            "Usage unavailable. Restart Orbistry if it was recently updated.",
          );
        }
      } finally {
        running = false;
        if (alive) {
          setBusy(false);
          if (current !== generation && visible()) void update(true);
        }
      }
    };
    refresh.current = (manual) => void update(manual);
    const wake = () => {
      if (visible()) void update();
    };
    let unsubscribe: (() => void) | undefined;
    void connectAi()
      .then((client) => {
        if (!alive) return;
        unsubscribe = client.onUsageChanged?.(() => {
          generation++;
          setSnapshot(null);
          clearTimeout(debounce);
          debounce = setTimeout(() => {
            if (visible()) void update(true);
          }, 2500);
        });
        wake();
      })
      .catch(() => {
        if (alive) {
          setBusy(false);
          setError("Restart Orbistry to enable usage monitoring.");
        }
      });
    const interval = setInterval(wake, 60000);
    window.addEventListener("focus", wake);
    document.addEventListener("visibilitychange", wake);
    return () => {
      alive = false;
      refresh.current = () => {};
      clearInterval(interval);
      clearTimeout(debounce);
      unsubscribe?.();
      window.removeEventListener("focus", wake);
      document.removeEventListener("visibilitychange", wake);
    };
  }, []);
  const { staleByTime, ready, ratio, tone } = usageView(snapshot, now);
  const status = staleByTime
    ? "Stale"
    : snapshot
      ? labels[snapshot.status]
      : busy
        ? "Checking"
        : "Unavailable";
  return (
    <aside
      className={`planet-usage ${tone}`}
      aria-label="OpenRouter usage monitor"
      onPointerDown={(e) => e.stopPropagation()}
      onWheel={(e) => e.stopPropagation()}
      onDoubleClick={(e) => e.stopPropagation()}
    >
      <button
        className="usage-toggle"
        aria-expanded={expanded}
        aria-controls="openrouter-usage-detail"
        onClick={() =>
          setExpanded((value) => {
            const next = !value;
            try {
              localStorage.setItem("qterminal-usage-expanded-v1", String(next));
            } catch {}
            return next;
          })
        }
      >
        <span className="usage-dot" aria-hidden="true" />
        <span>AI BUDGET · OPENROUTER</span>
        <span aria-hidden="true">{expanded ? "−" : "+"}</span>
      </button>
      <div className="usage-summary" role="status">
        <span>
          {snapshot?.remainingUsd !== null &&
          snapshot?.remainingUsd !== undefined
            ? `${money(snapshot.remainingUsd)} left`
            : "Unavailable"}
        </span>
        <small>
          {busy
            ? "Checking"
            : ready && tone === "critical"
              ? "Critical"
              : ready && tone === "warning"
                ? "Warning"
                : status}
        </small>
      </div>
      {ratio !== null && (
        <div
          className="usage-progress"
          role="progressbar"
          aria-label="Key spending allowance used"
          aria-valuenow={Math.round(ratio * 10000) / 100}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuetext={`${(ratio * 100).toFixed(2)}% used${ready ? "" : " · stale"}`}
        >
          <span style={{ width: `${ratio * 100}%` }} />
        </div>
      )}
      <div
        className="usage-reset"
        aria-label="Credit reset timer"
        title={
          snapshot?.resetAt
            ? `Key allowance reset: ${new Date(snapshot.resetAt).toLocaleString()}. Model availability also depends on account credits and provider limits.`
            : "The provider has not supplied a scheduled key allowance reset."
        }
      >
        {reset.label}
        {staleByTime || snapshot?.status === "stale" ? " · last known" : ""}
      </div>
      {expanded && (
        <div id="openrouter-usage-detail" className="usage-detail">
          <p>{snapshot?.safeKeyAlias ?? "Connected key unavailable"}</p>
          {ratio !== null && (
            <p>
              {(ratio * 100).toFixed(2)}% used{ready ? "" : " · stale"}
            </p>
          )}
          <dl>
            <dt>Key cap (USD)</dt>
            <dd>{money(snapshot?.limitUsd ?? null)}</dd>
            <dt>Spent this period</dt>
            <dd>{money(snapshot?.usedUsdThisPeriod ?? null)}</dd>
            <dt>Remaining (USD)</dt>
            <dd>{money(snapshot?.remainingUsd ?? null)}</dd>
            <dt>Reset</dt>
            <dd>
              {snapshot?.resetCadence === "none"
                ? "No reset"
                : (snapshot?.resetCadence ?? "unknown")}
            </dd>
            <dt>Account credits</dt>
            <dd>Unavailable</dd>
            <dt>Input tokens</dt>
            <dd>{snapshot?.inputTokens?.toLocaleString() ?? "Unavailable"}</dd>
            <dt>Output tokens</dt>
            <dd>{snapshot?.outputTokens?.toLocaleString() ?? "Unavailable"}</dd>
          </dl>
          {snapshot?.tokenMeasurementScope && (
            <p>{snapshot.tokenMeasurementScope}</p>
          )}
          <p>
            {snapshot?.resetCadence === "weekly"
              ? "Weekly key limit is not account balance. Monday–Sunday UTC."
              : snapshot?.resetCadence && snapshot.resetCadence !== "unknown"
                ? "Weekly limit not configured. Key allowance is not account balance."
                : "Weekly limit unverified. Key allowance is not account balance."}
          </p>
          <p>Last sync: {snapshot?.fetchedAt ?? "Never"}</p>
          {(snapshot?.errorMessage || error) && (
            <p>{snapshot?.errorMessage || error}</p>
          )}
          <button disabled={busy} onClick={() => refresh.current(true)}>
            Refresh usage
          </button>
          <button onClick={onOpenSettings}>Provider settings</button>
          <p>
            Configure providers in Settings. Wallet credits require optional
            management access; no management key is connected.
          </p>
        </div>
      )}
    </aside>
  );
}
