const { name, scripts } = require('./package.json')

module.exports = {
  apps: [
    {
      name,
      script: scripts.dev,
      watch: true,
      env: {
        NODE_ENV: 'development',
      },
    },
  ],
}
