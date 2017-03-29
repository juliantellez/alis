import { combineReducers } from 'redux'

import projects from './projects'
import router from './router'
import notification from './notification'

export default combineReducers({
  router,
  projects,
  notification,
})
