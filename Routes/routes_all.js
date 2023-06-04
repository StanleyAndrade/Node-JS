//Importando o express + Lembre de importar na pasta index: require('./modules/express')
const express = require('express')

//Criando o Router
const router = express.Router()

router.get('/a', (req, res) => {
    res.send('Sou a rota 1')
})

//exportando
module.exports = router
