const _ = require('lodash')
const MESSAGES = require('@common/messages')
const {
  UN_PROCESSABLE_ENTITY,
  BAD_REQUEST,
  UNAUTHORIZED,
  NOT_FOUND,
} = require('@constant/httpStatusCodes')
const {
  userDao: { getUserInstance },
} = require('@common/dao')
const { verifyJWT } = require('@utils/authTokens')
const { CustomError } = require('@utils/customError')
const { logs } = require('@root/logger')
const {
  Types: { ObjectId },
} = require('mongoose')

/**
 * This function will catch the validation errors as middleware
 * @property {object} err - joi validation error object
 * @property {object} req - express request object
 * @property {object} res - express response object
 * @property {object} next - middleware function to continue req execution
 * @returns {object} res object is returned if the validation error occurs otherwise continue execution
 */

const catchValidationErrors = (err, req, res, next) => {
  logs('error', '[catchValidationErrors]', `Error ${err.stack || err}`)
  if (err.isBoom) {
    const {
      data,
      output: {
        payload: { statusCode },
      },
    } = err
    logs('info', '[catchValidationErrors]', `statusCode :${statusCode}`)
    let errorDetails = _.map(
      data,
      _.partialRight(_.pick, ['message', 'path', 'type'])
    )
    if (!_.has(errorDetails[0], 'message')) {
      errorDetails = []
      errorDetails.push({
        message: 'Invalid inputs',
        path: `${req.path}`,
        type: `${req.method}`,
      })
    } else if (
      errorDetails[0].message.includes('fails to match the required pattern')
    ) {
      errorDetails[0].message = 'Please enter valid input.'
    }

    return res
      .status(statusCode || UN_PROCESSABLE_ENTITY)
      .json({ status: statusCode, message: errorDetails[0].message })
      .end()
  } else if (err instanceof CustomError) {
    const { status, message, isDeactivatedUser } = err
    logs('info', '[catchValidationErrors]', 'CustomError')
    return res.status(err.status).send({ status, message, isDeactivatedUser })
  } else {
    return next()
  }
}

const ObjectIdValidate = async (id, fieldName) => {
  if (!ObjectId.isValid(id)) {
    throw new CustomError(UNAUTHORIZED, `Invalid ${fieldName} id`)
  }
}

const userAuthentication = async (req, res, next) => {
  try {
    const apiKey = req.get('api-key')
    const token = req.get('authorization')
    if (!apiKey) {
      throw new CustomError(
        BAD_REQUEST,
        MESSAGES.ERRORS.AUTH.AUTHENTICATION_KEY_MISSING
      )
    }
    if (!token) {
      throw new CustomError(
        BAD_REQUEST,
        MESSAGES.ERRORS.AUTH.AUTHENTICATION_TOKEN_MISSING
      )
    }
    let verifyToken
    try {
      verifyToken = await verifyJWT(token)
      if (!verifyToken) {
        throw new CustomError(BAD_REQUEST, MESSAGES.ERRORS.AUTH.INVALID_TOKEN)
      }
    } catch (e) {
      throw new CustomError(
        UNAUTHORIZED,
        MESSAGES.ERRORS.AUTH.INVALID_AUTH_TOKEN
      )
    }
    const { _id } = verifyToken
    const activeUser = await getUserInstance(
      { _id, apiKey, status: 'acitve' },
      ''
    )
    if (!activeUser) {
      throw new CustomError(NOT_FOUND, MESSAGES.ERRORS.USER.DELETED_USER)
    } else if (activeUser.status === 'deactivated') {
      throw new CustomError(
        UNAUTHORIZED,
        MESSAGES.ERRORS.USER.IN_ACTIVE_USER,
        true
      )
    } else {
      req.activeUser = activeUser
      next()
    }
  } catch (error) {
    logs(
      'error',
      '[userAuthentication]',
      `Authentication failed: ${error.stack || error}`
    )
    return res.status(error.status).send(error)
  }
}

module.exports = {
  catchValidationErrors,
  userAuthentication,
  ObjectIdValidate,
}
