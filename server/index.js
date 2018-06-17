const { GraphQLServer } = require("graphql-yoga");
const fs = require("fs");
const path = require("path");
const typeDefs = [
  fs.readFileSync(path.join(__dirname, "schema.graphql"), "utf8")
];
const resolvers = require("./resolvers");

const server = new GraphQLServer({ typeDefs, resolvers });

server
  .start({ endpoint: "/graphql" }, ({ port }) => {
    console.log(
      `Server started, listening on port ${port} for incoming requests.`
    );

    console.log(`Open http://localhost:${port} to view the graphQL playground`);
  })
  .catch(console.log);
