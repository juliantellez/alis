// @flow

import { Record } from 'immutable'
import path from 'path'
import appConfig from '../../app.config'

if (process.env.NODE_ENV === 'local') {
  // Do not check for TLS certificates
  process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0'
}
// TODO FIX THIS
// process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0' // TODO remove this

const apiEnpoint = url => path.normalize(path.join('/api', url))
const apiEndpoints = {
  sendMail: apiEnpoint('send-mail'),
  graphql: apiEnpoint('graphql'),
  graphiql: apiEnpoint('graphiql'),
}

const {mailService, mailUser, mailPass} = process.env
const mailCredentials = {
  service: mailService || 'Gmail',
  user: mailUser,
  pass: mailPass,
}

class Config extends Record({
  ...appConfig,
  apiEndpoints,
  mailCredentials,
}) {}

export default new Config()
