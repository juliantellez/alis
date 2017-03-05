import React from 'react'

const cls = elm => `AboutMe-${elm}`

export default class AboutMe extends React.Component {
  render () {
    return (
      <div className='AboutMe'>
        <div className={cls('title')}>
          All you need to know about me
        </div>
        <div className={cls('content')}>
          <img src='/static/images/pages/skills.png'/>
        </div>
      </div>
    )
  }
}
