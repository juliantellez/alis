import React from 'react'
import ReactDOM from 'react-dom'
import routes from 'scripts/routes/main'

import {Router, browserHistory} from 'react-router'
const DOM_ELEMENT = document.getElementById('main')

ReactDOM.render((
  <Router history={browserHistory}>
    {routes}
  </Router>
), DOM_ELEMENT)
