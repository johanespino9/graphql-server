import express from "express";
import graphqlHttp from 'express-graphql'
import schema from "./schema";

const app = express()

app.get('/', (req, res) => {
    res.json('Hola')
})


class Cliente {
    constructor(id, { nombre, apellido, empresa, email}){
        this.id = id
        this.nombre = nombre
        this.apellido = apellido
        this.empresa = empresa
        this.email = email
    }
}

const clientesDB = {}

// resolver
const root = { cliente: () => {
    return {
        "id": 239000954,
        "nombre": "Johan",
        "apellido": "Espino",
        "empresa": "Spino Lab", 
        "email": "correo@gmail.com"
    }

    },
    crearCliente : ({input}) => {
        const id = require('crypto').randomBytes(10).toString('hex')
        clientesDB[id] = input
        return new Cliente(id, input)
    }
} 

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