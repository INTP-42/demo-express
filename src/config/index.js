const convict = require('convict')
require('dotenv').config()
const { env } = process
const IS_TESTING = env.IS_TESTING === 'true'

// Define the configuration schema using `convict` - validate and load for usage
const config = convict({
  DB_URL: {
    doc: 'MongoDB URL using',
    format: '*',
    default: IS_TESTING ? env.TEST_MONGODB_URI : env.MONGODB_URI,
  },
  MONGODB_URI: {
    doc: 'MongoDB URL',
    format: '*',
    env: 'MONGODB_URI',
    default: null,
    required: true,
  },
  TEST_MONGODB_URI: {
    doc: 'Test MongoDB URL',
    format: '*',
    env: 'TEST_MONGODB_URI',
    default: null,
    required: true,
  },
  PORT: {
    doc: 'Server port',
    format: 'port',
    default: parseInt(env.PORT) || 8020,
    env: 'PORT',
  },
  ENABLE_LOGGING: {
    doc: 'Enable logging',
    format: Boolean,
    default: env.ENABLE_LOGGING || true,
    env: 'ENABLE_LOGGING',
  },
  LOGGER_VERBOSE: {
    doc: 'Logger verbosity',
    format: Boolean,
    default: env.LOGGER_VERBOSE || false,
    env: 'LOGGER_VERBOSE',
  },
  LOG_LEVEL: {
    doc: 'Log level',
    format: String,
    default: env.LOG_LEVEL || 'info',
    env: 'LOG_LEVEL',
  },
  MAX_LOGS: {
    doc: 'Maximum number of logs',
    format: 'int',
    default: parseInt(env.MAX_LOGS) || 7,
    env: 'MAX_LOGS',
  },
  HOSTNAME: {
    doc: 'Hostname',
    format: String,
    default: require('os').hostname(),
    env: 'HOSTNAME',
  },
  IS_TESTING: {
    doc: 'Is testing environment',
    format: Boolean,
    default: env.IS_TESTING === 'true',
    env: 'IS_TESTING',
  },
  DEBUG_QUERIES: {
    doc: 'Enable query debugging',
    format: Boolean,
    default: env.DEBUG_QUERIES === 'true',
    env: 'DEBUG_QUERIES',
  },
  JWT_SECRET: {
    doc: 'JWT secret key',
    format: '*',
    env: 'JWT_SECRET',
    default: env.JWT_SECRET,
    required: true,
  },
  APP_NAME: {
    doc: 'Application name',
    format: String,
    default: env.APP_NAME || 'NIL',
    env: 'APP_NAME',
  },
  CORS_ORIGIN_CHECK_ENABLED: {
    doc: 'Enable CORS origin check',
    format: Boolean,
    default: env.CORS_ORIGIN_CHECK_ENABLED === 'true',
    env: 'CORS_ORIGIN_CHECK_ENABLED',
  },
  NEW_RELIC_REQUIRED: {
    doc: 'New Relic required',
    format: Boolean,
    default: env.NEW_RELIC_REQUIRED === 'true',
    env: 'NEW_RELIC_REQUIRED',
  },
  REDIS_DEBUG_MODE: {
    doc: 'Redis debug mode',
    format: Boolean,
    default: env.REDIS_DEBUG_MODE === 'true',
    env: 'REDIS_DEBUG_MODE',
  },
  REDIS_READER_HOST: {
    doc: 'Redis reader host',
    format: String,
    default: env.REDIS_READER_HOST || env.REDIS_HOST || 'localhost',
    env: 'REDIS_READER_HOST',
  },
  REDIS_HOST: {
    doc: 'Redis host',
    format: String,
    default: env.REDIS_HOST || 'localhost',
    env: 'REDIS_HOST',
  },
  REDIS_PORT: {
    doc: 'Redis port',
    format: 'port',
    default: parseInt(env.REDIS_PORT) || 6379,
    env: 'REDIS_PORT',
  },
  RATELIMITER_WINDOWMS: {
    doc: 'Rate limiter window milliseconds',
    format: 'int',
    default: parseInt(env.RATELIMITER_WINDOWMS) || 60000,
    env: 'RATELIMITER_WINDOWMS',
  },
  RATELIMITER_MAX_REQUEST: {
    doc: 'Rate limiter maximum requests',
    format: 'int',
    default: parseInt(env.RATELIMITER_MAX_REQUEST) || 20000,
    env: 'RATELIMITER_MAX_REQUEST',
  },
  EXEC_ENV: {
    doc: 'Execution environment',
    format: 'String',
    env: 'EXEC_ENV',
    default: null,
    required: true,
  },
})

try {
  // Perform configuration validation
  config.validate({ allowed: 'strict' })
} catch (error) {
  if (error.name === 'ValidationError') {
    const missingProperties = error.details.map((detail) => detail.property)
    console.error(
      `Missing environment variables: ${missingProperties.join(', ')}`
    )
  } else {
    console.error('Error during configuration validation:', error.message)
  }
  process.exit(1)
}

module.exports = config.getProperties()
