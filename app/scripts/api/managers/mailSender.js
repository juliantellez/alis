import {api} from 'scripts/api/request'

export default {
  send ({email, message, name}) {
    return api('send-mail', {
      email,
      message,
      name,
    })
  },
}
