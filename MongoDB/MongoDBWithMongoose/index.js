//importando o .dotenv
const dotenv = require('dotenv')
dotenv.config()

//conectando ao MongoDB
const connectingToMongoDB = require('./connectMongoDBWithMongoose')
connectingToMongoDB()
