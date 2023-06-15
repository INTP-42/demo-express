const { cors } = require("../models");

const getCorsWhiteList = async (query, projection = {}) =>
  cors.findOne(query, projection);
const getCorsWhiteListAll = async (query, projection = {}) =>
  cors.find(query, projection);
const updateCorsWhiteList = async (query, update) =>
  cors.updateOne(query, update, { new: true });
const addCorsWhiteList = async (obj) => new cors(obj).save();
const removeCorsWhiteList = async (query) => cors.findOneAndDelete(query);

module.exports = {
  getCorsWhiteList,
  getCorsWhiteListAll,
  updateCorsWhiteList,
  addCorsWhiteList,
  removeCorsWhiteList,
};
