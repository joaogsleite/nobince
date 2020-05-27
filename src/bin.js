const service = require('os-service')
const SERVICE_NAME = 'my-service'
if (process.argv.includes('--add')) {
  const options = {
    programArgs: ["--run"]
  }
  service.add(SERVICE_NAME, options, (error) => {
    if (error) {
      console.trace(error)
    }
  })
} else if (process.argv.includes('--remove')) {
  service.remove(SERVICE_NAME, (error) => {
    if (error) {
      console.trace(error)
    }
  })
} else if (process.argv.includes('--run')) {
  service.run(() => {
    service.stop(0)
  })
  require('./index')
} else {
  console.log('Add linux service:')
  console.log('./program --add')
  process.exit(0)
}