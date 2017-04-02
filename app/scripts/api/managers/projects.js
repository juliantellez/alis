import I from 'immutable'
import graphql from 'scripts/api/graphql'

import projectHelper from '../helpers/project'

export default {
  getProjects (amount) {
    const query = `
      query {
        getWorks(count: ${amount}){
          url,
          image,
          description,
        }
      }
    `
    return graphql.query({query})
    .then(res => res.get('data').get('getWorks').map(projectHelper.getFromData))
  },
}
