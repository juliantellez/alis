import Joi from 'joi'
import path from 'path'

import config from 'scripts/config'
import nodeMailer from 'server/services/nodemailer'

export default {
  method: 'POST',
  path: path.normalize(path.join(config.get('BASE_URL'), '/api', 'send-mail')),
  handler: (request: Function, reply: Function) => {
    const {email, message, name} = request.payload

    const FROM = '"👻ALIWAY.CO👻" <contact-me@aliway.com>'
    const TO = 'jgubina@gmail.com'
    const SUBJECT = `${name} wants to conatct you :)`
    const HTML = (`
      <h1><strong>Hello Ali!</strong></h1>
      <div>You have a message from <strong>${name}</strong></div>
      <br/>
      <h4>Contact:</h4>
      <div>${email}</div>
      <br/>
      <h4>MESSAGE:</h4>
      <div>"${message} ..."</div>
    `)

    const mail = nodeMailer.createEmail(FROM, TO, SUBJECT, HTML)

    const service = 'Gmail'
    const user = 'jgubina@gmail.com'
    const pass = 'gubina22'

    const transport = nodeMailer.createTransport(service, user, pass)

    nodeMailer.sendMail(transport, mail)
    .then(r => reply(r))
    .catch(e => reply(e))
  },

  config: {
    validate: {
      payload: Joi.object().keys({
        email: Joi.string().required(),
        message: Joi.string().required(),
        name: Joi.string().required(),
      }).required(),
      failAction: (request: Function, reply: Function, payload: string, error: Object) => {
        console.log('PATH:', request.path + '\n')
        console.log('ERROR:', JSON.stringify(error.output) + '\n')
        console.log('PAYLOAD:', JSON.stringify(request.payload) + '\n')
        return reply(error)
      },
    },
  },
}
