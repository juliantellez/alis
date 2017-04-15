import projectManager from 'scripts/api/managers/project'
import createActionPromise from 'scripts/client/utils/createActionPromise'

const projects = {
  GET_PROJECT_BY_SLUG (slug) {
    return projectManager.getProjectBySlug(slug)
  },
  GET_RELATED_PROJECTS (slug) {
    return projectManager.getRelatedProjects(slug)
  },
}

export default createActionPromise(projects)
