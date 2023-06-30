const { execSync } = require('child_process')
const readline = require('readline')

// Get the database name from the command line arguments
const databaseName = process.argv[2]

// Check if the database name is provided
if (!databaseName) {
  console.error('Please provide the database name as an argument.')
  process.exit(1)
}

// Create a readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

// Prompt the user for confirmation
rl.question(
  `Are you sure you want to delete the '${databaseName}' database? (y/n): `,
  (answer) => {
    // Close the readline interface
    rl.close()

    // Proceed with deletion if the user confirms
    if (answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes') {
      // Execute the command to delete the database
      try {
        execSync(`mongo ${databaseName} --eval 'db.dropDatabase()'`, {
          stdio: 'inherit',
        })
        console.log(`Database '${databaseName}' deleted successfully.`)
      } catch (error) {
        console.error(
          `Error deleting database '${databaseName}': ${error.message}`
        )
        process.exit(1)
      }
    } else {
      console.log('Deletion canceled.')
      process.exit(0)
    }
  }
)
