"use client";
import { useEffect, useRef, useState } from "react";
import type { EngineState, EngineReportResult } from "../../types/ai";

export function EngineInspector({
  agentId,
  instanceId,
  applied,
  blocked,
  onBusy,
}: {
  agentId: string;
  instanceId: string;
  applied: boolean;
  blocked: boolean;
  onBusy: (busy: boolean) => void;
}) {
  const [state, setState] = useState<EngineState | null>(null);
  const [month, setMonth] = useState("");
  const [result, setResult] = useState<EngineReportResult | null>(null);
  const [error, setError] = useState("");
  const [running, setRunning] = useState(false);
  const [loading, setLoading] = useState(true);
  const epoch = useRef(0);
  const lock = useRef(false);
  useEffect(() => {
    let alive = true;
    const sequence = ++epoch.current;
    const api = window.wonnyyDesktop?.ai;
    if (!api?.engineState) {
      setError("Restart the desktop app to load Engine support.");
      setLoading(false);
      return;
    }
    void api
      .engineState()
      .then((value) => {
        if (alive && sequence === epoch.current) setState(value);
      })
      .catch((e: Error) => {
        if (alive) setError(e.message);
      })
      .finally(() => {
        if (alive) setLoading(false);
      });
    return () => {
      alive = false;
      if (lock.current) void api.cancelEngine?.();
    };
  }, [agentId, instanceId]);
  const perform = async (action: () => Promise<void>) => {
    if (lock.current) return;
    lock.current = true;
    ++epoch.current;
    setLoading(false);
    setRunning(true);
    onBusy(true);
    setError("");
    try {
      await action();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Engine operation failed.");
    } finally {
      lock.current = false;
      setRunning(false);
      onBusy(false);
    }
  };
  const retrieve = (selectedMonth?: string) =>
    perform(async () => {
      setResult(null);
      const api = window.wonnyyDesktop?.ai;
      if (!api?.executeEngine)
        throw new Error("Engine backend unavailable. Restart Orbistry.");
      setResult(
        await api.executeEngine({
          agentId,
          instanceId,
          engineId: "chronoz",
          operation: "get_report",
          arguments: selectedMonth ? { month: selectedMonth } : {},
        }),
      );
    });
  const unavailable = blocked || loading || running;
  return (
    <section
      className="studio-engine-controls"
      aria-label="Agent report engine"
    >
      <label>
        Registered engine
        <select aria-label="Registered engine" value="chronoz" disabled>
          <option value="chronoz">Report engine 1.0.0</option>
        </select>
      </label>
      <p role="status">
        <strong>
          {running
            ? "Running"
            : loading
              ? "Checking bundle…"
              : (state?.status ?? "Not configured")}
        </strong>
      </p>
      <p className="studio-engine-path">
        {state?.bundlePath ??
          "Choose the folder containing runtime, src and package_manifest.json."}
      </p>
      <p>
        Choose a trusted extracted bundle. Orbistry verifies and runs its
        bundled Python; no global Python install is needed.
      </p>
      <button
        disabled={unavailable}
        onClick={() =>
          void perform(async () => {
            const value = await window.wonnyyDesktop?.ai.chooseEngineFolder?.();
            if (value) setState(value);
          })
        }
      >
        Choose engine folder
      </button>
      <button
        disabled={unavailable || !state?.bundlePath}
        onClick={() =>
          void perform(async () => {
            const value = await window.wonnyyDesktop?.ai.probeEngine?.();
            if (value) setState(value);
          })
        }
      >
        Probe engine
      </button>
      {state?.probe && (
        <p>
          {state.probe.diagnostic}
          <br />
          <small>Last probe: {new Date(state.probe.at).toLocaleString()}</small>
        </p>
      )}
      <p>
        Available tool: <code>chronoz.get_report</code> · Retrieve existing
        reports only.
      </p>
      <p>
        Ask for a report in chat using a model that supports native tools, or
        use these controls. Report interpretation is not enabled.
      </p>
      {!applied && (
        <p>
          Connect Engine to LLM, then Save &amp; apply for this agent. Saving a
          draft does not enable access.
        </p>
      )}
      <label>
        Report month (optional)
        <input
          aria-label="Engine report month"
          placeholder="YYYY-MM or leave empty for latest"
          value={month}
          maxLength={7}
          onChange={(e) => setMonth(e.target.value)}
          disabled={unavailable}
        />
      </label>
      <button
        disabled={unavailable || !applied || !state?.bundlePath}
        onClick={() => void retrieve()}
      >
        Open latest report
      </button>
      <button
        disabled={
          unavailable ||
          !applied ||
          !state?.bundlePath ||
          !/^(19|20|21)\d{2}-(0[1-9]|1[0-2])$/.test(month)
        }
        onClick={() => void retrieve(month)}
      >
        Get month report
      </button>
      <button
        disabled={unavailable || !applied || !state?.bundlePath}
        onClick={() => void retrieve("2026-10")}
      >
        Get October 2026 report
      </button>
      {running && (
        <button onClick={() => void window.wonnyyDesktop?.ai.cancelEngine?.()}>
          Cancel engine request
        </button>
      )}
      {error && <p role="alert">{error}</p>}
      {result && (
        <div className="studio-engine-report" role="status">
          <strong>Research status: {result.status}</strong>
          <p>{result.diagnostic}</p>
          {result.attachment && (
            <>
              <button
                disabled={running}
                onClick={() =>
                  void perform(async () => {
                    await window.wonnyyDesktop?.ai.openEngineReport?.({
                      agentId,
                      instanceId,
                      runId: result.attachment!.runId,
                    });
                  })
                }
              >
                Open agent {result.attachment.month} PDF (
                {result.attachment.researchStatus})
              </button>
              <p className="studio-engine-path">
                Source: {result.attachment.sourcePath}
              </p>
              <small className="studio-engine-path">
                SHA-256: {result.attachment.sha256}
              </small>
              <p>Opens the verified managed copy in your Windows PDF reader.</p>
            </>
          )}
        </div>
      )}
      <details>
        <summary>Permissions and chat support</summary>
        <p>
          Engine → LLM is an available tool binding after Save &amp; apply, not
          a sequential workflow. A saved draft grants no access.
        </p>
        <p>
          Acquisition, publication, reconstruction, credentials and scheduling
          are disabled. Only existing reports can be retrieved.
        </p>
        <p>
          Ollama, Gemini, NVIDIA and OpenRouter have native tool adapters. The
          selected model must support function calling. Create an Engine chat to
          retrieve a PDF without research context. To discuss its contents, add
          it to your vault and explicitly review and bind it as research
          context.
        </p>
      </details>
    </section>
  );
}
