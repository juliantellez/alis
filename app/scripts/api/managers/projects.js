import graphql from 'scripts/api/graphql'

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
  },
}
