const MESSAGES = {
  REQUEST: {
    INVALID: 'Invalid request',
  },
  ERRORS: {
    SYSTEM: {
      INTERNAL_SERVER_ERROR: 'Internal Server Error',
      LIMIT_EXCEEDED: 'Too many requests, please try again later.',
    },
    AUTH: {
      AUTHENTICATION_TOKEN_MISSING: 'Access token missing in request header.',
      INVALID_TOKEN: 'Invalid token.Please check again',
      AUTHENTICATION_KEY_MISSING: 'Api Key missing in request header.',
      INVALID_AUTH_TOKEN: 'Your session has timed out. Please log in again',
      ACCESS_DENIED: 'You are not authorized to access this resource.',
      INVALID_ACCESS: 'Invalid key. Please check your api-key.',
    },
    DB: {
      CONNECTION_FAILED: 'Failed to connect to database.',
    },
    USER: {
      DELETED_USER:
        'This user account is either deleted or disabled.Please contact admin.',
      IN_ACTIVE_USER: 'Account has been deactivated, please contact admin.',
    },
    REDIS: {
      CONNECTION_MISSING: 'Please provide a redis connection object.',
      KEY_TYPE_ERROR: 'Key must be string type',
    },
    RESOURCES: {
      RESOURCE_NOT_FOUND: 'Resource not found.',
    },
  },
}

module.exports = MESSAGES
