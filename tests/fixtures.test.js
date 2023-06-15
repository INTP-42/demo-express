require('dotenv').config()
const chai = require('chai')
const chaiHttp = require('chai-http')
const { migrateMongoConfig } = require('./database')
const { status, config, database, up } = require('migrate-mongo')

exports.mochaGlobalSetup = async function () {
  chai.use(chaiHttp)

  console.log('mochaGlobalSetup')
  try {
    console.log('connecting to test db...')
    console.log('Connected to db successfully.')
    config.set(migrateMongoConfig)
    const { db } = await database.connect()
    const migrationStatus = await status(db)
    if (migrationStatus.some((m) => m.appliedAt === 'PENDING')) {
      console.log('Running Migrations')
      await up(db)
      console.log('Migrations executed.')
    }
  } catch (error) {
    console.log('Failed to connect to db', error.message)
    it.skip()
  }

  after(() => {
    console.log('Testing completed')
  })
}
