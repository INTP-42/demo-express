const { API_VERSION } = require("../common/constant/constant");
const controller = require("../controller");

module.exports = (app) => {
  app.get(`${API_VERSION}/liveness`, controller.liveness);
  app.get(`${API_VERSION}/readiness`, controller.readiness);
};
