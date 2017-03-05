import {createStore, combineReducers} from 'redux'

import router from 'scripts/reducers/router'

const reducers = combineReducers({
  router,
})

const STATE = {} // TODO load from server

export default createStore(reducers, STATE)
