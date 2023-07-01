const { API_VERSION } = require('@constant/constant')
const { catchValidationErrors } = require('@middlewares/auth')
const controller = require('@src/controller')

module.exports = (app) => {
  app.get(`${API_VERSION}/liveness`, controller.liveness, catchValidationErrors)
  app.get(
    `${API_VERSION}/readiness`,
    controller.readiness,
    catchValidationErrors
  )
}
