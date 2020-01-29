const { prisma } = require("./generated/prisma-client");
const { GraphQLServer } = require("graphql-yoga");

const resolvers = {
  Query: {
    pieces(root, args, context) {
      return context.prisma.pieces();
    }
  },
  Mutation: {
    createPiece: async (root, args, context) => {
      if (args.connections.length !== 4) {
        throw Error("Piece should have 4 connections");
      }

      const lastPiece = await context.prisma
        .pieces({ orderBy: "index_DESC", last: 1 })
        .index();
      const newIndex = lastPiece.length > 0 ? lastPiece[0].index + 1 : 0;
      const newConnections = args.connections.map((connection, index) => ({
        ...connection,
        index
      }));

      return context.prisma.createPiece({
        index: newIndex,
        connections: { create: newConnections }
      });
    },
    deletePieceById(root, args, context) {
      return context.prisma.deletePiece({ id: args.id });
    },
    deletePieceByIndex(root, args, context) {
      return context.prisma.deletePiece({ index: args.index });
    }
  },
  Piece: {
    connections: (root, args, context) => {
      return context.prisma.piece({ id: root.id }).connections();
    }
  }
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: {
    prisma
  }
});
server.start(() => console.log("Server is running on http://localhost:4000"));
