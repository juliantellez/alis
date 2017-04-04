import {api} from 'scripts/api/request'

import mailHelper from '../helpers/mail'

export default {
  send ({email, message, name}) {
    return api('send-mail', {
      email,
      message,
      name,
    })
    .then(data => mailHelper.getFromData(data))
  },
}
