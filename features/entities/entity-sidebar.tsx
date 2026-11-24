"use client";

import { useState } from "react";
import type { WorldViewChip } from "../worldview/chips";

/** Lists current WorldView entities without reading sources; selection delegates to the existing camera controls. */
export function EntitySidebar({
  chips,
  selectedId,
  disabled,
  onSelect,
}: Readonly<{
  chips: readonly WorldViewChip[];
  selectedId?: string;
  disabled: boolean;
  onSelect: (id: string) => void;
}>) {
  const [minimized, setMinimized] = useState(false);
  return (
    <aside
      className={`worldview-entity-sidebar${minimized ? " is-minimized" : ""}`}
      aria-label="WorldView entities"
    >
      <header>
        <strong>
          Entities <span>{chips.length}</span>
        </strong>
        <button
          type="button"
          aria-expanded={!minimized}
          aria-controls="worldview-entity-list"
          aria-label={minimized ? "Expand entity list" : "Minimize entity list"}
          onClick={() => setMinimized(!minimized)}
        >
          {minimized ? "+" : "−"}
        </button>
      </header>
      <div
        id="worldview-entity-list"
        className="worldview-entity-list"
        hidden={minimized}
      >
        {chips.length === 0 && <p>No entities yet.</p>}
        {chips.map((chip) => (
          <button
            key={chip.id}
            type="button"
            disabled={disabled}
            aria-pressed={selectedId === chip.id}
            onClick={() => onSelect(chip.id)}
            title={`Center ${chip.name}`}
          >
            <span
              className="worldview-entity-list-icon"
              style={{ backgroundColor: chip.color }}
            >
              {chip.iconImage ? (
                <img src={chip.iconImage} alt="" />
              ) : (
                chip.icon || chip.name.slice(0, 1)
              )}
            </span>
            <span className="worldview-entity-list-name">{chip.name}</span>
          </button>
        ))}
      </div>
    </aside>
  );
}
