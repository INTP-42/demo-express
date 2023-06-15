const mongoose = require('mongoose')

const createOrUseExistingModel = (modelName, schema, compiledModelOptions) => {
  let modelInstance
  try {
    modelInstance = mongoose.model(modelName)
  } catch (error) {
    if (compiledModelOptions) {
      modelInstance = mongoose.model(modelName, schema, compiledModelOptions)
    } else {
      modelInstance = mongoose.model(modelName, schema)
    }
  }
  return modelInstance
}

module.exports = {
  createOrUseExistingModel,
}
