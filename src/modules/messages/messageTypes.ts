import { gql } from "apollo-server";

export default gql`
  type Message {
    id: ID!
    text: String!
    user: User!
  }

  extend type Query {
    messages: [Message!]!
  }

  extend type Mutation {
    createMessage(text: String!, user: Int!): Message
  }
`;
