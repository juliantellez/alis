import React from 'react'
import classnames from 'classnames'

import {Link} from 'react-router'

import Header from 'scripts/components/helpers/Header'
import Footer from 'scripts/components/helpers/Footer'
import Arrow from 'scripts/components/icons/Arrow'
import Logo from 'scripts/components/icons/LogoShort'
import TypeWriter from 'scripts/components/helpers/TypeWriter'

import {scrollToSelector} from 'scripts/utils/animate'

const cls = elm => `Home-${elm}`

export default class Home extends React.Component {
  static contexTypes = {
    store: React.PropTypes.object,
  }

  _getScrollTo (selector) {
    return <Arrow className={cls('scroll')} onClick={scrollToSelector.bind(null, selector)} />
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
          <div className={cls('works-title')}>Beatiful & functional web designs.</div>
          <div className={cls('works-content')}>
            {this._getWork(
              '/projects/drills-guru-webiste',
              '/aliway/images/projects/drills_guru_website.png')}
            {this._getWork(
              '/projects/santa-murs-website',
              '/aliway/images/projects/santa_murs_webiste.png')}
            {this._getWork(
              '/projects/latinos-in-london',
              '/aliway/images/projects/latinos_in_london.png')}
            {this._getWork(
              '/projects/free-will-communitiy-website',
              '/aliway/images/projects/free_will_communitiy_website.png')}
          </div>
          {this._getScrollTo(cls('contact'))}
        </div>
        <div className={classnames(cls('section'), cls('contact'))}>
          <div>Let's Talk,</div>
          <div>I'm always looking for new and exciting projects!</div>
          <Link to='/contact'>Contact Me Here</Link>
          <Footer />
        </div>
      </div>
    )
  }
}
