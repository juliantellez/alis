import React from 'react'

import Logo from 'scripts/components/icons/Logo'
import Links from 'scripts/components/header/Links'
import Modal from 'scripts/components/header/LinksModal'

const cls = elem => `Header-${elem}`

export default class Header extends React.Component {
  render () {
    return (
      <div className='Header'>
        <Logo className={cls('logo')} />
        <Links className={cls('links')} />
        <Modal className={cls('modal')} />
      </div>
    )
  }
}
