import env from 'scripts/utils/env'

describe('ENV', () => {
  it('baseUrl', () => {
    expect(env.baseUrl).to.equal('https://localhost:8000')
  })
})
