import React from 'react'
import {Route, IndexRoute} from 'react-router'

import config from 'scripts/config'
import Home from 'scripts/pages/Home'
import About from 'scripts/pages/About'
import Works from 'scripts/pages/Works'
import Contact from 'scripts/pages/Contact'
import NotFound from 'scripts/pages/NotFound'
import Layout from 'scripts/components/helpers/Layout'

import RootComponent from './RootComponent'

export default (
  <Route path={config.get('BASE_URL')} component={RootComponent}>
    <IndexRoute component={Home} />
    <Route path={config.get('BASE_URL')} component={Layout}>
      <Route path='about' component={About} />
      <Route path='works' component={Works} />
      <Route path='contact' component={Contact} />
      <Route path='*' component={NotFound} />
    </Route>
  </Route>
)
