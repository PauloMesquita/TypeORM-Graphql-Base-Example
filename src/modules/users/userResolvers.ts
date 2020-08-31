import { User } from "./userModels";

import { PubSub } from "apollo-server";
const pubsub = new PubSub();
const USER_ADDED = "USER_ADDED";

export default {
  Query: {
    users: async (): Promise<User[]> => {
      const users = await User.find();
      console.log(users);
      return users;
    },
    user: (_: undefined, { id }: Record<string, number>): Promise<User> =>
      User.findOne({ where: { id } }),
  },
  Mutation: {
    createUser: async (_: undefined, data: User): Promise<User> => {
      const user = await User.create(data).save();
      pubsub.publish(USER_ADDED, { addedUser: user });
      return user;
    },
  },
  // Subscription: {
  //   addedUser: {
  //     subscribe: (): unknown => pubsub.asyncIterator([USER_ADDED]),
  //   },
  // },
};
