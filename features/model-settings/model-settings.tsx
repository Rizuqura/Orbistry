"use client";

import { useEffect, useState } from "react";
import { ProviderKeyForm } from "./provider-key-form";
import { ProvidedModels } from "./provided-models";
import { FrontOfficeSettings } from "./front-office-settings";
import { contextLimit } from "../../electron/ai/context-limits.cjs";
import type { ChatController } from "../chat/use-chat-runtime";
import type {
  ModelDescriptor,
  ModelSettings as Settings,
} from "../../types/ai";

const providers = [
  { id: "ollama", name: "Ollama" },
  { id: "openrouter", name: "OpenRouter" },
  { id: "gemini", name: "Gemini" },
  { id: "nvidia", name: "NVIDIA NIM" },
] as const;

export function ModelSettings({
  chat,
  onClose,
  vaultPath,
  changingVault,
  onChangeVault,
}: {
  chat: ChatController;
  onClose: () => void;
  vaultPath: string | null;
  changingVault: boolean;
  onChangeVault: () => void;
}) {
  const [query, setQuery] = useState("");
  const [downloadName, setDownloadName] = useState("qwen3:4b");
  const [draft, setDraft] = useState<Settings | null>(
    chat.registry?.settings ?? null,
  );
  const [catalogTab, setCatalogTab] = useState<"byok" | "provided">("byok");
  const [favorites, setFavorites] = useState<string[] | null>(null);
  const [favoriteBusy, setFavoriteBusy] = useState(false);
  const [favoriteError, setFavoriteError] = useState("");
  useEffect(() => {
    let disposed = false;
    const ai = window.orbistryDesktop?.ai;
    if (ai?.modelFavorites)
      void ai
        .modelFavorites()
        .then((values) => {
          if (!disposed) setFavorites(values);
        })
        .catch(() => {
          if (!disposed)
            setFavoriteError(
              "Cannot load saved favorites. Restart the desktop app or check the local catalog.",
            );
        });
    return () => {
      disposed = true;
    };
  }, [catalogTab]);
  const toggleFavorite = async (model: ModelDescriptor) => {
    const ai = window.orbistryDesktop?.ai;
    if (
      !ai ||
      !favorites ||
      favoriteBusy ||
      model.providerId === "ollama" ||
      model.providerId === "gemini"
    )
      return;
    const deploymentId = `${model.providerId}:${model.modelId}`;
    const favorite = !favorites.includes(deploymentId);
    setFavoriteBusy(true);
    setFavoriteError("");
    try {
      // Import real adapter metadata before starring a newly discovered model;
      // the existing catalog owns both the profile and persistent favorite ID.
      if (favorite) await ai.frontOfficeRefresh(model.providerId);
      await ai.frontOfficeFavorite({ deploymentId, favorite });
      setFavorites(await ai.modelFavorites());
    } catch {
      setFavoriteError(
        "Could not save the favorite. Check the provider connection and retry.",
      );
    } finally {
      setFavoriteBusy(false);
    }
  };
  useEffect(
    () => setDraft(chat.registry?.settings ?? null),
    [chat.registry?.settings],
  );
  const active = chat.registry?.settings;
  const draftModel = chat.registry?.models.find(
    (model) =>
      model.providerId === draft?.providerId &&
      model.modelId === draft?.modelId,
  );
  const maximumContext = contextLimit(
    draft?.providerId ?? "ollama",
    draftModel?.contextLength,
  );
  const activeProvider = providers.find(
    (provider) => provider.id === active?.providerId,
  );
  const activeAvailable = chat.registry?.models.some(
    (model) =>
      model.providerId === active?.providerId &&
      model.modelId === active?.modelId,
  );
  const running = Boolean(chat.runtime.requestId);
  const pulling = chat.pulls.some((pull) => pull.phase === "model-pulling");
  // The catalog is unified across connections. Selection always uses the
  // provider attached to the model, never a separate provider picker.
  const catalog = chat.registry?.models ?? [];
  const models = catalog
    .filter((model) =>
      `${model.providerId} ${model.displayName} ${model.modelId}`
        .toLowerCase()
        .includes(query.toLowerCase()),
    )
    .sort((a, b) => {
      const first = chat.modelChecks[a.providerId + "/" + a.modelId],
        second = chat.modelChecks[b.providerId + "/" + b.modelId];
      return (
        Number(Boolean(second?.passed)) - Number(Boolean(first?.passed)) ||
        (first?.passed && second?.passed
          ? first.latencyMs - second.latencyMs
          : 0)
      );
    });
  const useModel = (model: ModelDescriptor) => {
    const contextWindow = Math.min(
      active?.contextWindow ?? 8192,
      contextLimit(model.providerId, model.contextLength),
    );
    const outputLimit = Math.min(
      active?.outputLimit ?? 2048,
      model.outputLimit ?? 8192,
      contextWindow - 513,
    );
    void chat.saveSettings({
      providerId: model.providerId,
      modelId: model.modelId,
      contextWindow,
      outputLimit,
    });
  };
  return (
    <section className="model-settings ai-terminal" aria-label="Settings">
      <div className="ai-shell">
        <header className="ai-page-header">
          <div>
            <span className="ai-eyebrow">YOUR WORKSPACE</span>
            <h1>Settings</h1>
            <p>
              Manage your vault, providers, models and generation preferences.
            </p>
          </div>
          <button className="ai-back" onClick={onClose}>
            Back to workspace <span aria-hidden="true">↗</span>
          </button>
        </header>
        {chat.agent?.runtimeModel.modelId && (
          <p className="ai-privacy">
            {chat.agent.displayName} uses {chat.agent.runtimeModel.providerId} /{" "}
            {chat.agent.runtimeModel.modelId} from Agent Construction. These are
            shared defaults; choose Inherit shared Settings in its LLM node to
            use them.
          </p>
        )}
        <section
          className="ai-connect-card settings-vault-card"
          aria-label="Universe"
        >
          <div className="ai-section-heading">
            <div>
              <h2>Universe</h2>
              <p className="settings-vault-path">
                {vaultPath ?? "No vault selected"}
              </p>
            </div>
            <button disabled={changingVault} onClick={onChangeVault}>
              Change vault folder
            </button>
          </div>
        </section>
        <div className="ai-current" role="status" aria-label="AI readiness">
          <span
            className={`ai-status-dot${chat.registry?.online && activeAvailable ? " connected" : ""}`}
          />
          <div className="model-active">
            <strong>{active?.modelId ?? "No model selected"}</strong>
            <small>
              {activeProvider?.name ?? "Connecting"}
              {active
                ? active.providerId === "ollama"
                  ? " · Local"
                  : " · Cloud"
                : ""}
              {chat.canSend
                ? " - Ready to chat"
                : chat.registry?.online
                  ? activeAvailable
                    ? " - Connected"
                    : " - Model unavailable"
                  : " - Not connected"}
            </small>
          </div>
          {running ? (
            <button
              onClick={chat.stop}
              disabled={chat.runtime.state === "CANCELLING"}
            >
              Stop response
            </button>
          ) : (
            <span className="ai-chip">
              {chat.attached
                ? `${chat.context?.sources.length ?? 0} ${chat.context?.sources.length === 1 ? "source" : "sources"} attached`
                : "Choose a Context Box to chat"}
            </span>
          )}
        </div>
        <ProviderKeyForm
          busy={chat.busy}
          connect={chat.connectCredential}
          onConnected={() => {
            setCatalogTab("byok");
            setQuery("");
          }}
        />
        <nav className="ai-catalog-tabs" aria-label="Model catalogs">
          <button
            aria-pressed={catalogTab === "byok"}
            onClick={() => setCatalogTab("byok")}
          >
            BYOK Models
          </button>
          <button
            aria-pressed={catalogTab === "provided"}
            onClick={() => setCatalogTab("provided")}
          >
            Provided Models
          </button>
        </nav>
        {catalogTab === "provided" ? (
          <ProvidedModels />
        ) : (
          <>
            {chat.modelScan?.running && (
              <div className="ai-scan-status" role="status">
                <span>
                  Checking {chat.modelScan.providerId} ·{" "}
                  {chat.modelScan.completed}/{chat.modelScan.total}
                  <small>{chat.modelScan.model}</small>
                </span>
                <button onClick={chat.stopModelChecks}>Stop checks</button>
              </div>
            )}
            <section className="ai-models" aria-label="All connected models">
              <div className="ai-section-heading">
                <div>
                  <h2>
                    Choose a model <span>{catalog.length}</span>
                  </h2>
                  <p>
                    Used for your next answer. Your conversation stays with you.
                  </p>
                </div>
                <button disabled={chat.busy} onClick={chat.refreshModels}>
                  Refresh models
                </button>
              </div>
              <label className="ai-model-search">
                <span className="sr-only">Search models</span>
                <input
                  aria-label="Search models"
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search all models or providers"
                />
              </label>
              {favoriteError && (
                <p className="ai-inline-error" role="alert">
                  {favoriteError}
                </p>
              )}
              <div className="model-list ai-catalog-grid">
                {models.map((model) => {
                  const check =
                    chat.modelChecks[model.providerId + "/" + model.modelId];
                  return (
                    <article key={`${model.providerId}/${model.modelId}`}>
                      <div className="ai-model-name">
                        <small>
                          {providers.find(
                            (provider) => provider.id === model.providerId,
                          )?.name ?? model.providerId}
                        </small>
                        <strong>{model.displayName}</strong>
                        <small>{model.modelId}</small>
                        <p>
                          {model.location === "local"
                            ? "Installed on this device."
                            : "Use with your own provider account."}
                        </p>
                        <div className="ai-capabilities">
                          {model.capabilities.map((capability) => (
                            <span key={capability} className="ai-chip">
                              {capability}
                            </span>
                          ))}
                        </div>
                        <span>
                          {check?.passed
                            ? "Available · Verified by model check"
                            : check
                              ? "Error · Last model check failed"
                              : "Unverified"}
                        </span>
                        <span>
                          {model.outputLimit?.toLocaleString() ?? "Unavailable"}{" "}
                          output
                        </span>
                        <span>
                          {model.inputUsdPerMillion == null
                            ? "Input price unavailable"
                            : `$${model.inputUsdPerMillion}/M input`}{" "}
                          ·{" "}
                          {model.outputUsdPerMillion == null
                            ? "Output price unavailable"
                            : `$${model.outputUsdPerMillion}/M output`}
                        </span>
                        {model.inputUsdPerMillion === 0 &&
                          model.outputUsdPerMillion === 0 && (
                            <span>Free endpoint listed by provider</span>
                          )}
                        <span
                          title={
                            check
                              ? `Checked ${new Date(check.checkedAt).toLocaleString()}`
                              : undefined
                          }
                          className={
                            check?.passed ? "model-check-star" : undefined
                          }
                        >
                          {model.contextLength
                            ? `${model.contextLength.toLocaleString()} context`
                            : model.location === "local"
                              ? "Installed locally"
                              : "Cloud model"}
                          {check
                            ? ` · ${check.passed ? "Check passed" : "Check failed"} · ${check.latencyMs} ms`
                            : ""}
                        </span>
                      </div>
                      <div className="ai-row-actions">
                        {(model.providerId === "nvidia" ||
                          model.providerId === "openrouter") && (
                          <button
                            aria-label={`${favorites?.includes(`${model.providerId}:${model.modelId}`) ? "Unstar" : "Star"} ${model.displayName}`}
                            aria-pressed={
                              favorites?.includes(
                                `${model.providerId}:${model.modelId}`,
                              ) ?? false
                            }
                            disabled={chat.busy || favoriteBusy || !favorites}
                            onClick={() => void toggleFavorite(model)}
                          >
                            {favorites?.includes(
                              `${model.providerId}:${model.modelId}`,
                            )
                              ? "★"
                              : "☆"}
                          </button>
                        )}
                        {model.providerId !== "ollama" && (
                          <button
                            disabled={chat.busy}
                            onClick={() =>
                              model.providerId !== "ollama" &&
                              void chat.checkModel(
                                model.providerId,
                                model.modelId,
                              )
                            }
                          >
                            {chat.modelScan?.running &&
                            chat.modelScan.model === model.modelId
                              ? "Checking…"
                              : "Check model"}
                          </button>
                        )}
                        <button
                          className={
                            model.active ? "ai-selected" : "ai-primary"
                          }
                          disabled={
                            chat.busy ||
                            model.active ||
                            (model.contextLength !== null &&
                              model.contextLength < 2048)
                          }
                          onClick={() => useModel(model)}
                        >
                          {model.active
                            ? "Using"
                            : model.location === "remote"
                              ? "Use online"
                              : "Use"}
                        </button>
                      </div>
                    </article>
                  );
                })}
                {!models.length && (
                  <div className="ai-empty">
                    <strong>
                      {catalog.length
                        ? "No matching models"
                        : "No models available yet"}
                    </strong>
                    <p>
                      {catalog.length
                        ? "Try a different model or provider name."
                        : "Connect an API key or start Ollama, then refresh models."}
                    </p>
                  </div>
                )}
              </div>
              {catalog.some((model) => model.location === "remote") && (
                <p className="ai-footnote">
                  Model checks use a small synthetic prompt and provider quota.
                  A passed check is a sample, not a reliability guarantee.
                </p>
              )}
            </section>
            <details className="ai-advanced">
              <summary>Manage saved connections</summary>
              <section aria-label="Saved connections">
                <p className="ai-subtle">
                  Models from all saved connections appear above. Model checks
                  use provider quota.
                </p>
                {chat.registry?.providers
                  .filter(
                    (connection) =>
                      connection.id !== "ollama" && connection.configured,
                  )
                  .map((connection) => {
                    const providerId = connection.id;
                    if (providerId === "ollama") return null;
                    const provider = providers.find(
                      (item) => item.id === connection.id,
                    );
                    return (
                      <div className="ai-section-heading" key={connection.id}>
                        <div>
                          <h2>{provider?.name ?? connection.displayName}</h2>
                          <p>
                            {connection.online
                              ? "Catalog reachable"
                              : "Not connected"}
                          </p>
                          {connection.error && (
                            <p className="ai-inline-error" role="status">
                              {connection.error.message}
                            </p>
                          )}
                          {connection.secureStorageAvailable === false && (
                            <p role="alert">
                              Secure credential storage is unavailable on this
                              device.
                            </p>
                          )}
                        </div>
                        <div className="ai-row-actions">
                          <button
                            disabled={chat.busy}
                            onClick={() => void chat.recheckModels(providerId)}
                          >
                            Check models
                          </button>
                          <button
                            disabled={chat.busy}
                            onClick={() =>
                              void chat.removeCredential(providerId)
                            }
                          >
                            Remove {provider?.name ?? connection.displayName}{" "}
                            key
                          </button>
                        </div>
                      </div>
                    );
                  })}
                {!chat.registry?.providers.some(
                  (connection) =>
                    connection.id !== "ollama" && connection.configured,
                ) && <p>No saved API keys yet.</p>}
              </section>
            </details>
            <details className="ai-advanced">
              <summary>Install a local model</summary>
              <section aria-label="Local model downloads">
                <div className="ai-download-form">
                  <label>
                    Ollama model
                    <input
                      value={downloadName}
                      maxLength={200}
                      onChange={(event) => setDownloadName(event.target.value)}
                      disabled={pulling}
                    />
                  </label>
                  <button
                    disabled={chat.busy || pulling || !downloadName.trim()}
                    onClick={() => void chat.downloadModel(downloadName.trim())}
                  >
                    DOWNLOAD MODEL
                  </button>
                </div>
                {chat.pulls.map((pull) => (
                  <div
                    className="ai-download-status"
                    role="status"
                    key={pull.model}
                  >
                    <strong>
                      {pull.model} ·{" "}
                      {pull.phase === "model-pulling"
                        ? "DOWNLOADING MODEL"
                        : pull.phase === "model-installed"
                          ? "MODEL INSTALLED"
                          : pull.phase === "cancelled"
                            ? "DOWNLOAD CANCELLED"
                            : "DOWNLOAD FAILED"}
                    </strong>
                    <p>{pull.message}</p>
                    {pull.progress?.total && (
                      <p>
                        Current layer:{" "}
                        {(pull.progress.current / 1e9).toFixed(2)} GB /{" "}
                        {(pull.progress.total / 1e9).toFixed(2)} GB ·{" "}
                        {Math.floor(
                          (pull.progress.current / pull.progress.total) * 100,
                        )}
                        %
                      </p>
                    )}
                    {pull.phase === "model-pulling" && (
                      <button onClick={() => chat.cancelPull(pull.model)}>
                        CANCEL
                      </button>
                    )}
                  </div>
                ))}
              </section>
            </details>
          </>
        )}
        {draft && (
          <details className="ai-advanced">
            <summary>Generation settings</summary>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                void chat.saveSettings(draft);
              }}
            >
              <p className="ai-subtle">
                Applied to the active model:{" "}
                {active?.modelId ?? "none selected"}.
              </p>
              <div className="model-fields">
                {(
                  [
                    [
                      "contextWindow",
                      "Context window",
                      2048,
                      maximumContext,
                      1,
                    ],
                    ["outputLimit", "Output limit", 128, 8192, 1],
                    ["temperature", "Temperature", 0, 2, 0.1],
                  ] as const
                ).map(([field, label, min, max, step]) => (
                  <label key={field}>
                    {label}
                    <input
                      type="number"
                      min={min}
                      max={max}
                      step={step}
                      value={draft[field]}
                      onChange={(event) =>
                        setDraft({
                          ...draft,
                          [field]: Number(event.target.value),
                        })
                      }
                    />
                  </label>
                ))}
                <label className="ai-checkbox">
                  <input
                    type="checkbox"
                    checked={draft.streaming}
                    onChange={(event) =>
                      setDraft({ ...draft, streaming: event.target.checked })
                    }
                  />
                  Stream answers
                </label>
              </div>
              <p className="ai-subtle">
                Context window limit: {maximumContext.toLocaleString()} tokens.
                {draft.providerId === "ollama"
                  ? " Local models retain the 32K application ceiling."
                  : draftModel?.contextLength
                    ? " Based on provider-reported model capacity and the application ceiling. Increase the window here to fit larger Context Boxes; output tokens also use this budget."
                    : " Refresh Models to retrieve capacity before selecting a larger window."}
              </p>
              <details>
                <summary>Timeouts and memory</summary>
                <div className="model-fields">
                  {draft.providerId === "ollama" && (
                    <label>
                      Keep model loaded (seconds)
                      <input
                        type="number"
                        min={0}
                        max={3600}
                        value={draft.keepAliveSeconds}
                        onChange={(event) =>
                          setDraft({
                            ...draft,
                            keepAliveSeconds: Number(event.target.value),
                          })
                        }
                      />
                    </label>
                  )}
                  {(
                    [
                      ["loadTimeoutMs", "Model load timeout"],
                      ["inactivityTimeoutMs", "Generation inactivity timeout"],
                      ["absoluteTimeoutMs", "Absolute run timeout"],
                    ] as const
                  )
                    .filter(
                      ([field]) =>
                        draft.providerId === "ollama" ||
                        field !== "loadTimeoutMs",
                    )
                    .map(([field, label]) => (
                      <label key={field}>
                        {label} (seconds)
                        <input
                          type="number"
                          min={1}
                          max={1800}
                          value={draft[field] / 1000}
                          onChange={(event) =>
                            setDraft({
                              ...draft,
                              [field]: Number(event.target.value) * 1000,
                            })
                          }
                        />
                      </label>
                    ))}
                </div>
              </details>
              <button disabled={chat.busy} className="ai-primary">
                Save generation settings
              </button>
            </form>
          </details>
        )}
        {chat.runtime.error && (
          <p className="ai-inline-error" role="alert">
            {chat.runtime.error}
          </p>
        )}
        <details className="ai-advanced">
          <summary>Advanced provider catalog and experiments</summary>
          <FrontOfficeSettings
            hasVault={Boolean(vaultPath)}
            beforeOperation={chat.prepareBasicChat}
          />
        </details>
        <footer className="ai-footer">
          <p className="ai-privacy">
            {active?.providerId === "ollama" ? "LOCAL: " : "ONLINE: "}
            {active?.providerId === "ollama"
              ? "Local inference through Ollama. Your source files stay on this device."
              : active?.providerId === "openrouter"
                ? "Your attached Context Box, configured agent references, question and included history are sent to OpenRouter and its model providers."
                : `Your attached Context Box, configured agent references, question and included history are sent to ${activeProvider?.name ?? "your selected provider"}.`}
          </p>
          <details>
            <summary>Latest run diagnostics</summary>
            <pre>
              {JSON.stringify(
                chat.runtime.diagnostics ?? {
                  status: "No completed run this session",
                },
                null,
                2,
              )}
            </pre>
          </details>
        </footer>
      </div>
    </section>
  );
}
