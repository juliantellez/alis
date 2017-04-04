import graphql from 'scripts/api/graphql'

import projectHelper from '../helpers/project'

export default {
  getProjects (amount) {
    const query = `
      query {
        getProjects(count: ${amount}){
          name,
          slug,
          imageUrl,
          description,
        }
      }
    `
    return graphql.query({query})
    .then(res => res.get('data').get('getProjects').map(projectHelper.getFromData))
  },
  getProjectBySlug (slug) {
    const query = `
      query {
        getBySlug(slug: "${slug}"){
          name,
          slug,
          imageUrl,
          description,
        }
      }
    `
    return graphql.query({query})
    .then(res => {
      const project = res.get('data').get('getProjectBySlug')
      return projectHelper.getFromData(project)
    })
  },
}
