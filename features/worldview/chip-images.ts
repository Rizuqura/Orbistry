import type { WorldViewChip } from "./chips";

/**
 * Owns decoded session icons for one canvas; sync/dispose release unused image handlers.
 * Calls onChange after decoding and onError on a failed image; never performs remote requests.
 */
export function createChipImageCache(
  onChange: () => void,
  onError: () => void,
) {
  const images = new Map<string, CanvasImageSource>();
  const pending = new Map<string, HTMLImageElement>();
  let disposed = false;

  /** Loads newly referenced data icons and removes images no longer used by any chip. */
  function sync(chips: readonly WorldViewChip[]): void {
    const sources = new Set<string>();
    for (const chip of chips) if (chip.iconImage) sources.add(chip.iconImage);
    for (const source of images.keys())
      if (!sources.has(source)) images.delete(source);
    for (const [source, image] of pending) {
      if (!sources.has(source)) {
        image.onload = null;
        image.onerror = null;
        pending.delete(source);
      }
    }
    for (const source of sources) {
      if (images.has(source) || pending.has(source)) continue;
      const image = new Image();
      pending.set(source, image);
      /** Publishes only this still-referenced image and requests a canvas repaint. */
      image.onload = function iconLoaded() {
        if (disposed || pending.get(source) !== image) return;
        pending.delete(source);
        images.set(source, image);
        onChange();
      };
      /** Reports decode failure while leaving the text icon available as a fallback. */
      image.onerror = function iconFailed() {
        if (disposed || pending.get(source) !== image) return;
        pending.delete(source);
        onError();
      };
      image.src = source;
    }
  }

  /** Releases all pending callbacks so an unmounted WorldView cannot schedule new paints. */
  function dispose(): void {
    disposed = true;
    for (const image of pending.values()) {
      image.onload = null;
      image.onerror = null;
    }
    pending.clear();
    images.clear();
  }

  return {
    images: images as ReadonlyMap<string, CanvasImageSource>,
    sync,
    dispose,
  };
}
