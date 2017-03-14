import Hapi from 'hapi'
import inert from 'inert'

import options from './options'
import goodPlugin from './plugins/good'

import routeHandler from 'scripts/routes/handlers/main'
import config from 'scripts/config'

const plugins = [
  inert,
  goodPlugin,
]

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
