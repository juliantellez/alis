import React from 'react'

import Logo from 'scripts/components/icons/LogoShort'
import Footer from 'scripts/components/helpers/Footer'
import Modal from 'scripts/components/header/LinksModal'

const cls = elm => `Home-${elm}`

export default class Home extends React.Component {
  static contexTypes = {
    store: React.PropTypes.object,
  }
  render () {
    return (
      <div className='Home'>
        <div className={cls('content')}>
          <Logo className={cls('icon')} />
          <div className={cls('text')}>
            Hi I’m Ali , welcome to my online portfolio,
            web and graphic designer.
          </div>
          <Modal className={cls('modal')} />
          <Footer />
        </div>
      </div>
    )
  }
}
