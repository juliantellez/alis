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
    this.unsubscribe = store.subscribe(this._closeModal)
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  _closeModal = () => this.setState({modalIsOpen: false})

  _onClick = () => this.setState({modalIsOpen: true})

  _getModal () {
    return (
    <Modal
      contentLabel='Modal'
      className={cls('modal')}
      isOpen={this.state.modalIsOpen}
      onRequestClose={this._closeModal}
      >
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

