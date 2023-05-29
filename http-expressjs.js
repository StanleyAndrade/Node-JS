//Lembre de importar o express na pasta index: require('./modules/express')
//Importando o express
const express = require('express')

//Inicializando o Express e colocando numa variável
const app = express()

//GET - HTTP
app.get("/home", (req, res) => {
    res.status(200).send("<h1>Oi<h1>")
})

//GET - HTTP
app.get("/users", (req, res) => {
    const users = [
        {
            name: "Stanley Andrade",
            email: 'stanleyandrade95@gmail.com',
        }
    ]
    res.status(200).json(users)
})

//definindo a porta
const port = 8080

//Função que será executada quando o servidor ficar Online
app.listen(port, () => console.log(`Rorando com Express na porta ${port}!`))
