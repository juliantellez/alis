import React from 'react'

export default class Layout extends React.Component {
  render () {
    return (
      <div className='Layout'>
      LAYOUT!
      {this.props.children}
      </div>
    )
  }
}
