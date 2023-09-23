//Forma de conectar COM o Mongoose
const mongoose = require('mongoose')

//Função que conecta ao MongoDB junto com o Mongoose
const connectMongoDBWithMongoose = async () => {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}preencher`, {
    }).then(() => {
        console.log('Conectado ao MongoDB')
    }).catch((error) => {
        console.log('Erro ao conectar-se ao MongoDB' + error)
    })
    } 
module.exports = connectMongoDBWithMongoose
