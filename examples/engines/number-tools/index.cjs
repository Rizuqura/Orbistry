/** Executes a deterministic operation using only explicit inputs. No source writes or network access. */
async function execute({ operation, input, context }) {
  if (operation !== "add") throw Error("Unsupported operation");
  return { sum: input.left + input.right };
}
module.exports = { execute };
