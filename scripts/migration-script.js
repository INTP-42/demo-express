const migrateMongoConfig = require('@root/migrate-mongo-config')
const { status, config, database, up, down } = require('migrate-mongo')

const migrationApplyOrRollback = async (operation) => {
  try {
    console.log('Connecting to the database...')
    config.set(migrateMongoConfig)
    const { db } = await database.connect()
    console.log('Connected to the database successfully.')
    const migrationStatus = await status(db)
    if (operation === 'status') {
      console.log('Migration status:')
      const migrationTable = migrationStatus.map(({ fileName, appliedAt }) => ({
        'Migration File': fileName,
        'Applied At':
          appliedAt === 'PENDING'
            ? 'PENDING'
            : new Date(appliedAt).toLocaleString('en-US'),
      }))
      console.table(migrationTable, ['Migration File', 'Applied At'])
      return
    }
    const migrationsToProcess =
      operation === 'apply'
        ? migrationStatus.filter((m) => m.appliedAt === 'PENDING')
        : migrationStatus.filter((m) => m.appliedAt !== 'PENDING')
    if (!migrationsToProcess.length) {
      console.log(
        `No ${
          operation === 'apply' ? 'pending' : 'applied'
        } migrations to ${operation}.`
      )
    } else {
      console.log(
        `${operation === 'apply' ? 'Applying' : 'Rolling back'} migrations:`
      )
      for (const migration of migrationsToProcess) {
        console.log(migration.fileName)
        const migrateFunction = operation === 'apply' ? up : down
        await migrateFunction(db, migration.fileName)
      }
    }
  } catch (error) {
    console.log('Something went wrong:', error.message)
    process.exit(1)
  } finally {
    process.exit(0)
  }
}

const operation = process.argv[2]

if (!['apply', 'rollback', 'status'].includes(operation)) {
  console.log(
    'Invalid operation. Please provide either "apply", "rollback", or "status" as a parameter.'
  )
  process.exit(1)
}

migrationApplyOrRollback(operation)
