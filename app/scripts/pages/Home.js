import React from 'react'

import {Link} from 'react-router'

import HomeIcon from 'scripts/components/icons/Home'
import AboutIcon from 'scripts/components/icons/About'
import ContactsIcon from 'scripts/components/icons/Contacts'
import WorksIcon from 'scripts/components/icons/Works'
import Logo from 'scripts/components/icons/Logo'

export default class Home extends React.Component {
  render () {
    return (
      <div className='Home'>
        <HomeIcon className='Home-icon Home-icon--home' />
        <div className='Home-tabs'>
          <Link className='Home-link' to='/about'>
            <AboutIcon className='Home-icon Home-icon--about' />
          </Link>
          <Link className='Home-link' to='/works'>
            <WorksIcon className='Home-icon Home-icon--works' />
          </Link>
          <Link className='Home-link' to='/contact'>
            <ContactsIcon className=' Home-icon Home-icon--contact' />
          </Link>
        </div>
        <Logo className='Home-icon Home-icon--logo' />
      </div>
    )
  }
}
