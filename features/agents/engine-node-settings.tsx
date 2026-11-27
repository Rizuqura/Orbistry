import type { AgentConstructionConfig } from "../../types/ai";
import type { EngineDefinition } from "../../types/entity-agents";

type NodeConfig = AgentConstructionConfig["nodes"][number]["config"];

/** Edits only the selected node's registry contract. Entity-specific source/ticker bindings resolve from the assignment at execution time. */
export function EngineNodeSettings({
  config,
  definitions,
  blocked,
  onChange,
}: {
  config: NodeConfig;
  definitions: EngineDefinition[];
  blocked: boolean;
  onChange: (config: NodeConfig) => void;
}) {
  const definition = definitions.find((item) => item.id === config.engineId);
  const operation =
    config.operation ?? (config.engineId === "chronoz" ? "get_report" : "");
  return (
    <section
      className="studio-engine-controls"
      aria-label="Engine node configuration"
    >
      <label>
        Engine
        <select
          aria-label="Node engine"
          disabled={blocked || !definitions.length}
          value={config.engineId ?? ""}
          onChange={(event) => {
            const selected = definitions.find(
              (item) => item.id === event.target.value,
            );
            if (selected)
              onChange({
                instanceId: config.instanceId,
                engineId: selected.id,
                engineVersion: selected.version,
                ...(selected.packageDigest
                  ? { packageDigest: selected.packageDigest }
                  : {}),
                operation: selected.operations[0],
                permissionPolicy: selected.packageDigest
                  ? "read-only-approval"
                  : "read-only-auto",
                parameters: {},
              });
          }}
        >
          {!definition && (
            <option value={config.engineId ?? ""}>
              {config.engineId ?? "Choose engine"}
            </option>
          )}
          {definitions.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name ?? item.id} {item.version}
            </option>
          ))}
        </select>
      </label>
      <label>
        Operation
        <select
          aria-label="Node operation"
          disabled={blocked || !definition}
          value={operation}
          onChange={(event) =>
            onChange({
              ...config,
              operation: event.target.value,
              engineVersion: definition?.version,
            })
          }
        >
          {definition?.operations.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
      <label>
        Execution policy
        <select
          aria-label="Node execution policy"
          disabled={blocked}
          value={config.permissionPolicy ?? "disabled"}
          onChange={(event) =>
            onChange({
              ...config,
              permissionPolicy: event.target
                .value as NodeConfig["permissionPolicy"],
            })
          }
        >
          <option
            disabled={Boolean(config.packageDigest)}
            value="read-only-auto"
          >
            Automatic read-only access
          </option>
          <option value="disabled">Disabled</option>
          <option value="read-only-approval">
            Read-only with human approval
          </option>
        </select>
      </label>
      <label>
        <input
          type="checkbox"
          aria-label="Refresh engine data"
          disabled={blocked}
          checked={config.parameters?.force ?? false}
          onChange={(event) =>
            onChange({ ...config, parameters: { force: event.target.checked } })
          }
        />{" "}
        Refresh engine data when used
      </label>
      <small>Instance {config.instanceId}</small>
      <p role="status">
        {definition?.operations.includes(operation)
          ? "Registered operation"
          : "Choose a registered operation"}
      </p>
      <p>
        Entity source and ticker bindings resolve from the current assignment.
        Automatic access permits supported read operations and cache updates;
        source files and entity settings cannot be changed by the agent.
      </p>
    </section>
  );
}
