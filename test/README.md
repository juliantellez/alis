# Global Objects
```
- chai
- expect
- sinon
- nock
- spy / sinon.spy()
- sandbox / sinon.sandbox
- _ lodash
- defer (custom function)
- React
- mount (enzyme)
- shallow (enzyme)
```

# Global Hooks
```
before(() => {
  global.nock.enableNetConnect(/^localhost/)
})

beforeEach(() => {
  sandbox.create()
})

afterEach(() => {
  global.nock.cleanAll()
  spy.reset()
  sandbox.restore()
})

after(() => {
  global.nock.restore()
})
```