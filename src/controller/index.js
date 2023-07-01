const { SERVER_ERROR, OK } = require('@constant/httpStatusCodes')
const { logs } = require('@root/logger')
const MESSAGES = require('@common/messages')

const liveness = (_, res) => {
  try {
    res.status(OK).send('working')
  } catch (error) {
    logs('error', 'liveness', `liveness check failed: ${error.stack || error}`)
    res.status(SERVER_ERROR).json(error)
  }
}

const readiness = (req, res) => {
  if (req.requestCounts > 5) {
    const message = `readiness check failing: req count: ${req.requestCounts}`
    logs('error', 'readiness', message)
    res.status(OK).send(MESSAGES.ERRORS.SYSTEM.INTERNAL_SERVER_ERROR)
  } else {
    res.status(OK).send('working')
  }
}

module.exports = {
  liveness,
  readiness,
}
