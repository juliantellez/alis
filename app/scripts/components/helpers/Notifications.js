import _ from 'lodash'
import React from 'react'

import classnames from 'classnames'

const cls = elem => `Notification-${elem}`

export default class Notification extends React.Component {
  static contextTypes = {
    env: React.PropTypes.object,
    store: React.PropTypes.object,
    actions: React.PropTypes.object,
  }

  state = {}

  updateState = () => {
    const {notification} = this.context.store.getState()
    this.setState({notification})
  }

  componentWillMount () {
    const {env, store} = this.context
    if (!env.isBrowser()) {
      return
    }
    this.unsubscribe = store.subscribe(this.updateState)
  }

  componentWillUnMount () {
    this.unsubscribe()
  }

  _onClick = () => {
    const {store, actions} = this.context
    store.dispatch(actions.notification.removeNotification())
  }

  _canRender () {
    const {notification} = this.state
    const hasContent = notification && notification.content
    return (
      !_.isEmpty(notification) &&
      hasContent
    )
  }

  _getContent () {
    if (!this._canRender()) {
      return null
    }
    const {notification} = this.state
    return (
      <div className={cls('wrapper')}>
        <div className={cls('content')}>
          {notification.content}
        </div>
        <div className={cls('button')} onClick={this._onClick} />
      </div>
    )
  }

  render () {
    const className = classnames('Notification', {
      'Notification--isOpen': this._canRender(),
    })
    return (
      <div className={className}>
        {this._getContent()}
      </div>
    )
  }
}
