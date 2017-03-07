import _ from 'lodash'

export default {
  getNode: () => process.env.NODE_ENV,
  isBrowser: () => !_.isNil(global.window),
}
