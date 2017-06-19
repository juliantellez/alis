import React from 'react'

import Logo from 'scripts/components/icons/Logo'
import Foot from 'scripts/components/icons/Foot'
import Links from 'scripts/components/header/Links'
import Footer from 'scripts/components/helpers/Footer'

const cls = elm => `Home-${elm}`

export default class Home extends React.Component {
  static contexTypes = {
    store: React.PropTypes.object,
  }
  render () {
    return (
      <div className='Home'>
        <Logo className={cls('logo')} />
        <div className={cls('content')}>
          <Foot className={cls('foot')} />
          <Links className={cls('links')} />
        </div>
        <Footer />
      </div>
    )
  }
}
