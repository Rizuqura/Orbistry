# Development and acceptance tooling

[Atlas](<../README.md>) / [All symbols and callers/callees](<../symbols/tooling.md>)

Owns CLI commands, package/build tooling, architecture checks, Atlas generation and acceptance harnesses.

Owns: scripts/. This ownership is editorial; source locations and import edges below are generated facts.

105 source files; 1594 callable declarations; 0 contract declarations.

## Entry points and exported symbols

Candidates from compiler export tables and methods on exported classes. Registration, availability, authorization and runtime reachability must be checked separately.

| Symbol | Source | Kind |
| --- | --- | --- |
| [readChips](<../symbols/files/scripts/acceptance/electron-worldview-smoke.cjs.md#s-ad27b3f857382c88>) | [scripts/acceptance/electron-worldview-smoke.cjs:234](<../../../scripts/acceptance/electron-worldview-smoke.cjs#L234>) | FunctionDeclaration |
| [createChip](<../symbols/files/scripts/acceptance/electron-worldview-smoke.cjs.md#s-a98134da941ff00c>) | [scripts/acceptance/electron-worldview-smoke.cjs:254](<../../../scripts/acceptance/electron-worldview-smoke.cjs#L254>) | FunctionDeclaration |
| [verifyExcelPreview](<../symbols/files/scripts/acceptance/worldview-excel-check.cjs.md#s-22b1dc9a75539a2e>) | [scripts/acceptance/worldview-excel-check.cjs:7](<../../../scripts/acceptance/worldview-excel-check.cjs#L7>) | FunctionDeclaration |
| [verifyFinancials](<../symbols/files/scripts/acceptance/worldview-financial-check.cjs.md#s-7558d83685bde9be>) | [scripts/acceptance/worldview-financial-check.cjs:5](<../../../scripts/acceptance/worldview-financial-check.cjs#L5>) | FunctionDeclaration |
| [verifyUniverseAssignments](<../symbols/files/scripts/acceptance/worldview-phase03-check.cjs.md#s-e41c3ee908e93807>) | [scripts/acceptance/worldview-phase03-check.cjs:80](<../../../scripts/acceptance/worldview-phase03-check.cjs#L80>) | FunctionDeclaration |
| [verifyKnowledgeCards](<../symbols/files/scripts/acceptance/worldview-phase04-check.cjs.md#s-735eeedac3d937b3>) | [scripts/acceptance/worldview-phase04-check.cjs:13](<../../../scripts/acceptance/worldview-phase04-check.cjs#L13>) | FunctionDeclaration |
| [verifyManualIndex](<../symbols/files/scripts/acceptance/worldview-phase05-check.cjs.md#s-bb1cef23f8fb8b75>) | [scripts/acceptance/worldview-phase05-check.cjs:18](<../../../scripts/acceptance/worldview-phase05-check.cjs#L18>) | FunctionDeclaration |
| [verifyUniversalConnectors](<../symbols/files/scripts/acceptance/worldview-phase06-check.cjs.md#s-415abacc0c6fdfcd>) | [scripts/acceptance/worldview-phase06-check.cjs:51](<../../../scripts/acceptance/worldview-phase06-check.cjs#L51>) | FunctionDeclaration |
| [verifyWorldTagSearch](<../symbols/files/scripts/acceptance/worldview-phase07-check.cjs.md#s-0e57f6b27fe7cda5>) | [scripts/acceptance/worldview-phase07-check.cjs:15](<../../../scripts/acceptance/worldview-phase07-check.cjs#L15>) | FunctionDeclaration |
| [verifyImageCarousels](<../symbols/files/scripts/acceptance/worldview-phase08-check.cjs.md#s-068f9f179c8b9d27>) | [scripts/acceptance/worldview-phase08-check.cjs:16](<../../../scripts/acceptance/worldview-phase08-check.cjs#L16>) | FunctionDeclaration |
| [verifyDailyPrices](<../symbols/files/scripts/acceptance/worldview-price-check.cjs.md#s-983372c47379ea5c>) | [scripts/acceptance/worldview-price-check.cjs:5](<../../../scripts/acceptance/worldview-price-check.cjs#L5>) | FunctionDeclaration |
| [runtimeImports](<../symbols/files/scripts/audit/audit-architecture.cjs.md#s-f03ed73432be48ab>) | [scripts/audit/audit-architecture.cjs:41](<../../../scripts/audit/audit-architecture.cjs#L41>) | FunctionDeclaration |
| [dependencyCycles](<../symbols/files/scripts/audit/audit-architecture.cjs.md#s-519c7982a25643d8>) | [scripts/audit/audit-architecture.cjs:104](<../../../scripts/audit/audit-architecture.cjs#L104>) | FunctionDeclaration |
| [auditArchitecture](<../symbols/files/scripts/audit/audit-architecture.cjs.md#s-b92801371032ffaa>) | [scripts/audit/audit-architecture.cjs:153](<../../../scripts/audit/audit-architecture.cjs#L153>) | FunctionDeclaration |
| [auditSource](<../symbols/files/scripts/audit/audit-source.cjs.md#s-4af7de434a7530b4>) | [scripts/audit/audit-source.cjs:8](<../../../scripts/audit/audit-source.cjs#L8>) | FunctionDeclaration |
| [copyDependencies](<../symbols/files/scripts/build/build-excel-engine.cjs.md#s-d0f75114d535da4d>) | [scripts/build/build-excel-engine.cjs:35](<../../../scripts/build/build-excel-engine.cjs#L35>) | FunctionDeclaration |
| [checksums](<../symbols/files/scripts/build/build-excel-engine.cjs.md#s-cba22f66c8f6ca49>) | [scripts/build/build-excel-engine.cjs:58](<../../../scripts/build/build-excel-engine.cjs#L58>) | FunctionDeclaration |
| [planCleanup](<../symbols/files/scripts/clean-engine-backups.cjs.md#s-9fdf038c44152d4f>) | [scripts/clean-engine-backups.cjs:34](<../../../scripts/clean-engine-backups.cjs#L34>) | FunctionDeclaration |
| [main](<../symbols/files/scripts/code-atlas.cjs.md#s-2ad6b99e90e1524d>) | [scripts/code-atlas.cjs:9](<../../../scripts/code-atlas.cjs#L9>) | FunctionDeclaration |
| [compare](<../symbols/files/scripts/code-atlas/analyze.cjs.md#s-0f547bdcda50a0a0>) | [scripts/code-atlas/analyze.cjs:24](<../../../scripts/code-atlas/analyze.cjs#L24>) | FunctionDeclaration |
| [anchor](<../symbols/files/scripts/code-atlas/analyze.cjs.md#s-7611f4c95a287aa0>) | [scripts/code-atlas/analyze.cjs:29](<../../../scripts/code-atlas/analyze.cjs#L29>) | FunctionDeclaration |
| [resolveLocal](<../symbols/files/scripts/code-atlas/analyze.cjs.md#s-ce4c8696ea81a658>) | [scripts/code-atlas/analyze.cjs:36](<../../../scripts/code-atlas/analyze.cjs#L36>) | FunctionDeclaration |
| [analyze](<../symbols/files/scripts/code-atlas/analyze.cjs.md#s-50c93f94f5c6bf5b>) | [scripts/code-atlas/analyze.cjs:161](<../../../scripts/code-atlas/analyze.cjs#L161>) | FunctionDeclaration |
| [MODULES](<../symbols/files/scripts/code-atlas/catalog.cjs.md#s-8e32e0098d4ac13f>) | [scripts/code-atlas/catalog.cjs:4](<../../../scripts/code-atlas/catalog.cjs#L4>) | VariableDeclaration |
| [moduleFor](<../symbols/files/scripts/code-atlas/catalog.cjs.md#s-760ea599ad9258b2>) | [scripts/code-atlas/catalog.cjs:164](<../../../scripts/code-atlas/catalog.cjs#L164>) | FunctionDeclaration |
| [roleFor](<../symbols/files/scripts/code-atlas/catalog.cjs.md#s-923feac876424dc9>) | [scripts/code-atlas/catalog.cjs:245](<../../../scripts/code-atlas/catalog.cjs#L245>) | FunctionDeclaration |
| [portable](<../symbols/files/scripts/code-atlas/catalog.cjs.md#s-60683316afa4a320>) | [scripts/code-atlas/catalog.cjs:256](<../../../scripts/code-atlas/catalog.cjs#L256>) | FunctionDeclaration |
| [included](<../symbols/files/scripts/code-atlas/generate.cjs.md#s-2a2e1b797f0a0359>) | [scripts/code-atlas/generate.cjs:42](<../../../scripts/code-atlas/generate.cjs#L42>) | FunctionDeclaration |
| [inventory](<../symbols/files/scripts/code-atlas/generate.cjs.md#s-02a34d5fca877940>) | [scripts/code-atlas/generate.cjs:63](<../../../scripts/code-atlas/generate.cjs#L63>) | FunctionDeclaration |
| [buildAtlas](<../symbols/files/scripts/code-atlas/generate.cjs.md#s-5686d6c95fadcfb1>) | [scripts/code-atlas/generate.cjs:106](<../../../scripts/code-atlas/generate.cjs#L106>) | FunctionDeclaration |
| [validateLinks](<../symbols/files/scripts/code-atlas/generate.cjs.md#s-fe660342bc01da7c>) | [scripts/code-atlas/generate.cjs:177](<../../../scripts/code-atlas/generate.cjs#L177>) | FunctionDeclaration |
| [checkAtlas](<../symbols/files/scripts/code-atlas/generate.cjs.md#s-c248b316de4d682d>) | [scripts/code-atlas/generate.cjs:221](<../../../scripts/code-atlas/generate.cjs#L221>) | FunctionDeclaration |
| [writeAtlas](<../symbols/files/scripts/code-atlas/generate.cjs.md#s-b25f0ed450603f96>) | [scripts/code-atlas/generate.cjs:235](<../../../scripts/code-atlas/generate.cjs#L235>) | FunctionDeclaration |
| [dependencySvg](<../symbols/files/scripts/code-atlas/graphs.cjs.md#s-6f46d2d1d02212ec>) | [scripts/code-atlas/graphs.cjs:19](<../../../scripts/code-atlas/graphs.cjs#L19>) | FunctionDeclaration |
| [selectCallEdges](<../symbols/files/scripts/code-atlas/graphs.cjs.md#s-b19bd635a203dc1c>) | [scripts/code-atlas/graphs.cjs:60](<../../../scripts/code-atlas/graphs.cjs#L60>) | FunctionDeclaration |
| [callSvg](<../symbols/files/scripts/code-atlas/graphs.cjs.md#s-93adb049c008bf52>) | [scripts/code-atlas/graphs.cjs:169](<../../../scripts/code-atlas/graphs.cjs#L169>) | FunctionDeclaration |
| [discoverIpc](<../symbols/files/scripts/code-atlas/ipc.cjs.md#s-c350b63746d45342>) | [scripts/code-atlas/ipc.cjs:4](<../../../scripts/code-atlas/ipc.cjs#L4>) | FunctionDeclaration |
| [appendPowerShell](<../symbols/files/scripts/code-atlas/powershell.cjs.md#s-ebdb565846169f3a>) | [scripts/code-atlas/powershell.cjs:9](<../../../scripts/code-atlas/powershell.cjs#L9>) | FunctionDeclaration |
| [md](<../symbols/files/scripts/code-atlas/render.cjs.md#s-95843513dd72c107>) | [scripts/code-atlas/render.cjs:7](<../../../scripts/code-atlas/render.cjs#L7>) | FunctionDeclaration |
| [link](<../symbols/files/scripts/code-atlas/render.cjs.md#s-b5d07d207706a7ec>) | [scripts/code-atlas/render.cjs:20](<../../../scripts/code-atlas/render.cjs#L20>) | FunctionDeclaration |
| [moduleEdges](<../symbols/files/scripts/code-atlas/render.cjs.md#s-ebbb722ed10e381c>) | [scripts/code-atlas/render.cjs:59](<../../../scripts/code-atlas/render.cjs#L59>) | FunctionDeclaration |
| [render](<../symbols/files/scripts/code-atlas/render.cjs.md#s-795102933500a447>) | [scripts/code-atlas/render.cjs:566](<../../../scripts/code-atlas/render.cjs#L566>) | FunctionDeclaration |
| [main](<../symbols/files/scripts/enable-entity-agent-read-access.cjs.md#s-86d517edd5e58413>) | [scripts/enable-entity-agent-read-access.cjs:12](<../../../scripts/enable-entity-agent-read-access.cjs#L12>) | FunctionDeclaration |
| [openContextTools](<../symbols/files/scripts/fixtures/chat-context-tools.cjs.md#s-e7640695526089a7>) | [scripts/fixtures/chat-context-tools.cjs:2](<../../../scripts/fixtures/chat-context-tools.cjs#L2>) | FunctionDeclaration |
| [cmapPdf](<../symbols/files/scripts/fixtures/cmap-pdf.cjs.md#s-8d66225473a2ebb8>) | [scripts/fixtures/cmap-pdf.cjs:3](<../../../scripts/fixtures/cmap-pdf.cjs#L3>) | FunctionDeclaration |
| [zip](<../symbols/files/scripts/fixtures/excel.cjs.md#s-6b585801c616fb06>) | [scripts/fixtures/excel.cjs:4](<../../../scripts/fixtures/excel.cjs#L4>) | FunctionDeclaration |
| [xml](<../symbols/files/scripts/fixtures/excel.cjs.md#s-12963c8e085de210>) | [scripts/fixtures/excel.cjs:45](<../../../scripts/fixtures/excel.cjs#L45>) | FunctionDeclaration |
| [workbook](<../symbols/files/scripts/fixtures/excel.cjs.md#s-e5526a486067cf6f>) | [scripts/fixtures/excel.cjs:54](<../../../scripts/fixtures/excel.cjs#L54>) | FunctionDeclaration |
| [imagePdf](<../symbols/files/scripts/fixtures/image-pdf.cjs.md#s-1b7b36e15c54a255>) | [scripts/fixtures/image-pdf.cjs:3](<../../../scripts/fixtures/image-pdf.cjs#L3>) | FunctionDeclaration |
| [AgentStore](<../symbols/files/scripts/fixtures/legacy-agents.cjs.md#s-acce7c85d61089bf>) | [scripts/fixtures/legacy-agents.cjs:6](<../../../scripts/fixtures/legacy-agents.cjs#L6>) | ClassDeclaration |
| [createOnlineSmokeFetch](<../symbols/files/scripts/fixtures/online-smoke-fetch.cjs.md#s-973fc4236a88815b>) | [scripts/fixtures/online-smoke-fetch.cjs:2](<../../../scripts/fixtures/online-smoke-fetch.cjs#L2>) | FunctionDeclaration |
| [textPdf](<../symbols/files/scripts/fixtures/text-pdf.cjs.md#s-471938689fc127a1>) | [scripts/fixtures/text-pdf.cjs:2](<../../../scripts/fixtures/text-pdf.cjs#L2>) | FunctionDeclaration |
| [reportSection](<../symbols/files/scripts/report-section.cjs.md#s-832510fa6a604520>) | [scripts/report-section.cjs:5](<../../../scripts/report-section.cjs#L5>) | FunctionDeclaration |
| [&lt;script&gt;](<../symbols/files/scripts/code-atlas/powershell-parser.ps1.md#s-f038bcf2238bb2e9>) | [scripts/code-atlas/powershell-parser.ps1:1](<../../../scripts/code-atlas/powershell-parser.ps1#L1>) | PowerShellScript |

## Depends on

Literal runtime production-file imports only; lazy imports are included. Type, test, tool and external dependencies remain available in the full index.

No cross-module production imports in this view.

## Depended on by

Literal runtime production-file imports only; lazy imports are included. Type, test, tool and external dependencies remain available in the full index.

No cross-module production imports in this view.

## Contracts

No TypeScript/Zod contract declaration indexed here. Function signatures and IPC contracts may still apply.

## Source inventory

| File | Role | Declarations |
| --- | --- | --- |
| [scripts/acceptance/electron-add-agent-smoke.cjs:1](<../../../scripts/acceptance/electron-add-agent-smoke.cjs#L1>) | tooling | 24 |
| [scripts/acceptance/electron-agent-gateway-smoke.cjs:1](<../../../scripts/acceptance/electron-agent-gateway-smoke.cjs#L1>) | tooling | 19 |
| [scripts/acceptance/electron-agent-workspace-smoke.cjs:1](<../../../scripts/acceptance/electron-agent-workspace-smoke.cjs#L1>) | tooling | 37 |
| [scripts/acceptance/electron-appearance-smoke.cjs:1](<../../../scripts/acceptance/electron-appearance-smoke.cjs#L1>) | tooling | 30 |
| [scripts/acceptance/electron-backend-identity-smoke.cjs:1](<../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L1>) | tooling | 18 |
| [scripts/acceptance/electron-backend-reset-smoke.cjs:1](<../../../scripts/acceptance/electron-backend-reset-smoke.cjs#L1>) | tooling | 30 |
| [scripts/acceptance/electron-box-agents-smoke.cjs:1](<../../../scripts/acceptance/electron-box-agents-smoke.cjs#L1>) | tooling | 33 |
| [scripts/acceptance/electron-chat-popout-smoke.cjs:1](<../../../scripts/acceptance/electron-chat-popout-smoke.cjs#L1>) | tooling | 11 |
| [scripts/acceptance/electron-chat-smoke.cjs:1](<../../../scripts/acceptance/electron-chat-smoke.cjs#L1>) | tooling | 57 |
| [scripts/acceptance/electron-chronoz-smoke.cjs:1](<../../../scripts/acceptance/electron-chronoz-smoke.cjs#L1>) | tooling | 26 |
| [scripts/acceptance/electron-construction-smoke.cjs:1](<../../../scripts/acceptance/electron-construction-smoke.cjs#L1>) | tooling | 32 |
| [scripts/acceptance/electron-daily-price-smoke.cjs:1](<../../../scripts/acceptance/electron-daily-price-smoke.cjs#L1>) | tooling | 4 |
| [scripts/acceptance/electron-empty-agents-smoke.cjs:1](<../../../scripts/acceptance/electron-empty-agents-smoke.cjs#L1>) | tooling | 8 |
| [scripts/acceptance/electron-engine-smoke.cjs:1](<../../../scripts/acceptance/electron-engine-smoke.cjs#L1>) | tooling | 27 |
| [scripts/acceptance/electron-entity-agents-smoke.cjs:1](<../../../scripts/acceptance/electron-entity-agents-smoke.cjs#L1>) | tooling | 19 |
| [scripts/acceptance/electron-entity-runtime-live-main.cjs:1](<../../../scripts/acceptance/electron-entity-runtime-live-main.cjs#L1>) | tooling | 7 |
| [scripts/acceptance/electron-entity-runtime-live.cjs:1](<../../../scripts/acceptance/electron-entity-runtime-live.cjs#L1>) | tooling | 21 |
| [scripts/acceptance/electron-financials-smoke.cjs:1](<../../../scripts/acceptance/electron-financials-smoke.cjs#L1>) | tooling | 4 |
| [scripts/acceptance/electron-front-office-smoke-main.cjs:1](<../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L1>) | tooling | 10 |
| [scripts/acceptance/electron-front-office-smoke.cjs:1](<../../../scripts/acceptance/electron-front-office-smoke.cjs#L1>) | tooling | 37 |
| [scripts/acceptance/electron-knowledge-smoke.cjs:1](<../../../scripts/acceptance/electron-knowledge-smoke.cjs#L1>) | tooling | 13 |
| [scripts/acceptance/electron-markdown-editor-smoke.cjs:1](<../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L1>) | tooling | 10 |
| [scripts/acceptance/electron-message-retry-smoke.cjs:1](<../../../scripts/acceptance/electron-message-retry-smoke.cjs#L1>) | tooling | 17 |
| [scripts/acceptance/electron-model-settings-smoke.cjs:1](<../../../scripts/acceptance/electron-model-settings-smoke.cjs#L1>) | tooling | 16 |
| [scripts/acceptance/electron-online-chat-smoke.cjs:1](<../../../scripts/acceptance/electron-online-chat-smoke.cjs#L1>) | tooling | 27 |
| [scripts/acceptance/electron-online-smoke-main.cjs:1](<../../../scripts/acceptance/electron-online-smoke-main.cjs#L1>) | tooling | 1 |
| [scripts/acceptance/electron-openrouter-live-catalog.cjs:1](<../../../scripts/acceptance/electron-openrouter-live-catalog.cjs#L1>) | tooling | 3 |
| [scripts/acceptance/electron-openrouter-live-main.cjs:1](<../../../scripts/acceptance/electron-openrouter-live-main.cjs#L1>) | tooling | 1 |
| [scripts/acceptance/electron-openrouter-smoke.cjs:1](<../../../scripts/acceptance/electron-openrouter-smoke.cjs#L1>) | tooling | 47 |
| [scripts/acceptance/electron-packaged-smoke.cjs:1](<../../../scripts/acceptance/electron-packaged-smoke.cjs#L1>) | tooling | 10 |
| [scripts/acceptance/electron-pdf-image-smoke.cjs:1](<../../../scripts/acceptance/electron-pdf-image-smoke.cjs#L1>) | tooling | 13 |
| [scripts/acceptance/electron-provider-budget-smoke.cjs:1](<../../../scripts/acceptance/electron-provider-budget-smoke.cjs#L1>) | tooling | 15 |
| [scripts/acceptance/electron-release-smoke-main.cjs:1](<../../../scripts/acceptance/electron-release-smoke-main.cjs#L1>) | tooling | 0 |
| [scripts/acceptance/electron-release-smoke.cjs:1](<../../../scripts/acceptance/electron-release-smoke.cjs#L1>) | tooling | 9 |
| [scripts/acceptance/electron-runtime-kernel-smoke.cjs:1](<../../../scripts/acceptance/electron-runtime-kernel-smoke.cjs#L1>) | tooling | 20 |
| [scripts/acceptance/electron-single-file-smoke.cjs:1](<../../../scripts/acceptance/electron-single-file-smoke.cjs#L1>) | tooling | 31 |
| [scripts/acceptance/electron-smoke-main.cjs:1](<../../../scripts/acceptance/electron-smoke-main.cjs#L1>) | tooling | 1 |
| [scripts/acceptance/electron-soft-surfaces-smoke.cjs:1](<../../../scripts/acceptance/electron-soft-surfaces-smoke.cjs#L1>) | tooling | 15 |
| [scripts/acceptance/electron-startup-smoke-main.cjs:1](<../../../scripts/acceptance/electron-startup-smoke-main.cjs#L1>) | tooling | 4 |
| [scripts/acceptance/electron-startup-smoke.cjs:1](<../../../scripts/acceptance/electron-startup-smoke.cjs#L1>) | tooling | 19 |
| [scripts/acceptance/electron-typography-smoke.cjs:1](<../../../scripts/acceptance/electron-typography-smoke.cjs#L1>) | tooling | 9 |
| [scripts/acceptance/electron-ui-polish-smoke.cjs:1](<../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L1>) | tooling | 14 |
| [scripts/acceptance/electron-usage-monitor-smoke.cjs:1](<../../../scripts/acceptance/electron-usage-monitor-smoke.cjs#L1>) | tooling | 28 |
| [scripts/acceptance/electron-victoria-smoke.cjs:1](<../../../scripts/acceptance/electron-victoria-smoke.cjs#L1>) | tooling | 13 |
| [scripts/acceptance/electron-worldview-smoke.cjs:1](<../../../scripts/acceptance/electron-worldview-smoke.cjs#L1>) | tooling | 76 |
| [scripts/acceptance/worldview-excel-check.cjs:1](<../../../scripts/acceptance/worldview-excel-check.cjs#L1>) | tooling | 13 |
| [scripts/acceptance/worldview-financial-check.cjs:1](<../../../scripts/acceptance/worldview-financial-check.cjs#L1>) | tooling | 13 |
| [scripts/acceptance/worldview-phase03-check.cjs:1](<../../../scripts/acceptance/worldview-phase03-check.cjs#L1>) | tooling | 30 |
| [scripts/acceptance/worldview-phase04-check.cjs:1](<../../../scripts/acceptance/worldview-phase04-check.cjs#L1>) | tooling | 9 |
| [scripts/acceptance/worldview-phase05-check.cjs:1](<../../../scripts/acceptance/worldview-phase05-check.cjs#L1>) | tooling | 23 |
| [scripts/acceptance/worldview-phase06-check.cjs:1](<../../../scripts/acceptance/worldview-phase06-check.cjs#L1>) | tooling | 37 |
| [scripts/acceptance/worldview-phase07-check.cjs:1](<../../../scripts/acceptance/worldview-phase07-check.cjs#L1>) | tooling | 20 |
| [scripts/acceptance/worldview-phase08-check.cjs:1](<../../../scripts/acceptance/worldview-phase08-check.cjs#L1>) | tooling | 15 |
| [scripts/acceptance/worldview-price-check.cjs:1](<../../../scripts/acceptance/worldview-price-check.cjs#L1>) | tooling | 20 |
| [scripts/agent-electron-acceptance.cjs:1](<../../../scripts/agent-electron-acceptance.cjs#L1>) | tooling | 63 |
| [scripts/audit/audit-architecture.cjs:1](<../../../scripts/audit/audit-architecture.cjs#L1>) | tooling | 17 |
| [scripts/audit/audit-package.cjs:1](<../../../scripts/audit/audit-package.cjs#L1>) | tooling | 6 |
| [scripts/audit/audit-source.cjs:1](<../../../scripts/audit/audit-source.cjs#L1>) | tooling | 3 |
| [scripts/audit/release-secret-audit.cjs:1](<../../../scripts/audit/release-secret-audit.cjs#L1>) | tooling | 3 |
| [scripts/audit/release-size-audit.cjs:1](<../../../scripts/audit/release-size-audit.cjs#L1>) | tooling | 10 |
| [scripts/build-daily-price-engine.cjs:1](<../../../scripts/build-daily-price-engine.cjs#L1>) | tooling | 3 |
| [scripts/build/build-excel-engine.cjs:1](<../../../scripts/build/build-excel-engine.cjs#L1>) | tooling | 7 |
| [scripts/build/build-yahoo-financials-engine.cjs:1](<../../../scripts/build/build-yahoo-financials-engine.cjs#L1>) | tooling | 4 |
| [scripts/build/prepare-icons.cjs:1](<../../../scripts/build/prepare-icons.cjs#L1>) | tooling | 5 |
| [scripts/build/prepare-pdf-worker.cjs:1](<../../../scripts/build/prepare-pdf-worker.cjs#L1>) | tooling | 0 |
| [scripts/build/secure-export.cjs:1](<../../../scripts/build/secure-export.cjs#L1>) | tooling | 3 |
| [scripts/chat-live-acceptance.cjs:1](<../../../scripts/chat-live-acceptance.cjs#L1>) | tooling | 13 |
| [scripts/clean-engine-backups.cjs:1](<../../../scripts/clean-engine-backups.cjs#L1>) | tooling | 5 |
| [scripts/code-atlas.cjs:1](<../../../scripts/code-atlas.cjs#L1>) | tooling | 2 |
| [scripts/code-atlas/analyze.cjs:1](<../../../scripts/code-atlas/analyze.cjs#L1>) | tooling | 45 |
| [scripts/code-atlas/atlas.test.cjs:1](<../../../scripts/code-atlas/atlas.test.cjs#L1>) | test | 42 |
| [scripts/code-atlas/catalog.cjs:1](<../../../scripts/code-atlas/catalog.cjs#L1>) | tooling | 5 |
| [scripts/code-atlas/generate.cjs:1](<../../../scripts/code-atlas/generate.cjs#L1>) | tooling | 16 |
| [scripts/code-atlas/graphs.cjs:1](<../../../scripts/code-atlas/graphs.cjs#L1>) | tooling | 17 |
| [scripts/code-atlas/ipc.cjs:1](<../../../scripts/code-atlas/ipc.cjs#L1>) | tooling | 10 |
| [scripts/code-atlas/powershell.cjs:1](<../../../scripts/code-atlas/powershell.cjs#L1>) | tooling | 9 |
| [scripts/code-atlas/render.cjs:1](<../../../scripts/code-atlas/render.cjs#L1>) | tooling | 52 |
| [scripts/dataset-electron-acceptance.cjs:1](<../../../scripts/dataset-electron-acceptance.cjs#L1>) | tooling | 6 |
| [scripts/dataset-live-acceptance.cjs:1](<../../../scripts/dataset-live-acceptance.cjs#L1>) | tooling | 12 |
| [scripts/enable-entity-agent-read-access.cjs:1](<../../../scripts/enable-entity-agent-read-access.cjs#L1>) | tooling | 4 |
| [scripts/engine-chat-live.cjs:1](<../../../scripts/engine-chat-live.cjs#L1>) | tooling | 6 |
| [scripts/fixtures/chat-context-tools.cjs:1](<../../../scripts/fixtures/chat-context-tools.cjs#L1>) | tooling | 1 |
| [scripts/fixtures/chronoz-trigger.cjs:1](<../../../scripts/fixtures/chronoz-trigger.cjs#L1>) | tooling | 3 |
| [scripts/fixtures/cmap-pdf.cjs:1](<../../../scripts/fixtures/cmap-pdf.cjs#L1>) | tooling | 2 |
| [scripts/fixtures/excel.cjs:1](<../../../scripts/fixtures/excel.cjs#L1>) | tooling | 6 |
| [scripts/fixtures/image-pdf.cjs:1](<../../../scripts/fixtures/image-pdf.cjs#L1>) | tooling | 2 |
| [scripts/fixtures/legacy-agents.cjs:1](<../../../scripts/fixtures/legacy-agents.cjs#L1>) | tooling | 2 |
| [scripts/fixtures/online-smoke-fetch.cjs:1](<../../../scripts/fixtures/online-smoke-fetch.cjs#L1>) | tooling | 17 |
| [scripts/fixtures/text-pdf.cjs:1](<../../../scripts/fixtures/text-pdf.cjs#L1>) | tooling | 4 |
| [scripts/front-office-benchmark.cjs:1](<../../../scripts/front-office-benchmark.cjs#L1>) | tooling | 10 |
| [scripts/front-office-metrics-export.cjs:1](<../../../scripts/front-office-metrics-export.cjs#L1>) | tooling | 2 |
| [scripts/knowledge-review.cjs:1](<../../../scripts/knowledge-review.cjs#L1>) | tooling | 3 |
| [scripts/m72-live-proof.cjs:1](<../../../scripts/m72-live-proof.cjs#L1>) | tooling | 5 |
| [scripts/nvidia-agent-live.cjs:1](<../../../scripts/nvidia-agent-live.cjs#L1>) | tooling | 15 |
| [scripts/nvidia-thinking-probe-main.cjs:1](<../../../scripts/nvidia-thinking-probe-main.cjs#L1>) | tooling | 6 |
| [scripts/nvidia-thinking-probe.cjs:1](<../../../scripts/nvidia-thinking-probe.cjs#L1>) | tooling | 4 |
| [scripts/orbistry-engine.cjs:1](<../../../scripts/orbistry-engine.cjs#L1>) | tooling | 5 |
| [scripts/provider-rca-main.cjs:1](<../../../scripts/provider-rca-main.cjs#L1>) | tooling | 17 |
| [scripts/provider-rca.cjs:1](<../../../scripts/provider-rca.cjs#L1>) | tooling | 38 |
| [scripts/report-section.cjs:1](<../../../scripts/report-section.cjs#L1>) | tooling | 1 |
| [scripts/reset-universe-chat.cjs:1](<../../../scripts/reset-universe-chat.cjs#L1>) | tooling | 2 |
| [scripts/runtime-kernel-report.cjs:1](<../../../scripts/runtime-kernel-report.cjs#L1>) | tooling | 7 |
| [scripts/statistics-live-acceptance.cjs:1](<../../../scripts/statistics-live-acceptance.cjs#L1>) | tooling | 15 |
| [tests/integration/architecture-contract.test.cjs:1](<../../../tests/integration/architecture-contract.test.cjs#L1>) | test | 15 |
| [scripts/code-atlas/powershell-parser.ps1:1](<../../../scripts/code-atlas/powershell-parser.ps1#L1>) | tooling | 1 |
