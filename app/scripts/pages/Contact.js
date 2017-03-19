import React from 'react'

import Dribble from 'scripts/components/icons/Dribble'
import Facebook from 'scripts/components/icons/Facebook'
import LinkedIn from 'scripts/components/icons/LinkedIn'
import Pinterest from 'scripts/components/icons/Pinterest'

import ContactForm from './contact/components/ContactForm'
import ContactCard from './contact/components/ContactCard'

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
