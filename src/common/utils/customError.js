/**
 * @file This file extends Error class with status, message and errors fields.
 * @example throw new CustomError(status, message, errors)
 */
class CustomError extends Error {
  constructor(status, message, isDeactivatedUser) {
    super()
    this.status = status
    this.message = message
    if (isDeactivatedUser) {
      this.isDeactivatedUser = isDeactivatedUser
    }
  }
}

module.exports = { CustomError }
