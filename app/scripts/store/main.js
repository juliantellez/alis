import {createStore, combineReducers} from 'redux'

import router from 'scripts/reducers/router'
import notification from 'scripts/reducers/notification'

const reducers = combineReducers({
  router,
  notification,
})

const STATE = {} // TODO load from server

export default createStore(reducers, STATE)
