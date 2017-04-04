import {graphiqlHapi} from 'apollo-server'
import config from 'scripts/config'

export default {
  register: graphiqlHapi,
  options: {
    path: config.apiEndpoints.graphiql,
    graphiqlOptions: {
      endpointURL: config.apiEndpoints.graphql,
    },
  },
}
