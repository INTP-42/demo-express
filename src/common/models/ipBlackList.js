const { Schema } = require('mongoose')
const { IPADDR_COLLECTION } = require('@constant/constant')
const { createOrUseExistingModel } = require('@utils/mongoutils')

const ipSchema = new Schema({
  _id: { type: String },
  counter: { type: Number, default: 0 },
  expirationDate: { type: Date },
})

const model = createOrUseExistingModel(IPADDR_COLLECTION, ipSchema)
module.exports = model
