import _ from 'lodash'

const onFetch = (state, action) => {
  // console.log(state, action)
  return action
}

const onSuccess = (state, action) => {
  // console.log(state, action)
  return action.data && action.data.toJS()
}

const onError = (state, action) => {
  // console.log(state, action)
  return action
}

const projects = (state = {}, action) => {
  const types = {
    getProjects: onFetch(state, action),
    getProjectsSuccess: onSuccess(state, action),
    getProjectsError: onError(state, action),
  }
  return types[action.type] || state
}

export default projects
