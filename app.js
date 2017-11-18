const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema')
const app = express()

app.use('/graphql', graphqlHTTP(req => {
  return {
    schema,
    context: {
      // ... loaders
    },
    graphiql: true
  }
}))

module.exports = app