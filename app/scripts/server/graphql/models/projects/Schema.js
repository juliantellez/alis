const squema = `
  type Project {
    name: String!
    imageUrl: String!
    slug: String!
    description: String!
    palette: [String!]
  }

  type Query {
    getProjects(count: Int): [Project]
    getBySlug(slug:  String!): Project
    getRelatedProjects(slug:  String!): [Project]
  }

  schema {
    query: Query,
  }
`

export default squema
