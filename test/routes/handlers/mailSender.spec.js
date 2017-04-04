import request from 'superagent'

const PATH = 'http://localhost:8000/api/send-mail'

describe.skip('mailsender', () => {
  it('status ok', done => {
    request
    .post(PATH)
    .send({
      email: 'donjulio@gmail.com',
      message: 'test message!!!!',
      name: 'Julio',
    })
    .end((e, res) => {
      if (e || !res.ok) {
        return done(new Error(JSON.stringify(e.response)))
      } else {
        expect(res.statusCode).to.equal(200)
        return done()
      }
    })
  })
})
