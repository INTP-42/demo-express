const { createOrUseExistingModel } = require('@utils/mongoutils')
const mongoose = require('mongoose')
const { Schema } = mongoose

function createModel() {
  const corsWhiteListSchema = new Schema({
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    ip_address: {
      type: String,
      required: true,
      trim: true,
    },
  })
  return createOrUseExistingModel('cors', corsWhiteListSchema)
}

// Create the User model
const model = createModel()
module.exports = model
