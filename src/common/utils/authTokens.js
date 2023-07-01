const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('@src/config')

/**
 * @description generate jwt token with secret key defined in env file.
 * @property {object} payload - payload data object
 * @property {String} secret - payload token secret
 * @returns {string}JWT token
 */

const createJWT = async (payload, secret = `${JWT_SECRET}`, options = {}) => {
  jwt.sign(payload, secret, options)
}

/**
 * @description verify JWT token
 * @property {object} payload - payload data object
 * @property {String} secret - payload token secret
 * @returns {string}
 */

const verifyJWT = async (token, secret = `${JWT_SECRET}`) =>
  jwt.verify(token, secret)

const getRequestKeys = (event) => {
  const partnerKey = event.headers['x-game-partner-key']
  const token = event.headers.Authorization || event.headers.authorization
  const body = JSON.parse(event.body || '{}')
  return {
    partnerKey,
    token,
    body,
  }
}

module.exports = {
  createJWT,
  verifyJWT,
  getRequestKeys,
}
