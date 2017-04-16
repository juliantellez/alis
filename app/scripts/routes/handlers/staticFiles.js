import config from 'scripts/config'

export default {
  path: '/{param*}',
  method: 'GET',
  handler: {
    directory: {
      path: config.STATIC,
      listing: true,
      index: false,
    },
  },
}
