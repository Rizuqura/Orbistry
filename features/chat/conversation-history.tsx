"use client";
import { useEffect, useRef, useState } from "react";
import type { ChatController } from "./use-chat-runtime";
import { useConfirmation } from "../dialogs/use-confirmation";
import type { ConstructionFileBinding } from "../../types/ai";
import {
  constructionSourceLabel,
  conversationSourceLabel,
} from "./source-label";

export function ConversationHistory({
  chat,
  onCompose,
  workspace = false,
  onManageContext,
}: {
  chat: ChatController;
  onCompose: () => void;
  workspace?: boolean;
  onManageContext?: () => void;
}) {
  const agentName = chat.agent?.displayName ?? "Orbistry Agent";
  const ownedConversations = chat.conversations.filter(
    (c) => (c.agentId ?? "wonnyy-agent") === chat.activeAgentId,
  );
  const [history, setHistory] = useState(false);
  const [query, setQuery] = useState("");
  const [boxQuery, setBoxQuery] = useState("");
  const [boxId, setBoxId] = useState("");
  const [selectedFile, setSelectedFile] =
    useState<ConstructionFileBinding | null>(null);
  const availableFile =
    chat.researchDefaults.contextFile ?? chat.conversation?.contextFile;
  const [includeKnowledge, setIncludeKnowledge] = useState(false);
  const [engineOnly, setEngineOnly] = useState(false);
  const [name, setName] = useState("");
  const [edit, setEdit] = useState<"chat" | "box" | "save" | null>(null);
  const [editId, setEditId] = useState("");
  const creationId = useRef("");
  const dialog = useRef<HTMLDialogElement>(null);
  const { confirm, confirmation } = useConfirmation();
  useEffect(() => {
    if (chat.creatingChat) {
      creationId.current = crypto.randomUUID();
      const preferred =
        chat.preselectedBoxId ||
        chat.researchDefaults.contextBoxId ||
        (!chat.researchDefaults.contextFile &&
          chat.conversation?.contextBoxId) ||
        "";
      setIncludeKnowledge(Boolean(chat.researchDefaults.knowledge));
      setEngineOnly(false);
      setBoxId(preferred);
      setSelectedFile(preferred ? null : (availableFile ?? null));
      setBoxQuery("");
      dialog.current?.showModal();
    } else {
      dialog.current?.close();
    }
  }, [chat.creatingChat]);
  const boxName = (id?: string) =>
    chat.contextBoxes.find((b) => b.id === id)?.name ??
    (id ? "Unavailable Context Box" : "Legacy context");
  const startRename = (id: string, value: string, kind: "chat" | "box") => {
    setEditId(id);
    setName(value);
    setEdit(kind);
  };
  return (
    <section className="agent-session-controls" aria-label="Chat sessions">
      <div className="agent-session-heading">
        <strong title={chat.conversation?.title}>
          {chat.conversation?.title ?? "No active chat"}
        </strong>
        {chat.conversation && (
          <button
            disabled={chat.busy}
            onClick={() =>
              startRename(
                chat.conversation!.id,
                chat.conversation!.title,
                "chat",
              )
            }
          >
            Rename chat
          </button>
        )}
      </div>
      {!workspace && (
        <div className="chat-primary-actions">
          <button disabled={chat.busy} onClick={chat.newChat}>
            + New Chat
          </button>
          <button aria-expanded={history} onClick={() => setHistory(!history)}>
            History
          </button>
        </div>
      )}
      <details className="chat-context-tools">
        <summary>Context Box · choose or manage</summary>
        {onManageContext && (
          <button onClick={onManageContext}>Manage context</button>
        )}
        <div className="agent-context-label">
          Context:{" "}
          {chat.conversation
            ? conversationSourceLabel(chat.conversation, chat.contextBoxes)
            : "None attached"}
          {chat.conversation?.contextBoxRevision
            ? ` / revision ${chat.conversation.contextBoxRevision}`
            : ""}
          {chat.conversation?.agentKnowledge && (
            <span>
              {" "}
              + {constructionSourceLabel(chat.conversation.agentKnowledge)}{" "}
              (agent knowledge)
            </span>
          )}
          {chat.contextBoxes.some(
            (box) => box.id === chat.conversation?.contextBoxId,
          ) && (
            <button
              disabled={chat.busy}
              onClick={() =>
                startRename(
                  chat.conversation!.contextBoxId!,
                  boxName(chat.conversation!.contextBoxId),
                  "box",
                )
              }
            >
              Rename box
            </button>
          )}
        </div>
        <div className="agent-actions">
          <label className="agent-box-selector">
            Context Box
            <select
              aria-label={`${agentName} Context Box`}
              disabled={chat.busy}
              value={chat.conversation?.contextBoxId ?? chat.preselectedBoxId}
              onChange={async (e) => {
                const id = e.target.value;
                if (!id) return;
                if (chat.conversation) {
                  if (
                    await confirm(
                      "Use this Context Box for future turns? Previous answers keep their original evidence. Earlier exchanges from other source versions will be excluded from the next prompt.",
                      "Switch Context Box",
                    )
                  )
                    await chat.switchContextBox(id);
                } else chat.preselectBox(id);
              }}
            >
              <option value="">Choose a Context Box</option>
              {chat.conversation?.contextBoxId &&
                !chat.contextBoxes.some(
                  (box) => box.id === chat.conversation?.contextBoxId,
                ) && (
                  <option value={chat.conversation.contextBoxId} disabled>
                    Unavailable Context Box — choose another
                  </option>
                )}
              {chat.contextBoxes.map((box) => (
                <option key={box.id} value={box.id}>
                  {box.name} ({box.items.length} files)
                </option>
              ))}
            </select>
          </label>
          <button
            disabled={chat.busy}
            onClick={() => {
              setName("");
              setEdit("save");
            }}
          >
            Save Active Context as box
          </button>
        </div>
      </details>
      {!chat.conversation && chat.preselectedBoxId && (
        <p className="chat-memory">
          Box selected. Choose + New Chat to review and create a chat.
        </p>
      )}
      {chat.conversation &&
        chat.preselectedBoxId &&
        chat.preselectedBoxId !== chat.conversation.contextBoxId && (
          <p className="chat-notice">
            Selected: {boxName(chat.preselectedBoxId)}. Use + New Chat, or{" "}
            <button
              disabled={chat.busy}
              onClick={async () => {
                if (
                  await confirm(
                    "Switch this chat to the selected box for future turns? Previous answers retain their original evidence.",
                    "Switch Context Box",
                  )
                )
                  await chat.switchContextBox(chat.preselectedBoxId);
              }}
            >
              Use in this chat
            </button>
          </p>
        )}
      {chat.context &&
        chat.conversation &&
        chat.context.id !== chat.conversation.contextIdentity.id && (
          <p className="chat-notice">
            Context Box files changed since the previous turn. Your next message
            uses their latest readable contents. Previous answers retain their
            recorded sources.
          </p>
        )}
      {edit && (
        <form
          className="agent-name-form"
          onSubmit={async (e) => {
            e.preventDefault();
            const saved =
              edit === "chat"
                ? await chat.rename(name, editId)
                : edit === "box"
                  ? await chat.renameContextBox(editId, name)
                  : await chat.saveContextBox(name);
            if (saved) setEdit(null);
          }}
        >
          <label>
            {edit === "save"
              ? "New Context Box name"
              : edit === "box"
                ? "Context Box name"
                : "Chat title"}
            <input
              autoFocus
              maxLength={120}
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Escape") {
                  e.preventDefault();
                  setEdit(null);
                }
              }}
            />
          </label>
          <button disabled={chat.busy || !name.trim()}>Save</button>
          <button type="button" onClick={() => setEdit(null)}>
            Cancel
          </button>
        </form>
      )}
      {history && (
        <div className="agent-history-drawer" aria-label="Conversation history">
          <input
            aria-label="Search chat titles"
            placeholder="Search chats"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {!ownedConversations.length && <p>No conversations yet</p>}
          {!!ownedConversations.length && (
            <button
              disabled={chat.busy}
              onClick={async () => {
                if (
                  await confirm(
                    `Clear all ${agentName} conversations? Separate audit records retain their questions and answers.`,
                    "Clear history",
                  )
                )
                  chat.remove(true);
              }}
            >
              Clear history
            </button>
          )}
          {ownedConversations
            .filter((c) => c.title.toLowerCase().includes(query.toLowerCase()))
            .map((c) => (
              <div
                key={c.id}
                data-conversation-id={c.id}
                className={
                  c.id === chat.conversation?.id
                    ? "agent-history-row active"
                    : "agent-history-row"
                }
              >
                <button
                  disabled={chat.busy}
                  aria-current={
                    c.id === chat.conversation?.id ? "true" : undefined
                  }
                  onClick={() => {
                    chat.selectChat(c.id);
                    setHistory(false);
                    onCompose();
                  }}
                >
                  <strong>{c.title}</strong>
                  <small>
                    {conversationSourceLabel(c, chat.contextBoxes)} ·{" "}
                    {new Date(c.updatedAt).toLocaleString()}
                  </small>
                </button>
                <button
                  disabled={chat.busy}
                  aria-label={`Rename ${c.title}`}
                  onClick={() => startRename(c.id, c.title, "chat")}
                >
                  Rename
                </button>
                <button
                  disabled={chat.busy}
                  aria-label={`Delete ${c.title}`}
                  onClick={async () => {
                    if (
                      await confirm(
                        "Delete this conversation? Separate model audit records retain its questions and answers.",
                        "Delete conversation",
                      )
                    )
                      chat.remove(false, c.id);
                  }}
                >
                  Delete
                </button>
              </div>
            ))}
        </div>
      )}
      <dialog
        ref={dialog}
        className="agent-create-dialog"
        aria-labelledby="agent-create-title"
        onCancel={(e) => {
          e.preventDefault();
          chat.cancelCreation();
        }}
      >
        <h2 id="agent-create-title">New {agentName} chat</h2>
        <p>
          Choose research sources, or start an Engine chat without research
          context.
        </p>
        {chat.hasEngine && (
          <label>
            <input
              type="checkbox"
              aria-label="Engine chat without research context"
              checked={engineOnly}
              onChange={(event) => setEngineOnly(event.target.checked)}
            />
            Engine chat — no research context. Ask the model to retrieve a
            research PDF from the agent?s engine.
          </label>
        )}
        <div hidden={engineOnly}>
          {availableFile && (
            <label className="agent-knowledge-choice">
              <input
                type="radio"
                name="context-box"
                checked={Boolean(selectedFile)}
                onChange={() => {
                  setSelectedFile(availableFile);
                  setBoxId("");
                }}
              />
              Agent Context file: {availableFile.relativePath} · ~
              {availableFile.estimatedTokens.toLocaleString()} tokens. Uses the
              reviewed full file.
            </label>
          )}
          <input
            aria-label="Search Context Boxes"
            placeholder="Search Context Boxes"
            value={boxQuery}
            onChange={(e) => setBoxQuery(e.target.value)}
          />
          <div className="agent-box-list">
            {chat.contextBoxes
              .filter((b) =>
                b.name.toLowerCase().includes(boxQuery.toLowerCase()),
              )
              .map((b) => (
                <label key={b.id}>
                  <input
                    type="radio"
                    name="context-box"
                    value={b.id}
                    checked={boxId === b.id}
                    onChange={() => {
                      setBoxId(b.id);
                      setSelectedFile(null);
                    }}
                  />
                  <span>
                    {b.name}
                    <small>
                      {b.items.length} files · ~
                      {b.items
                        .reduce(
                          (sum, item) => sum + (item.estimatedTokens ?? 0),
                          0,
                        )
                        .toLocaleString()}{" "}
                      tokens ·{" "}
                      {b.items.some((item) => item.status === "unavailable")
                        ? "Missing sources"
                        : !b.items.length
                          ? "Empty box"
                          : "Reviewed sources"}{" "}
                      · revision {b.revision}
                    </small>
                  </span>
                  <button
                    disabled={chat.busy}
                    onClick={() => {
                      chat.cancelCreation();
                      startRename(b.id, b.name, "box");
                    }}
                  >
                    Rename
                  </button>
                </label>
              ))}
          </div>
          {!chat.contextBoxes.length && !availableFile && (
            <p>
              Create a Context Box first. Cancel to create one from selected
              files in Planet View’s context manager, or save reviewed Active
              Context below.
            </p>
          )}
          {!chat.contextBoxes.length && !availableFile && onManageContext && (
            <button
              onClick={() => {
                chat.cancelCreation();
                onManageContext();
              }}
            >
              Open Context Box manager
            </button>
          )}
          {chat.unavailableReason && (
            <p role="alert">{chat.unavailableReason}</p>
          )}
          {chat.researchDefaults.knowledge && (
            <label className="agent-knowledge-choice">
              <input
                type="checkbox"
                checked={includeKnowledge}
                onChange={(event) => setIncludeKnowledge(event.target.checked)}
              />
              Include agent Knowledge{" "}
              {"relativePath" in chat.researchDefaults.knowledge
                ? "file"
                : "box"}
              : {constructionSourceLabel(chat.researchDefaults.knowledge)} (
              {chat.researchDefaults.knowledge.contextIdentity.sources.length}{" "}
              reviewed sources). Adds these sources to this new chat only.
            </label>
          )}
          {chat.runtime.error && <p role="alert">{chat.runtime.error}</p>}
        </div>
        <div className="agent-actions">
          <button
            disabled={
              chat.busy ||
              (!engineOnly &&
                !selectedFile &&
                (!boxId ||
                  !chat.contextBoxes.find((b) => b.id === boxId)?.items
                    .length)) ||
              (!engineOnly &&
                (chat.contextBoxes.find((b) => b.id === boxId)?.items.length ??
                  0) > 32)
            }
            onClick={() => {
              void chat
                .createChat(
                  boxId,
                  creationId.current,
                  includeKnowledge,
                  selectedFile ?? undefined,
                  engineOnly,
                )
                .then(onCompose);
            }}
          >
            {workspace ? "Start Chat" : "Create Chat"}
          </button>
          {(chat.contextBoxes.find((b) => b.id === boxId)?.items.length ?? 0) >
            32 && (
            <p>
              Chat supports up to 32 files. Choose a smaller box or remove files
              before creating a chat.
            </p>
          )}
          {boxId &&
            !chat.contextBoxes.find((b) => b.id === boxId)?.items.length && (
              <p>
                Add supported files to this empty box before creating a chat.
              </p>
            )}
          <button
            disabled={chat.busy}
            onClick={() => {
              chat.cancelCreation();
              if (!chat.contextBoxes.length && !availableFile) {
                setName("");
                setEdit("save");
              }
            }}
          >
            {chat.contextBoxes.length || availableFile
              ? "Cancel"
              : "Create box from Active Context"}
          </button>
          {!chat.contextBoxes.length && !availableFile && (
            <button onClick={chat.cancelCreation}>Cancel</button>
          )}
        </div>
      </dialog>
      {confirmation}
    </section>
  );
}
