import projectsManager from 'scripts/api/managers/projects'
import createActionPromise from 'scripts/client/utils/createActionPromise'

export const GET_PROJECTS = 'GET_PROJECTS'

export default {
  GET_PROJECTS (amount) {
    return ({dispatch, getState}) => {
      dispatch({type: GET_PROJECTS})
      return Promise.all([
        projectsManager.getProjects(amount),
      ])
      .then(([data]) => {
        console.log(data, 'here')
        dispatch({type: 'GET_PROJECTS_SUCCESS', data})
        return data
      })
      .catch(e => {
        console.log(e)
        dispatch({type: 'GET_PROJECTS_ERROR', e})
      })
    }
  },
}

// export default createActionPromise(projects)
