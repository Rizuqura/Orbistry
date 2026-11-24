"use client";
import { useEffect, useRef, useState } from "react";
import type { ChatController } from "../chat/use-chat-runtime";
export function KnowledgeProposal({
  chat,
  runId,
  onClose,
}: {
  chat: ChatController;
  runId: string;
  onClose: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const guard = useRef(false);
  const [busy, setBusy] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState("");
  const message = chat.conversation?.messages.find(
    (m) => m.runId === runId && m.role === "assistant",
  );
  const [input, setInput] = useState(
    JSON.stringify(
      {
        objective: "",
        observations: [
          {
            kind: "evidence",
            claim: "",
            entity: "",
            topic: "",
            period: "",
            sourceId: message?.sources?.[0]?.sourceId ?? "",
            location: "",
            quote: "",
          },
        ],
      },
      null,
      2,
    ),
  );
  useEffect(() => {
    dialog.current?.showModal();
    return () => dialog.current?.close();
  }, []);
  const act = async (retrieve: boolean) => {
    if (guard.current || (!retrieve && saved)) return;
    guard.current = true;
    setBusy(true);
    setError("");
    try {
      const extraction = JSON.parse(input);
      const first = extraction.observations?.[0];
      const value = retrieve
        ? await chat.retrieveKnowledge({
            entity: first?.entity,
            topic: first?.topic,
            period: first?.period,
            maxTokens: 1500,
          })
        : await chat.proposeKnowledge(runId, extraction);
      setResult(JSON.stringify(value, null, 2));
      if (!retrieve) setSaved(true);
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Knowledge operation failed.",
      );
    } finally {
      guard.current = false;
      setBusy(false);
    }
  };
  return (
    <dialog
      ref={dialog}
      className="confirmation-dialog knowledge-proposal-dialog"
      aria-labelledby="knowledge-proposal-title"
      onCancel={(event) => {
        if (guard.current) event.preventDefault();
        else onClose();
      }}
    >
      <h2 id="knowledge-proposal-title">Knowledge proposal</h2>
      <p>
        Capture structured observations from this completed run. Saving creates
        pending candidates in the app outbox, outside the Universe. Approval
        requires the separate operator review tool.
      </p>
      <p>
        Use evidence, analytical or process for kind. Evidence needs a source ID
        from this answer, an exact location and quotation. Hypotheses use
        supportingIds, contradictingIds, assumptions, rationale and questions. A
        quotation match does not establish that a claim is true.
      </p>
      <label>
        Structured extraction JSON
        <textarea
          aria-label="Structured knowledge extraction"
          value={input}
          disabled={busy || saved}
          onChange={(e) => setInput(e.target.value)}
          rows={15}
        />
      </label>
      {error && <p role="alert">{error}</p>}
      {result && <pre aria-label="Knowledge result">{result}</pre>}
      <p>
        Retrieval previews only approved knowledge for this entity, topic and
        period whose source hashes still match this chat. It does not add
        sources or change the Context Box. /loop is not installed in this
        repository.
      </p>
      <div className="confirmation-actions">
        <button disabled={busy} onClick={() => void act(true)}>
          Preview approved knowledge
        </button>
        <button
          disabled={busy || saved || chat.busy}
          onClick={() => void act(false)}
        >
          {saved ? "Proposal saved" : "Save proposal"}
        </button>
        <button disabled={busy} onClick={onClose}>
          Close
        </button>
      </div>
    </dialog>
  );
}
