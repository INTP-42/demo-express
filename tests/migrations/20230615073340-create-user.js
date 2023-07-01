const { generateMigrationData } = require('@utils/generator')
const domain = 'yopmail'

const processData = async () => {
  const data = []
  for (let i = 0; i < 2; i += 1) {
    await generateMigrationData().then((info) => {
      data.push({
        ...info,
        role: 'user',
      })
    })
  }
  await generateMigrationData(domain).then((info) => {
    data.push({
      ...info,
      role: 'admin',
    })
  })
  return data
}

module.exports = {
  async up(db) {
    const data = await processData()
    await db.collection('users').insertMany(data)
  },

  async down(db) {
    const users = await db.collection('users').find().toArray()
    const migrationData = users.filter((x) => x.email.endsWith(domain))
    const emailList = migrationData.map((x) => x.email)
    await db.collection('users').deleteMany({ email: { $in: emailList } })
  },
}
