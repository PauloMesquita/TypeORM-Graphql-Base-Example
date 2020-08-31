import { gql } from "apollo-server";

export default gql`
  type User {
    id: ID!
    email: String!
    username: String!
  }

  extend type Query {
    users: [User!]!
    user(id: ID!): User
  }

  extend type Mutation {
    createUser(username: String!, email: String!): User
  }

  # type Subscription {
  #   addedUser: User
  # }
`;
