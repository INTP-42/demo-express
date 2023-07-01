const { apiRoutes } = require('./api')
const { corsMiddleWare } = require('@middlewares/cors')

module.exports = async (app) => {
  app.use(corsMiddleWare)
  apiRoutes(app)
}
