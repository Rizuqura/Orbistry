"use client";
import { useState } from "react";
import type { ChatEngineReport } from "../../types/ai";
export function EngineReportAttachment({
  report,
  agentId,
}: {
  report: ChatEngineReport;
  agentId: string;
}) {
  const [busy, setBusy] = useState(false),
    [error, setError] = useState("");
  return (
    <section
      className="chat-engine-attachment"
      aria-label={`Agent ${report.month} PDF attachment`}
    >
      <strong>Agent {report.month} research report · PDF</strong>
      <span>Research status: {report.researchStatus} · SHA-256 verified</span>
      <button
        disabled={busy}
        onClick={async () => {
          setBusy(true);
          setError("");
          try {
            const open = window.wonnyyDesktop?.ai.openEngineReport;
            if (!open)
              throw new Error("Restart Orbistry to open Engine attachments.");
            await open({
              agentId,
              instanceId: report.instanceId,
              runId: report.runId,
            });
          } catch (e) {
            setError(e instanceof Error ? e.message : "Cannot open PDF.");
          } finally {
            setBusy(false);
          }
        }}
      >
        {busy
          ? "Opening PDF…"
          : `Open Agent ${report.month} PDF (${report.researchStatus})`}
      </button>
      <details>
        <summary>Report provenance</summary>
        <p>{report.sourcePath}</p>
        <small>SHA-256: {report.sha256}</small>
        <small>Engine run: {report.runId}</small>
      </details>
      {error && <p role="alert">{error}</p>}
    </section>
  );
}
