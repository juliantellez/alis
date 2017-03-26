import Hapi from 'hapi'

import options from './options'
import plugins from './plugins/main'

import routeHandler from 'scripts/routes/handlers/main'
import config from 'scripts/config'

const server = new Hapi.Server(options)

server.connection({port: config.APP_PORT})

server.register(plugins, e => {
  if (e) {
    throw new Error(e)
  }

  server.route(routeHandler)

  server.start(e => {
    console.log(`Server running on: ${server.info.port}`)
  })
})
