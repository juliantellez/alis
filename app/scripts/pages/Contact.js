import React from 'react'

import ContactForm from './contact/components/ContactForm'
import ContactCard from './contact/components/ContactCard'
import Socials from './contact/components/Socials'

const cls = elem => `Contact-${elem}`

export default class Contact extends React.Component {
  render () {
    return (
      <div className='Contact'>
        <div className={cls('form')}>
          <div className={cls('title')} >Get in touch</div>
          <ContactForm />
        </div>
        <div className={cls('contacts')}>
          <div className={cls('title')} >Contacts</div>
          <ContactCard />
        </div>
        <div className={cls('socials')}>
          <div className={cls('title')} >Follow my work</div>
          <Socials />
        </div>
      </div>
    )
  }
}
