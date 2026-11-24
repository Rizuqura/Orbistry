import type {
  CarouselObservation,
  KnowledgeCarousel,
  WorldViewSource,
} from "../../types/worldview";
export type CarouselSlide = CarouselObservation &
  Readonly<{ source?: WorldViewSource }>;

/** Validates explicitly supplied ISO observation dates, including calendar-day validation. Never uses filenames or filesystem dates. */
export function observationTime(value?: string): number | null {
  if (
    !value ||
    !/^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2}))?$/.test(
      value,
    )
  )
    return null;
  const day = new Date(`${value.slice(0, 10)}T00:00:00Z`);
  if (
    !Number.isFinite(day.getTime()) ||
    day.toISOString().slice(0, 10) !== value.slice(0, 10)
  )
    return null;
  const time = Date.parse(value);
  return Number.isFinite(time) ? time : null;
}

/** Resolves viewer metadata. Timeline sorts only fully dated sets, otherwise retaining declared order. Pure. */
export function carouselSlides(
  group: KnowledgeCarousel,
  sources: readonly WorldViewSource[],
): CarouselSlide[] {
  const slides = group.sourceIds.map((sourceId) => ({
    ...group.observations?.find((item) => item.sourceId === sourceId),
    sourceId,
    source: sources.find((source) => source.sourceId === sourceId),
  }));
  if (
    group.view === "timeline" &&
    slides.length > 0 &&
    slides.every((slide) => observationTime(slide.observedAt) !== null)
  )
    slides.sort(
      (a, b) => observationTime(a.observedAt)! - observationTime(b.observedAt)!,
    );
  return slides;
}
