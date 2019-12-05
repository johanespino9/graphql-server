import express from "express";
import graphqlHttp from 'express-graphql'
import schema from "./schema";

const app = express()

app.get('/', (req, res) => {
    res.send('Hola')
})
// resolver

const root = { cliente: () => {
    return {
        "id": 23900094,
        "nombre": "Johan",
        "apellido": "Espino",
        "empresa": "Spino Lab", 
        "email": "correo@gmail.com"
    }
} }

app.use('/graphql', graphqlHttp({
    // que schema se va a usar 
    schema,
    rootValue: root,
    graphiql: true

}))

app.listen(3000, () => {
    console.log('Corriendo')
})