//importando o .dotenv
const dotenv = require('dotenv')
dotenv.config()

//chamando a função connectDatabase
const connectDatabase = require('./connectMongoDB')
connectDatabase()
