const resolver = data => ({
  Query: {
    getProjects (root, {count = 0}) {
      console.log('here')
      return data.slice(0, count).toJS()
    },
    getBySlug (args, {slug = ''}) {
      const project = data.filter(d => d.get('slug') === slug)
      return project.toJS()[0]
    },
  },
})

export default resolver
