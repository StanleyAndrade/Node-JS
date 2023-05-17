const express = require('express')

const app = express()

//pega dados
app.get("/home", (req, res) => {
    res.status(200).send("<h1>Oi<h1>")
})

//definindo a porta
const port = 8080
app.listen(port, () => console.log(`Rorando com Express na porta ${port}!`))
