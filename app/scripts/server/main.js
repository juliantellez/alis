import Hapi from 'hapi'
import inert from 'inert'

import config from 'scripts/config'
import goodPlugin from './plugins/good'
import routesHandler from 'scripts/routes/handler'

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

  server.route(routesHandler)
  server.route({
    path: '/static/{param*}',
    method: 'GET',
    handler: {
      directory: {
        path: config.STATIC,
        listing: true,
        index: false,
      },
    },
  })

  server.start(e => {
    console.log(`Server running on: ${server.info.port}`)
  })
})
