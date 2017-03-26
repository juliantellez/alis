const squema = `
  type Work {
    name: String!
  }

  type Query {
    getWorkByName(name: String!): Work
  }

  schema {
    query: Query,
  }
`

export default squema
