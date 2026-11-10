import type { ReactNode } from "react";
import { useMemo, useState } from "react";
import { useConfirmation } from "../features/dialogs/use-confirmation";
import type { StationMatchMode } from "../lib/station-projection";
import type { BrainScope, StationState } from "../types/electron";

type Props = {
  state: StationState | null;
  brainScope: BrainScope | null;
  brainScopeBusy: boolean;
  brainScopeError: string | null;
  selectedPaths: string[];
  activeStationIds: ReadonlySet<string>;
  activeContextBoxIds: ReadonlySet<string>;
  matchMode: StationMatchMode;
  busy: boolean;
  error: string | null;
  onCreate: (name: string) => void;
  onRename: (id: string, name: string) => void;
  onDelete: (id: string) => void;
  onAssign: (stationId: string, assigned: boolean) => void;
  onToggleFilter: (stationId: string) => void;
  onMatchMode: (mode: StationMatchMode) => void;
  onAddStationContext: () => void;
  contextBoxManager: ReactNode;
};

export function StationPanel(props: Readonly<Props>) {
  const { confirm, confirmation } = useConfirmation();
  const [name, setName] = useState("");
  const [query, setQuery] = useState("");
  const [packageNotice, setPackageNotice] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingName, setEditingName] = useState("");
  const selectedAssignments = useMemo(
    () =>
      props.selectedPaths.map((path) =>
        props.state?.assignments.find((item) => item.relativePath === path),
      ),
    [props.selectedPaths, props.state],
  );
  const stations = (props.state?.stations ?? []).filter((station) =>
    station.name.includes(query),
  );
  const submit = () => {
    if (name.trim()) {
      props.onCreate(name);
      setName("");
    }
  };
  const submitRename = (id: string) => {
    if (editingName.trim()) props.onRename(id, editingName);
    setEditingId(null);
    setEditingName("");
  };
  const repairOrphans = async () => {
    const bridge = window.orbistryDesktop?.stations;
    if (!bridge) return;
    const suggestions = await bridge.suggestions();
    const actionable = suggestions.filter(
      (item) => item.candidates.length === 1,
    );
    if (!actionable.length) {
      setPackageNotice(
        "No unambiguous moved-object matches were found. Assignments remain safely orphaned.",
      );
      return;
    }
    let changed = false;
    for (const item of actionable)
      if (
        await confirm(
          `Reattach ${item.relativePath} to ${item.candidates[0]}?`,
          "Reattach source",
        )
      ) {
        await bridge.reattach(item.relativePath, item.candidates[0]);
        changed = true;
      }
    if (changed) window.location.reload();
  };
  return (
    <div className="station-panel">
      <div className="pd-section-title">KNOWLEDGE STATIONS</div>
      <div className="brain-scope" aria-live="polite">
        <div className="brain-scope-state">
          <span>BRAIN SCOPE</span>
          <b data-active={props.brainScope?.mode === "active-context"}>
            {props.brainScopeBusy
              ? "PREPARING"
              : (props.brainScope?.mode.replace("-", " ").toUpperCase() ??
                "UNAVAILABLE")}
          </b>
        </div>
        {props.brainScope ? (
          <>
            <p>{props.brainScope.reason}</p>
            <small>
              {
                props.brainScope.sources.filter((source) => !source.missing)
                  .length
              }{" "}
              readable sources · ~
              {props.brainScope.estimatedTokens.toLocaleString()} tokens
            </small>
            {props.brainScope.stationNames.length ? (
              <small>{props.brainScope.stationNames.join(" + ")}</small>
            ) : null}
          </>
        ) : null}
        {props.brainScopeError ? (
          <p className="station-error">{props.brainScopeError}</p>
        ) : null}
      </div>
      {props.state?.error ? (
        <p className="station-error">{props.state.error}</p>
      ) : null}
      {props.error ? <p className="station-error">{props.error}</p> : null}
      <div className="station-create">
        <input
          aria-label="New Station"
          value={name}
          onChange={(event) => setName(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") submit();
          }}
          placeholder="New Station"
          disabled={!props.state?.writable || props.busy}
        />
        <button
          aria-label="Create Station"
          onClick={submit}
          disabled={!props.state?.writable || props.busy}
        >
          +
        </button>
      </div>
      <div className="station-search-field">
        <input
          className="station-search"
          aria-label="Filter Stations"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Filter Stations"
        />
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <circle cx="10" cy="10" r="6" />
          <path d="m15 15 5 5" />
        </svg>
      </div>
      <div className="station-modes">
        <button
          aria-pressed={props.matchMode === "any"}
          className={props.matchMode === "any" ? "on" : ""}
          onClick={() => props.onMatchMode("any")}
        >
          ANY
        </button>
        <button
          aria-pressed={props.matchMode === "all"}
          className={props.matchMode === "all" ? "on" : ""}
          onClick={() => props.onMatchMode("all")}
        >
          ALL
        </button>
      </div>
      <p className="context-summary" role="status">
        {props.activeStationIds.size + props.activeContextBoxIds.size} Station /
        Context Box filters on · {props.matchMode.toUpperCase()}
      </p>
      <button
        className="pd-action"
        disabled={
          (!props.activeStationIds.size && !props.activeContextBoxIds.size) ||
          props.busy
        }
        onClick={props.onAddStationContext}
      >
        REVIEW STATION CONTEXT
      </button>
      <p className="context-summary">
        Stations and Context Boxes share the ANY/ALL Planet filter. Review
        matching files to create a box. Filtering never changes an existing
        chat.
      </p>
      <div className="station-list">
        {stations.map((station) => {
          const assignedCount = selectedAssignments.filter((assignment) =>
            assignment?.stationIds.includes(station.id),
          ).length;
          const allAssigned =
            props.selectedPaths.length > 0 &&
            assignedCount === props.selectedPaths.length;
          const mixed = assignedCount > 0 && !allAssigned;
          return (
            <div className="station-row" key={station.id}>
              <button
                className={`station-filter${props.activeStationIds.has(station.id) ? " on" : ""}`}
                onClick={() => props.onToggleFilter(station.id)}
                title="Toggle Planet projection"
              >
                {props.activeStationIds.has(station.id) ? "●" : "○"}
              </button>
              <button
                className={`station-assign${allAssigned ? " on" : mixed ? " mixed" : ""}`}
                disabled={
                  !props.selectedPaths.length ||
                  props.busy ||
                  !props.state?.writable
                }
                onClick={() => props.onAssign(station.id, !allAssigned)}
                title="Assign to selected knowledge"
              >
                {allAssigned ? "✓" : mixed ? "–" : "+"}
              </button>
              {editingId === station.id ? (
                <input
                  className="station-rename"
                  autoFocus
                  value={editingName}
                  onChange={(event) => setEditingName(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") submitRename(station.id);
                    if (event.key === "Escape") {
                      setEditingId(null);
                      setEditingName("");
                    }
                  }}
                  aria-label={`Rename ${station.name}`}
                />
              ) : (
                <span title={station.name}>{station.name}</span>
              )}
              <small>{station.assignmentCount}</small>
              <button
                className="station-edit"
                onClick={() =>
                  editingId === station.id
                    ? submitRename(station.id)
                    : (setEditingId(station.id), setEditingName(station.name))
                }
              >
                {editingId === station.id ? "✓" : "✎"}
              </button>
              <button
                className="station-edit"
                onClick={async () => {
                  if (
                    await confirm(
                      `Delete Station “${station.name}” and remove all assignments?`,
                      "Delete Station",
                    )
                  )
                    props.onDelete(station.id);
                }}
              >
                ×
              </button>
            </div>
          );
        })}
      </div>
      <div className="pd-rule" />
      {props.contextBoxManager}
      {(props.state?.assignments.some((entry) => entry.missing) ?? false) ? (
        <>
          <p className="station-error">
            Orphaned assignments are preserved until you confirm a match.
          </p>
          <button
            className="station-secondary"
            onClick={() => void repairOrphans()}
          >
            FIND MOVED OBJECTS
          </button>
        </>
      ) : null}
      {packageNotice ? (
        <p className="context-summary">Ready: {packageNotice}</p>
      ) : null}
      {confirmation}
    </div>
  );
}
