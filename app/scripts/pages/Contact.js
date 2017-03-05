import React from 'react'

import Home from 'scripts/components/icons/Home'
import Phone from 'scripts/components/icons/Phone'
import Mail from 'scripts/components/icons/Mail'

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
      <div className={cls('title')} >Contac Me</div>
      <div className={cls('getInTouch')}>
        <div className={cls('title')} >Get in touch</div>
        <div className={cls('getInTouch-content')}>
          {this._getInTouch(Home, '51 Kingdon House, Galbraith street, E14 3LP, London')}
          {this._getInTouch(Mail, 'jgubina@gmail.com')}
          {this._getInTouch(Phone, '+44 (0) 7950554650')}
        </div>
      </div>
      </div>
    )
  }
}
