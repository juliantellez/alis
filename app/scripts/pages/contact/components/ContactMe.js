import React from 'react'
import Formsy from 'formsy-react'
import Input from './Input'
const cls = elem => `ContactMe-${elem}`

export default class ContactMe extends React.Component {
  static contextTypes = {
    env: React.PropTypes.object,
    store: React.PropTypes.object,
  }

  _onValidSubmit (data) {
    console.log(data)
    //https://whatsmate.github.io/2016-02-17-send-whatsapp-message-nodejs/
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
          <button
            className={cls('button')}
          >
            Send
          </button>
        </Formsy.Form>
      </div>
    )
  }
}
