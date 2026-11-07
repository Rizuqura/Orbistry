"use client";

import { useRef, useState } from "react";
import type { AiBridge, ProviderConnection } from "../../types/ai";

type RemoteProvider = NonNullable<ProviderConnection["providerId"]>;

/** Keep the secret in the masked input, outside persisted UI or agent state. */
export function ProviderKeyForm({
  busy,
  connect,
  onConnected,
}: {
  busy: boolean;
  connect: (
    input: Parameters<AiBridge["connectCredential"]>[0],
  ) => Promise<ProviderConnection | null>;
  onConnected: (provider: RemoteProvider) => void;
}) {
  const input = useRef<HTMLInputElement>(null);
  const pending = useRef(false);
  const [checking, setChecking] = useState(false);
  const [result, setResult] = useState<ProviderConnection | null>(null);
  const [error, setError] = useState("");
  return (
    <section className="ai-connect-card" aria-label="Bring your own key">
      <div className="ai-section-heading">
        <div>
          <h2>Bring your own key</h2>
          <p>
            Connect your account. Keys are encrypted on this device; usage is
            billed by your provider.
          </p>
        </div>
        <span className="ai-chip">BYOK</span>
      </div>
      <form
        className="ai-key-form"
        onSubmit={async (event) => {
          event.preventDefault();
          if (pending.current || busy || !input.current) return;
          pending.current = true;
          setChecking(true);
          setError("");
          setResult(null);
          try {
            const next = await connect({
              apiKey: input.current.value.trim(),
            });
            setResult(next);
            if (next?.saved && next.providerId) {
              input.current.value = "";
              onConnected(next.providerId);
            } else if (!next)
              setError(
                "Connection is busy. Retry when the current operation finishes.",
              );
          } catch {
            setError(
              "Could not connect. Check the key format and desktop connection, then retry.",
            );
          } finally {
            pending.current = false;
            setChecking(false);
          }
        }}
      >
        <label>
          API Key
          <input
            ref={input}
            type="password"
            required
            minLength={10}
            maxLength={512}
            autoComplete="off"
            spellCheck={false}
            disabled={checking}
            placeholder="Paste your API key"
            onChange={() => {
              setResult(null);
              setError("");
            }}
          />
        </label>
        <button className="ai-primary" disabled={busy || checking}>
          {checking ? "Checking…" : "Check / Connect"}
        </button>
      </form>
      <p className="ai-subtle">
        Your provider is detected automatically. Supports OpenRouter, NVIDIA and
        Gemini keys. Connecting keeps your active model unchanged.
      </p>
      {result && (
        <p
          role="status"
          className={
            result.state === "invalid" || result.state === "unreachable"
              ? "ai-inline-error"
              : "ai-subtle"
          }
        >
          {result.providerId && (
            <strong>
              {result.providerId === "nvidia"
                ? "NVIDIA"
                : result.providerId === "openrouter"
                  ? "OpenRouter"
                  : "Gemini"}{" "}
              ·{" "}
              {result.state === "verified" ? "Key verified" : "Key unverified"}
              .{" "}
            </strong>
          )}
          {result.message}
        </p>
      )}
      {error && (
        <p className="ai-inline-error" role="alert">
          {error}
        </p>
      )}
    </section>
  );
}
