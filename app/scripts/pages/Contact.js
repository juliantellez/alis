import React from 'react'

import Home from 'scripts/components/icons/Home'
import Mail from 'scripts/components/icons/Mail'
import Phone from 'scripts/components/icons/Phone'
import Dribble from 'scripts/components/icons/Dribble'
import Facebook from 'scripts/components/icons/Facebook'
import LinkedIn from 'scripts/components/icons/LinkedIn'
import Pinterest from 'scripts/components/icons/Pinterest'

import ContactMe from './contact/components/ContactMe'

const cls = elem => `Contact-${elem}`

export default class Contact extends React.Component {
  _getInTouch (icon, text) {
    return (
      <div className={cls('getInTouch-section')}>
        {React.createElement(icon, {className: cls('getInTouch-section-icon')})}
        <div className={cls('getInTouch-section-text')}>{text}</div>
      </div>
    )
  }
  render () {
    return (
      <div className='Contact'>
      <ContactMe />
      <div className={cls('getInTouch')}>
        <div className={cls('title')} >Get in touch</div>
        <div className={cls('getInTouch-content')}>
          {this._getInTouch(Home, '51 Kingdon House, Galbraith street, E14 3LP, London')}
          {this._getInTouch(Mail, 'jgubina@gmail.com')}
          {this._getInTouch(Phone, '+44 (0) 7950554650')}
        </div>
      </div>
      <div className={cls('followMe')}>
        <div className={cls('title')} >Follow me</div>
        <div className={cls('followMe-content')}>
          <LinkedIn className={cls('followMe-icon')} />
          <Facebook className={cls('followMe-icon')} />
          <Dribble className={cls('followMe-icon')} />
          <Pinterest className={cls('followMe-icon')} />
        </div>
      </div>
      </div>
    )
  }
}
