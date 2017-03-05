import React from 'react'

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
        <div className={cls('section aboutMe')}>
          <div className={cls('title')}>All you need to know about me</div>
          <div className={cls('content')}>
            <img className={cls('ali')} src='/static/images/pages/ali.png'/>
          </div>
        </div>

        <div className={cls('section lifeEssentials')}>
          <div className={cls('title')}>Life essentials</div>
          <div className={cls('content')}>
            <img className={cls('essentials')} src='/static/images/pages/essentialsMobile.png'/>
          </div>
        </div>

        <div className={cls('section canBeFound')}>
          <div className={cls('title')}>Can be found</div>
          <div className={cls('content')}>
            <div className={cls('content-wrapper')}>
              {this._getCanBeFound('• Working on projects', '50')}
              {this._getCanBeFound('• Finding design inspiration', '20')}
              {this._getCanBeFound('• Sleping', '30')}
            </div>
            <div className={cls('percentage')}>%</div>
          </div>
        </div>
      </div>
    )
  }
}
