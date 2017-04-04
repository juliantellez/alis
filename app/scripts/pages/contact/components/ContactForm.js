import _ from 'lodash'
import React from 'react'
import Formsy from 'formsy-react'
import {Link} from 'react-router'

import Spinner from 'scripts/components/helpers/Spinner'
import mailSenderManager from 'scripts/api/managers/mailSender'
import Input from './Input'

const cls = elem => `ContactForm-${elem}`

export default class ContactForm extends React.Component {
  static contextTypes = {
    env: React.PropTypes.object,
    store: React.PropTypes.object,
    actions: React.PropTypes.object,
  }

  state = {}

  _setNotification = content => {
    const {store, actions} = this.context
    store.dispatch(actions.notification.setNotification(content))
  }

  _errorMessage () {
    return (
      <span>
        There was an error posting you message ☝, {' '}
        <Link
          className={cls('error')}
          href='mailto:jgubina@gmail.com?Subject=Hi%20Ali'
          target='_blank'
        >
          please send an email instead
        </Link>
      </span>
    )
  }

  _performCheck = data => {
    const {dataSent} = this.state
    const hasBeenSent = _.isEqual(data, dataSent)
    if (!hasBeenSent) {
      this._sendMessage(data)
    } else {
      this._setNotification('This message has already been sent 😃')
    }
  }

  _sendMessage = data => {
    this.setState({isSubmitting: true})
    return mailSenderManager.send(data)
    .then(res => {
      this.setState({
        isSubmitting: false,
        hasSubmitted: true,
        dataSent: data,
      })
      this._setNotification('Message Sent ✌')
    })
    .catch(e => {
      this.setState({isSubmitting: false})
      this._setNotification(this._errorMessage())
    })
  }

  _onValidSubmit = data => {
    const {hasSubmitted} = this.state
    if (hasSubmitted) {
      this._performCheck(data)
    } else {
      this._sendMessage(data)
    }
  }

  _getButton () {
    const {isSubmitting} = this.state
    const text = (
      <div className={cls('button-text')} key={'buttonText'}>
        Send
      </div>
    )

    let content = text
    if (isSubmitting) {
      content = [
        text,
        <Spinner className={cls('button-spinner')} key={'buttonSpinner'} />,
      ]
    }
    return (
      <button className={cls('button')}>
        {content}
      </button>
    )
  }

  render () {
    return (
      <div className='ContactForm' >
        <Formsy.Form
          className={cls('form')}
          onValidSubmit={this._onValidSubmit}
          onInvalidSubmit={this._onInvalidSubmit}
        >
          <Input
            name='name'
            placeHolder='Name'
            validations={{
              isExisty: true,
              isWords: true,
            }}
            className={cls('name')}
            validationError='This field is invalid'
          />
          <Input
            name='email'
            validations={{
              isEmail: true,
              isExisty: true,
            }}
            placeHolder='Email Address'
            className={cls('email')}
            validationError='This is not a valid email'
          />
          <Input
            textArea
            name='message'
            validations='isExisty'
            className={cls('message')}
            placeHolder='Message'
            validationError='This field is Empty'
          />
          {this._getButton()}
        </Formsy.Form>
      </div>
    )
  }
}
