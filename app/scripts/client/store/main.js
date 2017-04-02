import {applyMiddleware, createStore} from 'redux'
import env from 'scripts/utils/env'
import reducers from 'scripts/client/reducers/main'

let STATE = {}
if (env.isBrowser()) {
  STATE = window.STATE || {}
}

import _ from 'lodash'

function thunkMiddleware (store) {
  return dispatch => {
    return action => {
      if (_.isFunction(action)) {
        return action(store)
      } else {
        return dispatch(action)
      }
    }
  }
}

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore)
const store = createStoreWithMiddleware(reducers, STATE)
store.env = env.isBrowser() ? 'browser' : 'server'
store.id = Math.random()

export default store
