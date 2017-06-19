import _ from 'lodash'
import config from 'scripts/config'

const isBrowser = () => !_.isNil(global.window)
const baseUrl = (env = 'local') => ({
  production: 'https://aliway.co',
  dev: 'https://dev.aliway.co',
  local: `http://localhost:${config.APP_PORT}`,
})[env]
// TODO FIX THIS
// let baseUrl = ''
// if (!isBrowser()) {
//   switch (process.env.NODE_ENV) {
//     case 'production':
//       baseUrl = 'https://aliway.co'
//       break
//     case 'staging':
//       baseUrl = 'https://dev.aliway.co'
//       break
//     case 'local':
//     case 'test':
//       baseUrl = `https://aliway.co`
//       break
//   }
// }

export default {
  isBrowser,
  // baseUrl,
  getNode: () => process.env.NODE_ENV,
  baseUrl: baseUrl(process.env.NODE_ENV),
}
