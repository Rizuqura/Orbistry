import { useEffect, useRef } from "react";
import type { PointerEvent, ReactNode } from "react";
export interface PlanetControlsProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
  zoomPercent: number;
  onFocus: () => void;
  onReset: () => void;
  asteroidsVisible: boolean;
  onToggleAsteroids: () => void;
  flatMode: boolean;
  onToggleFlatMode: () => void;
  animationEnabled: boolean;
  animationRunning: boolean;
  onToggleAnimation: () => void;
}

export function PlanetControls({
  onZoomIn,
  onZoomOut,
  zoomPercent,
  onFocus,
  onReset,
  asteroidsVisible,
  onToggleAsteroids,
  flatMode,
  onToggleFlatMode,
  animationEnabled,
  animationRunning,
  onToggleAnimation,
}: Readonly<PlanetControlsProps>) {
  return (
    <div className="pctrl" onPointerDown={(event) => event.stopPropagation()}>
      <details className="pctrl-guide" aria-label="Planet View control guide">
        <summary>CONTROLS</summary>
        <dl>
          <div>
            <dt>Drag in Select mode</dt>
            <dd>Select a group</dd>
          </div>
          <div>
            <dt>Shift + drag</dt>
            <dd>Add to selection</dd>
          </div>
          <div>
            <dt>Shift + click</dt>
            <dd>Toggle one object</dd>
          </div>
          <div>
            <dt>Space + drag</dt>
            <dd>Pan the view</dd>
          </div>
          <div>
            <dt>Scroll</dt>
            <dd>Zoom</dd>
          </div>
          <div>
            <dt>Double-click</dt>
            <dd>Open file / focus folder</dd>
          </div>
          <div>
            <dt>Escape</dt>
            <dd>Cancel selection drag</dd>
          </div>
        </dl>
        <p>
          Use Pan mode for ordinary dragging. After selecting, use + beside a
          Station to assign the group.
        </p>
      </details>
      <button
        className="pctrl-animation"
        aria-label={
          animationEnabled ? "Turn off animation" : "Turn on animation"
        }
        aria-pressed={animationEnabled}
        onClick={onToggleAnimation}
        title="Gentle graph motion. Pauses while hovering or dragging, when hidden, or when reduced motion is enabled."
      >
        ANIMATION:{" "}
        {animationEnabled ? (animationRunning ? "ON" : "PAUSED") : "OFF"}
      </button>
      <label
        className="pctrl-check"
        title="Simple flat colors without shadows, glow, or 3D shading"
      >
        <input type="checkbox" checked={flatMode} onChange={onToggleFlatMode} />
        <span className="pctrl-box" aria-hidden="true">
          {flatMode ? "[x]" : "[ ]"}
        </span>
        FLAT VIEW (LOW GPU)
      </label>
      <label className="pctrl-check">
        <input
          type="checkbox"
          checked={asteroidsVisible}
          onChange={onToggleAsteroids}
        />
        <span className="pctrl-box" aria-hidden="true">
          {asteroidsVisible ? "[x]" : "[ ]"}
        </span>
        ASTEROID VISIBLE
      </label>
      <div className="pctrl-zoom">
        <RepeatButton onTrigger={onZoomIn} ariaLabel="Zoom in by 1 percent">
          +
        </RepeatButton>
        <RepeatButton onTrigger={onZoomOut} ariaLabel="Zoom out by 1 percent">
          −
        </RepeatButton>
        <output className="pctrl-zoom-level" aria-live="polite">
          {zoomPercent}%
        </output>
        <button onClick={onFocus} aria-label="Focus selected">
          ⌖
        </button>
        <button onClick={onReset} aria-label="Reset view">
          ⟲
        </button>
      </div>
    </div>
  );
}

function RepeatButton({
  children,
  onTrigger,
  ariaLabel,
}: Readonly<{
  children: ReactNode;
  onTrigger: () => void;
  ariaLabel: string;
}>) {
  const delayRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const repeatRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const stop = () => {
    if (delayRef.current) clearTimeout(delayRef.current);
    if (repeatRef.current) clearInterval(repeatRef.current);
    delayRef.current = null;
    repeatRef.current = null;
  };
  useEffect(() => stop, []);
  const start = (event: PointerEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    event.currentTarget.setPointerCapture(event.pointerId);
    stop();
    onTrigger();
    delayRef.current = setTimeout(() => {
      repeatRef.current = setInterval(onTrigger, 80);
    }, 320);
  };
  return (
    <button
      aria-label={ariaLabel}
      title={`${ariaLabel} · hold to repeat`}
      onPointerDown={start}
      onPointerUp={stop}
      onPointerCancel={stop}
      onPointerLeave={(event) => {
        if (event.buttons === 0) stop();
      }}
    >
      {children}
    </button>
  );
}
