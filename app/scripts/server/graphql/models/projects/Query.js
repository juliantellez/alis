import I from 'immutable'

const resolver = data => ({
  Query: {
    getProjects (root, {count = 0}) {
      return data.slice(0, count).toJS()
    },
    getBySlug (args, {slug = ''}) {
      const project = data.find(d => d.get('slug') === slug)
      return project.toJS()
    },
    getRelatedProjects (args, {slug = ''}) {
      let projects = I.List()
      data.find(project => project.get('slug') === slug)
      .get('related')
      .forEach(related => {
        const p = data.find(project => project.get('slug') === related)
        projects = projects.push(p)
      })
      return projects.toJS()
    },
  },
})

export default resolver
