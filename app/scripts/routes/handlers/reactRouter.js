import path from 'path'

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { match, RouterContext } from 'react-router'

import env from 'scripts/utils/env'
import config from 'scripts/config'
import store from 'scripts/store/main'
import routes from 'scripts/routes/main'

import Html from 'scripts/components/markup/Html'

const createElement = (component, routeProps) => {
  return React.createElement(component, {...routeProps, store, env})
}

export default {
  method: 'GET',
  path: path.normalize(path.join(config.get('BASE_URL'), '/{path*}')),
  handler: (request: Function, reply: Function) => {
    const location = request.url
    Promise.resolve([
      store.dispatch({type: 'SET_ROUTE', state: request}),
    ])
    .then(
      match({routes, location}, (e, redirectLocation, props) => {
        const content = ReactDOMServer.renderToString(
          <RouterContext {...props} createElement={createElement} />
        )

        const html = (
          <Html title='ALI WAY'>
            {content}
          </Html>
        )

        reply(ReactDOMServer.renderToStaticMarkup(html))
      })
    )
    .catch(e => reply(new Error(e)))
  },
}
