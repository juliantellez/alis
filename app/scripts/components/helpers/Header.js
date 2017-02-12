import React from 'react'
import Modal from 'react-modal'
import {IndexLink, Link} from 'react-router'

import BurgerMenu from '../icons/BurgerMenu'
import Logo from '../icons/Logo'

const cls = elem => `Header-${elem}`

export default class Header extends React.Component {
  state = {}

  _closeModal = () => this.setState({modalIsOpen: false})
  _onClick = () => this.setState({modalIsOpen: true})

  _getLink (to, name) {
    const props = {
      to,
      className: cls('link'),
      activeClassName: cls('link--active'),
      onClick: this._closeModal,
    }
    const HOME = 'Home'
    const elem = name === HOME ? IndexLink : Link
    return React.createElement(elem, props, [name])
  }

  _getLinks () {
    return (
      <div className={cls('links')}>
        {this._getLink('/', 'Home')}
        {this._getLink('/about', 'About')}
        {this._getLink('/works', 'Works')}
        {this._getLink('/contact', 'Contact')}
      </div>
    )
  }

  _getModal () {
    return (
    <Modal
      isOpen={this.state.modalIsOpen}
      onRequestClose={this._closeModal}
      contentLabel='Modal'
      >
        {this._getLinks()}
      </Modal>
    )
  }
  render () {
    return (
      <div className='Header'>
        <Logo className={cls('logo')} />
        <BurgerMenu className={cls('burgermenu')} onClick={this._onClick}/>
        {this._getModal()}
        {this._getLinks()}
      </div>
    )
  }
}
