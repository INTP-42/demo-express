// https://github.com/tj/commander.js/tree/master/examples
// https://www.npmjs.com/package/commander
const { program } = require('commander')

program
  .name('sample')
  .description('node CLI for quick prototyping')
  .version('0.8.0')

program
  .command('thankyou')
  .argument('<name>')
  .option('-t, --title <honorific>', 'title to use before name')
  .option('-d, --debug', 'display some debugging')
  .action((name, options, command) => {
    if (options.debug) {
      console.error('Called %s with options %o', command.name(), options)
    }
    const title = options.title ? `${options.title} ` : ''
    console.log(`Thank-you ${title}${name}`)
  })

program.parse()
