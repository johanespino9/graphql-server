import express from "express";
import graphqlHttp from 'express-graphql'
import schema from "./schema";

import resolvers from './resolver'

const root = resolvers

const app = express()

app.get('/', (req, res) => {
    res.json('Hola')
})




app.use('/graphql', graphqlHttp({
    // que schema se va a usar 
    schema,
    rootValue: root,
    graphiql: true
    // probando

}))

app.listen(5600, () => {
    console.log('Corriendo')
})