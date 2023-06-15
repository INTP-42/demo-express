const { user } = require("../models");

const PROJECTION = {
  ALL: {},
  VIEW: {
    username: 1,
    email: 1,
    role: 1,
  },
  ID: {
    _id: 1,
  },
};

/**
 * get single object of user.
 * @property {object} userInfo- match condition
 * @property {object} condition- update condition
 * @returns {object} user instance on success and error on failure
 */

const getUserInstance = async (query, projection) =>
  user
    .findOne(query, projection ? PROJECTION[projection] : PROJECTION.ALL)
    .lean()
    .exec();

const updateUserInstance = async (query, update) =>
  user.findOneAndUpdate(query, update, { new: true });

const saveUser = async (userObj) => new user(userObj).save();

const getMultipleUserInstance = async (query, projection) =>
  user.find(query, projection || PROJECTION.ALL);

const updateMultipleUserInstance = async (query, update) =>
  user.updateMany(query, update);

const removeUser = (query) => user.deleteOne(query);

module.exports = {
  getUserInstance,
  updateUserInstance,
  saveUser,
  getMultipleUserInstance,
  updateMultipleUserInstance,
  removeUser,
};
