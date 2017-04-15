import graphql from 'scripts/api/graphql'

import projectHelper from '../helpers/project'

export default {
  getProjectBySlug (slug) {
    const query = `
      query {
        getBySlug(slug: "${slug}"){
          name,
          slug,
          palette,
          imageUrl,
          description,
        }
      }
    `
    return graphql.query({query})
    .then(res => {
      const project = res.get('data').get('getBySlug')
      return projectHelper.getFromData(project)
    })
  },
  getRelatedProjects (slug) {
    const query = `
      query {
        getRelatedProjects(slug: "${slug}"){
          slug,
          imageUrl,
        }
      }
    `
    return graphql.query({query})
    .then(res =>
      res.get('data')
      .get('getRelatedProjects')
      .map(projectHelper.getFromData)
    )
  },
}
