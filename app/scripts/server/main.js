import Hapi from 'hapi'
import inert from 'inert'

import config from 'scripts/config'
import goodPlugin from './plugins/good'
import routeHandler from 'scripts/routes/handlers/main'

const plugins = [
  inert,
  goodPlugin,
]

const server = new Hapi.Server()

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
