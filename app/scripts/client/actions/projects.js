import projectsManager from 'scripts/api/managers/projects'
import createActionPromise from 'scripts/client/utils/createActionPromise'

const projects = {
  GET_PROJECTS (amount) {
    return projectsManager.getProjects(amount)
  },
}

export default createActionPromise(projects)
