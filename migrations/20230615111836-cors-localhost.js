const data = require('@data/cors')

module.exports = {
  async up(db) {
    await db.collection('cors').insertMany(data)
  },

  async down(db) {
    const emailList = data.map((x) => x.email)
    await db.collection('cors').deleteMany({ email: { $in: emailList } })
  },
}
