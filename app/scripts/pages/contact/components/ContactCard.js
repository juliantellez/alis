import React from 'react'
import {Link} from 'react-router'

import Home from 'scripts/components/icons/Home'
import Mail from 'scripts/components/icons/Mail'
import Phone from 'scripts/components/icons/Phone'

const cls = elem => `ContactCard-${elem}`

export default class ContactCard extends React.Component {
  _getSection (icon, text) {
    return (
      <div className={cls('section')}>
        {React.createElement(icon, {className: cls('icon')})}
        <div className={cls('text')}>{text}</div>
      </div>
    )
  }
  _getEmail () {
    const subject = 'Hi%20Ali'
    return (
      <Link
        className={cls('link')}
        href={`mailto:jgubina@gmail.com?Subject=${subject}`}
        target='_blank'
        >
          jgubina@gmail.com
      </Link>
    )
  }
  _getNumber () {
    return (
      <Link
        className={cls('link')}
        href='tel:+447950554650'
        target='_blank'
        >
          +44 (0) 7950554650
      </Link>
    )
  }
  render () {
    return (
      <div className='ContactCard'>
        {this._getSection(Phone, this._getNumber())}
        {this._getSection(Mail, this._getEmail())}
        {this._getSection(Home, '51 Kingdon House, Galbraith street, E14 3LP, London')}
      </div>
    )
  }
}
