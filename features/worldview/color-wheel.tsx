"use client";

import {
  useId,
  useState,
  type ChangeEvent,
  type KeyboardEvent,
  type PointerEvent,
} from "react";
import { hexToHsv, hsvToHex, type HsvColor } from "./chip-colors";

/** Provides a compact keyboard/pointer hue-saturation wheel, brightness slider, and validated hex field. */
export function ColorWheel({
  value,
  onChange,
}: Readonly<{ value: string; onChange: (color: string) => void }>) {
  const [hex, setHex] = useState(value);
  const hintId = useId();
  const [hsv, setHsv] = useState(hexToHsv(value));
  const angle = (hsv.hue * Math.PI) / 180;

  /** Publishes a valid wheel color and synchronizes the editable hex field. */
  function updateColor(next: HsvColor): void {
    const normalized = { ...next, hue: ((next.hue % 360) + 360) % 360 };
    const color = hsvToHex(normalized);
    setHsv(normalized);
    setHex(color);
    onChange(color);
  }

  /** Converts a pointer's local polar coordinates to clamped hue/saturation without moving the world. */
  function pickColor(event: PointerEvent<HTMLDivElement>): void {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x =
      (event.clientX - bounds.left - bounds.width / 2) / (bounds.width / 2);
    const y =
      (event.clientY - bounds.top - bounds.height / 2) / (bounds.height / 2);
    updateColor({
      ...hsv,
      hue: ((Math.atan2(y, x) * 180) / Math.PI + 360) % 360,
      saturation: Math.min(1, Math.hypot(x, y)),
    });
  }

  /** Captures a primary left-pointer wheel gesture and focuses its keyboard control. */
  function startPicking(event: PointerEvent<HTMLDivElement>): void {
    if (event.button !== 0 || !event.isPrimary) return;
    event.preventDefault();
    event.currentTarget.focus();
    event.currentTarget.setPointerCapture(event.pointerId);
    pickColor(event);
  }

  /** Continues picking only while this wheel owns the pointer capture. */
  function movePicking(event: PointerEvent<HTMLDivElement>): void {
    if (event.currentTarget.hasPointerCapture(event.pointerId))
      pickColor(event);
  }

  /** Releases a completed or canceled color gesture without committing any chip edit. */
  function stopPicking(event: PointerEvent<HTMLDivElement>): void {
    if (event.currentTarget.hasPointerCapture(event.pointerId))
      event.currentTarget.releasePointerCapture(event.pointerId);
  }

  /** Adjusts hue with left/right, saturation with up/down, and supports wheel endpoints. */
  function keyboardPick(event: KeyboardEvent<HTMLDivElement>): void {
    if (
      ![
        "ArrowLeft",
        "ArrowRight",
        "ArrowUp",
        "ArrowDown",
        "Home",
        "End",
      ].includes(event.key)
    )
      return;
    event.preventDefault();
    const step = event.shiftKey ? 15 : 5;
    updateColor({
      ...hsv,
      hue:
        event.key === "Home"
          ? 0
          : event.key === "End"
            ? 359
            : hsv.hue +
              (event.key === "ArrowRight"
                ? step
                : event.key === "ArrowLeft"
                  ? -step
                  : 0),
      saturation: Math.max(
        0,
        Math.min(
          1,
          hsv.saturation +
            (event.key === "ArrowUp"
              ? 0.05
              : event.key === "ArrowDown"
                ? -0.05
                : 0),
        ),
      ),
    });
  }

  /** Updates wheel brightness from its native accessible range input. */
  function changeBrightness(event: ChangeEvent<HTMLInputElement>): void {
    updateColor({ ...hsv, value: Number(event.target.value) / 100 });
  }

  /** Keeps partial hex input local; publishes only complete valid colors. */
  function changeHex(event: ChangeEvent<HTMLInputElement>): void {
    const next = event.target.value;
    setHex(next);
    if (/^#[0-9a-f]{6}$/i.test(next)) {
      setHsv(hexToHsv(next));
      onChange(next.toLowerCase());
    }
  }

  return (
    <fieldset className="worldview-color-picker">
      <legend>Block color</legend>
      <div className="worldview-color-layout">
        <div
          className="worldview-color-wheel"
          role="slider"
          aria-label="Color wheel"
          aria-valuemin={0}
          aria-valuemax={360}
          aria-valuenow={Math.round(hsv.hue)}
          aria-valuetext={`${value}, saturation ${Math.round(hsv.saturation * 100)} percent`}
          aria-describedby={hintId}
          tabIndex={0}
          onPointerDown={startPicking}
          onPointerMove={movePicking}
          onPointerUp={stopPicking}
          onPointerCancel={stopPicking}
          onKeyDown={keyboardPick}
        >
          <span
            className="worldview-color-disc"
            style={{ filter: `brightness(${hsv.value})` }}
          />
          <span
            className="worldview-color-marker"
            style={{
              left: `${50 + Math.cos(angle) * hsv.saturation * 50}%`,
              top: `${50 + Math.sin(angle) * hsv.saturation * 50}%`,
              background: value,
            }}
          />
        </div>
        <div className="worldview-color-values">
          <label>
            Brightness
            <input
              type="range"
              min="0"
              max="100"
              value={Math.round(hsv.value * 100)}
              onChange={changeBrightness}
            />
          </label>
          <label>
            Hex color
            <input
              name="color"
              value={hex}
              onChange={changeHex}
              required
              pattern="#[0-9a-fA-F]{6}"
              maxLength={7}
              spellCheck={false}
              aria-invalid={!/^#[0-9a-f]{6}$/i.test(hex)}
            />
          </label>
        </div>
      </div>
      <span id={hintId} className="worldview-sr-only">
        Left/right change hue. Up/down change saturation. Use Brightness to
        lighten or darken.
      </span>
    </fieldset>
  );
}
