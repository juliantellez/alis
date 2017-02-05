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
        <Logo className='Home-icon Home-icon--logo' />
        <div className='Home-content'>
          <div className='Home-content-text'>
            {`Hi I’m Ali
              Welcome to my online portfolio,
              I’m a web and graphic designer based in London.
              My creations represent the way I think, feel and live.
              Please take a tour around my site .`}
          </div>
          <div className='Home-tabs'>
            <HomeIcon className='Home-icon Home-icon--home' />
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
        </div>
      </div>
    )
  }
}
