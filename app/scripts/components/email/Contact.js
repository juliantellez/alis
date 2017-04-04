import React from 'react'

export default class ContactEmail extends React.Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    email: React.PropTypes.string.isRequired,
    message: React.PropTypes.string.isRequired,
  }

  render () {
    const {name, email, message} = this.props
    return (
      <div>
        <h1><strong>Hello Ali!</strong></h1>
        <div>You have a message from <strong>${name}</strong></div>
        <br/>
        <h4>Contact:</h4>
        <div>${email}</div>
        <br/>
        <h4>MESSAGE:</h4>
        <div>"${message} ..."</div>
      </div>
    )
  }
}
