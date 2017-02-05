import Hapi from 'hapi'
import inert from 'inert'

import config from 'scripts/config'
import routesHandler from 'scripts/routes/handler'

const server = new Hapi.Server()

server.connection({port: config.APP_PORT})

server.register([inert], e => {
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
    console.log(`running on: ${server.info.port}`)
  })
})
