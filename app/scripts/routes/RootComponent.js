import React from 'react'

export default class RootComponent extends React.Component {
  static childContextTypes = {
    // TODO
  }

  getChildContext () {
    // TODO
  }

  render () {
    return (
      <div className='Root'>
        {this.props.children}
      </div>
    )
  }
}
