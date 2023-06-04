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
const express = require('express')
const app = express()

//Routes from controller folder
require('./modules/controller')
const router1 = require('./modules/controller')
app.use('/', router1)

//Routes from routes folder
const router = require("./src/routes/router_all")
app.use('/rota', router)

//definindo a porta
const port = 8080

//Função que será executada quando o servidor ficar Online
app.listen(port, () => console.log(`Rorando com Express na porta ${port}!`))
