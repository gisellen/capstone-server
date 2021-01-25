const graphql = require("graphql");
const { GraphQLObjectType, GraphQLInt, GraphQLString } = graphql;

const listingType = new GraphQLObjectType({
  name: "listing",
  fields: () => ({
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    images: { type: GraphQLString },
    filter: { type: GraphQLString },
    rating: { type: GraphQLInt },
    status: { type: GraphQLString },
    started_date: { type: GraphQLString },
    ended_date: { type: GraphQLString },


  }),
});

module.exports = listingType;