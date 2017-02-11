import React from 'react'
import ReactDOM from 'react-dom'
import routes from 'scripts/routes/main'

import {Router, browserHistory} from 'react-router'

class Routes extends React.Component {
  render () {
    return <Router history={browserHistory} routes={routes} />
  }
}

ReactDOM.render(<Routes />, document.getElementById('main'))
