const rateLimit = require('express-rate-limit')
const MongoStore = require('rate-limit-mongo')
const { IPADDR_COLLECTION } = require('@constant/constant')
const {
  DB_URL,
  RATELIMITER_WINDOWMS,
  RATELIMITER_MAX_REQUEST,
} = require('@src/config')
const { logs } = require('@root/logger')
const { verifyJWT } = require('./authTokens')
const { TOO_MANY_REQUEST } = require('@constant/httpStatusCodes')
const MESSAGES = require('@common/messages')

const apiLimiter = rateLimit({
  windowMs: RATELIMITER_WINDOWMS,
  max: RATELIMITER_MAX_REQUEST,
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  store: new MongoStore({
    uri: DB_URL,
    collectionName: IPADDR_COLLECTION,
    connectionOptions: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    // should match windowMs
    expireTimeMs: RATELIMITER_WINDOWMS,
    errorHandler: (err) => {
      logs('error', 'apiLimiter', `${err.stack || JSON.stringify(err)}`)
      console.error.bind(null, 'rate-limit-mongo')
    },
    // see Configuration section for more options and details
  }),
  message: MESSAGES.ERRORS.SYSTEM.LIMIT_EXCEEDED,
  handler: async (req, res) => {
    let verifiedToken = { _id: 'null' }
    try {
      const token = req.get('authorization')
      verifiedToken = await verifyJWT(token)
    } catch (error) {
      logs('error', '[apiLimiter handler]', `JWT Failed : ${error.stack}`)
    }
    logs(
      'error',
      '[apiLimiter handler]',
      `Limit Reached: ${JSON.stringify(req.rateLimit)} on req. ${
        req.route.path
      } with id ${verifiedToken._id}`
    )
    return res.status(TOO_MANY_REQUEST).json({
      message: MESSAGES.ERRORS.SYSTEM.LIMIT_EXCEEDED,
      statusCode: TOO_MANY_REQUEST,
    })
  },
})

module.exports = {
  apiLimiter,
}
