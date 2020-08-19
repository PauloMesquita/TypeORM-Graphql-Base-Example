import {User} from './userModels'

export default {
  Query: {
    users: (): Promise<User[]> => User.find(),
    user: (_:undefined,{id}: Record<string,number>): Promise<User> => User.findOne({where: {id}})
  },
  Mutation: {
    createUser: async(_:undefined, data: User): Promise<User> => await User.create(data).save()
  }
};
