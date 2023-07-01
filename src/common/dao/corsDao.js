const { Cors } = require('@common/models')

const getCorsWhiteList = async (query, projection = {}) =>
  Cors.findOne(query, projection)
const getCorsWhiteListAll = async (query, projection = {}) =>
  Cors.find(query, projection)
const updateCorsWhiteList = async (query, update) =>
  Cors.updateOne(query, update, { new: true })
const addCorsWhiteList = async (obj) => new Cors(obj).save()
const removeCorsWhiteList = async (query) => Cors.findOneAndDelete(query)

module.exports = {
  getCorsWhiteList,
  getCorsWhiteListAll,
  updateCorsWhiteList,
  addCorsWhiteList,
  removeCorsWhiteList,
}
