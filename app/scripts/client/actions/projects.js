import projectsManager from 'scripts/api/managers/projects'
import createActionPromise from 'scripts/client/utils/createActionPromise'

const projects = {
  GET_PROJECTS (amount) {
    return projectsManager.getProjects(amount)
  },
  GET_PROJECT_BY_SLUG (slug) {
    return projectsManager.getProjectBySlug(slug)
  },
}

export default createActionPromise(projects)
