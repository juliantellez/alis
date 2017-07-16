import React from 'react'
import {Route, IndexRoute} from 'react-router'

import env from 'scripts/utils/env'

import Home from 'scripts/pages/Home'
import About from 'scripts/pages/About'
import Projects from 'scripts/pages/Projects'
import Project from 'scripts/pages/Project'
import Contact from 'scripts/pages/Contact'
import NotFound from 'scripts/pages/NotFound'
import Layout from 'scripts/components/helpers/Layout'

import store from 'scripts/client/store/main'
import actions from 'scripts/client/actions/main'

import RootComponent from 'scripts/components/RootComponent'

const onEnter = (nextState, replace, done) => {
  if (env.isBrowser()) {
    window && window.scrollTo(0, 0)
    store.dispatch(actions.router.setRoute(nextState))
  }
  done()
}

export default (
  <Route path='/' component={RootComponent}>
    <IndexRoute component={Home} onEnter={onEnter}/>
    <Route component={Layout}>
      <Route path='about' component={About} onEnter={onEnter} />
      <Route path='projects' component={Projects} onEnter={onEnter} />
      <Route path='contact' component={Contact} onEnter={onEnter} />
      <Route path='projects/:project' component={Project} onEnter={onEnter}/>
      <Route path='*' component={NotFound} onEnter={onEnter} />
    </Route>
  </Route>
)
