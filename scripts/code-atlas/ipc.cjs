const ts = require("typescript");

/** Extracts named Electron channels and narrow local wrapper expansions without executing handlers. Dynamic patterns remain separate records. */
function discoverIpc(state) {
  const endpoints = [];
  for (const [file, source] of state.sources) {
    if (!file.startsWith("electron/") || /\.test\./.test(file)) continue;
    const wrapperCache = new Map();
    /** Obtains only literal values; interpolated values are never guessed. */
    function literal(node) {
      return node &&
        (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node))
        ? node.text
        : null;
    }
    /** Recognizes the reviewed local AI handle wrapper from its own declaration and ipcMain.handle template. */
    function wrapperPrefix(expression) {
      const record = state.recordFor(expression);
      if (!record) return null;
      if (wrapperCache.has(record.id)) return wrapperCache.get(record.id);
      let prefix = null;
      /** Checks the bound wrapper's syntax for a direct channel-prefix template. */
      function find(node) {
        if (
          state.nodeRecords.get(node)?.id === record.id &&
          node.parameters?.length
        ) {
          const parameter = node.parameters[0].name.getText(source);
          /** Scans the wrapper body for ipcMain.handle(`${parameter}`) without evaluating it. */
          function body(child) {
            if (
              ts.isCallExpression(child) &&
              ts.isPropertyAccessExpression(child.expression) &&
              child.expression.expression.getText(source) === "ipcMain" &&
              child.expression.name.text === "handle"
            ) {
              const channel = child.arguments[0];
              if (
                channel &&
                ts.isTemplateExpression(channel) &&
                channel.templateSpans.length === 1 &&
                channel.templateSpans[0].expression.getText(source) ===
                  parameter &&
                channel.templateSpans[0].literal.text === ""
              )
                prefix = channel.head.text;
            }
            ts.forEachChild(child, body);
          }
          if (node.body) body(node.body);
        }
        ts.forEachChild(node, find);
      }
      find(source);
      wrapperCache.set(record.id, prefix);
      return prefix;
    }
    /** Expands an Object.entries operation table only when its initializer and keys are statically literal. */
    function tableExpansion(node, channel) {
      if (
        !ts.isTemplateExpression(channel) ||
        channel.templateSpans.length !== 1 ||
        channel.templateSpans[0].literal.text !== ""
      )
        return [];
      let loop = node.parent;
      while (loop && !ts.isForOfStatement(loop)) loop = loop.parent;
      if (!loop || !ts.isVariableDeclarationList(loop.initializer)) return [];
      const binding = loop.initializer.declarations[0]?.name;
      if (
        !binding ||
        !ts.isArrayBindingPattern(binding) ||
        binding.elements[0]?.name?.getText(source) !==
          channel.templateSpans[0].expression.getText(source)
      )
        return [];
      const entries = loop.expression;
      if (
        !ts.isCallExpression(entries) ||
        entries.expression.getText(source) !== "Object.entries" ||
        !entries.arguments[0]
      )
        return [];
      const symbol = state.checker.getSymbolAtLocation(entries.arguments[0]);
      const declaration = symbol?.valueDeclaration;
      if (
        !declaration ||
        !ts.isVariableDeclaration(declaration) ||
        !declaration.initializer ||
        !ts.isObjectLiteralExpression(declaration.initializer)
      )
        return [];
      return declaration.initializer.properties.flatMap((property) => {
        if (
          (!ts.isPropertyAssignment(property) &&
            !ts.isMethodDeclaration(property)) ||
          ts.isComputedPropertyName(property.name)
        )
          return [];
        const name = ts.isIdentifier(property.name)
          ? property.name.text
          : literal(property.name);
        const handler = ts.isPropertyAssignment(property)
          ? state.recordFor(property.initializer)
          : state.recordFor(property);
        return name === null
          ? []
          : [
              {
                channel: channel.head.text + name,
                operationSymbolId: handler?.id ?? null,
              },
            ];
      });
    }
    /** Records boundary syntax independently from ordinary function calls and runtime reachability. */
    function visit(node, owner = null) {
      owner = state.nodeRecords.get(node) ?? owner;
      if (ts.isCallExpression(node)) {
        const expression = node.expression;
        const member = ts.isPropertyAccessExpression(expression)
          ? expression.name.text
          : null;
        const receiver = ts.isPropertyAccessExpression(expression)
          ? expression.expression.getText(source)
          : null;
        const directHandler =
          member === "handle" && ["ipcMain", "trustedIpc"].includes(receiver);
        const directInvoke = member === "invoke" && receiver === "ipcRenderer";
        const modelInvoke =
          ts.isIdentifier(expression) &&
          expression.text === "invokeModel" &&
          file === "electron/preload.cjs";
        const prefix = ts.isIdentifier(expression)
          ? wrapperPrefix(expression)
          : null;
        const first = node.arguments[0];
        const value = literal(first);
        const event =
          ["send", "on", "once"].includes(member) &&
          value &&
          /^(ai|vault|stations|worldview):/.test(value);
        if (
          directHandler ||
          directInvoke ||
          modelInvoke ||
          (prefix !== null && value !== null) ||
          event
        ) {
          const kind =
            directHandler || prefix !== null
              ? "handler"
              : event
                ? member === "send"
                  ? "event-send"
                  : "event-listen"
                : "invoke";
          const handler =
            kind === "handler" && node.arguments[1]
              ? state.recordFor(node.arguments[1])
              : null;
          const point = source.getLineAndCharacterOfPosition(
            node.getStart(source),
          );
          const base = {
            file,
            line: point.line + 1,
            column: point.character + 1,
            kind,
            ownerSymbolId: owner?.id ?? null,
            handlerSymbolId: handler?.id ?? null,
            registrationReachability: "not-established",
            receiver,
          };
          if (value !== null)
            endpoints.push({
              ...base,
              channel: (prefix ?? "") + value,
              evidence:
                prefix !== null
                  ? "local-wrapper-expansion"
                  : modelInvoke
                    ? "reviewed-preload-wrapper"
                    : "literal-syntax",
            });
          else if (first) {
            const expanded = directHandler ? tableExpansion(node, first) : [];
            if (expanded.length)
              endpoints.push(
                ...expanded.map((entry) => ({
                  ...base,
                  ...entry,
                  evidence: "literal-operation-table-expansion",
                })),
              );
            else
              endpoints.push({
                ...base,
                channel: null,
                pattern: first.getText(source),
                evidence: "dynamic-unresolved",
              });
          }
        }
      }
      ts.forEachChild(node, (child) => visit(child, owner));
    }
    visit(source);
  }
  return endpoints;
}

module.exports = { discoverIpc };
