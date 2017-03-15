import _ from 'lodash'
import React from 'react'
import Formsy from 'formsy-react'

import Spinner from 'scripts/components/helpers/Spinner'
import mailSenderManager from 'scripts/api/managers/mailSender'
import Input from './Input'

const cls = elem => `ContactMe-${elem}`

export default class ContactMe extends React.Component {
  static contextTypes = {
    env: React.PropTypes.object,
    store: React.PropTypes.object,
  }

  state = {
    notify: 'An error ocurred :( , please send an emails instead',
  }

  _onValidSubmit = data => {
    this.setState({isSubmitting: true})
    mailSenderManager.send(data)
    .then(res => {
      this.setState({
        isSubmitting: false,
        notify: 'Your message has been sent',
      })
    })
    .catch(e => {
      this.setState({
        isSubmitting: false,
        notify: 'An error ocurred :( , please send an email instead',
      })
    })
  }

  _getNotifications () {
    const {notify} = this.state
    if (_.isNil(notify)) {
      return null
    }
    return (
      <div className={cls('notification')}>
        {notify}
      </div>
    )
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
      <div className='ContactMe' >
        <div className={cls('title')} >Contac Me</div>
        <Formsy.Form
          className={cls('form')}
          onValidSubmit={this._onValidSubmit}
          onInvalidSubmit={this._onInvalidSubmit}
        >
          <Input
            name='name'
            placeHolder='Your name'
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
            placeHolder='Your email'
            className={cls('email')}
            validationError='This is not a valid email'
          />
          <Input
            textArea
            name='message'
            validations='isExisty'
            className={cls('message')}
            placeHolder='A short message'
            validationError='This field is Empty'
          />
          {this._getButton()}
        </Formsy.Form>
        {this._getNotifications()}
      </div>
    )
  }
}
