import express from "express";
import { ApolloServer } from 'apollo-server-express'
import { typeDefs } from "./data/schema";
import { resolvers } from './data/resolver'

const app = express()

const server = new ApolloServer({ typeDefs, resolvers  })

server.applyMiddleware({ app })

app.listen({ port: 5600}, () => console.log(`Corriendo en http://localhost:4000${server.graphqlPath}`))
