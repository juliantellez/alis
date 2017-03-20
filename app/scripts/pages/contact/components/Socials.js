import React from 'react'
import {Link} from 'react-router'

import Dribble from 'scripts/components/icons/Dribble'
import Facebook from 'scripts/components/icons/Facebook'
import LinkedIn from 'scripts/components/icons/LinkedIn'
import Pinterest from 'scripts/components/icons/Pinterest'

const cls = elem => `Socials-${elem}`

export default class Socials extends React.Component {
  _getSection (icon, href) {
    return (
      <Link
        href={href}
        target='_blank'
        className={cls('link')}
        >
          {React.createElement(icon, {className: cls('icon')})}
      </Link>
    )
  }

  render () {
    return (
      <div className='Socials'>
        {this._getSection(LinkedIn, '')}
        {this._getSection(Facebook, '')}
        {this._getSection(Dribble, '')}
        {this._getSection(Pinterest, '')}
      </div>
    )
  }
}
