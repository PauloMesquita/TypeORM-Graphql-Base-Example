// Server
import { ApolloServer } from "apollo-server";

// GraphQL Structures
import resolvers from "./modules/resolvers";
import typeDefs from "./modules/typeDefs";

// Connection db and dependency
import { createConnection } from "typeorm";
import "reflect-metadata";

//Instrospection and playground are used to playground on production
const server = new ApolloServer({
  typeDefs,
  resolvers,
  // introspection: true,
  // playground: true
});

console.log(`Connecting to database...`);
createConnection().then(() => {
  console.log(`Starting server...`);
  server.listen(process.env.PORT || 8000).then(({ url }) => {
    console.log(`Server running at ${url}`);
  });
});
