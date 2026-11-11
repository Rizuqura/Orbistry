"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import type { CSSProperties, PointerEvent as ReactPointerEvent } from "react";
import type { ChatController } from "../chat/use-chat-runtime";
import type { ContextBox } from "../../types/ai";
import { ChatPanel } from "../chat/chat-panel";
import { AgentContacts } from "./agent-contacts";
import { AddAgentDialog } from "./add-agent-dialog";
import {
  DEFAULT_AGENT_WIDTHS,
  clampAgentWidths,
  type AgentWidths,
} from "./agent-layout";
import "./agent.css";
export function AgentWorkspace({
  chat,
  onSettings,
  onManageContext,
  onOpenSource,
}: {
  chat: ChatController;
  onSettings: () => void;
  onManageContext: () => void;
  onOpenSource: (path: string) => void;
}) {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [addingAgent, setAddingAgent] = useState(false);
  const [widths, setWidths] = useState<AgentWidths>(DEFAULT_AGENT_WIDTHS),
    [available, setAvailable] = useState(1200),
    [drawer, setDrawer] = useState<"history" | "details" | null>(null);
  const [box, setBox] = useState<ContextBox | null>(null),
    [boxError, setBoxError] = useState("");
  const host = useRef<HTMLElement>(null),
    drag = useRef<{
      side: "history" | "details";
      x: number;
      value: number;
    } | null>(null);
  const [restored, setRestored] = useState(false);
  const actions = useRef({ chat, onSettings });
  actions.current = { chat, onSettings };
  const selectChat = useCallback((id: string) => {
    actions.current.chat.selectChat(id);
    setDrawer(null);
  }, []);
  const newChat = useCallback(() => actions.current.chat.newChat(), []);
  const renameChat = useCallback(
    (title: string, id: string) => actions.current.chat.rename(title, id),
    [],
  );
  const removeChat = useCallback(
    (id: string) => actions.current.chat.remove(false, id),
    [],
  );
  const activateAgent = useCallback((id: string) => {
    void actions.current.chat.selectAgent(id);
  }, []);
  const openSettings = useCallback(async (id: string) => {
    if (
      id !== actions.current.chat.activeAgentId &&
      !(await actions.current.chat.selectAgent(id))
    )
      return;
    actions.current.onSettings();
  }, []);
  const showDetails = available > 1100 ? detailsOpen : drawer === "details";
  useEffect(() => {
    try {
      const saved = JSON.parse(
        localStorage.getItem("qterminal-agent-layout-v1") ?? "null",
      );
      if (
        saved &&
        Number.isFinite(saved.history) &&
        Number.isFinite(saved.details)
      )
        setWidths(saved);
    } catch {}
    setRestored(true);
    const observer = new ResizeObserver((entries) =>
      setAvailable(entries[0].contentRect.width),
    );
    if (host.current) observer.observe(host.current);
    const composerObserver = new ResizeObserver((entries) => {
      host.current?.style.setProperty(
        "--agent-composer-height",
        entries[0].target.getBoundingClientRect().height + "px",
      );
    });
    const composer = host.current?.querySelector(".chat-composer");
    if (composer) composerObserver.observe(composer);
    return () => {
      observer.disconnect();
      composerObserver.disconnect();
    };
  }, []);
  useEffect(() => {
    if (restored)
      try {
        localStorage.setItem(
          "qterminal-agent-layout-v1",
          JSON.stringify(widths),
        );
      } catch {}
  }, [widths, restored]);
  const boxId = chat.conversation?.contextBoxId;
  useEffect(() => {
    let stale = false;
    setBox(null);
    setBoxError("");
    // Legacy bindings remain metadata; opening agent details never reads sources.
    if (showDetails && boxId)
      setBoxError("Knowledge integration is temporarily inactive.");
    return () => {
      stale = true;
    };
  }, [boxId, chat.contextBoxes, chat.context, showDetails]);
  const effective = clampAgentWidths(widths, available);
  const move = (event: ReactPointerEvent<HTMLDivElement>) => {
    const start = drag.current;
    if (!start) return;
    setWidths((current) => ({
      ...current,
      [start.side]:
        start.value +
        (event.clientX - start.x) * (start.side === "history" ? 1 : -1),
    }));
  };
  const divider = (side: "history" | "details") => (
    <div
      className={"agent-pane-divider " + side}
      role="separator"
      aria-label={
        side === "history" ? "Resize agent history" : "Resize agent details"
      }
      aria-orientation="vertical"
      aria-valuemin={side === "history" ? 200 : 220}
      aria-valuemax={side === "history" ? 360 : 420}
      aria-valuenow={Math.round(effective[side])}
      tabIndex={0}
      onDoubleClick={() => setWidths(DEFAULT_AGENT_WIDTHS)}
      onPointerDown={(event) => {
        if (event.button !== 0) return;
        event.preventDefault();
        drag.current = { side, x: event.clientX, value: effective[side] };
        event.currentTarget.setPointerCapture(event.pointerId);
      }}
      onPointerMove={move}
      onPointerUp={(event) => {
        drag.current = null;
        if (event.currentTarget.hasPointerCapture(event.pointerId))
          event.currentTarget.releasePointerCapture(event.pointerId);
        setWidths((current) => clampAgentWidths(current, available));
      }}
      onPointerCancel={() => {
        drag.current = null;
      }}
      onKeyDown={(event) => {
        if (event.key === "Home") {
          event.preventDefault();
          setWidths(DEFAULT_AGENT_WIDTHS);
        } else if (["ArrowLeft", "ArrowRight"].includes(event.key)) {
          event.preventDefault();
          setWidths((current) =>
            clampAgentWidths(
              {
                ...current,
                [side]:
                  effective[side] +
                  (event.key === "ArrowRight" ? 20 : -20) *
                    (side === "history" ? 1 : -1),
              },
              available,
            ),
          );
        }
      }}
    />
  );
  const boxLabel =
    chat.conversation?.contextFile?.relativePath ??
    box?.name ??
    chat.contextBoxes.find((b) => b.id === boxId)?.name ??
    (boxId ? "Unavailable Context Box" : "No Context");
  return (
    <section
      ref={host}
      className={`agent-workspace${detailsOpen ? " details-open" : ""}${drawer ? " drawer-" + drawer : ""}`}
      aria-label="Agent workspace"
      style={
        {
          "--agent-history-width": effective.history + "px",
          "--agent-details-width": effective.details + "px",
        } as CSSProperties
      }
    >
      <aside className="agent-history-pane" aria-label="Agents and history">
        <AgentContacts
          agents={chat.agents}
          activeAgentId={chat.activeAgentId}
          onActivate={activateAgent}
          onAdd={() => setAddingAgent(true)}
          conversations={chat.conversations}
          contextBoxes={chat.contextBoxes}
          selectedId={chat.conversation?.id}
          busy={chat.busy}
          onSelect={selectChat}
          onNewChat={newChat}
          onSettings={openSettings}
          onRename={renameChat}
          onRemove={removeChat}
        />
        <button
          className="agent-layout-reset"
          onClick={() => setWidths(DEFAULT_AGENT_WIDTHS)}
        >
          Reset panel widths
        </button>
      </aside>
      {addingAgent && (
        <AddAgentDialog chat={chat} onClose={() => setAddingAgent(false)} />
      )}
      {divider("history")}
      <div className="agent-chat-pane">
        <div className="agent-mobile-controls">
          <button
            onClick={() => setDrawer(drawer === "history" ? null : "history")}
          >
            History
          </button>
          {drawer && (
            <button onClick={() => setDrawer(null)}>Close panel</button>
          )}
        </div>
        {!chat.agent ? (
          <div className="agent-empty-state">
            <h2>Build your first agent</h2>
            <p>
              Choose its personality, knowledge and model in agent settings.
            </p>
            <button onClick={() => setAddingAgent(true)}>+ Add agent</button>
          </div>
        ) : (
          <ChatPanel
            variant="workspace"
            controller={chat}
            onOpenSource={onOpenSource}
            onExpandContext={onManageContext}
            onOpenAgentSettings={onSettings}
            detailsOpen={showDetails}
            onToggleDetails={() => {
              if (available > 1100) setDetailsOpen((value) => !value);
              else
                setDrawer((value) => (value === "details" ? null : "details"));
            }}
          />
        )}
      </div>
      {showDetails && available > 1100 && divider("details")}
      {showDetails && (
        <aside
          className="agent-details-pane"
          aria-label="Agent context details"
        >
          <h2>CONTEXT / DETAILS</h2>
          <h3>
            {chat.conversation?.contextFile
              ? "Active research file"
              : "Active Context Box"}
          </h3>
          <strong>{boxLabel}</strong>
          {boxError && <p role="alert">{boxError}</p>}
          {chat.unavailableReason && (
            <p role="status">{chat.unavailableReason}</p>
          )}
          {box && (
            <>
              <p>
                {box.items.length} sources · ~
                {box.items
                  .reduce((sum, item) => sum + (item.estimatedTokens ?? 0), 0)
                  .toLocaleString()}{" "}
                estimated tokens
              </p>
              <small>Membership revision {box.revision}</small>
              <ul>
                {box.items.map((item) => (
                  <li key={item.id}>
                    <span>{item.relativePath}</span>
                    <small>
                      {item.status === "unavailable"
                        ? "Missing / unreadable"
                        : item.estimatedTokens === 0
                          ? "Empty source"
                          : "Readable"}
                    </small>
                  </li>
                ))}
              </ul>
            </>
          )}
          {chat.conversation?.contextFile && (
            <p>
              Single reviewed file · ~
              {chat.conversation.contextFile.estimatedTokens.toLocaleString()}{" "}
              tokens.{" "}
              <button
                onClick={() =>
                  onOpenSource(chat.conversation!.contextFile!.relativePath)
                }
              >
                Open source
              </button>
            </p>
          )}
          {chat.runtime.state === "CONTEXT_TOO_LARGE" && (
            <p role="alert">
              Over Budget. Reduce the box membership explicitly before retrying;
              no sources are silently omitted.
            </p>
          )}
          <button onClick={onManageContext}>View / Manage Context Boxes</button>
          <hr />
          <h3>Strict Context Analysis</h3>
          <p>
            Only this chat&apos;s bound sources are evidence. Source changes are
            recorded per request; earlier answers keep their original hashes.
          </p>
          <p>
            {chat.registry?.online
              ? "Provider connected"
              : "Provider not ready"}{" "}
            · {chat.effectiveSettings?.providerId ?? "Loading"}
          </p>
          <small>
            {chat.effectiveSettings?.modelId ?? "Choose a model in Settings"}
          </small>
          <button onClick={onSettings}>Agent Settings</button>
        </aside>
      )}
    </section>
  );
}
