//Forma básica 
var http = require('http')

http.createServer(function(req, res) {
res.end("Funcionou")
}).listen(8080);

console.log("o Servidor está rodando")

//Servidor Nativo
//importando o http
const http = require('http')

//definindo uma porta pro servidor estar disponível
const port = 8080;

//criando o servidor
//req é request(requisição) / res é response(resposta)
const server = http.createServer((req, res) => {
    if (req == './home') { //requisição
        res.writeHead(200, {"Content-Type": "text/html"}) //fala qual tipo de conteúdo estamos enviando p/renderizar; (statuscode)
        res.end("<h1>Oi</h1>") //resposta
    }
})

//colocando servidor online
server.listen(port, () => console.log(`Rodando na porta ${port}`))
