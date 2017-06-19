import _ from 'lodash'

const isBrowser = () => !_.isNil(global.window)
const baseUrl = (env = 'local') => ({
  production: 'https://aliway.co/',
  dev: 'https://dev.aliway.co/',
  local: '/',
})[env]

export default {
  isBrowser,
  getNode: () => process.env.NODE_ENV,
  baseUrl: baseUrl(process.env.NODE_ENV),
}
