import React from 'react'

const cls = elem => `Works-${elem}`

export default class Works extends React.Component {
  _getWork (src) {
    return (
      <div className={cls('img-wrapper')}>
        <img className={cls('img')} src={src} />
      </div>
    )
  }
  render () {
    return (
      <div className='Works'>
        {this._getWork('/static/images/pages/works/cindy.png')}
        {this._getWork('/static/images/pages/works/luke.png')}
        {this._getWork('/static/images/pages/works/jules.png')}
        {this._getWork('/static/images/pages/works/aliway.png')}
      </div>
    )
  }
}
