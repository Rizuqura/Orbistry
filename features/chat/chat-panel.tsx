"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { CSSProperties, PointerEvent as ReactPointerEvent } from "react";
import type { ChatController } from "./use-chat-runtime";
import {
  clampGeometry,
  resizeGeometry,
  type ResizeDirection,
  type PanelGeometry,
} from "./panel-geometry";
import { ConversationHistory } from "./conversation-history";
import { AgentAvatar } from "../agent/agent-avatar";
import { ChatMarkdown } from "./chat-markdown";
import { bannerStyle, wallpaperStyle } from "./chat-presentation";
import { KnowledgeProposal } from "../agent/knowledge-proposal";
import { EngineReportAttachment } from "./engine-report-attachment";

export type { ChatMessage } from "../../types/ai";
export type ChatPanelProps = {
  variant?: "panel" | "floating" | "workspace";
  controller: ChatController;
  onOpenSource: (path: string) => void;
  onExpandContext?: () => void;
  onUndock?: () => void;
  onOpenAgentSettings?: () => void;
  onOpenAgentWorkspace?: () => void;
  onToggleDetails?: () => void;
  detailsOpen?: boolean;
  minimizeForCanvas?: boolean;
};

export function ChatPanel({
  variant = "panel",
  controller: chat,
  onOpenSource,
  onExpandContext,
  onUndock,
  onOpenAgentSettings,
  onOpenAgentWorkspace,
  onToggleDetails,
  detailsOpen,
  minimizeForCanvas,
}: Readonly<ChatPanelProps>) {
  const isFloating = variant === "floating";
  const agentName = chat.agent?.displayName ?? "Wonnyy Agent";
  const [closed, setClosed] = useState(false);
  const [knowledgeRunId, setKnowledgeRunId] = useState<string | null>(null);
  useEffect(() => setKnowledgeRunId(null), [chat.conversation?.id]);
  const [isMinimized, setIsMinimized] = useState(false);
  useEffect(() => {
    if (minimizeForCanvas) setIsMinimized(true);
  }, [minimizeForCanvas]);
  useEffect(() => {
    if (chat.openAgentVersion) {
      setClosed(false);
      setIsMinimized(false);
    }
  }, [chat.openAgentVersion]);
  const [position, setPosition] = useState<{
    left: number;
    top: number;
  } | null>(null);
  const [size, setSize] = useState<{ width: number; height: number } | null>(
    null,
  );
  const panelRef = useRef<HTMLElement>(null);
  const geometryRef = useRef<PanelGeometry | null>(null);
  if (position && size)
    geometryRef.current = { x: position.left, y: position.top, ...size };
  const threadRef = useRef<HTMLDivElement>(null);
  const composerRef = useRef<HTMLTextAreaElement>(null);
  // Restore focus only after an action inside this chat surface. Context
  // updates and model events must not steal focus from Explorer or Search.
  const focusComposer = () =>
    composerRef.current?.focus({ preventScroll: true });
  const followTail = useRef(true);
  useEffect(() => {
    const panel = panelRef.current;
    // Planet View uses a native wheel listener. Stop it at the chat surface
    // before React's delegated event handler would run; preserve native scrolling.
    const containWheel = (event: WheelEvent) => event.stopPropagation();
    panel?.addEventListener("wheel", containWheel, { passive: true });
    return () => panel?.removeEventListener("wheel", containWheel);
  }, [closed]);
  const dragRef = useRef<{ offsetX: number; offsetY: number } | null>(null);
  const resizeRef = useRef<{
    direction: ResizeDirection;
    startX: number;
    startY: number;
    width: number;
    height: number;
    left: number;
    top: number;
  } | null>(null);
  const messages = chat.conversation?.messages ?? [];
  const transcript = useMemo(() => {
    const attempts = new Map(
      chat.conversation?.attempts.map((attempt) => [
        attempt.userMessageId,
        attempt,
      ]),
    );
    let previousModel: string | undefined;
    return (chat.conversation?.messages ?? []).map((message) => {
      const identity = message.model
        ? `${message.provider ?? "ollama"}/${message.model}`
        : undefined;
      const modelChanged = Boolean(
        identity && previousModel && identity !== previousModel,
      );
      if (identity) previousModel = identity;
      return { message, modelChanged, attempt: attempts.get(message.id) };
    });
  }, [chat.conversation]);
  const latest = chat.conversation?.attempts.at(-1);
  const neutral = ["CANCELLED", "CONTEXT_INSUFFICIENT"].includes(
    chat.runtime.state,
  );
  const error = chat.runtime.error ?? latest?.error?.message;
  const [elapsed, setElapsed] = useState(0);
  useEffect(() => {
    if (!chat.runtime.requestId) return;
    const tick = () =>
      setElapsed(
        Math.max(
          0,
          (Date.now() - (chat.runtime.status?.startedAt ?? Date.now())) / 1000,
        ),
      );
    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, [chat.runtime.requestId, chat.runtime.status?.startedAt]);
  const progress = chat.runtime.status?.progress;
  const pulling = chat.pulls.find((p) => p.phase === "model-pulling");
  const statusLabel = !chat.conversation
    ? "NO ACTIVE CHAT"
    : !chat.attached
      ? chat.unavailableReason
        ? "CONTEXT INVALID"
        : "LOADING CONTEXT"
      : chat.runtime.state === "CONTEXT_TOO_LARGE"
        ? "CONTEXT BUDGET EXCEEDED"
        : chat.busy &&
            chat.runtime.diagnostics?.timeoutRetryCount === 1 &&
            ["MODEL_LOADING", "GENERATING"].includes(chat.runtime.state)
          ? "RETRYING REQUEST · ATTEMPT 2/2"
          : chat.runtime.state === "CANCELLED"
            ? "RUN CANCELLED"
            : chat.runtime.state === "MODEL_MISSING"
              ? "MODEL NOT INSTALLED"
              : chat.runtime.state.replaceAll("_", " ");
  useEffect(() => {
    if (followTail.current)
      threadRef.current?.scrollTo({ top: threadRef.current.scrollHeight });
  }, [messages, chat.runtime.content]);
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!chat.busy) chat.submit();
  };

  const startDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (
      !isFloating ||
      event.button !== 0 ||
      (event.target as Element).closest("button")
    )
      return;
    const panel = panelRef.current;
    const parent = panel?.offsetParent as HTMLElement | null;
    if (!panel || !parent) return;
    event.preventDefault();
    event.stopPropagation();
    const rect = panel.getBoundingClientRect();
    const parentRect = parent.getBoundingClientRect();
    setPosition({
      left: rect.left - parentRect.left,
      top: rect.top - parentRect.top,
    });
    dragRef.current = {
      offsetX: event.clientX - rect.left,
      offsetY: event.clientY - rect.top,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const drag = (event: ReactPointerEvent<HTMLDivElement>) => {
    const origin = dragRef.current;
    const panel = panelRef.current;
    const parent = panel?.offsetParent as HTMLElement | null;
    if (!origin || !panel || !parent) return;
    const parentRect = parent.getBoundingClientRect();
    const maxLeft = Math.max(0, parentRect.width - panel.offsetWidth);
    const maxTop = Math.max(0, parentRect.height - panel.offsetHeight);
    setPosition({
      left: Math.min(
        maxLeft,
        Math.max(0, event.clientX - parentRect.left - origin.offsetX),
      ),
      top: Math.min(
        maxTop,
        Math.max(0, event.clientY - parentRect.top - origin.offsetY),
      ),
    });
  };

  const stopDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    dragRef.current = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId))
      event.currentTarget.releasePointerCapture(event.pointerId);
  };

  const startResize = (
    event: ReactPointerEvent<HTMLDivElement>,
    direction: ResizeDirection,
  ) => {
    const panel = panelRef.current,
      parent = panel?.offsetParent as HTMLElement | null;
    if (!isFloating || !panel || !parent || event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();
    const rect = panel.getBoundingClientRect(),
      bounds = parent.getBoundingClientRect();
    const left = rect.left - bounds.left,
      top = rect.top - bounds.top;
    setPosition({ left, top });
    setSize({ width: rect.width, height: rect.height });
    resizeRef.current = {
      direction,
      startX: event.clientX,
      startY: event.clientY,
      width: rect.width,
      height: rect.height,
      left,
      top,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };
  const resize = (event: ReactPointerEvent<HTMLDivElement>) => {
    const start = resizeRef.current,
      parent = panelRef.current?.offsetParent as HTMLElement | null;
    if (!start || !parent) return;
    const g = resizeGeometry(
      { x: start.left, y: start.top, width: start.width, height: start.height },
      start.direction,
      event.clientX - start.startX,
      event.clientY - start.startY,
      parent.clientWidth,
      parent.clientHeight,
    );
    setPosition({ left: g.x, top: g.y });
    setSize({ width: g.width, height: g.height });
  };
  const stopResize = (event: ReactPointerEvent<HTMLDivElement>) => {
    resizeRef.current = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId))
      event.currentTarget.releasePointerCapture(event.pointerId);
  };

  const resetGeometry = () => {
    const parent = panelRef.current?.offsetParent as HTMLElement | null;
    if (!parent) return;
    const g = clampGeometry(
      { x: parent.clientWidth - 460, y: 24, width: 440, height: 560 },
      parent.clientWidth,
      parent.clientHeight,
    );
    setPosition({ left: g.x, top: g.y });
    setSize({ width: g.width, height: g.height });
  };
  useEffect(() => {
    if (!isFloating) return;
    const parent = panelRef.current?.offsetParent as HTMLElement | null;
    if (!parent) return;
    let saved;
    try {
      saved = JSON.parse(
        localStorage.getItem("qterminal-agent-geometry") ?? "null",
      );
    } catch {}
    const valid =
      saved &&
      ["x", "y", "width", "height"].every((k) => Number.isFinite(saved[k]));
    const g = clampGeometry(
      valid
        ? saved
        : { x: parent.clientWidth - 460, y: 24, width: 440, height: 560 },
      parent.clientWidth,
      parent.clientHeight,
    );
    geometryRef.current = g;
    setPosition({ left: g.x, top: g.y });
    setSize({ width: g.width, height: g.height });
    const observer = new ResizeObserver(() => {
      const panel = panelRef.current;
      if (!panel) return;
      const r = panel.getBoundingClientRect(),
        p = parent.getBoundingClientRect();
      const next = clampGeometry(
        geometryRef.current ?? {
          x: r.left - p.left,
          y: r.top - p.top,
          width: r.width,
          height: r.height,
        },
        parent.clientWidth,
        parent.clientHeight,
      );
      setPosition({ left: next.x, top: next.y });
      setSize({ width: next.width, height: next.height });
    });
    observer.observe(parent);
    return () => observer.disconnect();
  }, [isFloating, closed]);
  useEffect(() => {
    if (!isFloating || !position || !size || isMinimized) return;
    try {
      localStorage.setItem(
        "qterminal-agent-geometry",
        JSON.stringify({ x: position.left, y: position.top, ...size }),
      );
    } catch {}
  }, [isFloating, position, size, isMinimized]);
  useEffect(() => {
    if (chat.conversation && !chat.creatingChat) focusComposer();
  }, [chat.conversation?.id, chat.creatingChat]);
  const floatingStyle = isFloating
    ? ({
        ...(position
          ? { left: position.left, right: "auto", top: position.top }
          : {}),
        ...(size
          ? { width: size.width, height: isMinimized ? undefined : size.height }
          : {}),
      } as CSSProperties)
    : undefined;

  if (!chat.agent) return null;
  if (closed)
    return (
      <button
        className="agent-reopen"
        onPointerDown={(event) => event.stopPropagation()}
        onPointerUp={(event) => event.stopPropagation()}
        onKeyDown={(event) => event.stopPropagation()}
        onClick={(event) => {
          event.stopPropagation();
          setClosed(false);
        }}
      >
        {`Open ${agentName}`}
      </button>
    );
  return (
    <aside
      ref={panelRef}
      style={floatingStyle}
      className={`chat-panel${isFloating ? " chat-panel-floating" : ""}${isFloating && isMinimized ? " chat-panel-minimized" : ""}`}
      aria-label={agentName}
      onPointerDown={(event) => event.stopPropagation()}
      onPointerMove={(event) => event.stopPropagation()}
      onPointerUp={(event) => event.stopPropagation()}
      onWheel={(event) => event.stopPropagation()}
      onClick={(event) => event.stopPropagation()}
      onDoubleClick={(event) => event.stopPropagation()}
      onKeyDown={(event) => event.stopPropagation()}
    >
      <div
        className="chat-header"
        style={bannerStyle(chat.agent?.appearance?.bannerUrl)}
        onPointerDown={startDrag}
        onPointerMove={drag}
        onPointerUp={stopDrag}
        onPointerCancel={stopDrag}
      >
        <AgentAvatar agent={chat.agent} />
        <span className="agent-drag-title">
          {agentName}
          <span className="agent-chat-subtitle">
            {chat.conversation?.engineOnly
              ? "Engine report retrieval"
              : chat.agent?.description || "Strict Context Analysis"}{" "}
            ·{" "}
            {chat.runtime.state === "CONTEXT_TOO_LARGE"
              ? "Over Budget"
              : chat.unavailableReason
                ? "Missing Sources"
                : (chat.conversation?.contextFile?.relativePath ??
                  chat.contextBoxes.find(
                    (box) => box.id === chat.conversation?.contextBoxId,
                  )?.name ??
                  "No Context")}
          </span>
        </span>
        <span className="chat-runtime-status" role="status">
          {statusLabel}
          {chat.runtime.requestId ? ` · ${elapsed.toFixed(0)}s` : ""}
        </span>
        {!isFloating && onUndock && (
          <button title="Undock agent panel" onClick={onUndock}>
            Undock
          </button>
        )}
        {isFloating && (
          <button title="Reset panel size and position" onClick={resetGeometry}>
            Reset
          </button>
        )}
        {variant === "workspace" && (
          <button disabled={chat.busy} onClick={chat.newChat}>
            + New Chat
          </button>
        )}
        {onToggleDetails && (
          <button onClick={onToggleDetails} aria-expanded={detailsOpen}>
            Context / Details
          </button>
        )}
        {onOpenAgentSettings && variant !== "workspace" && (
          <button
            onClick={onOpenAgentSettings}
            aria-label="Open agent settings"
          >
            Settings
          </button>
        )}
        {variant !== "workspace" && onOpenAgentWorkspace && (
          <button onClick={onOpenAgentWorkspace}>Open in Agent</button>
        )}
        {variant !== "workspace" && (
          <button
            title={`Close ${agentName}`}
            className="chat-close-control"
            aria-label={`Close ${agentName}`}
            onClick={() => setClosed(true)}
          >
            ×
          </button>
        )}
        {isFloating && (
          <button
            className="chat-window-control"
            type="button"
            onClick={() => {
              if (isMinimized) {
                const parent = panelRef.current
                  ?.offsetParent as HTMLElement | null;
                if (parent && geometryRef.current) {
                  const next = clampGeometry(
                    geometryRef.current,
                    parent.clientWidth,
                    parent.clientHeight,
                  );
                  setPosition({ left: next.x, top: next.y });
                  setSize({ width: next.width, height: next.height });
                }
              }
              setIsMinimized(!isMinimized);
            }}
            aria-label={
              isMinimized ? "Restore chat window" : "Minimize chat window"
            }
            title={isMinimized ? "Restore chat window" : "Minimize chat window"}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              aria-hidden="true"
              focusable="false"
            >
              {isMinimized ? (
                <rect x="3" y="3" width="10" height="10" rx="1" />
              ) : (
                <path d="M3 8h10" />
              )}
            </svg>
          </button>
        )}
      </div>
      <details className="chat-context">
        <summary>Model and attached source details</summary>
        <span>
          {chat.effectiveSettings?.providerId !== "ollama" && !!chat.registry
            ? `ONLINE · ${chat.effectiveSettings?.providerId === "openrouter" ? "OpenRouter" : chat.effectiveSettings?.providerId === "nvidia" ? "NVIDIA NIM" : "Gemini"}`
            : "LOCAL · Ollama"}{" "}
          · {chat.effectiveSettings?.modelId ?? "Choose a model in Settings"}
        </span>
        <p className="chat-privacy">
          {chat.effectiveSettings?.providerId !== "ollama" && !!chat.registry
            ? `Approved sources, configured agent references, your question, and included conversation history are sent to ${chat.effectiveSettings?.providerId === "openrouter" ? "OpenRouter and its model providers" : chat.effectiveSettings?.providerId === "nvidia" ? "NVIDIA" : "Google Gemini"}.`
            : "Inference runs on this device."}
        </p>
        <p className="chat-memory">
          Model memory: up to 12 recent exchanges, fewer when the context limit
          is reached. Only exchanges using the current source versions are
          included. Saved history remains available.
          {typeof chat.runtime.diagnostics?.droppedExchanges === "number" &&
          chat.runtime.diagnostics.droppedExchanges > 0
            ? ` Last answer omitted ${chat.runtime.diagnostics.droppedExchanges} earlier exchanges.`
            : ""}
        </p>
        <strong>
          Attached sources:{" "}
          {chat.context?.sources
            .map((source) => source.relativePath)
            .join(", ") ?? "None ready"}
        </strong>
        {!chat.attached && chat.conversation && (
          <div className="chat-detached">
            Viewing:{" "}
            {chat.conversation.contextIdentity.sources
              .map((source) => source.relativePath)
              .join(", ")}
            <button
              disabled={chat.busy}
              onClick={() => {
                if (
                  chat.conversation?.contextBoxId ||
                  chat.conversation?.contextFile
                )
                  chat.resume();
                else chat.newChat();
                focusComposer();
              }}
            >
              {chat.conversation.contextBoxId || chat.conversation.contextFile
                ? "Recheck attached sources"
                : "Create bound chat"}
            </button>
          </div>
        )}
        {chat.unavailableReason && <p>{chat.unavailableReason}</p>}
      </details>
      <div className="agent-provider-indicator">
        {chat.effectiveSettings?.providerId === "ollama"
          ? "LOCAL / Ollama"
          : chat.registry
            ? "ONLINE / " +
              (chat.effectiveSettings!.providerId === "openrouter"
                ? "OpenRouter"
                : chat.effectiveSettings!.providerId === "nvidia"
                  ? "NVIDIA"
                  : "Gemini")
            : "Checking provider"}{" "}
        / {chat.context?.sources.length ?? 0} attached{" "}
        {chat.context?.sources.length === 1 ? "file" : "files"}
      </div>
      <ConversationHistory
        chat={chat}
        onCompose={focusComposer}
        workspace={variant === "workspace"}
        onManageContext={onExpandContext}
      />
      {chat.unavailableReason && (
        <div className="chat-notice" role="status">
          {chat.unavailableReason}
          <button disabled={chat.busy} onClick={chat.newChat}>
            Create bound chat
          </button>
        </div>
      )}
      {!chat.conversation && (
        <div className="agent-welcome">
          <strong>{agentName}</strong>
          <p>Analyze only the knowledge you explicitly attach.</p>
          <p>
            Create a box in Planet View’s context manager, or choose an existing
            box to begin.
          </p>
        </div>
      )}
      <div
        className="chat-thread"
        style={wallpaperStyle(chat.agent?.appearance)}
        data-wallpaper={chat.agent?.appearance?.wallpaperMode ?? "none"}
        ref={threadRef}
        aria-live="polite"
        onScroll={() => {
          const node = threadRef.current;
          if (node)
            followTail.current =
              node.scrollHeight - node.scrollTop - node.clientHeight < 45;
        }}
      >
        {!!chat.conversation && !messages.length && (
          <p className="chat-message-system">
            {chat.conversation?.engineOnly
              ? "Ask for a research PDF from the agent?s engine. No research context is required."
              : "Ask a question about the approved sources."}
          </p>
        )}
        {transcript.map(({ message, modelChanged, attempt }) => (
          <article
            key={message.id}
            data-message-id={message.id}
            className={`chat-message chat-message-${message.role}`}
          >
            {modelChanged && (
              <div className="chat-model-boundary">
                Model changed to{" "}
                {message.provider === "gemini" ||
                message.provider === "nvidia" ||
                message.provider === "openrouter"
                  ? `ONLINE · ${message.provider === "openrouter" ? "OpenRouter" : message.provider === "nvidia" ? "NVIDIA NIM" : "Gemini"}`
                  : "LOCAL · Ollama"}{" "}
                · {message.model}
              </div>
            )}
            <div className="chat-message-meta">
              <span className="chat-message-role">
                {message.role === "assistant" && (
                  <AgentAvatar agent={chat.agent} />
                )}
                {message.role === "user" ? "YOU" : agentName}
              </span>
              <time dateTime={message.createdAt}>
                {new Date(message.createdAt).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </time>
            </div>
            {message.role === "assistant" ? (
              message.content
                .split(
                  /(\n\n(?:Recomputed earlier analysis\. )?Source: "[^\n]+"; \d+\/\d+ rows matched;[\s\S]*$)/,
                )
                .map((part, index) =>
                  index === 1 ? (
                    <div className="chat-source-evidence" key={index}>
                      <ChatMarkdown content={part} />
                    </div>
                  ) : (
                    <ChatMarkdown key={index} content={part} />
                  ),
                )
            ) : (
              <p>{message.content}</p>
            )}
            {attempt &&
              ["failed", "cancelled", "interrupted"].includes(
                attempt.status,
              ) && (
                <span className="chat-run-id" title={attempt.error?.message}>
                  {attempt.status === "cancelled"
                    ? "Response stopped"
                    : attempt.status === "interrupted"
                      ? "Response interrupted"
                      : "Response failed"}
                </span>
              )}
            {message.engineReports?.map((report) => (
              <EngineReportAttachment
                key={report.runId}
                report={report}
                agentId={chat.conversation?.agentId ?? chat.activeAgentId}
              />
            ))}
            {message.contextBox && (
              <small className="chat-context-provenance">
                Context: {message.contextBox.name}
                {message.knowledgeBox
                  ? ` + ${message.knowledgeBox.name}`
                  : ""}{" "}
                / revision {message.contextBox.revision}
              </small>
            )}
            {message.contextFile && (
              <small className="chat-context-provenance">
                Context file: {message.contextFile.relativePath}
                {message.knowledgeBox ? ` + ${message.knowledgeBox.name}` : ""}
              </small>
            )}

            {message.sources?.length ? (
              <div className="chat-sources">
                <span>
                  {"SOURCES USED"} · {message.sources.length}
                </span>
                {message.sources.map((source) => (
                  <button
                    key={source.sourceId}
                    title={`Version used: SHA-256 ${source.contentHash}. Opens the current file; historical source text is not stored.`}
                    onClick={() => onOpenSource(source.relativePath)}
                  >
                    {source.relativePath}
                  </button>
                ))}
              </div>
            ) : null}
            {message.runId && (
              <span className="chat-run-id">
                RUN {message.runId.slice(0, 8)} · {message.model}
              </span>
            )}
            {message.role === "assistant" &&
              !message.engineToolTurn &&
              message.runId &&
              chat.conversation?.agentId === "wonnyy-agent" &&
              chat.agent?.skills.includes("knowledge-consolidation") && (
                <button
                  disabled={chat.busy}
                  onClick={() => setKnowledgeRunId(message.runId!)}
                >
                  Create knowledge proposal
                </button>
              )}
            <details
              className="chat-message-actions"
              name="chat-message-options"
              onKeyDown={(event) => {
                if (event.key === "Escape") {
                  event.preventDefault();
                  event.currentTarget.open = false;
                  event.currentTarget.querySelector("summary")?.focus();
                }
              }}
            >
              <summary
                aria-label={`Message options for ${message.role === "user" ? "your message" : "agent response"}`}
                title="Message options"
              >
                ⋯
              </summary>
              <button
                type="button"
                disabled={chat.busy}
                onClick={(event) => {
                  event.currentTarget
                    .closest("details")
                    ?.removeAttribute("open");
                  chat.deleteMessage(message.id);
                }}
              >
                {message.role === "user"
                  ? "Delete message and replies"
                  : "Delete message"}
              </button>
            </details>
          </article>
        ))}
        {chat.runtime.requestId && (
          <article
            className="chat-message chat-message-assistant"
            aria-label="Provisional response"
          >
            <span className="chat-message-role">
              {chat.runtime.content
                ? `${agentName} · IN PROGRESS`
                : statusLabel}
            </span>
            <p>
              {chat.runtime.content ||
                chat.runtime.status?.message ||
                statusLabel}
            </p>
            {progress && (
              <small>
                {progress.current}
                {progress.total !== undefined
                  ? " / " + progress.total
                  : ""}{" "}
                {progress.unit}
              </small>
            )}
            {!!chat.runtime.status?.context?.estimatedTokens && (
              <small>
                {" "}
                · ~
                {chat.runtime.status.context.estimatedTokens.toLocaleString()}{" "}
                tokens estimated
              </small>
            )}
          </article>
        )}
      </div>
      {pulling && (
        <div className="chat-notice" role="status">
          DOWNLOADING MODEL · {pulling.model} · {pulling.message}
          <button onClick={() => chat.cancelPull(pulling.model)}>CANCEL</button>
        </div>
      )}
      {chat.runtime.state === "MODEL_MISSING" &&
        chat.effectiveSettings?.providerId === "ollama" && (
          <div className="chat-notice">
            <button
              disabled={!!pulling || chat.busy}
              onClick={() =>
                void chat.downloadModel(
                  chat.effectiveSettings?.modelId ?? "qwen3:4b",
                )
              }
            >
              DOWNLOAD MODEL · {chat.effectiveSettings?.modelId ?? "qwen3:4b"}
            </button>
          </div>
        )}
      {chat.runtime.state === "CONTEXT_INSUFFICIENT" && (
        <div className="chat-notice" role="status">
          CONTEXT INSUFFICIENT · Add the missing evidence to this Context Box,
          or explicitly switch boxes before your next message. Checked:{" "}
          {chat.context?.sources.map((s) => s.relativePath).join(", ")}
          {onExpandContext && (
            <button onClick={onExpandContext}>REVIEW CONTEXT</button>
          )}
        </div>
      )}
      <form className="chat-composer" onSubmit={submit}>
        <textarea
          ref={composerRef}
          value={chat.draft}
          maxLength={8000}
          rows={2}
          onChange={(event) => chat.setDraft(event.target.value)}
          onKeyDown={(event) => {
            if (
              event.key !== "Enter" ||
              event.shiftKey ||
              event.nativeEvent.isComposing
            )
              return;
            event.preventDefault();
            if (!chat.busy) event.currentTarget.form?.requestSubmit();
          }}
          placeholder={
            chat.retryOnSubmit
              ? "Press Enter to retry the last message…"
              : chat.conversation?.engineOnly
                ? "Get my October 2026 macro report…"
                : "Ask about the attached Context Box…"
          }
          aria-label="Chat question"
        />
        {chat.runtime.requestId ? (
          <button
            type="button"
            className="chat-stop"
            onClick={chat.stop}
            disabled={chat.runtime.state === "CANCELLING"}
            aria-label="Stop response"
          >
            ■
          </button>
        ) : (
          <button
            type="submit"
            disabled={
              chat.busy ||
              !!pulling ||
              !chat.canSend ||
              (!chat.draft.trim() && !chat.retryOnSubmit)
            }
            aria-label="Send message"
          >
            ↑
          </button>
        )}
      </form>
      {error && (
        <div
          className={neutral ? "chat-notice" : "chat-notice chat-error"}
          role={neutral ? "status" : "alert"}
        >
          <span>{error}</span>
          {!neutral &&
            latest &&
            ["failed", "interrupted"].includes(latest.status) && (
              <button
                onClick={chat.retry}
                disabled={chat.busy || !chat.attached}
              >
                Retry
              </button>
            )}
        </div>
      )}
      {isFloating &&
        !isMinimized &&
        (["n", "s", "w", "e", "nw", "ne", "sw", "se"] as ResizeDirection[]).map(
          (direction) => (
            <div
              key={direction}
              className={"agent-resize agent-resize-" + direction}
              role="separator"
              tabIndex={0}
              aria-label={"Resize chat " + direction}
              aria-valuenow={Math.round(
                direction.includes("e") || direction.includes("w")
                  ? (size?.width ?? 440)
                  : (size?.height ?? 560),
              )}
              onPointerDown={(event) => startResize(event, direction)}
              onPointerMove={resize}
              onPointerUp={stopResize}
              onPointerCancel={stopResize}
              onLostPointerCapture={() => {
                resizeRef.current = null;
              }}
              onKeyDown={(event) => {
                if (event.key === "Home") {
                  event.preventDefault();
                  resetGeometry();
                  return;
                }
                if (
                  !["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(
                    event.key,
                  ) ||
                  !position ||
                  !size
                )
                  return;
                event.preventDefault();
                const parent = panelRef.current
                  ?.offsetParent as HTMLElement | null;
                if (!parent) return;
                const g = resizeGeometry(
                  { x: position.left, y: position.top, ...size },
                  direction,
                  event.key === "ArrowLeft"
                    ? -20
                    : event.key === "ArrowRight"
                      ? 20
                      : 0,
                  event.key === "ArrowUp"
                    ? -20
                    : event.key === "ArrowDown"
                      ? 20
                      : 0,
                  parent.clientWidth,
                  parent.clientHeight,
                );
                setPosition({ left: g.x, top: g.y });
                setSize({ width: g.width, height: g.height });
              }}
            />
          ),
        )}
      {knowledgeRunId && (
        <KnowledgeProposal
          key={knowledgeRunId}
          chat={chat}
          runId={knowledgeRunId}
          onClose={() => setKnowledgeRunId(null)}
        />
      )}
    </aside>
  );
}
