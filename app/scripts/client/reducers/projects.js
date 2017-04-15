import I from 'immutable'

class Projects extends I.Record({
  all: I.List(),
  error: new Error(),
}) {}

const onGetProjectsSuccess = (state, action) => {
  return new Projects({all: action.data})
}

const onError = (state, action) => {
  return new Projects({error: new Error(action.error)})
}

const projects = (state = new Projects(), action) => {
  switch (action.type) {
    case 'GET_PROJECTS_SUCCESS': return onGetProjectsSuccess(state, action)
    case 'GET_PROJECTS_ERROR': return onError(state, action)
    default: return state
  }
}

export default projects
