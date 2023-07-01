const {
  corsDao: { getCorsWhiteListAll },
} = require('@common/dao')
const { CustomError } = require('@utils/customError')
const { BAD_REQUEST } = require('@constant/httpStatusCodes')
const { logs } = require('@root/logger')
const cors = require('cors')
const { CORS_ORIGIN_CHECK_ENABLED } = require('@src/config')
const ip = require('ip')

const checkOriginForWhitelist = async (origin, isPrivateIP = false) => {
  const methodName = '[checkOriginForWhitelist]'
  logs('info', methodName, `origin: ${origin}, isPrivateIP: ${isPrivateIP}`)

  // Allow requests from private IPs
  if (!origin && isPrivateIP) {
    return { message: null, status: true }
  }
  let isValid = false
  const data = await getCorsWhiteListAll({}, { ip_address: 1 })
  for (const value of data) {
    if (value.ip_address === origin) {
      isValid = true
      break
    }
  }
  if (isValid) {
    return { message: null, status: true }
  } else {
    logs(
      'error',
      methodName,
      `The request origin [${origin}] is not whitelisted.`
    )
    return {
      message: new CustomError(BAD_REQUEST, 'Not allowed by CORS policy!'),
      status: false,
    }
  }
}

const corsPolicy = async function (req, callback) {
  let result = { message: '', status: true }
  if (CORS_ORIGIN_CHECK_ENABLED) {
    const origin = req.header('Origin')
    result = await checkOriginForWhitelist(
      typeof origin !== 'undefined' && origin ? origin : null,
      ip.isPrivate(req.ip)
    )
  }
  callback(result.message, result.status)
}

module.exports = {
  checkOriginForWhitelist,
  corsMiddleWare: cors(corsPolicy),
}
