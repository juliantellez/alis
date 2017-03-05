import React from 'react'

const cls = elm => `LifeEssentials-${elm}`

export default class LifeEssentials extends React.Component {
  render () {
    return (
      <div className='LifeEssentials'>
        <div className={cls('title')}>Life essentials</div>
        <div className={cls('content')}>
          <img src='/static/images/pages/essentialsMobile.png'/>
        </div>
      </div>
    )
  }
}
