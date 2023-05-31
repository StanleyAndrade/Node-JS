//Lembre de importar o express na pasta index: require('./modules/express')
//Importando o express
const express = require('express')

//importando user_model para usá-lo aqui no express (mas pode usar em qualquer lugar)
const UserModel = require("../src/models/user_model")

//Inicializando o Express e colocando numa variável
const app = express()

//sinalizando que vai receber JSON
app.use(express.json())

//GET - Pegando os dados do database - TUDO
app.get("/users", async (req, res) => {
    try {
        const user = await UserModel.find({})
        res.status(200).json(users)
    } catch (error) {
        return res.status(500).send(error.message)
    }
})

//GET - pegando usuário por ID
app.get("/users/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const user = await UserModel.findById(id)
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).send(error.message)
    }
})

//POST - enviando dados para o databse
//Obs.: os dados enviados estão no Postman
app.post("/users", async (req, res) => {
    try {
        const user = await UserModel.create(req.body)
        res.status(200).json(user)
    } catch (error) {
        return res.status(500).send(error.message)
    }
})

//PATCH - Atualiza partes e não tudo
app.patch("/users/:id", async (req, res) => {
    try {
        const id = req.params.id
        const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true})
        res.status(200).json(user)
    } catch (error) {
        return res.status(500).send(error.message)
    }
})

//Delete - Apaga tudo
app.delete("/users/:id", async (req, res) => {
    try {
        const id = req.params.id
        const user = await UserModel.findByIdAndRemove(id)
        res.status(200).json(user)
    } catch (error) {
        return res.status(500).send(error.message)
    }
})

//definindo a porta
const port = 8080

//Função que será executada quando o servidor ficar Online
app.listen(port, () => console.log(`Rorando com Express na porta ${port}!`))
