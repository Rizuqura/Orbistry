"use client";
import {
  useEffect,
  useRef,
  useState,
  type ComponentProps,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { LegacyAgentWorkspace } from "./legacy-agent-workspace";
import { AgentAvatar } from "./agent-avatar";
import { useConfirmation } from "../dialogs/use-confirmation";
import { AddAgentDialog } from "./add-agent-dialog";
import { useChatRuntime } from "../chat/use-chat-runtime";
import { createPortal } from "react-dom";
import { ChatMarkdown } from "../chat/chat-markdown";
import { requireWorldViewBridge } from "../worldview/chip-session";
import type { WorldViewState } from "../../types/worldview";
import type {
  AgentAssignment,
  AssignmentContext,
  EntityAgentState,
  AgentEvidenceReference,
} from "../../types/entity-agents";
import "./agent-gateway.css";
type Props = ComponentProps<typeof LegacyAgentWorkspace> & {
  vaultPath: string | null;
  onWorkbench: (id: string, context: AssignmentContext) => Promise<void>;
};
/** Renders local vector controls without external assets. */
function Icon({ kind }: { kind: string }) {
  const paths: Record<string, string> = {
    plus: "M12 4v16M4 12h16",
    arrow: "M4 12h16m-7-7 7 7-7 7",
    chat: "M21 11a9 9 0 0 1-9 9H5l-3 2 1-6a9 9 0 1 1 18-5Z",
    context: "m3 8 9-5 9 5-9 5-9-5Zm0 5 9 5 9-5M3 18l9 5 9-5",
    tools: "m12 2 9 5v10l-9 5-9-5V7l9-5Zm-9 5 9 5 9-5M12 12v10",
    agents: "M16 21v-3a4 4 0 0 0-8 0v3M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z",
    search: "M20 20l-5-5M10 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14Z",
  };
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={paths[kind]} />
    </svg>
  );
}
/** Renders the Universe coordinator and persisted history. Inspection sends new requests through the Gateway; original worker transcripts and the advanced workspace retain their stores. */
export function AgentWorkspace(props: Props) {
  const { chat: agentChat, vaultPath } = props;
  const gatewayScope = useRef({
    activeStationIds: [] as string[],
    matchMode: "any" as const,
  }).current;
  const gatewayChat = useChatRuntime({
    vaultPath,
    contextKey: "universe-gateway",
    scope: gatewayScope,
    gateway: true,
  });
  const [legacyMode, setLegacyMode] = useState(false);
  const chat = legacyMode ? agentChat : gatewayChat;
  const [inspected, setInspected] = useState<EntityAgentState | null>(null);
  const [savedActivity, setSavedActivity] = useState<Record<string, unknown>[]>(
    [],
  );
  useEffect(() => {
    let alive = true;
    setSavedActivity([]);
    const id = chat.conversation?.id;
    if (id && !chat.busy)
      void window.orbistryDesktop?.ai
        .gatewayActivity(id)
        .then((tasks) => {
          if (alive) setSavedActivity(tasks);
        })
        .catch((reason: Error) => {
          if (alive) setError(`Task trace unavailable: ${reason.message}`);
        });
    return () => {
      alive = false;
    };
  }, [chat.conversation?.id, chat.conversation?.updatedAt, chat.busy]);
  const [menu, setMenu] = useState<{
    id: string;
    title: string;
    x: number;
    y: number;
  } | null>(null);
  const [renaming, setRenaming] = useState<string | null>(null),
    [renameTitle, setRenameTitle] = useState("");
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!menu) return;
    menuRef.current?.querySelector<HTMLButtonElement>("button")?.focus();
    const close = (event: globalThis.PointerEvent) => {
      if (!(event.target as Element).closest(".gateway-history-menu"))
        setMenu(null);
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenu(null);
    };
    document.addEventListener("pointerdown", close);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", close);
      document.removeEventListener("keydown", escape);
    };
  }, [menu]);
  const { confirm, confirmation } = useConfirmation();
  const [sidebarWidth, setSidebarWidth] = useState<number | null>(null);
  const resize = useRef<{ pointerId: number; x: number; width: number } | null>(
    null,
  );
  const gateway = useRef<HTMLElement>(null);
  useEffect(() => {
    try {
      const value = localStorage.getItem("orbistry-gateway-sidebar-width");
      if (value !== null && Number.isFinite(Number(value)))
        setSidebarWidth(Math.max(180, Math.min(640, Number(value))));
    } catch {
      console.warn("Gateway sidebar preference is unavailable.");
    }
  }, []);
  /** Applies bounded layout units and persists the sidebar preference. */
  function changeSidebar(width: number) {
    const bounded = Math.max(180, Math.min(640, width));
    setSidebarWidth(bounded);
    try {
      localStorage.setItem("orbistry-gateway-sidebar-width", String(bounded));
    } catch {
      console.warn("Gateway sidebar preference could not be saved.");
    }
  }
  /** Captures a divider drag using the sidebar's actual rendered width, including compact zoom. */
  function startResize(event: ReactPointerEvent<HTMLDivElement>) {
    if (event.button !== 0) return;
    event.preventDefault();
    resize.current = {
      pointerId: event.pointerId,
      x: event.clientX,
      width:
        (gateway.current
          ?.querySelector(".gateway-sidebar")
          ?.getBoundingClientRect().width ?? 210) / 1,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  }
  /** Converts screen movement into compact layout units without changing any chat state. */
  function moveResize(event: ReactPointerEvent<HTMLDivElement>) {
    if (resize.current?.pointerId === event.pointerId)
      changeSidebar(
        resize.current.width + (event.clientX - resize.current.x) / 1,
      );
  }
  /** Ends a captured drag cleanly on release or cancellation. */
  function stopResize(event: ReactPointerEvent<HTMLDivElement>) {
    resize.current = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId))
      event.currentTarget.releasePointerCapture(event.pointerId);
  }
  const [assignments, setAssignments] = useState<AgentAssignment[]>([]),
    [world, setWorld] = useState<WorldViewState | null>(null),
    [selected, setSelected] = useState<EntityAgentState | null>(null);
  const [draft, setDraft] = useState(""),
    [agentQuery, setAgentQuery] = useState(""),
    [rankedEntities, setRankedEntities] = useState<string[] | null>(null),
    [query, setQuery] = useState(""),
    [error, setError] = useState(""),
    [busy, setBusy] = useState(false),
    [advanced, setAdvanced] = useState(false),
    [adding, setAdding] = useState(false),
    [panel, setPanel] = useState<string | null>(null);
  const [approvalResults, setApprovalResults] = useState<
    Record<string, string>
  >({});
  useEffect(() => setApprovalResults({}), [vaultPath]);
  const lock = useRef(false),
    generation = useRef(0),
    attempt = useRef<{ message: string; id: string } | null>(null),
    tail = useRef<HTMLDivElement>(null);
  const api =
    typeof window !== "undefined" ? window.orbistryDesktop?.ai : undefined;
  useEffect(() => {
    let alive = true;
    if (!agentQuery.trim() || !vaultPath) {
      setRankedEntities(null);
      return;
    }
    const timer = setTimeout(() => {
      void requireWorldViewBridge()
        .request<{ results: { entityId: string }[] }>("tag-search", {
          vaultPath,
          query: agentQuery,
        })
        .then((result) => {
          if (alive)
            setRankedEntities(result.results.map((item) => item.entityId));
        })
        .catch((reason: Error) => {
          if (alive) {
            setRankedEntities([]);
            setError(reason.message);
          }
        });
    }, 180);
    return () => {
      alive = false;
      clearTimeout(timer);
    };
  }, [agentQuery, vaultPath]);
  useEffect(() => {
    let alive = true;
    generation.current++;
    setAssignments([]);
    setSelected(null);
    setInspected(null);
    setLegacyMode(false);
    setWorld(null);
    setError("");
    if (vaultPath && api)
      void Promise.all([
        api.listEntityAgents({ vaultPath }),
        requireWorldViewBridge().request<WorldViewState>("load", { vaultPath }),
      ])
        .then(([records, state]) => {
          if (alive) {
            setAssignments(records);
            setWorld(state);
          }
        })
        .catch((reason: Error) => {
          if (alive) setError(reason.message);
        });
    return () => {
      alive = false;
      generation.current++;
    };
  }, [vaultPath, api]);
  useEffect(() => {
    // Scroll only the transcript: scrollIntoView also scrolls overflow-hidden
    // ancestors and can push the fixed composer and Gateway header offscreen.
    const transcript = tail.current?.parentElement;
    transcript?.scrollTo({ top: transcript.scrollHeight });
  }, [selected?.session.messages, chat.conversation?.messages]);
  /** Serializes actions and ignores responses from an obsolete Universe or unmounted surface. */
  async function perform(action: () => Promise<void>) {
    if (lock.current || chat.busy) return;
    lock.current = true;
    setBusy(true);
    setError("");
    try {
      await action();
    } catch (reason) {
      setError(
        reason instanceof Error ? reason.message : "Agent request failed.",
      );
    } finally {
      lock.current = false;
      setBusy(false);
    }
  }
  /** Opens the assignment's persisted transcript without invoking a provider. */
  async function open(assignment: AgentAssignment) {
    if (!api || !vaultPath) return;
    const version = generation.current;
    await perform(async () => {
      const state = await api.openEntityAgent({
        vaultPath,
        assignmentId: assignment.id,
      });
      if (version !== generation.current) return;
      setInspected(state);
      setPanel(null);
    });
  }
  /** Confirms global agent removal while retaining immutable historical files. Refreshes current assignments only after the backend succeeds. */
  async function deleteAgent(id: string, name: string) {
    if (
      busy ||
      chat.busy ||
      !(await confirm(
        `Delete agent “${name}” from active use across your Universes? Saved chats, source files and execution records will be retained.`,
        "Delete agent",
      ))
    )
      return;
    await perform(async () => {
      if (!(await agentChat.deleteAgent(id)))
        throw new Error("Agent deletion did not complete.");
      if (selected?.assignment.agentId === id) {
        setSelected(null);
        setDraft("");
      }
      if (api && vaultPath)
        setAssignments(await api.listEntityAgents({ vaultPath }));
    });
  }
  /** Uses the existing chat deletion controller after confirming the exact conversation title. */
  async function deleteChat(id: string, title: string) {
    if (
      busy ||
      chat.busy ||
      !(await confirm(
        `Delete chat “${title}”? This cannot be undone.`,
        "Delete chat",
      ))
    )
      return;
    await perform(async () => {
      const owner =
        gatewayChat.conversations.find((item) => item.id === id)?.agentId ===
        "orbistry-universe-gateway"
          ? gatewayChat
          : agentChat;
      if (!(await owner.remove(false, id)))
        throw new Error("Chat deletion failed.");
      if (owner === agentChat) await gatewayChat.refreshConversations();
      if (owner === agentChat) setLegacyMode(false);
    });
  }
  /** Clears only an inspected/selected transcript after explicit confirmation; engine receipts and the Gateway conversation remain available. */
  async function deleteAssignedChat(target = selected) {
    if (!target || !api || !vaultPath || busy || chat.busy) return;
    const version = generation.current;
    if (
      !(await confirm(
        `Delete this chat with ${target.context.entity.name}? Messages will be permanently removed. Engine execution records and source files will be retained.`,
        "Delete chat",
      ))
    )
      return;
    await perform(async () => {
      if (!api.clearEntityAgentChat)
        throw new Error("Restart Orbistry to enable assigned chat deletion.");
      const state = await api.clearEntityAgentChat({
        vaultPath,
        assignmentId: target.assignment.id,
      });
      if (version !== generation.current) return;
      // Closing an inspector while clear settles must not reopen it with a late
      // response or revive metadata from a previously selected Universe.
      setInspected((current) =>
        current?.assignment.id === target.assignment.id ? state : current,
      );
      setSelected((current) =>
        current?.assignment.id === target.assignment.id ? state : current,
      );
      setDraft("");
      attempt.current = null;
    });
  }
  /** Applies a human decision to an exact existing proposal; it cannot accept model-supplied parameters or start independent worker inference. */
  async function decideGatewayRequest(
    request: { assignmentId: string; requestId: string },
    approved: boolean,
  ) {
    if (!api || !vaultPath) return;
    const version = generation.current;
    await perform(async () => {
      const state = await api.decideEntityAgentRequest({
        vaultPath,
        assignmentId: request.assignmentId,
        requestId: request.requestId,
        approved,
        continueAgent: false,
      });
      if (version !== generation.current) return;
      const result = state.session.requests.find(
        (item) => item.id === request.requestId,
      );
      setApprovalResults((values) => ({
        ...values,
        [request.requestId]: `${result?.status ?? "unavailable"}${result?.executionId ? " / Execution " + result.executionId : ""}`,
      }));
    });
  }
  /** Uses stable request tokens for assignment sends; ordinary chats retain their existing controller. */
  async function send() {
    if (!selected) {
      chat.submit();
      return;
    }
    if (!api || !vaultPath || !draft.trim()) return;
    const message = draft.trim(),
      version = generation.current;
    if (attempt.current?.message !== message)
      attempt.current = { message, id: crypto.randomUUID() };
    const requestId = attempt.current.id;
    await perform(async () => {
      const state = await api.sendEntityAgent({
        vaultPath,
        assignmentId: selected.assignment.id,
        message,
        requestId,
      });
      if (version !== generation.current) return;
      setSelected(state);
      if (!state.session.error) {
        setDraft("");
        attempt.current = null;
      }
    });
  }
  /** Starts an ordinary chat without deleting the selected assignment's history. */
  function newChat() {
    if (busy || chat.busy) return;
    setSelected(null);
    setDraft("");
    setError("");
    setPanel(null);
    setLegacyMode(false);
    setInspected(null);
    void perform(async () => {
      await gatewayChat.createChat("", crypto.randomUUID());
    });
  }
  if (advanced)
    return (
      <div className="gateway-advanced">
        <button onClick={() => setAdvanced(false)}>← Back to gateway</button>
        <LegacyAgentWorkspace {...props} />
      </div>
    );
  const active = selected
    ? (agentChat.agents.find((a) => a.id === selected.assignment.agentId) ??
      null)
    : chat.agent;
  const hasMessages =
      (selected?.session.messages ?? chat.conversation?.messages ?? []).length >
      0,
    blocked = busy || chat.busy,
    value = selected ? draft : chat.draft;
  const transcriptMessages =
    selected?.session.messages ??
    (chat.conversation?.messages ?? []).map(({ id, role, content }) => ({
      id,
      role,
      content,
      references: [] as AgentEvidenceReference[],
    }));
  const activity = (
    Array.isArray(chat.runtime.diagnostics?.gatewayTasks)
      ? chat.runtime.diagnostics.gatewayTasks
      : savedActivity
  ) as {
    taskId: string;
    action: string;
    status: string;
    entityId?: string;
    agentId?: string;
    error?: string;
    executionIds?: string[];
    consultationStatus?: string;
    executionStatus?: string;
    fulfillmentStatus?: string;
    startedAt?: string;
    operationType?: string;
    pendingRequests?: {
      assignmentId: string;
      requestId: string;
      engineId: string;
      operation: string;
    }[];
  }[];
  return (
    <section
      ref={gateway}
      className="agent-gateway"
      aria-label="Agent workspace"
      style={
        {
          "--gateway-sidebar-width":
            sidebarWidth === null ? undefined : `${sidebarWidth}px`,
        } as CSSProperties
      }
    >
      <aside className="gateway-sidebar" aria-label="Agents and history">
        <button className="gateway-new" disabled={blocked} onClick={newChat}>
          <Icon kind="plus" />
          New chat
        </button>
        <div className="gateway-section-heading">
          ASSIGNED AGENTS <span>{assignments.length}</span>
        </div>
        <div className="gateway-agents">
          <input
            className="gateway-agent-filter"
            type="search"
            aria-label="Filter assigned agents by tag"
            placeholder="Filter agents by entity tag…"
            maxLength={200}
            value={agentQuery}
            onChange={(event) => setAgentQuery(event.target.value)}
          />
          {!assignments.length && (
            <p className="gateway-muted">
              Assign agents to entities in WorldView to see them here.
            </p>
          )}
          {assignments
            .filter(
              (assignment) =>
                rankedEntities === null ||
                rankedEntities.includes(assignment.entityId),
            )
            .sort((a, b) =>
              rankedEntities === null
                ? 0
                : rankedEntities.indexOf(a.entityId) -
                  rankedEntities.indexOf(b.entityId),
            )
            .map((assignment) => {
              const agent =
                  agentChat.agents.find((a) => a.id === assignment.agentId) ??
                  null,
                entity = world?.chips.find((e) => e.id === assignment.entityId);
              return (
                <div className="gateway-deletable-row" key={assignment.id}>
                  <button
                    className="gateway-edit-avatar"
                    disabled={blocked || !agent}
                    aria-label={`Edit icon for ${agent?.displayName ?? "assigned agent"}`}
                    title="Edit agent icon"
                    onClick={() =>
                      void perform(async () => {
                        if (
                          agent &&
                          !(await agentChat.changeAgentAvatar(agent.id))
                        )
                          throw new Error("Agent icon could not be updated.");
                      })
                    }
                  >
                    <AgentAvatar agent={agent} />
                  </button>
                  <button
                    className={`gateway-agent ${selected?.assignment.id === assignment.id ? "selected" : ""}`}
                    key={assignment.id}
                    disabled={blocked}
                    onClick={() => void open(assignment)}
                  >
                    <span>
                      <strong>{agent?.displayName ?? "Assigned agent"}</strong>
                      <small>
                        {entity?.name ?? "Entity"} ·{" "}
                        {entity?.category ?? "Assigned"}
                      </small>
                    </span>
                    <i title="Assigned to entity" />
                  </button>
                  <button
                    className="gateway-delete"
                    disabled={blocked}
                    aria-label={`Delete agent ${agent?.displayName ?? assignment.agentId}`}
                    title="Delete agent"
                    onClick={() =>
                      void deleteAgent(
                        assignment.agentId,
                        agent?.displayName ?? "Assigned agent",
                      )
                    }
                  >
                    ×
                  </button>
                </div>
              );
            })}
          {rankedEntities !== null &&
            !assignments.some((assignment) =>
              rankedEntities.includes(assignment.entityId),
            ) && (
              <p className="gateway-muted">
                No assigned agents match these entity tags.
              </p>
            )}
        </div>
        <div className="gateway-history">
          <label className="gateway-section-heading" htmlFor="gateway-search">
            CHAT HISTORY <Icon kind="search" />
          </label>
          <input
            id="gateway-search"
            type="search"
            placeholder="Search conversations"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {gatewayChat.conversations
            .filter((c) => c.title.toLowerCase().includes(query.toLowerCase()))
            .map((c) => (
              <div
                className="gateway-deletable-row"
                key={c.id}
                onContextMenu={(event) => {
                  event.preventDefault();
                  if (!blocked)
                    setMenu({
                      id: c.id,
                      title: c.title,
                      x: event.clientX,
                      y: event.clientY,
                    });
                }}
              >
                <button
                  className="gateway-history-item"
                  key={c.id}
                  disabled={blocked}
                  onClick={() => {
                    setSelected(null);
                    setInspected(null);
                    const legacy = c.agentId !== "orbistry-universe-gateway";
                    setLegacyMode(legacy);
                    (legacy ? agentChat : gatewayChat).selectChat(c.id);
                  }}
                >
                  <Icon kind="chat" />
                  <span>
                    <strong>{c.title}</strong>
                    <small>
                      {new Date(c.updatedAt).toLocaleString(undefined, {
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </small>
                  </span>
                </button>
                {renaming === c.id && (
                  <form
                    className="gateway-rename"
                    onSubmit={(event) => {
                      event.preventDefault();
                      void perform(async () => {
                        if (
                          !(await gatewayChat.rename(renameTitle.trim(), c.id))
                        )
                          throw new Error("Rename failed.");
                        setRenaming(null);
                      });
                    }}
                  >
                    <input
                      autoFocus
                      aria-label="Conversation title"
                      maxLength={120}
                      required
                      value={renameTitle}
                      onChange={(event) => setRenameTitle(event.target.value)}
                      onKeyDown={(event) => {
                        if (event.key === "Escape") setRenaming(null);
                      }}
                    />
                    <button type="submit">Save</button>
                    <button type="button" onClick={() => setRenaming(null)}>
                      Cancel
                    </button>
                  </form>
                )}
                <button
                  aria-label={`Chat options for ${c.title}`}
                  disabled={blocked}
                  onClick={(event) => {
                    const box = event.currentTarget.getBoundingClientRect();
                    setMenu({
                      id: c.id,
                      title: c.title,
                      x: box.left,
                      y: box.bottom,
                    });
                  }}
                >
                  &hellip;
                </button>
                <button
                  className="gateway-delete"
                  disabled={blocked}
                  aria-label={`Delete chat ${c.title}`}
                  title="Delete chat"
                  onClick={() => void deleteChat(c.id, c.title)}
                >
                  ×
                </button>
              </div>
            ))}
          {!gatewayChat.conversations.length && (
            <p className="gateway-muted">
              Your conversations will appear here.
            </p>
          )}
        </div>
        <button
          className="gateway-manage"
          onClick={() => setAdvanced(true)}
          disabled={blocked}
        >
          Manage agents & conversations
        </button>
      </aside>
      <div
        className="gateway-sidebar-divider"
        role="separator"
        aria-label="Resize agent sidebar"
        aria-orientation="vertical"
        aria-valuemin={180}
        aria-valuemax={640}
        aria-valuenow={sidebarWidth ?? 300}
        tabIndex={0}
        onPointerDown={startResize}
        onPointerMove={moveResize}
        onPointerUp={stopResize}
        onPointerCancel={stopResize}
        onLostPointerCapture={() => {
          resize.current = null;
        }}
        onDoubleClick={() => changeSidebar(300)}
        onKeyDown={(event) => {
          if (["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
            event.preventDefault();
            const current =
              (gateway.current
                ?.querySelector(".gateway-sidebar")
                ?.getBoundingClientRect().width ?? 210) / 1;
            changeSidebar(
              event.key === "Home"
                ? 180
                : event.key === "End"
                  ? 640
                  : current + (event.key === "ArrowRight" ? 20 : -20),
            );
          }
        }}
      />
      <main className={`gateway-main ${hasMessages ? "has-messages" : ""}`}>
        {!selected && (
          <header className="gateway-identity">
            <img src="./orbistry-logo.png" alt="Orbistry" />
            <div>
              <strong>
                {legacyMode
                  ? "Legacy agent conversation"
                  : "Orbistry Universe Gateway"}
              </strong>
              <small>
                {legacyMode
                  ? "Preserved history / separate from Gateway"
                  : "Observe / coordinate / synthesize"}
              </small>
            </div>
            {legacyMode && (
              <button
                onClick={() => {
                  setLegacyMode(false);
                  setSelected(null);
                }}
              >
                Return to Gateway
              </button>
            )}
          </header>
        )}
        {inspected && (
          <AgentInspection
            state={inspected}
            name={
              agentChat.agents.find(
                (item) => item.id === inspected.assignment.agentId,
              )?.displayName ?? "Assigned agent"
            }
            onClose={() => setInspected(null)}
            onClear={() => void deleteAssignedChat(inspected)}
            onDirect={() => {
              // Reuse the existing assigned-chat surface after the Universe
              // backend reset; the backend derives authority from this binding.
              setSelected(inspected);
              setLegacyMode(false);
              setDraft("");
              setInspected(null);
            }}
            onWorkbench={() =>
              void props.onWorkbench(inspected.assignment.agentId, {
                id: inspected.assignment.entityId,
                name: inspected.context.entity.name,
                assignmentId: inspected.assignment.id,
                vaultPath: vaultPath!,
              })
            }
          />
        )}
        {selected && (
          <header className="gateway-chat-heading">
            <button onClick={() => setSelected(null)}>
              ? Universe Gateway
            </button>
            <button
              disabled={blocked}
              onClick={() => void deleteAssignedChat()}
            >
              Delete chat
            </button>
            <AgentAvatar agent={active} />
            <span>
              <strong>{active?.displayName ?? "Assigned agent"}</strong>
              <small>{selected.context.entity.name} · Entity chat</small>
            </span>
            <button
              disabled={blocked}
              onClick={() =>
                void perform(() =>
                  props.onWorkbench(selected.assignment.agentId, {
                    id: selected.assignment.entityId,
                    name: selected.context.entity.name,
                    assignmentId: selected.assignment.id,
                    vaultPath: vaultPath!,
                  }),
                )
              }
            >
              Workbench
            </button>
          </header>
        )}
        {!hasMessages && (
          <div className="gateway-welcome">
            <div className="gateway-eyebrow">
              <span />
              GATEWAY
            </div>
            <h1>Ask Orbistry.</h1>
            <p>Your world, connected.</p>
          </div>
        )}
        {
          <>
            {hasMessages && (
              <div
                className="gateway-transcript"
                aria-label={
                  selected ? "Assigned agent messages" : "Gateway messages"
                }
                aria-live="polite"
              >
                {transcriptMessages.map((m) => (
                  <article className={`gateway-message ${m.role}`} key={m.id}>
                    <small>
                      {m.role === "user"
                        ? "You"
                        : selected
                          ? (active?.displayName ?? "Agent")
                          : legacyMode
                            ? (chat.agent?.displayName ?? "Legacy agent")
                            : "Orbistry Universe Gateway"}
                    </small>
                    <ChatMarkdown content={m.content} />
                    <button
                      className="gateway-copy"
                      onClick={() =>
                        void navigator.clipboard
                          .writeText(m.content)
                          .catch(() => setError("Could not copy message."))
                      }
                    >
                      Copy
                    </button>
                    {!!m.references?.length && (
                      <details>
                        <summary>
                          {m.references.length} source references
                        </summary>
                        {m.references.map((r) => (
                          <p key={r.chunkId}>
                            {r.sourceId} · {r.headingPath.join(" / ")} · lines{" "}
                            {r.startLine}–{r.endLine}
                          </p>
                        ))}
                      </details>
                    )}
                  </article>
                ))}
                <div ref={tail} />
              </div>
            )}
            <div className="gateway-composer-wrap">
              {!!activity.length && (
                <details className="gateway-activity">
                  <summary>
                    {chat.busy
                      ? "Working across your Universe"
                      : "Task activity"}{" "}
                    / {activity.length} events
                  </summary>
                  {activity.map((task) => (
                    <p key={task.taskId}>
                      <strong>{task.action}</strong> / {task.status}
                      <small>
                        {task.entityId ?? task.agentId ?? task.taskId}
                        {task.error ? ` / ${task.error}` : ""}
                        <br />
                        Task {task.taskId} / {task.startedAt}
                        {task.consultationStatus && (
                          <>
                            <br />
                            Consultation: {task.consultationStatus}
                          </>
                        )}
                        {task.executionStatus && (
                          <>
                            <br />
                            Engine execution: {task.executionStatus}
                          </>
                        )}
                        {task.fulfillmentStatus && (
                          <>
                            <br />
                            Task fulfillment: {task.fulfillmentStatus}
                          </>
                        )}
                        {!!task.executionIds?.length && (
                          <>
                            <br />
                            Executions: {task.executionIds.join(", ")}
                          </>
                        )}
                        {task.pendingRequests?.map((request) => (
                          <span key={request.requestId}>
                            <br />
                            {request.engineId} / {request.operation} / Request{" "}
                            {request.requestId}
                            {approvalResults[request.requestId] ? (
                              <span>
                                {" "}
                                / {approvalResults[request.requestId]}
                              </span>
                            ) : (
                              <>
                                <button
                                  disabled={blocked}
                                  onClick={() =>
                                    void decideGatewayRequest(request, true)
                                  }
                                >
                                  {task.operationType === "market_price"
                                    ? "Approve price request"
                                    : "Approve source refresh"}
                                </button>
                                <button
                                  disabled={blocked}
                                  onClick={() =>
                                    void decideGatewayRequest(request, false)
                                  }
                                >
                                  {task.operationType === "market_price"
                                    ? "Reject price request"
                                    : "Reject source refresh"}
                                </button>
                              </>
                            )}
                          </span>
                        ))}
                      </small>
                    </p>
                  ))}
                  <details>
                    <summary>Execution metadata</summary>
                    <pre>{JSON.stringify(activity, null, 2)}</pre>
                  </details>
                </details>
              )}
              {(error || selected?.session.error || chat.runtime.error) && (
                <p role="alert" className="gateway-error">
                  {error || selected?.session.error || chat.runtime.error}
                </p>
              )}
              {selected?.session.requests
                .filter((r) => r.status === "awaiting-approval")
                .map((r) => (
                  <div className="gateway-approval" key={r.id}>
                    <span>
                      {r.engineId} / {r.operation} · {r.symbol}
                    </span>
                    {[true, false].map((approved) => (
                      <button
                        key={String(approved)}
                        disabled={blocked}
                        onClick={() =>
                          void perform(async () => {
                            const version = generation.current;
                            const state = await api!.decideEntityAgentRequest({
                              vaultPath: vaultPath!,
                              assignmentId: selected.assignment.id,
                              requestId: r.id,
                              approved,
                            });
                            if (version === generation.current)
                              setSelected(state);
                          })
                        }
                      >
                        {approved ? "Approve request" : "Cancel request"}
                      </button>
                    ))}
                  </div>
                ))}
              {panel && (
                <section
                  className="gateway-context"
                  aria-label={`${panel} selection`}
                >
                  <button
                    aria-label="Close selection"
                    onClick={() => setPanel(null)}
                  >
                    ×
                  </button>
                  {panel === "agents" ? (
                    <>
                      <h2>Inspect assigned agents</h2>
                      {agentChat.agents.map((a) => (
                        <button
                          disabled={blocked}
                          key={a.id}
                          onClick={() => {
                            const assignment = assignments.find(
                              (item) => item.agentId === a.id,
                            );
                            if (assignment) void open(assignment);
                            else {
                              setPanel(null);
                              props.onSettings();
                            }
                          }}
                        >
                          {a.displayName}
                        </button>
                      ))}
                      <button onClick={() => setAdding(true)}>
                        Create agent
                      </button>
                    </>
                  ) : panel === "tools" ? (
                    <>
                      <h2>Assigned tools</h2>
                      {selected ? (
                        selected.context.engines.map((e) => (
                          <p key={e.nodeId}>
                            <strong>
                              {e.engineId} / {e.operation}
                            </strong>
                            <br />
                            {e.reason}
                          </p>
                        ))
                      ) : (
                        <p>
                          Select an assigned agent to inspect its connected
                          engines.
                        </p>
                      )}
                    </>
                  ) : (
                    <>
                      <h2>Observation scope</h2>
                      <p>
                        {selected
                          ? `${selected.context.entity.name} · Identity ${selected.context.identityStatus} · ${selected.context.knowledge?.chunkCount ?? 0} indexed chunks`
                          : "Active Universe: browse entities and documents, find assigned specialists by tag, and ask them for information. No Context Box is required. Source documents remain unchanged."}
                      </p>
                    </>
                  )}
                </section>
              )}
              <form
                className="gateway-composer"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!blocked) void send();
                }}
              >
                <textarea
                  aria-label="Message agent"
                  placeholder="Ask about your entities, research, or operations..."
                  value={value}
                  disabled={blocked}
                  onChange={(e) =>
                    selected
                      ? setDraft(e.target.value)
                      : chat.setDraft(e.target.value)
                  }
                  onKeyDown={(e) => {
                    if (
                      e.key === "Enter" &&
                      !e.shiftKey &&
                      !e.nativeEvent.isComposing
                    ) {
                      e.preventDefault();
                      if (
                        !blocked &&
                        value.trim() &&
                        (selected || chat.canSend)
                      )
                        void send();
                    }
                  }}
                />
                <div className="gateway-composer-actions">
                  <button
                    type="button"
                    className="gateway-add"
                    aria-label="Create agent"
                    disabled={blocked}
                    onClick={() => setAdding(true)}
                  >
                    <Icon kind="plus" />
                  </button>
                  {["context", "tools", "agents"].map((kind) => (
                    <button
                      type="button"
                      key={kind}
                      disabled={blocked}
                      aria-expanded={panel === kind}
                      onClick={() => setPanel(panel === kind ? null : kind)}
                    >
                      <Icon kind={kind} />
                      {kind[0].toUpperCase() + kind.slice(1)}
                    </button>
                  ))}
                  <button
                    type="submit"
                    className="gateway-send"
                    aria-label="Send message"
                    disabled={
                      blocked || !value.trim() || (!selected && !chat.canSend)
                    }
                  >
                    <Icon kind="arrow" />
                  </button>
                </div>
              </form>
              {(busy || chat.busy) && (
                <p className="gateway-progress" role="status">
                  Agent is working…
                </p>
              )}
            </div>
          </>
        }
      </main>
      {adding && (
        <AddAgentDialog chat={agentChat} onClose={() => setAdding(false)} />
      )}
      {menu &&
        createPortal(
          <div
            className="gateway-history-menu"
            role="menu"
            ref={menuRef}
            style={{
              position: "fixed",
              left: Math.max(8, Math.min(menu.x, window.innerWidth - 190)),
              top: Math.max(8, Math.min(menu.y, window.innerHeight - 110)),
              zIndex: 1000,
            }}
          >
            <button
              role="menuitem"
              onClick={() => {
                setRenaming(menu.id);
                setRenameTitle(menu.title);
                setMenu(null);
              }}
            >
              Rename
            </button>
            <button
              role="menuitem"
              onClick={() => {
                const item = menu;
                setMenu(null);
                void deleteChat(item.id, item.title);
              }}
            >
              Delete
            </button>
          </div>,
          document.body,
        )}
      {confirmation}
    </section>
  );
}

/** Shows worker details and preserved transcripts; new requests always return through Gateway dispatch. */
function AgentInspection({
  state,
  name,
  onClose,
  onDirect,
  onClear,
  onWorkbench,
}: {
  state: EntityAgentState;
  name: string;
  onClose: () => void;
  onDirect: () => void;
  onClear: () => void;
  onWorkbench: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const previous = document.activeElement;
    dialog.current?.showModal();
    return () => {
      dialog.current?.close();
      if (previous instanceof HTMLElement && previous.isConnected)
        previous.focus();
    };
  }, []);
  return (
    <dialog
      ref={dialog}
      className="gateway-inspection"
      aria-label="Assigned agent details"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
    >
      <header>
        <h2>{name}</h2>
        <button onClick={onClose} aria-label="Close agent details">
          ?
        </button>
      </header>
      <p>
        {state.context.entity.name} / Identity {state.context.identityStatus}
      </p>
      <p>{state.context.knowledge?.chunkCount ?? 0} indexed chunks</p>
      {state.context.engines.map((engine) => (
        <p key={engine.nodeId}>
          {engine.engineId} / {engine.operation}
          <small>{engine.reason}</small>
        </p>
      ))}
      <footer>
        <button onClick={onDirect}>Ask through Gateway</button>
        <button onClick={onClear}>Delete assigned chat</button>
        <button onClick={onWorkbench}>Workbench</button>
        <button onClick={onClose}>Back to Gateway</button>
      </footer>
      <details>
        <summary>Historical assigned-agent transcript</summary>
        {state.session.messages.map((message) => (
          <p key={message.id}>
            <strong>{message.role}:</strong> {message.content}
          </p>
        ))}
      </details>
    </dialog>
  );
}
