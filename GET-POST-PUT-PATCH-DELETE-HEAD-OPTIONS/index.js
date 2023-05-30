//importando o .dotenv
const dotenv = require('dotenv')
dotenv.config()

// //conectando ao MongoDB
// const connectDatabase = require('./src/database/connectMongoDB')
// connectDatabase()

// //conectando ao MongoDB com Mongoose
const connectMongoDBWithMongoose = require('./src/database/connectMongoDBWithMongoose')
connectMongoDBWithMongoose()

//Importando o Express.js
require('./modules/express')
