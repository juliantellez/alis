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

  state = {}

  getChildContext () {
    const {store, env, actions} = this.props
    return {
      env,
      store,
      actions,
    }
  }

  _updateState = () => {
    const {colorTheme} = this.props.store.getState()
    this.setState({colorTheme})
  }

  componentWillMount () {
    const {store} = this.props
    this.unsubscribe = store.subscribe(this._updateState)
    this._updateState()
  }

  render () {
    return (
      <div className='Root' style={this.state.colorTheme.styles}>
        {this.props.children}
        <Notifications />
      </div>
    )
  }
}
