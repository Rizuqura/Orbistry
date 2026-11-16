# Daily Price Engine v0.1

Open an entity's Knowledge Card, choose **Write Index**, enter price sources under your section headings and select **Apply Index**.

```text
# Banking
source: yahooPrice("BBCA.JK")
source: yahooPrice("JPM")

# Semiconductors
source: yahooPrice("NVDA")

# Energy
source: yahooPrice("XOM")
```

Each call displays a daily chart and latest available price in its section. Multiple ticker calls can share a section, and file references or image groups can appear alongside them. Examples of supported Yahoo ticker forms include `AAPL`, `BBCA.JK`, `^JKSE`, `BTC-USD` and `EURUSD=X`.

An empty call provides an editable entity ticker field inside the section.

```text
# Market
source: yahooPrice()
```

Enter a ticker in that field and select **Save ticker**. Empty calls share the entity's saved default ticker. Explicit calls such as `yahooPrice("NVDA")` select their own symbol. Saving an empty ticker field removes the default association. Existing entity ticker settings remain accessible through the legacy Prices section when the applied index has no price declarations.

Declarations accept a literal quoted ticker or empty parentheses. The parser validates syntax and symbols before applying. Network retrieval starts when the applied section is opened.

The panel shows the latest available regular-session price, currency, change from previous close, market state, market timestamp in the exchange timezone and Yahoo's reported delay when available. The chart displays daily price observations with 1M, 3M, 6M and 1Y ranges. Pointer movement and arrow keys inspect individual observations. A single available observation displays as a point.

Quotes refresh when the panel opens, when it becomes visible and every five minutes while visible. **Refresh prices** requests both a new quote and history. Daily history is reused for up to six hours between automatic refreshes. Market timestamp and retrieval time identify the age of displayed data. During an outage, a saved snapshot appears with a refresh-failure message and saved-data status.

Ticker associations live in the existing entity Knowledge Card Markdown frontmatter as `price_symbol`. The companion's revision protects concurrent edits. Derived market snapshots live in `.engine/daily-price/cache` and are shared by ticker within a Universe. The scanner excludes `.engine` from user sources. The packaged public API lives in `.engine/daily-price/package`.

## API

The application uses the Node library `yahoo-finance2` 4.0.6 for keyless Yahoo access. The public interface is asynchronous and requires Node 22.18+.

```js
const { price } = require("C:/Universe/.engine/daily-price/package");
const snapshot = await price("BBCA.JK");
console.log(snapshot.price, snapshot.currency, snapshot.marketTime);
console.log(snapshot.history); // [{ date: "2026-11-13", close: 1234 }, ...]
```

Snapshot fields include `symbol`, `currency`, `exchangeTimezone`, `price`, `previousClose`, `marketTime`, `marketState`, `delayMinutes`, `fetchedAt`, `historyFetchedAt` and ordered daily `{date, close}` observations. Prices are numbers and zero values are retained. Exchange-local calendar dates determine daily observations. Missing daily closes are skipped. Empty history and unavailable quotes produce explicit failures.

The native Engine registry exposes `daily-price` with operation `price`. The Knowledge Card authorizes the saved entity ticker before and after asynchronous retrieval. The renderer supplies entity identity through the existing guarded bridge. The library starts network activity only when price retrieval is requested. Unit tests inject synthetic clients. No provider key setup is required.

## Packaging and checks

```powershell
node scripts/build-daily-price-engine.cjs
node scripts/build-daily-price-engine.cjs --universe C:/Universe
node scripts/build-daily-price-engine.cjs --universe C:/Universe --upgrade
node --test electron/daily-price.test.cjs
```

The package includes pinned runtime dependencies, third-party notices, this guide, the implementation report and SHA-256 file hashes. Explicit `--upgrade` verifies the installed package and retains it in a sibling backup directory. Engine cache files use atomic replacement, validated schema and bounded size. Memory caching retains 50 recent ticker snapshots, while each history contains at most 400 observations. Individual requests have a 25-second abort deadline.

Yahoo prices can be delayed and reflect closed markets. Yahoo availability and request limits affect fresh retrieval. This feature uses the latest available regular-session quote and provider daily observations. Split/dividend adjustment conventions follow Yahoo's chart response. The engine supports charting and price display for personal research.

References include the [Yahoo adapter documentation](https://github.com/gadicc/yahoo-finance2) and [yfinance usage documentation](https://ranaroussi.github.io/yfinance/).
