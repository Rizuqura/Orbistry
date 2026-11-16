> Historical Phase 08 design. Use the [current indexing guide](../../INDEXING.md) for supported declarations and controls.

# Engine processing

The index parser handles declarations and assignment checks. Applying an index performs validation and persistence. Loading a declared carousel automatically starts or attaches to a background job through the guarded desktop Engine interface.

## Pipeline

1. Resolve the applied carousel and current entity assignment through existing Knowledge Card source authorization.
2. Resolve the original within the active Universe, rejecting traversal and linked source paths.
3. Read a bounded file handle snapshot and validate PNG/JPEG headers and dimensions before decoding.
4. Compute a content/configuration cache key and reuse a compatible result when available.
5. Create an internal temporary snapshot for local OCR. The existing Windows OCR process reads that snapshot with a 120-second timeout and cancellation support.
6. Collect metadata, actual OCR text, warnings and errors. A trusted host may supply a vision adapter through the documented Engine factory interface.
7. Revalidate assignment and content before caching. A changed original rejects the pending result. Atomically cache structured output and delete the temporary snapshot.

Limits are 25 MB per image, 16384 pixels per edge and 20 megapixels. OCR text is limited to 1 MB with an explicit warning. Vision descriptions are limited to 32768 characters. Image groups support up to 50 images. Background groups run sequentially, keeping the card interactive and sharing compatible cache results across entities.

## Status

- Not Parsed indicates that the current source/configuration has no cached result.
- Processing indicates active background work.
- Completed indicates successful requested stages, including OCR that successfully returns empty text with a warning.
- Partial indicates usable metadata with unavailable OCR or an adapter failure.
- Failed indicates source, format, resource, authorization, interruption or cancellation failure.

An OCR failure preserves deterministic metadata. Successful OCR yields extracted text. Visual interpretation availability and description provenance are separate fields. The default application leaves descriptions null and explicitly records that visual interpretation has not been performed.

## Structured result

Results include `sourceId`, `sourceRef`, `sourceHash`, `parser`, `parserVersion`, `format`, `width`, `height`, `sizeBytes`, `extractedText`, `description`, `descriptionMethod`, `visualInterpretationAvailable`, `method`, `status`, `warnings`, `errors`, `processedAt`, `configuration`, `cacheKey` and `cacheHit`.

`sourceId` and `sourceRef` use existing relative Universe references. `sourceHash` has a `sha256:` prefix. Description provenance records the configured vision adapter ID/version when available. OCR text stays in its dedicated field. The shared cache stores computation, while each authorized retrieval supplies the requesting source's identity.

## Cache lifecycle

Cache keys include content bytes, parser version, OCR setting and OCR/vision adapter IDs and versions. The cache is stored under `.engine/image-parser/cache/`. The actual bundled parser and manifest accompany the cache, while runtime imports use the trusted application bundle.

Reopening a card schedules cached processing and reuses compatible results. Switching slides retrieves their existing knowledge. Changes to content or processing configuration select another cache key. The host Engine interface supports explicit cache rebuilding for maintenance. Normal completed/partial results are reusable. Failed and cancelled processing writes no successful result for that attempt. A previous valid result survives a failed reparse.

Cache-write failures remain visible in result warnings and retain the current process's computed result in memory. Cache files can be removed and are reconstructed on the next carousel load. An application crash interrupts in-memory jobs. Reopening reuses completed cache entries and schedules unfinished slides. A hard termination can leave temporary snapshots under `work/`, which can be removed while the application is closed.
