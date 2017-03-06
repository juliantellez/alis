import path from 'path'

import env from 'scripts/utils/env'
import config from 'scripts/config'

export default {
  method: 'POST',
  path: path.normalize(path.join(config.get('BASE_URL'), '/api', '/send-mail')),
  handler: (request: Function, reply: Function) => {
    console.log(request)
    reply('ds')
  },
}
