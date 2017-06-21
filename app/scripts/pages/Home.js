import React from 'react'

import Header from 'scripts/components/helpers/Header'
import Logo from 'scripts/components/icons/LogoShort'
import TypeWriter from 'scripts/components/helpers/TypeWriter'
const cls = elm => `Home-${elm}`

export default class Home extends React.Component {
  static contexTypes = {
    store: React.PropTypes.object,
  }
  render () {
    return (
      <div className='Home'>
        <Header />
        <div className={cls('content')}>
          <Logo className={cls('icon')} />
          <div className={cls('text')}>
            Hi I’m Ali, welcome to my online portfolio.<br/>
            <TypeWriter />
          </div>
        </div>
      </div>
    )
  }
}
