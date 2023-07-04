const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer')
const chalk = require('chalk')
const figlet = require('figlet')

// Function to create a model file
function createModelFile(moduleName) {
  const template = `const { createOrUseExistingModel } = require('@utils/mongoutils')
  const mongoose = require('mongoose')
  const { Schema } = mongoose

  function createModel() {
    const ${moduleName}Schema = new Schema({})
    return createOrUseExistingModel("${moduleName}", ${moduleName}Schema)
  }

  // Create the User model
  const model = createModel()
  module.exports = model
  `

  const filePath = path.join(__dirname, `${moduleName}.js`)

  fs.writeFile(filePath, template, (err) => {
    if (err) {
      console.error(chalk.red('Error creating model file:', err))
    } else {
      console.log(
        chalk.green(`Model file '${moduleName}.js' created successfully!`)
      )
    }
  })
}

function createDaoFile(name) {
  const moduleName = name.charAt(0).toUpperCase() + name.slice(1)
  const template = `const ${moduleName} = require('../models')
  const PROJECTION = {
    ALL: {},
    ID: {
      _id: 1,
    },
  }
  const get${moduleName}Instance = async (query, projection = {}) =>
    ${moduleName}.findOne(query, projection ? PROJECTION[projection] : PROJECTION.ALL).lean().exec()
  
  const get${moduleName}Instances = async (query, projection = {}) =>
    ${moduleName}.findOne(query, projection ? PROJECTION[projection] : PROJECTION.ALL).lean().exec()


  const update${moduleName}Instances = async (query, update) =>
    ${moduleName}.findOneAndUpdate(query, update, { new: true })

  const create${moduleName} = async (obj) => {
    const data = await new ${moduleName}(obj).save()
    return data._id.toString()
  }

  const get${moduleName}PopulatedInstance = async (query, param = []) =>
    ${moduleName}.findOne(query).populate(param).lean().exec()

  const get${moduleName}PopulatedInstances = async (query, param = []) =>
    ${moduleName}.find(query).populate(param)

  module.exports = {
    create${moduleName},
    get${moduleName}Instance,
    get${moduleName}Instances,
    update${moduleName}Instances,
    get${moduleName}PopulatedInstance,
    get${moduleName}PopulatedInstances,
  }
  `

  const filePath = path.join(__dirname, `${moduleName}.js`)

  fs.writeFile(filePath, template, (err) => {
    if (err) {
      console.error(chalk.red('Error creating dao file:', err))
    } else {
      console.log(
        chalk.green(`Dao file '${moduleName}.js' created successfully!`)
      )
    }
  })
}

// Prompt the user for module name and file type
function promptUser() {
  console.log(chalk.cyan(figlet.textSync('Module Creator')))

  inquirer
    .prompt([
      {
        name: 'moduleName',
        message: 'Enter the name of the module:',
        validate: function (value) {
          if (value.length) {
            return true
          } else {
            return 'Please enter a module name.'
          }
        },
      },
      {
        type: 'list',
        name: 'fileType',
        message: 'Select the type of file to create:',
        choices: ['dao', 'model'],
      },
    ])
    .then((answers) => {
      const { moduleName, fileType } = answers

      if (fileType === 'dao') {
        createDaoFile(moduleName)
      } else if (fileType === 'model') {
        createModelFile(moduleName)
      }
    })
}

// Run the module creator
promptUser()
