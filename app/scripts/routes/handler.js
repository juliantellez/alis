import path from 'path'

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { match, RouterContext } from 'react-router'

import routes from './main'
import config from 'scripts/config'

import Html from 'scripts/components/markup/Html'

export default {
  method: 'GET',
  path: path.normalize(path.join(config.get('BASE_URL'), '/{path*}')),
  handler: (request: Function, reply: Function) => {
    const location = request.url
    match({routes, location}, (e, redirectLocation, renderProps) => {
      if (e) {
        reply(new Error(e))
      }

      if (redirectLocation) {
        return reply.redirect(
          302, redirectLocation.pathname + redirectLocation.search)
      }

      if (renderProps) {
        const html = (
          <Html title='ALI WAY'>
            <RouterContext {...renderProps} />
          </Html>
        )
        reply(ReactDOMServer.renderToStaticMarkup(html))
      }
    })
  },
}
