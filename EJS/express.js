//Lembre de importar o express na pasta index: require('./modules/express')
//Lembre de criar pasta views dentro da src, e criar arquivo index.ejs dentro da pasta views
//Importando o express
const express = require('express')

//importando user_model para usá-lo aqui no express (mas pode usar em qualquer lugar)
const UserModel = require("../src/models/user_model")

//Inicializando o Express e colocando numa variável
const app = express()

//sinalizando que vai receber JSON
app.use(express.json())

//EJS
app.set("view engine", "ejs")
//mostrando a pasta e o arquivo
app.set("views", "src/views") 

//enviando a view
app.get('/views/users', async (req, res) => {
    const users = await UserModel.find({});
    res.render("index", { users });
})
