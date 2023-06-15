const { apiRoutes } = require('./api');

module.exports = async (app) => {
  apiRoutes(app);
};
