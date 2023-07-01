const { User } = require('@common/models')

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
}

/**
 * get single object of User.
 * @property {object} userInfo- match condition
 * @property {object} condition- update condition
 * @returns {object} User instance on success and error on failure
 */

const getUserInstance = async (query, projection) =>
  User.findOne(query, projection ? PROJECTION[projection] : PROJECTION.ALL)
    .lean()
    .exec()

const updateUserInstance = async (query, update) =>
  User.findOneAndUpdate(query, update, { new: true })

const saveUser = async (userObj) => new User(userObj).save()

const getMultipleUserInstance = async (query, projection) =>
  User.find(query, projection || PROJECTION.ALL)

const updateMultipleUserInstance = async (query, update) =>
  User.updateMany(query, update)

const removeUser = (query) => User.deleteOne(query)

module.exports = {
  getUserInstance,
  updateUserInstance,
  saveUser,
  getMultipleUserInstance,
  updateMultipleUserInstance,
  removeUser,
}
