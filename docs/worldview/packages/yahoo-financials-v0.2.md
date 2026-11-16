# Yahoo Finance engine v0.2.0

Open an entity's Knowledge Card, choose **Write Index**, enter declarations, then choose **Validate Index** and **Apply Index**.

```text
# Price
source: yahooPrice("TSM")

# Financials
source: yahooFinancials("TSM")

# Earnings
source: yahooEarnings("TSM")
```

Select Financials or Earnings in the card sidebar. Each function requires one quoted Yahoo ticker. Single quotes also work. Examples include `AAPL`, `TSM` and `BBCA.JK`. Coverage depends on Yahoo's available company datasets.

Financials offers Income Statement, Balance Sheet and Cash Flow buttons, plus Annual and Quarterly. Switching these controls uses the loaded snapshot. Columns show actual period-end dates, reporting frequency and currency. Metric keys retain Yahoo's names. Values are unscaled, with source units. Missing values display Unavailable. EPS is currency per share, share counts are shares, and ratios retain provider units.

Earnings shows fiscal period ends, EPS estimates, reported EPS and surprise percentages. Computed surprises are labeled computed and use `(actual - estimate) / abs(estimate) * 100` when the estimate is nonzero. Provider surprise ratios are converted to percentages. Currency is shown only when supplied for the EPS record. Fiscal period ends and scheduled earnings dates remain distinct. The current earnings-history endpoint supplies fiscal dates, so historical announcement dates display Unavailable. Multiple scheduled dates may describe a date window. Schedules can be estimated and do not establish completed announcements.

Data is fetched when opening a section. Successful results are cached for 24 hours. **Refresh** requests a new snapshot. Failed refreshes show the last usable snapshot with an explicit stale warning and retrieval timestamp. Corrupt caches trigger a new request with a warning. There is no background polling. Developers can configure `ttlMs` in `createFinancialService`.

## Package

The independent package lives at `<Universe>/.engine/yahoo-financials/package`. Cached snapshots live in its sibling `cache` folder. The existing daily-price package has its own directory.

```powershell
node scripts/build-yahoo-financials-engine.cjs
node scripts/build-yahoo-financials-engine.cjs --universe C:/Universe
```

The first command stages a self-contained package under `.cache/engine-packages`. The second installs it in the specified existing Universe. For a later update, append `--upgrade`. Updates verify existing hashes and retain a sibling package backup.

The package exports `createFinancialEngine({client?, clock?, signal?})`, `execute(request)`, `getQuote(symbol)`, `getPriceHistory(symbol, range?)`, `getFinancialStatements(symbol)` and `getEarnings(symbol)`. The original `fetch(ticker, kind)` remains compatible for `financials` and `earnings`. The application dispatches registered Knowledge Card declarations through its guarded desktop bridge to the trusted bundled implementation. Index text is parsed as literal data. The installed package is independently usable from Node through `require`.

## Future LLM integration

`tools.json` is an offline, machine-readable discovery contract. `execute` rejects unknown operations, extra arguments and invalid tickers before provider access. Supported operations are `quote`, `history`, `financials` and `earnings`. Quotes retain listing currency, market time, price, market cap, P/E, EPS, 52-week range, volume and reported delay when supplied. History preserves OHLCV, dividends and splits. Missing fields are null.

```javascript
const finance = require("C:/Universe/.engine/yahoo-financials/package");
const quote = await finance.execute({ operation: "quote", symbol: "2330.TW" });
const history = await finance.execute({ operation: "history", symbol: "2330.TW", range: "5Y" });
```

History supports `1M`, `3M`, `6M`, `1Y`, `5Y` and `MAX`. Short ranges use daily observations, `5Y` uses weekly observations, and `MAX` uses monthly observations from the provider's available history. These are source intervals, not invented daily observations. TSM is a US ADR quoted in USD; 2330.TW is the Taiwan listing quoted in TWD. They are never substituted for one another.

The JSON CLI reads one request on stdin, emits one JSON response on stdout and reports errors to stderr with a nonzero exit code. Requests are bounded to 64 KiB. Discovery makes no network calls:

```powershell
node C:/Universe/.engine/yahoo-financials/package/cli.cjs --describe
'{"operation":"quote","symbol":"2330.TW"}' | node C:/Universe/.engine/yahoo-financials/package/cli.cjs
```

Inside the app, future model adapters can call `executeNativeEngine("yahoo-financials", operation, arguments, {signal})`. The dispatcher uses only trusted bundled code. A future adapter must handle user/provider authorization and provenance before using this entrypoint. Ordinary source-free agent chat remains disconnected from engine tools; this package provides an execution contract, not automatic tool enablement or a running MCP server. Standalone direct calls return fresh data; application calls use the separately validated Universe cache. Developer TTLs can be configured per data type through `createFinancialService({ttlByKind})`: quotes default to five minutes, history to six hours, financials and earnings to 24 hours.

## Maintenance

The package includes runtime dependencies, licenses, a hashed manifest, discovery metadata and the CLI. Install with `--upgrade` for existing installations. Once the active package is verified, `node scripts/clean-engine-backups.cjs --universe C:/Universe` previews obsolete installer backups; append `--apply` to remove them. Cleanup verifies both active and backup packages, rejects modified or additional files and never selects active engines, caches or original sources.

## Provider availability and usage

This Node/Electron application uses the compatible JavaScript `yahoo-finance2` adapter rather than adding a Python service. The [upstream project](https://github.com/gadicc/yahoo-finance2) documents an unofficial API with no availability guarantee; its code is MIT licensed. That code license does not grant market-data redistribution rights. Yahoo's [exchange/data-provider guidance](https://help.yahoo.com/kb/account/SLN2310.html) restricts redistribution, and its [terms](https://legal.yahoo.com/us/en/yahoo/terms/otos/index.html?ncid=mbr_idnedulnk00000001) limit commercial use without permission. Applicable terms vary by location. Provider requests are bounded by a 25-second deadline and can accept a caller cancellation signal. Rate limits or outages surface as errors, with stale-cache fallback in the application; requests do not automatically retry or substitute tickers. Market information is labeled latest available, never guaranteed real-time. Checked 2026-11-16.

Yahoo Finance may omit statements, quarterly periods, EPS estimates, reporting currency or scheduled dates. Unsupported tickers, rate limits, schema changes and network failures appear within the selected section. The financial dataset requests up to five years of history, subject to provider retention. No currency conversion is applied.

Provider methods follow the [Yahoo Finance client documentation](https://jsr.io/%40gadicc/yahoo-finance2/doc/modules/fundamentalsTimeSeries).
