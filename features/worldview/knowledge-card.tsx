"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type PointerEvent,
  type KeyboardEvent,
} from "react";
import type { WorldViewChip } from "./chips";
import { KnowledgeWorkspace } from "./knowledge-workspace";
import { useConfirmation } from "../dialogs/use-confirmation";

/** Hosts explicit index editing and source previews in a movable, entity-ID scoped floating window with an unsaved-draft close guard. */
export function KnowledgeCard({
  chip,
  disabled,
  vaultPath,
  onBack,
}: Readonly<{
  chip: WorldViewChip;
  disabled: boolean;
  vaultPath: string | null;
  onBack: () => void;
}>) {
  const [dirty, setDirty] = useState(false);
  const [busy, setBusy] = useState(false);
  const backRef = useRef<HTMLButtonElement>(null);
  const windowRef = useRef<HTMLElement>(null);
  const [position, setPosition] = useState({ x: 24, y: 24 });
  const drag = useRef<{ id: number; x: number; y: number } | null>(null);
  const { confirm, confirmation } = useConfirmation();

  /** Moves keyboard focus into the newly opened workspace. */
  useEffect(function focusCard() {
    backRef.current?.focus();
  }, []);

  /** Centers on open and keeps the complete window inside WorldView after viewport resizing. */
  useLayoutEffect(function fitWindow() {
    const panel = windowRef.current!;
    const parent = panel.parentElement!;
    const center = {
      x: (parent.clientWidth - panel.offsetWidth) / 2,
      y: (parent.clientHeight - panel.offsetHeight) / 2,
    };
    setPosition(center);
    const observer = new ResizeObserver(function containWindow() {
      setPosition((previous) => ({
        x: Math.max(
          0,
          Math.min(previous.x, parent.clientWidth - panel.offsetWidth),
        ),
        y: Math.max(
          0,
          Math.min(previous.y, parent.clientHeight - panel.offsetHeight),
        ),
      }));
    });
    observer.observe(parent);
    observer.observe(panel);
    return () => observer.disconnect();
  }, []);

  /** Starts a title-bar drag using viewport pixels while leaving close-button activation to the button. */
  function startWindowDrag(event: PointerEvent<HTMLElement>): void {
    if (
      event.button !== 0 ||
      !event.isPrimary ||
      (event.target as Element).closest("button")
    )
      return;
    event.preventDefault();
    event.currentTarget.focus();
    const bounds = windowRef.current!.getBoundingClientRect();
    drag.current = {
      id: event.pointerId,
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  /** Moves the floating window within its parent bounds using the captured pointer offset. */
  function moveWindow(event: PointerEvent<HTMLElement>): void {
    if (drag.current?.id !== event.pointerId) return;
    const panel = windowRef.current!;
    const parent = panel.parentElement!;
    const bounds = parent.getBoundingClientRect();
    setPosition({
      x: Math.max(
        0,
        Math.min(
          event.clientX - bounds.left - drag.current.x,
          parent.clientWidth - panel.offsetWidth,
        ),
      ),
      y: Math.max(
        0,
        Math.min(
          event.clientY - bounds.top - drag.current.y,
          parent.clientHeight - panel.offsetHeight,
        ),
      ),
    });
  }

  /** Releases title-bar capture at the end of a move or pointer cancellation. */
  function stopWindowDrag(event: PointerEvent<HTMLElement>): void {
    drag.current = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId))
      event.currentTarget.releasePointerCapture(event.pointerId);
  }

  /** Supports arrow-key window movement and Home centering from the focused title bar. */
  function moveWindowByKey(event: KeyboardEvent<HTMLElement>): void {
    if (event.target !== event.currentTarget) return;
    const deltas: Record<string, [number, number]> = {
      ArrowLeft: [-16, 0],
      ArrowRight: [16, 0],
      ArrowUp: [0, -16],
      ArrowDown: [0, 16],
    };
    if (!deltas[event.key] && event.key !== "Home") return;
    event.preventDefault();
    const panel = windowRef.current!;
    const parent = panel.parentElement!;
    const maxX = Math.max(0, parent.clientWidth - panel.offsetWidth);
    const maxY = Math.max(0, parent.clientHeight - panel.offsetHeight);
    setPosition((previous) =>
      event.key === "Home"
        ? { x: maxX / 2, y: maxY / 2 }
        : {
            x: Math.max(0, Math.min(previous.x + deltas[event.key][0], maxX)),
            y: Math.max(0, Math.min(previous.y + deltas[event.key][1], maxY)),
          },
    );
  }

  /** Confirms discarding unsaved declaration edits before closing the floating workspace. */
  async function closeCard(): Promise<void> {
    if (
      !dirty ||
      (await confirm(
        "Discard unsaved index draft changes? Save Draft keeps them for later.",
        "Close Knowledge Card",
      ))
    )
      onBack();
  }

  return (
    <section
      ref={windowRef}
      className="knowledge-card"
      role="dialog"
      aria-modal="false"
      aria-label={`${chip.name} Knowledge Card`}
      data-entity-id={chip.id}
      style={{ left: position.x, top: position.y }}
    >
      <header
        className="knowledge-card-titlebar"
        tabIndex={0}
        aria-label="Move Knowledge Card window"
        title="Drag to move. Arrow keys move the window; Home centers it."
        onPointerDown={startWindowDrag}
        onPointerMove={moveWindow}
        onPointerUp={stopWindowDrag}
        onPointerCancel={stopWindowDrag}
        onLostPointerCapture={stopWindowDrag}
        onKeyDown={moveWindowByKey}
      >
        <span>{chip.name} · Knowledge Card</span>
        <button
          type="button"
          ref={backRef}
          onClick={() => void closeCard()}
          disabled={busy}
          aria-label="Close Knowledge Card"
        >
          ×
        </button>
      </header>
      <KnowledgeWorkspace
        chip={chip}
        vaultPath={vaultPath}
        disabled={disabled}
        onDirtyChange={setDirty}
        onBusyChange={setBusy}
      />
      {confirmation}
    </section>
  );
}
