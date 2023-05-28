const fs = require("fs")
const path = require("path")

//Criar uma pasta
// fs.mkdir(path.join(__dirname, "/test"), (error) => {
//     if (error) {
//         return console.log("Ocorreu um erro ao criar a pasta" + error)
//     }
//     console.log("Pasta Criada com sucesso")
// })

//Cria arquivo
fs.writeFile(
    path.join(__dirname, "test", "test.txt"),
    "Conteudo do arquivo",
    (error) => {
        if (error) {
            return console.log("Erro ao criar o arquivo " + error)
        }
        console.log("Arquivo criado com sucesso!")
    },

    //Adicionar à um arquivo
    fs.appendFile(
    path.join(__dirname, "/test", "test.txt"), 
    "Muito novo mesmo",
    (error) => {
        if (error) {
            return console.log("Ocorreu um erro ao salvar o arquivo " + error)
        }
        console.log("Arquivo adicionado com sucesso")
    }
),

    //Ler conteúdo
    fs.readFile(
    path.join(__dirname, "/test", "test.txt"),
    "utf-8",
    (error, data) => {
        if (error) {
            return console.log("Ocorreu um erro na leitura" + error)
        }
        console.log("Dados: " + data)
    }
)
)

