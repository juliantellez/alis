import env from 'scripts/utils/env'

describe.skip('ENV', () => {
  it('baseUrl', () => {
    expect(env.baseUrl).to.equal('http://localhost:8000')
  })
})
