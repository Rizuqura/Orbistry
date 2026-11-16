# Yahoo Financials & Earnings v0.1 implementation

The independent `yahoo-financials` engine uses the existing keyless Yahoo Finance client. Financial statements use `fundamentalsTimeSeries` for three statement modules at annual and quarterly frequencies. Earnings use `earningsHistory` and `calendarEvents`. Dataset normalization retains original metric keys, actual fiscal dates, nullable values and currencies, provider identity and retrieval timestamps. Statements retain period type. Original values remain unscaled.

Knowledge Card declarations add optional `finance` entries to the existing parsed menu representation. An allowlisted `finance-index` request authorizes the applied entity/menu/source before and after asynchronous work. The original price, file and carousel paths keep their existing contracts. Saved indexes are reparsed, so no metadata migration is needed.

The viewer reuses Excel table classes and the card's existing section navigation. Tabs operate locally on loaded data. A separate Universe `.engine/yahoo-financials/cache` directory uses the existing atomic JSON writer, content validation, request coalescing, a configurable 24-hour TTL and explicit stale fallback. The package builder reuses dependency copying, checksums and verified backup installation conventions.

Changed areas include the new engine and service, index parser, bridge allowlist and operation, shared WorldView types, financial viewer, Knowledge Card dispatch, package definition registration, builder, deterministic tests and usage documentation.

Historical announcement dates are unavailable in the chosen earnings-history endpoint and remain null. Scheduled dates are shown separately. Missing EPS currency remains unavailable. Partially failed statement retrieval is labeled per frequency. If a prior snapshot exists, partial refresh failure preserves it as stale.

Verification passed for normalization, literal function parsing, applied-source authorization, coalescing, disk cache restoration, expired and corrupt caches, missing values and stale refresh fallback. Mocked Electron acceptance passed for financial tables, annual/quarterly switching without new provider requests, earnings, section changes and offline refresh. Live TSM verification returned five annual and seven quarterly periods for all three statements, four earnings records and one scheduled date. Statement reporting currency was TWD. Deterministic fixtures exercise USD EPS independently of reporting currency.

Typecheck and production build passed. The final full suite passed with 452 successes, two optional skips and zero failures. The standalone package staged successfully with 2,074 hashed files and its runtime dependencies. Usage is documented in `docs/worldview/packages/yahoo-financials-v0.1.md` and included in the standalone package.
