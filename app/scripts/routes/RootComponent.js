import React from 'react'

import env from 'scripts/utils/env'
import store from 'scripts/store/main'

export default class RootComponent extends React.Component {
  static propTypes = {
    env: React.PropTypes.object,
    store: React.PropTypes.object,
  }

  static defaultProps = {
    env,
    store,
  }

  static childContextTypes = {
    env: React.PropTypes.object,
    store: React.PropTypes.object,
  }

  getChildContext () {
    const {store, env} = this.props
    return {
      env,
      store,
    }
  }

  render () {
    return (
      <div className='Root'>
        {this.props.children}
      </div>
    )
  }
}
