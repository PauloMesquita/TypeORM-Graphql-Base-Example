import { gql } from "apollo-server";

export default gql`
  type User {
    id: ID!
    email: String!
    username: String!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
  }

  type Mutation {
    createUser(username: String!, email: String!): User
  }
`;
