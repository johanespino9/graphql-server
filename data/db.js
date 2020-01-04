import mongoose from 'mongoose'

mongoose.Promise = global.Promise

mongoose.connect('mongodb+srv://johan:XGqPr9A9Iyp7gnlG@cluster0-wxzry.mongodb.net/clientes?retryWrites=true&w=majority', { useNewUrlParser: true })

const clientesSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    empresa: String,
    email: String,
    edad: Number,
    tipo: String,
    pedidos: Array
})

const Clientes = mongoose.model('clientes', clientesSchema)

export { Clientes }