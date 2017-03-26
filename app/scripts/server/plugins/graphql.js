// @flow
import { apolloHapi } from 'apollo-server'
import { makeExecutableSchema } from 'graphql-tools'
import squema from 'server/graphql/models/work/workSchema'
import resolver from 'server/graphql/models/work/workQuery'
import data from 'server/graphql/data'

const executableSchema = makeExecutableSchema({
  typeDefs: [squema],
  resolvers: resolver(data),
})

export default {
  register: apolloHapi,
  options: {
    path: '/graphql',
    apolloOptions: () => ({
      pretty: true,
      schema: executableSchema,
    }),
  },
}
