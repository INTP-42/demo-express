const { IpBlackList } = require('@common/models')

const getBlackListIp = async (query, projection = {}) =>
  IpBlackList.findOne(query, projection)
const getBlackListIpAll = async (query) => IpBlackList.find(query)
const updateBlackListIp = async (query, update) =>
  IpBlackList.updateOne(query, update, { new: true })
const addBlackListIp = async (ipObj) => new IpBlackList(ipObj).save()
const whiteListIp = async (query) => IpBlackList.findOneAndDelete(query)

module.exports = {
  getBlackListIp,
  getBlackListIpAll,
  updateBlackListIp,
  addBlackListIp,
  whiteListIp,
}
