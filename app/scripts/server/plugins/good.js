// @flow

const reporters = {
  console: [
    {
      module: 'good-squeeze',
      name: 'Squeeze',
      args: [{
        response: '*',
        error: '*',
        request: ['api'],
      }],
    },
    {
      module: 'good-console',
      args: [{
        format: 'dddd DD-MM-YYYY (HH:mm:ss)',
      }],
    },
    'stdout',
  ],
}

export default {
  register: require('good'),
  options: {
    reporters,
  },
}
