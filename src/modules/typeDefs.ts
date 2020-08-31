import userTypeDefs from "./users/userTypes";
import messageTypeDefs from "./messages/messageTypes";
import { gql } from "apollo-server";

// Join all typedefs
export default gql`
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
  ${userTypeDefs}
  ${messageTypeDefs}
`;
