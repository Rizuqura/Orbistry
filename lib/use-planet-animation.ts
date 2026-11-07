import { useCallback, useEffect, useRef, useState } from "react";

export function usePlanetAnimation(paused: boolean, nodeCount: number) {
  const [enabled, setEnabled] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);
  const [visible, setVisible] = useState(true);
  const [seconds, setSeconds] = useState(0);
  const elapsed = useRef(0);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const motionChanged = () => setReducedMotion(media.matches);
    const visibilityChanged = () => setVisible(!document.hidden);
    motionChanged();
    visibilityChanged();
    try {
      setEnabled(localStorage.getItem("planetview-animation") === "true");
    } catch {
      /* Session-only preference. */
    }
    media.addEventListener("change", motionChanged);
    document.addEventListener("visibilitychange", visibilityChanged);
    return () => {
      media.removeEventListener("change", motionChanged);
      document.removeEventListener("visibilitychange", visibilityChanged);
    };
  }, []);
  const running = enabled && !paused && !reducedMotion && visible;
  useEffect(() => {
    if (!running) return;
    const interval = nodeCount > 2000 ? 125 : nodeCount > 500 ? 83 : 50;
    let previous = performance.now();
    const timer = window.setInterval(() => {
      const now = performance.now();
      elapsed.current += Math.min(now - previous, 200) / 1000;
      previous = now;
      setSeconds(elapsed.current);
    }, interval);
    return () => window.clearInterval(timer);
  }, [running, nodeCount]);
  const toggle = useCallback(() => {
    const next = !enabled;
    setEnabled(next);
    try {
      localStorage.setItem("planetview-animation", String(next));
    } catch {
      /* Session-only preference. */
    }
  }, [enabled]);
  return { enabled, running, reducedMotion, seconds, toggle };
}
