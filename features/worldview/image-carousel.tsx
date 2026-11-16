"use client";
import {
  useEffect,
  useId,
  useRef,
  useState,
  type ChangeEvent,
  type KeyboardEvent,
  type MouseEvent,
} from "react";
import type {
  KnowledgeCarousel,
  KnowledgeIndexState,
  WorldViewSource,
} from "../../types/worldview";
import { requireWorldViewBridge } from "./chip-session";
import {
  carouselSlides,
  observationTime,
  type CarouselSlide,
} from "./carousel-model";
import { CarouselImage } from "./carousel-source";

/** Selects discrete observation indices with a native range and explicit-date markers, keeping the active marker visible in long collections. */
function TimelineScrubber({
  slides,
  position,
  onSelect,
}: Readonly<{
  slides: readonly CarouselSlide[];
  position: number;
  onSelect: (position: number) => void;
}>) {
  const sliderId = useId();
  const stripRef = useRef<HTMLDivElement>(null);
  const active = slides[position];
  const activeDate =
    observationTime(active.observedAt) === null
      ? `Undated observation ${position + 1}`
      : active.observedAt;

  /** Reveals keyboard/button selections horizontally while leaving an active pointer scrub stationary. */
  useEffect(
    function revealObservation() {
      const strip = stripRef.current;
      if (strip?.querySelector(".carousel-time-slider:active")) return;
      const marker = strip?.querySelector<HTMLButtonElement>(
        '[aria-current="step"]',
      );
      if (strip && marker) {
        const bounds = marker.getBoundingClientRect();
        strip.scrollLeft +=
          bounds.left -
          strip.getBoundingClientRect().left -
          (strip.clientWidth - bounds.width) / 2;
      }
    },
    [position, slides.length],
  );

  /** Publishes the native range's integer observation index immediately while scrubbing. */
  function scrub(event: ChangeEvent<HTMLInputElement>): void {
    onSelect(event.currentTarget.valueAsNumber);
  }
  /** Selects the exact observation associated with a dated or undated marker. */
  function selectMarker(event: MouseEvent<HTMLButtonElement>): void {
    onSelect(Number(event.currentTarget.dataset.position));
  }
  return (
    <div className="carousel-time-controller">
      <div className="carousel-time-status">
        <label htmlFor={sliderId}>Observation index</label>
        <output htmlFor={sliderId} aria-live="polite">
          {activeDate}
        </output>
      </div>
      <div className="carousel-timeline" ref={stripRef}>
        <div
          className={`carousel-time-track${slides.length === 1 ? " is-single" : ""}`}
          style={{
            minWidth: `${Math.max(1, slides.length - 1) * 120 + 112}px`,
          }}
        >
          <input
            id={sliderId}
            className="carousel-time-slider"
            type="range"
            min={0}
            max={slides.length - 1}
            step={1}
            value={position}
            disabled={slides.length === 1}
            aria-valuetext={`Observation ${position + 1} of ${slides.length}, ${activeDate}`}
            onChange={scrub}
          />
          <div
            className="carousel-time-markers"
            role="group"
            aria-label="Timeline observations"
            style={{
              justifyContent: slides.length === 1 ? "center" : undefined,
            }}
          >
            {slides.map((slide, number) => (
              <button
                key={slide.sourceId}
                type="button"
                data-position={number}
                onClick={selectMarker}
                aria-label={`Select ${slide.source?.filename ?? slide.sourceId}`}
                aria-current={position === number ? "step" : undefined}
                aria-pressed={position === number}
              >
                <span className="carousel-time-dot" aria-hidden="true" />
                <span>
                  {observationTime(slide.observedAt) === null
                    ? `Observation ${number + 1}`
                    : slide.observedAt}
                </span>
                <small>{slide.source?.filename ?? slide.sourceId}</small>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/** Presents Collection/Timeline originals with shared navigation, an observation-index scrubber, source metadata and human notes in the existing entity companion. */
export function ImageCarousel({
  entityId,
  vaultPath,
  group,
  sources,
  index,
  onIndexChange,
}: Readonly<{
  entityId: string;
  vaultPath: string;
  group: KnowledgeCarousel;
  sources: readonly WorldViewSource[];
  index: KnowledgeIndexState;
  onIndexChange: (value: KnowledgeIndexState) => void;
}>) {
  const slides = carouselSlides(group, sources);
  const [position, setPosition] = useState(0);
  const [drafts, setDrafts] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const activePosition = Math.min(position, Math.max(0, slides.length - 1));
  const active = slides[activePosition];
  const source = active?.source;
  const savedNote =
    index.sourceNotes?.find((note) => note.sourceId === active?.sourceId)
      ?.text ??
    active?.notes ??
    "";
  const draft = active ? (drafts[active.sourceId] ?? savedNote) : "";
  const timeline = group.view === "timeline";
  const itemLabel = timeline ? "observation" : "image";
  const undated =
    timeline &&
    slides.some((slide) => observationTime(slide.observedAt) === null);
  /** Selects a bounded slide and preserves note drafts under their source IDs. */
  function selectSlide(next: number): void {
    setPosition(Math.max(0, Math.min(slides.length - 1, next)));
    setError("");
  }
  /** Selects the preceding image. */
  function previous(): void {
    selectSlide(activePosition - 1);
  }
  /** Selects the following image. */
  function next(): void {
    selectSlide(activePosition + 1);
  }
  /** Selects a thumbnail or observation directly. */
  function selectThumbnail(event: MouseEvent<HTMLButtonElement>): void {
    selectSlide(Number(event.currentTarget.dataset.position));
  }
  /** Handles arrows only for a focused viewer, preserving editing keys and isolating canvas shortcuts. */
  function navigate(event: KeyboardEvent<HTMLElement>): void {
    if ((event.target as Element).closest("textarea,input")) return;
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      event.stopPropagation();
      selectSlide(activePosition + (event.key === "ArrowRight" ? 1 : -1));
    }
  }
  /** Reveals the active original through existing assignment authorization. */
  async function locate(): Promise<void> {
    try {
      await requireWorldViewBridge().request("knowledge-reveal", {
        vaultPath,
        id: entityId,
        sourceId: active.sourceId,
      });
    } catch (cause) {
      setError(
        cause instanceof Error
          ? cause.message
          : "Original source could not be located.",
      );
    }
  }
  /** Saves bounded human notes with optimistic concurrency, updating the parent's revision after success. */
  async function saveNotes(): Promise<void> {
    if (saving || !active) return;
    setSaving(true);
    setError("");
    try {
      const value = await requireWorldViewBridge().request<KnowledgeIndexState>(
        "knowledge-note",
        {
          vaultPath,
          id: entityId,
          sourceId: active.sourceId,
          note: draft,
          revision: index.revision,
        },
      );
      onIndexChange(value);
    } catch (cause) {
      setError(
        cause instanceof Error ? cause.message : "Notes could not be saved.",
      );
    } finally {
      setSaving(false);
    }
  }
  if (!active)
    return (
      <section
        className="knowledge-image-carousel"
        aria-label={`${group.name} image viewer`}
      >
        <header>
          <strong>{group.name}</strong>
          <span>
            {timeline ? "Timeline · 0 observations" : "Collection · 0 images"}
          </span>
        </header>
        <p>
          {timeline
            ? "No observations in this timeline."
            : "No images in this viewer."}
        </p>
      </section>
    );
  return (
    <section
      className="knowledge-image-carousel"
      aria-label={`${group.name} image viewer`}
      tabIndex={0}
      onKeyDown={navigate}
      data-carousel-id={group.id}
    >
      <header>
        <strong>{group.name}</strong>
        <span>
          {timeline ? "Timeline" : "Collection"} · {slides.length} {itemLabel}
          {slides.length === 1 ? "" : "s"}
          {undated ? " · Undated observations" : ""}
        </span>
      </header>
      <div className="carousel-stage">
        <CarouselImage
          key={active.sourceId}
          vaultPath={vaultPath}
          entityId={entityId}
          sourceId={active.sourceId}
          name={source?.filename ?? active.sourceId}
        />
      </div>
      <div className="carousel-navigation">
        <button
          type="button"
          onClick={previous}
          aria-label={`Previous image in ${group.name}`}
          disabled={activePosition === 0}
        >
          {"<"}
        </button>
        <span className="carousel-position">
          {activePosition + 1} / {slides.length}
        </span>
        <button
          type="button"
          onClick={next}
          aria-label={`Next image in ${group.name}`}
          disabled={activePosition === slides.length - 1}
        >
          {">"}
        </button>
      </div>
      {timeline ? (
        <TimelineScrubber
          slides={slides}
          position={activePosition}
          onSelect={selectSlide}
        />
      ) : (
        <div
          className="carousel-thumbnails"
          role="group"
          aria-label="Image thumbnails"
        >
          {slides.map((slide, number) => (
            <button
              key={slide.sourceId}
              type="button"
              data-position={number}
              onClick={selectThumbnail}
              aria-label={`Select ${slide.source?.filename ?? slide.sourceId}`}
              aria-pressed={activePosition === number}
            >
              <div className="carousel-thumbnail">
                <CarouselImage
                  key={slide.sourceId}
                  vaultPath={vaultPath}
                  entityId={entityId}
                  sourceId={slide.sourceId}
                  name={slide.source?.filename ?? slide.sourceId}
                />
              </div>
              <small>{slide.source?.filename ?? slide.sourceId}</small>
            </button>
          ))}
        </div>
      )}
      <div className="carousel-context" data-source-id={active.sourceId}>
        <section
          aria-label={
            timeline ? "Observation Information" : "Source Information"
          }
        >
          <h3>{timeline ? "Observation Information" : "Source Information"}</h3>
          <dl>
            <dt>Filename</dt>
            <dd>{source?.filename ?? active.sourceId}</dd>
            <dt>Format</dt>
            <dd>{source?.extension?.toUpperCase() || "Unavailable"}</dd>
            <dt>File size</dt>
            <dd>
              {source?.sizeBytes == null
                ? "Unavailable"
                : `${source.sizeBytes.toLocaleString()} bytes`}
            </dd>
            {(timeline || observationTime(active.observedAt) !== null) && (
              <>
                <dt>Observation date</dt>
                <dd>
                  {observationTime(active.observedAt) === null
                    ? "Undated"
                    : active.observedAt}
                </dd>
              </>
            )}
            {active.location && (
              <>
                <dt>Location</dt>
                <dd>{active.location}</dd>
              </>
            )}
            {active.caption && (
              <>
                <dt>Caption</dt>
                <dd>{active.caption}</dd>
              </>
            )}
          </dl>
        </section>
        <section aria-label="Notes">
          <h3>Notes</h3>
          <label>
            Notes for {source?.filename ?? active.sourceId}
            <textarea
              value={draft}
              maxLength={16000}
              disabled={saving}
              onChange={(event) =>
                setDrafts({ ...drafts, [active.sourceId]: event.target.value })
              }
            />
          </label>
          {draft !== savedNote && <small>Unsaved notes</small>}
        </section>
        <section aria-label="Analysis">
          <h3>Analysis</h3>
          <p>No analysis available</p>
        </section>
      </div>
      {error && <p role="alert">{error}</p>}
      <footer className="knowledge-utilities" aria-label="Image utilities">
        <button type="button" onClick={locate}>
          Locate Original
        </button>
        <button
          type="button"
          onClick={saveNotes}
          disabled={saving || draft === savedNote}
        >
          {saving ? "Saving…" : "Save Notes"}
        </button>
      </footer>
    </section>
  );
}
