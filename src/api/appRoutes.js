const { API_VERSION } = require("../common/constant/constant");
const { catchValidationErrors } = require("../common/middlewares/auth");
const controller = require("../controller");

module.exports = (app) => {
  app.get(
    `${API_VERSION}/liveness`,
    controller.liveness,
    catchValidationErrors
  );
  app.get(
    `${API_VERSION}/readiness`,
    controller.readiness,
    catchValidationErrors
  );
};
