"use client";
import { useEffect, useRef, useState } from "react";
import type { ChatController } from "../chat/use-chat-runtime";
import { useConfirmation } from "../dialogs/use-confirmation";
import { AgentConstruction } from "./agent-construction";
import type { AssignmentContext } from "../../types/entity-agents";
/** Hosts the existing Workbench modal and its unsaved-change guard, optionally displaying the originating entity assignment. */
export function AgentSettings({
  chat,
  onClose,
  assignmentContext,
}: {
  chat: ChatController;
  onClose: () => void;
  assignmentContext?: AssignmentContext;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const closing = useRef(false);
  const [dirty, setDirty] = useState(false);
  const [busy, setBusy] = useState(false);
  const { confirm, confirmation } = useConfirmation();
  useEffect(() => {
    const element = dialog.current!;
    const previous = document.activeElement;
    element.showModal();
    return () => {
      element.close();
      if (previous instanceof HTMLElement && previous.isConnected)
        previous.focus({ preventScroll: true });
    };
  }, []);
  const close = async () => {
    if (busy || closing.current) return;
    closing.current = true;
    try {
      if (
        !dirty ||
        (await confirm(
          "Discard unsaved construction changes? Saved drafts and the active configuration will be kept.",
          "Discard changes",
        ))
      )
        onClose();
    } finally {
      closing.current = false;
    }
  };
  return (
    <>
      <dialog
        ref={dialog}
        className="agent-construction-dialog"
        aria-labelledby="agent-construction-dialog-title"
        onCancel={(event) => {
          event.preventDefault();
          void close();
        }}
      >
        <header className="agent-construction-dialog-header">
          <div>
            <small>AGENT SETTINGS</small>
            <h2 id="agent-construction-dialog-title">
              {chat.agent?.displayName ?? "Agent"} settings
            </h2>
          </div>
          <button
            disabled={busy}
            aria-label="Close agent settings"
            onClick={() => void close()}
          >
            Close
          </button>
        </header>
        <AgentConstruction
          key={chat.agent?.id ?? "loading"}
          chat={chat}
          assignmentContext={assignmentContext}
          onDirtyChange={setDirty}
          onBusyChange={setBusy}
        />
      </dialog>
      {confirmation}
    </>
  );
}
