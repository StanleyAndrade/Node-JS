//Importando o express + Lembre de importar na pasta index: require('./modules/express')
const express = require('express')

//Inicializando o Express e colocando na variavel router1
const app = express()
const router1 = express.Router()

//importando user_model para usá-lo aqui no express (mas pode usar em qualquer lugar)
const UserModel = require("../src/models/user_model")
//const { default: mongoose } = require('mongoose')

//sinalizando que vai receber JSON
router1.use(express.json())

//EJS - Configurando + mostrando a pasta e o arquivo
app.set("view engine", "ejs")
app.set("views", "src/views") 

//enviando a view
router1.get('/views/users', async (req, res) => {
    const users = await UserModel.find({});
    res.render("index", { users });
})

//Middlewares - função que é executada antes da requisição
router1.use((req, res, next) => {
    console.log(`Request Type: ${req.method}`) //mostra se foi GET, POST, PATCH, PUT ou Delete
    console.log(`Content Type: ${req.headers["content-type"]}`) //mostra o que é e seu tipo: router1lication.json
    console.log(`Date: ${new Date()}`) //mostra dia e hora
    next()
})

//Rotas
router1.get('/', (req, res) => {
    res.send('Sou a Home 1')
})

router1.get('/sobre', (req, res) => {
    res.send('Sobre Nós')
})

//Post 2 TENTATIVA
router1.post("/users", async (req, res) => {
    try {
        const user = await UserModel.create(req.body)
        res.status(200).json(user)
    } catch (error) {
        return res.status(500).send(error.message)
    }
})

dessa forma dá pra colocar dentro de uma função
const novo = mongoose.model('UserModel')

new novo({
    firstName: "Stanley",
    lastName: "jorge",
    email: "oi@gmail.com",
    password: 123456789
}).save()
.then(() => {
    console.log("Salvo com sucrsso")
})
.catch(() => {
    console.log("Erro ao salvar")
})

//POST - enviando dados para o databse
//Obs.: os dados enviados estão no Postman
router1.post("/users", async (req, res) => {
    try {
        const user = await UserModel.create(req.body)
        res.status(200).json(user)
    } catch (error) {
        return res.status(500).send(error.message)
    }
})

//GET - Pegando TODOS os dados do database
router1.get("/users", async (req, res) => {
    try {
        const user = await UserModel.find({})
        res.status(200).json(users)
    } catch (error) {
        return res.status(500).send(error.message)
    }
})

//GET - pegando dados por ID
router1.get("/users/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const user = await UserModel.findById(id)
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).send(error.message)
    }
})

//PATCH - Atualiza partes e não tudo dos dados
router1.patch("/users/:id", async (req, res) => {
    try {
        const id = req.params.id
        const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true})
        res.status(200).json(user)
    } catch (error) {
        return res.status(500).send(error.message)
    }
})

//Delete - Apagando dados
router1.delete("/users/:id", async (req, res) => {
    try {
        const id = req.params.id
        const user = await UserModel.findByIdAndRemove(id)
        res.status(200).json(user)
    } catch (error) {
        return res.status(500).send(error.message)
    }
})

module.exports = router1
