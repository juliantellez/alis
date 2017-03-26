const squema = `
  type Work {
    name: String!
    image: String!
    url: String!
    description: String!
  }

  type Query {
    getWorks(count: Int): [Work]
    getWorkByName(name: String!): Work
  }

  schema {
    query: Query,
  }
`

export default squema
