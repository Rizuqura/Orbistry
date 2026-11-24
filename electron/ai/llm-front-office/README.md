# LLM front office

This Node/CommonJS backend implements an opt-in context-free experiment path while preserving the existing agent chat. Start in service.cjs; public contracts are in types/front-office.ts and experiment-contracts.cjs. Defaults live in config/defaults.json.

Intake → deterministic requirements → full-history budget → capability/evidence registry → manual/auto routing → one reliability controller → native or optional authenticated LiteLLM HTTP client → streaming/response validation → existing run/conversation stores → content-free local metrics.

The package contains all P01–P13 logical boundaries, with the Settings UI in features/model-settings/front-office-settings.tsx. The existing-agent-baseline observer remains distinct from experimental metrics. No hidden persona/system prompt, retrieval, tools, memory service or Python sidecar is added to experiments.

- Run targeted coverage: npm.cmd run test:front-office
- Run the isolated UI acceptance: npm.cmd run test:front-office:electron
- Run the synthetic benchmark: npm.cmd run benchmark:front-office

The optional external proxy requirements/config are examples, not an automatically installed service. A real provider/proxy benchmark needs explicit credentials/runtime and is never inferred from fixture results.

The former pre-LLM notes were removed. See the [current application architecture](../../../docs/architecture/README.md). Shared helpers required by assigned-agent chat remain; experimental inference is not registered in production.
