import React from 'react'
import Formsy from 'formsy-react'

import {Link} from 'react-router'
import Spinner from 'scripts/components/helpers/Spinner'
import mailSenderManager from 'scripts/api/managers/mailSender'
import Input from './Input'

const cls = elem => `ContactMe-${elem}`

export default class ContactMe extends React.Component {
  static contextTypes = {
    env: React.PropTypes.object,
    store: React.PropTypes.object,
  }

  state = {}

  _setNotification = content => {
    const {store} = this.context
    store.dispatch({
      type: 'SET_NOTIFICATION',
      state: {content},
    })
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

  _onValidSubmit = data => {
    this.setState({isSubmitting: true})
    mailSenderManager.send(data)
    .then(res => {
      this.setState({isSubmitting: false})
      this._setNotification('Message Sent ✌')
    })
    .catch(e => {
      this.setState({isSubmitting: false})
      this._setNotification(this._errorMessage())
    })
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
      </div>
    )
  }
}
