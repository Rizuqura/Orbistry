# Yahoo Financials & Earnings v0.1

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

The package exports `createFinancialEngine({client?, clock?})` and `fetch(ticker, kind)` with kind `financials` or `earnings`. The application dispatches registered Knowledge Card declarations through its guarded desktop bridge to the trusted bundled implementation. Index text is parsed as literal data. The installed package is independently usable from Node through `require`.

Yahoo Finance may omit statements, quarterly periods, EPS estimates, reporting currency or scheduled dates. Unsupported tickers, rate limits, schema changes and network failures appear within the selected section. The financial dataset requests up to five years of history, subject to provider retention. No currency conversion is applied.

Provider methods follow the [Yahoo Finance client documentation](https://jsr.io/%40gadicc/yahoo-finance2/doc/modules/fundamentalsTimeSeries).
