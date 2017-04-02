import React from 'react'

import env from 'scripts/utils/env'
import store from 'scripts/client/store/main'
import actions from 'scripts/client/actions/main'

import Notifications from 'scripts/components/helpers/Notifications'

export default class RootComponent extends React.Component {
  static propTypes = {
    env: React.PropTypes.object,
    store: React.PropTypes.object,
    actions: React.PropTypes.object,
  }

  static defaultProps = {
    env,
    store,
    actions,
  }

  static childContextTypes = {
    env: React.PropTypes.object,
    store: React.PropTypes.object,
    actions: React.PropTypes.object,
  }

  getChildContext () {
    const {store, env, actions} = this.props
    return {
      env,
      store,
      actions,
    }
  }

  render () {
    return (
      <div className='Root'>
        {this.props.children}
        <Notifications />
      </div>
    )
  }
}
