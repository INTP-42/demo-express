const { faker } = require('@faker-js/faker/locale/en')
faker.seed(42)
const generator = require('generate-password')
const {
  Types: { ObjectId },
} = require('mongoose')

const generateApiKey = async (id, length = 15) => {
  const randomString = await generator.generate({
    length,
    numbers: true,
  })
  return `${id}${randomString}`
}

const generateApiKeyAndId = async (length = 15) => {
  const _id = new ObjectId()
  const apiKey = await generateApiKey(_id, length)
  return { _id, apiKey }
}

const generateMigrationData = async (domain) => {
  const gender = faker.person.sex()
  const { _id, apiKey } = await generateApiKeyAndId()
  const firstName = faker.person.firstName(gender)
  const lastName = faker.person.lastName(gender)
  const email = faker.internet.email({
    firstName,
    lastName,
    provider: domain,
  })
  return {
    username: `${firstName}_${lastName}`,
    firstName,
    lastName,
    _id,
    apiKey,
    gender,
    email,
  }
}

module.exports = { generateApiKey, generateApiKeyAndId, generateMigrationData }
