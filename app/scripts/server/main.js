import Hapi from 'hapi'
import inert from 'inert'

import config from 'src/config'

const server = new Hapi.Server()

server.connection({port: config.APP_PORT})
// server.connection({port: 2323})

server.register([inert], e => {
  if (e) {
    throw new Error(e)
  }

  server.route({
    path: '/',
    method: 'GET',
    handler: (request, reply) => {
      reply(`
        <html>
          <body>
            <script src='/bundles/client.js'></script>
          </body>
        </html>
      `)
    },
  })

  server.route({
    path: '/{param*}',
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
