import Joi from 'joi'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

import config from 'scripts/config'
import nodeMailer from 'server/services/nodemailer'
import failAction from 'scripts/routes/utils/failAction'

import ContacEmail from 'scripts/components/email/Contact'

export default {
  method: 'POST',
  path: config.apiEndpoints.sendMail,
  handler: (request: Function, reply: Function) => {
    const {email, message, name} = request.payload
    const {service, user, pass} = config.mailCredentials

    const TO = user
    const FROM = '"👻ALIWAY.CO👻" <info@aliway.com>'
    const SUBJECT = `${name} wants to conatct you :)`

    const HTML = ReactDOMServer.renderToStaticMarkup(
      <ContacEmail
        name={name}
        email={email}
        message={message}
      />
    )
    const mail = nodeMailer.createEmail(FROM, TO, SUBJECT, HTML)
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
      failAction: failAction,
    },
  },
}
