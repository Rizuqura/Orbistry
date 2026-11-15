# Troubleshooting

## Invalid declarations

Use Validate Index and inspect the reported line. Confirm a level-one heading precedes the group, each source occupies its own line and the closing line is exactly `].parse(image).view(carousel)`. Give each group a unique identifier within the section. Unknown chain operations and nested groups generate errors.

## Missing assignments or originals

Open the entity's assigned source list and copy its exact Universe reference. Assign the file before applying the index. Restore a moved/missing original at its existing reference or update assignments and declarations. Use Locate Original for an authorized file. The parser cannot authorize an arbitrary filesystem path.

## Unsupported or oversized images

Use PNG or JPEG files within 25 MB, 16384 pixels per edge and 20 megapixels. Grouped PDFs, SVGs and other formats fail validation. Excessive dimensions and malformed headers fail Engine preview/processing. Existing standalone source previews retain their supported behavior.

## OCR unavailable or empty

Windows OCR requires an installed Windows OCR language. Check Windows language settings and remove the derived cache with the app closed after fixing availability. Other platforms report unavailable local OCR and retain metadata. Empty OCR output records a warning. The default application displays unavailable visual interpretation explicitly.

## Failed, partial or cancelled processing

Inspect warnings/errors for the active image. Partial results retain usable metadata and successful text. Cancellation stops current OCR and pending slides. Loading the carousel reuses compatible results. Open the three-dot menu and choose See Parse to inspect results. Removing the derived cache with the application closed allows automatic processing on the next load. Originals remain independently accessible. A source changed during processing requires a retry against the new content.

## Stale or missing cache

Switch away and back to refresh the active source, or reopen the card. Cache lookup hashes the current source and processing configuration. Derived cache entries can be removed with the application closed and rebuilt automatically on the next load. If cache persistence failed, open See Parse and inspect the warning and Universe permissions. With the application closed, the reconstructable `.engine/image-parser/cache/` directory may be removed. Hard process termination can leave removable temporary snapshots under `work/`.

## Rendering issues

Confirm the active filename and position, then try the next slide. If only one slide fails, verify that original's format, dimensions and availability. Locate Original provides access to an authorized source even when browser decoding fails. Carousel knowledge loading and original preview loading report errors independently.

## Verification

Run `node --test electron/image-parser.test.cjs features/worldview/image-carousel.test.cjs` for grammar, metadata, adapter behavior, cache reuse/invalidation, cancellation, source changes, authorization and presentation. Run `npm test`, `npm run typecheck`, `npm run build`, then `node scripts/electron-worldview-smoke.cjs` for integration coverage using isolated synthetic Universe data.
