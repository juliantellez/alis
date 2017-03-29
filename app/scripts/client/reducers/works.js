import _ from 'lodash'
import env from 'scripts/utils/env'
import projectsManager from 'scripts/api/managers/projects'

const getWorks = (prevState = {}, nextState = {}) => {
  const {count} = nextState
  if (!env.isBrowser() || _.isNil(count)) {
    return {}
  } else {
    return Promise.all([
      projectsManager.getProjects(count),
    ])
    .then(res => {
      console.log(res[0].toJS())
      return res.data && res.data.getWorks
    })
    .catch(e => console.log(e))
  }
}

const works = (state = {}, action) => {
  const types = {
    REQUEST_WORKS: getWorks(state, action.state),
  }
  return types[action.type] || state
}

export default works
