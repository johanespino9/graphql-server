import express from "express";
import graphqlHttp from 'express-graphql'
import {schema} from "./schema";

const app = express()

app.get('/', (req, res) => {
    res.json('Hola')
})

app.use('/graphql', graphqlHttp({
    // que schema se va a usar 
    schema,
    graphiql: true
    // probando

}))

app.listen(5600, () => {
    console.log('Corriendo')
})