import { apolloHapi } from 'apollo-server'
import { makeExecutableSchema } from 'graphql-tools'

import data from 'server/graphql/data'
import squema from 'server/graphql/models/projects/Schema'
import resolver from 'server/graphql/models/projects/Query'

import config from 'scripts/config'

const executableSchema = makeExecutableSchema({
  typeDefs: [squema],
  resolvers: resolver(data),
})

export default {
  register: apolloHapi,
  options: {
    path: config.apiEndpoints.graphql,
    apolloOptions: () => ({
      pretty: true,
      schema: executableSchema,
    }),
  },
}
