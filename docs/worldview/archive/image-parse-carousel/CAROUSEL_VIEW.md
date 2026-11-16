> Historical Phase 08 design. Use the [current indexing guide](../../INDEXING.md) for supported declarations and controls.

# Carousel view

Each applied named image group produces one carousel. Grouped sources appear as slides, and standalone source declarations retain their existing preview selector.

Centered arrows move through declared source order. The active filename and position appear above the image. Images preserve their aspect ratio inside a bounded readable area. Locate Original uses existing Knowledge Card source authorization and the system file browser.

Original rendering is independent of image processing. Loading a carousel automatically schedules background parsing. The normal view shows the image, navigation and compact status. Open the three-dot menu and choose See Parse to inspect results. Processing keeps the card interactive. The inspector presents cached knowledge and processing diagnostics. Closing the card stops polling while background work continues. Reopening reuses compatible cached knowledge.

The active slide determines the result shown in See Parse. Available descriptions appear in the inspector with adapter provenance. OCR text appears in a separate expandable Extracted OCR text area. Metadata, processing method, timestamp, warnings and errors remain available below it. The default application explicitly reports unavailable visual interpretation.

See Parse displays usable metadata, OCR text, warnings and failures for the active image. Missing/unassigned sources and browser decoding errors produce explicit messages. Valid slides remain independently navigable. Source or dimension limits can prevent unsafe preview decoding, while Locate Original remains available for authorized existing files.
