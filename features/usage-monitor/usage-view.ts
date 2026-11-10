import type { ProviderUsageSnapshot } from "../../types/ai";

export function resetView(snapshot: ProviderUsageSnapshot | null, now: number) {
  const deadline = snapshot?.resetAt ? Date.parse(snapshot.resetAt) : NaN;
  if (!Number.isFinite(deadline))
    return {
      label:
        snapshot?.resetCadence === "none"
          ? "No scheduled credit reset"
          : "Reset time unavailable",
      expired: false,
    };
  const seconds = Math.max(0, Math.ceil((deadline - now) / 1000));
  const days = Math.floor(seconds / 86400);
  const clock = [
    Math.floor(seconds / 3600) % 24,
    Math.floor(seconds / 60) % 60,
    seconds % 60,
  ]
    .map((value) => String(value).padStart(2, "0"))
    .join(":");
  return {
    label:
      seconds === 0
        ? "Reset reached · checking usage"
        : `Key resets in ${days ? `${days}d ` : ""}${clock}`,
    expired: seconds === 0,
  };
}

export function usageView(snapshot: ProviderUsageSnapshot | null, now: number) {
  const staleByTime = snapshot?.fetchedAt
    ? now - Date.parse(snapshot.fetchedAt) > 90000
    : false;
  const ready = snapshot?.status === "ready" && !staleByTime;
  const ratio =
    snapshot &&
    snapshot.limitUsd !== null &&
    snapshot.limitUsd > 0 &&
    snapshot.remainingUsd !== null
      ? Math.max(
          0,
          Math.min(
            1,
            (snapshot.limitUsd - snapshot.remainingUsd) / snapshot.limitUsd,
          ),
        )
      : null;
  const tone =
    !ready || ratio === null
      ? "unknown"
      : ratio >= 0.95
        ? "critical"
        : ratio >= 0.8
          ? "warning"
          : "healthy";
  return { staleByTime, ready, ratio, tone };
}
