import React from 'react'

import {Link} from 'react-router'

import ContactForm from 'scripts/components/forms/ContactForm'
import Socials from './contact/components/Socials'

const cls = elem => `Contact-${elem}`

export default class Contact extends React.Component {
  _getEmail () {
    return (
      <Link
        className={cls('link')}
        href='mailto:jgubina@gmail.com?Subject=Hi%20Ali'
        target='_blank'
        >
          jgubina@gmail.com
      </Link>
    )
  }

  render () {
    return (
      <div className='Contact'>
        <div className={cls('text')} >
          I'm always looking for exciting projects to work on,
          feel free to drop me an inbox at anytime!
        </div>
        <div className={cls('hr')} />
        <ContactForm />
        <div className={cls('title')}>Contacts</div>
        <div className={cls('text')}>{this._getEmail()}</div>
        <div className={cls('title')} >Follow my work</div>
        <Socials />
      </div>
    )
  }
}
