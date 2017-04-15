import React from 'react'
import classnames from 'classnames'

import ContactForm from 'scripts/components/forms/ContactForm'
import Mail from 'scripts/components/icons/Mail'

import FlipCard from 'scripts/components/helpers/FlipCard'
const cls = elm => `GetInTouch-${elm}`

export default class GetInTouch extends React.Component {
  _getFront () {
    return (
      <div className={cls('content')}>
        <div className={cls('title')}>
          Get in touch
        </div>
        <div className={cls('text')}>
          I'm always looking for new exciting projects
        </div>
      </div>
    )
  }

  render () {
    return (
      <FlipCard
        className='GetInTouch'
        frontLabel={<Mail className={cls('icon')} />}
        back={<ContactForm />}
        front={this._getFront()}
      />
    )
  }
}
