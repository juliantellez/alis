import { createStore } from 'redux'

import reducers from 'scripts/client/reducers/main'
import actions from 'scripts/client/actions/main'
import createActionPromise from 'scripts/client/utils/createActionPromise'

const STATE = {} // TODO load from server

const store = createStore(
  reducers,
  STATE,
)

export const Actions = createActionPromise(actions, store)

export default store
