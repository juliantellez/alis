const resolver = data => ({
  Query: {
    getWorkByName (root, {name}) {
      const work = data.filter(d => d.get('name') === name)
      return work.toJS()[0]
    },
    getWorks (root, {count = 0}) {
      return data.slice(0, count).toJS()
    },
  },
})

export default resolver
