// @flow
import { apolloHapi } from 'apollo-server'
import { makeExecutableSchema } from 'graphql-tools'
import squema from 'server/squema'
// import resolvers from 'server'

const resolvers = {
  Query: {
    getWorkByName (root, {name}) {
      return {name}
    },
  },
}

const executableSchema = makeExecutableSchema({
  typeDefs: [squema],
  resolvers: resolvers,
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
