# Security

Victoria Beta is experimental desktop research software. Use reviewed files and keep Electron and dependencies current. Do not treat grounding/citation or numeric validation as proof of factual correctness.

Provider keys are encrypted by Electron safeStorage and stored only in the local userData profile. Configuration fails when secure OS storage is unavailable; plaintext fallback is not supported. Never put real keys in issues, source files, screenshots, logs, sample research or pull requests.

Production loads a static local renderer with context isolation, sandboxing and Node integration disabled. IPC accepts only the application's main frame and document; navigation, new windows and permissions are restricted. The export's CSP allows local resource loading while blocking remote renderer requests; provider requests originate in main. Local vault reads are constrained by reviewed paths, schemas and symlink checks. Native PDF/image parsers and Windows OCR still process untrusted input: this is a baseline, not a completed penetration test or per-document OS sandbox.

For a suspected vulnerability, use the repository's **Security → Report a vulnerability** private reporting facility if available. If unavailable, open an issue requesting a private contact without exploit details, keys or personal files. Do not disclose sensitive reports publicly while a private channel is being arranged. No response-time SLA is offered for the beta.

`npm audit` and `node scripts/audit/release-secret-audit.cjs` provide reproducible baseline checks. The secret scanner covers known patterns in tracked files and reachable Git blobs; it is not exhaustive. Revoke/rotate a discovered key before considering history cleanup. History rewriting is never automatic.

Selecting a remote provider sends reviewed research/guidance text, CSV profiles/samples/results, questions and included history to that provider. Its billing, retention and policies apply. Local run audits may retain prompts, answers and computed evidence even after a chat is deleted. Back up, protect and explicitly manage your vault and profile.
