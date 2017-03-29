import projectsManager from 'scripts/api/managers/projects'

export default {
  getProjects (amount) {
    return projectsManager.getProjects(amount)
  },
}
