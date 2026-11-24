# Model-provider adapters

[Atlas](<../README.md>) / [All symbols and callers/callees](<../symbols/providers.md>)

Isolates optional inference transports from deterministic application services.

Owns: electron/ai/providers/. This ownership is editorial; source locations and import edges below are generated facts.

12 source files; 265 callable declarations; 10 contract declarations.

## Entry points and exported symbols

Candidates from compiler export tables and methods on exported classes. Registration, availability, authorization and runtime reachability must be checked separately.

| Symbol | Source | Kind |
| --- | --- | --- |
| [remoteError](<../symbols/files/electron/ai/providers/gemini-provider.cjs.md#s-d090e13f3d76e2d3>) | [electron/ai/providers/gemini-provider.cjs:37](<../../../electron/ai/providers/gemini-provider.cjs#L37>) | FunctionDeclaration |
| [GeminiProvider](<../symbols/files/electron/ai/providers/gemini-provider.cjs.md#s-4e7a7efd6a2d6af1>) | [electron/ai/providers/gemini-provider.cjs:89](<../../../electron/ai/providers/gemini-provider.cjs#L89>) | ClassDeclaration |
| [NvidiaProvider](<../symbols/files/electron/ai/providers/nvidia-provider.cjs.md#s-72fe974a679af8ae>) | [electron/ai/providers/nvidia-provider.cjs:9](<../../../electron/ai/providers/nvidia-provider.cjs#L9>) | ClassDeclaration |
| [DEFAULT_BASE_URL](<../symbols/files/electron/ai/providers/ollama-provider.cjs.md#s-1853813a146b8061>) | [electron/ai/providers/ollama-provider.cjs:5](<../../../electron/ai/providers/ollama-provider.cjs#L5>) | VariableDeclaration |
| [validateBaseUrl](<../symbols/files/electron/ai/providers/ollama-provider.cjs.md#s-af4d66863dbb4100>) | [electron/ai/providers/ollama-provider.cjs:8](<../../../electron/ai/providers/ollama-provider.cjs#L8>) | FunctionDeclaration |
| [OllamaProvider](<../symbols/files/electron/ai/providers/ollama-provider.cjs.md#s-ad4b74bd23abdb55>) | [electron/ai/providers/ollama-provider.cjs:119](<../../../electron/ai/providers/ollama-provider.cjs#L119>) | ClassDeclaration |
| [readChatStream](<../symbols/files/electron/ai/providers/ollama-stream.cjs.md#s-f7526d2f26c7a960>) | [electron/ai/providers/ollama-stream.cjs:3](<../../../electron/ai/providers/ollama-stream.cjs#L3>) | FunctionDeclaration |
| [remoteError](<../symbols/files/electron/ai/providers/openai-chat-provider.cjs.md#s-22f13887fe14c405>) | [electron/ai/providers/openai-chat-provider.cjs:68](<../../../electron/ai/providers/openai-chat-provider.cjs#L68>) | FunctionDeclaration |
| [OpenAIChatProvider](<../symbols/files/electron/ai/providers/openai-chat-provider.cjs.md#s-d599b541d3db84b4>) | [electron/ai/providers/openai-chat-provider.cjs:107](<../../../electron/ai/providers/openai-chat-provider.cjs#L107>) | ClassDeclaration |
| [OpenRouterProvider](<../symbols/files/electron/ai/providers/openrouter-provider.cjs.md#s-fc52b1102dfbe3e0>) | [electron/ai/providers/openrouter-provider.cjs:39](<../../../electron/ai/providers/openrouter-provider.cjs#L39>) | ClassDeclaration |
| [readRemoteJson](<../symbols/files/electron/ai/providers/remote-json.cjs.md#s-ce48dfba0aa4322a>) | [electron/ai/providers/remote-json.cjs:3](<../../../electron/ai/providers/remote-json.cjs#L3>) | FunctionDeclaration |
| [GeminiProvider.request](<../symbols/files/electron/ai/providers/gemini-provider.cjs.md#s-2e56134df44bde91>) | [electron/ai/providers/gemini-provider.cjs:95](<../../../electron/ai/providers/gemini-provider.cjs#L95>) | MethodDeclaration |
| [GeminiProvider.listModels](<../symbols/files/electron/ai/providers/gemini-provider.cjs.md#s-2be78d6f915a8524>) | [electron/ai/providers/gemini-provider.cjs:172](<../../../electron/ai/providers/gemini-provider.cjs#L172>) | MethodDeclaration |
| [GeminiProvider.getStatus](<../symbols/files/electron/ai/providers/gemini-provider.cjs.md#s-047d0d7cf7e60ad8>) | [electron/ai/providers/gemini-provider.cjs:232](<../../../electron/ai/providers/gemini-provider.cjs#L232>) | MethodDeclaration |
| [GeminiProvider.prepare](<../symbols/files/electron/ai/providers/gemini-provider.cjs.md#s-275cfad17bad8649>) | [electron/ai/providers/gemini-provider.cjs:262](<../../../electron/ai/providers/gemini-provider.cjs#L262>) | MethodDeclaration |
| [GeminiProvider.complete](<../symbols/files/electron/ai/providers/gemini-provider.cjs.md#s-edd5ba510cd7bdd1>) | [electron/ai/providers/gemini-provider.cjs:267](<../../../electron/ai/providers/gemini-provider.cjs#L267>) | MethodDeclaration |
| [NvidiaProvider.generationParameters](<../symbols/files/electron/ai/providers/nvidia-provider.cjs.md#s-98d9913fe71bd52f>) | [electron/ai/providers/nvidia-provider.cjs:16](<../../../electron/ai/providers/nvidia-provider.cjs#L16>) | MethodDeclaration |
| [OllamaProvider.request](<../symbols/files/electron/ai/providers/ollama-provider.cjs.md#s-35307b242f4f5560>) | [electron/ai/providers/ollama-provider.cjs:137](<../../../electron/ai/providers/ollama-provider.cjs#L137>) | MethodDeclaration |
| [OllamaProvider.pull](<../symbols/files/electron/ai/providers/ollama-provider.cjs.md#s-d315fd448180e3e9>) | [electron/ai/providers/ollama-provider.cjs:226](<../../../electron/ai/providers/ollama-provider.cjs#L226>) | MethodDeclaration |
| [OllamaProvider.listModels](<../symbols/files/electron/ai/providers/ollama-provider.cjs.md#s-6b77d21ad8966514>) | [electron/ai/providers/ollama-provider.cjs:301](<../../../electron/ai/providers/ollama-provider.cjs#L301>) | MethodDeclaration |
| [OllamaProvider.describeModel](<../symbols/files/electron/ai/providers/ollama-provider.cjs.md#s-63b05762c5a37897>) | [electron/ai/providers/ollama-provider.cjs:313](<../../../electron/ai/providers/ollama-provider.cjs#L313>) | MethodDeclaration |
| [OllamaProvider.prepare](<../symbols/files/electron/ai/providers/ollama-provider.cjs.md#s-091d0b8dfca6f9c9>) | [electron/ai/providers/ollama-provider.cjs:328](<../../../electron/ai/providers/ollama-provider.cjs#L328>) | MethodDeclaration |
| [OllamaProvider.streamChat](<../symbols/files/electron/ai/providers/ollama-provider.cjs.md#s-be4271d68f86c17b>) | [electron/ai/providers/ollama-provider.cjs:349](<../../../electron/ai/providers/ollama-provider.cjs#L349>) | MethodDeclaration |
| [OllamaProvider.getStatus](<../symbols/files/electron/ai/providers/ollama-provider.cjs.md#s-5123d5c867ad7ef2>) | [electron/ai/providers/ollama-provider.cjs:444](<../../../electron/ai/providers/ollama-provider.cjs#L444>) | MethodDeclaration |
| [OllamaProvider.complete](<../symbols/files/electron/ai/providers/ollama-provider.cjs.md#s-6d56407bfa5196b0>) | [electron/ai/providers/ollama-provider.cjs:473](<../../../electron/ai/providers/ollama-provider.cjs#L473>) | MethodDeclaration |
| [OllamaProvider.testModel](<../symbols/files/electron/ai/providers/ollama-provider.cjs.md#s-760f27b8110fd5f4>) | [electron/ai/providers/ollama-provider.cjs:593](<../../../electron/ai/providers/ollama-provider.cjs#L593>) | MethodDeclaration |
| [OpenAIChatProvider.generationParameters](<../symbols/files/electron/ai/providers/openai-chat-provider.cjs.md#s-0737f3bc99dc9a7c>) | [electron/ai/providers/openai-chat-provider.cjs:110](<../../../electron/ai/providers/openai-chat-provider.cjs#L110>) | MethodDeclaration |
| [OpenAIChatProvider.request](<../symbols/files/electron/ai/providers/openai-chat-provider.cjs.md#s-b38b5e0af2267c91>) | [electron/ai/providers/openai-chat-provider.cjs:127](<../../../electron/ai/providers/openai-chat-provider.cjs#L127>) | MethodDeclaration |
| [OpenAIChatProvider.listModels](<../symbols/files/electron/ai/providers/openai-chat-provider.cjs.md#s-bba2d1b7789a1da7>) | [electron/ai/providers/openai-chat-provider.cjs:198](<../../../electron/ai/providers/openai-chat-provider.cjs#L198>) | MethodDeclaration |
| [OpenAIChatProvider.getStatus](<../symbols/files/electron/ai/providers/openai-chat-provider.cjs.md#s-27eb65d56cdc7527>) | [electron/ai/providers/openai-chat-provider.cjs:239](<../../../electron/ai/providers/openai-chat-provider.cjs#L239>) | MethodDeclaration |
| [OpenAIChatProvider.prepare](<../symbols/files/electron/ai/providers/openai-chat-provider.cjs.md#s-8ef24c44c655b695>) | [electron/ai/providers/openai-chat-provider.cjs:269](<../../../electron/ai/providers/openai-chat-provider.cjs#L269>) | MethodDeclaration |
| [OpenAIChatProvider.probe](<../symbols/files/electron/ai/providers/openai-chat-provider.cjs.md#s-c133d3057fb7c65d>) | [electron/ai/providers/openai-chat-provider.cjs:273](<../../../electron/ai/providers/openai-chat-provider.cjs#L273>) | MethodDeclaration |
| [OpenAIChatProvider.complete](<../symbols/files/electron/ai/providers/openai-chat-provider.cjs.md#s-16c9ee5446ba4e47>) | [electron/ai/providers/openai-chat-provider.cjs:324](<../../../electron/ai/providers/openai-chat-provider.cjs#L324>) | MethodDeclaration |
| [OpenRouterProvider.listModels](<../symbols/files/electron/ai/providers/openrouter-provider.cjs.md#s-d967dd193ba2db0e>) | [electron/ai/providers/openrouter-provider.cjs:51](<../../../electron/ai/providers/openrouter-provider.cjs#L51>) | MethodDeclaration |
| [OpenRouterProvider.complete](<../symbols/files/electron/ai/providers/openrouter-provider.cjs.md#s-2f6fa6d2e99f6834>) | [electron/ai/providers/openrouter-provider.cjs:126](<../../../electron/ai/providers/openrouter-provider.cjs#L126>) | MethodDeclaration |

## Depends on

Literal runtime production-file imports only; lazy imports are included. Type, test, tool and external dependencies remain available in the full index.

- [Assigned Agents and jurisdiction](<agents.md>): 2 import sites; example [electron/ai/providers/gemini-provider.cjs:285](<../../../electron/ai/providers/gemini-provider.cjs#L285>).
- [Retained AI runtime](<ai-runtime.md>): 14 import sites; example [electron/ai/providers/gemini-provider.cjs:5](<../../../electron/ai/providers/gemini-provider.cjs#L5>).

## Depended on by

Literal runtime production-file imports only; lazy imports are included. Type, test, tool and external dependencies remain available in the full index.

- [Retained AI runtime](<ai-runtime.md>): 4 import sites; example [electron/ai/llm-front-office/provider-gateway.cjs:5](<../../../electron/ai/llm-front-office/provider-gateway.cjs#L5>).
- [Electron composition and IPC security](<desktop.md>): 1 import sites; example [electron/main.cjs:37](<../../../electron/main.cjs#L37>).

## Contracts

- [modelName](<../symbols/files/electron/ai/providers/gemini-provider.cjs.md#s-223103d923012d3a>) — zod-syntax-candidate; local schema/type.
- [messagesSchema](<../symbols/files/electron/ai/providers/gemini-provider.cjs.md#s-386c57ebd09ed911>) — zod-syntax-candidate; local schema/type.
- [GeminiProvider.complete.format](<../symbols/files/electron/ai/providers/gemini-provider.cjs.md#s-f1c47bd15e6fc946>) — zod-syntax-candidate; local schema/type.
- [modelId](<../symbols/files/electron/ai/providers/openai-chat-provider.cjs.md#s-28ce07c819c178b1>) — zod-syntax-candidate; local schema/type.
- [catalog](<../symbols/files/electron/ai/providers/openai-chat-provider.cjs.md#s-cc47b68a06ab2c13>) — zod-syntax-candidate; local schema/type.
- [chunkSchema](<../symbols/files/electron/ai/providers/openai-chat-provider.cjs.md#s-fcaf3ca4893d5ba4>) — zod-syntax-candidate; local schema/type.
- [OpenAIChatProvider.complete.messages](<../symbols/files/electron/ai/providers/openai-chat-provider.cjs.md#s-d26d9806f80ba720>) — zod-syntax-candidate; local schema/type.
- [modelId](<../symbols/files/electron/ai/providers/openrouter-provider.cjs.md#s-3f40c12653c573d6>) — zod-syntax-candidate; local schema/type.
- [catalogItem](<../symbols/files/electron/ai/providers/openrouter-provider.cjs.md#s-1ac52b57395546c3>) — zod-syntax-candidate; local schema/type.
- [catalog](<../symbols/files/electron/ai/providers/openrouter-provider.cjs.md#s-282f3c8878b6cecb>) — zod-syntax-candidate; local schema/type.

## Source inventory

| File | Role | Declarations |
| --- | --- | --- |
| [electron/ai/providers/gemini-provider.cjs:1](<../../../electron/ai/providers/gemini-provider.cjs#L1>) | production | 23 |
| [electron/ai/providers/gemini-provider.test.cjs:1](<../../../electron/ai/providers/gemini-provider.test.cjs#L1>) | test | 39 |
| [electron/ai/providers/nvidia-provider.cjs:1](<../../../electron/ai/providers/nvidia-provider.cjs#L1>) | production | 2 |
| [electron/ai/providers/nvidia-provider.test.cjs:1](<../../../electron/ai/providers/nvidia-provider.test.cjs#L1>) | test | 54 |
| [electron/ai/providers/ollama-provider.cjs:1](<../../../electron/ai/providers/ollama-provider.cjs#L1>) | production | 33 |
| [electron/ai/providers/ollama-provider.test.cjs:1](<../../../electron/ai/providers/ollama-provider.test.cjs#L1>) | test | 30 |
| [electron/ai/providers/ollama-stream.cjs:1](<../../../electron/ai/providers/ollama-stream.cjs#L1>) | production | 3 |
| [electron/ai/providers/ollama-stream.test.cjs:1](<../../../electron/ai/providers/ollama-stream.test.cjs#L1>) | test | 35 |
| [electron/ai/providers/openai-chat-provider.cjs:1](<../../../electron/ai/providers/openai-chat-provider.cjs#L1>) | production | 29 |
| [electron/ai/providers/openrouter-provider.cjs:1](<../../../electron/ai/providers/openrouter-provider.cjs#L1>) | production | 9 |
| [electron/ai/providers/openrouter-provider.test.cjs:1](<../../../electron/ai/providers/openrouter-provider.test.cjs#L1>) | test | 23 |
| [electron/ai/providers/remote-json.cjs:1](<../../../electron/ai/providers/remote-json.cjs#L1>) | production | 1 |
