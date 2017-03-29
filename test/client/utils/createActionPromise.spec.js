import { createStore } from 'redux'
import createActionPromise from 'scripts/client/utils/createActionPromise'

const testActions = {
  resolveAction: value => Promise.resolve(value),
  rejectAction: value => Promise.reject(value),
  objectAction: value => ({value}),
}

const reducer = (state = {}, action) => {
  const types = {
    resolveAction: {action},
    resolveActionSuccess: {action},
    resolveActionError: {action},
  }
  return types[action.type] || state
}

describe.only('createActionPromise', () => {
  it('Promise resolve', () => {
    const store = createStore(reducer, {})
    const asynActions = createActionPromise(testActions, store)
    const value = 1
    asynActions.resolveAction(value)
    // DISPATCHES THE ACTION
    const expected = 'resolveAction'
    expect(store.getState().action.type).to.equal(expected)
    // ASYNC HANDLING
    defer(() => {
      const expected = 'resolveActionSuccess'
      expect(store.getState().action.type).to.equal(expected)
      expect(store.getState().action.data).to.equal(value)
    })
  })
  // it('Promise reject', () => {
  //   const store = createStore(reducer)
  //   const asynActions = createActionPromise(testActions, store)
  //   // DISPATCHES THE ACTION
  //   const value = 'I am an error'
  //   asynActions.rejectAction(value)
  //   .catch(e => {
  //     expect(e).to.equal(value)
  //   })
  //   // ASYNC HANDLING

  //   defer(() => {
  //     console.log(store.getState())
  //     const expected = 'resolveActionSuccess'
  //     // expect(store.getState().action.type).to.equal(expected)
  //     // expect(store.getState().action.data).to.equal(value)
  //   })
  // })
  // it('Resolves object actions', () => {
  //   const store = createStore(reducer, {})
  //   const asynActions = createActionPromise(testActions, store)
  //   // DISPATCHES THE ACTION
  //   const value = 'I am an error'
  //   asynActions.objectAction(value)

  //   defer(() => {
  //     console.log(store.getState())
  //     const expected = 'resolveActionSuccess'
  //     // expect(store.getState().action.type).to.equal(expected)
  //     // expect(store.getState().action.data).to.equal(value)
  //   })
  // })
})
