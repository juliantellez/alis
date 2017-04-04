import I from 'immutable'

class Projects extends I.Record({
  all: I.List(),
  currentProject: I.Map(),
  error: new Error(),
}) {}

const onGetProjectsSuccess = (state, action) => {
  return new Projects({all: action.data})
}

const onGetProjectByIdSuccess = (state, action) => {
  return new Projects({currentProject: action.data})
}

const onError = (state, action) => {
  return new Projects({error: new Error(action.error)})
}

const projects = (state = new Projects(), action) => {
  switch (action.type) {
    case 'GET_PROJECTS_SUCCESS': return onGetProjectsSuccess(state, action)
    case 'GET_PROJECTS_ERROR': return onError(state, action)
    case 'GET_PROJECT_BY_SLUG_SUCCESS': return onGetProjectByIdSuccess(state, action)
    case 'GET_PROJECT_BY_SLUG_ERROR': return onError(state, action)
    default: return state
  }
}

export default projects
