# Knowledge Card image viewer

Phase 08A provides a shared Collection and Timeline viewer for images already assigned to an entity. The viewer uses existing Vault preview access, keeps the original aspect ratio and displays source metadata, human notes and a reserved Analysis area.

Apply Index accepts named groups ending in `.view(carousel)` or `.view(timeline)`. Collection uses thumbnails. Timeline uses a discrete observation-index scrubber and selectable date markers. Opening a viewer loads original previews. Notes use Save Notes and the existing entity-scoped Knowledge Card companion. Analysis displays `No analysis available`.

- [Indexing](INDEXING.md) documents declarations and compatibility.
- [UI behavior](UI_BEHAVIOR.md) documents navigation, notes and limitations.

The source-viewing boundary is independent of future computation. The optional observation model accepts `sourceId`, `observedAt`, `location`, `caption`, `notes` and `analysisStatus`. Future integrations can supply these fields through the component interface. Actual analysis output requires a separately authorized future integration.
