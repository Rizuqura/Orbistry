const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");
const { execFileSync } = require("node:child_process");
const { anchor } = require("./analyze.cjs");
const { moduleFor, roleFor } = require("./catalog.cjs");

/** Appends native PowerShell AST declarations/calls to the common index. Starts only a development parser, never the inventoried scripts; fails if that parser is unavailable or syntax is invalid. */
function appendPowerShell(root, inventory, data) {
  const inputs = inventory
    .filter((file) => file.endsWith(".ps1"))
    .map((file) => ({
      path: file,
      text: fs.readFileSync(path.join(root, file), "utf8"),
    }));
  if (!inputs.length) return;
  const parser = fs.readFileSync(
    path.join(__dirname, "powershell-parser.ps1"),
    "utf8",
  );
  const parsed = JSON.parse(
    execFileSync(
      process.platform === "win32" ? "powershell.exe" : "pwsh",
      ["-NoProfile", "-NonInteractive", "-Command", parser],
      {
        input: JSON.stringify({ files: inputs }),
        encoding: "utf8",
        maxBuffer: 16 * 1024 * 1024,
        timeout: 30000,
        windowsHide: true,
      },
    ).replace(/^\uFEFF/, ""),
  );
  data.analyzer.powerShell =
    "System.Management.Automation.Language.Parser (AST only)";
  for (const file of parsed.files) {
    const input = inputs.find((item) => item.path === file.file);
    const module = moduleFor(file.file),
      role = roleFor(file.file),
      lines = input.text.split(/\r?\n/).length;
    const local = [];
    /** Creates a common symbol record from native syntax, retaining dynamic return behavior explicitly. */
    function record(
      id,
      name,
      kind,
      line,
      column,
      endLine,
      parameters,
      purpose,
      ownerId,
    ) {
      const callable = kind !== "Module";
      const symbol = {
        id,
        anchor: anchor(id),
        name,
        qualifiedName: name,
        kind,
        file: file.file,
        line,
        column,
        endLine,
        module,
        role,
        callable,
        hasBody: callable,
        ownerId,
        purpose: {
          text:
            purpose ||
            (kind === "Module"
              ? "PowerShell source-file scope; parsed without execution."
              : "No purpose documentation on this declaration; inspect the linked implementation."),
          evidence: purpose
            ? "powershell-comment-help"
            : kind === "Module"
              ? "structural"
              : "undocumented",
        },
        exports: [],
        callers: [],
        callees: [],
        relatedTests: [],
      };
      if (callable) {
        symbol.parameters = parameters.map((parameter) => ({
          name: "$" + parameter.name,
          optional: null,
          rest: false,
          defaultPresent: parameter.defaultPresent,
          contract: {
            text: parameter.type || "unconstrained PowerShell value",
            evidence: parameter.type ? "annotation" : "dynamic-language",
          },
        }));
        symbol.returns = {
          text: "Dynamic PowerShell pipeline output; return type not inferred.",
          evidence: "dynamic-language",
        };
        symbol.async = false;
      }
      local.push(symbol);
      data.symbols.push(symbol);
      return symbol;
    }
    const moduleRecord = record(
      `${file.file}:module`,
      "<module>",
      "Module",
      1,
      1,
      lines,
      [],
      null,
      null,
    );
    const script = record(
      `${file.file}:1:1:PowerShellScript`,
      "<script>",
      "PowerShellScript",
      1,
      1,
      lines,
      file.parameters,
      null,
      moduleRecord.id,
    );
    const byLocation = new Map();
    for (const declaration of file.declarations) {
      const id = `${file.file}:${declaration.line}:${declaration.column}:PowerShellFunction`;
      byLocation.set(
        `${declaration.line}:${declaration.column}`,
        record(
          id,
          declaration.name,
          "PowerShellFunction",
          declaration.line,
          declaration.column,
          declaration.endLine,
          declaration.parameters,
          declaration.purpose,
          script.id,
        ),
      );
    }
    for (const declaration of file.declarations) {
      const symbol = byLocation.get(
          `${declaration.line}:${declaration.column}`,
        ),
        parent = byLocation.get(
          `${declaration.parentLine}:${declaration.parentColumn}`,
        );
      if (parent) {
        symbol.ownerId = parent.id;
        symbol.qualifiedName = `${parent.qualifiedName}.${symbol.name}`;
      }
    }
    for (const command of file.commands) {
      const owner =
        byLocation.get(`${command.ownerLine}:${command.ownerColumn}`) ?? script;
      const candidates = local.filter(
        (item) =>
          item.kind === "PowerShellFunction" &&
          command.name &&
          item.name.toLowerCase() === command.name.toLowerCase() &&
          (item.ownerId === script.id ||
            item.ownerId === owner.id ||
            item.id === owner.id),
      );
      const site = {
        from: owner.id,
        file: file.file,
        line: command.line,
        column: command.column,
        expression: command.expression.replace(/\s+/g, " ").slice(0, 180),
        kind: "call",
      };
      if (!command.member && candidates.length === 1) {
        const target = candidates[0];
        data.calls.push({
          ...site,
          to: target.id,
          evidence: "powershell-static-command",
          optional: false,
        });
        owner.callees.push({
          symbolId: target.id,
          line: command.line,
          column: command.column,
        });
        target.callers.push({
          symbolId: owner.id,
          line: command.line,
          column: command.column,
        });
      } else
        data.unresolvedCalls.push({
          ...site,
          candidateId: null,
          reason: command.member
            ? "powershell-member-dispatch"
            : "powershell-external-or-dynamic-command",
        });
    }
    data.files.push({
      file: file.file,
      module,
      role,
      language: "powershell",
      bytes: Buffer.byteLength(input.text),
      sha256: crypto.createHash("sha256").update(input.text).digest("hex"),
      lines,
      symbols: local.map((symbol) => symbol.id),
    });
    data.diagnostics.push(
      ...file.errors.map((error) => ({ file: file.file, ...error })),
    );
  }
}

module.exports = { appendPowerShell };
