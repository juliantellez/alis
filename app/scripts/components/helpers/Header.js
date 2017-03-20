import React from 'react'
import {Link} from 'react-router'

import Logo from 'scripts/components/icons/Logo'
import Links from 'scripts/components/header/Links'
import Modal from 'scripts/components/header/LinksModal'

const cls = elem => `Header-${elem}`

export default class Header extends React.Component {
  render () {
    return (
      <div className='Header'>
        <Link
          to='/'
        >
          <Logo className={cls('logo')} />
        </Link>
        <Links className={cls('links')} />
        <Modal className={cls('modal')} />
      </div>
    )
  }
}

