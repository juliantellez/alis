import Hapi from 'hapi'
import inert from 'inert'

import config from 'scripts/config'
import goodPlugin from './plugins/good'
import mailHandler from 'scripts/routes/handlers/mailSender'
import routerHandler from 'scripts/routes/handlers/reactRouter'
import staticFilesHandler from 'scripts/routes/handlers/staticFiles'

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

  server.route(mailHandler)
  server.route(routerHandler)
  server.route(staticFilesHandler)

  server.start(e => {
    console.log(`Server running on: ${server.info.port}`)
  })
})
