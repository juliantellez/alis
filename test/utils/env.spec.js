import env from 'scripts/utils/env'

describe('ENV', () => {
  it('baseUrl', () => {
    expect(env.baseUrl).to.equal('http://localhost:8000')
  })
})
