import React from 'react'
import {Route, IndexRoute} from 'react-router'

import store from 'scripts/store/main'
import env from 'scripts/utils/env'

import Home from 'scripts/pages/Home'
import About from 'scripts/pages/About'
import Works from 'scripts/pages/Works'
import Contact from 'scripts/pages/Contact'
import NotFound from 'scripts/pages/NotFound'
import Layout from 'scripts/components/helpers/Layout'

import RootComponent from 'scripts/components/RootComponent'

const onEnter = (nextState, replace, done) => {
  switch (env.isBrowser()) {
    case true: {
      store.dispatch({type: 'SET_ROUTE', state: nextState})
      done()
    }
      break
    default: done()
  }
}

export default (
  <Route path='/' component={RootComponent}>
    <IndexRoute component={Home} onEnter={onEnter}/>
    <Route component={Layout}>
      <Route path='about' component={About} onEnter={onEnter} />
      <Route path='works' component={Works} onEnter={onEnter} />
      <Route path='contact' component={Contact} onEnter={onEnter} />
      <Route path='*' component={NotFound} onEnter={onEnter} />
    </Route>
  </Route>
)
