const implementation = `/** Adds validated numbers; no network access or source writes. */
async function execute({ operation, input, context }) {
  if (operation !== "add") throw new Error("Unsupported operation");
  return { sum: input.left + input.right };
}
module.exports = { execute };`;

const operation = {
  id: "add",
  description: "Add two explicit numbers.",
  input_schema: {
    type: "object",
    properties: { left: { type: "number" }, right: { type: "number" } },
    required: ["left", "right"],
    additionalProperties: false,
  },
  output_schema: {
    type: "object",
    properties: { sum: { type: "number" } },
    required: ["sum"],
    additionalProperties: false,
  },
  read_only: true,
  network: "none",
  timeout_ms: 10000,
};

/** Teaches the existing terminal workflow with an executable starter; displays instructions only and grants no permissions. */
export function EngineDevelopmentGuide() {
  return (
    <details className="engine-authoring-help">
      <summary>Register and sign your own Engine</summary>
      <h3>Engine development</h3>
      <p>
        Build and publish an Orbistry Engine. CLI-based development · Local
        execution · Explicit authorization.
      </p>
      <p>
        Prerequisites: Orbistry source checkout, its Node development
        dependencies installed with npm ci, an existing Universe and a saved
        Entity. Run these PowerShell commands from the Orbistry repository root.
        Replace the example paths and Entity ID with your own.
      </p>
      <ol className="engine-development-steps">
        <li>
          <h4>01 · Initialize Package</h4>
          <p>
            Create the parent folders, then generate a working manifest and
            executable template. The package folder itself must not already
            exist.
          </p>
          <pre>{String.raw`New-Item -ItemType Directory -Force "C:\EngineProjects", "C:\EngineKeys"
npm.cmd run engine -- init --source "C:\EngineProjects\my-engine" --id my-engine`}</pre>
          <pre>{`my-engine/
  engine_manifest.json
  index.cjs
  README.md`}</pre>
        </li>
        <li>
          <h4>02 · Implement Operations</h4>
          <p>
            Edit index.cjs and engine_manifest.json together. Export async
            execute({"{ operation, input, context }"}); return JSON-compatible
            data matching the selected operation’s output schema. Context
            contains only host-generated entityId and executionId, not
            credentials, Vault paths or source documents.
          </p>
          <pre>{implementation}</pre>
          <details>
            <summary>Inspect the starter operation contract</summary>
            <pre>{JSON.stringify(operation, null, 2)}</pre>
          </details>
          <p>
            The complete manifest also declares schema_version: 2, protocol:
            orbistry.engine/1, engine_id, engine_version, name, description,
            entry: index.cjs, operations and files. init generates these fields;
            seal fills the file checksums. Keep the operation ID and
            input/output schemas consistent with execute(). The addition example
            accepts {`{"left":8,"right":13}`} and returns {`{"sum":21}`}.
          </p>
        </li>
        <li>
          <h4>03 · Validate &amp; Sign</h4>
          <p>
            Finish editing, seal all package files, then check integrity. Create
            publisher keys once in an existing directory outside the package.
            Set ORBISTRY_ENGINE_PASSPHRASE privately in your terminal using the
            signing guide; it is a variable name, not a password to paste into
            source.
          </p>
          <pre>{String.raw`npm.cmd run engine -- seal --source "C:\EngineProjects\my-engine"
npm.cmd run engine -- check --source "C:\EngineProjects\my-engine"
npm.cmd run engine -- keygen --private-key "C:\EngineKeys\publisher.engine-private.pem" --public-key "C:\EngineKeys\publisher.public.pem" --passphrase-env ORBISTRY_ENGINE_PASSPHRASE
npm.cmd run engine -- sign --source "C:\EngineProjects\my-engine" --private-key "C:\EngineKeys\publisher.engine-private.pem" --passphrase-env ORBISTRY_ENGINE_PASSPHRASE
npm.cmd run engine -- verify --source "C:\EngineProjects\my-engine" --public-key "C:\EngineKeys\publisher.public.pem"`}</pre>
          <p>
            Key generation refuses existing key files. Reuse your keys for later
            versions. Editing after sealing requires resealing; seal removes the
            old signature, so sign again. A valid signature proves possession of
            that key; compare the publisher fingerprint independently. It does
            not grant local trust.
          </p>
        </li>
        <li>
          <h4>04 · Install &amp; Authorize</h4>
          <p>
            Installation validates and copies the package but leaves it
            untrusted. Review its code and publisher, then use the exact digest
            returned after installation. Link only permitted operations to a
            saved Entity ID, not its display name.
          </p>
          <pre>{String.raw`$universe = "C:\Universe"
$entity = "your-saved-entity-id"
npm.cmd run engine -- install --vault "$universe" --source "C:\EngineProjects\my-engine"
npm.cmd run engine -- trust --vault "$universe" --id my-engine --digest "<reviewed-64-character-digest>"
npm.cmd run engine -- link --vault "$universe" --entity "$entity" --id my-engine --operations add --policy manual
npm.cmd run engine -- describe --vault "$universe" --entity "$entity"`}</pre>
          <p>
            Manual links require approval for each execution. Automatic policy
            is explicit standing permission, not a default. Outbound operations
            also require network consent through --allow-network. Application
            callers must independently enforce host authorization. Linking a
            package does not automatically attach it to Assigned Agent
            construction or enable model tool use.
          </p>
        </li>
        <li>
          <h4>05 · Test Execution</h4>
          <p>
            Write an input JSON file outside the package, run against the linked
            Entity, and inspect the returned data and execution receipt. These
            commands execute the addition starter, not a live provider.
          </p>
          <pre>{String.raw`'{"left":8,"right":13}' | Set-Content -Encoding utf8 "C:\EngineProjects\input.json"
npm.cmd run engine -- run --vault "$universe" --entity "$entity" --id my-engine --operation add --input "C:\EngineProjects\input.json" --approve
npm.cmd run engine -- result --vault "$universe" --entity "$entity" --execution "<execution-id-from-run>"`}</pre>
          <p>
            Expected starter data: {`{"sum":21}`}. Use the actual receipt’s
            UUID, never a made-up ID. Check status, Entity, operation, package
            digest, input/result hashes and timestamps. Successful validation or
            signature verification does not prove successful execution. Failed
            or cancelled receipts are not completed results; a running receipt
            may reflect an interrupted process. result reads historical stored
            data without rerunning the package.
          </p>
        </li>
      </ol>
      <h4>Capability and security limits</h4>
      <p>
        The current package registry accepts only read_only: true operations.
        Device actuation, IoT control, financial orders and other state-changing
        package operations are unsupported. Read-only is a declared contract: a
        locally trusted Node package runs code, and its worker is resource/fault
        isolation, not an operating-system security sandbox. Review code before
        trust; network declarations alone do not sandbox it.
      </p>
      <h4>Publish and share</h4>
      <p>
        Publish the final signed manifest and every checksum-listed file at the
        same HTTPS directory, and share the publisher key independently. Use a
        new engine_version for changed published bytes. Recipients can pull,
        verify, review, trust and link separately:
      </p>
      <pre>{String.raw`npm.cmd run engine -- pull --vault "$universe" --source "https://your-host.example/my-engine/engine_manifest.json"`}</pre>
      <p>
        Complete formats: docs/engines/ENGINE_AUTHORING.md,
        docs/engines/ENGINE_SIGNING.md, docs/engines/engine-manifest.schema.json
        and docs/engines/engine-signature.schema.json. Working example:
        examples/engines/number-tools. This Settings page only inspects
        metadata; all commands above are instructions for your terminal.
      </p>
    </details>
  );
}
