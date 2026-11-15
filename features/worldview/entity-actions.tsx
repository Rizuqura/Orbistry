"use client";

import { useState } from "react";
import type { WorldViewChip } from "./chips";
import { chipTextColor } from "./chip-colors";

/** Displays selected entity identity/key and actions through the existing edit/source/delete flows. */
export function EntityActions({
  chip,
  disabled,
  onOpenCard,
  onAssign,
  onEdit,
  onSources,
  onDelete,
  onDeselect,
}: Readonly<{
  chip: WorldViewChip;
  disabled: boolean;
  onOpenCard: () => void;
  onAssign: () => void;
  onEdit: () => void;
  onSources: () => void;
  onDelete: () => void;
  onDeselect: () => void;
}>) {
  const [more, setMore] = useState(false);
  /** Closes the disclosure before running an existing entity action. */
  function act(action: () => void): void {
    setMore(false);
    action();
  }
  return (
    <aside
      className="worldview-entity-toolbar"
      aria-label="Selected entity actions"
    >
      <div className="worldview-entity-identity">
        {chip.iconImage ? (
          <img src={chip.iconImage} alt="" width={28} height={28} />
        ) : (
          <span
            className="entity-monogram"
            style={{
              backgroundColor: chip.color,
              color: chipTextColor(chip.color),
            }}
          >
            {chip.name.charAt(0)}
          </span>
        )}
        <div>
          <strong>{chip.name}</strong>
          {chip.category && <span>{chip.category}</span>}
          <span className="worldview-entity-key" title="Entity key">
            {chip.id}
          </span>
        </div>
        <button type="button" onClick={onDeselect} aria-label="Deselect entity">
          ×
        </button>
      </div>
      <div className="worldview-entity-buttons">
        <button
          type="button"
          className="entity-primary"
          onClick={onOpenCard}
          disabled={disabled}
        >
          View Knowledge Card
        </button>
        <button type="button" onClick={onAssign} disabled={disabled}>
          Assign Files
        </button>
        <button
          type="button"
          aria-label="More entity options"
          aria-expanded={more}
          onClick={() => setMore(!more)}
        >
          ···
        </button>
      </div>
      {more && (
        <div
          className="worldview-entity-more"
          role="group"
          aria-label="More entity actions"
        >
          <button type="button" onClick={onEdit} disabled={disabled}>
            Edit Entity
          </button>
          <button
            type="button"
            onClick={() => act(onSources)}
            disabled={disabled}
          >
            View Sources ({chip.sources?.length ?? 0})
          </button>
          <button
            type="button"
            className="worldview-delete-chip"
            onClick={onDelete}
            disabled={disabled}
          >
            Delete Chip
          </button>
          <button type="button" onClick={() => act(onDeselect)}>
            Deselect
          </button>
        </div>
      )}
    </aside>
  );
}
