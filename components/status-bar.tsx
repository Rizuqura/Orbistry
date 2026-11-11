import type { VaultSnapshot } from "../types/electron";

export function StatusBar({
  view,
  snapshot,
  isScanning,
  error,
  agentContext,
  agentModel,
  agentName,
}: Readonly<{
  view: "workspace" | "worldview" | "agent";
  snapshot: VaultSnapshot | null;
  isScanning: boolean;
  error?: string | null;
  agentContext?: string;
  agentModel?: string;
  agentName?: string;
}>) {
  const ready = snapshot?.status === "ready" && !isScanning && !error;
  const stamp = snapshot?.lastScannedAt
    ? new Date(snapshot.lastScannedAt).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })
    : "—";
  return (
    <footer className="status-bar">
      <span>
        <i className={`status-dot${ready ? "" : " offline"}`} />{" "}
        {isScanning
          ? "SCANNING VAULT"
          : error
            ? "VAULT SCAN FAILED"
            : ready
              ? "VAULT READY"
              : "VAULT OFFLINE"}
      </span>
      {view === "agent" ? (
        <>
          <span>
            AGENT:{" "}
            {(agentName ?? "Orbistry").replace(" Agent", "").toUpperCase()}
          </span>
          <span className="agent-footer-context" title={agentContext}>
            CONTEXT: {agentContext ?? "No Context"}
          </span>
          <span className="agent-footer-model" title={agentModel}>
            MODEL: {agentModel ?? "Not selected"}
          </span>
        </>
      ) : (
        <>
          <span>{snapshot?.totalFiles ?? 0} FILES</span>
          <span>{snapshot?.totalDirectories ?? 0} DIRECTORIES</span>
          <span>{snapshot?.issues.length ?? 0} WARNINGS</span>
        </>
      )}
      <span className="status-spacer" />
      <span>INDEXED {stamp}</span>
      <span className="amber-text">{view.toUpperCase()}</span>
    </footer>
  );
}
