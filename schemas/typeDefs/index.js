const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = graphql;


const listData = require("../MOCK_DATA.json");

const listingTypes = require("./typeDefs/listingTypes");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllList: {
      type: new GraphQLList(listingTypes),
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return listData;
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createList: {
      type: listingTypes,
      args: {
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        images: { type: GraphQLString },
        filter: { type: GraphQLString },
        rating: { type: GraphQLString },
        status: { type: GraphQLString },
        started_date: { type: GraphQLString },
        ended_date: { type: GraphQLString },




      },
      resolve(parent, args) {
        listingData.push({
          id: userData.length + 1,
          title: args.title,
          description: args.description,
          images: args.images,
          filter: args.filter,
          rating: args.rating,
          status: args.status,
          started_date: args.started_date,
          ended_date: args.ended_date,




        });
        return args;
      },
    },
  },
});

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });