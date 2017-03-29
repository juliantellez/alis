import React from 'react'

const cls = elem => `Loader-${elem}`

export default class Loader extends React.Component {
  render () {
    return (
      <div className='Loader'>
        <div className={cls('item')} />
        <div className={cls('item')} />
        <div className={cls('item')} />
        <div className={cls('item')} />
      </div>
    )
  }
}
