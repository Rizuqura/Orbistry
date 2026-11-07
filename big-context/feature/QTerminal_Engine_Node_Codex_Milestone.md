# QTerminal — Engine Node Integration (Codex Implementation Brief)

**Milestone:** Agent Construction / Registered External Engines v0.1\
**Target repository:** `https://github.com/Rizuqura/wonnyy-terminal`\
**First engine:** CHronoZ Online 1.0.0 (`https://github.com/Rizuqura/CHronoZ-economicBenchmarkModelling`)\
**Primary OS:** Windows x64\
**Goal:** Add a genuinely functional, secure, drag-and-drop **Engine** node to the existing Agent Construction Studio so a user can attach CHronoZ and ask an agent to retrieve an existing macro PDF report.

## Instructions to Codex

Read the **current checked-out repository code and tests**, not only this brief. Inspect the files below and any dependencies, and report discoveries before modifying files. Implement the smallest complete, tested change. **Do not stop after mockup or UI-only changes.** If dependencies or actual runtime differ from this brief, adapt to the source of truth and document the differences.

### Existing QTerminal implementation to inspect

- `README.md`, `SECURITY.md`
- `features/agent/agent-construction.tsx`, `features/agent/agent-construction.css`
- `electron/ai/agent-construction.cjs`, `electron/ai/agent-construction.test.cjs`
- `electron/ai/skills.cjs`, `electron/ai/construction-context.cjs`
- `electron/ai/ipc.cjs`, related orchestration and model tool-call execution
- `types/ai*`, preload bridge / IPC definitions, persistence / agent profile migration
- `scripts/electron-construction-smoke.cjs`, existing Electron and runtime tests

Known baseline at time of brief: seven visual node kinds (`Context`, `Personality`, `Skill`, `LLM`, `Workflow`, `Knowledge`, `Output`); graph edges currently connect non-LLM inputs to LLM and LLM to Output; validation allows at most one instance per kind and at most seven nodes; Skill is **not** a general executable tool. These are constraints to revise carefully, not assumptions to bypass by weakening validation.

### CHronoZ contract to inspect (do not reimplement its math)

- `README.md`
- `docs/integration/README.md`
- `docs/integration/chronoz-tool.json`
- `docs/integration/issue-result.schema.json`
- `docs/CHRONOZ_ONLINE_INTEGRATION_DELIVERY.md`

The portable Windows x64 bundle contains `runtime/python.exe` and a JSON-trigger module. The documented local integration pattern is:

```python
import json, subprocess
from pathlib import Path
bundle = Path(r"C:\CHronoZ")
result = subprocess.run(
    [str(bundle / "runtime/python.exe"), "-m", "chronoz.issue.trigger", str(bundle)],
    input=json.dumps({"operation":"get_report", "month":"2026-10"}) + "\n",
    text=True, capture_output=True, timeout=600, check=False,
)
payload = json.loads(result.stdout)
```

This is a **function-calling JSON contract, not an MCP server**. Exit codes: `0` available/scheduled/frozen; `2` partial research report; `1` blocked/failed. `primary_output` carries a PDF path, MIME type and SHA-256 when available. Existing reports can be retrieved without a refresh; `get_report` must not acquire fresh data. Respect CHronoZ status `PARTIAL` rather than treating it as installation failure.

## Product design / UX

1. Preserve the existing retro-futuristic, restrained bubble-node aesthetics, drag/drop, positioning, connector interaction, keyboard access, responsive inspector, Save Draft vs Save & Apply, profile isolation and revision protection.
2. Add an **Engine** node to the palette, canvas, node detail inspector and connection rules. Use a distinct restrained icon/accent, but no visual redesign of other tabs.
3. Give the user a registered-engine selector. For v0.1, support **CHronoZ** only, with state indicators `Not configured`, `Detected`, `Unavailable`, `Ready`, `Running`, `Partial`, `Blocked`, `Failed` where applicable. Never show Ready just because a path string exists.
4. Let a user choose the local CHronoZ bundle directory by a native folder picker rather than manually typing an arbitrary executable. Validate that required bundle files exist, verify the expected package/entrypoint, and run a bounded status probe. Store approved bundle location in app-managed settings (not in LLM arguments or untrusted document contents).
5. Inspector: engine identity/version, validated bundle path, available operations, permissions, latest probe result, and readable diagnostics. Show `get_report` as allowed-by-default; destructive/mutating/network-acquisition operations must be disabled by default and require separate explicit permission/UI action if implemented later.
6. Allow the agent graph to connect **Engine → LLM → Output** alongside existing Context → LLM, or another semantically justified typed design that is actually executable. Avoid portraying edge direction as sequential execution if the runtime only exposes an on-demand tool to the LLM: visibly label it `Available tool`/`Tool binding` instead. The default existing agent graph must remain usable without an Engine node.
7. Allow a user to attach CHronoZ to **any chosen agent**, without hardcoding the legacy CHronoZ agent identity. There should be no cross-agent permission leakage.
8. An agent may hold at most **one instance of CHronoZ in v0.1**. Design IDs/schema for multiple distinct engine instances and future engine types, rather than using the node kind as its unique ID. Keep existing one-per-kind constraints for unrelated node types unless there is a strong tested reason to change them.
9. Output UX: successful report retrieval should surface a clickable/openable report attachment/link within QTerminal with report month, research status, and path/provenance. If a PDF needs to be imported into the vault before opening, do so through explicitly authorized backend file handling rather than pretending a host path is safe to open directly. User should not have to browse a raw JSON response.
10. Save Draft should **not** affect live tool availability. Only Save & Apply should change the chosen agent's effective tool bindings on subsequent requests. Preserve run provenance: agent ID, applied graph revision/hash, engine ID and version, selected operation, arguments, outcome, timings, report checksum and output path (never store credentials).

## v0.1 execution scope (implement end-to-end)

**Primary user story:**

> Install/extract the CHronoZ portable bundle, bind it to an Engine node in Agent Construction, connect and apply the graph, then ask the agent: “Get my October 2026 CHronoZ macro report.” The model invokes an authorized tool, the Electron main process validates it, runs the local CHronoZ JSON trigger, and returns the report PDF to the user.

- Tool exposed to models: `chronoz.get_report` only. Arguments: optional `month` strictly validated as `YYYY-MM`, range checked as appropriate. Missing `month` invokes CHronoZ's documented latest scheduled issue behavior. No `path`, `command`, `executable`, `shell`, `pythonCode`, arbitrary `operation`, or credential parameter may be accepted from the model.
- Execute only the **app-registered**, user-approved CHronoZ bundle via Node `child_process.spawn`/`execFile` using `shell:false`, an absolute validated interpreter path, and fixed `-m chronoz.issue.trigger <approved bundle>` arguments. Pass a single bounded JSON object via stdin, terminated with newline. Never interpolate model output into a shell command.
- Set bounded runtime timeout, stdout/stderr size limits, concurrency control, cancellation behavior, and structured error handling. Decode exactly one JSON response and validate its shape. Distinguish `PARTIAL`, unavailable report, backend failure, malformed output, missing bundle, timeout and canceled runs.
- Re-validate approved path and essential files before each execution, including realpath checks to mitigate symlink/path substitution. Do not trust remote document contents or model prose as tool registration.
- Read `primary_output.path` only after verifying it lies under the registered CHronoZ bundle's expected `outputs/YYYY-MM/` issue directory (realpath containment), that it points to a regular PDF, with acceptable size, and that SHA-256 matches the returned checksum. Reject mismatches and paths outside the allowed directory. If verification fails, show an actionable failure, not a clickable attachment.
- CHronoZ may return exit code `2` for a valid **PARTIAL** research report. If its PDF and checksum validate, present the report with clear PARTIAL labelling; do not discard it as a crash.
- Do not call `freeze`, `publish`, `reconstruct`, `monthly_run`, `configure-key`, or OS scheduler registration automatically. These are explicitly out of v0.1 model access. CHronoZ generates/retrieves its official reports on its own monthly schedule.
- Implement actual LLM tool invocation through the supported model-provider runtime **if function/tool calling exists and can be verified**. If a provider adapter lacks tool-call support, explicitly mark it unsupported and provide a safe direct UI action `Open latest report` or `Get October report` using the same validated backend service. Do **not** claim universal automatic LLM tool calling without backend/provider coverage. Never treat prompt-only tool emulation as successful integration.
- Tool results must not silently become factual research evidence for model commentary. If the agent summarizes/interprets a report, route validated report text through the existing reviewed, permission-aware evidence flow with provenance and size/token budgeting, or limit v0.1 to fetching/opening the PDF and indicate that interpretation is not yet enabled. Do not inject a 53-page report blindly into LLM context.

## Architecture guidance

**Suggested trust boundaries:**

```text
Agent Construction UI (renderer)
     | validated Engine node configuration
     v
Electron preload / typed IPC
     | choose/probe/configure/execute registered engine
     v
Electron main: Engine Registry + permission checks
     | validated operation and strict JSON schema
     v
External Engine Adapter: CHronoZ
     | spawn approved bundled python, no shell, bounded stdin/stdout
     v
chronoz.issue.trigger (existing CHronoZ runtime)
     | returns status and report metadata
     v
Electron report verifier + attachment/reader
     |
     v
QTerminal user-facing report / model tool result
```

Keep external engine execution out of the renderer. Prefer a small generalizable Engine Registry / Engine Adapter boundary rather than hardcoding process spawning inside a React component. Do not conflate text-only Skill guidance with executable engine permissions. An installed engine is not necessarily bound to an agent; a bound engine is not necessarily enabled until the graph is applied.

## Backward compatibility and migrations

- Existing saved drafts and applied graphs with seven node types must continue loading without manual edits.
- Update Zod schemas, types, persistence and validation together; only introduce a schema migration if required by existing profile serialization. Test round-tripping old profiles.
- Update node/edge caps to account for Engine without accidentally allowing unsupported cycles, missing mandatory paths, or duplicate identities.
- Preserve all existing Context Box, Knowledge, Personality, Workflow, Skill, LLM and Output semantics.
- Never modify or embed CHronoZ's statistical engine, frozen mathematical/report contract, or official snapshots.
- Do not install Python globally, package CHronoZ's 80MB runtime inside QTerminal, or make an external engine mandatory for startup.

## Test matrix (required)

**UI and configuration:** palette add; drag/drop; click and keyboard connector; native folder picker; status probe; draft/apply isolation; restart persistence; per-agent binding isolation; removal/disconnect; invalid and unavailable bundle UX.

**Security:** unapproved engine/operation; malicious month; path traversal; symlink or executable substitution; manipulated returned report path; checksum mismatch; malformed/oversized stdout; oversized file; timeout; cancellation; concurrent requests; absence of a shell; no API credential leakage; documents cannot register capabilities.

**Integration:** valid CHronoZ October `get_report` with PDF; exit-code-2 PARTIAL; missing month latest; unpublished month; broken bundle; offline result retrieval without API key; ability to run existing chat without Engine; provider tool-capability fallback. Use fixture processes for deterministic tests and a real portable-bundle smoke test when available. Do not claim a real CHronoZ integration test passed if its bundle is absent.

Run existing repo tests and relevant targeted tests, including `npm run typecheck`, `npm run build`, `npm test`, and `npm run test:construction:electron` where supported; report every run and failures explicitly. Do not silently skip tests.

## Deliverables and handoff to me

1. Working Agent Construction **Engine** node, backed by a real validated Electron execution adapter.
2. CHronoZ `get_report` integration and report viewing/attachment handling, with safe fallback if model tool calls aren't supported.
3. Registry and permission model suitable for more engines later.
4. Tests plus evidence of passing/failing cases.
5. `docs/ENGINE_NODE_CHRONOZ_SETUP.md` written for a beginner on Windows, with exact steps to download/extract CHronoZ, configure the engine folder in QTerminal, add/connect/apply an Engine node, open the October report, test the chat command, understand `PARTIAL`, and troubleshoot failures. Include screenshots if your test/browser environment can produce real screenshots; do not fabricate screenshots.
6. Add a short documentation entry/link in README. List changed files and explain the runtime flow.
7. A final clearly labeled **Implementation status** table: `Implemented and tested`, `Implemented but not live-tested`, `Not implemented`. Include which providers support actual model-native tool calling and which use UI fallback.

## Definition of done

- The node is not a cosmetic placeholder.
- A user on Windows x64 can register an extracted CHronoZ bundle, add the Engine node, apply it to an agent, and retrieve the included October 2026 PDF without internet/API key.
- No arbitrary command execution or unreviewed executable injection is exposed to the LLM.
- Valid `PARTIAL` reports are usable and visibly labeled.
- Existing agents, drafts, and chat flow still work.
- Documentation explains precisely how **I**, the owner, can use the feature once it is implemented.

**Priority:** Correctness, security, and the smallest genuinely working path first. Polish should not replace execution. If the implementation needs a multi-provider tool-calling overhaul, ship the backend and safe UI-triggered report retrieval as v0.1, clearly report limitations, and propose the native-tool-calling extension as the next milestone rather than fabricating it.
