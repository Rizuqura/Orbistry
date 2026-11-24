"use client";
import { useEffect, useRef, useState } from "react";
import type { ChatController } from "../chat/use-chat-runtime";

export function AddAgentDialog({
  chat,
  onClose,
}: {
  chat: ChatController;
  onClose: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const submitting = useRef(false);
  const creationId = useRef(crypto.randomUUID());
  const [name, setName] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const element = dialog.current!;
    element.showModal();
    return () => element.close();
  }, []);
  return (
    <dialog
      ref={dialog}
      className="agent-add-dialog"
      aria-labelledby="agent-add-title"
      onCancel={(event) => {
        event.preventDefault();
        if (!submitting.current) onClose();
      }}
    >
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          if (submitting.current || !name.trim()) return;
          submitting.current = true;
          setPending(true);
          setError("");
          try {
            if (await chat.createAgent(name, creationId.current)) onClose();
          } catch (error) {
            setError(
              error instanceof Error
                ? error.message
                : "Could not create this agent.",
            );
          } finally {
            submitting.current = false;
            setPending(false);
          }
        }}
      >
        <h2 id="agent-add-title">Add agent</h2>
        <p>
          Start with a blank agent: no profile image, instructions, skills or
          attached Context Boxes. Configure it through its three-dot menu.
        </p>
        <label>
          Agent name
          <input
            autoFocus
            required
            maxLength={120}
            value={name}
            disabled={pending}
            onChange={(event) => {
              setName(event.target.value);
              setError("");
            }}
            placeholder="Name your agent"
          />
        </label>
        {error && <p role="alert">{error}</p>}
        <div className="agent-add-actions">
          <button type="button" disabled={pending} onClick={onClose}>
            Cancel
          </button>
          <button disabled={pending || !name.trim()}>
            {pending ? "Creating…" : "Create agent"}
          </button>
        </div>
      </form>
    </dialog>
  );
}
