import _ from 'lodash'
import nodemailer from 'nodemailer'

const createEmail = (fr, to, subject, html) => ({from: fr, to, subject, html})

const createTransport = (service, user, pass) => {
  return {
    service,
    auth: {user, pass},
  }
}

const sendMail = (transport, mail) => {
  const transporter = nodemailer.createTransport(transport)
  return new Promise((resolve, reject) => {
    transporter.sendMail(mail, (e, res) => {
      return !_.isNil(e) ? reject(e) : resolve(res)
    })
  })
}

export default {
  sendMail,
  createEmail,
  createTransport,
}
