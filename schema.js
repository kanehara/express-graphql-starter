const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList
} = require('graphql')

const MyType = new GraphQLObjectType({
  name: 'MyType',
  description: '...',
  fields: () => ({
    // ... fields
  })
})

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    description: '...',

    fields: () => ({
      myType: {
        type: MyType,
        args: {
          id: { type: GraphQLInt }
        },
        resolve: (root, args, context) => {}
      }
    })
  })
})