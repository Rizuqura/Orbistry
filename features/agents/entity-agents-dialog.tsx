"use client";
import { useEffect, useRef, useState } from "react";
import type { AgentConfig } from "../../types/ai";
import type {
  AgentAssignment,
  AssignmentContext,
  EntityAgentState,
} from "../../types/entity-agents";
import type { WorldViewChip } from "../worldview/chips";
import "./entity-agents.css";

/** Manages assignment references and direct per-assignment chat. The existing Workbench is opened by the application shell. */
export function EntityAgentsDialog({
  chip,
  vaultPath,
  onClose,
  onChanged,
  onWorkbench,
  onCreateAgent,
}: {
  chip: WorldViewChip;
  vaultPath: string;
  onClose: () => void;
  onChanged: (assignments: AgentAssignment[]) => void;
  onWorkbench: (agentId: string, context: AssignmentContext) => Promise<void>;
  onCreateAgent: (name: string, creationId: string) => Promise<boolean>;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const lock = useRef(false);
  const creationAttempt = useRef<{ name: string; id: string } | null>(null);
  const sendAttempt = useRef<{ message: string; id: string } | null>(null);
  const manualRequests = useRef(new Map<string, string>());
  const [agents, setAgents] = useState<AgentConfig[]>([]);
  const [assignments, setAssignments] = useState<AgentAssignment[]>([]);
  const [selectedAgent, setSelectedAgent] = useState("");
  const [newName, setNewName] = useState("");
  const [busy, setBusy] = useState(true);
  const [error, setError] = useState("");
  const [state, setState] = useState<EntityAgentState | null>(null);
  const [draft, setDraft] = useState("");
  const [toolStatus, setToolStatus] = useState("");
  const [toolResult, setToolResult] = useState<unknown>();
  const api = window.orbistryDesktop!.ai;
  useEffect(() => {
    const element = dialog.current!;
    const previous = document.activeElement;
    let alive = true;
    element.showModal();
    void Promise.all([
      api.listAgents!(),
      api.listEntityAgents({ vaultPath, entityId: chip.id }),
    ])
      .then(([profiles, records]) => {
        if (alive) {
          setAgents(profiles);
          setAssignments(records);
        }
      })
      .catch((error: Error) => {
        if (alive) setError(error.message);
      })
      .finally(() => {
        if (alive) setBusy(false);
      });
    return () => {
      alive = false;
      element.close();
      if (previous instanceof HTMLElement && previous.isConnected)
        previous.focus({ preventScroll: true });
    };
  }, [api, chip.id, vaultPath]);

  /** Serializes user actions and surfaces backend failures, preventing double assignment or overlapping chat requests. */
  async function perform(action: () => Promise<void>) {
    if (lock.current) return;
    lock.current = true;
    setBusy(true);
    setError("");
    try {
      await action();
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Agent operation failed.",
      );
    } finally {
      lock.current = false;
      setBusy(false);
    }
  }

  /** Refreshes chip counts and the current manager after an association changes. Definitions and sessions remain referenced by ID. */
  async function refreshAssignments() {
    const records = await api.listEntityAgents({ vaultPath });
    setAssignments(records.filter((item) => item.entityId === chip.id));
    onChanged(records);
  }

  /** Passes the stable assignment into the existing editor, allowing the shell to retain entity context through save and close. */
  async function openWorkbench(assignment: AgentAssignment) {
    await onWorkbench(assignment.agentId, {
      id: chip.id,
      name: chip.name,
      assignmentId: assignment.id,
      vaultPath,
    });
    onClose();
  }

  return (
    <dialog
      ref={dialog}
      className="entity-agents-dialog"
      aria-labelledby="entity-agents-title"
      onCancel={(event) => {
        event.preventDefault();
        if (!busy) onClose();
      }}
    >
      <header>
        <div>
          <small>WORLDVIEW / ASSIGNED AGENTS</small>
          <h2 id="entity-agents-title">{chip.name}</h2>
        </div>
        <button
          disabled={busy}
          onClick={onClose}
          aria-label="Close assigned agents"
        >
          Close
        </button>
      </header>
      {error && <p role="alert">{error}</p>}
      {busy && <p role="status">Processing agent request…</p>}
      {state ? (
        <section aria-label="Direct agent chat">
          <header>
            <h3>
              {agents.find((agent) => agent.id === state.assignment.agentId)
                ?.displayName ?? state.assignment.agentId}
            </h3>
            <button
              disabled={busy}
              onClick={() => {
                setState(null);
                setDraft("");
                setToolResult(undefined);
                setToolStatus("");
              }}
            >
              Manage Assigned Agents
            </button>
          </header>
          <p data-chat-entity={state.context.entity.id}>
            Assigned entity {state.context.entity.name} ·{" "}
            {state.context.entity.id}
          </p>
          <p>
            Backend Identity {state.context.identityStatus} ·{" "}
            {state.context.knowledge?.chunkCount ?? 0} indexed chunks ·{" "}
            {state.context.referenceOnlyCount} reference-only sources
          </p>
          <p>
            The agent checks the full entity identity before answering and
            refreshes it when needed. Source documents remain unchanged.
          </p>
          {!state.context.knowledgeAccess.connected && (
            <p role="status">{state.context.knowledgeAccess.reason}</p>
          )}
          <button
            disabled={busy}
            onClick={() => void perform(() => openWorkbench(state.assignment))}
          >
            Open Workbench
          </button>
          {state.session.requests
            .filter((request) => request.status === "awaiting-approval")
            .map((request) => (
              <section
                className="entity-agent-request"
                key={request.id}
                data-request-id={request.id}
                aria-label="Engine approval request"
              >
                <strong>
                  Approval required for {request.engineId} / {request.operation}{" "}
                  · {request.symbol ?? "entity source"}
                </strong>
                <p>
                  Parameters {JSON.stringify(request.parameters)} · expires{" "}
                  {request.expiresAt}
                </p>
                <button
                  disabled={busy || Date.parse(request.expiresAt) <= Date.now()}
                  onClick={() =>
                    void perform(async () => {
                      const next = await api.decideEntityAgentRequest({
                        vaultPath,
                        assignmentId: state.assignment.id,
                        requestId: request.id,
                        approved: true,
                      });
                      setState(next);
                      setToolResult(next.toolResult);
                    })
                  }
                >
                  Approve request
                </button>
                <button
                  disabled={busy}
                  onClick={() =>
                    void perform(async () => {
                      setState(
                        await api.decideEntityAgentRequest({
                          vaultPath,
                          assignmentId: state.assignment.id,
                          requestId: request.id,
                          approved: false,
                        }),
                      );
                    })
                  }
                >
                  Cancel request
                </button>
              </section>
            ))}
          {!state.providerConfigured && !state.session.error && (
            <p role="status">
              LLM provider is not configured. Select an available model in
              Settings.
            </p>
          )}
          {state.providerConfigured && (
            <p>
              Selected model {state.providerId} / {state.modelId}. Availability
              is checked when sending.
            </p>
          )}
          <button
            disabled={busy}
            onClick={() =>
              void perform(async () => {
                setState(
                  await api.openEntityAgent({
                    vaultPath,
                    assignmentId: state.assignment.id,
                  }),
                );
              })
            }
          >
            Refresh agent state
          </button>
          <div
            className="entity-agent-messages"
            role="log"
            aria-label="Agent conversation history"
            aria-busy={busy}
          >
            {state.session.messages.map((message) => (
              <article
                key={message.id}
                className={`entity-agent-message ${message.role}`}
              >
                <strong>{message.role === "user" ? "You" : "Agent"}</strong>
                <p>{message.content}</p>
                {!!message.references?.length && (
                  <details>
                    <summary>Retrieved evidence</summary>
                    {message.references.map((reference) => (
                      <p key={reference.chunkId}>
                        {reference.sourceId} · lines {reference.startLine}–
                        {reference.endLine} ·{" "}
                        {reference.headingPath.join(" / ")}
                        <br />
                        <small>
                          Chunk {reference.chunkId} · source version{" "}
                          {reference.sourceVersion} · hash{" "}
                          {reference.contentHash} · {reference.trust}
                        </small>
                      </p>
                    ))}
                  </details>
                )}
              </article>
            ))}
          </div>
          {state.session.error && <p role="alert">{state.session.error}</p>}
          <form
            onSubmit={(event) => {
              event.preventDefault();
              const message = draft.trim();
              if (message)
                void perform(async () => {
                  if (sendAttempt.current?.message !== message)
                    sendAttempt.current = { message, id: crypto.randomUUID() };
                  const next = await api.sendEntityAgent({
                    vaultPath,
                    assignmentId: state.assignment.id,
                    message,
                    requestId: sendAttempt.current.id,
                  });
                  setState(next);
                  setToolResult(next.toolResult);
                  setDraft("");
                  sendAttempt.current = null;
                });
            }}
          >
            <label>
              Message
              <textarea
                aria-label="Message assigned agent"
                maxLength={8000}
                value={draft}
                disabled={busy}
                onChange={(event) => setDraft(event.target.value)}
              />
            </label>
            <button disabled={busy || !draft.trim()}>Send message</button>
          </form>
          <section aria-label="Assignment engine availability">
            <h3>Available engines</h3>
            {!!state.context.engines.length && (
              <p>
                Capabilities reflect the applied entity index. Provider
                availability is checked during approved execution.
              </p>
            )}
            {!state.context.engines.length && (
              <p>
                Connect Engine nodes in the Workbench and Save & apply to expose
                capabilities.
              </p>
            )}
            {state.context.engines.map((engine) => (
              <div
                className="entity-agent-engine"
                key={engine.nodeId}
                data-engine-node={engine.nodeId}
              >
                <strong>
                  {engine.engineId} / {engine.operation}
                </strong>
                <small>{engine.nodeId}</small>
                <p>
                  {engine.registered ? "Registered" : "Unregistered"} ·{" "}
                  {engine.configured ? "Configured" : "Unconfigured"} ·{" "}
                  {engine.enabled ? "Enabled" : "Disabled"} ·{" "}
                  {engine.authorization}
                </p>
                <p>{engine.reason}</p>
                <small>
                  Provider check {engine.health.status}
                  {engine.health.checkedAt
                    ? ` · ${engine.health.checkedAt}`
                    : ""}
                </small>
                <small>
                  Last execution{" "}
                  {state.session.executions.findLast(
                    (execution) => execution.nodeId === engine.nodeId,
                  )?.status ?? "none"}
                </small>
                {engine.capabilities.map((capability) => (
                  <button
                    key={capability.capabilityId}
                    disabled={
                      busy ||
                      capability.availability !== "configured" ||
                      !engine.enabled
                    }
                    onClick={() =>
                      void perform(async () => {
                        setToolResult(undefined);
                        setToolStatus(
                          `Running ${engine.engineId} / ${engine.operation}`,
                        );
                        try {
                          const key = `${engine.nodeId}:${capability.capabilityId}`;
                          const requestId =
                            manualRequests.current.get(key) ??
                            crypto.randomUUID();
                          manualRequests.current.set(key, requestId);
                          const proposal = await api.proposeEntityAgent({
                            vaultPath,
                            assignmentId: state.assignment.id,
                            nodeId: engine.nodeId,
                            capabilityId: capability.capabilityId,
                            requestId,
                          });
                          const next = await api.decideEntityAgentRequest({
                            vaultPath,
                            assignmentId: state.assignment.id,
                            requestId: proposal.id,
                            approved: true,
                          });
                          setState(next);
                          setToolResult(next.toolResult);
                          const receipt = next.session.requests.find(
                            (request) => request.id === proposal.id,
                          );
                          setToolStatus(
                            `${receipt?.status ?? "unknown"} · execution ${receipt?.executionId ?? "unavailable"}`,
                          );
                          manualRequests.current.delete(key);
                        } catch (error) {
                          setToolStatus("Execution failed");
                          throw error;
                        }
                      })
                    }
                  >
                    {engine.permissionPolicy === "read-only-auto"
                      ? "Run"
                      : "Approve & run"}{" "}
                    {capability.operation} ·{" "}
                    {capability.symbol ?? "unconfigured"} ·{" "}
                    {capability.sourceId}
                  </button>
                ))}
              </div>
            ))}
            {toolStatus && <p role="status">{toolStatus}</p>}
            {!!state.session.executions.length && (
              <details>
                <summary>Execution history</summary>
                {state.session.executions.map((execution) => (
                  <div key={execution.id}>
                    {execution.engineId} / {execution.operation} ·{" "}
                    {execution.status} · {execution.timestamp}
                    <br />
                    <small>
                      {execution.id} · {execution.nodeId}
                    </small>
                    {execution.priceQuote && (
                      <dl
                        className="entity-agent-price"
                        data-execution-id={execution.id}
                      >
                        <dt>
                          {execution.priceQuote.symbol} · regular-session quote
                        </dt>
                        <dd>
                          {execution.priceQuote.price}{" "}
                          {execution.priceQuote.currency}
                        </dd>
                        <dt>Market timestamp</dt>
                        <dd>{execution.priceQuote.marketTimestamp}</dd>
                        <dt>Retrieved at</dt>
                        <dd>{execution.priceQuote.retrievedAt}</dd>
                        <dt>Source</dt>
                        <dd>{execution.priceQuote.source}</dd>
                        <dt>Reported delay</dt>
                        <dd>
                          {execution.priceQuote.delayMinutes === null
                            ? "Unknown"
                            : `${execution.priceQuote.delayMinutes} minutes`}
                        </dd>
                        <dt>Cache</dt>
                        <dd>
                          {execution.priceQuote.stale
                            ? "Stale saved observation"
                            : execution.priceQuote.cached
                              ? "Cached observation"
                              : "Fetched from provider"}
                        </dd>
                        {execution.priceQuote.warning && (
                          <>
                            <dt>Provider warning</dt>
                            <dd>{execution.priceQuote.warning}</dd>
                          </>
                        )}
                      </dl>
                    )}
                  </div>
                ))}
              </details>
            )}
            {toolResult !== undefined && (
              <pre className="entity-agent-result">
                {JSON.stringify(toolResult, null, 2)}
              </pre>
            )}
          </section>
        </section>
      ) : (
        <>
          <section aria-label="Assign Existing Agent">
            <h3>Assign Existing Agent</h3>
            <label>
              Agent
              <select
                aria-label="Existing agent"
                disabled={busy}
                value={selectedAgent}
                onChange={(event) => setSelectedAgent(event.target.value)}
              >
                <option value="">Select agent</option>
                {agents.map((agent) => (
                  <option key={agent.id} value={agent.id}>
                    {agent.displayName}
                  </option>
                ))}
              </select>
            </label>
            <button
              disabled={busy || !selectedAgent}
              onClick={() =>
                void perform(async () => {
                  await api.assignEntityAgent({
                    vaultPath,
                    entityId: chip.id,
                    agentId: selectedAgent,
                  });
                  await refreshAssignments();
                })
              }
            >
              Assign agent
            </button>
          </section>
          <section aria-label="Create New Agent">
            <h3>Create New Agent</h3>
            <label>
              Name
              <input
                aria-label="New entity agent name"
                maxLength={120}
                disabled={busy}
                value={newName}
                onChange={(event) => setNewName(event.target.value)}
              />
            </label>
            <button
              disabled={busy || !newName.trim()}
              onClick={() =>
                void perform(async () => {
                  // Reuse the creation token across partial failures so retrying assignment cannot duplicate the definition.
                  const name = newName.trim();
                  if (creationAttempt.current?.name !== name)
                    creationAttempt.current = { name, id: crypto.randomUUID() };
                  const creationId = creationAttempt.current.id;
                  if (!(await onCreateAgent(name, creationId)))
                    throw new Error(
                      "Agent creation failed. Check the agent runtime status.",
                    );
                  const assignment = await api.assignEntityAgent({
                    vaultPath,
                    entityId: chip.id,
                    agentId: `agent-${creationId}`,
                  });
                  await refreshAssignments();
                  setAgents(await api.listAgents!());
                  await openWorkbench(assignment);
                })
              }
            >
              Create New Agent
            </button>
          </section>
          {!!assignments.length && (
            <section aria-label="Manage Assigned Agents">
              <h3>Manage Assigned Agents</h3>
              {assignments.map((assignment) => (
                <article
                  className="entity-agent-assignment"
                  key={assignment.id}
                >
                  <strong>
                    {agents.find((agent) => agent.id === assignment.agentId)
                      ?.displayName ?? assignment.agentId}
                  </strong>
                  <div>
                    <button
                      disabled={busy}
                      onClick={() =>
                        void perform(async () => {
                          setState(
                            await api.openEntityAgent({
                              vaultPath,
                              assignmentId: assignment.id,
                            }),
                          );
                        })
                      }
                    >
                      Chat Agent
                    </button>
                    <button
                      disabled={busy}
                      onClick={() =>
                        void perform(() => openWorkbench(assignment))
                      }
                    >
                      Open Workbench
                    </button>
                    <button
                      disabled={busy}
                      onClick={() =>
                        void perform(async () => {
                          await api.removeEntityAgent({
                            vaultPath,
                            assignmentId: assignment.id,
                          });
                          await refreshAssignments();
                        })
                      }
                    >
                      Unassign
                    </button>
                  </div>
                </article>
              ))}
            </section>
          )}
        </>
      )}
    </dialog>
  );
}
