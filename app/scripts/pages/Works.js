import React from 'react'

const cls = elem => `Works-${elem}`

export default class Works extends React.Component {
  render () {
    return (
      <div className='Works'>
        <img className={cls('img')} src='/static/images/pages/works/cindy.png'/>
        <img className={cls('img')} src='/static/images/pages/works/luke.png'/>
        <img className={cls('img')} src='/static/images/pages/works/jules.png'/>
        <img className={cls('img')} src='/static/images/pages/works/aliway.png'/>
      </div>
    )
  }
}
