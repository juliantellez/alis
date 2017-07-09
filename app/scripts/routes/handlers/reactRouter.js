import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { match, RouterContext } from 'react-router'

import env from 'scripts/utils/env'

import routes from 'scripts/routes/main'
import store from 'scripts/client/store/main'
import actions from 'scripts/client/actions/main'

import Html from 'scripts/components/markup/Html'

const createElement = (component, routeProps) => {
  return React.createElement(component, {...routeProps, store, env, actions})
}

export default {
  method: 'GET',
  path: '/{path*}',
  handler: (request: Function, reply: Function) => {
    const location = request.url
    Promise.all([
      store.dispatch(actions.router.setRoute(request)),
    ])
    .then(
      match({routes, location}, (e, redirectLocation, props) => {
        const content = ReactDOMServer.renderToString(
          <RouterContext {...props} createElement={createElement} />
        )

        const html = (
          <Html title='ALI WAY' store={store}>
            {content}
          </Html>
        )

        reply(ReactDOMServer.renderToStaticMarkup(html))
      })
    )
    .catch(e => reply(new Error(e)))
  },
}
