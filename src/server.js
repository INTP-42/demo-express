const { apiRoutes } = require('./api')
const { corsMiddleWare } = require('./common/middlewares/cors')

module.exports = async (app) => {
  app.use(corsMiddleWare)
  apiRoutes(app)
}
