"use client";

import { useEffect, useRef, useState } from "react";
import type { AiBridge } from "../../types/ai";
import type {
  BaselineTrace,
  ExperimentConfig,
  ExperimentConversation,
  FrontOfficeState,
  ModelProfile,
} from "../../types/front-office";
import { sortProfiles } from "../../electron/ai/llm-front-office/catalog-sort.cjs";

function bridge(): AiBridge {
  const ai = window.wonnyyDesktop?.ai;
  if (!ai?.frontOfficeState)
    throw new Error("Restart Orbistry to load the experimental backend.");
  return ai;
}
const display = (value: number | null | undefined, suffix = "") =>
  value == null ? "Unknown" : `${value.toLocaleString()}${suffix}`;
function parseJson(text: string): unknown {
  try {
    return JSON.parse(text);
  } catch {
    throw new Error(
      "Invalid JSON. Check the syntax; input was not displayed or saved.",
    );
  }
}
/** Only fixed backend error codes accompany public messages; never echo raw provider bodies. */
function diagnosticError(error: unknown): string {
  const message =
    error instanceof Error ? error.message : "The experiment failed.";
  const code = (error as { code?: unknown } | null)?.code;
  return typeof code === "string" &&
    /^(MODEL_|AUTH_|REMOTE_|PROVIDER_|RATE_LIMITED$|PAYMENT_REQUIRED$)[A-Z_]*$/.test(
      code,
    )
    ? `${message} (${code})`
    : message;
}
function download(text: string, name: string, type: string) {
  const url = URL.createObjectURL(new Blob([text], { type }));
  const link = document.createElement("a");
  link.href = url;
  link.download = name;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export function FrontOfficeSettings({
  hasVault,
  beforeOperation,
}: {
  hasVault: boolean;
  beforeOperation?: () => Promise<void>;
}) {
  const [state, setState] = useState<FrontOfficeState | null>(null);
  const [draft, setDraft] = useState<ExperimentConfig | null>(null);
  const [advanced, setAdvanced] = useState("");
  const [error, setError] = useState<string | null>(null);
  // Electron can strip custom Error properties across contextBridge. Retain the
  // structured public event failure so the rejected IPC promise cannot erase its code.
  const requestFailure = useRef<string | null>(null);
  const [notice, setNotice] = useState("");
  const [busy, setBusy] = useState(false);
  const [running, setRunning] = useState(false);
  const [query, setQuery] = useState("");
  const [provider, setProvider] = useState("all");
  const [capability, setCapability] = useState("all");
  const [sort, setSort] = useState("match");
  const [configured, setConfigured] = useState(false);
  const [tested, setTested] = useState(false);
  const [favorites, setFavorites] = useState(false);
  const [minContext, setMinContext] = useState(0);
  const [sampleBudget, setSampleBudget] = useState<number | null>(null);
  const [catalogTask, setCatalogTask] = useState<
    "general" | "finance" | "format" | "retrieval" | "conversation"
  >("general");
  const [inspected, setInspected] = useState<string | null>(null);
  const [override, setOverride] = useState("{}");
  const [evidence, setEvidence] = useState("");
  const [conversations, setConversations] = useState<ExperimentConversation[]>(
    [],
  );
  const [conversation, setConversation] =
    useState<ExperimentConversation | null>(null);
  const [question, setQuestion] = useState("");
  const [partial, setPartial] = useState("");
  const [trace, setTrace] = useState<BaselineTrace | null>(null);
  const [route, setRoute] = useState<unknown>(null);
  const [attempts, setAttempts] = useState<unknown[]>([]);
  const [transport, setTransport] = useState<"direct" | "litellm">("direct");
  const [task, setTask] = useState<
    "general" | "finance" | "format" | "retrieval" | "conversation"
  >("general");
  const key = useRef<HTMLInputElement>(null);
  const request = useRef<string | null>(null);
  const locked = busy || running;
  const reload = async () => {
    const next = await bridge().frontOfficeState(catalogTask);
    setState(next);
    setDraft(next.config);
    setAdvanced(JSON.stringify(next.config, null, 2));
    if (hasVault) setConversations(await bridge().frontOfficeList());
  };
  useEffect(() => {
    let disposed = false;
    const ai = window.wonnyyDesktop?.ai;
    if (!ai?.frontOfficeState) return;
    void ai
      .frontOfficeState()
      .then((next) => {
        if (!disposed) {
          setState(next);
          setDraft(next.config);
          setAdvanced(JSON.stringify(next.config, null, 2));
        }
      })
      .catch(() => {
        if (!disposed)
          setError(
            "Cannot load backend settings. Restart Orbistry and check local metadata.",
          );
      });
    if (hasVault)
      void ai
        .frontOfficeList()
        .then((values) => {
          if (!disposed) setConversations(values);
        })
        .catch(() => {});
    const unsubscribe = ai.onFrontOfficeEvent((event) => {
      if (event.requestId !== request.current) return;
      if (event.type === "delta")
        setPartial((text) => text + (event.delta ?? ""));
      if (event.type === "routing") setRoute(event.routing);
      if (event.type === "attempt")
        setAttempts((values) => [...values, event.attempt]);
      if (event.trace) setTrace(event.trace);
      if (event.error) {
        requestFailure.current = diagnosticError(
          Object.assign(new Error(event.error.message), {
            code: event.error.code,
          }),
        );
        setError(requestFailure.current);
      }
      if (event.message) setNotice(event.message);
      if (event.validation && !event.validation.valid)
        setNotice(
          "The provider returned output that failed JSON/schema validation. No repair call was made.",
        );
    });
    return () => {
      disposed = true;
      unsubscribe();
      if (request.current) void ai.cancel(request.current);
    };
  }, [hasVault]);

  const action = async (operation: () => Promise<unknown>) => {
    if (locked) return;
    setBusy(true);
    setError(null);
    setNotice("");
    try {
      await beforeOperation?.();
      await operation();
    } catch (e) {
      setError(diagnosticError(e));
    } finally {
      setBusy(false);
    }
  };
  const save = async (config: ExperimentConfig) => {
    await bridge().frontOfficeConfig(config);
    await reload();
    setNotice("Backend configuration saved.");
  };
  const choose = (model: ModelProfile) => {
    setInspected(model.deploymentId);
    setOverride(
      JSON.stringify(
        state?.overrides.find((o) => o.deploymentId === model.deploymentId)
          ?.patch ?? {},
        null,
        2,
      ),
    );
  };
  const models = sortProfiles(
    (state?.profiles ?? []).filter(
      (m) =>
        `${m.label} ${m.modelId}`.toLowerCase().includes(query.toLowerCase()) &&
        (provider === "all" || m.providerId === provider) &&
        (!configured || m.credentialConfigured) &&
        (!tested || m.evidence.status === "measured") &&
        (!favorites || m.favorite) &&
        (sampleBudget === null ||
          (!m.stale &&
            m.inputUsdPerMillion !== null &&
            m.outputUsdPerMillion !== null &&
            (1000 * m.inputUsdPerMillion + 256 * m.outputUsdPerMillion) /
              1000000 <=
              sampleBudget)) &&
        (minContext === 0 ||
          (m.contextTokens !== null && m.contextTokens >= minContext)) &&
        (capability === "all" ||
          (capability === "text" && m.inputModalities.includes("text")) ||
          (capability === "tools" && m.tools === true) ||
          (capability === "vision" && m.vision === true) ||
          (capability === "json" && m.structuredOutput === true)),
    ),
    sort,
  );
  const selected = state?.profiles.find((m) => m.deploymentId === inspected);
  const run = async (retry = false) => {
    if (locked || !conversation || !question.trim()) return;
    const id = crypto.randomUUID();
    requestFailure.current = null;
    request.current = id;
    setRunning(true);
    setError(null);
    setNotice("");
    setPartial("");
    setTrace(null);
    setRoute(null);
    setAttempts([]);
    try {
      await beforeOperation?.();
      const result = await bridge().frontOfficeChat({
        conversationId: conversation.id,
        requestId: id,
        userMessage: question,
        transport,
        task,
        ...(retry ? { retryOf: conversation.attempts.at(-1)?.requestId } : {}),
      });
      setConversation(result.conversation);
      setPartial("");
      setQuestion("");
      setTrace(result.run?.diagnostics.frontOffice ?? null);
    } catch (e) {
      setError(requestFailure.current ?? diagnosticError(e));
      try {
        setConversation(await bridge().frontOfficeRead(conversation.id));
      } catch {
        /* Preserve the last readable snapshot. */
      }
    } finally {
      request.current = null;
      setRunning(false);
      try {
        setConversations(await bridge().frontOfficeList());
      } catch {
        /* Main error remains visible. */
      }
    }
  };
  return (
    <details className="front-office-panel">
      <summary>LLM Backend / Front Office</summary>
      <p>
        Experimental text chat with no Context Box, personality, skills, RAG or
        long-term memory. Only the selected provider receives the question and
        complete experiment history.
      </p>
      {error && (
        <p role="alert" className="front-office-error">
          {error}
        </p>
      )}
      {notice && <p role="status">{notice}</p>}
      {!draft ? (
        <p>
          Backend settings unavailable. Restart the desktop app if it was
          updated.
        </p>
      ) : (
        <>
          <fieldset disabled={locked}>
            <legend>Basic experiment settings</legend>
            <label>
              <input
                type="checkbox"
                checked={draft.generation.streaming}
                onChange={(e) =>
                  setDraft({
                    ...draft,
                    generation: {
                      ...draft.generation,
                      streaming: e.target.checked,
                    },
                  })
                }
              />{" "}
              Stream generated text (disable for basic non-streaming
              diagnostics)
            </label>
            <label>
              <input
                type="checkbox"
                checked={draft.enabled}
                onChange={(e) =>
                  setDraft({ ...draft, enabled: e.target.checked })
                }
              />{" "}
              Enable experimental chat
            </label>
            <label>
              Selection mode
              <select
                aria-label="Backend selection mode"
                value={draft.routing.mode}
                onChange={(e) =>
                  setDraft({
                    ...draft,
                    routing: {
                      ...draft.routing,
                      mode: e.target.value as "manual" | "auto",
                    },
                  })
                }
              >
                <option value="manual">Manual (session pin)</option>
                <option value="auto">Auto Router (opt in)</option>
              </select>
            </label>
            <label>
              Priority
              <select
                value={draft.routing.priority}
                onChange={(e) =>
                  setDraft({
                    ...draft,
                    routing: {
                      ...draft.routing,
                      priority: e.target
                        .value as ExperimentConfig["routing"]["priority"],
                    },
                  })
                }
              >
                {["balanced", "quality", "cost", "speed"].map((v) => (
                  <option key={v}>{v}</option>
                ))}
              </select>
            </label>
            <label>
              Model for new manual experiments
              <select
                aria-label="Experimental model"
                value={draft.routing.selectedDeploymentId ?? ""}
                onChange={(e) =>
                  setDraft({
                    ...draft,
                    routing: {
                      ...draft.routing,
                      selectedDeploymentId: e.target.value || null,
                    },
                  })
                }
              >
                <option value="">Select a deployment</option>
                {state?.profiles.map((m) => (
                  <option key={m.deploymentId} value={m.deploymentId}>
                    {m.providerId} / {m.label}
                  </option>
                ))}
              </select>
            </label>
            <label title="Token cap requested from the provider; reasoning may share this budget.">
              Output cap (tokens)
              <input
                type="number"
                min={1}
                max={131072}
                value={draft.generation.maxOutputTokens}
                onChange={(e) =>
                  setDraft({
                    ...draft,
                    generation: {
                      ...draft.generation,
                      maxOutputTokens: Number(e.target.value),
                    },
                  })
                }
              />
            </label>
            <label title="Local working bound, checked against advertised capacity. Does not assert tested reliability.">
              Context bound (tokens)
              <input
                type="number"
                min={512}
                max={2097152}
                value={draft.generation.contextWindow}
                onChange={(e) =>
                  setDraft({
                    ...draft,
                    generation: {
                      ...draft.generation,
                      contextWindow: Number(e.target.value),
                    },
                  })
                }
              />
            </label>
            <p>
              History overflow: reject and warn. No summaries or dropped
              exchanges. Save before creating/running experiments.
            </p>
            <label>
              <input
                type="checkbox"
                checked={draft.routing.allowCrossProviderFallback}
                onChange={(e) =>
                  setDraft({
                    ...draft,
                    routing: {
                      ...draft.routing,
                      allowCrossProviderFallback: e.target.checked,
                    },
                  })
                }
              />{" "}
              I allow experiment questions and history to reach other listed
              providers on failure (also requires Auto Router and fallback
              enabled).
            </label>
            <button onClick={() => void action(() => save(draft))}>
              Save backend settings
            </button>
            <button
              onClick={() =>
                void action(async () => {
                  await bridge().frontOfficeRefresh("openrouter");
                  await reload();
                })
              }
            >
              Refresh OpenRouter capabilities
            </button>
            <button
              onClick={() =>
                void action(async () => {
                  await bridge().frontOfficeRefresh("nvidia");
                  await reload();
                })
              }
            >
              Refresh NVIDIA capabilities
            </button>
          </fieldset>

          <details>
            <summary>Advanced tuning and gateway</summary>
            <p>
              Raw prompt/response debugging is off by default. Enabling
              rawPromptLogging or rawResponseLogging captures private content
              inside the immutable local run record, outside metrics exports and
              metrics retention. Enable only intentionally for local debugging;
              no authentication headers or keys are captured.
            </p>
            <p>
              Inspect all non-secret controls below: permitted providers,
              routing weights, unknown-context policy, headroom fraction,
              temperature, JSON schema, cumulative token/USD caps, total
              deadline (ms), attempts, backoff/cooldown (ms), circuit threshold
              and metrics retention (days). Gateway access is limited to
              authenticated 127.0.0.1. Cross-provider fallback is allowed only
              for the providers listed here; enable both fallback and model
              switching to permit alternate models in auto mode.
            </p>
            <textarea
              aria-label="Advanced backend configuration"
              value={advanced}
              onChange={(e) => setAdvanced(e.target.value)}
              rows={18}
              disabled={locked}
              spellCheck={false}
            />
            <button
              disabled={locked}
              onClick={() =>
                void action(() => save(parseJson(advanced) as ExperimentConfig))
              }
            >
              Apply advanced configuration
            </button>
            <button
              disabled={locked}
              onClick={() =>
                void action(async () => {
                  const defaults = (
                    await import("../../electron/ai/llm-front-office/config/defaults.json")
                  ).default as ExperimentConfig;
                  await save(defaults);
                })
              }
            >
              Reset backend defaults
            </button>
            <button
              disabled={locked}
              onClick={() =>
                state &&
                download(
                  JSON.stringify(state.config, null, 2),
                  "front-office-config.json",
                  "application/json",
                )
              }
            >
              Export non-secret configuration
            </button>
            <label>
              Import non-secret configuration
              <input
                type="file"
                accept="application/json,.json"
                disabled={locked}
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file)
                    void action(async () => {
                      if (file.size > 1000000)
                        throw new Error("Configuration file exceeds 1 MB.");
                      await save(
                        parseJson(await file.text()) as ExperimentConfig,
                      );
                    });
                  e.target.value = "";
                }}
              />
            </label>
            <label>
              Local gateway key
              <input
                aria-label="Local LiteLLM gateway key"
                type="password"
                ref={key}
                autoComplete="off"
                disabled={locked}
              />
            </label>
            <p>
              Gateway credential:{" "}
              {state?.gatewayCredentialConfigured
                ? "Configured"
                : "Not configured"}
              . Keys are encrypted with OS storage and excluded from
              configuration exports.
            </p>
            <button
              disabled={locked}
              onClick={() =>
                void action(async () => {
                  try {
                    await bridge().saveCredential({
                      providerId: "litellm",
                      apiKey: key.current?.value ?? "",
                    });
                    await reload();
                  } finally {
                    if (key.current) key.current.value = "";
                  }
                })
              }
            >
              Save gateway key
            </button>
            <button
              disabled={locked}
              onClick={() =>
                void action(async () => {
                  await bridge().removeCredential({ providerId: "litellm" });
                  await reload();
                })
              }
            >
              Remove gateway key
            </button>
            <button
              disabled={locked}
              onClick={() =>
                void action(async () => {
                  const health = await bridge().frontOfficeHealth();
                  setNotice(
                    `Gateway ${health.status}; expected LiteLLM ${health.pinnedVersion}. Server version has not been verified.`,
                  );
                })
              }
            >
              Check local gateway
            </button>
            <p>
              No proxy is started by Orbistry. Run the pinned optional service
              separately; see
              docs/architecture/pre-llm/03-provider-setup-openrouter-nvidia.md.
            </p>
          </details>

          <section aria-label="Capability model catalog">
            <h2>Capability catalog</h2>
            <div className="front-office-filters">
              <label>
                Search
                <input
                  aria-label="Search capability catalog"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </label>
              <label>
                Provider
                <select
                  aria-label="Catalog provider"
                  value={provider}
                  onChange={(e) => setProvider(e.target.value)}
                >
                  <option value="all">All providers</option>
                  <option value="openrouter">OpenRouter</option>
                  <option value="nvidia">NVIDIA</option>
                </select>
              </label>
              <label>
                Capability
                <select
                  aria-label="Catalog capability"
                  value={capability}
                  onChange={(e) => setCapability(e.target.value)}
                >
                  {["all", "text", "tools", "vision", "json"].map((v) => (
                    <option key={v}>{v}</option>
                  ))}
                </select>
              </label>
              <label>
                Sort
                <select
                  aria-label="Catalog sort"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                >
                  {[
                    "match",
                    "quality",
                    "context",
                    "output",
                    "price",
                    "latency",
                    "provider",
                    "reliability",
                    "alphabetical",
                  ].map((v) => (
                    <option key={v}>{v}</option>
                  ))}
                </select>
              </label>
              <label>
                Minimum advertised context
                <input
                  type="number"
                  min={0}
                  value={minContext}
                  onChange={(e) => setMinContext(Number(e.target.value))}
                />
              </label>
              <label>
                Sample request budget (USD)
                <input
                  aria-label="Catalog sample budget USD"
                  type="number"
                  min={0}
                  step="0.000001"
                  value={sampleBudget ?? ""}
                  onChange={(e) =>
                    setSampleBudget(
                      e.target.value === "" ? null : Number(e.target.value),
                    )
                  }
                />
              </label>
              <label>
                Evidence task
                <select
                  aria-label="Catalog evidence task"
                  value={catalogTask}
                  disabled={locked}
                  onChange={(e) => {
                    const value = e.target.value as typeof catalogTask;
                    setCatalogTask(value);
                    void action(async () => {
                      setState(await bridge().frontOfficeState(value));
                    });
                  }}
                >
                  {[
                    "general",
                    "finance",
                    "format",
                    "retrieval",
                    "conversation",
                  ].map((v) => (
                    <option key={v}>{v}</option>
                  ))}
                </select>
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={configured}
                  onChange={(e) => setConfigured(e.target.checked)}
                />{" "}
                Credentials configured
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={tested}
                  onChange={(e) => setTested(e.target.checked)}
                />{" "}
                Measured quality only
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={favorites}
                  onChange={(e) => setFavorites(e.target.checked)}
                />{" "}
                Favorites only
              </label>
            </div>
            <p>
              {models.length} deployments. Match uses fresh measured quality for{" "}
              {catalogTask} when available, otherwise capability coverage then
              advertised context/output. Unknown capability does not mean
              supported. Provider catalog listing does not verify inference
              access or quota.
            </p>
            <div className="front-office-table-scroll">
              <table>
                <caption>
                  Provider capabilities and evidence (USD per million tokens)
                </caption>
                <thead>
                  <tr>
                    <th>Model / provider</th>
                    <th>Advertised / tested context</th>
                    <th>Output</th>
                    <th>Tools / vision / JSON</th>
                    <th>Input / output price</th>
                    <th>{catalogTask} quality / TTFT</th>
                    <th>Inspect</th>
                  </tr>
                </thead>
                <tbody>
                  {models.map((m) => (
                    <tr key={m.deploymentId}>
                      <td>
                        {m.label}
                        <small>
                          {m.providerId} · {m.modelId}
                          <br />
                          {m.credentialConfigured
                            ? "Key configured"
                            : "Key missing"}{" "}
                          · {m.stale ? "Stale metadata" : "Catalog listed"}
                        </small>
                      </td>
                      <td>
                        {display(m.contextTokens)} /{" "}
                        {display(m.evidence.testedContextTokens)}
                      </td>
                      <td>{display(m.maxOutputTokens)}</td>
                      <td>
                        {String(m.tools)} / {String(m.vision)} /{" "}
                        {String(m.structuredOutput)}
                      </td>
                      <td>
                        {display(m.inputUsdPerMillion)} /{" "}
                        {display(m.outputUsdPerMillion)}
                      </td>
                      <td>
                        {m.evidence.qualityScore === null
                          ? "Not tested"
                          : m.evidence.qualityScore}{" "}
                        / {display(m.evidence.medianTtftMs, " ms")}
                      </td>
                      <td>
                        <button
                          aria-label={`Inspect ${m.modelId}`}
                          onClick={() => choose(m)}
                        >
                          Details
                        </button>
                        <button
                          aria-label={`Favorite ${m.modelId}`}
                          aria-pressed={m.favorite}
                          disabled={locked}
                          onClick={() =>
                            void action(async () => {
                              await bridge().frontOfficeFavorite({
                                deploymentId: m.deploymentId,
                                favorite: !m.favorite,
                              });
                              await reload();
                            })
                          }
                        >
                          {m.favorite ? "★" : "☆"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {!models.length && (
              <p>
                Refresh a configured provider to load metadata, or adjust the
                filters.
              </p>
            )}
          </section>
          {selected && (
            <section aria-label="Model detail inspector">
              <h3>{selected.label}</h3>
              <p>{selected.deploymentId}</p>
              <p>
                Endpoint:{" "}
                {selected.providerId === "nvidia"
                  ? "https://integrate.api.nvidia.com/v1"
                  : "https://openrouter.ai/api/v1"}
                . Installed: no (remote). Availability: catalog listed; account
                quota unknown.
              </p>
              <p>
                Input: {selected.inputModalities.join(", ")}; output:{" "}
                {selected.outputModalities.join(", ")}. Parameters:{" "}
                {selected.supportedParameters?.join(", ") ?? "Unknown"}.
              </p>
              <p>
                Metadata:{" "}
                <a href={selected.source.url} target="_blank" rel="noreferrer">
                  {selected.source.kind}
                </a>
                , checked {selected.source.checkedAt}. Original catalog:{" "}
                {selected.catalogSource.checkedAt}. Consecutive transient
                failures: {selected.health.failures}. Cooldown until:{" "}
                {selected.health.openUntil
                  ? new Date(selected.health.openUntil).toISOString()
                  : "None"}
                .
              </p>
              <p>
                Quality: {selected.evidence.qualityScore ?? "Not tested"};
                success rate: {selected.evidence.successRate ?? "Not tested"};
                E2E: {display(selected.evidence.medianE2eMs, " ms")}; last test:{" "}
                {selected.evidence.lastTestAt ?? "Not tested"}. Methodology:{" "}
                {selected.evidence.methodology ?? "No measurements"}.
              </p>
              <p>
                Sample estimate (1,000 input + 256 output tokens):{" "}
                {selected.inputUsdPerMillion !== null &&
                selected.outputUsdPerMillion !== null
                  ? `$${((1000 * selected.inputUsdPerMillion + 256 * selected.outputUsdPerMillion) / 1000000).toFixed(6)} estimated`
                  : "Unknown pricing"}
                .
              </p>
              <label>
                Local metadata override JSON
                <textarea
                  aria-label="Model override JSON"
                  rows={6}
                  value={override}
                  onChange={(e) => setOverride(e.target.value)}
                  disabled={locked}
                />
              </label>
              <button
                disabled={locked}
                onClick={() =>
                  void action(async () => {
                    await bridge().frontOfficeOverride({
                      deploymentId: selected.deploymentId,
                      patch: parseJson(override) as Record<string, unknown>,
                    });
                    await reload();
                  })
                }
              >
                Apply model override
              </button>
              <button
                disabled={locked}
                onClick={() =>
                  void action(async () => {
                    await bridge().frontOfficeOverride({
                      deploymentId: selected.deploymentId,
                      patch: null,
                    });
                    setOverride("{}");
                    await reload();
                  })
                }
              >
                Reset model override
              </button>
            </section>
          )}
          <details>
            <summary>Import benchmark evidence</summary>
            <p>
              Only measurements with deployment/model version, task, benchmark,
              dataset, methodology, repetitions, context position/length,
              timestamp and uncertainty are accepted. Importing metadata does
              not run inference.
            </p>
            <textarea
              aria-label="Benchmark evidence JSON"
              value={evidence}
              onChange={(e) => setEvidence(e.target.value)}
              rows={6}
            />
            <button
              disabled={locked}
              onClick={() =>
                void action(async () => {
                  await bridge().frontOfficeEvidence(parseJson(evidence));
                  await reload();
                })
              }
            >
              Import measured evidence
            </button>
          </details>
          <section aria-label="Experimental chat">
            <h2>Experimental chat</h2>
            <p>
              {conversation?.selection
                ? `Pinned for this conversation: ${conversation.selection}`
                : "Auto routing or no active manual conversation."}{" "}
              Changing the model for a new experiment preserves existing session
              pins.
            </p>
            <label>
              Saved experiment
              <select
                aria-label="Saved experiment"
                disabled={locked}
                value={conversation?.id ?? ""}
                onChange={(e) =>
                  void action(async () => {
                    setConversation(
                      e.target.value
                        ? await bridge().frontOfficeRead(e.target.value)
                        : null,
                    );
                    setPartial("");
                    setTrace(null);
                  })
                }
              >
                <option value="">Choose an experiment</option>
                {conversations.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.title} · {c.updatedAt}
                  </option>
                ))}
              </select>
            </label>
            <button
              disabled={locked || !hasVault || !state?.config.enabled}
              onClick={() =>
                void action(async () => {
                  setConversation(await bridge().frontOfficeCreate());
                  setPartial("");
                  setTrace(null);
                  setConversations(await bridge().frontOfficeList());
                })
              }
            >
              New experiment / reset history
            </button>
            <button
              disabled={locked || !conversation}
              onClick={() =>
                void action(async () => {
                  if (conversation)
                    await bridge().frontOfficeDelete(conversation.id);
                  setConversation(null);
                  await reload();
                })
              }
            >
              Delete experiment
            </button>
            {!hasVault && (
              <p>Select a vault to persist experimental conversations.</p>
            )}
            <label>
              Transport
              <select
                aria-label="Experiment transport"
                value={transport}
                disabled={locked}
                onChange={(e) =>
                  setTransport(e.target.value as "direct" | "litellm")
                }
              >
                <option value="direct">A: native direct</option>
                <option value="litellm">B: local LiteLLM gateway</option>
              </select>
            </label>
            <label>
              Task
              <select
                aria-label="Experiment task"
                disabled={locked}
                value={task}
                onChange={(e) => setTask(e.target.value as typeof task)}
              >
                {[
                  "general",
                  "finance",
                  "format",
                  "retrieval",
                  "conversation",
                ].map((v) => (
                  <option key={v}>{v}</option>
                ))}
              </select>
            </label>
            <p>
              C uses Auto Router with the chosen transport. This chat runs one
              experiment at a time; the benchmark harness produces controlled
              A/B/C comparisons.
            </p>
            <div
              className="front-office-history"
              aria-label="Experiment messages"
              aria-live="polite"
            >
              {conversation?.messages.map((m) => (
                <article key={m.id}>
                  <strong>{m.role}</strong>
                  <pre>{m.content}</pre>
                </article>
              ))}
              {partial && (
                <article>
                  <strong>assistant (partial)</strong>
                  <pre>{partial}</pre>
                </article>
              )}
            </div>
            <label>
              Experiment question
              <textarea
                aria-label="Experiment question"
                rows={3}
                disabled={locked}
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
            </label>
            <button
              disabled={
                locked ||
                !conversation ||
                !question.trim() ||
                !state?.config.enabled
              }
              onClick={() => void run()}
            >
              Send experiment
            </button>
            <button
              disabled={
                locked ||
                !conversation ||
                !question.trim() ||
                !["failed", "cancelled", "interrupted"].includes(
                  conversation.attempts.at(-1)?.status ?? "",
                )
              }
              onClick={() => void run(true)}
            >
              Retry failed turn
            </button>
            <button
              disabled={!running}
              onClick={() => {
                if (request.current) void bridge().cancel(request.current);
              }}
            >
              Stop experiment
            </button>
            {route !== null && (
              <details open>
                <summary>Routing and budget decision</summary>
                <pre>{JSON.stringify(route, null, 2)}</pre>
              </details>
            )}
            {attempts.length > 0 && (
              <details open>
                <summary>Provider attempts and fallback</summary>
                <pre>{JSON.stringify(attempts, null, 2)}</pre>
              </details>
            )}
            {trace && (
              <details open>
                <summary>Experiment usage and timing</summary>
                <pre>{JSON.stringify(trace, null, 2)}</pre>
              </details>
            )}
            <button
              disabled={locked || !hasVault}
              onClick={() =>
                void action(async () =>
                  download(
                    await bridge().frontOfficeExport("json"),
                    "front-office-metrics.json",
                    "application/json",
                  ),
                )
              }
            >
              Export metrics JSON
            </button>
            <button
              disabled={locked || !hasVault}
              onClick={() =>
                void action(async () =>
                  download(
                    await bridge().frontOfficeExport("csv"),
                    "front-office-metrics.csv",
                    "text/csv",
                  ),
                )
              }
            >
              Export metrics CSV
            </button>
          </section>
        </>
      )}
    </details>
  );
}
