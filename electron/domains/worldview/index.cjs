// Backend-only public module boundary. Domain objects never cross Electron IPC.
module.exports = {
  ...require("./model/WorldView.cjs"),
  ...require("./model/Connection.cjs"),
  ...require("./services/WorldViewService.cjs"),
  ...require("./repositories/WorldViewRepository.cjs"),
  ...require("./contracts/worldview-errors.cjs"),
};
