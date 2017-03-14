import _ from 'lodash'
import config from 'scripts/config'

const baseUrl = (env = 'local') => ({
  production: 'https://aliway.co',
  dev: 'https://dev.aliway.co',
  local: `http://localhost:${config.APP_PORT}`,
})[env]

export default {
  baseUrl: baseUrl(process.env.NODE_ENV),
  getNode: () => process.env.NODE_ENV,
  isBrowser: () => !_.isNil(global.window),
}
