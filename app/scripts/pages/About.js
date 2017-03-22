import React from 'react'

import SkillsGraph from './about/SkillsGraph'

const cls = elm => `About-${elm}`

export default class About extends React.Component {
  _getCanBeFound (text, percentage) {
    return (
      <div className={cls('content-wrapper-section')}>
        <span className={cls('content-wrapper-text')}>{text}</span>
        <span className={cls('content-wrapper-percentage')}>{percentage}</span>
      </div>
    )
  }

  render () {
    return (
      <div className='About'>
        <div className={cls('content')}>
          <img className={cls('img')} src='/static/images/pages/ali.png'/>
          <div className={cls('title')}>All you need to know about me</div>
          <div className={cls('text')}>
            I’m an UK based designer,
            im passioned about UI / UX Design, Graphic Design,
            Branding, Logo Design, Vector Graphics and Sketch.
            I’m also a painter and consider myself a very creativ person.
          </div>
          <div className={cls('title')}>Can be found</div>
          <div className={cls('text')}>
            Sketching new projects, bringin new ideas to life,
            creating simple, beautiful and modern designs.
          </div>
        </div>
        <SkillsGraph />
      </div>
    )
  }
}
