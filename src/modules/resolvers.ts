import userResolvers from "./users/userResolvers";
import messageResolvers from "./messages/messageResolver";

// Join all resolvers
export default {
  Query: {
    ...userResolvers.Query,
    ...messageResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...messageResolvers.Mutation,
  },
};
