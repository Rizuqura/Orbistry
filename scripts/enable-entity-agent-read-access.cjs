const fs = require("node:fs/promises");
const path = require("node:path");
const { AgentStore } = require("../electron/ai/agents/agent-store.cjs");
const {
  EntityAgentService,
} = require("../electron/ai/agents/entity-agents.cjs");
const {
  withReadOnlyAccess,
} = require("../electron/ai/agents/entity-agent-access.cjs");

/** Applies the user's standing-read authorization to existing assigned definitions. Backs up definitions beside the original file and preserves unapplied draft changes; does not change source documents, indexes, credentials or unsupported operations. */
async function main() {
  const [profile, vault] = process.argv.slice(2);
  if (
    !profile ||
    !vault ||
    !path.isAbsolute(profile) ||
    !path.isAbsolute(vault)
  )
    throw new Error(
      "Provide explicit absolute application-profile and Universe paths.",
    );
  const directory = await fs.realpath(profile);
  const root = await fs.realpath(vault);
  const agents = new AgentStore(directory);
  const service = new EntityAgentService({ agents, getVault: () => root });
  const ids = [
    ...new Set(
      (await service.list({ vaultPath: root })).map((item) => item.agentId),
    ),
  ];
  const plans = [];
  for (const id of ids) {
    const agent = await agents.get(id);
    const previous = agent.construction;
    if (!previous?.active) continue;
    const active = withReadOnlyAccess(previous.active);
    if (JSON.stringify(active) === JSON.stringify(previous.active)) continue;
    plans.push({ id, previous, active });
  }
  if (plans.length) {
    const backup = path.join(
      directory,
      "agents.before-read-only-" + Date.now() + ".json",
    );
    await fs.copyFile(
      agents.file,
      backup,
      require("node:fs").constants.COPYFILE_EXCL,
    );
    for (const { id, previous, active } of plans) {
      const saved = await agents.saveConstruction({
        id,
        action: "apply",
        expectedRevision: previous.revision,
        config: active,
      });
      if (previous.draftRevision !== previous.activeRevision)
        await agents.saveConstruction({
          id,
          action: "draft",
          expectedRevision: saved.construction.revision,
          config: withReadOnlyAccess(previous.draft),
        });
    }
    console.log(
      JSON.stringify({
        updatedDefinitions: plans.length,
        backupFile: path.basename(backup),
        sourceFilesChanged: false,
      }),
    );
  } else
    console.log(
      JSON.stringify({ updatedDefinitions: 0, sourceFilesChanged: false }),
    );
}

if (require.main === module)
  main().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });

module.exports = { main };
