"use client";

import { useEffect, useMemo, useState } from "react";
import type { EnginePackageCatalog } from "../../types/engine-packages";
import { EngineDevelopmentGuide } from "./engine-development-guide";

type Integration = {
  id: string;
  name: string;
  version: string;
  operations: string[];
  readOnly?: boolean;
};
type Package = EnginePackageCatalog["engines"][number];

/** Lists registered integrations and verified installed package metadata through read-only desktop APIs. Never installs, trusts, signs or executes code; late responses from previous Universes are discarded. */
export function EngineSettings({ vaultPath }: { vaultPath: string | null }) {
  const [integrations, setIntegrations] = useState<Integration[]>([]);
  const [packages, setPackages] = useState<Package[]>([]);
  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(0);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState("");

  useEffect(() => {
    let disposed = false;
    setLoading(true);
    setErrors([]);
    setPackages([]);
    setIntegrations([]);
    setSelected("");
    const ai = window.orbistryDesktop?.ai;
    if (!ai?.engineDefinitions || !ai.enginePackageCatalog) {
      setErrors([
        "Restart Orbistry to load the current Engine settings bridge.",
      ]);
      setLoading(false);
      return;
    }
    void Promise.allSettled([
      ai.engineDefinitions(),
      vaultPath
        ? ai.enginePackageCatalog({ vaultPath })
        : Promise.resolve(null),
    ]).then(([definitions, catalog]) => {
      if (disposed) return;
      const failures: string[] = [];
      if (definitions.status === "fulfilled")
        setIntegrations(
          definitions.value.map((item) => ({
            ...item,
            name: item.name ?? item.id,
          })),
        );
      else failures.push("Registered integrations could not be loaded.");
      if (catalog.status === "fulfilled")
        setPackages(catalog.value?.engines ?? []);
      else
        failures.push(
          catalog.reason instanceof Error
            ? catalog.reason.message
            : "Installed Engine packages could not be read.",
        );
      setErrors(failures);
      setLoading(false);
    });
    return () => {
      disposed = true;
    };
  }, [vaultPath, refresh]);

  const filter = query.trim().toLowerCase();
  const builtins = useMemo(
    () =>
      integrations
        .filter((item) =>
          `${item.name} ${item.id} ${item.operations.join(" ")}`
            .toLowerCase()
            .includes(filter),
        )
        .sort((a, b) => a.name.localeCompare(b.name)),
    [integrations, filter],
  );
  const installed = useMemo(
    () =>
      packages
        .filter((item) =>
          `${item.name} ${item.engineId} ${item.description} ${item.operations.map((op) => op.id).join(" ")}`
            .toLowerCase()
            .includes(filter),
        )
        .sort((a, b) => a.name.localeCompare(b.name)),
    [packages, filter],
  );
  const detail = packages.find(
    (item) => selected === "package:" + item.engineId,
  );
  const integration = integrations.find(
    (item) => selected === "builtin:" + item.id,
  );

  return (
    <section className="engine-settings" aria-label="Engine list">
      <div className="ai-section-heading">
        <div>
          <h2>Engines</h2>
          <p>
            Registered integrations and packages installed in this Universe.
          </p>
        </div>
        <button
          disabled={loading}
          onClick={() => setRefresh((value) => value + 1)}
        >
          Refresh list
        </button>
      </div>
      <p className="engine-universe">
        {vaultPath ?? "Select a Universe to see installed packages."}
      </p>
      <p>
        Registered → configured → authorized → executed → result verified are
        separate states. This list does not test connectivity or inspect
        execution history.
      </p>
      <label className="engine-search">
        Search engines
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Name, ID or operation"
        />
      </label>
      {loading && <p role="status">Reading Engine registry…</p>}
      {errors.map((error) => (
        <p key={error} className="ai-inline-error" role="alert">
          {error}
        </p>
      ))}
      <div className="engine-settings-columns">
        <div>
          <h3>
            Registered integrations{" "}
            <span className="ai-chip">{builtins.length}</span>
          </h3>
          <p>
            Definitions describe supported operations. Configuration and
            authorization determine whether they can run.
          </p>
          <div className="engine-settings-list">
            {builtins.map((item) => (
              <button
                key={item.id}
                className="engine-list-row"
                aria-pressed={selected === "builtin:" + item.id}
                onClick={() => setSelected("builtin:" + item.id)}
                data-engine-id={item.id}
                title="Inspect Contract"
              >
                <span>
                  <strong>{item.name}</strong>
                  <small>
                    {item.id} · v{item.version}
                  </small>
                </span>
                <span className="engine-state">Registered</span>
              </button>
            ))}
            {!loading && builtins.length === 0 && (
              <p>No matching registered integrations.</p>
            )}
          </div>
          <h3>
            Installed packages{" "}
            <span className="ai-chip">{installed.length}</span>
          </h3>
          <div className="engine-settings-list">
            {installed.map((item) => (
              <button
                key={item.engineId}
                className="engine-list-row"
                aria-pressed={selected === "package:" + item.engineId}
                onClick={() => setSelected("package:" + item.engineId)}
                data-engine-id={item.engineId}
                title="Inspect Contract"
              >
                <span>
                  <strong>{item.name}</strong>
                  <small>
                    {item.engineId} · v{item.version}
                  </small>
                  <small>
                    {item.signature?.status === "valid"
                      ? "Signature valid"
                      : "Unsigned"}
                  </small>
                </span>
                <span
                  className={`engine-state${item.trusted ? " is-trusted" : ""}`}
                >
                  {item.disabled
                    ? "Disabled"
                    : item.trusted
                      ? "Locally trusted"
                      : "Review required"}
                </span>
              </button>
            ))}
            {!loading && !errors.length && installed.length === 0 && (
              <p>
                {filter
                  ? "No matching installed packages."
                  : "No Engine packages installed in this Universe."}
              </p>
            )}
          </div>
        </div>
        <aside className="engine-detail" aria-label="Engine details">
          {detail ? (
            <>
              <h3>{detail.name}</h3>
              <h4>Inspect Contract</h4>
              <p>{detail.description}</p>
              <dl>
                <dt>Version</dt>
                <dd>{detail.version}</dd>
                <dt>Local trust</dt>
                <dd>
                  {detail.trusted
                    ? "Trusted for these exact package bytes"
                    : "Review and trust required"}
                </dd>
                <dt>Signature</dt>
                <dd>
                  {detail.signature?.status === "valid"
                    ? "Valid Ed25519 signature"
                    : "Unsigned package"}
                </dd>
              </dl>
              {detail.signature?.keyId && (
                <>
                  <label>
                    Publisher key fingerprint
                    <input
                      readOnly
                      value={detail.signature.keyId}
                      aria-label="Publisher key fingerprint"
                    />
                  </label>
                  <p>
                    Compare this fingerprint with a key obtained independently.
                    A valid self-signature does not establish publisher identity
                    or local trust.
                  </p>
                </>
              )}
              <label>
                Package SHA-256
                <input
                  readOnly
                  value={detail.digest}
                  aria-label="Package SHA-256"
                />
              </label>
              <h4>Entity links</h4>
              {detail.links?.length ? (
                detail.links.map((link) => (
                  <p key={link.entityId}>
                    <code>{link.entityId}</code> ·{" "}
                    {link.policy === "manual"
                      ? "Per-request approval"
                      : "Standing permission"}{" "}
                    · {link.operations.join(", ")}
                    {link.allowNetwork ? " · Network consent" : ""}
                  </p>
                ))
              ) : (
                <p>No Entity links.</p>
              )}
              <h4>Operations</h4>
              {detail.operations.map((op) => (
                <details key={op.id}>
                  <summary>
                    {op.id} · declared read-only ·{" "}
                    {op.network === "none"
                      ? "No network declared"
                      : "Outbound network"}
                  </summary>
                  <p>{op.description}</p>
                  <p>Timeout: {op.timeout_ms} ms</p>
                  <p>
                    Access policy: exact package trust, a link permitting this
                    operation, live host authorization
                    {op.network === "outbound" ? ", and network consent" : ""}.
                    Manual links also require per-request approval. Availability
                    in this catalog:{" "}
                    {op.available ? "declared available" : "not available"};
                    execution rechecks authorization.
                  </p>
                  <p>
                    Source definition:{" "}
                    <code>{`.engine/packages/${detail.engineId}/${detail.version}/engine_manifest.json`}</code>{" "}
                    in this Universe. Entry code is declared by that manifest.
                  </p>
                  <p>
                    Example invocation: save input matching the input schema to
                    a JSON file, then run the terminal command below. This does
                    not execute from Settings.
                  </p>
                  <pre>{`npm.cmd run engine -- run --vault "<Universe-path>" --entity "<saved-entity-id>" --id ${detail.engineId} --operation ${op.id} --input "<input-json-file>" --approve`}</pre>
                  <p>
                    Output must match output_schema below. Actual output and its
                    host-generated receipt are returned by run; the addition
                    walkthrough below provides a concrete input/output example.
                  </p>
                  <pre>
                    {JSON.stringify(
                      {
                        input_schema: op.input_schema,
                        output_schema: op.output_schema,
                      },
                      null,
                      2,
                    )}
                  </pre>
                </details>
              ))}
            </>
          ) : integration ? (
            <>
              <h3>{integration.name}</h3>
              <h4>Inspect Contract</h4>
              <p>Registered integration · v{integration.version}</p>
              <dl>
                <dt>Execution type</dt>
                <dd>
                  {integration.readOnly === true
                    ? "Declared read-only integration"
                    : integration.readOnly === false
                      ? "Integration includes state-changing operations; inspect each operation"
                      : "Not declared in registration metadata"}
                </dd>
                <dt>Access policy</dt>
                <dd>
                  Existing Entity / Agent Construction configuration and
                  operation-specific backend authorization. Package CLI
                  trust/link commands do not configure built-in adapters.
                </dd>
                <dt>Input / output schemas</dt>
                <dd>
                  The current built-in definitions API exposes operation names,
                  not full per-operation schemas or source references. Missing
                  metadata does not imply empty or unrestricted schemas.
                </dd>
              </dl>
              <h4>Operations</h4>
              <ul>
                {integration.operations.map((op) => (
                  <li key={op}>
                    <code>{op}</code>
                  </li>
                ))}
              </ul>
              <p>
                Configure the relevant Entity or Agent Construction to use this
                integration. Registration does not confirm connectivity or
                successful execution.
              </p>
            </>
          ) : (
            <>
              <h3>Inspect an Engine</h3>
              <p>
                Select an integration or installed package to see its
                operations, local trust and Entity links.
              </p>
            </>
          )}
        </aside>
      </div>
      <EngineDevelopmentGuide />
    </section>
  );
}
