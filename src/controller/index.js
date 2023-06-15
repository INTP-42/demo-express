const { SERVER_ERROR, OK } = require('../common/constant/httpStatusCodes')
const { logs } = require('../../logger')

const liveness = (_, res) => {
  try {
    res.status(OK).send('working.')
  } catch (error) {
    logs('error', 'liveness', `liveness check failed: ${error.stack || error}`)
    res.status(SERVER_ERROR).json(error)
  }
}

const readiness = (req, res) => {
  if (req.requestCounts > 5) {
    const message = `readiness check failing: req count: ${req.requestCounts}`
    logs('error', 'readiness', message)
    res.status(SERVER_ERROR).send()
  } else {
    res.status(OK).send()
  }
}

module.exports = {
  liveness,
  readiness,
}
