import { combineReducers } from 'redux'

import notification from './notification'
import colorTheme from './colorTheme'
import projects from './projects'
import project from './project'
import router from './router'

export default combineReducers({
  router,
  project,
  projects,
  colorTheme,
  notification,
})
