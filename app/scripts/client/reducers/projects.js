const onGetProjectsSuccess = (state, action) => {
  return action.data
}

const onGetProjectByIdSuccess = (state, action) => {
  return action.data
}

const onError = (state, action) => {
  return new Error(action.error)
}

const projects = (state = {}, action) => {
  switch (action.type) {
    case 'GET_PROJECTS': return {}
    case 'GET_PROJECTS_SUCCESS': return onGetProjectsSuccess(state, action)
    case 'GET_PROJECTS_ERROR': return onError(state, action)
    case 'GET_PROJECT_BY_SLUG': return {}
    case 'GET_PROJECT_BY_SLUG_SUCCESS': return onGetProjectByIdSuccess(state, action)
    case 'GET_PROJECT_BY_SLUG_ERROR': return onError(state, action)
    default: return {}
  }
}

export default projects
