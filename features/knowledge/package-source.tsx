"use client";
import { useEffect, useState } from "react";
import { requireWorldViewBridge } from "../worldview/chip-session";
type Result = { status: string; executionId?: string; data?: unknown };

/** Shows availability locally and invokes a linked source only on an explicit click. */
export function PackageSource({
  vaultPath,
  id,
  declarationId,
  label,
}: {
  vaultPath: string;
  id: string;
  declarationId: string;
  label: string;
}) {
  const [result, setResult] = useState<Result>({ status: "checking" });
  const [busy, setBusy] = useState(false);
  useEffect(() => {
    let mounted = true;
    requireWorldViewBridge()
      .request<Result>("package-source-status", {
        vaultPath,
        id,
        declarationId,
      })
      .then(
        (value) => {
          if (mounted) setResult(value);
        },
        (error) => {
          if (mounted) setResult({ status: String(error.message) });
        },
      );
    return () => {
      mounted = false;
    };
  }, [vaultPath, id, declarationId]);
  /** Rechecks package state on every click; the backend resolves all operation arguments. */
  async function request(run: boolean) {
    setBusy(true);
    try {
      setResult(
        await requireWorldViewBridge().request<Result>(
          run ? "package-source-run" : "package-source-status",
          { vaultPath, id, declarationId },
        ),
      );
    } catch (error) {
      setResult({
        status: error instanceof Error ? error.message : "Source unavailable",
      });
    } finally {
      setBusy(false);
    }
  }
  return (
    <section aria-label={label}>
      <h3>{label}</h3>
      <p role="status">{result.status.replaceAll("_", " ")}</p>
      <button disabled={busy} onClick={() => void request(false)}>
        Check availability
      </button>
      {(result.status === "available" || result.status === "completed") && (
        <button disabled={busy} onClick={() => void request(true)}>
          Run source
        </button>
      )}
      {result.executionId && (
        <>
          <p>Execution {result.executionId}</p>
          <pre>{JSON.stringify(result.data, null, 2)}</pre>
        </>
      )}
    </section>
  );
}
/** Lists validated manifest descriptors while editing. Inputs come from the operation contract. */
export function SourceCatalog({
  vaultPath,
  entityId,
}: {
  vaultPath: string;
  entityId: string;
}) {
  const [engines, setEngines] = useState<
    import("../../types/engine-packages").EnginePackageCatalog["engines"]
  >([]);
  const [error, setError] = useState("");
  useEffect(() => {
    let alive = true;
    window.orbistryDesktop?.ai
      .enginePackageCatalog({ vaultPath, entityId })
      .then(
        (catalog) => {
          if (alive) setEngines(catalog.engines);
        },
        () => {
          if (alive) setError("Package catalog unavailable.");
        },
      );
    return () => {
      alive = false;
    };
  }, [vaultPath, entityId]);
  return (
    <details>
      <summary>Installed Engine sources</summary>
      {error && <p>{error}</p>}
      {!error && !engines.some((engine) => engine.sources.length) && (
        <p>No installed source contributions.</p>
      )}
      {engines.flatMap((engine) =>
        engine.sources.map((source) => (
          <div key={engine.engineId + "/" + source.id}>
            <code>
              {"source: engineSource(" +
                JSON.stringify(engine.engineId) +
                "," +
                JSON.stringify(source.id) +
                "," +
                engine.version.split(".")[0] +
                ",{})"}
            </code>
            <p>
              {source.kind} ? {source.operation}
              {engine.disabled ? " ? Disabled" : ""}
            </p>
            <pre>
              {JSON.stringify(
                engine.operations.find((op) => op.id === source.operation)
                  ?.input_schema,
                null,
                2,
              )}
            </pre>
          </div>
        )),
      )}
    </details>
  );
}
