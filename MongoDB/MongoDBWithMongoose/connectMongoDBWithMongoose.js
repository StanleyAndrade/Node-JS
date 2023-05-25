//Forma de conectar COM o Mongoose
const mongoose = require('mongoose')

const connectingToMongoDB = async () => {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@nodeteste.evberpg.mongodb.net/?retryWrites=true&w=majority`, {
}).then(() => {
    console.log('Conectado ao MongoDB')
}).catch((error) => {
    console.log('Erro ao conectar-se ao MongoDB' + error)
})
} 
module.exports = connectingToMongoDB
