// @flow

import { Record } from 'immutable'

import appConfig from '../../app.config'

class Config extends Record({
  ...appConfig,
}) {}

export default new Config()
