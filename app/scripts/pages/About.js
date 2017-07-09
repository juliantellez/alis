import React from 'react'

import AtomIcon from 'scripts/components/icons/Atom'
import EllipsisIcon from 'scripts/components/icons/Ellipsis'

const cls = elm => `About-${elm}`

export default class About extends React.Component {
  render () {
    return (
      <div className='About'>
        <div className={cls('content')}>
          <img className={cls('img')} src='/aliway/images/pages/ali.png'/>

          <div className={cls('title')}>All you need to know about me</div>
          <div className={cls('text')}>
            I’m a designer based in the U.K.,
            I have a love for UI/UX, Graphic Design, Branding,
            Vector Graphics and Sketch. ❤
            <br/>
            I’m also a painter and consider myself a very creative person.
          </div>

          <div className={cls('title')}>Can be found</div>
          <div className={cls('text')}>
            Sketching projects and bringing new ideas to life.
            <br/>
            Creating simple, beautiful and modern designs.
          </div>

          <EllipsisIcon className={cls('ellipsis')} />

          <div className={cls('title')}>Product Thinking</div>
          <div className={cls('text')}>
            Build the right features for the right product.
          </div>

          <div className={cls('title')}>Visual Design</div>
          <div className={cls('text')}>Less it’s more.</div>

          <div className={cls('title')}>UX/UI</div>
          <div className={cls('text')}>
            Effective and rich user expiriences,
            <br/>
            coupled with attention to detail.
          </div>

          <div className={cls('title')}>Research</div>
          <div className={cls('text')}>
            Personas and problem solving.
          </div>

          <div className={cls('title')}>Prototyping</div>
          <div className={cls('text')}>
            Sketching demos that resemble real live websites.
          </div>

          <AtomIcon className={cls('atom')} />
        </div>
      </div>
    )
  }
}
