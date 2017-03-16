import React from 'react'

const cls = elem => `Spinner-${elem}`

export default class Spinner extends React.Component {
  render () {
    return (
      <div className='Spinner'>
        <div className={cls('bounce1')} />
        <div className={cls('bounce2')}/>
      </div>
    )
  }
}
