import React from 'react'
import {Link} from 'react-router'
import classnames from 'classnames'

import Logo from 'scripts/components/icons/LogoShort'
import Links from 'scripts/components/header/Links'
import Modal from 'scripts/components/header/LinksModal'

const cls = elem => `Header-${elem}`

export default class Header extends React.Component {
  static contextTypes = {
    store: React.PropTypes.object,
    actions: React.PropTypes.object,
  }

  state = {}

  _updateState = () => {
    const {store} = this.context
    const {colorTheme} = store.getState()
    this.setState({colorTheme})
  }

  componentWillMount () {
    const {store} = this.context
    this.unsubscribe = store.subscribe(this._updateState)
    this._updateState()
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  handleClick = () => {
    const {store, actions} = this.context
    store.dispatch(actions.colorTheme.toggleColorTheme())
  }

  renderButton () {
    const {colorTheme} = this.state
    const oppositeType = colorTheme.type === 'light' ? 'dark' : 'light'
    const selector = 'color-theme-button'
    const className = classnames(cls(selector), cls(`${selector}-${oppositeType}`))

    return (
      <div className={className} onClick={this.handleClick}>
        {oppositeType} theme
      </div>
    )
  }

  render () {
    return (
      <div className='Header' style={this.state.colorTheme.styles}>
        <Link to='/'>
          <Logo className={cls('logo')} />
        </Link>
        <Links className={cls('links')} />
        {this.renderButton()}
        <Modal className={cls('modal')} />
      </div>
    )
  }
}

