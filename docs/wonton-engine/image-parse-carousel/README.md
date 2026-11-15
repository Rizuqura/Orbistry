# Image Parsing and Carousel View

The current Knowledge Card viewer follows [Phase 08A](../../wonton/carousel-viewer/README.md). Use `.view(carousel)` or `.view(timeline)` for new declarations. The documents in this folder describe the earlier Phase 08 processing interfaces.

Knowledge Cards can group assigned PNG and JPEG sources into named carousels and automatically run cached local processing when a carousel loads. The index parser defines components, the Image Engine computes knowledge, and the card presents originals and cached results.

The core feature uses the existing Electron application and its bundled Node modules. Windows OCR uses the existing Windows OCR adapter and an installed Windows OCR language. Other platforms retain deterministic metadata processing and report OCR availability. A vision adapter interface is available to trusted host code. The application currently supplies metadata and local OCR processing.

Assign both images to the entity, open Write Index and apply this declaration using the actual assigned source IDs.

```text
# Industry
Carousel = [
  source: images/overview.png
  source: images/process.jpg
].parse(image).view(carousel)
```

Apply Index validates and stores the layout. Loading the carousel automatically schedules background parsing and saves compatible results. Original slides appear immediately. Open the three-dot menu and choose See Parse to inspect the active slide?s knowledge. Centered arrows change the active source and inspected result. See Parse is a read-only inspector.

The package and reconstructable results live in the active Universe's `.engine/image-parser/` directory. Runtime code comes from the application bundle. Original files and entity assignments remain authoritative.

- [Indexing syntax](INDEXING_SYNTAX.md) covers the complete declaration grammar.
- [Engine processing](ENGINE_PROCESSING.md) covers status, resource limits and structured output.
- [Carousel view](CAROUSEL_VIEW.md) covers navigation and source access.
- [Agent integration](AGENT_INTEGRATION.md) describes the implemented retrieval interface and future permission boundary.
- [Troubleshooting](TROUBLESHOOTING.md) describes diagnostics and tests.
