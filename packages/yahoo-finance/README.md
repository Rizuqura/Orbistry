# Yahoo Finance Engine

This independent package exports price (legacy snapshot with daily closes), quote, history (range-specific OHLCV and corporate actions), financials (income, balance sheet and cash flow) and earnings. The implementation under src has one lazy Yahoo client. Fetched timestamps and provider observation timestamps have distinct meanings.

From this directory, run `npm ci --ignore-scripts` and `npm run build -- <new-output-directory>`. The builder requires a fresh destination and emits engine_manifest.json and a self-contained CommonJS entry with pinned dependencies. Use the Orbistry CLI to check, optionally sign, install, trust and link those output files. Grant only the required operations and explicit outbound network consent. Existing Knowledge Card declarations operate after linking the listing's Entity. Use automatic read permission for the legacy viewers.

See [the package lifecycle](../../docs/engines/ENGINE_LIFECYCLE.md) and [publisher signing guide](../../docs/engines/ENGINE_SIGNING.md).
