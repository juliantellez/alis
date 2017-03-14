// @flow

import { Record } from 'immutable'

import appConfig from '../../app.config'

if (process.env.NODE_ENV === 'local') {
  // Do not check for TLS certificates
  process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0'
}

class Config extends Record({
  ...appConfig,
}) {}

export default new Config()
