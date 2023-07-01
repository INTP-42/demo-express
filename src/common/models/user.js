const { createOrUseExistingModel } = require('@utils/mongoutils')
const mongoose = require('mongoose')
const { Schema } = mongoose

function createModel() {
  // Define the user schema
  const userSchema = new Schema({
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['admin', 'user', 'super_admin'],
      default: 'user',
    },
    gender: {
      type: String,
      enum: ['male', 'female', 'none'],
      default: 'none',
    },
    apiKey: {
      type: String,
      required: true,
    },
    comments: {
      type: String,
      default: '',
    },
    status: {
      type: String,
      enum: ['in-review', 'active', 'rejected', 'blocked', 'deactivated'],
      default: 'in-review',
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  })
  return createOrUseExistingModel('user', userSchema)
}

// Create the User model
const model = createModel()
module.exports = model
