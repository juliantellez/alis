import Joi from 'joi'
import path from 'path'

import config from 'scripts/config'
import failAction from 'scripts/routes/utils/failAction'
import {graphql, buildSchema} from 'graphql'


export default {
  method: 'POST',
  path: path.normalize(path.join(config.get('BASE_URL'), '/api', 'get-work')),
  handler: (request: Function, reply: Function) => {

  },

  config: {
    validate: {
      payload: Joi.object().keys({
      }).required(),
      failAction: failAction,
    },
  },
}
