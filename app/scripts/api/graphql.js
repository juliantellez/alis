import {api} from 'scripts/api/request'

export default {
  query ({query, variables}) {
    return api('graphql?', {
      query,
      variables,
    })
  },
}
