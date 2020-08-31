import { Message } from "./messageModels";
import { User } from "../users/userModels";

/*
This method receive 2 arguments
The first is nodes that is the nodes user send in request
The second is path and its values to search

The method finds if the paths values are in nodes that user sent

Example Request:
messages: {
  id,
  user: {
    id
  }
}

if path === ['messages', 'user'] the function will return true because
user request both informations
*/
function doesPathExist(nodes, path) {
  if (!nodes) {
    return false;
  }

  const node = nodes.find((x) => x.name.value === path[0]);

  if (!node) {
    return false;
  }

  if (path.length === 1) {
    return true;
  }

  return doesPathExist(node.selectionSet.selections, path.slice(1));
}

export default {
  Query: {
    messages: async (
      _: undefined,
      __: undefined,
      ___: undefined,
      info: Record<string, any>
    ): Promise<Message[]> => {
      //Check if user requested user info
      const shouldDoLeftJoin = doesPathExist(info.fieldNodes, [
        "messages",
        "user",
      ]);
      //Do a left join only if info was requested
      const messages = await Message.find(
        shouldDoLeftJoin
          ? {
              join: {
                alias: "message",
                leftJoinAndSelect: { user: "message.user" },
              },
            }
          : {}
      );
      return messages;
    },
  },
  Mutation: {
    createMessage: async (_: undefined, data: Message): Promise<Message> => {
      const user = await User.findOne({ where: { id: data.user } });
      const message = await Message.create({ ...data, user }).save();
      return message;
    },
  },
};
