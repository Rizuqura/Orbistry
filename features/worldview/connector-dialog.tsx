"use client";

import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type SyntheticEvent,
} from "react";
import type { WorldConnector } from "./connectors";

/** Creates or edits semantic connection fields. Prefills existing metadata, awaits edit persistence and keeps failed submissions open for correction. Cancel/Escape discard staged fields. */
export function ConnectorDialog({
  endpoints,
  sourceName,
  targetName,
  connector,
  onSave,
  onClose,
}: Readonly<{
  endpoints: Pick<
    WorldConnector,
    "sourceEntityId" | "sourcePortId" | "targetEntityId" | "targetPortId"
  >;
  sourceName: string;
  targetName: string;
  connector?: WorldConnector;
  onSave: (connector: WorldConnector) => void | Promise<void>;
  onClose: () => void;
}>) {
  const ref = useRef<HTMLDialogElement>(null);
  const submitted = useRef(false);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);
  /** Contains focus while defining a relationship and restores the previous canvas/control on dismissal. */
  useEffect(function openDefinition() {
    const dialog = ref.current!;
    const previous = document.activeElement;
    dialog.showModal();
    /** Restores the prior control after closing the native definition dialog. */
    return function closeDefinition() {
      dialog.close();
      if (previous instanceof HTMLElement && previous.isConnected)
        previous.focus({ preventScroll: true });
    };
  }, []);
  /** Validates staged semantic fields, retains an edited connection's identity and waits for saving. Errors preserve the draft for retry. */
  async function submit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    if (submitted.current) return;
    const values = new FormData(event.currentTarget);
    const name = String(values.get("name") ?? "").trim();
    if (!name) {
      setError("Enter a relationship name.");
      return;
    }
    try {
      submitted.current = true;
      setSaving(true);
      setError("");
      await onSave({
        ...endpoints,
        id: connector?.id ?? crypto.randomUUID(),
        name,
        definition: String(values.get("definition") ?? ""),
        direction:
          values.get("direction") === "undirected" ? "undirected" : "directed",
      });
      onClose();
    } catch (cause) {
      submitted.current = false;
      setSaving(false);
      setError(
        cause instanceof Error
          ? cause.message
          : "Could not save this connection.",
      );
    }
  }
  /** Discards staged fields on Escape while allowing an in-progress save to finish. */
  function cancel(event: SyntheticEvent<HTMLDialogElement>): void {
    event.preventDefault();
    if (!saving) onClose();
  }
  return (
    <dialog
      ref={ref}
      className="worldview-chip-dialog worldview-connector-dialog"
      aria-labelledby="connector-dialog-title"
      onCancel={cancel}
    >
      <form onSubmit={submit}>
        <h2 id="connector-dialog-title">
          {connector ? "Edit Connection" : "Define Relationship"}
        </h2>
        <p>
          {sourceName} · {endpoints.sourcePortId} → {targetName} ·{" "}
          {endpoints.targetPortId}
        </p>
        <label>
          Name
          <input
            name="name"
            required
            maxLength={160}
            defaultValue={connector?.name ?? ""}
            disabled={saving}
            autoFocus
          />
        </label>
        <label>
          <span id="connector-definition-label">Definition</span>
          <textarea
            name="definition"
            aria-labelledby="connector-definition-label"
            maxLength={16000}
            rows={4}
            defaultValue={connector?.definition ?? ""}
            disabled={saving}
          />
        </label>
        <label htmlFor="connector-direction">Direction</label>
        <select
          id="connector-direction"
          name="direction"
          defaultValue={connector?.direction ?? "directed"}
          disabled={saving}
        >
          <option value="directed">Directed — source to target</option>
          <option value="undirected">Undirected</option>
        </select>
        {error && <p role="alert">{error}</p>}
        <div className="worldview-dialog-actions">
          <button type="button" onClick={onClose} disabled={saving}>
            Cancel
          </button>
          <button type="submit" disabled={saving}>
            {saving
              ? "Saving…"
              : connector
                ? "Save Changes"
                : "Create Relationship"}
          </button>
        </div>
      </form>
    </dialog>
  );
}
