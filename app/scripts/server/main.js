import Hapi from 'hapi'

import options from 'server/options'
import plugins from 'server/plugins/main'

import routeHandler from 'routes/handlers/main'
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
