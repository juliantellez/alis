import React from 'react'
import Modal from 'react-modal'
import {Link} from 'react-router'

import BurgerMenu from '../icons/BurgerMenu'
import Logo from '../icons/Logo'

const cls = elem => `Header-${elem}`

export default class Header extends React.Component {
  state = {}

  _closeModal = () => this.setState({modalIsOpen: false})
  _onClick = () => this.setState({modalIsOpen: true})

  _getLink (to, name) {
    return (
      <Link
        to={to}
        className={cls('link')}
        onClick={this._closeModal}>
        {name}
      </Link>
    )
  }

  render () {
    return (
      <div className='Header'>
        <Logo className={cls('logo')} />
        <BurgerMenu className={cls('burgermenu')} onClick={this._onClick}/>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this._closeModal}
          contentLabel='Modal'
        >
          {this._getLink('/', 'Home')}
          {this._getLink('/about', 'About')}
          {this._getLink('/works', 'Works')}
          {this._getLink('/contact', 'Contact')}
        </Modal>
      </div>
    )
  }
}
