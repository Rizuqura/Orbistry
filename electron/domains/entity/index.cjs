/** Backend Entity entry point. Application callers use EntityService with a trusted authorization policy. */
module.exports = {
  ...require("./model/Entity.cjs"),
  ...require("./repositories/EntityRepository.cjs"),
  ...require("./services/EntityService.cjs"),
};
