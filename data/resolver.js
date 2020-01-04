import { mongoose } from 'mongoose'
import { Clientes } from './db'
import { rejects } from 'assert'

// resolver
export const resolvers = { 
  Query: {
    getClientes : (_, { limite }) => {
      return Clientes.find({}).limit(limite)
    },
    getCliente : (_,{id}) => {
      return new Promise((resolve, object) => {
        Clientes.findById(id, (error, cliente) => {
          if(error) rejects(error)
          else resolve(cliente)
        }) 
      })
      //return new Cliente(id, clientesDB[id])
    }
  },
  Mutation: {
    crearCliente : (_,{input}) => {
      const nuevoCliente = new Clientes({
        nombre : input.nombre,
        apellido : input.apellido,
        empresa : input.empresa,
        email : input.email,
        edad : input.edad,
        tipo : input.tipo,
        pedidos : input.pedidos
      })
      nuevoCliente.id = nuevoCliente._id
      
      return new Promise((resolve, object) => {
        nuevoCliente.save((error) => {
          if(error) rejects(error)
          else resolve(nuevoCliente )
        })
      })
    },
    actualizarCliente : (_, {input}) => {
      return new Promise((resolve, object) => {
        Clientes.findOneAndUpdate({ _id: input.id}, input, { new: true }, (error, cliente) => {
          if(error) rejects(error)
          else resolve(cliente)
        })
      })
    },
    eliminarCliente: (_, { id }) => {
      return new Promise((resolve, object) => {
        Clientes.findOneAndRemove({ _id: id}, (error) => {
          if(error) rejects(error)
          else resolve('Se elimino correctamente')
        })
      })
    }
  }
} 
