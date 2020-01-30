const { prisma } = require("./generated/prisma-client");
const { GraphQLServer } = require("graphql-yoga");

const resolvers = {
  Query: {
    pieces(root, args, context) {
      return context.prisma.pieces({ orderBy: "index_DESC", ...args });
    }
  },
  Mutation: {
    createPiece: async (root, args, context) => {
      if (args.connections.length !== 4) {
        throw Error("Piece should have 4 connections");
      }
      let pieceIndex = null;
      if (args.index === undefined) {
        const lastPiece = await context.prisma
          .pieces({ orderBy: "index_DESC", first: 1 })
          .index();
        console.log(lastPiece[0].index);

        pieceIndex = lastPiece.length > 0 ? lastPiece[0].index + 1 : 0;
      } else {
        pieceIndex = args.index;
      }

      const newConnections = args.connections.map((connection, index) => ({
        ...connection,
        index
      }));

      return context.prisma.createPiece({
        index: pieceIndex,
        connections: { create: newConnections }
      });
    },
    deletePieceById(root, args, context) {
      return context.prisma.deletePiece({ id: args.id });
    },
    deletePieceByIndex(root, args, context) {
      return context.prisma.deletePiece({ index: args.index });
    },
    deleteLastPiece: async (root, args, context) => {
      const query = await context.prisma.pieces({
        orderBy: "index_DESC",
        first: 1
      });

      if (query.length === 0) {
        throw Error("There is nothing to delete");
      }

      return context.prisma.deletePiece({ id: query[0].id });
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
