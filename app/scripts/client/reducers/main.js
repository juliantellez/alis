import { combineReducers } from 'redux'

import notification from './notification'
import projects from './projects'
import project from './project'
import router from './router'

export default combineReducers({
  router,
  project,
  projects,
  notification,
})
