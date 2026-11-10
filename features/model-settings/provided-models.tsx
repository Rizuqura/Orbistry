"use client";

import { useEffect, useState } from "react";
import type { ProvidedModelPreview } from "../../types/ai";

/** This surface consumes only the backend's public, non-executable projection. */
export function ProvidedModels() {
  const [models, setModels] = useState<ProvidedModelPreview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [revision, setRevision] = useState(0);
  useEffect(() => {
    let disposed = false;
    setLoading(true);
    setError("");
    const ai = window.orbistryDesktop?.ai;
    if (!ai?.providedModels) {
      setError("Open or restart the desktop app to load saved favorites.");
      setLoading(false);
      return;
    }
    void ai
      .providedModels()
      .then((values) => {
        if (!disposed) setModels(values);
      })
      .catch(() => {
        if (!disposed)
          setError(
            "Cannot load saved favorites. Retry or check the local catalog.",
          );
      })
      .finally(() => {
        if (!disposed) setLoading(false);
      });
    return () => {
      disposed = true;
    };
  }, [revision]);
  return (
    <section className="ai-models" aria-label="Provided Models preview">
      <div className="ai-section-heading">
        <div>
          <h2>
            Provided Models <span>{models.length}</span>
          </h2>
          <p>
            Saved catalog favorites · Preview only. Managed access — coming
            later.
          </p>
        </div>
        <button
          disabled={loading}
          onClick={() => setRevision((value) => value + 1)}
        >
          Refresh favorites
        </button>
      </div>
      {loading ? (
        <p role="status">Loading favorites…</p>
      ) : error ? (
        <p role="alert" className="ai-inline-error">
          {error}
        </p>
      ) : (
        <div className="model-list ai-catalog-grid">
          {models.map((model) => (
            <article key={`${model.providerId}/${model.modelId}`}>
              <div className="ai-model-name">
                <small>
                  {model.providerId} <span aria-label="Saved favorite">★</span>
                </small>
                <strong>{model.displayName}</strong>
                <small>{model.modelId}</small>
                <p>
                  Curated catalog entry. Managed deployment is coming later.
                </p>
                <div className="ai-capabilities">
                  {model.capabilities.map((capability) => (
                    <span className="ai-chip" key={capability}>
                      {capability}
                    </span>
                  ))}
                </div>
                <span>
                  {model.contextLength?.toLocaleString() ?? "Unavailable"}{" "}
                  context ·{" "}
                  {model.outputLimit?.toLocaleString() ?? "Unavailable"} output
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
                <span>
                  Unverified
                  {model.inputUsdPerMillion === 0 &&
                  model.outputUsdPerMillion === 0
                    ? " · Free endpoint listed by provider"
                    : ""}
                </span>
              </div>
              <button disabled>Managed access — coming later</button>
            </article>
          ))}
          {!models.length && (
            <div className="ai-empty">
              <strong>No visible saved favorites</strong>
              <p>
                Star models in the catalog to curate this preview. Unavailable
                favorites are hidden.
              </p>
              <p>
                Source: front-office-catalog.json, favorites list of
                provider:model IDs. Existing favorites are preserved.
              </p>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
