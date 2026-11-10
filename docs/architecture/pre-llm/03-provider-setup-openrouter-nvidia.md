# Providers and optional LiteLLM

Orbistry's experimental native client reuses the existing secure HTTP request layer, with **no agent prompt translation**. It sends only the user question and complete successful experimental history. OpenRouter uses `https://openrouter.ai/api/v1/chat/completions`; NVIDIA uses `https://integrate.api.nvidia.com/v1/chat/completions`, the NVIDIA-hosted OpenAI-compatible service. Self-hosted NIM and other NVIDIA products are not silently substituted. NVIDIA account eligibility, quota and available models must be verified with the actual account; none is assumed free or unlimited.

Enter native keys in the existing provider Settings. Refresh capability metadata explicitly in **Settings → LLM Backend / Front Office**, enable experiments, select a deployment, save settings and create a new experiment. Keys remain in `CredentialStore` encrypted with Electron safeStorage. The experiment service receives credential aliases, not renderer-supplied headers or endpoints. Catalog listing is distinct from verified inference availability.

## Optional service and version pin

LiteLLM is an **external, optional service**, not a bundled Python sidecar. Orbistry's client supports its OpenAI-compatible HTTP API, authenticates with a separate safeStorage key, restricts its URL to `http://127.0.0.1:PORT/v1`, refuses redirects and never auto-starts a proxy. The operator owns startup/shutdown. There is consequently no Orbistry-created proxy subprocess to orphan on app shutdown. A liveness check confirms reachability, not server-version attestation or provider access.

The optional setup is pinned in `electron/ai/llm-front-office/config/litellm-requirements.txt` to **1.106.6**. The [official release](https://github.com/BerriAI/litellm/releases/tag/v1.106.6), [version-specific license](https://github.com/BerriAI/litellm/blob/v1.106.6/LICENSE), [provider configuration](https://docs.litellm.ai/docs/proxy/configs), [OpenRouter integration](https://docs.litellm.ai/docs/providers/openrouter) and [NVIDIA integration](https://docs.litellm.ai/docs/providers/nvidia_nim) were reviewed on 2026-10-30. Core code is MIT; the upstream enterprise directory has separate terms. No upstream code or Python dependency is bundled in the Electron release.

Security review included the publisher's [advisory list](https://github.com/BerriAI/litellm/security/advisories), the [Enterprise key-disclosure advisory](https://github.com/BerriAI/litellm/security/advisories/GHSA-w4c7-34wj-hqm8) (the 1.106 line lists 1.106.5 as patched), and [request routing credential-exfiltration advisory](https://github.com/BerriAI/litellm/security/advisories/GHSA-3cv6-jpf6-8222) (patched in earlier release lines). This is a scoped review, not a guarantee of zero outstanding vulnerabilities or a transitive Python environment audit. Re-review advisories and the exact dependency environment before deploying; maintain the version pin and test A/B parity before an update. The release page provides signed-image verification instructions if using the optional container distribution.

With an independently installed Python runtime, a dedicated environment can be prepared using the pinned requirements file. The following commands are **setup instructions, not commands executed in this session**; only Windows Store Python launch aliases were found, and no Python runtime was installed or proxy started:

```powershell
python -m venv .venv
.venv\Scripts\python.exe -m pip install -r electron/ai/llm-front-office/config/litellm-requirements.txt
.venv\Scripts\litellm.exe --config electron/ai/llm-front-office/config/litellm.example.yaml --host 127.0.0.1 --port 4000
```

Provide the service's `OPENROUTER_API_KEY`, `NVIDIA_NIM_API_KEY` and `LITELLM_MASTER_KEY` through its environment or a secret manager, without committing keys or command history containing literal secrets. The example YAML references environment variables and wildcard provider routes. Configure only the providers you intend to use. Save the matching local gateway key in Orbistry's Advanced panel, enable the gateway in non-secret configuration, and check liveness. Never expose an unauthenticated/public proxy.

The proxy must use `num_retries: 0` and no fallbacks as in the example: Orbistry is the experiment retry owner. A/B payloads use identical messages, temperature and output cap; B prefixes the routing model with `openrouter/` or `nvidia_nim/`. No extra system instruction, classifier or schema-repair call is added. Do not supply a proxy configured to add independent routing, retries or prompt transforms and then attribute differences solely to transport overhead.

Native transport, authenticated proxy HTTP behavior and normal provider regressions are tested with synthetic fixtures. **Real LiteLLM startup/inference and actual OpenRouter/NVIDIA account inference were not executed.** Their absence is recorded as an explicit verification limit rather than a performance claim.
