import path from 'path'
import config from 'scripts/config'

export default {
  path: `${config.BASE_URL}/{param*}`,
  method: 'GET',
  handler: {
    directory: {
      path: path.join(config.STATIC, config.BASE_URL),
    },
  },
}
