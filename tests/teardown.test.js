const mongoose = require('mongoose')

exports.mochaGlobalTeardown = async () => {
  console.log('Testing completed. Deleting the test db.')
  await mongoose.connection.db.dropDatabase()
  console.log('Test db deleted.')
}
