import React from 'react'
import Modal from 'react-modal'
import classnames from 'classnames'

import Links from 'scripts/components/header/Links'
import BurgerMenu from 'scripts/components/icons/BurgerMenu'

const cls = elem => `LinksModal-${elem}`

export default class LinksModal extends React.Component {
  static contextTypes = {
    env: React.PropTypes.object,
    store: React.PropTypes.object,
  }

  state = {}

  componentWillMount () {
    const {env, store} = this.context
    if (!env.isBrowser()) {
      return
    }
    this.unsubscribeModal = store.subscribe(this._closeModal)
    this.unsubscribeColorTheme = store.subscribe(this._updateState)
    this._updateState()
  }

  componentWillUnmount () {
    this.unsubscribeModal()
    this.unsubscribeColorTheme()
  }

  _updateState = () => {
    const {store} = this.context
    const {colorTheme} = store.getState()
    this.setState({colorTheme})
  }

  _closeModal = () => this.setState({modalIsOpen: false})

  _onClick = () => this.setState({modalIsOpen: true})

  _getModal () {
    const colorThemeType = this.state.colorTheme && this.state.colorTheme.type
    return (
    <Modal
      contentLabel='Modal'
      className={classnames(cls('modal'), cls(`modal-theme-${colorThemeType}`))}
      isOpen={this.state.modalIsOpen}
      onRequestClose={this._closeModal}
      >
        <div
          className={cls('modal-button')}
          onClick={this._closeModal}
        />
        <Links />
      </Modal>
    )
  }

  render () {
    const className = classnames('LinksModal', this.props.className)
    return (
      <div className={className}>
        <BurgerMenu className={cls('burgermenu')} onClick={this._onClick} />
        {this._getModal()}
      </div>
    )
  }
}

