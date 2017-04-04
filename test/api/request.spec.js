import {api} from 'scripts/api/request'

describe.skip('API', () => {
  it('posts', () => {
    const payload = {
      email: 'donjulio@gmail.com',
      message: 'test message!!!!',
      name: 'Julio',
    }
    api('send-mail', payload)
    .then(res => {
      console.log(res)
    })
  })
})
