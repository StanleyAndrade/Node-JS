//importando o .dotenv
const dotenv = require('dotenv')
dotenv.config()

//conectando ao MongoDB
const connectMongoDBWithMongoose = require('./connectMongoDBWithMongoose')
connectMongoDBWithMongoose()
