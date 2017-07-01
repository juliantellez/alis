import React from 'react'
import classnames from 'classnames'

import {Link} from 'react-router'

import Header from 'scripts/components/helpers/Header'
import Footer from 'scripts/components/helpers/Footer'
import Arrow from 'scripts/components/icons/Arrow'
import Logo from 'scripts/components/icons/LogoShort'
import TypeWriter from 'scripts/components/helpers/TypeWriter'

const cls = elm => `Home-${elm}`

export default class Home extends React.Component {
  static contexTypes = {
    store: React.PropTypes.object,
  }

  _onClick = (selector) => {
    if (!document) {
      return null
    }
    const body = document.body || {}
    const section = document.getElementsByClassName(selector) || [{}]
    const sectionTop = section[0].offsetTop
    const scroll = () => {
      const STEP = 20
      body.scrollTop += STEP
      if (body.scrollTop < sectionTop) {
        setTimeout(() => scroll(), 10)
      }
    }
    scroll()
  }

  _getScrollTo (selector) {
    return <Arrow className={cls('scroll')} onClick={this._onClick.bind(null, selector)}/>
  }

  _getWork = (link, img) => (
    <Link className={cls('works-work')} to={link}>
      <img className={cls('works-work-img')} src={img} />
    </Link>
  )

  render () {
    return (
      <div className='Home'>
        <Header />
        <div className={classnames(cls('section'), cls('section-main'))}>
          <Logo className={cls('icon')} />
          <div className={cls('text')}>
            Hi I’m Ali, welcome to my online portfolio.
            <br/><TypeWriter />
          </div>
          {this._getScrollTo(cls('works'))}
        </div>
        <div className={classnames(cls('section'), cls('works'))}>
          <div className={cls('works-title')}>Beatiful & functional web design.</div>
          <div className={cls('works-content')}>
            {this._getWork('/projects/drills-guru-webiste', '/aliway/images/pages/works/logo.jpg')}
            {this._getWork('/projects/drills-guru-webiste', '/aliway/images/pages/works/logo.jpg')}
            {this._getWork('/projects/drills-guru-webiste', '/aliway/images/pages/works/logo.jpg')}
            {this._getWork('/projects/drills-guru-webiste', '/aliway/images/pages/works/logo.jpg')}
          </div>
          {this._getScrollTo(cls('contact'))}
        </div>
        <div className={classnames(cls('section'), cls('contact'))}>
          <div>Let's Talk,</div>
          <div>I'm always looking for new and exciting opportunities!</div>
          <Link to='/contact'>Contact Me Here</Link>
          <Footer />
        </div>
      </div>
    )
  }
}
