import _ from 'lodash'

const onFetch = (state, action) => {
  return action
}

const onSuccess = (state, action) => {
  console.log(action)
  return action.data
}

const onError = (state, action) => {
  return action
}

const projects = (state = {}, action) => {
  switch (action.type) {
    case 'GET_PROJECTS':
      console.log('dispatchssdfsd')
      return {}
    case 'GET_PROJECTS_SUCCESS': return onSuccess(state, action)
    default: return {}
  }
}

export default projects
