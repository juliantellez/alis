import Project from 'scripts/api/definitions/Project'

const onGetProjectBySlugSuccess = (state, action) => {
  return new Project(action.data)
}

const onGetRelatedProjectsSuccess = (state, action) => {
  return new Project({
    ...state.toJS(),
    palette: state.palette,
    related: action.data,
  })
}

const onError = (state, action) => {
  return new Error(action.error)
}

export default (state = new Project(), action) => {
  switch (action.type) {
    case 'GET_PROJECT_BY_SLUG_SUCCESS': return onGetProjectBySlugSuccess(state, action)
    case 'GET_PROJECT_BY_SLUG_ERROR': return onError(state, action)
    case 'GET_RELATED_PROJECTS_SUCCESS': return onGetRelatedProjectsSuccess(state, action)
    case 'GET_RELATED_PROJECTS_ERROR': return onError(state, action)
    default: return state
  }
}
