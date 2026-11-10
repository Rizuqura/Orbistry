"use client";
import { memo, useEffect, useId, useMemo, useState } from "react";
import type { ComponentProps } from "react";
import type { AgentConfig, Conversation, ContextBox } from "../../types/ai";
import { AgentAvatar } from "./agent-avatar";
import { bannerStyle } from "../chat/chat-presentation";
import { useConfirmation } from "../dialogs/use-confirmation";
import { conversationSourceLabel } from "../chat/source-label";

// Stable props keep streaming tokens in the timeline from redrawing contacts.
const AgentContact = memo(function AgentContact({
  active,
  onActivate,
  agent,
  conversations,
  contextBoxes,
  selectedId,
  busy,
  onSelect,
  onNewChat,
  onSettings,
  onRename,
  onRemove,
}: {
  active: boolean;
  onActivate: (id: string) => void;
  agent: AgentConfig | null;
  conversations: Conversation[];
  contextBoxes: ContextBox[];
  selectedId?: string;
  busy: boolean;
  onSelect: (id: string) => void;
  onNewChat: () => void;
  onSettings: (id: string) => void;
  onRename: (title: string, id: string) => Promise<boolean | undefined>;
  onRemove: (id: string) => void;
}) {
  const [expanded, setExpanded] = useState(false),
    [query, setQuery] = useState("");
  const [editId, setEditId] = useState(""),
    [title, setTitle] = useState("");
  const historyId = useId();
  const agentName = agent?.displayName ?? "Orbistry Agent";
  useEffect(() => {
    if (!active) setExpanded(false);
  }, [active]);
  const { confirm, confirmation } = useConfirmation();
  const owned = useMemo(
    () =>
      conversations.filter(
        (chat) =>
          (chat.agentId ?? "wonnyy-agent") === (agent?.id ?? "wonnyy-agent"),
      ),
    [conversations, agent?.id],
  );
  const chats = expanded
    ? owned.filter((chat) =>
        chat.title.toLowerCase().includes(query.toLowerCase()),
      )
    : [];
  return (
    <section
      className={`agent-contact-group${expanded ? " expanded" : ""}`}
      aria-label={`${agentName} conversations`}
    >
      <div
        className={`agent-bot-row${active ? " selected" : ""}${agent?.appearance?.bannerUrl ? " agent-banner" : ""}`}
        data-agent-id={agent?.id}
        style={bannerStyle(agent?.appearance?.bannerUrl)}
      >
        <button
          className="agent-contact-toggle"
          aria-label={`${agentName} chats`}
          disabled={busy && !active}
          aria-expanded={expanded}
          aria-current={active ? "true" : undefined}
          aria-controls={historyId}
          onClick={() => {
            if (!active && agent) {
              onActivate(agent.id);
              setExpanded(true);
            } else setExpanded((value) => !value);
          }}
        >
          <AgentAvatar agent={agent} />
          <span className="agent-contact-label">
            <strong>{agentName}</strong>
            <small>
              {owned.length
                ? `${owned.length} ${owned.length === 1 ? "chat" : "chats"}`
                : "Start a conversation"}
            </small>
          </span>
          <span className="agent-contact-chevron" aria-hidden="true">
            {expanded ? "⌄" : "›"}
          </span>
        </button>
        <button
          className="agent-contact-settings"
          aria-label={`${agentName} settings`}
          disabled={busy && !active}
          title="Agent settings"
          onClick={() => agent && onSettings(agent.id)}
        >
          ···
        </button>
      </div>
      <div id={historyId} className="agent-contact-history" hidden={!expanded}>
        {expanded && (
          <>
            <div className="agent-history-tools">
              <button disabled={busy} onClick={onNewChat}>
                + New Chat
              </button>
              <label>
                Chat history
                <input
                  type="search"
                  aria-label="Search agent conversations"
                  placeholder="Search chats"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                />
              </label>
            </div>
            <div className="agent-conversation-list">
              {!chats.length && (
                <p className="agent-muted">
                  {query
                    ? "No matching chats"
                    : `Your chats with ${agentName} will appear here.`}
                </p>
              )}
              {chats.map((chat) => (
                <article
                  key={chat.id}
                  className={chat.id === selectedId ? "selected" : ""}
                  data-agent-conversation-id={chat.id}
                >
                  {editId === chat.id ? (
                    <form
                      onSubmit={async (event) => {
                        event.preventDefault();
                        if (await onRename(title, chat.id)) setEditId("");
                      }}
                    >
                      <label>
                        Chat title
                        <input
                          autoFocus
                          aria-label="Agent chat title"
                          required
                          maxLength={120}
                          value={title}
                          onChange={(event) => setTitle(event.target.value)}
                          onKeyDown={(event) => {
                            if (event.key === "Escape") {
                              event.preventDefault();
                              setEditId("");
                            }
                          }}
                        />
                      </label>
                      <button disabled={busy || !title.trim()}>Save</button>
                      <button type="button" onClick={() => setEditId("")}>
                        Cancel
                      </button>
                    </form>
                  ) : (
                    <>
                      <button
                        className="agent-conversation-open"
                        disabled={busy}
                        aria-current={
                          chat.id === selectedId ? "true" : undefined
                        }
                        title={chat.title}
                        onClick={() => onSelect(chat.id)}
                      >
                        <strong>{chat.title}</strong>
                        <span>
                          {chat.messages.at(-1)?.content.slice(0, 100) ??
                            "No messages yet"}
                        </span>
                        <small>
                          {conversationSourceLabel(chat, contextBoxes)} ·{" "}
                          <time dateTime={chat.updatedAt}>
                            {new Date(chat.updatedAt).toLocaleDateString()}
                          </time>
                        </small>
                      </button>
                      <details className="agent-chat-menu">
                        <summary aria-label={`Actions for ${chat.title}`}>
                          ···
                        </summary>
                        <button
                          disabled={busy}
                          onClick={() => onSelect(chat.id)}
                        >
                          Open
                        </button>
                        <button
                          disabled={busy}
                          onClick={() => {
                            setTitle(chat.title);
                            setEditId(chat.id);
                          }}
                        >
                          Rename
                        </button>
                        <button
                          disabled={busy}
                          onClick={async () => {
                            if (
                              await confirm(
                                "Delete this conversation? Immutable audit records remain stored.",
                                "Delete conversation",
                              )
                            )
                              onRemove(chat.id);
                          }}
                        >
                          Delete
                        </button>
                      </details>
                    </>
                  )}
                </article>
              ))}
            </div>
          </>
        )}
      </div>
      {confirmation}
    </section>
  );
});

export function AgentContacts({
  agents,
  activeAgentId,
  onActivate,
  onAdd,
  ...props
}: Omit<
  ComponentProps<typeof AgentContact>,
  "agent" | "active" | "onActivate"
> & {
  agents: AgentConfig[];
  activeAgentId: string;
  onActivate: (id: string) => void;
  onAdd: () => void;
}) {
  return (
    <section className="agent-contacts" aria-label="Agent contacts">
      <div className="agent-sidebar-heading">
        <span>Agents</span>
        <small>{agents.length} contacts</small>
      </div>
      <button
        className="agent-add-button"
        disabled={props.busy}
        onClick={onAdd}
      >
        + Add agent
      </button>
      {agents.length === 0 && (
        <p className="ai-subtle">
          No agents yet. Add an agent to build your own.
        </p>
      )}
      {agents.map((agent) => (
        <AgentContact
          key={agent.id}
          {...props}
          agent={agent}
          active={agent.id === activeAgentId}
          onActivate={onActivate}
        />
      ))}
    </section>
  );
}
