# Structured retrieval interface

Structured image knowledge is available independently of the Knowledge Card renderer. The application exports `createImageParserService` and its singleton from `electron/image-parser-service.cjs`.

The host service exposes these methods with the active Universe root, entity ID and applied carousel ID.

- `getKnowledge(root, entityId, carouselId, sourceId, options)` retrieves compatible cached output by actual content hash and returns null for an unparsed configuration.
- `preview(root, entityId, carouselId, sourceId)` retrieves a bounded authorized original image.
- `start(root, entityId, carouselId, options)` explicitly starts group processing and returns a background job snapshot. Options include `ocr` and `force`.
- `status(root, entityId, carouselId)` retrieves background state and per-source outcomes.
- `cancel(root, entityId, carouselId)` aborts current work.

The guarded desktop bridge exposes `image-knowledge`, `image-preview`, `image-parse`, `image-status` and `image-cancel`. Requests carry `vaultPath`, the entity `id`, `carouselId`, and `sourceId` when applicable. The application bridge uses its configured local OCR behavior. The factory's trusted host options accept OCR and future vision adapter implementations, each with an ID and version.

Every retrieval validates current applied membership and source assignment. A path appearing in a draft grants no access. References preserve stable IDs, source paths, SHA-256 hashes and parser/adapter provenance. An unassigned source loses access through these methods even when derived cache data remains on disk.

Future agents can select a specific entity/source result, include the provenance fields and choose relevant excerpts of `extractedText` or an explicitly attributed description for token-efficient context. An agent-facing tool and its permissions remain a future integration. This phase implements the structured retrieval boundary and the passive card processing workflow.

OCR records recognized text and its processing method. Visual interpretation has its own availability flag and attributed description field. Consumers should preserve those fields and the original source reference when using derived knowledge.
