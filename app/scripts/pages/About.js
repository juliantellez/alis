import React from 'react'

const cls = elm => `About-${elm}`

export default class About extends React.Component {
  render () {
    return (
      <div className='About'>
        <div className={cls('title')}>All you need to know about me</div>
        <div className={cls('content')}>
        </div>
      </div>
    )
  }
}
